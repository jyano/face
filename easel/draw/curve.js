  
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
h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	h.quadraticCurveTo(x, y, r, startA, endA, aCW)
	return h
}
h.cur = function (a, b, c, d, e, f, g, h) {
	if (O(a)) {
		return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
	}
	return this.mt(a, b).qt(c, d, e, f, g, h)
}
h.de = h.ell = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
					N(g[0]) ? {w: g[0], h: g[1]} :
							O(g[0]) ? g[0] : {}
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
h.rr = function () {
	var h = this,
			gx = h.graphics,
			g = G(arguments),
			o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
					N(g[1]) ? {w: g[0], r: g[1]} :
							N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
									O(g[0]) ? g[0] : {}
	o.x = _.tN(o.x)
	o.y = _.tN(o.y)
	o.w = _.tN(o.w, 100)
	o.h = _.tN(o.h, o.w)
	gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
	return h
}
h.rr2 = function (x, y, W, H, r) {
	var h = this
	h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
	return h
}
h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	h.bezierCurveTo(x, y, r, startA, endA, aCW)
	return h
}
h.arc = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	/*
	 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
	 For example, to draw a full circle with a radius of 20 centered at (100, 100):
	 arc(100, 100, 20, 0, Math.PI*2)
	 */
	h.arc(x, y, r, startA, endA, aCW)
	return h
}
h.arc2 = function (x, y, X, Y, r) {
	var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
	gx.arcTo(x, y, X, Y, r)
	return h
}
//
h.rc = h.roundRectComplex = function () {
	var h = this, gx = h.graphics
	gx.drawRoundRectComplex.apply(gx, arguments)
	return h
}
h.qt = function (x, y, r, startA, endA, aCW) {
	var h = this, gx = h.graphics
	gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
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
RR1 = BASIC=RRR8 = ROUNDREC = function () {//C+
	s = $St()
	h = s.h()
	gx = h.graphics.FS()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}
RR2 =GOODONE= TXH8 = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	return
	//function exceedsStackSize() {
	////////////////
	h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
			.c('X', 'g', 8)
			.mt([
				[100, 100], [300, 300], [400, 100],
				[500, 300], [450, 450]], [[500, 0], [600, 100]
			])
	h.cir(600, 300, 'u', 'g', 10)
	lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
	v = [[300, 300], [320, 200], [640, 400], [280, 650]]
	//two ways to make the same thing
	s.h().poly({
		v: v,
		lf: lf
	})
	s.h(250, 50).lf(lf).mt(v)
}
BB = BRUSH = BLOTCHY = function () {
	z();
	var _mPt
	st = $St(1000)
	st.mO(1)
	h = $h().a2(st)
	h.ss('o', 40, 's', 'bevel', 1)
	st.bm('chicks', function (bm) {
		// _i= i = i[0]
		bm.al(.2)
		st.A(bm)
		st.MD(function () {
			_mPt = _pt = st.m()
		})
		st.MU(function () {
			_mPt = null
		})
		st.MM(function () {
			if (!_mPt) {
				return
			}
			_pt = st.m()
			mx = _pt.x
			my = _pt.y
			mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
			h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
			_mPt = V(mPt)
		})
	})
}
FL9 = Q21 = function () {
	var pt
	st = $St(1000).mO(1)
	h = st.h().ss('g', 40, 's', 'b', 1)
	st.MD(function () {
		pt = st.m()
	})
	st.MU(function () {
		pt = 0
	})
	st.MM(function () {
		if (pt) {
			_pt = st.m();
			mx = _pt.x;
			my = _pt.y
			mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
			h.mt(mPt.x, mPt.y).qt(_pt, pt)
			pt = V(mPt)
		}
	})
	$.i('chicks', function (i) {
		$Bm(i).a2(st).al(.2)
	})
}