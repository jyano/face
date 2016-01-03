$L('but', 'submitBut', 'form' ,'mouse' ,'keys')
$.ip = function (n) {
	var g = G(arguments), o, ip
	ip = $('<input>').at('type', 'text')
	return ip
	if (n) {
		ip.n(n);
		ip.id(n)
	}
	o = g.O ? g.f :
			g.N_ ? {w: g.f, id: g.s} :
			{ph: g.f, id: g.s, v: g.t || g.s, n: g.t || g.s}
	ip.ph(o.ph)
	if (o.w) {
		ip.W(o.w)
	}
	if (o.id) {
		ip.id(o.id)
	}
	if (o.v) {
		ip.v(o.v)
	}
	if (o.n) {
		ip.n(o.n)
	}
	ip.C(o.C || 'r').col(o.c || 'b')
	if (!g.n) {
		ip.K('form-control')
		ip.A()
	}
	return ip
}
$.ipBt = function (btT, f) {
	return $.d().A($.ip(),
			$.bt(btT, function () {
				f.A(ip.V())
			})).A()
}
$.pw = function (n) {
	var el = $('<input>').ty('password')
	if (n) {
		el.n(n)
	}
	return el
}
$.ta = $.textarea = function (rows, cols, Cl, cl) {
	var g = G(arguments),
			ta = $('<textarea>')
	Cl = Cl || 'pink'
	cl = cl || 'black'
	if (g.N) {
		ta.K('form-control')
	}
	if (N(rows)) {
		ta.attr({rows: rows})
	}
	if (N(cols)) {
		ta.attr({cols: cols})
	}
	return ta.C(Cl, cl)
}
$.ta = function (rows, cols, Cl, cl) {
	var g = G(arguments),
			ta = $('<textarea>');
	Cl = Cl || 'p';
	cl = cl || 'z';
	if (g.N) {
		ta.K('form-control')
	}
	if (N(rows)) {
		ta.at({rows: rows})
	}
	if (N(cols)) {
		ta.at({cols: cols})
	}
	return ta.C(Cl, cl)
}
$.l = function (t, fr, n, ph) {
	alert('$.l')
	var g = G(arguments), lb = $('<label>'),
			ip, sp
	if (!g.f) {
		return lb
	}
	lb.for(fr).K('control-label').h(t)
	if (!g[2]) {
		return lb
	}
	ip = $.ip().id(fr).n(n).ph(ph || '...')
	if (!g.n) {
		ip.K('form-control')
	}
	sp = $.sp().A(lb, ip)
	if (!g.n) {
		sp.A()
	}
	return sp
}
$.lb = function () {
	var g = G(arguments), o, lb = $('<label>')
	o = g.A_ ? {ch: g.f} : {t: g.f, fr: g.s}
	if (o.ch) {
		_.e(o.ch, function (ch) {
			lb.A(ch)
		})
		return lb
	}
	lb.ht(o.t).for(o.fr)
	//fr=fr||t
	//lb.K('control-label')
	if (!g.n) {
		lb.A()
	}
	return lb
}
$.cb = function (n, v, lb) {
	$._cb = function () {
		return $.ip().ty('checkbox')
	}
	var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
			cb, id
	if (g.u) {
		return $('<input type="checkbox">').A()
	}
	if (A(v)) {
		v = v[0];
		checked = true
	}
	id = n + '-' + v
	V = '&nbsp' + v + '&nbsp'
	cb = $.ip().ty('checkbox')
	cb.n(n)
	cb.v(v)
	cb.id(id)
	if (checked) {
		cb.at({checked: 'checked'})
	}
	cb = lb ? $.sp().A(cb, $.lb(l, id))
			: g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
			!g.n ? $.sp().A(cb, $.lb(V, id)) :
					cb
	return cb.A()
	/*
	 $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
	 if(A(v)){v=v[0];checked=true}
	 var I=n+'-'+ v,
	 V='&nbsp'+v+'&nbsp',
	 cbox = $.input().type('checkbox').n(n).v(v).id(I)
	 if(checked){cbox.attr({checked:'checked'})}
	 return lb? $.span().A(cbox , $.lb(l,I))
	 :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
	 :g.N? $.span().A(cbox , $.lb(V,I) )
	 :cbox }
	 $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
	 n = g.f||''; v = g.s||'';id = g.t||'';
	 cb= $.ip().ty('checkbox')
	 sp  = $.sp()
	 if(g.A_){_.e(g, function(ar){
	 sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
	 $.lb(ar[1], ar[2]))});
	 return sp.A($.br())}
	 cb.n(n).v(v).id(id);
	 if(g.p){cb.prop('checked', true)}
	 if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
	 return cb}
	 */
}
$.cbG = function (n, v) {
	var g = G(arguments), n = g[0], v = g[1], sp = sp();
	if (g.p) {
		_.e(v, function (v) {
			sp.A($.cb(n, v, '+'))
		})
	}
	else {
		_.e(v, function (v) {
			sp.A(
					$.cb(n, v))
		})
	}
	return s.id(n)
}
$.cbl = $.cbLb = function () {
	var g = G(arguments)
	return $.sp().A(
			$.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
}
$.rbOld = function () {
	var g = G(arguments),
			chkd, n = g[0] || 'n', v = g[1], lb = g[2];
	if (A(v)) {
		v = v[0];
		chkd = true
	}
	var I = n + '-' + v,
			V = '&nbsp' + v + '&nbsp',
			rbox = $.ip().ty('radio').n(n).v(v).id(I);
	if (chkd) {
		rbox.at({checked: 'checked'})
	}
	return l ?
			$.sp().A(rbox, $.lb(lb, I))
			: g.p ?
			$.sp().A($.br(), rbox, $.lb(V, I))
			: g.N ?
			$.sp().A(rbox, $.lb(V, I))
			: rbox
}
$.rb = function (name, id) {
	var g = G(arguments)
	id = id || name
	var q = $('<input>').at('type', 'radio')
	q.n(name)
	q.id(id)
	if (g.p) {
		q.at('checked', true)
	}
	return q
}
$.rbG = function (n, v) {
	var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
	if (g.p) {
		_.e(v, function (v) {
			sp.A($.rb(n, v, '+'))
		})
	}
	else {
		_.e(v, function (v) {
					sp.A($.rb(n, v))
				}
		)
	}
	return sp.id(n)
}
$.rg = function (n, m, M) {
	m = N(m) ? m : 0;
	M = N(M) ? M : 100;
	n = n || 'r';
	var r = $('<input type="range">');
	r.attr({name: n, min: m, max: M});
	return r
}
$.sl = function () {
	var g = G(arguments), sl = $('<select>').A()
	if (g.A_) {
		g.eF(function (o) {
			if (N(o)) {
				o = '' + o
			}
			if (S(o)) {
				o = $.o(o)
			}
			sl.A(o)
		})
	}
	if (g.p) {
		sl.multiselect()
	}
	/*
	 //if(!A(g.f)){g.unshift( ['select'] )}
	 if(A(g.f)){
	 sl= $.sel.apply($, g.f);
	 _.e(g.r,function(v){
	 if(S(v)){v = $.op(v)}
	 sl(v)})}
	 else {sl= $.sel();
	 _.e(g,function(v){if (S(v)) {v = $.o(v)}
	 sl(v)})  }
	 */
	sl.V = function (v) {
		if (U(v)) {
			return sl.q.v()
		}
		sl.v(v);
		return sl
	}
	sl.o = function (f) {
		f = f || alert
		sl.change(function () {
			f(sl.V())
		})
		return sl
	}
	if (g.O) {
		g.eF(function (v, k) {
			sl.A($.o(k, v))
		})
	}
	return sl
	//$.sl(['volvo', $.op('merc'), 'saab' ])
	//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
	//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
}
$.SEL = function (n, i) {
	var g = G(arguments), sl
	sl = $('<select>')
	sl.n(n).id(i)
	if (!g.n) {
		sl.K('form-control')
	}
	if (g.p) {
		sl.at({mutiple: true})
	}
	return sl
}
$.sel = function () {
	var g = G(arguments)
	var sl = $.sl().id(g.f)
	_.e(g.r, function (g) {
		var o = $.op(g).v(g)
		sl.A(o)
	})
	sl.A()
	return sl
}
$.o = $.op = function (n, v) {
	var g = G(arguments),
			o = $('<option>')
	o.A(g.f);
	o.v(g.s || g.f)
	// n = n||'option';  v=v||n; o.T(n).v(v)
	// o.V( g[0] )
	if (g.p) {
		o.at({selected: true})
	}
	o.A()
	return o
}
$.og = $.opGr = function (lb) {
	var g = G(arguments), o, og
	o = g.S_ ? {lb: g.f, ch: g.s} : {ch: g.f}
	og = $('<optgroup>')
	if (o.lb) {
		og.at('label', o.lb)
	}
	if (o.ch) {
		if (A(o.ch)) {
			_.e(o.ch, function (q) {
				//if(N(q)){q =''+ q }
				if (S(q)) {
					q = $.o(q)
				}
				og.A(q)
			})
		}
		else {
			og.A(o.ch)
		}
	}
	og.A()
	return og
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
$.v = function (id) {
	return $('#' + id).val()
}
$.V = function (id) {
	var $el = $('#' + id)
	var val = $el.val()
	$el.val('')
	return val
}
but()
form()

function but() {
	$.bt = $.button = function () {
		var g = G(arguments), o, bt = $('<button>');
		o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
		o.t = o.t || 'submit';
		if (!g.n) {
			bt.A()
		}
		
	  bt.T(o.t)
	  
		if(F(o.fn)){
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
}
function form() {
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
}

function mouse() {
	$.mu = $.mouseup
	$.md = $.mousedown
	$.mm = $.mousemove
	$.fn.$ = function (fn) {
		return this.click(fn)
	}
	$.scroll = function (a) {
		return $(window).scroll(a || function () {
			$('body').C('*')
		})
	}
	$.fn.xPrp = function () {
		this.on('mousedown', function (e) {
			e.stopPropagation()
		})
		return this
	}
	$.fn.dg = $.fn.drag = function () {
		this.A()
		this.each(function () {
			$(this).css('top', $(this).position().top)
			$(this).css('left', $(this).position().left)
		})
		this.P('a')
		this.on('mousedown', function (e) {
			var el = $(this)
			var offset = el.offset(),
					deltaX = e.pageX - offset.left,
					deltaY = e.pageY - offset.top
			$('html').on('mousemove', function (e) {
				var x = e.pageX - deltaX,
						y = e.pageY - deltaY
				el.left(x)
				el.top(y)
			}).on('mouseup', function () {
				$(this).off()
			})
		})
		//touchDrg(element)
		return this
	}
	$.fn.hv = $.fn.hover
	$.fn.fc = $.fn.focus
	$.md = $.mousedown = function (fn) {
		$('body').on('mousedown', fn);
		return this
	}
	$.mu = $.mouseup = function (fn) {
		$('body').on('mouseup', fn);
		return this
	}
	$.mm = $.mousemove = function (fn) {
		$('body').on('mousemove', fn);
		return this
	}
	$.oMD = function (fn) {
		$.md(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	$.oMU = function (fn) {
		$.mu(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.oMM = function (fn) {
		$.mm(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.fn.$ = $.fn.click
	$.fn.hv = $.fn.hover
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pm = $.fn.pressmove = function (func) {
		var mouse_pressed
		this.mousedown(function () {
			mouse_pressed = true
		})
		this.mouseup(function () {
			mouse_pressed = false
		})
		this.mousemove(function (e) {
			if (mouse_pressed) {
				func(e)
			}
		})
		return this
	}
	$.fn.mp = $.fn.mousePoint = function (e, scale) {
		scale = N(scale) ? scale : 1
		return V(e.pageX / scale, e.pageY / scale)
	}
	$.fn.mU = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.tap = function (func) {
		this('body').on('keydown mousedown', func);
		return this
	}
	$.$ = function (f) {
		return $(document).on('click', _v(f))
		/*
		 $.$=function(){
		 var b=$('html')
		 b.click.apply(b, arguments)
		 return $
		 }*/
	}
	$.$$ = function (f) {
		return $(document).on('dblclick', _v(f))
		//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
	}
	$.click = m$ = function (f) {
		return $(document).on('click', _v(f))
	}
	$.dblclick = m$$ = function (f) {
		return $(document).on('dblclick', _v(f))
	}
	tou = function () {
		$.ts = $.touchstart
		$.te = $.touchend
		$.ts(function (e) {
			w._mD = 1
			$mXY(e)
			$.touchmove($mXY)
			function $mXY(e) {
				$l('mXY')
				var touch = e.originalEvent.touches[0]
				mX = (touch.clientX - w.x) // / 30
				mY = (touch.clientY - w.y) // / 30
			}
		})
		$.te(function () {
			w._mD = 0
		})
	}
}
function keys() {
	$.wh = function (a, b) {
		return D(b) ? a.which == b : a.which
	}
	KEYOB = KEYOBJ = {
		up: 38, u: 38,
		down: 40, d: 40,
		left: 37, l: 37,
		right: 39, r: 39,
		space: 32, s: 32,
		enter: 13, e: 13
	}
	$.kD = function self(key, fn) {
		if (O(key)) {
			_.e(key, function (fn, k) {
				if (s$(k).isUpper()) {
					$.kU(k.toLowerCase(), fn)
				}
				else {
					$.kD(k, fn)
				}
			})
			return
		}
		if (KEYOB[key]) {
			key = KEYOB[key]
		}
		$('body').on('keydown', function (e) {
			if (e.which == key) {
				fn(e, $.K)
			}
		})
	}
	$.kU = function (key, funk) {
		if (KEYOBJ[key]) {
			key = KEYOBJ[key]
		}
		$('body').on('keyup', function (e) {
			if (e.which == key) {
				funk(e, $.K)
			}
		})
	}
	$.K = {}
	$.space = function (fn) {
		return $.kD('space', fn)
	}
	KEYS = WHYQ = function () {
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		$.K.l = 1
		$.K.L = 0
		$.K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		$.K.l = false
		$.K.l = 0;
		$.K.L = 1
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		$.K.r = 1
		$.K.dir = 'right'
		$.K.R = 0
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		$.K.r = 0;
		$.K.R = 1
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		$.K.u = 1;
		$.K.U = 0
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		$.K.u = 0;
		$.K.U = 1
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		$.K.d = 1;
		$.K.D = 0
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		$.K.d = 0;
		$.K.D = 1
	})
	function keys1() {
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			$.K.l = 1
			$.K.L = 0
			$.K.dir = 'left'
		})
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			$.K.l = false
			$.K.l = 0;
			$.K.L = 1
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			$.K.r = 1
			$.K.dir = 'right'
			$.K.R = 0
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			$.K.r = 0;
			$.K.R = 1
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			$.K.u = 1;
			$.K.U = 0
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			$.K.u = 0;
			$.K.U = 1
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			$.K.d = 1;
			$.K.D = 0
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			$.K.d = 0;
			$.K.D = 1
		})
	}
}