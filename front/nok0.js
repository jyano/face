 
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

$o = function () {
	var g = G(arguments)
	g[0] = g.u ? (g.n ? 0 : 1) : g.f
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
function extending() {
	oA = ko.observableArray.fn
	oA.rm = function (i) {
		var oA = this
		oA.remove(i)
		return oA
	}
	oA.p = function (i) {
		var oA = this
		oA.push(i)
		return oA
	}
}
extending()
//note: widget name apparently must be lowercase
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//bT,bV and computed
// ko.b({ g[0]:  ko.o(b) })
 function lost(){
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

// $.fn.ko=function(){}
 $.ko=function(){}