cH.XY = cH.lP = function (x, y) {
	cH.set = function () {//cH.S =
		var bH = this
		bH.Set.apply(bH, arguments)
		return bH
	}
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
 
$cH = function () {
	$_cH = function (r) {
		return new b2d.CH(A(r) ? r[0] : r)
	}
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
w.circleStat = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
} 