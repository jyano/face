DRG = function () {
	h = $St().h(300, 300)
	h.bf('me', function (h) {
		h.dc(300).drag()
	})
}
$Ldr('LBF0', function (ld) {
	$St()
	h.C('z').dr(0, 0, 40, 40)
			.bf(ld.get('me'),
			-100).dr(0, 0, 500, 200)
			.dr(100, 100, 500, 200)
})
$Ldr('HBS0', function (ld) {
	$St(1000, 500)
	h.l(8).bf(ld.get('chicks'),
			$Mx(1, 0, 0, 1, -800, -400))
			.dr(0, 0, 1600, 800)
	ch = ld.get('chicks')
	me = ld.get('me')
	var Ch = function (x, y) {
		var h = $H().a2(st).l(8)
		h.graphics.bf(ch)
		h.bs(me)
		//cjs.SL(h)
		return h
	}
	return
	Ch(200, 200).rec(200, 300)
	Ch(400, 250).rec(200, 300)
	Ch(600, 250).rec(200, 300)
	Ch(750, 350).rec(200, 300)
	Ch(900, 250).rec(200, 300)
})
BF101 = BCS = function () {
	$St()
	h.bmCir({circs: cirs})
	//	h2 = $H(700, 300).a2(st).dg()
	//h2.bmCir({circs: vs})
}
$Ldr('BFS', function (ld) {
	$St()
	h.l(20).bf(ld.get('me')).bs(ld.get('chicks'))
			.rec(200, 200, 200, 300).rec(400, 250, 200, 300)
			.rec(600, 250, 200, 300).rec(750, 350, 200, 300)
			.rec(900, 250, 200, 300)
	var Ch = function () {
		var h = st.h('+').l(20)
				.bf(ld.get('chicks')).bs(ld.get('me'))
		// h.rec.apply(ch, arguments)
		return h
	}
	Ch().rec(200, 200, 200, 300)
	Ch().rec(400, 250, 200, 300)
	Ch().rec(600, 250, 200, 300)
	Ch().rec(750, 350, 200, 300)
	Ch().rec(900, 250, 200, 300)
})
$Ldr('PFC', function (ld) {
	$St()
	h.bf($(ld.get('me')).A()[0])
			.cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]]).mt([[750, 20],
				[900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
				[800, 100], [700, 300], [500, 120]], 0, 50)
			.cir({x: 550, y: 20, r: 20, c: 'b'})
			.cir({x: 800, y: 100, r: 30, c: 'b'})
			.cir({x: 700, y: 300, r: 20, c: 'g'})
			.cir({x: 500, y: 120, r: 30, c: 'g'})
})
BF0 = HBF = function () {
	$St()
	h.bf('me', function (h) {
		h.dc(300).dg()
	})
}
BF4 = TFM = function () {
	$St()
	$.i('chicks', function (img) {
		h.sC('b', 50)
		h.bf(img, null, $tMx(210, 230, .5, .5))
		h.dc(100, 100, 100)
	})
}
BF2 = LDB = function () {
	$Ld('me', function (ld) {
		$St()
		h.bf(ld.i('me')).dc(100)
		$H().a2(st).X(500, 100).bf('me').dc(100)
	})
}
BF8 = BFH = function () {
	$St()
	h.bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
$Ldr('HBC', function (ld) {
	h = $St()
	h = $H().a2(st)
	h.bC({
		circs: [{x: 200, y: 100, r: 150}, {r: 100}, {x: 300}]
	})
})
BF100 = BMC = function () {
	$St()
	h.bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
meFunction()
function meFunction() {
	$.me = function (name, fn) {
		if (F(name)) {
			return $.i('me', name)
		}
		window[name] = function () {
			$.i('me', fn)
		}
	}
	$.me('ME', function (me) {
		gx = $St().Gx()
				.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
				.S()._bf(me).dc(400, 400, 200)
	})
}