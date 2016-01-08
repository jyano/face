 
CSS = {
	d: "display", dp: "display", ds: "display", cl: "clear",
	ps: 'position', cu: 'cursor',
	al: 'opacity', vs: 'visibility',
	ct: 'content', //pseudoelements
	rs: 'resize' //resizable by user
}

_.x(CSS, {
	fl: 'flex', $: 'flex',
	dir: 'flex-direction',
	wr: 'flex-wrap',
	jC: 'justify-content',
	jfC: 'justify-content',
	aI: 'align-items', alI: 'align-items',
	aC: 'align-content', alC: 'align-content',
	ord: 'order',
	gr: 'flex-grow',
	shr: 'flex-shrink',
	bas: 'flex-basis',
	alS: 'align-self',
	flow: 'flex-flow',
})


_.x(CSS, {z: 'z-index', b: "bottom", l: 'left', r: 'right', t: 'top'})
_.x(CSS, {
	cs: 'caption-side',
	ec: 'empty-cells',
	ly: 'table-layout',
	li: "list-style-image",
	lp: "list-style-position",
})// lists
_.x(CSS, {h: 'height', h_: 'min-height', _h: 'max-height', w: 'width', w_: 'min-width', _w: 'max-width'})
_.x(CSS, {ov: 'overflow', ovX: "overflow-x", ovY: "overflow-y"}) //visible | hidden | scroll | auto | inherit
_.x(CSS, {sd: "box-shadow", xs: "box-shadow"})
_.x(CSS, {//transition/transform
	tr: "transition", ty: "transition-property",
	tu: "transition-duration", tt: "transition-timing-function",
	te: "transition-delay",
	tf: "transform",
	tfo: "transform-origin",
	ts: "transform-style",
	bv: "backface-visibility",
	ps: "perspective",
	po: "perspective-origin"
})
_.x(CSS, {//words/spacing
	lH: 'line-height',  //minimum distance between the baselines of adjacent lines of text
	lSp: 'letter-spacing',
	wSp: 'word-spacing',
	vA: 'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
	wsSp: 'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
	wBr: 'word-break', // normal|break-all|keep-all
	wWr: 'word-wrap',  //normal,break-word
	f: 'font',
	fF: 'font-family',
	$fF: '@font-face', // for font files
	fS: 'font-size',  //xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
	sty: 'font-style', //normal,oblique,italic
	fV: 'font-variant', //normal,smallcaps
	fW: 'font-weight',//normal,bold,100-900
	str: 'font-stretch',
	c: 'color',
	tA: 'text-align',        //left, right, center and justify
	tD: 'text-decoration',     // underline, overline, line-through, blink
	tI: 'text-indent',    // indent for the first line of a block level element
	tTf: 'text-transform',   //none,uppercase,lowercase,capitalize
	tOl: 'text-outline',
	tOv: 'text-overflow',
	tSh: 'text-shadow'
})
_.x(CSS, {//background/image//borderImage
	bg: 'background',
	C: 'background-color',
	bgI: "background-image",
	bgA: "background-attachment",
	bgP: "background-position",
	bgR: "background-repeat",
	bgCl: "background-clip",
	bgOr: "background-origin",
	bgS: "background-size",
	clp: 'clip', crp: "crop", ft: 'fit', //replaced elements
	di: "border-image",
	dis: "border-image-source",
	dio: "border-image-outset",
	bir: "border-image-repeat",
	disl: "border-image-slice",
	diw: "border-image-width"
})
_.x(CSS, {//margin
	M: "margin", mar: "margin", m: "margin", mT: "margin-top", mR: "margin-right",
	mB: "margin-bottom", mL: 'margin-left',
	//outline
	o: "outline", oc: "outline-color", os: "outline-style",
	ow: 'outline-width', oo: 'outline-offset',
	//border
	rd: 'border-radius',
	bL: "border-left",
	dlc: "border-left-color",
	dls: "border-left-style",
	bLW: "border-left-width", bor: "border", B: "border", dc: "border-color",
	//ds:"border-style",
	borW: "border-width", co: 'border-collapse',
	sp: 'border-spacing',
	borT: "border-top", dtc: "border-top-color",
	borTS: "border-top-style", bTW: "border-top-width",
	bTW: "border-top-width",
	borB: "border-bottom", bBC: "border-bottom-color",
	bBS: "border-bottom-style", borBW: "border-bottom-width",
	bBW: "border-bottom-width", borR: "border-right",
	bRC: "border-right-color", borRS: "border-right-style",
	bRW: "border-right-width", borRW: "border-right-width",
	bRd: 'border-radius', borR: 'border-radius',
	//padding
	g: "padding", pad: "padding", P: 'padding',
	gt: "padding-top",
	//gr: "padding-right",
	gb: "padding-bottom",
	gl: "padding-left"
})
 