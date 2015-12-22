$RoApp = function (name, fn) {
	startRtr = function (name) {
		Bb.h.start({
			pushState: true,
			root: "/mvc/" + name + "/"
		})
	}
	$Fn(name, function () {
		Ap = {M: {}, V: {}, C: {}}
		$l('name: ' + (name = _.tU(name)))
		$rtHeader(name)
		d = $.dI('ct').fS(40)
		fn();
		startRtr(name)
	})
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
RT1 = function () {
	$bd('font-size', 30).dI('ct')
	_$r({
		r: {
			'': 'pg1', pg1: 'pg1',
			pg2: $VW$('pg2', 'pg1', 'pg1')
		},
		pg1: $VW$('pg1', 'pg2', 'pg2')
	})
}
function $VW$(lbTx, aTx, href) {
	return function () {
		$autoV = function (fn) {
			return Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: fn
			})
		}
		return new (($autoV(function () {
			this.$el.html($.__d(
					$.lb(lbTx),
					$.a(aTx, '#' + href)
			).oh())
		})))({
			el: $('#ct')
		})
	}
}
RT1OLD = NOPUSHSTATE = VID0 = WORKS = function () {
	$bd('font-size', 30)
			.dI('ct')
	$r({
		r: {
			'': 'pg1',
			'pg1': 'pg1',
			'pg2': 'pg2'
		},
		pg1: $VW$('view 1: want to know your NPI NUMBER??', 'Its at view 2. go ->', 'pg2'),
		pg2: $VW$('vw 2: nada', 'what was the question again?', 'pg1')
	})
}
RT2 = ROUTEE1 = function () {
	$l('RT2')
	n = 0
	rtr = $R({
		routes: {'*x': 'd'},
		d: function (a) {
			$l('educated? -> ' + a)
		},
		e: function (a) {
			$l('e:' + a)
			$l('n: =' + n++)
			$.h1().A('EDUCATION').A()
		}
	})
	$.bt('d', function () {
		rtr.N('e')
	})
	$.bt('e', function () {
		rtr.N('e')
	})
	Bb.h.s()
}
RT3 = ITEMZ = function () {
	ITEMZZ = function () {
		$.x();
		Ap = {M: {}, V: {}, C: {}}
		Ap.M.Item = $$M({})
		$$R({
			routes: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j',
				'': 'welcome',
				'wap/items': 'welcome1',
				'wap/items/itemlist': 'showItemList',
				'wap/items/j': 'j'
			},
			welcome: function () {
				$.bd().E().A($.h1('welcome'))
			},
			j: function () {
				$l('asdfjfsdafsdf')
			},
			showItemList: function () {
				$.bd().E().A($.h1('show item list'))
			}
		})()
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		r.A('/wap/items/j', function () {
			$.bd().E().A(
					$.h1('j')
			)
		})
		r.A('/wap/items/q', function () {
			$.bd().E().A($.h1('q'))
		})
		Bb.h.start({pushState: true})
		$.bt('add', function () {
			r.n('/wap/items/itemlist')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			r.n('/wap/items/j')
		})
		$.bt('add', function () {
			r.n('/itemlist')
		})
	}
	Ap = {M: {}, V: {}, C: {}}
	Ap.M.Item = _M({})
	rtr = $R({
		routes: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j',
			'wap/items': 'welcome1',
			'wap/items/itemlist': 'showItemList',
			'wap/items/j': 'j'
		},
		welcome: function () {
			$.bd().E().A($.h1('welcome'))
		},
		j: function () {
			$l('asdfjfsdafsdf')
		},
		showItemList: function () {
			$.bd().E().A($.h1('show item list'))
		}
	})
	item1 = Ap.M.Item({
		n: 'jason', g: 'licensing exams and work history '
	})
	item1.oR('j', function () {
		$.bd().E().A($.h1('j'))
	})
	rtr.A('/wap/items/j', function () {
		$.bd().E().A(
				$.h1('j')
		)
	})
	rtr.A('/wap/items/q', function () {
		$.bd().E().A($.h1('q'))
	})
	$.bt('add', function () {
		rtr.n('/wap/items/itemlist')
	})
	$.bt('add1', function () {
		$.A($.h1('k'))
		rtr.n('/wap/items/j')
	})
	$.bt('add', function () {
		rtr.n('/itemlist')
	})
	Bb.h.s()
}
RT4 = NAVTOE = function () {
	rtr = $R({
		routes: {'*x': 'd'},
		d: function (a) {
			$l('d:' + a)
		},
		e: function (a) {
			$l('e:' + a)
		}
	})
	Bb.h.s()
	_.in(2, function () {
		rtr.N('e')
	})
}
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
RT5 = AHREF = function () {
	rtr = $R(rtsOb)
	_.in(function () {
		$l('REFERENCES')
		r.n('/wap/rtr/images/32903290239032902390')
	})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('GAPS IN HISTORY')
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	})
}
RT6 = RTENAV = function () {
	RTENAV = function () {
		z()
		Rt = $$R({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		r.A('b/rnav/j', function () {
			alert('!')
		})
		Bb.h.s({pushState: true})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.navigate('b/rnavv/j', {trigger: true})
		})
	}
	Rt = $$R({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	r.A('b/rnav/j', function () {
		alert('!')
	})
	Bb.h.s({pushState: true})
	$.bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
	$.bt('DEA', function () {
		rt.n('po/2')
	})
	$.bt('STATE LICENSE', function () {
		rt.n('po/4')
	})
	$.bt('LIFE SUPPORT (CPR)', function () {
		r.navigate('b/rnavv/j', {trigger: true})
	})
}
RT7 = function () {
	RTR0 = function () {
		$.x('y');
		$CSS({h1: {'font-size': 100}})
		r = $$R({
			rt: {
				'': 'index',
				'wap/rtr/images/:id': 'image',
				view: 'viewImage'
			},
			image: function (id) {
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			h: function () {
				alert('you are viewing home page')
			},
			x: function () {
				alert('you are viewing index')
			},
			viewImage: function () {
				alert('you are viewing an image')
			}
		})()
		Bb.h.start({pushState: true})
		_.in(3, function () {
			r.n('55c24c8f4198473b0d000004.png')
		})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.a().A($.h1('afsd'))
		$('body').on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
	}
	$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	}).A($.a().A($.h1('afsd')))
	rtr = _$R(rtsOb2)()
	_.in(3, function () {
		rtr.n('55c24c8f4198473b0d000004.png')
	})
	Bb.h.start({pushState: true})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
}
RT8 = VID00 = function () {
	VID00 = function () {
		$FirstVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var first = $.d().rm().A(
						$.lb().A('My 1st View'), $.br(),
						$.a().hr('sec').A('Go to 2nd View')
				).oh();
				this.$el.html(first)
			}
		})
		$SecVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var sec = $.d().rm()
						.A($.lb().A('My 2nd View'), $.br(), $.a()
								.hr('first').A('Go to 1st View'))
						.oh()
				this.$el.html(sec)
			}
		})
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				new $FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new $SecVw({el: $('#ct')})
			}
		})()
		Bb.h.start(
				//{pushState:true}
		)
	}
	$FirstVw = Bb.V.x({
		initialize: function () {
			this.render()
		},
		render: function () {
			var first = $.d().rm().A(
					$.lb().A('My 1st View'), $.br(),
					$.a().hr('sec').A('Go to 2nd View')
			).oh();
			this.$el.html(first)
		}
	})
	$SecVw = Bb.V.x({
		initialize: function () {
			this.render()
		},
		render: function () {
			var sec = $.d().rm()
					.A($.lb().A('My 2nd View'), $.br(), $.a()
							.hr('first').A('Go to 1st View'))
					.oh()
			this.$el.html(sec)
		}
	})
	$bd('font-size', 80).dI('ct')
	_$R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			new $FirstVw({el: $('#ct')})
		},
		pg2: function () {
			new $SecVw({el: $('#ct')})
		}
	})()
	Bb.h.start(
			//{pushState:true}
	)
}  //push state not working???
RT114 = STILLNOPUSH = VID1 = function () {
	STILLNOPUSH = VID1 = function () {
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				':post/:id': 'pam',
				'*post': 'splat',
				'post/*id': 'splatMustBeLast'
			},
			pam: function (post, id) {
				$l('fnPam: ' + post + ', id# ' + id)
			},
			splat: function () {
				alert('1')
			},
			splatMustBeLast: function () {
				alert('2')
			}
		})()
		Bb.h.start({pushState: true})
	}
	$bd('font-size', 80).dI('ct')
	_$R({
		r: {
			':post/:id': 'pam',
			'*post': 'splat',
			'post/*id': 'splatMustBeLast'
		},
		pam: function (post, id) {
			$l('fnPam: ' + post + ', id# ' + id)
		},
		splat: function () {
			alert('1')
		},
		splatMustBeLast: function () {
			alert('2')
		}
	})()
	Bb.h.start({pushState: true})
}
RT17 = RTPAMS = function () {
	RT12 = RTPAMS = function () {
		RTPAMS = function () {
			r = $$R(rtsOb6)()
			r.oR('dfR', $l)
			r.oR('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.oR('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.oR('dlF', $l)
			r.oR('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
		}
		$.x().A('driver lincese')
		r = _$R(rtsOb1)()
		r.oR('dfR LIABILITY', $l)
		r.oR('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.oR('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.oR('dlF HOSPITAL AFFILIATION', $l)
		r.oR('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
	}
	RTPAMS = function () {
		z();
		$.x().A('rtpams hahahahhahaha')
		r = $$R({
			routes: {
				"*x": "d",
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		})()
		r.oR('dfR', alert)
		r.oR('gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		// H$()  // or Bb.h.s({pushState: true})
		// r.oR('dfR', alert)
		r.on('route:gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		//r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		Bb.h.start({pushState: true})
		r.o('dfR', $l)
		r.o('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.o('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.o('dlF', $l)
		r.o('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
		r.oR('d', function (a) {
			alert(a)
			$l('d:' + a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
			$l('e:' + a)
		})//#e -> 'e' (could do '/#/e')
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		w.h.start() // H$()
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
	}
	z();
	$.x().A('rtpams hahahahhahaha')
	r = $$R({
		routes: {
			"*x": "d",
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			$l('home')
		},
		v: function () {
			$l('image')
		},
		nn: function () {
		},
		en: function (id) {
			$l('id:' + id)
		}
	})()
	r.oR('dfR', alert)
	r.oR('gPo', function (id) {
		alert('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', alert)
	r.oR('ldV', function (rt, ac) {
		alert(rt + '_' + ac)
	})
	// H$()  // or Bb.h.s({pushState: true})
	// r.oR('dfR', alert)
	r.on('route:gPo', function (id) {
		alert('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	//r.oR('dlF', alert)
	r.oR('ldV', function (rt, ac) {
		alert(rt + '_' + ac)
	})
	Bb.h.start({pushState: true})
	r.o('dfR', $l)
	r.o('gPo', function (id) {
		$l('gPo# ' + id)
	})
	r.o('gPo', function () {
		$l(3)
	}) //both routes fire!
	r.o('dlF', $l)
	r.o('ldV', function (rt, ac) {
		$l(rt + '_' + ac)
	})
	r.oR('d', function (a) {
		alert(a)
		$l('d:' + a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
		$l('e:' + a)
	})//#e -> 'e' (could do '/#/e')
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	w.h.start() // H$()
	_.in(2, function () {
		Bb.h.navigate('d', {trigger: true})
	})
	_.in(2, function () {
		Bb.h.navigate('d', {trigger: true})
	})
}
RT = HOWDYPAM = ADDRESSES = function () {
	d = $.d()
	$.bt('add LAST SEVEN YEARS', function () {
		r.n('items')
	})
	$.bt('add1 address', function () {
		$.A($.h1('k'))
		r.n('items/j')
	})
	rts = {
		'cool/:name': 'welcome',
		'image/:id': 'image',
		'items': 'items',
		'items/:item': 'item',
		'itemlist': 'showItemList'
	}
	$R({
		r: rts,
		welcome: function (name) {
			var greet = 'howdy, ' + name + '!'
			d.h(greet)
			$l(greet)
			//$.bd().E().A($.h1('welcome'))
		},
		items: function () {
			$.bd().E().A($.h1('show item list'))
		},
		item: function (item) {
			$.bd().E().A($.h1('show item: ' + item))
		},
		image: function (id) {
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			})
			$.bd().C('z')
		},
		_: function () {
			$l('you are viewing index')
		}
	})
	Bb.h.start({pushState: true})
	// _.in(2,function(){ r.n('cool/jason') })
	//_.in(5, function () {$l('-> img'); r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})})
}
$RoApp('RT13', function () {
	rtr = $R(rtsOb4)
	$.bt('index', function () {
		rtr.n('')
	})
	$.bt('hello', function () {
		rtr.n('hello')
	})
	$.bt('goodbye', function () {
		rtr.n('goodbye')
	})
	$.bt('default', function () {
		r.n('asfd/afsd')
	})
})
$RoApp('RT14', function () {
	$R(rtsOb4)
	r.A('rnav/j', function () {
		alert('!')
	})
	$.bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
	$.bt('hi', function () {
		rt.n('po/2')
	})
	$.bt('hi1', function () {
		rt.n('po/4')
	})
	$.bt('hiiiii', function () {
		r.n('b/rnavv/j', {trigger: true})
	})
	$.a('home', '/b/routee')
	_.in(2, function () {
		r.n('d')
	})
	function alpha() {
		function anchorClickBlocker() {
			//looks for clicks on any anchor els where
			//href starts with '/' (no domain) and stop
			//bw from nv to it
			$.bd().on('click', 'a[href^="/"]', function (ev) {
				$l('wow')
				ev.preventDefault()
				r.n($(this).attr('href', {trigger: true}))
			})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
			$('body').on('click', 'a[href^="/"]', function (ev) {
				ev.preventDefault()
				r.n($(this).attr('href'))
			})
		}
		
		$.a().A($.h1('afsd'))
		anchorClickBlocker()
	}
})
$RoApp('RT15', function () {
	FirstVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))
		}
	})
	FirstVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))
		}
	})
	SecVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)
			))
		}
	})
	SecVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)
			))
		}
	})
	r = $R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			$l('in pg1')
			FirstVw({
				el: $('#ct')
			})
		},
		pg2: function () {
			$l('in pg2')
			SecVw({el: $('#ct')})
		}
	})
	r = $R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			$l('in pg1')
			FirstVw({
				el: $('#ct')
			})
		},
		pg2: function () {
			$l('in pg2')
			SecVw({el: $('#ct')})
		}
	})
})
RTRVIEWS = SHOWVW = NORTR = function () {
	v1 = v2 = v3 = 0
	$.d('r', 100, 100).id('div')
	// ha.. this is just 'no router'
	V1 = $V({
		i: function () {
			this.r()
		}, r: function () {
			
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	V2 = $V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this
		}
	})
	V3 = $V({
		i: function () {
			this.render()
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3")
			return this
		}
	})
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $V({
		chV: 0,
		render: function () {
			this.$el.ht('Hi Area').A(
					this.chV.$el
			)
			return this
		}
	})
	hi = V1({Ms: "Hello world"})
	ct = CtV({
		el: $("#div"),
		model: hi
	})
	/*
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	$.bt('v1', function () {
				if (!v1) {
					v1 = V1({model: hi})
				}
				ct.chV = v1
				ct.render()
			}
	)
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.render()
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.$el.ht("Greeting Area");
			this.$el.A(this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({
		Ms: "Hello world"
	})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
SHOWVW = NOROUTER = function () {
	$.x()
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.h(
					this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.h("Greeting Area");
			this.A(
					this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({Ms: "Hello world"})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
NORTR = function () {
	$.x(null, 'no router')
	v1 = 0
	v2 = 0
	v3 = 0
	dv = $.d('r', 100, 100).id('div')
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	hi = V1({
		Ms: "Hello world"
	})
	$.bt('v1', function () {
		v1 = v1 || V1({m: hi})
		ct.chV = v1
		ct.r()
	})
	V2 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(
					this.g('Ms') + " from the View 2"
			);
			return this
		}
	})
	//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $$V({
		chV: 0,
		r: function () {
			this.h('Hi Area')
			this.A(this.chV.$el)
			return this
		}
	})
	/*
	
	 ct = CtV({
	 el:dv,
	 model: hi
	 })
	
	
	
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	
	
	 */
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.r()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.r()
	})
}
SHOWVW = NOROUTER = function () {
	$.x()
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.h(
					this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.h("Greeting Area");
			this.A(
					this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({Ms: "Hello world"})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
NORTR = function () {
	$.x(null, 'no router')
	v1 = 0
	v2 = 0
	v3 = 0
	dv = $.d('r', 100, 100).id('div')
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	hi = V1({
		Ms: "Hello world"
	})
	$.bt('v1', function () {
		v1 = v1 || V1({m: hi})
		ct.chV = v1
		ct.r()
	})
	V2 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(
					this.g('Ms') + " from the View 2"
			);
			return this
		}
	})
	//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $$V({
		chV: 0,
		r: function () {
			this.h('Hi Area')
			this.A(this.chV.$el)
			return this
		}
	})
	/*
	
	 ct = CtV({
	 el:dv,
	 model: hi
	 })
	
	
	
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	
	
	 */
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.r()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.r()
	})
}
NORTR = function () {
	v1 = v2 = v3 = 0
	$.d('r', 100, 100).id('div')
	// ha.. this is just 'no router'
	V1 = $V({
		i: function () {
			this.r()
		}, r: function () {
			
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	V2 = $V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this
		}
	})
	V3 = $V({
		i: function () {
			this.render()
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3")
			return this
		}
	})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $V({
		chV: 0,
		render: function () {
			this.$el.ht('Hi Area').A(
					this.chV.$el
			)
			return this
		}
	})
	hi = V1({Ms: "Hello world"})
	ct = CtV({
		el: $("#div"),
		model: hi
	})
	/*
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	$.bt('v1', function () {
				if (!v1) {
					v1 = V1({model: hi})
				}
				ct.chV = v1
				ct.render()
			}
	)
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.render()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.render()
	})
}
ROUTE = function () {
	z()
	$R({r: {"*x": "d"}}, '+')
	r.oR('d', function (a) {
		$l('d:' + a)
	})
	r.oR('e', function (a) {
		$l('e:' + a)
	})
}
ROUTEPAMS = function () {
	$.x().A('hahahahhahaha')
	RTob = {
		'': 'home',
		'view': 'v',
		'new': 'nn',
		':id': 'en',
		'posts/:id': 'gPo',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	}
	$R({
		rt: RTob,
		home: function () {
			$l('home')
		},
		v: function () {
			$l('image')
		},
		nn: function () {
		},
		en: function (id) {
			$l('id:' + id)
		}
	}, '+')
	r.oR('dfR', $l)
	r.oR('gPo', function (id) {
		$l('gPo# ' + id)
	})
	r.oR('gPo', function () {
		$l(3)
	}) //both routes fire!
	r.oR('dlF', $l)
	r.oR('ldV', function (rt, ac) {
		$l(rt + '_' + ac)
	})
}
ROUTE = function () {
	z()
	r = bbR({
		R: {"*x": "d"}
	})()
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	bbH()
}
ROUTEPAMS = function () {
	z()
	rtr = bbR({
		R: {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			al('home')
		},
		v: function () {
			al('image')
		},
		nn: function () {
		},
		en: function (id) {
			al(id)
		}
	})
	r = rtr()
	r.oR('dfR', al)
	r.oR('gPo', function (id) {
		al('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', al)
	r.oR('ldV', function (rt, ac) {
		al(rt + '_' + ac)
	})
	bbH()  // or Bb.h.s({pushState: true})
}
ROUTENAV = function () {
	z()
	Rt = bbR({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	bbH()
	bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
}
RTR = function () {
	$.x('b')
	RTob = {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	}
	$R({
		r: RTob,
		h: function () {
			$l('you are viewing home page')
		},
		x: function () {
			$l('you are viewing index')
		},
		image: function (id) {
			$l('image===')
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			});
			$.bd().C('z')
		},
		viewImage: function () {
			$l('you are viewing an image')
		}
	}, '+')
	$.in(function () {
		$l('......')
		r.n('/wap/rtr/images/32903290239032902390')
	}, '*')
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
}
ROUTENAV = function () {
	$.x('b')
	$R({
		r: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			$l(a)
		},
		gp: function (id) {
			$.bd().C($r())
			$l('Get post ' + id)
		}
	}, '+')
	$.bt('hi', function () {
		rt.n('po/2')
	})
}
ROUTE = function () {
	z()
	r = bbR({
		R: {"*x": "d"}
	})()
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	bbH()
}
ROUTEPAMS = function () {
	z()
	rtr = bbR({
		R: {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			al('home')
		},
		v: function () {
			al('image')
		},
		nn: function () {
		},
		en: function (id) {
			al(id)
		}
	})
	r = rtr()
	r.oR('dfR', al)
	r.oR('gPo', function (id) {
		al('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', al)
	r.oR('ldV', function (rt, ac) {
		al(rt + '_' + ac)
	})
	bbH()  // or Bb.h.s({pushState: true})
}
ROUTENAV = function () {
	z()
	Rt = bbR({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	bbH()
	bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
}
function routApps() {
	ROUTEE = function () {
		$.x();
		$l('routee')
		r = $$R({
			routes: {
				'*x': 'd'
			},
			d: function (a) {
				$l('dddddddddddddddddddd')
				$l('d:' + a)
			},
			e: function (a) {
				$l('e:' + a)
			}
		})()
		// r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})
		Bb.h.start()
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
	}
	NOPUSHSTATE = VID0 = function () {
		z();
		FirstVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var first = $.d().rm().A(
						$.lb().A('My 1st View'), $.br(),
						$.a().hr('#sec').A('Go to 2nd View')
				).oh();
				this.$el.html(first)
			}
		})
		SecVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var sec = $.d().rm()
						.A($.lb().A('My 2nd View'), $.br(), $.a()
								.hr('#first').A('Go to 1st View'))
						.oh()
				this.$el.html(sec)
			}
		})
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {'': 'pg1', 'first': 'pg1', 'sec': 'pg2'},
			pg1: function () {
				new FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new SecVw({el: $('#ct')})
			}
		})()
		Bb.h.start(
				//{pushState:true}
		)
	}
	STILLNOPUSH = VID1 = function () {
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				':post/:id': 'pam',
				'*post': 'splat',
				'post/*id': 'splatMustBeLast'
			},
			pam: function (post, id) {
				$l('fnPam: ' + post + ', id# ' + id)
			},
			splat: function () {
				alert('1')
			},
			splatMustBeLast: function () {
				alert('2')
			}
		})()
		Bb.h.start({pushState: true})
	}
//WORKS (above):
	VID00 = function () {
		$FirstVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var first = $.d().rm().A(
						$.lb().A('My 1st View'), $.br(),
						$.a().hr('sec').A('Go to 2nd View')
				).oh();
				this.$el.html(first)
			}
		})
		$SecVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var sec = $.d().rm()
						.A($.lb().A('My 2nd View'), $.br(), $.a()
								.hr('first').A('Go to 1st View'))
						.oh()
				this.$el.html(sec)
			}
		})
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				new $FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new $SecVw({el: $('#ct')})
			}
		})()
		Bb.h.start(
				//{pushState:true}
		)
	}  //push state not working???
	SHOWVW = NORTR = function () {
		$.x()
		V1 = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(this.model.get('Ms') + " from the View 1")
				return this
			}
		})
		V2 = $$V({
			i: function () {
				this.r();
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this;
			}
		})
		V3 = $$V({
			i: function () {
				this.render();
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3");
				return this;
			}
		})
		// Now we need a view that will contain the view
		// and render it whenever the user makes a choice on the screen.
		CtV = $$V({
			myChildV: null,
			r: function () {
				this.$el.ht("Greeting Area");
				this.$el.A(this.myChildV.$el);
				return this;
			}
		})
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		greet = V1({
			Ms: "Hello world"
		})
		cont = CtV({
			el: $("#AppContainer"),
			model: greet
		})
		v1 = null;
		v2 = null;
		v3 = null;
		function showView1() {
			if (view1 == null) {
				view1 = new View1({model: greeting});
			}
			container.myChildView = view1;
			container.render();
		}
		
		function showView2() {
			if (view2 == null) {
				view2 = new View2({model: greeting});
			}
			container.myChildView = view2;
			container.render();
		}
		
		function showView3() {
			if (view3 == null) {
				view3 = new View3({model: greeting});
			}
			container.myChildView = view3;
			container.render();
		}
	}
	NORTR0 = function () {
		$.x(null, 'no router');
		v1 = v2 = v3 = 0
		$.d('r', 100, 100).id('div')
		// ha.. this is just 'no router'
		V1 = $V({
			i: function () {
				this.r()
			}, r: function () {
				
				//this.$el.ht(this.model.get('Ms') + " from the View 1" )
				return this
			}
		})
		V2 = $V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(this.model.g('Ms') + " from the View 2");
				return this
			}
		})
		V3 = $V({
			i: function () {
				this.render()
			},
			r: function () {
				this.$el.html(this.model.get('Message') + " from the View 3")
				return this
			}
		})
		// Now we need a view that will contain the view
		// and render it
		// whenever the user makes a choice on the screen.
		CtV = $V({
			chV: 0,
			render: function () {
				this.$el.ht('Hi Area').A(
						this.chV.$el
				)
				return this
			}
		})
		hi = V1({Ms: "Hello world"})
		ct = CtV({
			el: $("#div"),
			model: hi
		})
		/*
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the container view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		$.bt('v1', function () {
					if (!v1) {
						v1 = V1({model: hi})
					}
					ct.chV = v1
					ct.render()
				}
		)
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({model: hi})
			}
			ct.chV = v2
			ct.render()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({model: hi})
			}
			ct.chV = v3
			ct.render()
		})
	}
	RTPAMS = function () {
		z();
		$.x().A('rtpams hahahahhahaha')
		r = $$R({
			routes: {
				"*x": "d",
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		})()
		r.oR('dfR', alert)
		r.oR('gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		// H$()  // or Bb.h.s({pushState: true})
		// r.oR('dfR', alert)
		r.on('route:gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		//r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		Bb.h.start({pushState: true})
		r.o('dfR', $l)
		r.o('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.o('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.o('dlF', $l)
		r.o('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
		r.oR('d', function (a) {
			alert(a)
			$l('d:' + a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
			$l('e:' + a)
		})//#e -> 'e' (could do '/#/e')
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		w.h.start() // H$()
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
	}
	ITEMZ = function () {
		$.x();
		Ap = {M: {}, V: {}, C: {}}
		Ap.M.Item = $$M({})
		$$R({
			routes: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j',
				'': 'welcome',
				'wap/items': 'welcome1',
				'wap/items/itemlist': 'showItemList',
				'wap/items/j': 'j'
			},
			welcome: function () {
				$.bd().E().A($.h1('welcome'))
			},
			j: function () {
				$l('asdfjfsdafsdf')
			},
			showItemList: function () {
				$.bd().E().A($.h1('show item list'))
			}
		})()
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		r.A('/wap/items/j', function () {
			$.bd().E().A(
					$.h1('j')
			)
		})
		r.A('/wap/items/q', function () {
			$.bd().E().A($.h1('q'))
		})
		Bb.h.start({pushState: true})
		$.bt('add', function () {
			r.n('/wap/items/itemlist')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			r.n('/wap/items/j')
		})
		$.bt('add', function () {
			r.n('/itemlist')
		})
	}
	RTR0 = function () {
		$.x('y');
		$CSS({h1: {'font-size': 100}})
		r = $$R({
			rt: {
				'': 'index',
				'wap/rtr/images/:id': 'image',
				view: 'viewImage'
			},
			image: function (id) {
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			h: function () {
				alert('you are viewing home page')
			},
			x: function () {
				alert('you are viewing index')
			},
			viewImage: function () {
				alert('you are viewing an image')
			}
		})()
		Bb.h.start({pushState: true})
		_.in(3, function () {
			r.n('55c24c8f4198473b0d000004.png')
		})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.a().A($.h1('afsd'))
		$('body').on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
	}
	RTENAV = function () {
		z()
		Rt = $$R({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		r.A('mvc/rnav/j', function () {
			alert('!')
		})
		Bb.h.s({pushState: true})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.navigate('mvc/rnavv/j', {trigger: true})
		})
	}
	AHREF = RTR1 = function () {
		$.x('b')
		$R({
			routes: {
				'': 'index',
				'wap/rtr/images/:id': 'image',
				view: 'viewImage'
			},
			h: function () {
				$l('you are viewing home page')
			},
			x: function () {
				$l('you are viewing index')
			},
			image: function (id) {
				$l('image===')
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				});
				$.bd().C('z')
			},
			viewImage: function () {
				$l('you are viewing an image')
			}
		})
		_.in(function () {
			$l('......')
			r.n('/wap/rtr/images/32903290239032902390')
		})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.bd().on('click', 'a[href^="/"]', function (ev) {
			$l('wow')
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
	}
	RTPAMS = function () {
		$.x().A('hahahahhahaha')
		r = $$R({
			routes: {
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR', 'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		})()
		r.oR('dfR', $l)
		r.oR('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.oR('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.oR('dlF', $l)
		r.oR('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
	}
	function roap() {
		$l('bbRoApps2');
		$Fn = function (name, fn) {
			window[name] = fn;
			return fn
		}
		$RoApp = function (name, fn) {
			$Fn(name, function () {
				z();
				header(name);
				fn();
				startRtr(name)
				function header(name) {
					$.d().A($.d().A('this is a RoApp').fS(75).col('r'),
							$.sp().A(name).fS(100).col('x').C('o'))
				}
				
				function startRtr(name) {
					Bb.h.start({pushState: true, root: "/mvc/" + name + "/"})
				}
			})
		}
		$RoApp('ROAP1', function () {
			ro = $R({
				r: {
					hello: 'hi',
					goodbye: function () {
						$.C('o')
					}
				},
				_: function () {
					$.C('p')
				},
				hi: function () {
					$.C('g');
					alert('well hi there!')
				}
			})
			$.bt('index', function () {
				ro.n('')
			})
			$.bt('hello', function () {
				ro.n('hello')
			})
			$.bt('goodbye', function () {
				ro.n('goodbye')
			})
		})
		$RoApp('ROAP2', function () {
			ro = $R({
				r: {
					hello: 'hi',
					goodbye: function () {
						$.C('o')
					}
				},
				_: function () {
					$.C('p')
				},
				hi: function () {
					$.C('g');
					alert('well hi there!')
				}
			})
			$.bt('index', function () {
				ro.n('')
			})
			$.bt('hello', function () {
				ro.n('hello')
			})
			$.bt('goodbye', function () {
				ro.n('goodbye')
			})
		})
//notes:  '':'_', (handled by _$$R now, instead) (see _$$R api)
	}
}
function routApps2() {
	$Fn = function (name, fn) {
		window[name] = fn;
		return fn
	}
	$RoApp = function (name, fn) {
		$Fn(name, function () {
			name = _.tU(name)
			$l('name: ' + name)
			Ap = {M: {}, V: {}, C: {}}
			z();
			header(name);
			d = $.d().id('ct').fS(40)
			fn();
			startRtr(name)
			function header(name) {
				$.d().A(
						$.sp().A('this is RoApp: ').fS(75).col('r'),
						$.sp().A(name)
								.fS(100).col('x').C('o'),
						$.d('B').H(8).W('auto')
				)
			}
			
			function startRtr(name) {
				Bb.h.start({
					pushState: true,
					root: "/mvc/" + name + "/"
				})
			}
		})
	}
	$RoApp('ROAP', function () {
		$R({
			r: {
				hello: 'hi',
				goodbye: function () {
					$.C('o')
				}
			},
			_: function () {
				$l('indexxxxx')
				$.C('p')
			}, //index
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
			} //default
		})
		$.bt('index', function () {
			r.n('')
		})
		$.bt('hello', function () {
			r.n('hello')
		})
		$.bt('goodbye', function () {
			r.n('goodbye')
		})
		$.bt('default', function () {
			r.n('asfd/afsd')
		})
	})
	$RoApp('TWOVWS', function () {
		FirstVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.sp('My 1st View').fS(60),
						$.bt('Go to 2nd View', function (e) {
							$l('clicked "go to 2nd View" anchor')
							r.n('sec')
						}).C('y')))
			}
		})
		SecVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.bt('Go to 1st View', function (e) {
							$l('clicked "go to 1st View" anchor')
							r.n('first')
						}).C('o'),
						$.sp('My 2nd View').fS(50)
				))
			}
		})
		r = $R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				$l('in pg1')
				FirstVw({
					el: $('#ct')
				})
			},
			pg2: function () {
				$l('in pg2')
				SecVw({el: $('#ct')})
			}
		})
	})
	HOWDYPAM = function () {
		z()
		d = $.d()
		$R({
			r: {
				'cool/:name': 'welcome',
				'image/:id': 'image',
				'items': 'items',
				'items/:item': 'item',
				'itemlist': 'showItemList'
			},
			welcome: function (name) {
				var greet = 'howdy, ' + name + '!'
				d.h(greet)
				$l(greet)
				//$.bd().E().A($.h1('welcome'))
			},
			items: function () {
				$.bd().E().A($.h1('show item list'))
			},
			item: function (item) {
				$.bd().E().A($.h1('show item: ' + item))
			},
			image: function (id) {
				$l('image===')
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			_: function () {
				$l('you are viewing index')
			}
		})
		// _.in(2,function(){ r.n('cool/jason') })
		_.in(5, function () {
			$l('-> img')
			r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
		})
		$.bt('add', function () {
			r.n('items')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			r.n('items/j')
		})
		Bb.h.start({pushState: true})
	}
	$RoApp('ROUTEE', function () {
		$.x();
		$l('routee')
		$R({
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
		})
		r.A('rnav/j', function () {
			alert('!')
		})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.n('mvc/rnavv/j', {trigger: true})
		})
		$.a('home', '/mvc/routee')
		_.in(2, function () {
			r.n('d')
		})
		function alpha() {
			function anchorClickBlocker() {
				//looks for clicks on any anchor els where
				//href starts with '/' (no domain) and stop
				//bw from nv to it
				$.bd().on('click', 'a[href^="/"]', function (ev) {
					$l('wow')
					ev.preventDefault()
					r.n($(this).attr('href', {trigger: true}))
				})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
				$('body').on('click', 'a[href^="/"]', function (ev) {
					ev.preventDefault()
					r.n($(this).attr('href'))
				})
			}
			
			$.a().A($.h1('afsd'))
			anchorClickBlocker()
		}
	})
}
function ditto() {
///
	HOWDYPAM = function () {
		z()
		d = $.d()
		$R({
			r: {
				'cool/:name': 'welcome',
				'image/:id': 'image',
				'items': 'items',
				'items/:item': 'item',
				'itemlist': 'showItemList'
			},
			welcome: function (name) {
				var greet = 'howdy, ' + name + '!'
				d.h(greet)
				$l(greet)
				//$.bd().E().A($.h1('welcome'))
			},
			items: function () {
				$.bd().E().A($.h1('show item list'))
			},
			item: function (item) {
				$.bd().E().A($.h1('show item: ' + item))
			},
			image: function (id) {
				$l('image===')
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			_: function () {
				$l('you are viewing index')
			}
		})
		// _.in(2,function(){ r.n('cool/jason') })
		_.in(5, function () {
			$l('-> img')
			r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
		})
		$.bt('add', function () {
			r.n('items')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			r.n('items/j')
		})
		Bb.h.start({pushState: true})
	}
	ROUTE = function () {
		z()
		r = R$({
			R: {"*x": "d"}
		})()
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		bbH()
	}
	ROUTEPAMS = function () {
		z()
		rtr = R$({
			R: {
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				al('home')
			},
			v: function () {
				al('image')
			},
			nn: function () {
			},
			en: function (id) {
				al(id)
			}
		})
		r = rtr()
		r.oR('dfR', al)
		r.oR('gPo', function (id) {
			al('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', al)
		r.oR('ldV', function (rt, ac) {
			al(rt + '_' + ac)
		})
		bbH()  // or Bb.h.s({pushState: true})
	}
	ROUTENAV = function () {
		z()
		Rt = R$({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		bbH()
		bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
	}
	BBHS = function () {
		$l('BBHS');
		$('body').C('r');
		$.h('bbhs');
		bH = Bb.H
		bh = Bb.h
	}
	$RoApp('ROAP', function () {
		$R({
			r: {
				hello: 'hi',
				goodbye: function () {
					$.C('o')
				}
			},
			_: function () {
				$l('indexxxxx')
				$.C('p')
			}, //index
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
			} //default
		})
		$.bt('index', function () {
			r.n('')
		})
		$.bt('hello', function () {
			r.n('hello')
		})
		$.bt('goodbye', function () {
			r.n('goodbye')
		})
		$.bt('default', function () {
			r.n('asfd/afsd')
		})
	})
	$RoApp('TWOVWS', function () {
		FirstVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.sp('My 1st View').fS(60),
						$.bt('Go to 2nd View', function (e) {
							$l('clicked "go to 2nd View" anchor')
							r.n('sec')
						}).C('y')))
			}
		})
		SecVw = $$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.E().A($.d().A(
						$.bt('Go to 1st View', function (e) {
							$l('clicked "go to 1st View" anchor')
							r.n('first')
						}).C('o'),
						$.sp('My 2nd View').fS(50)
				))
			}
		})
		r = $R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				$l('in pg1')
				FirstVw({
					el: $('#ct')
				})
			},
			pg2: function () {
				$l('in pg2')
				SecVw({el: $('#ct')})
			}
		})
	})
	$RoApp('ROUTEE', function () {
		$.x();
		$l('routee')
		$R({
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
		})
		r.A('rnav/j', function () {
			alert('!')
		})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.n('mvc/rnavv/j', {trigger: true})
		})
		$.a('home', '/mvc/routee')
		_.in(2, function () {
			r.n('d')
		})
		function alpha() {
			function anchorClickBlocker() {
				//looks for clicks on any anchor els where
				//href starts with '/' (no domain) and stop
				//bw from nv to it
				$.bd().on('click', 'a[href^="/"]', function (ev) {
					$l('wow')
					ev.preventDefault()
					r.n($(this).attr('href', {trigger: true}))
				})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
				$('body').on('click', 'a[href^="/"]', function (ev) {
					ev.preventDefault()
					r.n($(this).attr('href'))
				})
			}
			
			$.a().A($.h1('afsd'))
			anchorClickBlocker()
		}
	})
}
function learnRooter() {
	rts = {
		help: "help",    // #help
		"search/:query": "search",  // #search/kiwis
		"search/:query/p:page": "search"   // #search/kiwis/p7
	}
	Workspace = Bb.R.x({
		routes: rts,
		help: function () {
		},
		search: function (query, page) {
		}
	})
	//  Part of a route can be made optional by surrounding it in parentheses (/:optional).
	//Trailing slashes are treated as part of the URL,
	// and (correctly) treated as a unique route when accessed.
	// docs and docs/ will fire different callbacks.
	// If you can't avoid generating both types of URLs, 
	// you can define a "docs(/)" matcher to capture both cases.
	//When the visitor presses the back button, or enters a URL, and a particular route is matched,
	// the name of the action will be fired as an event, so that other objects can listen to the router,
	// and be notified. In the following example, 
	// visiting #help/uploading will fire a route:help event from the router.
	routes = {
		"help/:page": "help",
		"download/*path": "download",
		"folder/:name": "openFolder",
		"folder/:name-:mode": "openFolder"
	}
	router.on("route:help", function (page) {
	});
	//constructor / initializenew Router([options]) 
	//When creating a new router, you may pass its routes hash directly as an option, if you choose.
	// All options will also be passed to your initialize function, if defined.
	//routerouter.route(route, name, [callback]) 
	//Manually create a route for the router, The route argument may be a routing string or
	// regular expression. Each matching capture from the route or regular expression will
	// be passed as an argument to the callback. The name argument will be triggered as a
	// "route:name" event whenever the route is matched. If the callback argument is 
	// omitted router[name] will be used instead. Routes added later may override previously declared routes.
	//
	initialize = function (options) {
		
		// Matches #page/10, passing "10"
		this.route("page/:number", "page", function (number) { 
		});
		// Matches /117-a/b/c/open, passing "117-a/b/c" to this.open
		this.route(/^(.*?)\/open$/, "open");
	}
	//
	//open: function(id) { ... }
	//navigaterouter.navigate(fragment, [options]) 
	//Whenever you reach a point in your application that you'd like to save as a URL, 
	// call navigate in order to update the URL. If you also wish to call the route function,
	// set the trigger option to true. To update the URL without creating an entry in the browser's history,
	// set the replace option to true.
	//
	openPage = function (pageNumber) {
		this.document.pages.at(pageNumber).open();
		this.navigate("page/" + pageNumber);
	}
	//
	//# Or ...
	//
	//app.navigate("help/troubleshooting", {trigger: true});
	//
	//# Or ...
	//
	app.navigate("help/troubleshooting", {trigger: true, replace: true});
	//executerouter.execute(callback, args, name) 
	//This method is called internally within the router, whenever a route matches 
	// and its corresponding callback is about to be executed.
	// Return false from execute to cancel the current transition.
	// Override it to perform custom parsing or wrapping of your routes,
	// for example, to parse query strings before handing them to your route callback, like so:
	//
	Router = Backbone.Router.extend({
		execute: function (callback, args, name) {
			if (!loggedIn) {
				goToLogin();
				return false;
			}
			args.push(parseQueryString(args.pop()))
			if (callback) callback.apply(this, args)
		}
	})
	//Backbone.history
	//
	//History serves as a global router (per frame)
	// to handle hashchange events or pushState,
	// match the appropriate route, 
	// and trigger callbacks.
	// You shouldn't ever have to create one of these yourself since Backbone.history already contains one.
	//
	//pushState support exists on a purely opt-in basis in Backbone.
	// Older browsers that don't support pushState will continue to use hash-based URL fragments,
	// and if a hash URL is visited by a pushState-capable browser, 
	// it will be transparently upgraded to the true URL.
	// Note that using real URLs requires your web server 
	// to be able to correctly render those pages, 
	// so back-end changes are required as well.
	// For example, if you have a route of /documents/100,
	// your web server must be able to serve that page,
	// if the browser visits that URL directly.
	// 
	// For full search-engine crawlability,
	// it's best to have the server generate the complete HTML for the page
	// ... but if it's a web application, 
	// just rendering the same content you would have for the root URL,
	// and filling in the rest with Backbone Views and JavaScript works fine.
	//startBackbone.history.start([options]) 
	//When all of your Routers have been created, and all of the routes are set up properly,
	// call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes.
	// Subsequent calls to Backbone.history.start() will throw an error,
	// and Backbone.History.started is a boolean value indicating whether it has already been called.
	//To indicate that you'd like to use HTML5 pushState support in your application,
	// use Backbone.history.start({pushState: true}). If you'd like to use pushState,
	// but have browsers that don't support it natively use full page refreshes instead,
	// you can add {hashChange: false} to the options.
	//If your application is not being served from the root url / of your domain,
	// be sure to tell History where the root really is, as an option: 
	// Backbone.history.start({pushState: true, root: "/public/search/"})
	//When called, if a route succeeds with a match for the current URL,
	// Backbone.history.start() returns true. If no defined route matches the current URL, it returns false.
	//If the server has already rendered the entire page,
	// and you don't want the initial route to trigger when starting History, pass silent: true.
	//Because hash-based history in Internet Explorer relies on an <iframe>, 
	// be sure to call start() only after the DOM is ready.
	$(function () {
		new WorkspaceRouter();
		new HelpPaneRouter();
		Backbone.history.start({pushState: true});
	});
	//
	//For example, a route of "search/:query/p:page" 
	// will match a fragment of #search/obama/p2, passing "obama" and "2" to the action.
	//
	//A route of "file/*path" will match #file/nested/folder/file.txt,
	// passing "nested/folder/file.txt" to the action.
	//
	//A route of "docs/:section(/:subsection)" 
	// will match #docs/faq and #docs/faq/installing, 
	// passing "faq" to the action in the first case, 
	// and passing "faq" and "installing" to the action in the second.
	//
}
ITEMS = function () {
	Ap = {M: {}, V: {}, C: {}}
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
	bbH()
	Ap.M.Item = $M({})
	$R({
		r: {
			'': 'welcome',
			itemlist: 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			$.bd().E().A($.h1('welcome'))
		},
		j: function () {
		},
		showItemList: function () {
			$l('showItemList')
			$.bd().A($.h1('show item list'))
		}
	}, '+')
	i1 = Ap.M.Item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		$.bd().E().A($.h1('j'))
	})
	//bb.history.start({pushState: true})
	$.bt('add', function () {
		r.n('/itemlist')
	})
	$Ro = Router = $$R({
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
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}
SHOWVW = NOROUTER = function () {
	$.x()
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.h(
					this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.h("Greeting Area");
			this.A(
					this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({Ms: "Hello world"})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
NORTR = function () {
	$.x(null, 'no router')
	v1 = 0
	v2 = 0
	v3 = 0
	dv = $.d('r', 100, 100).id('div')
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	hi = V1({
		Ms: "Hello world"
	})
	$.bt('v1', function () {
		v1 = v1 || V1({m: hi})
		ct.chV = v1
		ct.r()
	})
	V2 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(
					this.g('Ms') + " from the View 2"
			);
			return this
		}
	})
	//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $$V({
		chV: 0,
		r: function () {
			this.h('Hi Area')
			this.A(this.chV.$el)
			return this
		}
	})
	/*
	
	 ct = CtV({
	 el:dv,
	 model: hi
	 })
	
	
	
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	
	
	 */
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.r()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.r()
	})
}
 