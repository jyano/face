w.bdAt = w.bdAtPt = w.atPt = w.getBodyAtPoint = function (x, y) {
	var w = this, g = G(arguments), o
	var selectedBody = null
	w.QueryAABB(queryFunc,
			AB(x - .001, y - .001, x + .001, y + .001))
	return selectedBody ? selectedBody : false
	function queryFunc(f) {
		if (f.B().isDyn() && f.testPoint(mX, mY)) {
			// f.B().gT() !=sB && f.gSh().tP(f.B().gTf(), bV(mX,mY))
			selectedBody = f.B()
			return false
		}
		return true
	}
}
w.e = w.eB = w.each = function () {
	var w = this, g = G(arguments), o
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	var b = w.bd()
	while (b) {
		if (b.of(o.k)) {
			o.fn(b)
		}
		b = b.N()
	}
	return w
}//work on
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
} // b.eaF = 
$L('crBod', 'moveAll', 'each')
w.Q = w.qAB = function (a, b) {
	$l('w.Q =  w.qAB = ')
	var w = this
	return w.QA(a, b)
}//= w.q
w.qPoint = w.queryPoint = function (fn, x, y) {
	$l('w.qPoint = w.queryPoint = ')
	return this.QP(fn, V(x, y, '-'))
}
function each() {
	w.e$ = w.b$ = w.eachClick = w.bodyClick = function (fn) {
		var w = this
		w.eB(function (b) {
			b.$(fn)
		})
		return w
	}
	w.eD = w.eDB = w.eDyn = function (fn) {
		return this.eB(function (b) {
			if (b.iD()) {
				fn(b)
			}
		})
	}
}
b.GWC = function () {
	return this.GetWorldCenter()
}
f.area = function () {
	return Math.poly(this.V()).getArea()
}
f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
	var f = this, b = f.body(), w = b.wor(),
			g = G(arguments), v = V(g[0], g[1]),
			res = f.H().testPoint(b.transform(), v.div())
	if (g.p) {
		b.wor().dot(v)
	}
	return res
}//is a point within the fixture // very accurate
f.cent = f.center = function () {
	var bounds = this.GetAABB()
	return Math.lineCenter(bounds.lowerBound, bounds.upperBound).mult()
}//center point of its BOUNDING BOX
