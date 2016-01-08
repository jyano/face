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
//$s("h1 { @media (min-width:400px) {font-size: 10px;} }")
//$s("h1 { @media (max-width:400px) {font-size: 20px;} }")
// $s( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )
//$.h1('afsdfdsasdf')
// @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }
//  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }