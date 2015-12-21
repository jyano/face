UNIVERSE = function () {
	$addGuy = function (un) {
		$mug(un, function (bm) {
			bm = new cjs.Bitmap(bm)
			uni.A(bm);
			$GUYS.push({
				un: un,
				bm: bm.rC().XY(600).sXY(.4)
			}) // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
		})
	}
	$getGuy = function (un) {
		var targetGuy = false //  finds a guy({un, bm}) in $GUYS array from a un ( rets false if he aint there) //alpha: can accept ob received on guyUpdates ({un, x, y})//can pass the string or also an ob with 'un' property
		if (O(un)) {
			un = un.un
		}
		_.e($GUYS, function (guy) {
			if (un == guy.un) {
				targetGuy = guy
			}
		})
		return targetGuy
	}
	$getGuyNotMe = function (un) {
		var guy = $getGuy(un)
		if (guy && guy.un != _username) {
			return guy
		}
	}
	$Bub = function (t, x, y) {
		var g = G(arguments), ct = $Ct()
		text = g[0] || 'hi!';
		x = g[1] || yourBm.x;
		y = g[2] || yourBm.y
		uni.A(ct);
		ct.h().cir({c: 'w', r: 120, x: x - 250, y: y - 250, r1: 50})
		ct.h().cir({c: 'b', r: 30, x: x - 120, y: y - 120, r1: 30})
		ct.h().cir({c: 'g', r: 20, x: x - 80, y: y - 80})
		ct.text = function (t, f, c, x, y) {
			var ct = this, o, cX, st = this.getStage()
			cX = st.cen().x
			o = (N(x) && U(y)) ? {y: x, x: cX} :
					U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}
			var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
			ct.A(t)
			return t
		}
		ct.text(t, "20px Arial", "blue", x - 300, y - 300)
		$Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
		_.in(10, function () {
			ct.rm()
		})
		if (g.p) {
			k.emit('bub', {
				t: t,
				x: x,
				y: y,
				u: _username
			})
		}
		return ct
	}
	z();
	n = 0;
	$GUYS = []
	k.on('bub', function (bub) {
		var guy;
		if (guy = $getGuy(bub.u)) {
			$Bub(bub.t, bub.x, bub.y)
		}
	})
	k.on('updateGuy', function (user) {
		var guy
		if (user && (guy = $getGuyNotMe(user.un))) {
			guy.bm.XY(user.x, user.y)
		}
	})
	k.on('inviteAccepted', function (invite) {
		if (_username == invite.from) {
			$addGuy(invite.toWho)
		}
	})
	k.on('newInvite', function (d) {
		var popD, pop, title, ya, na;
		if (_username != d.toWho) {
			return
		}
		title = $.h1('chat with ' + d.from + '?')
		ya = $.bt('ya', function () {
			pop.modal('hide')
			$addGuy(d.from)
			k.emit('acceptInvite', {from: d.from, toWho: _username})
		})
		na = $.bt('na', function () {
			pop.modal('hide')
		})
		popD = $.d()
		pop = $.pop(popD)
		$mug(d.from, function (mug) {
			popD.A($.i(mug).WH(200, 200), title, ya, na)
		})
	})
	uni = $St(1000, 800);
	uni.bgI(R(2) ? '/beach.jpg' :
			R(4) ? '/space.jpg' :
					'/chicks.png')
	uni.mug(function (b) {
		if (O(b)) {
			yourBm = b.dg().rC().XY(600).sXY(.4)
		}
		$GUYS.push({un: _username, bm: yourBm})
		b.$$(function () {
			b.rm();
			k.emit('X', _username)
		})
		page = $.d('b', 1000, 'auto').A($.br(3))
		page.A(chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
				chatSendButton = $.bt('send', function () {
					$Bub($('#textinput').V(), '+')
				}))
		$.eG('users', function (user) {
			if (user.mug) {
				var mugInviteBt = $.i(user.mug).WH(100)
				mugInviteBt.$(function () {
					k.em('sendInvite', {from: _username, toWho: user.un})
				});
				page.A(mugInviteBt)
			}
		})
		_.ev(.1, function () {
			k.em('myUpdate', {un: _username, x: yourBm.x, y: yourBm.y})
		})
	})
}
function oldUni(){
	guysArray = []
	fetchMugByMugId = fetchMugByUserModel2 = function (user, func) { //
		$.P('/getimagebyid', user.m, func)
	}
	fetchMugByUserModel = function (user, func) { //
		// $.post( '/dudX' , {d: user.m}, func)
		$.get('/mug/' + user.m, func)
	}
	fetchMugByUsername = function (username, func) {
		$.post('/mug', {u: username}, function (mug) {
			if (mug) {
				func(mug)
			}
		})
	}
	SpeechBubble = function (text, x, y) {
		var args = G(arguments)
		container = new createjs.Container()
		if (!window['uni']) {
			alert('the universe is missing!');
			return
		}
		text = args[0] || 'hi!'
		//so if you don't pass in coords, it relies on 'you'
		x = args[1] || you.x
		y = args[2] || you.y
		uni.A(container)
		container.circle(x - 150, y - 150, 100, 'white')
				.circle(x - 50, y - 50, 30, 'white')
				.circle(x - 20, y - 20, 10, 'white')
				.text(text, "20px Arial", "blue", x - 200, y - 200)
		setTimeout(function () {
			container.remove()
		}, 10000)
		tw(
				container,
				[{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000]
		)
		//broadcast out your speech bubble
		if (args.p) {
			socket.emit('speechBubble', {t: text, x: x, y: y, u: _username})
		}
		return container
	}
//relies on 'you'.. actually just makes a similar object
	guyLocation = function () {
		if (window['you']) {
			return {
				u: _username,
				username: _username,
				x: you.x,
				y: you.y
			}
		}
	}
	addGuy = function (username, bitmap) {
		
		//add guy to guysArray
		guysArray.push({
			u: username,
			username: username,
			b: bitmap,
			bitmap: bitmap
		})
		//add guy's bitmap to universe
		bitmap.rCenter().XY(600).sXY(.4)
		// bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })
		uni.A(bitmap)
	}
//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there
	getGuy = function (username) {
		//get the username
		username = O(username) ? username.u : username
		//do this as a reduce
		var theGuy = false
		_.each(guysArray, function (guy) {
			if (guy.u == username) {
				theGuy = guy
			}
		})
		return theGuy
	}
//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU
	updateGuy = function (user) {
		if (user) {
			var bitmap = getGuy(user.u).bitmap
			if (bitmap) {
				bitmap.XY(user.x, user.y)
			}
		}
		else {
			socket.emit('bc', 'updateGuy', guyLocation())
		}
	}
	inviteToUniverse = function (toWho) {
		socket.emit('bc',
				'invite',
				{from: _username, toWho: toWho})
	}
//this will have the server broadcast.emit 'accept'
	acceptUniverseInvitation = function (toWho) {
		$l(_username + ' accepts from ' + toWho)
		socket.emit('bc', 'acceptUniverseInvitation', {from: _username, toWho: toWho})
	}
	startUniverse = function (username) {
		$l('startUniverse with: ' + username)
		if (!window['uni']) {
			$l('no uni  -- calling UNIVERSE()');
			UNIVERSE()
		} else {
			$l('uni found. no need to call UNIVERSE')
		}
		var guy = getGuy(username)
		if (guy) {
			$l('we have guy: ' + guy)
		}
		else {
			$l('no guy')
			fetchMugByUsername(username,
					function (userMug) {
						Bm(userMug, function (bitmap) {
							addGuy(username, bitmap)
						})
					})
		}
	}
	UNIVERSE = function () {
		z()
		uni = createjs.stage(1000, 800).tick().A().backgroundImage('/beach.jpg')
		uni.mug(
				function (b) {
					you = b.rCenter().XY(600).sXY(.4).drag()
					b.on('dblclick', function (bm) {
						bm.remove()
						socket.emit('X', _username)
					})
					guysArray.push({u: _username, b: you})
					setInterval(updateGuy, 100)
					div = $.div('blue', 1000, 'auto').prependTo($('body'))
					div.A(
							$.br(3),
							$.input('...', 'tx').id('textinput'),
							$.button('send',
									function () {
										SpeechBubble($('#textinput').V(), '+')
									})
					)
				})
		userHolder = $.div('black').A()
		$.get('/users', function (users) {
			var theRow = $.row().A()
			_.each(users, function (user) {
				if (user.mugURL) {
					var img = $.img(user.mugURL).WH(100).click(function () {
						$l(user.u)
						inviteToUniverse(user.u)
					})
					userHolder.A(img)
				} else {
					alert('no mugURL!')
				}
				// fetchMugByMugId( user,  function(userMug){
				// theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
			})
		})
	}
//RECIEVE speech bubble
	socket.on('speechBubble', function (speech) {
		if (getGuy(speech.u)) {
			SpeechBubble(speech.t, speech.x, speech.y)
		}
	})
	socket.on('updateGuy', function (guy) {
		updateGuy(guy)
	})
	socket.on('acceptUniverseInvitation', function (data) {
		d = data
		//if it was YOUR invitation that was accepted
		if (_username == data.toWho) {
			startUniverse(data.from)
		}
		// here u should really just be able to 'addUser'
	})
	socket.on('invite', function (invitation) {  //dd=invitation
		$l('invite')
		inviteFunction = function (userMug) {
			popInvitation = $.pop(
					$.div().A(
							$.img(userMug).W(200).H(200),
							$.h1('chat with ' + invitation.from + '?'),
							$.button('ya', function () {
								popInvitation.modal('hide')
								startUniverse(invitation.from)
								//so u are just adding them in?
								// ah the function also supposedly takes into account the app not even being open
								// i could nix that for now
								acceptUniverseInvitation(invitation.from)
							}),
							$.button('na', function () {
								popInvitation.modal('hide')
							})
					)
			)
		}
		if (_username == invitation.toWho) {
			fetchMugByUsername(invitation.from, function (data) {
				$l('wooooo')
				inviteFunction(data)
			})
		}
	})
//more
	guysArray = []
	fetchMugByMugId = fetchMugByUserModel2 = function (user, func) { //
		$.P('/getimagebyid', user.m, func)
	}
	fetchMugByUserModel = function (user, func) { //
		// $.post( '/dudX' , {d: user.m}, func)
		$.get('/mug/' + user.m, func)
	}
	fetchMugByUsername = function (username, func) {
		$.post('/mug', {u: username}, function (mug) {
			if (mug) {
				func(mug)
			}
		})
	}
	SpeechBubble = function (text, x, y) {
		var args = G(arguments)
		container = new createjs.Container()
		if (!window['uni']) {
			alert('the universe is missing!');
			return
		}
		text = args[0] || 'hi!'
		//so if you don't pass in coords, it relies on 'you'
		x = args[1] || you.x
		y = args[2] || you.y
		uni.A(container)
		container.circle(x - 150, y - 150, 100, 'white')
				.circle(x - 50, y - 50, 30, 'white')
				.circle(x - 20, y - 20, 10, 'white')
				.text(text, "20px Arial", "blue", x - 200, y - 200)
		setTimeout(function () {
			container.remove()
		}, 10000)
		tw(
				container,
				[{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000]
		)
		//broadcast out your speech bubble
		if (args.p) {
			socket.emit('speechBubble', {t: text, x: x, y: y, u: _username})
		}
		return container
	}
//relies on 'you'.. actually just makes a similar object
	guyLocation = function () {
		if (window['you']) {
			return {
				u: _username,
				username: _username,
				x: you.x,
				y: you.y
			}
		}
	}
	addGuy = function (username, bitmap) {
		
		//add guy to guysArray
		guysArray.push({
			u: username,
			username: username,
			b: bitmap,
			bitmap: bitmap
		})
		//add guy's bitmap to universe
		bitmap.rCenter().XY(600).sXY(.4)
		// bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })
		uni.A(bitmap)
	}
//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there
	getGuy = function (username) {
		//get the username
		username = O(username) ? username.u : username
		//do this as a reduce
		var theGuy = false
		_.each(guysArray, function (guy) {
			if (guy.u == username) {
				theGuy = guy
			}
		})
		return theGuy
	}
//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU
	updateGuy = function (user) {
		if (user) {
			var bitmap = getGuy(user.u).bitmap
			if (bitmap) {
				bitmap.XY(user.x, user.y)
			}
		}
		else {
			socket.emit('bc', 'updateGuy', guyLocation())
		}
	}
	inviteToUniverse = function (toWho) {
		socket.emit('bc',
				'invite',
				{from: _username, toWho: toWho})
	}
//this will have the server broadcast.emit 'accept'
	acceptUniverseInvitation = function (toWho) {
		$l(_username + ' accepts from ' + toWho)
		socket.emit('bc', 'acceptUniverseInvitation', {from: _username, toWho: toWho})
	}
	startUniverse = function (username) {
		$l('startUniverse with: ' + username)
		if (!window['uni']) {
			$l('no uni  -- calling UNIVERSE()');
			UNIVERSE()
		} else {
			$l('uni found. no need to call UNIVERSE')
		}
		var guy = getGuy(username)
		if (guy) {
			$l('we have guy: ' + guy)
		}
		else {
			$l('no guy')
			fetchMugByUsername(username,
					function (userMug) {
						Bm(userMug, function (bitmap) {
							addGuy(username, bitmap)
						})
					})
		}
	}
	UNIVERSE = function () {
		z()
		uni = createjs.stage(1000, 800).tick().A().backgroundImage('/beach.jpg')
		uni.mug(
				function (b) {
					you = b.rCenter().XY(600).sXY(.4).drag()
					b.on('dblclick', function (bm) {
						bm.remove()
						socket.emit('X', _username)
					})
					guysArray.push({u: _username, b: you})
					setInterval(updateGuy, 100)
					div = $.div('blue', 1000, 'auto').prependTo($('body'))
					div.A(
							$.br(3),
							$.input('...', 'tx').id('textinput'),
							$.button('send',
									function () {
										SpeechBubble($('#textinput').V(), '+')
									})
					)
				})
		userHolder = $.div('black').A()
		$.get('/users', function (users) {
			var theRow = $.row().A()
			_.each(users, function (user) {
				if (user.mugURL) {
					var img = $.img(user.mugURL).WH(100).click(function () {
						$l(user.u)
						inviteToUniverse(user.u)
					})
					userHolder.A(img)
				} else {
					alert('no mugURL!')
				}
				// fetchMugByMugId( user,  function(userMug){
				// theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
			})
		})
	}
//RECIEVE speech bubble
	socket.on('speechBubble', function (speech) {
		if (getGuy(speech.u)) {
			SpeechBubble(speech.t, speech.x, speech.y)
		}
	})
	socket.on('updateGuy', function (guy) {
		updateGuy(guy)
	})
	socket.on('acceptUniverseInvitation', function (data) {
		d = data
		//if it was YOUR invitation that was accepted
		if (_username == data.toWho) {
			startUniverse(data.from)
		}
		// here u should really just be able to 'addUser'
	})
	socket.on('invite', function (invitation) {  //dd=invitation
		$l('invite')
		inviteFunction = function (userMug) {
			popInvitation = $.pop(
					$.div().A(
							$.img(userMug).W(200).H(200),
							$.h1('chat with ' + invitation.from + '?'),
							$.button('ya', function () {
								popInvitation.modal('hide')
								startUniverse(invitation.from)
								//so u are just adding them in?
								// ah the function also supposedly takes into account the app not even being open
								// i could nix that for now
								acceptUniverseInvitation(invitation.from)
							}),
							$.button('na', function () {
								popInvitation.modal('hide')
							})
					)
			)
		}
		if (_username == invitation.toWho) {
			fetchMugByUsername(invitation.from, function (data) {
				$l('wooooo')
				inviteFunction(data)
			})
		}
	})
//more
	guysArray = []
	fetchMugByMugId = fetchMugByUserModel2 = function (user, func) { //
		$.P('/getimagebyid', user.m, func)
	}
	fetchMugByUserModel = function (user, func) { //
		// $.post( '/dudX' , {d: user.m}, func)
		$.get('/mug/' + user.m, func)
	}
	fetchMugByUsername = function (username, func) {
		$.post('/mug', {u: username}, function (mug) {
			if (mug) {
				func(mug)
			}
		})
	}
	SpeechBubble = function (text, x, y) {
		var args = G(arguments)
		container = new createjs.Container()
		if (!window['uni']) {
			alert('the universe is missing!');
			return
		}
		text = args[0] || 'hi!'
		//so if you don't pass in coords, it relies on 'you'
		x = args[1] || you.x
		y = args[2] || you.y
		uni.A(container)
		container.circle(x - 150, y - 150, 100, 'white')
				.circle(x - 50, y - 50, 30, 'white')
				.circle(x - 20, y - 20, 10, 'white')
				.text(text, "20px Arial", "blue", x - 200, y - 200)
		setTimeout(function () {
			container.remove()
		}, 10000)
		tw(
				container,
				[{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000]
		)
		//broadcast out your speech bubble
		if (args.p) {
			socket.emit('speechBubble', {t: text, x: x, y: y, u: _username})
		}
		return container
	}
//relies on 'you'.. actually just makes a similar object
	guyLocation = function () {
		if (window['you']) {
			return {
				u: _username,
				username: _username,
				x: you.x,
				y: you.y
			}
		}
	}
	addGuy = function (username, bitmap) {
		
		//add guy to guysArray
		guysArray.push({
			u: username,
			username: username,
			b: bitmap,
			bitmap: bitmap
		})
		//add guy's bitmap to universe
		bitmap.rCenter().XY(600).sXY(.4)
		// bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })
		uni.A(bitmap)
	}
//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there
	getGuy = function (username) {
		//get the username
		username = O(username) ? username.u : username
		//do this as a reduce
		var theGuy = false
		_.each(guysArray, function (guy) {
			if (guy.u == username) {
				theGuy = guy
			}
		})
		return theGuy
	}
//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU
	updateGuy = function (user) {
		if (user) {
			var bitmap = getGuy(user.u).bitmap
			if (bitmap) {
				bitmap.XY(user.x, user.y)
			}
		}
		else {
			socket.emit('bc', 'updateGuy', guyLocation())
		}
	}
	inviteToUniverse = function (toWho) {
		socket.emit('bc',
				'invite',
				{from: _username, toWho: toWho})
	}
//this will have the server broadcast.emit 'accept'
	acceptUniverseInvitation = function (toWho) {
		$l(_username + ' accepts from ' + toWho)
		socket.emit('bc', 'acceptUniverseInvitation', {from: _username, toWho: toWho})
	}
	startUniverse = function (username) {
		$l('startUniverse with: ' + username)
		if (!window['uni']) {
			$l('no uni  -- calling UNIVERSE()');
			UNIVERSE()
		} else {
			$l('uni found. no need to call UNIVERSE')
		}
		var guy = getGuy(username)
		if (guy) {
			$l('we have guy: ' + guy)
		}
		else {
			$l('no guy')
			fetchMugByUsername(username,
					function (userMug) {
						Bm(userMug, function (bitmap) {
							addGuy(username, bitmap)
						})
					})
		}
	}
	UNIVERSE = function () {
		z()
		uni = createjs.stage(1000, 800).tick().A().backgroundImage('/beach.jpg')
		uni.mug(
				function (b) {
					you = b.rCenter().XY(600).sXY(.4).drag()
					b.on('dblclick', function (bm) {
						bm.remove()
						socket.emit('X', _username)
					})
					guysArray.push({u: _username, b: you})
					setInterval(updateGuy, 100)
					div = $.div('blue', 1000, 'auto').prependTo($('body'))
					div.A(
							$.br(3),
							$.input('...', 'tx').id('textinput'),
							$.button('send',
									function () {
										SpeechBubble($('#textinput').V(), '+')
									})
					)
				})
		userHolder = $.div('black').A()
		$.get('/users', function (users) {
			var theRow = $.row().A()
			_.each(users, function (user) {
				if (user.mugURL) {
					var img = $.img(user.mugURL).WH(100).click(function () {
						$l(user.u)
						inviteToUniverse(user.u)
					})
					userHolder.A(img)
				} else {
					alert('no mugURL!')
				}
				// fetchMugByMugId( user,  function(userMug){
				// theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
			})
		})
	}
//RECIEVE speech bubble
	socket.on('speechBubble', function (speech) {
		if (getGuy(speech.u)) {
			SpeechBubble(speech.t, speech.x, speech.y)
		}
	})
	socket.on('updateGuy', function (guy) {
		updateGuy(guy)
	})
	socket.on('acceptUniverseInvitation', function (data) {
		d = data
		//if it was YOUR invitation that was accepted
		if (_username == data.toWho) {
			startUniverse(data.from)
		}
		// here u should really just be able to 'addUser'
	})
	socket.on('invite', function (invitation) {  //dd=invitation
		$l('invite')
		inviteFunction = function (userMug) {
			popInvitation = $.pop(
					$.div().A(
							$.img(userMug).W(200).H(200),
							$.h1('chat with ' + invitation.from + '?'),
							$.button('ya', function () {
								popInvitation.modal('hide')
								startUniverse(invitation.from)
								//so u are just adding them in?
								// ah the function also supposedly takes into account the app not even being open
								// i could nix that for now
								acceptUniverseInvitation(invitation.from)
							}),
							$.button('na', function () {
								popInvitation.modal('hide')
							})
					)
			)
		}
		if (_username == invitation.toWho) {
			fetchMugByUsername(invitation.from, function (data) {
				$l('wooooo')
				inviteFunction(data)
			})
		}
	})
}