function cxCos() {
	cx.bCo = cx.bindCo = cx.bindController = function (what) {
		var cx = this, fixt
		//if any fixt collides with a certain kind
		//switch to the controller with that name
		_.each(arguments,
				function (what) {
					if (fixt = cx.with(what)) {
						fixt.switchTo(window[what])
					}
				})
	}
	cx.aCo = cx.aBy = function (co) {
		var cx = this, bB = cx.bB();
		return co ? bB.a2(co) : bB.hasCo()
	}
	cx.bCo = cx.bBy = function (co) {
		return co ? this.bA().a2(co) : this.bA().hasCo()
	}
	cx.aNoCo = function () {
		return !this.aBy()
	}
	cx.bNoCo = function () {
		return !this.bBy()
	}
	cx.bCo = cx.bindCo = function () {
		var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
		G(arguments).e(function (k) {
			cx.w(k, function () {
				f.switchTo(window[k])
			})
		})
	}
}
 
 