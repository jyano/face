ASBOX = OBOX = function () {
	$box()
	w.dB(300, 100).$rF(200, 300)
	w.$dR(900, 300, 300, 200)
	w.dB(300, 100).$fD($rH(300, 200, V(500, 200), 20))
	w.dB(500, 100).$rF(300, 200, V(500, 200), 20)
}
BOXO = function () {
	$box()
	b = w.CB($sB(450, 500))
	b.CF($fD($cH(19)))
	b.CF($rF(400, 150, V(200, 0), -30))
	b.$rF(200, 50, 0, 200, 30)
	b.CF($fD($pH().sAOB(200, 50, 90)))
	w.$rD(500, 0, 100, 50, 0, 200, 45)
	w.$rS(500, 0, 120, 150, 0, 200, 45)
}
SAB = function () {
	$box()
	//pH.sAB handles both box and oriented box!
	var b = w.D(100, 100)
	b.f($fD($cH(40)))
	b.fD($pH().box(100, 100, 100, 200, 78))
	return
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
arr = [V(-30, 0), V(0, -150), V(120, 0)]
ASARR = function () {
	$box()
}
BXARR = function () {
	$Gv()
	w.sB(120, 180).CF($aF(arr))
	w.arr(420, 180, arr).stat()
}
FLR = function () {
	bD = $dB().Set(0, 20)
	b = w.CB(bD);
	pH = _$pH()
	fD = $fD(pH)
	var i
	for (i = 0; i < 4; i++) {
		// pos= V( sinf(i*90*DEGTORAD), cosf(i*90*DEGTORAD) )
		pH.box(30, 30, V(10, 10), 0)
		b.CF(fD)
	}
	bD = $sB(0, 0)
	stB = w.CB(bD)
	pH.asEdge(V(-15, 0), V(15, 3))
	stB.CF(fD); //add a fixture to the body
}
SAAA = function () {
	$box()
	aH = $aH([-100, 0], [0, -100], [100, -20], [50, 20])
	//fD = $fD(aH)
//	w.D(150, 200).f(fD)
//	w.D(240, 300).f($fD($aH(verts)))
//	w.D(434, 400).f($aF((verts)))
	return
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)
}
TRI = function () {
	$box()
	//long way
	w.D(400, 400).f($fD($aH(verts)))
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	w.arr(400, 400, verts)
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.f(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
BX1 = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	ctx = $.cI().C('z')[0].getContext("2d")
	w = $_W(0, 10).aTri(7, 7).aTri(4, 6)
	w.SDD($dD().ctx(ctx).sc(20).fA(.5).lT(1)
			.SF(b2DebugDraw.e_shapeBit))
	_.ev(.4, function () {
		w.cB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.aF($fD($_cH(1.5)))
	})
	_.ev(1 / 60, function () {
		w.Step(1 / 60, 10, 10);
		w.DDD();
		w.CF();
	});
}
BX = function () {
	$box()
	w.aTri(7, 7).aTri(4, 6)
	_.ev(.4, function () {
		w.dB(210, 0).aF($cF(15)).lV$()
	})
}
BOX1 = function () {
	$box()
	w.tri(4, 6)
	w.tri(7, 7)
	_.ev(1, function () {
		var b = w.cB($dB(210, 0)).aF(
				$fD($cH(15)))
		b.lV(R() ? 1 : -1, R() ? 1 : -1)
	})
}
LNV = function () {
	W({g: 0})
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
SABB = function () {
	$box()
	//pH.sAB handles both box and oriented box!
	w.fDFn(100, 100)()
	return
	w.fDFn(100, 200)(20)// rt
	w.fDFn(100, 300)(20, 20) //w, h (as box)
	w.fDFn(100, 370)(20, 20, 20) // w,h,r
	w.fDFn(100, 420)(20, 20, 20, 20)// w,h,x,y,rt
	w.fDFn(100, 500)(20, 20, 20, 20, 20)
	//
	//pH.sAB handles both box and oriented box!
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
ORBOX = function () {
	cir = w.dB(320, 360).stat()
	cir.A($cir(60).DBF(1, .7, .4))
	cir.A(
			$rec(10, 500, 0, 0, 50)
	)
}
SBB = function () {
	w = $box()
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	cir = w.dB(220, 60)
	cir.A($cir(60).DBF(1, .7, .4))
	box = w.dB(300, 400)
	box.A($rec(100, 100).DBF(1, .7, .4))
	w.dB(500, 1000).A(
			$rec(1200, 100)).stat()
}
ASCIR = function () {
	$box()
}
CIR = function () {
	$box()
	w.D(350, 200).f($fD($cH(80), '-'))
	w.D(150, 300).fD($cH(30))
	w.D(450, 200).cir(80)
	function later() {
		//use w.ball
		//w.ball(650, 300, 100).cF(100, 20, 20)
		//w.ship()
	}
}
RAD = function () {
	$box()
	n = 1
	_.ev(1, function () {
		if (n < 300) {
			var b = w.D(350, 200).aV(2).lV(1, 1)
			R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
					b.fD($cH(n *= 1.3))
			$l('n:' + n)
		}
	})
	y = w.Y()
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
}