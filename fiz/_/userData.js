//userDa()
function userDa() {
	b.SUD = function (d) {
		this.SetUserData(d);
		return this
	}
	b.GUD = function () {
		return this.GetUserData()
	}
	fD.uD = fD.D = fD.data = function (da) {
		var fD = this
		if (U(da)) {
			return this.userData
		}
		this.userData = da
		return this
	}
	f.uD = f.data = function (da) {
		var f = this
		f.SUD = function (d) {
			this.SetUserData(d);
			return this
		}
		f.GUD = function () {
			return this.GetUserData();
		}
		if (U(da)) {
			return this.GUD()
		}
		this.SUD(da);
		return this
	}
	b.uD = b.data = b.userData = function (d) {
		if (U(d)) {
			return this.GetUserData()
		}
		this.SetUserData(d)
		return this
	}
} 