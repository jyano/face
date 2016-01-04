

$fD = function () {
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
STACKTHREE = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.B(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.B(310, 120, 't', 60, 60)
	w.B(320, 120, 't', 60, 60)
	w.B(340, 120, 't', 60, 60)
	w.B(350, 120, 't', 60, 60)
	w.B(370, 120, 't', 60, 60)
	w.B(380, 120, 't', 60, 60)
	w.B(550, 120, 't', 60, 60)
	w.B(570, 120, 't', 60, 60)
	w.B(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
	w.db()
}
TINYREDBALLS = function () {
	w = b2d.G(1000, 500, 2000, 1000)
	y = w.ship(1000, 400//w.H()-100
	)
	//w.pXY(500,0)
	w.fw(y, 500, 300)
	// w.S(500,400,'b',20,200) //why sensor not working any more??
	w.B(700, 300, 'r', [[4]])
	w.B(800, 300, 'r', [[4]])
	w.B(900, 300, 'r', [[4]])
	w.B(1000, 300, 'r', [[4]])
	w.B(1100, 300, 'r', [[4]])
	w.B(1200, 300, 'r', [[4]])
	w.B(1300, 300, 'r', [[4]])
	w.s.HUD.dot('w', 500, 300)
	w.s.HUD.dot('w', 700, 300)
	w.s.HUD.dot('w', 1100, 300)
}
CONTLIST = function () {//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	w = b2d.W({}).debug().C('p')
			.bindCo('co1', 'co2')
			.end(function (cx) {
				var fixt
				if (fixt = cx.with('co2')) {
					fixt.cancel()
				}
			})
	co1 = w.acc(0, -50)
	s1 = w.sensorBucket(320, 300, 'co1')
	co2 = w.acc(0, -50)
	s2 = w.sensorBucket(700, 300, 'co2')
	w.circ(150, 100, 30, 'w').den(1)
	w.circ(200, 100, 30, 'd').den(1)
	w.circ(250, 100, 30, 'r').den(1)
	w.circ(350, 100, 30, 'g').den(1)
	w.circ(400, 100, 30, 'o').den(1)
	w.circ(450, 100, 30, 'w').den(1)
	setTimeout(function () {
		y = w.ship(300, 50)
		setInterval(function () {
			w.circ(300, 100, 10, 'y')
			w.circ(760, 100, 10, 'b')
			y.bc('kill')
		}, 1000)
	}, 500)
}
UPDOWN = function () {
	w = b2d.W({g: 0}).debug().C('g')
	y = w.ship(300, 50).linDamp(5)
	co1 = w.acc(0, -50)
	co2 = w.acc(0, 50)
	s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
	s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')
	w.bindCo('co1', 'co2')
	w.beg(function () {
	})
	w.end(function (cx) {
		var fixt
		if (fixt = cx.with('co1')) {
			// fixt.cancel()
		}
		if (fixt = cx.with('co2')) {
			// fixt.cancel()
		}
	})
	_.times(20, function () {
		w.circ(300, 300, 30, 'b')
	})
}
GRAVTRAP = function () {
	W({g: 0, w: 0}).C('e').Y(300, 300).pen('welcome to grav controller')
	gCo = w.grav().body(y,
			w.D(320, 300, 'b', 20).den(1),
			w.D(300, 320, 'r', 30).den(1),
			w.D(340, 300, 'x', 40).den(1),
			w.D(300, 340, 'c', 50).den(1),
			w.D(320, 320, 'l', 60).den(1)
	)
}
GRAVR = function () {
	W({g: 0, w: 0}).C('e').Y(300, 200).pen(
			'welcome to grav controller - top balls r1, bottom r2(default)')
	r = 40
	gCo = w.grav(1, true).body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
	gCo2 = w.grav().body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
}
GRAVG = function () {
	W({g: 0, w: 0}).C('e').Y(100, 100)
	w.pen(
			'welcome to grav controller - top has g:2, bottom has g:1 (default)')
	r = 40
	gCo = w.grav(2).body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
	gCo2 = w.grav().body(
			w.D(700, 600, 'b', r).den(1),
			w.D(800, 500, 'r', r).den(1),
			w.D(900, 400, 'x', r).den(1),
			w.D(1000, 300, 'c', r).den(1),
			w.D(1100, 200, 'l', r).den(1),
			w.D(1200, 100, 'l', r).den(1)
	)
}
GRAVGR = function () {
	w = b2d.W({g: 0, walls: 0}).C('e').pen(
			'welcome to grav controller - top has g:1,r:1, bottom has g:2,r:2 -- pinks move OUTWARDS only on bottom?')
	y = w.yShip(300, 200).thrustControl().shootOnSpace().den(1).linDamp(10)
	r = 40
	gCo = w.grav(1, true).body(
			w.circ(100, 600, r, 'b').den(1),
			w.circ(200, 500, r, 'l').den(1),
			w.circ(300, 400, r, 'x').den(1),
			w.circ(400, 300, r, 'x').den(1),
			w.circ(500, 200, r, 'l').den(1),
			w.circ(600, 100, r, 'b').den(1)
	)
	gCo2 = w.grav(4).body(
			w.circ(700, 600, r, 'b').den(1),
			w.circ(800, 500, r, 'l').den(1),
			w.circ(900, 400, r, 'x').den(1),
			w.circ(1000, 300, r, 'x').den(1),
			w.circ(1100, 200, r, 'l').den(1),
			w.circ(1200, 100, r, 'b').den(1)
	)
}
FORCE = function () {
	w = b2d.W({g: 0}).C('e')
			.pen('welcome to (const) force controller')
	fCo = w.force(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b').den(1)
	b1 = w.circ(100, 200, 40, 'b').den(1)
	x = w.circ(100, 300, 20, 'x').den(1)
	x1 = w.circ(100, 400, 40, 'x').den(1)
	setTimeout(function () {
		w.C('d');
		fCo.body(b, b1)
		aCo.body(x, x1)
	}, 2000)
}
ACCVSFORCE = function () {
	w = b2d.W({g: 0}).C('e')
			.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	fCo = w.force(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b').den(1)
	b1 = w.circ(100, 200, 40, 'b').den(1)
	x = w.circ(100, 300, 20, 'x').den(1)
	x1 = w.circ(100, 400, 40, 'x').den(1)
	setTimeout(function () {
		w.C('d');
		fCo.body(b, b1)
		aCo.body(x, x1)
	}, 2000)
}
TENSOR = function () {
	W().G(0).pen('welcome to tensor (damping) controller - the timing here is amazing!')
	co = w.tensor().body(
			w.D(100, 100, 'r', 30).lV(10, 20),
			w.D(500, 500, 'b', 30).lV(-10, -20),
			w.D(300, 300, 'g', 30).lV(-10, -20)
	)
}
TENSORNEVERSETTLE = function () {
	W().G(0).Y().pen('welcome to tensor (damping) controller')
	co = w.tensor()
	_.times(30, function () {
		co.body(w.B(400, 300, 'w', 20).L(10, 20, 0))
	})
} 