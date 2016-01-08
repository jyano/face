function bool() {
	function enab() {
		cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
			var cx = this
			if (U(a)) {
				return cx.IsEnabled()
			}
			cx.SetEnabled(a ? true : false);
			return cx
		}
		cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
			var cx = this
			if (U(a)) {
				return cx.IsEnabled()
			}
			cx.SetEnabled(a ? true : false);
			return cx
		}
	}
	
	function sensor() {
		cx.isSen = cx.iS = cx.s = cx.sen = function () {
			var cx = this, g = G(arguments)
			if (g.u) {
				return cx.IsSensor()
			}
			cx.SetSensor(g.f ? true : false)
			return cx
		}
		cx.isSen = cx.iS = cx.s = cx.sen = function () {
			var cx = this, g = G(arguments)
			if (g.u) {
				return cx.IsSensor()
			}
			cx.SetSensor(g.f ? true : false)
			return cx
		}
		cx.sr = cx.ofSr = function (fn) {
			var cx = this
			var sr = cx.aSr() ? [cx.fA(), cx.fB()] :
					cx.bSr() ? [cx.fB(), cx.fA()] :
							false
			if (fn) {
				fn(sr);
				return cx
			}
			return sr
		}
		cx.aSr = function () {
			return this.fA().iSr()
		}
		cx.bSr = function () {
			return this.fB().iSr()
		}
		cx.sensor = c.iS = function () {
			return this.IsSensor()
		}//Is this contact a sensor?
		cx.setSensor = c.sS = function (a) {
			this.SetSensor(a ? true : false);
			return contact
		}// Change this to be a sensor or-non-sensor this.
	}
	
	cx.iE = function () {
		return this.IsEnabled()
	}//Has this contact been disabled?
// ??? do i use any of below???
	cx.continuous = c.iC = function () {
		return this.IsContinuous()
	}//Does this contact generate TOI events for continuous simulation
	cx.enabled = c.sE = function (a) {
		this.SetEnabled(a ? true : false);
		return this
	} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
	cx.touching = c.iT = function () {
		return this.IsTouching()
	}//Is this contact touching.
//cx.manifold =c.gM=function(){return this.GetManifold()}
	cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
		var cx = this
		return cx.IsContinuous()
	} //Does this contact generate TOI events for continuous simulation
	cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
		return this.IsTouching()
	}
	cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
		var cx = this
		return cx.IsContinuous()
	} //Does this contact generate TOI events for continuous simulation
	cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
		return this.IsTouching()
	}
}
cx.iE = function () {
	return this.IsEnabled()
}
cx.en = cx.enabled = cx.sE = function (a) {
	this.SetEnabled(a ? true : false);
	return this
} // Enable/disable this this.//   
// This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
cx.off = cx.disable = cx.ds = cx.d = function () {
	this.SetEnabled(false)
	return this
}
cx.filtering = cx.fFF = function () {//whats the point?
	this.FlagForFiltering();
	return contact
}// Flag this contact for filtering.
// Filtering will occur the next time step.
function contactManager() {
	b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
		var m = new BXD.b2ContactManager
		m.c = m.cl = m.Collide
		m.a = m.aP = m.AddPair
		m.f = m.fNC = m.FindNewContacts
		m.d = m.ds = m.Destroy
		return m
	}
} 
function cxFilt() {
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
function flagging(){
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
	cx.filtering = cx.fFF = function () {
		var cx = this
		cx.FlagForFiltering();
		return cx
		// Flag this contact for filtering.
// Filtering will occur the next time step.
	}
}
