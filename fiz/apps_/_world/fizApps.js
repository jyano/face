 
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
 
	MAZE = BXD = function () {
		$box()
		w.grid(maze, 100, 200, 20, 30)
		w.bump(400, 200, 10)
		b = w.D(200, 100)
		b.f($fD($cH(100, 200)))
		b.f($fD($pH(100, 200)))
	}
	FPAR = DICK = BED = function () {
		y = W().ship()
		w.A($dB(300, 300), guyInBed) // have to fix w.dyn
		w.D(100, 100, b2d.fxPar(guyInBed))
		w.D(400, 300, b2d.fxPar(dick)
		)
		w.D(400, 300, dick)
	}
 
VORTEX = function () {
	w = b2d.W()
	y = w.ship()
	w.rectStat(200, 250, 400, 20)
	w.rectStat(400, 250, 20, 40)
	_.times(20, function () {
		w.ball(100, 100, 10)
	})
	vort = w.stat(600, 200, b2d.circ(200).sensor(true)).K('vortex')
	func = function () {
		w.each('ball', function (b) {
			b.towards(600, 200)
		})
	}
	//w.while('vortex', 'ship', func)
	y.while('vortex', func)
}
KINGOFMES = function () {
	w = b2d.W({g: 10}).debug()
	//all jumping together???!
	w.roof.kill()
	w.left.kill()
	w.right.kill()
	w.s.sXY(.8).X(100)
	_.times(15, function () {
		w.addMe(900, 100, 5).trig('feet', function () {
					var p = this
					p.B().rot(0).lV(-2, -10)
				}
		).angDamp(50)//.fixRot()
		w.addMe(300, 100, 5).trig('feet', function () {
			this.B().rot(0).lV(2, -10)
		}).angDamp(50)//.fixRot()
	})
	w.C('r')
}
HAT = function () {   // could i automatically have body listen to their sensors?
	w = b2d.W()
	w.ball().rest(.3)
	p = w.addMe(400, 150, 5)
	p.trig('right')
	p.trig('left')
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
	p.trig('hat',
			function () {
				p.bindSprite('guy')
			})
}
DIF = function () {
	w = b2d.W()
	b = w.S(140, 140, 100, 100).rot(20).DIFF(
			w.S(100, 100, 100, 100).rot(45), '-')
	b3 = w.S(300, 400, 'w', 100, 100)
	b3.sub(//does not keep color!
			w.B(300, 400, 'r', [-100, 10], [-80, -40], [0, -200], [100, 0])
	)
	w.S(450, 300, 'w', 100, 100).minusPolyCirc(550, 300, 100, 20)
	fs = w.S(600, 380, [['r', [-100, 10], [-80, -40], [0, -200], [100, 0]], ['b', 40, 70, 20, -20], ['o', 40, 70, -20, 20]
	]).rot(-20).fixts()
	w.S(720, 400).sep(
			w.S(600, 400).fixt(b2d.poly(100, 100)).minus(fs[0], fs[1], fs[2]))
	b2 = w.S(830, 300)
	b2.poly(100, 100)
	b2.poly(100, 100, 0, 0, 45)
	b2.DIF(w.S(930, 400, 200, 200), '-')
	///
	///
	setTimeout(function () {
		b.dyn();
		b2.dyn()
	}, 3000)
}
CIRCTOPOLY = function () {
	w = b2d.W()
	b = w.S(300, 300, 50)
	w.B(600, 400).poly(b2d.polyCirc(b.fixt().rad(), 10))
}
//destructable terrain
DEST = function () {
	w = b2d.W({g: 1})
	y = w.ship().linDamp(10)
	b = w.brick(800, 300, 200, 800).K('terr')
	can = true
	w.s.X(5000)
	w.beg(function (cx) {
		var fixt
		if (fixt = cx.with('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				setTimeout(function () {// br =  w.brick(bX,bY,60,60).rot(45)
					br = b2d.conc(
							b2d.polyCirc(20, 7)
					).XY(bX, bY)
					b.each(function (f) {
						f.DIFF(br)
					})
					br.kill()
					can = true
				}, 10)
				killIfSmall = function (f) {
					var area = this.area()
					if (area < 20) {
						$l('too small: ' + area)
						f.kill()
					}
				}
			}
		}
	})
	w.show(function () {
		return b.num()
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
 
DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	W()
	r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
	r2 = w.BRICK(300, 300, 400, 10, 'o')
	r3 = w.BRICK(300, 300, 400, 10, 'w')
	r4 = w.BRICK(300, 300, 400, 10, 'w')
	r5 = w.BRICK(300, 300, 400, 10, 'b')
	flipDen = function (r) {
		r.de(r.de() == 0 ? 1 : 0)
	}
	flipStage = function () {
		w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
	}
	flipStage()
	_.ev(5, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
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
FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}
 