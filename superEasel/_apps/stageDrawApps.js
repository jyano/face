function needsBoot() {
	SGUN = SGUNSHIP = function () {
		St()
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(M.atan(y / x))
			if (x < 0) {
				d = M.abs(d) + 90;
				if (y < 0) {
					d = M.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			h = t = $H().XY(100).rY(20).vX(1).vY(1)
			h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			$.kD('d', function () {
				t.rt(6, '+')
			})
			$.kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(h)
				st.MD(function (e) {
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			_.ev(.05, function () {
				h.X(t.vx, '+').Y(h.vy, '+')
				h.rotation = angleInDegrees(t)
			})
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hd(),
				$.bt('sgun', function () {
					sgun(guy)
				}))
		boot = $.boot()
		boot.A(div, st.canvas)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		_.t(100, function () {
			var a = ast();
			a.a();
			a.p()
		})
		st.t(function () {
			if (PL) {
				_.e(aA, function (a) {
					a.u()
				})
			}
		})
		sgun(guy)
	}
}
function needsLoader() {
	GREY = function () {
		Q(function () {
			Q.b('me').a2($St().t())
					.fl($cMF($cM().s(-100)))
					.ca(0, 0, 1000, 1000)
		})
	}
}
function needsS$() {
	FAIL = SKETCH = function () {
		s = cjs.stage(500, 500).A()
		s.can.P('a').XY(300)
		s.bm('me', 0.2, function (bm) {
		})
		s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
		s.circle(100, 100, 10, 'red', 'yellow')
				.circle(10, 100, 100, 'black', 'purple')
				.circle(100, 10, 100, 'blue', 'red')
				.circle(150, 150, 120, 'red', 'blue')
				.circle(30, 'brown', 'gray')
		St()
		ct = s.ct(1000, 300).drag()
		ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
		h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
		h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
		st.u()
		St()
		ct = s.ct(600, 300)
		ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
		ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
		h = ct.Sh()
		h.graphics.FS()
		h.rec({
			w: 100, h: 200, a: 20,
			c: 'b', C: 'w', l: 20, bm: 1
		}).X(100)
		_.in(8, function () {
			h.X(0)
		}) //notice how gradient is seen behind the bm!!!
	}//D 
	SHAPEZ8 = function () {//C- only PLAY!?
		SHAPS8 = function () {
			z()
			s = stage = $St(500, 500)
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
			s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
			s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
			s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
			s.Sh().cir(150, 150, 120, 'c', 'd')
				//.fn(SL)
					.cir(30, 'x', 'x')
		}
		SHAPES9 = function () {
			z()
			s = stage = St(500, 500).a()
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
		}
		St()
		s.can.P('a').XY(200)
		s.bm('me')
		s.bm('me', 0.2, function (bm) {
		})
		h = $h().cir()
		s.A(
				$h().cir(100, 'blue', 'green').XY(100, 100).drag()
		)
		s.h().cir(100, 100, 10, 'red', 'yellow')
		s.h().cir(10, 100, 100, 'black', 'purple')
		s.h().cir(100, 10, 100, 'blue', 'red')
		s.h().cir(150, 150, 120, 'red', 'blue')
		s.h().cir(30, 'brown', 'gray')
		s.u()
	}
}
function needsOBx() {
	DRL = DRAWLINE = XX5 = HDL11 = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
		DRAWLINE1 = DLN = function () {
			St()
			h.dl(50, 50, 200, 200)
			h.dl(V(300, 500), [500, 200])
		}
	}
}
function needsStagePoly() {
	POL2 = XX2 = EASELCONVEX8 = function () {
		s = $St()
		s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
		s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
		s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
	}
	POL3 = CPOL4 = function () {
		St()
		vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
		//h.lt([450, 410],[600, 500], [500, 500])
		//h.lt([[450, 410], [600, 500], [500, 500]])
		//h.lt( V(450, 410), V(600, 500), V(500, 500))
		h.pol({
			c: 'r',
			C: 'b',
			l: 20,
			v: vs
		})
	}
}
function needsStageH() {
	POL5 = CPOL0 = function () {
		__St()
		vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
		//h.lt([450, 410],[600, 500], [500, 500])
		//h.lt([[450, 410], [600, 500], [500, 500]])
		//h.lt( V(450, 410), V(600, 500), V(500, 500))
		h.pol({
			c: 'r',
			C: 'b',
			l: 20,
			v: vs
		})
	}
	POL0 = HPOLY8 = function () {
		St()
		v = [[-100, 0], [0, -100], [100, 50]]
		s.h(600, 300).poly({v: v, bf: 'me'})
		s.h(900, 300).poly({v: v, lf: 1})
		s.h(800, 300).poly({v: v, rf: 1})
		h = s.h(200, 300).drag().bf('me', function () {
			h.dc([150], [200, 0, 150])
		})
		st.u()
	}//C
	POL1 = HPOL = function () {
		st = $St()
		h = st.h('+').XY(0, 0)
		h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
		h.pol(vs1, 'r', 'y', 30)
		h.pol(vs1, 200, 200, 'r', 'y', 3)
	}
	POL4 = POLY = EVEX = EASELCONVEX = function () {
		s = cjs.S()
		s.poly([[-100, -10], [0, 100], [100, 20]],
				'red', 'white', 10).XY(200, 300)
		s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
		s.poly(
				[[-40, 40], [-40, -40], [40, -40], [40, 30]],
				'blue', 'white').XY(200, 200)
	}
}
function usesGrad() {
	GRAPHTEST8 = function () {
		St();
		img = $.i('me', function () {
			s.ct().A(h = $Sh())
			gx = h.graphics.FS()
			s.A($Bm(img))
			gx.ss(32).dr(20, 20, 920, 360);
			fns = [
				function () {
					return $Sh(12, 10)
							.lf('b', 'g', 130).dr(130)
				},
				function () {
					return $Sh(40, 10, 'b', 16)
							.ls('r', 'w', 70, 140).de(70, 140)
				},
				function () {
					return $Sh(80, 80)
							.C('b', 8).rf('w', 'y', 40).dc(40)
				},
				function () {
					return $Sh(12, 10, 18)
							.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
				},
				function () {
					return $Sh(12, 12, 'g', 'r', 8)
							.rr(130, 30)
				}, //w(h) and r
				function lt() {
					return $Sh().C('o')
							.ss(16, 'round', 'round')
							.mt([40, 10], [90, 90], [90, 140])
				},
				function star() {
					return $Sh(80, 85, 'y', 'b', 3)
							.pStr(0, 0, 80, 5, .8, -95)
				},
				function hex() {
					return $Sh(80, 40, 'p')
							.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
				}
			]
			_.e(fns, withEachFn)
			function withEachFn(cont, i) {
				var W = 155, H = 155, P = 5, C = 4 //pad, cols
				s.A(tile(cont()).XY(
						42 + (W + P) * (i % C),
						42 + (i / C | 0) * (H + P)))
			}
		})[0]
		tile = createTile = function (x, y) {
			var bg, til
			bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
			til = cjs.ct().A(bg)
			if (N(x)) {
				til.X(x)
			}
			if (N(y)) {
				til.Y(y)
			}
			if (O(x)) {
				til.A(x)
			}
			return til
		}
	}
}
  
CEN = YSTAR = CENSHP = function () {
	stage = cjs.stage(500, 600).A()
	shape = new cjs.Shape()
	SL(shape)
	stage.A(shape)
	shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.XY(200)
		me.sXY(.4)
	})
}
CSH = CENTERSHAPE8 = function () {
	CENTERSHAPE9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape();
		SL(shape)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
		shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		shape.g.beginFill("orange").drawPolyStar(
				100, 100, 50, 5, 0.6, -90)
		shape.xy(200)
		stage.bm('me', function (b) {
			me = b
			me.rgc()
			me.xy(200)
			me.sXY(.4)
		})
	}
	stage = $St(500, 600)
	shape = stage.Sh()
	gx = shape.graphics.FS()
	SL(shape)
	shape.rec(0, 0, 100, 100, 'a')
	shape.rec(0, -75, 25, 50, 'b')
	shape.rec(0, -200, 100, 100, 'r')
	shape.cir(100, 200, 40, 'z', 'x')
	gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	gx.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.XY(200)
		me.sXY(.4)
	})
	CENTERSHAPE9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape();
		SL(shape)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
		shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		shape.g.beginFill("orange").drawPolyStar(
				100, 100, 50, 5, 0.6, -90)
		shape.xy(200)
		stage.bm('me', function (b) {
			me = b
			me.rgc()
			me.xy(200)
			me.sXY(.4)
		})
	}
}
GXPOL = function () {
	$S$().Gx().FS().poly([vs1])
}
BOWL = function () {
	St()
	ct = container = c = $Ct().a2(st)
	plX = st.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circ = cjs.cir(plX, plY, plR, 'yellow')
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A(cjs.cir(10, 'z').XY(x, y))
		})
	})
}