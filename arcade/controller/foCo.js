$fCo = b2d.force = function (x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var co = new b2d.CFC()
	co.V(x, y)
	return co
}
fCo = $pt.fCo
fCo.V = function (x, y) {
	//applies 'gravity' by default
	this.F = U(x) ? V(0, 10) : V(x, y)
	return this
}
w.fCo = w.fo = w.force = function () {
	return this.co($fCo.apply(null, arguments))
}
 