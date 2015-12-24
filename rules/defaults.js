$s.defaults = $s.df = {}
$s.defaults.Bor = {  }
$s.defaults.Bor.b = '1px blue border'

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

$default = function (v, k) {
	return $s.defaults[k]?
			$s.defaults[k][_.f(v)]: 
			null
}
 