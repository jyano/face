BOX2D = function () {
	$canW()
	b2d.somePolyFixt = [[[-100, 0], [0, -100], [100, 0], [60, 50]]]
	b2d.compoundShape = [[50, 10], [60, 30, 0, 0, 40], [120, 30, 0, 0, 29], [60, 10, 0, 50, 60], [84, 10, 15, 80, -120]]
	b2d.compoundShape2 = [[50, 10], [20, 20], [20, 10, 0, 0, 10], [40, 10, 50, 0, 45], [84, 10, 15, 80, -120], [60, 10, 0, 50, 60]]
	b2d.compoundStar = [
		[10, 10], [20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	w.D(100, 100, b2d.somePolyFixt)
	w.D(200, 100, b2d.compoundShape)
	w.D(300, 100, b2d.compoundShape2)
	w.D(400, 100, b2d.compoundStar)
	w.S(200, 200, 'w', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [[20, 20, -100, 50, 60], [100, 120, 0, 0, 100], [100, 20], [10, 300]])
	w.D(400, 400, [['b', 30], ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.S(100, 200, 'w', 50, 50)
	w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	w.me(400, 200)
	w.me(400, 300)
	w.me(400, 400)
	//w.addTenBalls() ..not color yet
}
CUPS = function (o) {
	$canW(_.extend({g: 20}, o || {}))//.db()
	cup = [[20, 20], [100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80]]
	cup2 = [[100, 40, 0, 40, 0], ['g', 200, 40, -80, -40, 260], ['g', 200, 40, 80, -40, -80], [100]]
	cup3 = [[100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80], [34, -80, -130], [34, 80, -130]]
	w.B(280, 500, 'r', cup)
	b = w.B(280, 500, 'r', cup)
	w.B(600, 500, 'b', cup2)
	w.B(900, 500, 'y', cup3)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
//W.fluffy()
	w.db()
}
MAZE = function () {
	w = b2d.W()
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
	y = w.ship()
	w.grid(maze, 100, 200, 20, 30)
	w.S(400, 200, 10)
}
PINS = function () {
	w = b2d.W().db()//=SEPARATOR=COLORCONC
	pin = [['o', [-20, 20], [0, -80], [20, 20], [0, -40]], ['w', 8, 0, -75], ['w', 8, -20, 20], ['w', 8, 20, 20]]
	_.times(15, function (i) {
		w.B(100 + (i * 60), 300, pin)
	})
	w.ship()
}
SENSOR = function () {
	w = b2d.W().chalk(
			'box goes up on coll with vortex, and right AFTER',
			'ball goes up with continued pressure')
	y = w.ship()
	b = w.ball(100, 100, 40)
	x = w.box(50, 100, 60, 60)
	w.stat(1000, 200, b2d.circ(500).sensor(true)).K('vortex')
	moveX = function () {
		x.vY(-20)
	}
	moveB = function () {
		b.vY(-20)
	}
	// w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
	y.when('vortex', moveX, function () {
		x.vX(20)
	})      //this happens every RE-ENTRY into sensor (when)
	// w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
	y.while('vortex', moveB)
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
FIXTS = function () {
	w = b2d.W({g: 0})
	b = w.dyn(300, 300)
	b.CIRC('o', 20)
	b.CIRC('b', 100, 140, 0)
	b.CIRC('r', 20, 100, 100)
	b.RECT('g', 100, 100)
	b.RECT('y', 100, 100, 50, 50)
	b.RECT('p', 100, 100, -150, -150, 45)
	b2 = w.B(800, 300)
	b2.fixt(20).C('r')   //circ
	b2.fixt(20, 100, 100).C('b')  //circ
	b2.fixt(100, 50)   //rect
	b2.fixt(100, 50, -100, -100)   //rect
	b2.fixt(100, 50, -100, 0, 25)   //rect
	b2.fixt([[-100, 0], [0, -100], [100, 40]])   //poly
	b3 = w.B(1000, 300)
	b3.fixt(b2d.fixt(20)) //circ
	b3.fixt(b2d.fixt(20, 100, 100)) //circ
	b3.fixt(b2d.fixt(100, 50)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, -100)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, 0, 25)) //rect
	b3.fixt(b2d.fixt([-100, 0], [0, -100], [100, 40])).C('g') //poly
	w.B(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]])
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
BODYEACH = function () {
	w = b2d.mW()//works
	b = w.B(100, 100, [[40], [100, 200, 100], [50, 200], [200, 200, 300, 400]])
	b.each(function (f) { //bind to this.. when u have time
		//f.SetSensor(true) //works
		// f.remove()
		// f.K('destroy')
		$l('shape type: ' + f.GetShape().m_type)
	})
}
GUYINBED = function () {
	w = b2d.W()
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	w.B(400, 100, 'y', guyInBed)
	w.B(100, 100, 'r', [
		[guyInBed]
	])
	w.B(100, 100, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.B(400, 100, guyInBed)
}
COLSENCLAS = function () {
	w = b2d.W()
	b = w.B(300, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']]) //BEAUTIFUL !!!
	w.beg(function (cx) {
		if (cx.with('arm')) {
			b.I(50, 50)
		}
		if (cx.with('arm', w.right)) {
			w.C('w')
		}
	})
}
FDOT = function () {
	w = b2d.W()
	b1 = w.S(400, 400, 50)
	f1 = b1.fixt()
	f1.dot()
	b2 = w.S(800, 400, 80, 80)
	f2 = b2.fixt()
	f2.dot()
	f2.C('p')
	verts = [[-100, 0], [0, 100], [100, -20]]
	b = w.S(200, 200, [verts]).rot(25)
	f = b.fixt()
	w.S(400, 200, [f.verts()])
	w.S(600, 200, [f.verts('+')])
	v = f.wVerts()
	_.each(v, function (v) {
		w.dot(v)
	})
	//need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
	//its a VertsArr
	b = w.S(100, 500, 50, 50)
	f = b.fixt()
	fh = f.shp()
	h = b2d.polyH(100, 50)
	f.shp(h)
}
TESTPOLYF = function () {
	w = b2d.W();
	$l('testpolyf')
	w.S(700, 200, 'o', [
		b2d.circ(40),
		b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
		b2d.circ(10, 100, 100, '-'),
		['w', b2d.circ(10, 100, -100)],
		b2d.poly(10, 300, '-'), //sets as sensor
		['b', b2d.poly(300, 10)],
		['w', [100, 0], [150, -100], [200, 20]],
		[[200, 0], [250, -100], [300, 20], 'arr'],
		['p', 50, 'pink']])
	b = w.S(300, 400, 'r', [
		b2d.poly(200, 100),
		['g', b2d.circ(40, 100, 100).K('excited')],
		[5, 100, 200, 0, 'orgasmic excited']
	])
	//apparently b.fixt is LIFO
	f = b.fixt().K('happy').dot('b')
	$l('f is f: ' + f.is(f))
	$l('f is happy: ' + f.is('happy'))
	$l('f.next is excited: ' + f.next().is('excited'))
	$l('f is orgasmic: ' + f.is('orgasmic'))
	w.db()
}
MASS = function () {
	w = b2d.W({g: 0}).db()
	y = w.B(400, 200, 'y', 50).den(.1).lV(10)
	r = w.B(200, 500, 'r', 40).den(1)
	b = w.B(200, 500, 'b', 25).den(100)
	p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
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
BODY = function () {
	W(10)
	w.S(600, 600, 20, 1000)
	w.D(100, 400, 'z', [[50], [10, 300, '-']])
	w.D(100, 300, 'b', 50)
	w.D(700, 300, 'b', 50)
	b = w.D(700, 400, 'y', [
		[50],
		['r', 10, 300, '-'],
		['o', 50, 100, 0]
	])
}
LAYERS = function () {
	W(0).Y()
	y.cent('+')
	w.dr(100, 100, 100, 100)
	w.dr(100, 200, 100, 100, '+')
	l1 = w.line(0, 100, 5000, 100, '-')
	l2 = w.line(0, 200, 5000, 200)
	l3 = w.line(0, 300, 5000, 300, '+')
	y2 = w.ship().cent('+')
}
SHOWCOUNT = function () {
	W().Y(200, 200)
	b = w.D(300, 300, 'r', 50)
	w.show(function () {
		return w.count()
	})
}
BEGEND = function () {
	W(0)
	b = w.B(500, 300, 'w', 50)
	w.beg(b, function () {
		w.B(R(1000, 50), R(500, 50), 'y', 5).rest(.8)
	})
	w.end(b,
			function () {
				w.B(R(1000, 50), R(500, 50), 'z', 5).rest(.8)
			}
	)
}
WORLD = function () {
	W(0)
	b = w.D(100, 100, 'r', 50)
	b1 = w.D(100, 200, 'b', 40)
	// w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)
	w.AddController
	w.CreateController
	w.DestroyController
	w.GetGroundBody
	w.GetProxyCount
	w.SetDestructionListener
	w.SetBroadPhase
	w.SetWarmStarting
	w.SetContinuousPhysics
	w.IsLocked
	// proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
	//  pair - a record created when two proxies overlap.
	//  manifold - the set of contact points for two convex shapes.
	w.locked = function () {
		return b2World.e_locked != 2
	}
	w.m_island
	w.m_flags
}
TESTQ = function () {
	W(2).Y(400, 500)
	_.times(5, function () {
		w.randRects()
	})
	n = w.qAB(function (f, b) {
		b.kill();
		return true
	}, 400, 100, 450, 150)
	w.pen(n + ' rects removed')
}
FOLLOWTF = function () {
	W()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(200, 200, 'p', 100, 150)
	cjs.tick(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		setTimeout(function () {
			tf = trf
		}, 1000)
	})
}
TESTPOINT = function () {
	W(50)
	var tf = null
	b = w.rect(100, 100, 100, 200, 'b')
	p = w.rect(200, 200, 100, 150, 'p').stat().rot(20)
	p.fixt(
			b2d.poly(50, 50, 50, 50, 20, 'o')
	)
	f = p.fixt()
	h = f.shape()
	hit = h.testPoint(p.transform(), V(200, 200).div()) // true
	hit2 = f.hit(200, 200, true)
}
COCHANGE = function () {//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
	W({g: 20})
	//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	s1 = w.sensorBucket(320, 300, 's1')
	s2 = w.sensorBucket(700, 300, 's2')
	co1 = w.acc(5, -5)
	co2 = w.acc(-5, 5)
	I(function () {
		aCo.body(
				w.D(300, 100, 'y', 10),
				w.D(760, 100, 'b', 10)
		)
	})
	setInterval(function () {
		b.bc() //default is to kill all in its 'controller-space' (except itself)
	}, 5000)
	w.beg(function (cx) {
		cx.with('s1', function () {
			var f = this, b = f.B()
			b.cancel()
			co1.body(b)
		})
		cx.with('s2', function () {
			var f = this, b = f.B()
			b.cancel()
			co2.body(b)
		})
	})
	w.D(150, 100, 'w', 50).den(1)
	w.D(200, 100, 'd', 50).den(1)
	w.D(250, 100, 'r', 50).den(1)
	b = w.ship(100, 500)
	w.D(350, 100, 'g', 50).den(1)
	w.D(400, 100, 'o', 50).den(1)
	w.D(450, 100, 'w', 50).den(1)
}
ACC = function () {
	W(0).C('z')
	// Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.
	// now just add and remove bodies to the controller!!
	b = w.D(300, 300, 'b', 50, 60).den(1)
	co = w.acc(-5, -5).body(b)
	added = true
	cjs.tick(function () {
		b.F(10, 10)
	})
	I(function () {
		if (R()) {
			if (added == true) {
				added = false
				w.C('r')
				co.remove(b)
			}
			else {
				added = true
				w.C('g')
				co.body(b)
			}
		}
	}, 2000)
}
BUOY = function () {
	W()
	w.S(320, 480, 'r', 640, 20)
	w.S(320, 340, 'b', 320, 20)
	w.S(170, 230, 'g', 20, 200)
	w.S(470, 230, 'y', 20, 200)
	w.S(320, 245, 'z', [[280, 170, '-']])
	co = w.buoy(0, -1, 5, 2).os(-6).den(2)
	cjs.tick(function () {
		w.eachD(function (b) {
			if (b.co()) {
				co.remove(b)
			}
			for (var c = b.cx(); c; c = c.next) {
				var cx = c.contact
				if (cx.A().IsSensor() && !cx.b().co()) {
					co.body(cx.b())
				}
				if (cx.B().IsSensor() && !cx.a().co()) {
					co.body(cx.a())
				}
			}
		})
	})
	I(function () {
		w.D(300, 40, 'r', 8).den(1)
	})
}
BALL = function () {
	W().B(400, 300, 'x', 150).den(.1)
}
STACKTHREE = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.B(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.B(310, 120, 't', 60, 60)
	w.B(320, 120, 't', 60, 60)
	w.B(340, 120, 't', 60, 60)
	w.B(350, 120, 't', 60, 60)
	w.B(370, 120, 't', 60, 60)
	w.B(380, 120, 't', 60, 60)
	w.B(550, 120, 't', 60, 60)
	w.B(570, 120, 't', 60, 60)
	w.B(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
	w.db()
}
TINYREDBALLS = function () {
	w = b2d.G(1000, 500, 2000, 1000)
	y = w.ship(1000, 400//w.H()-100
	)
	//w.pXY(500,0)
	w.fw(y, 500, 300)
	// w.S(500,400,'b',20,200) //why sensor not working any more??
	w.B(700, 300, 'r', [[4]])
	w.B(800, 300, 'r', [[4]])
	w.B(900, 300, 'r', [[4]])
	w.B(1000, 300, 'r', [[4]])
	w.B(1100, 300, 'r', [[4]])
	w.B(1200, 300, 'r', [[4]])
	w.B(1300, 300, 'r', [[4]])
	w.s.HUD.dot('w', 500, 300)
	w.s.HUD.dot('w', 700, 300)
	w.s.HUD.dot('w', 1100, 300)
}
CONTLIST = function () {//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	w = b2d.W({}).debug().C('p')
			.bindCo('co1', 'co2')
			.end(function (cx) {
				var fixt
				if (fixt = cx.with('co2')) {
					fixt.cancel()
				}
			})
	co1 = w.acc(0, -50)
	s1 = w.sensorBucket(320, 300, 'co1')
	co2 = w.acc(0, -50)
	s2 = w.sensorBucket(700, 300, 'co2')
	w.circ(150, 100, 30, 'w').den(1)
	w.circ(200, 100, 30, 'd').den(1)
	w.circ(250, 100, 30, 'r').den(1)
	w.circ(350, 100, 30, 'g').den(1)
	w.circ(400, 100, 30, 'o').den(1)
	w.circ(450, 100, 30, 'w').den(1)
	setTimeout(function () {
		y = w.ship(300, 50)
		setInterval(function () {
			w.circ(300, 100, 10, 'y')
			w.circ(760, 100, 10, 'b')
			y.bc('kill')
		}, 1000)
	}, 500)
}
UPDOWN = function () {
	w = b2d.W({g: 0}).debug().C('g')
	y = w.ship(300, 50).linDamp(5)
	co1 = w.acc(0, -50)
	co2 = w.acc(0, 50)
	s1 = w.rectSensor(250, 300, 600, 600, 'o').K('co1')
	s2 = w.rectSensor(950, 300, 600, 600, 'o').K('co2')
	w.bindCo('co1', 'co2')
	w.beg(function () {
	})
	w.end(function (cx) {
		var fixt
		if (fixt = cx.with('co1')) {
			// fixt.cancel()
		}
		if (fixt = cx.with('co2')) {
			// fixt.cancel()
		}
	})
	_.times(20, function () {
		w.circ(300, 300, 30, 'b')
	})
}
GRAVTRAP = function () {
	W({g: 0, w: 0}).C('e').Y(300, 300).pen('welcome to grav controller')
	gCo = w.grav().body(y,
			w.D(320, 300, 'b', 20).den(1),
			w.D(300, 320, 'r', 30).den(1),
			w.D(340, 300, 'x', 40).den(1),
			w.D(300, 340, 'c', 50).den(1),
			w.D(320, 320, 'l', 60).den(1)
	)
}
GRAVR = function () {
	W({g: 0, w: 0}).C('e').Y(300, 200).pen(
			'welcome to grav controller - top balls r1, bottom r2(default)')
	r = 40
	gCo = w.grav(1, true).body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
	gCo2 = w.grav().body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
}
GRAVG = function () {
	W({g: 0, w: 0}).C('e').Y(100, 100)
	w.pen(
			'welcome to grav controller - top has g:2, bottom has g:1 (default)')
	r = 40
	gCo = w.grav(2).body(
			w.D(100, 600, 'b', r).den(1),
			w.D(200, 500, 'r', r).den(1),
			w.D(300, 400, 'x', r).den(1),
			w.D(400, 300, 'c', r).den(1),
			w.D(500, 200, 'l', r).den(1),
			w.D(600, 100, 'l', r).den(1)
	)
	gCo2 = w.grav().body(
			w.D(700, 600, 'b', r).den(1),
			w.D(800, 500, 'r', r).den(1),
			w.D(900, 400, 'x', r).den(1),
			w.D(1000, 300, 'c', r).den(1),
			w.D(1100, 200, 'l', r).den(1),
			w.D(1200, 100, 'l', r).den(1)
	)
}
GRAVGR = function () {
	w = b2d.W({g: 0, walls: 0}).C('e').pen(
			'welcome to grav controller - top has g:1,r:1, bottom has g:2,r:2 -- pinks move OUTWARDS only on bottom?')
	y = w.yShip(300, 200).thrustControl().shootOnSpace().den(1).linDamp(10)
	r = 40
	gCo = w.grav(1, true).body(
			w.circ(100, 600, r, 'b').den(1),
			w.circ(200, 500, r, 'l').den(1),
			w.circ(300, 400, r, 'x').den(1),
			w.circ(400, 300, r, 'x').den(1),
			w.circ(500, 200, r, 'l').den(1),
			w.circ(600, 100, r, 'b').den(1)
	)
	gCo2 = w.grav(4).body(
			w.circ(700, 600, r, 'b').den(1),
			w.circ(800, 500, r, 'l').den(1),
			w.circ(900, 400, r, 'x').den(1),
			w.circ(1000, 300, r, 'x').den(1),
			w.circ(1100, 200, r, 'l').den(1),
			w.circ(1200, 100, r, 'b').den(1)
	)
}
FORCE = function () {
	w = b2d.W({g: 0}).C('e')
			.pen('welcome to (const) force controller')
	fCo = w.force(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b').den(1)
	b1 = w.circ(100, 200, 40, 'b').den(1)
	x = w.circ(100, 300, 20, 'x').den(1)
	x1 = w.circ(100, 400, 40, 'x').den(1)
	setTimeout(function () {
		w.C('d');
		fCo.body(b, b1)
		aCo.body(x, x1)
	}, 2000)
}
ACCVSFORCE = function () {
	w = b2d.W({g: 0}).C('e')
			.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	fCo = w.force(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b').den(1)
	b1 = w.circ(100, 200, 40, 'b').den(1)
	x = w.circ(100, 300, 20, 'x').den(1)
	x1 = w.circ(100, 400, 40, 'x').den(1)
	setTimeout(function () {
		w.C('d');
		fCo.body(b, b1)
		aCo.body(x, x1)
	}, 2000)
}
TENSOR = function () {
	W().G(0).pen('welcome to tensor (damping) controller - the timing here is amazing!')
	co = w.tensor().body(
			w.D(100, 100, 'r', 30).lV(10, 20),
			w.D(500, 500, 'b', 30).lV(-10, -20),
			w.D(300, 300, 'g', 30).lV(-10, -20)
	)
}
TENSORNEVERSETTLE = function () {
	W().G(0).Y().pen('welcome to tensor (damping) controller')
	co = w.tensor()
	_.times(30, function () {
		co.body(w.B(400, 300, 'w', 20).L(10, 20, 0))
	})
}
COEDGE = function () {
	W()
	w.rectStat(320, 480, 640, 20)
	w.rectStat(320, 340, 320, 20)
	w.rectStat(170, 230, 20, 200)
	w.rectStat(470, 230, 20, 200)
	w.rectSensor(320, 245, 280, 170)
	co = w.buoy(0, -1, 5, 2).os(-6).den(2)
	cjs.tick(function () {
		w.each(function (b) {
			if (b.isDyn()) {
				
				// if(b.co()){ co.remove(b) }
				b.eachCx(function (cx) {
					
					// if one is a sensor AND the other has no controllers
					// then add the other one to the controller
					// if(cx.A().IsSensor() && !cx.b().co() ){ co.body(cx.b()) }
					// if(cx.B().IsSensor() && !cx.a().co() ){ co.body(cx.a()) }
				})
			}
		})
	})
	// I(function(){
	b = w.circ(300, 40, 8, 'r').den(1)
	c = b.cx()
	// })
}
//waterCanvas = w.s.shape().f('red',.2).dr(180,160,280,170).ef()
SENSORCONTROL = function () {
	W({g: 3})
	w.S(300, 300, 'o', [[40, 40, '-']])
	w.S(540, 300, 'o', [[40, 40, '-']])
	w.S(780, 300, 'o', [[40, 40, '-']])
	y = w.ship(300, 100).linDamp(2)
	aCo = w.acc(1000, -1000)
	w.beg(function () {
		aCo.body(y)
	})
	w.end(function () {
		aCo.remove(y)
	})
	//  The easiest approach to utilize the controllers is to create sensor fixtures
	// that test when a begin/end  event has occurred with a body.
	// In the beginContact method, add the body to the controller.
	// In the endContact method, remove the body.
}
CLASSES = function () {
	w = b2d.W()
	b = w.ball(100, 100, 50)
	b1 = w.ball(100, 200, 40)
}
MESSAGEPASSING = function () {
	w = b2d.W()
	b = ball(100, 100, 50)
	b1 = ball(100, 200, 40)
}
UNION = function () {
	w = b2d.W()
	b = w.brick(300, 300, 50, 50)
	b2 = w.brick(320, 320, 50, 50)
	_.times(20, function () {
		u = b2d.conc(
				Math.poly(b.V()).union(Math.poly(b2.V())).verts()
		).XY(300, 100)
	})
}
TANGRAMSSTAT = function () {
	w = b2d.W()
	b = w.brick(300, 300, 56, 56).rot(45)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).fixedRot(true).stat()
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).fixedRot(true).stat()
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).fixedRot(true).stat()
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).rot(270).fixedRot(true).stat()
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)]).XY(237, 324).rot(225).fixedRot(true).stat()
	p = b2d.conc([
		V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)
	]).XY(240, 267).rot(90)
			.fixedRot(true).stat()
}
TANGRAMS = function () {
	W({g: 0})
	b = w.B(300, 300, 't', 56, 56).rot(45).den(1).damp(1000, 1000)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).den(1).damp(1000, 1000)
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).den(1).damp(1000, 1000)
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).den(1).damp(1000, 1000)
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).damp(1000, 1000)
			.rot(270).den(1).damp(1000, 1000)
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)])
			.XY(237, 324).den(1).damp(1000, 1000)
	p = b2d.conc([
		V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)
	]).XY(240, 267).den(1).damp(1000, 1000)
}
BOOTBALL = function () {
	W({g: 0})
	b = w.B(270, 500, 'o', 40).rest(.5)
	r = w.S(300, 300, 'g', 100, 20).rot(20)
	r.fixt(b2d.poly(20, 40, 60, -20))
	r.XY(200, 500).den(.1).damp(1000, 1000).rot(100).dyn()//.angVel(200)
	r.rev(w.B(200, 500, 'w', 20).damp(1000, 1000).den(100))
	cjs.tick(function () {
		b.F(0, 20)
	})
}
ULTMJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'})
	w.B(300, 400, 'r', 50, 50);
	w.B(800, 400, 'r', 50, 50);
	w.B(1200, 400, 'r', 50, 50);
	w.B(1600, 400, 'y', 100, 100).K('m')
	y = w.ship().track()
}
WORLDS = function () {
	W()
	w.bal(300, 400, 30)
}
function queryApps() {
	BODYAT = function () {
		w = b2d.W({g: 0})
		b = w.S(470, 270, 'y', 100)
		b1 = w.S(500, 300, 'r', 100)
		b2 = w.S(530, 330, 'o', 100)
		w.qXY(500, 300,
				function (f) {
					f.C('w')
					return true
				})
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
	RAYCAST = RAC = function () {
		b2d.miniWorld()
		firstPoint = secondPoint = line = null
		w.brick(200, 200, 40, 20)
		w.st.on('stagemousedown', function (ev) {
			$l('stage mouse down')
			e = ev;
			x = e.rawX;
			y = e.rawY
			if (firstPoint == null) {
				firstPoint = {x: x, y: y}
			}
			else {
				if (secondPoint == null) {
					secondPoint = {x: x, y: y}
				}
				else {
					firstPoint = secondPoint;
					secondPoint = {x: x, y: y}
				}
				removeDots()
				w.s.dot('blue', firstPoint.x, firstPoint.y)
				w.s.dot('red', secondPoint.x, secondPoint.y)
				rayLine(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
				n = 0
				w.rayCast(function (fixt) {
							n = n + 1;
							f = fixt;
							b = fixt.GetBody()
							w.s.dot(b.X(), b.Y())
						},
						firstPoint, secondPoint)
				data(n + ' guys')
			}
		})
	}
	rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
	IMP = function () {
		W({g: 0, w: 0}).Y()
		// y.rt(90).XY(200,240)
		w.D(200, 235, 'b', 10).lV(20, 0).d(10)
		w.D(900, 200, 'r', 100, 100).rt(45)
		r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
		r.$(function () {
			this.B().I(100, -2000)
		})
		f = r.f()
		w.i.dot(856, 240)
		/*
		 s = b2d.Seg(0,0,1200, 600)
		 s1 = b2d.Seg(1200,0, 0, 600)
		 lArr =  'the shape world transform'
		 nl = '2Vec2 — returns the hit fraction.'
		 // You can use this to compute the contact point
		 // p = (1 - lambda) segment.p1 + lambda segment.p2.
		 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
		 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
		 s.TestSegment(lArr, nl, s1, maxLam )
		 */
		ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
	}
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		_.in(function () {
			w.ray(0, 0, 500, 500, function (f) {
				f.C('g')
			})
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('me')
			}, '-')
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('sun')
			}, '+')
		})
	}
	RC = function () {
		W();
		var p1, p2, d, l
		w.me(400, 100);
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.i.e(function (c) {
				if (c.of('dot') || c.of('line')) {
					c.rm()
				}
				// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
			})
			w.d('b', p1);
			w.d('r', p2);
			w.l(p1.x, p1.y, p2.x, p2.y).K('line')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
	}
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		_.in(function () {
			w.ray(0, 0, 500, 500, function (f) {
				f.C('g')
			})
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('me')
			}, '-')
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('sun')
			}, '+')
		})
	}
	RC = function () {
		W();
		var p1, p2, d, l
		w.me(400, 100);
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.i.e(function (c) {
				if (c.of('dot') || c.of('line')) {
					c.rm()
				}
				// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
			})
			w.d('b', p1);
			w.d('r', p2);
			w.l(p1.x, p1.y, p2.x, p2.y).K('line')
			w.ray(p1, p2, function (f) {
				$l('ray hit')
				_f = f
				f.C('w')
			})
		})
	}
	rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
}
 