b2d =b2= Box2D
b2d.C = b2d.Collision
b2d.D = b2d.Dynamics
b2d.Cm = b2d.Common
b2d.M = b2d.Math = b2d.Cm.Math
b2World = b2d.W = b2d.World = b2d.D.b2World
b2FixtureDef = b2d.FD = b2d.FixtureDef = b2d.D.b2FixtureDef
b2Fixture = b2d.F = b2d.D.Fixture = b2d.Fixture = b2d.fixture = b2d.D.b2Fixture
b2BodyDef = b2d.BD = b2d.BodyDef = b2d.D.b2BodyDef
b2Body = b2B = b2d.B = b2d.Body = b2d.D.Body = b2d.D.b2Body
b2d.Hs = b2d.Shapes = b2d.C.Hs = b2d.C.Shapes
b2CircleShape = b2d.CS = b2d.CH = b2d.CircleShape = b2d.Hs.b2CircleShape = b2d.C.Hs.b2CircleShape
b2PolygonShape = b2d.PH = b2d.PolygonShape = b2d.Hs.b2PolygonShape = b2d.C.Hs.b2PolygonShape
b2MassData = b2d.MD = b2d.massData = b2d.Hs.b2MassData = b2d.C.Hs.b2MassData
b2Shape = b2d.Shape = b2d.Hs.b2Shape = b2d.C.Shapes.b2Shape
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.iH = function (h) {
	var typ
	if (O(h)) {
		typ = h.constructor.name
		return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
	}
}
b2d.iBD = b2d.isBDef = function (bd) {
	return O(bd) && F(bd.b2BodyDef)
}
b2d.iB = b2d.isB = b2d.isBody = isBody = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
b2d.iFD = b2d.isFD = b2d.isFixtDef = function (fD) {
	return O(fD) && fD.b2FixtureDef
}
b2d.iF = b2d.isFixt = function (f) {
	if (!f) {
		return false
	}
	return f.constructor.name == "b2Fixture"
}
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}
b2d.iH = b2d.isShape = function (h) {
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
b2d.iPH = b2d.iP = function () {
	return this.iH() == 'p'
}
b2d.iCH = b2d.iC = function () {
	return this.iH() == 'c'
}
b2d.iAH = b2d.iA = function () {
	return this.iH() == 'a'
}
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
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
_pt = function (a) {
	if(O(a)){
	return a.prototype
	}}
_bPt = function (a) {
	if(a && b2d[a]){
	return _pt( b2d[a] )
	}}
$pt = {
	dD: _pt(b2d.DD),
	v: _pt(b2d.Vec2),
	b: _bPt('B')
}

//$pt.l = $pt.cL = b2d.CL.prototype
$pt.f = b2d.F.prototype
//$pt.cx = b2d.Cx.prototype
$pt.w = b2d.W.prototype
$pt.bD = bD = b2d.BD.prototype
$pt.fD = fd = b2d.FD.prototype
//$pt.jD = b2d.JD.prototype
//$pt.j = b2d.J.prototype
//$pt.mJD = $pt.mD = b2d.MJD.prototype
//$pt.mJ = b2d.MJ.prototype
$pt.bH = b2d.Hs.b2Shape.prototype;
$pt.cH = b2d.CircleShape.prototype
$pt.pH = b2d.PolygonShape.prototype

//$pt.co = b2d.Co.prototype
//$pt.gCo = b2d.GC.prototype
//$pt.bCo = b2d.BC.prototype
//$pt.fCo = b2d.CFC.prototype
//$pt.aCo = b2d.CAC.prototype
//$pt.tCo = b2d.TDC.prototype
 
function creProtos() {
	b2d.p = function () {
		aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
		b = b2d.Body.prototype
		bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Dynamics.Controllers.b2BuoyancyController
		bD = b2d.Dynamics.b2BodyDef.prototype
		cx = b2d.Dynamics.Contacts.b2Contact.prototype
		cxI = b2d.Dynamics.b2ContactImpulse.prototype
		ct = cjs.Container.prototype
		co = b2d.Dynamics.Controllers.b2Controller.prototype
		c = HTMLCanvasElement.prototype
		cH = b2d.CircleShape.prototype
		dd = b2d.Dynamics.b2DebugDraw.prototype
		dJD = b2d.Joints.b2DistanceJointDef.prototype
		dJ = b2d.Joints.b2Joint.prototype
		eD = cjs.EventDispatcher.prototype
		f = b2d.Fixture.prototype
		fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
		fd = fD = b2d.FixtureDef.prototype
		gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
		gx = cjs.Graphics.prototype
		h = cjs.Shape.prototype
		i = cjs.DisplayObject.prototype
		jD = b2d.Joints.b2JointDef.prototype
		j = b2d.Joints.b2Joint.prototype
		l = b2d.Dynamics.b2ContactListener.prototype
		mJ = b2d.Joints.b2MouseJoint.prototype
		mJD = b2d.Joints.b2MouseJointDef.prototype
		mc = cjs.MovieClip.prototype
		flDa = b2d.Dynamics.b2FilterData.prototype
		pH = b2d.PolygonShape.prototype
		pJ = b2d.Joints.b2PrismaticJoint.prototype
		pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype
		pD = gpcas.geometry.PolyDefault.prototype//////////////////
		ps = gpcas.geometry.PolySimple.prototype/////////////////////////
		q = cjs.LoadQueue.prototype
		rJD = b2d.RevoluteJointDef.prototype
		rJ = b2d.RevoluteJoint.prototype
		st = s = cjs.Stage.prototype
		sS = ss = cjs.SpriteSheet.prototype
		sSB = cjs.SpriteSheetBuilder.prototype
		sp = s = cjs.Sprite.prototype
		tl = cjs.Timeline.prototype
		t = cjs.Text.prototype
		tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
		tw = cjs.Tween.prototype
		v = b2d.Common.Math.b2Vec2.prototype
		w = b2d.World.prototype
		wJD = b2d.Joints.b2WeldJointDef
		wJ = b2d.Joints.b2WeldJoint
		x = ctx = xx = CanvasRenderingContext2D.prototype
		xGr = CanvasGradient.prototype
		//
		l = b2d.Dynamics.b2ContactListener.prototype
		cx = b2d.Dynamics.Contacts.b2Contact.prototype
		j = b2d.Joints.b2Joint.prototype
		w = b2d.World.prototype
		jd = b2d.Joints.b2JointDef.prototype
		f = b2d.Dynamics.b2Fixture.prototype
		fD = b2d.Dynamics.b2FixtureDef.prototype
		bD = b2.Dynamics.b2BodyDef.prototype
		b = b2.Dynamics.b2Body.prototype
	}
	pD = gpcas.geometry.PolyDefault.prototype//////////////////
	ps = gpcas.geometry.PolySimple.prototype/////////////////////////
	eD = cjs.EventDispatcher.prototype
	ct = cjs.Container.prototype
	tw = cjs.Tween.prototype
	c = HTMLCanvasElement.prototype
	mc = cjs.MovieClip.prototype
	gx = cjs.Graphics.prototype
	h = cjs.Shape.prototype
	i = cjs.DisplayObject.prototype
	jD = b2d.Joints.b2JointDef.prototype
	st = s = cjs.Stage.prototype
	sS = ss = cjs.SpriteSheet.prototype
	sSB = cjs.SpriteSheetBuilder.prototype
	sp = s = cjs.Sprite.prototype
	tl = cjs.Timeline.prototype
	t = cjs.Text.prototype
	x = ctx = xx = CanvasRenderingContext2D.prototype
	xGr = CanvasGradient.prototype
	q = cjs.LoadQueue.prototype
}
function jtProtos() {
	j = b2d.Joints.b2Joint.prototype
	wJD = b2d.Js.b2WeldJointDef
	wJ = b2d.Js.b2WeldJoint
	rJD = b2d.RevoluteJointDef.prototype
	rJ = b2d.RevoluteJoint.prototype
	mJ = b2d.Joints.b2MouseJoint.prototype
	mJD = b2d.Joints.b2MouseJointDef.prototype
	dJD = b2d.Joints.b2DistanceJointDef.prototype
	dJ = b2d.Joints.b2Joint.prototype
	pJ = b2d.Js.b2PrismaticJoint.prototype
	pJD = pd = b2d.Js.b2PrismaticJointDef.prototype
}
function coProtos() {
	aCo = b2d.Cos.b2ConstantAccelController.prototype
	bCo = b2d.Cos.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Cos.b2BuoyancyController
	co = b2d.Cos.b2Controller.prototype
	fCo = b2d.Cos.b2ConstantForceController.prototype
	gCo = b2d.Cos.b2GravityController.prototype
	tCo = b2d.Cos.b2TensorDampingController.prototype
}
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
	v = b2d.Common.Math.b2Vec2.prototype
	w = b2d.World.prototype
}
$PT = function () {
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
$PT() 