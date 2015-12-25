$L('bindings','elements','apps')
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
OK = $ok = function self() {

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
function bindings(){
	$.fn.ch$ = function (s) {
		//= $.fn.ko_C_ = $.fn.bC
		return this.b('checked', s)
	}
	$.fn.h$ = function (s) {
		return this.b('html', s)
		// = $.fn.bH
	}
	$.fn.at$ = $.fn.a$ = function (s) {
		return this.b('attr', s)
	}
	$.fn.ev$ = function (s) {
		return this.b('event', s)
	}
	$.fn.vs$ = function (s) {
		return this.b('visible', s)
	}
	$.fn.st$ = function (s) {
		return this.b('style', s)
	}
	$.fn.w$ = function (s) {
		return this.b('with', s)
	}
	$.fn.if$ = function (s) {
		return this.b('if', s)
		// = $.fn.bI = $.fn.bIf
	}
	$.fn.n$ = $.fn.not$ = function (s) {
		return this.b('ifnot', s)
	}
	$.fn.cl$ = $.fn.b$ = function (s) {
		return this.b('click', s)
	}
	$.fn.sm$ = function (s) {
		return this.b('submit', s)
	}
	$.fn.fc$ = $.fn.f$ = function (s) {
		return this.b('hasFocus', s)
	}
	$.fn.o$ = $.fn.op$ = function (s) {//= $.fn.bO
		return this.b('o', s)
	}
	$.fn.sO$ = function (s) {
		//= $.fn.bSO
		return this.b('so', s)
	}
	$.fn.en$ = function (s) {
		return this.b('enable', s)
	}
	$.fn.d$ = function (s) {
		return this.b('disable', s)
	}
	$.fn.u$ = $.fn.uN$ = function (s) {
		return this.b('uniqueName' + s)
	}
	$.fn.cmp$ = $.fn.bCm = function (s) {
		return this.b('component', s)
	}
	$.fn.tp$ = $.fn.bTp = function (s) {
		return this.b('template', s)
	}
	$.fn.t$ = $.fn.ko_t = function (s) {
		return this.b('text', s || '$data')
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
	$.fn.tI$ = function (s) {
		return this.b('textInput', s)
	}
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
function elements() {
	ko.cb = $.cC = function (a) {
		//$.cb_c =  $.cbC
		return $.cb().ch$(a)
	}
	ko.sp = function (t) {
		return $.sp().t$(t)
	}
	$.d_w = function (a, b) {
		var d = $.d().bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
		//= $.dW = $.dBw
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.d_h = $.dH = function (a) {
		return $.d().bH(a)
	}
	$.d_cm = $.dCm = function (a) {
		return $.d().bCm(a)
	}
	ko.d.if = $.d_if = $.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sp_t = $.spT = $.spBt = function (a, b) {
		return $.sp(b).bT(a)
	}
	$.sp_t = $.sT = $.spT = function (a, b) {
		a = a || '$data'
		return $.sp(b).bT(a)
	}
	$.h1_bt = $.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.li_t = $.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.td_t = $.tdT = function (a, b) {
		var td = $.td()
		td.bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
	$.h1T = $.h1Bt = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.p_i = $.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
	$.p_t = $.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b)
				.bT(a || '$data')
	}
	$.spVs = function (a) {
		return $.sp().bVs(a)
		return $.sp().b('vs', a)
	}
	$.dV = $.dVs = function () {
		var g = G(arguments),
				d = $.d().bVs(g.f)
		_.e(g.r, function (q) {
			d.A(q)
		})
		return d
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d//$.dI=
	}
	$.dW = $.dBw = function (a, b) {
		var d = $.d()
				.bW(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dH = function (a) {
		return $.d().bH(a)
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.dT = function (a) {
		return $.d().bT(a)
	}
	$.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.sT = $.spT = function (a, b) {
		return $.sp(b).bT(a || '$data')
	}
	$.ST = function (t) {
		return $.S().bT(t)
	}
	$.pT = function (a) {
		var p = $.p()
		p.bT(a);
		return p
	}
	$.h1T = function (a, b) {
		var h1 = $.h1(a)
		h1.bT(b || a)
		return h1
	}
	$.liT = function (a) {
		return $.li().bT(a)
	}
	$.tdT = function (a, b) {
		var td = $.td().bT(a)
		if (A(b)) {
			_.e(b, function (el) {
				td.A(el)
			})
		}
		return td
	}
}
function inputs() {
	$.fSb = function (a, b) {
		var f = $.f()
		f.b({sb: a})
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}
	$.smEn = function (a) {
		return $.sm().bEn(a)
	}
	cbKO = cb2 = function (m, binding, val) {
		var cbox = $.input().type('checkbox'),
				pg = $.p().A(
						$.span().A(m),
						cbox.koBind('checkbox', binding)
				)
		if (val) {
			cbox.val(val)
		}
		return pg
	}
	$.fSm = $.fBSm = function (a, b) {
		var f = $.f();
		f.bSb(a)
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
		function old() {
			$.fSb = function (a, b) {
				var f = $.f();
				f.b({sb: a})
				if (A(b)) {
					_.e(b, function (el) {
						f.A(el)
					})
				}
				return f
			}
		}
	}
	$.ipV = $.ipBv = function () {
		var g = G(arguments),
				ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
		$.iV = warning = $.ipV = $.ipBv = function () {
			var g = G(arguments), ip
			ip = $.ip()
			ip.bV.apply(ip, g)
			return ip
		}
	}
	$.sO = $.slO = function (a) {
		return $.sl().bO(a)
	}
	$.ip_v = $.ipV = $.ipBv = function () {
		var g = G(arguments),
				ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ip_tI = $.ip_ti = $.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.pw_tI = $.pw_ti = $.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.f_sb = $.fSb = $.fBsb = function (a, b) {
		var f = $.f()
		f.bSb(a)
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
	}
	$.bt$ = $.btB$ = function (a, b, c) {
		var bt = $.bt(a).b$(a)
		if (c) {
			bt.bEn(c)
		}
		return bt
	}
	$.bt_$ = $.bt$ = $.btB$ = function (a, b) {
		return $.bt(a).b$(a)
	}
	$sb_$ = $.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).b$(a)
	}
	$.$bt = function (a, b) {
		var g = G(arguments)
		b = b || a
		if (g.n) {
			b = '$parent.' + b
		}
		return $.bt(a).b$(b)
	}
	function anc() {
		$.a$ = function (t, fn) {
			return $.a(t).b('$', fn)
		}
		$.aA = function (a, b, c, d) {
			return $.a(b, c, d).bA(a)
		}
	};
	function select() {
		$.slB = function (a) {
			var q = $.sl()
			q.b.apply(q, arguments)
			return q
		}
	}
	
	function btt() {
		$.$bt = function (a, b) {
			var g = G(arguments)
			b = b || a
			if (g.n) {
				b = '$parent.' + b
			}
			return $.bt(a).b$(b)
		}
		$.bt$ = $.btB$ = function (a, b, c) {
			var bt = $.bt(a).b$(a)
			if (c) {
				bt.bEn(c)
			}
			return bt
		}
	};
	function form() {
		$.fSb = function (a, b) {
			var f = $.f()
			f.b({sb: a})
			if (A(b)) {
				_.e(b, function (el) {
					f.A(el)
				})
			}
			return f
		}
		$.fSb = $.fBsb = function (a, b) {
			var f = $.f()
			f.bSb(a)
			if (A(b)) {
				_.e(b, function (b) {
					f.A(b)
				})
			}
			return f
		}
	};
	function bindIP() {
		$.pI = function (a, b, c, d) {
			return $.p(b, c, d).bI(a)
		}
		$.pI = function (a, b, c, d) {
			var p = $.p(b, c, d).bI(a)
		}
		$.IP = $.ipTi = function (a) {
			return $.ip().bTi(a)
		}
		$.pwTi = function (a) {
			return $.pw().bTi(a)
		}
	}
	
	$.iV = $.ipV = $.ipBv = function () {
		var g = G(arguments), ip
		ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.iV = $.ipV = $.ipBv = function () {
		var g = G(arguments), ip
		ip = $.ip()
		ip.bV.apply(ip, g)
		return ip
	}
	$.ipTi = function (a) {
		return $.ip().bTi(a)
	}
	$.cC = $.cbC = function (a) {
		if (U(a)) {
			a = '$'
		}
		return $.cb().bC(a)
	}
	$.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).b$(a)
	}
	$.pwTi = function (a) {
		return $.pw().bTi(a)
	}
	$.sO = $.slO = function (a) {
		return $.sl().bO(a)
	}
	function options() {
		$.fn.bH = function (s) {
			return this.b('html', s)
		}
		$.fn.bS = function (s) {
			return this.b('css', s)
		}
		$.fn.bO = function (s) {
			return this.b('options', s)
		}
		$.fn.bSO = function (s) {
			return this.b('selectedOptions', s)
		}
		$.fn.bCm = function (s) {
			return this.dB('component: ' + s)
		}
	}
	
	function mouse() {
		$.a$ = function (t, fn) {
			return $.a(t).b('$', fn)
		}
		/*
		 $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip
		
		 ip = $.ip()
		
		 ip.bV.apply(ip, g)
		
		 return ip
		 }*/
		$.fSb = $.fBsb = function (a, b) {
			var f = $.f()
			f.bSb(a)
			if (A(b)) {
				_.e(b, function (b) {
					f.A(b)
				})
			}
			return f
		}
		$.bt$ = $.btB$ = function (a, b, c) {
			var bt = $.bt(a).b$(a)
			if (c) {
				bt.bEn(c)
			}
			return bt
		}
		$.sO = $.slO = function (a) {
			return $.sl().bO(a)
		}
		$.$bt = function (a, b) {
			var g = G(arguments)
			b = b || a
			if (g.n) {
				b = '$parent.' + b
			}
			return $.bt(a).b$(b)
		}
		$.s$ = function (a, b, c, d) {
			return $.sb(b, c, d).b$(a)
		}
		$.$bt = function (a, b) {
			var g = G(arguments)
			b = b || a
			if (g.n) {
				b = '$parent.' + b
			}
			return $.bt(a).b$(b)
		}
		$.eT = $.emT = function (t) {
			return $.em().bT(t)
		}
		$.a$ = function (t, fn) {
			return $.a(t).b('$', fn)
		}
		$.aA = function (a, b, c, d) {
			return $.a(b, c, d).bA(a)
		}
		$.fSb = function (a, b) {
			var f = $.f()
			f.b({sb: a})
			if (A(b)) {
				_.e(b, function (el) {
					f.A(el)
				})
			}
			return f
		}
		$.cC = $.cbC = function (a) {
			return $.cb().bC(a)
		}
		$.cC = $.cbC = function (a) {
			if (U(a)) {
				a = '$'
			}
			return $.cb().bC(a)
		}
		$.c$ = function (fn) {
			return $.cb().b$(fn)
		}
		$.sO = function (a) {
			return $.sl().bO(a)
		}
		$.a$ = function (t, fn) {
			return $.a(t).b('$', fn)
		}
		$.b$ = $.bt$ = $.btB$ = function (a, b, c) {
			var bt = $.bt(a)
			bt.b$(b || a)
			if (c) {
				bt.bEn(c)
			}
			return bt
		}
		$.b$$ = function () {
			var sp = $.sp()
			_.e(arguments, function (a) {
				sp.A($.b$(a))
			});
			return sp
		}
	}
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
function alphaPams() {
	$.fn.pm = $.fn.pam = $.fn.pams = $.fn.par = function (a, b) {
		this.at('params', a + ': ' + b);
		return this
	}
	$.fn.qA = function (t) {
		return $('<' + t + '>').A()
	}
	$.fn.qAP = function (a, b, c) {
		this.qA(a).par(b, c)
		return this
	}
}
function apps(){
	K1 = KOO = function () {
		sp = $.sp().t$('fullName')
		$.h2().A('Hello, ', sp, '!')
		$.p().A('First name: ', $.ip().v$('firstName'))
		$.p().A('Last name: ', $.ip().v$('lastName'))
		VM = function (first, last) {
			this.firstName = $o(first)
			this.lastName = $o(last)
			this.fullName = $cO(function () {
				return this.firstName() + " " + this.lastName();
			}, this)
		}
		ok(new VM("rigo", "ochoa"))
	}
	K2 = COMPUTED = CPD = function () {
		$.d().A(
				$.p('F: ', $.b().bT('f')),
				$.p('L: ', $.b().bT('l')),
				$.p('F: ', $.ip().bV('f')),
				$.p('L: ', $.ip().bV('l')).id('l'),
				$.p('L: ', $.b().bT('fl')),
				$.bt('caps').b$('capL')
		)
		vm = {
			f: $o('j'),
			l: $o('y'),
			capL: function () {
				this.l(_.tU(this.l()))
			}
		}
		vm.fl = ko.c(function () {
			return vm.f() + ' ' + vm.l()
		})
		ok(vm)
		function klassk() {
			KNOCKS = function () {
				format()
				s2(h1('KNOCKOUT'),
						pg('F: ', _B().b('t', 'f')),
						pg('L: ', _B().b('t', 'l')),
						pg('F: ', ip().b('V', 'f')),
						pg('L: ', ip().b('V', 'l')).id('l'),
						pg('L: ', _B().b('t', 'fl')),
						bt('caps').b('$', 'capL'))
				vm = {}
				vm.f = $o('j')
				vm.l = $o('y')
				vm.fl = ko.c(function () {
					return vm.f() + ' ' + vm.l()
				})
				vm.capL = function () {
					vm.l(uC(vm.l()))
				}
				ko.ab(vm)
			}
		}
	}
	K3 = VALUE = VAL = function () {
		$.p('Name:').A($.ip().b({
					v: 'editing',
					v: 'name',
					f: 'editing'
				}),
				$.d('r').b({v: '!editing()', t: 'name', $: 'edit'}))
		$.p('Click the name to edit it; click elsewhere to apply changes')
		ok({
			name: $o("Bert Bertington"),
			editing: $o(),
			edit: function () {
				vm.editing(true)
			}
		})//KOFCC
	}
	K4 = WITHH = function () {
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
	K8 = KOVIS = function () {
		$.h1('see me if true!!!!').vs$('ssm')
		ok(vm = {ssm: $o(true)})
		_.in(function () {
			vm.ssm(false)
		})
	}
	$.cKO = function (m, b, v) {
		var cb = $.cb()
		cb.v(v)
		cb.ch$(b)
		return $.p().A(
				$.sp().A(m),
				cb
		)
		//=cbKO=cb2
	}
	K7 = CHECK = SPAMM = function () {
		$.p(['spam?',
			$.cC('wantSpam', 'wantSpam')])
		$.d([
			'spam flavors:',
			$.d([$.cKO('Cherry', 'flav', 'cherry')]),
			$.d([$.cKO('Almond', 'flav', 'almond')]),
			$.d([$.cKO('Glut', 'flav', 'glut')])]).dB('visible', 'wantSpam')
		vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
		ok(vm)
		_.in(2, function () {
			vm.wantSpam(0)
		})
//bind cb 'checked' to boolean
		//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
	}
	KOFLM = function () {
		
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
				$.li().A(d,
						$.dI('box').css('display', 'none').A(
								$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
				),
				$.li().bT('matterTitle'),
				$.li().bT('matterComment')
		)))
	}
	FCB = function () {
		_$({
			C: 'u',
			t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().b("hasFocus: editingName"),
				$.h1('editing..').bVs('editingName'),
				$.bt('Edit')
						.b("enable: !editingName(), click:function() { editingName(true) }")]
		})
	}
	KOSS = function () {
		d = $.d().A('Profit Information')
		d.dB('css', "{color:curProf()<0?'red':'black'}")
		vm = {curProf: $o(50)}
		ok(vm)
		_.in(function () {
			vm.curProf(-50)
		})
	}
	KOAT = function () {
		_$({
			C: 'w',
			t: 'attributes.. unlikely to use?',
			vm: {
				url: $o("year-end.html"),
				tt: $o("stats report")
			},
			A: [$.aA('{href:url,title:tt}', 'report')]
		})
	}
	TXIP = TWOWAY = function () {
		$.dA('y', 100, 300, 200, 100).bT('NAME')
		$.ip().bTI('NAME')
		ok({NAME: $o('ph text')})
	} // bT(text)  bTI(textInput)  $o
	K1 = function () {
		$.p('f').A($.S().bT('f'))
		$.p('l').A($.S().bT('l'))
		$.p('f:').A($.ip().bV('f'))
		$.p('l:').A($.ip().bV('l'))
		$.p('full:').A($.S().bT('full'))
		$.bt('tU').b$('tU')
		vm = {
			f: $o('a'),
			l: $o('b'),
			tU: function () {
				this.l(_.tU(this.l()))
			}
		}
		vm.full = ko.c(function () {
			return vm.f() + ' ' + vm.l()
		})
		ok(vm)
	} //bT  bV(value)  b$ ko.c(computed)
	TXIPROOT = TXI = function () {
		$.d([
			$.p(['un:', $.ipTi('un')]),
			$.p(['Pw:', $.pwTi('pw')]),
			'the vm: ',
			$.pre().bT('ko.toJSON($root,null,2)')
		])
		ok({
			un: $o('fred flintsone'),
			pw: $o('yaba daba password')
		})
	}//$.ipTi  $.pwTi   $.pre  bT  ko.toJSON  $root
	BHTML = HTM = function () {
		$.dH('details').fS(100);
		ok('h', $o('wait..'));
		_.in(2, function () {
			vm.h("<em>report:<a href='http://www.playboy.com'>here</a>.</em>")
		})
	}// dH
	ATTR = function () {
		$.aA('{href:url, title:tt}', 'report').fS(100)
		ok({url: $o("http://www.hustler.com"), tt: $o("statistics")})
	}// aA
	VISABLE = VIS = function () {
		$.h1('see me if true!').bVs('vs')
		$.h1('ALWAYS HERE!');
		ok('vs', $o(1))
		_.in(function () {
			vm.vs(0);
			_.in(function () {
				vm.vs(1)
			})
		})
	}// bVs
	IFF = function () {
		$.d([
			'Display?', $.cC('ms'),
			$.pI('ms')
					.A('Here is a message. Astonishing')
		])
		ok({ms: $o(0)})
		_.in(function () {
			vm.ms(1)
		})
	}
	ENABLE = EN = function () {
		$.p().A($.cbC('hasPhone'), 'I have phone')
		$.p('Your cellphone number').A(
				$.ip().b({v: 'num', en: 'hasPhone'}))
		ok({hasPhone: $o(0), num: ''})
	}
	SEL = CUNTS = function (n, v) {
		$.sO('cunts')
		ok('cunts', $oa('Fran', 'Ger', 'Spa'))
		_.in(2, function () {
			vm.cunts.push('Chi')
		})
	}
	ULIF = function () {
		$.x()
		$.ulE('PL', [$.li([
			$.sp('Planet: '),
			$.b().bT('n'),
			$.dI('cap', [$.pT('cap.n')])
		])])
		ok('PL', [
			{n: 'Merc', cap: null},
			{n: 'Earth', cap: {n: 'Barn'}},
			{n: 'Uranus'}
		])
	}
	SELMULTI = SLM = function () {
		$.x(null, 'selectedOptions')
		$.p(
				'Where you want to go?',
				$.sl().at({size: 5, multiple: true}).b({
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
	STARRATING = function () {
		ko.bindingHandlers.starRating = {
			init: function (element, valueAccessor) {
				$(element).addClass("starRating");
				for (var i = 0; i < 5; i++)
					$("<span>").appendTo(element);
				$("span", element).each(function (index) {
					$(this).hover(
							function () {
								$(this).prevAll().add(this).addClass("hoverChosen")
							},
							function () {
								$(this).prevAll().add(this).removeClass("hoverChosen")
							}
					);
				})
			},
			update: function (element, valueAccessor) {
				// Give the first x stars the "chosen" class, where x <= rating
				var observable = valueAccessor();
				$("span", element).each(function (index) {
					$(this).toggleClass("chosen", index < observable());
				});
			}
		}
		str = '<h3 data-bind="text: question"></h3>'
		str += '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
		str += ' <table>'
		str += ' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
		str += '  <tbody data-bind="foreach: answers">'
		str += ' <tr>'
		str += '<td data-bind="text: answerText"></td>'
		str += '<td data-bind="starRating: points"></td>'
		str += ' </tr>'
		str += ' </tbody>'
		str += '  </table>'
		str += '<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
		str += '<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
		str += 'points left to use.</p>'
		str += '<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
		$(str).A()
		function Answer(text) {
			this.answerText = text;
			this.points = $o(1);
		}
		
		function VM(question, pointsBudget, answers) {
			this.question = question
			this.pointsBudget = pointsBudget
			this.answers = $.map(answers, function (text) {
				return new Answer(text)
			})
			this.save = function () {
				alert('To do')
			}
			this.pointsUsed = ko.c(function () {
				var total = 0;
				for (var i = 0; i < this.answers.length; i++)
					total += this.answers[i].points();
				return total;
			}, this);
		}
		
		ok(new VM("Which factors affect your technology choices?", 10, [
			"Functionality, compatibility, pricing - all that boring stuff",
			"How often it is mentioned on Hacker News",
			"Number of gradients/dropshadows on project homepage",
			"Totally believable testimonials on project homepage"
		]))
	}
	KOSPA = SPA = function () {
		$.ulE('folders').K('folders').A(
				$.liT('$data')
		)
		/*
		 <ul class="folders" data-bind="foreach: folders">
		 <li data-bind="text: $data,css: { selected: $data == $root.chosenFolderId() }, click: $root.goToFolder"></li>
		 </ul>
		
		
		
		
		
		 <table class="mails" data-bind="with: chosenFolderData">
		 <thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date</th></tr></thead>
		 <tbody data-bind="foreach: mails">
		 <tr data-bind="click: $root.goToMail">
		 <td data-bind="text: from"></td>
		 <td data-bind="text: to"></td>
		 <td data-bind="text: subject"></td>
		 <td data-bind="text: date"></td>
		 </tr>
		 </tbody>
		 </table>
		 <div class="viewMail" data-bind="with: chosenMailData">
		 <div class="mailInfo">
		 <h1 data-bind="text: subject"></h1>
		 <p><label>From</label>: <span data-bind="text: from"></span></p>
		 <p><label>To</label>: <span data-bind="text: to"></span></p>
		 <p><label>Date</label>: <span data-bind="text: date"></span></p>
		 </div>
		 <p class="message" data-bind="html: messageContent" />
		 </div>
		 */
		function WebmailViewModel() {
			// Data
			var self = this;
			self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
			self.chosenFolderId = $o();
			self.chosenFolderData = $o();
			self.chosenMailData = $o();
			// Behaviours
			self.goToFolder = function (folder) {
				self.chosenFolderId(folder);
				self.chosenMailData(null); // Stop showing a mail
				$.get('/mail', {folder: folder}, self.chosenFolderData);
			};
			self.goToMail = function (mail) {
				self.chosenFolderId(mail.folder);
				self.chosenFolderData(null); // Stop showing a folder
				$.get("/mail", {mailId: mail.id}, self.chosenMailData);
			};
			// Show inbox by default
			self.goToFolder('Inbox');
		};
		ko.applyBindings(new WebmailViewModel());
		ok(new (function WebmailVM() {
			var self = this
			this.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
		}))
	}
	NOK = function () {
		d = $.d('r').dB('text: a')
		vm = $o('afsdafsfsdafsdfds')
		// ko.aB({a: vm})
		ko.aB({a: vm})
		_.in(function () {
			vm('changed the view model!')
		})
	}
	TASKS = function () {
		$.f().bSb('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ko.b({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: ko.oa(),
			nT: ko.o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
		 */
	}
	Task = function (tt, done) {
		return {
			tt: ko.o(tt),
			done: ko.o(done)
		}
	}
	Task = function (d) {
		return {t: $o(d.t), iD: $o(d.iD)}
	}
	TASKER = function () {
		$.x()
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Task = bb.M.e({})
		t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
		t2 = Ap.M.Task.o({t: 'go park', pr: 3})
		Ap.V.Tsk = bb.V.e({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = Ap.V.Tsk.o({m: t1})
		Ap.C.Tasks = bb.C.e({m: Ap.M.Tsk})
		tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = bb.V.e({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tasksV = Ap.V.Tasks.o({cl: tasks})
	}
	TASKS = function () {
		$.f().bSb('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({
			e: 'ts',
			vs: 'visible:ts().length>0'
		}).A(
				$.li().A(
						$.cb().bC('iD'),
						$.ip().b("value:t, disable:iD"),
						$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ko.b({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: ko.oa(),
			nT: ko.o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
		 */
	}
	TASK = function () {
		$.z('r')
	}
	CHERRYMISC = function () {
		$.x('o')
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([
				$.p($.sp('cherry'),
						$.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
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
		$.x('o')
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([$.p($.sp('cherry'), $.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
		_.in(function () {
			vm.flav.push("glut")
		})
		ok({
			wants: $o(1),
			flav: $oa(["cherry", "almond"])
		})
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([
				$.p($.sp('cherry'), $.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
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
	ULTASKMISC = function () {
		$.z().h3('Tasks')
		$.f().bSm('aT').A().A("Add task: ", $.ip().bV('nT').ph("What?"), $.bt('Add'))
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: $oa(),
			nT: $o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: $o(o.nT()), iD: $o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		/*
		 ko.b(vm2)
		 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
		 */
		$.f().bSm('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({
			e: 'ts', vs: 'visible:ts().length>0'
		}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		$.z().h3('Tasks')
		$.f().bSm('aT').A().A("Add task: ",
				$.ip().bV('nT').ph("What?"),
				$.bt('Add')//.bS('s') // ??
		)
		$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
				$.cb().bC('iD'),
				$.ip().b("value:t, disable:iD"),
				$.bt('Del').bC('$parent.rmT')))
		$.sp("You have").A()
		$.B("&nbsp;").bT("inc().length").A()
		$.sp("inc task(s)").A()
		$.sp("- beer!").bV("inc().length==0").A()
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
		vm2 = {
			ts: $oa(),
			nT: $o(),
			inc: ko.c(function () {
						var vm = this
						return ko.ut.af(
								vm.ts(), function (t) {
									return !t.iD()
								})
					}
			),
			aT: function () {
				this.ts.push({t: $o(o.nT()), iD: $o()});
				this.nT('')
			},
			rmT: function () {
				o.ts.remove(this)
			}
		}
		s2(
				h3('Tasks'),
				_f().b("S", "aT")(
						"Add task: ",
						ip().b('v', 'nT').ph("What?"),
						bt('Add').at('t', 's')
				),
				ul(
						li()(
								cb().b('ch', 'iD'),
								ip().b("value:t, disable:iD"),
								lk('Del').b('ch', '$parent.rmT')
						)
				).b("foreach:ts, visible:ts().length>0"),
				sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
				sp("- beer!").b("visible: inc().length==0")
		)
		//ko.ab(TLVM())
		ok({
			itemToAdd: $o(''),
			allItems: $oa(['a', 'b', 'c']),
			selectedItems: $oa(['d']),
			addItem: function () {
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(vm.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				vm.allItems.sort()
			}
		})
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
}
function moreApps(){
	KNOCKS0 = function () {
		$.format()
		s2(
				$.h1('KNOCKOUT'),
				$.p('F: ', _B().b('t', 'first')),
				$.p('L: ', _B().b('t', 'last')),
				$.p('F: ', ip().b('V', 'first')),
				$.p('L: ', ip().b('V', 'last')).id('last'),
				$.p('L: ', _B().b('t', 'firstLast')),
				$.bt('caps').b('$', 'capL')
		)
		vm = {}
		vm.first = $o('j')
		vm.last = $o('y')
		vm.firstLast = ko.computed(function () {
			return vm.first() + ' ' + vm.last()
		})
		vm.capL = function () {
			vm.last(vm.last().toUpperCase())
		}
		ok(vm)
	}
	KNOCKS = function () {
		$.format()
		s2($.ul().k('fs').b('E', "fs").A($.li().b(
				"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
		)))
		MVM = function () {
			var o = {}
			o.fs = ['I', 'A', 'Se', 'Sp']
			o.chFI = ko.o()
			o.gtf = function (f) {
				o.chFI(f)
			}
			return o
		}
		ko.ab(MVM())
	}
	KNOCKS1 = function () {
		$.format()
		s2(
				h2('Your seat reservations'),
				$.t().A($.tH().A($.tr().A(
								$.th('Passenger name'),
								$.th('Meal'), $.th('Surcharge'), $.th(''))
				), $.tB().b('fe', 'seats').A(
						$.tr().A(
								$.td().b('t', 'n'),
								$.td().b('t', 'm().mn'),
								$.td().A(
										// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
								),
								$.td().b('t', 'm().p')
						))),
				$.bt('reserve').b('$', 'add')
		)
		AM = [
			{mn: "fries", p: 10},
			{mn: "fish", p: 20},
			{mn: "noodles", p: 30}
		]
		sR = function (n, m) {
			return {
				n: n,
				m: ko.o(m)
			}
		}
		vm = {}
		vm.seats = ko.oa([
			sR('Jo', AM[0]), sR('Bo', AM[1])
		])
		vm.add = function () {
			vm.seats.push(
					sR('', AM[2])
			)
		}
		ko.ab(vm)
	}
	KNOCKS1 = function () {
		$.format()
		s2(
				h2('Your seat reservations'),
				_t()(
						thead()(
								tr()(
										th('Passenger name'),
										th('Meal'),
										th('Surcharge'),
										th(''))
						), tbody().b('fe', 'seats')(
								tr()(
										td().b('t', 'n'),
										td().b('t', 'm().mn'),
										td()(
												// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
										),
										td().b('t', 'm().p')
								))),
				bt('reserve').b('$', 'add')
		)
		AM = [
			{mn: "fries", p: 10},
			{mn: "fish", p: 20},
			{mn: "noodles", p: 30}
		]
		sR = function (n, m) {
			return {
				n: n,
				m: ko.o(m)
			}
		}
		vm = {}
		vm.seats = ko.oa([
			sR('Jo', AM[0]), sR('Bo', AM[1])
		])
		vm.add = function () {
			vm.seats.push(
					sR('', AM[2])
			)
		}
		ko.ab(vm)
	}
	KNOCKS4 = function () {
		$.format()
		s2(
				$.h3('Tasks'),
				$.f().b("S", "aT").A(
						"Add task: ",
						$.ip().b('v', 'nT').ph("What?"),
						$.bt('Add').at('t', 's')
				),
				$.ul().A(
						$.li().A(
								cb().b('ch', 'iD'),
								ip().b("value:t, disable:iD"),
								lk('Del').b('ch', '$parent.rmT')
						)
				).b("foreach:ts, visible:ts().length>0"),
				sp("You have"),
				$.B().A("&nbsp;").b('t', "inc().length"),
				$.sp("inc task(s)"),
				$.sp("- beer!").b("visible: inc().length==0")
		)
		ok(TLVM())
	}
	FCB = function () {//working!!!
		_$({
			C: 'u', t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().b("hasFocus: editingName"),
				$.h1('editing..').bVs('editingName'),
				$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")]
		})
	}
	KOTEMP = function () {
		$.format()
		s2(
				ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
				ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
				hr(),
				_d().b('T', "{name: templateToUse, foreach: articles }"),
				script("summary")(_d().b('t', 'title')),
				script('details')(
						_d()(
								h2().b('t', 'title'),
								pg().b('t', 'content'),
								bt('edit').b('$', '$parent.selectedArticle'))
				),
				script('edit')(
						_d()(ip().b('v', 'title'),
								br(),
								ip().b('v', 'content'))
				))
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
	KOTEMP2 = function () {
		_b()(
				scrp('tt')(
						h1('afsdfds')
				),
				_d().b('T', "{name:'tt'}")
		)
		ko.ab({})
	}
	KOTEMP = function () {
		$.format()
		s2(
				ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
				ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
				hr(),
				_d().b('T', "{name: templateToUse, foreach: articles }"),
				script("summary")(_d().b('t', 'title')),
				script('details')(
						_d()(
								h2().b('t', 'title'),
								pg().b('t', 'content'),
								bt('edit').b('$', '$parent.selectedArticle'))
				),
				script('edit')(
						_d()(ip().b('v', 'title'),
								br(),
								ip().b('v', 'content'))
				))
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
	KOTEMP2 = function () {
		_b()(
				scrp('tt')(
						h1('afsdfds')
				),
				_d().b('T', "{name:'tt'}")
		)
		ko.ab({})
	}
//
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
	KOC = function () {
		$.z()
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().bT("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().bT('title')),
				$.scrp('details').A(
						$.d([$.h2().bT('title'), $.p().bT('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
		)
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
	}
	KOSCR = function () {
		z();
		$.bd().A(
				$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
		);
		ko.b({})
	}
// kob= ko.observable.prototype; kob.rm= kob.remove
	KOC = function () {
		$.z()
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().bT("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().bT('title')),
				$.scrp('details').A(
						$.d([$.h2().bT('title'), $.p().bT('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
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
	IF = function () {
		$.x('x')
		$.cC('dispMs')
		$.sp('Disp ms')
		$.pI('dispMs', 'Here is a message. Astonishing')
		ok({dispMs: ko.o(1)})
	}
	COMP = function () {
		$.z().h1('KNOCKOUT')
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			//   $.p('L: ', $.b().bT('fL') ),
			$.bt('caps').b$('capL')
		])
		ok({
			f: $o('j'),
			l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
	TPLIST = function () {
		$.h2('Your seat reservations').A(
				$.sp().bT('seats().length')
		)
		$.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
				$.s().bT('totalSurcharge().toFixed(2)')
		)
		$.t().A(
				$.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge'))),
				$.tB().bTp("{name:'reservationTemplate', foreach: seats}")
		)
		$.bt('Reserve another seat').b({
			$: 'addSeat',
			en: 'seats().length < 5'
		})
		$('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
				$.tr().A(
						$.td().A($.ip().bV('name')),
						$.td().A($.sl().b({o: 'availableMeals', ot: 'mealName'})),
						$.td().A($.a('Remove').b$('remove')))
		)
		// Raw catalog data - would come from the server
		var availableMeals = [
			{mealName: "Standard (sandwich)", price: 0},
			{mealName: "Premium (lobster)", price: 34.95},
			{mealName: "Ultimate (whole zebra)", price: 290}
		]
		// Class to represent a row in the reservations grid
		seatReservation = function (name) {
			this.name = name;
			this.availableMeals = availableMeals;
			this.meal = ko.observable(availableMeals[0]);
			this.remove = function () {
				viewModel.seats.remove(this)
			}
			this.formattedPrice = ko.dependentObservable(function () {
				var price = this.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			}, this);
		}
		// Overall viewmodel for this screen, along with initial state
		vm = {
			seats: ko.observableArray([
				new seatReservation("Steve"),
				new seatReservation("Bert")
			])
			, addSeat: function () {
				this.seats.push(new seatReservation());
			}
		}
		vm.totalSurcharge = ko.dependentObservable(function () {
			var total = 0;
			for (var i = 0; i < this.seats().length; i++)
				total += this.seats()[i].meal().price;
			return total;
		}, vm);
		ko.b(vm)
	}
	TPLIST = function () {
		$.x()
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
	function option() {
		CHL = function () {
			$.h1('shown!').slV()
			$.cC()
			ok()
		}
	}
	
	function kobvs() {
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
//bind 'visibile' to a boolean
		KOBVS = function () {
			$.z('y').h1('see me if true!')
					.bVs('vs')
			$b('vs', ko.o(1))
			_.in(function () {
				vm.vs(0)
				$.c$()
				_.in(function () {
					vm.vs(1)
					$.c$()
				})
			})
		}
	}
	
	function kos() {
		KOS = function () {
			$.x()
			$.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
			ko.b({curProf: ko.o(50)})
			_.in(function () {
				vm.curProf(-50)
			}, '*')
		}
		KOS = function () {
			_$({
				c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
				A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
				_: function () {
					vm.n(-5)
				}
			})
		}
	}
	
	function comput() {
//bT,bV and computed
		COMP = function () {
			$.z().h1('KNOCKOUT')
			$.d([
				$.p('F: ', $.b().bT('f')),
				$.p('L: ', $.b().bT('l')),
				$.p('F: ', $.ip().bV('f')),
				$.p('L: ', $.ip().bV('l')).id('l'),
				$.p('L: ', $.b().bT('fL')),
				$.bt('caps').b$('capL')
			]).A()
			ok({
				f: ko.o('j'),
				l: ko.o('y'),
				fL: ko.c(function () {
					return this.f() + ' ' + this.l()
				}),
				capL: function () {
					this.l(S.tU(this.l()))
				}
			})
		}
		COMP = function () {
			$.z().h1('KNOCKOUT')
			$.d([
				$.p('F: ', $.b().bT('f')),
				$.p('L: ', $.b().bT('l')),
				$.p('F: ', $.ip().bV('f')),
				$.p('L: ', $.ip().bV('l')).id('l'),
				//   $.p('L: ', $.b().bT('fL') ),
				$.bt('caps').b$('capL')
			])
			ok({
				f: $o('j'),
				l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
				capL: function () {
					this.l(S.tU(this.l()))
				}
			})
		}
	}
	
	function err() {
		KOC = function () {
			$.z()
			$.ip('r').at({
				name: 'choices',
				value: 'summary'
			}).bC('selectedView');
			$.sp('summary').A()
			$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
			$.sp('details').A();
			$.hr().A()
			$.d().bT("{name: templateToUse, " + "foreach: articles }")
			$.scrp("summary").A().A($.d().bT('title')),
					$.scrp('details').A(
							$.d([$.h2().bT('title'), $.p().bT('content'),
								$.bt('edit').b$('$parent.selectedArticle')]))
			$.scrp('edit').A().A(
					$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
			)
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
		}
		SLOP = function () {
			$l('slop')
			$.z()
			$.p('Choose some countries youd like to visit:').A(
					$.sl().b({
						o: 'cunts',
						so: 'chosenCunts'
					}).sz(5).mlt()
			)
			$b({
						cunts: $oa('Fra', 'Ger', 'Spa'),
						chosenCunts: $oa('Ger')
					}
			)// Initially, only Germany is selected
			_.in(function () {
				vm.chosenCunts.push('Fra')
			}, '*') // ... then later  France is selected too
		}
	}
	
	function declarativeAppLoader() {
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
			z()
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
	
	function slop() {
		SELOP = function () {
			d = $.d()
			$.x(null,
					'selectedOptions')
			$.p('Where?',
					$.sl().at({
						size: 5,
						multiple: true
					}).b({
						o: 'available', so: 'chosen'
					}))
			ok({
				available: ko.oa(
						['France', 'Germany', 'Spain']),
				chosen: ko.oa(
						['Germany'])
			})
			$.in(function () {
				vm.chosen.push('France')
			}, '*')
		}
		SLOP = function () {
			$.z()
			$.p('Choose some countries youd like to visit:').A(
					$.sl().b({o: 'cunts', sO: 'chosenCunts'}).sz(5).mlt())
			ok({
						cunts: $oa('Fra', 'Ger', 'Spa'),
						chosenCunts: $oa('Ger')
					}
			)// Initially, only Germany is selected
			_.in(function () {
				vm.chosenCunts.push('Fra')
			}, '*') // ... then later  France is selected too
		}
		SLOP = function () {
			$.z()
			ok({
				cunts: $oa('Fra', 'Ger', 'Spa'),
				selCunts: $oa('Ger')
			})
			$.p('where go?:').A(
					$.sl().b({
						o: 'cunts', so: 'selCunts'
					}).sz(5).mlt())
			$.in(function () {
				vm.selCunts.push('Fra')
			}, '*')
			// 1st only Ger is selected, then later Fra too
		}
	}
	
	function inputApps() {
//bind cb and bind ip to 'enable'
		KOEN = function () {
			$.x()
			$.p().A($.cbC('hasPhone'), 'I have phone')
			$.p('Your cellphone number').A(
					$.ip().b({v: 'num', en: 'hasPhone'}))
			ok({hasPhone: ko.o(0), num: ''})
		}
///*** PERFECT FOR EDITTING A PROFILE IP
		KOFC = function () {
			$.x()
			$.p('Name:').A(
					$.ip().b({
						vs: 'editing', f: 'editing',
						v: 'name'
					}),
					$.d('r').b({
						vs: '!editing()',
						t: 'name',
						$: 'edit'
					})
			)
			$.p('Click the name to edit it; click elsewhere to apply changes')
			function VM(n) {
				var vm = this
				vm.name = ko.o(n)
				vm.editing = ko.o()
				vm.edit = function () {
					vm.editing(1)
				}
			}
			
			ok(new VM("Bert Bertington"))
		}
//bind cb 'checked' to boolean
		SPAM = function () {
			$.x('o', 'spam')
			$.p('spam? ').A(
					$.cbC('spam')
			)
			ok({spam: ko.o(1)})
			$.in(2, function () {
				vm.spam(0)
			})
		}
		KOIP = function () {
			$.z('x')
			$.p('Login name:').A(
					$.ipTi('un'))
			$.p('Pw:').A(
					$.pwTi('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
			$.A(
					'vm: ',
					$.pre().bT(
							'ko.toJSON($root, null, 2)'
					)
			)
			ok({un: ko.o(''), pw: ko.o('abc')})
		}
		CHERRY = function () {
			$.x('o')
			OK({
				wants: $o(1),
				flav: $oa(["cherry", "almond"])
			})
			$.p($.sp('spam?'), $.cC('wants'))
			$.d(['Preferred flavors of spam:',
				$.d([
					$.p($.sp('cherry'),
							$.cC('flav').v('cherry')
					),
					$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
					$.p($.sp('Glut'), $.cC('flav').v('glut'))
				])
			]).bVs('wants')
			$.in(function () {
				vm.flav.push("glut")
			})
		}
// huh?
		$.cKO = function (m, b, v) {
			var cb = $.cb(),
					p = $.p().A($.sp().A(m),
							cb.bC(b))
			if (v) {
				cb.v(v)
			}
			return p
		}
//broken
		TASKS = function () {
			$.z().h3('Tasks')
			$.f().bSb('aT').A().A("Add task: ",
					$.ip().bV('nT').ph("What?"),
					$.bt('Add')//.bS('s') // ??
			)
			$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
					$.cb().bC('iD'),
					$.ip().b("value:t, disable:iD"),
					$.bt('Del').bC('$parent.rmT')))
			$.sp("You have").A()
			$.B("&nbsp;").bT("inc().length").A()
			$.sp("inc task(s)").A()
			$.sp("- beer!").bV("inc().length==0").A()
			ko.b({
				itemToAdd: ko.o(''),
				allItems: ko.oa(['a', 'b', 'c']),
				selectedItems: ko.oa(['d']),
				addItem: function () {
					if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
						vm.allItems.push(vm.itemToAdd());
						vm.itemToAdd('')
					}
				},
				removeSelected: function () {
					allItems.removeAll(vm.selectedItems())
					selectedItems([])
				},
				sortItems: function () {
					vm.allItems.sort()
				}
			})
			vm2 = {
				ts: ko.oa(),
				nT: ko.o(),
				inc: ko.c(function () {
							var vm = this
							return ko.ut.af(
									vm.ts(), function (t) {
										return !t.iD()
									})
						}
				),
				aT: function () {
					this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
					this.nT('')
				},
				rmT: function () {
					o.ts.remove(this)
				}
			}
			/*
			 ko.b(vm2)
			 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
			 */
		}
		SLOP = function () {
			$.z()
			ok({
				cunts: $oa('Fra', 'Ger', 'Spa'),
				selCunts: $oa('Ger')
			})
			$.p('where go?:').A(
					$.sl().b({
						o: 'cunts', so: 'selCunts'
					}).sz(5).mlt())
			$.in(function () {
				vm.selCunts.push('Fra')
			}, '*')
			// 1st only Ger is selected, then later Fra too
		}
//bind 'option'
		KOSL = function (n, v) {
			$.x('o').h1('dests')
			$.slO('cunts')
			ok('cunts',
					ko.oa('Fran', 'Ger', 'Spa'))
			$.in(2, function () {
						vm.cunts.push('Chi')
					},
					'*'
			)
		}
//broken select and inputs
		KOC = function () {
			$.z()
			$.ip('r').at({
				name: 'choices',
				value: 'summary'
			}).bC('selectedView');
			$.sp('summary').A()
			$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
			$.sp('details').A();
			$.hr().A()
			$.d().bT("{name: templateToUse, " + "foreach: articles }")
			$.scrp("summary").A().A($.d().bT('title')),
					$.scrp('details').A(
							$.d([$.h2().bT('title'), $.p().bT('content'),
								$.bt('edit').b$('$parent.selectedArticle')]))
			$.scrp('edit').A().A(
					$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
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
		function form() {


//bind cb and bind ip to 'enable'
			KOEN = function () {
				$.x()
				$.p().A($.cbC('hasPhone'), 'I have phone')
				$.p('Your cellphone number').A(
						$.ip().b({v: 'num', en: 'hasPhone'}))
				ok({hasPhone: ko.o(0), num: ''})
			}
///*** PERFECT FOR EDITTING A PROFILE IP
			KOFC = function () {
				$.x()
				$.p('Name:').A(
						$.ip().b({
							vs: 'editing', f: 'editing',
							v: 'name'
						}),
						$.d('r').b({
							vs: '!editing()',
							t: 'name',
							$: 'edit'
						})
				)
				$.p('Click the name to edit it; click elsewhere to apply changes')
				function VM(n) {
					var vm = this
					vm.name = ko.o(n)
					vm.editing = ko.o()
					vm.edit = function () {
						vm.editing(1)
					}
				}
				
				ok(new VM("Bert Bertington"))
			}
//bind cb 'checked' to boolean
			SPAM = function () {
				$.x('o', 'spam')
				$.p('spam? ').A(
						$.cbC('spam')
				)
				ok({spam: ko.o(1)})
				$.in(2, function () {
					vm.spam(0)
				})
			}
			KOIP = function () {
				$.z('x')
				$.p('Login name:').A(
						$.ipTi('un'))
				$.p('Pw:').A(
						$.pwTi('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
				$.A(
						'vm: ',
						$.pre().bT(
								'ko.toJSON($root, null, 2)'
						)
				)
				ok({un: ko.o(''), pw: ko.o('abc')})
			}
			CHERRY = function () {
				$.x('o')
				OK({
					wants: $o(1),
					flav: $oa(["cherry", "almond"])
				})
				$.p($.sp('spam?'), $.cC('wants'))
				$.d(['Preferred flavors of spam:',
					$.d([
						$.p($.sp('cherry'),
								$.cC('flav').v('cherry')
						),
						$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
						$.p($.sp('Glut'), $.cC('flav').v('glut'))
					])
				]).bVs('wants')
				$.in(function () {
					vm.flav.push("glut")
				})
			}
//broken
			TASKS = function () {
				$.z().h3('Tasks')
				$.f().bSb('aT').A().A("Add task: ",
						$.ip().bV('nT').ph("What?"),
						$.bt('Add')//.bS('s') // ??
				)
				$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
						$.cb().bC('iD'),
						$.ip().b("value:t, disable:iD"),
						$.bt('Del').bC('$parent.rmT')))
				$.sp("You have").A()
				$.B("&nbsp;").bT("inc().length").A()
				$.sp("inc task(s)").A()
				$.sp("- beer!").bV("inc().length==0").A()
				ko.b({
					itemToAdd: ko.o(''),
					allItems: ko.oa(['a', 'b', 'c']),
					selectedItems: ko.oa(['d']),
					addItem: function () {
						if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
							vm.allItems.push(vm.itemToAdd());
							vm.itemToAdd('')
						}
					},
					removeSelected: function () {
						allItems.removeAll(vm.selectedItems())
						selectedItems([])
					},
					sortItems: function () {
						vm.allItems.sort()
					}
				})
				vm2 = {
					ts: ko.oa(),
					nT: ko.o(),
					inc: ko.c(function () {
								var vm = this
								return ko.ut.af(
										vm.ts(), function (t) {
											return !t.iD()
										})
							}
					),
					aT: function () {
						this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
						this.nT('')
					},
					rmT: function () {
						o.ts.remove(this)
					}
				}
				/*
				 ko.b(vm2)
				 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
				 */
			}
		}
	}
	
	function planet() {
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
		Planets = function () {
			this.planets = $oa(PLANS)
			this.typeToShow = $o("all");
			this.displayAdvancedOptions = $o(false);
			this.addPlanet = function (type) {
				this.planets.push({name: "New planet", type: type})
			}
			this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow()
				if (desiredType == "all") return this.planets()
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).hide().slideDown()
				}
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).slideUp(function () {
						$(el).rm()
					})
				}
			}
		}
		PLAN = function () {
			$.x('g', 'Plan')
			$.p().A(
					$.lb().A(
							$.cC('displayAdvancedOptions'),
							'Display advanced options'
					)
			)
			$.p().A(
					'Show:',
					$.lb([$.ip()]),
					$.lb([$.ip()]),
					$.lb([$.ip()])
			)
			/*
			 <p data-bind='fadeVisible: displayAdvancedOptions'>
			 Show:
			 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
			 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
			 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
			 </p>*/
			$.d([$.d([$.d()])])
			/*
			
			 <div data-bind='template: { foreach: planetsToShow,
			 beforeRemove: hidePlanetElement,
			 afterAdd: showPlanetElement }'>
			 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
			 </div>
			
			 */
			$.p().A(
					$.bt('add rocky plan').b('click: addPlanet.bind($data, "rock")'),
					$.bt('add gas giant').b('click: addPlanet.bind($data, "gasgiant")')
			).b('fadeVisible: displayAdvancedOptions')
			// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
			// Could be stored in a separate utility library
			ok(new Planets())
		}
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
		Planets = function () {
			this.planets = $oa(PLANS)
			this.typeToShow = $o("all");
			this.displayAdvancedOptions = $o(false);
			this.addPlanet = function (type) {
				this.planets.push({name: "New planet", type: type})
			}
			this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow()
				if (desiredType == "all") return this.planets()
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).hide().slideDown()
				}
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).slideUp(function () {
						$(el).rm()
					})
				}
			}
		}
	}
	
	function virtual() {
		VIRTUALELS = function () {
			ko.bh.randomOrder = {
				init: function (el, valueAccessor) {
					
					// Build an array of child elements
					var ch = ko.vE.firstChild(el),
							CH = []
					while (ch) {
						CH.push(ch)
						ch = ko.vE.nextSibling(ch)
					}
					// Remove them all, then put them back in a random order
					ko.vE.emptyNode(el)
					while (CH.length) {
						ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
					}
				}
			}
		}
		VIRT = function () {
			$.z()
			$.d().b({randomOrder: true})
			$.d('First')
			$.d('Second')
			$.d('Third')
			ko.bindingHandlers.randomOrder = {
				init: function (el, valAcc) {
					// Pull out each of the child els into an array
					var childElems = []
					while (el.firstChild)
						childElems.push(el.removeChild(el.firstChild))
					// Put them back in a random order
					while (childElems.length) {
						var randomIndex = M.fl(M.rn() * childElems.length),
								chosenChild = childElems.splice(randomIndex, 1);
						el.appendChild(chosenChild[0]);
					}
				}
			}
		}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components
		VIRT = function () {
			$.z()
			$.d().b({randomOrder: true})
			$.d('First')
			$.d('Second')
			$.d('Third')
			ko.bindingHandlers.randomOrder = {
				init: function (elem, valueAccessor) {
					// Pull out each of the child elements into an array
					var childElems = []
					while (elem.firstChild)
						childElems.push(elem.removeChild(elem.firstChild))
					// Put them back in a random order
					while (childElems.length) {
						var randomIndex = M.fl(M.rn() * childElems.length),
								chosenChild = childElems.splice(randomIndex, 1);
						elem.appendChild(chosenChild[0]);
					}
				}
			}
		}
		VIRTP = function () {
			$z()
			ko.bindingProvider.instance.preprocessNode = function (node) {
				// Only react if this is a comment node of the form <!-- template: ... -->
				if (node.nodeType == 8) {
					var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
					if (match) {
						// Create a pair of comments to replace the single comment
						var c1 = document.createComment("ko " + match[1]),
								c2 = document.createComment("/ko");
						node.parentNode.insertBefore(c1, node);
						node.parentNode.replaceChild(c2, node);
						// Tell Knockout about the new nodes so that it can apply bindings to them
						return [c1, c2];
					}
				}
			}
		}
		VIRTP = function () {
			$z()
			ko.bindingProvider.instance.preprocessNode = function (node) {
				// Only react if this is a comment node of the form <!-- template: ... -->
				if (node.nodeType == 8) {
					var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
					if (match) {
						// Create a pair of comments to replace the single comment
						var c1 = document.createComment("ko " + match[1]),
								c2 = document.createComment("/ko");
						node.parentNode.insertBefore(c1, node);
						node.parentNode.replaceChild(c2, node);
						// Tell Knockout about the new nodes so that it can apply bindings to them
						return [c1, c2];
					}
				}
			}
		}
		VWW = function () {
			$.x()
			d = $.d('r', 200).A(
					$.h1('hello'),
					$.bt(__)
			)
			//d.$(function(){v.r()})
			mOv = function () {
				$l('mouse over !')
			}
			v = $V({
				e: {
					'click button': function () {
						$l('$')
					},
					$$: 'r',
					v: mOv
				},
				q: d,
				r: function () {
					alert('double click')
					$.bd().C($r())
				}
			})()
		}
		VIRTUALELS = function () {
			ko.bh.randomOrder = {
				init: function (el, valueAccessor) {
					
					// Build an array of child elements
					var ch = ko.vE.firstChild(el),
							CH = []
					while (ch) {
						CH.push(ch)
						ch = ko.vE.nextSibling(ch)
					}
					// Remove them all, then put them back in a random order
					ko.vE.emptyNode(el)
					while (CH.length) {
						ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
					}
				}
			}
		}
		VM = function (p) {
			this.somePop = p.smKey
		}
		VM.prototype.doSmg = function () {
		}
		Task = function (title, done) {
			this.tt = this.title = $o(title)
			this.done = $o(done)
		}
		tasks = $oa([
			new Task('Find new desktop background', true),
			new Task('Put shiny stickers on laptop', false),
			new Task('Request more reggae music in the office', true)
		])
		Planets = function () {
			this.planets = $oa(PLANS)
			this.typeToShow = $o("all");
			this.displayAdvancedOptions = $o(false);
			this.addPlanet = function (type) {
				this.planets.push({name: "New planet", type: type})
			}
			this.planetsToShow = ko.pc(function () {// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow()
				if (desiredType == "all") return this.planets()
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).hide().slideDown()
				}
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) {
					$(el).slideUp(function () {
						$(el).rm()
					})
				}
			}
		}
		Task = function (tt, done) {
			return {
				tt: ko.o(tt),
				done: ko.o(done)
			}
		}
		Per = function (n, ch) {
			var per = this
			per.n = n
			per.ch = $oa(ch)
			per.A = function () {
				this.ch.push('new ch')
			}
		}
		Per = function (n, ch) {
			var per = this
			per.n = n
			per.ch = $oa(ch)
			per.A = function () {
				per.ch.push('new ch')
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		function SurvVM(qu, ptsBdg, aws) {
			this.qu = qu;
			this.ptsBdg = ptsBdg
			this.aws = $.map(aws, function (tx) {
				return new Aw(tx)
			});
			this.save = function () {
				alert('To do')
			};
			this.ptsUsed = ko.c(function () {
						var tot = 0;
						for (var i = 0; i < this.aws.length; i++) {
							tot += this.aws[i].points()
						}
						return tot
					},
					this)
		}
		
		ExpanderCmVM = function () {
			this.isExpanded = ko.o(false)
			this.toggleText = ko.c(function () {
				return this.isExpanded() ? '-' : '+'
			}, this)
		}
		ExpanderCmVM.prototype.toggle = function () {
			this.isExpanded(!this.isExpanded())
		}
		AppVM = function () {
			this.items = [
				{
					binding: 'vs',
					desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
				},
				{
					binding: 't',
					desc: 'causes the assoc DOM el to display the text value of your pam.'
				},
				{
					binding: 'cm',
					desc: 'injects a spec cm into an el, and optly passes pams to it.'
				}
			]
		}
		Aw = function (text) {
			this.awText = text;
			this.points = $o(1)
		}
		initialData = [
			{name: "Well-Travelled Kitten", sales: 352, price: 75.95},
			{name: "Speedy Coyote", sales: 89, price: 190.00},
			{name: "Furious Lizard", sales: 152, price: 25.00},
			{name: "Indifferent Monkey", sales: 1, price: 99.95},
			{name: "Brooding Dragon", sales: 0, price: 6350},
			{name: "Ingenious Tadpole", sales: 39450, price: 0.35},
			{name: "Optimistic Snail", sales: 420, price: 1.50}
		]
		Feed = function () {
			this.ms = ko.o('pf!')
		}
		Ms = function (m) {
			return {m: ko.o(m || '')}
		}
		Task = function (d) {
			return {t: $o(d.t), iD: $o(d.iD)}
		}
		Per = function (n, ch) {
			this.n = n
			this.ch = $oa(ch)
			this.A = function () {
				this.ch.p('new ch ' + $r())
			}
		}
	}
	
	function grid() {
		KOGRID = function () {
			f = $.z().f().at({action: '/someServerSideHandler'})
			f.A(
					$.p(['You have asked for', $.sp('&nbsp;')
							.bT('gifts().length'), 'gift(s)']),
					$.tVs('gifts().length > 0').A($.tH().A($.tr().A(//tHR
									$.th().A('Gift name'), $.th().A('Price'))),
							$.tB().bE('gifts').A($.tr().A(  //tBR
									$.td($.ip().K('required').b({v: 'name', u: 1})).A(),
									$.td($.ip().K('required number').b({v: 'price', u: 1})).A(),
									$.td($.a('delete').b$('$root.removeGift')).A()))),
					$.bt('add gift').b$('addGift'), $.sb().bEn('gifts().length > 0'),
					$.p('You have asked for').A(
							$.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
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
										$.td($.a('delete').b$('$root.removeGift'))
									]))
					),
					$.b$('addGift'), $.sm().bEn('gifts().length > 0')
			)
			ok(new Gift([
				{name: "Tall Hat", price: "39.95"}, {name: "Long Cloak", price: "120.00"}]))
			// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
		}
		PAGEGRID = function () {
			$.x('r', 'page grid')//requires simple grid
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
		KOGRID = function () {
			$.z()
			f = $.f().at({action: '/someServerSideHandler'})
			f.A(
					$.p(['You have asked for', $.sp('&nbsp;')])
							.bT('gifts().length', 'gift(s)'),
					$.t([
						$.tH($.tr([$.th('Gift name'), $.th('Price')])).bVs('gifts().length > 0'),
						$.tBE('gifts').A(
								$.tr([$.td().A($.ip().K('required').b({v: 'name', u: 1})),
									$.td($.ip().K('required number').b({v: 'price', u: 1})),
									$.td($.a('delete').b$('$root.removeGift'))])),
						$.bt$('addGift'), $.smEn('gifts().length > 0')
					])
			)
			ok(new Gift([
				{name: "Tall Hat", price: "39.95"},
				{name: "Long Cloak", price: "120.00"}
			]))
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
		}
		FLVIEWPLG = function () {
			$.x('x')
			$.h3('All tasks').A($.spT('tasks().length'))
			$.ulE('tasks', [
				$.lL([
					$.cbC('done'), $.spT('tt')
				])
			])
			$.h3('Done tasks').A($.spT('doneTasks().length'))
			$.ulE('doneTasks', [$.liT('tt')])
			tasks = ko.oa(
					Task('new background', 1), Task('stickers'), Task('reggae', 1)
			)
			ok({
				tasks: tasks,
				doneTasks: tasks.filterByProperty("done", 1)
			})
			/*alt:
			 this.doneTasks = ko.pureComputed(function() {
			 var all = this.tasks(), done = [];
			 for (var i = 0; i < all.length; i++)
			 if (all[i].done())
			 done.push(all[i]);
			 return done;
			 }, this);
			 */
		}
//requires simple grid
		PAGEGRID = function () {
			$.x('r', 'page grid')
//<div data-bind='simpleGrid: gridViewModel'> </div>
			$.d().b('simpleGrid', 'gridViewModel')
			$.bt('add').b$('addItem')
			$.bt('sortbyn').b$(' sortByName')
			$.bt('sortbyn').b$(' sortByName')
			$.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')
			PagedGridModel = {
				items: oA(
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
						{hdrT: "Sales Count", rowText: "sales"},
						{
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
		PAGEGRID = function () {
			$.x('r', 'page grid')
			//<div data-bind='simpleGrid: gridViewModel'> </div>
			$.d().b('simpleGrid', 'gridViewModel')
			$.bt('add').b$('addItem')
			$.bt('sortbyn').b$(' sortByName')
			$.bt('sortbyn').b$(' sortByName')
			$.bt('Jump to first page').b('en',
					'gridViewModel.currentPageIndex')
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
						{hdrT: "Sales Count", rowText: "sales"},
						{
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
	}
	
	function huh() {
		TLVM = function () {
			var o = {
				ts: $oa([]),
				nT: $o()
			}
			o.inc = ko.c(function () {
				return ko.ut.af(
						o.ts(),
						function (t) {
							return !t.iD()
						}
				)
			})
			o.aT = function () {
				o.ts.push(Task({t: o.nT()}))
				o.nT("")
			}
			o.rmT = function (t) {
				o.ts.remove(t)
			}
			$.gJ('/ts', function (d) {
				o.ts(_.m(d, function (i) {
					return Task(i)
				}))
			})
			return o
		}
		KOSCR = function () {
			$.bd().A(
					$.scrp('tt').A($.h1('afsdfds')),
					$.d().bT("{name:'tt'}")
			)
			ok({})
		}
		BLM = function () {
			var o = {}
			o.itemToAdd = $o('')
			o.allItems = $oa(['a', 'b', 'c'])
			o.selectedItems = $oa(['d'])
			o.addItem = function () {
				if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
				) {
					o.allItems.push(o.itemToAdd());
					o.itemToAdd('')
				}
			}
			o.removeSelected = function () {
				o.allItems.removeAll(o.selectedItems())
				o.selectedItems([])
			}
			o.sortItems = function () {
				o.allItems.sort()
			}
			return o
		}
	}
	
	function _pre() {
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
	}
}