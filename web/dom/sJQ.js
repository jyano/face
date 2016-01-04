$L('manip', 'ipsum','text','ajax','fnCol','move')
function manip() {
	
 
}
function ipsum() {
	$.ips = function (len) {
		len = len || 1;
		var str = '';
		_.t(len, function () {
			str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
		});
		return str
	}
	$.ipsP = function (len) {
		return $.p().A($.ipsum(len))
	}
	$.fn.ips = $.fn.ipsum = function () {
		var that = this
		_.each(arguments, function (num) {
			that.A($.ipsum(num))
		})
		return this
	}
	$.fn.ipsumP = function () {
		var el = this
		_.e(arguments, function (num) {
			el.A($.ipsumP(num))
		})
		return el
	}
	ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
	ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
	'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
	'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
	'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
	'te feugait nulla facilisi.'
	ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
	'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
	'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
	'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
	'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
	'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
	'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
	'ut laoreet dolore magna aliquam erat volutpat.'
}
function text() {
	$.fn.tt = function (t, c) {
		var p = $.p(t).mH(10).pH(30)
				.fS(24).K('text-center')
		this.A(p,
				$.hr().fS(10))
		return this
	}//name conflict?
}
function ajax() {
	$.pD = function (ev) {
		ev.preventDefault()
		return ev
	}
	$.iQ = function (o) {
		return O(o) && F(o.ajaxStart)
	}
	$.iO$ = function (o) {
		return O$(o) && !$.iQ(o)
	}
	$.g = $.G = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.G, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.get(S.eL(o.p), o.d || {},
				function (d) {
					o.fn = o.fn || function () {
						return 'boo ya!'
					};
					o.fn(d)
				})
	}
	$.eG = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eG, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.G(o.p, o.d || {},
				function (dd) {
					_.e(dd, function (d) {
						o.fn(d)
					})
				});
		return $
	}
	$.txG = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	$.j = $.gJ = $.Gj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.Gj, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.getJSON(
				S.eL(o.p),
				o.d || {},
				function (d) {
					o.fn(d)
				});
		return $
	}
	$.eJ = $.eGj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eJ, g[0])
		}
		o = F(g[1]) ?
		{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.Gj(o.p, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.po = $.P = function () {
		var g = G(arguments), o;
		o = F(g.s) ?
		{url: g.f, fn: g.s} :
		{url: g.f, da: g.s, fn: g.t};
		o.da = O(o.da) ? o.da : D(o.da) ? {da: o.da} : {}
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		o.url = S.eL(o.url)
		$.post(o.url, o.da, function (d) {
			o.fn(o.da, o)
		})
		return $
	}
	$.eP = $.ePo = function () {
		var g = G(arguments);
		if (U(g[1])) {
			return _.p($.eP, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.P(o.u, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.aj = function (ob) {
		return $.ajax(ob)
	}
	$.XML = function () {
		alert('$.XML!');
		return new XMLHttpRequest()
	}
} 
function fnCol() {
	$.red = function () {
		return $.d().C('r')
	}
	$.blue = function () {
		return $.d().C('b')
	}
	$.green = function () {
		return $.d().C('g')
	}
}
function move() {
	$.fn.toR = $.fn.moveRight = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) + num)
		return this
	}
	$.fn.toL = $.fn.moveLeft = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) - num)
		return this
	}
	$.fn.toU = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() - num)
		return this
	}
	$.fn.toD = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() + num)
		return this
	}
}
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}
$.c0 = function () {
	var g = G(arguments)
	$.c.apply($, g.A ? g.f : g)[0]
}
$0 = function () {
	return $.apply(null, arguments)[0]
}
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
TNGL = TANGLE = function () {
	z()
	a = $.dA('r', 50, 50).XY(50).A().pad(10)
	b = $.dA('b', 100, 100).XY(100).A().pad(10)
	c = $.dA('g', 200, 200).XY(200).A().pad(10)
	d = $.dA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
MGA = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}