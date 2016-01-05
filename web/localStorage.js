$g = $get = function (a) {
	return _lS.getItem(a)//= lG
}
error = _$s = $set = function (key, val) {
	_lS.setItem(key, val);
	return val
	//=lS
}
$k = $key = function (key) {
	return (S(key)) ? $g($k(key)) :
			_lS.key(key)
}
$len = function () {
	return _lS.length //= lL
}
$rm = function (a) {
	var i = _lS.getItem(a)
	_lS.removeItem(a)
	return i //= lR
}
$clr = function () {
	_lS.clear();
	return _lS//= lX
}
// http://www.sitepoint.com/building-list-jquery-local-storage/
MIN111 = function () {
	bbLocStorPLUG()
	Note = M$({
		defaults: function () {
			return {
				content: "Note created on " +
				new Date().toISOString()
			}
		}
	})
	NoteCollection = C$({
		model: Note,
		localStorage: $store("choose-some-identifier")
	})
	myNotes = new NoteCollection();
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.save()
	n = 0
	myNotes.models.forEach(function (model) {
		$l("Model in collection: "
				+ model.get("content")
				+ n++
		);
	})
	$.bt('clr', function () {
	})
}
BBLS = function () {
	bbLocStorPLUG()
	Cl = bb.C.x({
		localStorage: new bb.LocalStorage('clN')
	})
}

BUC51 = BUCKYVID51 = function () {
//buck is just a local storage example
//https://www.youtube.com/watch?v=Kn_AIiV6Cp0&index=53&list=PL081AC329706B2953
	$CSS(bucCSS)
	$.f().a2($.scI('leftbox')).A(
			$.p(['(key) One: ', $.ip().id('one')]),
			$.p(['(value) Two: ', $.ta().id('two')]),
			$.bt('save', function () {
				$s('one', $.V('one'))
				$('#rightbox').html(
						'one: ' + $g('one') + ', ' +
						'two: ' + $g($s('two', $.V('two'))))
				return false
			})
	)
	$.scI('rightbox', ['nothing!'])
}
BUC52 = function () {
	$CSS(bucCSS)
	$.scI('leftbox', [$.f([$.p(['(key) One: ', $.ip().id('one')]),
		$.p(['(value) Two: ', $.ta().id('two')])]).A(
			$.bt('clr', function () {
				$clr()
				display()
				return false
			}),
			$.bt('save', function () {
				var one = $.V('one')
				var two = $.V('two')
				$set(one, two)
				display()
				return false
			})
	)])
	$.scI('rightbox', ['nothing yet hoss!'])
	display()
	function display() {
		rBox = $('#rightbox').html('')
		_.t($len(), function (i) {
			var key = $key(i)
			val = $g(key)
			var str = 'key:  ' + key + ',  val: ' + val
			rBox.A(str, $.br())
		})
	}
}
STORAGE = function () {
	z()
	saveFromLocStor = function () {
		i = ta().id('input')
		i.q.value = localStorage.getItem('myText') || ''
		i.o('u', function () {
			localStorage.setItem('mytext', i.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		i = qi('input')
		I(function () {
			i.q.value = localStorage.getItem('myText') || ''
		}, 50)
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage.setItem('mytext', i.value)
		}, false)
	}
}
GOODGIRL = function () {
	saveFromLocStor = function () {
		$ta = ta().id('input')
		$ta.q.value = $g('myText') || ''
		$ta.o('u', function () {
			$s('mytext', $ta.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		_.ev(.1, function () {
			$('#input').val(
					$g('myText') || '')
		})
	}
}
LOCALSTORAGEYANOMODALPHA = function () {
	$ls = L = function (k, v0) {
		if (D(v0)) {
			L.s(k, v0)
		}
		var fn = function (v) {
			if (U(v)) {
				return L.g(k)
			}
			L.s(k, v)
			return fn
		}
		return fn
	}
	L.g = function (k) {
		return _lS.getItem(k)
	}
	L.s = function (k, v) {
		_lS.setItem(k, v)
		return L
	}
	L.r = L.rm = function (k) {
		var vOld = _lS.getItem(k)
		_lS.removeItem(k)
		return vOld
	}
	L.l = L.L = function () {
		return _lS.length
	}
	L.clr = L.x = function () {
		_lS.clear()
		return L
	}
	$.x('r', 'localStorage')
	$ls.s('food', 'zebra')
	//  j = $ls('jason'); j('eats')
	// j = $ls('jason')('eats')
	j = $ls('jason', 'eats')
	$.h1('i didnt know that jason ' +
	j() + ' ' + $ls.g('food') + '!')
}
function sessionStorageUseless() {
	ssS = sessionStorage
	sR = function (a) {
		var i = ssS.getItem(a)
		ssS.removeItem(a)
		return i
	}
	sS = function (a, b) {
		ssS.setItem(a, b);
		return ssS
	}
	sG = function (a) {
		return ssS.getItem(a)
	}
	sL = function () {
		return ssS.length
	}
	sX = function () {
		ssS.clear();
		return ssS
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage
					.setItem('mytext', i.value)
		}, false)
	}
}
_lS = localStorage