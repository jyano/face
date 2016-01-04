BOX = function () {
	$('<canvas id="playground" width="500" height="200" ></canvas>').A()
	w = $_W(0, 10)
	var fD = new b2FixtureDef;
	fD.shape = new b2PolygonShape;
	fD.density = 1.0;
	fD.friction = 0.5;
	fD.restitution = 1.5;
	fD.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3)
	
	var bD = new b2BodyDef;
	bD.type = b2Body.b2_staticBody;
	bD.position.Set(7, 7);
	w.CreateBody(bD).CreateFixture(fD);
	fD = new b2FixtureDef;
	fD.shape = new b2PolygonShape;
	fD.density = 1.0;
	fD.friction = 0.5;
	fD.restitution = 1.5;
	fD.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3)
	var bD = new b2BodyDef;
	bD.type = b2Body.b2_staticBody;
	bD.position.Set(4, 6);
	w.CreateBody(bD).CreateFixture(fD);
	var dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("playground").getContext("2d"));
	dD.SetDrawScale(20.0);
	dD.SetFillAlpha(0.5);
	dD.SetLineThickness(1.0);
	dD.SetFlags(b2DebugDraw.e_shapeBit);
	w.SetDebugDraw(dD);
	bD.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fD.shape = new b2CircleShape(1.5); //circle shape
		bD.position.Set(7, 0);
		var body = w.CreateBody(bD);
		body.CreateFixture(fD);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0), body.GetWorldCenter()); //Push the shape slightly
	}, 100);
	setInterval(function () {
		w.Step(1 / 60, 10, 10);
		w.DrawDebugData();
		w.ClearForces();
	}, 1000 / 60);
}
 