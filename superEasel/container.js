$Ct = cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
$L('dot','dim', 'can', 'kids','add','next','matrix')
st.sTPE = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.snapToPixelEnabled
	}
	st.snapToPixelEnabled = g.f ? true : false
	return st
} 
function kids(){
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
function can() {
	st.cc = function () {
		return this.cacheCanvas
	}
	st.du = st.tDU = function (ms) {
		var st = this,
				g = G(arguments)
		// same as? return this.canvas.toDataURL()
		st.toDataURL.apply(st, g)
		return st
	}
	st.tabs = function (x, y) {
		this.can.abs(x, y)
		return this
	}
	st.snap = function (f) {
		$.post('/img', {
			d: this.toDataURL()//, dats: o.x.dats
		})
		sec(f)
		return this
	}

	st.cv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.canvas
		}
		st.canvas = g.f
		return st
	}
	st.ab = st.abs = function (x, y) {
		this.can.abs(x, y);
		return this
	}

}
function dim(){
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.cen = ct.pt = ct.center = function () {
		return V(this.W() / 2, this.H() / 2)
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
	st.hW = function () {
		return this.W() / 2
	}
	st.hH = function () {
		return this.H() / 2
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
}
function _pre() {
	ct.C = ct.bgC = function (c) {
		var ct = this
		$(ct.canvas).C(c)
		return ct
	}
	ct.u = ct.upd = function () {
		this.update();
		return this
	}
	ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
		return this.stage
	}
	ct._A = function () {
		return this.addChild.apply(this, arguments)
	}
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
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.c0 = function () {
	var g = G(arguments)
	$.c.apply($, g.A ? g.f : g)[0]
}
$0 = function () {
	return $.apply(null, arguments)[0]
}
$St = function () {
	__$St = function (cv) {
		return new cj.St(O(cv) ? $0(cv) : cv)
	}
	var g = G(arguments)
	if (g.d) {
		$.E()
	}
	var cv = g.A ? g.f[0] :
			g.O || $.isCvId(g.f) ? g.f :
					$.c(g.f ? g : 'o')
	var st = __$St(cv)
	if (!g.n) {
		st.t()
		st.cv = st.c = st.can = $(st.canvas)
		st.cv0 = st.cv[0]
		st.xc = st.cv0.getContext('2d')
		s = stage = window.st = st
		lib = {}
		images = img = {}
		loader = new cjs.LoadQueue(false);
		h = $h(0, 0).a2(st).drag()
		h.graphics.C('r', 'b', 20)
	}
	if (g.m) {
		st.b('me')
	}
	return st
	// = _$St = $StCv = cjs.stg = cjs.stage = St = St$ = $S$ = cjs.S = __St = __S
}
//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
cjs.rmOb = function (ob) {
	if (cjs.iDO(ob)) {
		ob.rm()
	}
}
_$Bm = function (i) {
	return new cjs.Bitmap(i)
}
$Bm = cjs.bitmap = cjs.bm = function () {
	var g = G(arguments)
	var i = g[0]
	//return new cjs.Bitmap(i)
	//if (O(i)) {
	if ($.iI(i)) {
		i = $(i)[0];
		bm = new cjs.Bitmap(i)
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	bm = $Bm(i.i)
	if (i.al) {
		bm.al(i.al)
	}
	if (i.fl) {
		bm.fl(i.fl)
	}
	if (i.aF2) {
		bm.aF2(i.aF2)
	}
	if (g.N) {
		bm.rCenter()
	} // should be !g.n ?
	return bm
	//}
}
function matrix() {
	mx = cjs.Matrix2D.prototype
	mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		x = N(x, 0)
		y = N(y, 0)
		scaleX = N(scaleX, 1)
		scaleY = N(scaleY, 1)
		rotation = N(rotation, 0)
		return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
	}
	$Mx = cjs.m2d = function () {
		var _MxOb = function (mx) {
			return new cjs.Matrix2D(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
		}
		var g = G(arguments), o;
		if (A(g.f)) {
			return $Mx.apply(null, g.f)
		}
		o = g.O ? g.f :
				U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
				{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
		var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
			o.a = N1(o.a)
			o.b = N0(o.b)
			o.c = N0(o.c)
			o.d = N1(o.d)
			o.tx = N0(o.tx)
			o.ty = N0(o.ty)
			return o
		}
		return _MxOb($mxDf(o))
	}
	$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
		return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
	}
	h._bfTf = h._bfT = function (img) {
		var g = G(arguments)
		var props = A(g.s) ? g.s : g.r
		return this._bf(img, $Tf(props)) //gant!
	}
	h._bfTfArrs = h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			var fn = _.tFn(o.fn)
			fn(h._bf(g.f, $Tf(_.tA(o.tf))))
		})
		return h
	}
}
$.me = function (name, fn) {
	if (F(name)) {
		return $.i('me', name)
	}
	window[name] = function () {
		$.i('me', fn)
	}
}
 