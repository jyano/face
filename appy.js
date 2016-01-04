$._x = function (col, title) {
	$.C(col || $r())
	if (title) {
		$.A($.h1(title), $.hr())
	}
}
$.x = function () {
	var g = G(arguments), bd = $.bd()
	bd.E()
	var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
	{col: g.f, title: g.s}
	if (o.css) {
		$s(o.css)
	}
	$._x(o.col, o.title)
	if (g.p) {
		bd.A($.hr())
	}
	return $
	$.s = function (css, c, tx) {
		$s(css)
		$.x(c, tx)
		return $
	}
}
_$ = function (ob) {
	$.x(ob.C || $r(), ob.t)
	if (ob.vm) {
		OK(ob.vm)
	}
	if (ob.el) {
		els(ob.el)
	}
	if (ob.A) {
		_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})
	}
	if (ob._) {
		$.in(ob._)
	}
}
$.app = function () {
	var d = $.d.apply($, arguments)
	d.K('app').id('app')
	return d
}
$.fm = $.format = function () {
	$.fm.A = $s1 = s1 = section1 = $.span()
	$.fm.B = $s2 = s2 = section2 = $.span()
	$ctD = $.containerDiv(bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
} 