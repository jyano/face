$sl = {}
$.p.ch = function () {
}
$ol = function () {
}
$ul = function () {
}
$$s = function (ob) {
	$s({$: ob})
}
old = function () {
	CUSTEL = function () {
		
		//MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
		// Now curObsrvInst is either
		// observable1 or obsrv2//
		// and you would read its value with "curObsrvInst()"
		// 'params' is an object whose k/v pairs are the pams
		// passed from the cm bd or cust el.
		// - 'cmtInf.el'
		//  is the el the component is being//
		//  injected into. When createVM is called, the template has//
		//  already been injected into this el, but isn't yet bound.
		// - 'componentInfo.templateNodes'
		// is an array containing any DOM
		//   nodes that have been supplied to the component. See below.
		// Return the desired view model instance, e.g.:
	}
	ko.rg = function () {
		var g = G(arguments), o = {n: g.f, op: g.s};
		o.op = o.op || {}
		if (!o.op.viewModel) {//op.viewModel = op.vm || op.m
			if (o.op.vm) {
				op.viewModel = o.op.vm
			}
			else if (o.op.m) {
				o.op.viewModel = o.op.m
			}
		}
		if (S(o.op.viewModel) || (O(o.op.viewModel) && !o.op.viewModel.element  )) {
			o.op.viewModel = {element: o.op.viewModel}
		}
		o.op.viewModel = o.op.viewModel || {vm: o.op}
		if (!op.template) {
			if (op.tp) {
				op.template = op.tp
			} else if (op.t) {
				op.template = op.t
			}
		}
		cm = ko.R(o.n, o.op)
		return cm
	}
}
$(function () {
	bd = $('body')
})
$.fS = function (num) {
	return bd.fS(N(num, 30))
}
$.fn.pam = $.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
 
//tagUp and add, return jQ
$.fn.qA = function (t) {
	return $('<' + t + '>').A()
}
$.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.fn.qAP = function (a, b, c) {
	this.qA(a).par(b, c)
	return this
}
$.p.cb=$.p.ch = function () {
}

$.p.sp = function () {
}
$els = function () {
	return $.sp.apply(null, arguments)
}