w.with = w.collWith = function (a, b, c) {
	var w = this
	w.beg(function (cx) {
		cx.with(a, b, c)
	})
	return this
}
w.class = function (k) {
	var w = this
	var ob = {
		class: k, k: k,
		world: w, w: w
	}
	ob.with = ob.collWith = function (k, func) {
		var ob = this
		if (O(k)) {
			_.each(k, function (fun, k) {
						ob.with(k, fun)
					}
			)
		}
		else {
			w.with(this.class, k, func)
		}
		return this
	}
	return ob
}
f.coll = function (what, func) {
	var that = this, fixt = this, beginFunc //ultimate func for FIXTURE COLL
	// you can specify what happens when a fixture hits:
	//ANYTHING
	// body/fixt of certain kind
	// specific fixt
	// specific body
	//but it its callback ALWAYS passed back the other fixt that was actually hit
	// and 'this' is set to THIS fixt within the cb
	//should cover class AND fixt AND body cases!!!
	if (F(what)) {
		func = what;
		what = ''
	}
	func = _.bind(func, fixt)
	w.beg(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (fixt.is(fA) && fB.of(what)) {
			func(fB, cx)
		}
		if (fixt.is(fB) && fA.of(what)) {
			func(fA, cx)
		}
	})
	return this
}