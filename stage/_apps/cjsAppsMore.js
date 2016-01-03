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