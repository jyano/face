$l('easelApps')
$L(

		'mouseApps',
		'loader','layers','dobApps','bmapApps',
		'drawApps'
		
)

function mouseApps(){
	MU = HITC = HITCIRCLES = function () {
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(rndLoc(), rndLoc()).f(rndHSL()).dc(30).a2(ct)
		})
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
		})
		function rndLoc() {
			return M.r() * 300 - 150
		}
		
		function rndHSL() {
			return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
		}
	}
	MU0 = ENTERST = function () {
		$St()
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
		$St()
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
	BUB = BUBBLE = function () {
		stage = $St()
		output = new createjs.Text(
				"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
				"13px courier").lWH(280, 13).XY(190, 10)
		background = new createjs.Shape().N("background")
		background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
		label = new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
				.N('label')
				.tA("center")
				.tB("middle")
		button = new createjs.Container().XY(20).N('button').A(background, label)
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
	MOUSEENTERSTAGE = function () {
		z()
		stage = s = cjs.stage(500, 500).A().tick()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	HANDLEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
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
	REMOVEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
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
//
	testShape = function () {
		z()
		stage = createjs.stage(600).tick().A()
		shape = new createjs.Shape()
		stage.A(shape)
		shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
	}
	MOUSEENTERSTAGE = function () {
		z()
		stage = s = cjs.stage(500, 500).A().tick()
		s.bm('me')
		s.on('mouseenter', function () {
			$('body').prepend('once<br>')
		}, null, true)
		s.on('mouseenter', function () {
			$('body').prepend('many<br>')
		}, null, false)
	}
	HANDLEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
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
	REMOVEEVENT = function () {
		z()
		s = createjs.stage(500, 500).A().tick()
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
	function handleClick(e) {
		if (e.currentTarget == stage && e.eventPhase == 1) {
			// this is the first dispatch in the event life cycle, clear the output.
			output.text = "target : eventPhase : currentTarget\n"
		}
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == stage && e.eventPhase == 3) {
			// this is the last dispatch in the event life cycle, render the stage.
			stage.update()
		}
	}
}
function loader() {
	$it = function (i) {
		var _$it = function (i) {
			return {src: _.src(i), id: i}
		}
		return S(i) ? _$it(i) : i
	}
	$its = function (its) {
		var g = G(arguments)
		if (!g.A) {
			its = g
		}
		return _.m(its, $it)
	}
	QU = MF = MANIFEST = function () {
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
	QU2 = function () {
		$Ld(mf1, function (ld) {
			ld.bm("myImage", $St())
		})
	}
	QU3 = function () {
		$Ld(mf2, function (ld) {
			ld.bm("me", $St());
			ld.bm("guy", st)
		})
	}
	IT = QU4 = function () {
		$Ld(function (ld) {
			Q.bm("me", $St());
			Q.bm("guy", st, 300, 300)
		}).mf("me", guyIt)
	}
	guyIt = {id: "guy", src: "/guy.png"}
	myIt = {id: "myImage", src: "/me.png"}
	mf1 = [myIt, guyIt];
	mf2 = [$it("me"), $it(guyIt)]
	mf3 = ["me", guyIt];
	mf4 = [myIt, guyIt];
	mf5 = ['guy', 'me']
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
}
function layers(){
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
	$Ldr('LAYS0', function (q) {
		me = q.bm('me', $St()).scXY(3);
		guy = q.bm('guy', st).scXY(.5).dg()
		$t(function () {
			me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
		})
		$.bt('s.sXY(2)', function () {
			st.sXY(2)
		})
	})}
function dobApps(){

	domElObApps()
	textApps()
	transfApps()
	function domElObApps() {
		ELM = ELEMENTS = function () {
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
		ELEMENTS = function () {
			z()
			div = $.div('red', 400, 400).P('a').A().A($.input())
			s = stage = createjs.stage('yellow', 1000).tick().A()
			elem = new createjs.DOMElement(div[0])
			//stage.A(el)
			// tw(el, [{x:300,y:300},2000])
			// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
		}
	}
	
	function textApps() {
		TX1 = BAS = BASELINE = function () {
			s = $St(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = $Tx('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = $Tx('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = $Tx('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
			s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		TX2 = LINEH = function () {
			s = $St(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
			})
			s.A(
					t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		TX3 = LINEW = function () {
			z()
			s = $St(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
			})
			s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		 
	}
	
	 
	
	function transfApps() {
		TXSH = function () {
			$St()
			h = $H()
			st.A(h)
			h.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
		}
		MTLT = function () {
			$St()
			h.graphics.C('r', 'b')
			h.dg()
			h.lt(100, 100)
			h.lt(150, 190)
			h.lt(300, 300)
			h.lt(350, 1390)
			if (R()) {
				h.cp()
			}
			h.mt(240, 210)
			h.lt(450, 410)
			h.lt(600, 500)
			h.lt(500, 500)
			h.cp()
		}
		WACKY = STGG = function () {
			$.c('y', 300, 100).id('someId')
			$St('someId').bm('me')
			$St($.c('o', 400, 200)).bm('me')
			$St('z', 500, 300).bm('me').GX()._dc()
			$St(1000, 500)
					.bm('me', function (bm) {
						bm.spin().drag()
					})
					.bm('me', function (bm) {
						bm.sXY(0.5, 0.3).spin().drag()
					})
					.Sh().XY(200).graphics.FS()._dc(4)
			_.t(10, function () {
				$St($r(), 200, 200).bm('me', function (me) {
					me.drag()
				})
			})
		}
		INST = INSTAGE = GROWTWEEN = function () {
			$St().bm('me', function (me) {
				me.grow()
				$t(function () {
					me.x = me.x + 10;
					$l(me.inStage())
				})
			})
		}
		TRF = TRANSF = function () {
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
		}
		STF = SETTRANSFORM = function () {
			s = $St(800).A()
			s.bm('me', function (me) {
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
		}
		REG = testImgRegCenter = function () {
			//mockStage()
			$St()
			s.bm('me', function (bm) {
				b1 = bm
				bm.spin().drag()
			})
			s.bm('me', function (bm) {
				b2 = bm
				bm.sXY(0.5, 0.3).spin().drag()
			})
			s.A(c = cjs.cir(4).XY(200))
		}
	}
}
function bmapApps() {

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
	interesting()
	sketchyAss()
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
	function interesting() { //neads loadque
		cjs.Shape.prototype.same = function () {
			return $h(this)
		} //h.copy
		cjs.manifest = function (func) {
			var q = cjs.loadQueue()
			q.complete(
					function () {
						func(function (getResult) {
							return q.getResult(getResult)
						})
					})
					.manifest([{
						id: "chicks", src: "/chicks.png"
					},
						{id: "me", src: "/me.png"},
						{id: "guy", src: "/guy.png"},
						{id: "sun", src: "/sun.png"}])
		}
		cjs.worldsMostInterestingShape = function () {
			var h = cjs.shape()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
			return h
		}
		WINDIG = function () {
			cjs.manifest(function (q) {
				$.hdr().A($.h1('grahics winding')).A()
				$.d().A($.c(960, 400)
						.id("testCanvas"))
				st = s = stage = $St(["testCanvas"])
				h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
				cjs.bm = function (img) {
					var g = G(arguments), img = g[0],
							bm = new cjs.Bitmap(img)
					if (g.N) {
						bm.rC()
					}
					return bm
				} //warning: can't yet change to $Bm!!
				bm = cjs.bm(q("chicks"), '-')
						.a2(s).X(470).drag()
				bm.mask = h.same().X(470)
			})
		} //Uncaught TypeError: Cannot read property 'image' of undefined
		$Ldr('WINDG', function (ld) {
			ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
					.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
		})
		WINDING = function () {
			cjs.Shape.prototype.same = function () {
				return $h(this)
			} //h.copy
			cjs.manifest = function (func) {
				var q = cjs.loadQueue()
				q.complete(
						function () {
							func(function (getResult) {
								return q.getResult(getResult)
							})
						})
						.manifest([{
							id: "chicks", src: "/chicks.png"
						},
							{id: "me", src: "/me.png"},
							{id: "guy", src: "/guy.png"},
							{id: "sun", src: "/sun.png"}])
			}
			cjs.worldsMostInterestingShape = function () {
				var h = cjs.shape()
				h.graphics.f("pink").dr(20, 20, 450, 360)
						.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
						.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
				return h
			}
			WINDING = function () {
				cjs.Shape.prototype.same = function () {
					return $h(this)
				} //h.copy
				cjs.manifest = function (func) {
					var q = cjs.loadQueue()
					q.complete(
							function () {
								func(function (getResult) {
									return q.getResult(getResult)
								})
							})
							.manifest([{
								id: "chicks", src: "/chicks.png"
							},
								{id: "me", src: "/me.png"},
								{id: "guy", src: "/guy.png"},
								{id: "sun", src: "/sun.png"}])
				}
				cjs.manifest(function (q) {
					$.hdr().A($.h1('grahics winding')).A()
					$.d().A($.c(960, 400)
							.id("testCanvas"))
					st = s = stage = $St(["testCanvas"])
					h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
					cjs.bm = function (img) {
						var g = G(arguments), img = g[0],
								bm = new cjs.Bitmap(img)
						if (g.N) {
							bm.rC()
						}
						return bm
					} //warning: can't yet change to $Bm!!
					bm = cjs.bm(q("chicks"), '-')
							.a2(s).X(470).drag()
					bm.mask = h.same().X(470)
				})
			} //Uncaught TypeError: Cannot read property 'image' of undefined
			cjs.manifest(function (q) {
				$.hdr().A($.h1('grahics winding')).A()
				$.d().A($.c(960, 400).id("testCanvas"))
				st = s = stage = $St(["testCanvas"])
				h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
				cjs.bm = function (img) {
					var g = G(arguments), img = g[0],
							bm = new cjs.Bitmap(img)
					if (g.N) {
						bm.rC()
					}
					return bm
				} //warning: can't yet change to $Bm!!
				bm = cjs.bm(q("chicks"), '-')
						.a2(s).X(470).drag()
				bm.mask = h.same().X(470)
			})
		}
		function more() {
			$L('distractor', 'promote', 'slider')
			cjs.worldsMostInterestingShape = function () {
				var h = cjs.shape()
				h.graphics.f("pink").dr(20, 20, 450, 360)
						.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
						.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
				return h
			}
			cjs.utils = function () {
			}
			cjs.extend = function (subclass, superclass) {
				function o() {
					this.constructor = subclass
				}
				
				o.prototype = superclass.prototype;
				return (subclass.prototype = new o())
			}
			cjs.sharedCode = function () {
				if (document.body) {
					setupEmbed()
				}
				else {
					document.addEventListener("DOMContentLoaded", setupEmbed)
				}
				function setupEmbed() {
					if (window.top != window) {
						document.body.className += " embedded"
					}
				}
				
				var o = window.examples = {}
				o.showDistractor = function (id) {
					var div = id ? document.getElementById(id) :
							document.querySelector("div canvas").parentNode;
					div.className += " loading"
				}
				o.hideDistractor = function () {
					var div = document.querySelector(".loading")
					div.className = div.className.replace(/\bloading\b/)
				}
			}
			function distractor() {
				examples.showDistractor = function (id) {
					var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
					div.className += " loading"
				}
				examples.hideDistractor = function () {
					var div = document.querySelector(".loading")
					div.className = div.className.replace(/\bloading\b/)
				}
			}
			
			function promote() {
				cjs.promote = function (subclass, prefix) {
					var subP = subclass.prototype, supP = getProto(subP)
					
					function getProto(subP) {
						return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
					}
					
					if (supP) {
						subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
						for (var n in supP) {
							if (subP.hasOwnProperty(n) && (F(supP[n]))) {
								subP[prefix + n] = supP[n]
							}
						}
					}
					return subclass
				}
				cjs.promoteX = function (subclass, prefix) {
					var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
					if (supP) {
						subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
						for (var n in supP) {
							if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
								subP[prefix + n] = supP[n];
							}
						}
					}
					return subclass
				}
			}
			
			function slider() {
//  Simple slider control for EaselJS examples.
				function Slider(min, max, width, height) {
					this.Shape_constructor();
					this.min = this.value = min || 0;
					this.max = max || 100;
					this.width = width || 100;
					this.height = height || 20;
					this.values = {};
					this.trackColor = "#EEE";
					this.thumbColor = "#666";
					this.cursor = "pointer";
					this.on("mousedown", this._handleInput, this);
					this.on("pressmove", this._handleInput, this);
				}
				
				p = cjs.extend(Slider, createjs.Shape);
				p._checkChange = function () {
					var a = this, b = a.values;
					if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
						b.min = a.min;
						b.max = a.max;
						b.value = a.value;
						b.width = a.width;
						b.height = a.height;
						return true;
					}
					return false
				}
				p._handleInput = function (evt) {
					var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
					val = Math.max(this.min, Math.min(this.max, val));
					if (val == this.value) {
						return;
					}
					this.value = val;
					this.dispatchEvent("change")
				}
				p.isVisible = function () {
					return true;
				};
				p.draw = function (ctx, ignoreCache) {
					if (this._checkChange()) {
						var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
						this.graphics.clear()
								.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
								.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
					}
					this.Shape_draw(ctx, true)
				}
				Slider = cjs.promote(Slider, "Shape")
				cjs.slider = function () {
					/**
					 * Simple slider control for EaselJS examples.
					 **/
					function Slider(min, max, width, height) {
						this.Shape_constructor();
						// public properties:
						this.min = this.value = min || 0;
						this.max = max || 100;
						this.width = width || 100;
						this.height = height || 20;
						this.values = {};
						this.trackColor = "#EEE";
						this.thumbColor = "#666";
						this.cursor = "pointer";
						this.on("mousedown", this._handleInput, this);
						this.on("pressmove", this._handleInput, this);
					}
					
					var p = createjs.extend(Slider, createjs.Shape);
// public methods:
					p.isVisible = function () {
						return true;
					};
					p.draw = function (ctx, ignoreCache) {
						if (this._checkChange()) {
							var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
							this.graphics.clear()
									.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
									.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
						}
						this.Shape_draw(ctx, true)
					}
// private methods:
					p._checkChange = function () {
						var a = this, b = a.values;
						if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
							b.min = a.min;
							b.max = a.max;
							b.value = a.value;
							b.width = a.width;
							b.height = a.height;
							return true;
						}
						return false
					}
					p._handleInput = function (evt) {
						var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
						val = Math.max(this.min, Math.min(this.max, val));
						if (val == this.value) {
							return;
						}
						this.value = val;
						this.dispatchEvent("change")
					}
					window.Slider = createjs.promote(Slider, "Shape");
				}
			}
			
			function _pre() {
				examples = {}
			}
			
			cjs.testCanvas = function () {
				return $.c(960, 400).id("testCanvas").a2($.d())
			}
		}
		
		$Ldr('WINDG', function (ld) {
			ld.bm("chicks", $St($.c(960, 400).id("cv").id()), 470).dg()
					.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same().dg()
		})
	}
	function sketchyAss() {
		window.examples = window.examples || {}
		$L('distractor', 'promote', 'slider')
		cjs.utils = function () {
		}
		cjs.extend = function (subclass, superclass) {
			function o() {
				this.constructor = subclass
			}
			
			o.prototype = superclass.prototype;
			return (subclass.prototype = new o())
		}
		cjs.sharedCode = function () {
			if (document.body) {
				setupEmbed()
			}
			else {
				document.addEventListener("DOMContentLoaded", setupEmbed)
			}
			function setupEmbed() {
				if (window.top != window) {
					document.body.className += " embedded"
				}
			}
			
			var o = window.examples = {}
			o.showDistractor = function (id) {
				var div = id ? document.getElementById(id) :
						document.querySelector("div canvas").parentNode;
				div.className += " loading"
			}
			o.hideDistractor = function () {
				var div = document.querySelector(".loading")
				div.className = div.className.replace(/\bloading\b/)
			}
		}
		function distractor() {
			examples.showDistractor = function (id) {
				var div = id ? document.getElementById(id) :
						document.querySelector("div canvas").parentNode;
				div.className += " loading"
			}
			examples.hideDistractor = function () {
				var div = document.querySelector(".loading")
				div.className = div.className.replace(/\bloading\b/)
			}
		}
		
		function promote() {
			cjs.promote = function (subclass, prefix) {
				var subP = subclass.prototype, supP = getProto(subP)
				
				function getProto(subP) {
					return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
				}
				
				if (supP) {
					subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
					for (var n in supP) {
						if (subP.hasOwnProperty(n) && (F(supP[n]))) {
							subP[prefix + n] = supP[n]
						}
					}
				}
				return subclass
			}
			cjs.promoteX = function (subclass, prefix) {
				var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
				if (supP) {
					subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
					for (var n in supP) {
						if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
							subP[prefix + n] = supP[n];
						}
					}
				}
				return subclass
			}
		}
		
		function slider() {
//  Simple slider control for EaselJS examples.
			function Slider(min, max, width, height) {
				this.Shape_constructor();
				this.min = this.value = min || 0;
				this.max = max || 100;
				this.width = width || 100;
				this.height = height || 20;
				this.values = {};
				this.trackColor = "#EEE";
				this.thumbColor = "#666";
				this.cursor = "pointer";
				this.on("mousedown", this._handleInput, this);
				this.on("pressmove", this._handleInput, this);
			}
			
			p = cjs.extend(Slider, createjs.Shape);
			p._checkChange = function () {
				var a = this, b = a.values;
				if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
					b.min = a.min;
					b.max = a.max;
					b.value = a.value;
					b.width = a.width;
					b.height = a.height;
					return true;
				}
				return false
			}
			p._handleInput = function (evt) {
				var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
				val = Math.max(this.min, Math.min(this.max, val));
				if (val == this.value) {
					return;
				}
				this.value = val;
				this.dispatchEvent("change")
			}
			p.isVisible = function () {
				return true;
			};
			p.draw = function (ctx, ignoreCache) {
				if (this._checkChange()) {
					var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
					this.graphics.clear()
							.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
							.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
				}
				this.Shape_draw(ctx, true)
			}
			Slider = cjs.promote(Slider, "Shape")
			cjs.slider = function () {
				/**
				 * Simple slider control for EaselJS examples.
				 **/
				function Slider(min, max, width, height) {
					this.Shape_constructor();
					// public properties:
					this.min = this.value = min || 0;
					this.max = max || 100;
					this.width = width || 100;
					this.height = height || 20;
					this.values = {};
					this.trackColor = "#EEE";
					this.thumbColor = "#666";
					this.cursor = "pointer";
					this.on("mousedown", this._handleInput, this);
					this.on("pressmove", this._handleInput, this);
				}
				
				var p = createjs.extend(Slider, createjs.Shape);
// public methods:
				p.isVisible = function () {
					return true;
				};
				p.draw = function (ctx, ignoreCache) {
					if (this._checkChange()) {
						var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
						this.graphics.clear()
								.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
								.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
					}
					this.Shape_draw(ctx, true)
				}
// private methods:
				p._checkChange = function () {
					var a = this, b = a.values;
					if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
						b.min = a.min;
						b.max = a.max;
						b.value = a.value;
						b.width = a.width;
						b.height = a.height;
						return true;
					}
					return false
				}
				p._handleInput = function (evt) {
					var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
					val = Math.max(this.min, Math.min(this.max, val));
					if (val == this.value) {
						return;
					}
					this.value = val;
					this.dispatchEvent("change")
				}
				window.Slider = createjs.promote(Slider, "Shape");
			}
		}
		
		cjs.testCanvas = function () {
			return $.c(960, 400).id("testCanvas").a2($.d())
		}
		ASS=ASS_SKETCH = COOL = DRAWONCHICKS = function () {
			pt = 0
			h = $St().mO(1).h()
			h.graphics._ss('g', 40, 's', 'b', 1)
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
		PROMOTE = JUSTLOGS = function () {
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
		DISTRACT = NOTHING = function () {
			$.d().A($.c(960, 400).id("testCanvas"))
			cjs.sharedCode()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
			st = new cjs.Stage("testCanvas")
		}
	}
}


function drawApps(){
	AWESOME = XX6 = GRAPHICSTEST = function () {
		stage = $St()
		canvas = stage.canvas
		// grab canvas width and height for later calculations:
		w = canvas.width
		h = canvas.height
		img = $.img('me', layout)[0]
		function layout() {
			var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
				createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
			var padding = 5
			var _width = 155
			var _height = 155
			var cols = 4
			var space = 0
			var border = createBorder();
			_.times(arr.length, function (i) {
				var tile = arr[i]()
				tile.x = 42 + (_width + padding) * (i % cols)
				tile.y = 42 + (i / cols | 0) * (_height + padding)
				stage.A(tile)
			})
			stage.A(border)
			stage.update()
		}
		
		function createBorder() {
			var s = $H()
			s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
			return cjs.container().A(s)
		}
		
		function createBitmapFill() {
			var container = createTile();
			var s = $H().XY(12, 10)
			var mtx = new createjs.Matrix2D().rotate(1)
			s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
					.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
			return cjs.container().A(s)
		}
		
		function createRectGradientFill() {
			var s = $H().XY(12, 10)
			s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
			return createTile().A(s)
		}
		
		function createEllipse() {
			var s = $H().XY(40, 10)
			s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
					.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
					.drawEllipse(0, 0, 70, 140, 8)
			return createTile().A(s)
		}
		
		function createRadialGradientFill() {
			var s = $H().XY(80)
			s.graphics.ss(8).beginStroke("#f0f")
					.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
			return createTile().A(s)
		}
		
		function createLineTo() {
			var s = $H()
			s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
					.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
			return createTile().A(s)
		}
		
		function createHex() {
			var s = $H().XY(80, 40)
			s.graphics.beginFill("pink")
					.drawPolyStar(0, 0, 40, 6)
					.drawPolyStar(0, 75, 40, 6)
					.drawPolyStar(45, 45, 20, 6)
			return createTile().A(s)
		}
		
		function createStar() {
			var s = $H().XY(80, 85)
			s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
					.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
			return createTile().A(s)
		}
		
		function createRoundRect() {
			var s = $H().XY(12)
			s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
			return createTile().A(s)
		}
		
		function createTile() {
			var bg = $H()
			bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
			bg.alpha = 0.25
			return cjs.container().A(bg)
		}
	}
	function graphTest() {
		TWOSTAGES = function () {
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
		GRAPHTEST8 = BROKEN = function () {
			$St();
			img = $.i('me', function () {
				s.ct().A(h = $Sh())
				gx = h.graphics.FS()
				s.A($Bm(img))
				gx.ss(32).dr(20, 20, 920, 360);
				fns = [
					function () {
						return $Sh(12, 10)
								.lf('b', 'g', 130).dr(130)
					},
					function () {
						return $Sh(40, 10, 'b', 16)
								.ls('r', 'w', 70, 140).de(70, 140)
					},
					function () {
						return $Sh(80, 80)
								.C('b', 8).rf('w', 'y', 40).dc(40)
					},
					function () {
						return $Sh(12, 10, 18)
								.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
					},
					function () {
						return $Sh(12, 12, 'g', 'r', 8)
								.rr(130, 30)
					}, //w(h) and r
					function lt() {
						return $Sh().C('o')
								.ss(16, 'round', 'round')
								.mt([40, 10], [90, 90], [90, 140])
					},
					function star() {
						return $Sh(80, 85, 'y', 'b', 3)
								.pStr(0, 0, 80, 5, .8, -95)
					},
					function hex() {
						return $Sh(80, 40, 'p')
								.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
					}
				]
				_.e(fns, withEachFn)
				function withEachFn(cont, i) {
					var W = 155, H = 155, P = 5, C = 4 //pad, cols
					s.A(tile(cont()).XY(
							42 + (W + P) * (i % C),
							42 + (i / C | 0) * (H + P)))
				}
			})[0]
			tile = createTile = function (x, y) {
				var bg, til
				bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
				til = cjs.ct().A(bg)
				if (N(x)) {
					til.X(x)
				}
				if (N(y)) {
					til.Y(y)
				}
				if (O(x)) {
					til.A(x)
				}
				return til
			}
		}
		TWOSTAGS = function () {
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
		makeSquare = function (x, y, color, handler) {
			var shape = cjs.shape().N('square').XY(x, y)
			shape.graphics.f(color).dr(0, 0, 135, 135)
			var cont = cjs.ct().N('container').A(shape)
			_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				cont.on(ev, handler)
			})
			cont.cursor = "pointer"
			return cont
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
	}
	
	function radGrad() {
		gx.bRGF = function () {
			return this.beginRadialGradientFill.apply(this, arguments)
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rg = function (o) {
			var h = this, g = G(arguments),
					gx = h.graphics,
					o
			if (A(g[0]) && A(g[1])) {
				gx.rf(
						[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
				)
				return h
			}
			o = O(g[0]) ? g[0] :
					S(g[1]) ? _.x({c1: g[0], c2: g[1]},
							N(g[7]) ?
							{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
									: N(g[5]) ?
							{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
									: N(g[4]) ?
							{x2: g[2], r1: g[3], r2: g[4]}
									: N(g[3]) ?
							{r1: g[2], r2: g[3]}
									:
							{r2: g[2]})
							: S(g[0]) ?
					{c2: g[0]}
							: {}
			$df.grad(o)
			o.x2 = N(o.x2, o.x1)
			o.y2 = N(o.y2, o.y1)
			o.r1 = N(o.r1, 1);
			o.r2 = N(o.r2, 100)
			return o
		}
		h.rf = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rf(
					[o.c1, o.c2],
					[o.s1, o.s2],
					o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
		RG1221 = RADGRAD = function () {
			d = $.c('y', 500)
			c = $.c('y', 500).A()
			c.context.f(
					c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
			)
			c.fr()
		}
		RG11 = RADIALGRAD = function () {
			setup()
			h.g
				// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
					.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
					.drawRect(0, 0, 100, 100)
					.drawCircle(180, 180, 100, 100)
		}
		RG1441 = RADIALGRADRECT = function () {
			s = cjs.S()
			x1 = 100
			y1 = 150
			r1 = 20
			x2 = 100
			y2 = 150
			r2 = 100
			h = cjs.h(10, 10).a2(s).drag()
			change = function () {
				
				//  h.remove()
				// h=cjs.h(10, 10).a2(s).drag()
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
		RG11 = RADIALGRAD1 = function () {
			setup()
			h.x = 20
			h.y = 20
			st.addChild(h)
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			)
			h.graphics.drawRect(0, 0, 100, 100)
			h.graphics.endFill()
			st.update()
		}
		RG161 = RADIALGRADFILL2 = function () {
			setup()
			h.graphics.beginRadialGradientFill(
					["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
			).drawCircle(100, 100, 50)
			st.update()
		}
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
				// h=cjs.h(10, 10).a2(s).drag()
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
		RG151 = RADIALGRADFILL = function () {
			setup()
// 2 colors
			h.x = 20
			h.y = 20
			h.graphics.beginRadialGradientFill(
					[oC('b'), oC('r')],
					[.1, 1], 50, 50, 0, 50, 50, 50
			)
			h.graphics.drawRect(0, 0, 100, 100)
			h.graphics.endFill()
			st.addChild(h)
// 3 colors
			h = new cjs.Shape();
			h.x = 20;
			h.y = 140;
			h.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
			h.graphics.drawRect(0, 0, 100, 100);
			st.addChild(h);
// alpha
			h = new cjs.Shape();
			h.x = 20;
			h.y = 260;
			h.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
			h.graphics.drawRect(0, 0, 100, 100);
			h.graphics.endFill();
			st.addChild(h);
		}
		RGS = $$TWOEXAMPLES$$ = function () {
			var RG1 = function () {
				var cv = $.c().W(500).H(400)
				$H().a2($St(cv)).graphics
						.bRGF(["orange", "blue"], [0, 1], 100, 100, 0, 100, 100, 350)
						.dr(0, 0, 500, 500)
				return $.d($.h1('radial grad'), cv)
			}
			var RG2 = function () {
				var cv = $.c().W(500).H(400)
				st = $St(cv)
				st.A(h = $H())
				gx = h.graphics
				gx.bRGF(["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50).dc(100, 100, 50)
				return $.d($.h1('radial grad fill'), cv)
			}
			$s({$flexDiv: {dp: 'fl', wr: 'wr'}})
			var d = $.d().id('flexDiv')
			d.A(RG1(), RG2())
		}
	}
	
	function curves() {
		RR1 = BASIC = RRR8 = ROUNDREC = function () {//C+
			s = $St()
			h = s.h()
			gx = h.graphics.FS()
			h.c('b', 'r', 5).dc(100, 100, 100)
			h.dr(300, 200, 100, 50)
			h.dr2(500, 200, 100, 50)
			h.rr2(500, 200, 100, 50, 50)
			h.de2(500, 200, 100, 50)
			s.dot(100, 100)
			s.dot(300, 200)
			s.dot(500, 200)
			s.dot(500, 200)
			s.dot(500, 200)
			s.u()
		}
		RR2 = GOODONE = TXH8 = function () {
			St()
			h = $H().a2(st)
			h.f('red').s('black')
			h.graphics.dc(400, 400, 200)
			h.graphics.dr(100, 0, 200, 200)
			/////////
			h.rec(100, 100, 100, 100, 'y')
			h.rec(200, 200, 100, 100, 'b')
			h.c('o').polyStar(300, 100,
					50, 5, 0.6, -90)
			h.c('w', 'z')
					.roundRectComplex(400, 300,
					300, 300, 20, 20, 30, 40)
			h.cir(500, 200, 40, 'b', 'x', 10)
			return
			//function exceedsStackSize() {
			////////////////
			h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
					.c('X', 'g', 8)
					.mt([
						[100, 100], [300, 300], [400, 100],
						[500, 300], [450, 450]], [[500, 0], [600, 100]
					])
			h.cir(600, 300, 'u', 'g', 10)
			lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
			v = [[300, 300], [320, 200], [640, 400], [280, 650]]
			//two ways to make the same thing
			s.h().poly({
				v: v,
				lf: lf
			})
			s.h(250, 50).lf(lf).mt(v)
		}
		BB = BRUSH = BLOTCHY = function () {
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
		FL9 = Q21 = function () {
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
				$Bm(i).a2(st).al(.2)
			})
		}
	}
	
	function shapeApps() {
		REC = function () {
			$St()
			h = st.Sh().dg()
			gx = h.graphics
			gx.FS()._dr()
			gx = st.Gx().FS()._dr(100, 100, 500, 10)
			h.dr(100, 100, 500, 10)
			st.Gx().FS()._dr(500, 30)
		}
		GRID = function () {
			stage = s = $St(1000, 1000)
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
		GRIDD = NEEDSDRAWSQUARE = f
		CIR5 = HCR = function () {
			$St()
			gx = $Gx()
			$Sh(gx).XY(300, 100).a2(st)
			gx._f('p')._s('w').ss(10)
					._dc(100).dc(100, 0, 100)
			gx._s('b')._f('g').dc(0, 300, 100)
			h = $Sh().f('b').s('y').lW(30)
					.cir(100, 100, 100).cir(400, 400, 40, 'r')
					.a2(st)
		}
		CIR6 = ROTCIRS = function () {
			ct = $Ct().a2($St(1000, '+')).A(
					$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
			)
			$t(function (e) {
				ct.rt(ct.rt() + 3)
			})
		}
		CIR8 = function () {
			$St()
			s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
					[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
			s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
					[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
		}
		CIR = function () {
			$Sh().a2($St(600)).f('r', 'y').lW(30)
					.dc(400, 400, 200)
					.dr(100, 0, 200, 200)
		}
		CIR1 = HDC = function () {
			$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
		}
		CJCIR = function () {
			ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
			h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
			ct.A(cjs.cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
		}
		CIR2 = function () {
			ct = $Ct().a2($St(600))
			ct.A(
					cjs.cir(100, 100).f('y').dc(0, 0, 4)
			)
			ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
			ct.A(cjs.cir(80, 300, 'g', 'y', 30))
		}
		CIR3 = CJSCIR = function () {
			ct = $Ct().a2($St(600))
			ct.A(
					cjs.cir(400, 300).f('r').dc(28, 40, 40)
			)
			_.in(2, function () {
				ct.A(
						cjs.cir(80, 300, 300, 'g', 'y', 30)
				)
			})
			$.bt('more', function () {
				h = $H().a2(ct)
				h.f('o').dc(100, 300, 105) ///x, r , r = 50
				h.f('z').dc(100, 300)
				h.f('r').dc(100, 300, 50)
				h.f('b').dc(100, 300) //r, x=0, y=0
				h.f('r').dc(100)
			})
		}
		CIR4 = DRG = GOB = function () {
			st = $St() //good gx = $Sh().a2(st).graphics
			//good gx = st.Sh().graphics
			h = st.Sh().drag()
			gx = h.graphics.SS()
			$.i('me', function (img) {
				gx.F()
				gx._bf(img)
				gx._dc({x: 100, y: 200, r: 200})
				gx.C('R')._dc({x: 200, y: 200, r: 200})
				gx.C('b', 'g', 30)._dc(100, 300)
			})
		}
		CIRS = function () {
			$H().f('b').a2($St()).cirs(
					[200, 200, 50],
					[400, 200, 50],
					[600, 200, 50]
			)
		}
		CIRZS = function () {
			$St()
			h.c('b', 'r', 10).XY(-100, -100)
			/*  h.dc(300,300,50)
			 gx.dc(400,400,50)
			 h.dc(500,500,50)
			 gx.dc(600,600,50)
			 */
			// h.dc(100,100,50) -> no color
			h.c().dc(100, 100, 50) // black fill, l4 white stroke
			h.c({C: 'r'}).dc(300, 300, 50)
			h.cir({
				r: 50, x: 200, y: 200,
				C: ['y', 10]//,
				//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
				//ls: {c1: 'u', c2: 'o'}
			})
			h.cir({
				r: 50, x: 500, y: 200,
				C: ['y', 2]//,
				//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
				//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
			})
			h = s.h()//.lf({})
					.dc()
					.c('r', 'b', 10)//.lf({y2: 400})
					.dc(300, 300, 50)
			return
		}
		SIR = function () {
			$.C('b')
			$s({
				body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'},
				canvas: {M: 20}
			})
			st = $St($.c(600, 300)[0])
			st.A($Tx('h.dc', '50px Arial', 'white').X(400))
			h = $H().a2(st)
			h.dc()
			h.dc(36)
			h.dc(18, 'o')
			h.dc(200, 100)
			h.dc(300, 100, 20, 'r')
			h.dc(300, 200, 20)
			//
			st2 = $St($.c(600, 300)[0]).t()
			st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
			st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
			//
			st1 = $St($.c(600, 300)[0]).t()
			st1.A($Tx('cjs.cir', '50px Arial', 'white').X(400))
			st1.A(cjs.cir(300, 'g'))
			st1.A(cjs.cir(140, 220, 20, 'o').dc())
			st1.A(cjs.cir('r').XY(220, 200))
			st3 = $St($.c(600, 300)[0]).t()
			st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
			st3.A(
					$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
			)
			st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
			h = $Sh().a2(st)
			gx = h.graphics.FS()
			h.dc()
			h.dc(36)
			h.cir(18, 'o')
			h.dc(200, 100)
			h.cir(300, 100, 20, 'r')
			h.dc(300, 200, 20)
			st2 = $St($.c(600, 300)[0]).t()
			st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
			st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
			st1 = $St($.c(600, 300)[0]).t()
			st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
			st1.A(cjs.cir(300, 'g'))
			st1.A(cjs.cir(140, 220, 20, 'o').dc())
			st1.A(cjs.cir('r').XY(220, 200))
			st3 = $St($.c(600, 300)[0]).t()
			st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
			st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
		}
		BOWL = function () {
			$St()
			ct = container = c = $Ct().a2(st)
			plX = st.W() / 2
			plY = 150
			plR = 100
			plr = 75 // this seems to determine the radius of the 'cluster' of balls
			oRng = 8 //outer ring
			nRng = 3// number of rings
			//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
			circ = cjs.cir(plX, plY, plR, 'yellow')
			container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
			rngSp = plr / (nRng - 1)
			aA = []
			var ast = function (x, y, r, m, f) {
				return {
					x: x, y: y, radius: r, m: m,
					f: f, vX: 0, vY: 0, player: false
				}
			}
			_.t(nRng, function (r) {
				var crR = 0, ang = 0, rngR = 0
				if (r == nRng - 1) {
					crR = 1
				}
				else {
					crR = oRng - (r * 3)
					ang = 360 / crR
					rngR = plr - (rngSp * r)
				}
				_.t(crR, function (a) {
					var x = 0, y = 0
					if (r == nRng - 1) {
						x = plX;
						y = plY
					}
					else {
						x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
						y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
					}
					aA.push(ast(x, y, 10, 5, 0.95))
					ct.A(cjs.cir(10, 'z').XY(x, y))
				})
			})
		}
		CONNECT = function () {
			z();//m$$('location=location')
			stage = $St(1000)
			pink = cjs.cir(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
			stage.A(pink)
			container = new createjs.Container()
			stage.A(container)
			green = cjs.cir(200, 'green', 'purple').XY(320, 300)//.rXY(100)
			yellow = cjs.cir(100, 'yellow', 'purple').XY(250)
			red = cjs.cir(40, 'red', 'purple').XY(200, 100)
			orange = cjs.cir(20, 'orange', 'purple').XY(300)
			container.A(green, yellow, red, orange)
			LS(yellow, container)
			SL(green)
			SL(green, pink)
			SL(yellow)
			SL(red, container)
			SL(orange, red)
		}
		FAIL = SKETCH = function () {
			s = cjs.stage(500, 500).A()
			s.can.P('a').XY(300)
			s.bm('me', 0.2, function (bm) {
			})
			s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
			s.circle(100, 100, 10, 'red', 'yellow')
					.circle(10, 100, 100, 'black', 'purple')
					.circle(100, 10, 100, 'blue', 'red')
					.circle(150, 150, 120, 'red', 'blue')
					.circle(30, 'brown', 'gray')
			St()
			ct = s.ct(1000, 300).drag()
			ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
			h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
			h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
			st.u()
			St()
			ct = s.ct(600, 300)
			ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
			ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
			h = ct.Sh()
			h.graphics.FS()
			h.rec({
				w: 100, h: 200, a: 20,
				c: 'b', C: 'w', l: 20, bm: 1
			}).X(100)
			_.in(8, function () {
				h.X(0)
			}) //notice how gradient is seen behind the bm!!!
		}//D 
		SHPEZ8 = function () {//C- only PLAY!?
			St()
			s.can.P('a').XY(200)
			s.bm('me')
			s.bm('me', 0.2, function (bm) {
			})
			h = $h().cir()
			s.A(
					$h().cir(100, 'blue', 'green').XY(100, 100).drag()
			)
			s.h().cir(100, 100, 10, 'red', 'yellow')
			s.h().cir(10, 100, 100, 'black', 'purple')
			s.h().cir(100, 10, 100, 'blue', 'red')
			s.h().cir(150, 150, 120, 'red', 'blue')
			s.h().cir(30, 'brown', 'gray')
			s.u()
		}
		SHPS8 = function () {
			z()
			s = stage = $St(500, 500)
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
			s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
			s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
			s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
			s.Sh().cir(150, 150, 120, 'c', 'd')
				//.fn(SL)
					.cir(30, 'x', 'x')
		}
		SHPES9 = function () {
			z()
			s = stage = St(500, 500).a()
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
			//s.bm('me', function(bm){ bm.sXY(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
		}
		POL5 = CPOL0 = function () {
			__St()
			vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
			//h.lt([450, 410],[600, 500], [500, 500])
			//h.lt([[450, 410], [600, 500], [500, 500]])
			//h.lt( V(450, 410), V(600, 500), V(500, 500))
			h.pol({
				c: 'r',
				C: 'b',
				l: 20,
				v: vs
			})
		}
		POL0 = HPOLY8 = function () {
			St()
			v = [[-100, 0], [0, -100], [100, 50]]
			s.h(600, 300).poly({v: v, bf: 'me'})
			s.h(900, 300).poly({v: v, lf: 1})
			s.h(800, 300).poly({v: v, rf: 1})
			h = s.h(200, 300).drag().bf('me', function () {
				h.dc([150], [200, 0, 150])
			})
			st.u()
		}//C
		POL1 = HPOL = function () {
			st = $St()
			h = st.h('+').XY(0, 0)
			h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
			h.pol(vs1, 'r', 'y', 30)
			h.pol(vs1, 200, 200, 'r', 'y', 3)
		}
		POL4 = POLY = EVEX = EASELCONVEX = function () {
			s = cjs.S()
			s.poly([[-100, -10], [0, 100], [100, 20]],
					'red', 'white', 10).XY(200, 300)
			s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
			s.poly(
					[[-40, 40], [-40, -40], [40, -40], [40, 30]],
					'blue', 'white').XY(200, 200)
		}
		GXPOL = ERR = function () {
			vs1 = [
				[61, 68],
				[145, 122],
				[186, 94],
				[224, 135],
				[204, 211],
				[105, 200],
				[141, 163],
				[48, 139],
				[74, 117]
			]
			$St().Gx().FS().pol([vs1])
		}
		function needsStagePoly() {
			POL2 = XX2 = EASELCONVEX8 = function () {
				s = $St()
				s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
				s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
				s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
			}
			POL3 = CPOL4 = function () {
				St()
				vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
				//h.lt([450, 410],[600, 500], [500, 500])
				//h.lt([[450, 410], [600, 500], [500, 500]])
				//h.lt( V(450, 410), V(600, 500), V(500, 500))
				h.pol({
					c: 'r',
					C: 'b',
					l: 20,
					v: vs
				})
			}
		}

//
		POL = function () {
			$St().Gx().FS()._mt(100, 300)
					._lt(300, 100)._lt(500, 200)._lt(800, 200)
					._lt(100, 300)
					._pol(vs1)
		}
		CEN = YSTAR = CSH = CENTERSHAPE = function () {
			stage = $St(500, 600)
			shape = stage.Sh()
			gx = shape.graphics.FS()
			SL(shape)
			shape.rec(0, 0, 100, 100, 'a')
			shape.rec(0, -75, 25, 50, 'b')
			shape.rec(0, -200, 100, 100, 'r')
			shape.cir(100, 200, 40, 'z', 'x')
			gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
			gx.beginFill("orange").drawPolyStar(
					100, 100, 50, 5, 0.6, -90)
			shape.XY(200)
			stage.bm('me', function (b) {
				me = b
				me.rgc()
				me.XY(200)
				me.sXY(.4)
			})
			CENTERSHAPE9 = function () {
				z()
				stage = $St(500, 600).A()
				shape = stage.Shape();
				SL(shape)
				shape.RECT(0, 0, 100, 100, 'a')
				shape.RECT(0, -75, 25, 50, 'b')
				shape.RECT(0, -200, 100, 100, 'r')
				shape.cir(100, 200, 40, 'z', 'x')
				shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
				shape.g.beginFill("orange").drawPolyStar(
						100, 100, 50, 5, 0.6, -90)
				shape.xy(200)
				stage.bm('me', function (b) {
					me = b
					me.rgc()
					me.xy(200)
					me.sXY(.4)
				})
			}
		}
	}
	
	function filtApps() {
		CMXF = function () {
			$St().bm('me', function (bm) {
				bm.dg()
				var matrix = new createjs.ColorMatrix()
						.adjustHue(180)
						.adjustSaturation(-100);
				bm.filters = [
					new createjs.ColorMatrixFilter(matrix)
				]
				bm.cache(-200, -200, 800, 800);
			})
		}
		BLR = function () {
			$St().bm('me', function (bm) {
				bm.dg()
				bm.aFl(_$Bfl(20, 10))
				var b = bm.flBds()
				bm.cache(
						b.x - 50,
						b.y - 50,
						b.width + 400,
						b.height + 400)
			})
		}
		function withMug() {
			BL1 = BLUR = function () {
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
		}
		
		BL2 = BLURFILT = function () {
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
		BL4 = ANIMBLUR = function () {
			$l('welcome to BLUFILTER3')
			$l('here we will attempt an animated blur filter')
			st = stage = $St()
			var blurAmount = 0, blurMultiple = 40, speed = 0.06
			st.bm('me',
					function (bm) {
						bm.XY(100, 300).dg()
						bF = $bF(5, 10)
						bm.filters = [bF]
						bd = bounds = bF.getBounds()
						bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
						/*
						 T.on('tick', function () {
						 blur = M.sin(blurAmount += speed) * blurMultiple;
						 bm.filters = [$bF(blur, blur, 2)]
						 bm.ca()
						 })*/
					})
		}
		BLR4 = function () {
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
		}
		/*This example demonstrates revealing an image using another image as the
		 mask. The mask is created by drawing a
		 shape, and then caching the shape to make an image with an alpha
		 channel. It is then applied to the image as
		 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
		 */
		BLF1 = function () {
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
		}
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
		
		BLF3 = function () {
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
		COLF1 = function () {
			shape = new createjs.Shape().set({x: 100, y: 100});
			shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
			shape.filters = [
				new createjs.ColorFilter(0, 0,
						0, 1, 0,
						0, 255, 0)
			];
			shape.cache(-50, -50, 100, 100);
			$St().A(shape)
		}
		COLF = function () {
			$St()
			$.i('me', function (i) {
				
				// shape.cache(-50, -50, 100, 100)
				var bmp = new createjs.Bitmap(i).X(100).Y(100)
				bmp.filters = [
					new createjs.ColorFilter(0, 0,
							0, 1, 0,
							0, 255, 0)
				];
				bmp.dg()
				bmp.cache(-200, -250, 600, 600)
				st.addChild(bmp);
			})
		}
		FL1 = SCRATCHOFF = function () {
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
		FL2 = ERASEFL1 = function () {
			$.i('chicks', function (e, i) {
				$St()//cjs.Touch.enable(st)  //st.mO(1) !!!
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
				st.h().f("#FFFFFF").dc(25)//.cu('pointer').bM()
			})
		}
		FL3 = ERASEFL11 = function () {
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
		FL4 = ERASEDOT = function () {
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
		FL5 = ERASEFL111 = function () {
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
		FL6 = ERASEFLWORKS = function () {
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
		FL7 = ERASEFL = function () {
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
		function alphaMaskReveal() {
			AMR = ALPHAMASKREVEAL = function () {
				cjs.testCanvas()//  cjs.sharedCode()
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
			/*This example demonstrates revealing an image using another image as the
			 mask. The mask is created by drawing a
			 shape, and then caching the shape to make an image with an alpha
			 channel. It is then applied to the image as
			 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
			 */
		}
		
		SPRITESWITHFILTERS = function () {
			stage = $St()
			$t("tick", function tick(event) {
				color += 5;
				grant3.filters = [
					new cjs.BlurFilter(10, 10, 1),
					new cjs.ColorFilter(1, 1, 1, 1, color % 255, color / 2 % 255, color / 3 % 255)
				];
				grant3.updateCache(); // Sprite has to be updated. EXPENSIVE!
				st.update();
			})
			// Preload the image. Image is coming from CORS-enabled server.
			var img = document.createElement("img");
			img.crossOrigin = "Anonymous";
			img.src = "http://php5.gskinner.com/CORS/runningGrant-easel.png";
			img.onload = createSprites;
			var grant3; // Stored to allow access in the tick
			var color = 0;
			
			function createSprites() {
				
				// 1. Default Sprite. No blur.
				var data = new createjs.SpriteSheet({
					"images": [img],
					"frames": {"height": 292, "width": 165},
					"animations": {"run": [0, 25, "run", 2]}
				});
				var grant = new createjs.Sprite(data, "run");
				stage.addChild(grant);
				// 2. Cache the image. 
				// Note that this is faster (one time cache), but obviously requires
				// some padding on each frame to prevent the edge bleed
				var bmp = new createjs.Bitmap(img);
				bmp.filters = [new createjs.BlurFilter(10, 10, 1)];
				bmp.cache(0, 0, img.width, img.height);
				var data2 = new createjs.SpriteSheet({
					"images": [bmp.cacheCanvas], // Note we are using the bitmap's cache
					"frames": {"height": 292, "width": 165},
					"animations": {"run": [0, 25, "run", 2]}
				});
				var grant2 = new createjs.Sprite(data2, "run");
				grant2.x = 185;
				stage.addChild(grant2);
				// 3. Cache the Sprite instead
				// More expensive because it needs to be updated each frame (see tick below)
				grant3 = new createjs.Sprite(data, "run");
				grant3.x = 185 * 2;
				grant3.cache(0, 0, 165, 292);
				stage.addChild(grant3);
			}
		}
		function mapFIlter() {
			MAPF = function () {
				$St()
				$.i('me', function (i) {
					var box = new createjs.Shape();
					box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100)
					box.graphics.drawRect(0, 0, 100, 100);
					box.cache(0, 0, 100, 100);
					var bmp = new createjs.Bitmap(i);
					bmp.filters = [
						new createjs.AlphaMapFilter(box.cacheCanvas)
					];
					bmp.cache(0, 0, 100, 100);
					st.addChild(bmp);
				})
			}
		}
	}}