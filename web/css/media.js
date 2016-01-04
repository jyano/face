$L('phone', 'tablet','cutoffs')
$subRules = function (rulesOb) {
	return _brace($rules(rulesOb))
	//for meta (see Grail)
}
function cutoffs(){
	minW = above = greaterThan = atLeast = min = function (num, str) {
		return '@media all and (min-width: ' + num + 'px) ' + (str || '')
	}
	maxW = below = lessThan = max = function (num, str) {
		return '@media all and (max-width: ' + num + 'px) ' + (str || '')
	}
	between = within = function (n1, n2, str) {
		maxMin = function (n1, n2, str) {
			return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
		}
		return maxMin(n2, n1, str)
	}
}
function phone(){
	_$phone = function (ob) {
		return _phone + $rules(ob)
	}
	$phone = function (ob) {
		$.Sty(_$phone(ob))
	}
}
function tablet(){
_$tablet = function (ob) {
	return _tablet + $rules(ob)
}
 

$tablet = function (ob) {
	$.Sty(_$tablet(ob))
}
}
function _pre() {
	_tablet = '@media screen and (max-width: 960px)'
	_phone = '@media screen and (max-width: 640px)'
	$tp = window['$tp'] || {}
	tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
	phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
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
