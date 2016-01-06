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