$L()
function _pre() {
	$Ldr = function (name, fn) {
		return window[name] = function () {
			$Ld(fn)
		}
	}
}
MANIFEST = function () {
	Q(['me', 'guy'], function (q) {
		$St().A(me = q.bm('me'))
		st.A(guy = q.bm('guy'))
		guy.dg()
	})
}
QU0 = function () {
	Q(mf5, function () {
		$.A(Q.i('me'))
	})
}
QU1 = function () {
	$Ld(mf3, function (ld) {
		$St().A(ld.bm("me"), ld.bm("guy", 300, 300))
	})
}
QU14 = function () {
	$Ld(mf1, function (ld) {
		ld.bm("myImage", $St())
	})
}
QU2 = function () {
	$Ld(mf2, function (ld) {
		ld.bm("me", $St());
		ld.bm("guy", st)
	})
}
QU3 = function () {
	$Ld(function (ld) {
		Q.bm("me", $St());
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
ULE = USINGLAYERSINEASEL = function () {
	$Ld(mf5, function (q) {
		me = q.bm('me', $St()).scXY(3);
		guy = q.bm('guy', st).scXY(.5).dg()
		$t(function () {
			me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
		})
	})
	$.bt('s.sXY(2)', function () {
		st.sXY(2)
	})
}
QU11 = WINDG = function () {
	$Ld(function (ld) {
		ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
				.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
	})
}
QU7 = WOAH = TIMSPIN = function () {
	$Ld(mf5, function () {
		$St().qB('guy').scXY(.5, .3).XY(300, 300).spin()
		_.in(3, function () {
			T.f(1)
		});
		_.in(9, function () {
			T.f(1000)
		})
	})
}
GREY = function () {
	Q(function () {
		Q.b('me').a2($St().t())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
}
BF0 = HBF = function () {
	h = $St().h(300, 300)
	h.bf('me', function (h) {
		h.dc(300).dg()
	})
}
BF4 = TFM = function () {
	$.i('chicks', function (img) {
		h = $St().h(100, 100, '+').sC('b', 50)
		h.bf(img, null, $tMx(210, 230, .5, .5))
		h.dc(100, 100, 100)
	})
}
BF2 = LDB = function () {
	$Ld('me', function (ld) {
		$St().h(300, 200, '+').bf(ld.i('me')).dc(100)
		st.h(500, 100, '+').bf('me').dc(100)
	})
}
BF8 = BFH = function () {
	h = $St().h(300, 100, '+').bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
BF100 = BMC = function () {
	$St().h(300, 200).bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
BF101 = BCS = function () {
	$St()
	h = st.h(100, 300).dg()
	h.bmCir({circs: cirs})
	h2 = st.h(700, 300).dg()
	h2.bmCir({circs: vs})
}
COOL = Q2 = function () {
	pt = 0
	h = $St().mO(1).h().ss('g', 40, 's', 'b', 1)
	st.MD(function () {
		pt = st.m()
	})
	st.MU(function () {
		pt = 0
	})
	st.MM(function () {
		if (pt) {
			h.line(pt, pt = st.m())
		}
	})
	st.bm('chicks', function (b) {
		b.XY(500, 300).al(.2)
	})
}

$Ldr('LBF', function (ld) {
	$St().h('+')
			.C('z').dr(0, 0, 40, 40)
			.bf(ld.get('me'),
			-100).dr(0, 0, 500, 200)
			.dr(100, 100, 500, 200)
})
$Ldr('HBS', function (ld) {
	$St(1000, 500).h(810, 410, '+').l(8)
			.bf(ld.get('chicks'),
			$Mx(1, 0, 0, 1, -800, -400)).rec(1600, 800)
	ch = ld.get('chicks')
	me = ld.get('me')
	function Ch(x, y) {
		var h = st.h(x, y).l(8)
		h.graphics.bf(ch)
		h.bs(me)
		cjs.SL(h)
		return h
	}
	
	Ch(200, 200).rec(200, 300)
	Ch(400, 250).rec(200, 300)
	Ch(600, 250).rec(200, 300)
	Ch(750, 350).rec(200, 300)
	Ch(900, 250).rec(200, 300)
})
$Ldr('BFS', function (ld) {
	$St().h('+').l(20).bf(ld.get('me')).bs(ld.get('chicks'))
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
$Ldr('HBC', function (ld) {
	h = $St().h('+')
	h.bC({
		circs: [
			{x: 200, y: 100, r: 150},
			{r: 100}, {x: 300}
		]
	})
})