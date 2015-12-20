w.D = function (x, y) {
	return this.cB($dB(x, y))
}
b.fD = b.fxD = function (fD) {
	return this.cF( $fD(fD) )
}

CIR = function () {
	$box()

	
	cH = $cH(34)
	//pass a shapeDef to a fixtDef, and pass the fixtDef to b.f
	w.D(350, 200).f($fD($cH(80), '-'))

	//pass a shapeDef to b.fD
	w.D(150, 300).fD($cH(30))
	
	// call b.cF
	w.D(450, 200).cF(80)
	//use w.ball
	//w.ball(650, 300, 100).cF(100, 20, 20)
	//w.ship()
}
SAB = function () {
	$box()
	//pH.sAB handles both box and oriented box!
	tx = function (x, y) {
		var b = w.D(x, y);
		b.f( $fD($cH(4)))
		return function () {
			b.fD($pH().box(arguments))
		}
	}
	tx(100, 100)()
	tx(100, 200)(20)// rt
	tx(100, 300)(20, 20) //w, h (as box)
	tx(100, 370)(20, 20, 20) // w,h,r
	tx(100, 420)(20, 20, 20, 20)// w,h,x,y,rt
	tx(100, 500)(20, 20, 20, 20, 20)
	//
	//pH.sAB handles both box and oriented box!
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
RAD = function () {
	$canW().G(10).roof.kill()
	n = 1
	drp()
	_.ev(1, function () {
		if (n < 300) {
			drp()
		}
	})
	function drp() {
		var b = w.D(350, 200).aV(2).lV(1, 1)
		R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
				b.fD($cH(n *= 1.3))
		$l('n:' + n)
	}
	
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
}
SAA = function () {
	W()
	w.D(150, 200).f($fD($aH(
			[-100, 0], [0, -100],
			[100, -20], [50, 20]
	)))
	w.D(240, 300).f(
			$fD($aH(verts))
	)
	w.D(434, 400).f($aF((verts)))
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
TRI = function () {
	W()
	//long way
	w.D(400, 400).f($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.f(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
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
BX1 = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	ctx = $.cI().C('z')[0].getContext("2d")
	w = $_W(0, 10).aTri(7, 7).aTri(4, 6)
	w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
			.SF(b2DebugDraw.e_shapeBit))
	_.ev(.4, function () {
		w.cB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.aF($fD($_cH(1.5)))
	})
	_.ev(1 / 60, function () {
		w.Step(1 / 60, 10, 10);
		w.DDD();
		w.CF();
	});
}
BX = function () {
	$box()
	w.aTri(7, 7).aTri(4, 6)
	_.ev(.4, function () {
		w.dB(210, 0).aF($cF(15)).lV$()
	})
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
BOX1 = function () {
	$box()
	w.tri(4, 6)
	w.tri(7, 7)
	_.ev(1, function () {
		var b = w.cB($dB(210, 0)).aF(
				$fD($cH(15)))
		b.lV(R() ? 1 : -1, R() ? 1 : -1)
	})
}
BOXX = $box(function () {
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

FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}
 
err()
function err(){
	STAIRS = function () {
		w = b2d.W()
		w.S(0, 0, [
			[500, 500, 600, 100],
			[500, 400, 500, 100],
			[500, 300, 500, 100],
			[500, 350, 450, 100],
			[320, 400, 50, 600]])
	}
	NAMESPACE = function () {
// w.B(200,200,b2d.fixts('tri3'))
//w.B(200,200,b2d.fixts('c50'))
		b2d.fixts = {}
		b2d.fixts.tri3 = [[-100, 0], [0, -50], [400, 0]]
		b2d.fixts.c50 = [50]
	}
	FRICKY = function () {
		w = b2d.W()
		b2d.fricky = [[10, 10], [20, 40, 0, 0, 90, [1, 0, 0]], [20, 40, 0, 0, 180, [1, 0, 0]]]
		b2d.bouncy = [[10, 10], [20, 40, 0, 0, 90, [1, .9, 1]], [20, 40, 0, 0, 180, [1, .9, 1]]]
		b2d.massy = [[10, 10], [20, 40, 0, 0, 90, [2, .5, 1]], [20, 40, 0, 0, 180, [2, .5, 1]]]
		b2d.fluffy = [[10, 10], [20, 40, 0, 0, 90, [.1, .5, .1]], [20, 40, 0, 0, 180, [.1, .5, .1]]]
		w.S(600, 100, b2d.fricky)
		w.S(700, 100, b2d.bouncy)
		w.S(800, 100, b2d.massy)
		w.S(900, 100, b2d.fluffy)
	}
	MAKEWALLS = function () {
		makeWalls2 = [[10, 300, 20, 460], [990, 300, 20, 460], [250, 0, 400, 20], [730, 0, 400, 20], [250, 590, 400, 20], [730, 590, 400, 20]] //bas in the canvas size?
		makeWallsTiny = [[10, 300, 20, 600], [990, 300, 20, 600], [300, 0, 1200, 20], [300, 590, 1200, 20]]
		makeWallsFull = [[10, 300, 20, 1200], [990, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
		makeWallsLong = [[10, 300, 20, 1200], [1600, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
	}
	TRAIL = function () {
		W0().db().pen('welcome to tensor (damping) controller')
		y = w.ship()
		co = w.tCo()
		_.t(30, function () {
			var b = w.BALL(400, 300, 20, 'w').lV(10, 20).lD(0)
			co.A(b)
		})
	}
	DEB = function () {
		W()
		b = w.ball(300, 400)
		x = w.box(200, 400)
		j = b.spring(x)
	}//make a world with a stage.. well with three stages!!!!
	WOR = function () {
		W()
		w.ball(300, 400, 20)
	}
	W0 = function () {
		return W({g: 0})
	}
	W00 = function () {
		return W({g: 0, w: 0})
	}
	DENSITY = DSY = function () {//nice it tells me den when i click on bods( /fxs ? )
		W({g: 0, W: 600, H: 500})
		b = w.ball(100, 100, 65).de(1)
		f = b.f()
		h = f.H()
		d = f.mD()
		m = f.mass()
		x = w.box(300, 200, 30, 50).de(1)
		_.in(1, function () {
			x.BOX(200, 30).de(1)
		})
		w.b$(function (fixture) {
			var b = this
			$l('')
			$l('---- MASS ----')
			$l('total mass: ' + b.GetMass().toFixed(3))
			b._m()
			$l('_')
			$l('')
		})
	}
	IMPR = function () {
		W({g: 0, w: 0}).Y()
		w.D(200, 235, 'b', 10).lV(20, 0).d(10)
		w.D(900, 200, 'r', 100, 100).rt(45)
		r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
		r.$(function () {
			this.B().I(-1000, -2000)
		})
		f = r.f()
		w.i.dot(856, 240)
		s = $Sg(0, 0, 1200, 600)
		s1 = $Sg(1200, 0, 0, 600)
		lArr = 'the shape world transform'
		// nl = '2Vec2 — returns the hit fraction.'
		// You can use this to compute the contact point
		// p = (1 - lambda) segment.p1 + lambda segment.p2.
		// sg = ''//segment:b2Segment — returns the normal at the contact point.
		// If there is no intersection, the normal is not set.
		maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
		s.TestSegment(lArr, nl, s1, maxLam)
		ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
	}
	BOX0 = function () {
		w = _$boxWorld()
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
	FSEL = function () {
		box(function () {
		})
		w.circleStat(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		n = 0
		w.qPoint(300, 400, function (f, b, w) {
			$l("hit" + n++)
			//b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
	}
	CLICKKILL = function () {
		box(function () {
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cv.click(function (e) {
			e.preventDefault();
			cvPos = cv.position()
			cvPos.x = cvPos.left
			cvPos.y = cvPos.top
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			$l('mousex ' + mouse.x)
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				b.kill()
				//	w.mj = w.mJ(b, o.x, o.y)
				//return true
			})
			return false
		})
	}
	FSEL = function () {
		n = 0
		box(function () {
			//$l('tick-'+ n++)
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		w.mouse = {x: 0, y: 0}
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.click(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.mouse = mouse
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	FSEL = function () {
		box(function () {
			if (w.mj) {
				var targ = w.mj.targ()
				$l('mouse joint target: ' + targ.x + ', ' + targ.y)
				w.mj.targ(mouseX, mouseY)
			}
			else {
				$l('no mouse joint')
			}
		})
		w.G(0)
		b = w.circle(420, 400, 150)
		w.circle(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
				mj.frq(120)
				mj.dmpRat(.01)
				mj.mxFo(100000)
				fq = mj.frq()
				$l(fq)
				w.mj = mj
			})
			return false
		})
		cv.dblclick(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f) {
				f.B().kill()
			})
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			mouseX = mouse.x
			mouseY = mouse.y
		})
		cv.mouseup(function () {
			w.DestroyJoint(w.mj)
			w.mj = null
		})
	}
	FSEL0 = function () {
		box0(function () {
			if (w.mj) {
				$l('yes')
			} else {
				$l('no')
			}
		})
		w.circle(420, 400, 150)
		w.circleStat(300, 400, 50)
		w.circleStat(400, 550, 50)
		w.circleStat(500, 550, 50)
		w.circleStat(550, 550, 50)
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		cv.mousedown(function (e) {
			e.preventDefault();
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			w.qPoint(mouse.x, mouse.y, function (f, b, w) {
				w.mj = w.mJ(b, mouse.x, mouse.y)
			})
			return false
		})
		cv.mousemove(function (e) {
			var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
			if (w.mj) {
				w.mj.tg(mouse.x, mouse.y)
			}
		})
		cv.mouseup(function () {
			w.mj = null
		})
	}
	BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
		w = $_W()
		w.SDD($dD().ctx(
						$.c('z', 1800, 1500)[0].getContext('2d'))
		)
		//the_circle = new b2CircleDef()
		n = 0
		_.ev(.1, function () {
			if (F(fn)) {
				fn(n)
			}
			n++
			w.N(1 / 5)
		})
	}
	BOXW = function () {
		w = $_W().sDD(
				$dD($.c('z', 1800, 1500)))
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

 