bH = b2d.Shape.prototype
cH = b2d.CircleShape.prototype
pH = b2d.PolygonShape.prototype
bH.ty = function () {
	return b2d.iH(this)
	bH.GT = function () {
		return this.GetType()
	}
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
bH.tP = bH.tPt = function (tf, v, y) {
	var bH = this
	//bH.test = h.point =
	function alt() {
		bH.testPoint = h.tP = function (tf, vec) {
			return this.TestPoint(tf, vec)
		}
		bH.TP = function (x, y) {
			return this.TestPoint(x, y)
		}
		bH.tPt = bH.tP = function (x, y) {
			var bH = this
			alert('bH.tPt tP')
			return bH.TP(x / 30, y / 30)
		}
	}
	
	return this.TestPoint(tf, V(v, y).div())
}
cH.XY = function (x, y) {
	var cH = this;
	cH.GLP = function () {
		return this.GetLocalPosition()
	}
	cH.SLP = function () {
		this.SetLocalPosition.apply(this, arguments)
		return this
		//cH._sLP =
	}
	if (U(x)) {
		return this.GLP().m()
	}
	return this.SLP(V(x, y).d())
	function alt() {
		cH.xy = function (x, y) {
			var pos = V(x, y).d()
			return this._sLP(pos)
		}
	}
	
	//cH.xy =cH.lP = cH.sLP =
}
pH.box = function () {
	isArgs = function (g) {
		return g.A || _.isArguments(g.f)
	}
	toArgs = function (g) {
		return isArgs(g) ? g.f : g
	}
	var pH = this, g = G(arguments)
	pH.sAB = function (args) {
		var pH = this, g = G(arguments), o
		pH.SAB = function (wd, ht) {
			this.SetAsBox(wd, ht);
			return this
		}
		pH.SAOB = function (wd, ht, pos, ang) {
			this.SetAsOrientedBox(wd, ht, pos, ang)
			return this
		}
		o = O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
				N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
						N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
						{rt: g.f}
		o.w = (o.w || 100) / 60
		o.h = (o.h || 100) / 60
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.v = V(o.x, o.y).d()
		o.rt = M.tR(o.rt || 0)
		return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
				pH.SAB(o.w, o.h)
		function alt() {
			pH.setAsBox = pH.sAB = function (wd, ht, xy, ang, ang2) {

//handles both box and set as box!
//w,h -> centered box
//w,h,xy,ang -> oriented box
//w,h,x,y,ang ->oriented box
				var h = this,
						g = G(arguments),
						wd = (g[0] || 100) / 60,
						ht = (g[1] || wd) / 60,
						xy = g[2],
						ang = g[3],
						ang2 = g[4]
				toR = Math.toRadians
				h.box = h.SetAsBox
				h.oBox = h.SetAsOrientedBox
				if (U(xy)) {
					h.box(wd, ht)
				}
				else if (N(xy)) {
					h.oBox(wd, ht, V(xy, ang).div(), toR(ang2 || 0))
				}
				else {
					h.oBox(wd, ht, xy.div(), toR(ang || 0))
				}
				return this
			}
		}
	}
	return pH.sAB.apply(pH, toArgs(g))
	function alt() {
		pH.box = function () { // tx uses!
			var pH = this, g = G(arguments),
					o = G.boxBox(g)
			pH._box = function () {
				var pH = this
				pH.SetAsOrientedBox.apply(this, arguments)
				return pH
			}
			return pH._box(
					o.w / 60,
					o.h / 60,
					V(o.x, o.y, '-'),
					M.tR(o.rt)
			)
		}
	}
}
pH.arr = function () {
	var pH = this, g = G(arguments)
	pH.sAA = function (arr) {
		var pH = this
		pH.SAA = function (arr, arrLen) {
			this.SetAsArray(arr, arrLen)
			return this
		}
		return this.SAA(arr, arr.length)
	}
	var pts = g.s ? arguments :
			g.f
	a = arr = _.m(pts, function (pt) {
		var v = V(pt)
		return V(v.x, v.y).d()
	})
	pH.sAA(arr)
	return pH
	function alt() {
		pH.arr = function () {
			var v
			v = b2d.verts.apply(null, arguments)
			this.SetAsArray(v, v.length)
			return this
		}//pH.setAsArray=p.sAA=function(a,b){if(U(b)){b=a.length}; this.SetAsArray(a, b); return this}
		pH.arr = function (v) {
			var p = this
			v = _.m(v, function (v) {
				return V(v).d()
			})
			p.SetAsArray(v, v.length)
			return p
		}
	}
}
$cH = function (r, x, y) {
	var g = G(arguments)
	var r = N(g.f, 50)
	var cH = __$cH(r)
	if (g.s) {
		cH.lP(g.s, g.t)
	}
	return cH
	function __$cH(rad) {
		rad = rad || 25
		return new b2d.CircleShape(rad / 30)
	}
	
	function alt() {
		_$cH = b2d.cH = b2d.circH = b2d.circShape = b2d.circleShape = b2d.cSh = function (rad, x, y) {
			rad = N(rad) ? rad : 25
			return new b2d.CircleShape(rad / 30).xy(x, y)
			function alt() {
				b2d.cirOld = function () {
					var g = G(arguments)
					var o = G.boxCir(g)
					var cH = $cH(o.r, o.x, o.y)
					var fD = $fD(cH, g.o)
					fD.den(o.d)
					return fD
				}
				b2d.circ = function (rad, x, y, den) {
//make a circ fixture
// neg-> sensor
					var g = G(arguments),
							rad = N(g[0]) ? g[0] : 50,
							x = N(g[1]) ? g[1] : 0,
							y = N(g[2]) ? g[2] : 0,
							den = N(den) ? den : 1
					fixt = b2d.fixt(b2d.circH(rad).xy(x, y)).den(den)
					if (g.n) {
						fixt.isSensor = true
					}
					return fixt
					//hmm.. fixt doesnt have a rel loc.. its shape does
					//what if u want to change 'shape' of shape, but keep its rel loc?
				}
			}
		}
		$cH = function (r, x, y) {
			r = N(r) ? r : 50
			var h = __$cH(r)
			if (N(x) && N(y)) {
				h.XY(x, y)
			}
			return h
		}
	}
	
	//= b2d.cH
}
$pH = function (W, H, x, y, a) {//if you want to understand oriented boxes, understand this:
	_$pH = function () {
		var g = G(arguments)
		var p = new b2d.PolygonShape()
		p.sAB.apply(p, arguments)
		return p
	}
	//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
	//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments)
	var pH = new b2d.PolygonShape()
	if (g.N_) {
		pH.box(g.f, g.s, g.t, g.fo, g.fi)
	}
	else if (g.OO_) {
		$a(pH, 'arr', g)
	}
	return pH
	function alt() {
		$pH = function (wd, ht, xy, ang, ang2) {
			var pol = new b2d.PolygonShape()
			var g = G(arguments)
			var wd = (g[0] || 100) / 60
			var ht = (g[1] || wd) / 60
			var xy = g[2]
			var ang = g[3]
			var ang2 = g[4]
			if (U(xy)) {
				pol.SetAsBox(wd, ht)
			}
			else if (N(xy)) {
				pol.SetAsOrientedBox(wd, ht, V(xy / 30, ang / 30), M.tR(ang2 || 0))
			}
			return pol
		}
	}
} //= b2d.pH
$rH = function (a, b, c, d, e) {
	return $pH().box(a, b, c, d, e)
} //= $bH
$aH = function () {
	var g = G(arguments)
	var aH = $pH()
	aH.arr.apply(aH, g)
	return aH
}
$cF = function () {
	var g = G(arguments)//r,x,y
	var cH = b2d.cH(g.f)
	var fD = $fD(cH, g.s, g.t)
	return fD
	function alt() {
		$cF = function (rad, x, y) {
			var g = G(arguments), fixt
			rad = g[0];
			x = g[1];
			y = g[2];
			rad = rad || M.r() + .1
			x = N(x) ? x : 0
			y = N(y) ? y : x
			var circle = $cH(rad)
			circle.SetLocalPosition(V(x, y, '-'))
			fixt = $fD(circle)
			if (g.n) {
				fixt.isSensor = true
			}
			return fixt
		}
	}
} //$cir = $cFD = b2d._cir = b2d.cFD =
$pF = function (wd, ht, x, y, rt) {
	var rec = $pH(wd, ht, x, y, rt)
	var fD = $fD(rec)
	return fD
} //$rec = $pFD =
$rF = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments), fixt
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	wd = wd || 100
	ht = N(ht) ? ht : wd
	fixt = $fD(
			__polyShape = $pH(wd, ht, xy, ang, ang2)
	)
	fixt.density = 1
	fixt.friction = .2
	fixt.restitution = .2
	if (g.n) {
		fixt.isSensor = true
	}
	return __fixt = fixt
}
$pC = b2d.polyCirc = function (rad, prec) {
	rad = N(rad) ? rad : 20
	prec = N(prec) ? prec : 20
	var arr = [],
			ang = 2 * Math.PI / prec
	_.times(prec, function (i) {
		arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
	})
	return arr
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
w.perch = w.skyPerch = function (col) {
	var w = this
	col = col || 't'
	w.S(200, 50, col, 300, 20) //top
	w.S(200, 360, col, 300, 20) //bottom
	w.S(60, 240, col, 20, 260) //left
	w.S(340, 320, col, 20, 100)//right
	return w
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
w.ball = w.ba = function (x, y, r) {
	var w = this,
			ball
	if (O(x)) {
		r = N(x.r) ? x.r : y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 100 //change to center x
	y = N(y) ? y : x
	r = N(r) ? r : 30
	ball = w.dyn(
			x, y, b2d.circ(r)
	)
	return ball.K('ball')
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
w.kin = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.kin(x, y), fixtDef)
	return body
}
w.stat = function (x, y, fixtDef) {
	var body
	if (O(x)) {
		fixtDef = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500
	y = N(y) ? y : 250
	body = this.A(b2d.stat(x, y), fixtDef)
	return body
}
w.bump = w.bumper = w.baa = function (x, y, r) {
	x = x || 100
	y = N(y) ? y : x
	r = r || 20
	return this.A(b2d.stat(x, y), b2d.circ(r)).K('bumper')
}
w.box = w.bi = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
}
w.brick = w.bii = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
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
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bindSprite2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
//lin damp 2????
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
w.polyCirc = function (x, y, rad, sides) {
	var b = this.dyn(x, y),
			pc = b2d.polyCirc(rad, sides)
	b.poly.apply(b, pc)
	return b
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
w.vertsKin = function (x, y, arrs) {
	var bod = this.kin(x, y)
	_.each(arrs, function (arr) {
		bod.convex(arr[0], _.rest(arr))
	})
	return bod
}
b2d.body = b2d.bodyDef = BodyDef = bDf = function (x, y) {
	var bodyDef = new b2BodyDef()
	x = N(x) ? x : 300
	y = N(y) ? y : 300
	bodyDef.xy(x, y)
	return bodyDef
}
b2d.dyn = function (x, y) {
	return b2d.body(x, y).dyn()
}
$bD = function (x, y) {
	var v = V(x, y)
	var bD = new b2d.BD()
	bD.XY(N(v.x, 0), N(v.y, 0))
	return bD.dyn()
}
$dBD = $bD = b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn = function (x, y) {
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}
$dB = function (x, y) {
	return $bD(x, y).dyn()
}//$dBD =   b2d.bD =   b2d.dBD =
$bD = function (x, y) {
	var bD = new b2d.bodyDef
	bD.xy(x, y)
	return bD
}
$dB = function (x, y) {
	return $bD(x, y).T(2)
}
_$fD = function (shape) {
	var fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	return fixt
}
$fD = b2d.fD = b2d.f = function () {
	var g = G(arguments)
	var fD = new b2d.FixtureDef
	if (g.n) {
		fD.isSensor = true
	}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
}
stat()
kin()
function kin() {
	$kBD = b2d.kD = function (x, y) {
		return $dBD(x, y).T(1)
	}
	b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
		return b2d.bodyDef(x, y).T(1)
	}
	$kB = $kBD = b2d.kD = function (x, y) {
		return $bD(x, y).T(1)
	}
}
function stat() {
	$sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
		return $dBD(x, y).stat()
	}
	b2d.stat = function (x, y) {//b2d.staticDef = b2d.staticBodyDef =StaticBodyDef=sBD=
		return b2d.body(x, y).stat()
	}
	$sB = $sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
		return $bD(x, y).stat()
	}//
	$sB = function (x, y) {
		return $bD(x, y).T(0)
	}
}
w.A = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w.B = function () {
	var w = this, g = G(arguments), o
	return g.u ? w.bd() :
			w.cB.apply(w, arguments)
}
w.D = function () {
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
}//   super star !
w.S = w.stat = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.B($sB(x, y), fD)
}
w.bulBD = w.bul = function (x, y) {
	return this.B($bulBD(x, y))
}
w.bmp = w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
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
w.brk = w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
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
w.roc = w.rck = w.rock = w.pS = function (x, y) {
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
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
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
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.B($sB(0, 0))
	eg.f($eF(a, b, c, d))
	return eg
}
//basic body creation from body defs
w.cB = function (bD) {
	return this.CreateBody(bD)
}
w.dB = function (x, y) {
	return this.cB($dBD(x, y))
}
w.sB = function (x, y) {
	return this.cB($sBD(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
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
//function Bod() {
w.circleStat = function (x, y, r) {
	var cir = w.sB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.circle = function (x, y, r) {
	var cir = w.dB(x, y)
	cir.A($cir(N(r, 50)))
	return cir
}
w.cB = w.CB = w.CBd = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.sB = function (x, y) {
	return this.CB($sB(x, y))
}
w.kB = function (x, y) {
	return this.CB($kB(x, y))
}