 
	old = function () {
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
		h.vs1 = function () {
			var h = this, g = G(arguments), o;
			$l('h.vs')
			o = {v: g.f, ox: g.s, oy: g.t}
			o.ox = N(o.ox, 0)
			o.oy = N(o.oy, 0)
			h.mt(
					_.f(o.v)[0] + o.ox,
					_.f(o.v)[1] + o.oy
			)
			_.eR(o.v, function (v) {
				h.lt(v[0] + o.ox, v[1] + o.oy)
			})
			return h
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
		h.vs = function (vs, x, y) {
			return this.mt(M.os(vs, x, y))
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
	}
	cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
		var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
		shp.dc(0, 0, r)
		return shp
	}
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	HUD = function () {
		st = cjs.HUD('r', 500, 500).A()
		st.bm('guy')
		st.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = cjs.shape(10, 10).a2(s).drag().opacity(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
 