function proxy() {
	b.de = function (den) {
		if (U(den)) {
			return this.list().GetDensity()
		}
		this.each(function (f) {
			f.SetDensity(den)
		})
		this.ResetMassData()
		return this
	}
	b.fr = function (fric) {
		if (U(fric)) {
			return this.list().GetFriction()
		}
		this.each(function (f) {
			f.SetFriction(fric)
		})
		return this
	}
	b.re = function (rest) {
		if (U(rest)) {
			return this.list().GetRestitution()
		}
		this.each(function (f) {
			f.SetRestitution(rest)
		})
		return this
	}
}
function xyr() {
	b.rt = function (angle) {
		var g = G(arguments),
				ang = g[0],
				newAng,
				currAng = Math.toDegrees(this.GetAngle())
		if (U(ang)) {
			return currAng
		}
		if (g.p) {
			newAng = currAng + ang
		}
		else if (g.n) {
			newAng = currAng - ang
		}
		else if (g.m) {
			newAng = currAng * ang
		}
		else if (g.d) {
			newAng = currAng / ang
		}
		else {
			newAng = ang
		}
		this.SetAngle(Math.toRadians(newAng))
		return this
	}
	b.fixedRot = b.sFR = b.fR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
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
		}
		y = N(y) ? y : x
		newPos = V(x / 30, y / 30)
		this.SetPosition(newPos)
		return this
	}
	b.X = function (x) {
		var g = G(arguments), pos = this.XY()
		if (U(x = g[0])) {
			return pos.x
		}
		this.XY($.update(pos.x, x, g), pos.y)
		return this
	}
	b.Y = function (y) {
		var g = G(arguments), pos = this.XY()
		if (U(y = g[0])) {
			return pos.y
		}
		this.XY(pos.x, $.update(pos.y, y, g))
		return this
	}
}
function force() {
	b.I = function self(impulse, point, point2) {
		if (U(impulse)) {
			impulse = this.worldVec().div(40)
		}
		if (N(point)) {
			impulse = V(impulse, point)
			point = point2
		}
		if (U(point)) {
			point = this.GWC()
		}
		this.ApplyImpulse(impulse, point)
		return this
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
}
w.G = function (x, y) {
	var v, currGrav = this.GetGravity()
	if (U(x)) {
		return currGrav
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-currGrav.x, -currGrav.y)
	}
	w.SetGravity(v)
	return this
}
b2d.toBody = function (fixtOrBody) {
	if (b2d.isBody(fixtOrBody)) {
		return fixtOrBody
	}
	if (b2d.isFixt(fixtOrBody)) {
		return fixtOrBody.body()
	}
	return false
}
b2d.bodyX = b2d.bodyDefX = function (x, y) {
	var bodyDef = new b2BodyDef()
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	bodyDef.xy(x, y)
	return bodyDef
}
b.wC = function () {
	return this.GWC().m()
}
b.coll = b.collWithKind = function (func, func2) {
	var that = this
	if (S(func) && F(func2)) {
		this.W().begin(function (cx) {
			if (cx.a() == that && cx.b().is(func)) {
				func2(cx.b())
			}
			if (cx.b() == that && cx.a().is(func)) {
				func2(cx.a())
			}
		})
	}
	else {
		w.begin(function (cx) {
			if (cx.a() == that) {
				func(cx.a())
			}
			if (cx.b() == that) {
				func(cx.b())
			}
		})
	}
	return this
}
////////////////////////////////////////////////////////////////////
function force() {
	w.gv = w.G = function (x, y) {
		var w = this
		w.GG = function () {
			return this.GetGravity()
		}
		w.SG = function (gv) {
			this.SetGravity(gv);
			return this
		}
		var gv = w.GG()
		if (U(x)) {
			return gv
		}
		var v
		if (N(x)) {
			v = N(y) ? V(x, y) : V(0, x)
		}
		if (x == 'flip') {
			v = V(-gv.x, -gv.y)
		}
		return w.SG(v)
		function alt() {
			w.G = function (x, y) {
				var w = this,
						v, currG = w.GetGravity()
				if (U(x)) {
					return currG
				}
				if (N(x)) {
					v = N(y) ? V(x, y) : V(0, x)
				}
				else if (x == 'flip') {
					v = V(-currG.x, -currG.y)
				}
				w.SetGravity(v)
				return w
				function alt() {
					w.G = function (x, y) {
						var v, currGrav = this.GetGravity()
						if (U(x)) {
							return currGrav
						}
						if (N(x)) {
							v = N(y) ? V(x, y) : V(0, x)
						}
						if (x == 'flip') {
							v = V(-currGrav.x, -currGrav.y)
						}
						w.SetGravity(v)
						return this
					}
				}
			}
		}
	}
	bD.lV = function (lV) {
		bD.SLV = function (lV) {
			this.linearVelocity = lV;
			return this
		}
		var bD = this
		return U(lV) ? this.linearVelocity : this.SLV(lV)
		function alt() {
			bD.lV = function (vel) {
				if (U(vel)) {
					return this.linearVelocity
				}
				this.linearVelocity = vel;
				return this
			}
		}
	}
	bD.lD = function (lD) {
		var bD = this
		bD.SLD = function (lD) {
			this.linearDamping = lD;
			return this
		}
		return U(lD) ? this.linearDamping : this.SLD(lD)
		function alt() {
			bD.lD = function (dm) {
				var bD = this
				if (U(dm)) {
					return bD.linearDamping
				}
				bD.linearDamping = dm
				return bD
			}
		}
	}
	bD.aD = function (aD) {
		var bD = this
		bD.SAD = function (aD) {
			this.angularDamping = aD;
			return this
		}
		return U(aD) ? this.angularDamping : this.SAD(aD)
		function alt() {
			bD.aD = function (damp) {
				if (U(damp)) {
					return this.angularDamping
				}
				this.angularDamping = damp;
				return this
			}
		}
	}
	bD.aV = function (vel) {
		var bD = this
		bD.SAV = function (aV) {
			this.angularVelocity = aV;
			return this
		}
		return U(vel) ? this.angularVelocity : this.SAV(vel)
		function alt() {
			bD.aV = function (vel) {
				if (U(a)) {
					return this.angularVelocity
				}
				this.angularVelocity = vel
				return this
			}
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
	f.lV = function () {
		var f = this, b = f.B(), g = G(arguments)
		b.lV.apply(b, g)
		return f
	}
	bD.inertia = function (ine) {
		if (U(ine)) {
			return this.insertiaScale
		}
		this.insertiaScale = ine
		return this
	}
}
function bug() {
	w.bug = function () {
		var w = this
		w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
				.SF(b2DebugDraw.e_shapeBit))
		return w
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
	$_DD = function () {
		return new b2d.DD
	}
	bx.DD = b2DebugDraw = bx.D.b2DebugDraw
	dD.ctx = function (ctx) {
		var dD = this  //it is looking for  a context?
		if (U(ctx)) {
			return dD.GetSprite()
		}
		dD.SetSprite(ctx)
		return dD
		//dD.cx = dD.spr = dD.i = dD.sprite = 
	}
	dD.SDS = function (sc) {
		this.SetDrawScale(sc)
		return this
	}
	dD.sc = function (sc) {
		var dD = this
		if (U(sc)) {
			return dD.GetDrawScale()
		}
		dD.SDS(sc)
		return dD
		// = dD.dS = dD.scale = dD.drawScale
	}
	dD.al = dD.alpha = dD.fA = function (al) {
		var dD = this
		if (U(al)) {
			return this.GetAlpha()
		}
		this.SetAlpha(al)
		return this
//Get/SetAlpha(al:N)    used for lines
	}
	dD.fA = dD.fAl = function (a) {
		var dD = this
		if (U(a)) {
			return dD.GetFillAlpha()
		}
		dD.SetFillAlpha(a)
		return dD
		//= dD.alpha = dD.fillAlpha
	}
	dD.lT = function (lt) {
		var dD = this
		if (U(lt)) {
			return dD.GetLineThickness()
		}
		dD.SetLineThickness(lt);
		return dD
		// = dD.line
	}
	dD.fl = function (fl) {
		var dD = this
		var DD = b2DebugDraw
		if (U(fl)) {
			return dD.GetFlags()
		}
		if (flags == '*') {
			flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
		}
		dD.SetFlags(flags);
		return dD
		//dD.flags = dD.F =
	}
	dD.SF = function () {
		this.SetFlags.apply(this, arguments)
		return this
	}
	w.DDD = function () {
		this.DrawDebugData();
		return this
	}
	w.setDbD = function (id) {
		id = id || 'cv'
		var dbD = $_DD().ctx($("#" + id)[0].getContext("2d")).SDS(20)
		dbD.SetFillAlpha(0.5)
		dbD.SetLineThickness(1)
		dbD.SetFlags(b2DebugDraw.e_shapeBit)
		return this.SDD(dbD)
	}
	$dD = function (sp, sc) {
// = b2d.debugDraw
		//=DebugDraw=dbD
		var dD = new b2d.DD()
		if (sp) {
			dD.sp(sp);
		}
		if (N(sc)) {
			dD.sc(sc)
		}
		return dD
	}
	dD.cv = function (cv) {
		cv = cv || $.c()
		return this.ctx($(cv)[0].getContext("2d"))
	}
}
function kill() {
	w.DB = w.DBo = w.DBd = function (b) {
		this.DestroyBody(b);
		return this
	}
	w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
		var w = this
		if (U(b)) {
			w.e(function (b) {
				w.rmB(b)
			})
		}
		else {
			w.DestroyBody(b)
		}
		return w
	}
	b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
		var b = this
		return b.of(k) ? b.K('ds destroy') : b
	}
	b.ds = function () {
		var b = this
		b.W().DB(b)
		return b
	} //= b.destroy
}
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
//alpha = function () {
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
}
 