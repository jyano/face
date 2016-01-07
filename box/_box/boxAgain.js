$L('bodDef', 'short', 'types', 'act', 'bull', 'massD', 'posRot', 'fixts', 'world', 'velo', 'damp', 'bShorts', 'worldRel', 'bFx', 'bFuc')
b2d.tB = b2d.toBody = function (f) {
	return b2d.iB(f) ? f : b2d.iF(f) ? f.B() : 0
}
b2d.iB = function (b) {
	return O(b) && b.constructor.name == 'b2Body'
}
b.aw = b.awake = function (aw) {
	return (U(aw)) ? this.IAw() : this.SAw(aw ? false : true)
}
b.ty = function (ty) {
	return U(ty) ? this.GT() : this.ST(ty)
} // b.type = b.T = 
b.iD = b.isDyn = function () {
	return this.GT() == b2d.B.b2_dynamicBody
}
b.iK = b.isKin = function () {
	return this.GT() == b2d.B.b2_kinematicBody
}
b.iS = b.isStat = function () {
	return this.GT() == b2d.B.b2_staticBody
}
b.tS = b.stat = function () {
	return this.ty(0)
}
b.tK = b.kin = function () {
	return this.ty(1)
}
b.tD = b.dyn = function () {
	return this.ty(2)
}
b.XY = function (x, y) {
	return U(x) ? this.GP().m() : this.SP(V00(x, y).d())
}
b.X = function () {
	var b = this, g = G(arguments)
	var ps = b.XY()
	return g.u ? ps.x : b.XY($.update(ps.x, g.f, g), ps.y)
}
b.Y = function () {
	var b = this, g = G(arguments)
	return g.u ? b.XY().y : b.XY(b.XY().x, $.update(b.XY().y, g.f, g))
}
b.rt = b.rot = function (an) {
	var b = this, g = G(arguments)
	//= p.rT=p.rt=p.rotation=p.angle=p.ang
	var curAng = M.tD(b.GA())
	return g.u ? curAng : b.SA(M.tR(
			g.p ? curAng + g.f :
					g.n ? curAng - g.f :
							g.m ? curAng * g.f :
									g.d ? curAng / g.f :
											g.f
	))
}
b.tf = function (tf) {
	return U(tf) ? this.GTf() : this.STf(tf)
}
b.fR = function (fR) {
	return U(fR) ? this.IFR() : this.SFR(fR ? true : false)
}
b.fR1 = b.r0 = b.nR = b.nRt = function () {
	return this.fR(1)
}
b.fR0 = b.r1 = function () {
	return this.fR(0)
}
b.b1 = b.mBu = function () {
	var b = this
	b.SetBullet(true);
	return b
}
b.b0 = function () {
	this.SetBullet(false);
	return this
}
b.aV = function (aV) {
	return U(aV) ? this.GAV() : this.SAV(aV)
}
b.lV = function (lV, y) {
	return U(lV) ? this.GLV() : this.SLV(N(lV) ? V00(lV, y) : lV)
}
b.aD = function (aD) {
	return U(aD) ? this.GAD() : this.SAD(aD)
}
b.lD = function (lD) {
	return U(lD) ? this.GLD() : this.SLD(lD)
}
b.mass = function (m) {
	if (U(m)) {
		return (this.GM() * 900) / 100
	}
}
b.rsM = b.rMD = function () {
	return this.RMD();
}
b.nF = b.n = b.nFx = b.num = b.count = function () {
	return this.m_fixtureCount
}
b._wC = b.wC = b.wCent = b.worldCenter = b.gWC = function () {
	return this.GWC()
}
b.wCen = b.cen = b.realWC = b.cent = function () {
	return this.GWC().m()
}	// return V(this.GWC().x, this.GWC().y).m()
b.wP = b.wPt = b.gWP = b.wPoint = function (x, y) {
	var pt = this.GWP(V(x, y).d())
	return V(pt.x, pt.y).m()
}
b.I = b.aI = function (i, pt, pt2) {

//forces:
//apply impulse. pass impulse as two nums, or obj 
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g.s) ? {i: V(g.f, g.s), pt: g.t} :
	{i: g.f, pt: g.s}
	return b.AI(o.i || b.vec().d(40), o.pt || b.GWC())
}
b.F = function (v, c, c2) {
	var b = this
	if (N(c)) {
		return b.F(V(v, c), c2)
	}
	if (U(c)) {
		c = b.cen()
	}
	return b.AF(v, c)
}
b.AT = function () {
	this.ApplyTorque.apply(this, arguments);
	return this
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.GN = b.N = b.next = b.gN = function () {
	return this.GetNext()
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
}
b.Y = function (y) {
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
}
b.re = b.r = b.bo = b.rest = function (r) {
	var b = this
	if (U(r)) {
		return b.f().GetRestitution()
	}
	b.fs(function (f) {
		f.SetRestitution(r)
	})
	return b
}
b.lD = b.linDamp = function (damp) {
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
b.aD = b.angDamp = function () {
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
b.iD = function () {
	return this.GetType() == 2
}
b.iK = function () {
	return this.GetType() == 1
}
b.iS = function () {
	return this.GetType() == 0
}
b.H = function () {
	return this.f().H()
}
b.dyn = function (resumeVel) {
	var b = this
	b.type(2)
	if (resumeVel == b && O(b._linVel)) {
		b.lV(b._linVel)
	}
	b._linVel = null
	return b
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
}
b.kin = function () {
	return this.type(1)
}
b.W = function () {
	return this.GetWorld()
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
}
b.F = function () {
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
////
b.fs = b.e = function (fn) {
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
}
b.wC = function () {
	var b = this,
			w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
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
b.fixedRot = b.sFR = b.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fR = b.fixRot = function () {
	return this.fixedRot(true)
}
b.FR = function () {
	return this.fixedRot(false)
}
b.sen = function (s) {
	var b = this
	b.fs(function (f) {
		f.sen(s)
	})
	return b
}
b.DFR = b.DFB = function (d, f, r) {
	return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
	var b = this
	b.den(d)
	if (N(r)) {
		this.rest(r)
	}
	if (N(f)) {
		b.fric(f)
	}
	return b
}
b.aV = b.angVel = function (vel) {
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
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
b.vX = function (x) {
	var b = this, g = G(arguments),
			v = b.lV()
	if (g.u) {
		return v.x
	}
	b.lV(x, v.y)
	return b
}
b.vY = function (y) {
	var b = this
	if (U(y)) {
		return b.lV().y
	}
	return b.lV(b.lV().x, y)
}
b.damp = function (l, a) {
	l = N(l) ? l : 1000
	a = N(a) ? a : l
	this.lD(l).aD(a)
	return this
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.lC = function () {
	var b = this, w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetLocalCenter().m()
}
b.rmF = function (f) {
	if (f) {
		this.DestroyFixture(f)
	}
	else {
		this.fs(function (f) {
			this.rmF(f)
		})
	}
	return this
} //= b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear
b.hit = b.h = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
}
b.$ = function (fn) {
	var b = this, w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
b.$$ = function (fn) {
	var b = this, w = b.W()
	w.$$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
b.CF = b.cF = function (fD) {
	return this.CreateFixture(fD)
}
b.SP = b.sP = function (x, y) {
	var v = V(x, y)
	this.SetPosition(V(v.x / 30, v.y / 30))
	return this
}
w.S = function () {
	var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D
	if (S(_.l(g))) {
		k = g.pop()
	}
	//here, we just have two options..
	// we can pass in x and y as numbers..
	// or as an object
	// the rest (non-position-related) args form an array of fixtures
	o = g.N_ ? {
		b: V(g.f, g.s),
		f: _.r(g, 2)
	} : {
		b: V(g.f),
		f: _.r(g)
	}
	o.b = b2d.S(o.b)
	if (k) {
		o.k = k
	}
	b = w.cB(o.b)
	if (g.n) {
		o.f.push('-')
	}
	b.f.apply(b, o.f)
	if (o.k) {
		b.K(o.k)
	}
	return b
}
function WSAlpha() {
	//array of multiple fixtures
	if (g.A) {//alert('see w.D'); $l('mult')
		_.e(o.f, function (f) {
			if (g.n) {
				b.f(f, '-')
			}
			else {
				b.f(f)
			}
		})
		if (o.k) {
			b.K(o.k)
		}
		return b
	}
}
//ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
//FIXTURE CREATION
fD.DBF = function (d, bo, fr) {
	this.d(N(d, 1))
	this.bo(N(bo, .9))
	this.fr(N(fr, .5))
	return this
}
Array.prototype.K = function (k) {
	if (U(k)) {
		return this.klass
	}
	this.klass = k
	return this
}
Array.prototype.sensor = function (kind) {
	this.isSensor = kind || true
	return this
}
$sen = $snF = $sF = function (h) {
	return $fD(h, '-')
}
b2d.iF = b2d.iFx = function (f) {
	return f ? f.constructor.name == "b2Fixture" : false
}
$L('fShorts', 'fDef')
f.GB = f.GBd = function () {
	return this.GetBody()
}
f.GAB = function () {
	return this.GetAABB()
}
f.de = f.d = f.den = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.re = f.r = f.rest = function (re) {
	var f = this
	if (U(re)) {
		return f.GetRestitution()
	}
	f.SetRestitution(re);
	return f
}
f.iSr = f.iS = function (isSensor) {
	return this.m_isSensor
}
f.sr = f.sn = f.sen = function (isSensor) {
	if (U(isSensor)) {
		return this.m_isSensor
	}
	this.m_isSensor = isSensor ? true : false
	return this
}
f.sr1 = f.s1 = f.mS = f.mSn = function () {
	this.sr(true)
	return this
}
f.sr0 = f.s0 = function () {
	this.SetSensor(false)
	return this
}
f.rm = f.die = function () {
	this.B().DF(this)
}
f.N = function () {
	return this.GetNext()
}
DSC = function () {
	W0()
	tri = $eM.tri()
	tri.bS('me')
	tri.constF(5, -2).$(function () {
		this.I(0, -50)
	})
	b = w.A($dB(100, 500), $pF(30, 30)).rt(2).nRt()
	b1 = w.A($dB(200, 500), $pF(30, 30)).rt(2).nRt()
	b2 = w.A($dB(300, 500), $pF(30, 30)).rt(1).nRt()
	i = function () {
		b.I(10, -30)
	}
	v = function () {
		b1.lV(10, -60)
	}
	f = function () {
		_.ev(.1, function () {
			b2.ApplyForce(V(0, -3), b2.worldCenter())
		})
	}
	_.in(1, function () {
		i()
		v()
		f()
	})
}
f.B = f.body = function () {
	return this.GBd()
}
f.ty = f.getType = f.gT = function (someType) {
	var f = this, b = f.B()
	var ty = b.GT()
	return D(someType) ? ( ty == someType) : ty
}
f.iTy = function (typ) {
	return this.ty() == typ
}
f.cen = function () {
	var aBounds = this.GAB(),
			aLower = aBounds.lowerBound
	var alx = aLower.x * 30, aly = aLower.y * 30,
			aUpper = aBounds.upperBound,
			aux = aUpper.x * 30, auy = aUpper.y * 30,
			center = M.lineCenter(alx, aly, aux, auy)
	return __center = center
}