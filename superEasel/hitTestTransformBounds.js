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
function _apps(){
	WINDING = function () {
		cjs.Shape.prototype.same = function () {
			return $h(this)
		} //h.copy
		cjs.manifest = function (func) {
			var q = cjs.loadQueue()
			q.complete(
					function () {
						func(function (getResult) {
							return q.getResult(getResult)
						})
					})
					.manifest([{
						id: "chicks", src: "/chicks.png"
					},
						{id: "me", src: "/me.png"},
						{id: "guy", src: "/guy.png"},
						{id: "sun", src: "/sun.png"}])
		}
		z()
		cjs.worldsMostInterestingShape = function () {
			var h = cjs.shape()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
			return h
		}
		cjs.manifest(function (q) {
			$.hdr().A($.h1('grahics winding')).A()
			$.d().A($.c(960, 400)
					.id("testCanvas"))
			st = s = stage = $St(["testCanvas"])
			h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
			cjs.bm = function (img) {
				var g = G(arguments), img = g[0],
						bm = new cjs.Bitmap(img)
				if (g.N) {
					bm.rC()
				}
				return bm
			} //warning: can't yet change to $Bm!!
			bm = cjs.bm(q("chicks"), '-')
					.a2(s).X(470).drag()
			bm.mask = h.same().X(470)
		})
		function err() {
			//Uncaught TypeError: Cannot read property 'image' of undefined
		}
	}
	POPSPIN = function () {
		z()
		angle = 0
		img = $.img('me', handleImageLoad)[0]
		function stop() {
			cjs.Ticker.removeEventListener("tick", tick)
		}
		
		function handleImageLoad() {
			canvas = $.c('p', 960, 400).id("testCanvas").A()
			stage = $St(canvas)
			stage.autoClear = true;
			bmp = new cjs.Bitmap(img)
					.rXY(img.width >> 1, img.height >> 1)
					.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			stage.A(bmp).update();
			cjs.Ticker.timingMode = cjs.Ticker.RAF
			cjs.tick(tick)
		}
		
		function tick(event) {
			angle += 0.01
			var value = Math.sin(angle) * 360
			bmp.rt(value).sXY(value / 360)
			stage.update(event)
		}
	}
	MX00 = M2D = CJSM2D = function () {
		
		/*
		 Matrix2D Class
		 Defined in: Matrix2D:41
		 Module: EaselJS
		 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
		
		 This matrix can be visualized as:
		
		 [ a  c  tx
		 b  d  ty
		 0  0  1  ]
		 Note the locations of b and c.
		
		 Constructor
		 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		 Defined in Matrix2D:41
		 Parameters:
		
		 [a=1] Number optional
		 Specifies the a property for the new matrix.
		
		 [b=0] Number optional
		 Specifies the b property for the new matrix.
		
		 [c=0] Number optional
		 Specifies the c property for the new matrix.
		
		 [d=1] Number optional
		 Specifies the d property for the new matrix.
		
		 [tx=0] Number optional
		 Specifies the tx property for the new matrix.
		
		 [ty=0] Number optional
		 Specifies the ty property for the new matrix.
		
		 IndexMethodsProperties
		 Item Index
		 Methods
		
		 append
		 appendMatrix
		 appendTransform
		 clone
		 copy
		 decompose
		 equals
		 identity
		 invert
		 isIdentity
		 prepend
		 prependMatrix
		 prependTransform
		 rotate
		 scale
		 setValues
		 skew
		 toString
		 transformPoint
		 translate
		 Properties
		
		 a
		 b
		 c
		 d
		 DEG_TO_RAD static
		 identity static
		 tx
		 ty
		 */
		m = $Mx()
		$l(m)
		$St().bm('me', function (bm) {
			b = bm.XY(400, 200)
			p = b.getConcatenatedDisplayProps();
			$l(p)
			cm = b.getConcatenatedMatrix()
			$l(cm)
		})
	}
	LAYYS = USINGLAYERSINEASEL9 = function () {
		z()
		s = St(500).A()
		s.bm('me', function (bm) {
			b = bm
			bm.sXY(3)
			drawCar()
			s.tick(function () {
				b.x(-1 * (g.x() * 2))
				b.y(-1 * (g.y() * 2))
			})
		})
		bt = $.button('safd', function () {
			s.sXY(2)
		}).A()
		function drawCar() {
			s.bm('guy', function (bm) {
				g = bm
				bm.sXY(.5)
				SL(bm)
			})
		}
		
		USINGLAYERSINEASEL9 = function () {
			z()
			s = St(500).A()
			s.bm('me', function (bm) {
				b = bm
				bm.sXY(3)
				drawCar()
				s.tick(function () {
					b.x(-1 * (g.x() * 2))
					b.y(-1 * (g.y() * 2))
				})
			})
			bt = $.button('safd', function () {
				s.sXY(2)
			}).A()
			function drawCar() {
				s.bm('guy', function (bm) {
					g = bm
					bm.sXY(.5)
					SL(bm)
				})
			}
		}
	}
	MGA = MARGINAUTO = function () {
		o = outer = $.div('b', 500, 500).A()
		o.A(i = inner = $.div('r', 100, 100))
		i.mar('auto')
		o.mar('auto')
	}
	ELM = ELEMENTS = function () {
		z()
		div = $.div('red', 400, 400).P('a').A().A($.input())
		s = stage = createjs.stage('yellow', 1000).tick().A()
		elem = new createjs.DOMElement(div[0])
		//stage.A(el)
		// tw(el, [{x:300,y:300},2000])
		// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
	}
	MENTS = function () {
		z()
		div = $.div('red', 400, 400).P('a').A().A($.input())
		s = stage = createjs.stage('yellow', 1000).tick().A()
		elem = new createjs.DOMElement(div[0])
		//stage.A(el)
		// tw(el, [{x:300,y:300},2000])
		// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
	}
	EASELPHYS = function () {
		i = cjs.DisplayObject.prototype
		i.vX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.vY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.jX = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vx = this.vx + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vx = this.vx - a
				}
				else {
					this.vx = this.vx * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vx
			}
			this.vx = a;
			return this
		}
		i.jY = function (a) {
			var g = G(arguments);
			a = g[0]
			if (g.p) {
				this.vy = this.vy + a;
				return this
			}
			else if (g.n) {
				if (N(a)) {
					this.vy = this.vy - a
				}
				else {
					this.vy = this.vy * -1
				}
				return this
			}
			else if (U(g[0])) {
				return this.vy
			}
			this.vy = a
			return this
		}
		i.move = function () {
			return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		}
		i.go = function () {
			$t(this.move())
		}
		$St().bm('me', function (b) {
			b.go(10, 10)
			$.t(function () {
				$l(b.inStage())
			})
		})
	}
	HGXX = function () {
		W()
		h = w.i.h()
		h.graphics.ss(40, "round", "round")
		h.C("rgba(0,0,0,0.2)").mt(100, 100)
		h.graphics.curveTo(200, 500, 600, 300)
	}
	LAYZ = PLAX = function () {
		st = $St(500)
		st.bm('me', function (bm) {
			me = bm.sXY(.5)
			st.bm('guy', function (bm1) {
				guy = bm1.sXY(.5).drag()//SL(bm)
				$t(function () {
					me.X(guy.X() * 1.6).Y(guy.Y() * 1.6)
				})
			})
		})
		$.bt('safd', function () {
			st.sXY(2)
		})
	}
	CVTXX = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
	ST22 = function () {
		$.header().K("EaselJS").A(
				$.h1('nextStage'),
				$.p("This is an example")).A()
		c1 = $.canvas('y', 540, 260).id('canvasOne')//.P('a').top(0).right(0).bor('1px solid grey').A() // background: 'none',
		c2 = $.canvas('o', 540, 260).id('canvasTwo')//.P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		topStage = stageSetup("canvasTwo", handleEvt)
				.N("topStage").eMO()
				.A(makeSquare(375, 30, "pink", handleEvt))
				.next(bottomStage)
		topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		function stageSetup(canvasName, handler) {
			s = stage = $St(canvasName)
			//stage.addEventListener("stagemousemove", handler);	// too noisy
			_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
				s.on(ev, handler)
			})
			s.log = []
			return s
		}
		
		function makeSquare(x, y, color, handler) {
			var shape = cjs.shape().N('square').XY(x, y)
			shape.graphics.f(color).dr(0, 0, 135, 135)
			var cont = cjs.container().N('container').A(shape)
			_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				cont.on(ev, handler)
			})
			cont.cursor = "pointer"
			return cont
		}
		
		function handleEvt(evt) {
			var target = evt.target,
					stage = target.getStage(),
					log = stage.log
			log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
			+ " y:" + evt.stageY.toFixed(0))
			while (log.length > 12) {
				log.shift()
			}
			stage.text.text = log.join("\n")
			if (evt.type == "mouseover") {
				target.alpha = 0.5
			}
			if (evt.type == "mouseout") {
				target.alpha = 1
			}
		}
		
		/*
		
		 $.header().K("EaselJS").A(
		 $.h1('nextStage'),
		 $.p("This is an example")).A()
		 c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
		 .right(0).bor('1px solid grey').A() // background: 'none',
		 c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		 topStage = stageSetup("canvasTwo", handleEvt)
		 .N("topStage").eMO()
		 .A(makeSquare(375, 30, "pink", handleEvt))
		 .next(bottomStage)
		 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		 function stageSetup(canvasName, handler) {
		 s = stage = new cjs.Stage(canvasName).tick()
		 //stage.addEventListener("stagemousemove", handler);	// too noisy
		 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
		 s.on(ev, handler)
		 })
		 s.log = []
		 return s
		 }
		
		 function makeSquare(x, y, color, handler) {
		 var shape = cjs.shape().N('square').XY(x, y)
		 shape.graphics.f(color).dr(0, 0, 135, 135)
		 var cont = cjs.container().N('container').A(shape)
		 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
		 cont.on(ev, handler)
		 })
		 cont.cursor = "pointer"
		 return cont
		 }
		
		 function handleEvt(evt) {
		 var target = evt.target,
		 stage = target.getStage(),
		 log = stage.log
		 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		 + " y:" + evt.stageY.toFixed(0))
		 while (log.length > 12) {
		 log.shift()
		 }
		 stage.text.text = log.join("\n")
		 if (evt.type == "mouseover") {
		 target.alpha = 0.5
		 }
		 if (evt.type == "mouseout") {
		 target.alpha = 1
		 }
		 }
		 */
	}
	DRG = function () {
		h = $St().h(300, 300)
		h.bf('me', function (h) {
			h.dc(300).drag()
		})
	}
	DISTRACT = function () {
		z()
		$.d().A($.c(960, 400).id("testCanvas"))
		cjs.sharedCode()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
		st = new cjs.Stage("testCanvas")
	}
	XX6 = GXTX = GRAPHICSTEST = function () {
		stage = cjs.stage(800, 500).A()
		canvas = stage.canvas
		// grab canvas width and height for later calculations:
		w = canvas.width
		h = canvas.height
		img = $.img('me', layout)[0]
		function layout() {
			var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
				createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
			var padding = 5
			var _width = 155
			var _height = 155
			var cols = 4
			var space = 0
			var border = createBorder();
			_.times(arr.length, function (i) {
				var tile = arr[i]()
				tile.x = 42 + (_width + padding) * (i % cols)
				tile.y = 42 + (i / cols | 0) * (_height + padding)
				stage.A(tile)
			})
			stage.A(border)
			stage.update()
		}
		
		function createBorder() {
			var s = cjs.shape()
			s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
			return cjs.container().A(s)
		}
		
		function createBitmapFill() {
			var container = createTile();
			var s = cjs.shape().XY(12, 10)
			var mtx = new createjs.Matrix2D().rotate(1)
			s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
					.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
			return cjs.container().A(s)
		}
		
		function createRectGradientFill() {
			var s = cjs.shape().XY(12, 10)
			s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
			return createTile().A(s)
		}
		
		function createEllipse() {
			var s = cjs.shape().XY(40, 10)
			s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
					.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
					.drawEllipse(0, 0, 70, 140, 8)
			return createTile().A(s)
		}
		
		function createRadialGradientFill() {
			var s = cjs.shape().XY(80)
			s.graphics.ss(8).beginStroke("#f0f")
					.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
			return createTile().A(s)
		}
		
		function createLineTo() {
			var s = cjs.shape()
			s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
					.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
			return createTile().A(s)
		}
		
		function createHex() {
			var s = cjs.shape().XY(80, 40)
			s.graphics.beginFill("pink")
					.drawPolyStar(0, 0, 40, 6)
					.drawPolyStar(0, 75, 40, 6)
					.drawPolyStar(45, 45, 20, 6)
			return createTile().A(s)
		}
		
		function createStar() {
			var s = cjs.shape().XY(80, 85)
			s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
					.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
			return createTile().A(s)
		}
		
		function createRoundRect() {
			var s = cjs.shape().XY(12)
			s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
			return createTile().A(s)
		}
		
		function createTile() {
			var bg = cjs.shape()
			bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
			bg.alpha = 0.25
			return cjs.container().A(bg)
		}
	}
	DSTR = DISTRACTORDOESNOTHING = function () {
		st = stage = $St()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
	}
	TRF = TRANSF = function () {
		z()
		degToRad = Math.PI / 180;
		cjs.testCanvas()
		//cjs.sharedCode()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
		stage = new createjs.Stage("testCanvas")
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		var img = new Image();
		img.onload = handleImageLoad;
		img.src = "/chicks.png";
		function handleImageLoad(evt) {
			examples.hideDistractor();
			var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
			sliceWidth = imgWidth / sliceCount;
			sliceContainer = new createjs.Container();
			sliceContainer.x = stage.canvas.width / 2;
			for (var i = 0; i < sliceCount; i++) {
				var slice = new createjs.Bitmap(img);
				slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
				slice.cache(0, 0, sliceWidth, imgHeight);
				slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
				sliceContainer.addChild(slice);
			}
			var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
			slider.on("change", handleSliderChange, this);
			stage.addChild(sliceContainer, slider);
			updateEffect(slider.value);
		}
		
		function handleSliderChange(evt) {
			updateEffect(evt.target.value);
		}
		
		function updateEffect(value) {
			var l = sliceContainer.getNumChildren();
			for (var i = 0; i < l; i++) {
				var slice = sliceContainer.getChildAt(i);
				slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
				if (i % 2) {
					slice.skewY = value;
				} else {
					slice.skewY = -value;
					slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
				}
				slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
				slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
				slice.updateCache();
			}
			stage.update();
		}
		
		TRAN1 = function () {
			degToRad = Math.PI / 180;
			cjs.testCanvas()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
			stage = new createjs.Stage("testCanvas")
			stage.enableMouseOver();
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			var img = new Image();
			img.onload = handleImageLoad;
			img.src = "/chicks.png";
			function handleImageLoad(evt) {
				examples.hideDistractor();
				var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
				sliceWidth = imgWidth / sliceCount;
				sliceContainer = new createjs.Container();
				sliceContainer.x = stage.canvas.width / 2;
				for (var i = 0; i < sliceCount; i++) {
					var slice = new createjs.Bitmap(img);
					slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
					slice.cache(0, 0, sliceWidth, imgHeight);
					slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
					sliceContainer.addChild(slice);
				}
				var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
				slider.on("change", handleSliderChange, this);
				stage.addChild(sliceContainer, slider);
				updateEffect(slider.value);
			}
			
			function handleSliderChange(evt) {
				updateEffect(evt.target.value);
			}
			
			function updateEffect(value) {
				var l = sliceContainer.getNumChildren();
				for (var i = 0; i < l; i++) {
					var slice = sliceContainer.getChildAt(i);
					slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
					if (i % 2) {
						slice.skewY = value;
					} else {
						slice.skewY = -value;
						slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
					}
					slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
					slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
					slice.updateCache();
				}
				stage.update();
			}
		}
	}
	TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
		z()
		angle = 0
		img = $.img('me', handleImageLoad)[0]
		function stop() {
			cjs.Ticker.removeEventListener("tick", tick)
		}
		
		function handleImageLoad() {
			canvas = $.canvas('p', 960, 400).id("testCanvas").A()
			stage = cjs.stage(canvas)
			stage.autoClear = true;
			bmp = new createjs.Bitmap(img)
					.rXY(img.width >> 1, img.height >> 1)
					.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			stage.A(bmp).update();
			cjs.Ticker.timingMode = cjs.Ticker.RAF
			cjs.tick(tick)
		}
		
		function tick(event) {
			angle += 0.01
			var value = Math.sin(angle) * 360
			bmp.rot(value).sXY(value / 360)
			stage.update(event)
		}
		
		/*
		 TFR2 = TRANSFORMSIMPLE = function () {
		 z()
		 angle = 0
		 img = $.img('me', handleImageLoad)[0]
		 function stop() {
		 cjs.Ticker.removeEventListener("tick", tick)
		 }
		
		 function handleImageLoad() {
		 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
		 stage = cjs.stage(canvas)
		 stage.autoClear = true;
		 bmp = new createjs.Bitmap(img)
		 .rXY(img.width >> 1, img.height >> 1)
		 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		 stage.A(bmp).update();
		 cjs.Ticker.timingMode = cjs.Ticker.RAF
		 cjs.tick(tick)
		 }
		
		 function tick(event) {
		 angle += 0.01
		 var value = Math.sin(angle) * 360
		 bmp.rot(value).sXY(value / 360)
		 stage.update(event)
		 }
		 }
		 */
	}
}