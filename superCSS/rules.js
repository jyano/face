$L('plugs','mixs', 'helps','defs','apps')
$sel=function(sel) {
	if (A(sel)) {
		sel = '{' + sel[0] + ':' + sel[1] + '; ' + '}'
	}
	if(sel == '$'){return '*'}
	sel = sel.replace('_', '.')
			.replace('$', '#')
	_.e({
		bd: 'body',
		bt: 'button',
		sc: 'section', nv: 'nav',
		d: 'div',
		i: 'img', ip: 'input', hdr:'header', n:'nav'
	}, function (v, k) {
		if (sel == k) {
			sel = v
		}
	})
	return sel
}
$val = function (v, k) {
	if(A(v)){return  $helperValue(v, k) }
	return N(v) && v > 10 ? $S(v) + 'px' :
			oO(k, v, 'R')
}
$decBlk = function (decs, ob) {
	ob = ob || {}
	var decBlk  = ' ', 
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
		decBlk  += dec
	})
	$l('decBlk: ' + decBlk )
	return _brace(decBlk )
}
$rule = function (sel, decs, rulesOb) {
	return $sel(sel) + ' ' + $decBlk(decs, rulesOb)
}
$rules = function (rulesOb) {
	var rulesStr = '\n\n'
	_.e(rulesOb, function(decs, sel) {
		rulesStr += $rule(sel, decs, rulesOb) + '\n'
	})
	return rulesStr + '\n'
}
$.sty = function (h) {
	var styleTag = $('<style>')
			.at({type: 'text/css'});
	styleTag.h(h)
	return styleTag
}
$.Sty = function (h) {
	return $.sty(h).A()
}
$sty = function (sty, styVal) {
	//= $decs = $css
	_$sty = function (o, a, b) {
		//= addSty
		if (N(b) && M.abs(b) > 10) {
			b = String(b) + 'px'
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
STY = function () {
	css = $decs({C: 'r'})
	$l(css)
}
function plugs(){
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
function mixs(){
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
function helps(){
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
function defs(){
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
function _pre() {
	_dec = function (v, k) {
		return k + ':' + v + '; '
	}
	_brace = function (str) {
		return '{' + (str || '') + '}'
	}
}
function apps() {
	SEL = function () {
		t = $.t()
		sels = [
			'd', '_klas_klas', '$id$id', '$'
		]
		_.e(sels, function (sel) {
			t.A(
					$.tr().A(
							$.td(sel).W(100),
							$.td($sel(sel)).W(100)
					)
			)
		})
	}
	VAL = function () {
		t = $.t()
		sels = {
			C: 'r',
			dp: 'flex'
		}
		_.e(sels, function (val, key) {
			t.A($.tr().A($.td(key + ': ' + val).W(100),
					$.td($val(val, key)).W(100)))
		})
	}
	RUL = function () {
		var ru = $rule('d', {C: 'r', c: 'b'})
		$.h1(ru)
	}
	RUS = function () {
		css = {d: {C: 'r', c: 'b'}, bt: {C: 'b', c: 'r'}}
		$.h1($rules(css))
		$.br().A()
		$.h1($subRules(css))
	}
	QFN = LJQFN = function () {
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
		$('div').e(function () {
			$l('this:', this)
		})
		$('span').C('z')//.p()
		//r=	$('body').f('div').C("b").r()
	}
	RU1 = BORDR = function () {
		$s({
			_bordered: {'border-top': 'dotted 1px black', 'border-bottom': 'solid 2px black'},
			//And we want to use these properties inside other rule-sets.
			// Well, we just have to drop in the name of the class
			// where we want the properties, like so:
			a: {ex: '_bordered', c: 'r'},
			button: {c: 'r', ex: '_bordered'}
		}, '*')
		$.h1().A('bordered').K('bordered')
		$.bt('fsad')
		$.a('fasd')
	}
	RU2 = SIZE = MIXIN = function () {
		$s({d: {C: 'r', c: 'o', mx: {size: [1250]}}}, '*')
		$.d().A('HELO')
	}
	RU3 = EXT = function () {
		$CSS({
			d: {
				ex: 'icon', C: 'y', c: 'o',
				mx: {size: [250]}
			}
		})
		$.d().A('hello')
	}
	H1 = function () {
		rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
		$s(rule)
		// HTML5.CSSRule(rule)
		$.h1('this is a big font').A()
	}
	H12 = function () {
		rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
		$s(rule)
		$.h1('this is a small font').A()
	}
	TIP = MOBILETIPS = function () {
		$.d('o', 400, 200).dg().pad(20).A(
				$.d('u', 200, 100),
				$.d('g', 100, 80)
		)
		d = $.d('o', 400, 1200).A().drag().pad(20)
		d.A($.h3('mobile tips').C('x', 'w'))
		d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x', 't'))
		d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x', 't'))
		d.A($.h4('tip3: ').C('x', 't'))
		d.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x', 'w'))
		d.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x', 't'))
		d.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x', 't'))
		d.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x', 't'))
		d.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x', 't'))
		d.A($.h3('mobile tips').C('x', 'w'))
		d.A($.h4('tip1: ').C('x', 't'))
		d.A($.h4('tip2: ').C('x', 't'))
		d.A($.h4('tip3: ').C('x', 't'))
	}
}
function _post() {
	$CSS = function () {
		var res = $s.apply(null, arguments)
		$l(res)
		return res
	}
}