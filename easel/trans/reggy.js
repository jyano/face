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
dO.rXY = dO.rgXY = function () {
	var i = this, g = G(arguments),
			x = N(g.f, 0),
			y = N(g.s, x)
	return i.rX(x).rY(y)
	function alt(){
		dO.rXY = function () {
			var dO = this, g = G(arguments),
					x = _.tN(g[0]),
					y = _.tN(g[1], x)
			return dO.rX(x).rY(y)
		}
	}
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
	function alt(){
		dO.rgc = function () {
			var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
			return (g[0] === 0) ?
					i.rXY(0, 0, (g.p ? '+' : null))
					: i.rXY(x, y, (g.p ? '+' : null))
		}
	}
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
dO.rC = function () {
	var i = this, g = G(arguments), x, y, hW, hH
	x = i.W() / 2
	hW = x
	y = i.H() / 2
	hH = y
	return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
			i.rXY(hW, hH)
}
cjs.reggy = reggy=function (o, s) {
	s = s || o.parent
	s.bm('me', function (b) {
		b.W(40).H(40)
		I(function () {
			b.XY(o.x + o.regX, o.y + o.regY)
		}, 100)
	})
}

 