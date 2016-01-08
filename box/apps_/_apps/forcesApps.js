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
 