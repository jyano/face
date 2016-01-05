FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
}
FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
}