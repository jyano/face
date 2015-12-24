$L('items')
$.x = function (c, t) {
	var g = G(arguments), bd = $.bd()
	bd.empty()
	if (g.O_) {
		$s(g.f)
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
$cssApp = function (name, cssOb, fn) {
	return window[name] = function () {
		$s(cssOb)
		fn()
	}
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
FL4 = GME = LOGCLASS = function () {
	$.hdr().A(
			'Click', $.br(), 'to change', $.br(),
			'header {column-…}'
	)
	$.ac().A('Click', $.br(), 'to', $.br(),
			'change', $.br(), 'body {display: …}')
	$.ftr().A()
	$("header").$(function () {
		$(this).toggleClass("ct");
		logClass()
	})
	$("article").$(function () {
		$.bd().toggleClass("box");
		logClass()
	})
	$s({
		'html, body': {w: '100%', h: '100%', M: 0, P: 0},
		'body.box': {d: $, flD: 'column'},
		'body > *': {P: '.5em'},
		header: {C: 'b'},
		article: {C: 'r', $: 1},
		footer: {C: 'g'},
		'header.cnt': {'-moz-column-count': 3},
		'header:not(.cnt)': {'-moz-column-width': 100}
	})
	logClass()
	function logClass() {
		var logTxt = "Header: "
		if ($("header").hasClass("cnt")) {
			logTxt += "column-count"
		} else {
			logTxt += "column-width"
		}
		logTxt += "; Body: ";
		if ($("body").hasClass("box")) {
			logTxt += "flex-box"
		}
		else {
			logTxt += "block"
		}
		$("footer").text(logTxt)
	}
}
MAR = MARGINAUTO = function () {
	z()
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
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
$.fn.s = $.fn.ss = function (css, val) {
	if (S(css)) {
		css = Ob(css, val)
	}
	css = $sty(css)
	return this.css(css)
}
$L('text', 'font', 'border', 'color', 'backgr', 'bckgrImg', 'xyz', 'size', 'margin', 'padding')
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
function items() {
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
}
function _pre() {
	Ob = function (k, v) {
		var ob = {}
		ob[k] = v
		return ob
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
function eh() {
	$.fn.T0 = function () {
		var d = this, g = G(arguments)
		d.E()
		g.e(function (str) {
			d.A($.h3(str))
		})
		return d
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
	$.s = function (css, c, tx) {
		$s(css)
		$.x(c, tx)
		return $
	}
}