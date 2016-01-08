CHATROOMS= function(){

    chats = $.divA('bb', 200, 200).drag().left(400).WH('auto').pad(10).A().A(
        ChatButton('general'), ChatButton('fun'), ChatButton('sexy'),
        theTextInput = $.input().K('form-control'),
        $.button('PrivateChatRoomate', function(){
            $.privateChatRoom(theTextInput.val())
        }).mar(40))

    function ChatButton(name){
        return $.button(name,function(){
            $.privateChatRoom(name)
        }).mar(40)}
    }
$.privateChatRoom  = function(roomName){


    //bug.. if they CLOSE the window...this needs to TRIGGER something
    //in this case (removal from the chatRoomsObject)..
    //but more generally, i need to allow a sophisticated options obj to $win

    if(
        chatRoomsObject[ roomName ]){
        $l('already in this room') }

    else {

        $.chatRoom(roomName)

        socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
    }


}
$.chatRoom=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'


    var theTextInput= $.input().K('form-control'),

        theSendButton= $.button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,   username: _username,  message: theTextInput.V()

            }) }),
        thePicButton= $.button('pic', function(){ $.pop('pic select')  }),
        thePopButton= $.button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),

        theMessages = $.div().id( 'cbi' ).C('u').overflow('auto'),

        usersInRoomBox= $.div()

    theWindow = $.win('chatroom: ' + title).id(id).css({'min-width':600,  'min-height':400, 'background-color': color })

    theWindow.A(

        $.row(

            $.col(8,  theMessages,   theTextInput, theSendButton,  thePopButton,  thePicButton ),

            $.col(4, $.h5('users:'), usersInRoomBox)
        )
    )

    var updateUsersDiv=function(users){

        usersInRoomBox.E()

        if(A(users)){

            _.each(users,

                function(username){

                    usersInRoomBox.A(  $.h5(username).click(  function(){ popUser(username) }  ) )

                })
        }


        else { usersInRoomBox.A( $.h5('no users'))}}

    var chatController={

        updateUsersDiv: updateUsersDiv,

        window: theWindow,

        toggle: function(){ return theWindow.toggle() },

        write:function(m){  theMessages.A( $.h5(m).col('w')  )  },

        writeBlack: function(m){  theMessages.A( $.h5(m).col('z')    )  }}

    chatRoomsObject[title] = chatController

    setInterval( function(){ socket.emit('room', title)}, 1000) //repeatedly emit 'room', which launches room user updates!

    return chatController}
$.popUser=function(username){


    $.post('/getMugByUsername', {username: username},  function(mug){
            $l('clicked '+username)
            $l(mug)


            var fullProfileButton = $.button('full', function(){

                    $l('/wap/profiles/'+ username);

                    window.location = '/wap/profiles/'+ username

                })


            $.win(

                $.div().A(

                    $.br(), $.hr(), $.h3('User: '+ username),

                    $.br(),

                    $.canvas(300).A().fit(mug),

                    theDiv = $.div(),

                    message = $.textarea().C('white','black'),

                    //$.mailButton( message, username ),

                   // $.chatButton( username, message ),

                    fullProfileButton  )
            )


            //$.status(username, theDiv)

          //  $.profile(username, theDiv)

        }

    )}
CHAT = function () {
	$CHATS = {}
	k.on('ChatRmMs', function (d) {
		if ($CHATS[d.rm]) {
			$CHATS[d.rm].write(d.un + ': ' + d.ms)
		}
	})
	k.on('rmUd', function (d) {
		if ($CHATS[d.rm]) {
			$CHATS[d.rm].updateUsersDiv(d.users)
		}
	})
	chatMenu$ = $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
	chatMenu$.A($.ChatBt('general'), $.ChatBt('fun'), $.ChatBt('sexy'),
			inputMs = $.ip().K('form-control'),
			$.bt('private room', function () {
				$.chat(inputMs.v())
			}).mar(40))
}
CHAT = function () {
	$CHATS = {}
	k.on('ChatRmMs', function (d) {
		if ($CHATS[d.rm]) {
			$CHATS[d.rm].write(d.un + ': ' + d.ms)
		}
	})
	k.on('rmUd', function (d) {
		if ($CHATS[d.rm]) {
			$CHATS[d.rm].updateUsersDiv(d.users)
		}
	})
	chatMenu$ = $.d('g', 200, 200, '+').dg().left(400).WH('auto').pad(10)
	chatMenu$.A($.ChatBt('general'), $.ChatBt('fun'), $.ChatBt('sexy'),
			inputMs = $.ip().K('form-control'),
			$.bt('private room', function () {
				$.chat(inputMs.v())
			}).mar(40))
}
chatRoomsObject = {}
ChatRoom = function (title, color, id) {
	title = title || 'chatbox'
	color = color || 'b'
	id = id || 'cbo'
	var theTextInput = $textInput(),
			theSendButton = $button('send', function () {
				socket.emit('sendChatMessage', {
					chatRoomName: title,
					username: _username,
					message: theTextInput.V()
				})
			}),
			thePicButton = $button('pic', function () {
				pop('pic select')
			}),
			thePopButton = $button('pop', function () {
				socket.emit('p', theTextInput.V(), title)
			}),
			theMessages = $div().id('cbi').s({overflow: 'auto', C: 'x'}),
			usersInRoomBox = $div()
	theWindow = $win('chatroom: ' + title).id(id).s({
		'min-width': 600, 'min-height': 400, 'background-color': color
	})
	theWindow(
			row(
					col(8,
							theMessages,
							theTextInput,
							theSendButton,
							thePopButton,
							thePicButton),
					col(4, $h5('users:'), usersInRoomBox)))
	var updateUsersDiv = function (u) {
		usersInRoomBox.E()
		if (A(u)) {
			_.each(u,
					function (username) {
						usersInRoomBox(
								$h5(username).$(
										function () {
											alert('clicked ' + username)
											$.post('/mug', {u: username},
													function (userMug) {
														var theH1 = $h1(),
																theDiv = $div(),
																fullProfileButton = $button('full', function () {
																	$l('/wap/profiles/' + username);
																	window.location = '/wap/profiles/' + username
																})
														$win(
																$div()(
																		$br(), $hr(), $h3('User: ' + username),
																		$br(),
																		xc().w(300).h(300).fit(userMug), theH1, theDiv,
																		ms = $textarea().c('w', 'z'),
																		$mailButton(ms, username),
																		$chatButton(username, ms),
																		fullProfileButton))
														showStatus(username, theDiv)
														makeProfile(username, theDiv)
													}
											)
										})
						)
					})
		}
		else {
			usersInRoomBox($h5('no users'))
		}
	}
	var chatController = {
		u: updateUsersDiv,
		updateUsersDiv: updateUsersDiv,
		w: theWindow,
		window: theWindow,
		t: function () {
			return theWindow.toggle()
		},
		toggle: function () {
			return theWindow.toggle()
		},
		b: function (m) {
			theMessages($h5(m).s({c: 'w'}))
		},
		write: function (m) {
			theMessages($h5(m).s({c: 'w'}))
		},
		s: function (m) {
			theMessages($h5(m).s({c: 'z'}))
		},
		writeBlack: function (m) {
			theMessages($h5(m).s({c: 'z'}))
		}
	}
	//old way to store rooms...
	//$w['chat_' +  title]= chatController
	//add room to client rooms list
	chatRoomsObject[title] = chatController
	//repeatedly emit 'room', which launches room user updates!
	setInterval(function () {
		socket.emit('room', title)
	}, 1000)
	return chatController
}
$.chatRoom = function (title, color, id) {
	title = title || 'chatbox';
	color = color || 'b';
	id = id || 'cbo'
	var theTextInput = $.textInput().K('form-control'),
			theSendButton = $.button('send', function () {
				$l('sending: ' + theTextInput.val())
				socket.emit('sendChatMessage', {
					chatRoomName: title,
					username: _username,
					message: theTextInput.val()
				})
			}).K("btn btn-mini"),
			thePicButton = $.button('pic', function () {
				pop('pic select')
			}).K("btn btn-mini"),
			thePopButton = $.button('pop', function () {
				socket.emit('p', theTextInput.val(), title)
			}).K("btn btn-mini"),
			theMessages = $.div('x').id('cbi').overflow('auto'),
			usersInRoomBox = $.div()
	theWindow = $.win('chatroom: ' + title).id(id).minW(600).minH(400).C(color)
	theWindow.A(
			$.row(
					$.col(8,
							theMessages,
							theTextInput,
							theSendButton,
							thePopButton,
							thePicButton),
					$.col(4, $.h5('users:'),
							// "<div class="m4"><h5>users:</h5></div>"
							// class should be.. "col-md-4" ?!
							usersInRoomBox
					))
	)
	var updateUsersDiv = function (u) {
		usersInRoomBox.empty()
		if (A(u)) {
			_.each(u, function (username) {
				usersInRoomBox(
						$.h5(username).$(
								function () {
									alert('clicked ' + username)
									$.post('/mug', {u: username},
											function (userMug) {
												var theH1 = $.h1(),
														theDiv = $.div(),
														fullProfileButton = $button('full', function () {
															$l('/wap/profiles/' + username);
															window.location = '/wap/profiles/' + username
														})
												$.win(
														$.div()(
																$.br(), $.hr(), $.h3('User: ' + username),
																$.br(),
																$.canvas(300, 300).fit(userMug), theH1, theDiv,
																ms = $.textarea().C('w', 'z'),
																$mailButton(ms, username),
																$chatButton(username, ms),
																fullProfileButton))
												showStatus(username, theDiv)
												makeProfile(username, theDiv)
											}
									)
								})
				)
			})
		}
		else {
			usersInRoomBox.A($.h5('no users'))
		}
	}
	var chatController = {
		u: updateUsersDiv,
		updateUsersDiv: updateUsersDiv,
		w: theWindow,
		window: theWindow,
		t: function () {
			return theWindow.toggle()
		},
		toggle: function () {
			return theWindow.toggle()
		},
		b: function (m) {
			theMessages.A($.h5(m).col('w'))
		},
		write: function (m) {
			theMessages.A($.h5(m).col('w'))
		},
		s: function (m) {
			theMessages.A($.h5(m).col('z'))
		},
		writeBlack: function (m) {
			theMessages.A($.h5(m).col('z'))
		}
	}
	//add room to client rooms list
	chatRoomsObject[title] = chatController
	//repeatedly emit 'room', which launches room user updates!
	setInterval(function () {
		socket.emit('room', title)
	}, 1000)
	return chatController
}
ChatRoom2 = chat = function () {//uses var usr!
	$canvas = _c()
	var uni = $canvas.c('b')
	x = xx(uni).w(1200).h(1000)
	row(
			col(12, $br(40)
			)
	).pp()
	row(
			col(1,
					dv('x', 200, 800)(
							$ul().id('users')
					)),
			col(11, uni)
	).pp()
	var usersDiv = qq($('#users'))
	usersDiv($li($h3('users!')))
	usersDiv($li($h3('users!')))
	usersDiv($li('user1'))
}
//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
function msgsArr() {
	Message = msg = function (messageText) {
		return $div().k('msg').c('x', 'z').font(20)
				.T(messageText || 'messageText goes here').M(10).P(10).B(0)
	}
	add = function rc(messagesArray, a) {
		var args = G(arguments)
		if (args.n) {
			messagesArray.E()
		}
		if (A(a)) {
			_.e(a,
					function (v) {
						rc(O(v) ? v.n : v)
					})
		}
		else {
			_.e(
					args,
					function (v) {
						messagesArray($br(),
								msg(v))
					}
			)
		}
	}
}
function jQueryQQ() {
	JQUI = function () {
		z()
		('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
		('<script src="/jquery-ui.min.js">').A()
		t = $.textInput('date').A().datepicker()
		d = $.div('b', 400, 400).A().A(t).pad(20)
	}
//runs a fn on the qq of all obs of certain class
	all = function (s, fn) {
		_.e($('.' + s),
				function (m) {
					fn(qq(m))
				})
	}
}
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
getMessages = gMsgs = function rc(u, M) {
	qJ(u,
			function (d) {
				add(M, d)
				all('msg', function (m) {
					m.$$(pof('/nMsg', {n: m.T()}, rc))
				})
			})
}
function value() {
// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
	dataValue = dV = function rc(title, content) {
		if (U(content)) {
			return rc(null, title)
		}
		var data = {}
		data.c = data.content = data.message = content.V()
		if (title) {
			data.t = data.title = data.topic = title.V()
		}
		return data
	}
}
function sock() {
	joinSelf = function () {
		socket.emit('joinRoom', _username)
	}
}
PrivateChatRoom = function (roomName) {
	
	
	//bug.. if they CLOSE the window...this needs to TRIGGER something
	//in this case (removal from the chatRoomsObject)..
	//but more generally, i need to allow a sophisticated options obj to $win
	if (chatRoomsObject[roomName]) {
		$l('already in this room')
	}
	else {
		ChatRoom(roomName)
		socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
	}
}
roomsObject = {}
instantMessagesObject = {}
//connect to the socket //..need to change this on the deployment server!!!
socket = kk = io.connect()
///
///
///
/// communication
/////////////////////////////////////////////////////// instant messages
InstantMessage = function (messageObject) {  //=imBox
	var theTextInput = $.ip()
	var instantMessage = $.win()(
			$.h3('instant message from ' + msgOb.from),
			$.h4('message: ' + msgOb.message),
			theTextInput,
			$.bt('reply', function () {
				k.emit('sendPrivateMessage', {
					msg: theTextInput.V(),
					toWho: msgOb.from,
					from: _username
				})
			}))
	instantMessagesObject[messageObject.from] = instantMessage
	return instantMessage
}
k.on('receivePrivateMessage',
		function (messageObject) {
			var iMsg = instantMessagesObject[messageObject.from]
			if (iMsg) {
				iMsg.A($.h4(messageObject.message))
			} else {
				InstantMessage(messageObject)
			}
		})
///////////////////////////////////////////////////////   chatrooms
k.on('receiveChatMessage', function (data) {
	$l(data.username + ': ' + data.message)
	chatRoomsObject[data.chatRoomName].write(data.username + ': ' + data.message)
})
k.on('roomUpdate', function (upd) {
	var room = chatRoomsObject[upd.room]
	if (room) {
		room.updateUsersDiv(upd.users)
	}
})
//var e=function(a,b){return kk.emit(a,b)},o=function(a,b){return kk.on(a,b)}, b=function(a,b){return kk.broadcast.emit(a,b)  }
//socket.on(  'a',function(a){alert(a)})
//socket.on('l',function(d){  $l(d)  })
//socket.on('d',function(d){$l('SERVER: %j',d)})
//socket.on( 'dpop', function(d,n){ dud(d, n)  })
//socket.on( 'dudPop', function(d,n){ dud(d, n)  })
//socket.on('notice', function (d) {  $l('SERVER NOTICE: %s', d);  })
//socket.on('p',function(e){pop(e)})
//socket.on('roo',function(d){roo=d})  // ?
//socket.on('res', function(d){ res = d })  // ?
//socket.on('newImgAck', function(data){ xx().fit(data.u) })
//socket.on('im', function(image){ xx().f( image ) })
//dnm = function(d){ return  d.n+': '+ d.m }
//chaz=function(){
//var b1= $emitButton('msg', 'chat'),  b2 = $button('room', function(){var theChannel = connectChannel('chat',  ffl('chat') ) // wtf is ffl ???
//      theChannel.on('al', pop)})
//dva()(b1,b2).lt(300)}
//socket.on('newChat', function(d){ CH.b(d.n+': '+ d.m) })
//socket.on('youChat', function(d){ CH.s(d.n+': '+ d.m) })
//socket.on('frog',function(){pop('frog')})
//socket.on('upd', function(guy){ updateGuy(guy) })
//ke=function(a,b,c){ socket.emit(a,b,c) }
//sop=function(m,u){ socket.emit('p',m,u)  }
// o('popbox', function(o){poppy(o);qi('popbox').m()})
// o('v',function(d){VAR=d})
// o('user-message',function(d){$l(d);e('chat-message',d)})
//o('eG', nP)
// o('mU',function(m){uM(m)})// uM(m);
// o('map',function(m){uM(m)})
// o('fc',function(fc){xy(gx.me, fc) })
//o('map',function(gA){_e(gA,function(g){_e(sArray,function(g){c.a(p.me)})});xy(p.me,200,100);xy(p.me,f)})
//kf=function(a,b,c){return function(){socket.emit(a,b,c)}}
//socketEmit = function(a,b){ socket.emit( 'e' ,  a,  b)  } // em=
//*** ??? confusing!!!
upop = function (image, size) {
	image = X(image) ? image.u() : image
	size = size || 300
	return xx().w(size).h(size).fit(image)
}
dud = function (d, n) {
	$.P('/getImageById', {data: d}, function (u) {
		upop(u, n)
	})
}
//sk-send du of your (first) can-el
$dU = du = function () {
	var u = c0().toDataURL();
	socket.emit('du', u);
	return u
}
sendPopBox = function () {
	$('.pop').click(function () {
		socket.emit('pop',
				{
					t: qk('pt').v, b: qk('pb').v
				})
	})
}
//a button that emits!
$emitButton = bte = function (buttonText, toEmit) {
	return $.bt(buttonText,
			function () {
				k.emit(toEmit || buttonText)
			}
	)
}
//NAMESPACE
//so this will connect you to a LOCAL channel.. maybe reason websocket not working actually
//you can also pass it a callback function (on 'connected')
connectChannel = chan = function (channel, fn) {
	var theChannel = io.connect('http://localhost/' + channel)
	if (fn) {
		theChannel.on('connect', fn)
	}
	return theChannel
}
k.on('alert', function (a) {
	alert(a)
})
k.on('log', function (d) {
	$l(d)
})
k.on('dir', function (d) {
	$l('SERVER: %j', d)
})
k.on('pop', function (e) {
	pop(e)
})
//***
//this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)
//socket.on('say to someone', function(id, msg){socket.broadcast.to(id).emit('my message', msg)})
Y.chan = function (chan, fn) {
	alert('Y.chan')
	chan = io.connect('http://localhost/' + chan)
	if (fn) {
		chan.on('connect', fn)
	}
	return chan
}
CHAN = function () {
	$CHAN = {}
	$.btEm = function (t, toEmit) {
		return $.bt(t, function () {
			k.em(toEmit || t)
		})
	} //a button that emits!
	$.dA().A(
			$.btEm('msg', 'chat'),
			$.bt('room', function () {
				Y.chan('chat', function () {
					$l('chat')
				}).on('al', pop)
			})
	)//.lt(300)
	k.on('newChat', function (d) {
		CH.bc(d.n + ': ' + d.m)
	})
	k.on('youChat', function (d) {
		CH.s(d.n + ': ' + d.m)
	})
}
instantMESSAGE = sendMessage = iMsg = function (toWho, message) {
	$l('toWho: ' + toWho)
	$l('message: ' + message)
	socket.emit('sendMessage', {m: message, t: toWho, f: _username})
}
$chatButton = function (username, message) { //= btChat  //_$username,  messageTextarea
	mmm = message
	return $.button('chat',
			function () {
				$l('send message')
				//$l('message: '+ message.V())
				$l('toWho: ' + username)
				$l('from: ' + _username)
				// mo= {  message: message.V(),  toWho:username,  from:_username  }
				socket.emit('sendPrivateMessage',
						{message: message.V(), toWho: username, from: _username}
				)
			})
}
$chatButton = function (username, message) { //= btChat  //_$username,  messageTextarea
	mmm = message
	return $.button('chat',
			function () {
				$l('send message')
				//$l('message: '+ message.V())
				$l('toWho: ' + username)
				$l('from: ' + _username)
				// mo= {  message: message.V(),  toWho:username,  from:_username  }
				socket.emit('sendPrivateMessage',
						{message: message.V(), toWho: username, from: _username}
				)
			})
}
$chatButton = function (username, message) { //= btChat  //_$username,  messageTextarea
	mmm = message
	return $.button('chat',
			function () {
				$l('send message')
				//$l('message: '+ message.V())
				$l('toWho: ' + username)
				$l('from: ' + _username)
				// mo= {  message: message.V(),  toWho:username,  from:_username  }
				socket.emit('sendPrivateMessage',
						{message: message.V(), toWho: username, from: _username}
				)
			})
}
socks = function () {
	socket.emit('id', un)
	socket.emit('joinRoom', _un)
}
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
function oldUni() {
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