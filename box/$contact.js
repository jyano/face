cx.A = function () {
	return this.GetFixtureA()
}
cx.B = function () {
	return this.GetFixtureB()
}
cx.a = function () {
	return this.A().body()
}
cx.b = function () {
	return this.B().body()
}
cx.getFxtA = cx.A = function () {
	return this.GetFixtureA()
}
cx.getFxtB = cx.B = function () {
	return this.GetFixtureB()
}
cx.getBodA = cx.a = function () {
	return this.A().B()
}
cx.getBodB = cx.b = function () {
	return this.B().B()
}
cx.fA = cx.getFxtA = cx.A = function () {
	return this.GetFixtureA()
}
cx.fA = cx.getFxtB = cx.B = function () {
	return this.GetFixtureB()
}
cx.bA = cx.getBodA = cx.a = function () {
	return this.A().B()
}
cx.bA = cx.getBodB = cx.b = function () {
	return this.B().B()
}
cx.fA = cx.A = cx.GFA = function () {
	return this.GetFixtureA()
}
cx.fB = cx.B = cx.GFB = function () {
	return this.GetFixtureB()
}
cx.bA = cx.a = function () {
	return this.A().B()
}
cx.bB = cx.b = function () {
	return this.B().B()
}
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	cx.includes = cx.ic = function () {
		var cx = this, g = G(arguments)
		/* protosig
		 //     str    :  str,fn   :   obj   :   obj,fn
		
		 w.b(function(cx){
		 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
		 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
		 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
		 })
		 */
		if (F(g.s)) {
			if (cx.A().of(g.f)) {
				_.b(g.s, cx.A())(cx.B(), cx)
			}
			else if (cx.B().of(g.f)) {
				_.b(g.s, cx.B())(cx.A(), cx)
			}
			return cx
		}
		//if this fixture 'of' that string(kind),fixt,or body
		//if so always passed back an array with the first mentioned selector in the [0] pos
		return cx.A().of(g.f) ? [cx.A(), cx.B()] :
				cx.B().of(g.f) ? [cx.B(), cx.A()] :
						false
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	}
	cx.between = cx.bw = function () {
		var cx = this,
				g = G(arguments),
		// bw(k,k1)  or  bw(k,k1,fn)
				a = cx.A(), b = cx.B()
		if (F(g.t)) {
			if (a.of(g.f) && b.of(g.s)) {
				g.t.apply(a, [b, cx])
			}
			else if (b.of(g.f) && a.of(g.s)) {
				g.t.apply(b, [a, cx])
			}
			return cx
		}
		return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
	}
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.with = function (a, b, c) {
	if (U(b) || F(b)) {
		return this.includes(a, b)
	}
	return this.between(a, b, c)
}
cx.wi = function () {
	var g = G(arguments), cx = this, o
	o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
			: {k: g.f, fn: g.s}
	return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
			cx.this(o.k, o.fn, g.o)
}
cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
cx.includes = function (what, func) {
	var cx = this,
			fA = cx.A(),
			fB = cx.B()
	if (F(func)) {
		if (fA.of(what)) {
			_.bind(func, fA)(fB, cx)
		}
		else if (fB.of(what)) {
			_.bind(func, fB)(fA, cx)
		}
		return this
	}
	if (fA.of(what)) {
		return [fA, fB]
	}
	if (fB.of(what)) {
		return [fB, fA]
	}
	return false
}
cx.includes = cx.ic = function () {
	var cx = this, g = G(arguments)
	var o = {k: g.f, fn: g.s}
	if (o.fn) {
		if (cx.A().of(o.k)) {
			cx.fnAB(o.fn)
		} //_.b(o.fn, cx.A())(cx.B(), cx)
		else if (cx.B().of(o.k)) {
			cx.fnBA(o.fn)
		} //  _.b(o.fn, cx.B())(cx.A(), cx)
		return cx
	}
	//if this fixture 'of' that string(kind),fixt,or body
	//if so always passed back an array with the first mentioned selector in the [0] pos
	return cx.A().of(o.k) ? cx.AB() : cx.B().of(o.k) ? cx.BA() : false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
}
cx.between = cx.bw = function () {
	var cx = this,
			g = G(arguments),
	// bw(k,k1)  or  bw(k,k1,fn)
			a = cx.A(), b = cx.B()
	if (F(g.t)) {
		if (a.of(g.f) && b.of(g.s)) {
			g.t.apply(a, [b, cx])
		}
		else if (b.of(g.f) && a.of(g.s)) {
			g.t.apply(b, [a, cx])
		}
		return cx
	}
	return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] :
			cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] :
					false
}
cx.between = function (p1, p2, func) {
	var cx = this, fA = cx.A(), fB = cx.B()
	if (F(func)) {
		if (fA.of(p1) && fB.of(p2)) {
			return _.bind(func, fA)(fB, cx) || cx
		}
		if (fB.of(p1) && fA.of(p2)) {
			return _.bind(func, fB)(fA, cx) || cx
		}
	}
	if (fA.of(p1) && fB.of(p2)) {
		return [fA, fB]
	}
	else if (fB.of(p1) && fA.of(p2)) {
		return [fB, fA]
	}
	return false
}
cx.this = function () {
	var cx = this, g = G(arguments), a = cx.fA(),
			b = cx.fB(), k = g.f, fn = g.s
	if (a.of(k)) {
		if (F(fn)) {
			fn = _.b(fn, a)
			g.p ? fn(b, cx) : _.in(0, function () {
				fn(b, cx)
			})
			return cx
		}
		return [a, b, cx, g.o]
	}
	else if (b.of(k)) {
		if (F(fn)) {
			fn = _.b(fn, b)
			g.p ? fn(a, cx) : _.in(0, function () {
				fn(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.these = function (p1, p2, fn) {
	var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB(), a = fA, b = fB
	if (a.of(p1) && b.of(p2)) {
		if (fn) {
			_.b(fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	else if (b.of(p1) && a.of(p2)) {
		if (fn) {
			_.b(fn, b)(a, cx);
			return cx
		}
		return [b, a]
	}
}
cx.w = cx.of = cx.with = function () {
	var cx = this, g = G(arguments), o
	o = F(g.t) || (g.s && !F(g.s)) ?
	{k: g.f, k1: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	return o.k1 ? cx.these(o.k, o.k1, o.fn) :
			cx.this(o.k, o.fn)
}
cx.exIn = cx.excludeInclude = function (no, yes) {
	return this.w(yes) && this.excludes(no)
}
cx.inEx = cx.includeExclude = function (yes, no) {
	return this.w(yes) && this.excludes(no)
}
cx.dsIf = cx.destroyIf = cx.setDestroyIf = function () {
	var cx = this
	_.e(arguments, function (k) {
		cx.a().setDestroyIf(k);
		cx.b().setDestroyIf(k)
	})
	return cx
}
cx.dsOIf = cx.destroyOtherIf = function (k) {
	var a = this.a(), b = this.b()
	if (a.is(k)) {
		b.setDestroy()
	}
	else if (b.is(k)) {
		a.setDestroy()
	}
}
cx.both = function () {
	var cx = this, g = G(arguments)
	var fA = cx.fA()
	var fB = cx.fB()
	if (fA.of(g.f) && fB.of(g.s)) {
		if (F(g.t)) {
			var fn = _.b(g.t, fA)
			g.p ? fn(fB, cx) :
					_.in(0, function () {
						fn(fB, cx)
					})
			return cx
		}
		return [fA, fB]
	}
	else if (fB.of(g.f) && fA.of(g.s)) {
		if (F(g.t)) {
			var fn = _.b(g.t, fB)
			g.p ? fn(fA, cx) : _.in(0, function () {
				fn(fA, cx)
			})
			return cx
		}
		return [fB, fA]
	}
	return cx
}
cx.nof = cx.withoutAny = cx.ex = cx.not = cx.excludes = function (u) {
	return !this.w(u)
}
cx.withBothFrom = cx.bw = cx.btwn = cx.btw = cx.between = cx.these
cx.yesNo = function (ar1, ar2) {
	var ok = true
	_.e(ar1, function (k) {
		if (cx.nof(k)) {
			ok = false
		}
	})
	_.e(ar2, function (k) {
		if (cx.of(k)) {
			ok = false
		}
	})
	return ok
}
cx.fnAB = function (fn) {
	var cx = this
	_.b(fn, cx.A())(cx.B(), cx)
	return cx
}
cx.fnBA = function (fn) {
	var cx = this
	_.b(fn, cx.B())(cx.A(), cx)
	return cx
}
cx.kFn = function (k, fn) {
	var cx = this
	if (cx.A().of(k)) {
		cx.fnAB(fn)
	}
	else if (cx.B().of(k)) {
		cx.fnBA(fn)
	}
}
cx.AB = function () {
	var cx = this
	return [cx.A(), cx.B(), cx]
}
cx.BA = function () {
	var cx = this
	return [cx.B(), cx.A(), cx]
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
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
w.pre = function () {
	var w = this, g = G(arguments), o, fn
	w._pre = function () {
		var that = this
		_.each(arguments, function (func) {
			that.preHandlers.push(func)
		})
		return this
	}
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
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
function collide() {
// collide //
	b.cl = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl(b, o.k, o.fn, o.in0) :
				w.cl(b, o.fn, o.in0)
		return b
	}
	b.cl0 = function () {
		var b = this, w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl0(b, o.k, o.fn) :
				w.cl0(b, o.fn)
		return b
	}
	b.coll = function (clas, func) {
		var body = this, w = body.wor()    //merged these 2, but the the fixt 'coll' met is more complete/flexible  //b.collWithKind =
		// if body collides with ANYTHING
		// if body collides with body/fixt of specific kind
		// if body collides with specific body
		// if body collides with specific fixt
		// but always pass fixt into the cb
		if (F(clas)) {
			func = clas;
			clas = ''
		} //if clas NOT passed in
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B(), bA = cx.a(), bB = cx.b()
			if (body.is(bA) && fB.of(clas)) {
				_.bind(func, fA)(fB, cx)
			}
			if (body.is(bB) && fA.of(clas)) {
				_.bind(func, fB)(fA, cx)
			}
		})
		return this
	}
// uses contact list
	b.col2 = function (func) { //brilliant   =b.eachCx =b.withFixtsCollidingWithMe
		//uses the OTHER way to check contacts !!!!!!
		var body = this, contacts = body.cx(),
				next, fixt, notMyFixt, fA, fB
		if (!contacts) {
			$l('no contacts');
			return false
		}
		c = contacts = contacts.contact
		n = 0
		while (contacts) {
			n++
			next = contacts.GetNext()
			fA = contacts.A()
			fB = contacts.B()
			bA = contacts.a()
			notMyFixt = body.is(bA) ? fB : fA  //find the fixture whose body is not me
			$l(notMyFixt.K() + ' - ' + notMyFixt.B().K())
			_.bind(func, body)(notMyFixt, contacts)   //and call func on IT (along with the actual cx)
			contacts = next
		}
	}
	f.cl = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.cl(f, o.k, o.fn, o.in0) :
				w.cl(f, o.fn, o.in0)
		return f
	}
	f.cl0 = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		o = g.F_ ? {fn: g.f, in0: g.s} :
		{k: g.f, fn: g.s, in0: g.t}
		o.k ? w.ofThese0(f, o.k, o.fn) :
				w.ofThis0(f, o.fn)
		return f
	}
	w.cl = function () {
		var w = this, g = G(arguments)
		if (g.F) {
			w.b(function (cx) {
				_.b(g.f, cx.A())(cx.B(), cx)
			})
		}
		else {
			w.b(function (cx) {
				cx.w(g.f, g.s, g.t)
			})
		}
		return w
	}
	w.CL = function (k) {
		var w = this
		var fn = function rc(a, b, c) {
			w.cl(k, a, b, c)
			return rc
		}
		return fn
	}
	w.cl = function () {
		var w = this, g = G(arguments), o
		o = g.s && !F(g.s) ?
		{k: g.f, k2: g.s, fn: g.t} :
		{k: g.f, fn: g.s}
		w.b(function (cx) {
			o.k2 ? cx.wi(o.k, o.k2, o.fn) :
					cx.wi(o.k, o.fn)
		})
		return w
	}
	w.cl0 = function () {
		var w = this, g = G(arguments)
		w.cl.apply(w, g.concat('0'))
		return w
	}
	w.with = w.collWith = function (a, b, c) {
		var w = this
		w.beg(function (cx) {
			cx.with(a, b, c)
		})
		return this
	}
	w.class = function (k) {
		var w = this
		var ob = {
			class: k, k: k,
			world: w, w: w
		}
		ob.with = ob.collWith = function (k, func) {
			var ob = this
			if (O(k)) {
				_.each(k, function (fun, k) {
							ob.with(k, fun)
						}
				)
			}
			else {
				w.with(this.class, k, func)
			}
			return this
		}
		return ob
	}
	f.coll = function (what, func) {
		var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
		// you can specify what happens when a fixture hits:
		//ANYTHING
		// body/fixt of certain kind
		// specific fixt
		// specific body
		//but it its callback ALWAYS passed back the other fixt that was actually hit
		// and 'this' is set to THIS fixt within the cb
		//should cover class AND fixt AND body cases!!!
		if (F(what)) {
			func = what;
			what = ''
		}
		func = _.bind(func, fixt)
		w.beg(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (fixt.is(fA) && fB.of(what)) {
				func(fB, cx)
			}
			if (fixt.is(fB) && fA.of(what)) {
				func(fA, cx)
			}
		})
		return this
	}
	w.collideAny = function (what, func) {
		return this.beg(what, function (cx) {
			$.do(function () {
				func(cx)
			})
		})
	}
	w.coll = function (k1, k2, func) {
		var that = this,
				w = this,
				name = k1 + k2
		if (F(k2)) {
			return this.collideAny(k1, k2)
		}
		this.beg(function (cx) {
			if (cx.with(k1, k2)) {
				that.flag(name, cx)
			}
		})
		cjs.tick(function () {
			var cx = that.flagged(name)
			if (cx) {
				func(cx)
			}
		})
	}
	b.cl = b.b = b.collide = function () {
		var b = this, w = b.W(), g = G(arguments), o
		// if body collides with ANYTHING
		// if body collides with body/fixt of specific kind
		// if body collides with specific body
		// if body collides with specific fixt
		// but always pass fixt into the cb
		if (F(g.f) && F(g.s)) {
			this.cl(g.f)
			w.end(b, g.s)
			return b
		}
		o = g.F_ ? {fn: g.f, k: ''} : {k: g.f, fn: g.s}
		w.b(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (b.of(cx.a()) && fB.of(o.k)) {
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
}
function contact() {


//function cxList() {
	w.GCL = function () {
		return this.GetContactList()
	}
//function cxCount() {
	w.GCC = function () {
		return this.GetContactCount()
	}
//
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
	f.SFD = function (flD) {
		this.SetFilterData(flD);
		return this
	}
	f.GFD = function () {
		return this.GetFilterData()
	}
	f.flD = f.gFD = f.gFlD = function (flD) {
		var f = this
		if (flD) {
			return this.SFD(flD)
		}
		var _sFlD = function (flD) {
			flD.cB = function (cB) {
				var fLD = this
				if (U(cB)) {
					return flD.categoryBits
				}
				flD.categoryBits = cB
				return flD
			}
			flD.mB = function (mB) {
				var fLD = this
				if (U(mB)) {
					return flD.maskBits
				}
				flD.maskBits = mB;
				return flD
			}
			flD.gI = function (gI) {
				var flD = this
				if (U(gI)) {
					return flD.groupIndex
				}
				flD.groupIndex = gI;
				return flD
			}
			return flD
		}
		return _sFlD(f.GFD())
	}
	f.getFiltData = f.fil = f.fl = f.flDa = function () {
		var f = this, g = G(arguments)
		if (g.u) {
			return f.GetFilterData()
		}
		;
		f.SetFilterData(g.f);
		return f
	}
	w.setContactFilt = w.cxFl = w.sCF = function () {
		var w = this, g = G(arguments)
		w.SetContactFilter.apply(w, g)
	}
	function flag() {
		alpha = function () {
			cx.filtering = cx.fFF = function () {
				var cx = this
				cx.FlagForFiltering();
				return cx
				// Flag this contact for filtering.
// Filtering will occur the next time step.
			}
		}
	}
}
function handlers(){
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
	w.onBeg = w.beg = w.b = function () {
		var w = this, g = G(arguments), o, fn
		if (g.u) {
			return this.GetBodyList()
		}
		/// polymorphism here??? wow.. super cryptic!!!!
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
	w.b = w.bg = w.beg = function () {

//ADDS one or more handlers to beginHandlers array
		var w = this, g = G(arguments)
		_.e(g, function (fn) {
			w.BG.push(fn)
		})
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
	w.pre = function () {
		var w = this, g = G(arguments)
		_.e(g, function (fn) {
			w.PRE.push(fn)
		})
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
	}
	w.preHandle = w._handle = function () {
		var w = this
		w._l = w._l || $cL()
		w.BG = w.BG || []
		w.PRE = w.PRE || []
		w.PO = w.PO || []
		w.END = w.END || []
		return w
	}
	handling = function () {
		w.bH = [];
		w.pH = [];
		w.PH = [];
		w.eH = []
		//l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
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
	w._pre = function (fn) {
		var w = this, g = G(arguments)
		//fn = $.mo(.2,fn )
		w.pH.push(fn)
		return w
	}
	w.end = function () {
		var w = this, g = G(arguments)
		_.e(g, function (fn) {
			w.END.push(fn)
		})
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
	w.SCF = function (cF) {
		this.SetContactFilter(cF);
		return this
	}
	w.sCL = w.lsn = function (cL) {
		var w = this
		w.SCL = function (cL) {
			cL = cL || $cL()
			this.SetContactListener(cL)
			return this
		}
		return this.SCL(cL || $cL())
	}
	w.SCF = w.sCF = function (cF) {
		this.SetContactFilter(cF);
		return this
	}
	w.post = function () {
		var that = this
		_.e(arguments, function (func) {
			that.postHandlers.push(func)
		})
		return this
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
// = w.startListening
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