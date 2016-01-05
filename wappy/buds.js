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