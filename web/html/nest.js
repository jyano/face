function nestHTag() {
	$.fn.h1 = function (text) {
		this.A($.h1(text))
		return this
	}
	$.fn.h2 = function (text) {
		this.A($.h2(text))
		return this
	}
	$.fn.h3 = function (text) {
		this.A($.h3(text))
		return this
	}
	$.fn.h4 = function (text) {
		this.A($.h4(text))
		return this
	}
	$.fn.h5 = function (text) {
		this.A($.h5(text))
		return this
	}
	$.fn.h6 = function (text) {
		this.A($.h6(text))
		return this
	}
	$.fn.H5 = function (a) {
		return $.h5(a).a2(this)
	}
	$.fn.h1 = function (t) {
		return this.A($.h1(t))
	}
	$.fn.h2 = function (text) {
		this.A($.h2(text))
		return this
	}
	$.fn.h3 = function (text) {
		this.A($.h3(text))
		return this
	}
	$.fn.h4 = function (text) {
		this.A($.h4(text))
		return this
	}
	$.fn.h5 = function (text) {
		this.A($.h5(text))
		return this
	}
	$.fn.h6 = function (text) {
		this.A($.h6(text))
		return this
	}
}
function nestDiv() {
	$.fn.d_ = function (k) {
		var q = this, d = $.d()
		d.K(k)
		d.A(q)
		return q
	}
	$.fn._d = function (k) {
		var q = this, d = $.d()
		d.K(k)
		q.A(d)
		return q
	}
	$.fn.D_ = function (k) {
		var q = this, d = $.d()
		d.K(k)
		d.A(q)
		return d
	}
	$.fn._D = function (k) {
		var q = this, d = $.d()
		d.K(k)
		q.A(d)
		return d
	}
}