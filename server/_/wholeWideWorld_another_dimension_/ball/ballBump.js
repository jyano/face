b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
w.ball = function (x, y, r) {
	var w = this
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	var ball = w.dB(x, y).CF($cF(r))
	//ball.K('ball')
	return ball
}
w.ball = w.ba = function (x, y, r) {
	var w = this, ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(x, y, b2d.circ(r))
	return ball.K('ball')
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f : N(g.s) ? {
		x: g.f, y: g.s,
		r: g.t,
		c: g[3]
	} : {r: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.r = N(o.r, 50)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r)
			.d(.5).fr(0).r(.5)
			.K('ball cir')
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sen(true)
	}
	return b
}
function balDecor() {
	b.decor = function (g) {
		var b = this
		if (g.n) {
			b.mS()
		}
		else if (g.p) {
			b.mBu()
		}
		else if (g.m) {
			b.mS().mBu()
		}
		return b
	}
	w.bump = w.cS = w.bu = w.baa = function (x, y) {
		var g = G(arguments)
		var b = w.S(x, y)
		b.cF.apply(b, _.r(g, 2))
		b.decor(g)
		b.K('bump')
		return b
	}
	w.ball = w.cD = w.ba = w.cirB = function () {
		var w = this, g = G(arguments), o, b
		if (true) {
			b = w.D(g.f, g.s)
			b.cF.apply(b, _.r(arguments, 2))
		}
		else {
			o = {x: g.f, y: g.s, r: g.t}
			var b = w.D(o.x, o.y)
			b.f($cF(o.r))
		}
		return b.decor(g).K('ball')
	}
	w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
		var g = G(arguments)
		var b = w.S(x, y)
		b.cF.apply(b, _.r(g, 2))
		return b.decor(g).K('bump')
		w.bumpAlt = function (x, y, r) {
			x = x || 100
			y = N(y) ? y : x
			r = r || 20
			return this.A(b2d.stat(x, y), $cF(r)).K('bumper')
		}
	}
	w.bal = w.ball = w.cD = w.ba = w.cirB = function () {
		var w = this, g = G(arguments), o, b
		if (true) {
			b = w.D(g.f, g.s)
			b.cF.apply(b, _.r(arguments, 2))
		}
		else {
			o = {x: g.f, y: g.s, r: g.t}
			var b = w.D(o.x, o.y)
			b.f($cF(o.r))
		}
		return b.decor(g).K('ball')
	}
}
w.ball = w.ba = w.cir = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2],
		c: g[3]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r).K('ball')
			.DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sensor(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sensor(true)
	}
	return b
}
w.BMP = w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.BAL = w.BALL = function (x, y, r, c) {
	var w = this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BAL = w.BALL = function (x, y, radius, color) {
	var wd = this.s.W(), ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	return this.ball(x, y, radius).lD(2)
			.bindSprite2(
			this.s.cir(x, y, radius, color)
	)
}
 