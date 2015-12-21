// filters are only displayed when the display object is cached
// later, you can call updateCache() to update changes to your filters
cjs.Filter.prototype.b = function () {
	var bd = this.getBounds()
	bd.w = bd.width
	bd.h = bd.height
	return bd
}
$cM = function () {
	return new cjs.ColorMatrix()
}
$cF = function (a, b, c, d, e, f, g, h) {
	return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
}
$cMF = function (cM) {
	return new cjs.ColorMatrixFilter(cM)
}
$bF = function (a, b, c, d, e) {
	return new cjs.BlurFilter(a, b, c, d, e)
}
$aF = function (a, b, c, d, e) {
	return new cjs.AlphaMaskFilter(a, b, c, d, e)
}
$aMF = function (a, b, c, d, e) {
	return new cjs.AlphaMapFilter(a, b, c, d, e)
}
cjs.testCanvas = function () {
	return $.d().A($.c(960, 400).id("testCanvas"))
}
$BF = $Bf = $FB = $FlB = $Bfl = $bF = function () {
	var g = G(arguments), fl, o
	o = {x: g[0], y: g[1], q: g[2]}
	o.y = N(o.y) ? o.y : o.x
	o.q = o.q || 1
	fl = new cjs.BlurFilter(o.x, o.y, o.q)
	return fl
}
$AF = $Af = $aF = function (a, b, c, d, e) {
	var fl
	if (O(a) && a.cacheCanvas) {
		a = a.cacheCanvas
	}
	fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
	return fl
	forMaskFilter = function trx(n) {
		var g = G(arguments), a
		a = []
		//for making mask filter
		if (g.n) {
			return 'rgba(0,0,0,' + g[0] || 0 + ')'
		}
		_.e(g, function (n) {
			a.push(trx(n, '-'))
		})
		return a
	}
}
$CMF = $CmF = $cMF = function (a, b, c, d) {
	if (!O(a)) {
		a = $CM(a, b, c, d)
	}
	return new cjs.ColorMatrixFilter(a)
}
$CM = $Cm = $cM = function (a, b, c, d, e) {
	var m
	m = new cjs.ColorMatrix(a, b, c, d, e)
	m.b = m.adjustBrightness
	m.c = m.adjustColor
	m.C = m.adjustContrast
	m.h = m.adjustHue
	m.s = m.adjustSaturation
	m.cl = m.clone
	m.cc = m.concat
	m.m = m.copyMatrix
	m.r = m.reset
	m.A = m.toArray
	m.S = m.toString
	return m
}
///////////
cM = cjs.ColorMatrix.prototype
cM.s = function (s) {
	this.adjustSaturation(s)
	return this
}
cM.c = function (c) {
	this.adjustContrast(c)
	return this
}
cM.ch = function (c) {
	this.adjustHue(c)
	return this
}
cM.b = function (c) {
	this.adjustBrightness(c)
	return this
}
dO.fl = function () {
	var ob = this, g = G(arguments), i
	if (A(g[0])) {
		return ob.fl.apply(ob, g[0])
	}
	ob.filters = ob.filters || []
	_.e(g, function (fl) {
		ob.filters.push(fl)
	})
	if (!g.n) {
		i = ob.image;
		this.ca(0, 0, i.width, i.height)
	}
	return ob
}
dO.fl2 = function () {
	var ob = this, g = G(arguments)
	ob.filters = []
	ob.filters = ob.filters || []
	_.e(g, function (fl) {
		ob.filters.push(fl)
	})
	if (!g.n) {
		i = ob.image;
		this.ca(0, 0, i.width, i.height)
	}
	return ob
}
dO.aF = function (h) {
	var ob = this
	ob.fl($AF(h))
	return ob
}
dO.aF2 = function (h) {
	var ob = this
	this.fl2($AF(h))
	return ob
}
dO.fl = function (fl, i) {
	this.filters = this.filters || []
	if (U(fl)) {
		return _.l(this.filters)
	}
	if (N(fl)) {
		return this.filters[fl]
	}
	if (O(fl)) {
		this.filters.push(fl)
	}
	if (O(i)) {
		this.ca(i)
	}
	return this
}
dO.Fl = function (fl, i) {
	this.filters = this.filters || []
	if (U(fl)) {
		return _.l(this.filters)
	}
	if (N(fl)) {
		return this.filters[fl]
	}
	if (O(fl)) {
		this.filters.push(fl)
	}
	if (O(i)) {
		this.ca(i)
	}
	return this
}
dO.cF = function (a, b, c, d, e, f, g, h) {
	var cf = $cF(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
dO.bF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.aF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.aMF = function (a, b, c, d, e, f, g, h) {
	var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.cMF = function (cM) {
	var cf = new cjs.ColorMatrixFilter(cM)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}