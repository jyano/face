_form = function () {
	var f = $.f().C('g').pad(4).A(
			bs.fGpD().A(
					$.lb('un: ', 'un'),
					$.ip('un')),
			bs.fGpD().A(
					$.lb('pw: ', 'pw'),
					$.ip('pw')),
			$.sbm('log in')
	)
	return f
}
$.bt = $.button = function () {
	var g = G(arguments), o, bt = $('<button>');
	o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
	o.t = o.t || 'submit';
	if (!g.n) {
		bt.A()
	}
	bt.T(o.t)
	if (F(o.fn)) {
		bt.click(o.fn)
	}
	return bt
}
$.BT = $.btL = function (t, fn) {
	if (F(t)) {
		return $.bt('submit', t)
	}
	var b = $('<button>');
	b.text(t);
	b.$(fn)
	return b.K('btn-lg')
	/*
	 $.btL=  function(t,f,C,c){
	 var g=G(arguments),
	 t=g[0],f=g[1],C=g[2],c=g[3],
	 t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
	 b = $.bt().K('btn-lg').c(C, c);
	 b(t);if(f){ b.o( f ) }
	 if( g.n ){ b.dd() }//dropdown
	 return b
	 }
	 */
}
$._bt = $.btM = function (t, fn) {
	return $.bt(t, fn).C('b').K("btn btn-mini")
}
$.bts = function (a, b) {
	var g = G(arguments), d = $.dA(200);
	if (g.p) {
		return $.bts(['start', a], ['stop', b]).auto()
	}
	g.e(function (v) {
		v = A(v) ? v : [v];
		d.A($.bt(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
	})
	return d
}//floating div of buttons
$.btR = function (t, fn) {
	var b = $.bt(t, fn).float('right')//.display('block')
	return b
}
$.$bt = $.btLf = function (t, fn) {
	var b = $.bt(t, fn).float('left')//.display('block')
	return b
}
$.bX = $.btX = function (t, fn) {
	var g = G(arguments), bt, o;
	o = {
		url: g.f,
		data: g.s
	}
	t = t || g.p ? 'submit' : 'X'
	fn = fn || function () {
		var bt = this;
		$.aj({
			url: o.url, data: o.data, type: 'DELETE',
			success: function () {
				$(bt).pa().rm();
				if (g.n) {
					$.rl()
				}
			}
		})
	}
	bt = $.bt(t, fn)
	return bt
}
$.btR = function (text, func) {
	var b = $.button(text, func).float('right')//.display('block')
	return b
}
$.btL = function (text, func) {
	var b = $.button(text, func).float('left')//.display('block')
	return b
}
$.bts = function (a, b) {
	var g = G(arguments), d = dva(2)
	if (g.p) {
		return bts(['start', a], ['stop', b]).auto()
	}
	_.e(g, function (v) {
		v = A(v) ? v : [v]
		d($button(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
	})
	return d
}//floating div of buttons //beta
$.f = $.form = function (c, act) {
	var g = G(arguments),
			o, f = $('<form>').K('form')
	o = g.A ? {ch: g.f} : {c: g.f, a: g.s}
	if (o.ch) {
		g.eF(function (el) {
			f.A(el)
		})
	}
	if (o.a) {
		f.attr({action: o.a})
	}
	if (o.c) {
		f.C(o.c)
	}
	f.attr({method: g.p ? 'get' : 'post'})
	if (!g.n) {
		f.A()
	}
	return f
}
$.f.gr = $.fG = $.fGD = function () {
	return $.dK('form-group').fS(20)
}
$.formGet = function (c, act) {
	var g = G(arguments), c = g[0], act = g[1],
			f = $.f().K('form').attr('method', 'get')
	if (c) {
		f.C(c)
	}
	if (act) {
		f.at({action: act})
	}
	return f
}
$.fI = $.formInline = function (a, b) {
	var f = $.form().C('b').K('form-inline form-group'),
			g = G(arguments);
	_.e(g, function (g) {
		f.A(g)
	});
	if (g.p) {
		f.A($.submit('ok'))
	}
	return f
}
$.f.i = $.fR = $.formRight = function (a, b) {
	var g = G(arguments),
			f = $.form().C('b').K('form navbar-form navbar-right');
	_.e(g, function (g) {
		f.A(g)
	});
	if (g.p) {
		f.A($.submit('ok'))
	}
	return f
}
$.f.f = $.fF = $.formFalse = function (a, b) {
	var g = G(arguments),
			f = $.form().C('b').K('form well').attr({method: false, action: false});
	_.e(g, function (g) {
		f.A(g)
	});
	if (g.p) {
		f.A($.submit('ok'))
	}
	return f
}
$.sm = $.submit = $.submitButton = function (buttonText, func) {
	return $.button(buttonText, func).type('submit')
}
$.sb = function () {
	var g = G(arguments)
	var ip = $.ip()
	ip.at('type', 'submit')
	ip.A()
	return ip
}
$.sbb = function () {
	var g = G(arguments)
	var ip = $.ip()
	ip.at('type', 'submit')
	return ip
}
$.smBt = $.submitButton = function () {
	var args = G(arguments),
			button = $button.apply(0, args)
	return button.type('submit')
}
$.submit2 = sm = function (a) {
	var g = G(arguments)
	if (g.p) {
		return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
	}
	return ip('submit').k('show').v(ok(a))
}
$.sm = function (v) {
	var el = $('<input>').ty('submit').fS(16)
	if (v) {
		el.v(v)
	}
	return el
}
$.sb = function (t, fn) {
	var g = G(arguments), bt = $.bt(t, fn).ty('submit')
	if (g.p) {
		bt.K('btn btn-mini button-default').T(a || 'ok')
	}
	//bt.A('submit').K('show')
	return bt
}
$.fU = $.fileUpload = function (lb, t) {
	var fG = $.d().K("form-group").A(
			$.lb(D(lb) ? lb : 'upload file', 'upl').K('control-label').fS(20),
			$.ip().ty('file').id('upl').name('i')
	)
	if (t) {
		fG.A($.p(t).K('help-block'))
	}
	return fG
}