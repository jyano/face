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
  