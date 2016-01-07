$Ea = cjs.Ea = cjs.ease = function (e) {
	return cjs.Ease[oO('E', e)]
}
EAS1 = function () {
	W()
	Q(function () {
		b = w.i.qB('me').sXY(.2).XY(50, 100)
		$Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000])
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
		function eas(y, e) {
			b = w.i.qB('me').sXY(.2).XY(50, y)
			$Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
			b.$(function () {
				pop(e + ' : ' + oO('E', e))
			})
		}
	})
}//A---
EAS = function () {
	W()
	Q(function () {
		b = w.i.qB('me').sXY(.2).XY(50, 100)
		$Tw([b, 'l'], [{x: 800}, 2000], [{x: 50}, 2000])
		eas(300, 'bO');
		eas(500, 'bI');
		eas(700, 'bIO')
		eas(900, 'bnO');
		eas(1100, 'bnI');
		eas(1300, 'bnIO')
		eas(1500, 'cO');
		eas(1700, 'cI');
		eas(1900, 'cIO')
		eas(2100, 'eO');
		eas(2300, 'eI');
		eas(2500, 'eIO')
		eas(2700, 'qO');
		eas(2900, 'qI');
		eas(3100, 'qIO')
		eas(3900, 'qnO');
		eas(4100, 'qnI');
		eas(4300, 'qnIO')
		eas(4500, 'sO');
		eas(4700, 'sI');
		eas(4900, 'sIO')
		eas(5100, 'qdO');
		eas(5300, 'qdI');
		eas(5500, 'qdIO')
		function eas(y, e) {
			b = w.i.qB('me').sXY(.2).XY(50, y)
			$Tw([b, 'l'], [{x: 800}, 2000, e], [{x: 50}, 2000, e])
			b.$(function () {
				pop(e + ' : ' + oO('E', e))
			})
		}
	})
}//A---
cjs.Tw = cjs.Tween;
cjs.Tw.g = cjs.Tw.get
//this returns tween-get on a display obj
//you can optionally pass an array (ob, op1, op2..)
function tweenPops() {
	var g = G(arguments), o = {}
	g.e(function (arg) {
		if (arg == 'l') {
			o.loop = true
		}
		if (arg == 't') {
			o.useTicks = true
		}
		if (arg == 'i') {
			o.ignoreGlobalPause = true
		}
		if (arg == 'o') {
			o.override = true
		}
		if (arg == 'p') {
			o.paused = true
		}
		if (N(arg)) {
			o.position = arg
		}
		if (F(arg)) {
			o.onChange = arg
		}
	})
	return o
}
function tweenGet(a) {
	return A(a) ? cjs.Tw.g(a[0], tweenPops.apply(null, _.r(a)))
			: cjs.Tw.g(a)
}
function Tw(tween) {
	var g = G(arguments), w = tween
	return w
}
ww1 = function (o) {
	var w = {}
	if (N(o.x)) {
		w.x = o.x
	}
	if (N(o.y)) {
		w.y = o.y
	}
	if (N(o.xy)) {
		w.x = w.y = o.xy
	}
	if (N(o.sx)) {
		w.scaleX = o.sx
	}
	if (N(o.sy)) {
		w.scaleY = o.sy
	}
	if (N(o.sxy)) {
		w.scaleX = w.scaleY = o.sxy
	}
	if (N(o.s)) {
		w.scaleX = w.scaleY = o.s
	}
	if (N(o.kx)) {
		w.skewX = o.kx
	}
	if (N(o.ky)) {
		w.skewY = o.ky
	}
	if (N(o.kxy)) {
		w.skewX = w.skewY = o.kxy
	}
	if (N(o.k)) {
		w.skewX = w.skewY = o.k
	}
	if (N(o.r)) {
		w.rotation = o.r
	}
	if (N(o.a)) {
		w.alpha = o.a
	}
	if (N(o.rx)) {
		w.regX = o.rx
	}
	if (N(o.ry)) {
		w.regY = o.ry
	}
	if (N(o.rxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.gy)) {
		w.regY = o.ry
	}
	if (N(o.gxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.g)) {
		w.regX = w.regY = o.g
	}
	if (o.v == 0) {
		w.visible = false
	}
	if (o.v == 1) {
		w.visible = true
	}
	return w
}
cjs.ww = function (o) {
	var w = {}
	if (N(o.x)) {
		w.x = o.x
	}
	if (N(o.y)) {
		w.y = o.y
	}
	if (N(o.xy)) {
		w.x = w.y = o.xy
	}
	if (N(o.sx)) {
		w.scaleX = o.sx
	}
	if (N(o.sy)) {
		w.scaleY = o.sy
	}
	if (N(o.sxy)) {
		w.scaleX = w.scaleY = o.sxy
	}
	if (N(o.s)) {
		w.scaleX = w.scaleY = o.s
	}
	if (N(o.kx)) {
		w.skewX = o.kx
	}
	if (N(o.ky)) {
		w.skewY = o.ky
	}
	if (N(o.kxy)) {
		w.skewX = w.skewY = o.kxy
	}
	if (N(o.k)) {
		w.skewX = w.skewY = o.k
	}
	if (N(o.r)) {
		w.rotation = o.r
	}
	if (N(o.a)) {
		w.alpha = o.a
	}
	if (N(o.rx)) {
		w.regX = o.rx
	}
	if (N(o.ry)) {
		w.regY = o.ry
	}
	if (N(o.rxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.gy)) {
		w.regY = o.ry
	}
	if (N(o.gxy)) {
		w.regX = w.regY = o.rxy
	}
	if (N(o.g)) {
		w.regX = w.regY = o.g
	}
	if (o.v == 0) {
		w.visible = false
	}
	if (o.v == 1) {
		w.visible = true
	}
	return w
	alt = function (o) {
		var w = {}
		if (N(o.x)) {
			w.x = o.x
		}
		if (N(o.y)) {
			w.y = o.y
		}
		if (N(o.xy)) {
			w.x = w.y = o.xy
		}
		if (N(o.sx)) {
			w.scaleX = o.sx
		}
		if (N(o.sy)) {
			w.scaleY = o.sy
		}
		if (N(o.sxy)) {
			w.scaleX = w.scaleY = o.sxy
		}
		if (N(o.s)) {
			w.scaleX = w.scaleY = o.s
		}
		if (N(o.kx)) {
			w.skewX = o.kx
		}
		if (N(o.ky)) {
			w.skewY = o.ky
		}
		if (N(o.kxy)) {
			w.skewX = w.skewY = o.kxy
		}
		if (N(o.k)) {
			w.skewX = w.skewY = o.k
		}
		if (N(o.r)) {
			w.rotation = o.r
		}
		if (N(o.a)) {
			w.alpha = o.a
		}
		if (N(o.rx)) {
			w.regX = o.rx
		}
		if (N(o.ry)) {
			w.regY = o.ry
		}
		if (N(o.rxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.gy)) {
			w.regY = o.ry
		}
		if (N(o.gxy)) {
			w.regX = w.regY = o.rxy
		}
		if (N(o.g)) {
			w.regX = w.regY = o.g
		}
		if (o.v == 0) {
			w.visible = false
		}
		if (o.v == 1) {
			w.visible = true
		}
		return w
	}
}
$Tw1 = function (a, b) { // EaselTween=tw=
	var displayObject = a
	if (U(b)) {
		return tweenGet(displayObject)
	}
	//first arg passed to twg, and then rest of args are 'to' pams
	var g = G(arguments)
	displayObject = tweenGet(g[0])
	_.e(g.r, function (b) {
		//can pass obj, time ,ease
		if (A(b)) {
			if (b[2]) {
				displayObject = displayObject.to(cjs.ww(b[0]), b[1], $Ea(b[2]))
			}
			//can pass obj, time
			else if (b[1]) {
				//can set pops to another obj??
				if (O(b[1])) {
					displayObject = displayObject.set(cjs.ww(b[0]), b[1])
				}
				else {
					displayObject = displayObject.to(cjs.ww(b[0]), b[1])
				}
			}
			else {
				displayObject = displayObject.tick(a[0])
			}
		}
//can pass a function and it will run when it's its turn
		else if (F(b)) {
			displayObject = displayObject.call(b, [])
		}
		//make it wait, optionally pass in true! ?
		else if (N(b)) {
			if (b < 0) {
				// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
				displayObject = displayObject.wait(b * -1, true)
			}
			else {
				displayObject = displayObject.wait(b)
			}
		}
		//for playing/stopping?
		else if (O(b) && b.length == 1) {
			if (b.p) {
				displayObject = displayObject.play(b.p)
			}
			else if (b.s) {
				displayObject = displayObject.stop(b.s)
			}
		}
		else {
			displayObject = displayObject.to(cjs.ww(b))
		}
	})
	return Tw(displayObject)
}
cjs.tween = function (a, b) { // EaselTween=tw=
	var displayObject = a
	if (U(b)) {
		return tweenGet(displayObject)
	}
	//first arg passed to twg, and then rest of args are 'to' pams
	var g = G(arguments)
	displayObject = tweenGet(g[0])
	_.each(g.r, function (b) {
		
		//can pass obj, time ,ease
		if (A(b)) {
			if (b[2]) {
				displayObject = displayObject.to(ww1(b[0]), b[1], cjs.ease(b[2]))
			}
			
			//can pass obj, time
			else if (b[1]) {
				
				//can set pops to another obj??
				if (O(b[1])) {
					displayObject = displayObject.set(ww1(b[0]), b[1])
				}
				else {
					displayObject = displayObject.to(ww1(b[0]), b[1])
				}
			}
			else {
				displayObject = displayObject.tick(a[0])
			}
		}

//can pass a function and it will run when it's its turn
		else if (F(b)) {
			displayObject = displayObject.call(b, [])
		}
		
		
		//make it wait, optionally pass in true! ?
		else if (N(b)) {
			if (b < 0) {
				// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
				displayObject = displayObject.wait(b * -1, true)
			}
			else {
				displayObject = displayObject.wait(b)
			}
		}
		
		
		
		//for playing/stopping?
		else if (O(b) && b.length == 1) {
			if (b.p) {
				displayObject = displayObject.play(b.p)
			}
			else if (b.s) {
				displayObject = displayObject.stop(b.s)
			}
		}
		else {
			displayObject = displayObject.to(ww1(b))
		}
	})
	return Tw(displayObject)
}
$Tw = function (a, b) {
	var g = G(arguments)
	var displayObject = a
	if (U(b)) {
		return tweenGet(displayObject)
	}
	//first arg passed to twg, and then rest of args are 'to' pams
	displayObject = tweenGet(g[0])
	_.e(g.r, function (b) {
		//can pass obj, time ,ease
		if (A(b)) {
			if (b[2]) {
				displayObject = displayObject.to(cjs.ww(b[0]), b[1], $Ea(b[2]))
			}
			//can pass obj, time
			else if (b[1]) {
				//can set pops to another obj??
				if (O(b[1])) {
					displayObject = displayObject.set(cjs.ww(b[0]), b[1])
				}
				else {
					displayObject = displayObject.to(cjs.ww(b[0]), b[1])
				}
			}
			else {
				displayObject = displayObject.tick(a[0])
			}
		}

//can pass a function and it will run when it's its turn
		else if (F(b)) {
			displayObject = displayObject.call(b, [])
		}
		//make it wait, optionally pass in true! ?
		else if (N(b)) {
			if (b < 0) {
				// TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
				displayObject = displayObject.wait(b * -1, true)
			}
			else {
				displayObject = displayObject.wait(b)
			}
		}
		//for playing/stopping?
		else if (O(b) && b.length == 1) {
			if (b.p) {
				displayObject = displayObject.play(b.p)
			}
			else if (b.s) {
				displayObject = displayObject.stop(b.s)
			}
		}
		else {
			displayObject = displayObject.to(cjs.ww(b))
		}
	})
	return Tw(displayObject)
}
//old:
//w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.
//tw.tkXXX = function (a) {		this.tick(a);return this	}
//A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
TWEX = function () {
	target.alpha = 1;
	createjs.Tween.get(target)
			.wait(500)
			.to({alpha: 0, visible: false}, 1000)
			.call(handleComplete);
	function handleComplete() {
		//Tween complete
	}
}
/*


 Multiple tweens can point to the same instance, however if they affect the same properties there could be unexpected behaviour. To stop all tweens on an object, use removeTweens or pass override:true in the props argument.

 createjs.Tween.get(target, {override:true}).to({x:100});
 Subscribe to the change event to get notified when a property of the target is changed.

 createjs.Tween.get(target, {override:true}).to({x:100}).addEventListener("change", handleChange);
 function handleChange(event) {
 // The tween changed.
 }
 See the Tween get method for additional param documentation.

 Constructor
 Tween ( target  [props]  [pluginData] )
 Defined in Tween:79
 Parameters:

 target Object
 The target object that will have its properties tweened.

 [props] Object optional
 The configuration properties to apply to this tween instance (ex. {loop:true, paused:true}. All properties default to false. Supported props are:

 loop: sets the loop property on this tween.
 useTicks: uses ticks for all durations instead of milliseconds.
 ignoreGlobalPause: sets the ignoreGlobalPause property on this tween.
 override: if true, Tween.removeTweens(target) will be called to remove any other tweens with the same target.
 paused: indicates whether to start the tween paused.
 position: indicates the initial position for this tween.
 onChange: specifies a listener for the "change" event.
 [pluginData] Object optional
 An object containing data for use by installed plugins. See individual plugins' documentation for details.

 */
tw = cjs.Tween.prototype
//w.target
//use when returned
// w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
// w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
//use in queue
tw.th = tw.t = tw.then = function (tw, a, b) {
	return this.to(cjs.ww(tw), a, b)
}
tw.ps = tw.pos = function (a, b) {
	
	//get or set position of tween (in time in ms)// see w.dr
	if (U(a)) {
		return w.position
	}
	if (b == 'n') {
		b = cjs.Tween.NONE
	}//0
	if (b == 'l') {
		b = cjs.Tween.LOOP
	}//1 default
	if (b == 'r') {
		b = cjs.Tween.REVERSE
	}//2
	tw.setPosition(a, acm(b))
	//default is loop, can use r|n
	return w
}
tw.dur = tw.dr = function (a) {//total time duration
	//get time of tween in ms
	//duration:read only
	if (U(a)) {
		return this.duration
	}
}
tw.tk = function (a) {
	w.tick(a);
	return w
}
tw.iGP = tw.ig = tw.ignore = function (a) {
	if (U(a)) {
		return this.ignoreGlobalPause
	}
	this.ignoreGlobalPause = a ? true : false;
	return this
}
//w.psv=function(){ return w.passive}
//Read-only. Indicates the tween's current position is within a passive wait.
tw.lp = tw.setLoop = function (a) {
	if (U(a)) {
		return this.loop
	}
	this.loop = a ? true : false
	return this
}
tw.tog = tw.gg = tw.toggle = tw.$ = function () {
	var isPaused = this._paused
	if (isPaused) {
		this.setPaused(false)
	}
	else {
		this.setPaused(true)
	}
	return this
}
i = cjs.DisplayObject.prototype
i.tw = function () {
	var i = this, g = G(arguments), tw
	g.unshift(i)
	tw = _tw = $Tw.apply(null, g)
	return tw
}
i.tweenLoop=i.twL = function () {
	var g = G(arguments), tw, i = this
	g.unshift([this, 'l'])
	return tw = _tw = $Tw.apply(i, g)
}
i.sp = i.spin = function () {
	this.twL([{r: 360}, 4000]);
	return this
}
i.grow = function () {
	this.tw([{sxy: 10}, 10000])
	return this
}