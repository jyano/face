$L('devTipsVid','devTipsApps','apps')
function devTipsVid() {
	DVT = DEVTIPS = function () {
		$s({
			bd: {ta: 'center'},
			_parent: {
				B: '5px solid red'
			},
			_item: {
				'line-height': 50,
				h: 50,
				M: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
	DVT1 = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				border: '5px solid red',
				dir: 'rv'
			},
			_item: {
				lH: 50,
				h: 50,
				w: 50,
				M: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
//7:30 flex-wrap ([nowrap] wrap
	DVT2 = WRAPREV = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				B: '5px solid red',
				dir: 'rv',
				wr: 'rv',
			},
			_item: {
				lH: 50,
				h: 50,
				w: '30%',
				M: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
// 9:45
	DVT3 = JUSTIFYCONTENT = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				border: '5px solid red',
				dir: 'rv',
				wr: 'wrap-reverse',
				jfC: 'space-around'
			},
			_item: {
				lH: 50,
				height: 50,
				width: 50,
				margin: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
// 12:50 ALIGNITEMS
	DVT4 = ALIGNITEMS = function () {
		$s({
			bd: {tA: 'center'},
			_parent: {
				height: 200,
				dp: 'flex',
				B: '5px solid red',
				dir: 'row-reverse',
				wr: 'wrap',
				jfC: 'space-around',
				alI: 'stretch'
			},
			_item: {
				'line-height': 50,
				width: 50,
				margin: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
// 15:10 ALIGNCT [STRETCH]
	DVT5 = ALIGNCONTENT = function () {
		$s({
			bd: {tA: 'center'},
			_parent: {
				h: 200,
				dp: 'fl',
				B: '5px solid red',
				dir: 'row-reverse',
				wr: 'wrap',
				jfC: 'space-around',
				alI: 'stretch'
			},
			_item: {
				lH: 50,
				w: 50,
				M: 5
			}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('example-content').A(
						parent = $.dK('parent').A(
								_It(1), _It(2), _It(3),
								_It(4), _It(5))))
	}
// 20:30  children finally!!! ORDER
//2350 grow
}
function devTipsApps() {
	LAY = function () {
		col = {
			_body: {dir: 'c'},
			'.c2, .c3': {w: '100%'},
			_c2: {ord: 0}
		}
		$s({
			'header, footer': {P: 20, C: 'gray', c: 'w'},
			_lay: {
				h: 400, C: 'y',
				dp: 'fl', dir: 'c'
			},
			_body: {dp: 'fl', gr: 1, C: 'p', dir: 'row'},
			_c1: {C: '_b', gr: 1},
			_c2: {C: 'g', w: 160, ord: '-1'},
			_c3: {C: 'p', w: 160}//, _phone: $subRules({bd: {C: 'z'}, _body:col})
		})
		sty = '@media only screen and (max-width: 500px) ' +
		$subRules(col)
		$.Sty(sty)
		//$tablet({bd: {C: 'z'}, _body: {dir: 'c'}})
		$.dK('lay').A(
				$.hdr('heead'),
				$.dK('body').A(
						$.dK('c1').A('main').C('b'),
						$.dK('c2').A('nav').C('o'),
						$.dK('c3').A('sidebar').C('g')
				),
				$.ftr('fooot')
		)
	}
	MOB = MEDIAOBJECT = function () {
		Med = function () {
			$.imgMur = function () {
				return $('<img src=http://www.fillmurray.com/50/50>')
			}
			return $.dK('med').A(
					$.imgMur(),
					$('<div>').K('content').A(yada(18))
			)
		}
		$CSS({
			bd: {P: 50},
			_ex: {B: '8px dashed black', C: 'g'},
			h2: {C: 'z', c: 'o', h: 50, tA: 'c', lH: 50},
			_meds: {C: '_b', dp: 'fl', wr: 'wr'},
			_med: {
				C: '_o', dp: 'fl', _w: 300,
				M: 20, h: 50,
				jfC: 'c'
			},
			i: {mR: 10},
			_content: {shr: 1, gr: 1},
			///
			'.search-group': {dp: 'fl', M: 10},
			ip: {P: 10}, _tIp: {fl: 1}
		})
		$.dK('ex').A(
				$.h2('media object'),
				$.dK('meds').A(
						Med(), Med(), Med()),
				$.hr(),
				$.h2('media object'),
				$.dK('example-page example-media').A(
						$.dK('search-group').A(
								$.ip().ph('search').K('tIp'),
								$.sm())
				)
		)
	}
	Li = function (text) {
		return $.li().A($.a(text))
	}
	Shot = function () {
		return $.a().K('wrap').A(
				$.d().K('shot').A(
						$.i('me'),
						$.dK('meta').A(
								$.dK('views').C('b').col('w').A(' # views '),
								$.dK('comments').C('g').A('comments '),
								$.dK('likes').C('o').A(' likes ')
						)
				),
				$.dK('owner').A($.i('me').K('avatar'),
						$.sp(' - name - ').K('name')))
	}
	DRB = DRIB = function () {
		$s({
			$: {M: 4},
			_ps: {_w: 970, M: '0 auto'},
			_hdr: {
				dp: 'fl', jfC: 'sB',
				C: 'gray'//, w:'100%'
			},
			_nav: {dp: 'fl', alI: 'c', shr: 1},
			ul: {dp: 'fl'},
			li: {M: '0 20px'},
			_tools: {dp: 'fl', alI: 'c'},
			i: {M: '0 20px', w: 50, h: 50},
			_shots: {dp: 'fl', wr: 'wr', jfC: 'sB', C: 'p'},
			_meta: {dp: 'fl', dir: 'c', jfC: 'end'},
			_shot: {C: 'w'},
			_wrap: {C: 'v'},
			_tool: {w: 20, h: 20}
		})
		shots = $.sc().K('shots ps')
		_.t(8, function () {
			shots.A(Shot())
		})
		$.dK('ex').A(
				$.h2('dribbbl'),
				$.dK('ex-page ex-drib').A(
						$.dK('hdr ps').A(
								$.nav().K('nav ps').A(
										$.i('sun'), // logo
										$.ul().A(Li('Shots'), Li('Designers'),
												Li('Team'), Li('Meetup'), Li('Jobs'),
												Li(_bulls))
								).C('y'),
								$.d().K('tools').A(
										$.i('guy').K('tool'),
										$.i('guy').K('tool'), $.i('guy').K('tool'),
										$.f().A($.ip().ph('Search'))
								).C('r')
						)
						, shots)
		)
// linds with  class shot-wrap
//the shot  (images and meta)
// (meta is views, count, likes? more images?)
// owner (avatar)
	}
}
function apps() {
	FL0 = function () {
		$.d('b', 400, 500).K('sB').A(
				$.d('y', 40, 150),
				$.d('z', 200, 50),
				$.d('r', 40, 150))
				.s({dp: 'fl', jfC: 'sA'})
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
	FL0 = function () {
		$.d('b', 400, 500).K('sB').A(
				$.d('y', 40, 150),
				$.d('z', 200, 50),
				$.d('r', 40, 150))
				.s({dp: 'fl', jfC: 'sA'})
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
}
function _pre() {
	_bulls = '&bull; &bull; &bull;'
	ooo.fl = {
		a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
		i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
		n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
		sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
	}
	_.x(ooo, {
		dir: {r: 'row', rv: 'row-reverse', c: 'column', cRv: 'column-reverse'},
		wr: {
			w: 'wrap', wr: 'wrap',
			rv: 'wrap-reverse', nw: 'nowrap'
		},
		jfC: {
			st: 'flex-start',
			end: 'flex-end',
			c: 'center',
			sB: 'space-between',
			sA: 'space-around',
			i: 'initial',
			_: 'inherit'
		},
		alC: {
			fs: 'flex-start',
			fe: 'flex-end',
			c: 'center',
			sB: 'space-between',
			sA: 'space-around',
			i: 'initial',
			_: 'inherit'
		},
		alI: {
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
function _post(){
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
	$s.bd = function (ob) {
		$s('body', ob)
	}
	$s.bt = function (ob) {
		$s('button', ob)
	}
	$.flexy = function () {
		$s.d({	// cool: $s.d('margin', 10)
			margin: 10, display: 'flex',
			'justify-content': 'center',
			'flex-wrap': 'wrap'
		})
	}
}