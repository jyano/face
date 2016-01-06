



_l = function(q, ob){
	
	q = O(q)? $(q): D(q)?q: l.sp()
	
	ob = D(ob)?ob: {}
	if(S(ob.id)){q.id(ob.id)}
	else if (S(ob.i)) {
		q.id(ob.i)
	}
	if(S(ob.k)){q.K(ob.k)}
	
	if (N(ob.H)) {
		q.at('height', ob.H)
	}
	if (N(ob.W)) {
		q.at('width', ob.W)
	}
	if(N(ob.w)){q.W(ob.w)}
	
	if (N(ob.h)) {q.H(ob.h)}
	else if(ob.h){q.html(ob.h)}
	
	if (N(ob.wh)) {q.W(ob.wh).H(ob.wh)}
	if (S(v)) {q.val(ob.v)}
	if (S(ob.ph)) {q.attr('placeholder', ob.ph)}
	if (S(ob.t)) {q.text(ob.t)}
	
	if(ob.a){
		if(A(ob.a)){
			
		}
		else if(O(ob.a)){
		
		}
		else {
			q.A()
		}
	}
	return q
	// ps dp
	//C c fF fS f _br br_ cl m$ $$ mar bor pad
	// ? top
	// ?? align borde-collapse vertical-align
}


l =  function(ob){
	var q
	ob = ob ||{}
	if(S(ob.l) && F(l[ob.l]) ){
		q=l[ob.l]()
	}
	
	q=q || l.sp()

	q = _l(q,ob)

	return q

}

ll = function (ob) {
	var q = l.d()
	q =  _l(q)
	return q
}

l.d  = function(){
	var q =  $('<div>')
	return q
}
l.sp = function () {
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