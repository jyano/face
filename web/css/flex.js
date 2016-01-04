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
FLX1 = SS408 = MOB = MEDIAOBJECT = function () {
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
}// 12:50 ALIGNITEMS
FLX2 = SS16 = DRB = DRIB = function () {
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
FLX3 = SS13 = FLD1 = FLXD = function () {
	$s({
		_sB: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sB'},
		_sA: {dp: 'fl', dir: 'r', wr: 'wr', jfC: 'sA'}
	})
	d = $.d().s({
		dp: 'fl',
		jfC: 'sB'
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
FLX4 = SS269 = GREENBTS = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800, M: 0, P: 0, dp: 'fl',
			$D: 'r'
		},
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
FLX5 = J2 = SS5 = ACS = ARTICLES = function () {
	$s({
		bd: {C: 'a', c: 'b'},
		$main: {
			h_: 800,
			M: 0, P: 0,
			d: '$', $D: 'r'
		},
		'$main > article': {
			M: 4, P: 5, B: ['bor', 'p'],
			bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'
		}
	})
	$.dI('main').A(
			$.ac('article1'),
			$.ac('ac2'),
			$.ac('ac3'),
			$.ac('ac4'),
			$.ac('ac5')
	)
}
FLX6 = SS27 = YELLOWBTS = function () {
	$s({
		d: {h: 100, dp: 'fl'},
		bt: {fl: '3 1 50%'}
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
FLX7 = SS4 = FL0 = function () {
	$.d('b', 400, 500).s({dp: 'fl', jfC: 'sA'}).A(
			$.d('y', 40, 150),
			$.d('z', 200, 50),
			$.d('r', 40, 150)
	)
}
FLX8 = SS6 = MAR = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
FLX9 = SS309 = FLD2 = BASISD = function () {
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P: 10},
		_ch1: {
			C: "u",
			fl: '8 1 600px'
		},
		_ch2: {
			C: 'g',
			dp: 'fl',
			fl: '1 2 400px',
			wr: 'wr'
		},
		d: {B: ['bor', 'b']}
	})
	children(8,
			$.dK('ch ch2').a2(
					$.dK('ct').C('w')
			)
	)
	function children(num, parent) {
		_.t(num, function () {
			div().K('ch1').a2(parent)
			function div() {
				return $.d($r(), 40, 40)
			}
		})
		return parent
	}
}
$L('item', 'vid')
function item() {
	Item = function (n) {
		k = 'flex-item-' + (n || 1)
		$l('k: ' + k)
		return $.dK(k).A(
				$.i('me')
		).css({margin: 20}).C('b')
	}
	_It = function (child) {
		return $.dK('item').C('_b').A(child)
	}
	It = function () {
		return $.dK('item').A('hello').C()
	}
	FLX10 = SS299 = DOWN = FLEX_DIR_COLUMN = function () {
		$s({
			bd: {fS: 32},
			_ct: {dp: 'fl', jsC: 'c'},
			_parent1: {
				dp: 'fl',
				dir: 'c',
				w: 300, C: 'o'
			},
			_parent2: {
				dp: 'fl',
				dir: 'cRv',
				w: 500, C: 'o'
			},
			_item: {
				M: 10, c: 'y',
				bas: 80, dp: 'fl',
				jfC: 'c',
				alI: 'c'
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
	FLX11 = SS353 = DVT2 = WRAPREV = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				B: _bor,
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
	}// 4:20 parent display flex
// 5:50  item width 50
// 6:05 flex direction (row-reverse, column, column-reverse)
	FLX12 = SS346 = DVT1 = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				border: _bor,
				dir: 'rv'
			},
			_item: {
				lH: 50,
				h: 50,
				w: 50,
				M: 5
			}
		})
		$.h2().T('Display: flex')
		$.dK('parent').A(_It(1), _It(2), _It(3), _It(4), _It(5))
	}
	FLX13 = SS379 = DVT4 = ALIGNITEMS = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				height: 200,
				dp: 'flex',
				B: _bor,
				dir: 'rv',
				wr: 'wr',
				jfC: 'sA',
				alI: 'str'
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
	FLX14 = SS384 = DVT5 = ALIGNCONTENT = function () {
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
	}//7:30 flex-wrap ([nowrap] wrap
// 9:45
// 20:30  children finally!!! ORDER
//2350 grow
	FLX15 = SS33 = DVT = DEVTIPS = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {B: _bor},
			_item: {lH: 50, h: 50, M: 5}
		})
		$.dK('example').A(
				$.h2().T('Display: flex'),
				$.dK('parent').A(
						_It(1), _It(2), _It(3),
						_It(4), _It(5)
				))
	}
	FLX16 = SS364 = DVT3 = JUSTIFYCONTENT = function () {
		$s({
			bd: {tA: 'c'},
			_parent: {
				dp: 'fl',
				B: _bor,
				dir: 'rv',
				wr: 'rv',
				jfC: 'sA'
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
	FLX17 = SS14 = FLD3 = FLEXCTD = function () {
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
function vid() {
	vidHtml = function (css) {
		$s(_.x({
			bd: {dp: 'fl', jfC: 'c'},
			_ct: {w: 960, B: '20px solid yellow'},
			$right: {C: 'o', w: 260},
			$left: {C: 'b', w: 700},
			img: {
				w: 960, h: 400
			},
			_fl: {dp: 'fl', wr: 'wr'}
		}, css || {}))
		$ct().A(
				$.i('me'),
				$.d().K('fl').A(
						$.sc().id('left').A('this is the left column (a section)' + yada()),
						$.ac().id('right').A('this is the right column (an article)' + yada())
				))
	}
	FLX18 = SS18 = MVD1 = function () {
		SS19 = MVD2 = MEDVID = MEDIAVIDTUT = function () {
			vidHtml()
			med = '@media screen and (max-width: 960px)'
			decs = '{ #ct{width:100%;}  #left{width:70%} #right{width:30% } img{width:100%} }'
			$.Sty(med + decs)
			$.Sty('@media screen and (max-width: 640px) { #ct{width:100%;}  #left{width:100%} #right{width:100% }   }')
		}
		vidHtml({_tablet: $rules(tabRus), _phone: $rules(phRus)})
	}
}
function _pre() {
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
}
function more() {
	$.flexy = function () {
		$s.d({	// cool: $s.d('margin', 10)
			margin: 10, display: 'flex',
			'justify-content': 'center',
			'flex-wrap': 'wrap'
		})
	}
	flxCt = function (css) {
		if (css) {
			$s(css)
		}
		return $.dK('flex-container')
				.A(Item(1), Item(2), Item(3), Item(4), Item(5))
		function Item(n) {
			return $.dK('.flex-item-' + (n || 1)).A(
					$.i('me')
			).css({margin: 20}).C('b')
		}
	}
	$cssApp = function (name, cssOb, fn) {
		return window[name] = function () {
			$s(cssOb)
			fn()
		}
	}
	$.fn.insertBts = function () {
		var el = this
		_.e([1, 2, 3, 4, 5, 6], function (num) {
			var name = 'button ' + num
			var bt = $.bt(name, function () {
				$l('clicked: ' + name)
			})
			bt.C('y').a2(el)
			bt.css({
				'font-size': 20,
				margin: 4,
				height: 40,
				width: 180
				//, width : '100%'
			})
		})
		return el
	}
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
	css = {
		//_ct:{dp:'fl'},
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
	}
	$.k = function (k) {
		var q = $.sp()
		q.K(k)
		return q
	}
}