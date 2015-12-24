//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
function boundEls() {
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
	$.d_h = $.dH = function (a) {
		return $.d().bH(a)
	}
	$.d_cm = $.dCm = function (a) {
		return $.d().bCm(a)
	}
	
	
	ko.d.if= $.d_if = $.dIf = function (a, b) {
		var d = $.d().bI(a)
		if (A(b)) {
			_.e(b, function (b) {
				d.A(b)
			})
		}
		return d
	}
	$.d_e = $.dE = function (a, b) {
		var d = $.d().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				d.A(el)
			})
		}
		else if (S(b)) {
			d.A(b)
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
	$.p_i = $.pI = function (a, b, c, d) {
		var p = $.p(b, c, d).bI(a)
	}
	$.p_t = $.pT = function (a) {
		var p = $.p()
		p.bT(a)
		return p
	}
	$.ol_e = $.olE = $.olBe = function (a, b) {
		var ol = $.ol().bE(a)
		if (b) {
			ol.A(b)
		}
		return ol
	}
	$.li_t = $.liT = $.liBt = function (a) {
		return $.li().bT(a)
	}
	$.U = function () {
		var g = G(arguments)
		return $.uE(g.f, [$.li(g.s)])
	}
	$.u_e = $.uE = $.ulE = function (a, b) {
		var ul = $.ul().bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				ul.A(el)
			})
		}
		else if (S(b)) {
			ul.A(b)
		}
		return ul
	}
	$.t_e = $.tBE = function (a, b) {
		var tB = $.tB()
		tB.bE(a)
		if (A(b)) {
			_.e(b, function (el) {
				tB.A(el)
			})
		}
		return tB
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
//////////////    function inputs() {
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
	$.cb_c = $.cC = $.cbC = function (a) {
		return $.cb().bC(a)
	}
}

function elBind() {
	$.fn.ko_if = function (s) {
		return this.b('if', s)
		// = $.fn.bI = $.fn.bIf
	}
	$.fn.ko_vs = function (s) {
		return this.b('vs', s)
		// = $.fn.bVs
	}
	$.fn.ko_tx = function (s) {
		return this.b('text', s || '$data')
		// = $.fn.bT
	}
	
	$.fn.ko_ht = function (s) {
		return this.b('html', s)
		// = $.fn.bH
	}
	$.fn.ko_txIp = function (a) {
		return this.b({tI: a})
		// = $.fn.bTi = $.fn.bTI
	}
	$.fn.ko_e = $.fn.ko_each = function (s) {
// = $.fn.bE
		// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
		var g = G(arguments)
		if (g.p) {
			return '$data.' + s
		}
		return this.b('foreach', s)
	}
	$.fn.ko_w = $.fn.ko_with = function (s) { // = $.fn.bW
		return this.b('with', s)
	}
	$.fn.ko_C_ = function (s) {//= $.fn.bC
		return this.b('c', s)
	}
	$.fn.ko_op = $.fn.ko_option = function (s) {//= $.fn.bO
		return this.b('o', s)
	}
	$.fn.ko_ops = $.fn.ko_options = function (s) {//= $.fn.bSO
		return this.b('so', s)
	}
	$.fn.ko_$ = $.fn.ko_click = function (s) {
		return this.b('click', s)
		//= $.fn.b$
	}
}
function setBinding() {
	$.fn.dB = function (dB) {
		this.at({'data-bind': dB})
		return this
	}
	KOob = {
		e: 'foreach', c: 'checked', t: 'text', v: 'value', h: 'html', i: 'if', $: 'click',
		f: 'hasFocus', w: 'with', s: 'css', y: 'style', a: 'attr', en: 'enable',
		vs: 'visible', tI: 'textInput',
		o: 'options',
		oT: 'optionsText',
		ev: 'event',
		sm: 'submit', sO: 'selectedOptions', n: 'ifnot', d: 'disable', u: 'uniqueName', vU: 'valueUpdate',
		cm: 'component', tp: 'template',
		alt: {
			t: 'text', h: 'html', s: 'css', y: 'style',
			a: 'attr', e: 'foreach', i: 'if', n: 'ifnot', w: 'with', $: 'click', ev: 'event', sb: 'submit',
			en: 'enable', d: 'disable', V: 'valueUpdate', vs: 'visible', f: 'hasFocus',
			c: 'checked', ch: 'checked', v: 'value', o: 'options',
			ti: 'textInput', so: 'selectedOptions', u: 'uniqueName', tp: 'template', cm: 'component'
		}
	}
	hasColon = function (str) {
		return str.indexOf(':') != -1
	}
	$KOob = function (k, v) {
		var g = G(arguments), o = [], str
		if (g.O) {
			_.e(g.f, function (v, k) {
				o.push($KOob(k, v))
			})
			return o.join()
		}
		return (KOob[k] ? KOob[k] : k) + (v ? (': ' + v) : '')
	}
	$.fn._b = $.fn._ko = function (a, b) {
		var $el = this, g = G(arguments), o = [], str
		$el.dB(O(a) ? $KOob(a) : hasColon(a) ? a : $KOob(a, b || '$'))
		return $el
	}
	$.fn.ko = $.fn.b = function (a, b) {
		var g = G(arguments), o = [], str
		if (g.O) {
			_.e(g.f, function (v, k) {
				if (KOob[k]) {
					k = KOob[k]
				}
				o.push(k + ':' + v)
			})
			str = o.join()
		}
		return this.dB(hasColon(a) ? (KOob[a] ? KOob[a] : a + ':' + b || '$') : a)
	}
}
function applyBinding() {
	ko.aB = function (vm) {
		ko.applyBindings(vm)
	}
	ok = $applyBindings$ = $b = ko.b = ko.ab = function (o, b) {
		var g = G(arguments), ob
		if (S(o)) {
			ob = {}
			ob[o] = b
			g[0] = ob
		}
		if (g.O_) {
			vm = g.f
			return ko.aB(g.f)
		}
		return ko
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
	$o = $observable$ = ko.o = function (a) {
		return ko.observable(a)//ko.o(a)
	}
	$oa = $obbArr = ko.oa = function (a) {
		var g = G(arguments)
		var obbA = ko.observableArray(g.A_ ? g.f : g)
		return obbA
	}
}
function core(){
	$.fn.b = $.fn.ko = function (a, b) {
		KOob = {
			t: 'text',
			h: 'html',
			s: 'css',
			y: 'style',
			a: 'attr',
			e: 'foreach',
			i: 'if', n: 'ifnot', w: 'with',
			$: 'click',
			ev: 'event',
			sb: 'submit',
			en: 'enable',
			d: 'disable',
			V: 'valueUpdate',
			vs: 'visible',
			f: 'hasFocus',
			c: 'checked',
			ch: 'checked',
			v: 'value', o: 'options',
			ti: 'textInput',
			so: 'selectedOptions',
			u: 'uniqueName',
			tp: 'template',
			cm: 'component'
		}
		var o = []
		if (O(a)) {
			_.e(a, function (v, k) {
				if (KOob[k]) {
					k = KOob[k]
				}
				o.push(k + ':' + v)
			})
			this.at({
				'data-bind': $l(o.join())
			})
		}
		else {
			if (KOob[a]) {
				a = KOob[a]
			}
			// str= oO('b', a)
			str = a + ':' + b;  //$l(': '+ str  )
			this.at({'data-bind': str})
		}
		return this
	}
	$.fn.koE = $.fn.eKo = function (a) {
		return this.bindKO('fe', a)
	}
	$.fn.eD = $.fn.eB = function (a) {
		return this.bindKOEach('$data.' + a)
	}
	$.fn.dB = function (dB) {
		return this.at({'data-bind': dB})
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).bA(a)
	}

	//event and enable
	$.fn.bSm = function (s) {
		return this.b('submit', s)
	}
	
	$.fn.koE = $.fn.eKo = function (a) {
		return this.bindKO('fe', a)
	}
	
	
	$.fn.eD = $.fn.eB = function (a) {
		return this.bindKOEach('$data.' + a)
	}
	$.fn.dB = function (dB) {
		return this.at({'data-bind': dB})
	}
	function not() {
		$.fn.bN = $.fn.bIN = function (s) {
			return this.b('ifnot', s)
		}
		$.fn.bN = $.fn.bIN = function (s) {
			return this.dB('ifnot: ' + s)
		}
		$.fn.bN = $.fn.bIN = function (s) {
			return this.dB('ifnot: ' + s)
		}
		$.fn.bN = $.fn.bIN = function (s) {
			return this.b('ifnot', s)
		}
	}
	
	function qPar() {
		$.fn.qA = function (t) {
			return $('<' + t + '>').A()
		}
		$.fn.qAP = function (a, b, c) {
			this.qA(a).par(b, c)
			return this
		}
		$.fn.par = function (a, b) {
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
		$.fn.a2Lb = function (t) {
			t = t || 'label:'
			return this.a2($.lb(t))
		}
	}
	
	function atIf() {
		$.fn.bA = $.fn.bAt = function (s) {
			return this.b('attr', s)
		}
		$.fn.bA = $.fn.bAt = function (s) {
			return this.b('attr', s)
		}
		$.fn.bA = $.fn.bAt = function (s) {
			return this.dB('attr: ' + s)
		}
		$.fn.bA = $.fn.bAt = function (s) {
			return this.dB('attr: ' + s)
		}
		$.fn.bI = $.fn.bIf = function (s) {
			return this.dB('if: ' + s)
		}
		$.fn.bI = $.fn.bIf = function (s) {
			return this.dB('if: ' + s)
		}
		$.fn.bI = $.fn.bIf = function (s) {
			return this.b('if', s)
		}
	}
	
	function sync() {
		$.fn.bY = $.fn.bSy = function (s) {
			return this.b('style', s)
		}
		$.fn.bY = $.fn.bSy = function (s) {
			return this.b('style', s)
		}
		$.fn.bY = $.fn.bSy = function (s) {
			return this.dB('style: ' + s)
		}
		$.fn.bY = $.fn.bSy = function (s) {
			return this.dB('style: ' + s)
		}
	}
	
	function buu() {
		$.fn.bU = $.fn.bUN = function (s) {
			return this.dB('uniqueName: ' + s)
		}
		$.fn.bU = $.fn.bUN = function (s) {
			return this.b('uniqueName', s)
		}
		$.fn.bU = $.fn.bUN = function (s) {
			return this.dB('uniqueName: ' + s)
		}
	}
	
	function subm() {
		$.fn.bSb = function (s) {
			return this.dB('submit: ' + s)
		}
		$.fn.bSb = function (s) {
			return this.b('submit', s)
		}
		$.fn.bSb = function (s) {
			return this.dB('submit: ' + s)
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
	}
	
	function txIpVal() {
		$.fn.bTI = function (s) {
			return this.dB('textInput: ' + s)
		}
		$.fn.bTi = function (a) {
			return this.b({ti: a})
		}
		$.fn.bTi = function (a) {
			return this.b({ti: a})
		}
		$.fn.bTI = function (s) {
			return this.b('textInput', s)
		}
		$.fn.bTI = function (s) {
			return this.dB('textInput: ' + s)
		}
		$.fn.bTi = function (a) {
			return this.b({ti: a})
		}
		$.fn.bV = function (s) {
			var g = G(arguments)
			str = "value: " + s
			if (!g.n) {
				str += ", valueUpdate: 'afterkeydown'"
			}
			this.b(str)
			return this
		}
		$.iV = $.ipV = $.ipBv = function () {
			var g = G(arguments), ip
			ip = $.ip()
			ip.bV.apply(ip, g)
			return ip
		}
		/*
		 $.ipV=$.ipBv=function(){
		 var g=G(arguments),
		 ip = $.ip(),
		 ip.bV.apply(ip, g)
		 return ip
		 }*/
	}
	
	function options() {
		$.fn.bH = function (s) {
			return this.dB('html: ' + s)
		}
		$.fn.bH = function (s) {
			return this.dB('html: ' + s)
		}
		$.fn.bH = function (s) {
			return this.b('html', s)
		}
		$.fn.bS = function (s) {
			return this.b('css', s)
		}
		$.fn.bS = function (s) {
			return this.dB('css: ' + s)
		}
		$.fn.bS = function (s) {
			return this.b('css', s)
		} //not bind sprite!!
		$.fn.bS = function (s) {
			return this.dB('css: ' + s)
		}
		$.fn.bC = function (s) {
			return this.dB('checked: ' + s)
		}
		$.fn.bO = function (s) {
			return this.dB('options: ' + s)
		}
		$.fn.bSO = function (s) {
			return this.dB('selectedOptions: ' + s)
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
		$.fn.bO = function (s) {
			return this.dB('options: ' + s)
		}
		$.fn.bSO = function (s) {
			return this.dB('selectedOptions: ' + s)
		}
	}
	
	function koEach() {
		$.fn.bE = function (s) {
			return this.b('foreach', s)
		}
		$.fn.bE = function (s) {
			return this.dB('foreach: ' + s)
		}
		$.fn.bE = function (s) {
			return this.dB('foreach: ' + s)
		}
		$.fn.koE = $.fn.eKo = function (a) {
			alert('koE')
			return this.bindKO('fe', a)
		}
		$.fn.eD = $.fn.eB = function (a) {
			alert('ko eD')
			return this.bindKOEach('$data.' + a)
		}
		$.fn.bU = $.fn.bUN = function (s) {
			return this.b('uniqueName', s)
		}
		$.fn.bCm = function (s) {
			return this.b('component', s)
		}
		$.fn.bindKOEach = fe = forEach = function (a) {
			return this.bindKO('fe', a)
		}
		$.fn.bindKOEachData = feD = forEachData = function (a) {
			return this.bindKOEach('$data.' + a)
		}
		$.fn.bindKO = b = knockoutBind = function (a, b) {
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
			return this
		}
	}
	
	function templ() {
		$.fn.bTp = function (s) {
			return this.b('template', s)
		}
		$.fn.a2Lb = function (t) {
			t = t || 'label:'
			return this.a2($.lb(t))
		}
		$.fn.bT = function (s) {
			s = s || '$data'
			return this.dB('text: ' + s)
		}
		$.fn.bCm = function (s) {
			return this.dB('component: ' + s)
		}
		$.fn.bTp = function (s) {
			return this.dB('template: ' + s)
		}
		$.fn.bTp = function (s) {
			return this.b('template', s)
		}
		$.fn.bT = function (s) {
			return this.b('text', s || '$data')
		}
		$.fn.b = $.fn.ko = function (a, b) {
			KOob = {
				t: 'text',
				h: 'html',
				s: 'css',
				y: 'style',
				a: 'attr',
				e: 'foreach',
				i: 'if', n: 'ifnot', w: 'with',
				$: 'click',
				ev: 'event',
				sb: 'submit',
				en: 'enable',
				d: 'disable',
				V: 'valueUpdate',
				vs: 'visible',
				f: 'hasFocus',
				c: 'checked',
				ch: 'checked',
				v: 'value', o: 'options',
				ti: 'textInput',
				so: 'selectedOptions',
				u: 'uniqueName',
				tp: 'template',
				cm: 'component'
			}
			var o = []
			if (O(a)) {
				_.e(a, function (v, k) {
					if (KOob[k]) {
						k = KOob[k]
					}
					o.push(k + ':' + v)
				})
				this.at({
					'data-bind': $l(o.join())
				})
			}
			else {
				if (KOob[a]) {
					a = KOob[a]
				}
				// str= oO('b', a)
				str = a + ':' + b;  //$l(': '+ str  )
				this.at({'data-bind': str})
			}
			return this
		}
		$.fn.par = function (a, b) {
			this.at('params', a + ': ' + b);
			return this
		}
		$.fn.bT = function (s) {
			s = s || '$data'
			return this.dB('text: ' + s)
		}
		$.fn.bTp = function (s) {
			return this.dB('template: ' + s)
		}
	}
	
	function enab() {
		$.fn.bEn = function (a) {
			return this.b('en', a)
		}
		$.fn.bEn = function (s) {
			return this.b('enable', s)
		}
		$.fn.bEn = function (s) {
			return this.dB('enable: ' + s)
		}
		$.fn.bEn = function (a) {
			return this.b('en', a)
		}
		$.fn.bEn = function (s) {
			return this.dB('enable: ' + s)
		}
		$.fn.bEn = function (a) {
			return this.b('en', a)
		}
	}
	
	function bW$() {
		$.fn.bW = function (s) {
			return this.b('with', s)
		}
		$.fn.bW = function (s) {
			return this.dB('with: ' + s)
		}
		$.fn.bW = function (s) {
			return this.dB('with: ' + s)
		}
		$.fn.b$ = function (s) {
			return this.dB('click: ' + s)
		}
		$.fn.b$ = function (s) {
			return this.dB('click: ' + s)
		}
		$.fn.b$ = function (s) {
			return this.b('click', s)
		}
	}
	
	function cdf() {
		$.fn.bD = function (s) {
			return this.b('disable', s)
		}
		$.fn.bD = function (s) {
			return this.dB('disable: ' + s)
		}
		$.fn.bC = function (s) {
			return this.dB('checked: ' + s)
		}
		$.fn.bD = function (s) {
			return this.dB('disable: ' + s)
		}
		$.fn.bD = function (s) {
			return this.b('disable', s)
		}
		$.fn.bC = function (s) {
			return this.b('checked', s)
		}
		function hasV() {
			$.fn.bEv = function (s) {
				return this.dB('event: ' + s)
			}
			$.fn.bEv = function (s) {
				return this.b('event', s)
			}
			$.fn.bEv = function (s) {
				return this.b('event', s)
			}
			$.fn.bEv = function (s) {
				return this.dB('event: ' + s)
			}
			$.fn.bVs = function (s) {
				return this.b('visible', s)
			}
			$.fn.bVs = function (s) {
				return this.dB('visible: ' + s)
			}
			$.fn.bVs = function (s) {
				return this.dB('visible: ' + s)
			}
			$.fn.bV = function (s) {
				var g = G(arguments)
				str = "value: " + s
				if (!g.n) {
					str += ", valueUpdate: 'afterkeydown'"
				}
				this.b(str)
				return this
			}
			$.fn.bV = function (s) {
				var g = G(arguments)
				str = "value: " + s
				if (!g.n) {
					str += ", valueUpdate: 'afterkeydown'"
				}
				this.dB(str)
				return this
			}
			$.fn.bV = function (s) {
				var g = G(arguments)
				str = "value: " + s
				if (!g.n) {
					str += ", valueUpdate: 'afterkeydown'"
				}
				this.dB(str)
				return this
			}
		}
		
		$.fn.bF = function (s) {
			return this.b('hasFocus', s)
		}
		$.fn.bF = function (s) {
			return this.dB('hasFocus: ' + s)
		}
		$.fn.bF = function (s) {
			return this.b('hasFocus', s)
		}
		$.fn.bF = function (s) {
			return this.dB('hasFocus: ' + s)
		}
	}

//////////////////////////////////////////////function koEls(){
	function hTag() {
		$.h1T = $.h1Bt = function (a, b) {
			var h1 = $.h1(a)
			h1.bT(b || a)
			return h1
		}
		$.h1T = $.h1Bt = function (a, b) {
			var h1 = $.h1(a)
			h1.bT(b || a)
			return h1
		}
	}
	
	function div() {
		$.dCm = function (a) {
			return $.d().bCm(a)
		}
		$.dE = function (a, b) {
			var d = $.d().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					d.A(el)
				})
			}
			else if (S(b)) {
				d.A(b)
			}
			return d
		}
		$.dW = function (a, b) {
			var d = $.d().bW(a)
			if (A(b)) {
				_.e(b, function (b) {
					d.A(b)
				})
			}
			return d
		}
		$.dH = function (a) {
			return $.d().bH(a)
		}
		$.dIf = function (a, b) {
			var d = $.d().bI(a)
			if (A(b)) {
				_.e(b, function (b) {
					d.A(b)
				})
			}
			return d
		}//$.dI=
		$.dIf = function (a, b) {
			var d = $.d().bI(a)
			if (A(b)) {
				_.e(b, function (b) {
					d.A(b)
				})
			}
			return d
		}
		$.dW = $.dBw = function (a, b) {
			var d = $.d().bW(a)
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
		$.dE = function (a, b) {
			var d = $.d().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					d.A(el)
				})
			}
			else if (S(b)) {
				d.A(b)
			}
			return d
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
		$.dH = function (a) {
			return $.d().bH(a)
		}
		$.dCm = function (a) {
			return $.d().bCm(a)
		}
		$.dT = function (a) {
			return $.d().bT(a)
		}
		$.dE = function (a, b) {
			var d = $.d().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					d.A(el)
				})
			}
			else if (S(b)) {
				d.A(b)
			}
			return d
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
	};
	function pg() {
		$.pT = function (a) {
			var p = $.p()
			p.bT(a)
			return p
		}
		$.pT = function (a) {
			var p = $.p()
			p.bT(a)
			return p
		}
		$.pI = function (a, b, c, d) {
			var p = $.p(b, c, d).bI(a)
		}
	};
	function span() {
		$.sT = $.spT = function (a, b) {
			return $.sp(b)
					.bT(a || '$data')
		}
		$.spVs = function (a) {
			return $.sp().b('vs', a)
		}
	};
	function list() {
		$.tdT = function (a, b) {
			var td = $.td()
			td.bT(a)
			if (A(b)) {
				_.e(b, function (el) {
					td.A(el)
				})
			}
			return td
		}
		$.liT = $.liBt = function (a) {
			return $.li().bT(a)
		}
		$.olE = $.olBe = function (a, b) {
			var ol = $.ol().bE(a)
			if (b) {
				ol.A(b)
			}
			return ol
		}
		$.tBE = function (a, b) {
			var tB = $.tB()
			tB.bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					tB.A(el)
				})
			}
			return tB
		}
		function tabl() {
			$.tBE = function (a, b) {
				var g = G(arguments),
						tB = $.tB()
				tB.bE(a)
				if (A(b)) {
					_.e(b, function (el) {
						tB.A(el)
					})
				}
				else {
					_.e(g.r, function (q) {
						tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
					})
				}
				return tB
			}
			$.tBT = function (arr) {
				var g = G(arguments),
						tB = $.tB(), tr = $.tr()
				_.e(g.r, function (q) {
					tr.A(q)
				})
				return tB.bE(arr).A(tr)
			}
			$.tBE = function (a, b) {
				var tB = $.tB()
				tB.bE(a)
				if (A(b)) {
					_.e(b, function (el) {
						tB.A(el)
					})
				}
				return tB
			}
			$.tdT = function (a, b) {
				var td = $.td()
				td.bT(a)
				if (A(b)) {
					_.e(b, function (el) {
						td.A(el)
					})
				}
				return td
			}
		};
		function ul() {
			$.U = function () {
				var g = G(arguments)
				return $.uE(g.f, [$.li(g.s)])
			}
			$.uE = $.ulE = function (a, b, c) {
				var g = G(arguments)
				var ul = $.ul().bE(a)
				if (c) {
					b = $.li(_.r(g))
				}
				else if (O(b) && !A(b)) {
					b = [b]
				}
				if (A(b)) {
					_.e(b, function (el) {
						ul.A(el)
					})
				}
				else if (S(b)) {
					ul.A(b)
				}
				return ul
			}
		};
		$.U = function () {
			var g = G(arguments)
			return $.uE(g.f, [$.li(g.s)])
		}
		$.uE = $.ulE = function (a, b) {
			var ul = $.ul().bE(a)
			if (A(b)) {
				_.e(b, function (el) {
					ul.A(el)
				})
			}
			else if (S(b)) {
				ul.A(b)
			}
			return ul
		}
		$.uE = $.ulE = function (a, b, c) {
			var g = G(arguments)
			var ul = $.ul().bE(a)
			if (c) {
				b = $.li(_.r(g))
			}
			else if (O(b) && !A(b)) {
				b = [b]
			}
			if (A(b)) {
				_.e(b, function (el) {
					ul.A(el)
				})
			}
			else if (S(b)) {
				ul.A(b)
			}
			return ul
			function old() {
				$.uE = $.uE = $.ulE = function (a, b) {
					var ul = $.ul().bE(a)
					if (A(b)) {
						_.e(b, function (el) {
							ul.A(el)
						})
					}
					else if (S(b)) {
						ul.A(b)
					}
					return ul
				}
			}
		}
		$.U = function () {
			var g = G(arguments)
			return $.uE(g.f, [$.li(g.s)])
		}
		$.olE = function (a, b) {
			var ol = $.ol().bE(a)
			if (b) {
				ol.A(b)
			}
			return ol
		}
		$.uLE = function (a) {
			var g = G(arguments);
			return $.ulE(a, $.li(g.r))
		}
		$.liT = $.liBt = function (a) {
			return $.li().bT(a)
		}
		$.olE = $.olBe = function (a, b) {
			var ol = $.ol().bE(a)
			if (b) {
				ol.A(b)
			}
			return ol
		}
	};
	function inp() {
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
	};
	function koTx() {
		$.dT = function (a) {
			return $.d().bT(a)
		}
		$.dT = function (a) {
			return $.d().bT(a)
		}
		$.sT = $.spT = function (a, b) {
			return $.sp(b).bT(a || '$data')
		}
		$.sT = $.spT = function (a, b) {
			a = a || '$data'
			return $.sp(b).bT(a)
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
	
	function vsb() {
		$.spVs = function (a) {
			return $.sp().bVs(a)
		}
		$.spVs = function (a) {
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
		$.spVs = function (a) {
			return $.sp().b('vs', a)
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
		$.c$ = function (fn) {
			return $.cb().b$(fn)
		}
		$.cC = $.cbC = function (a) {
			if (U(a)) {
				a = '$'
			}
			return $.cb().bC(a)
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
	
	function extendObbArr() {
		oA = ko.observableArray.fn
		oA.p = function (i) {
			var oA = this
			oA.push(i)
			return oA
		}
	}
	
	function _pre() {
		kA = function () {
			var g = G(arguments)
			return ko.oa(g.A_ ? g.f : g)
		}
		kO = function () {
			var g = G(arguments)
			return ko.o.apply(ko, g)
		}
// ko.b({ g[0]:  ko.o(b) })
		$o = function (a) {
			return ko.o(a)
		}
		OK = ok = $b = ko.b = ko.ab = function (o, b) {
			var g = G(arguments), ob
			if (S(o)) {
				ob = {}
				ob[o] = b
				g[0] = ob
			}
			if (O(g[0])) {
				vm = g[0];
				return ko.applyBindings(g[0])
			}
			return ko
		}
// ko.b({ g[0]:  ko.o(b) })
		ok = function () {
			var g = G(arguments)
			g.p ? $.in(0, aB) : aB()
			function aB() {
				vm = g.S_ ? // pass a single key, value -> {key:value}
						Ob(g.f, g.s, g.n ? '-' : null) :
						g.u ? // pass nothing -> {$: $o(1)}
						{$: $o(g.n ? 0 : 1)} :
							// ???? pass plain object and element(string or ob?) :)
								(F(g.f) || N(g.f) || A(g.f) ) ?
									// pass just a value -> {$: value}
								{$: g.f} :
									// pass just plain obj (normal)
										g.f
				ko.applyBindings(vm)
				function Ob(a, b) {
					var g = G(arguments),
							o = {k: g.f, v: g.s}
					var ob = {}
					if (S(o.k)) {
						o.v = D(o.v) ? o.v : $o(g.n ? 0 : 1)
						ob[o.k] = o.v
					}
					return ob
				}
			}
		}
		OK = function (a) {
			var g = G(arguments)
			g.push('+')
			return ok.apply(null, g)
		}
//OK=ok
		ko.ve = ko.vE = ko.virtualElements
		ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
		//ko.ut.uo = ko.ut.unwrapObservable
		ko.r = ko.rg = function (n, ob) {
			ob = ob || {}
			if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
				ob.vm = {element: ob.vm}
			}
			ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
			if (U(ob.viewModel)) {
				ob = {vm: ob}
			}
			ob.template = ob.template || ob.tp || ob.t
			vm = ob
			return ko.cm.rg(n, ob)
		}
		return
		ko.cm.iR = ko.cm.isRegistered
		ko.c = ko.computed
		ko.o = ko.observable
		ko.bD = ko.applyBindingsToDescendants
		ko.o = ko.observable
		ko.c = ko.computed
		ko.do = ko.dependentObservable
		ko.oa = ko.observableArray
		ko.bh = ko.BH = ko.bindingHandlers
		ko.u = ko.ut = ko.utils
		ko.u.af = ko.u.arrayFilter
		ko.o = ko.observable
		ko.c = ko.computed
		ko.oA = ko.observableArray
		ko.oa = $oa = function (a) {
			var g = G(arguments), a = g[0]
			if (!A(a)) {
				a = g
			}
			return ko.oA(a)
		}
		ko.do = ko.dependentObservable
		ko.pc = ko.pureComputed
		ko.rTp = ko.renderTemplate
		ko.cm = ko.components
		ko.cm.rg = ko.cm.register
		ko.ve = ko.vE = ko.virtualElements
		ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
		ko.ut.uo = ko.ut.unwrapObservable
		ko.r = ko.rg = function (n, ob) {
			ob = ob || {}
			if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
				ob.vm = {element: ob.vm}
			}
			ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
			if (U(ob.viewModel)) {
				ob = {vm: ob}
			}
			ob.template = ob.template || ob.tp || ob.t
			vm = ob
			return ko.cm.rg(n, ob)
		}
//	ko.cm.iR = ko.cm.isRegistered
		ko.c = ko.computed
		ko.o = ko.observable
		ko.bD = ko.applyBindingsToDescendants
		oA = ko.observableArray.fn
		oA.p = function (i) {
			var oA = this
			oA.push(i)
			return oA
		}
		kA = function () {
			var g = G(arguments)
			return ko.oa(g.A_ ? g.f : g)
		}
		kO = function () {
			var g = G(arguments)
			return ko.o.apply(ko, g)
		}
		ko.ab = ko.applyBindings
		ko.bD = ko.applyBindingsToDescendants
		ko.uw = ko.unwrap
		ko.rTp = ko.renderTemplate
		ko.ve = ko.vE = ko.virtualElements
//ko.B=ko.ve.ab= ko.vE.AB= ko.vE.allowedBindings
		ko.u = ko.ut = ko.utils
		ko.ut.af = ko.ut.arrayFilter
		ko.ut.uo = ko.ut.unwrapObservable
		ko.bh = ko.BH = ko.bindingHandlers
		ko.u = ko.ut = ko.utils
		ko.u.af = ko.u.arrayFilter
		ko.o = ko.observable
		ko.c = ko.computed
		ko.oA = ko.observableArray
		ko.oa = $oa = function (a) {
			var g = G(arguments), a = g[0]
			if (!A(a)) {
				a = g
			}
			return ko.oA(a)
		}
		ko.do = ko.dependentObservable
		ko.pc = ko.pureComputed
		ko.rTp = ko.renderTemplate
		ko.cm = ko.components
		ko.cm.rg = ko.cm.register
		$o = function (a) {
			return ko.o(a)
		}
//<- $.bt('Clear tweets').b$(' $parent.clearResults')
		$o = ko.o = function (a) {
			return ko.observable(a)
		}
		$oa = ko.oa = function (a) {
			var g = G(arguments), a = g[0]
			return ko.observableArray(g.A_ ? g.f : g)
		}
		$Ob = function (a, b) {
			var g = G(arguments),
					o = {k: g.f, v: g.s}
			var ob = {}
			if (S(o.k)) {
				o.v = D(o.v) ? o.v :
						$o(g.n ? 0 : 1)
				ob[o.k] = o.v
			}
			return ob
		}
		ok = function () {
			var g = G(arguments), ob
			g.p ? _.in(0, aB) :
					aB()
			function aB() {
				vm = g.S_ ? // pass a single key, value -> {key:value}
						$Ob(g.f, g.s, g.n ? '-' : null) :
						g.u ? // pass nothing -> {$: $o(1)}
						{$: $o(g.n ? 0 : 1)} :
							// ???? pass plain object and element(string or ob?) :)
								(F(g.f) || N(g.f) || A(g.f) ) ?
									// pass just a value -> {$: value}
								{$: g.f} :
									// pass just plain obj (normal)
										g.f
				ko.aB(vm)
			}
			
			function old() {
				OK = function (o, b) {
					var g = G(arguments), ob
					return g.S_ ?
							ko.aB(vm = $Ob(o, b)) : g.O ?
							ko.aB(vm = g[0]) :
							ko
					function alt() {
						OK = function (a) {
							var g = G(arguments), ob
							g.push('+')
							return ok.apply(null, g)
						}
					}
				}
			}
		}
		ko.u = ko.ut = ko.utils
		ko.o = ko.observable
		ko.oa = ko.oA = ko.observableArray
		ko.c = ko.computed
		ko.pc = ko.pureComputed
		ko.do = ko.dependentObservable
		ko.aB = ko.ab = ko.applyBindings
		ko.bD = ko.applyBindingsToDescendants
		ko.ve = ko.vE = ko.virtualElements
		ko.B = ko.ve.ab = ko.vE.AB = ko.vE.allowedBindings
		ko.ut.af = ko.ut.arrayFilter
		ko.rTp = ko.renderTemplate
		ko.uw = ko.unwrap
		ko.ut.uo = ko.ut.unwrapObservable
		ko.c = ko.computed
		ko.pc = ko.pureComputed
	}
	
	$L('obbArrProto', 'scrp', '$fn', 'bEls', 'apps')
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
	bd = knockoutBind2 = function (a) {
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
	function obbArrProto() {//bT,bV and computed
		oA = ko.observableArray.fn // inhertince extension :)
		oA.p = function (i) {
			var oA = this
			oA.push(i)
			return oA
		}
		oA.rm = function (i) {
			var oA = this
			oA.remove(i)
			return oA
		}
		oA = ko.observableArray.fn // inhertince extension :)
		oA.p = function (i) {
			var oA = this
			oA.push(i)
			return oA
		}
	}
	
	function $fn() {
	}
	
	function bEls() {
	}
	
	function bindHandlres() {
		ko.bindingHandlers.randomOrder = {
			init: function (elem, valueAccessor) {
				// Build an array of child elements
				var child = ko.virtualElements.firstChild(elem),
						childElems = [];
				while (child) {
					childElems.push(child);
					child = ko.virtualElements.nextSibling(child);
				}
				// Remove them all, then put them back in a random order
				ko.virtualElements.emptyNode(elem);
				while (childElems.length) {
					var randomIndex = Math.floor(Math.random() * childElems.length),
							chosenChild = childElems.splice(randomIndex, 1);
					ko.virtualElements.prepend(elem, chosenChild[0]);
				}
			}
		};
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
		$.fn.bEn = function (a) {
			return this.b('en', a)
		}
		$Dx= $Dt = function () {
			var dt = new Date()
			return dt
		}
		$.aA = function (a, b, c, d) {
			return $.a(b, c, d).bA(a)
		}
		Task = function (tt, done) {
			return {
				tt: ko.o(tt),
				done: ko.o(done)
			}
		}
		ko.bH = ko.bindingHandlers
		ko.bH.randomOrder = {
			init: function (el, vA) {
				var ch = ko.vE.firstChild(el), CH = []
				while (ch) {
					CH.push(ch);
					ch = ko.vE.nextSibling(ch)
				}
				ko.vE.emptyNode(el)
				while (CH.length) {
					ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
				}
			}
			
			/*
			 init: function(el, valAcc) {
			 var childElems = []
			 while(el.firstChild)
			 childElems.push(el.removeChild(el.firstChild))
			 while(childElems.length) {
			 var randomIndex = M.fl(M.rn() * childElems.length),
			 chosenChild = childElems.splice(randomIndex, 1);
			 el.appendChild(chosenChild[0]);
			 }
			 }
			 */
		}
		ko.bH.fadeVisible = {
			init: function (el, vA) {// 1st set el vs pop rel to val
				$(el).toggle(ko.unwrap(vA()))
			},
			
			update: function (el, vA) {//on change, slowly fade el in/out
				ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
			}
		}
		ko.bH.hasFocus = {
			init: function (el, vA) {
				$(el).focus(function () {
					vA()(1)
				})
				$(el).blur(function () {
					vA()(0)
				})
			},
			update: function (el, vA) {
				ko.uw(vA()) ? el.focus() :
				 el.blur()
			}
		}
		$bH = function (b, o) {
			if (F(o.u)) {
				o.update = o.u
			}
			if (F(o)) {
				o = {update: o}
			}
			ko.bH[b] = o
			$.fn[b] = function (a) {
				this.b(b, a)
			}
		}
		$bH('slV', function (el, vA) {
			var isChecked = ko.uw(vA())
			isChecked ? $(el).slD(1800) :
					$(el).slU(2000)
		})
		ko.bH = ko.bindingHandlers
		ko.bH.randomOrder = {
			init: function (el, vA) {
				var ch = ko.vE.firstChild(el), CH = []
				while (ch) {
					CH.push(ch);
					ch = ko.vE.nextSibling(ch)
				}
				ko.vE.emptyNode(el)
				while (CH.length) {
					ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
				}
			}
			
			/*
			 init: function(el, valAcc) {
			 var childElems = []
			 while(el.firstChild)
			 childElems.push(el.removeChild(el.firstChild))
			 while(childElems.length) {
			 var randomIndex = M.fl(M.rn() * childElems.length),
			 chosenChild = childElems.splice(randomIndex, 1);
			 el.appendChild(chosenChild[0]);
			 }
			 }
			 */
		}
		ko.bH.fadeVisible = {
			init: function (el, vA) {// 1st set el vs pop rel to val
				$(el).toggle(ko.unwrap(vA()))
			},
			update: function (el, vA) {//on change, slowly fade el in/out
				ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
			}
		}
		ko.bH.hasFocus = {
			init: function (el, vA) {
				$(el).focus(function () {
					vA()(1)
				})
				$(el).blur(function () {
					vA()(0)
				})
			},
			update: function (el, vA) {
				ko.uw(vA()) ? el.focus() : el.blur()
			}
		}
		$bH = function (b, o) {
			if (F(o.u)) {
				o.update = o.u
			}
			if (F(o)) {
				o = {update: o}
			}
			ko.bH[b] = o
			$.fn[b] = function (a) {
				this.b(b, a)
			}
		}
		$bH('slV', function (el, vA) {
			var isChecked = ko.uw(vA())
			isChecked ? $(el).slD(1800) :
					$(el).slU(2000)
		})
//<- $.bt('Clear tweets').b$(' $parent.clearResults')
		ko.bindingHandlers.randomOrder = {
			init: function (elem, valueAccessor) {
				// Build an array of child elements
				var child = ko.virtualElements.firstChild(elem),
						childElems = [];
				while (child) {
					childElems.push(child);
					child = ko.virtualElements.nextSibling(child);
				}
				// Remove them all, then put them back in a random order
				ko.virtualElements.emptyNode(elem);
				while (childElems.length) {
					var randomIndex = Math.floor(Math.random() * childElems.length),
							chosenChild = childElems.splice(randomIndex, 1);
					ko.virtualElements.prepend(elem, chosenChild[0]);
				}
			}
		};
	}
}
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
KOO = function () {
	
	
	
	//body { font-family: arial; font-size: 14px; }
	//.liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
	//.liveExample input { font-family: Arial; }
	//.liveExample b { font-weight: bold; }
	//.liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
	//.liveExample select[multiple] { width: 100%; height: 8em; }
	//.liveExample h2 { margin-top: 0.4em; font-weight: bold; font-size: 1.2em; }
	d = $.dK('liveExample').A(
			$.p().A('First name: ', $.ip().attr({'data-bind': 'value: firstName'})),
			$.p().A('Last name: ', $.ip().attr({'data-bind': 'value: lastName'})),
			$.h2().A('Hello, ', $.sp().attr({'data-bind': 'text: fullName'}), '!')
			
			/*
			
			
			 "<p>First name: <input type="text" data-bind="value: firstName"></p>
			 <p>Last name: <input type="text" data-bind="value: lastName"></p>
			
			 <h2>Hello, <span data-bind="text: fullName">function g(){if(0&lt;arguments.length){if("function"===typeof C)C.apply(d,arguments);
			 else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option.
			 If you wish to read the current value, don't pass any parameters.");
			 return this}a.k.Ob(g);(r||s&amp;&amp;f())&amp;&amp;l();return n}</span>!</h2>"
			 */
	)
	ViewModel = function (first, last) {
		this.firstName = ko.observable(first);
		this.lastName = ko.observable(last);
		this.fullName = ko.computed(function () {
			// Knockout tracks dependencies automatically.
			// It knows that fullName depends on firstName and lastName,
			// because these get called when evaluating fullName.
			return this.firstName() + " " + this.lastName();
		}, this);
	};
	ko.applyBindings(new ViewModel("Planet", "Earth"))
	// This makes Knockout get to work
}
KKO = function () {
	d = $(str).A()
	ViewModel = function (first, last) {
		this.firstName = ko.observable(first);
		this.lastName = ko.observable(last);
		this.fullName = ko.computed(function () {
			// Knockout tracks dependencies automatically.
			// It knows that fullName depends on firstName and lastName,
			// because these get called when evaluating fullName.
			return this.firstName() + " " + this.lastName();
		}, this);
	};
	ko.applyBindings(new ViewModel("Planet", "Earth"))
}
CHL = function () {
	$.h1('shown!').slV()
	$.cC()
	ok()
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
KOTEMP = function () {
 
	format()
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
	z()
	format()
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
KOVIS = function () {
	format()
	s2(
			h1('you should seee if true!!!!').b('vs', 'ssm')
	)
	ko.ab(
			vm = {ssm: ko.o(true)}
	)
//vm.ssm(false); // ... now it's hidden
//vm.ssm(true); // ... now it's visible again
}
KOEACH = function () {
	format()
	s2(
			_t()(
					thead()(
							tr()(
									th()('First name'),
									th()('Last name')
							)
					),
					tbody().b('E', 'people')(
							tr()(
									td().b('t', 'fn'),
									td().b('t', 'ln'))
					)
			)
	)
	ko.ab({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KOEACH2 = function () {
	format()
	s2(
			h4('People'),
			ul().b('E', 'people')(
					li()(
							sp('pos/name: '),
							sp().b('t', '$index'),
							sp().b('t', 'n'),
							lk(' X').b('$', '$parent.rem')
					)
			),
			bt('add').b('$', 'add')
	)
	vm = function () {
		var o = {}
		o.people = ko.oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date()})
		}
		o.rem = function () {
			o.people.remove(this)
		}
		return o
	}
	ko.ab(vm()
	)
}
KNOCKS0 = function () {
	format()
	s2(
			$.h1('KNOCKOUT'),
			$.p('F: ', _B().b('t', 'first')),
			$.p('L: ', _B().b('t', 'last')),
			$.p('F: ', ip().b('V', 'first')),
			$.p('L: ', ip().b('V', 'last')).id('last'),
			$.p('L: ', _B().b('t', 'firstLast')),
			$.button('caps').b('$', 'capL')
	)
	vm = {}
	vm.first = ko.observable('j')
	vm.last = ko.observable('y')
	vm.firstLast = ko.computed(function () {
		return vm.first() + ' ' + vm.last()
	})
	vm.capL = function () {
		vm.last(uC(vm.last()))
	}
	ko.applyBindings(vm)
}
KNOCKS0 = function () {
	format()
	s2(h1('KNOCKOUT'),
			pg('F: ', _B().b('t', 'f')),
			pg('L: ', _B().b('t', 'l')),
			pg('F: ', ip().b('V', 'f')),
			pg('L: ', ip().b('V', 'l')).id('l'),
			pg('L: ', _B().b('t', 'fl')),
			bt('caps').b('$', 'capL'))
	vm = {}
	vm.f = ko.o('j')
	vm.l = ko.o('y')
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	vm.capL = function () {
		vm.l(uC(vm.l()))
	}
	ko.ab(vm)
}
KNOCKS1 = function () {
	format()
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
KNOCKS1 = function () {
	format()
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
	format()
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
			sp("You have"),
			_B("&nbsp;").b('t', "inc().length"),
			sp("inc task(s)"),
			sp("- beer!").b("visible: inc().length==0")
	)
	ko.ab(TLVM())
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

			$.ul().A($.li().A(
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
	ko.ab(TLVM())
}
KNOCKS = function () {
	 
	$.format()
	s2(
			ul().k('fs').b('E', "fs")(
					li().b(
							"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
					)
			)
	)
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
KNOCKS = function () {
	 
	$.format()
	s2(
			ul().k('fs').b('E', "fs")(
					li().b(
							"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
					)
			)
	)
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
KOSCR = function () {
	 
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
	)
	ok({})
}
KOS = function () {
 
	$.d('Profit Information')
			.bS("{color:curProf()<0?'red':'black'}")
			
	ok({curProf: $o(50)})
	
	_.in(function () {
		vm.curProf(-50)
	})
}

KOAT = function () {
	_$({
		C: 'w',
		 t: 'attributes.. unlikely to use?', 
		vm: {url: $o("year-end.html"),
		 tt: $o("stats report")},
		A: [$.aA('{href:url,title:tt}', 'report')]
	})
}

TXIP = TWOWAY = function () {
	 
	$.dA('y', 100, 300, 200, 100).bT('NAME')
			
	$.ip().bTI('NAME')
	
	ok({NAME: $o('ph text')})
	
} // bT(text)  bTI(textInput)  $o

K1 = function () {
	z()
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
	$.z('x')
	$.d([
		$.p(['un:', $.ipTi('un')]),
		$.p(['Pw:', $.pwTi('pw')]),
		'the vm: ',
		$.pre().bT('ko.toJSON($root,null,2)')
	])
	ok({un: $o('fred flintsone'), pw: $o('yaba daba password')})
}//$.ipTi  $.pwTi   $.pre  bT  ko.toJSON  $root
BHTML = HTM = function () {
	$.z().dH('details').fS(100);
	ok('h', $o('wait..'));
	_.in(2, function () {
		vm.h("<em>report:<a href='http://www.playboy.com'>here</a>.</em>")
	})
}// dH
ATTR = function () {
	$.x();
	$.aA('{href:url, title:tt}', 'report').fS(100)
	ok({url: $o("http://www.hustler.com"), tt: $o("statistics")})
}// aA
VISABLE = VIS = function () {
	$.z('y').h1('see me if true!').bVs('vs')
	$.h1('ALWAYS HERE!');
	ok('vs', $o(1))
	_.in(function () {
		vm.vs(0);
		_.in(function () {
			vm.vs(1)
		})
	})
}// bVs
IF = function () {
	$.x('x');
	$.d([
		'Display?', $.cC('ms'),
		$.pI('ms').A('Here is a message. Astonishing')
	])
	ok({ms: $o(0)});
	_.in(function () {
		vm.ms(1)
	})
} //$.cC  $.pI
ENABLE = EN = function () {
	$.x()
	$.p().A($.cbC('hasPhone'), 'I have phone')
	$.p('Your cellphone number').A(
			$.ip().b({v: 'num', en: 'hasPhone'}))
	ok({hasPhone: $o(0), num: ''})
}
VALUE = VAL = function () {
	$.x('K1');
	$Ms('K1')
	$.p('Name:').A($.ip().b({
				v: 'editing',
				v: 'name',
				f: 'editing'
			}),
			$.d('r').b({v: '!editing()', t: 'name', $: 'edit'}))
	$.p('Click the name to edit it; click elsewhere to apply changes')
	ok({
		name: $o("Bert Bertington"), editing: $o(),
		edit: function () {
			vm.editing(true)
		}
	})//KOFCC
}
SEL = CUNTS = function (n, v) {
	$.x('o').h1('dests')
	$.sO('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
TTR = function () {
	$.C('r');
	$('body').fS(30)
	$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [
		$.tr([$.tdT('f'), ', ', $.tdT('l')])])])//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $oa([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])}) //ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
	function classik() {
		KOEACH = function () {
			format()
			s2(
					_t()(
							thead()(
									tr()(
											th()('First name'),
											th()('Last name')
									)
							),
							tbody().b('E', 'people')(
									tr()(
											td().b('t', 'fn'),
											td().b('t', 'ln'))
							)
					)
			)
			ko.ab({
				people: [
					{fn: 'B', ln: 'Bert'},
					{fn: 'Ch', ln: 'Char'},
					{fn: 'De', ln: 'Dent'}
				]
			})
		}
	}
}
BINDUL = BUL = MONK = function () {
	$.x('x')
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	$.uE('list', [$.li(['my name is ',
		$.sT('n'), ' and i like to play ',
		$.sT('c')])])
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.p({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	vm.A().A().A()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
COMPUTED = CPD = function () {
	$.z().h1('KNOCKOUT') //bT,bV and computed
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
K3 = function () {
	z()
	ko.$bH({
		fadeVisible: {
			i: function (e, v) {
				var v = v()
				$l('v:' + v)
				$(e).toggle(v)
			}, u: function (el, vAc) {
				vAc() ? $(el).fadeIn() : $(el).fadeOut()
			}
		},
		jqButton: {
			i: function (e) {
				$(e).button()
			}, u: function (e, vA) {
				$(e).button("option", "disabled", vA().enable === false);
			}
		}
	})
	str = '<h3 data-bind="text: q"></h3>'
	str += '<p> distribute <b data-bind="text: pB"></b> points  </p>'
	str += ' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: As"><tr>'
	str += '<td data-bind="text: aT"></td>'
	str += ' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
	str += ' </tr> </tbody> </table>'
	str += '<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
	str += '<p><b data-bind="text: pB-pU()"></b> left</p>'
	str += '<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
	$(str).A()
	function VM(q, pB, As) {
		var vm = this
		vm.q = q
		vm.pB = pB
		vm.As = $.map(As, function (t) {
			return {aT: t, Ps: $o(1)}
		})
		vm.save = function () {
			alert('To do')
		}
		vm.pU = ko.c(function () {
			var t = 0;
			_.e(vm.As, function (a) {
				t += a.Ps()
			});
			return t
		}) //points Used
	}
	
	ok(new VM("factors?", 10, ["Functionality", "News", "dropshadows", "testimonials"]))
}
EACHDIVADD = EDA = function () {
	$.x()
	$.dE('peep', [$.p($.spT('f'), ' ', $.spT('l'))])
	vm = {peep: $oa([{f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}])}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ULADD = ULA = function () {
	$.x('x').h2('Peeep')
	$.lb('Show time: ').A(
			$.cbC('showDT'))
	$.uE('peep', [$.li().A(
			$.d([$.spT('n'), 'has',
				$.spT('ch().length'),
				'children &nbsp;',
				$.a$('New', 'A')]),
			$.ulE('ch', [
				$.li([$.spT(), $.spVs('$root.showDT').A(
						' (child rendered at ', $.spT('new Date().getSeconds()'), ')'
				)])]))])
	ok({peep: peep, showDT: $o()})
	peep()
	//add, conditional el
	//anonymous vm
}
ULDEL = ULD = function () {
	$.x();
	$.h4('People')
//bind bt 'click' to parent.rem
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: $oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
	function klassic() {
		ULINDEX = function () {
			format()
			s2(
					h4('People'),
					ul().b('E', 'people')(
							li()(
									sp('pos/name: '),
									sp().b('t', '$index'),
									sp().b('t', 'n'),
									lk(' X').b('$', '$parent.rem')
							)
					),
					bt('add').b('$', 'add')
			)
			vm = function () {
				var o = {}
				o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
				o.add = function () {
					o.people.push({n: "New at " + new Date()})
				}
				o.rem = function () {
					o.people.remove(this)
				}
				return o
			}
			ko.ab(vm()
			)
		}
	}
}
K4 = TUTC = COL = function () {
	z();
	$Ms('TUTC');
	$.h2(['seats:(', $.spT("_.z(Ss())"), ')'])
	$.t([$.tH([$.tr([$.th('n'), $.th('M'), $.th('$$'), $.th()])]),
		$.tBT('Ss', $.tdT('n'), $.td($.slB({o: '$root.Ms', v: 'm', oT: "'n'"})),
				$.tdT('fm'), $.td([$.a$('XX', "$root.rm")]))])
	$.h3(['$$: $', $.sp().bT('_.tF($$())')]).bVs('$$()>0');
	$.bt('+').b({$: 'A', en: '_.z(Ss())<5'})
	ok(new (function () {
		var vm = this;
		vm.Ms = [{n: "bat", $$: 0}, {n: "pig", $$: 3.9}, {n: "zeb", $$: 29}]
		vm.Ss = $oa([Res("jas"), Res("rig")]);
		vm.$$ = ko.c(function () {
			var $$ = 0, Ss = vm.Ss();
			_.e(Ss, function (s) {
				$$ += s.m().$$
			});
			return $$
		});
		vm.A = function () {
			vm.Ss.p(Res())
		};
		vm.rm = function (s) {
			vm.Ss.rm(s)
		};
		function Res(n, m) {
			var r = {n: n || 'ano', m: $o(m || vm.Ms[0])}
			r.fm = ko.c(fm);
			return r;
			function fm() {
				return fm(r.m().$$)
				function fm($$) {
					return !$$ ? 'Name' : '$' + _.tF($$)
				}
			}
		}
	}))
	function old() {
		TUTC1 = function () {
			z();
			$Ms('TUTC')
			availableMeals = [
				{mealName: "Standard (sandwich)", price: 0},
				{mealName: "Premium (lobster)", price: 34.95},
				{mealName: "Ultimate (whole zebra)", price: 290}
			]
			$.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
			$.t().A(
					$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
					$('<tbody>').bE('seats').A($.tr().A(
							$.td().bT('name'),
							$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
							$.td().bT('formattedPrice'),
							$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
			$.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
			$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
			ok(new ReservationsViewModel())
			function SeatReservation(name, initialMeal) {
				var self = this;
				self.name = name;
				self.meal = $o(initialMeal);
				self.formattedPrice = ko.computed(function () {
					var price = self.meal().price;
					return price ? "$" + price.toFixed(2) : "None";
				});
			}
			
			function ReservationsViewModel() {
				var self = this;
				// Non-editable catalog data - would come from the server
				self.availableMeals = availableMeals
				// Editable data
				self.seats = $oa([
					new SeatReservation("Steve", self.availableMeals[0]),
					new SeatReservation("Bert", self.availableMeals[0])
				])
				self.totalSurcharge = ko.computed(function () {
					var total = 0;
					for (var i = 0; i < self.seats().length; i++)
						total += self.seats()[i].meal().price;
					return total;
				})
				self.addSeat = function () {
					self.seats.push(new SeatReservation("", self.availableMeals[0]));
				}
				self.removeSeat = function (seat) {
					self.seats.remove(seat)
				}
			}
		} //full collection app from website !!!!!!!
	}
}
BSTY = function () {
	z()
	$CSS({body: {'font-size': 100, C: 'p'}, _profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}});
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
BCSS = function () {
	z()
	$CSS({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40)
			.b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		$l('in vm.protSs')
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		$l('res: ' + res)
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
WITH = function () {
	z();
	$.d([$.h1().bT('city'), $.p(['lat:', $.spT('lat'), 'lon:', $.spT('lon')]).b('w', 'xy')])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
WITHPARENT = WPA = function () {
	z();
	$.f().A('Twt-acc:', $.ip().bV('twtN'), $.sm().A('Get twts')).b({sm: 'getTwts'})
	$.d([$.h3(['Rec twts fetched at', $.spT('retrDt')]),
		$.ol().bE('topTwts').A($.liT('text')),
		$.bt('Clear twts').b('$', '$parent.clearRes')]).b({w: 'resDa'})
	ok(new (function () {
		var vw = this
		vw.twtN = $o('@ex');
		vw.resDa = $o(0)
		vw.clearRes = function () {
			vw.resDa(undefined)
		}
		vw.getTwts = function () {
			var n = vw.twtN();
			vw.resDa({topTwts: [{text: n + ':nice'}, {text: n + ':trump'}, {text: n + ':sex'}], retrDt: new Date()})
		}
	}))
}
STARRATING = function () {
	z()
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
	z();
	$Ms('KOSPA')
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
KOCSS = function () {
	$.x()
	$.d().fS(400).A('Profit Information')
			.bS("{color:curProf()<0?'red':'blue'}")
	ok({curProf: $o(50)})
	_.in(function () {
		vm.curProf(-50);
		$l('booya')
	})
}
CHECK = SPAM = function () {
	$.x('o', 'spam')
	$.cKO = function (m, b, v) {
		var cb = $.cb(),
				p = $.p().A($.sp().A(m), cb.bC(b))
		if (v) {
			cb.v(v)
		}
		;
		return p
	}//=cbKO=cb2
	$.p(['spam?',
		$.cbC('wantSpam', 'wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])])
			.bVs('wantSpam')
	vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
function _pre() {
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