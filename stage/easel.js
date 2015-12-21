cjs = createjs
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype
cjs.ED = cjs.EventDispatcher
cjs.H = cjs.Sh = cjs.Shape
cjs.LQ = cjs.LoadQueue
cjs.SS = cjs.SpriteSheet
cjs.MC = cjs.MovieClip
cjs.Sp = cjs.Sprite
cjs.SSB = cjs.SpriteSheetBuilder
cjs.Tl = cjs.Timeline
$pt.ct = cjs.Container.prototype
$pt.dO = $pt.iO = $pt.ob = $pt.i = cjs.DisplayObject.prototype
$pt.eD = cjs.ED.prototype
$pt.gx = cjs.Gx.prototype
$pt.h = cjs.Sh.prototype
$pt.st = s = cjs.St.prototype
$pt.t = cjs.T.prototype
$pt.ld = $pt.q = cjs.LQ.prototype
// stage anim ///
$pt.ss = $pt.sS = cjs.SS.prototype
$pt.sp = s = cjs.Sp.prototype
$pt.ssB = $pt.sSB = cjs.SSB.prototype
$pt.tw = cjs.Tw.prototype
$pt.mc = cjs.MC.prototype
$pt.tl = cjs.Tl.prototype
h = cjs.Shape.prototype
$Sh = function (gx) {
	return new cjs.Shape(gx)
}
cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
	if (cjs.iH(x)) {
		return $Sh(x.graphics)
	}
	var h = $Sh()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}
$H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	return h
}