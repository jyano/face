_canDrawImg = function (el) {
	el.me = function me(n) {//randomly draw my face
		var g = G(arguments), n = g[0] || 200
		if (x.me.d) {
			clearInterval(x.me.d);
			x.me.d = false
		}
		else {
			x.me.d = I(function () {
				x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
			}, n)
		}
		return x
	}
	el.me.shouldDrawMeId = false
	el.mugX = function (m) {
		qP('/mug', {u: m}, function (m) {
			x.fit(m)
		})
		return x
	}
	el.tick = function () {
		var ctx = this.ctx()
		ctx.tick.apply(ctx, arguments)
		return this
	}
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//this just a simple proxy to drawImage // dont use?
	el.drawImage = el.dI = function () {
		var el = this, g = G(arguments)
		g[1] = N(g[1]) ? g[1] : 0
		g[2] = N(g[2]) ? g[2] : 0
		$(el)[0].getContext('2d').drawImage.apply(
				$(el)[0].getContext('2d'), g
		)
	}
	//this will create the image (from string), and then draw it
	el.dr = el.draw = function () {
		$l('el.dr')
		var el = this, g = G(arguments)
		$.i(g.f, function (i) {
			g[0] = i
			__g = g
			el.dI.apply(el, g)
		})
	}
	el.fit = function f(i, x, y) {
		var el = this//$l('fit: - el.W():' + el.W())
		i = i || 'me'
		x = x || 0
		y = y || 0
		el.draw(i, x, y, el.W(), el.H())
		//el.draw(img, X, Y, el.width(), el.height())
		return el
	}
	el.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.img(i, function (i) {
				that.draw(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	}
	//draw it where u say, but as if its reg point was its center
	el.drawRegCenter = el.dC2 = function f(i, x, y) {
		var that = this
		$.img(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
		return this
	}
	el.Cd = function (a, x, y) {
		var that = this
		a = a || 'me'
		x = x || 100
		y = y || 100
		$.img(a,
				function (img) {
					that.drawImage(
							img.src,
							x - img.W() / 2,
							y - img.H() / 2
					)
				})
	}
	return el
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
FIT = CANFIT = CV4 = function () {
	c = __C();
	c.fit('me')
	m = $.c(800).fit('me')
	g = $.c('b', 600).fit('guy')
}
CV8 = RUB1 = function () {
	loc = {}
	rr = null
	guidewires = false
	dragging = false
	mousedown = {}
	data = null
	c = can = $.c('y', 1000, 800).fit('me')
	c.$$(function () {
		c.fit('me')
	})
	c.MD(
			function (x, y) {
				data = can.gD()
				dragging = true
				mousedown = {x: x, y: y}
			}
	)
	c.MM(
			function (X, Y) {
				var m = {x: X, y: Y},
						d = mousedown
				if (dragging) {
					can.pD(data)
					can.ln(d.x, d.y, d.x, m.y)
					can.ln(d.x, d.y, m.x, d.y)
					can.ln(m.x, m.y, m.x, d.y)
					can.ln(m.x, m.y, d.x, m.y)
				}
			}
	)
	c.MU(
			function (X, Y) {
				dragging = false
				var d = mousedown, x1, x2, y1, y2
				if (X > d.x) {
					x1 = d.x;
					x2 = X
				} else {
					x1 = X;
					x2 = d.x
				}
				if (Y > d.y) {
					y1 = d.y;
					y2 = Y
				} else {
					y1 = Y;
					y2 = d.y
				}
				rr = [x1, y1, x2, y2]
				can.pD(data)
				can.crop(rr)
				// data = can.gD()
			}
	)
}
CV9 = RUB = function () {
	can = $.c('y', 1000, 800)
	can.$$(function () {
		can.fit('me')
	})
	can.fit('me')
	guidewires = false
	dragging = false
	mousedown = {}
	loc = {}
	rr = null
	data = null
	can.MD(function (x, y) {
		data = can.gD()
		dragging = true
		mousedown = {x: x, y: y}
	})
	can.MM(function (X, Y) {
		var m = {x: X, y: Y}, d = mousedown
		if (dragging) {
			can.pD(data)
			can.ln(d.x, d.y, d.x, m.y)
			can.ln(d.x, d.y, m.x, d.y)
			can.ln(m.x, m.y, m.x, d.y)
			can.ln(m.x, m.y, d.x, m.y)
		}
	})
	can.MU(function (X, Y) {
		dragging = false
		var d = mousedown, x1, x2, y1, y2
		if (X > d.x) {
			x1 = d.x;
			x2 = X
		} else {
			x1 = X;
			x2 = d.x
		}
		if (Y > d.y) {
			y1 = d.y;
			y2 = Y
		} else {
			y1 = Y;
			y2 = d.y
		}
		rr = [x1, y1, x2, y2]
		can.pD(data)
		can.crop(rr)
		//    data=can.gD()
	})
}