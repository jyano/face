w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bindSprite2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}

b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}

COL=COLORAPP = function () {
	W(2)
	w.BUMP(100, 200, 25)
	w.BRICK(700, 200, 25)
	w.BALL(100, 100, 25)
	w.BOX()
	w.BOX(100)
	w.BOX(700, 300)
	b = w.BOX(700, 300, 25)
	w.BOX(700, 300, 25)
	w.BOX(700, 300, 25, 25)
	w.BUMP(100, 200, 25, 'r')
	w.BRICK(700, 200, 25, 'r')
	w.BALL(100, 100, 25, 'r')
	w.BOX(700, 100, 25, 'r')
}