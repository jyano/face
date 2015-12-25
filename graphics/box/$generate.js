w.ball = w.ba = function (x, y, r) {
	var w = this,
			ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(
			x, y, b2d.circ(r)
	)
	return ball.K('ball')
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
w.ball = function self(x, y, r) {
	var ball
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	ball = this.D(x, y, $cF(r))
	ball.K('ball')
	return ball
}
w.box = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A($dB(x, y), $rF(W, H)).K('box')
}
w.box = w.bi = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.brick = w.bii = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y),
			b2d.poly(W, H).r(0)).K('brick')
}
w.brick = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
w.brk = w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}

w.bump = w.bumper = w.baa = function (x, y, r) {
	x = x || 100
	y = N(y) ? y : x
	r = r || 20
	return this.A(b2d.stat(x, y), b2d.circ(r)).K('bumper')
}
w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
}
w.bump = function (x, y, r) {
	x = x || 100
	y = N(y) ? y : x
	r = r || 20
	return this.A($sB(x, y), $cF(r)).K('bumper')
}