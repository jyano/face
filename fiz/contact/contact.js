// *** function preSolve(){
w.preCl = function () {
	var w = this, g = G(arguments)
	w.pre(function (cx) {
		cx.w.apply(cx, g)
	})
	return w
}
//	w.tanFuture = cx.t = function () {}//what about tangent?
//presolve
//do any of these get used? i think filterData does
b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}
b2d.cxFilt = b2d.filter = b2d.f = function () {//used?
	var f = new BXD.b2ContactFilter
	f.rC = f.RayCollide
	f.sC = f.ShouldCollide
	return f
}
b2d.filt = b2d.filterData = function () {
	var d = new b2d.Dynamics.b2FilterData()
	d.gI = function (a) {
		if (U(a)) {
			return d.groupIndex
		}
		d.groupIndex = a;
		return d
	}
	d.cat = function (a) {
		if (U(a)) {
			return d.categoryBits
		}
		d.categoryBits = a;
		return d
	}
	d.mask = function (a) {
		if (U(a)) {
			return d.maskBits
		}
		d.maskBits = a;
		return d
	}
	return d
}
b2d.superManifold = function (m) {//used????
	m.lPN = m.m_localPlaneNormal
	m.lP = m.m_localPoint
	m.pC = m.m_pointCount
	m.p = m.m_points
	m.t = m.m_type
	return m
}
b2d.man = b2d.manifold = b2d.worldManifold = function () {
	return new b2d.Collision.b2WorldManifold()
}
//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
//////////
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}