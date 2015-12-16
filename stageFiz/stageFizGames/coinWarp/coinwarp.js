CW = COIN = function () {
	_.evs(
			CW.WORLD().PLAYER().BADGUYS(5).COIN,
			CW.pen
	)
}
CW.WORLD = function () {
	Wor({W: 600, H: 300, grav: 0, walls: 0}).startKilling().b(CW.BEGIN)
	return CW
}
CW.PLAYER = function () {
	p = w.p(2.5, 'thrust')
	p.warping().Y(200).X(p.W().halfW()).lD(1)
	return CW
}
CW.BADGUYS = function (n) {
	CW.badGuy = function () {
		CW.gG(M.r() * 600)
	}
	_.t(n, function () {
		CW.badGuy()
	});
	return CW
}
CW.COIN = function (x, y) {
	x = N(x) ? x : M.r() * 600
	y = N(y) ? y : M.r() * 300
	return w.BALL(x, y, 6, 'p')
			.warping()
			.lD(0.01)
			.I((M.r() * 15) - 5, (M.r() * 15) - 5)
			.K('coin')
}
CW.BEGIN = function (cx) {
	if (cx.with('coin')) {
		if (cx.bA().K() == 'coin') {
			handleBul(cx.a(), cx.b())
		}
		if (cx.bB().K() == 'coin') {
			handleBul(cx.bB(), cx.bA())
		}
		function handleBul(bul, bulHit) {
			bul.setDestroy()
			doesScore(bulHit.K())
			function doesScore(k) {
				if (k == 'player' || k == 'greenGuy') {
					k == 'player' ?
							CW.score++ : CW.badScore++
				}
			}
		}
	}
}
CW.pen = function () {
	w.st.pen(CW.score + ' / ' + CW.badScore)
}
CW.gG = CW.greenGuy = function (x, y) {
	var gG
	x = N(x) ? x : 100;
	y = N(y) ? y : 100
	gG = w.D(x, y).warping().K('greenGuy')
	gG._size = 20
	gG._coreF = gG.REC(gG._size, gG._size).re(2)
	gG._shellF = gG.rectSensor(gG._size, gG._size)
	_.ev(function () {
		CW.evSec(gG)
	})
	w.b(function (cx) {
		CW.greenGuy.begin(cx, gG)
	})
	return gG
}
CW.greenGuy.begin = function (cx, gG) {
	if (cx.w(gG._coreF, 'player')) {
		gG._size = 20;
		gG.lV(0).aV(0)
	}
}
CW.evSec = function (gG) {
	gG._shellF.kill();
	gG._size += 4;
	gG._shellF = gG.rectSensor(gG._size, gG._size)
}
CW.score = 0
CW.badScore = 0
 