RU2 = CSSEXTENDKEYWORD = BORDERED = function () {
	$s({
		_toBeBordered: {
			'border-top': 'dotted 10px red',
			'border-bottom': 'solid 20px blue'
		},
		//And we want to use these properties inside other rule-sets.
		// Well, we just have to drop in the name of the class
		// where we want the properties, like so:
		d: {ex: '_toBeBordered', c: 'r'},
		bt: {c: 'y', ex: '_toBeBordered'}
	})
	l({
		l: 'bt', k: 'toBeBordered',
		t: 'BUTTON',
		a2: 1
	})
	l({
		l: 'h1', k: 'toBeBordered',
		t: 'border me, please',
		a2: 1
	})
	l({
		l: 'd', C: 'z', c: 'w',
		t: 'div',
		a2: 1
	})
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
			M: 20, P: 40, h: 40
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
	$.hr()
	$.hr()
	$('div').e(function () {
		$.h1('this:' + $(this).oh())
	})
	// $('body').f('div').C("b").r()
}
RU4 = SS8 = SIZE = MIXIN = SS9 = EXT = function () {
	$s({
		d: {
			ex: 'icon',
			C: 'y', c: 'o',
			mixins: {size: [825]}
		}
	}, '*')
	l({a: 'hello', a2: 1})
	l({a: 'hello', a2: 1})
	ll({a: 'hello', a2: 1})
	ll({a: 'hello', a2: 1})
	l({l: 'd', a: 'hello', a2: 1})
	l({l: 6, a: 'hello', a2: 1})
	l({l: 's', a: 'hello', a2: 1})
	l({l: 's', a: 'hello', a2: 1})
	l({l: 'd', a: 'hello', a2: 1})
	l({l: 1, a: 'hello', a2: 1})
}
