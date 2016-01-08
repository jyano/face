BXEX1 = function () {
	
	$.c().id('canvas')
	
	w = new b2World(new b2Vec2(0, 10), true)
	
	fD = new b2FixtureDef
	fD.density = 1
	fD.friction = 0.5
	fD.restitution = 0.2
	bD = new b2BodyDef
	
	//create ground
	bD.type = b2Body.b2_staticBody;
	bD.position.x = 9;
	bD.position.y = 13;
	fD.shape = new b2PolygonShape;
	fD.shape.SetAsBox(10, 0.5);
	w.CreateBody(bD).CreateFixture(fD);
	bD.type = b2Body.b2_dynamicBody;
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(M.r() + 0.1, M.r() + 0.1)
		} //half width //half height
		else {
			fD.shape = new b2CircleShape(M.r() + 0.1)
		}
		bD.position.x = M.r() * 10;
		bD.position.y = M.r() * 10;
		w.CreateBody(bD).CreateFixture(fD)
	}
	dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("canvas").getContext("2d"))
	dD.SetDrawScale(30.0);
	dD.SetFillAlpha(0.3);
	dD.SetLineThickness(1.0);
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	w.SetDebugDraw(dD);
	window.setInterval(update, 1000 / 60);
	function update() {
		w.Step(1 / 60, 10, 10)
		//frame-rate  //velocity iterations  //position iterations
		w.DrawDebugData();
		w.ClearForces();
	}
}

 
function links() {
	
	//helpers:  /err??     http://js-tut.aardon.de/js-tut/tutorial/position.html
//https://github.com/hecht-software/box2dweb/blob/master/example.html
}