FL0 = function () {
	$.d('b', 400, 500).K('sB').A(
			$.d('y', 40, 150),
			$.d('z', 200, 50),
			$.d('r', 40, 150)).s({dp: 'fl', jfC: 'sA'})
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
DOWN = FLEX_DIR_COLUMN = function () {
	$s({
		bd: {'font-size': 32},
		_ct: {dp: 'flex', 'justify-content': 'center'},
		_parent1: {
			dp: 'flex',
			'flex-direction': 'column',
			width: 300, C: 'o'
		},
		_parent2: {
			dp: 'flex',
			'flex-direction': 'column-reverse',
			width: 500, C: 'o'
		},
		_item: {
			mar: 10, c: 'y',
			'flex-basis': 80, dp: 'flex',
			'justify-content': 'center',
			'align-items': 'center'
		}
	})
	ct = $.dK('ct')
	Parent().K('parent1')
	Parent().K('parent2')
	function Parent() {
		return $.d().a2(ct)
				.A(It(), It(), It(), It(), It(), It())
	}
}
FLD1 = FLXD = function () {
	$s({
		_sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
		_sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
	})
	d = $.d().s({
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
FLD2 = BASISD = function () {
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P: 10},
		_ch1: {
			C: "u",
			$: '8 1 600px'
		},
		_ch2: {
			C: 'g',
			d: '$',
			$: '1 2 400px',
			$W: 'w'
		},
		d: {B: ['bor', 'b']}
	})
	children(8, $.dK('ch ch2').a2($.dK('ct').C('w')))
	function children(num, parent) {
		_.t(num, function () {
			div().K('ch1').a2(parent)
		})
	}
	
	function div() {
		return $.d($r(), 40, 40)
	}
}
FLD3 = FLEXCTD = function () {
	$.C('r')
	$s({
		'.flex-container': {
			C: 'y',
			display: 'flex',
			'flex-direction': 'row',
			$W: 'w',
			'justify-content': 'space-around',
			'align-content': 'flex-start',
			'align-items': 'stretch'
		},
		//'.flex-items-default': {'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0},
		'.flex-item-1': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
		'.flex-item-2': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-3': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '20px'},
		'.flex-item-4': {C: 'z', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-5': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'}
	})
	d = $.dK('flex-container').A(
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
}