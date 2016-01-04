cj.shad = cj.shadow = function (color, x, y, blur) {
	if (color == '-') {
		return new cj.Shadow(null, 0, 0, 0)
	}
	color = S(color) ? color : 'a'
	blur = N(blur) ? blur : 10
	x = N(x) ? x : 0
	y = N(y) ? y : 0
	var shad = new cj.Shadow(oO('c', color), x, y, blur)
	return shad
}