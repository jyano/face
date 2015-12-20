 
f.SFD = function (flD) {
	this.SetFilterData(flD);
	return this
}
f.GFD = function () {
	return this.GetFilterData()
}
f.flD = f.gFD = f.gFlD = function (flD) {
	var f = this
	if (flD) {
		return this.SFD(flD)
	}
	var _sFlD = function (flD) {
		flD.cB = function (cB) {
			var fLD = this
			if (U(cB)) {
				return flD.categoryBits
			}
			flD.categoryBits = cB
			return flD
		}
		flD.mB = function (mB) {
			var fLD = this
			if (U(mB)) {
				return flD.maskBits
			}
			flD.maskBits = mB;
			return flD
		}
		flD.gI = function (gI) {
			var flD = this
			if (U(gI)) {
				return flD.groupIndex
			}
			flD.groupIndex = gI;
			return flD
		}
		return flD
	}
	return _sFlD(f.GFD())
}
f.gI = f.gr = f.grp = f.ix = function (gI) {
	var f = this,
			flD = f.flD()
	return U(gI) ? flD.gI() : f.flD(flD.gI(gI))
}
fD.gI = fD.gr = fD.ix = fD.grp = function (gI) {
	var fD = this
	if (U(gI)) {
		return fD.filter.groupIndex
	}
	fD.filter.groupIndex = gI;
	return fD
}
//Changing the collision filter at run-time
//You can change each of the categoryBits, maskBits, groupIndex
// by setting a new b2Filter in the fixture.
// Quite often you only want to change one of these,
// so it's handy to be able to get the existing filter first,
// change the field you want, and put it back.
b.gI = function (gI) {
	return this.fs(function (f) {
		f.gI(gI)
	})
}
fD.ct = fD.cat = fD.cB = function (cB) {
	var fD = this
	if (U(cB)) {
		return fD.filter.categoryBits
	}
	fD.filter.categoryBits = cB;
	return fD
}
fD.ms = fD.msk = fD.mask = fD.mB = function () {
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
}
fD.bt = fD.bits = function (cat, msk) {
	return this.cat(cat).msk(msk)
}
f.ms = f.msk = f.mask = function () {
}
f.ct = f.cat = function () {
}
f.bt = f.bit = function () {
}
alpha = function () {
	cx.filtering = cx.fFF = function () {
		var cx = this
		cx.FlagForFiltering();
		return cx
		// Flag this contact for filtering.
// Filtering will occur the next time step.
	}
}
b.GLVFLP = function (v) {
	return this.GetLinearVelocityFromLocalPoint(v)
}
b.GLVFWP = function (v) {
	return this.GetLinearVelocityFromWorldPoint(v)
}
b.lVL = function (x, y) {
	return this.GLVFLP(V(x, y, '-'))
}
b.lVW = function (x, y) {
	return this.GLVFWP(V(x, y, '-'))
}
f.getFiltData = f.fil = f.fl = f.flDa = function () {
	var f = this, g = G(arguments)
	if (g.u) {
		return f.GetFilterData()
	}
	;
	f.SetFilterData(g.f);
	return f
}
f.catBit = f.cat = function () {
	var f = this, g = G(arguments),
			flDa = f.flDa()
	if (g.u) {
		return flDa.categoryBits
	}
	flDa.categoryBits = g.f;
	f.flDa(flDa);
	return f
}
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
b.msk = function () {
	var b = this, g = G(arguments);
	b.fs(function (f) {
		f.msk(g.f)
	})
	return b
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
b.bit = function (cat, msk) {
	if (N(cat)) {
		this.cat(cat)
	}
	if (N(msk) || A(msk)) {
		this.msk(msk)
	}
	return this
}
/*flDa.groupIX= flDa.grp = flDa.g = function (grp) {
 var flDa = this
 if (U(grp)) {
 return flDa.groupIndex
 }
 flDa.groupIndex = grp
 return flDa
 }
 f.groupIx=f.grp = function (grpIx) {
 var f = this, fl = f.GetFilterData()
 if (U(grpIx)) {
 return fl.groupIndex
 }
 fl.groupIndex = grpIx
 f.SetFilterData(fl)
 return f
 //get/set for groupIndex
 }
 fd.groupIx= fd.grp = fd.group = fd.index = fd.gI = function (a) {
 if (U(a)) {
 return this.filter.groupIndex
 }
 this.filter.groupIndex = a;
 return this
 }
 f.groupIx = f.grp = function (i) {
 var f = this, fl = f.fl()
 if (U(i)) {
 return fl.groupIndex
 }
 fl.groupIndex = i
 return this.fl(fl)
 }
 b.groupIX=b.grp = function (i) {

 if (U(i)) {
 return this.f().grp()
 }




 this.fs(function (f) {
 f.grp(i)
 })
 return this

 }
 b.groupIx=b.grp = function (grp) {

 var b = this

 b.fs(function (f) {
 f.grp(grp)
 })

 return b

 } */
w.setContactFilt = w.cxFl = w.sCF = function () {
	var w = this, g = G(arguments)
	w.SetContactFilter.apply(w, g)
}
f.getFiltData = f.fil = f.fl = f.flDa = function () {
	var f = this, g = G(arguments)
	if (g.u) {
		return f.GetFilterData()
	}
	f.SetFilterData(g.f);
	return f
}
f.catBit = f.cat = function () {
	var f = this, g = G(arguments),
			flDa = f.flDa()
	if (g.u) {
		return flDa.categoryBits
	}
	flDa.categoryBits = g.f;
	f.flDa(flDa);
	return f
}
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
b.msk = function () {
	var b = this, g = G(arguments);
	b.fs(function (f) {
		f.msk(g.f)
	})
	return b
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
b.bit = function (cat, msk) {
	if (N(cat)) {
		this.cat(cat)
	}
	if (N(msk) || A(msk)) {
		this.msk(msk)
	}
	return this
}
flDa.groupIX = flDa.grp = flDa.g = function (grp) {
	var flDa = this
	if (U(grp)) {
		return flDa.groupIndex
	}
	flDa.groupIndex = grp
	return flDa
}
f.groupIx = f.grp = function (grpIx) {
	var f = this, fl = f.GetFilterData()
	if (U(grpIx)) {
		return fl.groupIndex
	}
	fl.groupIndex = grpIx
	f.SetFilterData(fl)
	return f
	//get/set for groupIndex
}
fd.groupIx = fd.grp = fd.group = fd.index = fd.gI = function (a) {
	if (U(a)) {
		return this.filter.groupIndex
	}
	this.filter.groupIndex = a;
	return this
}
f.groupIx = f.grp = function (i) {
	var f = this, fl = f.fl()
	if (U(i)) {
		return fl.groupIndex
	}
	fl.groupIndex = i
	return this.fl(fl)
}
b.groupIX = b.grp = function (i) {
	if (U(i)) {
		return this.f().grp()
	}
	this.fs(function (f) {
		f.grp(i)
	})
	return this
}
b.groupIx = b.grp = function (grp) {
	var b = this
	b.fs(function (f) {
		f.grp(grp)
	})
	return b
}
w.setContactFilt = w.cxFl = w.sCF = function () {
	var w = this, g = G(arguments)
	w.SetContactFilter.apply(w, g)
}
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
