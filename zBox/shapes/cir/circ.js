w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.addCirc = function (x, y, radius, color) {//specific to talkjs
	x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)
	y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	this.ball(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)).linDamp(2)
}
w.circ = function (x, y, rad, col) {
	var ball, w = this
	// will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	rad = N(rad) ? rad : _.random(14) + 8
	ball = w.ball(x, y, rad).linDamp(2)
	ball.bindSprite2(w.s.cir(x, y, rad, col))
	return ball
}