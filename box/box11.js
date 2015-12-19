$L()
b2d.W = b2World  = b2d.D.b2World //= b2d.World
b2d.FD = b2FixtureDef  = b2d.D.b2FixtureDef //= b2d.FixtureDef
b2d.F = b2Fixture =b2d.D.b2Fixture // = b2d.D.Fixture = b2d.Fixture = b2d.fixture = 
b2d.BD = b2BodyDef  = b2d.D.b2BodyDef //= b2d.BodyDef
b2d.B = b2Body = b2d.D.b2Body // = b2B = b2d.Body = b2d.D.Body
b2d.DD = b2DebugDraw = b2d.D.b2DebugDraw //= b2d.DebugDraw 
b2d.Hs = b2d.C.Hs = b2d.Shapes = b2d.C.Shapes
b2d.CS =  b2d.CH = b2CircleShape = b2d.C.Hs.b2CircleShape //b2d.CircleShape = b2d.Hs.b2CircleShape = 
b2d.PH = b2PolygonShape = b2d.C.Hs.b2PolygonShape // b2d.PolygonShape  =  = b2d.Hs.b2PolygonShape
b2d.MD = b2MassData = b2d.Hs.b2MassData = b2d.C.Hs.b2MassData //b2d.massData = 
b2d.H = b2Shape = b2d.Hs.b2Shape = b2d.C.Shapes.b2Shape //b2d.Shape =
b2Vec2 = b2d.Common.Math.b2Vec2
b2d.DD= b2d.D.b2DebugDraw 

b2d.Jts = b2d.Js =b2d.D.Joints // BXJ = b2d.Joints = 
b2d.Cos = b2d.D.Controllers

function jts(){
	b2d.Jt = b2d.J = b2d.D.Joints.b2Joint //= b2d.Joints.b2Joint = b2d.Joint = b2d.joint = bJ 
	b2d.JD = b2d.JtD = b2d.Joints.b2JointDef //= bJD   = b2d.jointDef = bJD = b2d.jointDef =
	b2d.DJD = b2d.Joints.b2DistanceJointDef
b2d.DJ = bDJ = b2d.distanceJoint = b2d.distanceJoint = bDJ = b2d.Joints.b2DistanceJoint //=b2d.Js.b2DistanceJoint
b2d.DJ = b2d.distanceJoint = bDJ = b2d.Js.b2DistanceJoint
b2d.MJD = b2MouseJointDef = b2d.MouseJointDef = b2d.Js.b2MouseJointDef // b2d.D.Joints.b2MouseJointDef = b2d.Joints.b2MouseJointDef
b2d.MJD = b2d.mouseJointDef = b2MouseJointDef = b2d.Js.b2MouseJointDef
b2d.MJ = b2d.MouseJoint = b2d.Joints.b2MouseJoint // = b2d.Js.b2MouseJoint
b2d.RJD = b2d.RevoluteJointDef = b2d.Js.b2RevoluteJointDef
b2d.RJ = b2d.RevoluteJoint = b2d.Js.b2RevoluteJoint
b2d.RevoluteJointDef = b2d.Joints.b2RevoluteJointDef
b2d.RevoluteJoint = b2d.Joints.b2RevoluteJoint
b2d.PrismaticJointDef = b2d.Joints.b2PrismaticJointDef
b2d.PJD = b2d.PrismaticJointDef = b2d.Js.b2PrismaticJointDef

	
	}

jts()


b2d.f = function (k){var arr = []
	w.each(function (b) {
		b.each(function (f) {
			if (f.is(k)) {arr.push(f)}})})
	return arr
} //b2d.F
b2d.b = function (k){
	var arr = []
	w.each(function (b) {
		if (b.of(k)) {
			arr.push(b)
		}
	})
	return arr
} //b2d.B


//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
$PT = function () {
	_PT = function () {
		h = b2d.Shapes.b2Shape.prototype
		bH = b2d.Shape.prototype
		pH = b2d.PolygonShape.prototype
		cH = b2d.CircleShape.prototype
		b = b2d.Body.prototype
		bD = b2d.BD.prototype
		cx = b2d.D.Contacts.b2Contact.prototype
		cxI = b2d.D.b2ContactImpulse.prototype
		cH = b2d.CircleShape.prototype
		dd = b2d.D.b2DebugDraw.prototype
		f = b2d.Fixture.prototype
		fd = fD = b2d.FixtureDef.prototype
		l = b2d.D.b2ContactListener.prototype
		flDa = b2d.D.b2FilterData.prototype
		pH = b2d.PolygonShape.prototype
		w = b2d.World.prototype
	}
	dD = $pt.dD
	v = $pt.v
	w = $pt.w;
	fd = fD = $pt.fD;
	bD = $pt.bD;
	b = $pt.b;
	f = $pt.f
	cx = $pt.cx
	l = cL = $pt.l
	bH = $pt.bH;
	cH = $pt.cH;
	pH = $pt.pH
	return
	co = $pt.co;
	fCo = $pt.fCo;
	aCo = $pt.aCo;
	gCo = $pt.gCo
	tCo = $pt.tCo;
	bCo = $pt.bCo
//	jD = $pt.jD
//	j = $pt.j
	//j = b2d.J.prototype
	mJD = $pt.mJD
	mJ = $pt.mJ
}
function _pre() {
	_pt = function (a) {
		if (O(a)) {
			return a.prototype
		}
	}
	_bPt = function (a) {
		if (a && b2d[a]) {
			return _pt(b2d[a])
		}
	}
	b2d = Box2D // = b2
	b2d.C = b2d.Collision
	b2d.D = b2d.Dynamics
	b2d.Cm = b2d.Common
	b2d.M = b2d.Math = b2d.Cm.Math
}
$pt = {
	dD: _pt(b2d.DD),
	v: _pt(b2d.Vec2),
	b: _bPt('B')
}
/// clip ///
$pt.pD = gpcas.geometry.PolyDefault.prototype//////////////////
$pt.ps = gpcas.geometry.PolySimple.prototype/////////////////////////
//// canvas ////
$pt.c = HTMLCanvasElement.prototype
$pt.x = ctx = xx = CanvasRenderingContext2D.prototype
$pt.xGr = CanvasGradient.prototype
test = function () {
	$pt.xGr({
		a: function () {
		}
	})
}
//stage
$pt.ct = cjs.Container.prototype
$pt.dO = $pt.iO = $pt.ob = $pt.i = cjs.DisplayObject.prototype
$pt.eD = cjs.ED.prototype
$pt.gx = cjs.Gx.prototype
$pt.h = cjs.Sh.prototype
$pt.st = s = cjs.St.prototype
$pt.t = cjs.T.prototype
$pt.ld = $pt.q = cjs.LQ.prototype
// stage anim ///
$pt.ss = $pt.sS = cjs.SS.prototype
$pt.sp = s = cjs.Sp.prototype
$pt.ssB = $pt.sSB = cjs.SSB.prototype
$pt.tw = cjs.Tw.prototype
$pt.mc = cjs.MC.prototype
$pt.tl = cjs.Tl.prototype
//// BOX BOX BOX ///////
$pt.w = b2d.W.prototype //= b2d.World.prototype
$pt.dD = $pt.dd = b2d.D.b2DebugDraw.prototype
$pt.H = $pt.bH = b2d.Hs.b2Shape.prototype;
$pt.cH = b2d.CircleShape.prototype
$pt.pH = b2d.PgSh.prototype
$pt.f = b2d.D.b2Fx.prototype //b2d.F.prototype// b2d.Fixture.prototype
$pt.fD = $pt.fd = b2d.D.b2FixtureDef.prototype // b2d.FD.prototype
$pt.b = b2d.Body.prototype //= b2.D.b2Body.prototype
$pt.bD = b2d.D.b2BodyDef.prototype // b2d.BD.prototype
$pt.v = $pt.vc = b2d.M.b2Vec2.prototype
ab = $pt.ab = b2d.Collision.b2AABB.prototype
$pt.flDa = b2d.D.b2FilterData.prototype
$pt.l = $pt.cL = b2d.D.b2ContactListener.prototype // = b2d.CL.prototype
$pt.cx = b2d.D.Cxs.Cx.prototype
$pt.cxI = b2d.D.b2ContactImpulse.prototype
$pt.jD = $pt.jtD = b2d.Jts.b2JtD.prototype //b2d.JD.prototype
$pt.j = $pt.jt = b2d.Jts.b2Jt.prototype //$pt.j = b2d.J.prototype
$pt.dJD = jd = b2d.Jts.b2DistanceJointDef.prototype //$pt.dJD = b2d.Joints.b2DistanceJointDef.prototype
$pt.dJ = b2d.Jts.DJt.prototype //$pt.dJ = b2d.Joints.b2Joint.prototype
$pt.mJtD = b2d.Jts.MJtD.prototype //$pt.mJD = $pt.mD = b2d.MJD.prototype // $pt.mJD = b2d.MouseJointDef.prototype
$pt.mJt = b2d.MJ.prototype //$pt.mJ = b2d.Joints.b2MouseJoint.prototype$pt.mJ = b2d.MouseJoint.prototype
$pt.rJtD = b2d.RJtD.prototype
$pt.rJt = b2d.RJt.prototype
$pt.pJt = b2d.Jts.b2PJt.prototype //$pt.pJ = b2d.Js.b2PrismaticJoint.prototype
$pt.pJtD = pd = b2d.Js.b2PrJtD.prototype //$pt.pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype
$pt.wJtD = b2d.Jts.b2WJtD // = b2d.Js.b2WeldJointDef
$pt.wJt = b2d.WedJt //$pt.wJ = b2d.Js.b2WeldJoint
$pt.co = b2d.Cos.b2Co.prototype //b2d.Co.prototype  // b2d.Cos.b2Controller.prototype
//$pt.aCo = b2d.CAC.prototype
$pt.aCo = b2d.Cos.ConstantAccelCo.prototype //$pt.aCo = b2d.Cos.b2ConstantAccelController.prototype
$pt.bCo = b2d.BuoyancyCo = b2d.BCo = b2d.BuCo = b2d.BuoyCo //$pt.bCo = b2d.D.Controllers.b2BuoyancyController.prototype
//$pt.bCo = b2d.BC.prototype
$pt.uJt = puJt
$pt.bCo = b2d.Cos.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Cos.b2BuoyancyController //$pt.bCo = b2d.D.Controllers.b2BuoyancyController.prototype
//$pt.fCo = b2d.CFC.prototype
$pt.fCo = b2d.D.Controllers.b2ConstantForceController.prototype //$pt.fCo = b2d.Cos.b2ConstantForceController.prototype
$pt.gCo = b2d.Cos.GCo.prototype //$pt.gCo = b2d.D.Controllers.b2GravityController.prototype//$pt.gCo = b2d.GC.prototype
$pt.tCo = b2d.Cos.TCo.prototype//$pt.tCo = b2d.TDC.prototype //$pt.tCo = b2d.D.Controllers.b2TensorDampingController.prototype
