b.polBu = b.polyBul = function () {
	alert('b.polBu polyBul')
	var b = this, w = b.W(), v, pt, bu
	v = b.vec(-20)
	pt = b.wP(0, -50)
	bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
	return bu.K('polBu')
}
b2d.cn.sl = b2d.cn.slidey = function (p) {
	alert('slidy')
	var k = $.K
	if (p.onG) {
		if (k.u) {
			if (k.r) {
				p.I(20, -60)
			}
			else if (k.l) {
				p.I(-20, -60)
			}
			else {
				p.I(0, -100)
			}
		}
		else {
			if (k.l) {
				p.dir(0);
				p.I(-20, 0)
			}
			if (k.r) {
				p.dir(1);
				p.I(20, 0)
			}
		}
	}
	else {
		if (k.l) {
			p.dir(0);
			p.I(-10, 0)
		}
		if (k.r) {
			p.dir(1);
			p.I(10, 0)
		}
	}
	/*
	
	 p.I(p.onG&&k.u ? V(0, -70)
	
	 : k.r ? V(30, 0)
	 : k.l ? V(-30, 0)
	 : V(0, 0)  )*/
	return p
}
b2d.cn.h = b2d.cn.hop = function (p) {
	alert('hop')
	var k = $.K
	if (p.onGround) {
		if (k.l) {
			p.I(-30, -120)
		}
		if (k.r) {
			p.I(30, -120)
		}
	}
	else {
		if (k.d) {
			p.I(0, 20)
		}
	}
}
b2d.cn.power = function (p) {
	alert('power')
	var K = $.K
	if (K.u) {
		p.I(0, -45)
	}
	if (K.l) {
		p.I(-20, 0)
	}
	if (K.r) {
		p.I(20, 0)
	}
}
b2d.cn.powX = function (p) {
	alert('powX')
	var K = $.K
	if (K.u) {
		p.I(0, -4500)
	}
	if (K.l) {
		p.I(-2000, 0)
	}
	if (K.r) {
		p.I(2000, 0)
	}
	if (K.d) {
		p.I(0, 4500)
	}
}
b.diffx = b.difx = function (x, y) {
	alert('b.diffx difx')
	var b = this// compare with DIF  - achtung!
	return {
		x: x - b.X(),
		y: y - b.Y()
	}
}
w.p1 = w.player1 = function (x, y, sc, cn) {
	alert('w.p1 player1')
	var w = this, g = G(arguments), p,
			o = g.S_ ?
			{cn: g.f} :
					N(g.t) ? {x: g.f, y: g.s, sc: g.t, cn: g[3]} :
					{x: g.f, y: g.s, cn: g.t}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.sc = N(o.sc, 4)
	p = w.me(o.x, o.y, o.sc)
	if (g.p) {
		p.track()
	}
	p.cn(o.cn)
	p.speed = 40
	p._dir = 'r'
	p.dir = function (d) {
		var p = this
		if (U(d)) {
			return p._dir
		}
		p._dir = d;
		return p
	}
	p.moveInDir = function () {
		var p = this, g = G(arguments)
		if (g.n) {
			return p.move(-p.speed)
		}
		//n = _.tN(g[0], p.speed)// ?
		if (p.dir()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.SetBullet(true)
	w.cl('feet',
			function (f) {
				if (!f.sen()) {
					p.onG = 1
				}
			}
	)
	w.end(function (cx) {
		cx.w('feet', function (f) {
			if (!f.sen()) {
				p.onG = 0
			}
		})
	})
	$.testJump = 1
	if ($.testJump) {
		T.t(function () {
			if (p.onG) {
				$l('onG')
			}
			else {
				$l('in air')
			}
		})
		w.show(function () {
			return p.onG
		})
	}
	T.t(function () {
		p.I(0, 500)
	})
	return p
}
b.jumping = function (y, x) {
	alert('b.jumping')
	var b = this, k = $.K
	if (k.u) {
		if (k.r) {
			b.lV(x, -(y - x))
		}
		else if (k.l) {
			b.lV(-x, -(y - x))
		}
		else {
			b.lV(0, -y)
		}
	}
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.key({
		l: function () {
			b.dir('l').move()
		},
		r: function () {
			b.dir('r').move()
		},
		u: function () {
			if (b.dir() == 'l') {
				b.I(5, -12)
			}
			else if (b.dir() == 'r') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
b.pWarping = function () {
	alert('b.pWarping')
	var p = this, b = this
	cjs.t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return b
}
//w.left and w.up move all objects in world
//i think only used in 1 game (talk?)
//end allert
w.up = function (n) {
	alert('w.up')
	var w = this;
	n = N(n, 4)
	w.e(function (b) {
		b.Y(n, '-')
	})
}//=w.vert
b.thr = function () {
	alert('b.thr')
	this.cn('thrust')
}
b2d.cn.jet = function (p) {
	alert('jet')
	var k = $.K, vec = p.GetWorldVector(V(0, -100))
	p.fixRot()
	if (k.left) {
		p.rot(8, '-').I(0, -5)
	}
	if (k.right) {
		p.rot(8, '+').I(0, -5)
	}
	p.I(
			k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
	)
}
b.moveInCircle = function (rad, speed) {
	var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
			speed = N(g[1]) ? g[1] : 2,
			toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
			b = this,
			ang = 0,
			x = b.X(),
			y = b.Y(),
			bX,
			bY
	cjs.tick(function () {
		ang += toRad(speed)
		bX = rad * cos(ang)
		bY = rad * sin(ang)
		if (g.p) {
			bY *= 2
		}
		if (g.n) {
			bX *= 2
		}
		b.XY(bX + x, bY + y)
	})
	return this
}
//b.relPos=function(){return this.X() + this.stg().X()}
b.byI = b.byImp = function (i) {
	var k = cjs.Keys
	if (k.right) {
		this.I(i, 0)
	}
	else if (k.left) {
		this.I(-i, 0)
	}
	return this
}
b.byV = b.byVel = function (v) {
	var k = cjs.Keys
	if (k.right) {
		p.lV(v, 0)
	}
	else if (k.left) {
		p.lV(-v, 0)
	}
	return this
}
b.marioJumping = function () {
	var p = this, k = cjs.Keys
	p.fixRot().trig('feet')
	cjs.tick(function () {
		if (p.trig.feet && k.up) {
			if (k.right) {
				p.lV(20, -60)
			}
			else if (k.left) {
				p.lV(-20, -60)
			}
			else {
				p.lV(0, -80)
			}
		}
		if (k.right) {
			p.lV(40, -10)
		} else if (k.left) {
			p.lV(-40, 10)
		}
		if (k.down) {
			p.trig.feet = 'true'
			p.I(0, 20)
		}
	})
	return this
}
b.jumping = function (y, x) {
	var k = cjs.Keys
	if (k.up) {
		if (k.right) {
			this.lV(x, -(y - x))
		}
		else if (k.left) {
			this.lV(-x, -(y - x))
		}
		else {
			this.lV(0, -y)
		}
	}
	return this
}
b.polyBul = function () {
	var vec = this.GetWorldVector(V(0, -100)),
			point = this.worldPoint(0, -50)
	bullet = this.W()
			.polyBul(point.x, point.y, 4, 4, 'w')
			.den(1)
			.lD(0)
			.lV(vec.div(5))
	w.end(function (cx) {
		cx.destroyIf('polyBul')
	})
	return bullet.K('polyBul')
}
b.thrustify = function () {
	var p = this //takes a spritebox!//uses cjs.watchKeys()
	this.angDamp(.5)
	cjs.Keys({
		l: function () {
			p.rot(8, '-')
		},
		r: function () {
			p.rot(8, '+')
		},
		d: function () {
			p.I().p('thrust')
		},
		u: function () {
			p.p('shoot')
		}
	})
	return this
}
b.thrustControl = function () {
	var body = this
	cjs.tick(function () {
		b2d.controls.thrust(body)
	})
	return body
}
b.shoot = function () {
	var vec, bullet
	bullet = this.wor().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(V(0, -100))
	bullet.I(vec.div(20))
}
b.bindKeyboard = function (cont) { //p.moveListener=
	var that = this
	control = (b2d.controls[cont] || b2d.controls.trickJump )
	control()
	cjs.tick(function () {
		that.rot(0)
		that.world().each(
				function (body) {
					if (body.is('destroy')) {
						body.destroy()
					}
				}
		)
	})
}  //b.warpToTopLeft=function(){ return this.XY(200, 100)}
b.controlMe = function (control) {
	var that = this
	cjs.tick(function () {
		b2d.controls[control || 'standard'](that)
	})
	return this
}
b.marioWarping = function () {
	var p = this
	cjs.tick(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
	var body = this
	var listener = b2d.listener()
			.begin(function (cx) {
				var bod
				if (fixt = cx.with('feet')) {
					fixt.gB().trig.onGround = true
				}
			})
			.end(function (cx) {
				if (cx.with('feet')) {
					body.trig.onGround = false
				}
			})
	this.GetWorld().listen(listener)
	return this
}//b.feetListener =function(){return this.listener('feet')}
b.warp = b.warp2 = function (p) {
	var p = this
	cjs.tick(function () {
		if (p.Y() < 0) {
			p.Y(600)
		}
		if (p.Y() > 600) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(1200)
		}
		if (p.X() > 1200) {
			p.X(0)
		}
	})
	return this
}
b.mario = function () {
	var b = this
	b.canJump = true
	b.onGround = false
	b.fixRot()
	cjs.tick(function () {
		var k = cjs.Keys
		if (b.onGround) {// if on ground
			if (k.up) {// if jumping
				if (b.canJump == true) {
					b.p('jump').I(0, -44);
					b.canJump = false
				}
			}
			else { // if not jumping
				if (k.left) {
					b.I(-20, 0)
				} // p.dir(0)
				if (k.right) {
					b.I(20, 0)
				}
			}
		} //p.dir(1)
		else {// if in air !!!
			if (k.left) {
				b.dir(0);
				b.I(-1, 0)
			}
			if (k.right) {
				b.dir(1);
				b.I(1, 0)
			}
		}
	})
	b.wor().beg(function () {  // ???
		b.canJump = true
		b.p('walk')
	})
	return this
}
b.arrowMove = function () {
	var body = this
	$.key({
		l: function () {
			body.dir('left').move()
		},
		r: function () {
			body.dir('right').move()
		},
		u: function () {
			if (body.dir() == 'left') {
				body.I(5, -12)
			}
			else if (body.dir() == 'right') {
				body.I(-5, -12)
			}
		}
	})
	return this
}
b.diff = b.dif = function (x, y) { // compare with DIF  - achtung!
	return {
		x: x - this.X(),
		y: y - this.Y()
	}
}
b.cam = function (x, y) {
	this.stg().XY(this.diff(x, y))
	return this
}
b.follow = function (x, y) {
	var b = this
	cjs.tick(function () {
		if (O(b.sprite)) {
			b.cam(x, y)
		}
	})
	return this
}
w.P = function (x, y) {
	var w = this
	x = N(x) ? x : 300
	y = N(y) ? y : 500
	p = w.jumper(x, y)
	return w
}
b.polBu = b.polyBul = function () {
	alert('b.polBu polyBul')
	var b = this, w = b.W(), v, pt, bu
	v = b.vec(-20)
	pt = b.wP(0, -50)
	bu = w.polBu(pt.x, pt.y, 4, 4, 'w').d(1).lD(0).lV(v)
	return bu.K('polBu')
}
function sceneManagement(){ //https://www.youtube.com/watch?v=rnpRmmKRZgE}
}
jmp = true
w = $pt.w
$con = b2d.controls = {}
w.dude = w.tim =  function (n) {
	var w = this
	if (U(n)) {
		return w.ball().K('tim').bS('guy', .3)
	}
	_.t(n, function () {
		w.dude()
	})
	return w
}
w.meBod = function (sc) {
	$meHead = function (sc) {
		sc = N(sc) ? sc : 5
		
		var headF = $pF(sc * 10, sc * 20)
		
		headF.re(0).fr(.1).de(.8)
		
		headF.K('head')
		
		return headF
	}
	
	sc = N(sc) ? sc : 4
	return this.B(
			$dB(300, 200), 
			[$meHead(sc)]
	)
}
b.addFoot = function (sc) {
	sc = N(sc) ? sc : 4
	var b = this
	var fD = $pF(sc * 9, sc * 4, 0, sc * 12, '-')
	var f = b.f(fD).mS()
	f.K('foot')
	return b
}
w.footBox = function (sc) {
	return this.meBod(sc).addFoot(sc)
}

//just a basic box and foot
w.pBox = w.m = function (sc) {
	var g = G(arguments)
	var p = w.footBox(sc)
	p.K('player')
	//if(!g.n){p.nRt()}
	return p
}

w.pSpr = w.addMe = w.me = function (sc) {
	var w = this
	sc = N(sc) ? sc : 4
	var b = w.pBox(sc)
	b.bS('me', sc / 14)
	return b
}
w.me = function () {
	alert('real w.me in JFAL')
}
w.me = function (x, y, Z) {
	var w = this, p
	Z = N(Z, 4)
	p = w.D(x, y)
	p.cir({c: 'X', C: 'X', l: 0, r: 1})
	p.rec('X', Z * 12, Z * 22).K('head')
	p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
	p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
	p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
	p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
	p.d(1).r(0).fr(.1).fixRot()
	p.bS({
		i: 'me',
		sc: Z / 10
	})
	return p.K('p player')
}
b.setDir = function () {
	var b = this
	if (K.l || K.r) {
		b.dir(K.l && K.r ? -1 : K.l ? 1 : 0)
	}
	return b
}
b.impRunR = function (n) {
	return this.dir(0).I(M.abs(n), 0)
}
b.impRunL = function (n) {
	return this.dir(1).I(-M.abs(n), 0)
}

$oG = $onG = function () {var g = G(arguments);
	return (numLaps > 0) && ( g.p ? K.u : g.m ? K.u && jmp : true)
} //$jumping

b.con = b.cn = function (tik, enemy) {var b = this
	tik = S(tik) ? $con[tik] : tik
	if (F(tik)) {$t(function () {tik(b, enemy)})}
	return b 
}
	
b.dir = b.direction = function (dir) {
	if (U(dir)) {return this._dir}
	this._dir = dir
	return this
}

w.bobom = function (x, y) {var w = this
	x = x || M.r() * 400; y = y || M.r() * 400
	var bob = w.D(x, y, [$cF(20).re(1)]).K('bobom')
	bob.poly(25, 5, 30, 0, '-').cl(function () {
		this.B().ds()})//setDestroy()
	return bob.bS('guy')
}

 
b.jpb= b.jmpb= b.jumpable=b.isLegitJumping = function () {
	var b=this, g=G(arguments)
	return g.n? !b.cantJump:
	g.p? !b.cantJump &&   K.up:
	  b.trig.foot && K.u }
	 
b.jumpRight = function () {return this.I(50, -200)}

b.tricky = function () {
	var b = this, g = G(arguments)
	b.runOrOnG(function () {
		K.up ? b.impRun(g.f, g.s, g.t, '/') :
				b.impRun(g.fo, g.fi)
	})
	return b
}
b.runOrOnG = function (fn, leftRight) {
	leftRight = N(leftRight) ? leftRight : 1
	var b = this
	if ($oG()) {
		fn(b);
		return b
	}
	return b.impRun(leftRight)
}
b.basic = function (iY, i2x, i2y) {
	var b = this
	if ($onGAndUp()) {
		b.I(0, iY)
	}
	b.impRun(i2x, i2y)
	return b
}
b.impLinRun = function (iX, lVX) {
	var b = this
	iX = N(iX) ? iX : 4
	lVX = N(lVX) ? lVX : 40
	K.l ? (K.d ? b.I(-iX, 0) : b.lV(-lVX, 0)) :
			K.r ? (K.d ? b.I(iX, 0) : b.lV(lVX, 0)) : null
	return b
}
 
w.p = w.player = function () {
	var w = this, g = G(arguments), o
	o = N(g.f) ?
	{sc: g.f, tk: g.s, enem: g.t} :
	{tk: g.f, enem: g.s}
	var p = w.pSpr(o.sc).re(0).fr(0).hCen()
	if (o.tk) {p.con(o.tk, o.enem)}
	if (!g.n) {p.nRt()}
	return p
}
w.playa = function () {
	return this.pSpr().fr(.4).re(.2)
			.con('playa').trig('foot')}
MARIOCANNON = MCN = function () {W({g: 500})//.footListener()
	//w.pf(800, 500, 600, 100);
	//w.pf(300, 530, 100, 100)
	//w.me().aD(10000)
	//w.box(800, 100).bS('guy')
	$.kD('u', function () {
		w.ball(200, 400, 10)
				.lV(40, -80)
	})
}
PBOX = POX = function () {
	W();
	_.e([1, 2, 3, 4, 5, 7, 8, 12, 18], function (n) {
		w.pBox(n)
	})
}
PSPR = SOX = function () {
	W()
	_.e([1, 2, 3, 4, 5, 7, 8, 12, 18], function (n) {
		w.pSpr(n)
	})
}
BOBOMTHRUST = BOB = function () {W({g: 0}).p().con('thrust')
	_.ev(2, function () {w.bobom()})
}
JPK = function () {W(100).p().con('jetpack')
}
SYM = function () {W(10).p().con('sym')
	_.in(6, function () {
		W(10).C('r').p().con('slidey')
		_.in(6, function () {
			W(10).C('w').p().con('weird')
		})
	})
}
IRLJ = function () {
	W(10).p().con('impRun').con('linJump')
}
b.impRun = function (x, y,y2) {var b = this, g = G(arguments);

	x = M.abs(x || 2); 
	y = -M.abs(y || 0);
	b.setDir()
	if (g.d) {var b = this
		//iX is how much left/right push when pushing up
		//iY is how much up push when pushing L/R
		//iY2 is up push giving otherwise (when no L/R!)
		return K.r ? b.I(x, y) : K.l ?
				b.I(-x, y) : b.I(0, y2) 
	}
	
	if ($oG('*')) {
		b.I(0, -440); jmp = false
		_.in(.2, function () {  jmp = true  })
		return b
	}
	
	K.r && K.l ? null  :
	K.r ? b.I(x, y) :
			K.l ? b.I(-x, y) :
					!g.n && $oG()  ?
							b.lV(0, 0) :
							null
	return b

}
$con.mar = function (p) {
	var g = G(arguments)
	if (g.p) {
		if (p.Y() > 2000) {p.XY(300, -300)}
			!$oG() ? p.impRun(10)
				: K.up ? p.jumping(180, 30)
				: p.linRun(40)
		return
	}
	
	!$oG() ? p.impRun(10, 0) :
			K.up ? p.linRun(10, -80, -90) :
					p.impLinRun(4, 40)
}
$con.imp = $con.impRun = function (p, x) {
	p.impRun(
			N(x) ? x : $oG() ? 20 : 180
	)
}
MAR = function () {
	p=W(10).p().con('mar')
}
IRJ = IRIJ = function () {

	W().G(400).planks().roof.kill()
	w.ship()
	w.p().de(1).con('imp')
}
w.planks=function(){
	var w=this
	w.plank(100, 400)
	w.plank(460, 400)
	w.plank(300, 400)
	w.plank(260, 300)
	w.plank(330, 200)
	w.plank(1030, 200)
	w.plank(700, 200).stat()
	return w
}

$level = b2d.level = function () {
	var g = G(arguments)
	W({W: 600, H: 300, g: 400, w: g.p ? null : 0})
	return p = w.playa()
}
LVL = function () {
	$level('+')
}
PLAYAS = PLS = function () {
	W()
	_.t(20, function () {
		w.playa()
	})
}
MEE = function () {W().foot()
	m = w.m()

	$.$(function () {  m.I(40, 0)  })

	$t(function () {
		if (b2d.onGround) {
			if (K.r) {m.I(1, 0)}
			if (K.l) {m.I(-1, 0)}
			if (K.u) {jump()}
		}
		else {//in air
			if (K.r) {m.I(.2, 0)}
			if (K.l) {m.I(-.2, 0)}
		}
	})
	function jump() {m.I(0, -28)
		b2d.onGround = false}
}
 
later = function () {
	b.upDown = function (up, down) {
		var b = this
		//just tell it how much
		// and (optionally) down
		// u want when pushed
		//otherwise, down defaults to up
		//if u want down to zero, set it yoursef..
		//but why u even using the 'upDown' fn bitch.. where yo 'justUp' fn at?
		up = N(up) ? up : 0
		down = N(down) ? down : up
		return K.u ? b.I(0, -up) :
				K.d ? b.I(0, down) : b
	}
	b.impRunUpDown = function (leftRight, up, down) {
		return this.impRun(leftRight)
				.upDown(up, down)
	}
	b.impDrop = function () {
		var b = this
		b.trig.foot = 'true'
		return b.I(0, 20)
	}
	b.jumpUp = function () {
		var b = this;
		b.canJump = false
		return b.p('jump').I(0, -44)
	}
	b.moveInDir = function () {
		var b = this, g = G(arguments)
		if (g.n) {
			return b.move(-b.speed)
		}
		var n = N(g.f) ? g.f : b.speed // not used?
		return b.I(b.direction() ? 3 : -3, 0)
	}
	b.mover = function () {
		var b = this
		b.dir('right')
		b.speed = 40
		return b
	}
	function toDep() {
		b2d.miniWorld = function () {
			W({g: 10, W: 500, H: 400, w: b2d.miniWalls}).p(2, 'thrust')
		}
	}
	
	alpha = function () {
		b.spd = function (s) {
			if (U(s)) {
				return this.speed
			}
			this.speed = s
			return this
		}
	}
	old = function () {
		$xImp = function () {
			return K.r && K.l ? 0 :
					K.r ? x :
							K.l ? -x : 0
		}
	}
	TESTPLAYER = function (con) {
		z()
		con = _pam.toLowerCase() || con || 'hoppy'
		W()//.random(3)
		p = w.p(con)
	}
}
b.yRt = function () {
	this.SetFixedRotation(false);
	return this
}
b._de = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' de: ' + f.de())
	})
}
b.lJ = b.linJump = function (ht, y1, y2) {
	var b = this
	y1 = N(y1) ? y1 : -80
	y2 = N(y2) ? y2 : 0
	return K.r ? b.lV(ht, y2) :
			K.l ? b.lV(-ht, y2) :
					b.lV(0, y1)
}
b.linRun = function (vX, vY, vY2) {
	var b = this, g = G(arguments)
	vX = N(g.f) ? g.f : 40
	vY = N(g.s) ? g.s : g.p ? 10 : 0
	b.setDir()
	return g.m && !$oG() ? b :
			K.r ? b.lV(vX, vY) :
					K.l ? b.lV(-vX, g.n ? -vY : vY) :
							N(g.t) ? b.lV(0, g.t) :
									b
}
b.jump = function (x, y) {
	var b = this
	return b.jumpable('+') ?
			b.linRun(x, x - y, -y) : b
}
LINRUN = LUN = function () {
	W(100).db().p().con('linRun').con('linJump')
}
function plats() {
	w._pf = function () {
	}
//b.platify=function(){return this.stat().re(.3).K('plat')}
	w.pf = w.platform = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.fo, c: g.fi} :
		{x: g.f, y: g.s, c: g.t}
		if (N(g.t)) {
			b = !c ? w.A(
					$sB(x, y), $rF(W, H))
					: w.BRICK(x, y, W, H, c)
			return b.re(.3).K('plat')
		}
		else {
			c = g.t || 'e'
			return g.n ? w.pf(x, y, 160, 60, c) : //small
					!g.p ? w.pf(x, y, 200, 80, c) : //medium/normal
							w.pf(x, y, 240, 100, c) //large
		}
	}
	w.sqPf = function (x, y, l, c) {
		l = N(l) ? l : 80;
		return this.pf(x, y, l, l, c)
	}
	w.surf = w.surface = function (x, y, l, c, re, fr) {
		var w = this, g = G(arguments)
		c = c || 'h'
		var ht = g.n ? 20 : g.p ? 80 : 40
		var b = w.pf(x + l / 2, y, l, ht, c)
		if (N(re)) {
			b.re(re)
		}
		if (N(fr)) {
			b.fr(fr)
		}
		return b
	}
	w.grass = function (x, y, l) {
		return this.surf(x, y, l, 'g', .3, .3)
	}
	w.ice = function (x, y, l) {
		return this.surf(x, y, l, 'w', 0, 0)
	}
	w.rubber = function (x, y, l) {
		return this.surf(x, y, l, 'r', .7, .3)
	}
	w.ramp = function (x, y, wd, h, rt) {
		var w = this
		x = x || 300
		y = y || 300
		wd = wd || 100
		h = h || 100
		rt = rt || 10 //Math.toRadians(45)
		return w.S(x, y, $rF(wd, h))
				.fr(1).rt(rt).bS2(
				cjs.rect(wd, h, 'y')
		)
	}
	w.ramps = function () {
		var w = this
		_.e([
			[400, 350, 200, 300, 100],
			[500, 350, 300, 300, 60],
			[600, 350, 200, 300, 100],
			[700, 350, 300, 300, 60],
			[800, 350, 200, 300, 100],
			[1000, 350, 300, 300, 60],
			[1030, 350, 200, 300, 100],
			[1200, 350, 300, 300, 60]
		], function (rm) {
			w.ramp.apply(w, rm)
		})
		/*
		 this.ramp(400, 350, 200, 300, 100)
		 this.ramp(500, 350, 300, 300, 60)
		 this.ramp(600, 350, 200, 300, 100)
		 this.ramp(700, 350, 300, 300, 60)
		 this.ramp(800, 350, 200, 300, 100)
		 this.ramp(1000, 350, 300, 300, 60)
		 this.ramp(1030, 350, 200, 300, 100)
		 this.ramp(1200, 350, 300, 300, 60)
		 */
		return w
	}
	w.clouds = function (leftPt, y) {
		var w = this
		leftPt = N(leftPt) ? leftPt : 100
		y = N(y) ? y : 75
		_.t(100, function () {
			w.BUMP(
					M.r() * 400 + leftPt,
					y,
					M.r() * 30
			)
		})
		return w
	}
	w.plank = function (x, y, c) {
		var b = this.pf(x, y, c, '+').dyn()
		b.rt(M.r() * 360)
		_.in(M.r() * 2, function () {
			b.stat()
		})
		return b
	}
};
plats()
THRUST = THR = function () {
	W0().tim(3).playerVsTim()
			.p('thrust').XY(300)
			.shootOnSpace().aD(10000)
}
 function later(){
	 function otherMeParts() {
		 var rightSide = $pF(sc * 8, sc * 2, sc * 8, 0)//.K('rightSide').mS()
		 var leftSide = $pF(sc * 8, sc * 2, -sc * 8, 0)//.K('leftSide').mS()
		 var hat = $pF(sc * 2, sc * 6, 0, -sc * 12)//.K('hat').mS()
	 }
	
	 function warpzone() {
		 TRAMPOLINE = WARPZONE = PLAYER3 = PL3 = function () {
			 W()
			 var p = w.player('jumper').aD(10000)
			 //   $t(function(){  if(STATE.warping){p.XY(200,100); STATE.warping=false}})
			 w.begin(function (c) {
				 var a = c.A(), b = c.B()
				 //  if(c.touching('feet','trampoline') ){p.I(0,-150)}
				 if (c.touching('feet', 'warp')) {
					
					 //  p.XY(200,100)
					 //    STATE.warping=true
				 }
			 })
			 bii(500, 600, 30, 200)
			 bii(600, 600, 30, 200)
			 w.A($sB(550, 580), $pF(100, 20).uD('warp'))
			 w.A($dB(650, 580), $pF(100, 20).uD('trampoline'))
		 }
		 WARPER = WRP = function () {
			 W({})
			 p = w.player('jumper')//.aD(10000)
			 p.warp = function () {
				 this.XY(200, 100)
			 }
			 $t(function () {
				 if (w.flagged('warping')) {
					 p.warp()
				 }
				 p.rot(0)
			 })
			 w.begin(function (cx) {//bodies and fixtures both have data!!!  // $l('contact: ' +a.uD() + ' with ' + b.uD() )
				 var a = cx.A().gB(), b = cx.B().gB()
				 if (cx.A().uD() == 'feet') {
					 if (cx.b().uD() == 'trampoline') {
						 p.I(0, -150)
					 }
				 }
				 if (cx.B().uD() == 'feet') {
					 if (cx.a().uD() == 'trampoline') {
						 p.I(0, -150)
					 }
				 }
				 if (cx.A().uD() == 'feet') {
					 if (cx.b().uD() == 'warp') {
						 w.flag('warping')
					 }
				 }
				 if (cx.B().uD() == 'feet') {
					 if (cx.a().uD() == 'warp') {
						 w.flag('warping')
					 }
				 }
			 })
			 w.brick(500, 600, 30, 200)
			 w.brick(600, 600, 30, 200)
			 w.brick(550, 580, 100, 20).K('warp')
			 w.box(650, 580, 100, 20).K('trampoline')
			 makeCar()
		 }
	 }
	
	 function sucky() {
		 TIMPLATS = OLDTIMWALLS = TIM = function () {
			 W()
			 bii(800, 300, 100)
			 bii(260, 240, 40)
			 bii(550, 250, 100)
			 bii(1350, 550, 100)
			 bii(300, 200, 100).bS('guy', [.4, 1.2])
			 bii(300, 500, 60, 30).bS('guy', [.4, 1.2])
			 bii(150, 400, 60, 30).bS('guy')
			 player = p = w.player('standard').aD(10000)
			 //s.sx(2).sy(2)
			 // s.t(function(){  // s.x( 450-p.x()  )  //  if(s.x() > 0){s.x(0) }  // s.y( -50-p.y()  ) })
		 }
	 }
	
	 function alpha() {
		 w.nice = w.niceStart = function () {
			 var w = this
			 w.C('z');
			 _.in(2, function () {
				 w.C('u');
				 w.db()
			 })
			 return w
		 }
	 }
	
	 info = function () {
//people dont like to use linear impulse because
//  it is a momentary jolt.. doesnt care where it is or where its going..
// problem is u can jump while in the air
// linearVelocity is like a jetpack
//can use timer, can take off gravity
//can change it to kinetic, not affected by grvity, and move it manually
// affected by density and size of objects and friction of things its touching
	 }
	 old = function () {
		 data = function (str) {
			 if (U(str)) {
				 str = 'data'
			 }
			 d.E($.h4(str))
		 }
		 dataDiv = function () {
			 d = $.div('yellow', 500, 40).A().pad(2)
			 d.data = function (str) {
				 if (U(str)) {
					 str = 'data'
				 }
				 this.E($.h4(str))
			 }
		 }
		 eh = function () {
			 v = poly.verts()
			 wd = v[1].x - v[0].x
			 ht = v[2].y - v[0].y
			 //sq.XY(300, 100)
			 cy = b.Y() + v[0].y + (ht / 2)
			 cx = b.X() + v[0].x + (wd / 2)
			 w.s.dot('white', cx, cy)
			 //bubble = w.rectSensor(200, 200, len,len, 'green')
			 //middle = w.circStat(200, 200, 8, 'orange')
			 func = function () {
				 bubble.kill()
				 len += 2
				 bubble = w.rectSensor(200, 200, len, len, 'green')
				 middle.kill()
				 middle = w.circStat(200, 200, 8, 'orange')
			 }
		 }
	 }
	 SLIDEY = JUMPER = JPR = function () {
		 W()
		 //side ways??
		 w.platform(800, 300, 100)
		 w.platform(260, 240, 40)
		 w.platform(550, 250, 100)
		 w.platform(1350, 550, 100)
		 w.platform(300, 200, 100).bS('guy', [.4, 1.2])
		 w.platform(300, 500, 60, 30).bS('guy', [.4, 1.2])
		 w.platform(150, 400, 60, 30).bS('guy')
		 p = w.p('slidey').aD(10000)
		 w.st.bm('sun', function (sun) {
			 $t(function () {
				 sun.X(450 - p.X())
			 })
		 })
	 }
	 
 }
w = p = b2d.World.prototype
///////////////
///////////////
w.me = w.addMe = function (x, y, scale) {
	var Z = scale || 4
	p = this.body(b2d.dyn(x, y), [
		b2d.poly(Z * 12.5, Z * 25).rest(0).fric(.1).den(.8).K('head'),
		b2d.poly(Z * 10, Z * 10, 0, Z * 10).K('feet').sensor(true),
		b2d.poly(Z * 2, Z * 6, 0, -Z * 12).K('hat').sensor(true),
		b2d.poly(Z * 8, Z * 2, Z * 8, 0).K('right').sensor(true),
		b2d.poly(Z * 8, Z * 2, -Z * 8, 0).K('left').sensor(true)
	]).den(1).rest(0).fixRot()
	p.bindSprite('me', Z / 10)
	return p.K('p player')
}
w.player = function (x, y, scale, onEachTick, enemy) {
	var w = this
	if (!N(scale)) {
		enemy = onEachTick;
		onEachTick = scale;
		scale = 4
	}
	var p = this.addMe(x, y, scale), func
	if (S(onEachTick)) {
		onEachTick = b2d.controls[onEachTick]
	}
	if (F(onEachTick)) {
		cjs.tick(function () {
			onEachTick(p, enemy)
		})
	}
	p.speed = 40
	p._direction = 'right'
	p.dir = p.direction = function (dir) {
		if (U(dir)) {
			return this._direction
		}
		this._direction = dir
		return this
	}
	p.moveInDir = function (n) {
		if (n == '-') {
			return p.move(-p.speed)
		}
		n = N(n) ? n : p.speed
		if (p.direction()) {
			p.I(3, 0)
		} else {
			p.I(-3, 0)
		}
		return p
	}
	p.onGround = false
	p.right = false
	p.left = false
	p.up = false
	$.key({
		u: function () {
			p.up = true
		},
		U: function () {
			p.up = false
		},
		r: function () {
			p.right = true
		},
		R: function () {
			p.right = false
		},
		l: function () {
			p.left = true
		},
		L: function () {
			p.left = false
		}
	})
	w.beg(function (cx) {
		cx.with('feet',
				function (f) {
					if (!f.isSen()) {
						this.B().onGround = true
					}
				})
	})
	w.end(function (cx) {
		cx.with('feet',
				function (f) {
					if (!f.isSen()) {
						this.B().onGround = false
					}
				})
	})
	// if(w.floor){  w.floor.rest(0) }
	return p
}
w.jumper = function (x, y) {
	x = N(x) ? x : 200;
	y = N(y) ? y : 500
	var p = this.player(x, y)
	cjs.tick(function () {
		b2d.controls.jump(p)
	})
	return p
}
w.mario = function (x, y, scale) {
	x = N(x) ? x : 100
	y = N(y) ? y : 100
	scale = N(scale) ? scale : 2.5
	return this.player(x, y, scale).horizCenter()
			.fric(.2).rest(.2).marioJumping()
}
w.thrustPlayer = function () {
	return this.player(0, 200, 2.5, 'thrust').horizCenter()
			.linDamp(.8).angDamp(10000)
}
w.yShipEquilateral = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.dir()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.linVel(), x = lv.x, y = lv.y, a = this.angVel()
		return (Math.abs(x) > 0.5) || (Math.abs(y) > 0.5) || ( Math.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').addClass(kind).K(kind)
		bullet.addClass('bullet bul')
		vec = y.GetWorldVector(V(0, -100))
		bullet.impulse(vec.x / 4, vec.y / 4)
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship
}
w.yShip = function (color, x, y, scale) {
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-halfSide, halfSide], [0, -side * 2], [halfSide, halfSide]])
	ship.dir = function () {
		return this.GetWorldVector(V(0, -1))
	}
	//methods
	ship.push = function (n) {
		n = N(n) ? n : 1
		this.I(this.dir().mult(n * 0.1))
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(),
				x = lv.x,
				y = lv.y,
				a = this.angVel(),
				abs = Math.abs
		return (abs(x) > 0.5) || (abs(y) > 0.5) || (abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var bullet, dist, y = this
		dist = y.dir().mult(100)
		bullet = w.circ(
				y.X() + dist.x,
				y.Y() + dist.y,
				6,
				'w'
		).K(kind).addClass('bul bullet')
		bullet.I(y.GetWorldVector(V(0, -100)).div(4))
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship.den(.5).K('ship')
}
w.ship = function (x, y) {
	x = N(x) ? x : 300;
	y = N(y) ? y : x
	return this.yShip(x, y).thrustControl().shootOnSpace().damp(2)
}
w.webMe = function (x, y) {
	sw = cjs.stopWatch()
	var p = this.addMe(4).XY(x, y).rest(0).den(.1).fric(100).fixRot().K('player')
	p.isConnected = function () {
		var res, that = this
		if (!A(this.webs)) {
			return false
		}
		res = _.findWhere(that.webs, {connected: true})
		return true && res && true
	}
	p.bulRight = function (x, y) {
		var bul = this.wor().circ(this.X() + 80, this.Y() - 20, 6, 'w')
		if (N(y)) {
			bul.I(x, y)
		}
		return this
	}
	p.bulLeft = function (x, y) {
		var bul = this.wor().circ(this.X() - 80, this.Y() - 20, 6, 'w')
		if (N(y)) {
			bul.I(x, y)
		}
		return this
	}
	p.getTime = function () {
		var p = this, time = p.shotClock()
		p.shotClock.reset()
		return time
	}
	p.getForce = function () {
		var time = p.getTime(),
				force = (time > 2500) ? 2000 : (time > 500) ? time - 500 : 0
		force = force / 30
		if (force > 66) {
			force = 66
		}
		return force
	}
	p.shootRight = function () {
		var force = this.getForce(),
				iX = 100 - (force * 1.5),
				iY = -force
		//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
		this.bulRight(iX, iY)
	}
	p.shootLeft = function () {
		var force = this.getForce(),
				iX = -100 + (force * 1.5),
				iY = -force
		//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
		this.bulLeft(iX, iY)
	}
	return p
}
///////////////
///////////////
w.footListener = function () {
//sets b2d.onGround setter
//requires a body that has userData 'feet',
//and it simply see if it is colliding with anything
	b2d.onGround = false
	w.beg(function (cx) {
		if (cx.with('feet')) {
			b2d.onGround = true
		}
	})
	w.end(function (cx) {
		if (cx.with('feet')) {
			b2d.onGround = false
		}
	})
	return this
}
w.bouncePlat = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.S(x, y, W, H).K('plat boucePlat').rest(.8)
}
w.coin = function (x, y) {
	var w = this
	x = N(x) ? x : Math.random() * 600
	y = N(y) ? y : Math.random() * 300
	return w.circ(x, y, 6, 'yellow').K('coin').rest(0).den(0).warp2().linDamp(0).I((Math.random() * 15) - 5, (Math.random() * 15) - 5)
}
w.stars = function (num) {
	var w = this, x, y
	num = N(num) ? num : 30
	_.times(num, function () {
		x = (Math.random() * 1000) - 500
		y = (Math.random() * 800) - 400
		w.circ(x, y, 2, 'white').den(0).rest(2)
	})
	return this
}
w.sun = function (x, y) {
	x = N(x) ? x : 300
	y = N(y) ? y : 150
	return this.S(300, 150, 20, 'p', 10).den(1).rest(.5).bindSprite('sun', .2)
}
w.startKilling = function () {
	var that = this
	cjs.tick(function () {
		that.each(function (body) {
			if (body.is('destroy')) {
				body.K('destroyed')
				body.kill()
			}
		})
	})
	return this
}
w.addTim = function (num) {
	var that = this
	if (U(num)) {
		return that.ball().K('tim').bindSprite('guy', .3)
	}
	_.times(num, function () {
		that.addTim()
	})
	return this
}
w.platform2 = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.S(x, y, W, H).r(0).K('platform')
}
w.plat = w.platform = function (x, y, W, H) {//=brk=brick=
	x = N(x) ? x : 60;
	y = N(y) ? y : x
	W = N(W) ? W : 30;
	H = N(H) ? H : W
	return this.body(b2d.stat(x, y), b2d.poly(W, H).r(.3)
	).K('plat platform')
}
w.bullet = function self(x, y, r) {//radius
//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}
	var bullet
	// can pass in (x,y or {x:x,y:y}), and radius
	if (O(x)) {
		r = y;
		y = x.y;
		x = x.x
	}
	x = x || 100
	y = N(y) ? y : x
	r = r || 10
	bullet = this.B(x, y, r)
	bullet.addClass('bullet bul').K('bullet')
	return bullet
}
w.fireBall = function (x, y, vX, vY) {
	var v = 8
	if (vX == 'l') {
		vX = v;
		vY = 0
	}
	if (vX == 'r') {
		vX = -v;
		vY = 0
	}
	if (vX == 'u') {
		vX = 0;
		vY = -v
	}
	if (vX == 'd') {
		vX = 0;
		vY = v
	}
	if (vX == 'ul') {
		vX = v;
		vY = -v
	}
	if (vX == 'ur') {
		vX = -v;
		vY = -v
	}
	if (vX == 'dl') {
		vX = v;
		vY = v
	}
	if (vX == 'dr') {
		vX = -v;
		vY = v
	}
	vX = N(vX) ? vX : 0
	vY = N(vY) ? vY : 0
	return this.K(x, y, 'r', 18).bindSprite('sun', .2)
			.lV(vX, vY)
}
w.zilla = function (x, y) {
	var w = this
	var z = w.K(x, y, 80, 140) //make sensor?
			.fixRot()
			.bindSprite('guy', [.8, 1])
			.moveInCircle('-')
			.coll('bul',
			function (bul) {
				bul.B().kill()
				z.hits++
			})
	z.hits = 0
	z.fireBalls = function () {
		var x = this.X(),
				y = this.Y()
		w.fireBall(x + 50, y - 80, 'ul')
		w.fireBall(x + 50, y + 80, 'dl')
		w.fireBall(x - 50, y - 80, 'ur')
		w.fireBall(x - 50, y + 80, 'dr')
		w.fireBall(x, y - 80, 'u')
		w.fireBall(x, y + 80, 'd')
		w.fireBall(x - 50, y, 'r')
		w.fireBall(x + 50, y, 'l')
	}
	z.fireBallsAtInt = function (ms) {
		var z = this
		setInterval(function () {
			z.fireBalls()
		}, ms)
		return this
	}
	return z
}
w.clouds = function (leftPoint, y) {
	var that = this
	leftPoint = N(leftPoint) ? leftPoint : 100
	y = N(y) ? y : 75
	_.times(100, function () {
		that.S(
				Math.random() * 400 + leftPoint,
				y,
				Math.random() * 30
		)
	})
	return this
}
w.grass = function (x, y, len) {
	x += len / 2
	var grass = this.S(x, y, 'g', len, 20).fric(.3).rest(.3)
	return grass
}
w.ice = function (x, y, len) {
	x += len / 2
	var ice = this.S(x, y, 'w', len, 20).fric(0).rest(0)
	return ice
}
w.rubber = function (x, y, len) {
	x += len / 2
	var rub = this.rectStat(x, y, len, 20, 'red').fric(.3).rest(.7)
	return rub
}
w.ramp = function (x, y, wd, h, rot) {
	x = x || 300
	y = y || 300
	wd = wd || 100
	h = h || 100
	rot = rot || 10//Math.toRadians(45)
	var ramp = this.S(x, y, wd, h).rot(rot)
	ramp.bindSprite2(cjs.rect(wd, h, 'yellow')).fric(1)
	return ramp
}
w.ramps = function () {
	this.ramp(400, 350, 200, 300, 100)
	this.ramp(500, 350, 300, 300, 60)
	this.ramp(600, 350, 200, 300, 100)
	this.ramp(700, 350, 300, 300, 60)
	this.ramp(800, 350, 200, 300, 100)
	this.ramp(1000, 350, 300, 300, 60)
	this.ramp(1030, 350, 200, 300, 100)
	this.ramp(1200, 350, 300, 300, 60)
	return this
}
w.goomba = function (x, y) {
	y = N(y) ? y : 100
	w.box(x, y).bindSprite('guy').K('goomba')
}
w.bobom = function () {
	var that = this,
			bobom = this.dyn(100, 100),
			body = bobom.poly(20).den(1),//.rest(1)
			sensor = bobom.poly(25, 5, 30, 0, '-')
	sensor.coll('player', function () {
		this.B().kill()
	})
	return bobom
}
w.link = function self(x, y) {
	var that = this, l
	l = this.rect(x, y, 4, 20).den(4).rest(2)
	l.l = function (num) {
		num = N(num) ? num : 1
		var lk
		_.times(num, function () {
			lk = self(l.X(), l.Y() + 15)
			that.rev(l, lk)
			l = lk
		})
		return l.K('leaf')
	}
	return l
}
w.vine = function (x, y, len) {
	len = len || 10
	var that = this,
			base = this.link(x, y).stat(),
			l = base.l(len)
	this.begin(function (cx) {
		if (cx.with('player', 'leaf')) {
			var j = that.rev(l, p.XY(l.X(), l.Y()))
			$.kD('down', function () {
				that.DestroyJoint(j)
			})
		}
	})
}
w.tramp = function (xloc, rest, freq, damp) {
	var bouncer, j, w = this
	xloc = N(xloc) ? xloc : 290
	rest = N(rest) ? rest : .75
	freq = N(freq) ? freq : 6
	damp = N(damp) ? damp : 0
	bouncer = this.B(xloc, 200, 'b', 200, 20).fixRot()
			.den(0).rest(rest).fric(0)
	j = w.dist(
			w.S(xloc, 280, 'w', 20, 20), bouncer).len(115).freq(freq).damp(damp)
	w.S(xloc - 120, 290, 'b', 40, 300).fric(0)
	w.S(xloc + 120, 290, 'b', 40, 300).fric(0)
	return j
}
w.bridge = function (x, y) {
	var that = this
	x = N(x) ? x : 400
	y = N(y) ? y : 100
	var b1 = this.S(x, y, 10),
			b2 = wood(),
			b3 = wood(),
			b4 = wood(),
			b5 = wood(),
			b6 = wood(),
			b7 = wood(),
			b8 = wood(),
			b9 = wood(),
			b10 = this.circStat(x + 700, y, 10)
	pieces([b1, b2], [b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9], [b9, b10])
	function wood() {
		return that.rect(100, 100, 90, 60).den(1).fixedRot(true)
	}
	
	function piece(a, b) {
		that.distColl(a, b).len(6).freq(5)
	}
	
	function pieces() {
		_.each(arguments, function (arg) {
			piece(arg[0], arg[1])
		})
	}
}
w.elev = w.elevator = function (x) {
	var elev = {}
	elev.plat = this.rect(x, 100, 100, 10).den(1).K('elev')
			.coll(function () {
				elev.flip()
			})
			.collWithKind('player', function (p) {
				p.linVel(0)
			})
	elev.base = this.brickSensor(x, 150, 1, 100).den(1).fric(100)
	elev.j = this.prism(elev.plat, elev.base, V(0, 1))
	elev.speed = 2
	elev.j.mot(elev.speed)
	elev.flip = _.throttle(function () {
		this.j.mot(this.speed *= -1)
	}, 200, {trailing: false})
	return elev
}
w.greenGuy = function (x, y) {
	x = N(x) ? x : 100;
	y = N(y) ? y : 100
	var that = this,
			size = 20,
			b = that.dyn(x, y).K('greenGuy'),
			centFix = b.rect(20, 20).K('center').rest(2),
			f = b.rectSensor(size, size)
	setInterval(function () {
		f.kill();
		size += 4;
		f = b.rectSensor(size, size)
	}, 500)
	that.begin(function (cx) {
		var fix
		fix = cx.with('center', 'bullet')
		if (fix) {
			if (cx.A() == centFix) {
				size = 20;
				b.linVel(0).angVel(0)
			}
			if (cx.B() == centFix) {
				size = 20;
				b.linVel(0).angVel(0)
			}
		}
	})
	__greenGuy = b
	return b
}
w.car = function () {
	var car = w.rect(150, 150, 90, 30, 'black')
	j1 = w.Rev(
			w.circ(200, 150, 30, 'red').fric(0).den(1),
			car
	)
	j1.speed(120)
	j1.EnableMotor(true)
	j1.SetMaxMotorTorque(1000000)
	j2 = w.Rev(w.circ(100, 150, 30, 'blue').fric(0).den(1), car)//.speed(-500).torque(40).motor(true)
	j2.speed(150)
	//j2.EnableMotor(true)
	j2.SetMaxMotorTorque(1000000)
	return car
}
w.roller = function () {
	var car = w.rect(250, 150, 90, 30, 'black')
	j1 = w.Rev(
			w.circ(300, 150, 30, 'red'),
			car
	)
	j1.speed(6)
	j1.EnableMotor(true)
	j1.SetMaxMotorTorque(1000000)
	j2 = w.Rev(w.circ(200, 150, 30, 'red'), car).speed(-500).torque(40).motor(true)
	return car
}
w.rFlip = w.rightFlipper = function (x, y) {
	var w = this
	var rightJoint = w.S(x, y, 'r', 20),
			rightFlip = w.B(x, y, 'b', 100, 25).DBF(1, .5, 0)
	var flipper = w.rev(rightJoint, rightFlip, 0, 0, 40, 0).lim(-70, 30)
	flipper.flip = function () {
		rightFlip.I(-1000, 0)
	}
	return flipper
}
w.lFlip = w.leftFlipper = function (x, y) {
	var w = this
	var leftFlip = w.B(x, y, 'b', 100, 25).DBF(1, .5, 0),
			leftJoint = w.S(x, y, 'r', 20)
	var flipper = __leftFlipper = w.rev(leftJoint, leftFlip, 0, 0, 40, 0).lim(150, 250)
	flipper.flip = function () {
		leftFlip.I(1000, 0)
	}
	return flipper
}
w.flips = w.flippers = function (x, y, x2, y2) {
	if (U(y2)) {
		y2 = y
	}
	if (U(x2)) {
		x2 = x + 230
	}
	var lf = w.lFlip(x, y),
			rf = w.rFlip(x2, y2)
	var flip = function flip() {
		lf.flip();
		rf.flip();
		return flip
	}
	flip.left = lf
	flip.right = rf
	return flip
}
w.grid = w.drawGrid = function (grid, x, y, len, spacing) {
	var that = this, body
	var gridDrawer = function (x, y, len, spacing) {
				body = that.dyn(x, y)
				len = N(len) ? len : 30;
				spacing = N(spacing) ? spacing : 20
				return function (x, y) {
					body.rect(len, len, x * spacing, y * spacing)
							.den(1).fric(0.5).rest(.2)
					return body
				}
			},
			drawWall = gridDrawer(x, y, len, spacing)
	_.times(grid.length, function (row) {
		_.times(grid[0].length, function (col) {
			if (grid[col][row]) {
				drawWall(row, col)
			}
		})
	})
	return body.K('grid')
}
w.badGuy = function (x, y) {
	var that = this, w = this
	b = w.ball(x, y, 60).bindSprite2(this.s.shape(x, y))
	b.draw = function (frame) {
		this.sprite.rG(['r', 'g'], [frame[0], frame[1]], 60).dc(0, 0, 60)
	}
	b.h = b.health = 100
	b.coll(function () {
		b.h--
	})
	b.K('badGuy')
	funcId = I(function update() {
		b.draw(frameByHealth(b))
		if (b.h <= 0) {
			clearInterval(funcId)
			b.kill()
		}
		function frameByHealth(b) {
			if (b.h < 0) {
				b.h = 0
			}
			if (b.h > 100) {
				b.h = 100
			}
			if (b.h < 50) {
				return [1 - ((b.h / 50)), 1]
			}
			else {
				return [0, 1 - ((b.h - 50) / 50)]
			}
		}
	}, 300)
	return b
}
w.marioWallsX = function () {
	var width = 600, height = 300, gravity = 400
	w.left = left = w.rect(0, height / 2, 40, height, 'pink').stat().K('leftWall').fric(.5).rest(.5)
	w.right = right = w.rect(width, height / 2, 40, height).K('rightWall')
	w.floor = floor = w.rect(height, width / 2, width * 5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
	w.ceiling = ceiling = w.rect(height, 0, width * 5, 40, 'orange').stat().K('ceiling').fric(.2).rest(.2)
	return this
}
w.goal = function (x, y) {
	w.S(x - 20, y - 15, 'y', 10, 40)
	w.S(x, y, 'y', 40, 10)
	w.S(x + 20, y - 15, 'y', 10, 40)
}
w.sensorBucket = function (x, y, k) {
	var w = this, sens
	x = N(x) ? x : 320
	y = N(y) ? y : 245
	k = k || 'sensorBucket'
	w.S(x - 150, y - 15, 'r', 20, 200)
	w.S(x + 150, y - 15, 'r', 20, 200)
	w.S(x - 200, y - 120, 'r', 320, 20, 200, 200)
	sens = w.S(x, y, 'd', [[280, 170, '-']]).K(k)
	return sens
}
cjs.stopWatch = function () {
	var watch = function self(reset) {
		var res = new Date().getTime() - self.time
		if (reset == '/') {
			self.reset()
		}
		return res
	}
	watch.reset = function () {
		this.time = new Date().getTime()
	}
	watch.reset()
	return watch
}
BADDIES = function () {
	w = b2d.W();
	w.goomba();
	w.bobom(200, 200)
}
ROLLERS = function () {
	b2d.levelScrollX()
	// _.times(3, function(){w.roller()})
	setInterval(function () {
		w.roller()
	}, 1000)
	p.X(1750)
}
RACE = function () {
	b2d.levelScrollX()
	car = w.car()
	w.dist(p, car).len(0)
	floor.fric(.1)
}
function player() {
	w.tim = w.addTim = function (n) {
		$l('w.tim')
		var w = this
		if (U(n)) {
			return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
		}
		_.t(n, function () {
			w.addTim()
		})
		return w
	}
	w.me = function (x, y, Z) {
		var w = this, p
		Z = N(Z, 4)
		p = w.D(x, y)
		p.cir({c: 'X', C: 'X', l: 0, r: 1})
		p.rec('X', Z * 12, Z * 22).K('head')
		p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
		p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
		p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
		p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
		p.d(1).r(0).fr(.1).fixRot()
		p.bS({
			i: 'me',
			sc: Z / 10
		})
		return p.K('p player')
	}
	w.plat = function me(x, y, W, H) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		x = _.tN(x, 60)
		y = _.tN(y, x)
		W = _.tN(W, 30)
		H = _.tN(H, W)
		return w.S(x, y, 's', W, H)
				.r(0.3)
				.fr(2)
				.K('plat')
	}
	w.clod = w.clouds = function (lX, y) {
		var w = this
		lX = N(lX, 100)
		y = N(y, 75)
		_.t(100, function () {
			w.S(R(400) + lX, y, $r(), R(30))
		})
		return w
	}
	w.rub = w.rubber = function (x, y, len) {
		var w = this, rub
		len = N(len, 200)
		x += len / 2
		return w.S(x, y).rec({
			w: len, h: 20, c: 'r', s: 1
		}).fr(.3).r(.7)
	}
	w.grass = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
	}
	w.ice = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'w', len, 20).fr(0).r(0)
	}
	w.p = function (x, y, sc, cn) {
		var w = this, g = G(arguments),
				p
		sc = N(sc, 1)
		cn = cn || 'jump'
		p = w.D(x, y).fR()
		p.cn(cn)
		p.SetBullet(true)
		p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5)
		p.rec({
			s: 1,
			w: 8 * sc, h: 8 * sc,
			x: 0,
			y: 20 * sc,
		}).K('feet').C('X')
		p.Bm('me', 0, 0, 0.25 * sc)
		// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
		if (g.p) {
			p.tr()
		}
		p.r(.4)
		p.lD(.5)
		return p
	}
	b.inAir = function () {
		var b = this, onG = false
		this.cxs(function (cx) {
			if (cx.IsTouching()) {
				cx.w('feet',
						function () {
							if (this.of(b)) {
								onG = true
							}
						})
			}
		})
		return !onG
	}
	b2d.cn.j = b2d.cn.jump = function (p) {
		
		/* p.vX(
		 K.r?200 :
		 K.l?-200 :0)
		 if(K.u && p.onG){
		 p.vY(-1000)
		 }*/
		var m = p.mass()
		if (p.inAir()) {
			if ($.K.r) {
				p.I(m / 2, 0)
			}
			else if ($.K.l) {
				p.I(-m / 2, 0)
			}
			p.I(0, m * 3)
		}
		else {//on ground
			if ($.K.u) {//initiate a jump
				if ($.K.r) {
					p.lV(m, -m * 4)
				}
				else if ($.K.l) {
					p.lV(-m, -m * 4)
				}
				else {
					p.lV(0, -m * 8)
				}
			}
			else {//not jumping, may be running
				if ($.K.r) {
					p.lV(m * 2, 0)
				}
				else if ($.K.l) {
					p.lV(-m * 2, 0)
				}
				else {
					p.lV(0, 0)
				}
			}
		}
		if ($.K.d) {
			p.I(0, m * 3)
		}
	}
	w.P = function (x, y, sc) {
		var w = this,
				g = G(arguments)
		p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
		if (g.p) {
			p.tr()
		}
		return w
	}
	STOOGES = MARIOS = MARS = function () {
		W().P().P().P()
	}
	STREET = HIDESEEK = HEEK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
}
function player() {
	w.tim = w.addTim = function (n) {
		$l('w.tim')
		var w = this
		if (U(n)) {
			return w.D(300, 300, 'w', 15).K('tim').bS('guy', .3)
		}
		_.t(n, function () {
			w.addTim()
		})
		return w
	}
	w.me = function (x, y, Z) {
		var w = this, p
		Z = N(Z, 4)
		p = w.D(x, y)
		p.cir({c: 'X', C: 'X', l: 0, r: 1})
		p.rec('X', Z * 12, Z * 22).K('head')
		p.rec('X', Z * 10, Z * 20, 0, Z * 10, '-').K('feet')
		p.rec('X', Z * 2, Z * 6, 0, -Z * 12, '-').K('hat')
		p.rec('X', Z * 8, Z * 2, Z * 8, 0, '-').K('right')
		p.rec(Z * 8, Z * 2, -Z * 8, 0, '-').K('left')
		p.d(1).r(0).fr(.1).fixRot()
		p.bS({
			i: 'me',
			sc: Z / 10
		})
		return p.K('p player')
	}
	w.plat = function me(x, y, W, H) {
		var w = this, g = G(arguments)
		if (A(g[0])) {
			_.e(g, function (g) {
				me.apply(w, g)
			})
			return w
		}
		x = _.tN(x, 60)
		y = _.tN(y, x)
		W = _.tN(W, 30)
		H = _.tN(H, W)
		return w.S(x, y, 's', W, H)
				.r(0.3)
				.fr(2)
				.K('plat')
	}
	w.clod = w.clouds = function (lX, y) {
		var w = this
		lX = N(lX, 100)
		y = N(y, 75)
		_.t(100, function () {
			w.S(R(400) + lX, y, $r(), R(30))
		})
		return w
	}
	w.rub = w.rubber = function (x, y, len) {
		var w = this, rub
		len = N(len, 200)
		x += len / 2
		return w.S(x, y).rec({
			w: len, h: 20, c: 'r', s: 1
		}).fr(.3).r(.7)
	}
	w.grass = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'g', len, 20).fr(.3).r(.3)
	}
	w.ice = function (x, y, len) {
		var w = this
		len = N(len, 200)
		x += len / 2
		return w.S(x, y, 'w', len, 20).fr(0).r(0)
	}
	w.p = function (x, y, sc, cn) {
		var w = this, g = G(arguments),
				p
		sc = N(sc, 1)
		cn = cn || 'jump'
		p = w.D(x, y).fR()
		p.cn(cn)
		p.SetBullet(true)
		p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5).C('z')
		p.rec({
			s: 1,
			w: 8 * sc, h: 8 * sc,
			x: 0,
			y: 20 * sc,
		}).K('foot feet').C('w')//C('X')
		p.rec({
			s: 1,
			w: 10 * sc,
			h: 10 * sc,
			x: 0,
			y: -30 * sc,
		}).K('hat').C('g').mS()
		p.Bm('me', 0, 0, 0.25 * sc)
		// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
		if (g.p) {
			p.tr()
		}
		p.r(.4)
		p.lD(.5)
		return p
	}
	f.mS = function () {
		var f = this
		f.SetSensor(true)
		return f
	}
	b.inAir = function () {
		var b = this, onG = false
		this.cxs(function (cx) {
			if (cx.IsTouching()) {
				cx.w('feet',
						function () {
							if (this.of(b)) {
								onG = true
							}
						})
			}
		})
		return !onG
	}
	b2d.cn.j = b2d.cn.jump = function (p) {
		
		/* p.vX(
		 K.r?200 :
		 K.l?-200 :0)
		 if(K.u && p.onG){
		 p.vY(-1000)
		 }*/
		var m = p.mass()
		if (p.inAir()) {
			if ($.K.r) {
				p.I(m / 2, 0)
			}
			else if ($.K.l) {
				p.I(-m / 2, 0)
			}
			p.I(0, m * 3)
		}
		else {//on ground
			if ($.K.u) {//initiate a jump
				if ($.K.r) {
					p.lV(m, -m * 4)
				}
				else if ($.K.l) {
					p.lV(-m, -m * 4)
				}
				else {
					p.lV(0, -m * 8)
				}
			}
			else {//not jumping, may be running
				if ($.K.r) {
					p.lV(m * 2, 0)
				}
				else if ($.K.l) {
					p.lV(-m * 2, 0)
				}
				else {
					p.lV(0, 0)
				}
			}
		}
		if ($.K.d) {
			p.I(0, m * 3)
		}
	}
	w.P = function (x, y, sc) {
		var w = this,
				g = G(arguments)
		p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
		if (g.p) {
			p.tr()
		}
		return w
	}
	STOOGES = MARIOS = MARS = function () {
		W().P().P().P()
	}
	STREET = HIDESEEK = HEEK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
}
w.addMe = function (scale) {
	return this.A(
			$dB(100, 100), [$rF(scale * 12.5, scale * 25).re(0).fr(.1).de(.8)]).K('player').bindSprite('me', .3)
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
function maro() {
	w.p = function (x, y, sc, cn) {
		var w = this, g = G(arguments),
				p
		sc = N(sc, 1)
		cn = cn || 'jump'
		p = w.D(x, y).fR()
		p.cn(cn)
		p.SetBullet(true)
		p.rec({c: 'r', l: 5, C: 'r', w: 22 * sc, h: 40 * sc}).d(5)
		p.rec({
			s: 1,
			w: 8 * sc, h: 8 * sc,
			x: 0,
			y: 20 * sc,
		}).K('feet').C('X')
		p.Bm('me', 0, 0, 0.25 * sc)
		// p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
		if (g.p) {
			p.tr()
		}
		p.r(.4)
		p.lD(.5)
		return p
	}
	b.inAir = function () {
		var b = this, onG = false
		this.cxs(function (cx) {
			if (cx.IsTouching()) {
				cx.w('feet',
						function () {
							if (this.of(b)) {
								onG = true
							}
						})
			}
		})
		return !onG
	}
	b2d.cn.j = b2d.cn.jump = function (p) {
		
		/* p.vX(
		 K.r?200 :
		 K.l?-200 :0)
		 if(K.u && p.onG){
		 p.vY(-1000)
		 }*/
		var m = p.mass()
		if (p.inAir()) {
			if ($.K.r) {
				p.I(m / 2, 0)
			}
			else if ($.K.l) {
				p.I(-m / 2, 0)
			}
			p.I(0, m * 3)
		}
		else {//on ground
			if ($.K.u) {//initiate a jump
				if ($.K.r) {
					p.lV(m, -m * 4)
				}
				else if ($.K.l) {
					p.lV(-m, -m * 4)
				}
				else {
					p.lV(0, -m * 8)
				}
			}
			else {//not jumping, may be running
				if ($.K.r) {
					p.lV(m * 2, 0)
				}
				else if ($.K.l) {
					p.lV(-m * 2, 0)
				}
				else {
					p.lV(0, 0)
				}
			}
		}
		if ($.K.d) {
			p.I(0, m * 3)
		}
	}
	w.P = function (x, y, sc) {
		var w = this,
				g = G(arguments)
		p = w.p(N(g.f, w.hW), N(g.s, w.H - 50), N(sc, 2))
		if (g.p) {
			p.tr()
		}
		return w
	}
	AUTOGAME = function () {
		W({w: 0, t: 0}).P()
		setup = function () {
			score = 0
			p.XY(350, 100)
			p.lV(0, 0)
			p.cn('j')
			p.d(.1).r(1).fr(0)
			w.s.XY(0, 0)
		}
		setup()
		T.t(function () {
			w.s.X(4, '-');
			if (p.relPos() < -100) {
				setup()
			}
		})//.pen(score++)
		w.ramps()
	}
	MARIOS = function () {
		W().P().P().P()
	}
	HIDESEEK = function () {
		W([1200, 600, 1400, 1200], {g: 300, t: 0})
		w.S(700, 1000, 'r', 800, 20)
		w.S(500, 800, 'g', 200, 20)
		w.S(900, 600, 'x', 200, 20)
		p = w.p(700, 600)
		w.fg.A(p.sp())
		w.track(p, 600, 400,
				{x: 700, y: 1000, w: 700, h: 600, mX: 1.5})
	}
}

//from scroll//track:
//
w.addMe = function (scale) {
	return this.A(
			$dB(100, 100), [$rF(scale * 12.5, scale * 25).re(0).fr(.1).de(.8)]).K('player').bindSprite('me', .3)
}