PROTONIGHT = function () {
	w = W([1200, 600, 1200, 600])
	w.dB(900, 300).stat().rec(120, 40) // top
	w.dB(700, 360).stat().rec(120, 40)
	w.dB(620, 400).stat().rec(320, 40)
	w.dB(500, 420).stat().rec(320, 40)
	w.dB(250, 500).stat().rec(60, 40)
	w.dB(300, 540).stat().rec(320, 40)//bottom
	_.t(10, function () {
		p = w.p().XY(R(300), R(300)).K('guy')
	})
	y = w.y(400, 200, 2).track()
	y.cl(function (fx) {
		$l('collided')
		var bod = fx.B()
		if (bod.K() == 'guy') {
			bod.kill()
		}
	})
	w.showOff()
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
} 

