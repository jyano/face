$Ldr = function (name, fn) {
	return window[name] = function () {
		$Ld(fn)
	}
}
function _pre() {
	_$Ld = function () {
		return new cjs.LoadQueue(true)
	}
	guyIt = {id: "guy", src: "/guy.png"}
	myIt = {id: "myImage", src: "/me.png"}
	mf1 = [myIt, guyIt];
	mf2 = [$it("me"), $it(guyIt)]
	mf3 = ["me", guyIt];
	mf4 = [myIt, guyIt];
	mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
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
	$.iI = function (i) {
		if (O(i)) {
			return S($(i)[0].src)
		}
	}
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
	cj = cjs = createjs
	cj.Pt = cj.Point
	cjs.R = cjs.Rectangle
	cj.ED = cj.EventDispatcher
	cj.DO = cj.DisplayObject
	cj.Ct = cj.Container
	cj.St = cj.Stage
	cj.Gx = cj.Graphics
	cj.H = cj.Sh = cj.Shape
	cj.LQ = cj.LoadQueue
	cj.M = cj.Mx = cj.Matrix2D
	cj.Tx = cj.Text
	cj.Tk = cj.Ticker
	window.$pt = window.$pt || {}
	cj.adj = cj.camAdj = function (income, tax) {//tax ~ deltaLimit ~ buffer
		var income = income || 0, tax = tax || 0
		if (income > 0) {
			return income > tax ? income - tax : 0
		}
		return -income > tax ? income + tax : 0
	}
	cj.cap = function (n, m, M) {
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
	$Pt = function (x, y) {
		
		//=P=  cj.P = cj.Pt
		if (U(x)) {
			return new C$.Point
		}
		if (O(x) && O(y)) {
			return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
		}
		if (O(x)) {
			return new cj.Point(
					x.mx(),
					x.my()
			)
		}
		return new cj.Pt(x, y)
	}
	$pt.eD = cj.ED.prototype
	gx = $pt.gx = cj.Gx.prototype
	st = $pt.st = cj.St.prototype
	ct = $pt.ct = cj.Ct.prototype
	h = $pt.h = cj.H.prototype
	dO = $pt.dO = cj.DO.prototype
	lQ = ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	tx = t = cj.Tx.prototype
	tk = $pt.tk = cj.Tk.prototype
	cj.iDO = cj.isDisplayOb = function (ob) {
		return O(ob) && F(ob.getStage)
	}
	cj.isCont = cj.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cj.iH = cj.isShape = function (h) {
		return O(h) && h.graphics
	}
	cj.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
	cj.isText = cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	cj.hasDim = function (bm) {
		return !cj.iH(bm) && !cj.iCt(bm)
	}
	cj.SS = cj.SpriteSheet
	cj.MC = cj.MovieClip
	cj.Sp = cj.Sprite
	cj.SSB = cj.SpriteSheetBuilder
	cj.Tl = cj.Timeline
	$pt.ss = $pt.sS = cj.SS.prototype
	$pt.sp = s = cj.Sp.prototype
	$pt.ssB = $pt.sSB = cj.SSB.prototype
	$pt.tw = cj.Tween.prototype
	$pt.mc = cj.MovieClip.prototype
	$pt.tl = cj.Timeline.prototype
	obX = function (o) { // ************
		var g = G(arguments);
		return !O(o) ? {}
				: g.p ? o.clone()
				: o
	}
	mx = cjs.Matrix2D.prototype
	_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
	_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
}
$L()
T.t = cjs.t = cjs.tick = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		if (!g.n) {
			fn()
		}
		return T.on('tick', fn) // T.addEventListener? return T?
	}
	return g.n ? T.t('+') - T.t() :
			Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
}
$t = function (fn) {
	T.t(fn)
}
$Tx = $T = function (a, b, c, d, e) {
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
$Ct = cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
$St = function () {

//_$StCv = function (cv) {var g=G(arguments); return __$St($.c0(g.A ? g.f : g))}
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
	var st = __$St(cv)//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
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
$Gx = function (a) {
	return new cjs.Gx(a).FS()
}
$Rec = function (a, b, c, d) {
	return new cjs.R(a, b, c, d)
}
$rGx = $recGx = classicRecGx = function (width, height, fc, sc) {
	
	// =  cjs.rect= cjs.rect2
	width = width || 50
	height = height || 50
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight)
			.lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight)
			.lt(-halfwidth, -halfheight)
	return h
}
$rCt = function () {
	return 'this is a recGx in a container so it can be moved relative to something.. (its like a fx rel to a bd)'
}
$Cir = function () {
	var g = G(arguments), o
	o = g.S_ ? {c: g.f, x: g.s, y: g.t, r: g[3]} : {x: g.f, y: g.s, r: g.t}
	return $H(o.c, o.x, o.y).dc(o.r)
}
$Sh = function (gx) {
	return new cjs.Shape(gx)
}
$H = $h = function () {
	_$H = cjs.shape = _$h = function (x, y, f, s, width, opt) {
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
		h.FS(f, s, width)
		if (opt == 'drag') {
			h.drag()
		}
		// use a switch statement here!  i love it!
		return h
	}
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
$Mf = function (mf, fn) {
	cjs.manifest = function (fn) {
		_manifest_ = [{
			id: "chicks", src: "/chicks.png"
		},
			{id: "me", src: "/me.png"},
			{id: "guy", src: "/guy.png"},
			{id: "sun", src: "/sun.png"}]
		var q = cjs.loadQueue()
		q.complete(function () {
			fn(function (getResult) {
				return q.getResult(getResult)
			})
		})
				.manifest(_manifest_)
	}
	return $Ld(fn).mf(mf)
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
$Bm = cjs.bitmap = cjs.bm = function () {
	_$Bm = function (i) {
		return new cjs.Bitmap(i)
	}
	var g = G(arguments)
	var i = g[0]
	if (!O(i)) {
		return
	}
	if ($.iI(i)) {
		i = $(i)[0];
		bm = new cjs.Bitmap(i)
		if (g.p) {
			bm.drag()
		}
		return bm
	}
	//return new cjs.Bitmap(i)
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
	if (!g.n) {
		
		//	bm.rCenter()
	}
	return bm
}
$bFl = $bF = function (a, b, c, d, e) {
	return new cjs.BlurFilter(a, b, c, d, e)
}
$Bfl = $BF = $Bf = $FB = $FlB = $bF = function () {
	var g = G(arguments), fl, o
	o = {x: g[0], y: g[1], q: g[2]}
	o.y = N(o.y) ? o.y : o.x
	o.q = o.q || 1
	fl = new cjs.BlurFilter(o.x, o.y, o.q)
	return fl
}
$CMF = $CmF = $cMF = function (a, b, c, d) {
	if (!O(a)) {
		a = $CM(a, b, c, d)
	}
	return new cjs.ColorMatrixFilter(a)
}
$aFl = $aF = function (a, b, c, d, e) {
	return new cjs.AlphaMaskFilter(a, b, c, d, e)
}
$Afl = $AF = $Af = $aF = function (a, b, c, d, e) {
	var fl
	if (O(a) && a.cacheCanvas) {
		a = a.cacheCanvas
	}
	fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
	return fl
	forMaskFilter = function trx(n) {
		var g = G(arguments), a
		a = []
		//for making mask filter
		if (g.n) {
			return 'rgba(0,0,0,' + g[0] || 0 + ')'
		}
		_.e(g, function (n) {
			a.push(trx(n, '-'))
		})
		return a
	}
}
$cM = function () {
	return new cjs.ColorMatrix()
}
$CM = $Cm = $cM = function (a, b, c, d, e) {
	var m
	m = new cjs.ColorMatrix(a, b, c, d, e)
	m.b = m.adjustBrightness
	m.c = m.adjustColor
	m.C = m.adjustContrast
	m.h = m.adjustHue
	m.s = m.adjustSaturation
	m.cl = m.clone
	m.cc = m.concat
	m.m = m.copyMatrix
	m.r = m.reset
	m.A = m.toArray
	m.S = m.toString
	return m
}
$cFl = $cF = function (a, b, c, d, e, f, g, h) {
	return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
}
$cMFl = $cMF = function (cM) {
	return new cjs.ColorMatrixFilter(cM)
}
$aMFl = $aMF = function (a, b, c, d, e) {
	return new cjs.AlphaMapFilter(a, b, c, d, e)
}
function official() {
	examples.showDistractor = function (id) {
		var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	examples.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
	cjs.promote = function (subclass, prefix) {
		var subP = subclass.prototype, supP = getProto(subP)
		
		function getProto(subP) {
			return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
		}
		
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (F(supP[n]))) {
					subP[prefix + n] = supP[n]
				}
			}
		}
		return subclass
	}
	cjs.promoteX = function (subclass, prefix) {
		var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
		if (supP) {
			subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
			for (var n in supP) {
				if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
					subP[prefix + n] = supP[n];
				}
			}
		}
		return subclass
	}
//  Simple slider control for EaselJS examples.
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	p = cjs.extend(Slider, createjs.Shape);
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
	Slider = cjs.promote(Slider, "Shape")
	cjs.slider = function () {
		/**
		 * Simple slider control for EaselJS examples.
		 **/
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			// public properties:
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		var p = createjs.extend(Slider, createjs.Shape);
// public methods:
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
// private methods:
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		window.Slider = createjs.promote(Slider, "Shape");
	}
	$it = function (i) {
		var _$it = function (i) {
			return {src: _.src(i), id: i}
		}
		return S(i) ? _$it(i) : i
	}
	$its = function (its) {
		var g = G(arguments)
		if (!g.A) {
			its = g
		}
		return _.m(its, $it)
	}
	ld = cjs.LoadQueue.prototype
	examples = {}
	cjs.testCanvas = function () {
		return $.div().A($.canvas(960, 400).id("testCanvas")).A()
	}
	cjs.utils = function () {
	}
	cjs.extend = function (subclass, superclass) {
		function o() {
			this.constructor = subclass
		}
		
		o.prototype = superclass.prototype;
		return (subclass.prototype = new o())
	}
	cjs.sharedCode = function () {
		if (document.body) {
			setupEmbed()
		}
		else {
			document.addEventListener("DOMContentLoaded", setupEmbed)
		}
		function setupEmbed() {
			if (window.top != window) {
				document.body.className += " embedded"
			}
		}
		
		var o = window.examples = {}
		o.showDistractor = function (id) {
			var div = id ? document.getElementById(id) :
					document.querySelector("div canvas").parentNode;
			div.className += " loading"
		}
		o.hideDistractor = function () {
			var div = document.querySelector(".loading")
			div.className = div.className.replace(/\bloading\b/)
		}
	}
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
	}
}
function _weird() {
	cjs.src = _.src
}
function _post() {
	gx._f = function (col) {
		return this.f(oO('c', col))
	}
	gx._s = function (col, thickness) {
		// = gx.col = gx.sC
		var gx = this
		gx.s(oO('c', col))
		if (N(thickness)) {
			gx.SS(thickness)
		}
		return gx
	}
	h.f = function (fil, str) {
		var h = this, gx = h.graphics
		gx._f(fil)
		if (S(str)) {
			gx._s(str)
		}
		return h
	}
	h.s = h.C = h.sC = function (str, l) {
		var h = this, gx = h.graphics
		if (N(l)) {
			h.l(l)
		}
		gx._s(str)
		return h
	}
	$.me = function (name, fn) {
		if (F(name)) {
			return $.i('me', name)
		}
		window[name] = function () {
			$.i('me', fn)
		}
	}
	i.grow = function () {
		$Tw(this, [{sxy: 10}, 10000]);
		return this
	}
}
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
st.tabs = st.ab = st.abs = function (x, y) {
	this.can.abs(x, y);
	return this
}
cj.iT = function (t) {
	if (O(t)) {
		return (t.textBaseline)
	}
}
cj.ticker = tt = function (a, b, c) {
	var g = G(arguments),
			t = true,
			f = false,
			a = g[0],
			b = g[1],
			c = g[2]
	if (F(a)) {
		return aEL(T$, 'tick',
				g.N ? a
						: function (e) {
					if (!e.paused) {
						a(e)
					}
				})
	}
	if (O(a)) {
		return aEL(T$, 'tick', a)
	}
	if (a == '?') {
		return !T$.getPaused()
	}
	if (a == 'p') {
		T$.setPaused(f);
		return tt('?')
	}
	if (a == 's') {
		T$.setPaused(t);
		return tt('?')
	}
	if (a == 'g') {
		return tt(
				tt('?') ? 's' : 'p'
		)
	}
	if (a == '@') {
		return T$.init()
	}
	if (a == '!') {
		return T$.reset()
	}
	if (a == 'e') {
		return T$.getEventTime(g.p ? t : f)
	}
	if (a == 't') {
		return T$.getTime(g.p ? t : f)
	}
	if (a == '#') {
		return T$.getTicks(g.n ? t : f)
	}
	if (a == 'md') {
		return t$.maxDelta
	}
	if (a == 'M') {
		return T$.timingMode
	}
	if (a == 'i') {
		if (N(b)) {
			T$.setInterval(g.m ? b * 1000 : b)
			return tt('i')
		}
		if (U(b)) {
			return T$.getInterval()
		}
	}
	if (a == 'f') {
		if (N(b)) {
			T$.setFPS(b);
			return tt
		}
		if (U(b)) {
			return T$.getFPS()
		}
	}
	if (a == 'r') {
		if (b > 10) {
			tt('f', b)
		} else {
			tt('i', b, '*')
		}
	}
	if (a == 'm') {
		return N(b) ? T$.getMeasuredFPS(b)
				: T$.getMeasuredFPS()
	}
	if (a == 'tk') {
		return Ed(T$)
	}
}
cj.stop = function () {
	cjs.Ticker.removeAllEventListeners()
}
cjs.reggy = reggy = function (o, s) {
	s = s || o.parent
	s.bm('me', function (b) {
		b.W(40).H(40)
		I(function () {
			b.XY(o.x + o.regX, o.y + o.regY)
		}, 100)
	})
}
T = cjs.Ticker
eD = cjs.EventDispatcher.prototype
cj.t = cj.tick = function (func) {
	func();
	cjs.Ticker.on('tick', func)
}
drag = cjs.SL = LS = cjs.bindSlide = SL = function () {
	var g = G(arguments)
	var b = g.f
	var b2 = g.s || b
	return b.on('mousedown', function (e) {
		var bx = b2.x - e.rawX
		var by = b2.y - e.rawY
		b.on('pressmove', function (e) {
			if (!g.p) {
				b2.x = bx + e.rawX
			}
			if (!g.n) {
				b2.y = by + e.rawY
			}
		})
	})
}
ct.u = ct.upd = function () {
	this.update();
	return this
}
ct._A = function () {
	return this.addChild.apply(this, arguments)
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
tx.Tx = tx.tx = tx.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
	return this
}


