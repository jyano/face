f.poly = f.polyVerts = function () {
	return Math.poly(this.V())
}
// dif
f.sub = f.DIF = f.DIFF = function (b2) {
	var f = this, g = G(arguments), b2 = g[0]
	f.body().conc(f.minus(b2))
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
}
f.minus = f.diff = function (bOrF) {
	var f = this, b = f.body(), verts, poly
	//can handle a fixt OR a body! or even a gPoly itself!
	poly = f.polyVerts().difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	_.each(_.rest(arguments), function (bOrF) {
		poly = poly.difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	})
	if (b2d.hasVerts(poly)) {
		return b.rel(poly)
	}
}
/// uni
f.union = function (f2) {
	var f = this,
			b = f.body(), p //can handle a fixt OR a body!
	if (A(f2)) {
		return this.union.apply(this, f2)
	}
	p = f.polyVerts().union(
			f2.polyVerts()
	)
	_.each(_.rest(arguments), function (f) {
		p = p.union(f.polyVerts())
	})
	return b.rel(p)
}
FVS = function () {
	W()
	b = w.D(300, 300, 'r', [[80, 40, 0, 0, 3]])
	f = b.f()
	//f1 = b.cir(20)
	f.vs()
}
b.polyClone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		b.poly.apply(b, _.map(f.verts(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b
}
b.clone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		var h, x, y, r
		if (f.isCirc()) {
			h = f.shape()
			x = h.m_p.x * 30
			y = h.m_p.y * 30
			r = h.m_radius * 30
			b.circ(r, x, y)
		}
		else {
			b.poly(f.verts())
		}
	})
	return b
}
 
b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
	$l('b.reg')
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v);
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}