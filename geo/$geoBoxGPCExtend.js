pS.reg = function (b) {
	//= pS.toRelativePoints = pS.mapToBoxWorld
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g.f, g.s)
	return M.p(vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	}))
}
pD.reg = pD.rel = function (b) {
	var p = this, g = G(arguments),
			vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!
	//what about a f?
	o = V(g[0], g[1])
	vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	})
	return M.p(vs)
}
pS.reg = function (b) {
	var p = this, g = G(arguments), vs = p.vs(), b, o
	//you can pass in the verts,
	// or the gPoly itself!                 //what about a f?
	o = V(g[0], g[1])
	vs = _.m(vs, function (v) {
		return V(v).sub(o.x, o.y)
	})
	return M.p(vs)
}