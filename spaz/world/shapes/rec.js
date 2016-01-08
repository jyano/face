w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = _.x({x: g.f, y: g.s},
			S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
			{w: g.t, h: g[3], c: g[4]})
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
 