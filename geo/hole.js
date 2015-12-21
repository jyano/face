function alpha() {
	pD.wV = function (x, y) {
		var pD = this
		pD.ePol(function wPol(pS, n) {
			pS.tlNeg(x, y)
		})
		return pD
	}
}
ps.iHo = ps.iH = function () {
	return this.isHole()
} //can't be!!! useless
pD.iHo = pD.iH = function () {
	return this.isHole()
}
pD.hH = pD.hasHole = function () {
	var pD = this, h
	pD.ps(function (p) {
		if (p.isHole()) {
			h = true
		}
	})
	return h
}