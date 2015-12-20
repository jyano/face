b2d.CL = b2d.D.b2ContactListener
l = b2d.CL.prototype
l.b = w.bg = function (fn) {
	this.BeginContact = fn;
	return this
}
l.end = l.e = function (fn) {
	this.EndContact = fn
	return this
}
l.pre = l.p = function (fn) {
	this.PreSolve = fn
	return this
}
l.po = l.P = function (fn) {
	this.PostSolve = fn
	return this
}
//End Contact Event: called when two fixtures cease to overlap.
// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)
//Begin Contact Event : called when two fixtures begin to overlap.
//  - called for sensors and non-sensors. - can only occur inside the time step.
// = w.startListening
//Do not keep a reference to the pointers sent to b2ContactListener. 
//  (make  deep copy of cx point data into your own buffer. 
// The example below shows one way of doing this.
//At run-time you can create an instance of the listener and register it 
// with w.SetContactListener. 
// Be sure your listener remains in scope while the world object exists.
//You can receive contact data by implementing b2ContactListener. supports  events: begin, end, pre-solve, post-solve.
w.SCL = w.listen = w.sCL = w.lsn = w.sCL = function (cL) {
	var w = this
	cL = cL || $cL()
	this.SetContactListener(cL)
	return this
}
$CL = $cL = b2d.L = b2d.listener = function () {
	return new b2d.CL
}
$CL.handle = function (arr) {
	return function (cx, d) {
		_.e(arr, function (fn) {
			fn(cx, d)
		})
	}
}
w.startListening = w.handle = function () {
	var w = this
	var w = this
	w._l = w._l || $cL()
	w.BG = w.BG || []
	w.PRE = w.PRE || []
	w.PO = w.PO || []
	w.END = w.END || []
	w.bH = [];
	w.pH = [];
	w.PH = [];
	w.eH = []
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.preHandlers = w.preHandlers || []
	w.postHandlers = w.postHandlers || []
	w.endHandlers = w.endHandlers || []
	w._l.BeginContact = function (cx) {
		_.each(w.beginHandlers, function (func) {
			$.do(function () {
				func(cx)
			})
		})
	}
	w._l.PreSolve = function (cx) {
		_.each(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PostSolve = function (cx, pam2) {
		_.each(w.postHandlers,
				function (func) {
					$.do(function () {
						func(cx, pam2)
					})  //second arg???????
				})
	}
	w._l.EndContact = function (cx) {
		_.each(w.endHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.BeginContact = $cL.handle(w.BG) //function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
	w._l.PreSolve = function (cx, d) {
		_.e(w.PRE, function (fn) {
			fn(cx, d)
		})
	}
	w._l.PostSolve = function (cx, d) {
		_.e(w.PO, function (fn) {
			fn(cx, d)
		})
	}
	w._l.EndContact = function (cx, d) {
		_.e(w.END, function (fn) {
			fn(cx, d)
		})
	}
	w.SCL(w._l)
	w.SCL(_.x(new b2d.CL, {
		BeginContact: function (cx) {
			_.e(w.bH, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		EndContact: function (cx) {
			_.e(w.eH, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		PreSolve: function (cx, i) {
			_.e(w.pH, function (fn) {
				fn(cx, i)
			})
		},
		PostSolve: function (cx, pam2) {
			_.e(w.PH, function (fn) {
				_.in(0, function () {
					fn(cx, pam2)
				})
			})
		}
	}))
	return w
}
w.SCF = w.sCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}