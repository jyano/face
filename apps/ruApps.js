 
	SS11 = RU1 = BORDERED = function () {
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
	RUL = SEL = SELECTORS = VAL = RUS = function () {
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
	SS10 = QFN = LJQFN = HELLOWHYNOTSPAN = function () {
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
	SS6 = MAR = MARGINAUTO = function () {
		o = outer = $.div('b', 500, 500).A()
		o.A(i = inner = $.div('r', 100, 100))
		i.mar('auto')
		o.mar('auto')
	}
	SS8 = RU2 = SIZE = MIXIN = SS9 = RU3 = EXT = function () {
		$CSS({
			d: {
				ex: 'icon',
				C: 'y', c: 'o',
				mixins: {size: [825]}
			}
		}, '*')
		$.d().A('hello')
	}
 