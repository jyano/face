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
 
	 function toWeb() {
		 TNGL = TANGLE = function () {
			 z()
			 a = $.dA('r', 50, 50).XY(50).A().pad(10)
			 b = $.dA('b', 100, 100).XY(100).A().pad(10)
			 c = $.dA('g', 200, 200).XY(200).A().pad(10)
			 d = $.dA('y', 400, 400).XY(400).A().pad(10)
			 y = function (aa, bb, cc, dd) {
				 if (aa && U(bb)) {
					 aa.A().P('a')
				 }
				 if (bb) {
					 bb.A(aa.P('static'))
				 }
				 if (dd) {
					 dd.A(cc.P('s'))
				 }
			 }
		 }
	 }
	
	 function needsS$() {
		 FAIL = SKETCH = function () {
			 s = cjs.stage(500, 500).A()
			 s.can.P('a').XY(300)
			 s.bm('me', 0.2, function (bm) {
			 })
			 s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
			 s.circle(100, 100, 10, 'red', 'yellow')
					 .circle(10, 100, 100, 'black', 'purple')
					 .circle(100, 10, 100, 'blue', 'red')
					 .circle(150, 150, 120, 'red', 'blue')
					 .circle(30, 'brown', 'gray')
			 St()
			 ct = s.ct(1000, 300).drag()
			 ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
			 h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
			 h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
			 st.u()
			 St()
			 ct = s.ct(600, 300)
			 ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
			 ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
			 h = ct.Sh()
			 h.graphics.FS()
			 h.rec({
				 w: 100, h: 200, a: 20,
				 c: 'b', C: 'w', l: 20, bm: 1
			 }).X(100)
			 _.in(8, function () {
				 h.X(0)
			 }) //notice how gradient is seen behind the bm!!!
		 }//D 
		 SHAPEZ8 = function () {//C- only PLAY!?
			 SHAPS8 = function () {
				 z()
				 s = stage = $St(500, 500)
				 //s.bm('me', function(bm){ bm.sXY(.2)   })
				 s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
				 s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
				 s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
				 s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
				 s.Sh().cir(150, 150, 120, 'c', 'd')
					 //.fn(SL)
						 .cir(30, 'x', 'x')
			 }
			 SHAPES9 = function () {
				 z()
				 s = stage = St(500, 500).a()
				 //s.bm('me', function(bm){ bm.sXY(.2)   })
				 s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
				 s.Circle(100, 100, 10, 'r', 'y').fn(SL)
				 s.Circle(10, 100, 100, 'z', 'x').fn(SL)
				 s.Circle(100, 10, 100, 'a', 'c').fn(SL)
				 s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
				 //s.bm('me', function(bm){ bm.sXY(.2)   })
				 s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
				 s.Circle(100, 100, 10, 'r', 'y').fn(SL)
				 s.Circle(10, 100, 100, 'z', 'x').fn(SL)
				 s.Circle(100, 10, 100, 'a', 'c').fn(SL)
				 s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
			 }
			 St()
			 s.can.P('a').XY(200)
			 s.bm('me')
			 s.bm('me', 0.2, function (bm) {
			 })
			 h = $h().cir()
			 s.A(
					 $h().cir(100, 'blue', 'green').XY(100, 100).drag()
			 )
			 s.h().cir(100, 100, 10, 'red', 'yellow')
			 s.h().cir(10, 100, 100, 'black', 'purple')
			 s.h().cir(100, 10, 100, 'blue', 'red')
			 s.h().cir(150, 150, 120, 'red', 'blue')
			 s.h().cir(30, 'brown', 'gray')
			 s.u()
		 }
	 }
	
	 function needsOBx() {
		 DRL = DRAWLINE = XX5 = HDL11 = function () {
			 St()
			 h.dl(50, 50, 200, 200)
			 h.dl(V(300, 500), [500, 200])
			 DRAWLINE1 = DLN = function () {
				 St()
				 h.dl(50, 50, 200, 200)
				 h.dl(V(300, 500), [500, 200])
			 }
		 }
	 }
	
	 function needsStagePoly() {
		 POL2 = XX2 = EASELCONVEX8 = function () {
			 s = $St()
			 s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
			 s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
			 s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
		 }
		 POL3 = CPOL4 = function () {
			 St()
			 vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
			 //h.lt([450, 410],[600, 500], [500, 500])
			 //h.lt([[450, 410], [600, 500], [500, 500]])
			 //h.lt( V(450, 410), V(600, 500), V(500, 500))
			 h.pol({
				 c: 'r',
				 C: 'b',
				 l: 20,
				 v: vs
			 })
		 }
	 }
	
	 function needsStageH() {
		 POL5 = CPOL0 = function () {
			 __St()
			 vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
			 //h.lt([450, 410],[600, 500], [500, 500])
			 //h.lt([[450, 410], [600, 500], [500, 500]])
			 //h.lt( V(450, 410), V(600, 500), V(500, 500))
			 h.pol({
				 c: 'r',
				 C: 'b',
				 l: 20,
				 v: vs
			 })
		 }
		 POL0 = HPOLY8 = function () {
			 St()
			 v = [[-100, 0], [0, -100], [100, 50]]
			 s.h(600, 300).poly({v: v, bf: 'me'})
			 s.h(900, 300).poly({v: v, lf: 1})
			 s.h(800, 300).poly({v: v, rf: 1})
			 h = s.h(200, 300).drag().bf('me', function () {
				 h.dc([150], [200, 0, 150])
			 })
			 st.u()
		 }//C
		 POL1 = HPOL = function () {
			 st = $St()
			 h = st.h('+').XY(0, 0)
			 h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
			 h.pol(vs1, 'r', 'y', 30)
			 h.pol(vs1, 200, 200, 'r', 'y', 3)
		 }
		 POL4 = POLY = EVEX = EASELCONVEX = function () {
			 s = cjs.S()
			 s.poly([[-100, -10], [0, 100], [100, 20]],
					 'red', 'white', 10).XY(200, 300)
			 s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
			 s.poly(
					 [[-40, 40], [-40, -40], [40, -40], [40, 30]],
					 'blue', 'white').XY(200, 200)
		 }
	 }
	
	 function canon() {
		 canon = function (box, x, y) {
			 var vx, vy, ball
			 x = x || box.x || 100
			 y = y || box.y || 500
			 stage.A(ball = Ball(12).XY(x, y))
			 if (box.rotation > 0) {
				 vx = 8 * (1 + Math.toRads(box.rotation))
				 vy = 16 * (1 - Math.toRads(box.rotation))
			 }
			 else {
				 vx = 8 * (-1 + Math.toRads(box.rotation))
				 vy = 16 * (1 + Math.toRads(box.rotation))
			 }
			 stage.tick(function () {
				 vy -= 0.5
				 ball.X(vx, '+').Y(vy, '-')
			 })
		 }
		 CANON = function () {
			 stage = cjs.stage(1000, 600).tick().A()
			 box = Box(20, 100).X(500).B(600)
			 stage.A(box)
			 kD('l', function () {
				 box.rT(4, '-')
			 })
			 kD('r', function () {
				 box.rT(4, '+')
			 })
			 kD('d', function () {
				 box.rotation = 0
			 })
			 kD('s', function () {
				 canon(box)
			 })
			 setInterval(function () {
				 var degs = Math.toRads(box.rotation)
				 canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
						 (500 + Math.asin(degs) * 30) + box.y - 540)
			 }, 500)
		 }
	 }
	
	 function usesGrad() {
		 GRAPHTEST8 = function () {
			 St();
			 img = $.i('me', function () {
				 s.ct().A(h = $Sh())
				 gx = h.graphics.FS()
				 s.A($Bm(img))
				 gx.ss(32).dr(20, 20, 920, 360);
				 fns = [
					 function () {
						 return $Sh(12, 10)
								 .lf('b', 'g', 130).dr(130)
					 },
					 function () {
						 return $Sh(40, 10, 'b', 16)
								 .ls('r', 'w', 70, 140).de(70, 140)
					 },
					 function () {
						 return $Sh(80, 80)
								 .C('b', 8).rf('w', 'y', 40).dc(40)
					 },
					 function () {
						 return $Sh(12, 10, 18)
								 .bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
					 },
					 function () {
						 return $Sh(12, 12, 'g', 'r', 8)
								 .rr(130, 30)
					 }, //w(h) and r
					 function lt() {
						 return $Sh().C('o')
								 .ss(16, 'round', 'round')
								 .mt([40, 10], [90, 90], [90, 140])
					 },
					 function star() {
						 return $Sh(80, 85, 'y', 'b', 3)
								 .pStr(0, 0, 80, 5, .8, -95)
					 },
					 function hex() {
						 return $Sh(80, 40, 'p')
								 .pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
					 }
				 ]
				 _.e(fns, withEachFn)
				 function withEachFn(cont, i) {
					 var W = 155, H = 155, P = 5, C = 4 //pad, cols
					 s.A(tile(cont()).XY(
							 42 + (W + P) * (i % C),
							 42 + (i / C | 0) * (H + P)))
				 }
			 })[0]
			 tile = createTile = function (x, y) {
				 var bg, til
				 bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
				 til = cjs.ct().A(bg)
				 if (N(x)) {
					 til.X(x)
				 }
				 if (N(y)) {
					 til.Y(y)
				 }
				 if (O(x)) {
					 til.A(x)
				 }
				 return til
			 }
		 }
	 }
	
	 function needsBoot() {
		 SGUN = SGUNSHIP = function () {
			 St()
			 angleInDegrees = function self(y, x) {
				 if (O(y)) {
					 return self(y.vy, y.vx)
				 }
				 var d = tDeg(M.atan(y / x))
				 if (x < 0) {
					 d = M.abs(d) + 90;
					 if (y < 0) {
						 d = M.abs(d) + 90
					 }
				 }
				 return d
			 }
			 ship = function (st) {
				 h = t = $H().XY(100).rY(20).vX(1).vY(1)
				 h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
				 $.kD('d', function () {
					 t.rt(6, '+')
				 })
				 $.kD('u', function () {
					 t.rt(6, '-')
				 })
				 if (st) {
					 st.A(h)
					 st.MD(function (e) {
						 t.vX((e.rawX - t.x) / 100, '+')
						 t.vY((e.rawY - t.y) / 100, '+')
						 if (t.vx > 10) {
							 t.vX(10)
						 }
						 if (t.vy > 10) {
							 t.vY(10)
						 }
					 })
				 }
				 _.ev(.05, function () {
					 h.X(t.vx, '+').Y(h.vy, '+')
					 h.rotation = angleInDegrees(t)
				 })
				 return t
			 }
			 PL = 1;
			 aA = []
			 div = $.d('y').pad(10)
			 div.A(
					 $.h1('controls'),
					 b1 = $.bt('start', function () {
						 PL = 1;
						 b1.hd();
						 b2.sh()
					 }),
					 b2 = $.bt('stop', function () {
						 PL = 0;
						 b2.hd();
						 b1.sh()
					 }).hd(),
					 $.bt('sgun', function () {
						 sgun(guy)
					 }))
			 boot = $.boot()
			 boot.A(div, st.canvas)
			 guy = ship(st)
			 // kD('s',function(){ $l('bang')})
			 _.t(100, function () {
				 var a = ast();
				 a.a();
				 a.p()
			 })
			 st.t(function () {
				 if (PL) {
					 _.e(aA, function (a) {
						 a.u()
					 })
				 }
			 })
			 sgun(guy)
		 }
	 }
 }
 