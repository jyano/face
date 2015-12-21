$L( 'mouse','load','official','fill','filts')
function mouse() {
 
	MU0 = ENTERST = function () {
		St()
		st.bm('me')
		st.on('mouseenter', function () {
			$.br().A()
			$('body').A('once<br>')
		}, null, true)
		st.on('mouseenter', function () {
			$('body').A('many<br>')
		}, null, false)
	}//A-
	MU1 = MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		st = $St(1600, 1000)
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		st.on('mouseenter', function () {
			$('body').C($r())
		})
		ct = (new cjs.Container().a2(st)).bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		st.ct(function (ct, st) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			// the middle size me demonstrates stopPropogation
			// if you click it, the container does not feel the click
			ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			ct.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			ct.on('click', function () {
				$l('con')
			})
		})
		function alt() {
			MU3 = MX0 = MATRIX0 = function () {
				st = $St(1600, 1000)
				// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
				// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
				$.d('b', 50, 50).A()
				// on stage enter, change background color, though you
				// cant see it here because stage fills screen
				// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
				st.on('mouseenter', function () {
					$('body').C($r())
				})
				st.A(ct = container = c = $Ct())
				ct.bm('me', function (bm) {
					//b.sxy(.2).xy(100,80)
					//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
				})
				//make a container
				st.ct(function (c, s) {
					
					//the little me clicks do not hit the 'big' me underneath it.  that's normal.
					//but it does hit the container.  but this example shows off 'remove', so it only hits once
					//however, it continues to propogate on to the container. hmmm..
					// the middle size me demonstrates stopPropogation
					// if you click it, the container does not feel the click
					ct.bm('me', function (b) {
						b.sXY(.4).XY(100, 180)
						//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
					})
					ct.b('me', function (b) {
						b.sXY(1.5)
						// b.o('$',fL('big'))  //on click, log('big')
					})
					//on click, log('con')
					//c.o('$',  fL('con'))
				})
				st.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
					//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
					// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
					//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
				})//.MV(40)
				st.ct(function (c, s) {
					c.x(700)
					c.mg(function (b) {
						b.sxy(.8).xy(200, 80)
					})
					c.mg(function (b) {
						b.sxy(.8).xy(100, 280)
					})
					c.mg(function (b) {
						b.sxy(.8).xy(340, 180)
					})
					//this example shows which sprites are acted upon with over/rollover
					//over only affects one
					//rollover affects ALL
					//if you enter a sprite from outside, they all grow (via rollover),
					//and the one sprite grows double (via over)
					c.o('v', function (g, e) {
						$l('v')
						g.sxy(.01, '+')
					})
					c.o('rv', function (g, e) {
						$l('rv')
						g.sxy(.01, '+')
					})
					c.o('o', function (q, e, g) {
					})
					c.o('ro', function (q, e, g) {
					})
					// in summary,
					// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
					// BUT, they will all recieve events separately
				}).MV(40)
				st.ct(function (ct, st) {
					ct.X(1400)
					ct.bm('me', function (bm) {
						
						//make the little me slide the entire container
						//it acts as a handle! (for its container)
						lit = bm.sXY(.2).XY(100, 80)
						SL(bm, ct)
						ct.bm('me', function (bm) {
							//big me will scale the little me
							big = bm.sXY(2).XY(100, 180)
							SC(bm, lit)
							ct.bm('me', function (bm) {
								bm.sXY(.6).XY(150, 180)
								SL(bm)
								RT(bm, big)
							})
						})
					})
					//guy slides stage
					ct.bm('guy', function (bm) {
						bm.sXY(.4).XY(100, 180)
						SL(bm, stage)
					})
				})
			}
		}
	}
	MU2 = HAN = HANDEV = function () {
		St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
			}
			b.on('pressmove', b)
		})
		st.t()
		function alt() {
			MU6 = HANDLEEVENT = function () {
				St()
				s.bm('me', function (b) {
					me = b
					cb = b.on('pressmove', function () {
						this.x++
					})
				})
				s.bm('guy', function (b) {
					b.handleEvent = function () {
						this.y++
					}
					b.on('pressmove', b)
				})
			}
		}
	}//B+
	MU3 = MOUSE = BUB8 = MOUSEVENTS = BUBBBLE = function () {
		St()
		output = $T(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		bg = $H().n("background")
		bg.graphics.f("red").rr(0, 0, 150, 60, 10)
		lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.e([st, bt, lb, bg], function (tg) {
			tg.$(handleClick, false);
			tg.$(handleClick, true)
		})
		st.u()
		function handleClick(e) {
			if (e.currentTarget == st && e.eventPhase == 1) {
				output.text = "target : eventPhase : currentTarget\n"
			}// this is the first dispatch in the event life cycle, clear the output.
			output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
			if (e.currentTarget == st && e.eventPhase == 3) {
				st.u()
			}// this is the last dispatch in the event life cycle, render the stage.
		}
	}//B+
	MU4 = RMEVT8 = function () {
		function alt() {
			MU7 = REMOVEEVENT = function () {
				St()
				s.bm('me', function (b) {
					me = b
					cb = b.on('pressmove', function () {
						this.x++
					})
				})
				s.bm('guy', function (b) {
					b.handleEvent = function () {
						this.y++
						me.off('pressmove', cb)
					}
					b.on('pressmove', b)
				})
			}
		}
		
		St()
		st.bm('me', function (b) {
			me = b
			cb = b.on('pressmove', function () {
				this.x++
			})
		})
		st.bm('guy', function (b) {
			b.handleEvent = function () {
				this.y++
				me.off('pressmove', cb)
			}
			b.on('pressmove', b)
		})
		///////
		s.can.P('a').XY(300)
		s.A(h = shape = $h())
		h.rec(100, 200, 0, 200, 'red')
				.rec(100, 100, 100, 20, 'green')
				.rec(145, 120, 10, 80, 'orange')
				.cir(105, 100, 20, 'blue')
				.cir(105, 100, 8, 'black')
				.cir(200, 100, 20, 'blue')
				.cir(200, 100, 8, 'black')
				.cir(100, 20, 100, 'green')
				.rXY(100, 300).XY(100, 300).drag()
		p = function () {
			shape.twL(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			shape.twL(
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
			)
		}
		p()
	}
	MU5 = MOUSEENTERSTAGE = function () {
		St()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
}
function load() {
	COOL = Q2 = function () {
		St().mO(1)
		h = st.h().ss('g', 40, 's', 'b', 1)
		st.bm('chicks', function (b) {
			b.XY(500, 300).al(.2)
		})
		pt = 0
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
	}
	MANIFEST = function () {
		s = cjs.S()
		Q(['me', 'guy'], function (q) {
			s.A(me = q.bm('me'))
			s.A(guy = q.bm('guy'))
			guy.drag()
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
		St();
		$Ld(mf2, function (ld) {
			ld.bm("me", st);
			ld.bm("guy", st)
		})
	}
	QU3 = function () {
		St();
		$Ld(function (ld) {
			Q.bm("me", st);
			Q.bm("guy", st, 300, 300)
		}).mf("me", guyIt)
	}
	ULE = USINGLAYERSINEASEL = function () {
		St()
		$Ld(mf5, function (q) {
			me = q.bm('me', st).scXY(3);
			guy = q.bm('guy', st).scXY(.5).drag()
			$t(function () {
				me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
			})
		})
		$.bt('s.sXY(2)', function () {
			st.sXY(2)
		})
	}
	QU11 = WINDG = function () {
		st = $St($.c(960, 400).id("cv").id())
		$Ld(function (ld) {
			ld.bm("chicks", st, 470).drag()
					.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same()//.drag()//!
		})
	}
	QU7 = WOAH = TIMSPIN = function () {
		St();
		$Ld(mf5, function () {
			st.qB('guy').scXY(.5, .3).XY(300, 300).spin()
			_.in(3, function () {
				T.f(1)
			});
			_.in(9, function () {
				T.f(1000)
			})
		})
	}
}
function fill() {
	BF0 = HBF = function () {
		h = $St().h(300, 300)
		h.bf('me', function (h) {
			h.dc(300).drag()
		})
	}
	BF1 = LB1 = function () {
		$Ld(function (ld) {
			St().h('+')
					.C('z').dr(0, 0, 40, 40)
					.bf(ld.get('me'), -100).dr(0, 0, 500, 200).dr(100, 100, 500, 200)
		})
	}
	BF2 = LDB = function () {
		St()
		$Ld('me', function (ld) {
			st.h(300, 200, '+').bf(ld.i('me')).dc(100)
			st.h(500, 100, '+').bf('me').dc(100)
		})
	}
	BF3 = HBS = function () {
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
	BF4 = TFM = function () {
		$.i('chicks', function (img) {
			St().h(100, 100, '+').sC('b', 50)
					._bf(img, null, $tMx(210, 230, .5, .5))
					.dc(100, 100, 100)
		})
	}
	BF5 = BFS = function () {
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
	BF6 = PFC = function () {
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
	BF7 = HBC = function () {
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
		st = $St().t()
		st.h(300, 200).bmCir({
			circs: [{r: 100}, {x: 200, y: 200}, {}]
		})
	}
	BF101 = BCS = function () {
		St()
		h = st.h(100, 300).drag()
		h.bmCir({circs: cirs})
		h2 = st.h(700, 300).drag()
		h2.bmCir({circs: vs})
	}
	GR0 = GRD = TESTGRADWORKS = function () {
		z()
		c = $.c('y', 500).A()
		g = c.context.createLinearGradient(50, 0, 500, 100)
		g.addColorStop(.2, 'orange')
		g.addColorStop(.6, 'red')
		g.addColorStop(.8, 'green')
		c.context.fillStyle = g
		c.fillRect()
	}
	GR3 = GRADTX = function () {
		__C();
		x = c.ctx()
		x.lg(
				{
					cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
					x1: 50, x2: 500, y2: 100
				}).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
		//black to white
		// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
	}
	GR2 = TXG = TESTGRAD = function () {
		__C();
		x = c.ctx()
		x.lg(
				{
					cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
					x1: 50, x2: 500, y2: 100
				}
		).fr(0, 0, 300)
		x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
		//black to white
		// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
	}
	GR1 = LR2 = LINRAD2 = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG1 = RADIALGRAD1 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		shape = new createjs.Shape()
		shape.x = 20
		shape.y = 20
		stage.addChild(shape)
		shape.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		)
		shape.graphics.drawRect(0, 0, 100, 100)
		shape.graphics.endFill()
		stage.update()
	}
	RG2 = RADIALGRADFILL2 = function () {
		z()
		$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
		stage = new createjs.Stage("canvas", 420, 500, 30)
		stage.addChild(
				h = new createjs.Shape()
		)
		h.graphics.beginRadialGradientFill(
				["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
		).drawCircle(100, 100, 50)
		stage.update()
	}
	CIRCRG8 = GRADS = function () {
		s = St()
		nip = function () {
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			var h = $h(10, 10).a2(s).drag().al(.8)
			h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
					x1, y1, r1, x2, y2, r2)
					.dc(0, 0, 100)
					.endFill()
			return h
		}
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
			// x--
			// r1++
			// r2++
		}
		setInterval(change, 1000)
		change()
		n = nip()
		h2 = $h(500, 100).a2(s);
		h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
		////////
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
	}//C
	REC8 = GRADS1 = function () {
		s = $St()
		s.h(600, 300).graphics.rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(600, 100).graphics.rf(
				['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(800, 300).rf(
				['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h(400, 300).rf(
				['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
		).dc(0, 0, 100).ef()
		s.h().cir(0, 0, 10)
		///////////////
		x1 = 100
		y1 = 150
		r1 = 20
		x2 = 100
		y2 = 150
		r2 = 100
		h = $h(10, 10).a2(s).drag()
		change = function () {
			
			//  h.remove()
			// h=cjs.shape(10, 10).a2(s).drag()
			h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
			r1++
			r2++
		}
		setInterval(change, 1000)
		change()
		h = s.h(480, 270).drag()
		h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
		s.h(180, 270).drag()
				.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
				{w: 300, h: 100, x: 0, y: -100},
				{w: 100, h: 300})
	}//B+
	OVALS8 = GRADS2 = SETTRANSFORM = function () {
		s = $St(800).bm('me', function (me) {
			b = me
			b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
			m = b.getMatrix()
			function tf(a, b, c, d, e, f, g, h, i) {
				return this.x = a || 0,
						this.y = b || 0,
						this.scaleX = null == c ? 1 : c,
						this.scaleY = null == d ? 1 : d,
						this.rotation = e || 0,
						this.skewX = f || 0,
						this.skewY = g || 0,
						this.regX = h || 0,
						this.regY = i || 0,
						this
			}
		})
		//////
		h = s.h(40, 10, 'b', 16).drag()
		h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
		h.c({
			C: 'b',
			lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
		}).de(400, 100)
		h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
				.de(100, 200, 500, 300)
		h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
	}//B+
///////////
	LR0 = LINRAD = function () {
		__C()
		x = c.ctx()
		x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
		x.fr(0, 0, 100, 100)
	}
	LR1 = LINRAD1 = function () {
		__C()
		x = c.ctx()
		x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
		x.fr(0, 0, 100, 100)
	}
	RG1221 = RADGRAD = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	RG121 = RADGRAD = function () {
		z()
		d = $.c('y', 500)
		c = $.c('y', 500).A()
		c.context.f(
				c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
		)
		c.fr()
	}
	MICK = function () {
		St()
		ct.mick = function (x, y, lf) {
			var ct = this,
					h = ct.h(x, y).drag()
							.c({l: 20, C: 0, lf: lf || 1})
							.dc([50], [200, 0, 100], [100, 100, 100])
			ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
			return h
		}
		s.mick(500, 200)
		s.mick(700, 100, {c1: 'b', c2: 'X'})
		s.mick(700, 300, {c2: 'b'})
		s.mick(100, 100, {y2: 10})
		s.mick(100, 200, {y2: 200})
		s.mick(100, 300, {x2: 100})
	}
	function horrible() {
		RG11 = RADIALGRAD1 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			stage.addChild(shape)
			shape.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.update()
		}
		RG141 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG151 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
		RG161 = RADIALGRADFILL2 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			stage.addChild(
					h = new createjs.Shape()
			)
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			).drawCircle(100, 100, 50)
			stage.update()
		}
		RG711 = RADIALGRAD1 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			stage.addChild(shape)
			shape.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.update()
		}
		RG11 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG171 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
		RG161 = RADIALGRADFILL2 = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			stage.addChild(
					h = new createjs.Shape()
			)
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			).drawCircle(100, 100, 50)
			stage.update()
		}
		RG1441 = RADIALGRADRECT = function () {
			s = cjs.S()
			x1 = 100
			y1 = 150
			r1 = 20
			x2 = 100
			y2 = 150
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
						x1,
						y1,
						r1,
						x2,
						y2,
						r2
				)
						.dr(0, 0, 400, 400)
						.endFill()
				// x--
				r1++
				r2++
			}
			setInterval(change, 1000)
			change()
		}
		RG113 = RADIALGRADCIRC = function () {
			s = cjs.S()
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
						x1,
						y1,
						r1,
						x2,
						y2,
						r2
				)
						.dc(0, 0, 100)
						.endFill()
				// x--
				// r1++
				// r2++
			}
			setInterval(change, 1000)
			change()
			n = nip()
			//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
		}
		RG11 = RADIALGRADCIRC = function () {
			s = $St()
			x1 = 0
			y1 = 0
			r1 = 10
			x2 = 0
			y2 = 0
			r2 = 100
			h = cjs.shape(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.shape(10, 10).a2(s).drag()
				h.rf('b', "o", x1,
						y1,
						r1,
						x2,
						y2,
						r2)
						.dc(0, 0, 100)
						.ef()
				// x--
				// r1++
				// r2++
			}
			setInterval(change, 1000)
			change()
			n = nip()
			//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
		}
		RG13 = RADIALGRAD = function () {
			z()
			stage = SuperStage(500, 500).A()
			shape = stage.Shape().xy(40)
			shape.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG14 = RADIALGRADFILL = function () {
			z()
			$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
			stage = new createjs.Stage("canvas", 420, 500, 30)
			// 2 colors
			shape = new createjs.Shape()
			shape.x = 20
			shape.y = 20
			shape.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			shape.graphics.drawRect(0, 0, 100, 100)
			shape.graphics.endFill()
			stage.addChild(shape)
			// 3 colors
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 140;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			stage.addChild(shape);
			// alpha
			shape = new createjs.Shape();
			shape.x = 20;
			shape.y = 260;
			shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			shape.graphics.drawRect(0, 0, 100, 100);
			shape.graphics.endFill();
			stage.addChild(shape);
		}
	}
}
function filts() {
	BLUR = function () {
		s = $St(500).dg()
		s.mug(function (b) {
			var ag = 0, rg = 100, sp = 0.04
			z()
			s.C('x')
			b.XY(100)
			b.cc()
			T.on('tick', function (e) {
				v = M.sin(ag += sp) * rg
				b.cc('+').fl([blF(v, v, 2)])
				s.u(e)
			})
		})
	}
	BLURFILT = function () {
		z()
		st = $St('z', 800)
		h = $H().XY(100).a2(st).f('r').dc(50)
		fl = h.fl($bF(50, 50, 10))
		bd = fl.getBounds()
		h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
		/*
		 h.startMoving()
		 h.vx = 1
		 h.vy = 1
		 */
	}
	BLURFILT2 = function () {
		z()
		stage = cjs.stage('black', 800).tick().A()
		stage.bm('me',
				function (bm) {
					var blurFilter = new cjs.BlurFilter(5, 10)
					bm.filters = [blurFilter]
					var bounds = blurFilter.getBounds()
					bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
				}
		)
	}
	BLURFILT3 = function () {
		z()
		$l('welcome to BLUFILTER3')
		$l('here we will attempt an animated blur filter')
		st = stage = $St('z', 800)
		var blurAmount = 0, blurMultiple = 40, speed = 0.06
		st.bm('me',
				function (bm) {
					bm.XY(100, 300).dg()
					bF = $bF(5, 10)
					bm.filters = [bF]
					bd = bounds = bF.getBounds()
					bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
					cjs.Ticker.on('tick', function () {
						blur = M.sin(blurAmount += speed) * blurMultiple;
						bm.filters = [$bF(blur, blur, 2)]
						bm.ca()
					})
				})
	}
	ALF1 = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
		examples.showDistractor()
		i = image = new Image();
		i.onload = handleComplete
		i.src = "/chicks.png"
		st = stage = new cjs.Stage("testCanvas")
		function handleComplete() {
			examples.hideDistractor()
			cjs.Touch.enable(st);
			st.enableMouseOver();
			st.MD(handleMouseDown);
			st.MU(handleMouseUp);
			st.MM(handleMouseMove);
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
			t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
			t.textAlign = "center"
			st.A(bl = $Bm(i), t, b = $Bm(i)) //x=0, y=0, quality=1
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = $H().f("#FFFFFF").dc(25)
			cu.cursor = "pointer"
			st.A(cu)
		}
		
		function handleMouseDown() {
			isDrawing = true;
			oldPt = st.m();
			oldMidPt = oldPt;
		}
		
		function handleMouseMove() {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				return st.u()
			}
			midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
			h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp() {
			updateCacheImage(true);
			isDrawing = false
		}
		
		function updateCacheImage(update) {//update the shape's cache
			if (update) {
				h.ca(i)
			} else {
				h.ca(i)
			}//make a new alphaFilter from the shape's cache
			//apply the filter to the bitmap
			b.filters = [$aF(h.cC())]// update the bitmap's cache, to apply its filter
			if (update) {
				b.ca()
			} else {
				b.ca()
			}//update the st
			st.u()
		}
	}
	ALF11 = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		examples.showDistractor()
		st = new cjs.Stage("testCanvas")
		i = new Image()
		i.onload = function () {
			examples.hideDistractor()
			cjs.Touch.enable(st)
			st.enableMouseOver()
			st.MD(function () {
				isDrawing = true;
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			});
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true)
			})
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
			t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
			t.textAlign = "center"
			st.A(bl = $Bm(i), t, b = $Bm(i))
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
		}
		i.src = "/chicks.png"
		function updateCacheImage(update) {
			if (update) {
				h.ca(i)
			} else {
				h.ca(i)
			}
			b.filters = [$aF(h.cC())]
			if (update) {
				b.ca()
			} else {
				b.ca()
			}
			st.u()
		}
	}
	ALF = function () {
		$.i('chicks', function (e, i) {
			St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
			st.A(
					bl = $Bm(i._),
					t = $T('Drag to Reveal!!', "20px Arial", "#FFF").XY(st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i._)
			)
			bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
			bl.ca()
			updateCacheImage(false)
			cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
			st.MD(function () {
				isDrawing = true;
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			});
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true)
			})
			function updateCacheImage(update) {
				if (update) {
					h.ca(i._)
				} else {
					h.ca(i._)
				}
				b.filters = [$aF(h.cC())]
				if (update) {
					b.ca()
				} else {
					b.ca()
				}
				st.u()
			}
		})
	}
	MASK = function () {
		wMb(function (b) {
			z()
			st = $St(600).A(b.TR())
			b.fl(
					$aF(
							$Gx().lf(
									trx(1, 0), [0, 1], 0, 0, 200, 200
							).dr0(400).H().cc(400).cc('*')
					)
			)
			b.cc(400)
		})
	}
	COLOR = clr = function (r) {
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
	COLORMATRIX = function () {
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
	AMR = ALPHAMASKREVEAL = function () {
		z();
		cjs.testCanvas()
		//  cjs.sharedCode()
		var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
				image, bitmap, maskFilter, cursor, text, blur
		examples.showDistractor()
		image = new Image();
		image.onload = handleComplete
		image.src = "/chicks.png"
		stage = new createjs.Stage("testCanvas");
		text = new createjs.Text("Loading...", "20px Arial", "#FFF");
		text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
		text.textAlign = "center"
		function handleComplete() {
			examples.hideDistractor();
			createjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.addEventListener("stagemousedown", handleMouseDown);
			stage.addEventListener("stagemouseup", handleMouseUp);
			stage.addEventListener("stagemousemove", handleMouseMove);
			drawingCanvas = new createjs.Shape();
			bitmap = new createjs.Bitmap(image);
			blur = new createjs.Bitmap(image);
			blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
			blur.cache(0, 0, 960, 400);
			text.text = "Click and Drag to Reveal the Image.";
			stage.addChild(blur, text, bitmap);
			updateCacheImage(false);
			cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cursor.cursor = "pointer";
			stage.addChild(cursor);
		}
		
		function handleMouseDown(event) {
			oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove(event) {
			cursor.x = stage.mouseX;
			cursor.y = stage.mouseY;
			if (!isDrawing) {
				stage.update();
				return;
			}
			var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
			drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
					.beginStroke("rgba(0,0,0,0.2)")
					.moveTo(midPoint.x, midPoint.y)
					.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			oldPt.x = stage.mouseX;
			oldPt.y = stage.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(update) {
			if (update) {
				drawingCanvas.updateCache();
			} else {
				drawingCanvas.cache(0, 0, image.width, image.height);
			}
			maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bitmap.filters = [maskFilter];
			if (update) {
				bitmap.updateCache(0, 0, image.width, image.height);
			} else {
				bitmap.cache(0, 0, image.width, image.height);
			}
			stage.update();
		}
		
		AMR1 = function () {
			cjs.testCanvas()
			var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
					image, bitmap, maskFilter, cursor, text, blur
			examples.showDistractor()
			image = new Image();
			image.onload = handleComplete
			image.src = "/chicks.png"
			stage = new createjs.Stage("testCanvas");
			text = new createjs.Text("Loading...", "20px Arial", "#FFF");
			text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
			text.textAlign = "center"
			function handleComplete() {
				examples.hideDistractor();
				createjs.Touch.enable(stage);
				stage.enableMouseOver();
				stage.addEventListener("stagemousedown", handleMouseDown);
				stage.addEventListener("stagemouseup", handleMouseUp);
				stage.addEventListener("stagemousemove", handleMouseMove);
				drawingCanvas = new createjs.Shape();
				bitmap = new createjs.Bitmap(image);
				blur = new createjs.Bitmap(image);
				blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
				blur.cache(0, 0, 960, 400);
				text.text = "Click and Drag to Reveal the Image.";
				stage.addChild(blur, text, bitmap);
				updateCacheImage(false);
				cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
				cursor.cursor = "pointer";
				stage.addChild(cursor);
			}
			
			function handleMouseDown(event) {
				oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			}
			
			function handleMouseMove(event) {
				cursor.x = stage.mouseX;
				cursor.y = stage.mouseY;
				if (!isDrawing) {
					stage.update();
					return;
				}
				var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
				drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
						.beginStroke("rgba(0,0,0,0.2)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
				oldPt.x = stage.mouseX;
				oldPt.y = stage.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			}
			
			function handleMouseUp(event) {
				updateCacheImage(true);
				isDrawing = false;
			}
			
			function updateCacheImage(update) {
				if (update) {
					drawingCanvas.updateCache();
				} else {
					drawingCanvas.cache(0, 0, image.width, image.height);
				}
				maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
				bitmap.filters = [maskFilter];
				if (update) {
					bitmap.updateCache(0, 0, image.width, image.height);
				} else {
					bitmap.cache(0, 0, image.width, image.height);
				}
				stage.update();
			}
		}
	}
///// function alphaMaskReveal() {
	ALPH = function () {
		Q(function () {
			st = $St().t()
			me = Q.b('me').a2(st).dg()
			h = Q.b('guy').a2(st)//[0]//.a2(st).dg()
			h = $H()
			h.graphics.lf(["#000000", "rgba(0, 0, 0, 0)"],
					[0, 1], 0, 0, 100, 100)
			h.bf('guy')
			h.dr(0, 0, 100, 100);
			h.cache(0, 0, 100, 100)
			me.filters = [new cjs.AlphaMaskFilter(h.cacheCanvas)]
			me.cache(0, 0, 1000, 1000)
		})
	}
	BLR = function () {
		Q(function () {
			st = $St().t()
			h = st.h(100, 100, 'r').cir(50)
			$.in(1, function () {
				h.cF(0, 0, 0, 1, 0, 0, 255, 0)
				h.ca(-50, -50, 100, 150)
			})
			$.in(2, function () {
				f = h.bF(59, 59, 1)
				bd = f.b()
				h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h)
			})
		})
	}
	/*This example demonstrates revealing an image using another image as the
	 mask. The mask is created by drawing a
	 shape, and then caching the shape to make an image with an alpha
	 channel. It is then applied to the image as
	 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
	 */
	REVEAL = function () {
		Q(function () {
			stage = $St().t()
			var isDrawing,
					drawingCanvas, oldPt, oldMidPt,
					displayCanvas, image, bitmap, maskFilter,
					cursor, text, blur;
//    examples.showDistractor();
			image = $.i('me', function (i) {
				image = i[0]
				//  examples.hideDistractor();
				cjs.Touch.enable(stage);
				stage.enableMouseOver();
				stage.addEventListener("stagemousedown", handleMouseDown);
				stage.addEventListener("stagemouseup", handleMouseUp);
				stage.addEventListener("stagemousemove", handleMouseMove);
				drawingCanvas = new createjs.Shape();
				bitmap = new cjs.Bitmap(image);
				blur = new cjs.Bitmap(image);
				blur.filters = [new createjs.BlurFilter(24, 24, 2),
					new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))]
				blur.cache(0, 0, 960, 400);
				text.text = "Click and Drag to Reveal the Image.";
				stage.addChild(blur, text, bitmap);
				updateCacheImage(false)
				cursor = new createjs.Shape(new createjs.Graphics()
						.beginFill("#FFFFFF").drawCircle(0, 0, 25))
				cursor.cursor = "pointer"
				stage.addChild(cursor)
			})
			stage = new cjs.Stage("testCanvas")
			text = new cjs.Text("Loading...", "20px Arial", "#FFF")
			text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40})
			text.textAlign = "center"
			function handleMouseDown(event) {
				oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			}
			
			function handleMouseMove(event) {
				cursor.x = stage.mouseX;
				cursor.y = stage.mouseY;
				if (!isDrawing) {
					stage.update();
					return;
				}
				var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
				drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
						.beginStroke("rgba(0,0,0,0.2)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
				oldPt.x = stage.mouseX;
				oldPt.y = stage.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			}
			
			function handleMouseUp(event) {
				updateCacheImage(true);
				isDrawing = false;
			}
			
			function updateCacheImage(update) {
				if (update) {
					drawingCanvas.updateCache();
				} else {
					drawingCanvas.cache(0, 0, image.width, image.height);
				}
				maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
				bitmap.filters = [maskFilter]
				if (update) {
					bitmap.updateCache(0, 0, image.width, image.height)
				}
				else {
					bitmap.cache(0, 0, image.width, image.height)
				}
				stage.update()
			}
		})
	}
	ALPHAMASKREVEALWORKS = function () {
		z();
		cjs.testCanvas()
		var isDrawing
		cjs.sharedCode()
		//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
		examples.showDistractor()
		i = image = new Image();
		i.onload = handleComplete
		i.src = "/chicks.png"
		st = stage = new cjs.Stage("testCanvas")
		t = text = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
		t.textAlign = "center"
		function handleComplete() {
			examples.hideDistractor()
			cjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.addEventListener("stagemousedown", handleMouseDown);
			stage.addEventListener("stagemouseup", handleMouseUp);
			stage.addEventListener("stagemousemove", handleMouseMove);
			drawingCanvas = new cjs.Shape()
			bitmap = new cjs.Bitmap(image)
			blur = new cjs.Bitmap(image)
			blur.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
			blur.cache(0, 0, 960, 400)
			text.text = "Click and Drag to Reveal the Image.";
			stage.addChild(blur, text, bitmap);
			updateCacheImage(false);
			cursor = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cursor.cursor = "pointer";
			stage.addChild(cursor);
		}
		
		function handleMouseDown(event) {
			oldPt = new cjs.Point(stage.mouseX, stage.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove(event) {
			cursor.x = stage.mouseX;
			cursor.y = stage.mouseY;
			if (!isDrawing) {
				stage.update();
				return;
			}
			var midPoint = new cjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
			drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
					.beginStroke("rgba(0,0,0,0.2)")
					.moveTo(midPoint.x, midPoint.y)
					.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			oldPt.x = stage.mouseX;
			oldPt.y = stage.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(update) {
			if (update) {
				drawingCanvas.ca()
			} else {
				drawingCanvas.ca(0, 0, image.width, image.height);
			}
			maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bitmap.filters = [maskFilter];
			if (update) {
				bitmap.updateCache(0, 0, image.width, image.height);
			} else {
				bitmap.cache(0, 0, image.width, image.height);
			}
			stage.update();
		}
	}
	ALPHAMASKREVEAL1 = function () {
		z();
		var isDrawing = false
		cjs.testCanvas()
		cjs.sharedCode()
		i = $.i("/chicks.png", handleComplete)[0]
		st = new cjs.Stage("testCanvas")
		t = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
		t.textAlign = "center"
		function handleComplete() {
			cjs.Touch.enable(st);
			st.mO()
			st.MD(handleMouseDown)
			st.MU(handleMouseUp)
			st.MM(handleMouseMove)
			drawingCanvas = new cjs.Shape()
			bm = $Bm(i)
			bl = $Bm(i)
			bl.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
			bl.ca(0, 0, 960, 400)
			t.text = "Click and Drag to Reveal the Image.";
			st.A(bl, t, bm)
			updateCacheImage(false)
			cu = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cu.cursor = "pointer";
			st.A(cu)
		}
		
		function handleMouseDown() {
			oldPt = new cjs.Point(st.mouseX, st.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove() {
			var midPoint
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return
			}
			midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
			gx = drawingCanvas.graphics
			gx.ss(40, "round", "round")
			gx.s("rgba(0,0,0,0.2)")
			gx.mt(midPoint.x, midPoint.y)
			gx.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
			oldPt.x = st.mouseX;
			oldPt.y = st.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(upd) {
			if (upd) {
				drawingCanvas.ca()
			}
			else {
				drawingCanvas.ca(0, 0, i.width, i.height)
			}
			maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bm.filters = [maskFilter]
			if (upd) {
				bm.ca(0, 0, i.width, i.height);
			}
			else {
				bm.ca(0, 0, i.width, i.height)
			}
			st.u()
		}
	}
	ALPHAMASKREVEAL0 = function () {
		z();
		var isDrawing
		cjs.testCanvas()
		cjs.sharedCode()
		i = $.i("/chicks.png", handleComplete)[0]
		st = new cjs.Stage("testCanvas")
		t = new cjs.Text("Loading...", "20px Arial", "#FFF")
		t.set({x: st.canvas.width / 2, y: st.canvas.height - 40})
		t.textAlign = "center"
		t.text = "Click and Drag to Reveal the Image.";
		function handleComplete() {
			cjs.Touch.enable(st);
			st.mO()
			st.MD(function () {
				oldPt = new cjs.Point(st.mouseX, st.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			})
			st.MU(function () {
				updateCacheImage(true);
				isDrawing = false
			})
			st.MM(function () {
				var midPoint
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				if (!isDrawing) {
					st.u();
					return
				}
				midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
				h.graphics
						.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
						.mt(midPoint.x, midPoint.y).qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			})
			h = $H()
			st.A(
					bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
					t,
					bm = $Bm(i)
			)
			updateCacheImage(false)
			cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer")
			st.A(cu)
		}
		
		function updateCacheImage(upd) {
			if (upd) {
				h.ca()
			} else {
				h.ca(i)
			}
			bm.filters = [$aF(h.cacheCanvas)]
			if (upd) {
				bm.ca(0, 0, i.width, i.height);
			}
			else {
				bm.ca(i)
			}
			st.u()
		}
	}
	ALPHAMASKREVEAL00 = function () {
		z();
		var isDrawing
		i = $.i('chicks', function () {
			cjs.sharedCode()
			st = $St(800)  //cjs.Touch.enable(st);
			st.mO()
			st.MD(function () {
				_pt = oldPt = cjs.Pt(st.mouseX, st.mouseY);
				_mPt = oldMidPt = oldPt
			})
			st.MU(uCaI)
			st.MM(function () {
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
				h.graphics.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
						.mt(midPoint.x, midPoint.y)
						.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				uCaI()
			})
			h = $H()
			st.A(
					bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
					bm = $Bm(i)
			)
			uCaI()
			cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer").a2(st)
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h.cacheCanvas), '-').ca(i)
			st.u()
		}
	}
	ALPHAMASKREVEAL000 = function () {
		z()
		var _pt, _mPt
		i = $.i('chicks', function (img) {
			_i = img
			bl = $Bm(i)
			bl.fl($bF(24, 24, 2), $cMF($cM(60)))
			bl.ca(960, 400)
			st = $St(800).mO(1).A(bl, bm = $Bm(i))
			h = $H()
			uCaI()
			cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
			st.MD(function () {
				_pt = $Pt(st.mouseX, st.mouseY)
				_mPt = _pt
			})
			st.MU(uCaI)
			st.MM(function () {
				_pt = $Pt(st.mouseX, st.mouseY)
				cu.x = st.mouseX;
				cu.y = st.mouseY;
				mPt = $Pt(_pt.x + st.mouseX >> 1, _pt.y + st.mouseY >> 1);
				h.ss(50).s("rgba(0,0,0,0.2)").mt(mPt.x, mPt.y).qt(_pt, _mPt)
				_pt = V(st.mouseX, st.mouseY)
				_mPt.x = mPt.x;
				_mPt.y = mPt.y;
				uCaI()
			})
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h), '-').ca(i)
		}
	}
	ALPHAMASKREVEAL = function () {
		z()
		var _pt, _mPt
		i = $.i('chicks', function (img) {
			_i = img
			bl = $Bm(i)
			bl.fl($bF(24, 24, 2), $cMF($cM(60)))
			bl.ca(960, 400)
			st = $St(800).mO(1).A(bl, bm = $Bm(i))
			h = $H().ss(50, 'round', 'round')
			uCaI()
			cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
			st.MD(function () {
				_pt = st.m()
				_mPt = _pt
			})
			st.MU(uCaI)
			st.MM(function () {
				cu.XY(st.m())
				_pt = st.m()
				mPt = $Pt(
						(_pt.x + st.m().x) >> 1,
						(_pt.y + st.m().y) >> 1
				)
				h.s('rgba(0,0,0,0.2)').mt(mPt.x, mPt.y).qt(_pt, _mPt)
				uCaI()
				_mPt = V(mPt)
			})
		})
		i = i[0]
		function uCaI(upd) {
			h.ca(i)
			bm.fl($aF(h), '-').ca(i)
		}
	}
	ALPHAMASKREVEALNOCU1 = function () {
		$.i('chicks', function (i) {
			z()
			var _mPt
			st = $St(800).mO(1)
			i = i[0]
			h = $H().s('rgba(0,0,0,0.2)')
					.ss(50, 'round', 'round')
					.ca(i)
			bl = st.Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(960, 400)
			bm = st.Bm(i).fl($aF(h), '-').ca(i)
			st.MD(function () {
				_pt = st.m();
				_mPt = _pt
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i)
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
				bm.fl(h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i).aF(), '-').ca(i)
				_mPt = V(mPt)
			})
		})
	}
	ALPHAMASKREVEALNOCU = function () {
		$.i('chicks', function (i) {
			z()
			i = i[0]
			var _mPt
			st = $St(800).mO(1)
			h = $H().s('rgba(0,0,0,0.2)')
			h.ss(50, 'round', 'round').ca(i)
			bl = $Bm(i)
			bl.a2(st)
			bF = $bF(24, 24, 2)
			cMF = $cMF($cM(60))
			bl.fl(bF, cMF)
			bl.ca(960, 400)
			bm = st.Bm(i).fl(h.aF(), '-').ca(i)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i);
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
				h.ca(i)
				bm.fl(h.aF(), '-')
				bm.ca(i)
				_mPt = V(mPt)
			})
		})
	}
	SCRATCHOFF = function () {
		z();
		var _mPt
		st = $St(1000).mO(1)
		st.bm('chicks', function (bm) {
			h = $H().s(.3)
			h.ss(45, 'r', 'round').ca(bm.image)
			bF = $bF(24, 24, 2)
			cMF = $cMF($cM(60))
			bm.fl(h.aF(), '-').ca(i)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				h.ca(i);
				bm.fl($aF(h), '-').ca(i);
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mx = _pt.x
				my = _pt.y
				mPt = $Pt(
						M.av(_pt.x, mx),
						M.av(_pt.y, my)
				)
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
				bm.fl(h.aF(), '-').ca(i)
				_mPt = V(mPt)
			})
		})
	}
	ERASEFL1 = function () {
		$.i('chicks', function (e, i) {
			St()//cjs.Touch.enable(st)  //st.mO(1) !!!
			var isDrawing
			st.A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.trDr()
			st.MD(function () {
				oldPt = st.m();
				oldMidPt = oldPt;
			});
			st.MU(function () {
				b.fl2($AF(h.ca(i))).ca()
			})
			st.MM(function () {
				var midPoint
				if (!st._dr) {
					return st.u()
				}
				midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
				h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
				oldPt.x = st.mouseX;
				oldPt.y = st.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				b.fl2($AF(h.ca(i))).ca()
			})
			//cursor
			st.h().f("#FFFFFF").dc(25).cu('pointer').bM()
		})
	}
	ERASEFL11 = function () {
		$.i('chicks', function (e, i) {
			St().trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			).m({
						d: function () {
							oldPt = st.m();
							oldMidPt = oldPt;
						},
						u: function () {
							b.fl2($AF(h.ca(i))).ca()
						},
						m: function () {
							var midPoint
							if (!st._dr) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							b.fl2($AF(h.ca(i))).ca()
						}
					}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
		})
	}
	ERASEDOT = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			st.m({
				d: function () {
					oldPt = st.m();
					oldMidPt = oldPt;
				},
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				m: function () {
					var midPoint
					if (!st._dr) {
						return st.u()
					}
					midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
					oldPt = st.m()
					oldMidPt.x = V(midPoint)
					b.aF2(h.ca(i)).ca()
				}
			})
			cu = st.h('w').dc(25).cu('N')//.bM()
		})
	}
	ERASEFL111 = function () {
		$.i('chicks', function (e, i) {
			St()
			st.enableMouseOver = true
			st.trDr().A(
					$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
			)
			cu = st.h('w').dc(25).cu('N').bM()
			st.m({
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				d: function () {
					mt = st.m()
				},
				m: function () {
					if (st._dr) {
						b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
					}
				}
			})
		})
	}
	ERASEFLWORKS = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			h = $H().ss(40, 'r', 'r').C(.9).ca(i)
			b = $Bm(i).aF2(h)
			st.A(
					$Bm(i).al(.2).fl($FB(40), $CMF(20, -20, 80, 10), $FB(40)),
					$T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
					b)
			st.m({
				u: function () {
					b.fl2($AF(h.ca(i))).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._dr) {
						h.dl(m, st.m()).ca(i)
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
	ERASEFL = function () {
		$.i('chicks', function (e, i) {
			St().trDr()
			var m
			//invisible ink!!!
			//so u constantly re-update the top layer's filter
			//it is an alpha filter so it only shows where u painted
			//so it starts of invisible
			//you can 'draw the layer' on
			st.A(
					$Bm({
						i: i,
						fl: [$CMF(20, -20, 80, 10), $FB(40)],
						al: .2
					}),
					$Tc('Smudge!', 100, 'r', st),
					b = $Bm({
						i: i,
						aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
					})
			)
			st.m({
				u: function () {
					b.fl2(
							$AF(h.ca())
					).ca()
				},
				d: function () {
					m = st.m()
				},
				m: function () {
					if (st._md) {
						h.dl(m || st.m(), st.m()).ca()
						b.aF2(h).ca()
						m = st.m()
					}
				}
			})
		})
	}
	FT0 = FILTERS = function () {
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
	FT1 = FILTERS = function () {
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
	BRUSH = BLOTCHY = function () {
		z();
		var _mPt
		st = $St(1000)
		st.mO(1)
		h = $h().a2(st)
		h.ss('o', 40, 's', 'bevel', 1)
		st.bm('chicks', function (bm) {
			// _i= i = i[0]
			bm.al(.2)
			st.A(bm)
			st.MD(function () {
				_mPt = _pt = st.m()
			})
			st.MU(function () {
				_mPt = null
			})
			st.MM(function () {
				if (!_mPt) {
					return
				}
				_pt = st.m()
				mx = _pt.x
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
				h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
				_mPt = V(mPt)
			})
		})
	}
	Q21 = function () {
		var pt
		st = $St(1000).mO(1)
		h = st.h().ss('g', 40, 's', 'b', 1)
		st.MD(function () {
			pt = st.m()
		})
		st.MU(function () {
			pt = 0
		})
		st.MM(function () {
			if (pt) {
				_pt = st.m();
				mx = _pt.x;
				my = _pt.y
				mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
				h.mt(mPt.x, mPt.y).qt(_pt, pt)
				pt = V(mPt)
			}
		})
		$.i('chicks', function (i) {
			st.Bm(i[0]).al(.2)
		})
	}
}
function official() {
	PRM = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	PRM1 = PROMOTE = function () {
		z()
		cjs.utils()
		function ClassA(name) {
			this.name = name
		}
		
		ClassA.prototype.greet = function () {
			return "Hello " + this.name
		} //a = new ClassA('john')
		function ClassB(name, punctuation) {
			this.ClassA_constructor(name)
			this.punctuation = punctuation
		}
		
		cjs.extend(ClassB, ClassA)
		ClassB.prototype.greet = function () {
			return this.ClassA_greet() + this.punctuation
		}
		cjs.promote(ClassB, "ClassA")
		b = new ClassB("World", "!?!")
		$l(b.greet())  // Hello World!?!
	}
	DSTR = DISTRACTORDOESNOTHING = function () {
		st = stage = $St()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
	}
//	function transform() {
//offical examples:
	TRF = TRANSF = function () {
		z()
		degToRad = Math.PI / 180;
		cjs.testCanvas()
		//cjs.sharedCode()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
		stage = new createjs.Stage("testCanvas")
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		var img = new Image();
		img.onload = handleImageLoad;
		img.src = "/chicks.png";
		function handleImageLoad(evt) {
			examples.hideDistractor();
			var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
			sliceWidth = imgWidth / sliceCount;
			sliceContainer = new createjs.Container();
			sliceContainer.x = stage.canvas.width / 2;
			for (var i = 0; i < sliceCount; i++) {
				var slice = new createjs.Bitmap(img);
				slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
				slice.cache(0, 0, sliceWidth, imgHeight);
				slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
				sliceContainer.addChild(slice);
			}
			var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
			slider.on("change", handleSliderChange, this);
			stage.addChild(sliceContainer, slider);
			updateEffect(slider.value);
		}
		
		function handleSliderChange(evt) {
			updateEffect(evt.target.value);
		}
		
		function updateEffect(value) {
			var l = sliceContainer.getNumChildren();
			for (var i = 0; i < l; i++) {
				var slice = sliceContainer.getChildAt(i);
				slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
				if (i % 2) {
					slice.skewY = value;
				} else {
					slice.skewY = -value;
					slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
				}
				slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
				slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
				slice.updateCache();
			}
			stage.update();
		}
		
		TRAN1 = function () {
			degToRad = Math.PI / 180;
			cjs.testCanvas()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
			stage = new createjs.Stage("testCanvas")
			stage.enableMouseOver();
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			var img = new Image();
			img.onload = handleImageLoad;
			img.src = "/chicks.png";
			function handleImageLoad(evt) {
				examples.hideDistractor();
				var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
				sliceWidth = imgWidth / sliceCount;
				sliceContainer = new createjs.Container();
				sliceContainer.x = stage.canvas.width / 2;
				for (var i = 0; i < sliceCount; i++) {
					var slice = new createjs.Bitmap(img);
					slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
					slice.cache(0, 0, sliceWidth, imgHeight);
					slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
					sliceContainer.addChild(slice);
				}
				var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
				slider.on("change", handleSliderChange, this);
				stage.addChild(sliceContainer, slider);
				updateEffect(slider.value);
			}
			
			function handleSliderChange(evt) {
				updateEffect(evt.target.value);
			}
			
			function updateEffect(value) {
				var l = sliceContainer.getNumChildren();
				for (var i = 0; i < l; i++) {
					var slice = sliceContainer.getChildAt(i);
					slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
					if (i % 2) {
						slice.skewY = value;
					} else {
						slice.skewY = -value;
						slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
					}
					slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
					slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
					slice.updateCache();
				}
				stage.update();
			}
		}
	}
	TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
		z()
		angle = 0
		img = $.img('me', handleImageLoad)[0]
		function stop() {
			cjs.Ticker.removeEventListener("tick", tick)
		}
		
		function handleImageLoad() {
			canvas = $.canvas('p', 960, 400).id("testCanvas").A()
			stage = cjs.stage(canvas)
			stage.autoClear = true;
			bmp = new createjs.Bitmap(img)
					.rXY(img.width >> 1, img.height >> 1)
					.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
			stage.A(bmp).update();
			cjs.Ticker.timingMode = cjs.Ticker.RAF
			cjs.tick(tick)
		}
		
		function tick(event) {
			angle += 0.01
			var value = Math.sin(angle) * 360
			bmp.rot(value).sXY(value / 360)
			stage.update(event)
		}
		
		/*
		 TFR2 = TRANSFORMSIMPLE = function () {
		 z()
		 angle = 0
		 img = $.img('me', handleImageLoad)[0]
		 function stop() {
		 cjs.Ticker.removeEventListener("tick", tick)
		 }
		
		 function handleImageLoad() {
		 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
		 stage = cjs.stage(canvas)
		 stage.autoClear = true;
		 bmp = new createjs.Bitmap(img)
		 .rXY(img.width >> 1, img.height >> 1)
		 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		 stage.A(bmp).update();
		 cjs.Ticker.timingMode = cjs.Ticker.RAF
		 cjs.tick(tick)
		 }
		
		 function tick(event) {
		 angle += 0.01
		 var value = Math.sin(angle) * 360
		 bmp.rot(value).sXY(value / 360)
		 stage.update(event)
		 }
		 }
		 */
	}
	BUBBLE = function () {
		z()
		stage = cjs.stage(500, 500).tick().A()
		output = new createjs.Text(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		background = new cjs.Shape().N("background")
		background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
		label = new cjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
				.N('label')
				.tA("center")
				.tB("middle")
		button = new cjs.Container().XY(20).N('button').A(background, label)
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		stage.A(button, output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.e([stage, button, label, background], function (target) {
			target.on("click", handleClick, false);
			target.on("click", handleClick, true)
		})
		stage.update()
	}
	BUBBLE = function () {
		z()
		stage = cjs.stage(500, 500).tick().A()
		output = new createjs.Text(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		background = new createjs.Shape().N("background")
		background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
		label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
				.N('label')
				.tA("center")
				.tB("middle")
		button = new cjs.Container().XY(20).N('button').A(background, label)
		// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
		// button.mouseChildren = false;
		stage.A(button, output)
		// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
		_.each([stage, button, label, background], function (target) {
			target.on("click", handleClick, false);
			target.on("click", handleClick, true)
		})
		stage.update()
	}
}
function _pre() {
	cjs.src = _.src
	$S$ = function () {
		return st = _$St().t()
	}
	obX = function (o) { // ************
		var g = G(arguments);
		return !O(o) ? {}
				: g.p ? o.clone()
				: o
	}
	guyIt = {id: "guy", src: "/guy.png"}
	myIt = {id: "myImage", src: "/me.png"}
	mf1 = [myIt, guyIt];

//	mf2 = [$it("me"), $it(guyIt)]
	mf3 = ["me", guyIt];
	mf4 = [myIt, guyIt];
	mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
}
CHARCOAL = BLF2 = function () {
	var isDrawing
	st = $St()
	t = $T("Loading...")
	t.set({x: st.W() / 2, y: st.H() - 40})
	t.textAlign = "center"
	$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
		i = img[0]
		h = $H().a2(st)
		bm = new cjs.Bitmap(i)
		bl = new cjs.Bitmap(i)
		bl.filters = [
			new cjs.BlurFilter(24, 24, 2),
			new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
		]
		bl.cache(0, 0, 960, 400)
		t.text = "Click and Drag to Reveal the Image.";
		st.A(bl, t, bm)
		st.A(cu = $H('r').dc(25))
		cu.cursor = "pointer"
		st.enableMouseOver()
		st.on("stagemousedown", function (e) {
			o = new cjs.Point(st.mouseX, st.mouseY)
			oM = o;
			isDrawing = true
		})
		st.on("stagemouseup", function (e) {
			isDrawing = false
		})
		st.on("stagemousemove", function (e) {
			var m
			cu.x = st.mouseX;
			cu.y = st.mouseY;
			if (!isDrawing) {
				st.u();
				return
			}
			m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
			$l('draw')
			h.graphics.ss(40, "round", "round");
			h.graphics.s("rgba(0,0,0,0.2)")
			// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
			h.graphics.mt(m.x, m.y)
			h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
			o.x = st.mouseX;
			o.y = st.mouseY;
			oM.x = m.x;
			oM.y = m.y
		})
	})
	function altErr() {
		BLF1xxx = function () {
			/*This example demonstrates revealing an image using another image as the
			 mask. The mask is created by drawing a
			 shape, and then caching the shape to make an image with an alpha
			 channel. It is then applied to the image as
			 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
			 */
			st = $St()
			var isDrawing
			$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
				i = img[0]
				h = $H().a2(st)
				bm = new cjs.Bitmap(i)
				bl = new cjs.Bitmap(i)
				bl.filters = [
					new cjs.BlurFilter(24, 24, 2),
					new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
				]
				bl.cache(0, 0, 960, 400)
				//t.text = "Click and Drag to Reveal the Image.";
				st.A(bl, t, bm)
				updateCacheImage(false)
				st.A(cu = $H('r').dc(25))
				cu.cursor = "pointer"
				st.enableMouseOver()
				st.on("stagemousedown", function (e) {
					oldPt = new cjs.Point(st.mouseX, st.mouseY);
					oldMidPt = oldPt;
					isDrawing = true;
				})
				st.on("stagemouseup", function (e) {
					updateCacheImage(true);
					isDrawing = false
				})
				st.on("stagemousemove", function (e) {
					var midPoint
					cu.x = st.mouseX;
					cu.y = st.mouseY;
					if (!isDrawing) {
						st.u();
						return;
					}
					midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
					h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
					h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
					oldPt.x = st.mouseX;
					oldPt.y = st.mouseY;
					oldMidPt.x = midPoint.x;
					oldMidPt.y = midPoint.y;
					updateCacheImage(true)
				})
			})
			function updateCacheImage(upd) {
				if (upd) {
					h.updateCache()
				}
				else {
					h.ca(0, 0, i.width, i.height)
				}
				mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
				bm.filters = [mskF]
				if (upd) {
					bm.ca(i)
				}
				else {
					bm.ca(i)
				}
				st.u()
			}
		}
		BLFxxx = function () {
			$.i('me', function (img) {
				iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
				s = $St();
				s.enableMouseOver()
				h = $H().a2(s)
				i = img[0]
				bm = $Bm(i)
				bl = $Bm(i)
				bl.Fl($bF(24, 24, 2), i)
				bl.Fl($cMF($cM(60)), i)
				bl.ca(0, 0, 960, 400)
				s.A(bl, bm)
				h.ca(i)
				bm.fl($aF(s.cc()), i);
				s.u()
				// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
				s.MU(function (e) {
					iDr = 0
					h.ca(i)
					bm.fl($aF(s), i)
					s.u()
				})
				s.MD(function (e) {
					iDr = oM = o = s.m()
				})
				s.MM(function (e) {
					var mP             //   cu.x = s.mX(); cu.y = s.mY()
					if (!iDr) {
						s.u();
						return
					}
					mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
					h.ss(40, "round", "round")
							.C("rgba(0,0,0,0.2)")
							.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
					o = s.m()
					oM = V(mP)
					h.ca(i)
					bm.fl($aF(s.cc()), i);
					s.u()
				})
			})
		}
	}
}
MX00 = M2D = CJSM2D = function () {
	
	/*
	 Matrix2D Class
	 Defined in: Matrix2D:41
	 Module: EaselJS
	 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
	
	 This matrix can be visualized as:
	
	 [ a  c  tx
	 b  d  ty
	 0  0  1  ]
	 Note the locations of b and c.
	
	 Constructor
	 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
	 Defined in Matrix2D:41
	 Parameters:
	
	 [a=1] Number optional
	 Specifies the a property for the new matrix.
	
	 [b=0] Number optional
	 Specifies the b property for the new matrix.
	
	 [c=0] Number optional
	 Specifies the c property for the new matrix.
	
	 [d=1] Number optional
	 Specifies the d property for the new matrix.
	
	 [tx=0] Number optional
	 Specifies the tx property for the new matrix.
	
	 [ty=0] Number optional
	 Specifies the ty property for the new matrix.
	
	 IndexMethodsProperties
	 Item Index
	 Methods
	
	 append
	 appendMatrix
	 appendTransform
	 clone
	 copy
	 decompose
	 equals
	 identity
	 invert
	 isIdentity
	 prepend
	 prependMatrix
	 prependTransform
	 rotate
	 scale
	 setValues
	 skew
	 toString
	 transformPoint
	 translate
	 Properties
	
	 a
	 b
	 c
	 d
	 DEG_TO_RAD static
	 identity static
	 tx
	 ty
	 */
	m = $Mx()
	$l(m)
	$St().bm('me', function (bm) {
		b = bm.XY(400, 200)
		p = b.getConcatenatedDisplayProps();
		$l(p)
		cm = b.getConcatenatedMatrix()
		$l(cm)
	})
}
LAYYS = USINGLAYERSINEASEL9 = function () {
	z()
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sXY(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.button('safd', function () {
		s.sXY(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sXY(.5)
			SL(bm)
		})
	}
	
	USINGLAYERSINEASEL9 = function () {
		z()
		s = St(500).A()
		s.bm('me', function (bm) {
			b = bm
			bm.sXY(3)
			drawCar()
			s.tick(function () {
				b.x(-1 * (g.x() * 2))
				b.y(-1 * (g.y() * 2))
			})
		})
		bt = $.button('safd', function () {
			s.sXY(2)
		}).A()
		function drawCar() {
			s.bm('guy', function (bm) {
				g = bm
				bm.sXY(.5)
				SL(bm)
			})
		}
	}
}
MGA=MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
ELM=ELEMENTS = function () {
	z()
	div = $.div('red', 400, 400).P('a').A().A($.input())
	s = stage = createjs.stage('yellow', 1000).tick().A()
	elem = new createjs.DOMElement(div[0])
	//stage.A(el)
	// tw(el, [{x:300,y:300},2000])
	// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}
MENTS = function () {
	z()
	div = $.div('red', 400, 400).P('a').A().A($.input())
	s = stage = createjs.stage('yellow', 1000).tick().A()
	elem = new createjs.DOMElement(div[0])
	//stage.A(el)
	// tw(el, [{x:300,y:300},2000])
	// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}
EASELPHYS = function () {
	i = cjs.DisplayObject.prototype
	i.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	i.go = function () {
		$t(this.move())
	}
	$St().bm('me', function (b) {
		b.go(10, 10)
		$.t(function () {
			$l(b.inStage())
		})
	})
}
HGXX = function () {
	W()
	h = w.i.h()
	h.graphics.ss(40, "round", "round")
	h.C("rgba(0,0,0,0.2)").mt(100, 100)
	h.graphics.curveTo(200, 500, 600, 300)
}
LAYZ = PLAX = function () {
	st = $St(500)
	st.bm('me', function (bm) {
		me = bm.sXY(.5)
		st.bm('guy', function (bm1) {
			guy = bm1.sXY(.5).drag()//SL(bm)
			$t(function () {
				me.X(guy.X() * 1.6).Y(guy.Y() * 1.6)
			})
		})
	})
	$.bt('safd', function () {
		st.sXY(2)
	})
}
CVTXX = function () {
	return $.d().A($.c(960, 400).id("testCanvas"))
}
GRIDD =NEEDSDRAWSQUARE= function () {
	St()
	ct = st.ct()
	ct.SL()
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.t(rows * cols, function (i) {
		drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
		)
	})
	st.update()
}//A-
function toWeb(){
TNGL = TANGLE = function () {
	z()
	a = $.dA('r', 50, 50).XY(50).A().pad(10)
	b = $.dA('b', 100, 100).XY(100).A().pad(10)
	c = $.dA('g', 200, 200).XY(200).A().pad(10)
	d = $.dA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}}
CNC = CONNECT = function () {
	St() //m$$('location=location')
	cjs.circ = function (r, z, x, y) {
		gx = new cjs.Graphics()
		if (!S(r)) {
			return cjs.circ('red', r, z, x)
		}
		z = _.tN(z, 32)
		x = _.tN(x, 100)
		y = _.tN(y, 100)
		gx.ss(z / 8).f(r, 'black').dc(z)
		return new cjs.Shape(gx).XY(x, y)
	}
	cjs.circ = function (x, y, r, c, C) {
		var h = $h()
		if (O(x)) {
			return cjs.circ(x.x, x.y, x.r, x.c, x.C)
		}
		x = _.tN(x)
		y = _.tN(y)
		r = _.tN(r, 8)
		h.cir(x, y, r, c || 'w', C || 'z')
		SL(h)
		return h
	}
	// st= $St('p', 1000)
	pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	st.A(pink)
	ct = $Ct()
	st.A(ct)
	green = cjs.circ(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.circ(100, 'yellow', 'purple').XY(250)
	red = cjs.circ(40, 'red', 'purple').XY(200, 100)
	orange = cjs.circ(20, 'orange', 'purple').XY(300)
	ct.A(green, yellow, red, orange)
	LS(yellow, ct)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, ct)
	SL(orange, red)
	st.u()
}
ST22 = function () {
	$.header().K("EaselJS").A(
			$.h1('nextStage'),
			$.p("This is an example")).A()
	c1 = $.canvas('y', 540, 260).id('canvasOne')//.P('a').top(0).right(0).bor('1px solid grey').A() // background: 'none',
	c2 = $.canvas('o', 540, 260).id('canvasTwo')//.P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	topStage = stageSetup("canvasTwo", handleEvt)
			.N("topStage").eMO()
			.A(makeSquare(375, 30, "pink", handleEvt))
			.next(bottomStage)
	topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	function stageSetup(canvasName, handler) {
		s = stage = $St(canvasName)
		//stage.addEventListener("stagemousemove", handler);	// too noisy
		_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
			s.on(ev, handler)
		})
		s.log = []
		return s
	}
	
	function makeSquare(x, y, color, handler) {
		var shape = cjs.shape().N('square').XY(x, y)
		shape.graphics.f(color).dr(0, 0, 135, 135)
		var cont = cjs.container().N('container').A(shape)
		_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
			cont.on(ev, handler)
		})
		cont.cursor = "pointer"
		return cont
	}
	
	function handleEvt(evt) {
		var target = evt.target,
				stage = target.getStage(),
				log = stage.log
		log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		+ " y:" + evt.stageY.toFixed(0))
		while (log.length > 12) {
			log.shift()
		}
		stage.text.text = log.join("\n")
		if (evt.type == "mouseover") {
			target.alpha = 0.5
		}
		if (evt.type == "mouseout") {
			target.alpha = 1
		}
	}
	
	/*
	
	 $.header().K("EaselJS").A(
	 $.h1('nextStage'),
	 $.p("This is an example")).A()
	 c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
	 .right(0).bor('1px solid grey').A() // background: 'none',
	 c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
	 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
	 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
	 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
	 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
	 topStage = stageSetup("canvasTwo", handleEvt)
	 .N("topStage").eMO()
	 .A(makeSquare(375, 30, "pink", handleEvt))
	 .next(bottomStage)
	 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
	 function stageSetup(canvasName, handler) {
	 s = stage = new cjs.Stage(canvasName).tick()
	 //stage.addEventListener("stagemousemove", handler);	// too noisy
	 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
	 s.on(ev, handler)
	 })
	 s.log = []
	 return s
	 }
	
	 function makeSquare(x, y, color, handler) {
	 var shape = cjs.shape().N('square').XY(x, y)
	 shape.graphics.f(color).dr(0, 0, 135, 135)
	 var cont = cjs.container().N('container').A(shape)
	 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
	 cont.on(ev, handler)
	 })
	 cont.cursor = "pointer"
	 return cont
	 }
	
	 function handleEvt(evt) {
	 var target = evt.target,
	 stage = target.getStage(),
	 log = stage.log
	 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
	 + " y:" + evt.stageY.toFixed(0))
	 while (log.length > 12) {
	 log.shift()
	 }
	 stage.text.text = log.join("\n")
	 if (evt.type == "mouseover") {
	 target.alpha = 0.5
	 }
	 if (evt.type == "mouseout") {
	 target.alpha = 1
	 }
	 }
	 */
}
DRG=function(){
	h = $St().h(300, 300)
	h.bf('me', function (h) {
		h.dc(300).drag()
	})
}
function stage() {
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	CONNECT = function () {
		z();//m$$('location=location')
		stage = createjs.stage(1000).tick().A()
		pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		stage.A(pink)
		container = new createjs.Container()
		stage.A(container)
		green = cjs.circle(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circle(100, 'yellow', 'purple').XY(250)
		red = cjs.circle(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circle(20, 'orange', 'purple').XY(300)
		container.A(green, yellow, red, orange)
		LS(yellow, container)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, container)
		SL(orange, red)
	}
	MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$.div('b', 50, 50).A()
		stage = s = cjs.stage(1600, 1000).tick().A()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('e', co)
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
			c.bm('me',
					function (b) {
						b.sXY(.2).XY(100, 80)
						b.on(click, function () {
							$l('lit')
						}, '/')  //on click, log('lit'), just once (remove listener)!
					})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (bm) {
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function () {
					$l('mid')
				}, '-')  //on click, log('mid'), and stop prop
			})
			c.bm('me', function (bm) {
				bm.sXY(1.5)
				bm.on('click', function () {
					$l('big')
				})  //on click, log('big')
			})
			//on click, log('con')
			c.on('click', function () {
				$l('con')
			})
		})
		stage.ct(function (c) {
					var vn = 0,
							rvn = 0,
							on = 0,
							ron = 0
					c.X(200)
					c.mug(
							function (b) {
								b.sXY(.8).XY(200, 80)
							})
					c.mug(
							function (b) {
								b.sXY(.8).XY(100, 280)
							})
					c.mg(
							function (b) {
								b.sXY(.8).XY(340, 180)
							})
					//this shows over/out vs rollover/rollout
					//over/out get retriggered when switching between connected sprites
					//rollover/rollout does not because it is still touching 'something'
					c.on('mouseover', function () {
						c.X(10, '+');
						$l('v: ' + vn++)
					})
					c.on('rollover', function () {
						c.X(20, '-');
						$l('rv: ' + rvn++)
					})
					c.on('mouseout', function () {
						c.Y(10, '+');
						$l('o: ' + on++)
					})
					c.on('rollout', function () {
						c.Y(20, '-');
						$l('ro: ' + ron++)
					})
				}
		).MV(40)
		stage.container(function (container, stage) {
			container.X(700)
			container.mug(function (bm) {
				bm.sXY(.8).XY(200, 80)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(100, 280)
			})
			container.mug(function (bm) {
				bm.sXY(.8).XY(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			container.on('mouseover', function () {
				$l('mouseover')
				this.sXY(.01, '+')
			})
			container.on('rollover', function () {
				$l('rv')
				this.sXY(.01, '+')
			})
			container.on('mouseout', function () {
			})
			container.on('rollout', function () {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40) //??? mouse events? speed for some mouse checking thing
		stage.container(function (container, stage) {
			container.x = 1400
			container.bm('me', function (bm) {
				
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				SL(bm, stage)
			})
		})
	}
	MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		$.div('blue', 50, 50).A()
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			//b.sxy(.2).xy(100,80)
			//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		})
		//make a container
		stage.ct(function (c, s) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			c.bm('me', function (b) {
				b.sXY(.4).XY(100, 180)
				//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			})
			c.b('me', function (b) {
				b.sXY(1.5)
				// b.o('$',fL('big'))  //on click, log('big')
			})
			//on click, log('con')
			//c.o('$',  fL('con'))
		})
		stage.ct(function (c) {
			var vn = 0,
					rvn = 0,
					on = 0,
					ron = 0
			c.X(200)
			c.mug(
					function (b) {
						b.sXY(.8).XY(200, 80)
					})
			c.mug(
					function (b) {
						b.sXY(.8).XY(100, 280)
					})
			c.mg(
					function (b) {
						b.sXY(.8).XY(340, 180)
					})
			//this shows over/out vs rollover/rollout
			//over/out get retriggered when switching between connected sprites
			//rollover/rollout does not because it is still touching 'something'
			// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		})//.MV(40)
		stage.ct(function (c, s) {
			c.x(700)
			c.mg(function (b) {
				b.sxy(.8).xy(200, 80)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(100, 280)
			})
			c.mg(function (b) {
				b.sxy(.8).xy(340, 180)
			})
			//this example shows which sprites are acted upon with over/rollover
			//over only affects one
			//rollover affects ALL
			//if you enter a sprite from outside, they all grow (via rollover),
			//and the one sprite grows double (via over)
			c.o('v', function (g, e) {
				$l('v')
				g.sxy(.01, '+')
			})
			c.o('rv', function (g, e) {
				$l('rv')
				g.sxy(.01, '+')
			})
			c.o('o', function (q, e, g) {
			})
			c.o('ro', function (q, e, g) {
			})
			// in summary,
			// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			// BUT, they will all recieve events separately
		}).MV(40)
		stage.ct(function (container, stage) {
			container.X(1400)
			container.bm('me', function (bm) {
				
				//make the little me slide the entire container
				//it acts as a handle! (for its container)
				lit = bm.sXY(.2).XY(100, 80)
				SL(bm, container)
				container.bm('me', function (bm) {
//big me will scale the little me
					big = bm.sXY(2).XY(100, 180)
					SC(bm, lit)
					container.bm('me', function (bm) {
						bm.sXY(.6).XY(150, 180)
						SL(bm)
						RT(bm, big)
					})
				})
			})
//guy slides stage
			container.bm('guy', function (bm) {
				bm.sXY(.4).XY(100, 180)
				createjs.bindSlide(bm, stage)
			})
		})
	}
	MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		z()
		$l('matrix')
		stage = s = createjs.stage(1600, 1000).A().tick()
		// on stage enter, change background color, though you
		// cant see it here because stage fills screen
		// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		stage.on('mouseenter', function () {
			$('body').C($r())
		})
		stage.A(container = c = new createjs.Container())
		container.bm('me', function (bm) {
			bm.sXY(.2).XY(100, 80)
			bm.on('click', function () {
				$l('lit')
			}, this, true) //just once
		})
		//make a container
		stage.container(function (container, stage) {
			
			//the little me clicks do not hit the 'big' me underneath it.  that's normal.
			//but it does hit the container.  but this example shows off 'remove', so it only hits once
			//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				bm.sXY(.4).XY(100, 180)
				bm.on('click', function (e) {
					$l('mid')
					e.stopPropagation()
				})
			})
			container.bm('me', function (bm) {
				bm.sXY(1.5)
						.on('click', function () {
							$l('big')
						})
			})
			container.on('click', function () {
				$l('con')
			})
		})
	}
	GRID = function () {
		z()
		stage = s = createjs.stage(1000, 1000).tick().A()
		container = c = new createjs.Container()
		stage.A(container)
		cjs.bindSlide(container)
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.times(rows * cols, function (i) {
			drawSquare(container,
					sqSP * (i % cols),
					sqSP * Math.floor(i / cols)
			)
		})
		function drawSquare(container, x, y) {
			var rectangle = new createjs.Shape()
			container.A(rectangle)
			rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
			if (x) {
				rectangle.X(x)
			}
			if (y) {
				rectangle.Y(y)
			}
			return rectangle
		}
	}
	TXSH = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	TWOSTAGES = function () {
		z()
		$.hdr().K("EaselJS").A(
				$.h1('nextStage'),
				$.p("This is an example")).A()
		c1 = $.c('y', 540, 260).id('canvasOne').P('a').top(0)
				.right(0).bor('1px solid grey').A() // background: 'none',
		c2 = $.c('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		topStage = stageSetup("canvasTwo", handleEvt)
				.N("topStage").eMO()
				.A(makeSquare(375, 30, "pink", handleEvt))
				.next(bottomStage)
		topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		function stageSetup(canvasName, handler) {
			s = stage = new cjs.Stage(canvasName).tick()
			//stage.addEventListener("stagemousemove", handler);	// too noisy
			_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
				s.on(ev, handler)
			})
			s.log = []
			return s
		}
		
		function makeSquare(x, y, color, handler) {
			var shape = cjs.shape().N('square').XY(x, y)
			shape.graphics.f(color).dr(0, 0, 135, 135)
			var cont = cjs.ct().N('container').A(shape)
			_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				cont.on(ev, handler)
			})
			cont.cursor = "pointer"
			return cont
		}
		
		function handleEvt(evt) {
			var target = evt.target,
					stage = target.getStage(),
					log = stage.log
			log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
			+ " y:" + evt.stageY.toFixed(0))
			while (log.length > 12) {
				log.shift()
			}
			stage.text.text = log.join("\n")
			if (evt.type == "mouseover") {
				target.alpha = 0.5
			}
			if (evt.type == "mouseout") {
				target.alpha = 1
			}
		}
	}
}
PROMOTE = function () {
	z()
	cjs.utils()
	function ClassA(name) {
		this.name = name
	}
	
	ClassA.prototype.greet = function () {
		return "Hello " + this.name
	} //a = new ClassA('john')
	function ClassB(name, punctuation) {
		this.ClassA_constructor(name)
		this.punctuation = punctuation
	}
	
	cjs.extend(ClassB, ClassA)
	ClassB.prototype.greet = function () {
		return this.ClassA_greet() + this.punctuation
	}
	cjs.promote(ClassB, "ClassA")
	b = new ClassB("World", "!?!")
	$l(b.greet())  // Hello World!?!
}
DISTRACT = function () {
	z()
	$.d().A($.c(960, 400).id("testCanvas"))
	cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	st = new cjs.Stage("testCanvas")
}