pD._dif = function (pol) {
	return this.difference(pol)
}
pD.dif = function (pol) {
	return this._dif($pD(pol))
}
b2d.hasAtLeastOnePolyX = b2d.hVSource = function (gP) {
	// if gP is a dP, then m_List is an array of (its inner) polySimples
	// [polySimp]
	//get just gets the index from the same (its own) array, hurray :)
	//as a bool tool, it checks to make sure that it has at least one polygon
	return gP.hasAtLeastOnePoly()
}
pD.minus = function (x, y) {
	$l('pD.minus')
	return M.p(
			_.m(this.vs(), function (v) {
				return V(v).sub(x || 0, y || 0)
			})
	)
}
$dif = DIF = function () {
	$l('$dif DIF')
	$l('DIF')//not each of the ps?
	var g = G(arguments),
			p = M.p(g.f)
	g.eR(function (p1) {
		p = p.D(p1)
	})
	return p
}