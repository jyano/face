b.rF = function () {
	// = b.$rF = b.rH
	return this.CF( $rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF  = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF  = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}

///////////////////

b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.H = b.h = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (g.u) {
		return b.f() && b.f().H() // return b
	}
	//passing a single array, suggest MULTIPLE fixts
	//[f1,f2,..]
	if (A(g[0]) && U(g[1])) {
		_.each(g[0], function (a) {
			b.H.apply(b, a)
		})
	}
	
	
	//[col,[f1,f2,..]]
	else if (S(g[0]) && A(g[1]) && U(g[2])) {
		_.each(g[1], function (f) {
			if (b2d.isFixtDef(f)) {
				b.fixt(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f = _.map(f, function (a) {
						return a
					})
					//*** ?
					f.unshift(g[0])
				}
				if (b2d.isFixtDef(f[1])) {
					b.fixt(f[1]).C(f[0])
				}
				else {
					b.H.apply(b, f)
				}
			}
		})
	}
	//fixtDef
	else if (b2d.isFixtDef(g[0])) {
		b.fixt(g[0])
	}
	//['color', fixtDef]
	else if (S(g[0]) && b2d.isFixtDef(g[1])) {
		b.fixt(g[1]).C(g[0])
	}
	
	//verts
	else if (O(g[1])) {
		if (g.n) {
			g.push('-')
		}
		b.conc(g)
		//b.convex(g)
	}
	
	//circ
	else if (len == 1 || len == 3) {
		if (g.n) {
			g.push('-')
		}
		b.CIRC.apply(b, g)
	}
	
	//rect
	else {
		if (g.n) {
			g.push('-')
		}
		b.RECT.apply(b, g)
	}
	function length(arr) {
		var len = arr.length
		if (S(arr[0])) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}

b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = b.pol = function () {
	return this.f($pF.apply(null, arguments))
}
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}