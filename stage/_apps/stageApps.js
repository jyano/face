function toWeb() {
	TNGL = TANGLE = function () {
		z()
		a = $.dA('r', 50, 50).XY(50).A().pad(10)
		b = $.dA('b', 100, 100).XY(100).A().pad(10)
		c = $.dA('g', 200, 200).XY(200).A().pad(10)
		d = $.dA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
}
GR0 = GRD = TESTGRADWORKS = function () {
	z()
	c = $.c('y', 500).A()
	g = c.context.createLinearGradient(50, 0, 500, 100)
	g.addColorStop(.2, 'orange')
	g.addColorStop(.6, 'red')
	g.addColorStop(.8, 'green')
	c.context.fillStyle = g
	c.fillRect()
}
GR3 = GRADTX = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
GR2 = TXG = TESTGRAD = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}
	).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
GR1 = LR2 = LINRAD2 = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG1 = RADIALGRAD1 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	stage.addChild(shape)
	shape.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.update()
}
RG2 = RADIALGRADFILL2 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	stage.addChild(
			h = new createjs.Shape()
	)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	stage.update()
}
CIRCRG8 = GRADS = function () {
	s = St()
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = $h(10, 10).a2(s).drag().al(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	h2 = $h(500, 100).a2(s);
	h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
	////////
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
}//C
REC8 = GRADS1 = function () {
	s = $St()
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
	///////////////
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
	h = s.h(480, 270).drag()
	h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
	s.h(180, 270).drag()
			.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
			{w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
}//B+
OVALS8 = GRADS2 = SETTRANSFORM = function () {
	s = $St(800).bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
	//////
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({
		C: 'b',
		lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
	}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B+
///////////
LR0 = LINRAD = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LR1 = LINRAD1 = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
RG1221 = RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG121 = RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
MICK = function () {
	St()
	ct.mick = function (x, y, lf) {
		var ct = this,
				h = ct.h(x, y).drag()
						.c({l: 20, C: 0, lf: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
		ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
		return h
	}
	s.mick(500, 200)
	s.mick(700, 100, {c1: 'b', c2: 'X'})
	s.mick(700, 300, {c2: 'b'})
	s.mick(100, 100, {y2: 10})
	s.mick(100, 200, {y2: 200})
	s.mick(100, 300, {x2: 100})
}
function horrible() {
	RG11 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG141 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG151 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
	RG161 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	RG711 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG11 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG171 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
	RG161 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	RG1441 = RADIALGRADRECT = function () {
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
	RG113 = RADIALGRADCIRC = function () {
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
	RG11 = RADIALGRADCIRC = function () {
		s = $St()
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
			h.rf('b', "o", x1,
					y1,
					r1,
					x2,
					y2,
					r2)
					.dc(0, 0, 100)
					.ef()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
	}
	RG13 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG14 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
		// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
		// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
}

function filts() {
	BLUR = function () {
		s = $St(500).dg()
		s.mug(function (b) {
			var ag = 0, rg = 100, sp = 0.04
			z()
			s.C('x')
			b.XY(100)
			b.cc()
			T.on('tick', function (e) {
				v = M.sin(ag += sp) * rg
				b.cc('+').fl([blF(v, v, 2)])
				s.u(e)
			})
		})
	}
	BLURFILT = function () {
		z()
		st = $St('z', 800)
		h = $H().XY(100).a2(st).f('r').dc(50)
		fl = h.fl($bF(50, 50, 10))
		bd = fl.getBounds()
		h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
		/*
		 h.startMoving()
		 h.vx = 1
		 h.vy = 1
		 */
	}
	BLURFILT2 = function () {
		z()
		stage = cjs.stage('black', 800).tick().A()
		stage.bm('me',
				function (bm) {
					var blurFilter = new cjs.BlurFilter(5, 10)
					bm.filters = [blurFilter]
					var bounds = blurFilter.getBounds()
					bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
				}
		)
	}
	BLURFILT3 = function () {
		z()
		$l('welcome to BLUFILTER3')
		$l('here we will attempt an animated blur filter')
		st = stage = $St('z', 800)
		var blurAmount = 0, blurMultiple = 40, speed = 0.06
		st.bm('me',
				function (bm) {
					bm.XY(100, 300).dg()
					bF = $bF(5, 10)
					bm.filters = [bF]
					bd = bounds = bF.getBounds()
					bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
					cjs.Ticker.on('tick', function () {
						blur = M.sin(blurAmount += speed) * blurMultiple;
						bm.filters = [$bF(blur, blur, 2)]
						bm.ca()
					})
				})
	}
	ALF1 = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
		examples.showDistractor()
		i = image = new Image();
		i.onload = handleComplete
		i.src = "/chicks.png"
		st = stage = new cjs.Stage("testCanvas")
		function handleComplete() {
			examples.hideDistractor()
			cjs.Touch.enable(st);
			st.enableMouseOver();
			st.MD(handleMouseDown);
			st.MU(handleMouseUp);
			st.MM(handleMouseMove);
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
			t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
			t.textAlign = "center"
			st.A(bl = $Bm(i), t, b = $Bm(i)) //x=0, y=0, quality=1
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = $H().f("#FFFFFF").dc(25)
			cu.cursor = "pointer"
			st.A(cu)
		}
		
		function handleMouseDown() {
			isDrawing = true;
			oldPt = st.m();
			oldMidPt = oldPt;
		}
		
		function handleMouseMove() {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				return st.u()
			}
			midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
			h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp() {
			updateCacheImage(true);
			isDrawing = false
		}
		
		function updateCacheImage(update) {//update the shape's cache
			if (update) {
				h.ca(i)
			} else {
				h.ca(i)
			}//make a new alphaFilter from the shape's cache
			//apply the filter to the bitmap
			b.filters = [$aF(h.cC())]// update the bitmap's cache, to apply its filter
			if (update) {
				b.ca()
			} else {
				b.ca()
			}//update the st
			st.u()
		}
	}
	ALF11 = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		examples.showDistractor()
		st = new cjs.Stage("testCanvas")
		i = new Image()
		i.onload = function () {
			examples.hideDistractor()
			cjs.Touch.enable(st)
			st.enableMouseOver()
			st.MD(function () {
				isDrawing = true;
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			});
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true)
			})
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
			t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
			t.textAlign = "center"
			st.A(bl = $Bm(i), t, b = $Bm(i))
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
		}
		i.src = "/chicks.png"
		function updateCacheImage(update) {
			if (update) {
				h.ca(i)
			} else {
				h.ca(i)
			}
			b.filters = [$aF(h.cC())]
			if (update) {
				b.ca()
			} else {
				b.ca()
			}
			st.u()
		}
	}
	ALF = function () {
		$.i('chicks', function (e, i) {
			St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			st.A(
					bl = $Bm(i._),
					t = $T('Drag to Reveal!!', "20px Arial", "#FFF").XY(st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i._)
			)
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
			st.MD(function () {
				isDrawing = true;
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			});
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true)
			})
			function updateCacheImage(update) {
				if (update) {
					h.ca(i._)
				} else {
					h.ca(i._)
				}
				b.filters = [$aF(h.cC())]
				if (update) {
					b.ca()
				} else {
					b.ca()
				}
				st.u()
			}
		})
	}
	MASK = function () {
		wMb(function (b) {
			z()
			st = $St(600).A(b.TR())
			b.fl(
					$aF(
							$Gx().lf(
									trx(1, 0), [0, 1], 0, 0, 200, 200
							).dr0(400).H().cc(400).cc('*')
					)
			)
			b.cc(400)
		})
	}
	COLOR = clr = function (r) {
		var ag = 0, rg = 100, sp = 0.04
		wMb(function (b) {
			z();
			s = St(500).dg().a().c('X').a(b.XY(100))
			b.cc()
			b.fl(
					[r == 'g' ? $cMF(.3, 1, .3, 1, 0, 0, 0, 0)
							: r == 'b' ? $cMF(.3, .3, 1, 1, 0, 0, 0, 0)
							: r == 'r' ? $cMF(1, .1, 1, 1, 0, 0, 0, 0)
							: r == 'rg' ? $cMF(1, 1, .1, 1, 1, 1, 20, 0)
							: $cMF(1, .1, 1, 1, 0, 0, 0, 0)]
			)
			b.cc('+')
		})
	}
	COLORMATRIX = function () {
		var g = G(arguments);
		g[0] = g[0] || 'a'
		wMb(function (b) {
					b.XY(100).cc();
					_.e(g, function (mf) {
						b.clMF(mf, '+')
					})
				},
				St(500).dg().A().C('X'))
	}
	AMR = ALPHAMASKREVEAL = function () {
		z();
		cjs.testCanvas()
		//  cjs.sharedCode()
		var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
				image, bitmap, maskFilter, cursor, text, blur
		examples.showDistractor()
		image = new Image();
		image.onload = handleComplete
		image.src = "/chicks.png"
		stage = new createjs.Stage("testCanvas");
		text = new createjs.Text("Loading...", "20px Arial", "#FFF");
		text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
		text.textAlign = "center"
		function handleComplete() {
			examples.hideDistractor();
			createjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.addEventListener("stagemousedown", handleMouseDown);
			stage.addEventListener("stagemouseup", handleMouseUp);
			stage.addEventListener("stagemousemove", handleMouseMove);
			drawingCanvas = new createjs.Shape();
			bitmap = new createjs.Bitmap(image);
			blur = new createjs.Bitmap(image);
			blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
			blur.cache(0, 0, 960, 400);
			text.text = "Click and Drag to Reveal the Image.";
			stage.addChild(blur, text, bitmap);
			updateCacheImage(false);
			cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cursor.cursor = "pointer";
			stage.addChild(cursor);
		}
		
		function handleMouseDown(event) {
			oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove(event) {
			cursor.x = stage.mouseX;
			cursor.y = stage.mouseY;
			if (!isDrawing) {
				stage.update();
				return;
			}
			var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
			drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
					.beginStroke("rgba(0,0,0,0.2)")
					.moveTo(midPoint.x, midPoint.y)
					.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			oldPt.x = stage.mouseX;
			oldPt.y = stage.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(update) {
			if (update) {
				drawingCanvas.updateCache();
			} else {
				drawingCanvas.cache(0, 0, image.width, image.height);
			}
			maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bitmap.filters = [maskFilter];
			if (update) {
				bitmap.updateCache(0, 0, image.width, image.height);
			} else {
				bitmap.cache(0, 0, image.width, image.height);
			}
			stage.update();
		}
		
		AMR1 = function () {
			cjs.testCanvas()
			var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
					image, bitmap, maskFilter, cursor, text, blur
			examples.showDistractor()
			image = new Image();
			image.onload = handleComplete
			image.src = "/chicks.png"
			stage = new createjs.Stage("testCanvas");
			text = new createjs.Text("Loading...", "20px Arial", "#FFF");
			text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
			text.textAlign = "center"
			function handleComplete() {
				examples.hideDistractor();
				createjs.Touch.enable(stage);
				stage.enableMouseOver();
				stage.addEventListener("stagemousedown", handleMouseDown);
				stage.addEventListener("stagemouseup", handleMouseUp);
				stage.addEventListener("stagemousemove", handleMouseMove);
				drawingCanvas = new createjs.Shape();
				bitmap = new createjs.Bitmap(image);
				blur = new createjs.Bitmap(image);
				blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
				blur.cache(0, 0, 960, 400);
				text.text = "Click and Drag to Reveal the Image.";
				stage.addChild(blur, text, bitmap);
				updateCacheImage(false);
				cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
				cursor.cursor = "pointer";
				stage.addChild(cursor);
			}
			
			function handleMouseDown(event) {
				oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			}
			
			function handleMouseMove(event) {
				cursor.x = stage.mouseX;
				cursor.y = stage.mouseY;
				if (!isDrawing) {
					stage.update();
					return;
				}
				var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
				drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
						.beginStroke("rgba(0,0,0,0.2)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
				oldPt.x = stage.mouseX;
				oldPt.y = stage.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			}
			
			function handleMouseUp(event) {
				updateCacheImage(true);
				isDrawing = false;
			}
			
			function updateCacheImage(update) {
				if (update) {
					drawingCanvas.updateCache();
				} else {
					drawingCanvas.cache(0, 0, image.width, image.height);
				}
				maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
				bitmap.filters = [maskFilter];
				if (update) {
					bitmap.updateCache(0, 0, image.width, image.height);
				} else {
					bitmap.cache(0, 0, image.width, image.height);
				}
				stage.update();
			}
		}
	}
///// function alphaMaskReveal() {
	ALPH = function () {
		Q(function () {
			st = $St().t()
			me = Q.b('me').a2(st).dg()
			h = Q.b('guy').a2(st)//[0]//.a2(st).dg()
			h = $H()
			h.graphics.lf(["#000000", "rgba(0, 0, 0, 0)"],
					[0, 1], 0, 0, 100, 100)
			h.bf('guy')
			h.dr(0, 0, 100, 100);
			h.cache(0, 0, 100, 100)
			me.filters = [new cjs.AlphaMaskFilter(h.cacheCanvas)]
			me.cache(0, 0, 1000, 1000)
		})
	}
	BLR = function () {
		Q(function () {
			st = $St().t()
			h = st.h(100, 100, 'r').cir(50)
			$.in(1, function () {
				h.cF(0, 0, 0, 1, 0, 0, 255, 0)
				h.ca(-50, -50, 100, 150)
			})
			$.in(2, function () {
				f = h.bF(59, 59, 1)
				bd = f.b()
				h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h)
			})
		})
	}
	/*This example demonstrates revealing an image using another image as the
	 mask. The mask is created by drawing a
	 shape, and then caching the shape to make an image with an alpha
	 channel. It is then applied to the image as
	 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
	 */
	REVEAL = function () {
		Q(function () {
			stage = $St().t()
			var isDrawing,
					drawingCanvas, oldPt, oldMidPt,
					displayCanvas, image, bitmap, maskFilter,
					cursor, text, blur;
//    examples.showDistractor();
			image = $.i('me', function (i) {
				image = i[0]
				//  examples.hideDistractor();
				cjs.Touch.enable(stage);
				stage.enableMouseOver();
				stage.addEventListener("stagemousedown", handleMouseDown);
				stage.addEventListener("stagemouseup", handleMouseUp);
				stage.addEventListener("stagemousemove", handleMouseMove);
				drawingCanvas = new createjs.Shape();
				bitmap = new cjs.Bitmap(image);
				blur = new cjs.Bitmap(image);
				blur.filters = [new createjs.BlurFilter(24, 24, 2),
					new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))]
				blur.cache(0, 0, 960, 400);
				text.text = "Click and Drag to Reveal the Image.";
				stage.addChild(blur, text, bitmap);
				updateCacheImage(false)
				cursor = new createjs.Shape(new createjs.Graphics()
						.beginFill("#FFFFFF").drawCircle(0, 0, 25))
				cursor.cursor = "pointer"
				stage.addChild(cursor)
			})
			stage = new cjs.Stage("testCanvas")
			text = new cjs.Text("Loading...", "20px Arial", "#FFF")
			text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40})
			text.textAlign = "center"
			function handleMouseDown(event) {
				oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			}
			
			function handleMouseMove(event) {
				cursor.x = stage.mouseX;
				cursor.y = stage.mouseY;
				if (!isDrawing) {
					stage.update();
					return;
				}
				var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
				drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
						.beginStroke("rgba(0,0,0,0.2)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
				oldPt.x = stage.mouseX;
				oldPt.y = stage.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			}
			
			function handleMouseUp(event) {
				updateCacheImage(true);
				isDrawing = false;
			}
			
			function updateCacheImage(update) {
				if (update) {
					drawingCanvas.updateCache();
				} else {
					drawingCanvas.cache(0, 0, image.width, image.height);
				}
				maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
				bitmap.filters = [maskFilter]
				if (update) {
					bitmap.updateCache(0, 0, image.width, image.height)
				}
				else {
					bitmap.cache(0, 0, image.width, image.height)
				}
				stage.update()
			}
		})
	}
	ALPHAMASKREVEALWORKS = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
		examples.showDistractor()
		i = image = new Image();
		i.onload = handleComplete
		i.src = "/chicks.png"
		st = stage = new cjs.Stage("testCanvas")
		t = text = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
		t.textAlign = "center"
		function handleComplete() {
			examples.hideDistractor()
			cjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.addEventListener("stagemousedown", handleMouseDown);
			stage.addEventListener("stagemouseup", handleMouseUp);
			stage.addEventListener("stagemousemove", handleMouseMove);
			drawingCanvas = new cjs.Shape()
			bitmap = new cjs.Bitmap(image)
			blur = new cjs.Bitmap(image)
			blur.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
			blur.cache(0, 0, 960, 400)
			text.text = "Click and Drag to Reveal the Image.";
			stage.addChild(blur, text, bitmap);
			updateCacheImage(false);
			cursor = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cursor.cursor = "pointer";
			stage.addChild(cursor);
		}
		
		function handleMouseDown(event) {
			oldPt = new cjs.Point(stage.mouseX, stage.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove(event) {
			cursor.x = stage.mouseX;
			cursor.y = stage.mouseY;
			if (!isDrawing) {
				stage.update();
				return;
			}
			var midPoint = new cjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
			drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
					.beginStroke("rgba(0,0,0,0.2)")
					.moveTo(midPoint.x, midPoint.y)
					.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			oldPt.x = stage.mouseX;
			oldPt.y = stage.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(update) {
			if (update) {
				drawingCanvas.ca()
			} else {
				drawingCanvas.ca(0, 0, image.width, image.height);
			}
			maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bitmap.filters = [maskFilter];
			if (update) {
				bitmap.updateCache(0, 0, image.width, image.height);
			} else {
				bitmap.cache(0, 0, image.width, image.height);
			}
			stage.update();
		}
	}
	ALPHAMASKREVEAL1 = function () {
		z();
		var isDrawing = false
		cjs.testCanvas()
		cjs.sharedCode()
		i = $.i("/chicks.png", handleComplete)[0]
		st = new cjs.Stage("testCanvas")
		t = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
		t.textAlign = "center"
		function handleComplete() {
			cjs.Touch.enable(st);
			st.mO()
			st.MD(handleMouseDown)
			st.MU(handleMouseUp)
			st.MM(handleMouseMove)
			drawingCanvas = new cjs.Shape()
			bm = $Bm(i)
			bl = $Bm(i)
			bl.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
			bl.ca(0, 0, 960, 400)
			t.text = "Click and Drag to Reveal the Image.";
			st.A(bl, t, bm)
			updateCacheImage(false)
			cu = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cu.cursor = "pointer";
			st.A(cu)
		}
		
		function handleMouseDown() {
			oldPt = new cjs.Point(st.mouseX, st.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove() {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return
			}
			midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
			gx = drawingCanvas.graphics
			gx.ss(40, "round", "round")
			gx.s("rgba(0,0,0,0.2)")
			gx.mt(midPoint.x, midPoint.y)
			gx.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(upd) {
			if (upd) {
				drawingCanvas.ca()
			}
			else {
				drawingCanvas.ca(0, 0, i.width, i.height)
			}
			maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bm.filters = [maskFilter]
			if (upd) {
				bm.ca(0, 0, i.width, i.height);
			}
			else {
				bm.ca(0, 0, i.width, i.height)
			}
			st.u()
		}
	}
	ALPHAMASKREVEAL0 = function () {
		z();
		var isDrawing
		cjs.testCanvas()
		cjs.sharedCode()
		i = $.i("/chicks.png", handleComplete)[0]
		st = new cjs.Stage("testCanvas")
		t = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40})
		t.textAlign = "center"
		t.text = "Click and Drag to Reveal the Image.";
		function handleComplete() {
			cjs.Touch.enable(st);
			st.mO()
			st.MD(function () {
				oldPt = new cjs.Point(st.mouseX, st.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			})
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			})
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					st.u();
					return
				}
				midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
				h.graphics
						.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
						.mt(midPoint.x, midPoint.y).qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			})
			h = $H()
			st.A(
					bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
					t,
					bm = $Bm(i)
			)
			updateCacheImage(false)
			cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer")
			st.A(cu)
		}
		
		function updateCacheImage(upd) {
			if (upd) {
				h.ca()
			} else {
				h.ca(i)
			}
			bm.filters = [$aF(h.cacheCanvas)]
			if (upd) {
				bm.ca(0, 0, i.width, i.height);
			}
			else {
				bm.ca(i)
			}
			st.u()
		}
	}
	ALPHAMASKREVEAL00 = function () {
		z();
		var isDrawing
		i = $.i('chicks', function () {
			cjs.sharedCode()
			st = $St(800)  //cjs.Touch.enable(st);
			st.mO()
			st.MD(function () {
				_pt = oldPt = cjs.Pt(st.mouseX, st.mouseY);
				_mPt = oldMidPt = oldPt
			})
			st.MU(uCaI)
			st.MM(function () {
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
				h.graphics.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
						.mt(midPoint.x, midPoint.y)
						.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				uCaI()
			})
			h = $H()
			st.A(
					bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
					bm = $Bm(i)
			)
			uCaI()
			cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer").a2(st)
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h.cacheCanvas), '-').ca(i)
			st.u()
		}
	}
	ALPHAMASKREVEAL000 = function () {
		z()
		var _pt, _mPt
		i = $.i('chicks', function (img) {
			_i = img
			bl = $Bm(i)
			bl.fl($bF(24, 24, 2), $cMF($cM(60)))
			bl.ca(960, 400)
			st = $St(800).mO(1).A(bl, bm = $Bm(i))
			h = $H()
			uCaI()
			cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
			st.MD(function () {
				_pt = $Pt(st.mouseX, st.mouseY)
				_mPt = _pt
			})
			st.MU(uCaI)
			st.MM(function () {
				_pt = $Pt(st.mouseX, st.mouseY)
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				mPt = $Pt(_pt.x + st.mouseX >> 1, _pt.y + st.mouseY >> 1);
				h.ss(50).s("rgba(0,0,0,0.2)").mt(mPt.x, mPt.y).qt(_pt, _mPt)
				_pt = V(st.mouseX, st.mouseY)
				_mPt.x = mPt.x;
				_mPt.y = mPt.y;
				uCaI()
			})
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h), '-').ca(i)
		}
	}
	ALPHAMASKREVEAL = function () {
		z()
		var _pt, _mPt
		i = $.i('chicks', function (img) {
			_i = img
			bl = $Bm(i)
			bl.fl($bF(24, 24, 2), $cMF($cM(60)))
			bl.ca(960, 400)
			st = $St(800).mO(1).A(bl, bm = $Bm(i))
			h = $H().ss(50, 'round', 'round')
			uCaI()
			cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
			st.MD(function () {
				_pt = st.m()
				_mPt = _pt
			})
			st.MU(uCaI)
			st.MM(function () {
				cu.XY(st.m())
				_pt = st.m()
				mPt = $Pt(
						(_pt.x + st.m().x) >> 1,
						(_pt.y + st.m().y) >> 1
				)
				h.s('rgba(0,0,0,0.2)').mt(mPt.x, mPt.y).qt(_pt, _mPt)
				uCaI()
				_mPt = V(mPt)
			})
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h), '-').ca(i)
		}
	}
	ALPHAMASKREVEALNOCU1 = function () {
		$.i('chicks', function (i) {
			z()
			var _mPt
			st = $St(800).mO(1)
			i = i[0]
			h = $H().s('rgba(0,0,0,0.2)')
					.ss(50, 'round', 'round')
					.ca(i)
			bl = st.Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(960, 400)
			bm = st.Bm(i).fl($aF(h), '-').ca(i)
			st.MD(function () {
				_pt = st.m();
				_mPt = _pt
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i)
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
				bm.fl(h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i).aF(), '-').ca(i)
				_mPt = V(mPt)
			})
		})
	}
	ALPHAMASKREVEALNOCU = function () {
		$.i('chicks', function (i) {
			z()
			i = i[0]
			var _mPt
			st = $St(800).mO(1)
			h = $H().s('rgba(0,0,0,0.2)')
			h.ss(50, 'round', 'round').ca(i)
			bl = $Bm(i)
			bl.a2(st)
			bF = $bF(24, 24, 2)
			cMF = $cMF($cM(60))
			bl.fl(bF, cMF)
			bl.ca(960, 400)
			bm = st.Bm(i).fl(h.aF(), '-').ca(i)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i);
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
				h.ca(i)
				bm.fl(h.aF(), '-')
				bm.ca(i)
				_mPt = V(mPt)
			})
		})
	}
	SCRATCHOFF = function () {
		z();
		var _mPt
		st = $St(1000).mO(1)
		st.bm('chicks', function (bm) {
			h = $H().s(.3)
			h.ss(45, 'r', 'round').ca(bm.image)
			bF = $bF(24, 24, 2)
			cMF = $cMF($cM(60))
			bm.fl(h.aF(), '-').ca(i)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i);
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mx = _pt.x
				my = _pt.y
				mPt = $Pt(
						M.av(_pt.x, mx),
						M.av(_pt.y, my)
				)
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
				bm.fl(h.aF(), '-').ca(i)
				_mPt = V(mPt)
			})
		})
	}
	ERASEFL1 = function () {
		$.i('chicks', function (e, i) {
			St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			st.A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.trDr()
			st.MD(function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				b.fl2($AF(h.ca(i))).ca()
			})
			st.MM(function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				b.fl2($AF(h.ca(i))).ca()
			})
			//cursor
			st.h().f("#FFFFFF").dc(25).cu('pointer').bM()
		})
	}
	ERASEFL11 = function () {
		$.i('chicks', function (e, i) {
			St().trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			).m({
						d: function () {
							oldPt = st.m();
							oldMidPt = oldPt;
						},
						u: function () {
							b.fl2($AF(h.ca(i))).ca()
						},
						m: function () {
							var midPoint
							if (!st._dr) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							b.fl2($AF(h.ca(i))).ca()
						}
					}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
		})
	}
	ERASEDOT = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.m({
				d: function () {
					oldPt = st.m();
					oldMidPt = oldPt;
				},
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				m: function () {
					var midPoint
					if (!st._dr) {
						return st.u()
					}
					midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
					oldPt = st.m()
					oldMidPt.x = V(midPoint)
					b.aF2(h.ca(i)).ca()
				}
			})
			cu = st.h('w').dc(25).cu('N')//.bM()
		})
	}
	ERASEFL111 = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			cu = st.h('w').dc(25).cu('N').bM()
			st.m({
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				d: function () {
					mt = st.m()
				},
				m: function () {
					if (st._dr) {
						b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
					}
				}
			})
		})
	}
	ERASEFLWORKS = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			h = $H().ss(40, 'r', 'r').C(.9).ca(i)
			b = $Bm(i).aF2(h)
			st.A(
					$Bm(i).al(.2).fl($FB(40), $CMF(20, -20, 80, 10), $FB(40)),
					$T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b)
			st.m({
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._dr) {
						h.dl(m, st.m()).ca(i)
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
	ERASEFL = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			var m
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			st.A(
					$Bm({
						i: i,
						fl: [$CMF(20, -20, 80, 10), $FB(40)],
						al: .2
					}),
					$Tc('Smudge!', 100, 'r', st),
					b = $Bm({
						i: i,
						aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
					})
			)
			st.m({
				u: function () {
					b.fl2(
							$AF(h.ca())
					).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._md) {
						h.dl(m || st.m(), st.m()).ca()
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
	FT0 = FILTERS = function () {
		cM = $CM()
		cM.adjustHue(80)
		cM.adjustSaturation(40)
		cM.adjustBrightness(40)
		cM.adjustContrast(-60)
		s = $.c(1000).A().stage.t()
		s.mug(function (b) {
			b.XY(200, 200).SL()
			b.cache(-200, -200, b.W(), b.H())
			b.filters = [$CMF(cM)]
			b.updateCache()
			//cjs.bindSlide(b)
		})
		s.mug(function (b) {
			b.XY(-100, -50)
			b.cc()
			b.clMF('a', '+')
			b.clMF('w', '+')
			cjs.bindSlide(b)
		})
		s.mug(function (b) {
			b.XY(400, 0).cc()
			SL(b)
			b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
					.dr0(400).H().cc(400).cc('*'))
			]).cc(400)
		})
		s.mug(function (b) {
			b.XY(100, 300).cc();
			SL(b)
			b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
		})
		s.mug(function (b) {
			var ag = 0, rg = 20, sp = 0.04;
			b.XY(500, 300).cc();
			SL(b)
			//this has gotta just mean 'on tick'
			tt(function (e) {
				v = M.sin(ag += sp) * rg;
				b.cc('+').fl([blF(v, v, 2)])
			})
		})
	}
	FT1 = FILTERS = function () {
		Q(function () {
			s = $St().t()
			i = Q.i('me')
			b = s.qB('me', .8, '+')
			/////////////////////////
			//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
			cM = $cM()
			cM.adjustBrightness(-400)
			//cM.adjustHue(-180)
			cM.c(80)
			//cM.c(-100)
			b._(400, 200, '+').fl($cMF(cM), i)  //zW
			///////////////////////
			// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
			// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
		})
	}
	BRUSH = BLOTCHY = function () {
		z();
		var _mPt
		st = $St(1000)
		st.mO(1)
		h = $h().a2(st)
		h.ss('o', 40, 's', 'bevel', 1)
		st.bm('chicks', function (bm) {
			// _i= i = i[0]
			bm.al(.2)
			st.A(bm)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mx = _pt.x
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
				_mPt = V(mPt)
			})
		})
	}
	Q21 = function () {
		var pt
		st = $St(1000).mO(1)
		h = st.h().ss('g', 40, 's', 'b', 1)
		st.MD(function () {
			pt = st.m()
		})
		st.MU(function () {
			pt = 0
		})
		st.MM(function () {
			if (pt) {
				_pt = st.m();
				mx = _pt.x;
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
				h.mt(mPt.x, mPt.y).qt(_pt, pt)
				pt = V(mPt)
			}
		})
		$.i('chicks', function (i) {
			st.Bm(i[0]).al(.2)
		})
	}
}
function _pre() {
 
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
function canon() {
	canon = function (box, x, y) {
		var vx, vy, ball
		x = x || box.x || 100
		y = y || box.y || 500
		stage.A(ball = Ball(12).XY(x, y))
		if (box.rotation > 0) {
			vx = 8 * (1 + Math.toRads(box.rotation))
			vy = 16 * (1 - Math.toRads(box.rotation))
		}
		else {
			vx = 8 * (-1 + Math.toRads(box.rotation))
			vy = 16 * (1 + Math.toRads(box.rotation))
		}
		stage.tick(function () {
			vy -= 0.5
			ball.X(vx, '+').Y(vy, '-')
		})
	}
	CANON = function () {
		stage = cjs.stage(1000, 600).tick().A()
		box = Box(20, 100).X(500).B(600)
		stage.A(box)
		kD('l', function () {
			box.rT(4, '-')
		})
		kD('r', function () {
			box.rT(4, '+')
		})
		kD('d', function () {
			box.rotation = 0
		})
		kD('s', function () {
			canon(box)
		})
		setInterval(function () {
			var degs = Math.toRads(box.rotation)
			canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
					(500 + Math.asin(degs) * 30) + box.y - 540)
		}, 500)
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
 