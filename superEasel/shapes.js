gx._dc = function () {
	/*
	 // dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
	 example: 
	 var gx = new cjs.Gx().ss(1);
	 gx.s(cjs.Gx.getRGB(0,0,0));
	 gx.f(cjs.Gx.getRGB(255,0,0));
	 gx.dc(0,0,100);
	 var s = new cjs.Shape(g);
	 s.x = 100; 
	 s.y = 100;
	 st.addChild(s);
	 st.update();
	 */
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, r: g.t} : {r: g.f}
	return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
}
gx.cir = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ?
			{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
			{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
	if (!g.n) {
		o.fC = o.fC || 'z'
		o.sC = o.sC || 'w'
		o.ss = N(o.ss, 4)
	}
	if (o.fC) {
		gx.fC(o.fC)
	}
	if (o.sC) {
		gx.sC(o.sC)
	}
	if (N(o.ss)) {
		gx.ss(o.ss)
	}
	return gx._dc(o)
}
gx._dr = function () {
	var gx = this, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	gx.dr(o.x, o.y, o.w, o.h)
	// drawRect ( x  y  w  h ) Graphics chainable :
	// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
	return gx
}
h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments)
	h.cp() // ?
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	gx._dc.apply(gx, g)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} : g.N_ ? {
						r: g.f,
						c: g.s,
						C: g.t,
						l: g.fo
					} : {c: g.f, C: g.s, l: g.t}
	//o.c = o.c || 'w'; o.C = o.C || 'z'; o.l = N(o.l, 4)
	h.c(o)
	function replaced() {
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
	}
	
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
}
h.cirs = function () {
	var h = this, g = G(arguments)
	_.e(g.A ? g.f : g, function (c) {
		h.dc(c)
	})
	return this
}
cj.cir = function () {
	var g = G(arguments), o
	var h = $Sh()
	if (g.p) {
		h.drag()
	}
	o = g.O ? g.f :
			N(g.f) && N(g.s) && N(g.t) ?
			{r: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} :
							g.N_ ? {r: g.f, c: g.s, C: g.t, l: g.fo} :
							{c: g.f, C: g.s, l: g.t}
	h.cir(o.r, o.c, o.C, o.l)
	h.regX = -N(o.x, 0)
	h.regY = -N(o.y, 0)
	h.alpha = N(o.al, 1)
	return h
	// old: cir0: x, y, rad, fCol, sCol ( h = $Sh().XY(N(g.f, 0), N(g.s, 0)) )
	//h.f(fCol || 'z')
	//var fCol = g.fo || 'w'
	//var sCol = g.fi || 'z'
	//if (sCol) {	 h.s(sCol) }
	//h.cir(0, 0, rad)
	//if (g.O) {	 var cir = g.f
	//return cjs.cir0(cir.x, cir.y, cir.r, cir.fC, cir.sC)	 }
	//h.cir(x, y, r, fCol, sCol)
}
cj.rim = function (rad, lineWid, x, y) {
	// = cjs.circle2
	var z = lineWid
	if (!S(r)) {
		return rim('r', rad, z, x)
	}
	var gx = $Gx().ss(z / 8)._f(r, 'z')._dc(50)
	return $Sh(gx).XY(N(x, 0), N(y, 0))
}
$Rec = function (a, b, c, d) {
	return new cjs.Rectangle(a, b, c, d)
}
h._dr = function () {
// = h.dr
	var h = this, gx = h.graphics
	gx._dr.apply(gx, arguments)
	return h
}
h.dr = function (x, y, W, H) {
	// = h.dr2
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.dr2(g)
		});
		return h
	}
	o = g.O ? g.f :
			U(g.t) ? {w: g.f, h: g.s} :
			{x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	h._dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
h.rec = function () {
	var h = this, g = G(arguments), o
	if (g.OO_) {
		g.e(function (g) {
			h.rec(g)
		});
		return h
	}
	o = g.O ? g.f :
			S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
					g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
							N(g.t) ?
							{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
							{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, o.w)
	if (o.i) {
		$l('see h.rec')
		// ****************
		h.bf(o.i, function () {
			o.i = null;
			h.rec(o)
		})
		return h
	}
	if (o.c) {
		h.c(o)
	}
	if (o.lf) {
		$l('see h.rec')
		return // ****************
		h.lf({
			c1: o.c1 || 'z', c2: o.c2 || 'w',
			s1: 0, s2: 1,
			x: o.x - o.w / 2, y: o.y - o.h / 2,
			x2: o.x - o.w / 2, y2: o.y + o.h / 2
		})
	}
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
$rGx = $recGx = classicRecGx = function (width, height, fc, sc) {
	
	// =  cjs.rect= cjs.rect2
	width = width || 50
	height = height || 50
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight)
			.lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight)
			.lt(-halfwidth, -halfheight)
	return h
}
$rCt = function () {
	return 'this is a recGx in a container so it can be moved relative to something.. (its like a fx rel to a bd)'
}
$Cir = function () {
	var g = G(arguments), o
	o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
	return $H(o.c, o.x, o.y).dc(o.r)
}
h.vs = function (vs, x, y) {
	return this.mt(M.os(vs, x, y))
	//  takes [pt,pt..] and draws it.. with optional offsets..
	//used by (but NOT  dependent on) gPoly 
	// ** previously: ***
	//o = {v: g.f, ox: g.s, oy: g.t}
	//o.ox = N(o.ox, 0)
	//o.oy = N(o.oy, 0)
	//h.mt(_.f(o.v)[0] + o.ox, _.f(o.v)[1] + o.oy)
	//_.eR(o.v, function (v) {h.lt(v[0] + o.ox, v[1] + o.oy)})
	//return h
}
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
gx._pol = function () {
	var gx = this, g = G(arguments)
	if (g.A) {
		return gx._pol.apply(gx, g.f)
	}
	gx.mt(g.f0, g.f1)
	_.e(_.r(g), function (pt) {
		gx.lt(pt[0], pt[1])
	})
	return gx.lt(g.f0, g.f1)
}
gx.pol = function (pts, f, s, w) {
	var gx = this, g = G(arguments)
	if (N(pts[0])) {
		g.e(function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	else {
		gx.FS(f, s, w)
		_.e(pts, function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	return gx.cp()
}
h.poly = function (vxs, f, s, wd) {
	var h = this, g = arguments
	h.FS(f, s, wd)
	_.e(g, A(vxs) && N(vxs[0]) ?
			function ltXY(v) {
				h.lt(v[0], v[1])
			} :
			function lt(v) {
				h.lt(v)
			})
	h.cp()
	return h
}
h.pol = function () {
	var h = this,
			g = G(arguments), o; //O$ >>  O(o) && !F(o) && !A(o)
	h.ef().es()
	o = O$(g.f) ? g.f :
			N(g.s) && N(g.t) ?
			{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
			{v: g.f, c: g.s, C: g.t, l: g.fo}
	o.v = M.os(o.v, o.x, o.y)
	h.c(oDef(o || {}))
	!o.bf ? h.lt(o.v).cp() :
			h.bf(S(o.bf) ? o.bf : 'me', function draw() {
				h.mt(o.v).cp()
			})
	return h
}
 