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
GR0 = GRD = TESTGRADWORKS = function () {
	z()
	c = $.c('y', 500).A()
	g = c.context.createLinearGradient(50, 0, 500, 100)
	g.addColorStop(.2, 'orange')
	g.addColorStop(.6, 'red')
	g.addColorStop(.8, 'green')
	c.context.fillStyle = g
	c.fillRect()
}
GR3 = GRADTX = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
GR2 = TXG = TESTGRAD = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}
	).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
GR1 = LR2 = LINRAD2 = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG1 = RADIALGRAD1 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	shape = new createjs.Shape()
	shape.x = 20
	shape.y = 20
	stage.addChild(shape)
	shape.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	shape.graphics.drawRect(0, 0, 100, 100)
	shape.graphics.endFill()
	stage.update()
}
RG2 = RADIALGRADFILL2 = function () {
	z()
	$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
	stage = new createjs.Stage("canvas", 420, 500, 30)
	stage.addChild(
			h = new createjs.Shape()
	)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	stage.update()
}
CIRCRG8 = GRADS = function () {
	s = St()
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = $h(10, 10).a2(s).drag().al(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	h2 = $h(500, 100).a2(s);
	h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
	////////
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
}//C
REC8 = GRADS1 = function () {
	s = $St()
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
	///////////////
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
	h = s.h(480, 270).drag()
	h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
	s.h(180, 270).drag()
			.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
			{w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
}//B+
OVALS8 = GRADS2 = SETTRANSFORM = function () {
	s = $St(800).bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
	//////
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({
		C: 'b',
		lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
	}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B+
///////////
LR0 = LINRAD = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LR1 = LINRAD1 = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
RG1221 = RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG121 = RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
MICK = function () {
	St()
	ct.mick = function (x, y, lf) {
		var ct = this,
				h = ct.h(x, y).drag()
						.c({l: 20, C: 0, lf: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
		ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
		return h
	}
	s.mick(500, 200)
	s.mick(700, 100, {c1: 'b', c2: 'X'})
	s.mick(700, 300, {c2: 'b'})
	s.mick(100, 100, {y2: 10})
	s.mick(100, 200, {y2: 200})
	s.mick(100, 300, {x2: 100})
}
function more() {
}
function horrible() {
	RG11 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG141 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG151 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
	RG161 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	RG711 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG11 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG171 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
	}
	RG161 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	RG1441 = RADIALGRADRECT = function () {
		s = cjs.S()
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = cjs.shape(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
					x1,
					y1,
					r1,
					x2,
					y2,
					r2
			)
					.dr(0, 0, 400, 400)
					.endFill()
			// x--
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
	}
	RG113 = RADIALGRADCIRC = function () {
		s = cjs.S()
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		h = cjs.shape(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
					x1,
					y1,
					r1,
					x2,
					y2,
					r2
			)
					.dc(0, 0, 100)
					.endFill()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
	}
	RG11 = RADIALGRADCIRC = function () {
		s = $St()
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		h = cjs.shape(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.rf('b', "o", x1,
					y1,
					r1,
					x2,
					y2,
					r2)
					.dc(0, 0, 100)
					.ef()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
	}
	RG13 = RADIALGRAD = function () {
		z()
		stage = SuperStage(500, 500).A()
		shape = stage.Shape().xy(40)
		shape.g
			// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
				.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
				.drawRect(0, 0, 100, 100)
				.drawCircle(180, 180, 100, 100)
	}
	RG14 = RADIALGRADFILL = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		// 2 colors
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		shape.graphics.beginRadialGradientFill(
				[oC('b'), oC('r')],
				[.1, 1], 50, 50, 0, 50, 50, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.addChild(shape)
		// 3 colors
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 140;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		stage.addChild(shape);
		// alpha
		shape = new createjs.Shape();
		shape.x = 20;
		shape.y = 260;
		shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
		shape.graphics.drawRect(0, 0, 100, 100);
		shape.graphics.endFill();
		stage.addChild(shape);
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
function usesGrad() {
	GRAPHTEST8 = function () {
		St();
		img = $.i('me', function () {
			s.ct().A(h = $Sh())
			gx = h.graphics.FS()
			s.A($Bm(img))
			gx.ss(32).dr(20, 20, 920, 360);
			fns = [
				function () {
					return $Sh(12, 10)
							.lf('b', 'g', 130).dr(130)
				},
				function () {
					return $Sh(40, 10, 'b', 16)
							.ls('r', 'w', 70, 140).de(70, 140)
				},
				function () {
					return $Sh(80, 80)
							.C('b', 8).rf('w', 'y', 40).dc(40)
				},
				function () {
					return $Sh(12, 10, 18)
							.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
				},
				function () {
					return $Sh(12, 12, 'g', 'r', 8)
							.rr(130, 30)
				}, //w(h) and r
				function lt() {
					return $Sh().C('o')
							.ss(16, 'round', 'round')
							.mt([40, 10], [90, 90], [90, 140])
				},
				function star() {
					return $Sh(80, 85, 'y', 'b', 3)
							.pStr(0, 0, 80, 5, .8, -95)
				},
				function hex() {
					return $Sh(80, 40, 'p')
							.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
				}
			]
			_.e(fns, withEachFn)
			function withEachFn(cont, i) {
				var W = 155, H = 155, P = 5, C = 4 //pad, cols
				s.A(tile(cont()).XY(
						42 + (W + P) * (i % C),
						42 + (i / C | 0) * (H + P)))
			}
		})[0]
		tile = createTile = function (x, y) {
			var bg, til
			bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
			til = cjs.ct().A(bg)
			if (N(x)) {
				til.X(x)
			}
			if (N(y)) {
				til.Y(y)
			}
			if (O(x)) {
				til.A(x)
			}
			return til
		}
	}
}