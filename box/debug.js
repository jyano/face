 
dd.cx = dd.spr = dd.i = dd.sprite = function (spr) {
	var dd = this  //it is looking for  a context?
	if (U(spr)) {
		return dd.GetSprite()
	}
	dd.SetSprite(spr)
	return dd
}
dd.sc = dd.dS = dd.scale = dd.drawScale = function (sc) {
	var dd = this
	if (U(sc)) {
		return dd.GetDrawScale()
	}
	dd.SetDrawScale(sc)
	return dd
}
dd.fA = dd.alpha = dd.fillAlpha = function (a) {
	var dd = this
	if (U(a)) {
		return dd.GetFillAlpha()
	}
	dd.SetFillAlpha(a)
	return dd
}
dd.lT = dd.line = dd.lineThickness = function (lt) {
	var dd = this
	if (U(lt)) {
		return dd.GetLineThickness()
	}
	dd.SetLineThickness(lt);
	return dd
}
dd.fl = dd.flags = function (flags) {
	var dd = this, DD = b2DebugDraw
	if (U(flags)) {
		return dd.GetFlags()
	}
	if (flags == '*') {
		flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
	}
	dd.SetFlags(flags)
	return dd
}
dd.cx = dd.spr = dd.i = dd.sprite = function (spr) {
	var dd = this  //it is looking for  a context?
	if (U(spr)) {
		return dd.GetSprite()
	}
	dd.SetSprite(spr)
	return dd
}
dd.sc = dd.dS = dd.scale = dd.drawScale = function (sc) {
	var dd = this
	if (U(sc)) {
		return dd.GetDrawScale()
	}
	dd.SetDrawScale(sc)
	return dd
}
dd.fA = dd.alpha = dd.fillAlpha = function (a) {
	var dd = this
	if (U(a)) {
		return dd.GetFillAlpha()
	}
	dd.SetFillAlpha(a)
	return dd
}
dd.lT = dd.line = dd.lineThickness = function (lt) {
	var dd = this
	if (U(lt)) {
		return dd.GetLineThickness()
	}
	dd.SetLineThickness(lt);
	return dd
}
dd.fl = dd.flags = function (flags) {
	var dd = this, DD = b2DebugDraw
	if (U(flags)) {
		return dd.GetFlags()
	}
	if (flags == '*') {
		flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
	}
	dd.SetFlags(flags)
	return dd
}
dd.sprite = dd.spr = function (spr) {  //it is looking for  a context?
	if (U(spr)) {
		return this.GetSprite()
	}
	this.SetSprite(spr)
	return this
}
dd.scale = dd.drawScale = p.dS = function (scale) {
	if (U(scale)) {
		return this.GetDrawScale()
	}
	this.SetDrawScale(scale)
	return this
}
dd.alpha = dd.fillAlpha = dd.fA = function (a) {
	if (U(a)) {
		return this.GetFillAlpha()
	}
	this.SetFillAlpha(a)
	return this
}
dd.line = dd.lineThickness = dd.lT = function (lt) {
	if (U(lt)) {
		return this.GetLineThickness()
	}
	this.SetLineThickness(lt);
	return this
}
dd.flags = p.fl = function (flags) {
	var DD = b2DebugDraw
	if (U(flags)) {
		return this.GetFlags()
	}
	if (flags == '*') {
		flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
	}
	this.SetFlags(flags);
	return this
}
dD.sprite = dD.sp = dD.spr = function (sp) {
	//it is looking for canvas-context
	if (U(sp)) {
		return this.GetSprite()
	}
	this.SetSprite(sp)
	return this
}
dD.scale = dD.sc = dD.drawScale = dD.dS = function (sc) {
	var dD = this
	if (U(sc)) {
		return this.GetDrawScale()
	}
	this.SetDrawScale(sc)
	return this
}
dD.line = dD.l = dD.f = dD.fAl = dD.lT = function (lt) {
	if (U(lt)) {
		return this.GetLineThickness()
	}
	this.SetLineThickness(lt);
	return this
} //Get/SetXFormScale(xformScale:N)   scale used for drawing XForms
dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
}//Get/SetAlpha(al:N)    used for lines
dD.fAl = dD.fillAlpha = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetFillAlpha()
	}
	this.SetFillAlpha(al)
	return this
}
dD.flags = dD.F = dD.fl = function (fl) {
	var dD = this
	if (U(fl)) {
		return dD.GetFlags()
	}
	dD.SetFlags(fl)
	return dD
}
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
$dD = function (sp, sc) { //=DebugDraw=dbD
	var dD = new b2d.DD()
	dD.sp(sp);
	dD.sc(sc)
	return dD
} // = b2d.debugDraw
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
	function alt(){
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
w = b2World.prototype
w.sDD = function (dbD) {
	this.SetDebugDraw(dbD);
	return this
}
w.dDD = function () {
	this.DrawDebugData()
	return this
}
w.dbD = w.bug = function () {
	var w = this, g = G(arguments)
	// this.scale = dd.scale()
	w.sDD($dD.apply(null, g))
	return w
	function alt() {
		w.bug = w.debugDraw = function () {
			dd = b2d.debugDraw.apply(null, arguments)
			//this.scale = dd.scale()
			this.SetDebugDraw(dd)
			return this
		}  // *	
	}
}
w.go = w.step = function (time, a, b) {
	w = this, g = G(arguments)
	w.Step(time, N(a, 8), N(b, 3))
	if (!g.n) {
		w.dDD()
	}
	return w
}
w.step = w.go = function (time, a, b) {
	w = this, g = G(arguments)
	w.Step(time, N(a, 8), N(b, 3))
	if (g.p) {
		w.dDD()
	}
	return w
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
w.DDD = w.dr = w.draw = function () {
	this.DrawDebugData();
	return this
}
w.CF = w.clr = w.cF = w.ClF = w.CFo = function () {
	this.ClearForces();
	return this
}
w.St = w.step = function () {
	this.Step.apply(this, arguments);
	return this
}
w.dd = function (o) {
	var w = this
	if (o.clear !== false) {
		w.debug(
				b2d.debugDraw(
						w.context, 30).flags(shB || jB).alpha(.6).line(3000))
	} // w.bug(w.ctx, 30, '*', .6 )
	return w
}
w.draw = function (num) {
	if (N(num)) {
		this.step(num)
	}
	this.DrawDebugData()
	this.clearForces()
	return this
}
w.db = w.debug = function (data) {
	
	//p.debugDraw  =p.dD= p.sDD=
	if (U(data)) {
		this.s.autoClear = this.s.autoClear ? false : true;
		return this
	}
	if (data === true) {
		this.s.autoClear = false;
		return this
	}
	if (data === false) {
		this.s.autoClear = true;
		return this
	}
	this.SetDebugDraw(data)
	return this
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
w.sDD = w.db = w.debug = function (d) {
	var w = this;
	return U(d) ? w.ggAuCl() :
			d === w ? w.auCl(0) :
					d === false ? w.auCl(1) :
							w.SDD(d)
} //p.debugDraw  =p.dD= p.sDD=
w.dD = function () {
	return this.sDD($dD.apply($dD, arguments))
}
w.step = function (time, a, b) {
	a = N(a) ? a : 8
	b = N(b) ? b : 3
	this.Step(time, a, b)
	return this
}
w.clear = p.clearForces = p.cF = function () {
	this.ClearForces();
	return this
}
w.u = function (o) {
	var w = this
	setInterval(function () {
		w.draw(1 / 60)
		if (F(o.cb)) {
			o.cb()
		}
		w.s.update()
	}, 1000 / 60)
	return w
}
b2Color = b2d.Cm.b2Color