Array.prototype.sensor = function (kind) {
	this.isSensor = kind || true
	return this
}
f.kin = function () {
	var b = this.B();
	b.kin.apply(b, arguments);
	return this
}
f.stat = function () {
	var b = this.B();
	b.stat.apply(b, arguments);
	return this
}
f.isStat = function () {
	return this.B().isStat()
}
f.isDyn = function () {
	return this.B().isDyn()
}
f.isKin = function () {
	return this.B().isKin()
}
f.bType = function () {
	return this.B().GetType()
}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.isBType = f.isType = function (t) {
	if (t) {
		return this.bType() == t
	}
}
f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.killBody = function () {
	this.B().kill()
}
 
function query() {
	f.GN = f.N = f.next = function () {
		return this.GetNext()
	}
	f.$ = function (fn) {
		var f = this, b = f.B(), w = b.W()
		w.$(function (o) {
			w.q(o.x, o.y, function (fx) {
				//w.q is hack
				if (f == fx) {
					_.b(fn, f)(o)
				}
			})
		})
		return f
	}
	f.N = f.next = function () {
		return this.GetNext()
	}
	f.$ = function (fn) {
		var f = this, b = f.B(), w = b.W()
		w.$(function (o) {
			w.q(o.x, o.y, function (fx) {
				if (f == fx) {
					_.b(fn, f)(o)
				}
			})
		})
		return f
	}
	f.next = function () {
		return this.GetNext()
	}
}
f.area = function () {
	return Math.poly(this.V()).getArea()
}
f.cent = f.center = function () {
	var bounds = this.GetAABB()
	return Math.lineCenter(bounds.lowerBound, bounds.upperBound).mult()
}//center point of its BOUNDING BOX
f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
	var f = this, b = f.body(), w = b.wor(),
			g = G(arguments), v = V(g[0], g[1]),
			res = f.H().testPoint(b.transform(), v.div())
	if (g.p) {
		b.wor().dot(v)
	}
	return res
}//is a point within the fixture // very accurate
fD.sSAPOld = fD.setShapeAsAPolyOld = function () {
	return this.H(b2d.polyShape())
}
fD.vrt = fD.verts = function () {
	var h = this.H()
	var verts = h.vs()
	return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
	function alt() {
		fD.vrt = fD.verts = function () {
			var shape = this.shape,
					verts = shape.m_vertices,
					verts = [
						verts[0].mult(),
						verts[1].mult(),
						verts[2].mult(),
						verts[3].mult()]
			return $l(verts)
		}
	}
}
f.killB = f.kB = f.xB = f.xX = f.XX = function () {
	if (this && this.B()) {
		this.B().kill()
	}
}
w.S = function (x, y) {
	var w = this,
			g = G(arguments),
			x = g[0], y = g[1],
			bd, b, fixts, clas
	if (S(_.last(g))) {
		clas = g.pop()
	}
	if (N(x)) {
		bd = b2d.stat(x, y)
		fixts = _.rest(g, 2)
	}
	else {
		if (b2d.isBDef(x)) {
			bd = x
		}
		else {
			x = V(x);
			bd = b2d.stat(x.x, x.y)
		}
		fixts = _.rest(g)
	}
	b = w.CreateBody(bd)
	if (fixts.length) {
		b.H.apply(b,
				fixts
				//   _.map(fixts, function(f){   return A(f)?f:[f]  })
		)
	}
	if (clas) {
		b.K(clas)
	}
	return b
}
function old() {
	f.setKill = function () {
		var f = this, b = f.body(), w = b.wor()
		w.flag(flagNum = Math.random())
		cjs.tick(function () {
			if (w.flagged(flagNum)) {
				f.kill()
			}
		})
	}//clever use of flagging.. but not needed
	f.Vold = function () {//f.rotVerts=
		return this.wVerts()
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
	f.DIFFold = function (b2) {
		var f = this, b = f.B(), g = G(arguments), b2 = g[0]//,diff
		// diff =  Math.poly( f.V() ).difference(  Math.poly( b2.V() ) )
		diff = f.minus(b2)
		//if( ! b2d.hasVerts(diff) ){ f.kill(); return }
		// b.conc(   b.rel(diff) )
		b.conc(diff)
		f.kill()
		if (g.n) {
			b2.kill()
		}
		return this
	}
	f.is = function (kindOrFixt) {
		if (S(kindOrFixt)) {
			return this.K() == kindOrFixt
		}
		if (b2d.isFixt(kindOrFixt)) {
			return this == kindOrFixt
		}
		return false
	}
	f.of = function (what) {
		return this.is(what) || (this.B().K() == what)
		return false
	}
	f.remove = function () {
		this.B().destroyFixt(this)
	}
	f.kill = function () {
		if (this.sprite) {
			this.sprite.remove()
		}
		this.remove();
		return
	}
	f.coll = function (what, func) {
		var that = this, beginFunc
		if (F(what)) {
			func = what
			func = _.bind(func, this)
			beginFunc = function (cx) {
				if (cx.A() == that) {
					func(cx.B())
				}
				if (cx.B() == that) {
					func(cx.A())
				}
			}
			w.begin(beginFunc)
			return this
		}
		func = _.bind(func, this)
		if (S(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.B().of(what)) {
					func(cx.B())
				}
				if (cx.B() == that && cx.A().of(what)) {
					func(cx.A())
				}
			}
		}
		else if (b2d.isFixt(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.B() == what) {
					func(cx.B())
				}
				if (cx.B() == that && cx.A() == what) {
					func(cx.A())
				}
			}
		}
		else if (b2d.isBody(what)) {
			beginFunc = function (cx) {
				if (cx.A() == that && cx.b() == what) {
					func(cx.B())
				}
				if (cx.B() == that && cx.a() == what) {
					func(cx.A())
				}
			}
		}
		w.begin(beginFunc)
		return this
	}
	f.next = function () {
		return this.GetNext()
	}
	f.de = f.den = f.d = function (den) {
		if (U(den)) {
			return this.GetDensity()
		}
		this.SetDensity(den)
		return this
	}
	f.fr = f.fric = f.f = function (fric) {
		if (U(fric)) {
			return this.GetFriction()
		}
		this.SetFriction(fric);
		return this
	}
	f.re = f.rest = f.r = function (rest) {
		if (U(rest)) {
			return this.GetRestitution()
		}
		this.SetRestitution(rest);
		return this
	}
	f.H = function (shape) {
		if (U(shape)) {
			return this.GetShape()
		}
		this.m_shape = shape
		return this
	}
	f._mD = function () {
		return this.GetMassData()
	}
	f.mD = function () {
		var d = this.GetMassData()
		d.c = d.center
		d.m = d.mass
		return d
	}
	f.mass = function () {
		return this._mD().mass
	}
	f.iC = f.isCir = function () {
		return this.H() && this.H().m_type == 0
	}
	f.X = function () {
		return this.XY().x
	}
	f.Y = function () {
		return this.XY().y
	}
	f.XY = function () {
		var f = this;
		if (!f.isCir()) {
			return V(0, 0)
		}
		var h = f.H()
		return V(h.m_p.x, h.m_p.y).m()
	}
	f.hT = f.hType = function () {
		return this.H() && this.H().m_type
	}
	f.rad = function () {
		return this.H().m_radius * 30
	}
	f.iC = function () {
		return this.H() && this.H().m_type == 0
	}
	f.getShape = f.H = function (h) {
//should let user specify dimensions of shape, 
// not just have to pass formed shape in
		if (U(h)) {
			return this.GetShape()
		}
		this.m_shape = h
		// it DOES WORK! 
		return this
		// but is this much different than 
		// just replacing the fixt?
	}
	f.hT = f.hType = function () {
		return this.H().m_type
	}
	f.cen = f.mid = f.cent = f.center = function () {
		//center point of its BOUNDING BOX
		var f = this, b = f.B(), w = b.W(), g = G(arguments),
				bd = f.GetAABB(),
				v = M.lC(bd.lowerBound, bd.upperBound).mult()
		if (g.p) {
			w.dot(v)
		}
		return v
	}
	f.setOld = function (x, y) {//dep?
		this.shape.Set(x, y)
		return this
	}
	f.sABOld = function (a, b, p, A) {//dep?
		if (!p) {
			this.shape.SetAsBox(a / 30, b / 30)
		}
		else {
			this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
		}
		return this
	}
	f.pos = function () {// for circs
		return V(this.H().m_p.x * 30, this.H().m_p.y * 30)
	}
	f.pX = function () {
		return this.pos().x
	}
	f.pY = function () {
		return this.pos().y
	}
}