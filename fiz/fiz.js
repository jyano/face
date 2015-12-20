 
$dD = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
 
$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
$dD.shape = $dD.h = b2d.DD.e_shapeBit //1
$dD.jt = $dD.j = b2d.DD.e_jointBit //2
$dD.pair = $dD.p = b2d.DD.e_pairBit //8
$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20
$dD = b2d.debugDraw = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
	function alt(){
		b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
			var dd = new b2d.DebugDraw()
			//can pass in either canvas or context
			if ($.isCan(sprite)) {
				sprite = sprite.ctx()
			}
			if (sprite) {
				dd.sprite(sprite)
			}
			if (scale) {
				dd.scale(scale)
			}
			if (flags) {
				dd.flags(flags)
			}
			dd.alpha(N(alpha) ? alpha : 0.5)
			// dd.line( N(line)? line :1 )
			// dd.SetLineThickness(1)
			return dd
		}
	}
}
 
b2Color = b2d.Cm.b2Color
b2d.AB = function (x1, y1, x2, y2) {
	var ab = new b2d.Collision.b2AABB()
	ab.lowerBound.Set(x1 / 30, y1 / 30)
	ab.upperBound.Set(x2 / 30, y2 / 30)
	return ab
	function alt() {
		b2d.AABB = function (a, b, c, d) {//this is the one that works!
			var aabb = new b2AABB()
			aabb.lowerBound.Set(a, b)
			aabb.upperBound.Set(c, d)
			return aabb
		}
	}
}
$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2d.AABB() // ??
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
	function alt() {
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		$AB = b2d.AB = function () {
			var g = G(arguments), ab = new b2d.Collision.b2AABB
			if (g.p) {
				ab.lUB(g.f, g.s, g.t, g.f)
			}
			else if (U(g.t)) {
				ab.pt(g.f, g.s)
			}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
			else {
				ab.lUB(g.f, g.s, g.t, g.fo, '-')
			}
			return ab
		}
		AABB = AB = function (a, b, c, d) {
			var ab = new b2AABB()
			ab.lowerBound.Set(a, b)
			ab.upperBound.Set(c, d)
			return ab
		}//b2d.AB =
	}//get rectangle by two coords
}
AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
	return $aB(a - .001, b - .001, a + .001, b + .001)
	function alt() {
		AB001 = function (a, b) {
			return AB(a - .001, b - .001, a + .001, b + .001)
		}
	}
}
b2d.AABB01 = function (x, y) {//now used div
	var v = V(x, y).div(),
			x = v.x,
			y = v.y
	return this.AABB(x - .001, y - .001, x + .001, y + .001)
}
b2d.tf = function (v1, v2, v3) {
	if (U(v1)) {
		return new b2d.Math.b2Transform()
	}
	if (A(v1)) {
		return b2d.tf(
				V(v1[0], v1[1]),
				V(v1[2], v1[3]),
				V(v1[4], v1[5]))
	}
	var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
	return tf
}
b2d.M.b2Transform.prototype.toArr = function () {
	var tf = this
	var pos = tf.position,
			R = tf.R,
			col1 = R.col1,
			col2 = R.col2
	return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
function toFixed() {
	v.dec = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
	v.tF = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
}
V0 = function (x, y) {
	if (O(x)) {
		return V0(V(x).x, V(x).y)
	}
	return {x: N0(x), y: N0(y)}
}
v.tA = function () {
	return [this.x, this.y]
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
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
enterFrame = function () {
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
function loopTicker() {
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
}
$pC = b2d.polyCirc = function (rad, prec) {
	rad = N(rad) ? rad : 20
	prec = N(prec) ? prec : 20
	var arr = [],
			ang = 2 * Math.PI / prec
	_.times(prec, function (i) {
		arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
	})
	return arr
	function alt() {
		w.polyCirc = function (x, y, rad, sides) {
			var b = this.dyn(x, y),
					pc = b2d.polyCirc(rad, sides)
			b.poly.apply(b, pc)
			return b
		}
	}
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A($cF(50).DBF())
	return b
}
$bi = $XYR = function () {
	var b = w.sB(545, 595)
	return b.A($cF(150).DBF())
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}
w.QP = w.QPt = function (fn, vec) {
	this.QueryPoint(fn, vec);
	return this
}
w.QS = w.QH = function () {
	return this.QueryShape.apply(this, arguments)
}
w.qP = w.qPt = w.qPoint = function (fn, x, y) {
	return this.QP(fn, V(x, y, '-'))
} //w.queryPoint = 
w.QA = w.Q = function (a, b) {
	this.QueryAABB(a, b);
	return this
}
w.ABpt = w.ptAB = w.bAt = w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
	var w = this, g = G(arguments), o
	var selBd = null
	w.QA(function (f) {
				if (f.B().isDyn() && f.tPt(mX, mY)) {
					selBd = f.B();
					return false
				}
				return 1
			},
			$AB(x - .001, y - .001, x + .001, y + .001))
	return selBd ? selBd : 0
}//w.getBodyAtPoint =
worPt()
fixPt()
function rayCst() {
	w.rC = w.rayCast = function (func, v1, v2) {
		return this.RayCast(func, V(v1, '-'), V(v2, '-'))
	}
	w.RC = function () {
		this.RayCast.apply(this, arguments);
		return this
	}
	w.RCA = function () {
		this.RayCastAll.apply(this, arguments);
		return this
	}
	w.RC1 = w.RCO = function () {
		this.RayCastOne.apply(this, arguments);
		return this
	}
	function segment() {
		b2d.Seg = function (x, y, x1, y1) {
			seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
			return seg
		}
		b2d.Segment = b2d.C.b2Segment
		b2d.Segment = b2d.Collision.b2Segment
	}
	
	segment()
	b2d.rCIp = function (x, y, x1, y1, maxFrac) {
		maxFrac = N(maxFrac, 1)
		return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
	}
	b2d.rCOp = function (nX, nY, maxFrac) {
		maxFrac = N(maxFrac, 1)
		op = new b2d.Collision.b2RayCastOutput(
				maxFrac, V(nX, nY)
		)
		op.maxFraction = 1
		return op
	}
	w.rayCast = function (func, v1, v2) {
		return this.RayCast(func, V(v1, '-'), V(v2, '-'))
	}
	rayLine = function (x1, y1, x2, y2) {
		alert('rayLine')
		x1 = N(x1) ? x1 : 0
		y1 = N(y1) ? y1 : 0
		x2 = N(x2) ? x2 : 100
		y2 = N(y2) ? y2 : 100
		if (line) {
			line.remove();
			line = null
		}
		line = cjs.shape()
		line.graphics.s('white').mt(x1, y1).lt(x2, y2)
		w.s.A(line)
	}
	removeDots = function () {
		alert('removeDots')
		getDots = function () {
			var arr = []
			_.each(w.s.children, function (c) {
				if (c.N() == 'dot') {
					arr.push(c)
				}
			})
			return arr
		}
		dots = getDots()
		_.each(dots, function (dot) {
			dot.remove()
		})
	}
	b2d.Segment = b2d.C.b2Segment
	$Sg = b2d.Seg = function (x, y, x1, y1) {
		return new b2d.Segment(V(x, y), V(x1, y1))
	}
	b2d.rCIp = function (x, y, x1, y1, maxFrac) {
		maxFrac = N(maxFrac, 1)
		return new b2d.RCI(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
	}
	b2d.rCOp = function (nX, nY, maxFrac) {
		maxFrac = N(maxFrac, 1)
		op = new b2d.RCO(maxFrac, V(nX, nY))
		op.maxFraction = 1
		return op
	}
	w.RC = function (fn, p1, p2) {
		var w = this
		w.RayCast(fn, p1, p2)
		return w
	}
	w._rC = function (fn, v1, v2) {
		var w = this
		return w.RC(fn, V(v1).d(), V(v2).d())
	}
	w.rC = function () {
		var g = G(arguments), o
		if (N(g.t)) {
			$l('Ng.t')
			o = {v1: V(g.f, g.s), v2: V(g.t, g.fo), fn: g.fi}
		}
		else {
			o = {v1: g.f, v2: g.s, fn: g.t}
		}
		return this._rC(o.fn, o.v1, o.v2)
	}
	w.ray = function () {
		$l('ray')
		var w = this, g = G(arguments), o
		o = g.S_ ?
		{k: g.f, x: g.s, y: g.t, x1: g.fo, y1: g.fi, fn: g.si} :
		{x: g.f, y: g.s, x1: g.t, y1: g.fo, fn: g.fi}
		var arr = [];
		w.rC(o.x, o.y, o.x1, o.y1, function (f) {
			if (f.of(o.k)) {
				arr.push(f)
			}
		})
		if (!o.fn) {
			return arr
		}
		g.p ? o.fn(_.f(arr)) : g.n ? o.fn(_.l(arr)) : _.e(arr, o.fn)
		return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
	}
// RayCast(rayCastOutput,rayCastInput, tf)
// Cast a ray against this shape
// .// output — the ray-cast results.
// input:b2RayCastInput — the ray-cast input parameters.
// transform:b2Transform — the transform to be applied to the shape.
	w.RCO = w.rC1 = function () {
		var w = this
		w.RayCastOne
	}
	w.RCA = w.rCA = function () {
		var w = this
		w.RayCastAll
	}
	f.rC = function () {
		var inp = new b2d.RCI(V(), V(430, 450).d())
		return this.RC(inp)
	}
	b2d.RCI = b2d.RayCastInput = b2d.C.b2RayCastInput
	b2d.RCO = b2d.RayCastOutput = b2d.C.b2RayCastOutput
}
function worPt() {
	w.qAB = w.Q = w.queryAABB = function (func, x1, y1, x2, y2) {
		var w = this,
				AB = b2d.AB(x1, y1, x2, y2),
				num = 0
		w.QueryAABB(function (f) {
			num++
			return func(f, f.B(), num)
		}, AB)
		return num
	}
	w.queryPoint = function (func, x, y) {
		this.QueryPoint(
				function (f) {
					_fixt = f
					_body = _fixt.GetBody()
					func(f)
				},
				V(x, y, '-')
		)
		return this
	}
	w.$ = w.click = function (func) {
		var w = this
		$(w.hud.canvas).click(function (e) {
			func(e.pageX, e.pageY)
		})
		return w
	}
	w.$$ = function (func) {
		var w = this
		$(w.hud.canvas).dblclick(function (e) {
			func(e.pageX, e.pageY)
		})
		return w
	}
	w.queryXY = function (func, x, y) {
		var w = this  //does not divide
		w.QueryAABB(func, b2d.AABB01(x, y))
		return w
	}
	w.getBodyAtPoint = function (x, y) {
		var body = null
		this.QueryAABB(function queryFunc(fxt) {
					if (!fxt.isStat() && fxt.test(
									mX * 30,
									mY * 30
							)) {
						body = fxt.body()
						return false
					}
					return true
				},
				b2d.AABB01(x, y))
		return body
	}
	w.bodyAt = w.bodyAtPoint = function (x, y, fn, k) {
		var w = this, b //does not div
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(function (f) {
			if (U(k) || f.of(k)) {
				if (f.test(x, y)) {
					b = f.B()
					return false
				}
			}
			return true
		}, x, y)
		if (!b) {
			return false
		}
		if (F(fn)) {
			return fn(b) || w
		}
		return b
	}
	w.qXY = function (x, y, fn) {
		var w = this, v
		//function on TOPMOST fixt FIRST
		// then goes down, but only if function returns 'true'
		//great way to work with fixts/bods at a certain x,y point
		if (F(x)) {
			v = V(y, fn);
			fn = x
		}
		else if (O(x)) {
			fn = y;
			v = (V(x))
		}
		else(v = V(x, y))
		w.QueryAABB(fn, b2d.AABB01(v))
		return w
	}
//query a point of specific kind,
// more options on fixts
	w.XY = function (x, y, fn, k) {
		var w = this, fixt = false // - -> bottom, + all ? :)
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(x, y, function (f) {
			if (f.ofClass(k) && f.test(x, y)) {  //k null -> true // doesnt need to div, because qXY will div
				fixt = f;
				return false
			}
			return true
		}) //stops at top most fixt
		if (fixt && F(fn)) {
			fn = _.bind(fn, fixt)
			return fn(fixt) || w
		} // or w? //makes sense actually
		return fixt
	}
//query bodies
	w.bXY = function (x, y, fn, k) {
		var w = this,
				b = false
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(x, y, function (f) {
			if (f.ofClass(k) && f.test(x, y)) {
				b = f.B();
				return false
			} //cycles through all the fixts to find the first
			return true
		})
		if (F(fn)) {
			return _.bind(fn, b)(fn(b)) || w
		}
		return b
	}//**
	w.dynAt = w.at = w.bodyAtPoint = function (x, y) {
		var body = null, func
		func = function (f) {
			if (f.isDyn() && f.testPoint(x, y)) {
				body = f.B();
				return false
			}
			return true
		}
		this.queryXY(func, x, y)
		return body
	}
	w.QPt = function (fn, p) {
		this.QueryPoint(fn, p)
		return this
	} //= w._qPoint
	w.qPoint = function () {
		var w = this, g = G(arguments), o
		o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
		return w.QPt(function (f) {
			return o.fn(f, f.B(), f.B().W())
		}, o.v.d())
	}
	w.qA = function (fn, ab) {
		this.QueryAABB(fn, ab);
		return this
	}
//this is HACK//
	w.q = w.qPt = w.qP = w.queryPt = w.query = function () {
		var w = this, g = G(arguments), o,
				fx
		o = g.S_ && N(g.s) ?
		{k: g.f, x: g.s, y: g.t, fn: g.fo} :
				g.S_ && O(g.s) ?
				{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								g.A_ ?
								{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		var fn = function (f) {
			if (!f) {
				alert('w.query !this(f)')
			}
			if (f.of(o.k) && f.tP(o.x, o.y)) {
				fx = f;
				return false
			}
			return true
		}
		w.qA(fn, $AB(o.x, o.y))
		if (!fx) {
			return false
		}
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
//END HACK//
	w.Q = function () {
		$l('w.Q')
		var w = this, g = G(arguments), o, fx
		o = g.O ? g.f :
				g.S_ && N(g.s) ?
				{k: g.f, x: g.s, y: g.t, fn: g.fo} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
										g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
												g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
												{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
		function qAFn(f) {
			o.n++
			$l('w.Q qAFn' + o.n)
			if (o.fn(f, f.B(), o.n) !== false) {
				return true
			}
		}
		
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
	w.bs = w.bL = function () {
		return this.GetBodyList()
	}    //can be result of w.b if g.u//= w.getBodyList
	w.qA = function (fn, ab) {
		this.QueryAABB(fn, ab);
		return this
	}
	w.qPt = w.q = w.qP = w.queryPt = w.query = function () {
		var w = this, g = G(arguments), o,
				fx
		o = g.S_ && N(g.s) ?
		{k: g.f, x: g.s, y: g.t, fn: g.fo} :
				g.S_ && O(g.s) ?
				{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								g.A_ ?
								{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		var fn = function (f) {
			if (!f) {
				alert('w.query !this(f)')
			}
			if (f.of(o.k) && f.tP(o.x, o.y)) {
				fx = f;
				return false
			}
			return true
		}
		w.qA(fn, $AB(o.x, o.y))
		if (!fx) {
			return false
		}
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
	w.Q = function () {
		$l('w.Q')
		var w = this, g = G(arguments), o, fx
		o = g.O ? g.f :
				g.S_ && N(g.s) ?
				{k: g.f, x: g.s, y: g.t, fn: g.fo} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
										g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
												g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
												{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
		function qAFn(f) {
			o.n++
			$l('w.Q qAFn' + o.n)
			if (o.fn(f, f.B(), o.n) !== false) {
				return true
			}
		}
		
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
	w.eEv = w.eachEvery = function (fn) {
		var w = this
		z(function () {
			w.e(fn)
		})
		return w
	}
	w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
	w.e = w.each = function () {
		var w = this, g = G(arguments), o,
				bs = w.GetBodyList(), k, b, arr
		o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
		if (g.u) {
			alert('w.e')
		}
		arr = []
		while (bs) {
			b = bs;
			bs = bs.N()
			if (b.of(o.k)) {
				arr.push(b)
			}
		}
		_.e(arr, function (b) {
			o.fn(b)
		})
		return w
	}
	w.circleStat = function (x, y, r) {
		var cir = w.sB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.circle = function (x, y, r) {
		var cir = w.dB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w._qPoint = function (fn, p) {
		this.QueryPoint(fn, p)
		return this
	}
	w.qPoint = function () {
		var g = G(arguments), o
		o = g.N_ ?
		{v: V(g.f, g.s), fn: g.t} :
		{v: g.f, fn: g.s}
		var fn = function (f) {
			var b = f.B(), w = b.W()
			return o.fn(f, b, w)
		}
		var point = o.v.div()
		this._qPoint(fn, point)
		return this
	}
//function ray() {
	w.ray = function () {
		var w = this, g = G(arguments), o, arr
		o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
			x: g.f,
			y: g.s,
			x1: g.t,
			y1: g[3],
			fn: g[4]
		}
		arr = [];
		w.RayCast(function (f) {
			if (f.of(o.k)) {
				arr.push(f)
			}
		}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
		if (!o.fn) {
			return arr
		}
		if (g.p) {
			o.fn(_.f(arr))
		}
		else if (g.n) {
			o.fn(_.l(arr))
		}
		else {
			_.e(arr, function (f) {
				o.fn(f)
			})
		}
		return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
	}
	w.rC1 = function () {
		var w = this
		w.RayCastOne
	}
	w.rCA = function () {
		var w = this
		w.RayCastAll
	}
	w.rC = function (fn, v1, v2) {
		var w = this
		return w.RayCast(fn, V(v1).div(), V(v2).div())
	}
	w._rC = function (v1, v2, fn) {
		var w = this
		return w.RayCast(fn, V(v1).div(), V(v2).div())
	}
}
function fixPt() {
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a WORLD point within the fixture // very accurate
	}
	f.AB = function () {
		var ab = this.GetAABB()
		return {
			l: ab.lowerBound.m(),
			u: ab.upperBound.m()
		}
	}
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a point within the fixture // very accurate
	}
	f.AB = function () {
		var ab = this.GetAABB()
		return {
			l: ab.lowerBound.m(),
			u: ab.upperBound.m()
		}
	}
	f.rC = function () {
		var inp, res
		i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
		res = this.RayCast(inp)
		return res
	}
}
function mouseQ() {
	w.logMXY = function (e) {
		var w = this,
				p = w.sToW(e.X, e.Y);
		w.mx = p.x;
		w.my = p.y
		return w
	}
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.logMXY = function (e) {
		var w = this,
				p = w.sToW(e.X, e.Y);
		w.mx = p.x;
		w.my = p.y
		return w
	}
	w.$ = function (fn) {
		var w = this
		w.UI().click(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.$$ = function (fn) {
		var w = this
		w.UI().dblclick(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.mm = function (fn) {
		var w = this, g = G(arguments)
		$.mousemove(function (e) {
			var o = {
				x: w.mx,
				y: w.my,
				X: e.clientX,
				Y: e.clientY,
				e: e
			}
			fn(o)
		})
		return w
	}
	w.md = function (fn) {
		var w = this
		w.i.c.mousedown(function (e) {
			var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
			w.q(w.mx, w.my, function (f) {
				if (f) {
					o.f = f;
					o.b = f.B()
				}
			})
			fn(o)
		})
		return w
	}
	w.mu = function (fn) {
		var w = this, $cv = $(w.i.canvas)
		$cv.mouseup(function (e) {
			fn({
				x: w.mx,
				y: w.my,
				e: e
			})
		})
		return w
	}
	w.mdq = function (fn) {
		var w = this
		w.md(function (e) {
			w.q(e.x, e.y, function (f) {
				fn(f, e)
			})
		})
		return this
	}
	w.e$ = function () {
		var g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		this.e(function (b) {
			if (b.of(o.k)) {
				b.$(o.fn)
			}
		})
		return this
	}
}
function randBods() {
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
	w.randRects = function (ob) {
		var that = this
		ob = ob || {}
		var y = ob.y || 0,
				z = N(ob.z) ? ob.z : 1
		_.times(30, function (i) {
			that.rect(
					Math.random() * 1100 + 20,
					(Math.random() * 150 + 40) + y,
					(Math.random() * 30 + 15) * z,
					(Math.random() * 30 + 15) * z
			).stat().K('randomRect')
		})
		return this
	}
	w.addRandomBody = w.randomFixture = function () {
		var body = this.dynamic(Math.random() * 1000, 100,
				b2d.randomFixture())
		return body
	}
	w.random = w.addRandomBodies = function (howMany) {
		howMany = howMany || 10;
		var that = this
		_.times(howMany, function (num) {
			that.addRandomBody()
		})
		return this
	}
	w.addTenBalls = function (num) {
		num = num || 10;
		var that = this
		_.times(num, function (i) {
			that.ball(100 + (i * 80), 200)
		})
		return this
	}
	w.addHundBalls = function (num) {
		num = num || 100;
		var that = this
		_.times(num, function (i) {
			that.circ(100 + (i * 8), 50, 10)
		})
		return this
	}
}
function bull() {
	w.bulBD = w.bul = function (x, y) {
		return this.B($bulBD(x, y))
	}
	w.bul = function (x, y) {
		var def, body
		def = b2d.dyn(x, y)
		def.bullet = true
		body = this.createBody(def)
		return body
	}
	w.polyBul = function (x, y, wd, ht, col) {
		var bul = this.bul(x, y)
		bul.poly(wd, ht)
		if (col) {
			bul.bindSprite2(
					cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
			)
		}
		return bul
	}
}
w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
}
w.dynX = w.dynamicX = function (x, y, fD) {
	var w = this, body
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	return w.body(b2d.dyn(x, y), fD)
}
bx.f = function (k) {
	var arr = []
	w.each(function (b) {
		b.each(function (f) {
			if (f.is(k)) {
				arr.push(f)
			}
		})
	})
	return arr
}
bx.b = function (k) {
	var arr = []
	w.each(function (b) {
		if (b.of(k)) {
			arr.push(b)
		}
	})
	return arr
}
w.circleStat = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.circStat = function (x, y, radius, color) {
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	return this.bump(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)
	).linDamp(2)
}
w.brickSensor = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y),
			b2d.poly(W, H).r(0).sensor(true))
			.K('brickSensor')
}
w.rectStat = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).linDamp(2)
}
w.brick = w.bii = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
}
w.bump = w.bumper = w.baa = function (x, y, r) {
	x = x || 100
	y = N(y) ? y : x
	r = r || 20
	return this.A(b2d.stat(x, y), b2d.circ(r)).K('bumper')
}
w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
}
w.brk = w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}
w.roc = w.rck = w.rock = w.pS = function (x, y) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('rock')
}
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bindSprite2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
w.bag = w.pD = function (x, y) {
	var b = w.D(x, y), g = G(arguments)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('bag')
}
w.pBul = w.polyBul = function (x, y, wd, ht, c) {
	alert('w.pBul polyBul worldcreate.js')
	var w = this
	var bul = w.bul(x, y)
	bul.poly(wd, ht)
	if (c) {
		bul.bS2($rGx(wd, ht, oO('c', c))
				.XY(x, y).a2(w.s))
	}
	return bul
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.B($sB(0, 0))
	eg.f($eF(a, b, c, d))
	return eg
}
w.verts = function (x, y, arrs) {
	var bod = this.dyn(x, y)
	_.each(arrs, function (fixt) {
// bod.convex( arr[0],  _.rest(arr)  )
		//  bod.convex( fixt )
		bod.convex.apply(bod, fixt)
	})
	return bod
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.ball = w.ba = function (x, y, r) {
	var w = this,
			ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(
			x, y, b2d.circ(r)
	)
	return ball.K('ball')
}
w.bal = w.ball = w.cD = w.ba = w.cirB = function () {
	var w = this, g = G(arguments), o, b
	if (true) {
		b = w.D(g.f, g.s)
		b.cF.apply(b, _.r(arguments, 2))
	}
	else {
		o = {x: g.f, y: g.s, r: g.t}
		var b = w.D(o.x, o.y)
		b.f($cF(o.r))
	}
	return b.decor(g).K('ball')
}
w.addCirc = function (x, y, radius, color) {//specific to talkjs
	x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)
	y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)
	radius = N(radius) ? radius : _.random(14) + 8
	color = oO('c', color || $r())
	this.ball(x, y, radius).bindSprite2(
			cjs.circ(radius, color).XY(x, y)).linDamp(2)
}
w.circ = function (x, y, rad, col) {
	var ball, w = this
	// will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
	var wd = this.s.W(),
			ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	rad = N(rad) ? rad : _.random(14) + 8
	ball = w.ball(x, y, rad).linDamp(2)
	ball.bindSprite2(w.s.cir(x, y, rad, col))
	return ball
}
w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
w.each = w.eachBody = function (l, uD) {//=w.e=w.eB
	//can pass a cb to be run on EACH body
	//can also pass a uD to restrict cb to
	//run only on bodies with that uD
	var w = this,
			bs = w.GetBodyList(), k, b
	if (S(l)) {
		k = l;
		l = uD
	} else {
		k = uD
	}
	while (bs) {
		b = bs
		bs = bs.next()
		if (b.has(k)) {
			l(b)
		}
	}
	return w
}
w.eachD = w.eachDyn = function (l) {
	var w = this;
	w.each(function (b) {
		if (b.isDyn()) {
			l(b)
		}
	})
	return w
}
w.e$ = w.b$ = function (fn) {
	var w = this
	w.eB(function (b) {
		b.$(fn)
	})
	return w
}// = w.eachClick = w.bodyClick 
w.eD = w.eDB = w.eDyn = function (fn) {
	return this.eB(function (b) {
		if (b.iD()) {
			fn(b)
		}
	})
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	$t(function () {
		w.bds(fn)
	})
	return w
}
w.bds = w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.e = w.eB = function () {
	var w = this, g = G(arguments), o, b
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	b = w.B()
	while (b) {
		b.kFn = function (k, fn) {
			var b = this, g = G(arguments), o
			o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
			if (b.of(o.k) && F(o.fn)) {
				o.fn(b)
			}
			return b
		}
		b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
	}
	return w
}
w.ds = w.dB = function (b) {
	var w = this, g = G(arguments), o
	return g.u ? w.eB(function (b) {
		w.destroy(b)
	}) : w.DB(b)
}
w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = function (b) {
	var w = this
	if (U(b)) {
		w.each(function (b) {
			w.destroy(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.R = function (c, W, H, x, y) {
	var w = this, wC = w.cent(),
			r,
			g = G(arguments)
	if (!S(g[0])) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	y = N(y) ? y : x
	/*
	 x=N(g[0])?g[0]:wC.x
	 y=N(y)?y:N(g[0])?N(g[0]):wC.y
	 W=N(W)?W:100
	 H=N(H)?H:W
	 */
	r = w.S(x + (W / 2), y + (H / 2), c, W, H)
	return r
}
w.box = w.bi = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
function worldMove() {
	w.left = w.horiz = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.X(num, '-')
		})
	}
	w.up = w.vert = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.Y(num, '-')
		})
	}
}