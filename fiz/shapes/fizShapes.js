w.fDFn = function (x, y) {
	var w = this
	var b = w.D(x, y)
	b.f(
			$fD($cH(4))
	)
	return function () {
		b.fD(
				$pH().box(arguments))
	}
}
b.A = function (fD) {
	this.cF(fD);
	return this
}
fD.sAB = function (a, b, p, A) {
	var fD = this;
	alert('fD.sAB')
	var h = fD.H()
	if (!p) {
		h.SAB(a / 30, b / 30)
	}
	else {
		h.SAOB(a / 30, b / 30, p, A)
	}
	return fD
}// used?
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h;
	return fD
}
fD.SAB = function (x, y) {
	this.H().SetAsBox(x, y)
	return this
}
fD.SAOB = function (x, y, pos, ang) {
	this.SetAsOrientedBox(x, y, pos, ang)
	return this
}
f.H = function (h) {
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h //not sure if this works
	return this
}
pH.sABold = function (wd, ht, xy, ang, ang2) {
	pH.box1 = function () { // tx uses!
		var pH = this, g = G(arguments),
				o = G.boxBox(g)
		pH._box = function () {
			var pH = this
			pH.SetAsOrientedBox.apply(this, arguments)
			return pH
		}
		return pH._box(
				o.w / 60,
				o.h / 60,
				V(o.x, o.y, '-'),
				M.tR(o.rt)
		)
	}
//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
	var h = this,
			g = G(arguments),
			wd = (g[0] || 100) / 60,
			ht = (g[1] || wd) / 60,
			xy = g[2],
			ang = g[3],
			ang2 = g[4]
	toR = Math.toRadians
	h.box = h.SetAsBox
	h.oBox = h.SetAsOrientedBox
	if (U(xy)) {
		h.box(wd, ht)
	}
	else if (N(xy)) {
		h.oBox(wd, ht, V(xy, ang).div(), toR(ang2 || 0))
	}
	else {
		h.oBox(wd, ht, xy.div(), toR(ang || 0))
	}
	return this
}
/*

 SetAsOrientedBox(
 hx:Number,  hy:Number, (width and height of the box)
 center:b2Vec2 = null, (center of box)
 angle:Number = 0.0 (rot in rads)
 )

 Applying this concept, the idol function continues in the following way:
 var bW:Number=5/worldScale;
 var bH:Number=20/worldScale;
 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
 var boxAngle:Number=- Math.PI/4;


 */
f.vs = f.verts = function () {
	alert('f.vs verts boxFixt.js')
	var h = this.GetShape()
	var verts = h.m_vertices
	return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
}
f.rad = function (r) {
	var f = this, h = f.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return f
}
SHS = function () {
	W().p()
	w.S(100, 100, [[10]])
	b = w.S(300, 400)
	//rectangle fixutre -- no color
	b.rect(40, 40)
	//circle fixture -- no color
	b.f($cF(100, 100, 100))
	b = $eM.fixts().stat()
	_.in(1, function () {
		b.dyn()
	})
	/*
	 $l('circle is 0, poly is 1.. ill prove it..')
	 fs = b.fs()
	
	 _.ev(3, function () {
	
	 if (f = fs.pop()) {$l('shape type: ' + f.H().m_type)
	 f.rm()
	
	 }})
	 */
	_.in(3, function () {
		b1 = w.A($dB(300, 200))
		b1.f($cF(100).de(1).re(1))
		b1.aV(3)
		//b.cirB(40)
	})
}
FXT = MAS = function () {
	W()
	w.D(800, 400, [
		$cF(20),
		$cF(5).bits(1, 2), //cat is 1, but will only collide with 2's
		$cF(10, 100, 100, '-'),
		$cF(10, 100, -100),
		$pF(10, 300, '-'), //sets as sensor
		$pF(300, 10)
	])
	r = w.BALL(200, 200, 50, 'r').rsM()
	b = w.BALL(200, 200, 50, 'b')
	b.f().de(1)
	y = w.BALL(200, 200, 50, 'y')
	y.f().de(1)
	y.rsM()
	p = w.BALL(200, 200, 50, 'p')
	p.f().de(10000)
	p.rsM()
	function grows() {
		rad = 10
		x = 400
		y = 440
		v = {x: 0, y: 0}
		//mouse joints messed up
		w.bump(400, 300, 40)
		w.bump(290, 350, 40)
		w.bump(280, 220, 40)
		addBody()
		$t(function () {//destroyAndAddBody
			b.destroyFixture(
					b.f()
			)//b.destroyFixture(fixture)
			rad += .1
			x = b.X();
			y = b.Y();
			v = b.lV()
			addBody()
		})
		function addBody() {
			b = w.A($dB(x, y).lV(v), $cF(rad))
		}
	}
	
	_.in(2, grows)
}
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	var tf = f.B().tf()
	var pt = N(pt) ? V(pt, y) : pt
	return f.H().TP(tf, pt)
}
fD.sAOB = fD.orBox = function (a, b, pos, aa) {
	var fD = this, h = fD.shape
	h.SAOB(a / 30, b / 30, pos, aa)
	return fD
}
fD.box = fD.sAB = function (a, b, p, aa) {
	var fD = this, h = fD.shape
	p ? h.SAOB(a / 30, b / 30, p, aa) :
			h.SAB(a / 30, b / 30)
	return fD
}
pH.box_ = function () {
	var pH = this, g = G(arguments)
	var args = (g.A || _.isArguments(g.f)) ? g.f : g
	return pH.box.apply(pH, args)
}
bH.GT = function () {
	return this.GetType()
}
bH.ty = function () {
	return b2d.iH(this)
}
bH.iP = function () {
	return b2d.iP(this)
}
bH.iC = function () {
	return b2d.iC(this)
}
bH.iA = function () {
	return b2d.iA(this)
}
bH.TP = function () {
	return this.TestPoint.apply(this, arguments)
}