wor = function (x, y) {
	return new b2World(new b2Vec2(x, y), true)
}
_world = function (x, y, doSleep) {

//make world
// can set stage width/height and world width/height
//W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U') 
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return new b2d.Dynamics.b2World(grav, sleep)
}
world = $boxWorld = $bW = function () {
	var g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, sl: g.t} :
			N(g.f) ? {y: g.f, sl: g.s} :
			{sl: g.f}
	o.x = N0(o.x)
	o.y = N(o.y, 10)
	return _world(o.x, o.y, o.sl)
}
$boxWorld = $bW = function () {
	var g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, sl: g.t} :
			N(g.f) ? {y: g.f, sl: g.s} :
			{sl: g.f}
	o.x = N0(o.x)
	o.y = N(o.y, 10)
	return world(o.x, o.y, o.sl)
	function world(x, y, doSleep) {
		var sleep = U(doSleep) ? true : doSleep ? true : false
		var grav = V(x * 30, y * 30)
		return new b2d.World(grav, sleep)
	}
}
box = function (fn) {
	w = $boxWorld()
	dD = $dD($.c('z', 1800, 1500))
	w.sDD(dD) //the_circle = new b2CircleDef()
	n = 0
	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.go(1 / 5, '+')
	})
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
b2d.world = function (g, sleep) {     //b2d.wor =  W ???
	g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
	s = U(sleep) ? true : sleep
	var w = new b2d.World(g, sleep)
	w.SCALE = 1
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
_$W = function (grav, doSleep) {
	var doSleep = doSleep || U(doSleep) ? true : false
	return new b2d.W(grav, doSleep)
}
$W = function () {
	var g = G(arguments)
	var grav = g.N ? V(0, g.f) : V(g.f, g.s)
	var sleep = g.n ? false : true
	return _$W(grav, sleep)
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
W = function () {$l('box world!')
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
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}
enterFrame=function() {
	if (w.mj) {
		w.mj.tg(w.mx, w.my)
	}
	w.step(1 / 60)
	if (F(o.cb)) {
		o.cb()
	}
	if (!T.iP()) {
		w.I.u();
		w.s.u();
		w.i.u()
	}
	w.DrawDebugData()
	w.e(function (b) {
		b.wX = b.X();
		b.wY = b.Y()
		b.sX = w.wTS(b.wX, b.wY).x
		b.sY = w.wTS(b.wX, b.wY).y
		if (O(b.gx)) {
			b.gx.XY(b.X(), b.Y()).rt(b.rt())
		}
	})
}
function walls() {
//the walls themselves are made with w.BOX
	w.wall = function (x, y, wd, ht) {
		var w = this
		var b = w.brick(x, y, wd, ht)
				.stat().fr(0).K('wall')
		return b
	}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
	w.thin = function () {
		var w = this, b
		return b
	}
	w.flat = function () {
		var w = this, b
		return b
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
}