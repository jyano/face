pH.SAB = function (wd, ht) {
	var pH = this
	pH.SetAsBox(wd, ht);
	return pH
}
pH.sAB = function (wd, ht) {
	return this.SAB(wd / 30, ht / 30)
}
pH.SAOB = function (wd, ht, pos, ang) {var pH=this
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAOB=function(wd, ht, pos, ang){
	return this.SAOB(wd/30, ht/30, pos, ang)
}
pH.box = function (args) {var pH = this, g = G(arguments)
	pH.__box = function (o) {
		pH.box_ = function () {
			var pH = this, g = G(arguments)
			var args = (g.A || _.isArguments(g.f)) ? g.f : g
			return pH.box.apply(pH, args)
		}
		var pH = this
		return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
				pH.SAB(o.w, o.h)
	}
	pH._box = function (o) {
		var pH = this
		o.w = (o.w || 100) / 60
		o.h = (o.h || 100) / 60
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.v = V(o.x, o.y).d()
		o.rt = M.tR(o.rt || 0)
		return o
	}
	return pH.__box(pH._box(O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
					N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
							N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
							{rt: g.f}))
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

///////////////////////////                                AS BOX          /////////////////////////////////

ASBOX = function () {$box()
	w.dB(300,100).$rF(200, 300)
	w.$rF(900,300, 300, 200)
}


OBOX = function () {
	$box()
	pos = V(500, 200).d()
	pH= $pH().sAOB(300, 200, pos, 20)
	w.dB(300, 100).CF($fD(pH))

}



w.$rF=function(x,y,wd,h){
	return this.dB(x,y).$rF(wd,h)
}

b.$rF =b.$bF=function(x,y){
	return this.CF($rF(x,y))
}

$rF=function(x,y){

	return $fD($pH().sAB(x,y))
}


///////////////////////////                                AS BOX          /////////////////////////////////

$rH = function (a, b, c, d, e) {
	var g = G(arguments)
	var pH = _$pH()
	//return pH.sAB.apply(pH, g)
	pH.box(a, b, c, d, e)
	return pH
}
$_rF = function (wd, ht, xy, ang, ang2) {
	var f = $fD($pH(wd, ht, xy, ang, ang2))
	if (g.n) {
		f.isSensor = true
	}
	return f
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