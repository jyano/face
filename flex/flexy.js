FLEX = {

	a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
	i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
	n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
	sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
}

_.x(ooo, {

	$D: {r: 'row', R: 'row-reverse', c: 'column', C: 'column-reverse'},
	$W: {w: 'wrap', W: 'wrap-reverse', nw: 'nowrap'},
	$J: {
		fs: 'flex-start',
		fe: 'flex-end',
		c: 'center',
		sB: 'space-between',
		sA: 'space-around',
		i: 'initial',
		_: 'inherit'
	},
	$I: {
		fs: 'flex-start', fe: 'flex-end',
		c: 'center', b: 'baseline', s: 'stretch'
	},
	
	$C: {
		fs: 'flex-start',
		fe: 'flex-end',
		c: 'center',
		sB: 'space-between',
		sA: 'space-around',
		i: 'initial',
		_: 'inherit'
	},
	$A: {
		fs: 'flex-start',
		fe: 'flex-end',
		c: 'center',
		b: 'baseline',
		s: 'stretch',
		i: 'initial',
		_: 'inherit',
		a: 'auto'
	}
})
/*
_.x(ooo, {
	dir: ooo.$D,
	wrap: ooo.$W,
	jsC: ooo.$J,
	alI: ooo.$I,
	jsA: ooo.$C,
	$A: ooo.$A
})
*/

$.fn.flx = $.fn.flex = $.fn.fl = function () {
	return this.css('display', 'flex')
}
$.fn.jfC = $.fn.jC = $.fn.$J = function (a) {
	return this.css('justify-content', a)
}
$.fn.alI = $.fn.$I = function (a) {
	return this.css('align-items', a)
}
$.fn.alC = $.fn.$C = function (a) {
	return this.css('align-content', a)
}
 
  