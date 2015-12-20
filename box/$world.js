$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=

function alt(){
	$bD = function (x, y) {
		_$bD = function () {
			return new b2d.BD()
		}
		return U(x) ? _$bD() : _$bD().XY(x, y)
	}
}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$fD = function () {
	var g = G(arguments)
	var fD = new b2d.FD()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	fD.de(1)
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
$cH = function () {
	$_cH = function (r) {
		return new b2d.CH(r)
	}
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
$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr(g.s ? g : g.f)
	//alt: return $pF().polA(g)
}
$pH = function (W, H, x, y, a) {
	_$pH = function () {
		$pH_ = function (g, o) {
			var pH = _$pH()
			return g.OO_ ? $a(pH, 'arr', g) :
					g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
							pH.SAOB(o.w, o.h, o.xy, o.rt) :
							pH
			// this is all you need for all cases (thanks to pH.set) //pH.set.apply(pol, g)
		}
		return new b2d.PH()
	}
//  OR (wd, ht, xy, ang, ang2)
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
$rH = function (a, b, c, d, e) {
	var g = G(arguments)
	var pH = _$pH()
	//return pH.sAB.apply(pH, g)
	pH.box(a, b, c, d, e)
	return pH
	function alt() {
		$rH = function () {
			var pH = $pH()
			pH.sAOB.apply(pH, arguments)
			return pH
		}
	}
}
$aF = function () {
//but looks like $aF uses $aH to do all the work
	var g = G(arguments)
	return $fD($aH.apply(null, g))
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
	function alt(){
		$cF = function () { //r,x,y
			var g = G(arguments)
			var cH = $cH(g.f)
			return $fD(cH, g.s, g.t)
			function alt() {
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
			}
		}
	}
}
$rF = function () {
	$_rF = function (wd, ht, xy, ang, ang2) {
		var f = $fD($pH(wd, ht, xy, ang, ang2))
		if (g.n) {
			f.isSensor = true
		}
		return f
		$rF1 = function (wd, ht, xy, ang, ang2) {// (wd, ht, x, y, rot) 
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
	}
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
	function alt(){
	 $rF = function () {
			var pH = $pH()
			pH.sAOB.apply(pH, arguments)
			return $fD(pH)
		}
	}
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
	function alt() {
		$pF = function (wd, ht, xy, ang, ang2) {
			var g = G(arguments)
			wd = g[0];
			ht = g[1];
			xy = g[2];
			ang = g[3];
			ang2 = g[4]
			if (A(wd)) {
				return $aF.apply(null, arguments)
			}
			//if(b2d.isShape(wd)){fixt.shape = wd; return shape}
			//you can make a poly
			wd = wd || 100
			ht = N(ht) ? ht : wd
			var f = $fD($pH(wd, ht, xy, ang, ang2)).fr(.2).re(.2)//.de(1)
			if (g.n) {
				f.isSensor = true
			}
			return f
		}
	}
	
	$pF_ = function (kind) {
		var pF = $pF.apply(null, _.r(arguments))
		pF.sensor(true).K(kind)
		return pF
	}
}
$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
function alpha(){
	$pSn = $pS = $pSF = function (k) {
		var g = G(arguments)
		var pF = $pF.apply(null, _.r(arguments)).s1()
		pF.K(k || 'polySens')
		return pF
	}
	$sqF = function () {
		var g = G(arguments)
		var f = $fD($sqH.apply(null, arguments))
		if (g.n) {
			f.isSensor = true
		}
		return f
	}
}
function misc(){
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
	b.fs = b.e = b.eF = function (fn) {
		var b = this
		var arr = []
		var f = b.f()
		while (f) {
			arr.push(f)
			f = f.N()
		}
		if (fn) {
			_.e(arr, function (it) {
				fn(it, fn)
			});
			return b
		}
		return arr
	}
}
function force(){
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
	bD.lV = function (lV) {
		bD.SLV = function (lV) {
			this.linearVelocity = lV;
			return this
		}
		var bD = this
		return U(lV) ? this.linearVelocity : this.SLV(lV)
		function alt(){
			bD.lV = function (vel) {
				if (U(vel)) {
					return this.linearVelocity
				}
				this.linearVelocity = vel;
				return this
			}
		}
	}
	bD.lD = function (lD) {var bD=this
		bD.SLD = function (lD) {
			this.linearDamping = lD;
			return this
		}
		return U(lD) ? this.linearDamping : this.SLD(lD)
		function alt(){
			bD.lD = function (dm) {
				var bD = this
				if (U(dm)) {
					return bD.linearDamping
				}
				bD.linearDamping = dm
				return bD
			}
		}
	}
	bD.aD = function (aD) {
		var bD=this
		bD.SAD = function (aD) {
			this.angularDamping = aD;
			return this
		}
		return U(aD) ? this.angularDamping : this.SAD(aD)
	function alt(){
		bD.aD = function (damp) {
			if (U(damp)) {
				return this.angularDamping
			}
			this.angularDamping = damp;
			return this
		}
	
	}
	}
	bD.aV = function (vel) {
		var bD = this
		bD.SAV = function (aV) {
			this.angularVelocity = aV;
			return this
		}
		return U(vel) ? this.angularVelocity : this.SAV(vel)
		function alt() {
			bD.aV = function (vel) {
				if (U(a)) {
					return this.angularVelocity
				}
				this.angularVelocity = vel
				return this
			}
		}
	}
	b.lD = function (damp) {
		if (U(damp)) {
			return this.GetLinearDamping()
		}
		this.SetLinearDamping(damp)
		return this
	}
	b.aD = function () {
		var b = this, g = G(arguments),
				d = g[0]
		if (U(d)) {
			return b.GetAngularDamping()
		}
		if (d == '++') {
			d = 10000
		}
		b.SetAngularDamping(d)
		return b
		function alt() {
			b.aD = function (damp) {
				if (U(damp)) {
					return this.GetAngularDamping()
				}
				this.SetAngularDamping(damp)
				return this
			}
		}
	}
	b.aV = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
	}
	b.lV = b.lV$ = function (lV, y) {
		var b = this
		var v = this.GetLinearVelocity()
		if (U(lV)) {
			return v
		}
		if (N(y)) {
			lV = V(lV, y)
		}
		else if (N(lV)) {
			lV = V(lV, v.y)
		}
		else if (g.m) {
			return this.lV(R() ? 1 : -1, R() ? 1 : -1)
		}
		this.SetLinearVelocity(lV)
		return this.wakeUp()
		function alt() {
			b.lV = function () {
				var b = this, g = G(arguments),
						v = b.GetLinearVelocity(), o, lV
				// can pass in V | x,y
				// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
				//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
				if (g.u) {
					return v
				}
				lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
				b.SetLinearVelocity(lV)
				return b.wakeUp()
			}
			b.lV = function (vel, n2) {
				if (U(vel)) {
					return this.GetLinearVelocity()
				}
				if (N(vel)) {
					vel = V(vel, n2)
				}
				this.SetLinearVelocity(vel)
				return this
			}
		}
	}
	b.AI = function () {
		this.ApplyImpulse.apply(this, arguments)
		return this
	}
	b.I = function me(i, v, v2) {
		var b = this, g = G(arguments), o
		//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
		if (g.A) {
			return b.I.apply(b, g.f)
		}
		o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
		o.i = o.i || b.v().d(40)
		o.v = o.v || b.wC()
		b.ApplyImpulse(o.i, o.v.div())
		return b
		function alt() {
			b.I = function self(impulse, point, point2) {//b.impulse = b.applyImpulse = b.aI  =
				if (U(impulse)) {
					impulse = this.worldVec().div(40)
				}
				if (N(point)) {
					impulse = V(impulse, point)
					point = point2
				}
				if (U(point)) {
					point = this.GetWorldCenter()
				}
				this.ApplyImpulse(impulse, point)
				return this
			}//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
		}
	}
	b.F = function () {
		function alt() {
			b.F = b.constF = function (v, c, c2) {//b.applyForce = b.aF  =
				var b = this, g = G(arguments), v = g[0], c = g[1], c2 = g[2]
				if (N(c)) {
					return b.F(V(v, c), c2)
				}
				if (U(c)) {
					c = b.worldCenter()
				} // gotta adjust this
				b.ApplyForce(v, c)
				if (g.p) {
					cjs.tick(function () {
						b.ApplyForce(v, c)
					})
				}
				return b
			}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
		}
		
		//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
		var b = this, g = G(arguments), o
		o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
				: {f: V(g[0]), wP: g[1]}
		o.wP = o.wP || b.wC()
		b.ApplyForce(o.f, o.wP)
		if (g.p) {
			cjs.t(function () {
				b.ApplyForce(o.f, o.wP)
			})
		}
		return b
	}
	b.mass = function (m) {
		if (U(m)) {
			return ( this.GetMass() * 900 ) / 100
		}
	}
	b.lVL = function (x, y) {
		var b = this
		b.GLVFLP = function (v) {
			return this.GetLinearVelocityFromLocalPoint(v)
		}
		return this.GLVFLP(V(x, y, '-'))
	}
	b.lVW = function (x, y) {
		var b = this
		b.GLVFWP = function (v) {
			return this.GetLinearVelocityFromWorldPoint(v)
		}
		return this.GLVFWP(V(x, y, '-'))
	}
	f.lV = function () {
		var f = this, b = f.B(), g = G(arguments)
		b.lV.apply(b, g)
		return f
	}
	bD.inertia = function (ine) {
		if (U(ine)) {
			return this.insertiaScale
		}
		this.insertiaScale = ine
		return this
	}
}
function bug() {
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
	dD.cv = function (cv) {
		cv = cv || $.c()
		return this.ctx($(cv)[0].getContext("2d"))
	}
}
function kill() {
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
	b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
		var b = this
		return b.of(k) ? b.K('ds destroy') : b
	}
	b.ds = function () {
		var b = this
		b.W().DB(b)
		return b
	} //= b.destroy
}
function makeWor() {
	$_W = function (x, y) {
		return new bx.W(V(x, y), true)
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
	$Gv = function () {
		w = $_W(0, 10).ev()
		dD = $dD().cv().SF(bx.DD.e_shapeBit)
				.sc(20).fA(0.5).lT(1)
		w.SDD(dD)
		return w
	}
}
function kin() {
	$kB = $bD1 = function (x, y) {
		return $bD(x, y).ty(1)
	}
}
