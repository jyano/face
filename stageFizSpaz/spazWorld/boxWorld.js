easel()
short()
b2d.world = b2d.W = function (a, b) {
	var w = new b2d.World(a, D(b) ? b : false)
 
	w.startListening()
	return w
}
 
 function short(){
	 w.step = function () {
		 var args = G(arguments)
		 this.Step.apply(this, args)
		 return this
	 }
	 w.clear = w.clearForces = w.cF = function () {
		 this.ClearForces();
		 return this
	 }
w.dB = function (a) {
	this.DestroyBody(a);
	return this
}
	 w.GBL= w.bLX = function () {
		 return this.GetBodyList()
	 }
	 w.GGB = w.gB =   function () {
		 return this.GetGroundBody()
	 }
}


w.A = function (bD, fD) { 
 	var  b = this.CreateBody(bD)
	
	if (fD) {
		
		A(fD)? _.e(b2d.fixtParse(fD), function (fd) {b.f(fd)}):
				b.f(fD)
	}
	
	return b
}
w.D =  function (x, y, fD) {
	if (O(x)) {fD = y;y = x.y;x = x.x}
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


w.ball = function self(x, y, r) {
	var ball
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 30
	ball = this.D(x, y,  $cF(r))
	ball.K('ball')
	return ball
}
w.bump =  function (x, y, r) {
	x = x || 100
	y = N(y) ? y : x
	r = r || 20
	return this.A($sB(x, y), $cF(r)).K('bumper')
}
w.box = function (x, y, W, H) { 
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 50;
	H = N(H) ? H : W
	return this.A($dB(x, y), $rF(W, H)).K('box')
}
w.brick = function (x, y, W, H) { 
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
}
function easel(){
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
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
}
w.each = function (func, userData) { 	var bodies = this.GetBodyList(), kind, body
	if (S(func)) {
		kind = func;
		func = userData
	} else {
		kind = userData
	}
	while (bodies) {
		body = bodies
		bodies = bodies.next()
		if (!kind || body.is(kind)) {
			func(body)
		}
	}
	return this
}
 
w.G = function (x, y) {
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

b2d.toBody = function (fixtOrBody) {
	if (b2d.isBody(fixtOrBody)) {
		return fixtOrBody
	}
	if (b2d.isFixt(fixtOrBody)) {
		return fixtOrBody.body()
	}
	return false
}

 
Wor = b2d.W = b2d.mW = b2d.makeWorld = makeWorld = mW = function (ops) {
	var width, height
	if (!O(ops)) {
		ops = {}
	}
	width = ops.W || 1200;
	height = ops.H || 600
	w = b2d.world(V(0, 0))
	cjs.watchKeys()
	w.st = w.stage = w.s = cjs.tripleStage('r', width, height)
	w.stage.back.A()
	w.stage.A()
	w.stage.HUD.A()
	w.canvas = w.stage.canvas;
	w.c = w.can = $(w.canvas)
	canvas = $(w.canvas).id('canvas')
	w.context = w.canvas.getContext('2d')
	setInterval(function () {
		w.step(1 / 60, 10, 10).clearForces()
		w.stage.update()
	}, 1000 / 60)
	w.gameW = w.st.canvas.width
	w.gameH = w.st.canvas.height
	return w
}
w.startListening = function () {
	var w = this
	w.listen = w.sCL = w.SetContactListener
	b2d.listener = function () {
		return new b2.Dynamics.b2ContactListener
	}
	w.listener = w.listener || b2d.listener()
	w.beginHandlers = w.beginHandlers || []
	w.endHandlers = w.endHandlers || []
	w.listener.BeginContact = function (cx) {
		_.each(w.beginHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listener.EndContact = function (cx) {
		_.each(w.endHandlers,
				function (func) {
					func(cx)
				})
	}
	w.listen(w.listener)
}
w.startKilling = function () {
	var w = this
	$t(function () {
		w.each(function (b) {
			if (b.is('destroy')) {
				b.K('destroyed')
				b.kill()
			}
		})
	})
	return w
}
cx.bA = cx.a = function () {
	return this.A().gB()
}
cx.bB = cx.b = function () {
	return this.B().gB()
}
cx.fA = cx.A = function () {
	return this.GetFixtureA()
}
cx.fB = cx.B = function () {
	return this.GetFixtureB()
}
w.b = w.begin = function () {
	var that = this
	_.each(arguments, function (func) {
		that.beginHandlers.push(func)
	})
	return this
}
cx.w = cx.with = function (a, b) {
	var cx = this
	cx.includes = function (u) {
		var cx = this
		if (cx.fA().of(u)) {
			return cx.fB()
		}
		if (cx.fB().of(u)) {
			return cx.fA()
		}
	}
	cx.between = function (p1, p2) {
		var a = this.A(), b = this.B()
		if (a.of(p1) && b.of(p2)) {
			return [a, b]
		}
		if (b.of(p1) && a.of(p2)) {
			return [b, a]
		}
	}
	return b ? cx.between(a, b) : cx.includes(a)
}
w.J = w.joint = w.createJoint = w.j = w.cJ = function (a) {
	var j = this.CreateJoint(a)
	return j
}
f.q = j.fq = j.freq = function (a) {
	if (U(a)) {
		return this.GetFrequency()
	}
	this.SetFrequency(a)
	return this
}
j.l = j.len = function (a) {
	var g = G(arguments),
			len = this.GetLength() * 30
	if (U(a = g[0])) {
		return len
	}
	this.SetLength(
			$.update(len, a, g) / 30
	)
	return this
}
j.dm = j.damp = function (a) {
	if (U(a)) {
		return this.GetDampingRatio()
	}
	this.SetDampingRatio(a)
	return this
}
jd.coll = jd.collide = jd.cC = function (a) {
	this.collideConnected = a;
	return this
}
b.dist = function (nextBody) {
	var body = this
	this.W().dist(body, nextBody)
	return nextBody
}
$dJ = function (o) {
	var dJ = new b2d.Joints.b2DistanceJointDef()
	if (o) {
		dJ.init.apply(dJ, arguments)
	}
	return dJ
}
$dJColl = function () {
	return $dJ.apply(null, arguments).coll(true)
}
w.dstJ = w.dist = function (a, b) {
	return this.J($dJ(a, b)).len(1).fq(1000).dm(1000)
}
w.dstJColl = function () {
	return this.J($dJColl.apply(null, arguments))
}
jd.init = function (b1, b2) {
	this.Initialize(b1, b2, b1.wC().d(), b2.wC().d())
	return this
}

 
 