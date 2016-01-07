bitmapFillAoos()
function bitmapFIllApps() {
	v = [[-100, 0], [0, -100], [100, 50]]
	vs = [
		[[-100, 0], [0, -100], [100, 50]],
		[[-200, 0], [-100, -100], [0, 50]],
		[[0, 200], [0, -200], [400, -300], [400, 300]]
	]
	cirs = [{r: 150}, {x: 200, r: 150}, [300, 100, 100], [400, 100, 100]]
	HBF = function () {
		$St().h(300, 300).bf('me', function (h) {
			h.dc(300).drag()
		})
	}
	HBS = function () {
		$Ld(function (ld) {
			St(1000, 500).h(810, 410, '+').l(8)
					.bf(ld.get('chicks'),
					$Mx(1, 0, 0, 1, -800, -400)).rec(1600, 800)
			ch = ld.get('chicks')
			me = ld.get('me')
			Ch(200, 200).rec(200, 300)
			Ch(400, 250).rec(200, 300)
			Ch(600, 250).rec(200, 300)
			Ch(750, 350).rec(200, 300)
			Ch(900, 250).rec(200, 300)
		})
		function Ch(x, y) {
			var h = st.h(x, y).l(8)
			h.graphics.bf(ch)
			h.bs(me)
			cjs.SL(h)
			return h
		}
	}
	TFM = function () {
		$.i('chicks', function (img) {
			St().h(100, 100, '+').sC('b', 50)
					._bf(img, null, $tMx(210, 230, .5, .5))
					.dc(100, 100, 100)
		})
	}
	LDB = function () {
		St()
		$Ld('me', function (ld) {
			st.h(300, 200, '+').bf(ld.i('me')).dc(100)
			st.h(500, 100, '+').bf('me').dc(100)
		})
	}
	LB1 = function () {
		$Ld(function (ld) {
			St().h('+')
					.C('z').dr(0, 0, 40, 40)
					.bf(ld.get('me'), -100).dr(0, 0, 500, 200).dr(100, 100, 500, 200)
		})
	}
	PFC = function () {
		St()
		$Ld(function (ld) {
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
	}
	HBC = function () {
		St()
		$Ld(function (ld) {
			h = st.h('+')
			h.bC({
				circs: [
					{x: 200, y: 100, r: 150},
					{r: 100}, {x: 300}
				]
			})
		})
	}
	BFH = function () {
		h = $St().h(300, 100, '+').bf({
			i: 'me',
			hs: [100, 300, 500, 700, 900],
			fn: function (x) {
				h.dc(x, 30, 120).es()
			}
		})
	}
	BMC = function () {
		st = $St().t()
		st.h(300, 200).bmCir({
			circs: [{r: 100}, {x: 200, y: 200}, {}]
		})
	}
	BFS = function () {
		St()
		var Ch = function () {
			return st.h('+').l(20).bf(ch).bs(me)
		}
		$Ld(function (ld) {
			ch = ld.get('chicks')
			me = ld.get('me')
			Ch().rec(200, 200, 200, 300)
			Ch().rec(400, 250, 200, 300)
			Ch().rec(600, 250, 200, 300)
			Ch().rec(750, 350, 200, 300)
			Ch().rec(900, 250, 200, 300)
			h = st.h('+')
			h.l(20).bf(me).bs(ch)
			h.rec(200, 200, 200, 300)
			h.rec(400, 250, 200, 300)
			h.rec(600, 250, 200, 300)
			h.rec(750, 350, 200, 300)
			h.rec(900, 250, 200, 300)
		})
	}
	BCS = function () {
		St()
		h = st.h(100, 300).drag()
		h.bmCir({circs: cirs})
		h2 = st.h(700, 300).drag()
		h2.bmCir({circs: vs})
	}
}