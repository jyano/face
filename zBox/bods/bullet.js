function bull() {
	w.bulBD = w.bul = function (x, y) {
		return this.B($bulBD(x, y))
	}
	w.bul = function (x, y) {
		var def, body
		def = b2d.dyn(x, y)
		def.bullet = true
		body = this.createBody(def)
		return body
	}
	w.polyBul = function (x, y, wd, ht, col) {
		var bul = this.bul(x, y)
		bul.poly(wd, ht)
		if (col) {
			bul.bindSprite2(
					cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
			)
		}
		return bul
	}
}
}
w.pBul = w.polyBul = function (x, y, wd, ht, c) {
	alert('w.pBul polyBul worldcreate.js')
	var w = this
	var bul = w.bul(x, y)
	bul.poly(wd, ht)
	if (c) {
		bul.bS2($rGx(wd, ht, oO('c', c))
				.XY(x, y).a2(w.s))
	}
	return bul
}