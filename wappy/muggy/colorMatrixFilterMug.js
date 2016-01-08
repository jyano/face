CM1 = COLOR = clr = function (r) {
	var ag = 0, rg = 100, sp = 0.04
	wMb(function (b) {
		z();
		s = St(500).dg().a().c('X').a(b.XY(100))
		b.cc()
		b.fl(
				[r == 'g' ? $cMF(.3, 1, .3, 1, 0, 0, 0, 0)
						: r == 'b' ? $cMF(.3, .3, 1, 1, 0, 0, 0, 0)
						: r == 'r' ? $cMF(1, .1, 1, 1, 0, 0, 0, 0)
						: r == 'rg' ? $cMF(1, 1, .1, 1, 1, 1, 20, 0)
						: $cMF(1, .1, 1, 1, 0, 0, 0, 0)]
		)
		b.cc('+')
	})
}
CM2 = COLORMATRIX = function () {
	var g = G(arguments);
	g[0] = g[0] || 'a'
	wMb(function (b) {
				b.XY(100).cc();
				_.e(g, function (mf) {
					b.clMF(mf, '+')
				})
			},
			St(500).dg().A().C('X'))
}
FT8 = FILTERS = function () {
	cM = $CM()
	cM.adjustHue(80)
	cM.adjustSaturation(40)
	cM.adjustBrightness(40)
	cM.adjustContrast(-60)
	s = $.c(1000).A().stage.t()
	s.mug(function (b) {
		b.XY(200, 200).SL()
		b.cache(-200, -200, b.W(), b.H())
		b.filters = [$CMF(cM)]
		b.updateCache()
		//cjs.bindSlide(b)
	})
	s.mug(function (b) {
		b.XY(-100, -50)
		b.cc()
		b.clMF('a', '+')
		b.clMF('w', '+')
		cjs.bindSlide(b)
	})
	s.mug(function (b) {
		b.XY(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	})
	s.mug(function (b) {
		b.XY(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	})
	s.mug(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.XY(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = M.sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	})
}