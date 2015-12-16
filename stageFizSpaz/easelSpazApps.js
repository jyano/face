USINGLAYERSINEASEL = function () {
	Q(['me', 'guy'], function (q) {
		s = cjs.S()
		me = q.bm('me').a2(s).sXY(3)
		guy = q.bm('guy').a2(s).sXY(.5).drag()
		$.button('s.sXY(2)', function () {
			s.sXY(2)
		}).A()
		cjs.tick(function () {
			me.X(guy.x * 2.2 - 140)
			me.Y(guy.y * .2)
		})
	})
}
SHAPES = function () {
	z()
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
}
EASELART = function () {
	z()
	s = stage = cjs.stage(500, 600).A()
	s.can.P('a').XY(300)
	s.A(h = shape = cjs.shape())
	h.rect(100, 200, 0, 200, 'red')
			.rect(100, 100, 100, 20, 'green')
			.rect(145, 120, 10, 80, 'orange')
			.circ(105, 100, 20, 'blue')
			.circ(105, 100, 8, 'black')
			.circ(200, 100, 20, 'blue')
			.circ(200, 100, 8, 'black')
			.circ(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.tweenLoop(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.tweenLoop(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
CENTERSHAPE = function () {
	z()
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
GRAPHICSTEST = function () {
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
RADIALGRADRECT = function () {
	s = cjs.S()
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = cjs.shape(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
				x1,
				y1,
				r1,
				x2,
				y2,
				r2
		)
				.dr(0, 0, 400, 400)
				.endFill()
		// x--
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
}
RADIALGRADCIRC = function () {
	s = cjs.S()
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = cjs.shape(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1,
				y1,
				r1,
				x2,
				y2,
				r2
		)
				.dc(0, 0, 100)
				.endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}
EASELCONVEX = function () {
	s = cjs.S()
	s.poly([[-100, -10], [0, 100], [100, 20]],
			'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly(
			[[-40, 40], [-40, -40], [40, -40], [40, 30]],
			'blue', 'white').XY(200, 200)
}
CONVEX = function () {
	w = b2d.W({grav: 0}).debug()
	b = w.dyn(300, 300)
	f = b.convex('green', [[0, 0], [0, -200], [100, 0]])
	b.convex('blue', [[0, 30], [-300, -20], [100, 0]])
	b.convex('pink', [[0, 0], [0, -20], [10, 0]],
			[[0, 30], [-30, -20], [10, 0]])
	b2 = w.dyn(300, 300)
	b2.convex('red', [[0, 0], [0, -20], [10, 0]])
	b2.convex([[0, 30], [-30, -20], [10, 0]])
	b3 = w.dyn(300, 300)
	b3.convex('green', [
		[-150, 0], [-120, -20], [-80, -50], [0, -30]
	])
	b3.convex('red',
			[[-30, -30], [-20, 10], [-10, 60]
			])
	b3.convex('orange',
			[[-30, -30], [-20, -50], [10, -20]
			])
	w.verts(300, 500,
			[
				['pink', [-20, -20], [0, -30], [10, 10]],
				['brown', [0, 0], [30, -50], [50, -10]]
			]
	)
	dot = function () {
		b.dot()
		f.dot()
	}
	//setTimeout(dot, 5000)
	//w.convex !!!!
	_.times(50, function () {
		w.circ(200, 30, 5)
	})
	b.fixedRot(true)
	cjs.tick(function () {
		b.linVel(0)
		b.angVel(0)
	})
}
VERTS = function () {
	w = b2d.W().debug()
	thingy = [['pink', [-20, -20], [0, -30], [10, 10]],
		['brown', [0, 0], [30, -50], [50, -10]]]
	_.times(100, function () {
		w.verts(Math.random() * 600, Math.random() * 300 + 200, thingy)
	})
}
PITFALL = function () {
	b2d.levelScrollX()
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	turtle2 = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	t = w.vertsKin(400, 280, turtle).fixedRot(true)
	t2 = w.vertsKin(700, 280, turtle2).fixedRot(true)
	setInterval(function () {
		t2.linVel(5, 0)
		setTimeout(function () {
			t2.linVel(-5, 0)
		}, 1000)
	}, 2000)
}
LINGRADBG = function () {
	w = b2d.W()
	s = w.s
	h = s.shape()
}
THREECANS = function () {
	c1 = $.can('a', 800, 400)
	c2 = $.can('X', 800, 400)
	c3 = $.can('X', 800, 400)
}
