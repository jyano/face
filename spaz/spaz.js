w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
function room() {
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
}
function dimensions() {
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;
	w.H2 = w.HH = w.hH = w.H / 2;
	w.hH = w.h / w.H;
	w.Ww = w.W / w.w;
	w.wW = w.w / w.W;
	w.Hh = w.H / w.h;
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
	//scale
	w.z = w.SCALE = 1
}
function room() {
	w.BG = w.I = $St('z', w.W, w.H, 0, 0)
	w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
	w.cv = w.canvas = w.st.canvas;
	w.$cv = w.can = $(w.canvas);
	w.cx = w.ctx = w.can.ctx('2d')
	w.bg = w.st.ct();
	w.gx = w.g = w.st.ct();
	w.fg = w.st.ct()
	w.FG = w.i = $St('X', w.W, w.H, 0, 0)
	if (o.i) {
		w.s.bm(o.i)
	}
	w.lG($r())
	if (o.aC == 1) {
		//w.i.aC(0)
		// if(g.O){; return w}
		// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
	}
	w.walls(_w)
}
w.walls = function (o) {
	var w = this,
			can = w.canvas,
			W = can.width,
			H = can.height,
			wa = o.w,
			col, h
	if (wa == 0) {
		return w
	}
	if (F(wa)) {
		wa()
	}
	else if (A(wa)) {
		col = wa[0]
		W = wa[1]
		h = wa[2]
		if (!S(col)) {
			h = W;
			W = col;
			col = 'o'
		}
		W = N(W) ? W : w.W()
		h = N(h) ? h : w.H()
		w.floor = w.R(col, W, 20, 0, h - 20)
		w.right = w.R(col, 20, h, W - 20, 0)
		w.roof = w.R(col, W, 20, 0, 0)
		w.left = w.R(col, 20, h, 0, 0)
	}
	else if (wa == '_') {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'L') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else if (wa == 'U') {
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
	}
	else {
		w.floor = w.S(W / 2, H, 'o', W, 40).K('wall floor')
		w.left = w.S(0, H / 2, 'o', 40, H).K('wall side right')
		w.right = w.S(W, H / 2, 'o', 40, H).K('wall side left')
		w.roof = w.S(W / 2, 0, 'o', W, 40).K('wall roof')
	}
	w.$$(function () {
		w.S(w.mx, w.my, 'x', [[10, 10, '-']])
	})
	return w
}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
w.tall = function Side(x) {
	var ht = w.can.height
	return this.wall(x, ht / 2, 40, ht)
}
w.long = function Flat(y) {
	var wd = w.can.width
	return this.wall(wd / 2, y, wd, 40)
}
w.walls = function (wa) {
	var w = this;
	if (wa === 0) {
		return w
	}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
	w.left = w.tall(0)
	w.right = w.tall(w.can.width)
	w.roof = w.long(0)
	w.floor = w.long(w.can.height)
	return w
}
//
w.vW = function (col, H, x, y) {
	var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
$W = function () {
	W()
	w.y()
	w.p()
}
Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
b2d.world = function (g, sleep) {     //b2d.wor =  W ???
	g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
	s = U(sleep) ? true : sleep
	var w = new b2d.World(g, sleep)
	w.SCALE = 1
	return w
}
_world = function (x, y, doSleep) {
//make world
// can set stage width/height and world width/height
//W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U') 
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return $_Wo(grav, sleep)
}
W = b2d.W = function () {
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	dimensions()
	handling()
	//room()
	keys()
	mouse()
	T.t(enterFrame)
	if (o.t !== 0) {
		trackee()
	}
	w.o = o //w.stats()
	return w
}
W = b2d.W = function (W, H, wW, wH) {//cjs.Ticker.removeAllEventListeners() //w.show(function(){})//not working with scroll
	var o = N(H) ? {W: W, H: H, wW: wW, wH: wH} :
			N(W) ? {g: W} :
					A(W) ? _.extend(H, {W: W[0], H: W[1], wW: W[2], wH: W[3]}) :
							O(W) ? W : {}
	o.W = o.W || 1200
	o.H = o.H || 600
	o.wW = o.wW || o.W
	o.wH = o.wH || o.H
	o.w = o.w == 0 ? 0 : o.w ? o.w : ['o', o.wW, o.wH]
	o.g = N(o.g) ? V(0, o.g) : o.g ? V(o.g) : V(0, 300)
	cjs.watchKeys()
	w = b2d.world(o.g);
	w.o = o
	if (o.z != false) {
		z()
	}
	w.gx(o).setBg(o)
			.dd(o).db()
			.startListening()
			.wMouse().wMouseJ(o)
			.walls(o)
			.u(o)
	w.worldW = w.w = o.wW
	w.worldH = w.h = o.wH
	w.gameW = w.W = o.W
	w.gameH = w.H = o.H
	w.wRatio = w.Ww = w.gameW / w.worldW
	w.hRatio = w.Hh = w.gameH / w.worldH
	w.wMultiple = 1 / w.wRatio
	w.hMultiple = 1 / w.hRatio
	function higher(a, b) {
		return a > b ? a : b
	}
	
	function lower(a, b) {
		return a > b ? b : a
	}
	
	w.minScale = w.minZoom = w.mS = 1 / lower(w.wMultiple, w.hMultiple);
	w._zoom = w._scale = 1;
	w.z = w._zoom
	w.halfW = w.hW = w.W / 2
	w.halfH = w.hH = w.H / 2
	return w
}
W = function (o) {
	o = N(o) ? {g: o} : O(o) ? o : {}
	w = $W(o.g)
	var wd = o.W || 1200;
	var ht = o.H || 600
	if (o.z != false) {
		z()
	}
	w.$can = $.c('z', wd, ht).id('canvas')
	w.can = w.$can[0]
	w.ctx = w.can.getContext('2d')
	//
	$K()
	w.handle()
	w.startKilling()
	w.foot()
	w.st = w.stage = new cjs.Stage(w.can).A()
	//w.st.autoClear = false
	var ps = $(w.can)._getPosition()
	w.x = ps.x;
	w.y = ps.y
	w._mD = 0//=	_mouseIsDown
	w._mJ = 0//= _mouseJoint
	w.$u = function () {
		this.st.update();
		return this
	}
	_.sI(onInt, 1000 / 60)
	function onInt() {
		w.handleMJ()
		w.CF().St(1 / 60, 10, 10).$u().DDD()
		//runCb()
	}
	
	/*
	 function runCb() {
	 if (F(o.cb)) {
	 alert('see W.. o.cb');
	 o.cb()
	 }
	 }*/
	w.mSetup()
	tou()
	if (o.clear !== false) {
		dD = $dD(w.ctx, 30)
		dD.fl($dD.h + $dD.a + $dD.j + $dD.c + $dD.p)
		dD.fAl(.4).al(.9).l(300)
		w.sDD(dD)
	}
	_wa = o.w
	w.walls(o.w)
	return w
}
W = function () {
	$l('box world!')
	var g = G(arguments), o
	o = g.A_ ?
			_.x(g.s || {},
					{W: g.f[0], H: g.f[1], wW: g.f[2], wH: g.f[3]}) :
			N(g.f) && U(g.s) ? {g: g.f} :
					g.$N ? {W: g.f, H: g.s, wW: g.t, wH: g[3]} :
							g.S ? {w: g.f} :
							g.f || {}
	_w = o.w
	//make world instance: can be refactored/reduced//
	//set gravity
	o.g = N(o.g) ? V(0, o.g) : O(o.g) ? V(o.g) : V(0, 10)
	//set ignoreSleep
	o.sl = U(o.sl) ? true : o.sl
	//make the world
	w = new b2d.World(o.g, o.sl)
	//clear the screeen
	//do i use this 'xx' prop?  laaaame!
	if (o.xx !== 0) {
		$('body').empty()
	}
	o.W = N(o.W, 1200)
	o.H = N(o.H, 600)
	w.W = o.W
	w.H = o.H
	w.w = N(o.wW, w.W);
	w.h = N(o.wH, w.H);
	//half width/height nobiggie..
	w.W2 = w.HW = w.hW = w.W / 2;//
	//w.H2 = w.HH = w.hH = w.H / 2;
	w.h_H = w.hH = w.h / w.H;
	w.W_w = w.Ww = w.W / w.w;
	w.w_W = w.wW = w.w / w.W;
	w.H_h = w.Hh = w.H / w.h;
	//zoom
	w._zoom = 1
	w.mZ = w.hH > w.wW ? w.hH : w.wW;
	w.maxZoom = w.mS = w.Ww > w.Hh ? w.Ww :
			w.Hh;
	//handling()
	//room()
	keys()
	$t(enterFrame)
	//mouse()
	//if (o.t !== 0) {w.trackeeSetup()}
	w.o = o //w.stats()
	return w
}
w.warp = function () {
	var w = this
	w.eEv(function (b) {
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	return w
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!
// !!
BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
CircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.ball(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
StatCircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.bumper(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
statCircSprite = function (x, y, r, col) {
	return new StatCircSprite(x, y, r, col)
}
circSprite = function (x, y, r, col) {
	return new CircSprite(x, y, r, col)
}
CircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.ball(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y)
			.bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
circSprite = function (x, y, r, col) {
	return new CircSprite(x, y, r, col)
}
StatCircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.bumper(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
statCircSprite = function (x, y, r, col) {
	return new StatCircSprite(x, y, r, col)
}
PHYSICSCIRCLE = PHC = function () {
	w = b2.mW()
	b = w.ball(300, 300, 50)
	c = cjs.circle(50).XY(300)
	b.bindSprite2(c)
	StatRectSprite = function (x, y, W, h, color) {
		x = x || 300;
		y = y || 100;
		W = W || 100;
		h = h || 50
		color = oO('c', color || 'green')
		this.b = this.body = w.box(x, y, W, h).stat()
		this.g = this.graphic = cjs.rect(W, h, color).XY(x, y).bindBody(this.body)
		w.s.A(this.g)
		return this
	}
	b.srs = b2.statRectSprite = statRectSprite = function (a, b, c, d, color) {
		return new StatRectSprite(a, b, c, d, color)
	}
	//w.debug(false)
	t = statRectSprite(400, 400, 400, 50, 'p');
	RT(t.graphic)
	u = statRectSprite(200, 400, 100, 200, 'p');
	SK(u.graphic)
	statCircSprite(400, 400, 80, 'pink')
}
JUMPERGRAPHICS = function () {
	w = b2d.W({g: 300})
	w.platform(800, 300, 100)
	w.platform(260, 240, 40)
	w.platform(550, 250, 100)
	w.platform(1350, 550, 100)
	w.platform(300, 200, 100).bindSprite('guy', [.4, 1.2])
	w.platform(300, 500, 60, 30).bindSprite('guy', [.4, 1.2])
	w.platform(150, 400, 60, 30).bindSprite('guy')
	p = w.jumper()//w.player('slidey').angDamp(10000)
	w.s.bm('sun', function (sun) {
		cjs.tick(function () {
			sun.X(450 - p.X())
		})
	})
}
BOXSPRITE = function () {
	w = b2d.W().debug()
	meBall = function () {
		spr = meSprite().rCenter().sXY(.4).rXY(230, 260)
		b = w.ball(400, 400, 40).bindSprite2(spr, 6)
	}
	meBall()
	w.box().bindSprite('guy')
	w.beg(function (cx) {
		if (cx.with('ball', 'box')) {
			spr.p('explode')
			setTimeout(function () {
				b.kill()
				meBall()
			}, 1000)
		}
	})
}
BOXPACK = function () {
	w = b2d.W({})
	w.platform(500, 300, 200, 200)
	pack = function (anim) {
		anim = anim || 'f1'
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.gotoAndPlay(anim)
		return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
	}
	b = pack('f1')
	anims = _.keys(Pack.animations)
	//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
	// cjs.tick(function(){ b.rot(0) })
	change = function () {
		anim = anims[_.random(23)]
		$l('changed to ' + anim)
		b.sprite.gotoAndPlay(anim)
	}
	w.begin(function (cx) {
		if (cx.with('platform')) {
			change()
		}
	})
}
PACKE4 = function () {
	w = b2d.mW({
		//debug:false,
		grav: 0
	})
	p = w.player('thrust')
	var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
	spr.p('e4')
	b = w.bumper(
			Math.random() * 1000,
			Math.random() * 500, 45
	).bindSprite2(spr)
	// cjs.tick(function(){ b.rot(0) })
	w.begin(function (cx) {
		if (cx.with('bumper')) {
			p.I(1000, 1000)
		}
	})
}
EASELBO = function () {
	w = b2d.mW({
		//debug:false
	})
	b = w.brick(300, 300, 100, 100)
	r = cjs.rect(100, 100).XY(300, 300).drag()
	b.bindSprite2(r)
	//  w.s.A(r)
}
EASELBO2 = function () {
	w = b2d.W({g: 3})
	p = w.player('standard')
	cjs.tick(function () {
		p.rot(0)
	})
	b = w.brick(300, 300, 300, 100)
	r = cjs.rect(300, 100).XY(300, 300).drag()
	w.s.A(r)
	cjs.tick(function () {
		b.X(r.X());
		b.Y(r.Y())
	})
	r.tweenLoop([{x: 500}, 1000], [{x: 300}, 1000])
	bb = w.brick(500, 500, 300, 100)
	rr = cjs.rect(300, 100).XY(500, 500).drag()
	w.s.A(rr)
	cjs.tick(function () {
		bb.X(rr.X());
		bb.Y(rr.Y())
	})
}
CHANGE = function () {
	w = b2d.mW()
	b = w.ball().bindSprite('guy').kin()
	w.box(400, 100, 400, 100)
}
PHYSICSCIRCLE = function () {
	w = b2.mW()
	b = w.ball(300, 300, 50)
	c = cjs.circle(50).XY(300)
	b.bindSprite2(c)
	StatRectSprite = function (x, y, W, h, color) {
		x = x || 300;
		y = y || 100;
		W = W || 100;
		h = h || 50
		color = oO('c', color || 'green')
		this.b = this.body = w.box(x, y, W, h).stat()
		this.g = this.graphic = cjs.rect(W, h, color).XY(x, y).bindBody(this.body)
		w.s.A(this.g)
		return this
	}
	b.srs = b2.statRectSprite = statRectSprite = function (a, b, c, d, color) {
		return new StatRectSprite(a, b, c, d, color)
	}
	//w.debug(false)
	t = statRectSprite(400, 400, 400, 50, 'p');
	RT(t.graphic)
	u = statRectSprite(200, 400, 100, 200, 'p');
	SK(u.graphic)
	statCircSprite(400, 400, 80, 'pink')
}
b.bS = b.bindSprite = function (img, scale, startingRotation) {
	var body = this, stage = body.GetWorld().stage
	//img is an image name
	//rotation is in degerees!
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y())
			bm.rotation = body.rot() + startingRotation
		}
	}, '-')
	return body
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ?
					b.i = w.st.cir(f.cir(o)) :
					b.i = w.st.pol(f.pol(o))
	)
}
///// LOOK .... LOOK ... LOOK *** *** ***
f.hDat = function (o) {
	
	//not a circle? .. then mUst be a poly of some kind
	// *** note: even if u set a fixture with SAB or SAOB..
	// it still only knows it ( i think ) by its points
	// SAB is just a helper abstaction for getting the points in
	// because u commonly want to make a rectangle
	// .. but when u want to GET the shape..
	// get it by its points.. (its not conceptualized as rec anymore)
	var f = this
	return f.iC() ? f.cir(o) :
			f.pol(o)
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g.t}
	var easelMet = f.iC() ? 'cir' : 'pol'
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	f.B()._i = f.B().i = w.st[easelMet](f.hDat(o))
	//*** look.. we just put the easel shape display object on the fixture's body
	// we called it i.. just i 
	// but i prefer _i
	f.rpSp(f.B()._i)
	// .. then we made it the main FIXTURE sprite,
	// which gets bound to the actual fixture,
	// but is clearly ALSO... referenced on the body
	// so that is just temp on the body because it will get constantly overwrittern!!
	//so can be used short term.. but why not an array???
	// wel they are already probably an array of the fixture?? 
	//body can iterate fixtures//
	// better that way becasue then they can be more easily associated
	// with their assoc fixtures
	return f
}
f.cir = function (o) {
	var f = this
	return _.x(o || {},
			{x: f.pX(), y: f.pY(), r: f.rad()})
}
f.cir = f.cirDat = function (o) {
	var f = this
	var cir = {x: f.pX(), y: f.pY(), r: f.rad()}
	return O(o) ? _.x(o, cir) :
			cir
}
f.rmSp = function () {
	_.e(this.sprites || [],
			function (s) {
				cjs.rmOb(s)
			})
	this.sprites = []
	return this
} //= f.xSp=f.Xx=f.rmSp
f.rmSp = function () {
	var f = this
	f.sprites = f.sprites || []
	_.e(f.sprites, function (s) {
		cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
	})
	f.sprites = []
	return f
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	this.rmSp()
	if (sp) {
		this.bS(sp)
	}
	return this
}
f.rpSp = function (sp) {
	var f = this
	f.rmSp()
	if (sp) {
		f.bS(sp)
	}
	return f
}
 
 