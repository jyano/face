window.$pt = window.$pt || {}
cjs = createjs
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
dO=ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype
cjs.ED = cjs.EventDispatcher
cjs.H = cjs.Sh = cjs.Shape
cjs.LQ = cjs.LoadQueue
cjs.SS = cjs.SpriteSheet
cjs.MC = cjs.MovieClip
cjs.Sp = cjs.Sprite
cjs.SSB = cjs.SpriteSheetBuilder
cjs.Tl = cjs.Timeline
$pt.ct = cjs.Container.prototype
$pt.dO = $pt.iO = $pt.ob = $pt.i = cjs.DisplayObject.prototype
$pt.eD = cjs.ED.prototype
$pt.gx = cjs.Graphics.prototype
$pt.h = cjs.Sh.prototype
$pt.st = s = cjs.Stage.prototype
$pt.t = cjs.Ticker.prototype
$pt.ld = $pt.q = cjs.LQ.prototype
// stage anim ///
$pt.ss = $pt.sS = cjs.SS.prototype
$pt.sp = s = cjs.Sp.prototype
$pt.ssB = $pt.sSB = cjs.SSB.prototype
$pt.tw = cjs.Tween.prototype
$pt.mc = cjs.MovieClip.prototype
$pt.tl = cjs.Timeline.prototype
h = cjs.Shape.prototype
$Sh = function (gx) {
	return new cjs.Shape(gx)
}
cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
	if (cjs.iH(x)) {
		return $Sh(x.graphics)
	}
	var h = $Sh()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}
$H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	return h
}
cjs.adj = cjs.camAdj = function (income, tax) {//tax ~ deltaLimit ~ buffer
	var income = income || 0, tax = tax || 0
	if (income > 0) {
		return income > tax ? income - tax : 0
	}
	return -income > tax ? income + tax : 0
}
cjs.cap = function (n, m, M) {
	if (U(m)) {
		return n
	}
	if (A(m)) {
		M = m[1]
		m = m[0]
	}
	return n < m ? m
			: n > M ? M
			: n
}
$L('bool', 'stgPt', 'matx')
__St = function () {
	st = $St(2000, 1000);
	h = st.h()//.drag()
	cjs.SL(h)
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	p1 = $pD(vs1);
	p2 = $pD(vs2)
}
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
cjs.St = cjs.Stage
_$St = function (cv) {
	var $StCv = function () {
		var g = G(arguments), o, st
		var _$StCv = function (cv) {
			return new cjs.Stage($.c.apply($, arguments)[0])
		}
		var __$St = function (cv) {
			return new cjs.Stage(cv)
		}
		st = A(g.f) ? __$St(g.f[0]) :
				$.isCvId(g.f) ? __$St(g.f) :
						O(g.f) ? __$St($(g.f)[0]) :
								_$StCv.apply(null, g)
		return st
	}
	//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
	//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
	return cv ? $StCv.apply(null, arguments) :
			new cjs.Stage($.c('o', 1000, 600)[0])
}
$St = cjs.stg = cjs.stage = function () {
	var g = G(arguments)
	var st = _$St.apply(null, arguments)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	st.can = st.c = $(st.canvas)
	st.t()
	if (g.m) {
		st.b('me')
	}
	return st
}
St = St$ = $S$ = cjs.S = __S = function () {
	var g = G(arguments)
	s = stage = st = $St.apply(null, arguments)
	lib = {}
	images = img = {}
	loader = new cjs.LoadQueue(false);
	h = $h(0, 0).a2(st).drag()
	h.graphics.C('r', 'b', 20)
	return st
}
$Ct = cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
$Pt = cjs.P = cjs.Pt = function (x, y) {
	$l('cjs.Pt $Pt')
	if (U(x)) {
		return new C$.Point
	}
	if (O(x) && O(y)) {
		return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
	}
	if (O(x)) {
		return new cjs.Point(
				x.mx(),
				x.my()
		)
	}
	return new cjs.Point(x, y)
}//=P=
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
////
cjs.rmOb = function (ob) {
	if (cjs.iDO(ob)) {
		ob.rm()
	}
}
//point:
//shadow:
cjs.shad = cjs.shadow = function (color, x, y, blur) {
	if (color == '-') {
		return new cjs.Shadow(null, 0, 0, 0)
	}
	color = S(color) ? color : 'a'
	blur = N(blur) ? blur : 10
	x = N(x) ? x : 0
	y = N(y) ? y : 0
	var shad = new cjs.Shadow(oO('c', color), x, y, blur)
	return shad
}
cjs.M = cjs.Mx = cjs.Matrix2D
function bool() {
	cjs.iDO = cjs.isDisplayOb = function (ob) {
		return O(ob) && F(ob.getStage)
	}
	cjs.isCont = cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cjs.iH = cjs.isShape = function (h) {
		return O(h) && h.graphics
	}
	cjs.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
	cjs.isText = cjs.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cjs.hasDim = function (bm) {
		return !cjs.iH(bm) && !cjs.iCt(bm)
	}
}
function stgPt() {
	st = cjs.Stage.prototype
	st.N = st.next = function (next) {
		if (U(next)) {
			return this.nextStage
		}
		this.nextStage = next
		return this
	}
	st.eMO = function (ms) {
		var st = this, g = G(arguments)
		st.enableMouseOver(ms)
		return st
	}
	st.eDE = function () {
		var st = this, g = G(arguments)
		st.enableDOMEvents.apply(st, arguments)
		return st
	}
	st.tk = function (ms) {
		var st = this, g = G(arguments)
		st.tk.apply(st, g)
		return st
	}
	st.du = st.tDU = function (ms) {
		var st = this,
				g = G(arguments)
		// same as? return this.canvas.toDataURL()
		st.toDataURL.apply(st, g)
		return st
	}
	st.sTPE = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.snapToPixelEnabled
		}
		st.snapToPixelEnabled = g.f ? true : false
		return st
	}
	st.pS = st.prevSel = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.preventSelection
		}
		st.preventSelection = g.f ? true : false
		return st
	}
	st.mMO = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.mouseMoveOutside
		}
		st.
				mouseMoveOutside = g.f ? true : false
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
	st.tOU = st.tkOUpd = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.tickOnUpdate
		}
		st.tickOnUpdate = g.f ? true : false
		return st
	}
	st.aC = st.auCl = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.autoClear
		}
		st.autoClear = g.f ? true : false
		return st
	}
	st.hEv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.handleEvent
		}
		st.handleEvent = g.f
		return st
	}
	st.cv = function () {
		var st = this, g = G(arguments)
		if (g.u) {
			return st.canvas
		}
		st.canvas = g.f
		return st
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
	st.ab = st.abs = function (x, y) {
		this.can.abs(x, y);
		return this
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
	st.Sh = function () {
		return $Sh.apply(null, arguments).a2(this)
	}
	st.Gx = function () {
		return $Sh.apply(null, arguments).drag().a2(this).graphics
	}
	st.GX = function () {
		return this.Gx().FS()
	}
	st.cc = function () {
		return this.cacheCanvas
	}
	st.mX = function () {
		return this.mouseX
	}
	st.mY = function () {
		return this.mouseY
	}
	st.m = function () {
		return $Pt(this.mX(), this.mY())
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
	st.mO = function () {
		var g = G(arguments), st = this
		if (U(g[0]) || g[0]) {
			st.enableMouseOver(N(g[0]) ? g[0] : true)
		}
		else {
			st.enableMouseOver(false)
		}
		return st
	}
	st.m = function (ob) {
		//uses Point
		var st = this
		if (U(ob)) {
			return cjs.P(st.mouseX, st.mouseY)
		}
		if (O(ob)) {
			if (ob.d) {
				st.MD(ob.d)
			}
			;
			if (ob.u) {
				st.MU(ob.u)
			}
			;
			if (ob.m) {
				st.MM(ob.m)
			}
		}
		return st
	}
	st.mx = st.mX = function () {
		return this.m().x
	}
	st.my = st.mY = function () {
		return this.m().y
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
}
function matx() {
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
p = ct = cjs.Container.prototype
i.dg = i.drag = i.SL = function () {
	SL(this);
	return this
}
i.dg = i.drag = i.SL = function () {
	SL(this);
	return this
}

dO.dg = dO.drag = function () {
	$l('dragggg')
	var i = this;
	cjs.SL(i); //<-SL(this)
	return i
}
LS = cjs.SL = cjs.bindSlide = SL = function (b, b2) {
	var g = G(arguments),
			b = g[0], b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX, by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (g.P) {
						b2.x = bx + e.rawX
					}
					if (g.N) {
						b2.y = by + e.rawY
					}
				})
			}
	)
}