//https://github.com/hecht-software/box2dweb/blob/master/example.html
BXEX1=function(){
	$.c().id('canvas')
	world = new b2World(new b2Vec2(0, 10) ,  true)
 var fixDef = new b2FixtureDef;
 fixDef.density = 1.0;
 fixDef.friction = 0.5;
 fixDef.restitution = 0.2;

 var bodyDef = new b2BodyDef;

 //create ground
 bodyDef.type = b2Body.b2_staticBody;
 bodyDef.position.x = 9;
 bodyDef.position.y = 13;
 fixDef.shape = new b2PolygonShape;
 fixDef.shape.SetAsBox(10, 0.5);
 world.CreateBody(bodyDef).CreateFixture(fixDef);

 //create some objects
 bodyDef.type = b2Body.b2_dynamicBody;
 for(var i = 0; i < 10; ++i) {
 if(Math.random() > 0.5) {
 fixDef.shape = new b2PolygonShape;
 fixDef.shape.SetAsBox(
 Math.random() + 0.1 //half width
 ,  Math.random() + 0.1 //half height
 );
 } else {
 fixDef.shape = new b2CircleShape(
 Math.random() + 0.1 //radius
 );
 }
 bodyDef.position.x = Math.random() * 10;
 bodyDef.position.y = Math.random() * 10;
 world.CreateBody(bodyDef).CreateFixture(fixDef);
 }

 //setup debug draw
 var debugDraw = new b2DebugDraw();
 
 debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"))
 
 debugDraw.SetDrawScale(30.0);
 debugDraw.SetFillAlpha(0.3);
 debugDraw.SetLineThickness(1.0);
 debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
 world.SetDebugDraw(debugDraw);

 window.setInterval(update, 1000 / 60);
	
 function update() {
 world.Step(
 1 / 60   //frame-rate
 ,  10       //velocity iterations
 ,  10       //position iterations
 );
 world.DrawDebugData();
 world.ClearForces();
 }
 
}

BXEX2=function(){
	$.c().id('canvas') 
 
	  world = new b2World(
				new b2Vec2(0, 10)    //gravity
				, true                 //allow sleep
		);
		var fixDef = new b2FixtureDef;
		fixDef.density = 1.0;
		fixDef.friction = 0.5;
		fixDef.restitution = 0.2;
		var bodyDef = new b2BodyDef;
		//create ground
		bodyDef.type = b2Body.b2_staticBody;
		fixDef.shape = new b2PolygonShape;
		fixDef.shape.SetAsBox(20, 2);
		bodyDef.position.Set(10, 400 / 30 + 1.8);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		bodyDef.position.Set(10, -1.8);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		fixDef.shape.SetAsBox(2, 14);
		bodyDef.position.Set(-1.8, 13);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		bodyDef.position.Set(21.8, 13);
		world.CreateBody(bodyDef).CreateFixture(fixDef);
		//create some objects
		bodyDef.type = b2Body.b2_dynamicBody;
		for (var i = 0; i < 10; ++i) {
			if (Math.random() > 0.5) {
				fixDef.shape = new b2PolygonShape;
				fixDef.shape.SetAsBox(
						Math.random() + 0.1 //half width
						, Math.random() + 0.1 //half height
				);
			} else {
				fixDef.shape = new b2CircleShape(
						Math.random() + 0.1 //radius
				);
			}
			bodyDef.position.x = Math.random() * 10;
			bodyDef.position.y = Math.random() * 10;
			world.CreateBody(bodyDef).CreateFixture(fixDef);
		}
		//setup debug draw
		var debugDraw = new b2DebugDraw();
		debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
		debugDraw.SetDrawScale(30.0);
		debugDraw.SetFillAlpha(0.5);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
		world.SetDebugDraw(debugDraw);
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
			// Query the world for overlapping shapes.
			selectedBody = null;
			world.QueryAABB(getBodyCB, aabb);
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
					md.bodyA = world.GetGroundBody();
					md.bodyB = body;
					md.target.Set(mouseX, mouseY);
					md.collideConnected = true;
					md.maxForce = 300.0 * body.GetMass();
					mouseJoint = world.CreateJoint(md);
					body.SetAwake(true);
				}
			}
			if (mouseJoint) {
				if (isMouseDown) {
					mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
				} else {
					world.DestroyJoint(mouseJoint);
					mouseJoint = null;
				}
			}
			world.Step(1 / 60, 10, 10);
			world.DrawDebugData();
			world.ClearForces();
		};
		//helpers
		//http://js-tut.aardon.de/js-tut/tutorial/position.html
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