_canGlobComp = function (el) {
	el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
		if (U(compOp)) {
			return this.context.globalCompositeOperation
		}
		this.context.globalCompositeOperation = oO('g', compOp)
		return this
	}
	return el
}
CANXOR = CANGLOBALCOMP = function () {
	cv = $.c('u', 1000, 800)
	cv.draw('me', 100, 100)
	cv.draw('me', 200, 200)
	cv.draw('me', 300, 300)
	_.in(2, function () {
		cv.globalCompositionOperation('xor')
		cv.on('click', function (ev) {
			x = ev.pageX
			y = ev.pageY
			cv.draw('me', x - 120, y - 150)
		})
	})
}