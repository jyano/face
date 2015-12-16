$o = $observable$ = ko.o = function (a) {
	return ko.observable(a)//ko.o(a)
}
$oa = $obbArr = ko.oa = function (a) {
	var g = G(arguments)
	var obbA = ko.observableArray(g.A_ ? g.f : g)
	return obbA
}
ko.aB = function(vm){
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
		return ko.applyBindings(g.f)
	}
	return ko
}
$.fn.dB = function (dB) {
	this.at({'data-bind': dB})
	return this
}

$.fn._b = $.fn._ko = function (a, b) {
	this.dB(O(a) ? $KOob(a) : hasColon(a) ? a : $KOob(a, b || '$'))
	return this
}
$KOob = function self(k, v) {
	var g = G(arguments), o = []
	if (g.O) {
		_.e(g.f, function (v, k) {
			o.push(self(k, v))
		})
		return o.join()
	}
	return (KOob[k] ? KOob[k] : k) + (v ? (': ' + v) : '')
}
KOob = {
	e: 'foreach', c: 'checked', t: 'text', v: 'value', h: 'html', i: 'if', $: 'click',
	f: 'hasFocus', w: 'with', s: 'css', y: 'style', a: 'attr', en: 'enable',
	vs: 'visible', tI: 'textInput',
	o: 'options',
	oT: 'optionsText',
	ev: 'event',
	sm: 'submit', sO: 'selectedOptions', n: 'ifnot', d: 'disable', u: 'uniqueName', vU: 'valueUpdate',
	cm: 'component', tp: 'template'
}
function lib(){
	function $if() {
		$.fn.bI = $.fn.bIf = function (s) {
			return this.b('if', s)
		}
	}
	
	function visib() {
		$.fn.bVs = function (s) {
			return this.b('vs', s)
		}
	}
	
	function text() {
		$.fn.bT = function (s) {
			return this.b('text', s || '$data')
		}
	}
	
	function html() {
		$.fn.bH = function (s) {
			return this.b('html', s)
		}
	}
	
	function txIp() {
		$.fn.bTi = $.fn.bTI = function (a) {
			return this.b({tI: a})
		}
	}
	
	function foreach() {
		$.fn.bE = function (s) {
			// if called from $.fn.eD = $.fn.eB =  feD = ... use '+'
			var g = G(arguments)
			if (g.p) {
				return '$data.' + s
			}
			return this.b('foreach', s)
		}
	}
	
	function $with() {
		$.fn.bW = function (s) {
			return this.b('with', s)
		}
	}
	
	function _C_() {
		$.fn.bC = function (s) {
			return this.b('c', s)
		}
	}
	
	function options() {
		$.fn.bO = function (s) {
			return this.b('o', s)
		}
		$.fn.bSO = function (s) {
			return this.b('so', s)
		}
	}
	
	function mouse() {
		$.fn.b$ = function (s) {
			return this.b('click', s)
		}
	}
	
	function lists() {
		function $ol() {
			$.olE = $.olBe = function (a, b) {
				var ol = $.ol().bE(a)
				if (b) {
					ol.A(b)
				}
				return ol
			}
		}
		
		function $li() {
			$.liT = $.liBt = function (a) {
				return $.li().bT(a)
			}
		}
		
		function $ul() {
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
		}
		
		function table() {
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
		}
		
		function td() {
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
		}
	}
	
	function content() {
		function span() {
			$.spT = $.spBt = function (a, b) {
				return $.sp(b).bT(a)
			}
			$.sT = $.spT = function (a, b) {
				a = a || '$data'
				return $.sp(b).bT(a)
			}
		}
		
		function $div() {
			$.dW = $.dBw = function (a, b) {
				var d = $.d().bW(a)
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
			$.dH = function (a) {
				return $.d().bH(a)
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
				return d
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
		}
		
		function hTag() {
			$.h1T = $.h1Bt = function (a, b) {
				var h1 = $.h1(a)
				h1.bT(b || a)
				return h1
			}
		}
		
		function parag() {
			$.pI = function (a, b, c, d) {
				var p = $.p(b, c, d).bI(a)
			}
			$.pT = function (a) {
				var p = $.p()
				p.bT(a)
				return p
			}
		}
	}
	
	function forms() {
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
		function select() {
			$.sO = $.slO = function (a) {
				return $.sl().bO(a)
			}
		}
		
		function txIp() {
			$.ipV = $.ipBv = function () {
				var g = G(arguments),
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
		}
		
		function butt() {
			$.bt$ = $.btB$ = function (a, b, c) {
				var bt = $.bt(a).b$(a)
				if (c) {
					bt.bEn(c)
				}
				return bt
			}
			$.bt$ = $.btB$ = function (a, b) {
				return $.bt(a).b$(a)
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
		}
		
		function chekbox() {
			$.cC = $.cbC = function (a) {
				return $.cb().bC(a)
			}
		}
	}
}
function hasColon(str) {
	return str.indexOf(':') != -1
}
function alt(){
	 KOobAlt = {
		 t: 'text', h: 'html', s: 'css', y: 'style',
		 a: 'attr', e: 'foreach', i: 'if', n: 'ifnot', w: 'with', $: 'click', ev: 'event', sb: 'submit',
		 en: 'enable', d: 'disable', V: 'valueUpdate', vs: 'visible', f: 'hasFocus',
		 c: 'checked', ch: 'checked', v: 'value', o: 'options',
		 ti: 'textInput', so: 'selectedOptions', u: 'uniqueName', tp: 'template', cm: 'component'
	 }
 }
 
 
 NOK=function(){
 
	 d=$.d('r').dB( 'text: a')
	 
	 vm = $o('afsdafsfsdafsdfds')
	 
	// ko.aB({a: vm})
	 ko.aB({a: vm})	 
	 
	 _.in(function(){
			 vm('changed the view model!')
		 })
 
	 
	
 
 }
$.fn.b = $.fn.ko = function (a, b) {
	var o = [], str
	if (O(a)) {
		_.e(a, function (v, k) {
			if (KOob[k]) {
				k = KOob[k]
			}
			o.push(k + ':' + v)
		})
		str = o.join()
	}
	else if (a.indexOf(':') == -1) {
		str = KOob[a] ? KOob[a] : a + ':' + b || '$'
	}
	else {
		str = a
	}
	this.at({'data-bind': str})
	return this
}