MU = HITC = HITCIRCLES = function () {
	st = $St(1000, '+') // look no .tick() necesary!! look below :)
	ct = $Ct()
	st.A(ct.XY(150))
	_.t(25, function () {
		$H().XY(
				randomLocation(), randomLocation()).f(
				randomHSL()).dc(30).a2(ct)
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
	function randomLocation() {
		return M.random() * 300 - 150
	}
	
	function randomHSL() {
		return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
	}
	
	function alt() {
		MU8 = HITC1 = HITCIRCLES1 = function () {
			z()
			var pt
			st = $St(1000, '+') // look no .tick() necesary!! look below :)
			ct = $Ct()
			st.A(ct.XY(150))
			_.t(25, function () {
				$H().XY(
						randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
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
			function randomLocation() {
				return M.random() * 300 - 150
			}
			
			function randomHSL() {
				return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
			}
			
			function alt() {


//beautiful demo i stole! :)
				MU2 = HITCIRCLES = function () {
					z()
					stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
					container = new createjs.Container()
					stage.A(container.XY(150))
					_.times(25, function () {
						var shape = new createjs.Shape()
						shape.graphics.f(randomHSL()).dc(0, 0, 30)
						holder.A(shape.XY(randomLocation(), randomLocation()))
					})
					cjs.Ticker.on("tick", tick)
					function randomLocation() {
						return Math.random() * 300 - 150
					}
					
					function randomHSL() {
						return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
					}
					
					function tick(event) {
						holder.rotation += 3
						var numChildren = holder.getNumChildren()
						_.each(holder.children, function (child) {
							child.alpha = child.underMouse() ? 1 : 0.1
						})
						/*
						 for(var i = 0; i < numChildren; i++){  //for each child
						
						 var child = holder.getChildAt(i)
						 child.alpha = 0.1
						 var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
						 if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
						 child.alpha = 1}
						 }
						 */
						stage.update(event)
					}
				}
			}
		}//A
	}//A
	$L('hitcircles mu')
}
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
handleClick = function (e) {
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
TXSH = function () {
	z()
	stage = createjs.stage(600).tick().A()
	shape = new createjs.Shape()
	stage.A(shape)
	shape.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
}
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
GROW = function () {
	z()
	$St(500, 500).bm('me', function (bm) {
		b = bm
		bm.grow().dg()
	})
}//F}}
//function ui() {
STF = SETTRANSFORM = function () {
	s = cjs.stage(800).A()
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
STGG = function () {
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
INST = INSTAGE = function () {
	$St().bm('me', function (me) {
		me.grow()
		$t(function () {
			me.x = me.x + 10;
			$l(me.inStage())
		})
	})
}
TX1 = BAS = BASELINE = function () {
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
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
TX4 = ALIGN = function () {
	s = $St(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
	})
	//textAlign
	s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
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
function more() {
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.m(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
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
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
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
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B
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
	z()
	cjs.worldsMostInterestingShape = function () {
		var h = cjs.shape()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
		return h
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
	function err() {
		//Uncaught TypeError: Cannot read property 'image' of undefined
	}
}
POPSPIN = function () {
	z()
	angle = 0
	img = $.img('me', handleImageLoad)[0]
	function stop() {
		cjs.Ticker.removeEventListener("tick", tick)
	}
	
	function handleImageLoad() {
		canvas = $.c('p', 960, 400).id("testCanvas").A()
		stage = $St(canvas)
		stage.autoClear = true;
		bmp = new cjs.Bitmap(img)
				.rXY(img.width >> 1, img.height >> 1)
				.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		stage.A(bmp).update();
		cjs.Ticker.timingMode = cjs.Ticker.RAF
		cjs.tick(tick)
	}
	
	function tick(event) {
		angle += 0.01
		var value = Math.sin(angle) * 360
		bmp.rt(value).sXY(value / 360)
		stage.update(event)
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
MGA = MARGINAUTO = function () {
	o = outer = $.div('b', 500, 500).A()
	o.A(i = inner = $.div('r', 100, 100))
	i.mar('auto')
	o.mar('auto')
}
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
DRG = function () {
	h = $St().h(300, 300)
	h.bf('me', function (h) {
		h.dc(300).drag()
	})
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
XX6 = GXTX = GRAPHICSTEST = function () {
	stage = cjs.stage(800, 500).A()
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
		var s = cjs.shape()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = cjs.shape().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = cjs.shape().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = cjs.shape().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = cjs.shape().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = cjs.shape()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = cjs.shape().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = cjs.shape().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = cjs.shape().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = cjs.shape()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
DSTR = DISTRACTORDOESNOTHING = function () {
	st = stage = $St()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
}
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
function toWeb() {
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
	}
}
function needsS$() {
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
	SHAPEZ8 = function () {//C- only PLAY!?
		SHAPS8 = function () {
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
		SHAPES9 = function () {
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
}
function needsOBx() {
	DRL = DRAWLINE = XX5 = HDL11 = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
		DRAWLINE1 = DLN = function () {
			St()
			h.dl(50, 50, 200, 200)
			h.dl(V(300, 500), [500, 200])
		}
	}
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
function needsStageH() {
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
}
function canon() {
	canon = function (box, x, y) {
		var vx, vy, ball
		x = x || box.x || 100
		y = y || box.y || 500
		stage.A(ball = Ball(12).XY(x, y))
		if (box.rotation > 0) {
			vx = 8 * (1 + Math.toRads(box.rotation))
			vy = 16 * (1 - Math.toRads(box.rotation))
		}
		else {
			vx = 8 * (-1 + Math.toRads(box.rotation))
			vy = 16 * (1 + Math.toRads(box.rotation))
		}
		stage.tick(function () {
			vy -= 0.5
			ball.X(vx, '+').Y(vy, '-')
		})
	}
	CANON = function () {
		stage = cjs.stage(1000, 600).tick().A()
		box = Box(20, 100).X(500).B(600)
		stage.A(box)
		kD('l', function () {
			box.rT(4, '-')
		})
		kD('r', function () {
			box.rT(4, '+')
		})
		kD('d', function () {
			box.rotation = 0
		})
		kD('s', function () {
			canon(box)
		})
		setInterval(function () {
			var degs = Math.toRads(box.rotation)
			canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
					(500 + Math.asin(degs) * 30) + box.y - 540)
		}, 500)
	}
}
function usesGrad() {
	GRAPHTEST8 = function () {
		St();
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
}
function needsBoot() {
	SGUN = SGUNSHIP = function () {
		St()
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(M.atan(y / x))
			if (x < 0) {
				d = M.abs(d) + 90;
				if (y < 0) {
					d = M.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			h = t = $H().XY(100).rY(20).vX(1).vY(1)
			h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			$.kD('d', function () {
				t.rt(6, '+')
			})
			$.kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(h)
				st.MD(function (e) {
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			_.ev(.05, function () {
				h.X(t.vx, '+').Y(h.vy, '+')
				h.rotation = angleInDegrees(t)
			})
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hd(),
				$.bt('sgun', function () {
					sgun(guy)
				}))
		boot = $.boot()
		boot.A(div, st.canvas)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		_.t(100, function () {
			var a = ast();
			a.a();
			a.p()
		})
		st.t(function () {
			if (PL) {
				_.e(aA, function (a) {
					a.u()
				})
			}
		})
		sgun(guy)
	}
}