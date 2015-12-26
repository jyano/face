$._x = function (col, title) {
	$.C(col || $r())
	if (title) {
		$.A($.h1(title), $.hr())
	}
}
$.x = function () {
	var g = G(arguments), bd = $.bd()
	bd.E()
	var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
	{col: g.f, title: g.s}
	if (o.css) {
		$s(o.css)
	}
	$._x(o.col, o.title)
	if (g.p) {
		bd.A($.hr())
	}
	return $
	$.s = function (css, c, tx) {
		$s(css)
		$.x(c, tx)
		return $
	}
}
_$ = function (ob) {
	$.x(ob.C || $r(), ob.t)
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
$.app = function () {
	var d = $.d.apply($, arguments)
	d.K('app').id('app')
	return d
}
KOAT = function () {
	_$({
		// color
		C: 'r',
		// app hw title header 
		t: 'attributes.. unlikely to use?',
		vm: {
			url: $o("year-end.html"),
			tt: $o("stats report")
		},
		A: [
			$.a('report').at$('{href:url,title:tt}')
		]
	})
}
KOBVS = function () {
	_$({
		C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
		el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
		_: function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		}
	})
}