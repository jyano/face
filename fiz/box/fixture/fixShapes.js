
$_rF = function (wd, ht, xy, ang, ang2) {
	var f = $fD($pH(wd, ht, xy, ang, ang2))
	if (g.n) {
		f.isSensor = true
	}
	return f

}
_$rF = function () {
	var pH = $pH()
	pH.sAOB.apply(pH, arguments)
	return $fD(pH)
}
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
$rF = function () {
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
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
$cFAlt = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
$cirFAlt = function (rad, x, y, den) {
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
	return fixt
	//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
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
f.TP = function () {
	var f = this,
			h = f.H()
	return h.TP.apply(h, arguments)
}
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
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	var tf = f.B().tf()
	var pt = N(pt) ? V(pt, y) : pt
	return f.H().TP(tf, pt)
}
f.tf = f.gTf = function (tf) {
	var f = this, b = f.B()
	if (U(tf)) {
		return b.tf()
	}
	b.tf(tf)
	return f
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
} 
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
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
f.H = f.shp = f.shape = function (h) {

//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return this
}
f.rad = function () {
	return this.shp().m_radius * 30
}
f.hType = function () {
	return this.H().m_type
}
f.iC = f.isCirc = function () {
	return this.hType() == 0
}
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}