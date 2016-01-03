$.la = $.liA = function () {
	var g = G(arguments), o,
			a = $('<a>').hr('#'),
			li = $('<li>')
	// if(A(g.f)){     _.e(g.f, function(el){});   return li.A(a)     }
	o = g.F_ ? {fn: g.f} : g.S_ ? {id: g.f, fn: g.s} : {el: g.f, fn: g.s}
	o.ht = o.id
	if (o.id) {
		a.id(o.id)
	}
	if (o.ht) {
		a.html(o.ht)
	}
	if (o.el) {
		a.A(o.el)
	}
	if (o.fn) {
		a.$(o.fn)
	}
	li.A(a)
	return li
}
$.lL = $.lib = $.liLb = function () {
	var g = G(arguments), o,
			li = $('<li>'),
			lb = $.lb().a2(li)
	if (A(g.f)) {
		_.e(g.f, function (el) {
			lb.A(el)
		})
		return li
	}
	o = g.F_ ? {fn: g.f} :
			g.S_ ? {id: g.f, fn: g.s} :
			{el: g.f, fn: g.s}
	o.ht = o.id
	if (o.id) {
		a.id(o.id)
	}
	if (o.ht) {
		a.html(o.ht)
	}
	if (o.el) {
		a.A(o.el)
	}
	if (o.fn) {
		a.$(o.fn)
	}
	return li
}
$.li = function () {
	var g = G(arguments), li = $('<li>')
	if (A(g[0])) {
		_.e(g[0],
				function (g) {
					li.A(g)
				})
	}
	if (g.S_) {
		li.A(g.f)
	}
	if (g.p) {
		li.K('active')
	}
	if (g.n) {
		li.k('dropdown')
	}
	li.A()
	return li
}
$.ol = function (o, b) {
	var g = G(arguments),
			ol = $('<ol>');
	_.e(g, function (v) {
		ol.A(v)
	});
	return ol
}
$.ul = function () {
	var g = G(arguments),
			ul = $('<ul>')
	if (g.A_) {
		_.e(g.f, function (el) {
			if (g.p) {
				if (el.iLi()) {
					el = $.li([el])
				}
			}
			if (S(el)) {
				el = $.li(el)
			}
			ul.A(el)
		})
	}//if(g.p){ul.dg()}//if(g.n){ul.K('ddm')} //dropdown menu
	if (g.p) {
		alert('$.ul g.p')
		ul.K('n nbn')
	}//navbar nav
	// $l(ul.oh())
	_ul = ul.A()
	return ul
}
$.uK = $.ulK = function (k, a, b, c, d) {
	var ul = $.ul(a, b, c, d).K(k)
	return ul
}
$.liK = function (k, a, b, c, d) {
	var li = $.li(a, b, c, d)
	li.K(k)
	return li
}
// tables:
$.fs = function () {
	var g = G(arguments),
			q = $('<fieldset>')
	if (g.A) {
		_.e(g.f, function (e) {
			q.A(e)
		})
	}
	else {
		g.e(function (e) {
			q.A(e)
		})
	}
	return q
}
$.t = function (a) {
	var g = G(arguments)
	var t = $('<table>')
	if (A(a)) {
		_.e(a, function (el) {
			t.A(el)
		})
	}
	if (!g.n) {
		t.A()
	}
	return t
}
$.tHR = function (ch) {
	var el = $.tr().a2($.tH())
	if (A(ch)) {
		_.e(ch, function (ch) {
			if (S(ch)) {
				ch = $.th(ch)
			}
			el.A(ch)
		})
	}
	return el
}
$.tH = function (a) {
	var tH = $('<thead>')
	if (A(a)) {
		_.e(a, function (el) {
			tH.A(el)
		})
	}
	else if (O(a)) {
		tH.A(a)
	}
	return tH
}
$.th = function (a) {
	var th = $('<th>')
	if (A(a)) {
		_.e(a, function (el) {
			th.A(el)
		})
	}
	else if (S(a)) {
		th.A(a)
	}
	return th
}
$.tB = $.tb = function () {
	return $('<tbody>')
}
$.tr = function (a) {
	var g = G(arguments)
	var tr = $('<tr>')
	if (A(a)) {
		_.e(a, function (el) {
			if (S(el)) {
				el = g.p ? $.th(el) : $.td(el)
			}
			tr.A(el)
		})
	}
	else if (a) {
		tr.A(a)
	}
	return tr
}
$.td = function (a) {
	var g = G(arguments)
	var td = $('<td>')
	if (A(a)) {
		_.e(a, function (el) {
			td.A(el)
		})
	}
	else if (a) {
		td.A(a)
	}
	return td
}
$.cl = function () {
	var cl = $('<col>');
	return cl
}
$.cg = function () {
	var cg = $('<colgroup>');
	return cg
}
$.tH = function () {
	var g = G(arguments), q = $('<thead>')
	if (g.A_) {
		_.e(g.f, function (e) {
			q.A(e)
		})
	}
	return q
}
$.tB = function () {
	var g = G(arguments), q = $('<tbody>')
	if (g.A_) {
		_.e(g.f, function (e) {
			q.A(e)
		})
	}
	return q
}
$.lg = function () {
	var g = G(arguments),
			q = $('<legend>')
	if (g.A) {
		_.e(g.f, function (e) {
			q.A(e)
		})
	}
	else {
		g.e(function (e) {
			q.A(e)
		})
	}
	return q
}
$.A = function () {
	var g = G(arguments)
	g.e(function (el) {
		$('body').A(el)
	})
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