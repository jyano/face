$.d_w  = function (a, b) {
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
$.d_if = $.dIf = function (a, b) {
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
