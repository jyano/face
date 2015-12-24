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
		bd: 'body',sp:'span',
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
minW= above = greaterThan = atLeast = min = function (num, str) {
	return '@media all and (min-width: ' + num + 'px) ' + (str || '')
}

maxW=below = lessThan = max = function (num, str) {
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
function _pre(){
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
	Ob = function (k, v) {
		var ob = {}
		ob[k] = v
		return ob
	}
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
	$.x = function (c, t) {
		var g = G(arguments), bd = $.bd()
		bd.E()
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