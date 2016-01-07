$L('worldGenerate', 'worldMove', 'bod', 'shapeTy', 'spazMath', 'toFixed')
function worldGenerate() {
	$pC = b2d.polyCirc = function (rad, prec) {
		rad = N(rad) ? rad : 20
		prec = N(prec) ? prec : 20
		var arr = [],
				ang = 2 * Math.PI / prec
		_.t(prec, function (i) {
			arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
		})
		
		return arr
		
		function alt() {
			w.polyCirc = function (x, y, rad, sides) {
				var b = this.dyn(x, y),
						pc = b2d.polyCirc(rad, sides)
				b.poly.apply(b, pc)
				return b
			}
		}
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
	$sqH = function () {
		var g = G(arguments)
		var o = N(g.t) ?
		{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
		{sz: g.f, rt: g.s}
		o.sz = o.sz || 50
		return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
	}
	function randBods() {
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
		w.randRects = function (ob) {
			var that = this
			ob = ob || {}
			var y = ob.y || 0,
					z = N(ob.z) ? ob.z : 1
			_.times(30, function (i) {
				that.rect(
						Math.random() * 1100 + 20,
						(Math.random() * 150 + 40) + y,
						(Math.random() * 30 + 15) * z,
						(Math.random() * 30 + 15) * z
				).stat().K('randomRect')
			})
			return this
		}
		w.addRandomBody = w.randomFixture = function () {
			var body = this.dynamic(Math.random() * 1000, 100,
					b2d.randomFixture())
			return body
		}
		w.random = w.addRandomBodies = function (howMany) {
			howMany = howMany || 10;
			var that = this
			_.times(howMany, function (num) {
				that.addRandomBody()
			})
			return this
		}
		w.addTenBalls = function (num) {
			num = num || 10;
			var that = this
			_.times(num, function (i) {
				that.ball(100 + (i * 80), 200)
			})
			return this
		}
		w.addHundBalls = function (num) {
			num = num || 100;
			var that = this
			_.times(num, function (i) {
				that.circ(100 + (i * 8), 50, 10)
			})
			return this
		}
	}
	
	function bull() {
		w.bulBD = w.bul = function (x, y) {
			return this.B($bulBD(x, y))
		}
		w.bul = function (x, y) {
			var def, body
			def = b2d.dyn(x, y)
			def.bullet = true
			body = this.createBody(def)
			return body
		}
		w.polyBul = function (x, y, wd, ht, col) {
			var bul = this.bul(x, y)
			bul.poly(wd, ht)
			if (col) {
				bul.bindSprite2(
						cjs.rect(wd, ht, oO('c', col)).XY(x, y).a2(this.s)
				)
			}
			return bul
		}
	}
	
	w.perch = w.skyPerch = function (col) {
		var w = this
		col = col || 't'
		w.S(200, 50, col, 300, 20) //top
		w.S(200, 360, col, 300, 20) //bottom
		w.S(60, 240, col, 20, 260) //left
		w.S(340, 320, col, 20, 100)//right
		return w
	}
	w.dynX = w.dynamicX = function (x, y, fD) {
		var w = this, body
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return w.body(b2d.dyn(x, y), fD)
	}
	bx.f = function (k) {
		var arr = []
		w.each(function (b) {
			b.each(function (f) {
				if (f.is(k)) {
					arr.push(f)
				}
			})
		})
		return arr
	}
	bx.b = function (k) {
		var arr = []
		w.each(function (b) {
			if (b.of(k)) {
				arr.push(b)
			}
		})
		return arr
	}
	w.circleStat = function (x, y, r) {
		var cir = w.sB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.circStat = function (x, y, radius, color) {
		var wd = this.s.W(),
				ht = this.s.H()
		x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
		y = N(y) ? y : 50
		radius = N(radius) ? radius : _.random(14) + 8
		color = oO('c', color || $r())
		return this.bump(x, y, radius).bindSprite2(
				cjs.circ(radius, color).XY(x, y)
		).linDamp(2)
	}
	w.brickSensor = function (x, y, W, H) {//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return this.A(b2d.stat(x, y),
				b2d.poly(W, H).r(0).sensor(true))
				.K('brickSensor')
	}
	w.rectStat = function (x, y, wd, ht, color) {
		x = N(x) ? x : 200
		y = N(y) ? y : 50
		wd = N(wd) ? wd : 50
		ht = N(ht) ? ht : wd
		color = oO('c', color || $r())
		return this.brick(x, y, wd, ht).bindSprite2(
				cjs.rect(wd, ht, color).XY(x, y)
		).linDamp(2)
	}
	w.roc = w.rck = w.rock = w.pS = function (x, y) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('rock')
	}
	w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
		stop1 = N(stop1) ? stop1 : 0
		stop2 = N(stop2) ? stop2 : 1
		col1 = oO('c', col1);
		col2 = oO('c', col2)
		return this.ball(x, y, r).bindSprite2(
				this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
						0, 0, 0, 0, 0, r).dc(0, 0, r))
	}
	w.bag = w.pD = function (x, y) {
		var b = w.D(x, y), g = G(arguments)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('bag')
	}
	w.pBul = w.polyBul = function (x, y, wd, ht, c) {
		alert('w.pBul polyBul worldcreate.js')
		var w = this
		var bul = w.bul(x, y)
		bul.poly(wd, ht)
		if (c) {
			bul.bS2($rGx(wd, ht, oO('c', c))
					.XY(x, y).a2(w.s))
		}
		return bul
	}
	w.eg = w.edge = function (a, b, c, d) {
		var w = this
		var eg = w.B($sB(0, 0))
		eg.f($eF(a, b, c, d))
		return eg
	}
	w.verts = function (x, y, arrs) {
		var bod = this.dyn(x, y)
		_.each(arrs, function (fixt) {
// bod.convex( arr[0],  _.rest(arr)  )
			//  bod.convex( fixt )
			bod.convex.apply(bod, fixt)
		})
		return bod
	}
	w.circle = function (x, y, r) {
		var cir = w.dB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.addCirc = function (x, y, radius, color) {//specific to talkjs
		x = N(x) ? x : parseInt(Math.random() * 2200 - 1000)
		y = N(y) ? y : parseInt(Math.random() * 1600 - 1000)
		radius = N(radius) ? radius : _.random(14) + 8
		color = oO('c', color || $r())
		this.ball(x, y, radius).bindSprite2(
				cjs.circ(radius, color).XY(x, y)).linDamp(2)
	}
	w.circ = function (x, y, rad, col) {
		var ball, w = this
		// will err on random x,y.. dont like it. that should be with '*' (explicityly ONLY for something like this)
		var wd = this.s.W(),
				ht = this.s.H()
		x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
		y = N(y) ? y : 50
		rad = N(rad) ? rad : _.random(14) + 8
		ball = w.ball(x, y, rad).linDamp(2)
		ball.bindSprite2(w.s.cir(x, y, rad, col))
		return ball
	}
	w.ds = w.dB = function (b) {
		var w = this, g = G(arguments), o
		return g.u ? w.eB(function (b) {
			w.destroy(b)
		}) : w.DB(b)
	}
	w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = function (b) {
		var w = this
		if (U(b)) {
			w.each(function (b) {
				w.destroy(b)
			})
		}
		else {
			w.DestroyBody(b)
		}
		return w
	}
	w.R = function (c, W, H, x, y) {
		var w = this, wC = w.cent(),
				r,
				g = G(arguments)
		if (!S(g[0])) {
			y = x;
			x = H;
			H = W;
			W = c;
			c = 'x'
		}
		if (U(W)) {
			W = 200
			H = 200
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(H)) {
			H = W
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(x)) {
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		y = N(y) ? y : x
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
		r = w.S(x + (W / 2), y + (H / 2), c, W, H)
		return r
	}
}
function worldMove() {
	w.left = w.horiz = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.X(num, '-')
		})
	}
	w.up = w.vert = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.Y(num, '-')
		})
	}
}
function joint() {
	$dJt = function (a, b) {
		var jd = new b2d.DistanceJointDef
		jd.bodyA = a
		jd.bodyB = b
		return jd
	}
	BOXDISTJOINT = BDJ = function () {
		w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
		_.ev(.1, function () {
			w.go(1 / 5, '+')
		})
		w.dB(500, 1000).A($rec(1200, 100)).stat()
		b = w.dB(210, 230)
		b.A($cir(70).DBF(1, .3, .4))
		r = w.dB(200, 60)
		r.A($rec(100, 200))
		r.den(1)
		jd = $dJt(b, r)
		w.CreateJoint(jd)
	}
}
function spazMath() {
	v.tA = function () {
		return [this.x, this.y]
	}
	b2d.tA = function (vs) {
		return _.m(vs, function (v) {
			return v.tA(v)
		})
	}
	V0 = function (x, y) {
		if (O(x)) {
			return V0(V(x).x, V(x).y)
		}
		return {x: N0(x), y: N0(y)}
	}
	b2d.AB = function (x1, y1, x2, y2) {
		var ab = new b2d.Collision.b2AABB()
		ab.lowerBound.Set(x1 / 30, y1 / 30)
		ab.upperBound.Set(x2 / 30, y2 / 30)
		return ab
		function alt() {
			b2d.AABB = function (a, b, c, d) {//this is the one that works!
				var aabb = new b2AABB()
				aabb.lowerBound.Set(a, b)
				aabb.upperBound.Set(c, d)
				return aabb
			}
		}
	}
	$AB = $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
		var ab = new b2d.AABB() // ??
		ab.lowerBound.Set(a, b)
		ab.upperBound.Set(c, d)
		return ab
		function alt() {
			$AB = b2d.AB = function () {
				var g = G(arguments), ab = new b2d.Collision.b2AABB
				if (g.p) {
					ab.lUB(g.f, g.s, g.t, g.f)
				}
				else if (U(g.t)) {
					ab.pt(g.f, g.s)
				}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
				else {
					ab.lUB(g.f, g.s, g.t, g.fo, '-')
				}
				return ab
			}
			$AB = b2d.AB = function () {
				var g = G(arguments), ab = new b2d.Collision.b2AABB
				if (g.p) {
					ab.lUB(g.f, g.s, g.t, g.f)
				}
				else if (U(g.t)) {
					ab.pt(g.f, g.s)
				}			//ab.lUB(g.f/30 - 0.01, g.s/30 - 0.01, g.f/30 + 0.01, g.s/30 + 0.01)
				else {
					ab.lUB(g.f, g.s, g.t, g.fo, '-')
				}
				return ab
			}
			AABB = AB = function (a, b, c, d) {
				var ab = new b2AABB()
				ab.lowerBound.Set(a, b)
				ab.upperBound.Set(c, d)
				return ab
			}//b2d.AB =
		}//get rectangle by two coords
	}
	AB001 = b2d.AB0001 = b2d.AB0001 = function (a, b) {
		return $aB(a - .001, b - .001, a + .001, b + .001)
		function alt() {
			AB001 = function (a, b) {
				return AB(a - .001, b - .001, a + .001, b + .001)
			}
		}
	}
	b2d.AABB01 = function (x, y) {//now used div
		var v = V(x, y).div(),
				x = v.x,
				y = v.y
		return this.AABB(x - .001, y - .001, x + .001, y + .001)
	}
	b2d.tf = function (v1, v2, v3) {
		if (U(v1)) {
			return new b2d.Math.b2Transform()
		}
		if (A(v1)) {
			return b2d.tf(
					V(v1[0], v1[1]),
					V(v1[2], v1[3]),
					V(v1[4], v1[5]))
		}
		var tf = new b2d.Math.b2Transform(v1, b2d.mat22(v2, v3))
		return tf
	}
	b2d.M.b2Transform.prototype.toArr = function () {
		var tf = this
		var pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
}
b2d.tF = b2d.toFxt = function (f) {
	return b2d.iB(f) ? f.f() : f
}
function toFixed() {
	v.dec = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
	v.tF = v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.toFixed = function (n) {
		n = N(n) ? n : 2
		var v = V(
				Number(this.x.toFixed(n)),
				Number(this.y.toFixed(n)))
		return v
	}
	v.tF = v.f = v.dec = v.toFixed = function (n) {
		var v = this
		n = N(n, 1)
		return V(
				Number(v.x.toFixed(n)),
				Number(v.y.toFixed(n))
		)
	}
}
function alpha() {
	b.L = b.linear = function (vx, vy, damp) {
		var b = this
		if (U(vx)) {
			b.lV(0, 0).lD(0)
		}
		else {
			b.vX(vx)
			if (N(vy)) {
				b.vY(vy)
			}
			if (N(damp)) {
				b.lD(damp)
			}
		}
		return b
	}
	b.dm = b.damp = function (l, a) {
		l = N(l) ? l : 1000
		a = N(a) ? a : l
		this.lD(l).aD(a)
		return this
	}
}
bD.inertia = function (inertia) {
	if (U(inertia)) {
		return this.insertiaScale
	}
	this.insertiaScale = inertia;
	return this
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
Array.prototype.sensor = function (kind) {
	this.isSensor = kind || true
	return this
}
v.r = v.rt = v.rot = function (rot) {
	var x = this.x, y = this.y,
			rot = Math.toRadians(rot),
			cos = Math.cos, sin = Math.sin
	return V(
			x * cos(rot) - y * sin(rot),
			x * sin(rot) + y * cos(rot)
	).dec(3)
}
bH.rad = function (r) {
	var bH = this;
	bH.GR = function () {
		return this.GetRadius()
	}
	bH.SR = function (rad) {
		this.SetRadius(rad);
		return this
	}
	bH.sRad = function (r) {
		var bH = this
		if (bH.ty() == 'c') {
			return bH.SR(r / 30)
		}
		bH.m_radius = r / 30
		return bH
	}
	bH.gRad = function () {
		var bH = this
		return bH.ty() == 'c' ? bH.GR() * 30 :
		bH.m_radius * 30
	}
	return U(r) ? bH.gRad() : bH.sRad(r)
}
b.GWC = function () {
	return this.GetWorldCenter()
}
b2Color = b2d.Cm.b2Color
f.rot = function (rot, g) {
	return this.B().rot(rot, g)
}
f.killBody = function () {
	this.B().kill()
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
b.GCxL = function () {
	return this.GetContactList()
}
b.GCoL = function () {
	return this.GetControllerList()
}
b.GJL = function () {
	return this.GetJointList()
}
b.M = function () {
	return this.Merge.apply(this, arguments) || this
}
b.S = function () {
	return this.Split.apply(this, arguments) || this
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
b.GLVFLP = b.GlVLP = function () {
	return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
}
b.GLVFWP = function () {
	return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
}
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
}
b.GLV2 = function () {
	return this.GetLocalVector()
}
b.GWV2 = function () {
	return this.GetWorldVector()
}
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
b.GLP = function () {
	return this.GetLocalPoint.apply(this, arguments)
}
b.GWP = b.GWPt = function () {
	return this.GetWorldPoint.apply(this, arguments)
}
w.oMD = function () {
	var c = $(w.s.HUD.canvas)
	c.mousedown(function (e) {
		o.dx = e.clientX - w.s.x
	})
}
// world mouse down vs canvas mouse down!!!
// canvas mouse down just uses $.oMD
w.md = function (l) {
	var w = this
	$(w.hud.canvas).mousedown(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.mu = function (l) {
	var w = this
	$(w.hud.canvas).mouseup(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.mm = function (l) {
	var w = this
	$(w.hud.canvas).mousemove(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.m$ = function (l) {
	var w = this
	$(w.hud.canvas).click(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.m$$ = function (l) {
	var w = this
	$(w.hud.canvas).dblclick(function (e) {
		l({x: w.mx, y: w.my})
	})
	return w
}
w.dev = function () {
	var w = this,
			d = $.div('t', 400, 600).abs(1200, 0).A(),
			d1 = $.div('x', 400, 600).abs(1600, 0).A()
	d.A($.h1('world stats'))
	d1.A($.h1('body stats'))
	return w
}
w.mark = function () {
	var w = this
	w.C('z')
	_.times(50, function (i) {
		w.S(i * 200, 0, 'w', 1, 10000).sensor(true)
	})
	_.times(50, function (i) {
		w.S(0, i * 200, 'w', 10000, 1).sensor(true)
	})
	return w
}
w.dbLayers = function () {
	var w = this
	w.dr(75, 75, 150, 150, '-')
	w.dr(140, 0, 20, 300)
	w.dr(0, 150, 300, 20)
	w.dr(100, 100, 100, 100, '+')
	return w
}
w.dbCross = function (x, y) {
	var w = this, c = w.cent()
	x = N(x) ? x : c.x
	y = N(y) ? y : c.y
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.back = function () {
	var w = this,
			back = w.s.back
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.HUD = function () {
	var w = this,
			back = w.s.HUD
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.lay = function () {
	var w = this
	w.back().HUD().db()
	return w
}
DBLAYERS = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.dbLayers()
}
MARK = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0}).mark()
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	y.XY(100, 600).rot(90).lD(0).lV(4)
}
function makeWorld() {
	getBodyAtMouse = function (mX, mY) {
		$l('getBodyAtMouse')
		return w.getBodyAtPoint(mX, mY)
	}
	handleJointsAlt = 0
	handleJoints = function () {
		
		//if mouse is dont.. make a new mouse joint, if there is none
		if (_mouseIsDown) {
			$l('mouseIsDown')
			if (_mouseJoint) {
				mj = _mouseJoint
				//  _mouseJoint.SetTarget(V(mX, mY))
			}
			else {
				_mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY))
			}
		}
		else {
			$l('mouseIsDown')
			if (_mouseJoint) {
				_mouseJoint.destroy();
				_mouseJoint = null
			}
		}
	}
	checkMouseDown = function () {
	}
	handleJoints2 = function () {// so far unchanged.. need to think
		if (_mouseIsDown && !_mouseJoint) {
			var b = getBodyAtMouse(mX, mY)
			bb = b
			if (b) {
				_mouseJoint = mouseJoint(b.awake(1))
			}
			else {
				bb.aI(10000, 10000)
			}
		}
		if (_mouseJoint) {
			if (_mouseIsDown) {
				
				// _mouseJoint.sT(mX,mY)
			}
			else {
				bb.aI(
						bbb.x() - MX,
						bbb.y() - MY
				)
				w.dJ(_mouseJoint)
				_mouseJoint = null
			}
		}
	}
	makeWallsPinball = function () {
		bii(10, 300, 20, 1200) //left
		bii(990, 300, 20, 1200)//right
		bii(300, 0, 3000, 20)//top
		// bii(300, 590, 3000, 20)//bottom
	}
	makeStage1 = function (X, Y, options) {
		canvas = c = $can(X, Y).a().bc('z')
		canvas.id('canvas')
		stage = s = SuperStage(canvas)
		T$.removeAllEventListeners()
		ctx = x = xx(canvas)
		stage.ob.autoClear = false
		if (options.bg) {
			stage.b(options.bg)
		}
	}
	setFixtures = function () {
		bD = $sB()
		fD = $fD().de(1).fr(.5).re(.8).H($pF())
	}
	makeShapeOnDblClk = function () {


//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world
		x.$$(function (x, y) {
			world.a(
					yn() ? DynamicBodyDef(x, y) : StaticBodyDef(x, y), fix()
			)
		})
	}
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
}
w.bdAt = w.bdAtPt = w.atPt = w.getBodyAtPoint = function (x, y) {
	var w = this, g = G(arguments), o
	var selectedBody = null
	w.QueryAABB(queryFunc,
			AB(x - .001, y - .001, x + .001, y + .001))
	return selectedBody ? selectedBody : false
	function queryFunc(f) {
		if (f.B().isDyn() && f.testPoint(mX, mY)) {
			// f.B().gT() !=sB && f.gSh().tP(f.B().gTf(), bV(mX,mY))
			selectedBody = f.B()
			return false
		}
		return true
	}
}
w.e = w.eB = w.each = function () {
	var w = this, g = G(arguments), o
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	var b = w.bd()
	while (b) {
		if (b.of(o.k)) {
			o.fn(b)
		}
		b = b.N()
	}
	return w
}//work on
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
} // b.eaF = 
$L('crBod', 'moveAll', 'each')
w.Q = w.qAB = function (a, b) {
	$l('w.Q =  w.qAB = ')
	var w = this
	return w.QA(a, b)
}//= w.q
w.qPoint = w.queryPoint = function (fn, x, y) {
	$l('w.qPoint = w.queryPoint = ')
	return this.QP(fn, V(x, y, '-'))
}
function each() {
	w.e$ = w.b$ = w.eachClick = w.bodyClick = function (fn) {
		var w = this
		w.eB(function (b) {
			b.$(fn)
		})
		return w
	}
	w.eD = w.eDB = w.eDyn = function (fn) {
		return this.eB(function (b) {
			if (b.iD()) {
				fn(b)
			}
		})
	}
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
};
function crBod() {
	w.bd = w.bs = w.bods = w.bL = function () {
		var bs = this.GBL()
		return bs
	}
	w.nBd = w.numBods = w.bC = w.gBC = function () {
		return this.GBC()
	}
	w.ds = w.dB = function (b) {
//if(U(a)){return w.eB(function (b) {w.destroy(b)})}
		var w = this
		w.DB(b)
		return w
	}//w.ls = 
// ok lets start here, we create a body with just a bodyDef
// so just what is this b.f?  its how a body creates a fixture
// obviously..
//but it would be nicer if we could also pass in
//one (or more (as an array)) of fixtures right away
//if we only have one fixture (simple body), then
//it is especially helpful timesaver over the long run
//(turn two steps to one!)
	w.A = w.cB = function (bD, fD) {
		var w = this
		var b = w.CB(bD)
		if (fD) {
			b.f(fD)
		}
		return b
	}
// let's meet w.D... he's a super star here!!!
	w.D = function () {
		var w = this, g = G(arguments), o
		o = O(g.f) ?
		{x: g.f.x, y: g.f.y, fD: g.s} :
		{x: g.f, y: g.s, fD: g.t}
		o.x = N(o.x) ? o.x : 500
		o.y = N(o.y) ? o.y : 250
		var dB = $dB(o.x, o.y)
		return w.A(dB, o.fD)
	}
	w.S = w.stat = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500;
		y = N(y) ? y : 250
		return this.A($sB(x, y), fD)
	}
//if u want just a ball body with one ball fixture..
// we are going to assume u want it centered
//if not, dont use this.. this is for simple uses cases..
//w.ball is easy.. pass it x, y, and r
	w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.rF.apply(b, _.r(g, 2))
		//var b = w.A($sB(x, y), $rF(W, H))
		b.decor(g)
		b.K('brick')
		return b
	}
	w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
		var w = this, g = G(arguments)
		//var b = w.A($dB(x, y), $rF(W, H))
		var b = w.D(g.f, g.s)
		b.rF.apply(b, _.r(g, 2))
		b.decor(g)
		b.K('box')
		return b
	}
	w.rock = w.pS = function (x, y) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('rock')
	}
	w.bag = w.pD = function (x, y) {
		var b = w.D(x, y), g = G(arguments)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('bag')
	}
}
w.step = function () {
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
	var args = G(arguments)
	this.Step.apply(this, args)
	return this
}
w.gv = w.G = function (x, y) {
	var v, currGrav = this.GetGravity()
	if (U(x)) {
		return currGrav
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-currGrav.x, -currGrav.y)
	}
	w.SetGravity(v)
	return this
}
function _pre() {
	w.clr = w.cF = w.ClF = w.CF = w.CFo = function () {
		this.ClearForces();
		return this
	}
	w.GBL = function () {
		return this.GetBodyList()
	}
	w.GBC = w.GBoC = function () {
		return this.GetBodyCount()
	}
	w.grB = w.gB = w.GGB = w.GGBo = function () {
		return this.GetGroundBody()
	}
	w.DB = w.DBo = function (b) {
		this.DestroyBody(b);
		return this
	}
	w.CB = w.CBo = function (bD) {
		return this.CreateBody(bD)
	}
	w.QP = w.QPt = function (fn, vec) {
		this.QueryPoint(fn, vec);
		return this
	}
	w.QA = w.QAB = function (a, b) {
		this.QueryAABB(a, b);
		return this
	}
	w.dr = w.draw = w.DDD = function () {
		this.DrawDebugData();
		return this
	}
}

w.BMP = w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.BAL = w.BALL = function (x, y, r, c) {
	var w = this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BOX = function (x, y, wd, ht, c) {
	var w = this, g = G(arguments), b, i, o
	b = w.box(x, y, wd, ht)
	b.lD(2)
	if (g.n || g.m) {
		b.mS()
	}
	if (g.p || g.m) {
		b.mBu()
	}
	i = $rGx(wd, ht, oO('c', c || 'y'))
	i.XY(g.f, g.s)
	w.st.A(i)
	b.bS2(i)
	return b
}//w.REC= w.rect = w.rectCol  =
w.BRK = w.BRICK = function (x, y, wd, ht, col) {
	var w = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht)
			.bS2(
			$rGx(wd, ht, col).XY(x, y)
	).lD(2)
}//w.rSt = w.recStat = w.rectStat =w.rSt = w.recStat = w.rectStat = 
w._BRICK_ = function (x, y, wd, ht, col) {
	var w = this
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht, '-').bS2(
			$rGx(wd, ht, col).XY(x, y).al(.5)
	).lD(2)
}//w.BRICKSENSOR =  w.rectSensor = w.rSn = w.recSen = 
w.POLY = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.D(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
	})
	return b
} //w.poly = w.verts = w.vs =
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
COL = function () {
	W(2)
	w.BUMP(100, 200, 25)
	w.BRICK(700, 200, 25)
	w.BALL(100, 100, 25)
	w.BOX()
	w.BOX(100)
	w.BOX(700, 300)
	b = w.BOX(700, 300, 25)
	w.BOX(700, 300, 25)
	w.BOX(700, 300, 25, 25)
	w.BUMP(100, 200, 25, 'r')
	w.BRICK(700, 200, 25, 'r')
	w.BALL(100, 100, 25, 'r')
	w.BOX(700, 100, 25, 'r')
}
b.CF = b.GFL = b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
}
w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}
w.BAL = w.BALL = function (x, y, radius, color) {
	var wd = this.s.W(), ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	return this.ball(x, y, radius).lD(2)
			.bindSprite2(
			this.s.cir(x, y, radius, color)
	)
}
w.BOX = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).lD(2)
}
w.BRICK = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).lD(2)
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var rect = $rF(wd, ht, x, y)
	rect.isSensor = true
	var r = cjs.rect(wd, ht, x, y).XY(b.X(), b.Y())
			.al(.3)
	w.st.A(r)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	var f = b.f(rect)
	f.sprite = r
	return f
}
function rand() {
	w.rnRecs = w.randRects = function () {
		var that = this
		_.t(30, function (i) {
			that.BRICK(
					M.r() * 1100 + 20,
					M.r() * 150 + 40,
					M.r() * 30 + 15,
					M.r() * 30 + 15
			).K('rR randomRect')
		})
		return this
	}
	w.rnF = w.randFx = function () {
		return this.dynamic(M.r() * 1000, 100,
				b2d.randomFixture())
	}
	w.random = w.addRandomBodies = function (howMany) {
		var w = this
		_.t(howMany || 10, function () {
			w.addRandomBody()
		})
		return w
	}
	w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.BALL(100 + (i * 8), 50, 10)
		})
		return w
	}
}
function fixtParse() {
	w.A = function (bD, fD) {
		var b = this.CreateBody(bD)
		if (fD) {
			A(fD) ? _.e(b2d.fixtParse(fD), function (fd) {
				b.f(fd)
			}) :
					b.f(fD)
		}
		return b
	}
	w.D = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($dB(x, y), fD)
	}
	w.S = function (x, y, fD) {
		var body
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($sB(x, y), fD)
	}
}
b._f = function (f, c) {
	var b = this, g = G(arguments), o
	f = b.CF(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.], fD, [.,.] ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				} //class not col  ???
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	else if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	} //  [ [],[],fD,4,[] ]
	/////////////////////////////////
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	} else if (g.L == 1 || g.L == 3) {
		cir()
	} else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD($cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
//recs
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
TREC = function () {
	W()
	b = w.CreateBody($bD(300, 400))
	//b.rec('r', 100,400, 400,200,33)
	b.f(30, 40, 20)
	b.f(30, 40) //nothing??
	// b.f([[20, 165, -50, -50, 45]])
	//b.f(20, 165, -50, -50, 45)
	w.D(300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
}
b.rec = b.REC = function (c, W, H, x, y, a) {
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	//if (g.OO_) {g.e(function (g) {b.rec(g) }); return b }
	//if (g.A) {return $a(b, 'rec', g)}
	if (g.O) {
		o = g.f
	}
	else {
		//if (N(g.f)) { g.ush('z') 
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
	}
	//$df.oDef(o)
	//o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().oB(o))
	//if (o.s || g.n) {fD.isSensor = true; o.al = N(o.al, 0.8)}
	//fD.d(   o.d || .5  )
	f = b.f(fD)
	//f.K(o)
	/*
	 if (o.c !== 0) {
	 // f.g=w.g.h().rec(o)
	 if (g.p) { f.g = w.g.h().rec(o) }
	 //  f.g= w.g.h().rec(o) //this for but: (does something important)
	 else {
	 f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
	 f.bS(f.g)
	 }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
	 // f.bS(f.g)
	
	
	 }*/
	return f
}
w.D = function () {
//   super star !
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
	function alt() {
		w.dyn = w.body = w.A = function (x, y, fD) {
			var w = this, b, bd
			//pass body def
			if (b2d.isBDef(x)) {
				bd = x;
				fD = y
			}
			//make body def
			else {
				if (O(x)) {
					fD = y;
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 500
				y = N(y) ? y : 250
				bd = b2d.dyn(x, y)
			}
			b = w.CreateBody(bd)
			// pass in one fixture or an ARRAY( of fixts )
			if (fD) {
				b.fixt(fD)
			}
			return b
		}
		w.B = function () {
			var w = this, g = G(arguments), o
			return g.u ? w.bd() :
					w.cB.apply(w, arguments)
		}
		w.B = w.D = function (x, y) {
			var w = this, bd, b, fixts,
					g = G(arguments),
					x = g[0],
					y = g[1], clas
			if (S(_.last(g))) {
				clas = g.pop()
			}
			if (N(x)) {
				bd = b2d.dyn(x, y);
				fixts = _.rest(g, 2)
			}
			else {
				if (b2d.isBDef(x)) {
					bd = x
				} else {
					x = V(x);
					bd = b2d.dyn(x.x, x.y)
				}
				fixts = _.rest(g)
			}
			b = w.CreateBody(bd)
			b.H.apply(b, fixts)
			if (clas) {
				b.K(clas)
			}
			return b
		}
	}
}
w.rect = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
function pol() {
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
	b.sep = function (verts, scale) {
		var body = this
		if (!O(verts)) {
			alert('b.sep in spazPol.js says: o.v must be object');
			return
		}
		if (gpc.iP(verts)) {
			verts = verts.vs()
		}
		//needs array of verts.. or one vert (which is converted here to arr)
		_.e(O(verts[0][0]) ? verts : [verts], function (v) {
			b2d.sep(body, v, scale)
		})  //  'sep' each of the verts onto the body
		return this
	}
	b.sepNew = function (vs, fn) {
		//this proxies to b.sep.. but has two advantages
		//- it returns NEW fixtures formed in an array
		//- if u pass in a function, then it loops those fxs
		// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
		var n = this.n(),
				b = this.sep(vs),
				numNewFs = b.n() - n,
				newFs = _.f(b.fs(), numNewFs)
		if (F(fn)) {
			_.e(newFs, fn)
		}
		return newFs
		//return newFs[1]? newFs: newFs[0]
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
			_.e(g.t, function (p) {
				b.pol({v: p})
			})
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
}
b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
}
b._f = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	f = b.__f(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	;
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	}//   [ [],[],fD,4,[] ]
	else if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				}
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	}
	else if (g.L == 1 || g.L == 3) {
		cir()
	}
	else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b.f = function (fs) {
	return U(fs) ? this.GFL() :
			this.CreateFixture(fs)
}
b.REC = b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var f = b.f($rF(wd, ht, x, y))
	var r = cjs.rect2(
			wd, ht, x, y).XY(b.X(), b.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rt(b.rt())
		r.XY(b.X(), b.Y())
	})
	return f
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
//recs
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
b.rec = function (c, W, H, x, y, a) {
	$l('rec')
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	if (g.OO_) {
		g.e(function (g) {
			b.rec(g)
		});
		return b
	}
	if (g.A) {
		return $a(b, 'rec', g)
	}
	if (g.O) {
		o = g.f
	}
	else {
		if (N(g.f)) {
			g.ush('z')
		}
		o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
	}
	$df.oDef(o)
	o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().box(o))
	if (o.s || g.n) {
		fD.isSensor = true;
		o.al = N(o.al, 0.8)
	}
	fD.d(o.d || .5)
	f = b.f(fD)
	f.K(o)
	/*
	 if (o.c !== 0) {
	 // f.g=w.g.h().rec(o)
	 if (g.p) { f.g = w.g.h().rec(o) }
	 //  f.g= w.g.h().rec(o) //this for but: (does something important)
	 else {
	 f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
	 f.bS(f.g)
	 }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
	 // f.bS(f.g)
	
	
	 }*/
	return f
}
w.circleStatOld = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.circleOld = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.boxOld = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.brickOld = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
}
w.box = w.bi = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A($dB(x, y), $rF(W, H)).K('box')
}
w.box = w.bo = w.bi = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.brick = w.bii = function (x, y, W, H) {
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
w.brk = w.brick = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}
w.box = w.bi = w.rect = function (x, y, W, H, c) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3], c: g[4]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sensor(true)
	}
	return b
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sensor(true)
	}
	return b
	w.box = w.bi = w.rect = w.rec = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3], c: g[4]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.w, o.h).K('box').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sensor(true)
		}
		return b
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sensor(true)
		}
		return b
	}
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.ball = function (x, y, r) {
	var w = this
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	var ball = w.dB(x, y).CF($cF(r))
	//ball.K('ball')
	return ball
}
w.ball = w.ba = function (x, y, r) {
	var w = this, ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(x, y, b2d.circ(r))
	return ball.K('ball')
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f : N(g.s) ? {
		x: g.f, y: g.s,
		r: g.t,
		c: g[3]
	} : {r: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.r = N(o.r, 50)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r)
			.d(.5).fr(0).r(.5)
			.K('ball cir')
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sen(true)
	}
	return b
}
function balDecor() {
	b.decor = function (g) {
		var b = this
		if (g.n) {
			b.mS()
		}
		else if (g.p) {
			b.mBu()
		}
		else if (g.m) {
			b.mS().mBu()
		}
		return b
	}
	w.bump = w.cS = w.bu = w.baa = function (x, y) {
		var g = G(arguments)
		var b = w.S(x, y)
		b.cF.apply(b, _.r(g, 2))
		b.decor(g)
		b.K('bump')
		return b
	}
	w.ball = w.cD = w.ba = w.cirB = function () {
		var w = this, g = G(arguments), o, b
		if (true) {
			b = w.D(g.f, g.s)
			b.cF.apply(b, _.r(arguments, 2))
		}
		else {
			o = {x: g.f, y: g.s, r: g.t}
			var b = w.D(o.x, o.y)
			b.f($cF(o.r))
		}
		return b.decor(g).K('ball')
	}
	w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
		var g = G(arguments)
		var b = w.S(x, y)
		b.cF.apply(b, _.r(g, 2))
		return b.decor(g).K('bump')
		w.bumpAlt = function (x, y, r) {
			x = x || 100
			y = N(y) ? y : x
			r = r || 20
			return this.A(b2d.stat(x, y), $cF(r)).K('bumper')
		}
	}
	w.bal = w.ball = w.cD = w.ba = w.cirB = function () {
		var w = this, g = G(arguments), o, b
		if (true) {
			b = w.D(g.f, g.s)
			b.cF.apply(b, _.r(arguments, 2))
		}
		else {
			o = {x: g.f, y: g.s, r: g.t}
			var b = w.D(o.x, o.y)
			b.f($cF(o.r))
		}
		return b.decor(g).K('ball')
	}
}
w.ball = w.ba = w.cir = w.circ = function (x, y, r, c) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2],
		c: g[3]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	
	b = w.D(o.x, o.y, o.c, o.r).K('ball')
			.DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sensor(true)
	}
	return b
}

w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sensor(true)
	}
	return b
}