//http://www.createjs.com/tutorials/Inheritance/
//http://www.createjs.com/tutorials/Mouse%20Interaction/
$pt = {}
bx = b2d = Box2D
bx.C = bx.Collision
bx.D = bx.Dynamics
bx.Cm = bx.Common
bx.M = bx.Math = bx.Cm.Math
bx.W = b2World = bx.D.b2World
bx.FD = b2FixtureDef = bx.D.b2FixtureDef
bx.F = b2Fixture = bx.D.b2Fixture
bx.BD = b2BodyDef = bx.D.b2BodyDef
bx.B = b2Body = bx.D.b2Body
bx.V = b2Vec2 = bx.Vec = bx.M.b2Vec2
bx.AABB = b2AABB = bx.C.b2AABB
bx.M2 = bx.Mat22 = bx.M.b2Mat22
bx.M3 = bx.Mat33 = bx.M.b2Mat33
bx.Hs = bx.C.Shapes
bx.H = b2Shape = bx.Hs.b2Shape
bx.MD = b2MassData = bx.Hs.b2MassData
bx.CH = b2CircleShape = bx.Hs.b2CircleShape
bx.PH = b2PolygonShape = bx.Hs.b2PolygonShape
bx.Cxs = bx.D.Contacts
bx.Cx = bx.Cxs.b2Contact
$pt.dD = (bx.DD = bx.D.b2DebugDraw).prototype
$pt.v = $pt.vc = bx.V.prototype
$pt.ab = bx.C.b2AABB.prototype
$pt.w = bx.W.prototype
$pt.fD = $pt.fd = bx.FD.prototype // bx.FD.prototype
$pt.f = bx.F.prototype //bx.F.prototype// bx.Fixture.prototype
$pt.bD = bx.BD.prototype // bx.BD.prototype
$pt.b = bx.B.prototype //= b2.D.b2Body.prototype
$pt.bH = bx.H.prototype //$pt.H = $pt.bH = bx.Hs.b2Shape.prototype;$pt.H = $pt.bH = bx.Hs.b2Shape.prototype;
$pt.cH = bx.CH.prototype
$pt.pH = bx.PH.prototype
$pt.l = $pt.cL = bx.D.b2ContactListener.prototype // = bx.CL.prototype
$pt.cx = bx.Cx.prototype
$pt.flDa = bx.D.b2FilterData.prototype
$pt.cxI = bx.D.b2ContactImpulse.prototype
$PT = function () {
	dD = $pt.dD
	v = $pt.v
	ab = $pt.ab
	w = $pt.w
	fD = $pt.fD;
	f = $pt.f
	bD = $pt.bD
	b = $pt.b;
	bH = $pt.bH;
	cH = $pt.cH;
	pH = $pt.pH
	l = cL = $pt.l
	cx = $pt.cx
}
$PT.jts = function () {
	bx.DJD = bx.Jts.b2DistanceJointDef
	bx.DJ = bDJ = bx.distanceJoint = bx.distanceJoint = bDJ = bx.Jts.b2DistanceJoint //=bx.Js.b2DistanceJoint
	bx.DJ = bx.distanceJoint = bDJ = bx.Js.b2DistanceJoint
	bx.MJD = b2MouseJointDef = bx.MouseJointDef = bx.Js.b2MouseJointDef // bx.D.Jts.b2MouseJointDef = bx.Jts.b2MouseJointDef
	bx.MJD = bx.mouseJointDef = b2MouseJointDef = bx.Js.b2MouseJointDef
	bx.MJ = bx.MouseJoint = bx.Jts.b2MouseJoint // = bx.Js.b2MouseJoint
	bx.RJD = bx.RevoluteJointDef = bx.Js.b2RevoluteJointDef
	bx.RJ = bx.RevoluteJoint = bx.Js.b2RevoluteJoint
	bx.RevoluteJointDef = bx.Jts.b2RevoluteJointDef
	bx.RevoluteJoint = bx.Jts.b2RevoluteJoint
	bx.PrismaticJointDef = bx.Jts.b2PrismaticJointDef
	bx.PJD = bx.PrismaticJointDef = bx.Js.b2PrismaticJointDef
	bx.Jts = bx.Js = bx.D.Joints
	bx.Jt = bx.J = bx.Jts.b2Joint
	bx.JD = bx.JtD = bx.Jts.b2JointDef
	bx.Cos = bx.D.Controllers
	$pt.jD = $pt.jtD = bx.Jts.b2JtD.prototype //bx.JD.prototype
	$pt.j = $pt.jt = bx.Jts.b2Jt.prototype //$pt.j = bx.J.prototype
	$pt.dJD = jd = bx.Jts.b2DistanceJointDef.prototype //$pt.dJD = bx.Jts.b2DistanceJointDef.prototype
	$pt.dJ = bx.Jts.DJt.prototype //$pt.dJ = bx.Jts.b2Joint.prototype
	$pt.mJtD = bx.Jts.MJtD.prototype //$pt.mJD = $pt.mD = bx.MJD.prototype // $pt.mJD = bx.MouseJointDef.prototype
	$pt.mJt = bx.MJ.prototype //$pt.mJ = bx.Jts.b2MouseJoint.prototype$pt.mJ = bx.MouseJoint.prototype
	$pt.rJtD = bx.RJtD.prototype
	$pt.rJt = bx.RJt.prototype
	$pt.pJt = bx.Jts.b2PJt.prototype //$pt.pJ = bx.Js.b2PrismaticJoint.prototype
	$pt.pJtD = pd = bx.Js.b2PrJtD.prototype //$pt.pJD = pd = bx.Jts.b2PrismaticJointDef.prototype
	$pt.wJtD = bx.Jts.b2WJtD // = bx.Js.b2WeldJointDef
	$pt.wJt = bx.WedJt //$pt.wJ = bx.Js.b2WeldJoint
	$pt.jD = $pt.jtD = bx.Jts.b2JtD.prototype //bx.JD.prototype
	$pt.j = $pt.jt = bx.Jts.b2Jt.prototype //$pt.j = bx.J.prototype
	$pt.dJD = jd = bx.Jts.b2DistanceJointDef.prototype //$pt.dJD = bx.Jts.b2DistanceJointDef.prototype
	$pt.dJ = bx.Jts.DJt.prototype //$pt.dJ = bx.Jts.b2Joint.prototype
	$pt.mJtD = bx.Jts.MJtD.prototype //$pt.mJD = $pt.mD = bx.MJD.prototype // $pt.mJD = bx.MouseJointDef.prototype
	$pt.mJt = bx.MJ.prototype //$pt.mJ = bx.Jts.b2MouseJoint.prototype$pt.mJ = bx.MouseJoint.prototype
	$pt.rJtD = bx.RJtD.prototype
	$pt.rJt = bx.RJt.prototype
	$pt.pJt = bx.Jts.b2PJt.prototype //$pt.pJ = bx.Js.b2PrismaticJoint.prototype
	$pt.pJtD = pd = bx.Js.b2PrJtD.prototype //$pt.pJD = pd = bx.Jts.b2PrismaticJointDef.prototype
	$pt.wJtD = bx.Jts.b2WJtD // = bx.Js.b2WeldJointDef
	$pt.wJt = bx.WedJt //$pt.wJ = bx.Js.b2WeldJoint
	jD = $pt.jD
	j = $pt.j
	j = bx.J.prototype
	mJD = $pt.mJD
	mJ = $pt.mJ
}
$PT.cos = function () {
	$pt.co = bx.Cos.b2Co.prototype //bx.Co.prototype  // bx.Cos.b2Controller.prototype
//$pt.aCo = bx.CAC.prototype
	$pt.aCo = bx.Cos.ConstantAccelCo.prototype //$pt.aCo = bx.Cos.b2ConstantAccelController.prototype
	$pt.bCo = bx.BuoyancyCo = bx.BCo = bx.BuCo = bx.BuoyCo //$pt.bCo = bx.D.Controllers.b2BuoyancyController.prototype
//$pt.bCo = bx.BC.prototype
	$pt.uJt = puJt
	$pt.bCo = bx.Cos.b2BuoyancyController.prototype//bCo = bx.BuoyancyController= bx.Cos.b2BuoyancyController //$pt.bCo = bx.D.Controllers.b2BuoyancyController.prototype
//$pt.fCo = bx.CFC.prototype
	$pt.fCo = bx.D.Controllers.b2ConstantForceController.prototype //$pt.fCo = bx.Cos.b2ConstantForceController.prototype
	$pt.gCo = bx.Cos.GCo.prototype //$pt.gCo = bx.D.Controllers.b2GravityController.prototype//$pt.gCo = bx.GC.prototype
	$pt.tCo = bx.Cos.TCo.prototype
//$pt.tCo = bx.TDC.prototype //$pt.tCo = bx.D.Controllers.b2TensorDampingController.prototype
	co = $pt.co;
	fCo = $pt.fCo;
	aCo = $pt.aCo;
	gCo = $pt.gCo
	tCo = $pt.tCo;
	bCo = $pt.bCo
}
$PT()
$L('math', 'bool')
function math() {
	V00 = function (x, y) {
		if (x === '*') {
			x = M.r() * 10
		}
		if (y === '*') {
			y = M.r() * 10
		}
		return V(N0(x), N0(y))
	}
	b2d.xy = function (o) {
		if (b2d.iF(O(o.x))) {
			o.x = o.x.B()
		}
		if (O(o.x)) {
			o.x = F(o.x.X) ? o.x.X() : o.x.x
		}
		if (O(o.y)) {
			o.y = F(o.x.Y) ? o.x.Y() : o.x.y
		}
		return o
	}
	b2d.add = function (vs, p) {
		return _.m(vs, function (v) {
			return v.add(p)
		})
	}
	b2d.d = b2d.div = function (v) {
		return V(v).div()
	}
	b2d.m = b2d.mult = function (v) {
		return V(v).mult()
		function alt() {
			b2d.m = function (vs) {
				return _.m(vs, b2d.mult)
			}
		}
	}
	v.A = function () {
		var v = this, g = G(arguments), v1
		if (A(g[0]) && U(g[1])) {
			_.e(g, function (g) {
				v1 = V(g)
				v.add(v1.x, v1.y)
			})
		}
		else {
			v1 = V(g)
			v.add(v1.x, v1.y)
		}
	}
	v.add = v.a = function () {
		var v = this, g = G(arguments), v1
		if (g[2]) {
			return _.m(g, function (g) {
				return v.add(g)
			})
		}
		v1 = g.u ? V(1, 1) : V(g.f, g[1])
		return V(
				v.x + v1.x,
				v.y + v1.y
		)
		function alt() {
			v.a = v.add = function (x, y) {
				if (O(x)) {
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 1
				y = N(y) ? y : x
				var v = V(this.x + x, this.y + y)
				return v
			}
			v.add = function (x, y) {
				if (O(x)) {
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 1
				y = N(y) ? y : x
				var v = V(this.x + x, this.y + y)
				return v
			}
			v.add = function (vec, y) {
				var v = this
				vec = U(vec) ? V(1, 1) : V(vec, y)
				return V(v.x + vec.x, v.y + vec.y)
			}
		}
	}
	v.s = v.sub = function () {
		var v = this, g = G(arguments),
				o = V(g[0], g[1])
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		return V(v.x - o.x, v.y - o.y)
		function alt() {
			v.sub = function (x, y) {
				if (O(x)) {
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 1;
				y = N(y) ? y : x
				var v = V(this.x - x, this.y - y)
				return v
			}
		}
	}
	v.m = v.mult = function (n) {
		n = N(n, 30)
		var v = this
		v = _.clone(v)
		v.Multiply(n)
		return v
		function alt() {
			v.m = v.mult = function (num) {
				num = N(num) ? num : 30
				var v = _.clone(this)
				v.Multiply(num)
				return v
			}
		}
	}
	v.d = v.div = function (n) {
		return this.mult(1 / N(n, 30))
		function alt() {
			v.d = v.div = function (num) {
				num = N(num) ? num : 30
				return this.mult(1 / num)
			}
		}
	}
	_vec = function (o, g) {
		var v = new b2d.Vec(o.x, o.y)
		if (g.n || g.d) {
			v = v.d()
		}
		if (g.p || g.m) {
			v = v.m()
		}
		return v
	}
	_V = function (x, y, x2, y2) {
		var g = G(arguments)
		if (g.A_) {
			return _V.apply(null, g.f)
		}
		return N(g.t) ? {
			x: (g.f - g.t) / 2,
			y: (g.s - g.fo) / 2
		} : N(g.f) ? {x: g.f, y: g.s} : x
	}
	V = function (x, y, x2, y2) {
		var g = G(arguments),
				x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
				v, o
		o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		if (A(x)) {
			y2 = x[3]
			x2 = x[2]
			y = x[1]
			x = x[0]
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		}
		if (N(y2)) {
			x = (x - x2) / 2
			y = (y - y2) / 2
			o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
		}
		else if (O(x)) {
			o = obX(x)
			x = o.x
			y = o.y
		}
		o.x = N0(o.x)
		o.y = N(o.y, o.x)
		return _vec({x: N0(x), y: N(y, x)}, g)
		function alt() {
			V = function (x, y, x2, y2) {
				var g = G(arguments),
						x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
						v, o
				o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				if (A(x)) {
					y2 = x[3]
					x2 = x[2]
					y = x[1]
					x = x[0]
					o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				}
				if (N(y2)) {
					x = (x - x2) / 2
					y = (y - y2) / 2
					o = {x: g.f, y: g.s, x2: g.t, y2: g.fo}
				}
				else if (O(x)) {
					o = obX(x)
					x = o.x
					y = o.y
				}
				o.x = N0(o.x)
				o.y = N(o.y, o.x)
				return _vec({x: N0(x), y: N(y, x)}, g)
			}
			function otherAlts() {
				V = function (x, y, x2, y2) {
					var g = G(arguments),
							x = g[0], y = g[1], x2 = g[2], y2 = g[3],
							vec
					if (A(x)) {
						y2 = x[3];
						x2 = x[2];
						y = x[1];
						x = x[0]
					}
					if (N(y2)) {
						x = (x - x2) / 2;
						y = (y - y2) / 2
					}
					else if (O(x)) {
						y = F(x.Y) ? x.Y() : x.y
						x = F(x.X) ? x.X() : x.x
					}
					x = N(x) ? x : 0
					y = N(y) ? y : x
					vec = new b2d.Common.Math.b2Vec2(x, y)
					if (g.n || g.d) {
						vec = vec.div()
					}
					if (g.p || g.m) {
						vec = vec.mult()
					}
					return vec
					function alt() {
						V = function (x, y, x2, y2) {
							var g = G(arguments),
									x = g[0], y = g[1], x2 = g[2], y2 = g[3],
									vec
							if (A(x)) {
								y2 = x[3];
								x2 = x[2];
								y = x[1];
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2;
								y = (y - y2) / 2
							}//for dist difs?
							else if (O(x)) {
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x) ? x : 0
							y = N(y) ? y : x
							vec = new b2d.M.b2Vec2(x, y)
							if (g.n || g.d) {
								vec = vec.div()
							}
							if (g.p || g.m) {
								vec = vec.mult()
							}
							return vec
						}
					}
				}
				V = function (x, y, x2, y2) {
					var g = G(arguments),
							x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
							v
					if (A(x)) {
						y2 = x[3]
						x2 = x[2]
						y = x[1]
						x = x[0]
					}
					if (N(y2)) {
						x = (x - x2) / 2
						y = (y - y2) / 2
					}
					else if (O(x)) {
						if (b2d.iF(O(x))) {
							x = x.B()
						}
						y = F(x.Y) ? x.Y() : x.y
						x = F(x.X) ? x.X() : x.x
					}
					x = N(x, 0)
					y = N(y, x)
					v = new b2d.Common.Math.b2Vec2(x, y)
					if (g.n || g.d) {
						v = v.d()
					}
					if (g.p || g.m) {
						v = v.m()
					}
					return v
					function alt() {
						V = function (x, y, x2, y2) {
							var g = G(arguments), x = g[0], y = g[1], x2 = g[2], y2 = g[3], v
							if (A(x)) {
								y2 = x[3];
								x2 = x[2];
								y = x[1];
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2;
								y = (y - y2) / 2
							}//for dist difs?
							else if (O(x)) {
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x) ? x : 0
							y = N(y) ? y : x
							v = new b2d.Common.Math.b2Vec2(x, y)
							if (g.n || g.d) {
								v = v.div()
							}
							if (g.p || g.m) {
								v = v.mult()
							}
							return v
						}
						V = function (x, y, x2, y2) {
							var g = G(arguments),
									x = g.f, y = g.s, x2 = g.t, y2 = g.fo,
									v
							if (A(x)) {
								y2 = x[3]
								x2 = x[2]
								y = x[1]
								x = x[0]
							}
							if (N(y2)) {
								x = (x - x2) / 2
								y = (y - y2) / 2
							}
							else if (O(x)) {
								if (b2d.iF(O(x))) {
									x = x.B()
								}
								y = F(x.Y) ? x.Y() : x.y
								x = F(x.X) ? x.X() : x.x
							}
							x = N(x, 0)
							y = N(y, x)
							v = new b2d.Common.Math.b2Vec2(x, y)
							if (g.n || g.d) {
								v = v.d()
							}
							if (g.p || g.m) {
								v = v.m()
							}
							return v
						}
					}
				}
			}
		}
	}
	ab = b2d.C.b2AABB.prototype
	ab.lB = ab._lB = function (x, y) {
		this.lowerBound.Set(x, y)
		return this
	}
	ab.uB = ab._uB = function (x, y) {
		this.upperBound.Set(x, y)
		return this
	}
	ab.lUB = function () {
		var ab = this, g = G(arguments),
				o = {
					x1: g.f, y1: g.s,
					x2: g.t, y2: g.fo
				}
		if (g.n) {
			o.x1 /= 30;
			o.y1 /= 30;
			o.x2 /= 30;
			o.y2 /= 30
		}
		ab.lB(o.x1, o.y1)
		ab.uB(o.x2, o.y2)
		return ab
	}
	ab.pt = function (x, y) {
		var g = G(arguments)
		return this.lUB(
				alg(x, '-'), alg(y, '-'), alg(x), alg(y)
		)
		function alg() {
			var g = G(arguments)
			return g.f / 30 + (g.n ? -.01 : .01)
		}
	}
	ab.lB = ab._lB = function (x, y) {
		this.lowerBound.Set(x, y)
		return this
	}
	ab.uB = ab._uB = function (x, y) {
		this.upperBound.Set(x, y)
		return this
	}
	ab.lUB = function () {
		var ab = this, g = G(arguments),
				o = {
					x1: g.f, y1: g.s,
					x2: g.t, y2: g.fo
				}
		if (g.n) {
			o.x1 /= 30;
			o.y1 /= 30;
			o.x2 /= 30;
			o.y2 /= 30
		}
		ab.lB(o.x1, o.y1)
		ab.uB(o.x2, o.y2)
		return ab
	}
	ab.pt = function (x, y) {
		var g = G(arguments)
		return this.lUB(
				alg(x, '-'), alg(y, '-'), alg(x), alg(y)
		)
		function alg() {
			var g = G(arguments)
			return g.f / 30 + (g.n ? -.01 : .01)
		}
	}
	b2d.mat22 = function (v1, v2) {
		var m = new b2d.Mat22()
		m.SetVV(v1, v2)
		return m
	}
}
function bool() {
	bx.iV = bx.isV = function (v) {
		if (v) {
			return v.constructor.name == "b2Vec2"
		}
	}
	bx.iH = function (h) {
		var typ
		if (O(h)) {
			typ = h.constructor.name
			return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
		}
	}
	bx.iBD = bx.isBDef = function (bd) {
		return O(bd) && F(bd.b2BodyDef)
	}
	bx.iB = bx.isB = bx.isBody = isBody = function (b) {
		if (O(b)) {
			return b.constructor.name == 'b2Body'
		}
	}
	bx.iFD = bx.isFD = bx.isFixtDef = function (fD) {
		return O(fD) && fD.b2FixtureDef
	}
	bx.iF = bx.isFixt = function (f) {
		if (!f) {
			return false
		}
		return f.constructor.name == "b2Fixture"
	}
	bx.iV = bx.isV = function (v) {
		if (v) {
			return v.constructor.name == "b2Vec2"
		}
	}
	bx.iH = bx.isShape = function (h) {
		if (!O(h)) {
			return
		}
		var ty = h.constructor.name
		return ty == "b2PolygonShape" ? 'p' :
				ty == "b2CircleShape" ? 'c' :
						ty == "b2AShape" ? 'a' : false
		alt = function (h) {
			var typ
			if (O(h)) {
				typ = h.constructor.name
				return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
			}
		}
	}
	bx.iPH = bx.iP = function () {
		return this.iH() == 'p'
	}
	bx.iCH = bx.iC = function () {
		return this.iH() == 'c'
	}
	bx.iAH = bx.iA = function () {
		return this.iH() == 'a'
	}
}
_pt = function (a) {
	if (O(a)) {
		return a.prototype
	}
}
_bPt = function (a) {
	if (a && bx[a]) {
		return _pt(bx[a])
	}
}
b2d.tB = b2d.toBody = function (b) {
	return b2d.iB(b) ? b :
			b2d.iF(b) ? b.B() :
					null
	b2d.toBodyAlt = function (fixtOrBody) {
		if (b2d.isBody(fixtOrBody)) {
			return fixtOrBody
		}
		if (b2d.isFixt(fixtOrBody)) {
			return fixtOrBody.body()
		}
		return false
	}
}
b2d.Cxs = b2d.D.Contacts
b2d.Cx = b2d.Cxs.b2Contact
function tiny(){
	b.W = b.GW = function () {
		return this.GetWorld()
	}
	b.N = b.GN = function () {
		return this.GetNext()
	}
	b.GT = function () {
		return this.GetType()
	}
	b.ST = function (ty) {
		this.SetType(ty)
		return this
	}
	b.SAw = function (sA) {
		this.SetAwake(sA);
		return this
	}//return  _.set(b, 'SetAwake', sA)
	b.IAw = function () {
		return this.IsAwake()
	}
	b.SSA = function (sA) {
		this.SetSleepingAllowed(sA);
		return this
	}
	b.ISA = function () {
		return this.IsSleepingAllowed()
	}
	b.SAc = function (ac) {
		this.SetActive(ac);
		return this
	}
	b.IAc = function () {
		return this.IsActive()
	}
	b.GP = function () {
		return this.GetPosition()
	}
	b.SP = function (ps) {
		this.SetPosition(ps);
		return this
	}
	b.STf = function (tf) {
		this.SetTransform(tf);
		return this
	}
	b.GTf = function (tf) {
		return this.GetTransform()
	}
	b.SA = function (ang) {
		this.SetAngle(ang);
		return this
	}
	b.GA = function () {
		return this.GetAngle()
	}
	b.SPAA = function () {
		this.SetPositionAndAngle.apply(this, arguments)
		return this
	}
	b.SFR = function (fR) {
		this.SetFixedRotation(fR)
		return this
	}
	b.IFR = function () {
		return this.IsFixedRotation()
	}
	b.GMD = function () {
		return this.GetMassData()
	}
	b.SMD = function (mD) {
		this.SetMassData(mD);
		return this
	}
	b.RMD = function () {
		this.ResetMassData();
		return this
	}
	b.GM = function () {
		return this.GetMass()
	}
	b.SB = function (bu) {
		this.SetBullet(bu);
		return this
	}
	b.IB = function () {
		return this.IsBullet()
	}
	b.GI = function () {
		return this.GetInertia()
	}
	b.AF = function (v, c) {
		this.ApplyForce(v, c);
		return this
	}
	b.AI = function (i, pt) {
		this.ApplyImpulse(i, pt);
		return this
	}
	b.GD = b.GDf = function () {
		return this.GetDefinition()
	}
	b.GLD = function () {
		return this.GetLinearDamping()
	}
	b.GAD = function () {
		return this.GetAngularDamping()
	}
	b.GLV = function () {
		return this.GetLinearVelocity()
	}
	b.GAV = function () {
		return this.GetAngularVelocity()
	}
	b.SLD = function (lD) {
		this.SetLinearDamping(lD);
		return this
	}
	b.SAD = function (aD) {
		this.SetAngularDamping(aD);
		return this
	}
	b.SLV = function (lV) {
		this.SetLinearVelocity(lV);
		return this
	}
	b.SAV = function (aV) {
		this.SetAngularVelocity(aV)
		return this
	}
	b.CF = function () {
		return this.CreateFixture.apply(this, arguments)
	}
	b.CF2 = function () {
		return this.CreateFixture2.apply(this, arguments)
	}
	b.dsF = b.dF = b.DF = b.DFx = function (f) {
		this.DestroyFixture(f);
		return this
	}
	b.GFL = b.GFxL = function () {
		return this.GetFixtureList()
	}
	b.GCxL = function () {
		return this.GetContactList()
	}
	b.GCoL = function () {
		return this.GetControllerList()
	}
	b.GJL = function () {
		return this.GetJointList()
	}
	b.GLP = function () {
		return this.GetLocalPoint.apply(this, arguments)
	}
	b.GWP = b.GWPt = function () {
		return this.GetWorldPoint.apply(this, arguments)
	}
	b.GLC = b.GLcC = function () {
		return this.GetLocalCenter()
	}
	b.GWC = function () {
		return this.GetWorldCenter()
	}
	b.GLV2 = function () {
		return this.GetLocalVector()
	}
	b.GWV2 = function () {
		return this.GetWorldVector()
	}
	b.GLVFLP = b.GlVLP = function () {
		return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
	}
	b.GLVFWP = function () {
		return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
	}
	b.M = function () {
		return this.Merge.apply(this, arguments) || this
	}
	b.S = function () {
		return this.Split.apply(this, arguments) || this
	}
}
function boxAgain() {
	$L('bodDef', 'short', 'types', 'act', 'bull', 'massD', 'posRot', 'fixts', 'world', 'velo', 'damp', 'bShorts', 'worldRel', 'bFx', 'bFuc')
	b2d.tB = b2d.toBody = function (f) {
		return b2d.iB(f) ? f : b2d.iF(f) ? f.B() : 0
	}
	b2d.iB = function (b) {
		return O(b) && b.constructor.name == 'b2Body'
	}
	b.aw = b.awake = function (aw) {
		return (U(aw)) ? this.IAw() : this.SAw(aw ? false : true)
	}
	b.ty = function (ty) {
		return U(ty) ? this.GT() : this.ST(ty)
	} // b.type = b.T = 
	b.iD = b.isDyn = function () {
		return this.GT() == b2d.B.b2_dynamicBody
	}
	b.iK = b.isKin = function () {
		return this.GT() == b2d.B.b2_kinematicBody
	}
	b.iS = b.isStat = function () {
		return this.GT() == b2d.B.b2_staticBody
	}
	b.tS = b.stat = function () {
		return this.ty(0)
	}
	b.tK = b.kin = function () {
		return this.ty(1)
	}
	b.tD = b.dyn = function () {
		return this.ty(2)
	}
	b.XY = function (x, y) {
		return U(x) ? this.GP().m() : this.SP(V00(x, y).d())
	}
	b.X = function () {
		var b = this, g = G(arguments)
		var ps = b.XY()
		return g.u ? ps.x : b.XY($.update(ps.x, g.f, g), ps.y)
	}
	b.Y = function () {
		var b = this, g = G(arguments)
		return g.u ? b.XY().y : b.XY(b.XY().x, $.update(b.XY().y, g.f, g))
	}
	b.rt = b.rot = function (an) {
		var b = this, g = G(arguments)
		//= p.rT=p.rt=p.rotation=p.angle=p.ang
		var curAng = M.tD(b.GA())
		return g.u ? curAng : b.SA(M.tR(
				g.p ? curAng + g.f :
						g.n ? curAng - g.f :
								g.m ? curAng * g.f :
										g.d ? curAng / g.f :
												g.f
		))
	}
	b.tf = function (tf) {
		return U(tf) ? this.GTf() : this.STf(tf)
	}
	b.fR = function (fR) {
		return U(fR) ? this.IFR() : this.SFR(fR ? true : false)
	}
	b.fR1 = b.r0 = b.nR = b.nRt = function () {
		return this.fR(1)
	}
	b.fR0 = b.r1 = function () {
		return this.fR(0)
	}
	b.b1 = b.mBu = function () {
		var b = this
		b.SetBullet(true);
		return b
	}
	b.b0 = function () {
		this.SetBullet(false);
		return this
	}
	b.aV = function (aV) {
		return U(aV) ? this.GAV() : this.SAV(aV)
	}
	b.lV = function (lV, y) {
		return U(lV) ? this.GLV() : this.SLV(N(lV) ? V00(lV, y) : lV)
	}
	b.aD = function (aD) {
		return U(aD) ? this.GAD() : this.SAD(aD)
	}
	b.lD = function (lD) {
		return U(lD) ? this.GLD() : this.SLD(lD)
	}
	b.mass = function (m) {
		if (U(m)) {
			return (this.GM() * 900) / 100
		}
	}
	b.rsM = b.rMD = function () {
		return this.RMD();
	}
	b.nF = b.n = b.nFx = b.num = b.count = function () {
		return this.m_fixtureCount
	}
	b._wC = b.wC = b.wCent = b.worldCenter = b.gWC = function () {
		return this.GWC()
	}
	b.wCen = b.cen = b.realWC = b.cent = function () {
		return this.GWC().m()
	}	// return V(this.GWC().x, this.GWC().y).m()
	b.wP = b.wPt = b.gWP = b.wPoint = function (x, y) {
		var pt = this.GWP(V(x, y).d())
		return V(pt.x, pt.y).m()
	}
	b.I = b.aI = function (i, pt, pt2) {

//forces:
//apply impulse. pass impulse as two nums, or obj 
// and pass in location, defaults to body center
		var b = this, g = G(arguments), o
		o = N(g.s) ? {i: V(g.f, g.s), pt: g.t} :
		{i: g.f, pt: g.s}
		return b.AI(o.i || b.vec().d(40), o.pt || b.GWC())
	}
	b.F = function (v, c, c2) {
		var b = this
		if (N(c)) {
			return b.F(V(v, c), c2)
		}
		if (U(c)) {
			c = b.cen()
		}
		return b.AF(v, c)
	}
	b.AT = function () {
		this.ApplyTorque.apply(this, arguments);
		return this
	}
	b.n = b.num = b.count = function () {
		return this.m_fixtureCount
	}
	b.GN = b.N = b.next = b.gN = function () {
		return this.GetNext()
	}
	b.X = function (x) {
		var g = G(arguments),
				pos = this.XY()
		if (U(x = g.f)) {
			return pos.x
		}
		this.XY(
				_.upd(pos.x, x, g), pos.y
		)
		return this
	}
	b.Y = function (y) {
		var b = this,
				g = G(arguments),
				pos = b.XY()
		if (g.u) {
			return pos.y
		}
		this.XY(pos.x,
				_.upd(pos.y, y, g))
		return this
	}
	b.XY = function (x, y) {
		var b = this, g = G(arguments),
				newPos, pos
		if (x === '*') {
			x = R(10)
		}
		if (y === '*') {
			y = R(10)
		}
		if (g.u) {
			pos = b.GetPosition()
			return pos.m().tF(0)
		} //used to parseInt.. necessary?
		if (b2d.iB(x)) {
			y = x.Y()
			x = x.X()
		}
		y = N(y) ? y : x
		newPos = V(x / 30, y / 30)
		this.SetPosition(newPos)
		return this
	}
	b.de = b.d = b.den = function (d) {
		var b = this
		if (U(d)) {
			return b.f().GetDensity()
		}
		b.fs(function (f) {
			f.SetDensity(d)
		})
		b.ResetMassData()
		return b
	}
	b.fr = b.fric = function (fr) {
		var b = this
		if (U(fr)) {
			return b.f().GetFriction()
		}
		b.fs(function (f) {
			f.SetFriction(fr)
		})
		return b
	}
	b.re = b.r = b.bo = b.rest = function (r) {
		var b = this
		if (U(r)) {
			return b.f().GetRestitution()
		}
		b.fs(function (f) {
			f.SetRestitution(r)
		})
		return b
	}
	b.lD = b.linDamp = function (damp) {
		if (U(damp)) {
			return this.GetLinearDamping()
		}
		this.SetLinearDamping(damp)
		return this
	}
	b.aD = b.angDamp = function () {
		var b = this, g = G(arguments),
				d = g[0]
		if (U(d)) {
			return b.GetAngularDamping()
		}
		if (d == '++') {
			d = 10000
		}
		b.SetAngularDamping(d)
		return b
	}
	b.rt = b.rot = function (angle, ms) {
		var b = this, g = G(arguments), r = g[0], ms = g[1],
				a = Math.toDegrees(b.GetAngle()) //currAng
		if (U(r)) {
			return a
		}
		if (N(ms)) {
			b.stop = I(function () {
				b.rot(r, '+')
			}, ms)
		}
		else {
			b.SetAngle(M.toRadians(g.p ? a + r : g.n ? a - r : g.m ? a * r : g.d ? a / r : r))
		}
		return b
	}
	b.iD = function () {
		return this.GetType() == 2
	}
	b.iK = function () {
		return this.GetType() == 1
	}
	b.iS = function () {
		return this.GetType() == 0
	}
	b.H = function () {
		return this.f().H()
	}
	b.dyn = function (resumeVel) {
		var b = this
		b.type(2)
		if (resumeVel == b && O(b._linVel)) {
			b.lV(b._linVel)
		}
		b._linVel = null
		return b
	}
	b.stat = function () {
		var b = this,
				v = b.lV()
//huh??? oh can get/set type of body
		b._linVel = V(v.x, v.y)
		b.type(0)
		return b
	}
	b.kin = function () {
		return this.type(1)
	}
	b.W = function () {
		return this.GetWorld()
	}
	b.I = function me(i, v, v2) {
		var b = this, g = G(arguments), o
		//apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
		if (g.A) {
			return b.I.apply(b, g.f)
		}
		o = N(g.s) ? {i: V(g.f, g.s), v: g.t} : {i: g.f, v: g.s}
		o.i = o.i || b.v().d(40)
		o.v = o.v || b.wC()
		b.ApplyImpulse(o.i, o.v.div())
		return b
	}
	b.F = function () {
		//apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
		var b = this, g = G(arguments), o
		o = N(g[1]) ? {f: V(g[0], g[1]), wP: g[2]}
				: {f: V(g[0]), wP: g[1]}
		o.wP = o.wP || b.wC()
		b.ApplyForce(o.f, o.wP)
		if (g.p) {
			cjs.t(function () {
				b.ApplyForce(o.f, o.wP)
			})
		}
		return b
	}
////
	b.fs = b.e = function (fn) {
		var b = this, g = G(arguments),
				fl = b.f(), fn = g.f, arr = []
		while (fl) {
			arr.push(fl);
			fl = fl.GetNext()
		}
		if (N(fn)) {
			return arr[fn]
		}
		if (F(fn)) {
			_.e(arr, fn);
			return b
		}
		if (b2d.iB(fn)) {
			b.fs(function (f) {
				fn.pol(f)
			})
			return fn
		}
		return arr
		/*
		 if (g.p) {//order by biggest
		 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
		 if (g.n) {//order by smallest
		 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
		 */
	}
	b.wC = function () {
		var b = this,
				w = b.W(), g = G(arguments)
		//gives {x,y}, but of its CENTER-OF-MASS
		if (g.p) {
			return b.XY(w.hW, w.hH)
		}
		return b.GetWorldCenter().m()
	}
	b.kill = b.xx = b.destroy = function () {
		var b = this, w = b.W()
		b.SetActive(false)
		if (w._preKill) {
			w._preKill(b)
		}
		b.W().DestroyBody(b)
		return b.pos()
	}
	b.wake = b.wakeUp = function () {
		this.SetAwake(true);
		return this
	}
	b.awake = function () {
		var g = G(arguments)
		this.SetAwake(g.n ? false : true)
		return this
	}
	b.sleep = function () {
		this.SetAwake(false);
		return this
	}
	b.fixedRot = b.sFR = b.fR = function (bool) {
		this.SetFixedRotation(bool ? true : false)
		return this
	}
	b.fR = b.fixRot = function () {
		return this.fixedRot(true)
	}
	b.FR = function () {
		return this.fixedRot(false)
	}
	b.sen = function (s) {
		var b = this
		b.fs(function (f) {
			f.sen(s)
		})
		return b
	}
	b.DFR = b.DFB = function (d, f, r) {
		return this.den(d).fric(f).rest(r)
	}
	b.DBF = function (d, r, f) {
		var b = this
		b.den(d)
		if (N(r)) {
			this.rest(r)
		}
		if (N(f)) {
			b.fric(f)
		}
		return b
	}
	b.aV = b.angVel = function (vel) {
		if (U(vel)) {
			return this.GetAngularVelocity()
		}
		this.SetAngularVelocity(vel)
		return this
	}
	b.lV = function () {
		var b = this, g = G(arguments),
				v = b.GetLinearVelocity(), o, lV
		// can pass in V | x,y
		// or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
		//(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
		if (g.u) {
			return v
		}
		lV = U(g[1]) ? V(g[0], v.y) : V(g[0], g[1])
		b.SetLinearVelocity(lV)
		return b.wakeUp()
	}
	b.vX = function (x) {
		var b = this, g = G(arguments),
				v = b.lV()
		if (g.u) {
			return v.x
		}
		b.lV(x, v.y)
		return b
	}
	b.vY = function (y) {
		var b = this
		if (U(y)) {
			return b.lV().y
		}
		return b.lV(b.lV().x, y)
	}
	b.damp = function (l, a) {
		l = N(l) ? l : 1000
		a = N(a) ? a : l
		this.lD(l).aD(a)
		return this
	}
	b.ap = function (met, g) {
		var b = this;
		return b[met].apply(b, g)
	}
	b.mid = function () {
		var b = this, w = b.W()
		return b.XY(
				w.w / 2,
				w.h / 2
		)
	}
	b.tf = b.transform = function (tf) {
		var b = this
		if (U(tf)) {
			return b.GetTransform()
		}
		b.SetTransform(tf)
		return b
	}
	b.lC = function () {
		var b = this, w = b.W(), g = G(arguments)
		//gives {x,y}, but of its CENTER-OF-MASS
		if (g.p) {
			return b.XY(w.hW, w.hH)
		}
		return b.GetLocalCenter().m()
	}
	b.rmF = function (f) {
		if (f) {
			this.DestroyFixture(f)
		}
		else {
			this.fs(function (f) {
				this.rmF(f)
			})
		}
		return this
	} //= b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear
	b.hit = b.h = function (x, y, dot) {
		var b = this,
				w = b.W(),
				g = G(arguments), hit = false
		if (g.p) {
			w.dot(x, y)
		}
		b.fs(function (f) {
			if (f.hit(x, y)) {
				hit = true
			}
		})
		return hit
	}
	b.$ = function (fn) {
		var b = this, w = b.W()
		w.$(function (o) {
			w.q(o.x, o.y, function (f) {
				if (f.of(b)) {
					_.b(fn, f)(o)
				}
			})
		})
		return b
	}
	b.$$ = function (fn) {
		var b = this, w = b.W()
		w.$$(function (o) {
			w.q(o.x, o.y, function (f) {
				if (f.of(b)) {
					_.b(fn, f)(o)
				}
			})
		})
		return b
	}
	b.CF = b.cF = function (fD) {
		return this.CreateFixture(fD)
	}
	b.SP = b.sP = function (x, y) {
		var v = V(x, y)
		this.SetPosition(V(v.x / 30, v.y / 30))
		return this
	}
	w.S = function () {
		var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D
		if (S(_.l(g))) {
			k = g.pop()
		}
		//here, we just have two options..
		// we can pass in x and y as numbers..
		// or as an object
		// the rest (non-position-related) args form an array of fixtures
		o = g.N_ ? {
			b: V(g.f, g.s),
			f: _.r(g, 2)
		} : {
			b: V(g.f),
			f: _.r(g)
		}
		o.b = b2d.S(o.b)
		if (k) {
			o.k = k
		}
		b = w.cB(o.b)
		if (g.n) {
			o.f.push('-')
		}
		b.f.apply(b, o.f)
		if (o.k) {
			b.K(o.k)
		}
		return b
	}
	function WSAlpha() {
		//array of multiple fixtures
		if (g.A) {//alert('see w.D'); $l('mult')
			_.e(o.f, function (f) {
				if (g.n) {
					b.f(f, '-')
				}
				else {
					b.f(f)
				}
			})
			if (o.k) {
				b.K(o.k)
			}
			return b
		}
	}

//ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
//FIXTURE CREATION
	fD.DBF = function (d, bo, fr) {
		this.d(N(d, 1))
		this.bo(N(bo, .9))
		this.fr(N(fr, .5))
		return this
	}
	Array.prototype.K = function (k) {
		if (U(k)) {
			return this.klass
		}
		this.klass = k
		return this
	}
	Array.prototype.sensor = function (kind) {
		this.isSensor = kind || true
		return this
	}
	$sen = $snF = $sF = function (h) {
		return $fD(h, '-')
	}
	fD.sen = fD.sensor = fD.iS = function (isSensor) {
		if (U(isSensor)) {
			return this.isSensor
		}
		this.isSensor = isSensor ? true : false
		return this
	}
	fD.s1 = fD.mS = fD.mSn = fD.mSen = fD.makeSen = function () {
		this.isSensor = true
		return this
	}
	fD.s0 = function () {
		this.isSensor = false
		return this
	}
	fD.de = fD.den = fD.d = function (de) {
		if (U(de)) {
			return this.density
		}
		this.density = de
		return this
	}
	fD.fr = fD.fric = fD.f = function (fr) {
		if (U(fr)) {
			return this.friction
		}
		this.friction = fr
		return this
	}
	fD.re = fD.rest = fD.r = function (re) {
		if (U(re)) {
			return this.restitution
		}
		this.restitution = re
		return this
	}
	b2d.iF = b2d.iFx = function (f) {
		return f ? f.constructor.name == "b2Fixture" : false
	}
	$L('fShorts', 'fDef')
	f.GB = f.GBd = function () {
		return this.GetBody()
	}
	f.GAB = function () {
		return this.GetAABB()
	}
	f.de = f.d = f.den = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		return this
	}
	f.fr = f.f = f.fric = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.re = f.r = f.rest = function (re) {
		var f = this
		if (U(re)) {
			return f.GetRestitution()
		}
		f.SetRestitution(re);
		return f
	}
	f.iSr = f.iS = function (isSensor) {
		return this.m_isSensor
	}
	f.sr = f.sn = f.sen = function (isSensor) {
		if (U(isSensor)) {
			return this.m_isSensor
		}
		this.m_isSensor = isSensor ? true : false
		return this
	}
	f.sr1 = f.s1 = f.mS = f.mSn = function () {
		this.sr(true)
		return this
	}
	f.sr0 = f.s0 = function () {
		this.SetSensor(false)
		return this
	}
	f.rm = f.die = function () {
		this.B().DF(this)
	}
	f.N = function () {
		return this.GetNext()
	}
	DSC = function () {
		W0()
		tri = $eM.tri()
		tri.bS('me')
		tri.constF(5, -2).$(function () {
			this.I(0, -50)
		})
		b = w.A($dB(100, 500), $pF(30, 30)).rt(2).nRt()
		b1 = w.A($dB(200, 500), $pF(30, 30)).rt(2).nRt()
		b2 = w.A($dB(300, 500), $pF(30, 30)).rt(1).nRt()
		i = function () {
			b.I(10, -30)
		}
		v = function () {
			b1.lV(10, -60)
		}
		f = function () {
			_.ev(.1, function () {
				b2.ApplyForce(V(0, -3), b2.worldCenter())
			})
		}
		_.in(1, function () {
			i()
			v()
			f()
		})
	}
	f.B = f.body = function () {
		return this.GBd()
	}
	f.ty = f.getType = f.gT = function (someType) {
		var f = this, b = f.B()
		var ty = b.GT()
		return D(someType) ? ( ty == someType) : ty
	}
	f.iTy = function (typ) {
		return this.ty() == typ
	}
	f.cen = function () {
		var aBounds = this.GAB(),
				aLower = aBounds.lowerBound
		var alx = aLower.x * 30, aly = aLower.y * 30,
				aUpper = aBounds.upperBound,
				aux = aUpper.x * 30, auy = aUpper.y * 30,
				center = M.lineCenter(alx, aly, aux, auy)
		return __center = center
	}
}
 function old(){
	 b2d.p()
	 i = cjs.DisplayObject.prototype
	 ct = cjs.Container.prototype
	 st = s = cjs.Stage.prototype
	 t = cjs.Text.prototype
	 h = cjs.Shape.prototype
	 ct = cjs.Container.prototype
	 s = cjs.Stage.prototype
	 h = cjs.Shape.prototype
	 ct = cjs.Container.prototype
	 h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
	 h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
	 ct = cjs.Container.prototype
	 $l('00')
	 b2d.p()
	 i = cjs.DisplayObject.prototype
	 ct = cjs.Container.prototype
	 st = s = cjs.Stage.prototype
	 t = cjs.Text.prototype
	 h = cjs.Shape.prototype
	 ct = cjs.Container.prototype
	 s = cjs.Stage.prototype
	 h = cjs.Shape.prototype
	 ct = cjs.Container.prototype
	 h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
	 ct = cjs.Container.prototype
	 cirDfs = function (o) {
		 o = o || {}
		 //with object...
		 o.al = N(o.al, 1)
		 o.x = N(o.x, 0)
		 o.y = N(o.y, 0)
		 o.r = N(o.r, 50)
		 o.b = N(o.b, .5)
		 o.f = N(o.f, .5)
		 o.d = N(o.d, .5)
		 o.s = D(o.s) ? o.s : 0;
		 return o
	 }
 }