BCOL2 = function () {
	w = b2d.W().startKilling()
	y = w.ship()
	_.times(10, function () {
		w.ball(100, 100, 20).K('ball')
	})
	b = w.ball(400, 300, 20).K('ball').stat()
	y.coll('ball', function (b) {
		$l('coll with ball')
		y.col2(function (a) {
			if (a != b) {
				a.B().dot()
			}
		})
	})
	// cjs.tick(function(){ y.col2( function(a){    a.B().setDestroy()   })  })
}
WHEN = function () {
	w = b2d.W()
	b = w.ball(500, 200, 30).K('z')
	b.when('z',
			function () {
				$l('beg')
			},
			function () {
				$l('end')
			}
	)
}
WHILE = function () {
	w = b2d.W({g: 0}).debug()
	y = w.ship()
	//  w.beg(y, function(){$l('aha')}
	y.while(function () {
		$l('aha')
	})
}
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	$t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump')
	p.cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
//****
ONEWAYPLATFORM = function () {
	w = b2d.W()
	//  Both PreSolve and PostSolve give you a b2Contact pointer,
	// so we have access to the same points and normal information we just looked at for BeginContact.
	// PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated,
	// or even to cancel the response altogether,
	// and from PostSolve we can find out what the collision response was.
	//     Here are the alterations you can make to the contact in PreSolve:
	//  c.SetFriction( friction)  // persists for duration of contact
	//  c.SetRestitution(  restitution)   //persists for duration of contact
	//  c.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
	// will disable the contact,
	// meaning that the collision response that normally would have been applied will be skipped.
	// You can use this to temporarily allow objects to pass through each other
	// . A classic example of this is the one-way wall or platform,
	// where the player is able to pass through an otherwise solid object,
	// depending on various criteria that can only be checked at runtime,
	// like the position of the player and which direction direction they are heading, etc.
	// It's important to note that the contact will revert back to being enabled in the next time step,
	// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
	pf = w.platform(300, 300, 500, 40)
	p = w.player('symmetrical').fixRot()
	w.ball()
	w.pre(function (cx) {
		if (cx.with('platform', 'player')) {
			if (p.Y() > pf.Y()) {
				cx.SetEnabled(false)
			}
		}
	})
}
//***
THROTTLE = function () {
	w = b2d.W()
	ball = w.ball(300, 300, 100)
	brick = w.brick(300, 500)
	time = 0
	setInterval(function () {
		time++
	}, 1000)
	cjs.tick(function () {
		if (w.flagged('moveBrick')) {
			brick.X(20, '+')
		}
	})
	lastTime = 0
	change = 0
	w.begin(function (con) {
		if (con.with('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
POINTY = function () {
	w = b2d.W()
	w.ball(300, 300, 100)
	w.ball(300, 300, 100)
	w.brick(600, 320)
	w.begin(function (cx) {
		markAABB(cx.A())
		markAABB(cx.B())
	})
	function markAABB(fixt) {
		ab = fixt.GetAABB()
		lb = ab.lowerBound
		up = ab.upperBound
		lx = lb.x * 30
		ly = lb.y * 30
		ux = up.x * 30
		uy = up.y * 30
		dx = ux - lx
		dy = uy - ly
		w.dot('b', ux, uy)
		w.dot('p', lx, ly)
	}
}
COLLCENTER = function () {
	w = b2d.W()
	ball = w.ball(300, 300, 200)
	brick = w.bumper(700, 320)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		w.dot(fB.center())
		w.dot(fA.center())
		w.dot('b', cx.center())
	})
	w.chalk('here you can clearly see that the center of the two fixtures',
			'is not necessarily the same as the contact point,',
			'and can only represent collision center if fixtures are similar size.',
			'..perhaps halfway between this and the actual contact point would be nice')
}
CONTACTPOINT = function () {
	w = b2d.W()
	w.ball()
	w.ball()
	w.ball()
	w.ball()
	w.brick(200, 500, 200, 50)
	w.beg(function (cx) {
		w.dot(cx.point())
	})
	w.chalk('so finding the actual contact point aint hard after all..')
}
VEL = function () {
	w = b2d.W({g: 1})
	w.ball(500, 300, 10).K('tim').den(1)
	me = w.ball(700, 300, 80).K('me').den(1)
	w.beg(function (cx) {
		cx.with('tim', function (other, cx) {
			if (cx.a().is('tim')) {
				me.linVel(cx.vA())
			}
			else {
				me.linVel(cx.vB())
			}
		})
		//this gets th actual velocity of body A at moment of collision !!!!!!!
		// HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
	})
}
VEL1 = function () {
	b2d.W({g: 2})
	b = w.ball(100, 100).den(1)
	b.poly(20, 100).den(1)
	b2 = w.ball(400, 400).den(1)
	b3 = w.ball(100, 100, 10)
	cjs.tick(function () {
		v = b.linVelWor(b)
		b2.linVel(v.div(10))
		//$l(b.linVel())
		//  v = b3.linVel()
		//  vw = b3.linVelWor()
		//   vl = b3.GetLinearVelocityFromLocalPoint()
		//$l('vel: ' + v.x)
		//$l('velW: ' + vw.x)
		// $l('velL: ' + vl.x)
	})
}
NORM = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	w.ball(300, 300).K('stat').stat()
	w.ball()
	w.box()
	w.beg(function (cx) {
		if (cx.with('stat')) {
			m = cx.man()
			n = m.m_normal
			setTimeout(function () {
				w.ball(600, 300, 10).I(n)
			}, 100)
		}
	})
	//  w.show(function(){return 'norm: '+ n.x.toFixed(1) + ', ' + n.y.toFixed(1)   })
}
IMPACTVELSTAT = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	b = w.ball()
	b1 = w.ball(300, 300).K('stat').stat()
	w.beg(function (cx) {
		if (cx.with('stat')) {
			m = cx.man()
			n = m.m_normal
			p = cx.point()
			v1 = b.GetLinearVelocityFromWorldPoint(p)
			v2 = b1.GetLinearVelocityFromWorldPoint(p)
			impactVelocity = V(
					v1.x - v2.x,
					v1.y - v2.y
			)
			setTimeout(function () {
				w.ball(600, 300, 10).I(impactVelocity)
			}, 100)
		}
	})
}
IMPACTVEL = function () {
	w = b2d.W({g: 0}).startKilling()
	n = V()
	b = w.ball()
	b1 = w.ball(300, 300)
	w.beg(function (cx) {
		if (cx.with(b, b1)) {
			m = cx.man()
			n = m.m_normal
			p = cx.point()
			v1 = b.GetLinearVelocityFromWorldPoint(p)
			v2 = b1.GetLinearVelocityFromWorldPoint(p)
			impactVelocity = V(
					v1.x - v2.x,
					v1.y - v2.y
			)
			setTimeout(function () {
				var temp = w.ball(600, 300, 10).I(impactVelocity)
				setTimeout(function () {
					temp.kill()
				}, 500)
			}, 100)
		}
	})
}
WORLDVEL = function () {
	w = wor({
		mJ: false,
		g: 0
	})
	b = w.ball(300, 300, 150).den(1)
	b2 = w.ball(300, 300, 10)
	w.rev(b, b2
	)
	p1 = V(300, 300)
	p2 = V(360, 360)
	p3 = V(450, 450)
	w.dot(p1)
	w.dot(p2)
	w.dot(p3)
	//  b.ApplyTorque(10)
	//  b.linVel(.2,0)
	w.click(function (x, y) {
		v = b.linVelWor(x, y)
		$l(v.x + ' ' + v.y)
	})
	b.angVel(1)
}
YELLOWSHIP = function () {
	var w = b2d.W({g: 4}).debug()
	var y = w.yShip(300, 400, 3).rot(90)
	var y1 = w.yShip(600, 400, 3).rot(90)
	var onInt = function () {
		y.I(0, -.7).rot(4, '+')
		y1.linVel(0, -3).rot(4, '+')
	}
	//  setInterval(onInt,500)
	var onTime = function () {
		y.I(0, -4)
		y1.I(4, 0)
		//  .I(0.-4)
	}
	setTimeout(onTime, 500)
}
YELLOWSHIPWATCH = function () {

//ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
	I(YELLOWSHIP, 1000)
}
TOURNEY = function () {
	var n = 0, x = 50, Y = 50
	w = b2d.W({g: 0})
			.startKilling()//.debug()
			.beg(function (cx) {
				if (cx.with('guyBul', 'bad')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
				if (cx.with('badBul', 'guy')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
			})
	y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
			.rest(0).fric(1).K('guy')
			.shootOnSpace('guyBul')
			.thrustControl()
	_.times(6, function () {
		window['y' + n++] = w.yShip(x += 50, Y += 50, 3).chug(5)
				.K('bad').shootOnInt(1000, 'badBul').rot(45)
	})
}
SPACEBALL = function () {
	w = b2d.W({g: 0})
			.startKilling().debug()
			.beg(function (cx) {
				if (cx.with('guyBul', 'bad')) {
					cx.a().K('destroy')
					cx.b().K('destroy')
				}
			})
	y = w.yShip('blue', 100, 200, 6).angDamp(1).linDamp(1)
			.rest(0).fric(1).K('guy')
			.shootOnInt(200)
			.thrustControl()
	//    b=  w.ball(200,200, 80).den(1)
	b = w.rect(200, 200, 150, 150).den(1)
}
WAR = function () {
	var n = 0, x = 50, Y = 50
	w = b2d.W({g: 0}).debug().startKilling().beg(function (cx) {
		if (cx.with('bul', 'bad')) {
			cx.a().K('destroy')
			cx.b().K('destroy')
		}
	})
	_.times(100, function () {
		window['y' + n++] = w.yShip(x += 4, Y += 2, 3).chug(5)
				.K('bad').shootOnInt(300, 'bul').rot(45)
	})
}
YELLOWSHIPWTF = function () {
	var w = b2d.W({g: 3}).debug()
	y = w.yShip(300, 400, 3)
	y.dir = function () {
		var v = this.GetWorldVector(
				V(
						Math.toRadians(0),
						Math.toRadians(90)
				)
		)
		v.x = Math.toDegrees(v.x)
		v.y = Math.toDegrees(v.y)
		return v
	}
	I(function () {
		var v = y.dir()
		$l(v)
		y.I(0, v.y / 100).rot(1, '+')
	}, 100)
}
FILTDAT = function () {
	w = b2d.W()
	w.B(400, 400, 30).grp(-1)
	w.B(400, 400, 40).grp(-1)
	w.B(400, 400, 50).grp(-1)
	w.B(400, 400, 50, 50).grp(-2)
	w.B(400, 400, 60, 60).grp(-2)
	w.B(400, 400, 70, 70).grp(-2)
	//w.right.grp(-1)
}
FILTSENS = function () {
	w = b2d.W()
	b = w.B(400, 400, 30).sen()
	//w.right.grp(-1)
}
PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
	pf = plat(900, 1700)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
//point:
CXPT = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function
BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	b.bS('sun')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
//
COLLIDE = function () {
	w = b2d.W()
	w.platform(400, 500, 40, 20)
	w.ball(440, 100, 50).K('dot')
	w.coll('ball', 'platform', function () {
		w.box(300, 20)
	})
	w.coll('box', 'platform', function () {
		w.ball(300, 20)
	})
	w.coll('dot', function (cx) {
		cx.b().dot()
	})
	// w.collide('box', 'platform')
	//  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
BEGIN = function () {
	w = b2d.W()
	w.ball()
	w.on('new',
			function () {
				w.ball(300, 100, 2)
			})
	w.beg(function () {
		w.flag('new')
	})
}
//post
POSTSOLVE = function () {//only breaks at high impulse
	w = b2d.mW()
	b = w.ball()
	cjs.tick(function () {
		if (w.flagged('newBall')) {
			w.ball()
		}
	})
	w.post(
			function (contact, contactImpulse) { //second arg??
				d = contactImpulse
				n = normalImpulses = contactImpulse.normalImpulses
				nX = Math.floor(normalImpulses[0])
				nY = Math.floor(normalImpulses[1])
				t = tangentImpulses = contactImpulse.tangentImpulses
				tX = Math.floor(t[0])
				tY = Math.floor(t[1])
				$l('normal: ' + tX + ', ' + tY + ' tangent: ' + nX + ', ' + nY)
				if (nX > 200) {
					w.flag('newBall')
				}
			}
	)
	//we can get the 'normal vector' of the contact btwn fixtures
}
CONTACTS = function () {
	makeWorld()
	var centerFx = b2d.circ(80).K('center')
	w.dyn(500, 300, [
		centerFx,
		b2d.poly(60, 90, 0, 40, 10).sensor(true).K('sensor1')
	]).angVel(100)
	w.dyn(700, 300, [
		centerFx,
		b2d.circ(100).sensor(true).K('sensor2')
	]).angVel(100)
	w.coll('sensor1', 'sensor2',
			function () {
				w.ball(100, 100, 100)
			})  //w.begin(function(cx){if(cx.with('sensor1','sensor2')){w.flag('new')}}) //w.on('new', function(){w.ball()})
}
BITS = function () {
	b2d.mW()
	var cir = b2d.circ(80).bits(2, 5), //collides with 4,1
			rec = b2d.poly(60, 90).bits(4, 7)  // collides with 4,2,1
	w.dyn(300, 300, cir)
	w.dyn(400, 30, cir)
	w.dyn(300, 300, rec)
	w.dyn(400, 300, rec)
}
GROUP = function () {
	b2d.mW()
	w.dyn(300, 300, b2d.circ(80).bits(2, 5))  // colls 4,1
	w.dyn(300, 300, b2d.poly(60, 90, 0, 40, 10).bits(8, 3)) //colls 2,1
	w.dyn(400, 300, b2d.circ(80).cat(2).group(-3)) //cat 1
	w.dyn(400, 300, b2d.poly(60, 90, 0, 40, 10).group(-3)) //cat 1
}
DYNAMICFILTER = function () {
	w = b2d.W().debug()
	//Changing the collision filter at run-time
	//You can change each of the categoryBits, maskBits, groupIndex
	// by setting a new b2Filter in the fixture.
	// Quite often you only want to change one of these,
	// so it's handy to be able to get the existing filter first,
	// change the field you want, and put it back.
	// If you already have a reference to the fixture you want to change, this is pretty easy:
	//get the existing filter
	b = w.circ(300, 300, 200, 'b').rest(4).I(100, 0)
	fixt = b.list()
	setTimeout(function () {
		filter = fixt.GetFilterData()
		filter.categoryBits = 0
		// filter.maskBits = ...;
		// filter.groupIndex = ...;
		fixt.SetFilterData(filter)  //and set it back
		w.dot(100, 100)
	}, 2000)
}
PRESOLVE = function () {
	b2d.mW()
	w.ba()
	cjs.tick(
			function () {
				if (STATE.newBall) {
					w.ba()
				}
				STATE.newBall = false
			})
	w.pre(function (contact, manifest) {
		c = contact;
		m = manifest
	})
	//second pam is really info about previous collision manfest?  may be usesless?!!!!
}
function collide() {
	FIXROT = JUMP = CEN = LVW = SMASH = function () {
		W([2000, 1500, 2000, 1500]).G(200).C('b');
		var b1, b2
		// y and remote control fireball
		var y = w.y(300, 100, '+')
		farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
		nearMoon = w.D(400, 200, 'y', 100)
		T.t(function () {
			var lV = y.lVW(y.X(), y.Y()).mult(20)
			nearMoon.lV(lV.x, lV.y)
		})
		p = w.p(900, 400).cn('jump').cl(_.m(function () {
			w.D(300, 100, 'r', 5)
		}))
		sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
		sun.cl(function (f, cx) {
			var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
			w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
		})
	}
	PLAT = DOODLE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
		pf = plat(900, 1700)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me')
	y.cir('g', 50)
	b = w.S(200, 300, 'g', 100)
	b.cl(function (f, cx) {
		var b1 = w.D(600, 300, 'g', 20)
		b1.I(-cx.nX(300), cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
POSTSOLVE = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
POST = SMASHOUT = function () {
	W([1200, 600], {
		g: 10//g:50//,w:'='
	})
	// I want the dir of the tangent and its ratio to the impulse part!!!
	//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
	w.b_.fr(100000000000)
	w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
	y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
	w.D(200, 200, 'b', 20).r(1)
	w.D(900, 200, 'r', 100).r(1)
	//JASON YANOFSKI LISTEN TO YOU:
	//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
	// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
	// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
	//BUT YOU MAY HAVE REASON TO WANT TO
	//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
	imp = 0;
	tang = 0;
	sum = 0
	w.po(function (cx, i, t) {
		imp = i;
		tang = t
		if (first && M.avg(i + t) > 5) {
			sum = M.avg(i + t)
			first = 0
		}
	})
	w.b(function () {
		first = 1
	})
	w.show(function () {
		return imp + ' + ' + tang + ' = ' + sum
	})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
	w.D(400, 200, 'y', 50).d(.1).lV(10)
	w.D(200, 500, 'r', 40).d(1)
	w.D(200, 500, 'b', 25).d(100)
	w.D(800, 200, 'p', 10).d(1000).lV(-10)
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
//
PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	w.G(-100)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1500])
	pf = plat(900, 1800)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
//point:
CXPT = function () {
	$l('CXPT')
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot(
				$r(),
				cx.pt().x,
				cx.pt().y
		)
	})
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function
BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	b.bS('sun')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
//
WCL = function () {
	W()
	w.box().K('x')
	w.ball().K('big')
	w.ball(300, 400, 20).K('little')
	w.cl('big', function (f, cx) {
		var b1 = this.B()
		var b2 = f.B()
		var x1 = b1.X()
		var x2 = b2.X()
		_.in(0, function () {
			$l('0hit')
			b2.X(x1)
			b1.X(x2)
		})
	})
	w.cl0('little', function (f, cx) {
		var b1 = this.B()
		var b2 = f.B()
		var x1 = b1.X()
		var x2 = b2.X()
		$l('0hit')
		b2.X(x1)
		b1.X(x2)
	})
}
WC2 = function () {
	W()
	w.box(100, 100, 200).K('left')
	b = w.ball(500, 500)
	right = w.box(400, 100, 200)
	rightF = right.f()
	w.cl0('left', 'ball', function (f, cx) {
		$l('left')
		this.B().stat()
		f.B().kill()
	})
	w.cl0(right, 'ball', function (f, cx) {
		$l('right')
		this.B().kill()
		f.B().stat()
	})
	w.cl0(rightF, b, function (f, cx) {
		$l('rightF')
		w.box(100, 100, 200).K('left')
	})
}
FBG = function () {
	W().G(20)
	b = w.D(300, 400).stat()
	b.cF(100)
	f = b.cF(10, 110, 0).re(2)
	f1 = b.cF(20, -110, 0).re(1)
	f2 = b.cF(40, 0, 110).re(.6)
	f3 = b.cF(60, 0, -110).re(.3)
	_.in(1, function () {
		b.dyn().aV(2).lV(20, -20)
	})
	y = w.Y().K('y')
	f3.cl('y', function () {
		b.stat()
	})
	f2.cl(y, function () {
		b.dyn()
	})
}
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	T.t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump').cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
PROTOSIG = INC = function () {
	W()
	//cx.inc protosig
	//     str    :  str,fn   :   obj   :   obj,fn
	var fisherman1 = w.p()
	w.b(function (cx) {
		cx.ic(fisherman1, function (fish) {
			this.eat(fish.B())
		})
		var oneWasFisherman1 = cx.ic(fisherman1);
		if (oneWasFisherman1) {
			$l('the fish is: ' + Fisherman1[1])
		}
		cx.ic('fish', function (fisherman) {
			this.swimTo(fisherman.B())
		})
		var oneWasFish = cx.ic('fish');
		if (oneWasFish) {
			$l('the fish is: ' + oneWasFish[0])
		}
	})
}
TAG = function () {
	w = b2d.W({g: 0}).debug().fadeTitle('i like how the ball bounces')  //w.show(function(){ return y.getClasses() + ' (' + y.classCount() + ')'})
	y = w.ship(100, 100)
	_.times(10, function () {
		w.circ(600, 300, 40, 'b').rest(.8).linDamp(.1).addClass('blueBall')
	})
	w.with('blueBall', function (other) {
		var vel
		if (other.of('ship')) {
			w.each(function (b) {
						if (b.isStat() && b.hasClass('ball')) {
							b.dyn(true)
							b.C('b')
						}
					}
			)
		}
		if (other.of('bul')) {
			this.stat()
			this.body().C('p')
		}
	})
}
function prePost() {
	PRE = ONEWAYPLATFORM = OWP = ONE = function () {
		W(50).ball()
		p = w.p().con('thrust')
		pf = w.brick(300, 300, 500, 40).K('platform')
		$t(function () {
			p.rt(0)
		})
		//	w.pre(function (cx) {if (cx.w('platform', 'player')) {if (p.Y() > pf.Y()) {cx.disable()}}})
		w.preCl('platform', 'player', function (f1, cx) {
			if (p.Y() > pf.Y()) {
				cx.disable()
			}
		})
	}
	POSTSOLVE = POS = function () {
		https://www.youtube.com/watch?v=GM6s8v7_oA8
				W()//only breaks at high impulse
		b = w.A($dB(300, 400), [$cF(40)]).re(.6).de(1)
		$t(function () {
			if (w.flagged('newBall')) {
				w.BALL(200, 200, 50, 'y')
			}
		})
		w.post(
				function (cX, imp) { //second arg??
					nImps = imp.normalImpulses
					nX = nImps[0]
					nY = nImps[1]
					tImps = imp.tangentImpulses
					tX = tImps[0]
					tY = tImps[1]
					$l('normal: ' + nX + ' tangent: ' + tX)
					if (nX > 100) {
						w.flag('newBall')
					}
					else {
						//	$l('missed it by thiiiis much: ' + (100-nY))
					}
				}
		)
		//we can get the 'normal vector' of the contact btwn fixtures
	}
}
alt = function () {
	w.b0 = function (fn) {
		var w = this
		w.b(function (cx, f1) {
			var f = this
			_.in(0, function () {
				_.b(fn, f)(cx, f1)
			})
		})
		return w
	}
}
CX1 = function () {
	W()
	_.t(10, function () {
		w.ball(300, 400, 30).K('b')
		w.box(200, 400, 20, 20).K('x')
	})
	w.brick(700, 100, 90, 90, 20).K('s')
	w.b0(function (cx) {
		//cx.these('b','s', function(){this.B().stat()})
		cx.this('s', function (z) {
			var f = this, b = f.B()
			_.in(0, function () {
				b.X(40, '+')
			})
		})
		cx.this0('s0', function () {
			this.B().X(40, '+')
		})
		cx.of0('s1', function () {
			this.B().X(40, '-')
		})
	})
}
ZERO = CXW = CX0 = function () {
	W()
	_.t(10, function () {
		w.ball(300, 400, 30).K('b')
		w.box(200, 400, 20, 20).K('x')
	})
	w.brick(700, 100, 90, 90, 20).K('s')
	w.brick(750, 300, 100, 100, -20).K('s0')
	w.brick(700, 500, 100, 100, 40).K('s1')
	w.b(function (cx) {
		//cx.these('b','s', function(){this.B().stat()})
		cx.this('s', function (z) {
			var f = this, b = f.B()
			_.in(0, function () {
				b.X(40, '+')
			})
		})
		cx.this0('s0', function () {
			this.B().X(40, '+')
		})
		cx.of0('s1', function () {
			this.B().X(40, '-')
		})
	})
}
function post() {
	POSTSOLVE = function () {
		W([1200, 600], {
			g: 10//g:50//,w:'='
		})
		// I want the dir of the tangent and its ratio to the impulse part!!!
		//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
		w.b_.fr(100000000000)
		w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
		y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
		w.D(200, 200, 'b', 20).r(1)
		w.D(900, 200, 'r', 100).r(1)
		//JASON YANOFSKI LISTEN TO YOU:
		//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
		// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
		// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
		//BUT YOU MAY HAVE REASON TO WANT TO
		//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
		imp = 0;
		tang = 0;
		sum = 0
		w.po(function (cx, i, t) {
			imp = i;
			tang = t
			if (first && M.avg(i + t) > 5) {
				sum = M.avg(i + t)
				first = 0
			}
		})
		w.b(function () {
			first = 1
		})
		w.show(function () {
			return imp + ' + ' + tang + ' = ' + sum
		})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
		w.D(400, 200, 'y', 50).d(.1).lV(10)
		w.D(200, 500, 'r', 40).d(1)
		w.D(200, 500, 'b', 25).d(100)
		w.D(800, 200, 'p', 10).d(1000).lV(-10)
	}
	SMASHOUT = function () {
		W([1200, 600], {
			g: 10//g:50//,w:'='
		})
		// I want the dir of the tangent and its ratio to the impulse part!!!
		//PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
		w.b_.fr(100000000000)
		w.S(100, 100, $r(), 800, 100, 0, 0, -20).fr(100000)
		y = w.y(140, 400, '+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'
		w.D(200, 200, 'b', 20).r(1)
		w.D(900, 200, 'r', 100).r(1)
		//JASON YANOFSKI LISTEN TO YOU:
		//OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
		// THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
		// THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
		//BUT YOU MAY HAVE REASON TO WANT TO
		//'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
		imp = 0;
		tang = 0;
		sum = 0
		w.po(function (cx, i, t) {
			imp = i;
			tang = t
			if (first && M.avg(i + t) > 5) {
				sum = M.avg(i + t)
				first = 0
			}
		})
		w.b(function () {
			first = 1
		})
		w.show(function () {
			return imp + ' + ' + tang + ' = ' + sum
		})
// $l('i:'+i+' t:'+t+' sum:'+(M.avg(i)+ M.avg(t)) + ' prod:'+M.avg((i*t)))
// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.
		w.D(400, 200, 'y', 50).d(.1).lV(10)
		w.D(200, 500, 'r', 40).d(1)
		w.D(200, 500, 'b', 25).d(100)
		w.D(800, 200, 'p', 10).d(1000).lV(-10)
	}
}
NORMAL = function () {
	W({W: 1500, H: 1200, g: 0}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 50),
			function (f, cx) {
				w.D(600, 300, 'g', 20).K('g').I(-cx.nX(300), cx.nY(300))
			})
	y.cl(w.S(900, 300, 'o', 50), function (f, cx) {
		w.D(600, 300, 'o', 20).K('o')
				.I(-cx.nX(300), cx.nY(300))
	})
	y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
	y1.cir('y', 40).r(.8)
	Ball = _.mo(.5, function (n) {
		w.D(600, 200, 'o', 5).bit(0)
				.K('o').r(.9).I(n.x, n.y)
	})
	w.D(600, 300, 'o', 70).r(.8)
			.cl(function (f, cx) {
				if (cx.nX() || cx.nY()) {
					if (O(cx) && F(cx.n)) {
						Ball(cx.n(10000))
					}
				}
			})
	/*
	 //just copies lV
	 b=w.D(500,300,'b',50).d(1).K('b')
	 r = w.D(700,300,'r', 80).d(1)
	 w.b( function(cx){ cx.w('b', function(f){
	 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
	 else {r.lV( cx.lV(cx.b()))}})})
	 */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
	NL0 = function () {
		W({W: 900, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40)
		y.fR().cn('thrust').warp().bS('me').cir('g', 50)
		w.S(200, 300, 'g', 100).cl(function (f, cx) {
			w.D(600, 300, 'g', 20).I(-cx.nX(300),
					cx.nY(300))
		})
	}
	NL = function () {
		W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
		y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
		y.cir('y', 50)
		y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
			w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
			w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
		})
		y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
			w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
		})
	}
}
SICK = BBALL = MOONSOCCER = function () {
	W({W: 1500, H: 1200, g: 0, w: ''}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').bS('me')
	y.cir('y', 50)
	greenBall = w.S(300, 300, 'g', 50)
	y.cl(
			greenBall,
			function (f, cx) {
				var bullet = w.D(600, 300, 'g', 20)
				bullet.K('g').I(
						-cx.nX(300),
						cx.nY(300)
				)
			}
	)
	y.cl(
			w.S(900, 300, 'o', 50), function (f, cx) {
				w.D(600, 300, 'o', 20).K('o').I(-cx.nX(300), cx.nY(300))
			})
	y.warp()
}
//y1 = w.D(300, 300, 'w', 10).fR().cn('thrust').bS('me').I(20, 20)
//y1.cir('y', 40).r(.8)
/*	Ball = _.m(.5, function (n) {
 w.D(600, 200, 'o', 5).bit(0)
 .K('o').r(.9).I(n.x, n.y)
 })
 w.D(600, 300, 'o', 70).r(.8)
 .cl(function (f, cx) {
 if (cx.nX() || cx.nY()) {
 if (O(cx) && F(cx.n)) {
 Ball(cx.n(10000))
 }
 }
 })
 /*
 //just copies lV
 b=w.D(500,300,'b',50).d(1).K('b')
 r = w.D(700,300,'r', 80).d(1)
 w.b( function(cx){ cx.w('b', function(f){
 if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
 else {r.lV( cx.lV(cx.b()))}})})
 */
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})
//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
NL0 = function () {
	W({W: 900, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40)
	y.fR().cn('thrust').warp().bS('me').cir('g', 50)
	w.S(200, 300, 'g', 100).cl(function (f, cx) {
		w.D(600, 300, 'g', 20).I(-cx.nX(300),
				cx.nY(300))
	})
}
NL = function () {
	W({W: 1200, H: 600, g: 0, w: '|'}).C('b')
	y = w.D(100, 100, 'w', 40).fR().cn('thrust').warp().bS('me')
	y.cir('y', 50)
	y.cl(w.S(300, 300, 'g', 100), function (f, cx) {
		w.D(300, 300, 'g', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(900, 300, 'o', 100), function (f, cx) {
		w.D(900, 300, 'o', 20).I(-cx.no(300).x, cx.no(300).y)
	})
	y.cl(w.S(600, 300, 'w', 60, '-'), function (f, cx) {
		w.D(600, 300, 'z', 20, '-').K('w').I(cx.no(300).x, cx.no(300).y)
	})
}
ERR = LCNOTFUNC = PT = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}
WCPT = WCP = MANIF = MNF = WORLDMANIFOLD = WMF = function () {
//WORLDCONTACTPOINT =
	W(40).st.chalk('world contact eazy')
	w.box(200, 500, 200, 50).K('x')
	w.box(200, 500, 200, 50).K('x')
	w.brick(200, 500, 200, 50).K('x')
	w.b(function (cx) {
		if (cx.w('x')) {
			w.st.dot(cx.pt())
		}
	})
	// cx.wM().m_points[0].m()
	// cx.w('x','x') works too
	//normal manifold contains all info...
	//...world manifold is helpful for getting locations	 
	// $l('num pts: ' + _.size(pts)) numPoints = 1000000; _.ev(function () {$l(numPoints)})// always 2
}
NORMAL = NML = function () {
	W({g: 0}).b(
			bgFn)
			.chalk('m:  worlManifold', 'n:  m.m_normal', 'p:  m.m_points[0].mult()')
	function bgFn(cx) {
		if (cx.w('tim', 'ball')) {
			w.dot('g', cx.wCxPt())
			worMan = cx.wM()
			norm = cx.no()
			collV = cx.V()
			w.dot('w', collV)
			//a3.I(n.x*10, n.y*10  )
			//a2.I(-n.x*20, -n.y*10  )
			//a1.I(-n.x*200, -n.y*100)
			M.abs(collV.x *= 30)
			M.abs(collV.y *= 30)
			//this gets th actual velocity of body A
			//at moment of collision !!!!!!!
			v = cx.a().lVW(cx.pt())
			$l(v)
			// w.dot(  v )
			me.lV(v.x, v.y)  // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
		}
	}
	
	w.bump(300, 300, 60).K('ball')
	a1 = w.bump(50, 545).K('ball')
	a2 = w.bump(1150, 50).K('ball')
	tim = w.ba(500, 300).bS('guy').K('tim').con('thrust')
	me = w.ba(700, 300).bS('me').K('me')
}
CXS = function () {
	W()
	var cenFx = $cF(80).K('cen')
	w.A($dB(500, 300), [
		cenFx,
		$rF(60, 290, 0, 40, 10).mS().K('sen1')
	]).aV(100)
	w.A($dB(700, 300), [cenFx, $rF(100, 200).mS().K('sen2')]).aV(100)
	w.cl('sen1', 'sen2', function () {
		w.ba()
	})
	//w.b(function(cx){if(cx.w('sen1','sen2')){w.flag('new')}}) 
	//w.on('new', function(){w.ball()})
}
WITH = WIT = function () {
	W()
	w.ba().K('ball')
	w.brik(500)
	w.b(function (cx) {
		if (cx.w('ball', 'brick')) {
			$l('hit')
		}
	})
}
COLL = function () {
	W().platform(400, 500, 400, 20).K('platform')
	w.roof.kill()
	w.ba(440, 100, 50).K('dot')
	w.ba(440, 200, 20).K('ball')
	w.cl('ball', 'platform', function () {
		w.box(20, 20, 20, 20).K('box')
	})
	w.cl('box', 'platform', function () {
		w.ba(300, 20).K('ball')
	})
	w.cl('dot', function (cx) {
		collX = cx.b().X()
		collY = cx.b().Y()
		w.stage.dot('r', collX, collY)
	})
	// w.collide('box', 'platform')
	//  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
BEGIN = BEG = function () {
	W().ba()
	w.ship()
	w.roof.kill()
	w.on('new', function () {
		w.ba(300, 100, 2)
	})
	w.b(function () {
		w.flag('new')
	})
}
FLAGTHROTTLE = THO = function () {
	W().ball(300, 300, 100)
	brick = w.brick(300, 500)
	w.st.squareDot(400, 100)
	$t(function () {
		if (w.flagged('moveBrick')) {
			brick.X(brick.X() + 20)
		}
	})
	time = 0
	lastTime = 0
	_.ev(1, function () {
		time++
	})
	w.b(function (cx) {
		if (cx.w('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
	W()
	p = w.p('hoppy')
	$flag({
		warp: function (p) {
			p.XY(200, 100)
		},
		log: function () {
			$l('haha')
		}
	})
}
VORTEX = VOX = function () {
	$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
	b2d.levelJet()
	w.rectStat(200, 250, 200, 20)
	floor.kill()
	_.t(20, function () {
		w.ba(100, 100, 10).K('ball')
	})
	vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
	w.while('vortex', 'player', function () {
		w.eB('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VORTEXOK = VOK = function () {
	W({W: 600, H: 300, g: 10})
	p = w.p(2.5).con('thrust')
	moveB = function () {
		b.lV(0, -5)
	}
	moveX = function () {
		bx.lV(0, -5)
	}
	b = w.ball(100, 100, 10).K('ball')
	bx = w.box(50, 100, 14)
	w.stat(600, 200, $cF(200).mS()).K('vortex')
	//this happens every RE-ENTRY into sensor (when)
	w.when('vortex', 'player', moveX)
	//this happens repeadly until sensor exited
	w.while('vortex', moveB)
	$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
			'something with trig?', 'fixed.. (see code)')
}
KINGOFMES = MES = function () {
	
	//all jumping together???!
	//w= b2d.mW()
	$levelWalls()
	_.t(5, function () {
		w.me(2.5).X(400)
				.trig('foot', function () {
					this.I(20, -40)
				}).re(1)
		w.me(2.5).X(100)
				.trig('foot', function () {
					this.I(-20, -40)
				})
	})
}
HAT = function () {
	// could i automatically have body listen to their sensors?
	$levelWalls()
	w.ball().re(.3)
	p.XY(400, 150).trig('right').trig('left')
			.trig('head', function () {
				this.bS('guy')
			})
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
VORTEX1 = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	cir.sp().al(.5)
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
MES = FEET = function () {
	W(30)
	_.t(3, function () {
		w.me(900, 100, 5).fR()
				.my('feet', function () {
					//if(K.u){
					this.lV(-2, -10)
					//}
				})
		w.me(700, 100, 5).fR().my('feet', function () {
			if (K.u) {
				this.lV(2, -10)
			}
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
}
PLAT1 = function () {
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
VORTEX = LEDGE = function () {
	W([1200, 800], {g: 8}).Y()
	vor = w.S(600, 200)
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	w.ledge()
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	}).warp().wl('vor', function () {
		b.vY(-20)
	}).wn('vor', function () {
		x.vY(-20)
	}, function () {
		w.C($r())
	})
}
DIVEBALL = DOT = PLAT = function () {
	W()
	w.plat(400, 500, 40, 20).K('pf').cl('x', function () {
		w.D(50, 100, 'x', 60, 60).K('x').warp()
	})
	w.D(440, 100, 'y', 50).K('ball');
	w.cl('ball', function (cx) {
		this.B().dot()
	})
}
SPETHER = ALPHA = WARPBALL = WARP = OPACITY = CLOUD = function () {
	W([1200, 800], {g: 8, w: '='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
	w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z', 30).K('z');
	w.wn('z', function () {
		$l('beg')
	}, function () {
		$l('end')
	})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
WLMY = function () {
	W(20)//.roof.kill()
	_.t(10, function () {
		var p = w.p(R(500, 50), R(300, 100))//.re(1)
		p.fK('hat')//.C($r())
		p.clMy('hat', function (f) {
			
			
			//this.C($r());
			//f.B().C('w');f.C('z')
			var b0 = this.B()
			b0.rt(-180);
			_.in(1, function () {
				b0.stat()//kill()
			})
			var b = f.B()
			if (b.of('player')) {
				b.I(R() ? -200 : 200, -200)
				ff = b.fK('hat')
				ff.C($r())
				//b.rt(10, '+')
			}
			//this.B().kill()
		})
		//p.wlMy('foot', function(f){p.X(10, '+');_f = f;f.C('w')})
	})
	b = w.D(300, 400)
	b.cir('r', 40)
	f = b.cir('b', 20, 80, 0).K('hand')
	b.aV(20).lV(20, 20)
	//f = b.rec( 'w', 300, 20, 150,0,22).K('rec')
	//good:
	//b.clMy('hand', function(f){this.C($r());f.B().C('w');f.C('z')})
}
function filteringApps() {
	GRP = function () {
		W(20)
		w.pen('things dont collide with their own kind..')
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $cF(80).cat(2).gr(-3))
					.re(1).I(100, 100)
		})
		_.t(4, function () {
			w.D(M.r() * 400, M.r() * 300, $rF(120, 120).gr(-4)).re(1).I(100, 100)
		})
		_.t(5, function () {
			w.ship().gI(-5)
		})
		_.t(1, function () {
			w.p().con('imp').gI(-5)
		})
	}
	DYNFILT = FIL = function () {
		W()
		f = w.ball(300, 300, 50).re(4).I(1000, 300).f()
		_.in(2, function () {
			flD = f.flD()
			flD.cB(0)
			f.SFD(flD)
		})
	}
	FLT = function () {
		W()
		w.D(300, 300,
				$cF(80).bt(2, 5))  // colls 4,1
		w.D(300, 300,
				$rF(60, 90, 0, 40, 10).bt(8, 3)) //colls 2,1
		w.D(400, 300,
				$cF(80).cat(2).gr(-3)) //cat 1
		w.D(400, 300,
				$rF(60, 90, 0, 40, 10).gr(-3)) //cat 1
	}
	BIT = function () {
		W()
		cir = $cF(80).cat(2).msk(1, 4)
		rec = $rF(60, 90).cat(4).msk(1, 2, 4)
		cir2 = $cF(12).cat(4).msk(2, 4)
		w.D(300, 300, cir)
		w.D(400, 30, cir)
		w.D(300, 300, rec)
		w.D(400, 300, rec)
		_.t(50, function () {
			w.D(300, M.r() * 400 + 100, cir2)
			w.D(250, M.r() * 400 + 100, cir2)
			w.D(500, M.r() * 400 + 100, cir2)
		})
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	CAT = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
	ROOM3D = BOUNCELAY = function () {
		W([800, 800], {g: 50}).C('z')
		//g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
		// b=  w.D(600,600,'b',100).f().bit(2, [1,4] )
		w.t_.bit(1, [8])
		w.D(600, 200, 'w', 180).bit(1, [1]).r(.5)
		w.D(400, 0, 'g', 100).bit(2, [1, 2, 4, 8]).r(.8)
		w.D(300, 0, 'g', 183, 183).bit(2, [1, 2, 4, 8]).r(.8)
		_.t(38, function () {
			w.D(R(1100, 100), R(300, -2500), 'w', 20).bit(1, [1])
		})
		y = w.y(100, 100).rt(40).bit(8, [1, 2, 4])
/////////////////
		//together, same with walls
		// w.D(300,300,'o',183,183)//.grp(-3)
		// w.D(300,600,'o',100).cat(2)//.grp(-3)
		//w.D(600,600,'u',150).r(1).I(100,0).cat(0)
		//w.D(600,600,'b',80).bit(2,[1,4])
		//w.D(600,600,'p',60,90).bit(4,[1,2,4])
		// w.D(600,600,'r',183,183).bit(4,[1,2,4])
	}
}