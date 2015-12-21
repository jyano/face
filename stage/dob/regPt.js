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