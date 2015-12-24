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
	
	
	mediaSel = '@media all and (max-width:640px)'
	mediaCss = $subRules({
		"#main, #page": {'flex-direction': 'column', C:'z'},
		"#main>article, #main>nav, #main>aside": {$O: 0},
		"#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
	})
	
	$.hdr(' heeeeader!!!')
	
	$.dI('main').A(
			$.ac('article'),
			$.nv().A('nav'),
			$.as('aside')
	)
	
	$.ftr('footer')
	_.in(function () {
		$s({
			bd: bdCss,
			'header, footer': hdrFtrCss,
			$main: mainCss,
			'$main > article': articleCss,
			'$main > nav': navCss,
			'$main > aside': asideCss,
			mediaSel: mediaCss
		})
	})
}
FL1 = FLX = function () {
	$s({
		_sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
		_sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
	})
	d = $.dS({
		'display': 'flex',
		'justify-content': 'space-between'
	})
	d.A(
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
FL2 = BASIS = function () {
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
	$s()
	/*
	
	 div { border:8px solid Blue; }
	 .ct { display:flex; padding:10px; background-color:Yellow; }
	 .ch { padding:10px; margin:10px; color:White; }
	 .ch1 { flex:8 1 600px; background-color:Purple; }
	 .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
	
	
	
	 */
}
FL3 = FLEXCT = function () {
	flxCt()
	$s({
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
	/*
	 $s({
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
	 */
}
FL4 = GME = function () {
	$s({
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
	$.ac().A('Click', $.br(), 'to', $.br(), 'change', $.br(), 'body {display: …}').A()
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
ACS = ARTICLES = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
		'$main > article': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	$.dI('main').A(
			$.ac('article1'),
			$.ac('article2'),
			$.ac('article3'),
			$.ac('article4'),
			$.ac('article5'))
}
GREENBTS = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
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
YELLOWBTS = function () {
	$s({
		div: {h: 100, d: '$'},
		button: {$: '3 1 50%'}
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
BTS = function () {
	$.flexy()
	rgbDivs()
	red.A(green, blue)
	blue.insertBts()
	green.long().aI('me')
}