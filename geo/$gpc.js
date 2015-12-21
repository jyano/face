$L()
 
 function polys(){
	 pS.gIP = function (n) {
		 // = pS.getPoly = pS.g
		 return this.getInnerPoly(n || 0)
		 function docs() {
			 //GETS ITSELF? //useless?
		 }
	 }
	 pD.numPol = pS.numPol = pD.nPol = pS.nPol = pD.nIP = pS.nIP = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP = function getNumInnerPoly() {
		 return this.getNumInnerPoly()
	 }
	 pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g = function (n) {
		 return this.getInnerPoly(n || 0)
	 }
	 pD.eIPol = pD.polies = pD.ePol = pS.ePol = pD.each = pD.e = pD.eP = function (fn) {
		 var pD = this
		 var polys = []
		 _.t(pD.nIP(), function (pol) {
			 polys.push(pD.g(pol))
		 })
		 if (F(fn)) {
			 _.e(polys, fn);
			 return pD
		 } //_.t(pD.nIP(), function (i) {fn(pD.g(i), pD, i)}) //_.t(pD.nIP(), function (n) {fn(pD.iPol(n), n, nIP)})
		 return polys
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
	 pD.hasAtLeastOnePoly = function () {
		 return this.m_List.get(0)
	 }
	 pD.pol = function (b) {
		 var p = this
		 p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		 // w.pol(v.x, v.y, p) -> p.pol(w,v)?
		 p.ps(b, function (p) {
			 b.pol(p)
		 })
		 return p
	 }//pD.polygons =
 }
function ponts() {
	pD.pts = pD.vs = function (fn) {
		var p = this, g = G(arguments), vs = []
		_.t(p.n(), function (i) {
			vs.push([p.getX(i), p.getY(i)])
		})
		if (g.n) {
			vs = _.m(vs, function (v) {
				return V(v).sub(g[0])
			})
		}
		if (g.p) {
			vs = _.m(vs, function (v) {
				return V(v).add(g[0])
			})
		}
		if (F(fn)) {
			_.e(vs, function (v) {
				fn(v)
			})
			return p
		}
		return vs
	}	
	pD.pts = pD.vs = function (fn) {
		var pD = this, g = G(arguments), o
		o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
		vs = g.n ? b2d.sub(pD.pts(), o.n) :
				g.p ? b2d.add(pD.pts(), o.n) :
						pD.pts()
		if (o.fn) {
			_.e(vs, o.fn);
			return pD
		}
		return vs
		//pD.points =//used in MEET	
	}
	
	pD.nPts = pS.nPts = pS.n = pD.n = function getNumPoints() {
		return this.getNumPoints()
	}
	pS.X = pD.X = function getX(i) {
		// = pS.x = pD.x = pS.gX = pD.gX 
		return this.getX(i)
	}
	pS.Y = pD.Y = function getY(i) {

//=pS.y = pD.y = pS.gY = pD.gY
		return this.getY(i)
	}
	pS.pt = pD.pt = function (i) {
		return [this.gX(i), this.gY(i)]
	}
	pS.pts = function () {

//= pS.vs = pS.ptsArr = ps.ptsArray = ps.verts = ps.pts
		var pS = this, pts = []
		_.t(pS.num(), function (i) {
			var pt = [pS.getX(i), pS.getY(i)]
			pts.push(pt)
		})
		return pts
	}
	pS.pts = pD.pts = function (fn) {
		//= pS.ePt = pS.vsArr = pS.vs = pS.pts = pS.vs
		// =  pD.ePt = pD.vsArr
		var pS = this
		var vs = []
		_.t(pS.nPts(), function (index) {
			vs.push(pS.pt(index))
		})
		if (F(fn)) {
			_.e(vs, function (v, i) {
				fn(v, i, vs)
			});
			return pS
		}
		return vs
	}
}
function addPts() {
	pS.aPt = pD.aPt = function (pts) {
		// = pS.A = pD.A
		var pS = this
		_.e(A(pts) ? pts : [pts],
				function (pt) {
					pS.addPoint(V(pt))
				})
		return pS
	}
	pD.A = pD.addPoints = function (pts) {
		var p = this
		if (A(pts)) {
			_.e(pts, function (pt) {
				p.addPoint(V(pt))
			})
		}
		return p
	}
	pD.addPoints = pD.A = function (pts) {
		var p = this
		if (A(pts)) {
			_.e(pts, function (pt) {
				p.addPoint(V(pt))
			})
		}
		return p
	}
}
function type() {
	pS.ty = function () {
		// = pS.type
		return ('pS')
	}
	pD.ty = function () {
		//= pD.type
		return ('pD')
	}
}
function oper() {
	pD.U = function (p) {
		var pD = this, g = G(arguments)
		g.e(function (pol) {
			pD = pD.union(gpc.p(pol))
		})
		return pD
	}
	pD.D = function () {
		var pD = this,
				g = G(arguments)
		g.e(function (pol) {
			pD = pD.difference(gpc.p(pol))
		})
		return pD
	}
	pD.I = pD.intersection
	pD.X = pD.xor
}
 

	pD.ger = function (x, y) {
		var p = this, v = V(x, y);
		return p.reg(-v.x, -v.y)
	}
	pD.wV = pS.wV = pS.tlNeg = pS.reg = pS.toRelativePoints = pS.mapToBoxWorld = function (b) {
		
		// 
		var p = this, g = G(arguments), o
		var vs = p.vs(), b
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g.f, g.s)
		return M.p(vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		}))
	}
	pD.tlNeg = pD.reg = function (x, y) {
		var pD = this
		var v = V(x, y)
		return M.p(b2d.sub(pD.vs(), v))
	}// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
	pD.tl = function (x, y) {
		var pD = this
		return M.p(b2d.add(pD.vs(), V(x, y)))
	}//pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
	pD.maybeTl = function (xy) {
		var pD = this
		return xy ? pD.tl(xy) : pD
	}//= pD.maybeHere
 
 

function helpers(){
	Cols = gpc.Cols = ['r', 'g', 'o', 'B'];
	cols2 = gpc.cols2 = ['r', 'g', 'b', 'y']
	col = gpc.col = "rgba(255, 0, 0, 0.1)"
	cols = gpc.cols = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
	gpc.ops = ['difference', 'intersection', 'union', 'xor']
}
function alpha() {
	pD.ifHasPol = function () {
		var pD = this
		if (pD.hasAtLeastOnePoly()) {
			return pD
		}
	}
	pD.bigEnough = function () {
		return this.getArea() > 2000
	}
	pD.tooSmall = function () {
		return !this.bigEnough()
	}
}
function _pre(){
	gpc = gpcas
	// other lib:  http://jsclipper.sourceforge.net/6.1.3.2/main_demo.html
	gpc.g = gpc.geometry
	PolyDefault = gpc.g.PolyDefault;
	ArrayList = gpc.util.ArrayList;
	PolySimple = gpc.g.PolySimple;
	Clip = gpc.g.Clip;
	OperationType = gpc.g.OperationType;
	LmtTable = gpc.g.LmtTable;
	ScanBeamTreeEntries = gpc.g.ScanBeamTreeEntries;
	EdgeTable = gpc.g.EdgeTable;
	EdgeNode = gpc.g.EdgeNode;
	ScanBeamTree = gpc.g.ScanBeamTree;
	Rectangle = gpc.g.Rectangle;
	BundleState = gpc.g.BundleState;
	LmtNode = gpc.g.LmtNode;
	TopPolygonNode = gpc.g.TopPolygonNode;
	AetTree = gpc.g.AetTree;
	HState = gpc.g.HState;
	VertexType = gpc.g.VertexType;
	VertexNode = gpc.g.VertexNode;
	PolygonNode = gpc.g.PolygonNode;
	ItNodeTable = gpc.g.ItNodeTable;
	StNode = gpc.g.StNode;
	ItNode = gpc.g.ItNode;
	gpc.PS = gpc.g.PolySimple
	gpc.PD = gpc.g.PolyDefault
	pS = ps = $pt.pS = gpc.PS.prototype
	pD = $pt.pD = gpc.PD.prototype
}
gpc.iPg = gpc.isPol = function (a) {
	return O(a) && F(a.isHole)
}
gpc.iPD = gpc.iDP = gpc.iD = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pD'
}
gpc.iPS = gpc.iSP = gpc.iS = function (pol) {
	return gpc.isPol(pol) && pol.ty == 'pS'
}
b2d.iGP = function (a) {
//=b2d.isGPoly 
	return O(a) && F(a.isHole)
}

 
 