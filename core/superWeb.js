$.fn.e = $.fn.ea = $.fn.each
$.fn.f = $.fn.fi = $.fn.find
$.fn.hd = $.fn.hide
$.fn.sh = $.fn.show
$.fn.gg = $.fn.toggle
$.fn.oh = function () {
	return this[0].outerHTML
}
$.fn.h = $.fn.ht = $.fn.html
$.fn.t = $.fn.tx = $.fn.text
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
$.fn.iB = $.fn.insertBefore
$.fn.iA = $.fn.insertAfter
$.fn.wr = $.fn.wrap
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
$.fn.tt = $.fn.ti = function (a) {
	this.at('title', a)
	return this
}
$.fn.d = $.fn.da = $.fn.data
function ajax() {
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
$.E = function () {
	$.bd().E()
}
ajax()
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass 
function ooOO(){
	oOo = function oOo(a, b) {
		if (_.isUndefined(b)) {
			return _I(lC(V(oO(a))))
		}
		if (oOo(a)[lC(b)]) {
			return b
		}
	}
	Oo = _.defaults(function o(a, b) {
		if (D(b)) {
			return o[a] && ( o[a][b] || oOo(a, b))
		}
	}, ooo)
	oO = _.defaults(function oO(a, b, c) {
		return _.isUndefined(a) ? _.keys(f)
				: '*' == b ? $r(a)
				: D(c) ? oO(oO(c, a), b)
				: _.isUndefined(b) ? D(function (x, y) {
			return oO(a, x, y)
		}, oO[a] || {})
				: (oO[a] && oO[a][b]) ?
				oO[a][b]
				: b
	}, ooo)
	oC = function (c) {
		return oO('c', c)
	}
	oK = function (a) {
		return oO('k', a)
	}
	oT = function (a) {
		return oO('t', a)
	}
	oE = function (a) {
		return oO('e', a)
	}
	oI = function (a) {
		return oO('i', a)
	}
	oS = function (a) {
		return oO('s', a)
	} //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
	oQ = function (f, m) {
		$(function () {
			Q(m || mf, f)
		})
	}
	oO.V = function (a) {
		return _.values(S(a) ? oO(a) : a)
	}
	oOo = function oOo(a, b) {
		if (_.isUndefined(b)) {
			return _I(lC(V(oO(a))))
		}
		if (oOo(a)[lC(b)]) {
			return b
		}
	}
	Oo = _.defaults(function o(a, b) {
		if (D(b)) {
			return o[a] && ( o[a][b] || oOo(a, b))
		}
	}, ooo)
	oO = _.defaults(function oO(a, b, c) {
		return _.isUndefined(a) ? _.keys(f)
				: '*' == b ? $r(a)
				: D(c) ? oO(oO(c, a), b)
				: _.isUndefined(b) ? D(function (x, y) {
			return oO(a, x, y)
		}, oO[a] || {})
				: (oO[a] && oO[a][b]) ?
				oO[a][b]
				: b
	}, ooo)
	$r = function (a, b) {
		a = a || 'c'; //cannot be 'color' ?? only abr??
		var values = _.values(oO(a))
		return Oo(a, b) || values[_.random(_.size(values) - 1)]
	}
}
ooOO()
$.fn.sz = function (sz) {
	return this.at('size', sz)
}
$w = $.wi = function () {
	return $(window)
}
$.rz = function (fn) {
	var g = G(arguments), wi = $.wi
	wi.rz(fn);
	if (g.p) {
		fn()
	}
	return wi
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
$.iQ = function (o) {
	return O(o) && F(o.ajaxStart)
}
$.iO$ = function (o) {
	return O$(o) && !$.iQ(o)
}
$al = function (er) {
	alert(er)
	return false
}
 
$.fn.fCt = function (str) {
	return this.fi(":contains(" + str + ")")
}
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
	return {x: x, y: y}
}//just gets the TOTAL offset of ANY element
$.fn.osP = function () {
	return this.offsetParent
}
 
$.toColor = function (n1, n2, n3, n4) {
	return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
}
$.fn.Z = function (w, h) {
	return this.W(w).H(h || w)
}
$.fn.oH = $.fn.outerHeight
$.fn.foc = $.fn.focus
$.pD = function (ev) {
	ev.preventDefault()
	return ev
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
	return name ? this.at('name', name) : this.at('name')
}
$.fn.idNm = function (id, nm) {
	this.id(id)
	this.nm(nm || id)
	return this
}
LJQFN = function () {
	z()
	css = {}
	css.redDivs = {
		div: {
			C: 'v', c: 'p',
			M: 20, P: 40, h: 420
		},
		span: {
			C: 'x'
		}
	}
	css.big = {div: {fZ: 100}}
	$CSS(css.redDivs)
	$CSS(css.big)
	d = $.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$.d().A('see ya')
	$('div').e(
			function () {
				console.log('this:', this)
			}
	)
	p = $('span').p()//.C('z')
	//r=	$('body').f('div').C("b")//.r()
}
_lS = localStorage
$w = window
z = function () {
	$('body').E()
}
function jqVal() {
	$.fn.v = $.fn.val
	$.fn.v_ = function () {
		var val = this.val();
		this.val('');
		return val
	}
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
function anim(){
	$.fn.st = $.fn.stop
	$.fn.fT = $.fn.f2 = $.fn.fadeTo
	$.fn.an = function (a, b, c, d) {
		var g = G(arguments), q = this
		//if (N(g.s)) {g.s *= 1000}
		this.animate(
				$.qs(g.f), g.s, g.t, g[3], g[4])
		return this
	}
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.st = $.fn.stop
	$.fn.f2 = $.fn.fadeTo
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
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
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
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
	$.an = function () {
		var bd = $.bd();
		return bd.j.apply(
				bd, G(arguments))
	}
	$.notAn = function (a) {
		return a.filter(':not(:animated)')
	}
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
}
anim()
$.c = $.can
inputs()
function inputs(){
	$.wh = function (a, b) {
		return D(b) ? a.which == b : a.which
	}
	KEYOB = KEYOBJ = {
		up: 38, u: 38,
		down: 40, d: 40,
		left: 37, l: 37,
		right: 39, r: 39,
		space: 32, s: 32,
		enter: 13, e: 13
	}
	$.kD = function self(key, fn) {
		if (O(key)) {
			_.e(key, function (fn, k) {
				if (s$(k).isUpper()) {
					$.kU(k.toLowerCase(), fn)
				}
				else {
					$.kD(k, fn)
				}
			})
			return
		}
		if (KEYOB[key]) {
			key = KEYOB[key]
		}
		$('body').on('keydown', function (e) {
			if (e.which == key) {
				fn(e, $.K)
			}
		})
	}
	$.kU = function (key, funk) {
		if (KEYOBJ[key]) {
			key = KEYOBJ[key]
		}
		$('body').on('keyup', function (e) {
			if (e.which == key) {
				funk(e, $.K)
			}
		})
	}
	$.K = {}
	$.space = function (fn) {
		return $.kD('space', fn)
	}
	KEYS = WHYQ = function () {
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
//function mouse() {
	$.mu = $.mouseup
	$.md = $.mousedown
	$.mm = $.mousemove
	$.fn.$ = function (fn) {
		return this.click(fn)
	}
	$.scroll = function (a) {
		return $(window).scroll(a || function () {
			$('body').C('*')
		})
	}
	$.fn.xPrp = function () {
		this.on('mousedown', function (e) {
			e.stopPropagation()
		})
		return this
	}
	$.fn.dg = $.fn.drag = function () {
		this.A()
		this.each(function () {
			$(this).css('top', $(this).position().top)
			$(this).css('left', $(this).position().left)
		})
		this.P('a')
		this.on('mousedown', function (e) {
			var el = $(this)
			var offset = el.offset(),
					deltaX = e.pageX - offset.left,
					deltaY = e.pageY - offset.top
			$('html').on('mousemove', function (e) {
				var x = e.pageX - deltaX,
						y = e.pageY - deltaY
				el.left(x)
				el.top(y)
			}).on('mouseup', function () {
				$(this).off()
			})
		})
		//touchDrg(element)
		return this
	}
	$.fn.hv = $.fn.hover
	$.fn.fc = $.fn.focus
	$.md = $.mousedown = function (fn) {
		$('body').on('mousedown', fn);
		return this
	}
	$.mu = $.mouseup = function (fn) {
		$('body').on('mouseup', fn);
		return this
	}
	$.mm = $.mousemove = function (fn) {
		$('body').on('mousemove', fn);
		return this
	}
	$.oMD = function (fn) {
		$.md(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	$.oMU = function (fn) {
		$.mu(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.oMM = function (fn) {
		$.mm(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.fn.$ = $.fn.click
	$.fn.hv = $.fn.hover
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pm = $.fn.pressmove = function (func) {
		var mouse_pressed
		this.mousedown(function () {
			mouse_pressed = true
		})
		this.mouseup(function () {
			mouse_pressed = false
		})
		this.mousemove(function (e) {
			if (mouse_pressed) {
				func(e)
			}
		})
		return this
	}
	$.fn.mp = $.fn.mousePoint = function (e, scale) {
		scale = N(scale) ? scale : 1
		return V(e.pageX / scale, e.pageY / scale)
	}
	$.fn.mU = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.tap = function (func) {
		this('body').on('keydown mousedown', func);
		return this
	}
	$.$ = function (f) {
		return $(document).on('click', _v(f))
		/*
		 $.$=function(){
		 var b=$('html')
		 b.click.apply(b, arguments)
		 return $
		 }*/
	}
	$.$$ = function (f) {
		return $(document).on('dblclick', _v(f))
		//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
	}
	$.click = m$ = function (f) {
		return $(document).on('click', _v(f))
	}
	$.dblclick = m$$ = function (f) {
		return $(document).on('dblclick', _v(f))
	}
	keys = function () {
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = 1
			$.K.L = 0
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = false
			$.K.l = 0;
			$.K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = 1
			$.K.dir = 'right'
			$.K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = 0;
			$.K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = 1;
			$.K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = 0;
			$.K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = 1;
			$.K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = 0;
			$.K.D = 1
		})
		function keys1() {
			$.kD('l', function () {
				if ($.test) {
					$l('left pressed')
				}
				$.K.l = 1
				$.K.L = 0
				$.K.dir = 'left'
			})
			$.kU('l', function () {
				if ($.test) {
					$l('left lifted')
				}
				$.K.l = false
				$.K.l = 0;
				$.K.L = 1
			})
			$.kD('r', function () {
				if ($.test) {
					$l('right pressed')
				}
				$.K.r = 1
				$.K.dir = 'right'
				$.K.R = 0
			})
			$.kU('r', function () {
				if ($.test) {
					$l('right lifted')
				}
				$.K.r = 0;
				$.K.R = 1
			})
			$.kD('u', function () {
				if ($.test) {
					$l('up pressed')
				}
				$.K.u = 1;
				$.K.U = 0
			})
			$.kU('u', function () {
				if ($.test) {
					$l('up lifted')
				}
				$.K.u = 0;
				$.K.U = 1
			})
			$.kD('d', function () {
				if ($.test) {
					$l('down pressed')
				}
				$.K.d = 1;
				$.K.D = 0
			})
			$.kU('d', function () {
				if ($.test) {
					$l('down lifted')
				}
				$.K.d = 0;
				$.K.D = 1
			})
		}
	}
	tou = function () {
		$.ts = $.touchstart
		$.te = $.touchend
		$.ts(function (e) {
			w._mD = 1
			$mXY(e)
			$.touchmove($mXY)
			function $mXY(e) {
				$l('mXY')
				var touch = e.originalEvent.touches[0]
				mX = (touch.clientX - w.x) // / 30
				mY = (touch.clientY - w.y) // / 30
			}
		})
		$.te(function () {
			w._mD = 0
		})
	}
}