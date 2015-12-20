 
BX0 = COUNT = function () {
	$box()
	$l('bod count : ' + w.numBods())
	cF = $cF(50)
	b = w.cB($bD())
	b.cF(cF)
	//b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
	function alt() {
		BOXW1 = function () {
			w = $_W()
			w.SDD($dD($.c('z', 1800, 1500)))
			_.ev(.1, function () {
				w.go(1 / 5, '+')
			})
			$bi()
			_.ev(2, function () {
				$ba()
			})
			$l('bodyCOunt:' + w.numBods())
		}
	}
}
BOX = function () {
	$('<canvas id="playground" width="500" height="200" ></canvas>').A()
	world = $_W(0, 10)
	var fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	) 
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(7, 7);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	) 
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(4, 6);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
	debugDraw.SetDrawScale(20.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
	world.SetDebugDraw(debugDraw);
	bodyDef.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fixDef.shape = new b2CircleShape(1.5); //circle shape
		bodyDef.position.Set(7, 0);
		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0), body.GetWorldCenter()); //Push the shape slightly
	}, 100);
	setInterval(function () {
		world.Step(1 / 60, 10, 10);
		world.DrawDebugData();
		world.ClearForces();
	}, 1000 / 60);
}
BOXX = function () {
	$('<canvas id="playground" width="500" height="200" ></canvas>').A()
	world = $_W(0, 10)
	
	var fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(7, 7);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(4, 6);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("playground").getContext("2d"));
	debugDraw.SetDrawScale(20.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
	world.SetDebugDraw(debugDraw);
	bodyDef.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fixDef.shape = new b2CircleShape(1.5); //circle shape
		bodyDef.position.Set(7, 0);
		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0), body.GetWorldCenter()); //Push the shape slightly
	}, 100);
	
	setInterval(function () {
		world.Step(1 / 60, 10, 10);
		world.DrawDebugData();
		world.ClearForces();
	}, 1000 / 60);
} 
BOXXX = $box(function () {
	w.sB(210, 210).cF(
			_$arr([V(-1, 0), V(0, -1), V(1, 0)], 3).de(1).fr(.5).re(1.5)
	)
	w.sB(120, 180).cF(
			_$arr([V(-1, 0), V(0, -1), V(1, 0)], 3).de(1).fr(.5).re(1.5)
	)
	var i = 0;
	_.ev(.1, function () {
		var imp = V(i++ % 2 ? 0.5 : -0.5, 0)
		w.cB($dB(210, 0)).I(imp).cF($fD($cH(45)).de(1).fr(.5).re(1.5))
	})
})
 