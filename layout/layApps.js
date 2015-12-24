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
	$.h1('fasd').A() //doesnt respond
}