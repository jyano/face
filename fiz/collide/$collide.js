function collide() {
	b2d.world = b2d.W = function (a, b) {
		var w = new b2d.World(a, D(b) ? b : false)
		w.startListening()
		return w
	}
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
cx.w = cx.of = cx.with = function () {
	var cx = this, g = G(arguments), o
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
	cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
	cx.btwn = cx.withBothFrom = cx.bw = cx.btw = cx.between = cx.these
	o = F(g.t) || (g.s && !F(g.s)) ?
	{k: g.f, k1: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	return o.k1 ? cx.these(o.k, o.k1, o.fn) :
			cx.this(o.k, o.fn)
	function alt() {
	}
	
	cx.wi = function () {
		var g = G(arguments), cx = this, o
		o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
				: {k: g.f, fn: g.s}
		return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
				cx.this(o.k, o.fn, g.o)
	}
}
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
w.CL = function (k) {
	var w = this
	var fn = function rc(a, b, c) {
		w.cl(k, a, b, c)
		return rc
	}
	return fn
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
	return this.bg(what, function (cx) {
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