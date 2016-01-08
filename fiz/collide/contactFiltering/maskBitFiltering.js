function bits() {
	fD.cat = fD.cB = fD.ct = function (cB) {
		var fD = this
		if (U(cB)) {
			return fD.filter.categoryBits
		}
		fD.filter.categoryBits = cB;
		return fD
	}
	fD.msk = fD.ms = fD.mask = fD.mB = function () {
		var fD = this
		var g = G(arguments)
		if (g.u) {
			return fD.filter.maskBits
		}
		var n = 0
		_.e(g, function (msk) {
			n += msk
		})
		fD.filter.maskBits = n
		return fD
		function alt() {
			fd.msk = fd.mask = fd.mB = function (a) {
				if (U(a)) {
					return this.filter.maskBits
				}
				this.filter.maskBits = a;
				return this
			}
		}
	}
	fD.bit = fD.bt = fD.bits = function (cat, msk) {
		return this.cat(cat).msk(msk)
	}
	f.msk = f.mskBit = function (msk) {
		var f = this, g = G(arguments),
				flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
		if (g.u) {
			return flDa.maskBits
		}
		if (A(g.f)) {
			num = 0
			_.e(g.f, function (bits) {
				num += bits
			})
			g.f = num
		}
		flDa.maskBits = g.f
		f.flDa(flDa)
		return f
		function dit() {
			f.mskBit = f.msk = function (msk) {
				var f = this, g = G(arguments),
						flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
				if (g.u) {
					return flDa.maskBits
				}
				if (A(g.f)) {
					num = 0
					_.e(g.f, function (bits) {
						num += bits
					})
					g.f = num
				}
				flDa.maskBits = g.f
				f.flDa(flDa)
				return f
			}
		}
	}
	f.cat = f.catBit = function () {
		var f = this, g = G(arguments),
				flDa = f.flDa()
		if (g.u) {
			return flDa.categoryBits
		}
		flDa.categoryBits = g.f;
		f.flDa(flDa);
		return f
	}
	f.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	b.cat = function () {
		var b = this, g = G(arguments);
		if (g.u) {
			return b
		}
		b.fs(function (f) {
			f.cat(g.f)
		});
		return b
	}
	b.bit = function (cat, msk) {
		if (N(cat)) {
			this.cat(cat)
		}
		if (N(msk) || A(msk)) {
			this.msk(msk)
		}
		return this
	}
	b.msk = function () {
		var b = this, g = G(arguments);
		b.fs(function (f) {
			f.msk(g.f)
		})
		return b
	}
}
 