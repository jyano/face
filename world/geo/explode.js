b._colorize = function (c) {
	if (c) {
		this.C(c === '*' ? $r() : c)
	}
	return this
}
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
f.A = f.area = function () {
	return M.p(this).getArea()
}
w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
f.area = f.A = function () {
	return M.p(this).getArea()
}
w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
function terr() {
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
}
$DIF = function () {
	var g = G(arguments)
	if (g.A) {
		return g.ap($DIF)
	}
	var p = M.p(g.f)
	g.eR(function (pol) {
		p = p.D(M.p(pol))
	})
	return p
}
 
b.expl = function (c) {

// is body.Isactive??
//alt way to handle explosion sub
//w.rad(bulletX, bulletY, 15, function (terrainFxt) {terrainFxt.sub( explosionPol )})
	var b = this
	var victim = b
	victim.cl(function (f) {
		var bulletF = f, bulletB = f.B()
		victim.subF('expl', bulletB.killXY())
		if (c) {
			victim.C(c === '*' ? $r() : c)
		}
	})
	return b
}
$vs = {}
$vs.expl = [[0, 100], [-100, 0], [0, -100], [100, 0]]