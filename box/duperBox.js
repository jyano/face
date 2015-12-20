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
$pF_ = function (kind) {
	var pF = $pF.apply(null, _.r(arguments))
	pF.sensor(true).K(kind)
	return pF
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
function drp() {
	var b = w.D(350, 200).aV(2).lV(1, 1)
	R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
			b.fD($cH(n *= 1.3))
	$l('n:' + n)
}
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
