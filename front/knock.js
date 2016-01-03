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