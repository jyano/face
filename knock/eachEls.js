e$ol = ol$e = $ol$e = $ol.e$ = $.ol.e$ = $.olE = $.olBe = function (a, b) {
	var ol = $.ol().e$(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
ko.t$ = t$ = sp$t = sp_t$ = $.sp.t$ = function () {
}
ko.v$ = function(){}
e$ = function (arr) {
	$.d().e$()
}
e$example=function(){
	ul_e$([{n:'j'},{n:'r'},{n:'y'}], [ $.li() ])

}
 e$ul = ul$e = $ul$e = $ul.e$ = $.ul.e$ = $.ulE = $.uE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().e$(a)
	if (c) {
		b = $.li(g.r)
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
$.li.tb$ = $.liBt = function (a) {
	return $.li().bT(a)
}
$.tB.e$ = function (a, b) {
	var g = G(arguments), tB = $.tB()
	tB.e$(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	else {
		if (true) {
			_.e(g.r, function (q) {
				tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
			})
		}
	}
	return tB
}
$.tBTr = $.tBT = function (arr) {
	var g = G(arguments)
	var tr = $.tr()
	g.r(function (q) {
		tr.A(q)
	})
	return $.tB().e$(arr).A(tr)
}
$.ko.table = function (arrBindingName, ch) {
	return $.t([
		$.tH(ch.tH),
		$.tB(arrBindingName).e$('peep')
	]).A(ch.tr)
}
$.dE = function (a, b) {
	var d = $.d().e$(a)
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
$.uUl = $.U = function () {
	var g = G(arguments)
	//return $.ul.e$(g.f, $.li(g.r))
	var li = $.li(g.r)
	return $.u().e$(g.f).A(li)
} 