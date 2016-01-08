w.startKilling = function () {
	var w = this
	$t(function () {
		w.each(function (b) {
			if (b.is('destroy')) {
				b.K('destroyed')
				b.kill()
			}
		})
	})
	return w
}