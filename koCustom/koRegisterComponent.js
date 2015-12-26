$.fn.cm$ = $.fn.cmp$ = $.fn.bCm = function (s) {
	return this.b('component', s)
}
ko.cm = ko.cmp = ko.comp = ko.components
ko.cm.rg = ko.cm.reg = ko.cm.register
ko.cm.iR = ko.cm.isRegistered
ko.r = ko.rg = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko.r = ko.rg = ko.cm.rg = ko.cm.reg = function () {
	var g = G(arguments), o
	o = {n: g.f, op: g.s}
	o.op = o.op || {}
	if (!o.op.viewModel) {
		//op.viewModel = op.vm || op.m
		if (op.vm) {
			op.viewModel = op.vm
		}
		else if (op.m) {
			op.viewModel = op.m
		}
	}
	if (S(o.op.viewModel) || (
			O(o.op.viewModel) && !o.op.viewModel.element  )) {
		o.op.viewModel = {element: o.op.viewModel}
	}
	o.op.viewModel = o.op.viewModel || {vm: o.op}
	if (!op.template) {
		if (op.tp) {
			op.template = op.tp
		}
		else if (op.t) {
			op.template = op.t
		}
	}
	cm = ko.cm.reg(o.n, o.op)
	return cm
}
ko.r = ko.rg = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko.rg = ko.r = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko.r = ko.rg = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko._ = function (a, t, m) {
	var g = G(arguments),
			ob = {
				t: $('<template>').A($.d(A(t) ? t : g)).ch(0).h(),
				m: m
			}
	ob.template = ob.template || ob.t
	ob.viewModel = ob.viewModel || ob.vm || ob.m
	return ko.rg(_.tL(a), ob)
}
$cm = function (n, pam) {
//=OK
	return $('<' + n + ' params = ' + (pam || '') + ' >')
}
ko.component$ = ko.$ = function (n, b) {
	var g = G(arguments), o,
			n = _.tL(n)
	return !b ? _.p($cm, n) : $cm(n, O(b) ? ob2s(b) : b)
	//=$$$
}
function ob2s(ob) {
	ob = ob || {};
	var o = []
	_.e(ob, function (v, k) {
		o.push(k + ':' + v)
	})
	return o.join()
}
$.fn.cm$ = $.fn.bCm = function (s) {
	return this.b('component', s)
}
$d.cm$ = $.dCm = function (a) {
	return $.d().bCm(a)
}
$.fn.bCm = function (s) {
	return this.b('component', s)
} 