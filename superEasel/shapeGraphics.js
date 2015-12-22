h.ef = function () {
	this.graphics.endFill.apply(
			this.graphics, arguments)
	return this
}
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.clr = h.z = h.clear = function () {
	this.graphics.clear();
	return this
}
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
h._lt = function (x, y) {
	var v = V(x, y)
	this.graphics.lt(v.x, v.y)
	return this
}
h.lt = function (x, y) {
	var h = this, gx = h.graphics, g = G(arguments)
	//A(a) && O(a[0])
	if (AO(g.f)) {
		g.e(function (v) {
			h.lt.apply(h, v)
		})
		return h
	}
	O(g.s) ? g.e(function (pt) {
		h.lt(pt)
	}) :
			gx.lt(V(x, y).x, V(x, y).y)
	return h
	function alt() {
		h.lt = function (x, y) {
			var h = this, gx = h.graphics, g = G(arguments)
			if (AO(g.f)) {
				g.e(function (v) {
					h.lt.apply(h, v)
				})
			}
			else if (O(g.s)) {
				g.e(function (pt) {
					h.lt(pt)
				})
			}
			else {
				this.graphics.lt(V(x, y).x, V(x, y).y)
			}
			return this
		}
	}
}
h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
gx._mt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.mt(o.x, o.y)
	return gx
}
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
}
h.mt = function () {
	var g = G(arguments), o
	if (g.N) {
		return this._mt(g.f, g.s)
	}
	o = AO(g) ? {
		firPt: _.f(g.f), restPts: _.r(g.f),
		ox: g.s, oy: g.t
	} :
	{firPt: g.f, restPts: g.r}
	return this._mt(
			o.firPt[0] + N(o.ox, 0),
			o.firPt[1] + N(o.oy, 0)
	).lt(M.os(o.restPts, o.ox, o.oy))
}
h.same = h.copy = function () {
	return $h(this)
} // cjs.shape(this)
cj.shad = cj.shadow = function (color, x, y, blur) {
	if (color == '-') {
		return new cj.Shadow(null, 0, 0, 0)
	}
	color = S(color) ? color : 'a'
	blur = N(blur) ? blur : 10
	x = N(x) ? x : 0
	y = N(y) ? y : 0
	var shad = new cj.Shadow(oO('c', color), x, y, blur)
	return shad
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
ct.dc = function (x, y, r, f, s, width, opt) {
	return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
}
ct.cir = function () {
	var h = this.h()
	return h.cir.apply(h, arguments)
}
ct.circle = function (x, y, rad, color) {
	this.A(cjs.cir(x, y, rad, color))
	return this
}
ct.cir = function () {
	var ct = this, g = G(arguments), h = this.h(), o
	o = g.O ? g.f :
			N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
			{r: g.f, c: g.s}
	h.c(o.c)
	h._dc(o.x, o.y, o.r)
	return h
}
ct.h = function () {
	var ct = this
	var h = $H.apply($H, arguments)
	ct.A(h)
	return h
}
ct.art = function (x, y, f, s) {
	var g = G(arguments)
	if (U(x)) {
		alert('must at LEAST define x');
		return
	}
	if (!N(x)) {
		alert('x not a number! but must be, lah');
		return
	}
	y = N(g[1]) ? g[1] : x
	f = S(g[2]) ? oO('c', g[2]) : null
	s = S(g[2]) ? oO('c', g[3]) : f
	var shp = cjs.shp(x, y, f, s)
	this.A(shp)
	if (g.p) {
		shp.drag()
	}
	return shp
}
ct.pol = ct.poly = function () {
	var ct = this,
			g = G(arguments)
	var h = ct.h()
	if (N(g.f)) {
		h.XY(g.shift(), g.shift())
	}
	h = ct.h() //  alt: h = $a(h, 'pol', g)
	h.poly.apply(h, g)
	return !g.p ? h : h.drag()
}
ct.rec = function () {
	var ct = this, g = G(arguments), o, ct2, h
	if (g.OO_) {
		g.e(this, 'rec');
		return this
	} //it doesnt know that's this! (scope talk)
	o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
			g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
	o.al = N(o.al, 1)
	o.rt = N(o.rt, 0)
	o.c = o.c || 'z';
	o.C = o.C || 'w'
	ct2 = ct.ct();
	h = ct2.h(o.x, o.y);
	h.rt(o.rt);
	h.c(o).al(o.al)
	if (o.lf) {
		h.lf(o)
	} else if (o.rf) {
		h.rf(o)
	}
	if (o.bm) {
		h.bR({i: 'me', hs: [o]})
	}
	else {
		h.rec(o.w, o.h)
	}
	if (g.p) {
		ct.drag()
	}
	return ct2
	function alt() {
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
		ct.rec = function () {
			var ct = this, g = G(arguments), o, ct2, h
			if (g.OO_) {
				g.e(this, 'rec');
				return this
			} //it doesnt know that's this! (scope talk)
			o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			o.al = N(o.al, 1)
			o.rt = N(o.rt, 0)
			o.c = o.c || 'z';
			o.C = o.C || 'w'
			ct2 = ct.ct();
			h = ct2.h(o.x, o.y);
			h.rt(o.rt);
			h.c(o).al(o.al)
			if (o.lf) {
				h.lf(o)
			} else if (o.rf) {
				h.rf(o)
			}
			if (o.bm) {
				h.bR({i: 'me', hs: [o]})
			}
			else {
				h.rec(o.w, o.h)
			}
			if (g.p) {
				ct.drag()
			}
			return ct2
		}
	}
}
cjs.diamond = function (w, h, fc, sc) {
	var h = $H(), gx = h.graphics;
	fc = fc || 'green';
	sc = sc || 'white';
	w = w || 100;
	h = h || w
	var hW = w / 2
	var hH = h / 2
	//var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -hW)
			.lt(-hW, 0).lt(0, hW)
			.lt(hW, 0).lt(0, -hW)
	//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
	function alt() {
		cjs.diamond = function self(width, height, fc, sc) {
			fc = fc || 'green'
			sc = sc || 'white'
			width = width || 100
			height = height || width
			halfwidth = width / 2
			halfheight = height / 2
			var h = new createjs.Shape()
			h.graphics.f(fc).s(sc)
					.mt(0, -halfheight)
					.lt(-halfwidth, 0).lt(0, halfheight)
					.lt(halfwidth, 0).lt(0, -halfheight)
			return h
		}
	}
}
h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
	var h = this, gx = h.graphics, g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
	o = N(g[3]) ? {
		x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
	} :
			N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
					O(g.f) ? g.f : {}
	o.a = N(o.a, 0);
	o.x = N(o.x, 0);
	o.y = N(o.y, 0)
	o.p = _.cap(o.p, 0, .99)
	gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
	return h
	function alt() {
		h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
			var h = this, gx = h.graphics,
					g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
			o = N(g[3]) ? {
				x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
			} :
					N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :
							O(g[0]) ? g[0] : {}
			o.a = _.tN(o.a)
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.p = _.cap(o.p, 0, .99)
			gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
			return h
		}
	}
}
h.drawPolygon = function (poly, sc) {
	// = h.drawConnectedLines
	var h = this,
			numVerts = poly.length
	_.e(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this.f(fc)
	//if (sc) {
	h.c(sc)
	//}
	_.e(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
}
function _post(){
	cj.rim = function (rad, lineWid, x, y) {
		// = cjs.circle2
		var z = lineWid
		if (!S(r)) {
			return rim('r', rad, z, x)
		}
		var gx = $Gx().ss(z / 8)._f(r, 'z')._dc(50)
		return $Sh(gx).XY(N(x, 0), N(y, 0))
	}
}
function _apps(){
	MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$.div('b', 50, 50).A()
		stage = s = cjs.stage(1600, 1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('e', co)
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})
			//on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		stage.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					c.on('mouseover', function () {
						c.X(10, '+');
						$l('v: ' + vn++)
					})
					c.on('rollover', function () {
						c.X(20, '-');
						$l('rv: ' + rvn++)
					})
					c.on('mouseout', function () {
						c.Y(10, '+');
						$l('o: ' + on++)
					})
					c.on('rollout', function () {
						c.Y(20, '-');
						$l('ro: ' + ron++)
					})
				}
		).MV(40)
		stage.container(function (container, stage) {
			container.X(700)
			container.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			container.on('mouseover', function () {
				$l('mouseover')
				this.sXY(.01, '+')
			})
			container.on('rollover', function () {
				$l('rv')
				this.sXY(.01, '+')
			})
			container.on('mouseout', function () {
			})
			container.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		stage.container(function (container, stage) {
			container.x = 1400
			container.bm('me', function (bm) {
				
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
	MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		$.div('blue', 50, 50).A()
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			c.b('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mg(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		stage.ct(function (c, s) {
			c.x(700)
			c.mg(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		stage.ct(function (container, stage) {
			container.X(1400)
			container.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				createjs.bindSlide(bm, stage)
			})
		})
	}
	MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		stage.container(function (container, stage) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			container.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			container.on('click', function () {
				$l('con')
			})
		})
	}
	MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$.div('b', 50, 50).A()
		stage = s = cjs.stage(1600, 1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('e', co)
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})
			//on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		stage.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					c.on('mouseover', function () {
						c.X(10, '+');
						$l('v: ' + vn++)
					})
					c.on('rollover', function () {
						c.X(20, '-');
						$l('rv: ' + rvn++)
					})
					c.on('mouseout', function () {
						c.Y(10, '+');
						$l('o: ' + on++)
					})
					c.on('rollout', function () {
						c.Y(20, '-');
						$l('ro: ' + ron++)
					})
				}
		).MV(40)
		stage.container(function (container, stage) {
			container.X(700)
			container.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			container.on('mouseover', function () {
				$l('mouseover')
				this.sXY(.01, '+')
			})
			container.on('rollover', function () {
				$l('rv')
				this.sXY(.01, '+')
			})
			container.on('mouseout', function () {
			})
			container.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		stage.container(function (container, stage) {
			container.x = 1400
			container.bm('me', function (bm) {
				
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
	MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		$.div('blue', 50, 50).A()
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			c.b('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mg(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		stage.ct(function (c, s) {
			c.x(700)
			c.mg(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		stage.ct(function (container, stage) {
			container.X(1400)
			container.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				createjs.bindSlide(bm, stage)
			})
		})
	}
	MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		stage.container(function (container, stage) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			container.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			container.on('click', function () {
				$l('con')
			})
		})
	}
	MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$.div('b', 50, 50).A()
		stage = s = cjs.stage(1600, 1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('e', co)
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})
			//on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		stage.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					c.on('mouseover', function () {
						c.X(10, '+');
						$l('v: ' + vn++)
					})
					c.on('rollover', function () {
						c.X(20, '-');
						$l('rv: ' + rvn++)
					})
					c.on('mouseout', function () {
						c.Y(10, '+');
						$l('o: ' + on++)
					})
					c.on('rollout', function () {
						c.Y(20, '-');
						$l('ro: ' + ron++)
					})
				}
		).MV(40)
		stage.container(function (container, stage) {
			container.X(700)
			container.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			container.on('mouseover', function () {
				$l('mouseover')
				this.sXY(.01, '+')
			})
			container.on('rollover', function () {
				$l('rv')
				this.sXY(.01, '+')
			})
			container.on('mouseout', function () {
			})
			container.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		stage.container(function (container, stage) {
			container.x = 1400
			container.bm('me', function (bm) {
				
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
	MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		$.div('blue', 50, 50).A()
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			c.b('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mg(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		stage.ct(function (c, s) {
			c.x(700)
			c.mg(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		stage.ct(function (container, stage) {
			container.X(1400)
			container.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				createjs.bindSlide(bm, stage)
			})
		})
	}
	MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		stage.container(function (container, stage) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			container.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			container.on('click', function () {
				$l('con')
			})
		})
	}
	BOWL = function () {
		stage = s = createjs.stage(1000, 1000).tick().A()
		//append a container to the stage
		container = c = new createjs.Container()
		stage.A(container)
		plX = stage.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circle = cjs.circle(plX, plY, plR, 'yellow')
		container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: radius,
				m: m,  //?
				f: f,
				vX: 0, vY: 0, player: false
			}
		}
		_.times(nRng, function (r) {
			var crR = 0,
					ang = 0,
					rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.times(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * cos((ang * a) * PI / 180))
					y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				container.A(
						cjs.circle(10, 'black').XY(x, y))
			})
		})
	}
	BOWL = function () {
		stage = s = createjs.stage(1000, 1000).tick().A()
		//append a container to the stage
		container = c = new createjs.Container()
		stage.A(container)
		plX = stage.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circle = cjs.circle(plX, plY, plR, 'yellow')
		container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: radius,
				m: m,  //?
				f: f,
				vX: 0, vY: 0, player: false
			}
		}
		_.times(nRng, function (r) {
			var crR = 0,
					ang = 0,
					rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.times(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * cos((ang * a) * PI / 180))
					y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				container.A(
						cjs.circle(10, 'black').XY(x, y))
			})
		})
	}
	BOWL = function () {
		stage = s = createjs.stage(1000, 1000).tick().A()
		//append a container to the stage
		container = c = new createjs.Container()
		stage.A(container)
		plX = stage.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circle = cjs.circle(plX, plY, plR, 'yellow')
		container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: radius,
				m: m,  //?
				f: f,
				vX: 0, vY: 0, player: false
			}
		}
		_.times(nRng, function (r) {
			var crR = 0,
					ang = 0,
					rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.times(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * cos((ang * a) * PI / 180))
					y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				container.A(
						cjs.circle(10, 'black').XY(x, y))
			})
		})
	}
	BOWL = function () {
		St()
		ct = container = c = $Ct().a2(st)
		plX = st.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
		//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circ = cjs.cir(plX, plY, plR, 'yellow')
		container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: r, m: m,
				f: f, vX: 0, vY: 0, player: false
			}
		}
		_.t(nRng, function (r) {
			var crR = 0, ang = 0, rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.t(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
					y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				ct.A(cjs.cir(10, 'z').XY(x, y))
			})
		})
	}
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	CNC = CONNECT = function () {
		St() //m$$('location=location')
		cjs.circ = function (r, z, x, y) {
			gx = new cjs.Graphics()
			if (!S(r)) {
				return cjs.circ('red', r, z, x)
			}
			z = _.tN(z, 32)
			x = _.tN(x, 100)
			y = _.tN(y, 100)
			gx.ss(z / 8).f(r, 'black').dc(z)
			return new cjs.Shape(gx).XY(x, y)
		}
		cjs.circ = function (x, y, r, c, C) {
			var h = $h()
			if (O(x)) {
				return cjs.circ(x.x, x.y, x.r, x.c, x.C)
			}
			x = _.tN(x)
			y = _.tN(y)
			r = _.tN(r, 8)
			h.cir(x, y, r, c || 'w', C || 'z')
			SL(h)
			return h
		}
		// st= $St('p', 1000)
		pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		st.A(pink)
		ct = $Ct()
		st.A(ct)
		green = cjs.circ(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circ(100, 'yellow', 'purple').XY(250)
		red = cjs.circ(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circ(20, 'orange', 'purple').XY(300)
		ct.A(green, yellow, red, orange)
		LS(yellow, ct)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, ct)
		SL(orange, red)
		st.u()
	}
	PRM = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	PRM1 = PROMOTE = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	PROMOTE = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	GRIDD = NEEDSDRAWSQUARE = function () {
		St()
		ct = st.ct()
		ct.SL()
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.t(rows * cols, function (i) {
			drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
			)
		})
		st.update()
	}//A-
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	testShape = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	TANGLE = function () {
		z()
		a = $.divA('r', 50, 50).XY(50).A().pad(10)
		b = $.divA('b', 100, 100).XY(100).A().pad(10)
		c = $.divA('g', 200, 200).XY(200).A().pad(10)
		d = $.divA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	SHIP = function () {
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(Math.atan(y / x))
			if (x < 0) {
				d = Math.abs(d) + 90;
				if (y < 0) {
					d = Math.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
			t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			kD('d', function () {
				t.rt(6, '+')
			})
			kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(t)
				st.on('stmousedown', function (event) {
					e = event
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			setInterval(function () {
				t.X(t.vx, '+').Y(t.vy, '+')
				t.rotation = angleInDegrees(t)
			}, 10)
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hide(),
				$.bt('sgun', function () {
					sgun(guy)
				})
		)
		boot = $.boot()
		st = createjs.st(800, 600).tick()
		boot.A(
				div,
				st.canvas
		)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		// _.times(100,function(){var a=ast();a.a();a.p()})
		// st.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
		sgun(guy)
	}
	ZX = function () {
		z()
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}
	SIR = function () {
		$.C('b')
		$S({
			body: {fZ: 40, c: 'o'},
			canvas: {M: 20}
		})
		$.h1('SIR')
		st = $St($.c(600, 300)[0])
		st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
		h = $H().a2(st)
		h.dc()
		h.dc(36)
		h.dc(18, 'o')
		h.dc(200, 100)
		h.dc(300, 100, 20, 'r')
		h.dc(300, 200, 20)
		//
		st2 = $St($.c(600, 300)[0]).t()
		st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
		st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
		//
		st1 = $St($.c(600, 300)[0]).t()
		st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
		st1.A(cjs.cir(300, 'g'))
		st1.A(cjs.cir(140, 220, 20, 'o').dc())
		st1.A(cjs.cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
		st3.A(
				$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
		)
		st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
		h = $Sh().a2(st)
		gx = h.graphics.FS()
		h.dc()
		h.dc(36)
		h.cir(18, 'o')
		h.dc(200, 100)
		h.cir(300, 100, 20, 'r')
		h.dc(300, 200, 20)
		st2 = $St($.c(600, 300)[0]).t()
		st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
		st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
		st1 = $St($.c(600, 300)[0]).t()
		st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
		st1.A(cjs.cir(300, 'g'))
		st1.A(cjs.cir(140, 220, 20, 'o').dc())
		st1.A(cjs.cir('r').XY(220, 200))
		st3 = $St($.c(600, 300)[0]).t()
		st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
		st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
	}
	CIR2 = HDC = function () {
		st = $St()
		//return
		h = $Sh()
		h.graphics.f('blue')
		h.dc(100, 100, 100)
		h.graphics.f('yellow')
		h.dc(200, 100, 100)//.cir()
		st.A(h).u()
		return
		cv = $.c(1000, 500).A()
		st = new cjs.S(cv[0])
		st.t()//.b()
		ct = $Ct().XY(0, 0).a2(st)
		h = $H().a2(ct).XY(0, 0).a2(ct)
		h.f('b').dc(400, 100, 10)
		ct.A(
				cjs.cir({
					r: 100,
					c: 'r', C: 'g', l: 50,
					oX: 100
				}).XY(0, 0)//.XY(300,400)
		)
	}
	CIR01 = function () {
		ct = $Ct().a2($St(600))
		ct.A(
				cjs.cir(100, 100).f('y').dc(0, 0, 4)
		)
		ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
		ct.A(cjs.cir(80, 300, 'g', 'y', 30))
	}
	CIR1 = CJSCIR = function () {
		ct = $Ct().a2($St(600))
		ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
		ct.A(cjs.cir(400, 300).f('r').dc(28, 40, 40))
		h = $H().a2(ct)
		h.f('o').dc(100, 300, 105)///x, r , r = 50
		h.f('z').dc(100, 300)
		h.f('r').dc(100, 300, 50)
		h.f('b').dc(100, 300)//r, x=0, y=0
		h.f('r').dc(100)
	}
	CIR3 = DRG = GOB = function () {
		st = $St() //good gx = $Sh().a2(st).graphics
		//good gx = st.Sh().graphics
		h = st.Sh().drag()
		gx = h.graphics.SS()
		$.i('me', function (img) {
			gx.F()
			//gx._bf(img)
			gx._dc({x: 100, y: 200, r: 200})
			gx.C('R')._dc({x: 200, y: 200, r: 200})
			gx.C('b', 'g', 30)._dc(100, 300)
		})
	}
	CIR4 = HCR = function () {
		gx = $Gx().f('pink').ss(10).s('white')
		gx.dc(0, 0, 100).dc(100, 0, 100)
		gx.s('blue').f('green').dc(0, 300, 100)
		st = $St().A($Sh(gx).XY(300, 100)).u()
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		st.A(h).u()
	}
	RGB = function () {
		gx = $Gx().f(
				cjs.rgb(255, 0, 0)
		).ss(10).s('white')
		gx.dc(0, 0, 100).dc(100, 0, 100)
		gx.s('blue').f('green').dc(0, 300, 100)
		st = $St().A($Sh(gx).XY(300, 100)).u()
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		st.A(h).u()
	}
	CIR0 = ROTCIRS = function () {
		ct = $Ct().a2($St(1000, '+')).A(
				$H(100, 100).f('r')
						.dc(30).dc(30, 20).dc(250, 250))
		$t(function (e) {
			ct.rt(
					ct.rt() + 3
			)
		})
	}
	CIR99 = CIRCS8 = function () {
		CIRCTEST8 = function () {
			$St()
			s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
					[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
			s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
					[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
		}//D better as wap
		$St()
		h.c('b', 'r', 10).XY(-100, -100)
		h.dc(200, 200, 50).dc(400, 200, 50).dc(600, 200, 50)
		/*  h.dc(300,300,50)
		 gx.dc(400,400,50)
		 h.dc(500,500,50)
		 gx.dc(600,600,50)
		 */
		// h.dc(100,100,50) -> no color
		h.c().dc(100, 100, 50) // black fill, l4 white stroke
		h.c('*').dc(100, 200, 50).dc(100, 250, 50)
		h.c('***').dc(200, 200, 50).dc(200, 250, 50)
		h.c({C: 'r'}).dc(300, 300, 50)
		h.cir({
			r: 50, x: 200, y: 200,
			C: ['y', 10]//,
			//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			//ls: {c1: 'u', c2: 'o'}
		})
		h.cir({
			r: 50, x: 500, y: 200,
			C: ['y', 2]//,
			//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
			//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
		})
		h = s.h()//.lf({})
				.dc()
				.c('r', 'b', 10)//.lf({y2: 400})
				.dc(300, 300, 50)
		return
		cjs.me = function (fn) {
			Q(['me'], function (q) {
				fn(q.getResult('me'))
			})
		}
		cjs.me(function (i) {
			h.c({
				l: 200,
				rf: ['w', 'u', 800],
				rs: {c1: 'w', c2: 'x', r2: 800}
			}).dc({x: 0, y: 0, r: 200})
			st.h().c({
				l: 200,
				lf: {c1: 'w', c2: 'u', y2: 200},
				ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
			}).dc({x: 0, y: 0, r: 200})
			st.h().lf('y', 'r', 10).dc({r: 200}).c({
				l: 0,
				c: 'y',
				//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
				bs: i, bf: i
			}).dc({r: 200})
			st.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40)
		})//D
	}
	POL = function () {
		$St().Gx().FS()._mt(100, 300)
				._lt(300, 100)._lt(500, 200)._lt(800, 200)
				._lt(100, 300)
				._pol(vs1)
	}
	REC = function () {
		$St()
		h = st.Sh().dg()
		gx = h.graphics
		gx.FS()._dr()
		gx = st.Gx().FS()._dr(100, 100, 500, 10)
		h.dr(100, 100, 500, 10)
		st.Gx().FS()._dr(500, 30)
	}
	CEN = YSTAR = CENSHP = function () {
		stage = cjs.stage(500, 600).A()
		shape = new cjs.Shape()
		SL(shape)
		stage.A(shape)
		shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
		shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		shape.XY(200)
		stage.bm('me', function (b) {
			me = b
			me.XY(200)
			me.sXY(.4)
		})
	}
	CSH = CENTERSHAPE8 = function () {
		CENTERSHAPE9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape();
			SL(shape)
			shape.RECT(0, 0, 100, 100, 'a')
			shape.RECT(0, -75, 25, 50, 'b')
			shape.RECT(0, -200, 100, 100, 'r')
			shape.circle(100, 200, 40, 'z', 'x')
			shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
			shape.g.beginFill("orange").drawPolyStar(
					100, 100, 50, 5, 0.6, -90)
			shape.xy(200)
			stage.bm('me', function (b) {
				me = b
				me.rgc()
				me.xy(200)
				me.sXY(.4)
			})
		}
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		SL(shape)
		shape.rec(0, 0, 100, 100, 'a')
		shape.rec(0, -75, 25, 50, 'b')
		shape.rec(0, -200, 100, 100, 'r')
		shape.cir(100, 200, 40, 'z', 'x')
		gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		gx.beginFill("orange").drawPolyStar(
				100, 100, 50, 5, 0.6, -90)
		shape.XY(200)
		stage.bm('me', function (b) {
			me = b
			me.rgc()
			me.XY(200)
			me.sXY(.4)
		})
		CENTERSHAPE9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape();
			SL(shape)
			shape.RECT(0, 0, 100, 100, 'a')
			shape.RECT(0, -75, 25, 50, 'b')
			shape.RECT(0, -200, 100, 100, 'r')
			shape.circle(100, 200, 40, 'z', 'x')
			shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
			shape.g.beginFill("orange").drawPolyStar(
					100, 100, 50, 5, 0.6, -90)
			shape.xy(200)
			stage.bm('me', function (b) {
				me = b
				me.rgc()
				me.xy(200)
				me.sXY(.4)
			})
		}
	}
	GXPOL = function () {
		$S$().Gx().FS().poly([vs1])
	}
	CHARCOAL = BLF2 = function () {
		var isDrawing
		st = $St()
		t = $T("Loading...")
		t.set({x: st.W() / 2, y: st.H() - 40})
		t.textAlign = "center"
		$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
			i = img[0]
			h = $H().a2(st)
			bm = new cjs.Bitmap(i)
			bl = new cjs.Bitmap(i)
			bl.filters = [
				new cjs.BlurFilter(24, 24, 2),
				new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
			]
			bl.cache(0, 0, 960, 400)
			t.text = "Click and Drag to Reveal the Image.";
			st.A(bl, t, bm)
			st.A(cu = $H('r').dc(25))
			cu.cursor = "pointer"
			st.enableMouseOver()
			st.on("stagemousedown", function (e) {
				o = new cjs.Point(st.mouseX, st.mouseY)
				oM = o;
				isDrawing = true
			})
			st.on("stagemouseup", function (e) {
				isDrawing = false
			})
			st.on("stagemousemove", function (e) {
				var m
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					st.u();
					return
				}
				m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
				$l('draw')
				h.graphics.ss(40, "round", "round");
				h.graphics.s("rgba(0,0,0,0.2)")
				// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
				h.graphics.mt(m.x, m.y)
				h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
				o.x = st.mouseX;
				o.y = st.mouseY;
				oM.x = m.x;
				oM.y = m.y
			})
		})
		function altErr() {
			BLF1xxx = function () {
				/*This example demonstrates revealing an image using another image as the
				 mask. The mask is created by drawing a
				 shape, and then caching the shape to make an image with an alpha
				 channel. It is then applied to the image as
				 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
				 */
				st = $St()
				var isDrawing
				$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
					i = img[0]
					h = $H().a2(st)
					bm = new cjs.Bitmap(i)
					bl = new cjs.Bitmap(i)
					bl.filters = [
						new cjs.BlurFilter(24, 24, 2),
						new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
					]
					bl.cache(0, 0, 960, 400)
					//t.text = "Click and Drag to Reveal the Image.";
					st.A(bl, t, bm)
					updateCacheImage(false)
					st.A(cu = $H('r').dc(25))
					cu.cursor = "pointer"
					st.enableMouseOver()
					st.on("stagemousedown", function (e) {
						oldPt = new cjs.Point(st.mouseX, st.mouseY);
						oldMidPt = oldPt;
						isDrawing = true;
					})
					st.on("stagemouseup", function (e) {
						updateCacheImage(true);
						isDrawing = false
					})
					st.on("stagemousemove", function (e) {
						var midPoint
						cu.x = st.mouseX;
						cu.y = st.mouseY;
						if (!isDrawing) {
							st.u();
							return;
						}
						midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
						h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
						h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true)
					})
				})
				function updateCacheImage(upd) {
					if (upd) {
						h.updateCache()
					}
					else {
						h.ca(0, 0, i.width, i.height)
					}
					mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
					bm.filters = [mskF]
					if (upd) {
						bm.ca(i)
					}
					else {
						bm.ca(i)
					}
					st.u()
				}
			}
			BLFxxx = function () {
				$.i('me', function (img) {
					iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
					s = $St();
					s.enableMouseOver()
					h = $H().a2(s)
					i = img[0]
					bm = $Bm(i)
					bl = $Bm(i)
					bl.Fl($bF(24, 24, 2), i)
					bl.Fl($cMF($cM(60)), i)
					bl.ca(0, 0, 960, 400)
					s.A(bl, bm)
					h.ca(i)
					bm.fl($aF(s.cc()), i);
					s.u()
					// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
					s.MU(function (e) {
						iDr = 0
						h.ca(i)
						bm.fl($aF(s), i)
						s.u()
					})
					s.MD(function (e) {
						iDr = oM = o = s.m()
					})
					s.MM(function (e) {
						var mP             //   cu.x = s.mX(); cu.y = s.mY()
						if (!iDr) {
							s.u();
							return
						}
						mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
						h.ss(40, "round", "round")
								.C("rgba(0,0,0,0.2)")
								.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
						o = s.m()
						oM = V(mP)
						h.ca(i)
						bm.fl($aF(s.cc()), i);
						s.u()
					})
				})
			}
		}
	}
}