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