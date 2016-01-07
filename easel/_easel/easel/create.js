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

$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
 

cjs.St=cjs.Stage
easelText()
$St =  cjs.stg = cjs.stage = function () {
	var _$St = function (cv) {
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
	var g = G(arguments)
	var st = _$St.apply(null, arguments)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	st.can = st.c = $(st.canvas)
	st.t()
	if (g.m) {st.b('me')}
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
_$Bm=function(i){
	return	new cjs.Bitmap(i)
}
$Bm = cjs.bitmap = cjs.bm = function () {var g = G(arguments)
	var  i = g[0]
	//return new cjs.Bitmap(i)
	//if (O(i)) {
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {bm.drag()}
			return bm
		}
		
		bm = $Bm(i.i)
		if (i.al) {bm.al(i.al)}
		if (i.fl) {bm.fl(i.fl)}
		if (i.aF2) {bm.aF2(i.aF2)}
		if (g.N) {bm.rCenter()} // should be !g.n ?
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

//klass:
i.of = function (k) {
	this._K = this._K || []
	return !k || this == k || _.ct(this._K, k)
}
i.K = function () {
	var i = this, g = G(arguments)
	this._K = this._K || []
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this._K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!i.of(k)) {
			i._K.push(k)
		}
	})
	return this
}//i.of=function(k){return this.K()==k || this.K()==''}


//matrix:
cjs.M = cjs.Mx = cjs.Matrix2D
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
//advanced:
cjs.bulletHit = function (bullet, inWhat) {
	var x = bullet.centerX(),
			y = bullet.centerY()
	var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
	if (res == true) {
		$l('hit!')
	}
	return res
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.c(a, b, c)
	can2 = $.c('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
cjs.tripleStage = function (color, w, h) {
	var stage, can0, can1, can2
	can0 = $.can(color, w, h).P('a').XY(0, 0)
	can1 = $.can('X', w, h).P('a').XY(0, 0)
	can2 = $.can('X', w, h).P('a').XY(0, 0)//.opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.back = new cjs.Stage(can0[0]).tick()
	stage.back.linGrad = function (col1, col2) {
		col1 = oO('c', col1 || 'b');
		col2 = oO('c', col2 || 'r')
		var h = this.H(), w = this.W()
		this.shape.linGrad([col1, col2], [0, 1], 0, 0, 0, h).dr(0, 0, w, h)
	}
	stage.back.shape = stage.back.shape(0, 0, 'w')
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
gx._f = function (col) {
	return this.f(oO('c', col))
}
gx._s = function (col) {
	return this.s(oO('c', col))
}
gx._ss = function (thickness, caps, joints, miterLm, ignoreScale) {
	var gx = this//=0//=0//=10//=false
	gx.setStrokeStyle(thickness, caps, joints, miterLm, ignoreScale)
	return gx
}
gx.C = gx.fC = gx.cCL = gx.fs = function (f, s, w) {
	return this._f(f || 'z')._s(s)._ss(N(w, 2))
}
gx.col = gx.sC = function (sCol, thickness) {
	return this._s(sCol).SS(thickness)
}
gx.F = function (col) {
	return this._f(col || 'z')
}
gx.FS = function () {
	return this.F().S().SS()
}
gx.S = function (col) {
	return this._s(col || 'w')
}
gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
	return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
}
gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}
gx._bs = function (i, tf) {
	return this.bs(i, null, tf)
}

 function mouse(){
	 MOUSEENTERSTAGE = function () {
		 z()
		 stage = s = cjs.stage(500, 500).A().tick()
		 s.bm('me')
		 s.on('mouseenter', function () {
			 $('body').prepend('once<br>')
		 }, null, true)
		 s.on('mouseenter', function () {
			 $('body').prepend('many<br>')
		 }, null, false)
	 }
	 HANDLEEVENT = function () {
		 z()
		 s = createjs.stage(500, 500).A().tick()
		 s.bm('me', function (b) {
			 me = b
			 cb = b.on('pressmove', function () {
				 this.x++
			 })
		 })
		 s.bm('guy', function (b) {
			 b.handleEvent = function () {
				 this.y++
			 }
			 b.on('pressmove', b)
		 })
	 }
	 REMOVEEVENT = function () {
		 z()
		 s = createjs.stage(500, 500).A().tick()
		 s.bm('me', function (b) {
			 me = b
			 cb = b.on('pressmove', function () {
				 this.x++
			 })
		 })
		 s.bm('guy', function (b) {
			 b.handleEvent = function () {
				 this.y++
				 me.off('pressmove', cb)
			 }
			 b.on('pressmove', b)
		 })
	 }
//beautiful demo i stole! :)
	 HITCIRCLES = function () {
		 z()
		 stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
		 container = new createjs.Container()
		 stage.A(container.XY(150))
		 _.times(25, function () {
			 var shape = new createjs.Shape()
			 shape.graphics.f(randomHSL()).dc(0, 0, 30)
			 holder.A(shape.XY(randomLocation(), randomLocation()))
		 })
		 cjs.Ticker.on("tick", tick)
		 function randomLocation() {
			 return Math.random() * 300 - 150
		 }
		
		 function randomHSL() {
			 return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
		 }
		
		 function tick(event) {
			 holder.rotation += 3
			 var numChildren = holder.getNumChildren()
			 _.each(holder.children, function (child) {
				 child.alpha = child.underMouse() ? 1 : 0.1
			 })
			 /*
			  for(var i = 0; i < numChildren; i++){  //for each child
			
			  var child = holder.getChildAt(i)
			  child.alpha = 0.1
			  var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
			  if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
			  child.alpha = 1}
			  }
			  */
			 stage.update(event)
		 }
	 }
 }
 function loader(){
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
	 guyIt = {id: "guy", src: "/guy.png"}
	 myIt = {id: "myImage", src: "/me.png"}
	 mf1 = [myIt, guyIt];
	 mf2 = [$it("me"), $it(guyIt)]
	 mf3 = ["me", guyIt];
	 mf4 = [myIt, guyIt];
	 mf5 = ['guy', 'me']
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
	 QU0 = function () {
		 Q(mf5, function () {
			 $.A(Q.i('me'))
		 })
	 }
	 QU1 = function () {
		 $Ld(mf1, function (ld) {
			 ld.bm("myImage", $St())
		 })
	 }
	 QU4 = function () {
		 $Ld(mf3, function (ld) {
			 $St().A(ld.bm("me"), ld.bm("guy", 300, 300))
		 })
	 }
	 QU2 = function () {
		 St();
		 $Ld(mf2, function (ld) {
			 ld.bm("me", st);
			 ld.bm("guy", st)
		 })
	 }
	 QU3 = function () {
		 St();
		 $Ld(function (ld) {
			 Q.bm("me", st);
			 Q.bm("guy", st, 300, 300)
		 }).mf("me", guyIt)
	 }
	 ULE = USINGLAYERSINEASEL = function () {
		 St()
		 $Ld(mf5, function (q) {
			 me = q.bm('me', st).scXY(3);
			 guy = q.bm('guy', st).scXY(.5).drag()
			 $t(function () {
				 me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
			 })
		 })
		 $.bt('s.sXY(2)', function () {
			 st.sXY(2)
		 })
	 }
	 QU11 = WINDG = function () {
		 st = $St($.c(960, 400).id("cv").id())
		 $Ld(function (ld) {
			 ld.bm("chicks", st, 470).drag()
					 .mask = cjs.worldsMostInterestingShape().X(470).a2(st).same()//.drag()//!
		 })
	 }
	 QU7 = WOAH = TIMSPIN = function () {
		 St();
		 $Ld(mf5, function () {
			 st.qB('guy').scXY(.5, .3).XY(300, 300).spin()
			 _.in(3, function () {
				 T.f(1)
			 });
			 _.in(9, function () {
				 T.f(1000)
			 })
		 })
	 }
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
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
 function ticker(){
	 $l('ticker.js')
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
 }
  
	 
ISO = function (levNum) {
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.times(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			createjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.times(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return cjs.circ(15, 'yellow', 'black')
	}
	tileBad = function () {
		return cjs.circ(15, 'green', 'orange')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
	z()
	stage = $St(900, 500).tick().A()
	grid = isoGrid(10, 10, 0, 240)
	kD('s', function () {
		location = location
	})
	if (levNum) {
		window['lev' + levNum]()
	}
	else if (window['_pam']) {
		window['lev' + _pam]()
	}
	else {
		lev1()
	}
	stage.bm0('me', function (me) {
		player = tilePlayer(me).sXY(.2).drag().to(5, 5)
	})
}
ISO = function (levNum) {
	kD = $.kD
	z()
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.t(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			cjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.t(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return $Cir(15, 'y', 'z')
	}
	tileBad = function () {
		return $Cir(15, 'g', 'o')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
	stage = $St(900, 500).t().A()
	grid = isoGrid(10, 10, 0, 240)
	kD('s', function () {
		location = location
	})
	if (levNum) {
		window['lev' + levNum]()
	}
	else if (window['_pam']) {
		window['lev' + _pam]()
	}
	else {
		lev1()
	}
	stage.bm('me', function (me) {
		player = tilePlayer(me).sXY(.2).drag().to(5, 5)
	})
}//D
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B
function easelCanvasContext() {
	x.Cd = function (i, x, y) {
		var ctx = this
		x = N(x, 100)
		y = N(y, 100)
		i = Q.i(i || 'me')
		ctx.d(i, x - i.W() / 2, y - i.H() / 2)
		return ctx
	}
	x.scImCen = function (i, s, x, y) {
		if (S(i) && i.length < 100) {
			i = Q.i(i)
		}
		x = N(x, 0)
		y = N(y, 0)
		var w = this.W(),
				h = this.H(),
				s = s || 1
		this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
	}
	x.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	x.scaleImCenSpiral = function () {
		var scaleNum = 1, that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	x.cjsTick = x.tick = function (func) {
		var x = this
		cjs.tick(function () {
			x.temp(func)
		})
		return this
	}
	tempDrawOnTickerTick = x.t = function (fn) {
		var x = this;
		T.t(function () {
			x.temp(fn)
		});
		return this
	}
}
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
  