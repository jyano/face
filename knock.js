ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	$.sp(['phone #:', v$('num').en$('hasPhone')])
	$.sp([ch$('hasPhone'), 'I have phone'])
	ok({hasPhone: $o(0), num: ''})
}
TEXT = function () {
	t$('textVal').C('p')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(function () {
		vm.textVal('changed the view model!')
	})
}
CPD = COMPUTED = function () {
	$.d([
		$.p('F: ', t$('f')),
		$.p('L: ', t$('l')),
		$.sp('F: ').A(v$('f')),
		$.p('L: ', v$('l')).id('l'),
		$.p('L: ', t$('fl')),
		cl$('capL')
	])
	vm = {
		f: $o('j'), l: $o('y'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}


FOC = PERFECT_FOR_EDITTING_A_PROFILE_IP = KOFC = function () {
//bind cb and bind ip to 'enable'
	$.p('Name:').A(
			v$('name').b({visible: 'editing', hasFocus: 'editing'}),
			t$('name').b({
				//visible: '!editing()',
				click: 'edit'
			}))
	$.p('Click the name to edit it; click elsewhere to apply changes')
	function VM(n) {
		var vm = this
		vm.name = $o(n)
		vm.editing = $o()
		vm.edit = function () {
			vm.editing(1)
		}
	}
	
	ok(new VM("Bert Bertington"))
}
SPAM = CHECKED = function () {
	$.p(['spam?', ch$('wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])]).vs$('wantSpam')
	vm = {
		wantSpam: $o(1),
		flav: $oa(["cherry", "almond"])
	}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
VIS = VISABLE = function () {
	$.h1('ALWAYS HERE!')
	$.h1('see me if true!').vs$('vs')
	ok(vm = {vs: $o(1)})
	_.in(function () {
		vm.vs(0);
		_.in(function () {
			vm.vs(1)
		})
	})
}
CLC = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r()).cl$('name')
		}
	}
	ok(vm)
}
WITH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', $.sp().t$('lat'),
			'lon:', $.sp().t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
BHTML = HTM = function () {
	init()
	$.d().fS(100).h$('htmlContent')
	ok(vm = {htmlContent: $o('wait..')})
	_.in(2, function () {
		vm.htmlContent(
				"<em>report: <a href=playboyUrl>here</a>.</em>"
		)
	})
	function init() {
		playboyUrl = 'http://www.playboy.com'
	}
}
ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			t$('f'),
			' ',
			t$('l')
	)]).e$('peep')
	vm = {peep: $oA([{f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}])}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD1 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey')
	$.t$('monkey')
	v$('monkey')
	$.sm('hello').cl$('A')
	$Ul('list',
			$.d(['my name is ', t$('name'),
				' and i like ', t$('color')]))
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.push({
				name: 'j', color: $r()
			})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	_.ev(1, function () {
		vm.A()
	})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD2 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A($.cb().ch$('showDT'))
	$Ul('peep',
			$.p([t$('n'), ' has ', t$('ch().length'), ' children']),
			$.a().ch$('New', 'A'),
			$Ul('ch', vs$('$root.showDT', t$())))
	ok({peep: peep, showDT: $o()})
	//add, conditional el
	//anonymous vm
}
KODEL = DELETEWORKS = ADD3 = ULP = function () {
	ok(function () {
		$s({bd: {C: 'x', c: 'y'}, $: {C: 'n', c: 'z', M: 5, fS: 42}, sp: {C: 'o', c: 'z'}})
		cl$('add', 'ADD')
		e$('people', $.d(['name: ',
			t$('$index'), t$('name'), cl$('$root.rm', 'DELETE')]))
		cl$('add', 'ADD')
		var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.rm = function () {
			o.people.remove(this)
		}
		return o
	}())
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
  
$L(
		'$_app_Clas_$', 'data',
'sty', 'html', 'attr', 'text', 'value', 'focus', 'iff',
		'able', 'visib', 'textIp', 'click', 'checked',
		'select', 'checkedApps', 'selApps')
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
function _pre() {
	pre()
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
	function pre() {
	}
	
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
	Peep = function () {
		return [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
	}
}
 
	CSSDATACLICK = KNOCKS = function () {
		$.ul().K('fs').e$("fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = ko.o()
			o.gtf = function (f) {
				o.chFI(f)
			}
			return o
		}
		ok(MVM())
	}
	IIFI = function () {
		
		$.cb().b('checked', 'dispMs')
		
		$.sp('Disp ms')
		$.d().if$('dispMs').A(
				$.p('Here is a message. Astonishing'))
		
		ok(vm = {dispMs: $o(0)})
	}
	
	ROOT = UDA = ULDATA = function () {
		d = $.d().id('hover')
		//Show the div onmouseover.
		d.mouseover(function () {
			$(this).next("#box").tog()
		}).mouseout(function () {
			//Hide to div onmouseout
		})
		$.a($.i('me').t$('matterId'))
		$.ul().e$('mDateTime').A($.li().A(
				$.ul().e$('$root.matter.index.type()[$data]').A(
						$.li([
							d,
							//$.dI('box').none('cssDisplayNone').A($.a('Edit'), $.a('Copy'), $.a('Delete')),
							$.d({
								id: 'box', dp: 'none',
								children: [$.a('Edit'), $.a('Copy'), $.a('Delete')]
							})
						]),
						$.li().t$('matterTitle'),
						$.li().t$('matterComment')
				)
		))
	}
	KOFLM = function () {
		//filter the items using the filter text
		d = $.dI('hover').A($.a().A($.i('me').b().t$('matterId')))
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").toggle()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todoo:none
			}
		})
		$.ul().b().e$('mDateTime').A($.li().A($.ul()
				.e$('$root.matter.index.type()[$data]').A(
				$.li().A(d, $.dI('box').css('display', 'none').A(
						$.a().A('Edit'), $.a().A('Copy'),
						$.a().A('Delete'))),
				$.li().t$('matterTitle'),
				$.li().t$('matterComment'))))
		vm = {}
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}
	
 FIF= function(){
	 $.A(
  $('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>'),
 $(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>'))
	 _.in(function(){
		 ko.applyBindings({
			 displayMessage: ko.observable(false)
		 });
	 })

	 
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


LST = function (n, ch) {
	$s({_sl:{
		fS: 16,
		C:'i',c:'j',
	position: 'relative',
	display: 'inline-block',
		P:66,
		h:'60%' 
		 }})
	
	$.f().A('Add item:',
			
			$.ip().tI$('itemToAdd'),
			
			$.sm('Add').en$('itemToAdd().length > 0')
			
	).sm$('addItem')
	
	$.p('Your values: ')
	
	$.sl().at({multiple: "multiple", height: 5})
	.b({o: 'allItems', sO:'selectedItems'}).K('sl')
	
	
	
	$.d([
	
		$.bt('Remove').b({cl:'removeSelected', en: 'selectedItems().length > 0'}),
		$.bt('Sort').b({cl: 'sortItems', en: 'allItems().length > 1'})
	
	])
	
	var BetterListModel = function () {
		this.itemToAdd = ko.observable("");
		
		this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
		
		this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
		
		this.addItem = function () {
		
		$l('add')
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
			// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		};
		
		this.removeSelected = function () {
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		};
		
		this.sortItems = function () {
			this.allItems.sort();
		};
	}
	
	ok(vm= new BetterListModel());
}
LST = function (n, ch) {
	$s({
		_sl: {
			fS: 16,
			C: 'i', c: 'j',
			position: 'relative',
			display: 'inline-block',
			P: 66,
			h: '60%'
		}
	})
	$.f().A('Add item:',
			$.ip().tI$('itemToAdd'),
			$.sm('Add').en$('itemToAdd().length > 0')
	).sm$('addItem')
	$.p('Your values: ')
	$.sl().at({multiple: "multiple", height: 5})
			.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
	$.d([
		cl$('removeSelected', 'Remove')
				.en$('selectedItems().length > 0'),
		cl$('sortItems', 'Sort').en$('allItems().length > 1')
	])
	var BetterListModel = function () {
		this.itemToAdd = ko.observable("");
		this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
		this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
		this.addItem = function () {
			$l('add')
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
			// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		}
		this.removeSelected = function () {
			$l('rm')
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		}
		this.sortItems = function () {
			$l('sort')
			this.allItems.sort();
		}
	}
	ok(vm = new BetterListModel());
}
COURSE = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COURSE = function () {
	$.x('x')
	$.s$('a', 'play');
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
COURSE = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COURSE = function () {
	$.x('x')
	$.s$('a', 'play')
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
TBE = function () {
	$.t([$.tH().A($.tr().A(
			$.th().A('First name'),
			$.th().A('Last name')
	)),
		$.tB().e$('people').A(
				$.tr().A($.td().t$('fn'),
						$.td().t$('ln')))])
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
TBTR = function () {
	bd.fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.td().t$('l')]))
	$.t().e$('peep').A(
			$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tr() [
					$.tr([$.td().t$('f'),
						', ', $.td().t$('l')])])
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
$Ul = function (bnd) {
	var g = G(arguments)
	var ul = $.ul().e$(bnd)
	_.e(A(g.s) ? g.s : g.r, function (q) {
		$.li().A(q).a2(ul)
	})
	return ul
}
$Cb = function (bnd, tx) {
	return $.sp().A($.lb((D(tx) ? tx : bnd) + ': '), ch$(bnd))
}
ULI = SHOWTIME = ROOT = $$$TWOLAYERSDEEPNESTED$$$ = function () {
	e$('peep').A(
			t$('n'), ' has ', t$('ch().length'), ' children',
			cl$('A').mar(10),
			$Ul(
					'ch',
					t$(),
					vs$('$root.showDT',
							'(child rendered at ',
							t$('$Dt().getSeconds()'),
							')')
			))
	$Cb('showDT', 'show time')
	//anonymous vm
	ok({
		peep: Peep(),
		showDT: $o(),
		A: function () {
		}
	})
}
function alt() {
	KOCL = SHOWTIME = function () {
		$.ul().$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a$('New', 'A')
						]),
						$.ul().e$('ch').A(
								$.li([
									$.sp().t$(), $.sp().vs$('$root.showDT').A(
											' (child rendered at ',
											$.sp().t$('$Dt().getSeconds()'),
											')'
									)]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		//anonymous vm
		OK({
			n: 'j',
			ch: Peep(),
			showDT: $o()
		})
	}
}
ULE = function () {
	$.ul().e$('PL').A(
			$.li().A(
					$.sp('Planet: '), $.b().t$('n'),
					$.d().t$('cap.n')))
	ok({
		PL: $oA([
			{n: 'Merc', cap: {n: 'afsdfads'}},
			{n: 'Earth', cap: {n: 'Barn'}},
			{n: 'Uranus', cap: {n: 5}}
		])
	})
}
ULROOT = function () {
	$.ul().e$('fs').A([
		$.li().b({t: '$data', sl: '{selected: $data==$root.chFI()}', cl: '$root.gtf'})
	]).K('fs')
	//$.ul().K('fs').e$("fs").A($.li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf"))
	MVM = function () {
		var vm = {
			selected: $(),
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: $o()
		}
		vm.gtf = function (f) {
			vm.chFI(f)
		}
		return vm
	}
	ok(MVM())
}
SEL = CUNTS = function (n, v) {
	$.sl().o$('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
SEL1 = SELPUSH = CHERRY = function () {
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).vs$('wants')
	_.in(function () {
		vm.flav.push("glut")
	})
	ok({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
SELMULTI = SLM = function () {
	$.p('Where you want to go?', $.sl().at({
		size: 5, multiple: true
	}).b({
		o: 'available', sO: 'chosen'
	}))
	ok({
		available: $oa(['France', 'Germany', 'Spain']),
		chosen: $oa(['Germany'])
	})
	_.in(function () {
		vm.chosen.push('France')
	})
}
KOS = function () {
	_$({
		c: 'v',
		t: 'css example.. will i use it?',
		vm: vm = {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}")
	})
	_.in(function () {
		vm.n(-5)
	})
}
K5 = BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'},
		_profPos: {C: 'b', c: 'r'}
	})
	d = $.d(['Prof Info'])
	str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
	d.b({y: str})
	vm = {curProf: $o(150000)}
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
K6 = BCSS = function () {
	$s({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40).b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
GIFT = CUSTBDJ = function () {
	Gift = function (gifts) {
		var vm = this
		vm.gifts = ko.oa(gifts)
		vm.addGift = function () {
			vm.gifts.push({name: "", price: ""})
		}
		vm.removeGift = function (gift) {
			vm.gifts.remove(gift)
		}
		vm.save = function (form) {
			alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
		}
		// To actually transmit to server as a regular form post, write this:
		// ko.utils.postJson($("form")[0], self.gifts)
	}
	var vm = this
	vm.gifts = $oA(gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}
	// To actually transmit to server as a regular form post, write this:
	// ko.utils.postJson($("form")[0], self.gifts)
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	$.d('You have selected the option').b({
		slVs: 'wrap',
		slDur: 600
	})
	$.lb().A($.cbC('wrap'), 'Gift wrap')
	ok({wrap: $o(1)})
}
KOGRID = function () {
	f = $.f().at({action: '/someServerSideHandler'})
	f.A(
			$.p(['You have asked for', $.sp('&nbsp;')])
					.t$('gifts().length', 'gift(s)'),
			$.t([$.tH($.tr([
				$.th('Gift name'), $.th('Price')
			])).vs$('gifts().length > 0'),
				$.TBd('gifts').A(
						$.tr([$.td().A($.ip().K('required').b({v: 'name', u: 1})),
							$.td($.ip().K('required number').b({v: 'price', u: 1})),
							$.td($.a('delete').b$('$root.removeGift'))])
				),
				$.bt$('addGift'),
				$.smEn('gifts().length > 0')
			])
	)
	f = $.f().at({action: '/someServerSideHandler'})
	f.A(
			$.p(['You have asked for', $.sp('&nbsp;')
					.bT('gifts().length'), 'gift(s)']),
			$.tVs('gifts().length > 0').A(
					$.tH().A($.tr().A(//tHR
							$.th().A('Gift name'),
							$.th().A('Price'))),
					$.tB().bE('gifts').A($.tr().A(  //tBR
							$.td(
									$.ip().K('required').b({v: 'name', u: 1})),
							$.td(
									$.ip().K('required number').b({v: 'price', u: 1})),
							$.td(
									$.a('delete').cl$('$root.removeGift'))))
			),
			$.bt('add gift').cl$('addGift'),
			$.sm().en$('gifts().length > 0'),
			$.p('You have asked for').A(
					t$('gifts().length'), 'gift(s)'),
			$.tVs('gifts().length > 0').A(
					$.tH($.tr([$.th('Gift name'), $.th('Price')])),
					$.tBE('gifts').A(
							$.tr([
								$.td().A($.ip().K('required').b({
									v: 'n', u: 1
								})),
								$.td().A($.ip().K('required number').b({
									v: 'price', u: 1
								})),
								$.td(
										$.a('delete').b$('$root.removeGift')
								)
							]))
			),
			$.b$('addGift'), $.sm().en$('gifts().length > 0')
	)
	f.A([
		$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
		$.t().$vs('gifts().length > 0').A(
				$.tH().A(
						$.tr().A(//tHR
								$.th().A('Gift name'),
								$.th().A('Price'))),
				$.tB().e$('gifts').A($.tr().A(  //tBR
						$.td().A(
								$.ip().K('required').b({
									v: 'name', un: true
								})),
						$.td().A($.ip().K('required number')
								.b({v: 'price', u: true})),
						$.td().A($.a('delete').cl$('$root.removeGift'))))),
		$.bt('add gift').b$('addGift'),
		$.sb().en$('gifts().length > 0')
	])
	ok(new Gift([
		{name: "Tall Hat", price: "39.95"},
		{name: "Long Cloak", price: "120.00"}
	]))
	ok(new Gift([
		{name: "Tall Hat", price: "39.95"}, {name: "Long Cloak", price: "120.00"}]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}
GRX = function () {
	$.x('x', 'grx1')
	$.d([
		$.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
		$.bt('add item').at({'data-bind': 'click: addItem'}),
		$.bt('sort by name').at({'data-bind': 'click: sortByName'}),
		$.bt('   Jump to first page')
				.at({
					'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
				})
	]).K('liveExample')
	function prev() {
		GRXX = function () {
			$.x('x', 'grx')
			/*
			 $CSS({
			
			
			 body { font-family: arial; font-size: 14px; }
			 .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
			 .liveExample input { font-family: Arial; }
			 .liveExample b { font-weight: bold; }
			 .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
			 .liveExample select[multiple] { width: 100%; height: 8em; }
			 .liveExample h2 { margin-top: 0.4em; }
			
			 .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
			 .ko-grid th { text-align:left; background-color: Black; color:White; }
			 .ko-grid td, th { padding: 0.4em; }
			 .ko-grid tr:nth-child(odd) { background-color: #DDD; }
			 .ko-grid-pageLinks { margin-bottom: 1em; }
			 .ko-grid-pageLinks a { padding: 0.5em; }
			 .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
			 .liveExample { height:20em; overflow:auto }
			 //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows
			
			 li { list-style-type: disc; margin-left: 20px; }
			
			
			 })
			
			 */
			$.d().at({'data-bind': 'simpleGrid: gridViewModel'})
			$.bt('add item').at({'data-bind': 'click: addItem'})
			$.bt('sort by name').at({'data-bind': 'click: sortByName'})
			$.bt('   Jump to first page').at({
				'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
			})
			PagedGridModel = function (items) {
				this.items = $oa(items)
				this.addItem = function () {
					this.items.push({
						name: "New item", sales: 0, price: 100
					})
				}
				this.sortByName = function () {
					this.items.sort(function (a, b) {
						return a.name < b.name ? -1 : 1
					})
				}
				this.jumpToFirstPage = function () {
					this.gridViewModel.currentPageIndex(0)
				}
				this.gridViewModel = new ko.simpleGrid.viewModel({
					data: this.items,
					columns: [
						{headerText: "Item Name", rowText: "name"},
						{headerText: "Sales Count", rowText: "sales"},
						{
							headerText: "Price", rowText: function (item) {
							return "$" + item.price.toFixed(2)
						}
						}
					],
					pageSize: 4
				})
			}
			ok(
					new PagedGridModel(initialData)
			)
		}
	}
}
PAGEGRID = REQUIRES_SIMPLE_GRID = function () {

//<div data-bind='simpleGrid: gridViewModel'> </div>
	$.d().b('simpleGrid', 'gridViewModel')
	$.bt('add').b$('addItem')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')
	PagedGridModel = {
		items: $oa(
				{n: "Well-Travelled Kitten", sales: 352, $: 75.95},
				{n: "Speedy Coyote", sales: 89, $: 190.00},
				{n: "Furious Lizard", sales: 152, $: 25.00},
				{n: "Indifferent Monkey", sales: 1, $: 99.95},
				{n: "Brooding Dragon", sales: 0, $: 6350},
				{n: "Ingenious Tadpole", sales: 39450, $: 0.35},
				{n: "Optimistic Snail", sales: 420, $: 1.50}
		),
		addItem: function () {
			this.items.push(
					{n: "New item", sales: 0, $: 100}
			)
		},
		sortByName: function () {
			this.items.sort(function (a, b) {
				return a.n < b.n ? -1 : 1
			})
		},
		jumpToFirstPage: function () {
			this.gridViewModel.currentPageIndex(0)
		},
		gridViewModel: new ko.simpleGrid.viewModel({
			data: this.items, columns: [
				{hdrT: "Item Name", rowText: "n"},
				{hdrT: "Sales Count", rowText: "sales"}, {
					hdrT: "Price",
					rowText: function (item) {
						return "$" + item.$.toFixed(2)
					}
				}],
			pageSize: 4
		})
	}
	PagedGrid = new PagedGridModel()
	ok(PagedGrid)
}
AC0 = ARICLE = KOC1 = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView')
	$.sp('summary')
	$.ip('r').at({
		name: 'choices',
		value: 'details'
	}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
AC1 = KOOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}//broken select and inputs
AC2 = KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'), $.br(), $.ip().v$('content')])
	)
	ok({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
}
BDSMPGRD = SIMPLEGRIDPLUGIN = function () {
	
	// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
	ko.simpleGrid = {
		// Defines a view model class you can use to populate a grid
		// If you don't specify columns configuration, we'll use scaffolding
		m: function (cf) {
			this.data = cf.data
			this.currentPageIndex = ko.o(0);
			this.pageSize = cf.pageSize || 5;
			this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
			this.itemsOnCurrentPage = ko.c(function () {
				var startIndex = this.pageSize * this.currentPageIndex();
				return ko.ut.uo(this.data)
						.slice(startIndex, startIndex + this.pageSize);
			}, this);
			this.maxPageIndex = ko.c(function () {
				return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
			}, this)
		}
	}
	/*
	 // Templates used to render the grid
	 var templateEngine = new ko.jqueryTmplTemplateEngine();
	 templateEngine.addTemplate("ko_simpleGrid_grid", "\
	 <table class=\"ko-grid\" cellspacing=\"0\">\
	 <thead>\
	 <tr>\
	 {{each(i, columnDefinition) columns}}\
	 <th>${ columnDefinition.headerText }</th>\
	 {{/each}}\
	 </tr>\
	 </thead>\
	 <tbody>\
	 {{each(i, row) itemsOnCurrentPage()}}\
	 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
	 {{each(j, columnDefinition) columns}}\
	 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
	 {{/each}}\
	 </tr>\
	 {{/each}}\
	 </tbody>\
	 </table>");
	 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
	 <div class=\"ko-grid-pageLinks\">\
	 <span>Page:</span>\
	 {{each(i) ko.utils.range(1, maxPageIndex)}}\
	 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
	 ${ i + 1 }\
	 </a>\
	 {{/each}}\
	 </div>");
	 */
	// The "simpleGrid" binding
	function gScafCols(d) {
		var cols
		if ((typeof d.length != 'number') || d.length == 0) {
			return []
		}
		cols = [];
		for (var popN in d[0])
			cols.push({headerText: popN, rowText: popN});
		return cols
	}
}
KOSCR = function () {
	$.A($.scrp('tt').A($.h1('afsdfds')),
			$.d().t$("{name:'tt'}"))
	// kob= ko.observable.prototype; kob.rm= kob.remove
	ok({})
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A($.d([$.ip().v$('title'), $.br(), $.ip().v$('content')]))
	ko.b({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')),
			t$("{name:'tt'}"));
	ok({})
//1 parameter: object that you want to use as the context for binding descendant elements.
//    If the expression you supply evaluates to null or undefined,
// descendant elements will not be bound at all,
// but will instead be removed from the document.
//    If the expression you supply involves any observable values,
// the expression will be re-evaluated whenever any of those observables change.
// Then, descendant elements will be cleared out,
// and a new copy of the markup will be added to your document and
// bound in the context of the new evaluation result.
//Note 1: Using “with” without a container element
//Just like other control flow elements such as if and foreach,
// you can use with without any container element to host it.
// This is useful if you need to use with in a place where
// it would not be legal to introduce a new container element just
// to hold the with binding.
//<ul>
//<li>Header element</li>
//<!-- ko with: outboundFlight -->
//...
//<!-- /ko -->
//<!-- ko with: inboundFlight -->
//...
//<!-- /ko -->
//</ul>
//The <!-- ko --> and <!-- /ko --> comments act as start/end markers, defining a “virtual element” that contains the markup inside. Knockout understands this virtual element syntax and binds as if you had a real container element.
	$.rb().at({name: 'choices', value: 'summary'}).ch$('ch', 'selectedView'), $.sp('summary')
	$.rb().at({name: 'choices', value: 'details'})
			.ch$('selectedView'), $.sp('details')
	$.d().t$("{name: templateToUse, foreach: articles }")
	script("summary").A(t$('title'))
	script('details')(
			_d()(
					h2().b('t', 'title'),
					pg().b('t', 'content'),
					bt('edit').b('$', '$parent.selectedArticle'))
	)
	script('edit')(
			_d()(ip().b('v', 'title'),
					br(),
					ip().b('v', 'content'))
	viewModel = {
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o()
	}
	viewModel.templateToUse = function (i) {
		return i === this.selectedArticle() ?
				'edit'
				: this.selectedView()
	}.bind(viewModel)
	ko.ab(viewModel)
}
$.fn.cm$ = function (bnd) {
	return this.b('component', bnd)
}
cm$ = function (name, params) {
	//= ko._
	var ob2s = function (ob) {
		ob = ob || {};
		var o = []
		_.e(ob, function (v, k) {
			o.push(k + ':"' + v + '"')
		})
		return o.join()
	}
	var _params = function (n, pam) {
		return $('<' + n + ' params = ' + (pam || '') + ' >')
	}
	if (name) {
		var q = $('<' + name + '>').A()
		if (params) {
			if (O(params)) {
				params = (   ob2s(params) )
			}
			q.at('params', params)
		}
		return q
	}
}
$rg = function (name, ob) {
	var $tpEl = function () {
		var g = G(arguments)
		var $q = $.sp().rm()
		_.e(g.A ? g.f : g, function (q) {
			$q.A(q)
		})
		return {element: $q[0]}
	}
	ob = ob || {}
	ob.viewModel = ob.viewModel || ob.vM
	ob.template = ob.template || ob.tp
	ob.template = $tpEl((ob.template))
	return ko.cm.rg(name, ob)
}
REG = function () {
	$s({i: {w: 40, h: 40}})
	$rg('test', {
		vM: function (pm) {
			this.text = $o(pm.name, 'default')
		},
		tp: $.d(['hello, ', t$('text'), ' ! ', $.i('me')])
	})
	cm$('test')
	cm$('test', {name: "tesfadsafdst"})
	ok({})
}
EXA = function () {
	$.mar()
	$rg('editor', {
		vM: function (pm) {
			this.text = $o(pm.initText, '')
		},
		tp: ['Message: ', v$('text'),
			'[', 'length:', t$('text().length'),
			']']
	})
	$.h4('First instance, without parameters')
	cm$('editor')
	$.h4('Second instance, passing parameters')
	cm$('editor', {initText: "Heldflo, world!"})
	ok({})
}
LIKE = function () {
	$.mar(10)
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	$rg('like', {
		vM: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like')
			}.bind(this)
			this.dislike = function () {
				this.chosenValue('dislike')
			}.bind(this);
		},
		tp: $.d().A(
				vs$('!chosenValue()').A(
						cl$('like'),
						cl$('dislike')).K("like-or-dislike"),
				vs$('chosenValue').A('You ', t$('chosenValue'), ' it').K('result')
		).bor('4px solid yellow')
	})
	e$('products', $.d().A(
			t$('name'),
			cm$('like', 'value:userRating')
	).C('g'))
	ok({
				products: [
					new Product('Garlic bread'),
					new Product('Pain au chocolat'),
					new Product('Seagull spaghetti', 'like') // This one was already 'liked'
				]
			}
	)
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
