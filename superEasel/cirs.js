/// CIRS ///
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							{c: g.f, C: g.s, l: g.t}
	h.c(o)
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
}
h._dc = function (o) {
	var h = this, gx = h.graphics, g = G(arguments)
	gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))
	return h
}
h.cirs = function (g) {
	var h = this
	g.e(function (c) {
		h.dc(c)
	});
	return this
}
h.dc = function (x, y, r) {
	var h = this, gx = h.graphics, g = G(arguments), o
	h.cp()
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f : g.$ ? {r: g.f} : {x: g.f, y: g.s, r: g.t}
	return h._dc(o)
}
cjs.circ = cjs.circle = function (rad, fCol, sCol) {
	if (!N(rad)) {
		return cjs.circ(8, rad)
	}
	fc = oO('c', fc || 'z')
	var h
	h = $Sh()
	h.f(fc)
	h.circle(0, 0, rad)
	return h
}
cjs.cir0 = cjs.circle3 = function (x, y, rad, fCol, sCol) {
	var h = $Sh().X(x || 0).Y(y || 0)
	if (O(x)) {
		return cir0(x.x, x.y, x.r, x.fc, x.sc)
	}
	x = x || 0
	y = y || 0
	r = r || 8
	fc = fc || 'w'
	sc = sc || 'z'
	if (fCol) {
		h.f(fCol)
	}
	if (sCol) {
		h.s(sCol)
	}
	h.circle(x, y, r, fc, sc)
	SL(h)
	return h
}
cjs.rim = cjs.circle2 = function (rad, lineWid, x, y) {
	var z = lineWid
	var gx = $Gx()
	if (!S(r)) {
		return circle2('red', rad, z, x)
	}
	z = N(z) ? z : 32
	x = N(x) ? x : 100
	y = N(y) ? y : 100
	gx.ss(z / 8)
	gx.f(r, 'black')
	gx.dc(0, 0, z)
	return $Sh(gx).XY(x || 0, y || 0)
}
cjs.cir = function () {
	var g = G(arguments)
	var o = cjs.cir.g(g)
	var h = $Sh()
	o.r = N(o.r, 50)
	o.c = o.c || 'w'
	o.C = o.C || 'z'
	o.l = N(o.l, 4)
	h.dc(o.r, o.c, o.C, o.l)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (N(o.x)) {
		h.regX = -o.x
	}
	if (N(o.y)) {
		h.regY = -o.y
	}
	h.alpha = N(o.al, 1)
	return h
}
cjs.cir.g = function (g) {
	var o = g.O ? g.f :
			N(g.f) && N(g.s) && N(g.t) ?
			{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							{c: g.f, C: g.s, l: g.t}
	return o
}
h._dc = function () {
	var h = this
	h.graphics.dc.apply(h.graphics, arguments)
	return this
}
h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	gx.dc(o.x, o.y, o.r)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics,
			g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
	{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
			g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
			{c: g.f, C: g.s, l: g.t}
	//h.c(o)
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	h.cp()
	h._dc(o)
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
} // h.circ h.circle = h.cir2 = h.cir = 
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
h._dc = function () {
	var h = this
	h.graphics.dc.apply(h.graphics, arguments)
	return this
}
h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	gx.dc(o.x, o.y, o.r)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics,
			g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f : N(g.t) ?
	{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
	{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
			g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
			{c: g.f, C: g.s, l: g.t}
	//h.c(o)
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	h.cp()
	h._dc(o)
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
} // h.circ h.circle = h.cir2 = h.cir = 
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
/// RECS ///
 