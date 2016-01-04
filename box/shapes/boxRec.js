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
 