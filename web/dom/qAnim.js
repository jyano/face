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
$.an = function () {
	var bd = $.bd();
	return bd.j.apply(
			bd, G(arguments))
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
$.fn.a = function (a, b, c, d) {
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
$.fn.an = function (a, b, c, d) {
	var g = G(arguments), q = this
	//if (N(g.s)) {g.s *= 1000}
	this.animate(
			$sty(g.f), g.s, g.t, g[3], g[4])
	return this
}
 
$.fn.st = $.fn.stop
$.fn.fT = $.fn.f2 = $.fn.fadeTo
$.fn.gFr = $.fn.getFrame
$.fn.sFr = $.fn.setFrame
$.fn.anFr = $.fn.animateFrames
$.fn.qu = $.fn.queue
$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.dq = $.fn.dqu = $.fn.dequeue
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
JQ1 = EF3 = HIDESHOWNICE = HIDE = function () {
	$s({
		p: {C: '#bca', w: 200, bor: '1px solid green'},
		div: {w: 100, h: 100, C: 'r'}
	})
	$.p('$')
	$.bt('hd').id('hd')
	$.bt('sh').id('sh')
	d = $.dK('tg')
	$('#hd').$(function () {
		d.hd('sl', {d: 'r'}, 500)
	})
	$('#sh').$(function () {
		d.sh('sl', {d: 'd'}, 2000)
	})
	function alt() {
		JU33 = HIDESHOWNICE = HIDE = function () {
			$.s({
				p: {C: '#bca', w: 200, bor: '1px solid green'},
				div: {w: 100, h: 100, C: 'r'}
			})
			$.p('$')
			$.bt('hd').id('hd')
			$.bt('sh').id('sh')
			d = $.dK('tg')
			$('#hd').$(function () {
				d.hd('sl', {d: 'r'}, 500)
			})
			$('#sh').$(function () {
				d.sh('sl', {d: 'd'}, 2000)
			})
		}
	}
}
JQ2 = TANGLE = function () {
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
	function alt() {
		TANGLE = function () {
			z()
			a = $.divA('r', 50, 50).XY(50).A().pad(10)
			b = $.divA('b', 100, 100).XY(100).A().pad(10)
			c = $.divA('g', 200, 200).XY(200).A().pad(10)
			d = $.divA('y', 400, 400).XY(400).A().pad(10)
			y = function (aa, bb, cc, dd) {
				if (aa && U(bb)) {
					aa.A().P('a')
				}
				if (bb) {
					bb.A(aa.P('static'))
				}
				if (dd) {
					dd.A(cc.P('s'))
				}
			}
		}
	}
}
JQ3 = IP1 = FOC = SPANFOCUS = function () {
	$.sp('Some Span').id("my-span").at('tabindex', "0")
	$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
	$.sp('Some Span2').id("my-span2").at('tabindex', "0")
	document.getElementById('my-span').focus()
	document.getElementById('my-span2').focus()
}
JQ4 = HOVERBOX = function () {
	d = $.d('o', 500, 500, '+').id('test')
	y = $.c('p', 400).K('box').hd();
	d.A(y);
	$('#test').hover(function () {
		$('.box').stop().fadeTo(200, 1)
	}, function () {
		$('.box').stop().fadeTo(200, 0)
	})
}
JQ5 = EF2 = HIGHLIGHT = HLT = function () {
	$s({
		p: {C: 'y', w: 200, B: '1px solid green'},
		d: {C: 'r', w: 100, h: 100}
	})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
	$.dK('target')
	$.bt('Highlight: ', function () {
		$(".target").ef("highlight",
				{color: "#669966"}, 3000)
	})
	function alt() {
		JU44 = HIGHLIGHT = HLT = function () {
			$.h({
				p: {C: 'y', w: 200, B: '1px solid green'},
				d: {C: 'r', w: 100, h: 100}
			})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
			$.dK('target')
			$.bt('Highlight: ', function () {
				$(".target").ef("highlight",
						{color: "#669966"}, 3000)
			})
		}
	}
}
JQ7 = MAG = FRIDGEMAG = function () {
	$s({$: {fS: 40}})
	word = function (text, c1, c2) {
		var s = $.sp(text).C(c1, c2).drag()
		return s
	}
	w = word('hello', 'b', 'g');
	word('sicko', 'g', 'b');
	word('why, i oughta..', 'p', 'x');
	word('it was raining..', 'j', 'k');
	word('who ya gonna call?', 'h', 'i');
	word('dag nabit!', 'f', 'g');
	word('i like', 'd', 'e');
	word('tomorrow', 'a', 'c');
	word('me', 'r', 'b')
}
JQ8 = FLASH = function () {
	z();
	timeline = $.dA('+').WH('auto');
	timeline.A($.c('b', 500, 500), $.br());
	_.t(24, function (x) {
		timeline.A(
				$.d('r', 100, 100)
						.css({display: 'inline-block'}).H((x * 10) + 100)
		)
	})
}
JQ6 = JQ10 = CORNERS = function () {
	var W = function () {
		return $('body').W()
	}
	var H = function () {
		return $('body').H()
	}
	Z = function () {
	}
	function corners() {
		CORNERS = function () {
			$.fn.grow = function () {
				originalWidth = this.W()
				originalHeight = this.H()
				this.on('mousedown', function (e) {
					mx = e.clientX
					my = e.clientY
					$.mouseMove(function (e) {
						this.WH(originalWidth + e.clientX - mx,
								originalHeight + e.clientY - my)
					})
					$.mouseUp(function () {
						$(this).off()
					})  //mouseUp anything?
					this.children().on('mousedown', function (e) {
						e.stopPropagation()
					})
				})
			}
			//  dva(2, 2, 2, 2 )
			div = $.divA(200, 200).XY(200)
			div.A(
					$.divA('red', 20, 20).top(-10).left(-10),
					$.divA('yellow', 20, 20).bottom(-10).right(-10),
					$.divA('green', 20, 20).top(-10).right(-10),
					$.divA('blue', 20, 20).bottom(-10).left(-10)
			)
			i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
					.width('100%').top(100)
			i.H(W() + ' * ' + H())
			$('*').resize(function () {
				i.H(W() + ' * ' + H())
			})
			$.$(function () {
				rat(function () {
					co()
				}, 10)
			})
			i.grow()
		}
		CORNERS = function () {
			$.fn.grow = function () {
				originalWidth = this.W()
				originalHeight = this.H()
				this.on('mousedown', function (e) {
					mx = e.clientX
					my = e.clientY
					$.mouseMove(function (e) {
						this.WH(originalWidth + e.clientX - mx,
								originalHeight + e.clientY - my)
					})
					$.mouseUp(function () {
						$(this).off()
					})  //mouseUp anything?
					this.children().on('mousedown', function (e) {
						e.stopPropagation()
					})
				})
			}
			//  dva(2, 2, 2, 2 )
			div = $.divA(200, 200).XY(200)
			div.A(
					$.divA('red', 20, 20).top(-10).left(-10),
					$.divA('yellow', 20, 20).bottom(-10).right(-10),
					$.divA('green', 20, 20).top(-10).right(-10),
					$.divA('blue', 20, 20).bottom(-10).left(-10)
			)
			i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
					.width('100%').top(100)
			i.H(W() + ' * ' + H())
			Z(function () {
				i.H(W() + ' * ' + H())
			})
			$.$(function () {
				rat(function () {
					co()
				}, 10)
			})
			i.grow()
		}
	}
	
	$.fn.grow = function () {
		originalWidth = this.W()
		originalHeight = this.H()
		this.on('mousedown', function (e) {
			mx = e.clientX
			my = e.clientY
			$.mouseMove(function (e) {
				this.WH(originalWidth + e.clientX - mx,
						originalHeight + e.clientY - my)
			})
			$.mouseUp(function () {
				$(this).off()
			})  //mouseUp anything?
			this.children().on('mousedown', function (e) {
				e.stopPropagation()
			})
		})
	}
	$.divF = $.div
	//  dva(2, 2, 2, 2 )
	div = $.divA(200, 200).XY(200)
	div.A(
			$.divA('red', 20, 20).top(-10).left(-10),
			$.divA('yellow', 20, 20).bottom(-10).right(-10),
			$.divA('green', 20, 20).top(-10).right(-10),
			$.divA('blue', 20, 20).bottom(-10).left(-10)
	)
	i = $.divF('purple').col('white').fontSize(20).al(.2).textAlign('center')
			.width('100%').top(100)
	i.H(W() + ' * ' + H())
	Z(function () {
		i.H(W() + ' * ' + H())
	})
	$.$(function () {
		rat(function () {
			co()
		}, 10)
	})
	i.grow()
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