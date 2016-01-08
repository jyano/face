b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
w.spB = w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.st)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.$h = function () {
	return this.i.h.apply(this.i, arguments)
}
w.$h = function () {
	$l('w.$h')
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
b.GFL = b.GetFixtureList
b.__f = b.f = function (f) {
	var b = this, g = G(arguments)
	return g.u ? b.GFL() : b.CF(f)
}
b._f = function (f, c) {
	var b = this, g = G(arguments), o
	f = b.CF(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function (fD) {//b.createFixture = b.cF = b.fixt1 = b.shape =
	var b = this, f;
	if (U(fD)) {
		return this.GetFixtureList()
	}
	// can pass a CODED array of fixts (will get parsed)
	if (A(fD)) {
		_.each(b2d.fixtParse(fD),
				function (fd) {
					b.fixt(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	//create the fixt
	f = this.CreateFixture(fD)
	//assign it classes specified in the fixt def
	if (A(fD.classes)) {
		_.each(fD.classes,
				function (clas) {
					f.K(clas)
				})
	}
	return f
	//= b.fixt = b.list
}
b.f = function (fD) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GFL()
	}
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {
			b.f(fD)
		})
		return b
	}
	var f = b.CF(g.f)
	if (g.f.K()) {
		f.K(g.f.K())
	}
	return f
}
b.f = b.fixt = b.list = function (fD) {
	var b = this, f;
	if (U(fD)) {
		return b.GetFixtureList()
	}    // can pass a CODED array of fixts (will get parsed)           //p.createFixture = p.cF = b.fixt1 = b.shape =
	if (A(fD)) {
		_.e(b2d.fixtParse(fD),
				function (fd) {
					b.f(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	f = b.CreateFixture(fD)
	if (A(fD.classes)) {
		_.e(fD.classes, function (k) {
			f.K(k)
		})
	}//?
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.], fD, [.,.] ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				} //class not col  ???
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	else if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	} //  [ [],[],fD,4,[] ]
	/////////////////////////////////
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	} else if (g.L == 1 || g.L == 3) {
		cir()
	} else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b._f = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	f = b.__f(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	;
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	}//   [ [],[],fD,4,[] ]
	else if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				}
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	}
	else if (g.L == 1 || g.L == 3) {
		cir()
	}
	else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.C = function (col) {
	this.each(function (f) {
		f.C(col)
	})
	return this
}
b.$h = function () {
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
			h
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g[2]}
	o.c = (o.c == '*') ? $r() : (o.c || 'b')
	o.C = o.C || o.c
	f.removeSprites()
	h = f.iC() ?
		// if circle?
			w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
		// if poly
			w.s.h().pol(f.rV(), o.c, o.C, o.l)
	f.bS(h)
	b.i = h
	return f
}
b.C = function (c) {
	this.each(function (f) {
		f.C(c)
	})
	return this
}
w.$h = function () {
	$l('w.$h')
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
f.C = f.color = function (c1, c2) {
	var f = this, b = f.body(),
			w = b.wor(), shape, rad, pos
	c1 = c1 || 'b'
	c2 = c2 || c1
	if (f.isCirc()) {
		rad = f.rad()
		pos = f.pos()
		shape = w.s.shape().cir(rad, pos.x, pos.y, c1)
	}
	else {
		shape = w.s.shape().poly(f.verts(), c1, c2, 1)
	}
	f.removeSprites()
	f.bindSprite(shape)
	// return this
}
f.C = function () {
	var f = this,
			b = f.B(), w = b.W(), g = G(arguments), o, h
	o = g.O ? g.f : {c: g.f, C: g.s, l: g[2]}
	o.c = (o.c == '*') ? $r() : (o.c || 'b')
	o.C = o.C || o.c
	f.rmSp()
	h = f.iC() ?
		// if circle?
			w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
		// if poly
			w.s.h().pol(f.vs(), o.c, o.C, o.l)
	f.bS(h)
	b.i = h
	return f
}
//ONLY AFFECTS STAGE, NOT WORLD
f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
			h
	o = O(g[0]) ? g[0] : {c: g[0], C: g[1], l: g[2]}
	o.c = (o.c == '*') ? $r() : o.c || 'b'
	o.C = o.C || o.c
	f.removeSprites()
	h = w.s.h()
	if (f.isCirc()) {
		
		//should not actually make a whole new fixture..
		//oh... i'm not ! :)
		h.cir(
				f.pX(),
				f.pY(),
				f.rad(),
				o.c,
				o.C,
				o.l
		)
	}
	else {
		h.poly(f.verts(), o.c, o.C, o.l)
	}
	f.bS(h)
	return f
};
f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
			h
	o = g.O ? g.f :
	{c: g.f, C: g.s, l: g[2]}
	o.c = (o.c == '*') ? $r() : (o.c || 'b')
	o.C = o.C || o.c
	f.removeSprites()
	h = f.iC() ?
		// if circle?
			w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
		// if poly
			w.s.h().pol(f.rV(), o.c, o.C, o.l)
	f.bS(h)
	b.i = h
	return f
}
COL = function () {
	W().C('z')
	b = w.bump({c: 'w', r: 100})
	f = b.f()
	f.C('y')
	// f.removeSprites(); h=w.s.h().cir(0,0,100,'y'); f.bS(h)
	$.in(1, function () {
		f.C('r')
		b.dyn()
	})
}