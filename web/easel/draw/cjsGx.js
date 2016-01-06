gx._ss = function () {	//=0//=0//=10//=false
	var gx = this, g = G(arguments)
	if (g.S_) {
		return gx._s(g.f)._ss.apply(gx, g.r)
	}
	var l = N(g.f, 4)
	var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
	var jts = N(g.t, 0)
	var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
	var ignSc = g.n ? true : false
	gx.ss(l, caps, jts, mit, ignSc)
	return gx
}
gx.F = function (fC) {
	return this._f(fC || 'z')
}
gx.S = function (sC) {
	return this._s(sC || 'w')
}
gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
	return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
}
gx.FS = gx.C = function (f, s, w) {
	// = gx.fs = gx.fC = gx.cCL
	var gx = this
	gx.F(f).S(s).SS(w)
	return gx
}
$Gx = function (a) {
	return new cjs.Gx(a).FS()
}
gx._mt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.mt(o.x, o.y)
	return gx
}
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
}
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
gx._dc = function () {
	/*
	 // dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
	 example: 
	 var gx = new cjs.Gx().ss(1);
	 gx.s(cjs.Gx.getRGB(0,0,0));
	 gx.f(cjs.Gx.getRGB(255,0,0));
	 gx.dc(0,0,100);
	 var s = new cjs.Shape(g);
	 s.x = 100; 
	 s.y = 100;
	 st.addChild(s);
	 st.update();
	 */
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, r: g.t} : {r: g.f}
	return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
}
gx.cir = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ?
			{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
			{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
	if (!g.n) {
		o.fC = o.fC || 'z'
		o.sC = o.sC || 'w'
		o.ss = N(o.ss, 4)
	}
	if (o.fC) {
		gx.fC(o.fC)
	}
	if (o.sC) {
		gx.sC(o.sC)
	}
	if (N(o.ss)) {
		gx.ss(o.ss)
	}
	return gx._dc(o)
}
gx._dr = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	gx.dr(o.x, o.y, o.w, o.h)
	// drawRect ( x  y  w  h ) Graphics chainable :
	// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
	return gx
}
gx._pol = function () {
	var gx = this, g = G(arguments)
	if (g.A) {
		return gx._pol.apply(gx, g.f)
	}
	gx.mt(g.f0, g.f1)
	_.e(_.r(g), function (pt) {
		gx.lt(pt[0], pt[1])
	})
	return gx.lt(g.f0, g.f1)
}
gx.pol = function (pts, f, s, w) {
	var gx = this, g = G(arguments)
	if (N(pts[0])) {
		g.e(function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	else {
		gx.FS(f, s, w)
		_.e(pts, function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	return gx.cp()
}
gx._f = function (col) {
	return this.f(oO('c', col))
}
gx._s = function (col, thickness) {
	// = gx.col = gx.sC
	var gx = this
	gx.s(oO('c', col))
	if (N(thickness)) {
		gx.SS(thickness)
	}
	return gx
} 
HGXX = function () {
	W()
	h = w.i.h()
	h.graphics.ss(40, "round", "round")
	h.C("rgba(0,0,0,0.2)").mt(100, 100)
	h.graphics.curveTo(200, 500, 600, 300)
}
DISTRACT = function () {
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
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
DSTR = DISTRACTORDOESNOTHING = function () {
	st = stage = $St()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
}
DRL = DRAWLINE = XX5 = HDL11 = needsOBx = function () {
	St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
	DRAWLINE1 = DLN = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
	}
}
 