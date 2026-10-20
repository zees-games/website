extends SceneTree

## Renders map screenshots from named camera poses. Run against a game project, never edits it.
##   godot --path <game> --script <abs>/shot.gd -- --game arena|g2gfast --poses poses.json --out /dir [--size 960x540]
## poses.json: { "<key>": { "map": "<id, defaults to key>", "from": [x,y,z], "at": [x,y,z], "fov": 75, "top": false } }
## Coordinates are Godot metres/units (g2gfast: godot = (src.x, src.z, -src.y)). fov is vertical degrees.
## Writes <out>/<key>.png. "env": false in a pose drops the map's own environment (neutral stage).

var _args := {}

func _initialize() -> void:
	var a := OS.get_cmdline_user_args()
	for i in range(0, a.size() - 1, 2):
		_args[a[i]] = a[i + 1]
	_run.call_deferred()

func _vec(v: Array) -> Vector3:
	return Vector3(v[0], v[1], v[2])

func _run() -> void:
	var game: String = _args.get("--game", "g2gfast")
	var poses: Dictionary = JSON.parse_string(FileAccess.get_file_as_string(_args["--poses"]))
	var out: String = _args.get("--out", "/tmp/shots")
	DirAccess.make_dir_recursive_absolute(out)
	var by_map := {}
	for k in poses:
		by_map.get_or_add(poses[k].get("map", k), []).append(k)
	var cam := Camera3D.new()
	cam.far = 20000.0
	for id in by_map:
		var holder := Node3D.new()
		root.add_child(holder)
		var ok := false
		if game == "arena":
			var AM = load("res://maps/arena_map.gd")
			var AL = load("res://maps/arena_map_lighting.gd")
			var map = AM.by_id(StringName(id))
			if map != null:
				holder.add_child(map.to_scene())
				holder.add_child(AL.build(map))
				ok = true
		else:
			var cat = load("res://game/g2g_map_catalogue.gd").discover()
			var def = cat.get_map(StringName(id))
			if def != null:
				var node: Node3D = (load(def.scene_path) as PackedScene).instantiate()
				if node.has_method("build_from"):
					node.build_from(def)
				holder.add_child(node)
				ok = true
		if not ok:
			push_error("shot: no map %s" % id)
			holder.queue_free()
			continue
		holder.add_child(cam)
		for _i in 4:
			await process_frame
		var box := AABB()
		var first := true
		for mi in _meshes(holder):
			var b: AABB = mi.global_transform * mi.get_aabb()
			box = b if first else box.merge(b)
			first = false
		print("[shot] %s aabb pos=%s size=%s" % [id, box.position, box.size])
		if holder.get_child(0).has_method("spawn_for"):
			print("[shot] %s spawn0=%s" % [id, holder.get_child(0).spawn_for(0)])
		if _args.has("--probe"):
			_probe(holder, _args["--probe"].split(","))
		for k in by_map[id]:
			var p: Dictionary = poses[k]
			var env := _envs(holder)
			if p.get("env", true) == false:
				for e in env:
					e.environment = null
			cam.fov = float(p.get("fov", 75.0))
			cam.global_position = _vec(p["from"])
			cam.look_at(_vec(p["at"]), Vector3.UP)
			cam.current = true
			for _i in 4:
				await process_frame
				await RenderingServer.frame_post_draw
			var img := root.get_texture().get_image()
			if _args.has("--size"):
				var s: PackedStringArray = _args["--size"].split("x")
				img.resize(int(s[0]), int(s[1]), Image.INTERPOLATE_LANCZOS)
			img.save_png(out.path_join("%s.png" % k))
			print("[shot] wrote %s" % k)
		holder.remove_child(cam)
		holder.queue_free()
		await process_frame
	quit()

func _envs(n: Node) -> Array:
	var r := []
	if n is WorldEnvironment:
		r.append(n)
	for c in n.get_children():
		r.append_array(_envs(c))
	return r

func _meshes(n: Node) -> Array:
	var r := []
	if n is MeshInstance3D:
		r.append(n)
	for c in n.get_children():
		r.append_array(_meshes(c))
	return r

## --probe x0,y0,z0,x1,y1,z1: per surface, the bounds of the vertices inside that box (to find walls, ramps, text).
func _probe(holder: Node, w: PackedStringArray) -> void:
	var lo := Vector3(float(w[0]), float(w[1]), float(w[2]))
	var hi := Vector3(float(w[3]), float(w[4]), float(w[5]))
	for mi in _meshes(holder):
		var m: Mesh = mi.mesh
		for i in m.get_surface_count():
			var v: PackedVector3Array = m.surface_get_arrays(i)[Mesh.ARRAY_VERTEX]
			var b := AABB()
			var n := 0
			if _args.has("--cells") and (_args["--cells"] == "*" or m.surface_get_name(i).contains(_args["--cells"])):
				var cells := {}
				for x in v:
					x = mi.global_transform * x
					var c := Vector3i((x / 25.0).floor())
					cells[c] = cells.get(c, 0) + 1
				for c in cells:
					if cells[c] >= int(_args.get("--minn", "2")):
						print("[probe] cell %s %s*25 n=%d" % [m.surface_get_name(i), c, cells[c]])
			for x in v:
				x = mi.global_transform * x
				if x.x >= lo.x and x.y >= lo.y and x.z >= lo.z and x.x <= hi.x and x.y <= hi.y and x.z <= hi.z:
					b = AABB(x, Vector3.ZERO) if n == 0 else b.expand(x)
					n += 1
			if n > 0:
				print("[probe] %s n=%d min=%s max=%s" % [m.surface_get_name(i), n, b.position.snapped(Vector3(0.1,0.1,0.1)), b.end.snapped(Vector3(0.1,0.1,0.1))])
