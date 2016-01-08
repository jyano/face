$L(


'color','cirs','recs','path','mtLt','curves',
'bmFill','textt','filts', 'gxs', 'grad',  'apps')
 
function cirs(){
	cjs.circ = cjs.circle = function (rad, fCol, sCol) {
		if (!N(rad)) {
			return cjs.circ(8, rad)
		}
		fc = oO('c', fc || 'z')
		var h
		h = $Sh()
		h.f(fc)
		h.circle(0, 0, rad)
		return h
	}
	cjs.cir0 = cjs.circle3 = function (x, y, rad, fCol, sCol) {
		var h = $Sh().X(x || 0).Y(y || 0)
		if (O(x)) {
			return cir0(x.x, x.y, x.r, x.fc, x.sc)
		}
		x = x || 0
		y = y || 0
		r = r || 8
		fc = fc || 'w'
		sc = sc || 'z'
		if (fCol) {
			h.f(fCol)
		}
		if (sCol) {
			h.s(sCol)
		}
		h.circle(x, y, r, fc, sc)
		SL(h)
		return h
	}
	cjs.rim = cjs.circle2 = function (rad, lineWid, x, y) {
		var z = lineWid
		var gx = $Gx()
		if (!S(r)) {
			return circle2('red', rad, z, x)
		}
		z = N(z) ? z : 32
		x = N(x) ? x : 100
		y = N(y) ? y : 100
		gx.ss(z / 8)
		gx.f(r, 'black')
		gx.dc(0, 0, z)
		return $Sh(gx).XY(x || 0, y || 0)
	}
	cjs.cir = function () {
		var g = G(arguments)
		var o = cjs.cir.g(g)
		var h = $Sh()
		o.r = N(o.r, 50)
		o.c = o.c || 'w'
		o.C = o.C || 'z'
		o.l = N(o.l, 4)
		h.dc(o.r, o.c, o.C, o.l)
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		if (N(o.x)) {
			h.regX = -o.x
		}
		if (N(o.y)) {
			h.regY = -o.y
		}
		h.alpha = N(o.al, 1)
		return h
	}
	cjs.cir.g = function (g) {
		var o = g.O ? g.f :
				N(g.f) && N(g.s) && N(g.t) ?
				{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
						N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
								N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
								{c: g.f, C: g.s, l: g.t}
		return o
	}
	h._dc = function () {
		var h = this
		h.graphics.dc.apply(h.graphics, arguments)
		return this
	}
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		gx.dc(o.x, o.y, o.r)
		return h
	}
	h.cir = function () {
		var h = this, gx = h.graphics,
				g = G(arguments), o
		if (g.A) {
			return $a(h, 'cir', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f : N(g.t) ?
		{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
		{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
				g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
				{c: g.f, C: g.s, l: g.t}
		//h.c(o)
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
		if (o.bf) {
			if (N(o.bf)) {
				o.bm = 'me'
			}
			if (F(Q)) { //async
				h.bf(o.bf, function () {
					h.dc(o)
				})
			}
			else { //sync
				o.tf = o.tf || null;
				h.bf(o.bf, o.tf).dc(o)
			}
		}
		else {
			h.dc(o)
		}
		h.alpha = N(o.al, 1)
		return h
	} // h.circ h.circle = h.cir2 = h.cir = 
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
	h._dc = function () {
	var h = this
	h.graphics.dc.apply(h.graphics, arguments)
	return this
}
h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	gx.dc(o.x, o.y, o.r)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics,
			g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
	{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
			g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
			{c: g.f, C: g.s, l: g.t}
	//h.c(o)
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	h.cp()
	h._dc(o)
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
} // h.circ h.circle = h.cir2 = h.cir = 
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
}
function recs(){
	$Rec = function (a, b, c, d) {
		return new cjs.Rectangle(a, b, c, d)
	}
	h._dr = function () {
		this.graphics.dr.apply(
				this.graphics, arguments)
		return this
	}
	h.dr = function () {
		var h = this, gx = h.graphics, g = G(arguments),
				o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
		o.x = N(o.x, 0);
		o.y = N(o.y, 0);
		o.w = N(o.w, 100);
		o.h = N(o.h, o.w)
		gx.dr(o.x, o.y, o.w, o.h)
		return h
	}
	h.dr2 = function (x, y, W, H) {
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.dr2(g)
			});
			return h
		}
		o = g.O ? g.f :
				U(g.t) ? {w: g.f, h: g.s} :
				{x: g.f, y: g.s, w: g.t, h: g[3]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w)
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
		var gx = this.graphics
		if (fc) {
			gx.f(fc)
		}
		if (sc) {
			gx.s(fc)
		}
		gx.dr(x, y, w, h)
		return this
	}
	h.rec = function () {
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.rec(g)
			});
			return h
		}
		o = g.O ? g.f :
				S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
						g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
								N(g.t) ?
								{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
								{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w)
		if (o.i) {
			h.bf(o.i, function () {
				o.i = null;
				h.rec(o)
			})
			return h
		}
		if (o.c) {
			h.c(o)
		}
		if (o.lf) {
			h.lf({
				c1: o.c1 || 'z', c2: o.c2 || 'w',
				s1: 0, s2: 1,
				x: o.x - o.w / 2, y: o.y - o.h / 2,
				x2: o.x - o.w / 2, y2: o.y + o.h / 2
			})
		}
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h._dr = function () {
	this.graphics.dr.apply(
			this.graphics, arguments)
	return this
}
h.dr = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
	o.x = N(o.x, 0);
	o.y = N(o.y, 0);
	o.w = N(o.w, 100);
	o.h = N(o.h, o.w)
	gx.dr(o.x, o.y, o.w, o.h)
	return h
}
h.dr2 = function (x, y, W, H) {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.dr2(g)
		});
		return h
	}
	o = g.O ? g.f :
			U(g.t) ? {w: g.f, h: g.s} :
			{x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
	var gx = this.graphics
	if (fc) {
		gx.f(fc)
	}
	if (sc) {
		gx.s(fc)
	}
	gx.dr(x, y, w, h)
	return this
}
h.rec = function () {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.rec(g)
		});
		return h
	}
	o = g.O ? g.f :
			S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
					g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
							N(g.t) ?
							{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
							{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	if (o.i) {
		h.bf(o.i, function () {
			o.i = null;
			h.rec(o)
		})
		return h
	}
	if (o.c) {
		h.c(o)
	}
	if (o.lf) {
		h.lf({
			c1: o.c1 || 'z', c2: o.c2 || 'w',
			s1: 0, s2: 1,
			x: o.x - o.w / 2, y: o.y - o.h / 2,
			x2: o.x - o.w / 2, y2: o.y + o.h / 2
		})
	}
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
	cjs.rect2 = function self(width, height, x, y, fc, sc) {
		width = width || 100
		height = height || width
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new createjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth + x, -halfheight + y)
				.lt(-halfwidth + x, halfheight + y)
				.lt(halfwidth + x, halfheight + y)
				.lt(halfwidth + x, -halfheight + y)
				.lt(-halfwidth + x, -halfheight + y)
		return h
	}
	cjs.rect = function self(width, height, fc, sc) {
		width = width || 100
		height = height || width
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new cjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth, -halfheight)
				.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
				.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
		return h
	}
}
function path(){
h.ef = function () {
	this.graphics.endFill.apply(
			this.graphics, arguments)
	return this
}
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.clr = h.z = h.clear = function () {
	this.graphics.clear();
	return this
}
	h.ef = function () {
		this.graphics.endFill.apply(
				this.graphics, arguments)
		return this
	}
	h.es = function () {
		var h = this, gx = h.graphics
		gx.es()
		return h
	}
	h.cp = function () {
		this.graphics.cp();
		return this
	}
	h.clr = h.z = h.clear = function () {
		this.graphics.clear();
		return this
	}
}
function mtLt(){
	h._lt = function (x, y) {
		var v = V(x, y)
		this.graphics.lt(v.x, v.y)
		return this
	}
	h.lt = h._lt = function (x, y) {
		var h = this, gx = h.graphics, g = G(arguments)
		//A(a) && O(a[0])
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
			return h
		}
		O(g.s) ?
				g.e(function (pt) {
					h.lt(pt)
				}) :
				gx.lt(V(x, y).x, V(x, y).y)
		return h
	}
	h.lt = function (x, y) {
		var h = this, g = G(arguments)
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
		}
		else if (O(g.s)) {
			g.e(function (pt) {
				h.lt(pt)
			})
		}
		else {
			this.graphics.lt(V(x, y).x, V(x, y).y)
		}
		return this
	}
	h._mt = function (x, y) {
		var g = G(arguments)
		var pt = V(g.f, g.s)
		this.graphics.mt(pt.x, pt.y)
		return this
	}
	h._mt = function (x, y) {
		var v = V(x, y)
		this.graphics.mt(v.x, v.y)
		return this
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h._lt = function (x, y) {
	var v = V(x, y)
	this.graphics.lt(v.x, v.y)
	return this
}
h.lt = h._lt = function (x, y) {
	var h = this, gx = h.graphics, g = G(arguments)
	//A(a) && O(a[0])
	if (AO(g.f)) {
		g.e(function (v) {
			h.lt.apply(h, v)
		})
		return h
	}
	O(g.s) ?
			g.e(function (pt) {
				h.lt(pt)
			}) :
			gx.lt(V(x, y).x, V(x, y).y)
	return h
}
h.lt = function (x, y) {
	var h = this, g = G(arguments)
	if (AO(g.f)) {
		g.e(function (v) {
			h.lt.apply(h, v)
		})
	}
	else if (O(g.s)) {
		g.e(function (pt) {
			h.lt(pt)
		})
	}
	else {
		this.graphics.lt(V(x, y).x, V(x, y).y)
	}
	return this
}
h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h._mt = function (x, y) {
	var v = V(x, y)
	this.graphics.mt(v.x, v.y)
	return this
}
h.mt = function () {
	var g = G(arguments), o
	if (g.N) {
		return this._mt(g.f, g.s)
	}
	o = AO(g) ? {
		firPt: _.f(g.f), restPts: _.r(g.f),
		ox: g.s, oy: g.t
	} : {firPt: g.f, restPts: g.r}
	return this._mt(
			o.firPt[0] + N(o.ox, 0),
			o.firPt[1] + N(o.oy, 0)
	).lt(M.os(o.restPts, o.ox, o.oy))
}
h.mt = function () {
	var g = G(arguments), o
	if (g.N) {
		return this._mt(g.f, g.s)
	}
	o = AO(g) ? {
		firPt: _.f(g.f), restPts: _.r(g.f),
		ox: g.s, oy: g.t
	} : {firPt: g.f, restPts: g.r}
	return this._mt(
			o.firPt[0] + N(o.ox, 0),
			o.firPt[1] + N(o.oy, 0)
	).lt(M.os(o.restPts, o.ox, o.oy))
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
}
function curves() {
	h.arc = h._a = function (x, y, r, startA, endA, aCW) {
		var h = this, gx = h.graphics
		/*
		 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
		 For example, to draw a full circle with a radius of 20 centered at (100, 100):
		 arc(100, 100, 20, 0, Math.PI*2)
		 */
		h.arc(x, y, r, startA, endA, aCW)
		return h
	}
	h.arc2 = h._a2 = function (x, y, X, Y, r) {
		var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
		gx.arcTo(x, y, X, Y, r)
		return h
	}
	h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
		var h = this,
				gx = h.graphics
		gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		return h
	}
	h._qt = function (cpx, cpy, x, y) {
		var h = this, gx = h.graphics
		gx.quadraticCurveTo(cpx, cpy, x, y)
		return h
	}
	h.qt = function (a, b, c, d, e, f) {
		var h = this, gx = h.graphics
		if (O(a)) {
			a = V(a)
			b = V(b)
			gx.qt(a.x, a.y, b.x, b.y)
		}
		else {
			gx.qt(a, b, c, d, e, f)
		}
		return h
	}
	h.de = h.ell = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
						N(g.f) ? {w: g.f, h: g[1]} :
								O(g.f) ? g.f : {}
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.w = _.tN(o.w, 100)
		o.h = _.tN(o.h, o.w)
		gx.drawEllipse(o.x, o.y, o.w, o.h)
		return h
	}
	h.de2 = function (x, y, W, H, r) {
		var h = this
		h.de(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h._rr = function () {
		this.graphics.rr.apply(this.graphics, arguments)
		return this
	}
	h.rr = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
						N(g[1]) ? {w: g.f, r: g[1]} :
								N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
										O(g.f) ? g.f : {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 100)
		o.h = N(o.h, o.w)
		return h._rr(o.x, o.y, o.w, o.h, o.r)
	}
	h.rr2 = function (x, y, W, H, r) {
		var h = this
		h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h.rc = h.roundRectComplex = function () {
		var h = this, gx = h.graphics
		gx.drawRoundRectComplex.apply(gx, arguments)
		return h
	}
	h.arc = h._a = function (x, y, r, startA, endA, aCW) {
		var h = this, gx = h.graphics
		/*
		 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
		 For example, to draw a full circle with a radius of 20 centered at (100, 100):
		 arc(100, 100, 20, 0, Math.PI*2)
		 */
		h.arc(x, y, r, startA, endA, aCW)
		return h
	}
	h.arc2 = h._a2 = function (x, y, X, Y, r) {
		var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
		gx.arcTo(x, y, X, Y, r)
		return h
	}
	h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
		var h = this,
				gx = h.graphics
		gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
		return h
	}
	h._qt = function (cpx, cpy, x, y) {
		var h = this, gx = h.graphics
		gx.quadraticCurveTo(cpx, cpy, x, y)
		return h
	}
	h.qt = function (a, b, c, d, e, f) {
		var h = this, gx = h.graphics
		if (O(a)) {
			a = V(a)
			b = V(b)
			gx.qt(a.x, a.y, b.x, b.y)
		}
		else {
			gx.qt(a, b, c, d, e, f)
		}
		return h
	}
	h.de = h.ell = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
						N(g.f) ? {w: g.f, h: g[1]} :
								O(g.f) ? g.f : {}
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.w = _.tN(o.w, 100)
		o.h = _.tN(o.h, o.w)
		gx.drawEllipse(o.x, o.y, o.w, o.h)
		return h
	}
	h.de2 = function (x, y, W, H, r) {
		var h = this
		h.de(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h._rr = function () {
		this.graphics.rr.apply(this.graphics, arguments)
		return this
	}
	h.rr = function () {
		var h = this,
				gx = h.graphics,
				g = G(arguments),
				o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
						N(g[1]) ? {w: g.f, r: g[1]} :
								N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
										O(g.f) ? g.f : {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 100)
		o.h = N(o.h, o.w)
		return h._rr(o.x, o.y, o.w, o.h, o.r)
	}
	h.rr2 = function (x, y, W, H, r) {
		var h = this
		h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
		return h
	}
	h.rc = h.roundRectComplex = function () {
		var h = this, gx = h.graphics
		gx.drawRoundRectComplex.apply(gx, arguments)
		return h
	}
}
function poly() {
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
	}
	h.same = h.copy = function () {
		return $h(this) // cjs.shape(this)
	}
	h.poly = function (vxs, f, s, wd) {
		h.poly = function (verts, f, s, width) {
			var that = this, gx = this.graphics
			if (N(verts[0])) //verts passed in directly
			{
				_.each(arguments,
						function (vert) {
							gx.lt(vert[0], vert[1])
						});
				gx.cp()
			}
			else {
				this.graphics.fs(f, s, width)
				{
					_.e(verts, function (vert) {
						gx.lt(vert[0], vert[1])
					});
					gx.cp()
				}
			}
			return this
		}
		h.poly = function (verts, f, s, width) {
			var that = this, gx = this.graphics
			if (N(verts[0])) { //verts passed in directly
				_.e(arguments,
						function (vert) {
							gx.lt(vert[0], vert[1])
						});
				gx.cp()
			}
			else {
				this.graphics.fs(f, s, width)
				{
					_.e(verts, function (vert) {
						gx.lt(vert[0], vert[1])
					});
					gx.cp()
				}
			}
			return this
		}
		var h = this, g = arguments
		h.fs(f, s, wd)
		if (A(vxs) && N(vxs[0])) {
			_.e(g, function (v) {
				h.lt(v[0], v[1])
			})
		}
		else {
			_.e(vxs, function (v) {
				h.lt(v)
			})
		}
		return h.cp()
	}
	h.pol = function () {
		var h = this, g = G(arguments), o;
		//O$ >>  O(o) && !F(o) && !A(o)
		o = O$(g.f) ? g.f :
				N(g.s) && N(g.t) ?
				{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
				{v: g.f, c: g.s, C: g.t, l: g.fo}
		o.v = M.os(o.v, o.x, o.y)
		o = oDef(o || {})
		h.ef().es().c(o)
		if (o.bf) {
			var bf = S(o.bf) ? o.bf : 'me'
			h.bf(bf, function draw() {
				h.mt(o.v).cp()
			})
		}
		else {
			h.lt(o.v)
			h.cp()
		}
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
//below was old ! :
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
	h.bf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (O(g.f) && A(g.f.hs)) {
			o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
		}
		else {
			o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
		}
		o.i = o.i || 'me'
		if (!Q.ran) {
			if (o.hs) {
				$.i(o.i, function (i) {
					_bf(i, o.mx);
					if (o.fn) {
						_.e(o.hs, o.fn)
					}
				})
			}
			else if (S(o.i)) {
				$.i(o.i, function (i) {
					_bf(i, o.mx, o.fn)
				})
			}
		}
		else if (S(o.i)) {
			_bf(Q.i(o.i), o.mx, o.fn)
		}
		else {
			_bf(o.i, o.mx)
		}
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = {
						i: g.f,
						mx: A(g.s) ? $Mx(g.s) : g.s,
						fn: _.tFn(g.t),
						hs: g[3]
					}
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
	}
	h.bf1 = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s} :
				{i: g.f, mx: g.s, fn: g.t}
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o.mx, o.fn)
				if (o.hs) {
					_.e(o.hs, o.fn)
				}
			})
		}
		if (S(o.i)) {
			o.i = Q.i(o.i)
		}
		_bf(o.i, o.mx, o.fn)
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
							F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
							{i: g.f, mx: g.s, hs: g.t}
			o.i = S(o.i) ? Q.i(o.i) : o.i
			o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
			o.fn = _.tFn(o.fn)
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) :
					o.fn(h)
		}
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
	h.$vs = function (polVs, ox, oy) {// only alpha~~~~~!!!!
		if (gpc.iP(polVs)) {
			polVs = polVs.vs()
		}
		return this.vs(polVs, ox, oy)
	}
	function drawPoly() {
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
//alpha:
		h.$vs = function (polVs, ox, oy) {
			if (gpc.iP(polVs)) {
				polVs = polVs.vs()
			}
			return this.vs(polVs, ox, oy)
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
		h.poly = function (vxs, f, s, wd) {
			h.poly = function (verts, f, s, width) {
				var that = this, gx = this.graphics
				if (N(verts[0])) //verts passed in directly
				{
					_.each(arguments,
							function (vert) {
								gx.lt(vert[0], vert[1])
							});
					gx.cp()
				}
				else {
					this.graphics.fs(f, s, width)
					{
						_.e(verts, function (vert) {
							gx.lt(vert[0], vert[1])
						});
						gx.cp()
					}
				}
				return this
			}
			h.poly = function (verts, f, s, width) {
				var that = this, gx = this.graphics
				if (N(verts[0])) { //verts passed in directly
					_.e(arguments,
							function (vert) {
								gx.lt(vert[0], vert[1])
							});
					gx.cp()
				}
				else {
					this.graphics.fs(f, s, width)
					{
						_.e(verts, function (vert) {
							gx.lt(vert[0], vert[1])
						});
						gx.cp()
					}
				}
				return this
			}
			var h = this, g = arguments
			h.fs(f, s, wd)
			if (A(vxs) && N(vxs[0])) {
				_.e(g, function (v) {
					h.lt(v[0], v[1])
				})
			}
			else {
				_.e(vxs, function (v) {
					h.lt(v)
				})
			}
			return h.cp()
		}
		h.pol = function () {
			var h = this, g = G(arguments), o;
			//O$ >>  O(o) && !F(o) && !A(o)
			o = O$(g.f) ? g.f :
					N(g.s) && N(g.t) ?
					{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
					{v: g.f, c: g.s, C: g.t, l: g.fo}
			o.v = M.os(o.v, o.x, o.y)
			o = oDef(o || {})
			h.ef().es().c(o)
			if (o.bf) {
				var bf = S(o.bf) ? o.bf : 'me'
				h.bf(bf, function draw() {
					h.mt(o.v).cp()
				})
			}
			else {
				h.lt(o.v)
				h.cp()
			}
			return h
		}
	}
}
function bmFill() {
	cjs.HSL = function (a, b, c) {
		return U(a) ?
				HSL(M.r() * 360, 100, 50) :
				cjs.Graphics.getHSL(a, b, c)
	}
	h._bf = function (i, tf) {
		this.graphics._bf(i, tf)
		return this
	}
	h.bf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		else {
			_bf(S(o.i) ? Q.i(o.i) : o.i, o)
		}
		return h
		function _bf(i, o) {
			h._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
	}
	h._bfT = function (i) {
		var g = G(arguments)
		return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
	}
	h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			_.tFn(o.fn)(
					h._bf(g.f, $tMx(_.tA(o.tf))))
		})
		return h
	}
	h.bmCir = h.bC = function (o) {
		o = o || {}
		var h = this
		o.i = o.i || 'me'
		o.circs = o.circs || []
		o.cs = o.cs || []
		o.hs = o.hs || []
		$.i(o.i, function (i) {
			_.e(o.circs, function (c) {
				h.bf(i).dc(c)
			})
		})
		return h
	}
	h.bR = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			if (o.hs) {
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			else {
				h.rec(o.hs)
			}
		})
		return h
	}
	h.bP = h.bV = function (o) {
		var h = this, g = G(arguments), o
		h._bVAsy = function (i, v) {
			var h = this
			i = i || 'me'
			$.i(i, function (i) {
				h._bV(i, v)
			})
			return h
		}
		h._bV = function (i, vs) {
			i = i || 'me'
			return this.bf(i).lt(vs).cp()
		}
		o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
		if (Q.ran) {
			h._bV(o.i, o.v)
		}
		else {
			h._bVAsy(o.i, o.v)
		}
		return h
	}
// bitmap stroke
	h.bitmapStroke = h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
}
function textt() {
	t.lineH = t.lH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}
		this.lineHeight = lH
		return this
	}
	t.lineW = t.lW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	t.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		;
		return this.lW(w).lH(h)
	}
	t.lineH = t.lH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}
		this.lineHeight = lH
		return this
	}
	t.lineW = t.lW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	t.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		;
		return this.lW(w).lH(h)
	}
	t.lineH = t.lH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}
		this.lineHeight = lH
		return this
	}
	t.lineW = t.lW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	t.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		;
		return this.lW(w).lH(h)
	}
	t.lW = _.gS('linewidth')
	t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
	t.lWH = function (w, h) {
		return this.lW(w).lH(N(h, w))
	}
	t.lineH = t.lH = function (lH) {
		if (U(lH)) {
			return this.lineHeight
		}
		this.lineHeight = lH
		return this
	}
	t.lineW = t.lW = function (lW) {
		if (U(lW)) {
			return this.lineWidth
		}
		this.lineWidth = lW
		return this
	}
	t.lWH = function (w, h) {
		if (U(h)) {
			h = w
		}
		;
		return this.lW(w).lH(h)
	}
	t.outL = t.oL = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	t.ol = _.gS(t, 'outline')
	t.outL = t.oL = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	t.outL = t.oL = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	t.outL = t.oL = function (outline) {
		if (U(outline)) {
			return this.outline
		}
		this.outline = outline
		return this
	}
	t.T = function (text) {
		if (U(text)) {
			return this.text
		}
		this.text = text
		return this
	}
	t.mW = t.measW = t.measuredW = function () {
		return this.getMeasuredWidth()
	}
	t.F = t.fo = function (font) {
		if (U(font)) {
			return this.font
		}
		if (N(font)) {
			font = font + 'px Arial'
		}
		this.font = font
		return this
	}
	t.C = t.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	t.F = t.fo = function (font) {
		if (U(font)) {
			return this.font
		}
		if (N(font)) {
			font = font + 'px Arial'
		}
		this.font = font
		return this
	}
	t.C = t.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	t.F = t.fo = function (font) {
		if (U(font)) {
			return this.font
		}
		if (N(font)) {
			font = font + 'px Arial'
		}
		this.font = font
		return this
	}
	t.C = t.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	t.F = t.fo = function (f) {
		if (U(f)) {
			return this.font
		}
		this.font = N(f) ? f + 'px Arial' : f
		return this
	}
	t.C = t.col = function (color) {
		if (U(color)) {
			return this.color
		}
		this.color = oO('c', color)
		return this
	}
	t.align = t.textA = t.tA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	t.align = t.textA = t.tA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	t.tA = function (a) {
		$l('tA')
		if (U(a)) {
		}
		this.textAlign = (a)
		return this
	}
	t.align = t.textA = t.tA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	t.align = t.textA = t.tA = function (textAlign) {
		if (U(textAlign)) {
			return this.textAlign
		}
		this.textAlign = textAlign
		return this
	}
	t.baseline = t.textB = t.tB = function (textBaseline) {
		if (U(textBaseline)) {
			return this.textBaseline
		}
		this.textBaseline = textBaseline
		return this
	}
	t.baseline = t.textB = t.tB = function (textBaseline) {
		if (U(textBaseline)) {
			return this.textBaseline
		}
		this.textBaseline = textBaseline
		return this
	}
	t.bl = function (bl) {
		var g = G(arguments)
		if (g.p) {
			bl = 'bottom'
		}
		if (g.n) {
			bl = 'top'
		}
		if (bl === '') {
			bl = 'middle'
		}
		if (U(bl)) {
			return this.textBaseline
		}
		this.textBaseline = bl
		return this
	}
	t.baseline = t.textB = t.tB = function (textBaseline) {
		if (U(textBaseline)) {
			return this.textBaseline
		}
		this.textBaseline = textBaseline
		return this
	}
	t.baseline = t.textB = t.tB = function (textBaseline) {
		if (U(textBaseline)) {
			return this.textBaseline
		}
		this.textBaseline = textBaseline
		return this
	}
	cjs.T = cjs.Tx = function (text, font, color, x, y) {
		x = N(x) ? x : 600
		y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		if (N(font)) {
			font = font + 'px Arial'
		}
		font = font || '50px Arial'
		color = color || 'y'
		textOb = new createjs.Text(text, font, oO('c', color))
		textOb.regX = textOb.W() / 2
		textOb.XY(x, y)
		return textOb
	}
	cjs.text = function (text, color, font, x, y) {


//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		x = N(x) ? x : 100
		y = N(y) ? y : x
		font = font || '20px Arial'
		font = N(font) ? font + 'px Arial' : font
		color = color || 'z'
		var textOb = new createjs.Text(text, font, oO('c', color)).XY(x, y)
		return textOb
	}
	cjs.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
	$Tx = function (a, f, c, x, y) {
		var t
		if (N(f)) {
			f = String(f) + "px Arial"
		}
		if (S(c)) {
			c = oO('c', c)
		}
		t = new cjs.Text(a, f, c)
		if (O(x)) {
			if (F(x.cen)) {
				x = x.cen()
			}
			y = x.y
			x = x.x
		}
		if (N(x)) {
			t.X(x)
		}
		if (N(y)) {
			t.Y(y)
		}
		return t
	}
	$T = function (a, b, c, d, e) {
		var g = G(arguments), o, t
		return new cjs.Text(a, b, c, d, e)
		o = g.O ? g.f :
		{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
		o.f = N(o.f) ? o.f + 'px Arial' : o.f
		o.f = o.f || '50px Arial'
		o.c = o.c || 'y'
		o.x = N(o.x, 600)
		o.y = N(o.y, 100)
		t = new cjs.Text(o.t, o.f, o.c)
		t.XY(o.x, o.y).drag()
		if (g.n) {
			t.regX = t.W() / 2
		}
		if (g.p) {
			t.bl('alphabetic')
		}
		return t.bl('middle')
	}
	cjs.chalk = function (text, color) {
		color = oO('c', color || 'white')
		if (O(text)) {
			text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		}
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	_$Tx = function (a, b, c, d, e, f) {
		return new cjs.Text(a, b, c, d, e, f)
	}
}

function filts() {
// filters are only displayed when the display object is cached
// later, you can call updateCache() to update changes to your filters
	cjs.Filter.prototype.b = function () {
		var bd = this.getBounds()
		bd.w = bd.width
		bd.h = bd.height
		return bd
	}
	$cM = function () {
		return new cjs.ColorMatrix()
	}
	$cF = function (a, b, c, d, e, f, g, h) {
		return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
	}
	$cMF = function (cM) {
		return new cjs.ColorMatrixFilter(cM)
	}
	$bF = function (a, b, c, d, e) {
		return new cjs.BlurFilter(a, b, c, d, e)
	}
	$aF = function (a, b, c, d, e) {
		return new cjs.AlphaMaskFilter(a, b, c, d, e)
	}
	$aMF = function (a, b, c, d, e) {
		return new cjs.AlphaMapFilter(a, b, c, d, e)
	}
	cjs.testCanvas = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
	$BF = $Bf = $FB = $FlB = $Bfl = $bF = function () {
		var g = G(arguments), fl, o
		o = {x: g[0], y: g[1], q: g[2]}
		o.y = N(o.y) ? o.y : o.x
		o.q = o.q || 1
		fl = new cjs.BlurFilter(o.x, o.y, o.q)
		return fl
	}
	$AF = $Af = $aF = function (a, b, c, d, e) {
		var fl
		if (O(a) && a.cacheCanvas) {
			a = a.cacheCanvas
		}
		fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
		return fl
		forMaskFilter = function trx(n) {
			var g = G(arguments), a
			a = []
			//for making mask filter
			if (g.n) {
				return 'rgba(0,0,0,' + g[0] || 0 + ')'
			}
			_.e(g, function (n) {
				a.push(trx(n, '-'))
			})
			return a
		}
	}
	$CMF = $CmF = $cMF = function (a, b, c, d) {
		if (!O(a)) {
			a = $CM(a, b, c, d)
		}
		return new cjs.ColorMatrixFilter(a)
	}
	$CM = $Cm = $cM = function (a, b, c, d, e) {
		var m
		m = new cjs.ColorMatrix(a, b, c, d, e)
		m.b = m.adjustBrightness
		m.c = m.adjustColor
		m.C = m.adjustContrast
		m.h = m.adjustHue
		m.s = m.adjustSaturation
		m.cl = m.clone
		m.cc = m.concat
		m.m = m.copyMatrix
		m.r = m.reset
		m.A = m.toArray
		m.S = m.toString
		return m
	}
///////////
	cM = cjs.ColorMatrix.prototype
	cM.s = function (s) {
		this.adjustSaturation(s)
		return this
	}
	cM.c = function (c) {
		this.adjustContrast(c)
		return this
	}
	cM.ch = function (c) {
		this.adjustHue(c)
		return this
	}
	cM.b = function (c) {
		this.adjustBrightness(c)
		return this
	}
	dO.fl = function () {
		var ob = this, g = G(arguments), i
		if (A(g[0])) {
			return ob.fl.apply(ob, g[0])
		}
		ob.filters = ob.filters || []
		_.e(g, function (fl) {
			ob.filters.push(fl)
		})
		if (!g.n) {
			i = ob.image;
			this.ca(0, 0, i.width, i.height)
		}
		return ob
	}
	dO.fl2 = function () {
		var ob = this, g = G(arguments)
		ob.filters = []
		ob.filters = ob.filters || []
		_.e(g, function (fl) {
			ob.filters.push(fl)
		})
		if (!g.n) {
			i = ob.image;
			this.ca(0, 0, i.width, i.height)
		}
		return ob
	}
	dO.aF = function (h) {
		var ob = this
		ob.fl($AF(h))
		return ob
	}
	dO.aF2 = function (h) {
		var ob = this
		this.fl2($AF(h))
		return ob
	}
	dO.fl = function (fl, i) {
		this.filters = this.filters || []
		if (U(fl)) {
			return _.l(this.filters)
		}
		if (N(fl)) {
			return this.filters[fl]
		}
		if (O(fl)) {
			this.filters.push(fl)
		}
		if (O(i)) {
			this.ca(i)
		}
		return this
	}
	dO.Fl = function (fl, i) {
		this.filters = this.filters || []
		if (U(fl)) {
			return _.l(this.filters)
		}
		if (N(fl)) {
			return this.filters[fl]
		}
		if (O(fl)) {
			this.filters.push(fl)
		}
		if (O(i)) {
			this.ca(i)
		}
		return this
	}
	dO.cF = function (a, b, c, d, e, f, g, h) {
		var cf = $cF(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(cf)
		return cf
	}
	dO.bF = function (a, b, c, d, e, f, g, h) {
		var bf
		bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	dO.aF = function (a, b, c, d, e, f, g, h) {
		var bf
		bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	dO.aMF = function (a, b, c, d, e, f, g, h) {
		var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
	dO.cMF = function (cM) {
		var cf = new cjs.ColorMatrixFilter(cM)
		this.filters = this.filters || []
		this.filters.push(cf)
		return cf
	}
}
function gxs(){
	cjs.Gx = cjs.Graphics
	cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
	$Gx = function (a) {
		return new cjs.Gx(a)
	}
	$GX = function (a) {
		return new cjs.Gx(a).FS()
	}
	gx = cjs.Graphics.prototype
	gx._f = function (col) {
		return this.f(oO('c', col))
	}
	gx._s = function (col) {
		return this.s(oO('c', col))
	}
	gx._ss = function (thickness, caps, joints, miterLm, ignoreScale) {
		var gx = this//=0//=0//=10//=false
		gx.setStrokeStyle(thickness, caps, joints, miterLm, ignoreScale)
		return gx
	}
	gx.C = gx.fC = gx.cCL = gx.fs = function (f, s, w) {
		return this._f(f || 'z')._s(s)._ss(N(w, 2))
	}
	gx.col = gx.sC = function (sCol, thickness) {
		return this._s(sCol).SS(thickness)
	}
	gx.F = function (col) {
		return this._f(col || 'z')
	}
	gx.FS = function () {
		return this.F().S().SS()
	}
	gx.S = function (col) {
		return this._s(col || 'w')
	}
	gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
		return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
	}
	gx._bf = function (i, tf) {
		return this.bf(i, null, tf)
	}
	gx._bs = function (i, tf) {
		return this.bs(i, null, tf)
	}
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
	gx.dcO = function (o) {
		o = o || {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		return this.dc(o.x, o.y, o.r)
	}
	gx._dc = function () {
		
		/*
		
		 dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
		 var gx = new createjs.Graphics().ss(1);
		 gx.s(cjs.Graphics.getRGB(0,0,0));
		 gx.f(cjs.Graphics.getRGB(255,0,0));
		 gx.dc(0,0,3);
		 var s = new cjs.Shape(g); s.x = 100; s.y = 100;
		 st.addChild(s); st.update();
		
		 */
		var gx = this, g = G(arguments), o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
		return gx.dcO(o)
	}
	gx.dcColO = function (o) {
		var gx = this
		gx.fC(o.fC)
		gx.sC(o.sC)
		gx.ss(o.ss)
		gx.dcO(o.x, o.y, o.r)
		return gx
	}
	gx.dcCOLO = function (o) {
		var gx = this
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		o.fC = o.fC || 'z'
		o.sC = o.sC || 'w'
		o.ss = N(o.ss, 4)
		gx.fC(o.fC)
		gx.sC(o.sC)
		gx.ss(o.ss)
		gx.dc(o.x, o.y, o.r)
		return gx
	}
	gx.DC = function () {
		var gx = this, g = G(arguments), o
		o = g.O ? g.f :
				N(g.s) ?
				{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
				{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
		return gx.dcO(o)
	}
	gx._cir = function (ob) {
	}
	gx.cir = function () {
	}
	gx.cirs = function () {
	}
	gx.CIR = function () {
	}
	gx.__dr = function (x, y, w, h) {
		return this.dr(N(x, 0), N(y, 0), N(w, 50), N(h, 50))
	}
	gx._drO = function (o) {
		var gx = this, g
		o = o || {}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, 50)
		gx.dr(o.x, o.y, o.w, o.h)
		return gx
	}
	gx._dr = function () {
		var gx = this, g = G(arguments), o
		o = N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.fo} :
		{w: g.f, h: g.s}
		return gx._drO(o)
	};
	/*
	 drawRect ( x  y  w  h ) Graphics chainable
	 Defined in drawRect:860
	 Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
	 Parameters:
	
	 x Number
	 y Number
	 w Number
	 Width of the rectangle
	 h Number
	 Height of the rectangle
	 Returns:
	
	 Graphics: The Graphics instance the method is called on (useful for chaining calls.)
	 */
	gx._lt = function (x, y) {
		var gx = this, g = G(arguments), o
		o = {x: g.f, y: g.s}
		gx.lt(o.x, o.y)
		return gx
	}
	gx._mt = function (x, y) {
		var gx = this, g = G(arguments), o
		o = {x: g.f, y: g.s}
		gx.mt(o.x, o.y)
		return gx
	}
	gx._pol = function () {
		var gx = this, g = G(arguments)
		if (g.A) {
			return gx._pol.apply(gx, g.f)
		}
		gx.mt(g.f[0], g.f[1])
		_.e(_.r(g), function (pt) {
			gx.lt(pt[0], pt[1])
		})
		gx.lt(g.f[0], g.f[1])
		return gx
	}
	gx.pol = function (pts, f, s, w) {
		var gx = this, g = G(arguments)
		//  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
		if (N(pts[0])) {
			_.e(g, function (pt) {
				gx.lt(pt[0], pt[1])
			})
		}
		else {
			gx.fs(f, s, w)
			_.e(pts, function (pt) {
				gx.lt(pt[0], pt[1])
			});
		}
		return gx.cp()
	}
	gx.fancyLt = gx.poly = function (vs, f, s, w) {
		var gx = this, g = G(arguments), o
		o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
		if (o.cCL) {
			gx.cCL.apply(gx, o.cCL)
		}
		_.e(o.vs, function (v) {
			gx.lt(v[0], v[1])
		})
		gx.cp()
		return this
	}
}
function grad(){
	cjs.lg = h.lg = function () {
		var g = G(arguments), o//h=this, gx=h.graphics,
		if (g.A) {
			return cjs.lg.apply(null, g.f)
		}
		o = g.O ? g.f :
				_.x({c1: g.f, c2: g.s},
						N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
								: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
								: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
		o.c1 = oO('c', o.c1 || 'z');
		o.c2 = oO('c', o.c2 || 'w')
		o.s1 = N(o.s1, 0);
		o.s2 = N(o.s2, 1)
		o.x1 = N(o.x1, 0);
		o.y1 = N(o.y1, 0)
		o.x2 = N(o.x2, 0)
		o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
		return o
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rg = function (o) {
		var h = this, g = G(arguments),
				gx = h.graphics,
				o
		if (A(g[0]) && A(g[1])) {
			gx.rf(
					[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			)
			return h
		}
		o = O(g[0]) ? g[0] :
				S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						N(g[7]) ?
						{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								: N(g[5]) ?
						{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								: N(g[4]) ?
						{x2: g[2], r1: g[3], r2: g[4]}
								: N(g[3]) ?
						{r1: g[2], r2: g[3]}
								:
						{r2: g[2]})
						: S(g[0]) ?
				{c2: g[0]}
						: {}
		$df.grad(o)
		o.x2 = N(o.x2, o.x1)
		o.y2 = N(o.y2, o.y1)
		o.r1 = N(o.r1, 1);
		o.r2 = N(o.r2, 100)
		return o
	}
	h.rf = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rf(
				[o.c1, o.c2],
				[o.s1, o.s2],
				o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	function more() {
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.map(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.m(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.map(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lf = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			o = cjs.lg(g)
			gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.ls = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.lg.apply(h, g)
			gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rg = function (o) {
			var h = this, g = G(arguments),
					gx = h.graphics,
					o
			if (A(g[0]) && A(g[1])) {
				gx.rf(
						[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
				)
				return h
			}
			o = O(g[0]) ? g[0] :
					S(g[1]) ? _.x({c1: g[0], c2: g[1]},
							N(g[7]) ?
							{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
									: N(g[5]) ?
							{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
									: N(g[4]) ?
							{x2: g[2], r1: g[3], r2: g[4]}
									: N(g[3]) ?
							{r1: g[2], r2: g[3]}
									:
							{r2: g[2]})
							: S(g[0]) ?
					{c2: g[0]}
							: {}
			$df.grad(o)
			o.x2 = N(o.x2, o.x1)
			o.y2 = N(o.y2, o.y1)
			o.r1 = N(o.r1, 1);
			o.r2 = N(o.r2, 100)
			return o
		}
		h.rf = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rf(
					[o.c1, o.c2],
					[o.s1, o.s2],
					o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
		h.rs = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
	}
	
	DRAGST = GRADOVALS = function () {
		z()
		s = $.dragStage()
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	}//B
}
function apps() {
	HDC = function () {
		h = $Sh()
		h.graphics.f('blue')
		h.dc(100, 100, 100)
		h.graphics.f('yellow')
		h.dc(200, 100, 100)
		//.cir()
		_$St().A(h).u()
	}
	HCR = function () {
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		_$St().A(h).u()
	}
	HDC = function () {
		h = $Sh()
		h.graphics.f('blue')
		h.dc(100, 100, 100)
		h.graphics.f('yellow')
		h.dc(200, 100, 100)
		//.cir()
		_$St().A(h).u()
	}
	HCR = function () {
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		_$St().A(h).u()
	}
	DWW = function () {
		gx = $Gx().f(cjs.rgb(255, 0, 0)).ss(10).s('white')
		gx.dc(0, 0, 100).dc(100, 0, 100)
		gx.s('blue').f('green').dc(0, 300, 100)
		_$St().A($Sh(gx).XY(300, 100)).u()
	}
}
 