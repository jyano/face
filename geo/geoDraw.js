w.pDraw = function (p, x, y) {
	var w = this,
			b = w.S(0, 0)
	b.pol({
		v: M.p(p).plus(x || 0, y || 0).vs(),
		c: 'w', C: 'x', l: 10
	})
	return p
}
h.drawPolygon = function (V, c, C, l) {
	var h = this, //h.drawConnectedLines =
			n = V.length
	h.c(c, C, l)
	_.e(V, function (v) {
		v.X = v.x
		v.Y = v.y
	})
	if (n >= 3) {
		h.mt(V[0]) //move to the FIRST//lineTo the REST
		_.in(n, function (i) {
			h.lt(V[i % n])
		})
	}
	//just a clever way to start from 1
	return h
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C)
	if (c) {
		h.c(c)
	}
	_.e(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}