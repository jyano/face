dfx = {
	tdTask: "td-task",
	tdHeader: "task-header",
	tdDate: "task-date", tdDesc: "task-desc",
	taskId: "task-", formId: "td-form",
	dataAttribute: "data",
	delDiv: 'delete-div'
}
//tagUp and add, return jQ
$.fn.qA = function (t) {
	return $('<' + t + '>').A()
}
$.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.fn.qAP = function (a, b, c) {
	this.qA(a).par(b, c)
	return this
}
//Quiz0 = function (title) {this.title = title}
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
//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
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
