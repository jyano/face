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
b.f = function (fs) {
	return U(fs) ? this.GFL() :
			this.CreateFixture(fs)
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
b._f = function (f, c) {
	var b = this, g = G(arguments), o
	f = b.CF(f)
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
b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
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