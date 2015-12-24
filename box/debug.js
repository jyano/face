$dD = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
$dD.shape = $dD.h = b2d.DD.e_shapeBit //1
$dD.jt = $dD.j = b2d.DD.e_jointBit //2
$dD.pair = $dD.p = b2d.DD.e_pairBit //8
$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20
$dD = b2d.debugDraw = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
	function alt() {
		b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
			var dd = new b2d.DebugDraw()
			//can pass in either canvas or context
			if ($.isCan(sprite)) {
				sprite = sprite.ctx()
			}
			if (sprite) {
				dd.sprite(sprite)
			}
			if (scale) {
				dd.scale(scale)
			}
			if (flags) {
				dd.flags(flags)
			}
			dd.alpha(N(alpha) ? alpha : 0.5)
			// dd.line( N(line)? line :1 )
			// dd.SetLineThickness(1)
			return dd
		}
	}
}
w.bug = function () {
	var w = this
	w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
			.SF(b2DebugDraw.e_shapeBit))
	return w
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
$_DD = function () {
	return new b2d.DD
}
bx.DD = b2DebugDraw = bx.D.b2DebugDraw
dD.ctx = function (ctx) {
	var dD = this  //it is looking for  a context?
	if (U(ctx)) {
		return dD.GetSprite()
	}
	dD.SetSprite(ctx)
	return dD
	//dD.cx = dD.spr = dD.i = dD.sprite = 
}
dD.SDS = function (sc) {
	this.SetDrawScale(sc)
	return this
}
dD.sc = function (sc) {
	var dD = this
	if (U(sc)) {
		return dD.GetDrawScale()
	}
	dD.SDS(sc)
	return dD
	// = dD.dS = dD.scale = dD.drawScale
}
dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
//Get/SetAlpha(al:N)    used for lines
}
dD.fA = dD.fAl = function (a) {
	var dD = this
	if (U(a)) {
		return dD.GetFillAlpha()
	}
	dD.SetFillAlpha(a)
	return dD
	//= dD.alpha = dD.fillAlpha
}
dD.lT = function (lt) {
	var dD = this
	if (U(lt)) {
		return dD.GetLineThickness()
	}
	dD.SetLineThickness(lt);
	return dD
	// = dD.line
}
dD.fl = function (fl) {
	var dD = this
	var DD = b2DebugDraw
	if (U(fl)) {
		return dD.GetFlags()
	}
	if (flags == '*') {
		flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
	}
	dD.SetFlags(flags);
	return dD
	//dD.flags = dD.F =
}
dD.SF = function () {
	this.SetFlags.apply(this, arguments)
	return this
}
w.DDD = function () {
	this.DrawDebugData();
	return this
}
w.setDbD = function (id) {
	id = id || 'cv'
	var dbD = $_DD().ctx($("#" + id)[0].getContext("2d")).SDS(20)
	dbD.SetFillAlpha(0.5)
	dbD.SetLineThickness(1)
	dbD.SetFlags(b2DebugDraw.e_shapeBit)
	return this.SDD(dbD)
}
$dD = function (sp, sc) {
// = b2d.debugDraw
	//=DebugDraw=dbD
	var dD = new b2d.DD()
	if (sp) {
		dD.sp(sp);
	}
	if (N(sc)) {
		dD.sc(sc)
	}
	return dD
}
dD.cv = function (cv) {
	cv = cv || $.c()
	return this.ctx($(cv)[0].getContext("2d"))
}