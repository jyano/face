 
Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
 
 
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
b2d.world = function (g, sleep) {     //b2d.wor =  W ???
	g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
	s = U(sleep) ? true : sleep
	var w = new b2d.World(g, sleep)
	w.SCALE = 1
	return w
}
 
_world = function (x, y, doSleep) {
//make world
// can set stage width/height and world width/height
//W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U') 
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return $_Wo(grav, sleep)
} 