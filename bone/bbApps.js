__ = 'hjkhjkhjk hkjhjkhjk hjkjkhjhjhk hjkkjhjkhjkhjkhjkhjkhjkh  jkkjkjhjhkjhkh '
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.H = function (html) {
	$(html).A()
	return $
}
$.btAf = function (what) {
	return $.bt().iA(what)
}
$.fn.op = $.fn.prop
_rf = function (a) {
	a.refresh();
	return q
}
$.spSmMdLg = function () {
	return $.sp().A(
			$.cbDiv('sm', 'Small'),
			$.cbDiv('md', 'Medium'),
			$.cbDiv('lg', 'Large')
	)
}
$.fn.iCh = function () {
	return this.is(":checked")
}
$.fn.UI_iCh = function () {
	return this.iCh() ? "ui-icon-check" : "ui-icon-blank"
}
function threeCheckboxesHtml() {
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> ' +
	'<div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div>' +
	' <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
}
$cb$ = $CB$ = function (fn) {
	if (F(fn)) {
		fn()
	}
	//run checkbox widget on all checkbox elements
	$("input[type='checkbox']").checkbox()
}
CB$ = function (fn) {
	return function () {
		$CB$(fn)
	}
}
$.fn.wK = function () {
	return this.K('ui-widget')
}
$.chLb = function (lbTx) {
	return $.lb(lbTx, 'check').wK()
}
$.cbI = function (id) {
	return $.cb().id(id)
}
$.cbDiv = function (id, lbTx) {
	return $.d([$.cbI(id), $.chLb(lbTx || id)
	])
}
//UI-CHECK-BOX WIDGET
_create2 = function () {
	var wg = this
	var $el = this.element, ll = this.element
	wg._super()
	ll.K("ui-helper-hidden-accessible");
	wg.button = $.btAf($el)
			.K("ui-checkbox")
			.T("checkbox").button({
				text: false,
				icons: {primary: "ui-icon-blank"},
				create: function (e, ui) {
					$(wg).rmAt("title")
				}
			})
	wg._on(wg.button, {
		click: function (e) {
			var wg = this, ll = wg.element
			ll.prop("checked", !ll.iCh())
			_rf(wg)
		}
	})
	_rf(wg)
}
_refresh = function () {
	var wg = this, ll = wg.element
	wg.button.button("option", "icons", {
		primary: ll.iCh() ?
				"ui-icon-check" : "ui-icon-blank"
	})
}
_destroy = function () {
	var wg = this
	// Standard wg cleanup.
	wg._super();
	// Display the HTML checkbox and remove the button.
	wg.element
			.rmK("ui-helper-hidden-accessible")
	wg.button.button("destroy").rm()
}
_create1 = function () {
	
	// Call the default widget constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our widget class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.T("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			_rf(this);
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	_rf(this);
}
_create3 = function () {
	
	// Call the default wg constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our wg class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.text("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			this.refresh();
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	this.refresh();
}
ob1 = {
	_create: _create1,
	_destroy: _destroy,
	refresh: _refresh
}
ob2 = {
	_create: _create2,
	_destroy: _destroy,
	refresh: _refresh
}
ob3 = {
	_create: _create3,
	_destroy: _destroy,
	refresh: _refresh
}
CB1 = CB$(function () {
	$.H(html).wg("app.checkbox", ob1)
})
CB2 = CB$(function () {
	$.sp().A(
			$.d().A($.cb().id('sm'), $.chLb('Small')),
			$.d().A($.cb().id('md'), $.chLb('Medium')),
			$.d().A($.cb().id('lg'), $.chLb('Large'))
	).A()
	$.wg("app.checkbox", ob2);
})
CB3 = CB$(function () {
	$.H(html).wg("app.checkbox", ob3)
})
CB4 = CB$(function () {
	$.spSmMdLg()
	btOb = {
		text: false,
		icons: {
			primary: "ui-icon-blank"
		},
		create: function (e, ui) {
			$(this).rmAt("title");
		}
	}
	ob4 = {
		_create: function () {
			var wg = this, ll, $el;
			$el = ll = wg.element
			wg._super();
			// Hide the HTML checkbox, then insert our button.
			ll.K("ui-helper-hidden-accessible");
			// Configure the button by adding our wg class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			wg.bt = wg.button = $.btAf(ll).K("ui-checkbox").T("checkbox").button(btOb)
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			wg._on(this.button, {
				click: function (e) {
					var wg = this, ll = wg.element
					ll.prop("checked", !ll.iCh)
					_rf(wg);
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			_rf(wg)
		},
		_destroy: function () {
			this._super();
			// Display the HTML checkbox and remove the button.
			UI_hide(this)
			UI_btRm(this)
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.UI_iCh()
			})
		}
	}
	$.wg("app.checkbox", ob4)
})
availableMeals = [
	{mealName: "Standard (sandwich)", price: 0},
	{mealName: "Premium (lobster)", price: 34.95},
	{mealName: "Ultimate (whole zebra)", price: 290}
]
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
$.pop = function (message, ops) {
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
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
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
}
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
F.pD = function (fn) {
	return function (ev) {
		ev.preventDefault()
		return fn(ev)
	}
}
$.HR = function () {
	return $.hr().A()
}
$.fn.ac = function (ac) {
	return this.attr('action', S.eL(ac))
}
$.fn.stPr = function () {
	this.click(function (ev) {
		ev.stopPropagation()
	})
	return this
}
$.fn.eH4 = function (tx) {
	return this.E($.h4(tx))
}
$.fn.eH1 = function (tx) {
	return this.E($.h1(tx))
}
$.ok = function (fn) {
	return $.bt('ok', fn)
}
$.okPD = function (fn) {
	return $.ok(function (ev) {
		_.pD(ev)
		return fn(ev)
	})
}
$.lIp = function (lbTx, id) {
	var ip = $.ip()
	ip.id(id || lbTx)
	var p = $.p()
	p.A($.lb(lbTx + ': '), ip)
	p._ip = ip
	return p
}
$.fo = function (title, chArr, fn) {
	var f = $.f()
	f.A($.h1(title))
	if (A(chArr)) {
		_.e(chArr, function (ch) {
			f.A(ch)
		})
	}
	if (F(fn)) {
		f.A($.okPD(fn))
	}
}
$.fAc = function (ac) {
	return $.f().ac(ac)
}
$.ipStPr = function (id) {
	var ip = $.ip().stPr()
	if (S(id)) {
		ip.id(id)
	}
	return ip
}
$.spC = $.spCA = function (C, CH) {
	var g = G(arguments)
	var $el = $.sp()
	$el.C(C)
	A(CH) ? _.e(CH, add) : _.e(g.r, add)
	return $el
	function add(ch) {
		$el.A(ch)
	}
}
$.btC = $.btCA = function (C, chArr, fn) {
	var bt = $.bt(' ', fn).C(C)
	_.e(chArr, function (ch) {
		bt.A(ch)
	})
	return bt
}
$.okP = $.okPo = function (url, da, fn) {
	$.okPD(function () {
		$.P(url, da, fn)
	})
}
$.iV = function (id) {
	return $(S.eL(id, '#')).v()
}
$.IV = function (id) {
	return $(S.eL(id, '#')).V()
}
$.IVOb = function () {
	var g = G(arguments)
	var ob = {}
	_.e(g, function (arg) {
		ob[arg] = $.IV(arg)
	})
	return ob
}
$.fn.su = function (fn) {
	var $el = this
	$el.submit(fn)
	return $el
}
$.fn.suPD = $.fn.suPrDf = function (fn) {
	var $el = this
	$el.su(function (ev) {
		$.pD(ev)
		fn(ev)
	})
	return $el
}
$.P$d = function (url, ipId, title) {
	$.P(url, $.IV(ipId), $cDFn(title))
}
$.cDFn = function (title) {
	return function (da) {
		$cD(title, da)
	}
}
$.cD = function () {
	var g = G(arguments), o
	o = (g.S_ && g.s) ?
	{title: g.f, da: g.s} :
			g.S_ ? {title: g.f, da: window[g.f]} :
			{da: g.f}
	$l(o.title + ' ->')
	console.dir(o.da)
	return o.da
}
$.dHr = function () {
	var d = $.d.apply($, arguments)
	return $.d().A(d, $.hr())
}
$.pD = _.pD = function (ev) {
	ev.preventDefault()
	return ev
}
function temp() {
	g('/user', function (q, p) {
		Ur.fi(p.daFn($user))
	})
	G('user/:un', function (q, p) {
		Ur.f1(
				q.un_(),
				p.daFn($user))
		p.j($user(user))
	})
	$post('/user', function (q, p, nx) {
		Ur.cr(q.b, function (z, user) {
			q.ss.un = user.un
			q.ss.sv(function () {
				p.js(user.un)
			})
		})
	})
	$a.de('/user', function (q, p) {
		Ur.rm(q.b, _json(p))
	})
	$user = function (o) {
		if (A(o)) {
			return _.m(o, $user)
		}
		return {
			id: o.id,
			un: o.un,
			mug: o.mug,
			sts: o.sts || 'no status'
		}
	}
}

$.fS = function (size) {
	$s({$: {fS: (N(size, 40))}})
	return $
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
$tp = window['$tp'] || {}
$.fn.none = function () {
	return this.css('display', 'none')
}
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
Ap = {M: {}, C: {}, V: {}, T: {}}
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
dfx = {
	tdTask: "td-task",
	tdHeader: "task-header",
	tdDate: "task-date", tdDesc: "task-desc",
	taskId: "task-", formId: "td-form",
	dataAttribute: "data",
	delDiv: 'delete-div'
}
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
bksArr = [
	{title: 'yaba daba', author: 'wanda'},
	{title: 'clawface', author: 'deez nuts'},
	{title: 'under the knee', author: 'p .qu rstly'}
]
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
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
//Quiz0 = function (title) {this.title = title}
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
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
rtsOb = rtsOb2 = {
	rt: {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	},
	image: function (id) {
		$l('image===')
		_.t(10, function () {
			$l($r() + '-id: ' + id)
		})
		$.bd().C('z')
	},
	h: function () {
		alert('you are viewing MEDICAL page')
	},
	x: function () {
		alert('you are viewing index')
	},
	viewImage: function () {
		alert('you are viewing a BOARD CERTIFICATION image')
	}
}
rtsOb6 = rtsOb1 = {
	routes: {
		'': 'home',
		'view': 'view',
		':id': 'en',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	},
	home: function () {
		$l('home')
	},
	view: function () {
		$l('image')
	},
	en: function (id) {
		$l('id:' + id)
	}
}
rtsOb3 = {
	r: {
		hello: 'hi',
		goodbye: function () {
			$.C('o')
		}
	},
	_: function () {
		$l('indexxxxx')
		$.C('p')
	},
	hi: function () {
		$.C('g');
		alert('well hi there!')
	},
	d: function () {
		$.C('z')
		$.A(
				$.sp('d e f a u l t')
						.fS(30).C('g').col('w')
		)
	}
}
rtsOb4 = {
	r: {
		':post/:id': 'pam',
		'post/*id': 'splatMustBeLast',
		'*post': 'splat'
	},
	pam: function (post, id) {
		$l('Get post ' + id)
		$l('fnPam: ' + post + ', id# ' + id)
	},
	splat: function () {
		alert('1')
	},
	splatMustBeLast: function () {
		alert('2')
	},
	d: function (a) {
		$l('ddddddddd:' + a)
	},
	e: function (a) {
		$l('eeeeeeeee:' + a)
	}
}
TKZ = function () {
	tasksC = _C(_M())([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	viw = $.ol.V({
		I: function () {
			this.all('all', 'R')
		},
		R: function () {
			return this.E().e(this.add1)
		},
		add1: function (tsk) {
			$.li.V({
				model: tsk,
				I: function () {
					this.$h(this.get('title'))
				}
			}).$el.a2(this.$el)
		},
		cl: tsksC
	})
	viw.ren().$el.A()
	$.bt('add', function () {
		tsksC.add([{
			title: 'yooo',
			prior: 4
		}])
	})
}
BBVT5 = function () {
	COMS = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	$.d('y').id('ct').A($.bt('Load', function () {
		v.r()
	}), $.ul().id('list'))
	Vw = Bb.V.x({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		E: {
			'click button': function () {
				$l('click');
				this.R()
			}
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp,
					ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone().find('a').hr('href', da.h).T(da.t).end())
			})
		}
	})
	m = $M()({d: BBVTdArr})
	md = new Bb.M({d: COMS})
	vw = new Vw({blOp: 'empty!', model: md})
	new v({blOp: 'empty!', m: m = $M()({d: COMS})})
	v = Vw({zm: m, blOp: 'emp!'})
}
XCHANGECOL = PROMPTCOLOR = function () {
	z()
	d = $.dA(400, 400, 300, 200)
	Md = $$M({
		promptColor: function () {
			this.s({
				co: prompt('color:')
			})
		}
	})
	sb = Md()
	sb.on('change:co', function (mod, col, ops) {
		$l('new color!: ' + col);
		d.C(col)
	})
	sb.s({co: 'g'})
	_.in(2, function () {
		sb.promptColor()
	})
}
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
XDEFAULT = function () {
	Md = _M({defaults: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		R: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		I: function () {
			this.$el.A().C('r').col('b').fS(149);
			this.R()
		}
	})
	md = Md()
	vw = Vw({m: md})
}
BB5 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
VD1 = BB7 = BVD = MVD = function () {
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			this.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			this.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(1, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
VD2 = XBACKVALL = function () {
	$l('backvall')
	Md = $$M({
		defaults: {lame: true},
		validate: function (at) {
			$l('in validate')
			_at = at
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			var t = this
			t.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			t.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(3, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
ACE = ADDCHICKEVENT = function () {
	$s({i: {w: 50, h: 50}})
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
	Cl = $$C({})
	cl = Cl().oA(function (s) {
		$.A($.h1("new!!!!!! " + s.g('n')))
		$.i('chicks').A()
	}).A([{n: 'g1'}, {n: 'g2'}])
	ev = _.x({}, Bb.E)
	ev.b("fun:had", function () {
		$.A($.h1("yaaaaaaaaaaaa!!!!!! "))
		$.i('guy').A()
	})// bind? on?
	ev.tr("fun:had")//trigger  //it'll alert "wee!"
}
VIEW = function () {
	$.fn.V = function (ob) {
		ob = ob || {};
		ob.el = this
		return $V(ob)
	}
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw = _V({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	Vw = V$({
		el: q = $.dA('g', 400, 400, 200, 200),
		R: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.R()
			})
		},
		I: function () {
			this.R()
		}
	})
	Vw2 = V$({
		R: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		I: function () {
			this.R()
		}
	})
	new Vw()
	$.bt('orange', function () {
		new Vw2({el: $.d('O', 500, 500)})
		Vw({el: $.d('O', 500, 500)})
	})
}
NJA = MDV = MVW = BMV = XMDVW = function () {
	Md = _M({d: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		_: 'some-per', k: 'per',
		R: function () {
			this.$el.A('n').A()
		},
		I: function () {
			this.R()
		}
	})
	md = Md()
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.md = ob.m = this
		return Vw(ob)
	}
	md.V(Vw)
	_.in(1, function () {
		$.C('R')
		md.l()
		$Ms(J.s(md.J()))
	})
}
XDIVADD = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = V$({
		R: function () {
			q.A($.ul(['hello']))
		},
		I: function () {
			$l('init')
			this.R()
		}
	})
	new Vw()
	_.ev(1, function () {
		new Vw()
	}) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
}
PEP = function () {
	$.x('x', 'bb view people')
	peep = peep
	Vw = $$V({
		t: 'ul',
		r: function () {
			var vw = this, q = vw.$el.E();
			_.e(vw.collection, function (p) {
				var li = $.li([p.n + '(' + p.a + ')'])
				q.A(li)
			});
			return this
		},
		i: function () {
			this.$el.C('y')
		}
	})
	vw = Vw({cl: peep})  // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.R().el)
	_.in(function () {
		peep.pop();
		vw.R()
	})
}
LEN = function () {
	$Ms('CLLEN')
	Td = $$M({df: {tt: '', completed: false}});
	Md = $$M({
		d: {tt: '', completed: false}
	})
	Cl = $$C({
		md: Md
	})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = $$C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
DIR = DIRECTORYADMIN = DIRECATMIN19 = function () {
	$CSS(CssOb);
	$.dI('wrapper', [
		$('<h1>').A('games directory').col('o'),
		$.dK('tools', [
			$('<h4>').col('g').A('search:'), $.br(),
			$('<input>').id('searchBox'), $.br(),
			$('<h5>').col('y').A('Filter:'), $.dI('filter'),
			$.dI('count')
		]),
		$.ulI('listing', [])
	])
	app = {m: {}, v: {}, r: {}, c: {}}
	app.m.Person = M$({
		defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
		initialize: function () {
			this.set('type', this.get('par') ? 'student' : 'parent')
		}
	})
	app.c.People = C$({
		model: app.m.Person,
		comparator: function (per) {
			return per.get('lN')
		}
	})
	app.i = function () {
		direc = new app.v.People(dirData)
		rtr = new app.r.Rtr()
		// Bb.h.start()
	}
	app.r.Rtr = Bb.R.x({
		routes: {
			'filter/:type': 'urlFilter'
		},
		urlFilter: function (type) {
			direc.filterType = type
			direc.trigger('change:filterType')
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.R().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.R()
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.R().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.R()
		}
	})
	app.i(dirData)
}
ADDD = function () {
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.M.x({})
	App.Views.Task = Bb.V.x({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Bb.C.x({model: App.Models.Task})
	App.Views.Tasks = Bb.V.x({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	tasksView = new App.Views.Tasks({
		collection: tasksCollection
	})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([
			{title: 'yooo', prior: 4}
		])
	})
	TKZA = function () {
		tasksC = _C({model: _M()})([
			{title: 'game', prior: 3}, {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
		$.A(_V({
			initialize: function () {
				var view = this;
				view.collection.on('all', function () {
					view.ren()
				})
			},
			tagName: 'ol', ren: function () {
				this.$el.E()
				this.collection.each(this.addOne, this)
				return this
			},
			addOne: function (task) {
				this.$el.A(_V({
					tagName: 'li',
					events: {'click .edit': 'editTask'},
					showAlert: function () {
						alert('click')
					},
					editTask: function () {//alert('you are edititing the task')
						newTaskTitle = prompt('what would you like to change the text to?',
								this.model.get('title'))
						this.model.set('title', newTaskTitle)
					},
					ren: function () {
						this.$el.html(this.model.get('title'))
						return this
					}
				})({model: task}).ren().el)
			}
		})({collection: tasksC}).ren().el)
		$.bt('add', function () {
			tasksC.add([{title: 'yooo', prior: 4}])
		})
	}
}
SAMP = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab()
					.LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({
			model: md
		})
		r.rr().$el.a2(d)
	})
}
ADD = function () {
	$$$('TKZ');
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.Model.extend({})
	App.Views.Task = Bb.View.extend({
		tagName: 'li',
		events: { //'click':' showAlert',
			'click .edit': 'editTask'
		},
		showAlert: function () {
			alert('you clicked me')
		},
		editTask: function () {//alert('you are edititing the task')
			newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
			this.model.set('title', newTaskTitle)
		},
		render: function () {
			this.$el.html(
					this.model.get('title')
			)
			return this
		}
	})
	App.Collections.Tasks = Bb.Collection.extend({model: App.Models.Task})
	App.Views.Tasks = Bb.View.extend({
		initialize: function () {
			var view = this
			this.collection.on('all', function () {
				view.render()
			})
		},
		tagName: 'ol',
		render: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this
		},
		addOne: function (task) {
			var taskView = new App.Views.Task({model: task})
			this.$el.append(taskView.render().el)
		}
	})
	tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
		{title: 'store', prior: 5}, {title: 'haha', prior: 3}])
	tasksView = new App.Views.Tasks({collection: tasksCollection})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([{title: 'yooo', prior: 4}])
	}).button()
}
BBEV = function () {
	$.x().i('chicks')
	ev = bb.Ev()
	ev.b("fun:had", // bind? on?
			function () {
				alert("wee!")
			})
	//trigger
	ev.tr("fun:had")  //it'll alert "wee!"
}
BB220 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = Bb.V.x({
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
	new Vw({
		I: 1,
		el: dv
	})
}
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
CLICK1 = VWW = function () {
	d = $.d('r', 200).A(
			$.h1('hello'),
			$.bt(__)
	)
	//d.$(function(){v.r()})
	mOv = function () {
		$l('mouse over !')
	}
	v = V$({
		E: {
			'click button': function () {
				$l('$')
			},
			$$: 'R',
			v: mOv
		},
		el: d,
		R: function () {
			alert('double click')
			$.bd().C($r())
		}
	})
	new v()
}
CHAINB2 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().filter(function (i) {
				return i.g('a') > 10
			}).m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
CHAINB1 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
CHB = CHAINB = function () {
	
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	Cl = C$()
	new Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	return
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
USM = USMETS = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = _M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
COUNTER0 = function () {
	Td = $$M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $$c().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	TdsCl = $$c()
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
}
CNTR = COUNTER = function () {
	Td = _M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	TdsCl = _Cl()()
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
}
FRND = function () {
	FRND = function () {
		$.x().h1('backcl')
		Frnd = $M({d: {lame: 1}})
		f1 = Frnd({n: "Lul", a: 67})
		f2 = Frnd({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = $M({
			d: {lame: true},
			i: function () {
				var t = this
				t.on('error', function (m, e) {
					alert(3);
					$l(e)
				})
				t.on('change:n',
						function (m, e) {
							alert(3);
							$l(e)
						})
			},
			v: function (at) {
				if (at.n == 'rigo') {
					return "n cant be rigo!"
				}
			}
		})
		p = Per({n: "rigo", a: 7})
		cl = $Cl()()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = $Cl({m: Per})
		pers = Pers()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	Friend = _M({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = _C()()
	f1 = c.add(f1)
	f2 = c.add(f2)
	c.rm(f1)
	PERS = function () {
		$.x()
		Per = _M({})
		p1 = Per({n: 'j'})
		p2 = Per({n: 'y'})
		Pers = _C({model: Per})
		pers = Pers([p1, p2])
	}
}
USMETS0 = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = $$M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
CHAINABLE0 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(), which  terminates chain and returns resulting array
	Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
BACKSETR = function () {
	$.x()
	Sb = Sidebar = Bb.m.e({
		ask: function () {
			this.s({c: prompt("color?")})
		}
	})
	sb = Sb.o()
	sb.on('change:c', function (md, c) {
		$('body').C(c)
	})
	sb.set({c: 'b'})
	sb.ask()
	//right from ko site
	d = $.dA(400)
	Sid = Bb.M({
		promptColor: function () {
			this.s({
				co: pr('color:')
			})
		}
	})
	sb = Sid()
	sb.on('change:co', function (md, c) {
		d.C($l(c))
	})
	sb.C('w')
	sb.ask()
	Per = Bb.M.e({
		i: function () {
			alert("Welcome")
		}
	})
	p = Per({})
	p.s({n: "mac", a: 67})
	$.dA(300).id('sb')
	Sidebar = Bb.M.e({
		fn: function () {
			return this.s({
				c: prompt("c?")
			})
		}
	})
	Sidebar().oC('c', function (m, c) {
		$('#sb').C(c)
	}).s({c: 'w'}).fn()
}
BABY = function () {
	$d(m = new Bb.M({}))
}
ITEMS = function () {
	Router = bbR({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	router = Router()
	Ap = {
		M: {}, V: {}, C: {}
	}
	Ap.M.item = bbM({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	$start()
}
///  START PERFECT ////
XMDGET = function () {
	Md = _M()
	md = Md({n: 'j'});
	$.h3('p: ' + md.g('n'))
}
XEXTEV = function () {
	$.x('o', 'EXTEV')
	o = _.x({}, Bb.E)
	o.on('yo', function () {
		$.sp(G(arguments)).fS(50)
	})
	o.trigger('yo', 'a', 'b', 'c')
}
XEVENTS = EVS = function () {
	$.x('o', 'beauty')
	q = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))
	Vw = $$V({
		el: q, r: function () {
			$.C($r())
		},
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'r',
			'mouseover': function () {
				q.C($r())
			}
		}
	})
	Vw()
}
XCHANGE = function () {
	Md = M$()
	Vw = V$({
		r: function () {
			return this.h(this.g('rx'))
		},
		i: function () {
			var vw = this;
			vw.r();
			vw.oC(function () {
				vw.r()
			})
		}
	})
	$.x('x', 'bbv');
	$('body').fS(30)
	div = $.dA('o', 300, 400).XY(200, 200)
	ip = $.ip()
	$.bt('change', function () {
		m.s('rx', ip.v())
	})
	m = new Md({rx: 'antibiotic'})
	new Vw({
		el: div,
		m: m
	})
}
BACKVAL4 = function () {
	Person = _M({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BBVT4 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = _V({
		q: '#ct',
		events: {'click button': 'r'},
		R: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		I: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $$M({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
	md = $$m({
		df: [{t: 'a.com', h: 'a.com'},
			{t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = _V({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		E: {'click button': 'rr'}
	})
	vw = Vw({
		blOp: 'empty!',
		model: md
	})
	return vw
}
BB15 = BBC = PEPOP = function () {
	$.x('x', 'bb view people')
	vw = $V({
		t: 'ul',
		collection: peep,
		ren: function () {
			var vw = this
			var q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		},
		i: function () {
			this.ren().$el.C('y').A()
		}
	})
	// alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		R: function () {
			q.A($.ul(['hello']))
		},
		I: function () {
			this.R()
		}
	})
	new q.$V({
		R: function () {
		},
		I: function () {
		}
	})
}
MDVW = function () {
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	m = $M({d: {n: 'j', a: 20, o: 'p'}})
	m.V($$V({
		t: 'li', _: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	}))
	_.in(2, function () {
		$.C('R')
		$l('- - --- - - - - ')
		m.l()
	})
	function old() {
		PERVY = function () {
			$.x('n')
			$$V({
				t: 'li', _: 'some-per', k: 'per',
				r: function () {
					this.A('n').A()
				},
				i: function () {
					$l(this.model);
					this.r()
				}
			})({
				m: $M({d: {n: 'j', a: 20, o: 'p'}})
			}) //-> p.V(PerV)
		}
	}
}
VALIDCOL = VALIDATECOLLECTION = function () {
	Per = $$M({
		I: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	Per = _M({
		i: function () {
			this.oIv(function (m, z) {
				$l(z)
			})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (at) {
			if (at.a < 0) {
				return 'a<0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34})
	p.oIv(function (m, z) {
		$l('err: ' + z)
	})
	PerV = _V({
		t: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		//tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var v = this
			//this works, but doesnt use a template
			v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
			v.h(v.tJ())
		}
	})
	pV = PerV({m: p})
	peepC = _Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = _V({
		tn: 'ul',
		i: function () {
			$l('hi');
			$l(this.cl)
		},
		r: function () {
			var vw = this
			vw.eCl(function (p) {
				var v, pV
				$l(p.g('n'))
				pV = PerV({m: p})
				$l(pV.el)
				vw.q.A(pV.el)
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
	/*
	
	 md.validate() checking attr vals  prior to setting them.
	
	 By default occurs when md is persisted using save() or when set() is called if {vld:true}
	
	 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
	 .save() will not continue and atts of md will not be modified on server.
	
	 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
	 This object is distinct from current atts of md  and from  pams passed to operation.
	
	 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
	
	
	 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	
	
	 */
}
BB10 = PVR = PER = function () {
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
FLCL030 = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = Bb.V.e({
	 ev: {'click #run': 'runFilter'},
	 runFilter: function(e){e.pD();
	 this.fl = {
	 // ... get the filter info from the DOM
	 }; this.rr()},
	 rr: function(){// get the filtered list from the collection
	 // iterate over the filtered list and render the results in to the html array
	 // populate the DOM with the resulting HTML
	 HT=[]
	 _.e(this.cl.where(this.fl),
	 function(item){HT.push(
	 _.tp($('my-item-template').H())(item.tJ())
	 )})
	 this.$el.html(HT); return this }
	 })*/
	Cl = $$C({
		i: function () {
		}
	})
	cl = Cl({})
	/*
	 cl.add([{a: 'f', b: 's'},
	 {a: 't', b: 's'},
	 {a:'f', b: 's'},
	 {a: 's', b:'t'}
	 ])
	
	
	 res = cl.where({a:'f',b:'s'})
	 */
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
FLCL02 = function () {
	$.x('r', 'filtering a cl, but tp missing?!')
	// ... get the filter info from the DOM
	// get the filtered list from the collection
	// iterate over the filtered list and render the results in to the html array
	// populate the DOM with the resulting HTML
	FlV = $V({
		ev: {'click #run': 'runFilter'},
		runFilter: function (e) {
			e.pD();
			this.fl = {};
			this.r()
		},
		r: function () {
			HT = [];
			_.e(this.cl.where(this.fl),
					function (item) {
						HT.push(_.tp($('my-item-template').H())(item.tJ()))
					})
			this.q.h(HT);
			return this
		}
	})
	Cl = $$C({
		i: function () {
			$l('fuck')
		}
	})
	cl = Cl()
	cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
	res = cl.where({a: 'f', b: 's'})
	_.e(res, function (q) {
		var j = q.tJ();
		$.h1(j.a + ' !@@@##@ ' + j.b)
	})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
PEOPL = function () {
	$.x()
	Per = $$M({
		i: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		d: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
		tn: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(
					t.T(
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
PEOPL = function () {
	$.x()
	Per = $$M({
		i: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		d: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
		tn: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(
					t.T(
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
DELETE1 = function () {

//bind bt 'click' to parent.rem
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
	$.h1('KKJJKJKJK')
}
BB2 = DFM = function () {
	$V({
		el: $.li(),
		ren: function () {
			this.$el.A('n: ' + this.model.get('n'))
			return this
		},
		i: function () {
			this.$el.C('r', 'b').fS(149)
			this.ren()
		},
		m: $Df({n: 'j'})
	})
}
BB3 = BVR = VWR = DIVADD = function () {
	Vw = _V({
		el: $.dI('d1', 'r', 500, 500),
		ren: function () {
			this.$el.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	_.t(4, function () {
		Vw()
	})// alpha! <- 
	//q.V({r: function () { }, i: function () {  }})()
} 
PEEP3 = SWEEET = function () {
	$.x('x', 'bb view people')
	Vw = V$({
		el: ul = $.ul(),
		I: function () {
			this.r().C$('init..')
		},
		R: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A($.li([p.n, '(', p.a, ')']))
			})
			return this
		}
	})
	vw = Vw({cl: peep})
	_.in(function () {
		peep.pop();
		vw.r()
	})
}
SWEET3 = BBVP = BBVIEWPEOPLE = function () {
	$.x('x', 'bb view people')
	Vw = $.ulV({
		I: function () {
			this.$el.C($r())
		},
		R: function () {
			var el = this.$el.E()
			this.collection(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = new Vw({
		cl: peep = peep
	})
	/*
	
	 $.A(vw.r().q)
	 _.in(function(){peep.pop(); vw.r()},'*')
	 */
	Vw = $.ulV({
		i: function () {
			this.q.C($r())
		},
		r: function () {
			var el = this.q.E()
			this.cl(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = Vw({
		cl: peep = peep
	})
	$.x('x', 'bb view people')
	Vw = $V({
		el: $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A(
						$.li([p.n, '(', p.a, ')'])
						//ul.li(p.n, '(', p.a, ')')
				)
			})
			return this
		}
	})
	Vw = $.ulV({
		i: function () {
			this.q.C($r())
		},
		r: function () {
			var el = this.q.E()
			this.cl(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = Vw({cl: peep})
	//$.A(vw.r().q)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BBSORT = function () {
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
}
INDEXSORT0 = function () {
	tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
		tt: '  Aust',
		completed: true
	}])
	tds.forEach(function (md) {
		$l(md.g('tt'))
	}) //   Belgium.//   China. //   Austria.
	// sortBy()- sort a cl on spec attr, ex: sortByAlph
	tds.sortBy(function (td) {
		return td.g("tt").tLC()
	}).forEach(function (m) {
		$l(m.g('tt'))
	}) // go to Austria. // go to Belgium. // go to China.
	count = 1;
	$l(tds.map(function (md) {
		return count++ + ". " + md.g('tt')
	})) //1. go to Belgium. //2. go to China. //3. go to Austria.
	tds.max(function (m) {
		return m.id
	}).id;
	tds.min(function (m) {
		return m.id
	}).id
	//  pluck() extract  spec attr
	captions = tds.pluck('caption') // returns list of captions
	// filter()  ex: Filter by array of md IDs
	Tds = $Cl({
		md: Td, filterById: function (ids) {
			return this.mds.filter(function (c) {
				return _.contains(ids, c.id)
			})
		}
	})
	//   indexOf() return index of particular item within cl
	peop = $cl()
	peop.comparator = function (a, b) {
		return a.g('n') < b.g('n') ? -1 : 1
	}
	peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
	peop.indexOf(rob)//0
	peop.indexOf(tom)//2
}
BB19 = RESET = function () {
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
///////////////////////////////////////////////////////
	//  replace  entire cl  content
	TdsCl = $cl()
	// we can listen for reset evs
	TdsCl.on("reset", function () {
		$l("Cl reset.")
	})
	TdsCl.A([{
		tt: 'go to Jamaica.', completed: false
	}, {
		tt: 'go to China.',
		completed: false
	},
		{tt: 'go to Disneyland.', completed: true}]);
	$l('Cl size: ' + TdsCl.length); // Cl size: 3
	TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
	// Above logs 'Cl reset.'
	$l('Cl size: ' + TdsCl.length); // Cl size: 1
	// use reset with no arguments to clear outcl completely.
	//  This is handy when dynamically loading new page of results
	// where you want to blank out current page of results.
	//myCl.reset()
	// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
	// The reason you might want to use this is to perform super-optimized
	//rendering in extreme cases where individual evs are too expensive.
	td = $M()
	tds = $Cl([td]).on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
		$l(ops.prevMds);
		$l([td]);
		$l(ops.prevMds[0] === td); // true
	})
	tds.reset([])
	// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
	Beat = $M({d: {job: 'mus'}})
	john = Beat({fN: 'John', lN: 'Lennon'});
	paul = Beat({fN: 'Paul', lN: 'McCartney'});
	george = Beat({fN: 'George', lN: 'Harrison'});
	ringo = Beat({fN: 'Ringo', lN: 'Starr'});
	theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
	pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
	theBeats.s([john, paul, george, pete]); // Update cl
	// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
	// Updates any of John, Paul and Georges's atts that may have
	// changed over years.
	// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
	function more() {
		//  replace  entire cl  content
		TdsCl = $cl()
		// we can listen for reset evs
		TdsCl.on("reset", function () {
			$l("Cl reset.")
		})
		TdsCl.A([{
			tt: 'go to Jamaica.', completed: false
		}, {
			tt: 'go to China.',
			completed: false
		},
			{tt: 'go to Disneyland.', completed: true}]);
		$l('Cl size: ' + TdsCl.length); // Cl size: 3
		TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
		// Above logs 'Cl reset.'
		$l('Cl size: ' + TdsCl.length); // Cl size: 1
		// use reset with no arguments to clear outcl completely.
		//  This is handy when dynamically loading new page of results
		// where you want to blank out current page of results.
		myCl.reset()
		// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
		// The reason you might want to use this is to perform super-optimized
		//rendering in extreme cases where individual evs are too expensive.
		td = $M()()
		tds = $Cl([td])()
				.on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
					$l(ops.prevMds);
					$l([td]);
					$l(ops.prevMds[0] === td); // true
				})
		tds.reset([])
		// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
		Beat = $M({d: {job: 'mus'}})
		john = Beat({fN: 'John', lN: 'Lennon'});
		paul = Beat({fN: 'Paul', lN: 'McCartney'});
		george = Beat({fN: 'George', lN: 'Harrison'});
		ringo = Beat({fN: 'Ringo', lN: 'Starr'});
		theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
		pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
		theBeats.s([john, paul, george, pete]); // Update cl
		// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
		// Updates any of John, Paul and Georges's atts that may have
		// changed over years.
	}
}
RESETCL = function () {
	
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
	// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
}
THOUGHTS = function () {
	$.get('/thoughts', function (obs) {
		_.e(obs, function (ob) {
			$.h1('ob: ' + ob.un)
		})
	})
}
BB16 = COLLECTIONONADD = CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB17 = COLLECTIONLENGTH = TDS = CRM = CLLEN = function () {
	Td = _M({df: {tt: '', completed: false}});
	Md = _M({
		d: {tt: '', completed: false}
	})
	Cl = _C({md: Md})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = _C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
BB18 = FLCL = FILTERCOLLECTION = function () {

//$.x('r', 'filtering a cl:')
	FlV = Bb.V.x({
		ev: {'click #run': 'runFilter'},
		runFilter: function (e) {
			e.pD();
			this.fl = {
				// ... get the filter info from the DOM
			};
			this.rr()
		},
		rr: function () {// get the filtered list from the collection
			// iterate over the filtered list and render the results in to the html array
			// populate the DOM with the resulting HTML
			HT = []
			_.e(this.cl.where(this.fl),
					function (item) {
						HT.push(
								_.tp($('my-item-template').H())(item.tJ())
						)
					})
			this.$el.html(HT);
			return this
		}
	})
	///
	Cl = _C({
		i: function () {
		}
	})
	cl = Cl({})
	cl.add([
		{a: 'f', b: 's'},
		{a: 't', b: 's'},
		{a: 'f', b: 's'},
		{a: 's', b: 't'}
	])
	res = cl.where({a: 'f', b: 's'})
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
function filteredCol() {
	// collections:
	FLCL004 = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = Bb.V.e({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		 this.$el.html(HT); return this }
		 })*/
		Cl = C$({
			I: function () {
			}
		})
		cl = new Cl({})
		/*
		 cl.add([{a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a:'f', b: 's'},
		 {a: 's', b:'t'}
		 ])
		
		
		 res = cl.where({a:'f',b:'s'})
		 */
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	FLCL0 = function () {
		$.x('r', 'filtering a cl, but tp missing?!')
		// ... get the filter info from the DOM
		// get the filtered list from the collection
		// iterate over the filtered list and render the results in to the html array
		// populate the DOM with the resulting HTML
		FlV = $V({
			ev: {'click #run': 'runFilter'},
			runFilter: function (e) {
				e.pD();
				this.fl = {};
				this.r()
			},
			r: function () {
				HT = [];
				_.e(this.cl.where(this.fl),
						function (item) {
							HT.push(_.tp($('my-item-template').H())(item.tJ()))
						})
				this.q.h(HT);
				return this
			}
		})
		Cl = $$C({
			i: function () {
				$l('fuck')
			}
		})
		cl = Cl()
		cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
		res = cl.where({a: 'f', b: 's'})
		_.e(res, function (q) {
			var j = q.tJ();
			$.h1(j.a + ' !@@@##@ ' + j.b)
		})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
}
function clicks() {
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('GAPS IN HISTORY')
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	})
}
Tsk = V$({
	el: $('#cont'),
	I: function () {
		this.r()
	},
	R: function () {
		this.$el.ht(Temp('task'))
	},
	E: {'click button': 'add'},
	add: function () {
		alert($('#task_desc').v() + ' task added')
	}
})
AP = TASK = function () {
	$.x('g', 'tasker');
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
	Ap.M.Tsk = $$M({})
	tsk1 = Ap.M.Tsk({
		title: 'go to the store',
		priority: 4
	})
	tsk2 = Ap.M.Tsk({
		title: 'go to the park',
		priority: 3
	})
	TskV = Ap.V.Tsk = $$V({
		t: 'li',
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(this.g('t'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	tskVw = Ap.V.Tsk({m: task1})
	Ap.C.Tsks = $$C({m: Ap.M.Tsk})
	tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var that = this
			//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.$el.A()
		}
	})
	tsksVw = Ap.V.Tsks({cl: tsks})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	$.d().id('container')
	r = $R({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})
	Bb.h.start({pushState: true})
}
DON = DONUTS = function () {
	Donut = bbM({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	DNUTS = MOD = function () {
		m = bbM({n: 'j'})
		bostonCream = Donut({
			n: 'Boston Cream',
			cream_filled: true
		})
		bostonCream.s({sprinkles: true})
		bostonCream.S() //save
		Donuts = bbC({
			m: Donut,
			url: "/donuts"
		})
		donuts = Donuts()
		donuts.fetch()// donuts.at(0); -> gets donuts by index.
		// donuts.get(0); -> gets donuts by id.
		// donuts.each(function(d){$l(d.get("name"))})
		// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
		// donuts.map(function(d){return d.get("name")})
		DonutShop = bbM({
			defaults: {n: "Untitled"},
			initialize: function () {
				var t = this
				t.donuts = Donuts()
				t.donuts.url = 'donut_shops/' + t.id + "/donuts"
			}
		})
		donutShop.oA(function (donut) {
			alert("added " + donut.get("name"))
		})
		lemonFilled = donutShop.donuts.a({
			n: "Lemon Filled"
		})
		a = Eve()
		a.o("fun:had", function () {
			alert("wee!")
		});
		a.e("fun:had")//it'll alert "wee!"
	}
	m = _M({n: 'j'})
	Donut = _M({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	bostonCream = Donut({
		n: 'Boston Cream',
		cream_filled: true
	})
	bostonCream.s({sprinkles: true})
	bostonCream.S() //save
	Donuts = bbC({
		m: Donut,
		url: "/donuts"
	})
	donuts = Donuts()
	donuts.fetch()// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	DonutShop = _M({
		defaults: {n: "Untitled"},
		initialize: function () {
			var t = this
			t.donuts = Donuts()
			t.donuts.url = 'donut_shops/' + t.id + "/donuts"
		}
	})
	donutShop.oA(function (donut) {
		alert("added " + donut.get("name"))
	})
	lemonFilled = donutShop.donuts.a({
		n: "Lemon Filled"
	})
	a = Eve()
	a.o("fun:had", function () {
		alert("wee!")
	});
	a.e("fun:had")//it'll alert "wee!"
}
function server() {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	AVAILSRV = function () {

//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
}
_VIEWS = function () {
	Ap.V.Avail = Bb.V.x({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = Bb.V.x({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
}
_COMMON = function () {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	_VIEWS()
}
$AVA$ = AVAILCOMMON = function () {
	_COMMON()
//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = new Ap.M.Avail({
			collection: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = V$({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		E: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			$(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = V$({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = new Ap.C.Avails
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = new Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	Bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
}
AVAIL2 = function () {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({c: qiv('newAvail')}).save()
		v.render()
	})
	$.d().id('availsDiv')
	Ap.T.Avail = function (model) {
		return $._d().W(400).H(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = _M({urlRoot: '/avail'})
	Ap.C.Avails = _C({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = _V({
		R: function () {
			this.$el.append(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'false')
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').ed(1)
		}
	})
	Ap.V.Avails = _V({
		el: '#availsDiv',
		I: function () {
			this.ren()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.append("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.append(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	v = Ap.V.Avails({collection: avs})//.render()
	avs.on('destroy', function (aa) {
		$l('destroy!!!!')
	})
}
function boneSetup() {
	Ap.M.Avail = $$M({urlRoot: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.V.Avail = $$V({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
}
AVAIL4 = function () {
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		Ap.M.Avail({c: qiv('newAvail')}).save()
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.$el.append(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'false')
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.append("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.append(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	v = Ap.V.Avails({collection: avs})//.render()
	avs.on('destroy', function (aa) {
		$l('destroy!!!!')
	})
}
AVAIL5 = function () {
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).cE(1)
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q(h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	avs.on('destroy',
			function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
}
AVAIL = function () {
	f = $M({
		defaults: {prop: 3},
		test: function () {
			$l(this.get('prop'))
		},
		test2: function (a) {
			var prop = this.get('prop')
			$l('prop: ' + prop)
			return prop
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	boneSetup()
	avs = Ap.C.Avails()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	Ap.V.Avails = $$V({
		el: '#availsDiv',
		i: function () {
			this.r()
		},
		r: function () {
			var t = this;
			t.collection.fetch({
				success: function () {
					t.q.H('');// t.$el.html('')
					t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				}
			})
		}
	})
	v = Ap.V.Avails({
		collection: avs
	})//.render()
	//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
}
function setup() {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).cE(1)
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q(h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	Ap.M.Avail = $$M({urlRoot: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.V.Avail = $$V({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avails = $$V({
		el: '#availsDiv',
		i: function () {
			this.r()
		},
		r: function () {
			var t = this;
			t.collection.fetch({
				success: function () {
					t.q.H('');// t.$el.html('')
					t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				}
			})
		}
	})
}
function status() {
	f = $M({
		defaults: {prop: 3},
		test: function () {
			$l(this.get('prop'))
		},
		test2: function (a) {
			var prop = this.get('prop')
			$l('prop: ' + prop)
			return prop
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	v = Ap.V.Avails({
		collection: avs
	})//.render()
//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted',
			function () {
				alert('modDel')
			})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
//  avs=Ap.C.Avails()
//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).a()
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
	di('availsDiv').a()
	avs = Ap.C.Avails()
	avs.on('destroy',
			function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
	AVAILold = function () {
		tx('new avail').id('newAvail').a()
		bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).a()
		di('availsDiv').a()
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.q(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).cE(1)
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q(h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		avs.on('destroy',
				function (j) {
					alert('i am col and i was destroyed')
					v.trigger('modelDeleted')
				})
		v = Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		a = bbM({
			defaults: {prop: 3},
			test: function () {
				console.log(this.get('prop'))
			},
			test2: function (a) {
				console.log(
						(function () {
							return this.get('prop')
						})()
				)
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		f = a()
	}
	v = Ap.V.Avails({
		collection: avs
	})//.render()
//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted',
			function () {
				alert('modDel')
			})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	avs = Ap.C.Avails()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
}
AVAIL1OLD = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		Ap.M.Avail({c: qiv('newAvail')}).save()
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.$el.append(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'false')
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.append("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.append(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	v = Ap.V.Avails({collection: avs})//.render()
	avs.on('destroy', function (aa) {
		$l('destroy!!!!')
	})
}
AVAILOLD = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).cE(1)
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q(h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	avs.on('destroy',
			function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
}
server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
//$mk.server = server
NOTES = function () {
	server = {
		d: 2,
		n: 2,
		docs: {
			1: {text: 'this is a doc', id: 1}
		},
		notes: {
			1: {1: {text: 'note'}, 2: {text: 'another note'}}
		},
		get: {
			'/docs': function (q, p) {
				var res = []
				for (var doc in docs) {
					if (docs.hasOwnProperty(doc)) {
						res.push(docs[doc])
					}
				}
				p.json(res)
			},
			'/docs/:did/notes': function (q, p) {
				var res = [], n = notes[q.params.id]
				for (var note in n) {
					if (n.hasOwnProperty(note)) {
						res.push(n[notes])
					}
				}
			}
		},
		post: {
			'/docs': function (q, p) {
				var doc = q.body
				doc.id = d++
				docs.doc.id = doc
				p.json(doc)
			},
			'/docs/:did/notes': function (q, p) {
				var note = q.body, id = q.params.id
				note.id = n++
				if (!notes[id]) {
					notes[id] = {}
				}
				notes[id][notes.id] = note
				p.json(note)
			}
		},
		put: {
			'docs/:id': function (q, p) {
				docs[q.params.id] = q.body
				p.json(q.body)
			},
			'docs/:did/notes:nid': function (q, p) {
				notes[q.params.id][q.params.nid] = q.body
				p.json(q.body)
			}
		}
	}
	Note = Bb.M.x({})
	Notes = Bb.C.x({
		m: Note,
		i: function (mds, op) {
			this.doc = op.doc
		},
		u: function () {
			return this.doc.url() + '/notes'
		}
	})
	Doc = Bb.M.x({
		i: function (op) {
			this.notes = new Notes([], {doc: this})
		},
		addNote: function (tx) {
			this.notes.create({
				text: tx
			})
		}
	})
	Docs = Bb.C.x({
		m: Doc, u: '/documents',
		i: function () {
			this.on('reset', this.getNotes, this)
		},
		getNotes: function () {
			this.each(function (doc) {
				doc.notes = new Notes([], {doc: doc})
				doc.notes.fetch()
			})
		}
	})
	ds = new Docs()
	ds.fetch()
}
NOTES = MINIMALBACKBONELOCALSTOREEXAMPLE = MINLS = function () {
	//Minimal Bb.localStorage example
	//THE MODEL AND THE COLLECTION
	//In order to use Bb.localStorage to save a model
	// we also need a collection.
	// The `localStorage` property of the collection
	// needs to be set to a new Bb.LocalStorage object
	// with an identifier for the collection
	// that is used when reading or writing the model values to LocalStorage.
	//The defaults function of the model
	// returns an object with a content property
	// that makes it easy to identify when the model was added to the collection
	// and if it's new or has been fetched from local storage.
	//ADDING AND SAVING NOTE MODELS
	//Bb collections have a fetch method that retrieves models from the server or,
	// in this case, local storage.
	//Before calling save on the model we need to add it to the collection,
	// otherwise Bb would attempt to use an Http request to store it on a server.
	myNotes = new NoteCollection()
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.sv()
	myNotes.models.forEach(function (md) {
		$l("Md in cl: " + md.g("content"))
	})
	function notes() {
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
	}
}
	
//uses C$:
AVAIL = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	Bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
}
SWEET = function () {
	$.x('x', 'bb view people')
	Vw = $V({
		el: $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.li(p.n, '(', p.a, ')')
			})
			return this
		}
	})
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	vw = Vw({cl: peep})
	$.in(function () {
		peep.pop();
		vw.r()
	})
	BBVP1 = function () {
		$.x('x', 'bb view people')
		Vw = $.ulV({
			i: function () {
				this.q.C($r())
			},
			r: function () {
				var el = this.q.E()
				this.cl(function (p) {
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})
		vw = Vw({
			cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		})
		/*
		
		 $.A(vw.r().q)
		 $.in(function(){peep.pop(); vw.r()},'*')
		 */
	}
}