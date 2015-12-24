//MED:
//@media screen and (min-width:600px) {        nav { float: left; width: 25%; }        section { margin-left: 25%; }      }	
// @media screen and (max-width:599px) {        nav li { display: inline;  }          }
//VIEWPORT : 
// <meta name="viewport" content="initial-scale=1">
// http://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972
//http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho
$CSS.mx.bpLarge = function (cont) {
				return ['@media only screen and (max-width: 400px)', cont
				]
			}
$CSS.mx.bpMid = function (cont) {
		return ['@media only screen and (max-width: 600px)', cont
		]
	}	
$CSS.mx.bpSmall = function (cont) {
		return ['@media only screen and (max-width: 800px)', cont
		]
	}
 