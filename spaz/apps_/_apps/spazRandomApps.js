function spazBasic() {
	NRM = function () {
		W()
		w.D(800, 300, 'b', 10).d(1)
		w.D(800, 300, 'x', 10, 10).d(1)
		b = w.D(800, 300, 'b', 100).d(1)
		x = w.D(800, 300, 'x', 100, 100).d(1)
		w.D(800, 300, 'b', 200).d(1)
		w.D(800, 300, 'x', 200, 200).d(1)
		// w.s.al(0)
		w.i.autoClear = false
		return w
	}
	CANC = function () {
		Q(function () {
			z()
			w = {W: 1200, H: 600}
			ii = w.I = $St('z', w.W, w.H, 0, 0).t()
			s = w.s = $St('X', w.W, w.H, 0, 0).t()
			w.canvas = w.s.canvas
			w.can = $(w.canvas)
			w.ctx = w.can.ctx('2d')
			bg = w.bg = w.s.ct()
			g = w.g = w.s.ct()
			fg = w.fg = w.s.ct()
			i = w.i = $St('X', w.W, w.H, 0, 0).t()
			g.bm('me', function (bb) {
				b = bb.drag()
			})
			i.bm('me', function (bb) {
				b = bb.drag()
			})
		})
		CANC1 = function () {
			w = {W: 1200, H: 600}
			/*
			 w.I = $St('z', w.W, w.H ,0, 0).t()
			 w.s= $St('X', w.W, w.H, 0, 0).t()//.aC(0)
			 w.canvas = w.s.canvas
			 w.can= $(w.canvas)
			 w.ctx = w.can.ctx('2d')
			 w.bg= w.s.ct();
			 w.g=  w.s.ct();
			 w.fg= w.s.ct()
			 */
			w.i = $St('b', w.W, w.H, 0, 0).t()
			/*
			 ii = w.I
			 s= w.s
			 bg= w.bg
			 g= w.g
			 fg= w.fg
			 i= w.i
			 */
			$.in(1, function () {
				w.i.bm('me', '+')
			})
		}
	}
}
function random() {
	DENROT = function () {
		W(0) //w=b2d.m({g:0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
		//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
		//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
		r = w.D(300, 300, 'y', 400, 20).bo(.5)
		r2 = w.D(300, 300, 'w', 400, 10)
		r3 = w.D(300, 300, 'w', 400, 10)
		r4 = w.D(300, 300, 'w', 400, 10)
		r5 = w.D(300, 300, 'w', 400, 10)
		flipDen = function (r) {
			var d = r.den()
			if (d == 0) {
				r.den(1)
			} else {
				r.den(0)
			}
		}
		flipStage = function () {
			if (w.s.X() == 0 && w.s.Y() == 0) {
				w.s.XY(10000, 10000)
			}
			else {
				w.s.XY(0, 0)
			}
		}
		flipStage()
		_.ev(6, function () {
			flipDen(r);
			flipDen(r2);
			flipDen(r3);
			flipStage()
		})
	}
//query games
	DONTKNOW = function () {
		W({g: 0, w: 0}).Y().C('z')
		x = w.S(100, 100, 'x', 500)
		b = w.S(600, 300, 'w', [[80], [100, 300, 140, 0, 46]])
		//w.d(r.wC())
		f = b.f()
		f1 = f.N()
		h = f.H()
		h1 = f1.H()
		s = x.fSp()
	}
}
function err() {
	SIMPF = function () {
		W([2000, 1000], {g: 100}).Y();
		y.tr();//$.rulers()
		b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
		b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
		b = w.D(400, 400)
		b.pol('o', [-300, 0], [0, -100], [10, 150])
		b.pol('y', [[-10, 0], [0, -100], [100, -50]])
		b.pol(['b', [-200, 0], [0, -100], [10, 150]])
		b.pol({
			c: 'r', v: [
				[-100, 0],
				[0, -100],
				[100, -50]
			]
		})
		w.D(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]]).pol([-100, 0], [0, -100], [100, 40]).C('g')
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
		//simple off-cir-sen
		w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
		//simple off-rec-sen
		w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		_.t(20, thing)
		function thing() {
			w.D(R(600), R(300, 200), [
				['p', [-20, -20], [0, -30], [10, 10]],
				['n', [0, 0], [30, -50], [50, -10]]
			])
		}
		
		w.ball()
		b = w.S(400, 300)
		b.f('o', 50)
		b.f('r', 50, 50)
		b.f('b', 50, 50, 50)
		b.f('g', 50, 50, 50, 50)
		b.f('w', 50, 50, 50, 50, 50)
		b.f('u', [-100, 0], [0, -50], [200, -10])
		w.D(600, 300).f([
			['o', 50],
			['r', 50, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300).f('y', [
			[50],
			['r', 250, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		b2d.somePolyFixt = [
			[
				[-100, 0], [0, -100],
				[100, 0], [60, 50]]]
		b2d.compoundShape = [
			[50, 10],
			[60, 30, 0, 0, 40],
			[120, 30, 0, 0, 29],
			[60, 10, 0, 50, 60],
			[84, 10, 15, 80, -120]
		]
		b2d.compoundShape2 = [
			[50, 10],
			[20, 20],
			[20, 10, 0, 0, 10],
			[40, 10, 50, 0, 45],
			[84, 10, 15, 80, -120],
			[60, 10, 0, 50, 60]
		]
		b2d.compoundStar = [
			[10, 10],
			[20],
			[4, 80, 10, 30, 135],
			[4, 80, 0, 0, 45],
			[4, 80, 100, 0, 90],
			[4, 80, 0, 0, 180]
		]
		w.D(100, 100, b2d.somePolyFixt)
		w.D(200, 100, b2d.compoundShape)
		w.D(300, 100, b2d.compoundShape2)
		w.D(400, 100, b2d.compoundStar)
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	CJSCIR = function () {
		W()
		w.i.cir('b', 800, 200, 150)
		w.i.cir()
		h = w.i.h('+')
				.cir(
				{r: 100, c: 'b', C: 'X', l: 20, lf: 1},
				[
					{x: 250, y: 300},
					{x: 450, y: 300},
					{x: 250, y: 500}]
		)
		h1 = w.i.h('+')
				.cir(
				{C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[
					{x: 750, y: 300},
					{x: 950, y: 300},
					{x: 750, y: 500}
				]
		)
	}
} 