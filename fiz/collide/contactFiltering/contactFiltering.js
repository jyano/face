w.SCF = w.sCF = function (cF) {
	this.SetContactFilter(cF);
	return this
}  
function old() {
	w._l.EndContact = function (cx) {
		_.e(w.endHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PreSolve = function (cx) {
		_.e(w.preHandlers,
				function (func) {
					$.do(function () {
						func(cx)
					})
				})
	}
	w._l.PostSolve = function (cx, pam2) {
		_.e(w.postHandlers,
				function (func) {
					$.do(function () {
						func(cx, pam2)
					})  //second arg???????
				})
	}
}
function cxFilt() {
	b2d.cxFilt = b2d.filter = b2d.f = function () {//used?
		var f = new BXD.b2ContactFilter
		f.rC = f.RayCollide
		f.sC = f.ShouldCollide
		return f
	}
	b2d.filt = b2d.filterData = function () {
		var d = new b2d.Dynamics.b2FilterData()
		d.gI = function (a) {
			if (U(a)) {
				return d.groupIndex
			}
			d.groupIndex = a;
			return d
		}
		d.cat = function (a) {
			if (U(a)) {
				return d.categoryBits
			}
			d.categoryBits = a;
			return d
		}
		d.mask = function (a) {
			if (U(a)) {
				return d.maskBits
			}
			d.maskBits = a;
			return d
		}
		return d
	}
}