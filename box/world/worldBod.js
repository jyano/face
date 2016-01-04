w.A = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.cB(g.f, g.s)
	return w
}
w._sB = function (x, y, fD) {
	var b = this.cB($sB(x, y))
	if (fD) {
		b.cF(fD)
	}
	return b
}
w.sB = w.cS = w.cSF = w.sF = w.S = w.stat = function (x, y, fD) {
	if (!fD) {
		return this.CB($sB(x, y))
	}
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.cF($sB(x, y), fD)
	function alt() {
		w.stat = function (x, y, fD) {
			var w = this
			if (O(x)) {
				fixtDef = y;
				y = x.y;
				x = x.x
			}
			x = N(x) ? x : 500
			y = N(y) ? y : 250
			return w.A($sB(x, y), fD)
		}
	}
}

//function kill() {
w.DB = w.DBo = w.DBd = function (b) {
	this.DestroyBody(b);
	return this
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.CB = function (bD) {
	var b = this.CreateBody(bD)
	return b
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.dB = function (x, y) {
	return this.CB($dB(x, y))
}
w.GGB = w.grB = w.gB = w.gGB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.GBC = w.n = w.numBods = w.count = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = w.bL = w.bd = w.bs = function () {
	return this.GetBodyList()
}
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
w.DB = function (a) {
	this.DestroyBody(a);
	return this
}
w.GBL = w.bLX = function () {
	return this.GetBodyList()
}
w.GGB = w.gB = function () {
	return this.GetGroundBody()
}
w.cCB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cCF(r)
	return b
}
w.cRB = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.cRF(r)
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
MAKEWALLS = function () {
	makeWalls2 = [[10, 300, 20, 460], [990, 300, 20, 460], [250, 0, 400, 20], [730, 0, 400, 20], [250, 590, 400, 20], [730, 590, 400, 20]] //bas in the canvas size?
	makeWallsTiny = [[10, 300, 20, 600], [990, 300, 20, 600], [300, 0, 1200, 20], [300, 590, 1200, 20]]
	makeWallsFull = [[10, 300, 20, 1200], [990, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
	makeWallsLong = [[10, 300, 20, 1200], [1600, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
}
TRAIL = function () {
	W0().db().pen('welcome to tensor (damping) controller')
	y = w.ship()
	co = w.tCo()
	_.t(30, function () {
		var b = w.BALL(400, 300, 20, 'w').lV(10, 20).lD(0)
		co.A(b)
	})
}
DEB = function () {
	W()
	b = w.ball(300, 400)
	x = w.box(200, 400)
	j = b.spring(x)
}//make a world with a stage.. well with three stages!!!!
WOR = function () {
	W()
	w.ball(300, 400, 20)
}
W0 = function () {
	return W({g: 0})
}
W00 = function () {
	return W({g: 0, w: 0})
}