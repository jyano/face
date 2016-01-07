function joint() {
	$dJt = function (a, b) {
		var jd = new b2d.DistanceJointDef
		jd.bodyA = a
		jd.bodyB = b
		return jd
	}
	BOXDISTJOINT = BDJ = function () {
		w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
		_.ev(.1, function () {
			w.go(1 / 5, '+')
		})
		w.dB(500, 1000).A($rec(1200, 100)).stat()
		b = w.dB(210, 230)
		b.A($cir(70).DBF(1, .3, .4))
		r = w.dB(200, 60)
		r.A($rec(100, 200))
		r.den(1)
		jd = $dJt(b, r)
		w.CreateJoint(jd)
	}
}