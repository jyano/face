// add vs create : add returns parent, create returns child
$L('manip',  'text', 'hTags', 'nest', 'divs', 'lists')
function manip() {
	function ipsum() {
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
	attr()
	nest()
	function attr() {
		$.fn.foc = $.fn.focus
		$.fn.v = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				if (g.n) {
					this.val('')
				}
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.V = function (newVal) {
			var g = G(arguments)
			if (U(newVal)) {
				var v = this.val()
				this.val('')
				return v
			}
			this.val(newVal);
			return this
		}
		$.fn.v = $.fn.val
		$.fn.v_ = function () {
			var val = this.val();
			this.val('');
			return val
		}
		$.iI = function (i) {
			if (O(i)) {
				return S($(i)[0].src)
			}
		}
		$.src = function f(e) {
			if (e.image) {
				e = e.image
			}
			if ($.tCan(e)) {
				e = $.tCan(e)
			}
			if (e.src) {
				e = e.src
			}
			if (e.toDataURL) {
				e = _.tDU(e)
			}
			return s$(e).contains('data:') ? e
					: S(e) ? _.src(e)
					: 0
		}
		$.fn.ed = function (ed) {
			if (U(ed)) {
				return this.attr('contenteditable')
			}
			this.attr('contenteditable', ed ? true : false)
			return this
		}
		$.fn.rmAt = $.fn.removeAttr
		$.fn.edFoc = function () {
			return this.ed(1).foc()
		}
		$.fn.nm = $.fn.name = function (name) {
			return name ? this.at('name', name) :
					this.at('name')
		}
		$.fn.idNm = function (id, nm) {
			this.id(id)
			this.nm(nm || id)
			return this
		}
		$.fn.at = $.fn.attr
		$.fn.i = $.fn.sr = $.fn.src = function (a) {
			if (U(a)) {
				return this.attr('src')
			}
			this.attr('src', _.src(a))
			return this
		}
		$.fn.n = function (name) {
			if (U(name)) {
				return this.attr('name')
			}
			this.attr('name', name);
			return this
		}
		$.fn.ml = $.fn.mlt = function (m) {
			return this.at('multiple', true)
		}
		$.fn.ph = $.fn.placeholder = function (forWhat) {
			return this.attr('placeholder', forWhat)
		}
		$.fn.ck = $.fn.chk = function () {
			this.at('checked', true)
		}
		$.fn.ty = $.fn.type = function (type) {
			if (U(type)) {
				return this.attr('type')
			}
			this.attr('type', type);
			return this
		}
		$.fn.id = function (id) {
			if (U(id)) {
				return this.attr('id')
			}
			;
			this.attr('id', id);
			return this
		}
		$.fn.hr = $.fn.hf = $.fn.href = function (href) {
			if (U(href)) {
				return this.attr('href')
			}
			this.attr('href', href);
			return this
		}
		$.fn.fr = $.fn.for = function (forWhat) {
			return this.attr('for', forWhat)
		}
		$.fn.ro = $.fn.role = function (role) {
			if (U(role)) {
				return this.attr('role')
			}
			this.attr('role', role)
			return this
		}
		$.fn.tt = $.fn.ti = function (a) {
			this.at('title', a)
			return this
		}
		$.fn.d = $.fn.da = $.fn.data
	}
	
	function nest() {
		$.fn.oh = function () {
			return this[0].outerHTML
		}
		$.fn.h = $.fn.ht = $.fn.html
		$.fn.t = $.fn.tx = $.fn.text
		$.fn.e = $.fn.ea = $.fn.each
		$.fn.f = $.fn.fi = $.fn.find
		$.fn.hd = $.fn.hide
		$.fn.sh = $.fn.show
		$.fn.gg = $.fn.toggle
		$.fn.fCt = function (str) {
			return this.fi(":contains(" + str + ")")
		}
		$.bd = function () {
			var bd = $('body')
			return bd
		}
		$.A = function () {
			var g = G(arguments),
					bd = $('body')
			$.fn.A.apply(bd, g)
			return $
		}
		$.ct = $.cts = $.contains
		$.fn.osP = function () {
			return this.offsetParent
		}
		$.fn.g = function (ix) {
			if (U(ix)) {
				return this[0]
			}
			return this.eq(ix)
		}
		$.fn.ch = function () {
			return this.children()
		}
		$.fn._ = $.fn.closest
		$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
		$.fn.sib = function () {
			var g = G(arguments);
			return this.sib.apply(this.g)
		}
		$.fn.N = $.fn.next
		$.fn.r = $.fn.rm = $.fn.xx = function () {
			var e = this
			e.remove()
			return e
		}
		$.fn.fRm = function (a) {
			return this.fi(a).rm()
		}
		$.fn.E = function (html) {
			var $el = this, g = G(arguments)
			//$l('$.fn.E in web.js (betweetn fRm and rp')
			$el.empty() //if (S(html)) {this.h(html); return this}
			g.A ? _.e(g.f, add) :
					g.e(add)
			return $el
			function add(q) {
				A(q) ? _.e(q, add) :
						$el.A(q)
			}
		}
		$.fn.rp + $.fn.replace
		$.fn.A = function (stuff) {
			if (U(stuff)) {
				$('body').append(this);
				return this
			}
			this.append.apply(this, arguments)
			return this
		}
		$.fn.a2 = function (a) {
			a.A(this);
			return this
		}
		$.fn.pp = function (a) {
			this.pp(a);
			return this
		}
		$.fn.p2 = $.fn.pp2 = function (a) {
			this.prependTo(a);
			return this
		}
		$.fn.bf=$.fn.iBf =$.fn.iB = $.fn.insertBefore
		$.fn.iA = $.fn.insertAfter
		$.fn.wr = $.fn.wrap
		
		
		
		$.fn.d_ = function(k){
			var q=this, d = $.d()
			d.K(k)
			d.A(q)
			return q
		}
		$.fn._d = function(k){
			var q = this, d = $.d()
			d.K(k)
			q.A(d)
		return q
		}
		
		$.fn.D_ = function (k) {
			var q = this, d = $.d()
			d.K(k)
			d.A(q)
			return d
		}
		
		$.fn._D = function (k) {
			var q = this, d = $.d()
			d.K(k)
			q.A(d)
			return d
		}
		
		
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
function nest() {
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
	_B=$.b = $.B =function (a, k) {
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
		
		return g.f?  d.K( g.f ) : d
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
$.nav = $.n = function () {
	return $('<nav>')
}