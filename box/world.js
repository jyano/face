 
w.G = function (x, y) {
	var v, currGrav = this.GetGravity()
	if (U(x)) {
		return currGrav
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-currGrav.x, -currGrav.y)
	}
	w.SetGravity(v)
	return this
}
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.CF = function () {
	this.ClearForces();
	return this
}
w.cF = function (bD, fD) {
	return this.cB(bD).cF(fD)
}
w.A = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w._sB = function (x, y, fD) {
	var b = this.cB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this.CB($sB(x, y))
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}
//function kill() {
w.DB = w.DBo = w.DBd = function (b) {
	this.DestroyBody(b);
	return this
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
//alpha = function () {
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
$.xI = function (id, col) {
	return $.cI(id).C(col)[0].getContext("2d")
}
w.N = function (time, a, b) {
	//= w.St = w.go = w.step = w.draw 
	w = this, g = G(arguments)
	w.CF()
	//if (N(num)) {this.N(num)}
	w.Step(time, N(a, 8), N(b, 3))
	if (!g.n) {
		w.DDD()
	}//	if (g.p) {w.DDD()}
	return w
}
w.ev = function (a, b, c) {
	var w = this
	a = N(a, 1 / 60)
	c = N(c, N(b, 10))
	b = N(b, 10)
	_.ev(a, function () {
		w.Step(a, b, c)
		w.DDD();
		w.CF();
	})
	return w
}
$_W = function (x, y, bool) {
	return new bx.W(V(x, y), U(bool) || bool ? true : false)
}
$Gv = function () {
	w = $_W(0, 10).ev()
	dD = $dD().cv().SF(bx.DD.e_shapeBit)
			.sc(20).fA(0.5).lT(1)
	w.SDD(dD)
	return w
}
$box = function (fn) {
	if (F(fn)) {
		return function () {
			ctx = $.xI()
			w = $_W(0, 10).bug()
			w.ev(1 / 60, 10, 10)
			fn()
		}
	}
	ctx = $.xI()
	w = $_W(0, 10).bug()
	w.ev(1 / 60, 10, 10)
	return w
}
world = function (x, y, doSleep) {
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return new b2d.World(grav, sleep)
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
$boxWorld = $bW = function () {
	var g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, sl: g.t} :
			N(g.f) ? {y: g.f, sl: g.s} :
			{sl: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 10)
	return world(o.x, o.y, o.sl)
}
function box() {
	w.step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	w.clear = w.clearForces = w.cF = function () {
		this.ClearForces();
		return this
	}
	w.dB = function (a) {
		this.DestroyBody(a);
		return this
	}
	w.GBL = w.bLX = function () {
		return this.GetBodyList()
	}
	w.GGB = w.gB = function () {
		return this.GetGroundBody()
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
 //walls:
window.W = window.W || {}
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
function _post() {
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
}
function alpha() {
	w.R = function (c, W, H, x, y) {
		alert('w.R')
		var w = this, g = G(arguments),
				wC = w.cen(),
				r
		if (!S(g.f)) {
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
			x = wC.x - W / 2;
			y = wC.y - H / 2
		}
		return w.S(
				x + W / 2,
				N(y, x) + H / 2,
				c,
				W, H
		)
		old = function () {
			/*
			 x=N(g[0])?g[0]:wC.x
			 y=N(y)?y:N(g[0])?N(g[0]):wC.y
			 W=N(W)?W:100
			 H=N(H)?H:W
			 */
		}
	}
	w.vW = function (col, H, x, y) {
		alert('w.vW')
		var w = this, g = G(arguments),
				cW = w.can.W(),
				cH = w.can.H()
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
}// w.R, w.vW
old = function () {
	w.rWx = function (col, h) {
		var w = this
		if (!S(col)) {
			h = col;
			col = 'b'
		}
		h = N(h) ? h : w.H()
		return w.S(10, w.H() - (h), col, 20, h)
	}
	w.bWx = function (col, W) {
		var w = this
		if (!S(col)) {
			W = col;
			col = 'b'
		}
		W = N(W) ? W : w.W()
		return w.S((W / 2), w.H() + (h / 2) - 10, col, W, 20)
	}
	w.hWx = function (col, W, x, y) {
		var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
		if (!S(col)) {
			y = x;
			x = W;
			W = col;
			col = 'x'
		}
		if (U(y)) {
			y = x;
			x = null
		}
		W = (W == '+') ? cW : N(W) ? W : cW / 3
		x = N(x) ? x : cW / 2 - W / 2
		y = (y == '+') ? cH - 10 : (y == '-') ? 10 : N(y) ? y : cH / 2
		y -= 10
		return w.R(col, W, 20, x, y).bo(.2).K('wall')     //default bo?
	}
	w.boxWallsx = w.xWx = function (col, W, h) {
		var w = this
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
		w.w = W
		w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}
		return w
	}
	w.bodyX = w.AX = function (bD, fD) {
		var w = this, b
		if (b2d.isBDef(bD)) {
			b = w.CreateBody(bD)
		}
		if (fD) {
			b.fixt(fD)
		}
		//b.den(1)
		return b
	}
	/*
	 if (A(o.w)){     c = o.w[0]
	 if (!S(c)){ h = W;     W = c;     c = 'o'  }
	 o.c = o.c || 'o'
	 w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
	 w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
	 w.roof = w.R(o.c, w.wW, 20, 0, 0)
	 w.left = w.R(o.c, 20, w.wH, 0, 0)}*/
}
w.gv = w.G = function (x, y) {
	var w = this
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	var v
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
	function alt() {
		w.G = function (x, y) {
			var w = this,
					v, currG = w.GetGravity()
			if (U(x)) {
				return currG
			}
			if (N(x)) {
				v = N(y) ? V(x, y) : V(0, x)
			}
			else if (x == 'flip') {
				v = V(-currG.x, -currG.y)
			}
			w.SetGravity(v)
			return w
			function alt() {
				w.G = function (x, y) {
					var v, currGrav = this.GetGravity()
					if (U(x)) {
						return currGrav
					}
					if (N(x)) {
						v = N(y) ? V(x, y) : V(0, x)
					}
					if (x == 'flip') {
						v = V(-currGrav.x, -currGrav.y)
					}
					w.SetGravity(v)
					return this
				}
			}
		}
	}
} 