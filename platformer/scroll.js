w.tr = w.track = function (t, cX, cY, bf) {
	var w = this
	//i can leave the world-centering in fw
	// can optionally filter it with scale itself
	//  has limits now!  and more..
	// tis is the ultimate!
	if (U(t)) {
		t = w._trackee
	}
	w.t = t
	cX = N(cX, w.W / 2)
	cY = N(cY, w.H / 2)  //option to set based on t's CURRENT X/Y?
	if (bf == '!') {
		T.t(function () {
			var sX, sY
			sX = w.z * (t.X() - cX)
			sX = sX * 1 / ( 1 + w.hW / w.w )
			sY = w.z * (t.Y() - cY)
			sY = sY / (1 + w.hH / w.h)
			w.sXY(sX, sY)
		})
	}
	else if (bf == '-') {
		T.t(function () {
			w.s.x = (cX - t.X()) * w.z - w.W * (w.z / 2 - .5)
			w.s.y = (cY - t.Y()) * w.z - w.H * (w.z / 2 - .5)
		})
	}
//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
	else if (O(bf)) {
		bf.x = N(bf.x) ? bf.x : w.w / 2
		bf.y = N(bf.y) ? bf.y : w.h / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		w.S(bf.x, bf.y, 'r', [[bf.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'w', [[bf.w + 20, bf.h + 20, '-']])
		w.S(bf.x, bf.y, 'b', [[bf.w, w.h, '-']])
		w.S(bf.x, bf.y, 'b', [[w.w, bf.h, '-']])
		w.S(bf.x, bf.y, 'z', [[10, 10, '-']])  //sensor works but ony for rect (or at least not for circ)
		w.S(bf.x, bf.y, 'w', [[bf.w, bf.h, '-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')
		T.t(function () {
			var sX, sY
			// sX = (bf.x-w.hW)   + _.adj( (t.X()-bf.x),  bf.w/2)/w.z
			sX = bf.x - w.hW + _.adj(t.X() - bf.x, bf.w / 2) * bf.mX /// bf.mX //scaling not needed?
			sY = (bf.y - w.hH) + _.adj(t.Y() - bf.y, bf.h / 2) * bf.mX// /bf.mY
			w.sXY(sX, sY)
		})
	}
	else {
		
		//each tick, literally just sets w.sXY() based on:
		// world dimensions, world zoom, and trackee position
		T.t(function () {
			var dX, dY
			//run pre-scroll hook cb's
			if (F(w.t.cb)) {
				w.t.cb()
			}
			if (w.track.cb && F(w.track.cb)) {
				w.track.cb()
			}
			// if the designated trackee optionally has its own cb,
			// that over rules the (also optional) 'w.track.cb' cb
			dX = t.X() - cX
			dY = t.Y() - cY
			w.sX(w.z * w.hW + w.z * dX - w.hW)
			w.sY(w.z * (w.hH + dY ) - w.hH)
		})
	}
	return w
}
w.sXY = function (x, y) {
	if (U(x)) {
		return {}
	}
	this.sX(x)
	this.sY(y)
	return this
}
w.sXCap = function (s) {
	return _.cap(s, 0, this.w * this.z - this.W)
}
w.sX = function (x) {
	var w = this
	if (U(x)) {
		return -this.s.x
	}
	this.s.x = -this.sXCap(x)
	return w
}
w.sYCap = function (s) {
	return _.cap(s, 0, this.h * this.z - this.H)
}
w.sY = function (y) {
	var w = this
	if (U(y)) {
		return -w.s.y
	}
	w.s.y = -w.sYCap(y)
	return w
}
b.tr = b.track = function (x, y, z) {
	var b = this, w = b.W()
	w.track(b, x, y, z)
	return b
}
w.Z = function (s) {
	//get/set zoom.. ok cool :)
	var w = this
	if (U(s)) {
		return w.z
	}
	w.z = s == '-' ? w.mS : _.cap(s, w.mS)
	w.s.sXY(w.z)
	return w
}
b.centerScale = function (z) {
	var b = this, w = b.W()
	w.s.sXY(z)
	w.s.X(
			w.hW - (  (b.X() - w.hW) * z)
	)
	w.s.Y(w.hH - ((b.Y() - w.hH)) * z)
	return b
}
w.zoomOut = function () {
	var w = this //knows when to stop :)
	w.tCb = function () {
		w.Z(_.cap(w.z *= .98, w.mS))
	}
	return w
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.Z(_.cap(w.z *= 1.02, 0, 4))
	}
	return w
}
w.inout = function () {
	var w = this, // now it works!!!!
			s = 1,
			up = true
	w.t.cb = function () {
		if (up) {
			if (s < 2) {
				s += .2;
			}
			else {
				up = false
			}
			w.Z(s)
		}
		else {
			if (s > .8) {
				s -= .2
			}
			else {
				up = true
			}
			w.Z(s)
		}
	}
	return w
}
w.showOff = function () {
	var w = this
	zin()
	function zout() {
		w.zoomOut();
		_.in(10, zin)
	}
	
	function zin() {
		w.zoomIn();
		_.in(4, zout)
	}
	
	return w
}
w.pan = function (o) {
	var w = this, g = G(arguments), o = g[0],
			mZ = w.mZ,
			MZ = mZ * 3,
			z = w.mZ * 3, up = true,
			l
	if (g.m) {
		l = function () {
			up = z > w.mZ * 3 ? false :
					z < w.mZ ? true :
							up
			z *= up ? 1.01 : .9
			w.Z(z / w.mZ)
		}
	}
	else {
		l = function () {
			up = z > w.mZ * 3 ? false : z < mZ ? true : up
			z += up ? .03 : -.03
			w.Z(z / w.mZ)
		}
	}
	w.track.cb = l
	return w
}
w.tX = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.X()
	}
	w.tSpr.X.apply(w.tSpr, arguments)
	return w
}
w.tY = function (t) {
	var w = this
	if (U(t)) {
		return w.tSpr.Y()
	}
	w.tSpr.Y.apply(w.tSpr, arguments)
	return w
}
w.tXY = function (x, y) {
	var w = this
	if (U(x)) {
		return {x: w.tX(), y: w.tY()}
	}
	y = N(y) ? y : x
	return w.tX(x).tY(y)
}
w.tRightLeft = function () {
	var w = this, left
	T.t(function () {
		if (!left) {
			w.tX(10, '+')
			if (w.tX() > 2000) {
				left = 1
			}
		}
		else {
			w.tX(10, '-')
			if (w.tX() < 400) {
				left = 0
			}
		}
	})
	return w
}
 
b.cam = function (x, y) {
	alert('b.cam')
	var b = this, s = b.stg()
	s.XY(b.diff(x, y))
	return b
}
b.follow = function (x, y) {
	alert('b.follow')
	var b = this
	cjs.t(function () {
		if (O(b.sprite)) {
			b.cam(x, y)
		}
	})
	return b
}
function scrollX() {
	b.followX = function (x, y) {
		var b = this, w = b.W()
		$t(function () {
			w.st.X(x - b.X())
		});
		return b
	}
	b2d.levelScrollX = function () {
		W({W: 600, H: 300, g: 400, w: 0})
				.st.XY(300, 150).rXY(300, 150)
		p = w.playa().followX(600, 400)
	}
	EXPLORE = SCROLLX = GROUNDSPRITES = GSP = function () {
		b2d.levelScrollX()
		w.db()
		w.st.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f', 'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
		w.ice(30, 250, 400)
		w.grass(450, 250, 400)
		w.grass(500, 100, 4000)
		w.rubber(880, 250, 40000)
		w.rectStat(100, 270, 200, 30, 'w').re(0).fr(0) //ice
		w.rectStat(325, 270, 230, 30, 'g').re(.3).fr(.3)
		w.rectStat(550, 270, 200, 30, 'r').re(.7).fr(.3) //rubber
	}
	RAMPS = function () {
		b2d.levelScrollX();
		w.db()
		w.ramps()
		_.ev(3, function () {
			w.circ(50, 50, 30, 'g').re(.7).de(1)
					.fric(.5).I(200, 100)
		})
	}
}
function scrollXY() {
	b.diff = function (x, y) {
		//alert('diff')
		var b = this
		x -= b.X()
		y -= b.Y()
		return {x: x, y: y}
	}
	b.cam = function (x, y) {
		//alert('cam')
		var b = this
		b.W().st.XY(b.diff(x, y))
		return b
	}
	b.follow = function (x, y) {
		//alert('follow')
		var b = this
		$t(function () {
			if (O(b.sprite)) {
				b.cam(x, y)
			}
		})
		return b
	}
	b2d.levelScroll = function () {
		//alert('levelScroll')
		b2d.level()
		w.s.XY(300, 150).rXY(300, 150)
		p.follow(600, 400)
		w.db()
	}
	SCROLLINGLEVEL = SLL = function () {
		b2d.levelScroll()
		p.Y(0)
		w.grass(300, 280, 500)
		w.ice(1300, 280, 1000)
		w.clouds().clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
		slide = w.rect(900, 30, 1200, 40, 'blue').de(1).fr(.5).re(.5)
	}
}
function scaleScroll() {
	$sclLev = function (fn) {
		$levelWalls()
		p = w.playa()
		w.right.kill();
		w.left.kill()
		w.st.XY(300, 150).rXY(300, 150)
		w.clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
		w.ice(800, 280, 10000);
		w.rubber(50, 100, 300);
		w.rubber(-400, 100, 300)
		w.rect(1200, 30, 600, 4).stat();
		if (fn) {
			$t(fn)
		}
		st = w.st
	}
	getScale = function (y) {
		return 1 - ((y - 300) / 300) * .1
	}
	b.dif = function () {
		var b = this
		return {x: 600 - b.X(), y: 400 - b.Y()}
	}
	b.getScrollXScale = function () {
		return getScale(this.X())
	}
	SCROLLSCALE = WAY1 = function () {
		$sclLev(function () {
			if (!O(p.sprite)) {
				return
			}
			st.sXY(p.getScrollXScale())
			var sc = st.scaleX
			var x = 600 - p.X()
			x = sc > 1 ? x / (sc * .9) : sc < 1 ? x * sc : x
			var y = 400 - p.Y()
			y = sc > 1 ? y / (sc * 1.1) : sc < 1 ? y * sc : y
			st.XY(x, y)
		})
		function scNum(sc, num, ratio) {
			sc > 1 ? num / (sc * ratio) : sc < 1 ? num * sc : num
		}
		
		w.db()
	}
	SCROLLSCALECENTER = WAY2 = function () {
		W({W: 600, H: 300, g: 400}).G(400)
		p = w.playa().nRt()
		w.right.kill();
		w.left.kill()
		w.st.XY(300, 150).rXY(300, 150)
		w.clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
		w.ice(800, 280, 10000);
		w.rubber(50, 100, 300);
		w.rubber(-400, 100, 300)
		w.rect(1200, 30, 600, 4).stat();
		st = w.st
		w.db()
		x = w.st.W() / 2
		y = w.st.H() / 2
		$l('x: ' + x + ', y: ' + y)
		$t(function () {
			sc = p.getScrollXScale()
			st.sXY(sc)
			st.XY(
					x * sc + x - p.X() * sc,
					y * sc + y - p.Y() * sc
			)
		})
	}
}
function buffScroll() {
	w.buffDfs = function (bf) {
		var w = this
		bf.x = N(bf.x) ? bf.x : w.worldW / 2
		bf.y = N(bf.y) ? bf.y : w.worldH / 2
		bf.w = N(bf.w) ? bf.w : 0
		bf.h = N(bf.h) ? bf.h : 0
		bf.mX = N(bf.mX) ? bf.mX : 1
		bf.mY = N(bf.mY) ? bf.mY : 1
		return bf
	}
	w.bfDev = function (bf) {
		var w = this
		bfStat('w', [[bf.w + 50, bf.h + 50, '-']])
		bfStat('r', [[bf.w, bf.h, '-']])
		bfStat('b', [[bf.w, w.h, '-']])
		bfStat('b', [[w.w, bf.h, '-']])
		return w
		function bfStat(col, fx) {
			w.S(bf.x, bf.y, col, fx)
		}
	}
	$magic = function (a, b, c, d) {
		return cjs.adj(a - b, c / 2) * d
	}
	$mag = function (n1, n2, dim, mlt, gDim) {
		return $magic(n1, n2, dim, mlt) + n2 - gDim / 2
	}
	w.trackBuff = function (t, bf) {
		var w = this, x, y
		w.buffDfs(bf)
		w.bfDev(bf)
		$t(function () {
			x = $mag(t.X(), bf.x, bf.w, bf.mX, w.gameW)
			y = $mag(t.Y(), bf.y, bf.h, bf.mX, w.gameH)
			w.camXY(x, y)
		})
		return w
	}
	w.trackBuffCen = function (t, bf) {
		var w = this
		bf.x = w.worldW / 2
		bf.y = w.worldH / 2
		return w.trackBuff(t, bf)
	}
	BUF = function () {
		W(1000, 1000, 2000, 2000).G(0).C('z')
		w.glimpse()
		y = w.ship(1000, 1000).rot(33).lV(20, -20).buff({
			x: 600, y: 1000, w: 400, h: 400
		})
	}
	w.glimpse = function () {
		var w = this
		_.ev(4, function () {
			w.zoom(0)
			_.in(2, function () {
				w.zoom(1)
			})
		})
		return w
	}
	T9 = BUFCEN = function () {
		W(1000, 1000, 2000, 2000).G(0).C('z').glimpse()
		y = w.ship(1000, 1000).rot(33).lV(20, -20)
		w.trackBuffCen(y, {w: 400, h: 400})
	}
	T10 = SFB = STREETFIGHTERBUF = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0}).P()
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p.XY(700, 600)
		p.buff({
			x: 700, y: 1000,
			w: 700, h: 600,
			mX: 1.5
		})
	}
	T11 = SRB = SLIDEROOMSBUF = function () {
		W([1200, 600, 2400, 1000], {g: 300}).P()
		p.buff({x: 1200, y: 700, mX: 8, w: 800, h: 500})
		_.in(function () {
			w.mark().dot(600, 300, '*').dot(1200, 600, '*')
		})
	}
	b.buff = function (ob) {
		this.W().trackBuff(this, ob)
		return this
	}
}
function autoScroll() {
	w = b2d.World.prototype
//sets b2d.onGround setter
//requires a body that has userData 'feet',
// and it simply see if it is colliding with anything
// if make this local, graphics dissapear!?
	TESTKEYBOARD = TKB = function () {
		W({debug: true})
		//cjs.watchKeys()
		//w.footListener()
		//  p = w.addMe().controlMe('standard')
		b = w.ba().bS('guy')
		b.controlMe('basic')
	}
	w.goomba = function (x, y) {
		return this.box(x, y).bS('guy')
	}
	b.foot = function () {
		var b = this, w = b.W(), f
		w.b(function (cx) {
			if (f = cx.w('feet')) {
				f.B().trig.onGround = true
			}
		})
		w.end(function (cx) {
			if (cx.w('foot')) {
				b.trig.onGround = false
			}
		})
		return b
	}
//b.feetListener =function(){return this.listener('feet')}
	BOSS = MARIOJUMPINGGOOD = function () {
		W({g: 500})
		p = w.addMe().aD(10000).con('mar')
		w.pf(800, 500, 600, 100);
		w.pf(300, 530, 100, 100)
		w.box(800, 100).bS('guy')
	}
	b2d.levelAutoScroll = function (num) {
		W({W: 600, H: 300, g: 400, w: 0})
		num = num || 4
		p = w.playa().nRt()
		setup()
		$t(function () {
			w.st.X(num, '-')//.pen(score++)
			if (p.relPos() < -100) {
				p.Y(0)
				p.X(p.X() - 200)
			}
		})
		function setup() {
			score = 0
			p.XY(350, 100)
			p.lV(0, 0)
			w.st.XY(0, 0)
		}
	}
	CASTLE = CAS = function () {
		W({g: 500, w: 0}).gv(500)//.db()
		//b2d.levelAutoScroll(1)
		//w.G(100)
		//b2d.levelAutoScroll(1)
		p = w.me().XY(300, -300)
				.aD(10000).con('mar2')
		num = 4
		$t(function () {
			w.st.X(num, '-')
		})
		w.BRICK(800, 500, 600, 100, 'r')
		w.BRICK(300, 530, 100, 100)
		w.BRICK(1400, 300, 600, 100)
		w.brick(1800, 500, 1000, 100)
		w.BRICK(1900, 200, 600, 100)
		w.foot()
		w.me().XY(700, 100)
		//w.addTim(600, 100)
		w.goomba(800, 100)
	}
	LEV = function () {
		b2d.levelAutoScroll(1)
		p.X(300)
		w.BRICK(200, 200, 100, 100, 'yellow')
		w.BRICK(240, 150, 180, 30)
		w.BRICK(420, 30, 180, 30)
		w.BRICK(560, 150, 300, 30)
		w.BRICK(600, 100, 180, 30)
		w.goomba(800).fric(0)
	}
	DUNGEON = DNG = RAMPS2 = function () {
		b2d.levelAutoScroll();
		w.ramps()
	}
}
function webGuyScroll() {
	WG = WEBGUY = function () {
		function fromWebguy() {
			w.CAMX = function (x) {
				var w = this
				w.st.X(-x)
				return w
			}
			w.CAMY = function (y) {
				var w = this
				w.st.Y(-y)
				return w
			}
			w.gW = function () {
				return this.stage.canvas.width
			}
			w.gH = function () {
				return this.stage.canvas.height
			}
			w.wW = function () {
				return this.stage.canvas.width
			}
			w.wH = function () {
				return this.stage.canvas.height
			}
			w.halfW = function () {
				return this.gW / 2
			}
			w.halfH = function () {
				return this.gH / 2
			}
			w.ZOOM = w.zoom = function (zm) {
				var w = this
				var stg = w.stage
				if (U(zm)) {
					return stg.scaleX
				}
				stg.scaleX = zm
				stg.scaleY = zm
				return w
			}
			w.scaled = function (a) {
				return a * this.zoom()
			}
			w.zDif = w.scaledDif = function (a, b) {
				return this.scaled(a - b)
			}
			w.zX = w.zDifX = function (p) {
				var w = this
				return w.zDif(w.gW() / 2, p.X())
			}
			w.zY = w.zDifY = function (p) {
				var w = this
				return w.zDif(w.gH() / 2, p.Y())
			}
			w.TRACK = function (p) {
				var w = this
				$t(function () {
					w.CAMX(w.scaledDif(p.X(), w.gameW / 2))
					w.CAMY(w.scaledDif(p.Y(), w.gameH / 2))
				})
				return w
			}
			b.TRACK = function () {
				var b = this, w = b.W()
				w.TRACK(b)
				return b
			}
		 
			M.pythag = function (a, b) {
				return M.sqrt(a * a + b * b)
			}
			$timer = function () {
				$time = function () {
					var time = new Date().getTime()
					return time
				}
				var timer = {}
				timer._time = $time()
				timer.clr = function () {
					timer._time = $time()
					return timer
				}
				timer.dif = function () {
					return ($time() - timer._time) / 1000
				}
				timer.difClr = function () {
					var dif = timer.dif()
					timer.clr()
					return dif
				}
				return timer
			}
			w.bS = b.bindSprite = function (im, sc, initRt) {
				var b = this
				initRt = N(initRt) ? initRt : 6
				b.W().st.bm(im, function (bm) {
					b.sprite = bm
					bm.sXY.apply(bm, A(sc) ? [sc[0], sc[1]] : [sc || .4])
					$t(function () {
						bm.XY(b.X(), b.Y()).rt(b.rt() + initRt)
					})
				})
				return b
			}
			w.regPtCenterNotUsed = function () {
				var w = this;
				var gameW = w.st.canvas.width
				var gameH = w.st.canvas.height
				w.st.rXY(gameW / 2, gameH / 2);
				return w
			}
			b.warping = function () {
				var p = this
				height = w.st.canvas.height
				width = w.st.canvas.width
				$t(function () {
					if (p.Y() < 0) {
						p.Y(height)
					}
					if (p.Y() > height) {
						p.Y(0)
					}
					if (p.X() < 0) {
						p.X(width)
					}
					if (p.X() > width) {
						p.X(0)
					}
				})
				return this
			}
			b2d.controls = {
				thrust: function (p) {
					p.fixedRot(true)
					if (K.l) {
						p.rt(15, '-')
					}
					if (K.r) {
						p.rt(15, '+')
					}
					if (K.u) {
						p.I(
								p.GetWorldVector(V(0, -1)).m(2)
						)
					}
				}
			}
			w.p = w.player = function (scale, onEachTick) {
				if (!N(scale)) {
					enemy = onEachTick
					onEachTick = scale
					scale = 4
				}
				this.startKilling()
				var pl = this.addMe(scale), func
				if (S(onEachTick)) {
					$t(function () {
						b2d.controls[onEachTick](pl)
					})
				}
				return pl
			}
		}
		
		fromWebguy()
//docs:
//when a web is created it gets web.connnected=false
//when it hits certain things and forms a JOINT, then connnected->true
//then it just dies
//pressing DOWN should release the most recent of the connnectedWebs
//non connnected Webs can be shot off!
		W().G(40)
		w.webBlocks = function () {
			var w = this
			//blocks
			_.each([
				[400, 100],
				[800, 0],
				[1100, -50],
				[1300, -200]
			], function (block) {
				var b = w.BRICK(block[0], block[1], 50, 50, 'u').K('randomRect')
				b.attachWeb = function (web) {
					var b = this
					if (!web.connected) {
						web.attach(b)
					}
					return b
				}
				return b
			})
			//goals:
			_.each([[0, 0], [100, 100], [200, 200], [500, 300], [600, 400], [1800, 0]], function (goal) {
				return w.goal(goal[0], goal[1])
			})
			return w
		}
		//w.webBlocks()
		w.ppBALL = function (x, y, impX, impY) {
			var b = this.BALL(x, y, 9, 'w')
			if (N(impY)) {
				b.I(impX, impY)
			}
			return b
		}
		w.goal = function (x, y) {
			w.BRICK(x - 20, y - 15, 10, 40, 'q')
			w.BRICK(x, y, 40, 10, 'v')
			w.BRICK(x + 20, y - 15, 10, 40, 'u')
		}
		$superWebguy = function (p) {
			p.canWeb = true
			p.shootWeb = function () {
				var p = this, w = p.W(), web
				p.webs = p.webs || []
				p.webs.push(web = p.Web())
				var piece
				web.Piece = function (x, y) {
					var web = this
					var piece = w.BOX(x, y, 3, 5, 'w').aD(10).re(0)
					piece.add = function (newPiece) {
						return web.addPiece(this, newPiece)
					}
					return piece.K('webPiece')
				}
				piece = web.addPiece(p,
						web.Piece(p.X(), p.Y() - 100)
				)
				_.t(9, function (i) {
					piece = piece.add(web.Piece(p.X(), p.Y() - i - 100))
				})
				piece.add(web.ball = w.BALL(p.X(), p.Y() - 100, 10, 'd').K('webBall')
						.de(1).re(0).fr(100))
				return web
			}
			p.tossBall = function (ball) {
				var p = this
				ball.I.apply(ball, p.hasOnlyOneConnectedWeb() ?
						[K.r ? M.abs(p.lV().x * 2) : K.l ? -M.abs(p.lV().x * 2) : 0, -30] :
						K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70])
			}
			p.webless = p.hasNoWebs = function () {
				var p = this
				return !p.webs || !p.webs[0]
			}
			p.numWebs = function () {
				return this.webs.length
			}
			p.getWeb = function (ix) {
				var p = this;
				return A(p.webs) && p.webs[ix]
			}
			p.webWhere = function (ob) {
				return A(p.webs) && _.fW(p.webs, ob)
			}
			p.websRj = function (fn) {
				return _.rj(this.webs, fn)
			}
			p.web1 = p.wWeb1 = function (fn) {
				var p = this
				var firWeb = p.getWeb(0)
				if (!firWeb) {
					return
				}
				if (F(fn)) {
					fn(firWeb);
					return p
				}
				return firWeb
			}
			p.web2 = p.wWeb2 = function (fn) {
				var p = this
				var secWeb = p.getWeb(1)
				if (!secWeb) {
					return
				}
				if (F(fn)) {
					fn(secWeb);
					return p
				}
				return secWeb
			}
			p.webByBall = function (b) {
				return this.webWhere({ball: b})
			}
			p.nCn = p.numCnWebs = function () {
				return this.cnWebs().length
			}
			p.cns = p.cnWebs = p.connectedWebs = function () {
				return this.websRj(function (web) {
					return !web.connected
				})
			}
			p.just1CnWeb = p.hasOnlyOneConnectedWeb = function () {
				var p = this
				return p.numWebs() == 1 && p.numCnWebs() == 1
			}
			p.hasMultCnWebs = p.hasMoreThanOneConnectedWeb = function () {
				return p.numCnWebs() > 1
			}
			p.cn1 = p.cnWeb1 = p.iCn = p.isConnected = p.wCnWeb1 = function (fn) {
				var p = this
				var firCnWeb = p.cnWebs()[0]
				if (!firCnWeb) {
					return
				}
				if (F(fn)) {
					fn(firCnWeb);
					return p
				}
				return firCnWeb
			}
			p.killWeb = function (index) {
				var p = this
				if (A(p.webs) && p.webs[index]) {
					p.webs[index].kill()
				}
				return p
			}
			p.killWeb1 = p.killFirstWeb = function () {
				return this.killWeb(0)
			}
			p.killWeb2 = p.killSecondWeb = function () {
				return this.killWeb(1)
			}
			p.rmWeb = function (web) {
				var p = this
				p.webs = _.rj(p.webs, function (hisWeb) {
					return web === hisWeb
				})
				return p
			}
			p.leftRight = function (neg) {
				var p = this
				var fX = 250
				var iX = 8
				if (neg == '-') {
					fX *= -1
					iX *= -1
				}
				return function () {
					K.d ? p.shot() :
							p.isConnected() ? p.F(fX, -50) : p.I(iX, 0)
				}
			}
			p.LR = function (neg) {
				var p = this
				if (neg == '-') {
					return function () {
						K.d ? p.shootLeft() : p.killSecondWeb()
					}
				}
				return function () {
					K.d ? p.shootRight() : p.killSecondWeb()
				}
			}
			p.shot = function () {
				this.didShoot = true;
				return this
			}
			p.shootRight = function () {
				var p = this, w = p.W()
				var iY = t.difClr()
				iY = _.cap(iY, .4, 3)
				iY = (iY * -30) + 10
				var iX = iY * 1.5 + 100
				w.ppBALL(p.X() + 80, p.Y() - 20, iX, iY)
				return p
			}
			p.shootLeft = function () {
				var p = this, w = p.W()
				var iY = t.difClr()
				iY = _.cap(iY, .4, 3)
				iY = (iY * -30) + 10
				var iX = iY * 1.5 + 100
				w.ppBALL(p.X() - 80, p.Y() - 20, -iX, iY)
				return p
			}
			p.Web = function () {
				var p = this
				var web = {p: p, player: p, iCn: 0, connected: false, pieces: []}
				web.addPiece = function (toWhat, piece) {
					var web = this
					w.dist(toWhat, piece)
					web.pieces.push(piece)
					return piece
				}
				web.attach = function (brick) {
					var web = this
					w.dist(web.ball, brick)
					web.connected = true
					return web
				}
				web.kill = function () {
					var web = this
					_.e(web.pieces, function (b) {
						b.kill()
					})
					web.player.rmWeb(web)
				}
				_.in(3, function () {
					if (!web.connected) {
						web.kill()
					}
				})
				return web
			}
			$.key({
				//u: launcher
				u: function () {
					if (p.canWeb && p.hasNoWebs() || p.hasOnlyOneConnectedWeb()) {
						p.tossBall(
								p.shootWeb().ball
						)
					}
					p.canWeb = false
				},
				//U: release old web
				U: function () {
					if (p.hasMoreThanOneConnectedWeb()) {
						_.f(p.connectedWebs()).kill()
					}
					p.canWeb = true
					p.shotForce = 0
				},
				D: function () {
					p.didShoot ? p.didShoot = false : p.killFirstWeb()
				},
				r: p.leftRight(),
				l: p.leftRight('-'),
				R: p.LR(), L: p.LR('-')
			})
			return p
		}
		w.WebGuy = function (x, y) {
			var w = this
			var guy = w.addMe(4)
			guy.XY(300, 300).K('player')
			guy.re(0).de(.14).fr(1).fixedRot(true)
			return $superWebguy(guy)
		}
		p = w.WebGuy(300, 300).TRACK()
		w.b(function (cx) {
			var f, web
			if (f = cx.w('webBall', 'randomRect')) {
				var ball = f[0].B()
				var brick = f[1].B()
				brick.attachWeb(
						p.webByBall(ball))
			}
		})
		t = $timer()
	}
	SZ = SPACEZOOM = function () {
		fromWebguy()
		W({W: 600, H: 300})
		w.stars(80)
		ea = earth = w.bump(0, 0, 100).re(2).K('earth').bindSprite('earth', .13)
		p = w.p(2.5, 'thrust').XY(0, 0).aD(8).lD(.8)
		w.dstJColl(p, earth).freq(.15).damp(0).len(50)
		stg = w.st
		cv = stg.canvas
		gameW = cv.width
		gameH = cv.height
		_.in(.3, onReady)
		function tick() {
			var dst = M.pythag(ea.X() - p.X(), ea.Y() - p.Y())
			var sc = _.cap(300 / dst, .3, 2)
			stg.XY(w.zX(p), w.zY(p))
			stg.sXY(sc)
			stg.al(sc * 2)
			ea.sprite.al(sc)
		}
		
		function onReady() {
			tweens()
			collide()
			$t(tick)
		}
		
		function tweens() {
			earth.sprite.tweenLoop([{r: 360}, 10000])
			earth.sprite.tweenLoop([{kx: 16}, 3000], [{kx: 0}, 3000])
			w.st.tweenLoop([{kx: 8}, 1000], [{kx: 0}, 1000], [{ky: 8}, 1000], [{ky: 0}, 1000])
		}
		
		function collide() {
			p.collWithKind('star', function () {
				p.sprite.tween([{kx: 40}, 100], [{ky: 40}, 100], [{kx: 0, ky: 0}, 100])
			})
			earth.collWithKind('star', function () {
				w.st.flash()
			})
		}
		
		w.stars = function (numStars) {
			var w = this
			_.t(numStars, function () {
				var x = ( M.r() * 1000 ) - 500
				var y = ( M.r() * 800 ) - 400
				var star = w.BALL(x, y, 4, 'p')
				star.de(0).re(2).K('star')
			})
			return w
		}
	}
}