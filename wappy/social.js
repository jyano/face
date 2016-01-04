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