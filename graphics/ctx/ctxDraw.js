$L('curve')
x.b = x.beg = x.bP = function () {
	var g = G(arguments)
	this.beginPath()
	if (g.u) {
		return this
	}
	if (g.N_) {
		this.mt(g.f, g.s)
		if (g.t) {
			this.c(g.t, g[3], g[4])
		}
	}
	else {
		this.c.apply(this, g)
	}
	return this
}
x.mt = function () {
	var x = this, g = G(arguments)
	if (g.A_) {
		x.mt(g.f[0], g.f[1])
		g.eR(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.moveTo(N(g.f, 0), N(g.s, 0))
		if (N(g.t)) {
			x.lt(g.t, g[3])
		}
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.lt = function () {
	var g = G(arguments), x = this
	if (g.A_ && A(g.f[0])) {
		x.lt.apply(x, g.f)
	}
	else if (O(g.s)) {
		g.e(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.lineTo(g.f, g.s)
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.r = function () {
	var ctx = this, g = G(arguments), o
	o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, ctx.W())
	o.h = N(o.h, ctx.H())
	ctx.rect(o.x, o.y, o.w, o.h)
	return ctx
}
x.fr = x.fR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x, o.y, o.w, o.h)
	return this
}
x.fr2 = x.fR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.l = x.lW = function (n) {
	var g = G(arguments)
	if (!g.n) {
		this.lineWidth = n;
		return this
	}
	return this.lt(g.f, g.s)
}
x.sR = x.sr = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x, o.y, o.w, o.h)
	return this
}
x.sr2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.cR = x.clR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x, o.y, o.w, o.h)
	return this
}
x.cr2 = x.cR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.r2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.x = x.cP = x.cp = function () {
	this.closePath();
	return this
}
x.lC = function (c) {
	var g = G(arguments);
	if (c == 'r') {
		c = 'round'
	}
	else if (c == 'r') {
		c = 'square'
	}
	else if (c == 'b') {
		c = 'but'
	}
	this.lineCap = c
	return this
}
x.lJ = function (n) {
	var g = G(arguments);
	if (g.N) {
		this.lineJoin = n;
		return this
	}
}
XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
CV1 = FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
x.pol = function (vs, ox, oy) {
	var x = this, i
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
	var x = this
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
	_.e(_.r(vxs), function (vx) {
		x.lt(vx[0] + ox, vx[1] + oy);
	})
	x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
	if (hole) {
		x.fS("#ffffff")
	}
	x.cp().s().f()
}
err = CV28 = PXC = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPS(flatTri, 'r', 'v')
}

function curve() {
	x.a = function () {
		var g = G(arguments), x = this,
				o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
				{r: g.f}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		o.rt1 = N(o.rt1, 0)
		o.rt2 = N(o.rt2, 360)
		o.ccw = g.n ? true : false
		this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.arc2 = x.at = function () {
		var g = G(arguments), o
		o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
		this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.quadratic = x.qt = function () {
		this.quadraticCurveTo();
		return this
	}
}