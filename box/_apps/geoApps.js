BODVERTS = function () {
	w = b2d.W()
	b = w.B(200, 200, 100, 100).stat()
	b.poly(20, 200)
	fs = b.fixts()
	f1 = fs[0]
	f2 = fs[1]
	p = f1.polyVerts().union(f2.polyVerts())
	b2d.polyDot(p)
	relP = b.rel(p)
	b2d.polyDot(relP)
	w.B(400, 200).conc(relP)
	w.B(500, 400, [-100, 0], [0, -100], [100, 50])
	w.B(500, 430).conc([[-100, 0], [0, -100], [100, 50]])
	//make conc happen automatically whenever array of points specified
	//conCAVE hull??
	//union of 2 non overlapping fixtures, can just result in a body with two fixtures.. yea, why are unions not just creating bodies with all the fixtures?  no need combine two fixtures into one, right???!
}
BODMINUS = function () {
	w = b2d.W()
	b = w.dyn(300, 400).stat()
	f = b.fixt(b2d.poly(100, 100))
	b2 = w.B(300, 400, [
		['r', [-100, 10], [-80, -40], [0, -200], [100, 0]],
		['b', 20, 50]
	]).stat()
	w.dyn(500, 400).stat().sep(b2.minus(b))
}
REDUCE = function () {
	w = b2d.W()
	b = w.dyn(300, 400).stat()
	f = b.poly(100, 200)
	f1 = b.poly(200, 100, 100, 0)
	f2 = b.poly(200, 100, 100, 0, 36)
	f3 = b.poly(20, 20, 200, 0)
	// u =  f.union( [f1,f2] )
	u = b.union()
	b2 = w.stat(600, 300).conc(u).dyn()
	// body.polyVerts() does an automatic union of ALL its verts! i think :)
}
UNIONNOTTOUCHING = function () {
	w = b2d.W()
	b = w.B(200, 200, 100, 100).stat()
	b2 = w.B(400, 400, 100, 100).stat()
	p = b.polyVerts().union(b2.polyVerts())
	_.each(p.verts(), function (v) {
		w.dot(v[0], v[1])
	})
	v1 = b2.polyVerts().verts()
	v2 = p.verts()
	_.isEqual(v1, v2) // true
	p2 = b2.polyVerts().union(b.polyVerts())
	_.each(p2.verts(), function (v) {
		w.dot('r', v[0], v[1])
	})
	b3 = w.B(500, 200, 100, 100).stat()
	b4 = w.B(550, 250, 100, 100).stat()
	p3 = b3.polyVerts().union(b4.polyVerts())
	_.each(p3.verts(), function (v) {
		w.dot(v[0], v[1])
	})
	b5 = w.B(700, 200, 100, 100).stat()
	b6 = w.B(800, 200, 100, 100).stat()
	p4 = b5.polyVerts().union(b6.polyVerts())
	_.each(p4.verts(),
			function (v) {
				w.dot(v[0], v[1])
			})
}