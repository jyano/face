Oo = _.df(function o(a, b) {
	if (D(b)) {
		return o[a] && ( o[a][b] || oOo(a, b))
	}
}, ooo)
oOo = function (a, b) {
	if (U(b)) {
		return _I(
				lC(V(oO(a))))
	}
	if (oOo(a)[
					lC(b)]) {
		return b
	}
}
$r = function (a, b) {
	a = a || 'c'; //cannot be 'color' ?? only abr??
	var values = _.values(oO(a))
	return Oo(a, b) || values[_.random(_.size(values) - 1)]
}
Yano.random = Yano.rand = $r = function (a, b) {
	a = a || 'c'; //cannot be 'color' ?? only abr??
	var values = _.values(oO(a))
	return Oo(a, b) || values[_.random(_.size(values) - 1)]
}
oC = function (c) {
	return oO('c', c)
}
oK = function (a) {
	return oO('k', a)
}
oT = function (a) {
	return oO('t', a)
}
oE = function (a) {
	return oO('e', a)
}
oI = function (a) {
	return oO('i', a)
}
oS = function (a) {
	return oO('s', a)
}
$o = function o(a, b, c) {
	return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
}
oQ = function (f, m) {
	$(function () {
		Q(m || mf, f)
	})
}
$.Ol = $.outline = function OL() {
	var g = G(arguments), o, ol
	o = g.N_ ? {w: g.f} :
			Oo('c', o) ? {c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
	/*
	 if(S(g.f)){
	 o= g.f.split(' ')
	 ol= _.j([
	 $r('c',o[0]),  oO('ow',o[1]||5) +'px',
	 oO('os',o[2]||'-') ])
	 $l(ol)
	 return ol}
	 ol=  _.j([
	 $r('c',o.c),
	 N(o.w)? o.w+'px'$r('ow',o.w),
	 $r('os',o.s)
	 ])*/
	//$l( ol )
	return ol
}
$.Fo = $.font = $f = function (a, b) {
	var g = G(arguments)
	if (O(a)) {
		return ss(
				oB(b), {fz: a || 50}
		)
	}
	a = N(a) ? _S(a) : U(a) ? '' : a;
	var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
	_.e(
			a.split(' '), function (p) {
				if (M(p[0])) {
					p = p.split('/')
					Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
				}
				F = Oo('ff', p) || F
				W = Oo('fw', p) || W
				S = Oo('fs', p) || S
			}
	)
	return [W, S, Z, F].join(' ')
}