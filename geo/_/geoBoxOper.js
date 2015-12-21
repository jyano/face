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
b.cutPol = b.difFromPol = b.difPol = b.subMe = b.scrapeMeWithPol = b.pDWo = b.gPolWo = function (pD) {
	var b = this
	b.fs(function (f) {
		pD = pD.D(f)
	})
	return pD
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
function boxUni() {
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		return $uni(this, b1).vs(this, '-')
	}
	w.polU = function (x, y, p1, p2) {
		return this.pol(x, y, M.p(p1).U(p2))
	}
	w.polS = function () {
		alert('you found w.polS');
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
	b2d.glu = function (a, b) {
		return a.glu(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments), n, fs
		fs = b.fs()
		if (g.u) {
			return g.p ? UNI(fs).reg(b) : b2d.u(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g[0]) && !F(g[0])) {
			return b.f().uni(b2d.tF(g[0]))
		}
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.jA) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.reg(b)
//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
	b.sum = function (b1) {
		var b = this
		return UNI(b, b1).vs(b, '-')
	}
	b.sum = function (b1) {
		return $UNI(this, b1).vs(this, '-')
	}
	b.U = function () {
		var b = this, g = G(arguments)
		var pD = b.pD()
		g.e(function (arg) {
			pD = pD.U(arg)
		})
		return pD.tlNeg(b)
	}
	b.uni = function () {
		var b = this, g = G(arguments)
		var fs = b.fs()
		if (g.u) {
			return !g.n ? $UNI(fs).tlNeg(b) :
					$UNI(fs)
		}
		//unite with fixt or first-fixt(of body)
		if (O(g.f) && !F(g.s)) {
			return b.f().uni(b2d.tF(g.f))
		}
	}
	w.polU = function (x, y, p1, p2) {
		var w = this, p
		p = w.pol(x, y, M.p(p1).U(p2))
		return p
	}
	w.polU = function (x, y, p1, p2) {
		//alert('w.polU')
		return this.pol(x, y, M.p(p1).U(p2))
	}
	f.uni = function () {
		var f = this,
				b = f.B(), g = G(arguments), p, n
		//can handle a fixt OR a body!
		//-> [f]
		if (g.A) {
			return $a(f, 'uni', g.f)
		}
		p = M.p(f).U(g.f)
		g.eR(function (f) {
			p = p.U(f)
		})
		return p.tlNeg(b)
		//n= p.getNumInnerPoly()
		//to do now!
		//if it receives a body, i should uni all thatbody's fixs against it
		//dont worry about rebuilding the body first? hmm....
	}
}
