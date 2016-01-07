function toFixed() {
	v.dec = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
	v.tF = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
}