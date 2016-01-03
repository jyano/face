$.fn.v = function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		if (g.n) {
			this.val('')
		}
		return v
	}
	this.val(newVal);
	return this
}
$.fn.V = function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		this.val('')
		return v
	}
	this.val(newVal);
	return this
}
$.fn.v = $.fn.val
$.fn.v_ = function () {
	var val = this.val();
	this.val('');
	return val
}