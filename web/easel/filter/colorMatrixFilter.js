cM = cjs.ColorMatrix.prototype
cM.s = function (s) {
	this.adjustSaturation(s)
	return this
}
cM.c = function (c) {
	this.adjustContrast(c)
	return this
}
cM.ch = function (c) {
	this.adjustHue(c)
	return this
}
cM.b = function (c) {
	this.adjustBrightness(c)
	return this
}
ColorMatrix = $CM = $Cm = $cM = function (a, b, c, d, e) {
	var m = new cjs.ColorMatrix(a, b, c, d, e)
	m.b = m.adjustBrightness
	m.c = m.adjustColor
	m.C = m.adjustContrast
	m.h = m.adjustHue
	m.s = m.adjustSaturation
	m.cl = m.clone
	m.cc = m.concat
	m.m = m.copyMatrix
	m.r = m.reset
	m.A = m.toArray
	m.S = m.toString
	return m
}
dO.cMF = function (cM) {
	var cf = new cjs.ColorMatrixFilter(cM)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
ColorMatrixFilter = $CMF = $cMFl = $CmF = $cMF = function (a, b, c, d) {
	return new cjs.ColorMatrixFilter(O(a) ? a : $CM(a, b, c, d))
}
function withMug(){
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
	}}
GREY = function () {
	Q(function () {
		Q.b('me').a2($St())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
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
FT10 = FILTRS = function () {
	Q(function () {
		s = $St().t()
		i = Q.i('me')
		b = s.qB('me', .8, '+')
		/////////////////////////
		//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
		cM = $cM()
		cM.adjustBrightness(-400)
		//cM.adjustHue(-180)
		cM.c(80)
		//cM.c(-100)
		b._(400, 200, '+').fl($cMF(cM), i)  //zW
		///////////////////////
		// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
		// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
	})
}