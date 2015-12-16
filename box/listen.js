w.setContactFilter = w.sCF = w.SetContactFilter
l = b2d.Dynamics.b2ContactListener.prototype
l.begin = l.beginContact = l.b = function (func) {
	this.BeginContact = func
	return this
}
l.end = l.endContact = l.e = function (func) {
	this.EndContact = func;
	return this
}
l.pre = l.preSolve = l.p = function (func) {
	this.PreSolve = func;
	return this
}
l.post = l.postSolve = l.P = function (func) {
	this.PostSolve = func;
	return this
}
w.listen = w.setContactListener = w.sCL = w.SetContactListener
b2d.CL = b2d.ContactListener = b2d.D.b2ContactListener
b2d.L = b2d.listener = b2d.contactListener = function () {
	var l = new b2d.Dynamics.b2ContactListener
	return l
}
//Begin Contact Event : called when two fixtures begin to overlap.
//  - called for sensors and non-sensors. - can only occur inside the time step.
l.b = w.bg = function (fn) {
	this.BeginContact = fn;
	return this
}
//End Contact Event: called when two fixtures cease to overlap.
// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)
l.end = l.e = function (fn) {
	this.EndContact = fn
	return this
}
l.pre = function (fn) {
	this.PreSolve = fn
	return this
}
l.po = function (fn) {
	this.PostSolve = fn
	return this
}
w.startListening = function () {
	var w = this
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.preHandlers = w.preHandlers || []
	w.postHandlers = w.postHandlers || []
	w.endHandlers = w.endHandlers || []
	w.listener.BeginContact = function (cx) {
		_.each(w.beginHandlers, function (func) {
			$.do(function () {
				func(cx)
			})
		})
	}
	w.listener.PreSolve = function (cx) {
		_.each(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w.listener.PostSolve = function (cx, pam2) {
		_.each(w.postHandlers,
				function (func) {
					$.do(function () {
						func(cx, pam2)
					})  //second arg???????
				})
	}
	w.listener.EndContact = function (cx) {
		_.each(w.endHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w.SetContactListener(w.listener)
	return w
}
//You can receive contact data by implementing b2ContactListener. supports  events: begin, end, pre-solve, post-solve.
$cL = function () {
	var cL = new b2d.CL
	return cL
}
$cL.handle = function (arr) {
	return function (cx, d) {
		_.e(arr, function (fn) {
			fn(cx, d)
		})
	}
}
w.SCL = function (cL) {
	cL = cL || $cL()
	this.SetContactListener(cL)
	return this
}
w.sCL = w.lsn = function (cL) {
	return this.SCL(cL || $cL())
}
handling = function () {
	w.bH = [];
	w.pH = [];
	w.PH = [];
	w.eH = []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
	b2d.L = b2d.listener = b2d.contactListener = function () {
		return new b2d.Dynamics.b2ContactListener
	}
	w.SetContactListener(_.x(w.ln = new b2d.Dynamics.b2ContactListener, {
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
	w.bH = [];
	w.pH = [];
	w.PH = [];
	w.eH = []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
	b2d.L = b2d.listener = b2d.contactListener = function () {
		return new b2d.Dynamics.b2ContactListener
	}
	w.SetContactListener(_.x(w.ln = new b2d.Dynamics.b2ContactListener, {
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
}
w._handle = w.preHandle = function () {
	var w = this
	w._l = w._l || $cL()
	w.BG = w.BG || []
	w.PRE = w.PRE || []
	w.PO = w.PO || []
	w.END = w.END || []
	return w
}
w.handle = w.wire = function () {
	var w = this.preHandle()
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
	return w.SCL(w._l)
}// = w.startListening
//Do not keep a reference to the pointers sent to b2ContactListener. 
//  (make  deep copy of cx point data into your own buffer. 
// The example below shows one way of doing this.
//At run-time you can create an instance of the listener and register it 
// with w.SetContactListener. 
// Be sure your listener remains in scope while the world object exists.