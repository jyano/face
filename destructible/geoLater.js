 
		f.polyDotWorVerts = f.dots = function () {
			var f = this;
			b2d.pD = b2d.polyDot = function (vs) {
				var t = 0
				vs = A(vs) ? vs : vs.wV
				w.dot('g', V(_.f(vs)))
				_.e(vs,
						function (v) {
							$.in(t, function () {
								w.dot(V(v))
							}, t)
							t += .1
						}
				)
				w.dot('r', V(_.l(vs)))
			}
			b2d.polyDot(f.wV())
			return f
		}
		pD.dot = function () {
			var p = this
			p.vs(function (v) {
				w.dot('o', v)
			})
			return p
		}
		pD.dot = function (w) {
			var pD = this
			pD.vs(function (v) {
				w.dot('w', v[0], v[1])
			})
			return pD
		}
		b2d.miniX = function () {
			iF = b2d.iF;
			iB = b2d.iB;
			iP = b2d.iGP
			pD = function () {
				return new PolyDefault()
			}
		}
		w.vertsDOt = w.vDot = function (d) {
			var w = this
			w.dot('g', _.f(d))
			_.eR(d, function (v) {
				w.dot(v)
			})
			w.dot('r', _.l(d))
			return d
		}
	 
	
	f.dots = function () {
		var f = this;
		b2d.pD = b2d.polyDot = function (vs) {
			var t = 0
			vs = A(vs) ? vs : vs.wV
			w.dot('g', V(_.f(vs)))
			_.e(vs,
					function (v) {
						$.in(t, function () {
							w.dot(V(v))
						}, t)
						t += .1
					}
			)
			w.dot('r', V(_.l(vs)))
		}
		b2d.polyDot(f.wV())
		return f
	}
	UNI = b2d.u = function me() {
		$l('UNI')
		var g = G(arguments), p
		if (g.A) {
			return g.ap(UNI)
			//return $a(UNI,g.f)
		}
		p = M.p(g[0])
		g.eR(function (pol) {
			p = p.U(M.p(pol))
		})
		return p
	}
	DIF = function () {
		$l('DIF')
		var g = G(arguments),
//not each of the ps?
				p = M.p(g[0])
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
	pD.dot = function () {
		var p = this
		p.vs(function (v) {
			w.dot('o', v)
		})
		return p
	}
	pD.dot = function (w) {
		var pD = this
		pD.vs(function (v) {
			w.dot('w', v[0], v[1])
		})
		return pD
	}
	w.cxBul = function (k, fn) {
		var w = this
		w.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
	b2d.miniX = function () {
		iF = b2d.iF;
		iB = b2d.iB;
		iP = b2d.iGP
		pD = function () {
			return new PolyDefault()
		}
	}
	w.vDot = function (d) {
		var w = this
		w.dot('g', _.f(d))
		_.eR(d, function (v) {
			w.dot(v)
		})
		w.dot('r', _.l(d))
		return d
	}
	w.md1 = function (fn) {
		alert('w.md1')
		var w = this
		return w.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}//
 