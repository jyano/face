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
 
  