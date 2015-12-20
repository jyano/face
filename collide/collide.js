
b2d.Cxs = b2d.D.Cxs = b2d.D.Contacts
//b2d.Cx = b2d.Contact = b2d.Cxs.b2Contact
b2d.WM = b2d.WorldManifold = b2d.C.b2WorldManifold
b2d.either = function (ob1, ob2, is1, is2) {
	return (ob1.is(is1) && ob2.is(is2)) ||
			(ob1.is(is2) && ob2.is(is1))
}
b2d.neither = function (body1, body2) {
	return {
		is: function (data) {
			return !body1.is(data) && !body2.is(data)
		}
	}
}
b2d.either = function (body1, body2) {
	return {
		is: function (data) {
			return body1.is(data) || body2.is(data)
		}
	}
}
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
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
	return b
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
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
b.contacts = b.cx = function () {
	return this.GetContactList()
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
 
 