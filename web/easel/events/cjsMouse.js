st.m = function (ob) {
	var st = this
	if (U(ob)) {
		//return $Pt(this.mX(), this.mY())
		return $Pt(st.mouseX, st.mouseY)
	}
	if (O(ob)) {
		if (ob.d) {
			st.MD(ob.d)
		}
		if (ob.u) {
			st.MU(ob.u)
		}
		if (ob.m) {
			st.MM(ob.m)
		}
	}
	return st
}
st.mX = st.mx = function () {
	return this.m().x
}
st.mY = st.my = function () {
	return this.m().y
}
ct.moCh = ct.muCh = ct.mouCh = function () {
	var ct = this, g = G(arguments)
	if (g.u) {
		return ct.mouseChildren
	}
	ct.mouseChildren = g.f ? true : false
	return ct
}
st.eMO = st.mO = function (ms) {
	var st = this, g = G(arguments)
	if (U(g[0]) || g[0]) {
		st.enableMouseOver(N(g[0]) ? g[0] : true)
	}
	else {
		st.enableMouseOver(g.f ? true : false)
	}
	return st
}
st.mMO = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseMoveOutside
	}
	st.mouseMoveOutside = g.f ? true : false
	return st
}
st.mIB = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseInBounds
	}
	st.mouseInBounds = g.f ? true : false
	return st
}
ct.gOUPs = function () {
	return this.getObjectsUnderPoint.apply(this, arguments)
}
ct.gOUP = function () {
	return this.getObjectUnderPoint.apply(this, arguments)
}
st.MD = function (fn) {
	return this.on('stagemousedown', fn)
}
st.MM = function (fn) {
	return this.on('stagemousemove', fn)
}
st.MU = function (fn) {
	return this.on('stagemouseup', fn)
}
 
 
dO.dg = dO.drag = dO.SL = function () {

	cjs.drag(this);return this}

cjs.drag = cjs.SL = LS = cjs.bindSlide = SL = function () {
	var g = G(arguments)
	var b = g.f
	var b2 = g.s || b
	return b.on('mousedown', function (e) {
		var bx = b2.x - e.rawX
		var by = b2.y - e.rawY
		b.on('pressmove', function (e) {
			if (!g.p) {
				b2.x = bx + e.rawX
			}
			if (!g.n) {
				b2.y = by + e.rawY
			}
		})
	})
}
 