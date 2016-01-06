$L('type')
bD.Set = function () {
	
	var bD=this, ps = bD.position
	
	ps.Set.apply(ps, arguments)
	return bD
}

bD._X = function(x){
	this.position.x =x 
	return this
}
bD._Y = function (y) {
	this.position.y = y
	return this
}
bD.X = function (x) {
	return U(x) ? this.XY().x : this.XY(x, this.XY().y)
	bD.Xalt = function (x) {
		var bD = this, p = bD.XY()
		if (U(x)) {
			return p.x
		}
		return bD.XY(x, p.y)
	}
}

bD.Y = function (y) {
	return U(y) ? this.XY().y : this.XY(this.XY().x, y)
	bD.Yalt = function (y) {
		var bD = this, p = bD.XY()
		if (U(y)) {
			return p.y
		}
		return bD.XY(p.x, y)
	}
}
bD.Ps = function (ps) {
	var bD = this
	bD.GP = function () {
		return this.position
	}
	bD.SP = function (ps) {
		this.position = ps;
		return this
	}
	return U(ps) ? this.GP() : this.SP(ps)
}
bD.XY = function (x, y) {
	var bD = this
	//= bD.p = bD.ps = bD.xy
	return U(x) ? this.Ps().m() : 
	this.Ps(V(x, y).d())

} // will need to fix
bD.XYalt = function (x, y) {
	var bD = this, g = G(arguments), p
	if (g.u) {
		return bD.position.m()
	}
	p = V(g.f, g.s, '-')
	bD.position.Set(p.x, p.y)
	return bD
}
bD.Xalt = function (x) {
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
bD.Yalt = function (y) {
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
bD.XYalt = bD.p = bD.ps = bD.xy = function (x, y) {
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
bD.A = bD.ang = bD.Ang = function (an) {
	var bD = this
	bD.GA = function () {
		return this.angle
	}
	bD.SA = function (an) {
		this.angle = an;
		return this
	}
	return U(an) ? this.GA() : this.SA(an)
}
bD.rt = bD.rot = function (rt) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
}
bD.GFR = function () {
	return this.fixedRotation
}
bD.SFR = function (fR) {
	this.fixedRotation = fR
	return this
}
bD.fR = bD.FR = bD.fixedRot = function (fR) {
	return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
	bD.fixedRotAlt = bD.fRalt = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
	}
}
bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(1)
}
bD.fR0 = bD.r1 = function (rt) {
	if (N(rt)) {
		this.rt(rt)
	}
	return this.fR(0)
}
bD.bul = bD.bull = bD.fR = function (iBu) {
	var bD = this
	if (U(iBu)) {
		return bD.bullet
	}
	bD.bullet = iBu;
	return bD
}
bD.SB = function () {
	this.bullet = isBul;
	return this
}
bD.bul = bD.bull = function (isBul) {
	return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
}
bD.b1 = bD.mB = function () {
	return this.bul(1)
}
bD.b0 = function () {
	return this.bul(0)
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
bD.sl = bD.aSl = function (aS) {
	return this.ASl(aS ? true : false)
}
bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
	return this.sl(1)
}
bD.s0 = function () {
	return this.sl(0)
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
bD.inertia = function (ine) {
	if (U(ine)) {
		return this.insertiaScale
	}
	this.insertiaScale = ine
	return this
}
bD.SAc = function (ac) {
	this.active = ac;
	return this
}
bD.ac = function (ac) {
	return this.SAc(ac ? true : false)
}
bD.a1 = bD.mA = function () {
	return this.ac(1)
}
bD.a0 = function () {
	return this.ac(0)
}
bD.ASl = function (aS) {
	var bD = this;
	bD.allowSleep = aS;
	return bD
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
function type() {
	bD.STy = function (ty) {
		this.type = ty;
		return this
	}
	bD.ty = function (ty) {
		return U(ty) ? this.type : this.STy(ty)
	}
	bD.dyn = function () {
		return this.T(2)
	}
	bD.stat = function () {
		return this.T(0)
	}
	bD.kin = function () {
		return this.T(1)
	}
	bD.ty = bD.T = bD.typ = bD.kind = function (type) {
		if (U(type)) {
			return this.type
		}
		this.type = type
		return this
	}
	bD.stat = function () {
		return this.T(0)
	}
	bD.dyn = function () {
		return this.T(2)
	}
	bD.T = bD.typ = bD.kind = function (type) {
		if (U(type)) {
			return this.type
		}
		this.type = type
		return this
	}
}
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)

	var g=G(arguments)
	
	var bD = new b2d.BD()
	if(g.u){return bD}
	
	var v = V(x, y)
	bD.XY(N(v.x, 0), N(v.y, 0)
	
	)
//	x = N(x) ? x : 300
//	y = N(y) ? y : 300
	return bD
	// = $dBD=b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn
//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
	function alt() {
		$bD = function (x, y) {
			_$bD = function () {
				return new b2d.BD()
			}
			return U(x) ? _$bD() : _$bD().XY(x, y)
		}
	}
}
$dB = function (x, y) {

//return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
	return $bD(x, y).T(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
} 