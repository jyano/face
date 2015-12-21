b.explosion = b.exp = function () {//alert('b.exp is random!')
	var b = this, xy
	xy = b.pos()
	b.kill()
//	return R() ? b2d.sep(b2d.pC(20, 7)).XY(xy) : w.D(xy.x, xy.y).rec( 60, 60).rot(45)
	return w.D(xy.x, xy.y).rec(60, 60).rot(45)
}
w.md1 = function (fn) {
	return this.md(function (a, b, c) {
		if (self.used) {
			return
		}
		fn(a, b, c)
		self.used = 1
	})
}//
w.destructableBricks = w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([V(i * 25 + 410, j * 25 + 210), V(i * 25 + 410, j * 25 + 190), V(i * 25 + 430, j * 25 + 190), V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}

w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
function terr() {
	b.exp = function () {
		var b = this, xy
		xy = b.pos()
		b.kill()
		return R() ?
				b2d.sep(b2d.pC(20, 7)).XY(xy) :
				w.brick(xy.x, xy.y, 60, 60).rot(45)
	}
}
pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.D = function () {
	var pD = this
	G(arguments).e(function (polOrBod) {
		pD = b2d.iB(polOrBod) ? polOrBod.pDWo(pD) :
				pD.difference(gpc.p(polOrBod))
	})
	return pD
}
//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
b.pDWo = b.gPolWo = function (gPol) {
	this.fs(function (f) {
		gPol = gPol.D(f)
	})
	return gPol
}
f._vs = function () {
	return b2d.m(this.H().m_vertices)
}
f.pts = f.points = f.verts = f.vertices = f.vs = function () {
	var f = this, b = f.B(), g = G(arguments),
			vs = _.m(f._vs(), g.n ?
							function (a) {
								return a
							} :
							function (v) {
								return v.rt(b.rt())
							}
			)
	return b2d.tA(vs)
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments),
			pD = this.tGP()
	g.e(function (ob) {
		pD = b2d.iB(ob) ? ob.gPolWo(pD)
				: pD.D(ob)
	})
	if (!pD.hasAtLeastOnePoly()) {
		return $l('f.dif')
	}
	return pD.reg(f).reg(g.n ? b : f)
}
f.difKill = function (what) {
	var f = this,
			difdFxt = f.dif(what, '-') //vs is f minus something
	f.kill() //then f goes away
	return difdFxt
	//difdFxt = f.dif(g.f, '-') //vs is f minus something
	//f.kill() //then f goes away
}
f.scrapeWith = f.sub = function (what) {
	var f = this, b = f.B(), g = G(arguments), what = g.f, difdFxt
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	difdFxt = f.difKill(what)
	//otionally put a min size to allow it to be replaced
	//i guess if it's too small, don't bother
	//but calculating area could also be bottleneck?
	if (!bigEnough(difdFxt)) {
		return
	}
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt
	b.pol(difdFxt)
	//now that other thing that we subtracted from our fixt before it was killed and replaced..
	//..letst talk about that thing
	//we can optionally kill that thing too!!
	//it may have been a real manufactured body or fixt
	//... though there should be a better way than that!!! !!!! :=)(+
	if (g.n) {
		what.kill()
	}
	//and  aparently we can also optionally dynamize it!
	if (g.p) {
		what.dyn()
	}
	return f
	function bigEnough(f) {
		return M.p(f).getArea() > 2000
	}
}
b.without = b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = $dif(b, o).reg(b)
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return p
}
b.scrapeWith = b.subFrom = function (fromWhat) {
	this.fs(function (f) {
		fromWhat.sub(f)
	})
	return this
}
f.scrapeBodWith = f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}
b.scrapeWithFxt = b.subFxt = b.subF = b._sub = function (f) {
	var b = this
	b.fs(function (fxt) {
		fxt.sub(f)
	})
	return b
}
b.scrapeWithBod = b.subBod = b.subB = function (b) {
	return this.subFrom(bod)
}
b.scrape = b.sub = function () {

/// hhi im here ///////////////////////////////////////////////////////
	var b = this, g = G(arguments), col = g.f
	g.e(function (ob) {
		b2d.iF(ob) ? b.subF(ob) : b2d.iB(ob) ? b.subB(ob) : null
		if (g.n) {
			ob.kill()
		}
	})
	if (col !== 0) {
		b.C(col || b.c())
	}
	return b
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b.pos = function () {
	return this.tf().position.m()
}//used in MEET
pD.butHere = pD.to = pD.at = pD.ger = function (x, y) {
	return this.reg(-V(x, y).x, -V(x, y).y)
}
pD.maybeHere = function (xy) {
	return xy ? this.butHere(xy) : this
}
pD.from = pD.cameFrom = pD.reg = pD.rel = function (x, y) {
	return M.p(b2d.sub(this.vs(), V(x, y)))
}//you can pass in the verts, // or the gPoly itself! //what about a f?
pD.points = pD.vs = function (fn) {
	var pD = this,
			g = G(arguments),
			o = g.F ? {fn: g.f} : {num: g.f, fn: g.s},
			vs = []
	_.t(pD.n(), function (i) {
		vs.push([pD.x(i), pD.y(i)])
	})
	vs = g.n ? b2d.sub(vs, o.num) :
			g.p ? b2d.add(vs, o.num) :
					vs
	if (o.fn) {
		_.e(vs, o.fn);
		return pD
	}
	return vs
}//used in MEET
f.wV = function () {
	return b2d.tA(b2d.add(this.vs(), this.B()))
}//used in MEET
//b2d.hV = b2d.hasVerts = gpc.hV
b.subAll = function (poly) {
	return this.fs(function (f) {
		f.sub(poly)
	})
}
$pol = $poly = function (poly, xy) {
	return $pD(S(poly) ? $vs[poly] : poly).maybeHere(xy)
}
b.subPol = b.subPoly = b.subP = function (poly, xy) {
	return this.subAll($pol(poly, xy))
}
b.kXY = b.killXY = function () {
	var xy = this.XY();
	this.kill();
	return xy
}
b.subPolAtFxt = function (pol, fxt) {
	var g = G(arguments)
	var xy = g.n ? fxt.B().kXY() : fxt.B()
	this.subPol(pol, xy)
	return this
}
b._colorize = function (c) {
	if (c) {
		this.C(c === '*' ? $r() : c)
	}
	return this
}
b.expl = function (col) {
	var b = this
	b.cl(function (f) {
		b.subPolAtFxt('expl', f, '-')._colorize(col)
	})
	return b
}
MEETY = function () {
	W([1200, 600], {g: 10})
	y = w.y(100, 300);
	t = w.S(500, 300, $r(), 200, 800)
	t.expl('*')
	wd = w.i.W()
	$l('w.i.W() : ' + wd)
	ht = w.i.H()
	$l('w.i.H() : ' + ht)
	w.i.dot(300, 400)
	w.i.dot(300, 200)
	//$l(t.cen())
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
 
 