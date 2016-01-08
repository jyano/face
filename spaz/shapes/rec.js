w.brick = w.bii = function (x, y, W, H) {

	var w = this, g = G(arguments), b, o
	o = g.O_ ? g.f : N(g.s) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f}
	
	 
	o.w = N(o.w, 40)
	 
	 
	b = w.S(
	
			N(o.x, w.hW),
			N(o.y, w.hH), 
			o.c || $r(),
			o.w,
			N(o.h, o.w)
	)
	

	b.K('brick')     //.DFB(0.5, 0.5, 0)

	return g.n? b.sen(true)   : b
}





w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = _.x({x: g.f, y: g.s},
			S(g.t) ? {i: g.t,
				w: g.fo, h: g.fi, c: g.si} : {
				w: g.t, h: g.fo, c: g.fi
			})
			
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w._D(o)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
 