$L('dim','regPt', 'transform')
dO.X = function (x, dur) {
	function alt() {
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
	}
	
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
	
	function alt() {
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
	}
	
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
function dim() {
	dO.XY = function (x, y) {
		function alt() {
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
		}
		
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
	ct.cX = function () {
		return this.St().cen().x
	}
	ct.cY = function () {
		return this.St().cen().y
	}
	ct.cen = ct.pt = ct.center = function () {
		return V(this.W() / 2, this.H() / 2)
	}
	ct.W = function (w) {
		var st = this.stage
		var can = st.canvas
		if (U(w)) {
			return can.width
		}
		can.width = w
		return this
	}
	ct.H = function (w) {
		var can = this.getStage().canvas
		if (U(w)) {
			return can.height
		}
		can.height = w
		return this
	}
	st.hW = function () {
		return this.W() / 2
	}
	st.hH = function () {
		return this.H() / 2
	}
	st.W = function (a) {
		if (U(a)) {
			return this.canvas.width
		}
		this.canvas.width = a
		return this
	}
	st.H = function (a) {
		if (U(a)) {
			return this.canvas.height
		}
		this.canvas.height = a
		return this
	}
	st.WH = function (w, h) {
		var st = this;
		if (U(w)) {
			return V(st.W(), st.H())
		}
		if (N(w)) {
			st.W(w)
		}
		if (N(h)) {
			st.H(h)
		}
		;
		return st
	}
	dO.WH = function (w, h) {
		function alt() {
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
		}
		
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
}
function regPt() {
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
function transform() {
	dO.tf = dO.transform = function () {
		var dO = this, g = G(arguments)
		dO.setTF = dO.sTf = function () {
			var dO = this, g = G(arguments)
			dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
			return dO
		}
		dO.getTf = dO.gTf = dO.getTransform = function () {
			var dO = this
			return [
				dO.x, dO.y, dO.scaleX, dO.scaleY,
				dO.rotation, dO.skewX, dO.skewY,
				dO.regX, dO.regY
			]
		}
		return g.f ?
				dO.sTf.apply(dO, g.A_ ? g.f : g) :
				dO.gTf()
		function alt() {
			dO.tf = function () {
				var i = this, g = G(arguments)
				if (U(g[0])) {
					return [
						i.x,
						i.y,
						i.scaleX,
						i.scaleY,
						i.rotation,
						i.skewX,
						i.skewY,
						i.regX,
						i.regY
					]
				}
				if (O(g[0]) && F(g[0].getTransform)) {
					g[0] = g[0].getTransform()
				}
				i.setTransform.apply(i, A(g[0]) ? g[0] : g)
				return i
			}
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
		function alt() {
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
		}
		
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
		function alt() {
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
		}
		
		y = N(y) ? y : x
		return this.kX(x).kY(y)
	}
	dO.rt = dO.rot = function (rotation) {
		function alt() {
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
dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
	var dO = this, g = G(arguments)
	dO.nominalBounds = $Rec(a, b, c, d)
	return dO
}
dO.setBds = dO.sBd = dO.gTB = function () {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.getTransformedBounds()
	}
	dO.setBounds.apply(dO, g)
	return dO
}
dO.catProps = dO.gCDP = function () {
	var dO = this
	return dO.getConcatenatedDisplayProps()
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
dO._hT = function () {
	return this.hitTest.apply(arguments, this)
}
dO.hT = function (x, y) {
	function alt() {
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
}
dO.lTL = function () {
	return this.localToLocal.apply(this, arguments)
}
dO.lTG = function () {
	return this.localToGlobal.apply(this, arguments)
}
