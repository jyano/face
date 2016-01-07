gx.bRGF = function () {
	return this.beginRadialGradientFill.apply(this, arguments)
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
RG1221 = RADGRAD = function () {
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RG11 = RADIALGRAD = function () {
	setup()
	h.g
		// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
			.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
			.drawRect(0, 0, 100, 100)
			.drawCircle(180, 180, 100, 100)
}
RG1441 = RADIALGRADRECT = function () {
	s = cjs.S()
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = cjs.h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.h(10, 10).a2(s).drag()
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
RG11 = RADIALGRAD1 = function () {
	setup()
	h.x = 20
	h.y = 20
	st.addChild(h)
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	)
	h.graphics.drawRect(0, 0, 100, 100)
	h.graphics.endFill()
	st.update()
}
RG161 = RADIALGRADFILL2 = function () {
	setup()
	h.graphics.beginRadialGradientFill(
			["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
	).drawCircle(100, 100, 50)
	st.update()
}
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
		// h=cjs.h(10, 10).a2(s).drag()
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
RG151 = RADIALGRADFILL = function () {
	setup()
// 2 colors
	h.x = 20
	h.y = 20
	h.graphics.beginRadialGradientFill(
			[oC('b'), oC('r')],
			[.1, 1], 50, 50, 0, 50, 50, 50
	)
	h.graphics.drawRect(0, 0, 100, 100)
	h.graphics.endFill()
	st.addChild(h)
// 3 colors
	h = new cjs.Shape();
	h.x = 20;
	h.y = 140;
	h.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
	h.graphics.drawRect(0, 0, 100, 100);
	st.addChild(h);
// alpha
	h = new cjs.Shape();
	h.x = 20;
	h.y = 260;
	h.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
	h.graphics.drawRect(0, 0, 100, 100);
	h.graphics.endFill();
	st.addChild(h);
}
RGS = $$TWOEXAMPLES$$ = function () {
	var RG1 = function () {
		var cv = $.c().W(500).H(400)
		$H().a2($St(cv)).graphics
				.bRGF(["orange", "blue"], [0, 1], 100, 100, 0, 100, 100, 350)
				.dr(0, 0, 500, 500)
		return $.d($.h1('radial grad'), cv)
	}
	var RG2 = function () {
		var cv = $.c().W(500).H(400)
		st = $St(cv)
		st.A(h = $H())
		gx = h.graphics
		gx.bRGF(["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50).dc(100, 100, 50)
		return $.d($.h1('radial grad fill'), cv)
	}
	$s({$flexDiv: {dp: 'fl', wr: 'wr'}})
	var d = $.d().id('flexDiv')
	d.A(RG1(), RG2())
}