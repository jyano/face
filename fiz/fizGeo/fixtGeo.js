b2d.fixt = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtParse = function (arr) {

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture
	var func = function (fixt) {
		var len
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {// weird
			return b2d.polySens.apply(null, fixt)
		}
		len = fixt.length
		return (len == 1) ? b2d.circ(fixt[0])
				: (len == 2) ? b2d.poly.apply(null, fixt)
				: (len == 3) ? b2d.circ.apply(null, fixt)
				: b2d.poly.apply(null, fixt)
	}
	return _.map(arr, func)
}
b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.overlapping = function (b1, b2) {
	var v1 = b1.polyVerts(),
			v2 = b2.polyVerts()
	var p = v1.union(v2)
	return !(_.isEqual(p.verts(), v1.verts()) || _.isEqual(p.verts(), v2.verts()))
}
b2d.polyDot = function (verts) {// see f.dots
	var t = 0
	_.each(
			A(verts) ? verts : verts.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t)
				t += 100
			}
	)
}
b2d.fixtParse = function (arr) {
	return _.map(arr, function (fixt) {
		var len
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {
			b2d.polySens = function (kind) {
				return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
			}
			return b2d.polySens.apply(null, fixt)
			return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
		}
		len = fixt.length
		if (len == 1) {
			return b2d.circ(fixt[0])
		}
		else if (len == 2) {
			return b2d.poly.apply(null, fixt)
		}
		else if (len == 3) {
			return b2d.circ.apply(null, fixt)
		}
		return b2d.poly.apply(null, fixt)
	})
}
f.pos = function () {
	var h = this.shp()
	return V(h.m_p.x, h.m_p.y).mult()
}// for circs
f.verts = function () {
	var f = this, b = this.body(), g = G(arguments)
	//local verts
	var verts = _.map(f.shp().m_vertices, b2d.mult)
	//local verts rotated locally by body's rotation
	if (g.p) {
		verts = _.map(verts, function (v) {
			return v.rot(b.rot())
		})
	}
	return verts
}
f.wVerts = f.V = function () {
	var f = this, b = f.body(),
			g = G(arguments)
	//give world verts of fixt rotated (or optionally, not rotated for some reason)
	var verts = g.N ? f.verts('+') : f.verts()
	return _.map(verts, function (v) {
		return v.add(b)
	})
}
f.poly = f.polyVerts = function () {
	return Math.poly(this.V())
}
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
 