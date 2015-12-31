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
tx.oL = tx.outL = tx.ol =function (outline) {
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
 