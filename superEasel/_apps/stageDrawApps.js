 
	YSTAR = CENSHP = function () {
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
	POL4 = POLY = EVEX = EASELCONVEX = function () {
		s = cjs.S()
		s.poly([[-100, -10], [0, 100], [100, 20]],
				'red', 'white', 10).XY(200, 300)
		s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
		s.poly(
				[[-40, 40], [-40, -40], [40, -40], [40, 30]],
				'blue', 'white').XY(200, 200)
	}
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
 
 
 
CENTERSHAPE8 = function () {
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
GXLT = function () {
	$S$().Gx().FS()._mt(100, 300)._lt(300, 100)._lt(500, 200)._lt(800, 200)
			._lt(100, 300)
}
GXP = function () {
	$S$().Gx().FS()._pol(vs1)
}
GX1 = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	gx = st.Gx()
	gx.C('b').dc(200, 100, 40)
}
GX2 = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	gx = st.Gx().SS()
	$.i('me', function (img) {
		gx.F()
		gx.dc(200, 200, 200).S()
		gx.dc(400, 400, 200).S()
		gx.dc(700, 700, 200).S()
		gx._bf(img)
		gx.dc(200, 200, 200).S()
		gx.dc(400, 400, 200).S()
		gx.dc(700, 700, 200).S()
	})
}
GOB = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		//gx._bf(img)
		gx.dcO({x: 100, y: 200, r: 200})
		gx.C('R').dcO({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
REC1 = function () {
	st = _$St().t()
	h = st.Sh().drag()
	gx = h.graphics
	gx.FS()._dr()
}
GDR = function () {
	st = _$St().t()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 10)
}
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
XX6 = GXTX = GRAPHICSTEST = function () {
	stage = cjs.stage(800, 500).A()
	canvas = stage.canvas
	// grab canvas width and height for later calculations:
	w = canvas.width
	h = canvas.height
	img = $.img('me', layout)[0]
	function layout() {
		var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
			createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
		var padding = 5
		var _width = 155
		var _height = 155
		var cols = 4
		var space = 0
		var border = createBorder();
		_.times(arr.length, function (i) {
			var tile = arr[i]()
			tile.x = 42 + (_width + padding) * (i % cols)
			tile.y = 42 + (i / cols | 0) * (_height + padding)
			stage.A(tile)
		})
		stage.A(border)
		stage.update()
	}
	
	function createBorder() {
		var s = cjs.shape()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = cjs.shape().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = cjs.shape().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = cjs.shape().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = cjs.shape().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = cjs.shape()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = cjs.shape().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = cjs.shape().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = cjs.shape().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = cjs.shape()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
DRAWLINE = XX5 = HDL11 = function () {
	St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
	DRAWLINE1 = DLN = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
	}
}
IX1=INDEXX = function () {
	z()
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}
IX2 = function () {
	z()
	s = $.dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ch(b, 3)
	})
}
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
GREY = function () {
	Q(function () {
		Q.b('me').a2($St().t())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
}
 
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
	s.b('me')
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
CIRTUT = function () {
	cv = $.c(1000, 500).A()
	st = new cjs.S(cv[0])
	st.t()//.b()
	ct = $Ct().XY(0, 0).a2(st)
	h = $H().a2(ct).XY(0, 0).a2(ct)
	h.f('b').dc(400, 100, 10)
	/*
	 ct.A(
	 cjs.cir({
	 r: 100,
	 c: 'r', C: 'g', l: 50,
	 oX: 100
	
	 })//.XY(0,0)//.XY(300,400)
	 )
	
	 */
}
CIRCSTROKE8 = function () {
	St()//C (PLAY needs update, WAP not?!)
	gx = h.graphics.FS()
	h.c('b', 'r', 10).XY(-100, -100)
	h.dc(200, 200, 50).dc(400, 200, 50).dc(600, 200, 50)
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
}
HDC = function () {
	h = $Sh()
	h.graphics.f('blue')
	h.dc(100, 100, 100)
	h.graphics.f('yellow')
	h.dc(200, 100, 100)
	//.cir()
	_$St().A(h).u()
}
HCR = function () {
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	_$St().A(h).u()
}
HDC = function () {
	h = $Sh()
	h.graphics.f('blue')
	h.dc(100, 100, 100)
	h.graphics.f('yellow')
	h.dc(200, 100, 100)
	//.cir()
	_$St().A(h).u()
}
HCR = function () {
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	_$St().A(h).u()
}
DWW = function () {
	gx = $Gx().f(cjs.rgb(255, 0, 0)).ss(10).s('white')
	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	_$St().A($Sh(gx).XY(300, 100)).u()
}