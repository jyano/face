ko.aB = function (vm) {
	ko.applyBindings(vm)
}
ok = $applyBindings$ = $b = ko.b = ko.ab = function (o, b) {
	var g = G(arguments), ob
	if (S(o)) {
		ob = {}
		ob[o] = b
		g[0] = ob
	}
	if (g.O_) {
		vm = g.f
		return ko.aB(g.f)
	}
	return ko
}
NOK = function () {
	d = $.d('r').dB('text: a')
	vm = $o('afsdafsfsdafsdfds')
	// ko.aB({a: vm})
	ko.aB({a: vm})
	_.in(function () {
		vm('changed the view model!')
	})
}
$o = $observable$ = ko.o = function (a) {
	return ko.observable(a)//ko.o(a)
}
$oa = $obbArr = ko.oa = function (a) {
	var g = G(arguments)
	var obbA = ko.observableArray(g.A_ ? g.f : g)
	return obbA
}
 