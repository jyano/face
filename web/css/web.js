FLOAT = {r: 'right', l: 'left', n: 'none', '#': 'inherit'}
DISPLAY = {
	i: "inline", b: "block", ib: "inline-block", t: "table",
	n: "none", '#': "inherit", it: "inline-table", l: "list-item", c: "table-column", r: "table-row",
	cg: "table-column-group", rg: "table-row-group", p: "table-caption",
	h: "table-header-group", f: "table-footer-group", e: "table-cell", $: 'flex', fl: 'flex'
}
OLSTYLE = {
	n: 'none', h: 'hidden', '.': 'dotted', '-': 'dashed',
	s: 'solid', d: 'double', g: 'groove',
	r: 'ridge', i: 'inset',
	o: 'outset', "#": 'inherit'
}
OLWIDTH = {'|': 'thin', '||': 'medium', '|||': 'thick', 's': 'thin', 'm': 'medium', 'b': 'thick'}
POSITION = {s: 'static', a: 'absolute', r: 'relative', f: 'fixed', '#': 'inherit'}
OVERFLOW = {v: 'visible', h: 'hidden', s: 'scroll', a: 'auto', '#': 'inherit'}
CURSOR = {
	d: 'default', p: 'pointer', m: 'move', w: 'wait', h: 'help', t: 'text',
	N: 'n-resize', E: 'e-resize', S: 's-resize', W: 'w-resize',
	NE: 'ne-resize', NW: 'nw-resize', SE: 'se-resize', SW: 'sw-resize'
}

ooo = {
	c: COLOR,
	s: CSS,// a: ATTRIBUTE,o: PROPERTY,
	olS: OLSTYLE, 
	olW: OLWIDTH,
	ov: OVERFLOW,
	cu: CURSOR,
	w: OLWIDTH, 
	ps: POSITION,
	dp: DISPLAY,
	fF: FONTFAMILY, 
	sty: FONTSTYLE,
	str: FONTSTRETCH,
	fW: FONTWIDTH, 
	fV: FONTVARIANT,
	tTf: TEXTTRANSFORM, 
	tD: TEXTDECORATION,
	tA: TEXTALIGNMENT,
	tBl: TEXTBASELINE
}


ooo.R = {
	C: 'c', f: 'c', s: 'c', dc: 'c',
	
	t: 'i', //type->input
	
	borS: 'os'
}

_oO = function (a, b) {
	return oO[a] && oO[a][b] ? oO[a][b] : b
}
oO = function (a, b, c) {
	var val = U(a) ? _.k(ooo)
			: '*' == b ? $r(a)
			: D(c) ? oO(oO(c, a), b)
			: U(b) ? _.df(function (x, y) {
		return oO(a, x, y)
	}, ooo[a] || {})
			: ooo[a] && ooo[a][b] ? ooo[a][b]
			: b
	return val
}

Oo = function (a, b) {
	return ooo[a] && ooo[a][b]
}
$r = function (a, b) {
	var vals = _.v(oO(a = a || 'c'))
	return Oo(a, b) || vals[_.r(_.s(vals) - 1)]
}
oO.c = function (c) {
	return oO('c', c)
}
oO.k =  function (a) {
	return oO('k', a)
}
oO.t =   function (a) {
	return oO('t', a)
}
oO.e =   function (a) {
	return oO('e', a)
}
oO.i =   function (a) {
	return oO('i', a)
}
oO.s =  function (a) {
	return oO('s', a)
}
oO.q = function (f, m) {
	$(function () {
		Q(m || mf, f)
	})
}
oO.V = function (a) {
	return _.v(S(a) ? oO(a) : a)
}
oOo = function (a, b) {
	if (U(b)) {
		return _I(lC(V(oO(a))))
	}
	if (oOo(a)[lC(b)]) {
		return b
	}
}