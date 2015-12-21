b.sep = function (pts, scl) {
	var b = this
	pts = gpc.iPg(pts) ? pts.pts() : pts
	_.e(O(pts[0][0]) ? pts : [pts], function (pt) {
		b2d.sep(b, pt, scl)
	})
	return b
	function docs() {
		if (!O(vs)) {
			//	alert('o.v must be object');
			return
		}
		//needs array of vs.. or one vert (which is converted here to arr) 
		//  'sep' each of the vs onto the b
	}
}
b.conc = b.sep = function (verts) {
	var g = G(arguments),
			verts = g[0],
			col,
			b = this,
			fs, n1, n2, newFixts
	if (U(verts)) {
		return
	}
	if (S(verts[0])) {
		col = verts.shift()
	}
	if (g.n) {
		b.clear()
	}
	n1 = b.num()
	b2d.sep(b, verts)
	if (S(col)) {
		n2 = b.num()
		fs = b.fixts()
		newFixts = _.first(fs, n2 - n1)
		_.each(newFixts, function (f) {
			f.C(col)
		})
	}
	return this
}
b.conc2 = function (col) {
	var g = G(arguments), col = g[0], verts,
			b = this, fs, n1, n2, newFixts
	if (U(col)) {
		return
	}
	verts = S(col) ? _.rest(g) : g
	if (g.n) {
		b.clear()
	}
	n1 = b.num()
	b2d.sep(b, verts)
	if (S(col)) {
		n2 = b.num()
		fs = b.fixts()
		newFixts = _.first(fs, n2 - n1)
		_.each(newFixts, function (f) {
			f.C(col)
		})
	}
	return this
}
b.sepNew = function (pts, fn) {
	var b = this
	var origNumFs = b.num()
	b = b.sep(pts)
	var newNumFs = b.num()
	var newFs = _.f(b.fs(), newNumFs - origNumFs)
	if (F(fn)) {
		_.e(newFs, fn)
	}
	return newFs
	function docs() {
		//return newFs[1]? newFs: newFs[0]
		//this proxies to b.sep.. but has two advantages
		//- it returns NEW fixtures formed in an array
		//- if u pass in a function, then it loops those fxs
		// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
	}
}
 