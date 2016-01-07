b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
b.collide = b.cl = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(this, g.s)
		return this
	}
	if (g.F_) {
		o = {fn: g.f, k: ''}
	}
	else {
		o = {k: g.f, fn: g.s}
	}
	w.b(function (cx) {
		var fA = cx.A(),
				fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)
		) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
}
f.collide = f.cl = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}