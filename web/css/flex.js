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