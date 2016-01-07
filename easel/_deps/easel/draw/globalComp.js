dO.cO = dO.compOp = function (compOp) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.compositeOperation
	}
	dO.compositeOperation = compOp
	return dO
}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
dO.Ds = dO.dO = function () {
	return this.compOp('destination-out');
}
dO.dS = dO.dI = function () {
	return this.compOp('destination-in')
}
dO.sD = dO.sI = function () {
	this.compOp('source-in');
	return this
}
dO.Sd = dO.sO = function () {
	this.compOp('source-out');
	return this
} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
dO.ds = dO.dV = function () {
	this.compOp('destination-over');
	return this
}
dO.SD = dO.sT = dO.sA = function () {
	this.compOp('source-atop');
	return this
}
dO.DS = dO.dT = dO.dA = function () {
	this.compOp('destination-atop');
	return this
}
dO.li = function () {
	this.compOp('lighter');
	return this
}
dO.co = function () {
	this.compOp('copy');
	return this
}
dO.xo = function () {
	this.compOp('xor');
	return this
}