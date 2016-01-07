 
	cjs.src = _.src
	STG = function () {
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
	LAYS = PLAX = function () {
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
	CVTX = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
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
	GRID = function () {
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
	TGL = TANGLE = function () {
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
	CNN = CONNECT = function () {
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
	GROW = function () {
		z()
		$St(500, 500).bm('me', function (bm) {
			b = bm
			bm.grow().dg()
		})
	}//F}}
//function ui() {
	ZX = function () {
		$.fn.md = function (l) {
			var c = this
			c.mousedown(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mu = function (l) {
			var c = this
			c.mouseup(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mm = function (l) {
			$l('mU')
			var c = this
			c.mousemove(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.$$ = $.fn.dblclick
		$.eD = $.editDiv = function (words) {//$.dE
			canMove = true
			changeLocation = true
			inputMove = true
			mouse = 'up'
			ta = $.ta().mar(4)
			sp = $.sp().C('z')
			fn = function () {
				sp.T(ta.v())
			}
			d = $.dA('+').C('n', 'y').pad(8)
			d.zIndex(0)
			xBt = $.bt('', function () {
				d.rm()
			}).WH(4).C('red')
			d.md(function () {
				inputMove = false;
				mouse = 'div'
			})
			d.mu(function () {
				mouse = 'up'
			})
			d.md(function () {
				$.editDiv.TOP++
				$(this).zIndex($.editDiv.TOP)
			})
			ta.md(function (e) {
				$.editDiv.TOP++
				$(this).parent().zIndex($.editDiv.TOP)
				location = {top: d.Y(), left: d.X()}
				inputMove = true
				mouse = 'input'
				e.stopPropagation()
			})
			ta.mm(function (e) {
				if (inputMove) {
					e.stopPropagation();
					d.XY(location.left, location.top)
				}
			})
			if (U(words)) {
				return d.A(xBt, $.br(), sp.hd(), ta,
						$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
							$(this).pa().free()
						})
				).$$(function (e) {
							e.stopPropagation()
							sp.T(ip.v())
							xBt.gg();
							ip.gg();
							sp.gg()
						})
			}
			else {
				ip.v(words)
				sp.T(ta.v())
				return d.$$(function (e) {
					e.stopPropagation()
					sp.T(ta.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				}).A(xBt, $.br(), sp, ip.hd())
			}
		};
		$.editDiv.TOP = 0
		z()
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}//C-
	FANCYY = function (x, y) {
		z()
		canvas = $.c('g', 400)
		st = stage = $St(canvas[0])
		frame = $.dragFrame(sp = $.sp())
		sp.A(
				$.bt('X', function () {
					frame.rm()
				}),
				$.bt('pics', function () {
					$.imgDiv(st)
				}),
				$.bt('transform'),
				$.bt('text'),
				$.bt('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							st.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								//                    stagePainter(paintStage)
							})
				}),
				$.bt('cut'),
				$.bt('save'))
		sp.A($.br(), canvas)
		sp.A($.d().A(
				$.bt('clear', function () {
					st.removeAllChildren()
				}),
				$.bt('flat', function () {
					st.removeAllChildren()
					st.bm(st.toDataURL(), function (bm) {
						bm.dg()
					})
				}),
				$.bt('clone', function () {
					var sp = $.sp(),
							newStage = $.dragStage().A(sp)
					newStage.bm(st.du(), function (bm) {
						SL(bm)
					})
				}),
				$.bt('recur', function () {
					stbm(st.du(), function (bm) {
						bm.sxy(.4).SL()
					})
				}),
				$.bt('copy', function () {
					_copy = st.du()
				}),
				$.bt('paste', function () {
					st.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.bt('replace', function () {
					st.rm()
					st.bm(_copy, function (bm) {
						bm.dg()
					})
				})
		))
		sp.$$(function () {
			$('button').toggle()
		})
		sp.A()
	}//C
	FANCY = function (x, y) {
		z()
		$.iD = $.imgDiv = function (st) {
			d = $.d('y', '+')
			$.eGj('img', function (i) {
				d.A($.c(100, 100).fit(i.d)
						.$(function () {
							st.bm(i.d, function (bm) {
								bm.sXY(.4).dg()
							})
						}))
			})
		}
		canvas = $.c('g', 400)
		stage = new cjs.Stage(canvas[0]).t()
		frame = $.dragFrame(theSpan = $.sp())
		theSpan.A(
				$.button('X', function () {
					frame.remove()
				}),
				$.button('pics', function () {
					$.imgDiv(stage)
				}),
				$.button('transform'),
				$.button('text'),
				$.button('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							stage.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								stagePainter(paintStage)
							})
				}),
				$.button('cut'),
				$.button('save'))
		theSpan.A($.br(), canvas)
		theSpan.A($.div().A(
				$.button('clear', function () {
					stage.removeAllChildren()
				}),
				$.button('flat', function () {
					stage.removeAllChildren()
					stage.bm(stage.toDataURL(), function (bm) {
						bm.drag()
					})
				}),
				$.button('clone', function () {
					var newSpan = $.sp()
					var newStage = $.dragStage(newSpan)
					newStage.bm(stage.du(), function (bm) {
						SL(bm)
					})
				}),
				$.button('recur', function () {
					stage.bm(stage.du(), function (bm) {
						bm.sXY(.4)
						SL(bm)
					})
				}),
				$.button('copy', function () {
					_copy = stage.du()
				}),
				$.button('paste', function () {
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.button('replace', function () {
					stage.rm()
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				})
		))
		theSpan.dblclick(function () {
			$('button').toggle()
		})
		theSpan.A()
	}//A-
	ST2 = function () {
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
	BOWL = function () {
		St()
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
	function textApps() {
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		function text() {
			BASELINE = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
				s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
				s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
			}//C+
			LINEH = function () {
				z()
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
			}//C-
			LINEW = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
				s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
				s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
			}//C-
			ALIGN = function () {
				z()
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
			}//B+
		}
		
		function write() {
			CHALK = function () {
				w = b2d.mW()
				s = w.s
				s.bm('me')
				text = cjs.chalk('some information ....')
				text2 = cjs.chalk('some more').XY(50, 90)
				s.A(text, text2)
			}
			CHALK = function () {
				w = b2.mW()
				s = w.s
				s.bm('me')
				text = cjs.chalk('some information ....')
				text2 = cjs.chalk('some more').XY(50, 90)
				s.A(text, text2)
			}
			CHALK = function () {
				w = b2.mW()
				s = w.s
				s.bm('me')
				text = cjs.chalk('some information ....')
				text2 = cjs.chalk('some more').XY(50, 90)
				s.A(text, text2)
			}
		}
	}
	
	function gpcEaselOld() {
		CJGPC = CJG = function () {
			$.h1('easel gpc');
			st = $St();
			h = st.h()
			p1 = $pD(vs1);
			p2 = $pD(vs2)
			Bt('diff', 'D');
			Bt('inter', 'I');
			Bt('uni', 'U');
			Bt('xor', 'X')
			setup()
			function drawP(pol, sC, ox, oy) {
				pol.e(function (p, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
					h.vs(p.pts(), ox, oy)
							.cp().s().f()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function Bt(tx, op) {
				return $.bt(tx, function () {
					var p = p1[op](p2)
					setup();
					drawP(p, 'g', 0, 150)
				})
			}
		}
		CJG20 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
							.l(4).s(col)
							.vs(innerPoly.pts(), ox, oy).cp()
							.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJG10 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
							fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
							v = innerPoly.pts()
					h.c(fCol, sCol, 4).mt(v, ox, oy)
					//h.pol(v, ox, oy, fCol, sCol, 4)
					h.cp();
					h.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJGPC = CJG = function () {
			$.h1('easel gpc');
			st = $St();
			h = st.h()
			p1 = $pD(vs1);
			p2 = $pD(vs2)
			Bt('diff', 'D');
			Bt('inter', 'I');
			Bt('uni', 'U');
			Bt('xor', 'X')
			setup()
			function drawP(pol, sC, ox, oy) {
				pol.e(function (p, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
					h.vs(p.pts(), ox, oy)
							.cp().s().f()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function Bt(tx, op) {
				return $.bt(tx, function () {
					var p = p1[op](p2)
					setup();
					drawP(p, 'g', 0, 150)
				})
			}
		}
		CJG2 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
							.l(4).s(col)
							.vs(innerPoly.pts(), ox, oy).cp()
							.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJG1 = function () {
			St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
							fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
							v = innerPoly.pts()
					h.c(fCol, sCol, 4).mt(v, ox, oy)
					//h.pol(v, ox, oy, fCol, sCol, 4)
					h.cp();
					h.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
	}
	
	function mouseApps() {
		ENTERST = function () {
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
		MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
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
		}
		HAN = HANDEV = function () {
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
		}//B+
		MX0 = MATRIX0 = function () {
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
		MOUSE = BUB8 = MOUSEVENTS = BUBBLE = function () {
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
		HITC1 = HITCIRCLES1 = function () {
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
		}//A
		HITC = HITCIRCLES = function () {
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
		}//A
		RMEVT8 = function () {
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
	}
	
 
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
