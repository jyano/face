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
	 