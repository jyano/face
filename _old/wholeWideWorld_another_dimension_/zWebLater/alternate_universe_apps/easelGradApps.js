GRD = TESTGRADWORKS = function () {
	z()
	c = $.c('y', 500).A()
	g = c.context.createLinearGradient(50, 0, 500, 100)
	g.addColorStop(.2, 'orange')
	g.addColorStop(.6, 'red')
	g.addColorStop(.8, 'green')
	c.context.fillStyle = g
	c.fillRect()
}
GRADTX = function () {
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
TXG = TESTGRAD = function () {
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
//ABOVE IS GOOD
LINRAD = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LINRAD1 = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LINRAD2 = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
//err
RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
function gradApps() {
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
	}//better with WAP
	RADIALGRADCIRC = function () {
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
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
}
function gradApps() {
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
	}//better with WAP
	RADIALGRADCIRC = function () {
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
	RADIALGRAD1 = function () {
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
	RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RADIALGRADFILL = function () {
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
	RADIALGRADFILL2 = function () {
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
}