


$pH = function (W, H, x, y, a) {
	//  OR (wd, ht, xy, ang, ang2)
	$pH_ = function (g, o) {
		_$pH = function () {
			return new b2d.PH()
		}
		var g = G(arguments)
		var pH = _$pH()
		if (g.u) {
			return pH
		}
		return g.OO_ ? $a(pH, 'arr', g) :
				g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
						pH.SAOB(o.w, o.h, o.xy, o.rt) :
						pH
		// this is all you need for all cases (thanks to pH.set) 
		// pH.set.apply(pol, g)
	}
	var g = G(arguments), o
	if (g.u) {
		return $pH_()
	}
	o = O(g.t) ?
	{w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	{w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	o.w = (o.w || 100) / 60
	o.h = (o.h || o.w) / 60
	o.xy = V(o.xy / 30, o.ang / 30)
	o.rt = M.tR(o.ang2 || 0)
	return $pH_(g, o)
}


$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr( g.s?g : g.f )
	//alt: return $pF().polA(g)
}


$pF_ = function (kind) {
	var pF = $pF.apply(null, _.r(arguments))
	pF.sensor(true).K(kind)
	return pF
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
$pFAlt = function (wd, ht, xy, ang, ang2) {
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
$pSn = $pS = $pSF = function (k) {
	var g = G(arguments)
	var pF = $pF.apply(null, _.r(arguments)).s1()
	pF.K(k || 'polySens')
	return pF
}
$aF = function () {
//but looks like $aF uses $aH to do all the work
	var g = G(arguments)
	return $fD($aH.apply(null, g))
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

function grid() {
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
w.tri = function (x, y) {
	return this.cF($sB().Set(x, y), $fD($pH())
			.SAA([V(-1, 0), V(0, -1), V(1, 0)], 3))
}
w.aTri = function (x, y) {
	this.cF($sB().Set(x, y), $fD($pH().SAA([
		V(-1, 0),
		V(0, -1),
		V(1, 0)], 3)))
	return this
}
pH.SAA = function () {
	var pH = this
	var g=G(arguments)
	pH.SetAsArray.apply( pH, g.A? g.f: g )

	return pH
}

pH.arr = function (v) {
	var p = this
	var g=G(arguments)
	v= g.A? g.f: g
	v = _.m(v, function (v) {
		return V(v).d()
	})
	p.SAA(v, v.length)
	return p
}

pH.SAV = function () {
	var pH = this
	pH.SetAsVector.apply(pH, arguments)
	return pH
}
pH.asV = pH.setAsVec = function (v, sc) {
	sc = N(sc, 30)
	var pH = this //used by SepLib
	return pH.SAV(_.m(v, function (v) {
		return V(v).d(sc)
	}))
}
arr = [V(-30, 0), V(0, -150), V(120, 0)]
BX1 = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	$box()
	w.aTri(7, 7).aTri(4, 6)
	_.ev(.4, function () {
		w.cB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.aF($fD($cH(45)))
	})
}
BX2 = function () {
	$box()
	w.aTri(7, 7).aTri(4, 6)
	_.ev(.4, function () {
		w.dB(210, 0).aF($cF(15)).lV$()
	})
} 
SAAA = function () {
	$box()
	aH = $aH([-100, 0], [0, -100], [100, -20], [50, 20])
	//fD = $fD(aH)
//	w.D(150, 200).f(fD)
//	w.D(240, 300).f($fD($aH(verts)))
//	w.D(434, 400).f($aF((verts)))
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