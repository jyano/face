

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
b2d.fxPar = function (fxs, fn) {
	var b = this

	//if its not an array,, assume is fine, and leave it as is

	fxs = _.m(fxs, function (f) {
		return !A(f) ? f :
				f.length == 1 || f.length == 3 ?
						$cF.apply(null, f) :
						$pF.apply(null, f)
	})
	
	// fn = _.b(fn, b) ?
	
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	
	return fxs
	
	//if (f.isSensor) {return b2d.polySens.apply(null, f)}
}
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
 
}
fD.SAB=function(){var fD=this
	
	var h =fD.H()
	
	h.SAB.apply(h,arguments)

return fD}
fD.Halt = fD.setShapeAlt = function (shape) {
	if (U(shape)) {
		return this.shape
	}
	this.shape = shape;
	return this
}
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
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
 