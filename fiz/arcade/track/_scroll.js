ZOM = function () {
	W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
	y = w.ship(50, 50).track()
	_.in(2, function () {
		w.zoom(1.4)
	})
}
SHOWOFF = SHO = function () {
	W([1200, 600, 2400, 600], {g: 10})//.manyBalls(); //_.t(10, function (i) {w.D(100 + i * 100, 100, $r(), 35).de(.1)})
	w.showOff()
	y = w.ship(50, 50).track()
}
CUPBALL = CPB = function () {

//purpose: shows 'track'-ing a  body
//purpose2: demonstrates 'showOff
//should zoom in when near cup
	CUPS()
	w.showOff()
	w.G(-100)
	x = w.W / 2
	y = w.H / 2
	ball = w.D(x, y, 'w', [[10]]).lV(100)//.re(.8)
	
	ball.trackBasic()
	
}
CAMFOLLOW = CMF = function () {W(500, 500, 1600, 1000).G(0)
	b = w.y(400, 400).C('o').track()
//	a = w.y().C('b')
	
	
	_.evx(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
TRACKEE = TRK = function () {W()
	w.balls()
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	_.in(5, function () {
		_.ev(5, function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			}
			else {
				w.C('z');
				w.t = y2
			}
		})
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300}).balls()
	w.zoom('-')
	w.t = p = w.p(1175, 100) // no need to call track?
	
	_.ev(1, function () {
	
		w.trackee.cb = function () {w.zoom(w._zoom + .001)}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 2000, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x')
	y = w.y(100, 300).C('u')
	_.ev(1, function () {
		if (w.t == y2) {
			w.C('z');
			w.t = y
		}
		else {
			w.C('w');
			w.t = y2
		}
	})
}
function bufferOb() {
	STREET1 = ST1 = function () {
		W([1200, 600, 1400, 1200], {
			g: 300//, t: 0
		})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		w.p(700, 600).track(600, 400, {
			x: 700, mX: 1.5,
			y: 1000,
			w: 700, h: 600
		})
	}
	SLY = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		w.right.kill();
		w.left.kill()
		w.track(p, 300, 400, {
			x: 1200, y: 700,
			w: 800, h: 500,
			mX: 10, mY: 10
		})
	}
	SPUFF1 = function () {
		W(800, 600, 800, 800).G(100)
		w.S(200, 500, 'g', 100, 100);
		w.S(500, 500, 'w', 100, 100);
		w.S(1000, 500, 'r', 100, 100);
		w.S(1500, 500, 'g', 100, 100)
		y = w.y(100, 100).rt(200)
		bfOb = {x: 1000, y: 1000, w: 400, h: 400}
		w.track(y//, 500, 500, bfOb
		)
	}
	BUFFER = function () {
		W([1200, 600, 4800, 1600], {g: 0, t: 0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')
		y = w.ship(100, 100).damp(1, 10).rot(90).lD(2).aD(2)
				.rot(120)//.lV(1)
		//w.bufFoll(y, 600, 300, {x: 800, y: 300, mX: .8, mY: .8, w: 200, h: 200})
		// w.zoom(.8)
	}
}
function trackNeg() {
	NOTKE = ZOOMSCALE = ZSC = function () {
		W([1000, 1000], {g: 0, t: 0}).jukeBox().y(100, 100).rt(200)
		w.drag()
		r = $.tallRange()
		$t(function () {
			zoom = function () {
				return r.val() / 25 + 1
			}
			w.zoom(zoom())
		})
	}
	W.TEMPLE = function () {
		W([1200, 600, 2400, 1200], {g: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 600, 'w', [[100, 100, '-']])
		w.S(1200, 900, 'r', 400, 100)
		return w
	}
	DRAGSCALE = SCROLLNOLIM = SNL = function () {W.TEMPLE()
		w.dragScale()
		w.zoom(.8)
				.y(500, 500)
				.track(100, 300, '-')
	}
}



$L('bufferOb','trackNeg')
//i can leave the world-centering in fw
// can optionally filter it with scale itself
//  has limits now!  and more..
// tis is the ultimate!
function _pre() {
	w.gameH = function () {
		return this.H
	}
	w.worldH = function () {
		return this.h
	}
	w.gameW = function () {
		return this.W
	}
	w.worldW = function () {
		return this.w
	}
	w.drag = function () {
		w.dragX = function () {
			var w = this
			var d
			w.i.c.m({
				mD: function (x) {
					d = x - w.st.x
				},
				pM: function (x) {
					w.st.x = x - d
				}
			})
			return w
		}
		w.dragY = function () {
			var w = this, d
			w.i.c.m({
				mD: function (x, y) {
					d = y - w.s.y
				},
				pM: function (x, y) {
					w.s.y = y - d
				}
			})
			return w
		}
		return this.dragX().dragY()
	}
	w.dragScale = function () {
		var w = this
		var pX = 0, pY = 0, pmX, pmY, o = {}
		var c = $(w.i.canvas)
		c.mousedown(function (e) {
			o.Scl = w._zoom
			o.Y = e.clientY
		})
		c.pressmove(function (e) {
			var x = e.clientX,
					y = e.clientY,
					newSc = o.Scl + (o.Y - e.clientY) * .005
			newSc = newSc > 5 ? 5 : newSc < .8 ? .8 : newSc
			w.zoom(newSc)
		})
		return this
	}
	w.manyBalls = function () {
		var w = this
		w.S(400, 2500, 'r', 200, 100)
		w.S(800, 2300, 'z', 100, 100)
		w.S(1200, 2300, 'b', 300, 100)
		w.S(1600, 2300, 'z', 100, 100)
		w.S(2000, 2300, 'r', 200, 100)
		return w
	}
	_.capTop = function (n, max) {
		return _.cap(n, 0, max)
	}
	w.jukeBox = function () {
		var w = this
		w.S(500, 500, 'o', 200)
		w.S(500, 500, 'r', 10)
		w.S(200, 200, 'm', 40)
		w.S(800, 200, 'b', 60)
		w.S(800, 800, 'l', 80)
		w.S(200, 800, 'g', 100)
		return w
	}
	w.cap = function (s, a, b) {
		subScDif = function (a, x, z) {
			return a - x + a / z
		}
		return zeroToMax(s, a * this.z - b)
		function zeroToMax(s, max) {
			return _.cap(s, 0, max)
		}
	}
	$.tallRange = function () {
		var r = $.rg().W(500).A() //range
		r.abs(775, 500)
		r.css('transform', 'rotate(90deg)')
		return r.val(0)
	}
	b.copyXY = function (b1) {
		var b = this
		b.XY(b1.X(), b1.Y());
		b.rt(b1.rt())
		return b
	}
}
function autoscroll() {
	function help() {
		w.guy = function () {
			return this.D(800, 100, 'r', 50, 50).bS('guy')
		}
		w.left = function (n) {
			var w = this;
			n = N(n, 4)
			w.e(function (b) {
				b.X(n, '-')
			})
		}
		b.byI = b.byImp = function (i) {
			var k = $.K
			if (k.right) {
				this.I(i, 0)
			}
			else if (k.left) {
				this.I(-i, 0)
			}
			return this
		}
		b.byV = b.byVel = function (v) {
			alert('b.byV')
			var k = $.K
			if (k.right) {
				p.lV(v, 0)
			}
			else if (k.left) {
				p.lV(-v, 0)
			}
			return this
		}
		w.plat = function (x, y, W, H) {
			var w = this//=brk=brick=
			x = N(x) ? x : 60;
			y = N(y) ? y : x
			W = N(W) ? W : 30;
			H = N(H) ? H : W
			return w.S(x, y, 'w', W, H).r(.3).K('plat')
		}
		w.fivePlats = function () {
			var w = this
			w.plat(800, 500, 600, 100)
			w.plat(300, 530, 100, 100)
			w.plat(1400, 300, 600, 100)
			w.plat(1800, 500, 1000, 100)
			w.plat(1900, 200, 600, 100)
			return w
		}
		W.PLATS = function () {
			return W({g: 300, w: 0}).P(300, -300).fivePlats().p(300, -100)
		}
		b.playMe = function () {
			var p = this
			if (p.Y() > 2000) {
				p.XY(300, -300)
			} //comeback
			if (b2d.onG) {
				if ($.K.u) {
					p.jumping(180, 30)
				}
				else {
					p.byVel(40)
				}
			}
			else {
				p.byImp(10)
			}
			return p
		}
	}
	
	help()
	AUTO = AUTOSCROLL = function () {
		W.PLATS()
		$t(function () {
			w.left(4)
			p.playMe()
			w.guy()
		})
	}
}
function _post() {
	b.tr = b.track = function (x, y, z) {
		var b = this, w = b.W()
		w.track(b, x, y, z)
		return b
	}
	b.trackBasic = function (x, y, z) {
		var b = this, w = b.W()
		w.trackBasic(b, x, y, z)
		return b
	}
}
