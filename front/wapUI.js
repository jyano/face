 window['Y'] = window['Y']||{}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
$.dg = $.dragFrame = function (d) {
	var oD
	oD = $.d('y').pad(20).drag()
	d = d || $.d('r').mar(20)
	d.xPrp().a2(oD)
	d.oD = oD
	oD.XY(40, 40)
	return oD
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
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
z = function (fn) {
	$('body').empty()
}
$.fn.animloop = function () {
	var that = this
	this.show("slow")
	this.animate({"marginLeft": "300px"}, 2000)
			.animate({"marginLeft": "0px"}, 2000)
	this.hide("slow", function () {
		that.animloop()
	})
}
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass 
_lS = localStorage
$w = window
z = function () {
	$('body').E()
}
$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
$test = function (a, b) {
	if (b2d.test) {
		var g = G(arguments), a = g[0], b = g[1], str
		if (D(b)) {
			str = '||'
			_.e(g, function (s) {
				str += ' ' + s.toString() + ' |'
			})
			str += '|'
		}
		else {
			str = a.toString()
		}
		alert(str)
	}
	return a
} // =$t
ContainerDiv = CT = function () {
	var args = G(arguments),
			theDiv = $div().k('container')
	if (args.N) {
		theDiv($br(4)).a()
	}
	_.each(args, function (v) {
		theDiv(v)
	})
	return theDiv
}
$.containerDiv = function () {
	var args = G(arguments),
			theDiv = $.div().K('container')
	if (args.N) {
		theDiv.A($.br(4)).A()
	}
	_.each(arguments, function (v) {
		theDiv.A(v)
	})
	return theDiv
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
$.eD = $.editDiv = function (words) {//$.dE
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
$.dE2 = $.editDiv2 = function (a) {
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
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
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
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
$.eD = $.editDiv = function (words) {//$.dE
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
$.dE2 = $.editDiv2 = function (a) {
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
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
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
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
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
$.floatingInput = function (text, func) {
	var args = G(arguments),
			theForm = $.form().K('text-center').C('o').fontSize(20).drag().minW(200)
	theForm.A(
			$.button(text).type('submit'),
			$.input()
	)
	if (F(func)) {
		theForm.submit(func)
	}
	return theForm
}
$.floatIp = function (t, fn) {
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
$window = $win = win = function (a, c, id) {//title/ob?,color,id
	var size, theWindow, text, moreButton, lessButton, closeButton
	moreButton = $buttonRight('>', function () {
		theWindow.Z(4)
		lessButton.sh()
		moreButton.hd()
	})
	lessButton = $buttonRight('<', function () {
		theWindow.auto();
		moreButton.sh();
		lessButton.hd()
	}).hd()
	closeButton = $buttonLeft('X', function () {
		theWindow.X()
	})
	theWindow = dva(size || 4).s({C: 'b', a: .9, of: 'a'})
			.P(10).B(4).bs('-').bc('o').auto()
	(moreButton, lessButton.hd(), closeButton).drg().a()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow(a)
	}
	if (text) {
		theWindow(
				$pg(text)
						.font(24).cen().c('X')
						.s({
							'margin-left': 10,
							'margin-right': 10,
							pr: 30,
							pl: 30
						}),
				$hr().c(c || 'z').font(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
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
$.dragFrame = function (d) {
	d = d || $.d('y', 50, 50)//.mar(20)
	d.on('mousedown', function (e) {
		e.stopPropagation()
	})
	//outerDiv
	return $.d('r').A(d)//.drag().pad(20)
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
$.dragFrame = function (ob) {
	var oD = $.d('r', '+').pad(10)
	inD = $.d('y').md(function (e) {
		e.stopPropagation()
	})
	oD.A(inD)
	return inD.A(ob)
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
$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg).K('alert alert-danger'))
	return theForm.prependTo('body')
}
$window = $win = win = function (a, c, id) {//title/ob?,color,id
	var size, theWindow, text, moreButton, lessButton, closeButton
	moreButton = $buttonRight('>', function () {
		theWindow.Z(4)
		lessButton.sh()
		moreButton.hd()
	})
	lessButton = $buttonRight('<', function () {
		theWindow.auto();
		moreButton.sh();
		lessButton.hd()
	}).hd()
	closeButton = $buttonLeft('X', function () {
		theWindow.X()
	})
	theWindow = dva(size || 4).s({C: 'b', a: .9, of: 'a'})
			.P(10).B(4).bs('-').bc('o').auto()
	(moreButton, lessButton.hd(), closeButton).drg().a()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow(a)
	}
	if (text) {
		theWindow(
				$pg(text)
						.font(24).cen().c('X')
						.s({
							'margin-left': 10,
							'margin-right': 10,
							pr: 30,
							pl: 30
						}),
				$hr().c(c || 'z').font(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
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
 
		$.scr = function (scr, fn) {
			return $.getScript(scr, fn)
		}
		$.getMultiScripts = function (arr, path) {
			var _arr = $.map(arr, function (scr) {
				return $.getScript((path || "") + scr)
			})
			//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
			return $.when.apply($, _arr)
		}
		SCRIPTS = _.map([
			"socket.io/socket.io", "string", 'bb', 'bbmn', 'ko', 'mel', 'gq', 'objects', 'defaultMug', 'spriteSheets',
			'core', 'jqueryplugins', 'html', 'boot', 'ui', 'can', 'sys', 'images', 'event', 'socket', 'ranky', 'routeTests', 'nav', 'api', 'j3', 'display', 'animate', 'imagine', 'work', 'tween', 'universe', 'create', 'easel', 'displayObject', 'shape', 'text', 'mobile', 'animation', 'sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve', 'playgame', 'users', 'share', 'chat', 'messages', 'knock', 'bbtemps', 'backbone1', 'people', 'mar', 'backbone', 'angu'
			
			// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
			// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
			//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
			//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
		], function (js) {
			return "/" + js + ".js"
		})
// _.each(SCRIPTS, function(scr){$.scr(scr)})
		/*
		 dfr = $.getMultiScripts(SCRIPTS)
		 dfr.done(function(){alert('done')})
		 .always(function(){
		 alert('always')
		 $.scr('app')
		 })
		 .fail(function(){alert('fail')})
		 */
		GSCR = function () {
			$.scr = function (scr, fn) {
				return $.getScript(scr, fn)
			}
			$.getMultiScripts = function (arr, path) {
				var _arr = $.map(arr, function (scr) {
					return $.getScript((path || "") + scr)
				})
				//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
				return $.when.apply($, _arr)
			}
			$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
				console.log(a + b + c)
				d = c
				$l('got script')
				$.$(function () {
					$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
				})
			})
			dfr = $.Deferred(function (dfrd) {
				d = dfrd
				// $(dfrd.resolve)
			})
			testx = 100
			$.when(
					$.scr("/boxSprite.js"),
					$.scr("/easel.js")
			).done(function () {
						$l(testx)
					})
		}
		$.scr = function (js) {
			var script = $('<script>')
			script.attr('src', js);
			return script
		}
		$.j = $.js = function (js) {
			$('body').A($.scr(js))
		}
		LOADSCRIPTS = function () {
			$(function () {
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )
				$.j('/us.js')
				$.j('/string.js')
				$.j('/both.js')
				//$.j('/jq.js')
				//$.j('/jqSer.js')
				$.j('/bs.js')
				$.j('/frontOb.js')
				$.j('/handy.js')
				$.j('/sty.js')
				$.j('/rules.js')
				$.j('/flex.js')
				$.j('/bb.js')
				$.j('/bbCore.js')
				$.j('/bbLs.js')
				arr = [
					"us", 'string', 'both', 'jq', 'jqSer', 'bs', 'frontOb', 'handy', 'sty',
					'rules', 'flex', 'flexApps', 'boot', 'bb', 'bbCore', 'bbLs', 'bbTemplate',
					'bbApps', 'avail', 'bbLsApps', 'BfRoll', 'blog'
				]
			})
		}
	 
	
	$.fn.none = function () {
		return this.css('display', 'none')
	}
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Temp = function (i, h) {
		var s = ''
		return _.tp($('#' + i).html(), h || {})
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		s = "<script type='text/template'>" + s + "</script>"
		return $(s).id(i).A()
		_str = "<script type='text/template'>" + _str + "</script>"
		str = $(s)
		return _.tp($('#' + i).html(), h || {})
	}
	__ = 'fadsfasasdf'
	$Df = function (ob) {
		return $M({df: ob})
	}
//function qT_superTemplate() {
	qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
		return fn(ob, $el || $._d())
	}
	function QTexample() {
		function sampleTemplates() {
			$tp.thed = function (ob, $el) {
				return $el.A(
						$.thead().A(
								$.tr().K('header').A(
										$.th('Name'),
										$.th('Age')
								)
						)
				)
				// $tp.thed :  use like this:  t=qT(thed).a()
			}
			$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
				//two ways ok!!!!
//can pass:
//1) jq/el
				return $el.A($.li(ob.me), $.li(ob.me))
				//2)
				// or .... array
				return [$.li().A(ob.me), $.li().A(ob.me)]
			}
		}
		
		e = qT($tp.lii, {me: 'jason'}).a()
	}

//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	qT = function (fn, ob, el) {
		return fn(ob, $(el) || $.d())
	}
//a sample template
	lii = function (o, e) {
		return e(li(o.me), li(o.me))
	}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
	thed = function (o, e) {
		return e(
				thead()(
						tr().k('header')(
								th()('Name'), th()('Age')
						)
				)
		)
	}
// t=qT(thed).a()
	Temp = function (i, h) {
		var s = ''
		return _.tp(
				$('#' + i).html(), h || {}
		)
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		_str = "<script type='text/template'>" + _str + "</script>"
		str = $(s)
		return $(s).id(i).A()
	}
	listTp = function () {
		$.d().C('o').id('list-tp').A($.li().A($.a()))
	}
	$._x = function (col, title) {
		$.C(col || $r())
		if (title) {
			$.A($.h1(title), $.hr())
		}
	}
	$.x = function () {
		var g = G(arguments), bd = $.bd()
		bd.E()
		var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
		{col: g.f, title: g.s}
		if (o.css) {
			$s(o.css)
		}
		$._x(o.col, o.title)
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
		if (ob.vm) {
			OK(ob.vm)
		}
		if (ob.el) {
			els(ob.el)
		}
		if (ob.A) {
			_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
				q.A()
			})
		}
		if (ob._) {
			$.in(ob._)
		}
	}
	$.app = function () {
		var d = $.d.apply($, arguments)
		d.K('app').id('app')
		return d
	}
	$.fm = $.format = function () {
		$.fm.A = $s1 = s1 = section1 = $.span()
		$.fm.B = $s2 = s2 = section2 = $.span()
		$ctD = $.containerDiv(
				bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
	}
	BasicLayout = format = function () {
		section1 = s1 = $.sp()
		section2 = s2 = $.sp()
		$CtD(bs.row39(s1, s2))
	}
	$.fm = $.format = function () {
		$l('in fm')
		section1 = s1 = $.sp()
		section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
	};
	$.fm = $.format = function () {
		$l('in fm')
		section1 = s1 = $.sp()
		section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
	};
 $L('dataURL','nav','msg')
function dataURL() {
	Y.uPop = function (i, size) {
		i = (O(i) && F(i.u)) ? i.u() : i
		size = size || 300
		return $.c().WH(size, size).fit(i)
	}
	Y.dUD = function (d, n) {
		$.P('getImageById', {data: d}, function (u) {
			upop(u, n)
		})
	} //sk-send du of your (first) can-el
	Y.dU = function () {
		var u
		c = $.c().fit('me')
		u = c.toDataURL()
		k.emit('du', u);
		return u
	}
}
function nav() {
	$nav = function (pageName, rtr) {
		var nav = $.sp(pageName).K(pageName + '-nav')
		if (rtr) {
		}
		return nav
	}
	$.nav = $.n = function () {
		return $('<nav>')
	}
}
function msg() {
	_toFr = function (to, fr) {
		return {to: to, fr: fr}
	}
	$toFr = function (q) {
		return __toFr(q.body.to, q.u)
	}
	$mail = function (to, from, txt) {
		return {to: to, from: from, text: txt}
	}
	Ms = function (a) {
		return $.sp(a)
	}
	Ms$ = function (ms) {
		$.h1(ms)
	}
	$MS = function (ms, cHeader, cBody) {
		z()
		var m = $Ms(ms)
		if (S(cHeader)) {
			m.C(cHeader)
		}
		if (S(cBody)) {
			$.C(cBody)
		}
		return $
	}
	$Ms = function (ms) {
		//$.h1(ms)
		return $.d().fS(80).C($r()).col($r()).A(ms)
	}
}