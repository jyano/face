$.fn.at = $.fn.attr
$.fn.foc = $.fn.focus
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
$.src = function f(e) {
	if (e.image) {
		e = e.image
	}
	if ($.tCan(e)) {
		e = $.tCan(e)
	}
	if (e.src) {
		e = e.src
	}
	if (e.toDataURL) {
		e = _.tDU(e)
	}
	return s$(e).contains('data:') ? e
			: S(e) ? _.src(e)
			: 0
}
$.fn.ed = function (ed) {
	if (U(ed)) {
		return this.attr('contenteditable')
	}
	this.attr('contenteditable', ed ? true : false)
	return this
}
$.fn.rmAt = $.fn.removeAttr
$.fn.edFoc = function () {
	return this.ed(1).foc()
}
$.fn.nm = $.fn.name = function (name) {
	return name ? this.at('name', name) :
			this.at('name')
}
$.fn.idNm = function (id, nm) {
	this.id(id)
	this.nm(nm || id)
	return this
}
$.fn.i = $.fn.sr = $.fn.src = function (a) {
	if (U(a)) {
		return this.attr('src')
	}
	this.attr('src', _.src(a))
	return this
}
$.fn.n = function (name) {
	if (U(name)) {
		return this.attr('name')
	}
	this.attr('name', name);
	return this
}
$.fn.ml = $.fn.mlt = function (m) {
	return this.at('multiple', true)
}
$.fn.ph = $.fn.placeholder = function (forWhat) {
	return this.attr('placeholder', forWhat)
}
$.fn.ck = $.fn.chk = function () {
	this.at('checked', true)
}
$.fn.ty = $.fn.type = function (type) {
	if (U(type)) {
		return this.attr('type')
	}
	this.attr('type', type);
	return this
}
$.fn.id = function (id) {
	if (U(id)) {
		return this.attr('id')
	}
	;
	this.attr('id', id);
	return this
}
$.fn.hr = $.fn.hf = $.fn.href = function (href) {
	if (U(href)) {
		return this.attr('href')
	}
	this.attr('href', href);
	return this
}
$.fn.fr = $.fn.for = function (forWhat) {
	return this.attr('for', forWhat)
}
$.fn.ro = $.fn.role = function (role) {
	if (U(role)) {
		return this.attr('role')
	}
	this.attr('role', role)
	return this
}
$.fn.tt = $.fn.ti = function (a) {
	this.at('title', a)
	return this
}
$.fn.d = $.fn.da = $.fn.data
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
$.v = function (id) {
	return $('#' + id).val()
}
$.V = function (id) {
	var $el = $('#' + id)
	var val = $el.val()
	$el.val('')
	return val
}