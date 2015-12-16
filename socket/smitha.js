SMITHAVID1 = function () {
	$('<script src="/socket.io/socket.io.js"></script>').A()
	$l('SMITHA')
	$S({$chat: {height: 500}})
	$chat = $.dI('chat')
	$form = $.f().id('send-message').A(
			$ip = $.ip().id('message').at('size', 35),
			$.bt().ty('submit'))
	k = io.connect()
	k.on('smitha-new-message', function (da) {
		$l('smitha new message: ' + da)
		$chat.A(da, $.br())
	})
	$form.submit(function (ev) {
		$l('submit form')
		$.pD(ev)
		var val = $ip.V()
		$l('val: ' + val)
		k.emit('smitha-send-message', val)
	})
}
SMITHAVID2 = function () {
	$('<script src="/socket.io/socket.io.js"></script>').A()
	k = io.connect()
	k.on('smitha-new-message', function (da) {
		$l('smitha new message: ' + da)
		$chat.A(da.nick + ': ' + da.msg, $.br())
	})
	k.on('smitha-usernames', function (da) {
		_.e(da, function (un) {$('#users').A(un, $.br())})})
	$S({
		$chat: {height: 500},
		$chatWrap: {float: 'left', border: '1px blue solid'}
	})
	
	
	////////////////////////////////////
	$nickWrap = $.dI('nickWrap')
	$.p('Enter username: ').a2($nickWrap)
	
	$nickErr = $.p().id('nickErr').a2($nickWrap)
	
	$nickForm = $.f().id('set-nick').A(
			$nickIP = $.ip().at('size', 35).id('nickname'),
			$.ip().ty('submit')).submit(function (ev) {
				$.pD(ev)
				k.emit('smitha-new-user',
						$nickIP.V(),
						function (da) {
							$l('in cb')
							if (da) {
								$l('true')
								$nickWrap.hide()
								$contentWrap.show()
							}
							else {
								$l('false')
								$nickErr.html('that user name taken! try again')
							}
							
						})
			}).a2($nickWrap)
	//////////////////////////////////
	
	
	$contentWrap = $.dI('contentWrap').none().A(
			$chatWrap = $.dI('chatWrap'),
			$usersDiv =  $.dI('users')
	)
	
	
	$chat = $.dI('chat').a2($chatWrap)
	$form = $.f().id('send-message').a2($chatWrap)
			.A(
			$ip = $.ip().id('message').at('size', 35),
			$.bt().ty('submit')).submit(function (ev) {
				$.pD(ev)
				var val = $ip.V()
				$l('val: ' + val)
				k.emit('smitha-send-message', val)})
	
	
	
}

SMITHA = function () {
	$('<script src="/socket.io/socket.io.js"></script>').A()
	k = io.connect()
	k.on('smitha-new-message', function (da) {
		$l('smitha new message: ' + da)
		$chat.A(da.nick + ': ' + da.msg, $.br())
	})
	k.on('smitha-usernames', function (da) {
		_.e(da, function (un) {
			$('#users').A(un, $.br())
		})
	})
	$S({
		$chat: {height: 500},
		$chatWrap: {float: 'left', border: '1px blue solid'}
	})
	////////////////////////////////////
	$nickWrap = $.dI('nickWrap')
	$.p('Enter username: ').a2($nickWrap)
	$nickErr = $.p().id('nickErr').a2($nickWrap)
	$nickForm = $.f().id('set-nick').A(
			$nickIP = $.ip().at('size', 35).id('nickname'),
			$.ip().ty('submit')).submit(function (ev) {
				$.pD(ev)
				k.emit('smitha-new-user',
						$nickIP.V(),
						function (da) {
							$l('in cb')
							if (da) {
								$l('true')
								$nickWrap.hide()
								$contentWrap.show()
							}
							else {
								$l('false')
								$nickErr.html('that user name taken! try again')
							}
						})
			}).a2($nickWrap)
	//////////////////////////////////
	$contentWrap = $.dI('contentWrap').none().A(
			$chatWrap = $.dI('chatWrap'),
			$usersDiv = $.dI('users')
	)
	$chat = $.dI('chat').a2($chatWrap)
	$form = $.f().id('send-message').a2($chatWrap)
			.A(
			$ip = $.ip().id('message').at('size', 35),
			$.bt().ty('submit')).submit(function (ev) {
				$.pD(ev)
				var val = $ip.V()
				$l('val: ' + val)
				k.emit('smitha-send-message', val)
			})
}
