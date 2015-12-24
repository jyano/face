ooo.fl = {
	a: 'auto', b: 'baseline', m: 'center', c: 'column', C: 'column-reverse',
	i: 'initial', _: 'inherit', r: 'row', R: 'row-reverse',
	n: 'nowrap', s: 'flex-start', e: 'flex-end', S: 'stretch',
	sB: 'space-between', sA: 'space-around', w: 'wrap', W: 'wrap-reverse'
}
_.x(ooo, {
	dir: {r: 'row', rv: 'row-reverse', c: 'column', cRv: 'column-reverse'},
	wr: {w: 'wrap', wr: 'wrap',
		rv: 'wrap-reverse', nw: 'nowrap'},
	jfC: {
		fs: 'flex-start',
		fe: 'flex-end',
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
_css = {
	$: {M: 0},
	bB: {P: 50},
	h2: {C: 'z', c: 'w', ta: 'center'},
	_layout: {
		C: 'y', dp: 'fl', h: '100vh', dir: 'column'
	},
	'header, footer': {P: 20, background: '#666', c: 'w'},
	_body: {dp: 'fl', gr: 1, C: 'p'},
	_col1: {C: '_b', gr: 1},
	_col2: {C: 'g', w: 160, ord: '-1'},
	_col3: {C: 'p', w: 160}
}
LAY = function () {
	$s(_css)
	$.h1('css flexbox practical examples')
	$.dK('example').A(
			$.h2('3 col layout'),
			$.dK('layout').A(
					$.hdr().A('header'),
					$.dK('body').A(
							$.dK('col1').A('main content'),
							$.dK('col2').A('navigation'),
							$.dK('col3').A('sidebar')
					),
					$.ftr().A('footer')
			)
	)
}
MEDOB = function () {
	$s({
		$: {M: 0},
		_example: {
			B: '8px dashed black'
		},
		h2: {C: 'z', c: 'w', h: 50, ta: 'center', 'line-height': 50},
		'example-media': {
			dp: 'fl', 'max-width': 300
		},
		img: {
			'margin-right': 10
		},
		_content: {
			fl: 1
		}
	})
	$.dK('example').A(
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('media').A(
							$.i('me').WH(50, 50),
							$.dK('content').A(
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf'
							)),
					$.dK('search-group').A(
							$.ip().ph('search'),
							$.sm()))
	)
}
DRIB = function () {
	$s({
		$: {M: 0},
		_shots: {
			wr: 'wrap',
			jfC: 'sB'
		},
		_positioner: {
			'max-width': 970,
			M: '0 auto'
		},
		'.shots.meta': {
			jfC: 'flex-end'
		}
	})
	$.dK('example').A(
			$.h2('media object'),
			$.dK('example-page example-media').A(
					$.dK('media').A(
							$.i('me').WH(50, 50),
							$.dK('content').A(
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf' +
									'asdf asfd afsd asfd adfs asdf'
							)),
					$.dK('search-group').A(
							$.ip().ph('search'),
							$.sm()))
	)
	// linds with  class shot-wrap
	//the shot  (images and meta)
	// (meta is views, count, likes? more images?)
	// owner (avatar)
}

 