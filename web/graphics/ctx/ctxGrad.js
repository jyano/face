x.lG = x.linGrad = function (a, b, c, d) {
	return this.createLinearGradient(a, b, c, d)
}
x.rG = x.radGrad = function (a, b, c, d, e, f) {
	return this.createRadialGradient(a, b, c, d, e, f)
}
x.lg = function () {
	var ctx = this, g = G(arguments), o, gr
	o = g.O ? g.f : N(g.t) ? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
	o.x1 = N(o.x1, 0)
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2, 0)
	gr = ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)
	if (o.cS) {
		gr.cS(o.cS)
		ctx.c(gr);
		return ctx
	}
	return gr
}
x.lf = x.lG = ctx.lGr = ctx.linGrad = function (a, b, c, d) {
	return this.createLinearGradient(a, b, c, d)
}
x.rf = x.rG = ctx.rGr = ctx.radGrad = function (a, b, c, d, e, f) {
	return this.createRadialGradient(a, b, c, d, e, f)
}
x.pt = x.Pt = function () {
	return this.createPattern()
}