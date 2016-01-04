b.GI = function () {
	return this.GetInertia()
}
b.AF = function (v, c) {
	this.ApplyForce(v, c);
	return this
}
 
b.AI = function () {
	this.ApplyImpulse.apply(this, arguments)
	return this
}

 

b.I = function (imp , pt, pt2) {
/*
 //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
 if (g.A) {return b.I.apply(b, g.f)}
 o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
 o.i = o.i || b.v().d(40)
 o.v = o.v || b.wC()
 b.ApplyImpulse(o.i, o.v.div())
 */
	var b=this,g=G(arguments), o
	b.imp = function (imp, pt) {
		return this.AI(imp, pt || this.GWC())
	}
	o = O(g.f)? {imp: g.f, pt: g.s}: 
	{imp: V(g.f, g.s), pt : g.t}
	o.imp = o.imp ||  b.worldVec().d(40)
	return b.imp(o.imp, o.pt)
}


b.F = function (v, c, c2) {
	if (N(c)) {
		return this.F(V(v, c), c2)
	}
	if (U(c)) {
		c = this.GWC()
	}
	this.ApplyForce(v, c)
	return this
}
b.lD = function (damp) {
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
b.aD = function () {
	var b = this, g = G(arguments),
			d = g[0]
	if (U(d)) {
		return b.GetAngularDamping()
	}
	if (d == '++') {
		d = 10000
	}
	b.SetAngularDamping(d)
	return b
	function alt() {
		b.aD = function (damp) {
			if (U(damp)) {
				return this.GetAngularDamping()
			}
			this.SetAngularDamping(damp)
			return this
		}
	}
}
b.aV = function (vel) {
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
b.lV = b.lV$ = function (lV, y) {
	var b = this
	var v = this.GetLinearVelocity()
	if (U(lV)) {
		return v
	}
	if (N(y)) {
		lV = V(lV, y)
	}
	else if (N(lV)) {
		lV = V(lV, v.y)
	}
	else if (g.m) {
		return this.lV(R() ? 1 : -1, R() ? 1 : -1)
	}
	this.SetLinearVelocity(lV)
	return this.wakeUp()
	function alt() {
		b.lV = function () {
			var b = this, g = G(arguments),
					v = b.GetLinearVelocity(), o, lV
			// can pass in V | x,y
			// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
			//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
			if (g.u) {
				return v
			}
			lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
			b.SetLinearVelocity(lV)
			return b.wakeUp()
		}
		b.lV = function (vel, n2) {
			if (U(vel)) {
				return this.GetLinearVelocity()
			}
			if (N(vel)) {
				vel = V(vel, n2)
			}
			this.SetLinearVelocity(vel)
			return this
		}
	}
}

b.F = function () {
	function alt() {
		b.F = b.constF = function (v, c, c2) {//b.applyForce = b.aF  =
			var b = this, g = G(arguments), v = g[0], c = g[1], c2 = g[2]
			if (N(c)) {
				return b.F(V(v, c), c2)
			}
			if (U(c)) {
				c = b.worldCenter()
			} // gotta adjust this
			b.ApplyForce(v, c)
			if (g.p) {
				cjs.tick(function () {
					b.ApplyForce(v, c)
				})
			}
			return b
		}      //apply force. pass impulse as two nums, or obj //and pass in location, defaults to body center
	}
	
	//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
			: {f: V(g[0]), wP: g[1]}
	o.wP = o.wP || b.wC()
	b.ApplyForce(o.f, o.wP)
	if (g.p) {
		cjs.t(function () {
			b.ApplyForce(o.f, o.wP)
		})
	}
	return b
}
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}
b.lVL = function (x, y) {
	var b = this
	b.GLVFLP = function (v) {
		return this.GetLinearVelocityFromLocalPoint(v)
	}
	return this.GLVFLP(V(x, y, '-'))
}
b.lVW = function (x, y) {
	var b = this
	b.GLVFWP = function (v) {
		return this.GetLinearVelocityFromWorldPoint(v)
	}
	return this.GLVFWP(V(x, y, '-'))
}
  
BODYEACH = function () {
	w = b2d.mW()//works
	b = w.B(100, 100, [[40], [100, 200, 100], [50, 200], [200, 200, 300, 400]])
	b.each(function (f) { //bind to this.. when u have time
		//f.SetSensor(true) //works
		// f.remove()
		// f.K('destroy')
		$l('shape type: ' + f.GetShape().m_type)
	})
}
FIXTS = function () {
	w = b2d.W({g: 0})
	b = w.dyn(300, 300)
	b.CIRC('o', 20)
	b.CIRC('b', 100, 140, 0)
	b.CIRC('r', 20, 100, 100)
	b.RECT('g', 100, 100)
	b.RECT('y', 100, 100, 50, 50)
	b.RECT('p', 100, 100, -150, -150, 45)
	b2 = w.B(800, 300)
	b2.fixt(20).C('r')   //circ
	b2.fixt(20, 100, 100).C('b')  //circ
	b2.fixt(100, 50)   //rect
	b2.fixt(100, 50, -100, -100)   //rect
	b2.fixt(100, 50, -100, 0, 25)   //rect
	b2.fixt([[-100, 0], [0, -100], [100, 40]])   //poly
	b3 = w.B(1000, 300)
	b3.fixt(b2d.fixt(20)) //circ
	b3.fixt(b2d.fixt(20, 100, 100)) //circ
	b3.fixt(b2d.fixt(100, 50)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, -100)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, 0, 25)) //rect
	b3.fixt(b2d.fixt([-100, 0], [0, -100], [100, 40])).C('g') //poly
	w.B(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]])
}
GRAV = function () {
	W({g: 10}).Y()
	balls = function () {
		w.D(100, 100, 'a', 50).d(1)
		w.D(100, 200, 'c', 40).d(1)
		w.D(100, 100, 'd', 50).d(1)
		w.D(100, 200, 'e', 40).d(1)
		w.D(100, 100, 'f', 50).d(1)
		w.D(100, 200, 'h', 40).d(1)
		w.D(100, 100, 'i', 50).d(1)
		w.D(100, 200, 'j', 40).d(1)
		w.D(100, 100, 'k', 50).d(1)
		w.D(100, 200, 'l', 40).d(1)
	};
	balls()
	range = w.pJ(
			w.S(600, 300, 'q', 220, 20),
			w.D(600, 300, 's', 20, 250).lD(10),
			V(1, 0)).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	cjs.t(function () {
		w.G(range.val())
		w.e(function (b) {
			b.I(0, .1)
		})
	})
}

FORCES = function () {
	w = b2d.W({g: 0}).db()
	b = w.B(400, 400, 'o', 200, 200).bindSprite('me')
	cjs.tick(function () {
		b.I(0, -400, b.GetWorldPoint(V(100, -100).div()))
	})
	w.player('thrust')
}
LINVEL = function () {
	w = b2d.W({g: 0}).db()
	_.times(10, function () {
		w.B(300, 300, 'y', 50)
	})
	setInterval(function () {
		w.each(function (b) {
			b.lV(0, 20)
		})
	}, 1000)
}
GRAVITY = function () {
	w = b2d.W({g: 0});
	w.B(100, 100, 10).constF(5000, -200000)
}
IMP = function () {
	w = b2d.W({g: 0})
	w.B(100, 500, 30, 30).rot(2)
	b = w.B(300, 500, 30, 30).rot(1).fixedRot(.2)
	t = {
		i: function () {
			b.I(V(10, -30), b.worldCenter())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			setInterval(function () {
				b.F(V(0, -3), b.worldCenter())
			}, 100)
		}
	}
}
SCALE = function () {
	w = b2d.W() //hurts mouse joint
	var x = 400, y = 440, v = {x: 0, y: 0}
	w.S(400, 300, 40);
	w.S(290, 350, 40);
	w.S(280, 220, 40)
	rad = 10
	b = w.B(x, y, rad).lV(v)
	cjs.tick(function () {
		b.fixt().kill()
		x = b.X();
		y = b.Y();
		v = b.lV();
		rad += .1
		b = w.B(x, y, rad).lV(v)
	})
}
CLONE = function () {
	w = b2d.W()
	w.roof.kill()
	b = w.B(400, 400, [[20], [20, 100, 0], [20, 0, 100], [100, 200]])
	setInterval(function () {
		b.I(0, -1000).clone()
	}, 3000)
	w.ship()
}
 