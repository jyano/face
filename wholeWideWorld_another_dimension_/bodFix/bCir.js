b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD($cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}