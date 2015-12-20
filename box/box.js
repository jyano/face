bD.Set = function () {
	this.position.Set.apply(this.position, arguments)
	return this
}
bD.X = function (x) {
	var bD = this, p = bD.XY()
	if (U(x)) {
		return p.x
	}
	return bD.XY(x, p.y)
	function alt() {
		bD.X = function (x) {
			var pos = this.XY()
			if (U(x)) {
				return pos.x
			}
			return this.XY(x, pos.y)
		}
	}
}
bD.Y = function (y) {
	var bD = this, p = bD.XY()
	if (U(y)) {
		return p.y
	}
	return bD.XY(p.x, y)
	function alt() {
		bD.Y = function (y) {
			var pos = this.XY()
			if (U(y)) {
				return pos.y
			}
			return this.XY(pos.x, y)
		}
	}
}
bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
	var args = G(arguments)
	args[0] = x;
	args[1] = y;
	if (x === '*') {
		x = Math.random() * 10 * 60
	}
	if (y === '*') {
		y = Math.random() * 10 * 60
	}
	var pos = this.position
	if (U(x)) {
		return {x: pos.x * 30, y: pos.y * 30}
	}
	this.position.Set(x / 30, y / 30)
	return this
	function alt() {
		bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
			var args = G(arguments)
			args[0] = x;
			args[1] = y;
			if (x === '*') {
				x = Math.random() * 10 * 60
			}
			if (y === '*') {
				y = Math.random() * 10 * 60
			}
			var pos = this.position
			if (U(x)) {
				return {x: pos.x * 30, y: pos.y * 30}
			}
			//if(O(x)){this.position=x;return this}
			this.position.Set(x / 30, y / 30)
			return this
		}
		bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
			var bD = this, g = G(arguments), p
			if (g.u) {
				return bD.position.m()
			}
			p = V(g.f, g.s, '-')
			bD.position.Set(p.x, p.y)
			return bD
		}
	}
}
bD.rt = bD.rot = bD.ang = function (ang) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	if (U(ang)) {
		return bD.angle
	}
	this.angle = ang;
	return this
	function alt() {
		bD.rot = bD.ang = function (ang) {
			//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
			if (U(ang)) {
				return bD.angle
			}
			this.angle = ang;
			return this
		}
	}
}
bD.fR = bD.fixedRot = function (isFixed) {
	function alt() {
		bD.fixedRot = bD.fR = function (isFixed) {
			if (U(isFixed)) {
				return this.fixedRotation
			}
			this.fixedRotation = isFixed;
			return this
		}
	}
	
	if (U(isFixed)) {
		return this.fixedRotation
	}
	this.fixedRotation = isFixed;
	return this
}
bD.aD = function (damp) {
	if (U(damp)) {
		return this.angularDamping
	}
	this.angularDamping = damp;
	return this
}
bD.aV = function (vel) {
	if (U(a)) {
		return this.angularVelocity
	}
	this.angularVelocity = vel
	return this
}
bD.dyn = function () {
	return this.T(2)
}
bD.lD = function (dm) {
	var bD = this
	if (U(dm)) {
		return bD.linearDamping
	}
	bD.linearDamping = dm
	return bD
}
bD.lV = function (vel) {
	if (U(vel)) {
		return this.linearVelocity
	}
	this.linearVelocity = vel;
	return this
}
bD.stat = function () {
	return this.T(0)
}
bD.T = bD.typ = bD.kind = function (type) {
	if (U(type)) {
		return this.type
	}
	this.type = type
	return this
}
bD.bul = bD.bull = function (isBul) {
	//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
	if (U(isBul)) {
		return this.bullet
	}
	this.bullet = isBul;
	return this
}
b.W = b.wor = b.world = function () {
	return this.GetWorld()
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
b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.aw1 = b.wake = b.wakeUp = function () {
	this.SetAwake(true);
	return this
}
b.aw0 = b.sleep = function () {
	this.SetAwake(false);
	return this
}
b.ty = b.type = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}
b.iD = b.isDyn = function () {
	return this.GetType() == 2
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
	function alt() {
		b.dyn = function (resumeVel) {
			this.type(2)
			if (resumeVel == true && O(this._linVel)) {
				this.linVel(this._linVel)
			}
			this._linVel = null
			return this
		}
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
	function alt() {
		b.stat = function () {
			var v = this.linVel()
//huh??? oh can get/set type of body
			this._linVel = V(v.x, v.y)
			this.type(0)
			return this
		}
	}
}
b.iS = b.isStat = function () {
	return this.GetType() == 0
}
b.rt = b.rot = function (angle, ms) {
	var b = this, g = G(arguments), r = g[0], ms = g[1],
			a = Math.toDegrees(b.GetAngle()) //currAng
	if (U(r)) {
		return a
	}
	if (N(ms)) {
		b.stop = I(function () {
			b.rot(r, '+')
		}, ms)
	}
	else {
		b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.X = function (x) {
	var g = G(arguments),
			pos = this.XY()
	if (U(x = g.f)) {
		return pos.x
	}
	this.XY(
			_.upd(pos.x, x, g), pos.y
	)
	return this
	function alt() {
		b.X = function (x) {
			var g = G(arguments), pos = this.XY()
			if (U(x = g[0])) {
				return pos.x
			}
			this.XY($.update(pos.x, x, g), pos.y)
			return this
		}
	}
}
b.Y = function (y) {
	function alt() {
		b.Y = function (y) {
			var g = G(arguments), pos = this.XY()
			if (U(y = g[0])) {
				return pos.y
			}
			this.XY(pos.x, $.update(pos.y, y, g))
			return this
		}
	}
	
	var b = this,
			g = G(arguments),
			pos = b.XY()
	if (g.u) {
		return pos.y
	}
	this.XY(pos.x,
			_.upd(pos.y, y, g))
	return this
}
b.XY = function (x, y) {
	function alt() {
		b.XY = function (x, y) {
			var newPos
			if (x === '*') {
				x = Math.random() * 10
			}
			if (y === '*') {
				y = Math.random() * 10
			}
			if (U(x)) {
				var pos = this.GetPosition()
				return pos.mult()
			} //used to parseInt.. necessary?
			y = N(y) ? y : x
			newPos = V(x / 30, y / 30)
			this.SetPosition(newPos)
			return this
		}
	}
	
	var b = this, g = G(arguments),
			newPos, pos
	if (x === '*') {
		x = R(10)
	}
	if (y === '*') {
		y = R(10)
	}
	if (g.u) {
		pos = b.GetPosition()
		return pos.m().tF(0)
	} //used to parseInt.. necessary?
	if (b2d.iB(x)) {
		y = x.Y()
		x = x.X()
	}
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.fR = b.sFR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR1 = b.fixRot = function () {
	return this.fixedRot(true)
}
b.fR0 = b.FR = function () {
	return this.fixedRot(false)
}
b.AI = function () {
	this.ApplyImpulse.apply(this, arguments)
	return this
}
b.I = function me(i, v, v2) {
	var b = this, g = G(arguments), o
	//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
	if (g.A) {
		return b.I.apply(b, g.f)
	}
	o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
	o.i = o.i || b.v().d(40)
	o.v = o.v || b.wC()
	b.ApplyImpulse(o.i, o.v.div())
	return b
	function alt() {
		b.I = function self(impulse, point, point2) {//b.impulse = b.applyImpulse = b.aI  =
			if (U(impulse)) {
				impulse = this.worldVec().div(40)
			}
			if (N(point)) {
				impulse = V(impulse, point)
				point = point2
			}
			if (U(point)) {
				point = this.GetWorldCenter()
			}
			this.ApplyImpulse(impulse, point)
			return this
		}//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
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
f.B = f.body = function () {
	return this.GetBody()
}
f.W = function () {
	return this.B().W()
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
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
}
f.grp = function (i) {
	var fl = this.GetFilterData()
	if (U(i)) {
		return fl.groupIndex
	}
	fl.groupIndex = i
	this.SetFilterData(fl)
	return this
} //get/set for groupIndex
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
f.bType = function () {
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
f.rt = f.rot = function (rot, g) {
	return this.B().rot(rot, g)
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
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
	function alt() {
		fD.H = fD.setShape = function (shape) {
			if (U(shape)) {
				return this.shape
			}
			this.shape = shape;
			return this
		}
	}
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
b.fD = b.fxD = function (fD) {
	return this.cF($fD(fD))
}
b.cF = function () {
	return this.CreateFixture.apply(this, arguments)
}
b.aF = function () {
	this.cF.apply(this, arguments)
	return this
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.f = function (fD) {//b.createFixture = b.cF = b.fixt1 = b.shape =
	var b = this, f;
	if (U(fD)) {
		return this.GetFixtureList()
	}
	// can pass a CODED array of fixts (will get parsed)
	if (A(fD)) {
		_.each(b2d.fixtParse(fD),
				function (fd) {
					b.fixt(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	//create the fixt
	f = this.CreateFixture(fD)
	//assign it classes specified in the fixt def
	if (A(fD.classes)) {
		_.each(fD.classes,
				function (clas) {
					f.K(clas)
				})
	}
	return f
	//= b.fixt = b.list
}
b.fs = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
	function alt() {
		b.fixts = b.each = b.eachFixt = function (func) {
			var fl = this.fixt(), arr = [],
					g = G(arguments), func = g[0]
			while (fl) {
				arr.push(fl);
				fl = fl.GetNext()
			}
			//order by biggest
			if (g.p) {
				arr = arr.sort(function (a, b) {
					return b.area() - a.area()
				})
			}
			//order by smallest
			if (g.n) {
				arr = arr.sort(function (a, b) {
					return a.area() - b.area()
				})
			}
			if (F(func)) {
				_.each(arr, func);
				return this
			}
			return arr
		}
	}
	
	// = b.e
}
b.fr = b.fric = function (fr) {
	var b = this
	if (U(fr)) {
		return b.f().GetFriction()
	}
	b.fs(function (f) {
		f.SetFriction(fr)
	})
	return b
	function alt() {
		b.fric = function (fric) {
			if (U(fric)) {
				return this.list().GetFriction()
			}
			this.each(function (f) {
				f.SetFriction(fric)
			})
			return this
		}
	}
}
b.de = b.d = b.den = function (d) {
	var b = this
	if (U(d)) {
		return b.f().GetDensity()
	}
	b.fs(function (f) {
		f.SetDensity(d)
	})
	b.ResetMassData()
	return b
	function alt() {
		b.den = function (den) {
			if (U(den)) {
				return this.list().GetDensity()
			}
			this.each(function (f) {
				f.SetDensity(den)
			})
			this.ResetMassData()
			return this
		}
	}
}
b.re = b.r = b.bo = b.rest = function (r) {
	function alt() {
		b.bo = b.rest = function (rest) {
			if (U(rest)) {
				return this.list().GetRestitution()
			}
			this.each(function (f) {
				f.SetRestitution(rest)
			})
			return this
		}
	}
	
	var b = this
	if (U(r)) {
		return b.f().GetRestitution()
	}
	b.fs(function (f) {
		f.SetRestitution(r)
	})
	return b
}
b.sen = b.iS = function (s) {
	var b = this
	var f = b.f()
	if (U(isSensor)) {
		return f.m_isSensor
	}
	b.fs(function (f) {
		f.sen(s)
	})
	return b
}
b.s1 = b.sens = function () {//turns on
	this.f().sensor(true);
	return this
}
b.rad = b._r = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.h = function () {
	return this.f().shape
}

 
