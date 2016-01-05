 
KO6 = CSSDATACLICK = KNOCKS = function () {
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
KO7 = BHTML = HTM = function () {
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
KO8 = ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
KO9 = IIFI = function () {
	$.cb().b('checked', 'dispMs')
	$.sp('Disp ms')
	$.d().if$('dispMs').A(
			$.p('Here is a message. Astonishing'))
	ok(vm = {dispMs: $o(0)})
}
KO10 = ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	$.sp(['phone #:', v$('num').en$('hasPhone')])
	$.sp([ch$('hasPhone'), 'I have phone'])
	ok({
		num: '',
		hasPhone: $o(0)
	})
}
KO11 = TEXT = function () {
	t$('textVal')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(4, function () {
		vm.textVal('changed the view model!')
	})
}
KO12 = WITH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', t$('lat'),
			'lon:', t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
KO13 = VIS = VISABLE = function () {
	$.d().A('ALWAYS HERE!')
	$.d().A('see me if true!').vs$('shouldIBeVisible')
	ok(vm = {shouldIBeVisible: $o(1)})
	_.in(4, function () {
		vm.shouldIBeVisible(0)
		_.in(2, function () {
			vm.shouldIBeVisible(1)
		})
	})
}
KO14 = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r())//.cl$('name')
		}
	}
	ok(vm)
}
KO15 = FIF = function () {
	$.A(
			$('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>').C('r'),
			$(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>').C('b')
	)
	_.in(function () {
		ok({
			displayMessage: $o(false)
		});
	})
}
KO16 = CPD = COMPUTED = function () {
	$s({$: {P: 5, c: 'o', fS: 50}})
	$.d().A(
			$.d().A('F: ', $.sp().t$('f')),
			$.d().A('L: ', $.sp().t$('l')),
			$.d().A('FL: ', $.sp().t$('fl')),
			$.sp().A('F: ', $.ip().v$('f')),
			$.d().A('L: ', $.ip().v$('l')), //.id('l'), 
			$.bt('click me').cl$('capL')
	).C('b').pad(20)
	vm = {
		f: $o('jason'),
		l: $o('yanofski'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KO17 = KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}
function like() {//	return VoteFns(vm = {vote: pmOb.vote || ''}, ['like', 'hate'])
//can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()
	VoteFns = function (vm, whats) {
		_.e(A(whats) ? whats : [whats], function (what) {
			vm[what] = function () {
				vm.vote(what)
			}
		})
		return vm
	}
	Prod = function (name, op) {
		return {name: name, op: $o(op)}
	}
}
$.ok = function (fn) {
	return $.bt('ok', fn)
} ///////
$.okPD = function (fn) {
	return $.ok(function (ev) {
		_.pD(ev)
		return fn(ev)
	})
}
$.lIp = function (lbTx, id) {
	var ip = $.ip()
	ip.id(id || lbTx)
	var p = $.p()
	p.A($.lb(lbTx + ': '), ip)
	p._ip = ip
	return p
}
$.fo = function (title, chArr, fn) {
	var f = $.f()
	f.A($.h1(title))
	if (A(chArr)) {
		_.e(chArr, function (ch) {
			f.A(ch)
		})
	}
	if (F(fn)) {
		f.A($.okPD(fn))
	}
}
$.fAc = function (ac) {
	return $.f().ac(ac)
}
$.ipStPr = function (id) {
	var ip = $.ip().stPr()
	if (S(id)) {
		ip.id(id)
	}
	return ip
}
$.spC = $.spCA = function (C, CH) {
	var g = G(arguments)
	var $el = $.sp()
	$el.C(C)
	A(CH) ? _.e(CH, add) : _.e(g.r, add)
	return $el
	function add(ch) {
		$el.A(ch)
	}
}
$.btC = $.btCA = function (C, chArr, fn) {
	var bt = $.bt(' ', fn).C(C)
	_.e(chArr, function (ch) {
		bt.A(ch)
	})
	return bt
}
$.okP = $.okPo = function (url, da, fn) {
	$.okPD(function () {
		$.P(url, da, fn)
	})
}
$.iV = function (id) {
	return $(S.eL(id, '#')).v()
}
$.IV = function (id) {
	return $(S.eL(id, '#')).V()
}
$.IVOb = function () {
	var g = G(arguments)
	var ob = {}
	_.e(g, function (arg) {
		ob[arg] = $.IV(arg)
	})
	return ob
}
$.fn.su = function (fn) {
	var $el = this
	$el.submit(fn)
	return $el
}
$.fn.suPD = $.fn.suPrDf = function (fn) {
	var $el = this
	$el.su(function (ev) {
		$.pD(ev)
		fn(ev)
	})
	return $el
}
$.P$d = function (url, ipId, title) {
	$.P(url, $.IV(ipId), $cDFn(title))
}
$.cDFn = function (title) {
	return function (da) {
		$cD(title, da)
	}
}
$.cD = function () {
	var g = G(arguments), o
	o = (g.S_ && g.s) ?
	{title: g.f, da: g.s} :
			g.S_ ? {title: g.f, da: window[g.f]} :
			{da: g.f}
	$l(o.title + ' ->')
	console.dir(o.da)
	return o.da
}
$.dHr = function () {
	var d = $.d.apply($, arguments)
	return $.d().A(d, $.hr())
}
$.pD = _.pD = function (ev) {
	ev.preventDefault()
	return ev
}
$.fS = function (size) {
	$s({$: {fS: (N(size, 40))}})
	return $
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
//flilterbale?}
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
e$ = function (bnd, kids) {
	var g = G(arguments)
	var sp = $.sp(A(g.s) ? g.s : g.r)
	sp.e$(bnd)
	return sp
}
ok$o = function (key, val) {
	vm = $Ob(key, $o(val))
	ok(vm)
}
function checkbox() {
	ch$cb = function (bnd) {
		return $.cb().ch$(bnd)
	}
	$d_ch$cb = $d.ch$cb = function (text, ch$) {
		$.d().A(ch$cb(ch$), text)
	}
	spCh$Cb = sp_Ch$Cb = function () {
	}
	ch$cb = function (bnd) {
		return $.cb().ch$(bnd)
	}
	$d_ch$cb = $d.ch$cb = function (text, ch$) {
		$.d().A(ch$cb(ch$), text)
	}
}
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
//$.sl.o$ = function (a) {return $.sl().o$(a)}//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
t$sp = function () {
}
v$tI = v$ip = ko.v$tI = ko.v$ip = $.ip$v = function () {
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
t$ = ok.t$ = t$d = $.d.t$ = function (bd, textVal) {
	return $.sp().t$(bd).A(textVal || '')
}
cl$ = function (bnd, btTx) {
	var g = G(arguments)
	var bt = $('<button>').A()
	bt.cl$(bnd)
	bt.A(D(btTx) ? btTx : bnd)
	return bt
}
vs$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).vs$(bnd)
}
v$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).v$(bnd)
}
fc$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).fc$(bnd)
}
tI$ = function (bnd, kids) {
	var g = G(arguments)
	return $.ip(A(g.s) ? g.s : g.r).tI$(bnd)
}
pw$ = function (bnd, kids) {
	var g = G(arguments)
	return $.pw(A(g.s) ? g.s : g.r).tI$(bnd)
}
ch$ = function (bnd) {
	return $.cb().ch$(bnd)
}
ip$ = function (ob) {
	return $.ip().b(ob)
}
d$ = function (ob) {
	return $.d().b(ob)
}
w$ = function (bnd, kids) {
	var g = G(arguments)
	return $.sp(A(g.s) ? g.s : g.r).w$(bnd)
}

function liveExamples(){/*
 <div>You've clicked <span data-bind='text: numberOfClicks'>&nbsp;</span> times</div>

 <button data-bind='click: registerClick, disable: hasClickedTooManyTimes'>Click me</button>

 <div data-bind='visible: hasClickedTooManyTimes'>
 That's too many clicks! Please stop before you wear out your fingers.
 <button data-bind='click: resetClicks'>Reset clicks</button>
 </div>

 */
	ClickCounterViewModel = function () {
		this.numberOfClicks = ko.observable(0);
		this.registerClick = function () {
			this.numberOfClicks(this.numberOfClicks() + 1);
		};
		this.resetClicks = function () {
			this.numberOfClicks(0)
		}
		this.hasClickedTooManyTimes = ko.pureComputed(function () {
			return this.numberOfClicks() >= 3
		}, this0)
	}
	ko.applyBindings(new ClickCounterViewModel());
//https://www.youtube.com/watch?v=xnBROE-RHW0 15:30 talks koColls
}
function accessingRawParams(){
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
	/*
	 MARKUP=function(){z()
	
	
	 //Sometimes you may want to create a component that receives
	 // markup and uses it as part of its output.
	 //    Consider a special list component that can be invoked as follows:
	
	 ok.$('my-special-list', {items: someArrayOfPeople}).A(//$("<!-- Look, Im putting markup inside a custom element -->"),
	 'The person' ,
	 $.em().bT('name'), $.em().bT('age') , 'years old.')
	
	
	 $('<template>').id("my-special-list-template").A(
	 $.h3('Here is a special list'),
	 $.uE("{ data: myItems, as: 'myItem' }").A(
	
	 $.li().A(
	 $.h4('Here is another one of my special items'),
	 // '<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->'))
	 ok.$('my-special-list',{items:'someArrayOfPeople'}).A(
	 //'<!-- Look, I'm putting markup inside a custom element -->',
	 'The person', $.em().bT('name'),  'is', $.em().bT('age'),'years old.'))
	 )
	
	 ko._('my-special-list', {
	 t: { element: 'my-special-list-template' },
	 m: function(params) {this.myItems = params.items}
	 })
	
	 ok({
	 someArrayOfPeople: ko.observableArray([
	 { name: 'Lewis', age: 56 },
	 { name: 'Hathaway', age: 34 }
	 ])
	 })
	
	 //This “special list” example does nothing more than insert a
	 // heading above each list item. But the same technique
	 // can be used to create sophisticated grids, dialogs, tab sets, and so on,
	 // since all that is needed for such UI elements is common UI markup
	 // (e.g., to define the grid or dialog’s heading and borders) wrapped around arbitrary supplied markup.
	 //
	 //    This technique is also possible when using components without
	 // custom elements, i.e., passing markup when using the component binding directly.
	 }
	 CUSTTAGNAMES=function(){
	 z()
	
	 //    If you want to have different custom element tag names,
	 // you can override getComponentNameForNode to control this. For example,
	 //
	 ko.cm.getComponentNameForNode = function(node) {
	
	 var tagNameLower = node.tagName && _.tL(node.tagName)
	 if (ko.cm.iR(tagNameLower)) {return tagNameLower}         // If the element's name exactly matches a preregistered// component, use that component
	 else if (tagNameLower === "special-element") { return "MySpecialComponent"}// For the element <special-element>, use the component// "MySpecialComponent" (whether or not it was preregistered)
	 else {return null; }// Treat anything else as not representing a component
	 }
	
	 //You can use this technique if, for example, you want to control which subset of
	 // registered components may be used as custom elements.
	 //
	 ko.$('my-custom-element', { })//No config needed
	
	 //Alternatively, you can override getComponentNameForNode to control
	 // dynamically which elements map to which component names,
	 // independently of preregistration.
	 }
	 COMBINE=function() {
	
	 //    Note: Combining custom elements with regular bindings
	 //A custom element can have a regular data-bind attribute
	 // (in addition to any params attribute)
	 ko.$('products-list', {category: 'chosenCategory'}).bVs('shouldShowProducts')
	
	
	 //However, it does not make sense to use bindings that would modify
	 // the element’s contents, such as the text or template bindings,
	 // since they would overwrite the template injected by your component.
	 //
	 //    Knockout will prevent the use of any bindings that use
	 // controlsDescendantBindings, because this also would clash
	 // with the component when trying to bind its viewmodel to
	 // the injected template. Therefore if you want to use a control
	 // flow binding such as if or foreach, then you must wrap it around
	 // your custom element rather than using it directly on the custom element, e.g.,:
	 //
	
	 //$("<!-- ko if: someCondition --><products-list></products-list> <!-- /ko -->")
	
	 //or:
	 $.ulE('allProducts').A(ko.$('product-details', {product: '$data'}))
	
	 //Note: Custom elements cannot be self-closing
	 //You must write <my-custom-element></my-custom-element>,
	 // and not <my-custom-element />. Otherwise, your custom element is not closed and subsequent elements will be parsed as child elements.
	 //    This is a limitation of the HTML specification and is outside the scope of what Knockout can control.
	 // HTML parsers, following the HTML specification, ignore any self-closing slashes (except on a small number of special “foreign elements”, which are hardcoded into the parser). HTML is not the same as XML.
	
	 }
	 RAMPAMS=function() {
	 z()
	
	
	 //Advanced: Accessing $raw parameters
	 //Consider the following unusual case, in which useObservable1, observable1, and observable2 are all observables:
	
	 ok.$('some-component', {
	 myExpr: 'useObservable1() ? observable1 : observable2'
	 })
	 //Since evaluating myExpr involves reading an observable (useObservable1), KO will supply the parameter to the component as a computed property.
	 //
	 //    However, the value of the computed property is itself an observable. This would seem to lead to an awkward scenario, where reading its current value would involve double-unwrapping (i.e., params.myExpr()(), where the first parentheses give the value of the expression, and the second give the value of the resulting observable instance).
	 //
	 //This double-unwrapping would be ugly, inconvenient, and unexpected, so Knockout automatically sets up the generated computed property (params.myExpr) to unwrap its value for you. That is, the component can read params.myExpr() to get the value of whichever observable has been selected (observable1 or observable2), without the need for double-unwrapping.
	 //
	 //    In the unlikely event that you don’t want the automatic unwrapping, because you want to access the observable1/observable2 instances directly, you can read values from params.$raw. For example,
	 //
	 function MyComponentViewModel(p) {
	 var currentObservableInstance = p.$raw.myExpr();
	 }
	
	 // Now currentObservableInstance is either observable1 or observable2
	 // and you would read its value with "currentObservableInstance()"
	 //This should be a very unusual scenario,
	 // so normally you will not need to work with $raw.
	 }
	 */}