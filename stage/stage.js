$L('shit', 'bool', 'stgPt', 'tran', 'evDisp', 'tikr', 'load', 'matx', 'cntr', 'keys')
function shit() {
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
		h = $h(0, 0).drag().a2(st)
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
}
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
function tran() {
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
	cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
	cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
	}
	cjs.bindScale = SC = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'), pm = oE('pm'), b2 = b2 || b,
				cp = function (n) {
					return n < .2 ? .2 : n > 2 ? 2 : n
				}
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY,
							sx = b2.scaleX,
							sy = b2.scaleY
					b.on(pm,
							function (e) {
								if (g.n) {
									b2.sXY(cp(sx + (
											(e.rawX - X) / 200)),
											cp(sy - ((e.rawX - X) / 200))
									)
								}
								else if (g.p) {
									cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
								}
								else {
									b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								}
							})
				}
		)
	}
	cjs.bindSkew = SK = function (b) {
		var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
		return b.on(d,
				function (e) {
					var X = e.rawX, Y = e.rawY
					b.on(pm, function (e) {
						b2.kXY(
								(e.rawY - Y) * .5, (e.rawX - X) * .5
						)
					})
				})
	}
	cjs.bindTransform = TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.bindSlide(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.bindScale(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.bindRotate(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1] || b
		cjs.SL(b);
		cjs.RT(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.bindSlideAndRotate = KK = function (b, b2) {
		var g = G(arguments), b = g[0],
				b2 = g[1] || b
		cjs.bindSlide(b);
		cjs.bindRotate(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.bindRotateThenSkew = RK = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
		var g = G(arguments), b = g[0], b2 = g[1] || b
		cjs.SL(b);
		cjs.RT(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
		var g = G(arguments), b = g[0],
				b2 = g[1] || b
		cjs.bindSlide(b);
		cjs.bindRotate(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
		var g = G(arguments), b = g[0],
				b2 = g[1] || b
		cjs.bindSlide(b);
		cjs.bindRotate(b, b2)
		if (g.p) {
			b.rgc('+')
		}
		if (g.N) {
			//    reggy(b,b2)
		}
	}
	cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
		var g = G(arguments), b = g[0], b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b,
				m = g[2] || 'RT'
		//if(g.p){var s=St('y',1000)
		//    _t(b||5,function(i){s.a().bm(
		//        function(bm){bm.xy(i*50);TR(bm)})});return s}
		if (m == 'RT') {
			RT(b, b2);
			m = 'SK'
		}
		else if (m == 'SK') {
			SK(b, b2);
			m = 'RT'
		}
		return b.on(oE('pu'),
				function (e) {
					Do(b).O();
					RK(b, b2, m)
				})
	}
	cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
	cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
	}
}
function evDisp() {
	eD = cjs.EventDispatcher.prototype
	eD.dE = eD.dispatchEvent
	eD.hEL = eD.hasEventListener
	eD.O = eD.off
	eD.o = eD.on
	eD.rAEL = eD.removeAllEventListeners
	eD.rEL = eD.removeEventListener
	eD.tS = eD.toString
	eD.wT = eD.willTrigger
	eD.aEL = eD.addEventListener
	eD.init = function () {
		
		//note: 'initialize' is the only STATIC method of eventDispatcher
		this.initialize.apply(this, arguments)
		return this
	}
}
function tikr() {
	T = cjs.Ticker
	cjs.ticker = tt = function (a, b, c) {
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
	cjs.stop = function () {
		cjs.Ticker.removeAllEventListeners()
	}
	tickX = function (e) {
		j.Y(e.delta / 1000 * 100, '-')
	}
	timeStamp2 = function (s, j, pxPerSec) {
		var fn = function (s, e) {
			if (!N(j.ts)) {
				j.ts = 0;
				j.lts = e.ts
			}
			else {
				j.ts = e.ts - j.lts;
				j.lts = e.ts
				j.y((j.ts / 1000) * pxPerSec, '-')
			}
		}
		return s.t(fn)
	}
	cjs.t = cjs.tick = function (func) {
		func();
		cjs.Ticker.on('tick', func)
	}
	cjs.tick2 = function (func) {
		cjs.Ticker.addEventListener('tick', func)
		return cjs.Ticker
	}
	cjs.stopListening = function () {
		cjs.Ticker.removeAllEventListeners()
	}
	$t = T.t = cjs.t = cjs.tick = function (fn) {
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
	T.p = function () {
		T.setPaused(false);
		return T
	}
	T.P = T.s = function () {
		T.setPaused(true);
		return T
	}
	T.s = cjs.xL = function () {
		T.removeAllEventListeners()
	}
	T.$ = function () {
		T.setPaused(T.getPaused() == false ? true : false)
		return T
	}
	T.i = function () {
		//indicates the target time (in ms) between ticks
		//default is 50 (20 fps)
		//Note: actual time between ticks may be more than specified,
		//  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
		return T.interval
	}
	T.f = function (numTicks) {
		var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
		if (N(numTicks)) {
			T.setFPS(numTicks);
			return T
		}
		return g.n ?
				T.getFPS() :
				T.getMeasuredFPS() //returns *ACTUAL* frames
		// / ticks per second//
		// Depending on performance,
		// this may differ from the target frames per second.
	}
	T.e = function (runTimePropReturnedInsteadOfTime) {
		//Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
		T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
	}
	T.m = function (ticks) {
		return T.getMeasuredTickTime(ticks)
	} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
	T.iP = function () {
		return T.getPaused()
	}
}
function load() {
	_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
	_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
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
	$Mf = function (mf, fn) {
		return $Ld(fn).mf(mf)
	}
	_$Ld = function () {
		return new cjs.LoadQueue(true)
	}
	$Ld = $ld = cjs.lQ = Q = function () {

//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
		var g = G(arguments), o
		o = g.F_ ? {done: g.f, file: g.s} :
				(g.A_ || g.S_) ? {mf: g.f, done: g.s, file: g.t} :
						g.f
		o.mf = o.mf || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
		var ld = _$Ld()
		if (o.file) {
			ld.file(o.file)
		}
		if (o.done) {
			ld.done(function (e) {
				
				//o.done(function(i) {return ld.i(i)}, e)
				o.done(ld)
			})
		}
		if (o.mf) {
			ld.mf(o.mf)
		}
		Q = ld
		Q.ran = true
		return Q
	}
	Q.ran = false
	Q1 = function (imgs, fn) {
		var q = cjs.lq()
		mf = []
		_.e(imgs, function (v) {
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		q.manifest(mf)
		q.complete(function () {
			fn(q)
		})
	}
	ld = cjs.LoadQueue.prototype
	ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
		i = this.getResult(i);
		i.w = i.width;
		i.h = i.height;
		return i
	}
	ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
		if (F(fn)) {
			this.on("complete", fn)
		}
		return this
	}
	ld.bm = ld.b = function (i, ct, x, y) {
		var ld = this
		var bm = _$Bm(ld.get(i))
		if (N(ct)) {
			bm.XY(ct, x)
		}
		else if (O(ct)) {
			bm.a2(ct, x, y)
		}
		return bm
	}
	ld.mf = function (mf) {
		// q.mf protosig: 
		// (1) 'me',..
		// (2)  {src:'me', id:'him'},.. 
		// (3) [ {src:*, id:*}, 'me',.. ]		
		mf = $its(A(mf) ? mf : G(arguments))
		this.loadManifest(mf)
		return this
	}
	function fileLoad() {
		ld.dfF = cjs.handleFileLoad = function (e) {
			alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
			images = window['images'] || {}
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
			this.on("fileload", fn)
			return this
		}
	}
	
	ld.jQuery = ld.$ = function (i) {
		return $(this.i(i))
	}
	ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
		var b, g = G(arguments)
		b = Q.b(name)
				.XY(N(x, 0), N(y, 0))
				.sXY(N(sX, 1), N(sY, sX || 1))
				.rt(N(rt, 0))
		if (!g.n) {
			b.rC()
		}
		if (g.p) {
			b.drag()
		}
		this.A(b);
		return b
	}
	function later() {
		cjs.mf = cjs.manifest = function () {
			var g = G(arguments)
			var mf = []
			_.e(g, function (i) {
				mf.push($it(i))
			})
			return mf
		}
		cjs.handleFileLoad = function (e) {
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
			alert('manifest')
			return cjs.mf.apply(null, _.m(a.images, function (i) {
						return _.crs(i)
					})
			)
		}
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
function keys() {
	events = ['added',
		'mouseover', 'rollover', 'rollout', 'mouseout',
		'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
		'removed',
		'tick'
	]
	function KEYCONTROLSOB() {
		ob.keyControls = function (num) {
			var args = G(arguments),
					that = this
			if (args.P) {
				$.kD('left', function () {
					that.toL(num)
				})
				$.kD('right', function () {
					that.toR(num)
				})
			}
			if (args.N) {
				$.kD('up', function () {
					that.toU(num)
				})
				$.kD('down', function () {
					that.toD(num)
				})
			}
		}
	}
	
	function prevKeyFns() {
		$.k = $.key = $.kD = function self(k, fn) {
			if (O(k)) {
				_.e(k, function (fn, k) {
					if (s$(k).isUpper()) {
						$.kU(k.toLowerCase(), fn)
					}
					else {
						$.kD(k, fn)
					}
				})
				return
			}
			if (KEYOB[k]) {
				k = KEYOB[k]
			}
			$('body').on('keydown', function (e) {
				if (e.which == k) {
					fn(e, $.K)
				}
			})
		}
		$.kU = function (k, fn) {
			if (keyObj[k]) {
				k = keyObj[k]
			}
			$('body').on('keyup', function (e) {
				if (e.which == k) {
					fn(e, $.K)
				}
			})
		}
		$.spc = function (fn) {
			return $.kD('space', fn)
		}
		K = function (k, fn) {
			var g = G(arguments), o, key
			if (g.u) {
				if (K._loaded) {
					return
				}
				$.kD('l', function () {
					if ($.test) {
						$l('left pressed')
					}
					K.l = $.K.l = $.K.left = true
					$.K.dir = 'left'
					K.l = 1;
					K.L = 0
				})
				$.kU('l', function () {
					if ($.test) {
						$l('left lifted')
					}
					K.l = $.K.l = $.K.left = false
					K.l = 0;
					K.L = 1
				})
				$.kD('r', function () {
					if ($.test) {
						$l('right pressed')
					}
					K.r = $.K.r = $.K.right = true
					$.K.dir = 'right'
					K.r = 1;
					K.R = 0
				})
				$.kU('r', function () {
					if ($.test) {
						$l('right lifted')
					}
					$.K.r = $.K.right = false
					K.r = 0;
					K.R = 1
				})
				$.kD('u', function () {
					if ($.test) {
						$l('up pressed')
					}
					$.K.u = $.K.up = true
					K.u = 1;
					K.U = 0
				})
				$.kU('u', function () {
					if ($.test) {
						$l('up lifted')
					}
					$.K.u = $.K.up = false
					K.u = 0;
					K.U = 1
				})
				$.kD('d', function () {
					if ($.test) {
						$l('down pressed')
					}
					$.K.d = $.K.down = true
					K.d = 1;
					K.D = 0
				})
				$.kU('d', function () {
					if ($.test) {
						$l('down lifted')
					}
					$.K.d = $.K.down = false
					K.d = 0;
					K.D = 1
				})
				K._loaded = 1
				return
			}
			if (O(k)) {
				if (g.p) {
					if (F(k.u)) {
						z(function () {
							if (K.u) {
								k.u(K.u)
							}
						})
					}
					if (F(k.d)) {
						z(function () {
							if (K.d) {
								k.d(K.d)
							}
						})
					}
					if (F(k.l)) {
						z(function () {
							if (K.l) {
								k.l(K.l)
							}
						})
					}
					if (F(k.r)) {
						z(function () {
							if (K.r) {
								k.r(K.r)
							}
						})
					}
				}
				else {
					_.e(k, function (fn, k) {
						K(k, fn)
					})
				}
				return
			}
			o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
			if (g.p) {
				return z(function () {
					if (K[k]) {
						fn()
					}
				})
			}
			key = Key(o.k)
			return $('body').on(o.on, function (e) {
				if (e.which == key) {
					fn(e)
				}
			})
			function Key(k) {
				var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
				return ob[k] ? ob[k] : k
			}
		}
	}
	
	$.K = function (o) {
		alert('$.K')
		if (!O(o)) {
			return
		}
		if (F(o.u)) {
			cjs.tick(function () {
				if ($.K.u) {
					o.u($.K.u)
				}
			})
		}
		if (F(o.d)) {
			cjs.tick(function () {
				if ($.K.d) {
					o.d($.K.d)
				}
			})
		}
		if (F(o.l)) {
			cjs.tick(function () {
				if ($.K.l) {
					o.l($.K.l)
				}
			})
		}
		if (F(o.r)) {
			cjs.tick(function () {
				if ($.K.r) {
					o.r($.K.r)
				}
			})
		}
	}
//alert
	cjs.watchKeys = function () {
		alert('cjs.watchKeys')
		$.K.l = $.K.left = false
		$.K.r = $.K.right = false
		$.K.u = $.K.up = false
		$.K.d = $.K.down = false
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = $.K.left = true
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = $.K.left = false
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = $.K.right = true
			$.K.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = $.K.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = $.K.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = $.K.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = $.K.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = $.K.down = false
		})
	}
//$.space = function (fn) {return $.kD('space', fn)}
}
function cntr() {
	p = ct = cjs.Container.prototype
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
	ct.u = ct.upd = function () {
		this.update();
		return this
	}
	ct.xCh = ct.removeAll = ct.clr = ct.E = function () {
		var ct = this
		ct.each(function (ch) {
			ch.remove()
		})
		return ct
	}
	ct.tkCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.tickChildren
		}
		ct.tickChildren = g.f ? true : false
		return ct
	}
	ct.moCh = ct.muCh = ct.mouCh = function () {
		var ct = this, g = G(arguments)
		if (g.u) {
			return ct.mouseChildren
		}
		ct.mouseChildren = g.f ? true : false
		return ct
	}
	ct.num = ct.nCh = ct.numCh = function () {
		return this.numChildren
	}
	ct.gOUPs = function () {
		return this.getObjectsUnderPoint.apply(this, arguments)
	}
	ct.gOUP = function () {
		return this.getObjectsUnderPoin.apply(this, arguments)
	}
	ct.soCh = ct.sort = function () {
		this.sortChildren.apply(this, arguments)
		return this
	}
	ct.swCh = ct.swap = function () {
		this.swapChildren.apply(this, arguments)
		return this
	}
	ct.swChAt = ct.swapAt = function () {
		this.swapChildrenAt.apply(this, arguments)
		return this
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
	ct.cen = ct.pt = ct.center = function () {
		return V(this.W() / 2, this.H() / 2)
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
	}
	ct.Ct = function () {
		var ct = this
		ct.ct.apply(ct, arguments)
		return ct
	}
	ct.C = ct.bgC = function (c) {
		var ct = this
		$(ct.canvas).C(c)
		return ct
	}
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.t = ct.tick = function () {
		cjs.Ticker.addEventListener('tick', this)
		return this
	}
	ct.t = ct.oT = ct.tick = function (fn) {
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
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.noAutoClear = function () {
		this.autoClear = false
		return this
	}
	ct.eMO = function (en) {
		this.enableMouseOver(en ? true : false);
		return this
	}
	ct.au = function (au) {
		this.autoClear = au ? true : false;
		return this
	}
	ct.noAuCl = function () {
		this.autoClear = false;
		return this
	}
	ct.cir = function () {
		var h = this.h()
		return h.cir.apply(h, arguments)
	}
	ct.cir = function () {
		var ct = this, g = G(arguments),
				h = this.h(), o
		o = g.O ? g.f :
				N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
				{r: g.f, c: g.s}
		o.y = N(o.y, 0);
		o.x = N(o.x, 0)
		o.r = N(o.r, 50)
		h.c(o.c)
		h.dc(o.x, o.y, o.r)
		return h
	}
	ct.circle = function (x, y, rad, color) {
		this.A(
				cjs.circle(x, y, rad, color)
		)
		return this
	}
	ct.h = function () {
		var ct = this
		var h = $H.apply($H, arguments)
		ct.A(h)
		return h
	}
	ct.poly = function () {
		var ct = this // ?
		var h = ct.h()
		h.poly.apply(h, arguments)
		return h
	}
	ct.pol = function () {
		var ct = this, g = G(arguments), p,
				h = ct.h()
		if (N(g.f)) {
			h.XY(
					g.shift(),
					g.shift())
		}
		p = $a(h, 'pol', g)
		if (g.p) {
			p.drag()
		}
		return p
	}
	ct.rec = function () {
		var ct = this, g = G(arguments), o, ct2, h
		if (g.OO_) {
			g.e(this, 'rec');
			return this
		} //it doesnt know that's this! (scope talk)
		o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
				g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
		o.al = N(o.al, 1)
		o.rt = N(o.rt, 0)
		o.c = o.c || 'z';
		o.C = o.C || 'w'
		ct2 = ct.ct();
		h = ct2.h(o.x, o.y);
		h.rt(o.rt);
		h.c(o).al(o.al)
		if (o.lf) {
			h.lf(o)
		} else if (o.rf) {
			h.rf(o)
		}
		if (o.bm) {
			h.bR({i: 'me', hs: [o]})
		}
		else {
			h.rec(o.w, o.h)
		}
		if (g.p) {
			ct.drag()
		}
		return ct2
	}
	ct.shape = function () {
		return cjs.shape.apply(cjs, arguments).a2(this)
	}
	ct.cir = function (x, y, r, f, s, width, opt) {
		return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
	}
	ct.poly = function () { // ?
		var h = this.shape()
		h.poly.apply(h, arguments)
		return h
	}
	ct.art = function (x, y, f, s) {
		var g = G(arguments)
		if (U(x)) {
			alert('must at LEAST define x');
			return
		}
		if (!N(x)) {
			alert('x not a number! but must be, lah');
			return
		}
		y = N(g[1]) ? g[1] : x
		f = S(g[2]) ? oO('c', g[2]) : null
		s = S(g[2]) ? oO('c', g[3]) : f
		var shp = cjs.shp(x, y, f, s)
		this.A(shp)
		if (g.p) {
			shp.drag()
		}
		return shp
	}
	ct.rec = function () {
		var ct = this, g = G(arguments), o, ct2, h
		if (g.OO_) {
			g.e(this, 'rec');
			return this
		} //it doesnt know that's this! (scope talk)
		o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
				g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
		o.al = N(o.al, 1)
		o.rt = N(o.rt, 0)
		o.c = o.c || 'z';
		o.C = o.C || 'w'
		ct2 = ct.ct();
		h = ct2.h(o.x, o.y);
		h.rt(o.rt);
		h.c(o).al(o.al)
		if (o.lf) {
			h.lf(o)
		} else if (o.rf) {
			h.rf(o)
		}
		if (o.bm) {
			h.bR({i: 'me', hs: [o]})
		}
		else {
			h.rec(o.w, o.h)
		}
		if (g.p) {
			ct.drag()
		}
		return ct2
	}
	ct.poly = function () {
		var ct = this, h = ct.h(), g = G(arguments)
		h.pol.apply(h, arguments)
		return !g.p ? h : h.drag()
	}
	ct.pol = function () {
		var ct = this, h = ct.h(), g = G(arguments)
		if (N(g.f)) {
			h.XY(g.shift(), g.shift())
		}
		var h = $a(h, 'pol', g)
		return !g.p ? h : h.drag()
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
	ct.backgroundImage = function (image) {
		var that = this
		this.bm(image, function (b) {
					that.setChildIndex(b, 0)
				}
		)
		return this
	}
	ct.bgI = ct.bg = function (i) {
		var ct = this
		ct.bm(i, function (b) {
			ct.ch(b, 0)
		})
		return ct
	}
	ct.backgroundColor = function (c) {
		$(this.canvas).C(c)
		return this
	}
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
	ct.Bm = function (i) {
		return $Bm(i).a2(this)
	}
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
	p.dot = function (color, x, y) {
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
	p.dot = function (color, x, y) {
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
	p.squareDot = function (color, x, y) {
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
//function DITTO() {
	ct.shape = function () {
		return cjs.shape.apply(cjs, arguments).a2(this)
	}
	ct.cir = function (x, y, r, f, s, width, opt) {
		return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
	}
	ct.poly = function () { // ?
		var h = this.shape()
		h.poly.apply(h, arguments)
		return h
	}
	ct.art = function (x, y, f, s) {
		var g = G(arguments)
		if (U(x)) {
			alert('must at LEAST define x');
			return
		}
		if (!N(x)) {
			alert('x not a number! but must be, lah');
			return
		}
		y = N(g[1]) ? g[1] : x
		f = S(g[2]) ? oO('c', g[2]) : null
		s = S(g[2]) ? oO('c', g[3]) : f
		var shp = cjs.shp(x, y, f, s)
		this.A(shp)
		if (g.p) {
			shp.drag()
		}
		return shp
	}
}
function _pre() {
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
	ob = i = cjs.DisplayObject.prototype
	s = st = cjs.Stage.prototype
	ct = cjs.Container.prototype
	q = cjs.LoadQueue.prototype
	t = cjs.Text.prototype
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
}
cjs.SL = function (b, b2) {
	var g = G(arguments),
			b = g[0], b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX, by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (!g.p) {
						b2.x = bx + e.rawX
					}
					if (!g.n) {
						b2.y = by + e.rawY
					}
				})
			}
	)
}