function more(){
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
	w.b = w.begin = function () {
		var that = this
		_.each(arguments, function (func) {
			that.beginHandlers.push(func)
		})
		return this
	}
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
}

cx.fA = cx.A = function (k) {
	var $$  = this.GetFixtureA()
	return D(k)? $$.of(k) : $$
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


cx.includes = cx.ic = function () {
	var cx = this, g = G(arguments)
	var o = {k: g.f, fn: g.s}
	
	if (o.fn) {
		if (cx.fA(o.k)  ) {cx.fnAB(o.fn)} //_.b(o.fn, cx.A())(cx.B(), cx)
		else if (cx.fB(o.k)) {
			cx.fnBA(o.fn)
		} //  _.b(o.fn, cx.B())(cx.A(), cx)

		return cx
	}
	
	cx.AB = function () {
		var cx = this
		return [cx.fA(), cx.fB(), cx]
	}
	
	cx.BA = function () {
		var cx = this
		return [cx.fB(), cx.fA(), cx]
	}
	//if this fixture 'of' that string(kind),fixt,or body
	//if so always passed back an array with the first mentioned selector in the [0] pos
	return cx.fA(o.k) ? cx.AB() : 
			cx.fB(o.k) ? cx.BA() :
					false //[cx.A(), cx.B(), cx] : //[cx.B(), cx.A(), cx] :
	//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	
}
 
cx.between = cx.bw = function () {
	var cx = this, g = G(arguments)
	// bw(k,k1)  or  bw(k,k1,fn)
			var fA = cx.fA()
			var fB = cx.fB()
	
	var fn = g.t
	if (F(fn)) {
		
		
		if (fA.of(g.f) && fA.of(g.s)) {
			fn.apply(fA, [fB, cx])
		}
		
		else if (fB.of(g.f) && fA.of(g.s)) {
			fn.apply(fB, [fA, cx])
		}
		return cx
	}
	
	
	return cx.fA( g.f) && cx.fB( g.s) ? [cx.fA(), cx.fB(), cx] :
			cx.fB( g.f) && cx.fA( g.s) ? [cx.fB(), cx.fA(), cx] :
					false

}
 
cx.with = function (a, b, c) {
	if (U(b) || F(b)) {
		return this.includes(a, b)
	}
	return this.between(a, b, c)
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
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
b.end = function () {
	var b = this, w = b.W(), g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	o.k ? w.end(b, o.k, o.fn) : w.end(b, o.fn)
	return b
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
	return w
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