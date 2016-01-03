window.$pt = window.$pt || {}
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
$L('type', 'bool', 'polys', 'points','opers','hole','clipCan')
$gP = function (pts) { 
	// = M.poly
	var pD = new gpc.PD()
	pD.aPts(pts)
	return pD
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
}
function bool() {
	b2d.iGP = gpc.iPol = function (a) {
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function polys(){
//get number of pols
	pD.nIP = pS.nIP = pD.numPol = function () {
// =pS.numPol = pD.nPol = pS.nPol = ps.numInnerPolygons = ps.numPolys = ps.nP = pD.numPolys = pD.nP
		return this.getNumInnerPoly()
	}
//get inner pol
	pD.g=pS.gIP = function (n) {
		// = pS.getPoly = pS.g = pD.iPol = pD.pg = pD.iPg = pD.inP = pD.getPoly = pD.gIP = pD.g
		return this.getInnerPoly(n || 0)
		function docs() {
			//GETS ITSELF? //useless?
		}
	}
// iterate over ALL inner pols
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
// get num of points of a pol
	pD.nPts = pS.nPts = pS.n = pD.n = function () {
		return this.getNumPoints()
	}
//get a point from an index poly
	pS.pt = pD.pt = function (i) {
		var pol = this
		return [pol.X(i), pol.Y(i)]
	}
//add a point to a poly
	pS.aPt = pD.aPt = pD.A = pD.addPoints = function (pts) {
		// = pS.A = pD.A
		var pol = this
		pts = A(pts) ? pts : [pts]
		_.e(pts, function (pt) {
			pol.addPoint(V(pt))
		})
		return pol
	}
}
function points(){

//get or iterate all the pts of 1/more? pol
	pD.pts = function (fn) {
		var pD = this, g = G(arguments), o
		//= pD.vs
		o = g.F ? {fn: g.f} : {n: g.f, fn: g.s}
		var pts = g.n ? b2d.sub(pD.pts(), o.n) :
				g.p ? b2d.add(pD.pts(), o.n) :
						pD.pts()
		if (o.fn) {
			_.e(pts, o.fn);
			return pD
		}
		return pts
		function docs() {
			
			//used in MEET
			//= pD.vs = pD.points =	
			function alt() {
				pD.pts = pD.vs = function (fn) {
					var p = this, g = G(arguments), o
					var pts = []
					_.t(p.n(), function (i) {
						pts.push([p.getX(i), p.getY(i)])
					})
					if (g.n) {
						pts = _.m(pts, function (v) {
							return V(v).sub(g[0])
						})
					}
					if (g.p) {
						pts = _.m(pts, function (v) {
							return V(v).add(g[0])
						})
					}
					if (F(fn)) {
						_.e(pts, function (v) {
							fn(v)
						})
						return p
					}
					return pts
				}
			}
		}
	}
	pS.pts = pD.pts = function (fn) {
		var pS = this, pts = []
		_.t(pS.nPts(), function (index) {
			var pt = pS.pt(index)
			pts.push(pt)
			//alt:_.t(pS.num(), function (i) {var pt = [pS.getX(i), pS.getY(i)]pts.push(pt)})
		})
		if (F(fn)) {
			_.e(pts, function (v, i) {
				fn(v, i, pts)
			});
			return pS
		}
		return pts
		function docs() {
			//= pS.vs = pS.ptsArr = ps.ptsArray = ps.verts = ps.pts
//= pS.ePt = pS.vsArr = pS.vs = pS.pts = pS.vs
// =  pD.ePt = pD.vsArr
		}
	}
//get x val of an index pt
	pS.X = pD.X = function (i) {
		// = pS.x = pD.x = pS.gX = pD.gX 
		return this.getX(i)
	}
//get y val of an index pt
	pS.Y = pD.Y = function (i) {

//=pS.y = pD.y = pS.gY = pD.gY
		return this.getY(i)
	}
}
function opers(){
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
//
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
	pD.plus = function (x, y) {
		return M.p(_.m(this.pts(), function (v) {
					return V(v).add(x || 0, y || 0)
				}
		))
	}
	pD.U = function () {
		var pD = this, g = G(arguments), uP
		if (b2d.iB(g.f)) {
			uP = pD.U(g[0].f())
			_.eR(g.f.fs(), function (f) {
				uP = pD.U(f)
			})
			return uP
		}
		return pD.union(M.p(g[0]))
		function alt() {
			pD.U = function () {
				var pD = this, g = G(arguments),
						uP
				if (b2d.iB(g[0])) {
					uP = pD.U(g[0].f())
					_.eR(g[0].fs(), function (f) {
						uP = pD.U(f)
					})
					return uP
				}
				return pD.union(M.p(g[0]))
			}
		}
	}
//
	pD.minus = function (x, y) {
		var p = this,
				pts = p.pts()
		pts = _.m(pts, function (v) {
			v = V(v)
			return v.sub(x || 0, y || 0)
		})
		return M.p(pts)
	}
	pD.D = function () {
		var pD = this
		G(arguments).e(function (pol) {
			pD = pD._D(pol)
		})
		return pD
	}
	$pD = gpc.pD = gpc.p = function (pts) {
		
		//make new polyDefault
		//can add points to it
		if (gpc.isPol(pts)) {
			return pts
		}
		//if (S(pts)){ pts = $vs[pts] }
		//ok so if it is already a gPoly, just return it..
		//but if not (it is points).. so make a new gPoly (default) and return it
		var pD = new gpc.PD
		return pts ? pD.A(pts) : pD
	}
}
function hole() {
	b2d.iGP = gpc.iPol = function (a) {
		// = b2d.iG  = b2d.isGPoly
		return O(a) && F(a.isHole)
	}
//gpc.hV = gpc.hPt = gpc.hasVertex = function (gP) {return gP.m_List.get(0)  }//used in MEET
	pD.hasAtLeastOnePoly = function () {
		return this.m_List.get(0)
	}
	pD.isPolyless = pD.hasNoPolys = function () {
		return !this.hasAtLeastOnePoly()
	}
}
function _alpha() {
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
pD.tl = function (x, y) {
	var pts = this.pts()
	return $gP(b2d.add(pts, V(x, y)))
	function docs() {
		//=pD.tlAdd = pD.butHere = pD.to = pD.at = pD.ger =
		function possibleAlt() {
			pD.ger = function (x, y) {
				var pD = this
				var v = V(x, y);
				pD = pD.reg(-v.x, -v.y)
				return pD
			}
		}
	}
}
pD.tlNeg = function (x, y) {
	// = pD.reg
	var pts = this.pts()
	return $gP(b2d.sub(pts, V(x, y)))
// pD.tl2 = pD.translate =   pD.from = pD.cameFrom =pD.translateBackTo =pD.rel =
}
pD.maybeTl = function (xy) {
	return xy ? this.tl(xy) : this
	//= pD.maybeHere	
}
//p1 = $pD(vs1);
//p2 = $pD(vs2)
function POLYCTX() {
	w.pDraw = function (p, x, y) {
		var w = this,
				b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}
	h.drawPolygon = function (V, c, C, l) {
		var h = this, //h.drawConnectedLines =
				n = V.length
		h.c(c, C, l)
		_.e(V, function (v) {
			v.X = v.x
			v.Y = v.y
		})
		if (n >= 3) {
			h.mt(V[0]) //move to the FIRST//lineTo the REST
			_.in(n, function (i) {
				h.lt(V[i % n])
			})
		}
		//just a clever way to start from 1
		return h
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C)
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	x.setup = function () {
		var x = this
		x.clearRect(0, 0, 400, 400)
		x.drawPolyD(pol1, "blue", 0, -30);
		x.drawPolyD(pol2, "red", 0, -30);
	}
	x.drawPolyD = function (pD, col, ox, oy) {
		var x = this
		pD.ePol(function (pol, i) {
			x.drawPol(pol.pts(), pD.getCol(i, col), pol.isHole(), ox, oy)
		})
	}
	pD.getCol = function (i, col) {
		return getCol(i, this.numPol(), col)
	}
	function getCol(i, num, strCol) {
//if more than one poly produced, use multiple color to display
		return i == 0 ? strCol :
				["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num]
	}
	
	function createPoly(pts) {
		var res = $pD()
		_.e(pts, function (pt) {
			res.addPoint(new Point(pt[0], pt[1]))
		})
		return res;
	}
	
	function easelCanvasContext() {
		x.Cd = function (i, x, y) {
			var ctx = this
			x = N(x, 100)
			y = N(y, 100)
			i = Q.i(i || 'me')
			ctx.d(i, x - i.W() / 2, y - i.H() / 2)
			return ctx
		}
		x.scImCen = function (i, s, x, y) {
			if (S(i) && i.length < 100) {
				i = Q.i(i)
			}
			x = N(x, 0)
			y = N(y, 0)
			var w = this.W(),
					h = this.H(),
					s = s || 1
			this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
		}
		x.scaleImCenSpiralMe = function () {
			var scaleNum = 1,
					that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.scaleImCenSpiral = function () {
			var scaleNum = 1, that = this
			_.t(100, function () {
				that.scaleImCen('me', scaleNum)
				scaleNum *= .9
			})
		}
		x.cjsTick = x.tick = function (func) {
			var x = this
			cjs.tick(function () {
				x.temp(func)
			})
			return this
		}
		tempDrawOnTickerTick = x.t = function (fn) {
			var x = this;
			T.t(function () {
				x.temp(fn)
			});
			return this
		}
	}
	
	w.pDraw = function (p, x, y) {
		var w = this, b = w.S(0, 0)
		b.pol({
			v: M.p(p).plus(x || 0, y || 0).vs(),
			c: 'w', C: 'x', l: 10
		})
		return p
	}

	createPoly = function (points) {
		var res = $pD()
		for (var i = 0; i < points.length; i++) {
			res.addPoint(new Point(points[i][0], points[i][1]));
		}
		return res;
	}
	vs1 = v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
		[105, 200], [141, 163], [48, 139], [74, 117]]
	vs2 = v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	colsArr = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
	vertices1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	poly1 = p1 = createPoly(vertices1);
	vertices2 = p2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	poly2 = createPoly(vertices2);
	opFns = {}
	opFns.difference = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.difference(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.intersection = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.intersection(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.union = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.union(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	opFns.xor = function (e) {
		clearScreen();
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		var diff = poly1.xor(poly2);
		drawPoly(diff, "green", 0, 150);
	}
	getPolygonVertices = function (poly) {
		var vertices = [];
		var numPoints = poly.getNumPoints();
		var i;
		for (i = 0; i < numPoints; i++) {
			vertices.push([poly.getX(i), poly.getY(i)]);
		}
		return vertices;
	}
	drawSinglePoly = function (vertices, strokeColor, hole, ox, oy) {
		var i;
		if (ox == undefined)    ox = 0;
		if (oy == undefined)    oy = 0;
		x.beginPath();
		x.moveTo(vertices[0][0] + ox, vertices[0][1] + oy);
		for (i = 1; i < vertices.length; i++) {
			x.lineTo(vertices[i][0] + ox, vertices[i][1] + oy);
		}
		x.lineWidth = 12
		x.strokeStyle = strokeColor;
		x.fillStyle = "rgba(255, 0, 0, 0.1)";
		if (hole == true) {
			x.fillStyle = "#ffffff";
		}
		x.closePath();
		x.stroke();
		x.fill();
	}
	clearScreen = function () {
		x.clearRect(0, 0, 400, 400);
	}
	colors = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]//if more than one poly produced, use multiple color to display
	drawPoly = function (polygon, strokeColor, ox, oy) {
		var num = polygon.getNumInnerPoly();
		var i;
		for (i = 0; i < num; i++) {
			var poly = polygon.getInnerPoly(i);
			var vertices = getPolygonVertices(poly);
			if (i == 0) {
				drawSinglePoly(vertices, strokeColor, poly.isHole(), ox, oy);
			}
			else {
				drawSinglePoly(vertices, colors[i % num], poly.isHole(), ox, oy);
			}
		}
	}
	GP = function () {
		$('<title>GPCJS example</title>').A()
		$cv = $('<canvas id="canvas" width="400px" height="400px">').A();
		canvas = $cv[0];
		x = $cv.ctx()
		drawPoly(poly1, "blue", 0, -30);
		drawPoly(poly2, "red", 0, -30);
		GP.opBtns()
	}
	GP.opBtns = function () {
		opsArr = ['difference', 'intersection', 'union', 'xor']
		$.br().A()
		_.e(opsArr, function (op) {
			$.bt(op, opFns[op]).A()
		})
	}
	GP()
	function alt(){
		GP = function () {
			GP.pols()
			$cv = $.c('c', 400, 400)
			x = $cv.ctx()
			$.br().A()
			_.e(['difference', 'intersection', 'union', 'xor'], function (op) {
				$.bt(op, {
					difference: opFn('difference'),
					intersection: opFn('intersection'),
					union: opFn('union'),
					xor: opFn('xor')
				}[op]).A()
			})
			function opFn(op) {
				return function () {
					x.setup()
					x.drawPolyD(applyOp(op), "green", 0, 150);
				}
				function applyOp(op) {
					return pol1[op](pol2)
				}
			}
			
			x.drawPolyD(pol1, "blue", 0, -30);
			x.drawPolyD(pol2, "red", 0, -30);
		}
		GP.pols = function () {
			vxs1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]]
			vxs2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
			pol1 = createPoly(vxs1);
			pol2 = createPoly(vxs2);
		}}
}