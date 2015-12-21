b2d.CL = b2d.D.b2ContactListener
$pt.cL = b2d.CL.prototype
cL = $pt.cL
cL.b = cL.bg = function (fn) {
	this.BeginContact = fn;
	return this
}
cL.end = cL.e = function (fn) {
	this.EndContact = fn
	return this
}
cL.pre = cL.p = function (fn) {
	this.PreSolve = fn
	return this
}
cL.po = cL.P = function (fn) {
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
w.SCL  = function (cL) {
	this.SetContactListener(cL || $cL())
	return this
}

$CL  = function () {
	return new b2d.CL
}

alpha = w.cL = function(){
	var cL = $CL()
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
	w.beginHandlers =w.BG = w.BG || [] //bH
	w.preHandlers = w.PRE = w.PRE || [] //pH
	w.postHandlers = w.PO = w.PO || [] // PH
	w.endHandlers = w.END = w.END || [] // eH
	w.listener = w.listener || b2d.listener()
	w._l.BeginContact = function (cx) {
		_.e(w.BG, function (fn) {
			_.in(0,function () {
				fn(cx)
			})
		})
	}
	
	//w._l.BeginContact = $CL.handle(w.BG)
	//function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
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
	
	W._l = w._l || $CL()

	_.x(w._l, {
		BeginContact: function (cx) {
			_.e(w.BG, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		EndContact: function (cx) {
			_.e(w.END, function (fn) {
				_.in(0, function () {
					fn(cx)
				})
			})
		},
		PreSolve: function (cx, i) {
			_.e(w.PRE, function (fn) {
				fn(cx, i)
			})
		},
		PostSolve: function (cx, pam2) {
			_.e(w.PO, function (fn) {
				_.in(0, function () {
					fn(cx, pam2)
				})
			})
		}
	})
	w.SCL(w._l)
	
	
	return w
}


 
 
function old() {
	w._l.EndContact = function (cx) {
		_.e(w.endHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PreSolve = function (cx) {
		_.e(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PostSolve = function (cx, pam2) {
		_.e(w.postHandlers,
				function (func) {
					$.do(function () {
						func(cx, pam2)
					})  //second arg???????
				})
	}
}