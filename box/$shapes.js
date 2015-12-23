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
	function alt() {
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
	function alt() {
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
	function alt() {
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
 
w.CF = function () {
	this.ClearForces();
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
b.fD = b.fxD = function (fD) {
	return this.cF($fD(fD))
}
b.cF = function () {
	return this.CreateFixture.apply(this, arguments)
}
b.aF = function () {
	this.cF.apply(this, arguments)
	return this
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.f = function (fD) {//b.createFixture = b.cF = b.fixt1 = b.shape =
	var b = this, f;
	if (U(fD)) {
		return this.GetFixtureList()
	}
	// can pass a CODED array of fixts (will get parsed)
	if (A(fD)) {
		_.each(b2d.fixtParse(fD),
				function (fd) {
					b.fixt(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	//create the fixt
	f = this.CreateFixture(fD)
	//assign it classes specified in the fixt def
	if (A(fD.classes)) {
		_.each(fD.classes,
				function (clas) {
					f.K(clas)
				})
	}
	return f
	//= b.fixt = b.list
}
b.fs = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
	function alt() {
		b.fixts = b.each = b.eachFixt = function (func) {
			var fl = this.fixt(), arr = [],
					g = G(arguments), func = g[0]
			while (fl) {
				arr.push(fl);
				fl = fl.GetNext()
			}
			//order by biggest
			if (g.p) {
				arr = arr.sort(function (a, b) {
					return b.area() - a.area()
				})
			}
			//order by smallest
			if (g.n) {
				arr = arr.sort(function (a, b) {
					return a.area() - b.area()
				})
			}
			if (F(func)) {
				_.each(arr, func);
				return this
			}
			return arr
		}
	}
	
	// = b.e
}
b.f = function (fD) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GFL()
	}
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {
			b.f(fD)
		})
		return b
	}
	var f = b.CF(g.f)
	if (g.f.K()) {
		f.K(g.f.K())
	}
	return f
}
b.fD = b.fxD = function (fD) {
	return this.f($fD(fD))
}
b.CF = b.CreateFixture
b2d.fxPar = function (fxs, fn) {
	var b = this
	//if its not an array,, assume is fine, and leave it as is
	fxs = _.m(fxs, function (f) {
		return !A(f) ? f :
				f.length == 1 || f.length == 3 ? $cF.apply(null, f) :
						$pF.apply(null, f)
	})
	// fn = _.b(fn, b) ?
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	return fxs
} //if (f.isSensor) {return b2d.polySens.apply(null, f)}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
	function alt() {
		fD.H = fD.setShape = function (shape) {
			if (U(shape)) {
				return this.shape
			}
			this.shape = shape;
			return this
		}
	}
}
f.H = f.shp = f.shape = function (h) {//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return this
}
f.rad = function () {
	return this.shp().m_radius * 30
}
b.rad = b._r = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.h = function () {
	return this.f().shape
}
b.cF = b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
b.rF = b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.rH = b.rF = function () {
	var rH = $rH.apply(null, arguments)
	return this.fD(rH)
}
b.aF = b.arrr = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = function () {
	return this.f($pF.apply(null, arguments))
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.H = function () {
	return this.f() && this.f().H()
}
pH.SAB = function (wd, ht) {
	var pH = this
	pH.SetAsBox(wd, ht);
	return pH
}
pH.sAB = function (wd, ht) {
	return this.sAOB(wd, ht, V(), 0)
}
pH.SAOB = function (wd, ht, pos, ang) {
	var pH = this
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAOB = pH.box = function (wd, ht, pos, ang) {
	var pH = this
	var g = G(arguments), o
	o = O(g.t) ? {w: g.f, h: g.s, pos: g.t, ang: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, pos: V(g.t, g.fo), ang: g.fi} :
			{w: g.f, h: g.s, ang: g.t}
	o.pos = o.pos || V()
	o.ang = N(o.ang, 0)
	o.w = N(o.w, 100)
	o.h = N(o.h, 100)
	return this.SAOB(o.w / 60, o.h / 60, o.pos.d(), M.tR(o.ang))
}
b.$rF = function () {
	return this.CF($rF.apply(null, arguments))
}
w.$dR = w.$rD = w.dR = w.rD = function () {
	var g = G(arguments)
	var b = this.dB(g.f, g.s)
	b.$rF.apply(b, _.r(g, 2))
	return b
}
w.$sR = w.$rS = w.sR = w.rS = function () {
	return this.$rF.apply(this, arguments).stat()
}
b.$fD = function () {
	return this.CF($fD.apply(null, arguments))
}
bx.tMt = function (x, y) {
	return V(x, y).d()
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
pH.pol = pH.ar = pH.arr = pH.sAA = function () {
	var pH = this,
			g = G(arguments)
	pH.SAA = function (arr, arrLen) {
		this.SetAsArray(arr, N(arrLen, arr.length))
		return this
	}
	var arr = _.m(g.s ? g : g.f, bx.tMt)
	return pH.SAA(arr)
}
fD.pol = fD.ar = fD.arr = function () {
	var fD = this, g = G(arguments)
	fD.shape.pol(g)
	return fD
	//= fD.sAA = fD.SAA
}
fD.polA = function (verts) {
	this.arr.apply(this, verts)
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
pH.set = function (wd) {
	var pH = this, g = G(arguments)
	//this covers all cases for polygons !!!! // ******// !!!!!!!!
	N(wd) ? pH.box.apply(pH, g) :
			O(wd) ? pH.arr.apply(pH, g) :
					pH
}
cirs()
function cirs() {
	cH.SLP = function () {
		this.SetLocalPosition.apply(this, arguments)
		return this
	}
	cH.GLP = function () {
		return this.GetLocalPosition()
	}
	cH.XY = cH.lP = function (x, y) {
		var cH = this;
		return U(x) ? cH.GLP().m() :
				cH.SLP(V(x, y).d())
	}
	b.cir = function (r) {
		return this.f($fD($cH(r)))
	}
	cH.set = function () {//cH.S =
		var bH = this
		bH.Set.apply(bH, arguments)
		return bH
	}
}
function grid(){
	w.grid = w.drawGrid = function (gd, x, y, l, spa) {
		var w = this //spacing
		var b = w.D(x, y)
		_.t(_.z(gd), function (rw) {
			_.t(_.z(_.f(gd)), function (c) {
				if (gd[c][rw]) {
					b.pF(l, l, rw * spa, c * spa);
				}
			})
		})
		return b.K('grid')
	}
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
}
function more() {
	w.fDFn = function (x, y) {
		var w = this
		var b = w.D(x, y)
		b.f(
				$fD($cH(4))
		)
		return function () {
			b.fD(
					$pH().box(arguments))
		}
	}
	b.A = function (fD) {
		this.cF(fD);
		return this
	}
	fD.sAB = function (a, b, p, A) {
		var fD = this;
		alert('fD.sAB')
		var h = fD.H()
		if (!p) {
			h.SAB(a / 30, b / 30)
		}
		else {
			h.SAOB(a / 30, b / 30, p, A)
		}
		return fD
	}// used?
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
	fD.H = function (h) {
		var fD = this
		if (U(h)) {
			return fD.shape
		}
		fD.shape = h;
		return fD
	}
	fD.SAB = function (x, y) {
		this.SetAsBox(x, y)
		return this
	}
	fD.SAOB = function (x, y, pos, ang) {
		this.SetAsOrientedBox(x, y, pos, ang)
		return this
	}
	f.H = function (h) {
		if (U(h)) {
			return this.GetShape()
		}
		this.m_shape = h //not sure if this works
		return this
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
	/*
	
	 SetAsOrientedBox(
	 hx:Number,  hy:Number, (width and height of the box)
	 center:b2Vec2 = null, (center of box)
	 angle:Number = 0.0 (rot in rads)
	 )
	
	 Applying this concept, the idol function continues in the following way:
	 var bW:Number=5/worldScale;
	 var bH:Number=20/worldScale;
	 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
	 var boxAngle:Number=- Math.PI/4;
	
	
	 */
	f.vs = f.verts = function () {
		alert('f.vs verts boxFixt.js')
		var h = this.GetShape()
		var verts = h.m_vertices
		return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
	}
	f.rad = function (r) {
		var f = this, h = f.H()
		if (U(r)) {
			return h.rad()
		}
		h.rad(r);
		return f
	}
	SHS = function () {
		W().p()
		w.S(100, 100, [[10]])
		b = w.S(300, 400)
		//rectangle fixutre -- no color
		b.rect(40, 40)
		//circle fixture -- no color
		b.f($cF(100, 100, 100))
		b = $eM.fixts().stat()
		_.in(1, function () {
			b.dyn()
		})
		/*
		 $l('circle is 0, poly is 1.. ill prove it..')
		 fs = b.fs()
		
		 _.ev(3, function () {
		
		 if (f = fs.pop()) {$l('shape type: ' + f.H().m_type)
		 f.rm()
		
		 }})
		 */
		_.in(3, function () {
			b1 = w.A($dB(300, 200))
			b1.f($cF(100).de(1).re(1))
			b1.aV(3)
			//b.cirB(40)
		})
	}
	FXT = MAS = function () {
		W()
		w.D(800, 400, [
			$cF(20),
			$cF(5).bits(1, 2), //cat is 1, but will only collide with 2's
			$cF(10, 100, 100, '-'),
			$cF(10, 100, -100),
			$pF(10, 300, '-'), //sets as sensor
			$pF(300, 10)
		])
		r = w.BALL(200, 200, 50, 'r').rsM()
		b = w.BALL(200, 200, 50, 'b')
		b.f().de(1)
		y = w.BALL(200, 200, 50, 'y')
		y.f().de(1)
		y.rsM()
		p = w.BALL(200, 200, 50, 'p')
		p.f().de(10000)
		p.rsM()
		function grows() {
			rad = 10
			x = 400
			y = 440
			v = {x: 0, y: 0}
			//mouse joints messed up
			w.bump(400, 300, 40)
			w.bump(290, 350, 40)
			w.bump(280, 220, 40)
			addBody()
			$t(function () {//destroyAndAddBody
				b.destroyFixture(
						b.f()
				)//b.destroyFixture(fixture)
				rad += .1
				x = b.X();
				y = b.Y();
				v = b.lV()
				addBody()
			})
			function addBody() {
				b = w.A($dB(x, y).lV(v), $cF(rad))
			}
		}
		
		_.in(2, grows)
	}
	f.tPt = f.tP = function (pt, y) {
		var f = this, g = G(arguments)
		var tf = f.B().tf()
		var pt = N(pt) ? V(pt, y) : pt
		return f.H().TP(tf, pt)
	}
	fD.sAOB = fD.orBox = function (a, b, pos, aa) {
		var fD = this, h = fD.shape
		h.SAOB(a / 30, b / 30, pos, aa)
		return fD
	}
	fD.box = fD.sAB = function (a, b, p, aa) {
		var fD = this, h = fD.shape
		p ? h.SAOB(a / 30, b / 30, p, aa) :
				h.SAB(a / 30, b / 30)
		return fD
	}
	pH.box_ = function () {
		var pH = this, g = G(arguments)
		var args = (g.A || _.isArguments(g.f)) ? g.f : g
		return pH.box.apply(pH, args)
	}
}
function edge(){
	function _edge() {
		w.edgAr = function () {
			var w = this,
					g = G(arguments),
					X = 0,
					Y = 0,
					x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
			_.e(g, function (e) {
				e = w.edgD(e[0], e[1], e[2], e[3])
				w.wed(e, x, V(g[0][0], g[0][1]))
			})
			return x
		}
		w.edgD = function (x1, y1, x2, y2) {
			var w = this,
					l = w.l(x1, y1, x2, y2),
					e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
			e.bS(l) //bS2
			return e
		}
		w.edgs = function () {
			var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
			if (A(g[0])) {
				//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
				//  w.weld(x,b)
				// X=g[0][0]
				// Y=g[0][1]
			}
			_.e(g, function (e) {
				if (A(e)) {
					e = w.edgD.apply(w, e)
				}
				w.wed(e, x)
			})//  w.weld(x2  , x)
			w.dot(300, 300)
			return x2
		}
		w.edgsD = function (ar) {
			var w = this
			ar = ar || [V(), V(100, 100)]
			i = V(ar.shift())
			i2 = V(ar.shift())
			w.edg(i.x, i.y, i2.x, i2.y)
			_.e(ar, function (v) {
				i = i2
				i2 = V(v)
				w.edg(i.x, i.y, i2.x, i2.y)
			})
		}
		w.edg = function (x1, y1, x2, y2) {
			var w = this
			// you would always want a single stat?
			w.l(x1, y1, x2, y2, '-')
			return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
		}
		w.edgs = function (ar) {
			var w = this, e
			ar = ar || []
			i = V(ar.shift())
			i2 = V(ar.shift())
			e = w.edg(i.x, i.y, i2.x, i2.y)
			_.e(ar, function (v) {
				i = i2
				i2 = V(v)
				e.glu(w.edg(i.x, i.y, i2.x, i2.y))
			})
		}
		b2d.edg = function (x1, y1, x2, y2) {
			var fd = b2d.pol()
			fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
			return fd
		}
		ASEDG = function () {
			W().C('z')
			w.edg(100, 500, 1000, 0)
			w.edg(50, 50, 100, 500)
			w.edg(0, 0, 1000, 100)
			w.D(410, 100, 'w', 30)
			// w.p(300,200,'standard')
		}
		HILLS = function () {
			W().P()
			w.edg(100, 100, 500, 300)
			w.edg(100, 200, 500, 400)
			w.edg(100, 300, 500, 500)
			w.edg(1000, 100, 600, 300)
			w.edg(1000, 200, 600, 400)
			w.edg(1000, 300, 600, 500)
			w.D(410, 100, 'r', 20)
		}
		CONEDGE = WORLDCLICK = WELDEDGE = function () {
			W([1200, 600, 2400, 600], {g: 10}).C('r')
			w.Y(450, 400)
			w.edgs([
				[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
			])
			x = w.edgAr([400, 400, 500, 200],
					[500, 200, 550, 600],
					[550, 600, 400, 400]).X(1200).track()
			w.D(700, 350, 'b', 20)
			w.D(700, 350, 'r', 20)
			w.D(700, 350, 'y', 20)
			w.$(function (x, y) {
				var v = w.sToW(x, y)
				w.S(v.x, v.y, 'z', [[10, 10, '-']])
			})
			// cjs.t(function(){$l(w.mx + ', ' + w.my) })
		}
		DRAWEDG1 = function () {
			W();
			var p1, p2, d, l
			w.p(400, 100);
			w.S(200, 200, 'r', 400, 20)
			w.$(function (v) {
				if (!p1) {
					p1 = v;
					return
				}
				if (!p2) {
					p2 = v
				} else {
					p1 = p2;
					p2 = v
				}
				w.edg(p1.x, p1.y, p2.x, p2.y).K('line')
				w.rC(function (f) {
					f.B().dot()
				}, p1, p2)
			})
		}
	}
	
	w.edgAr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.e(g, function (e) {
			e = w.edgD(e[0], e[1], e[2], e[3])
			w.wed(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
	w.edgD = function (x1, y1, x2, y2) {
		var w = this,
				l = w.l(x1, y1, x2, y2),
				e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
		e.bS(l) //bS2
		return e
	}
	w.edgs = function () {
		var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.e(g, function (e) {
			if (A(e)) {
				e = w.edgD.apply(w, e)
			}
			w.wed(e, x)
		})//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edgsD = function (ar) {
		var w = this
		ar = ar || [V(), V(100, 100)]
		i = V(ar.shift())
		i2 = V(ar.shift())
		w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			w.edg(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edg = function (x1, y1, x2, y2) {
		var w = this
		// you would always want a single stat?
		w.l(x1, y1, x2, y2, '-')
		return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
	}
	w.edgs = function (ar) {
		var w = this, e
		ar = ar || []
		i = V(ar.shift())
		i2 = V(ar.shift())
		e = w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			e.glu(w.edg(i.x, i.y, i2.x, i2.y))
		})
	}
	b2d.edg = function (x1, y1, x2, y2) {
		var fd = b2d.pol()
		fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
		return fd
	}
	function edges() {
		b2d.edge = function (x1, y1, x2, y2) {
			var fd = b2d.poly()
			fd.shape.SetAsEdge(V(x1, y1).div(), V(x2, y2).div())
			return fd
		}
		w = b2d.World.prototype
		w.edgeChain = function () {
			var w = this,
					g = G(arguments),
					X = 0,
					Y = 0,
					x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]),
					x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
			if (A(g[0])) {
				
				//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
				//  w.weld(x,b)
				// X=g[0][0]
				// Y=g[0][1]
			}
			_.each(g, function (e) {
				if (A(e)) {
					e = w.edgeD.apply(w, e)
				}
				w.weld(e, x)
			})
			//  w.weld(x2  , x)
			w.dot(300, 300)
			return x2
		}
		w.edge = function (x1, y1, x2, y2) {
			var w = this, e
			// you would always want a single stat?
			w.line(x1, y1, x2, y2)
			e = w.S(0, 0, b2d.edge(x1, y1, x2, y2))
			return e
		}
		w.edgeD = function (x1, y1, x2, y2) {
			var w = this, l, e
			l = w.line(x1, y1, x2, y2)
			e = w.D(0, 0, b2d.edge(x1, y1, x2, y2)).den(1)
			e.bindSprite2(l)
			return e
		}
		w.edges = function (ptArr) {
			var w = this, e
			ptArr = ptArr || []
			i = V(ptArr.shift())
			i2 = V(ptArr.shift())
			e = w.edge(i.x, i.y, i2.x, i2.y)
			_.each(ptArr, function (v) {
				i = i2
				i2 = V(v)
				e.glue(
						w.edge(i.x, i.y, i2.x, i2.y)
				)
			})
		}
		w.edgesD = function (ptArr) {
			var w = this
			ptArr = ptArr || []
			i = V(ptArr.shift())
			i2 = V(ptArr.shift())
			w.edge(i.x, i.y, i2.x, i2.y)
			_.each(ptArr, function (v) {
				i = i2
				i2 = V(v)
				w.edge(i.x, i.y, i2.x, i2.y)
			})
		}
		w.edgeArr = function () {
			var w = this,
					g = G(arguments),
					X = 0,
					Y = 0,
					x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
			_.each(g, function (e) {
				e = w.edgeD(e[0], e[1], e[2], e[3])
				w.weld(e, x, V(g[0][0], g[0][1]))
			})
			return x
		}
		ASEDGE = function () {
			b2d.mW()
			w.edge(100, 500, 1000, 0)
			w.edge(50, 50, 100, 500)
			w.edge(0, 0, 1000, 100)
			w.ball(410, 100)
			w.player('standard')
		}
		HILLS = function () {
			W().P().db()
			w.edge(100, 100, 500, 300)
			w.edge(100, 200, 500, 400)
			w.edge(100, 300, 500, 500)
			w.edge(1000, 100, 600, 300)
			w.edge(1000, 200, 600, 400)
			w.edge(1000, 300, 600, 500)
			w.D(410, 100, 'r', 20)
		}
		CONEDGE = function () {
			W(10).Y(450, 400)
			w.edges([
				[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
			])
		}
		WELDFUN = function () {
			W(1200, 600, 1600)
			w.weld(w.B(100, 200, 'x', 100, 200).rest(1), w.B(200, 100, 'u', 200, 100).rest(1))
			w.weld(w.D(300, 400, 'w', 50, 100), w.D(300, 400, 'v', 100, 50))
		}
		WELDEDGE1 = function () {
			W({g: 0, w: 0})
			// e  = w.edgeD(600,300,650,100); e1 = w.edgeD(700,300,750,100); e2 = w.edgeD(700,100,750,400); e3 = w.edgeD(500,200,950,10); w.f(e,e1,e2,e3)
			// b = w.B(450,350, 'y', 10)
			//  w.ship(450,350)
			x = w.edgeChain(
					[400, 400, 500, 200],
					[500, 200, 550, 600],
					[550, 600, 400, 400]
			)
		}
		WELDEDGE = function () {
			W([1200, 600, 2400, 600], {})
			// W({w:0})
			w.G(100)//.zm(1)
			w.roof.kill()
			w.D(480, 400, 'r', 30)
			w.D(480, 400, 'b', 30)
			w.D(480, 400, 'y', 30)
			x = w.edgeArr(
					[400, 400, 500, 200],
					[500, 200, 550, 600],
					[550, 600, 400, 400]
			).track()
		}
		w.sTW = w.sToW = w.gTL = function (x, y) { //works
			var w = this,
					x = x / w.z - w.s.x / w.z,
					y = y / w.z - w.s.y / w.z
			//w.dot(x,y,'*') // cool
			return {x: x, y: y}
		}
		w.wTS = w.wToS = w.lTG = function (x, y) {//also works!
			var w = this,
					x = (x + w.s.x / w.z) * w.z,
					y = (y + w.s.y / w.z) * w.z
			//w.dot(x,y,'*') // cool
			return {x: x, y: y}
		}
		WORLDCLICK = function () {
			W([1200, 600, 2400, 600], {g: 100}) //.zm(1)
			w.roof.kill()
			//w.D(480, 400, 'r', 30); w.D(480, 400, 'b', 30); w.D(480, 400, 'y', 30)
			x = w.edgeArr([400, 400, 500, 200], [500, 200, 550, 600], [550, 600, 400, 400]).track()
			b = w.D(100, 100, 'b', 20)
			w.$(function (x, y) {
				
				// var sX= x,  sY= y,  wX   , wY
				var v = w.sToW(x, y)
				//w.S(  sX/1.5    + w.pX()/1.5,sY/1.5 + w.pY()/1.5 ,'z',  [  [10,10,'-']]  )
				w.S(v.x, v.y, 'z', [[10, 10, '-']])
			}) // $l('sX: '+ sX +', '+ 'sY: '+ sY + ' - wX: '+ wX +', '+ 'wY: '+ wY)
			w.sc(1.5)
			x.X(1200)
			cjs.tick(function () {
				$l(w.mx + ', ' + w.my)
			})
		}
// https://developer.chrome.com/devtools/docs/workspaces !!!!!
	}
	
	function more() {
		//edge shape:
		pH.SAE = function (v1, v2) {
			this.SetAsEdge(v1, v2)
			return this
		}
		$eH = function (x1, y1, x2, y2) {
			return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
		}
		SAE = function () {
			W().p()
			w.eg(100, 500, 1000, 0)
			w.eg(50, 50, 100, 500)
			w.eg(0, 0, 1000, 100)
			w.cirB(410, 100, 2)
			_.in(4, function () {
				w.eg(100, 100, 500, 300)
				w.eg(100, 200, 500, 400)
				w.eg(100, 300, 500, 500)
				w.eg(1000, 100, 600, 300)
				w.eg(1000, 200, 600, 400)
				w.eg(1000, 300, 600, 500)
				w.cirB(410, 100)
			})
		}
		moreEdge = function () {
			EDE = function () {
				W()
				v1 = V(0, 0)
				v2 = V(40, 0)
				eH = $eH()
				eH.Set(v1, v2)
			}
			GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
				eH = $eH()
				eH.Set(v1 = V(30, 8), v2 = V(0, 0));
				eH.m_hasVertex0 = true;
				eH.m_hasVertex3 = true;
				eH.m_vertex0 = v0 = V(40, 0);
				eH.m_vertex3 = v3 = V(40, 14);
			}
//chain:
			CHAIN = CHA = function () {
				vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
				chain = $chH()
				chain.CreateChain(vs, 4);
			}
			GHOSTVERTS = GHV = function () {
// // Install ghost vertices
				chain = $chH();
				chain.SetPrevVertex(V(90, 30));
				chain.SetNextVertex(V(-60, 0))
			}
			LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
				chain = $chainH();
				chain.CreateLoop(vs, 4);
				// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
				for (i = 0; i < chain.GetChildCount(); ++i) {
					eH = $eH();
					chain.GetChildEdge(eH, i)
				}
			}
		}
	}
}