h.dr = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 100);
	o.h = N(o.h, o.w)
	gx.dr(o.x, o.y, o.w, o.h)
	return h
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
