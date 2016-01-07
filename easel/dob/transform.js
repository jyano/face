dO.scX = dO.sX = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleX
	}
	dO.scaleX = n
	return dO
}
dO.scY = dO.sY = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleY
	}
	dO.scaleY = n
	return dO
}
dO.scXY = dO.sXY = function (x, y) {
	function alt() {
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
	}
	
	var dO = this,
			g = G(arguments), v
	if (U(g[0])) {
		return dO
		return {x: dO.sX(), y: dO.sY()}
	}
	v = V(g[0], g[1])
	x = _.tN(v.x)
	y = _.tN(v.y, v.x)
	dO.sX(x)
	dO.sY(y)
	return dO
}
dO.skX = dO.kX = function (skewX) {
	if (U(skewX)) {
		return this.skewX
	}
	this.skewX = skewX;
	return this
}
dO.skY = dO.kY = function (skewY) {
	if (U(skewY)) {
		return this.skewY
	}
	this.skewY = skewY;
	return this
}
dO.skXY = dO.kXY = function (x, y) {
	function alt() {
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
	}
	
	y = N(y) ? y : x
	return this.kX(x).kY(y)
}
dO.rt = dO.rot = function (rotation) {
	function alt() {
		dO.rt = dO.rot = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
	}
	
	var args = G(arguments);
	rotation = args[0]
	if (args.p) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation + rotation)
	}
	if (args.n) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation - rotation)
	}
	if (U(rotation)) {
		return this.rotation
	}
	this.rotation = rotation
	return this
	dO.rtAlt = function () {
		var dO = this, g = G(arguments), a = g[0]
		if (g.p) {
			return dO.rt(dO.rotation + _.tN(a, 1))
		}
		if (g.n) {
			return dO.rt(dO.rotation - _.tN(a, 1))
		}
		if (U(a)) {
			return dO.rotation
		}
		dO.rotation = a
		return dO
	}
	dO.rotAlt = function (rotation) {
		var args = G(arguments);
		rotation = args[0]
		if (args.p) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation + rotation)
		}
		if (args.n) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation - rotation)
		}
		if (U(rotation)) {
			return this.rotation
		}
		this.rotation = rotation
		return this
	}
}
dO.sTf = dO.setTransform
dO.tf = dO.transform = function () {
	var dO = this, g = G(arguments)
	dO.setTF = dO.sTf = function () {
		var dO = this, g = G(arguments)
		dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
		return dO
	}
	dO.getTf = dO.gTf = dO.getTransform = function () {
		var dO = this
		return [
			dO.x, dO.y, dO.scaleX, dO.scaleY,
			dO.rotation, dO.skewX, dO.skewY,
			dO.regX, dO.regY
		]
	}
	return g.f ?
			dO.sTf.apply(dO, g.A_ ? g.f : g) :
			dO.gTf()
	function alt() {
		dO.tf = function () {
			var i = this, g = G(arguments)
			if (U(g[0])) {
				return [
					i.x,
					i.y,
					i.scaleX,
					i.scaleY,
					i.rotation,
					i.skewX,
					i.skewY,
					i.regX,
					i.regY
				]
			}
			if (O(g[0]) && F(g[0].getTransform)) {
				g[0] = g[0].getTransform()
			}
			i.setTransform.apply(i, A(g[0]) ? g[0] : g)
			return i
		}
	}
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
TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
	angle = 0
	img = $.img('me', handleImageLoad)[0]
	function stop() {
		cjs.Ticker.removeEventListener("tick", tick)
	}
	function handleImageLoad() {
		canvas = $.canvas('p', 960, 400).id("testCanvas").A()
		stage = $St(canvas)
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
GROW = function () {
	$St(500, 500).bm('me', function (bm) {
		bm.grow().dg()
	})
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
  

 