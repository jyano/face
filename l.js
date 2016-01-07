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
lll.tag=function(l){
	var q
	if (N(l)) {  l  = String(l)}
	
	if (  S(l)) {
		l='<' + ( TAG[String(l)] ||  l) + '>'
	}
	return l
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
	var tag = lll.tag(ob.l)
	if (N(ob.l) || S(ob.l)) {
		q = $('<' +
		(TAG[String(ob.l)] || ob.l)
		+ '>')
	}
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
TAG = {

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
	lb: 'label', l: 'label',
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
 
  