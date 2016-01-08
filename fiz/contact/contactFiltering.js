w.SCF = w.sCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}  
function old() {
	w._l.EndContact = function (cx) {
		_.e(w.endHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PreSolve = function (cx) {
		_.e(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PostSolve = function (cx, pam2) {
		_.e(w.postHandlers,
				function (func) {
					$.do(function () {
						func(cx, pam2)
					})  //second arg???????
				})
	}
}
function cxFilt() {
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
}
function filteringApps() {
	GRP = function () {
		W(20)
		w.pen('things dont collide with their own kind..')
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $cF(80).cat(2).gr(-3))
					.re(1).I(100, 100)
		})
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $rF(120, 120).gr(-4)).re(1).I(100, 100)
		})
		_.t(5, function () {
			w.ship().gI(-5)
		})
		_.t(1, function () {
			w.p().con('imp').gI(-5)
		})
	}
	DYNFILT = FIL = function () {
		W()
		f = w.ball(300, 300, 50).re(4).I(1000, 300).f()
		_.in(2, function () {
			flD = f.flD()
			flD.cB(0)
			f.SFD(flD)
		})
	}
	FLT = function () {
		W()
		w.D(300, 300,
				$cF(80).bt(2, 5))  // colls 4,1
		w.D(300, 300,
				$rF(60, 90, 0, 40, 10).bt(8, 3)) //colls 2,1
		w.D(400, 300,
				$cF(80).cat(2).gr(-3)) //cat 1
		w.D(400, 300,
				$rF(60, 90, 0, 40, 10).gr(-3)) //cat 1
	}
	BIT = function () {
		W()
		cir = $cF(80).cat(2).msk(1, 4)
		rec = $rF(60, 90).cat(4).msk(1, 2, 4)
		cir2 = $cF(12).cat(4).msk(2, 4)
		w.D(300, 300, cir)
		w.D(400, 30, cir)
		w.D(300, 300, rec)
		w.D(400, 300, rec)
		_.t(50, function () {
			w.D(300, M.r() * 400 + 100, cir2)
			w.D(250, M.r() * 400 + 100, cir2)
			w.D(500, M.r() * 400 + 100, cir2)
		})
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
}
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
 