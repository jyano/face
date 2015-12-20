function contact() {
	fd.grp = fd.group = fd.index = fd.gI = function (a) {
		if (U(a)) {
			return this.filter.groupIndex
		}
		this.filter.groupIndex = a;
		return this
	}
	fd.cat = fd.category = fd.cB = function (a) {
		if (U(a)) {
			return this.filter.categoryBits
		}
		this.filter.categoryBits = a;
		return this
	}
	fd.msk = fd.mask = fd.mB = function (a) {
		if (U(a)) {
			return this.filter.maskBits
		}
		this.filter.maskBits = a;
		return this
	}
	fd.bit = fd.bits = function (cat, mask) {
		return this.cat(cat).mask(mask)
	}
} 
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
cx.with = function (a, b, c) {
	if (U(b) || F(b)) {
		return this.includes(a, b)
	}
	return this.between(a, b, c)
}
//cx.excludes=function(u){return !this.includes(u)}
//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)
// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
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
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
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
cx.wi = function () {
	var g = G(arguments), cx = this, o
	o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
			: {k: g.f, fn: g.s}
	return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
			cx.this(o.k, o.fn, g.o)
}
cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
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