function ballBox() {
	cjs.ball = function (z, fc, sc) {
		var b = cjs.circle(0, 0, z, fc, sc)
		b.r = z
		b.d = z + z
		b.T = function (a) {
			if (U(a)) {
				return b.y() - b.r
			}
			b.y(a + b.r);
			return b
		}
		b.B = function (a) {
			if (U(a)) {
				return b.y() + b.r
			}
			b.y(a - b.r);
			return b
		}
		b.L = function (a) {
			if (U(a)) {
				return b.x() - b.r
			}
			b.x(a + b.r);
			return b
		}
		b.R = function (a) {
			if (U(a)) {
				return b.x() + b.r
			}
			b.x(a - b.r);
			return b
		}
		b.F = 1
		b.fall = function (r) {
			b.t(function () {
				if (r) {
					if (ballBox(b, r)) {
						b.F = 0
					} else {
						b.F = 1
					}
				}
				if (b.F) {
					b.y(10, '+')
				}
			})
		}
		return b
	}
	cjs.box = function (w, h, fc, sc) {
		w = w || 200
		h = h || w
		var b = rct(
				0 - w / 2, 0 - h / 2, w, h, fc, sc
		)
		b.wr = w / 2
		b.hr = h / 2
		b.wd = w
		b.hd = h
		b.top = b.T = function (a) {
			if (U(a)) {
				return b.y() - b.hr
			}
			b.y(a + b.hr)
			return b
		}
		b.bottom = b.B = function (a) {
			if (U(a)) {
				return b.y() + b.hr
			}
			b.y(a - b.hr)
			return b
		}
		b.left = b.L = function (a) {
			if (U(a)) {
				return b.x() - b.wr
			}
			b.x(a + b.wr)
			return b
		}
		b.right = b.R = function (a) {
			if (U(a)) {
				return b.x() + b.wr
			}
			b.x(a - b.wr);
			return b
		}
		b.fall = function () {
			b.t(function () {
				if (b.F) {
					b.y(40, '+')
				}  //****
				if (ballBox(b, r)) {
					b.F = 0
				}
			})
		}
		return b
	}
	cjs.ballBox = function (bl, bx, buff) {
		buff = buff || 100
		var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
				bl.x() >= bx.left() && bl.x() <= bx.right()
		if (b) {
			bl.bottom(bx.top())
		}
		return b
	}
}