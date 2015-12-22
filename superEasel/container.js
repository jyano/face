$L('ctDot','center','tick','underPt','mouse', 'autoClr')
function autoClr(){
	 ct.au = function (au) {
		 this.autoClear = au ? true : false;
		 return this
	 }
	 ct.noAuCl = function () {
		 this.autoClear = false;
		 return this
	 }
 }
ct.A = function (arg, y) {
	var ct = this, g = G(arguments)
	var bd = $('body')
	var st = ct.getStage()
	if (g.u) {
		if (g.u && st) {
			//must be stage??
			bd.A(st ? st.canvas : ct.canvas)
		}
	}
	else if (g.N_) {
		bd.A(ct.canvas).abs().XY(g.f, g.s)
	}
	else {
		_.e(g, function (ch) {
			ct._A(ch)
		})
	}
	return ct
}
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
ct.numCh = ct.num = ct.nCh =  function () {
	return this.numChildren
}
function center() {
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.cen = ct.pt = ct.center = function () {
		return V(this.W() / 2, this.H() / 2)
	}
}
function tick(){
	ct.tkCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.tickChildren
		}
		ct.tickChildren = g.f ? true : false
		return ct
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
}
function mouse(){
	ct.moCh = ct.muCh = ct.mouCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.mouseChildren
		}
		ct.mouseChildren = g.f ? true : false
		return ct
	}
	ct.eMO = function (en) {
		this.enableMouseOver(en ? true : false);
		return this
	}
}
function ctDot() {
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
function underPt() {
	ct.gOUPs = function () {
		return this.getObjectsUnderPoint.apply(this, arguments)
	}
	ct.gOUP = function () {
		return this.getObjectUnderPoint.apply(this, arguments)
	}
}
ct.bm = function () {
	var ct = this, g = G(arguments), o, bmp
	o = N(g.s) ?
	{i: g.f, sc: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	o.sc = N(o.sc) ? o.sc : 1
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		bmp = $Bm(o.i).a2(ct)
		if (o.fn) {
			o.fn(bmp)
		}
		return ct
	}
	$.i(o.i, function (e, i) {
		bmp = $Bm(i)
		bmp.a2(ct)
		bmp.rC()
		bmp.sXY(o.sc).a2(ct)
		//bm.XY( that.W()/2, that.H()/2 )
		// works with stage i guess.. but fucks with 'container' - cant check bounds
		if (g.n) {
			bmp.XY(-1000)
		}
		if (o.fn) {
			o.fn(bmp)
		}
	})
	return ct
	function alt() {
		ct.bm = function (i, fn) {
			var ct = this
			$.i(i, function (i) {
				ct.A(bm = $Bm(i))
				if (F(fn)) {
					fn(bm)
				}
			})
			return ct
		}
	}
}
ct.Bm = function (i) {
	return $Bm(i).a2(this)//this.bm.apply(this, arguments)
}
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
function _pre(){
	ct.C = ct.bgC = function (c) {
		var ct = this
		$(ct.canvas).C(c)
		return ct
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
	ct.u = ct.upd = function () {
		this.update();
		return this
	}
	ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
		return this.stage
	}
	ct.N = function (n) {
		var s = this;
		if (U(n)) {
			return s.nextStage
		}
		s.nextStage = n;
		return s
	}
	ct._A = function () {
		return this.addChild.apply(this, arguments)
	}
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
function alpha() {
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
}
