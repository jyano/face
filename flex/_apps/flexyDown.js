$L()

FLD1 = FLXD = function () {
	
	
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
FLD2 = BASISD = function () {
 
 
	$s({
		//_ct: {C: 'y',  d: '$'},
		_ch: {P:10},
		
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
	function children(num,parent){
		_.t(num, function(){
			div().K('ch1').a2(parent)
		})
	}
	function div(){return $.d($r(), 40, 40)}

 
}
FLD3 = FLEXCTD = function () {
	$.C('r')
	
	$s({
	
		'.flex-container': {
		
		C:'y',
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
		'.flex-item-4': {C:'z', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'},
		'.flex-item-5': {'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'} 
	})
	
	
	d = $.dK('flex-container').A(
			 
			Item(1), Item(2), Item(3), Item(4), Item(5)
	)
	
}
DOWN = function () {
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
		return $.d().a2(ct).A(It(), It(), It(), It(), It(), It())
	}
}
DVT=DEVTIPS = function () {

	$s({bd:{'text-align':'center'},
	_parent:{
		border: '5px solid red'
	},
	_item: {
		'line-height': 50,
		height:50, 
		margin:5
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
DVT =  function () {
	$s({
		bd: {'text-align': 'center'},
		_parent: {dp:'flex',
			border: '5px solid red',
			'flex-direction':'row-reverse'
		},
		_item: {
			'line-height': 50,
			height: 50,
			width:50,
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
//7:30 flex-wrap ([nowrap] wrap
DVT = WRAPREV=   function () {
	$s({
		bd: {'text-align': 'center'},
		_parent: {
			dp: 'flex',
			border: '5px solid red',
			'flex-direction': 'row-reverse',
			'flex-wrap':'wrap-reverse',
		},
		_item: {
			'line-height': 50,
			height: 50,
			width: '30%',
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
// 9:45
DVT =  JUSTIFYCONTENT= function () {
	$s({
		bd: {'text-align': 'center'},
		_parent: {
			dp: 'flex',
			border: '5px solid red',
			'flex-direction': 'row-reverse',
			'flex-wrap': 'wrap-reverse',
			'justify-content': 'space-around'
		},
		_item: {
			'line-height': 50,
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
DVT = ALIGNITEMS = function () {
	$s({
		bd: {'text-align': 'center'},
		_parent: {
			height: 200,
			dp: 'flex',
			border: '5px solid red',
			'flex-direction': 'row-reverse',
			'flex-wrap': 'wrap',
			'justify-content': 'space-around',
			'align-items':'stretch'
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
DVT = ALIGNCONTENT = function () {
	$s({
		bd: {'text-align': 'center'},
		_parent: {
			height: 200,
			dp: 'flex',
			border: '5px solid red',
			'flex-direction': 'row-reverse',
			'flex-wrap': 'wrap',
			'justify-content': 'space-around',
			'align-items': 'stretch'
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
// 20:30  children finally!!! ORDER
//2350 grow
function Item(n) {
	k = 'flex-item-' + (n || 1)
	$l('k: ' + k)
	return $.dK(k).A(
			$.i('me')
	).css({margin: 20}).C('b')
}
function _It(child) {
	return $.dK('item').C(
			'_b').A(child)
}
function It() {
	return $.dK('item').A('hello').C()
}

