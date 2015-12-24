$s.d = function () {
	var g = G(arguments), rulesOb
	if (g.O) {
		rulesOb = g.f
	}
	else {
		rulesOb = {}
		rulesOb[g.f] = g.s
	}
	$s('div', rulesOb)
}
$.dS = function (cssOb) {
	return $.d().css(cssOb)
}
$s.bd = function (ob) {
	$s('body', ob)
}
$s.bt = function (ob) {
	$s('button', ob)
}
$.flexy = function () {
	$s.d({	// cool: $s.d('margin', 10)
		margin: 10, display: 'flex',
		'justify-content': 'center',
		'flex-wrap': 'wrap'
	})
}
 
 