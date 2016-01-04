w.fDFn = function (x, y) {
	var w = this
	var b = w.D(x, y)
	b.f(
			$fD($cH(4))
	)
	return function () {
		b.fD(
				$pH().box(arguments))
	}
}
b.A = function (fD) {
	this.cF(fD);
	return this
}
fD.sAB = function (a, b, p, A) {
	var fD = this;
	alert('fD.sAB')
	var h = fD.H()
	if (!p) {
		h.SAB(a / 30, b / 30)
	}
	else {
		h.SAOB(a / 30, b / 30, p, A)
	}
	return fD
}// used?
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h;
	return fD
}
fD.SAB = function (x, y) {
	this.SetAsBox(x, y)
	return this
}
fD.SAOB = function (x, y, pos, ang) {
	this.SetAsOrientedBox(x, y, pos, ang)
	return this
}
f.H = function (h) {
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h //not sure if this works
	return this
}
pH.sABold = function (wd, ht, xy, ang, ang2) {
	pH.box1 = function () { // tx uses!
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
/*

 SetAsOrientedBox(
 hx:Number,  hy:Number, (width and height of the box)
 center:b2Vec2 = null, (center of box)
 angle:Number = 0.0 (rot in rads)
 )

 Applying this concept, the idol function continues in the following way:
 var bW:Number=5/worldScale;
 var bH:Number=20/worldScale;
 var boxPos:b2Vec2=new b2Vec2(0,10/worldScale);
 var boxAngle:Number=- Math.PI/4;


 */
f.vs = f.verts = function () {
	alert('f.vs verts boxFixt.js')
	var h = this.GetShape()
	var verts = h.m_vertices
	return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
}
f.rad = function (r) {
	var f = this, h = f.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return f
}
SHS = function () {
	W().p()
	w.S(100, 100, [[10]])
	b = w.S(300, 400)
	//rectangle fixutre -- no color
	b.rect(40, 40)
	//circle fixture -- no color
	b.f($cF(100, 100, 100))
	b = $eM.fixts().stat()
	_.in(1, function () {
		b.dyn()
	})
	/*
	 $l('circle is 0, poly is 1.. ill prove it..')
	 fs = b.fs()
	
	 _.ev(3, function () {
	
	 if (f = fs.pop()) {$l('shape type: ' + f.H().m_type)
	 f.rm()
	
	 }})
	 */
	_.in(3, function () {
		b1 = w.A($dB(300, 200))
		b1.f($cF(100).de(1).re(1))
		b1.aV(3)
		//b.cirB(40)
	})
}
FXT = MAS = function () {
	W()
	w.D(800, 400, [
		$cF(20),
		$cF(5).bits(1, 2), //cat is 1, but will only collide with 2's
		$cF(10, 100, 100, '-'),
		$cF(10, 100, -100),
		$pF(10, 300, '-'), //sets as sensor
		$pF(300, 10)
	])
	r = w.BALL(200, 200, 50, 'r').rsM()
	b = w.BALL(200, 200, 50, 'b')
	b.f().de(1)
	y = w.BALL(200, 200, 50, 'y')
	y.f().de(1)
	y.rsM()
	p = w.BALL(200, 200, 50, 'p')
	p.f().de(10000)
	p.rsM()
	function grows() {
		rad = 10
		x = 400
		y = 440
		v = {x: 0, y: 0}
		//mouse joints messed up
		w.bump(400, 300, 40)
		w.bump(290, 350, 40)
		w.bump(280, 220, 40)
		addBody()
		$t(function () {//destroyAndAddBody
			b.destroyFixture(
					b.f()
			)//b.destroyFixture(fixture)
			rad += .1
			x = b.X();
			y = b.Y();
			v = b.lV()
			addBody()
		})
		function addBody() {
			b = w.A($dB(x, y).lV(v), $cF(rad))
		}
	}
	
	_.in(2, grows)
}
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	var tf = f.B().tf()
	var pt = N(pt) ? V(pt, y) : pt
	return f.H().TP(tf, pt)
}
fD.sAOB = fD.orBox = function (a, b, pos, aa) {
	var fD = this, h = fD.shape
	h.SAOB(a / 30, b / 30, pos, aa)
	return fD
}
fD.box = fD.sAB = function (a, b, p, aa) {
	var fD = this, h = fD.shape
	p ? h.SAOB(a / 30, b / 30, p, aa) :
			h.SAB(a / 30, b / 30)
	return fD
}
pH.box_ = function () {
	var pH = this, g = G(arguments)
	var args = (g.A || _.isArguments(g.f)) ? g.f : g
	return pH.box.apply(pH, args)
}
function maze(){
	MAZE = BXD = function () {
		$box()
		w.grid(maze, 100, 200, 20, 30)
		w.bump(400, 200, 10)
		b = w.D(200, 100)
		b.f($fD($cH(100, 200)))
		b.f($fD($pH(100, 200)))
	}
	FPAR = DICK = BED = function () {
		y = W().ship()
		w.A($dB(300, 300), guyInBed) // have to fix w.dyn
		w.D(100, 100, b2d.fxPar(guyInBed))
		w.D(400, 300, b2d.fxPar(dick)
		)
		w.D(400, 300, dick)
	}
}
VORTEX = function () {
	w = b2d.W()
	y = w.ship()
	w.rectStat(200, 250, 400, 20)
	w.rectStat(400, 250, 20, 40)
	_.times(20, function () {
		w.ball(100, 100, 10)
	})
	vort = w.stat(600, 200, b2d.circ(200).sensor(true)).K('vortex')
	func = function () {
		w.each('ball', function (b) {
			b.towards(600, 200)
		})
	}
	//w.while('vortex', 'ship', func)
	y.while('vortex', func)
}
KINGOFMES = function () {
	w = b2d.W({g: 10}).debug()
	//all jumping together???!
	w.roof.kill()
	w.left.kill()
	w.right.kill()
	w.s.sXY(.8).X(100)
	_.times(15, function () {
		w.addMe(900, 100, 5).trig('feet', function () {
					var p = this
					p.B().rot(0).lV(-2, -10)
				}
		).angDamp(50)//.fixRot()
		w.addMe(300, 100, 5).trig('feet', function () {
			this.B().rot(0).lV(2, -10)
		}).angDamp(50)//.fixRot()
	})
	w.C('r')
}
HAT = function () {   // could i automatically have body listen to their sensors?
	w = b2d.W()
	w.ball().rest(.3)
	p = w.addMe(400, 150, 5)
	p.trig('right')
	p.trig('left')
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
	p.trig('hat',
			function () {
				p.bindSprite('guy')
			})
}
DIF = function () {
	w = b2d.W()
	b = w.S(140, 140, 100, 100).rot(20).DIFF(
			w.S(100, 100, 100, 100).rot(45), '-')
	b3 = w.S(300, 400, 'w', 100, 100)
	b3.sub(//does not keep color!
			w.B(300, 400, 'r', [-100, 10], [-80, -40], [0, -200], [100, 0])
	)
	w.S(450, 300, 'w', 100, 100).minusPolyCirc(550, 300, 100, 20)
	fs = w.S(600, 380, [['r', [-100, 10], [-80, -40], [0, -200], [100, 0]], ['b', 40, 70, 20, -20], ['o', 40, 70, -20, 20]
	]).rot(-20).fixts()
	w.S(720, 400).sep(
			w.S(600, 400).fixt(b2d.poly(100, 100)).minus(fs[0], fs[1], fs[2]))
	b2 = w.S(830, 300)
	b2.poly(100, 100)
	b2.poly(100, 100, 0, 0, 45)
	b2.DIF(w.S(930, 400, 200, 200), '-')
	///
	///
	setTimeout(function () {
		b.dyn();
		b2.dyn()
	}, 3000)
}
CIRCTOPOLY = function () {
	w = b2d.W()
	b = w.S(300, 300, 50)
	w.B(600, 400).poly(b2d.polyCirc(b.fixt().rad(), 10))
}
//destructable terrain
DEST = function () {
	w = b2d.W({g: 1})
	y = w.ship().linDamp(10)
	b = w.brick(800, 300, 200, 800).K('terr')
	can = true
	w.s.X(5000)
	w.beg(function (cx) {
		var fixt
		if (fixt = cx.with('bul', 'terr')) {
			bull = fixt[0].B()
			terr = fixt[1].B()
			bX = bull.X()
			bY = bull.Y()
			bull.kill()
			if (can) {
				can = false
				setTimeout(function () {// br =  w.brick(bX,bY,60,60).rot(45)
					br = b2d.conc(
							b2d.polyCirc(20, 7)
					).XY(bX, bY)
					b.each(function (f) {
						f.DIFF(br)
					})
					br.kill()
					can = true
				}, 10)
				killIfSmall = function (f) {
					var area = this.area()
					if (area < 20) {
						$l('too small: ' + area)
						f.kill()
					}
				}
			}
		}
	})
	w.show(function () {
		return b.num()
	})
}
DESTROYJOINT = function () {
	w = b2d.W()
	//w.startKilling();
	w.floor.rest(0)
	y = w.ship().XY(400, 170).rot(265).stat()
	w.beg(function (cx) {
		cx.with('bul', function (f) {
			var b = f.B()
			this.B().kill()
			if (b != y) {
				b.kill()
			}
		})
	})
	base = w.S(255, 50, 'r', 60, 15)
	body = link(255, 60)
	base.rev(body)
	/*
	
	 prev= body
	
	 w.rev(prev, body= link(255,90)  ); prev=body
	 w.rev(prev, body= link(255,120)  ); prev=body
	
	 bef =  body = link( 255, 150,'b' )
	
	 w.rev(prev, body); prev=body
	
	
	 red = body = link( 255, 180,'r' )
	
	 j1= w.rev(prev, body); prev=body
	
	 aft = body = link( 255, 210 ,'a')
	
	 j2= w.rev(prev, body); prev=body
	
	
	
	 je = aft.GetJointList()
	
	 w.rev(prev, body=link(255,240)  ); prev=body
	 w.rev(prev, body=link(255,270)  ); prev=body
	 w.rev(prev, body=link(255,300)  ); prev=body
	 w.rev(prev, body=link(255,330)  ); prev=body
	 ball = w.circ(255, 330, 20, 'd').den(1).rest(0); w.rev(prev, ball)
	
	 */
	function link(x, y, col) {
		col = col || 'w'
		return w.B(x, y, col, 10, 15).den(1).fric(0).rest(0)
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