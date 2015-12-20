 
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
w.tri = function (x, y) {
	return this.cF($sB().Set(x, y), $fD($pH())
			.SAA([V(-1, 0), V(0, -1), V(1, 0)], 3))
}
w.aTri = function (x, y) {
	this.cF($sB().Set(x, y), $fD($pH()).SAA([
		V(-1, 0),
		V(0, -1),
		V(1, 0)], 3))
	return this
}
w.D = function (x, y) {
	return this.cB($dB(x, y))
}
  ////////
 ///////////////////////////                           AS CIR         /////////////////////////////////
 cH.XY = cH.lP = function (x, y) {
	 var cH = this;
	 cH.SLP = function () {
		 this.SetLocalPosition.apply(this, arguments)
		 return this
	 }
	 cH.GLP = function () {
		 return this.GetLocalPosition()
	 }
	 return U(x) ? cH.GLP().m() :
			 cH.SLP(V(x, y).d())
 }
 $_cH = function (r) {
	 return new b2d.CH(r)
 }
 $cH = function () {
	 //r, x, y
	 var g = G(arguments)
	 var o = {}
	 var cH = $_cH(N(g.f, 50) / 30)
	 if (g.s) {
		 cH.XY(g.s, g.t)
	 }
	 return cH
	 //	if (N(x) && N(y)) {h.XY(x, y)}
	 // cH.lP(g.s, g.t)
 }
 $cF = function () { //r,x,y
	 var g = G(arguments)
	 var cH = $cH(g.f)
	 return $fD(cH, g.s, g.t)
 }
 b.cir = function (r) {
	 return this.f($fD($cH(r)))
 }
 ASCIR = function () {
	 $box()
 }
 cH.set = function () {//cH.S =
	 var bH = this
	 bH.Set.apply(bH, arguments)
	 return bH
 }
 $cirF = function (rad, x, y, den) {
	 var g = G(arguments)
	 var o = G.boxCir(g)
	 var cH = $cH(o.r, o.x, o.y)
	 var fD = $fD(cH, g.o)
	 fD.den(o.d)
	 return fD
//make a circ fixture
// neg-> sensor
	 var g = G(arguments),
			 rad = N(g[0]) ? g[0] : 50,
			 x = N(g[1]) ? g[1] : 0,
			 y = N(g[2]) ? g[2] : 0,
			 den = N(den) ? den : 1
	 fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
	 if (g.n) {
		 fixt.isSensor = true
	 }
	 $cF6 = function (rad, x, y) {
		 var g = G(arguments), f
		 rad = g[0];
		 x = g[1];
		 y = g[2];
		 rad = rad || M.r() + .1
		 x = N(x) ? x : 0
		 y = N(y) ? y : x
		 var cir = $cH(rad)
		 cir.lP(V(x, y, '-'))
		 f = $fD(cir)
		 if (g.n) {
			 f.isSensor = true
		 }
		 return f
	 }
	 return fixt
	 //hmm.. fixt doesnt have a rel loc.. its shape does
	 //what if u want to change 'shape' of shape, but keep its rel loc?
 }
 ///////////////////////////                                AS BOX          /////////////////////////////////
 fD.asBox = function (a, b) {
	 this.shape.SetAsBox(a / 30, b / 30)
	 return this
 }
 fD._sAOB = function (a, b, p, aa) {
	 this.shape.SetAsOrientedBox(a, b, p, aa)
	 return this
 }
 fD.asOrBox = function (a, b, p, aa) {
	 var fD = this
	 return this._sAOB(a / 30, b / 30, p, aa)
 }
 fD.box = fD.sAB = function (a, b, p, A) {
	 if (!p) {
		 this.shape.SetAsBox(a / 30, b / 30)
	 }
	 else {
		 this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	 }
	 return this
 }
 $rF = function (wd, ht, xy, ang, ang2) {// (wd, ht, x, y, rot) 
	 var g = G(arguments), o
	 if (O(g.t)) {
		 o = {}
	 }
	 else {
		 o = {}
	 }
//make a rec (or orientedRec) fixture
	 wd = N(g[0]) ? g[0] : 50
	 ht = N(g[1]) ? g[1] : 50
	 x = N(g[2]) ? g[2] : 0
	 y = N(g[3]) ? g[3] : 0
	 rot = N(g[4]) ? g[4] : 0
	 wd = g.f
	 ht = g.s
	 xy = g.t
	 ang = g.fo
	 ang2 = g.fi
	 wd = wd || 100
	 ht = N(ht) ? ht : wd
	 var fD = $fD($pH(wd, ht, xy, ang, ang2))
	 var rec = $pH(wd, ht, x, y, rot)
	 var fD = $fD(rec)
	 if (g.OO_) {
		 rec.arr(g)
	 }
	 //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	 else {
		 o = g.O ? g.f :
		 {w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		 rec.box(o)
	 }
	 fD = $fD(rec).d(N(o.d, .5))
	 if (g.n) {
		 fD.isSensor = true
	 }
	 return fD
 }
 pH.SAB = function (wd, ht) {
	 this.SetAsBox(wd, ht);
	 return this
 }
 pH.SAOB = function (wd, ht, pos, ang) {
	 this.SetAsOrientedBox(wd, ht, pos, ang)
	 return this
 }
 pH.sAB = function (args) {
	 var g = G(arguments)
	 pH._sAB = function (o) {
		 o.w = (o.w || 100) / 60
		 o.h = (o.h || 100) / 60
		 o.x = N(o.x, 0)
		 o.y = N(o.y, 0)
		 o.v = V(o.x, o.y).d()
		 o.rt = M.tR(o.rt || 0)
		 return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
				 pH.SAB(o.w, o.h)
	 }
	 return this._sAB(O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
			 N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
					 N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
					 {rt: g.f})
 }
 pH.box = function () {
	 var pH = this, g = G(arguments)
	 return pH.sAB.apply(pH, (g.A || _.isArguments(g.f)) ?
			 g.f : g)
 }
 $_rF = function (wd, ht, xy, ang, ang2) {
	 var f = $fD(
			 $pH(wd, ht, xy, ang, ang2)
	 )
	 if (g.n) {
		 f.isSensor = true
	 }
	 return f
 }
 ASBOX = function () {
	 $box()
 }
 $rH = function (a, b, c, d, e) {
	 var g = G(arguments)
	 var pH = _$pH()
	 //return pH.sAB.apply(p, g)
	 pH.box(a, b, c, d, e)
	 return pH
 }
 ///////////////////////////                                 AS ARR       /////////////////////////////////
 pH.SAA = function (arr, arrLen) {
	 this.SetAsArray(arr, N(arrLen, arr.length))
	 return this
 }
 pH.arr = pH.sAA = function () {
	 var g = G(arguments)
	 bx.tPx = function (x, y) {
		 return V(x, y).d()
	 }
	 var arr = _.m(g.s ? g : g.f, bx.tPx)
	 return this.SAA(arr)
 }
 $arr = $aH = function (arr) {
	 var g = G(arguments)
	 arr = g.s ? arguments : g.f
	 return $pH().arr(arr)
 }
 _$arr = function () {
	 var fD = $fD($pH())
	 return fD.SAA.apply(fD, arguments)
 }
 $aF = function () {
	 var g = G(arguments)
	 return $fD($aH.apply(null, g))
 }
 fD.arr = fD.sAA = fD.SAA = function () {
	 this.shape.arr.apply(
			 this.shape, arguments)
	 return this
 }
 w.arr = function () {
	 var g = G(arguments)
	 var b = this.D(g.f, g.s)
	 b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	 return b
 }
 arr = [V(-30, 0), V(0, -150), V(120, 0)]
 ASARR = function () {
	 $box()
 }
 BXARR = function () {
	 $Gv()
	 w.sB(120, 180).CF($aF(arr))
	 w.arr(420, 180, arr).stat()
 }
 ///////////////////////////                           AS POL        /////////////////////////////////
 pH.set = function (wd) {
	 var pH = this, g = G(arguments)
	 //this covers all cases for polygons !!!! // ******// !!!!!!!!
	 N(wd) ? pH.box.apply(pH, g) :
			 O(wd) ? pH.arr.apply(pH, g) :
					 pH
 }
 _$pH = function () {
	 return new b2d.PH()
 }
 $pH_ = function (g, o) {
	 var pH = _$pH()
	 return g.OO_ ? $a(pH, 'arr', g) :
			 g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
					 pH.SAOB(o.w, o.h, o.xy, o.rt) :
					 pH
	 // this is all you need for all cases (thanks to pH.set) //pH.set.apply(pol, g)
 }
 $pH = function (W, H, x, y, a) {//  OR (wd, ht, xy, ang, ang2)
	 var g = G(arguments), o
	 o = O(g.t) ?
	 {w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	 {w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	 o.w = (o.w || 100) / 60
	 o.h = (o.h || o.w) / 60
	 o.xy = V(o.xy / 30, o.ang / 30)
	 o.rt = M.tR(o.ang2 || 0)
	 return $pH_(g, o)
 }
 FLR = function () {
	 bD = $dB().Set(0, 20)
	 b = w.CreateBody(bD);
	 pH = _$pH()
	 fD = $fD(pH)
	 fD.density = 1;
	 var i
	 for (i = 0; i < 4; i++) {
		 // pos= V( sinf(i*90*DEGTORAD), cosf(i*90*DEGTORAD) )
		 pos = V(10, 10)
		 pH.SetAsBox(1, 1, pos, 0)
		 b.CF(fD)
	 }
	 bD = $sB().Set(0, 0)
	 stB = w.CreateBody(bD);
	 pH.SetAsEdge(V(-15, 0), V(15, 3))
	 stB.CreateFixture(fD); //add a fixture to the body
 }
 $pF = function (wd, ht, x, y, rt) {
	 //makes a fixture using b2d.polyH
	 var g = G(arguments)//	return $fD($a($pH, g))
	 //SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
	 //but can not pass den? who cares!
	 //$fD($pH.apply(null, g))
	 var f = $fD($pH(wd, ht, x, y, rt))
	 if (g.n) {
		 f.isSensor = true
	 }
	 return f
 }
 pH.sABold = function (wd, ht, xy, ang, ang2) {
	 pH.box1 = function () { // tx uses!
		 var pH = this, g = G(arguments),
				 o = G.boxBox(g)
		 pH._box = function () {
			 var pH = this
			 pH.SetAsOrientedBox.apply(this, arguments)
			 return pH
		 }
		 return pH._box(
				 o.w / 60,
				 o.h / 60,
				 V(o.x, o.y, '-'),
				 M.tR(o.rt)
		 )
	 }
//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
	 var h = this,
			 g = G(arguments),
			 wd = (g[0] || 100) / 60,
			 ht = (g[1] || wd) / 60,
			 xy = g[2],
			 ang = g[3],
			 ang2 = g[4]
	 toR = Math.toRadians
	 h.box = h.SetAsBox
	 h.oBox = h.SetAsOrientedBox
	 if (U(xy)) {
		 h.box(wd, ht)
	 }
	 else if (N(xy)) {
		 h.oBox(wd, ht, V(xy, ang).div(), toR(ang2 || 0))
	 }
	 else {
		 h.oBox(wd, ht, xy.div(), toR(ang || 0))
	 }
	 return this
 }
 $pF_ = function (kind) {
	 var pF = $pF.apply(null, _.r(arguments))
	 pF.sensor(true).K(kind)
	 return pF
 }
 userDa()
 klas()
 function userDa(){
	 fD.uD = fD.D = fD.data = function (da) {
		 var fD = this
		 if (U(da)) {
			 return this.userData
		 }
		 this.userData = da
		 return this
	 }
	 f.uD = f.data = function (da) {
		 var f = this
		 f.SUD = function (d) {
			 this.SetUserData(d);
			 return this
		 }
		 f.GUD = function () {
			 return this.GetUserData();
		 }
		 if (U(da)) {
			 return this.GUD()
		 }
		 this.SUD(da);
		 return this
	 }
	 b.uD = b.data = b.userData = function (d) {
		 if (U(d)) {
			 return this.GetUserData()
		 }
		 this.SetUserData(d)
		 return this
	 }
 }
 function klas(){
	 fD.K = function (k) {
		 var fD = this
		 if (U(k)) {
			 fD.getClass = function () {
				 var g = G(arguments), fD = this, classes
				 fD._K = fD._K || []
				 this.classes = this.classes || []
				 var ks = fD.classes.join(' ')
				 if (g.p) {
					 ks += ' : ' + fD.body().getClasses()
				 }
				 return ks
			 }
			 return fD.getClass()
		 }
		 fD.classes = fD.classes || []
		 fD.classes.push(k)
		 return fD
	 }
	 f.aK = function (k) {
		 var f = this
		 f._K = f._K || []
		 if (S(k) && !f.of(k)) {
			 f._K.push(k)
		 }
		 return f
	 }
	 f._gK = function () {
		 var f = this
		 f._K = f._K || []
		 return f._K.join(' ')
	 }
	 f.gK = function () {
		 var g = G(arguments), classes
		 this.classes = this.classes || []
		 classes = this.classes.join(' ')
		 if (g.p) {
			 classes += ' : ' + this.body().getClasses()
		 }
		 return classes
	 }
	 f.K = function () {
		 var f = this, g = G(arguments);
		 f._K = f._K || []
		 if (g.u) {
			 return f.gK()
		 }
		 if (g.O && g.f.k) {
			 f.aK(g.f.k)
		 }
		 else if (g.S_) {
			 _.eW(g.f, function (k) {
				 f.aK(k)
			 })
		 }
		 return f
	 }
	 f.of = function (k) {
		 var f = this, b = f.B();
		 //return S(k) ? f.of(k) : (f == k || b == k)
		 return f._of(k) || b.of(k)
		 /*
		
		  //if (!f) {return false}
		  if (!k) {
		  return true
		  }
		  return f == k || (S(k) && f.has(k)) || b.of(k)
		  */
	 }
	 f.ofK = function () {
		 var f = this, b = f.B(),
				 g = G(arguments)
		 return f.hK(g) || b.hK(g)
	 }
	 f.is = function (k) {
		 var f = this
		 //	return S(k) ? f.hK(k) : f == k
		 return k && f.of(k)
	 }
	 b.gK = function () {
		 this.classes = this.classes || []
		 return this.classes.join(' ')
	 }
	 b.aK = function (clas) {
		 var that = this, func
		 this.classes = this.classes || []
		 if (U(clas)) {
			 $l('need to provide a class!');
			 return this
		 }
		 if (F(clas)) { // use case??
			 func = _.bind(clas, that)
			 this.addClass(func(that.getClasses()))
			 return this
		 }
		 _.each(arguments, function (clas) {
			 if (S(clas)) {
				 _.each(clas.trim().split(' '), function (clas) {
					 clas = clas.trim()
					 if (clas != '' && !that.hasClass(clas)) {
						 that.classes.push(clas)
					 }
				 })
			 }
		 })
		 return this
	 }
	 b.K = function () {
		 var b = this, g = G(arguments);
		 this._K = this._K || []
		 /*
		  if (U(k)) {
		  return this.getClasses()
		  }
		  _.each(arguments, function (k) {
		  b.addClass(k)
		  })
		  */
		 if (g.u) {
			 return this._K.join(' ')
		 }
		 if (g.O) {
			 this.K(g.f.k);
			 return this
		 }
		 _.eW(g.f, function (k) {
			 if (!b.of(k)) {
				 b._K.push(k)
			 }
		 })
		 return this
	 }
	 b.of = function (k) {
		 if (b2d.iF(k)) {
			 k = k.B()
		 }
		 return !k || _.ct(this._K, k) || this == k
	 }
	 b.is = function (k) {
		 return k && this.of(k)
		 /*
		  var that = this, is = false
		  _.each(arguments, function (k) {
		  if (that.K() == k) {
		  is = true
		  }
		  })
		  return is
		  */
	 }
 }