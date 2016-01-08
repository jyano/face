$l('bxShapeApps')
BBOD =  function () {
	w = $box()
	cir = w.dB(220, 60)
	cir.A($cF(60) )
	b = w.dB(300, 400)
	b.CF($rF(100, 100))
	w.sB(500, 1000).CF($rF(1200, 100))
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
		//b1.CF($fD($pH().sAOB(400, 200, 90)))
		//b1.CF($rF(400, 150, V(-300, 0), -30))
		//b1.rF(300, 50, 300, 100, 30)
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
 
BCIR = function () {$box()
	w.sB(350, 200).CF( $fD($cH(80), '-'))
	w.sB(150, 300).fD($cH(30))
	w.sB(450, 200).cir(80)
	w.dC_(700, 300, 100).stat().CF( $cF(100, 60, 60) )
	 
}
BPOL  = function () {
	//fD.density = 1.0;fD.friction = 0.5;fD.restitution = 1.5;
	$box()
	w.aTri(120, 180).aTri(160, 210)
	_.ev(.4, function () {
		w.CB($dB().Set(7, 0))
				.lV(R() ? 1 : -1, R() ? 1 : -1)
				.CF($fD($cH(45)))
		w.dB(210, 0).CF_($cF(15)).lV$()
	})
}
 