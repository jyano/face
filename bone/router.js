$L()
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
$RoApp = function (name, fn) {
	$Fn = function (name, fn) {
		window[name] = fn;
		return fn
	}
	$Fn(name, function () {
		Ap = {M: {}, V: {}, C: {}}
		$l('name: ' + (name = _.tU(name)))
		$rtHeader(name)
		header(name);
		d = $.d().id('ct').fS(40)
		fn();
		startRtr(name)
	})
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
}
_$r = function (ob) {}
$rR = function (ob) {return _$r({r: ob})}
$route = function (Rtr) {
	var rtr = new Rtr; // = $R(ob);
	$start();//rt._();
	return rtr
}
$Rtr = R$ = function (ob) {
	ob = ob || {}
	if (O(ob.R)) {ob.routes = ob.R}
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
	return Rt
	var rt = new Rt()
	//rt._ = _$start
	//rt.$ = $start
	return rt
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
ROUTEZ = function () {$.h4('routez (pushState=false)')
	$.fS(60).dI('ct')
		$s({
			$: {C: 'g', M: 10},
			d: {M: 12, B: '8px dotted orange'},
			label: {fS: 80, c: 'y', C: 'z', B: '4px dotted r'}
		})
	 
	 
	 
	
	
	Bb.InitView = function (fn) {return Bb.V.x({initialize: fn})}
	
	Bb.V.auto = Bb.InitView(function () {this.R()})
	Bb.V.ctAuto = Bb.V.auto.x({el: $('#ct')})
	
	
	Bb.contentView = function (link) {var g=G(arguments)
		return function () {new Bb.V.ctAuto({
			R: function () {var q = this.$el; q.E()
				_.e(A(g.f)?g.f:g, function (q) {q.A(q)})}})}}
	Bb.LinkView = function (lbTx, aTx, href) {
		return Bb.contentView($('<div>').A(
						$.lb(lbTx), $.br(),
						$.a(aTx, '#' + href)))}
	
	$R({
		initialize: function () {_$start()},
		r: {'': 'pg1', pg1: 'pg1', pg2: 'pg2'},
		pg2: Bb.LinkView('welcome to page 2!', 'go to page 1', 'pg1'),
		pg1: Bb.LinkView('welcome to page 1!', 'go to page 2', 'pg2')
	}) 
	
}
RTR = function () {

	
	$R({
		routes: {'': 'index', 'wap/rtr/images/:id': 'image', view: 'viewImage'},
		home: function () {$l('you are viewing home page')},
		index: function () {$l('you are viewing index')},
		image: function (id) {$l('image===')
			_.t(10, function () {$l($r() + '-id: ' + id)});
			$.bd().C('z')},
		viewImage: function () {$l('you are viewing an image')}})
	
	$.in(function () {$l('......'); r.n('/wap/rtr/images/32903290239032902390')})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
}
 
RT1 = function () {
	$.fS(60).dI('ct')
	$s({$: {M: 12, B: '8px dotted orange'}})
	
	_$r({
		R: {'': 'pg1',
			pg1: 'pg1',
			pg2: Bb.LinkView('pg2', 'pg1', 'pg1')
		},
		
		pg1: Bb.LinkView('pg1', 'pg2', 'pg2')})
	
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

function _pre() {
	Bb.R = Bb.Router
	Bb.R.x = Bb.R.extend
	Bb.H = bH = Bb.History
	Bb.h = bh = Bb.history
	Bb.h.tr = Bb.h.trigger
	Bb.h.s = Bb.h.start
	rtr = Bb.R.prototype
	_$start = function () {
		Bb.h.s()
	}
	$start = function () {
		Bb.h.s({pushState: true})
	}
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
}
  
ROUT=function(){

	$s({
		_pages:{fS: 40}
	})
	 
	$.ul().K('pills').A(
	
			$.li().K('home-pill').A($.a('Home')), 
			$.li().K('about-pill').A($.a('About')),
			$.li().K('contact-pill').A($.a('Contact'))
	)
	
	$('<div>').A().id('home-page').K('pages').A('HOME')
	$('<div>').A().id('about-page').K('pages').A('ABOUT')
	$('<div>').A().id('contact-page').K('pages').A('PAGE')

	AppRouter = Bb.R.x({//map url routes to contained methods
		
		routes: {
			"": "home", 
			home: "home", 
			about: "about",
			 contact: "contact"},
	
			home: function () {
			$l('home')
			this.showPage('div#home-page');
			this.selectPill('li.home-pill')
			},
		
		about: function () {
		
		$l('about')
		$l('showPage -->')
		this.showPage('div#about-page');
			$l('selectPill -->')
		 this.selectPill('li.about-pill')
	$l('done with ABOUT handler')
			},
		
		contact: function () {$l('contact')
		this.showPage('div#contact-page');this.selectPill('li.contact-pill')},
		
		hidePages: function () {
			$('div.pages').hide()
		},
		
		showPage: function (page) {
			this.hidePages();
			
			$(page).show()
		
		},//hide all pages//show passed page by selector
		
		deselectPills: function () {$('ul.pills li').removeClass('active')},//deselect all navigation pills
		
		selectPill: function (pill) {this.deselectPills();$(pill).addClass('active')}
	
	}) //deselect all navigation pills//select passed navigation pill by selector
		
 
	
	
	AppView = Bb.V.x({
	
		el: $('body'),
		
		I: function () {
			rtr = this.router = new AppRouter()
			Bb.h.start({
				root: '/box/rout', pushState:true
			})
		},
		
		
		E: {
		    'click ul.pills li.home-pill a': 'displayHome', 
		    'click ul.pills li.about-pill a': 'displayAbout', 
		    'click ul.pills li.contact-pill a': 'displayContact'
	    },
		displayHome: function () {
		
			rtr.navigate("home", {trigger:true})},//update url and pass true to execute route method
		displayAbout: function () {
			rtr.navigate("about", {trigger: true}) },//update url and pass true to execute route method
		displayContact: function () {
			rtr.navigate("contact", {trigger: true}) }//update url and pass true to execute route method
		
	})
		 
		 
		 
		new AppView()
	 
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