$L('bDef', 'bod', 'fDef', 'fixt', 'shape','loop')
function bod() {
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
	b.W = b.wor = b.world = function () {
		return this.GetWorld()
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
	b.lV = function (lV, y) {
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
	b.lV$ = function () {
		return this.lV(R() ? 1 : -1, R() ? 1 : -1)
	}
	b.GWC = function () {
		return this.GetWorldCenter()
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
	b.wake = b.wakeUp = function () {
		this.SetAwake(true);
		return this
	}
	b.awake = function () {
		var g = G(arguments)
		this.SetAwake(g.n ? false : true)
		return this
	}
	b.sleep = function () {
		this.SetAwake(false);
		return this
	}
}
function fixt() {
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
}
function bDef() {
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
}
function shape() {
	bH.ty = function () {
		return b2d.iH(this)
		bH.GT = function () {
			return this.GetType()
		}
	}
	bH.iP = function () {
		return b2d.iP(this)
	}
	bH.iC = function () {
		return b2d.iC(this)
	}
	bH.iA = function () {
		return b2d.iA(this)
	}
	bH.rad = function (r) {
		var bH = this;
		bH.GR = function () {
			return this.GetRadius()
		}
		bH.SR = function (rad) {
			this.SetRadius(rad);
			return this
		}
		bH.sRad = function (r) {
			var bH = this
			if (bH.ty() == 'c') {
				return bH.SR(r / 30)
			}
			bH.m_radius = r / 30
			return bH
		}
		bH.gRad = function () {
			var bH = this
			return bH.ty() == 'c' ? bH.GR() * 30 :
			bH.m_radius * 30
		}
		return U(r) ? bH.gRad() : bH.sRad(r)
	}
	bH.tP = bH.tPt = function (tf, v, y) {
		var bH = this
		//bH.test = h.point =
		function alt() {
			bH.testPoint = h.tP = function (tf, vec) {
				return this.TestPoint(tf, vec)
			}
			bH.TP = function (x, y) {
				return this.TestPoint(x, y)
			}
			bH.tPt = bH.tP = function (x, y) {
				var bH = this
				alert('bH.tPt tP')
				return bH.TP(x / 30, y / 30)
			}
		}
		
		return this.TestPoint(tf, V(v, y).div())
	}
	bH.C = function () {
		return this.Copy()
	}
	bH.vs = function () {
		return this.m_vertices
	}
	bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
		return this.TestSegment(xf,
				lamb,//:Array, returns the hit fraction.
				// You can use this to compute the contact point p = (1 - lambda) segment.p1
				// + lambda segment.p2.
				norm,//:b2Vec2, returns the normal at the contact point.
				// If there is no intersection, the normal is not set.
				seg,//:b2Segment, defines the begin and end point of the ray cast
				maxLamb//:Numbera number typically in the range [0,1]
		)
	}
	bH.RC = function (fn, p1, p2) {
		return this.RayCast(fn, p1, p2)
	}
	bH.CAB = function (v1, v2) {
		var bH = this;
		return bH.ComputeAABB()
	}
	bH.CM = function (mass) {
		var bH = this;
		return bH.ComputeMass()
	}
	bH.CSA = function () {
		var bH = this
		var area = bH.ComputeSubmergedArea()
		return area
	}
	cH.set = cH.S = function () {
		var bH = this
		bH.Set.apply(bH, arguments)
		return bH
	}
	cH.XY = function (x, y) {
		var cH = this;
		cH.GLP = function () {
			return this.GetLocalPosition()
		}
		cH.SLP = function () {
			this.SetLocalPosition.apply(this, arguments)
			return this
			//cH._sLP =
		}
		if (U(x)) {
			return this.GLP().m()
		}
		return this.SLP(V(x, y).d())
		function alt() {
			cH.xy = function (x, y) {
				var pos = V(x, y).d()
				return this._sLP(pos)
			}
		}
		
		//cH.xy =cH.lP = cH.sLP =
	}
	pH.set = function (wd) {
		var pH = this, g = G(arguments)
		//this covers all cases for polygons !!!! // ******// !!!!!!!!
		if (N(wd)) {
			pH.box.apply(pH, g)
		}
		else if (O(wd)) {
			pH.arr.apply(pH, g)
		}
		return pH
	}
	pH.vs = pH.verts = function () {
		var verts = this.m_vertices
		return _.m(verts, function (v) {
			return [v.x * 30, v.y * 30]
		})
		function alt() {
			pH.vs = pH.vertsx = function () {
				alert('pH.vs. see boxShapes.js')
				var pH = this
				return _.m(pH.m_vertices, function (v) {
					return [v.x * 30, v.y * 30]
				})
			}
		}
	}
	pH.vec = pH.setAsVec = function (v, sc) {
		var pH = this //used by SepLib
		pH.SetAsVector(_.m(v, function (v) {
			return V(v).d(N(sc, 30))
		}))
		return pH
		function alt() {
			pH.setAsVec = function (vec, scale) {
				scale = N(scale) ? scale : 30
				vec = _.map(vec, function (v) {
					return V(v).div(scale)
				})
				this.SetAsVector(vec)
				return this
			}
		}
	}

	
	pH.arr = function () {
		var pH = this, g = G(arguments)
		pH.sAA = function (arr) {
			var pH = this
			pH.SAA = function (arr, arrLen) {
				this.SetAsArray(arr, arrLen)
				return this
			}
			return this.SAA(arr, arr.length)
		}
		var pts = g.s ? arguments :
				g.f
		a = arr = _.m(pts, function (pt) {
			var v = V(pt)
			return V(v.x, v.y).d()
		})
		pH.sAA(arr)
		return pH
		function alt() {
			pH.arr = function () {
				var v
				v = b2d.verts.apply(null, arguments)
				this.SetAsArray(v, v.length)
				return this
			}//pH.setAsArray=p.sAA=function(a,b){if(U(b)){b=a.length}; this.SetAsArray(a, b); return this}
			pH.arr = function (v) {
				var p = this
				v = _.m(v, function (v) {
					return V(v).d()
				})
				p.SetAsArray(v, v.length)
				return p
			}
		}
	}
	fD.SAA = function () {
		this.shape.SetAsArray.apply(this.shape, arguments)
		return this
	}
	bD.Set = function () {
		this.position.Set.apply(this.position, arguments)
		return this
	}
}
function fDef() {
 
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
	fD.re = fD.r = fD.bo  = function (r) {
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
	fD.fr = fD.f = fD.frc  = function (f) {
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

}
fD.asBox = function (a, b) {
	this.shape.SetAsBox(a / 30, b / 30)
	return this
}
fD._sAOB = function (a, b, p, aa) {
	this.shape.SetAsOrientedBox(a, b, p, aa)
	return this
}
fD.asOrBox = function (a, b, p, aa) {
	var fD=this
	
	return this._sAOB(a / 30, b / 30, p, aa)
}
fD.box = fD.sAB = function (a, b, p, A) {
	if (!p) {
		this.shape.SetAsBox(a / 30, b / 30)
	}
	else {
		this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	}
	return this
}
pH.SAOB = function (wd, ht, pos, ang) {
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.SAB = function (wd, ht) {
	this.SetAsBox(wd, ht);
	return this
}
pH.sAB = function (args) {
	var pH = this, g = G(arguments), o
	
	
	o = O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
					N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
					{rt: g.f}
	o.w = (o.w || 100) / 60
	o.h = (o.h || 100) / 60
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.v = V(o.x, o.y).d()
	o.rt = M.tR(o.rt || 0)
	return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
			pH.SAB(o.w, o.h)

	
}
pH.sAB1 = function (wd, ht, xy, ang, ang2) {

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
	var h = this,
			g = G(arguments),
			wd = (g[0] || 100) / 60,
			ht = (g[1] || wd) / 60,
			xy = g[2],
			ang = g[3],
			ang2 = g[4]
	toR = Math.toRadians
	h.box = h.SetAsBox
	h.oBox = h.SetAsOrientedBox
	if (U(xy)) {
		h.box(wd, ht)
	}
	else if (N(xy)) {
		h.oBox(wd, ht, V(xy, ang).div(), toR(ang2 || 0))
	}
	else {
		h.oBox(wd, ht, xy.div(), toR(ang || 0))
	}
	return this
}
pH.box = function () {var pH = this, g = G(arguments)
	return pH.sAB.apply(pH, toArgs(g))
	function toArgs(g) {
		return isArgs(g) ? g.f : g
		function isArgs(g) {
			return g.A || _.isArguments(g.f)
		}
	}
	function alt() {
		pH.box = function () { // tx uses!
			var pH = this, g = G(arguments),
					o = G.boxBox(g)
			pH._box = function () {
				var pH = this
				pH.SetAsOrientedBox.apply(this, arguments)
				return pH
			}
			return pH._box(
					o.w / 60,
					o.h / 60,
					V(o.x, o.y, '-'),
					M.tR(o.rt)
			)
		}
	}
}
ASBOX=function(){
	$box()
	
}

function loop(){
w.CF = function () {
	this.ClearForces();
	return this
}
w.N = function (time, a, b) {
	//= w.St = w.go = w.step = w.draw 
	w = this, g = G(arguments)
	w.CF()
	//if (N(num)) {this.N(num)}
	w.Step(time, N(a, 8), N(b, 3))
	if (!g.n) {
		w.DDD()
	}//	if (g.p) {w.DDD()}
	return w
}
w.ev = function (a, b, c) {
	var w = this
	c = N(c, b)
	_.ev(a, function () {
		w.Step(a, b, c)
		w.DDD();
		w.CF()
	})
}
$box = function (fn) {
	//$ctxW = $canW = $W = 
	if (F(fn)) {
		return function () {
			ctx = $.cI().C('z')[0].getContext("2d")
			w = $_W(0, 10).bug()
			w.ev(1 / 60, 10, 10)
			fn()
		}
	}
	ctx = $.cI().C('z')[0].getContext("2d")
	w = $_W(0, 10).bug()
	w.ev(1 / 60, 10, 10)
	return w
}
}
function _pre() {
	$_W = function (x, y) {
		return new bx.W(V(x, y), true)
	}
	_$arr = function () {
		var fD = $fD($pH())
		return fD.SAA.apply(fD, arguments)
	}
	b2d.tB = b2d.toBody = function (b) {
		return b2d.iB(b) ? b :
				b2d.iF(b) ? b.B() :
						null
		b2d.toBodyAlt = function (fixtOrBody) {
			if (b2d.isBody(fixtOrBody)) {
				return fixtOrBody
			}
			if (b2d.isFixt(fixtOrBody)) {
				return fixtOrBody.body()
			}
			return false
		}
	}
}
$bD = $sB = function (x, y) {
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
function alt(){
	$sB = function (x, y) {
		return $bD(x, y).stat()
	}
}
}
$dB = function (x, y) {
	return $bD(x, y).T(2) //.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$fD = function () {
	var g = G(arguments)
	var fD = new b2d.FD
	if (g.n) {
		fD.isSensor = true
	}
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
$_cH = function (r) {
	return new b2d.CH(r)
}
$cH = function (r) {
	r = N(r, 50)
	return $_cH(r / 30)
	function alt() {
		$cH = function () {
			var g = G(arguments)
			var r = N(g.f, 50)
			var cH = $_cH(rad / 30)
			if (g.s) {
				cH.lP(g.s, g.t)
			}
			return cH
			function alt() {
				_$cH = b2d.cH = b2d.circH = b2d.circShape = b2d.circleShape = b2d.cSh = function (rad, x, y) {
					rad = N(rad) ? rad : 25
					return new b2d.CH(rad / 30).xy(x, y)
					function alt() {
						b2d.cirOld = function () {
							var g = G(arguments)
							var o = G.boxCir(g)
							var cH = $cH(o.r, o.x, o.y)
							var fD = $fD(cH, g.o)
							fD.den(o.d)
							return fD
						}
						b2d.circ = function (rad, x, y, den) {
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
					}
				}
				$cH = function (r, x, y) {
					r = N(r) ? r : 50
					var h = __$cH(r)
					if (N(x) && N(y)) {
						h.XY(x, y)
					}
					return h
				}
			}
			
			//= b2d.cH
		}
	}
}
$pH = function (W, H, x, y, a) {
//= b2d.pH
//if you want to understand oriented boxes, understand this:
	_$pH = function () {
		var g = G(arguments)
		var p = new b2d.PS()
		p.sAB.apply(p, arguments)
		return p
	}
	//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
	//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments)
	var pH = new b2d.PH()
	if (g.N_) {
		pH.box(g.f, g.s, g.t, g.fo, g.fi)
	}
	else if (g.OO_) {
		$a(pH, 'arr', g)
	}
	return pH
	function alt() {
		b2d.polyH = function () {//b2d.pSh=//polygonShape // this is all you need for all cases (thanks to pH.set)
			var poly = new b2d.PolygonShape()
			poly.set.apply(poly, arguments)
			return poly
		}
		$pH = b2d.H = b2d.shape = function (a, b) {
			if (U(b)) {
				return b2d.circH(a)
			}
			return b2d.polyH.apply(b2d, arguments)
		}
		$pH = function (wd, ht, xy, ang, ang2) {
			var pol = new b2d.PH()
			var g = G(arguments)
			var wd = (g[0] || 100) / 60
			var ht = (g[1] || wd) / 60
			var xy = g[2]
			var ang = g[3]
			var ang2 = g[4]
			if (U(xy)) {
				pol.SetAsBox(wd, ht)
			}
			else if (N(xy)) {
				pol.SetAsOrientedBox(wd, ht, V(xy / 30, ang / 30), M.tR(ang2 || 0))
			}
			return pol
		}
	}
}
$rH = function (a, b, c, d, e) {//= $bH
	return $pH().box(a, b, c, d, e)
}
$aH = function () {
	b2d.AH = b2d.AShape = function (pam, pam2) {//dep .. use polyH
		var args = (pam2) ? arguments : pam
		var arr = _.map(args, function (vert) {
					return V(vert).div()
				}),
				shape = b2d.polyH()
		shape.sAA(arr)
		return shape
	}
	var g = G(arguments)
	var aH = $pH()
	aH.arr.apply(aH, g)
	return aH
}
$cF = function () {//$cir = $cFD = b2d._cir = b2d.cFD =
	var g = G(arguments)//r,x,y
	return $fD($cH(g.f), g.s, g.t)
	function alt() {
		$cF = function (rad, x, y) {
			var g = G(arguments), fixt
			rad = g[0];
			x = g[1];
			y = g[2];
			rad = rad || M.r() + .1
			x = N(x) ? x : 0
			y = N(y) ? y : x
			var circle = $cH(rad)
			circle.SetLocalPosition(V(x, y, '-'))
			fixt = $fD(circle)
			if (g.n) {
				fixt.isSensor = true
			}
			return fixt
		}
	}
}
$pF = function (wd, ht, x, y, rt) {//$rec = $pFD =
	b2d.pol = function () {
		return b2d.fD($a(b2d.pH, arguments))
				.d(1).fr(.2).r(.2)
	}
	b2d.poly = function () {//makes a fixture using b2d.polyH
		var g = G(arguments),
		//SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
		//but can not pass den? who cares!
				polyH = b2d.polyH.apply(null, g),
				fixt = b2d.fixt(polyH).den(1).fric(.2).rest(.2)
		if (g.n) {
			fixt.isSensor = true
		}
		return fixt
	}
	var rec = $pH(wd, ht, x, y, rt)
	var fD = $fD(rec)
	return fD
}
$pF_ = function (kind) {//necessary?
	var pF = $pF.apply(null, _.re(arguments))
	pF.sensor(true).K(kind)
	return pF
	// = $polySens
}
$rF = function (wd, ht, xy, ang, ang2) {
	b2d.rec = function () {
		var g = G(arguments), r, fD, o, v, p = b2d.pH()
		if (g.OO_) {
			p.arr(g)
		}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
		else {
			o = g.O ? g.f :
			{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
			p.box(o)
		}
		fD = b2d.fD(p).d(N(o.d, .5))
		if (g.n) {
			fD.isSensor = true
		}
		return fD
		/*
		 //will set cols unless you pass in 0
		 if(o.c==0){o.c=null}
		 if(o.c==00){o.c=null;o.C=null}
		 if(o.c=='*'){o.c=$r()}
		 if(o.c=='**'){o.c=$r();o.C=$r()}
		 o.c =o.c||'z'
		 o.C =o.C||'w'
		 o.l = _.tN(o.l,4)
		 o.c1 = o.c1||'z'
		 o.c2 = o.c2||'w'
		 o.s1= _.tN(o.s1)
		 o.s2= _.tN(o.s2,1)
		 //
		 o.x1 = _.tN(o.x1)
		 o.y1 = _.tN(o.y1)
		 o.x2 =_.tN(o.x2);
		 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
		 o.r1=_.tN(o.r1)
		 o.r2=_.tN(o.r2,200)
		 // o.i image
		 //o.k kind
		 // o.p  layer position
		
		
		 //o.bm//o.bM
		 //o.g gradient
		
		 //o.m mass
		 //o.t type
		 // o.v = o.v || [] //verts
		 //o.X
		 //o.z clr
		 */
		function alt() {
			b2d.rec = function (wd, ht, x, y, rot, den) {//make a rec (or orientedRec) fixture
				var g = G(arguments), rec, fixt
				wd = N(g[0]) ? g[0] : 50
				ht = N(g[1]) ? g[1] : 50
				x = N(g[2]) ? g[2] : 0
				y = N(g[3]) ? g[3] : 0
				rot = N(g[4]) ? g[4] : 0
				den = N(g[5]) ? g[5] : 1
				rec = b2d.polyH(wd, ht, x, y, rot),
						fixt = b2d.fixt(rec).den(den)
				if (g.n) {
					fixt.isSensor = true
				}
				return fixt
			}
		}
	}
	var g = G(arguments), fixt
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	wd = wd || 100
	ht = N(ht) ? ht : wd
	fixt = $fD(
			__polyShape = $pH(wd, ht, xy, ang, ang2)
	)
	fixt.density = 1
	fixt.friction = .2
	fixt.restitution = .2
	if (g.n) {
		fixt.isSensor = true
	}
	return __fixt = fixt
}
$aF = function () {
	return $fD(b2d.AH.apply(
			null, arguments)).den(.1)
	//= $Arr = b2d.A = b2d.Arr
}