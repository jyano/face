
$nav = function (pageName, rtr) {
	var nav =$.sp(pageName).K(pageName + '-nav')
	
	if(rtr){}
	return nav
}
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}



$Rt = function (o, root) {

	if(!o['routes'] && !o['rts'] && !o['rt'] && !o['R'] ){
		o = {routes: o}
	}
	return $rt(Bb.R.x(o), root)
}


rtr = Bb.R.prototype

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
$.k = function (k) {
	var q = $.sp()
	q.K(k)
	return q
}
server = {
	d: 2,
	n: 2,
	docs: {
		1: {text: 'this is a doc', id: 1}
	},
	notes: {
		1: {1: {text: 'note'}, 2: {text: 'another note'}}
	},
	get: {
		'/docs': function (q, p) {
			var res = []
			for (var doc in docs) {
				if (docs.hasOwnProperty(doc)) {
					res.push(docs[doc])
				}
			}
			p.json(res)
		},
		'/docs/:did/notes': function (q, p) {
			var res = [], n = notes[q.params.id]
			for (var note in n) {
				if (n.hasOwnProperty(note)) {
					res.push(n[notes])
				}
			}
		}
	},
	post: {
		'/docs': function (q, p) {
			var doc = q.body
			doc.id = d++
			docs.doc.id = doc
			p.json(doc)
		},
		'/docs/:did/notes': function (q, p) {
			var note = q.body, id = q.params.id
			note.id = n++
			if (!notes[id]) {
				notes[id] = {}
			}
			notes[id][notes.id] = note
			p.json(note)
		}
	},
	put: {
		'docs/:id': function (q, p) {
			docs[q.params.id] = q.body
			p.json(q.body)
		},
		'docs/:did/notes:nid': function (q, p) {
			notes[q.params.id][q.params.nid] = q.body
			p.json(q.body)
		}
	}
}
function filteredCol() {
	// collections:
	FLCL004 = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = Bb.V.e({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		 this.$el.html(HT); return this }
		 })*/
		Cl = C$({
			I: function () {
			}
		})
		cl = new Cl({})
		/*
		 cl.add([{a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a:'f', b: 's'},
		 {a: 's', b:'t'}
		 ])
		
		
		 res = cl.where({a:'f',b:'s'})
		 */
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	FLCL0 = function () {
		$.x('r', 'filtering a cl, but tp missing?!')
		// ... get the filter info from the DOM
		// get the filtered list from the collection
		// iterate over the filtered list and render the results in to the html array
		// populate the DOM with the resulting HTML
		FlV = $V({
			ev: {'click #run': 'runFilter'},
			runFilter: function (e) {
				e.pD();
				this.fl = {};
				this.r()
			},
			r: function () {
				HT = [];
				_.e(this.cl.where(this.fl),
						function (item) {
							HT.push(_.tp($('my-item-template').H())(item.tJ()))
						})
				this.q.h(HT);
				return this
			}
		})
		Cl = $$C({
			i: function () {
				$l('fuck')
			}
		})
		cl = Cl()
		cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
		res = cl.where({a: 'f', b: 's'})
		_.e(res, function (q) {
			var j = q.tJ();
			$.h1(j.a + ' !@@@##@ ' + j.b)
		})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
}
function clicks() {
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('GAPS IN HISTORY')
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	})
}
Tsk = V$({
	el: $('#cont'),
	I: function () {
		this.r()
	},
	R: function () {
		this.$el.ht(Temp('task'))
	},
	E: {'click button': 'add'},
	add: function () {
		alert($('#task_desc').v() + ' task added')
	}
})
$L(
		'$_app_Clas_$', 'data',
		'sty', 'html', 'attr', 'text', 'value', 'focus', 'iff',
		'able', 'visib', 'textIp', 'click', 'checked',
		'select', 'checkedApps', 'selApps')
$o = function () {
	var g = G(arguments)
	g[0] = D(g.f) ? g.f :
			D(g.s) ? g.s : g.n ?
					0 : 1
	return ko.o.apply(ko, g)
}
$oA = $oa = function () {
	var g = G(arguments)
	return ko.oA(g.A_ ? g.f : g)
}
$cO = $c = function () {
	return ko.computed.apply(ko, arguments)
}
ok = function self(vm, el) {
	if (A(vm)) {
		return self(vm[0], vm[1])
	}
	if (S(vm)) {
		return self($Ob(vm, el))
	}
	window.vm = vm
	ko.aB(vm, el)
	return vm
}
$ok = function self() {

// ???? pass plain object and element(string or ob?) :)
	var g = G(arguments)
	if (g.p) {
		_.in(0, function () {
			self.apply(null, g)
		})
	}
	// pass nothing -> {da: $o(1)} Note: 'da' replaced '$'
	if (g.u) {
		g.f = 'da'
	}
	// pass a single key, value -> {key:value}
	vm = S(g.f) ? Ob(g.f, D(g.s) ? g.s : $o(g.n)) :
		// pass just a value -> {$: value}
			F(g.f) || N(g.f) || A(g.f) ?
					Ob('da', g.f)
				// pass just plain obj (normal)
					: g.f
	ok(vm)
}
OK = function (vm) {
	_.in(.1, function () {
		ok(vm)
	})
}
$KOob = function (k, v) {
	var g = G(arguments)
	if (g.O) {
		var o = []
		_.e(g.f, function (v, k) {
			o.push($KOob(k, v))
		})
		return o.join()
	}
	k = KOob[k] ? KOob[k] : k
	v = v ? ': ' + v : ''
	return k + v
}
$.fn.dB = function (dB, p2) {
	return this.at({'data-bind': p2 ? (dB + ':' + p2) : dB})
}
$.fn.ko = function (a, b) {
	var o = []
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		this.b($l(o.join()))
	}
	else {
		if (KOob[a]) {
			a = KOob[a]
		}
		str = a + ':' + b;  // str= oO('b', a)
		this.at({'data-bind': str})
	}
	return this
}
$.fn.b = function (a, b) {
	var q = this, g = G(arguments)
	var str = g.O ? $KOob(g.f) :
			hasCln(a) ? a :
					$KOob(a, b || 't')
	return q.dB(str)
	function hasCln(str) {
		return str.indexOf(':') != -1
	}
}
ok$ = function (vm, app) {
	var g = G(arguments)
	$.app(g.r)
	ok(vm)
}
ok.oA = function (key, oA) {
	ok($Ob(key, $aO(oA)))
}
ko.$oa = function (name, fn) {
	ko.oa.fn[name] = fn
}
$.ko = function () {
}
function $_app_Clas_$() {
	KOAT = function () {
		_$({
			// color
			C: 'r',
			// app hw title header 
			t: 'attributes.. unlikely to use?',
			vm: {
				url: $o("year-end.html"),
				tt: $o("stats report")
			},
			A: [
				$.a('report').at$('{href:url,title:tt}')
			]
		})
	}
	KOBVS = function () {
		_$({
			C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
			el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
			_: function () {
				vm.vs(0);
				_.in(function () {
					vm.vs(1)
				})
			}
		})
	}
	$ok = function (vm, appCtn) {
		$.app(appCtn)
		ok(F(vm) ? vm() : vm)
	}
	FOCUS = function () {
		_$({
			C: 'u',
			t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().b("hasFocus: editingName"),
				$.h1('editing..').bVs('editingName'),
				$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")
			]
		})
	}
	VISABLE = function () {
		_$({
			C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
			el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
			_: function () {
				vm.vs(0);
				_.in(function () {
					vm.vs(1)
				})
			}
		})
	}
	ATTR = function () {
		_$({
			C: 'w',
			t: 'attributes.. unlikely to use?',
			vm: {url: $o("year-end.html"), tt: $o("stats report")},
			A: [$.aA('{href:url,title:tt}', 'report')]
		})
	}
	KOCSS = function () {
		_$({
			c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
			A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
			_: function () {
				vm.n(-5)
			}
		})
	}
}
function lost() {
	//note: widget name apparently must be lowercase
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//bT,bV and computed
// ko.b({ g[0]:  ko.o(b) })
// $.fn.ko=function(){}
	/*
	 var o = []
	 if (O(a)) {
	 _.each(a, function (v, k) {
	 o.push(oO('b', k) + ':' + v)
	 })
	 this.attr({'data-bind': o.join()})
	 }
	 else {
	 this.attr({
	 b: oO('b', a) + ':' + b
	 })
	 }
	 */
}
$.fn.h$ = function (s) {
	//= $.fn.bH 
	return this.b('html', s)
	// = $.fn.bH
}
$.fn.t$ = function (bnd) {
	return this.b('text', bnd || '$data')
}
$.fn.at$ = $.fn.a$ = function (s) {
	return this.b('attr', s)
}
$.fn.v$ = function (s) {
	var g = G(arguments)
	str = "value: " + s
	if (!g.n) {
		str += ", valueUpdate: 'afterkeydown'"
	}
	this.b(str)
	return this
}
$.fn.fc$ = $.fn.f$ = function (s) {
	return this.b('hasFocus', s)
}
$.fn.if$ = function (s) {
	return this.b('if', s)
	// = $.fn.bI = $.fn.bIf
}
$.fn.n$ = $.fn.not$ = function (s) {
	return this.b('ifnot', s)
}
$.fn.en$ = function (s) {
	return this.b('enable', s)
}
$.fn.d$ = function (s) {
	return this.b('disable', s)
}
$.fn.vs$ = function (bnd) {
	return this.b('visible', bnd)
}
$.fn.w$ = function (s) {
	return this.b('with', s)
}
$.fn.cl$ = $.fn.b$ = function (s) {
	return this.b('click', s)
}
$.fn.ev$ = function (s) {
	return this.b('event', s)
}
$.fn.ch$ = function (bnd) {
	return this.b('checked', bnd)
}
$.fn.tI$ = function (s) {
	return this.b('textInput', s)
}
$.fn.st$ = function (s) {
	return this.b('style', s)
}
$.fn.css$ = function (s) {
	//= $.fn.bS
	return this.b('css', s)
}
$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
	return this.b('options', s)
}
$.fn.sO$ = $.fn.bSO = function (s) {
	return this.b('selectedOptions', s)
}
$.fn.sm$ = function (s) {
	return this.b('submit', s)
}
$.fn.u$ = $.fn.uN$ = function (s) {
	return this.b('uniqueName' + s)
}
$.fn.tp$ = $.fn.bTp = function (s) {
	return this.b('template', s)
}
$.fn.e$ = function (s) {
//return this.b('foreach',S)
// = $.fn.bE
	// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
	var q = this, g = G(arguments)
	return g.p ? '$data.' + s : q.b('foreach', s)
//= $.fn.bindKOEach = $.fn.koE = $.fn.eKo = $.fn.bE = $.fn.ko_e 
}
$.fn.e$da = function (a) {
	//=$.fn.eD = $.fn.eB =  $.fn.bindKOEachData 
	return this.b('$data.' + a)
}
function classic() {
	knockoutBind2 = function (a) {

//= bd
		var g = G(arguments), a = g[0]
		if (g.p) {
			a = 'text: ' + a
		}
		if (g.n) {
			a = 'click: ' + a
		}
		if (g.m) {
			a = 'value: ' + a
		}
		if (g.d) {
			a = 'checked: ' + a
		}
		q.attr({'data-bind': a})
		return q
	}
}
VM = Feed = function (p) {
	this.ms = $o("Hi");
	this.ms = ko.o("Hi")
	this.feed = new Feed()
	this.feed2 = new Feed()
	this.feed.ms("Ms1")
	this.feed2.ms("Ms2")
	this.ms = ko.o("!")
	this.VM2 = {ms: $o("!")}
	this.somePop = p.smKey
	this.ms = ko.o("Hi");
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.feed.ms("Ms1");
	this.feed2.ms("Ms2");
}
Person = Per = function (n, ch) {
	var per = this
	per.n = n
	per.ch = ko.oa(ch)
	per.A = function () {
		per.ch.push('new ch')
	}
}
function classic() {
	el2H = function (a, t) {
		var g = G(arguments)
		var $q = $('<template>')
		$q.A(d = $.d())
		d.A(A(g.s) ? g.s : g)
		return d.ch(0).h()
	}
}
function _pre() {
	KOob = {
		e: 'foreach',
		ch: 'checked', c: 'checked',
		t: 'text',
		v: 'value',
		h: 'html',
		i: 'if',
		$: 'click',
		fc: 'hasFocus', hF: 'hasFocus', f: 'hasFocus',
		w: 'with',
		at: 'attr', a: 'attr',
		en: 'enable',
		vs: 'visible', tI: 'textInput',
		o: 'options',
		oT: 'optionsText',
		ev: 'event',
		sm: 'submit',
		sO: 'selectedOptions',
		n: 'ifnot',
		d: 'disable',
		///////////
		u: 'uniqueName', vU: 'valueUpdate',
		cm: 'component', tp: 'template',
		////////////////////
		s: 'css', sty: 'style', y: 'style'
	}
	ko.ut = ko.u = ko.utils
	ko.cm = ko.components
	ko.vE = ko.ve = ko.virtualElements
	ko.aB = ko.ab = ko.applyBindings
	ko.o = ko.observable
	ko.c = ko.computed
	ko.pC = ko.pc = ko.pureComputed
	ko.oA = ko.oa = ko.observableArray
	ko.aF = ko.ut.aF = ko.u.af = ko.u.arrayFilter
	ko.cm.rg = ko.cm.register
	ko.bH = ko.bh = ko.BH = ko.bindingHandlers
	ko.rTp = ko.rT = ko.renderTemplate
	ko.dO = ko.do = ko.dependentObservable
	ko.uw = ko.unwrap
	ko.ut.uo = ko.ut.unwrapObservable
	ko.bD = ko.applyBindingsToDescendants
	ko.cm.iR = ko.cm.isRegistered
	ko.vE.aB = ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
	ko.cm = ko.cmp = ko.comp = ko.components
	ko.rg = ko.cm.rg = ko.cm.reg = ko.cm.register
	ko.cm.iR = ko.cm.isRegistered
	ko.o.prototype.rm = ko.o.prototype.remove
	$.sl.o$ = function (a) {
		//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
		return $.sl().o$(a)
	}
	t$sp = function () {
	}
	v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
	}
}
old = function () {
	CUSTEL = function () {
		
		//MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
		// Now curObsrvInst is either
		// observable1 or obsrv2//
		// and you would read its value with "curObsrvInst()"
		// 'params' is an object whose k/v pairs are the pams
		// passed from the cm bd or cust el.
		// - 'cmtInf.el'
		//  is the el the component is being//
		//  injected into. When createVM is called, the template has//
		//  already been injected into this el, but isn't yet bound.
		// - 'componentInfo.templateNodes'
		// is an array containing any DOM
		//   nodes that have been supplied to the component. See below.
		// Return the desired view model instance, e.g.:
	}
	ko.rg = function () {
		var g = G(arguments), o = {n: g.f, op: g.s};
		o.op = o.op || {}
		if (!o.op.viewModel) {//op.viewModel = op.vm || op.m
			if (o.op.vm) {
				op.viewModel = o.op.vm
			}
			else if (o.op.m) {
				o.op.viewModel = o.op.m
			}
		}
		if (S(o.op.viewModel) || (O(o.op.viewModel) && !o.op.viewModel.element  )) {
			o.op.viewModel = {element: o.op.viewModel}
		}
		o.op.viewModel = o.op.viewModel || {vm: o.op}
		if (!op.template) {
			if (op.tp) {
				op.template = op.tp
			} else if (op.t) {
				op.template = op.t
			}
		}
		cm = ko.R(o.n, o.op)
		return cm
	}
}