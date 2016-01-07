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
ct.tkCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.tickChildren
	}
	ct.tickChildren = g.f ? true : false
	return ct
}

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
bt = $.button('safd', function () {
	s.sXY(2)
}).A()
function drawCar() {
	s.bm('guy', function (bm) {
		g = bm
		bm.sXY(.5)
		SL(bm)
	})
}
USINGLAYERSINEASEL9 = function () {
	z()
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
	bt = $.button('safd', function () {
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