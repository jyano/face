function fixtParse() {
	w.A = function (bD, fD) {
		var b = this.CreateBody(bD)
		if (fD) {
			A(fD) ? _.e(b2d.fixtParse(fD), function (fd) {
				b.f(fd)
			}) :
					b.f(fD)
		}
		return b
	}
	w.D = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($dB(x, y), fD)
	}
	w.S = function (x, y, fD) {
		var body
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($sB(x, y), fD)
	}
}