$.fn.pM = function (l) {
	var c = this
	c.pressmove(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}
$.fn.mp = $.fn.mousePoint = function (e, scale) {
	scale = N(scale) ? scale : 1
	return V(e.pageX / scale, e.pageY / scale)
}
$.fn.pm = $.fn.pressmove = function (func) {
	var mouse_pressed
	this.mousedown(function () {
		mouse_pressed = true
	})
	this.mouseup(function () {
		mouse_pressed = false
	})
	this.mousemove(function (e) {
		if (mouse_pressed) {
			func(e)
		}
	})
	return this
}
$.fn.pM = function (l) {
	var c = this
	c.pressmove(function (e) {
		l(e.clientX, e.clientY)
	})
	return c
}