b.L = b.linear = function (vx, vy, damp) {
	var b = this
	if (U(vx)) {
		b.lV(0, 0).lD(0)
	}
	else {
		b.vX(vx)
		if (N(vy)) {
			b.vY(vy)
		}
		if (N(damp)) {
			b.lD(damp)
		}
	}
	return b
}
b.dm = b.damp = function (l, a) {
	l = N(l) ? l : 1000
	a = N(a) ? a : l
	this.lD(l).aD(a)
	return this
}