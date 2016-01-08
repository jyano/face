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
w.startListening = function () {
	var w = this
	w.listen = w.sCL = w.SetContactListener
	b2d.listener = function () {
		return new b2.Dynamics.b2ContactListener
	}
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.endHandlers = w.endHandlers || []
	w.listener.BeginContact = function (cx) {
		_.each(w.beginHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listener.EndContact = function (cx) {
		_.each(w.endHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listen(w.listener)
}
b2d.either = function (ob1, ob2, is1, is2) {
	return (ob1.is(is1) && ob2.is(is2)) ||
			(ob1.is(is2) && ob2.is(is1))
	return {
		is: function (data) {
			return body1.is(data) || body2.is(data)
		}
	}
}
b2d.neither = function (body1, body2) {
	return {
		is: function (data) {
			return !body1.is(data) && !body2.is(data)
		}
	}
}
function flag() {
	b.trig = b.trg = function (k, fn) {
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = true
					}
				},
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = false
					}
				})
		if (F(fn)) {
			$t(function () {
				if (b.trig[k]) {
					_.b(fn, b)(b.trig[k])
				}
			})
		}
		return b
	}
	b.my = function (k, k2, fn) {
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k, k2)) {
						b.trig[k + k2] = true
					}
				},
				function (cx) {
					if (cx.w(k, k2)) {
						b.trig[k + k2] = false
					}
				}
		)
		if (F(fn)) {
			$t(function () {
				if (b.trig[k + k2]) {
					_.b(fn, b)(b.trig[k + k2])
				}
			})
		}
		return b
	}
	function bodWhileWhen() {
		b.while = b.wl = function (k, fn) {
			var b = this, w = b.W()
			w.wl(b, k, fn)
			return b
		}
		b.when = b.wn = function (k, oB, oE) {
			var b = this, w = b.W()
			w.wn(b, k, oB, oE)
			return b
		}
		b.while = b.wl = function (k, fn) {
			var b = this, w = b.W()
			w.wl(b, k, fn)
			return b
		}
		b.when = b.wn = function (k, oB, oE) {
			var b = this,
					w = b.W()
			w.wn(b, k, oB, oE)
			return b
		}
		b.whenFxt = b.bindFxt = b.bindMyFxt = b.bindMyFxtWhen = b.my = function (k, fn) {
			var b = this, w = b.W()
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a col
			if (F(fn)) {
				w.b(function (cx) {
					cx.w(b,
							function (f) {
								if (this.of(k)) {
									_.b(fn, this)(f, cx)
								}
							})
				})
			}
			else {
				w.wn(b,
						function () {
							b.my[k] = 1
						},
						function () {
							b.my[k] = 0
						})
			}
			return b
		}
		b.wlMy = function (k, fn) {
			var b = this
			b.togMy(k)
			$t(function () {
				var f = b.my[k]
				if (f) {
					_.b(fn, b.fK(k))(f)
				}
			})
			return b
		}
	}
	
	function flag() {
		FLAGS = {}
		_flag = flag = function (p) {
			_.e(FLAGS, function (v, k) {
				if (v === true) {
					flagHandlers[k](p)
					FLAGS.warp = false
					FLAGS[k] = false
				}
			})
		}
		$flag = function (ob) {
			alert('$flag flag.js')
			flagHandlers = ob
			$t(function () {
				_flag(p)
			})
		}
		w.flag = function (fl, v) {
			var w = this
			w.flags = w.flags || {}
			if (U(v)) {
				v = true
			}
			w.flags[fl] = v
			return w
		}
		w.flagged = function (fl) {
			var w = this
			w.flags = w.flags || {}
			var wasFlagged = w.flags[fl]
			if (wasFlagged) {
				w.flags[fl] = false
			}
			return wasFlagged
		}
		w.on = function (onWhat, fn) {
			var w = this
			//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
			//interesting default !!!!!!!
			//func=func||function(val){val()}
			$t(function () {
				var v = w.flagged(onWhat)
				if (v) {
					fn(v)
				}
			})
			return w
		}
	}
	
	function worWhileWhen() {
		w.wl1 = w.while1 = function (k, fn) {
			var w = this,
					push = false
			w.b(function (cx) {
				if (cx.w(k)) {
					push = true
				}
			})
			w.end(function (cx) {
				if (cx.w(k)) {
					push = false
				}
			})
			$t(function () {
				if (push) {
					fn()
				}
			})
			return w
		}//= w.whileSensor
		w.wl = w.while = function (k, k2, fn) {
			var w = this,
					push = false
			if (F(k2)) {
				return w.while1(k, k2)
			}
			w.b(function (cx) {
				if (cx.w(k, k2)) {
					push = true
				}
			})
			w.end(function (cx) {
				if (cx.w(k, k2)) {
					push = false
				}
			})
			$t(function () {
				if (push) {
					fn()
				}
			})
			return w
		}//= w.while2
		w.wn1 = w.when1 = function (k1, bFn, eFn) {
			var w = this
			w.begEnd(function (cx) {
						if (cx.w(k1)) {
							bFn()
						}
					},
					function (cx) {
						if (cx.w(k1)) {
							eFn()
						}
					})
			return w
		}
		w.wn = w.when = function (k1, k2, bFn, eFn) {
			var w = this
			if (F(k2)) {
				return w.when1(k1, bFn, eFn)
			}
			w.begEnd(function (cx) {
						if (cx.w(k1, k2)) {
							bFn()
						}
					},
					function (cx) {
						if (F(eFn)) {
							if (cx.w(k1, k2)) {
								eFn()
							}
						}
					})
			return w
		}
		w.when = w.wn = function () {
			var w = this, g = G(arguments), o
			o = F(g[0]) ? {b: g[0], e: g[1]}
					: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
					: {k: g[0], k2: g[1], b: g[2], e: g[3]}
			//when b,[e]  k,b,[e]  k,k2,b,[e]
			if (o.k2) {
				w.b(o.k, o.k2, o.b);
				if (o.e) {
					w.end(o.k, o.k2, o.e)
				}
			}
			else if (o.k) {
				w.b(o.k, o.b);
				if (o.e) {
					w.end(o.k, o.e)
				}
			}
			else {
				w.b(o.b);
				if (o.e) {
					w.end(o.e)
				}
			}
			return w
		}
		w.while = w.wl = function (k, k2, fn) {
			var w = this, push
			if (F(fn)) {
				w.wn(k, k2,
						function () {
							push = true
						},
						function () {
							push = false
						})
				T.t(function () {
					if (push) {
						fn()
					}
				})
			}
			else if (F(k2)) {
				w.wn(k, function () {
					push = true
				}, function () {
					push = false
				});
				T.t(function () {
					if (push) {
						k2()
					}
				})
			}
			return w
		}
		w.when = w.wn = function () {
			var w = this, g = G(arguments), o
			o = g.F_ ? {b: g.f, e: g.s}
					: F(g.s) ? {k: g.f, b: g.s, e: g.t}
					: {k: g.f, k2: g.s, b: g.t, e: g.fo}
			//when b,[e]  k,b,[e]  k,k2,b,[e]
			if (o.k2) {
				w.b(o.k, o.k2, o.b);
				if (o.e) {
					w.end(o.k, o.k2, o.e)
				}
			}
			else if (o.k) {
				w.b(o.k, o.b);
				if (o.e) {
					w.end(o.k, o.e)
				}
			}
			else {
				w.b(o.b);
				if (o.e) {
					w.end(o.e)
				}
			}
			return w
		}
		w.while = w.wl = function (k, k2, fn) {
			var w = this, push
			if (F(fn)) {
				w.wn(k, k2, function () {
					push = true
				}, function () {
					push = false
				})
				$t(function () {
					if (push) {
						fn()
					}
				})
			}
			else if (F(k2)) {
				w.wn(k,
						function () {
							push = true
						},
						function () {
							push = false
						});
				$t(function () {
					if (push) {
						k2()
					}
				})
			}
			return w
		}
	}
	
	w.ledge = function () {// Sometimes game logic needs to know when two fixtures overlap
// yet there should be no collision response.
// This is done by using sensors.
// A sensor is a fixture that detects collision
// but does not produce a response.
// You can flag any fixture as being a sensor.
// Sensors may be static or dynamic.
// Remember that you may have multiple fixtures per body
// and you can have any mix of sensors and solid fixtures.
// Sensors do not generate contact points. 
// 2ways to get the state of a sensor:
//  b2Contact.IsTouching,    b2ContactListener.BeginContact/EndContact
		var w = this
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		return this
	}
	function footKilling() {
		w.foot = w.footListener = function () {
			b2d.onGround = false
			numLaps = 0
			delay = 0
			w.b(function (cx) {
				if (cx.w('foot')) {
					b2d.onGround = true
					numLaps++
				}
				//$l(numLaps)
			})
			$t(function () {
				delay--
			})
			w.end(function (cx) {
				if (cx.w('foot')) {
					b2d.onGround = false
					numLaps--
				}
				//$l(numLaps)
			})
			return this
		}//this works but only for one mario!!!
		w.startKilling = function () {
			var w = this
			$t(function () {
				w.eB(function (b) {
					if (b.is('destroy')) {
						b.K('destroyed');
						b.kill()
					}
				})
			})
			return w
		}
	}
	
	b.togMy = function (k) {
		var b = this, w = b.W()
		b.wn(k, function (f) {
					//var f = cx.A().of(k)? cx.B(): cx.A()
					b.my[k] = f
				},
				function () {
					b.my[k] = 0
				})
		return b
	}
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a colison
	b.my = b.whenFxt = b.bindFxt = b.bindMyFxt = b.bindMyFxtWhen = function (k, fn, endFn) {
		var b = this, w = b.W()
		b.togMy(k)
		if (F(fn)) {
			b.cl(function (otherF, cx) {
				if (this.of(k)) {
					_.b(fn, this)(otherF, cx)
				}
			})
			if (F(endFn)) {
				b.end(function (otherF, cx) {
					if (this.of(k)) {
						_.b(endFn, this)(otherF, cx)
					}
				})
			}
		}
		return b
	}
	b.clMy = function (k, fn) {
		var b = this
		b.cl(function (f, cx) {
			if (this.of(k)) {
				_.b(fn, this)(f, cx)
			}
		})
	}
	b.when1 = function () {
		var body = this, w = body.wor(), ob = {}
		ob.contacts = function (kind, func) {
			w.beg(kind, func)
			return {
				after: function (func) {
					w.end(kind, func)
				}
			}
		}
		return ob
	}
	b.when = function (what, bFunc, eFunc) {
		var b = this,
				w = b.wor()
		w.when(b, what, bFunc, eFunc)
		return this
	}
	b.trig2 = function (act, func) {
		var body = this,
				w = body.wor()
		w.when(body,
				function () {
					body.trig[act] = true
				},
				function () {
					body.trig[act] = false
				}
		)
		if (F(func)) {
			func = _.bind(func, body)
			cjs.tick(function () {
				if (body.trig[act]) {
					func()
				}
			})
		}
		return this
	}
	b.trig = function (fixtKind, func) {
		var b = this, w = b.wor()
		var touching = false
		w.beg(function (cx) {
			cx.with(b, function () {
				if (this.hasClass(fixtKind)) {
					if (F(func)) {
						_.bind(func, this)()
					}
				}
				//$l('BODY: ' + this.B().K() + ' |FIXT: '+ this.K() )
			})
		})
		cjs.tick(function () {
			if (touching) {
				func()
			}
		})
		return this
	}
	b.while = function (what, func) {
		var body = this,
				w = body.wor()
		w.while(body, what, func)
		return this
	}
	w.flag = function (flag, val) {
		this.flags = this.flags || {}
		if (U(val)) {
			val = true
		}
		this.flags[flag] = val
		return this
	}
	w.flagged = function (flag) {
		this.flags = this.flags || {}
		var wasFlagged = this.flags[flag]
		if (wasFlagged) {
			this.flags[flag] = false
		}
		return wasFlagged
	}
	w.on = function (onWhat, func) {
		//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
		var that = this
		//interesting default !!!!!!!
		//func=func||function(val){val()}
		cjs.tick(function () {
			var val = that.flagged(onWhat)
			if (val) {
				func(val)
			}
		})
		return this
	}
	w.when = function (what, what2, bFunc, eFunc) {
		var w = this
		if (F(what)) {
			eFunc = what2
			bFunc = what
			w.beg(bFunc)
			if (eFunc) {
				w.end(eFunc)
			}
		}
		else if (F(what2)) {
			eFunc = bFunc
			bFunc = what2
			w.beg(what, bFunc)
			if (eFunc) {
				w.end(what, eFunc)
			}
		}
		else if (F(bFunc)) {
			w.beg(what, what2, bFunc)
			if (eFunc) {
				w.end(what, what2, eFunc)
			}
		}
		return this
	}
	w.while = function (kind, kind2, func) {
		var w = this
		var push = false
		if (F(func)) {
			w.when(kind, kind2,
					function () {
						push = true
					},
					function () {
						push = false
					})
			cjs.tick(function () {
				if (push) {
					func()
				}
			})
		}
		else if (F(kind2)) {
			w.when(kind,
					function () {
						push = true
					},
					function () {
						push = false
					})
			cjs.tick(function () {
				if (push) {
					kind2()
				}
			})
		}
		return this
	}
	f.cl = f.collide = function (k, fn) {
		var f = this
		//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
		if (F(k)) {
			fn = k;
			k = ''
		}
		fn = _.b(fn, f)
		w.b(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (f.of(fA) && fB.of(k)) {
				fn(fB, cx)
			}
			if (f.of(fB) && fA.of(k)) {
				fn(fA, cx)
			}
		})
		return f
	}
}
w.b = w.bg = w.beg = function () {
	//ADDS one or more handlers to beginHandlers array
	var w = this
	G(arguments).e(function (fn) {
		w.BG.push(fn)
	})
	return w
}
function handlingApps() {
	BEGIN = BEG = function () {
		W().ba()
		w.ship()
		w.roof.kill()
		w.on('new', function () {
			w.ba(300, 100, 2)
		})
		w.b(function () {
			w.flag('new')
		})
	}
	FLAGTHROTTLE = THO = function () {
		W().ball(300, 300, 100)
		brick = w.brick(300, 500)
		w.st.squareDot(400, 100)
		$t(function () {
			if (w.flagged('moveBrick')) {
				brick.X(brick.X() + 20)
			}
		})
		time = 0
		lastTime = 0
		_.ev(1, function () {
			time++
		})
		w.b(function (cx) {
			if (cx.w('brick')) {
				if (lastTime != time) {
					lastTime = time;
					w.flag('moveBrick')
				}
			}
		})
	}
	AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
		W()
		p = w.p('hoppy')
		$flag({
			warp: function (p) {
				p.XY(200, 100)
			},
			log: function () {
				$l('haha')
			}
		})
	}
	VORTEX = VOX = function () {
		$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
		b2d.levelJet()
		w.rectStat(200, 250, 200, 20)
		floor.kill()
		_.t(20, function () {
			w.ba(100, 100, 10).K('ball')
		})
		vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
		w.while('vortex', 'player', function () {
			w.eB('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	VORTEXOK = VOK = function () {
		W({W: 600, H: 300, g: 10})
		p = w.p(2.5).con('thrust')
		moveB = function () {
			b.lV(0, -5)
		}
		moveX = function () {
			bx.lV(0, -5)
		}
		b = w.ball(100, 100, 10).K('ball')
		bx = w.box(50, 100, 14)
		w.stat(600, 200, $cF(200).mS()).K('vortex')
		//this happens every RE-ENTRY into sensor (when)
		w.when('vortex', 'player', moveX)
		//this happens repeadly until sensor exited
		w.while('vortex', moveB)
		$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
				'something with trig?', 'fixed.. (see code)')
	}
	KINGOFMES = MES = function () {
		
		//all jumping together???!
		//w= b2d.mW()
		$levelWalls()
		_.t(5, function () {
			w.me(2.5).X(400)
					.trig('foot', function () {
						this.I(20, -40)
					}).re(1)
			w.me(2.5).X(100)
					.trig('foot', function () {
						this.I(-20, -40)
					})
		})
	}
	HAT = function () {
		// could i automatically have body listen to their sensors?
		$levelWalls()
		w.ball().re(.3)
		p.XY(400, 150).trig('right').trig('left')
				.trig('head', function () {
					this.bS('guy')
				})
		$.space(function () {
			if (p.trig.right) {
				p.I(100, -400)
			}
			if (p.trig.left) {
				p.I(-100, -400)
			}
		})
	}
	VORTEX1 = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
		cir.sp().al(.5)
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	MES = FEET = function () {
		W()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
	}
	TETHER1 = function () {
		W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
		b = w.D(100, 100, 'b', 40).warp()
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
		y.warp()
				.wl('vor', function () {
					b.vY(-20)
				})
				.wn('vor', function () {
					x.vY(-20)
				}, function () {
					w.C($r())
				})
	}
	PLAT1 = function () {
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	VORTEX = LEDGE = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
		w.ledge()
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		}).warp().wl('vor', function () {
			b.vY(-20)
		}).wn('vor', function () {
			x.vY(-20)
		}, function () {
			w.C($r())
		})
	}
	DIVEBALL = DOT = PLAT = function () {
		W()
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
		W([1200, 800], {g: 8, w: '='}).Y()
		w.y().warp()
		b = w.D(100, 100, 'b', 40).warp()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
		w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		w.D(500, 200, 'z', 30).K('z');
		w.wn('z', function () {
			$l('beg')
		}, function () {
			$l('end')
		})
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		b = w.S(1000, 200)
		b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
		b.f().sprites[0].al(.8)
	}
	WCIR = WBALL = WCIRC = ALPHA = MY = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
	VORTEX1 = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
		cir.sp().al(.5)
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		})
	}
	MES = FEET = function () {
		W(30)
		_.t(3, function () {
			w.me(900, 100, 5).fR()
					.my('feet', function () {
						//if(K.u){
						this.lV(-2, -10)
						//}
					})
			w.me(700, 100, 5).fR().my('feet', function () {
				if (K.u) {
					this.lV(2, -10)
				}
			})
		})
	}
	TETHER1 = function () {
		W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
		b = w.D(100, 100, 'b', 40).warp()
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
		y.warp()
				.wl('vor', function () {
					b.vY(-20)
				})
				.wn('vor', function () {
					x.vY(-20)
				}, function () {
					w.C($r())
				})
	}
	PLAT1 = function () {
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	VORTEX = LEDGE = function () {
		W([1200, 800], {g: 8}).Y()
		vor = w.S(600, 200)
		vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
		w.ledge()
		y.wl(vor, function () {
			w.e('ball', function (b) {
				b.tow(600, 200)
			})
		}).warp().wl('vor', function () {
			b.vY(-20)
		}).wn('vor', function () {
			x.vY(-20)
		}, function () {
			w.C($r())
		})
	}
	DIVEBALL = DOT = PLAT = function () {
		W()
		w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
			w.D(50, 100, 'x', 60, 60).K('x').warp()
		})
		w.D(440, 100, 'y', 50).K('ball');
		w.cl('ball', function (cx) {
			this.B().dot()
		})
	}
	SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
		W([1200, 800], {g: 8, w: '='}).Y()
		w.y().warp()
		b = w.D(100, 100, 'b', 40).warp()
		_.t(3, function () {
			w.me(900, 100, 5).fR().my('feet', function () {
				this.lV(-2, -10)
			})
			w.me(700, 100, 5).fR().my('feet', function () {
				this.lV(2, -10)
			})
		})
		w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
		w.D(500, 200, 'z', 30).K('z');
		w.wn('z', function () {
			$l('beg')
		}, function () {
			$l('end')
		})
		x = w.D(50, 100, 'x', 60, 60).K('x').warp()
		b = w.S(1000, 200)
		b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
		b.f().sprites[0].al(.8)
	}
	WCIR = WBALL = WCIRC = ALPHA = MY = function () {
		W()
// could i automatically have body listen to their sens?
		w.ball().r(.3)
		workingGoomba = p = w.p(900, 450).cn('jump')
		p.my('hat', function () {
			p.bS('guy')
		})
		p.my('right');
		p.my('left')
		$.space(function () {
			if (p.my.right) {
				p.I(100, -400)
			}
			if (p.my.left) {
				p.I(-100, -400)
			}
		})
	}
	WLMY = function () {
		W(20)//.roof.kill()
		_.t(10, function () {
			var p = w.p(R(500, 50), R(300, 100))//.re(1)
			p.fK('hat')//.C($r())
			p.clMy('hat', function (f) {
				
				
				//this.C($r());
				//f.B().C('w');f.C('z')
				var b0 = this.B()
				b0.rt(-180);
				_.in(1, function () {
					b0.stat()//kill()
				})
				var b = f.B()
				if (b.of('player')) {
					b.I(R() ? -200 : 200, -200)
					ff = b.fK('hat')
					ff.C($r())
					//b.rt(10, '+')
				}
				//this.B().kill()
			})
			//p.wlMy('foot', function(f){p.X(10, '+');_f = f;f.C('w')})
		})
		b = w.D(300, 400)
		b.cir('r', 40)
		f = b.cir('b', 20, 80, 0).K('hand')
		b.aV(20).lV(20, 20)
		//f = b.rec( 'w', 300, 20, 150,0,22).K('rec')
		//good:
		//b.clMy('hand', function(f){this.C($r());f.B().C('w');f.C('z')})
	}
}
w.SCF = w.sCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}
function bits() {
	fD.cat = fD.cB = fD.ct = function (cB) {
		var fD = this
		if (U(cB)) {
			return fD.filter.categoryBits
		}
		fD.filter.categoryBits = cB;
		return fD
	}
	fD.msk = fD.ms = fD.mask = fD.mB = function () {
		var fD = this
		var g = G(arguments)
		if (g.u) {
			return fD.filter.maskBits
		}
		var n = 0
		_.e(g, function (msk) {
			n += msk
		})
		fD.filter.maskBits = n
		return fD
		function alt() {
			fd.msk = fd.mask = fd.mB = function (a) {
				if (U(a)) {
					return this.filter.maskBits
				}
				this.filter.maskBits = a;
				return this
			}
		}
	}
	fD.bit = fD.bt = fD.bits = function (cat, msk) {
		return this.cat(cat).msk(msk)
	}
	f.msk = f.mskBit = function (msk) {
		var f = this, g = G(arguments),
				flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
		if (g.u) {
			return flDa.maskBits
		}
		if (A(g.f)) {
			num = 0
			_.e(g.f, function (bits) {
				num += bits
			})
			g.f = num
		}
		flDa.maskBits = g.f
		f.flDa(flDa)
		return f
		function dit() {
			f.mskBit = f.msk = function (msk) {
				var f = this, g = G(arguments),
						flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
				if (g.u) {
					return flDa.maskBits
				}
				if (A(g.f)) {
					num = 0
					_.e(g.f, function (bits) {
						num += bits
					})
					g.f = num
				}
				flDa.maskBits = g.f
				f.flDa(flDa)
				return f
			}
		}
	}
	f.cat = f.catBit = function () {
		var f = this, g = G(arguments),
				flDa = f.flDa()
		if (g.u) {
			return flDa.categoryBits
		}
		flDa.categoryBits = g.f;
		f.flDa(flDa);
		return f
	}
	f.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	b.cat = function () {
		var b = this, g = G(arguments);
		if (g.u) {
			return b
		}
		b.fs(function (f) {
			f.cat(g.f)
		});
		return b
	}
	b.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	b.msk = function () {
		var b = this, g = G(arguments);
		b.fs(function (f) {
			f.msk(g.f)
		})
		return b
	}
}
function grpIx() {
	f.grp = function (i) {
		var fl = this.GetFilterData()
		if (U(i)) {
			return fl.groupIndex
		}
		fl.groupIndex = i
		this.SetFilterData(fl)
		return this
	} //get/set for groupIndex
	f.gI = f.gr = f.grp = f.ix = function (gI) {
		var f = this,
				flD = f.flD()
		return U(gI) ? flD.gI() : f.flD(flD.gI(gI))
	}
	fD.gI = fD.gr = fD.ix = fD.grp = function (gI) {
		var fD = this
		if (U(gI)) {
			return fD.filter.groupIndex
		}
		fD.filter.groupIndex = gI;
		return fD
	}
//Changing the collision filter at run-time
//You can change each of the categoryBits, maskBits, groupIndex
// by setting a new b2Filter in the fixture.
// Quite often you only want to change one of these,
// so it's handy to be able to get the existing filter first,
// change the field you want, and put it back.
	b.gI = function (gI) {
		return this.fs(function (f) {
			f.gI(gI)
		})
	}
	fd.grp = fd.group = fd.index = fd.gI = function (a) {
		if (U(a)) {
			return this.filter.groupIndex
		}
		this.filter.groupIndex = a;
		return this
	}
	/*flDa.groupIX= flDa.grp = flDa.g = function (grp) {
	 var flDa = this
	 if (U(grp)) {
	 return flDa.groupIndex
	 }
	 flDa.groupIndex = grp
	 return flDa
	 }
	 f.groupIx=f.grp = function (grpIx) {
	 var f = this, fl = f.GetFilterData()
	 if (U(grpIx)) {
	 return fl.groupIndex
	 }
	 fl.groupIndex = grpIx
	 f.SetFilterData(fl)
	 return f
	 //get/set for groupIndex
	 }
	 fd.groupIx= fd.grp = fd.group = fd.index = fd.gI = function (a) {
	 if (U(a)) {
	 return this.filter.groupIndex
	 }
	 this.filter.groupIndex = a;
	 return this
	 }
	 f.groupIx = f.grp = function (i) {
	 var f = this, fl = f.fl()
	 if (U(i)) {
	 return fl.groupIndex
	 }
	 fl.groupIndex = i
	 return this.fl(fl)
	 }
	 b.groupIX=b.grp = function (i) {
	
	 if (U(i)) {
	 return this.f().grp()
	 }
	
	
	
	
	 this.fs(function (f) {
	 f.grp(i)
	 })
	 return this
	
	 }
	 b.groupIx=b.grp = function (grp) {
	
	 var b = this
	
	 b.fs(function (f) {
	 f.grp(grp)
	 })
	
	 return b
	
	 } */
	flDa.groupIX = flDa.grp = flDa.g = function (grp) {
		var flDa = this
		if (U(grp)) {
			return flDa.groupIndex
		}
		flDa.groupIndex = grp
		return flDa
	}
	f.groupIx = f.grp = function (grpIx) {
		var f = this, fl = f.GetFilterData()
		if (U(grpIx)) {
			return fl.groupIndex
		}
		fl.groupIndex = grpIx
		f.SetFilterData(fl)
		return f
		//get/set for groupIndex
	}
	fd.groupIx = fd.grp = fd.group = fd.index = fd.gI = function (a) {
		if (U(a)) {
			return this.filter.groupIndex
		}
		this.filter.groupIndex = a;
		return this
	}
	f.groupIx = f.grp = function (i) {
		var f = this, fl = f.fl()
		if (U(i)) {
			return fl.groupIndex
		}
		fl.groupIndex = i
		return this.fl(fl)
	}
	b.groupIX = b.grp = function (i) {
		if (U(i)) {
			return this.f().grp()
		}
		this.fs(function (f) {
			f.grp(i)
		})
		return this
	}
	b.groupIx = b.grp = function (grp) {
		var b = this
		b.fs(function (f) {
			f.grp(grp)
		})
		return b
	}
}
function flag() {
	cx.filtering = cx.fFF = function () {
		var cx = this
		cx.FlagForFiltering();
		return cx
		// Flag this contact for filtering.
// Filtering will occur the next time step.
	}
}
function filteringApps() {
	GRP = function () {
		W(20)
		w.pen('things dont collide with their own kind..')
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $cF(80).cat(2).gr(-3))
					.re(1).I(100, 100)
		})
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $rF(120, 120).gr(-4)).re(1).I(100, 100)
		})
		_.t(5, function () {
			w.ship().gI(-5)
		})
		_.t(1, function () {
			w.p().con('imp').gI(-5)
		})
	}
	DYNFILT = FIL = function () {
		W()
		f = w.ball(300, 300, 50).re(4).I(1000, 300).f()
		_.in(2, function () {
			flD = f.flD()
			flD.cB(0)
			f.SFD(flD)
		})
	}
	FLT = function () {
		W()
		w.D(300, 300,
				$cF(80).bt(2, 5))  // colls 4,1
		w.D(300, 300,
				$rF(60, 90, 0, 40, 10).bt(8, 3)) //colls 2,1
		w.D(400, 300,
				$cF(80).cat(2).gr(-3)) //cat 1
		w.D(400, 300,
				$rF(60, 90, 0, 40, 10).gr(-3)) //cat 1
	}
	BIT = function () {
		W()
		cir = $cF(80).cat(2).msk(1, 4)
		rec = $rF(60, 90).cat(4).msk(1, 2, 4)
		cir2 = $cF(12).cat(4).msk(2, 4)
		w.D(300, 300, cir)
		w.D(400, 30, cir)
		w.D(300, 300, rec)
		w.D(400, 300, rec)
		_.t(50, function () {
			w.D(300, M.r() * 400 + 100, cir2)
			w.D(250, M.r() * 400 + 100, cir2)
			w.D(500, M.r() * 400 + 100, cir2)
		})
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
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