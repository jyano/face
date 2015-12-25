w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
w.each = w.eachBody = function (l, uD) {//=w.e=w.eB
	//can pass a cb to be run on EACH body
	//can also pass a uD to restrict cb to
	//run only on bodies with that uD
	var w = this,
			bs = w.GetBodyList(), k, b
	if (S(l)) {
		k = l;
		l = uD
	} else {
		k = uD
	}
	while (bs) {
		b = bs
		bs = bs.next()
		if (b.has(k)) {
			l(b)
		}
	}
	return w
}
w.eachD = w.eachDyn = function (l) {
	var w = this;
	w.each(function (b) {
		if (b.isDyn()) {
			l(b)
		}
	})
	return w
}
w.e$ = w.b$ = function (fn) {
	var w = this
	w.eB(function (b) {
		b.$(fn)
	})
	return w
}// = w.eachClick = w.bodyClick 
w.eD = w.eDB = w.eDyn = function (fn) {
	return this.eB(function (b) {
		if (b.iD()) {
			fn(b)
		}
	})
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	$t(function () {
		w.bds(fn)
	})
	return w
}
w.bds = w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.e = w.eB = function () {
	var w = this, g = G(arguments), o, b
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	b = w.B()
	while (b) {
		b.kFn = function (k, fn) {
			var b = this, g = G(arguments), o
			o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
			if (b.of(o.k) && F(o.fn)) {
				o.fn(b)
			}
			return b
		}
		b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
	}
	return w
}
w.each = function (func, userData) {
	var bodies = this.GetBodyList(), kind, body
	if (S(func)) {
		kind = func;
		func = userData
	} else {
		kind = userData
	}
	while (bodies) {
		body = bodies
		bodies = bodies.next()
		if (!kind || body.is(kind)) {
			func(body)
		}
	}
	return this
}
b.each = b.eachFixt = function (func) {
	var fl = this.GetFixtureList()
	var withList = function self(list, func) {
		func(list)
		list = list.GetNext()
		if (list) {
			return self(list, func)
		}
	}
	withList(fl, func)
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}
//
w.eEv = w.eachEvery = function (fn) {
	var w = this
	z(function () {
		w.e(fn)
	})
	return w
}
w.inEv = function (n1, n2, fn) {
	_.in(n1, function () {
		_.ev(n2, function () {
			fn()
		})
	})
}
w.evIn = function (n1, n2, fn) {
	_.ev(n1, function () {
		_.in(n2, function () {
			fn()
		})
	})
}
w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}