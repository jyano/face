old = function () {
	K = $.K
	w.trig = w.trg = function (k, fn) {
		alert('w.trg trig')
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = true
					}
				},
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = false
					}
				}
		)
		if (F(fn)) {
			$t(function () {
				if (b.trig[k]) {
					_.b(fn, b)(b.trig[k])
				}
			})
		}
		return b
	}//alert
	b2d.levelJet = function () {
		wd = 600
		ht = 300
		W({W: 600, H: 300, g: 10, w: 0})
		w.floor = w.wall(300, wd / 2, wd * 5, 40, 'o')
		w.right = w.wall(0, ht / 2, 40, ht, 'p')
		p = w.p(2.5).con('thrust')
	}
}