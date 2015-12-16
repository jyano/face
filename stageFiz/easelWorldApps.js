RADIANTBALLS = function () {
	s = cjs.S('a')
	b1 = s.cannonBall(100, 200)
	b2 = s.basketBall(100, 100)
	b3 = s.beachBall(50, 50)
	b3 = s.snowBall(50, 300)
}
DIRTYBALLS = function () {
	W({grav: 0})
	w.dirtyBall = function (x, y, stop1, stop2) {
		return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
	}
	w.gradBall(200, 100, 60, 'z', 'w')
	w.dirtyBall(350, 100, 0, .9)
	w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
	w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
	w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
	w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
	w.dirtyBall(500, 300, .6, 1)
	w.dirtyBall(650, 300, .9, 1)
	w.dirtyBall(800, 300, 1, 1)
}
STATUSBALL = function () {
	W({grav: 0})
	b = w.D(500, 300, 'r', 60).bS(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	$.ev(.1, function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	})
}
SWITCHBALL = function () {
	W({g: 0})
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60
		).dc(60)
	}
	frames = [
		[0, .1],
		[0, .3],
		[0, .6],
		[0, .9],
		[0, 1],
		[.3, 1],
		[.6, 1],
		[.9, 1],
		[1, 1]]
	curr = 0
	$.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
}
HEALTHBALL = function () {
	W({g: 0})
	w.badGuy(500, 300)
}
SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
	w = b2d.W({grav: 0})
	advanceN = function (n, dif) {
		n += dif
		if (n >= 1) {
			n = .9;
			dif *= -1
		}
		if (n <= 0) {
			n = 0;
			dif *= -1
		}
		return {n: n, dif: dif}
	}
	switchBall1 = function (x, y) {
		var dif = .1, n1 = 0, n2 = 0,
				b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		I(function () {
			n2 = advanceN(n2);
			drawGrad()
		}, 100)
		function drawGrad() {
			b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
		}
		
		function advanceN(n2) {
			n2 += dif
			if (n2 >= 1) {
				n2 = .9;
				dif *= -1
			}
			if (n2 <= 0) {
				n2 = 0;
				dif *= -1
			}
			;
			return n2
		}
	}
	switchBall2 = function (x, y) {
		var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		ball.drawGrad = function (n1, n2) {
			return this.sprite.rG(['r', 'y'],
					[n1, n2], 60).dc(0, 0, 60)
		}
		ball.animGrad1 = function () {
			var that = this,
					dif = .1, n2 = 1, n1 = 0
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1, n2)
					},
					300)
		}
		ball.animGrad2 = function () {
			var that = this, dif = .1
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1)
					},
					300)
		}
		ball.animGrad1()
	}
	switchBall1(100, 100)
	switchBall2(300, 100)
	w.s.back.linGrad('u', 'p')
	w.s.HUD.bm('me', function (bm) {
		me = bm.sXY(.3).XY(1150, 550).drag()
	})
}
TRIPLESTAGE = function () {
	w = b2d.W({grav: 0})
	b = w.ball(500, 300, 60)
	b.bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num], 60)
			.dc(0, 0, 60)
	w.s.HUD.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.s.back.bm('guy', function (b) {
		b.XY(200).drag()
	})
	w.s.back.linGrad('b', 'z')
}
RADIANT = function () {
	W().P()
	p.lD(1).warp()
	$.space(
			function () {
				p.polyBul()
			}
	)
	badGuy = w.badGuy(
			400, 200).warp().den(.1)
	$.ev(.2, function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	})
}
function box() {
	MES = function () {
		W([], {w: 0})// what took me so long to make this?
		w.C('y')
		w.me(600, 300, 14)//.stat()
		w.l('z', 600, 0, 600, 600)
		_.ev(1, function () {
			w.me(R(1000, 100), R(-100))
		})
	}//D
}