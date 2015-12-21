$L('color', 'cirs', 'recs', 'path', 'mtLt' )
 
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							{c: g.f, C: g.s, l: g.t}
	h.c(o)
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
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C)
	if (c) {
		h.c(c)
	}
	_.each(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.bmCir = function (o) {
	var h = this
	o = o || {}
	o.i = o.i || 'me'
	o.circs = o.circs || []
	$.img(o.i, function (i) {
		i = i[0]
		_.each(o.circs, function (c) {
			h.bf(i)
			h.dc(c)
			h.ef()
		})
	})
	return h
}
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
h.dr2 = function (x, y, W, H) {
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
	o.h = N(o.h, o.w)
	h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
	return h
}
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
	o.p = cjs.cap(o.p, 0, .99)
	gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
	return h
}
h._dc = function (o) {
	var h = this, gx = h.graphics, g = G(arguments)
	gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
	return h
}
h.cirs = function (g) {
	var h = this
	g.e(function (c) {
		h.dc(c)
	});
	return this
}
h.bC = function (o) {
	var h = this;
	return h.bf(o, function (h1) {
		h.dc(h1)
	})
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.dc = function (x, y, r) {
	var h = this, gx = h.graphics, g = G(arguments), o
	h.cp()
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f : g.$ ? {r: g.f} : {x: g.f, y: g.s, r: g.t}
	return h._dc(o)
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
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}
h.cp = function () {
	this.graphics.cp();
	return this
}
h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
h.ef = function () {
	var h = this, gx = h.graphics
	gx.f()
	return h
}
h.dr = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, 100);
	o.h = N(o.h, o.w)
	gx.dr(o.x, o.y, o.w, o.h)
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
h._bf = function () {
	$l('h._bf')
	var h = this, gx = h.graphics, g = G(arguments),
			tf
	if (A(g.s)) {
		g.s = cjs.m2d.apply(cjs, g.s)
	}
	tf = g.s || cjs.m2d(R(500), R(300))
	if (S(g.f)) {
		$l('h._bf: str')
		gx.bf(Q.i(g.f), null, tf)
	}
	else if (O(g.f)) {
		$l('h._bf: obj')
		gx.bf(g.f, null, tf)
	}
	else {
		$l('h._bf: ?')
	}
	return h
}
h.bf = function () {
	$l('h.bf')
	var h = this,
			gx = h.graphics, g = G(arguments), img, tf
	if (!F(Q)) {
		$l('h.bf: !F(Q)')
		///// $l('!F(Q)') !!! only this gets logged
		return this._bf.apply(this, g)
	}
	else {
		if (g.S_) {
			$l('yes F(Q)')
			$.i(g.f, function (i) {
				gx.bf(i[0])
				if (F(g.s)) {
					g.s(h)
				}
			})
		}
		
		//if object with an 'hs' property
		else if (g.O_ && A(g.f.hs)) {
			$l('g.O_ && A(g.f.hs)')
			img = g.f.i || 'me'
			$.i(img, function (i) {
				gx.bf(i[0])
				if (F(g.s)) {
					_.e(g.f.hs, g.s)
				}
			})
		}
		else {
			$l('..else')
			gx.bf(g.f, null, g.s)
		}
		return h //h.ef()
	}
}  // BITMAP FILL  !!!!!!
//bitmap fill rec
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
function color() {
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
function cirs() {
	cjs.circ = cjs.circle = function (rad, fCol, sCol) {
		if (!N(rad)) {
			return cjs.circ(8, rad)
		}
		fc = oO('c', fc || 'z')
		var h
		h = $Sh()
		h.f(fc)
		h.circle(0, 0, rad)
		return h
	}
	cjs.cir0 = cjs.circle3 = function (x, y, rad, fCol, sCol) {
		var h = $Sh().X(x || 0).Y(y || 0)
		if (O(x)) {
			return cir0(x.x, x.y, x.r, x.fc, x.sc)
		}
		x = x || 0
		y = y || 0
		r = r || 8
		fc = fc || 'w'
		sc = sc || 'z'
		if (fCol) {
			h.f(fCol)
		}
		if (sCol) {
			h.s(sCol)
		}
		h.circle(x, y, r, fc, sc)
		SL(h)
		return h
	}
	cjs.rim = cjs.circle2 = function (rad, lineWid, x, y) {
		var z = lineWid
		var gx = $Gx()
		if (!S(r)) {
			return circle2('red', rad, z, x)
		}
		z = N(z) ? z : 32
		x = N(x) ? x : 100
		y = N(y) ? y : 100
		gx.ss(z / 8)
		gx.f(r, 'black')
		gx.dc(0, 0, z)
		return $Sh(gx).XY(x || 0, y || 0)
	}
	cjs.cir = function () {
		var g = G(arguments)
		var o = cjs.cir.g(g)
		var h = $Sh()
		o.r = N(o.r, 50)
		o.c = o.c || 'w'
		o.C = o.C || 'z'
		o.l = N(o.l, 4)
		h.dc(o.r, o.c, o.C, o.l)
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		if (N(o.x)) {
			h.regX = -o.x
		}
		if (N(o.y)) {
			h.regY = -o.y
		}
		h.alpha = N(o.al, 1)
		return h
	}
	cjs.cir.g = function (g) {
		var o = g.O ? g.f :
				N(g.f) && N(g.s) && N(g.t) ?
				{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
						N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
								N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
								{c: g.f, C: g.s, l: g.t}
		return o
	}
	h._dc = function () {
		var h = this
		h.graphics.dc.apply(h.graphics, arguments)
		return this
	}
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		gx.dc(o.x, o.y, o.r)
		return h
	}
	h.cir = function () {
		var h = this, gx = h.graphics,
				g = G(arguments), o
		if (g.A) {
			return $a(h, 'cir', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f : N(g.t) ?
		{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
		{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
				g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
				{c: g.f, C: g.s, l: g.t}
		//h.c(o)
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
	} // h.circ h.circle = h.cir2 = h.cir = 
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
	h._dc = function () {
		var h = this
		h.graphics.dc.apply(h.graphics, arguments)
		return this
	}
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		gx.dc(o.x, o.y, o.r)
		return h
	}
	h.cir = function () {
		var h = this, gx = h.graphics,
				g = G(arguments), o
		if (g.A) {
			return $a(h, 'cir', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f : N(g.t) ?
		{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
		{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
				g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
				{c: g.f, C: g.s, l: g.t}
		//h.c(o)
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
	} // h.circ h.circle = h.cir2 = h.cir = 
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
}
function recs() {
	$Rec = function (a, b, c, d) {
		return new cjs.Rectangle(a, b, c, d)
	}
	h._dr = function () {
		this.graphics.dr.apply(
				this.graphics, arguments)
		return this
	}
	h.dr = function () {
		var h = this, gx = h.graphics, g = G(arguments),
				o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
		o.x = N(o.x, 0);
		o.y = N(o.y, 0);
		o.w = N(o.w, 100);
		o.h = N(o.h, o.w)
		gx.dr(o.x, o.y, o.w, o.h)
		return h
	}
	h.dr2 = function (x, y, W, H) {
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
		o.h = N(o.h, o.w)
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
		var gx = this.graphics
		if (fc) {
			gx.f(fc)
		}
		if (sc) {
			gx.s(fc)
		}
		gx.dr(x, y, w, h)
		return this
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
	h._dr = function () {
		this.graphics.dr.apply(
				this.graphics, arguments)
		return this
	}
	h.dr = function () {
		var h = this, gx = h.graphics, g = G(arguments),
				o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
		o.x = N(o.x, 0);
		o.y = N(o.y, 0);
		o.w = N(o.w, 100);
		o.h = N(o.h, o.w)
		gx.dr(o.x, o.y, o.w, o.h)
		return h
	}
	h.dr2 = function (x, y, W, H) {
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
		o.h = N(o.h, o.w)
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
		var gx = this.graphics
		if (fc) {
			gx.f(fc)
		}
		if (sc) {
			gx.s(fc)
		}
		gx.dr(x, y, w, h)
		return this
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
	cjs.rect2 = function self(width, height, x, y, fc, sc) {
		width = width || 100
		height = height || width
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new createjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth + x, -halfheight + y)
				.lt(-halfwidth + x, halfheight + y)
				.lt(halfwidth + x, halfheight + y)
				.lt(halfwidth + x, -halfheight + y)
				.lt(-halfwidth + x, -halfheight + y)
		return h
	}
	cjs.rect = function self(width, height, fc, sc) {
		width = width || 100
		height = height || width
		fc = fc || 'green'
		sc = sc || 'white'
		halfwidth = width / 2
		halfheight = height / 2
		var h = new cjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(-halfwidth, -halfheight)
				.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
				.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
		return h
	}
}
function path() {
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
}
function mtLt() {
	h._lt = function (x, y) {
		var v = V(x, y)
		this.graphics.lt(v.x, v.y)
		return this
	}
	h.lt = h._lt = function (x, y) {
		var h = this, gx = h.graphics, g = G(arguments)
		//A(a) && O(a[0])
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
			return h
		}
		O(g.s) ?
				g.e(function (pt) {
					h.lt(pt)
				}) :
				gx.lt(V(x, y).x, V(x, y).y)
		return h
	}
	h.lt = function (x, y) {
		var h = this, g = G(arguments)
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
	h._mt = function (x, y) {
		var g = G(arguments)
		var pt = V(g.f, g.s)
		this.graphics.mt(pt.x, pt.y)
		return this
	}
	h._mt = function (x, y) {
		var v = V(x, y)
		this.graphics.mt(v.x, v.y)
		return this
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.dl = h.ln = h.line = function () {
		var h = this, g = G(arguments), o
		o = g.N_ ?
		{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
		{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
		this.mt(o.x1, o.y1).lt(o.x2, o.y2)
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
	h.lt = h._lt = function (x, y) {
		var h = this, gx = h.graphics, g = G(arguments)
		//A(a) && O(a[0])
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
			return h
		}
		O(g.s) ?
				g.e(function (pt) {
					h.lt(pt)
				}) :
				gx.lt(V(x, y).x, V(x, y).y)
		return h
	}
	h.lt = function (x, y) {
		var h = this, g = G(arguments)
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
	h._mt = function (x, y) {
		var g = G(arguments)
		var pt = V(g.f, g.s)
		this.graphics.mt(pt.x, pt.y)
		return this
	}
	h._mt = function (x, y) {
		var v = V(x, y)
		this.graphics.mt(v.x, v.y)
		return this
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.dl = h.ln = h.line = function () {
		var h = this, g = G(arguments), o
		o = g.N_ ?
		{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
		{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
		this.mt(o.x1, o.y1).lt(o.x2, o.y2)
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
}
function poly() {
	function drawSquare(ct, x, y) {
		var h = $H()
		h.a2(ct).f($r())
		h.graphics.dr(5, 5, 70, 70)
		if (x) {
			h.X(x)
		}
		if (y) {
			h.Y(y)
		}
		return h
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
	h.same = h.copy = function () {
		return $h(this) // cjs.shape(this)
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
	h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
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
	}
//below was old ! :
	h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
		var h = this,
				numVerts = poly.length
		_.each(poly, function (v) {
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
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C);
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	h.drawPolygons = function (paths, fc, sc) {
		var h = this
		h.f(fc).s(sc)
		_.each(paths, function (path) {
			h.drawPolygon(path)
		})
		return h
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
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.$vs = function (polVs, ox, oy) {// only alpha~~~~~!!!!
		if (gpc.iP(polVs)) {
			polVs = polVs.vs()
		}
		return this.vs(polVs, ox, oy)
	}
	function drawPoly() {
		h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
			var h = this,
					numVerts = poly.length
			_.each(poly, function (v) {
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
		h.drawPolygons = function (paths, C, c) {
			var h = this
			h.C(C);
			if (c) {
				h.c(c)
			}
			_.e(paths, function (p) {
				h.drawPolygon(p)
			})
			return h
		}
		h.drawPolygons = function (paths, fc, sc) {
			var h = this
			h.f(fc).s(sc)
			_.each(paths, function (path) {
				h.drawPolygon(path)
			})
			return h
		}
		h.vs1 = function () {
			var h = this, g = G(arguments), o;
			$l('h.vs')
			o = {v: g.f, ox: g.s, oy: g.t}
			o.ox = N(o.ox, 0)
			o.oy = N(o.oy, 0)
			h.mt(
					_.f(o.v)[0] + o.ox,
					_.f(o.v)[1] + o.oy
			)
			_.eR(o.v, function (v) {
				h.lt(v[0] + o.ox, v[1] + o.oy)
			})
			return h
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
		h.vs = function (vs, x, y) {
			return this.mt(M.os(vs, x, y))
			//  takes [pt,pt..] and draws it.. with optional offsets..
			//used by (but NOT  dependent on) gPoly 
		}
//alpha:
		h.$vs = function (polVs, ox, oy) {
			if (gpc.iP(polVs)) {
				polVs = polVs.vs()
			}
			return this.vs(polVs, ox, oy)
		}
		h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
			var h = this, gx = h.graphics,
					g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
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
	}
}