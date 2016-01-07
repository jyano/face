tl = cjs.Timeline.prototype
tl.remove = tl.rm = function (a) {
	this.removeTween(a);
	return this
}
tl.currentLabel = tl.cL = function () {
	return this.getCurrentLabel()
}
tl.labels = tl.lb = function (a) {
	var t = this;
	if (U(a)) {
		return this.getLabels()
	}
	if (O(a)) {
		this.setLabels(a);
		return this
	}
	if (N(a) || S(a)) {
		return resolve(a)
	}
	return this
}
tl.add = function (tw) {
	var that = this
	this.addTween.apply(this, arguments)
	return this
}

function ditto(){
	tl = cjs.Timeline.prototype
	tl.A = tl.add = function (tw) {
		var tl = this
		if (A(tw)) {
			_.e(tw, function (tw) {
				tl.A(tw)
			})
			return tl
		}
		this.addTween.apply(this, arguments)
		return this
	}
	tl.remove = tl.xTw = tl.rm = function (tw) {
		this.removeTween(tw);
		return this
	}
	tl.currentLabel = tl.cL = function () {
		return this.getCurrentLabel()
	}
	tl.labels = tl.lb = function (a) {
		var t = this;
		if (U(a)) {
			return this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}
	tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
		var g = G(arguments)
		if (U(a)) {
			return g.n ? this.getCurrentLabel() : this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}}
	function ditto(){
		tl = cjs.Timeline.prototype
		tl.remove = tl.rm = function (a) {
			this.removeTween(a);
			return this
		}
		tl.currentLabel = tl.cL = function () {
			return this.getCurrentLabel()
		}
		tl.labels = tl.lb = function (a) {
			var t = this;
			if (U(a)) {
				return this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
		tl.add = function (tw) {
			var that = this
			this.addTween.apply(this, arguments)
			return this
		}
	}
tl = cjs.Timeline.prototype
tl.remove = tl.rm = function (a) {
	this.removeTween(a);
	return this
}
tl.currentLabel = tl.cL = function () {
	return this.getCurrentLabel()
}
tl.labels = tl.lb = function (a) {
	var t = this;
	if (U(a)) {
		return this.getLabels()
	}
	if (O(a)) {
		this.setLabels(a);
		return this
	}
	if (N(a) || S(a)) {
		return resolve(a)
	}
	return this
}
tl.add = function (tw) {
	var that = this
	this.addTween.apply(this, arguments)
	return this
}
function timeline() {
	cjs.tl = cjs.Tl = function (args) {
		var tl = new cjs.Timeline()
		if (A(args)) {
			tl.add(args)
		}
		return tl
	}
	tl = cjs.Timeline.prototype
	tl.A = tl.add = function (tw) {
		var tl = this
		if (A(tw)) {
			_.e(tw, function (tw) {
				tl.A(tw)
			})
			return tl
		}
		this.addTween.apply(this, arguments)
		return this
	}
	tl.remove = tl.xTw = tl.rm = function (tw) {
		this.removeTween(tw);
		return this
	}
	tl.currentLabel = tl.cL = function () {
		return this.getCurrentLabel()
	}
	tl.labels = tl.lb = function (a) {
		var t = this;
		if (U(a)) {
			return this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}
	tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
		var g = G(arguments)
		if (U(a)) {
			return g.n ? this.getCurrentLabel() : this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}
}