function bootMobile() {
	$.xs = $.phones = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.d()
		if (color) {
			div.C(color)
		}
		div.K('col-xs-' + num)
		return div
	}
	$.sml = $.tablets = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.d()
		if (color) {
			div.C(color)
		}
		div.K('col-sm-' + num)
		return div
	}
	$.md = $.desktops = function self(color, num) {
		if (N(color)) {
			return self(null, color)
		}
		var div = $.d()
		if (color) {
			div.C(color)
		}
		div.K('col-md-' + num)
		return div
	}
	$.lg = $.largeDesktops = function (c, num) {
		if (N(c)) {
			return $.lg(null, c)
		}
		var d = $.dK('col-lg-' + num)
		if (c) {
			d.C(c)
		}
		return d
	}
}
