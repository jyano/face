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
 