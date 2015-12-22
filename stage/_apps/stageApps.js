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
 