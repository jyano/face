$$$=$Ms = Ms = Ms$ = function (ms) {
	var h1 = $.h1(ms)
	return $.d().fS(80).C($r(), $r()).A(h1)
}
$.x = function () {
	var g = G(arguments), bd = $.bd()
	bd.E()
	var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
	{col: g.f, title: g.s}
	if (o.css) {$s(o.css)}
	 
	$.C(o.col || $r())
	if (o.title) {
		$.A($.h1(o.title), $.hr())
	}
	if (g.p) {
		bd.A($.hr())
	}
	return $
	$.s = function (css, c, tx) {
		$s(css)
		$.x(c, tx)
		return $
	}
}
_$ = function (ob) {
	$.x(ob.C || $r(), ob.t)
	
	if (ob.vm) {OK(ob.vm)}
	if (ob.el) {els(ob.el)}
	if (ob.A) {_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})}
	if (ob._) {_.in(ob._)}
}

$.h = function () {
	var g = G(arguments), o
	bd = $.bd()
	bd.empty()
	bd.C($r())
	o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
	if (o.s) {
		$CSS(o.s)
	}
	if (o.t) {
		$.h1(o.t);
		$.hr().A()
	}
	return $
}
$MS = function (ms, cHeader, cBody) {
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
$.fm = $.format = function () {
	$.fm.A = $s1 = s1 = section1 = $.span()
	$.fm.B = $s2 = s2 = section2 = $.span()
	//$ctD = $.containerDiv(bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
}

$.app = ContainerDiv = CT = $.dCt = $.ctD = function () {
	var g = G(arguments)
	var d = $.d().K('container')
	if (!g.n) {
		d($.br(4))
	}
	_.e(g.A ? g.f : g, function (v) {
		d(v)
	})
	d.K('app').id('app')
	return d
}
$nav = function (pageName, rtr) {
	var nav = $.sp(pageName).K(pageName + '-nav')
	if (rtr) {
	}
	return nav
}
$.editDiv = $.eD = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.editDivRange = $.dE2 = function (a) {
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
};
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
$.floatIp = function (t, fn) {
	var g = G(arguments), f
	f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
			.A($.sm(t), $.ip())
	if (F(fn)) {
		f.sm(fn)
	}
	return f
}
$.ipB = $.inputBox = function (ob) {
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
// on dblclick of .msg,// post its text to newMessage and run gMsgs?}
$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg))
	return theForm.prependTo('body')
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
$.w = $.win = function (a, size, id) {
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
	function alt() {
		$.win = $.window = function (a, c, id) {
			var size,
					theWindow,
					text,
					moreButton,
					lessButton,
					closeButton
			moreButton = $.buttonRight('>', function () {
				theWindow.WH(400)
				lessButton.show()
				moreButton.hide()
			})
			lessButton = $.buttonRight('<', function () {
				theWindow.WH('auto')
				moreButton.show()
				lessButton.hide()
			}).hide()
			closeButton = $.buttonLeft('X', function () {
				theWindow.remove()
			})
			theWindow = $.divA(size || 400)
			theWindow.C('b').opacity(.9).overflow('auto')
			theWindow.pad(10).borderWidth(4).borderStyle('dashed')
			theWindow.WH('auto').A(moreButton, lessButton.hide(), closeButton).drag().A()
			if (S(a)) {
				text = a
			}
			if (N(a)) {
				size = a
			}
			if (O(a)) {
				theWindow.A(a)
			}
			if (text) {
				theWindow.A(
						$.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
						$.hr().col(c || 'z').fontSize(10)
				)
			}
			if (id) {
				theWindow.id(id)
			}
			return theWindow
		}
	}
}
$.pop = function (message, o) {
	$.pop = function (message, ops) {
		_pop = function () {
			var modalContent = ModalContent() // <div class="modal-content"></div>
			_.each(arguments,
					function (arg) {
						modalContent(S(arg) ? $div()(arg) : arg)
					})
			return ModalForm(
					ModalDialog(
							modalContent
					))
		}
		pop = function (message, ops) {
			if (S(ops)) {
				return pop(ops, {t: message})
			}
			ops = O(ops) ? ops : {}
			var modalBody,
					message = message || 'pop pop',
					modalBody = ModalBody($h2(message)),
					theModal = _pop(modalBody)
			var titleColor = ops.tc || 'z',
					headerColor = ops.hc || 'z',
					title = ops.t
			//hide? default:false
			if (!ops.h) {
				theModal.m()
			}
			if (title) {
				
				//header
				modalBody.q.prepend(
						$hr().c(headerColor).s({height: 2}).q)
				//title
				modalBody.q.prepend(
						$h1(title).s('c', titleColor).q)
			}
			//button
			if (ops.b) {
				modalBody.a($button(ops.b))
			}
			//dragg
			if (ops.d) {
				theModal.drg()
			}
			if (ops.drag) {
				theModal.drg()
			}
			//opacity
			if (ops.a) {
				theModal.s({opacity: ops.a})
			}
			if (ops.opacity) {
				theModal.s({opacity: ops.opacity})
			}
			//text color of the MESSAGE
			if (ops.c) {
				
				//flash like crazy
				if (ops.c == '*') {
					setInterval(function () {
						modalBody.c()
					}, 100)
				}
				
				//color
				else {
					theModal.s({c: ops.c})
				}
			}
			//color of background of modal itself
			if (ops.C) {
				modalBody.s({C: ops.C})
			}
			//this color takes over the whole screen!
			//this is the background color of the hiding body
			if (ops.bc) {
				theModal.s({C: ops.bc})
			}
			return theModal
		}
		$._pop = function () {
			var modalContent = $.modalContent()
			_.each(arguments,
					function (arg) {
						modalContent.A(
								S(arg) ? $.div().text(arg) : arg
						)
					}
			)
			return $.modalFade().A($.modalDialog().A(modalContent))
		}
		if (S(ops)) {
			return $.pop(ops, {title: message})
		}
		ops = O(ops) ? ops : {}
		message = message || 'pop pop'
		modalBody = $.modalBody().A($.h2(message))
		theModal = $.modalFade().A($.modalDialog().A($.modalContent().A(modalBody)))
		if (!ops.hide) {
			theModal.modal()
		}
		if (ops.title) {
			modalBody.prepend(
					$.h1(ops.title).col(ops.titleColor || 'z'),
					$.hr().C(ops.headerColor || 'z').css('height', 2)
			)
		}
		if (ops.button) {
			modalBody.A($.button(ops.button))
		}
		if (ops.drag) {
			theModal.drag()
		}
		if (ops.opacity) {
			theModal.opacity(ops.opacity)
		}
		//text color of the MESSAGE
		if (ops.col) {
			theModal.col(ops.col)
		}
		//color of background of modal itself
		if (ops.C) {
			//flash like crazy
			if (ops.C == '*') {
				setInterval(function () {
					modalBody.C($r())
				}, 100)
			}
			else {
				modalBody.C(ops.C)
			}
		}
		//this color takes over the whole screen!
		//this is the background color of the hiding body
		if (ops.backgroundColor) {
			theModal.C(ops.backbroundColor)
		}
		return theModal
	}
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
ZX = TESTEDITDIV = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv().A().C('a')
	$.editDiv().C('b')
	//$.editDiv2().A()
}
$.dg1 = $.dragFrame1 = function (ob) {
	var oD = $.d('r', '+').pad(10)
	inD = $.d('y').md(function (e) {
		e.stopPropagation()
	})
	oD.A(inD)
	return inD.A(ob)
	var outerD = $.d('r', '+').pad(10)
	var oD = $.d('y').pad(20).drag()
	var d = d || $.d('r').mar(20)
	d.xPrp().a2(oD)
	d.oD = oD
	oD.XY(40, 40)
	var innerD = ob || $.d('y').md(function (e) {
				e.stopPropagation()
			})
//	innerD.on('mousedown', function (e) {e.stopPropagation()})
	outerD.A(innerD)
	return innerD.A(ob)
}
$.dragStage1 = function (x, y) {
	var can = $.c('g', 400)
	$St(can[0])
	$.dragFrame(can)
	return st
}