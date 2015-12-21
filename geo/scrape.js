w.polD = function (x, y, p1, p2) {
	var w = this
	return w.pol(x, y, M.p(p1).D(p2))
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments), p
//f.dif does the math and returns the answer (vs)
	p = M.p(f)
	g.e(function (g) {
		if (b2d.iB(g)) {
			g.fs(function (f) {
				p = p.D(f)
			})
		}
		else {
			p = p.D(g)
		}
	})
	if (!b2d.hV(p)) {
		$l('!hV(p)')
		return
	}
	p = p.reg(f)
	if (g.n) {
		p = p.reg(f.B())
	}
	return p
}
f.sub = function () {
	var f = this, b = f.B(), g = G(arguments),
			p
//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self
	p = f.dif(g[0], '-') //vs is f minus something
	if (p && !M.p(p).hH()) {
		f.kill() //then f goes away
		if (M.p(p).getArea() < 2000) {
			return
		}
		b.pol(p)//the body makes a new f, from the the vs
	}
	if (g.n) {
		g[0].kill()
	}
	if (g.p) {
		g[0].dyn()
	} //can optionally delete the 'something'
	return f
}
b.dif = function (o) {
	var b = this, g = G(arguments),
			f = b.f(), fs = b.fs(), p
	if (b.n() == 1) {
		return b.f().dif(o, '-')
	}
	p = DIF(b, o).reg(b)
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
f.sub = function (f1) {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.dif(f1, '-')   //   kill THIS f
	if (g.n) {
		f1.kill()
	}
	if (g.p) {
		f1.dyn()
	}
	if (pD.bigEnough() || g.m) {
		b.pol(pD)
	}
	return f
}
b.subF = function (f1, x, y) {
	var b = this
	var v = V(x, y)
	b.fs(function (f) {
		f.sub($pol(f1, v))
	})
	return b
}
b.subB = function (b1) {
	return this.fs(function (f) {
		b1.sub(f)
	})
}
b.sub1 = function (pD) {
	var b = this, g = G(arguments)
	if (b2d.iF(pD)) {
		b.subF(pD)
	}
	else if (b2d.iB(pD)) {
		b.subB(pD)
	}
	if (g.n) {
		pD.kill()
	}
	return b
}
b.sub = function () {
	var b = this, g = G(arguments)
	g.e(function (pD) {
		b.sub1(pD, g.o)
	})
	if (g.f !== 0) {
		//	b.C(g.f || b.c())
	}
	return b
}
w.polD = function (x, y, p1, p2) {
	return this.pol(x, y, M.p(p1).D(p2))
}
b.sub = function () {
	var b = this, gg = G(arguments), c = b.c()
	gg.e(function (g) {
		if (b2d.iF(g)) {
			b.fs(function (f) {
				f.sub(g)
			})
			if (gg.n) {
				g.kill()
			}
		}
		else if (b2d.iB(g)) {
			g.fs(function (f) {
				b.sub(f)
			})
			if (gg.n) {
				g.kill()
			}
		}
	})
	b.C(b.c())
	return b
}
f.dif = function () {
	var f = this, g = G(arguments)
	var pD = f.tGP()
	g.e(function (v) {
		pD = pD.D(v)
	})
	pD = pD.tlNeg(f.B())
	if (g.n) {
		f.kill()
	}
	return pD.ifHasPol()
	function docs() {
		//f.dif does the math and returns the answer (vs)
//returns pD with array of pS's ( pD.m_List )
//you can pass in the verts, 
// or the gPoly itself! //what about a fxt?
	}
}
b.dif = b.without = function (o) {
	var b = this, g = G(arguments)
	var f = b.f(), fs = b.fs()
	if (b.count() == 1) {
		return b.f().dif(o, '-')
	}
	if (g.n) {
		if (b2d.iB(o) || b2d.iF(o)) {
			o.kill()
		}
		else {
			b.kill()
		}
	}
	return $DIF(b, o).tlNeg(b)
}
//
b.dff = function (b2) {
	var b = this
	var p = Math.poly(b.V())
	return p.difference(Math.poly(b2.V()))
}
b.DIFF = function (b2) {
	var g = G(arguments),
			b2 = g[0],
			b = this, f = b.fixt(),
			dffV = b.dff(b2).verts()
	b2d.conc(b,
			_.map(dffV, function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			}))
	f.kill()
	b.rot(0)
	if (g.n) {
		b2.kill()
	}
	return this
}
b.DIF = function (b2) {
	var g = G(arguments),
			b2 = g[0]
	this.eachFixt(function (f) {
		f.DIFF(b2)
	})
	if (g.n) {
		b2.kill()
	}
	return this
}
b.minusPolyCirc = function (x, y, rad, sides) {
	var b = this
	poly = Math.poly(_.map(b2d.polyCirc(rad, sides),
			function (v) {
				return [v.x + x, v.y + y]
			}))
	verts = b.rel(b.polyVerts().difference(poly))
	b.clear().conc(verts)
	return this
}
b.union = function () {
	var num = this.num(),
			fs = this.fixts()
	if (num == 0) {
		return
	}
	if (num == 1) {
		return fs[0].polyVerts()
	}
	return fs[0].union(_.rest(fs))
}
b.minus = function (fOrB) {
	return this.rel(
			this.polyVerts().difference(fOrB.polyVerts())
	)
}
b.sub = function (a) {
	var p = this.minus(a)
	this.clear()
	this.conc(p)
}
b.subtract = function (a) {
	var g = G(arguments), a = g[0]
	_.each(this.fixts(),
			function (f) {
				f.sub(a)
			})
	if (g.n) {
		a.kill()
	}
	return this
}
b.rel = function (gPoly) {
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var verts = b2d.isGPoly(gPoly) ? gPoly.verts() : gPoly
	return _.map(verts,
			function (v) {
				return V(v[0] - b.X(), v[1] - b.Y())
			})
}
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
b.gPolWithout = b.gPolWo = function (pD) {
	this.fs(function (f) {
		pD = pD.D(f)
	})
	return pD
	function doc() {
		// =b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo
	}
}
f.dif = function () {
	var f = this, b = f.B(), g = G(arguments)
	var pD = f.GP()
	g.e(function (ob) {
		pD = bx.iB(ob) ? ob.gPolWithout(pD) :
				pD.D(ob)})
	if (!pD.hasAtLeastOnePoly()) {
		alert('f.dif (scrape.js?)')}
	var toBeRegged= g.n ? b : f
	return pD.reg(f).reg(toBeRegged)
	if(g.n){
		_.in(function(){
			f.kill()
		})
	}
	function doc() {
		//can take a body.. or a poly
		//   what about fixts? answer: p.D can consume a fixt
	}
}
f.difKill = function (difWhat) {
	var f = this, g = G(arguments)
	var difdFxt = f.dif(difWhat) //vs is f minus something
	_.in(function () {
		f.kill()
		//then f goes away
	})
	return difdFxt
}
f.scrapeWith = f.sub = function () {var f = this, b = f.B(), g = G(arguments)
	var difdFxt = f.difKill(g.f)
	function bigEnough(f) {
		//otionally put a min size to allow it to be replaced
		//i guess if it's too small, don't bother
		//but calculating area could also be bottleneck?
		return M.p(f).getArea() > 2000
	}
	if (!bigEnough(difdFxt)) {
		return
	}
	b.pol(difdFxt)
	if (g.n) {
		//now that other thing that we subtracted from our fixt before it was killed and replaced..
		//..letst talk about that thing
		//we can optionally kill that thing too!!
		//it may have been a real manufactured body or fixt
		//... though there should be a better way than that!!! !!!! :=)(+
		what.kill()
	}
	if (g.p) {//and  aparently we can also optionally dynamize it!
		what.dyn()
	}
	return f
	//f.sub uses f.dif and replaces itself on a body
	// with its (potentially) 'slimmer' self
	//lets begin:
	// we get the dif of the this and the thing we are subtracting from it...
	// then we kill THIS fixt
	//here, body makes a new f from the dif (hence, it might be slimmer)
	//again... it is fixtizing the result of the gPol subtraction operation
	// it subtracted something from this... killed itself..
	// .. and now is adding a NEW fixture to replace itself..
	//but the new fixture is the difference result of subtracting something else, from it
	//so after that subtraction, it killed itself, and and now 
	// we are replacing the body that held that fixt, replaces it with the resutl
	// of the difference between it and another fixt
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

var b=this

	b.fs(function (f) {
		fromWhat.sub(f)
	})
	
	
	return b
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
f.scrapeBodWith = f.subFromBod = function (bod) {
	bod.fs(function (f) {
		f.sub(bod)
	})
}

function terr(){
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