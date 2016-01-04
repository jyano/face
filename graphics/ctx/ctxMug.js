ADB = function () {
	_ADBE = function (fn) {
		return function () {
			$Ld(function () {
				__C()
				j = x.d('me', 100, 300)
				i = x.d('chicks', 600, 300)
				fn()
			})
		}
	}
	ADBE = _ADBE(function () {
		c.$(function (x1, y1) {
			x.a(x1, y1, 10).s()
		})
	})
	ADBE()
}
 