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