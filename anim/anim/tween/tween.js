cjs.Tw = cjs.Tween; cjs.Tw.g = cjs.Tw.get
//this returns tween-get on a display obj
//you can optionally pass an array (ob, op1, op2..)

function tweenPops() {
	var g = G(arguments), o = {}

	g.e(function (arg) {
	
		if (arg == 'l') {o.loop = true}
		if (arg == 't') {o.useTicks = true}
		if (arg == 'i') {o.ignoreGlobalPause = true}
		if (arg == 'o') {o.override = true}
		if (arg == 'p') {o.paused = true}
		if (N(arg)) {o.position = arg}
		if (F(arg)) {o.onChange = arg}
	
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

$Tw =  function (a, b) {var g = G(arguments)
	
	var displayObject = a
	if (U(b)) {return tweenGet(displayObject)}
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

TWEX=function(){
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