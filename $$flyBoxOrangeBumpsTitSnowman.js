 
 
	w.tit = function (x, y) {
		var w = this
		return w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
	}
	w.mick = function (x, y, lf) {
		var w = this
		var g = G(arguments)
		var h = w.i.h(x, y, '+')
		h.c({l: 20, C: 0, lf: lf || 1})
		h.dc(50)
		h.dc(200, 0, 100)
		h.dc(100, 100, 100)
		return h
	}
	ADV = function () {
		ob = {}
		ob.QUERY = function () {
			W().Y()
			w.dot(600, 300)
			w.S(200, 300, 'b', 100).$(function () {
				this.C('***')
			})
			w.S(200, 500, 'g', 100).K('g').cir({x: 100, r: 80, c: 'r'}).$(function () {
				this.C('w')
			})
			w.D(1100, 500, 'o', 80).d(.1).$(function () {
				this.B().I(100, -2000)
			})
			w.S(600, 400, 'b', 100, 300)
			w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(function () {
				this.kill()
			})
			w.e('g', function (b) {
				b.$$(function () {
					this.B().C('z');
					this.C('w')
				})
			})
			_.in(function () {
				w.q(600, 300, function (f) {
					f.C('r')
				})
			})
			w.$(function (o) {
				w.ball({x: o.x, y: o.y, r: 8})
			})
			w.$$(function (o) {
				w.S(o.x, o.y, 'x', [[20, 10]])
			})
			w.e$(function (o) {
				this.C('y');
				$l('mass: ' + this.B().mass().toFixed(3))
			})
		}
		ob.CLONE = function () {
			b2d.Common.Math.b2Transform.prototype.toArr = function () {
				var tf = this,
						pos = tf.position,
						R = tf.R,
						col1 = R.col1,
						col2 = R.col2
				return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
			}
			W().Y().P().P().P()
			var tf = null
			b = w.D(100, 100, 'b', 100, 200)
			b2 = w.D(900, 200, 'p', 100, 150)
			T.t(function () {
				var trf
				trf = b.transform().toArr()
				if (tf) {
					b2.SetTransform(b2d.tf(tf))
				}
				_.in(1, function () {
					tf = trf
				})
			})
			b1 = w.D(400, 400, 'x', [
				[100, 100, 10], [100, 200],
				['y', 20, 0, 100],
				['b', 20, 0, -100],
				['g', 20, 200, 0]])
			_.in(1, cl);
			//_.ev(10, cl);
			function cl() {
				c = b1.X(300, '+').I(100000, -1000).clone()
			}
		}
		ob.FORCES = function () {
			W({g: 50})
			//dummy
			w.ball()
			//linVel
			_.t(3, function () {
				w.D(300, 300, 'y', 20).K('lV')
			})
			_.ev(1, function () {
				w.e('lV', function (b) {
					b.lV(0, 20)
				})
			})
			//F('+') <-constant
			w.D(100, 100, 'o', 10).F(40, -60, '+')
			b = w.D(300, 500, 'z', 30, 80).rot(1).fixRot()
			t = {
				i: function () {
					b.I(V(10, -30), b.wC())
				},
				v: function () {
					b.lV(10, -60)
				},
				f: function () {
					cjs.t(function () {
						b.F(V(0, -3), b.wC())
					})
				}
			}
		}
		ob.DENROT = function () {
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
	}
	MJT = function () {
		ob = {
			STACK: function () {
				W({m: 'ball', w: 0})
				w.S(500, 600, 'y', 1000, 20)
				b = w.D(500, 200, 'o', 40).K('ball')
				w.boxesStat([350, 260, 880, 30])
				w.D(310, 120, 't', 60, 60)
				w.D(320, 120, 't', 60, 60)
				w.D(340, 120, 't', 60, 60)
				w.D(350, 120, 't', 60, 60)
				w.D(370, 120, 't', 60, 60)
				w.D(380, 120, 't', 60, 60)
				w.D(550, 120, 't', 60, 60)
				w.D(570, 120, 't', 60, 60)
				w.D(580, 120, 't', 60, 60)
				w.S(1000, 400, 'x', 200, 200)
				w.S(1200, 200, 'x', 200, 200)
			},
			MJJ: function () {
				W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
				w.D(100, 200, 'y', 150, 100).K('imp')
				w.D(500, 400, 'y', 50, 100).K('imp')
				w.D(300, 400, 'r', 50, 50);
				w.D(800, 400, 'r', 50, 50);
				w.D(1200, 400, 'r', 50, 50);
				w.D(1600, 400, 'b', 100, 100).K('m')
				w.e$('imp', function () {
					this.B().I(0, -50)
				})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
			}
		}
		W.btns(ob)
	}
	$$FLYBOX = function (fn) {
		W(800, 700, 900, 700)._(function () {
			w.y().tr()
			fn()
		})
	}
	w.timTrapezoid = function (x, y) {
		var w = this
		return w.D(x, y).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bf: 'guy'
		})
	}
	w.timSnowman = function () {
		var w = this
		var h = w.i.h(300, 300, '+').bf('guy')
		h.dc(100)
		h.dc(20, -220, 50)
		h.dc(20, -120, 90)
		return h
	}
	w.orangeBumps = function () {
		var w = this
		w.i.cir(100, 100, 10, 'r', 'y')
		w.S(300, 300, 'o', 10)
		w.S(430, 300, 'o', 10)
		w.S(300, 370, 'o', 10)
		w.S(210, 320, 'o', 10)
		return w
	}
	function test() {
		CNC = function () {
			w = {W: 1200, H: 600}
			w.I = $St('z', w.W, w.H, 0, 0).t()
			w.s = $St('X', w.W, w.H, 0, 0).t()//.aC(0)
			w.canvas = w.s.canvas
			w.can = $(w.canvas)
			w.ctx = w.can.ctx('2d')
			w.bg = w.s.ct();
			w.g = w.s.ct();
			w.fg = w.s.ct()
			w.i = $St('b', w.W, w.H, 0, 0).t()
			/*
			 ii = w.I
			 s= w.s
			 bg= w.bg
			 g= w.g
			 fg= w.fg
			 i= w.i
			 */
			_.in(1, function () {
				w.i.bm('me', '+')
			})
		}
	}
	
	LVR = LEFTOVER = function () {
		w.bg.bm('me', 6.2, function (bm) {
			bm.X(500)
		})
// b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
// b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
// w.D(400,500,'o',[['w',[30,30],[20,40],[10,10]]]).pol([-100, 0], [0,-100], [100, 40]).C('g')
//	_.in(4, function(){w.s.al(0)})
	}
	function uncaughtAssertion() {
		SIF2 = function () {
			W()
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
		STAR = function () {
			W()
			b2d.compoundStar = [
				[10, 10],
				[20],
				[4, 80, 10, 30, 135],
				[4, 80, 0, 0, 45],
				[4, 80, 100, 0, 90],
				[4, 80, 0, 0, 180]
			]
			w.D(400, 100, b2d.compoundStar)
		}
		MO5 = function () {
			W()
			b2d.compoundShape = [
				[50, 10],
				[60, 30, 0, 0, 40],
				[120, 30, 0, 0, 29],
				[60, 10, 0, 50, 60],
				[84, 10, 15, 80, -120]
			]
			w.D(200, 100, b2d.compoundShape)
			b2d.compoundShape2 = [
				[50, 10],
				[20, 20],
				[20, 10, 0, 0, 10],
				[40, 10, 50, 0, 45],
				[84, 10, 15, 80, -120],
				[60, 10, 0, 50, 60]
			]
			w.D(300, 100, b2d.compoundShape2)
		}
	}
 
BAD = function () {
	ob = {}
	ob.test = function () {
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
	}
	ob.me=function () {
		
		//cjs.me=function(fn){Q(['me'], function(q){fn(q.getResult('me'))})}
		cjs.me(function (i) {
			h.c({
				l: 200,
				rf: ['w', 'u', 800],
				rs: {c1: 'w', c2: 'x', r2: 800}
			}).dc({x: 0, y: 0, r: 200})
			s.h().c({
				l: 200,
				lf: {c1: 'w', c2: 'u', y2: 200},
				ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
			}).dc({x: 0, y: 0, r: 200}).drag()
			s.h().lf('y', 'r', 10).dc({r: 200}).c({
				l: 0,
				c: 'y',
				//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
				bs: i, bf: i
			}).dc({r: 200}).drag()
			s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
		})
	}
	ob.alpha = function () {
		h = w.i.h(50, 200, '+')
		h.bC({
			hs: [{r: 80}, {r: 50, x: 100},
				{r: 100, x: 400}]
		})
	}
	ob.tits = function () {
		_.t(8, function () {
			w.tit(R(200, 300), R(200, 100))
		})
		o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
		h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
	}
	ob.tits2 = function () {
		/*
		 _.evx(.1, function(){
		 o.r1++;o.r2++;o.x1--
		 h.rf(o).dc(100)})
		 //*/
		$h(500, 100).a2(s).rf('r', 'y',
				100, 100, 0,
				100, 100, 50
		).dc(50, 50, 100).drag()
	}
	ob['h.bR({hS:})'] = function () {
		b = w.D(600, 300, 'r', 100, 300)
		h = w.i.h().bR({hs: [{w: 100, h: 300}]})
		b.bS(h)
	}
	ob.shapes=function(){
		h1 = w.i.h('+').cir({
			C: 'X',
			lf: {X1: 650, X2: 220, Y1: 950, Y2: 520},
			r: 100
		}, [{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])}
	ob.rs3 = function () {
		w.bmR(600, 300, 'b', 100, 300)
		w.bmR(300, 300, 100, 300)
	}
	W.btns(ob)
}
   