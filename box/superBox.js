 
 /////////////////////
$Gv = function () {
	w = $_W(0, 10).ev()
	dD = $dD().cv().SF(bx.DD.e_shapeBit)
			.sc(20).fA(0.5).lT(1)
	w.SDD(dD)
	return w
}
w.CF = function () {
	this.ClearForces();
	return this
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
b.CF = b.CreateFixture
dD.cv = function (cv) {
	cv = cv || $.c()
	return this.ctx($(cv)[0].getContext("2d"))
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
w.cF = function (bD, fD) {
	return this.cB(bD).cF(fD)
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
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
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
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
w.bug = function () {
	var w = this
	w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
			.SF(b2DebugDraw.e_shapeBit))
	return w
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
$_DD = function () {
	return new b2d.DD
}
bx.DD = b2DebugDraw = bx.D.b2DebugDraw
dD.ctx = function (ctx) {
	var dD = this  //it is looking for  a context?
	if (U(ctx)) {
		return dD.GetSprite()
	}
	dD.SetSprite(ctx)
	return dD
	//dD.cx = dD.spr = dD.i = dD.sprite = 
}
dD.SDS = function (sc) {
	this.SetDrawScale(sc)
	return this
}
dD.sc = function (sc) {
	var dD = this
	if (U(sc)) {
		return dD.GetDrawScale()
	}
	dD.SDS(sc)
	return dD
	// = dD.dS = dD.scale = dD.drawScale
}
dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
//Get/SetAlpha(al:N)    used for lines
}
dD.fA = dD.fAl = function (a) {
	var dD = this
	if (U(a)) {
		return dD.GetFillAlpha()
	}
	dD.SetFillAlpha(a)
	return dD
	//= dD.alpha = dD.fillAlpha
}
dD.lT = function (lt) {
	var dD = this
	if (U(lt)) {
		return dD.GetLineThickness()
	}
	dD.SetLineThickness(lt);
	return dD
	// = dD.line
}
dD.fl = function (fl) {
	var dD = this
	var DD = b2DebugDraw
	if (U(fl)) {
		return dD.GetFlags()
	}
	if (flags == '*') {
		flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
	}
	dD.SetFlags(flags);
	return dD
	//dD.flags = dD.F =
}
dD.SF = function () {
	this.SetFlags.apply(this, arguments)
	return this
}
w.DDD = function () {
	this.DrawDebugData();
	return this
}
w.setDbD = function (id) {
	id = id || 'cv'
	var dbD = $_DD().ctx($("#" + id)[0].getContext("2d")).SDS(20)
	dbD.SetFillAlpha(0.5)
	dbD.SetLineThickness(1)
	dbD.SetFlags(b2DebugDraw.e_shapeBit)
	return this.SDD(dbD)
}
$dD = function (sp, sc) {
// = b2d.debugDraw
	//=DebugDraw=dbD
	var dD = new b2d.DD()
	if (sp) {
		dD.sp(sp);
	}
	if (N(sc)) {
		dD.sc(sc)
	}
	return dD
}
$_W = function (x, y) {
	return new bx.W(V(x, y), true)
}
$sB = $bD = function (x, y) {
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
}
$dB = function (x, y) {
	return $bD(x, y).T(2) //.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$fD = function () {
	var g = G(arguments)
	var fD = new b2d.FD
	if (g.n) {
		fD.isSensor = true
	}
	//if (b2d.isShape(shape)) {f.shape = shape}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
	// = b2d.fD = b2d.f
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
$box = function (fn) {
	//$ctxW = $canW = $W = 
	if (F(fn)) {
		return function () {
			ctx = $.cI().C('z')[0].getContext("2d")
			w = $_W(0, 10).bug()
			w.ev(1 / 60, 10, 10)
			fn()
		}
	}
	ctx = $.cI().C('z')[0].getContext("2d")
	w = $_W(0, 10).bug()
	
	w.ev(1 / 60, 10, 10)
	return w
}
 