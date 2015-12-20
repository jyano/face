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
 