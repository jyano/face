t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
	return this.lW(w).lH(N(h, w))
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.ol = _.gS(t, 'outline')
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
	return this
}
t.mW = t.measW = t.measuredW = function () {
	return this.getMeasuredWidth()
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (f) {
	if (U(f)) {
		return this.font
	}
	this.font = N(f) ? f + 'px Arial' : f
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.tA = function (a) {
	$l('tA')
	if (U(a)) {
	}
	this.textAlign = (a)
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.bl = function (bl) {
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
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
cjs.T = cjs.Tx = function (text, font, color, x, y) {
	x = N(x) ? x : 600
	y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	if (N(font)) {
		font = font + 'px Arial'
	}
	font = font || '50px Arial'
	color = color || 'y'
	textOb = new createjs.Text(text, font, oO('c', color))
	textOb.regX = textOb.W() / 2
	textOb.XY(x, y)
	return textOb
}
cjs.text = function (text, color, font, x, y) {


//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	x = N(x) ? x : 100
	y = N(y) ? y : x
	font = font || '20px Arial'
	font = N(font) ? font + 'px Arial' : font
	color = color || 'z'
	var textOb = new createjs.Text(text, font, oO('c', color)).XY(x, y)
	return textOb
}
cjs.niceText = function (text, x, y) {
	var t = cjs.text(text, 'yellow', '40px Arial')
	if (N(x)) {
		t.XY(x, y)
	}
	return t.drag()
}
$Tx = function (a, f, c, x, y) {
	var t
	if (N(f)) {
		f = String(f) + "px Arial"
	}
	if (S(c)) {
		c = oO('c', c)
	}
	t = new cjs.Text(a, f, c)
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
$T = function (a, b, c, d, e) {
	var g = G(arguments), o, t
	return new cjs.Text(a, b, c, d, e)
	o = g.O ? g.f :
	{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
	o.f = N(o.f) ? o.f + 'px Arial' : o.f
	o.f = o.f || '50px Arial'
	o.c = o.c || 'y'
	o.x = N(o.x, 600)
	o.y = N(o.y, 100)
	t = new cjs.Text(o.t, o.f, o.c)
	t.XY(o.x, o.y).drag()
	if (g.n) {
		t.regX = t.W() / 2
	}
	if (g.p) {
		t.bl('alphabetic')
	}
	return t.bl('middle')
}
cjs.chalk = function (text, color) {
	color = oO('c', color || 'white')
	if (O(text)) {
		text = 'x: ' + text.x + ', ' + 'y: ' + text.y
	}
	return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
}
_$Tx = function (a, b, c, d, e, f) {
	return new cjs.Text(a, b, c, d, e, f)
}
cjs.iT = function (t) {
	if (O(t)) {
		return (t.textBaseline)
	}
}
$T = function (a, f, c, x, y) {
	var t
	if (N(f)) {
		f = String(f) + "px Arial"
	}
	if (S(c)) {
		c = oO('c', c)
	}
	t = new cjs.Text(a, f, c)
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
$T = function (a, b, c, d, e) {
	var g = G(arguments), o, t
	return new cjs.Text(a, b, c, d, e)
	o = g.O ? g.f :
	{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
	o.f = N(o.f) ? o.f + 'px Arial' : o.f
	o.f = o.f || '50px Arial'
	o.c = o.c || 'y'
	o.x = N(o.x, 600)
	o.y = N(o.y, 100)
	t = new cjs.Text(o.t, o.f, o.c)
	t.XY(o.x, o.y).drag()
	if (g.n) {
		t.regX = t.W() / 2
	}
	if (g.p) {
		t.bl('alphabetic')
	}
	return t.bl('middle')
}
cjs.T = cjs.Tx = function (text, font, color, x, y) {
	x = N(x) ? x : 600
	y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	if (N(font)) {
		font = font + 'px Arial'
	}
	font = font || '50px Arial'
	color = color || 'y'
	textOb = new createjs.Text(text, font, oO('c', color))
	textOb.regX = textOb.W() / 2
	textOb.XY(x, y)
	return textOb
}
cjs.niceText = function (text, x, y) {
	var t = cjs.text(text, 'yellow', '40px Arial')
	if (N(x)) {
		t.XY(x, y)
	}
	return t.drag()
}
t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
	return this.lW(w).lH(N(h, w))
}
t.tA = _.gS('textAlign')
t.bl = function (bl) {
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
t.ol = _.gS(t, 'outline')
t.mW = function () {
	return this.getMeasuredWidth()
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
ct.text = function (text, font, color, x, y) {
	var text = new cjs.Text(text, font, color).XY(x, y)
	this.A(text)
	return this
}
ct.text = function (text, font, color, x, y) {
	var text,
			centX = this.stg().center().x
	if (N(x) && U(y)) {
		y = x;
		x = centX
	}
	else if (U(x)) {
		x = centX;
		y = 100
	}
	text = cjs.text(text, font, color).XY(x, y)
	this.A(text)
	return text
}
ct.T = ct.Tx = function () {
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
}
ct.T = ct.Tx = function () {
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
}
ct.chalk = function () {
	var ct = this, g = G(arguments),
			h = 0
	g.e(function (t) {
		ct.T(t, 26, 'w', 475, h += 35)
	})
	return this
}
ct.T = ct.Tx = function () {
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
}
p.chalk = function () {
	var height = 50,
			that = this,
			text
	_.each(arguments, function (arg) {
		text = cjs.chalk(arg).Y(height).X(50 - that.X())
		height += 40
		that.A(text)
	})
	return text
}
p.pen = function self(arg) {
	var that = this
	if (O(self.text)) {
		self.text.remove()
	}
	self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
	that.A(self.text)
	return self.text
}
ct.chalk = function () {
	var ct = this, g = G(arguments),
			h = 0
	g.e(function (t) {
		ct.T(t, 26, 'w', 475, h += 35)
	})
	return this
}
ct.chalk = function () {
	var height = 50,
			that = this,
			text
	_.each(arguments, function (arg) {
		text = cjs.chalk(arg).Y(height).X(50 - that.X())
		height += 40
		that.A(text)
	})
	return text
}
ct.pen = function self(arg) {
	var that = this
	if (O(self.text)) {
		self.text.remove()
	}
	self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
	that.A(self.text)
	return self.text
}