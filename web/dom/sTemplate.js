//QT:  an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
$.tpFn=  qT = function (tpFn, ob, el) {
	return tpFn(ob, $(el || '<div>'))
}
$.tpFn.thed =  sampleTemplate= function (ob, el) {
	return $(el).A($.tH().A(
			$.tr().K('header')(
					$.th().A('Name'),
					$.th.().A('Age'))))		
}
	//   use like this: q = $.tpFn( $.tpFn.thed ).A()
$.tp.lii =   function (ob, el) {//two ways ok!!!!
//can pass://1) jq/el
	return $(el).A($.li(ob.me), $.li(ob.me))
}
$.tp.lii2 = function (ob, el) {
	//2) or .... array
	return [$.li().A(ob.me), $.li().A(ob.me)]
	// use like this: q= $.tpFn( $.tpFn.lii, {me:'jason'} ).A()
}
//  QTexample: resultingChildElOrEls = $.tp($.tp.lii, {me: 'jason'}).A()
 


