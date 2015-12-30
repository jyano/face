
$nav = function (pageName, rtr) {
	var nav =$.sp(pageName).K(pageName + '-nav')
	
	if(rtr){}
	return nav
}
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}


ROUT = function () {
	ct = $.d()
	_.e(['home', 'about'], function(o) {
		ct.A( $nav(o) )
		$mockPage(o)
		$('.' + o + '-nav').$(function () {
			rtr.N(o)
		})
	})
	
	$Rt({'': sh('home'), home: sh('home'),
		 about: sh('about')}, '/box/rout')
	
	
	function sh(o) {
		return function () {
			$('.pg').hd()
			$('*').rmK('A')
			$('#' + o + '-pg').sh()
			$('.' + o + '-nav').K('A')
		}
	}
	
	
	$s({_A: {C: 'y', c: 'z'}})
}



$Rt = function (o, root) {

	if(!o['routes'] && !o['rts'] && !o['rt'] && !o['R'] ){
		o = {routes: o}
	}
	return $rt(Bb.R.x(o), root)
}


rtr = Bb.R.prototype
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
$trg = function () {
	$ev.trigger.apply($ev, arguments)
}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
V$R = function (fn) {
	return V$({R: fn})
}
Bb.Co = Bb.Controller = function (Vw, md) {
	return new Vw({model: md})
}
Bb.el = function (Vw, md) {
	return new Vw({model: md}).el
}
BAC = BACKDEMO0 = function () {
	$.d('yoo hoo').id('cont')
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
$start = $route = function () {
	_$start = function () {
		Bb.h.s()
	}
	Bb.h.s({pushState: true})
	return new Rtr
}
sRtr = function (rtr) {
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
	rtr.rt = rtr.A = rtr.oR = function (rt, fn) {
		var rtr = this
		if (O(rt)) {
			//_.e(rt, function (v, k) {rtr.on('route:' +k, v)})
		}
		else {
			rtr.on('route:' + rt, fn)
		}
		return rtr
	}
	rtr.rp = function (url, op) {
		return this._n(url, _.x({replace: true},
				G(arguments).n ? {trigger: true} : {}))
	}//navigate: replace
// history:
	rtr.Fn = function () {
		return function (url) {
			this.N(url)
		}
	}
	return rtr
}
$R = $Rtr = R$ = function (ob) {
	ob = ob || {}
	if (O(ob.R)) {
		ob.routes = ob.R
	}
	ob.routes = ob.R ? ob.R : (ob.routes || ob.rt || ob.r || {}) //if (ob.i) {ob.initialize = ob.i}
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
	var rtr = Bb.R.x(ob)
	return rtr
	//rt._ = _$start
	//rt.$ = $start
	// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 
// BEST VIDEO (WATCH ALL, KNOW ALL) https://www.youtube.com/watch?v=cIq6Z_Vv4nY
// RTR ALL U NEED TO KNOW!!!   https://www.youtube.com/watch?v=cIq6Z_Vv4nY
}
$RoApp = function (name, CALLBACK) {
	window[name] = function () {
		name = name.toUpperCase()
		$.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
		$.sp(name).fS(100).C('o', 'x')
		$.hr()
		d = $.d().id('ct').fS(40)
		CALLBACK()
		Bb.h.s({pushState: true, root: "/box/" + name + "/"})
	}
}
 
$rt = function (Rtr, root, ob) {
	if (Rtr) {
		rtr = rt(Rtr, ob)
	}
	Bb.h.s({
		root: root,
		pushState: true
	})
	return rtr
	function rt(Rtr, ob) {
		return sRtr(new Rtr(ob))
	}
}
ROUTEZ = function () {
	$.h4('routez (pushState=false)')
	$.fS(60).dI('ct')
	$s({
		$: {C: 'g', M: 10},
		d: {M: 12, B: '8px dotted orange'},
		label: {fS: 80, c: 'y', C: 'z', B: '4px dotted r'}
	})
	Bb.InitView = function (fn) {
		return Bb.V.x({initialize: fn})
	}
	Bb.V.auto = Bb.InitView(function () {
		this.R()
	})
	Bb.V.ctAuto = Bb.V.auto.x({el: $('#ct')})
	Bb.contentView = function (link) {
		var g = G(arguments)
		return function () {
			new Bb.V.ctAuto({
				R: function () {
					var q = this.$el;
					q.E()
					_.e(A(g.f) ? g.f : g, function (q) {
						q.A(q)
					})
				}
			})
		}
	}
	Bb.LinkView = function (lbTx, aTx, href) {
		return Bb.contentView($.d().A(
				$.lb(lbTx), $.br(),
				$.a(aTx, '#' + href)))
	}
	$R({
		initialize: function () {
			Bb.h.s()
		},
		r: {'': 'pg1', pg1: 'pg1', pg2: 'pg2'},
		pg2: Bb.LinkView('welcome to page 2!', 'go to page 1', 'pg1'),
		pg1: Bb.LinkView('welcome to page 1!', 'go to page 2', 'pg2')
	})
	RT1 = function () {
		$.fS(60).dI('ct')
		$s({$: {M: 12, B: '8px dotted orange'}})
		$R({
			R: {
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
}
DOC = function () {
	$TrgFn = function (str) {
		return function () {
			this.trg(str)
		}
	}
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
}
RTR0 = function () {
	$CSS({h1: {'font-size': 100}})
	r = new Bb.R({
		routes: {
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
	})
	sRtr(r)
	Bb.h.s({pushState: true})
	_.in(3, function () {
		r.n('55c24c8f4198473b0d000004.png')
	})
	$.a().A($.h1('afsd'))
	$('body').on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
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
	RT7 = function () {
		$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]',
				knockAncs).A($.a().A($.h1('afsd')))
		rtr = sRtr(new Bb.R.x(rtsOb2))
		Bb.h.s({pushState: true})
	}
}
function ach$$$() {
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
	$SecVw = V$i({
		R: ll.TpFn(ll($.lb('My 2nd View'),
				$.br(), $.a().hr('first').A('Go to 1st View')))
	})
}
//http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
RTR = function () {
	Rtr = $R({
		routes: {'': 'index', 'wap/rtr/images/:id': 'image', view: 'viewImage'},
		home: function () {
			$l('you are viewing home page')
		},
		index: function () {
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
	rtr = sRtr(new Rtr)
	_.in(function () {
		$l('......');
		rtr.n('/wap/rtr/images/32903290239032902390')
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
R$R = $rR = function (fn) {
	return R$({R: fn})
}
anchorClickBlocker = function () {
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
knockAncs = function (ev) {
	ev.preventDefault()
	rtr.n($(this).attr('href',
			{trigger: true}))
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
					$.sp('My 2nd View').fS(50)))
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
$TrRtrFn = notUsed = function (rtr, fn) {
	//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
	return function (md) {
		$Trg(rtr, fn(md))
	}
}
SINGH = function () {
	vw1 = null;
	vw2 = null;
	vw3 = null;
	MsFn = function (vwNum) {
		return function () {
			var vw = this
			return vw.$el.html(
					tp(vw.g('Message'), vwNum)
			)
		}
		function tp(message, vwNum) {
			return message + " from the View " + (vwNum || 0) + "."
		}
	}
	Vw1 = Bb.V.x({I: MsFn(1)})
	Vw2 = Bb.V.x({I: MsFn(2)})
	Vw3 = Bb.V.x({I: MsFn(3)})
	$s({$: {C: 'y'}})
	$.C('o').fS(80)
	d = $.d().id('cntr').A().C('b', 'w').W(400).pad(20).html('afsadsf')

	$.bt('vw1', function () {
		$l('b1')
		rtr.N('vw1')
		if (!vw1) {
			vw1 = new Vw1({model: greet})
		}
		
		cntr.myChildV = vw1
		cntr.R()
	})
	
	$.bt('v2', function () {
		$l('b2')
		rtr.N('vw2')
		if (!vw2) {
			vw2 = new Vw2({model: greet})
		}
		cntr.myChildV = vw2
		cntr.R()
	})
	$.bt('v3', function () {
		$l('b3')
		rtr.N('vw3')
		if (!vw3) {
			vw3 = new Vw3({model: greet})
		}
		cntr.myChildV = vw3
		cntr.R()
	})

	greet = new Vw1({Message: "Hello world"})
	CtV = Bb.V.x({
		myChildV: null,
		R: function () {
			$l('CntrV rendering')
			var vw = this
			vw.$el.html("Greeting Area")
			vw.$el.A(vw.myChildV.$el)
			return vw
		}
	}) 
  
	
	Rtr = Bb.R.x({
		greeting: null,
		ctnr: null,
		vw1: null,
		vw2: null,
		vw3: null,
		initialize: function () {
		
		
			$l('init')
			this.greeting = new Bb.M({Message: "Hello world"});
			cntr=this.ctnr = new CtV({
			
				el: $("#ctnr"),
				model:   greet
			})
	
		
		},
		routes: {
			"": "handleRoute1",
			"vw1": "handleRoute1",
			"vw2": "handleRoute2",
			"vw3": "handleRoute3"
		},
		handleRoute1: function () {
			$l('h1')
			if (this.vw1 == null) {
				this.vw1 = new Vw1({model: this.greeting});
			}
			this.ctnr.myChildV = this.vw1;
			this.ctnr.R();
		},
		handleRoute2: function () {
			$l('h2')
			if (this.vw2 == null) {
				$l('vw2 null')
				this.vw2 = new Vw2({
					model: this.greeting
				});
			}
			this.ctnr.myChildV = this.vw2
			$l('will R cntr again..')
			this.ctnr.R()
		},
		handleRoute3: function () {
			$l('h3')
			if (this.vw3 == null) {
				this.vw3 = new Vw3({model: this.greeting});
			}
			this.ctnr.myChildV = this.vw3;
			this.ctnr.R();
		}
	})
	
	rtr = $rt(Rtr, '/box/singh')
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
$.k = function (k) {
	var q = $.sp()
	q.K(k)
	return q
}
