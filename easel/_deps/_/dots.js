ct.dot = function () {
	var ct = this
	var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
	o.x = N(o.x, ct.W() / 2)
	o.y = N(o.y, ct.H() / 2)
	o.c = o.c || 'y'
	d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
	tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
	d.$$(function () {
		tw.$()
	})
	return d.K('dot')
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this, dot, tween
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.dot = function (color, x, y) {
	var that = this,
			dot,
			tween
	if (b2d.isGPoly(color)) {
		_.each(color.verts(), function (v) {
			that.dot(V(v))
		})
		return this
	}
	if (A(color)) {
		_.each(color, function (args) {
			if (A(args)) {
				that.dot.apply(that, args)
			}
			else {
				that.dot(args)
			}
		})
		return
	}
	if (!S(color)) {
		y = x;
		x = color;
		color = 'yellow'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : this.W() / 2
	y = N(y) ? y : this.H() / 2
	dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
	tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
	dot.$$(function () {
		tween.toggle()
	})
	dot.N('dot')
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}
ct.squareDot = function (color, x, y) {
	var squareDot, tween
	if (!S(color)) {
		y = x;
		x = color;
		color = 'orange'
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
	this.A(squareDot.XY(x, y)//.drag()
	)
	//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
	// dot.$$(function(){tween.toggle()})
	return this
}