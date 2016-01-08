BXEX2 = $$$MOUSEJOINTWORKSANDNICEWALLSTOO= function () {
	var mX, mY, isMDown, selB
	var mJt
	
	function makeMJt() {
		var b = getBodyAtM()
		if (U(b)) {
			return
		}
		var mJD = new bx.MJD()
		return w.CJ(mJD.bA(w.GGB()).bB(b.wake())
				.cC(1).mF(300 * b.GM())
				.ST(mX, mY))
	}
	
	function getBodyAtM() {
		var selB
		w.QAB(qFn, $AB().LB(mX - .1, mY - .1).UB(mX + .1, mY + .1))
		return selB
		function qFn(f) {
			var hit = (f.bTy() == bx.dB) && f.TP(f.tf(), V(mX, mY))
			if (!hit) {
				return 1
			}
			selB = f.B()
		}
	}
	
	cv = l({
		l: 'c', W: 800, H: 500, a2: 1
	})
	cv._ps = cv.os()
	w = new bx.W(V(0, 10), true)  //allow sleep
	w.SDD($dD().SS(cv.gC()).SDS(30)
			.SFA(0.5).SLT(1).SF(bx.hBit | bx.jBit))
	_.ev(1 / 60, function () {
		handleMJt();
		w.step(1 / 60, 10, 10).DDD().CF()
	})
	$.D(function (e) {
		isMDown = true
		logXY(e)
		$.mm(logXY).tm(logXY)
	}).U(function () {
		$.mm_(logXY).tm_(logXY)
		isMDown = mX = mY = undefined;
	})
	bD = $bD().ty(bx.sB)
	fD = $fD().de(1).fr(.5).re(.2).H($pH().SAB(20, 2))
	// walls 
	w.CB(bD.Set(10, 400 / 30 + 1.8)).CF(fD)
	w.CB(bD.Set(10, -1.8)).CF(fD)
	w.CB(bD.Set(-1.8, 13)).CF(fD.SAB(2, 14))
	w.CB(bD.Set(21.8, 13)).CF(fD)
	//  balls 
	bD.ty(bx.dB)
	_.t(10, function (i) {
		w.CB(bD._X(M.r() * 10)._Y(M.r() * 10))
				.CF(fD.H((M.r() > 0.5) ?
						$pH().SAB(M.r() + 0.1, M.r() + 0.1) :
						$cH(M.r() * 30 + 3)))
	})
	function handleMJt() {
		if (!mJt) {
			if (!isMDown) {
				return
			}
			;
			mJt = makeMJt()
		}
		else if (isMDown) {
			mJt.ST(V(mX, mY))
		} // (  mX, mY ) ok, too
		else {
			w.DJ(mJt);
			mJt = null
		}
	}
	
	function logXY(e) {
		$.pD(e)
		if (e.clientX) {
			clX = e.clientX
			clY = e.clientY
		}
		else if (e.changedTouches && e.changedTouches.length > 0) {
			var touch = e.changedTouches[e.changedTouches.length - 1]
			clX = touch.clientX;
			clY = touch.clientY
		}
		else {
			return
		}
		// bx x,y !!! (not page/web/$ (px) x,y)
		mX = (clX - cv._ps.x) / 30;
		mY = (clY - cv._ps.y) / 30
	}
	
	function videoTut() {
// https://www.youtube.com/watch?v=Ubfqc983jN8
// video note: he only uses one body.. so joint is global ('spring')
// transform of box is just x,y,r (see setTransform)
// explains why b2d teleportation is bad
// remember: 'mouse' in mouse joint is JUST an x and y .. 
// (can use perlin noise random walk.. ?)
// 1:50 starts mouse jt
// tug body with string, like dJt with body and mouse
// mouse 'tugs' body around (as it (is) moves(ed))
// destroy jt and set ref to null
// START 3:10
// mouse is ground body
// 7:42 code
// END 10:17 'aha!'
// -> KIN..also cool
	}
}
$l('bxShapeApps')
BBOD = function () {
	w = $box()
	_BODY_ = b1 = w.dB(220, 60).A($cF(60)) //b1 is body
	_FIXTURE_ = b2 = w.dB(300, 400).CF($cF(300)) //b2 is fixture
	_STATIC_FLOOR_ = w.sB(500, 1000).CF($rF(1200, 100))
}
BCIR = function () {
	$box()
	w.sB(350, 200).CF($fD($cH(80), '-'))
	w.sB(150, 300).fD($cH(30))
	b = w.sB(450, 200)
	b.cF(80)
	//dynamic circle:
	w.dC(700, 300, 100).stat().cF(100, 60, 60)
	_.in(function () {
		b.dyn()
	})
}
BR1 = BOXO = function () {
	$box()
	b = w.CB($sB(450, 500))
	b.CF($cF(10))
	b.CF($rF(10, 500, 0, 0, 50))
	_.in(function () {
		b1 = w.sB(320, 200)
		//small circle ()FOR REFERENCE:
		b1.CF($fD($cH(10)))
		// a few rectangle fixtures!:
		b1.CF($fD($pH().sAOB(400, 200, 50)))//w,h,rt
		b1.CF($rF(400, 150, V(-300, 0), -30))
		b1.rF(300, 50, 300, 100, 30) // w,h,offX,offY,rt
	})
}
BR2 = SAB = function () {
	$box()
	var b = w.D(100, 100)
	b.CF($fD($cH(40)))
	b.fD($pH().box(100, 100, 100, 200, 78))
	b = w.sB(500, 400)
	b.CF($fD($cH(4)))
	b.rF()
	b.rF(40)
	b.rF(200, 20)
	b.rF(200, 20, -10)
	b.rF(100, 400, 100, 0, 20)
}
BR3 = ASBOX = OBOX = function () {
//pH.sAB handles both box and oriented box!
	$box()
	w.dB(300, 100).fD($rH(300, 200, V(500, 200), 20))
	w.dB(500, 100).rF(300, 200, V(500, 200), 20)
	w.dB(300, 100).rF(200, 300)
	w.dR(900, 300, 300, 200)
}
BR4 = SABB = DYNREC = STATREC = function () {
	$box()
	//  dynamic rectangle
	w.dR(500, 0, 100, 50, 0, 200, 45)
	//  static rectangle
	w.sR(500, 0, 120, 150, 0, 200, 45)
	//pH.sAB handles both box and oriented box!
	w.sR(100, 100)
	w.sR(100, 200, 20)// rt
	w.sR(100, 300, 20, 20) //w, h (as box)
	w.sR(100, 370, 20, 20, 20) // w,h,r
	w.sR(100, 420, 20, 20, 20, 20)// w,h,x,y,rt
	w.sR(100, 500, 20, 20, 20, 20, 20)
}
BPOL = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	$box()
	w.cTri = w.tri = function (x, y) {
		return this.sB(x, y), $fD($pH()).SAA([
			V(-1, 0), V(0, -1), V(1, 0)
		], 3)
	}
	w.aTri = function (x, y) {
		this.sB(x, y).CF(
				$fD($pH()._SAA([
					V(-1, 0), V(0, -1), V(1, 0)
				]))
		)
		return this
	}
	w.aTri(120, 180).aTri(160, 210)
	_.ev(.4, function () {
		w.CB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.CF($fD($cH(45)))
		w.dB(210, 0).CF_($cF(15)).lV$()
	})
}
BXEX1 = function () {
	$.c().id('canvas')
	w = new b2World(new b2Vec2(0, 10), true)
	fD = new b2FixtureDef
	fD.density = 1
	fD.friction = 0.5
	fD.restitution = 0.2
	bD = new b2BodyDef
	//create ground
	bD.type = b2Body.b2_staticBody;
	bD.position.x = 9;
	bD.position.y = 13;
	fD.shape = new b2PolygonShape;
	fD.shape.SetAsBox(10, 0.5);
	w.CreateBody(bD).CreateFixture(fD);
	bD.type = b2Body.b2_dynamicBody;
	for (var i = 0; i < 10; ++i) {
		if (M.r() > 0.5) {
			fD.shape = new b2PolygonShape;
			fD.shape.SetAsBox(M.r() + 0.1, M.r() + 0.1)
		} //half width //half height
		else {
			fD.shape = new b2CircleShape(M.r() + 0.1)
		}
		bD.position.x = M.r() * 10;
		bD.position.y = M.r() * 10;
		w.CreateBody(bD).CreateFixture(fD)
	}
	dD = new b2DebugDraw();
	dD.SetSprite(document.getElementById("canvas").getContext("2d"))
	dD.SetDrawScale(30.0);
	dD.SetFillAlpha(0.3);
	dD.SetLineThickness(1.0);
	dD.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	w.SetDebugDraw(dD);
	window.setInterval(update, 1000 / 60);
	function update() {
		w.Step(1 / 60, 10, 10)
		//frame-rate  //velocity iterations  //position iterations
		w.DrawDebugData();
		w.ClearForces();
	}
}
function links() {
	
	//helpers:  /err??     http://js-tut.aardon.de/js-tut/tutorial/position.html
//https://github.com/hecht-software/box2dweb/blob/master/example.html
}
verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
TRI = function () {
	$box()
	//long way
	w.D(400, 400).CF($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	//w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	//w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.CF(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
SAAA = function () {
	$box()
	aH = $aH([-100, 0], [0, -100], [100, -20], [50, 20])
	//fD = $fD(aH)
//	w.D(150, 200).f(fD)
//	w.D(240, 300).f($fD($aH(verts)))
//	w.D(434, 400).f($aF((verts)))
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
BRAD = function () {
	$box()
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
	n = 1
	_.ev(1, function () {
		if (n < 300) {
			var b = w.D(350, 200).aV(2).lV(1, 1)
			R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
					b.fD($cH(n *= 1.3))
			$l('n:' + n)
		}
	})
}
LNV = function () {
	$box().G(0)
	_.t(10, function () {
		w.bal()
	})
	_.ev(3, function () {
		w.eB(function (b) {
			b.lV(V(0, 20))
		})
	})
	/*
	 b = w.box(400, 400, 200, 200).bS('me')
	
	 f = function () {
	 b.I(0, -400, b.GetWorldPoint(b2d.V(100 / 30, -100 / 30)))
	 }
	 f2 = function () {
	 cjs.tick(f)
	 }
	
	
	
	 W().box(400, 400, 200, 200).bS('me')
	 _.in(2,function(){
	 $t(function () {
	 b.lV(V(-1, -1))
	 })
	 })
	 w.p('thrust')
	 */
}
FSEL = function () {
	n = 0
	box(function () {
		//$l('tick-'+ n++)
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	w.mouse = {x: 0, y: 0}
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.click(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.mouse = mouse
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
		if (w.mj) {
			var targ = w.mj.targ()
			$l('mouse joint target: ' + targ.x + ', ' + targ.y)
			w.mj.targ(mouseX, mouseY)
		}
		else {
			$l('no mouse joint')
		}
	})
	w.G(0)
	b = w.circle(420, 400, 150)
	w.circle(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
			mj.frq(120)
			mj.dmpRat(.01)
			mj.mxFo(100000)
			fq = mj.frq()
			$l(fq)
			w.mj = mj
		})
		return false
	})
	cv.dblclick(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f) {
			f.B().kill()
		})
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		mouseX = mouse.x
		mouseY = mouse.y
	})
	cv.mouseup(function () {
		w.DestroyJoint(w.mj)
		w.mj = null
	})
}
FSEL0 = function () {
	box0(function () {
		if (w.mj) {
			$l('yes')
		} else {
			$l('no')
		}
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
	})
	w.circleStat(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	n = 0
	w.qPoint(300, 400, function (f, b, w) {
		$l("hit" + n++)
		//b.kill()
		//	w.mj = w.mJ(b, o.x, o.y)
		//return true
	})
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
BOX = function () {
	$box()
	w.aAF(210, 210, [V(-30, 0), V(0, -30), V(30, 0)])
	w.aAF(120, 180, [V(-30, 0), V(0, -30), V(30, 0)])
	var i = 0
	_.ev(.2, function () {
		w.cCB(210, 0, 45).I(V(i++ % 2 ? 0.5 : -0.5, 0))
	})
}
BOX2D = function () {
	$canW()
	b2d.somePolyFixt = [[[-100, 0], [0, -100], [100, 0], [60, 50]]]
	b2d.compoundShape = [[50, 10], [60, 30, 0, 0, 40], [120, 30, 0, 0, 29], [60, 10, 0, 50, 60], [84, 10, 15, 80, -120]]
	b2d.compoundShape2 = [[50, 10], [20, 20], [20, 10, 0, 0, 10], [40, 10, 50, 0, 45], [84, 10, 15, 80, -120], [60, 10, 0, 50, 60]]
	b2d.compoundStar = [
		[10, 10], [20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	w.D(100, 100, b2d.somePolyFixt)
	w.D(200, 100, b2d.compoundShape)
	w.D(300, 100, b2d.compoundShape2)
	w.D(400, 100, b2d.compoundStar)
	w.S(200, 200, 'w', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [[20, 20, -100, 50, 60], [100, 120, 0, 0, 100], [100, 20], [10, 300]])
	w.D(400, 400, [['b', 30], ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.S(100, 200, 'w', 50, 50)
	w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	w.me(400, 200)
	w.me(400, 300)
	w.me(400, 400)
	//w.addTenBalls() ..not color yet
}
CUPS = function (o) {
	$canW(_.extend({g: 20}, o || {}))//.db()
	cup = [[20, 20], [100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80]]
	cup2 = [[100, 40, 0, 40, 0], ['g', 200, 40, -80, -40, 260], ['g', 200, 40, 80, -40, -80], [100]]
	cup3 = [[100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80], [34, -80, -130], [34, 80, -130]]
	w.B(280, 500, 'r', cup)
	b = w.B(280, 500, 'r', cup)
	w.B(600, 500, 'b', cup2)
	w.B(900, 500, 'y', cup3)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
//W.fluffy()
	w.db()
}
MAZE = function () {
	w = b2d.W()
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
	y = w.ship()
	w.grid(maze, 100, 200, 20, 30)
	w.S(400, 200, 10)
}
PINS = function () {
	w = b2d.W().db()//=SEPARATOR=COLORCONC
	pin = [['o', [-20, 20], [0, -80], [20, 20], [0, -40]], ['w', 8, 0, -75], ['w', 8, -20, 20], ['w', 8, 20, 20]]
	_.times(15, function (i) {
		w.B(100 + (i * 60), 300, pin)
	})
	w.ship()
}
SENSOR = function () {
	w = b2d.W().chalk(
			'box goes up on coll with vortex, and right AFTER',
			'ball goes up with continued pressure')
	y = w.ship()
	b = w.ball(100, 100, 40)
	x = w.box(50, 100, 60, 60)
	w.stat(1000, 200, b2d.circ(500).sensor(true)).K('vortex')
	moveX = function () {
		x.vY(-20)
	}
	moveB = function () {
		b.vY(-20)
	}
	// w.when('vortex', 'ship', moveX)      //this happens every RE-ENTRY into sensor (when)
	y.when('vortex', moveX, function () {
		x.vX(20)
	})      //this happens every RE-ENTRY into sensor (when)
	// w.while('vortex', 'ship', moveB)       //this happens repeadly until sensor exited
	y.while('vortex', moveB)
}
GUYINBED = function () {
	w = b2d.W()
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	w.B(400, 100, 'y', guyInBed)
	w.B(100, 100, 'r', [
		[guyInBed]
	])
	w.B(100, 100, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.B(400, 100, guyInBed)
}
COLSENCLAS = function () {
	w = b2d.W()
	b = w.B(300, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']]) //BEAUTIFUL !!!
	w.beg(function (cx) {
		if (cx.with('arm')) {
			b.I(50, 50)
		}
		if (cx.with('arm', w.right)) {
			w.C('w')
		}
	})
}
FDOT = function () {
	w = b2d.W()
	b1 = w.S(400, 400, 50)
	f1 = b1.fixt()
	f1.dot()
	b2 = w.S(800, 400, 80, 80)
	f2 = b2.fixt()
	f2.dot()
	f2.C('p')
	verts = [[-100, 0], [0, 100], [100, -20]]
	b = w.S(200, 200, [verts]).rot(25)
	f = b.fixt()
	w.S(400, 200, [f.verts()])
	w.S(600, 200, [f.verts('+')])
	v = f.wVerts()
	_.each(v, function (v) {
		w.dot(v)
	})
	//need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
	//its a VertsArr
	b = w.S(100, 500, 50, 50)
	f = b.fixt()
	fh = f.shp()
	h = b2d.polyH(100, 50)
	f.shp(h)
}
TESTPOLYF = function () {
	w = b2d.W();
	$l('testpolyf')
	w.S(700, 200, 'o', [
		b2d.circ(40),
		b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
		b2d.circ(10, 100, 100, '-'),
		['w', b2d.circ(10, 100, -100)],
		b2d.poly(10, 300, '-'), //sets as sensor
		['b', b2d.poly(300, 10)],
		['w', [100, 0], [150, -100], [200, 20]],
		[[200, 0], [250, -100], [300, 20], 'arr'],
		['p', 50, 'pink']])
	b = w.S(300, 400, 'r', [
		b2d.poly(200, 100),
		['g', b2d.circ(40, 100, 100).K('excited')],
		[5, 100, 200, 0, 'orgasmic excited']
	])
	//apparently b.fixt is LIFO
	f = b.fixt().K('happy').dot('b')
	$l('f is f: ' + f.is(f))
	$l('f is happy: ' + f.is('happy'))
	$l('f.next is excited: ' + f.next().is('excited'))
	$l('f is orgasmic: ' + f.is('orgasmic'))
	w.db()
}
MASS = function () {
	w = b2d.W({g: 0}).db()
	y = w.B(400, 200, 'y', 50).den(.1).lV(10)
	r = w.B(200, 500, 'r', 40).den(1)
	b = w.B(200, 500, 'b', 25).den(100)
	p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
}
BODYEACH = function () {
	w = b2d.mW()//works
	b = w.B(100, 100, [[40], [100, 200, 100], [50, 200], [200, 200, 300, 400]])
	b.each(function (f) { //bind to this.. when u have time
		//f.SetSensor(true) //works
		// f.remove()
		// f.K('destroy')
		$l('shape type: ' + f.GetShape().m_type)
	})
}
FIXTS = function () {
	w = b2d.W({g: 0})
	b = w.dyn(300, 300)
	b.CIRC('o', 20)
	b.CIRC('b', 100, 140, 0)
	b.CIRC('r', 20, 100, 100)
	b.RECT('g', 100, 100)
	b.RECT('y', 100, 100, 50, 50)
	b.RECT('p', 100, 100, -150, -150, 45)
	b2 = w.B(800, 300)
	b2.fixt(20).C('r')   //circ
	b2.fixt(20, 100, 100).C('b')  //circ
	b2.fixt(100, 50)   //rect
	b2.fixt(100, 50, -100, -100)   //rect
	b2.fixt(100, 50, -100, 0, 25)   //rect
	b2.fixt([[-100, 0], [0, -100], [100, 40]])   //poly
	b3 = w.B(1000, 300)
	b3.fixt(b2d.fixt(20)) //circ
	b3.fixt(b2d.fixt(20, 100, 100)) //circ
	b3.fixt(b2d.fixt(100, 50)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, -100)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, 0, 25)) //rect
	b3.fixt(b2d.fixt([-100, 0], [0, -100], [100, 40])).C('g') //poly
	w.B(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]])
}
GRAV = function () {
	W({g: 10}).Y()
	balls = function () {
		w.D(100, 100, 'a', 50).d(1)
		w.D(100, 200, 'c', 40).d(1)
		w.D(100, 100, 'd', 50).d(1)
		w.D(100, 200, 'e', 40).d(1)
		w.D(100, 100, 'f', 50).d(1)
		w.D(100, 200, 'h', 40).d(1)
		w.D(100, 100, 'i', 50).d(1)
		w.D(100, 200, 'j', 40).d(1)
		w.D(100, 100, 'k', 50).d(1)
		w.D(100, 200, 'l', 40).d(1)
	};
	balls()
	range = w.pJ(
			w.S(600, 300, 'q', 220, 20),
			w.D(600, 300, 's', 20, 250).lD(10),
			V(1, 0)).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	cjs.t(function () {
		w.G(range.val())
		w.e(function (b) {
			b.I(0, .1)
		})
	})
}
FORCES = function () {
	w = b2d.W({g: 0}).db()
	b = w.B(400, 400, 'o', 200, 200).bindSprite('me')
	cjs.tick(function () {
		b.I(0, -400, b.GetWorldPoint(V(100, -100).div()))
	})
	w.player('thrust')
}
LINVEL = function () {
	w = b2d.W({g: 0}).db()
	_.times(10, function () {
		w.B(300, 300, 'y', 50)
	})
	setInterval(function () {
		w.each(function (b) {
			b.lV(0, 20)
		})
	}, 1000)
}
GRAVITY = function () {
	w = b2d.W({g: 0});
	w.B(100, 100, 10).constF(5000, -200000)
}
IMP = function () {
	w = b2d.W({g: 0})
	w.B(100, 500, 30, 30).rot(2)
	b = w.B(300, 500, 30, 30).rot(1).fixedRot(.2)
	t = {
		i: function () {
			b.I(V(10, -30), b.worldCenter())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			setInterval(function () {
				b.F(V(0, -3), b.worldCenter())
			}, 100)
		}
	}
}
SCALE = function () {
	w = b2d.W() //hurts mouse joint
	var x = 400, y = 440, v = {x: 0, y: 0}
	w.S(400, 300, 40);
	w.S(290, 350, 40);
	w.S(280, 220, 40)
	rad = 10
	b = w.B(x, y, rad).lV(v)
	cjs.tick(function () {
		b.fixt().kill()
		x = b.X();
		y = b.Y();
		v = b.lV();
		rad += .1
		b = w.B(x, y, rad).lV(v)
	})
}
CLONE = function () {
	w = b2d.W()
	w.roof.kill()
	b = w.B(400, 400, [[20], [20, 100, 0], [20, 0, 100], [100, 200]])
	setInterval(function () {
		b.I(0, -1000).clone()
	}, 3000)
	w.ship()
}
BOX1 = function () {
	$box()
	world = w
	var fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(7, 7);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef = new b2FixtureDef;
	fixDef.shape = new b2PolygonShape;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 1.5;
	fixDef.shape.SetAsArray([
				new b2Vec2(-1, 0),
				new b2Vec2(0, -1),
				new b2Vec2(1, 0)], 3
	)
	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.Set(4, 6);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	bodyDef.type = b2Body.b2_dynamicBody;
	var i = 0;
	setInterval(function () {
		fixDef.shape = new b2CircleShape(1.5); //circle shape
		bodyDef.position.Set(7, 0);
		var body = world.CreateBody(bodyDef);
		body.CreateFixture(fixDef);
		body.ApplyImpulse(new b2Vec2(i++ % 2 ? 0.5 : -0.5, 0),
				body.GetWorldCenter()); //Push the shape slightly
	}, 100);
}
BX0 = COUNT = function () {
	$box()
	$l('bod count : ' + w.numBods())
	cF = $cF(50)
	b = w.cB($bD())
	b.cF(cF)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
BOXW1 = function () {
	$box()
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
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
DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	W()
	r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
	r2 = w.BRICK(300, 300, 400, 10, 'o')
	r3 = w.BRICK(300, 300, 400, 10, 'w')
	r4 = w.BRICK(300, 300, 400, 10, 'w')
	r5 = w.BRICK(300, 300, 400, 10, 'b')
	flipDen = function (r) {
		r.de(r.de() == 0 ? 1 : 0)
	}
	flipStage = function () {
		w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
	}
	flipStage()
	_.ev(5, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
}
DENSITY = DSY = function () {//nice it tells me den when i click on bods( /fxs ? )
	W({g: 0, W: 600, H: 500})
	b = w.ball(100, 100, 65).de(1)
	f = b.f()
	h = f.H()
	d = f.mD()
	m = f.mass()
	x = w.box(300, 200, 30, 50).de(1)
	_.in(1, function () {
		x.BOX(200, 30).de(1)
	})
	w.b$(function (fixture) {
		var b = this
		$l('')
		$l('---- MASS ----')
		$l('total mass: ' + b.GetMass().toFixed(3))
		b._m()
		$l('_')
		$l('')
	})
}
IMPR = function () {
	W({g: 0, w: 0}).Y()
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(-1000, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	s = $Sg(0, 0, 1200, 600)
	s1 = $Sg(1200, 0, 0, 600)
	lArr = 'the shape world transform'
	// nl = '2Vec2 — returns the hit fraction.'
	// You can use this to compute the contact point
	// p = (1 - lambda) segment.p1 + lambda segment.p2.
	// sg = ''//segment:b2Segment — returns the normal at the contact point.
	// If there is no intersection, the normal is not set.
	maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	s.TestSegment(lArr, nl, s1, maxLam)
	ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
}
BOX0 = function () {
	w = _$boxWorld()
	$l('bod count : ' + w.numBods())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	b = w.cB($dBD())
	b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
FSEL = function () {
	box(function () {
	})
	w.circleStat(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	n = 0
	w.qPoint(300, 400, function (f, b, w) {
		$l("hit" + n++)
		//b.kill()
		//	w.mj = w.mJ(b, o.x, o.y)
		//return true
	})
}
FSEL = function () {
	n = 0
	box(function () {
		//$l('tick-'+ n++)
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	w.mouse = {x: 0, y: 0}
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.click(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.mouse = mouse
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
		if (w.mj) {
			var targ = w.mj.targ()
			$l('mouse joint target: ' + targ.x + ', ' + targ.y)
			w.mj.targ(mouseX, mouseY)
		}
		else {
			$l('no mouse joint')
		}
	})
	w.G(0)
	b = w.circle(420, 400, 150)
	w.circle(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
			mj.frq(120)
			mj.dmpRat(.01)
			mj.mxFo(100000)
			fq = mj.frq()
			$l(fq)
			w.mj = mj
		})
		return false
	})
	cv.dblclick(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f) {
			f.B().kill()
		})
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		mouseX = mouse.x
		mouseY = mouse.y
	})
	cv.mouseup(function () {
		w.DestroyJoint(w.mj)
		w.mj = null
	})
}
FSEL0 = function () {
	box0(function () {
		if (w.mj) {
			$l('yes')
		} else {
			$l('no')
		}
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
	w = $_W()
	w.SDD($dD().ctx(
					$.c('z', 1800, 1500)[0].getContext('2d'))
	)
	//the_circle = new b2CircleDef()
	n = 0
	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.N(1 / 5)
	})
}
BOXW = function () {
	w = $_W().sDD(
			$dD($.c('z', 1800, 1500)))
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}
SENSORCONTROL = function () {
	W({g: 3})
	w.S(300, 300, 'o', [[40, 40, '-']])
	w.S(540, 300, 'o', [[40, 40, '-']])
	w.S(780, 300, 'o', [[40, 40, '-']])
	y = w.ship(300, 100).linDamp(2)
	aCo = w.acc(1000, -1000)
	w.beg(function () {
		aCo.body(y)
	})
	w.end(function () {
		aCo.remove(y)
	})
	//  The easiest approach to utilize the controllers is to create sensor fixtures
	// that test when a begin/end  event has occurred with a body.
	// In the beginContact method, add the body to the controller.
	// In the endContact method, remove the body.
}
CLASSES = function () {
	w = b2d.W()
	b = w.ball(100, 100, 50)
	b1 = w.ball(100, 200, 40)
}
MESSAGEPASSING = function () {
	w = b2d.W()
	b = ball(100, 100, 50)
	b1 = ball(100, 200, 40)
}
UNION = function () {
	w = b2d.W()
	b = w.brick(300, 300, 50, 50)
	b2 = w.brick(320, 320, 50, 50)
	_.times(20, function () {
		u = b2d.conc(
				Math.poly(b.V()).union(Math.poly(b2.V())).verts()
		).XY(300, 100)
	})
}
TANGRAMSSTAT = function () {
	w = b2d.W()
	b = w.brick(300, 300, 56, 56).rot(45)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).fixedRot(true).stat()
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).fixedRot(true).stat()
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).fixedRot(true).stat()
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).rot(270).fixedRot(true).stat()
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)]).XY(237, 324).rot(225).fixedRot(true).stat()
	p = b2d.conc([
		V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)
	]).XY(240, 267).rot(90)
			.fixedRot(true).stat()
}
TANGRAMS = function () {
	W({g: 0})
	b = w.B(300, 300, 't', 56, 56).rot(45).den(1).damp(1000, 1000)
	t = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(280, 260).rot(90).den(1).damp(1000, 1000)
	t2 = b2d.conc([V(-40, 20), V(0, -20), V(40, 20)]).XY(342, 321).den(1).damp(1000, 1000)
	bt = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(304, 220).rot(180).den(1).damp(1000, 1000)
	bt2 = b2d.conc([V(-80, 40), V(0, -40), V(80, 40)]).XY(346, 262).damp(1000, 1000)
			.rot(270).den(1).damp(1000, 1000)
	mt = b2d.conc([V(-56, 28), V(0, -28), V(56, 28)])
			.XY(237, 324).den(1).damp(1000, 1000)
	p = b2d.conc([
		V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)
	]).XY(240, 267).den(1).damp(1000, 1000)
}
BOOTBALL = function () {
	W({g: 0})
	b = w.B(270, 500, 'o', 40).rest(.5)
	r = w.S(300, 300, 'g', 100, 20).rot(20)
	r.fixt(b2d.poly(20, 40, 60, -20))
	r.XY(200, 500).den(.1).damp(1000, 1000).rot(100).dyn()//.angVel(200)
	r.rev(w.B(200, 500, 'w', 20).damp(1000, 1000).den(100))
	cjs.tick(function () {
		b.F(0, 20)
	})
}
ULTMJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'})
	w.B(300, 400, 'r', 50, 50);
	w.B(800, 400, 'r', 50, 50);
	w.B(1200, 400, 'r', 50, 50);
	w.B(1600, 400, 'y', 100, 100).K('m')
	y = w.ship().track()
}
WORLDS = function () {
	W()
	w.bal(300, 400, 30)
}
STAIRS = function () {
	w = b2d.W()
	w.S(0, 0, [
		[500, 500, 600, 100],
		[500, 400, 500, 100],
		[500, 300, 500, 100],
		[500, 350, 450, 100],
		[320, 400, 50, 600]])
}
NAMESPACE = function () {
// w.B(200,200,b2d.fixts('tri3'))
//w.B(200,200,b2d.fixts('c50'))
	b2d.fixts = {}
	b2d.fixts.tri3 = [[-100, 0], [0, -50], [400, 0]]
	b2d.fixts.c50 = [50]
}
FRICKY = function () {
	w = b2d.W()
	b2d.fricky = [[10, 10], [20, 40, 0, 0, 90, [1, 0, 0]], [20, 40, 0, 0, 180, [1, 0, 0]]]
	b2d.bouncy = [[10, 10], [20, 40, 0, 0, 90, [1, .9, 1]], [20, 40, 0, 0, 180, [1, .9, 1]]]
	b2d.massy = [[10, 10], [20, 40, 0, 0, 90, [2, .5, 1]], [20, 40, 0, 0, 180, [2, .5, 1]]]
	b2d.fluffy = [[10, 10], [20, 40, 0, 0, 90, [.1, .5, .1]], [20, 40, 0, 0, 180, [.1, .5, .1]]]
	w.S(600, 100, b2d.fricky)
	w.S(700, 100, b2d.bouncy)
	w.S(800, 100, b2d.massy)
	w.S(900, 100, b2d.fluffy)
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
MASSCLICKJUMP = function () {
	w = b2d.W({g: 100}).db() //funny
	_.each([
				w.B(100, 200, 'r', 150, 100).den(.5),
				w.B(100, 10, 'b', 30, 60).den(.5).rest(2),
				w.B(500, 400, 'y', 50, 100).den(.5)
			],
			function (b) {
				b.click(function () {
					this.I(0, -50)
				})
			})
}
ROT = function () {
	w = b2d.W()
	y = w.ship().XY(300, 300).stat().rot(1, 10)
}
BSH = BOXSHAPE = function () {
	w = b2d.W()
	/*
	 w.ball()
	
	 b = w.dyn(400,300)//.stat()
	 b.H('o', 50)
	 b.H('r', 50,50)
	 b.H('b', 50,50,50)
	 b.H('g', 50,50,50,50)
	 b.H('w', 50, 50, 50, 50, 50)
	 b.H('u', [-100,0], [0,-50], [200,-10] )
	
	
	
	 b2 = w.dyn(600,300).H([
	 ['o', 50],
	 ['r', 50,50],
	 ['b', 50,50,50],
	 ['g', 50,50,50,50],
	 ['w', 50, 50, 50, 50, 50],
	 ['u', [-100,0], [0,-50], [200,-10]]
	 ])
	
	 */
	b3 = w.dyn(600, 300)
	b3.H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
BODY = function () {
	W(10)
	w.S(600, 600, 20, 1000)
	w.D(100, 400, 'z', [[50], [10, 300, '-']])
	w.D(100, 300, 'b', 50)
	w.D(700, 300, 'b', 50)
	b = w.D(700, 400, 'y', [
		[50],
		['r', 10, 300, '-'],
		['o', 50, 100, 0]
	])
}
LAYERS = function () {
	W(0).Y()
	y.cent('+')
	w.dr(100, 100, 100, 100)
	w.dr(100, 200, 100, 100, '+')
	l1 = w.line(0, 100, 5000, 100, '-')
	l2 = w.line(0, 200, 5000, 200)
	l3 = w.line(0, 300, 5000, 300, '+')
	y2 = w.ship().cent('+')
}
SHOWCOUNT = function () {
	W().Y(200, 200)
	b = w.D(300, 300, 'r', 50)
	w.show(function () {
		return w.count()
	})
}
BEGEND = function () {
	W(0)
	b = w.B(500, 300, 'w', 50)
	w.beg(b, function () {
		w.B(R(1000, 50), R(500, 50), 'y', 5).rest(.8)
	})
	w.end(b,
			function () {
				w.B(R(1000, 50), R(500, 50), 'z', 5).rest(.8)
			}
	)
}
WORLD = function () {
	W(0)
	b = w.D(100, 100, 'r', 50)
	b1 = w.D(100, 200, 'b', 40)
	// w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)
	w.AddController
	w.CreateController
	w.DestroyController
	w.GetGroundBody
	w.GetProxyCount
	w.SetDestructionListener
	w.SetBroadPhase
	w.SetWarmStarting
	w.SetContinuousPhysics
	w.IsLocked
	// proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
	//  pair - a record created when two proxies overlap.
	//  manifold - the set of contact points for two convex shapes.
	w.locked = function () {
		return b2World.e_locked != 2
	}
	w.m_island
	w.m_flags
}
TESTQ = function () {
	W(2).Y(400, 500)
	_.times(5, function () {
		w.randRects()
	})
	n = w.qAB(function (f, b) {
		b.kill();
		return true
	}, 400, 100, 450, 150)
	w.pen(n + ' rects removed')
}
FOLLOWTF = function () {
	W()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(200, 200, 'p', 100, 150)
	cjs.tick(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		setTimeout(function () {
			tf = trf
		}, 1000)
	})
}
TESTPOINT = function () {
	W(50)
	var tf = null
	b = w.rect(100, 100, 100, 200, 'b')
	p = w.rect(200, 200, 100, 150, 'p').stat().rot(20)
	p.fixt(
			b2d.poly(50, 50, 50, 50, 20, 'o')
	)
	f = p.fixt()
	h = f.shape()
	hit = h.testPoint(p.transform(), V(200, 200).div()) // true
	hit2 = f.hit(200, 200, true)
}
COCHANGE = function () {//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
	W({g: 20})
	//gives u a controller-edge, which is a body-controller pair
	//it is linked both to other bodies for that controller..
	//and to other controllers of that body!!!
	//lets focus on other bodies first....
	s1 = w.sensorBucket(320, 300, 's1')
	s2 = w.sensorBucket(700, 300, 's2')
	co1 = w.acc(5, -5)
	co2 = w.acc(-5, 5)
	I(function () {
		aCo.body(
				w.D(300, 100, 'y', 10),
				w.D(760, 100, 'b', 10)
		)
	})
	setInterval(function () {
		b.bc() //default is to kill all in its 'controller-space' (except itself)
	}, 5000)
	w.beg(function (cx) {
		cx.with('s1', function () {
			var f = this, b = f.B()
			b.cancel()
			co1.body(b)
		})
		cx.with('s2', function () {
			var f = this, b = f.B()
			b.cancel()
			co2.body(b)
		})
	})
	w.D(150, 100, 'w', 50).den(1)
	w.D(200, 100, 'd', 50).den(1)
	w.D(250, 100, 'r', 50).den(1)
	b = w.ship(100, 500)
	w.D(350, 100, 'g', 50).den(1)
	w.D(400, 100, 'o', 50).den(1)
	w.D(450, 100, 'w', 50).den(1)
}
ACC = function () {
	W(0).C('z')
	// Imagine that you have gusts of wind blowing sideways…  you can add your objects to a Contoller and have them pushed sideways…  then when the wind passes you could remove them from that controller.
	// now just add and remove bodies to the controller!!
	b = w.D(300, 300, 'b', 50, 60).den(1)
	co = w.acc(-5, -5).body(b)
	added = true
	cjs.tick(function () {
		b.F(10, 10)
	})
	I(function () {
		if (R()) {
			if (added == true) {
				added = false
				w.C('r')
				co.remove(b)
			}
			else {
				added = true
				w.C('g')
				co.body(b)
			}
		}
	}, 2000)
}
BUOY = function () {
	W()
	w.S(320, 480, 'r', 640, 20)
	w.S(320, 340, 'b', 320, 20)
	w.S(170, 230, 'g', 20, 200)
	w.S(470, 230, 'y', 20, 200)
	w.S(320, 245, 'z', [[280, 170, '-']])
	co = w.buoy(0, -1, 5, 2).os(-6).den(2)
	cjs.tick(function () {
		w.eachD(function (b) {
			if (b.co()) {
				co.remove(b)
			}
			for (var c = b.cx(); c; c = c.next) {
				var cx = c.contact
				if (cx.A().IsSensor() && !cx.b().co()) {
					co.body(cx.b())
				}
				if (cx.B().IsSensor() && !cx.a().co()) {
					co.body(cx.a())
				}
			}
		})
	})
	I(function () {
		w.D(300, 40, 'r', 8).den(1)
	})
}
BALL = function () {
	W().B(400, 300, 'x', 150).den(.1)
}
 