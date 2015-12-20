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
b2d.world = function (g, sleep) {     //b2d.wor =  W ???
	g = U(g) ? V(0, 10) : N(g) ? V(0, g) : g
	s = U(sleep) ? true : sleep
	var w = new b2d.World(g, sleep)
	w.SCALE = 1
	return w
}
w.dD = w.dbD = w.bug = function () {
	var dbD = $dD.apply($dD, arguments)
	// this.scale = dd.scale()
	return this.SDD(dbD)
}
w.sDD = w.db = w.debug = function (d) {
	var w = this;
	return U(d) ? w.ggAuCl() :
			d === w ? w.auCl(0) :
					d === false ? w.auCl(1) :
							w.SDD(d)
//p.debugDraw  =p.dD= p.sDD=
}
w.dd = function (o) {
	var w = this
	if (o.clear !== false) {
		w.debug(b2d.debugDraw(
				w.context, 30).flags(shB || jB).alpha(.6).line(3000))
	} // w.bug(w.ctx, 30, '*', .6 )
	return w
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
	this.SDD(data)
	return this
}
_world = function (x, y, doSleep) {
//make world
// can set stage width/height and world width/height
//W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U') 
	var sleep = U(doSleep) ? true : doSleep ? true : false
	var grav = V(x * 30, y * 30)
	return $_Wo(grav, sleep)
}