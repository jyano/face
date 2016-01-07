//cx.excludes=function(u){return !this.includes(u)}
//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)
// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
cx.ds = cx.destroy = cx.destroyBoth = function () {
	this.a().K('destroy')
	this.b().K('destroy')
	return this
}
cx.destroy = cx.destroyBoth = function () {
	this.a().setDestroy()
	this.b().setDestroy()
	return this
}
cx.destroyIf = function (kind) {
	this.a().setDestroyIf(kind);
	this.b().setDestroyIf(kind)
}
cx.destroyOtherIf = function (kind) {
	var a = this.a(), b = this.b()
	if (a.is(kind)) {
		b.setDestroy()
	}
	else if (b.is(kind)) {
		a.setDestroy()
	}
}
// zero :
cx.ofThis = cx.anyWith = cx.in = cx.inc = cx.includes = cx.includes = cx.eitherOf = function (k, fn) {
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(k)) {
		if (fn) {
			_.b(fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	if (b.of(k)) {
		if (fn) {
			_.b(fn, b)(a, cx);
			return cx
		}
		return [b, a]
	}
}
cx.ofThese0 = cx.these0 = function (p1, p2, fn) {
	$l('these0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(p1) && b.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	if (b.of(p1) && a.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.f1 = function () {
	return function () {
	}
}
cx.ofThis0 = cx.this0 = function (k, fn) {
	// a lot:$l('this0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	var g = G(arguments)
	if (!a || !b) {
		$l('!a || !b');
		return cx
	}
	if (a.of(g.f)) {
		if (F(g.s)) {
			_.in(0, function () {
				_.b(g.s, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	else if (b.of(g.f)) {
		if (g.s) {
			_.in(0, function () {
				_.b(g.s, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.of0 = cx.w0 = cx.with0 = function () {
	var cx = this,
			g = G(arguments), o
	o = F(g.t) || g.s && !F(g.s) ?
	{k: g.f, k1: g.s, fn: g.t} : {k: g.f, fn: g.s}
	return o.k1 ? cx.these0(o.k, o.k1, o.fn) :
			cx.this0(o.k, o.fn)
}