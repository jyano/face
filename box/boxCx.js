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
////////////////////////////////////////////////////
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
userDa()
function userDa() {
	fD.uD = fD.D = fD.data = function (da) {
		var fD = this
		if (U(da)) {
			return this.userData
		}
		this.userData = da
		return this
	}
	f.uD = f.data = function (da) {
		var f = this
		f.SUD = function (d) {
			this.SetUserData(d);
			return this
		}
		f.GUD = function () {
			return this.GetUserData();
		}
		if (U(da)) {
			return this.GUD()
		}
		this.SUD(da);
		return this
	}
	b.uD = b.data = b.userData = function (d) {
		if (U(d)) {
			return this.GetUserData()
		}
		this.SetUserData(d)
		return this
	}
}
fD.K = function (k) {
	var fD = this
	if (U(k)) {
		fD.getClass = function () {
			var g = G(arguments), fD = this, classes
			fD._K = fD._K || []
			this.classes = this.classes || []
			var ks = fD.classes.join(' ')
			if (g.p) {
				ks += ' : ' + fD.body().getClasses()
			}
			return ks
		}
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(k)
	return fD
}
f.aK = function (k) {
	var f = this
	f._K = f._K || []
	if (S(k) && !f.of(k)) {
		f._K.push(k)
	}
	return f
}
f._gK = function () {
	var f = this
	f._K = f._K || []
	return f._K.join(' ')
}
f.gK = function () {
	var g = G(arguments), classes
	this.classes = this.classes || []
	classes = this.classes.join(' ')
	if (g.p) {
		classes += ' : ' + this.body().getClasses()
	}
	return classes
}
f.K = function () {
	var f = this, g = G(arguments);
	f._K = f._K || []
	if (g.u) {
		return f.gK()
	}
	if (g.O && g.f.k) {
		f.aK(g.f.k)
	}
	else if (g.S_) {
		_.eW(g.f, function (k) {
			f.aK(k)
		})
	}
	return f
}
f.of = function (k) {
	var f = this, b = f.B();
	//return S(k) ? f.of(k) : (f == k || b == k)
	return f._of(k) || b.of(k)
	/*
	
	 //if (!f) {return false}
	 if (!k) {
	 return true
	 }
	 return f == k || (S(k) && f.has(k)) || b.of(k)
	 */
}
f.ofK = function () {
	var f = this, b = f.B(),
			g = G(arguments)
	return f.hK(g) || b.hK(g)
}
f.is = function (k) {
	var f = this
	//	return S(k) ? f.hK(k) : f == k
	return k && f.of(k)
}
b.gK = function () {
	this.classes = this.classes || []
	return this.classes.join(' ')
}
b.aK = function (clas) {
	var that = this, func
	this.classes = this.classes || []
	if (U(clas)) {
		$l('need to provide a class!');
		return this
	}
	if (F(clas)) { // use case??
		func = _.bind(clas, that)
		this.addClass(func(that.getClasses()))
		return this
	}
	_.each(arguments, function (clas) {
		if (S(clas)) {
			_.each(clas.trim().split(' '), function (clas) {
				clas = clas.trim()
				if (clas != '' && !that.hasClass(clas)) {
					that.classes.push(clas)
				}
			})
		}
	})
	return this
}
b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
	/*
	 if (U(k)) {
	 return this.getClasses()
	 }
	 _.each(arguments, function (k) {
	 b.addClass(k)
	 })
	 */
	if (g.u) {
		return this._K.join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!b.of(k)) {
			b._K.push(k)
		}
	})
	return this
}
b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
	/*
	 var that = this, is = false
	 _.each(arguments, function (k) {
	 if (that.K() == k) {
	 is = true
	 }
	 })
	 return is
	 */
}
 
