$L()
// RTR ALL U NEED TO KNOW!!!   https://www.youtube.com/watch?v=cIq6Z_Vv4nY
Rtr = R$ = function (ob) {
$l('R$')
	ob= ob || {}
	
	if( O(ob.R) ){ob.routes = ob.R}
	
	return Bb.R.x(ob)
}

$R = function (ob) {

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
 
function _pre() {
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
 	_$r = function (ob) {var rt = $R(ob); rt._(); return rt}
 $rR = function (ob) {return _$r({r: ob})}
	}
	Bb.h = Bb.history
	Bb.h.tr = Bb.h.trigger
	Bb.h.s = Bb.h.start
	Bb.H = Bb.History
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



$RoApp = function (name, fn) {$Fn(name, function () {
		
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
}
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
	$.a().A($.h1('afsd'))
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
ro.n=	function(){ro.navigate({trigger:true})}
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
})
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
$RoApp('RT150', function () {


	FirstVw = $$V({
	
	
		i: function () {this.r()},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')}).C('y')))}})
					
	FirstVw = $$V({
		i: function () {this.r()},
		r: function () {this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))}})
					
	SecVw = $$V({
		i: function () {this.r()},
		r: function () {this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)))}})
					
	
	SecVw = $$V({
		i: function () {this.r()},
		r: function () {this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')}).C('o'), $.sp('My 2nd View').fS(50)))}})
	
	
	r = $R({r: {
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