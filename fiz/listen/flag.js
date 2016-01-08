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