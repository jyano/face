 
	b.relPos = function () {
		return this.X() + this.stg().X()
	}
	b.rect = function (wd, ht, x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var that = this,
				rect = b2d.poly(wd, ht, x, y),
				fixt = this.fixt(rect).den(1),
				r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
		w.s.A(r)
		cjs.tick(function () {
			r.rot(that.rot())
			r.XY(that.X(), that.Y())
		})
		return fixt
	}
	b.rectSensor = function (wd, ht, x, y) {
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var that = this
		var rect = b2d.poly(wd, ht, x, y)
		rect.isSensor = true
		var fixt = this.fixt(rect)
		fixt.den(.00000001)
		var r = cjs.rect2(wd, ht, x, y)
		r.XY(this.X(), this.Y())
		w.s.A(r)
		r.opacity(.3)
		cjs.tick(function () {
			r.rot(that.rot())
			r.XY(that.X(), that.Y())
		})
		fixt.sprite = r
		return fixt
	}
 
	b.RECT = function (col, wd, ht, x, y, rot) {
		var g = G(arguments),
				fd,
				fixt,
				h,
				str, alpha = 1
		col = g[0];
		wd = g[1];
		ht = g[2]
		x = g[3];
		y = g[4];
		rot = g[5]
		if (S(rot)) {
			str = rot;
			rot = null
		}
		if (S(y)) {
			str = y;
			y = null
		}
		if (S(x)) {
			str = x;
			x = null
		}
		if (S(ht)) {
			str = ht;
			ht = null
		}
		if (!S(col)) {
			rot = y;
			y = x;
			x = ht;
			ht = wd;
			wd = col
		}
		fd = b2d.rec(wd, ht, x, y, rot)
		if (g.n) {
			fd.isSensor = true
			alpha = .2
		}
		fixt = this.fixt(fd)
		if (str) {
			fixt.K(str)
		}
		if (S(col)) {
			fixt.bindSprite(
					w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
			)
		}
		return fixt
	}
	b.CIRC = b.circ = function (col, rad, x, y) {
		var g = G(arguments), fixt, h, str
		col = g[0];
		rad = g[1];
		x = g[2];
		y = g[3];
		if (S(y)) {
			str = y;
			y = null
		}
		if (S(x)) {
			str = x;
			x = null
		}
		if (S(rad)) {
			str = rad;
			rad = null
		}
		if (!S(col)) {
			y = x;
			x = rad;
			rad = col
		}
		fixt = this.fixt(b2d.circ(rad, x, y))
		if (str) {
			fixt.K(str)
		}
		if (S(col)) {
			fixt.bindSprite(w.s.circ(col, rad, x, y))
		}
		return fixt
	}
 
 