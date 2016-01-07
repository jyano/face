w.grid = w.drawGrid = function (gd, x, y, l, spa) {
	var w = this //spacing
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.pF(l, l, rw * spa, c * spa);
			}
		})
	})
	return b.K('grid')
}
maze = [
	[1, 0, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 1, 1],
	[1, 0, 1, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1]
]
 