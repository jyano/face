$L('destroy','isBull','type','fxdRot','sleep','velDamp')
 
w.D = function (x, y) {
	return this.cB($dB(x, y))
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.W = b.wor = b.world = function () {
	return this.GetWorld()
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
 
function destroy() {
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
function isBull() {
	b.decor = isBullet = function (g) {
		var b = this
		if (g.n) {
			b.mS()
		}
		else if (g.p) {
			b.mBu()
		}
		else if (g.m) {
			b.mS().mBu()
		}
		return b
	}
	b.SB = function (bu) {
		this.SetBullet(bu);
		return this
	}
	b.IB = function () {
		return this.IsBullet()
	}
}
function type() {
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
}
function fxdRot() {
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
	b.fixedRot = b.sFR = b.fR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
	b.SFR = function (fR) {
		this.SetFixedRotation(fR)
		return this
	}
	b.IFR = function () {
		return this.IsFixedRotation()
	}
}
function sleep() {
	b.SAw = function (sA) {
		this.SetAwake(sA);
		return this
	}//return  _.set(b, 'SetAwake', sA)
	b.IAw = function () {
		return this.IsAwake()
	}
	b.SSA = function (sA) {
		this.SetSleepingAllowed(sA);
		return this
	}
	b.ISA = function () {
		return this.IsSleepingAllowed()
	}
	b.SAc = function (ac) {
		this.SetActive(ac);
		return this
	}
	b.IAc = function () {
		return this.IsActive()
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
}
function velDamp() {
	b.lC = function () {
		var b = this, w = b.W(), g = G(arguments)
		//gives {x,y}, but of its CENTER-OF-MASS
		if (g.p) {
			return b.XY(w.hW, w.hH)
		}
		return b.GetLocalCenter().m()
	}
	b.lVL = b.linVelLoc = function (v, y) {
//lin vel from local point ... use case?
		v = V(v, y)
		return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
	}
	b.vX = function (x) {
		var b = this, g = G(arguments),
				v = b.lV()
		if (g.u) {
			return v.x
		}
		b.lV(x, v.y)
		return b
		function alt() {
			b.vX = function (x) {
				if (U(x)) {
					return this.lV().x
				}
				return this.lV(x, this.lV().y)
			}
		}
	}
	b.vY = function (y) {
		function alt() {
			b.vY = function (y) {
				if (U(y)) {
					return this.lV().y
				}
				return this.lV(this.lV().x, y)
			}
		}
		
		var b = this
		if (U(y)) {
			return b.lV().y
		}
		return b.lV(b.lV().x, y)
	}
	b.lVW = b.linVelWor = function (v, y) {//lin vel from world point
		v = V(v, y)
		return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
	}
	b.GD = b.GDf = function () {
		return this.GetDefinition()
	}
	b.GLD = function () {
		return this.GetLinearDamping()
	}
	b.GAD = function () {
		return this.GetAngularDamping()
	}
	b.GLV = function () {
		return this.GetLinearVelocity()
	}
	b.GAV = function () {
		return this.GetAngularVelocity()
	}
	b.SLD = function (lD) {
		this.SetLinearDamping(lD);
		return this
	}
	b.SAD = function (aD) {
		this.SetAngularDamping(aD);
		return this
	}
	b.SLV = function (lV) {
		this.SetLinearVelocity(lV);
		return this
	}
	b.SAV = function (aV) {
		this.SetAngularVelocity(aV)
		return this
	}
}
b.wC = function () {
	return this.GWC().m()
}
b.GLC = b.GLcC = function () {
	return this.GetLocalCenter()
}
b.GWC = function () {
	return this.GetWorldCenter()
} 
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
function _pre() {
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
	b.W = b.GW = function () {
		return this.GetWorld()
	}
	b.N = b.GN = function () {
		return this.GetNext()
	}
	b.GT = function () {
		return this.GetType()
	}
	b.ST = function (ty) {
		this.SetType(ty)
		return this
	}
	b.GP = function () {
		return this.GetPosition()
	}
	b.SP = function (ps) {
		this.SetPosition(ps);
		return this
	}
	b.STf = function (tf) {
		this.SetTransform(tf);
		return this
	}
	b.GTf = function (tf) {
		return this.GetTransform()
	}
	b.SA = function (ang) {
		this.SetAngle(ang);
		return this
	}
	b.GA = function () {
		return this.GetAngle()
	}
	b.SPAA = function () {
		this.SetPositionAndAngle.apply(this, arguments)
		return this
	}
} 

//b.CF( fD.cH(45) ) 

b.GM=function(){return this.GetMass()}
//
b.A = function (fD) {
	this.cF(fD);
	return this
}