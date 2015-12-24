RUL =SS1=SEL = SELECTORS = VAL= RUS = function () {
	$.h1(ru = $rule('d', {C: 'r', c: 'b'}))
	$.hr()
	t = $.t()
	 
	_.e(sels = [
			'd', '_klas_klas', '$id$id', '$'
			], function (sel) {
		t.A($.tr().A($.td(sel).W(100),
				$.td($sel(sel)).W(100)))
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
SS5 =QFN = LJQFN = HELLOWHYNOTSPAN= function () {
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
SS6 =RU1 = BORDERED = function () {
	$s({
		_bordered: {
		'border-top': 'dotted 1px red',
		  'border-bottom': 'solid 2px blue'},
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
SS9 =H1 = BIGFONT=function () {
	rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
	$s(rule)
	// HTML5.CSSRule(rule)
	$.h1('this is a big font').A()
 //
	rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
	$s(rule)
	$.h1('this is a small font').A()
}
SS12 =VANISH=NONE1 = function () {
	$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
	$.dK('sidebar').WH(400, 500).C('b')
}
SS14 = MEDIA = function () {
	sty = '@media only screen and (max-width: 500px) ' + $subRules({bd: {C: 'b'}})
	$.Sty(sty)
}
SS24 =FL0 = function () {
	$.d('b', 400, 500).s({dp: 'fl', jfC: 'sA'}).A(
			$.d('y', 40, 150),
			$.d('z', 200, 50),
			$.d('r', 40, 150)
	)
}
SS25 =ACS = ARTICLES = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
		'$main > article': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	$.dI('main').A(
			$.ac('article1'),
			$.ac('ac2'),
			$.ac('ac3'),
			$.ac('ac4'),
			$.ac('ac5')
	)
}
SS28 = BTS = function () {
	$.flexy()
	rgbDivs()
	red.A(green, blue)
	blue.insertBts()
	green.long().aI('me')
}
 
SS31 =FLD1 = FLXD = function () {
	$s({
		_sB: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sB'},
		_sA: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sA'}
	})
	d = $.d().s({
		dp: 'fl',
		jfC: 'sB'
	})
	d.A(
			$.d('b', 400, 500).K('sB').A(
					$.d('y', 40, 150),
					$.d('z', 200, 50),
					$.d('r', 40, 150),
					$.d('y', 40, 150),
					$.d('z', 200, 50),
					$.d('r', 40, 150)
			),
			$.d('B', 400, 500).K('sB').A(
					$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
			),
			$.i('me'),
			$.d('w', 400, 500).K('sA').A(
					$.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
			),
			$.d('p', 400, 500).K('sA').A(
					$.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
					$.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
			)
	)
}
SS32 =FLD3 = FLEXCTD = function () {
	$.C('r')
	$s({
		'.flex-container': {
			C: 'y',
			display: 'flex',
			'flex-direction': 'row',
			$W: 'w',
			'justify-content': 'space-around',
			'align-content': 'flex-start',
			'align-items': 'stretch'
		},
		//'.flex-items-default': {'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0},
		'.flex-item-1': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
		'.flex-item-2': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-3': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '20px'},
		'.flex-item-4': {C: 'z', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-5': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
}
SS41 =DRB = DRIB = function () {
	Li = function (text) {
		return $.li().A($.a(text))
	}
	Shot = function () {
		return $.a().K('wrap').A(
				$.d().K('shot').A(
						$.i('me'),
						$.dK('meta').A(
								$.dK('views').C('b').col('w').A(' # views '),
								$.dK('comments').C('g').A('comments '),
								$.dK('likes').C('o').A(' likes ')
						)
				),
				$.dK('owner').A($.i('me').K('avatar'),
						$.sp(' - name - ').K('name')))
	}
	$s({
		$: {M: 4},
		_ps: {_w: 970, M: '0 auto'},
		_hdr: {
			dp: 'fl', jfC: 'sB',
			C: 'gray'//, w:'100%'
		},
		_nav: {dp: 'fl', alI: 'c', shr: 1},
		ul: {dp: 'fl'},
		li: {M: '0 20px'},
		_tools: {dp: 'fl', alI: 'c'},
		i: {M: '0 20px', w: 50, h: 50},
		_shots: {dp: 'fl', wr: 'wr', jfC: 'sB', C: 'p'},
		_meta: {dp: 'fl', dir: 'c', jfC: 'end'},
		_shot: {C: 'w'},
		_wrap: {C: 'v'},
		_tool: {w: 20, h: 20}
	})
	shots = $.sc().K('shots ps')
	_.t(8, function () {
		shots.A(Shot())
	})
	$.dK('ex').A(
			$.h2('dribbbl'),
			$.dK('ex-page ex-drib').A(
					$.dK('hdr ps').A(
							$.nav().K('nav ps').A(
									$.i('sun'), // logo
									$.ul().A(Li('Shots'), Li('Designers'),
											Li('Team'), Li('Meetup'), Li('Jobs'),
											Li(_bulls))
							).C('y'),
							$.d().K('tools').A(
									$.i('guy').K('tool'),
									$.i('guy').K('tool'), $.i('guy').K('tool'),
									$.f().A($.ip().ph('Search'))
							).C('r')
					)
					, shots)
	)
// linds with  class shot-wrap
//the shot  (images and meta)
// (meta is views, count, likes? more images?)
// owner (avatar)
}
SS42=FL4 = GME = LOGCLASS = function () {
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
SS43 =MAR = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
SS44=STY = function () {
	css = $decs({C: 'r'})
	$l(css)
}
SS7 = RU2 = SIZE = MIXIN = function () {
	$s({
		d: {
			C: 'r', c: 'o', mixins: {
				size: [1250]
			}
		}
	}, '*')
	$.d().A('HELO')
}
SS8 = RU3 = EXT = function () {
	$CSS({
		d: {
			ex: 'icon',
			C: 'y', c: 'o',
			mixins: {size: [250]}
		}
	})
	$.d().A('hello')
}
SS11 = TIPS = MOBILETIPS = function () {
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