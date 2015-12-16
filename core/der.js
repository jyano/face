$L('divs', 'image', 'canvas', 'text')
$.hr = function (c, h, w) {
	var hr = $('<hr>')
	//  if( N(c) ){  return $.hr('z', c, h )  }
	//  hr = $('<hr>').h(h ||2).C(c||'z');
	//  if(w ){ hr.W(w ) }
	return hr
}
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
$.a = function (a, f) {
	var g = G(arguments), a = g[0], f = g[1], la = a || ''
	$.a2 = function (a, fn) {
		var g = G(arguments), a = g[0], f = g[1], el = $.a().id(a).A(a);
		if (F(fn)) {
			el.o(fn)
		} else {
			el.hr(fn || '#')
		}
		if (g.n) {
			el.dd()
		}
		//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
		if (g.p) {
			el = li(el)
		}
		if (g.m) {
			el = li(el).K('active')
		}
		return el
	}
	l = $('<a>').A(a)//.id(a)
	if (F(f)) {
		l.$(f)
	} else {
		l.href(f || '#')
	}
	// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
	//if(g.p){ l = $.li( l ) }
	//if(g.m){ l = $.li( l ).K('active') }
	return l.A()
}
$.br = function (a) {
	if (U(a)) {
		return $('<br>')
	}
	var sp = $.sp();
	_.t(a, function () {
		sp.A($('<br>'))
	});
	return sp
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
$.b = function (a, k) {
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
$.F = $.ftr = $.footer  = function () {//$.H=
	var g = G(arguments), hdr = $('<footer>')
	//  return $.ip().ty('header').n(n).v(v)
	g.e(function (q) {
		hdr.A(q)
	})
	hdr.A()
	return hdr
}
$.B = function (a) {
	var q = $('<bold>')
	if (a) {
		q.A(a)
	}
	return q
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
function image() {
	$.i = $.img = function () {
		var g = G(arguments), o, i = new Image(), $i = $(i);
		o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
		if (o.fn) {
			$i.load(_.b(function (e) {
				o.fn(e.target, e)
			}, $i))
		}
		if (o.sr) {
			$i.sr(o.sr)
		}
		return $i
	}
}
function canvas() {
	$.can = $.canvas = $.cv = $.c = $.c2 = function (c, width, h, x, y) {
		var g = G(arguments), o, q
		o = g.S_ ?
		{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
		{w: g.f, h: g.s, x: g.t, y: g[3]}
		o.w = o.w || 1200
		o.h = o.h || 600
		q = $('<canvas>')
		q.attr({width: o.w, height: o.h})
		//o.c = o.c || 'x'
		if (o.c) {
			q.C(o.c)
		}
		if (N(o.x)) {
			q.abs(o.x, o.y)
		}
		if (g.p) {
			q.dg()
		}
		return q.id('canvas').k('canvas can').al(.8)
	}
	$.cv0 = function () {
		return $.c2.apply($, arguments)[0]
	}
}
function text() {
	$.fn.tt = function (t, c) {
		var p = $.p(t).mH(10).pH(30)
				.fS(24).K('text-center')
		this.A(p,
				$.hr().fS(10))
		return this
	}//name conflict?
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
	$.dK = function (k) {
		var g = G(arguments),
				d = $.d.apply($, _.r(arguments))
		return d.K(k)
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
	$.divA=$.dA = $.divA = function (c, w, h, x, y) {
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
// lists::
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
$rtHeader = function (name) {
	$dA($spA('this is RoApp: '), $dA('this is a RoApp').fS(75).col('r'),
			$spA2(name).fS(100), $.d('B').W('auto').H(8))
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
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
function ipsum(){
	$.ips = function (len) {
		len = len || 1;
		var str = '';
		_.t(len, function () {
			str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		});
		return str
	}
	$.ipsP = function (len) {
		return $.p().A($.ipsum(len))
	}
	$.fn.ips = $.fn.ipsum = function () {
		var that = this
		_.each(arguments, function (num) {
			that.A($.ipsum(num))
		})
		return this
	}
	$.fn.ipsumP = function () {
		var el = this
		_.e(arguments, function (num) {
			el.A($.ipsumP(num))
		})
		return el
	}
	ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
	ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
	'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
	'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
	'te feugait nulla facilisi.'
	ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
	'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
	'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
	'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
	'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
	'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
	'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
	'ut laoreet dolore magna aliquam erat volutpat.'
}
ipsum()
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
ll.vwTr = function (ob) {
	var tr = $.tr()
	ob = _.x(ob || {}, {el: tr})
	var view = Bb.V.x(ob)
	tr.vw = ll.trVw()
	return tr
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
$.scr = function (scr, fn) {
	return $.getScript(scr, fn)
}
$.getMultiScripts = function (arr, path) {
	var _arr = $.map(arr, function (scr) {
		return $.getScript((path || "") + scr)
	})
	//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
	return $.when.apply($, _arr)
}
SCRIPTS = _.map([
	"socket.io/socket.io", "string", 'bb', 'bbmn', 'ko', 'mel', 'gq', 'objects', 'defaultMug', 'spriteSheets',
	'core', 'jqueryplugins', 'html', 'boot', 'ui', 'can', 'sys', 'images', 'event', 'socket', 'ranky', 'routeTests', 'nav', 'api', 'j3', 'display', 'animate', 'imagine', 'work', 'tween', 'universe', 'create', 'easel', 'displayObject', 'shape', 'text', 'mobile', 'animation', 'sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve', 'playgame', 'users', 'share', 'chat', 'messages', 'knock', 'bbtemps', 'backbone1', 'people', 'mar', 'backbone', 'angu'
	
	// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
	// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
	//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
	//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
], function (js) {
	return "/" + js + ".js"
})
// _.each(SCRIPTS, function(scr){$.scr(scr)})
/*
 dfr = $.getMultiScripts(SCRIPTS)
 dfr.done(function(){alert('done')})
 .always(function(){
 alert('always')
 $.scr('app')
 })
 .fail(function(){alert('fail')})
 */
GSCR = function () {
	$.scr = function (scr, fn) {
		return $.getScript(scr, fn)
	}
	$.getMultiScripts = function (arr, path) {
		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr)
		})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($, _arr)
	}
	$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
		console.log(a + b + c)
		d = c
		$l('got script')
		$.$(function () {
			$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
		})
	})
	dfr = $.Deferred(function (dfrd) {
		d = dfrd
		// $(dfrd.resolve)
	})
	testx = 100
	$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
	).done(function () {
				$l(testx)
			})
}
$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}
LOADSCRIPTS = function () {
	$(function () {
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )
		$.j('/us.js')
		$.j('/string.js')
		$.j('/both.js')
		//$.j('/jq.js')
		//$.j('/jqSer.js')
		$.j('/bs.js')
		$.j('/frontOb.js')
		$.j('/handy.js')
		$.j('/sty.js')
		$.j('/rules.js')
		$.j('/flex.js')
		$.j('/bb.js')
		$.j('/bbCore.js')
		$.j('/bbLs.js')
		arr = [
			"us", 'string', 'both', 'jq', 'jqSer', 'bs', 'frontOb', 'handy', 'sty',
			'rules', 'flex', 'flexApps', 'boot', 'bb', 'bbCore', 'bbLs', 'bbTemplate',
			'bbApps', 'avail', 'bbLsApps', 'BfRoll', 'blog'
		]
	})
}
$.fn.el = function (e) {
	if (U(e)) {
		console.log($('<div>').append(this.clone()).html())
		return this
	}
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
Ms$ = function (ms) {
	$.h1(ms)
}
$Ms = function (ms) {
	return $.d().fS(80).C($r()).col($r()).A(ms)
};
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
$Ms = function (ms) {
	$.h1(ms)
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
$.dg = $.dragFrame = function (d) {
	var oD
	oD = $.d('y').pad(20).drag()
	d = d || $.d('r').mar(20)
	d.xPrp().a2(oD)
	d.oD = oD
	oD.XY(40, 40)
	return oD
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
$.h = function () {
	var g = G(arguments), o
	bd = $.bd()
	bd.empty()
	bd.C($r())
	o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
	if (o.s) {
		$CSS(o.s)
	}
	if (o.t) {
		$.h1(o.t);
		$.hr().A()
	}
	return $
}
$.s = function (css, c, tx) {
	$CSS(css)
	$.x(c, tx)
	return $
}
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
z = function (fn) {
	$('body').empty()
}
inputs()
function inputs(){

	$L('but', 'submitBut', 'form')
	$.ip = function (n) {
		var g = G(arguments), o, ip
		ip = $('<input>').at('type', 'text')
		return ip
		if (n) {
			ip.n(n);
			ip.id(n)
		}
		o = g.O ? g.f :
				g.N_ ? {w: g.f, id: g.s} :
				{ph: g.f, id: g.s, v: g.t || g.s, n: g.t || g.s}
		ip.ph(o.ph)
		if (o.w) {
			ip.W(o.w)
		}
		if (o.id) {
			ip.id(o.id)
		}
		if (o.v) {
			ip.v(o.v)
		}
		if (o.n) {
			ip.n(o.n)
		}
		ip.C(o.C || 'r').col(o.c || 'b')
		if (!g.n) {
			ip.K('form-control')
			ip.A()
		}
		return ip
	}
	$.ipBt = function (btT, f) {
		return $.d().A($.ip(),
				$.bt(btT, function () {
					f.A(ip.V())
				})).A()
	}
	$.pw = function (n) {
		var el = $('<input>').ty('password')
		if (n) {
			el.n(n)
		}
		return el
	}
	$.ta = $.textarea = function (rows, cols, Cl, cl) {
		var g = G(arguments),
				ta = $('<textarea>')
		Cl = Cl || 'pink'
		cl = cl || 'black'
		if (g.N) {
			ta.K('form-control')
		}
		if (N(rows)) {
			ta.attr({rows: rows})
		}
		if (N(cols)) {
			ta.attr({cols: cols})
		}
		return ta.C(Cl, cl)
	}
	$.ta = function (rows, cols, Cl, cl) {
		var g = G(arguments),
				ta = $('<textarea>');
		Cl = Cl || 'p';
		cl = cl || 'z';
		if (g.N) {
			ta.K('form-control')
		}
		if (N(rows)) {
			ta.at({rows: rows})
		}
		if (N(cols)) {
			ta.at({cols: cols})
		}
		return ta.C(Cl, cl)
	}
	$.l = function (t, fr, n, ph) {
		alert('$.l')
		var g = G(arguments), lb = $('<label>'),
				ip, sp
		if (!g.f) {
			return lb
		}
		lb.for(fr).K('control-label').h(t)
		if (!g[2]) {
			return lb
		}
		ip = $.ip().id(fr).n(n).ph(ph || '...')
		if (!g.n) {
			ip.K('form-control')
		}
		sp = $.sp().A(lb, ip)
		if (!g.n) {
			sp.A()
		}
		return sp
	}
	$.lb = function () {
		var g = G(arguments), o, lb = $('<label>')
		o = g.A_ ? {ch: g.f} : {t: g.f, fr: g.s}
		if (o.ch) {
			_.e(o.ch, function (ch) {
				lb.A(ch)
			})
			return lb
		}
		lb.ht(o.t).for(o.fr)
		//fr=fr||t
		//lb.K('control-label')
		if (!g.n) {
			lb.A()
		}
		return lb
	}
	$.cb = function (n, v, lb) {
		$._cb = function () {
			return $.ip().ty('checkbox')
		}
		var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
				cb, id
		if (g.u) {
			return $('<input type="checkbox">').A()
		}
		if (A(v)) {
			v = v[0];
			checked = true
		}
		id = n + '-' + v
		V = '&nbsp' + v + '&nbsp'
		cb = $.ip().ty('checkbox')
		cb.n(n)
		cb.v(v)
		cb.id(id)
		if (checked) {
			cb.at({checked: 'checked'})
		}
		cb = lb ? $.sp().A(cb, $.lb(l, id))
				: g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
				!g.n ? $.sp().A(cb, $.lb(V, id)) :
						cb
		return cb.A()
		/*
		 $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
		 if(A(v)){v=v[0];checked=true}
		 var I=n+'-'+ v,
		 V='&nbsp'+v+'&nbsp',
		 cbox = $.input().type('checkbox').n(n).v(v).id(I)
		 if(checked){cbox.attr({checked:'checked'})}
		 return lb? $.span().A(cbox , $.lb(l,I))
		 :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
		 :g.N? $.span().A(cbox , $.lb(V,I) )
		 :cbox }
		 $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
		 n = g.f||''; v = g.s||'';id = g.t||'';
		 cb= $.ip().ty('checkbox')
		 sp  = $.sp()
		 if(g.A_){_.e(g, function(ar){
		 sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
		 $.lb(ar[1], ar[2]))});
		 return sp.A($.br())}
		 cb.n(n).v(v).id(id);
		 if(g.p){cb.prop('checked', true)}
		 if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
		 return cb}
		 */
	}
	$.cbG = function (n, v) {
		var g = G(arguments), n = g[0], v = g[1], sp = sp();
		if (g.p) {
			_.e(v, function (v) {
				sp.A($.cb(n, v, '+'))
			})
		}
		else {
			_.e(v, function (v) {
				sp.A(
						$.cb(n, v))
			})
		}
		return s.id(n)
	}
	$.cbl = $.cbLb = function () {
		var g = G(arguments)
		return $.sp().A(
				$.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
	}
	$.rbOld = function () {
		var g = G(arguments),
				chkd, n = g[0] || 'n', v = g[1], lb = g[2];
		if (A(v)) {
			v = v[0];
			chkd = true
		}
		var I = n + '-' + v,
				V = '&nbsp' + v + '&nbsp',
				rbox = $.ip().ty('radio').n(n).v(v).id(I);
		if (chkd) {
			rbox.at({checked: 'checked'})
		}
		return l ?
				$.sp().A(rbox, $.lb(lb, I))
				: g.p ?
				$.sp().A($.br(), rbox, $.lb(V, I))
				: g.N ?
				$.sp().A(rbox, $.lb(V, I))
				: rbox
	}
	$.rb = function (name, id) {
		var g = G(arguments)
		id = id || name
		var q = $('<input>').at('type', 'radio')
		q.n(name)
		q.id(id)
		if (g.p) {
			q.at('checked', true)
		}
		return q
	}
	$.rbG = function (n, v) {
		var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
		if (g.p) {
			_.e(v, function (v) {
				sp.A($.rb(n, v, '+'))
			})
		}
		else {
			_.e(v, function (v) {
						sp.A($.rb(n, v))
					}
			)
		}
		return sp.id(n)
	}
	$.rg = function (n, m, M) {
		m = N(m) ? m : 0;
		M = N(M) ? M : 100;
		n = n || 'r';
		var r = $('<input type="range">');
		r.attr({name: n, min: m, max: M});
		return r
	}
	$.sl = function () {
		var g = G(arguments), sl = $('<select>').A()
		if (g.A_) {
			g.eF(function (o) {
				if (N(o)) {
					o = '' + o
				}
				if (S(o)) {
					o = $.o(o)
				}
				sl.A(o)
			})
		}
		if (g.p) {
			sl.multiselect()
		}
		/*
		 //if(!A(g.f)){g.unshift( ['select'] )}
		 if(A(g.f)){
		 sl= $.sel.apply($, g.f);
		 _.e(g.r,function(v){
		 if(S(v)){v = $.op(v)}
		 sl(v)})}
		 else {sl= $.sel();
		 _.e(g,function(v){if (S(v)) {v = $.o(v)}
		 sl(v)})  }
		 */
		sl.V = function (v) {
			if (U(v)) {
				return sl.q.v()
			}
			sl.v(v);
			return sl
		}
		sl.o = function (f) {
			f = f || alert
			sl.change(function () {
				f(sl.V())
			})
			return sl
		}
		if (g.O) {
			g.eF(function (v, k) {
				sl.A($.o(k, v))
			})
		}
		return sl
		//$.sl(['volvo', $.op('merc'), 'saab' ])
		//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
		//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
	}
	$.SEL = function (n, i) {
		var g = G(arguments), sl
		sl = $('<select>')
		sl.n(n).id(i)
		if (!g.n) {
			sl.K('form-control')
		}
		if (g.p) {
			sl.at({mutiple: true})
		}
		return sl
	}
	$.sel = function () {
		var g = G(arguments)
		var sl = $.sl().id(g.f)
		_.e(g.r, function (g) {
			var o = $.op(g).v(g)
			sl.A(o)
		})
		sl.A()
		return sl
	}
	$.o = $.op = function (n, v) {
		var g = G(arguments),
				o = $('<option>')
		o.A(g.f);
		o.v(g.s || g.f)
		// n = n||'option';  v=v||n; o.T(n).v(v)
		// o.V( g[0] )
		if (g.p) {
			o.at({selected: true})
		}
		o.A()
		return o
	}
	$.og = $.opGr = function (lb) {
		var g = G(arguments), o, og
		o = g.S_ ? {lb: g.f, ch: g.s} : {ch: g.f}
		og = $('<optgroup>')
		if (o.lb) {
			og.at('label', o.lb)
		}
		if (o.ch) {
			if (A(o.ch)) {
				_.e(o.ch, function (q) {
					//if(N(q)){q =''+ q }
					if (S(q)) {
						q = $.o(q)
					}
					og.A(q)
				})
			}
			else {
				og.A(o.ch)
			}
		}
		og.A()
		return og
	}
	$.fU = $.fileUpload = function (lb, t) {
		var fG = $.d().K("form-group").A(
				$.lb(D(lb) ? lb : 'upload file', 'upl').K('control-label').fS(20),
				$.ip().ty('file').id('upl').name('i')
		)
		if (t) {
			fG.A($.p(t).K('help-block'))
		}
		return fG
	}
	$.v = function (id) {
		return $('#' + id).val()
	}
	$.V = function (id) {
		var $el = $('#' + id)
		var val = $el.val()
		$el.val('')
		return val
	}
	but()
	form()
	function but() {
		$.bt = $.button = function () {
			var g = G(arguments), o, bt = $('<button>');
			o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
			o.t = o.t || 'submit';
			if (!g.n) {
				bt.A()
			}
			return bt.T(o.t).$(o.fn)
		}
		$.BT = $.btL = function (t, fn) {
			if (F(t)) {
				return $.bt('submit', t)
			}
			var b = $('<button>');
			b.text(t);
			b.$(fn)
			return b.K('btn-lg')
			/*
			 $.btL=  function(t,f,C,c){
			 var g=G(arguments),
			 t=g[0],f=g[1],C=g[2],c=g[3],
			 t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
			 b = $.bt().K('btn-lg').c(C, c);
			 b(t);if(f){ b.o( f ) }
			 if( g.n ){ b.dd() }//dropdown
			 return b
			 }
			 */
		}
		$._bt = $.btM = function (t, fn) {
			return $.bt(t, fn).C('b').K("btn btn-mini")
		}
		$.bts = function (a, b) {
			var g = G(arguments), d = $.dA(200);
			if (g.p) {
				return $.bts(['start', a], ['stop', b]).auto()
			}
			g.e(function (v) {
				v = A(v) ? v : [v];
				d.A($.bt(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
			})
			return d
		}//floating div of buttons
		$.btR = function (t, fn) {
			var b = $.bt(t, fn).float('right')//.display('block')
			return b
		}
		$.$bt = $.btLf = function (t, fn) {
			var b = $.bt(t, fn).float('left')//.display('block')
			return b
		}
		$.bX = $.btX = function (t, fn) {
			var g = G(arguments), bt, o;
			o = {
				url: g.f,
				data: g.s
			}
			t = t || g.p ? 'submit' : 'X'
			fn = fn || function () {
				var bt = this;
				$.aj({
					url: o.url, data: o.data, type: 'DELETE',
					success: function () {
						$(bt).pa().rm();
						if (g.n) {
							$.rl()
						}
					}
				})
			}
			bt = $.bt(t, fn)
			return bt
		}
		$.btR = function (text, func) {
			var b = $.button(text, func).float('right')//.display('block')
			return b
		}
		$.btL = function (text, func) {
			var b = $.button(text, func).float('left')//.display('block')
			return b
		}
		$.bts = function (a, b) {
			var g = G(arguments), d = dva(2)
			if (g.p) {
				return bts(['start', a], ['stop', b]).auto()
			}
			_.e(g, function (v) {
				v = A(v) ? v : [v]
				d($button(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
			})
			return d
		}//floating div of buttons //beta
	}
	function form() {
		$.f = $.form = function (c, act) {
			var g = G(arguments),
					o, f = $('<form>').K('form')
			o = g.A ? {ch: g.f} : {c: g.f, a: g.s}
			if (o.ch) {
				g.eF(function (el) {
					f.A(el)
				})
			}
			if (o.a) {
				f.attr({action: o.a})
			}
			if (o.c) {
				f.C(o.c)
			}
			f.attr({method: g.p ? 'get' : 'post'})
			if (!g.n) {
				f.A()
			}
			return f
		}
		$.f.gr = $.fG = $.fGD = function () {
			return $.dK('form-group').fS(20)
		}
		$.formGet = function (c, act) {
			var g = G(arguments), c = g[0], act = g[1],
					f = $.f().K('form').attr('method', 'get')
			if (c) {
				f.C(c)
			}
			if (act) {
				f.at({action: act})
			}
			return f
		}
		$.fI = $.formInline = function (a, b) {
			var f = $.form().C('b').K('form-inline form-group'),
					g = G(arguments);
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.f.i = $.fR = $.formRight = function (a, b) {
			var g = G(arguments),
					f = $.form().C('b').K('form navbar-form navbar-right');
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.f.f = $.fF = $.formFalse = function (a, b) {
			var g = G(arguments),
					f = $.form().C('b').K('form well').attr({method: false, action: false});
			_.e(g, function (g) {
				f.A(g)
			});
			if (g.p) {
				f.A($.submit('ok'))
			}
			return f
		}
		$.sm = $.submit = $.submitButton = function (buttonText, func) {
			return $.button(buttonText, func).type('submit')
		}
		$.sb = function () {
			var g = G(arguments)
			var ip = $.ip()
			ip.at('type', 'submit')
			ip.A()
			return ip
		}
		$.sbb = function () {
			var g = G(arguments)
			var ip = $.ip()
			ip.at('type', 'submit')
			return ip
		}
		$.smBt = $.submitButton = function () {
			var args = G(arguments),
					button = $button.apply(0, args)
			return button.type('submit')
		}
		$.submit2 = sm = function (a) {
			var g = G(arguments)
			if (g.p) {
				return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
			}
			return ip('submit').k('show').v(ok(a))
		}
		$.sm = function (v) {
			var el = $('<input>').ty('submit').fS(16)
			if (v) {
				el.v(v)
			}
			return el
		}
		$.sb = function (t, fn) {
			var g = G(arguments), bt = $.bt(t, fn).ty('submit')
			if (g.p) {
				bt.K('btn btn-mini button-default').T(a || 'ok')
			}
			//bt.A('submit').K('show')
			return bt
		}
	}
}
function fromKnockOutPre(){
	toHandy = function () {
		$.pre = function () {
			return $("<pre>").A()
		}
	}
	$D = $Dt = function () {
		var dt = new Date()
		return dt
	}
	toHandy = function () {
		$.pre = function () {
			return $("<pre>").A()
		}
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
}