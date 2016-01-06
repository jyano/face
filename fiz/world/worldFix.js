w.cF = function (bD, fD) {
	return this.cB(bD).cF(fD)
}
w.cAF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	return sB.cAF(A(g.t) ? g.t : _.r(g, 2))
}
w.aAF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	sB.cAF(A(g.t) ? g.t : _.r(g, 2))
	return w
}
w.cCF = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return cF
}
w.aCF = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return w
}
w.cRF = function () {
	var w = this, g = G(arguments)
	var b = w.sB(g.f, g.s)
	return b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
}
w.aRF = function () {
	var w = this, g = G(arguments)
	var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return w
}
