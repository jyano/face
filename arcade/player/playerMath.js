b2d.scaleFunc = function (b1, b2, max) {
	max = N(max) ? max : 2
	var dst = 150 / Math.sqrt(Math.sqr(b1.X() - b2.X()) + Math.sqr(b1.Y() - b2.Y()))
	return dst > max ? max : dst
}
Math.sqr = function (a) {
	return a * a
}
 