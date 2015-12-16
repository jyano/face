cH.set = cH.S = function () {
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
pH.set = function (wd) {
	var pH = this, g = G(arguments)
	//this covers all cases for polygons !!!! // ******// !!!!!!!!
	if (N(wd)) {
		pH.box.apply(pH, g)
	}
	else if (O(wd)) {
		pH.arr.apply(pH, g)
	}
	return pH
}
compute()
function compute() {
	bH.seg = h.segment = function (xf, lamb, norm, seg, maxLamb) {//Perform a ray cast against this shape.
		return this.TestSegment(xf,
				lamb,//:Array, returns the hit fraction.
				// You can use this to compute the contact point p = (1 - lambda) segment.p1
				// + lambda segment.p2.
				norm,//:b2Vec2, returns the normal at the contact point.
				// If there is no intersection, the normal is not set.
				seg,//:b2Segment, defines the begin and end point of the ray cast
				maxLamb//:Numbera number typically in the range [0,1]
		)
	}
	bH.RC = function (fn, p1, p2) {
		return this.RayCast(fn, p1, p2)
	}
	bH.CAB = function (v1, v2) {
		var bH = this;
		return bH.ComputeAABB()
	}
	bH.CM = function (mass) {
		var bH = this;
		return bH.ComputeMass()
	}
	bH.CSA = function () {
		var bH = this
		var area = bH.ComputeSubmergedArea()
		return area
	}
}
bH.C = function () {
	return this.Copy()
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
b2d.polySens = function (kind) {//necessary?
	var poly = b2d.poly.apply(null, _.rest(arguments))
	poly.sensor(true).K(kind)
	return poly
}
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
b2d.H = b2d.shape = function (a, b) {
	if (U(b)) {
		return b2d.circH(a)
	}
	return b2d.polyH.apply(b2d, arguments)
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A($cF(50).DBF())
	return b
}
$bi = $XYR = function () {
	var b = w.sB(545, 595)
	return b.A($cF(150).DBF())
}
function less() {
	b2d.A = b2d.Arr = function () {
		return b2d.fixt(b2d.AH.apply(null, arguments)).den(.1)
	}
	b2d.AH = b2d.AShape = function (pam, pam2) {//dep .. use polyH
		var args = (pam2) ? arguments : pam
		var arr = _.map(args, function (vert) {
					return V(vert).div()
				}),
				shape = b2d.polyH()
		shape.sAA(arr)
		return shape
	}
	b2d.rec = function () {
		var g = G(arguments), r, fD, o, v, p = b2d.pH()
		if (g.OO_) {
			p.arr(g)
		}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
		else {
			o = g.O ? g.f :
			{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
			p.box(o)
		}
		fD = b2d.fD(p).d(N(o.d, .5))
		if (g.n) {
			fD.isSensor = true
		}
		return fD
		/*
		 //will set cols unless you pass in 0
		 if(o.c==0){o.c=null}
		 if(o.c==00){o.c=null;o.C=null}
		 if(o.c=='*'){o.c=$r()}
		 if(o.c=='**'){o.c=$r();o.C=$r()}
		 o.c =o.c||'z'
		 o.C =o.C||'w'
		 o.l = _.tN(o.l,4)
		 o.c1 = o.c1||'z'
		 o.c2 = o.c2||'w'
		 o.s1= _.tN(o.s1)
		 o.s2= _.tN(o.s2,1)
		 //
		 o.x1 = _.tN(o.x1)
		 o.y1 = _.tN(o.y1)
		 o.x2 =_.tN(o.x2);
		 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
		 o.r1=_.tN(o.r1)
		 o.r2=_.tN(o.r2,200)
		 // o.i image
		 //o.k kind
		 // o.p  layer position
		
		
		 //o.bm//o.bM
		 //o.g gradient
		
		 //o.m mass
		 //o.t type
		 // o.v = o.v || [] //verts
		 //o.X
		 //o.z clr
		 */
		function alt() {
			b2d.rec = function (wd, ht, x, y, rot, den) {//make a rec (or orientedRec) fixture
				var g = G(arguments), rec, fixt
				wd = N(g[0]) ? g[0] : 50
				ht = N(g[1]) ? g[1] : 50
				x = N(g[2]) ? g[2] : 0
				y = N(g[3]) ? g[3] : 0
				rot = N(g[4]) ? g[4] : 0
				den = N(g[5]) ? g[5] : 1
				rec = b2d.polyH(wd, ht, x, y, rot),
						fixt = b2d.fixt(rec).den(den)
				if (g.n) {
					fixt.isSensor = true
				}
				return fixt
			}
		}
	}
	b2d.polyH = function () {//b2d.pSh=//polygonShape // this is all you need for all cases (thanks to pH.set)
		var poly = new b2d.PolygonShape()
		poly.set.apply(poly, arguments)
		return poly
	}
	b2d.pol = function () {
		return b2d.fD($a(b2d.pH, arguments))
				.d(1).fr(.2).r(.2)
	}
	b2d.poly = function () {//makes a fixture using b2d.polyH
		var g = G(arguments),
		//SO ONLY ONLY ONLY USE THIS FOR POLYDEFS OF ALL KINDS?
		//but can not pass den? who cares!
				polyH = b2d.polyH.apply(null, g),
				fixt = b2d.fixt(polyH).den(1).fric(.2).rest(.2)
		if (g.n) {
			fixt.isSensor = true
		}
		return fixt
	}
}
	