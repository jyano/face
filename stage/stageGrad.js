cjs.lg = h.lg = function () {
	var g = G(arguments), o//h=this, gx=h.graphics,
	if (g.A) {
		return cjs.lg.apply(null, g.f)
	}
	o = g.O ? g.f :
			_.x({c1: g.f, c2: g.s},
					N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
							: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
							: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
	o.c1 = oO('c', o.c1 || 'z');
	o.c2 = oO('c', o.c2 || 'w')
	o.s1 = N(o.s1, 0);
	o.s2 = N(o.s2, 1)
	o.x1 = N(o.x1, 0);
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
	return o
}
h.lG = h.linGrad = function () {
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
h.lG = h.linGrad = function () {
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
h.lG = h.linGrad = function () {
	var args = _.toArray(arguments)
	args[0] = _.map(args[0], function (col) {
		return oO('c', col)
	})
	this.graphics.beginLinearGradientFill.apply(
			this.graphics, args)
	return this
}
h.lf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = cjs.lg(g)
	gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
	return h
}
h.ls = function me() {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (A(g[0])) {
		return me.apply(h, g[0])
	}
	o = h.lg.apply(h, g)
	gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
	return h
}
h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
	var args = _.toArray(arguments), circs, len
	cols = _.map(cols,
			function (col) {
				return oO('c', col)
			})
	circs = _.rest([1, 2, 3, 4, 5], 2)
	len = circs.len  //use switch!
	x1 = 0;
	y1 = 0;
	r1 = 0;
	x2 = 0;
	y2 = 0;
	r2 = 50
	if (len == 1) {
		r2 = circs[0]
	}
	else if (len == 2) {
		r1 = circs[0];
		r2 = circs[1]
	}
	else if (len == 3) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r2 = circs[2]
	}
	else if (len == 4) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r1 = circs[2]
		r2 = circs[3]
	}
	else if (len == 5) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r2 = circs[4]
	}
	else if (len == 6) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r1 = circs[4];
		r2 = circs[5]
	}
	this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
	return this
}
h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
	var args = _.toArray(arguments), circs, len
	cols = _.map(cols,
			function (col) {
				return oO('c', col)
			})
	circs = _.rest([1, 2, 3, 4, 5], 2)
	len = circs.len  //use switch!
	x1 = 0;
	y1 = 0;
	r1 = 0;
	x2 = 0;
	y2 = 0;
	r2 = 50
	if (len == 1) {
		r2 = circs[0]
	}
	else if (len == 2) {
		r1 = circs[0];
		r2 = circs[1]
	}
	else if (len == 3) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r2 = circs[2]
	}
	else if (len == 4) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r1 = circs[2]
		r2 = circs[3]
	}
	else if (len == 5) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r2 = circs[4]
	}
	else if (len == 6) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r1 = circs[4];
		r2 = circs[5]
	}
	this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
	return this
}
h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
	var args = _.toArray(arguments), circs, len
	cols = _.map(cols,
			function (col) {
				return oO('c', col)
			})
	circs = _.rest([1, 2, 3, 4, 5], 2)
	len = circs.len  //use switch!
	x1 = 0;
	y1 = 0;
	r1 = 0;
	x2 = 0;
	y2 = 0;
	r2 = 50
	if (len == 1) {
		r2 = circs[0]
	}
	else if (len == 2) {
		r1 = circs[0];
		r2 = circs[1]
	}
	else if (len == 3) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r2 = circs[2]
	}
	else if (len == 4) {
		x1 = x2 = circs[0]
		y1 = y1 = circs[1]
		r1 = circs[2]
		r2 = circs[3]
	}
	else if (len == 5) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r2 = circs[4]
	}
	else if (len == 6) {
		x1 = circs[0];
		y1 = circs[1];
		x2 = circs[2];
		y2 = circs[3]
		r1 = circs[4];
		r2 = circs[5]
	}
	this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
	return this
}
h.rg = function (o) {
	var h = this, g = G(arguments),
			gx = h.graphics,
			o
	if (A(g[0]) && A(g[1])) {
		gx.rf(
				[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
		)
		return h
	}
	o = O(g[0]) ? g[0] :
			S(g[1]) ? _.x({c1: g[0], c2: g[1]},
					N(g[7]) ?
					{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
							: N(g[5]) ?
					{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
							: N(g[4]) ?
					{x2: g[2], r1: g[3], r2: g[4]}
							: N(g[3]) ?
					{r1: g[2], r2: g[3]}
							:
					{r2: g[2]})
					: S(g[0]) ?
			{c2: g[0]}
					: {}
	$df.grad(o)
	o.x2 = N(o.x2, o.x1)
	o.y2 = N(o.y2, o.y1)
	o.r1 = N(o.r1, 1);
	o.r2 = N(o.r2, 100)
	return o
}
h.rf = function me() {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (A(g[0])) {
		return me.apply(h, g[0])
	}
	o = h.rg.apply(h, g)
	gx.rf(
			[o.c1, o.c2],
			[o.s1, o.s2],
			o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
	return h
}
h.rs = function me() {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (A(g[0])) {
		return me.apply(h, g[0])
	}
	o = h.rg.apply(h, g)
	gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
	return h
}
function more() {
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.m(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rg = function (o) {
		var h = this, g = G(arguments),
				gx = h.graphics,
				o
		if (A(g[0]) && A(g[1])) {
			gx.rf(
					[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			)
			return h
		}
		o = O(g[0]) ? g[0] :
				S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						N(g[7]) ?
						{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								: N(g[5]) ?
						{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								: N(g[4]) ?
						{x2: g[2], r1: g[3], r2: g[4]}
								: N(g[3]) ?
						{r1: g[2], r2: g[3]}
								:
						{r2: g[2]})
						: S(g[0]) ?
				{c2: g[0]}
						: {}
		$df.grad(o)
		o.x2 = N(o.x2, o.x1)
		o.y2 = N(o.y2, o.y1)
		o.r1 = N(o.r1, 1);
		o.r2 = N(o.r2, 100)
		return o
	}
	h.rf = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rf(
				[o.c1, o.c2],
				[o.s1, o.s2],
				o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
}
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B