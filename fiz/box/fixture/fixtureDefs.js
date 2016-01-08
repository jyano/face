
fD.de = fD.den = fD.d = function (de) {
	if (U(de)) {
		return this.density
	}
	this.density = de
	return this
}
fD.fr = fD.fric = fD.f = function (fr) {
	if (U(fr)) {
		return this.friction
	}
	this.friction = fr
	return this
}
fD.re = fD.rest = fD.r = function (re) {
	if (U(re)) {
		return this.restitution
	}
	this.restitution = re
	return this
}
fD.re = fD.r = fD.bo = function (r) {
	var fD = this
	if (U(r)) {
		return fD.restitution
	}
	fD.restitution = r;
	return fD
	function alt() {
		fD.rst = fD.rest = fD.r = function (rest) {
			if (U(rest)) {
				return this.restitution
			}
			this.restitution = rest;
			return this
		}
	}
}
fD.de = fD.d = fD.den = function (d) {
	var fD = this
	if (U(d)) {
		return fD.density
	}
	fD.density = d;
	return fD
	function alt() {
		fD.den = fD.d = function (den) {
			if (U(den)) {
				return this.density
			}
			this.density = den;
			return this
		}
	}
}
fD.fr = fD.f = fD.frc = function (f) {
	var fD = this
	if (U(f)) {
		return this.friction
	}
	fD.friction = f
	return fD
	function alt() {
		fD.frc = fD.fric = fD.f = function (fric) {
			if (U(fric)) {
				return this.friction
			}
			this.friction = fric;
			return this
		}
	}
}
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fD.s1 = fD.mS = fD.mSn = fD.mSen = fD.makeSen = function () {
	this.isSensor = true
	return this
}
fD.s0 = function () {
	this.isSensor = false
	return this
}

fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
	fD.Halt = fD.setShapeAlt = function (shape) {
		if (U(shape)) {
			return this.shape
		}
		this.shape = shape;
		return this
	}
}

fD.SAB=function(){var fD=this
	
	var h =fD.H()
	
	h.SAB.apply(h,arguments)

	return fD}
 
fD.arr = fD.pol = fD.ar = function () {
	var fD = this, g = G(arguments)
	
	var pH = $pH() 
	fD.H( pH.arr.apply(pH, g) ) //pol(g)
	return fD
	//= fD.sAA = fD.SAA
}
 
fD.polA = function (verts) {
	this.arr.apply(this, verts)
}
fD.cH  = function (r) {
	var fD = this, g = G(arguments)
	var cH = $cH(r)
	fD.H(cH) 
	return fD
	//= fD.sAA = fD.SAA
}
 //
fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h;
	return fD
}
fD.SAB = function (x, y) {
	this.H().SetAsBox(x, y)
	return this
}
fD.sAB = function (a, b, p, A) {
	var fD = this;
	alert('fD.sAB')
	var h = fD.H()
	if (!p) {
		h.SAB(a / 30, b / 30)
	}
	else {
		h.SAOB(a / 30, b / 30, p, A)
	}
	return fD
// used?
}
fD.SAOB = function (x, y, pos, ang) {
	this.SetAsOrientedBox(x, y, pos, ang)
	return this
}
fD.sAOB = fD.orBox = function (a, b, pos, aa) {
	var fD = this, h = fD.shape
	h.SAOB(a / 30, b / 30, pos, aa)
	return fD
}
fD.box = fD.sAB = function (a, b, p, aa) {
	var fD = this, h = fD.shape
	p ? h.SAOB(a / 30, b / 30, p, aa) :
			h.SAB(a / 30, b / 30)
	return fD
}
 
$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FD()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	fD.de(1)
	//if (b2d.isShape(shape)) {f.shape = shape}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
	// = b2d.fD = b2d.f
}