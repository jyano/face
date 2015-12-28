TEE = function () {
	W(800, 500, 1800, 800)
	w.G(0).hud.dot(600, 300)
	t = w.S(600, 300, 'w', [[40, 40, '-']])
	ct = cjs.ct().a2(w.hud).XY(t.X(), t.Y()).drag()
			.bm('guy').opacity(.2)
	$t(function () {
		
		//t.XY( ct.X(), ct.Y() )
		var camX = w.zDif(ct.X(), 600)
		var camY = w.zDif(ct.Y(), 300)
		w.camXY(camX, camY)
		$l('ctX: ' + ct.X() + ', teeX: ' + t.X() + ', camX: ' + camX)
	})
}
TEE1 = function () {
	_level_().G(0)
	tee = w.D(w.gameW / 2, w.gameH / 2, 'w', [[20, '-']]).den(.01)
	tee.lD(1000)
	centerX = w.gameW / 2
	centerY = w.gameH / 2
	$t(function () {
		var camX = w.scaledDif(tee.X(), centerX)
		var camY = w.scaledDif(tee.Y(), centerY)
		w.camXY(camX, camY)
	})
}
w.getTee = w.getTrackee = function (x, y) {
	var w = this
	w.trackee = w.trackee || w.getDfTrackee(x, y)
	return w.trackee
}
w.getDfTrackee = function (x, y) {
	var w = this
	w._trackee = w._trackee || w.whiteSensorBox(w.toX(x), w.toY(y))
	return w._trackee
}
ZMSC = function () {
	$FIREBALL()
	$cv = $(w.s.HUD.canvas) // alt: $cv = w.hud.c
	o = {mode: 'slide'}
	$cv.m({
		mD: function (x, y) {
			toggleMode()
			o.x = x
			o.y = y
			o.dx = x - o.x
			o.dy = y - o.y
			o.stgX = w.stage.x
			o.stgY = w.stage.y
		},
		pM: function (x, y) {
			if (o.mode == 'zoom') {
				w.ZOOM((o.y - y) * .00005 + w.zoom())
			}
			else {
				w.stage.x = w.stage.y = x - o.dx
			}
		}
	})
//	$cv.mousedown(function (e) {})//var y = e.clientY
//	$cv.pressmove(function (e) {})
	function toggleMode() {
		o.mode = (o.mode == 'slide') ? 'zoom' : 'slide'
	}
}
SLZ = SLIDEZOOM = function () {
	$FIREBALL().track()
	w.zoom(.8)
	$cv = $(w.s.HUD.canvas)
	$cv.mousedown(function (e) {
		o = {y: e.clientY}
	})
	$cv.pressmove(function (e) {
		var y = e.clientY
		w.ZOOM((o.y - y) * .00005 + w.zoom())
	})
	//y = w.ship()
	//y._track(600, 300, function (d) {			w.stgXY(d.x, d.y)})
}
 