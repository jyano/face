BOX = function () {
	$('<canvas id="playground" width="500" height="200" ></canvas>').A()
	world = wor(0, 10)
	var fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	); //triangle shape
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
	); //triangle shape
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
BOX0 = function () {
	w = world()
	$l('bod count : ' + w.numBods())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	b = w.cB($dBD())
	b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
BX = function (fn) {//http://jsfiddle.net/digitalbush/JrzPH/
	w = world()
	w.sDD(dD = $dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	n = 0
	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.go(1 / 5)
	})
}
BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	w = $bW().sDD($dD(x, 30))
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	$bi()
	b = $ba()
	$l(w.numBods())
	T.t(function () {
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	})
}
BOX11 = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500)))
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
GRAV = function () {
	W({g: 10}).Y()
	balls = function () {
		w.D(100, 100, 'a', 50).d(1)
		w.D(100, 200, 'c', 40).d(1)
		w.D(100, 100, 'd', 50).d(1)
		w.D(100, 200, 'e', 40).d(1)
		w.D(100, 100, 'f', 50).d(1)
		w.D(100, 200, 'h', 40).d(1)
		w.D(100, 100, 'i', 50).d(1)
		w.D(100, 200, 'j', 40).d(1)
		w.D(100, 100, 'k', 50).d(1)
		w.D(100, 200, 'l', 40).d(1)
	};
	balls()
	range = w.pJ(
			w.S(600, 300, 'q', 220, 20),
			w.D(600, 300, 's', 20, 250).lD(10),
			V(1, 0)).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	cjs.t(function () {
		w.G(range.val())
		w.e(function (b) {
			b.I(0, .1)
		})
	})
}
DESTROYJOINT = function () {
	w = b2d.W()
	//w.startKilling();
	w.floor.rest(0)
	y = w.ship().XY(400, 170).rot(265).stat()
	w.beg(function (cx) {
		cx.with('bul', function (f) {
			var b = f.B()
			this.B().kill()
			if (b != y) {
				b.kill()
			}
		})
	})
	base = w.S(255, 50, 'r', 60, 15)
	body = link(255, 60)
	base.rev(body)
	/*
	
	 prev= body
	
	 w.rev(prev, body= link(255,90)  ); prev=body
	 w.rev(prev, body= link(255,120)  ); prev=body
	
	 bef =  body = link( 255, 150,'b' )
	
	 w.rev(prev, body); prev=body
	
	
	 red = body = link( 255, 180,'r' )
	
	 j1= w.rev(prev, body); prev=body
	
	 aft = body = link( 255, 210 ,'a')
	
	 j2= w.rev(prev, body); prev=body
	
	
	
	 je = aft.GetJointList()
	
	 w.rev(prev, body=link(255,240)  ); prev=body
	 w.rev(prev, body=link(255,270)  ); prev=body
	 w.rev(prev, body=link(255,300)  ); prev=body
	 w.rev(prev, body=link(255,330)  ); prev=body
	 ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)
	
	 */
	function link(x, y, col) {
		col = col || 'w'
		return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
	}
}
FORCES = function () {
	w = b2d.W({g: 0}).db()
	b = w.B(400, 400, 'o', 200, 200).bindSprite('me')
	cjs.tick(function () {
		b.I(0, -400, b.GetWorldPoint(V(100, -100).div()))
	})
	w.player('thrust')
}
LINVEL = function () {
	w = b2d.W({g: 0}).db()
	_.times(10, function () {
		w.B(300, 300, 'y', 50)
	})
	setInterval(function () {
		w.each(function (b) {
			b.lV(0, 20)
		})
	}, 1000)
}
GRAVITY = function () {
	w = b2d.W({g: 0});
	w.B(100, 100, 10).constF(5000, -200000)
}
IMP = function () {
	w = b2d.W({g: 0})
	w.B(100, 500, 30, 30).rot(2)
	b = w.B(300, 500, 30, 30).rot(1).fixedRot(.2)
	t = {
		i: function () {
			b.I(V(10, -30), b.worldCenter())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			setInterval(function () {
				b.F(V(0, -3), b.worldCenter())
			}, 100)
		}
	}
}
SCALE = function () {
	w = b2d.W() //hurts mouse joint
	var x = 400, y = 440, v = {x: 0, y: 0}
	w.S(400, 300, 40);
	w.S(290, 350, 40);
	w.S(280, 220, 40)
	rad = 10
	b = w.B(x, y, rad).lV(v)
	cjs.tick(function () {
		b.fixt().kill()
		x = b.X();
		y = b.Y();
		v = b.lV();
		rad += .1
		b = w.B(x, y, rad).lV(v)
	})
}
CLONE = function () {
	w = b2d.W()
	w.roof.kill()
	b = w.B(400, 400, [[20], [20, 100, 0], [20, 0, 100], [100, 200]])
	setInterval(function () {
		b.I(0, -1000).clone()
	}, 3000)
	w.ship()
}
MASSCLICKJUMP = function () {
	w = b2d.W({g: 100}).db() //funny
	_.each([
				w.B(100, 200, 'r', 150, 100).den(.5),
				w.B(100, 10, 'b', 30, 60).den(.5).rest(2),
				w.B(500, 400, 'y', 50, 100).den(.5)
			],
			function (b) {
				b.click(function () {
					this.I(0, -50)
				})
			})
} 
ROT = function () {
	w = b2d.W()
	y = w.ship().XY(300, 300).stat().rot(1, 10)
}
BSH = BOXSHAPE = function () {
	w = b2d.W()
	/*
	 w.ball()
	
	 b = w.dyn(400,300)//.stat()
	 b.H('o', 50)
	 b.H('r', 50,50)
	 b.H('b', 50,50,50)
	 b.H('g', 50,50,50,50)
	 b.H('w', 50, 50, 50, 50, 50)
	 b.H('u', [-100,0], [0,-50], [200,-10] )
	
	
	
	 b2 = w.dyn(600,300).H([
	 ['o', 50],
	 ['r', 50,50],
	 ['b', 50,50,50],
	 ['g', 50,50,50,50],
	 ['w', 50, 50, 50, 50, 50],
	 ['u', [-100,0], [0,-50], [200,-10]]
	 ])
	
	 */
	b3 = w.dyn(600, 300)
	b3.H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
 

 