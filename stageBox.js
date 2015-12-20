 
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
	b.C = function (col) {
		this.each(function (f) {
			f.C(col)
		})
		return this
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
	f.stg = function () {
		return this.wor().s
	}
	f.dot = function (col) {
		var f = this, w = f.wor(), cent = f.cent()
		if (S(col)) {
			w.dot(col, cent)
		} else {
			w.dot(cent)
		}
		return this
	}
	f.dots = function () {
		b2d.polyDot(this.wVerts())
		return this
	}
	f.dyn = function () {
		var b = this.B();
		b.dyn.apply(b, arguments);
		return this
	}
	f.C = f.color = function (c1, c2) {
		var f = this, b = f.body(),
				w = b.wor(), shape, rad, pos
		c1 = c1 || 'b'
		c2 = c2 || c1
		if (f.isCirc()) {
			rad = f.rad()
			pos = f.pos()
			shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
		}
		else {
			shape = w.s.shape().poly(f.verts(), c1, c2, 1)
		}
		f.removeSprites()
		f.bindSprite(shape)
		// return this
	}
	f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
		var g = G(arguments)
		gg = g
		alpha = N(alpha) ? alpha : 1
		obj.opacity(alpha)
		//takes any display object.  right now, just used for shapes
		//because bindSprite fetches the bm's by string.
		//but when i set up preloader, then i would use this i suppose :)
		x = N(x) ? x : 0;
		y = N(y) ? y : 0
		var f = this,
				body = this.body(),
				stage = body.wor().s
		startingRotation = N(startingRotation) ? startingRotation : 0
		//f.sprite = obj
		//f.sprite.a2(stage)
		o = obj.a2(stage)
		f.sprites = f.sprites || []
		f.sprites.push(obj)
		//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
		cjs.tick(function () {//if(!f.sprite){return}
			obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
			obj.rotation = body.rot() + startingRotation
		})
		return this
	}
 