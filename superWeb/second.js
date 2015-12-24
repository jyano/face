CSS = {
	fl:'flex',
	$: 'flex',
	dir: 'flex-direction',
	wr: 'flex-wrap',
	jfC: 'justify-content',
	alI: 'align-items',
	alC: 'align-content',
	ord: 'order',
	gr: 'flex-grow',
	shr: 'flex-shrink',
	bas: 'flex-basis',
	alS: 'align-self',
	//
	//flow: 'flex-flow',
	f: 'font',
	ff: 'font-family',
	fc: '@font-face', // for font files
	fS: 'font-size', fZ: 'font-size', fz: 'font-size',//xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
	fs: 'font-style', //normal,oblique,italic
	fv: 'font-variant', //normal,smallcaps
	fw: 'font-weight',//normal,bold,100-900
	fh: 'font-stretch',
	lH: 'line-height',  //minimum distance between the baselines of adjacent lines of text
	tA: 'text-align', ta: 'text-align',         //left, right, center and justify
	td: 'text-decoration',     // underline, overline, line-through, blink
	ti: 'text-indent',    // indent for the first line of a block level element
	ttf: 'text-transform',   //none,uppercase,lowercase,capitalize
	tl: 'text-outline',
	to: 'text-overflow',
	tsh: 'text-shadow',
	lts: 'letter-spacing',
	ws: 'word-spacing',
	va: 'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
	wsp: 'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
	wb: 'word-break', // normal|break-all|keep-all
	ww: 'word-wrap',  //normal,break-word
	of: 'overflow',
	ofx: "overflow-x",
	ofy: "overflow-y", //visible | hidden | scroll | auto | inherit
	bg: 'background',
	C: 'background-color',
	bi: "background-image",
	bga: "background-attachment",
	bp: "background-position",
	bgr: "background-repeat",
	bgl: "background-clip",
	bgo: "background-origin",
	bgz: "background-size",
	d: "display",
	dp: "display",
	ds: "display",
	bor: "border",
	B: "border",
	dc: "border-color",
	//ds:"border-style",
	dw: "border-width",
	co: 'border-collapse',
	sp: 'border-spacing',
	bT: "border-top",
	dtc: "border-top-color",
	dts: "border-top-style",
	dtw: "border-top-width",
	bt: "border-top-width",
	bB: "border-bottom",
	dbc: "border-bottom-color",
	dbs: "border-bottom-style",
	bb: "border-bottom-width",
	dbw: "border-bottom-width",
	dr: "border-right",
	drc: "border-right-color",
	drs: "border-right-style",
	drw: "border-right-width",
	br: "border-right-width",
	bRd: 'border-radius',
	borR: 'border-radius',
	al: 'opacity', sd: "box-shadow", vs: 'visibility', bgI: "background-image",
	rd: 'border-radius',
	bL: "border-left",
	dlc: "border-left-color",
	dls: "border-left-style",
	bLW: "border-left-width",
	di: "border-image",
	dis: "border-image-source",
	dio: "border-image-outset",
	bir: "border-image-repeat",
	disl: "border-image-slice",
	diw: "border-image-width",
	g: "padding",
	pad: "padding",
	P: 'padding',
	gt: "padding-top",
	//gr: "padding-right",
	gb: "padding-bottom",
	gl: "padding-left",
	M: "margin", mar: "margin", m: "margin",
	mT: "margin-top",
	mR: "margin-right",
	mB: "margin-bottom",
	mL: 'margin-left',
	o: "outline",
	oc: "outline-color",
	os: "outline-style",
	ow: 'outline-width',
	oo: 'outline-offset',
	li: "list-style-image",
	lp: "list-style-position",
	ct: 'content',      //pseudoelements
	a: 'opacity',
	xs: "box-shadow", //s.s('xs','10px 10px 5px #888888').res
	h: 'height',
	mh: 'max-height',
	h_: 'min-height', _h: 'max-height',
	w_: 'min-width', _w: 'max-width',
	nh: 'min-height',
	w: 'width',
	Mw: 'max-width',
	mw: 'min-width',
	r: 'right',
	t: 'top',
	p: 'position',
	v: 'visibility',
	z: 'z-index',
	crp: "crop",
	ps: "perspective",
	po: "perspective-origin",
	tr: "transition",
	ty: "transition-property",
	tu: "transition-duration",
	tt: "transition-timing-function",
	te: "transition-delay",
	tf: "transform",
	tfo: "transform-origin",
	ts: "transform-style",
	bv: "backface-visibility",
	ft: 'fit',//replaced elements
	s: "size",
	b: "bottom",
	cl: "clear",
	clp: 'clip',
	u: 'cursor',
	//ds: 'display',
	//fl: 'float',
	l: 'left',
	cs: 'caption-side', //table caption
	ec: 'empty-cells',  //table
	ly: 'table-layout',
	c: 'color',
	rs: 'resize'  //resizable by user
}

DISPLAY = {
	i: "inline", b: "block",
	 ib: "inline-block", t: "table", 
	 n: "none", '#': "inherit", it: "inline-table",
	l: "list-item", c: "table-column", r: "table-row",
	 cg: "table-column-group", rg: "table-row-group",
	p: "table-caption",
	h: "table-header-group", f: "table-footer-group", e: "table-cell",
	$: 'flex', 
	fl:'flex'
}

ooo = {
	c: COLOR,
	s: CSS,// a: ATTRIBUTE,o: PROPERTY,
	os: OLSTYLE, ow: OLWIDTH,
	of: OVERFLOW,
	u: CURSOR,
	w: OLWIDTH, p: POSITION,
	dp: DISPLAY,
	ff: FONTFAMILY, fs: FONTSTYLE,
	fh: FONTSTRETCH, fw: FONTWIDTH, fv: FONTVARIANT,
	tt: TEXTTRANSFORM, td: TEXTDECORATION,
	tA: TEXTALIGNMENT, tb: TEXTBASELINE
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
 