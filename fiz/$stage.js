 
	b._BOX_ = function (wd, ht, x, y) {
		var b = this
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
		var r = f.sprite = $r2Gx(wd, ht, x, y)
				.XY(b.X(), b.Y()).al(.3).a2(w.st)
		$t(function () {
			r.rt(b.rt()).XY(b.X(), b.Y())
		})
		return f
	}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
	b.POLY = function (c, arr) {
		var b = this, w = b.W(), g = G(arguments), o
		o = S(g.f) ? {c: g.f, arr: g.s} : {arr: g.f}
		o.c = o.c || 'y'
		var f = b.f($aF(o.arr))
		b.bS2(
				w.st.poly(o.arr, o.c, o.c))
		return f
	}//w.CONVEX = b.vex = b.conv = b.vex =
//specific to talkjs
 