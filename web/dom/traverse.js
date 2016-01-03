//_.ex = $ext = ext = function (o) {o.e = o.extend;return o}	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
$.tK = function (k, toAdd) {
	var g = G(arguments),
			t = $.t()
	t.K(k)
	if (A(toAdd)) {
		_.e(toAdd, function (q) {
			t.A(q)
		})
	}
	return t
}
$.ipI = function (id, arr) {
	var q = $.ip().id(id)
	if (A(arr)) {
		_.e(arr, function (qq) {
			q.A(qq)
		})
	}
	else if (arr) {
		q.A(arr)
	}
	return q
}
$.ulI = function (id, arr) {
	var q = $.ul().id(id)
	if (A(arr)) {
		_.e(arr, function (qq) {
			q.A(qq)
		})
	}
	else if (arr) {
		q.A(arr)
	}
	return q
}
  

$.fn.oh = function () {
	return this[0].outerHTML
}
$.fn.h = $.fn.ht = $.fn.html
$.fn.t = $.fn.tx = $.fn.text
$.fn.e = $.fn.ea = $.fn.each
$.fn.f = $.fn.fi = $.fn.find
$.fn.hd = $.fn.hide
$.fn.sh = $.fn.show
$.fn.gg = $.fn.toggle

$.fn.osP = function () {
	return this.offsetParent
}
$.fn.g = function (ix) {
	if (U(ix)) {
		return this[0]
	}
	return this.eq(ix)
}
$.fn.ch = function () {
	return this.children()
}
$.fn._ = $.fn.closest
$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
$.fn.sib = function () {
	var g = G(arguments);
	return this.sib.apply(this.g)
}
$.fn.N = $.fn.next
$.fn.r = $.fn.rm = $.fn.xx = function () {
	var e = this
	e.remove()
	return e
}
$.fn.fRm = function (a) {
	return this.fi(a).rm()
}
$.fn.E = function (html) {
	var $el = this, g = G(arguments)
	//$l('$.fn.E in web.js (betweetn fRm and rp')
	$el.empty() //if (S(html)) {this.h(html); return this}
	g.A ? _.e(g.f, add) :
			g.e(add)
	return $el
	function add(q) {
		A(q) ? _.e(q, add) :
				$el.A(q)
	}
}
$.fn.rp + $.fn.replace
$.fn.A = function (stuff) {
	if (U(stuff)) {
		$('body').append(this);
		return this
	}
	this.append.apply(this, arguments)
	return this
}
$.fn.a2 = function (a) {
	a.A(this);
	return this
}
$.fn.pp = function (a) {
	this.pp(a);
	return this
}
$.fn.p2 = $.fn.pp2 = function (a) {
	this.prependTo(a);
	return this
}
$.fn.bf = $.fn.iBf = $.fn.iB = $.fn.insertBefore
$.fn.iA = $.fn.insertAfter
$.fn.wr = $.fn.wrap

$.fn.fCt = function (str) {
	return this.fi(":contains(" + str + ")")
}
$.ct = $.cts = $.contains