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
	
	$s({_bordered: {'border-top': 'dotted 1px black', 'border-bottom': 'solid 2px black'},
				//And we want to use these properties inside other rule-sets.
				// Well, we just have to drop in the name of the class
				// where we want the properties, like so:
		a: {ex: '_bordered', c: 'r'},
		 button: {c: 'r', ex: '_bordered'}
		
	},'*')
	
	$.h1().A('bordered').K('bordered')
	$.bt('fsad')
	$.a('fasd')
	 
}
RU2 = SIZE = MIXIN= function () {
	$s({d: {C: 'r', c: 'o', mx: {size: [1250]}}},'*')
	$.d().A('HELO')
 
}
RU3 = EXT = function () {
 
	$CSS({d: {ex: 'icon', C: 'y', c: 'o',
		mx: {size: [250]}}
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
 
  