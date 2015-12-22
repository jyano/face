$L('bmFill', 'mouse')
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
$.me('ME', function (me) {
	gx = $St().Gx()
			.SS().F().dc(200, 200, 200).S().dc(400, 400, 200)
			.S()._bf(me).dc(400, 400, 200)
})
MTLT = function () {
	St()
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
SIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = $St($.c(600, 300)[0])
	st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = $St($.c(600, 300)[0]).t()
	st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = $St($.c(600, 300)[0]).t()
	st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
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
CIR2 = HDC = function () {
	st = $St()
	//return
	h = $Sh()
	h.graphics.f('blue')
	h.dc(100, 100, 100)
	
	h.graphics.f('yellow')
	h.dc(200, 100, 100)//.cir()

	st.A(h).u()
	
	return
	
	cv = $.c(1000, 500).A()
	st = new cjs.S(cv[0])
	st.t()//.b()
	
	ct = $Ct().XY(0, 0).a2(st)
	h = $H().a2(ct).XY(0, 0).a2(ct)
	h.f('b').dc(400, 100, 10)

	 ct.A(
	 cjs.cir({
	 r: 100,
	 c: 'r', C: 'g', l: 50,
	 oX: 100
	
	 }).XY(0,0)//.XY(300,400)
	 )
	
	 
}
CIR01 = function () {
	ct = $Ct().a2($St(600))
 	
	ct.A(
			cjs.cir(100, 100).f('y').dc(0, 0, 4)
	)
	
	ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
	ct.A(cjs.cir(80, 300,  'g', 'y', 30))
}
CIR1 = CJSCIR = function () {

	  
	ct = $Ct().a2( $St(600) )
	
	
	ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
 
	ct.A(cjs.cir(400, 300).f('r').dc(28, 40, 40))
	h = $H().a2(ct) 
	h.f('o').dc(100, 300, 105)///x, r , r = 50
	h.f('z').dc(100, 300)
	h.f('r').dc(100, 300, 50)
	h.f('b').dc(100, 300)//r, x=0, y=0
	h.f('r').dc(100)
	
	 
	
}
CIR3=DRG = GOB = function () {st =  $St() //good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		//gx._bf(img)
		gx._dc({x: 100, y: 200, r: 200})
		gx.C('R')._dc({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
CIR4 = HCR = function () {
	gx = $Gx().f('pink').ss(10).s('white')
	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	st = $St().A($Sh(gx).XY(300, 100)).u()
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	st.A(h).u()
}
RGB = function () {
	gx = $Gx().f(
			cjs.rgb(255, 0, 0)
	).ss(10).s('white')
	gx.dc(0, 0, 100).dc(100, 0, 100)
	gx.s('blue').f('green').dc(0, 300, 100)
	st = $St().A($Sh(gx).XY(300, 100)).u()
	h = $Sh()
	h.graphics.f('blue')
	//h.cir(100, 100, 100)
	//h.graphics.f('yellow')
	h.cir(200, 100, 100, 'r')
	st.A(h).u()
}
CIR0 = ROTCIRS = function () {
	ct = $Ct().a2($St(1000, '+')).A(
			$H(100, 100).f('r')
					.dc(30).dc(30, 20).dc(250, 250))
	$t(function (e) {
		ct.rt(
				ct.rt() + 3
		)
	})
}
CIR99 = CIRCS8 = function () {
	CIRCTEST8 = function () {
		$St()
		s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
				[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
		s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
	}//D better as wap
	$St()
	h.c('b', 'r', 10).XY(-100, -100)
	h.dc(200, 200, 50).dc(400, 200, 50).dc(600, 200, 50)
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c('*').dc(100, 200, 50).dc(100, 250, 50)
	h.c('***').dc(200, 200, 50).dc(200, 250, 50)
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
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		st.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200})
		st.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200})
		st.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40)
	})//D
}
POL = function () {
	$St().Gx().FS()._mt(100, 300)
			._lt(300, 100)._lt(500, 200)._lt(800, 200)
			._lt(100, 300)
			._pol(vs1)
}
REC  = function () {
	
	$St()
	
	h = st.Sh().dg()
	gx = h.graphics
	
	gx.FS()._dr()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	h.dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 30)
}
CEN = YSTAR = CENSHP = function () {
	stage = cjs.stage(500, 600).A()
	shape = new cjs.Shape()
	SL(shape)
	stage.A(shape)
	shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.XY(200)
		me.sXY(.4)
	})
}
CSH = CENTERSHAPE8 = function () {
	CENTERSHAPE9 = function () {
		z()
		stage = St(500, 600).A()
		shape = stage.Shape();
		SL(shape)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
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
		stage = St(500, 600).A()
		shape = stage.Shape();
		SL(shape)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
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
GXPOL = function () {
	$S$().Gx().FS().poly([vs1])
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
}
 