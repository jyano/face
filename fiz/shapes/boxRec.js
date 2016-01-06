w.box = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A($dB(x, y), $rF(W, H)).K('box')
}
w.box = w.bi = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.brick = w.bii = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y),
			b2d.poly(W, H).r(0)).K('brick')
}
w.brick = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
w.brk = w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
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
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
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
$rH = function (a, b, c, d, e) {
	var g = G(arguments)
	var pH = $pH()
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
	b.CF( $fD($cH(40)))
	b.fD( $pH().box(100, 100, 100, 200, 78))
	return
	b = w.S(500, 400)
	b.CF($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
 
 
SABB = function () {
	$box()
	//pH.sAB handles both box and oriented box!
	w.cRF(100, 100) 
	w.cRF(100, 200,20)// rt
	w.cRF(100, 300,20, 20) //w, h (as box)
	w.cRF(100, 370,20, 20, 20) // w,h,r
	w.cRF(100, 420,20, 20, 20, 20)// w,h,x,y,rt
	w.cRF(100, 500, 20, 20, 20, 20, 20)
}

 

SAAB=function(){$box()
 
	//pH.sAB handles both box and oriented box!
	b = w.S(500, 400)
	b.CF($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
ORBOX = function () {$box()
	
	b = w.sB(320, 360) 
	b.CF( $cF(60) )
	b.CF( $rF(10, 500, 0, 0, 50))
}

BSBB = function () {
	w = $box()
	//cir = w.dB(220, 60)
	//cir.A($cir(60).DBF(1, .7, .4))
	b  = w.dB(300, 400)
	b.CF( $rF(100, 100) )

	w.sB(500, 1000).CF($rF(1200, 100))
}