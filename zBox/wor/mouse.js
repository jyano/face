w.oMD = function () {
	var c = $(w.s.HUD.canvas)
	c.mousedown(function (e) {
		o.dx = e.clientX - w.s.x
	})
}
// world mouse down vs canvas mouse down!!!
// canvas mouse down just uses $.oMD
w.md = function (l) {
	var w = this
	$(w.hud.canvas).mousedown(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.mu = function (l) {
	var w = this
	$(w.hud.canvas).mouseup(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.mm = function (l) {
	var w = this
	$(w.hud.canvas).mousemove(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.m$ = function (l) {
	var w = this
	$(w.hud.canvas).click(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.m$$ = function (l) {
	var w = this
	$(w.hud.canvas).dblclick(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}