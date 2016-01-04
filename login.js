Y.IMS = {}
Y = function (app) {
	Y.render(app)
	return Y
}
Y = function self(page) {
	self.render(page)
	return self
}
$ren = Y.render = function (page) {
	$l('in render')
	if (Y[page]) {
		$l('found page: ' + page)
		return Y[page]() || true
	}
}
$run = Y.run = function (app) {
	$l('Y.run')
	app = app.toUpperCase()
	if (app = Y[app] || window[app]) {
		app();
		return true
	}
}
Y.run = function (app) {
	if (F(app = Y[app.toUpperCase()] || window[app.toUpperCase()])) {
		app();
		return true
	} //return false
}
Y.render = function (app) {
	if (F(Y[app])) {
		Y[app]();
		return true
	}  //;  return false
}
Y.popUser = Y.uPop = function (un) {
	if (!un) {
		return $('.pop').$(function () {
			k.em('pop', {t: $('.pt').v, b: $('.pb').v})
		})
	}
	$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
		d = $.d()
		dv.A(
				$.br(),
				$.hr(),
				$.h3('User: ' + un), $.br(),
				$.c(300).fit(mug),
				d = $.d(),
				msg = $.ta().C('w', 'z'),
				$.btMail(msg, un),
				$.btCh(un, msg),
				$.bt('fullPf', function () {
					Y.loc('/wap/profiles/' + un)
				})
		)
		$.w(dv)
		$.sts(un, d);
		$.pf(un, d)
	})
}
Y.clr = function () {
	z();
	Y.nav()
}
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
Y.render = function (page) {
	if (Y[page]) {
		$l('found page: ' + page)
		return Y[page]() || true
	}
}
Y.run = function (app) {
	app = app.toUpperCase()
	if (app = Y[app] || window[app]) {
		app();
		return true
	}
}
Y.run = function (app) {
	app = app.toUpperCase()
	app = Y[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}
Y.render = function (page) {
	page = Y[page]
	if (page) {
		page();
		return true
	}
	return false
}
$to = Y.to = Y.load = function (a) {
	alert('y.to y.load')
	window.location = '/wap/' + a
}
$logOut = Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}
$nav = Y.nav = function () {
	navbarCollapse = $.nbC().A($.n(
					// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
					$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
					$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
					$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
					$.dd('talk', ['chat', 'universe', 'post']),
					$.dd('social', ['users', 'profiles', 'posts'])
					
					
					//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
			),
			$.nR(
					$.dd('account', ['status', 'profile', 'messages']),
					$.liA('logged: ' + _username),
					$.liA('logout', Y.logOut)
			)
	)
	$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
}//=Y.n
$d2 = $to = $rd = Y.directTo = Y.load = load = Y.to = function (a) {
	window.location = '/wap/' + a
}
$arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}
$.d('y', 400, 400).A($.h1('welcome you are NOT logged in'))
$.bt('new account', function () {
})
$.bt('login', function () {
})
_SignUpForm = function () {
	$s({
		f: {
			C: 'o', P: 4, fS: 16
		}
	})
	fo = $.f().A($.d().name('un').A($.lb('un: ', 'un'), $.ip().id('uname')),
			$.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).name('pw'),
			$.bt('sign up').type('submit')
	).sm(f.pD(submit)).sm($.smBt('sign up'))
	verify = function () {
		return {un: un.find('input').val(), pw: pw.find('input').val()}
	}
	return fo
	function submit(e) {
		un = unInput.find('input').val()
		pw = pwInput.find('input').val()
		$.post('/user', {un: un, pw: pw}, ajaxPost)
	}
	
	function ajaxPost(un) {
		if (un === 'guest') {
			$('.modal').modal('toggle');
			$.pop('try again.. idiot')
		}
		else {
			Y.render('HomePage');
			$.pop('welcome ' + un + '!')
		}
	}
}
SignUpForm = function () {
	$.pop(_SignUpForm()).drag()
}
LoginForm = function () {
	_LoginForm = function () {
		return $.f().sm(sbm)
	}
	$.pop(_LoginForm()).drag()
}
_LoginForm = function () {
	var form = $.form().C('green').pad(4).A(
			$.formGroupDiv().A(
					$.label('un: ', 'un'),
					$.textInput('un')),
			$.formGroupDiv().A(
					$.label('pw: ', 'pw'),
					$.pwInput('pw')),
			$.submitInput('log in')
	)
	form.submit(function (e) {
		e.preventDefault()
		var formData = form.serializeJSON() // $l(formData)
		$.post('/login', formData, verifyLogin)
	})
	function verifyLogin(un) {
		if (un === 'guest') {
			$('.modal').modal('toggle')
			$.pop('try again.. idiot')
		}
		else {
			Y.render('HomePage');
			$.pop('welcome ' + un + '!')
		}
	}
	
	return form
}
Y.HomePage = $HomePage = function () {
	Y.nav() //WappyNav($r()) //load navigator
	Y.run(wappyApp)//update un on screen
	$.getJSON('loggedIn', function (un) {
		$l('----' + un)
		$('#uname').text(_un = $l(un))
	})
}
home = function () {
	Y.render('HomePage')
}
guest = function () {
	if (un == 'guest' || !un) {
		return Y.render('GuestPage')  //renderGuestPage();
	}  //usr=
}
goToGuestPage = function (p) {
	p.send('guest')
}
Y.GuestPage = function () {
	z('r')
	var container = $.containerDiv().A(
			$.headerDiv().A(
					$.ul().K("nav nav-pills pull-right").A(
							$.liA('home').K('active'),
							$.liA('About'),
							$.liA('Contact')),
					$.h1('jason yanofski presents..')),
			$.jumbo(
					'a graphics-based real-time social gaming creativity web app', 'woo hoo!').A(
					$.buttonL('log in', LoginForm).C('y', 'b'),
					$.span(' '),
					$.buttonL('sign up', SignUpForm).C('b', 'y')),
			$.row(
					$.h1('fun!'),
					$.div().A(
							$.h4('graphics'),
							$.p('cool cool cool'),
							$.h4('social'),
							$.p('cool cool')))
	)
	container.drag().C('o').opacity(.9).top(100).left(100)
}
Y.GuestPage = function () {
	ct = $.dC().dg().C('g').al(.9).top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A(
			$.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A(
						$.fG().A($.lb('un: ', 'un'),
								$.ip('un')),
						$.fG().A($.lb('pw: ', 'pw'),
								$.pw('pw')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					fData = f.serializeJSON()
					$.post('/login', fData, function (un) {
						u = un
						$l('check u!')
						if (un === 'guest') {
							$('.modal').modal('toggle');
							$.pop('try again.. idiot')
						}
						else {
							Y('HomePage');
							$.pop('welcome ' + un + '!')
						}
					})
				})
				$.pop(f).dg()
			}).C('z', 'w'), $.sp(' - '),
			$.btL('sign up', function () {
				unIp = $.d().fS(20).name('un').A($.lb('un: ', 'un'), $.ip().K('form-control').id('uname'))
				pwIp = $.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).fS(20).n('pw')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(unIp, pwIp, submit).submit(function (e) {
					e.preventDefault()
					$.P('user', {
								un: un = unIp.find('input').val(),
								pw: pw = pwIp.find('input').val()
							},
							function (un) {
								if (un === 'guest') {
									$('.modal').modal('toggle');
									$.pop('try again.. idiot')
								}
								else {
									Y('HomePage');
									$.pop('welcome ' + un + '!')
								}
							})
				})
				$.pop(f).dg()
			}).C('w', 'z'), $.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
	ct.A($.dH().h1('jy presents..'), jb)
}
$GuestPageBoot = Y.GuestPageBoot = function () {
	z('r')
	ct = $.dK('container').dg().C('g')
	ct.al(.9)
	ct.top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A($.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A($.fG().A($.lb('un: ', 'un'),
								$.ip('un').id('un')),
						$.fG().A(
								$.lb('pw: ', 'pw'),
								$.pw('pw').id('pw')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					$l('login form will be submited')
					fData = {
						un: $('#un').v(),
						pw: $('#pw').v()
					}
					// fData = f.serializeJSON()
					$l(fData)
					$.post('/login', fData, function (un) {
						if (un === 'guest') {
							$('.modal').modal('toggle');
							$.pop('try again.. idiot')
						}
						else {
							Y('HomePage');
							$.pop('welcome ' + un + '!')
						}
					})
				})
				$.pop(f).dg()
			}).C('z', 'w'), $.sp(' - '),
			$.btL('sign up', function () {
				unIp = $.d().fS(20).n('un').A($.lb('un: ', 'un'), $.ip().K('form-control').id('uname'))
				pwIp = $.d().A($.lb('pw: ', 'pw'), $.pw().id('pw')).fS(20).n('pw')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(
						unIp, pwIp, submit).submit(function (e) {
							e.preventDefault()
							$.P('user', {
										un: un = unIp.find('input').val(),
										pw: pw = pwIp.find('input').val()
									},
									function (un) {
										if (un === 'guest') {
											$('.modal').modal('toggle');
											$.pop('try again.. idiot')
										}
										else {
											Y('HomePage');
											$.pop('welcome ' + un + '!')
										}
									})
						})
				$.pop(f).dg()
			}).C('w', 'z'),
			$.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y'))
	ct.A($.dH().h1('jy presents..'), jb)
	function verify() {
		return {
			un: un.find('input').val(),
			pw: pw.find('input').val()
		}
	}
}
function verify() {
	return {
		un: un.find('input').val(),
		pw: pw.find('input').val()
	}
}
LOGIN = function () {
	unIp = $.lIp('username', 'un').rm()
	pwIp = $.lIp('password', 'pw').rm()
	$.HR()
	asDiv = $.d().h4('as:  loading..')
	$.HR()
	btsDiv = $.d().A(
			But('new user', $.okP('dudes', $.IVOb('un', 'pw'), suc)),
			But('login', $.ok()))
	dudesForm = $.fAc('dudes').a2(btsDiv)
	$.HR()
	$.btCA('b', [
		$.ipStPr('ip2'),
		$.spC('y', ' cheat')
	], cheatFn)
	$.HR()
	$.G('login', function (un) {
		asDiv.eH4('as: ' + un || 'guest')
	})
}
function But(title, arr) {
	var g = G(arguments)
	return $.bt(title, btFn)
	function btFn() {
		dudesForm.eH1(title)
		dudesForm.A(unIp, pwIp)
		A(arr) ? _.e(arr, add) : _.e(g.r, add)
	}
	
	function add(ch) {
		dudesForm.A(ch)
	}
}
function suc() {
	$l('suc')
}
function cheatFn() {
//	$.P('un', {un: $l($.IV('ip2')), inAs)
}
function inAs(ss) {
	$l('logged in as: ' + un + 'ss:' + ss)
}
AS = function () {
	$.h1('in as')
	form = $.f().C('g')
	form.A('login AS',
			$.lb('username:'),
			$.ip().id('un'),
			$.ok()
	).suPrDf(fn)
	function fn() {
		$l('submit username: ' + $.iV('un'))
		$.P$d('as', 'un', 'ss')
	}
}
SUDO = function () {
}
_back = function (p) {
	p.redirect('back')
}
_title = function (q) {
	return {title: q.query.title}
}
unIp = function () {
	return $.d().K('form-group').fontSize(20).name('un').A(
			$.lb('un: ', 'un'),
			$.input().K('form-control').id('uname')
	)
}
pwIp = function () {
	return $.d().K('form-group').A(
			$.lb('pw: ', 'pw'),
			$.pw().id('pw')
	).fontSize(20).name('pw')
}
verify = function () {
	return {
		un: un.fi('input').v(),
		pw: pw.fi('input').v()
	}
}
function login(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle');
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}
function snap() {
	$.fn.selPic = function () {
		$('.pic').e(function () {
			$(this).C('b')
		})
		this.parent().C('y')
	}
	$.wd = $.w = $.win = function (a, size, id) {
		var g = G(arguments),
				t, lBt, mBt, xBt, o, wd, w
		w = wd = $.dA('b', '+').WH('auto', 'auto').al(.9).
				ov('auto').pad(10)
				.bW(4).bS('dashed')
				.dg()
		wd.A(
				mBt = $.btR('>', function () {
					w.WH(700);
					lBt.sh();
					mBt.hd();
				}),
				lBt = $.btR('<', function () {
					w.WH('auto');
					mBt.sh();
					lBt.hd()
				}).hd(),
				xBt = $.btL('X', function () {
					w.rm()
				})
		)
		o = g.N_ ? {size: g.f} : g.O_ ? {ch: g.f} : {t: g.f, size: g.s, id: g.t}
		if (o.ch) {
			w.A(o.ch)
		}
		if (o.t) {
			w.tt(o.t)
		}
		if (o.id) {
			w.id(o.id)
		}
		return wd
	}
	$.fn.dots = function () {
		var el = this
		el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x);
			el.dats.push(y) //vestige from phaser physics?
			el.line(el.DOTS)
		})
		el.$$(function (X, Y) {
			var du
			//el.C('X')
			el.off('click')
			el.closePath()  //el.paste() // el.copy()  //el.save()
			el.clear() //du = el.toDataURL()
			el.clip()
			el.paste() //el.fit(du)
		})
		return el
	}
	$.fn.snap = function (fn) {
		$.po('/img', {
			d: this.canvas.toDataURL(),
			dats: this.dats //vestige from phaser physics?
		}, fn)
	}
	$.cut = function (m) {
		z();
		m = m || 'me'
		$('body').A(
				$.bt('save sprite', function () {
					c.snap(CUTOUTS)//; EDIT()
				}), $.br(2),
				$.bt('start cut', function () {
					c.dots()
				}), $.br(2),
				$.bt('restart cut', function () {
					$.cut(m)
				}), $.br(2),
				c = $.c('r', 500, 500).A().fit(m)
		)
	} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
	$.chat = function (n, c, id) {
		var wd
		n = n || 'chatbox' //default chatRm
		if ($CHATS[n]) {
			$l('already in this room');
			return
		} //singleton!
		k.em('jRm', n) //join the room (sign up to receive messages.. and i guess to also send them)
		_.ev(.5, function () {
			k.em('rmUd', n)
		}) //repeatedly request updates for yourself (so you have a users list)
		$.chatEl = function (n, id, c) {
			var wd = $.w('chatroom: ' + n).id(id).css({'min-width': 600, 'min-height': 400}).C(c || $r())
			wd.messages = $.d().id('cbi').C('u').ov('auto')
			wd.input = $.ip().K('form-control')
			wd.usersDiv = $.d().A($.i('me').A())
			wd.mainPanel = $.Cl(8, wd.messages, wd.input,
					$.bt('send', function () {
						k.em('ChatRmMs', {rm: n, ms: wd.input.V(), un: '_username'})
					}),
					$.bt('pop', function () {
						k.emit('p', ip.V(), n)
					}),
					$.bt('pic', function () {
						$.pop('pic select')
					})
			)
			wd.usersPanel = $.Cl(4, $.h3('users:'), wd.usersDiv)
			wd.A($.R().A(wd.mainPanel, wd.usersPanel))
			return wd
		}
		wd = $.chatEl(n, id || 'cbo', c || 'o')
		$CHATS[n] = {
			wd: wd,
			updateUsersDiv: function (users) {
				wd.usersDiv.E()
				_.e(users, function (un) {
					wd.usersDiv.A($.h5(un).$(function () {
						$.popUser(un)
					}))
				})
			},
			toggle: function () {
				this.wd.toggle();
				return wd
			},
			write: function (m) {
				wd.messages.A($.h5(m).col('w'))
			},
			writeBlack: function (m) {
				wd.messages.A($.h5(m).col('x'))
			}
		}
	}
	$.ChatBt = function (n) {
		return $.bt(n, function () {
			$.chat(n)
		}).mar(40)
	}
////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
	$(function () {
		$.j('loggedIn', function (un) {
			$l('un: ' + un)
			if (isGuest(Y._un = Y._userName = _username = un)) {
				Y('GuestPage')
			} else {
				logInUser(un)
			}
			function logInUser(un) {
				k.em('id', un);
				k.em('jRm', _username)
				$.g('myMug', function (mug) {
					Y._userMug = _userMug = mug
					$l('going to home page..')
					Y('HomePage')
				})
			}
			
			function isGuest(un) {
				return un == 'guest' || !un
			}
		})
	})
////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
	$.pop = function (message, o) {
		if (S(o)) {
			return $.pop(o, {title: message})
		}
		o = O(o) ? o : {}
		message = message || 'pop pop'
		mB = $.modalBody().A($.h2(message))
		m = $.modalFade().A($.modalDialog().A($.modalContent().A(mB)))
		if (!o.hd) {
			m.modal()
		}
		if (o.tt) {
			mB.pp($.h1(o.titC).col(o.titC || 'z'),
					$.hr().C(o.headerC || 'z').css('height', 2))
		}
		if (o.bt) {
			mB.A($.bt(o.bt))
		}
		if (o.dg) {
			m.dg()
		}
		if (o.al) {
			m.al(o.al)
		}
		//text color of the MESSAGE
		if (o.col) {
			m.col(o.col)
		}
		//color of background of modal itself
		if (o.C) {
			//flash like crazy
			if (o.C == '*') {
				_.ev(.1, function () {
					mB.C($r())
				})
			}
			else {
				mB.C(o.C)
			}
		}
		//this color takes over the whole screen!
		//this is the background color of the hiding body
		if (o.c) {
			m.C(o.c)
		}
		return m
	}
	function later() {
		function sockAlpha() {
			k.o = function (ob) {
				var sock = this
				_.e(ob, function (v, k) {
					sock.on(k, v)
				})
			}
			k.test = 1
			K.l = function (t) {
				this.em('l', t)
			}
			k.on('res', function (d) {
				_r = res = d
			})
			k.on('alert', alert)
			k.on('l', $l);
			k.on('log', $l)
			k.on('dir', function (d) {
				$l('SERVER: %j', d)
			})
			k.on('pop', $.pop)
			k.on('a', function (a) {
				alert(a)
			})
			k.on('d', function (d) {
				$l('SERVER: %j', d)
			})
			k.on('dpop', function (d, n) {
				dud(d, n)
			})
			k.on('dudPop', function (d, n) {
				dud(d, n)
			})
			k.on('notice', function (d) {
				$l('SERVER NOTICE: %s', d);
			})
			k.on('p', function (e) {
				$.pop(e)
			})
			k.on('IM', function (msgOb) {
				var iMsg = Y.IMS[msgOb.from]
				if (iMsg) {
					iMsg.A($.h4(msgOb.message))
				}
				else {
					$.iMsg(msgOb)
				}
			})
			k.IM = function (toWho, ms) {
				$l('toWho: ' + toWho + ', ms: ' + ms)
				k.em('IM', {m: ms, t: toWho, f: _username})
			}
			k.on('popbox', function (o) {
				$.pop(o);
				$('popbox').m()
			})
			k.on('v', function (d) {
				VAR = d
			})
			k.on('newImgAck', function (d) {
				$.c().fit(d.u)
			})
			k.on('im', function (i) {
				$.c().fit(i)
			})
			k.emP = k.sop = function (m, u) {
				k.em('p', m, u)
			}
			k.emEm = function (a, b) {
				k.em('em', a, b)
			} //connect to the k //..need to change this on the deployment server!!!
		}
		
		function probUnused() {
			cjs.makeManifest = cjs.makeMan = function (a) {
				alert('cjs.makeMan')
				return cjs.manifest.apply(null, _.m(a.images, function (i) {
							return Graphics.fromSource(i)
						})
				)
			}
		}
		
		/*
		 h.col = h.fs = function () {
		 this.graphics.fs.apply(
		 this.graphics, arguments)
		 return this
		 }
		 h.sC = function () {
		 this.graphics.sC.apply(this.graphics, arguments)
		 return this
		 }
		 h.C = h.s = function (a, b, c, d, e, f) {
		 var h = this, gx = h.graphics
		 if (N(a)) {
		 gx.s((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
		 }
		 else if (S(a)) {
		
		 gx.s(oO('c', a))
		
		
		 }
		
		 else {
		 gx.s(a, b, c, d, e)
		 }
		 return h
		 }
		 h.c = h.f = function (a, b, c, d, e) {
		 var h = this, gx = h.graphics
		
		 if (N(a)) {
		
		
		 gx.f((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
		 }
		
		 else if (S(a)) {
		
		 gx.f(oO('c', a))
		
		 }
		
		 else {
		 gx.f(a, b, c, d, e)
		 }
		
		 return h
		 }*/
		function temp() {
			TWEEN1 = function (a) {
				z()
				st = $St(800, 500)
				st.mug(function (bm) {
					i = cjs.Tw.g(bm, {loop: true})
					i.to({x: 400}, 1000, cjs.Ea.getPowInOut(4))
							.to({alpha: 0, y: 175}, 500, cjs.Ea.getPowInOut(2))
							.to({alpha: 0, y: 225}, 100)
							.to({alpha: 1, y: 200}, 500, cjs.Ea.getPowInOut(2))
							.to({x: 100}, 800, cjs.Ea.getPowInOut(2))
				})
			}
		}
		
		$clr = Y.clr = function () {
			z();
			Y.nav()
		}
		$uPop = Y.uPop = function (i, size) {
			alert('uPop')
			i = (O(i) && F(i.u)) ? i.u() : i
			size = size || 300
			return $.c().WH(size, size).fit(i)
		}
		$dUD = Y.dUD = function (d, n) {
			alert('Y.dUD')
			$.P('getImageById', {data: d}, function (u) {
				upop(u, n)
			})
		} //sk-send du of your (first) can-el
		$dU = Y.dU = function () {
			alert('Y.dU')
			var u
			c = $.c().fit('me')
			u = c.toDataURL()
			k.emit('du', u);
			return u
		}
		$IMS = Y.IMS = {}
		$chan = Y.chan = function (chan, fn) {
			alert('Y.chan')
			chan = io.connect('http://localhost/' + chan)
			if (fn) {
				chan.on('connect', fn)
			}
			return chan
		}
		$popUser = Y.popUser = Y.uPop = function (un) {
			if (un) {
				$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
					$.w($.d().A($.br(), $.hr(),
							$.h3('User: ' + un), $.br(),
							$.c(300).fit(mug),
							d = $.d(),
							msg = $.ta().C('w', 'z'),
							$.btMail(msg, un),
							$.btCh(un, msg),
							$.bt('fullPf', function () {
								Y.loc('/wap/profiles/' + un)
							})))
					$.sts(un, d)
					$.pf(un, d)
				})
			}
			else {
				$('.pop').$(function () {
					k.em('pop', {t: $('.pt').v, b: $('.pb').v})
				})
			}
		}
		$.dCt = $.ctD = function () {
			var g = G(arguments), //makes auto top-spacing (for navbar not to block)
					d = $.dK('container')
			if (!g.n) {
				d.A($.br(4))
			}
			_.e(g, function (v) {
				d.A(v)
			})
			return d
		}
		$.userCard = function () {
			alert('$.userCard')
			z()
			return $.R(
					$.Cl(2).K('text-center').A($.i('me').WH(70, 70), $.h5('hi')),
					$.Cl(3).A($.h4('pics'), $.h5('place to upload'))).A()
		}
		$.iD = $.imgDiv = function (st) {
			d = $.d('y', '+')
			$.eGj('img', function (i) {
				d.A($.c(100, 100).fit(i.d)
						.$(function () {
							st.bm(i.d, function (bm) {
								bm.sXY(.4).dg()
							})
						}))
			})
		}
		$.msg = $.messageDiv = function (t) {
			alert('$.msgDiv')
			return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
					.fS(20).T(t || 'msgText')
		}
		$.floatIp = function (t, fn) {
			alert('$.floatIp')
			var g = G(arguments), f
			f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
					.A(
					$.sm(t), $.ip())
			if (F(fn)) {
				f.sm(fn)
			}
			return f
		}
		$.ipB = $.inputBox = function (ob) {
			alert('$.ipB')
			ob = ob || {}
			var d, ip, fn = ob.func, url = ob.url || '/',
					tt = ob.boxTitle,
					inputType = ob.inputType || 'text',
					defaults = ob.defaults || {},
					t = ob.btT || 'submit', taI
			d = $.d().WH('auto').pad(10)
			if (tt) {
				d.A($.h1(tt))
			}
			if (inputType == 'text') {
				d.A(ip = $.ip().K('form-control')).A(
						$.bt(t, function () {
							$.post(url, _.df(dataValue(ip), defaults), fn)
						})
				)
			}
			if (inputType == 'textArea') {
				d.A(taI = $.ta().K('form-control'), $.bt(t, function () {
					$.post(url, _.df(dataValue(theTextAreaInput), defaults), fn)
				}))
			}
			if (inputType == 'textAndTextArea') {
				d.A(
						ip = $.ip().K('form-control'),
						taI = $.ta().K('form-control'),
						$.bt(t, function () {
							$.post(url, _.df(dataValue(ip, taI), defaults), fn)
						}))
			}
			return d
		} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
		$.chBt = function (un, ms) {
			return $.bt('chat',
					function () {
						$l('mse: ' + ms.V() + ' toWho: ' + un + ', from: ' + _username)
						k.em('IM', mo = {message: ms.V(), toWho: un, from: _username})
					})
		}
		$.iMsg = function (msgOb) {
			//this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)
//k.on('say to someone', function(id, msg){k.broadcast.to(id).emit('my message', msg)})
			var ip = $.ip(), iMsg = $.w()(
					$.h3('instant message from ' + msgOb.from),
					$.h4('message: ' + msgOb.message), ip,
					$.bt('reply', function () {
						k.emit('IM', {
							message: ip.V(), toWho: msgOb.from, from: _username
						})
					}))
			Y.IMS[msgOb.from] = iMsg
			return iMsg
		}
		editD()
		function editD() {
			TXEDITDIV = function () {
				z()
				$.dE()
				$.editDiv()
				$.editDiv()
				$.editDiv()
				//$.editDiv2().A()
			}
			$.dE2 = $.editDiv2 = function (a) {
				alert('$.editDiv2')
				var d = $.editDiv(a), range = $.range()
				range.md(function (e) {
					e.stopPropagation()
				})
				range.on('input', function () {
					d.fi($('span')).fS($(this).v())
					d.fi($('textarea')).fS($(this).v())
				})
				d.pp(range)
				return d
			}
		}
	}
	
	function ditto() {
		$.delBt = function (url, data) {
			var bt
			bt = $.bt('delete', function (el) {
				$.ajax({
					type: 'DELETE',
					data: data,
					url: url,
					success: function () {
						$(el.target).closest('div').rm()
					}
				})
			})
			return bt
		}
		$.fn.selPic = function () {
			$('.pic').e(function () {
				$(this).C('b')
			})
			this.parent().C('y')
		}
		ct.h = function (x, y, c, C, l, opt) {
			var ct = this,
					h = cjs.h(x, y, c, C, l, opt).a2(ct)
			return h.drag()
		}
		$Bm = function (i) {
			var bm
			if (O(i)) {
				if ($.iI(i)) {
					i = $(i)[0]
					_i = i
					bm = new cjs.Bitmap(i)
					return bm
				}
				bm = $Bm(i.i)
				if (i.al) {
					bm.al(i.al)
				}
				if (i.fl) {
					bm.fl(i.fl)
				}
				if (i.aF2) {
					bm.aF2(i.aF2)
				}
				return bm
			}
		}
		$St = function (a, b, c, d, e) {
			var g = G(arguments), st
			st = A(g[0]) ? new cjs.Stage(g[0][0]) :
					O(g[0]) ? new cjs.Stage($(g[0])[0]) :
							new cjs.Stage($.c(g[0], g[1], g[2], g[3], g[4]) [0])
			st.c = st.can = $(st.canvas)
			if (g.p) {
				st.can.dg()
			}
			if (!g.n) {
				st.can.A()
			}
			return st.t()
		}
		h.ss = h.l = function (a) {
			var h = this, gx = h.graphics, g, o
			if (S(a)) {
				this.C(a)
				return this.ss.apply(this, _.rest(arguments))
			}
			g = G(arguments)
			o = {
				l: g[0],
				caps: g[1],
				jts: g[2],
				mit: g[3],
				ignSc: false
			}
			o.l = N(o.l) ? o.l : 4
			if (o.caps == 'r') {
				o.caps = 'round'
			}
			if (o.caps == 's') {
				o.caps = 'square'
			}
			if (o.caps == 'b') {
				o.caps = 'butt'
			}
			if (o.mit == 'r') {
				o.mit = 'round'
			}
			if (o.mit == 'm') {
				o.mit = 'miter'
			}
			if (o.mit == 'b') {
				o.mit = 'bevel'
			}
			o.jts = o.jts || 0
			if (U(o.mit)) {
				o.mit = 100
			}
			if (g.n) {
				o.ignSc = true
			}
			gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
			return h
		}
		ct.cir = function (c, r, x, y) {
			var ct = this, cir
			if (!S(c)) {
				y = x;
				x = r;
				r = c;
				c = 'y'
			}
			y = N(y, 0)
			x = N(x, 0)
			r = N(r, 50)
			cir = $h().c(c).dc(x, y, r)
			ct.A(cir)
			return cir
		}
		q = cjs.LoadQueue.prototype
		q.fileload = function (func) {
			this.addEventListener("fileload", func)
			return this
		}
		q.complete = function (func) {
			this.addEventListener("complete", func)
			return this
		}
		q.manifest = function (manifest) {
			this.loadManifest(manifest)
			return this
		}
		q.mf = function () {
			this.loadManifest(cjs.mf.apply(null, arguments))
			return this
		}
		q.bm = function (img) {
			img = this.getResult(img)
			return $Bm(img)
		}
		cjs.handleFileLoad = function (e) {
			alert('cjs.handleFileLoad')
			if (e.item.type == "image") {
				images[e.item.id] = e.result
			}
		}
		cjs.mf = function (a) {
			var g = G(arguments), mf = []
			_.e(g, function (v) {
				mf.push({src: _.src(v), id: v})
			})
			return mf
		}//used
		Q = function (imgs, func) {
			var q = cjs.lq()
			mf = []
			_.e(imgs, function (v) {
				mf.push({
					src: _.src(v),
					id: v
				})
			})
			q.manifest(mf)
			q.complete(function () {
				func(q)
			})
		}
		$.dragFrame = function (ob) {
			var outerDiv = $.d('r').drag().pad(20).A()
			ob = ob || $.d('y', 50, 50).mar(20)
			ob.on('mousedown', function (e) {
				e.stopPropagation()
			})
			outerDiv.A(ob)
			return outerDiv
			/*
			
			 $.dragFrame = function (ob) {
			 var oD = $.d('r', '+').pad(10)
			 inD = $.d('y').md(function (e) {e.stopPropagation()})
			 oD.A(inD)
			 return inD.A(ob)
			 }
			
			 */
		}
		$.dragStage = function (x, y) {
			c = $.c('g', 400)
			s = $St(c[0])
			$.dragFrame(c).A()
			return s
		}
		$.wd = $.w = $.win = function (a, size, id) {
			var g = G(arguments),
					t, lBt, mBt, xBt, o, wd, w
			w = wd = $.dA('b', '+').WH('auto', 'auto').al(.9).
					ov('auto').pad(10)
					.bW(4).bS('dashed')
					.dg()
			wd.A(
					mBt = $.btR('>', function () {
						w.WH(700);
						lBt.sh();
						mBt.hd();
					}),
					lBt = $.btR('<', function () {
						w.WH('auto');
						mBt.sh();
						lBt.hd()
					}).hd(),
					xBt = $.btL('X', function () {
						w.rm()
					})
			)
			o = g.N_ ? {size: g.f} : g.O_ ? {ch: g.f} : {t: g.f, size: g.s, id: g.t}
			if (o.ch) {
				w.A(o.ch)
			}
			if (o.t) {
				w.tt(o.t)
			}
			if (o.id) {
				w.id(o.id)
			}
			return wd
		}
		k = io.connect();
		k.em = k.emit
		Y = function self(page) {
			self.render(page)
			return self
		}
		$ren = Y.render = function (page) {
			$l('in render')
			if (Y[page]) {
				$l('found page: ' + page)
				return Y[page]() || true
			}
		}
		$run = Y.run = function (app) {
			$l('Y.run')
			app = app.toUpperCase()
			if (app = Y[app] || window[app]) {
				app();
				return true
			}
		}
		$to = Y.to = Y.load = function (a) {
			alert('y.to y.load')
			window.location = '/wap/' + a
		}
		$GuestPage = Y.GuestPage = function () {
			z('r')
			ct = $.dC()
					.dg().C('g').al(.9).top(100).left(100)
			jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
			jb.A(
					$.btL('log in', function () {
						f = $.f().C('green').pad(4)
						f.A(
								$.fG().A($.lb('username: ', 'username'),
										$.ip('username')),
								$.fG().A($.lb('password: ', 'password'),
										$.pw('password')),
								$.sm('log in'))
						f.submit(function (e) {
							e.preventDefault()
							fData = f.serializeJSON()
							$.post('/login', fData, function (un) {
								u = un
								$l('check u!')
								if (un === 'guest') {
									$('.modal').modal('toggle');
									$.pop('try again.. idiot')
								}
								else {
									Y('HomePage');
									$.pop('welcome ' + un + '!')
								}
							})
						})
						$.pop(f).dg()
					}).C('z', 'w'), $.sp(' - '),
					$.btL('sign up', function () {
						usernameInput = $.dK('form-group').fS(20).n('username').A($.lb('username: ', 'username'), $.ip().K('form-control').id('uname'))
						passwordInput = $.dK('form-group').A($.lb('password: ', 'password'), $.pw().id('password')).fS(20).n('password')
						submit = $.bt('sign up').ty('submit').fS(16)
						f = $.f().C('o').pad(4).A(usernameInput, passwordInput, submit).submit(function (e) {
							e.preventDefault()
							$.P('user', {
										username: username = usernameInput.find('input').val(),
										password: password = passwordInput.find('input').val()
									},
									function (username) {
										if (username === 'guest') {
											$('.modal').modal('toggle');
											$.pop('try again.. idiot')
										}
										else {
											Y('HomePage');
											$.pop('welcome ' + username + '!')
										}
									})
						})
						$.pop(f).dg()
					}).C('w', 'z'), $.sp(' - '),
					$.btL('guest', function () {
					}).C('a', 'y')
			)
			ct.A(
					$.dH().h1('jy presents..'),
					jb
			)
			function verify() {
				return {
					username: username.find('input').val(),
					password: password.find('input').val()
				}
			}
		}
		$HomePage = Y.HomePage = function () {
			z()
			Y.nav()
			Y.run(wappyApp)
			//update username on screen
			$.Gj('loggedIn', function (uN) {
				$('#uname').text(_username = $l(uN))
			})
		}
		$logOut = Y.logOut = function () {
			$.Gj('logOut', function () {
				Y('GuestPage')
			})
		}
		$$nav = Y.nav = function () {
			navbarCollapse = $.nbC().A($.n(
							// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
							$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
							$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
							$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
							$.dd('talk', ['chat', 'universe', 'post']),
							$.dd('social', ['users', 'profiles', 'posts'])
							
							
							//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
					),
					$.nR(
							$.dd('account', ['status', 'profile', 'messages']),
							$.liA('logged: ' + _username),
							$.liA('logout', Y.logOut)
					)
			)
			$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
		}//=Y.n
		$.fn.dots = function () {
			var el = this
			el.copy()
			el.DOTS = []
			el.dats = []
			el.$(function (x, y) {
				x = parseInt(x)
				y = parseInt(y)
				el.cir(x, y)
				el.DOTS.push([x, y])
				el.dats.push(x);
				el.dats.push(y) //vestige from phaser physics?
				el.line(el.DOTS)
			})
			el.$$(function (X, Y) {
				var du
				//el.C('X')
				el.off('click')
				el.closePath()  //el.paste() // el.copy()  //el.save()
				el.clear() //du = el.toDataURL()
				el.clip()
				el.paste() //el.fit(du)
			})
			return el
		}
		$.fn.snap = function (fn) {
			$.po('/img', {
				d: this.canvas.toDataURL(),
				dats: this.dats //vestige from phaser physics?
			}, fn)
		}
		$.cut = function (m) {
			z();
			m = m || 'me'
			$('body').A(
					$.bt('save sprite', function () {
						c.snap(CUTOUTS)//; EDIT()
					}), $.br(2),
					$.bt('start cut', function () {
						c.dots()
					}), $.br(2),
					$.bt('restart cut', function () {
						$.cut(m)
					}), $.br(2),
					c = $.c('r', 500, 500).A().fit(m))
		} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
		$.pic = function (pic) {
			return $.i(pic._id + pic.ext).WH(120, 120)
					.$(function () {
						$.cut(pic._id + pic.ext)
					})
		}
		$.picDiv = function (top) {
			$l('in picDiv')
			return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
					.pad(25)
		}
		$mug = function (un, fn) {
			//make default un YOU (_username)
			$.g('/mugByUsername/' + un, function (mug) {
				if (mug) {
					fn(mug)
				}
			})
		}
		cjs.Container.prototype.mug = function () {
			var ct = this, g = G(arguments), o
			o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
			o.sc = N(o.sc) ? o.sc : 1
			o.fn = o.fn || function () {
			}
			$.g('myMug', function (m) {
				if (!m) {
					alert('!mug')
				}
				ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
			})
			return ct
		}
		$.user = function (u) {
			$.wStatus = function (user, fn) {
				$.g('sts1', {u: user},
						function (sts) {
							fn(sts.c)
						})
			} //with first status?
			var userA = $.a('', function () {
				window.location = '/wap/user/' + u.username
			}).K('thumbnail')
			userA.A(
					$.i(u.mug || defaultMug),
					$.h4(u.username),
					$.h5('status: ' + u.status),
					$.bt('X', function () {
					}),
					$.bt('be me', function () {
					})
			)
			return userA
		}
		$.chat = function (n, c, id) {
			var wd
			n = n || 'chatbox' //default chatRm
			if ($CHATS[n]) {
				$l('already in this room');
				return
			} //singleton!
			k.em('jRm', n) //join the room (sign up to receive messages.. and i guess to also send them)
			_.ev(.5, function () {
				k.em('rmUd', n)
			}) //repeatedly request updates for yourself (so you have a users list)
			$.chatEl = function (n, id, c) {
				var wd = $.w('chatroom: ' + n).id(id).css({'min-width': 600, 'min-height': 400}).C(c || $r())
				wd.messages = $.d().id('cbi').C('u').ov('auto')
				wd.input = $.ip().K('form-control')
				wd.usersDiv = $.d().A($.i('me').A())
				wd.mainPanel = $.Cl(8, wd.messages, wd.input,
						$.bt('send', function () {
							k.em('ChatRmMs', {rm: n, ms: wd.input.V(), un: '_username'})
						}),
						$.bt('pop', function () {
							k.emit('p', ip.V(), n)
						}),
						$.bt('pic', function () {
							$.pop('pic select')
						})
				)
				wd.usersPanel = $.Cl(4, $.h3('users:'), wd.usersDiv)
				wd.A($.R().A(wd.mainPanel, wd.usersPanel))
				return wd
			}
			wd = $.chatEl(n, id || 'cbo', c || 'o')
			$CHATS[n] = {
				wd: wd,
				updateUsersDiv: function (users) {
					wd.usersDiv.E()
					_.e(users, function (un) {
						wd.usersDiv.A($.h5(un).$(function () {
							$.popUser(un)
						}))
					})
				},
				toggle: function () {
					this.wd.toggle();
					return wd
				},
				write: function (m) {
					wd.messages.A($.h5(m).col('w'))
				},
				writeBlack: function (m) {
					wd.messages.A($.h5(m).col('x'))
				}
			}
		}
		$.ChatBt = function (n) {
			return $.bt(n, function () {
				$.chat(n)
			}).mar(40)
		}
////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
		$(function () {
			$.Gj('loggedIn', function (un) {
				Y._un = Y._userName = _username = $l(un)
				function isGuest(un) {
					return un == 'guest' || !un
				}
				
				if (isGuest(un)) {
					Y('GuestPage')
				} else {
					logInUser(un)
				}
				function logInUser(un) {
					k.em('id', un);
					k.em('jRm', _username)
					$.g('myMug', function (mug) {
						Y._userMug = _userMug = mug
						$l('going to home page..')
						Y('HomePage')
					})
				}
			})
		})
////////////////////////
////////////////////////
////////////////////////
////////////////////////
////////////////////////
		$.pop = function (message, o) {
			if (S(o)) {
				return $.pop(o, {title: message})
			}
			o = O(o) ? o : {}
			message = message || 'pop pop'
			mB = $.modalBody().A($.h2(message))
			m = $.modalFade().A($.modalDialog().A($.modalContent().A(mB)))
			if (!o.hd) {
				m.modal()
			}
			if (o.tt) {
				mB.pp($.h1(o.titC).col(o.titC || 'z'),
						$.hr().C(o.headerC || 'z').css('height', 2))
			}
			if (o.bt) {
				mB.A($.bt(o.bt))
			}
			if (o.dg) {
				m.dg()
			}
			if (o.al) {
				m.al(o.al)
			}
			//text color of the MESSAGE
			if (o.col) {
				m.col(o.col)
			}
			//color of background of modal itself
			if (o.C) {
				//flash like crazy
				if (o.C == '*') {
					_.ev(.1, function () {
						mB.C($r())
					})
				}
				else {
					mB.C(o.C)
				}
			}
			//this color takes over the whole screen!
			//this is the background color of the hiding body
			if (o.c) {
				m.C(o.c)
			}
			return m
		}
		function later() {
			function sockAlpha() {
				k.o = function (ob) {
					var sock = this
					_.e(ob, function (v, k) {
						sock.on(k, v)
					})
				}
				k.test = 1
				K.l = function (t) {
					this.em('l', t)
				}
				k.on('res', function (d) {
					_r = res = d
				})
				k.on('alert', alert)
				k.on('l', $l);
				k.on('log', $l)
				k.on('dir', function (d) {
					$l('SERVER: %j', d)
				})
				k.on('pop', $.pop)
				k.on('a', function (a) {
					alert(a)
				})
				k.on('d', function (d) {
					$l('SERVER: %j', d)
				})
				k.on('dpop', function (d, n) {
					dud(d, n)
				})
				k.on('dudPop', function (d, n) {
					dud(d, n)
				})
				k.on('notice', function (d) {
					$l('SERVER NOTICE: %s', d);
				})
				k.on('p', function (e) {
					$.pop(e)
				})
				k.on('IM', function (msgOb) {
					var iMsg = Y.IMS[msgOb.from]
					if (iMsg) {
						iMsg.A($.h4(msgOb.message))
					}
					else {
						$.iMsg(msgOb)
					}
				})
				k.IM = function (toWho, ms) {
					$l('toWho: ' + toWho + ', ms: ' + ms)
					k.em('IM', {m: ms, t: toWho, f: _username})
				}
				k.on('popbox', function (o) {
					$.pop(o);
					$('popbox').m()
				})
				k.on('v', function (d) {
					VAR = d
				})
				k.on('newImgAck', function (d) {
					$.c().fit(d.u)
				})
				k.on('im', function (i) {
					$.c().fit(i)
				})
				k.emP = k.sop = function (m, u) {
					k.em('p', m, u)
				}
				k.emEm = function (a, b) {
					k.em('em', a, b)
				} //connect to the k //..need to change this on the deployment server!!!
			}
			
			function probUnused() {
				cjs.makeManifest = cjs.makeMan = function (a) {
					alert('cjs.makeMan')
					return cjs.manifest.apply(null, _.m(a.images, function (i) {
								return Graphics.fromSource(i)
							})
					)
				}
			}
			
			/*
			 h.col = h.fs = function () {
			 this.graphics.fs.apply(
			 this.graphics, arguments)
			 return this
			 }
			 h.sC = function () {
			 this.graphics.sC.apply(this.graphics, arguments)
			 return this
			 }
			 h.C = h.s = function (a, b, c, d, e, f) {
			 var h = this, gx = h.graphics
			 if (N(a)) {
			 gx.s((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
			 }
			 else if (S(a)) {
			
			 gx.s(oO('c', a))
			
			
			 }
			
			 else {
			 gx.s(a, b, c, d, e)
			 }
			 return h
			 }
			 h.c = h.f = function (a, b, c, d, e) {
			 var h = this, gx = h.graphics
			
			 if (N(a)) {
			
			
			 gx.f((a > 0 && a < 1) ? cjs.rgb(0, 0, 0, a) : cjs.rgb(a, b, c, d))
			 }
			
			 else if (S(a)) {
			
			 gx.f(oO('c', a))
			
			 }
			
			 else {
			 gx.f(a, b, c, d, e)
			 }
			
			 return h
			 }*/
			function temp() {
				TWEEN1 = function (a) {
					z()
					st = $St(800, 500)
					st.mug(function (bm) {
						i = cjs.Tw.g(bm, {loop: true})
						i.to({x: 400}, 1000, cjs.Ea.getPowInOut(4))
								.to({alpha: 0, y: 175}, 500, cjs.Ea.getPowInOut(2))
								.to({alpha: 0, y: 225}, 100)
								.to({alpha: 1, y: 200}, 500, cjs.Ea.getPowInOut(2))
								.to({x: 100}, 800, cjs.Ea.getPowInOut(2))
					})
				}
			}
			
			$clr = Y.clr = function () {
				z();
				Y.nav()
			}
			$uPop = Y.uPop = function (i, size) {
				alert('uPop')
				i = (O(i) && F(i.u)) ? i.u() : i
				size = size || 300
				return $.c().WH(size, size).fit(i)
			}
			$dUD = Y.dUD = function (d, n) {
				alert('Y.dUD')
				$.P('getImageById', {data: d}, function (u) {
					upop(u, n)
				})
			} //sk-send du of your (first) can-el
			$dU = Y.dU = function () {
				alert('Y.dU')
				var u
				c = $.c().fit('me')
				u = c.toDataURL()
				k.emit('du', u);
				return u
			}
			$IMS = Y.IMS = {}
			$chan = Y.chan = function (chan, fn) {
				alert('Y.chan')
				chan = io.connect('http://localhost/' + chan)
				if (fn) {
					chan.on('connect', fn)
				}
				return chan
			}
			$popUser = Y.popUser = Y.uPop = function (un) {
				if (un) {
					$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
						$.w($.d().A($.br(), $.hr(),
								$.h3('User: ' + un), $.br(),
								$.c(300).fit(mug),
								d = $.d(),
								msg = $.ta().C('w', 'z'),
								$.btMail(msg, un),
								$.btCh(un, msg),
								$.bt('fullPf', function () {
									Y.loc('/wap/profiles/' + un)
								})))
						$.sts(un, d)
						$.pf(un, d)
					})
				}
				else {
					$('.pop').$(function () {
						k.em('pop', {t: $('.pt').v, b: $('.pb').v})
					})
				}
			}
			$.dCt = $.ctD = function () {
				var g = G(arguments), //makes auto top-spacing (for navbar not to block)
						d = $.dK('container')
				if (!g.n) {
					d.A($.br(4))
				}
				_.e(g, function (v) {
					d.A(v)
				})
				return d
			}
			$.userCard = function () {
				alert('$.userCard')
				z()
				return $.R(
						$.Cl(2).K('text-center').A($.i('me').WH(70, 70), $.h5('hi')),
						$.Cl(3).A($.h4('pics'), $.h5('place to upload'))).A()
			}
			$.iD = $.imgDiv = function (st) {
				alert('$.imgDiv')
				d = $.d('y', '+')
				$.eGj('img', function (i) {
					d.A($.c(100, 100).fit(i.d)
							.$(function () {
								st.bm(i.d, function (bm) {
									bm.sXY(.4).dg()
								})
							}))
				})
			}
			$.msg = $.messageDiv = function (t) {
				alert('$.msgDiv')
				return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
						.fS(20).T(t || 'msgText')
			}
			$.floatIp = function (t, fn) {
				alert('$.floatIp')
				var g = G(arguments), f
				f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
						.A(
						$.sm(t), $.ip())
				if (F(fn)) {
					f.sm(fn)
				}
				return f
			}
			$.ipB = $.inputBox = function (ob) {
				alert('$.ipB')
				ob = ob || {}
				var d, ip, fn = ob.func, url = ob.url || '/',
						tt = ob.boxTitle,
						inputType = ob.inputType || 'text',
						defaults = ob.defaults || {},
						t = ob.btT || 'submit', taI
				d = $.d().WH('auto').pad(10)
				if (tt) {
					d.A($.h1(tt))
				}
				if (inputType == 'text') {
					d.A(ip = $.ip().K('form-control')).A(
							$.bt(t, function () {
								$.post(url, _.df(dataValue(ip), defaults), fn)
							})
					)
				}
				if (inputType == 'textArea') {
					d.A(taI = $.ta().K('form-control'), $.bt(t, function () {
						$.post(url, _.df(dataValue(theTextAreaInput), defaults), fn)
					}))
				}
				if (inputType == 'textAndTextArea') {
					d.A(
							ip = $.ip().K('form-control'),
							taI = $.ta().K('form-control'),
							$.bt(t, function () {
								$.post(url, _.df(dataValue(ip, taI), defaults), fn)
							}))
				}
				return d
			} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
			$.chBt = function (un, ms) {
				return $.bt('chat',
						function () {
							$l('mse: ' + ms.V() + ' toWho: ' + un + ', from: ' + _username)
							k.em('IM', mo = {message: ms.V(), toWho: un, from: _username})
						})
			}
			$.iMsg = function (msgOb) {
				//this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)
//k.on('say to someone', function(id, msg){k.broadcast.to(id).emit('my message', msg)})
				var ip = $.ip(), iMsg = $.w()(
						$.h3('instant message from ' + msgOb.from),
						$.h4('message: ' + msgOb.message), ip,
						$.bt('reply', function () {
							k.emit('IM', {
								message: ip.V(), toWho: msgOb.from, from: _username
							})
						}))
				Y.IMS[msgOb.from] = iMsg
				return iMsg
			}
			editD()
			function editD() {
				TXEDITDIV = function () {
					z()
					$.dE()
					$.editDiv()
					$.editDiv()
					$.editDiv()
					//$.editDiv2().A()
				}
				$.dE2 = $.editDiv2 = function (a) {
					alert('$.editDiv2')
					var d = $.editDiv(a), range = $.range()
					range.md(function (e) {
						e.stopPropagation()
					})
					range.on('input', function () {
						d.fi($('span')).fS($(this).v())
						d.fi($('textarea')).fS($(this).v())
					})
					d.pp(range)
					return d
				}
			}
		}
	}
}
function images() {
	enterSite = function () {
		$mug(function (mug) {
			Y._userMug = _userMug = mug
		})
		socks()
		home()
	}
	$mug = function (fn) {
		$.get('/getMug', fn)
	}
	getMug = function () {
		$mug(function (mug) {
			Y._userMug = _userMug = mug
		})
	}
	$picByUser = function (user, fn) {
		$m.pic.find({u: user}, fn)
	}
	$cutout = function (q) {
		return {
			un: q.un,
			d: q.body.d,
			dats: q.body.dats,
			data: q.body.d,
			physicsData: q.body.dats
		}
	}
}
function auth() {
	notLoggedIn = function (un) {
		return un == 'guest' || !un
	}
	isLoggedIn = function (q) {
		return q.ss.un ? true : false
	}
	isAuthed = function (q) {
		return q.loggedIn
	}
	unAuthed = function (q) {
		return !isAuthed(q)
	}
	loginSuccess = function (q, p, user) {
		q.user = p.lc.user = user
		q.un = p.lc.un = user.un
		q.uId = p.lc.uId = user._id
	}
	auth = function (q, p, n, successFn) {
		unAuthed(q) ? goToGuestPage(p) : successFn(q, p, n)
	}
}
function logOut() {
	Y.logOut = function () {
		$.getJSON('/logOut', function () {
			Y.render('GuestPage')
		})
	} //logOut =
	$logOut = function (fn) {
		$a.G('/logOut', function (q, p, n) {
			$l('logging out')
			fn(q, p, n)
		})
	}
}
function handyForm() {
	_form = function () {
		var f = $.f().C('g').pad(4).A(
				bs.fGpD().A(
						$.lb('un: ', 'un'),
						$.ip('un')),
				bs.fGpD().A(
						$.lb('pw: ', 'pw'),
						$.ip('pw')),
				$.sbm('log in')
		)
		return f
	}
}
function submitFn() {
	function sbm(e) {
		$.pD(e)
		var fDat = f.serJ() // $l(formData)
		$.po('/login', formData, verifyLogin)
	}
	
	function sbm(e) {
		e.preventDefault()
		un = unInput.fi('input').v()
		pw = pwInput.fi('input').v()
		$.po('/user', {
			un: un,
			pw: pw
		}, login)
	}
}
function verifyLogin(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle')
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}
$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
 