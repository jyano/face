f.pol = function (o) {
	return _.x(o || {}, {v: this.vs()})
}
Pol = function (vs) {
	this.v = this.vs = vs
}
f.pol = f.polDat = function (o) {
	var f = this
	var vs = f.vs()
	var pol = {v: vs, vs: vs}
	return O(o) ? _.x(o, pol) : pol
}