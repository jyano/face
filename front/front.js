$RE = function (rx, flags) {
	return new RegExp(rx, flags)
}
$REi = function (rx) {
	return new RegExp(rx, 'i')
}
//flilterbale?
ok = function self(vm, el) {
	if (A(vm)) {
		return self(vm[0], vm[1])
	}
	if (S(vm)) {
		return self($Ob(vm, el))
	}
	window.vm = vm
	ko.aB(vm, el)
	return vm
}
$ok = function self() {

// ???? pass plain object and element(string or ob?) :)
	var g = G(arguments)
	if (g.p) {
		_.in(0, function () {
			self.apply(null, g)
		})
	}
	// pass nothing -> {da: $o(1)} Note: 'da' replaced '$'
	if (g.u) {
		g.f = 'da'
	}
	// pass a single key, value -> {key:value}
	vm = S(g.f) ? Ob(g.f, D(g.s) ? g.s : $o(g.n)) :
		// pass just a value -> {$: value}
			F(g.f) || N(g.f) || A(g.f) ?
					Ob('da', g.f)
				// pass just plain obj (normal)
					: g.f
	ok(vm)
}
OK = function (vm) {
	_.in(.1, function () {
		ok(vm)
	})
}
$KOob = function (k, v) {
	var g = G(arguments)
	if (g.O) {
		var o = []
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	k = KOob[k] ? KOob[k] : k
	v = v ? ': ' + v : ''
	return k + v
}
$.wd = $.wg = $.wid = $.widget
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
// add vs create : add returns parent, create returns child
$L('manip', 'text', 'hTags', 'nest', 'divs', 'lists')
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
		$.fn.bf = $.fn.iBf = $.fn.iB = $.fn.insertBefore
		$.fn.iA = $.fn.insertAfter
		$.fn.wr = $.fn.wrap
		$.fn.d_ = function (k) {
			var q = this, d = $.d()
			d.K(k)
			d.A(q)
			return q
		}
		$.fn._d = function (k) {
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
$.nav = $.n = function () {
	return $('<nav>')
}
$L('ajax')
function ajax() {
	$.pD = function (ev) {
		ev.preventDefault()
		return ev
	}
	$.iQ = function (o) {
		return O(o) && F(o.ajaxStart)
	}
	$.iO$ = function (o) {
		return O$(o) && !$.iQ(o)
	}
	$.g = $.G = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.G, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.get(S.eL(o.p), o.d || {},
				function (d) {
					o.fn = o.fn || function () {
						return 'boo ya!'
					};
					o.fn(d)
				})
	}
	$.eG = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eG, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.G(o.p, o.d || {},
				function (dd) {
					_.e(dd, function (d) {
						o.fn(d)
					})
				});
		return $
	}
	$.txG = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	$.j = $.gJ = $.Gj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.Gj, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.getJSON(
				S.eL(o.p),
				o.d || {},
				function (d) {
					o.fn(d)
				});
		return $
	}
	$.eJ = $.eGj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eJ, g[0])
		}
		o = F(g[1]) ?
		{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.Gj(o.p, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.po = $.P = function () {
		var g = G(arguments), o;
		o = F(g.s) ?
		{url: g.f, fn: g.s} :
		{url: g.f, da: g.s, fn: g.t};
		o.da = O(o.da) ? o.da : D(o.da) ? {da: o.da} : {}
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		o.url = S.eL(o.url)
		$.post(o.url, o.da, function (d) {
			o.fn(o.da, o)
		})
		return $
	}
	$.eP = $.ePo = function () {
		var g = G(arguments);
		if (U(g[1])) {
			return _.p($.eP, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.P(o.u, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.aj = function (ob) {
		return $.ajax(ob)
	}
	$.XML = function () {
		alert('$.XML!');
		return new XMLHttpRequest()
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
Ms$ = function (ms) {
	$.h1(ms)
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
$l('webSite')
$Ms = function (ms) {
	//$.h1(ms)
	return $.d().fS(80).C($r()).col($r()).A(ms)
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
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
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
z = function (fn) {
	$('body').empty()
}
$.fn.animloop = function () {
	var that = this
	this.show("slow")
	this.animate({"marginLeft": "300px"}, 2000)
			.animate({"marginLeft": "0px"}, 2000)
	this.hide("slow", function () {
		that.animloop()
	})
}
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass 
_lS = localStorage
$w = window
z = function () {
	$('body').E()
}
$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
$test = function (a, b) {
	if (b2d.test) {
		var g = G(arguments), a = g[0], b = g[1], str
		if (D(b)) {
			str = '||'
			_.e(g, function (s) {
				str += ' ' + s.toString() + ' |'
			})
			str += '|'
		}
		else {
			str = a.toString()
		}
		alert(str)
	}
	return a
} // =$t
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
__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
$sl = {}
$.p.ch = function () {}
$ol = function () {}
$ul = function () {}
$.fS = function (num) {return bd.fS(N(num, 30))}
$.fn.pam = $.fn.par = function (a, b) {this.at('params', a + ': ' + b);
	return this
} 

$.p.cb = $.p.ch = function () {}
$.p.sp = function () {}

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
	return $.bt().iA(what)}

$.fn.op = $.fn.prop

//_rf = function (a) {a.refresh();return q}

$.spSmMdLg = function () {return $.sp().A(
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
$.ok = function (fn) {
	return $.bt('ok', fn)
}
$.okPD = function (fn) {
	return $.ok(function (ev) {
		_.pD(ev)
		return fn(ev)
	})
}
$.lIp = function (lbTx, id) {
	var ip = $.ip()
	ip.id(id || lbTx)
	var p = $.p()
	p.A($.lb(lbTx + ': '), ip)
	p._ip = ip
	return p
}
$.fo = function (title, chArr, fn) {
	var f = $.f()
	f.A($.h1(title))
	if (A(chArr)) {
		_.e(chArr, function (ch) {
			f.A(ch)
		})
	}
	if (F(fn)) {
		f.A($.okPD(fn))
	}
}
$.fAc = function (ac) {
	return $.f().ac(ac)
}
$.ipStPr = function (id) {
	var ip = $.ip().stPr()
	if (S(id)) {
		ip.id(id)
	}
	return ip
}
$.spC = $.spCA = function (C, CH) {
	var g = G(arguments)
	var $el = $.sp()
	$el.C(C)
	A(CH) ? _.e(CH, add) : _.e(g.r, add)
	return $el
	function add(ch) {
		$el.A(ch)
	}
}
$.btC = $.btCA = function (C, chArr, fn) {
	var bt = $.bt(' ', fn).C(C)
	_.e(chArr, function (ch) {
		bt.A(ch)
	})
	return bt
}
$.okP = $.okPo = function (url, da, fn) {
	$.okPD(function () {
		$.P(url, da, fn)
	})
}
$.iV = function (id) {
	return $(S.eL(id, '#')).v()
}
$.IV = function (id) {
	return $(S.eL(id, '#')).V()
}
$.IVOb = function () {
	var g = G(arguments)
	var ob = {}
	_.e(g, function (arg) {
		ob[arg] = $.IV(arg)
	})
	return ob
}
$.fn.su = function (fn) {
	var $el = this
	$el.submit(fn)
	return $el
}
$.fn.suPD = $.fn.suPrDf = function (fn) {
	var $el = this
	$el.su(function (ev) {
		$.pD(ev)
		fn(ev)
	})
	return $el
}
$.P$d = function (url, ipId, title) {
	$.P(url, $.IV(ipId), $cDFn(title))
}

$.cDFn = function (title) {
	return function (da) {
		$cD(title, da)
	}
}
$.cD = function () {
	var g = G(arguments), o
	o = (g.S_ && g.s) ?
	{title: g.f, da: g.s} :
			g.S_ ? {title: g.f, da: window[g.f]} :
			{da: g.f}
	$l(o.title + ' ->')
	console.dir(o.da)
	return o.da
}
$.dHr = function () {
	var d = $.d.apply($, arguments)
	return $.d().A(d, $.hr())
}

$.pD = _.pD = function (ev) {
	ev.preventDefault()
	return ev
}
 
$.fS = function (size) {
	$s({$: {fS: (N(size, 40))}})
	return $
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}

$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
$tp = window['$tp'] || {}
$.fn.none = function () {
	return this.css('display', 'none')
} 
Ap = {M: {}, C: {}, V: {}, T: {}}
   
Temp = function (i, h) {
	var s = ''
	return _.tp($('#' + i).html(), h || {})
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	s = "<script type='text/template'>" + s + "</script>"
	return $(s).id(i).A()
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return _.tp($('#' + i).html(), h || {})
} 
__ = 'fadsfasasdf'
$Df = function (ob) {
	return $M({df: ob})
}
//function qT_superTemplate() {
qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	return fn(ob, $el || $._d())
}
function QTexample() {
	function sampleTemplates() {
		$tp.thed = function (ob, $el) {
			return $el.A(
					$.thead().A(
							$.tr().K('header').A(
									$.th('Name'),
									$.th('Age')
							)
					)
			)
			// $tp.thed :  use like this:  t=qT(thed).a()
		}
		$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
			//two ways ok!!!!
//can pass:
//1) jq/el
			return $el.A($.li(ob.me), $.li(ob.me))
			//2)
			// or .... array
			return [$.li().A(ob.me), $.li().A(ob.me)]
		}
	}
	
	e = qT($tp.lii, {me: 'jason'}).a()
}
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
qT = function (fn, ob, el) {
	return fn(ob, $(el) || $.d())
}
//a sample template
lii = function (o, e) {
	return e(li(o.me), li(o.me))
}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
thed = function (o, e) {
	return e(
			thead()(
					tr().k('header')(
							th()('Name'), th()('Age')
					)
			)
	)
}
// t=qT(thed).a()
Temp = function (i, h) {
	var s = ''
	return _.tp(
			$('#' + i).html(), h || {}
	)
	if (A(h)) {
		_.e(h, function (h) {
			s += h.oh()
		})
	}
	_str = "<script type='text/template'>" + _str + "</script>"
	str = $(s)
	return $(s).id(i).A()
}
listTp = function () {
	$.d().C('o').id('list-tp').A($.li().A($.a()))
} 
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
$.fm = $.format = function () {
	$.fm.A = $s1 = s1 = section1 = $.span()
	$.fm.B = $s2 = s2 = section2 = $.span()
	$ctD = $.containerDiv(
			bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
}
BasicLayout = format = function () {
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
	$CtD(bs.row39(s1, s2))
}
$.fm = $.format = function () {
	$l('in fm')
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
};
$.fm = $.format = function () {
	$l('in fm')
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
};
ContainerDiv = CT = function () {
	var args = G(arguments),
			theDiv = $div().k('container')
	if (args.N) {
		theDiv($br(4)).a()
	}
	_.each(args, function (v) {
		theDiv(v)
	})
	return theDiv
}
$.containerDiv = function () {
	var args = G(arguments),
			theDiv = $.div().K('container')
	if (args.N) {
		theDiv.A($.br(4)).A()
	}
	_.each(arguments, function (v) {
		theDiv.A(v)
	})
	return theDiv
}
$.dCt = $.ctD = function () {
	var g = G(arguments), //makes auto top-spacing (for navbar not to block)
			d = $.dK('container')
	if (!g.n) {
		d.A($.br(4))
	}
	_.e(g, function (v) {
		d.A(v)
	})
	return d
}
$.eD = $.editDiv = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.dE2 = $.editDiv2 = function (a) {
	var d = $.editDiv(a), range = $.range()
	range.md(function (e) {
		e.stopPropagation()
	})
	range.on('input', function () {
		d.fi($('span')).fS($(this).v())
		d.fi($('textarea')).fS($(this).v())
	})
	d.pp(range)
	return d
};
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
$.pic = function (pic) {
	return $.i(pic._id + pic.ext).WH(120, 120)
			.$(function () {
				$.cut(pic._id + pic.ext)
			})
}
$.picDiv = function (top) {
	$l('in picDiv')
	return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
			.pad(25)
}
$.iD = $.imgDiv = function (st) {
	d = $.d('y', '+')
	$.eGj('img', function (i) {
		d.A($.c(100, 100).fit(i.d)
				.$(function () {
					st.bm(i.d, function (bm) {
						bm.sXY(.4).dg()
					})
				}))
	})
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
$.eD = $.editDiv = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.dE2 = $.editDiv2 = function (a) {
	var d = $.editDiv(a), range = $.range()
	range.md(function (e) {
		e.stopPropagation()
	})
	range.on('input', function () {
		d.fi($('span')).fS($(this).v())
		d.fi($('textarea')).fS($(this).v())
	})
	d.pp(range)
	return d
};
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
$.pic = function (pic) {
	return $.i(pic._id + pic.ext).WH(120, 120)
			.$(function () {
				$.cut(pic._id + pic.ext)
			})
}
$.picDiv = function (top) {
	$l('in picDiv')
	return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
			.pad(25)
}
$.iD = $.imgDiv = function (st) {
	d = $.d('y', '+')
	$.eGj('img', function (i) {
		d.A($.c(100, 100).fit(i.d)
				.$(function () {
					st.bm(i.d, function (bm) {
						bm.sXY(.4).dg()
					})
				}))
	})
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
$.delBt = function (url, data) {
	var bt
	bt = $.bt('delete', function (el) {
		$.ajax({
			type: 'DELETE',
			data: data,
			url: url,
			success: function () {
				$(el.target).closest('div').rm()
			}
		})
	})
	return bt
}
$.floatingInput = function (text, func) {
	var args = G(arguments),
			theForm = $.form().K('text-center').C('o').fontSize(20).drag().minW(200)
	theForm.A(
			$.button(text).type('submit'),
			$.input()
	)
	if (F(func)) {
		theForm.submit(func)
	}
	return theForm
}
$.floatIp = function (t, fn) {
	var g = G(arguments), f
	f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
			.A(
			$.sm(t), $.ip())
	if (F(fn)) {
		f.sm(fn)
	}
	return f
}
$.ipB = $.inputBox = function (ob) {
	ob = ob || {}
	var d, ip, fn = ob.func, url = ob.url || '/',
			tt = ob.boxTitle,
			inputType = ob.inputType || 'text',
			defaults = ob.defaults || {},
			t = ob.btT || 'submit', taI
	d = $.d().WH('auto').pad(10)
	if (tt) {
		d.A($.h1(tt))
	}
	if (inputType == 'text') {
		d.A(ip = $.ip().K('form-control')).A(
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip), defaults), fn)
				})
		)
	}
	if (inputType == 'textArea') {
		d.A(taI = $.ta().K('form-control'), $.bt(t, function () {
			$.post(url, _.df(dataValue(theTextAreaInput), defaults), fn)
		}))
	}
	if (inputType == 'textAndTextArea') {
		d.A(
				ip = $.ip().K('form-control'),
				taI = $.ta().K('form-control'),
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip, taI), defaults), fn)
				}))
	}
	return d
} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
function msg() {
	_toFr = function (to, fr) {
		return {to: to, fr: fr}
	}
	$toFr = function (q) {
		return __toFr(q.body.to, q.u)
	}
	$mail = function (to, from, txt) {
		return {to: to, from: from, text: txt}
	}
}
function dataURL() {
	Y.uPop = function (i, size) {
		i = (O(i) && F(i.u)) ? i.u() : i
		size = size || 300
		return $.c().WH(size, size).fit(i)
	}
	Y.dUD = function (d, n) {
		$.P('getImageById', {data: d}, function (u) {
			upop(u, n)
		})
	} //sk-send du of your (first) can-el
	Y.dU = function () {
		var u
		c = $.c().fit('me')
		u = c.toDataURL()
		k.emit('du', u);
		return u
	}
}
//
$window = $win = win = function (a, c, id) {//title/ob?,color,id
	var size, theWindow, text, moreButton, lessButton, closeButton
	moreButton = $buttonRight('>', function () {
		theWindow.Z(4)
		lessButton.sh()
		moreButton.hd()
	})
	lessButton = $buttonRight('<', function () {
		theWindow.auto();
		moreButton.sh();
		lessButton.hd()
	}).hd()
	closeButton = $buttonLeft('X', function () {
		theWindow.X()
	})
	theWindow = dva(size || 4).s({C: 'b', a: .9, of: 'a'})
			.P(10).B(4).bs('-').bc('o').auto()
	(moreButton, lessButton.hd(), closeButton).drg().a()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow(a)
	}
	if (text) {
		theWindow(
				$pg(text)
						.font(24).cen().c('X')
						.s({
							'margin-left': 10,
							'margin-right': 10,
							pr: 30,
							pl: 30
						}),
				$hr().c(c || 'z').font(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
$.win = $.window = function (a, c, id) {
	var size,
			theWindow,
			text,
			moreButton,
			lessButton,
			closeButton
	moreButton = $.buttonRight('>', function () {
		theWindow.WH(400)
		lessButton.show()
		moreButton.hide()
	})
	lessButton = $.buttonRight('<', function () {
		theWindow.WH('auto')
		moreButton.show()
		lessButton.hide()
	}).hide()
	closeButton = $.buttonLeft('X', function () {
		theWindow.remove()
	})
	theWindow = $.divA(size || 400)
	theWindow.C('b').opacity(.9).overflow('auto')
	theWindow.pad(10).borderWidth(4).borderStyle('dashed')
	theWindow.WH('auto').A(moreButton, lessButton.hide(), closeButton).drag().A()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow.A(a)
	}
	if (text) {
		theWindow.A(
				$.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
				$.hr().col(c || 'z').fontSize(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
$.pop = function (message, o) {
	$.pop = function (message, ops) {
		_pop = function () {
			var modalContent = ModalContent() // <div class="modal-content"></div>
			_.each(arguments,
					function (arg) {
						modalContent(S(arg) ? $div()(arg) : arg)
					})
			return ModalForm(
					ModalDialog(
							modalContent
					))
		}
		pop = function (message, ops) {
			if (S(ops)) {
				return pop(ops, {t: message})
			}
			ops = O(ops) ? ops : {}
			var modalBody,
					message = message || 'pop pop',
					modalBody = ModalBody($h2(message)),
					theModal = _pop(modalBody)
			var titleColor = ops.tc || 'z',
					headerColor = ops.hc || 'z',
					title = ops.t
			//hide? default:false
			if (!ops.h) {
				theModal.m()
			}
			if (title) {
				
				//header
				modalBody.q.prepend(
						$hr().c(headerColor).s({height: 2}).q)
				//title
				modalBody.q.prepend(
						$h1(title).s('c', titleColor).q)
			}
			//button
			if (ops.b) {
				modalBody.a($button(ops.b))
			}
			//dragg
			if (ops.d) {
				theModal.drg()
			}
			if (ops.drag) {
				theModal.drg()
			}
			//opacity
			if (ops.a) {
				theModal.s({opacity: ops.a})
			}
			if (ops.opacity) {
				theModal.s({opacity: ops.opacity})
			}
			//text color of the MESSAGE
			if (ops.c) {
				
				//flash like crazy
				if (ops.c == '*') {
					setInterval(function () {
						modalBody.c()
					}, 100)
				}
				
				//color
				else {
					theModal.s({c: ops.c})
				}
			}
			//color of background of modal itself
			if (ops.C) {
				modalBody.s({C: ops.C})
			}
			//this color takes over the whole screen!
			//this is the background color of the hiding body
			if (ops.bc) {
				theModal.s({C: ops.bc})
			}
			return theModal
		}
		$._pop = function () {
			var modalContent = $.modalContent()
			_.each(arguments,
					function (arg) {
						modalContent.A(
								S(arg) ? $.div().text(arg) : arg
						)
					}
			)
			return $.modalFade().A($.modalDialog().A(modalContent))
		}
		if (S(ops)) {
			return $.pop(ops, {title: message})
		}
		ops = O(ops) ? ops : {}
		message = message || 'pop pop'
		modalBody = $.modalBody().A($.h2(message))
		theModal = $.modalFade().A($.modalDialog().A($.modalContent().A(modalBody)))
		if (!ops.hide) {
			theModal.modal()
		}
		if (ops.title) {
			modalBody.prepend(
					$.h1(ops.title).col(ops.titleColor || 'z'),
					$.hr().C(ops.headerColor || 'z').css('height', 2)
			)
		}
		if (ops.button) {
			modalBody.A($.button(ops.button))
		}
		if (ops.drag) {
			theModal.drag()
		}
		if (ops.opacity) {
			theModal.opacity(ops.opacity)
		}
		//text color of the MESSAGE
		if (ops.col) {
			theModal.col(ops.col)
		}
		//color of background of modal itself
		if (ops.C) {
			//flash like crazy
			if (ops.C == '*') {
				setInterval(function () {
					modalBody.C($r())
				}, 100)
			}
			else {
				modalBody.C(ops.C)
			}
		}
		//this color takes over the whole screen!
		//this is the background color of the hiding body
		if (ops.backgroundColor) {
			theModal.C(ops.backbroundColor)
		}
		return theModal
	}
	if (S(o)) {
		return $.pop(o, {title: message})
	}
	o = O(o) ? o : {}
	message = message || 'pop pop'
	mB = $.modalBody().A($.h2(message))
	m = $.modalFade().A($.modalDialog().A($.modalContent().A(mB)))
	if (!o.hd) {
		m.modal()
	}
	if (o.tt) {
		mB.pp($.h1(o.titC).col(o.titC || 'z'),
				$.hr().C(o.headerC || 'z').css('height', 2))
	}
	if (o.bt) {
		mB.A($.bt(o.bt))
	}
	if (o.dg) {
		m.dg()
	}
	if (o.al) {
		m.al(o.al)
	}
	//text color of the MESSAGE
	if (o.col) {
		m.col(o.col)
	}
	//color of background of modal itself
	if (o.C) {
		//flash like crazy
		if (o.C == '*') {
			_.ev(.1, function () {
				mB.C($r())
			})
		}
		else {
			mB.C(o.C)
		}
	}
	//this color takes over the whole screen!
	//this is the background color of the hiding body
	if (o.c) {
		m.C(o.c)
	}
	return m
}
$.dragFrame = function (d) {
	d = d || $.d('y', 50, 50)//.mar(20)
	d.on('mousedown', function (e) {
		e.stopPropagation()
	})
	//outerDiv
	return $.d('r').A(d)//.drag().pad(20)
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
$.dragFrame = function (ob) {
	var oD = $.d('r', '+').pad(10)
	inD = $.d('y').md(function (e) {
		e.stopPropagation()
	})
	oD.A(inD)
	return inD.A(ob)
}
$.dragFrame = function (ob) {
	var outerDiv = $.d('r').drag().pad(20).A()
	ob = ob || $.d('y', 50, 50).mar(20)
	ob.on('mousedown', function (e) {
		e.stopPropagation()
	})
	outerDiv.A(ob)
	return outerDiv
	/*
	
	 $.dragFrame = function (ob) {
	 var oD = $.d('r', '+').pad(10)
	 inD = $.d('y').md(function (e) {e.stopPropagation()})
	 oD.A(inD)
	 return inD.A(ob)
	 }
	
	 */
}
$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg).K('alert alert-danger'))
	return theForm.prependTo('body')
}
$window = $win = win = function (a, c, id) {//title/ob?,color,id
	var size, theWindow, text, moreButton, lessButton, closeButton
	moreButton = $buttonRight('>', function () {
		theWindow.Z(4)
		lessButton.sh()
		moreButton.hd()
	})
	lessButton = $buttonRight('<', function () {
		theWindow.auto();
		moreButton.sh();
		lessButton.hd()
	}).hd()
	closeButton = $buttonLeft('X', function () {
		theWindow.X()
	})
	theWindow = dva(size || 4).s({C: 'b', a: .9, of: 'a'})
			.P(10).B(4).bs('-').bc('o').auto()
	(moreButton, lessButton.hd(), closeButton).drg().a()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow(a)
	}
	if (text) {
		theWindow(
				$pg(text)
						.font(24).cen().c('X')
						.s({
							'margin-left': 10,
							'margin-right': 10,
							pr: 30,
							pl: 30
						}),
				$hr().c(c || 'z').font(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
$.win = $.window = function (a, c, id) {
	var size,
			theWindow,
			text,
			moreButton,
			lessButton,
			closeButton
	moreButton = $.buttonRight('>', function () {
		theWindow.WH(400)
		lessButton.show()
		moreButton.hide()
	})
	lessButton = $.buttonRight('<', function () {
		theWindow.WH('auto')
		moreButton.show()
		lessButton.hide()
	}).hide()
	closeButton = $.buttonLeft('X', function () {
		theWindow.remove()
	})
	theWindow = $.divA(size || 400)
	theWindow.C('b').opacity(.9).overflow('auto')
	theWindow.pad(10).borderWidth(4).borderStyle('dashed')
	theWindow.WH('auto').A(moreButton, lessButton.hide(), closeButton).drag().A()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow.A(a)
	}
	if (text) {
		theWindow.A(
				$.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
				$.hr().col(c || 'z').fontSize(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
ooo.fl = {
	a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
	i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
	n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
	sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
}
_.x(ooo, {
	dir: {r: 'row', rv: 'row-reverse', c: 'column', cRv: 'column-reverse'},
	wr: {
		w: 'wrap', wr: 'wrap',
		rv: 'wrap-reverse', nw: 'nowrap'
	},
	jfC: {
		st: 'flex-start',
		end: 'flex-end',
		c: 'center',
		sB: 'space-between',
		sA: 'space-around',
		i: 'initial',
		_: 'inherit'
	},
	alC: {
		fs: 'flex-start',
		fe: 'flex-end',
		c: 'center',
		sB: 'space-between',
		sA: 'space-around',
		i: 'initial',
		_: 'inherit'
	},
	alI: {
		fs: 'flex-start',
		fe: 'flex-end',
		c: 'center',
		b: 'baseline',
		s: 'stretch',
		i: 'initial',
		_: 'inherit',
		a: 'auto'
	}
})
$.sty = $.Sty = function (h) {
	var g = G(arguments)
	var styleTag = $('<style>')
			.at({type: 'text/css'});
	styleTag.h(h)
	if (!g.n) {
		styleTag.A()
	}
	return styleTag
}
 
$sel = function (sel) {
	if (A(sel)) {
		sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
	}
	if (sel == '$') {
		return '*'
	}
	sel = sel.replace('_', '.')
			.replace('$', '#')
	_.e({
		bd: 'body', sp: 'span',
		bt: 'button',
		sc: 'section', nv: 'nav',
		d: 'div',
		i: 'img', ip: 'input', hdr: 'header', n: 'nav'
	}, function (v, k) {
		if (sel == k) {
			sel = v
		}
	})
	return sel
}
$rule = function (sel, decs, rulesOb) {
	return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
}
$decBlk = function (decs, ob) {
	ob = ob || {}
	var decBlk = ' ',
			Decs = {}
	if (S(decs)) {
		return decs
	} //for @media ??
	$plugin(decs)
	$mixin(decs, ob)
	_.e(decs, function (v, k) {
		if (k == 'mixins' || k == 'plugins') {
			return
		}
		$setPropVal = function (ob, key, val) {
			ob[key] = $val(val, key)
		}
		Decs[oO('s', k)] = $val(v, k)
	})
	_.e(Decs, function (v, k) {
		var dec = _dec(v, k)
		$l('dec: ' + dec)
		decBlk += dec
	})
	$l('decBlk: ' + decBlk)
	return _brace(decBlk)
}
$val = function (v, k) {
	if (A(v)) {
		return $helperValue(v, k)
	}
	return N(v) && v > 10 ? $S(v) + 'px' :
			oO(k, v, 'R')
}
$sty = function (sty, styVal) {
	//= $decs = $css
	_$sty = function (o, a, b) {
		//= addSty
		if (N(b) && M.abs(b) > 10) {
			b = $S(b) + 'px'
		}
		o[oO('s', a)] = oO(a, b, 'R')
		return o
	}
	var o = {}
	if (S(sty)) {
		_$sty(o, sty, styVal)
	}
	else {
		_.e(sty, function (styVal, sty) {
			_$sty(o, sty, styVal)
		})
	}
	return o
	//= $.qs
}
$rules = function (rulesOb) {
	var rulesStr = '\n\n'
	_.e(rulesOb, function (decs, sel) {
		rulesStr += $rule(sel, decs, rulesOb) + '\n'
	})
	return rulesStr + '\n'
}
$subRules = function (rulesOb) {
	return _brace($rules(rulesOb))
	//for meta (see Grail)
}
minW = above = greaterThan = atLeast = min = function (num, str) {
	return '@media all and (min-width: ' + num + 'px) ' + (str || '')
}
maxW = below = lessThan = max = function (num, str) {
	return '@media all and (max-width: ' + num + 'px) ' + (str || '')
}
between = within = function (n1, n2, str) {
	maxMin = function (n1, n2, str) {
		return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
	}
	return maxMin(n2, n1, str)
}
_$phone = function (ob) {
	return _phone + $rules(ob)
}
_$tablet = function (ob) {
	return _tablet + $rules(ob)
}
function _pre() {
	yada = function (n) {
		n = N(n, 20)
		var str = ''
		_.t(n, function () {
			str += 'yada '
		})
		return str
	}
	$ct = function () {
//!: $.ct gives jQuery error
		return $.d().K('ct').id('ct')
	}
	_tablet = '@media screen and (max-width: 960px)'
	_phone = '@media screen and (max-width: 640px)'
//https://www.youtube.com/watch?v=fA1NW-T1QXc
	tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
	phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
	_bor = '5px solid red'
	_bulls = '&bull; &bull; &bull;'
	_dec = function (v, k) {
		return k + ':' + v + '; '
	}
	_brace = function (str) {
		return '{' + (str || '') + '}'
	}
}
function eh() {
	$styS = $styStr = unused = function (ob) {
		return J.s($sty(ob))
	}
	$.fn.T0 = function () {
		var d = this, g = G(arguments)
		d.E()
		g.e(function (str) {
			d.A($.h3(str))
		})
		return d
	}
	css = {
		//_ct:{dp:'fl'},
		'.flex-container': {
			display: 'flex', 'flex-direction': 'row',
			$W: 'w', 'justify-content': 'space-around',
			'align-content': 'flex-start', 'align-items': 'stretch'
		},
		'.flex-items-default': {
			width: '300px', height: '250px',
			'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
		},
		'.flex-item-1': {
			width: '100px',
			height: '100px',
			'flex-grow': 1,
			'flex-shrink': 0,
			'flex-basis': '98%'
		},
		'.flex-item-2': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
		},
		'.flex-item-3': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-4': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-5': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
		}
	}
	$.fn.T0 = function () {
		var d = this, g = G(arguments)
		d.E()
		g.e(function (str) {
			d.A($.h3(str))
		})
		return d
	}
}
$L('plugs', 'mixs', 'helps', 'defs')
function plugs() {
// PLUGINS ARE FUNCTIONS THAT EXTEND THE CSS OBJECT
	$s.plugins = {
		// these are functions that take pams
		// and ctx-bound to the dec obj
		// so its main use is to add decs directly on it
		// but one function can add multiple decs
		//(plugins)
	}
	/*
	
	 example:
	 {	
	 d: {C:'r'},
	 plugins : {	doSomething : ['red', 6]	}
	 }
	
	 $s.doSomething = function(color, num){
	 this.somethingElse = color + num
	 }
	
	 */
	$plugin = function (decs) {
		if (decs.plugins) {
			_.e(decs.plugins, function (pams, pluginName) {
				var plugin = $s.plugins[pluginName]
				if (F(plugin)) {
					A(pams) ? plugin.apply(decs, pams) :
							_.b(plugin, decs)(pams)
				}
			})
		}
	}
}
function mixs() {
// MIXINS ARE OBJECTS THAT EXTEND THE CSS OBJECT
	$s.mixins = $s.mx = {
		// this lets you associate a selector with a bunch
		// of declarations at once, and you can add more, too
	}
	$s.mixins.icon = {
		transition: 'background-color ease .2s',
		margin: '0 .5em'
	}
	$mixin = function (decs, rules) {
		_.e(decs.mixins || {}, function (mixin) {
			_.x(decs, rules && rules[mixin] ?
					rules[mixin] : ($s.mixins[mixin] || {}))
		})
		//tries to extend from one of its own first
		//then goes to global ($S.mx)
	}
}
function helps() {
// HELPERS ARE FUNCTIONS THAT RETURN VALUES FOR CSS PROPERTIES
	$s.helpers = $s.fn = {
		// (value-)helper functions:
		// lets you write/call functions that
		//produce a complicated value to a
		// particular property,
		// so you don't have to write out
		// the full location of the function
		// -helps with namespacing
	}
	$s.helpers.B = $s.fn.bor = function (c) {
		return '8px solid ' + oO('c', c || 'z')
	}
	FL2 = BASIS = function () {
		str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
		' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
		// http://jsfiddle.net/jakub_g/s5jAB/
		// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
		$s({
			_ch: {c: 'w', P: 10, M: 10},
			_ct: {
				C: 'y', P: 10,
				d: '$'
			},
			_ch1: {
				C: "u",
				fl: '8 1 600px'
			},// If there's more space, the first one grows 5x faster than the second.
			_ch2: {
				C: 'g',
				dp: 'fl',
				fl: '1 2 400px',
				wr: 'w'
			}, // If there's less space, the second one shrinks 3x faster than the first.
			d: {Bor: ['bor', 'b']}
		})
		$.dK('ct').A(
				$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
				div = $.dK('ch ch2').A('Two')
		)
		_.t(20, function () {
			$.d($r(), 40, 40).K('ch1').a2(div)
		})
		$s()
		/*
		
		 div { border:8px solid Blue; }
		 .ct { display:flex; padding:10px; background-color:Yellow; }
		 .ch { padding:10px; margin:10px; color:White; }
		 .ch1 { flex:8 1 600px; background-color:Purple; }
		 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
		
		
		
		 */
	}
	$s.helpers.bpLarge = function (cont) {
		return ['@media only screen and (max-width: 400px)', cont]
	}
	$s.helpers.bpMid = function (cont) {
		return ['@media only screen and (max-width: 600px)', cont
		]
	}
	$s.helpers.bpSmall = function (cont) {
		return [
			'@media only screen and (max-width: 800px)', cont
		]
	}
	$helperValue = function (v, k) {
		if (F($s.helpers[_.f(v)])) {
			return $s.helpers[_.f(v)].apply(null, _.r(v))
		}
		return $default(v, k)
	}
}
function defs() {
	$s.defaults = $s.df = {}
	$s.defaults.Bor = {}
	$s.defaults.Bor.b = '1px blue border'
	$s.d = function () {
		var g = G(arguments), rulesOb
		if (g.O) {
			rulesOb = g.f
		}
		else {
			rulesOb = {}
			rulesOb[g.f] = g.s
		}
		$s('div', rulesOb)
	}
	$default = function (v, k) {
		return $s.defaults[k] ?
				$s.defaults[k][_.f(v)] :
				null
	}
}
function _post() {
	$.fn.flx = $.fn.flex = $.fn.fl = function () {
		return this.css('display', 'flex')
	}
	$.fn.jfC = $.fn.jC = $.fn.$J = function (a) {
		return this.css('justify-content', a)
	}
	$.fn.alI = $.fn.$I = function (a) {
		return this.css('align-items', a)
	}
	$.fn.alC = $.fn.$C = function (a) {
		return this.css('align-content', a)
	}
	$s.bd = function (ob) {
		$s('body', ob)
	}
	$s.bt = function (ob) {
		$s('button', ob)
	}
	$phone = function (ob) {
		$.Sty(_$phone(ob))
	}
	$tablet = function (ob) {
		$.Sty(_$tablet(ob))
	}
	$CSS = function () {
		var res = $s.apply(null, arguments)
		$l(res)
		return res
	}
	vidHtml = function (css) {
		$s(_.x({
			bd: {dp: 'fl', jfC: 'c'},
			_ct: {w: 960, B: '20px solid yellow'},
			$right: {C: 'o', w: 260},
			$left: {C: 'b', w: 700},
			img: {
				w: 960, h: 400
			},
			_fl: {dp: 'fl', wr: 'wr'}
		}, css || {}))
		$ct().A(
				$.i('me'),
				$.d().K('fl').A(
						$.sc().id('left').A('this is the left column (a section)' + yada()),
						$.ac().id('right').A('this is the right column (an article)' + yada())
				))
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
	$cssApp = function (name, cssOb, fn) {
		return window[name] = function () {
			$s(cssOb)
			fn()
		}
	}
	$.flexy = function () {
		$s.d({	// cool: $s.d('margin', 10)
			margin: 10, display: 'flex',
			'justify-content': 'center',
			'flex-wrap': 'wrap'
		})
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
	/*
	 $s({
	 _ct: {
	 d: '$',
	 //  define  flow dir
	 // and
	 // if we allow the items to wrap
	 //  Remember this is the same as:
	 $D: 'r',
	 $W: 'w',
	 //      'flex-flow' : 'row wrap',
	 // Then we define how is distributed the remaining space
	 flJC: 'space-around'
	 }
	 })
	 */
}
//////////////////////////////////////////////////////
$.fn.s = $.fn.ss = function (css, val) {
	if (S(css)) {
		css = Ob(css, val)
	}
	css = $sty(css)
	return this.css(css)
}
$L('text', 'font', 'border', 'color', 'backgr', 'bckgrImg', 'xyz', 'size', 'margin', 'padding')
$.fn.k = $.fn.K = function () {
	$.fn.addClass.apply(this, arguments);
	return this
}
$.fn.tK = $.fn.ggK = $.fn.toggleClass
$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
function text() {
	$.fn.T = function () {
		var g = G(arguments)
		if (g.u) {
			return this.text()
		}
		this.text(g.f)
		return this
	}
	$.fn.tA = $.fn.textAlign = function (z) {
		this.css('text-align', z)
		return this
	}
}
function font() {
	$.fn.fS = $.fn.fZ = $.fn.fontSize = function (z) {
		this.css('font-size', z)
		return this
	}
	$.Fo = $.font = $f = function (a, b) {
		var g = G(arguments)
		if (O(a)) {
			return ss(
					oB(b), {fz: a || 50}
			)
		}
		a = N(a) ? _S(a) : U(a) ? '' : a;
		var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
		_.e(
				a.split(' '), function (p) {
					if (M(p[0])) {
						p = p.split('/')
						Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
					}
					F = Oo('ff', p) || F
					W = Oo('fw', p) || W
					S = Oo('fs', p) || S
				}
		)
		return [W, S, Z, F].join(' ')
	}
}
$.Ol = $.outline = function OL() {
	var g = G(arguments), o, ol
	o = g.N_ ? {w: g.f} :
			Oo('c', o) ?
			{c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
	/*
	 if(S(g.f)){
	 o= g.f.split(' ')
	 ol= _.j([
	 $r('c',o[0]),  oO('ow',o[1]||5) +'px',
	 oO('os',o[2]||'-') ])
	 $l(ol)
	 return ol}
	 ol=  _.j([
	 $r('c',o.c),
	 N(o.w)? o.w+'px'$r('ow',o.w),
	 $r('os',o.s)
	 ])*/
	//$l( ol )
	return ol
}
function border() {
	$.fn.bdC = $.fn.borCol = $.fn.bdC = $.fn.borderColor = function (a) {
		return this.css("border-color", oO('c', a || 'r'))
	}
	$.fn.bS = $.fn.borSty = $.fn.borderStyle = function (style) {
		this.css('border-style', style)
		return this
	}
	$.fn.borWidth = $.fn.bW = $.fn.borderWidth = function (w) {
		this.css('border-width', w)
		return this
	}
	$.fn.bor = function (border) {
		if (U(border)) {
			return this.css('border')
		}
		this.css('border', border);
		return this
	}
}
function bckgr() {
	$.fn.bg = function (bg) {
		if (U(bg)) {
			return this.css('background')
		}
		this.css('background', bg)
		return this
	}
	$.fn.bgP = function (bg) {
		if (U(bg)) {
			return this.css('backgroundPosition')
		}
		this.css('backgroundPosition', bg)
		return this
	}
}
function bckgrImg() {
	$.fn.bgI = function (url) {//set background image
		this.bgI('url("' + $.src(url) + '")');
		return this
	}
	$.fn.pBgI = $.fn.bp = function (x, y) {
		var g = G(arguments), x = g[0], y = g[1];
		x = N(x) ? x : 0;
		y = N(y) ? y : 0;
		this.css({backgroundPos: x + 'px ' + y + 'px'});
		return this
	}
}
$.fn.dp = $.fn.display = function (v) {
	var q = this, g = G(arguments)
	return U(v) ? q.css('display') :
			q.css('display', v)
}
$.fn.ps = $.fn.pos = $.fn.P = $.fn.p = function (pos, x, y) {
	var q = this, g = G(arguments)
	if (g.u) {
		return q.css('position')
	}
	q.css('position', oO('p', pos))
	if (N(g.s)) {
		q.X(g.s)
	}
	if (g.t) {
		q.Y(g.t)
	}
	return q
}
$.fn.psA = $.fn.ab = $.fn.abs = function (x, y) {
	return this.P('a', x, y)
}
function size() {
	$.fn.sz = function (sz) {
		return this.at('size', sz)
	}
	$.fn.ouH = $.fn.outerHeight
	$.fn.W = function (w) {
		return w ? this.width(w) : this.width()
	}
	$.fn.H = function (h) {
		return h ? this.height(h) : this.height()
	}
	$.fn.WH = function (w, h) {
		h = h || w;
		return this.W(w).H(h)
	}
	$.fn.MW = $.fn.maxW = function (a) {
		return this.css('max-width', a)
	}
	$.fn.mW = $.fn.minW = function (a) {
		return this.css('min-width', a)
	}
	$.fn.mH = $.fn.minH = function (a) {
		return this.css('min-height', a)
	}
	$.fn.maxH = function (a) {
		return this.css('max-height', a)
	}
	$.fn.Z = function (w, h) {
		return this.W(w).H(h || w)
	}
	$.fn.oH = $.fn.outerHeight
	$.fn.long = function () {
		return this.css({width: '100%'})
	}
}
function xyz() {
	$.fn.getPosition = $.fn.getTotalOffset = function () {
		alert('$.fn.getPosition')
		var e = this, x = 0, y = 0
		while ($.tEl(e) && e.tagName) {
			y += e.offsetTop
			x += e.offsetLeft
			if (isBodyElement(e)) {
				e = 0
			}
			e = e.offsetParent || e
		}
		return {x: x, y: y}//just gets the TOTAL offset of ANY element
	}
	$.fn.X = function (l) {
		var q = this, g = G(arguments)
		if (N(l)) {
			q.css(
					'left',
					g.p ? q.X() + l :
							l
			)
			return q
		}
		l = q.css('left')
		return l == 'auto' ? 'auto' : parseInt(l)
		/*
		 $.fn.X = $.fn.left = function (left) {
		 if (N(left)) {
		 return this.css('left', left)
		 }
		 var left = this.css('left')
		 if (left == 'auto') {
		 return 'auto'
		 }
		 return parseInt(left)
		 }
		 */
	}
	$.fn.Y = $.fn.top = function (top) {
		if (N(top)) {
			return this.css('top', top)
		}
		var top = this.css('top')
		if (top == 'auto') {
			return 'auto'
		}
		return parseInt(top)
		/*
		 $.fn.Y = $.fn.top = function (top) {
		 if (N(top)) {
		 return this.css('top', top)
		 }
		 var top = this.css('top')
		 if (top == 'auto') {
		 return 'auto'
		 }
		 return parseInt(top)
		 }
		 */
	} //$.fn.t
	$.fn.XY = function (x, y) {
		x = N(x) ? x : 0
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
		/*
		 $.fn.XY = function (x, y) {
		 x = N(x) ? x : 0
		 if (U(y)) {
		 y = x
		 }
		 return this.X(x).Y(y)
		 }
		 */
	}
	$.fn.L = $.fn.l = $.fn.left = function (l) {
		var q = this, g = G(arguments)
		if (N(l)) {
			q.css('left', l)
			return q
		}
		l = q.css('left')
		return l == 'auto' ? 'auto' : q.position().left
		function old() {
			$.fn.L = function (n) {
				if (U(n)) {
					return this.css('left')
				}
				this.css('left', n)
				return this
			}
		}
	}
	$.fn.right = $.fn.R = $.fn.rit = function (right) {
		if (U(right)) {
			return this.css('right')
		}
		this.css('right', right)
		return this
	}
	$.fn.LR = function (l, r) {
		var q = this
		if (O(l)) {
			r = l.r;
			l = l.l
		}
		if (N(l)) {
			q.L(l)
		}
		if (N(r)) {
			q.R(r)
		}
		return q
	}
	$.fn.bottom = $.fn.bot = $.fn.B = function (bottom) {
		if (U(bottom)) {
			return this.css('bottom')
		}
		this.css('bottom', bottom)
		return this
	}
	$.fn.zi = $.fn.zIndex = function (z) {
		if (U(z)) {
			return this.css('z-index')
		}
		this.css('z-index', z);
		return this
	}
	$.fn.os = function () {
		var os = this.offset()
		return os
	}
}
function margin() {
	$mar = $.mar = function () {
		var g = G(arguments), o
		o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
				N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
						N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
								N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
										'10px 10px 10px 10px'
		return o
	}
	$.fn.mgT = function (a) {
		return this.css("margin-top", a || 0)
	}
	$.fn.mar = function (margin) {
		if (U(margin)) {
			return this.css('margin')
		}
		this.css('margin', margin);
		return this
	}
	$.fn.marBottom = $.fn.mB = $.fn.marBottom = function (margin) {
		if (U(margin)) {
			return this.css('marginBottom')
		}
		this.css('marginBottom', margin);
		return this
	}
	$.fn.marTop = $.fn.mT = $.fn.marTop = function (margin) {
		if (U(margin)) {
			return this.css('marginTop')
		}
		this.css('marginTop', margin);
		return this
	}
	$.fn.marLeft = $.fn.mL = $.fn.marLeft = function (margin) {
		if (U(margin)) {
			return this.css('marginLeft')
		}
		this.css('marginLeft', margin);
		return this
	}
	$.fn.marRight = $.fn.mR = $.fn.marRight = function (margin) {
		if (U(margin)) {
			return this.css('marginRight')
		}
		this.css('marginRight', margin);
		return this
	}
	$.fn.marHor = $.fn.mH = $.fn.marHor = function (a) {
		return this.marLeft(a).marRight(a)
	}
	$.fn.mV = $.fn.marVer = $.fn.marVer = function (a) {
		return this.marTop(a).marBottom(a)
	}
}
$.fn.pdB = function (a) {
	return this.css("padding-bottom", a || 0)
}
$.fn.pad = function (a) {
	return this.css("padding", a || 0)
}
$.fn.pad = function (padding) {
	if (U(padding)) {
		return this.css('padding')
	}
	this.css('padding', padding);
	return this
}
$.fn.padTop = function (padding) {
	if (U(padding)) {
		return this.css('paddingTop')
	}
	this.css('paddingTop', padding);
	return this
}
$.fn.padBottom = function (padding) {
	if (U(padding)) {
		return this.css('paddingBottom')
	}
	this.css('paddingBottom', padding);
	return this
}
$.fn.padLeft = function (padding) {
	if (U(padding)) {
		return this.css('paddingLeft')
	}
	this.css('paddingLeft', padding);
	return this
}
$.fn.padRight = function (padding) {
	if (U(padding)) {
		return this.css('paddingRight')
	}
	this.css('paddingRight', padding);
	return this
}
$.fn.padHor = function (a) {
	return this.padLeft(a).padRight(a)
}
$.fn.padVer = function (a) {
	return this.padTop(a).padBottom(a)
}
$.fn.pad = function (padding) {
	if (U(padding)) {
		return this.css('padding')
	}
	this.css('padding', padding);
	return this
}
$.fn.pT = $.fn.padTop = function (padding) {
	if (U(padding)) {
		return this.css('paddingTop')
	}
	this.css('paddingTop', padding);
	return this
}
$.fn.pB = $.fn.padBottom = function (padding) {
	if (U(padding)) {
		return this.css('paddingBottom')
	}
	this.css('paddingBottom', padding);
	return this
}
$.fn.pL = $.fn.padLeft = function (padding) {
	if (U(padding)) {
		return this.css('paddingLeft')
	}
	this.css('paddingLeft', padding);
	return this
}
$.fn.pR = $.fn.padRight = function (padding) {
	if (U(padding)) {
		return this.css('paddingRight')
	}
	this.css('paddingRight', padding);
	return this
}
$.fn.pH = $.fn.padHor = function (a) {
	return this.padLeft(a).padRight(a)
}
$.fn.pV = $.fn.padVer = function (a) {
	return this.padTop(a).padBottom(a)
}
$.fn.ov = $.fn.overflow = function (overflow) {
	var q = this, g = G(arguments)
	if (U(overflow)) {
		return q.css('overflow')
	}
	q.css('overflow', overflow);
	return q
}
function color() {
	$.toColor = function (n1, n2, n3, n4) {
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
	}
	$.fn.al = function (z) {
		if (U(z)) {
			return this.css('opacity')
		}
		this.css('opacity', z)
		return this
	}
	$.fn.col = function (col) {
		return this.css('color', oO('c', col))
	}
	$.fn.C = function (col, c2) {
		if (c2) {
			return this.C(col).col(c2)
		}
		if (col == '*') {
			col = Yano.random()
		}
		return this.css('backgroundColor', oO('c', col))
	}
	$.C = function (Col, col) {
		var bd = $('body')
		bd.C(Col)
		if (col) {
			bd.col(col)
		}
		return $
	}
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
UI_hide = function ($el) {
	return $el.rmK("ui-helper-hidden-accessible");
}
UI_btRm = function ($el) {
	$el.button.button("destroy").remove();
	return $el
}
$.fn.UIHide = function () {
	return this.K("ui-helper-hidden-accessible")
}
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
//to use bootstrap with jqui!!!
//http://www.ryadel.com/2015/01/03/using-jquery-ui-bootstrap-togheter-web-page/
// http://api.jqueryui.com/jQ.widget.bridge/
$.fn.dgb = $.fn.draggable
$.fn.dpb = $.fn.droppable
$.fn.ef = $.fn.effect
$.fn.zLite = function (type, icon) {
	var e = this
	icon = icon ? icon : (type === 'highlight') ?
			'ui-icon-info' : 'ui-icon-alert'
	return e.each(function () {
		var d
		$(this).K('ui-widget')
		d = $.d([$.sp().K("ui-icon '+icon+'").css({float: 'left', 'margin-right': '3em'}),
			$(this).text()])
		d.K('ui-state-' + type + 'ui-corner-all').css({padding: '0 .7em'})
		$(this).html(d)
	})
}
$.fn.error = function () {
	this.zLite('error')
}
$.fn.highlight = function () {
	this.zLite('highlight')
}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.fI = $.fn.fadeIn
$.fn.wd = $.fn.wg = $.fn.wid = $.fn.widget
$.fn.hd = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'up') {
			o.d = 'up'
		}
		if (o.d == 'down') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.hide(ef, o, ms)
}
$.fn.sh = function (ef, o, ms) {
	if (ef == 'sl') {
		ef = 'slide'
	}
	if (o && o.d) {
		if (o.d == 'l') {
			o.d = 'left'
		}
		if (o.d == 'r') {
			o.d = 'right'
		}
		if (o.d == 'u') {
			o.d = 'up'
		}
		if (o.d == 'd') {
			o.d = 'down'
		}
		o.direction = o.d
	}
	return this.show(ef, o, ms)
}
$.fn.ps = $.fn.position
$.fn.tIx = function (a, b) {
	a = this.at('tabindex', a)
	if (b) {
		a.v(b)
	}
	return a
}
$.fn.dtp = $.fn.datepicker // CSS Framework
//   list of the class names
// used by jQuery UI.
// The classes are designed to
// create a visual consistency
// across an application
// and allow components
// to be themeable by jQuery UI ThemeRoller.
// The class names are split
// between ui.core.css and ui.theme.css,
// depending on whether styles are
// fixed and structural, or themeable
// (colors, fonts, backgrounds, etc) respectively.
//jqAnim:
$.fn.bt = function (op) {
	this.bt(op)
	return this
}
cols = {red: M.fl(M.r() * 256), green: M.fl(M.r() * 256), blue: M.fl(M.r() * 256)}
Col = function (op) {
	var rgb = "rgb(" + op.red + "," + op.green + "," + op.blue + ")"
	return rgb
}
$.wd("custom.colorize", {
	// default options
	options: {
		red: 255, green: 0, blue: 0,
		change: null,
		random: null
	},
	// the constructor
	_create: function () {
		var wd = this, q = wd.element
		// prevent double click to select text
		q.K('col').disableSelection()
		// bind click events on the changer button to the random method
		// _on won't call random when widget is disabled
		var bt = wd.changer = $.bt('change')
				.K('changer').a2(q).C('z', 'w')
		wd._on(bt, {click: "random"})
		wd._refresh()
	},
	// called when created, and later when changing options
	_refresh: function () {
		var wd = this, op = wd.options, q = wd.element
		q.C(Col(op))
		wd._trigger("change")
	},
	random: function (ev) {
		// a public method to change the color to a random value
		// can be called directly via .colorize( "random" )
		var wd = this, op = wd.options,
				q = wd.element
		// trigger an event, check if it's canceled
		if (wd._trigger("random", ev, cols)) {
			wd.option(cols)
		}
	},
	_destroy: function () {
		// events bound via _on are removed automatically
		// revert other modifications here
		var wd = this, op = wd.options,
				q = wd.element
		// remove generated elements
		wd.changer.rm()
		q.rmK("col").enableSelection()
				.C("transparent")
	},
	_setOptions: function () {
		// _setOptions is called with a hash of all options that are changing
		// always refresh when changing options
		var wd = this, op = wd.options,
				q = wd.element, g = G(arguments)
		// _super and _superApply handle keeping the right this-context
		wd._superApply(g)
		wd._refresh()
	},
	_setOption: function (k, v) {
		// _setOption is called for each individual option that is changing
		var wd = this, op = wd.options,
				q = wd.element
		// prevent invalid color values
		if (/red|green|blue/.test(k) && (v < 0 || v > 255)) {
			return
		}
		wd._super(k, v)
	}
})
  
// FROM THIS AMAZING VIDEO (not on youtube): https://vimeo.com/22686559
$.wg("aj.flb", {//filterable
	options: {k: ''},
	_create: create,
	_hover: function (e) {
		var q = $(e.target)
		q.tK("ui-state-active",
				e.type === "mouseenter")
		this._trigger("hover", e, {hovered: q})
	},
	_setOption: function (k, v) {
		var g = G(arguments)
		switch (k) {
			case "length":
				break
		}
		return this._superApply(g)
	},
	_destroy: function () {
		var wg = this
		wg.flIp.parent().rm()// Remove any new elements that you created
		wg.flEls.rK(
				"ui-widget-content ui-helper-hidden ui-state-active " +
				wg.op.k) // Remove classes you applied
		return wt._super()
	},
	filter: function filt(e) {
		var wg = this
		// Debounce the keyup event with a timeout, using the specified delay
		_.cT(wg.timeout)
		wg.timeout = wg._delay(
				function () {
					
					// Trigger a callback so the user
					// can respond to filtering being complete
					// Supply  an object of useful
					// parameters with the second argument to _trigger
					this._trigger("filtered", event, {
						visible: this.filterEls.filter(function () {
							var q = $(this)
							var matches = $REi(wg.filterIp.val()).test(q.text())
							q.tK("ui-helper-hidden", !matches)
							return matches
						})
					})
				},
				op.delay
		)
	}
})

function create() {
	var wg = this, q = wg.element, op = wg.options
	q.ch().K("ui-widget-content " + op.k)
	wg.filterIp = $.ip().iBf(q).wr($.dK('ui-widget-header', op.k))
	wg.timeout = false
	wg._on(q.ch(), {
		mouseenter: "_hover",
		mouseleave: "_hover"
	})
	this._focusable(ip)   // :toggles ui-state-focus
	// _hoverable works for ui-state-hover,
	// but we will do something slighty different in our hover
	this._on(ip, {
		keyup: "filter"
	})
}
// book, movement: pleasurable js (or javascript for pleasure)
Blog = Bb.M.x({
	idAttribute: "_id",
	D: {user: '', title: '', url: ''}
})
Blogs = Bb.C.x({
	model: Blog,
	url: '/api/blogs'
})
CollView = Bb.V.x({
	I: function () {
		var view = this
		view.model.on('all', function () {
			_.in(.03, function () {
				view.R()
			})
		})
		/*
		 //this.collection.on('add', this.R, this)
		 //this.collection.on('remove', this.R, this)
		 this.collection.fetch({
		 success: function (docs) {
		 if (docs) {
		 $l('there are doc')
		 $l(docs)
		 _.each(docs.toJSON(), function (item) {
		 $l('got blog with _id: ' + item._id)
		 })
		 }
		 },
		 error: function () {
		 $l('failed to get blogs!')
		 }
		 })*/
	},
	R: function () {
		var view = this.H('')
		view.model.each(function (model) {
			view.A((new view.subView({model: model})).R().el)
		})
		return view
	}
})
GenView = Bb.V.x({
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(view.G(view.J()), function (el) {
			view.A(el)
		})
		return view
	}
})
$.td.kids = function () {
	var g = G(arguments)
	var kids = g.A ? g.f : g
	return _.m(kids, function (o) {
		var td = $.td()
		_.e(A(o) ? o : [o], function (ch) {
			td.A(ch)
		})
		return td
	})
}
tdFn = function (fn) {
	return function (ob) {
		var kids = fn(ob)
		return $.td.kids.apply(null, kids)
	}
}
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
KOob = {
	e: 'foreach',
	ch: 'checked', c: 'checked',
	t: 'text',
	v: 'value',
	h: 'html',
	i: 'if',
	$: 'click',
	fc: 'hasFocus', hF: 'hasFocus', f: 'hasFocus',
	w: 'with',
	at: 'attr', a: 'attr',
	en: 'enable',
	vs: 'visible', tI: 'textInput',
	o: 'options',
	oT: 'optionsText',
	ev: 'event',
	sm: 'submit',
	sO: 'selectedOptions',
	n: 'ifnot',
	d: 'disable',
	///////////
	u: 'uniqueName', vU: 'valueUpdate',
	cm: 'component', tp: 'template',
	////////////////////
	s: 'css', sty: 'style', y: 'style'
}
ko.ut = ko.u = ko.utils
ko.cm = ko.components
ko.vE = ko.ve = ko.virtualElements
ko.aB = ko.ab = ko.applyBindings
ko.o = ko.observable
ko.c = ko.computed
ko.pC = ko.pc = ko.pureComputed
ko.oA = ko.oa = ko.observableArray
ko.aF = ko.ut.aF = ko.u.af = ko.u.arrayFilter
ko.cm.rg = ko.cm.register
ko.bH = ko.bh = ko.BH = ko.bindingHandlers
ko.rTp = ko.rT = ko.renderTemplate
ko.dO = ko.do = ko.dependentObservable
ko.uw = ko.unwrap
ko.ut.uo = ko.ut.unwrapObservable
ko.bD = ko.applyBindingsToDescendants
ko.cm.iR = ko.cm.isRegistered
ko.vE.aB = ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
ko.cm = ko.cmp = ko.comp = ko.components
ko.rg = ko.cm.rg = ko.cm.reg = ko.cm.register
ko.cm.iR = ko.cm.isRegistered
ko.o.prototype.rm = ko.o.prototype.remove
//$.sl.o$ = function (a) {return $.sl().o$(a)}//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO

t$sp = function () {
}
v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
}
$.fn.h$ = function (s) {
	//= $.fn.bH 
	return this.b('html', s)
	// = $.fn.bH
}
$.fn.t$ = function (bnd) {
	return this.b('text', bnd || '$data')
}
$.fn.at$ = $.fn.a$ = function (s) {
	return this.b('attr', s)
}
$.fn.v$ = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.fc$ = $.fn.f$ = function (s) {
	return this.b('hasFocus', s)
}
$.fn.if$ = function (s) {
	return this.b('if', s)
	// = $.fn.bI = $.fn.bIf
}
$.fn.n$ = $.fn.not$ = function (s) {
	return this.b('ifnot', s)
}
$.fn.en$ = function (s) {
	return this.b('enable', s)
}
$.fn.d$ = function (s) {
	return this.b('disable', s)
}
$.fn.vs$ = function (bnd) {
	return this.b('visible', bnd)
}
$.fn.w$ = function (s) {
	return this.b('with', s)
}
$.fn.cl$ = $.fn.b$ = function (s) {
	return this.b('click', s)
}
$.fn.ev$ = function (s) {
	return this.b('event', s)
}
$.fn.ch$ = function (bnd) {
	return this.b('checked', bnd)
}
$.fn.tI$ = function (s) {
	return this.b('textInput', s)
}
$.fn.st$ = function (s) {
	return this.b('style', s)
}
$.fn.css$ = function (s) {
	//= $.fn.bS
	return this.b('css', s)
}
$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
	return this.b('options', s)
}
$.fn.sO$ = $.fn.bSO = function (s) {
	return this.b('selectedOptions', s)
}
$.fn.sm$ = function (s) {
	return this.b('submit', s)
}
$.fn.u$ = $.fn.uN$ = function (s) {
	return this.b('uniqueName' + s)
}
$.fn.tp$ = $.fn.bTp = function (s) {
	return this.b('template', s)
}
$.fn.e$ = function (s) {
//return this.b('foreach',S)
// = $.fn.bE
	// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
	var q = this, g = G(arguments)
	return g.p ? '$data.' + s : q.b('foreach', s)
//= $.fn.bindKOEach = $.fn.koE = $.fn.eKo = $.fn.bE = $.fn.ko_e 
}
$.fn.e$da = function (a) {
	//=$.fn.eD = $.fn.eB =  $.fn.bindKOEachData 
	return this.b('$data.' + a)
}
$o = function () {
	var g = G(arguments)
	g[0] = D(g.f) ? g.f :
			D(g.s) ? g.s : g.n ?
					0 : 1
	return ko.o.apply(ko, g)
}
$oA = $oa = function () {
	var g = G(arguments)
	return ko.oA(g.A_ ? g.f : g)
}
$cO = $c = function () {
	return ko.computed.apply(ko, arguments)
}
$.fn.dB = function (dB, p2) {
	return this.at({'data-bind': p2 ? (dB + ':' + p2) : dB})
}
$.fn.ko = function (a, b) {
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		this.b($l(o.join()))
	}
	else {
		if (KOob[a]) {
			a = KOob[a]
		}
		str = a + ':' + b;  // str= oO('b', a)
		this.at({'data-bind': str})
	}
	return this
}
$.fn.b = function (a, b) {
	var q = this, g = G(arguments)
	var str = g.O ? $KOob(g.f) :
			hasCln(a) ? a :
					$KOob(a, b || 't')
	return q.dB(str)
	function hasCln(str) {
		return str.indexOf(':') != -1
	}
}
ok$ = function (vm, app) {
	var g = G(arguments)
	$.app(g.r)
	ok(vm)
}
ok.oA = function (key, oA) {
	ok($Ob(key, $aO(oA)))
}
ko.$oa = function (name, fn) {
	ko.oa.fn[name] = fn
}
$.ko = function () {
}
t$ = ok.t$ = t$d = $.d.t$ = function (bd, textVal) {
	return $.sp().t$(bd).A(textVal || '')
}
cl$ = function (bnd, btTx) {
	var g = G(arguments)
	var bt = $('<button>').A()
	bt.cl$(bnd)
	bt.A(D(btTx) ? btTx : bnd)
	return bt
}
vs$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).vs$(bnd)
}
v$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).v$(bnd)
}
fc$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).fc$(bnd)
}
tI$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).tI$(bnd)
}
pw$ = function (bnd, kids) {
	var g = G(arguments)
	return $.pw(A(g.s) ? g.s : g.r).tI$(bnd)
}
ch$ = function (bnd) {
	return $.cb().ch$(bnd)
}
ip$ = function (ob) {
	return $.ip().b(ob)
}
d$ = function (ob) {
	return $.d().b(ob)
}
w$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).w$(bnd)
}
Ms = function (a) {
	return $.sp(a)
}
$nav = function (pageName, rtr) {
	var nav = $.sp(pageName).K(pageName + '-nav')
	if (rtr) {
	}
	return nav
}
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}
$Rt = function (o, root) {
	if (!o['routes'] && !o['rts'] && !o['rt'] && !o['R']) {
		o = {routes: o}
	}
	return $rt(Bb.R.x(o), root)
}
rtr = Bb.R.prototype
$trg = function () {
	$ev.trigger.apply($ev, arguments)
}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
V$R = function (fn) {
	return V$({R: fn})
}
Bb.Co = Bb.Controller = function (Vw, md) {
	return new Vw({model: md})
}
Bb.el = function (Vw, md) {
	return new Vw({model: md}).el
}
$start = $route = function () {
	_$start = function () {
		Bb.h.s()
	}
	Bb.h.s({pushState: true})
	return new Rtr
}
sRtr = function (rtr) {
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
	rtr.rt = rtr.A = rtr.oR = function (rt, fn) {
		var rtr = this
		if (O(rt)) {
			//_.e(rt, function (v, k) {rtr.on('route:' +k, v)})
		}
		else {
			rtr.on('route:' + rt, fn)
		}
		return rtr
	}
	rtr.rp = function (url, op) {
		return this._n(url, _.x({replace: true},
				G(arguments).n ? {trigger: true} : {}))
	}//navigate: replace
// history:
	rtr.Fn = function () {
		return function (url) {
			this.N(url)
		}
	}
	return rtr
}
$R = $Rtr = R$ = function (ob) {
	ob = ob || {}
	if (O(ob.R)) {
		ob.routes = ob.R
	}
	ob.routes = ob.R ? ob.R : (ob.routes || ob.rt || ob.r || {}) //if (ob.i) {ob.initialize = ob.i}
	//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
	//if (ob.x) {ob.index = ob.x}
	//if (ob.h) {ob.home = ob.h}
	//ob.routes[''] = ob.routes[''] || 'index'
	//ob.routes = _.x({'': '_'}, ob.routes)
	//ob.routes['*other'] = 'd'
	//ob = _.x({
	//_: function () {$l('INDEX ( _ ) ')},
	//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
	//}, ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
	//metaClass.. no need for 'new' //= $$R
	var rtr = Bb.R.x(ob)
	return rtr
	//rt._ = _$start
	//rt.$ = $start
	// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 
// BEST VIDEO (WATCH ALL, KNOW ALL) https://www.youtube.com/watch?v=cIq6Z_Vv4nY
// RTR ALL U NEED TO KNOW!!!   https://www.youtube.com/watch?v=cIq6Z_Vv4nY
}
$RoApp = function (name, CALLBACK) {
	window[name] = function () {
		name = name.toUpperCase()
		$.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
		$.sp(name).fS(100).C('o', 'x')
		$.hr()
		d = $.d().id('ct').fS(40)
		CALLBACK()
		Bb.h.s({pushState: true, root: "/box/" + name + "/"})
	}
}
$rt = function (Rtr, root, ob) {
	if (Rtr) {
		rtr = rt(Rtr, ob)
	}
	Bb.h.s({
		root: root,
		pushState: true
	})
	return rtr
	function rt(Rtr, ob) {
		return sRtr(new Rtr(ob))
	}
}
function ach$$$() {
	V$i = function (ob) {
		if (F(ob)) {
			ob = {R: ob}
		}
		ob.I = 1
		return V$(ob)
	}
	$FirstVw = V$i(function () {
		var $$lb = $.lb('My 1st View')
		var $$a = $.a('Go to 2nd View', 'sec')
		this.A(ll.oh($$lb, ll, $$a))
	})
	$SecVw = V$i({
		R: ll.TpFn(ll($.lb('My 2nd View'),
				$.br(), $.a().hr('first').A('Go to 1st View')))
	})
}
//http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
R$R = $rR = function (fn) {
	return R$({R: fn})
}
anchorClickBlocker = function () {
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
	$('body').on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		r.n($(this).attr('href'))
	})
}
knockAncs = function (ev) {
	ev.preventDefault()
	rtr.n($(this).attr('href',
			{trigger: true}))
}
$TrRtrFn = notUsed = function (rtr, fn) {
	//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
	return function (md) {
		$Trg(rtr, fn(md))
	}
}
$.k = function (k) {
	var q = $.sp()
	q.K(k)
	return q
}
server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
ch$cb = function (bnd) {
	return $.cb().ch$(bnd)
}
$d_ch$cb = $d.ch$cb = function (text, ch$) {
	$.d().A(ch$cb(ch$), text)
}
spCh$Cb = sp_Ch$Cb = function () {
}
ch$cb = function (bnd) {
	return $.cb().ch$(bnd)
}
$d_ch$cb = $d.ch$cb = function (text, ch$) {
	$.d().A(ch$cb(ch$), text)
}
_$_ = function (a) {
	a = a || ''
	return $('<' + a + '>')
}
e$ = function (bnd, kids) {
	var g = G(arguments)
	var sp = $.sp(A(g.s) ? g.s : g.r)
	sp.e$(bnd)
	return sp
}
VoteFns = function (vm, whats) {
	_.e(A(whats) ? whats : [whats], function (what) {
		vm[what] = function () {
			vm.vote(what)
		}
	})
	return vm
}
Prod = function (name, op) {
	return {name: name, op: $o(op)}
}
//	return VoteFns(vm = {vote: pmOb.vote || ''}, ['like', 'hate'])
//can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()
$.mar = function (num) {
	$s({$: {M: N(num, 10)}})
	return $
}
ok$o = function (key, val) {
	vm = $Ob(key, $o(val))
	ok(vm)
}
$.fn.aI = function () {
	var i = $.i.apply(null, arguments)
	return this.A(i)
}
$.red = function () {
	return $.d().C('r')
}
$.blue = function () {
	return $.d().C('b')
}
$.green = function () {
	return $.d().C('g')
}
$.fn.crD = function () {
	var q = $.d.apply(null, arguments)
	this.A(q)
	return q
}
