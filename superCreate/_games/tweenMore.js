tweens = {}
tweens.rpunch = function (arm) {
	
	//arm=arm|| c1.g('arm')
	return $Tw(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.lpunch = function (lf) {
	return $Tw(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
tweens.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	$Tw(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
tweens.shakeX = function (a) {
	return $Tw(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
tweens.rott = function (a) {
	return $Tw(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
tweens.prod1 = function (a) {
	return $Tw(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
tweens.prod2 = function (a) {
	return $Tw(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
_TW = tweens = {}
_TW.rott = function (a) {
	return $Tw(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
tweens.rott = function (a) {
	return cjs.tween(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
_TW.shakeX = function (a) {
	return $Tw(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
tweens.shakeX = function (a) {
	return cjs.tween(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
_TW.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	$Tw(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
tweens.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	cjs.tween(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
rotateShake = cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
rotateShake = cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
scaleShake = cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
_TW.prod1 = function (a) {
	return $Tw(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
_TW.prod2 = function (a) {
	return $Tw(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
tweens.prod1 = function (a) {
	return cjs.tween(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
tweens.prod2 = function (a) {
	return cjs.tween(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
_TW.rpunch = function (arm) {//arm=arm|| c1.g('arm')
	return $Tw(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.rpunch = function (arm) {
	
	//arm=arm|| c1.g('arm')
	return cjs.tween(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
_TW.lpunch = function (lf) {
	return $Tw(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
tweens.lpunch = function (lf) {
	return cjs.tween(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
/*

 Methods
 addEventListener ( type  listener  [useCapture] ) Function | Object
 Inherited from EventDispatcher: addEventListener:149
 Adds the specified event listener. Note that adding multiple listeners to the same function will result in multiple callbacks getting fired.
 Example

 displayObject.addEventListener("click", handleClick);
 function handleClick(event) {
 // Click happened.
 }
 Parameters:

 type String
 The string type of the event.
 listener Function | Object
 An object with a handleEvent method, or a function that will be called when the event is dispatched.
 [useCapture] Boolean optional
 For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
 Returns:

 Function | Object: Returns the listener for chaining or assignment.
 call ( callback  [params]  [scope] ) Tween
 Defined in call:596
 Queues an action to call the specified function.
 Example

 //would call myFunction() after 1 second.
 myTween.wait(1000).call(myFunction);
 Parameters:

 callback Function
 The function to call.
 [params] Array optional
 The parameters to call the function with. If this is omitted, then the function will be called with a single param pointing to this tween.
 [scope] Object optional
 The scope to call the function in. If omitted, it will be called in the target's scope.
 Returns:

 Tween: This tween instance (for chaining calls).
 dispatchEvent ( eventObj ) Boolean
 Inherited from EventDispatcher: dispatchEvent:287
 Dispatches the specified event to all listeners.
 Example

 // Use a string event
 this.dispatchEvent("complete");

 // Use an Event instance
 var event = new createjs.Event("progress");
 this.dispatchEvent(event);
 Parameters:

 eventObj Object | String | Event
 An object with a "type" property, or a string type. While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used, dispatchEvent will construct an Event instance with the specified type.
 Returns:

 Boolean: Returns the value of eventObj.defaultPrevented.
 get ( target  [props]  [pluginData]  [override=false] ) Tween static
 Defined in get:372
 Returns a new tween instance. This is functionally identical to using "new Tween(...)", but looks cleaner with the chained syntax of TweenJS.
 Example

 var tween = createjs.Tween.get(target);
 Parameters:

 target Object
 The target object that will have its properties tweened.
 [props] Object optional
 The configuration properties to apply to this tween instance (ex. {loop:true, paused:true}). All properties default to false. Supported props are:
 loop: sets the loop property on this tween.
 useTicks: uses ticks for all durations instead of milliseconds.
 ignoreGlobalPause: sets the ignoreGlobalPause property on this tween.
 override: if true, createjs.Tween.removeTweens(target) will be called to remove any other tweens with the same target.
 paused: indicates whether to start the tween paused.
 position: indicates the initial position for this tween.
 onChange: specifies a listener for the change event.
 [pluginData] Object optional
 An object containing data for use by installed plugins. See individual plugins' documentation for details.
 [override=false] Boolean optional
 If true, any previous tweens on the same target will be removed. This is the same as calling Tween.removeTweens(target).
 Returns:

 Tween: A reference to the created tween. Additional chained tweens, method calls, or callbacks can be applied to the returned tween instance.
 hasActiveTweens ( [target] ) Boolean static
 Defined in hasActiveTweens:479
 Indicates whether there are any active tweens (and how many) on the target object (if specified) or in general.
 Parameters:

 [target] Object optional
 The target to check for active tweens. If not specified, the return value will indicate if there are any active tweens on any target.
 Returns:

 Boolean: If there are active tweens.
 hasEventListener ( type ) Boolean
 Inherited from EventDispatcher: hasEventListener:336
 Indicates whether there is at least one listener for the specified event type.
 Parameters:

 type String
 The string type of the event.
 Returns:

 Boolean: Returns true if there is at least one listener for the specified event.
 installPlugin ( plugin  properties ) static
 Defined in installPlugin:492
 Installs a plugin, which can modify how certain properties are handled when tweened. See the CSSPlugin for an example of how to write TweenJS plugins.
 Parameters:

 plugin Object
 The plugin class to install
 properties Array
 An array of properties that the plugin will handle.
 off ( type  listener  [useCapture] )
 Inherited from EventDispatcher: off:254
 A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the .on method.
 Parameters:

 type String
 The string type of the event.
 listener Function | Object
 The listener function or object.
 [useCapture] Boolean optional
 For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
 on ( type  listener  [scope]  [once=false]  [data]  [useCapture=false] ) Function
 Inherited from EventDispatcher: on:182
 A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener only run once, associate arbitrary data with the listener, and remove the listener.
 This method works by creating an anonymous wrapper function and subscribing it with addEventListener. The created anonymous function is returned for use with .removeEventListener (or .off).
 Example

 var listener = myBtn.on("click", handleClick, null, false, {count:3});
 function handleClick(evt, data) {
 data.count -= 1;
 console.log(this == myBtn); // true - scope defaults to the dispatcher
 if (data.count == 0) {
 alert("clicked 3 times!");
 myBtn.off("click", listener);
 // alternately: evt.remove();
 }
 }
 Parameters:

 type String
 The string type of the event.
 listener Function | Object
 An object with a handleEvent method, or a function that will be called when the event is dispatched.
 [scope] Object optional
 The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
 [once=false] Boolean optional
 If true, the listener will remove itself after the first time it is triggered.
 [data] optional
 Arbitrary data that will be included as the second parameter when the listener is called.
 [useCapture=false] Boolean optional
 For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
 Returns:

 Function: Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
 pause ( tween ) Tween
 Defined in pause:647
 Queues an action to pause the specified tween.
 Parameters:

 tween Tween
 The tween to pause. If null, it pauses this tween.
 Returns:

 Tween: This tween instance (for chaining calls)
 play ( tween ) Tween
 Defined in play:632
 Queues an action to play (unpause) the specified tween. This enables you to sequence multiple tweens.
 Example

 myTween.to({x:100},500).play(otherTween);
 Parameters:

 tween Tween
 The tween to play.
 Returns:

 Tween: This tween instance (for chaining calls).
 *** removeAllEventListeners ( [type] )
 Inherited from EventDispatcher: removeAllEventListeners:265
 Removes all listeners for the specified type, or all listeners of all types.
 Example

 // Remove all listeners
 *** displayObject.removeAllEventListeners();

 // Remove all click listeners
 displayObject.removeAllEventListeners("click");
 Parameters:

 [type] String optional
 The string type of the event. If omitted, all listeners for all types will be removed.
 *** removeAllTweens () static
 Defined in removeAllTweens:463
 Available since 0.4.1
 Stop and remove all existing tweens.
 *** removeEventListener ( type  listener  [useCapture] )
 Inherited from EventDispatcher: removeEventListener:224
 Removes the specified event listener.
 Important Note: that you must pass the exact function reference used when the event was added. If a proxy function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or closure will not work.
 Example

 *** displayObject.removeEventListener("click", handleClick);
 Parameters:

 type String
 The string type of the event.
 listener Function | Object
 The listener function or object.
 [useCapture] Boolean optional
 For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
 removeTweens ( target ) static
 Defined in removeTweens:443
 Removes all existing tweens for a target. This is called automatically by new tweens if the override property is true.
 Parameters:

 target Object
 The target object to remove existing tweens from.
 *** set ( props  [target] ) Tween
 Defined in set:616
 Queues an action to set the specified props on the specified target. If target is null, it will use this tween's target.
 Example

 myTween.wait(1000).set({visible:false},foo);
 Parameters:

 props Object
 The properties to set (ex. {visible:false}).
 [target] Object optional
 The target to set the properties on. If omitted, they will be set on the tween's target.
 Returns:

 Tween: This tween instance (for chaining calls).
 *** setPaused ( [value=true] ) Tween
 Defined in setPaused:740
 Pauses or plays this tween.
 Parameters:

 [value=true] Boolean optional
 Indicates whether the tween should be paused (true) or played (false).
 Returns:

 Tween: This tween instance (for chaining calls)
 setPosition ( value  [actionsMode=1] ) Boolean
 Defined in setPosition:658
 Advances the tween to a specified position.
 Parameters:

 value Number
 The position to seek to in milliseconds (or ticks if useTicks is true).
 [actionsMode=1] Number optional
 Specifies how actions are handled (ie. call, set, play, pause):
 NONE (0) - run no actions.
 LOOP (1) - if new position is less than old, then run all actions between old and duration, then all actions between 0 and new.
 REVERSE (2) - if new position is less than old, run all actions between them in reverse.
 Returns:

 Boolean: Returns true if the tween is complete (ie. the full tween has run & loop is false).
 *** tick ( delta  paused ) static
 Defined in tick:407
 Advances all tweens. This typically uses the Ticker class, but you can call it manually if you prefer to use your own "heartbeat" implementation.
 Parameters:

 delta Number
 The change in time in milliseconds since the last tick. Required unless all tweens have useTicks set to true.
 paused Boolean
 Indicates whether a global pause is in effect. Tweens with ignoreGlobalPause will ignore this, but all others will pause if this is true.
 tick ( delta )
 Defined in tick:728
 Advances this tween by the specified amount of time in milliseconds (or ticks ifuseTicks is true). This is normally called automatically by the Tween engine (via tick), but is exposed for advanced uses.
 Parameters:

 delta Number
 The time to advance in milliseconds (or ticks if useTicks is true).
 *** to ( props  [duration=0]  [ease="linear"] ) Tween
 Defined in to:575
 Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value. Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric properties will be set at the end of the specified duration.
 Example

 createjs.Tween.get(target).to({alpha:0}, 1000);
 Parameters:

 props Object
 An object specifying property target values for this tween (Ex. {x:300} would tween the x property of the target to 300).
 [duration=0] Number optional
 The duration of the wait in milliseconds (or in ticks if useTicks is true).
 [ease="linear"] Function optional
 The easing function to use for this tween. See the Ease class for a list of built-in ease functions.
 Returns:

 Tween: This tween instance (for chaining calls).



 ***toString () String
 Inherited from EventDispatcher but overwritten in toString:759
 Returns a string representation of this object.
 Returns:

 String: a string representation of the instance.
 *** wait ( duration  [passive] ) Tween
 Defined in wait:555
 Queues a wait (essentially an empty tween).
 Example

 //This tween will wait 1s before alpha is faded to 0.


 *** createjs.Tween.get(target).wait(1000).to({alpha:0}, 1000);
 Parameters:

 duration Number
 The duration of the wait in milliseconds (or in ticks if useTicks is true).
 [passive] Boolean optional
 Tween properties will not be updated during a passive wait. This is mostly useful for use with Timeline instances that contain multiple tweens affecting the same target at different times.
 Returns:

 Tween: This tween instance (for chaining calls).
 **** willTrigger ( type ) Boolean
 Inherited from EventDispatcher: willTrigger:347
 Indicates whether there is at least one listener for the specified event type on this object or any of its ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the specified type is dispatched from this object, it will trigger at least one listener.
 This is similar to hasEventListener, but it searches the entire event flow for a listener, not just this object.
 Parameters:

 type String
 The string type of the event.
 Returns:

 Boolean: Returns true if there is at least one listener for the specified event.
 */
tw.Plugin = function (a, b) {
	var g = G(arguments), a = g[0], b = g[1]
	if (U(a)) {
		return g.p ? w.pluginData.data : w.pluginData
	}
	if (U(b)) {
		w.pluginData = a;
		return w
	}
	w.pluginData[a] = b
	return w
}
dO = cjs.DisplayObject.prototype
dO.tw = dO.tween = function () {
	var dO = this, g = G(arguments)
	g.unshift(dO)
	return _tw = $Tw.apply(null, g)
}
dO.twL = dO.tweenLoop = function () {
	var dO = this, g = G(arguments)
	g.unshift([dO, 'l'])
	return _tw = $Tw.apply(dO, g)
}
dO.spin = dO.sp = function () {
	this.twL([{r: 360}, 4000]);
	return this
}
dO.grow = function () {
	this.tw([{sxy: 10}, 10000])
	return this
}
function toTween() {
	tweens = {}
	tweens.rpunch = function (arm) {
		
		//arm=arm|| c1.g('arm')
		return $Tw(arm,
				[{r: 100, sx: -1}, 800],
				[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
				[{r: 0, sy: 1, sx: -.8}, 200])
	}
	tweens.lpunch = function (lf) {
		return $Tw(lf,
				[{r: 10, s: 1}, 800],
				[{r: -140, s: 2.5}, 600, 'eO'],
				[{s: .8, r: 0}, 1600])
	}
	tweens.shakeY = function (a) {
		
		// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
		$Tw(
				[a, 'l'],
				[{y: -10}, 500],
				[{y: 10}, 500],
				[{y: -10}, 500]
		)
		return a
	}
	tweens.shakeX = function (a) {
		return $Tw(
				a,
				[
					{r: 180, y: 200, sxy: .5}, 500
				]
		).then(
				[a, 'l'],
				[{x: -20}, 50],
				[{x: 20}, 50],
				[{x: -20}, 50]
		)
	}
	tweens.rott = function (a) {
		return $Tw(
				a,
				[{r: 180, y: 200, sxy: .5}, 500]
		)
	}
	tweens.prod1 = function (a) {
		return $Tw(
				a,
				{x: -100, y: 200},
				[{x: 10, s: .5, y: -200}, 500],
				[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
				{a: 0})
	}
	tweens.prod2 = function (a) {
		return $Tw(
				a,
				{x: 100, y: 200},
				[{x: 10, s: .5, y: 200}, 500],
				[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
				{a: 0}
		)
	}
}
tweens = {}
tweens.rpunch = function (arm) {
	
	//arm=arm|| c1.g('arm')
	return $Tw(arm,
			[{r: 100, sx: -1}, 800],
			[{r: -20, sx: -2, sy: 2}, 400, 'eO'],
			[{r: 0, sy: 1, sx: -.8}, 200])
}
tweens.lpunch = function (lf) {
	return $Tw(lf,
			[{r: 10, s: 1}, 800],
			[{r: -140, s: 2.5}, 600, 'eO'],
			[{s: .8, r: 0}, 1600])
}
tweens.shakeY = function (a) {
	
	// EaselTween(  a,  [  {r:180, y:200, sxy:.5},  500  ]  )
	$Tw(
			[a, 'l'],
			[{y: -10}, 500],
			[{y: 10}, 500],
			[{y: -10}, 500]
	)
	return a
}
tweens.shakeX = function (a) {
	return $Tw(
			a,
			[
				{r: 180, y: 200, sxy: .5}, 500
			]
	).then(
			[a, 'l'],
			[{x: -20}, 50],
			[{x: 20}, 50],
			[{x: -20}, 50]
	)
}
tweens.rott = function (a) {
	return $Tw(
			a,
			[{r: 180, y: 200, sxy: .5}, 500]
	)
}
tweens.prod1 = function (a) {
	return $Tw(
			a,
			{x: -100, y: 200},
			[{x: 10, s: .5, y: -200}, 500],
			[{x: 100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0})
}
tweens.prod2 = function (a) {
	return $Tw(
			a,
			{x: 100, y: 200},
			[{x: 10, s: .5, y: 200}, 500],
			[{x: -100, s: 1.2, y: 200, a: .5}, 10000, 'eO'],
			{a: 0}
	)
}
