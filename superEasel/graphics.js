$L('color', 'lines','bitmap')
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
$Gx = function (a) {
	return new cjs.Gx(a).FS()
}
h.clr = h.z = h.clear = function () {
	this.graphics.clear();
	return this
}
function lines(){
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
}
function bitmap() {
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	gx._bf = function (i, tf) {
		return this.bf(i, null, tf)
	}
	gx._bs = function (i, tf) {
		return this.bs(i, null, tf)
	}
	h.bf = function () {//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		else {
			_bf(S(o.i) ? Q.i(o.i) : o.i, o)
		}
		return h
		function _bf(i, o) {
			h._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
		
		function alt() {
			h._bf = function () {
				var h = this, gx = h.graphics, g = G(arguments)
				var tf = A(g.s) ? cjs.m2d.apply(cjs, g.s) : g.s
				tf = tf || cjs.m2d(R(500), R(300))
				S(g.f) ? gx.bf(Q.i(g.f), null, tf) :
						O(g.f) ? gx.bf(g.f, null, tf) : 0
				return h
				function alt() {
					h._bf = function (i, tf) {
						var h = this, gx = h.graphics, g = G(arguments)
						gx._bf(i, tf)
						return h
					}
				}
			}
			h.bf1 = function () {
				var h = this, gx = h.graphics, g = G(arguments), o
				o = O(g.f) && A(g.f.hs) ? g.f :
						F(g.s) ? {i: g.f, fn: g.s} :
						{i: g.f, mx: g.s, fn: g.t}
				o.i = o.i || 'me'
				if (S(o.i) && !Q.ran) {
					$.i(o.i, function (i) {
						_bf(i, o.mx, o.fn)
						if (o.hs) {
							_.e(o.hs, o.fn)
						}
					})
				}
				if (S(o.i)) {
					o.i = Q.i(o.i)
				}
				_bf(o.i, o.mx, o.fn)
				return h
				function _bf(i, mx, fn, hs) {
					var g = G(arguments),
							o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
									F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
									{i: g.f, mx: g.s, hs: g.t}
					o.i = S(o.i) ? Q.i(o.i) : o.i
					o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
					o.fn = _.tFn(o.fn)
					h._bf(i, o.mx)
					o.hs ? _.e(o.hs, function (shp) {
						o.fn(shp, h)
					}) :
							o.fn(h)
				}
			}
			h.bf = function () {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (O(g.f) && A(g.f.hs)) {
					o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
				}
				else {
					o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
				}
				o.i = o.i || 'me'
				if (!Q.ran) {
					if (o.hs) {
						$.i(o.i, function (i) {
							_bf(i, o.mx);
							if (o.fn) {
								_.e(o.hs, o.fn)
							}
						})
					}
					else if (S(o.i)) {
						$.i(o.i, function (i) {
							_bf(i, o.mx, o.fn)
						})
					}
				}
				else if (S(o.i)) {
					_bf(Q.i(o.i), o.mx, o.fn)
				}
				else {
					_bf(o.i, o.mx)
				}
				return h
				function _bf(i, mx, fn, hs) {
					var g = G(arguments),
							o = {
								i: g.f,
								mx: A(g.s) ? $Mx(g.s) : g.s,
								fn: _.tFn(g.t),
								hs: g[3]
							}
					h._bf(i, o.mx)
					o.hs ? _.e(o.hs, function (shp) {
						o.fn(shp, h)
					}) : o.fn(h)
				}
			}
			h.bf = function () {
				var h = this, gx = h.graphics, g = G(arguments);
				if (!F(Q)) {
					return h._bf.apply(h, g)
				}
				function fn(fn) {
					return function (i) {
						gx.bf(i[0])
						if (F(g.s)) {
							fn(g)
						}
					}
				}
				
				var fn1 = fn(function () {
					g.s(h)
				})
				var fn2 = fn(function () {
					_.e(g.f.hs, g.s)
				})
				g.S_ ? $.i(g.f, fn1) :
						g.O_ && A(g.f.hs) ?
							//if object with an 'hs' property
								$.i(g.f.i || 'me', fn2) :
								gx.bf(g.f, null, g.s)
				return h
			}
		}
	}
	h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	h._bC = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			h.dc(h1)
		})
		return h
	}
	h.bC = h.bmCir = function (o) {
		var h = this
		o = o || {}
		o.i = o.i || 'me'
		o.circs = o.circs || []
		o.cs = o.cs || []
		o.hs = o.hs || []
		$.i(o.i, function (i) {
			_.e(o.circs, function (c) {
				h.bf(i).dc(c)//.ef()
			})
		})
		return h
	}
	h.bR = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			if (o.hs) {
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			else {
				h.rec(o.hs)
			}
		})
		return h
		function alt() {
			h.bR = function (o) {
				var h = this;
				if (F(Q)) {
					h.bf(o, function (h1) {
						h.rec(h1)
					})
				}
				else {
					alert('h.bR not preloaded?')
					h.bf(o.bf)
					h.rec(o.hs)
					_.e(o.hs, function (r) {
						w.rec(r.w, r.h)
					})
				}
				return h
				//= h.bfR = h.bmR
			}
		}
	}
	h.bP = h.bV = function (o) {
		var h = this, g = G(arguments), o
		h._bV = function (i, vs) {
			i = i || 'me'
			return this.bf(i).lt(vs).cp()
		}
		h._bVAsy = function (i, v) {
			var h = this
			i = i || 'me'
			$.i(i, function (i) {
				h._bV(i, v)
			})
			return h
		}
		o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
		if (Q.ran) {
			h._bV(o.i, o.v)
		}
		else {
			h._bVAsy(o.i, o.v)
		}
		return h
		function alt() {
			h.bV = function (o) {
				var h = this, g = G(arguments), o
				o = g.A ? {hs: g.f} : g.f || {}
				o.hs = o.hs || []
				o.i = o.i || 'me'
				if (F(Q)) {
					$.i(o.i, function (i) {
						h.bf(i[0])
						_.e(o.v, function (v) {
							h.lt(v)
						})//
						h.cp()
						h.ef()
					})
					return h
				}
				h.bf(o.i)
				_.e(o.v, function (v) {
					h.lt(v)
				})
				return h
			}
			function old() {
				h.bmV = function (o) {
					var h = this
					o = o || {}
					o.i = o.i || 'me'
					$.img(o.i, function (i) {
						i = i[0]
						_.e(o.v, function (v) {
							h.bf(i)
							h.lt(v)
							h.ef().cp()
						})
					})
					return h
				}
			}
		}
	}
	h._bfT = function (i) {
		var g = G(arguments)
		return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
	}
	h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			_.tFn(o.fn)(
					h._bf(g.f, $tMx(_.tA(o.tf))))
		})
		return h
	}
}
function color() {
	gx._f = function (col) {
		return this.f(oO('c', col))
	}
	gx._s = function (col, thickness) {
		// = gx.col = gx.sC
		var gx = this
		gx.s(oO('c', col))
		if (N(thickness)) {
			gx.SS(thickness)
		}
		return gx
	}
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
	h.f = function (fil, str) {
		var h = this, gx = h.graphics
		gx._f(fil)
		if (S(str)) {
			gx._s(str)
		}
		return h
	}
	h.s = h.C = h.sC = function (str, l) {
		var h = this, gx = h.graphics
		if (N(l)) {
			h.l(l)
		}
		gx._s(str)
		return h
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
h.same = h.copy = function () {return $h(this)} // cjs.shape(this)
