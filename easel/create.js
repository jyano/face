cj = cjs = createjs
T = cj.Tk = cj.Ticker
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
cj.SS = cj.SpriteSheet
cj.MC = cj.MovieClip
cj.Sp = cj.Sprite
cj.SSB = cj.SpriteSheetBuilder
cj.Tl = cj.Timeline
window.$pt = window.$pt || {}
//$l('easel/createCore.js says welcome to EASEL !')

proto()
bool()
function proto() {
	$pt.eD = cj.ED.prototype
	$pt.gx = cj.Gx.prototype
	$pt.st = cj.St.prototype
	$pt.ct = cj.Ct.prototype
	$pt.h = cj.H.prototype
	$pt.dO = cj.DO.prototype
	ld = $pt.ld = $pt.lQ = cj.LQ.prototype
	$pt.ss = $pt.sS = cj.SS.prototype
	$pt.sp = cj.Sp.prototype
	$pt.ssB = $pt.sSB = cj.SSB.prototype
	$pt.tw = cj.Tween.prototype
	$pt.mc = cj.MovieClip.prototype
	$pt.tl = cj.Timeline.prototype
	$pt.mx = cjs.Matrix2D.prototype
	$pt.tx = cj.Tx.prototype
}

cj.PD = function () {
	eD = $pt.eD
	mx = $pt.mx
	tx = t = $pt.tx
	lQ = ld = $pt.ld
	dO = $pt.dO
	h = $pt.h
	ct = $pt.ct
	st = $pt.st
	gx = $pt.gx
}
cj.PD()
function bool() {
	cj.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
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
}
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
$Ldr = function (name, fn) {
	return window[name] = function () {
		$Ld(fn)
	}
}
$L('events', 'transf', 'dobs', 'easelDraw')
function events(){

	ticker()
	loader()
	eventDispatcher()
	
	 function mouse() {
		
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
		 dO.dg = dO.drag = dO.SL = function () {
			 cjs.drag(this);
			 return this
		 }
		 cjs.drag = cjs.SL = LS = cjs.bindSlide = SL = function () {
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
	 }
	 function ticker() {
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
		 cj.t = cj.tick = function (func) {
			 func();
			 cjs.Ticker.on('tick', func)
		 }
		 cj.stop = function () {
			 cjs.Ticker.removeAllEventListeners()
		 }
		 cj.stopListening = function () {
			 cjs.Ticker.removeAllEventListeners()
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
		 
		 DRAWCAR = function () {
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/
//http://www.createjs.com/tutorials/Animation%20and%20Ticker/timeBased.htmlLAYYS = USINGLAYERSINEASEL9 = function () {
			 s = St(500).A()
			 s.bm('me', function (bm) {
				 b = bm
				 bm.sXY(3)
				 drawCar()
				 s.tick(function () {
					 b.x(-1 * (g.x() * 2))
					 b.y(-1 * (g.y() * 2))
				 })
			 })
			 bt = $.bt('safd', function () {
				 s.sXY(2)
			 }).A()
			 function drawCar() {
				 s.bm('guy', function (bm) {
					 g = bm
					 bm.sXY(.5)
					 SL(bm)
				 })
			 }
		 }
	 }
	 function loader() {
		 _mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
		 _MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
		 $Ld = $ld = cjs.lQ = Q = function () {
			 _$Ld = function () {
				 return new cjs.LoadQueue(true)
			 }
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
				 }))
			 }
		 }
	 }
	 function eventDispatcher() {
		 events1 = ['added',
			 'mouseover', 'rollover', 'rollout', 'mouseout',
			 'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
			 'removed',
			 'tick'
		 ]
		 events = ['drawend',
			 'drawstart',
			 'mouseenter',
			 'mouseleave',
			 'stagemousedown',
			 'stagemousemove',
			 'stagemouseup',
			 'tickend',
			 'tickstart'
		 ]
		 eD.aEL = eD.addEventListener
		 eD.hEL = eD.hasEventListener
		 eD.O = eD.off
		 eD.o = eD.on
		 eD.dE = eD.dispatchEvent
		 eD.rAEL = eD.removeAllEventListeners
		 eD.rEL = eD.removeEventListener
		 eD.tS = eD.toString
		 eD.wT = eD.willTrigger
		 EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
		 eD.init = function () {
			 //note: 'initialize' is the only STATIC method of eventDispatcher
			 this.initialize.apply(this, arguments)
			 return this
		 }
		 dO.uM = dO.underMouse = function () {
			 var dO = this, stg = dO.getStage()
			 if (stg.mouseInBounds) {
				 var pt = dO.gTL(stg.mouseX, stg.mouseY)
				 return dO.hitTest(pt.x, pt.y)
				 // alt : return hitTest( pt )
			 }
		 }
		 dO.mouEn = function (en) {
			 var dO = this, g = G(arguments)
			 if (g.u) {
				 return dO.mouseEnabled
			 }
			 dO.mouseEnabled = g.f ? true : false
			 return dO
		 }
		 dO.$ = dO.click = function (fn) {
			 return this.on('click', fn)
		 }
		 dO.$$ = dO.dblclick = function (fn) {
			 return this.on('dblclick', fn)
		 }
		 st.eDE = function () {
			 var st = this, g = G(arguments)
			 st.enableDOMEvents.apply(st, arguments)
			 return st
		 }
	 }
	 function keyControl() {
	 
		 dO.keyControls = function (num) {
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
//$.space = function (fn) {return $.kD('space', fn)}
		 }
		 st.hEv = function () {
			 var st = this, g = G(arguments)
			 if (g.u) {
				 return st.handleEvent
			 }
			 st.handleEvent = g.f
			 return st
		 }
	 }
	
	// keyControl()
	mouse()
	
}
 
function transf(){
affine()
bounds()
center()
reggy()
tran()

	function affine() {
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			function alt() {
				dO.scX = dO.sX = function (n) {
					var dO = this
					if (U(n)) {
						return dO.scaleX
					}
					dO.scaleX = n
					return dO
				}
				dO.scY = dO.sY = function (n) {
					var dO = this
					if (U(n)) {
						return dO.scaleY
					}
					dO.scaleY = n
					return dO
				}
				dO.scXY = dO.sXY = function (x, y) {
					var dO = this,
							g = G(arguments), v
					if (U(g[0])) {
						return dO
						return {x: dO.sX(), y: dO.sY()}
					}
					v = V(g[0], g[1])
					x = _.tN(v.x)
					y = _.tN(v.y, v.x)
					dO.sX(x)
					dO.sY(y)
					return dO
				}
			}
			
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			function alt() {
				dO.skX = dO.kX = function (skewX) {
					if (U(skewX)) {
						return this.skewX
					}
					this.skewX = skewX;
					return this
				}
				dO.skY = dO.kY = function (skewY) {
					if (U(skewY)) {
						return this.skewY
					}
					this.skewY = skewY;
					return this
				}
				dO.skXY = dO.kXY = function (x, y) {
					y = N(y) ? y : x
					return this.kX(x).kY(y)
				}
			}
			
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
		dO.rt = dO.rot = function (rotation) {
			function alt() {
				dO.rt = dO.rot = function (rotation) {
					var args = G(arguments);
					rotation = args[0]
					if (args.p) {
						rotation = N(rotation) ? rotation : 1
						return this.rT(this.rotation + rotation)
					}
					if (args.n) {
						rotation = N(rotation) ? rotation : 1
						return this.rT(this.rotation - rotation)
					}
					if (U(rotation)) {
						return this.rotation
					}
					this.rotation = rotation
					return this
					dO.rtAlt = function () {
						var dO = this, g = G(arguments), a = g[0]
						if (g.p) {
							return dO.rt(dO.rotation + _.tN(a, 1))
						}
						if (g.n) {
							return dO.rt(dO.rotation - _.tN(a, 1))
						}
						if (U(a)) {
							return dO.rotation
						}
						dO.rotation = a
						return dO
					}
					dO.rotAlt = function (rotation) {
						var args = G(arguments);
						rotation = args[0]
						if (args.p) {
							rotation = N(rotation) ? rotation : 1
							return this.rT(this.rotation + rotation)
						}
						if (args.n) {
							rotation = N(rotation) ? rotation : 1
							return this.rT(this.rotation - rotation)
						}
						if (U(rotation)) {
							return this.rotation
						}
						this.rotation = rotation
						return this
					}
				}
			}
			
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
		dO.sTf = dO.setTransform
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
			function alt() {
				dO.tf = function () {
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
			}
		}
		TFSP = TFSPIN = TRANSFORMSIMPLE = NOTWORKING = function () {
			angle = 0
			img = $.img('me', handleImageLoad)[0]
			function stop() {
				cjs.Ticker.removeEventListener("tick", tick)
			}
			
			function handleImageLoad() {
				canvas = $.canvas('p', 960, 400).id("testCanvas").A()
				stage = $St(canvas)
				stage.autoClear = true;
				bmp = new createjs.Bitmap(img)
						.rXY(img.width >> 1, img.height >> 1)
						.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
				stage.A(bmp).update();
				cjs.Ticker.timingMode = cjs.Ticker.RAF
				cjs.tick(tick)
			}
			
			function tick(event) {
				angle += 0.01
				var value = Math.sin(angle) * 360
				bmp.rot(value).sXY(value / 360)
				stage.update(event)
			}
			
			/*
			 TFR2 = TRANSFORMSIMPLE = function () {
			 z()
			 angle = 0
			 img = $.img('me', handleImageLoad)[0]
			 function stop() {
			 cjs.Ticker.removeEventListener("tick", tick)
			 }
			 function handleImageLoad() {
			 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
			 stage = cjs.stage(canvas)
			 stage.autoClear = true;
			 bmp = new createjs.Bitmap(img)
			 .rXY(img.width >> 1, img.height >> 1)
			 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			 stage.A(bmp).update();
			 cjs.Ticker.timingMode = cjs.Ticker.RAF
			 cjs.tick(tick)
			 }
			
			 function tick(event) {
			 angle += 0.01
			 var value = Math.sin(angle) * 360
			 bmp.rot(value).sXY(value / 360)
			 stage.update(event)
			 }
			 }
			 */
		}
	}
	
	function bounds() {
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
		dO.nW = function () {
			return this.nominalBounds.width
		}
	}
	
	function center() {
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
	
	function reggy() {
		dO.rgX = dO.rX = function () {
			var dO = this, g = G(arguments), rX = g[0]
			if (U(rX)) {
				return dO.regX
			}
			dO.regX = g.p ?
			dO.regX + rX : rX
			return dO
		}
		dO.rgY = dO.rY = function () {
			var dO = this, g = G(arguments), rY = g[0]
			if (g.p) {
				dO.Y(dO.y + (rY - dO.regY))
			}
			if (U(rY)) {
				return dO.regY
			}
			dO.regY = rY
			return dO
		}
		dO.rXY = dO.rgXY = function () {
			var i = this, g = G(arguments),
					x = N(g.f, 0),
					y = N(g.s, x)
			return i.rX(x).rY(y)
			function alt() {
				dO.rXY = function () {
					var dO = this, g = G(arguments),
							x = _.tN(g[0]),
							y = _.tN(g[1], x)
					return dO.rX(x).rY(y)
				}
			}
		}
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
			function alt() {
				dO.rgc = function () {
					var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
					return (g[0] === 0) ?
							i.rXY(0, 0, (g.p ? '+' : null))
							: i.rXY(x, y, (g.p ? '+' : null))
				}
			}
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rC = function () {
			var i = this, g = G(arguments), x, y, hW, hH
			x = i.W() / 2
			hW = x
			y = i.H() / 2
			hH = y
			return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
					i.rXY(hW, hH)
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
	}
	
	function tran() {
		cjs.bindSlide = cjs.SL = SL = function (b, b2) {
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
		dO.SL = function () {
			SL(this)
			return this
		}
		cjs.bindScale = cjs.SC = SC = function (b, b2) {
			var g = G(arguments), b = g[0], b2 = g[1],
					d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
			function alt() {
				cjs.SC = function (b, b2) {
					var g = G(arguments), b = g[0], b2 = g[1],
							d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
				cjs.bindScale = SC = function (b, b2) {
					var g = G(arguments), b = g[0], b2 = g[1],
							d = 'mousedown', pm = 'pressmove', b2 = b2 || b,
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
			}
		}
		cjs.bindSkew = cjs.SK = SK = function (b) {
			var g = G(arguments), b = g[0], b2 = g[1], d = 'mousedown', pm = 'pressmove', b2 = b2 || b
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
		cjs.bindRotate = cjs.RT = RT = function (b, b2) {
			function alt() {
				RT = function () {
					RT(this);//cjs.RT(i);
					return this
				}
				cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
					var g = G(arguments), b = g[0], b2 = g[1] || b
					if (g.p) {
						alert('g.p')
						b.rgc('+')
					}
					return b.on('mousedown', function (e) {
						var X = e.rawX, Y = e.rawY, r = b2.rotation
						b.on('pressmove', function (e) {
							b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
						})
					})
				}
				cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
					
					
					//b = what the control is
					//b2 what it should control (default = itself!)
					var g = G(arguments), b = g[0], b2 = g[1] || b
					if (g.p) {  // b.rgc( '+' )
					}
					return b.on('mousedown',
							function (e) {
								var X = e.rawX, Y = e.rawY, r = b2.rotation
								b.on('pressmove', function (e) {
									b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
								})
							})
				}
			}
			
			//b = what the control is
			//b2 what it should control (default = itself!)
			//if(g.p){  //b.rgc( '+' )   }
			var g = G(arguments), b = g[0], b2 = g[1] || b
			return b.on('mousedown', function (e) {
				var X = e.rawX, Y = e.rawY, r = b2.rotation
				b.on('pressmove', function (e) {
					b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
				})
			})
		}
		cjs.bindTransform = cjs.TR = TR = function TR(b, b2, m) {
			var g = G(arguments),
					b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
			if (m == 'SL') {
				cjs.SL(b, b2);
				m = 'SC'
			}
			else if (m == 'SC') {
				cjs.SC(b, b2);
				m = 'RT'
			}
			else if (m == 'RT') {
				cjs.RT(b, b2);
				m = 'SL'
			}
			return b.on('pressup', function (e) {
				b.removeAllEventListeners();
				TR(b, b2, m)
			})
			function alt() {
				cjs.TR = function TR(b, b2, m) {
					var g = G(arguments),
							b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
					if (m == 'SL') {
						cjs.SL(b, b2);
						m = 'SC'
					}
					else if (m == 'SC') {
						cjs.SC(b, b2);
						m = 'RT'
					}
					else if (m == 'RT') {
						cjs.RT(b, b2);
						m = 'SL'
					}
					return b.on('pressup', function (e) {
						b.removeAllEventListeners();
						TR(b, b2, m)
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
			}
		}
		dO.TR = function () {
			TR(this);
			return this
		}
	}
}
 

function easelDraw(){
	shapePt()
	hCurve()
	 
	gxKlas()
	grad()
 
	function shapePt() {
		h.ef = function () {
			this.graphics.endFill.apply(
					this.graphics, arguments)
			return this
		}
		h.es = function () {
			var h = this, gx = h.graphics
			gx.es()
			return h
		}
		h.cp = function () {
			this.graphics.cp();
			return this
		}
		h.clr = h.z = h.clear = function () {
			this.graphics.clear();
			return this
		}
		h.dl = h.ln = h.line = function () {
			var h = this, g = G(arguments), o
			o = g.N_ ?
			{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
			{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
			this.mt(o.x1, o.y1).lt(o.x2, o.y2)
			return this
		}
		h._lt = function (x, y) {
			var v = V(x, y)
			this.graphics.lt(v.x, v.y)
			return this
		}
		h.lt = function (x, y) {
			var h = this, gx = h.graphics, g = G(arguments)
			//A(a) && O(a[0])
			if (AO(g.f)) {
				g.e(function (v) {
					h.lt.apply(h, v)
				})
				return h
			}
			O(g.s) ? g.e(function (pt) {
				h.lt(pt)
			}) :
					gx.lt(V(x, y).x, V(x, y).y)
			return h
			function alt() {
				h.lt = function (x, y) {
					var h = this, gx = h.graphics, g = G(arguments)
					if (AO(g.f)) {
						g.e(function (v) {
							h.lt.apply(h, v)
						})
					}
					else if (O(g.s)) {
						g.e(function (pt) {
							h.lt(pt)
						})
					}
					else {
						this.graphics.lt(V(x, y).x, V(x, y).y)
					}
					return this
				}
			}
		}
		h._mt = function (x, y) {
			var g = G(arguments)
			var pt = V(g.f, g.s)
			this.graphics.mt(pt.x, pt.y)
			return this
		}
		h.mt = function () {
			var g = G(arguments), o
			if (g.N) {
				return this._mt(g.f, g.s)
			}
			o = AO(g) ? {
				firPt: _.f(g.f), restPts: _.r(g.f),
				ox: g.s, oy: g.t
			} :
			{firPt: g.f, restPts: g.r}
			return this._mt(
					o.firPt[0] + N(o.ox, 0),
					o.firPt[1] + N(o.oy, 0)
			).lt(M.os(o.restPts, o.ox, o.oy))
		}
		h.same = h.copy = function () {
			return $h(this)
		} // cjs.shape(this)
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
	}
	
	function hCurve() {
		h.qt = function (a, b, c, d, e, f) {
			var h = this, gx = h.graphics
			if (O(a)) {
				a = V(a)
				b = V(b)
				gx.qt(a.x, a.y, b.x, b.y)
			}
			else {
				gx.qt(a, b, c, d, e, f)
			}
			return h
		}
		h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			h.quadraticCurveTo(x, y, r, startA, endA, aCW)
			return h
		}
		h.cur = function (a, b, c, d, e, f, g, h) {
			if (O(a)) {
				return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
			}
			return this.mt(a, b).qt(c, d, e, f, g, h)
		}
		h.de = h.ell = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
							N(g[0]) ? {w: g[0], h: g[1]} :
									O(g[0]) ? g[0] : {}
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.w = _.tN(o.w, 100)
			o.h = _.tN(o.h, o.w)
			gx.drawEllipse(o.x, o.y, o.w, o.h)
			return h
		}
		h.de2 = function (x, y, W, H, r) {
			var h = this
			h.de(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h.rr = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
							N(g[1]) ? {w: g[0], r: g[1]} :
									N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
											O(g[0]) ? g[0] : {}
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.w = _.tN(o.w, 100)
			o.h = _.tN(o.h, o.w)
			gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
			return h
		}
		h.rr2 = function (x, y, W, H, r) {
			var h = this
			h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			h.bezierCurveTo(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			/*
			 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
			 For example, to draw a full circle with a radius of 20 centered at (100, 100):
			 arc(100, 100, 20, 0, Math.PI*2)
			 */
			h.arc(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc2 = function (x, y, X, Y, r) {
			var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
			gx.arcTo(x, y, X, Y, r)
			return h
		}
//
		h.rc = h.roundRectComplex = function () {
			var h = this, gx = h.graphics
			gx.drawRoundRectComplex.apply(gx, arguments)
			return h
		}
		h.qt = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc = h._a = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			/*
			 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
			 For example, to draw a full circle with a radius of 20 centered at (100, 100):
			 arc(100, 100, 20, 0, Math.PI*2)
			 */
			h.arc(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc2 = h._a2 = function (x, y, X, Y, r) {
			var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
			gx.arcTo(x, y, X, Y, r)
			return h
		}
		h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
			var h = this,
					gx = h.graphics
			gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
			return h
		}
		h._qt = function (cpx, cpy, x, y) {
			var h = this, gx = h.graphics
			gx.quadraticCurveTo(cpx, cpy, x, y)
			return h
		}
		h.qt = function (a, b, c, d, e, f) {
			var h = this, gx = h.graphics
			if (O(a)) {
				a = V(a)
				b = V(b)
				gx.qt(a.x, a.y, b.x, b.y)
			}
			else {
				gx.qt(a, b, c, d, e, f)
			}
			return h
		}
		h.de = h.ell = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
							N(g.f) ? {w: g.f, h: g[1]} :
									O(g.f) ? g.f : {}
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.w = _.tN(o.w, 100)
			o.h = _.tN(o.h, o.w)
			gx.drawEllipse(o.x, o.y, o.w, o.h)
			return h
		}
		h.de2 = function (x, y, W, H, r) {
			var h = this
			h.de(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h._rr = function () {
			this.graphics.rr.apply(this.graphics, arguments)
			return this
		}
		h.rr = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
							N(g[1]) ? {w: g.f, r: g[1]} :
									N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
											O(g.f) ? g.f : {}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, 100)
			o.h = N(o.h, o.w)
			return h._rr(o.x, o.y, o.w, o.h, o.r)
		}
		h.rr2 = function (x, y, W, H, r) {
			var h = this
			h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h.rc = h.roundRectComplex = function () {
			var h = this, gx = h.graphics
			gx.drawRoundRectComplex.apply(gx, arguments)
			return h
		}
		h.arc = h._a = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			/*
			 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
			 For example, to draw a full circle with a radius of 20 centered at (100, 100):
			 arc(100, 100, 20, 0, Math.PI*2)
			 */
			h.arc(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc2 = h._a2 = function (x, y, X, Y, r) {
			var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
			gx.arcTo(x, y, X, Y, r)
			return h
		}
		h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
			var h = this,
					gx = h.graphics
			gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
			return h
		}
		h._qt = function (cpx, cpy, x, y) {
			var h = this, gx = h.graphics
			gx.quadraticCurveTo(cpx, cpy, x, y)
			return h
		}
		h.qt = function (a, b, c, d, e, f) {
			var h = this, gx = h.graphics
			if (O(a)) {
				a = V(a)
				b = V(b)
				gx.qt(a.x, a.y, b.x, b.y)
			}
			else {
				gx.qt(a, b, c, d, e, f)
			}
			return h
		}
		h.de = h.ell = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
							N(g.f) ? {w: g.f, h: g[1]} :
									O(g.f) ? g.f : {}
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.w = _.tN(o.w, 100)
			o.h = _.tN(o.h, o.w)
			gx.drawEllipse(o.x, o.y, o.w, o.h)
			return h
		}
		h.de2 = function (x, y, W, H, r) {
			var h = this
			h.de(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h._rr = function () {
			this.graphics.rr.apply(this.graphics, arguments)
			return this
		}
		h.rr = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
							N(g[1]) ? {w: g.f, r: g[1]} :
									N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
											O(g.f) ? g.f : {}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, 100)
			o.h = N(o.h, o.w)
			return h._rr(o.x, o.y, o.w, o.h, o.r)
		}
		h.rr2 = function (x, y, W, H, r) {
			var h = this
			h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h.rc = h.roundRectComplex = function () {
			var h = this, gx = h.graphics
			gx.drawRoundRectComplex.apply(gx, arguments)
			return h
		}
	}
 
	function gxKlas() {
		gx._ss = function () {	//=0//=0//=10//=false
			var gx = this, g = G(arguments)
			if (g.S_) {
				return gx._s(g.f)._ss.apply(gx, g.r)
			}
			var l = N(g.f, 4)
			var caps = g.s == 'r' ? 'round' : g.s == 's' ? 'square' : g.s == 'b' ? 'butt' : g.s
			var jts = N(g.t, 0)
			var mit = g.fo == 'r' ? 'round' : g.fo == 'm' ? 'miter' : g.fo == 'b' ? 'bevel' : N(g.fo, 100)
			var ignSc = g.n ? true : false
			gx.ss(l, caps, jts, mit, ignSc)
			return gx
		}
		gx.F = function (fC) {
			return this._f(fC || 'z')
		}
		gx.S = function (sC) {
			return this._s(sC || 'w')
		}
		gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
			return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
		}
		gx.FS = gx.C = function (f, s, w) {
			// = gx.fs = gx.fC = gx.cCL
			var gx = this
			gx.F(f).S(s).SS(w)
			return gx
		}
		$Gx = function (a) {
			return new cjs.Gx(a).FS()
		}
		gx._mt = function (x, y) {
			var gx = this, g = G(arguments), o
			o = {x: g.f, y: g.s}
			gx.mt(o.x, o.y)
			return gx
		}
		gx._lt = function (x, y) {
			var gx = this, g = G(arguments), o
			o = {x: g.f, y: g.s}
			gx.lt(o.x, o.y)
			return gx
		}
		gx.fancyLt = gx.poly = function (vs, f, s, w) {
			var gx = this, g = G(arguments), o
			o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
			if (o.cCL) {
				gx.cCL.apply(gx, o.cCL)
			}
			_.e(o.vs, function (v) {
				gx.lt(v[0], v[1])
			})
			gx.cp()
			return this
		}
		gx._dc = function () {
			/*
			 // dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
			 example: 
			 var gx = new cjs.Gx().ss(1);
			 gx.s(cjs.Gx.getRGB(0,0,0));
			 gx.f(cjs.Gx.getRGB(255,0,0));
			 gx.dc(0,0,100);
			 var s = new cjs.Shape(g);
			 s.x = 100; 
			 s.y = 100;
			 st.addChild(s);
			 st.update();
			 */
			var gx = this, g = G(arguments), o
			o = g.O ? g.f : N(g.s) ? {x: g.f, y: g.s, r: g.t} : {r: g.f}
			return gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
		}
		gx.cir = function () {
			var gx = this, g = G(arguments), o
			o = g.O ? g.f :
					N(g.s) ?
					{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
					{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
			if (!g.n) {
				o.fC = o.fC || 'z'
				o.sC = o.sC || 'w'
				o.ss = N(o.ss, 4)
			}
			if (o.fC) {
				gx.fC(o.fC)
			}
			if (o.sC) {
				gx.sC(o.sC)
			}
			if (N(o.ss)) {
				gx.ss(o.ss)
			}
			return gx._dc(o)
		}
		gx._dr = function () {
			var gx = this, g = G(arguments), o
			o = g.O ? g.f : N(g.t) ?
			{x: g.f, y: g.s, w: g.t, h: g.fo} :
			{w: g.f, h: g.s}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, 50)
			o.h = N(o.h, 50)
			gx.dr(o.x, o.y, o.w, o.h)
			// drawRect ( x  y  w  h ) Graphics chainable :
			// Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
			return gx
		}
		gx._pol = function () {
			var gx = this, g = G(arguments)
			if (g.A) {
				return gx._pol.apply(gx, g.f)
			}
			gx.mt(g.f0, g.f1)
			_.e(_.r(g), function (pt) {
				gx.lt(pt[0], pt[1])
			})
			return gx.lt(g.f0, g.f1)
		}
		gx.pol = function (pts, f, s, w) {
			var gx = this, g = G(arguments)
			if (N(pts[0])) {
				g.e(function (pt) {
					gx.lt(pt[0], pt[1])
				})
			}
			else {
				gx.FS(f, s, w)
				_.e(pts, function (pt) {
					gx.lt(pt[0], pt[1])
				})
			}
			return gx.cp()
		}
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
		function world() {
			HGXX = NEEDSWORLD = function () {
				W()
				h = w.i.h()
				h.graphics.ss(40, "round", "round")
				h.C("rgba(0,0,0,0.2)").mt(100, 100)
				h.graphics.curveTo(200, 500, 600, 300)
			}
		}
		
		NOTHING = DISTRACT = function () {
			$.d().A($.c(960, 400).id("testCanvas"))
			cjs.sharedCode()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
			st = new cjs.Stage("testCanvas")
		}
		DSTR = ERR = DISTRACTORDOESNOTHING = function () {
			st = stage = $St()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
		}
		NOTHING = DRL = DRAWLINE = XX5 = HDL11 = needsOBx = function () {
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
	
	function grad() {
		setup = function () {
			cv = $('<canvas width=500 height=400 id="canvas">').a2($('body'))
			s = st = stage = new cjs.Stage("canvas", 420, 500, 30)
			h = new cjs.Shape().a2(st)
		}
		$L('linNeedsFixin', 'radial', 'stroke', 'mick', 'nip')
		gx.bLGF = function () {
			return this.beginLinearGradientFill.apply(this, arguments)
		}
		gx.lGF = function () {
			var gx = this, g = G(arguments)
			g[0] = _.m(g[0], function (col) {
				return oO('c', col)
			})
			return gx.bLGF.apply(gx, g)
		}
		h.lg = cjs.lg = function () {
			var g = G(arguments), o//h=this, gx=h.graphics,
			if (g.A) {
				return cjs.lg.apply(null, g.f)
			}
			o = g.O ? g.f :
					_.x({c1: g.f, c2: g.s},
							N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
									: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
									: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
			o.c1 = oO('c', o.c1 || 'z');
			o.c2 = oO('c', o.c2 || 'w')
			o.s1 = N(o.s1, 0);
			o.s2 = N(o.s2, 1)
			o.x1 = N(o.x1, 0);
			o.y1 = N(o.y1, 0)
			o.x2 = N(o.x2, 0)
			o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
			return o
		}
		h.lf = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			o = cjs.lg(g)
			gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.map(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		function linNeedsFixin() {
			LR0 = LINGRAD = function () {
				c = $.c('y').drag()
				x = c.ctx()
				x = c.ctx()
				x.lg({
					x1: 50, y1: 500, y2: 100,
					cS: {o: .2, r: .6, g: .8}
				})
				x.fr(0, 0, 100, 100)
			}
			OVALS8 = GRADS2 = SETTRANSFORM = function () {
				s = $St(800).bm('me', function (me) {
					b = me
					b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
					m = b.getMatrix()
					function tf(a, b, c, d, e, f, g, h, i) {
						return this.x = a || 0,
								this.y = b || 0,
								this.scaleX = null == c ? 1 : c,
								this.scaleY = null == d ? 1 : d,
								this.rotation = e || 0,
								this.skewX = f || 0,
								this.skewY = g || 0,
								this.regX = h || 0,
								this.regY = i || 0,
								this
					}
				})
				//////
				h = s.h(40, 10, 'b', 16).drag()
				h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
				h.c({
					C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
				}).de(400, 100)
				h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
						.de(100, 200, 500, 300)
				h.ls('r', 'w', 300, 100, 400, 140)
						.de(300, 0, 300, 500)
				//B+
			}
		}
		
		function radial() {
		}
		
		function stroke() {
			h.ls = function me() {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (A(g[0])) {
					return me.apply(h, g[0])
				}
				o = h.lg.apply(h, g)
				gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
				return h
			}
			h.rs = function me() {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (A(g[0])) {
					return me.apply(h, g[0])
				}
				o = h.rg.apply(h, g)
				gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
				return h
			}
			h.ls = function me() {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (A(g[0])) {
					return me.apply(h, g[0])
				}
				o = h.lg.apply(h, g)
				gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
				return h
			}
			h.rs = function me() {
				var h = this, gx = h.graphics, g = G(arguments), o
				if (A(g[0])) {
					return me.apply(h, g[0])
				}
				o = h.rg.apply(h, g)
				gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
				return h
			}
			LINSTROKE = DRAGST = GRADOVALS = function () {
				setup()
				h = s.h(40, 10, 'b', 16).drag()
				h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
				h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
				h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
				h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
			}//B
		}
		
		function mick() {
			ct.mick = function (x, y, lf) {
				var ct = this,
						h = ct.h(x, y).drag()
								.c({l: 20, C: 0, lf: lf || 1})
								.dc([50], [200, 0, 100], [100, 100, 100])
				ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
				return h
			}
			MICK = function () {
				$St()
				s.mick(500, 200)
				s.mick(700, 100, {c1: 'b', c2: 'X'})
				s.mick(700, 300, {c2: 'b'})
				s.mick(100, 100, {y2: 10})
				s.mick(100, 200, {y2: 200})
				s.mick(100, 300, {x2: 100})
			}
		}
		
		function nip() {
			NIP = CIRCRG8 = GRADS = function () {
				s = St()
				nip = function () {
					x1 = 0
					y1 = 0
					r1 = 10
					x2 = 0
					y2 = 0
					r2 = 100
					var h = $h(10, 10).a2(s).drag().al(.8)
					h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
							x1, y1, r1, x2, y2, r2)
							.dc(0, 0, 100)
							.endFill()
					return h
				}
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = $h(10, 10).a2(s).drag()
				change = function () {
					//  h.remove()
					// h=cjs.h(10, 10).a2(s).drag()
					h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				h2 = $h(500, 100).a2(s);
				h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
				////////
				s.h(600, 300).graphics.rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(600, 100).graphics.rf(
						['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(800, 300).rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(400, 300).rf(
						['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h().cir(0, 0, 10)
			}//C
		}
	}
	
 
	
	NEEDS$DF = CJSME = function () {
		$St()
		cjs.me = function (fn) {
			Q(['me'], function (q) {
				fn(q.getResult('me'))
			})
		}
		cjs.me(function (i) {
			h.c({
				l: 200,
				rf: ['w', 'u', 800],
				rs: {c1: 'w', c2: 'x', r2: 800}
			}).dc({x: 0, y: 0, r: 200})
			st.h().c({
				l: 200,
				lf: {c1: 'w', c2: 'u', y2: 200},
				ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
			}).dc({x: 0, y: 0, r: 200})
			st.h().lf('y', 'r', 10).dc({r: 200}).c({
				l: 0,
				c: 'y',
				//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
				bs: i, bf: i
			}).dc({r: 200})
			st.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40)
		})//D
	}
	function filter() {
		mapFilt()
		alphaMask()
		blurFl()
		colorFl()
		colMxFl()
		caching()
		function mapFilt() {
			AlphaMapFilter = $aMFl = $aMF = function (a, b, c, d, e) {

//Map a greyscale image to the alpha channel of a display object
				return new cjs.AlphaMapFilter(a, b, c, d, e)
			}
			dO.aMF = function (a, b, c, d, e, f, g, h) {
				var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
		}
		
		function alphaMask() {
			forMaskFilter = function trx(n) {
				var g = G(arguments)
				var a = []
				//for making mask filter
				if (g.n) {
					return 'rgba(0,0,0,' + g[0] || 0 + ')'
				}
				_.e(g, function (n) {
					a.push(trx(n, '-'))
				})
				return a
			}
			dO.aF = function (h) {
				var ob = this
				ob.fl($AF(h))
				return ob
			}
			dO.aF2 = function (h) {
				var ob = this
				this.fl2($AF(h))
				return ob
			}
			AlphaMaskFilter = $aFl = $Afl = $AF = $Af = function (a, b, c, d, e) {
				//Map an image's alpha channel to the alpha channel of a display object
				var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
				if (O(a) && a.cacheCanvas) {
					a = a.cacheCanvas
				}
				fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
				return fl
			}
			dO.aF = function (a, b, c, d, e, f, g, h) {
				var bf
				bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
		}
		
		function blurFl() {
			_$Bfl = function (x, y, q) {
				return new cjs.BlurFilter(x, y, q)
			}
			$Bfl = BlurFilter = $bFl = $BF = $Bf = $FB = $FlB = $bF = function () {
				var g = G(arguments), fl, o
				o = {x: g.f, y: g.s, q: g.t}
				o.y = N(o.y) ? o.y :
						o.x
				o.q = o.q || 1
				return _$Bfl(o.x, o.y, o.q)
			}
			dO.flBds = function () {
				return this.gFl().getBounds()
			}
			dO.bF = function (a, b, c, d, e, f, g, h) {
				var bf
				bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
		}
		
		function colorFl() {
			$cFl = ColorFilter = function (a, b, c, d, e, f, g, h) {
				return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
			}
			dO.cF = function (a, b, c, d, e, f, g, h) {
				var cf = $cF(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(cf)
				return cf
			}
		}
		
		function colMxFl() {
			ColorMatrix = $CM = $Cm = $cM = function (a, b, c, d, e) {
				var m = new cjs.ColorMatrix(a, b, c, d, e)
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
			cM = cjs.ColorMatrix.prototype
			cM.s = function (s) {
				this.adjustSaturation(s)
				return this
			}
			cM.c = function (c) {
				this.adjustContrast(c)
				return this
			}
			cM.ch = function (c) {
				this.adjustHue(c)
				return this
			}
			cM.b = function (c) {
				this.adjustBrightness(c)
				return this
			}
			ColorMatrixFilter = $CMF = $cMFl = $CmF = $cMF = function (a, b, c, d) {
				return new cjs.ColorMatrixFilter(O(a) ? a : $CM(a, b, c, d))
			}
			GREY = function () {
				Q(function () {
					Q.b('me').a2($St())
							.fl($cMF($cM().s(-100)))
							.ca(0, 0, 1000, 1000)
				})
			}
			FT10 = FILTRS = function () {
				Q(function () {
					s = $St().t()
					i = Q.i('me')
					b = s.qB('me', .8, '+')
					/////////////////////////
					//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
					cM = $cM()
					cM.adjustBrightness(-400)
					//cM.adjustHue(-180)
					cM.c(80)
					//cM.c(-100)
					b._(400, 200, '+').fl($cMF(cM), i)  //zW
					///////////////////////
					// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
					// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
				})
			}
			dO.cMF = function (cM) {
				var cf = new cjs.ColorMatrixFilter(cM)
				this.filters = this.filters || []
				this.filters.push(cf)
				return cf
			}
			CMXF1 = function () {
				$St()
				var shape = new createjs.Shape().set({x: 100, y: 100});
				shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
				var matrix = new createjs.ColorMatrix()
						.adjustHue(180)
						.adjustSaturation(-100);
				shape.filters = [
					new createjs.ColorMatrixFilter(matrix)
				];
				shape.cache(-50, -50, 100, 100);
				$St().A(shape)
			}
		}
		
		function caching() {
			dO.uCx = dO.updateContext
			dO.caCv = dO.cC = dO.cc = function () {
				return this.cacheCanvas
			}
			dO.gCDU = function (ca) {
				return this.getCacheDataURL(ca)
			}
			dO.uCa = dO.updCa = function (ca) {
				this.updateCache(ca);
				return this
			}
			dO.uc = dO.uncache = function (ca) {
				this.uncache(ca);
				return this
			}
			dO.__ca = function () {
				this.cache.apply(this, arguments);
				return this
			}
			dO._ca = function (x, y, w, h) {
				var dO = this
				x = N(x, 0)
				y = N(y, 0)
				w = N(w, dO.width)
				h = N(h, dO.height)
				dO.__ca(x, y, w, h)
				return dO
			}
			dO.ca = function () {
				var dO = this, g = G(arguments), o
				var st = dO.getStage()
				var op
				if (!g.n && !g.p && O(dO.image)) {
					dO._ca($(dO.image)[0])
				}
				if (passTest(g)) {
					op = g.f;
					dO.updCa(op);
					return dO
				}
				o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
				{x: g.f, y: g.s, w: g.t, h: g.f} :
						N(g.s) ? {w: g.f, h: g.s} : {}
				if (O(o.i)) {
					o.i = toImg(o.i)
					dO = toObImg(dO)
					if (!g.n) {
						dO._ca()
					}
				}
				o.x = N(o.x, 0)
				o.y = N(o.y, 0)
				o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
						st ? st.W() : 0)
				o.h = N(o.h) ? o.h :
						O(o.i) ? o.i.height :
								st ? st.H() : 0
				return dO._ca(o.x, o.y, o.w, o.h)
			}
			function passTest(g) {
				return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
			}
			
			function toObImg(i) {
				return $(i.image ? i.image : i)[0]
			}
			
			function toImg(i) {
				return i.image ? i.image : $(i)[0];
			}
		}
	}
	
	function old() {
		UGUNSHIP = function () {
			angleInDegrees = function self(y, x) {
				if (O(y)) {
					return self(y.vy, y.vx)
				}
				var d = tDeg(Math.atan(y / x))
				if (x < 0) {
					d = Math.abs(d) + 90;
					if (y < 0) {
						d = Math.abs(d) + 90
					}
				}
				return d
			}
			ship = function (st) {
				t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
				t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
				kD('d', function () {
					t.rt(6, '+')
				})
				kD('u', function () {
					t.rt(6, '-')
				})
				if (st) {
					st.A(t)
					st.on('stmousedown', function (event) {
						e = event
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
				setInterval(function () {
					t.X(t.vx, '+').Y(t.vy, '+')
					t.rotation = angleInDegrees(t)
				}, 10)
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
					}).hide(),
					$.bt('sgun', function () {
						sgun(guy)
					})
			)
			boot = $.boot()
			st = createjs.st(800, 600).tick()
			boot.A(
					div,
					st.canvas
			)
			guy = ship(st)
			// kD('s',function(){ $l('bang')})
			// _.times(100,function(){var a=ast();a.a();a.p()})
			// st.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
			sgun(guy)
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
	}
	
	ct.h = function () {
		var ct = this
		var h = $H.apply($H, arguments)
		ct.A(h)
		return h
	}}
  