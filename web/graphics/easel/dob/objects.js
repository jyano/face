
dO.X = function (x, duration) {//can add easing :)
	var g = G(arguments)
	if (U(x)) {
		return this.x
	}
	if (g.p) {
		x = this.x + x
	}
	else if (g.n) {
		x = this.x - x
	}
	else if (g.m) {
		x = this.x * x
	}
	else if (g.d) {
		x = this.x / x
	}
	if (N(duration)) {
		tw([this], [{x: x}, duration])
	}
	//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
	else {
		this.x = x
	}
	return this
	dO.XAlt = function (x, dur) {
		var i = this, g = G(arguments)
		if (U(x)) {
			return i.x
		}
		i.x = g.p ? i.x + x
				: g.n ? i.x - x
				: g.m ? i.x * x
				: g.d ? i.x / x
				: x
		if (N(dur)) {
			$tw([i], [{x: x}, dur]);
			return i
		}
		return i
	}
}
dO.Y = function (y, dur) {
	var i = this, g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(dur)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
}
dO.XY = function (x, y) {
	var i = this, g = G(arguments), v
	if (g.u) {
		return {x: i.x, y: i.y}
	}
	v = V(g.f, g.s)
	x = v.x
	y = N(v.y, v.x)
	return i.X(x).Y(y)
	dO.XYalt = function (x, y) {
		if (U(x)) {
			return {x: this.x, y: this.y}
		}
		if (O(x)) {
			y = x.y
			x = x.x
		}
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
	}
}
dO.W = function (a) {
	var i = this
	if (U(a)) {
		var bds = i.getBounds()
		if (bds) {
			return bds.width * i.scaleX
		}
		return
	}
	i.sX(i.scaleX * a / i.W())
	return i
}
dO.H = function (a) {
	var i = this
	if (U(a)) {
		if (this.getBounds()) {
			return this.getBounds().height * this.scaleY
		}
		return
	}
	this.sY(this.scaleY * a / this.H())
	return this
}
dO.WH = function (w, h) {
	var i = this
	return this.W(w).H(h || w)
}
ct.W = function (w) {
	var st = this.stage
	var can = st.canvas
	if (U(w)) {
		return can.width
	}
	can.width = w
	return this
}
ct.H = function (w) {
	var can = this.getStage().canvas
	if (U(w)) {
		return can.height
	}
	can.height = w
	return this
}
st.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a
	return this
}
st.H = function (a) {
	if (U(a)) {
		return this.canvas.height
	}
	this.canvas.height = a
	return this
}
st.WH = function (w, h) {
	var st = this;
	if (U(w)) {
		return V(st.W(), st.H())
	}
	if (N(w)) {
		st.W(w)
	}
	if (N(h)) {
		st.H(h)
	}
	;
	return st
}
st.hW = function () {
	return this.W() / 2
}
st.hH = function () {
	return this.H() / 2
}
dO.toFront = function () {
	return this.ix(this.sib().length - 1)
	toFront = function () {
		numChildren = this.parent.children.length
		this.parent.setChildIndex(this, numChildren - 1)
		return this
	}
	dO.toFrontAlt = function () {
		numChildren = this.parent.children.length
		this.parent.setChildIndex(this, numChildren - 1)
		return this
	}
}
dO.in = dO.within = dO.inStage = function () {
	var ob = this,
			st = ob.st(),
			g = G(arguments),
			x = ob.x,
			y = ob.y,
			w = st.W() - 100,
			h = st.H() - 100,
			inn = x > 0 && x < w && y > 0 && y < h
	if (g.n) {
		if (!inn) {
			ob.rm()
		}
	}
	return inn
	function inStage() {
		var args = G(arguments),
				x = this.x,
				y = this.y,
				stg = this.stg(),
				w = stg.W() - 100,
				h = stg.H() - 100,
				withinStage = x > 0 && x < w && y > 0 && y < h
		if (args.n) {
			if (!withinStage) {
				this.remove()
			}
		}
		return withinStage
		var i = this
		var s = i.S(), wthnS
		wthnS = i.x > 0 && i.y > 0
		&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
		if (g.n && !wthnS) {
			s.rm()
		}
		return wthnS
	}
}
dO._hT = function () {
	return this.hitTest.apply(arguments, this)
}
dO.hT = function (x, y) {
	function alt() {
		dO._hT = function () {
			return this.hitTest.apply(arguments, this)
		}
		dO.hT = function (x, y) {
			var dO = this
			if (cjs.iDO(x)) {
				return dO.hT(
						dO.gTL(x)
				)
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return dO._hT(x, y)
		} //= dO.test
	}
	
	var dO = this
	if (cjs.iDO(x)) {
		return dO.hT(
				dO.gTL(x)
		)
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	return dO._hT(x, y)
}
dO.lTL = function () {
	return this.localToLocal.apply(this, arguments)
}
dO.lTG = function () {
	return this.localToGlobal.apply(this, arguments)
}
st.trDr = function () {
	var st = this
	st._md = 0
	st.MD(function () {
		st._md = 1
	})
	st.MU(function () {
		st._md = 0
	})
	return this
}
dO.cl = function () {
	return this.clone.apply(this, arguments)
}
dO.pa = dO.P = function () {
	return this.parent
}
dO.sib = function () {
	return this.P().ch()
}
dO.s2p = dO.snap2px = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.snapToPixel
	}
	dO.snapToPixel = g.f ? true : false
	return dO
}
dO.dr = function () {
	this.draw.apply(this, arguments)
	return this
}
dO.nm = dO.n = dO.N = function (name) {
	if (U(name)) {
		return this.name
	}
	this.name = name;
	return this
}
dO.ix = function (n) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return
	}
	dO.parent.sChIx(dO, n)
	return dO
}
dO.belowStg = function () {
	return this.y > this.getStage().H()
}
dO.s = function () {
	return this.set.apply(this, arguments)
}
dO.rm = dO.remove = function () {
	var dO = this
	if (O(dO) && O(dO.parent)) {
		dO.parent.removeChild(dO)
	}
	return dO
}
dO.hd = dO.hide = function () {
	return this.vsb(0)
}
dO.vis = dO.vsb = function (vsb) {
	var dO = this
	if (U(vsb)) {
		return dO.visible
	}
	dO.visible = vsb ? true : false
	return dO
}
dO.St = dO.S = dO.st = dO.stg = function () {
	return this.getStage()
}
dO.gTL = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	return this.globalToLocal(x, y)
}
dO.tkEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.tickEnabled
	}
	dO.tickEnabled = g.f ? true : false
	return dO
}