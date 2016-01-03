$.fn.gFr = $.fn.getFrame
$.fn.sFr = $.fn.setFrame
$.fn.anFr = $.fn.animateFrames
$.fn.qu = $.fn.queue
$.fn.dq = $.fn.dqu = $.fn.dequeue
$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.st = $.fn.stop
$.fn.fT = $.fn.f2 = $.fn.fadeTo
$.fn.an = function (a, b, c, d) {
	var g = G(arguments), q = this
	//if (N(g.s)) {g.s *= 1000}
	this.animate(
			$sty(g.f), g.s, g.t, g[3], g[4])
	return this
}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.an = $.fn.a = function (a, b, c, d) {
	var g = G(arguments), o
	o = g.f
	var q = this
	if (O(a)) {
		if (a.c) {
			a.color = oO('c', a.c)
		}
		if (a.C) {
			a.backgroundColor = oO('c', a.C)
		}
	}
	q.animate(a, b, c, d)
	return q
	if (o.C) {//$l(o.C+'-->');
		o.C = oO('c', o.C);
		//$l(o.C)
	}
	_.e(o, function (v, k) {
		if (ANob[k]) {
			o[ANob[k]] = v
		}
	})
	if (N(g.s)) {
		g.s *= 1000
	}
	_p = o
	this.an(o, g.s, g.t, g[3], g[4])
	return this
	$.an = $.j = function () {
		var bd = $.bd();
		return bd.j.apply(bd, G(arguments))
	}
}
$.aF = $.anFr = $.anf = function (n, w) {
	var c = 0;
	n = n || 10;
	w = w || 20;
	$.ev(function () {
		q.sFr(c, w)
		c = (c + 1) % n
	})
}
$.notAn = function (a) { // sel
	return a.filter(':not(:animated)')
}
$.fn.an = $.fn.a = function (a, b, c, d) {
	var g = G(arguments), o
	o = g.f
	var q = this
	if (O(a)) {
		if (a.c) {
			a.color = oO('c', a.c)
		}
		if (a.C) {
			a.backgroundColor = oO('c', a.C)
		}
	}
	q.animate(a, b, c, d)
	return q
	if (o.C) {//$l(o.C+'-->');
		o.C = oO('c', o.C);
		//$l(o.C)
	}
	_.e(o, function (v, k) {
		if (ANob[k]) {
			o[ANob[k]] = v
		}
	})
	if (N(g.s)) {
		g.s *= 1000
	}
	_p = o
	this.an(o, g.s, g.t, g[3], g[4])
	return this
	$.an = $.j = function () {
		var bd = $.bd();
		return bd.j.apply(bd, G(arguments))
	}
}
an = function (q, a) {
	alert('an')
	if (q.han) {
		_.xI(q.han)
	}
	if (a.u) {
		q.bi(a.u)
	}
	if (a.n > 1) {
		q.han = _.sI(function () {
			a.c++
			if (!a.l && a.c > a.n) {
				_.xI(q.han);
				q.han = false
			}
			else {
				a.c %= a.n
			}
			q.sFr(a)
		}, a.r)
	}
}
$.aF = $.anFr = $.anf = function (n, w) {
	var c = 0;
	n = n || 10;
	w = w || 20;
	$.ev(function () {
		q.sFr(c, w)
		c = (c + 1) % n
	})
}
$.notAn = function (a) { // sel
	return a.filter(':not(:animated)')
}
$.an = function () {
	var bd = $.bd();
	return bd.j.apply(
			bd, G(arguments))
}
$.notAn = function (a) {
	return a.filter(':not(:animated)')
}
ANob = {
	B: 'bottom', L: 'left', R: 'right', T: 'top',
	b: 'borderWidth', bb: 'borderBottomWidth',
	bl: 'borderLeftWidth', br: 'borderRightWidth',
	bt: 'borderTopWidth', bs: 'borderSpacing',
	C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
	mh: 'minHeight', mw: 'minWidth',
	i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
	m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
	mt: 'marginTop', o: ' outlineWidth',
	p: ' padding', pb: 'paddingBottom',
	pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
	ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
}
JQ0 = BOR = BORDERS = function () {
	function borders() {
		BORDERS = function () {
			z()
			change = function () {
				$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
						.J({"border-top-width": 10}, 1000)
						.J({"border-bottom-width": 10}, 1000)
						.J({"border-left-width": 10}, 1000)
						.J({"border-right-width": 10}, 1000)
						.J({"padding-top": 10}, 1000)
						.J({"padding-bottom": 10}, 1000)
						.J({"padding-left": 10}, 1000)
						.J({"padding-right": 10}, 1000)
						.J({"margin-top": 10}, 1000)
						.J({"margin-bottom": 10}, 1000)
						.J({"margin-left": 10}, 1000)
						.J({"margin-right": 10}, 1000)
						.J({"margin-top": 0}, 1000)
						.J({"margin-bottom": 0}, 1000)
						.J({"margin-left": 0}, 1000)
						.J({"margin-right": 0}, 1000)
						.J({"padding-top": 0}, 1000)
						.J({"padding-bottom": 0}, 1000)
						.J({"padding-left": 0}, 1000)
						.J({"padding-right": 0}, 1000)
						.J({"border-top-width": 0}, 1000)
						.J({"border-bottom-width": 0}, 1000)
						.J({"border-left-width": 0}, 1000)
						.J({"border-right-width": 0}, 1000)
			}
			$.$$(
					function () {
						z();
						_.times(10, change)
					}
			)
			_.times(10, change)
		}
		BORDERS1 = function () {
			change = function () {
				$.img('me').WH(100).A().C('g').bs('-')  //bs??
						.j({bt: 40}, 1000)
						.j({bb: 40}, 1000)
						.j({bl: 40}, 1000)
						.j({br: 40}, 1000)
						.j({gt: 40}, 1000)
						.j({gb: 40}, 1000)
						.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
						.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
						.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
						.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
						.j({bt: 0}, 1000)
						.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			}
			m$$(function () {
				z();
				_.times(10, change)
			})
			_.times(10, change)
		}
	}
	
	$.fn.an = $.fn.animate
	_.t(10, change)
	function change() {
		$.i('me', 100).A().C('g')
				.css(
				{
					borderStyle: 'dashed', borderWidth: '20px'
				}
		)
				.animate(
				{
					"border-top-width": 10
				}, 1000
		)
				.an({"border-bottom-width": 10}, 1000)
				.an({"border-left-width": 10}, 1000)
				.an({"border-right-width": 10}, 1000)
				.an({"padding-top": 10}, 1000)
				.an({"padding-bottom": 10}, 1000)
				.an({"padding-left": 10}, 1000)
				.an({"padding-right": 10}, 1000)
				.an({"margin-top": 10}, 1000)
				.an({"margin-bottom": 10}, 1000)
				.an({"margin-left": 10}, 1000)
				.an({"margin-right": 10}, 1000)
				.an({"margin-top": 0}, 1000)
				.an({"margin-bottom": 0}, 1000)
				.an({"margin-left": 0}, 1000)
				.an({"margin-right": 0}, 1000)
				.an({"padding-top": 0}, 1000)
				.an({"padding-bottom": 0}, 1000)
				.an({"padding-left": 0}, 1000)
				.an({"padding-right": 0}, 1000)
				.an({"border-top-width": 0}, 1000)
				.an({"border-bottom-width": 0}, 1000)
				.an({"border-left-width": 0}, 1000)
				.an({"border-right-width": 0}, 1000)
	}
	
	/*
	 $.img('me').WH(100).A().C('g').bs('-')  //bs??
	
	 .j({bt: 40}, 1000)
	
	 .j({bb: 40}, 1000)
	 .j({bl: 40}, 1000)
	 .j({br: 40}, 1000)
	 .j({gt: 40}, 1000)
	 .j({gb: 40}, 1000)
	 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
	 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
	 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
	 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
	 .j({bt: 0}, 1000)
	 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
	 };
	 */
	function alt() {
		BORDERS = function () {
			z()
			change = function () {
				$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
						.J({"border-top-width": 10}, 1000)
						.J({"border-bottom-width": 10}, 1000)
						.J({"border-left-width": 10}, 1000)
						.J({"border-right-width": 10}, 1000)
						.J({"padding-top": 10}, 1000)
						.J({"padding-bottom": 10}, 1000)
						.J({"padding-left": 10}, 1000)
						.J({"padding-right": 10}, 1000)
						.J({"margin-top": 10}, 1000)
						.J({"margin-bottom": 10}, 1000)
						.J({"margin-left": 10}, 1000)
						.J({"margin-right": 10}, 1000)
						.J({"margin-top": 0}, 1000)
						.J({"margin-bottom": 0}, 1000)
						.J({"margin-left": 0}, 1000)
						.J({"margin-right": 0}, 1000)
						.J({"padding-top": 0}, 1000)
						.J({"padding-bottom": 0}, 1000)
						.J({"padding-left": 0}, 1000)
						.J({"padding-right": 0}, 1000)
						.J({"border-top-width": 0}, 1000)
						.J({"border-bottom-width": 0}, 1000)
						.J({"border-left-width": 0}, 1000)
						.J({"border-right-width": 0}, 1000)
			}
			$.$$(
					function () {
						z();
						_.times(10, change)
					}
			)
			_.times(10, change)
		}
		BORDERS1 = function () {
			change = function () {
				$.img('me').WH(100).A().C('g').bs('-')  //bs??
						.j({bt: 40}, 1000)
						.j({bb: 40}, 1000)
						.j({bl: 40}, 1000)
						.j({br: 40}, 1000)
						.j({gt: 40}, 1000)
						.j({gb: 40}, 1000)
						.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
						.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
						.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
						.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
						.j({bt: 0}, 1000)
						.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			}
			m$$(function () {
				z();
				_.times(10, change)
			})
			_.times(10, change)
		}
	}
}