$pt = {}
bx = b2d = Box2D
bx.C = bx.Collision
bx.D = bx.Dynamics
bx.Cm = bx.Common
bx.M = bx.Math = bx.Cm.Math
bx.W = b2World = bx.D.b2World
bx.FD = b2FixtureDef = bx.D.b2FixtureDef
bx.F = b2Fixture = bx.D.b2Fixture
bx.BD = b2BodyDef = bx.D.b2BodyDef
bx.B = b2Body = bx.D.b2Body
bx.V = b2Vec2 = bx.Vec = bx.M.b2Vec2
bx.AABB = b2AABB = bx.C.b2AABB
bx.M2 = bx.Mat22 = bx.M.b2Mat22
bx.M3 = bx.Mat33 = bx.M.b2Mat33
bx.Hs = bx.C.Shapes
bx.H = b2Shape = bx.Hs.b2Shape
bx.MD = b2MassData = bx.Hs.b2MassData
bx.CH = b2CircleShape = bx.Hs.b2CircleShape
bx.PH = b2PolygonShape = bx.Hs.b2PolygonShape
bx.Cxs = bx.D.Contacts
bx.Cx = bx.Cxs.b2Contact


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
	l = cL = $pt.l
	cx = $pt.cx
}
$PT.jts = function () {
	bx.DJD = bx.Jts.b2DistanceJointDef
	bx.DJ = bDJ = bx.distanceJoint = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint //=bx.Js.b2DistanceJoint
	bx.DJ = bx.distanceJoint = bDJ = bx.Js.b2DistanceJoint
	bx.MJD = b2MouseJointDef = bx.MouseJointDef = bx.Js.b2MouseJointDef // bx.D.Jts.b2MouseJointDef = bx.Jts.b2MouseJointDef
	bx.MJD = bx.mouseJointDef = b2MouseJointDef = bx.Js.b2MouseJointDef
	bx.MJ = bx.MouseJoint = bx.Jts.b2MouseJoint // = bx.Js.b2MouseJoint
	bx.RJD = bx.RevoluteJointDef = bx.Js.b2RevoluteJointDef
	bx.RJ = bx.RevoluteJoint = bx.Js.b2RevoluteJoint
	bx.RevoluteJointDef = bx.Jts.b2RevoluteJointDef
	bx.RevoluteJoint = bx.Jts.b2RevoluteJoint
	bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef
	bx.PJD = bx.PrismaticJointDef = bx.Js.b2PrismaticJointDef
	bx.Jts = bx.Js = bx.D.Joints
	bx.Jt = bx.J = bx.Jts.b2Joint
	bx.JD = bx.JtD = bx.Jts.b2JointDef
	bx.Cos = bx.D.Controllers
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
$L('bool')
function bool() {
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
						ty == "b2AShape" ? 'a' : false
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
}
function _pre(){
_pt = function (a) {
	if (O(a)) {
		return a.prototype
	}
}
_bPt = function (a) {
	if (a && bx[a]) {
		return _pt(bx[a])
	}
}
}
 
b2d.Cxs = b2d.D.Contacts
b2d.Cx = b2d.Cxs.b2Contact
//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/