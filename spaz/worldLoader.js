POLLL = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	W()._(function (w) {
		w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'chicks'
		})
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
}
POLLB = function () {
	W()._(function (w) {
		v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		})
		w.D(450, 300).pol({
			v: v,
			c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('me')
		})
	})
}
WQ = function () {
	var g = G(arguments), o = F(g.t) ?
	{ob: g.f, fn0: g.s, fn: g.t} :
	{ob: g.f, fn: g.s}
	o.ob = o.ob || {}
	o.fn = o.fn || function (w) {
	}
	w = W(o.ob)
	if (o.fn0) {
		o.fn0(w)
	}
	Q(o.ob.I || _MF, function () {
		o.fn(w)
	})//
}
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
QU5 = MF = function () {
	W().C('r')
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(
				Q.b('me'),
				Q.b('guy')
		)
	})
}
 
	QU5 = PEEP = PEEPHOLE = WIND = function () {
		W()._(function () {
			$.hdr().A($.h1('grahics winding')).A()
			bm = w.i.qB('chicks').X(470).drag()
			h = w.i.h()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
			bm.mask = h.same().X(470)
		})
	}//B+
	QU5 = MF = function () {
		W().C('r')
		Q(['me', 'guy', 'chicks', 'sun'], function () {
			w.C('g')
			w.i.A(
					Q.b('me'),
					Q.b('guy')
			)
		})
	}
STACK = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.D(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.D(310, 120, 't', 60, 60)
	w.D(320, 120, 't', 60, 60)
	w.D(340, 120, 't', 60, 60)
	w.D(350, 120, 't', 60, 60)
	w.D(370, 120, 't', 60, 60)
	w.D(380, 120, 't', 60, 60)
	w.D(550, 120, 't', 60, 60)
	w.D(570, 120, 't', 60, 60)
	w.D(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
}
MJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
	w.D(100, 200, 'y', 150, 100).K('imp')
	w.D(500, 400, 'y', 50, 100).K('imp')
	w.D(300, 400, 'r', 50, 50);
	w.D(800, 400, 'r', 50, 50);
	w.D(1200, 400, 'r', 50, 50);
	w.D(1600, 400, 'b', 100, 100).K('m')
	w.e$('imp', function () {
		this.B().I(0, -50)
	})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
grpx()
grad()
bmp()
function grpx() {
	BLOKUS = function () {
		W(0).Y();
		y.cn('thrust')
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	FG = FOREGROUND = function () {
		W(800, 500, 1200, 600)._(function () {
			w.p()
			w.y().tr()
			h = w.i.h(50, 200, '+')
			h.bf('chicks', function (h) {
				_h = h
				h.dc({r: 80}
						//, {r: 50, x: 100}, {r: 100, x: 400}
				)
			})
			w.I.h(200, 200, '+').bf('chicks').dc(100)
		})
	}
}
function grad() {
//just easel, no physics.. but uses grads! and only circles
	MICK = function () {
		W()
		// mick(500,200)
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		mick(100, 100, {y2: 10})
		mick(100, 200, {y2: 200})
		mick(100, 300, {x2: 100})
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
	}
	GRADADV = LAYEREDGRADS = GRADSHAPES = function () {
		$W([2000, 1000], {})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: vs, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: vs, c: 'y', C: 'y', l: 5, lf: 1})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
		w.s.h()
				.dc([50], [200, 0, 100], [100, 100, 100])
				.c({l: 20, C: 0, ls: 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		/* h.twL(
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200])
		 h.twL(
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
		 )*/
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
		//tits()
		function tits() {
			_.t(8, function () {
				tit(R(200, 300), R(200, 100))
			})
			o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
			h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
			/*
			 _.evx(.1, function(){
			 o.r1++;o.r2++;o.x1--
			 h.rf(o).dc(100)})
			 //*/
			$h(500, 100).a2(s).rf('r', 'y',
					100, 100, 0,
					100, 100, 50
			).dc(50, 50, 100).drag()
			function tit(x, y) {
				w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
			}
		}
	}
}
function bmp() {
	POLYBM = TRAPAZOID = function () {
		W(500, 700, 600, 700)._(function () {
			w.p();
			w.y().tr()
			w.i.h(800, 100, '+')
					.bf('guy')
					.dc([80], [90, 0, 68])
			w.D(200, 300).pol({
				v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
				bf: 'guy'
			})
		})
		//wait... tim is hiding in upper right
	}
	CUBES = function () {
		W(500, 500, 600, 550)._(function () {
			w.p();
			w.y().tr()
			b = w.D(600, 300, 'r', 400, 300)
			h = w.bg.h().al(.5)
			h.bf('sun')
			h.rec({w: 400, h: 300})
			b.bS(h)
			w.bfR(600, 300, 'guy', 100, 100, 'X')
			w.bfR(300, 300, 'sun', 100, 100, 'z')
			w.bfR(300, 300, 'chicks', 100, 100)
		})
	}
	ARROWHEADS = function () {
		W(800, 500, 800, 550)._(function () {
			w.p();
			w.y().tr()
			//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
			w.D(550, 200).pol({
				c: 'o', C: 'z', l: 25,
				bf: 'chicks',
				v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
			})
			//h.bV //w.pol
			w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
			w.bg.Bm('me').sXY(6.2).X(500).al(.2)
			w.D(500, 400).pol({
				v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
				c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
			})
		})
	}
}
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
NEWS = function () {
	$W();
	b = w.S(600, 300, 'w', 200);
	_.in(function () {
		b.dyn().f().C('z')
	})
	//three ways to make a new stage
	s = $St('r', 100).A().bm('me')
	s.can.drag()
	c = $.c('b', 100).A().drag().XY(400)
	s1 = $St(c)
	s1.A().bm('me')
	c2 = $.c('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = $St(['someId'])
	s2.t().bm('me')
	_.in(3, function () {
		w.S(300, 100, 'z', 1500, 1)
		w.d('r', 300, 100)
		w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
		w.i.T('bottom').XY(500, 100).bl('-')
		w.i.T('middle').XY(700, 100)
		w.dot(300, 400)
	})
	_.in(5, function () {
		nice = w.i.T('nice', 135, 'x', 300, 400)
		/*
		 w.i.T('linewidth 0').XY(100,300).lW(0)
		 w.i.T('linewidth null').XY(100, 500).bl('bottom')
		 w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
		 w.i.T('lineheight -100').XY(700,300).lH(-100)
		 w.i.T('lineheight 0').XY(700,500).lH(0)
		 w.i.T('lineheight 100').XY(700,700).lH(100)
		 w.i.T('linealign left').XY(600, 100)
		 w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
		 w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
		 */
		hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
		w.show('hello')
	})
}
//display object:
SHD = SDW = SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}
CIRS8 = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
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