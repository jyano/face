function dob() {
	function base() {
		dO = cjs.DisplayObject.prototype
		dO = cjs.DisplayObject.prototype
		dO.X = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			return i
			//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
			dO.Xalt = function (x, duration) {//can add easing :)
				var g = G(arguments)
				if (U(x)) {
					return this.x
				}
				if (g.p) {
					x = this.x + x
				}
				else if (g.n) {
					$l('n')
					x = this.x - x
				}
				else if (g.m) {
					$l('m')
					x = this.x * x
				}
				else if (g.d) {
					$l('d')
					x = this.x / x
				}
				if (N(duration)) {
					tw([this], [{x: x}, duration])
				}
				else {
					this.x = x
				}
				return this
			}
		}
		dO.Y = function (y, duration) {//make same same x
			var g = G(arguments)
			if (U(y)) {
				return this.y
			}
			if (g.p) {
				y = this.y + y
			}
			else if (g.n) {
				y = this.y - y
			}
			else if (g.m) {
				y = this.y * y
			}
			else if (g.d) {
				y = this.y / y
			}
			if (N(duration)) {
				tw([this], [{y: y}, duration])
			}
			else {
				this.y = y
			}
			return this
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, dur) {
				var i = this, g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(dur)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
		}
		dO.XY = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
				dO.XYalt = function (x, y) {
					var i = this, g = G(arguments), v
					if (g.u) {
						return {x: i.x, y: i.y}
					}
					v = V(g.f, g.s)
					x = v.x
					y = N(v.y, v.x)
					return i.X(x).Y(y)
				}
			}
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
			}
		}
		dO.W = function (a) {
			var i = this
			if (U(a)) {
				var bds = i.getBounds()
				if (bds) {
					return bds.width * i.scaleX
				}
				return
			}
			i.sX(i.scaleX * a / i.W())
			return i
			dO.Walt = function (a) {
				dO.Walt = function (a) {
					dO.Walt = function (a) {
						if (U(a)) {
							return this.getBounds().width * this.scaleX
						}
						this.sX(this.scaleX * a / this.W())
						return this
					}
					if (U(a)) {
						return this.getBounds().width * this.scaleX
					}
					this.sX(this.scaleX * a / this.W())
					return this
				}
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
		}
		dO.H = function (a) {
			var i = this
			if (U(a)) {
				if (this.getBounds()) {
					return this.getBounds().height * this.scaleY
				}
				return
			}
			this.sY(this.scaleY * a / this.H())
			return this
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
		}
		dO.WH = function (w, h) {
			var i = this
			return this.W(w).H(h || w)
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
		}
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
		dO.rgX = dO.rX = function () {
			var dO = this, g = G(arguments), rX = g[0]
			if (U(rX)) {
				return dO.regX
			}
			dO.regX = g.p ?
			dO.regX + rX : rX
			return dO
		}
		dO.rgY = dO.rY = function () {
			var dO = this, g = G(arguments), rY = g[0]
			if (g.p) {
				dO.Y(dO.y + (rY - dO.regY))
			}
			if (U(rY)) {
				return dO.regY
			}
			dO.regY = rY
			return dO
		}
		dO.rgXY = dO.rXY = function () {
			var dO = this, g = G(arguments),
					x = _.tN(g[0]),
					y = _.tN(g[1], x)
			return dO.rX(x).rY(y)
		}
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
		dO.rt = dO.rot = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
		dO.X = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			return i
			//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
			dO.Xalt = function (x, duration) {//can add easing :)
				var g = G(arguments)
				if (U(x)) {
					return this.x
				}
				if (g.p) {
					x = this.x + x
				}
				else if (g.n) {
					$l('n')
					x = this.x - x
				}
				else if (g.m) {
					$l('m')
					x = this.x * x
				}
				else if (g.d) {
					$l('d')
					x = this.x / x
				}
				if (N(duration)) {
					tw([this], [{x: x}, duration])
				}
				else {
					this.x = x
				}
				return this
			}
		}
		dO.Y = function (y, duration) {//make same same x
			var g = G(arguments)
			if (U(y)) {
				return this.y
			}
			if (g.p) {
				y = this.y + y
			}
			else if (g.n) {
				y = this.y - y
			}
			else if (g.m) {
				y = this.y * y
			}
			else if (g.d) {
				y = this.y / y
			}
			if (N(duration)) {
				tw([this], [{y: y}, duration])
			}
			else {
				this.y = y
			}
			return this
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, dur) {
				var i = this, g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(dur)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
		}
		dO.XY = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
				dO.XYalt = function (x, y) {
					var i = this, g = G(arguments), v
					if (g.u) {
						return {x: i.x, y: i.y}
					}
					v = V(g.f, g.s)
					x = v.x
					y = N(v.y, v.x)
					return i.X(x).Y(y)
				}
			}
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
			}
		}
		dO.W = function (a) {
			var i = this
			if (U(a)) {
				var bds = i.getBounds()
				if (bds) {
					return bds.width * i.scaleX
				}
				return
			}
			i.sX(i.scaleX * a / i.W())
			return i
			dO.Walt = function (a) {
				dO.Walt = function (a) {
					dO.Walt = function (a) {
						if (U(a)) {
							return this.getBounds().width * this.scaleX
						}
						this.sX(this.scaleX * a / this.W())
						return this
					}
					if (U(a)) {
						return this.getBounds().width * this.scaleX
					}
					this.sX(this.scaleX * a / this.W())
					return this
				}
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
		}
		dO.H = function (a) {
			var i = this
			if (U(a)) {
				if (this.getBounds()) {
					return this.getBounds().height * this.scaleY
				}
				return
			}
			this.sY(this.scaleY * a / this.H())
			return this
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
		}
		dO.WH = function (w, h) {
			var i = this
			return this.W(w).H(h || w)
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
		}
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
		dO.rgX = dO.rX = function () {
			var dO = this, g = G(arguments), rX = g[0]
			if (U(rX)) {
				return dO.regX
			}
			dO.regX = g.p ?
			dO.regX + rX : rX
			return dO
		}
		dO.rgY = dO.rY = function () {
			var dO = this, g = G(arguments), rY = g[0]
			if (g.p) {
				dO.Y(dO.y + (rY - dO.regY))
			}
			if (U(rY)) {
				return dO.regY
			}
			dO.regY = rY
			return dO
		}
		dO.rgXY = dO.rXY = function () {
			var dO = this, g = G(arguments),
					x = _.tN(g[0]),
					y = _.tN(g[1], x)
			return dO.rX(x).rY(y)
		}
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
		dO.rt = dO.rot = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
	}
	
	dO.uCx = dO.updateContext
	dO.a2 = function (ct, x, y) {
		var dO = this
		ct.A(dO)
		if (N(x)) {
			dO.X(x)
		}
		if (N(y)) {
			dO.Y(y)
		}
		return dO
	}
	dO.a2 = function (ct, x, y) {
		var dO = this
		ct.A(dO)
		if (N(x)) {
			dO.X(x)
		}
		if (N(y)) {
			dO.Y(y)
		}
		return dO
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.ca = function () {
		var dO = this, g = G(arguments), o
		var st = dO.getStage()
		var op
		if (!g.n && !g.p && O(dO.image)) {
			dO._ca($(dO.image)[0])
		}
		if (passTest(g)) {
			op = g.f;
			dO.updCa(op);
			return dO
		}
		o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.f} :
				N(g.s) ? {w: g.f, h: g.s} : {}
		if (O(o.i)) {
			o.i = toImg(o.i)
			dO = toObImg(dO)
			if (!g.n) {
				dO._ca()
			}
		}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
				st ? st.W() : 0)
		o.h = N(o.h) ? o.h :
				O(o.i) ? o.i.height :
						st ? st.H() : 0
		return dO._ca(o.x, o.y, o.w, o.h)
		function passTest(g) {
			return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
		}
		
		function toObImg(i) {
			return $(i.image ? i.image : i)[0]
		}
		
		function toImg(i) {
			return i.image ? i.image : $(i)[0];
		}
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	function mouse() {
		dO.underMouse = dO.uM = function () {
			var dO = this, stg = dO.getStage()
			if (stg.mouseInBounds) {
				var pt = dO.gTL(stg.mouseX, stg.mouseY)
				return dO.hitTest(pt.x, pt.y)
				// alt : return hitTest( pt )
			}
		}
		dO.mouEn = function (en) {
			var dO = this, g = G(arguments)
			if (g.u) {
				return dO.mouseEnabled
			}
			dO.mouseEnabled = g.f ? true : false
			return dO
		}
		dO.$ = dO.click = function (fn) {
			return this.on('click', fn)
		}
		dO.$$ = dO.dblclick = function (fn) {
			return this.on('dblclick', fn)
		}
		events = ['added',
			'mouseover', 'rollover', 'rollout', 'mouseout',
			'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
			'removed',
			'tick'
		]
	}
	
	function rel() {
		dO.in = dO.within = dO.inStage = function () {
			var ob = this,
					st = ob.st(),
					g = G(arguments),
					x = ob.x,
					y = ob.y,
					w = st.W() - 100,
					h = st.H() - 100,
					inn = x > 0 && x < w && y > 0 && y < h
			if (g.n) {
				if (!inn) {
					ob.rm()
				}
			}
			return inn
			function inStage() {
				var args = G(arguments),
						x = this.x,
						y = this.y,
						stg = this.stg(),
						w = stg.W() - 100,
						h = stg.H() - 100,
						withinStage = x > 0 && x < w && y > 0 && y < h
				if (args.n) {
					if (!withinStage) {
						this.remove()
					}
				}
				return withinStage
				var i = this
				var s = i.S(), wthnS
				wthnS = i.x > 0 && i.y > 0
				&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
				if (g.n && !wthnS) {
					s.rm()
				}
				return wthnS
			}
		}
		dO.belowStg = function () {
			return this.y > this.getStage().H()
		}
		dO.toFront = function () {
			return this.ix(this.sib().length - 1)
			toFront = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
			dO.toFrontAlt = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
		}
//rel
		dO.gTL = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return this.globalToLocal(x, y)
		}
		dO.lTG = function () {
			return this.localToGlobal.apply(this, arguments)
		}
		dO.lTL = function () {
			return this.localToLocal.apply(this, arguments)
		}
		dO.in = dO.within = dO.inStage = function () {
			var ob = this,
					st = ob.st(),
					g = G(arguments),
					x = ob.x,
					y = ob.y,
					w = st.W() - 100,
					h = st.H() - 100,
					inn = x > 0 && x < w && y > 0 && y < h
			if (g.n) {
				if (!inn) {
					ob.rm()
				}
			}
			return inn
			function inStage() {
				var args = G(arguments),
						x = this.x,
						y = this.y,
						stg = this.stg(),
						w = stg.W() - 100,
						h = stg.H() - 100,
						withinStage = x > 0 && x < w && y > 0 && y < h
				if (args.n) {
					if (!withinStage) {
						this.remove()
					}
				}
				return withinStage
				var i = this
				var s = i.S(), wthnS
				wthnS = i.x > 0 && i.y > 0
				&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
				if (g.n && !wthnS) {
					s.rm()
				}
				return wthnS
			}
		}
		dO.belowStg = function () {
			return this.y > this.getStage().H()
		}
		dO.toFront = function () {
			return this.ix(this.sib().length - 1)
			toFront = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
			dO.toFrontAlt = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
		}
		dO.gTL = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return this.globalToLocal(x, y)
		}
		dO.lTG = function () {
			return this.localToGlobal.apply(this, arguments)
		}
		dO.lTL = function () {
			return this.localToLocal.apply(this, arguments)
		}
	}
	
	dO.dg = dO.drag = function () {
		var i = this;
		cjs.SL(i); //<-SL(this)
		return i
	} // ~ scroll
	function family() {
		dO.pa = dO.P = function () {
			return this.parent
		}
		dO.sib = function () {
			return this.P().ch()
		}
		dO.St = dO.S = dO.st = dO.stg = function () {
			return this.getStage()
		}
		dO.pa = dO.P = function () {
			return this.parent
		}
		dO.sib = function () {
			return this.P().ch()
		}
		dO.St = dO.S = dO.st = dO.stg = function () {
			return this.getStage()
		}
	}
	
	dO.shad = function (color, x, y, blur) {
		cjs.shad = function (color, x, y, blur) {
			alert('cjs.shad')
			if (color == '-') {
				return new cjs.Shadow(null, 0, 0, 0)
			}
			color = S(color) ? color : 'a'
			blur = N(blur) ? blur : 10
			x = N(x) ? x : 0
			y = N(y) ? y : 0
			var shad = new cjs.Shadow(oO('c', color), x, y, blur)
			return shad
		}// = cjs.shadow
		var shadow = cjs.shad(color, x, y, blur)
		this.shadow = shadow
		return this
	}
	dO.shad = function (color, x, y, blur) {
		cjs.shad = function (color, x, y, blur) {
			alert('cjs.shad')
			if (color == '-') {
				return new cjs.Shadow(null, 0, 0, 0)
			}
			color = S(color) ? color : 'a'
			blur = N(blur) ? blur : 10
			x = N(x) ? x : 0
			y = N(y) ? y : 0
			var shad = new cjs.Shadow(oO('c', color), x, y, blur)
			return shad
		}// = cjs.shadow
		var shadow = cjs.shad(color, x, y, blur)
		this.shadow = shadow
		return this
	}
	function center() {
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
		}
		dO.mdX = dO.cenX = dO.cX = function (a) {
			var dO = this
			if (U(a)) {
				return dO.x + dO.W() / 2
			}
			return dO.X(a - dO.W() / 2)
		}
		dO.mdY = dO.cenY = dO.cY = function (a) {
			var dO = this,
					hH = dO.H() / 2
			return U(a) ? dO.y + hH : dO.Y(a - hH)
		}
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
		}
		dO.mdX = dO.cenX = dO.cX = function (a) {
			var dO = this
			if (U(a)) {
				return dO.x + dO.W() / 2
			}
			return dO.X(a - dO.W() / 2)
		}
		dO.mdY = dO.cenY = dO.cY = function (a) {
			var dO = this,
					hH = dO.H() / 2
			return U(a) ? dO.y + hH : dO.Y(a - hH)
		}
	}
	
	function cache() {
		dO.uCa = dO.updCa = function (ca) {
			this.updateCache(ca);
			return this
		}
		dO.uc = dO.uncache = function (ca) {
			this.uncache(ca);
			return this
		}
		dO.__ca = function () {
			this.cache.apply(this, arguments);
			return this
		}
		dO._ca = function (x, y, w, h) {
			var dO = this
			x = N(x, 0)
			y = N(y, 0)
			w = N(w, dO.width)
			h = N(h, dO.height)
			dO.__ca(x, y, w, h)
			return dO
		}
		dO.caCv = dO.cC = dO.cc = function () {
			return this.cacheCanvas
		}
		dO.gCDU = function (ca) {
			return this.getCacheDataURL(ca)
		}
		dO.ca = function () {
			var dO = this, g = G(arguments), o
			var st = dO.getStage()
			var op
			if (!g.n && !g.p && O(dO.image)) {
				dO._ca($(dO.image)[0])
			}
			if (passTest(g)) {
				op = g.f;
				dO.updCa(op);
				return dO
			}
			o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
			{x: g.f, y: g.s, w: g.t, h: g.f} :
					N(g.s) ? {w: g.f, h: g.s} : {}
			if (O(o.i)) {
				o.i = toImg(o.i)
				dO = toObImg(dO)
				if (!g.n) {
					dO._ca()
				}
			}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
					st ? st.W() : 0)
			o.h = N(o.h) ? o.h :
					O(o.i) ? o.i.height :
							st ? st.H() : 0
			return dO._ca(o.x, o.y, o.w, o.h)
			function passTest(g) {
				return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
			}
			
			function toObImg(i) {
				return $(i.image ? i.image : i)[0]
			}
			
			function toImg(i) {
				return i.image ? i.image : $(i)[0];
			}
		}
		dO.caCv = dO.cC = dO.cc = function () {
			return this.cacheCanvas
		}
		dO.gCDU = function (ca) {
			return this.getCacheDataURL(ca)
		}
	}
	
	function hideRemove() {
		dO.rm = dO.remove = function () {
			var dO = this
			if (O(dO) && O(dO.parent)) {
				dO.parent.removeChild(dO)
			}
			return dO
		}
		dO.hd = dO.hide = function () {
			return this.vsb(0)
		}
		dO.rm = dO.remove = function () {
			var dO = this
			if (O(dO) && O(dO.parent)) {
				dO.parent.removeChild(dO)
			}
			return dO
		}
		dO.hd = dO.hide = function () {
			return this.vsb(0)
		}
		dO.vis = dO.vsb = function (vsb) {
			var dO = this
			if (U(vsb)) {
				return dO.visible
			}
			dO.visible = vsb ? true : false
			return dO
		}
		dO.al = dO.opacity = function (al) {
			var dO = this
			if (U(al)) {
				return dO.alpha
			}
			dO.alpha = al;
			return dO
		}
		dO.vis = dO.vsb = function (vsb) {
			var dO = this
			if (U(vsb)) {
				return dO.visible
			}
			dO.visible = vsb ? true : false
			return dO
		}
		dO.al = dO.opacity = function (al) {
			var dO = this
			if (U(al)) {
				return dO.alpha
			}
			dO.alpha = al;
			return dO
		}
	}
	
	function hitTest() {
		dO._hT = function () {
			return this.hitTest.apply(arguments, this)
		}
		dO.hT = function (x, y) {
			var dO = this
			if (cjs.iDO(x)) {
				return dO.hT(
						dO.gTL(x)
				)
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return dO._hT(x, y)
		} //= dO.test
		dO._hT = function () {
			return this.hitTest.apply(arguments, this)
		}
		dO.hT = function (x, y) {
			var dO = this
			if (cjs.iDO(x)) {
				return dO.hT(
						dO.gTL(x)
				)
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return dO._hT(x, y)
		} //= dO.test
	}
	
	function reggy() {
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rgc = function () {
			var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
			return (g[0] === 0) ?
					i.rXY(0, 0, (g.p ? '+' : null))
					: i.rXY(x, y, (g.p ? '+' : null))
		}
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rC = function () {
			var i = this, g = G(arguments), x, y, hW, hH
			x = i.W() / 2
			hW = x
			y = i.H() / 2
			hH = y
			return (g.p) ?
					i.rX(hW, '+').rY(hH, '+') :
					i.rXY(hW, hH)
		}
	}
	
	function compOp() {
		dO.cO = dO.compOp = function (compOp) {
			var dO = this, g = G(arguments)
			if (g.u) {
				return dO.compositeOperation
			}
			dO.compositeOperation = compOp
			return dO
		}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
		dO.Ds = dO.dO = function () {
			return this.compOp('destination-out');
		}
		dO.dS = dO.dI = function () {
			return this.compOp('destination-in')
		}
		dO.sD = dO.sI = function () {
			this.compOp('source-in');
			return this
		}
		dO.Sd = dO.sO = function () {
			this.compOp('source-out');
			return this
		} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
		dO.ds = dO.dV = function () {
			this.compOp('destination-over');
			return this
		}
		dO.SD = dO.sT = dO.sA = function () {
			this.compOp('source-atop');
			return this
		}
		dO.DS = dO.dT = dO.dA = function () {
			this.compOp('destination-atop');
			return this
		}
		dO.li = function () {
			this.compOp('lighter');
			return this
		}
		dO.co = function () {
			this.compOp('copy');
			return this
		}
		dO.xo = function () {
			this.compOp('xor');
			return this
		}
	}
}
