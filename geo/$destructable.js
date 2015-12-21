  
	w.md1 = function (fn) {
		return this.md(function (a, b, c) {
			if (self.used) {
				return
			}
			fn(a, b, c)
			self.used = 1
		})
	}//
	w.destructableBricks = w.ter = function () {
		var w = this, ter = []
		_.t(13, function (i) {
			_.t(8, function (j) {
				var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
				ter.push({
					b: b,
					vs: b.f().vs(),
					p: M.p([V(i * 25 + 410, j * 25 + 210), V(i * 25 + 410, j * 25 + 190), V(i * 25 + 430, j * 25 + 190), V(i * 25 + 430, j * 25 + 210)])
				})
			})
		})
		return ter
	}
	b.explosion = b.exp = function () {//alert('b.exp is random!')
		var b = this, xy
		xy = b.pos()
		b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
		return w.D(xy.x, xy.y).rec(60, 60).rot(45)
	}
	w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
		var w = this
		this.b(function (cx) {
			cx.w('bul', k, fn)
		})
	}
 