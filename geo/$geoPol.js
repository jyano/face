function hole(){
	function alpha() {
		pD.wV = function (x, y) {
			var pD = this
			pD.ePol(function wPol(pS, n) {
				pS.tlNeg(x, y)
			})
			return pD
		}
	}
	
	w.pD = w.polDyn = function (x, y, pD, wV) {
		var w = this
		var b = w.D(x, y)
		pD.ePol(function wPol(pS, n) {
			var vs = pS.wV(wV).vs()
			_.e(b.pol(pS.iH() ? vs.reverse() : vs), function (f) {
				if (pS.iH()) {
					f.C('o').al(.8)
					//f.SetSensor(true)
				}
				else {
					f.C('w').al(.4)
				}
			})
		})
		return b
	}
	HOU = function () {
		W(600, 600).C('z').y()
		blue = w.pC(300, 300, 'b').stat().al(.5)
		red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
		b = w.pD(100, 300,
				blue.pD().U(red.pD()),
				blue
		).aV(6)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOU2 = function () {
		W(600, 600).C('z').y()
		blue = w.pC(300, 300, 'b').stat().al(.5)
		red = w.pC(450, 300, 'r', 60, 6).stat().al(.5)
		b = w.pD(100, 300,
				blue.pD().U(red.pD()),
				blue
		).aV(6)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOD = function () {
		W(600, 600).C('z')
		blue = w.pC(300, 300, 'b').stat().al(.5)
		red = w.pC(300, 300, 'r', 20).stat().rt(10).al(.5)
		w.pD(100, 300,
				blue.pD().D(red.pD()),
				blue
		).aV(6)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOD1 = function () {
		W(600, 600).C('z').y()
		blue = w.pC(300, 300, 'b').stat().al(.5)
		red = w.pC(330, 300, 'r', 30).stat().rt(10).al(.5)
		w.pD(100, 300,
				blue.pD().D(red.pD()),
				blue
		).aV(6)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOX = function () {
		W(600, 600).C('z').y()
		green = w.pC(200, 300, 'g', 30, 6).stat().al(.5)
		blue = w.pC(380, 300, 'b', 30).stat().al(.5)
		red = w.pC(320, 300, 'r', 60, 6).stat().al(.5)
		w.pD(500, 200, red.pD().X(blue.pD()), red)
		w.pD(200, 200, red.pD().X(green.pD()), red)
		w.pD(500, 400, red.pD().U(blue.pD()), red)
		w.pD(200, 400, red.pD().U(green.pD()), red)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOI1 = function () {
		W(600, 600).C('z').y()
		blue = w.pC(300, 300, 'b').stat().al(.5)
		red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
		w.pD(100, 300,
				blue.pD().I(red.pD()),
				blue
		).aV(6)
		// this is blue diff red.. so the outside of blue is left.. with a hole
	}
	HOI = function () {
		W(600, 600).C('z')//.y()
		b = w.pCS(300, 300, 'b')
		g = w.S(320, 270, 'g', 80, 60)
		r = w.pCS(350, 350, 'r', 60)
		b = w.pD(100, 300, b.pD().I(g.pD()).I(r.pD()), b)
		b.cn('thrust')
		return b
	}
	w.pCS = function () {
		return this.pC.apply(this, arguments).stat().al(.3)
	}
	CLONESCALE = CLSC = function () {
		b = HOI().C('b')
		c = b.clone(100, 300).C('r')
	}
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
b2d.tF = b2d.toFxt = function (f) {
	return b2d.iB(f) ? f.f() : f
}
w.pDraw = function (p, x, y) {
	var w = this, b = w.S(0, 0)
	b.pol({
		v: M.p(p).plus(x || 0, y || 0).vs(),
		c: 'w', C: 'x', l: 10
	})
	return p
}
b2d.tlNeg = b2d.reg = function (ps, b) {
	return _.m(ps, function (poly) {
		return poly.tlNeg(b)
	})
}
b.pos = function () {
	return this.tf().position.m()
}//used in MEET
b.killXY = b.KPos = b.KXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
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
pD.isPolyless = pD.hasNoPolys = function () {
	return !this.hasAtLeastOnePoly()
}
pD.ps = pD.polys = pD.hs = pD.pols = function () {
	var pD = this, g = G(arguments), o
	var ps = pD.polies()
	o = b2d.iB(g.f) ? {ps: b2d.tlNeg(ps, V(g.f)), fn: g.s} :
			g.N_ ? {ps: b2d.tlNeg(ps, V(g.f, g.s)), fn: g.t} :
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
} // used in MEET
pD.pol = function (b) {
	var p = this
	p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
	// w.pol(v.x, v.y, p) -> p.pol(w,v)?
	p.ps(b, function (p) {
		b.pol(p)
	})
	return p
}//pD.polygons =
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
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
WPOLS = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.polS([300, 300, p1], [300, 300, p2])
}
BPOL = function () {
	W()
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
POL = function () {
	W(50).C('w')
	p1 = M.p(sqr)
	p2 = M.p(combo)
	w.D(300, 300).pol({v: p1.U(p2)})
	w.D(400, 300).pol({v: p1.D(p2)})
	w.D(500, 300).pol({v: p1.I(p2)})
	w.D(600, 300).pol({v: p1.X(p2)})
	w.pol(300, 300, p2)
	_.e([
				[500, 200, p1.U(p2)],
				[600, 200, p1.D(p2)],
				[700, 200, p1.I(p2)], [800, 200, p1.X(p2)]],
			function (args) {
				w.pol.apply(w, args)
			})
}
PDPS = function () {
	W(10).roof.kill()
	b = w.brick(300, 200, 30, 30)
	pD = b.pD()
	pD.polies(function (pD) {
		w.D(300, 400).pol(pD).tlNeg(b)
	})
}
function alph() {
	b2d.overlapping = b2d.ol = function (b1, b2) {
		//alert('b2d.ol overlapping')
		var v1 = M.p(b1),//wont work yet
				v2 = M.p(b2)
		var p = v1.union(v2)
		return !(_.isEqual(p.vs(), v1.vs()) ||
		_.isEqual(p.vs(), v2.vs()))
	}
//b2d.hV = b2d.hasVerts = gpc.hV
// }
}