BXEX2 = function () {
	$.c().id('canvas')
	w = new b2World(new b2Vec2(0, 10), true) //gravity //allow sleep
	fD = new b2FixtureDef;
	fD.density = 1.0;
	fD.friction = 0.5;
	fD.restitution = 0.2;
	bD = new b2BodyDef;
	//create ground
	bD.type = b2Body.b2_staticBody;
	fD.shape = new b2PolygonShape;
	fD.shape.SetAsBox(20, 2);
	bD.position.Set(10, 400 / 30 + 1.8);
	w.CreateBody(bD).CreateFixture(fD);
	bD.position.Set(10, -1.8);
	w.CreateBody(bD).CreateFixture(fD);
	fD.shape.SetAsBox(2, 14);
	bD.position.Set(-1.8, 13);
	w.CreateBody(bD).CreateFixture(fD);
	bD.position.Set(21.8, 13);
	w.CreateBody(bD).CreateFixture(fD);
	//create some objects
	bD.type = b2Body.b2_dynamicBody;
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(
					M.r() + 0.1 //half width
					, M.r() + 0.1 //half height
			);
		} else {
			fD.shape = new b2CircleShape(
					M.r() + 0.1 //radius
			);
		}
		bD.position.x = M.r() * 10;
		bD.position.y = M.r() * 10;
		w.CreateBody(bD).CreateFixture(fD);
	}
	//setup debug draw
	dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("canvas").getContext("2d"));
	dD.SetDrawScale(30.0);
	dD.SetFillAlpha(0.5);
	dD.SetLineThickness(1.0);
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	w.SetDebugDraw(dD);
	window.setInterval(update, 1000 / 60);
	//mouse
	var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
	var canvasPosition = getElementPosition(document.getElementById("canvas"));
	
	function handleMouseDown(e) {
		isMouseDown = true;
		handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMove, true);
		document.addEventListener("touchmove", handleMouseMove, true);
	}
	
	document.addEventListener("mousedown", handleMouseDown, true);
	document.addEventListener("touchstart", handleMouseDown, true);
	function handleMouseUp() {
		document.removeEventListener("mousemove", handleMouseMove, true);
		document.removeEventListener("touchmove", handleMouseMove, true);
		isMouseDown = false;
		mouseX = undefined;
		mouseY = undefined;
	}
	
	document.addEventListener("mouseup", handleMouseUp, true);
	document.addEventListener("touchend", handleMouseUp, true);
	function handleMouseMove(e) {
		var clientX, clientY;
		if (e.clientX) {
			clientX = e.clientX;
			clientY = e.clientY;
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1];
			clientX = touch.clientX;
			clientY = touch.clientY;
		}
		else {
			return;
		}
		mouseX = (clientX - canvasPosition.x) / 30;
		mouseY = (clientY - canvasPosition.y) / 30;
		e.preventDefault();
	};
	function getBodyAtMouse() {
		mousePVec = new b2Vec2(mouseX, mouseY);
		var aabb = new b2AABB();
		aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
		aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);
		// Query the w for overlapping shapes.
		selectedBody = null;
		w.QueryAABB(getBodyCB, aabb);
		return selectedBody;
	}
	
	function getBodyCB(fixture) {
		if (fixture.GetBody().GetType() != b2Body.b2_staticBody) {
			if (fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
				selectedBody = fixture.GetBody();
				return false;
			}
		}
		return true;
	}
	
	//update
	function update() {
		if (isMouseDown && (!mouseJoint)) {
			var body = getBodyAtMouse();
			if (body) {
				var md = new b2MouseJointDef();
				md.bodyA = w.GetGroundBody();
				md.bodyB = body;
				md.target.Set(mouseX, mouseY);
				md.collideConnected = true;
				md.maxForce = 300.0 * body.GetMass();
				mouseJoint = w.CreateJoint(md);
				body.SetAwake(true);
			}
		}
		if (mouseJoint) {
			if (isMouseDown) {
				mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
			} else {
				w.DestroyJoint(mouseJoint);
				mouseJoint = null;
			}
		}
		w.Step(1 / 60, 10, 10);
		w.DrawDebugData();
		w.ClearForces();
	}
	
	function getElementPosition(element) {
		var elem = element, tagname = "", x = 0, y = 0;
		while ((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
			y += elem.offsetTop;
			x += elem.offsetLeft;
			tagname = elem.tagName.toUpperCase();
			if (tagname == "BODY")
				elem = 0;
			if (typeof(elem) == "object") {
				if (typeof(elem.offsetParent) == "object")
					elem = elem.offsetParent;
			}
		}
		return {x: x, y: y};
	}
}
