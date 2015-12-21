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
cjs.HSL = function (a, b, c) {
	return U(a) ?
			HSL(M.r() * 360, 100, 50) :
			cjs.Graphics.getHSL(a, b, c)
}
cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
gx._f = function (col) {
	return this.f(oO('c', col))
}
gx._s = function (col) {
	return this.s(oO('c', col))
}
gx._ss = function (thickness, caps, joints, miterLm, ignoreScale) {
	var gx = this//=0//=0//=10//=false
	gx.setStrokeStyle(thickness, caps, joints, miterLm, ignoreScale)
	return gx
}
gx.C = gx.fC = gx.cCL = gx.fs = function (f, s, w) {
	return this._f(f || 'z')._s(s)._ss(N(w, 2))
}
gx.col = gx.sC = function (sCol, thickness) {
	return this._s(sCol).SS(thickness)
}