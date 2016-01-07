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