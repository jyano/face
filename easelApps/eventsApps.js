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