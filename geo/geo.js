$gP$ = function () {
	// = M.p = b2d.gpcPD 
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

$L('polys', 'points', 'extensions')
function polys(){
	 
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
}
function points(){
	bH.vs = function () {
		return this.m_vertices
	}
	pH.vs = pH.verts = function () {
		var verts = this.m_vertices
		return _.m(verts, function (v) {
			return [v.x * 30, v.y * 30]
		})
		function alt() {
			pH.vs = pH.vertsx = function () {
				alert('pH.vs. see boxShapes.js')
				var pH = this
				return _.m(pH.m_vertices, function (v) {
					return [v.x * 30, v.y * 30]
				})
			}
		}
	}
	pH.vec = pH.setAsVec = function (v, sc) {
		var pH = this //used by SepLib
		pH.SetAsVector(_.m(v, function (v) {
			return V(v).d(N(sc, 30))
		}))
		return pH
		function alt() {
			pH.setAsVec = function (vec, scale) {
				scale = N(scale) ? scale : 30
				vec = _.map(vec, function (v) {
					return V(v).div(scale)
				})
				this.SetAsVector(vec)
				return this
			}
		}
	}
	f.wV = function () {
		var f = this, b = f.B(), g = G(arguments),
				vs
		vs = g.n ? f.vs() : f.vs('+')
		return b2d.tA(_.m(vs, function (v) {
			return V(v).add(b)
		}))
	}
	bx.pts = function () {
		var g = G(arguments)
		var pts = g.s ? g : g.f
		return _.m(pts, bx.div)
		function docs() {
			//= b2d.verts
			//all this does is to 'scale down' a series of points
			//can pass in pts naked OR in an array
			//can pass in: (1) verts ([],[],[]) OR (2) an array [[],[],[]]
		}
	}
	bx.recPts = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
		function docs() {
			// =	b2d.recVerts = b2d.recPoints = b2d.recV
		}
	}
	f._pts = function () {
		var f = this
		f.__pts = function () {
			return this.H().m_vertices
		}
		return _.m(f.__pts(), b2d.mult)
	}
	f.locPts = function () {
		var f = this, b = this.B(), g = G(arguments)
		var pts = f._pts()
		return g.p ? _.m(pts, function (v) {
			return v.rt(b.rt())
		}) :
				pts
		function docs() { 	// (optionally rotated locally by body's rotation)
		}
	}
	f.pts = function () {
		var f = this, b = f.B(), g = G(arguments)
		return b2d.tA(_.m(f._pts(), function (v) {
			return g.n ? v : v.rt(b.rt())
		}))
		function docs() {

//=f.vs = f.points = f.verts = f.vertices =
			// 
			/*
			 b2d.tA source :
			 function(vs) {
			 return _.m(vs, function (v) { return [v.x, v.y]  })
			 }
			
			 v.tA:function () { return [v.x, v.y] }
			 */
		}
	}
	f.ptsA = function () {
		var f = this
		return _.m(f.pts(), function (v) {
			v = V(v)
			return [v.x, v.y]
		})
		function docs() {//=f.vsA
		}
	}
	f.wPts = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = g.p ?  // was g.N
				f.pts('+') : f.pts()
		return _.m(pts, function (v) {
			return v.add(b)
		})
		function docs() {
//give world verts of fixt rotated (or optionally, not rotated for some reason)
		}
	}
	f.wPtsA = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = f.pts()
		var pt = V(b.X(), b.Y())
		pts = b2d.add(pts, pt)
		return b2d.tA(pts)
	}
	f.wPtsGP = function () {
		return $pD(this.wPts())
	}
	f.pos = f.cirPos = function () {
		var f = this
		var h = f.H()
		var posPt = h.m_p
		return V(posPt.x, posPt.y).mult()
		function docs() {
			// for circs
		}
	}
	f.GP = function () {
		var f = this
		var pts = f.wPts()
		return $pD(pts)
	}
	b.pts = function (fn) {
		var b = this
		var arr = []
		var pD = b.uni()
		if (F(fn)) {
			pD.ePol(fn);
			return b
		}
		return pD.pts()
		function docs() {
			function alt() {
				b.pts = b.ps = function (fn) {
					var b = this, arr = [], p = b.uni()
					if (F(fn)) {
						p.ps(b, fn);
						return b
					}
					p.ps(b, function (v) {
						arr.push(v)
					})
					return arr
				}
			}
		}
	}
	b.ptsGP = function () {
		var b = this
		var num = this.num()
		if (num == 0) {
			return
		}
		var fs = b.fixts()
		var pg = fs[0]
		if (num == 1) {
			return pg.union(pg)
		}
		_.e(_.r(fs), function (f) {
			f = M.poly(f)
			pg = M.poly(pg.union(f))
		})
		return pg
		function docs() {//		 
			//return this.union()
			//it used to just get from the FIRST fixt,
			//but now it unions them all together :)
			//b.verts = function(){ return this.fixt().verts() }
		}
	}
	b.wPtsGP = function () {
		var b = this, g = G(arguments)
		return b.pD().pts()
	}
	b.wPts = function () {
		var p = this.transform().position.mult()
		return _.m(this.pts(), function (pt) {
			return pt.add(p)
		})
	}
	b.rtWPts = function () {
		var b = this
		return _.m(b.rtPts(), function (v) {
			return V(v.x + b.X(), v.y + b.Y())
		})
	}
	b.rtPts = function () {
		var b = this
		var rt = M.tR(b.rt())
		return _.m(b.pts(), function (v) {
			var v = V(v)
			var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
			var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
			return V(x, y)
		})
		function docs() {
			
			//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
			function alt() {
				b.rtPts = b.rotVerts = function () {//rotated but local
					newX = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.cos(rad) - y * Math.sin(rad)
					}
					newY = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.sin(rad) + y * Math.cos(rad)
					}
					f.Vold = function () {//f.rotVerts=
						return this.wPts()
						newX = function (x, y, rot) {
							rot = Math.toRadians(rot)
							x *= Math.cos(rot).toFixed(3)
							y *= Math.sin(rot).toFixed(3)
							return x - y
						}
						newY = function (x, y, rot) {
							rot = Math.toRadians(rot)
							return (x * Math.sin(rot)) + (y * Math.cos(rot))
						}
						var verts = this.verts(), b = this.B()
						return _.map(verts, function (v) {
							var x = v.x, y = v.y
							return V(
									newX(x, y, b.rot()) + b.X(),
									newY(x, y, b.rot()) + b.Y())
						})
					}//this becomes wVerts
					var b = this, pts = b.verts()
					return _.m(pts, function (v) {
						var x = v.x,
								y = v.y
						return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
					})
				}
			}
			
			//this returns [V,V,V...]
		}
	}
	b.pos = function () {
		return this.tf().position.m()
	}
	b.pgPts = function () {
		return M.poly(this.V())
		function docs() {
//= b.polyVerts
		}
	}
	b.reg = b.rel = function (p) {
		var b = this
		var pts = gpc.iP(p) ? p.pts() : p
		return _.m(pts, function (v) {
			v = V(v)
			return V(v.x - b.X(), v.y - b.Y())
		})
		function docs() {
			//my poly operations can only work with POSITIVE vertices
			//but box2d needs fixt vertices specified relative to a body
			//so this allows the body that the operation was based on to take responsibility
			//for converting them back
			//you can pass in the verts, or the gPoly itself!
			//this returns [V,V,V...]
		}
	}
	b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		if (g.s) {
			return _.m(g, b2d.div)
		}
		//passed in verts ([],[],[])
		return _.m(g.f, b2d.div) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}
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
	b2d.hasVerts = function (poly) {
		return poly.m_List.get(0)
	}
}

function extensions(){
	pS.reg = function (b) {
		//= pS.toRelativePoints = pS.mapToBoxWorld
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g.f, g.s)
		return M.p(vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		}))
	}
	pD.reg = pD.rel = function (b) {
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!
		//what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
	pS.reg = function (b) {
		var p = this, g = G(arguments), vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
}