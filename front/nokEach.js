$.ol_e = $.olE = $.olBe = function (a, b) {
	var ol = $.ol().bE(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
$.olE = $.olBe = function (a, b) {
	var ol = $.ol().bE(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
$.uE = $.ulE = function (a, b) {
	var ul = $.ul().bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
}
$.uE = $.ulE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().bE(a)
	if (c) {
		b = $.li(_.r(g))
	}
	else if (O(b) && !A(b)) {
		b = [b]
	}
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
	function old() {
		$.uE = $.uE = $.ulE = function (a, b) {
			var ul = $.ul().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					ul.A(el)
				})
			}
			else if (S(b)) {
				ul.A(b)
			}
			return ul
		}
	}
}
$.uLE = function (a) {
	var g = G(arguments);
	return $.ulE(a, $.li(g.r))
}
$.U = function () {
	var g = G(arguments)
	return $.uE(g.f, [$.li(g.s)])
}
$.liT = $.liBt = function (a) {
	return $.li().bT(a)
}
$.u_e = $.uE = $.ulE = function (a, b) {
	var ul = $.ul().bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
}
$.uE = $.ulE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().bE(a)
	if (c) {
		b = $.li(_.r(g))
	}
	else if (O(b) && !A(b)) {
		b = [b]
	}
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
}
$.dE = function (a, b) {
	var d = $.d().bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			d.A(el)
		})
	}
	else if (S(b)) {
		d.A(b)
	}
	return d
}
$.d_e = $.dE = function (a, b) {
	var d = $.d().bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			d.A(el)
		})
	}
	else if (S(b)) {
		d.A(b)
	}
	return d
}
$.fn.bindKOEach = fe = forEach = function (a) {
	return this.bindKO('fe', a)
}
$.fn.bindKOEachData = feD = forEachData = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.fn.bE = function (s) {
	return this.b('foreach', s)
}
$.fn.ko_e = $.fn.ko_each = function (s) {
// = $.fn.bE
	// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
	var g = G(arguments)
	if (g.p) {
		return '$data.' + s
	}
	return this.b('foreach', s)
}
$.fn.koE = $.fn.eKo = function (a) {
	return this.bindKO('fe', a)
}
$.fn.eD = $.fn.eB = function (a) {
	return this.bindKOEach('$data.' + a)
}
$.t_e = $.tBE = function (a, b) {
	var tB = $.tB()
	tB.bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	return tB
}
$.tdT = function (a, b) {
	var td = $.td()
	td.bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
$.tBE = function (a, b) {
	var tB = $.tB()
	tB.bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	return tB
}
$.tBE = function (a, b) {
	var g = G(arguments),
			tB = $.tB()
	tB.bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	else {
		_.e(g.r, function (q) {
			tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
		})
	}
	return tB
}
$.tBT = function (arr) {
	var g = G(arguments),
			tB = $.tB(), tr = $.tr()
	_.e(g.r, function (q) {
		tr.A(q)
	})
	return tB.bE(arr).A(tr)
}
$.tBE = function (a, b) {
	var tB = $.tB()
	tB.bE(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	return tB
}
$.tdT = function (a, b) {
	var td = $.td()
	td.bT(a)
	if (A(b)) {
		_.e(b, function (el) {
			td.A(el)
		})
	}
	return td
}
