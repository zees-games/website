#!/usr/bin/env bash
# Re-shoot map screenshots from scripts/map-views.json (read-only on the game repos, nothing committed there).
#   scripts/map-shot/run.sh <poses.json> <arena|g2gfast> <outdir> [WxH]     # e.g. map-views.json arena /tmp/out 1600x900
#   Poses of other games in the file are skipped. Output: <outdir>/<id>.png (window size WxH, default 1600x900).
#   Then: magick <id>.png -resize 960x -quality 78 public/images/maps/<game>/<id>.webp
# GAME_DIR=<dir on dev02> renders against a copy of the game (when the real one has uncommitted breakage).
# Runs on x-tmc-dev02 over ssh, but the frames are drawn on a GPU box (the laptop's GTX 1660 Ti
# or the desktop's RTX 2070, Forward+ on Vulkan) through ~/godot/gpu.sh shot: dev01 cannot run
# Godot heavily and dev02 only has llvmpipe, which hides distance problems. gpu.sh copies the
# game and the poses over, and the frames back to dev02's $tmp/out; with no box free it renders on
# dev02 through heavy (check lane) and says so. GPU_OFFLOAD=0 forces dev02, as does GAME_DIR.
# Needs xvfb-run and ~/godot/game-{arena,g2gfast} on dev02.
set -euo pipefail
poses=$1 game=$2 out=$3 size=${4:-1600x900}
here=$(cd "$(dirname "$0")" && pwd)
tmp=/tmp/map-shot-$$
python3 -c "
import json,sys
d=json.load(open('$poses'));print(json.dumps({k:v for k,v in d.items() if v.get('game','$game')=='$game' and not k.startswith('_')}))" > /tmp/poses-$$.json
SSH="ssh -i $HOME/.ssh/dev02 x-tmc-dev02"
$SSH "mkdir -p $tmp"
scp -q -i ~/.ssh/dev02 "$here/shot.gd" x-tmc-dev02:$tmp/shot.gd
scp -q -i ~/.ssh/dev02 /tmp/poses-$$.json x-tmc-dev02:$tmp/poses.json
if [ -n "${GAME_DIR:-}" ]; then
  RUN="cd $GAME_DIR && timeout 900 heavy --lane check --"
else
  RUN="cd ~/godot && timeout 1500 ./gpu.sh shot --stage $tmp --pull $tmp/out game-$game"
fi
$SSH "export PATH=\$HOME/.local/bin:\$PATH; $RUN xvfb-run -a godot --path . --resolution $size --script $tmp/shot.gd -- --game $game --poses $tmp/poses.json --out $tmp/out ${PROBE:+--probe $PROBE} ${CELLS:+--cells $CELLS} ${MINN:+--minn $MINN} 2>&1 | grep -E 'shot|probe|ERROR|SCRIPT|WARN' | grep -v leaked | tail -600"
mkdir -p "$out"; scp -q -i ~/.ssh/dev02 "x-tmc-dev02:$tmp/out/*.png" "$out/"
$SSH "rm -rf $tmp"; rm -f /tmp/poses-$$.json
