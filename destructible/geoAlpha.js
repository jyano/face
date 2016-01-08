w.pD = w.polDyn = function (x, y, pD, wV) {
	var w = this
	var b = w.D(x, y)
	pD.ePol(function wPol(pS, n) {
		var vs = pS.wV(wV).vs()
		_.e(b.pol(pS.iH() ? vs.reverse() : vs), function (f) {
			if (pS.iH()) {
				f.C('o').al(.8)
				//f.SetSensor(true)
			}
			else {
				f.C('w').al(.4)
			}
		})
	})
	return b
}
 
w.pCS = function () {
	return this.pC.apply(this, arguments).stat().al(.3)
}
b2d.overlapping = b2d.ol = function (b1, b2) {
	//alert('b2d.ol overlapping')
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
}
//b2d.hV = b2d.hasVerts = gpc.hV
// }
alpha = function () {
	b2d.recVerts = b2d.recPoints = b2d.recPts = b2d.recV = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
	}
	f.polyDotWorVerts = f.dots = function () {
		var f = this;
		b2d.pD = b2d.polyDot = function (vs) {
			var t = 0
			vs = A(vs) ? vs : vs.wV
			w.dot('g', V(_.f(vs)))
			_.e(vs,
					function (v) {
						$.in(t, function () {
							w.dot(V(v))
						}, t)
						t += .1
					}
			)
			w.dot('r', V(_.l(vs)))
		}
		b2d.polyDot(f.wV())
		return f
	}
	f.area = f.A = function () {
		return M.p(this).getArea()
	}
}
/*
 source:

 b.pD = function () {
 var b = this, f = b.f(), g = G(arguments), pD = $pD()
 if (!f) { return pD  }
 // if the body has no freqkin fixts.. 
 // if its an infant body , massless? fixtureless
 pD = M.p(f)
 _.eR(b.fs(), function (f) {
 pD = pD.U(f)
 })
 return pD
 }

 */