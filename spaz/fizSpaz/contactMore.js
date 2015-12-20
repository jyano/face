 
// *** function preSolve(){
w.preCl = function () {
	var w = this, g = G(arguments)
	w.pre(function (cx) {
		cx.w.apply(cx, g)
	})
	return w
}
//	w.tanFuture = cx.t = function () {}//what about tangent?
//presolve
//do any of these get used? i think filterData does
b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}
b2d.cxFilt = b2d.filter = b2d.f = function () {//used?
	var f = new BXD.b2ContactFilter
	f.rC = f.RayCollide
	f.sC = f.ShouldCollide
	return f
}
b2d.filt = b2d.filterData = function () {
	var d = new b2d.Dynamics.b2FilterData()
	d.gI = function (a) {
		if (U(a)) {
			return d.groupIndex
		}
		d.groupIndex = a;
		return d
	}
	d.cat = function (a) {
		if (U(a)) {
			return d.categoryBits
		}
		d.categoryBits = a;
		return d
	}
	d.mask = function (a) {
		if (U(a)) {
			return d.maskBits
		}
		d.maskBits = a;
		return d
	}
	return d
}
b2d.superManifold = function (m) {//used????
	m.lPN = m.m_localPlaneNormal
	m.lP = m.m_localPoint
	m.pC = m.m_pointCount
	m.p = m.m_points
	m.t = m.m_type
	return m
}
b2d.man = b2d.manifold = b2d.worldManifold = function () {
	return new b2d.Collision.b2WorldManifold()
}
//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
//////////
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
f.sp = function () {
	return this.sprites[0]
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.setKill = function () {
	$l('setKill boxFixt.js')
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
f.sp = function () {
	return this.sprites[0]
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.collide = f.cl = function (k, fn) {
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
b.fK = function (k) {
	var b = this
	var fx = null
	b.fs(function (f) {
		if (f.has(k)) {
			fx = f
		}
	})
	return fx
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	return this.GetLocalPoint(V(x, y, '-')).m()
}
b.gLVFLP = b.GetLinearVelocityFromLocalPoint
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
b.collide = b.cl = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(this, g.s)
		return this
	}
	if (g.F_) {
		o = {fn: g.f, k: ''}
	}
	else {
		o = {k: g.f, fn: g.s}
	}
	w.b(function (cx) {
		var fA = cx.A(),
				fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)
		) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
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
b.GLP = function (vec) {
	return this.GetLocalPoint(vec)
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	var vec = N(x) ? V(x, y) : x
	return this.GLP(vec.d()).m()
}
b.gLVFLP = function (vec) {
	return this.GetLinearVelocityFromLocalPoint(vec)
}
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
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
//cx.excludes=function(u){return !this.includes(u)}
//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)
// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
 
cx.ds = cx.destroy = cx.destroyBoth = function () {
	this.a().K('destroy')
	this.b().K('destroy')
	return this
}
cx.destroy = cx.destroyBoth = function () {
	this.a().setDestroy()
	this.b().setDestroy()
	return this
}
cx.destroyIf = function (kind) {
	this.a().setDestroyIf(kind);
	this.b().setDestroyIf(kind)
}
cx.destroyOtherIf = function (kind) {
	var a = this.a(), b = this.b()
	if (a.is(kind)) {
		b.setDestroy()
	}
	else if (b.is(kind)) {
		a.setDestroy()
	}
}
// zero :
cx.ofThis = cx.anyWith = cx.in = cx.inc = cx.includes = cx.includes = cx.eitherOf = function (k, fn) {
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(k)) {
		if (fn) {
			_.b(fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	if (b.of(k)) {
		if (fn) {
			_.b(fn, b)(a, cx);
			return cx
		}
		return [b, a]
	}
}
cx.ofThese0 = cx.these0 = function (p1, p2, fn) {
	$l('these0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(p1) && b.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	if (b.of(p1) && a.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.f1 = function () {
	return function () {
	}
}
cx.ofThis0 = cx.this0 = function (k, fn) {
	// a lot:$l('this0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	var g = G(arguments)
	if (!a || !b) {
		$l('!a || !b');
		return cx
	}
	if (a.of(g.f)) {
		if (F(g.s)) {
			_.in(0, function () {
				_.b(g.s, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	else if (b.of(g.f)) {
		if (g.s) {
			_.in(0, function () {
				_.b(g.s, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.of0 = cx.w0 = cx.with0 = function () {
	var cx = this,
			g = G(arguments), o
	o = F(g.t) || g.s && !F(g.s) ?
	{k: g.f, k1: g.s, fn: g.t} : {k: g.f, fn: g.s}
	return o.k1 ? cx.these0(o.k, o.k1, o.fn) :
			cx.this0(o.k, o.fn)
}
 function ultimate(){
	 _.mbIn = function () {
		 return function (fn) {
			 var g = G(arguments)
			 g.p ? fn.apply(null, g) :
					 _.in(0, function () {
						 fn.apply(null, g)
					 })
		 }
	 }
//if there is a fn i'll run it, binding to b, (a, cx) and even pass in the g.o, return cx
//otherwise its sync, so just pass back array [b,a,cx,g.o]
	 _.fst = function (f, s, t, fn) {
		 var o = G(arguments).o
		 if (fn) {
			 _.b(fn, f)(s, t, o);
			 return t
		 }
		 return [f, s, t, o]
	 }
	 cx.a$ = function () {
		 return _.fst(this.fA(), this.fB(), this, G(arguments).o)
	 }
	 cx.b$ = function () {
		 return _.fst(this.fB(), this.fA(), this, G(arguments).o)
	 }
	 cx.$$ = function () {
		 var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB(), o //k,fn
		 o = F(g.t) ? {k1: g.f, k2: g.s, fn: g.t} :
				 F(g.s) ? {k: g.f, fn: g.s} :
				 {k1: g.f, k2: g.s}
		 return o.k1 ?
				 (
						 a.of(o.k1) && b.of(o.k2) ? cx.a$(o.fn)
								 :
								 b.of(o.k1) && a.of(o.k2) ? cx.b$(o.fn)
										 :
										 cx
				 )
				 :
				 (
						 a.of(o.k) ? cx.a$(o.fn)
								 :
								 b.of(o.k) ? cx.b$(o.fn)
										 :
										 cx
				 )
	 }
	 function moreTries() {
		 cx.ab = function (k, fn) {
			 var cx = this
			 return function (k, fn) {
				 var that = this
				 if (cx.fA().of(k)) {
					 if (fn) {
						 _.b(fn, cx.fA())(cx.fB(), cx);
						 return that
					 }
					 return [cx.fA(), cx.fB()]
				 }
				 else if (cx.fB().of(k)) {
					 if (fn) {
						 _.b(fn, cx.fB())(cx.fA(), cx);
						 return that
					 }
					 return [cx.fB(), cx.fA()]
				 }
			 }
		 }
		 cx.aOrB1 = function (fn) {
			 var g = G(arguments)
			 //var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB()
			 return function (f) {
				 if (fA.of(f)) {
					 fn(f, cx)
				 }
				 else if (fB.of(g.f)) {
				 }
			 }
		 }
		 cx.cxFn = function (txMatFn, sucMatFn) {
			 var cx = this
			 var a = cx.fA()
			 var b = cx.fB()
			 return function (cx) {
				 var cx = this
				 var res = txMatFn(cx)
				 if (res) {
					 if (sucMatfn) {
						 _.b(sucMatFn, res[0])(res[1], cx);
						 return cx
					 }
					 return [res[0], res[1], cx]
				 }
			 }
		 }
		 cx.mbFn = function () {
			 var g = G(arguments), o
			 o = F(g.t) ? {a: g.f, b: g.s, fn: g.t} :
					 F(g.s) ? {a: g.f, fn: g.s} :
					 {a: g.f, b: g.s}
			 var cx = this,
					 a = cx.fA(),
					 b = cx.fB()
			 if (o.fn) {
				 _.b(o.fn, a)(b, cx);
				 return cx
			 }
			 return [a, b]
		 }
		 cx.a$ = function (fn) {
			 var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB()
			 if (fn) {
				 _.b(fn, a)(b, cx, g.o);
				 return cx
			 }
			 return [a, b, cx, g.o]
		 }
	 }
 }
 