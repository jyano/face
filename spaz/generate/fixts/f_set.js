f.set = function (o) {
	if (!O(o)) {
		return false
	}
	var f = this
	if (D(o.d)) {
		f.d(o.d)
	}
	if (D(o.bo)) {
		f.bo(o.b)
	} else if (D(o.r)) {
		f.r(o.b)
	}
	if (D(o.fr)) {
		f.fr(o.f)
	}
	if (o.s) {
		f.sen(1)
	}
	if (D(o.k)) {
		f.K(o.k)
	}
	return f
}
