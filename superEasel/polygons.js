function drawSquare(ct, x, y) {
	var h = $H()
	h.a2(ct).f($r())
	h.graphics.dr(5, 5, 70, 70)
	if (x) {
		h.X(x)
	}
	if (y) {
		h.Y(y)
	}
	return h
}
 
h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
	var h = this,
			numVerts = poly.length
	_.each(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
	var h = this,
			numVerts = poly.length
	_.each(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
function verts() {
	h.vsOld = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.$vs = function (polVs, ox, oy) {// only alpha~~~~~!!!!
		if (gpc.iP(polVs)) {
			polVs = polVs.vs()
		}
		return this.vs(polVs, ox, oy)
	}
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.$vs = alpha = function (polVs, ox, oy) {
		if (gpc.iP(polVs)) {
			polVs = polVs.vs()
		}
		return this.vs(polVs, ox, oy)
	}
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C);
	if (c) {
		h.c(c)
	}
	_.e(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this
	h.f(fc).s(sc)
	_.each(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C);
	if (c) {
		h.c(c)
	}
	_.e(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this
	h.f(fc).s(sc)
	_.each(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C)
	if (c) {
		h.c(c)
	}
	_.each(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
function polyStarDiamond() {
	h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
						O(g.f) ? g.f : {}
		o.a = N(o.a, 0);
		o.x = N(o.x, 0);
		o.y = N(o.y, 0)
		o.p = _.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
	cjs.diamond = function self(width, height, fc, sc) {
		fc = fc || 'green'
		sc = sc || 'white'
		width = width || 100
		height = height || width
		halfwidth = width / 2
		halfheight = height / 2
		var h = new createjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(0, -halfheight)
				.lt(-halfwidth, 0).lt(0, halfheight)
				.lt(halfwidth, 0).lt(0, -halfheight)
		return h
	}
	cjs.diamond = function self(width, height, fc, sc) {
		fc = fc || 'green'
		sc = sc || 'white'
		width = width || 100
		height = height || width
		halfwidth = width / 2
		halfheight = height / 2
		var h = new createjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(0, -halfheight)
				.lt(-halfwidth, 0).lt(0, halfheight)
				.lt(halfwidth, 0).lt(0, -halfheight)
		return h
	}
	cjs.diamond = function (w, h, fc, sc) {
		var h = $H(), gx = h.graphics;
		fc = fc || 'green';
		sc = sc || 'white';
		w = w || 100;
		h = h || w
		var hW = w / 2
		var hH = h / 2
		//var h = new cjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(0, -hW)
				.lt(-hW, 0).lt(0, hW)
				.lt(hW, 0).lt(0, -hW)
		//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
		return h
	}
	h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
						O(g.f) ? g.f : {}
		o.a = N(o.a, 0);
		o.x = N(o.x, 0);
		o.y = N(o.y, 0)
		o.p = _.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
	h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :
						O(g[0]) ? g[0] : {}
		o.a = _.tN(o.a)
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.p = _.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
	h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :
						O(g[0]) ? g[0] : {}
		o.a = _.tN(o.a)
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.p = cjs.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
}
