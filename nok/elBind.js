 
$.fn.ko_if = function (s) {
	return this.b('if', s)
	// = $.fn.bI = $.fn.bIf
}
$.fn.ko_vs = function (s) {
	return this.b('vs', s)
	// = $.fn.bVs
}
$.fn.ko_tx = function (s) {
	return this.b('text', s || '$data')
	// = $.fn.bT
}

$.fn.ko_ht = function (s) {
	return this.b('html', s)
	// = $.fn.bH
}
$.fn.ko_txIp = function (a) {
	return this.b({tI: a})
	// = $.fn.bTi = $.fn.bTI
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
$.fn.ko_w = $.fn.ko_with = function (s) { // = $.fn.bW
	return this.b('with', s)
}
$.fn.ko_C_  = function (s) {//= $.fn.bC
	return this.b('c', s)
}
$.fn.ko_op =$.fn.ko_option  = function (s) {//= $.fn.bO
	return this.b('o', s)
}
$.fn.ko_ops = $.fn.ko_options  = function (s) {//= $.fn.bSO
	return this.b('so', s)
}
$.fn.ko_$ = $.fn.ko_click  = function (s) {
	return this.b('click', s)
	//= $.fn.b$
}
