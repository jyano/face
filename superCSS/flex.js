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

SS6 =RU1 = BORDERED = function () {
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
SS7 =RU2 = SIZE = MIXIN = function () {
	$s({d: {C: 'r', c: 'o', mixins: {size: [1250]}}}, '*')
	$.d().A('HELO')
}
SS8 =RU3 = EXT = function () {
	$CSS({
		d: {
			ex: 'icon',
			 C: 'y', c: 'o',
			mixins: {size: [250]}
		}
	})
	
	$.d().A('hello')
}
SS9 =H1 = BIGFONT=function () {
	rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
	$s(rule)
	// HTML5.CSSRule(rule)
	$.h1('this is a big font').A()
}
SS10 =H12 = SMALLFONT=function () {
	rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
	$s(rule)
	$.h1('this is a small font').A()
}
SS11 =TIPS = MOBILETIPS = function () {
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
SS12 =VANISH=NONE1 = function () {
	$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
	$.dK('sidebar').WH(400, 500).C('b')
}
SS13 =NONE = function () {
	sty = '@media only screen and (max-width: 500px) ' + $subRules({_sidebar: {dp: 'none'}})
	$.Sty(sty)
	$.dK('sidebar').WH(400, 500).C('b')
}
SS14 =MEDIA = function () {
	sty = '@media only screen and (max-width: 500px) ' + $subRules({bd: {C: 'b'}})
	$.Sty(sty)
}
SS15 =MED3 = function () {
	$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}", '*')
	$s("@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
	$.sp().A('span')
	$.h1().A('h1')
}
SS16 =MED2 = MEDWORKS = BREAK3 = function () {

//works
	$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}", '*')
	$s("@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
	$.sp('fasd').A()
	$.h1('fasd').A()
}
SS17 =MED1 = function () {
	$l('MD.')
	$s(above(960, " { body {font-size: 80px;}  }"),
			between(600, 960, "  {body {font-size: 40px;}}"),
			between(320, 600, "  {body {font-size: 20px;}}"),
			'*')
	$s(
			above(960, "{ body {color:blue;}  }"),
			between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	)
	$.sp().A('span')
	$.h1().A('h1')
}
SS18 =MED = function () {
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	css = Ob(str1, str2)
	$s(css)
	$.sp().A('span')
	$.h1().A('h1')
}
SS19 =MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
SS20 =MVD1 = function () {
	vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
}
SS21 =MVD = function () {
	vidHtml();
	$tablet(tabRus);
	$phone(phRus)
}
SS22 =MEDCOL = function () {
	$s({_sidebar: {dp: 'fl'}})
	$.Sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
	//$.Sty($rules({_sidebar : {'flex-direction': 'column'}}))
	$.dK('sidebar').WH(400, 500).C('b').A(
			$.i('me'), $.i('me'), $.i('me')
	)
}
SS23 =MDCL = function () {
	$s({_sidebar: {dp: 'fl'}})
	//sty = '@media (max-width: 600px) {.sidebar {flex-direction: column;}}'
	sty = '@media only screen and (max-width: 500px) ' +
	$subRules({_sidebar: {'flex-direction': 'column'}})
	$.Sty(sty)
	$.dK('sidebar').WH(400, 500).C('b').A(
			$.i('me'), $.i('me'), $.i('me')
	)
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
SS26 =GREENBTS = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800, M: 0, P: 0, dp: 'fl',
			$D: 'r'
		},
		'$main > button': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	d = $.dI('main')
	_.e([1, 2, 3, 4, 5], function (num) {
		var name = 'button_' + num
		d.A($.bt(name, function () {
			$l('clicked: ' + name)
		}))
	})
}
SS27 =YELLOWBTS = function () {
	$s({
		d: {h: 100, dp: 'fl'},
		bt: {fl: '3 1 50%'}
	})
	d = $.d()
	_.e([1, 2, 3, 4, 5], function (num) {
		var name = 'button_' + num
		d.A($.bt(name, function () {
					$l('clicked: ' + name)
				}).C('y')
		)
	})
}
SS28 =BTS = function () {
	$.flexy()
	rgbDivs()
	red.A(green, blue)
	blue.insertBts()
	green.long().aI('me')
}
SS29 =DOWN = FLEX_DIR_COLUMN = function () {
	$s({
		bd: {fS: 32},
		_ct: {dp: 'fl', jsC: 'c'},
		_parent1: {
			dp: 'fl',
			dir: 'c',
			w: 300, C: 'o'
		},
		_parent2: {
			dp: 'fl',
			dir: 'cRv',
			w: 500, C: 'o'
		},
		_item: {
			M: 10, c: 'y',
			bas: 80, dp: 'fl',
			jfC: 'c',
			alI: 'c'
		}
	})
	ct = $.dK('ct')
	Parent().K('parent1')
	Parent().K('parent2')
	function Parent() {
		return $.d().a2(ct)
				.A(It(), It(), It(), It(), It(), It())
	}
}
SS30 =FLD2 = BASISD = function () {
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P: 10},
		_ch1: {
			C: "u",
			fl: '8 1 600px'
		},
		_ch2: {
			C: 'g',
			d: '$',
			fl: '1 2 400px',
			wr: 'w'
		},
		d: {B: ['bor', 'b']}
	})
	children(8, $.dK('ch ch2').a2($.dK('ct').C('w')))
	function children(num, parent) {
		_.t(num, function () {
			div().K('ch1').a2(parent)
		})
	}
	
	function div() {
		return $.d($r(), 40, 40)
	}
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
SS33 =DVT = DEVTIPS = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {B: _bor},
		_item: {lH: 50, h: 50, M: 5}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('parent').A(
					_It(1), _It(2), _It(3),
					_It(4), _It(5)
			))
}
// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
SS34 =DVT1 = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			border: _bor,
			dir: 'rv'
		},
		_item: {
			lH: 50,
			h: 50,
			w: 50,
			M: 5
		}
	})
	$.h2().T('Display: flex')
	$.dK('parent').A(_It(1), _It(2), _It(3), _It(4), _It(5))
}
//7:30 flex-wrap ([nowrap] wrap
SS35 =DVT2 = WRAPREV = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			B: _bor,
			dir: 'rv',
			wr: 'rv',
		},
		_item: {
			lH: 50,
			h: 50,
			w: '30%',
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 9:45
SS36 =DVT3 = JUSTIFYCONTENT = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			dp: 'fl',
			B: _bor,
			dir: 'rv',
			wr: 'rv',
			jfC: 'sA'
		},
		_item: {
			lH: 50,
			h: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 12:50 ALIGNITEMS
SS37 =DVT4 = ALIGNITEMS = function () {
	$s({
		bd: {tA: 'c'},
		_parent: {
			height: 200,
			dp: 'flex',
			B: _bor,
			dir: 'rv',
			wr: 'wr',
			jfC: 'sA',
			alI: 'str'
		},
		_item: {
			lH: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 15:10 ALIGNCT [STRETCH]
SS38 =DVT5 = ALIGNCONTENT = function () {
	$s({
		bd: {tA: 'center'},
		_parent: {
			h: 200,
			dp: 'fl',
			B: '5px solid red',
			dir: 'row-reverse',
			wr: 'wrap',
			jfC: 'space-around',
			alI: 'stretch'
		},
		_item: {
			lH: 50,
			w: 50,
			M: 5
		}
	})
	$.dK('example').A(
			$.h2().T('Display: flex'),
			$.dK('example-content').A(
					parent = $.dK('parent').A(
							_It(1), _It(2), _It(3),
							_It(4), _It(5))))
}
// 20:30  children finally!!! ORDER
//2350 grow
SS39 =LAY = function () {
	col = {
		_body: {dir: 'c'},
		'.c2, .c3': {w: '100%'},
		_c2: {ord: 0}
	}
	$s({
		'header, footer': {P: 20, C: 'gray', c: 'w'},
		_lay: {
			h: 400, C: 'y',
			dp: 'fl', dir: 'c'
		},
		_body: {dp: 'fl', gr: 1, C: 'p', dir: 'row'},
		_c1: {C: '_b', gr: 1},
		_c2: {C: 'g', w: 160, ord: '-1'},
		_c3: {C: 'p', w: 160}//, _phone: $subRules({bd: {C: 'z'}, _body:col})
	})
	sty = '@media only screen and (max-width: 500px) ' +
	$subRules(col)
	$.Sty(sty)
	//$tablet({bd: {C: 'z'}, _body: {dir: 'c'}})
	$.dK('lay').A(
			$.hdr('heead'),
			$.dK('body').A(
					$.dK('c1').A('main').C('b'),
					$.dK('c2').A('nav').C('o'),
					$.dK('c3').A('sidebar').C('g')
			),
			$.ftr('fooot')
	)
}
SS40 =MOB = MEDIAOBJECT = function () {
	Med = function () {
		$.imgMur = function () {
			return $('<img src=http://www.fillmurray.com/50/50>')
		}
		return $.dK('med').A(
				$.imgMur(),
				$('<div>').K('content').A(yada(18))
		)
	}
	$CSS({
		bd: {P: 50},
		_ex: {B: '8px dashed black', C: 'g'},
		h2: {C: 'z', c: 'o', h: 50, tA: 'c', lH: 50},
		_meds: {C: '_b', dp: 'fl', wr: 'wr'},
		_med: {
			C: '_o', dp: 'fl', _w: 300,
			M: 20, h: 50,
			jfC: 'c'
		},
		i: {mR: 10},
		_content: {shr: 1, gr: 1},
		///
		'.search-group': {dp: 'fl', M: 10},
		ip: {P: 10}, _tIp: {fl: 1}
	})
	$.dK('ex').A(
			$.h2('media object'),
			$.dK('meds').A(
					Med(), Med(), Med()),
			$.hr(),
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('search-group').A(
							$.ip().ph('search').K('tIp'),
							$.sm())
			)
	)
}
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
SS41 =DRB = DRIB = function () {
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