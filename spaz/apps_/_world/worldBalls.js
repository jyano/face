PIT = BALLPIT = function () {
	$W();
	_.ev(.04, function () {
		w.s.xT(w.s.t(function () {
			if (R(5) < 3) {
				w.ball(20)
			}
		}))
	})
}//B+
 
	COOLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
						.c('x', 'X', 1)
						.bf('sun', [0, .9, 1, 1, -40, 2])
						.cir(50)
			})
		})
	}//B
 
CLICKME = BMBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, 'CLICK me')
	})
}
HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
STATUSBALL = ILLUSION = GRADTWEEN = function () {
	W({grav: 0})
	b = w.S(500, 300, 'r', 60)
			.bS(w.s.h(500, 300))
	num = 0
	dif = .1
	shape = b.sp()//b.sprite
	shape.rf(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	_.ev(.1, function () {
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
}//D- needs PLAY
BADBALL = function () {
	W({g: 0})
	w.badGuy(500, 300)
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60).dc(60)
	}
	frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
	curr = 0
	_.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
}//D+ needs PLAY
CHICKBALLS = function () {
	W(1200, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({bf: 'chicks', r: 120})
		})
	})
}
HAIRBALLS = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
COOLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 50)
			b.$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}
CANVASBMFILLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, '$$ me')
	})
}
CANTFBALLS2 = function () {
	W([400, 400], {w: 'U'}).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		$.ev(3, function () {
			var b = w.D(200, 200, 'b', 80)
			b.$h('x', 'X', 1).c('x', 'X', 1).bf(
					w.s.cv0,
					cjs.m2d(
							.6, .1, .1, .6, -40, 180
					)
			).cir(80)
		})
	})
}
TEXTBALLS = function () {
	W([400, 400], {}).C('w')._(function () {
		b = w.D(200, 200, 'b', 80)
		b.gx = b.gx || w.g.ct()
		b.gx.qB('chicks').rC().sXY(.1).Y(30)
		nice = w.i.T(0, 140, 'nice', 100, 'o')
		b.bS(nice)
	})
}