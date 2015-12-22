$L('proto','anim')
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
function proto() {
	$pt.eD = cj.ED.prototype
	gx = $pt.gx = cj.Gx.prototype
	st = $pt.st = cj.St.prototype
	ct = $pt.ct = cj.Ct.prototype
	h = $pt.h = cj.H.prototype
	dO = $pt.dO = cj.DO.prototype
	lQ = ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	tx = t = cj.Tx.prototype
	tk = $pt.tk = cj.Tk.prototype
}
function anim() {
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
}
function _pre(){
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
}
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
T = cjs.Ticker
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
cj.t = cj.tick = function (func) {
	func();
	cjs.Ticker.on('tick', func)
}
cj.tick2 = function (func) {
	cjs.Ticker.addEventListener('tick', func)
	return cjs.Ticker
}
cj.stopListening = function () {
	cjs.Ticker.removeAllEventListeners()
}
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
$t = function (fn) {
	T.t(fn)
}
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
	if (g.u) {return ct.mouseChildren}
	ct.mouseChildren = g.f ? true : false
	return ct
}
st.eMO =st.mO = function (ms) {
	var st = this, g = G(arguments)
	if (U(g[0]) || g[0]) {st.enableMouseOver(N(g[0]) ? g[0] : true)}
	else {st.enableMouseOver(g.f? true: false)}
	return st
}
st.mMO = function () {
	var st = this, g = G(arguments)
	if (g.u) {return st.mouseMoveOutside}
	st.mouseMoveOutside = g.f ? true : false
	return st
}
st.mIB = function () {
	var st = this, g = G(arguments)
	if (g.u) {return st.mouseInBounds}
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
dO.dg = dO.drag = dO.SL = function () {
	drag(this);
	return this
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
$.me = function (name, fn) {
	if (F(name)) {
		return $.i('me', name)
	}
	window[name] = function () {
		$.i('me', fn)
	}
}
ct.bm = function () {
	ct._bm = function (i, fn) {
		var ct = this
		$.i(i, function (i) {
			ct.A(bm = $Bm(i))
			if (F(fn)) {
				fn(bm)
			}
		})
		return ct
	}
	var ct = this, g = G(arguments), o, bmp
	o = N(g.s) ?
	{i: g.f, sc: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	o.sc = N(o.sc) ? o.sc : 1
	if (_.iDU(o.i)) {
		//return s$(a).contains('data:')
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		bmp = $Bm(o.i).a2(ct)
		if (o.fn) {
			o.fn(bmp)
		}
		return ct
	}
	$.i(o.i, function (i) {
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
}
ct.Bm = function (i) {
	return $Bm(i).a2(this)//this.bm.apply(this, arguments)
}
_$Bm = function (i) {
	return new cjs.Bitmap(i)
}
$Bm = cjs.bitmap = cjs.bm = function () {
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
