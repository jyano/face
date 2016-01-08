CircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.ball(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
StatCircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.bumper(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
statCircSprite = function (x, y, r, col) {
	return new StatCircSprite(x, y, r, col)
}
circSprite = function (x, y, r, col) {
	return new CircSprite(x, y, r, col)
}