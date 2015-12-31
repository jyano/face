$L('dot', 'dim', 'can', 'kids', 'add', 'next', 'compOp')
st.sTPE = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.snapToPixelEnabled
	}
	st.snapToPixelEnabled = g.f ? true : false
	return st
}
cjs.rmOb = function (ob) {
	if (cjs.iDO(ob)) {
		ob.rm()
	}
}
ct.C = ct.bgC = function (c) {
	var ct = this
	$(ct.canvas).C(c)
	return ct
}
ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
	return this.stage
} 
st.hEv = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.handleEvent
	}
	st.handleEvent = g.f
	return st
}
st.eDE = function () {
	var st = this, g = G(arguments)
	st.enableDOMEvents.apply(st, arguments)
	return st
}
st.m = function (ob) {
	var st = this
	if (U(ob)) {
		//return $Pt(this.mX(), this.mY())
		return $Pt(st.mouseX, st.mouseY)
	}
	if (O(ob)) {
		if (ob.d) {
			st.MD(ob.d)
		}
		if (ob.u) {
			st.MU(ob.u)
		}
		if (ob.m) {
			st.MM(ob.m)
		}
	}
	return st
}
st.mX = st.mx = function () {
	return this.m().x
}
st.mY = st.my = function () {
	return this.m().y
}
ct.t = ct.oT = ct.tick = function (fn) {
	//cjs.Ticker.addEventListener('tick', this); return this
	var g = G(arguments)
	if (F(fn)) {
		if (!g.n) {
			fn()
		}
		return this.on('tick', fn)
	}
	else {
		T.on('tick', this);
		return this
	}
}
ct.xT = function (fn) {
	this.off('tick', fn)
	return this
}
st.tOU = st.tkOUpd = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.tickOnUpdate
	}
	st.tickOnUpdate = g.f ? true : false
	return st
}
st.tk = function (ms) {
	var st = this, g = G(arguments)
	st.tk.apply(st, g)
	return st
}
ct.au = function (au) {
	this.autoClear = au ? true : false;
	return this
}
ct.noAuCl = function () {
	this.autoClear = false;
	return this
}
st.aC = st.auCl = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.autoClear
	}
	st.autoClear = g.f ? true : false
	return st
}
ct.moCh = ct.muCh = ct.mouCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.mouseChildren
	}
	ct.mouseChildren = g.f ? true : false
	return ct
}
st.eMO = st.mO = function (ms) {
	var st = this, g = G(arguments)
	if (U(g[0]) || g[0]) {
		st.enableMouseOver(N(g[0]) ? g[0] : true)
	}
	else {
		st.enableMouseOver(g.f ? true : false)
	}
	return st
}
st.mMO = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseMoveOutside
	}
	st.mouseMoveOutside = g.f ? true : false
	return st
}
st.mIB = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseInBounds
	}
	st.mouseInBounds = g.f ? true : false
	return st
}
ct.gOUPs = function () {
	return this.getObjectsUnderPoint.apply(this, arguments)
}
ct.gOUP = function () {
	return this.getObjectUnderPoint.apply(this, arguments)
}
st.MD = function (fn) {
	return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
	return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
	return this.on('stagemouseup', fn)
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
function kids() {
	ct.sort = ct.soCh = function () {
		this.sortChildren.apply(this, arguments)
		return this
	}
	ct.swap = ct.swCh = function () {
		this.swapChildren.apply(this, arguments)
		return this
	}
	ct.swapAt = ct.swChAt = function () {
		this.swapChildrenAt.apply(this, arguments)
		return this
	}
	ct.clr = ct.xCh = ct.removeAll = ct.E = function () {
		var ct = this
		ct.each(function (ch) {
			ch.remove()
		})
		return ct
	}
	ct.numCh = ct.num = ct.nCh = function () {
		return this.numChildren
	}
	ct._ch = function () {
		return this.children
	}
	ct.sCI = ct.sChIx = function () {
		this.setChildIndex.apply(this, arguments);
		return this
	}
	ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {
		var ct = this, g = G(arguments)
		//1) set a child's index
		if (N(g.s)) {
			ct.sChIx(g.f, g.s)
			return ct
		}
		var CH = []
		// get... array of all children..
		_.e(ct._ch(), function (ch) {
			CH.push(ch)
		})
		// 2)iterate a fn over them
		if (g.F) {
			_.e(CH, function (ch) {
				fn(ch, CH)
			})
			return ct
		}
		// 3) just return the children
		return CH
	}
}
function dot() {
	ct.dot = function () {
		var ct = this
		var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
		o.x = N(o.x, ct.W() / 2)
		o.y = N(o.y, ct.H() / 2)
		o.c = o.c || 'y'
		d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
		tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
		d.$$(function () {
			tw.$()
		})
		return d.K('dot')
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.dot = function (color, x, y) {
		var that = this,
				dot,
				tween
		if (b2d.isGPoly(color)) {
			_.each(color.verts(), function (v) {
				that.dot(V(v))
			})
			return this
		}
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	ct.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
}
function add() {
 
	ct.ct = function (x, y) {
		var ct = this, g = G(arguments), o
		o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
		var ct1 = $Ct().a2(ct)
		if (o.fn) {
			o.fn(ct1, ct)
		}
		else if (N(o.x)) {
			ct1.XY(o.x, o.y)
		}
		if (g.p) {
			cjs.bindSlide(ct1)
		}
		return ct1
		function alt() {
			ct.addContainer = ct.ct = function (fn) {
				var ct = this, g = G(arguments)
				var f = g[0]
				var ct1 = new cjs.Container().a2(ct)
				if (fn) {
					fn(ct1, ct)
				}
				if (g.p) {
					cjs.bindSlide(ct1)
				}
				return ct
			}
		}
	}
	ct.Ct = function () {
		var ct = this
		ct.ct.apply(ct, arguments)
		return ct
	}
	st.Sh = function () {
		return $Sh.apply(null, arguments).a2(this)
	}
	st.Gx = function () {
		return $Sh.apply(null, arguments).drag().a2(this).graphics
	}
	st.GX = function () {
		return this.Gx().FS()
	}
}
function next() {
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	ct.N = function (n) {
		var s = this;
		if (U(n)) {
			return s.nextStage
		}
		s.nextStage = n;
		return s
	}
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
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
ct.bgI = ct.bg = function (i) {
	var ct = this
	ct.bm(i, function (b) {
		ct.setChildIndex(b, 0) //ct.ch(b, 0)
	})
	return ct
}
ct.mc = function (x, y) {
	var ct = this, g = G(arguments), mc
	mc = cjs.MovieClip.apply(cjs, g)
	this.A(mc).XY(N(x, 100), N(y, 100))
	return mc
}
 function _apps(){
  
 }
 