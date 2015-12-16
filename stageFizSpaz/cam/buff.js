w.buffDfs = function (bf) {
	var w = this
	bf.x = N(bf.x) ? bf.x : w.worldW / 2
	bf.y = N(bf.y) ? bf.y : w.worldH / 2
	bf.w = N(bf.w) ? bf.w : 0
	bf.h = N(bf.h) ? bf.h : 0
	bf.mX = N(bf.mX) ? bf.mX : 1
	bf.mY = N(bf.mY) ? bf.mY : 1
	return bf
}
w.bfDev = function (bf) {
	var w = this
	bfStat('w', [[bf.w + 50, bf.h + 50, '-']])
	bfStat('r', [[bf.w, bf.h, '-']])
	bfStat('b', [[bf.w, w.h, '-']])
	bfStat('b', [[w.w, bf.h, '-']])
	return w
	function bfStat(col, fx) {
		w.S(bf.x, bf.y, col, fx)
	}
}
$magic = function (a, b, c, d) {
	return cjs.adj(a - b, c / 2) * d
}
$mag = function (n1, n2, dim, mlt, gDim) {
	return $magic(n1, n2, dim, mlt) + n2 - gDim / 2
}
w.trackBuff = function (t, bf) {
	var w = this, x, y
	w.buffDfs(bf)
	w.bfDev(bf)
	$t(function () {
		x = $mag(t.X(), bf.x, bf.w, bf.mX, w.gameW)
		y = $mag(t.Y(), bf.y, bf.h, bf.mX, w.gameH)
		w.camXY(x, y)
	})
	return w
}
w.trackBuffCen = function (t, bf) {
	var w = this
	bf.x = w.worldW / 2
	bf.y = w.worldH / 2
	return w.trackBuff(t, bf)
}

BUF = function () {
	W(1000, 1000, 2000, 2000).G(0).C('z')
	w.glimpse()
	y = w.ship(1000, 1000).rot(33).lV(20, -20).buff({
		x: 600, y: 1000, w: 400, h: 400
	})
}

w.glimpse = function () {
	var w = this
	_.ev(4, function () {
		w.zoom(0)
		_.in(2, function () {
			w.zoom(1)
		})
	})
	return w
}

T9 = BUFCEN = function () {
	W(1000, 1000, 2000, 2000).G(0).C('z').glimpse()
	y = w.ship(1000, 1000).rot(33).lV(20, -20)
	w.trackBuffCen(y, {w: 400, h: 400})
}
T10 = SFB = STREETFIGHTERBUF = function () {
	W([1200, 600, 1400, 1200], {g: 300, t: 0}).P()
	w.S(700, 1000, 'r', 800, 20)
	w.S(500, 800, 'g', 200, 20)
	w.S(900, 600, 'x', 200, 20)
	p.XY(700, 600)
	p.buff({
		x: 700, y: 1000,
		w: 700, h: 600,
		mX: 1.5
	})
}
T11 = SRB = SLIDEROOMSBUF = function () {
	W([1200, 600, 2400, 1000], {g: 300}).P()
	p.buff({x: 1200, y: 700, mX: 8, w: 800, h: 500})
	_.in(function () {
		w.mark().dot(600, 300, '*').dot(1200, 600, '*')
	})
}

b.buff = function (ob) {
	this.W().trackBuff(this, ob)
	return this
}