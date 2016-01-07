$.fn.dg = $.fn.drag = function () {
	this.A()
	this.each(function () {
		$(this).css('top', $(this).position().top)
		$(this).css('left', $(this).position().left)
	})
	this.P('a')
	this.on('mousedown', function (e) {
		var el = $(this)
		var offset = el.offset(),
				deltaX = e.pageX - offset.left,
				deltaY = e.pageY - offset.top
		$('html').on('mousemove', function (e) {
			var x = e.pageX - deltaX,
					y = e.pageY - deltaY
			el.left(x)
			el.top(y)
		}).on('mouseup', function () {
			$(this).off()
		})
	})
	//touchDrg(element)
	return this
}