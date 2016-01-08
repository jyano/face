 
	dO.al = dO.opacity = function (al) {
		var dO = this
		if (U(al)) {
			return dO.alpha
		}
		dO.alpha = al;
		return dO
 
	dO.shad = function (c, x, y, blur) {
		cjs.shad = function (c, x, y, blur) {
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
		var shadow = cjs.shad(c, x, y, blur)
		this.shadow = shadow
		return this
	}
	$hsl = cjs.HSL = function (a, b, c) {
		return U(a) ? cj.HSL(M.r() * 360, 100, 50) :
				cj.Gx.getHSL(a, b, c)
	}
	$rgb = cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB}
DRAWSCIRCLESWORKS = RGB = function () {



	gx = $Gx().f(
			cjs.rgb(255, 0, 0)
	).ss(10).s('white')

	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	st = $St()
	st.A($Sh(gx).XY(300, 100))
	st.u()
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	st.A(h).u()
	
}

h.FS = function () {// = h.fs = h.col
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
	
	//note about h.c : used to be: 
	//  h.c = function (rad) {return this.dc(0, 0, rad)}
	return h
}
h.lW = h.l = function (l, b, c) {
	var h = this, gx = h.graphics;
	gx.ss(l || 1, b, c)
	return h
}

h.ss = function () {
	var h = this, gx = h.graphics,
			g = G(arguments)
	gx._ss.apply(gx, g)
	return h
}

rect()
function rect() {
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
	$Rec = function (a, b, c, d) {
		return new cjs.R(a, b, c, d)
	}
}
circ()
function circ() {
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
	
	
	$Cir = function () {var g = G(arguments),
			o = S(g.f) ?
		{c: g.f,
			x: g.s, y: g.t, r: g.fo} :

			{x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
	
	
	h.cirs = function () {
		var h = this, g = G(arguments)
		_.e(g.A ? g.f : g, function (c) {
			//h.es()
			h.s()
			h.dc(c)
		})
		return this
	}
	ct.dc = function (x, y, r, f, s, width, opt) {
		return this.shape(x, y, f, s, width, opt)
		.dc(0, 0, r)
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
				N(g.s) ? {x: g.f, y: g.s,
				 r: g.t, c: g[3]} :
				{r: g.f, c: g.s}
		h.c(o.c)
		h._dc(o.x, o.y, o.r)
		return h
	}
}
poly()
function poly() {
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
		 
		oDef = b2d.oDef = function (o) {
			o = o || {}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.a = N(o.a, 0)
			o.c = o.c || 'z'
			o.C = o.C || 'w'
			o.w = N(o.w, 50)
			o.h = N(o.h, 50)
			return o
		}
		var h = this.ef().es(),
				g = G(arguments), o; //O$ >>  O(o) && !F(o) && !A(o)
	 
		o = O$(g.f) ? g.f :
				N(g.s) && N(g.t) ?
				{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
				{v: g.f, c: g.s, C: g.t, l: g.fo}
		o.v = M.os(o.v, o.x, o.y)
		h.c(oDef(o || {}))
		!o.bf ? h.lt(o.v).cp() :
				h.bf(S(o.bf) ? o.bf : 'me', function () {
					h.mt(o.v).cp()
				})
		return h

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
}
function doAlert() {
	alert = function () {
		gx.fancyLt = gx.poly = function (vs, f, s, w) {
			alert('gx.fancyLt = gx.poly')
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
	}
	function alert() {
		$Cir = function () {
			alert('$Cir')
			var g = G(arguments), o
			o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
			return $H(o.c, o.x, o.y).dc(o.r)
		}
	}
	
	$Cir = function () {
		alert('$Cir')
		var g = G(arguments), o
		o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
		return $H(o.c, o.x, o.y).dc(o.r)
	}
}
$H$h_()
ct_h()


function $H$h_() {
 
	$H = $h = function () {
		
		var g = G(arguments),
		 h = new cjs.Shape(),
		
		
		//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
		//
		//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
	
				
				o = g.O ? g.f :
				
						g.N_ ? ( N(g.fo) ? // 'c-C-l' pattern
						
						{x: g.f, y: g.s, C: g.t, l: g.fo} :
						
						{x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} ) :
							
							
							// 'c-C-l' pattern
								N(g.s) ? {C: g.f, l: g.s} :
								{c: g.f, C: g.s, l: g.t}
		_h = h
		
		h.XY(N(o.x, 0), N(o.y, 0))
		
		h.c(o.c || 'z', o.C || 'w', o.l || 8)
	
		
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		if (g.p) {
			h.dg()
		}
		return h
	}
	cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
			if (cjs.iH(x)) {
				return $Sh(x.graphics)
			}
			var h = $Sh()
			if (N(x)) {
				h.X(x)
			}
			if (N(y)) {
				h.Y(y)
			}
			h.fs(f, s, width)
			if (opt == 'drag') {
				h.drag()
			}
			// use a switch statement here!  i love it!
			return h
		} 
 
	
 $Sh = function (gx) {		 return new cjs.Shape(gx)}
	 
 
}
function ct_h() {
	ct.h = function () {
		var ct = this,
				h = $H.apply($H, arguments)
		ct.A(h)
		return h
	}
	 
}
function df_not_defined() {
	df.h = function (o) {
		o = o || {}
		if (U(o.v)) {
			o.v = [[-100, 50], [0, -50], [100, 0]]
		}
		//o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
		o.c = o.c || 'p'
		o.x = _.tN(o.x)
		o.y = _.tN(o.y)
		o.a = _.tN(o.a)
		o.r = N(o.r, 40)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w || 100)
		o.d = N(o.d, 0.5)
		o.b = N(o.b, 0.5)
		o.f = N(o.f, 0.5)
		o.s = D(o.s) ? o.s : 0
		o.o = N(o.o, 1)
		o.q = D(q) ? o.q : true
		return o
	}
}
  
 
graphx()
function graphx() {
	$Gx = function (a) {
		return new cjs.Gx(a)
	}
	$GX = function (a) {
		return new cjs.Gx(a).FS()
	}
}
function THE___WINNERS__ARE__() {

	$Sh = $H = $h = function (x) {
		var g = G(arguments), o
		var h = new cjs.Shape(cjs.iH(x) ?
		
				x.graphics : x)
		//pass in your own obj to use 'o.i/o.bf'
		
		o = g.O ? g.f : // or 'o.lf' or 'o.rf'
				N(g.fo) ? {x: g.f, y: g.s, C: g.t, lW: g.fo} : //x,y C-l
						N(g.f) ? {x: g.f, y: g.s, c: g.t, C: g.fo, lW: g.fi} : //x,y c-C-l
								N(g.s) ? {C: g.f, lW: g.s} : // C-l
								{c: g.f, C: g.s, lW: g.t} // c-C-l
		h.XY(N(o.x, 0), N(o.y, 0))
		//h.c(o.c || 'z', o.C || 'w', o.lW || 8)
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.lW)) {
			h.l(o.lW)
		}
		if (g.p) {
			h.dg()
		}
		return h
	}
	h.c = function (c, C, l) {
		$shapeCol = function (g) {
			var o = g.O ? g.f :
					g.m ? {c: '*'} :
							g.f == '**' ? {c: '**'} :
									g.f == '***' ? {c: '***'} :
											g.u ? {c: 'z', C: 'w', l: 6} :
													N(g.s) ? {c: g.f, l: g.s} :
															g.N_ ? {l: g.f, C: g.s} :
															{c: g.f, C: g.s, l: g.t}  // 'c-C-l'
			return o
		}
		var h = this, gx = h.graphics, g = G(arguments)
		var o = $shapeCol(G)
		if (A(o.c)) {
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
				o.l = o.c[2];
			}
		}
		if (A(o.C)) {
			o.C = o.C[0];
			o.l = o.C[1]
		}
		if (o.c == 0) {
			gx.f(null);
			o.c = 'X'
		}
		if (o.C == 0) {
			gx.s(null);
			o.C = 'X'
		}
		if (o.c == 00) {
			gx.f(null);
			gx.s(null);
			o.c = 'X';
			o.C = 'X'
		}
		if (o.c == '*') {
			o.c = $r()
		}
		if (o.C == '*') {
			o.C = $r()
		}
		if (o.c == '**') {
			o.c = $r();
			o.C = $r()
		}
		if (o.c == '***') {
			o.c = $r();
			o.C = $r();
			o.l = R(20)
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
		// fGrad() {
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
		//fBmap()
		if (o.bs) {
			h.bs(o.bs)
		}
		if (o.bf) {
			h.bf(o.bf)
		}
		return h
	}
}
function colorOld() {
	h.C = h.s = h.sC = function (str, l) {
		var h = this, gx = h.graphics
		if (S(str)) {
			str = oO('c', str)
		}
		if (N(l)) {
			h.l(l)
		}//this.graphics.sC.apply(this.graphics, arguments)
		this.graphics.s(str)
		return this
	}
	h.fs = h.col = function () {
		this.graphics.fs.apply(
				this.graphics, arguments)
		return this
	}
	h.l = function (l, b, c) {
		var h = this, gx = h.graphics;
		gx.ss(l || 1, b, c)
		return h
	}
	h.ss = function (a) {
		var h = this, gx = h.graphics, g, o
		if (S(a)) {
			this.C(a);
			return this.ss.apply(this, _.rest(arguments))
		}
		g = G(arguments)
		o = {l: g[0], caps: g[1], jts: g[2], mit: g[3], ignSc: false}
		o.l = N(o.l) ? o.l : 4
		if (o.caps == 'r') {
			o.caps = 'round'
		}
		if (o.caps == 's') {
			o.caps = 'square'
		}
		if (o.caps == 'b') {
			o.caps = 'butt'
		}
		if (o.mit == 'r') {
			o.mit = 'round'
		}
		if (o.mit == 'm') {
			o.mit = 'miter'
		}
		if (o.mit == 'b') {
			o.mit = 'bevel'
		}
		o.jts = o.jts || 0
		if (U(o.mit)) {
			o.mit = 100
		}
		if (g.n) {
			o.ignSc = true
		}
		gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
		return h
	}
	h.f = function (fill) {
		if (S(fill)) {
			fill = oO('c', fill)
		}
		this.graphics.f(fill)
		return this
	}
	h.c = function (c, C, l) {
		$shapeCol = function (g) {
			var o = g.O ? g.f :
					g.m ? {c: '*'} :
							g.f == '**' ? {c: '**'} :
									g.f == '***' ? {c: '***'} :
											g.u ? {c: 'z', C: 'w', l: 6} :
													N(g.s) ? {c: g.f, l: g.s} :
															g.N_ ? {l: g.f, C: g.s} :
															{c: g.f, C: g.s, l: g.t}  // 'c-C-l'
			return o
		}
		var h = this, gx = h.graphics, g = G(arguments)
		var o = $shapeCol(G)
		if (A(o.c)) {
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
				o.l = o.c[2];
			}
		}
		if (A(o.C)) {
			o.C = o.C[0];
			o.l = o.C[1]
		}
		if (o.c == 0) {
			gx.f(null);
			o.c = 'X'
		}
		if (o.C == 0) {
			gx.s(null);
			o.C = 'X'
		}
		if (o.c == 00) {
			gx.f(null);
			gx.s(null);
			o.c = 'X';
			o.C = 'X'
		}
		if (o.c == '*') {
			o.c = $r()
		}
		if (o.C == '*') {
			o.C = $r()
		}
		if (o.c == '**') {
			o.c = $r();
			o.C = $r()
		}
		if (o.c == '***') {
			o.c = $r();
			o.C = $r();
			o.l = R(20)
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
		// fGrad() {
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
		//fBmap()
		if (o.bs) {
			h.bs(o.bs)
		}
		if (o.bf) {
			h.bf(o.bf)
		}
		return h
	}
}
function colorAgain() {
	h.C = h.s = h.sC = function (str, l) {
		var h = this, gx = h.graphics
		if (S(str)) {
			str = oO('c', str)
		}
		if (N(l)) {
			h.l(l)
		}//this.graphics.sC.apply(this.graphics, arguments)
		this.graphics.s(str)
		return this
	}
	h.fs = h.col = function () {
		this.graphics.fs.apply(
				this.graphics, arguments)
		return this
	}
	h.l = function (l, b, c) {
		var h = this, gx = h.graphics;
		gx.ss(l || 1, b, c)
		return h
	}
	h.ss = function (a) {
		var h = this, gx = h.graphics, g, o
		if (S(a)) {
			this.C(a);
			return this.ss.apply(this, _.rest(arguments))
		}
		g = G(arguments)
		o = {l: g[0], caps: g[1], jts: g[2], mit: g[3], ignSc: false}
		o.l = N(o.l) ? o.l : 4
		if (o.caps == 'r') {
			o.caps = 'round'
		}
		if (o.caps == 's') {
			o.caps = 'square'
		}
		if (o.caps == 'b') {
			o.caps = 'butt'
		}
		if (o.mit == 'r') {
			o.mit = 'round'
		}
		if (o.mit == 'm') {
			o.mit = 'miter'
		}
		if (o.mit == 'b') {
			o.mit = 'bevel'
		}
		o.jts = o.jts || 0
		if (U(o.mit)) {
			o.mit = 100
		}
		if (g.n) {
			o.ignSc = true
		}
		gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
		return h
	}
	h.f = function (fill) {
		if (S(fill)) {
			fill = oO('c', fill)
		}
		this.graphics.f(fill)
		return this
	}
 
}
ct.C = ct.backgroundColor = function (c) {
	var ct = this
	$(ct.canvas).C(c)
	return ct
}
ct.cX = function () {
	return this.St().cen().x
}
ct.cY = function () {
	return this.St().cen().y
} 