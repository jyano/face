SS23 = MDCL = function () {
	$s({_sidebar: {dp: 'fl'}})
	
	$.sty('@media only screen and (max-width: 500px) ' +
	$subRules({_sidebar: {dir: 'c'}}))
	//  *** alt works :$.sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
	$.dK('sidebar').WH(400, 500).C('b').A($.i('me'), $.i('me'), $.i('me'))
}
SS33 = DVT = DEVTIPS = function () {
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
SS34 = DVT1 = function () {
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
SS35 = DVT2 = WRAPREV = function () {
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
SS36 = DVT3 = JUSTIFYCONTENT = function () {
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
SS37 = DVT4 = ALIGNITEMS = function () {
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
SS38 = DVT5 = ALIGNCONTENT = function () {
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
SS39 = LAY = function () {
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
SS40 = MOB = MEDIAOBJECT = function () {
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

SS13 = NONE = function () {
	//$.sty(maxW(500) + $subRules({d:{dp:'n'}}))
	smaller=until=__W=belowW=lessThanRu=maxWRu = function (w, css) {
		$.sty(maxW(w) + $subRules(css))}
	smaller(500, {d:{dp:'n'}})
	$.d('y',400, 500)
}



SS15 = MED3 = function () {
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

SS17 = MED1 = function () {
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

SS18 = MED = function () {
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") +
	 below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	$s(Ob(str1, str2))
	$.sp().A('span')
	$.h1().A('h1')
}


SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
SS20 = MVD1 = function () {
	vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
}
SS21 = MVD = function () {
	vidHtml();
	$tablet(tabRus);
	$phone(phRus)
}
SS26 = GREENBTS = function () {
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
SS27 = YELLOWBTS = function () {
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
SS29 = DOWN = FLEX_DIR_COLUMN = function () {
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
SS30 = FLD2 = BASISD = function () {
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
			}})
		return parent
	}
	
}