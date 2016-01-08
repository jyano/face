pS.tlNeg = function (b) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	var pts = this.pts()
	var newPts = _.m(pts, function (origPt) {
		return V(origPt).sub(pt.x, pt.y)
	})
	return $gP(newPts)
	function doc() {//pD.wV = pS.wV = 	 pS.reg = pS.toRelativePoints = pS.mapToBoxWorld
		//you can pass in the verts,
		// or the gPoly itself!                 
		// what about a f?
	}
}
$tlNeg = function (ps, b) {
	return _.m(ps, function (poly) {
		return poly.tlNeg(b)
	})
	//= bx.tlNeg = bx.reg
}
$pol = $poly = function (pD, xy) {
	pD = S(pD) ? $vs[pD] : pD
	return $pD(pD).maybeTl(xy)
}
pD.pols = function () {
	var pD = this, g = G(arguments), o
	var ps = pD.polies()
	o = b2d.iB(g.f) ? {ps: $tlNeg(ps, V(g.f)), fn: g.s} :
			g.N_ ? {ps: $tlNeg(ps, V(g.f, g.s)), fn: g.t} :
			{fn: g.f}
	o.ps = o.ps || []
	if (!g.n) {
		o.ps = _.m(o.ps, M.p)
	}
	if (F(o.fn)) {
		_.e(o.ps, o.fn);
		return pD
	}
	return o.ps
	// used in MEET
	// = pD.ps = pD.polys = pD.hs
}
b2d.gpcPD = M.p = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, pts
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
	}
	else {
		pts = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(pts)
}
pD._D = function (pol) {
	var pD = this
	return b2d.iB(pol) ? pol.difPol(pD) :
			pD.dif(pol)
}
pD.D = function () {
	var pD = this, gg = G(arguments)
	gg.e(function (g) {
		if (b2d.iB(g)) {
			if (g.n() == 1) {
				return pD.D(g.f())
			}
			g.fs(function (f) {
				pD = pD.D(f)
			})
		}
		else {
			pD = pD.difference(M.p(g))
		}
	})
	return pD
}
pD.pols = pD.ps = function () {
	var p = this,
			g = G(arguments),
			fn,
			ps = [];
	//put all my polys in an array
	_.t(p.nP(), function (i) {
		ps.push(p.g(i))
	})
	if (b2d.iB(g[0])) {
		ps = _.m(ps, function (p) {
			//return M.p(p).rel(g[0])
			return p.reg(g[0])
		})
		fn = g[1]
	}
	else if (N(g[0])) {
		ps = _.m(ps, function (p) {
			return p.reg(g[0], g[1])
		})
		fn = g[2]
	}
	else {
		fn = g[0]
	}
	if (g.p) {
		ps = _.m(ps, M.p)
	}
	if (F(fn)) {
		_.e(ps, fn);
		return p
	}
	return ps
}
pD.pol = function (b) {
	var p = this
	p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
	// w.pol(v.x, v.y, p) -> p.pol(w,v)?
	p.ps(b, function (p) {
		b.pol(p)
	})
	return p
//pD.polygons =
}
b2d.gpcPD = M.p = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g[0])) {
		return g[0]
	}
	p = new PolyDefault()
	if (b2d.iB(g[0])) {
		fs = g[0].fs()
		vs = fs[0].wV()
		_.eR(fs, function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g[0]) ? g[0].wV() :
				g[0]
	}
	p.A(vs)
	return p
}
b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
	return O(a) && F(a.isHole)
}
b.GP = function () {
	var b = this
	var wPts = b.wPts()
	return M.poly(wPts)
}
b.lGP = function () {
	var b = this
	var lPts = this.pts()
	return Math.poly(lPts)
}
b.PD = b.pD = function () {
	//b.P =
	var b = this, p,
			fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
w.ps = w.poliees = function (x, y, pS) {
	pS.ps(this.D(x, y), function (pS) {
		b1.pol(pS)
	})
}
w.polS = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		return w.pol.apply(w, g.f)
	}
	if (O(g.f) && O(g.s)) {
		g.e(function (g) {
			w.pol(g).stat()
		})
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.ps = function (x, y, p) {
	var w = this, b
	b = w.D(x, y)
	p.ps(b, function (p) {
		b1.pol(p)
	})
}
w.polS = function () {
	alert('you found w.polS');
	var w = this, g = G(arguments), b, o
	if (g.jA) {
		return w.pol.apply(w, g.f)
	}
	if (O(g[0]) && O(g[1])) {
		g.e(function (g) {
			w.pol(g).stat()
		});
		return w
	}
	o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
	o.x = N(o.x, w.hW);
	o.y = N(o.y, w.hH)
	b = w.D(o.x, o.y)
	if (!g.p) {
		return b.pol(o.p)
	}
	if (o.rg) {
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.polies = w.ps = function (x, y, p) {
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}
w.pol = function () {
	var w = this, g = G(arguments), b, o
	if (g.A) {
		$l('w.pol g.A')
		return $a(w, 'pol', g.f)
	}
	if (g.OO) {
		$l('w.pol g.OO')
		g.e(function (g) {
			w.pol(g)
		})
		return w
	}
	// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
	if (g.N_ && N(g.s) && O(g.t)) {
		$l('w.pol g.N_ && N(g.s) && O(g.t)')
		b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
		b.pol({v: g.t})
		return g.m ? M.p(b) : b
	}
	$l('w.pol !(  g.N_ && N(g.s) && O(g.t)) ')
	o = g.O ? g.f :
			N(g.f) ? {x: g.f, y: g.s, p: g.t}
					: {p: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.p = M.p(o.p)
	b = w.D(o.x, o.y)
	if (!g.p) {
		$l('!g.p')
		if (b2d.iB(o.p)) {
			$l('w.pol b2d.iB(o.p)')
			o.p = M.p(o.p)
		}
		else {
			$l('w.pol ! (b2d.iB(o.p))')
		}
		_p = o.p
		$l('pre b')
		b.pol(o.p)
		$l('post b')
		if (g.m) {
			$l('g.m')
			b = M.p(b)
		}
		else {
			$l('!g.m')
		}
		return b
	}
	if (o.rg) {
		$l('o.rg')
		o.p.ps(o.rg, function (p) {
			b.pol(o)
		})
	}
	else {
		$l('!o.rg')
		o.p.ps(function (p) {
			b.pol(o)
		})
	}
	return b.f()
}
w.pol1 = function () {
	var w = this, g = G(arguments), o
	var v = V(g.f, g.s)
	var b = w.D(v.x, v.y)
	b.pol({v: g.t})
	return b
}
b._pol = function (v, c, i) {
	var b = this,
			newFs, spr
	newFs = b.sepNew(v, withF)
	if (i) {
		spr = w.gx.h()
		spr.bV({v: v})
		b.bS(spr)
	}
	return newFs
	function withF(f) {
		f.c(c || 'x')
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	}
}
b.pol = function () {
	var b = this, w = b.W(), g = G(arguments), o
	var newFs
	if (g.u) {
		return b
	}
	if (b2d.iB(g.f)) {
		g.f.fs(b);
		return b
	}
	//if passed [[ color and ]] verts:
	o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
			gpc.iP(g.f) ? {v: g.f} :
					b2d.iF(g.f) ? {v: g.f.vs()} :
						// pass in  [[],[],[]]   or  ['r',[],[],[]]
							g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
									g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
											g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
											{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
	_oo = o
	$df.h(o)
	o.i = o.i || o.bf
	//$l('check _o');
	_o = o
	newFs = b.sepNew(o.v, function (f) {
		f.set(o)
		f.c(o.c, o.C, o.l)
		if (o.lf) {
			f.bS(w.st.h().lf(o).lt(o.v))
		}
		if (o.rf) {
			f.bS(w.st.h().rf(o).lt(o.v))
		}
	})
	if (o.i) {
		__h = w.gx.h().bV(o)
		b.bS(__h)
	}
	return newFs
}
b.pD = function () {
	var b = this, f = b.f(), g = G(arguments), pD = $pD()
	if (!f) {
		return pD
	}
	// if the body has no freqkin fixts.. 
	// if its an infant body , massless? fixtureless
	pD = M.p(f)
	_.eR(b.fs(), function (f) {
		pD = pD.U(f)
	})
	return pD
}
b.polDefault = b.polDef = b.bolDf = b.pD = b.P = function () {
	var b = this, p, fs = b.fs()
	if (!_.f(fs)) {
		return new PolyDefault()
	}
	p = M.p(_.f(fs))
	_.eR(fs, function (f) {
		p = p.U(f)
	})
	return p//p.reg(b)
	//this returns a gPoly
}
b.ps = function (fn) {
	alert('b.ps sucks')
	var b = this,
			arr = [],
			p = b.uni()
	if (F(fn)) {
		p.ps(b, fn);
		return b
	}
	p.ps(b, function (v) {
		arr.push(v)
	})
	return arr
}