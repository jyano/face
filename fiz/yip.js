$PT()
b.GWV = function (vec) {
	return this.GetWorldVector(vec)
}
b._shootEv=b.shootOnInt = function (n, k) {var b = this
	n = N(n) ? n : 1000
	_.sI(function () {
	if (b.IsActive()) {
		b.shoot(k)}
	}, n)
	return b
}
b.shootEv = function (secs, k) {
	return this._shootEv(secs * 1000, k)
}

b.shootOnSpace = function (k) {
	var y = this
	$.space(function () {
		y.shoot(k)
	})
	return this
}
b.aboveGlobally =b.aboveMeGlobally = b.aboveMe =  b.above = function () {
	return this.wPt(0, -100)// -p.sprite.H()/2
}
b.webGuyShoot = function (k) {
	var y = this;
	k = k || 'bul'
	var dist = y.dir().m(100)
	var bul = w.BALL(y.X() + dist.x, y.Y() + dist.y, 6, 'w')
	bul.K(k)
	var v = y.GetWorldVector(V(0, -100))
	bul.I(v.x / 4, v.y / 4)
	_.in(.4, function () {
		bul.kill()
	})
	return bul
}

b.shoot = function () {var b = this, w = b.W(), g=G(arguments)
	var pt = b.GWV( V(0, -100) )
	var pel = w.pellet( b.aboveGlobally() )
			.I(pt.x / 20, pt.y / 20)
	if(g.m){pel.bS('me', 0.15)}
	return pel 
}

w.pel=w.pell= w.pellet=w.bullet = function (x, y, r) {
	var w = this,g=G(arguments),o
	//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}
	// can pass in (x,y,r) | ({x:x,y:y},r )
	 o = O(g.f)? {x: g.f.x, y: g.f.y, r: g.s}: 
	 {x: g.f, y: g.s, r: g.t}
	o.x = N(o.x) ? o.x : 0
	o.y = N(o.y) ? o.y : 0
	o.r = N(o.r) ? o.r : 10
	var  bul  = w.BALL(o.x, o.y, o.r, 'w').de(.3)
	// to do: set as isBullet true!!! duh! (its the nominal use case ;) )
	bul.K('bul')
	return bul
}

b.gWV = function (vec) {
	return this.GetWorldVector(vec || V(0, -1))
}
b.vec=b.wVec = b.wV = b.worVec = b.worldVec = function (v, y) {
	y= N(y) ? V(v, y) : v
	return this.gWV(y)
}
b.fly = function (n) {return this.I(this.wVec()
				.d(N(n)?-n:-20))}
b.push = function (n) {return this.I(this.wVec()
				.m(N(n)?n:.1))}
b.steer = b.turnRot = b.turnRt = function (rt) {
	var b = this
	rt = rt || 15
	if (K.l) {b.rt(rt, '-')}
	if (K.r) {b.rt(rt, '+')}
	return b
}
b.impFly = function (u, d) {
	var b = this
	u = N(u) ? u : 20;
	d = N(d) ? d : u
	if (K.u) {
		b.fly(u)
	}
	if (K.d) {
		b.fly(d)
	}
	return b
}
b.turnFlyImp = function (rot, up, down) {
	return this.steer(rot).impFly(up, down)
}
$con.thrustGrav = function (p) {
	p.turnFlyImp(8, 20, 100)
			.impRun(5)
}
$con.thrust = function (p) {
	p.turnFlyImp(15, -.1, 100).nRt()
}
w.killTim=function(){
	this.b(function (cx) {var a = cx.a(), b = cx.b()   // if either a or b is a bullet..
		// and neither is the guy (if a bullet hits a non-guy...) 
		// destroy the bullet, and if it hit tim, destroy tim too
		if (cx.w('bul') && b2d.neither(a, b).is('guy')) {
			if (a.is('bul')) {a.setDestroy();
				b.setDestroyIf('tim')
			}
			
			else {b.setDestroy();
				a.setDestroyIf('tim')
			}
		}
	})}
w.playerVsTim = function () {

 
	this.b(function (cx) {
		
		if (cx.btwn('player', 'tim')) {cx.setDestroyIf('player')}

		if (
		
				
				cx.exIn('player', 'bul')) {

			cx.setDestroyIf('tim', 'bul')
		
		}
	})
	 
	return w
}
w.shipTri = w.yShip = function () {
	//can pass: col x,y,sc OR x,y,sc
	//this returns JUST a coloroed physics body with no actions
	var w = this, g = G(arguments), o
	o = S(g.f) ? {col: g.f, x: g.s, y: g.t, sc: g[3]} :
	{x: g.f, y: g.s, sc: g.t}
	o.col = o.col || 'y'
	var base = N(o.sc) ? o.sc * 8 : 32
	var hB = base / 2
	var y = this.D(o.x, o.y)
	
	y.poly([-hB, hB], [0, -base * 2], [hB, hB])
	
	//y.POLY(o.col, [[-hB, hB], [0, -base * 2], [hB, hB]])
	
	return y.de(.5)
}

w.Y = w.y = w.ship = function () {
	var y = this.yShip.apply(this, arguments)
	y.con('thrust')
	y.shootOnSpace()
	return y
}
 

b.chug = function (n) {
	var b = this
	_.ev(.1, function () {
		b.push(n)
	})
	return b
}
b.going = function () {
	var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
	return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
}
MINIWALLS = BIRDCAGE = THRUSTPLAYER = BCG = function () {
//gotta make guy heavier
//thrust is good with grav 10 !!!!
// , walls:b2d.miniWalls
	W({
		g: 10, W: 500, H: 400, w: function () {
			w.brick(200, 50, 300, 20) //top
			w.brick(200, 360, 300, 20) //bottom
			w.brick(60, 240, 20, 260) //left
			w.brick(340, 320, 20, 100)
		}
	})
	
	w.p(2).con('thrust')
	
	w.ball(300, 100, 12)
	g = b.bS('guy', .2).aD(.8)
	$t(function () {g.rt(0)}
	)
}
TAPSHOOT =   TAP = function () {W(0).tim(7)
		p = w.me().X(50)
		
		$.$(function (e) {   //  po= p.wP(0, -75)
			
			var bul  = p.shoot()
			
			if(M.r()*5 <1){bul.bS('sun', .2)}
			
			var dx = e.pageX - p.X()
			var dy = e.pageY - p.Y()
			//thrust ship
			p.I(dx / 20, dy / 20)
			//rotate ship
			p.rt(M.tD(M.atan(dy / dx)) + (dx > 0 ? 90 : 270))
		})
		
		w.playerVsTim()	
}
KILLTIM = PSYCHOTHRUSTER = NOCLEAR = PSY = function () {
	W({g: 0, clear: false}).db()//false is needed
	p = w.p().con('thrust').aD(10000)
	w.dude(3)
	w.killTim()
	$.kD('s', function () {
		var pt = p.wPt(0, -75)
		var b = w.ba(pt.x, pt.y, 10).bS('me', 0.1)
		var v = p.vec()
		b.I(v.x / 40, v.y / 40)
	})
	_.ev(3, function () {w.st.clear()})
}
WAR = function () {
	x = 50
	y = 50
	W0()
	y = w.yShip('b', 100, 200, 6).aD(1).lD(1).re(0).fr(1).K('guy')
			.shootOnSpace('guyBul')
			.con('thrust')
			
	_.t(10, function () {
		w.yShip(x += 30, Y += 60, 3).chug(4).K('bad').shootEv(1, 'bul').rt(45)
	})
	w.b(function (cx) {
		if (cx.w('bul', 'bad')) {cx.destroyBoth()}
		if (cx.w('badBul', 'guy')) {cx.destroyBoth()}
	})
}// cx.w(k,k) destroyBoth
YIP=SHIP = STUMBLE = STUM = function () {W({g:3});
	
	
	b = w.BOX(200, 200, 150, 150).de(1) 
	
	w.b(function (cx) {
	
		if (cx.w('bul', 'bad')) {
			cx.a().K('destroy');
			cx.b().K('destroy')
		}
		
		else if (cx.w('bul') && !cx.w('yip')){
			cx.destroyIf('bul')
		}
		
	})
	
	
	y = w.yShip('b', 100, 200, 6).con('thrust').K('yip')
	y.aD(1).lD(1).re(0).fr(1)
	y.shootEv(1)
	
	 y = w.ship().XY(500, 300).K('yip')

	_.t(5,stumble)
	function stumble(){
	
var	stum = w.yShip('r', 300, 400, 3).K('bad')
	_.ev(.05, function () {
		var v = stum.gWV(V(0, 90))
		stum.I(0, v.y / 10).rt(3, '+')
	})
	}
	
	
}
YELLOWSHIP = YEL=function () {
	W({g: 3})
	yellow()
	_.in(5, function () {
		w.C('v')
		_.ev(1, yellow)
	})
	function yellow() {
		y = w.yShip(300, 400, 3).rt(90)
		y1 = w.yShip(600, 400, 3).rt(90)
		_.in(.5, onTime)
	}
	
	function onTime() {
		y.I(0, -4);
		y1.I(4, 0)
	}
	
	function onInt() {
		y.I(0, -.7).rt(4, '+');
		y1.lV(0, -3).rt(4, '+')
	}
	
	
}
$L('boxBul', 'controls', 'spazBul', 'worVec', 'aiTrack')
function controls() {
	b.controls = b.cn = function (cn, o) {
		var b = this, w = b.W()
		//stop a current 'controls', if any
		if (F(b._cn)) {
			w.s.off('tick', b._cn)
		}
		if (U(cn)) {
			return
		}
		if (S(cn)) {
			cn = b2d.cn[cn]
		}
		if (F(cn)) {
			b._cn = w.s.t(
					function () {
						cn(b, o)
					}
			)
		}
		return b
	}
	b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
		var vec
		mult = N(mult, 200)
		if ($.K.u) {
			vec = p.vec().m(mult)
			p.I(vec)
		}
		p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
		//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
	}
}
function boxBul() {
	b.setBul = function (sB) {
		this.SetBullet(sB ? true : false);
		return this
	}
	b.makeBul = function () {
		return this.setBul(1)
	}
	w._bul = function (x, y, r, c) {
		return this.D(x, y, c || 'w', N(r, 8)).K('bul bu')
				.makeBul().fr(0).d(.1).bo(.5).lD(0).aD(0)
	}
}
function spazBul() {
	G.cir = function (g) {
		return g.O ? g.f : g.O_ ? {x: g.f.x, y: g.f.y, r: g.s} :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
	}
	w.bul = w.bu = function () {
		var w = this, g = G(arguments), o = G.cir(g)
		var bul = w._bul(o.x, o.y)
		if (g.d) {
			bul.cl(function () {
				this.B().kill()
			})
		}
		if (g.m) {
			bul.cl(function (f) {
				f.B().kill()
			})
		}
		return bul
		//instructions: can pass   {x,y,r} ||  {x,y},rad  ||  x,y,rad 
	}
}
function worVec() {
	b.gWV = function (vec, y) {
		vec = O(vec) ? vec : V(vec, y)
		return this.GetWorldVector(vec)
	}
	G.vec = function (g) {
		var o = g.O ? g.f : g.s ? {x: g.f, y: g.s} : //this not error
		{y: g.f}
		o.x = N0(o.x)
		o.y = N(o.y, -1)
		return o
	}
	b.vec = b.v = function () {
// the current direction of that vector in world coordinates
		var g = G(arguments)
		var vec = G.vec(g)
		return this.gWV(vec)
	}
	v.tD = function () {
		var v = this
		return V(M.tD(v.x), M.tD(v.y))
	}
	w.arm = function () {
		w.S(300, 300, 20, 200);
		var arm = w.S(300, 300, [['b', 200, 50, 100, 0]]);
		_.ev(.1, function () {
			arm.rt(1, '+')
		})
		return arm
	}
	STUM = BVEC = function () {
		W({g: 3})
		y = w.y(300, 400, 3, '-')
		_.ev(.1, function () {
			var vec = y.vec(0, 1.5).tD()
			y.I(0, vec.y / 5)
			y.rt(2, '+')
		})
		w.arm()
	}
}
function aiTrack() {
	b.minusMyXY = function (x, y) {
		return V(x - this.X(), y - this.Y())
	}
	v.bDif = v.bodDif = v.bodXYDif = function (bod) {
		return V(this.x - bod.X(), this.y - bod.Y())
	}
	b.vDif = function (v, y) {
		var vec = O(v) ? v : V(v, y)
		return V(vec.x - this.X(), vec.y - this.Y())
	}
	b.getGoAt = function () {
	}
	b.goAt = b.tow = b.towards = function (x, y, sp) {
		var lV = V(x - this.X(), y - this.Y())
		sp = N(sp, 5)
		lV.div(11 - (  sp > 10 ? 10 : sp ) * 20)
		this.lV(lV)
		return this
		//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
		//more realistic to accelerate, via forces?
		//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	}
	b.getRtAt = function (bod) {
		var rt = -M.tD(M.atan(bod.X() - this.X() / bod.Y() - this.Y()))
		if (bod.Y() > this.Y()) {
			rt += 180
		}
		return rt
	}
	b.rtAt = b.rotateTowards = b.rTow = function (bod) {
		this.rt(this.getRtAt(bod))
		return this
	}
	TOW = TOWARD = function () {
		W({g: 0}).C('z')
	}
	BIG = BIGSHIP = function () {
		W([1000, 800, 4000, 2000], {g: 0})
		r = w.y({c: 'r', sc: 20}).XY(300, 300)
		w.D(500, 300, 'r', 100)
		y = w.y('y', 100, 200, 6, '-').track()
		r.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			y.goAt(r.X(), r.Y(), 9).rtAt(r)
		})
	}
	TRAP = function () {
		W(0).C('r')
		y = w.y()
		bg = w.y('b', 500, 300, '-')
		bg.shtEv(2000)
		bg.stat()
		T.t(function () {
			bg.rtAt(y)
		})
	}
}
b.shtEv = function (ms, k) {
	ms = N(ms / 1000, 0.4)
	var b = this //= b.shootOnInt
	_.ev(ms, function () {
		if (b.IsActive()) {
			b.sht(k)
		}
	})
	return b
}
b.shoot = b.sht = function (k) {
	var g = G(arguments)
	var bulXY = this.wP(0, -200) //action: shoots FROM just above b
	var bul = w.bul(bulXY)
	var bulLV = this.vec().m(100)//action: set speed
	bul.lV(bulLV).d(.5).lD(0).fR()
	if (k) {
		bul.K(k)
	}
	return bul
}
b.makeShooter = b.shootOnSpacebar = b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.shoot(k)
	})
	return b
}
b.pushEv = function (forc, ev) {
	var b = this
	forc = N(forc, this.vec().m(40))
	_.ev(N(ev, .5), function () {
		b.push(forc)
	})
	return this
}
b.push = function (forc) {
	$l('push')
	var g = G(arguments)
	return g.p ? this.pushEv() :
			this.I(this.vec().m(N(forc, 1) * 40))
}
b.isMoving = b.going = function () {
	$l('going')
	lv = this.lV()
	return M.abs(lv.x) > 0.5 ||
			M.abs(lv.y) > 0.5 ||
			M.abs(this.aV()) > 0.5
}
SHIP = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(2000, 'deathBall')
	})
}
function tCont() {
	TCOYIP = function () {
		W().Y()
		co = w.tCo()
		_.t(3, function () {
			co.B(w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0))
		})
	}
}
GROUPTCO = COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
w.altBul = w.blackSquareBul = function () {
	return this.D(400, 300, 'z', 10, 10)
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
w._ship = function (x, y, z, col) {
	z = N(z, 8)
	col = col || 'b'
	var bird = w.D(x, y).makeBul()
	var pol = [[-z, z], [0, -z * 4], [z, z]]
	bird.pol(col, pol)
	return bird
}
G.ship = function (g) {
	var o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	return o
}
w.y = w.ship = function () {
	var w = this, g = G(arguments), o = G.ship(g)
	var y = w._ship(o.x, o.y, o.sc * 4, o.c)
			.aD(0).r(.8).K('ship yip y')
	if (!g.n) {
		y.cn('thrust')
	} else if (g.p) {
		y.tr()
	}
	y.shtSp()
	return y
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
COLLIDE = BULLETS = BUL = function () {
	W({g: 0}).C('z')
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.cl('bul', 'bad', function (b) {
		this.B() && this.B().kill()
		b.B() && b.B().kill()
	})
}
YIPPY = function () {
	_.ev(1, function () {
		W({g: 4})
		y = w.y(300, 400, 3, '-').rt(90)
		y1 = w.y(600, 400, 3, '-').rt(90)
		_.ev(1.5, function () {
			y.I(0, -.7).rt(4, '+')
			y1.I(4, 0).lV(0, -3).rt(4, '+')
		})
	})
	//ok this is crazy cool.. but something is wrong.
	// something is not getting reset,
	// because force gets bigger each time
}
BLUE = function () {
	W({g: 0})
	y = w.y('b', 200, 300, 6).aD(1).lD(1).re(0).fr(1).K('guy')
	_.t(5,
			function () {
				w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
						.push('+')
						.shtEv('badBul')
			})
	w.cl('badBul', function (f) {
		this.B().kill()
		f.B().kill()
	})
}
$L('boxBul', 'controls', 'spazBul', 'worVec', 'aiTrack')
function controls() {
	b.controls = b.cn = function (cn, o) {
		var b = this, w = b.W()
		//stop a current 'controls', if any
		if (F(b._cn)) {
			w.s.off('tick', b._cn)
		}
		if (U(cn)) {
			return
		}
		if (S(cn)) {
			cn = b2d.cn[cn]
		}
		if (F(cn)) {
			b._cn = w.s.t(
					function () {
						cn(b, o)
					}
			)
		}
		return b
	}
	b2d.cn.thr = b2d.cn.thrust = b2d.cn.t = function (p, mult) {
		var vec
		mult = N(mult, 200)
		if ($.K.u) {
			vec = p.vec().m(mult)
			p.I(vec)
		}
		p.aV($.K.r ? 15 : $.K.l ? -15 : 0)
		//  $l('vec: '+ parseInt(vec.x) + ', '+ parseInt(vec.y))
	}
}
function boxBul() {
	b.setBul = function (sB) {
		this.SetBullet(sB ? true : false);
		return this
	}
	b.makeBul = function () {
		return this.setBul(1)
	}
	w._bul = function (x, y, r, c) {
		return this.D(x, y, c || 'w', N(r, 8)).K('bul bu')
				.makeBul().fr(0).d(.1).bo(.5).lD(0).aD(0)
	}
}
function spazBul() {
	G.cir = function (g) {
		return g.O ? g.f : g.O_ ? {x: g.f.x, y: g.f.y, r: g.s} :
				N(g.s) ? {x: g.f, y: g.s, r: g.t} :
				{r: g.f}
	}
	w.bul = w.bu = function () {
		var w = this, g = G(arguments), o = G.cir(g)
		var bul = w._bul(o.x, o.y)
		if (g.d) {
			bul.cl(function () {
				this.B().kill()
			})
		}
		if (g.m) {
			bul.cl(function (f) {
				f.B().kill()
			})
		}
		return bul
		//instructions: can pass   {x,y,r} ||  {x,y},rad  ||  x,y,rad 
	}
}
function worVec() {
	b.gWV = function (vec, y) {
		vec = O(vec) ? vec : V(vec, y)
		return this.GetWorldVector(vec)
	}
	G.vec = function (g) {
		var o = g.O ? g.f : g.s ? {x: g.f, y: g.s} : //this not error
		{y: g.f}
		o.x = N0(o.x)
		o.y = N(o.y, -1)
		return o
	}
	b.vec = b.v = function () {
// the current direction of that vector in world coordinates
		var g = G(arguments)
		var vec = G.vec(g)
		return this.gWV(vec)
	}
	v.tD = function () {
		var v = this
		return V(M.tD(v.x), M.tD(v.y))
	}
	w.arm = function () {
		w.S(300, 300, 20, 200);
		var arm = w.S(300, 300, [['b', 200, 50, 100, 0]]);
		_.ev(.1, function () {
			arm.rt(1, '+')
		})
		return arm
	}
	STUM = BVEC = function () {
		W({g: 3})
		y = w.y(300, 400, 3, '-')
		_.ev(.1, function () {
			var vec = y.vec(0, 1.5).tD()
			y.I(0, vec.y / 5)
			y.rt(2, '+')
		})
		w.arm()
	}
}
function aiTrack() {
	b.minusMyXY = function (x, y) {
		return V(x - this.X(), y - this.Y())
	}
	v.bDif = v.bodDif = v.bodXYDif = function (bod) {
		return V(this.x - bod.X(), this.y - bod.Y())
	}
	b.vDif = function (v, y) {
		var vec = O(v) ? v : V(v, y)
		return V(vec.x - this.X(), vec.y - this.Y())
	}
	b.getGoAt = function () {
	}
	b.goAt = b.tow = b.towards = function (x, y, sp) {
		var lV = V(x - this.X(), y - this.Y())
		sp = N(sp, 5)
		lV.div(11 - (  sp > 10 ? 10 : sp ) * 20)
		this.lV(lV)
		return this
		//if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
		//more realistic to accelerate, via forces?
		//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	}
	b.getRtAt = function (bod) {
		var rt = -M.tD(M.atan(bod.X() - this.X() / bod.Y() - this.Y()))
		if (bod.Y() > this.Y()) {
			rt += 180
		}
		return rt
	}
	b.rtAt = b.rotateTowards = b.rTow = function (bod) {
		this.rt(this.getRtAt(bod))
		return this
	}
	TOW = TOWARD = function () {
		W({g: 0}).C('z')
	}
	BIG = BIGSHIP = function () {
		W([1000, 800, 4000, 2000], {g: 0})
		r = w.y({c: 'r', sc: 20}).XY(300, 300)
		w.D(500, 300, 'r', 100)
		y = w.y('y', 100, 200, 6, '-').track()
		r.aD(1).lD(1).r(0).fr(1).K('guy')
		T.t(function () {
			y.goAt(r.X(), r.Y(), 9).rtAt(r)
		})
	}
	TRAP = function () {
		W(0).C('r')
		y = w.y()
		bg = w.y('b', 500, 300, '-')
		bg.shtEv(2000)
		bg.stat()
		T.t(function () {
			bg.rtAt(y)
		})
	}
}
b.shtEv = function (ms, k) {
	ms = N(ms / 1000, 0.4)
	var b = this //= b.shootOnInt
	_.ev(ms, function () {
		if (b.IsActive()) {
			b.sht(k)
		}
	})
	return b
}
b.shoot = b.sht = function (k) {
	var g = G(arguments)
	var bulXY = this.wP(0, -200) //action: shoots FROM just above b
	var bul = w.bul(bulXY)
	var bulLV = this.vec().m(100)//action: set speed
	bul.lV(bulLV).d(.5).lD(0).fR()
	if (k) {
		bul.K(k)
	}
	return bul
}
b.makeShooter = b.shootOnSpacebar = b.shtSp = function (k) {
	var b = this
	$.space(function () {
		b.shoot(k)
	})
	return b
}
b.pushEv = function (forc, ev) {
	var b = this
	forc = N(forc, this.vec().m(40))
	_.ev(N(ev, .5), function () {
		b.push(forc)
	})
	return this
}
b.push = function (forc) {
	$l('push')
	var g = G(arguments)
	return g.p ? this.pushEv() :
			this.I(this.vec().m(N(forc, 1) * 40))
}
b.isMoving = b.going = function () {
	$l('going')
	lv = this.lV()
	return M.abs(lv.x) > 0.5 ||
			M.abs(lv.y) > 0.5 ||
			M.abs(this.aV()) > 0.5
}
SHIP = function () {
	W(10).Y()
	_.t(20, function () {
		w.S(R(500), R(500), $r(), 20)
	})
}
WAR = function () {
	W({g: 0})
	var n = 0, x = 150, Y = 150
	w.cl('bul', 'bad', function (bad) {
		this.B().kill();
		bad.B().kill()
	})
	_.t(15, function () {
		w.y($r(), x += 4, Y += 2, 3, '-')
				.K('bad').rt(R(90))
				.push(20, '+')
				.shtEv(2000, 'deathBall')
	})
}
function tCont() {
	TCOYIP = function () {
		W().Y()
		co = w.tCo()
		_.t(3, function () {
			co.B(w.y('z', R(500, 50), R(300, 50), '-').lV(10, 20).lD(0))
		})
	}
}
GROUPTCO = COLSHIP = function () {
	W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')
	y = w.y()
	co = w.tCo()
	co.B(
			r = w.D(100, 100, 'r', 100).lV(10, 20).grp(-1).lD(.2),
			b = w.D(500, 500, 'b', 90).lV(-10, -20).grp(-1).lD(.2),
			y = w.D(300, 300, 'y', 70).lV(-10, -20).grp(-1).lD(.2)
	)
	o = w.D(300, 300, 'o', 70).lV(-10, -20).grp(-1).lD(.2)
	_.t(30, function () {
		var b = w.D(400, R(300, 100), 'o', 20)
		b.lV(10, 20).lD(0)
		b.lV(10, 20)
		b.f().grp(-1)
		co.B(b)
	})
	y.grp('-1')
	w.r_.cl(function (f) {
		f.C('b');
		co.xB(f)
	})
	l = w.m_controllerList.GetBodyList()
}
w.altBul = w.blackSquareBul = function () {
	return this.D(400, 300, 'z', 10, 10)
}
STAB = function () {
	W({g: 0})
	w.S(200, 200, 'b', 50, 260)
	w.S(140, 200, 'd', 140, 50)
	co = w.tCo();
	_.t(10, function () {
		co.B(
				w.D(R(1000, 100), 300, 'x', 30).lV(10, 20).lD(0))
	})
	hits = 0
	y = w.y().K('ship').lD(5)
	bg = w.y('b', 500, 300, '-').d(3).lD(2).K('bg').aD(.2)
	bg.rotTowards = function (y) {
		var b = this, a
		a = -M.tD(M.atan((y.X() - b.X()) / (y.Y() - b.Y())))
		if (y.Y() > b.Y()) {
			a += 180
		}
		b.rt(R(40, a - 20))
	}
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	bg.push(50, '+')
	T.t(function () {
		_.t(20, function () {
			bg.I()
		})
	})
	w.b(function (cx) {
		var i
		if (cx.w('ship', 'bg')) {
			i = cx.m().m_points[0].m()
			_.in(.1,
					(
					M.lD(V(i.x, i.y), V(y.X(), y.Y())) >
					M.lD(V(i.x, i.y), V(bg.X(), bg.Y()))
					) ?
							function () {
								hits++;
								w.C('g');
								bg.XY(300, 300);
								y.XY(700, 400)
							}
							:
							function () {
								w.C('p');
								bg.XY(700, 400);
								y.XY(100)
							})
		}
	})
	//w.show(function(){return 'hits: '+ hits})
}
w._ship = function (x, y, z, col) {
	z = N(z, 8)
	col = col || 'b'
	var bird = w.D(x, y).makeBul()
	var pol = [[-z, z], [0, -z * 4], [z, z]]
	bird.pol(col, pol)
	return bird
}
G.ship = function (g) {
	var o = g.O ? g.f :  //pass opOb
		//pass {c='y'}, x=100, y=100, sc=4
			g.S_ ? {c: g.f, x: g.s, y: g.t, sc: g[3]} :
			{x: g.f, y: g.s, sc: g.t}
	o.c = o.c || 'y';
	o.sc = N(o.sc, 4);
	o.x = N(o.x, 100);
	o.y = N(o.y, 100)
	return o
}
w.y = w.ship = function () {
	var w = this, g = G(arguments), o = G.ship(g)
	var y = w._ship(o.x, o.y, o.sc * 4, o.c)
			.aD(0).r(.8).K('ship yip y')
	if (!g.n) {
		y.cn('thrust')
	} else if (g.p) {
		y.tr()
	}
	y.shtSp()
	return y
}
w.Y = function () {
	var w = this, g = G(arguments)
	y = $a(w, 'y', g)
	if (g.p) {
		y.track()
	}
	return w
}
COLLIDE = BULLETS = BUL = function () {
	W({g: 0}).C('z')
	w.D(200, 200, 'b', 80).d(1).K('bad')
	w.D(200, 200, 'r', 150, 150).d(1).K('bad')
	_.t(5, function () {
		w.y('b', R(500, 50), R(500, 50))
	})
	w.b(function (cx) {
		cx.w('ship', 'bul', function (bul, cx) {
			this.kill()
		})
	})
	w.cl('bul', 'bad', function (b) {
		this.B() && this.B().kill()
		b.B() && b.B().kill()
	})
}
YIPPY = function () {
	_.ev(1, function () {
		W({g: 4})
		y = w.y(300, 400, 3, '-').rt(90)
		y1 = w.y(600, 400, 3, '-').rt(90)
		_.ev(1.5, function () {
			y.I(0, -.7).rt(4, '+')
			y1.I(4, 0).lV(0, -3).rt(4, '+')
		})
	})
	//ok this is crazy cool.. but something is wrong.
	// something is not getting reset,
	// because force gets bigger each time
}
BLUE = function () {
	W({g: 0})
	y = w.y('b', 200, 300, 6).aD(1).lD(1).r(0).fr(1).K('guy')
	_.t(5, function () {
		w.y(R(600, 50), 300, 3, '-').K('bad').rt(45)
				.push('+')
				.shtEv('badBul')
	})
	w.cl('badBul', function (f) {
		this.B().kill()
		//if(f.of('bad')){
		f.B().kill()
		//}
	})
}
FLOCK = function () {
	W({g: 0})//.P()
	w.D(300, 100, 'r', 50)
	w.D(500, 100, 'y', 50)
	w.D(700, 100, 'b', 50)
	w.D(900, 100, 'g', 50)
	var n = 0
	_.t(8, function () {
		w.y('o'//,'-'
		)//.push('+')
	})
	//y=w.y('b',100,100,5)
	_.evx(.5, function () {
		if (y.going()) {
			// w.C('p')
		}
		else {
			// w.C('z')
		}
	})
}
FLOCKING = FLK = function () {
	
	//these just thrust and dont
	//otherwise apply forces to neighbors.  but what if
	//they 'SUCKED' instead of 'thrusted' ?
	//is that the same as having a gravitational inwards force?
	var w = b2d.W({g: 0})
	//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	var n = 0
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	y = w.yShip('o').thrustControl()
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	I(function () {
		if (y.going()) {
			w.s.c.C('p')
		} else {
			w.s.c.C('z')
		}
	}, 100)
	w.debug()
}
TRAB = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat()
	bg.rotToVec = function (vec) {
		var wVec = bg.worldVec(vec),
				rot = vec.x / vec.y
		rot = 360 - (Math.abs(rot) * 10)
		$l(rot)
		this.rot(rot)
		return this
	}
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = bgX - yX,
				dY = bgY = yY,
				vec = V(dX, dY)
		this.rotToVec(vec)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
GRAVITYRANGE = GRR = function () {
	w = b2d.W({g: 10})
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	range = w.prism(
			w.brick(600, 300, 220, 20),
			w.box(600, 300, 20, 250).linDamp(10)
	).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	y = w.yShip().thrustControl().angDamp(1).shootOnSpace()
	cjs.tick(function () {
		w.grav(range.val())
		y.linDamp(10)
	})
}
STABTRAP = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat().shootOnInt(200)
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = yX - bgX, dY = yY - bgY,
				ang = -Math.toDegrees(Math.atan(dX / dY))
		if (y.Y() > this.Y()) {
			ang += 180
		}
		this.rot(ang)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
b.polyBul = function () {
	alert('polyBul')
	var vec = this.GetWorldVector(V(0, -100)), point = this.worldPoint(0, -50)
	bullet = this.W().polyBul(point.x, point.y, 4, 4, 'w').K('polyBul')
			.den(1).linDamp(0).linVel(vec.x / 5, vec.y / 5)
	w.end(function (cx) {
		cx.destroyIf('polyBul')
	})
	return bullet
}
w.yShipEquilateral = function (color, x, y, scale) {
	alert('w.yShipEquilateral')
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
		return this.wVec()
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.wVec()
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
		var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
		return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.wVec().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').K(kind)
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
b.shootX = function () {
	var vec, bullet
	bullet = this.GetWorld().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
	vec = this.GetWorldVector(b2.V(0, -100))
	bullet.impulse(vec.x / 20, vec.y / 20)
}
w.C = function (color) {
	var w = this
	$(w.st.canvas).C(color)
	return w
}
b.thrustify = function () {
	var b = this.aD(.5)
	//takes a spritebox!
	//uses cjs.watchKeys()
	K({
		l: function () {
			b.rt(8, '-')
		},
		r: function () {
			b.rt(8, '+')
		},
		d: function () {
			b.push(.2).p('thrust')
		},
		u: function () {
			b.p('shoot')
		}
	})
	return b
}
SHIPSPRITE = SSP = function () {
	W({g: 1})
	//w.chalk('spritebox example')
	sp = w.spriteBox({
		"framerate": 24,
		"images": ["thrusty.png"],
		"frames": [
			[0, 0, 512, 512, 0, -53, -36],
			[512, 0, 512, 512, 0, -53, -36],
			[1024, 0, 512, 512, 0, -53, -36],
			[0, 512, 512, 512, 0, -53, -36],
			[512, 512, 512, 512, 0, -53, -36],
			[1024, 512, 512, 512, 0, -53, -36],
			[0, 1024, 512, 512, 0, -53, -36],
			[512, 1024, 512, 512, 0, -53, -36],
			[1024, 1024, 512, 512, 0, -53, -36],
			[0, 1536, 512, 512, 0, -53, -36],
			[512, 1536, 512, 512, 0, -53, -36]],
		"animations": {
			"die": {"speed": 1, "frames": [8, 9, 10], next: false},
			"shoot": {"speed": 1, "frames": [1, 2, 3, 4, 0], next: false},
			"thrust": {"speed": 1, "frames": [5, 6, 7, 0], next: false}
		}
	})
	sp.thrustify()
	sp.con('thrust')
}
//w.circ(200,130, 6).stat()
//w.circ(100,200, 6).stat()
//iceGround(  800   )
// grassGround(  300   )
/// 0:1,  300:1.1, 600:1.2
//  cjs.Tween.get(w.s).to({scaleX:1.3,scaleY:1.3}, 2000).to({scaleX:.7,scaleY:.7}, 6000).to({scaleX:1,scaleY:1}, 3000)
//cjs.Tween.removeAllTweens()
// w.st.tween(  [{x: p.dif().x},  000]   )
// w.st.tween(  [{y: p.dif().y},  1000]   )
//  cjs.Tween.get(w.s, {override:true}).to({y: p.dif().y}, 5000)
// cjs.Tween.get(w.s , {override:true}  ).to({  y: p.dif().y * w.st.scaleY }, 2000)
w.dance = function () {
	var w = this
	w.e(function (b) {
		if (b.iD()) {
			b.thr()
		}
	})//w.eD
	return w
}
M.lnD = M.lD = M.lineDistance
b.rotTowards = function (y) {
	var b = this
	var yX = y.X()
	var yY = y.Y()
	var bgX = b.X()
	var bgY = b.Y()
	var dX = yX - bgX, dY = yY - bgY
	var ang = -M.tD(M.atan(dX / dY))
	if (y.Y() > b.Y()) {
		ang += 180
	}
	b.rt(M.r() * 40 + ang - 20)
	return b
}
STAB = function () {
	W0().db();
	hits = 0
	co = w.tensor();
	_.t(10, function () {
		co.body(w.BALL(400, 300, 15, 'w').lV(10, 20).lD(0))
	})
	w.BRICK(200, 200, 50, 260).stat();
	w.BRICK(140, 200, 140, 50).stat()
	w.BRICK(640, 200, 200, 50, 'o')
	w.BALL(500, 200, 80, 'm')
	y = w.ship().K('ship').lD(5)
	bg = w.yShip('b', 500, 300).de(3).lD(2).K('bg').aD(.2)
	_.ev(.5, function () {
		bg.aV(0);
		bg.rotTowards(y)
	})
	$t(function () {
		bg.push(4)
	})
	w.beg(oB)
	w.show(function () {
		return 'hits: ' + hits
	})
}
V.lnD = function (x, y, x1, y1) {
	return M.lD(V(x, y), V(x1, y1))
}
b.lnD = function (x, y) {
	var b = this
	return V.lnD(x, y, b.X(), b.Y())
}
function oB(cx) {
	if (cx.w('ship', 'bg')) {
		var mf = cx.wM()
		var pt = mf.m_points[0]
		var iX = pt.x * 30
		var iY = pt.y * 30
		var isOk = y.lnD(iX, iY) > bg.lnD(iX, iY)
		if (isOk) {
			dstGtr()
		} else {
			elseFn()
		}
	}
}
function dstGtr() {
	_.in(.1, function () {
		hits++
		w.C('g')
		bg.XY(300, 300)
		y.XY(700, 400)
	})
}
function elseFn() {
	_.in(.1, function () {
		w.C('p')
		bg.XY(700, 400)
		y.XY(100)
	})
}