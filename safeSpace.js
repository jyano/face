gx._pol = function () {var gx = this, g = G(arguments)

	if (g.A) {
		return gx._pol.apply(gx, g.f)
	}

	gx.mt(g.f[0], g.f[1])

	_.e(_.r(g), function (pt) {
		gx.lt(pt[0], pt[1])
	})

	gx.lt(g.f[0], g.f[1])

	return gx
}



gx.pol = function (pts, f, s, w) {
	var gx = this, g = G(arguments)
	//  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
	if (N(pts[0])) {
		_.e(g, function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	else {
		gx.fs(f, s, w)
		_.e(pts, function (pt) {
			gx.lt(pt[0], pt[1])
		});
	}
	return gx.cp()
}

h.poly = function (vxs, f, s, wd) {
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) //verts passed in directly
		{
			_.each(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) { //verts passed in directly
			_.e(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	var h = this, g = arguments
	h.fs(f, s, wd)
	if (A(vxs) && N(vxs[0])) {
		_.e(g, function (v) {
			h.lt(v[0], v[1])
		})
	}
	else {
		_.e(vxs, function (v) {
			h.lt(v)
		})
	}
	return h.cp()
}
h.poly = function (vxs, f, s, wd) {
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) //verts passed in directly
		{
			_.each(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) { //verts passed in directly
			_.e(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	var h = this, g = arguments
	h.fs(f, s, wd)
	if (A(vxs) && N(vxs[0])) {
		_.e(g, function (v) {
			h.lt(v[0], v[1])
		})
	}
	else {
		_.e(vxs, function (v) {
			h.lt(v)
		})
	}
	return h.cp()
}
h.poly = function (V, c, C, l) {

//*** this is s.poly.. not h.poly !
	var h = this, g = G(arguments),
			o = A(g[0]) ? {v: g[0], c: g[1], C: g[2], l: g[3]}//array must come first b/c its an obj
					: O(g[0]) ? g[0] : {}
	//?
	oDef(o);
	h.ef().es() // ???
	//?
	h.c(o)
	if (o.bf) {
		h.bf('me', function () {
			h.lt(o.v).cp()
		})
	}
	else {
		h.lt(o.v).cp()
	}
	return h
}
h.pol = function (V, c, C, l) {
	var h = this, g = G(arguments), o
	//array must come first b/c its an obj
	o = A(g.f) ?
	{v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
	$df.oDef(o)
	h.ef().es()
	h.c(o)
	if (o.bf) {
		h.bf('me', function () {
			h.lt(o.v).cp()
		})
	}
	else {
		h.lt(o.v).cp()
	}
	return h
}
h.pol = function () {
	var h = this, g = G(arguments), o;
	//O$ >>  O(o) && !F(o) && !A(o)
	o = O$(g.f) ? g.f :
			N(g.s) && N(g.t) ?
			{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
			{v: g.f, c: g.s, C: g.t, l: g.fo}
	o.v = M.os(o.v, o.x, o.y)
	o = oDef(o || {})
	h.ef().es().c(o)
	if (o.bf) {
		var bf = S(o.bf) ? o.bf : 'me'
		h.bf(bf, function draw() {
			h.mt(o.v).cp()
		})
	}
	else {
		h.lt(o.v)
		h.cp()
	}
	return h
}
h.pol = function () {
	var h = this, g = G(arguments), o;
	//O$ >>  O(o) && !F(o) && !A(o)
	o = O$(g.f) ? g.f :
			N(g.s) && N(g.t) ?
			{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
			{v: g.f, c: g.s, C: g.t, l: g.fo}
	o.v = M.os(o.v, o.x, o.y)
	o = oDef(o || {})
	h.ef().es().c(o)
	if (o.bf) {
		var bf = S(o.bf) ? o.bf : 'me'
		h.bf(bf, function draw() {
			h.mt(o.v).cp()
		})
	}
	else {
		h.lt(o.v)
		h.cp()
	}
	return h
}
gx.fancyLt = gx.poly = function (vs, f, s, w) {
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
