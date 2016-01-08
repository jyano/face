var mX, mY, mousePVec, isMouseDown, selB, mJt,canPs


BXEX2 = function () {$.c().id('canvas')
w = new b2World(new b2Vec2(0, 10), true) //gravity //allow sleep
	fD = new b2FixtureDef;fD.density = 1.0;fD.friction = 0.5;fD.restitution = 0.2
	bD = new b2BodyDef;bD.type = b2Body.b2_staticBody
	fD.shape = new b2PolygonShape;fD.shape.SetAsBox(20, 2)
	bD.position.Set(10, 400 / 30 + 1.8)
	w.CreateBody(bD).CreateFixture(fD);bD.position.Set(10, -1.8)
	w.CreateBody(bD).CreateFixture(fD);fD.shape.SetAsBox(2, 14)
	bD.position.Set(-1.8, 13);w.CreateBody(bD).CreateFixture(fD)
	bD.position.Set(21.8, 13);w.CreateBody(bD).CreateFixture(fD)
	bD.type = b2Body.b2_dynamicBody
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {fD.shape = new b2PolygonShape;fD.shape.SetAsBox(M.r() + 0.1 , M.r() + 0.1)}
		else {fD.shape = new b2CircleShape(M.r() + 0.1 )}
		bD.position.x = M.r() * 10; bD.position.y = M.r() * 10
		w.CreateBody(bD).CreateFixture(fD)}
	dD = new b2DebugDraw();dD.SetSprite($0("#canvas").getContext("2d"));dD.SetDrawScale(30);dD.SetFillAlpha(0.5);dD.SetLineThickness(1)
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
	w.SetDebugDraw(dD)
	_.ev(1 / 60, update )
	canPs = getElementPosition($0("#canvas"))
	$(document).on("mousedown", handleMouseDown )
	$(document).on("touchstart", handleMouseDown )
	$(document).on("mouseup", handleMouseUp )
	$(document).on("touchend", handleMouseUp )}
function handleMouseDown(e) {isMouseDown = true
	handleMouseMove(e)
	$(document).on("mousemove", handleMouseMove)
	$(document).on("touchmove", handleMouseMove )}
function handleMouseUp() {
	$(document).off("mousemove", handleMouseMove )
	$(document).off("touchmove", handleMouseMove )
	isMouseDown = false; mX = undefined; mY = undefined}
function handleMouseMove(e) {var clientX, clientY
	if (e.clientX) {clientX = e.clientX; clientY = e.clientY}
	else if (e.changedTouches && e.changedTouches.length > 0) {
		var touch = e.changedTouches[e.changedTouches.length - 1]
		clientX = touch.clientX; clientY = touch.clientY}
	else {return}
	mX = (clientX - canPs.x) / 30; mY = (clientY - canPs.y) / 30
	e.preventDefault();
}


function getBodyAtMouse() {
	mousePVec = new b2Vec2(mX, mY)
	var aabb = new b2AABB()
	aabb.lowerBound.Set(mX - 0.001, mY - 0.001)
	aabb.upperBound.Set(mX + 0.001, mY + 0.001)
	selB = null
	w.QueryAABB(getBodyCB, aabb)
	return selB;
}

function getBodyCB(f) {
	if (f.GetBody().GetType() != b2Body.b2_staticBody) {
		if (f.GetShape().TestPoint(f.GetBody().GetTransform(),
		 mousePVec)) {
			selB = f.GetBody()
			//return false
		}
	}
	return true;
}

function update() {

	if (isMouseDown && (!mJt)) {
		var b = getBodyAtMouse();
		if (b) {
			var md = new b2MouseJointDef()
			md.bodyA = w.GetGroundBody()
			md.bodyB = b
			md.target.Set(mX, mY)
			md.collideConnected = true
			md.maxForce = 300.0 * b.GetMass()
			mJt = w.CreateJoint(md)
			b.SetAwake(true)
		}
	}
	
	if (mJt) {
		if (isMouseDown) {
				mJt.SetTarget(new b2Vec2(mX, mY))
		}
		else {
			w.DestroyJoint(mJt)
			mJt = null
		}
	}

	w.Step(1 / 60, 10, 10)
	w.DrawDebugData()
	w.ClearForces()
}





function getElementPosition(element) {

	var elem = element, tagname = "", x = 0, y = 0
	while ((O(elem)  ) && (D(elem.tagName)  )) {
	
		y += elem.offsetTop
		x += elem.offsetLeft
		tagname = elem.tagName.toUpperCase()
		if (tagname == "BODY")
			elem = 0;
		if (O(elem) ) {
			if (O(elem.offsetParent) )
				elem = elem.offsetParent
		}
	}
	
	return {x: x, y: y}

}


function videoTut(){
// https://www.youtube.com/watch?v=Ubfqc983jN8
// video note: he only uses one body.. so joint is global ('spring')
// transform of box is just x,y,r (see setTransform)

// explains why b2d teleportation is bad
// remember: 'mouse' in mouse joint is JUST an x and y .. 
// (can use perlin noise random walk.. ?)
// 1:50 starts mouse jt
// tug body with string, like dJt with body and mouse
// mouse 'tugs' body around (as it (is) moves(ed))
// destroy jt and set ref to null

// START 3:10
// mouse is ground body
// 7:42 code
// END 10:17 'aha!'
// -> KIN..also cool
}