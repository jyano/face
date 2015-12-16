


$L('rand', 'moveAll', 'sprit', 'colorBods')

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
function sprit() {
	f.sp = function (sp) {
		var f = this
		if (U(sp)) {
			return f.sprite
		}
		f.sprite = sp
		return f
	}
	f.Sp = function (sp) {
		var f = this
		f.sprite = sp
		return sp
	}
}
function alpha() {
	w.IL = function () {
		return this.IsLocked()
	}
	w.V = w.Vl = w.Vd = function () {
		return this.Validate()
	}
	w.GPC = function () {
		return this.GetProxyCount()
	}
	w.SBP = function (bO) {
		this.SetBroadPhase(bP);
		return this
	}
	w.SWS = function (wS) {
		this.SetWarmStarting(wS);
		return this
	}
	w.SCP = function (wS) {
		this.SetContinuousPhysics(wS);
		return this
	}
	w.SDL = function (wS) {
		this.SetDestructionListener(wS);
		return this
	}
}
old = function () {//w.ls = 
// f.B().gT() !=sB && f.gSh().tP(f.B().gTf(), bV(mX,mY))
}
function colorBods() {
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

 