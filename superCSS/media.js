NONE1 = function () {
	$.Sty('@media (max-width: 600px) {.sidebar {display: none;}}')
	$.dK('sidebar').WH(400, 500).C('b')
}
NONE = function () {
	sty = '@media only screen and (max-width: 500px) ' + $subRules({_sidebar: {dp: 'none'}})
	$.Sty(sty)
	$.dK('sidebar').WH(400, 500).C('b')
}
MEDIA = function () {
	sty = '@media only screen and (max-width: 500px) ' + $subRules({bd: {C: 'b'}})
	$.Sty(sty)
}
MED3 = function () {
	$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}", '*')
	$s("@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
	$.sp().A('span')
	$.h1().A('h1')
}
MED2 = MEDWORKS = BREAK3 = function () {

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
MED1 = function () {
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
MED = function () {
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	css = Ob(str1, str2)
	$s(css)
	$.sp().A('span')
	$.h1().A('h1')
}
MVD2 = MEDVID = MEDIAVIDTUT = function () {
	vidHtml()
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
}
MVD1 = function () {
	vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
}
MVD = function () {
	vidHtml();
	$tablet(tabRus);
	$phone(phRus)
}
$ct = function () {
//!: $.ct gives jQuery error
	return $.d().K('ct').id('ct')
}
$styS = $styStr = unused = function (ob) {
	return J.s($sty(ob))
}
yada = function (n) {
	n = N(n, 20)
	var str = ''
	_.t(n, function () {
		str += 'yada '
	})
	return str
}
$subRules = function (rulesOb) {
	return _brace($rules(rulesOb))
	//for meta (see Grail)
}
above = greaterThan = atLeast = min = function (num, str) {
	return '@media all and (min-width: ' + num + 'px) ' + (str || '')
}
below = lessThan = max = function (num, str) {
	return '@media all and (max-width: ' + num + 'px) ' + (str || '')
}
between = within = function (n1, n2, str) {
	maxMin = function (n1, n2, str) {
		return max(n1) + ' and (min-width: ' + n2 + 'px)' + (str || '')
	}
	return maxMin(n2, n1, str)
}
//https://www.youtube.com/watch?v=fA1NW-T1QXc
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
_tablet = '@media screen and (max-width: 960px)'
_phone = '@media screen and (max-width: 640px)'
_$phone = function (ob) {
	return _phone + $rules(ob)
}
$phone = function (ob) {
	$.Sty(_$phone(ob))
}
_$tablet = function (ob) {
	return _tablet + $rules(ob)
}
$tablet = function (ob) {
	$.Sty(_$tablet(ob))
}
tabRus = {$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, i: {w: '100%'}}
phRus = {$left: {w: '100%'}, $right: {w: '100%'}}
MEDCOL = function () {
	$s({_sidebar:{dp:'fl'}})
	$.Sty('@media (max-width: 600px) {.sidebar {flex-direction: column;}}')
	//$.Sty($rules({_sidebar : {'flex-direction': 'column'}}))
	$.dK('sidebar').WH(400, 500).C('b').A(
			$.i('me'), $.i('me'), $.i('me')
	)
}
MDCL = function () {
	$s({_sidebar: {dp: 'fl'}})
	//sty = '@media (max-width: 600px) {.sidebar {flex-direction: column;}}'
	
	sty = '@media only screen and (max-width: 500px) ' + 
	$subRules({_sidebar : {'flex-direction': 'column'}})
	$.Sty(sty)
	
	$.dK('sidebar').WH(400, 500).C('b').A(
			$.i('me'), $.i('me'), $.i('me')
	)
}
 