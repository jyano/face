TANGLE = function () {
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
$.bd = function () {
	var bd = $('body')
	return bd
}
$bd = function () {
	var g = G(arguments),
			bd = $('body')
	if (g.f) {
		bd.css.apply(bd, g)
	}
	return bd
}
$.A = function () {
	var g = G(arguments),
			bd = $('body')
	$.fn.A.apply(bd, g)
	return $
}