$L('base', 'bound', 'hitTest',  'compOp' )
 
 
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
dO.al = dO.opacity = function (al) {
	var dO = this
	if (U(al)) {
		return dO.alpha
	}
	dO.alpha = al;
	return dO
}
dO.cX = dO.centerX = function (a) {
	if (U(a)) {
		return this.x + this.W() / 2
	}
	return this.X(a - this.W() / 2)
	dO.cX = dO.centerX = function (a) {
		if (U(a)) {
			return this.x + this.W() / 2
		}
		return this.X(a - this.W() / 2)
	}
	dO.cX = dO.centerX = function (a) {
		if (U(a)) {
			return this.x + this.W() / 2
		}
		return this.X(a - this.W() / 2)
	}
}
dO.cY = dO.centerY = function (a) {
	if (U(a)) {
		return this.y + this.H() / 2
	}
	return this.Y(a - this.H() / 2)
	dO.cY = dO.centerY = function (a) {
		if (U(a)) {
			return this.y + this.H() / 2
		}
		return this.Y(a - this.H() / 2)
	}
	dO.cY = dO.centerY = function (a) {
		if (U(a)) {
			return this.y + this.H() / 2
		}
		return this.Y(a - this.H() / 2)
	}
}
dO.mdX = dO.cenX = dO.cX = function (a) {
	var dO = this
	if (U(a)) {
		return dO.x + dO.W() / 2
	}
	return dO.X(a - dO.W() / 2)
}
dO.mdY = dO.cenY = dO.cY = function (a) {
	var dO = this,
			hH = dO.H() / 2
	return U(a) ? dO.y + hH : dO.Y(a - hH)
}
dO.lTL = function () {
	return this.localToLocal.apply(this, arguments)
}
dO.lTG = function () {
	return this.localToGlobal.apply(this, arguments)
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
dO.a2 = function (ct, x, y) {
	var dO = this
	ct.A(dO)
	if (N(x)) {
		dO.X(x)
	}
	if (N(y)) {
		dO.Y(y)
	}
	return dO
}
dO.tkEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.tickEnabled
	}
	dO.tickEnabled = g.f ? true : false
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
 
 dO.SL=function(){
 SL(this)
 return this
 }
function bounds() {
	dO.tf = dO.transform = function () {
		var dO = this, g = G(arguments)
		dO.setTF = dO.sTf = function () {
			var dO = this, g = G(arguments)
			dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
			return dO
		}
		dO.getTf = dO.gTf = dO.getTransform = function () {
			var dO = this
			return [
				dO.x, dO.y, dO.scaleX, dO.scaleY,
				dO.rotation, dO.skewX, dO.skewY,
				dO.regX, dO.regY
			]
		}
		return g.f ?
				dO.sTf.apply(dO, g.A_ ? g.f : g) :
				dO.gTf()
	}
	dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
		var dO = this, g = G(arguments)
		dO.nominalBounds = $Rec(a, b, c, d)
		return dO
	}
	dO.setBds = dO.sBd = dO.gTB = function () {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.getTransformedBounds()
		}
		dO.setBounds.apply(dO, g)
		return dO
	}
	dO.catProps = dO.gCDP = function () {
		var dO = this
		return dO.getConcatenatedDisplayProps()
	}
	dO.mx = dO.gM = function () {
		return this.getMatrix()
	}
	dO.mxMx = dO.cMx = dO.ccMx = dO.gCM = function () {/*
	 getConcatenatedDisplayProps ( [props] ) DisplayProps
	 Inherited from DisplayObject: getConcatenatedDisplayProps:999
	 Generates a DisplayProps object representing the combined 
	 display properties of the object
	 and all of its parent Containers up to the highest level ancestor 
	 (usually the Stage).
	 Parameters:
	
	 [props] DisplayProps optional
	 A DisplayProps object to populate with the calculated values. 
	 If null, a new DisplayProps object is returned.
	 Returns:
	
	 DisplayProps: The combined display properties.
	 */
		var dO = this
		return dO.getConcatenatedMatrix()
	}
}
function hitTest() {
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
//	function reggy() {
}
function compOp() {
	dO.cO = dO.compOp = function (compOp) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.compositeOperation
		}
		dO.compositeOperation = compOp
		return dO
	}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
	dO.Ds = dO.dO = function () {
		return this.compOp('destination-out');
	}
	dO.dS = dO.dI = function () {
		return this.compOp('destination-in')
	}
	dO.sD = dO.sI = function () {
		this.compOp('source-in');
		return this
	}
	dO.Sd = dO.sO = function () {
		this.compOp('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
	dO.ds = dO.dV = function () {
		this.compOp('destination-over');
		return this
	}
	dO.SD = dO.sT = dO.sA = function () {
		this.compOp('source-atop');
		return this
	}
	dO.DS = dO.dT = dO.dA = function () {
		this.compOp('destination-atop');
		return this
	}
	dO.li = function () {
		this.compOp('lighter');
		return this
	}
	dO.co = function () {
		this.compOp('copy');
		return this
	}
	dO.xo = function () {
		this.compOp('xor');
		return this
	}
}
i.tf = function () {
	var i = this, g = G(arguments)
	if (U(g[0])) {
		return [
			i.x,
			i.y,
			i.scaleX,
			i.scaleY,
			i.rotation,
			i.skewX,
			i.skewY,
			i.regX,
			i.regY
		]
	}
	if (O(g[0]) && F(g[0].getTransform)) {
		g[0] = g[0].getTransform()
	}
	i.setTransform.apply(i, A(g[0]) ? g[0] : g)
	return i
}
 