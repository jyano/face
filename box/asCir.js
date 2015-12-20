///////////////////////////                           AS CIR         /////////////////////////////////
cH.XY = cH.lP = function (x, y) {
	var cH = this;
	cH.SLP = function () {
		this.SetLocalPosition.apply(this, arguments)
		return this
	}
	cH.GLP = function () {
		return this.GetLocalPosition()
	}
	return U(x) ? cH.GLP().m() :
			cH.SLP(V(x, y).d())
}
$_cH = function (r) {
	return new b2d.CH(r)
}
$cH = function () {
	//r, x, y
	var g = G(arguments)
	var o = {}
	var cH = $_cH(N(g.f, 50) / 30)
	if (g.s) {
		cH.XY(g.s, g.t)
	}
	return cH
	//	if (N(x) && N(y)) {h.XY(x, y)}
	// cH.lP(g.s, g.t)
}
$cF = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
ASCIR = function () {
	$box()
}
cH.set = function () {//cH.S =
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
$cirF = function (rad, x, y, den) {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
//make a circ fixture
// neg-> sensor
	var g = G(arguments),
			rad = N(g[0]) ? g[0] : 50,
			x = N(g[1]) ? g[1] : 0,
			y = N(g[2]) ? g[2] : 0,
			den = N(den) ? den : 1
	fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
	if (g.n) {
		fixt.isSensor = true
	}
	$cF6 = function (rad, x, y) {
		var g = G(arguments), f
		rad = g[0];
		x = g[1];
		y = g[2];
		rad = rad || M.r() + .1
		x = N(x) ? x : 0
		y = N(y) ? y : x
		var cir = $cH(rad)
		cir.lP(V(x, y, '-'))
		f = $fD(cir)
		if (g.n) {
			f.isSensor = true
		}
		return f
	}
	return fixt
	//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
}
CIR = function () {
	$box()
	w.D(350, 200).f($fD($cH(80), '-'))
	w.D(150, 300).fD($cH(30))
	w.D(450, 200).cir(80)
	function later() {
		//use w.ball
		//w.ball(650, 300, 100).cF(100, 20, 20)
		//w.ship()
	}
}
RAD = function () {
	$canW().G(10).roof.kill()
	n = 1
	drp()
	_.ev(1, function () {
		if (n < 300) {
			drp()
		}
	})
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
}
