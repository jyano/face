KEYOB = KEYOBJ = {
	up: 38, u: 38,
	down: 40, d: 40,
	left: 37, l: 37,
	right: 39, r: 39,
	space: 32, s: 32,
	enter: 13, e: 13
}
$.kD = function self(key, fn) {
	if (O(key)) {
		_.e(key, function (fn, k) {
			if (s$(k).isUpper()) {
				$.kU(k.toLowerCase(), fn)
			}
			else {
				$.kD(k, fn)
			}
		})
		return
	}
	if (KEYOB[key]) {
		key = KEYOB[key]
	}
	$('body').on('keydown', function (e) {
		if (e.which == key) {
			fn(e, $.K)
		}
	})
}
$.kU = function (key, funk) {
	if (KEYOBJ[key]) {
		key = KEYOBJ[key]
	}
	$('body').on('keyup', function (e) {
		if (e.which == key) {
			funk(e, $.K)
		}
	})
}
$.K = {}
$.space = function (fn) {
	return $.kD('space', fn)
}
KEYS = WHYQ = function () {
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		cjs.Keys.r = cjs.Keys.right = true
		cjs.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		cjs.Keys.r = cjs.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		cjs.Keys.u = cjs.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		cjs.Keys.u = cjs.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		cjs.Keys.d = cjs.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		cjs.Keys.d = cjs.Keys.down = false
	})
}
$.kD('l', function () {
	if ($.test) {
		$l('left pressed')
	}
	$.K.l = 1
	$.K.L = 0
	$.K.dir = 'left'
})
$.kU('l', function () {
	if ($.test) {
		$l('left lifted')
	}
	$.K.l = false
	$.K.l = 0;
	$.K.L = 1
})
$.kD('r', function () {
	if ($.test) {
		$l('right pressed')
	}
	$.K.r = 1
	$.K.dir = 'right'
	$.K.R = 0
})
$.kU('r', function () {
	if ($.test) {
		$l('right lifted')
	}
	$.K.r = 0;
	$.K.R = 1
})
$.kD('u', function () {
	if ($.test) {
		$l('up pressed')
	}
	$.K.u = 1;
	$.K.U = 0
})
$.kU('u', function () {
	if ($.test) {
		$l('up lifted')
	}
	$.K.u = 0;
	$.K.U = 1
})
$.kD('d', function () {
	if ($.test) {
		$l('down pressed')
	}
	$.K.d = 1;
	$.K.D = 0
})
$.kU('d', function () {
	if ($.test) {
		$l('down lifted')
	}
	$.K.d = 0;
	$.K.D = 1
})
$.wh = function (a, b) {
	return D(b) ? a.which == b : a.which
}
function keys1() {
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = 1
		$.K.L = 0
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = false
		$.K.l = 0;
		$.K.L = 1
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = 1
		$.K.dir = 'right'
		$.K.R = 0
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = 0;
		$.K.R = 1
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = 1;
		$.K.U = 0
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = 0;
		$.K.U = 1
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = 1;
		$.K.D = 0
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = 0;
		$.K.D = 1
	})
	}
 