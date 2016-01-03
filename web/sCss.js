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
		//$l('dec: ' + dec)
		decBlk += dec
	})
	//$l('decBlk: ' + decBlk)
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

$L('rules','size','xyz','margin','color','medqu','cssDa','font','border','bkgr')
 
$.fn.ov = $.fn.overflow = function (overflow) {
	var q = this, g = G(arguments)
	if (U(overflow)) {
		return q.css('overflow')
	}
	q.css('overflow', overflow);
	return q
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
function preFrontCss() {
 
}
function medqu() {
	_tablet = '@media screen and (max-width: 960px)'
	_phone = '@media screen and (max-width: 640px)'
	$tp = window['$tp'] || {}
	tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
	phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
}
function cssDa() {
	_bor = '5px solid red'
	_bulls = '&bull; &bull; &bull;'
}
function rules() {
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
	_dec = function (v, k) {
		return k + ':' + v + '; '
	}
	_brace = function (str) {
		return '{' + (str || '') + '}'
	}
	plugs()
	mixs()
	helps()
}
 
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
$.k = function (k) {
	var q = $.sp()
	q.K(k)
	return q
}
$.mar = function (num) {
	$s({$: {M: N(num, 10)}})
	return $
}
$.fn.s = $.fn.ss = function (css, val) {
	if (S(css)) {
		css = Ob(css, val)
	}
	css = $sty(css)
	return this.css(css)
}
$.fn.k = $.fn.K = function () {
	$.fn.addClass.apply(this, arguments);
	return this
}
$.fn.tK = $.fn.ggK = $.fn.toggleClass
$.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
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