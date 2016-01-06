$L('hTags', 'divs')
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
$.sp = $.span= function () {
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
$.hdr = $.header = function () {//$.H=
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
$.i = $.img = function () {
	var g = G(arguments), o, i = new Image(), $i = $(i);
	o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
	if (F(o.fn)) {
		$i.load(_.b(function (e) {
			o.fn(e.target, e)
		}, $i))
	}
	if (o.sr) {
		$i.sr(o.sr)
	}
	return $i
}
$.c = $.can = $.canvas = $.cv =  $.c2 = function (c, width, h, x, y) {
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

 q.id('canvas').k('canvas can').al(.8)
 return q.A()
}


$.cv0 = function () {
	return $.c2.apply($, arguments)[0]
}
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
	$dA = function () {
		var d = $.d()
		d.A.apply(d, arguments)
		return d
	}
	$.__d = function () {
		var d = $('<div>')
		_.e(arguments, function (ch) {
			d.A(ch)
		})
		return d
	}
	$.fn.dI = function () {
		return this.A(
				$.dI.apply($, arguments)
		)
	}
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
$.cI = function (id) {
	return $.c().id(id || 'cv')
}
$.pre = function () {
	return $("<pre>").A()
}
$.hr = function (c, h, w) {
	var hr = $('<hr>')
	//  if( N(c) ){  return $.hr('z', c, h )  }
	//  hr = $('<hr>').h(h ||2).C(c||'z');
	//  if(w ){ hr.W(w ) }
	return hr.A()
}
$.nav = $.n = function () {
	return $('<nav>')
}
 