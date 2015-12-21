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