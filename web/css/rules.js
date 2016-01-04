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
	_dec = function (v, k) {
		return k + ':' + v + '; '
	}
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
	_brace = function (str) {
		return '{' + (str || '') + '}'
	}
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


$L('plugs', 'mixs', 'helps')
function _pre(){
	_bor = '5px solid red'
	_bulls = '&bull; &bull; &bull;'
}
function _post(){
	$CSS = function () {
		var res = $s.apply(null, arguments)
		$l(res)
		return res
	}
	$s.bd = function (ob) {
		$s('body', ob)
	}
	$s.bt = function (ob) {
		$s('button', ob)
	}
}
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
RU2 = BORDERED = function () {
	$s({
		_bordered: {
			'border-top': 'dotted 1px red',
			'border-bottom': 'solid 2px blue'
		},
		//And we want to use these properties inside other rule-sets.
		// Well, we just have to drop in the name of the class
		// where we want the properties, like so:
		a: {ex: '_bordered', c: 'r'},
		bt: {c: 'r', ex: '_bordered'}
	})
	$.h1().A('bordered').K('bordered')
	$.bt('fsad')
	$.a('fasd')
}
RU1 = SEL = SELECTORS = VAL = RUS = function () {
	$.h1(ru = $rule('d', {C: 'r', c: 'b'}))
	$.hr()
	t = $.t()
	_.e(sels = [
		'd', '_klas_klas', '$id$id', '$'
	], function (sel) {
		t.A(
				$.tr().A(
						$.td(sel).W(100),
						$.td($sel(sel)).W(100)
				)
		)
	})
	$.hr()
	t = $.t()
	sels = {
		C: 'r',
		dp: 'flex'
	}
	_.e(sels, function (val, key) {
		t.A($.tr().A($.td(key + ': ' + val).W(100),
				$.td($val(val, key)).W(100)))
	})
	$.hr()
	css = {d: {C: 'r', c: 'b'}, bt: {C: 'b', c: 'r'}}
	$.h1($rules(css))
	$.br().A()
	$.h1($subRules(css))
}
RU3 = SS10 = QFN = LJQFN = HELLOWHYNOTSPAN = function () {
	css_ = {}
	css_.redDivs = {
		d: {
			C: 'v', c: 'p',
			M: 20, P: 40, h: 420
		},
		sp: {
			C: 'u'
		}
	}
	css_.big = {d: {fZ: 100}}
	$s(css_.redDivs)
	$s(css_.big)
	$.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$('div').e(function () {
		$l('this:', this)
	})
	// $('body').f('div').C("b").r()
}
RU4 = SS8 = SIZE = MIXIN = SS9 = EXT = function () {
	$CSS({
		d: {
			ex: 'icon',
			C: 'y', c: 'o',
			mixins: {size: [825]}
		}
	}, '*')
	$.d().A('hello')
}