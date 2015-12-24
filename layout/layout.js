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
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
	
	var d = $.dK('flex-container').A(Item(1), Item(2), Item(3), Item(4), Item(5))
	if (css) {
		$s(css)
	}
	return d
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