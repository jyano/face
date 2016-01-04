_canEvents = function (el) {
	el.$ = function (func) {
		el.click(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.$$ = function (func) {
		el.dblclick(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.over = el.MV = function (func) {
		el.mouseover(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.out = el.MO = function (func) {
		el.mouseout(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.enter = el.ME = function (func) {
		el.mouseenter(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.leave = el.ML = function (func) {
		el.mouseleave(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.up = el.MU = function (func) {
		el.mouseup(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.move = el.MM = function (func) {
		el.mousemove(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.down = el.MD = function (func) {
		el.mousedown(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	return el
}
			
		 