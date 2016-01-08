$l('fiz/collide/cxPt.js says welcome to FIZ !!!')
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
function cxBdFx() {
	cx.bA = cx.a = function () {
		return this.A().gB()
	}
	cx.bB = cx.b = function () {
		return this.B().gB()
	}
	cx.fA = cx.A = function () {
		return this.GetFixtureA()
	}
	cx.fB = cx.B = function () {
		return this.GetFixtureB()
	}
	cx.fA = cx.A = function (k) {
		var $$ = this.GetFixtureA()
		return D(k) ? $$.of(k) : $$
	}
	cx.fB = cx.B = function (k) {
		var $$ = this.GetFixtureB()
		return D(k) ? $$.of(k) : $$
	}
	cx.bA = cx.a = function (k) {
		var $$ = this.fA().B()
		return D(k) ? $$.of(k) : $$
	}
	cx.bB = cx.b = function (k) {
		var $$ = this.fB().B()
		return D(k) ? $$.of(k) : $$
	}
}
function linVelWor() {
//linVelFromWorPt()
	b.lVW = function () {
		var b = this, g = G(arguments);
		return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
	}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
//////////}
}
function destroy() {
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
}
function begEnd() {
	w.b = w.begin = function () {
		var that = this
		_.each(arguments, function (func) {
			that.beginHandlers.push(func)
		})
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
		w.BG.push(fn)
		return w
		function alt() {
			w.beg = w.begin = function (what, what2, func) {
				var w = this
				if (F(what)) {
					_.each(arguments, function (func) {
						w.BG.push(func)
					})
				}
				else if (F(what2)) {
					func = what2
					w.BG.push(function (cx) {
						if (cx.with(what)) {
							func(cx)
						}
					})
				}
				else if (F(func)) {
					w.BG.push(function (cx) {
						if (cx.with(what, what2)) {
							func(cx)
						}
					})
				}
				return this
			}//ADDS one or more handlers to beginHandlers array
		}
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
		function alt() {
			w.end = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.END.push(fn)
				})
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
		}
	}
}
function prePost() {
	b.pre = function () {
		var b = this, w = b.W(), g = G(arguments)
		w.pre(function (cx) {
			cx.w(b, g.f, g.s, g.t)
		})
	}
	w.pre = function () {
		w._pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
		w.onPre = w.pre = function (fn) {
			var w = this, g = G(arguments)
			//fn = $.mo(.2,fn )
			w.pH.push(fn)
			return w
		}
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
		function pre() {
			w.pre = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PRE.push(fn)
				})
				return w
			}
		}
		
		function alt() {
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
		}
	}
	w.preCl = function () {
//  preSolve(){
		var w = this, g = G(arguments)
		w.pre(function (cx) {
			cx.w.apply(cx, g)
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
		function alt() {
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
			w.po = w.post = function () {
				var w = this, g = G(arguments)
				_.e(g, function (fn) {
					w.PO.push(fn)
				})
				return w
			}
			w.post = function () {
				var that = this
				_.e(arguments, function (func) {
					that.postHandlers.push(func)
				})
				return this
			}
		}
	}
}
 
function logic() {
	cx.w = cx.with = function (a, b) {
		var cx = this
		cx.includes = function (u) {
			var cx = this
			if (cx.fA().of(u)) {
				return cx.fB()
			}
			if (cx.fB().of(u)) {
				return cx.fA()
			}
		}
		cx.between = function (p1, p2) {
			var a = this.A(), b = this.B()
			if (a.of(p1) && b.of(p2)) {
				return [a, b]
			}
			if (b.of(p1) && a.of(p2)) {
				return [b, a]
			}
		}
		return b ? cx.between(a, b) : cx.includes(a)
	}
	cx.not = cx.nof = cx.withoutAny = cx.ex = cx.excludes = function (u) {
		return !this.w(u)
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
	cx.exIn = cx.excludeInclude = function (no, yes) {
		return this.w(yes) && this.excludes(no)
	}
	cx.inEx = cx.includeExclude = function (yes, no) {
		return this.w(yes) && this.excludes(no)
	}
	cx.includes1 = function (what, func) {
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
	cx.between1 = function (p1, p2, func) {
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
}
function collideWith() {
	function abstract() {


//cx.excludes=function(u){return !this.includes(u)}
//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)
// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
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
	}
 
	function cxList() {
		b.contacts = b.cx = function () {
			return this.GetContactList()
		}
//  the contact class is created and destroyed by Box2D.   Contact objects are not created by the user.  (but u can access  contact class,interact with it)
		b.GCxL = function () {
			return this.GetContactList()
		}
		b.cx = function () {
			var cxLs = this.GCxL()
			return cxLs
		}
		b.eachCx = function (fn) {
			var b = this
			for (var cx = b.cx(); cx; cx = cx.next) {
				if (O(cx) && O(cx.contact)) {
					fn(cx.contact)
				}
				else {
					alert('err in b.eachCo')
				}
			}
			return b
		}
		cx.N = cx.GN = cx.next = cx.gN = function () {
			return this.GetNext()
		}
		cx.IC = cx.iCn = cx.iCont = cx.continuous = cx.iC = function () {
			return this.IsContinuous()
		}
		//Does this contact generate TOI events for continuous simulation
		cx.IT = cx.iT = cx.touching = function () {
			return this.IsTouching()
		}//Is this contact touching.
// accessCxs
//to access cx: 1)  can access the contacts directly on world and body structures.  2) can  implement a contact listener.
		cx.ks = function () {
			var cx = this
			var aK = cx.A().K()
			var bK = cx.B().K()
			var str = ''
			if (aK) {
				str += 'fA: ' + aK + ', '
			}
			if (bK) {
				str += 'fB: ' + bK
			}
			$l(str)
			return cx
		}
		w.cxs = function () {
			//You can iterate over all contacts in the world:
			for (cx = w.GCxL(); cx; cx = cx.GN()) {
			}
		}
		b.cxs = function () {
//	 You can also iterate over all the contacts on a body. 
// These are stored in a graph using a contact edge structure.
			//b2ContactEdge
			for (ce = b.GetContactList(); ce; ce = ce.next) {
				cx = ce.contact
			}
			//Caution : Accessing contacts off b2World and b2Body
			// may miss some transient contacts 
			// that occur in the middle of the time step.
			// Use b2ContactListener to get the most accurate results.
		}
		//contact point:  point where two shapes touch. Box2D approximates contact with a small number of points.
		function contactNormal() {
			//contact normal:unit vector that points from one shape to another. 
			//By convention, the normal points from fixtureA to fixtureB.
			//contact separation:opposite of penetration. Separation is negative when shapes overlap. 
			//It is possible that future versions of Box2D will create contact points with positive separation,
			// so you may want to check the sign when contact points are reported.
		}
		
		function contactManifold() {
			//contact manifold:Contact between two convex polygons may generate up to 2 contact points. 
			//Both of these points use the same normal, so they are grouped into a contact manifold,
			// which is an approximation of a continuous region of contact.
		}
		
		function normalImpulse() {
			//normal impulse: force applied at a contact point to prevent the shapes from penetrating. 
			//For convenience, Box2D works with impulses. The normal impulse is just the normal force multiplied by the time step.
			//tangent impulse: generated at a contact point to simulate friction. For convenience, this is stored as an impulse.
		}
		
		function contactId() {//contact ids
			//Box2D tries to re-use the contact force results from a time step as the initial guess for the next time step. 
			//Box2D uses contact ids to match contact points across time steps. 
			//The ids contain geometric features indices that help to distinguish one contact point from another.
		}
		
		function chickenEgg() {
			//Contacts created when two fixture’s AABBs overlap, destroyed with the AABBs cease to overlap.
			//So you might gather that there may be contacts created for fixtures that are not touching (just their AABBs). 
			//Well, this is correct. It's a "chicken or egg" problem. 
			//We don't know if we need a contact object until one is created to analyze the collision. 
			//We could delete the contact right away if the shapes are not touching, 
			//or we can just wait until the AABBs stop overlapping. 
			//Box2D takes the latter approach because it lets the system cache information to improve performance.
			//You can get the fixtures from a contact, then the bodies: fA = cx.fA(); bA = fA.B();  actorA = Actor.bA.uD()
		}
		
		cx.next = cx.gN = function () {
			return this.GetNext()
		}//Get the next contact in the world's contact list.
		cx.getNx = cx.N = function () {
			return this.GetNext()
		}
	}
	function cxCos() {
		cx.bCo = cx.bindCo = cx.bindController = function (what) {
			var cx = this, fixt
			//if any fixt collides with a certain kind
			//switch to the controller with that name
			_.each(arguments,
					function (what) {
						if (fixt = cx.with(what)) {
							fixt.switchTo(window[what])
						}
					})
		}
		cx.aCo = cx.aBy = function (co) {
			var cx = this, bB = cx.bB();
			return co ? bB.a2(co) : bB.hasCo()
		}
		cx.bCo = cx.bBy = function (co) {
			return co ? this.bA().a2(co) : this.bA().hasCo()
		}
		cx.aNoCo = function () {
			return !this.aBy()
		}
		cx.bNoCo = function () {
			return !this.bBy()
		}
		cx.bCo = cx.bindCo = function () {
			var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
			G(arguments).e(function (k) {
				cx.w(k, function () {
					f.switchTo(window[k])
				})
			})
		}
	}
	function identify(){
 
	
	function cxList() {
		b.contacts = b.cx = function () {
			return this.GetContactList()
		}
//  the contact class is created and destroyed by Box2D.   Contact objects are not created by the user.  (but u can access  contact class,interact with it)
		b.GCxL = function () {
			return this.GetContactList()
		}
		b.cx = function () {
			var cxLs = this.GCxL()
			return cxLs
		}
		b.eachCx = function (fn) {
			var b = this
			for (var cx = b.cx(); cx; cx = cx.next) {
				if (O(cx) && O(cx.contact)) {
					fn(cx.contact)
				}
				else {
					alert('err in b.eachCo')
				}
			}
			return b
		}
		cx.N = cx.GN = cx.next = cx.gN = function () {
			return this.GetNext()
		}
		cx.IC = cx.iCn = cx.iCont = cx.continuous = cx.iC = function () {
			return this.IsContinuous()
		}
		//Does this contact generate TOI events for continuous simulation
		cx.IT = cx.iT = cx.touching = function () {
			return this.IsTouching()
		}//Is this contact touching.
// accessCxs
//to access cx: 1)  can access the contacts directly on world and body structures.  2) can  implement a contact listener.
		cx.ks = function () {
			var cx = this
			var aK = cx.A().K()
			var bK = cx.B().K()
			var str = ''
			if (aK) {
				str += 'fA: ' + aK + ', '
			}
			if (bK) {
				str += 'fB: ' + bK
			}
			$l(str)
			return cx
		}
		w.cxs = function () {
			//You can iterate over all contacts in the world:
			for (cx = w.GCxL(); cx; cx = cx.GN()) {
			}
		}
		b.cxs = function () {
//	 You can also iterate over all the contacts on a body. 
// These are stored in a graph using a contact edge structure.
			//b2ContactEdge
			for (ce = b.GetContactList(); ce; ce = ce.next) {
				cx = ce.contact
			}
			//Caution : Accessing contacts off b2World and b2Body
			// may miss some transient contacts 
			// that occur in the middle of the time step.
			// Use b2ContactListener to get the most accurate results.
		}
		//contact point:  point where two shapes touch. Box2D approximates contact with a small number of points.
		function contactNormal() {
			//contact normal:unit vector that points from one shape to another. 
			//By convention, the normal points from fixtureA to fixtureB.
			//contact separation:opposite of penetration. Separation is negative when shapes overlap. 
			//It is possible that future versions of Box2D will create contact points with positive separation,
			// so you may want to check the sign when contact points are reported.
		}
		
		function contactManifold() {
			//contact manifold:Contact between two convex polygons may generate up to 2 contact points. 
			//Both of these points use the same normal, so they are grouped into a contact manifold,
			// which is an approximation of a continuous region of contact.
		}
		
		function normalImpulse() {
			//normal impulse: force applied at a contact point to prevent the shapes from penetrating. 
			//For convenience, Box2D works with impulses. The normal impulse is just the normal force multiplied by the time step.
			//tangent impulse: generated at a contact point to simulate friction. For convenience, this is stored as an impulse.
		}
		
		function contactId() {//contact ids
			//Box2D tries to re-use the contact force results from a time step as the initial guess for the next time step. 
			//Box2D uses contact ids to match contact points across time steps. 
			//The ids contain geometric features indices that help to distinguish one contact point from another.
		}
		
		function chickenEgg() {
			//Contacts created when two fixture’s AABBs overlap, destroyed with the AABBs cease to overlap.
			//So you might gather that there may be contacts created for fixtures that are not touching (just their AABBs). 
			//Well, this is correct. It's a "chicken or egg" problem. 
			//We don't know if we need a contact object until one is created to analyze the collision. 
			//We could delete the contact right away if the shapes are not touching, 
			//or we can just wait until the AABBs stop overlapping. 
			//Box2D takes the latter approach because it lets the system cache information to improve performance.
			//You can get the fixtures from a contact, then the bodies: fA = cx.fA(); bA = fA.B();  actorA = Actor.bA.uD()
		}
		
		cx.next = cx.gN = function () {
			return this.GetNext()
		}//Get the next contact in the world's contact list.
		cx.getNx = cx.N = function () {
			return this.GetNext()
		}
	}
	
	function cxCos() {
		cx.bCo = cx.bindCo = cx.bindController = function (what) {
			var cx = this, fixt
			//if any fixt collides with a certain kind
			//switch to the controller with that name
			_.each(arguments,
					function (what) {
						if (fixt = cx.with(what)) {
							fixt.switchTo(window[what])
						}
					})
		}
		cx.aCo = cx.aBy = function (co) {
			var cx = this, bB = cx.bB();
			return co ? bB.a2(co) : bB.hasCo()
		}
		cx.bCo = cx.bBy = function (co) {
			return co ? this.bA().a2(co) : this.bA().hasCo()
		}
		cx.aNoCo = function () {
			return !this.aBy()
		}
		cx.bNoCo = function () {
			return !this.bBy()
		}
		cx.bCo = cx.bindCo = function () {
			var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
			G(arguments).e(function (k) {
				cx.w(k, function () {
					f.switchTo(window[k])
				})
			})
		}
	}
}

}


function collide(){
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
	b2d.world = b2d.W = function (a, b) {
		var w = new b2d.World(a, D(b) ? b : false)
		w.startListening()
		return w
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
	b.coll = b.collWithKind = function (func, func2) {
		var that = this
		if (S(func) && F(func2)) {
			this.W().begin(function (cx) {
				if (cx.a() == that && cx.b().is(func)) {
					func2(cx.b())
				}
				if (cx.b() == that && cx.a().is(func)) {
					func2(cx.a())
				}
			})
		}
		else {
			w.begin(function (cx) {
				if (cx.a() == that) {
					func(cx.a())
				}
				if (cx.b() == that) {
					func(cx.b())
				}
			})
		}
		return this
	}
	
	
} 