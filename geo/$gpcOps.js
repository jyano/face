 
	pD.plus = function (x, y) {
		return M.p(_.m(this.vs(), function (v) {
			return V(v).add(x || 0, y || 0)
		}))
	}
	pD.U = function () {
		var pD = this, g = G(arguments),
				uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
	}
	pD.U = function () {
		var pD = this, g = G(arguments),
				uP
		if (b2d.iB(g[0])) {
			uP = pD.U(g[0].f())
			_.eR(g[0].fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
	}
	pD.plus = function (x, y) {
		var p = this,
				vs = p.vs()
		vs = _.m(vs, function (v) {
			v = V(v)
			return v.add(x || 0, y || 0)
		})
		return M.p(vs)
	}
	pD.plus = function (x, y) {
		//alert('pD.plus')
		return M.p(_.m(this.vs(), function (v) {
			return V(v).add(x || 0, y || 0)
		}))
	}
	pD.U = function () {
		var pD = this, g = G(arguments), uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
	}
 
	pD.minus = function (x, y) {
		var p = this,
				vs = p.vs()
		vs = _.m(vs, function (v) {
			v = V(v)
			return v.sub(x || 0, y || 0)
		})
		return M.p(vs)
	}
	pD.D = function () {
		var pD = this, gg = G(arguments)
		gg.e(function (g) {
			if (b2d.iB(g)) {
				if (g.n() == 1) {
					return pD.D(g.f())
				}
				g.fs(function (f) {
					pD = pD.D(f)
				})
			}
			else {
				pD = pD.difference(M.p(g))
			}
		})
		return pD
	}
	pD._D = function (pol) {
		var pD = this
		return b2d.iB(pol) ? pol.difPol(pD) :
				pD.dif(pol)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
	}
 
function old(){
	pD._dif = function (pol) {
		return this.difference(pol)
	}
	pD.dif = function (pol) {
		return this._dif($pD(pol))
	}
}