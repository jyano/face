cj.iT = function (t) {
	if (O(t)) {
		return (t.textBaseline)
	}
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
tx.Tx = tx.tx = tx.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
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
_$Tx = function (a, b, c, d, e, f) {
	return new cj.Tx(a, b, c, d, e, f)
	cjs.text = function (text, color, font, x, y) {
		//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		return _$Tx(text,
				N(font || '20px Arial') ? font + 'px Arial' : font
				, oO('c', color || 'z')).XY(N(x, 100), N(y, 100))
	}
	cjs.T = cjs.Tx = function (text, font, color, x, y) {//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		if (N(font)) {
			font = font + 'px Arial'
		}
		textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
		textOb.regX = textOb.W() / 2
		return textOb.XY(N(x, 100), N(y, 100))
	}
	cjs.T = cjs.Tx = function (text, font, color, x, y) {
		//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
		if (N(font)) {
			font = font + 'px Arial'
		}
		textOb = _$Tx(text, font || '50px Arial', oO('c', color || 'y'))
		textOb.regX = textOb.W() / 2
		return textOb.XY(N(x, 100), N(y, 100))
	}
	$Tx1 = function (a, f, c, x, y) {
		var t
		if (N(f)) {
			f = String(f) + "px Arial"
		}
		if (S(c)) {
			c = oO('c', c)
		}
		t = _$Tx(a, f, c)
		if (O(x)) {
			if (F(x.cen)) {
				x = x.cen()
			}
			y = x.y
			x = x.x
		}
		if (N(x)) {
			t.X(x)
		}
		if (N(y)) {
			t.Y(y)
		}
		return t
	}
	$T1 = function (a, f, c, x, y) {
		var t
		if (N(f)) {
			f = String(f) + "px Arial"
		}
		if (S(c)) {
			c = oO('c', c)
		}
		t = _$Tx(a, f, c)
		if (O(x)) {
			if (F(x.cen)) {
				x = x.cen()
			}
			y = x.y
			x = x.x
		}
		if (N(x)) {
			t.X(x)
		}
		if (N(y)) {
			t.Y(y)
		}
		return t
	}
}
$Tx = $T = function (a, b, c, d, e) {
	var g = G(arguments), o, t, tx
	o = g.O ? g.f : {t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
	tx = _$Tx(o.t, (N(o.f) ? o.f + 'px Arial' : o.f) || '50px Arial', o.c || 'y').XY(N(o.x, 600), N(o.y, 100)).dg()
	if (g.n) {
		t.regX = t.W() / 2
	}
	if (g.p) {
		tx.bl('alphabetic')
	}
	return tx.bl('middle')
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