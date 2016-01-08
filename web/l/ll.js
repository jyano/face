$.temp = function (s) {
	return "<script type='text/template'>" + s + "</script>"
	Temp = function (i, h) {
		var s = ''
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		s = $.temp(s)
		_str = $.temp(_str)
		str = $(s)
		return $(s).id(i).A()
		return _.tp($('#' + i).html(), h || {})
	}
}
$ct = function () {
//!: $.ct gives jQuery error
	return $.d().K('ct').id('ct')
}
 
//$.c = $.can
ll = el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
ll.vwTr = function (ob) {
	var tr = $.tr()
	ob = _.x(ob || {}, {el: tr})
	var view = Bb.V.x(ob)
	tr.vw = ll.trVw()
	return tr
}
$$s = function (ob) {
	$s({$: ob})
}
$sl = {}
$.p.ch = function () {
}
$ol = function () {
}
$ul = function () {
}
$.fS = function (num) {
	return bd.fS(N(num, 30))
}
$.fn.pam = $.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.p.cb = $.p.ch = function () {
}
$.p.sp = function () {
}
$els = function () {
	return $.sp.apply(null, arguments)
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
 
$.HR = function () {
	return $.hr().A()
}
$.btAf = function (what) {
	return $.bt().iA(what)
}
$.fn.op = $.fn.prop
//_rf = function (a) {a.refresh();return q}
$.spSmMdLg = function () {
	return $.sp().A(
			$.cbDiv('sm', 'Small'),
			$.cbDiv('md', 'Medium'),
			$.cbDiv('lg', 'Large')
	)
}
$.fn.iCh = function () {
	return this.is(":checked")
}
F.pD = function (fn) {
	return function (ev) {
		ev.preventDefault()
		return fn(ev)
	}
}
$.fn.ac = function (ac) {
	return this.attr('action', S.eL(ac))
}
$.fn.stPr = function () {
	this.click(function (ev) {
		ev.stopPropagation()
	})
	return this
}
$.fn.eH4 = function (tx) {
	return this.E($.h4(tx))
}
$.fn.eH1 = function (tx) {
	return this.E($.h1(tx))
}
// add vs create : add returns parent, create returns child
$.fn.aI = function () {
	var i = $.i.apply(null, arguments)
	return this.A(i)
}
$.fn.crD = function () {
	var q = $.d.apply(null, arguments)
	this.A(q)
	return q
}
$.ps = function () {
	var sp = $.sp(), g = G(arguments)
	g.e(function (g) {
		sp.A($.p(g))
	})
	return sp
} 
$.tg = function (a) {
	return $('<' + a + '>')
}
$.frg = function () {
	return $(
			document.createDocumentFragment()
	)
}
$El = function (tag) {
	if (tag) {
		return document.createElement(tag)
	}
}
$.fn.el = function (e) {
	if (U(e)) {
		console.log($('<div>').append(this.clone()).html())
		return this
	}
}
$.fn.sb = function (fn) {
	return this.submit(fn)
}
$.fn.a2Lb = function (t) {
	t = t || 'label:';
	return this.a2($.lb(t))
}
$.fn.isLi = $.fn.iLi = function () {
	return _.isElement(this) && _h('HTMLLIElement', this)
}
$.fn.li = function () {
	var g = G(arguments),
			li = $.li()
	this.A(li)
	g.e(function (g) {
		li.A(g)
	})
}
$D = $Dt = function () {
	var dt = new Date()
	return dt
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
$.scrp = function (i, t) {
	var scr = $("<script type='text/html'>")
	scr.id(i)
	if (t) {
		scr.A(t)
	}
	scr.A()
	return scr
}
el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
$.format = function () {
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
	$.d().A(section1)
	$.d().A(section2)
}
$Dt = function () {
	var dt = new Date()
	return dt
}
$Ob = Ob = function (k, v) {
	var g = G(arguments)
	if (g.A || g.F || g.N || g.O) {
		return Ob('da', g.f)
	}
	g.f = D(g.f) ? g.f : 'da'
	var ob = {}
	ob[g.f] = g.s
	return ob
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
function tag() {
	_$_ = function (a) {
		a = a || ''
		return $('<' + a + '>')
	}
}
 
 z=function(){
	 $('body').E();return $
 }