 
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
ASBOX = OBOX = function () {
	$box()
	w.dB(300, 100).$rF(200, 300)
	w.$dR(900, 300, 300, 200)
	w.dB(300, 100).$fD($rH(300, 200, V(500, 200), 20))
	w.dB(500, 100).$rF(300, 200, V(500, 200), 20)
}
BOXO = function () {
	$box()
	b = w.CB($sB(450, 500))
	b.CF($fD($cH(19)))
	b.CF($rF(400, 150, V(200, 0), -30))
	b.$rF(200, 50, 0, 200, 30)
	b.CF($fD($pH().sAOB(200, 50, 90)))
	w.$rD(500, 0, 100, 50, 0, 200, 45)
	w.$rS(500, 0, 120, 150, 0, 200, 45)
}
SAB = function () {
	$box()
	//pH.sAB handles both box and oriented box!
	var b = w.D(100, 100)
	b.f($fD($cH(40)))
	b.fD($pH().box(100, 100, 100, 200, 78))
	return
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
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
FLR = function () {
	bD = $dB().Set(0, 20)
	b = w.CB(bD);
	pH = _$pH()
	fD = $fD(pH)
	var i
	for (i = 0; i < 4; i++) {
		// pos= V( sinf(i*90*DEGTORAD), cosf(i*90*DEGTORAD) )
		pH.box(30, 30, V(10, 10), 0)
		b.CF(fD)
	}
	bD = $sB(0, 0)
	stB = w.CB(bD)
	pH.asEdge(V(-15, 0), V(15, 3))
	stB.CF(fD); //add a fixture to the body
}
SAAA = function () {
	$box()
	aH = $aH([-100, 0], [0, -100], [100, -20], [50, 20])
	//fD = $fD(aH)
//	w.D(150, 200).f(fD)
//	w.D(240, 300).f($fD($aH(verts)))
//	w.D(434, 400).f($aF((verts)))
	return
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
TRI = function () {
	$box()
	//long way
	w.D(400, 400).f($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.f(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
BX1 = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	ctx = $.cI().C('z')[0].getContext("2d")
	w = $_W(0, 10).aTri(7, 7).aTri(4, 6)
	w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
			.SF(b2DebugDraw.e_shapeBit))
	_.ev(.4, function () {
		w.cB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.aF($fD($_cH(1.5)))
	})
	_.ev(1 / 60, function () {
		w.Step(1 / 60, 10, 10);
		w.DDD();
		w.CF();
	});
}
BX = function () {
	$box()
	w.aTri(7, 7).aTri(4, 6)
	_.ev(.4, function () {
		w.dB(210, 0).aF($cF(15)).lV$()
	})
}
BOX1 = function () {
	$box()
	w.tri(4, 6)
	w.tri(7, 7)
	_.ev(1, function () {
		var b = w.cB($dB(210, 0)).aF(
				$fD($cH(15)))
		b.lV(R() ? 1 : -1, R() ? 1 : -1)
	})
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
	LNV = function () {
		W({g: 0})
		_.t(10, function () {
			w.bal()
		})
		_.ev(3, function () {
			w.eB(function (b) {
				b.lV(V(0, 20))
			})
		})
		/*
		 b = w.box(400, 400, 200, 200).bS('me')
		
		 f = function () {
		 b.I(0, -400, b.GetWorldPoint(b2d.V(100 / 30, -100 / 30)))
		 }
		 f2 = function () {
		 cjs.tick(f)
		 }
		
		
		
		 W().box(400, 400, 200, 200).bS('me')
		 _.in(2,function(){
		 $t(function () {
		 b.lV(V(-1, -1))
		 })
		 })
		 w.p('thrust')
		 */
	}
	SABB = function () {
		$box()
		//pH.sAB handles both box and oriented box!
		w.fDFn(100, 100)()
		return
		w.fDFn(100, 200)(20)// rt
		w.fDFn(100, 300)(20, 20) //w, h (as box)
		w.fDFn(100, 370)(20, 20, 20) // w,h,r
		w.fDFn(100, 420)(20, 20, 20, 20)// w,h,x,y,rt
		w.fDFn(100, 500)(20, 20, 20, 20, 20)
		//
		//pH.sAB handles both box and oriented box!
		b = w.S(500, 400)
		b.f($fD($cH(4)))
		b.rH()
		b.rH(40)
		b.rH(200, 20)
		b.rH(200, 20, -10)
		b.rH(100, 400, 100, 0, 20)
	}
	ORBOX = function () {
		cir = w.dB(320, 360).stat()
		cir.A($cir(60).DBF(1, .7, .4))
		cir.A(
				$rec(10, 500, 0, 0, 50)
		)
	}
	SBB = function () {
		w = $box()
		_.ev(.1, function () {
			w.go(1 / 5, '+')
		})
		cir = w.dB(220, 60)
		cir.A($cir(60).DBF(1, .7, .4))
		box = w.dB(300, 400)
		box.A($rec(100, 100).DBF(1, .7, .4))
		w.dB(500, 1000).A(
				$rec(1200, 100)).stat()
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
	b.cir = function (r) {
		return this.f($fD($cH(r)))
	}
	CIR = function () {
		$box()
		w.D(350, 200).f($fD($cH(80), '-'))
		w.D(150, 300).fD($cH(30))
		w.D(450, 200).cir(80)
		function later() {
			//use w.ball
			//w.ball(650, 300, 100).cF(100, 20, 20)
			//w.ship()
		}
	}
	RAD = function () {
		$box()
		n = 1
		_.ev(1, function () {
			if (n < 300) {
				var b = w.D(350, 200).aV(2).lV(1, 1)
				R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
						b.fD($cH(n *= 1.3))
				$l('n:' + n)
			}
		})
		y = w.Y()
		r = w.S(220, 500).f($fD($rH(20, 400)))
		l = w.S(670, 500).f($fD($rH(20, 400)))
		w.S(300, 500).f($fD($rH(40, 10)))
		w.S(400, 500).f($fD($rH(40, 10)))
		w.S(500, 500).f($fD($rH(40, 10)))
		w.S(600, 500).f($fD($rH(40, 10)))
	}
} 
function apps() {
	FPAR = DICK = BED = function () {
		y = W().ship()
		w.A($dB(300, 300), guyInBed) // have to fix w.dyn
		w.D(100, 100, b2d.fxPar(guyInBed))
		w.D(400, 300, b2d.fxPar(dick)
		)
		w.D(400, 300, dick)
	}
	MAZE = BXD = function () {
		W()
		w.grid(maze, 100, 200, 20, 30)
		w.bump(400, 200, 10)
		b = w.D(200, 100)
		b.f($fD($cH(100, 200)))
		b.f($fD($pH(100, 200)))
	}
}
