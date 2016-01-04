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
BOX2D = function () {
	$canW()
	b2d.somePolyFixt = [[[-100, 0], [0, -100], [100, 0], [60, 50]]]
	b2d.compoundShape = [[50, 10], [60, 30, 0, 0, 40], [120, 30, 0, 0, 29], [60, 10, 0, 50, 60], [84, 10, 15, 80, -120]]
	b2d.compoundShape2 = [[50, 10], [20, 20], [20, 10, 0, 0, 10], [40, 10, 50, 0, 45], [84, 10, 15, 80, -120], [60, 10, 0, 50, 60]]
	b2d.compoundStar = [
		[10, 10], [20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	w.D(100, 100, b2d.somePolyFixt)
	w.D(200, 100, b2d.compoundShape)
	w.D(300, 100, b2d.compoundShape2)
	w.D(400, 100, b2d.compoundStar)
	w.S(200, 200, 'w', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [[20, 20, -100, 50, 60], [100, 120, 0, 0, 100], [100, 20], [10, 300]])
	w.D(400, 400, [['b', 30], ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.S(100, 200, 'w', 50, 50)
	w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	w.me(400, 200)
	w.me(400, 300)
	w.me(400, 400)
	//w.addTenBalls() ..not color yet
}
CUPS = function (o) {
	$canW(_.extend({g: 20}, o || {}))//.db()
	cup = [[20, 20], [100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80]]
	cup2 = [[100, 40, 0, 40, 0], ['g', 200, 40, -80, -40, 260], ['g', 200, 40, 80, -40, -80], [100]]
	cup3 = [[100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80], [34, -80, -130], [34, 80, -130]]
	w.B(280, 500, 'r', cup)
	b = w.B(280, 500, 'r', cup)
	w.B(600, 500, 'b', cup2)
	w.B(900, 500, 'y', cup3)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
//W.fluffy()
	w.db()
}
MAZE = function () {
	w = b2d.W()
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
	y = w.ship()
	w.grid(maze, 100, 200, 20, 30)
	w.S(400, 200, 10)
}
PINS = function () {
	w = b2d.W().db()//=SEPARATOR=COLORCONC
	pin = [['o', [-20, 20], [0, -80], [20, 20], [0, -40]], ['w', 8, 0, -75], ['w', 8, -20, 20], ['w', 8, 20, 20]]
	_.times(15, function (i) {
		w.B(100 + (i * 60), 300, pin)
	})
	w.ship()
}
SENSOR = function () {
	w = b2d.W().chalk(
			'box goes up on coll with vortex, and right AFTER',
			'ball goes up with continued pressure')
	y = w.ship()
	b = w.ball(100, 100, 40)
	x = w.box(50, 100, 60, 60)
	w.stat(1000, 200, b2d.circ(500).sensor(true)).K('vortex')
	moveX = function () {
		x.vY(-20)
	}
	moveB = function () {
		b.vY(-20)
	}
	// w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
	y.when('vortex', moveX, function () {
		x.vX(20)
	})      //this happens every RE-ENTRY into sensor (when)
	// w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
	y.while('vortex', moveB)
}
GUYINBED = function () {
	w = b2d.W()
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	w.B(400, 100, 'y', guyInBed)
	w.B(100, 100, 'r', [
		[guyInBed]
	])
	w.B(100, 100, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.B(400, 100, guyInBed)
}
COLSENCLAS = function () {
	w = b2d.W()
	b = w.B(300, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']]) //BEAUTIFUL !!!
	w.beg(function (cx) {
		if (cx.with('arm')) {
			b.I(50, 50)
		}
		if (cx.with('arm', w.right)) {
			w.C('w')
		}
	})
}
FDOT = function () {
	w = b2d.W()
	b1 = w.S(400, 400, 50)
	f1 = b1.fixt()
	f1.dot()
	b2 = w.S(800, 400, 80, 80)
	f2 = b2.fixt()
	f2.dot()
	f2.C('p')
	verts = [[-100, 0], [0, 100], [100, -20]]
	b = w.S(200, 200, [verts]).rot(25)
	f = b.fixt()
	w.S(400, 200, [f.verts()])
	w.S(600, 200, [f.verts('+')])
	v = f.wVerts()
	_.each(v, function (v) {
		w.dot(v)
	})
	//need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
	//its a VertsArr
	b = w.S(100, 500, 50, 50)
	f = b.fixt()
	fh = f.shp()
	h = b2d.polyH(100, 50)
	f.shp(h)
}
TESTPOLYF = function () {
	w = b2d.W();
	$l('testpolyf')
	w.S(700, 200, 'o', [
		b2d.circ(40),
		b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
		b2d.circ(10, 100, 100, '-'),
		['w', b2d.circ(10, 100, -100)],
		b2d.poly(10, 300, '-'), //sets as sensor
		['b', b2d.poly(300, 10)],
		['w', [100, 0], [150, -100], [200, 20]],
		[[200, 0], [250, -100], [300, 20], 'arr'],
		['p', 50, 'pink']])
	b = w.S(300, 400, 'r', [
		b2d.poly(200, 100),
		['g', b2d.circ(40, 100, 100).K('excited')],
		[5, 100, 200, 0, 'orgasmic excited']
	])
	//apparently b.fixt is LIFO
	f = b.fixt().K('happy').dot('b')
	$l('f is f: ' + f.is(f))
	$l('f is happy: ' + f.is('happy'))
	$l('f.next is excited: ' + f.next().is('excited'))
	$l('f is orgasmic: ' + f.is('orgasmic'))
	w.db()
}
MASS = function () {
	w = b2d.W({g: 0}).db()
	y = w.B(400, 200, 'y', 50).den(.1).lV(10)
	r = w.B(200, 500, 'r', 40).den(1)
	b = w.B(200, 500, 'b', 25).den(100)
	p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
}