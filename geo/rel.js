b2d.tlNeg = b2d.reg = function (ps, b) {
	return _.m(ps, function (poly) {
		return poly.tlNeg(b)
	})
}