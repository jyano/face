function ultimate() {
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