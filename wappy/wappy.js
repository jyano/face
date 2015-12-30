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
function messages() {
	MESSAGES = function () {
		$.fm()  //is TABS never set? -- its the content holder for the panes!!
		tab1 = ['received', function () {
			TABS.E($.h1('Messages'), $.br())
			$.eG('gMsg', function (m) {
				TABS.A(
						$.R().A(
								//c1 = function(m){return cx().bc('-').Z(1).mug(m)}
								$.Cl(2, $.c('X', 100, 100).mug(m.fr)),
								$.Cl(10, $.bt(m.fr, function () {
											from = m.fr;
											tab3.load()
										}),
										$.h4(dtt(m.dt)).K('pull-right'),
										$.h5(m.m))
						),
						$.hr()
				)
			})
		}, '*']
		tab2 = ['sent', function () {
			TABS.E(
					$.h1('Messages'),
					$.br())
			$.eG('/MsgS', function (m) {
				mm = m;
				var ms = $('<textarea>'),
						c = $.c('X', 100, 100)
				$.P('mug', {u: m.to}, function (mug) {
					c.fit(mug)
				})
				TABS.A($.R().A($.Cl(2, c),
						$.Cl(10,
								$.bt('to: ' + m.to, function () {
									from = m.to;
									tab3.load()
								}),
								$.h4(dt(m.dt).dt()).K('pull-right'),
								$.h5(m.m)
						)), $.hr())
			})
		}]
		tab3 = $.tab('convo', function () {
			var ms = $.ip()
			u = window['from'] || 'b'
			TABS.E($.h1('convo with ' + u), $.h1('Messages'), $.br())
			$.eG('gMsgW', {u: u}, function (m) {
				var c = $.c('X', 100, 100)
				$.P('mug', {u: m.fr}, function (m) {
					c.fit(m)
				})
				TABS.A($.R().A(
								$.Cl(2, c),
								$.Cl(10,
										$.h6('from: ' + m.fr),
										$.h4(dt(m.dt).dt()).K('pull-right'),
										$.h5(m.m))),
						$.hr()
				)
			})
			TABS.A(ms, $.bt('new message', function () {
				$.P('sMsg', {m: ms.V(), to: from})
			}), $.br(2))
		})
		tab4 = ['requests', function () {
			TABS.E($.h1('Buddy requests'), $.br())
			//buddy requests
			$.eG('gRq', function (msg) {
				TABS.A($.d().A(
						$.h6('from ' + msg.fr + ' on ' + msg.dt),
						$.h5(msg.m),
						$.bt('accept', function () {
							$.P('yRq', {u: msg.fr})
						}),
						$.bt('deny'),
						$.hr()
				))
			})
		}]
		s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
		t.load()
	}
	MESSAGES = function () {
		$.fm()  //is TABS never set? -- its the content holder for the panes!!
		tab1 = ['received', function () {
			TABS.E($.h1('Messages'), $.br())
			$.eG('gMsg', function (m) {
				TABS.A(
						$.R().A(
								//c1 = function(m){return cx().bc('-').Z(1).mug(m)}
								$.Cl(2, $.c('X', 100, 100).mug(m.fr)),
								$.Cl(10, $.bt(m.fr, function () {
											from = m.fr;
											tab3.load()
										}),
										$.h4(dtt(m.dt)).K('pull-right'),
										$.h5(m.m))
						),
						$.hr()
				)
			})
		}, '*']
		tab2 = ['sent', function () {
			TABS.E(
					$.h1('Messages'),
					$.br())
			$.eG('/MsgS', function (m) {
				mm = m;
				var ms = $('<textarea>'),
						c = $.c('X', 100, 100)
				$.P('mug', {u: m.to}, function (mug) {
					c.fit(mug)
				})
				TABS.A($.R().A($.Cl(2, c),
						$.Cl(10,
								$.bt('to: ' + m.to, function () {
									from = m.to;
									tab3.load()
								}),
								$.h4(dt(m.dt).dt()).K('pull-right'),
								$.h5(m.m)
						)), $.hr())
			})
		}]
		tab3 = $.tab('convo', function () {
			var ms = $.ip()
			u = window['from'] || 'b'
			TABS.E($.h1('convo with ' + u), $.h1('Messages'), $.br())
			$.eG('gMsgW', {u: u}, function (m) {
				var c = $.c('X', 100, 100)
				$.P('mug', {u: m.fr}, function (m) {
					c.fit(m)
				})
				TABS.A($.R().A(
								$.Cl(2, c),
								$.Cl(10,
										$.h6('from: ' + m.fr),
										$.h4(dt(m.dt).dt()).K('pull-right'),
										$.h5(m.m))),
						$.hr()
				)
			})
			TABS.A(ms, $.bt('new message', function () {
				$.P('sMsg', {m: ms.V(), to: from})
			}), $.br(2))
		})
		tab4 = ['requests', function () {
			TABS.E($.h1('Buddy requests'), $.br())
			//buddy requests
			$.eG('gRq', function (msg) {
				TABS.A($.d().A(
						$.h6('from ' + msg.fr + ' on ' + msg.dt),
						$.h5(msg.m),
						$.bt('accept', function () {
							$.P('yRq', {u: msg.fr})
						}),
						$.bt('deny'),
						$.hr()
				))
			})
		}]
		s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
		t.load()
	}
	MESSAGES = function () {
		
		//is TABS never set? -- its the content holder for the panes!!
		$.format()
		tab1 = ['received', function () {
			TABS.E($.h1('Messages'), $.br())
			qGE('/gMsg', function (m) {
				TABS.A(
						$.row(
								//c1 = function(m){return cx().bc('-').Z(1).mug(m)}
								$.col(2,
										$.canvas('X', 100, 100).mug(m.fr)
								),
								$.col(10,
										$.button(m.fr,
												function () {
													from = m.fr;
													tab3.load()
												}),
										$.h4(dtt(m.dt)).K('pull-right'),
										$.h5(m.m))
						),
						$.hr()
				)
			})
		},
			'*']
		tab2 = ['sent', function () {
			TABS.E(
					$.h1('Messages'),
					$.br())
			qGE('/MsgS', function (m) {
				mm = m;
				var ms = $('<textarea>'),
						c = $.canvas('X', 100, 100)
				$.post(
						'/mug', {u: m.to},
						function (mug) {
							c.fit(mug)
						}
				)
				TABS.A($.row(
						$.col(2, c),
						$.col(10,
								$.button('to: ' + m.to,
										function () {
											from = m.to;
											tab3.load()
										}
								),
								$.h4(dt(m.dt).dt()).K('pull-right'),
								$.h5(m.m)
						)), $.hr())
			})
		}]
		tab3 = $.tab('convo', function () {
			var ms = $.input()
			u = window['from'] || 'b'
			TABS.E(
					$.h1('convo with ' + u),
					$.h1('Messages'), $.br()
			)
			qGE('/gMsgW', {u: u},
					function (m) {
						var c = $.canvas('X', 100, 100)
						$.post('/mug',
								{u: m.fr},
								function (m) {
									c.fit(m)
								})
						TABS.A($.row(
										$.col(2, c),
										$.col(10,
												$.h6('from: ' + m.fr),
												$.h4(dt(m.dt).dt()).K('pull-right'),
												$.h5(m.m))),
								$.hr()
						)
					})
			TABS.A(ms,
					$.button('new message',
							function () {
								$.post('/sMsg', {m: ms.V(), to: from})
							}),
					$.br(2)
			)
		})
		tab4 = ['requests', function () {
			TABS.E(
					$.h1('Buddy requests'),
					$.br()
			)
			//buddy requests
			qG('/gRq', function (msgs) {
				_.each(msgs, function (msg) {
					TABS(
							$.div()(
									$.h6('from ' + msg.fr + ' on ' + msg.dt),
									$.h5(msg.m),
									$.button('accept',
											function () {
												$.post('/yRq', {u: msg.fr})
											}),
									$.button('deny'),
									$.hr()))
				})
			})
		}]
		s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
		t.load()
	}
///
	$autoDivX = autoX = function () {
		var args = G(arguments),
				theDiv = $div().auto()
		_.each(args, function (arg) {
			theDiv(arg)
		})
		return theDiv
	}
	showTabX = shwX = function (a) {
		qi(a).q.tab('show')
		//return a
	}
	firstChildX = ch$X = function (a) {
		a.ch(0).$()
	}
	TabX = tabX = function (tabText, func) {
		var args = G(arguments),
				tabText = args[0],
				func = args[1],
				theLi = $liA(
						tabText,
						function () {
							showTab(tabText);
							func()
						})
		theLi.load = function () {
			showTab(tabText);
			func()
		}
		if (args.m) {
			theLi.k('active')
		}
		return theLi
	}
	$passwordX = function () {
		return ip().type('password').k('form-control')
	}
	tabsX = function (a) {
		var g = G(arguments),
				a = g[0], d, u
		theDiv = $.div('X').WH('auto').A(
				theUlNav = $.ul().K('nav nav-tabs'),
				TABS = $.span()
		)
		//ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
		if (A(a)) {
			a = $.tab.apply($.tab, a)
		}
		theUlNav(a)
		_.each(g.r, function (a) {
			if (A(a)) {
				a = _a(tab, a)
			}
			;
			theUlNav(a)
		})
		theDiv.load = function () {
			a.children[0].click();
			return theDiv
		}
		return theDiv
	}
	firstChildX = ch$X = function (a) {
		a.ch(0).$()
	}
	MESSAGES = function () {
		
		//is TABS never set? -- its the content holder for the panes!!
		$.format()
		tab1 = ['received', function () {
			TABS.E($.h1('Messages'), $.br())
			qGE('/gMsg', function (m) {
				TABS.A(
						$.row(
								//c1 = function(m){return cx().bc('-').Z(1).mug(m)}
								$.col(2,
										$.canvas('X', 100, 100).mug(m.fr)
								),
								$.col(10,
										$.button(m.fr,
												function () {
													from = m.fr;
													tab3.load()
												}),
										$.h4(dtt(m.dt)).K('pull-right'),
										$.h5(m.m))
						),
						$.hr()
				)
			})
		},
			'*']
		tab2 = ['sent', function () {
			TABS.E(
					$.h1('Messages'),
					$.br())
			qGE('/MsgS', function (m) {
				mm = m;
				var ms = $('<textarea>'),
						c = $.canvas('X', 100, 100)
				$.post(
						'/mug', {u: m.to},
						function (mug) {
							c.fit(mug)
						}
				)
				TABS.A($.row(
						$.col(2, c),
						$.col(10,
								$.button('to: ' + m.to,
										function () {
											from = m.to;
											tab3.load()
										}
								),
								$.h4(dt(m.dt).dt()).K('pull-right'),
								$.h5(m.m)
						)), $.hr())
			})
		}]
		tab3 = $.tab('convo', function () {
			var ms = $.input()
			u = window['from'] || 'b'
			TABS.E(
					$.h1('convo with ' + u),
					$.h1('Messages'), $.br()
			)
			qGE('/gMsgW', {u: u},
					function (m) {
						var c = $.canvas('X', 100, 100)
						$.post('/mug',
								{u: m.fr},
								function (m) {
									c.fit(m)
								})
						TABS.A($.row(
										$.col(2, c),
										$.col(10,
												$.h6('from: ' + m.fr),
												$.h4(dt(m.dt).dt()).K('pull-right'),
												$.h5(m.m))),
								$.hr()
						)
					})
			TABS.A(ms,
					$.button('new message',
							function () {
								$.post('/sMsg', {m: ms.V(), to: from})
							}),
					$.br(2)
			)
		})
		tab4 = ['requests', function () {
			TABS.E(
					$.h1('Buddy requests'),
					$.br()
			)
			//buddy requests
			qG('/gRq', function (msgs) {
				_.each(msgs, function (msg) {
					TABS(
							$.div()(
									$.h6('from ' + msg.fr + ' on ' + msg.dt),
									$.h5(msg.m),
									$.button('accept',
											function () {
												$.post('/yRq', {u: msg.fr})
											}),
									$.button('deny'),
									$.hr()))
				})
			})
		}]
		s2.A(t = $.tabs(tab1, tab2, tab3, tab4))
		t.load()
	}
///
	$autoDivX = autoX = function () {
		var args = G(arguments),
				theDiv = $div().auto()
		_.each(args, function (arg) {
			theDiv(arg)
		})
		return theDiv
	}
	$passwordX = function () {
		return ip().type('password').k('form-control')
	}
	$mailButton = btMail = function (message, user) {
		return $.button('mail',
				function () {
					$.post('/sMsg', {m: message.V(), to: user.u}
					)
				})
	}
}
function posts() {
	POSTS = function () {
		$.fm()
		s1.A(
				dd = $.inputBox({
					boxTitle: 'new post',
					url: '/pst',
					btT: 'post',
					func: function () {
						Y.run('home')
					},
					inputType: 'textAndTextArea'
				}),
				$.h2('attach:'),
				$.bt('pic', function () {
					m = $.pop(ps = $.d().A($.h3('pic select')))
					$.getJSON('/img', function (pics) {
						_.e(pics, function (p) {
							ps.A($.i(p.d).WH(40, 40).$(function () {
								attached.E($.i(p.d).WH(20, 20))
								m.modal('hide')
							}))
						})
					})
				}),
				attached = $.d().A()
		)
		tab2 = [
			'buds',
			function () {
				TABS.E($.h1('bud posts'))
			}
		]
		tab1 = ['all',
			function () {
				TABS.E($.h1('public posts'))
				$.eG('/psts',
						function (i) {
							$.blp(i, TABS, '-')
						})
			}
		]
		tab3 = $.tab('user', function () {
			u = $w['from'] || 'a'
			s1.E(
					$.sp('topics: '))
			TABS.E(
					$.h1('user ' + u + ' blog'))
			$.eG('/pstu', {u: u}, function (i) {
				$.blp(i, TABS, '+')
			})
		})
		tab4 = $.tab('topic', function () {
			TOPIC = $w['topic'] || 'fantasy'
			TABS.E(h1('posts on ' + TOPIC + ' topic'))
			$.eG('/pstt', {t: TOPIC}, function (i) {
				blp(i, TABS, '/')
			})
		})
		tab5 = ['yours',
			function () {
				TABS.E($.h1('your posts'))
				$.eG('/pst', function (i) {
					$.blp(i, TABS, '+')
				})
			}]
		s2.A(
				t = $.tabs(tab1, tab2, tab3, tab4, tab5))
		t.load()
	}
	POSTS = function () {
		$.format()
		s1.A(
				dd = $.inputBox({
					boxTitle: 'new post',
					url: '/pst',
					buttonText: 'post',
					func: home,
					inputType: 'textAndTextArea'
				}),
				$.h2('attach:'),
				$.button('pic', function () {
					m = $.pop(ps = $.div().A($.h3('pic select')))
					$.getJSON('/img', function (pics) {
						_.each(pics, function (p) {
							ps.A($.img(p.d).W(40).H(40).click(function () {
								attached.E($.img(p.d).W(20).H(20))
								m.modal('hide')
							}))
						})
					})
				}),
				attached = $.div().A()
		)
		tab2 = [
			'buds',
			function () {
				TABS.E($.h1('bud posts'))
			}
		]
		tab1 = ['all',
			function () {
				TABS.E($.h1('public posts'))
				qGE('/psts',
						function (i) {
							blp(i, TABS, '-')
						})
			}
		]
		tab3 = $.tab('user', function () {
			u = $w['from'] || 'a'
			s1.E(sp('topics: '))
			TABS.E(h1('user ' + u + ' blog'))
			qG('/pstu', {u: u},
					function (i) { //ii=i
						blp(i, TABS, '+')
					}, '+')
		})
		tab4 = $.tab('topic', function () {
			TOPIC = $w['topic'] || 'fantasy'
			TABS.E(h1('posts on ' + TOPIC + ' topic'))
			qG('/pstt', {t: TOPIC}, function (i) {
				blp(i, TABS, '/')
			}, '+')
		})
		tab5 = ['yours',
			function () {
				TABS.E($.h1('your posts'))
				qGE('/pst', function (i) {
					blp(i, TABS, '+')
				})
			}]
		s2.A(
				t = $.tabs(tab1, tab2, tab3, tab4, tab5))
		t.load()
	}
	$postsButton = btPst = function () {
		return $.button('see posts', function () {
		})
	}
	POSTS = function () {
		$.format()
		s1.A(
				dd = $.inputBox({
					boxTitle: 'new post',
					url: '/pst',
					buttonText: 'post',
					func: home,
					inputType: 'textAndTextArea'
				}),
				$.h2('attach:'),
				$.button('pic', function () {
					m = $.pop(ps = $.div().A($.h3('pic select')))
					$.getJSON('/img', function (pics) {
						_.each(pics, function (p) {
							ps.A($.img(p.d).W(40).H(40).click(function () {
								attached.E($.img(p.d).W(20).H(20))
								m.modal('hide')
							}))
						})
					})
				}),
				attached = $.div().A()
		)
		tab2 = [
			'buds',
			function () {
				TABS.E($.h1('bud posts'))
			}
		]
		tab1 = ['all',
			function () {
				TABS.E($.h1('public posts'))
				qGE('/psts',
						function (i) {
							blp(i, TABS, '-')
						})
			}
		]
		tab3 = $.tab('user', function () {
			u = $w['from'] || 'a'
			s1.E(sp('topics: '))
			TABS.E(h1('user ' + u + ' blog'))
			qG('/pstu', {u: u},
					function (i) { //ii=i
						blp(i, TABS, '+')
					}, '+')
		})
		tab4 = $.tab('topic', function () {
			TOPIC = $w['topic'] || 'fantasy'
			TABS.E(h1('posts on ' + TOPIC + ' topic'))
			qG('/pstt', {t: TOPIC}, function (i) {
				blp(i, TABS, '/')
			}, '+')
		})
		tab5 = ['yours',
			function () {
				TABS.E($.h1('your posts'))
				qGE('/pst', function (i) {
					blp(i, TABS, '+')
				})
			}]
		s2.A(
				t = $.tabs(tab1, tab2, tab3, tab4, tab5))
		t.load()
	}
	BLOGX = function (u) {
		z()
		WAPNAV()
		format()
		s1(h1('user ' + u + ' blog'))
		qG('/pstu', {u: u}, function (i) {
			blp(i, s2, '+')
		}, '+')
	}
	$postsButton = btPst = function () {
		return $.button('see posts', function () {
		})
	}
	POSTS = function () {
		$.format()
		s1.A(
				dd = $.inputBox({
					boxTitle: 'new post',
					url: '/pst',
					buttonText: 'post',
					func: home,
					inputType: 'textAndTextArea'
				}),
				$.h2('attach:'),
				$.button('pic', function () {
					m = $.pop(ps = $.div().A($.h3('pic select')))
					$.getJSON('/img', function (pics) {
						_.each(pics, function (p) {
							ps.A($.img(p.d).W(40).H(40).click(function () {
								attached.E($.img(p.d).W(20).H(20))
								m.modal('hide')
							}))
						})
					})
				}),
				attached = $.div().A()
		)
		tab2 = [
			'buds',
			function () {
				TABS.E($.h1('bud posts'))
			}
		]
		tab1 = ['all',
			function () {
				TABS.E($.h1('public posts'))
				qGE('/psts',
						function (i) {
							blp(i, TABS, '-')
						})
			}
		]
		tab3 = $.tab('user', function () {
			u = $w['from'] || 'a'
			s1.E(sp('topics: '))
			TABS.E(h1('user ' + u + ' blog'))
			qG('/pstu', {u: u},
					function (i) { //ii=i
						blp(i, TABS, '+')
					}, '+')
		})
		tab4 = $.tab('topic', function () {
			TOPIC = $w['topic'] || 'fantasy'
			TABS.E(h1('posts on ' + TOPIC + ' topic'))
			qG('/pstt', {t: TOPIC}, function (i) {
				blp(i, TABS, '/')
			}, '+')
		})
		tab5 = ['yours',
			function () {
				TABS.E($.h1('your posts'))
				qGE('/pst', function (i) {
					blp(i, TABS, '+')
				})
			}]
		s2.A(
				t = $.tabs(tab1, tab2, tab3, tab4, tab5))
		t.load()
	}
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
	BLOGX = function (u) {
		z()
		WAPNAV()
		format()
		s1(h1('user ' + u + ' blog'))
		qG('/pstu', {u: u}, function (i) {
			blp(i, s2, '+')
		}, '+')
	}
	BLOGX = function (u) {
		z()
		WAPNAV()
		format()
		s1(h1('user ' + u + ' blog'))
		qG('/pstu', {u: u}, function (i) {
			blp(i, s2, '+')
		}, '+')
	}
	$postsButton = btPst = function () {
		return $.button('see posts', function () {
		})
	}
	POSTS = function () {
		$.fm()
		s1.A(
				dd = $.inputBox({
					boxTitle: 'new post',
					url: '/pst',
					btT: 'post',
					func: function () {
						Y.run('home')
					},
					inputType: 'textAndTextArea'
				}),
				$.h2('attach:'),
				$.bt('pic', function () {
					m = $.pop(ps = $.d().A($.h3('pic select')))
					$.getJSON('/img', function (pics) {
						_.e(pics, function (p) {
							ps.A($.i(p.d).WH(40, 40).$(function () {
								attached.E($.i(p.d).WH(20, 20))
								m.modal('hide')
							}))
						})
					})
				}),
				attached = $.d().A()
		)
		tab2 = [
			'buds',
			function () {
				TABS.E($.h1('bud posts'))
			}
		]
		tab1 = ['all',
			function () {
				TABS.E($.h1('public posts'))
				$.eG('/psts',
						function (i) {
							$.blp(i, TABS, '-')
						})
			}
		]
		tab3 = $.tab('user', function () {
			u = $w['from'] || 'a'
			s1.E(
					$.sp('topics: '))
			TABS.E(
					$.h1('user ' + u + ' blog'))
			$.eG('/pstu', {u: u}, function (i) {
				$.blp(i, TABS, '+')
			})
		})
		tab4 = $.tab('topic', function () {
			TOPIC = $w['topic'] || 'fantasy'
			TABS.E(h1('posts on ' + TOPIC + ' topic'))
			$.eG('/pstt', {t: TOPIC}, function (i) {
				blp(i, TABS, '/')
			})
		})
		tab5 = ['yours',
			function () {
				TABS.E($.h1('your posts'))
				$.eG('/pst', function (i) {
					$.blp(i, TABS, '+')
				})
			}]
		s2.A(
				t = $.tabs(tab1, tab2, tab3, tab4, tab5))
		t.load()
	}
}
function buds() {
	$buddyRequestButton = btRq = function (ur) {
		return $.bt('buddy-request',
				function () {
					$.po('/sRq', {to: user.un})
				})
	}
	johnX = function () {
		var o = {}
		o.d = 3
		o.a = function () {
			o.d++
		}
		o.g = function () {
			return o.d
		}
		return o
	}
	fredX = function () {
		var o = john();
		o.m = function () {
			o.d--
		}
		return o
	}
	REQUESTSX = function () {
		var c = CT(), d = dv('y', 800, 600)
		c(d(h1('Buddy requests'), br(),
				MB = _d().w(600).h(500)()).$$(function () {
					d.dg()
				}))
		$.G('/gRq', function (msgs) {
			_.e(msgs, function (ms) {
				MB(_d()(
						$.h6('from ' + ms.fr + ' on ' + msg.dt),
						$.h5(msg.m),
						$.bt('accept', function () {
							$.P('/yRq', {u: msg.fr})
						}), $.bt('deny'), $.hr()))
			})
		})
	}
//used for LISTING things (blog posts, etc)
	$.blip = blp = function (s, div) {
		
		//topic, datetime, content
		var g = G(arguments),
				s = g[0],
				div = g[1],
				theSpan = $.span(),
				post = s
		post.topic = post.t
		post.user = post.u
		post.datetime = post.dt
		post.content = post.c
		if (g.p) {
			theSpan.A(
					$.button('topic: ' + post.topic,
							function () {
								topic = post.topic;
								tab4.load()
							}),
					$.h3(post.content)
			)
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else if (g.n) {
			theSpan.A(
					$.button('user: ' + post.user, function () {
						from = post.user;
						tab3.load()
					}),
					$.br(),
					$.button('topic: ' + post.topic, function () {
						topic = s.t;
						tab4.load()
					}),
					$.h3(post.content))
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else if (g.d) {
			theSpan.A(
					$.button('user: ' + post.user, function () {
						from = post.user;
						tab3.load()
					}),
					$.br(),
					$.h3(post.content)
			)
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else {
			if (post.datetime) {
				theSpan.A($.h4(dt(post.datetime).dt()))
			}
			theSpan.A(
					$.h1(post.content)
			)
		}
		if (post.du) {
			theSpan.A(
					$.canvas('X', 400).A().fit(post.du)
			)
		}
		theSpan.A($.hr())
		return D(div) ? div.A(theSpan) : theSpan
	}
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	$mailButton = btMail = function (message, user) {
		return $.button('mail',
				function () {
					$.post('/sMsg', {m: message.V(), to: user.u}
					)
				})
	}
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
	c3X = function (a) {
		return $.canvas(300).A().fit(a)
	}
	johnX = function () {
		var o = {}
		o.d = 3
		o.a = function () {
			o.d++
		}
		o.g = function () {
			return o.d
		}
		return o
	}
	fredX = function () {
		var o = john();
		o.m = function () {
			o.d--
		}
		return o
	}
	REQUESTSX = function () {
		var c = CT(), d = dv('y', 800, 600)
		c(d(h1('Buddy requests'), br(),
				MB = _d().w(600).h(500)()).$$(function () {
					d.drg()
				}))
		qG('/gRq', function (msgs) {
			_e(msgs, function (msg) {
				MB(_d()(
						h6('from ' + msg.fr + ' on ' + msg.dt),
						h5(msg.m),
						bt('accept', function () {
							qP('/yRq', {u: msg.fr})
						}), bt('deny'), hr()))
			})
		})
	}
	c3X = function (a) {
		return $.canvas(300).A().fit(a)
	}
//used for LISTING things (blog posts, etc)
	$.blip = blp = function (s, div) {
		
		//topic, datetime, content
		var g = G(arguments),
				s = g[0],
				div = g[1],
				theSpan = $.span(),
				post = s
		post.topic = post.t
		post.user = post.u
		post.datetime = post.dt
		post.content = post.c
		if (g.p) {
			theSpan.A(
					$.button('topic: ' + post.topic,
							function () {
								topic = post.topic;
								tab4.load()
							}),
					$.h3(post.content)
			)
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else if (g.n) {
			theSpan.A(
					$.button('user: ' + post.user, function () {
						from = post.user;
						tab3.load()
					}),
					$.br(),
					$.button('topic: ' + post.topic, function () {
						topic = s.t;
						tab4.load()
					}),
					$.h3(post.content))
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else if (g.d) {
			theSpan.A(
					$.button('user: ' + post.user, function () {
						from = post.user;
						tab3.load()
					}),
					$.br(),
					$.h3(post.content)
			)
			if (post.datetime) {
				theSpan.A($.h5(dt(post.datetime).dt()))
			}
		}
		else {
			if (post.datetime) {
				theSpan.A($.h4(dt(post.datetime).dt()))
			}
			theSpan.A(
					$.h1(post.content)
			)
		}
		if (post.du) {
			theSpan.A(
					$.canvas('X', 400).A().fit(post.du)
			)
		}
		theSpan.A($.hr())
		return D(div) ? div.A(theSpan) : theSpan
	}
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	$mailButton = btMail = function (message, user) {
		return $.button('mail',
				function () {
					$.post('/sMsg', {m: message.V(), to: user.u}
					)
				})
	}
	$buddyRequestButton = btRq = function (user) {
		return $button('buddy-request',
				function () {
					$.post('/sRq', {to: user.u})
				})
	}
	c3X = function (a) {
		return $.canvas(300).A().fit(a)
	}
	johnX = function () {
		var o = {}
		o.d = 3
		o.a = function () {
			o.d++
		}
		o.g = function () {
			return o.d
		}
		return o
	}
	fredX = function () {
		var o = john();
		o.m = function () {
			o.d--
		}
		return o
	}
	REQUESTSX = function () {
		var c = CT(), d = dv('y', 800, 600)
		c(d(h1('Buddy requests'), br(),
				MB = _d().w(600).h(500)()).$$(function () {
					d.drg()
				}))
		qG('/gRq', function (msgs) {
			_e(msgs, function (msg) {
				MB(_d()(
						h6('from ' + msg.fr + ' on ' + msg.dt),
						h5(msg.m),
						bt('accept', function () {
							qP('/yRq', {u: msg.fr})
						}), bt('deny'), hr()))
			})
		})
	}
}
function showcase() {
	SHOWCASE = function () {
		format()
		s2($span().id('pics'))
		s2(x = cx('y', 500, 500))
		x.q.cen()
		eaI(function (v) {
			qi('pics')(xc(v.d, 1, function () {
				x.X();
				x.f(v.d)
				url$ = v.d
			}))
		})
		s2($.br(2), lb('caption'),
				cap$ = tx().w(500))
		s1(
				$.br(2),
				lb('category'),
				cat$ = tx().w(200), $.br(2),
				bt('post', function () {
					o = {
						t: cat$.V(),
						c: cap$.V(),
						du: url$
					}
					qP('/pst', o, function () {
						pop('posted')
					})
				}), $.br(2),
				bt('make a showcase', function () {
				}), $.br(2),
				bt('submit to ranky', function () {
				}), $.br(2)
		)
	}
	SHOWCASE = function () {
		$.fm()
		s2.A(
				$.sp('pics!').id('pics')
		)
		s2.A(x = $.c('y', 500, 500))
		//x.q.cen()
		$.eG('img', function (v) {
			$.c().fit(v.d, 1)
			x.X()
			url$ = v.d
			x.fit(v.d)
			$('#pics').A(x)
		})
		s2.A(
				$.br(2), $.lb('caption'),
				cap$ = $.ip().W(500)
		)
		s1($.br(2), $.lb('category'),
				cat$ = $.ip().W(200), $.br(2),
				$.bt('post', function () {
					o = {t: cat$.V(), c: cap$.V(), du: url$}
					$.P('pst', o, function () {
						$.pop('posted')
					})
				}), $.br(2),
				$.bt('make a showcase', function () {
				}), $.br(2),
				$.bt('submit to ranky', function () {
				}), $.br(2)
		)
	}
	SHOWCASE = function () {
		format()
		s2($span().id('pics'))
		s2(x = cx('y', 500, 500))
		x.q.cen()
		eaI(function (v) {
			qi('pics')(xc(v.d, 1, function () {
				x.X();
				x.f(v.d)
				url$ = v.d
			}))
		})
		s2($.br(2), lb('caption'),
				cap$ = tx().w(500))
		s1(
				$.br(2),
				lb('category'),
				cat$ = tx().w(200), $.br(2),
				bt('post', function () {
					o = {
						t: cat$.V(),
						c: cap$.V(),
						du: url$
					}
					qP('/pst', o, function () {
						pop('posted')
					})
				}), $.br(2),
				bt('make a showcase', function () {
				}), $.br(2),
				bt('submit to ranky', function () {
				}), $.br(2)
		)
	}
	SHOWCASE = function () {
		$.fm()
		s2($.sp().id('pics'))
		s2(x = $Cx('y', 500, 500))
		x.q.cen()
		eaI(function (v) {
			$('#pics')(
					$Cx(v.d, 1, function () {
						x.X();
						x.f(v.d)
						url$ = v.d
					}))
		})
		s2($.br(2), $.lb('caption'),
				cap$ = tx().w(500))
		s1(
				$.br(2),
				$.lb('category'),
				cat$ = tx().w(200), $.br(2),
				$.bt('post', function () {
					o = {
						t: cat$.V(),
						c: cap$.V(),
						du: url$
					}
					$.P('/pst', o, function () {
						$.pop('posted')
					})
				}), $.br(2),
				$.bt('make a showcase', function () {
				}), $.br(2),
				$.bt('submit to ranky', function () {
				}), $.br(2)
		)
	}
	SHOWCASE = function () {
		$.fm()
		s2.A(
				$.sp('pics!').id('pics')
		)
		s2.A(x = $.c('y', 500, 500))
		//x.q.cen()
		$.eG('img', function (v) {
			$.c().fit(v.d, 1)
			x.X()
			url$ = v.d
			x.fit(v.d)
			$('#pics').A(x)
		})
		s2.A(
				$.br(2), $.lb('caption'),
				cap$ = $.ip().W(500)
		)
		s1($.br(2), $.lb('category'),
				cat$ = $.ip().W(200), $.br(2),
				$.bt('post', function () {
					o = {t: cat$.V(), c: cap$.V(), du: url$}
					$.P('pst', o, function () {
						$.pop('posted')
					})
				}), $.br(2),
				$.bt('make a showcase', function () {
				}), $.br(2),
				$.bt('submit to ranky', function () {
				}), $.br(2)
		)
	}
}
$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
function sockStart() {
	k = io.connect();
	k.em = k.emit
}
$(appInit)
$(function () {
	if (window[_app = uC(_app)]) {
		window[_app]()
	}
})
appInit = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}
USERS = function () {
	d = $.Ct().A(
			$.R(),
			$.h1('users'),
			$.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
	).C('r')
	//i = 0
	$.G('users', function (u) {
		d.E();
		_.e(u, function (u) { //$l(u.username + '-' + i++)
			d.A(
					$.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
			)
		})
	})
}
USER = function (a) {
	$.fm()
	//problem: click on a user.. creates a NEW USER?
	if (U(username = _pam || a)) {
		$l('username undefined.  default to -> a');
		username = 'a'
	}
	$.G('user/' + username, function (u) {
		s1.A(
				$.h1(u.username),
				$.i(u.mug).WH(100),
				$.h4(u.status),
				statusSpan = $.sp(),
				i = $.i(),
				messageTextarea = $.ta().C('w', 'z')
				// $chatButton( _pam,  messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.pf(_pam, TABS)
	})
	tab2 = $.tab('pics', function () {
		TABS.E().A('hahaha')
		$.eG('images/' + _pam, function (i) {
			TABS.A($.i(i.d).WH(100))
		})
	})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.eG('/pstu', {u: username}, function (i) {
			$.blp(i, TABS, '+')
		})
	})
	/*
	 tab4= $.tab('buds',function(){ TABS.E() })
	 tab5= $.tab('groups',function(){ TABS.E() })
	
	
	 tab6= $.tab('email', function(){
	 //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
	 from = _pam
	 var messageTextarea = $.textarea()
	 _$username = window['from'] || 'b'
	
	 TABS.E()(
	 $.h1('convo with '+u),
	 $.h1('Messages'), $.br())
	 $.eG('gMsgW', { u: _$username }, function( m ){var c
	 c = $.c('X', 100)
	 $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
	 TABS.A(
	 $.R().A(
	 $.Cl(2,c),
	 $.Cl(10,
	 $.h6('from: ' + m.fr),
	 $.h4($.dt( m.dt ).dt()).K('pull-right'),
	 $.h5(m.m))
	 ),
	 $.hr()
	 )})
	 TABS.A(
	 messageTextarea,
	 $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
	 })
	 */
	tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6
	)
	s2.A(tabs)
	tabs.load()
}
USERS = function () {
	d = $.Ct().A(
			$.R(),
			$.h1('users'),
			$.d('y').id('ct').A('users will go here via ajax in a moment...', $.br(2))
	).C('r')
	//i = 0
	$.G('users', function (u) {
		d.E();
		_.e(u, function (u) { //$l(u.username + '-' + i++)
			d.A(
					$.dK("col-xs-6 col-sm-3 col-md-2 col-lg-2").A($.user(u))
			)
		})
	})
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERSX = function () {
	CT(h1('Users: '), br(), rr = row())
	getUsers(function (u) {
		_e(u, function (u) {
			qP('/dud', {d: u.m}, function (m) {
				rr(tn(pg(u.u), br(), m).o(function () {
					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
							xc().w(300).h(300).f(m), s = h1(), d = _d(),
							ms = ta().c('w', 'z'), bt('mail', function () {
								qP('/sMsg', {m: ms.V(), to: u.u})
							}),
							bt('chat', function () {
								iMsg(u.u, ms.V())
							}),
							bt('buddy-request', function () {
								qP('/sRq', {to: u.u})
							})))
					prof(u.u, d)
					wUSt(u.u, function (s) {
						d(h1('STATUS: ' + s))
						d(bt('comment', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see feed', function () {
									iMsg(u.u, ms.V())
								}),
								bt('see blog', function () {
									BLOG(u.u)
								}),
								bt('challenge', function () {
									qP('/sRq', {to: u.u})
								}))
					})
				}))
			})
		})
	})
	tab1 = ['users', function () {
	}]
	tab2 = ['a', function () {
	}]
	tab3 = ['a', function () {
	}]
	tab4 = ['a', function () {
	}]
	s2(t = tabs(tab1, tab2, tab3, tab4))
	t.load()
}
USERS = function () {
	b = $.boot()
	i = 0
	b.h1('users')
	b.A(
			$.d('y').id('content').A('users will go here via ajax in a moment...').A($.br(2)
			))
	$(function () {
		$.g('/users', function (urs) {
			$('#content').E()
			_.e(urs, function (ur) {
				$l(i++)
				$l(user.un)
				$('#content').A(
						$.div().K("col-xs-6 col-sm-3 col-md-2 col-lg-2").A(
								$.a('', function () {
									window.location = '/wap/user/' + user.un
								}).K('thumbnail').A(
										$.img(user.mug || dfMug),
										$.h4(user.un),
										$.h5('sts: ' + user.sts)
								)
						)
				)
			})
		})
	})
}
USER = function (a) {
	
	
	
	//problem: click on a user.. creates a NEW USER?
	un = _pam || a
	if (U(un)) {
		$l('un undefined.  default to -> a')
		un = 'a'
	}
	$.fm()
	$.g('/user/' + un, function (user) {
		u = user
		s1.A(
				$.h1(user.un),
				$.img(user.mug).WH(100),
				$.h4(user.status),
				statusSpan = $.span(),
				image = $.img(),
				messageTextarea = $.textarea().C('w', 'z'),
				$chatButton(_pam, messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.profile(_pam, TABS)
	})
	tab2 = $.tab('pics',
			function () {
				TABS.E()
				TABS.A('hahaha')
				$.g('/images/' + _pam, function (imgs) {
					_.e(imgs, function (i) {
						TABS.A(
								$.i(i.d).WH(100)
						)
					})
				})
			})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.G('/pstu', {u: u}, function (i) {
			blp(i, TABS, '+')
		}, '+')
	})
	tab4 = $.tab('buds', function () {
		TABS.E()
	})
	tab5 = $.tab('groups', function () {
		TABS.E()
	})
	tab6 = $.tab('email', function () {
		
		//TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
		from = _pam
		var messageTextarea = $.textarea()
		_$un = window['from'] || 'b'
		TABS.E()(
				$.h1('convo with ' + u),
				$.h1('Messages'),
				$.br()
		)
		$.GE('/gMsgW', {u: _$un},
				function (message) {
					var c = $.canvas('X', 100)
					$.post('/mug', {u: m.fr}, function (mug) {
						c.fit(mug)
					})
					TABS.A(
							$.row($.col(2, c),
									$.col(10,
											$.h6('from: ' + message.fr),
											$.h4(
													dt(message.dt).dt()
											).K('pull-right'),
											$.h5(m.m))),
							$.hr()
					)
				})
		TABS.A(
				messageTextarea,
				$.bt('new message', function () {
					$.post('/sMsg',
							{
								m: messageTextarea.V(),
								to: from
							})
				}),
				$.br(2)
		)
	})
	s2.A(
			theTabs = $.tabs(tab1, tab2, tab3, tab4, tab5, tab6))
	theTabs.load()
}
$.user = function (u) {
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
USER = function (a) {
	$.fm()
	//problem: click on a user.. creates a NEW USER?
	if (U(username = _pam || a)) {
		$l('username undefined.  default to -> a');
		username = 'a'
	}
	$.G('user/' + username, function (u) {
		s1.A(
				$.h1(u.username),
				$.i(u.mug).WH(100),
				$.h4(u.status),
				statusSpan = $.sp(),
				i = $.i(),
				messageTextarea = $.ta().C('w', 'z')
				// $chatButton( _pam,  messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.pf(_pam, TABS)
	})
	tab2 = $.tab('pics', function () {
		TABS.E().A('hahaha')
		$.eG('images/' + _pam, function (i) {
			TABS.A($.i(i.d).WH(100))
		})
	})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.eG('/pstu', {u: username}, function (i) {
			$.blp(i, TABS, '+')
		})
	})
	/*
	 tab4= $.tab('buds',function(){ TABS.E() })
	 tab5= $.tab('groups',function(){ TABS.E() })
	
	
	 tab6= $.tab('email', function(){
	 //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
	 from = _pam
	 var messageTextarea = $.textarea()
	 _$username = window['from'] || 'b'
	
	 TABS.E()(
	 $.h1('convo with '+u),
	 $.h1('Messages'), $.br())
	 $.eG('gMsgW', { u: _$username }, function( m ){var c
	 c = $.c('X', 100)
	 $.P('mug', {u: m.fr}, function(mug){ c.fit(mug) })
	 TABS.A(
	 $.R().A(
	 $.Cl(2,c),
	 $.Cl(10,
	 $.h6('from: ' + m.fr),
	 $.h4($.dt( m.dt ).dt()).K('pull-right'),
	 $.h5(m.m))
	 ),
	 $.hr()
	 )})
	 TABS.A(
	 messageTextarea,
	 $.bt('new message', function(){$.P('sMsg' , {m: messageTextarea.V(), to: from})}), $.br(2))
	 })
	 */
	tabs = $.tabs(tab1, tab2, tab3//,tab4,tab5,tab6
	)
	s2.A(tabs)
	tabs.load()
}
function status() {
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('status'),
				$.ip().id('statusInput'),
				$.bt('update', function () {
					$.P('status',
							{text: $('#statusInput').v()}, function () {
								$l('status updated')
							})
				}))
	}
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('status'),
				$.ip().id('statusInput'),
				$.bt('update', function () {
					$.P('status',
							{text: $('#statusInput').v()}, function () {
								$l('status updated')
							})
				}))
	}
	showStatus = stat = function (ur, dv) {
		$wSts(ur, function (sts) {
			dv($.h3('STATUS: ' + sts))
		})
	}
	STATUS = function () {
		$.fm()
		s1.A(
				$.h1('sts'),
				$.ip().id('stsInput'),
				$.bt('update', function () {
					sts = $('#stsInput').v()
					$.post('/sts', {text: sts}, function () {
						$l('sts updated')
					})
				})
		)
	}
	showStatus = stat = function (user, theDiv) {
		withStatus(user,
				function (status) {
					theDiv($.h3('STATUS: ' + status))
				})
	}
	STATUS = function () {
		$.format()
		s1.A(
				$.h1('status'),
				$.input().id('statusInput'),
				$.button('update', function () {
					status = $('#statusInput').val()
					$.post('/status', {text: status}, function () {
						$l('status updated')
					})
				})
		)
	}
//api calls
	withStatusX = wUSt = function (user, func) {//with first status?
		qG('/sts1',
				{u: user},
				function (status) {
					func(status.c)
				})
	}
	showStatus = stat = function (user, theDiv) {
		withStatus(user,
				function (status) {
					theDiv($.h3('STATUS: ' + status))
				})
	}
	STATUS = function () {
		$.format()
		s1.A(
				$.h1('status'),
				$.input().id('statusInput'),
				$.button('update', function () {
					status = $('#statusInput').val()
					$.post('/status', {text: status}, function () {
						$l('status updated')
					})
				})
		)
	}
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
	$.wStatus = function (user, fn) {
		$.g('sts1', {u: user},
				function (sts) {
					fn(sts.c)
				})
	} //with first status?
}
function profile() {
	PROFILE = function () {
		$.boot = function () {
			z();
			var r = $.R()
			_.e(arguments, function (g) {
				r.A(g)
			})
			return ct = $.Ct().A(r)
		}
		$.boot(
				$.h1('you got a profile?'),
				$.d().id('content'),
				f = $.f().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sm('save profile'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.P('getMyProfile', function (pf) {
			if (pf) {
				$l('found profile -> _pf')
				_pf = pf
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
			else {
				$l('no profile found')
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.P('myprofile', data, function () {
				$l('P(mypf)')
				$.P('getMyProfile', function (pf) {
					_pf = pf
					$l('getMyProfile -> _pf')
				})
				$l('form data submited..')
			})
		})
	}
	PROFILE = function () {
		$.boot = function () {
			z();
			var r = $.R()
			_.e(arguments, function (g) {
				r.A(g)
			})
			return ct = $.Ct().A(r)
		}
		$.boot(
				$.h1('you got a profile?'),
				$.d().id('content'),
				f = $.f().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sm('save profile'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.P('getMyProfile', function (pf) {
			if (pf) {
				$l('found profile -> _pf')
				_pf = pf
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
			else {
				$l('no profile found')
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.P('myprofile', data, function () {
				$l('P(mypf)')
				$.P('getMyProfile', function (pf) {
					_pf = pf
					$l('getMyProfile -> _pf')
				})
				$l('form data submited..')
			})
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a pf?'),
				$.d().id('content'),
				f = $.form().C('r').WH(400).A(
						$.d().A(
								$.lb('about me'),
								$.ta().id('aboutMe')),
						$.d().A(
								$.lb('i enjoy'),
								$.ip().id('iEnjoy')),
						$.d().A(
								$.lb('i seek'),
								$.ip().id('iSeek')),
						$.sbm('save pf'),
						$.bt('undo', function () {
							if (p) {
								$('#aboutMe').v(p.aboutMe)
								$('#iEnjoy').v(p.iEnjoy)
								$('#iSeek').v(p.iSeek)
							}
						}),
						$.bt('clearr', function () {
							$('input').v('')
							$('#iEnjoy').v('')
							$('#iSeek').v('')
						})
				))
		$.po('/getMyProfile', function (pf) {
			if (pf) {
				$('#aboutMe').v(pf.aboutMe)
				$('#iEnjoy').v(pf.iEnjoy)
				$('#iSeek').v(pf.iSeek)
			}
		})
		$('form').sbm(function (e) {
			$.pD(e)
			var data = {
				aboutMe: $('#aboutMe').v(),
				iEnjoy: $('#iEnjoy').v(),
				iSeek: $('#iSeek').v()
			}
			$.po('/myPf', data, function () {
				$.post('/getMyProfile',
						function (pf) {
							p = pf
						})
				$l('form data submited..')
			})
		})
	}
	$.pf = $.pf = function (un, theDiv) {  //=makeProfile = prof
		// if(pf.aboutMe){div.A(answer('aboutMe', pf.aboutMe)) } if(pf.iEnjoy){div.A(answer('iEnjoy', pf.iEnjoy)) } if(pf.iSeek){div.A(answer('iSeek', pf.iSeek) )}
		answer = function (ques, answ) {
			return $.d().A(
					$.h3(ques),
					$.h4(answ))
		}
		un = un || 'a'
		$.get('/pf/' + un, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a profile?'),
				$.div().id('content'),
				f = $.form().C('r').WH(400).A(
						$.div().A(
								$.label('about me'),
								$.textarea().id('aboutMe')),
						$.div().A(
								$.label('i enjoy'),
								$.input().id('iEnjoy')),
						$.div().A(
								$.label('i seek'),
								$.input().id('iSeek')),
						$.submit('save profile'),
						$.button('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.button('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.post('/getMyProfile', function (profile) {
			p = profile
			if (p) {
				$('#aboutMe').val(p.aboutMe)
				$('#iEnjoy').val(p.iEnjoy)
				$('#iSeek').val(p.iSeek)
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').val(),
				iEnjoy: $('#iEnjoy').val(),
				iSeek: $('#iSeek').val()
			}
			$.post('/myprofile', data, function () {
				$.post('/getMyProfile',
						function (profile) {
							p = profile
						})
				$l('form data submited..')
			})
		})
	}
	$.profile = function (username, theDiv) {  //=makeProfile = prof
		// if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
		answer = function (question, answer) {
			return $.div().A(
					$.h3(question),
					$.h4(answer))
		}
		username = username || 'a'
		$.get('/profile/' + username, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
	PROFILE = function () {
		$.boot(
				$.h1('you got a profile?'),
				$.div().id('content'),
				f = $.form().C('r').WH(400).A(
						$.div().A(
								$.label('about me'),
								$.textarea().id('aboutMe')),
						$.div().A(
								$.label('i enjoy'),
								$.input().id('iEnjoy')),
						$.div().A(
								$.label('i seek'),
								$.input().id('iSeek')),
						$.submit('save profile'),
						$.button('undo', function () {
							if (p) {
								$('#aboutMe').val(p.aboutMe)
								$('#iEnjoy').val(p.iEnjoy)
								$('#iSeek').val(p.iSeek)
							}
						}),
						$.button('clearr', function () {
							$('input').val('')
							$('#iEnjoy').val('')
							$('#iSeek').val('')
						})
				))
		$.post('/getMyProfile', function (profile) {
			p = profile
			if (p) {
				$('#aboutMe').val(p.aboutMe)
				$('#iEnjoy').val(p.iEnjoy)
				$('#iSeek').val(p.iSeek)
			}
		})
		$('form').submit(function (e) {
			e.preventDefault()
			var data = {
				aboutMe: $('#aboutMe').val(),
				iEnjoy: $('#iEnjoy').val(),
				iSeek: $('#iSeek').val()
			}
			$.post('/myprofile', data, function () {
				$.post('/getMyProfile',
						function (profile) {
							p = profile
						})
				$l('form data submited..')
			})
		})
	}
	$.profile = function (username, theDiv) {  //=makeProfile = prof
		// if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
		answer = function (question, answer) {
			return $.div().A(
					$.h3(question),
					$.h4(answer))
		}
		username = username || 'a'
		$.get('/profile/' + username, function (data) {
			d = data
			data = {
				aboutMe: d.aboutMe,
				iEnjoy: d.iEnjoy,
				iSeek: d.iSeek
			}
			if (O(data)) {
				theDiv = theDiv || $.divA('b', 300, 300).A().drag()
				theDiv.A(
						$.h4('about me'),
						$.h5(data.aboutMe),
						$.h4('i enjoy'),
						$.h5(data.iEnjoy),
						$.h4('i seek'),
						$.h5(data.iSeek)
				)
			}
		})
	}
}
function card() {
	CARD = function () {
		var t = 100, d
		card = function (a, b) {
			d = $.dA('y', 300)//.cen()
			d.$$(function () {
				d.rm()
			})
			if (O(a)) {
				d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
			}
			else {
				d.A($.h3(a || 'anon'), $.i(b || 'me'))
			}
			d.WH(200)
		}
		cards = function () {
			$.get('/users', function (u) {
				_.e(u, function (u) {
					$.P('/getImageById', u.m, function (mug) {
						d = $.dA('r', '+').lt(t)
						d.A($.h2(u.u), $.i(mug).WH(200, 300))
						t += 20
					})
				})
			})
		}
	}
	CARD = function () {
		var t = 100, d
		card = function (a, b) {
			d = $.dA('y', 300)//.cen()
			d.$$(function () {
				d.rm()
			})
			if (O(a)) {
				d.A($.h3(a.u || 'anon'), $.i(a.m || 'me'))
			}
			else {
				d.A($.h3(a || 'anon'), $.i(b || 'me'))
			}
			d.WH(200)
		}
		cards = function () {
			$.get('/users', function (u) {
				_.e(u, function (u) {
					$.P('/getImageById', u.m, function (mug) {
						d = $.dA('r', '+').lt(t)
						d.A($.h2(u.u), $.i(mug).WH(200, 300))
						t += 20
					})
				})
			})
		}
	}
//old // does something :)
	card = function (a, b) { //to see a users profile
		if (O(a)) {
			return card(a.u, a.m)
		}
		var d = $.divA('y', 300)//.cen()
		d.dblclick(function () {
			$(this).remove()
		})
		d.A($.h3(a || 'anon'), $.img(b || 'me').WH(200))
		d.el().A()
		return d
	}
	shUcards = function () {
		z();
		var t = 100
		usrs(function (u) {
			_.each(u, function (u) {
				$.P(
						'/getImageById', u.m,
						function (m) {
							_d().p('a').lt(t).c('r').a().drg()(
									h2(u.u),
									im(m).w(200).h(200)
							)
							t += 20
						})
			})
		})
	}
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
BOOK = function () {
	toBook = function () {
		Y.run('book')
	}
	$.format()
	s1.A(
			$.h1('BOOK').click(toBook),
			bookName = $.input(),
			$.button('new book', function () {
				$.qP('/newBook',
						{name: bookName.V()},
						toBook)
			}),
			$.hr()
	)
	$.qJ('/books', function (books) {
		s1.A($.h3('books:'))
		_.each(books,
				function (book) {
					s1.A($.span().C('x').click(function () {
								$.qP('/delBook', {book: book._id}, toBook)
							}),
							$.button(book.name, function () {
								s2.A($.h2('CHAPTER: ' + book.name),
										chapterTitleInput = $.input(),
										$.button('new chapter',
												function () {
													$.qP('/newChapter', {
														chapterTitle: chapterTitleInput.V(),
														book: book._id
													}, function () {
														chapterView(book, c)
													})
												}), $.hr())
								$.qJ('/chapters', {book: book._id},
										function (chapters) {
											_.each(chapters, function (chapter) {
												s2.A($.button(chapter.title,
														function () {
															chapterView(book, chapter)
														}), $.br(2))
											})
										})
							}), $.br(2))
				})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').click(toBook))
		$.qJ('/chapters', {book: book._id},
				function (chapters) {
					s1.A($.h3('chapters:'))
					s2.A($.h3('pages:'))
					_.each(chapters, function (chapter) {
						s1.A($.span()('x').click(function () {
									$.qP('/delChapter', {chapter: chapter._id},
											function () {
												chapterView(book, chapter)
											})
								}),
								$.button(chapter.title, function () {
									chapterView(book, chapter)
								}), $.br(2))
					})
				})
		s2.A($.h1('chapter: ' + chapter.title))
		s2.A(pageNameInput = $.input(),
				$.button('new page',
						function () {
							$.qP('/newPage', {
								pageName: pageNameInput.V(), chapter: chapter._id
							})
						}), $.hr())
		$.qJ('/pages', {chapter: chapter._id},
				function (pages) {
					p = pages
					_.each(pages, function (page) {
						s2.A($.button(page.name,
								function () {
									pageView(book, chapter, page)
								}), $.br(2))
					})
				})
	}
}
pageView = function (book, chapter, page) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').click(ldr('book')))
	s1.A($.h1('CHAPTER ' + chapter.title).click(
			function () {
				chapterView(book, chapter)
			}
	))
	$.qJ('/pages', {chapter: chapter._id},
			function (pages) {
				s1.A($.h3('pages'))
				_.each(pages, function (page) {
					s1.A(
							$.button(page.name, function () {
								sectionView(chapter)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + page.name))
	$.qJ('/sections', {
				book: book._id,
				chapter: chapter._id,
				page: page._id
			},
			function (sections) {
				_.each(sections,
						function (section) {
							s2.A(
									$.button(section.section, function () {
										sectionView(book, chapter, page)
									}),
									$.br(2)
							)
						})
			})
}
createjs.element = function (a) {
	return new createjs.DOMElement(a)
}
BOOK = function () {
	toBook = function () {
		Y.run('book')
	}
	$.format()
	s1.A(
			$.h1('BOOK').click(toBook),
			bookName = $.input(),
			$.button('new book', function () {
				$.qP('/newBook',
						{name: bookName.V()},
						toBook)
			}),
			$.hr()
	)
	$.qJ('/books', function (books) {
		s1.A($.h3('books:'))
		_.each(books,
				function (book) {
					s1.A($.span().C('x').click(function () {
								$.qP('/delBook', {book: book._id}, toBook)
							}),
							$.button(book.name, function () {
								s2.A($.h2('CHAPTER: ' + book.name),
										chapterTitleInput = $.input(),
										$.button('new chapter',
												function () {
													$.qP('/newChapter', {
														chapterTitle: chapterTitleInput.V(),
														book: book._id
													}, function () {
														chapterView(book, c)
													})
												}), $.hr())
								$.qJ('/chapters', {book: book._id},
										function (chapters) {
											_.each(chapters, function (chapter) {
												s2.A($.button(chapter.title,
														function () {
															chapterView(book, chapter)
														}), $.br(2))
											})
										})
							}), $.br(2))
				})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').click(toBook))
		$.qJ('/chapters', {book: book._id},
				function (chapters) {
					s1.A($.h3('chapters:'))
					s2.A($.h3('pages:'))
					_.each(chapters, function (chapter) {
						s1.A($.span()('x').click(function () {
									$.qP('/delChapter', {chapter: chapter._id},
											function () {
												chapterView(book, chapter)
											})
								}),
								$.button(chapter.title, function () {
									chapterView(book, chapter)
								}), $.br(2))
					})
				})
		s2.A($.h1('chapter: ' + chapter.title))
		s2.A(pageNameInput = $.input(),
				$.button('new page',
						function () {
							$.qP('/newPage', {
								pageName: pageNameInput.V(), chapter: chapter._id
							})
						}), $.hr())
		$.qJ('/pages', {chapter: chapter._id},
				function (pages) {
					p = pages
					_.each(pages, function (page) {
						s2.A($.button(page.name,
								function () {
									pageView(book, chapter, page)
								}), $.br(2))
					})
				})
	}
}
pageView = function (book, chapter, page) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').click(ldr('book')))
	s1.A($.h1('CHAPTER ' + chapter.title).click(
			function () {
				chapterView(book, chapter)
			}
	))
	$.qJ('/pages', {chapter: chapter._id},
			function (pages) {
				s1.A($.h3('pages'))
				_.each(pages, function (page) {
					s1.A(
							$.button(page.name, function () {
								sectionView(chapter)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + page.name))
	$.qJ('/sections', {
				book: book._id,
				chapter: chapter._id,
				page: page._id
			},
			function (sections) {
				_.each(sections,
						function (section) {
							s2.A(
									$.button(section.section, function () {
										sectionView(book, chapter, page)
									}),
									$.br(2)
							)
						})
			})
}
createjs.element = function (a) {
	return new createjs.DOMElement(a)
}
BOOK = function () {
	toBook = function () {
		Y.run('book')
	}
	$.format()
	s1.A(
			$.h1('BOOK').click(toBook),
			bookName = $.input(),
			$.button('new book', function () {
				$.qP('/newBook',
						{name: bookName.V()},
						toBook)
			}),
			$.hr()
	)
	$.qJ('/books', function (books) {
		s1.A($.h3('books:'))
		_.each(books,
				function (book) {
					s1.A($.span().C('x').click(function () {
								$.qP('/delBook', {book: book._id}, toBook)
							}),
							$.button(book.name, function () {
								s2.A($.h2('CHAPTER: ' + book.name),
										chapterTitleInput = $.input(),
										$.button('new chapter',
												function () {
													$.qP('/newChapter', {
														chapterTitle: chapterTitleInput.V(),
														book: book._id
													}, function () {
														chapterView(book, c)
													})
												}), $.hr())
								$.qJ('/chapters', {book: book._id},
										function (chapters) {
											_.each(chapters, function (chapter) {
												s2.A($.button(chapter.title,
														function () {
															chapterView(book, chapter)
														}), $.br(2))
											})
										})
							}), $.br(2))
				})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').click(toBook))
		$.qJ('/chapters', {book: book._id},
				function (chapters) {
					s1.A($.h3('chapters:'))
					s2.A($.h3('pages:'))
					_.each(chapters, function (chapter) {
						s1.A($.span()('x').click(function () {
									$.qP('/delChapter', {chapter: chapter._id},
											function () {
												chapterView(book, chapter)
											})
								}),
								$.button(chapter.title, function () {
									chapterView(book, chapter)
								}), $.br(2))
					})
				})
		s2.A($.h1('chapter: ' + chapter.title))
		s2.A(pageNameInput = $.input(),
				$.button('new page',
						function () {
							$.qP('/newPage', {
								pageName: pageNameInput.V(), chapter: chapter._id
							})
						}), $.hr())
		$.qJ('/pages', {chapter: chapter._id},
				function (pages) {
					p = pages
					_.each(pages, function (page) {
						s2.A($.button(page.name,
								function () {
									pageView(book, chapter, page)
								}), $.br(2))
					})
				})
	}
}
pageView = function (book, chapter, page) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').click(ldr('book')))
	s1.A($.h1('CHAPTER ' + chapter.title).click(
			function () {
				chapterView(book, chapter)
			}
	))
	$.qJ('/pages', {chapter: chapter._id},
			function (pages) {
				s1.A($.h3('pages'))
				_.each(pages, function (page) {
					s1.A(
							$.button(page.name, function () {
								sectionView(chapter)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + page.name))
	$.qJ('/sections', {
				book: book._id,
				chapter: chapter._id,
				page: page._id
			},
			function (sections) {
				_.each(sections,
						function (section) {
							s2.A(
									$.button(section.section, function () {
										sectionView(book, chapter, page)
									}),
									$.br(2)
							)
						})
			})
}
createjs.element = function (a) {
	return new createjs.DOMElement(a)
}
ELEMENTS = function () {
	z()
	div = $.div('red', 400, 400).P('a').A().A($.input())
	s = stage = createjs.stage('yellow', 1000).tick().A()
	elem = new createjs.DOMElement(div[0])
	//stage.A(el)
	// tw(el, [{x:300,y:300},2000])
	// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}
$.inputBox = function (ob) {
	ob = ob || {}
	var func = ob.func,
			url = ob.url || '/',
			boxTitle = ob.boxTitle,
			inputType = ob.inputType || 'text',
			defaults = ob.defaults || {},
			buttonText = ob.buttonText || 'submit'
	var theDiv = $.div().WH('auto').pad(10)
	if (boxTitle) {
		theDiv.A($.h1(boxTitle))
	}
	if (inputType == 'text') {
		var theTextInput = $.input().K('form-control')
		theDiv.A(theTextInput)
		theDiv.A(
				$.button(buttonText, function () {
					$.post(
							url,
							_.defaults(dataValue(theTextInput), defaults),
							func
					)
				})
		)
	}
	if (inputType == 'textArea') {
		var theTextAreaInput = $('<textarea>').K('form-control')
		theDiv.A(
				theTextAreaInput,
				$.button(buttonText, function () {
					$.post(url, _.defaults(dataValue(theTextAreaInput), defaults), func)
				})
		)
	}
	if (inputType == 'textAndTextArea') {
		var theTextInput = $.input().K('form-control'),
				theTextAreaInput = $('<textarea>').K('form-control')
		theDiv.A(theTextInput, theTextAreaInput)
		theDiv.A(
				$.button(buttonText, function () {
					$.post(url,
							_.defaults(dataValue(theTextInput, theTextAreaInput), defaults),
							func)
				}))
	}
	//z(); theDiv.a()
	return theDiv
}
test = function () {
	itemModel = new ItemModel({topic: 'yano', text: 'hi', score: 0})
	z()
	$('body').append(
			new ItemView({model: itemModel}).render().el
	)
}
OBJECT = function () {
	format()
	s1('your objects', br(2),
			t = tx(),
			bt('new object', function () {
				qP('/newObj',
						{t: t.V()})
			}))
	qG('/objs', function (o) {
		_e(o, function (o) {
			s1(
					h2(o.t).o(function () {
						s2.E(h1(o.t), tt = tx(),
								bt('new sub-object', function () {
									qP('/newObj', {t: tt.V()})
								}))
					}))
			_e(o.i, function (i) {
				s1(h3(i))
			})
		})
	})
}
DIRTPAGE = function () {
	z()
	MessageModel = Backbone.Model.extend({})
	MessageCollection = Backbone.Collection.extend({model: 'MessageModel'})
	MessageView = Backbone.View.extend({})
	MessagesView = Backbone.View.extend({})
	$.h1().A($.a('Dirtpage', '/wap/dirtpage/')).A()
	$.div().A().id('content')
	if (!pam) {
		var newMessageBox = $.div().WH('auto').A(
				$.h1('new message'),
				$.input().K('form-control').id('newTopic'),
				$.input().K('form-control').id('newMessage'),
				$.button('ok', function () {
					var newTopic = $('#newTopic').val()
					var newMessage = $('#newMessage').val()
					$.post('/messages',
							{
								topic: newTopic,
								message: newMessage
							}, function () {
							})
				}))
		var searchBox = $.div().WH('auto').A(
				$.h1('search'),
				$.input().K('form-control').id('searchInput'),
				$.button('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').val()
					var searchInput = $('#searchInput').val()
					$.get('/topics/' + searchInput, function (messages) {
						$('#results').html($.h5('length: ' + messages.length))
						_.each(messages,
								function (message) {
									$('#results').A($.h6(message.message))
								})
					})
				}))
		$div().id('results').A()
		$('#content').A(newMessageBox, searchBox)
		qG('/messages', function (messages) {
			_.each(messages, function (message) {
				$('#results').A(
						$h2().A(
								$.a('topic: ' + message.topic, '/wap/dirtpage/' + message.topic)),
						$.h3('message: ' + message.message)
				)
			})
		})
	}
	else {
		var newMessageBox = $.div().WH('auto').A(
				$.h1('new message'),
				$.input().K('form-control').id('newMessage'),
				$.button('ok', function () {
					var newMessage = $('#newMessage').val()
					$.post('/messages',
							{topic: pam, message: newMessage},
							function () {
								loadResults()
							})
				}))
		$('#content').A(
				$.h1('the ' + pam + ' page'),
				newMessageBox,
				$.div().id('results')
		)
		loadResults = function () {
			$.get('/topics/' + pam, function (messages) {
				$('#results').html($.h5('length: ' + messages.length))
				_.each(messages,
						function (message) {
							$('#results').A($.h6(message.message))
						})
			})
		}
		loadResults()
	}
}
function sorty() {
	SORTY = function () {
		$.fm()
		/*
		 s1.A(
		 $.h1('your sorts'),
		 $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
		 $.h4('recent: ')
		 )
		 */
		$.eG('/srt', function (t) {
			d1.A($.bt(t.t, function () {
				sorty(t.t)
			}), $.br(2))
		})
		s2.A($.i('me'))
	}
	SORTY = function () {
		format()
		s1(
				$.h1('your sorts'),
				$.div().WH('auto').A(
						$.h1('new sort'),
						textInputSpan('post', '/srt')
				),
				$.h4('recent: '))
		qG('/srt', function (t) {
			d1($.button(t.t, function () {
						sorty(t.t)
					}),
					$.br(2))
		}, '+')
		s2(
				$.img('me'))
	}
	SORTY = function () {
		$.fm()
		/*
		 s1.A(
		 $.h1('your sorts'),
		 $.d().WH('auto').A($.h1('new sort'), textInputSpan('post','/srt') ),
		 $.h4('recent: ')
		 )
		 */
		$.eG('/srt', function (t) {
			d1.A($.bt(t.t, function () {
				sorty(t.t)
			}), $.br(2))
		})
		s2.A($.i('me'))
	}
}
RANKY = function (tp) {
	z()
	$.format()
	section1.A(
			$.h1('topics!'),
			// ipt('new topic', 'post', '/tpc') ,
			collection = $.inputBox({
				boxTitle: 'new topic',
				url: '/tpc',
				buttonText: 'post',
				func: function () {
				},
				inputType: 'textArea'
			}),
			$.h4('recent: ')
	)
	$.get('/tpc', function (topics) {
		_.each(topics, function (topic) {
			section1.A(
					$.button(topic.t,
							function () {
								ranky(topic)
							}),
					$.br(2))
		})
	})
//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
	ranky = function (topic) {//var collection
		section2.empty()
		section2.A(
				$.h1('topic page: ' + topic.t),
				$.button('live chat', function () {
					priv(topic.t)
				}),
				//ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),
				$.inputBox({
					boxTitle: 'new item',
					url: '/itm',
					buttonText: 'post',
					defaults: {t: topic.t},
					func: function () {
						$.get('/tpc1', {t: topic.t}, function (t) {
							ranky(t)
						})
					},
					inputType: 'text'
				}),
				collection = $.div())
		itemCollection = new ItemCollection()
		_.each(topic.i, function (i) {
			if (O(i)) {
				var itemModel = new ItemModel({topic: topic.t, text: i.t, score: i.s})
				itemCollection.add(itemModel)
				// var itemView=new ItemView({model: itemModel}).render().el
				// collection(itemView)
				// itemCollection.render()
			}
		})
		itemsView = new ItemsView({collection: itemCollection})
		itemsView.render()
	}
	ItemModel = Backbone.Model.extend({
		initialize: function () {
		}
	})
	ItemCollection = Backbone.Collection.extend({
		model: ItemModel,
		comparator: 'score',
		render: function () {
			collection.E()
			_.each(
					this.models, function (itemModel) {
						var itemView = new ItemView({model: itemModel}).render()
						collection(itemView.el)
					}
			)
		}
	})
	ItemsView = Backbone.View.extend({
		initialize: function () {
			var self = this
			this.collection.on('change', function () {
				
				// alert(3)
				this.sort()
				self.render()
			})
		},
		render: function () {
			collection().E()
			this.collection.each(function (model) {
				var itemView = new ItemView({model: model}).render()
				collection(itemView.el)
			})
		}
	})
	ItemView = Backbone.View.extend({
		initialize: function () {
			this.listenTo(this.model, 'change', function () {
				this.render()
			})
		},
		render: function () {
			var self = this
			var topic = this.model.get('topic')
			var score = this.model.get('score')
			var text = this.model.get('text')
			qq(this.el).E(
					h1(text),
					h4('score: ' + String(score)),
					bt('up', function () {
						qP('/vte', {t: topic, i: text, dr: 'u'}, function () {
							self.model.set('score', self.model.get('score') + 1)
						})
					}),
					bt('down', function () {
						qP('/vte', {t: topic, i: text, dr: 'd'},
								function () {
									self.model.set('score', self.model.get('score') - 1)
								}
								//    function(){ranky(topic)}
						)
					}))
			return this
		}
	})
}