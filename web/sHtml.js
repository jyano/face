$.p = function () {
	var g = G(arguments), p = $('<p>')
	if (g.A_) {
		g.eF(function (g) {
			p.A(g)
		})
	}
	else {
		g.e(function (g) {
			p.A(g)
		})
	}
	p.A()
	return p
}
$L('hTags', 'divs','lists','tag','fnNest' )

function hTags() {
	$.h1 = function () {
		var h = $('<h1>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
	$.h2 = function () {
		var h = $('<h2>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
	$.h3 = function () {
		var h = $('<h3>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
	$.h4 = function () {
		var h = $('<h4>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
	$.h5 = function () {
		var h = $('<h5>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
	$.h6 = function () {
		var h = $('<h6>');
		h.A.apply(h, G(arguments));
		h.A()
		return h
	}
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
	$.fn.bgImg = $.backgroundImage
	function anim() {
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
	$.fn.bgImg = $.backgroundImage
	$.fn.bdC = function (a) {
		return this.css("border-color", oO('c', a || 'r'))
	}
	$.fn.pdB = function (a) {
		return this.css("padding-bottom", a || 0)
	}
	$.fn.mgT = function (a) {
		return this.css("margin-top", a || 0)
	}
	$.fn.pad = function (a) {
		return this.css("padding", a || 0)
	}
	function frame() {
		$.fn.gFr = $.fn.getFrame
		$.fn.sFr = $.fn.setFrame
		$.fn.anFr = $.fn.animateFrames
		$.fn.gFr = $.fn.getFrame
		$.fn.sFr = $.fn.setFrame
		$.fn.anFr = $.fn.animateFrames
	}
	
	function que() {
		$.fn.qu = $.fn.queue
		$.fn.dq = $.fn.dqu = $.fn.dequeue
		$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
		$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
		$.fn.qu = $.fn.queue
		$.fn.dq = $.fn.dqu = $.fn.dequeue
		$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
		$.fn.qu = $.fn.queue
		$.fn.dq = $.fn.dqu = $.fn.dequeue
	}
	
	function move() {
		$.fn.toR = $.fn.moveRight = function (num) {
			alert('toL')
			num = num || 20
			if (this.left() == 'auto') {
				this.left(0)
			}
			this.left(parseInt(this.left()) + num)
			return this
		}
		$.fn.toL = $.fn.moveLeft = function (num) {
			alert('toL')
			num = num || 20
			if (this.left() == 'auto') {
				this.left(0)
			}
			this.left(parseInt(this.left()) - num)
			return this
		}
		$.fn.toU = $.fn.moveDown = function (num) {
			alert('toL')
			num = num || 20
			if (this.top() == 'auto') {
				this.top(0)
			}
			this.top(this.top() - num)
			return this
		}
		$.fn.toD = $.fn.moveDown = function (num) {
			alert('toL')
			num = num || 20
			if (this.top() == 'auto') {
				this.top(0)
			}
			this.top(this.top() + num)
			return this
		}
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
function divs() {
	$._d = $.d_ = function () {
		var g = G(arguments),
				d = $('<div>')
		if (g.A()) {
			_.e(g.f, function (q) {
				d.A(q)
			})
		}
		else if (g.f) {
			d.A(g.f)
		}
		return d
	}
	$.d = $.div = function () {
		var g = G(arguments), d = $('<div>'), o
		o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
		{c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
				g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
				{w: g.f, h: g.s, x: g.t, y: g[3]}
		if (o.c) {
			d.C(o.c)
		}
		if (N(o.w)) {
			d.W(o.w)
		}
		if (N(o.h)) {
			d.H(o.h)
		}
		if (N(o.x)) {
			d.ab(o.x, N(o.y, 0))
		}
		if (o.a) {
			_.e(g[0], function (g) {
				d.A(g)
			})
		}
		if (o.k) {
			d.K(o.k)
		}
		if (!g.n) {
			d.A()
		}
		if (g.p) {
			d.dg()
		}
		return _d = d
	}
	$.dI = function () {
		$l('$.dI')
		var g = G(arguments),
				d = $.d.apply($, g.r)
		d.id(g.f)
		return d
	}
	$.dK = function () {
		var g = G(arguments)
		var args = _.r(arguments)
		var d = $.d.apply(null, args || [])
		return g.f ? d.K(g.f) : d
	}
	$.dD = $.divD = function (c, w, h, x, y) {
		var d, g = G(arguments)
		w = N(w, 200)
		h = N(h, w)
		d = $.d(200, 200, '+')
		if (g.u) {
			return d.C('n')
		}
		if (g.S_) {
			d.C(c)
			if (N(w)) {
				d.W(w)
			}
			if (N(h)) {
				d.H(h)
			}
			if (N(x)) {
				d.X(x)
			}
			if (N(y)) {
				d.Y(y)
			}
			return d
		}
		if (g.N_) {
			return $.dD('o', c, w, h, x)
		}
	}
	$.dA = function func(col, w, height, x, y) {
		var g = G(arguments),
				div = $.d().P('absolute')
		if (U(col)) {
			return div.C('brown')
		}
		if (S(col)) {
			div.C(col);
			if (N(w)) {
				div.W(w)
			}
			if (N(height)) {
				div.H(height)
			}
			if (N(x)) {
				div.X(x)
			}
			if (N(y)) {
				div.Y(y)
			}
			if (g.p) {
				div.dg()
			}
			return div
		}
		if (N(col)) {
			return $.dA('o', col, w, height, x)
		}
	}
	$.divA = $.dA = $.divA = function (c, w, h, x, y) {
		var g = G(arguments),
				d = $.d().P('absolute'),
				o = g.O ? g.f :
						g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
						{w: g.f, h: g.s, x: g.t, y: g[3]}
		if (N(o.w)) {
			d.W(o.w)
		}
		if (N(o.h)) {
			d.H(o.h)
		}
		d.XY(N(x, 0), N(y, 0))
		if (o.c) {
			d.C(o.c)
		}
		return d
	}
	$.dD = $.divD = function func(col, w, h, x, y) {
		w = N(w) ? w : 200;
		h = N(h) ? h : w;
		var div = $.div(200, 200).drag();
		if (U(col)) {
			return div.C('brown')
		}
		if (S(col)) {
			div.C(col);
			if (N(w)) {
				div.W(w)
			}
			if (N(h)) {
				div.H(h)
			}
			if (N(x)) {
				div.X(x)
			}
			if (N(y)) {
				div.Y(y)
			}
			return div
		}
		if (N(col)) {
			return func('orange', col, w, h, x)
		}
	};
	$.dIl = $.inlineDiv = function (a, b, c) {
		var d = dv(a, b, c);
		d.display('inline');
		return d
	};
	$.ilBl = $.inlineBlockDiv = function (a, b, c) {
		var d = $.d(a, b, c);
		d.display('inline-block');
		return d
	};
	$.dva = function (r, w, h, l, t) {
		//color, w, h, left, top
		var g = G(arguments),
				r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d
		if (!S(r)) {
			return g.n ?
					$.dva($r(), r, w, h, l, '-') :
					g.p ? $.dva($r(), r, w, h, l, '+') :
							$.dva($r(), r, w, h, l)
		}
		d = $.d(r).p('a').C(r)
		if (g.p) {
			if (w) {
				d.l(w)
			}
			;
			if (h) {
				d.t(h)
			}
			d.P(16)
			return d.auto()
		}
		w = w || 1;
		h = h || w;
		d.WH(w * 100, h * 100)
		l = l || 0;
		t = t || l;
		d.l(l * 100).t(t * 100)
		if (!g.n) {
			d.dg()
		}
		return d
	}
}
function lists() {
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
}
function tag() {
	_$_ = function (a) {
		a = a || ''
		return $('<' + a + '>')
	}
}
function fnNest() {
	$ct = function () {
//!: $.ct gives jQuery error
		return $.d().K('ct').id('ct')
	}
	$.E = function () {
		$.bd().E()
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
	$.H = function (html) {
		$(html).A()
		return $
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
	$.sp = function () {
		var g = G(arguments),
				sp = $('<span>'), str = '';
		_.e(g, function (val) {
			if (S(val)) {
				str += val
			}
			else {
				sp.A(val)
			}
		});
		if (str) {
			sp.T(str)
		}
		sp.A()
		return sp
	}

	$.ps = function () {
		var sp = $.sp(), g = G(arguments)
		g.e(function (g) {
			sp.A($.p(g))
		})
		return sp
	}
	$.S = $.str = function () {
		var g = G(arguments), s = $('<strong>');
		_.e(g, function (g) {
			s.A(g)
		});
		return s
	}
	$.pre = function () {
		return $("<pre>").A()
	}
	_B = $.b = $.B = function (a, k) {
		var g = G(arguments), b = $('<b>')
		//if(g.p){a =  '&nbsp;'+a  }
		//  b.H(a)
		//  b.K(k)
		if (a) {
			b = b.A(b)
		}
		if (!g.n) {
			b.A()
		}
		return b
	}
	$.hdr = function () {//$.H=
		var g = G(arguments), hdr = $('<header>')
		//  return $.ip().ty('header').n(n).v(v)
		g.e(function (q) {
			hdr.A(q)
		})
		hdr.A()
		return hdr
	}
	$.F = $.ftr = $.footer = function () {//$.H=
		var g = G(arguments), hdr = $('<footer>')
		//  return $.ip().ty('header').n(n).v(v)
		g.e(function (q) {
			hdr.A(q)
		})
		hdr.A()
		return hdr
	}
	$.nv = function () {
		return $('<nav>')
	}
	$.sc = $.sct = function (a) {
		var g = G(arguments)
		var sc = $('<section>')
		if (g.A) {
			_.e(g, function (el) {
				sc.A(el)
			})
		}
		else if (a) {
			sc.id(a)
		}
		sc.A()
		return sc
	}
	$.scI = function () {
		var g = G(arguments)
		var sc = $.sc()
		sc.id(g.f)
		if (A(g.s)) {
			_.e(g.s, function (el) {
				sc.A(el)
			})
		}
		return sc
	}
	$.ac = function () {//$.H=$.arg=
		var g = G(arguments), art = $('<article>')
		g.e(function (q) {
			art.A(q)
		})
		art.A()
		return art
	}
	$.em = function () {
		var em = $('<em>');
		return em
	}
	$.tp = function (id) {
		return $('<template>').id(id)
	}
	$.as = function () {
		var a = $('<aside>')
		G(arguments).e(function (q) {
			a.A(q)
		})
		a.A()
		return a
	}
	$.header = function () {
		return $('<header>')
	}
	$dA = function () {
		var d = $.d()
		d.A.apply(d, arguments)
		return d
	}
	$spA = function () {
		var sp = $.sp().fS(75).col('r')
		sp.A.apply(sp, arguments)
		return sp
	}
	$spA2 = function () {
		var sp = $.sp().fS(100).col('x').C('o')
		sp.A.apply(sp, arguments)
		return sp
	}
	$.__d = function () {
		var d = $('<div>')
		_.e(arguments, function (ch) {
			d.A(ch)
		})
		return d
	}
	$bd = function () {
		var g = G(arguments),
				bd = $('body')
		if (g.f) {
			bd.css.apply(bd, g)
		}
		return bd
	}
	$.fn.dI = function () {
		return this.A(
				$.dI.apply($, arguments)
		)
	}
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
