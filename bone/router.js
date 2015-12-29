Bb.R = Bb.Router
Bb.R.x = Bb.R.extend
_$start = function () {
	Bb.h.start()
}
$start = function () {
	Bb.h.start({pushState: true})
}
$route = function (Rtr) {
	var rtr = new Rtr;
	$start();
	return rtr
}
Router = function () {
	rtr = ro = rt = Bb.Router.prototype;
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
	rtr.rt = function (rt, fn) {
		var rtr = this
		if (O(rt)) {
			_.e(rt, function (v, k) {
				rtr.rt(k, v)
			})
		}
		else {
			this.on('route:' + rt, fn)
		}
		return this
	}  // rtr.A = ro.oR =
	rtr.rp = function (url, op) {
		return this._n(url, _.x({replace: true},
				G(arguments).n ? {trigger: true} : {}))
	}//navigate: replace
// history:
	_$r = function (ob) {
		var rt = $R(ob);
		rt._();
		return rt
	}
	$rR = function (ob) {
		return _$r({r: ob})
	}
}
Bb.h = Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
Bb.H = Bb.History
R$ = function (ob) {
	$l('$R')
	ob = ob || {}
	ob.routes = ob.R ? ob.R :
	ob.routes || ob.rt || ob.r || {} //if (ob.i) {ob.initialize = ob.i}
	//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
	//if (ob.x) {ob.index = ob.x}
	//if (ob.h) {ob.home = ob.h}
	//ob.routes[''] = ob.routes[''] || 'index'
	//ob.routes = _.x({'': '_'}, ob.routes)
	//ob.routes['*other'] = 'd'
	//ob = _.x({
	//_: function () {$l('INDEX ( _ ) ')},
	//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
	//}, ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
	//metaClass.. no need for 'new' //= $$R
	var Rt = Bb.R.x(ob)
	var rt = new Rt()
	//rt._ = _$start
	//rt.$ = $start
	return rt
}
$Rtr = function (ob) {
	$l('R$')
	ob = ob || {}
	if (O(ob.R)) {
		ob.routes = ob.R
	}
	return Bb.R.x(ob)
}
ROUTEZ = function () {
	$.h4('routez (pushState=false)')
	sty()
	setup();
	Bb.LinkView = function (lbTx, aTx, href) {
		var content = $.__d($.lb(lbTx), $.br(), $.a(aTx, '#' + href))
		return Bb.contentView(content)
	}
	$R({
		initialize: function () {
			_$start()
		},
		r: {'': 'pg1', pg1: 'pg1', pg2: 'pg2'},
		pg2: Bb.LinkView('welcome to page 2!', 'go to page 1', 'pg1'),
		pg1: Bb.LinkView('welcome to page 1!', 'go to page 2', 'pg2')
	})
	function setup() {
		Bb.InitView = function (fn) {
			return Bb.V.x({initialize: fn})
		}
		Bb.V.auto = Bb.InitView(function () {
			this.R()
		})
		Bb.V.ctAuto = Bb.V.auto.x({el: $('#ct')})
		Bb.contentView = function (link) {
			var children = A(link) ? link : arguments
			return function () {
				new (Bb.V.ctAuto.x({R: ren}))
				function ren() {
					var q = this.$el.E()
					_.e(children, function (child) {
						q.A(child)
					})
				}
			}
		}
	}
	
	function sty() {
		$.fS(60).dI('ct')
		$s({
			$: {C: 'g', M: 10},
			d: {M: 12, B: '8px dotted orange'},
			label: {fS: 80, c: 'y', C: 'z', B: '4px dotted r'}
		})
	}
}
RTR = function () {
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
BBHS = function () {
	$l('BBHS');
	$('body').C('r');
	$.h('bbhs');
	bH = Bb.H
	bh = Bb.h
}
RT1 = function () {
	$.fS(60).dI('ct')
	$s({$: {M: 12, B: '8px dotted orange'}})
	_$r({
		r: {
			'': 'pg1',
			pg1: 'pg1',
			pg2: Bb.LinkView('pg2', 'pg1', 'pg1')
		},
		pg1: Bb.LinkView('pg1', 'pg2', 'pg2')
	})
	//pg1: $VW$('view 1: want to know your NPI NUMBER??', 'Its at view 2. go ->', 'pg2'),
	//pg2:$VW$('vw 2: nada', 'what was the question again?', 'pg1')
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
	Bb.h.s()
}
RTR0 = function () {
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
RT7 = function () {
	$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]',
			knockAncs).A($.a().A($.h1('afsd')))
	rtr = _$R(rtsOb2)()
	Bb.h.start({pushState: true})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
}
VID = function () {
	function setup() {
		$.C('o').fS(80)
		v1 = v2 = v3 = 0
		Rtr = $Rtr()
		views()
		divsAndBts()
	}
	
	function $Rtr() {
		rtr = Rtr()
		_$R(rtrOb)()
		Bb.h.start()//{pushState:true}
		var rtrOb = {
			R: {
				':post/:id': 'pam',
				'*post': 'splat',
				'post/*id': 'splatMustBeLast',
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pam: function (post, id) {
				$l('fnPam: ' + post + ', id# ' + id)
			},
			splat: function () {
				alert('1')
			},
			splatMustBeLast: function () {
				alert('2')
			},
			pg1: function () {
				new $FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new $SecVw({el: $('#ct')})
			}
		}
		var Rtr = R$(rtrOb)
		return Rtr
	}
	
	function divsAndBts() {
		$.d().id('ct')
		/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the ctr view and the functions
		 that will get invoked when the user selects the view from screen.
		 */
		$.bt('v1', function () {
			v1 = v1 || V1({m: hi})
			ct.chV = v1
			ct.r()
		})
		$.bt('v1', function () {
			v1 = v1 || V1({m: hi})
			ct.chV = v1
			ct.r()
		})
		$.d('r', 100, 100).id('div')
		$.bt('v2', function () {
			if (!v2) {
				v2 = V2({md: hi})
			}
			ct.chV = v2
			ct.r()
		})
		$.bt('v3', function () {
			if (!v3) {
				v3 = V3({md: hi})
			}
			ct.chV = v3
			ct.r()
		})
		V2Bt = function () {
			return $.bt('v2', function () {
				if (!v2) {
					v2 = V2({md: hi})
				}
				ct.chV = v2
				ct.r()
			})
		}
		V3Bt = function () {
			return $.bt('v3', function () {
				if (!v3) {
					v3 = V3({md: hi})
				}
				ct.chV = v3
				ct.r()
			})
		}
		/*
		
		 ct = CtV({
		 el:dv,
		 md: hi
		 })
		
		 Now lets create a simple div on the UI which will be used as el to this ContainerView.
		 We will then position three buttons on the UI which will let the user to change the view.
		 Below code shows the application setup that is creating the ctr view and the functions
		 that will get invoked when the user selects the view from screen.
		
		
		 */
	}
	
	function views() {
		CtV = V$({
			myChildV: null,
			R: function () {
				this.h("Greeting Area");
				this.A(
						this.myChildV.$el);
				return this;
			}
		})
		hi = V1({Ms: "Hello world"})
		ct = CtV({
			el: $("#div"),
			md: hi
		})
		hi = V1({
			Ms: "Hello world"
		})
		V2 = V$({
			I: function () {
				this.r()
			},
			R: function () {
				return this.H(
						this.g('Ms') + " from the View 2"
				);
				return this
			}
		})
//V3 = V$({I: function () {this.r()}, R: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
// Now we need a view that will contain the view
// and R it
// whenever the user makes a choice on the screen.
		CtV = V$({
			chV: 0,
			R: function () {
				this.h('Hi Area')
				this.A(this.chV.$el)
				return this
			}
		})
		CtV = V$({
			myChildV: null,
			R: function () {
				return this.H("Greeting Area");
				this.$el.A(this.myChildV.$el);
				return this;
			}
		})
		greet = V1({
			Ms: "Hello world"
		})
		cont = CtV({
			el: $("#AppContainer"),
			md: greet
		})
		CtV = V$({
			myChildV: null,
			R: function () {
				return this.H("Greeting Area");
				this.$el.A(this.myChildV.$el);
				return this;
			}
		})
		greet = V1({
			Ms: "Hello world"
		})
		cont = CtV({
			el: $("#AppContainer"),
			md: greet
		})
		CtV = V$({
			chV: 0,
			R: function () {
				return this.H('Hi Area').A(
						this.chV.$el
				)
				return this
			}
		})
		v1 = 0
		v2 = 0
		v3 = 0
		dv = $.d('r', 100, 100).id('div')
		hi = V1({
			Ms: "Hello world"
		})
// ha.. this is just 'no router'
// Now we need a view that will contain the view
// and R it
// whenever the user makes a choice on the screen.
		hi = V1({Ms: "Hello world"})
		ct = CtV({el: $("#div"), md: hi})
		// Now we need a view that will contain the view
// and render it whenever the user makes a choice on the screen.
		V$i = function (ob) {
			if (F(ob)) {
				ob = {R: ob}
			}
			ob.I = 1
			return V$(ob)
		}
		$FirstVw = V$i(function () {
			var $$lb = $.lb('My 1st View')
			var $$a = $.a('Go to 2nd View', 'sec')
			this.A(ll.oh($$lb, ll, $$a))
		})
		$SecVw = V$i({R: ll.TpFn(ll($.lb('My 2nd View'), $.br(), $.a().hr('first').A('Go to 1st View')))})
		MsFn = function (vwNum) {
			return function () {
				var vw = this
				return vw.H(tp(vw.g('Message'), vwNum))
			}
			function tp(message, vwNum) {
				return message + " from the View " + (viewNum || 0) + "."
			}
		}
		V1 = V$i(MsFn(1))
		V2 = V$i(MsFn(2))
		V3 = V$i(MsFn(3))
		CtV = V$({
			chV: 0, R: function () {
				return this.A('Hi Area', this.chV.$el)
			}
		})
		showChildView = function (ctr, view) {
			ctr.myChildView = view
			ctr.R()
			return ctr
		}
		showView1 = function () {
			ctr.showChildView(view1 || new View1({md: greeting}))
		}
		showView2 = function () {
			ctr.showChildView = view2 || new View2({md: greeting})
			ctr.R()
		}
		showView3 = function () {
			ctr.showChildView = view3 || new View3({md: greeting})
			ctr.R();
		}
	}
}
RT3 = ITEMZ = function () {
	ITEMZZ = function () {
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
	Bb.h.s()
}
function roap() {
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
	$RoApp = function (name, fn) {
		$Fn(name, function () {
			name = _.tU(name)
			$l('name: ' + name)
			Ap = {M: {}, V: {}, C: {}}
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
					root: "/box/" + name + "/"
				})
			}
		})
		function alt() {
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
			$RoApp = function (name, fn) {
				$Fn(name, function () {
					header(name);
					fn();
					startRtr(name)
					function header(name) {
						$.d().A(
								$.d().A('this is a RoApp').fS(75).col('r'),
								$.sp().fS(100).col('x').C('o').A(name)
						)
					}
					
					function startRtr(name) {
						Bb.h.start({
							pushState: true,
							root: "/box/" + name + "/"
						})
					}
				})
			}
		}
	}
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
						$.sp('My 2nd View').fS(50)))
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
						}).C('o'), $.sp('My 2nd View').fS(50)))
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
}
$Nav = function (rtr, rt, op) {
	rtr.navigate(rt, op)
	return rtr
}
$Trg = function (rtr, rt) {
	return $Nav(rtr, rt, {trigger: 'true'})
}
$Trg$ = function (rtr, rt) {
	$start()
	return $Nav(rtr, rt, {trigger: 'true'})
}
$trg = function () {
	$ev.trigger.apply($ev, arguments)
}
$ev = _.x({}, Bb.E)
$Rtr = function (ob, home) {
	return $Trg$(new ( R$R(ob) ), (home || ''))
}
$on = function (ev, fn) {
	$ev.on(ev, fn)
}
$TrRtrFn = function (rtr, fn) {
	
	//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
	return function (md) {
		$Trg(rtr, fn(md))
	}
}
Bb.Co = Bb.Controller = function (Vw, md) {
	return new Vw({model: md})
}
Bb.el = function (Vw, md) {
	return new Vw({model: md}).el
}
R$R = function (fn) {
	return R$({R: fn})
}
V$R = function (fn) {
	return V$({R: fn})
}
$TrgFn = function (str) {
	return function () {
		this.trg(str)
	}
}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
DOC1 = function () {
	Li_ = Bb.V.x({
		tagName: 'li',
		events: {
			click: function () {
				$ev.trigger('doc:selected', this.model)
			}
		},
		R: function () {
			var vw = this
			md = vw.model
			tt = vw.model.get('title')
			$l(tt)
			vw.$el.A(vw.model.get('title'))
			return vw
		}
	})
	Ul_ = Bb.V.x({
		tagName: 'ul', R: function () {
			cl = this.collection
			_.e(this.collection, function (doc) {
				J.s($l(doc.attributes))
				var li = new Li_({model: doc})
				this.$el.A(li.R().el)
			}, this)
			return this
		}
	})
	Div_ = Bb.V.x({
		R: function () {
			var vw = this, md = vw.model
			var content = $.d().A(md.get('content'))
			vw.$el.A($.h1(md.get('title')), content)
			return vw
		}
	})
	$ev = _.x({}, Bb.E)
	$ev.on('doc:selected', function (doc) {
		$l('sel')
		rtr.navigate('view/' + doc.get('title'), {trigger: 'true'})
	})
	RtrCos = Bb.R.x({
		routes: {
			contents: function () {
				$l('contents')
				var ul = new Ul_({collection: docs})
				$.bd().E(ul.R().el)
			},
			'view/:title': function (doc) {
				var selDoc = _(docs).find(function (doc) {
					return doc.get('title')
				})
				var d = new Div_({model: selDoc})
				$.bd().E().A(d.R().el)
			}
		}
	})
	rtr = new RtrCos()
	_$start()
	rtr.navigate('contents', {trigger: 'true'})
}
//function rtrTpFnsTpFnsBackDemo() {
BACKDEMO = function () {
	Temp('task', [
		lb('Task: '),
		tx().id('task_desc'),
		bt('add task').id('btn')])
	di('container').a()
	bbR({
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
	})()
	bbH()
	Task = bbV({
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert(qiv('task_desc') + ' task added')
		}
	})
}
function rtrTp() {
	BACKDEMO0 = function () {
		$.x().d('yoo hoo').id('cont')
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
		}
		$R({
			rt: {'': 'f', 'f': 'f', 's': 's'},
			f: function () {
				$l('fir')
			}, s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		}, '+')
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		Tsk = $V({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
	BACKDEMO1 = function () {
		$.x().d('yoo hoo').id('cont')
		$R({
			rt: {
				'': 'f', 'f': 'f', 's': 's',
				'/wap/items/q': q
			},
			q: function () {
				alert('q')
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		})
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
		/*
		
		
		 Temp('task', [
		
		 $.lb('Task: '),
		 $.ip().id('task_desc'),
		 $.bt('add task').id('btn')
		 ])
		
		
		 Tsk=$V({el: $('#cont'),
		
		 i: function(){this.r()},
		 r: function(){this.$el.ht( Temp('task') )},
		 e: {'click button': 'add'},
		 add: function(){alert( $('#task_desc').v() + ' task added')}
		
		 })
		 */
		$.bt('sfad', function () {
			r.n('/wap/items/q')
		})
	}
	BACKDEMO = function () {
		$.x()
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
		}
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		$.dI('cont')
		$$R({
			rt: {
				'': 'f',
				'f': 'f',
				's': 's'
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				new Task()
				$l('sec')
			}
		})
		Tsk = Bb.V.e({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
}
//router:
BACKDEMO0 = function () {
	$.x().d('yoo hoo').id('cont')
	$R({
		rt: {'': 'f', 'f': 'f', 's': 's'},
		f: function () {
			$l('fir')
		}, s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	}, '+')
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	Tsk = $V({
		el: $('#cont'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(Temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert($('#task_desc').v() + ' task added')
		}
	})
}
BACKDEMO = function () {
	BACKDEMO1 = function () {
		$R({
			rt: {
				'': 'f', 'f': 'f', 's': 's',
				'/wap/items/q': q
			},
			q: function () {
				alert('q')
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		})
		/*
		
		
		 Temp('task', [
		
		 $.lb('Task: '),
		 $.ip().id('task_desc'),
		 $.bt('add task').id('btn')
		 ])
		
		
		 Tsk=$V({el: $('#cont'),
		
		 i: function(){this.r()},
		 r: function(){this.$el.ht( Temp('task') )},
		 e: {'click button': 'add'},
		 add: function(){alert( $('#task_desc').v() + ' task added')}
		
		 })
		 */
		$.bt('sfad', function () {
			r.n('/wap/items/q')
		})
	}
	BACKDEMO = function () {
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		$.dI('cont')
		$$R({
			rt: {
				'': 'f',
				'f': 'f',
				's': 's'
			},
			f: function () {
				$l('fir')
			},
			s: function () {
				new Task()
				$l('sec')
			}
		})
		Tsk = Bb.V.e({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	BACKDEMO = function () {
		BACKDEMO = function () {
			z()
			Temp('task', [
				lb('Task: '),
				tx().id('task_desc'),
				bt('add task').id('btn')])
			di('container').a()
			bbR({
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
			})()
			bbH()
			Task = bbV({
				el: $('#container'),
				i: function () {
					this.r()
				},
				r: function () {
					this.$el.html(temp('task'))
				},
				e: {'click button': 'add'},
				add: function () {
					alert(qiv('task_desc') + ' task added')
				}
			})
		}
		Temp('task', [
			lb('Task: '),
			tx().id('task_desc'),
			bt('add task').id('btn')])
		di('container').a()
		bbR({
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
		})()
		bbH()
		Task = bbV({
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert(qiv('task_desc') + ' task added')
			}
		})
	}
	//$.x().d('yoo hoo').id('cont')
	$R({
		rt: {'': 'f', 'f': 'f', 's': 's'},
		f: function () {
			$l('fir')
		}, s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	}, '+')
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	BACKDEMOoldSchol = function () {
		z()
		Temp('task', [
			lb('Task: '),
			tx().id('task_desc'),
			bt('add task').id('btn')])
		di('container').a()
		bbR({
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
		})()
		bbH()
		Task = bbV({
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert(qiv('task_desc') + ' task added')
			}
		})
	}
}
DOC = function () {
	Ul_ = V$Ul($RenClFn(V$Li$({R: 'title', $: $TrgFn('doc:selected')})))
	Div_ = V$R(function () {
		this.h1('title');
		this.d('content');
		return this
	})
	rtr = $Rtr(
			{
				contents: function () {
					Cl$Ul$Li(docs)
				},
				'view/:title': function (title) {
					$.E(M$D(C$.f(docs, 'title', title)).rEl())
				}
			},
			'contents'
	)
	$mk.$()
	urlFn = function (md) {
		return $url('view', md.g('title'))
	}
	$on('doc:selected', $TrRtrFn(rtr, urlFn))
	$url = function () {
		var g = G(arguments)
		var url = g.f || ''
		_.e(g.r, function (part) {
			url += ('/' + part)
		})
		return url
	}
	pre()
	function pre() {
	}
}
RTR0 = function () {
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
AHREF = RTR1 = function () {
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