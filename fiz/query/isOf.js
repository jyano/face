b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
}
f.of = function (k) {
	if (!this) {
		return false
	}
	if (!k) {
		return true
	}
	return this == k ||
			(S(k) && _.contains(this._K || [], k.trim()))
			||
			(this.B() && this.B().of(k))
}
f.is = function (k) {
	return k && this.of(k)
}
//if(g.A){_.e(g.f, function(k){f.K(k)}); return f}