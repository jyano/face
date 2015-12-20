 
function jointDef(){
	jd.A = function (a) {
		this.bodyA = a;
		return this
	}
	jd.B = function (b) {
		this.bodyB = b;
		return this
	}
	j.AB = function (a, b) {
		return this.A(a).B(b)
	}
	jd.init = function () {//joint.i=
		this.Initialize.apply(this, arguments)
		return this
	}
	jd.coll = jd.collide = jd.cC = function (a) {
		this.collideConnected = a;
		return this
	}
//distance
	jd.freq = function (a) {
		if (U(a)) {
			return this.frequencyHz
		}
		this.frequencyHz = a;
		return this
	}
	jd.len = function (len) {
		if (U(len)) {
			return this.length * 30
		}
		this.length = len / 30
		return this
	}
	jd.damp = function (a) {
		if (U(a)) {
			return this.dampingRatio
		}
		this.dampingRatio = a;
		return this
	}
//revolute
	jd.refAng = j.rA = function (a) {
		j.referenceAngle = tRad(a);
		return this
	}
	jd.maxTorque = j.mMT = function (a) {
		this.maxMotorTorque = a
		return this
	}
	jd.lowAng = j.lA = function (a) {
		this.lowerAngle = tRad(a);
		return this
	}
	jd.upAng = j.uA = function (a) {
		this.upperAngle = tRad(a);
		return this
	}
	jd.localA = j.lAA = function (a) {
		this.localAnchorA = a;
		return this
	}
	jd.localB = j.lAB = function (a) {
		this.localAnchorB = a;
		return this
	}
	jd.rat = j.r = function (a) {
		this.ratio = a;
		return this
	}
	jd.axis = j.lXA = function (a) {
		this.localAxisA = a;
		return this
	}
//slider
	jd.maxForce = j.mMF = function (a) {
		this.maxMotorForce = a;
		return this
	}
//slider and revolute
	jd.speed = j.mS = function (a) {
		this.motorSpeed = a;
		return this
	}
	jd.motor = j.eM = function (a) {
		this.enableMotor = a ? true : false;
		return this
	}
	jd.maxSpeed = j.mMS = function (a) {
		this.maxMotorSpeed = a;
		return this
	}
//LIMITS
	jd.lowTrans = j.lT = function (a) {
		this.lowerTranslation = a;
		return this
	}
	jd.upTrans = j.uT = function (a) {
		this.upperTranslation = a;
		return this
	}
	jd.limits = j.eL = function (a) {
		this.enableLimit = a ? true : false;
		return this
	}
	/*
	
	
	 You can specify user data for any joint type 
	
	 a you can provide a flag to prevent the attached bodies from colliding with each other. 
	 This is actually the default behavior 
	 and you must set the collideConnected Boolean to allow collision between to connected bodies.
	
	
	
	 Many joint definitions require that you provide some geometric data. 
	
	 Often a joint will be defined by anchor points. 
	 These are points fixed in the attached bodies. 
	
	 Box2D requires these points to be specified in local coordinates.
	 This way the joint can be specified even when the current body transforms violate the joint constraint
	 --- a common occurrence when a game is saved and reloaded. 
	
	
	 Additionally, 
	 some joint definitions need to know the default relative angle between the bodies. 
	 This is necessary to constrain rotation correctly.
	
	
	 many joints have initialization functions 
	 that use the current body transforms
	 to remove much of the work. 
	
	 However, these initialization functions
	 should usually only be used for prototyping. 
	
	 Production code should define the geometry directly. 
	 This will make joint behavior more robust.
	
	
	
	 */
	jD.A = function (a) {
		this.bodyA = a;
		return this
	}
	jD.B = function (b) {
		this.bodyB = b;
		return this
	}
	jD.AB = function (a, b) {
		return this.A(a).B(b)
	}
	jD._lAA = function (lAA) {
		this.localAnchorA = lAA;
		return this
	}
	jD._lAB = function (lAB) {
		this.localAnchorB = lAB;
		return this
	}
	jD.lAA = jD.aV = function (x, y) {
		if (U(x)) {
			return this
		}
		var pt = V(x, y)
		this._lAA(pt.div())
		return this
	}
	jD.lAB = jD.bV = function (x, y) {
		if (U(x)) {
			return this
		}
		return this._lAB(V(x, y).div())
	}
	jD.init = jD.i = function () {
		$l('jD.init')
		this.Initialize.apply(this, arguments)
		return this
	}
	jD.colCon = jD.collConn = jD.cC = jD.cl = jD.coll = jD.collide = function (cC) {
		this.collideConnected = cC ? true : false;
		return this
	}
	function bods() {
		jD.sA = jD.SBA = jD.sBA = function (a) {
			this.bodyA = a;
			return this
		}
		jD.sB = jD.SBB = jD.sBB = function (b) {
			this.bodyB = b;
			return this
		}
		jD.AB = jD.sAB = function (a, b) {
			this.A(a)
			this.B(b)
			return this
		}
		jD.gA = function () {
			return this.bodyA
		}
		jD.gB = function () {
			return this.bodyB
		}
		jD.A = function (a) {
			return U(a) ? this.gA() : this.sA(a)
		}
		jD.B = function (b) {
			return U(b) ? this.gB() : this.sB(b)
		}
		j.A = j.gA = j.bA = j.GBA = function () {
			return this.GetBodyA()
		}
		j.B = j.gB = j.bB = j.GBB = function () {
			return this.GetBodyB()
		}
	}
	
	/*
	 bodyA : b2Body
	 The first attached body.
	 b2JointDef
	 bodyB : b2Body
	 The second attached body.
	 b2JointDef
	 collideConnected : Boolean
	 Set this flag to true if the attached bodies should collide.
	 b2JointDef
	 type : int
	 The joint type is set automatically for concrete joint types.
	 b2JointDef
	 userData : *
	 Use this to attach application specific data to your joints.
	 b2JointDef
	
	 */
	function anc() {
		jD._gLAA = function () {
			return this.localAnchorA
		}
		jD._gLAB = function () {
			return this.localAnchorB
		}
		jD._sLAA = function (aA) {
			this.localAnchorA = aA;
			return this
		}
		jD._sLAB = function (aB) {
			this.localAnchorB = aB;
			return this
		}
		jD.XYA = jD.LAA = function (aA) {
			return U(aA) ? this._gLAA() :
					this._sLAA(aA)
		}
		jD.XYB = jD.LAB = function (aB) {
			var jD = this
			return U(aB) ? jD._gLAB() : jD._sLAB(aB)
		}
		jD.xyA = jD.vA = jD.aA = jD.ancA = jD.lAA = function (aA, y) {
			var jD = this
			return U(aA) ? jD.XYA().m() :
					jD.XYA(O(aA) ? aA.d() : V00(aA, y).d())
		}
		jD.xyB = jD.vB = jD.aB = jD.ancB = jD.lAB = function (aB, y) {
			var jD = this
			return U(aB) ? jD.XYB().m() :
					jD.XYB(V00(aB, y).d())
		}
		jD.xyAB = jD.v = jD.vAB = function (aX, aY, bX, bY) {
			var dJ = this
			dJ.xyA(aX, aY)
			dJ.xyB(bX, bY)
			return dJ
		}
		j.GAB = function () {
			return this.GetAnchorB()
		}  //world coords
		j.GAA = function () {
			return this.GetAnchorA()
		}
		j.xyA = j.vA = j.aA = j.a = j.ancA = function () {
			return this.GAA().m()
		}
		j.xyB = j.vB = j.aB = j.b = j.ancB = function () {
			return this.GAB().m()
		}
	}
	
	function speed() {
		jD.mS = jD.speed = function (sp) {
			if (U(sp)) {
				return this.motorSpeed
			}
			this.motorSpeed = sp;
			return this
		}
		jD.mMS = function (sp) {
			if (U(sp)) {
				return this.maxMotorSpeed
			}
			this.maxMotorSpeed = sp
			return this
		}
		j.SMS = function (sp) {
			var j = this
			j.SetMotorSpeed(sp)
			return j
		}
		j.GMS = function () {
			return this.GetMotorSpeed()
		}
		j.mSp = j.sp = j.mS = j.MS = j.spd = j.speed = function (sp) {
			return U(sp) ? this.GMS() : this.SMS(sp)
		}
	}
	
	function forc() {
		jD._sMF = function () {
			this.maxForce = mF
			return this
		}
		jD.MF = jD.mF = function (mF) {
			return U(mF) ? this.maxForce :
					this._sMF(mF)
		}
		j.SMMF = j.mxFo = j.maxForce = j.mMF = j.mF = function () {
			this.SetMaxMotorForce.apply(this, arguments)
			return this
		}
		j.GRF = function (fo) {
			return this.GetReactionForce(fo)//inv_dt)//(Num)b2Vec2 // Get the reaction force on body2 at the joint anchor in Newtons.
			//GetReactionTorque(inv_dt)//:Number // reaction torque on body2 in N.
		}
		/*
		 localAnchorA - the point in body A around which it will rotate
		 localAnchorB - the point in body B around which it will rotate
		 referenceAngle - an angle between bodies considered to be zero for the joint angle
		 enableLimit - whether the joint limits will be active
		 lowerAngle - angle for the lower limit
		 upperAngle - angle for the upper limit
		 enableMotor - whether the joint motor will be active
		 motorSpeed - the target speed of the joint motor
		 maxMotorTorque - the maximum allowable torque the motor can use
		 */
	}
	
 
	
	jD.sRA = function (an) {
		this.referenceAngle = an
		return this
	}
	jD.gRA = function (an) {
		return this.referenceAngle
	}
	jD.rA = jD.refAng = function (an) {
		return U(an) ? M.tD(this.gRA()) : this.sRA(M.tR(an))
	}
	jD.ax = jD.axis = jD.lXA = function (a) {
		this.localAxisA = a;
		return this
	}
	function spg() {
		len();
		freq();
		dmpRa()
		function len() {
			jD.sL = jD.sLen = function (l) {
				this.length = l;
				return this
			}
			jD.l = jD.len = function (l) {
				return U(l) ? this.length * 30 : this.sLen(l / 30)
			}
			j.SL = function (l) {
				this.SetLength(l);
				return this
			}
			j.GL = function () {
				return this.GetLength()
			}
			j.L = j.Len = function (l) {
				return U(l) ? this.GL() : this.SL(l)
			}
			j.sLen = function (l) {
				return U(l) ? this : this.SL(l / 30)
			}
			j.gL = function () {
				return this.GL() * 30
			}
			j.l = j.len = function (l) {
				return U(l) ? this.gL() :
						this.sLen(l)
			}
		}
		
		function freq() {
			jD.sFq = function (fq) {
				this.frequencyHz = fq
				return this
			}
			jD.gFq = function () {
				return this.frequencyHz
			}
			jD.f = jD.fq = jD.frq = jD.freq = function (fq) {
				return U(fq) ? this.gFq() : this.sFq(fq)
			}
			j.SF = function (fq) {
				this.SetFrequency(fq);
				return this
			}
			j.GF = function () {
				return this.GetFrequency()
			}
			j.f = j.frq = j.fq = j.freq = function (fq) {
				return U(fq) ? this.GF() : this.SF(fq)
			}
		}
		
		function dmpRa() {
			jD.sDR = function (dR) {
				this.dampingRatio = dR
				return this
			}
			jD.dR = jD.d = jD.dm = jD.dmp = jD.damp = function (dR) {
				return U(dR) ? this.dampingRatio : this.sDR(dR)
			}
			j.GDR = function () {
				return this.GetDampingRatio()
			}
			j.SDR = function (dR) {
				this.SetDampingRatio(dR);
				return this
			}
			j.dR = j.d = j.dm = j.dmp = j.damp = function (dR) {
				return U(dR) ? this.GDR() : this.SDR(dR)
			}
		}
	}
	
	j.ds = j.destroy = function () {
		this.W().DestroyJoint(this)
		return this
	}
	j.in = j.i = j.init = function () {
		this.Initialize.apply(this, G(arguments))
		return this
	}
	function worCen() {
		jD.AWC = function () {
			return this.A().GWC()
		}
		jD.BWC = function () {
			return this.B().GWC()
		}
		jD.aWC = function () {
			return this.AWC().m()
		}
		jD.bWC = function () {
			return this.BWC().m()
		}
		jD._osA = function (x, y) {
			var jD = this
			var wC = jD.aWC()
			if (U(x)) {
				return wC
			}
			var v = V00(x, y)
			return wC.add(v)
		}
		jD._osB = function (x, y) {
			var jD = this
			var wC = jD.bWC()
			if (U(x)) {
				return wC
			}
			var v = V00(x, y)
			return wC.add(v)
		}
		jD.wA = jD.wAB = function (lAB) {
			return U(lAB) ? this.wPt(this.lAB()) :
					this.lPt(this.lAB(lAB))
		}
		jD.wB = jD.wAA = function (lAA) {
			return U(lAA) ? this.wPt(this.lAA()) :
					this.lPt(this.lAA(lAA))
		}
		jD.osA = jD.a = function (x, y) {
			return this.aA(this._osA(x, y))
		}
		jD.osB = jD.b = function (x, y) {
			return this.aB(this._osB(x, y))
		}
	}
	
	jD.eL = function (eL) {
		var jD = this
		if (U(eL)) {
			return jD.enableLimit
		}
		jD.enableLimit = eL ? true : false;
		return jD
	}
	j.eL = function (eL) {
		this.EnableLimit(eL ? true : false)
		return this
	}
	j.l1 = function () {
		return this.eL(1)
	}
	j.l0 = function () {
		return this.eL(0)
	}
	j.GJT = j.GJTl = function () {

//box2d source:
//	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
//			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
//			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
//	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
		var tl = this.GetJointTranslation.apply(this, arguments)
		return parseInt(tl)
	}
	j.val = function (v) {
		var j = this
		if (U(v)) {
			return j.GJT() * 30
		}
	}
	function motors() {
		$L()
		j.eM = j.EM = function (eM) {
			this.EnableMotor(eM ? true : false);
			return this
		}
		j.m1 = function () {
			return this.eM(1)
		}
		j.m0 = function () {
			return this.eM(1)
		}
		j.GMS = function () {
			return this.GetMotorSpeed
		}
		j.SMS = function (sp) {
			this.SetMotorSpeed(sp)
			return this
		}
		j.sp = pJ.mSp = function (sp) {
			var pJ = this
			return U(sp) ?
					pJ.GMS() :
					pJ.SMS(sp)
		}
		j.m = function () {
			return this.mt.apply(this, arguments).m1()
		}
		j.s = function () {
			return this.sp.apply(this, arguments).m1()
		}
		CONTROLPOS = function () {
// You can use motors to control position 
			//by specifying a joint velocity that is proportional to the difference
			// between the actual and desired position. 
		}
		SIMJOINTFRIC = function () {
//You can also use motors to simulate joint friction:
			// set the joint velocity to zero and provide a small, 
			//but significant maximum motor force/torque. 
			//Then the motor will attempt to keep the joint from moving 
			// until the load becomes too strong.
		}
		function _pre() {
		}

//
		/*
		
		 Joint motors can be used in many ways. You can use motors to control position 
		 by specifying a joint velocity that is proportional to the difference between the actual and desired position. 
		
		
		 You can also use motors to simulate joint friction: set the joint velocity to zero and provide a small, 
		 but significant maximum motor force/torque. 
		 Then the motor will attempt to keep the joint from moving until the load becomes too strong.
		 */
		j.enabMot = function (a) {
			this.EnableMotor(a);
			return this
		}
		j.mot = function (speed, maxForce) {
			if (speed == '-') {
				this.EnableMotor(false);
				return this
			}
			speed = N(speed) ? speed : 100
			maxForce = N(maxForce) ? maxForce : 10000000
			this.enabMot(true).maxForce(maxForce).speed(speed)
		}
		j.maxForce = j.mMF = j.mF = function (a, b, c) {
			this.SetMaxMotorForce(a, b, c);
			return this
		}
	}
	
	function mot() {
		jD._gEM = function () {
			return this.enableMotor
		}
		jD._sEM = function (eM) {
			this.enableMotor = eM
			return this
		}
		jD.EM = function (eM) {
			return U(eM) ? this._gEM() :
					this._sEM(eM ? true : false)
		}
		jD.m1 = function () {
			return this.EM(1)
		}
		jD.m0 = function () {
			return this.EM(0)
		}
		jD.mMF = function (a) {
			this.maxMotorForce = a;
			return this
		}
//slider and revolute
		jD.motor = jD.eM = function (a) {
			this.enableMotor = a ? true : false;
			return this
		}
		j.enabMot = function (a) {
			this.EnableMotor(a);
			return this
		}
		j.mot = function (speed, maxForce) {
			if (speed == '-') {
				this.EnableMotor(false);
				return this
			}
			speed = N(speed) ? speed : 100
			maxForce = N(maxForce) ? maxForce : 10000000
			this.enabMot(true).maxForce(maxForce).speed(speed)
		}
//slider
//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}
//slider and revolute
		j.motor = j.eM = function (a) {
			j.enableMotor = a ? true : false;
			return j
		}
		j.mt = j.motor = j.enableMotor = j.eM = function (a) {
			j.EnableMotor(a ? true : false)
			return j
		}
		j.sEM = function (eM) {
			this.EnableMotor(eM)
			return this
		}
		j.IME = function () {
			return this.IsMotorEnabled()
		}
		j.EM = function (eM) {
			return U(eM) ? this.IME() :
					this.sEM(eM ? true : false)
		}
		j.m1 = function () {
			return this.EM(1)
		}
		j.m0 = function () {
			return this.EM(0)
		}
	}
	
	function limits() {
	 
		j.eL = j.EL = function (eL) {
			this.EnableLimit(eL ? true : false)
			return this
		}
		j.l1 = function () {
			return this.eL(1)
		}
		j.l0 = function () {
			return this.eL(0)
		}
		j.l = function () {
			return this.SL.apply(this, arguments).l1()
		}
		j.SL = function (a, b) {
			this.SetLimits.apply(this, arguments)
			return this
		}
//
		j.lm = j.limits = j.setLimits = j.sL = function (a, b) {
			a = N(a) ? a : 20
			b = N(b) ? b : 180
			j.SetLimits(tRad(a), tRad(b))
			return j
		}
		j.enableLimits = j.enableLimit = j.eL = function (a) {
			this.EnableLimit(a ? true : false)
			return this
		}
	}
	
	function joints_() {
// Joints between static and/or kinematic bodies are allowed, but have no effect and use some processing time.
		b2d.p()
		/*
		
		
		 You can specify user data for any joint type 
		
		 a you can provide a flag to prevent the attached bodies from colliding with each other. 
		 This is actually the default behavior 
		 and you must set the collideConnected Boolean to allow collision between to connected bodies.
		
		
		
		 Many joint definitions require that you provide some geometric data. 
		
		 Often a joint will be defined by anchor points. 
		 These are points fixed in the attached bodies. 
		
		 Box2D requires these points to be specified in local coordinates.
		 This way the joint can be specified even when the current body transforms violate the joint constraint
		 --- a common occurrence when a game is saved and reloaded. 
		
		
		 Additionally, 
		 some joint definitions need to know the default relative angle between the bodies. 
		 This is necessary to constrain rotation correctly.
		
		
		 many joints have initialization functions 
		 that use the current body transforms
		 to remove much of the work. 
		
		 However, these initialization functions
		 should usually only be used for prototyping. 
		
		 Production code should define the geometry directly. 
		 This will make joint behavior more robust.
		
		
		
		 */
		jD.A = function (a) {
			this.bodyA = a;
			return this
		}
		jD.B = function (b) {
			this.bodyB = b;
			return this
		}
		jD.AB = function (a, b) {
			return this.A(a).B(b)
		}
		jD._lAA = function (lAA) {
			this.localAnchorA = lAA;
			return this
		}
		jD._lAB = function (lAB) {
			this.localAnchorB = lAB;
			return this
		}
		jD.lAA = jD.aV = function (x, y) {
			if (U(x)) {
				return this
			}
			var pt = V(x, y)
			this._lAA(pt.div())
			return this
		}
		jD.lAB = jD.bV = function (x, y) {
			if (U(x)) {
				return this
			}
			return this._lAB(V(x, y).div())
		}
		jD.init = jD.i = function () {
			$l('jD.init')
			this.Initialize.apply(this, arguments)
			return this
		}
		jD.colCon = jD.collConn = jD.cC = jD.cl = jD.coll = jD.collide = function (cC) {
			this.collideConnected = cC ? true : false;
			return this
		}
		j.init = j.i = function () {
			$l('j.init')
			this.Initialize.apply(this, G(arguments))
			return this
		}
		j.type = j.ty = j.T = function () {
			return this.GetType()
		}
//j.a and j.b CANNOT 'set' the property.. is too late.. make new joint
		j.ancA = j.a = function () {
			return this.GetAnchorA().mult()
		}
		j.ancB = j.b = function () {
			return this.GetAnchorB().mult()
		}
		j.bodA = j.A = function (a) {
			return this.GetBodyA()
		}
		j.bodB = j.B = function (a) {
			return this.GetBodyB()
		}
		j.W = function () {
			return this.A().W()
		}//  this.GetBodyA().GetWorld()
		j.destroy = j.ds = function () {
			var j = this.W().DestroyJoint(this)
			this.destroyed = true
			return j
		}
		j.target = function (a, b) {
			var j = this
			j.SetTarget(V(a, b))
			return j
		}//mouse
		w.dsJt = w.dJ = w.j = w.destroyJoint = function (a) {
			var w = this
			w.DestroyJoint(a);
			return w
		}
		w.crJt = w.cJ = w.J = w.joint = w.createJoint = function (a) {
			var w = this,
					j = this.CreateJoint(a)
			return j
		}
		b.JtLs = b.jointList = b.jt = b.j = b.joint = function () {
			return this.GetJointList().joint
		}
		b.rmJts = b.destroyJoints = b.dsJts = b.destroyAllJoints = function () {
			var b = this,
					toDestroy = [], je = b.j()
			while (je) {
				toDestroy.push(je.joint)
				je = je.next
			}
			_.e(toDestroy, function (j) {
				w.DestroyJoint(j)
			})
			return this
		}
		w.colBalls = function () {
			var w = this
			r = w.D(300, 300, 'r', 12).DFB(1, 0.1, 1)
			b = w.D(400, 300, 'b', 12).DFB(1, 0.1, 1)
			y = w.D(500, 300, 'y', 12).DFB(1, 0.1, 1)
			g = w.D(600, 300, 'g', 12).DFB(1, 0.1, 1)
			p = w.D(700, 300, 'p', 12).DFB(1, 0.1, 1)
			o = w.D(800, 300, 'o', 12).DFB(1, 0.1, 1)
			return w
		}
	}
	
	function clCn() {
		jD.sCC = function (a) {
			this.collideConnected = a;
			return this
		}//collideConnected  
		jD.cC = jD.cl = function (a) {
			return U(a) ? this.collideConnected : this.sCC(a ? true : false)
		}
		jD.cC1 = jD.cl1 = function () {
			return this.cC(1)
		}
		jD.cC0 = jD.cl0 = function () {
			return this.cC(0)
		}
		jD.in = jD.init = function () {//joint.i=
			this.Initialize.apply(this, arguments)
			return this
		}
	}
}
function jointPt() {
 
	j.W = function () {
		return this.A().W()
	}
	j.userDa = j.GUD = function () {
		this.GetUserData();
	}
	j.SUD = function (d) {
		this.SetUserData(d)
		return this
	}
	j.N = j.GN = function () {
		return this.GetNext()
	}
	j.ty = j.GT = function () {
		return this.GetType()//:int Get the type of the concrete joint.
	}
	j.IA = j.IAc = function () {
		return this.IsActive()
	}  //Short-cut function to determine if either body is inactive.
	j.init = function () {
		joint.Initialize.apply(joint, G(arguments))
		return j
	}
	j.init = j.i = function () {
		j.Initialize.apply(j, G(arguments))
		return j
	}
	j.A = function (a) {
		if (U(a)) {
			return this.GetBodyA()
		}
		else {
			alert('j.A cannot set')
		}
	}
	j.B = function (a) {
		if (U(a)) {
			return this.GetBodyB()
		}
		else {
			alert('j.B cannot set')
		}
	}
	j.wor = j.W = function () {
		return this.A().wor()
	}
	j.T = function () {
		return this.GetType()
	}
	j.form = function () {
		var w = this.wor(), a = this.A(), b = this.B()
		if (this.T() == 8) {
			return w.weld(a, b)
		}
	}
	j.destroy = function () {
		var j = this.wor().DestroyJoint(this)
		this.destroyed = true
		return j
	}
	j.a = function (a) {
		if (U(a)) {
			return this.GetAnchorA().mult()
		}
		else {
			alert('j.A cannot set')
		}
	}
	j.b = function (a) {
		if (U(a)) {
			return this.GetAnchorB().mult()
		}
		else {
			alert('j.B cannot set')
		}
	}
	j.freq = function (a) {
		if (U(a)) {
			return this.GetFrequency()
		}
		this.SetFrequency(a)
		return this
	}
	j.len = function (a) {
		var g = G(arguments),
				len = this.GetLength() * 30
		if (U(a = g[0])) {
			return len
		}
		this.SetLength(
				$.update(len, a, g) / 30
		)
		return this
	}
	j.shrink = function () {
		this.len(0.97, '*')
		return this
	}
//mouse
	j.target = function (a, b) {
		var j = this
		j.SetTarget(V(a, b))
		return j
	}
	j.damp = function (a) {
		if (U(a)) {
			return this.GetDampingRatio()
		}
		this.SetDampingRatio(a)
		return this
	}
// can change collideConnected dynamically?  if not i could replace the joint with a new one dynaically!!!!!
// is it smart enough to know all its properties??? // it should be
//motor
	j.maxSpeed = j.maxMotorSpeed = j.mMS = function (a) {
		j.maxMotorSpeed = a
		return j
	}
//motor rev
	j.mt = j.motor = j.enableMotor = j.eM = function (a) {
		j.EnableMotor(a ? true : false)
		return j
	}
	j.speed = j.motorSpeed = j.mS = function (speed) {
		if (U(speed)) {
			return this.GetMotorSpeed()
		}
		this.SetMotorSpeed(speed)
		return this
	}
	j.torque = function (torq) {
		if (U(torq)) {
			return this.GetMotorTorque()
		}
		this.SetMaxMotorTorque(torq)
		return this
	}
	j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
		this.SetMaxMotorTorque(a, b, c);
		return this
	}
	j.maxForce = j.mMF = j.mF = function (a, b, c) {
		this.SetMaxMotorForce(a, b, c);
		return this
	}
	j.lm = j.limits = j.setLimits = j.sL = function (a, b) {
		a = N(a) ? a : 20
		b = N(b) ? b : 180
		j.SetLimits(tRad(a), tRad(b))
		return j
	}
	j.enableLimits = j.enableLimit = j.eL = function (a) {
		this.EnableLimit(a ? true : false)
		return this
	}
	j.W = function () {
		return this.GetBodyA().GetWorld()
	}
//revolute
	j.refAng = j.rA = function (a) {
		j.referenceAngle = tRad(a);
		return j
	}
	j.maxTorque = j.mMT = function (a) {
		j.maxMotorTorque = a
		return j
	}
	j.lowAng = j.lA = function (a) {
		j.lowerAngle = tRad(a);
		return j
	}
	j.upAng = j.uA = function (a) {
		j.upperAngle = tRad(a);
		return j
	}
	j.localA = j.lAA = function (a) {
		j.localAnchorA = a;
		return j
	}
	j.localB = j.lAB = function (a) {
		j.localAnchorB = a;
		return j
	}
	j.rat = j.r = function (a) {
		j.ratio = a;
		return j
	}
	j.axis = j.lXA = function (a) {
		j.localAxisA = a;
		return j
	}
	j.enabMot = function (a) {
		this.EnableMotor(a);
		return this
	}
	j.mot = function (speed, maxForce) {
		if (speed == '-') {
			this.EnableMotor(false);
			return this
		}
		speed = N(speed) ? speed : 100
		maxForce = N(maxForce) ? maxForce : 10000000
		this.enabMot(true).maxForce(maxForce).speed(speed)
	}
//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}
//slider and revolute
	j.speed = function (speed) {//j.mS
		this.SetMotorSpeed(speed)
		return this
	}
	j.motor = j.eM = function (a) {
		j.enableMotor = a ? true : false;
		return j
	}
	j.maxSpeed = j.mMS = function (a) {
		j.maxMotorSpeed = a;
		return j
	}
//LIMITS
	j.lowTrans = j.lT = function (a) {
		j.lowerTranslation = a;
		return j
	}
	j.upTrans = j.uT = function (a) {
		j.upperTranslation = a;
		return j
	}
	j.limits = j.eL = function (a) {
		j.enableLimit = a ? true : false;
		return j
	}
// Joints between static and/or kinematic bodies are allowed, but have no effect and use some processing time.
	j.init = j.i = function () {
		$l('j.init')
		this.Initialize.apply(this, G(arguments))
		return this
	}
	j.type = j.ty = j.T = function () {
		return this.GetType()
	}
//j.a and j.b CANNOT 'set' the property.. is too late.. make new joint
	j.ancA = j.a = function () {
		return this.GetAnchorA().mult()
	}
	j.ancB = j.b = function () {
		return this.GetAnchorB().mult()
	}
	j.bodA = j.A = function (a) {
		return this.GetBodyA()
	}
	j.bodB = j.B = function (a) {
		return this.GetBodyB()
	}
	j.W = function () {
		return this.A().W()
	}//  this.GetBodyA().GetWorld()
	j.destroy = j.ds = function () {
		var j = this.W().DestroyJoint(this)
		this.destroyed = true
		return j
	}
	j.target = function (a, b) {
		var j = this
		j.SetTarget(V(a, b))
		return j
	}//mouse
}
w.CJ = w.J = w.joint = w.j = w.cJ = function (jD) {
	return this.CreateJoint(jD)
}
w.DJ = w.dj = b.dsJt = b.dsJ = function (j) {
	this.DestroyJoint(j);
	return this
}
w.GJC = function () {
	return this.GetJointCount()
}
w.GJL = b.jtLs = b.jLs = b.jL = function () {
	return this.GetJointList()
}
w.dsJt = w.dJ = w.j = w.destroyJoint = function (a) {
	var w = this
	w.DestroyJoint(a);
	return w
}
w.crJt = w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var w = this,
			j = this.CreateJoint(a)
	return j
}
w.cJ = w.J = w.joint = w.createJoint = function (a) {
	var j = this.CreateJoint(a)
	return j
}
w.dJ = w.j = w.destroyJoint = function (a) {
	this.DestroyJoint(a);
	return this
}
b.jts = b.js = function (fn) {
	var b = this
	var jts = []
	var je = b.GJL()
	while (je) {
		jts.push(je.joint)
		je = je.next
	}
	if (F(fn)) {
		_.e(jts, function (j, k) {
			fn(j, k, jts)
		})
		return b
	}
	return jts
}
b.jt = function () {
	return this.GJL().joint
}
b.dsJ = b.rmJ = function () {
	var b = this, w = b.W()
	return b.jts(function (j) {
		w.DJ(j)
	})
}//b.rmJts = b.dsJts =
b.joint = function () {
	return this.GetJointList().joint
}
b.destroyAllJoints = function () {
	var b = this, toDestroy = [],
			je = b.GetJointList()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.each(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
b.JtLs = b.jointList = b.jt = b.j = b.joint = function () {
	return this.GetJointList().joint
}
b.rmJts = b.destroyJoints = b.dsJts = b.destroyAllJoints = function () {
	var b = this,
			toDestroy = [], je = b.j()
	while (je) {
		toDestroy.push(je.joint)
		je = je.next
	}
	_.e(toDestroy, function (j) {
		w.DestroyJoint(j)
	})
	return this
}
 
function mouseJt(){
 
	
	def()
	function def() {
		mJD.sT = function (a, b) {
			var mJD = this
			mJD.target.Set(a, b)
			return mJD
		}
		mJD.mF = function (mF) {
			this.maxForce = mF;
			return this
		}
	}
	
	b2d.mJ = function (body, tX, tY) {
		if (O(tX)) {
			tY = tX.y;
			tX = tX.x
		}
		var md = new b2d.Joints.b2MouseJointDef
		md.bodyA = w.GetGroundBody()
		md.bodyB = body
		md.target = V(tX, tY)
		md.collideConnected = true
		md.maxForce = 1000 * body.GetMass()
		md.dampingRatio = 0
		return md
	}
	w.mJ = function (o) {
		var w = this
		if (o.m == 0) {
			return w
		}
		o = o || {}
		$.M()
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.M()
		})
		$.oMD(function (x, y) {
			w.XY(x, y,
					function (f) {
						if (f.ofClass(o.m)) {
							w.mj = w.m(f.body(), _)
						}
					})
		})
		return w
	}
	w.wMouse = function () {
		var w = this
		$.oMD(function (x, y) {
			var p = w.sToW(x, y)
			w.mx = p.x;
			w.my = p.y
		})
		$.oMM(function (x, y) {
			var p = w.sToW(x, y)
			w.mx = p.x;
			w.my = p.y
		})
		//  cjs.tick(function(){    if(w.mj){w.mj.tg(w.mx, w.my) }})
		return w
	}
	w.wMouseJ = function (o) {
		var w = this
		w.md(function (e) {
			w.XY(e.x, e.y, function (f) {
				if (f.ofClass(o.m)) {
					w.mj = w.m(f.body(), e.x, e.y)
				}
			})
		})
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(w.mx, w.my)
			}
		})
		$.oMU(function () {
			w.M()
		})
		return w
	}
	mJ.mF = function (fo) {
		var mJ = this
		mJ.sMF = function (mF) {
			this.SetMaxForce(mF)
			return this
		}
		return U(fo) ? this.GetMaxForce() :
				this.sMF(fo)
	}
	mJ.tg = function (a, b) {
		var mJ = this
		mJ.sT = function (a, b) {
			var mJ = this
			mJ.ST = function () {
				var mJ = this
				mJ.SetTarget.apply(mJ, arguments);
				return mJ
			}
			return mJ.ST(O(a) ? a : V(a, b))
		}
		return (U(a)) ? this.GetTarget() :
				this.sT(a, b)
	}
	$mJ = $mJD = function (a, b) {
		var g = G(arguments)
		var jD = new b2d.MJD()
		if (a) {
			jD.A(a)
		}
		if (b) {
			jD.B(b)
		}
		return jD
	}
	w.mJ = function (b) {
		var w = this, g = G(arguments)
		if (g.u) {
			return 0
		}
		var j = w.CJ(
				$mJD(w.GGB(), b).sT(mX, mY)
		)
		j.mF(300)// * b.mass()
		j.mF(200000)
		j.fq(.5)
		j.dm()
		// default freqency is 5!!, maxF 30000, dmRat .7
		//$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())
		return j
	}
	w.killMJ = function () {
		var w = this
		if (w._mJ) {
			w.DJ(w._mJ);
			w._mJ = 0
		}
		return w
	}
	w.tgMJ = function () {
		var w = this
		var b = w.bAt(mX, mY)
		w._mJ = w._mJ ? w._mJ :
				b ? w.mJ(b) :
						0
		if (w._mJ) {
			w._mJ.tg(V(mX, mY))
		}
		return w
	}
	w.handleMJ = function () {
		var w = this
		w._mD ? w.tgMJ() :
				w.killMJ()
		return w
	}
	w.mSetup = function () {
		$.md(function (e) {
			$mXY = function (e, x, y) {
				mx = e.clientX - x
				my = e.clientY - y
				mX = mx / 30
				mY = my / 30
			}
			var x = w.x
			var y = w.y
			w._mD = 1
			$mXY(e, x, y)
			$.mm(function (e) {
				$mXY(e, x, y)
			})
			// *** need to change to pagex(so can scroll page?).. 
			// but i think it messes up for mobile
		})
		$.mu(function () {
			w._mD = 0
		})
	}
	BOXMOUSEJT = BMJ = function () {
		var mouseJoint
		m_iterations = 10
		m_timeStep = 1 / 30
		w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
		_.ev(.1, function () {
			if (mouseJoint) {
				var mx = mouseX / 30;
				var my = mouseY / 30;
				var v = V(mx, my)
				mouseJoint.SetTarget(v)
			}
			w.go(1 / 5, '+')
		})
		$bi()
		_.ev(2, function () {
			$ba()
		})
		mousePVec = V()
		//stage.MD(createMouse);
		//stage.MU(destroyMouse);
		$cv.mousedown(function (e) {
			$l('mousedown')
			mouseX = mx = e.clientX
			mouseY = my = e.clientY
			createMouse(e)
		})
	}
	function createMouse(e) {
	 
		var body = GetBodyAtMouse()
		if (body) {
			$l('found body')
			var mouseJointDef = $mJtD(w.GetGroundBody(), body)
			mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
			mouseJointDef.maxForce = 30000;
			//mouseJointDef.timeStep = m_timeStep;
			mouseJoint = w.CreateJoint(mouseJointDef)
		}
	}
	
	function destroyMouse(e) {
		if (mouseJoint) {
			w.DestroyJoint(mouseJoint);
			mouseJoint = null
		}
	}
	
	function GetBodyAtMouse(includeStatic) {
		$l('getBodyAtMouse')
		var mouseXWorldPhys = mouseX / 30;
		var mouseYWorldPhys = mouseY / 30;
		mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
		aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
		var shapes = []
		var count = w.QueryAABB(aabb, shapes)
		var bod = null;
		_.t(count, function (i) {
			if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
				var tShape = shapes[i]
				var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
				if (inside) {
					body = tShape.GetBody()
					//	break;
				}
			}
		})
		return body;
	}
	
	function boxMouse_() {
		w.$ = function (fn) {
			var w = this
			w.UI().click(function (e) {
				fn({x: w.mx, y: w.my, e: e})
			})
			return w
		}
		w.$$ = function (fn) {
			var w = this
			w.UI().dblclick(function (e) {
				fn({x: w.mx, y: w.my, e: e})
			})
			return w
		}
		w.mm = function (fn) {
			var w = this, g = G(arguments)
			$.mousemove(function (e) {
				var o = {
					x: w.mx,
					y: w.my,
					X: e.clientX,
					Y: e.clientY,
					e: e
				}
				fn(o)
			})
			return w
		}
		w.md = function (fn) {
			var w = this
			w.i.c.mousedown(function (e) {
				var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
				w.q(w.mx, w.my, function (f) {
					if (f) {
						o.f = f;
						o.b = f.B()
					}
				})
				fn(o)
			})
			return w
		}
		w.mu = function (fn) {
			var w = this, $cv = $(w.i.canvas)
			$cv.mouseup(function (e) {
				fn({
					x: w.mx,
					y: w.my,
					e: e
				})
			})
			return w
		}
		w.mdq = function (fn) {
			var w = this
			w.md(function (e) {
				w.q(e.x, e.y, function (f) {
					fn(f, e)
				})
			})
			return this
		}
		w.e$ = function () {
			var g = G(arguments), o
			o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
			this.e(function (b) {
				if (b.of(o.k)) {
					b.$(o.fn)
				}
			})
			return this
		}
		BOXMOUSEJT = BMJ = function () {
			var mouseJoint
			m_iterations = 10
			m_timeStep = 1 / 30
			w = $bW().sDD($dD($cv = $.c('z', 1800, 1500)))
			_.ev(.1, function () {
				if (mouseJoint) {
					var mx = mouseX / 30;
					var my = mouseY / 30;
					var v = V(mx, my)
					mouseJoint.SetTarget(v)
				}
				w.go(1 / 5, '+')
			})
			$bi()
			_.ev(2, function () {
				$ba()
			})
			mousePVec = V()
			//stage.MD(createMouse);
			//stage.MU(destroyMouse);
			$cv.mousedown(function (e) {
				$l('mousedown')
				mouseX = mx = e.clientX
				mouseY = my = e.clientY
				createMouse(e)
			})
		}
		function createMouse(e) {
			$l('createMouse')
			var body = GetBodyAtMouse()
			if (body) {
				$l('found body')
				var mouseJointDef = $mJtD(w.GetGroundBody(), body)
				mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
				mouseJointDef.maxForce = 30000;
				//mouseJointDef.timeStep = m_timeStep;
				mouseJoint = w.CreateJoint(mouseJointDef)
			}
		}
		
		function destroyMouse(e) {
			if (mouseJoint) {
				w.DestroyJoint(mouseJoint);
				mouseJoint = null
			}
		}
		
		function GetBodyAtMouse(includeStatic) {
			$l('getBodyAtMouse')
			var mouseXWorldPhys = mouseX / 30;
			var mouseYWorldPhys = mouseY / 30;
			mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
			var aabb = new b2AABB();
			aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
			aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
			var shapes = []
			var count = w.QueryAABB(aabb, shapes)
			var bod = null;
			_.t(count, function (i) {
				if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
					var tShape = shapes[i]
					var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
					if (inside) {
						body = tShape.GetBody()
						//	break;
					}
				}
			})
			return body;
		}
	}
	
	function mouseJts() {
	 
		mJD.setTarg = function (x, y) {
			var v = V(x, y)
			this.target = v.d()
			return this
		}
		mJD.getTarg = function () {
			return this.target.m()
		}
		mJD.targ = mJD.tg = function (x, y) {
			return U(x) ? this.getTarg() : this.setTarg(x, y)
		}
		mJD.dmpRat = function (dR) {
			this.dampingRatio = dR
			return this
		}
		mJD.frq = mJD.freq = function (fq) {
			this.frequency = fq
			return this
		}
		mJD.mxFo = mJD.mF = function (mF) {
			this.maxForce = mF
			return this
		}
		$mJtD = $mJt = function (a, b) {
			if (w.log) {
				$l('mJt')
			}
			var jt = new b2d.MouseJointDef
			jt.bodyA = a
			jt.bodyB = b
			return jt
		}
////
		mJ.setTarg = function (x, y) {
			var v = V(x, y)
			this.SetTarget(v.d())
			return this
		}
		mJ.getTarg = function () {
			return this.GetTarget().m()
		}
		mJ.targ = mJ.tg = function (x, y) {
			return U(x) ? this.getTarg() : this.setTarg(x, y)
		}
		mJ.dampRat = mJ.dmpRat = function (dR) {
			if (U(dR)) {
				return this.GetDampingRatio()
			}
			this.SetDampingRatio(dR)
			return this
		}
		mJ.mxFo = function (fo) {
			if (U(fo)) {
				return this.GetMaxForce()
			}
			this.SetMaxForce(fo)
			return this
		}
		mJ.frq = mJ.freq = mJ.frequency = function (hz) {
			if (U(hz)) {
				return this.GetFrequency()
			}
			this.SetFrequency(hz)
			return this
		}
		w._mJ = function (bod, x, y) {
			var mj = $mJtD(this.ground(), bod)
			if (N(x)) {
				mj.targ(x, y)
			}
			return mj
		}
		w.mJ = function () {
			var w = this, g = G(arguments), o
			o = g.O ? g.f : {b: g.f, x: g.s, y: g.t, dR: g.fo, mF: g.fi, fq: g.si}
			o.dR = N0(o.dR)
			o.mF = N(o.mF, 5000000) //md.maxForce = 1000 * o.b.GetMass()
			var md = w._mJ(o.b, o.x, o.y)
			md.dmpRat(o.dR).mxFo(o.mF)
			if (N(g.si)) {
				md.freq(g.si)
			}
			return w.J(md)
		}
// world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
		WBF = function () {
			W()
			w.log = 1
			w.D(500, 300).f([['b', 100]])
			b = w.D(400, 300)
			//b.f('r', 100,'-')
			b.f([
				['r', 100, '-']
			])
		}
		function _mouseJts() {
			$L()
			mJD.setTarg = function (x, y) {
				var v = V(x, y)
				this.target = v.d()
				return this
			}
			mJD.getTarg = function () {
				return this.target.m()
			}
			mJD.targ = mJD.tg = function (x, y) {
				return U(x) ? this.getTarg() : this.setTarg(x, y)
			}
			mJD.dmpRat = function (dR) {
				this.dampingRatio = dR
				return this
			}
			mJD.frq = mJD.freq = function (fq) {
				this.frequency = fq
				return this
			}
			mJD.mxFo = mJD.mF = function (mF) {
				this.maxForce = mF
				return this
			}
			$mJtD = $mJt = function (a, b) {
				if (w.log) {
					$l('mJt')
				}
				var jt = new b2d.MouseJointDef
				jt.bodyA = a
				jt.bodyB = b
				return jt
			}
////
			mJ.setTarg = function (x, y) {
				var v = V(x, y)
				this.SetTarget(v.d())
				return this
			}
			mJ.getTarg = function () {
				return this.GetTarget().m()
			}
			mJ.targ = mJ.tg = function (x, y) {
				return U(x) ? this.getTarg() : this.setTarg(x, y)
			}
			mJ.dampRat = mJ.dmpRat = function (dR) {
				if (U(dR)) {
					return this.GetDampingRatio()
				}
				this.SetDampingRatio(dR)
				return this
			}
			mJ.mxFo = function (fo) {
				if (U(fo)) {
					return this.GetMaxForce()
				}
				this.SetMaxForce(fo)
				return this
			}
			mJ.frq = mJ.freq = mJ.frequency = function (hz) {
				if (U(hz)) {
					return this.GetFrequency()
				}
				this.SetFrequency(hz)
				return this
			}
			w._mJ = function (bod, x, y) {
				var mj = $mJtD(this.ground(), bod)
				if (N(x)) {
					mj.targ(x, y)
				}
				return mj
			}
			w.mJ = function () {
				var w = this, g = G(arguments), o
				o = g.O ? g.f : {b: g.f, x: g.s, y: g.t, dR: g.fo, mF: g.fi, fq: g.si}
				o.dR = N0(o.dR)
				o.mF = N(o.mF, 5000000) //md.maxForce = 1000 * o.b.GetMass()
				var md = w._mJ(o.b, o.x, o.y)
				md.dmpRat(o.dR).mxFo(o.mF)
				if (N(g.si)) {
					md.freq(g.si)
				}
				return w.J(md)
			}
// world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
			WBF = function () {
				W()
				w.log = 1
				w.D(500, 300).f([['b', 100]])
				b = w.D(400, 300)
				//b.f('r', 100,'-')
				b.f([
					['r', 100, '-']
				])
			}
			function _pre() {
				w.ground = function () {
					return this.GetGroundBody()
				}
				b2d.MouseJointDef = b2d.Joints.b2MouseJointDef
				b2d.MouseJoint = b2d.Joints.b2MouseJoint
				mJD = b2d.MouseJointDef.prototype
				mJ = b2d.MouseJoint.prototype
			}
			
			function alpha() {

//if (this.log) {$l('w.mJ')};  make function class with logging?  wrap all my functions...
				mJ.ancA = function () {
					return this.GetAnchorA()
				}
				mJ.ancB = function () {
					return this.GetAnchorB()
					// this.m_bodyB.GetWorldPoint(this.m_localAnchor)
				}
				mJ.getImp = function () {
					return this.m_impulse
				}
				mJ.getMass = function () {
					return this.m_mass
				}
				mJ.reacFo = function (fo) {
					if (U(fo)) {
						return GetReactionForce()
					}
					this.SetReactionForce(fo)
					return this
				}
				mJ.getBeta = function () {
					return this.m_beta
				}
				mJ.getGamma = function () {
					return this.m_gamma
				}
			}
		}
	}
	 
		w.ground = function () {
			return this.GetGroundBody()
		}
 
	
	function alpha() {

//if (this.log) {$l('w.mJ')};  make function class with logging?  wrap all my functions...
		mJ.ancA = function () {
			return this.GetAnchorA()
		}
		mJ.ancB = function () {
			return this.GetAnchorB()
			// this.m_bodyB.GetWorldPoint(this.m_localAnchor)
		}
		mJ.getImp = function () {
			return this.m_impulse
		}
		mJ.getMass = function () {
			return this.m_mass
		}
		mJ.reacFo = function (fo) {
			if (U(fo)) {
				return GetReactionForce()
			}
			this.SetReactionForce(fo)
			return this
		}
		mJ.getBeta = function () {
			return this.m_beta
		}
		mJ.getGamma = function () {
			return this.m_gamma
		}
	}
	
	w.mouseJAt = function (p, kind) {
		var w = this, mj
		if (N(p)) {
			p = V(p, kind)
		}
		w.XY(p.x, p.y, function (f) {
			mj = f.body().mouseJoint(p)
		})//, kind
		return mj
	}
//MOUSE JOINTS
	b2d.mouseDef = MouseJointDef = mJD = function (a, b) {//MouseJDef=b2MJD=
		var j = new b2MouseJointDef()
		j.sT = function (a, b) {//=j.tS=    j.tg=j.tgS=j.ts=
			j.target.Set(a, b)
			return j
		}
		j.cC = j.clC = j.clCn = j.cc = function (a) {
			j.collideConnected = a ? true : false
			return j
		}
		j.mF = j.mf = function (a) {
			j.maxForce = a;
			return j
		}
		j.A = function (a) {
			j.bodyA = a
			return j
		}
		j.B = function (b) {
			j.bodyB = b
			return j
		}
		if (a) {
			j.A(a)
		}
		if (b) {
			j.B(b)
		}
		return j
	}
	b2d.mouseJ = function (ground, b, tg, damp, maxForce) {
		var mJD = new b2d.Joints.b2MouseJointDef()
		mJD.bodyA = ground
		if (b) {
			mJD.bodyB = b
		}
		;
		if (U(b)) {
			alert('body required!');
			return false
		}
		if (tg) {
			mJD.target = tg
		} //target
		mJD.dampingRatio = N(damp) ? damp : 0
		mJD.maxForce = N(maxForce) ? maxForce : b.GetMass() * 1000
		//mJD.collideConnected = true
		return mJD
	}
	w.m = w.mou = function (b, x, y) {
		var w = this, j, p
		mJD = new b2d.Joints.b2MouseJointDef()
		mJD.bodyA = w.GetGroundBody()
		mJD.bodyB = b
		mJD.target = V(x, y).div()
		mJD.dampingRatio = 0
		mJD.maxForce = 5000
		mJD.collideConnected = true
		j = w.J(mJD)
		j.tg = function (x, y) {
			var j = this
			if (U(x)) {
				return j.GetTarget().mult()
			}
			j.SetTarget(V(x, y).div())
			return j
		}
		return j
	}
	w.M = function () {
		var w = this
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	}
//***
	MJWORKS = function () {
		w = b2d.W({
			//g:0
		})
		b = w.B(600, 300, 'r', 100).den(1).rest(.5)
		joint = false;
		$.mousemove(function (e) {
			m(e)
			if (joint) {
				j.tg(mx, my)
			}
		})
		$.mousedown(function (e) {
			m(e)
			j = w.mou(b, V(mx, my).div());
			joint = true
		});
		$.mouseup(function () {
			w.j(j);
			joint = false
		})
		function m(e) {
			mx = e.clientX;
			my = e.clientY
		}
	}
	$.oMM = function (fn) {
		this.mousemove(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return this
	}
	$.oMD = function (fn) {
		var $ = this
		$.mousedown(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	$.oMU = function (fn) {
		this.mouseup(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return this
	}
	$.M = function () {
		var $ = this
		$.oMD(function (x, y) {
			_.x = x;
			_.y = y
		})
		$.oMM(function (x, y) {
			_.x = x;
			_.y = y
		})
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		return this
	}
	$.M0 = function () {
		var $ = this
		$.oMD(function (x, y) {
			_.x = x;
			_.y = y
		})
		$.oMM(function (x, y) {
			_.x = x;
			_.y = y
		})
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		return this
	}
	w = w = b2d.World.prototype
	MJYANOSCRIPT = function () {
		w = b2d.W()
		b = w.B(600, 300, 'r', 50).den(1).rest(.5)
		$.M()
		$.oMM(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.M()
		})
		$.oMD(function (x, y) {
			w.mj = w.m(b, _)
		})
	}
	w.mTrack = function (b) {
		var w = this
		$.oMM(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.M()
		})
		$.oMD(function (x, y) {
			w.mj = w.m(b, _)
		})
		return w
	}
	w.mTrackTransport = function (b) {
		var w = this
		$.oMM(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.M()
		})
		$.oMD(function (x, y) {
			b.XY(x, y)
			w.mj = w.m(b, _)
		})
		return w
	}
	b.mJ = b.mouse = b.mouseJ = b.mouseJoint = function (x, y) {
		var b = this, w = b.wor(),
				v = V(x, y),
				mj = w.mouseJ(b, v)
		return mj
	}
}