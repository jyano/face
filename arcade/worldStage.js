NEWS = function () {
	$W();
	b = w.S(600, 300, 'w', 200);
	_.in(function () {
		b.dyn().f().C('z')
	})
	//three ways to make a new stage
	s = $St('r', 100).A().bm('me')
	s.can.drag()
	c = $.c('b', 100).A().drag().XY(400)
	s1 = $St(c)
	s1.A().bm('me')
	c2 = $.c('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = $St(['someId'])
	s2.t().bm('me')
	_.in(3, function () {
		w.S(300, 100, 'z', 1500, 1)
		w.d('r', 300, 100)
		w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
		w.i.T('bottom').XY(500, 100).bl('-')
		w.i.T('middle').XY(700, 100)
		w.dot(300, 400)
	})
	_.in(5, function () {
		nice = w.i.T('nice', 135, 'x', 300, 400)
		/*
		 w.i.T('linewidth 0').XY(100,300).lW(0)
		 w.i.T('linewidth null').XY(100, 500).bl('bottom')
		 w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
		 w.i.T('lineheight -100').XY(700,300).lH(-100)
		 w.i.T('lineheight 0').XY(700,500).lH(0)
		 w.i.T('lineheight 100').XY(700,700).lH(100)
		 w.i.T('linealign left').XY(600, 100)
		 w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
		 w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
		 */
		hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
		w.show('hello')
	})
}
//display object:
SHD = SDW = SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}
CIRS8 = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
VERTS = function () {
	w = b2d.W().debug()
	thingy = [['pink', [-20, -20], [0, -30], [10, 10]],
		['brown', [0, 0], [30, -50], [50, -10]]]
	_.times(100, function () {
		w.verts(Math.random() * 600, Math.random() * 300 + 200, thingy)
	})
}
PITFALL = function () {
	b2d.levelScrollX()
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	turtle2 = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	t = w.vertsKin(400, 280, turtle).fixedRot(true)
	t2 = w.vertsKin(700, 280, turtle2).fixedRot(true)
	setInterval(function () {
		t2.linVel(5, 0)
		setTimeout(function () {
			t2.linVel(-5, 0)
		}, 1000)
	}, 2000)
}
LINGRADBG = function () {
	w = b2d.W()
	s = w.s
	h = s.shape()
}
CONVEX = function () {
	w = b2d.W({grav: 0}).debug()
	b = w.dyn(300, 300)
	f = b.convex('green', [[0, 0], [0, -200], [100, 0]])
	b.convex('blue', [[0, 30], [-300, -20], [100, 0]])
	b.convex('pink', [[0, 0], [0, -20], [10, 0]],
			[[0, 30], [-30, -20], [10, 0]])
	b2 = w.dyn(300, 300)
	b2.convex('red', [[0, 0], [0, -20], [10, 0]])
	b2.convex([[0, 30], [-30, -20], [10, 0]])
	b3 = w.dyn(300, 300)
	b3.convex('green', [
		[-150, 0], [-120, -20], [-80, -50], [0, -30]
	])
	b3.convex('red',
			[[-30, -30], [-20, 10], [-10, 60]
			])
	b3.convex('orange',
			[[-30, -30], [-20, -50], [10, -20]
			])
	w.verts(300, 500,
			[
				['pink', [-20, -20], [0, -30], [10, 10]],
				['brown', [0, 0], [30, -50], [50, -10]]
			]
	)
	dot = function () {
		b.dot()
		f.dot()
	}
	//setTimeout(dot, 5000)
	//w.convex !!!!
	_.times(50, function () {
		w.circ(200, 30, 5)
	})
	b.fixedRot(true)
	cjs.tick(function () {
		b.linVel(0)
		b.angVel(0)
	})
}
function worldLoader() {
	POLLL = function () {
		verts = [
			[[5, 100], [0, -100], [200, -150], [200, 150]],
			[[-50, 50], [-50, -100], [450, -50], [450, 50]]
		]
		W()._(function (w) {
			w.D(250, 300).pol({
				v: verts,
				c: {c: 'r', C: 'y', l: 10},
				bf: 'chicks'
			})
			w.D(450, 300).pol({
				v: verts,
				c: {c: 'r', C: 'y', l: 10},
				bf: 'me'
			})
		})
	}
	POLLB = function () {
		W()._(function (w) {
			v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
			w.D(250, 300).pol({
				//c: {c: 'r', C: 'y', l: 10},
				bf: Q.i('chicks'),
				v: v
			})
			w.D(450, 300).pol({
				v: v,
				c: {c: 'r', C: 'y', l: 10},
				bf: Q.i('me')
			})
		})
	}
}