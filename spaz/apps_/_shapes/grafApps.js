grpx()
grad()
bmp()
function grpx() {
	BLOKUS = function () {
		W(0).Y();
		y.cn('thrust')
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	FG = FOREGROUND = function () {
		W(800, 500, 1200, 600)._(function () {
			w.p()
			w.y().tr()
			h = w.i.h(50, 200, '+')
			h.bf('chicks', function (h) {
				_h = h
				h.dc({r: 80}
						//, {r: 50, x: 100}, {r: 100, x: 400}
				)
			})
			w.I.h(200, 200, '+').bf('chicks').dc(100)
		})
	}
}
function grad() {
//just easel, no physics.. but uses grads! and only circles
	MICK = function () {
		W()
		// mick(500,200)
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		mick(100, 100, {y2: 10})
		mick(100, 200, {y2: 200})
		mick(100, 300, {x2: 100})
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
	}
	GRADADV = LAYEREDGRADS = GRADSHAPES = function () {
		$W([2000, 1000], {})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: vs, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: vs, c: 'y', C: 'y', l: 5, lf: 1})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
		w.s.h()
				.dc([50], [200, 0, 100], [100, 100, 100])
				.c({l: 20, C: 0, ls: 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		/* h.twL(
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200])
		 h.twL(
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
		 )*/
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
		//tits()
		function tits() {
			_.t(8, function () {
				tit(R(200, 300), R(200, 100))
			})
			o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
			h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
			/*
			 _.evx(.1, function(){
			 o.r1++;o.r2++;o.x1--
			 h.rf(o).dc(100)})
			 //*/
			$h(500, 100).a2(s).rf('r', 'y',
					100, 100, 0,
					100, 100, 50
			).dc(50, 50, 100).drag()
			function tit(x, y) {
				w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
			}
		}
	}
}
function bmp() {
	POLYBM = TRAPAZOID = function () {
		W(500, 700, 600, 700)._(function () {
			w.p();
			w.y().tr()
			w.i.h(800, 100, '+')
					.bf('guy')
					.dc([80], [90, 0, 68])
			w.D(200, 300).pol({
				v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
				bf: 'guy'
			})
		})
		//wait... tim is hiding in upper right
	}
	CUBES = function () {
		W(500, 500, 600, 550)._(function () {
			w.p();
			w.y().tr()
			b = w.D(600, 300, 'r', 400, 300)
			h = w.bg.h().al(.5)
			h.bf('sun')
			h.rec({w: 400, h: 300})
			b.bS(h)
			w.bfR(600, 300, 'guy', 100, 100, 'X')
			w.bfR(300, 300, 'sun', 100, 100, 'z')
			w.bfR(300, 300, 'chicks', 100, 100)
		})
	}
	ARROWHEADS = function () {
		W(800, 500, 800, 550)._(function () {
			w.p();
			w.y().tr()
			//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
			w.D(550, 200).pol({
				c: 'o', C: 'z', l: 25,
				bf: 'chicks',
				v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
			})
			//h.bV //w.pol
			w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
			w.bg.Bm('me').sXY(6.2).X(500).al(.2)
			w.D(500, 400).pol({
				v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
				c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
			})
		})
	}
}