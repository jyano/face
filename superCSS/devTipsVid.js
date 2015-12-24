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
 