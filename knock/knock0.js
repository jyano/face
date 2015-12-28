 $L('$_app_Clas_$','data')
$o = function () {
	var g = G(arguments)
	
	g[0] = D(g.f)? g.f: 
			D(g.s)? g.s:   g.n ? 
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
 $.ko=function(){}
 function data(){

//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
	 str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
	 initialData = [
		 {name: "Well-Travelled Kitten", sales: 352, price: 75.95},
		 {name: "Speedy Coyote", sales: 89, price: 190.00},
		 {name: "Furious Lizard", sales: 152, price: 25.00},
		 {name: "Indifferent Monkey", sales: 1, price: 99.95},
		 {name: "Brooding Dragon", sales: 0, price: 6350},
		 {name: "Ingenious Tadpole", sales: 39450, price: 0.35},
		 {name: "Optimistic Snail", sales: 420, price: 1.50}
	 ]
	 
	 
	 
	 
	 PLANS = [
		 {name: "Mercury", type: "rock"},
		 {name: "Venus", type: "rock"},
		 {name: "Earth", type: "rock"},
		 {name: "Mars", type: "rock"},
		 {name: "Jupiter", type: "gasgiant"},
		 {name: "Saturn", type: "gasgiant"},
		 {name: "Uranus", type: "gasgiant"},
		 {name: "Neptune", type: "gasgiant"}
	 ]
 }
function $_app_Clas_$(){

	$._x = function (col, title) {
		$.C(col || $r())
		if (title) {
			$.A($.h1(title), $.hr())
		}
	}
	$.x = function () {
		var g = G(arguments), bd = $.bd()
		bd.E()
		var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
		{col: g.f, title: g.s}
		if (o.css) {
			$s(o.css)
		}
		$._x(o.col, o.title)
		if (g.p) {
			bd.A($.hr())
		}
		return $
		$.s = function (css, c, tx) {
			$s(css)
			$.x(c, tx)
			return $
		}
	}
	_$ = function (ob) {
		$.x(ob.C || $r(), ob.t)
		if (ob.vm) {
			OK(ob.vm)
		}
		if (ob.el) {
			els(ob.el)
		}
		if (ob.A) {
			_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
				q.A()
			})
		}
		if (ob._) {
			$.in(ob._)
		}
	}
	$.app = function () {
		var d = $.d.apply($, arguments)
		d.K('app').id('app')
		return d
	}
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