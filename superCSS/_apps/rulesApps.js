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
	$('div').e(function () {$l('this:', this)})
	p = $('span').p()
	
	//.C('z')
	//r=	$('body').f('div').C("b")//.r()
}
RU1 = BORDR = function () {
	$.x('x', 'bordered')
	$CSS(
			{
				_bordered: {
					'border-top': 'dotted 1px black',
					'border-bottom': 'solid 2px black'
				},
				//And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
				'#menu a': {
					ex: '_bordered',
					c: 'r'
				},
				'.post a': {
					c: 'r',
					ex: '_bordered'
				}
			}
	)
	// $CSS()
}
RU2 = SIZE = function () {
	$.x('x', 'size')
	$CSS(
			{
				d: {
					C: 'z', c: 'w',
					mx: {
						size: [1250]
					}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}
RU3 = EXT = function () {
	$.x('x', 'ext')
	$CSS(
			{
				d: {
					ex: 'icon',
					C: 'y', c: 'o', mx: {size: [250]}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}
