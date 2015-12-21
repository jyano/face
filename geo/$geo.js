$uni = UNI = function () {
	//= b2d.u
	var g = G(arguments), p
	if (g.A) {
		return g.ap(UNI)
		//return $a(UNI,g.f)
	}
	p = M.p(g.f)
	g.eR(function (pol) {
		p = p.U(M.p(pol))
	})
	return p
}
pD.polygons = pD.pol = function (b) {
	alert('pD.pol')
	var p = this
	p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
	// w.pol(v.x, v.y, p) -> p.pol(w,v)?
	p.ps(b, function (p) {
		b.pol(p)
	})
	return p
}
 

//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
function oldDIf() {
	b2d.hasAtLeastOnePolyX = b2d.hVSource = function (gP) {
		// if gP is a dP, then m_List is an array of (its inner) polySimples
		// [polySimp]
		//get just gets the index from the same (its own) array, hurray :)
		//as a bool tool, it checks to make sure that it has at least one polygon
		return gP.hasAtLeastOnePoly()
	}
	pD.minus = function (x, y) {
		$l('pD.minus')
		return M.p(
				_.m(this.vs(), function (v) {
					return V(v).sub(x || 0, y || 0)
				})
		)
	}
	$dif = DIF = function () {
		$l('$dif DIF')
		$l('DIF')//not each of the ps?
		var g = G(arguments),
				p = M.p(g.f)
		g.eR(function (p1) {
			p = p.D(p1)
		})
		return p
	}
}
b2d.tF = b2d.toFxt = function (f) {
	return b2d.iB(f) ? f.f() : f
}
b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
} //b2d.ptsMinus = b2d.vertsMinus =
v.add = v.a = function () {
	var v = this, g = G(arguments) //if (g.t) {return _.m(g, function (g) {return v.add(g)})}
	var v1 = g.u ? V(1, 1) : V(g.f, g.s)
	return V(v.x + v1.x, v.y + v1.y)
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
$pol = $poly = function (pD, xy) {
	pD = S(pD) ? $vs[pD] : pD
	return $pD(pD).maybeTl(xy)
}
b2d.toFxt = b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}
gpc.iPol = function (a) {
	// = b2d.iG = b2d.iGP = b2d.isGPoly
	return O(a) && F(a.isHole)
}
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.isGPoly = b2d.iG = b2d.iGP = function (a) {
	return O(a) && F(a.isHole)
}
b2d.gpcPD = M.p = function () {
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, vs
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		vs = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			vs = vs.uni(v)
		})
	}
	else {
		vs = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(vs)
}
b2d.divPoints = b2d.divPts = b2d.vs = function () {
	var g = G(arguments)
	//all this does is to 'scale down' a series of points
	//can pass in pts naked OR in an array
	return _.m(
			g.s ? g : //passed in verts ([],[],[])
					g.f,
			b2d.div
	) //passed an array [[],[],[]]
	//b2d.div <- function div(v){return V(v).div()}	
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
f.area = f.A = function () {
	return M.p(this).getArea()
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
w.ps = function (x, y, p) {
	alert('w.ps is high level')
	p.ps(this.D(x, y), function (p) {
		b1.pol(p)
	})
}
w.cleanup = function () {
	w.e(function (b) {
		if (!b.IsActive) {
		}
	})
}
w.withBul = w.withCollideBul = w.cxBul = function (k, fn) {
	var w = this
	this.b(function (cx) {
		cx.w('bul', k, fn)
	})
}
w.$$fall = function () {
	var w = this
	w.$$(function () {
		w.fall()
	})
	return w
}
w.fall = function () {
	return this.e(function (b) {
		b.dyn()
	})
}
//subtract from one vert
v.sub = v.s = function () {
	var v = this, g = G(arguments), o
	o = V(g.f, g.s)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	return V(v.x - o.x, v.y - o.y)
}
//subtract from a whole bunch of verts and get back array
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
w.pDraw = function (p, x, y) {
	var w = this, b = w.S(0, 0)
	b.pol({
		v: M.p(p).plus(x || 0, y || 0).vs(),
		c: 'w', C: 'x', l: 10
	})
	return p
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