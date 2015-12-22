bD.XY = bD.p = bD.ps = bD.xy = function (x, y) {
	var bD = this, g = G(arguments), p
	if (g.u) {
		return bD.position.m()
	}
	p = V(g.f, g.s, '-')
	bD.position.Set(p.x, p.y)
	return bD
}
bD.X = function (x) {
	var bD = this, p = bD.XY()
	if (U(x)) {
		return p.x
	}
	return bD.XY(x, p.y)
}
bD.Y = function (y) {
	var bD = this, p = bD.XY()
	if (U(y)) {
		return p.y
	}
	return bD.XY(p.x, y)
}
bD.XY = function (x, y) {
	return U(x) ? this.Ps().m() : this.Ps(V00(x, y).d())
}
bD.X = function (x) {
	return U(x) ? this.XY().x : this.XY(x, this.XY().y)
}
bD.Y = function (y) {
	return U(y) ? this.XY().y : this.XY(this.XY().x, y)
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
bD.rt = bD.rot = bD.ang = function (ang) {
	//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
	if (U(ang)) {
		return d.angle
	}
	this.angle = ang;
	return this
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
	return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
}
function isBullet() {
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
}
function fixedRot() {
	bD.fixedRot = bD.fR = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
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
}
function xyr(){
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
	f.B = f.body = function () {
		return this.GetBody()
	}
	f.W = function () {
		return this.B().W()
	}
	f.rt = f.rot = function (rot, g) {
		return this.B().rot(rot, g)
	}
	function fixRot() {
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
	}
}
function isBul() {
	b.decor = function (g) {
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
	$bulBD = function (x, y) {
		var bD = $dB(x, y)
		bD.bullet = true
		bD
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
 function sensor(){
	 bD.sl = bD.aSl = function (aS) {
		 return this.ASl(aS ? true : false)
	 }
	 bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
		 return this.sl(1)
	 }
	 bD.s0 = function () {
		 return this.sl(0)
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
	 fD.sen = fD.sensor = fD.iS = function (isSensor) {
		 if (U(isSensor)) {
			 return this.isSensor
		 }
		 this.isSensor = isSensor ? true : false
		 return this
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
 }
 function sleep(){
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
 function type(){
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
function dfr() {
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
	DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
		//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
		//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
		W()
		r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
		r2 = w.BRICK(300, 300, 400, 10, 'o')
		r3 = w.BRICK(300, 300, 400, 10, 'w')
		r4 = w.BRICK(300, 300, 400, 10, 'w')
		r5 = w.BRICK(300, 300, 400, 10, 'b')
		flipDen = function (r) {
			r.de(r.de() == 0 ? 1 : 0)
		}
		flipStage = function () {
			w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
		}
		flipStage()
		_.ev(5, function () {
			flipDen(r);
			flipDen(r2);
			flipDen(r3);
			flipStage()
		})
	}
//proxy
	b.sr1 = b.s1 = b.mS = function () {
		return this.sSr(1)
	}
	b.sSr = function (sr) {
		var b = this
		b.fs(function (f) {
			f.sr(sr)
		})
		return b
	}
	b.sr = b.sens = function (sr) {
		var b = this
		if (U(sr)) {
			return b.f().iSr()
		}
		b.sSr(sr)
		return b
	}
	b.de = b.den = function (de) {
		var b = this//$l('b.de boxBody.js')
		if (U(de)) {
			return b.f().de()
		}
		b.e(function (f) {
			f.SetDensity(de)
		})
		return this.RMD()
	}
	b.de1 = function () {
		return this.de(1)
	}
	b.fr = b.fric = function (fr) {
		var b = this
		return D(fr) ?
				b.fs(function (f) {
					f.SetFriction(fr)
				}) :
				b.list().GetFriction()
	}
	b.re = b.rest = function (re) {
		var b = this
		return D(re) ? b.fs(function (f) {
			f.re(re)
		}) :
				b.f() ? b.f().GetRestitution() : false
	}
}

