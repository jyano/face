b2d.colorBalls = function () {
	r = w.circ(300, 300, 12, 'red').rest(1).den(1).fric(.1)
	b = w.circ(400, 300, 12, 'blue').rest(1).den(1).fric(.1)
	y = w.circ(500, 300, 12, 'yellow').rest(1).den(1).fric(.1)
	g = w.circ(600, 300, 12, 'green').rest(1).den(1).fric(.1)
	p = w.circ(700, 300, 12, 'pink').rest(1).den(1).fric(.1)
	o = w.circ(800, 300, 12, 'orange').rest(1).den(1).fric(.1)
}
$roygbiv = function () {
	r = reFr(300, 'r')
	o = reFr(400, 'o')
	y = reFr(500, 'y')
	g = reFr(600, 'g')
	b = reFr(600, 'b')
	i = reFr(800, 'i')
	v = reFr(900, 'v')
	function reFr(x, c) {
		return w.BALL(x, 300, 12, c).re(1).fr(.1)
	}
} //= b2d.colBalls = b2d.colorBalls
w.colBalls = function () {
	var w = this
	r = w.D(300, 300, 'r', 12).DFB(1, 0.1, 1)
	b = w.D(400, 300, 'b', 12).DFB(1, 0.1, 1)
	y = w.D(500, 300, 'y', 12).DFB(1, 0.1, 1)
	g = w.D(600, 300, 'g', 12).DFB(1, 0.1, 1)
	p = w.D(700, 300, 'p', 12).DFB(1, 0.1, 1)
	o = w.D(800, 300, 'o', 12).DFB(1, 0.1, 1)
	return w
}