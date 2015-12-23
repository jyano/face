 
	$g = $get = function (a) {
		return _lS.getItem(a)//= lG
	}
	$s = $set = function (key, val) {
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

	