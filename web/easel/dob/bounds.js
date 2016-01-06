dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
	var dO = this, g = G(arguments)
	dO.nominalBounds = $Rec(a, b, c, d)
	return dO
}
dO.setBds = dO.sBd = dO.gTB = function () {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.getTransformedBounds()
	}
	dO.setBounds.apply(dO, g)
	return dO
}
 
dO.nW = function () {
	return this.nominalBounds.width
}
 