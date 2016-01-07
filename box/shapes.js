pH.SAB = function (wd, ht) {var pH = this
	pH.SetAsBox(wd, ht);
	return pH}
pH.SAOB = function (wd, ht, pos, ang) { 
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this}	
pH.sAOB = pH.box = function (wd, ht, pos, ang) {

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
 var pH = this, g = G(arguments), o
	//pass in pos as {x,y} ? ..
	o = O(g.t) ?
			// .. -> w,h, posOb, rt
	{w: g.f, h: g.s, pos: g.t, ang: g.fo} :
			//pass in pos as x,y ? ..
			N(g.fo) ?
				// .. ->
			{w: g.f, h: g.s, pos: V(g.t, g.fo), ang: g.fi} :
					// can leave out pos Ob (x and y)
				{w: g.f, h: g.s, ang: g.t}
	//
	o.w = N(o.w, 100) / 60
	o.h = N(o.h, 100) / 60
	//
	o.pos = (o.pos||V()).d()
	//
	o.rt = M.tR(N(o.ang, 0)  )
	//
	return pH.SAOB(o.w, o.h, o.pos, o.rt)

}
pH.sAB = function (wd, ht, rt) {
	return this.sAOB(wd, ht, V(), N(rt,0))
}

pH._SAA = function (arr) {
	var pH = this 
	arr = arr || []
	pH.SetAsArray(arr,  arr.length)
	return pH
}

pH.SAA = function () {var  g = G(arguments)
	return this._SAA.apply(this, g.A ? g.f : g)
}
pH.sAA = pH.pol = pH.ar = pH.arr = function () {
	bx.tMt = function (x, y) {
		return V(x, y).d()
	}
	var pH = this, g = G(arguments)
	 
	return pH.SAA(
			_.m(g.s ? g : g.f, bx.tMt)
	)
}
pH.set = function () {
	var pH = this, g = G(arguments)
	//this covers all cases for polygons !!!! // ******// !!!!!!!!
	N(g.f) ? pH.sAOB.apply(pH, g) :
			O(g.f) ? pH.sAA.apply(pH, g) :
					pH
}
$rH = function () {
	var pH = $pH(), g = G(arguments)
	pH.sAOB.apply(pH, g)
	return pH
}
$aH = $ar = $arr = function () {
	var g = G(arguments)
	return $pH().arr(g.s ? g : g.f)
}
_$pH = function (){return new b2d.PH()}
$pH = function (W, H, x, y, a) {
	//  OR (wd, ht, xy, ang, ang2)
	var g = G(arguments), o, pH = new b2d.PH()
	if (g.u) {return pH }
	o = O(g.t) ?
	{w: g.f, h: g.s, xy: g.t, ang: g.fo, ang2: g.fi} :
	{w: g.f, h: g.s, xy: V(g.t, g.fo), ang: g.fi, ang2: g.si}
	o.w = (o.w || 100) / 60
	o.h = (o.h || o.w) / 60
	o.xy = V(o.xy / 30, o.ang / 30)
	o.rt = M.tR(o.ang2 || 0)
	o = o || {}
	return g.OO_ ? $a(pH, 'sAA', g) :
			g.N_ ? //pH.box(g.f, g.s, g.t, g.fo, g.fi) :
					pH.SAOB(o.w, o.h, o.xy, o.rt) :
					pH
	// this is all you need for all cases (thanks to pH.set) 
	// pH.set.apply(pol, g)
}
cH.set = function () {//cH.S =
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
cH.SLP = function () {
	this.SetLocalPosition.apply(this, arguments)
	return this
}
cH.GLP = function () {
	return this.GetLocalPosition()
}
cH.XY = cH.lP = function (x, y) {
	var cH = this;
	return U(x) ? cH.GLP().m() :
			cH.SLP(V(x, y).d())
}
_$cH = function (r) {
	return new b2d.CH(A(r) ? r[0] : r)
}
$cH = function () {
	
	//r, x, y
	var g = G(arguments)
	var o = {}
	var cH = _$cH(N(g.f, 50) / 30)
	if (g.s) {
		cH.XY(g.s, g.t)
	}
	return cH
	//	if (N(x) && N(y)) {h.XY(x, y)}
	// cH.lP(g.s, g.t)
}
pH.SAV = function () {
		var pH = this
		pH.SetAsVector.apply(pH, arguments)
		return pH
	}
pH.sAV = pH.asV = function (v, sc) {
		sc = N(sc, 30)
		var pH = this //used by SepLib
		return pH.SAV(_.m(v, function (v) {
			return V(v).d(sc)
		}))
	}
bH.GT = function () {
	return this.GetType()
}
 
 