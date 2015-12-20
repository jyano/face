w.b = w.bg = w.beg = function () {

//ADDS one or more handlers to beginHandlers array
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.BG.push(fn)
	})
	return w
}
w.end = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.END.push(fn)
	})
	return w
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
	return w
}
w.onBeg = w.beg = w.b = function () {
	var w = this, g = G(arguments), o, fn
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.bH.push(fn)
	return w
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
	return b
}
w.b = w.bg = w.beg = function () {
	var w = this, g = G(arguments), o, fn;
	if (g.u) {
		return this.GetBodyList()
	} /// polymorphism here??? wow.. super cryptic!!!!
	//ADDS one or more handlers to beginHandlers array
	//most common use, usually just need one func.
	// would i ever need more?lVWs
	//it just puts each item into bH arr
	fn = F(g.t) ? function (cx) {
		if (cx.w(g.f, g.s)) {
			g.t(cx)
		}
	} :
			F(g.s) ? function (cx) {
				if (cx.w(g.f)) {
					g.s(cx)
				}
			} :
					g.f //fn=$.mo(.2,fn)
	w.bH.push(fn)
	return w
}
w.end = function () {
	var w = this, g = G(arguments)
	if (g.F_) {
		g.e(function (fn) {
			w.eH.push(fn)
		})
	}
	else if (F(g.s)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s)
		})
	}
	else if (F(g.t)) {
		w.eH.push(function (cx) {
			cx.w(g.f, g.s, g.t)
		})
	}
	return w
}
w.end = function (what, what2, func) {
	var w = this
	if (F(what)) {
		_.each(arguments, function (func) {
			w.endHandlers.push(func)
		})
	}
	else if (F(what2)) {
		func = what2
		w.endHandlers.push(function (cx) {
			if (cx.with(what)) {
				func(cx)
			}
		})
	}
	else if (F(func)) {
		w.endHandlers.push(function (cx) {
			if (cx.with(what, what2)) {
				func(cx)
			}
		})
	}
	return this
}
w.beg = w.begin = function (what, what2, func) {
	var w = this
	if (F(what)) {
		_.each(arguments, function (func) {
			w.beginHandlers.push(func)
		})
	}
	else if (F(what2)) {
		func = what2
		w.beginHandlers.push(function (cx) {
			if (cx.with(what)) {
				func(cx)
			}
		})
	}
	else if (F(func)) {
		w.beginHandlers.push(function (cx) {
			if (cx.with(what, what2)) {
				func(cx)
			}
		})
	}
	return this
}//ADDS one or more handlers to beginHandlers array
w.pre = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.PRE.push(fn)
	})
	return w
}
w.po = w.post = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.PO.push(fn)
	})
	return w
}
w.onPre = w.pre = function (fn) {
	var w = this, g = G(arguments)
	//fn = $.mo(.2,fn )
	w.pH.push(fn)
	return w
}
w.pre = function () {
	var w = this, g = G(arguments), o, fn
	if (F(g.t)) {
		fn = function (cx, i) {
			if (cx.w(g.f, g.s)) {
				g.t(cx)
			}
		}
	}
	else if (F(g.s)) {
		fn = function (cx, i) {
			cx.w(g.f, function (f) {
				_.b(g.s, this)(f, cx, i)
			})
		} //this good
	}
	else {
		fn = g.f
	}
	//fn=$.mo(.2,fn) //this will break it!!
	w.pH.push(fn)
	return w
}
w.post = w.po = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
w.pre = function () {
	var that = this
	_.each(arguments, function (func) {
		that.preHandlers.push(func)
	})
	return this
}
w.post = function () {
	var that = this
	_.each(arguments, function (func) {
		that.postHandlers.push(func)
	})
	return this
}
w._pre = function (fn) {
	var w = this, g = G(arguments)
	//fn = $.mo(.2,fn )
	w.pH.push(fn)
	return w
}
w.pre = function () {
	var w = this, g = G(arguments), o, fn
	//this good
	//fn=$.mo(.2,fn) //this will break it!!
	return w._pre(
			F(g.t) ?
					function (cx, i) {
						if (cx.w(g.f, g.s)) {
							g.t(cx)
						}
					} :
					F(g.s) ?
							function (cx, i) {
								cx.w(g.f, function (f) {
									_.b(g.s, this)(f, cx, i)
								})
							} :
							g.f
	)
}
w.post = w.po = function () {
	var w = this, g = G(arguments)
	g.e(function (fn) {
		w.PH.push(
				function (cx, I) {
					var i = _.m(I.normalImpulses, M.fl)[0],
							t = _.m(I.tangentImpulses, M.fl)[0]
					return fn(
							cx, i, t)
				})
	})
	return w
}
b.isSen = b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (U(g[0])) {
		return f.m_isSensor
	}
	f.m_isSensor = g[0] ? true : false
	return b
}
//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
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
w.GCC = function () {
	return this.GetContactCount()
}
w.GCL = function () {
	return this.GetContactList()
}
w.SCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}
w.SCL = function (cL) {
	this.SetContactListener(cL);
	return this
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
w.setContactFilter = w.sCF = w.SetContactFilter
w.SCF = w.sCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}