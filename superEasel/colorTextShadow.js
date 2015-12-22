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
function _apps(){
	TXSH = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	TWOSTAGES = function () {
		$.hdr().K("EaselJS").A(
				$.h1('nextStage'),
				$.p("This is an example")).A()
		c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
				.right(0).bor('1px solid grey').A() // background: 'none',
		c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		topStage = stageSetup("canvasTwo", handleEvt)
				.N("topStage").eMO()
				.A(makeSquare(375, 30, "pink", handleEvt))
				.next(bottomStage)
		topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		function stageSetup(canvasName, handler) {
			s = stage = new cjs.Stage(canvasName).tick()
			//stage.addEventListener("stagemousemove", handler);	// too noisy
			_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
				s.on(ev, handler)
			})
			s.log = []
			return s
		}
		
		function makeSquare(x, y, color, handler) {
			var shape = cjs.shape().N('square').XY(x, y)
			shape.graphics.f(color).dr(0, 0, 135, 135)
			var cont = cjs.ct().N('container').A(shape)
			_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				cont.on(ev, handler)
			})
			cont.cursor = "pointer"
			return cont
		}
		
		function handleEvt(evt) {
			var target = evt.target,
					stage = target.getStage(),
					log = stage.log
			log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
			+ " y:" + evt.stageY.toFixed(0))
			while (log.length > 12) {
				log.shift()
			}
			stage.text.text = log.join("\n")
			if (evt.type == "mouseover") {
				target.alpha = 0.5
			}
			if (evt.type == "mouseout") {
				target.alpha = 1
			}
		}
	}
	MTLT = function () {
		St()
		h.graphics.C('r', 'b')
		h.dg()
		h.lt(100, 100)
		h.lt(150, 190)
		h.lt(300, 300)
		h.lt(350, 1390)
		if (R()) {
			h.cp()
		}
		h.mt(240, 210)
		h.lt(450, 410)
		h.lt(600, 500)
		h.lt(500, 500)
		h.cp()
	}
	GROW = function () {
		z()
		$St(500, 500).bm('me', function (bm) {
			b = bm
			bm.grow().dg()
		})
	}//F}}
//function ui() {
	STF = SETTRANSFORM = function () {
		s = cjs.stage(800).A()
		s.bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
	}
	STGG = function () {
		$.c('y', 300, 100).id('someId')
		$St('someId').bm('me')
		$St($.c('o', 400, 200)).bm('me')
		$St('z', 500, 300).bm('me').GX()._dc()
		$St(1000, 500)
				.bm('me', function (bm) {
					bm.spin().drag()
				})
				.bm('me', function (bm) {
					bm.sXY(0.5, 0.3).spin().drag()
				})
				.Sh().XY(200).graphics.FS()._dc(4)
		_.t(10, function () {
			$St($r(), 200, 200).bm('me', function (me) {
				me.drag()
			})
		})
	}
	INST = INSTAGE = function () {
		$St().bm('me', function (me) {
			me.grow()
			$t(function () {
				me.x = me.x + 10;
				$l(me.inStage())
			})
		})
	}
	TX1 = BAS = BASELINE = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
			s.dot(300, 300)
		})
		s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
	}
	TX2 = LINEH = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(
				t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
		)
		s.A(
				t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
		)
		s.A(
				t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
		)
	}
	TX3 = LINEW = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
		s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
	}
	TX4 = ALIGN = function () {
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.bm('me', function (bm) {
			b = bm
			bm.XY(500).sXY(.2)
		})
		//textAlign
		s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
		s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
		s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
		//textBaseline
		s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
	}
	GR0 = GRD = TESTGRADWORKS = function () {
		z()
		c = $.c('y', 500).A()
		g = c.context.createLinearGradient(50, 0, 500, 100)
		g.addColorStop(.2, 'orange')
		g.addColorStop(.6, 'red')
		g.addColorStop(.8, 'green')
		c.context.fillStyle = g
		c.fillRect()
	}
	GR3 = GRADTX = function () {
		__C();
		x = c.ctx()
		x.lg(
				{
					cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
					x1: 50, x2: 500, y2: 100
				}).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
		//black to white
		// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
	}
	GR2 = TXG = TESTGRAD = function () {
		__C();
		x = c.ctx()
		x.lg(
				{
					cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
					x1: 50, x2: 500, y2: 100
				}
		).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
		//black to white
		// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
	}
	GR1 = LR2 = LINRAD2 = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG1 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG2 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	CIRCRG8 = GRADS = function () {
		s = St()
		nip = function () {
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			var h = $h(10, 10).a2(s).drag().al(.8)
			h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
					x1, y1, r1, x2, y2, r2)
					.dc(0, 0, 100)
					.endFill()
			return h
		}
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		h2 = $h(500, 100).a2(s);
		h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
		////////
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
	}//C
	REC8 = GRADS1 = function () {
		s = $St()
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
		///////////////
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
		h = s.h(480, 270).drag()
		h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
		s.h(180, 270).drag()
				.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
				{w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
	}//B+
	OVALS8 = GRADS2 = SETTRANSFORM = function () {
		s = $St(800).bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
		//////
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({
			C: 'b',
			lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
		}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
				.de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	}//B+
///////////
	LR0 = LINRAD = function () {
		__C()
		x = c.ctx()
		x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
		x.fr(0, 0, 100, 100)
	}
	LR1 = LINRAD1 = function () {
		__C()
		x = c.ctx()
		x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
		x.fr(0, 0, 100, 100)
	}
	RG1221 = RADGRAD = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG121 = RADGRAD = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	MICK = function () {
		St()
		ct.mick = function (x, y, lf) {
			var ct = this,
					h = ct.h(x, y).drag()
							.c({l: 20, C: 0, lf: lf || 1})
							.dc([50], [200, 0, 100], [100, 100, 100])
			ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
			return h
		}
		s.mick(500, 200)
		s.mick(700, 100, {c1: 'b', c2: 'X'})
		s.mick(700, 300, {c2: 'b'})
		s.mick(100, 100, {y2: 10})
		s.mick(100, 200, {y2: 200})
		s.mick(100, 300, {x2: 100})
	}
	function more() {
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
	}
	function horrible() {
		RG11 = RADIALGRAD1 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			stage.addChild(shape)
			shape.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.update()
		}
		RG141 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG151 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
		RG161 = RADIALGRADFILL2 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			stage.addChild(
					h = new createjs.Shape()
			)
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			).drawCircle(100, 100, 50)
			stage.update()
		}
		RG711 = RADIALGRAD1 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			stage.addChild(shape)
			shape.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.update()
		}
		RG11 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG171 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
		RG161 = RADIALGRADFILL2 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			stage.addChild(
					h = new createjs.Shape()
			)
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			).drawCircle(100, 100, 50)
			stage.update()
		}
		RG1441 = RADIALGRADRECT = function () {
			s = cjs.S()
			x1 = 100
			y1 = 150
			r1 = 20
			x2 = 100
			y2 = 150
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
						x1,
						y1,
						r1,
						x2,
						y2,
						r2
				)
						.dr(0, 0, 400, 400)
						.endFill()
				// x--
				r1++
				r2++
			}
			setInterval(change, 1000)
			change()
		}
		RG113 = RADIALGRADCIRC = function () {
			s = cjs.S()
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
						x1,
						y1,
						r1,
						x2,
						y2,
						r2
				)
						.dc(0, 0, 100)
						.endFill()
				// x--
				// r1++
				// r2++
			}
			setInterval(change, 1000)
			change()
			n = nip()
			//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
		}
		RG11 = RADIALGRADCIRC = function () {
			s = $St()
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.rf('b', "o", x1,
						y1,
						r1,
						x2,
						y2,
						r2)
						.dc(0, 0, 100)
						.ef()
				// x--
				// r1++
				// r2++
			}
			setInterval(change, 1000)
			change()
			n = nip()
			//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
		}
		RG13 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG14 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
			// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
			// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
	}
	DRAGST = GRADOVALS = function () {
		z()
		s = $.dragStage()
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	}//B
}