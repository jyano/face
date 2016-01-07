alert = function () {
	gx.fancyLt = gx.poly = function (vs, f, s, w) {
		alert('gx.fancyLt = gx.poly')
		var gx = this, g = G(arguments), o
		o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
		if (o.cCL) {
			gx.cCL.apply(gx, o.cCL)
		}
		_.e(o.vs, function (v) {
			gx.lt(v[0], v[1])
		})
		gx.cp()
		return this
	}
}
function alert() {
	$Cir = function () {
		alert('$Cir')
		var g = G(arguments), o
		o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
}
$Cir = function () {
	alert('$Cir')
	var g = G(arguments), o
	o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
	return $H(o.c, o.x, o.y).dc(o.r)
}
