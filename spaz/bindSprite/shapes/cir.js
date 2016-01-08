f.cir = function (o) {
	var f = this
	return _.x(o || {}, {x: f.pX(), y: f.pY(), r: f.rad()})
}