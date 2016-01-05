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
 
function mail(){
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
 