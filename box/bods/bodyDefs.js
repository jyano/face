$L('type')
bD.Set = function () {
	this.position.Set.apply(this.position, arguments)
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
bD.XY = function (x, y) {
	var bD = this
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
	//= bD.p = bD.ps = bD.xy
	return U(x) ? this.Ps().m() : this.Ps(V00(x, y).d())
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
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
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
MASSCLICKJUMP = function () {
	w = b2d.W({g: 100}).db() //funny
	_.each([
				w.B(100, 200, 'r', 150, 100).den(.5),
				w.B(100, 10, 'b', 30, 60).den(.5).rest(2),
				w.B(500, 400, 'y', 50, 100).den(.5)
			],
			function (b) {
				b.click(function () {
					this.I(0, -50)
				})
			})
}
ROT = function () {
	w = b2d.W()
	y = w.ship().XY(300, 300).stat().rot(1, 10)
}
BSH = BOXSHAPE = function () {
	w = b2d.W()
	/*
	 w.ball()
	
	 b = w.dyn(400,300)//.stat()
	 b.H('o', 50)
	 b.H('r', 50,50)
	 b.H('b', 50,50,50)
	 b.H('g', 50,50,50,50)
	 b.H('w', 50, 50, 50, 50, 50)
	 b.H('u', [-100,0], [0,-50], [200,-10] )
	
	
	
	 b2 = w.dyn(600,300).H([
	 ['o', 50],
	 ['r', 50,50],
	 ['b', 50,50,50],
	 ['g', 50,50,50,50],
	 ['w', 50, 50, 50, 50, 50],
	 ['u', [-100,0], [0,-50], [200,-10]]
	 ])
	
	 */
	b3 = w.dyn(600, 300)
	b3.H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
BODY = function () {
	W(10)
	w.S(600, 600, 20, 1000)
	w.D(100, 400, 'z', [[50], [10, 300, '-']])
	w.D(100, 300, 'b', 50)
	w.D(700, 300, 'b', 50)
	b = w.D(700, 400, 'y', [
		[50],
		['r', 10, 300, '-'],
		['o', 50, 100, 0]
	])
}
LAYERS = function () {
	W(0).Y()
	y.cent('+')
	w.dr(100, 100, 100, 100)
	w.dr(100, 200, 100, 100, '+')
	l1 = w.line(0, 100, 5000, 100, '-')
	l2 = w.line(0, 200, 5000, 200)
	l3 = w.line(0, 300, 5000, 300, '+')
	y2 = w.ship().cent('+')
}
SHOWCOUNT = function () {
	W().Y(200, 200)
	b = w.D(300, 300, 'r', 50)
	w.show(function () {
		return w.count()
	})
}
BEGEND = function () {
	W(0)
	b = w.B(500, 300, 'w', 50)
	w.beg(b, function () {
		w.B(R(1000, 50), R(500, 50), 'y', 5).rest(.8)
	})
	w.end(b,
			function () {
				w.B(R(1000, 50), R(500, 50), 'z', 5).rest(.8)
			}
	)
}
WORLD = function () {
	W(0)
	b = w.D(100, 100, 'r', 50)
	b1 = w.D(100, 200, 'b', 40)
	// w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)
	w.AddController
	w.CreateController
	w.DestroyController
	w.GetGroundBody
	w.GetProxyCount
	w.SetDestructionListener
	w.SetBroadPhase
	w.SetWarmStarting
	w.SetContinuousPhysics
	w.IsLocked
	// proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
	//  pair - a record created when two proxies overlap.
	//  manifold - the set of contact points for two convex shapes.
	w.locked = function () {
		return b2World.e_locked != 2
	}
	w.m_island
	w.m_flags
}
TESTQ = function () {
	W(2).Y(400, 500)
	_.times(5, function () {
		w.randRects()
	})
	n = w.qAB(function (f, b) {
		b.kill();
		return true
	}, 400, 100, 450, 150)
	w.pen(n + ' rects removed')
}
FOLLOWTF = function () {
	W()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(200, 200, 'p', 100, 150)
	cjs.tick(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		setTimeout(function () {
			tf = trf
		}, 1000)
	})
}
TESTPOINT = function () {
	W(50)
	var tf = null
	b = w.rect(100, 100, 100, 200, 'b')
	p = w.rect(200, 200, 100, 150, 'p').stat().rot(20)
	p.fixt(
			b2d.poly(50, 50, 50, 50, 20, 'o')
	)
	f = p.fixt()
	h = f.shape()
	hit = h.testPoint(p.transform(), V(200, 200).div()) // true
	hit2 = f.hit(200, 200, true)
}
COCHANGE = function () {//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
	W({g: 20})
	//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	s1 = w.sensorBucket(320, 300, 's1')
	s2 = w.sensorBucket(700, 300, 's2')
	co1 = w.acc(5, -5)
	co2 = w.acc(-5, 5)
	I(function () {
		aCo.body(
				w.D(300, 100, 'y', 10),
				w.D(760, 100, 'b', 10)
		)
	})
	setInterval(function () {
		b.bc() //default is to kill all in its 'controller-space' (except itself)
	}, 5000)
	w.beg(function (cx) {
		cx.with('s1', function () {
			var f = this, b = f.B()
			b.cancel()
			co1.body(b)
		})
		cx.with('s2', function () {
			var f = this, b = f.B()
			b.cancel()
			co2.body(b)
		})
	})
	w.D(150, 100, 'w', 50).den(1)
	w.D(200, 100, 'd', 50).den(1)
	w.D(250, 100, 'r', 50).den(1)
	b = w.ship(100, 500)
	w.D(350, 100, 'g', 50).den(1)
	w.D(400, 100, 'o', 50).den(1)
	w.D(450, 100, 'w', 50).den(1)
}
ACC = function () {
	W(0).C('z')
	// Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.
	// now just add and remove bodies to the controller!!
	b = w.D(300, 300, 'b', 50, 60).den(1)
	co = w.acc(-5, -5).body(b)
	added = true
	cjs.tick(function () {
		b.F(10, 10)
	})
	I(function () {
		if (R()) {
			if (added == true) {
				added = false
				w.C('r')
				co.remove(b)
			}
			else {
				added = true
				w.C('g')
				co.body(b)
			}
		}
	}, 2000)
}
BUOY = function () {
	W()
	w.S(320, 480, 'r', 640, 20)
	w.S(320, 340, 'b', 320, 20)
	w.S(170, 230, 'g', 20, 200)
	w.S(470, 230, 'y', 20, 200)
	w.S(320, 245, 'z', [[280, 170, '-']])
	co = w.buoy(0, -1, 5, 2).os(-6).den(2)
	cjs.tick(function () {
		w.eachD(function (b) {
			if (b.co()) {
				co.remove(b)
			}
			for (var c = b.cx(); c; c = c.next) {
				var cx = c.contact
				if (cx.A().IsSensor() && !cx.b().co()) {
					co.body(cx.b())
				}
				if (cx.B().IsSensor() && !cx.a().co()) {
					co.body(cx.a())
				}
			}
		})
	})
	I(function () {
		w.D(300, 40, 'r', 8).den(1)
	})
}
BALL = function () {
	W().B(400, 300, 'x', 150).den(.1)
}
 