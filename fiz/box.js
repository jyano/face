$l('box/box0 sayd welcome to BOX !')
bx = b2d = Box2D
//big 3
bx.C = bx.Collision
bx.D = bx.Dynamics
bx.Cm = bx.Common
//math
bx.M = bx.Math = bx.Cm.Math
//main objects
bx.W = b2World = bx.D.b2World
bx.FD = b2FixtureDef = bx.D.b2FixtureDef
bx.F = b2Fixture = bx.D.b2Fixture
bx.BD = b2BodyDef = bx.D.b2BodyDef
bx.B = b2Body = bx.D.b2Body
bx.sB = bx.B.b2_staticBody
bx.dB = bx.B.b2_dynamicBody
//mathy
bx.V = b2Vec2 = bx.Vec = bx.M.b2Vec2
bx.AABB = b2AABB = bx.C.b2AABB
bx.M2 = bx.Mat22 = bx.M.b2Mat22
bx.M3 = bx.Mat33 = bx.M.b2Mat33
//shape
bx.Hs = bx.C.Shapes
bx.H = b2Shape = bx.Hs.b2Shape
bx.CH = b2CircleShape = bx.Hs.b2CircleShape
bx.PH = b2PolygonShape = bx.Hs.b2PolygonShape
//mass
bx.MD = b2MassData = bx.Hs.b2MassData
//contact
bx.Cxs = bx.D.Contacts
bx.Cx = bx.Cxs.b2Contact
joints()
function joints(){

//Joints
	bx.Jts = bx.Js = bx.D.Joints
//joint
	bx.Jt = bx.J = bx.Jts.b2Joint
	bx.JtD = bx.JD = bx.Jts.b2JointDef
//distance joints
	bx.DJD = bx.Jts.b2DistanceJointDef
	bx.DJ = bDJ = bx.distanceJoint = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint //=bx.Jts.b2DistanceJoint
	bx.DJ = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint
//mouse joints
	bx.MJD = bx.Jts.b2MouseJointDef
	bx.MJ = bx.Jts.b2MouseJoint
//rev joints
	bx.RJD = bx.RevoluteJointDef = bx.Jts.b2RevoluteJointDef
	bx.RJ = bx.RevoluteJoint = bx.Jts.b2RevoluteJoint
// prismatic jonts
	bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef
	bx.PJD = bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef}
 
//controllers
bx.Cos = bx.D.Controllers

co = bx.Cos.b2Controller.prototype
$pt = {}
$pt.dD = (bx.DD = bx.D.b2DebugDraw).prototype
$pt.v = $pt.vc = bx.V.prototype
$pt.ab = bx.C.b2AABB.prototype
$pt.w = bx.W.prototype
$pt.fD = $pt.fd = bx.FD.prototype // bx.FD.prototype
$pt.f = bx.F.prototype //bx.F.prototype// bx.Fixture.prototype
$pt.bD = bx.BD.prototype // bx.BD.prototype
$pt.b = bx.B.prototype //= b2.D.b2Body.prototype
$pt.bH = bx.H.prototype //$pt.H = $pt.bH = bx.Hs.b2Shape.prototype;$pt.H = $pt.bH = bx.Hs.b2Shape.prototype;
$pt.cH = bx.CH.prototype
$pt.pH = bx.PH.prototype
$pt.l = $pt.cL = bx.D.b2ContactListener.prototype // = bx.CL.prototype
$pt.cx = bx.Cx.prototype
$pt.flDa = bx.D.b2FilterData.prototype
$pt.cxI = bx.D.b2ContactImpulse.prototype
mJD = $pt.mJD = bx.MJD.prototype
mJ = $pt.mJ = bx.MJ.prototype
jt = $jt = bx.Jt.prototype
$jD = bx.JtD.prototype
$PT = function () {
	dD = $pt.dD
	v = $pt.v
	ab = $pt.ab
	w = $pt.w
	fD = $pt.fD;
	f = $pt.f
	bD = $pt.bD
	b = $pt.b;
	bH = $pt.bH;
	cH = $pt.cH;
	pH = $pt.pH
	cL = $pt.l
	cx = $pt.cx
	jD = jtD = $jD
	j = jt = $jt
	mJD = $pt.mJD
	mJ = $pt.mJ
}
$PT.jts = function () {
	$pt.jD = $pt.jtD = bx.Jts.b2JtD.prototype //bx.JD.prototype
	$pt.j = $pt.jt = bx.Jts.b2Jt.prototype //$pt.j = bx.J.prototype
	$pt.dJD = jd = bx.Jts.b2DistanceJointDef.prototype //$pt.dJD = bx.Jts.b2DistanceJointDef.prototype
	$pt.dJ = bx.Jts.DJt.prototype //$pt.dJ = bx.Jts.b2Joint.prototype
	$pt.mJtD = bx.Jts.MJtD.prototype //$pt.mJD = $pt.mD = bx.MJD.prototype // $pt.mJD = bx.MouseJointDef.prototype
	$pt.mJt = bx.MJ.prototype //$pt.mJ = bx.Jts.b2MouseJoint.prototype$pt.mJ = bx.MouseJoint.prototype
	$pt.rJtD = bx.RJtD.prototype
	$pt.rJt = bx.RJt.prototype
	$pt.pJt = bx.Jts.b2PJt.prototype //$pt.pJ = bx.Js.b2PrismaticJoint.prototype
	$pt.pJtD = pd = bx.Js.b2PrJtD.prototype //$pt.pJD = pd = bx.Jts.b2PrismaticJointDef.prototype
	$pt.wJtD = bx.Jts.b2WJtD // = bx.Js.b2WeldJointDef
	$pt.wJt = bx.WedJt //$pt.wJ = bx.Js.b2WeldJoint
	$pt.jD = $pt.jtD = bx.Jts.b2JtD.prototype //bx.JD.prototype
	$pt.j = $pt.jt = bx.Jts.b2Jt.prototype //$pt.j = bx.J.prototype
	$pt.dJD = jd = bx.Jts.b2DistanceJointDef.prototype //$pt.dJD = bx.Jts.b2DistanceJointDef.prototype
	$pt.dJ = bx.Jts.DJt.prototype //$pt.dJ = bx.Jts.b2Joint.prototype
	$pt.mJtD = bx.Jts.MJtD.prototype //$pt.mJD = $pt.mD = bx.MJD.prototype // $pt.mJD = bx.MouseJointDef.prototype
	$pt.mJt = bx.MJ.prototype //$pt.mJ = bx.Jts.b2MouseJoint.prototype$pt.mJ = bx.MouseJoint.prototype
	$pt.rJtD = bx.RJtD.prototype
	$pt.rJt = bx.RJt.prototype
	$pt.pJt = bx.Jts.b2PJt.prototype //$pt.pJ = bx.Js.b2PrismaticJoint.prototype
	$pt.pJtD = pd = bx.Js.b2PrJtD.prototype //$pt.pJD = pd = bx.Jts.b2PrismaticJointDef.prototype
	$pt.wJtD = bx.Jts.b2WJtD // = bx.Js.b2WeldJointDef
	$pt.wJt = bx.WedJt //$pt.wJ = bx.Js.b2WeldJoint
	jD = $pt.jD
	j = $pt.j
	j = bx.J.prototype
	mJD = $pt.mJD
	mJ = $pt.mJ
}

$PT.cos = function () {
	$pt.co = bx.Cos.b2Co.prototype //bx.Co.prototype  // bx.Cos.b2Controller.prototype
//$pt.aCo = bx.CAC.prototype
	$pt.aCo = bx.Cos.ConstantAccelCo.prototype //$pt.aCo = bx.Cos.b2ConstantAccelController.prototype
	$pt.bCo = bx.BuoyancyCo = bx.BCo = bx.BuCo = bx.BuoyCo //$pt.bCo = bx.D.Controllers.b2BuoyancyController.prototype
//$pt.bCo = bx.BC.prototype
	$pt.uJt = puJt
	$pt.bCo = bx.Cos.b2BuoyancyController.prototype//bCo = bx.BuoyancyController= bx.Cos.b2BuoyancyController //$pt.bCo = bx.D.Controllers.b2BuoyancyController.prototype
//$pt.fCo = bx.CFC.prototype
	$pt.fCo = bx.D.Controllers.b2ConstantForceController.prototype //$pt.fCo = bx.Cos.b2ConstantForceController.prototype
	$pt.gCo = bx.Cos.GCo.prototype //$pt.gCo = bx.D.Controllers.b2GravityController.prototype//$pt.gCo = bx.GC.prototype
	$pt.tCo = bx.Cos.TCo.prototype
//$pt.tCo = bx.TDC.prototype //$pt.tCo = bx.D.Controllers.b2TensorDampingController.prototype
	co = $pt.co;
	fCo = $pt.fCo;
	aCo = $pt.aCo;
	gCo = $pt.gCo
	tCo = $pt.tCo;
	bCo = $pt.bCo
}
$PT()
bH = bx.H.prototype
arr = [V(-30, 0), V(0, -150), V(120, 0)]
bx.iV = bx.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
bx.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
bx.iBD = bx.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
bx.iB = bx.isB = bx.isBody = isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
bx.iFD = bx.isFD = bx.isFixtDef = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
bx.iF = bx.isFixt = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}
bx.iV = bx.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
bx.iH = bx.isShape = function (h) {
	if (!O(h)) {
		return
	}
	var ty = h.constructor.name
	return ty == "b2PolygonShape" ? 'p' :
			ty == "b2CircleShape" ? 'c' :
					ty == "b2AShape" ? 'a' :
							false
	alt = function (h) {
		var typ
		if (O(h)) {
			typ = h.constructor.name
			return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
		}
	}
}
bx.iPH = bx.iP = function () {
	return this.iH() == 'p'
}
bx.iCH = bx.iC = function () {
	return this.iH() == 'c'
}
bx.iAH = bx.iA = function () {
	return this.iH() == 'a'
}
bH.ty = function () {
	return b2d.iH(this)
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
bH.TP = function () {
	return this.TestPoint.apply(this, arguments)
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
bx.divPoints = bx.divPts = bx.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
			g.s ? g : //passed in verts ([],[],[])
					g.f,
			bx.div
	) //passed an array [[],[],[]]
	//bx.div <- function div(v){return V(v).div()}	
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
bx.sub = function (vs, p) { //bx.ptsMinus = bx.vertsMinus =
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
bx.xy = function (o) {
	if (bx.iF(O(o.x))) {
		o.x = o.x.B()
	}
	if (O(o.x)) {
		o.x = F(o.x.X) ? o.x.X() : o.x.x
	}
	if (O(o.y)) {
		o.y = F(o.x.Y) ? o.x.Y() : o.x.y
	}
	return o
}
bx.add = function (vs, p) {
	return _.m(vs, function (v) {
		return v.add(p)
	})
}
bx.d = bx.div = function (v) {
	return V(v).div()
}
bx.m = bx.mult = function (v) {
	return V(v).mult()
	function alt() {
		bx.m = function (vs) {
			return _.m(vs, bx.mult)
		}
	}
}
v.sub = v.s = function () {
//subtract from one vert?
//subtract from a whole bunch of verts and get back array?
	var v = this, g = G(arguments), o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
v.add = v.a = function () {
	var v = this, g = G(arguments) //if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) : V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
v.A = function () {
	var v = this, g = G(arguments), v1
	if (A(g[0]) && U(g[1])) {
		_.e(g, function (g) {
			v1 = V(g)
			v.add(v1.x, v1.y)
		})
	}
	else {
		v1 = V(g)
		v.add(v1.x, v1.y)
	}
}
v.add = v.a = function () {
	var v = this, g = G(arguments), v1
	if (g[2]) {
		return _.m(g, function (g) {
			return v.add(g)
		})
	}
	v1 = g.u ? V(1, 1) : V(g.f, g[1])
	return V(
			v.x + v1.x,
			v.y + v1.y
	)
	function alt() {
		v.a = v.add = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1
			y = N(y) ? y : x
			var v = V(this.x + x, this.y + y)
			return v
		}
		v.add = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1
			y = N(y) ? y : x
			var v = V(this.x + x, this.y + y)
			return v
		}
		v.add = function (vec, y) {
			var v = this
			vec = U(vec) ? V(1, 1) : V(vec, y)
			return V(v.x + vec.x, v.y + vec.y)
		}
	}
}
v.s = v.sub = function () {
	var v = this, g = G(arguments),
			o = V(g[0], g[1])
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
	function alt() {
		v.sub = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 1;
			y = N(y) ? y : x
			var v = V(this.x - x, this.y - y)
			return v
		}
	}
}
v.m = v.mult = function (n) {
	n = N(n, 30)
	var v = this
	v = _.clone(v)
	v.Multiply(n)
	return v
	function alt() {
		v.m = v.mult = function (num) {
			num = N(num) ? num : 30
			var v = _.clone(this)
			v.Multiply(num)
			return v
		}
	}
}
v.d = v.div = function (n) {
	return this.mult(1 / N(n, 30))
	function alt() {
		v.d = v.div = function (num) {
			num = N(num) ? num : 30
			return this.mult(1 / num)
		}
	}
}
V00 = function (x, y) {
	if (x === '*') {
		x = M.r() * 10
	}
	if (y === '*') {
		y = M.r() * 10
	}
	return V(N0(x), N0(y))
}
_vec = function (o, g) {
	var v = new bx.Vec(o.x, o.y)
	if (g.n || g.d) {
		v = v.d()
	}
	if (g.p || g.m) {
		v = v.m()
	}
	return v
}
M.V = function fn() {//x, y, x2, y2
	var g = G(arguments)
	if (g.A) {
		return fn.apply(null, g.f)
	}
	if (g.O) {
		return fn(g.f.x, g.f.y)
	}
	return N(g.t) ? {
		x: (g.f - g.t) / 2,
		y: (g.s - g.fo) / 2
	} : {x: N(g.f, 0), y: N(g.s, 0)}
}
V = function () {
	var vec = M.V.apply(null, arguments)
	return new bx.V(vec.x, vec.y)
}
Vold = function (x, y, x2, y2) {
	var g = G(arguments), x = g.f, y = g.s, x2 = g.t, y2 = g.fo, v, o
	o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	if (A(x)) {
		y2 = x[3]
		x2 = x[2]
		y = x[1]
		x = x[0]
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	if (N(y2)) {
		x = (x - x2) / 2
		y = (y - y2) / 2
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
	}
	else if (O(x)) {
		o = obX(x)
		x = o.x
		y = o.y
	}
	o.x = N0(o.x)
	o.y = N(o.y, o.x)
	return _vec({x: N0(x), y: N(y, x)}, g)
	function alt() {
		V = function (x, y, x2, y2) {
			var g = G(arguments),
					x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
					v, o
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			if (A(x)) {
				y2 = x[3]
				x2 = x[2]
				y = x[1]
				x = x[0]
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			if (N(y2)) {
				x = (x - x2) / 2
				y = (y - y2) / 2
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
			}
			else if (O(x)) {
				o = obX(x)
				x = o.x
				y = o.y
			}
			o.x = N0(o.x)
			o.y = N(o.y, o.x)
			return _vec({x: N0(x), y: N(y, x)}, g)
		}
		function otherAlts() {
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g[0], y = g[1], x2 = g[2], y2 = g[3],
						vec
				if (A(x)) {
					y2 = x[3];
					x2 = x[2];
					y = x[1];
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2;
					y = (y - y2) / 2
				}
				else if (O(x)) {
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x) ? x : 0
				y = N(y) ? y : x
				vec = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					vec = vec.div()
				}
				if (g.p || g.m) {
					vec = vec.mult()
				}
				return vec
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g[0], y = g[1], x2 = g[2], y2 = g[3],
								vec
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						vec = new bx.M.b2Vec2(x, y)
						if (g.n || g.d) {
							vec = vec.div()
						}
						if (g.p || g.m) {
							vec = vec.mult()
						}
						return vec
					}
				}
			}
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
						v
				if (A(x)) {
					y2 = x[3]
					x2 = x[2]
					y = x[1]
					x = x[0]
				}
				if (N(y2)) {
					x = (x - x2) / 2
					y = (y - y2) / 2
				}
				else if (O(x)) {
					if (bx.iF(O(x))) {
						x = x.B()
					}
					y = F(x.Y) ? x.Y() : x.y
					x = F(x.X) ? x.X() : x.x
				}
				x = N(x, 0)
				y = N(y, x)
				v = new bx.Common.Math.b2Vec2(x, y)
				if (g.n || g.d) {
					v = v.d()
				}
				if (g.p || g.m) {
					v = v.m()
				}
				return v
				function alt() {
					V = function (x, y, x2, y2) {
						var g = G(arguments), x = g[0], y = g[1], x2 = g[2], y2 = g[3], v
						if (A(x)) {
							y2 = x[3];
							x2 = x[2];
							y = x[1];
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2;
							y = (y - y2) / 2
						}//for dist difs?
						else if (O(x)) {
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x) ? x : 0
						y = N(y) ? y : x
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.div()
						}
						if (g.p || g.m) {
							v = v.mult()
						}
						return v
					}
					V = function (x, y, x2, y2) {
						var g = G(arguments),
								x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
								v
						if (A(x)) {
							y2 = x[3]
							x2 = x[2]
							y = x[1]
							x = x[0]
						}
						if (N(y2)) {
							x = (x - x2) / 2
							y = (y - y2) / 2
						}
						else if (O(x)) {
							if (bx.iF(O(x))) {
								x = x.B()
							}
							y = F(x.Y) ? x.Y() : x.y
							x = F(x.X) ? x.X() : x.x
						}
						x = N(x, 0)
						y = N(y, x)
						v = new bx.Common.Math.b2Vec2(x, y)
						if (g.n || g.d) {
							v = v.d()
						}
						if (g.p || g.m) {
							v = v.m()
						}
						return v
					}
				}
			}
		}
	}
}
//https://en.wikipedia.org/wiki/Bounding_volume
bx.mat22 = function (v1, v2) {
	var m = new bx.Mat22()
	m.SetVV(v1, v2)
	return m
}
bx.AB = bx.C.b2AABB
ab = bx.AB.prototype
ab.LB = function (x, y) {
	this.lowerBound.Set(x, y)
	return this
}
ab.UB = function (x, y) {
	this.upperBound.Set(x, y)
	return this
}
ab.lUB = function () {
	var ab = this, g = G(arguments),
			o = {
				x1: g.f, y1: g.s,
				x2: g.t, y2: g.fo
			}
	if (g.n) {
		o.x1 /= 30;
		o.y1 /= 30;
		o.x2 /= 30;
		o.y2 /= 30
	}
	ab.LB(o.x1, o.y1)
	ab.UB(o.x2, o.y2)
	return ab
}
ab.pt = function (x, y) {
	var g = G(arguments)
	return this.lUB(alg(x, '-'), alg(y, '-'), alg(x), alg(y))
	function alg() {
		var g = G(arguments)
		return g.f / 30 + (g.n ? -.01 : .01)
	}
}
$AB = function (a, b, c, d, e, f) {
	return new bx.AB()
}
bx.DD = b2DebugDraw = bx.D.b2DebugDraw
bx.DD.hBit = b2d.DD.e_shapeBit
dD.SS = dD.ctx = function (ctx) {
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
dD.SA = dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
//Get/SetAlpha(al:N)    used for lines
}
dD.SFA = dD.fA = dD.fAl = function (a) {
	var dD = this
	if (U(a)) {
		return dD.GetFillAlpha()
	}
	dD.SetFillAlpha(a)
	return dD
	//= dD.alpha = dD.fillAlpha
}
dD.SLT = dD.lT = function (lt) {
	var dD = this
	if (U(lt)) {
		return dD.GetLineThickness()
	}
	dD.SetLineThickness(lt);
	return dD
	// = dD.line
}
dD.SF = dD.fl = function (fl) {
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
dD.cv = function (cv) {
	cv = cv || $.c()
	return this.ctx($(cv)[0].getContext("2d"))
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
$dDAlt = function () {
	$dD = function () {
		var g = G(arguments), o, dbD = new b2DebugDraw()
		var DD = b2DebugDraw
		//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
		o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
		if ($.iC(o.cx)) {
			o.cx = $(o.cx).ctx()
		}
		o.sc = N(o.sc, 30)
		o.fl = o.fl || flags
		o.l = N(o.l, 20)
		o.al = N(o.al, .95)
		if (o.cx) {
			dbD.sprite(o.cx)
		}
		if (o.sc) {
			dbD.scale(o.sc)
		}
		dbD.flags(o.fl)
		dbD.alpha(N(o.al, 0.5))
		return _dbD = dbD
		function alt() {
			b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
				var dd = new b2d.DebugDraw()
				//can pass in either canvas or context
				if ($.isCan(sprite)) {
					sprite = sprite.ctx()
				}
				if (sprite) {
					dd.sprite(sprite)
				}
				if (scale) {
					dd.scale(scale)
				}
				if (flags) {
					dd.flags(flags)
				}
				dd.alpha(N(alpha) ? alpha : 0.5)
				// dd.line( N(line)? line :1 )
				// dd.SetLineThickness(1)
				return dd
			}
		}
	}
	$_DD = function () {
		return new b2d.DD
	}
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
$dD.hBit = $dD.shape = $dD.h = b2d.DD.e_shapeBit //1
$dD.jBit = $dD.jt = $dD.j = b2d.DD.e_jointBit //2
$dD.pair = $dD.p = b2d.DD.e_pairBit //8
$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20
bx.hBit = bx.DD.e_shapeBit
bx.jBit = bx.DD.e_jointBit
function another() {
	w.dD = w.dbD = w.bug = function () {
		var dbD = $dD.apply($dD, arguments)
		// this.scale = dd.scale()
		return this.SDD(dbD)
	}
	w.sDD = w.db = w.debug = function (d) {
		var w = this;
		return U(d) ? w.ggAuCl() :
				d === w ? w.auCl(0) :
						d === false ? w.auCl(1) :
								w.SDD(d)
//p.debugDraw  =p.dD= p.sDD=
	}
	w.dd = function (o) {
		var w = this
		if (o.clear !== false) {
			w.debug(b2d.debugDraw(
					w.context, 30).flags(shB || jB).alpha(.6).line(3000))
		} // w.bug(w.ctx, 30, '*', .6 )
		return w
	}
	w.db = w.debug = function (data) {
		
		//p.debugDraw  =p.dD= p.sDD=
		if (U(data)) {
			this.s.autoClear = this.s.autoClear ? false : true;
			return this
		}
		if (data === true) {
			this.s.autoClear = false;
			return this
		}
		if (data === false) {
			this.s.autoClear = true;
			return this
		}
		this.SDD(data)
		return this
	}
}
w.CF = function () {
	this.ClearForces();
	return this
}
w.DDD = function () {
	this.DrawDebugData();
	return this
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
can()
grav()
$Wor = function () {
	//= _$W
	var g = G(arguments), o
	o = // g.O? g.f:
			g.O_ ? {grav: g.f, doSleep: g.s} :
					N(g.s) ? {grav: V(g.f, g.s), doSleep: g.t} :
							N(g.f) ? {grav: V(0, g.f), doSleep: g.s} :
							{grav: V(0, 10), doSleep: g.f}
	o.doSleep = U(o.doSleep) ? true : o.doSleep ? true : false
	return w = new b2d.W(o.grav, o.doSleep)
}
$box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.bug = function (id) {
	var can, ctx
	can = id ? $("#" + id)[0] : $0("#canvas")
	ctx = can.getContext("2d")
	return this.SDD(
			$dD().ctx(ctx).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
}
w.loop = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
function can() {
	bx.can = function () {
		$('<canvas id="canvas" width="1000" height="800" ></canvas>').bor('10px dashed pink').A()
	}
	$.xI = function (id, col) {
		return $.cI(id).C(col)[0].getContext("2d")
	}
}
function grav() {
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	w.gv = w.G = function (x, y) {
		var w = this, v, gv
		var gv = w.GG()
		if (U(x)) {
			return gv
		}
		if (N(x)) {
			v = N(y) ? V(x, y) : V(0, x)
		}
		if (x == 'flip') {
			v = V(-gv.x, -gv.y)
		}
		return w.SG(v)
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
}
$boxFn = function (fn) {
	return function () {
		$box()
		fn()
	}
}
w.CJ = function (jtD) {
	return this.CreateJoint(jtD)
}
w.DJ = function (jt) {
	this.DestroyJoint(jt)
	return this
}
w.A = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w._sB = function (x, y, fD) {
	var b = this.CB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this._sB(x, y)
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}
//function kill() {
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
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
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
w.DB = function (a) {
	this.DestroyBody(a);
	return this
}
w.GBL = w.bLX = function () {
	return this.GetBodyList()
}
w.GGB = w.gB = function () {
	return this.GetGroundBody()
}
w.cCB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return b
}
w.cRB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cRF(r)
	return b
}
w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {
	var w = this, g = G(arguments);
	var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
}
w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}
w.dC = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.sC = function (x, y, r) {
	var w = this
	var b = w.sB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC_x = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__x = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}
function soon() {
	w.aRF = function () {
		var w = this, g = G(arguments)
		var b = w.sB(g.f, g.s)
		b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		return w
	}
	w.aCF = function (x, y, r) {
		var w = this
		var b = w.dB(x, y)
		var cF = b.cCF(r)
		return w
	}
	w.cF = function (bD, fD) {
		return this.cB(bD).cF(fD)
	}
}
w.aF = w.cAF = function (x, y) {
	var w = this, g = G(arguments)
	var sB = w.sB(x, y)
	return sB.CF($fD($aH(A(g.t) ? g.t : _.r(g, 2))))
}
w.aF__ = w.aAF = function () {
	var w = this, g = G(arguments)
	w.aF.apply(w, g)
	return w
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
window.W = window.W || {}
//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	var w = this
	var b = w.brick(x, y, wd, ht)
			.stat().fr(0).K('wall')
	return b
}
// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}
w.R = function (c, W, H, x, y) {
	alert('w.R')
	var w = this, g = G(arguments),
			wC = w.cen(),
			r
	if (!S(g.f)) {
		y = x;
		x = H;
		H = W;
		W = c;
		c = 'x'
	}
	if (U(W)) {
		W = 200
		H = 200
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(H)) {
		H = W
		x = wC.x - W / 2
		y = wC.y - H / 2
	}
	else if (U(x)) {
		x = wC.x - W / 2;
		y = wC.y - H / 2
	}
	return w.S(
			x + W / 2,
			N(y, x) + H / 2,
			c,
			W, H
	)
	old = function () {
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
	}
}
w.vW = function (col, H, x, y) {
	alert('w.vW')
	var w = this, g = G(arguments),
			cW = w.can.W(),
			cH = w.can.H()
	if (!S(col)) {
		y = x;
		x = H;
		H = col;
		col = 'x'
	}
	H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
	if (U(x)) {
		x = cW / 2;
		y = cH / 2 - H / 2
	}
	else if (U(y)) {
		x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
		y = cH / 2 - H / 2
	}
	//x-=10?
	return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w._preKill = function (b) {
	
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	b.sprite = null
	if (b.sp()) {
		b.sp().rm()
	}
	b.fs(function (f) {
		f.rmSp()
	})
}
w._fPreKill = function (f) {
	//$l('w._fPreKill')
	f.rmSp()
}
f.setKill = function () {
	$l('setKill boxFixt.js')
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
w.startKilling = function () {
	var w = this
	$t(function () {
		w.each(function (b) {
			if (b.is('destroy')) {
				b.K('destroyed')
				b.kill()
			}
		})
	})
	return w
}
b.GI = function () {
	return this.GetInertia()
}
b.AF = function (v, c) {
	this.ApplyForce(v, c);
	return this
}
b.AI = function () {
	this.ApplyImpulse.apply(this, arguments)
	return this
}
b.I = function (imp, pt, pt2) {
	/*
	 //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
	 if (g.A) {return b.I.apply(b, g.f)}
	 o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
	 o.i = o.i || b.v().d(40)
	 o.v = o.v || b.wC()
	 b.ApplyImpulse(o.i, o.v.div())
	 */
	var b = this, g = G(arguments), o
	b.imp = function (imp, pt) {
		return this.AI(imp, pt || this.GWC())
	}
	o = O(g.f) ? {imp: g.f, pt: g.s} :
	{imp: V(g.f, g.s), pt: g.t}
	o.imp = o.imp || b.worldVec().d(40)
	return b.imp(o.imp, o.pt)
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
function velocity() {
	b.aV = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
	}
	b.lV2 = b.lV$ = function (lV, y) {
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
		}
	}
	b.lV1 = function () {
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
}
velocity()
position()
type()
function position() {
	bD.Set = function () {
// actual sig: bD.position.Set(x, y)
		var bD = this
		bD.position.Set.apply(bD.position, arguments)
		return bD
	}
	bD.GXY = bD.GP = function () {
		return this.position
	}
	bD.SP = function (x, y) {
		this.position = V(x, y)
		return this
	}
	bD.SXY = function (x, y) {
		var v = V(x, y)
		return this.Set(v.x, v.y)
	}
	bD.GX = function () {
		return this.GP().x
	}
	bD.GY = function () {
		return this.GP().y
	}
	bD._X = bD.SX = function (x) {
		return this.SXY(x, this.GY())
	}
	bD._Y = bD.SY = function (y) {
		return this.SXY(this.GX(), y)
	}
	bD.gXY = bD.gP = function () {
		return this.GP().m()
	}
	bD.gX = function () {
		return this.gXY().x
	}
	bD.gY = function () {
		return this.gXY().y
	}
	bD.sXY = bD.set = function (x, y) {
		var v = V(x, y).d()
		this.Set(v.x, v.y)
		return this
	}
	bD.sX = function (x) {
		return this.sXY(x, this.gY())
	}
	bD.sY = function (y) {
		return this.sXY(this.gX(), y)
	}
	bD.X = function (x) {
		return U(x) ? this.gX() :
				this.sX(x)
	}
	bD.Y = function (y) {
		return U(y) ? this.gY() :
				this.sY(y)
	}
	bD.XY = bD.p = bD.ps = bD.xy = function () {
		var bD = this, g = G(arguments)
		return g.u ? bD.gXY() : bD.sXY(g.f, g.s)
//if (x === '*') {x = M.r() * 10 * 60}
//if (y === '*') {y = M.r() * 10 * 60}
//if(O(x)){this.position=x;return this}
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

 
	bD.STy = function (ty) {
		this.type = ty;
		return this
	}
	bD.T =	bD.ty = function (ty) {
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
	bD.ty = bD.T = bD.typ = bD.kind = function (type) {
		if (U(type)) {
			return this.type
		}
		this.type = type
		return this
	}
 
$sB = $bD = function (x, y) {
	//return $bD(x, y).ty(0)
	var g = G(arguments)
	var bD = new b2d.BD()
	if (g.u) {
		return bD
	}
	
	var v = V(x, y)
	
	bD.XY(N(v.x, 0),
	 N(v.y, 0)
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
	return $bD(x, y).ty(2)
	//.dyn()
	//$dBD =   b2d.bD =   b2d.dBD =
}

$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
$L('destroy', 'isBull',  'fxdRot', 'sleep', 'velDamp')
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
	b.iS = b.isStat = function () {
		return this.GetType() == 0
	}
}
b.stat = function () {
	var b = this,
			v = b.lV()
//huh??? oh can get/set type of body
	b._linVel = V(v.x, v.y)
	b.type(0)
	return b
}
b.stat = function () {
	var v = this.lV()
	//huh??? oh can get/set type of body
	this.lV(V(v.x, v.y))
	this.ty(0)
	return this
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
b.GM = function () {
	return this.GetMass()
}
//
b.A = function (fD) {
	this.cF(fD);
	return this
}
$kB = $bD1 = function (x, y) {
	return $bD(x, y).ty(1)
}
w.K = function () {
	return this.B.apply(this, arguments).kin()
}
function kin() {
	bD.kin = function () {
		return this.T(1)
	}
	bD.kin = function () {
		return this.T(1)
	}
}
b.iK = b.isKin = function () {
	return this.GetType() == 1
}
b.kin = function () {
	return this.type(1)
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
	return b2d.bodyDef(x, y).T(1)
}
$kB = $kBD = b2d.kD = function (x, y) {
	return $bD(x, y).T(1)
}
w.kin = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.kin(x, y), fixtDef)
	return body
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.vertsKin = function (x, y, arrs) {
	var bod = this.kin(x, y)
	_.each(arrs, function (arr) {
		bod.convex(arr[0], _.rest(arr))
	})
	return bod
}
w.sB = function (x, y) {
	return this.cB($sB(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
}
w.kB = function (x, y) {
	return this.CB($kB(x, y))
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.iK = function () {
	return this.B().iK()
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
b.rF = function () {
	// = b.$rF = b.rH
	return this.CF($rF.apply(null, arguments))
	//var rH = $rH.apply(null, arguments)
	//return this.fD(rH)
}
b.cF = function () {//=b.cCF
	var aF = $cF.apply(null, arguments)
	return this.CF(aF)
}
b.aF = function () {
	//= b.cAF
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}
///////////////////
b._rad = function (n) {
	if (U(n)) {
		return this.shp().m_radius * 30
	}
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) {
		h.SetRadius(n / 30)
	}
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.H = b.h = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (g.u) {
		return b.f() && b.f().H() // return b
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
b.hit = function (x, y, dot) {
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
	function alt() {
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
	}
}
b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
b.arrF = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = b.pol = function () {
	return this.f($pF.apply(null, arguments))
}
b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
sens()
dfr()
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
b.DF = b.dsFx = function (fixt) {
	this.DestroyFixture(fixt)
	return this
}
b.empty = b.clear = function () {
	return this.fs(function (f) {
		f.kill()
	})
}
b.rmF = function (f) {
	if (f) {
		this.DF(f)
	}
	else {
		this.fs(function (f) {
			this.rmF(f)
		})
	}
	return this
}
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
	return f// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! // can check my current libs first!! :)
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
b.onAddFxt = function () {
	this.rMD()
	return this
}
b2d.fxPar = $$$cirORpoly$$$ = function (fxs, fn) {
	var b = this
	//if its not an array,, assume is fine, and leave it as is
	fxs = _.m(fxs, function (f) {
		return !A(f) ? f :
				f.length == 1 || f.length == 3 ?
						$cF.apply(null, f) :
						$pF.apply(null, f)
	})
	// fn = _.b(fn, b) ?
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	return fxs
	//if (f.isSensor) {return b2d.polySens.apply(null, f)}
}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
b.fD = b.fxD = b.$fD = function (fD) {
//return this.CF( $fD(fD) )
	return this.CF($fD.apply(null, arguments))
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
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
b.CF = function () {//b.CF = b.CreateFixture
	return this.CreateFixture.apply(this, arguments)
}
b.CF_ = function () {//b.CF = b.CreateFixture
	this.CreateFixture.apply(this, arguments)
	return this
}
b.CF2 = function () {
	return this.CreateFixture2.apply(this, arguments)
}
b.dsF = b.dF = b.DF = b.DFx = function (f) {
	this.DestroyFixture(f);
	return this
}
b.GFL = b.GFxL = function () {
	return this.GetFixtureList()
}
function sens() {
	b.togSen = function () {
		return this.sensor(!this.sensor())
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
}
function dfr() {
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
		function alt() {
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
		}
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
fD.de = fD.den = fD.d = function (de) {
	if (U(de)) {
		return this.density
	}
	this.density = de
	return this
}
fD.fr = fD.fric = fD.f = function (fr) {
	if (U(fr)) {
		return this.friction
	}
	this.friction = fr
	return this
}
fD.re = fD.rest = fD.r = function (re) {
	if (U(re)) {
		return this.restitution
	}
	this.restitution = re
	return this
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
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fD.s1 = fD.mS = fD.mSn = fD.mSen = fD.makeSen = function () {
	this.isSensor = true
	return this
}
fD.s0 = function () {
	this.isSensor = false
	return this
}
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
	fD.Halt = fD.setShapeAlt = function (shape) {
		if (U(shape)) {
			return this.shape
		}
		this.shape = shape;
		return this
	}
}
fD.SAB = function () {
	var fD = this
	var h = fD.H()
	h.SAB.apply(h, arguments)
	return fD
}
fD.arr = fD.pol = fD.ar = function () {
	var fD = this, g = G(arguments)
	var pH = $pH()
	fD.H(pH.arr.apply(pH, g)) //pol(g)
	return fD
	//= fD.sAA = fD.SAA
}
fD.polA = function (verts) {
	this.arr.apply(this, verts)
}
fD.cH = function (r) {
	var fD = this, g = G(arguments)
	var cH = $cH(r)
	fD.H(cH)
	return fD
	//= fD.sAA = fD.SAA
}
//
fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h;
	return fD
}
fD.SAB = function (x, y) {
	this.H().SetAsBox(x, y)
	return this
}
fD.sAB = function (a, b, p, A) {
	var fD = this;
	alert('fD.sAB')
	var h = fD.H()
	if (!p) {
		h.SAB(a / 30, b / 30)
	}
	else {
		h.SAOB(a / 30, b / 30, p, A)
	}
	return fD
// used?
}
fD.SAOB = function (x, y, pos, ang) {
	this.SetAsOrientedBox(x, y, pos, ang)
	return this
}
fD.sAOB = fD.orBox = function (a, b, pos, aa) {
	var fD = this, h = fD.shape
	h.SAOB(a / 30, b / 30, pos, aa)
	return fD
}
fD.box = fD.sAB = function (a, b, p, aa) {
	var fD = this, h = fD.shape
	p ? h.SAOB(a / 30, b / 30, p, aa) :
			h.SAB(a / 30, b / 30)
	return fD
}
$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FD()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	fD.de(1)
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
pH.SAB = function (wd, ht) {
	var pH = this
	pH.SetAsBox(wd, ht);
	return pH
}
pH.SAOB = function (wd, ht, pos, ang) {
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAOB = pH.box = function (wd, ht, pos, ang) {

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
	var pH = this, g = G(arguments), o
	//pass in pos as {x,y} ? ..
	o = O(g.t) ?
		// .. -> w,h, posOb, rt
	{w: g.f, h: g.s, pos: g.t, ang: g.fo} :
		//pass in pos as x,y ? ..
			N(g.fo) ?
				// .. ->
			{w: g.f, h: g.s, pos: V(g.t, g.fo), ang: g.fi} :
				// can leave out pos Ob (x and y)
			{w: g.f, h: g.s, ang: g.t}
	//
	o.w = N(o.w, 100) / 60
	o.h = N(o.h, 100) / 60
	//
	o.pos = (o.pos || V()).d()
	//
	o.rt = M.tR(N(o.ang, 0))
	//
	return pH.SAOB(o.w, o.h, o.pos, o.rt)
}
pH.sAB = function (wd, ht, rt) {
	return this.sAOB(wd, ht, V(), N(rt, 0))
}
pH._SAA = function (arr) {
	var pH = this
	arr = arr || []
	pH.SetAsArray(arr, arr.length)
	return pH
}
pH.SAA = function () {
	var g = G(arguments)
	return this._SAA.apply(this, g.A ? g.f : g)
}
pH.sAA = pH.pol = pH.ar = pH.arr = function () {
	bx.tMt = function (x, y) {
		return V(x, y).d()
	}
	var pH = this, g = G(arguments)
	return pH.SAA(
			_.m(g.s ? g : g.f, bx.tMt)
	)
}
pH.set = function () {
	var pH = this, g = G(arguments)
	//this covers all cases for polygons !!!! // ******// !!!!!!!!
	N(g.f) ? pH.sAOB.apply(pH, g) :
			O(g.f) ? pH.sAA.apply(pH, g) :
					pH
}
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr(g.s ? g : g.f)
}
_$pH = function () {
	return new b2d.PH()
}
$pH = function (W, H, x, y, a) {
	//  OR (wd, ht, xy, ang, ang2)
	var g = G(arguments), o, pH = new b2d.PH()
	if (g.u) {
		return pH
	}
	o = O(g.t) ?
	{w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	{w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	o.w = (o.w || 100) / 60
	o.h = (o.h || o.w) / 60
	o.xy = V(o.xy / 30, o.ang / 30)
	o.rt = M.tR(o.ang2 || 0)
	o = o || {}
	return g.OO_ ? $a(pH, 'sAA', g) :
			g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
					pH.SAOB(o.w, o.h, o.xy, o.rt) :
					pH
	// this is all you need for all cases (thanks to pH.set) 
	// pH.set.apply(pol, g)
}
cH.set = function () {//cH.S =
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
cH.SLP = function () {
	this.SetLocalPosition.apply(this, arguments)
	return this
}
cH.GLP = function () {
	return this.GetLocalPosition()
}
cH.XY = cH.lP = function (x, y) {
	var cH = this;
	return U(x) ? cH.GLP().m() :
			cH.SLP(V(x, y).d())
}
_$cH = function (r) {
	return new b2d.CH(A(r) ? r[0] : r)
}
$cH = function () {
	
	//r, x, y
	var g = G(arguments)
	var o = {}
	var cH = _$cH(N(g.f, 50) / 30)
	if (g.s) {
		cH.XY(g.s, g.t)
	}
	return cH
	//	if (N(x) && N(y)) {h.XY(x, y)}
	// cH.lP(g.s, g.t)
}
pH.SAV = function () {
	var pH = this
	pH.SetAsVector.apply(pH, arguments)
	return pH
}
pH.sAV = pH.asV = function (v, sc) {
	sc = N(sc, 30)
	var pH = this //used by SepLib
	return pH.SAV(_.m(v, function (v) {
		return V(v).d(sc)
	}))
}
bH.GT = function () {
	return this.GetType()
}
$_rF = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	var f = $fD($pH(wd, ht, xy, ang, ang2))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
_$rF = function () {
	var pH = $pH()
	pH.sAOB.apply(pH, arguments)
	return $fD(pH)
}
$rF1 = function (wd, ht, xy, ang, ang2) {// (wd, ht, x, y, rot) 
	var g = G(arguments), o
	if (O(g.t)) {
		o = {}
	}
	else {
		o = {}
	}
//make a rec (or orientedRec) fixture
	wd = N(g[0]) ? g[0] : 50
	ht = N(g[1]) ? g[1] : 50
	x = N(g[2]) ? g[2] : 0
	y = N(g[3]) ? g[3] : 0
	rot = N(g[4]) ? g[4] : 0
	wd = g.f
	ht = g.s
	xy = g.t
	ang = g.fo
	ang2 = g.fi
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var fD = $fD($pH(wd, ht, xy, ang, ang2))
	var rec = $pH(wd, ht, x, y, rot)
	var fD = $fD(rec)
	if (g.OO_) {
		rec.arr(g)
	}
	//b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		rec.box(o)
	}
	fD = $fD(rec).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
}
$rF = function () {
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pF_ = function (kind) {
	var pF = $pF.apply(null, _.r(arguments))
	pF.sensor(true).K(kind)
	return pF
}
$pF = function (wd, ht, x, y, rt) {
	//makes a fixture using b2d.polyH
	var g = G(arguments)//	return $fD($a($pH, g))
	//SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
	//but can not pass den? who cares!
	//$fD($pH.apply(null, g))
	var f = $fD($pH(wd, ht, x, y, rt))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pFAlt = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	if (A(wd)) {
		return $aF.apply(null, arguments)
	}
	//if(b2d.isShape(wd)){fixt.shape = wd; return shape}
	//you can make a poly
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var f = $fD($pH(wd, ht, xy, ang, ang2)).fr(.2).re(.2)//.de(1)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pSn = $pS = $pSF = function (k) {
	var g = G(arguments)
	var pF = $pF.apply(null, _.r(arguments)).s1()
	pF.K(k || 'polySens')
	return pF
}
$aF = function () {
//but looks like $aF uses $aH to do all the work
	var g = G(arguments)
	return $fD($aH.apply(null, g))
}
$cFAlt = function () { //r,x,y
	var g = G(arguments)
	var cH = $cH(g.f)
	return $fD(cH, g.s, g.t)
}
$cirFAlt = function (rad, x, y, den) {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
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
$cF6 = function (rad, x, y) {
	var g = G(arguments), f
	rad = g[0];
	x = g[1];
	y = g[2];
	rad = rad || M.r() + .1
	x = N(x) ? x : 0
	y = N(y) ? y : x
	var cir = $cH(rad)
	cir.lP(V(x, y, '-'))
	f = $fD(cir)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
f.TP = function () {
	var f = this,
			h = f.H()
	return h.TP.apply(h, arguments)
}
f.vs = f.verts = function () {
	alert('f.vs verts boxFixt.js')
	var h = this.GetShape()
	var verts = h.m_vertices
	return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
}
f.rad = function (r) {
	var f = this, h = f.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return f
}
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	var tf = f.B().tf()
	var pt = N(pt) ? V(pt, y) : pt
	return f.H().TP(tf, pt)
}
f.tf = f.gTf = function (tf) {
	var f = this, b = f.B()
	if (U(tf)) {
		return b.tf()
	}
	b.tf(tf)
	return f
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
/*

 SetAsOrientedBox(
 hx:Number,  hy:Number, (width and height of the box)
 center:b2Vec2 = null, (center of box)
 angle:Number = 0.0 (rot in rads)
 )

 Applying this concept, the idol function continues in the following way:
 var bW:Number=5/worldScale;
 var bH:Number=20/worldScale;
 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
 var boxAngle:Number=- Math.PI/4;


 */
f.H = f.shp = f.shape = function (h) {

//should let user specify dimensions of shape, not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h // it DOES WORK!  but is this much different than just replacing the fixt?
	return this
}
f.rad = function () {
	return this.shp().m_radius * 30
}
f.hType = function () {
	return this.H().m_type
}
f.iC = f.isCirc = function () {
	return this.hType() == 0
}
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
f.lV = function () {
	var f = this, b = f.B(), g = G(arguments)
	b.lV.apply(b, g)
	return f
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
f.GN = f.N = f.next = function () {
	return this.GetNext()
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
f.bTy = f.bType = function () {
	return this.B().GetType()
}
f.isBType = f.isType = function (t) {
	var f = this
	if (t) {
		return f.bType() == t
	}
}
f.iS = f.iSt = function () {
	return this.B().iS()
}
f.iD = f.iDy = function () {
	return this.B().iD()
}
b.isSen = b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (U(g[0])) {
		return f.m_isSensor
	}
	f.m_isSensor = g[0] ? true : false
	return b
}
b2d.polySens = function (kind) {
	return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
}
b2d.fixtParse = function (arr) {

//takes array of arrays
//if something in array is NOT array, it assumes it is already a fixt
//but if it IS an array, it makes it into a fixture
	return _.m(arr, function (fixt) {
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {// weird
			return b2d.polySens.apply(null, fixt)
		}
		var len = fixt.length
		return (len == 1) ? b2d.circ(fixt[0])
				: (len == 2) ? b2d.poly.apply(null, fixt)
				: (len == 3) ? b2d.circ.apply(null, fixt)
				: b2d.poly.apply(null, fixt)
	})
	b2d.fixtParse = function (arr) {
		return _.m(arr, function (fixt) {
			var len
			if (!A(fixt)) {
				return fixt
			}
			if (fixt.isSensor) {
				return b2d.polySens.apply(null, fixt)
				return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
			}
			len = fixt.length
			if (len == 1) {
				return b2d.circ(fixt[0])
			}
			else if (len == 2) {
				return b2d.poly.apply(null, fixt)
			}
			else if (len == 3) {
				return b2d.circ.apply(null, fixt)
			}
			return b2d.poly.apply(null, fixt)
		})
	}
}


