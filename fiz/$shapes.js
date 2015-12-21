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