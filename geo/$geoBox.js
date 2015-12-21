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
b2d.polyDot = function (verts) {// see f.dots
	var t = 0
	_.each(
			A(verts) ? verts : verts.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t)
				t += 100
			}
	)
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
b2d.add = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).add(p)
	})
}
b2d.glu = function (a, b) {
	return a.glu(b)
}
b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}
b2d.hV = b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.ol = b2d.overlapping = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
}
b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
	return O(a) && F(a.isHole)
}
b2d.recV = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH], [x + hW, y + hH], [x - hW, y + hH]]
}
b2d.fixt = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
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
b2d.overlapping = function (b1, b2) {
	var v1 = b1.polyVerts(),
			v2 = b2.polyVerts()
	var p = v1.union(v2)
	return !(_.isEqual(p.verts(), v1.verts()) ||
	_.isEqual(p.verts(), v2.verts()))
}
b2d.overlapping = b2d.ol = function (b1, b2) {
	alert('b2d.ol overlapping')
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
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
	var h = f.()
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
f.A = f.area = function () {
	return M.p(this).getArea()
}
w.ter = function () {
	var w = this, ter = []
	_.t(13, function (i) {
		_.t(8, function (j) {
			var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			ter.push({
				b: b,
				vs: b.f().vs(),
				p: M.p([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)])
			})
		})
	})
	return ter
}
f.poly = f.polyVerts = function () {
	return Math.poly(this.V())
}
// dif
f.sub = f.DIF = f.DIFF = function (b2) {
	var f = this, g = G(arguments), b2 = g[0]
	f.body().conc(f.minus(b2))
	f.kill()
	if (g.n) {
		b2.kill()
	}
	return this
}
f.minus = f.diff = function (bOrF) {
	var f = this, b = f.body(), verts, poly
	//can handle a fixt OR a body! or even a gPoly itself!
	poly = f.polyVerts().difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	_.each(_.rest(arguments), function (bOrF) {
		poly = poly.difference(b2d.isGPoly(bOrF) ? bOrF : bOrF.polyVerts())
	})
	if (b2d.hasVerts(poly)) {
		return b.rel(poly)
	}
}
/// uni
f.union = function (f2) {
	var f = this,
			b = f.body(), p //can handle a fixt OR a body!
	if (A(f2)) {
		return this.union.apply(this, f2)
	}
	p = f.polyVerts().union(
			f2.polyVerts()
	)
	_.each(_.rest(arguments), function (f) {
		p = p.union(f.polyVerts())
	})
	return b.rel(p)
}
FVS = function () {
	W()
	b = w.D(300, 300, 'r', [[80, 40, 0, 0, 3]])
	f = b.f()
	//f1 = b.cir(20)
	f.vs()
}
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
b.polyClone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		b.poly.apply(b, _.map(f.verts(), function (v) {
			return [v.x, v.y]
		}))
	})
	return b
}
b.clone = function (x, y, rot) {
	x = N(x) ? x : this.X()
	y = N(y) ? y : this.Y()
	rot = N(rot) ? rot : this.rot()
	var that = this,
			b = w.B(x, y).type(that.type()).rot(rot)
	_.each(that.fixts(), function (f) {
		var h, x, y, r
		if (f.isCirc()) {
			h = f.shape()
			x = h.m_p.x * 30
			y = h.m_p.y * 30
			r = h.m_radius * 30
			b.circ(r, x, y)
		}
		else {
			b.poly(f.verts())
		}
	})
	return b
}
 
b2d.ptsMinus = b2d.vertsMinus = b2d.sub = function (vs, p) {
	return _.m(vs, function (v) {
		return V(v).sub(p)
	})
}
b.toPositivePoints = b.mapToGPoly = b.reg = b.rel = function (p) {
	$l('b.reg')
	var b = this
	//my poly operations can only work with POSITIVE vertices
	//but box2d needs fixt vertices specified relative to a body
	//so this allows the body that the operation was based on to take responsibility
	//for converting them back
	//you can pass in the verts, or the gPoly itself!
	var vs = gpc.iP(p) ? p.vs() : p
	return _.m(vs, function (v) {
		v = V(v);
		return V(v.x - b.X(), v.y - b.Y())
	})
	//this returns [V,V,V...]
}
  