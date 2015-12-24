//https://www.youtube.com/watch?v=fA1NW-T1QXc

vidHtml=function(){
	$ct().A(
			$.i('me'),
			$.d().K('fl').A(
					$.sc().id('left').A('this is the left column (a section)' + yada()),
					$.ac().id('right').A('this is the right column (an article)' + yada())
			)
	)
}
MVD2 = MEDVID = MEDIAVIDTUT = function () {
	$s({
		bd: {dp: 'fl', jfC: 'c'},
		_ct: {w: 960, B: '20px solid yellow'},
		$right: {C: 'o', w: 260},
		$left: {C: 'b', w: 700},
		img: {
			w: 960, h: 400
		},
		_fl: {dp: 'fl', wr: 'wr'}
	})
	med = '@media screen and (max-width: 960px)'
	decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
	$.Sty(med + decs)
	med = '@media screen and (max-width: 640px)'
	decs = '{ #ct{width:100%;}  #left{width:100%} #right{width:100% }   }'
	$.Sty(med + decs)
	vidHtml()
	
}
MVD1   = function () {
	
	$s({
		bd: {dp: 'fl', jfC: 'c'},
		_ct: {w: 960, B: '20px solid yellow'},
		$right: {C: 'o', w: 260},
		$left: {C: 'b', w: 700},
		i: {w: 960, h: 400},
		_fl: {dp: 'fl', wr: 'wr'}
	})
	$tablet({$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, img: {w: '100%'}})
	$phone({$left: {w: '100%'}, $right: {w: '100%'}})
	vidHtml()
}
MVD = function () {
	$s({
		bd: {dp: 'fl', jfC: 'c'},
		_ct: {w: 960, B: '20px solid yellow'},
		$right: {C: 'o', w: 260},
		$left: {C: 'b', w: 700},
		i: {w: 960, h: 400},
		_fl: {dp: 'fl', wr: 'wr'},
		_tablet: $rules({$ct: {w: '100%'}, $left: {w: '70%'}, $right: {w: '30%'}, img: {w: '100%'}}),
		_phone: $rules({$left: {w: '100%'}, $right: {w: '100%'}})
	})
	vidHtml()
}
///

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
// rule is selector + property (margin) and value 
// property/value pairs..
// examample selector: 'h1, h2'
// three types of selectors:
// - html, class/id, pseudo
// rule is a selector and a dec block
// declaration block is made up of declarations (property/value (key-word) pairs)
//MED:
//@media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }	
// @media screen and (max-width:599px) {        nav li { display: inline;  }          }
//VIEWPORT : 
// <meta name="viewport" content="initial-scale=1">
// http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
//http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho
FL0 = GRAIL = function () {
	bdCss = {f: '24px Helvetica', C: 'a', c: 'b'}
	hdrFtrCss = {C: 'x', d: 'b', M: 4, P: 5, h_: 100, B: ['bor', 'r'], bRd: '7pt'}
	mainCss = {h_: 800, M: 0, P: 0, d: '$', $D: 'r'}
	articleCss = {
		M: 4, P: 5, B: ['bor', 'p'],
		bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
	}
	navCss = {C: 'o', M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', $: '1 6 30%', $O: -1}
	asideCss = {M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', C: 'x', $: '1 6 20%', $O: 3}
	$.hdr(' heeeeader!!!')
	$.dI('main').A(
			$.ac('article'),
			$.nv().A('nav'),
			$.as('aside')
	)
	$.ftr('footer')
	css = {
		bd: bdCss,
		'header, footer': hdrFtrCss,
		$main: mainCss,
		'$main > article': articleCss,
		'$main > nav': navCss,
		'$main > aside': asideCss,
		'@media all and (max-width:640px)': $subRules({
			"#main, #page": {'flex-direction': 'column', C: 'z'},
			"#main>article, #main>nav, #main>aside": {$O: 0},
			"#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
		})
	}
	_.in(function () {
		$s(css)
	})
}
MEDIA = function () {
	$s({
		'@media (max-width: 600px) ': '.sidebar {display: none;}'
	})
	$.dK('sidebar').WH(400, 500)
			.C('b')
}
//$s("h1 { @media (min-width:400px) {font-size: 10px;} }")
//$s("h1 { @media (max-width:400px) {font-size: 20px;} }")
// $s( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
//$.h1('afsdfdsasdf')
// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }
MED = MEDWORKS = BREAK3 = function () {

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
MED = function () {
	$s("@media all and (min-width: 960px) { body {font-size: 80px;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}", '*')
	$s("@media all and (min-width: 960px) { body {color:blue;}  }",
			"@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
			"@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}")
	$.sp().A('span')
	$.h1().A('h1')
}
MD1 = function () {
	$l('MD.')
	$s(above(960, " { body {font-size: 80px;}  }"),
			between(600, 960, "  {body {font-size: 40px;}}"),
			between(320, 600, "  {body {font-size: 20px;}}"),
			'*'
	)
	$s(
			above(960, "{ body {color:blue;}  }"),
			between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	)
	$.sp().A('span')
	$.h1().A('h1')
}
MD = function () {
	str1 = above(960, "{ body {color:blue;}  }")
	str2 = between(600, 960, " {body{color:red;}}") + below(600, " {body{color:green;}}")
	//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
	css = Ob(str1, str2)
	$s(css)
	$.sp().A('span')
	$.h1().A('h1')
}
$ct = function () {
//!: $.ct gives jQuery error
	return $.d().K('ct').id('ct')
}
$styS = $styStr = function (ob) {
	return J.s($sty(ob))
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
yada = function(n){
	n=N(n,20)
	var str = ''
	_.t(20, function(){
	str += 'yada '
	})
	return str
}
MDX1=function(){
	
	   
	sty= '@media only screen and (max-width: 500px) '+ $subRules({bd:{C:'b'}}) 
	
	
	$.Sty(sty)
}