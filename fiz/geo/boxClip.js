Math.poly = function (points) {//gpcas
	var poly = new PolyDefault()
	poly.addPoints(points)
	return poly
}
newX = function (x, y, rad) {
	rad = Math.toRadians(rad)
	return x * Math.cos(rad) - y * Math.sin(rad)
}
newY = function (x, y, rad) {
	rad = Math.toRadians(rad)
	return x * Math.sin(rad) + y * Math.cos(rad)
}
b.verts = function () {//return this.union()
	//it used to just get from the FIRST fixt,
	//but now it unions them all together :)
	//b.verts = function(){ return this.fixt().verts() }
	var num = this.num(), fs, p
	if (num == 0) {
		return
	}
	fs = this.fixts()
	p = fs[0]
	if (num == 1) {
		return p.union(p)
	}
	_.each(_.rest(fs), function (f) {
		f = Math.poly(f)
		p = Math.poly(p.union(f))
	})
	return p
}
b.polygon = function () {
	return Math.poly(this.verts())
}
b.rotVerts = function () {//rotated but local
	var verts = this.verts(),
			b = this
	return _.map(verts, function (v) {
		var x = v.x,
				y = v.y
		return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
	})
}
b.V = b.rotWorVerts = function () {
	var b = this
	return _.map(b.rotVerts(), function (v) {
		return V(v.x + b.X(), v.y + b.Y())
	})
}
b.dff = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
b.DIFF = function (b2) {
	var g = G(arguments),
			b2 = g[0],
			b = this, f = b.fixt(),
			dffV = b.dff(b2).verts()
	b2d.conc(b,
			_.map(dffV, function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			}))
	f.kill()
	b.rot(0)
	if (g.n) {
		b2.kill()
	}
	return this
}
b.DIF = function (b2) {
	var g = G(arguments),
			b2 = g[0]
	this.eachFixt(function (f) {
		f.DIFF(b2)
	})
	if (g.n) {
		b2.kill()
	}
	return this
}
b.wVerts = function () {
	var p = this.transform().position.mult()
	return _.map(this.verts(), function (vert) {
		return vert.add(p)
	})
}
b.wPolygon = function () {
	return Math.poly(this.wVerts())
}
b.polyVerts = function () {
	return Math.poly(this.V())
}
b.conc = b.sep = function (verts) {
	var g = G(arguments),
			verts = g[0],
			col,
			b = this,
			fs, n1, n2, newFixts
	if (U(verts)) {
		return
	}
	if (S(verts[0])) {
		col = verts.shift()
	}
	if (g.n) {
		b.clear()
	}
	n1 = b.num()
	b2d.sep(b, verts)
	if (S(col)) {
		n2 = b.num()
		fs = b.fixts()
		newFixts = _.first(fs, n2 - n1)
		_.each(newFixts, function (f) {
			f.C(col)
		})
	}
	return this
}
b.conc2 = function (col) {
	var g = G(arguments), col = g[0], verts,
			b = this, fs, n1, n2, newFixts
	if (U(col)) {
		return
	}
	verts = S(col) ? _.rest(g) : g
	if (g.n) {
		b.clear()
	}
	n1 = b.num()
	b2d.sep(b, verts)
	if (S(col)) {
		n2 = b.num()
		fs = b.fixts()
		newFixts = _.first(fs, n2 - n1)
		_.each(newFixts, function (f) {
			f.C(col)
		})
	}
	return this
}
b.minusPolyCirc = function (x, y, rad, sides) {
	var b = this
	poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
			function (v) {
				return [v.x + x, v.y + y]
			}))
	verts = b.rel(b.polyVerts().difference(poly))
	b.clear().conc(verts)
	return this
}
b.union = function () {
	var num = this.num(),
			fs = this.fixts()
	if (num == 0) {
		return
	}
	if (num == 1) {
		return fs[0].polyVerts()
	}
	return fs[0].union(_.rest(fs))
}
b.minus = function (fOrB) {
	return this.rel(
			this.polyVerts().difference(fOrB.polyVerts())
	)
}
b.sub = function (a) {
	var p = this.minus(a)
	this.clear()
	this.conc(p)
}
b.subtract = function (a) {
	var g = G(arguments), a = g[0]
	_.each(this.fixts(),
			function (f) {
				f.sub(a)
			})
	if (g.n) {
		a.kill()
	}
	return this
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.map(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
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
BCONVEX = function () {
	w = b2d.W()
	w.ball()
	b = w.dyn(400, 400)
	b.polyArr('r', [
		[-100, 0],
		[0, -100],
		[100, -50]
	])
	b.polyArr([
		[-10, 0],
		[0, -100],
		[100, -50]
	])
	b.polyArr(['b', [-200, 0], [0, -100], [10, 150]])
	b.polyArr('o', [-300, 0], [0, -100], [10, 150])
}
BODYVERTS = function () {
	w = b2d.W()
	w.ball()
	b = w.stat(300, 300)
	f1 = b.poly(100, 50)
	f2 = b.poly(50, 100)
	//p =   f1.union(f2)
	p = b.verts()
	w.stat(600, 200).sep(p)
}