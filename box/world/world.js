$L('can', 'grav')
$Wor = function () {
	//= _$W
	var g = G(arguments), o
	o = // g.O? g.f:
			g.O_ ? {grav: g.f, doSleep: g.s} :
					N(g.s) ? {grav: V(g.f, g.s), doSleep: g.t} :
							N(g.f) ? {grav: V(0, g.f), doSleep: g.s} :
							{grav: V(0, 10), doSleep: g.f}
	o.doSleep = U(o.doSleep) ? true : o.doSleep ? true : false
	return w = new b2d.W(o.grav, o.doSleep)
}
$box = function () {
	bx.can()
	$Wor().bug()
	w.loop()
	return w
}
w.step = function (time, a, b) {
	var w = this
	w._step = function () {
		var args = G(arguments)
		this.Step.apply(this, args)
		return this
	}
	return this._step(time, N(a, 8), N(b, 5))
}
w.draw = w.stepDraw = function (time, a, b) {
	// = w.N = w.go
	time = N(time, 1 / 60)
	return this.step(time, a, b).DDD().CF()
}
w.bug = function (id) {
	var can, ctx
	can = id? $("#" + id)[0]: $0("#canvas")
	ctx= can.getContext("2d")
	return this.SDD(
			$dD().ctx( ctx ).sc(20).fAl(0.5).lT(1).SF(bx.DD.hBit))
}
w.loop  = function (time, b, c) {
	//= w.ev
	var w = this, g = G(arguments)
	_.ev(time = N(time, 1 / 60), function () {
		w.stepDraw(time, b, c)
	})
	return w
}
function can() {
	bx.can = function () {
		$('<canvas id="canvas" width="500" height="200" ></canvas>').A()
	}
	$.xI = function (id, col) {
		return $.cI(id).C(col)[0].getContext("2d")
	}
}
function grav() {
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	w.gv = w.G = function (x, y) {
		var w = this, v, gv
		var gv = w.GG()
		if (U(x)) {
			return gv
		}
		if (N(x)) {
			v = N(y) ? V(x, y) : V(0, x)
		}
		if (x == 'flip') {
			v = V(-gv.x, -gv.y)
		}
		return w.SG(v)
		function alt() {
			w.G = function (x, y) {
				var v, currGrav = this.GetGravity()
				if (U(x)) {
					return currGrav
				}
				if (N(x)) {
					v = N(y) ? V(x, y) : V(0, x)
				}
				if (x == 'flip') {
					v = V(-currGrav.x, -currGrav.y)
				}
				w.SetGravity(v)
				return this
			}
			w.G = function (x, y) {
				var w = this,
						v, currG = w.GetGravity()
				if (U(x)) {
					return currG
				}
				if (N(x)) {
					v = N(y) ? V(x, y) : V(0, x)
				}
				else if (x == 'flip') {
					v = V(-currG.x, -currG.y)
				}
				w.SetGravity(v)
				return w
				function alt() {
					w.G = function (x, y) {
						var v, currGrav = this.GetGravity()
						if (U(x)) {
							return currGrav
						}
						if (N(x)) {
							v = N(y) ? V(x, y) : V(0, x)
						}
						if (x == 'flip') {
							v = V(-currGrav.x, -currGrav.y)
						}
						w.SetGravity(v)
						return this
					}
				}
			}
		}
	}
}
function _pre() {
	w.CF = function () {
		this.ClearForces();
		return this
	}
	w.DDD = function () {
		this.DrawDebugData();
		return this
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
}
function _post(){
	$boxFn = function (fn) {
		return function () {
			$box()
			fn()
		}
	}}
	
 
BOX1 = function () {
	$box()
	world = w
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
 bodyDef.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fixDef.shape = new b2CircleShape(1.5); //circle shape
		bodyDef.position.Set(7, 0);
		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0),
				body.GetWorldCenter()); //Push the shape slightly
	}, 100);
	 
}
BOX = function () {
	$box()
	w.aAF(210, 210, [V(-30, 0), V(0, -30), V(30, 0)])
	w.aAF(120, 180, [V(-30, 0), V(0, -30), V(30, 0)])
	var i = 0
	_.ev(.2, function () {
		w.cCB(210, 0, 45).I(V(i++ % 2 ? 0.5 : -0.5, 0))
	})
}
BX0 = COUNT = function () {
	$box()
	$l('bod count : ' + w.numBods())
	cF = $cF(50)
	b = w.cB($bD())
	b.cF(cF)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
BOXW1 = function () {
	$box()
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
