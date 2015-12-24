$sty = function (sty, styVal) {
	//= $.qs
	var o = {}
	if (S(sty)) {
		addSty(o, sty, styVal)
	}
	else {
		_.e(sty, function (styVal, sty) {
			addSty(o, sty, styVal)
		})
	}
	return o
	function addSty(o, a, b) {
		if (N(b) && M.abs(b) > 10) {
			b = String(b) + 'px'
		}
		o[oO('s', a)] = oO(a, b, 'R')
		return o
	}
}
$.fn.s = $.fn.ss = function () {
//$.fn.s = $.fn.css
	var g = G(arguments)
	return this.css.apply(this,
			_.x(g, {f: $sty(g.f)}))
}