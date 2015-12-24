$.sty = function (h) {
	var styleTag = $('<style>')
	.at({type: 'text/css'});
	styleTag.h(h)
	return styleTag
}
$.Sty = function(h){
return $.sty(h).A()
}

$sty  = function (sty, styVal) {
	//= $decs = $css
	_$sty = function (o, a, b) {
		//= addSty
		if (N(b) && M.abs(b) > 10) {
			b = String(b) + 'px'
		}
		o[oO('s', a)] = oO(a, b, 'R')
		return o
	}
	
	var o = {}
	if (S(sty)) {_$sty(o, sty, styVal)}
	else {
		_.e(sty, function (styVal, sty) {
			_$sty(o, sty, styVal)
		})
	}
	return o
	//= $.qs
}
$s = function () {
	var g = G(arguments), rulesOb
	if (g.u) {
		return $l($('style').oh())
	}
	if (g.O) {
		rulesOb = g.f
	}
	else if (g.s) {
		rulesOb = {}
		rulesOb[g.f] = g.s
	}
	var rulesStr = $rules(rulesOb)
	$('head').A($.sty(rulesStr))
	return rulesStr
}
STY= function(){

	css = $decs({C: 'r'})
	
	$l(css)
}
$.fn.s = $.fn.ss = function (css,val) {
 
	if(S(css)){css = Ob(css, val)
	}
	
	
	 css = $sty(css)
	
	return this.css(css)
}
FL4 = GME = LOGCLASS = function () {
	$.hdr().A(
			'Click', $.br(), 'to change', $.br(),
			'header {column-…}'
	)
	$.ac().A('Click', $.br(), 'to', $.br(),
			'change', $.br(), 'body {display: …}')
	$.ftr().A()
	$("header").$(function () {
		$(this).toggleClass("ct");
		logClass()
	})
	$("article").$(function () {
		$.bd().toggleClass("box");
		logClass()
	})
	$s({
		'html, body': {w: '100%', h: '100%', M: 0, P: 0},
		'body.box': {d: $, flD: 'column'},
		'body > *': {P: '.5em'},
		header: {C: 'b'},
		article: {C: 'r', $: 1},
		footer: {C: 'g'},
		'header.cnt': {'-moz-column-count': 3},
		'header:not(.cnt)': {'-moz-column-width': 100}
	})
	logClass()
	function logClass() {
		var logTxt = "Header: "
		if ($("header").hasClass("cnt")) {
			logTxt += "column-count"
		} else {
			logTxt += "column-width"
		}
		logTxt += "; Body: ";
		if ($("body").hasClass("box")) {
			logTxt += "flex-box"
		}
		else {
			logTxt += "block"
		}
		$("footer").text(logTxt)
	}
}
Item = function (n) {
	k = 'flex-item-' + (n || 1)
	$l('k: ' + k)
	return $.dK(k).A(
			$.i('me')
	).css({margin: 20}).C('b')
}
_It = function (child) {
	return $.dK('item').C('_b').A(child)
}
It = function () {
	return $.dK('item').A('hello').C()
}
MAR = MARGINAUTO = function () {
	z()
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
$.fn.T0 = function () {
	var d = this, g = G(arguments)
	d.E()
	g.e(function (str) {
		d.A($.h3(str))
	})
	return d
}
$cssApp = function (name, cssOb, fn) {
	return window[name] = function () {
		$s(cssOb)
		fn()
	}
}
$.s = function (css, c, tx) {
	$CSS(css)
	$.x(c, tx)
	return $
}
$.x = function (c, t) {
	var g = G(arguments), bd = $.bd()
	bd.empty()
	if (g.O_) {
		$CSS(g.f)
		if (g.s) {
			$.h1(g.s);
			$.hr().A()
		}
		bd.C(g.t || $r())
	}
	else {
		bd.C(c || $r())
		if (t) {
			bd.A($.h1(t))
		}
	}
	if (g.p) {
		bd.A($.hr())
	}
	return $
}
_$ = function (ob) {
	ob.C = ob.C || $r()
	$.x(ob.C, ob.t)
	if (ob.vm) {
		OK(ob.vm)
	}
	if (ob.el) {
		els(ob.el)
	}
	if (ob.A) {
		_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})
	}
	if (ob._) {
		$.in(ob._)
	}
}
flxCt = function (css) {
	if (css) {
		$s(css)
	}
	return $.dK('flex-container')
			.A(Item(1), Item(2), Item(3), Item(4), Item(5))
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
}
rgbDivs = function () {
	red = $.red()
	green = $.green()
	blue = $.blue()
}
$.fn.insertBts = function () {
	var el = this
	_.e([1, 2, 3, 4, 5, 6], function (num) {
		var name = 'button ' + num
		var bt = $.bt(name, function () {
			$l('clicked: ' + name)
		})
		bt.C('y').a2(el)
		bt.css({
			'font-size': 20,
			margin: 4,
			height: 40,
			width: 180
			//, width : '100%'
		})
	})
	return el
}
Ob = function (k, v) {
	var ob = {}
	ob[k] = v
	return ob
}