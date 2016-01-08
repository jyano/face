$.temp = function (s) {
	return "<script type='text/template'>" + s + "</script>"
	Temp = function (i, h) {
		var s = ''
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		s = $.temp(s)
		_str = $.temp(_str)
		str = $(s)
		return $(s).id(i).A()
		return _.tp($('#' + i).html(), h || {})
	}
}
$ct = function () {
//!: $.ct gives jQuery error
	return $.d().K('ct').id('ct')
}
//$.c = $.can
ll = el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
ll.vwTr = function (ob) {
	var tr = $.tr()
	ob = _.x(ob || {}, {el: tr})
	var view = Bb.V.x(ob)
	tr.vw = ll.trVw()
	return tr
}
$$s = function (ob) {
	$s({$: ob})
}
$sl = {}
$.p.ch = function () {
}
$ol = function () {
}
$ul = function () {
}
$.fS = function (num) {
	return bd.fS(N(num, 30))
}
$.fn.pam = $.fn.par = function (a, b) {
	this.at('params', a + ': ' + b);
	return this
}
$.p.cb = $.p.ch = function () {
}
$.p.sp = function () {
}
$els = function () {
	return $.sp.apply(null, arguments)
}
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$.HR = function () {
	return $.hr().A()
}
$.btAf = function (what) {
	return $.bt().iA(what)
}
$.fn.op = $.fn.prop
//_rf = function (a) {a.refresh();return q}
$.spSmMdLg = function () {
	return $.sp().A(
			$.cbDiv('sm', 'Small'),
			$.cbDiv('md', 'Medium'),
			$.cbDiv('lg', 'Large')
	)
}
$.fn.iCh = function () {
	return this.is(":checked")
}
F.pD = function (fn) {
	return function (ev) {
		ev.preventDefault()
		return fn(ev)
	}
}
$.fn.ac = function (ac) {
	return this.attr('action', S.eL(ac))
}
$.fn.stPr = function () {
	this.click(function (ev) {
		ev.stopPropagation()
	})
	return this
}
$.fn.eH4 = function (tx) {
	return this.E($.h4(tx))
}
$.fn.eH1 = function (tx) {
	return this.E($.h1(tx))
}
// add vs create : add returns parent, create returns child
$.fn.aI = function () {
	var i = $.i.apply(null, arguments)
	return this.A(i)
}
$.fn.crD = function () {
	var q = $.d.apply(null, arguments)
	this.A(q)
	return q
}
$.ps = function () {
	var sp = $.sp(), g = G(arguments)
	g.e(function (g) {
		sp.A($.p(g))
	})
	return sp
}
$.tg = function (a) {
	return $('<' + a + '>')
}
$.frg = function () {
	return $(
			document.createDocumentFragment()
	)
}
$El = function (tag) {
	if (tag) {
		return document.createElement(tag)
	}
}
$.fn.el = function (e) {
	if (U(e)) {
		console.log($('<div>').append(this.clone()).html())
		return this
	}
}
$.fn.sb = function (fn) {
	return this.submit(fn)
}
$.fn.a2Lb = function (t) {
	t = t || 'label:';
	return this.a2($.lb(t))
}
$.fn.isLi = $.fn.iLi = function () {
	return _.isElement(this) && _h('HTMLLIElement', this)
}
$.fn.li = function () {
	var g = G(arguments),
			li = $.li()
	this.A(li)
	g.e(function (g) {
		li.A(g)
	})
}
$D = $Dt = function () {
	var dt = new Date()
	return dt
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
$.scrp = function (i, t) {
	var scr = $("<script type='text/html'>")
	scr.id(i)
	if (t) {
		scr.A(t)
	}
	scr.A()
	return scr
}
el = function (ob, op) {
	if (A(ob)) {
		_.e(ob, function (ob) {
			el(ob)
		})
		return
	}
	return el.d(ob, op)
}
el.d = function (ob) {
	var d, g = G(arguments)
	d = $('<div>')
	if (ob.b) {
		d.b(ob.b)
	}
	if (ob.ch) {
		ob.ch = A(ob.ch) ? ob.ch : [ob.ch]
		_.e(ob.ch, function (ch) {
			d.A(ch)
		})
	}
	if (ob.C) {
		d.C(ob.C)
	}
	if (ob.c) {
		d.c(ob.c)
	}
	if (ob.w) {
		d.W(ob.w)
	}
	if (ob.h) {
		d.H(ob.h)
	}
	if (!g.n) {
		d.A()
	}
	//ko
	if (ob.$vs) {
		d.bVs(ob.$vs)
	}
	if (ob.$h) {
		d.bH(ob.$h)
	}
	$l('el.d..')
	return d
}
els = function () {
	G(arguments).e(function (g) {
		el(g)
	})
}
$.format = function () {
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
	$.d().A(section1)
	$.d().A(section2)
}
$Dt = function () {
	var dt = new Date()
	return dt
}
$Ob = Ob = function (k, v) {
	var g = G(arguments)
	if (g.A || g.F || g.N || g.O) {
		return Ob('da', g.f)
	}
	g.f = D(g.f) ? g.f : 'da'
	var ob = {}
	ob[g.f] = g.s
	return ob
}
$.fn.a2Lb = function (t) {
	t = t || 'label:'
	return this.a2($.lb(t))
}
function tag() {
	_$_ = function (a) {
		a = a || ''
		return $('<' + a + '>')
	}
}
z = function () {
	$('body').E();
	return $
}
lll = function (q, ob) {
	var g = G(arguments)

	q = O(q) ? $(q) : D(q) ? q : l.sp()
	
	
	ob = D(ob) ? ob : {}
	if (S(ob.id)) {
		q.id(ob.id)
	}
	else if (S(ob.i)) {
		q.id(ob.i)
	}
	if (S(ob.k)) {
		q.K(ob.k)
	}
	if (N(ob.H)) {
		q.at('height', ob.H)
	}
	if (N(ob.W)) {
		q.at('width', ob.W)
	}
	if (N(ob.w)) {
		q.W(ob.w)
	}
	if (N(ob.h)) {
		q.H(ob.h)
	}
	else if (ob.h) {
		q.html(ob.h)
	}
	if (N(ob.wh)) {
		q.W(ob.wh).H(ob.wh)
	}
	if (S(v)) {
		q.val(ob.v)
	}
	if (S(ob.ph)) {
		q.attr('placeholder', ob.ph)
	}
	if (S(ob.t)) {
		q.text(ob.t)
	}
	if (ob.a2) {
		q.a2($(
				O(ob.a2) ? ob.a2 : 'body'
		))
	}
	if (ob.p2) {
		$(ob.p2).pp(q)
	}
	if (ob.a) {
		if (A(ob.a)) {
			q.A.apply(q, ob.a)
		}
		else {
			q.A(ob.a)
		}
	}
	if (ob.C) {
		q.C(ob.C)
	}
	if (ob.c) {
		q.col(ob.c)
	}
	return q
	// ps dp
	//C c fF fS f _br br_ cl m$ $$ mar bor pad
	// ? top
	// ?? align borde-collapse vertical-align
}
lll.l=function(l){
	var q
	if (N(l)) {l  = String(l)}
	if (S(l)) {
		l= TAGOb[l]? TAGOb[l]:l
		l= $('<' + l + '>')
	}
	return l? $(l):l
}


l = function (ob) {
	var g=G(arguments)
	if (O(g.s)) {return l(g)}
	if(g.A){
		var sp = l.s()
		_.e(g.f, function(_l){
			sp.A(l(_l))})
		return sp
	}
	var q
	ob = ob || {}
	
	var q= lll.l(ob.l)
	 
	q = q || l.sp()
	return lll(q, ob)
}
ll = function (ob) {
	var q
	ob = ob || {}
	if (N(ob.l) || S(ob.l)) {
		q = $('<' +
		(TAG[String(ob.l)] || ob.l)
		+ '>')
	}
	q = q || l.d()
	return lll(q, ob)
}
l.l= function(ob){
	ob=ob||{}
	ob.a2 = true
	return l(ob)
}
l.ll = function (ob) {
	ob = ob || {}
	ob.a2 = true
	return ll(ob)
}
l.d  = function(){
	var q =  $('<div>')
	return q
}
l.s= l.sp = function () {
	var q = $('<span>')
	return q
}

l.c =  function () {
	var q = $('<canvas>')
	return q
}

l.p = function () {
	var q = $('<p>')
	return q
}
l.h1 = function () {
	var q = $('<h1>')
	return q
}
l.bt = function () {
	var q = $('<button>')
	return q
}
l.i = function () {
	var q = $('<img>')
	return q
}
l.t =  function () {
	var q = $('<table>')
	return q
}
l.ul = function () {
	var q = $('<ul>')
	return q
}
l.ol = function () {
	var q = $('<ol>')
	return q
}
l.li = function () {
	var q = $('<li>')
	return q
}

// floating div vid tut: https://www.youtube.com/watch?v=H9FPOJduvts&list=PL6n9fhu94yhVDV697uvHpavA3K_eWGQap&index=52

TAGOb = {

	a: 'a',
	A: 'article', ac: 'article',
	bd: 'body',
	bt: 'button',
	b: 'b',
	br: 'br',
	c: 'canvas',
	d: 'div',
	dl: 'dl',
	dt: 'dt',
	f: 'form',
	F: 'footer', ft: 'footer',ftr: 'footer',
	fs: 'fieldset',
	i: 'img',
	h:'html',
	hr: 'hr',
	ip: 'input',
	I: 'iframe', if: 'iframe',
	hd:'head',
	H: 'header', hdr: 'header',
	sel: 'select',sl: 'select',
	li: 'li',
	lb: 'label', 
	l: 'label',
	N: 'nav', n: 'nav',
	ol: 'ol',
	o: 'option', op: 'option',
	p: 'p',
	s: 'span', sp: 'span',
	ta: 'textarea',
	th: 'th',
	td: 'td',
	t: 'table', tb: 'table',
	ul: 'ul', u: 'ul',
	v: 'video',
	st: 'style', y: 'style',
	'1': 'h1',
	'2': 'h2',
	'3': 'h3',
	'4': 'h4',
	'5': 'h5',
	'6': 'h6'
}
//QT:  an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
$.tpFn = qT = function (tpFn, ob, el) {
	return tpFn(ob, $(el || '<div>'))
}
//$.tpFn.thed =  sampleTemplate= function (ob, el) {return $(el).A($.tH().A($.tr().K('header').A($.th().A('Name'), $.th().A('Age'))))}
//   use like this: q = $.tpFn( $.tpFn.thed ).A()
$.tp.lii = function (ob, el) {//two ways ok!!!!
//can pass://1) jq/el
	return $(el).A($.li(ob.me), $.li(ob.me))
}
$.tp.lii2 = function (ob, el) {
	//2) or .... array
	return [$.li().A(ob.me), $.li().A(ob.me)]
	// use like this: q= $.tpFn( $.tpFn.lii, {me:'jason'} ).A()
}
//  QTexample: resultingChildElOrEls = $.tp($.tp.lii, {me: 'jason'}).A()
bbMock = function () {
	return docs = _.m($mk.docs, function (doc) {
		return new Bb.Model(doc)
	})
}
__ = 'fadsfasasdf'
Ap = {M: {}, C: {}, V: {}, T: {}}
$Mk = function () {
	$mk = function () {
	}
	ipsum()
	mks()
	function mks() {
		$mk.strs = ['wallaby', 'Macropus', 'agilis',
			'Agouti', 'Dasyprocta', 'leporina']
		$mk.Doc = function (title, content) {
			title = title || $mk.l1()
			content = content || $mk.lI()
			return {
				title: title,
				content: content
			}
		}
		$mk.Docs = function (num) {
			var docs = []
			_.t(N(num, 27), function () {
				docs.push($mk.Doc())
			})
			return docs
		}
		$mk.docs = $mk.Docs(12)
		var Doc = $mk.Doc
		$mk.obs = [
			new Doc('title1', 'content1'),
			new Doc('title2', 'content2'),
			new Doc('title3', 'content3'),
			new Doc('title4', 'content4'),
			new Doc('title5', 'content5'),
		]
		$mk.ob = {
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
		$mk.ob = {
			ob: $mk.ob,
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
	}
	
	function ipsum() {
		$mk.lI = function (n) {
			n = N(n, R(40))
			var str = _.sample($mk.strs)
			_.t(n, function () {
				str += ' ' + _.sample($mk.strs)
			})
			return str
		}
		$mk.l1 = function () {
			return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
		}
	}
}
$Sa = function () {
	$sa = function (a, b) {
		if (U(b)) {
			return _.partial($sa, a)
		}
		return _.sample(arguments)
	}
	$sa.S = $sa('')
}
$Sa()
$Mk()
//$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
$mk.$ = function () {
	$s($mk.css)
	return $
}
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}
$$$ = $Ms = Ms = Ms$ = function (ms) {
	var h1 = $.h1(ms)
	return $.d().fS(80).C($r(), $r()).A(h1)
}
$.x = function () {
	var g = G(arguments), bd = $.bd()
	bd.E()
	var o = g.O_ ? {css: g.f, title: g.f, col: g.t} :
	{col: g.f, title: g.s}
	if (o.css) {
		$s(o.css)
	}
	$.C(o.col || $r())
	if (o.title) {
		$.A($.h1(o.title), $.hr())
	}
	if (g.p) {
		bd.A($.hr())
	}
	return $
	$.s = function (css, c, tx) {
		$s(css)
		$.x(c, tx)
		return $
	}
}
_$ = function (ob) {
	$.x(ob.C || $r(), ob.t)
	if (ob.vm) {
		OK(ob.vm)
	}
	if (ob.el) {
		els(ob.el)
	}
	if (ob.A) {
		_.e(A(ob.A) ? ob.A : [ob.A], function (q) {
			q.A()
		})
	}
	if (ob._) {
		_.in(ob._)
	}
}
$.h = function () {
	var g = G(arguments), o
	bd = $.bd()
	bd.empty()
	bd.C($r())
	o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
	if (o.s) {
		$CSS(o.s)
	}
	if (o.t) {
		$.h1(o.t);
		$.hr().A()
	}
	return $
}
$MS = function (ms, cHeader, cBody) {
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
$.fm = $.format = function () {
	$.fm.A = $s1 = s1 = section1 = $.span()
	$.fm.B = $s2 = s2 = section2 = $.span()
	//$ctD = $.containerDiv(bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
}
$.app = ContainerDiv = CT = $.dCt = $.ctD = function () {
	var g = G(arguments)
	var d = $.d().K('container')
	if (!g.n) {
		d($.br(4))
	}
	_.e(g.A ? g.f : g, function (v) {
		d(v)
	})
	d.K('app').id('app')
	return d
}
$nav = function (pageName, rtr) {
	var nav = $.sp(pageName).K(pageName + '-nav')
	if (rtr) {
	}
	return nav
}
$.editDiv = $.eD = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.editDivRange = $.dE2 = function (a) {
	var d = $.editDiv(a), range = $.range()
	range.md(function (e) {
		e.stopPropagation()
	})
	range.on('input', function () {
		d.fi($('span')).fS($(this).v())
		d.fi($('textarea')).fS($(this).v())
	})
	d.pp(range)
	return d
};
$.pic = function (pic) {
	return $.i(pic._id + pic.ext).WH(120, 120)
			.$(function () {
				$.cut(pic._id + pic.ext)
			})
}
$.picDiv = function (top) {
	$l('in picDiv')
	return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
			.pad(25)
}
$.iD = $.imgDiv = function (st) {
	d = $.d('y', '+')
	$.eGj('img', function (i) {
		d.A($.c(100, 100).fit(i.d)
				.$(function () {
					st.bm(i.d, function (bm) {
						bm.sXY(.4).dg()
					})
				}))
	})
}
$.floatIp = function (t, fn) {
	var g = G(arguments), f
	f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
			.A($.sm(t), $.ip())
	if (F(fn)) {
		f.sm(fn)
	}
	return f
}
$.ipB = $.inputBox = function (ob) {
	ob = ob || {}
	var d, ip, fn = ob.func, url = ob.url || '/',
			tt = ob.boxTitle,
			inputType = ob.inputType || 'text',
			defaults = ob.defaults || {},
			t = ob.btT || 'submit', taI
	d = $.d().WH('auto').pad(10)
	if (tt) {
		d.A($.h1(tt))
	}
	if (inputType == 'text') {
		d.A(ip = $.ip().K('form-control')).A(
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip), defaults), fn)
				})
		)
	}
	if (inputType == 'textArea') {
		d.A(taI = $.ta().K('form-control'), $.bt(t, function () {
			$.post(url, _.df(dataValue(theTextAreaInput), defaults), fn)
		}))
	}
	if (inputType == 'textAndTextArea') {
		d.A(
				ip = $.ip().K('form-control'),
				taI = $.ta().K('form-control'),
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip, taI), defaults), fn)
				}))
	}
	return d
} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?}
$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg))
	return theForm.prependTo('body')
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
$.w = $.win = function (a, size, id) {
	var g = G(arguments),
			t, lBt, mBt, xBt, o, wd, w
	w = wd = $.dA('b', '+').WH('auto', 'auto').al(.9).
			ov('auto').pad(10)
			.bW(4).bS('dashed')
			.dg()
	wd.A(
			mBt = $.btR('>', function () {
				w.WH(700);
				lBt.sh();
				mBt.hd();
			}),
			lBt = $.btR('<', function () {
				w.WH('auto');
				mBt.sh();
				lBt.hd()
			}).hd(),
			xBt = $.btL('X', function () {
				w.rm()
			})
	)
	o = g.N_ ? {size: g.f} : g.O_ ? {ch: g.f} : {t: g.f, size: g.s, id: g.t}
	if (o.ch) {
		w.A(o.ch)
	}
	if (o.t) {
		w.tt(o.t)
	}
	if (o.id) {
		w.id(o.id)
	}
	return wd
	function alt() {
		$.win = $.window = function (a, c, id) {
			var size,
					theWindow,
					text,
					moreButton,
					lessButton,
					closeButton
			moreButton = $.buttonRight('>', function () {
				theWindow.WH(400)
				lessButton.show()
				moreButton.hide()
			})
			lessButton = $.buttonRight('<', function () {
				theWindow.WH('auto')
				moreButton.show()
				lessButton.hide()
			}).hide()
			closeButton = $.buttonLeft('X', function () {
				theWindow.remove()
			})
			theWindow = $.divA(size || 400)
			theWindow.C('b').opacity(.9).overflow('auto')
			theWindow.pad(10).borderWidth(4).borderStyle('dashed')
			theWindow.WH('auto').A(moreButton, lessButton.hide(), closeButton).drag().A()
			if (S(a)) {
				text = a
			}
			if (N(a)) {
				size = a
			}
			if (O(a)) {
				theWindow.A(a)
			}
			if (text) {
				theWindow.A(
						$.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
						$.hr().col(c || 'z').fontSize(10)
				)
			}
			if (id) {
				theWindow.id(id)
			}
			return theWindow
		}
	}
}
$.pop = function (message, o) {
	$.pop = function (message, ops) {
		_pop = function () {
			var modalContent = ModalContent() // <div class="modal-content"></div>
			_.each(arguments,
					function (arg) {
						modalContent(S(arg) ? $div()(arg) : arg)
					})
			return ModalForm(
					ModalDialog(
							modalContent
					))
		}
		pop = function (message, ops) {
			if (S(ops)) {
				return pop(ops, {t: message})
			}
			ops = O(ops) ? ops : {}
			var modalBody,
					message = message || 'pop pop',
					modalBody = ModalBody($h2(message)),
					theModal = _pop(modalBody)
			var titleColor = ops.tc || 'z',
					headerColor = ops.hc || 'z',
					title = ops.t
			//hide? default:false
			if (!ops.h) {
				theModal.m()
			}
			if (title) {
				
				//header
				modalBody.q.prepend(
						$hr().c(headerColor).s({height: 2}).q)
				//title
				modalBody.q.prepend(
						$h1(title).s('c', titleColor).q)
			}
			//button
			if (ops.b) {
				modalBody.a($button(ops.b))
			}
			//dragg
			if (ops.d) {
				theModal.drg()
			}
			if (ops.drag) {
				theModal.drg()
			}
			//opacity
			if (ops.a) {
				theModal.s({opacity: ops.a})
			}
			if (ops.opacity) {
				theModal.s({opacity: ops.opacity})
			}
			//text color of the MESSAGE
			if (ops.c) {
				
				//flash like crazy
				if (ops.c == '*') {
					setInterval(function () {
						modalBody.c()
					}, 100)
				}
				
				//color
				else {
					theModal.s({c: ops.c})
				}
			}
			//color of background of modal itself
			if (ops.C) {
				modalBody.s({C: ops.C})
			}
			//this color takes over the whole screen!
			//this is the background color of the hiding body
			if (ops.bc) {
				theModal.s({C: ops.bc})
			}
			return theModal
		}
		$._pop = function () {
			var modalContent = $.modalContent()
			_.each(arguments,
					function (arg) {
						modalContent.A(
								S(arg) ? $.div().text(arg) : arg
						)
					}
			)
			return $.modalFade().A($.modalDialog().A(modalContent))
		}
		if (S(ops)) {
			return $.pop(ops, {title: message})
		}
		ops = O(ops) ? ops : {}
		message = message || 'pop pop'
		modalBody = $.modalBody().A($.h2(message))
		theModal = $.modalFade().A($.modalDialog().A($.modalContent().A(modalBody)))
		if (!ops.hide) {
			theModal.modal()
		}
		if (ops.title) {
			modalBody.prepend(
					$.h1(ops.title).col(ops.titleColor || 'z'),
					$.hr().C(ops.headerColor || 'z').css('height', 2)
			)
		}
		if (ops.button) {
			modalBody.A($.button(ops.button))
		}
		if (ops.drag) {
			theModal.drag()
		}
		if (ops.opacity) {
			theModal.opacity(ops.opacity)
		}
		//text color of the MESSAGE
		if (ops.col) {
			theModal.col(ops.col)
		}
		//color of background of modal itself
		if (ops.C) {
			//flash like crazy
			if (ops.C == '*') {
				setInterval(function () {
					modalBody.C($r())
				}, 100)
			}
			else {
				modalBody.C(ops.C)
			}
		}
		//this color takes over the whole screen!
		//this is the background color of the hiding body
		if (ops.backgroundColor) {
			theModal.C(ops.backbroundColor)
		}
		return theModal
	}
	if (S(o)) {
		return $.pop(o, {title: message})
	}
	o = O(o) ? o : {}
	message = message || 'pop pop'
	mB = $.modalBody().A($.h2(message))
	m = $.modalFade().A($.modalDialog().A($.modalContent().A(mB)))
	if (!o.hd) {
		m.modal()
	}
	if (o.tt) {
		mB.pp($.h1(o.titC).col(o.titC || 'z'),
				$.hr().C(o.headerC || 'z').css('height', 2))
	}
	if (o.bt) {
		mB.A($.bt(o.bt))
	}
	if (o.dg) {
		m.dg()
	}
	if (o.al) {
		m.al(o.al)
	}
	//text color of the MESSAGE
	if (o.col) {
		m.col(o.col)
	}
	//color of background of modal itself
	if (o.C) {
		//flash like crazy
		if (o.C == '*') {
			_.ev(.1, function () {
				mB.C($r())
			})
		}
		else {
			mB.C(o.C)
		}
	}
	//this color takes over the whole screen!
	//this is the background color of the hiding body
	if (o.c) {
		m.C(o.c)
	}
	return m
}
$.chat = function (n, c, id) {
	var wd
	n = n || 'chatbox' //default chatRm
	if ($CHATS[n]) {
		$l('already in this room');
		return
	} //singleton!
	k.em('jRm', n) //join the room (sign up to receive messages.. and i guess to also send them)
	_.ev(.5, function () {
		k.em('rmUd', n)
	}) //repeatedly request updates for yourself (so you have a users list)
	$.chatEl = function (n, id, c) {
		var wd = $.w('chatroom: ' + n).id(id).css({'min-width': 600, 'min-height': 400}).C(c || $r())
		wd.messages = $.d().id('cbi').C('u').ov('auto')
		wd.input = $.ip().K('form-control')
		wd.usersDiv = $.d().A($.i('me').A())
		wd.mainPanel = $.Cl(8, wd.messages, wd.input,
				$.bt('send', function () {
					k.em('ChatRmMs', {rm: n, ms: wd.input.V(), un: '_username'})
				}),
				$.bt('pop', function () {
					k.emit('p', ip.V(), n)
				}),
				$.bt('pic', function () {
					$.pop('pic select')
				})
		)
		wd.usersPanel = $.Cl(4, $.h3('users:'), wd.usersDiv)
		wd.A($.R().A(wd.mainPanel, wd.usersPanel))
		return wd
	}
	wd = $.chatEl(n, id || 'cbo', c || 'o')
	$CHATS[n] = {
		wd: wd,
		updateUsersDiv: function (users) {
			wd.usersDiv.E()
			_.e(users, function (un) {
				wd.usersDiv.A($.h5(un).$(function () {
					$.popUser(un)
				}))
			})
		},
		toggle: function () {
			this.wd.toggle();
			return wd
		},
		write: function (m) {
			wd.messages.A($.h5(m).col('w'))
		},
		writeBlack: function (m) {
			wd.messages.A($.h5(m).col('x'))
		}
	}
}
$.ChatBt = function (n) {
	return $.bt(n, function () {
		$.chat(n)
	}).mar(40)
}
ZX = TESTEDITDIV = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv().A().C('a')
	$.editDiv().C('b')
	//$.editDiv2().A()
}
$.scr = function (scr, fn) {
	return $.getScript(scr, fn)
}
$.getMultiScripts = function (arr, path) {
	var _arr = $.map(arr, function (scr) {
		return $.getScript((path || "") + scr)
	})
	//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
	return $.when.apply($, _arr)
}
// _.each(SCRIPTS, function(scr){$.scr(scr)})
/*
 dfr = $.getMultiScripts(SCRIPTS)
 dfr.done(function(){alert('done')})
 .always(function(){
 alert('always')
 $.scr('app')
 })
 .fail(function(){alert('fail')})
 */
GSCR = function () {
	$.scr = function (scr, fn) {
		return $.getScript(scr, fn)
	}
	$.getMultiScripts = function (arr, path) {
		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr)
		})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($, _arr)
	}
	$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
		console.log(a + b + c)
		d = c
		$l('got script')
		$.$(function () {
			$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
		})
	})
	dfr = $.Deferred(function (dfrd) {
		d = dfrd
		// $(dfrd.resolve)
	})
	testx = 100
	$.when(
			$.scr("/boxSprite.js"),
			$.scr("/easel.js")
	).done(function () {
				$l(testx)
			})
}
$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}
 