DANI = function () {
	$('body').C('pink')
	alert('hey baby')
	bt = $.bt("dani's button - press me, please", function () {
		bt.remove()
		if (R(5) == 3) {
			$.h1('thank you - that hit the spot')
			_.in(3, BOX)
		}
		else {
			$.h1('ouch that hurt. a little to the ' + (R() ? 'right' : 'left'))
		}
	})
}
