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
FLX1 = SS408 = MOB = MEDIAOBJECT = function () {
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
}// 12:50 ALIGNITEMS
FLX2 = SS16 = DRB = DRIB = function () {
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
FLX3 = SS13 = FLD1 = FLXD = function () {
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
FLX4 = SS269 = GREENBTS = function () {
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
FLX5 = J2 = SS5 = ACS = ARTICLES = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800,
			M: 0, P: 0,
			d: '$', $D: 'r'
		},
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
FLX6 = SS27 = YELLOWBTS = function () {
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
FLX7 = SS4 = FL0 = function () {
	$.d('b', 400, 500).s({dp: 'fl', jfC: 'sA'}).A(
			$.d('y', 40, 150),
			$.d('z', 200, 50),
			$.d('r', 40, 150)
	)
}
FLX8 = SS6 = MAR = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
FLX9 = SS309 = FLD2 = BASISD = function () {
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P: 10},
		_ch1: {
			C: "u",
			fl: '8 1 600px'
		},
		_ch2: {
			C: 'g',
			dp: 'fl',
			fl: '1 2 400px',
			wr: 'wr'
		},
		d: {B: ['bor', 'b']}
	})
	children(8,
			$.dK('ch ch2').a2(
					$.dK('ct').C('w')
			)
	)
	function children(num, parent) {
		_.t(num, function () {
			div().K('ch1').a2(parent)
			function div() {
				return $.d($r(), 40, 40)
			}
		})
		return parent
	}
}
$L('item', 'vid')
function item() {
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
	FLX10 = SS299 = DOWN = FLEX_DIR_COLUMN = function () {
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
	FLX11 = SS353 = DVT2 = WRAPREV = function () {
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
	}// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
	FLX12 = SS346 = DVT1 = function () {
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
	FLX13 = SS379 = DVT4 = ALIGNITEMS = function () {
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
	FLX14 = SS384 = DVT5 = ALIGNCONTENT = function () {
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
	}//7:30 flex-wrap ([nowrap] wrap
// 9:45
// 20:30  children finally!!! ORDER
//2350 grow
	FLX15 = SS33 = DVT = DEVTIPS = function () {
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
	FLX16 = SS364 = DVT3 = JUSTIFYCONTENT = function () {
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
	FLX17 = SS14 = FLD3 = FLEXCTD = function () {
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
}
function vid() {
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
	FLX18 = SS18 = MVD1 = function () {
		SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
			vidHtml()
			med = '@media screen and (max-width: 960px)'
			decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
			$.Sty(med + decs)
			$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
		}
		vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
	}
}
MQ1 = LAY = function () {
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
MQ2 = MVD = function () {
	vidHtml();
	$tablet(tabRus);
	$phone(phRus)
}
MQ0 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
MQ3 = SS23 = MDCL = function () {
	$s({_sidebar: {dp: 'fl'}})
	$.sty('@media only screen and (max-width: 500px) ' +
	$subRules({_sidebar: {dir: 'c'}}))
	//  *** alt works :$.sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
	$.dK('sidebar').WH(400, 500).C('b').A($.i('me'), $.i('me'), $.i('me'))
}
MQ4 = MED = function () {
	MQ5 = MED1 = function () {
		$l('MD.')
		$s(above(960, " { body {font-size: 80px;}  }"),
				between(600, 960, "  {body {font-size: 40px;}}"),
				between(320, 600, "  {body {font-size: 20px;}}"))
		$s(
				above(960, "{ body {color:blue;}  }"),
				between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
		)
		$.sp().A('span')
		$.h1().A('h1')
	}
	MQ9 = MED3 = function () {
		$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
		$s("@media all and (min-width: 960px) { body {color:blue;}  }",
				"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
				"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
		$.sp().A('span')
		$.h1().A('h1')
		SS16 = MED2 = MEDWORKS = BREAK3 = function () {

//works
			$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
					"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
					"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}")
			$s("@media all and (min-width: 960px) { body {color:blue;}  }",
					"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
					"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
			$.sp('fasd').A()
			$.h1('fasd').A()
		}
	}
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") +
	below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	$s($Ob(str1, str2))
	$.sp().A('span')
	$.h1().A('h1')
}
MQ5 = VANISH = NONE1 = function () {
	MQ7 = MEDIA = function () {
		sty = '@media only screen and (max-width: 500px) '
		sty += $subRules({bd: {C: 'b'}})
		$.Sty(sty)
	}
	$.dK('sidebar').WH(400, 500).C('b')
	$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
}
DANI = function () {
	$s({
		$: {P: 0, M: 0},
		body: {
			C: 'z', c: 'p',
			//P: 30,
			display: 'flex', //'flex-direction': 'column'
			'justify-content': 'space-between',
			//	'align-items': 'stretch',
			//'align-items': 'stretch',
		},
		span: {
			'flex-basis': 80,
			display: 'flex'
		}
	})
	body = $('body')
	_.t(10, function () {
		body.A($.sp('hello').C($r()))
	})
	body.A(
			$.sp().A(
					$.i('me')//.W(100).H(50).C($r())
			).C($r()),
			$.sp().A('hello').C($r()),
			$.sp().A('hello').C($r())
	)
}
DATE = function () {
	$s({
		$: {
			fS: 22, //border: '4px dotted blue',
			M: 14, overflow: 'scroll'
		},
		body: {display: 'flex', 'flex-direction': 'column', C: '_b'},
		$content: {display: 'flex'},
		$main: {
			display: 'flex',
			'flex-direction': 'column',
			C: 'z', c: 'w', w: '100%'
		},
		$profile: {
			display: 'flex',
			// 'flex-wrap': 'wrap',
			C: 'o'
		},
		$left: {C: 'g'},
		$header: {C: 'b'},
		$compatibility: {C: 'u'},
		$imageBox: {
			C: 'r',//, w: 400, 
			'flex-shrink': 0
		},
		$about: {C: 's', w: '100%', 'flex-shrink': 1},
	})
	$s(below(960, "{#profile {display: flex; flex-direction: column;}}"))
	body = $('body')
	body.A(
			$.d().id('header').A('header'),
			$.d().id('content').A(
					$.d().id('left').A('left box'),
					$.d().id('main').A(
							$.d().id('profile').A(
									$.d().id('imageBox').A($.i('me')),
									$.d().id('about').A('about').A(
											$.d().A('afds fafd fda fdfsfdsa'),
											$.d().A('afdsf sfafsaf safsd fsd'),
											$.d().A('affa ffs dsfdfs dsfd')
									)
							),
							$.d().id('compatibility').A('compatibility')
					)
			)
	)
}
DOR = DOOR = CSS_TRANSFORM_PERSPECTIVE = function () {
	$s({
		bd: {C: 'o'},
		$div1: {
			position: 'relative',
			h: 150, w: 150,
			M: 50, P: 10,
			bor: '1px solid black',
			perspective: 150
		},
		$div2: {
			P: 50, position: 'absolute',
			bor: '1px solid black',
			C: 'r', transform: 'rotateX(45deg)'
		}
	})
	$.dI('div1')
	$.dI('div2').A('HELLO')
}
//http://jsfiddle.net/dbpas/3Z4bS/
sJQApps()
localStorApps()
function sJQApps(){
	TANGLE1 = function () {
		a = $.divA('r', 50, 50).XY(50).A().pad(10)
		b = $.divA('b', 100, 100).XY(100).A().pad(10)
		c = $.divA('g', 200, 200).XY(200).A().pad(10)
		d = $.divA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	TNGL = TANGLE = function () {
		z()
		a = $.dA('r', 50, 50).XY(50).A().pad(10)
		b = $.dA('b', 100, 100).XY(100).A().pad(10)
		c = $.dA('g', 200, 200).XY(200).A().pad(10)
		d = $.dA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	MGA = MARGINAUTO = function () {
		o = outer = $.div('b', 500, 500).A()
		o.A(i = inner = $.div('r', 100, 100))
		i.mar('auto')
		o.mar('auto')
	}
	jQAnim()
	function jQAnim() {
		JQ0 = BOR = BORDERS = function () {
			function borders() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
			
			$.fn.an = $.fn.animate
			_.t(10, change)
			function change() {
				$.i('me', 100).A().C('g')
						.css(
						{
							borderStyle: 'dashed', borderWidth: '20px'
						}
				)
						.animate(
						{
							"border-top-width": 10
						}, 1000
				)
						.an({"border-bottom-width": 10}, 1000)
						.an({"border-left-width": 10}, 1000)
						.an({"border-right-width": 10}, 1000)
						.an({"padding-top": 10}, 1000)
						.an({"padding-bottom": 10}, 1000)
						.an({"padding-left": 10}, 1000)
						.an({"padding-right": 10}, 1000)
						.an({"margin-top": 10}, 1000)
						.an({"margin-bottom": 10}, 1000)
						.an({"margin-left": 10}, 1000)
						.an({"margin-right": 10}, 1000)
						.an({"margin-top": 0}, 1000)
						.an({"margin-bottom": 0}, 1000)
						.an({"margin-left": 0}, 1000)
						.an({"margin-right": 0}, 1000)
						.an({"padding-top": 0}, 1000)
						.an({"padding-bottom": 0}, 1000)
						.an({"padding-left": 0}, 1000)
						.an({"padding-right": 0}, 1000)
						.an({"border-top-width": 0}, 1000)
						.an({"border-bottom-width": 0}, 1000)
						.an({"border-left-width": 0}, 1000)
						.an({"border-right-width": 0}, 1000)
			}
			
			/*
			 $.img('me').WH(100).A().C('g').bs('-')  //bs??
			
			 .j({bt: 40}, 1000)
			
			 .j({bb: 40}, 1000)
			 .j({bl: 40}, 1000)
			 .j({br: 40}, 1000)
			 .j({gt: 40}, 1000)
			 .j({gb: 40}, 1000)
			 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
			 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
			 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
			 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
			 .j({bt: 0}, 1000)
			 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			 };
			 */
			function alt() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
		}
		JQ0 = BOR = BORDERS = function () {
			function borders() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
			
			$.fn.an = $.fn.animate
			_.t(10, change)
			function change() {
				$.i('me', 100).A().C('g')
						.css(
						{
							borderStyle: 'dashed', borderWidth: '20px'
						}
				)
						.animate(
						{
							"border-top-width": 10
						}, 1000
				)
						.an({"border-bottom-width": 10}, 1000)
						.an({"border-left-width": 10}, 1000)
						.an({"border-right-width": 10}, 1000)
						.an({"padding-top": 10}, 1000)
						.an({"padding-bottom": 10}, 1000)
						.an({"padding-left": 10}, 1000)
						.an({"padding-right": 10}, 1000)
						.an({"margin-top": 10}, 1000)
						.an({"margin-bottom": 10}, 1000)
						.an({"margin-left": 10}, 1000)
						.an({"margin-right": 10}, 1000)
						.an({"margin-top": 0}, 1000)
						.an({"margin-bottom": 0}, 1000)
						.an({"margin-left": 0}, 1000)
						.an({"margin-right": 0}, 1000)
						.an({"padding-top": 0}, 1000)
						.an({"padding-bottom": 0}, 1000)
						.an({"padding-left": 0}, 1000)
						.an({"padding-right": 0}, 1000)
						.an({"border-top-width": 0}, 1000)
						.an({"border-bottom-width": 0}, 1000)
						.an({"border-left-width": 0}, 1000)
						.an({"border-right-width": 0}, 1000)
			}
			
			/*
			 $.img('me').WH(100).A().C('g').bs('-')  //bs??
			
			 .j({bt: 40}, 1000)
			
			 .j({bb: 40}, 1000)
			 .j({bl: 40}, 1000)
			 .j({br: 40}, 1000)
			 .j({gt: 40}, 1000)
			 .j({gb: 40}, 1000)
			 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
			 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
			 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
			 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
			 .j({bt: 0}, 1000)
			 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
			 };
			 */
			function alt() {
				BORDERS = function () {
					z()
					change = function () {
						$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
								.J({"border-top-width": 10}, 1000)
								.J({"border-bottom-width": 10}, 1000)
								.J({"border-left-width": 10}, 1000)
								.J({"border-right-width": 10}, 1000)
								.J({"padding-top": 10}, 1000)
								.J({"padding-bottom": 10}, 1000)
								.J({"padding-left": 10}, 1000)
								.J({"padding-right": 10}, 1000)
								.J({"margin-top": 10}, 1000)
								.J({"margin-bottom": 10}, 1000)
								.J({"margin-left": 10}, 1000)
								.J({"margin-right": 10}, 1000)
								.J({"margin-top": 0}, 1000)
								.J({"margin-bottom": 0}, 1000)
								.J({"margin-left": 0}, 1000)
								.J({"margin-right": 0}, 1000)
								.J({"padding-top": 0}, 1000)
								.J({"padding-bottom": 0}, 1000)
								.J({"padding-left": 0}, 1000)
								.J({"padding-right": 0}, 1000)
								.J({"border-top-width": 0}, 1000)
								.J({"border-bottom-width": 0}, 1000)
								.J({"border-left-width": 0}, 1000)
								.J({"border-right-width": 0}, 1000)
					}
					$.$$(
							function () {
								z();
								_.times(10, change)
							}
					)
					_.times(10, change)
				}
				BORDERS1 = function () {
					change = function () {
						$.img('me').WH(100).A().C('g').bs('-')  //bs??
								.j({bt: 40}, 1000)
								.j({bb: 40}, 1000)
								.j({bl: 40}, 1000)
								.j({br: 40}, 1000)
								.j({gt: 40}, 1000)
								.j({gb: 40}, 1000)
								.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
								.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
								.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
								.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
								.j({bt: 0}, 1000)
								.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
					}
					m$$(function () {
						z();
						_.times(10, change)
					})
					_.times(10, change)
				}
			}
		}
		JQ1 = EF3 = HIDESHOWNICE = HIDE = function () {
			$s({
				p: {C: '#bca', w: 200, bor: '1px solid green'},
				div: {w: 100, h: 100, C: 'r'}
			})
			$.p('$')
			$.bt('hd').id('hd')
			$.bt('sh').id('sh')
			d = $.dK('tg')
			$('#hd').$(function () {
				d.hd('sl', {d: 'r'}, 500)
			})
			$('#sh').$(function () {
				d.sh('sl', {d: 'd'}, 2000)
			})
			function alt() {
				JU33 = HIDESHOWNICE = HIDE = function () {
					$.s({
						p: {C: '#bca', w: 200, bor: '1px solid green'},
						div: {w: 100, h: 100, C: 'r'}
					})
					$.p('$')
					$.bt('hd').id('hd')
					$.bt('sh').id('sh')
					d = $.dK('tg')
					$('#hd').$(function () {
						d.hd('sl', {d: 'r'}, 500)
					})
					$('#sh').$(function () {
						d.sh('sl', {d: 'd'}, 2000)
					})
				}
			}
		}
		JQ2 = TANGLE = function () {
			a = $.divA('r', 50, 50).XY(50).A().pad(10)
			b = $.divA('b', 100, 100).XY(100).A().pad(10)
			c = $.divA('g', 200, 200).XY(200).A().pad(10)
			d = $.divA('y', 400, 400).XY(400).A().pad(10)
			y = function (aa, bb, cc, dd) {
				if (aa && U(bb)) {
					aa.A().P('a')
				}
				if (bb) {
					bb.A(aa.P('static'))
				}
				if (dd) {
					dd.A(cc.P('s'))
				}
			}
			function alt() {
				TANGLE = function () {
					z()
					a = $.divA('r', 50, 50).XY(50).A().pad(10)
					b = $.divA('b', 100, 100).XY(100).A().pad(10)
					c = $.divA('g', 200, 200).XY(200).A().pad(10)
					d = $.divA('y', 400, 400).XY(400).A().pad(10)
					y = function (aa, bb, cc, dd) {
						if (aa && U(bb)) {
							aa.A().P('a')
						}
						if (bb) {
							bb.A(aa.P('static'))
						}
						if (dd) {
							dd.A(cc.P('s'))
						}
					}
				}
			}
		}
		JQ3 = IP1 = FOC = SPANFOCUS = function () {
			$.sp('Some Span').id("my-span").at('tabindex', "0")
			$.sp('Some Span1').id("my-span1")//.at('tabindex',"0")
			$.sp('Some Span2').id("my-span2").at('tabindex', "0")
			document.getElementById('my-span').focus()
			document.getElementById('my-span2').focus()
		}
		JQ4 = HOVERBOX = function () {
			d = $.d('o', 500, 500, '+').id('test')
			y = $.c('p', 400).K('box').hd();
			d.A(y);
			$('#test').hover(function () {
				$('.box').stop().fadeTo(200, 1)
			}, function () {
				$('.box').stop().fadeTo(200, 0)
			})
		}
		JQ5 = EF2 = HIGHLIGHT = HLT = function () {
			$s({
				p: {C: 'y', w: 200, B: '1px solid green'},
				d: {C: 'r', w: 100, h: 100}
			})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
			$.dK('target')
			$.bt('Highlight: ', function () {
				$(".target").ef("highlight",
						{color: "#669966"}, 3000)
			})
			function alt() {
				JU44 = HIGHLIGHT = HLT = function () {
					$.h({
						p: {C: 'y', w: 200, B: '1px solid green'},
						d: {C: 'r', w: 100, h: 100}
					})//  df HL col is yellow.// simp  syntax to use   effect :   se.ef( "hgl", {args}, spd ) // hgl col= "#ffff99".    mode  of the effect =show | hide
					$.dK('target')
					$.bt('Highlight: ', function () {
						$(".target").ef("highlight",
								{color: "#669966"}, 3000)
					})
				}
			}
		}
		JQ7 = MAG = FRIDGEMAG = function () {
			$s({$: {fS: 40}})
			word = function (text, c1, c2) {
				var s = $.sp(text).C(c1, c2).drag()
				return s
			}
			w = word('hello', 'b', 'g');
			word('sicko', 'g', 'b');
			word('why, i oughta..', 'p', 'x');
			word('it was raining..', 'j', 'k');
			word('who ya gonna call?', 'h', 'i');
			word('dag nabit!', 'f', 'g');
			word('i like', 'd', 'e');
			word('tomorrow', 'a', 'c');
			word('me', 'r', 'b')
		}
		JQ8 = FLASH = function () {
			z();
			timeline = $.dA('+').WH('auto');
			timeline.A($.c('b', 500, 500), $.br());
			_.t(24, function (x) {
				timeline.A(
						$.d('r', 100, 100)
								.css({display: 'inline-block'}).H((x * 10) + 100)
				)
			})
		}
		JQ6 = JQ10 = CORNERS = function () {
			var W = function () {
				return $('body').W()
			}
			var H = function () {
				return $('body').H()
			}
			Z = function () {
			}
			function corners() {
				CORNERS = function () {
					$.fn.grow = function () {
						originalWidth = this.W()
						originalHeight = this.H()
						this.on('mousedown', function (e) {
							mx = e.clientX
							my = e.clientY
							$.mouseMove(function (e) {
								this.WH(originalWidth + e.clientX - mx,
										originalHeight + e.clientY - my)
							})
							$.mouseUp(function () {
								$(this).off()
							})  //mouseUp anything?
							this.children().on('mousedown', function (e) {
								e.stopPropagation()
							})
						})
					}
					//  dva(2, 2, 2, 2 )
					div = $.divA(200, 200).XY(200)
					div.A(
							$.divA('red', 20, 20).top(-10).left(-10),
							$.divA('yellow', 20, 20).bottom(-10).right(-10),
							$.divA('green', 20, 20).top(-10).right(-10),
							$.divA('blue', 20, 20).bottom(-10).left(-10)
					)
					i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
							.width('100%').top(100)
					i.H(W() + ' * ' + H())
					$('*').resize(function () {
						i.H(W() + ' * ' + H())
					})
					$.$(function () {
						rat(function () {
							co()
						}, 10)
					})
					i.grow()
				}
				CORNERS = function () {
					$.fn.grow = function () {
						originalWidth = this.W()
						originalHeight = this.H()
						this.on('mousedown', function (e) {
							mx = e.clientX
							my = e.clientY
							$.mouseMove(function (e) {
								this.WH(originalWidth + e.clientX - mx,
										originalHeight + e.clientY - my)
							})
							$.mouseUp(function () {
								$(this).off()
							})  //mouseUp anything?
							this.children().on('mousedown', function (e) {
								e.stopPropagation()
							})
						})
					}
					//  dva(2, 2, 2, 2 )
					div = $.divA(200, 200).XY(200)
					div.A(
							$.divA('red', 20, 20).top(-10).left(-10),
							$.divA('yellow', 20, 20).bottom(-10).right(-10),
							$.divA('green', 20, 20).top(-10).right(-10),
							$.divA('blue', 20, 20).bottom(-10).left(-10)
					)
					i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
							.width('100%').top(100)
					i.H(W() + ' * ' + H())
					Z(function () {
						i.H(W() + ' * ' + H())
					})
					$.$(function () {
						rat(function () {
							co()
						}, 10)
					})
					i.grow()
				}
			}
			
			$.fn.grow = function () {
				originalWidth = this.W()
				originalHeight = this.H()
				this.on('mousedown', function (e) {
					mx = e.clientX
					my = e.clientY
					$.mouseMove(function (e) {
						this.WH(originalWidth + e.clientX - mx,
								originalHeight + e.clientY - my)
					})
					$.mouseUp(function () {
						$(this).off()
					})  //mouseUp anything?
					this.children().on('mousedown', function (e) {
						e.stopPropagation()
					})
				})
			}
			$.divF = $.div
			//  dva(2, 2, 2, 2 )
			div = $.divA(200, 200).XY(200)
			div.A(
					$.divA('red', 20, 20).top(-10).left(-10),
					$.divA('yellow', 20, 20).bottom(-10).right(-10),
					$.divA('green', 20, 20).top(-10).right(-10),
					$.divA('blue', 20, 20).bottom(-10).left(-10)
			)
			i = $.divF('purple').col('white').fontSize(20).al(.2).textAlign('center')
					.width('100%').top(100)
			i.H(W() + ' * ' + H())
			Z(function () {
				i.H(W() + ' * ' + H())
			})
			$.$(function () {
				rat(function () {
					co()
				}, 10)
			})
			i.grow()
		}
		plugins()
		function plugins() {
			JQ11 = QUU = function () {
				QUU = function () {
					$.x('x', 'quu')
					//  Qu   allow series fns to be execd asynch on an el
					//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
					//
					// which levgs qus to build up   series of steps
					// that will transtn  1+ CSS vals thru/out the dur
					//  can pass a cb fn to  .an()  to exec on done
					x = $('.x')
					x.an(
							{height: 20}, "slow",
							function () {
								$("#title").html("in cb")
							}
					)
					//   *Ques As Cbs
					// Instead of passing a cb as an argument,
					// we can add another function to the queue
					// that will act as our cb
					// This will execute
					// after all of the steps in the
					// anim  have completed.
					x.an(
							{height: 20},
							"slow"
					).qu(
							function () {
								$("#title").h("in anim")
								$(this).dq()
							}
					)
						//  tells jQ  to continto N-item in  que
						//    queued fn will exec   after the anim
						//  jQuery does not have any insight into
						// how the queue items function,
						// so we need to call .dequeue(),
						// which tells jQuery when to move to the n item in the queue.
						//  Another way of dequeuing
						// is by calling the fn that is passed to your cb
						// That fn will auto  call .dq() for you
							.qu(
							function (n) {
								$l("I fired!");
								n()
							}
					)
					//  *Custom Queues
					// Up to this point all of our anim
					// and qu   ex  have been using the def qu  n  which is fx.
					// Elements can have multiple queues
					// attached to them,
					// and we can give each of these qusa dif  name.
					// We can specify a custom queue name as
					// the 1st arg  to the .qu() method.
					x.qu(
							'an', function (n) {
								$l("Step 1");
								n()
							}
					).qu(
							'an', function (n) {
								$l("Step 2");
								n()
							}
					).dq('an');
					//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
					//   Clearing The Que
					//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
					x.qu(
							'an', function (n) {
								$l("nev log (qu clrd)");
								n()
							}
					)
							.clrQ('an').dq('an')
					//   In this example, nothing will happen as we removed everything from the steps queue.
					//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
					//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
					x.qu(
							'an',
							function (n) {
								$l("nev fire (qu replaced)");
								n()
							}
					)
							.qu(
							'an', [
								function (n) {
									$l("fired!");
									n()
								}
							]
					).dq('an')
					//
					// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
					x.qu(
							'an', function (n) {
								$l("fired!");
								n()
							}
					)
					$l(x.qu('an'))
					x.du('an') //?
				}
				$.x('x', 'quu')
				//  Qu   allow series fns to be execd asynch on an el
				//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
				//
				// which levgs qus to build up   series of steps
				// that will transtn  1+ CSS vals thru/out the dur
				//  can pass a cb fn to  .an()  to exec on done
				x = $('.x')
				x.an({height: 20}, "slow",
						function () {
							$("#title").html("in cb")
						})
				//   *Ques As Cbs
				// Instead of passing a cb as an argument,
				// we can add another function to the queue
				// that will act as our cb
				// This will execute
				// after all of the steps in the
				// anim  have completed.
				x.an(
						{height: 20},
						"slow").qu(function () {
							$("#title").h("in anim")
							$(this).dq()
						})
					//  tells jQ  to continto N-item in  que
					//    queued fn will exec   after the anim
					//  jQuery does not have any insight into
					// how the queue items function,
					// so we need to call .dequeue(),
					// which tells jQuery when to move to the n item in the queue.
					//  Another way of dequeuing
					// is by calling the fn that is passed to your cb
					// That fn will auto  call .dq() for you
						.qu(function (n) {
							$l("I fired!");
							n()
						})
				//  *Custom Queues
				// Up to this point all of our anim
				// and qu   ex  have been using the def qu  n  which is fx.
				// Elements can have multiple queues
				// attached to them,
				// and we can give each of these qusa dif  name.
				// We can specify a custom queue name as
				// the 1st arg  to the .qu() method.
				x.qu('an', function (n) {
					$l("Step 1");
					n()
				}).qu('an', function (n) {
					$l("Step 2");
					n()
				}).dq('an');
				//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
				//   Clearing The Que
				//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
				x.qu('an', function (n) {
					$l("nev log (qu clrd)");
					n()
				})
						.clrQ('an').dq('an')
				//   In this example, nothing will happen as we removed everything from the steps queue.
				//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
				//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
				x.qu(
						'an',
						function (n) {
							$l("nev fire (qu replaced)");
							n()
						})
						.qu(
						'an', [
							function (n) {
								$l("fired!");
								n()
							}
						]).dq('an')
				//
				// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
				x.qu('an', function (n) {
					$l("fired!");
					n()
				})
				$l(x.qu('an'))
				x.du('an')
			}
			JQ12 = ANF = function () {
				ANF = function () {
					z()
					a = $.dA().bgI('chicks').anf()
					anim = function (o) {
						o = o || {};
						return {
							u: o.u || 'chicks',
							n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
						}
					}
					an = function (q, a) {
						if (q.han) {
							_.cI(q.han)
						}
						if (a.u) {
							q.bi(a.u)
						}
						if (a.n > 1) {
							q.han = _.sI(
									function () {
										a.c++;
										if (!a.l && a.c > a.n) {
											_.cI(q.han);
											q.han = false
										}
										else {
											a.c %= a.n
										}
										q.sFr(a)
									}, a.r
							)
						}
					}
				}//call stack
				z()
				a = $.dA().bgI('chicks').anf()
				anim = function (o) {
					o = o || {};
					return {
						u: o.u || 'chicks',
						n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
					}
				}
				an = function (q, a) {
					if (q.han) {
						_.cI(q.han)
					}
					if (a.u) {
						q.bi(a.u)
					}
					if (a.n > 1) {
						q.han = _.sI(function () {
							a.c++;
							if (!a.l && a.c > a.n) {
								_.cI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r)
					}
				}
			}
			JQ123 = JQANIMZ = function () {
				JQANIMZ = function () {
					$.x('s', 'jqanim')
					/*
					 setBackgroundImage = q.bi = function(url){//set background image
					 var toUrl =function(url){
					 return 'url("'+ src(url) +'")'}
					 q.backgroundImage(toUrl(url))
					 return q}
					
					 bp=q.positionBackgroundImage=function(x,y){
					 var g=G(arguments),x=g[0],y=g[1]
					 x=N(x)?x:0
					 y=N(y)?y:0
					 q.css({backgroundPos:x+'px '+y+'px'})
					 return q}
					 fr=q.stFr=function(n,w){
					 if(O(n)){q.bp(n.n,n.w)}
					 else{q.bp(n*w)}
					 return q}
					
					 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
					 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
					
					 a= $.dA().bgImg('chicks').anf()
					
					 */
				}
				$.x('s', 'jqanim')
				/*
				 setBackgroundImage = q.bi = function(url){//set background image
				 var toUrl =function(url){
				 return 'url("'+ src(url) +'")'}
				 q.backgroundImage(toUrl(url))
				 return q}
				
				 bp=q.positionBackgroundImage=function(x,y){
				 var g=G(arguments),x=g[0],y=g[1]
				 x=N(x)?x:0
				 y=N(y)?y:0
				 q.css({backgroundPos:x+'px '+y+'px'})
				 return q}
				 fr=q.stFr=function(n,w){
				 if(O(n)){q.bp(n.n,n.w)}
				 else{q.bp(n*w)}
				 return q}
				
				 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
				 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
				
				 a= $.dA().bgImg('chicks').anf()
				
				 */
			}
			JQ14 = LETTERING = function () {
				z()
				LETTERINGPLUG = function () {
					function injector(t, splitter, klass, after) {
						var text = t.text()
								, a = text.split(splitter)
								, inject = '';
						if (a.length) {
							$(a).each(function (i, item) {
								inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
							});
							t.attr('aria-label', text)
									.empty()
									.append(inject)
						}
					}
					
					var methods = {
						init: function () {
							return this.each(function () {
								injector($(this), '', 'char', '');
							});
						},
						words: function () {
							return this.each(function () {
								injector($(this), ' ', 'word', ' ');
							});
						},
						lines: function () {
							return this.each(function () {
								var r = "eefec303079ad17405c889e092e105b0";
								// Because it's hard to split a <br/> tag consistently across browsers,
								// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
								// (of the word "split").  If you're trying to use this plugin on that
								// md5 hash string, it will fail because you're being ridiculous.
								injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
							});
						}
					};
					$.fn.lettering = function (method) {
						// Method calling logic
						if (method && methods[method]) {
							return methods[method].apply(this, [].slice.call(arguments, 1));
						} else if (method === 'letters' || !method) {
							return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
						}
						$.error('Method ' + method + ' does not exist on jQuery.lettering');
						return this;
					};
				};
				LETTERINGPLUG()
				span = $.sp('hello').A()
				span.lettering() // wrap <span class="charx"/ > around each character within header
				$spans = span.find('span')
				$('.dropped span').css({transition: 'all 0.3s ease-in'})
			}
			JQ15 = FALLING = function () {
				FALLING = function () {
					z();
					//this goes in css
					$header2 = $.sp('hello').A();
					$header2.lettering(); // wrap <span class="charx"/ > around each character within header
					$spans = $header2.fi('span');
					delay = 0;
					$header2.$(
							function () {
								$spans.e(
										function () {
											$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
											delay += 0.1
										}
								);
								$header2.K('dropped'); // Add "dropped" class to header to apply transition
								setTimeout(
										function () { // reset header code
											$spans.e(
													function () {
														$(this).css({transitionDelay: '0ms'})
													}
											);
											// set transition delay to 0 so when 'dropped' class is removed,
											// letter appears instantly
											$header2.removeClass('dropped'); // remove class at the "end" to reset header.
											delay = 0
										}, 1800
								); // 1800 is just rough estimate of time transition will finish, not the best way
							}
					)
				}
				z()
				//this goes in css
				$header2 = $.span('hello').A()
				$header2.lettering() // wrap <span class="charx"/ > around each character within header
				$spans = $header2.find('span')
				delay = 0
				$header2.on('click', function () {
					$spans.each(function () {
						$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
						delay += 0.1
					})
					$header2.K('dropped') // Add "dropped" class to header to apply transition
					setTimeout(function () { // reset header code
						$spans.each(
								function () {
									$(this).css({
										transitionDelay: '0ms'
									})
								})
						// set transition delay to 0 so when 'dropped' class is removed,
						// letter appears instantly
						$header2.removeClass('dropped') // remove class at the "end" to reset header.
						delay = 0
					}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
				})
			}
		}
	}
}
function localStorApps(){
	MIN111 = function () {
		bbLocStorPLUG()
		Note = M$({
			defaults: function () {
				return {
					content: "Note created on " +
					new Date().toISOString()
				}
			}
		})
		NoteCollection = C$({
			model: Note,
			localStorage: $store("choose-some-identifier")
		})
		myNotes = new NoteCollection();
		myNotes.fetch();
		note1 = new Note();
		myNotes.add(note1);
		note1.save()
		n = 0
		myNotes.models.forEach(function (model) {
			$l("Model in collection: "
					+ model.get("content")
					+ n++
			);
		})
		$.bt('clr', function () {
		})
	}
	BBLS = function () {
		bbLocStorPLUG()
		Cl = bb.C.x({
			localStorage: new bb.LocalStorage('clN')
		})
	}
	BUC51 = BUCKYVID51 = function () {
//buck is just a local storage example
//https://www.youtube.com/watch?v=Kn_AIiV6Cp0&index=53&list=PL081AC329706B2953
		$CSS(bucCSS)
		$.f().a2($.scI('leftbox')).A(
				$.p(['(key) One: ', $.ip().id('one')]),
				$.p(['(value) Two: ', $.ta().id('two')]),
				$.bt('save', function () {
					$s('one', $.V('one'))
					$('#rightbox').html(
							'one: ' + $g('one') + ', ' +
							'two: ' + $g($s('two', $.V('two'))))
					return false
				})
		)
		$.scI('rightbox', ['nothing!'])
	}
	BUC52 = function () {
		$CSS(bucCSS)
		$.scI('leftbox', [$.f([$.p(['(key) One: ', $.ip().id('one')]),
			$.p(['(value) Two: ', $.ta().id('two')])]).A(
				$.bt('clr', function () {
					$clr()
					display()
					return false
				}),
				$.bt('save', function () {
					var one = $.V('one')
					var two = $.V('two')
					$set(one, two)
					display()
					return false
				})
		)])
		$.scI('rightbox', ['nothing yet hoss!'])
		display()
		function display() {
			rBox = $('#rightbox').html('')
			_.t($len(), function (i) {
				var key = $key(i)
				val = $g(key)
				var str = 'key:  ' + key + ',  val: ' + val
				rBox.A(str, $.br())
			})
		}
	}
	STORAGE = function () {
		z()
		saveFromLocStor = function () {
			i = ta().id('input')
			i.q.value = localStorage.getItem('myText') || ''
			i.o('u', function () {
				localStorage.setItem('mytext', i.value)
			}, false)
		}
		readDatFromOtherPageLoc = function () {
			//put windows side by side and watch one update the other
			i = qi('input')
			I(function () {
				i.q.value = localStorage.getItem('myText') || ''
			}, 50)
		}
		saveFromSesStor = function () {
			i = ta().id('input')
			i.q.value = sessionStorage.getItem('myText') || ''
			i.o('u', function () {
				sessionStorage.setItem('mytext', i.value)
			}, false)
		}
	}
	GOODGIRL = function () {
		saveFromLocStor = function () {
			$ta = ta().id('input')
			$ta.q.value = $g('myText') || ''
			$ta.o('u', function () {
				$s('mytext', $ta.value)
			}, false)
		}
		readDatFromOtherPageLoc = function () {
			//put windows side by side and watch one update the other
			_.ev(.1, function () {
				$('#input').val(
						$g('myText') || '')
			})
		}
	}
	LOCALSTORAGEYANOMODALPHA = function () {
		$ls = L = function (k, v0) {
			if (D(v0)) {
				L.s(k, v0)
			}
			var fn = function (v) {
				if (U(v)) {
					return L.g(k)
				}
				L.s(k, v)
				return fn
			}
			return fn
		}
		L.g = function (k) {
			return _lS.getItem(k)
		}
		L.s = function (k, v) {
			_lS.setItem(k, v)
			return L
		}
		L.r = L.rm = function (k) {
			var vOld = _lS.getItem(k)
			_lS.removeItem(k)
			return vOld
		}
		L.l = L.L = function () {
			return _lS.length
		}
		L.clr = L.x = function () {
			_lS.clear()
			return L
		}
		$.x('r', 'localStorage')
		$ls.s('food', 'zebra')
		//  j = $ls('jason'); j('eats')
		// j = $ls('jason')('eats')
		j = $ls('jason', 'eats')
		$.h1('i didnt know that jason ' +
		j() + ' ' + $ls.g('food') + '!')
	}}
dragFrame()
dragStage()
function dragFrame() {
	CV20 = DRAGSTG = function () {
		Q(function () {
			c = $.c('g', 600, 300)
			f = $.dragFrame(c)
			x = c.ctx()
			x.d('me', 100, 100)
			c.$(function (x1, y1) {
				x.a(x1, y1, 2).s()
			})
		})
	}
	DFP = DRAGFRAME = PATH = function () {
		$.dragFrame = function (d) {
			//d = d || $.d('y', 50, 50).mar(20)
			d.on('mousedown', function (e) {
				//e.stopPropagation()
			})
			var outerDiv = $.d().C('z').A(d).drag().css('padding', 20)
			SL(outerDiv)
			return outerDiv
		}
		$Ld(function () {
			s = c = $.c('g', 200, 200)
			d = $.c('x', 200, 200)
			f = $.dragFrame(c)
			f1 = $.dragFrame(d).X(300)
			x = c.ctx()
			xx = d.ctx()
			x.c('X', 'X').fr(0, 0, 1000, 1000)
			x.b(10, 30, 'r', 'X')
			x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
			x.cl()
			x.d('me', 50, 50)
			d.ctx().d('me', 0, 0)
			_.in(function () {
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				xx.d(d, 35, 15)
				_.in(function () {
					x.d(d, 0, 0)
					_.in(function () {
						xx.c('X').clearRect(0, 0, 200, 200)
						xx.d(c)
					})
				})
			})
		})
	}
	$.dg1 = $.dragFrame1 = function (ob) {
		var oD = $.d('r', '+').pad(10)
		inD = $.d('y').md(function (e) {
			e.stopPropagation()
		})
		oD.A(inD)
		return inD.A(ob)
		var outerD = $.d('r', '+').pad(10)
		var oD = $.d('y').pad(20).drag()
		var d = d || $.d('r').mar(20)
		d.xPrp().a2(oD)
		d.oD = oD
		oD.XY(40, 40)
		var innerD = ob || $.d('y').md(function (e) {
					e.stopPropagation()
				})
//	innerD.on('mousedown', function (e) {e.stopPropagation()})
		outerD.A(innerD)
		return innerD.A(ob)
	}
}
function dragStage() {
	$.dragStage = function (x, y) {
		dragFrame = function (div) {
			var outerDiv = $.div('r').drag().pad(20).A()
			div = div || $.div('y', 50, 50).mar(20)
			div.on('mousedown', function (e) {
				e.stopPropagation()
			})
			outerDiv.A(div)
			return outerDiv
		}
		c = $.canvas('g', 400)
		s = new cjs.Stage(c[0]).tick()
		dragFrame(c).A()
		return s
	}
	$.dragStage = function (x, y) {
		c = $.c('g', 400)
		s = $St(c[0])
		$.dragFrame(c).A()
		return s
	}
	TWEENBOX = DRAGSTAGE = function () {
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}
	$.dragStage1 = function (x, y) {
		var can = $.c('g', 400)
		$St(can[0])
		$.dragFrame(can)
		return st
	}
	IX1 = INDEX = DRAGSTAGETRANSFORM = function () {
		s = $.dragStage().bm('me', function (bm) {
			b = bm
			SL(b)
			_.t(10, function () {
				s.bm('guy', SL)
			})
			s.ch(b, 3)
		})
	}
}
FANCYEDIT = function (x, y) {
	canvas = $.canvas('g', 400)
	stage = new cjs.Stage(canvas[0]).tick()
	frame = $.dragFrame(theSpan = $.span())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imagesDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $span()
				var newStage = dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sxy(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
}
$.colorPicker = $.ColorPicker = function () {
	z()
	colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
	colorPicker.change(function () {
		$l(colorPicker.val())
	})
}
FAANCYY = function (x, y) {
	z()
	canvas = $.c('g', 400)
	st = stage = $St(canvas[0])
	frame = $.dragFrame(sp = $.sp())
	sp.A(
			$.bt('X', function () {
				frame.rm()
			}),
			$.bt('pics', function () {
				$.imgDiv(st)
			}),
			$.bt('transform'),
			$.bt('text'),
			$.bt('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						st.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							//                    stagePainter(paintStage)
						})
			}),
			$.bt('cut'),
			$.bt('save'))
	sp.A($.br(), canvas)
	sp.A($.d().A(
			$.bt('clear', function () {
				st.removeAllChildren()
			}),
			$.bt('flat', function () {
				st.removeAllChildren()
				st.bm(st.toDataURL(), function (bm) {
					bm.dg()
				})
			}),
			$.bt('clone', function () {
				var sp = $.sp(),
						newStage = $.dragStage().A(sp)
				newStage.bm(st.du(), function (bm) {
					SL(bm)
				})
			}),
			$.bt('recur', function () {
				stbm(st.du(), function (bm) {
					bm.sxy(.4).SL()
				})
			}),
			$.bt('copy', function () {
				_copy = st.du()
			}),
			$.bt('paste', function () {
				st.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.bt('replace', function () {
				st.rm()
				st.bm(_copy, function (bm) {
					bm.dg()
				})
			})
	))
	sp.$$(function () {
		$('button').toggle()
	})
	sp.A()
}//C
FAANCY = function (x, y) {
	z()
	$.iD = $.imgDiv = function (st) {
		d = $.d('y', '+')
		$.eGj('img', function (i) {
			d.A($.c(100, 100).fit(i.d)
					.$(function () {
						st.bm(i.d, function (bm) {
							bm.sXY(.4).dg()
						})
					}))
		})
	}
	canvas = $.c('g', 400)
	stage = new cjs.Stage(canvas[0]).t()
	frame = $.dragFrame(theSpan = $.sp())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imgDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	theSpan.A($.br(), canvas)
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $.sp()
				var newStage = $.dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sXY(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	theSpan.A()
}//A-
ZXZ = function () {
	$.fn.md = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mu = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mm = function (l) {
		$l('mU')
		var c = this
		c.mousemove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.$$ = $.fn.dblclick
	$.eD = $.editDiv = function (words) {//$.dE
		canMove = true
		changeLocation = true
		inputMove = true
		mouse = 'up'
		ta = $.ta().mar(4)
		sp = $.sp().C('z')
		fn = function () {
			sp.T(ta.v())
		}
		d = $.dA('+').C('n', 'y').pad(8)
		d.zIndex(0)
		xBt = $.bt('', function () {
			d.rm()
		}).WH(4).C('red')
		d.md(function () {
			inputMove = false;
			mouse = 'div'
		})
		d.mu(function () {
			mouse = 'up'
		})
		d.md(function () {
			$.editDiv.TOP++
			$(this).zIndex($.editDiv.TOP)
		})
		ta.md(function (e) {
			$.editDiv.TOP++
			$(this).parent().zIndex($.editDiv.TOP)
			location = {top: d.Y(), left: d.X()}
			inputMove = true
			mouse = 'input'
			e.stopPropagation()
		})
		ta.mm(function (e) {
			if (inputMove) {
				e.stopPropagation();
				d.XY(location.left, location.top)
			}
		})
		if (U(words)) {
			return d.A(xBt, $.br(), sp.hd(), ta,
					$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
						$(this).pa().free()
					})
			).$$(function (e) {
						e.stopPropagation()
						sp.T(ip.v())
						xBt.gg();
						ip.gg();
						sp.gg()
					})
		}
		else {
			ip.v(words)
			sp.T(ta.v())
			return d.$$(function (e) {
				e.stopPropagation()
				sp.T(ta.v())
				xBt.gg();
				ip.gg();
				sp.gg()
			}).A(xBt, $.br(), sp, ip.hd())
		}
	};
	$.editDiv.TOP = 0
	z()
	a = $.editDiv().A().C('a')
	b = $.editDiv().A().C('b')
}//C-
 