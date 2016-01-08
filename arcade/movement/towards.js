//move towards x,y (or body?)
b.towards = function (x, y, speed) {  //if(isBody(x)){return self(x.X(), x.Y(), y)}
	speed = !N(speed) ? 5 : speed > 10 ? 10 : speed
	speed = (11 - speed) * 20
	var b = this,
			lV = V(
					x - b.X(),
					y - b.Y()
			).div(speed)
	return this.lV(lV)
	//more realistic to accelerate, via forces?
}
TOWARDS = function () {
	w = b2d.W({g: 0})
	b = w.B(500, 300, 100)
	y = w.ship()
	cjs.tick(function () {
		b.towards(y.X(), y.Y(), 9)
	})
}