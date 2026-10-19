import json, os, subprocess, sys
S, OUT = sys.argv[1], sys.argv[2]
d = json.load(open(f'{S}/inventory.json'))
PACK = {'arena-surf-dm-maps':'arena','g2gfast-maps':'g2gfast','game-playground-maps':'playground','hide-n-seek-maps':'hide-n-seek','mg-prop-hunt-maps':'prop-hunt','murder-mystery-maps':'murder-mystery','zombie-zone-maps':'zombie-zone','mg-deathrun-maps':'deathrun','mg-wipeout-maps':'wipeout'}  # external map packs only: maps that ship inside a game are not listed
REPO = {'game-arena':'arena','game-g2gfast':'g2gfast','game-hide-n-seek':'hide-n-seek','game-hungario':'hungario','game-murder-mystery':'murder-mystery','game-playground':'playground','game-zombie-zone':'zombie-zone','mg-prop-hunt':'prop-hunt','mg-buses-from-hell':'buses-from-hell','mg-dangerous-delivery':'dangerous-delivery','mg-deathrun':'deathrun','mg-look-at-me':'look-at-me','mg-smash-copter':'smash-copter','mg-wipeout':'wipeout'}
def conv(src, dst, w):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    if not os.path.exists(dst):
        subprocess.run(['magick', src, '-resize', f'{w}x>', '-quality', '78', dst], check=True)
def score(path):
    # Brightness plus contrast, 0-100: how well a shot reads as a small
    # thumbnail. The game page previews the highest-scoring maps.
    out = subprocess.run(['magick', path, '-colorspace', 'Gray', '-format', '%[fx:100*(mean+standard_deviation)]', 'info:'], capture_output=True, text=True, check=True).stdout
    return round(float(out))
def local(p): return f'{S}/shots{p}'
for g in d['games']:
    if g['iconOrScreenshot']:
        conv(local(g['iconOrScreenshot']), f'{OUT}/public/images/games/{REPO[g["repo"]]}.webp', 1600)
maps = {}
for pack, lst in d['maps'].items():
    slug = PACK.get(pack)
    if not slug: continue
    rows = []
    for m in lst:
        shot = m.get('screenshot')
        if shot and pack == 'mg-look-at-me' and 'mg-look-at-me' not in shot: shot = None  # cross-repo mismatch
        img = None
        if shot:
            img = f'/images/maps/{slug}/{m["id"]}.webp'
            conv(local(shot), OUT + '/public' + img, 960)
        author = m.get('author')
        if author in (pack, 'TMC') or (author and author.startswith(('mg-', 'game-'))): author = None
        rows.append({'id': m['id'], 'name': m['name'], 'image': img, 'score': score(OUT + '/public' + img) if img else None, 'author': author,
                     'originalGame': (m.get('originalGame') or '').replace(', inferred', '').replace(' (Source)', '').replace(' inferred','') or None,
                     'originalMap': m.get('originalMapName')})
    maps[slug] = {'repo': pack, 'maps': rows}
open(f'{OUT}/src/data/maps.json', 'w').write(json.dumps(maps, indent=2, ensure_ascii=False) + '\n')
print({k: len(v['maps']) for k, v in maps.items()})
