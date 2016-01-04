dO.ca = function () {
	var dO = this, g = G(arguments), o
	var st = dO.getStage()
	var op
	if (!g.n && !g.p && O(dO.image)) {
		dO._ca($(dO.image)[0])
	}
	if (passTest(g)) {
		op = g.f;
		dO.updCa(op);
		return dO
	}
	o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.f} :
			N(g.s) ? {w: g.f, h: g.s} : {}
	if (O(o.i)) {
		o.i = toImg(o.i)
		dO = toObImg(dO)
		if (!g.n) {
			dO._ca()
		}
	}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
			st ? st.W() : 0)
	o.h = N(o.h) ? o.h :
			O(o.i) ? o.i.height :
					st ? st.H() : 0
	return dO._ca(o.x, o.y, o.w, o.h)
	function passTest(g) {
		return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
	}
	
	function toObImg(i) {
		return $(i.image ? i.image : i)[0]
	}
	
	function toImg(i) {
		return i.image ? i.image : $(i)[0];
	}
}
dO.uCx = dO.updateContext
dO.uCa = dO.updCa = function (ca) {
	this.updateCache(ca);
	return this
}
dO.uc = dO.uncache = function (ca) {
	this.uncache(ca);
	return this
}
dO.__ca = function () {
	this.cache.apply(this, arguments);
	return this
}
dO._ca = function (x, y, w, h) {
	var dO = this
	x = N(x, 0)
	y = N(y, 0)
	w = N(w, dO.width)
	h = N(h, dO.height)
	dO.__ca(x, y, w, h)
	return dO
}
dO.caCv = dO.cC = dO.cc = function () {
	return this.cacheCanvas
}
dO.gCDU = function (ca) {
	return this.getCacheDataURL(ca)
}
dO.ca = function () {
	var dO = this, g = G(arguments), o
	var st = dO.getStage()
	var op
	if (!g.n && !g.p && O(dO.image)) {
		dO._ca($(dO.image)[0])
	}
	if (passTest(g)) {
		op = g.f;
		dO.updCa(op);
		return dO
	}
	o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.f} :
			N(g.s) ? {w: g.f, h: g.s} : {}
	if (O(o.i)) {
		o.i = toImg(o.i)
		dO = toObImg(dO)
		if (!g.n) {
			dO._ca()
		}
	}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
			st ? st.W() : 0)
	o.h = N(o.h) ? o.h :
			O(o.i) ? o.i.height :
					st ? st.H() : 0
	return dO._ca(o.x, o.y, o.w, o.h)
	function passTest(g) {
		return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
	}
	
	function toObImg(i) {
		return $(i.image ? i.image : i)[0]
	}
	
	function toImg(i) {
		return i.image ? i.image : $(i)[0];
	}
}
dO.caCv = dO.cC = dO.cc = function () {
	return this.cacheCanvas
}
dO.gCDU = function (ca) {
	return this.getCacheDataURL(ca)
}