FLEX = {
	a: 'auto', b: 'baseline', m: 'center',
	c: 'column', C: 'column-reverse',
	i: 'initial', _: 'inherit',
	r: 'row', R: 'row-reverse',
	n: 'nowrap',
	s: 'flex-start',
	e: 'flex-end', S: 'stretch',
	sB: 'space-between',
	sA: 'space-around',
	w: 'wrap', W: 'wrap-reverse'
}
FLEXD = {r: 'row', R: 'row-reverse', c: 'column', C: 'column-reverse'}
FLEXW = {w: 'wrap', W: 'wrap-reverse', nw: 'nowrap'}
FLEXJ = {
	fs: 'flex-start',
	fe: 'flex-end',
	c: 'center',
	sB: 'space-between',
	sA: 'space-around',
	i: 'initial',
	_: 'inherit'
}
FLEXC = {
	fs: 'flex-start',
	fe: 'flex-end',
	c: 'center',
	sB: 'space-between',
	sA: 'space-around',
	i: 'initial',
	_: 'inherit'
}
FLEXI = {fs: 'flex-start', fe: 'flex-end', c: 'center', b: 'baseline', s: 'stretch'}
FLEXA = {
	fs: 'flex-start',
	fe: 'flex-end',
	c: 'center',
	b: 'baseline',
	s: 'stretch',
	i: 'initial',
	_: 'inherit',
	a: 'auto'
}
_.x(ooo, {
	$D: FLEXD,
	$W: FLEXW,
	$J: FLEXJ,
	$I: FLEXI,
	$C: FLEXC,
	$A: FLEXA
})
$.fn.fl = function () {
	this.css('display', 'flex')
	return this
}
$.fn.$J = function (a) {
	this.css('justify-content', a)
	return this
}
$.fn.$I = function (a) {
	this.css('align-items', a)
	return this
}
$.fn.$C = function (a) {
	this.css('align-content', a)
	return this
}
FL1 = FLX = function () {
	$S({
		_sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
		_sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
	})
	d = $.dS({
		'display': 'flex',
		'justify-content': 'space-between'
	}).A(
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
 
FL3 = BASIS = function () {
	str = 'This is a bit longer lineThis is a bit longer lineThis is a bit longer' + ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
	' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' + 'is a bit longer lineThis is a bit longer lineThis is a bit longer line'
	$.x('o', 'basis')
	// http://jsfiddle.net/jakub_g/s5jAB/
	// Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
	$CSS({
		_ch: {c: 'w', P: 10, M: 10},
		_ct: {
			C: 'y', P: 10,
			d: '$'
		},
		_ch1: {
			C: "u",
			$: '8 1 600px'
		},// If there's more space, the first one grows 5x faster than the second.
		_ch2: {
			C: 'g',
			d: '$', $: '1 2 400px', $W: 'w'
		}, // If there's less space, the second one shrinks 3x faster than the first.
		d: {B: ['bor', 'b']}
	})
	$.dK('ct').A(
			$.dK('ch ch1').A($.h3('Child One'), $.p('Lorem ipsum'), $.p('dolor sit amet'), $.p(str)),
			div = $.dK('ch ch2').A('Two')
	)
	_.t(20, function () {
		$.d($r(), 40, 40).K('ch1').a2(div)
	})
	$S()
	/*
	
	 div { border:8px solid Blue; }
	 .ct { display:flex; padding:10px; background-color:Yellow; }
	 .ch { padding:10px; margin:10px; color:White; }
	 .ch1 { flex:8 1 600px; background-color:Purple; }
	 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
	
	
	
	 */
}
FL4 = FLEXCT = function () {
	$S({
		'.flex-container': {
			display: 'flex', 'flex-direction': 'row',
			$W: 'w', 'justify-content': 'space-around',
			'align-content': 'flex-start', 'align-items': 'stretch'
		},
		'.flex-items-default': {
			width: '300px', height: '250px',
			'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
		},
		'.flex-item-1': {
			width: '100px',
			height: '100px',
			'flex-grow': 1,
			'flex-shrink': 0,
			'flex-basis': '98%'
		},
		'.flex-item-2': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
		},
		'.flex-item-3': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-4': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0,
			'flex-basis': '200px'
		},
		'.flex-item-5': {
			width: '100px', height: '100px',
			'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
		}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
}
FL5 = GME = function () {
	$.x('y', 'gme');
	$CSS({
		'html, body': {w: '100%', h: '100%', M: 0, P: 0},
		'body.box': {d: $, flD: 'column'},
		'body > *': {P: '.5em'},
		header: {C: 'b'},
		article: {C: 'r', $: 1},
		footer: {C: 'g'},
		'header.cnt': {'-moz-column-count': 3},
		'header:not(.cnt)': {'-moz-column-width': 100}
	})
	$.hdr().A('Click', $.br(), 'to change', $.br(),
			'header {column-…}').A()
	$.ac().A('Click',
			$.br(),
			'to', $.br(), 'change', $.br(), 'body {display: …}').A()
	$.ftr().A()
	$("header").$(function () {
		$(this).toggleClass("cnt");
		logClass();
	});
	$("article").$(function () {
		$.bd().toggleClass("box");
		logClass()
	})
	logClass()
	function logClass() {
		var logTxt = "Header: "
		if ($("header").hasClass("cnt")) {
			logTxt += "column-count"
		} else {
			logTxt += "column-width"
		}
		logTxt += "; Body: ";
		if ($("body").hasClass("box")) {
			logTxt += "flex-box"
		}
		else {
			logTxt += "block"
		}
		$("footer").text(logTxt)
	}
}
FL6 = FB = function () {
	$.x('o', 'flex')
	$CSS({
		_ct: {
			d: '$',
			//  define  flow dir
			// and
			// if we allow the items to wrap
			//  Remember this is the same as:
			$D: 'r',
			$W: 'w',
			//      'flex-flow' : 'row wrap',
			// Then we define how is distributed the remaining space
			flJC: 'space-around'
		}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
	function Item(n) {
		return $.dK('.flex-item-' + (n || 1)).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
}
FL0 = GRAIL = function () {


bdCss = {f: '24px Helvetica', C: 'a', c: 'b'}
hdrFtrCss= {C: 'x', d: 'b', M: 4, P: 5, h_: 100, B: ['bor', 'r'], bRd: '7pt'}
mainCss= {h_: 800, M: 0, P: 0, d: '$', $D: 'r'}
articleCss= {
	M: 4, P: 5, B: ['bor', 'p'],
	bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
}
navCss= {C: 'o', M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', $: '1 6 30%', $O: -1}
asideCss= {M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', C: 'x', $: '1 6 20%', $O: 3}
mediaCss= $subRules({
	"#main, #page": {$D: 'c'},
	"#main>article, #main>nav, #main>aside": {$O: 0},
	"#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
})
mediaSel= '@media all and (max-width:640px)'
	
	$s({
	
		bd: bdCss,
		'header, footer': hdrFtrCss,
		$main: mainCss,
		'$main > article': articleCss,
		'$main > nav': navCss,
		'$main > aside': asideCss,
		mediaSel: mediaCss
	})

	
	
	$.hdr(' heeeeader!!!')
	$.dI('main').A(
			$.ac('article'),
			$.nv().A('nav'),
			$.as('aside')
	)
	$.ftr('footer')
}

