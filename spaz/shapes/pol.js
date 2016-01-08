
Pol = function (vs) {
	this.v = this.vs = vs
}

f.pol = function (o) {
	return _.x(o || {}, {v: this.pts()})
}


f.pol = f.polDat = function (o) {
	var f = this
	var vs = f.pts()
	var pol = {v: vs, vs: vs}
	return O(o) ? _.x(o, pol) : pol
}