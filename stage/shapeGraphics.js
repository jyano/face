
$L('colTxShad')
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
 

 function colTxShad(){
	 gx._ss = function () {	//=0//=0//=10//=false
		 var gx = this, g = G(arguments)
		 if (g.S_) {
			 return gx._s(g.f)._ss.apply(gx, g.r)
		 }
		 var l = N(g.f, 4)
		 var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
		 var jts = N(g.t, 0)
		 var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
		 var ignSc = g.n ? true : false
		 gx.ss(l, caps, jts, mit, ignSc)
		 return gx
	 }
	 h.l = function (l, b, c) {
		 var h = this, gx = h.graphics;
		 gx.ss(l || 1, b, c)
		 return h
	 }
	 h.ss = function () {
		 var h = this, gx = h.graphics, g = G(arguments)
		 gx.apply._ss(gx, g)
		 return h
	 }
	 gx.F = function (fC) {
		 return this._f(fC || 'z')
	 }
	 gx.S = function (sC) {
		 return this._s(sC || 'w')
	 }
	 gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
		 return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
	 }
	 gx.FS = gx.C = function (f, s, w) {
		 // = gx.fs = gx.fC = gx.cCL
		 var gx = this
		 gx.F(f).S(s).SS(w)
		 return gx
	 }
	 h.FS = function () {
// = h.fs = h.col
		 var h = this, gx = h.graphics, g = G(arguments), o
		 gx.FS.apply(gx, g)
		 return h
	 }
	 h.c = function () {	// uses " c_C_L " color pattern
		 var h = this, gx = h.graphics, g = G(arguments), o
		 o = g.u ? {c: 'z', C: 'w', l: 6} : g.O ? g.f :
				 N(g.s) ? {c: g.f, l: g.s} :
						 g.N_ ? {l: g.f, C: g.s} :
						 {c: g.f, C: g.s, l: g.t}
		 colInArr()
		 function colInArr() {
			 if (A(o.c)) {
				 $c_C_L = function (o, col) {
					 col = col || {}
					 if (N(o.c[1])) {
						 col.c = o.c[0];
						 col.l = o.c[1];
					 }
					 else if (N(o.c[0])) {
						 col.l = o.c[0];
						 col.C = o.c[1]
					 }
					 else {
						 col.c = o.c[0];
						 col.C = o.c[1];
						 col.l = o.c[2]
					 }
					 return col
				 }
				 if (N(o.c[1])) {
					 o.c = o.c[0];
					 o.l = o.c[1];
				 }
				 else if (N(o.c[0])) {
					 o.l = o.c[0];
					 o.C = o.c[1]
				 }
				 else {
					 o.c = o.c[0];
					 o.C = o.c[1];
					 o.l = o.c[2]
				 }
			 }
			 if (A(o.C)) {
				 $C_L = function (o, col) {
					 col = col || {}
					 col.C = o.C[0];
					 col.l = o.C[1]
					 return col
				 }
				 o.C = o.C[0];
				 o.l = o.C[1]
			 }
		 }
		
		 transparent()
		 function transparent() {
			 if (o.c == 0) {
				 $gxF = function (gx, col) {
					 gx.f(null);
					 col.C = 'X'
				 }
				 gx.f(null);
				 o.c = 'X'
			 }
			 if (o.C == 0) {
				 $gxS = function (gx, col) {
					 gx.s(null);
					 col.C = 'X'
				 }
				 gx.s(null);
				 o.C = 'X'
			 }
			 if (o.c == 00) {
				 $gxFS = function (gx, col) {
					 gx.f(null);
					 gx.s(null);
					 col.c = 'X';
					 col.C = 'X'
				 }
				 gx.f(null);
				 gx.s(null);
				 o.c = 'X';
				 o.C = 'X'
			 }
		 }
		
		 colorize()
		 function colorize() {
		 }
		
		 if (S(o.c)) {
			 gx.f(oO('c', o.c))
		 }
		 if (S(o.C)) {
			 gx.s(oO('c', o.C))
		 }
		 if (N(o.l)) {
			 h.l(o.l)
		 }
		 fGrad()
		 function fGrad() {
			 if (o.lf) {/*
			  $l('r: ' + o.r)
			  $l('x: ' + o.x)
			  $l('y: ' + o.y)
			  $l('x1: '+ o.lf.x1)
			  $l('y1: '+ o.lf.y1)
			  $l('x2: '+ o.lf.x2)
			  $l('y2: '+ o.lf.y2)
			  */
				 o.lf = O(o.lf) ? o.lf : {}
				 if (o.r) {
					 o.r = N(o.r, 0);
					 o.x = N(o.x, 0);
					 o.y = N(o.y, 0)
					 o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
					 o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
					 o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
					 o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
				 }
				 h.lf(o.lf)
			 }
			 if (o.rf) {
				 o.rf = O(o.rf) ? o.rf : {}
				 o.c = [2, 'z']
				 if (o.r) {
					 o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
					 o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
					 o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
					 o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
					 o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
				 }
				 h.rf(o.rf)
			 }
			 if (o.ls) {
				 o.ls = O(o.ls) ? o.ls : {}
				 if (o.r) {
					 o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
					 o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
					 o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
					 o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
				 }
				 h.ls(o.ls)
			 }
			 if (o.rs) {
				 o.rs = O(o.rs) ? o.rs : {}
				 if (o.r) {
					 o.rs.x1 = _.tN(o.rs.x1) + o.x
					 o.rs.y1 = _.tN(o.rs.y1) + o.y
					 o.rs.x2 = _.tN(o.rs.x2) + o.x
					 o.rs.y2 = _.tN(o.rs.y2) + o.y
					 o.rs.r2 = _.tN(o.rs.r2) + o.r
				 }
				 h.rs(o.rs)
			 }
		 }
		
		 fBMap()
		 function fBMap() {
			 if (o.bs) {
				 h.bs(o.bs)
			 }
			 if (o.bf) {
				 h.bf(o.bf)
			 }
		 }
		
		 //note about h.c : used to be:   h.c = function (rad) {return this.dc(0, 0, rad)}
		 return h
	 }
	 cjs.lg = h.lg = function () {
		 var g = G(arguments), o//h=this, gx=h.graphics,
		 if (g.A) {
			 return cjs.lg.apply(null, g.f)
		 }
		 o = g.O ? g.f :
				 _.x({c1: g.f, c2: g.s},
						 N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
								 : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
								 : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
		 o.c1 = oO('c', o.c1 || 'z');
		 o.c2 = oO('c', o.c2 || 'w')
		 o.s1 = N(o.s1, 0);
		 o.s2 = N(o.s2, 1)
		 o.x1 = N(o.x1, 0);
		 o.y1 = N(o.y1, 0)
		 o.x2 = N(o.x2, 0)
		 o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
		 return o
	 }
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.map(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.map(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.map(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lf = function () {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 o = cjs.lg(g)
		 gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.ls = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.lg.apply(h, g)
		 gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rg = function (o) {
		 var h = this, g = G(arguments),
				 gx = h.graphics,
				 o
		 if (A(g[0]) && A(g[1])) {
			 gx.rf(
					 [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			 )
			 return h
		 }
		 o = O(g[0]) ? g[0] :
				 S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						 N(g[7]) ?
						 {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								 : N(g[5]) ?
						 {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								 : N(g[4]) ?
						 {x2: g[2], r1: g[3], r2: g[4]}
								 : N(g[3]) ?
						 {r1: g[2], r2: g[3]}
								 :
						 {r2: g[2]})
						 : S(g[0]) ?
				 {c2: g[0]}
						 : {}
		 $df.grad(o)
		 o.x2 = N(o.x2, o.x1)
		 o.y2 = N(o.y2, o.y1)
		 o.r1 = N(o.r1, 1);
		 o.r2 = N(o.r2, 100)
		 return o
	 }
	 h.rf = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rf(
				 [o.c1, o.c2],
				 [o.s1, o.s2],
				 o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 h.rs = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 tx.F = tx.fo = function (font) {
		 if (U(font)) {
			 return this.font
		 }
		 if (N(font)) {
			 font += 'px Arial'
		 }
		 this.font = font
		 return this
		 t.F1 = t.fo1 = function (f) {
			 if (U(f)) {
				 return this.font
			 }
			 this.font = N(f) ? f + 'px Arial' : f
			 return this
		 }
	 }
	 tx.C = tx.col = function (color) {
		 if (U(color)) {
			 return this.color
		 }
		 this.color = oO('c', color)
		 return this
	 }
	 tx.tA = tx.align = tx.textA = function (textAlign) {
		 if (U(textAlign)) {
			 return this.textAlign
		 }
		 this.textAlign = textAlign
		 return this
	 }
	 tx.mW = tx.measW = tx.measuredW = function () {
		 return this.getMeasuredWidth()
	 }
	 tx.oL = tx.outL = tx.ol = function (outline) {
		 if (U(outline)) {
			 return this.outline
		 }
		 this.outline = outline
		 return this
	 }
	 tx.bl = tx.textB = t.baseline = tx.tB = function (bl) {
		 var g = G(arguments)
		 if (g.p) {
			 bl = 'bottom'
		 }
		 if (g.n) {
			 bl = 'top'
		 }
		 if (bl === '') {
			 bl = 'middle'
		 }
		 if (U(bl)) {
			 return this.textBaseline
		 }
		 this.textBaseline = bl
		 return this
	 }
	 tx.lH = tx.lineH = function (lH) {
		 if (U(lH)) {
			 return this.lineHeight
		 }//o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
		 this.lineHeight = lH
		 return this
	 }
	 tx.lW = tx.lineW = function (lW) {
		 if (U(lW)) {
			 return this.lineWidth
		 }
		 this.lineWidth = lW
		 return this
	 }
	 tx.lWH = function (w, h) {
		 if (U(h)) {
			 h = w
		 }
		 return this.lW(w).lH(h)
	 }
	 cj.chalk = function (text, color) {
		 color = oO('c', color || 'white')
		 if (O(text)) {
			 text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		 }
		 return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	 }
	 cj.niceText = function (text, x, y) {
		 var t = cjs.text(text, 'yellow', '40px Arial')
		 if (N(x)) {
			 t.XY(x, y)
		 }
		 return t.drag()
	 }
	 ct.Tx = ct.T = function () {
		 var ct = this, g = G(arguments), o, t
		 o = g.O ? g.f :
				 g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
						 N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
								 _.x({t: g.f, f: g.s, c: g.t},
										 N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
										 {y: g[3]})
		 o.f = N(o.f) ? o.f + 'px Arial' : o.f
		 o.f = o.f || '50px Arial'
		 o.c = oO('c', o.c || 'y')
		 o.x = N(o.x, 0)
		 o.y = N(o.y, 0)
		 o.t = String(o.t)
		 t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
		 if (g.n) {
			 t.regX = t.W() / 2
		 }
		 t.bl('middle')
		 if (g.p) {
			 t.bl('alphabetic')
		 }
		 if (!g.n) {
			 t.rX(t.mW() / 2)
		 }
		 return t
		 //o.x = N(o.x, this.St().cen().x)
		 /* if(g.p){
		  tO = cjs.T(g.f, 'y', '40px Arial')
		  if(N(g[3])){ tO.XY(g[3], g[4]) }
		  return tO
		  }*/
		 old = function () {
			 ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				 var ct = this, o, cX
				 st = this.getStage()
				 cX = st.cen().x
				 o = (N(x) && U(y)) ? {y: x, x: cX} :
						 U(x) ? {x: cX, y: 100} :
						 {t: t, f: f, c: c, x: x, y: y}
				 var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				 ct.A(t)
				 return t
			 }
		 }
		 ct.T = ct.Tx = function () {
			 var ct = this, g = G(arguments), o, t
			 o = g.O ? g.f :
					 g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
							 N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
									 _.x({t: g.f, f: g.s, c: g.t},
											 N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
											 {y: g[3]})
			 t = $T(String(o.t), (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', oO('c', o.c || 'y'))
			 if (g.n) {
				 t.regX = t.W() / 2
			 }
			 return g.p ? t.XY(N(o.x, 0), N(o.y, 0)).a2(ct).dg().bl('alphabetic') : !g.n ? t.rX(t.mW() / 2) : t.bl('middle')
		 }
//o.x = N(o.x, this.St().cen().x)
		 /* if(g.p){
		  tO = cjs.T(g.f, 'y', '40px Arial')
		  if(N(g[3])){ tO.XY(g[3], g[4]) }
		  return tO
		  }*/
//o.x = N(o.x, this.St().cen().x)
		 /* if(g.p){
		  tO = cjs.T(g.f, 'y', '40px Arial')
		  if(N(g[3])){ tO.XY(g[3], g[4]) }
		  return tO
		  }*/
		 old = function () {
			 ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
				 var ct = this, o, cX
				 st = this.getStage()
				 cX = st.cen().x
				 o = (N(x) && U(y)) ? {y: x, x: cX} :
						 U(x) ? {x: cX, y: 100} :
						 {t: t, f: f, c: c, x: x, y: y}
				 var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
				 ct.A(t)
				 return t
			 }
		 }
	 }
	 ct.chalk = function () {
		 var ht = 50, g = G(arguments), ct = this, tx
		 _.e(g, function (t) {
			 tx = cjs.chalk(t).Y(ht).X(50 - ct.X())
			 ht += 40
			 ct.A(tx)
		 })
		 ct.chalk1 = function () {
			 var ct = this, g = G(arguments), h = 0
			 g.e(function (t) {
				 ct.T(t, 26, 'w', 475, h += 35)
			 })
			 return ct
		 }
		 return tx
	 }
	 ct.text = function (text, font, color, x, y) {
		 var centX = this.stg().center().x
		 //this.A(_$Tx(text, font, color).XY(x, y))
		 if (N(x) && U(y)) {
			 y = x;
			 x = centX
		 }
		 else if (U(x)) {
			 x = centX;
			 y = 100
		 }
		 this.A(cjs.text(text, font, color).XY(x, y))
		 return text
	 }
	 ct.pen = function self(arg) {
		 var ct = this
		 if (O(self.text)) {
			 self.text.rm()
		 }
		 self.text = cjs.chalk(arg).Y(50).X(50 - ct.X())
		 ct.A(self.text)
		 return self.text
	 }
	 dO.al = dO.opacity = function (al) {
		 var dO = this
		 if (U(al)) {
			 return dO.alpha
		 }
		 dO.alpha = al;
		 return dO
	 }
	 dO.shad = function (color, x, y, blur) {
		 cjs.shad = function (color, x, y, blur) {
			 alert('cjs.shad')
			 if (color == '-') {
				 return new cjs.Shadow(null, 0, 0, 0)
			 }
			 color = S(color) ? color : 'a'
			 blur = N(blur) ? blur : 10
			 x = N(x) ? x : 0
			 y = N(y) ? y : 0
			 var shad = new cjs.Shadow(oO('c', color), x, y, blur)
			 return shad
		 }// = cjs.shadow
		 var shadow = cjs.shad(color, x, y, blur)
		 this.shadow = shadow
		 return this
	 }
	 //
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.map(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.m(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lG = h.linGrad = function () {
		 var args = _.toArray(arguments)
		 args[0] = _.map(args[0], function (col) {
			 return oO('c', col)
		 })
		 this.graphics.beginLinearGradientFill.apply(
				 this.graphics, args)
		 return this
	 }
	 h.lf = function () {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 o = cjs.lg(g)
		 gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.ls = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.lg.apply(h, g)
		 gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		 return h
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		 var args = _.toArray(arguments), circs, len
		 cols = _.map(cols,
				 function (col) {
					 return oO('c', col)
				 })
		 circs = _.rest([1, 2, 3, 4, 5], 2)
		 len = circs.len  //use switch!
		 x1 = 0;
		 y1 = 0;
		 r1 = 0;
		 x2 = 0;
		 y2 = 0;
		 r2 = 50
		 if (len == 1) {
			 r2 = circs[0]
		 }
		 else if (len == 2) {
			 r1 = circs[0];
			 r2 = circs[1]
		 }
		 else if (len == 3) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r2 = circs[2]
		 }
		 else if (len == 4) {
			 x1 = x2 = circs[0]
			 y1 = y1 = circs[1]
			 r1 = circs[2]
			 r2 = circs[3]
		 }
		 else if (len == 5) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r2 = circs[4]
		 }
		 else if (len == 6) {
			 x1 = circs[0];
			 y1 = circs[1];
			 x2 = circs[2];
			 y2 = circs[3]
			 r1 = circs[4];
			 r2 = circs[5]
		 }
		 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		 return this
	 }
	 h.rg = function (o) {
		 var h = this, g = G(arguments),
				 gx = h.graphics,
				 o
		 if (A(g[0]) && A(g[1])) {
			 gx.rf(
					 [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			 )
			 return h
		 }
		 o = O(g[0]) ? g[0] :
				 S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						 N(g[7]) ?
						 {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								 : N(g[5]) ?
						 {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								 : N(g[4]) ?
						 {x2: g[2], r1: g[3], r2: g[4]}
								 : N(g[3]) ?
						 {r1: g[2], r2: g[3]}
								 :
						 {r2: g[2]})
						 : S(g[0]) ?
				 {c2: g[0]}
						 : {}
		 $df.grad(o)
		 o.x2 = N(o.x2, o.x1)
		 o.y2 = N(o.y2, o.y1)
		 o.r1 = N(o.r1, 1);
		 o.r2 = N(o.r2, 100)
		 return o
	 }
	 h.rf = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rf(
				 [o.c1, o.c2],
				 [o.s1, o.s2],
				 o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 h.rs = function me() {
		 var h = this, gx = h.graphics, g = G(arguments), o
		 if (A(g[0])) {
			 return me.apply(h, g[0])
		 }
		 o = h.rg.apply(h, g)
		 gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		 return h
	 }
	 tx.Tx = tx.tx = tx.T = function (text) {
		 if (U(text)) {
			 return this.text
		 }
		 this.text = text
		 return this
	 }}
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