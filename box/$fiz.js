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
function worldGenerate() {
	$pC = b2d.polyCirc = function (rad, prec) {
		rad = N(rad) ? rad : 20
		prec = N(prec) ? prec : 20
		var arr = [],
				ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
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
function bod() {
	b.polyArr = b.convex = function (col, arr, str) {
		var b = this, w = b.wor(), h, f,
		//when and if should i call .conc/.sep ?
		// i could auto-conc it.. but ill lose track of the fixts?
				g = G(arguments)
		if (g.length > 2) { //passing points direclty: ([],[],[]) or ('r',[],[],[])
			if (S(col)) {
				arr = _.rest(g)
			}
			else {
				col = 'p';
				arr = g
			}
		}
		if (!S(col)) {   // ['c', [[],[]] ]   or [[],[]]
			if (S(col[0])) {
				arr = _.rest(col);
				col = col[0]
			}
			else {
				arr = col;
				col = null
			}
		}
		if (S(_.last(arr))) {
			str = arr.pop()
		}
		f = b.poly.apply(b, arr)
		if (str) {
			f.K(str)
		}
		if (col) {
			f.bindSprite(w.s.poly(arr, col, col))
		}
		return f// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! // can check my current libs first!! :)
	}
	b.grp = function (i) {
		f = this.fixt()
		if (U(i)) {
			return f.grp()
		}
		f.grp(i);
		$l('set to ' + i)
		return this
	}
	b.onAddFxt = function () {
		this.rMD()
		return this
	}
	b.ap = function (met, g) {
		var b = this;
		return b[met].apply(b, g)
	}
	b._m = function () {
		var n = 1
		this.fs(function (f) {
			$l('#' + (n++) + ' mass: ' + f.mass())
		})
	}
	b.lC = function () {
		var b = this, w = b.W(), g = G(arguments)
		//gives {x,y}, but of its CENTER-OF-MASS
		if (g.p) {
			return b.XY(w.hW, w.hH)
		}
		return b.GetLocalCenter().m()
	}
	b.lVL = b.linVelLoc = function (v, y) {
//lin vel from local point ... use case?
		v = V(v, y)
		return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
	}
	b.vX = function (x) {
		var b = this, g = G(arguments),
				v = b.lV()
		if (g.u) {
			return v.x
		}
		b.lV(x, v.y)
		return b
		function alt() {
			b.vX = function (x) {
				if (U(x)) {
					return this.lV().x
				}
				return this.lV(x, this.lV().y)
			}
		}
	}
	b.vY = function (y) {
		function alt() {
			b.vY = function (y) {
				if (U(y)) {
					return this.lV().y
				}
				return this.lV(this.lV().x, y)
			}
		}
		
		var b = this
		if (U(y)) {
			return b.lV().y
		}
		return b.lV(b.lV().x, y)
	}
	b.lVW = b.linVelWor = function (v, y) {//lin vel from world point
		v = V(v, y)
		return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
	}
	b.N = b.next = b.gN = function () {
		return this.GetNext()
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
	b.wC = function () {
		var b = this,
				w = b.W(),
				g = G(arguments)
		//gives {x,y}, but of its CENTER-OF-MASS
		if (g.p) {
			return b.XY(w.hW, w.hH)
		}
		return b.GetWorldCenter().m()
		function alt() {
		}
	}
	b.wCent = b.wC = b.cent = function () {
		var b = this, w = b.wor()
		var g = G(arguments)
		if (g.P) {
			return b.GetWorldCenter().mult()
		}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
		b.XY(
				w.W() / 2, w.H() / 2
		)
		return b
		function alt() {
			b.worldCenter = function () {
				return this.GetWorldCenter()
			} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
		}
	}
	b.tf = b.transform = function (tf) {
		var b = this
		if (U(tf)) {
			return b.GetTransform()
		}
		b.SetTransform(tf)
		return b
	}
	b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
		return this.GetWorldPoint(V(x, y).div()).mult()
	}
	b.pol = b.poly = function () {
		return this.f($pF.apply(null, arguments))
	}
	b.DF = b.dsFx = function (fixt) {
		this.DestroyFixture(fixt)
		return this
	}
	b.empty = b.clear = function () {
		return this.fs(function (f) {
			f.kill()
		})
	}
	b.rmF = function (f) {
		if (f) {
			this.DF(f)
		}
		else {
			this.fs(function (f) {
				this.rmF(f)
			})
		}
		return this
	}
	b.H = function (arg) {
		var b = this, g = G(arguments), arg = g[0],
				len = length(g)
		if (U(arg)) {
			return this.f().H() // return b
		}
		//passing a single array, suggest MULTIPLE fixts
		//[f1,f2,..]
		if (A(g[0]) && U(g[1])) {
			_.each(g[0], function (a) {
				b.H.apply(b, a)
			})
		}
		
		
		//[col,[f1,f2,..]]
		else if (S(g[0]) && A(g[1]) && U(g[2])) {
			_.each(g[1], function (f) {
				if (b2d.isFixtDef(f)) {
					b.fixt(f).C(g[0])
				}
				else {
					if (!S(f[0])) {
						f = _.map(f, function (a) {
							return a
						})
						//*** ?
						f.unshift(g[0])
					}
					if (b2d.isFixtDef(f[1])) {
						b.fixt(f[1]).C(f[0])
					}
					else {
						b.H.apply(b, f)
					}
				}
			})
		}
		//fixtDef
		else if (b2d.isFixtDef(g[0])) {
			b.fixt(g[0])
		}
		//['color', fixtDef]
		else if (S(g[0]) && b2d.isFixtDef(g[1])) {
			b.fixt(g[1]).C(g[0])
		}
		
		//verts
		else if (O(g[1])) {
			if (g.n) {
				g.push('-')
			}
			b.conc(g)
			//b.convex(g)
		}
		
		//circ
		else if (len == 1 || len == 3) {
			if (g.n) {
				g.push('-')
			}
			b.CIRC.apply(b, g)
		}
		
		//rect
		else {
			if (g.n) {
				g.push('-')
			}
			b.RECT.apply(b, g)
		}
		function length(arr) {
			var len = arr.length
			if (S(arr[0])) {
				len--
			}
			if (S(_.last(arr))) {
				len--
			}
			return len
		}
		
		return b
	}
	b.togSen = function () {
		return this.sensor(!this.sensor())
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
		function alt() {
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
		}
	}
	b.hit = function (x, y, dot) {
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
		function alt() {
			b.hit = function (x, y, dot) {
				var hit
				if (dot == true) {
					this.wor().dot(x, y)
				}
				this.eachFixt(function (f) {
					if (f.hit(x, y)) {
						hit = true
					}
				})
				return hit
			}
		}
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
function shapeTy() {
	bH.GT = function () {
		return this.GetType()
	}
	bH.ty = function () {
		return b2d.iH(this)
	}
	bH.iP = function () {
		return b2d.iP(this)
	}
	bH.iC = function () {
		return b2d.iC(this)
	}
	bH.iA = function () {
		return b2d.iA(this)
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
$L('worldGenerate','worldMove','bod','shapeTy','spazMath','toFixed')