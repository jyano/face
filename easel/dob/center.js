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
ct.cX = function () {
	return this.St().cen().x
}
ct.cY = function () {
	return this.St().cen().y
}
ct.cen = ct.pt = ct.center = function () {
	return V(this.W() / 2, this.H() / 2)
}