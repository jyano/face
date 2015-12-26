 
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
	$.pI = function (a, b, c, d) {
		return $.p(b, c, d).if$(a)
	}
	///
	$.ip.v$ = ValueBoundTextInput = function () {
		//= $.iV = $.ipV = $.ipBv = $.ip_v
		var g = G(arguments), ip
		ip = $.ip()
		ip.v$.apply(ip, g)
		return ip
	}
	TextInputBoundTextInput = $.ipTi = $.ip_tI = $.ip_ti = function (a) {
		return $.ip().tI$(a)
	}
	TextBoundPasswordInput = $.pwTi = $.pw_tI = $.pw_ti = function (a) {
		return $.pw().tI$(a)
	}
	EnableBoundSubmitButton = $.smEn = function (a) {
		return $.sm().en$(a)
	}
	EnableBoundSpan = $.b$ = $.bt$ = $.btB$ = function (a, b, c) {
		var bt = $.bt(a)
		bt.cl$(b || a)
		if (c) {
			bt.en$(c)
		}
		return bt
	}
	$.bt.cl$ = ClickBoundButton = $.$bt = function (a, b) {
		var g = G(arguments)
		b = b || a
		if (g.n) {
			b = '$parent.' + b
		}
		return $.bt(a).cl$(b)
	}
	$.cl$ = $.c$cl = $.c$ = function (fn) {
		return $.cb().ch$(fn)
	}
	ClickBoundSubmitButton = $.s$ = function (a, b, c, d) {
		return $.sm(b, c, d).cl$(a)
	}
	$.sp.cl$ = ClickBoundSpan = $.b$$ = function () {
		var sp = $.sp()
		_.e(arguments, function (a) {
			sp.A($.cl$(a))
		})
		return sp
	}
	$.sm.cl$ = ClickBoundSubmitButton = $sb_$ = $.s$ = function (a, b, c, d) {
		return $.sb(b, c, d).cl$(a)
	}
	$.cb.ch$ = CheckedBoundCheckbox = $.cC = $.cbC = function (a, val) {
		//if (U(a)) {a = '$'}
		var cb = $.cb().ch$(a)
		cb.val(val)
		return cb
	}
	$.p.ch.ch$ = CheckedBoundCheckboxInParagraph = cbKO = cb2 = function (m, binding, val) {
		var cb = CheckedBoundCheckbox(binding, val)
		var ch = [$.sp().A(m), cb]
		return $.p(ch)
	}
	$.p.sp.ch$ = CheckBoundSpanInP = $.cKO = function (m, b, v) {
		var cb = $.cb()
		cb.v(v)
		cb.ch$(b)
		return $.p().A(
				$.sp().A(m),
				cb
		)
		//=cbKO=cb2
	}
	$.a$ = function (t, fn) {
		return $.a(t).b('$', fn)
	}
	$.aA = function (a, b, c, d) {
		return $.a(b, c, d).at$(a)
	}
	$.t.vs$ = $.tVs = function (a) {
		return $.t().vs$(a)
	}
	$.em.t$ = function (t) {
//em_t = em$t = t$Em = $.emT = $.eT
		return $.em().t$(t)
	}
	$.sl._$ = SelectBound_ = $sl$ = _selectBind = $.slB = function (a) {
		var q = $.sl()
		q.b.apply(q, arguments)
		return q
	}
	sm$f = $.fSb = $.fBsb = function (a, b) {
		var f = $.f()
		f.b({sb: a})
		//f.bSb(a)
		if (A(b)) {
			_.e(b, function (el) {
				f.A(el)
			})
		}
		return f
	}
	SubmitBoundForm = $.f_sb = $.fSb = $.fBsb = $.fSm = $.fBSm = function (a, b) {
		var f = $.f()
		f.sm$(a)//f.b({sb: a})
		if (A(b)) {
			_.e(b, function (b) {
				f.A(b)
			})
		}
		return f
		$.fSbold = function (a, b) {
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
	eachEls()
	function eachEls(){
		e$ol = ol$e = $ol$e = $ol.e$ = $.ol.e$ = $.olE = $.olBe = function (a, b) {
			var ol = $.ol().e$(a)
			if (b) {
				ol.A(b)
			}
			return ol
		}
		e$ = e$ul = ul$e = $ul$e = $ul.e$ = $.ul.e$ = $.ulE = $.uE = function (a, b, c) {
			var g = G(arguments)
			var ul = $.ul().e$(a)
			if (c) {
				b = $.li(g.r)
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
		$.li.tb$ = $.liBt = function (a) {
			return $.li().bT(a)
		}
		$.tB.e$ = function (a, b) {
			var g = G(arguments), tB = $.tB()
			tB.e$(a)
			if (A(b)) {
				_.e(b, function (el) {
					tB.A(el)
				})
			}
			else {
				if (true) {
					_.e(g.r, function (q) {
						tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
					})
				}
			}
			return tB
		}
		$.tBTr = $.tBT = function (arr) {
			var g = G(arguments)
			var tr = $.tr()
			g.r(function (q) {
				tr.A(q)
			})
			return $.tB().e$(arr).A(tr)
		}
		$.ko.table = function (arrBindingName, ch) {
			return $.t([
				$.tH(ch.tH),
				$.tB(arrBindingName).e$('peep')
			]).A(ch.tr)
		}
		$.dE = function (a, b) {
			var d = $.d().e$(a)
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
		$.uUl = $.U = function () {
			var g = G(arguments)
			//return $.ul.e$(g.f, $.li(g.r))
			var li = $.li(g.r)
			return $.u().e$(g.f).A(li)
		}
	}