old = function () {
	b.cl0 = b.clWithAny = function (fn) {
		var b = this, w = b.W()
		w.b(function (cx) {
			var aF = cx.a(), bF = cx.b()
			if (aF == b) {
				fn(aF)
			}
			if (bF == b) {
				fn(bF)
			}
		})
		return b
	}
	b.cl1 = b.clWith = function (k, fn) {
		var b = this, w = b.W()
		w.b(function (cx) {
			var aF = cx.a(), bF = cx.b()
			if (aF == b && bF.is(k)) {
				fn(cx.b())
			}
			if (bF == b && aF.is(k)) {
				fn(cx.a())
			}
		})
		return b
	}
	b.cl = b.coll = function (fn, fn2) {
		var b = this, w = b.W(), g = G(arguments), o
		o = S(g.f) && F(g.s) ? {} : {}
		var oB = function (cx) {
			var aF = cx.a()
			var bF = cx.b()
			if (S(fn) && F(fn2)) {
				if (aF == b && bF.is(fn)) {
					fn2(cx.b())
				}
				if (bF == b && aF.is(fn)) {
					fn2(cx.a())
				}
			}
			else {
				if (aF == b) {
					fn(cx.a())
				}
				if (bF == b) {
					fn(cx.b())
				}
			}
		}
		w.b(oB)
		return b
	}//= b.collWithKind//merged these 2, but the the fixt 'coll' met is more complete/flexible
	THIS = function () {
		W()
		w.box().K('x')
		w.ball().K('big')
		w.ball(300, 400, 20).K('little')
		w.ofThis('big', function (f, cx) {
			var b1 = this.B()
			var b2 = f.B()
			var x1 = b1.X()
			var x2 = b2.X()
			_.in(0, function () {
				$l('0hit')
				b2.X(x1)
				b1.X(x2)
			})
		})
		w.ofThis0('little', function (f, cx) {
			var b1 = this.B()
			var b2 = f.B()
			var x1 = b1.X()
			var x2 = b2.X()
			$l('0hit')
			b2.X(x1)
			b1.X(x2)
		})
	}
	THESE = function () {
		W()
		w.box(100, 100, 200).K('left')
		b = w.ball(500, 500)
		right = w.box(400, 100, 200)
		rightF = right.f()
		w.ofThese0('left', 'ball', function (f, cx) {
			$l('left')
			this.B().stat()
			f.B().kill()
		})
		w.ofThese0(right, 'ball', function (f, cx) {
			$l('right')
			this.B().kill()
			f.B().stat()
		})
		w.ofThese0(rightF, b, function (f, cx) {
			$l('rightF')
			w.box(100, 100, 200).K('left')
		})
	}
	w.oCl = function () {
		var w = this, g = G(arguments)
		var arr = S(g.f) ? w[g.f] : A(g.f) ? g.f : []
		var fns = g.r
		_.e(fns, function (fn) {
			arr.push(fn)
		})
		return w
	}
	w.ofThis = function (k, fn, in0) {
		var w = this
		var g = G(arguments)
		w.b(function (cx) {
			in0 == 0 ? cx.ofThis0(k, fn) :
					cx.ofThis(k, fn)
		})
		return w
	}
	w.ofThis0 = function (k, fn) {
		return this.ofThis(k, fn, 0)
	}
	w.ofThese = function (k1, k2, fn, in0) {
		var w = this
		var g = G(arguments)
		w.b(function (cx) {
			in0 == 0 ? cx.ofThese0(k1, k2, fn) :
					cx.ofThese(k1, k2, fn)
		})
		return w
	}
	w.ofThese0 = function (k1, k2, fn) {
		return this.ofThese(k1, k2, fn, 0)
	}
	w.cl = function () {
		var w = this, g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s, in0: g.t} :
		{k: g.f, k2: g.s, fn: g.t, in0: g.fo}
		o.k2 ? w.ofThese(o.k, o.k2, o.fn, o.in0) :
				w.ofThis(o.k, o.fn, o.in0)
		return w
	}
	b.ofThis = b.hit = function (fn, in0) {
		var b = this, w = b.W()
		w.ofThis(b, fn, in0)
		return b
	}
	b.ofThis0 = function (fn, in0) {
		var b = this, w = b.W()
		w.ofThis0(b, fn, in0)
		return b
	}
	b.ofThese = b.withOf = b.with = b.hitThis = function (k2, fn, in0) {
		var b = this, w = b.W()
		w.ofThis(b, k2, fn, in0)
		return b
	}
	b.ofThese0 = function (k2, fn, in0) {
		var b = this, w = b.W()
		w.ofThis0(b, k2, fn, in0)
		return b
	}
	f.bg = f.bC = f.this = f.any = f.one = f.ofThis = function (fn, in0) {
		var f = this, b = f.B(), w = b.W()
		w.ofThis(f, fn, in0)
		return f
	}
	f.ofThis0 = function (fn, in0) {
		var f = this, b = f.B(), w = b.W()
		w.ofThis0(f, fn, in0)
		return f
	}
	f.bgW = f.wi = f.bC2 = f.that = f.two = f.ofThese = function (k, fn, in0) {
		var f = this, b = f.B(), w = b.W()
		w.ofThese(f, k, fn, in0)
		return f
	}
	f.ofThese0 = function (k2, fn, in0) {
		var f = this, b = f.B(), w = b.W()
		w.ofThese0(f, k2, fn, in0)
		return f
	}
///f.cl is ultimate!!!!! ?
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt
// that was actually hit
// and 'this' is set to THIS fixt within the cb
	f.withMe = function (fn) {
		var f = this
		fn = _.b(fn, f)
		//if first fixt is THIS fixt,
		// run the func on the second fixt
		//else.. if second fixt is THIS fixt, 
		// run the func on the first fixt
		w.b(function (cx) {
			if (cx.fA() == f) {
				fn(cx.B())
			}
			else if (cx.fB() == f) {
				fn(cx.A())
			}
		})
		return f
	}
	f.cl = f.coll = function () {
		var f = this, g = G(arguments), o
		/*
		 if (g.F_) {
		
		 fn = _.b(b, f)
		
		 bgFn = function (cx) {
		 if (cx.A() == f) {
		 //if first fixt is THIS fixt,
		 // run the func on the second fixt
		 fn(cx.B())
		 }
		 else if (cx.B() == f) {
		 //else.. if second fixt is THIS fixt, 
		 // run the func on the first fixt
		 fn(cx.A())
		 }
		 }
		
		 w.b(bgFn)
		 return f
		
		 return f.withThis(g.f)
		 }
		 */
		o = g.F_ ? {fn: g.f} : {other: g.f, fn: g.s}
		if (S(o.other)) {
			o.k = o.other
		}
		if (b2d.iF(o.other)) {
			o.fx = o.other
		}
		if (b2d.iB(o.other)) {
			o.bd = o.other
		}
		o.fn = _.b(o.fn, f)
		w.b(function (cx) {
			var fA = cx.fA()
			var fB = cx.fB()
			var bA = cx.bA()
			var bB = cx.bB()
			if (o.k) {
				if (fA == f && fB.of(o.k)) {
					o.fn(fB)
				}
				else if (fB == f && fA.of(o.k)) {
					o.fn(fA)
				}
			}
			else if (o.fx) {
				if (fA == f && fB == o.fx) {
					o.fn(fB)
				}
				if (fB == f && fA == o.fx) {
					o.fn(fA)
				}
			}
			else if (o.bd) {
				if (fA == f && bB == o.bd) {
					o.fn(fB)
				}
				if (fB == f && bA == o.bd) {
					o.fn(fA)
				}
			}
		})
		return f
	}
}
function SuperImpulses(impulses) {
	impulses.n = impulses.nI = function () {
		return impulses.normalImpulses
	}
	impulses.t = impulses.tI = function () {
		return impulses.tangentImpulses
	}
	return impulses
}