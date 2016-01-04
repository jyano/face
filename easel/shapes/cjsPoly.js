ct.art = function (x, y, f, s) {
	var g = G(arguments)
	if (U(x)) {
		alert('must at LEAST define x');
		return
	}
	if (!N(x)) {
		alert('x not a number! but must be, lah');
		return
	}
	y = N(g[1]) ? g[1] : x
	f = S(g[2]) ? oO('c', g[2]) : null
	s = S(g[2]) ? oO('c', g[3]) : f
	var shp = cjs.shp(x, y, f, s)
	this.A(shp)
	if (g.p) {
		shp.drag()
	}
	return shp
}
h.poly = function (vxs, f, s, wd) {
	var h = this, g = arguments
	h.FS(f, s, wd)
	_.e(g, A(vxs) && N(vxs[0]) ?
			function ltXY(v) {
				h.lt(v[0], v[1])
			} :
			function lt(v) {
				h.lt(v)
			})
	h.cp()
	return h
}
h.pol = function () {
	var h = this,
			g = G(arguments), o; //O$ >>  O(o) && !F(o) && !A(o)
	h.ef().es()
	o = O$(g.f) ? g.f :
			N(g.s) && N(g.t) ?
			{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
			{v: g.f, c: g.s, C: g.t, l: g.fo}
	o.v = M.os(o.v, o.x, o.y)
	h.c(oDef(o || {}))
	!o.bf ? h.lt(o.v).cp() :
			h.bf(S(o.bf) ? o.bf : 'me', function draw() {
				h.mt(o.v).cp()
			})
	return h
}
ct.pol = ct.poly = function () {
	var ct = this,
			g = G(arguments)
	var h = ct.h()
	if (N(g.f)) {
		h.XY(g.shift(), g.shift())
	}
	h = ct.h() //  alt: h = $a(h, 'pol', g)
	h.poly.apply(h, g)
	return !g.p ? h : h.drag()
}
cjs.diamond = function (w, h, fc, sc) {
	var h = $H(), gx = h.graphics;
	fc = fc || 'green';
	sc = sc || 'white';
	w = w || 100;
	h = h || w
	var hW = w / 2
	var hH = h / 2
	//var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -hW)
			.lt(-hW, 0).lt(0, hW)
			.lt(hW, 0).lt(0, -hW)
	//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
	function alt() {
		cjs.diamond = function self(width, height, fc, sc) {
			fc = fc || 'green'
			sc = sc || 'white'
			width = width || 100
			height = height || width
			halfwidth = width / 2
			halfheight = height / 2
			var h = new createjs.Shape()
			h.graphics.f(fc).s(sc)
					.mt(0, -halfheight)
					.lt(-halfwidth, 0).lt(0, halfheight)
					.lt(halfwidth, 0).lt(0, -halfheight)
			return h
		}
	}
}
h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
	var h = this, gx = h.graphics, g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
	o = N(g[3]) ? {
		x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
	} :
			N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
					O(g.f) ? g.f : {}
	o.a = N(o.a, 0);
	o.x = N(o.x, 0);
	o.y = N(o.y, 0)
	o.p = _.cap(o.p, 0, .99)
	gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
	return h
	function alt() {
		h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
			var h = this, gx = h.graphics,
					g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
			o = N(g[3]) ? {
				x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
			} :
					N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :
							O(g[0]) ? g[0] : {}
			o.a = _.tN(o.a)
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.p = _.cap(o.p, 0, .99)
			gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
			return h
		}
	}
}
h.drawPolygon = function (poly, sc) {
	// = h.drawConnectedLines
	var h = this,
			numVerts = poly.length
	_.e(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this.f(fc)
	//if (sc) {
	h.c(sc)
	//}
	_.e(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
}
h.vs = function (vs, x, y) {
	return this.mt(M.os(vs, x, y))
	//  takes [pt,pt..] and draws it.. with optional offsets..
	//used by (but NOT  dependent on) gPoly 
	// ** previously: ***
	//o = {v: g.f, ox: g.s, oy: g.t}
	//o.ox = N(o.ox, 0)
	//o.oy = N(o.oy, 0)
	//h.mt(_.f(o.v)[0] + o.ox, _.f(o.v)[1] + o.oy)
	//_.eR(o.v, function (v) {h.lt(v[0] + o.ox, v[1] + o.oy)})
	//return h
}
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
function needsStagePoly() {
	POL2 = XX2 = EASELCONVEX8 = function () {
		s = $St()
		s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
		s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
		s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
	}
	POL3 = CPOL4 = function () {
		St()
		vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
		//h.lt([450, 410],[600, 500], [500, 500])
		//h.lt([[450, 410], [600, 500], [500, 500]])
		//h.lt( V(450, 410), V(600, 500), V(500, 500))
		h.pol({
			c: 'r',
			C: 'b',
			l: 20,
			v: vs
		})
	}
}
POL5 = CPOL0 = function () {
	__St()
	vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.pol({
		c: 'r',
		C: 'b',
		l: 20,
		v: vs
	})
}
POL0 = HPOLY8 = function () {
	St()
	v = [[-100, 0], [0, -100], [100, 50]]
	s.h(600, 300).poly({v: v, bf: 'me'})
	s.h(900, 300).poly({v: v, lf: 1})
	s.h(800, 300).poly({v: v, rf: 1})
	h = s.h(200, 300).drag().bf('me', function () {
		h.dc([150], [200, 0, 150])
	})
	st.u()
}//C
POL1 = HPOL = function () {
	st = $St()
	h = st.h('+').XY(0, 0)
	h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
	h.pol(vs1, 'r', 'y', 30)
	h.pol(vs1, 200, 200, 'r', 'y', 3)
}
POL4 = POLY = EVEX = EASELCONVEX = function () {
	s = cjs.S()
	s.poly([[-100, -10], [0, 100], [100, 20]],
			'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly(
			[[-40, 40], [-40, -40], [40, -40], [40, 30]],
			'blue', 'white').XY(200, 200)
}
POL = function () {
	$St().Gx().FS()._mt(100, 300)
			._lt(300, 100)._lt(500, 200)._lt(800, 200)
			._lt(100, 300)
			._pol(vs1)
}
GXPOL = ERR = function () {
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	$St().Gx().FS().pol([vs1])
}
CEN = YSTAR = CSH = CENTERSHAPE = function () {
	stage = $St(500, 600)
	shape = stage.Sh()
	gx = shape.graphics.FS()
	SL(shape)
	shape.rec(0, 0, 100, 100, 'a')
	shape.rec(0, -75, 25, 50, 'b')
	shape.rec(0, -200, 100, 100, 'r')
	shape.cir(100, 200, 40, 'z', 'x')
	gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	gx.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.XY(200)
		me.sXY(.4)
	})
	CENTERSHAPE9 = function () {
		z()
		stage = $St(500, 600).A()
		shape = stage.Shape();
		SL(shape)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.cir(100, 200, 40, 'z', 'x')
		shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		shape.g.beginFill("orange").drawPolyStar(
				100, 100, 50, 5, 0.6, -90)
		shape.xy(200)
		stage.bm('me', function (b) {
			me = b
			me.rgc()
			me.xy(200)
			me.sXY(.4)
		})
	}
}