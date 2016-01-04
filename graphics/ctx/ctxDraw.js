$L('path', 'poly', 'curve','rec')

function path(){
	x.iP = x.ptInPth = function (x, y) {
		return this.isPointInPath(x, y)
	}
	x.b = x.beg = x.bP = function () {
		var g = G(arguments)
		this.beginPath()
		if (g.u) {
			return this
		}
		if (g.N_) {
			this.mt(g.f, g.s)
			if (g.t) {
				this.c(g.t, g[3], g[4])
			}
		}
		else {
			this.c.apply(this, g)
		}
		return this
	}
	x.mt = function () {
		var x = this, g = G(arguments)
		if (g.A_) {
			x.mt(g.f[0], g.f[1])
			g.eR(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.moveTo(N(g.f, 0), N(g.s, 0))
			if (N(g.t)) {
				x.lt(g.t, g[3])
			}
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.lt = function () {
		var g = G(arguments), x = this
		if (g.A_ && A(g.f[0])) {
			x.lt.apply(x, g.f)
		}
		else if (O(g.s)) {
			g.e(function (pt) {
				x.lt(pt[0], pt[1])
			})
		}
		else {
			x.lineTo(g.f, g.s)
		}
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.l = x.lW = function (n) {
		var g = G(arguments)
		if (!g.n) {
			this.lineWidth = n;
			return this
		}
		return this.lt(g.f, g.s)
	}
	x.cP = x.x = x.cp = function () {
		this.closePath();
		return this
	}
	x.lC = function (c) {
		var g = G(arguments);
		if (c == 'r') {
			c = 'round'
		}
		else if (c == 'r') {
			c = 'square'
		}
		else if (c == 'b') {
			c = 'but'
		}
		this.lineCap = c
		return this
	}
	x.lJ = function (n) {
		var g = G(arguments);
		if (g.N) {
			this.lineJoin = n;
			return this
		}
	}}
function rec(){
	x.r = function () {
		var ctx = this, g = G(arguments), o
		o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, ctx.W())
		o.h = N(o.h, ctx.H())
		ctx.rect(o.x, o.y, o.w, o.h)
		return ctx
	}
	x.fr = x.fR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.fr2 = x.fR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.sR = x.sr = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.sr2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.cR = x.clR = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x, o.y, o.w, o.h)
		return this
	}
	x.cr2 = x.cR2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}
	x.r2 = function (x, y, w, h) {
		var g = G(arguments), o
		o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
				N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
				{w: g.f, h: g.s}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, this.W())
		o.h = N(o.h, this.H())
		this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
		return this
	}

}
function poly(){
	x.pol = function (vs, ox, oy) {
		var x = this, i
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
		_.e(_.r(vs), function (v) {
			x.lt(v[0] + ox, v[1] + oy)
		})
		return x.cp().s().f()
	}
	x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
		var x = this
		ox = N(ox, 0);
		oy = N(oy, 0)
		x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
		_.e(_.r(vxs), function (vx) {
			x.lt(vx[0] + ox, vx[1] + oy);
		})
		x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
		if (hole) {
			x.fS("#ffffff")
		}
		x.cp().s().f()
	}
}
function curve() {
	x.a = function () {
		var g = G(arguments), x = this,
				o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
				{r: g.f}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		o.rt1 = N(o.rt1, 0)
		o.rt2 = N(o.rt2, 360)
		o.ccw = g.n ? true : false
		this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.arc2 = x.at = function () {
		var g = G(arguments), o
		o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
		this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
		return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
	}
	x.quadratic = x.qt = function () {
		this.quadraticCurveTo();
		return this
	}
}

CVDR= CVDRAW=CV1 = FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
CVFS = XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
CVPOL = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPol(flatTri, 'r', 'v')
}
GPC = CTXGPC = function () {
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
	function alt() {
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
		}
	}
}