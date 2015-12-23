function box() {
	w.step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	w.clear = w.clearForces = w.cF = function () {
		this.ClearForces();
		return this
	}
	w.dB = function (a) {
		this.DestroyBody(a);
		return this
	}
	w.GBL = w.bLX = function () {
		return this.GetBodyList()
	}
	w.GGB = w.gB = function () {
		return this.GetGroundBody()
	}
}
$_W = function (x, y, bool) {
	return new bx.W(V(x, y), U(bool) || bool ? true : false)
}
$Gv = function () {
	w = $_W(0, 10).ev()
	dD = $dD().cv().SF(bx.DD.e_shapeBit)
			.sc(20).fA(0.5).lT(1)
	w.SDD(dD)
	return w
}
$box = function (fn) {
	if (F(fn)) {
		return function () {
			ctx = $.xI()
			w = $_W(0, 10).bug()
			w.ev(1 / 60, 10, 10)
			fn()
		}
	}
	ctx = $.xI()
	w = $_W(0, 10).bug()
	w.ev(1 / 60, 10, 10)
	return w
}
world = function (x, y, doSleep) {
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return new b2d.World(grav, sleep)
}
_$W = function (grav, doSleep) {
	var doSleep = doSleep || U(doSleep) ? true : false
	return new b2d.W(grav, doSleep)
}
$W = function () {
	var g = G(arguments)
	var grav = g.N ? V(0, g.f) : V(g.f, g.s)
	var sleep = g.n ? false : true
	return _$W(grav, sleep)
}
$boxWorld = $bW = function () {
	var g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, sl: g.t} :
			N(g.f) ? {y: g.f, sl: g.s} :
			{sl: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 10)
	return world(o.x, o.y, o.sl)
}
box = function (fn) {
	w = $boxWorld()
	dD = $dD($.c('z', 1800, 1500))
	w.sDD(dD) //the_circle = new b2CircleDef()
	n = 0
	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.go(1 / 5, '+')
	})
}
function _pre() {
	$.xI = function (id, col) {
		return $.cI(id).C(col)[0].getContext("2d")
	}
	w.N = function (time, a, b) {
		//= w.St = w.go = w.step = w.draw 
		w = this, g = G(arguments)
		w.CF()
		//if (N(num)) {this.N(num)}
		w.Step(time, N(a, 8), N(b, 3))
		if (!g.n) {
			w.DDD()
		}//	if (g.p) {w.DDD()}
		return w
	}
	w.ev = function (a, b, c) {
		var w = this
		a = N(a, 1 / 60)
		c = N(c, N(b, 10))
		b = N(b, 10)
		_.ev(a, function () {
			w.Step(a, b, c)
			w.DDD();
			w.CF();
		})
		return w
	}
}