def()
 function def(){
	 bD = bd = d = b2.Dynamics.b2BodyDef.prototype //SuperBodyDef= sBdD=function(a){return a|| b2.bodyDef() }
	 bd.XY = d.p = d.ps = d.xy = function (x, y) {
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
	 bd.X = function (x) {
		 var pos = this.XY()
		 if (U(x)) {
			 return pos.x
		 }
		 return this.XY(x, pos.y)
	 }
	 bd.Y = function (y) {
		 var pos = this.XY()
		 if (U(y)) {
			 return pos.y
		 }
		 return this.XY(pos.x, y)
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
	 }
	 bD.X = function (x) {
		 var pos = this.XY()
		 if (U(x)) {
			 return pos.x
		 }
		 return this.XY(x, pos.y)
	 }
	 bD.Y = function (y) {
		 var pos = this.XY()
		 if (U(y)) {
			 return pos.y
		 }
		 return this.XY(pos.x, y)
	 }
	 bd.rot = d.ang = function (ang) {
		 //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
		 if (U(ang)) {
			 return d.angle
		 }
		 this.angle = ang;
		 return this
	 }
	 bd.fixedRot = d.fR = function (isFixed) {
		 if (U(isFixed)) {
			 return this.fixedRotation
		 }
		 this.fixedRotation = isFixed;
		 return this
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
	 bD.rt = function (ang) {
		 if (U(ang)) {
			 return bD.angle
		 }
		 this.angle = ang;
		 return this
	 }
	 bD.fixedRot = bD.fR = function (isFixed) {
		 if (U(isFixed)) {
			 return this.fixedRotation
		 }
		 this.fixedRotation = isFixed;
		 return this
	 }
	 bD.fixedRot = bD.fR = function (isFixed) {
		 if (U(isFixed)) {
			 return this.fixedRotation
		 }
		 this.fixedRotation = isFixed;
		 return this
	 }
	 bD.lD = function (dm) {
		 var bD = this
		 if (U(dm)) {
			 return bD.linearDamping
		 }
		 bD.linearDamping = dm
		 return bD
	 }
	 bD.aD = function (damp) {
		 if (U(damp)) {
			 return this.angularDamping
		 }
		 this.angularDamping = damp;
		 return this
	 }
	 bd.lV = bd.linVel = function (vel) {
		 var v = this.linearVelocity
		 if (U(vel)) {
			 return v
		 }
		 this.linearVelocity = vel
		 return this
	 }
	 bd.aV = bd.angVel = function (vel) {
		 if (U(a)) {
			 return this.angularVelocity
		 }
		 this.angularVelocity = vel
		 return this
	 }
	 bd.lD = bd.linDamp = function (damp) {
		 if (U(damp)) {
			 return this.linearDamping
		 }
		 this.linearDamping = damp;
		 return this
	 }
	 bd.aD = bd.angDamp = function (damp) {
		 if (U(damp)) {
			 return this.angularDamping
		 }
		 this.angularDamping = damp;
		 return this
	 }
	 bD.lV = function (vel) {
		 if (U(vel)) {
			 return this.linearVelocity
		 }
		 this.linearVelocity = vel;
		 return this
	 }
	 bD.aV = function (vel) {
		 if (U(a)) {
			 return this.angularVelocity
		 }
		 this.angularVelocity = vel
		 return this
	 }
	 bD.lD = function (damp) {
		 if (U(damp)) {
			 return this.linearDamping
		 }
		 this.linearDamping = damp;
		 return this
	 }
	 bD.aD = function (damp) {
		 if (U(damp)) {
			 return this.angularDamping
		 }
		 this.angularDamping = damp;
		 return this
	 }
	 bD.lV = function (v) {
		 var bD = this
		 if (U(v)) {
			 return pD.linearVelocity
		 }
		 pD.linearVelocity = v
		 return pD
	 }
	 bD.aV = function (vel) {
		 if (U(a)) {
			 return this.angularVelocity
		 }
		 this.angularVelocity = vel
		 return this
	 }
	 bd.inertia = function (inertia) {
		 if (U(inertia)) {
			 return this.insertiaScale
		 }
		 this.insertiaScale = inertia;
		 return this
	 }
	 bD.inertia = function (inertia) {
		 if (U(inertia)) {
			 return this.insertiaScale
		 }
		 this.insertiaScale = inertia;
		 return this
	 }
	 bD.act = bD.setActive = function (isActive) {
		 this.active = isActive ? true : false
		 return this
	 }
	 bd.act = d.setActive = function (isActive) {
		 this.active = isActive ? true : false
		 return this
	 }
	 bd.sleepy = d.aS = function (canSleep) {
		 this.allowSleep = canSleep ? true : false
		 return this
	 }
	 bD.sleepy = bD.aS = function (canSleep) {
		 this.allowSleep = canSleep ? true : false
		 return this
	 }
	 bD.T = bD.kind = function (type) {
		 if (U(type)) {
			 return this.type
		 }
		 this.type = type
		 return this
	 }
	 bD.T = bD.typ = bD.kind = function (type) {
		 if (U(type)) {
			 return this.type
		 }
		 this.type = type
		 return this
	 }
	 bd.T = d.typ = bd.kind = function (type) {
		 if (U(type)) {
			 return this.type
		 }
		 this.type = type
		 return this
	 }
	 bd.dyn = function () {
		 return this.T(2)
	 }
	 bd.stat = function () {
		 return this.T(0)
	 }
	 bd.kin = function () {
		 return this.T(1)
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
//bodyDef.bullet = true; //before creating body, or
//body.SetBullet(true); //after creating body
	 bd.bul = d.bull = d.fR = function (isBul) {
		 if (U(isBul)) {
			 return this.bullet
		 }
		 this.bullet = isBul;
		 return this
	 }
	 bD.bul = bD.bull = bD.fR = function (iBu) {
		 var bD = this
		 if (U(iBu)) {
			 return bD.bullet
		 }
		 bD.bullet = iBu;
		 return bD
	 }
 }
b = b2.Dynamics.b2Body.prototype
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
b.rot = function (angle, ms) {
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
		b.SetAngle(Math.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
	}
	return b
}
b.fixedRot = p.sFR = p.fR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.fixRot = function () {
	return this.fixedRot(true)
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
b.lC = function () {
	var b = this, w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetLocalCenter().m()
}
b.web = function (shouldKill) {
	
	//when a web is created it gets web.connected=false
	//when it hits certain things and forms a joint, then connected->true
	//then it just dies
	//pressing DOWN should release the most recent of the connectedWebs
	//non connected Webs can be shot off!
	var p = this, w = p.wor(),
			y = p.Y() - 100,
			x = p.X(),
			piece,
			web
	p.webs = p.webs || []
	p.webs.push(web = Web(p, shouldKill))
	piece = web.addPiece(p, web.Piece(x, y))   //add first piece to player
	T(9, function (i) {
		piece = piece.add(web.Piece(x, y - i))
	})  //add rest to each other
	piece.add(
			web.ball = w.circ(x, y - 100, 10, 'd').K('webBall').den(1).rest(0).fric(100))
	return web
	function Web(p, shouldKill) {
		var web = {
			player: p,
			connected: false,
			pieces: [],
			addPiece: function (toWhat, newPiece) {
				w.tightDist(toWhat, newPiece)
				this.pieces.push(newPiece)
				return newPiece
			},
			Piece: function (x, y) {
				var web = this,
						piece = w.ropePiece(x, y).K('webPiece')
				piece.add = function (newPiece) {
					return web.addPiece(this, newPiece)
				}
				return piece
			},
			delPieces: function () {
				_.each(this.pieces, function (piece) {
					piece.kill()
				})
				this.pieces = []
			},
			die: function () {
				var that = this
				this.delPieces()
				this.player.webs = _.reject(this.player.webs, function (web) {
					return that === web
				})
			},
			attach: function (toWhat) {
				this.connected = true
				w.tightDist(toWhat, this.ball)
				return this
			}
		}
		if (shouldKill) {
			shouldKill = N(shouldKill) ? shouldKill : 1000
			setTimeout(function () {
				if (!web.connected) {
					web.die()
				}
			}, shouldKill)
		}
		return web
	}
}
b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.W = function () {
	return this.GetWorld()
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b.mid = function () {
	var b = this, w = b.wor()
	return b.XY(w.w / 2, w.h / 2)
}
b.W = function () {
	return this.GetWorld()
}
b.wor = b.W = b.world = function () {
	return this.GetWorld()
}
b.relPos = function () {
	return this.X() + this.stg().X()
}
//world point
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
// world vector
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
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
b.I = function self(impulse, point, point2) {//p.impulse = p.applyImpulse = p.aI  =
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
b.F = b.constF = function (v, c, c2) {//b.applyForce = p.aF  =
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
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}
//world center
b.wCent = p.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
}
b.worldCenter = function () {
	return this.GetWorldCenter()
} //  p.worldCenter= p.gWC= function(){return this.GetWorldCenter()}
b.transform = b.tf = function (tf) {
	if (U(tf)) {
		return this.GetTransform()
	}
	this.SetTransform(tf)
	return this
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
b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
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
	return this//= b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear
}
function type() {
//type = function () {
	b.type = p.T = p.ty = p.t = function (a) {
		if (U(a)) {
			return this.GetType()
		}
		this.SetType(a)
		return this
	}
	b.stat = function () {
		var v = this.linVel()
//huh??? oh can get/set type of body
		this._linVel = V(v.x, v.y)
		this.type(0)
		return this
	}
	b.kin = function () {
		return this.type(1)
	}
	b.dyn = function (resumeVel) {
		this.type(2)
		if (resumeVel == true && O(this._linVel)) {
			this.linVel(this._linVel)
		}
		this._linVel = null
		return this
	}
	b.isDyn = function () {
		return this.GetType() == 2
	}
	b.isKin = function () {
		return this.GetType() == 1
	}
	b.isStat = function () {
		return this.GetType() == 0
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
}
function sleep() {
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
function velDmp() {
	b.L = function linear(vx, vy, damp) {
		var b = this
		if (U(vx)) {
			b.lV(0, 0).lD(0)
		}
		else {
			b.vX(vx)
			if (N(vy)) {
				b.vY(vy)
			}
			if (N(damp)) {
				b.lD(damp)
			}
		}
		return b
	}
	b.lD = b.linDamp = function (damp) {
		if (U(damp)) {
			return this.GetLinearDamping()
		}
		this.SetLinearDamping(damp)
		return this
	}
	b.aD = b.angDamp = function (damp) {
		if (U(damp)) {
			return this.GetAngularDamping()
		}
		this.SetAngularDamping(damp)
		return this
	}
	b.damp = function (l, a) {
		l = N(l) ? l : 1000
		a = N(a) ? a : l
		this.lD(l).aD(a)
		return this
	}
	//function velDamp() {
	b.aV = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
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
	b.aD = function (damp) {
		if (U(damp)) {
			return this.GetAngularDamping()
		}
		this.SetAngularDamping(damp)
		return this
	}
	b.lD = function (damp) {
		if (U(damp)) {
			return this.GetLinearDamping()
		}
		this.SetLinearDamping(damp)
		return this
	}
	b.lV = b.linVel = function (lV, y) {
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
	}
	b.vX = function (x) {
		if (U(x)) {
			return this.lV().x
		}
		return this.lV(x, this.lV().y)
	}
	b.vY = function (y) {
		if (U(y)) {
			return this.lV().y
		}
		return this.lV(this.lV().x, y)
	}
//lin vel from world point
	b.lVW = b.linVelWor = function (v, y) {
		v = V(v, y)
		return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
	}
//lin vel from local point ... use case?
	b.lVL = b.linVelLoc = function (v, y) {
		v = V(v, y)
		return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
	}
	b.aV = b.angVel = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
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
	b.damp = function (l, a) {
		l = N(l) ? l : 1000
		a = N(a) ? a : l
		this.lD(l).aD(a)
		return this
	}
} 
function bodFxts(){
	b.type = b.T = b.ty = b.t = function (a) {
		var b = this
		if (U(a)) {
			return b.GetType()
		}
		b.SetType(a)
		return b
	}
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
	b.GFL = function () {
		return this.GetFixtureList()
	}
	b.n = b.num = b.count = function () {
		return this.m_fixtureCount
	}
	b.num = b.count = function () {
		return this.m_fixtureCount
	}
	b.destroyFixt = p.destroyFixture = p.dF = function (fixt) {
		this.DestroyFixture(fixt)
		return this
	}
	b.fixt = b.list = function (fD) {//p.createFixture = p.cF = b.fixt1 = b.shape =
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
	}
	b.fixts = b.each = p.eachFixt = function (func) {
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
	b.empty = b.clear = function () {
		return this.fixts(function (f) {
			f.kill()
		})
	}
	function sen() {
		b.sen = function (s) {
			var b = this
			b.fs(function (f) {
				f.sen(s)
			})
			return b
		}
		b.sensor = b.iS = function (isSensor) {
			var f = this.fixt()
			if (U(isSensor)) {
				return f.m_isSensor
			}
			f.m_isSensor = isSensor
			return this
		}
//turns on
		b.sense = b.sens = function () {
			this.list().sensor(true);
			return this
		}
//toggles
		b.sen = function () {
			return this.sensor(!this.sensor())
		}
	}
	
	function dbf() {
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
		b.r = b.bo = b.rest = function (r) {
			var b = this
			if (U(r)) {
				return b.f().GetRestitution()
			}
			b.fs(function (f) {
				f.SetRestitution(r)
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
		b.d = b.den = function (d) {
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
		b.fric = function (fric) {
			if (U(fric)) {
				return this.list().GetFriction()
			}
			this.each(function (f) {
				f.SetFriction(fric)
			})
			return this
		}
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
	
	function shap() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
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
		function rad() {
			b._r = function (n) {
				n = N(n, 100)
				h = this.f().H()
				if (h.SetRadius) h.SetRadius(n / 30)
			}
			b.rad = function () {
				return this.f().rad()
			}
			b.rad = function () {
				return this.shp().m_radius * 30
			}
			b.rad = function () {
				//bFuk
				return this.f().rad()
			}
		}
		
		b.shp = b.shape = b.getShape = function () {
			return this.fixt().shape()
		}
		b.H = function () {
			return this.f().H()
		}
	}
	
	function mass() {
		b.mass = function (m) {
			if (U(m)) {
				return ( this.GetMass() * 900 ) / 100
			}
		}
		b._m = function () {
			var n = 1
			this.fs(function (f) {
				$l('#' + (n++) + ' mass: ' + f.mass())
			})
		}
	}
	  
}
function makeFixts() {
	b.rect = function (wd, ht, x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var that = this,
				rect = b2d.poly(wd, ht, x, y),
				fixt = this.fixt(rect).den(1),
				r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
		w.s.A(r)
		cjs.tick(function () {
			r.rot(that.rot())
			r.XY(that.X(), that.Y())
		})
		return fixt
	}
	b.rectSensor = function (wd, ht, x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var that = this
		var rect = b2d.poly(wd, ht, x, y)
		rect.isSensor = true
		var fixt = this.fixt(rect)
		fixt.den(.00000001)
		var r = cjs.rect2(wd, ht, x, y)
		r.XY(this.X(), this.Y())
		w.s.A(r)
		r.opacity(.3)
		cjs.tick(function () {
			r.rot(that.rot())
			r.XY(that.X(), that.Y())
		})
		fixt.sprite = r
		return fixt
	}
	b.poly = function () {
		var fix = this.fixt(b2d.poly.apply(null, arguments));
		return fix
	}
// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! // can check my current libs first!! :)
	b.polyArr = b.convex = function (col, arr, str) {
		var b = this, w = b.wor(), h, f,
		//when and if should i call .conc/.sep ?
		// i could auto-conc it.. but ill lose track of the fixts?
				g = G(arguments)
		if (g.length > 2) { //passing points direclty: ([],[],[]) or ('r',[],[],[])
			if (S(col)) {
				arr = _.rest(g)
			}
			else {
				col = 'p';
				arr = g
			}
		}
		if (!S(col)) {   // ['c', [[],[]] ]   or [[],[]]
			if (S(col[0])) {
				arr = _.rest(col);
				col = col[0]
			}
			else {
				arr = col;
				col = null
			}
		}
		if (S(_.last(arr))) {
			str = arr.pop()
		}
		f = b.poly.apply(b, arr)
		if (str) {
			f.K(str)
		}
		if (col) {
			f.bindSprite(w.s.poly(arr, col, col))
		}
		return f
	}
////
////
////
	b.RECT = function (col, wd, ht, x, y, rot) {
		var g = G(arguments),
				fd,
				fixt,
				h,
				str, alpha = 1
		col = g[0];
		wd = g[1];
		ht = g[2]
		x = g[3];
		y = g[4];
		rot = g[5]
		if (S(rot)) {
			str = rot;
			rot = null
		}
		if (S(y)) {
			str = y;
			y = null
		}
		if (S(x)) {
			str = x;
			x = null
		}
		if (S(ht)) {
			str = ht;
			ht = null
		}
		if (!S(col)) {
			rot = y;
			y = x;
			x = ht;
			ht = wd;
			wd = col
		}
		fd = b2d.rec(wd, ht, x, y, rot)
		if (g.n) {
			fd.isSensor = true
			alpha = .2
		}
		fixt = this.fixt(fd)
		if (str) {
			fixt.K(str)
		}
		if (S(col)) {
			fixt.bindSprite(
					w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
			)
		}
		return fixt
	}
	b.CIRC = b.circ = function (col, rad, x, y) {
		var g = G(arguments), fixt, h, str
		col = g[0];
		rad = g[1];
		x = g[2];
		y = g[3];
		if (S(y)) {
			str = y;
			y = null
		}
		if (S(x)) {
			str = x;
			x = null
		}
		if (S(rad)) {
			str = rad;
			rad = null
		}
		if (!S(col)) {
			y = x;
			x = rad;
			rad = col
		}
		fixt = this.fixt(b2d.circ(rad, x, y))
		if (str) {
			fixt.K(str)
		}
		if (S(col)) {
			fixt.bindSprite(w.s.circ(col, rad, x, y))
		}
		return fixt
	}
	b.H = function (arg) {
		var b = this, g = G(arguments), arg = g[0],
				len = length(g)
		if (U(arg)) {
			return b
		}
		//passing a single array, suggest MULTIPLE fixts
		//[f1,f2,..]
		if (A(g[0]) && U(g[1])) {
			_.each(g[0], function (a) {
				b.H.apply(b, a)
			})
		}
		
		
		//[col,[f1,f2,..]]
		else if (S(g[0]) && A(g[1]) && U(g[2])) {
			_.each(g[1], function (f) {
				if (b2d.isFixtDef(f)) {
					b.fixt(f).C(g[0])
				}
				else {
					if (!S(f[0])) {
						f = _.map(f, function (a) {
							return a
						})
						//*** ?
						f.unshift(g[0])
					}
					if (b2d.isFixtDef(f[1])) {
						b.fixt(f[1]).C(f[0])
					}
					else {
						b.H.apply(b, f)
					}
				}
			})
		}
		//fixtDef
		else if (b2d.isFixtDef(g[0])) {
			b.fixt(g[0])
		}
		//['color', fixtDef]
		else if (S(g[0]) && b2d.isFixtDef(g[1])) {
			b.fixt(g[1]).C(g[0])
		}
		
		//verts
		else if (O(g[1])) {
			if (g.n) {
				g.push('-')
			}
			b.conc(g)
			//b.convex(g)
		}
		
		//circ
		else if (len == 1 || len == 3) {
			if (g.n) {
				g.push('-')
			}
			b.CIRC.apply(b, g)
		}
		
		//rect
		else {
			if (g.n) {
				g.push('-')
			}
			b.RECT.apply(b, g)
		}
		function length(arr) {
			var len = arr.length
			if (S(arr[0])) {
				len--
			}
			if (S(_.last(arr))) {
				len--
			}
			return len
		}
		
		return b
	}
//fixt proxy methods
}
b.onAddFxt = function () {
	this.rMD()
	return this
}
b.grp = function (i) {
	f = this.fixt()
	if (U(i)) {
		return f.grp()
	}
	f.grp(i);
	$l('set to ' + i)
	return this
}
b.C = function (col) {
	this.each(function (f) {
		f.C(col)
	})
	return this
}