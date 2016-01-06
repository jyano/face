$L('shape', 'types')
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
}
f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.de = f.den = f.d = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	this.body().ResetMassData()
	return this
}
f.re = f.rest = f.r = f.bo = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.sen = function (s) {
	var f = this
	if (U(s)) {
		return f.IsSensor()
	}
	if (s == '/') {
		s = f.SetSensor(!f.IsSensor())
	}
	else {
		f.SetSensor(s ? true : false)
	}
	return f
	function alt() {
		f.sen = f.sensor = function (sen) {
			var f = this
			if (U(sen)) {
				sen = !f.m_isSensor
			}
			f.m_isSensor = sen
			return this
		}
	}
}
f.isSen = function (isSensor) {
	return this.m_isSensor
}
f.H = f.shp = f.shape = function (h) {//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return this
}
f.rad = function () {
	return this.shp().m_radius * 30
}
function shape() {
	f.dyn = function () {
		var b = this.B();
		b.dyn.apply(b, arguments);
		return this
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
	f.bTy=f.bType = function () {
		return this.B().GetType()
	}
	f.isBType = f.isType = function (t) {
		var f = this
		if (t) {
			return f.bType() == t
		}
	}
	f.hType = function () {
		return this.H().m_type
	}
	f.iC = f.isCirc = function () {
		return this.hType() == 0
	}
	f.iS = f.iSt = function () {
		return this.B().iS()
	}
	f.iD = f.iDy = function () {
		return this.B().iD()
	}
}
function types() {
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.stat = function () {
		var b = this.B();
		b.stat.apply(b, arguments);
		return this
	}
	f.isStat = function () {
		return this.B().isStat()
	}
	f.isDyn = function () {
		return this.B().isDyn()
	}
	f.isKin = function () {
		return this.B().isKin()
	}
	f.bType = function () {
		return this.B().GetType()
	}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
	f.isBType = f.isType = function (t) {
		if (t) {
			return this.bType() == t
		}
	}
}

$cF = function () {
	
	var g = G(arguments)
	
	var cH = $cH(g.f, g.s, g.t)
	
	var f = $fD(cH)
	
	if (g.n) {
		f.isSensor = true
	}
	
	return f
}
f.GN = f.N = f.next = function () {
	return this.GetNext()
}

$cFAlt = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
$cirFAlt = function (rad, x, y, den) {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
//make a circ fixture
// neg-> sensor
	var g = G(arguments),
			rad = N(g[0]) ? g[0] : 50,
			x = N(g[1]) ? g[1] : 0,
			y = N(g[2]) ? g[2] : 0,
			den = N(den) ? den : 1
	fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
	if (g.n) {
		fixt.isSensor = true
	}
	return fixt
	//hmm.. fixt doesnt have a rel loc.. its shape does
	//what if u want to change 'shape' of shape, but keep its rel loc?
}
$cF6 = function (rad, x, y) {
	var g = G(arguments), f
	rad = g[0];
	x = g[1];
	y = g[2];
	rad = rad || M.r() + .1
	x = N(x) ? x : 0
	y = N(y) ? y : x
	var cir = $cH(rad)
	cir.lP(V(x, y, '-'))
	f = $fD(cir)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
 
 
f.tf = f.gTf = function(tf){
 
	var f=this,b= f.B()
	
	if(U(tf)){return b.tf()}
	b.tf(tf)
	return f
 }
f.TP = function () {
	var f = this,
	 h = f.H()
	
	return h.TP.apply(h, arguments)
}