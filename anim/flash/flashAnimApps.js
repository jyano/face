// https://www.youtube.com/watch?v=KwCSmOvOgDc
FLASHSCROLLER = function () {
	W()
// ****  THIS WORKS!!!
	var p
	s = w.i
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>')
	)
	exportRoot = new lib.scroller2()
	//s=stage = cjs.stage(550,400).A().A( exportRoot )
	T.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	//$('canvas').click(function(){_vy=-20})
	processCollisions = function () {
		return
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	T.t(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//D
TKBRIT = function () {

//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		T.setFPS(lib.properties.fps);
		T.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//
TIMELINE = function () {
	s = $St()
	q = cjs.lq(['me', 'guy'], function (res) {
		me = s.bm(res('me')).XY(300)
		guy = s.bm(res('guy')).XY(200)
		cjs.tl([
			me.tw([{sx: 2}, 10000]),
			me.tw([{sy: 2}, 10000]),
			guy.tw([{r: 20}, 10000], [{r: 0}, 10000])
		])
	})
}//f
MC1 = function () {
	//Uncaught TypeError: cjs.cir is not a function
	$St()
			.mc(null, 0, true, {start: 0, middle: 40})
			.tl(
			cjs.circ(50, 'r').Y(200).tw({x: 100}, [{x: 600}, 40], [{x: 100}, 40]),
			cjs.circ(50, 'b').Y(200).tw({x: 600}, [{x: 100}, 40], [{x: 600}, 40])
	).p("middle")
}//f
REDROBOT = function () {
	z()
	//this is a fancy mc
	s = $St(1000).A()
	g = cjs.gunner()
	return
	s.A(g)
	g.drag()
	g.XY(400, 200)
}//f
RUNNINGMAN = function () {
	s = stage = $St()
	$.i("/MonsterAIdle.png", function (i) {
		imgMonsterAIdle = i[0]
	})
	$.i("/MonsterARun.png", function (i) {
		imgMonsterARun = i[0]
	})
	$.bt('start', startGame).A()
	$.bt('reset', function () {
		s.removeAllChildren()
		cjs.Ticker.removeAllListeners()
		// stage.update()
	}).A()
	function startGame() {
		screen_width = s.W()
		screen_height = s.H()
		//Idle sequence of the monster
		spriteIdle = new cjs.Sprite(new cjs.SpriteSheet({
			images: [imgMonsterAIdle],
			frames: {width: 64, height: 64, regX: 32, regY: 32},
			animations: {idle: [0, 10, "idle", 4]}
		}))
		spriteIdle.name = "monsteridle1"
		spriteIdle.XY(16, 32)
		// create sprite.. and set the registration point (the point it will be positioned and rotated around) to the center of the frame dimensions:
		sprite = new cjs.Sprite(
				new cjs.SpriteSheet({
					images: [imgMonsterARun],
					frames: {width: 64, height: 64, regX: 32, regY: 32},
					animations: {walk: [0, 9, "walk", 4]}// To slow down the animation loop of the sprite, we set the frequency to 4 to slow down by a 4x factor
				}).addFlipped(true, false, false))
		//sprite.regX = sprite.spriteSheet.frameWidth/2 || 0
		//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
		// start playing the first sequence: walk_h has been generated by addFlippedFrames and  contained the right facing animations
		sprite.p("walk_h") 	//walking from left to right
		//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
		sprite.name = "monster1"
		sprite.direction = 90
		sprite.XY(16, 32).vXY(1, 0).a2(s)
		sprite.currentFrame = 10
		// we want to do some work before we update the canvas,  // otherwise we could use Ticker.addListener(stage);
		T.setFPS(40)
	}
	
	_.ev(.1, function onTick() {
		if (sprite.x >= screen_width - 16) {
			sprite.direction = -90;
			sprite.gotoAndPlay("walk")
		} // Hit testing the screen width, otherwise our sprite would disappear // We've reached the right side of our screen   // We need to walk left now to go back to our initial position
		if (sprite.x < 16) {   // We've reached the left side of our screen // We need to walk right now
			sprite.direction = 90
			sprite.gotoAndStop("walk")
			s.removeChild(sprite)
			spriteIdle.gotoAndPlay("idle")
			stage.addChild(spriteIdle)
		}
		// Moving the sprite based on the direction & the speed
		if (sprite.direction == 90) {
			sprite.x += sprite.vX;
			sprite.y += sprite.vY
		}
		else {
			sprite.x -= sprite.vX;
			sprite.y -= sprite.vY
		}
	})
}//f
TOOLKITBRITNEY = function () {
	
	//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
		// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
		// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
		// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.c('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		stage.update()
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}//f
FLASHSCROLLER1 = function () {
	z()
	// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().tf(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.bt('start', function () {
				boundaries.tw([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = $St(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hd()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').$(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}//f
MOVIE = function () {//wap()
	z()
	var s = $St($.c('b', 800, 800).A()).t(),
			div = $.d().A(),
			fn = function () {
			}
	$.getJSON('/img', function (imgs) {
		_.e(imgs, function (v) {
			v = v.d
			var canvas = $.c(100, 100).A().fit(v)
			canvas.$(function () {
				s.bm(v, function (b) {
							bb = b
							createjs.bindTransform(b);
							//fn(b)
							b.$(function (q) {
								fn(q)
							})
						},
						'+')
			})
			div.A(canvas)
		})
		part2 = function () {
			c = $.Ct().A(
					$.row.A(
							$.d().A(div, s),
							$.d().A(
									$.bt('shake', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({x: b.x()}, 500))
													.to(ww({x: b.x() + 100}), 500)
													.to(ww({x: b.x()}), 500)
										}
									}),
									$bt('rotate', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
										}
									}),
									$bt('size', function () {
										fn = function (b) {
											W$.get(b.obj(), {loop: true})
													.to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
										}
									})
							)))
		}
		//c.o('$$',function(){  s.sv(ART)})
	})
	return s
}//f
STAGE = function () {
	z()
	m$$("location=location")
	s = $St(600).rgc().drag().XY(300)
	s.bm('chicks')
	s.bm('me', function (mm) {
		m = mm
		m.rgc()
		m.XY(300)
		$Tw(s, [{r: -10000}, 300000])
		$Tw(m, [{r: 100000}, 300000])
	})
	s.bm('guy', function () {
	})
}//f
CJSSPINNER = function () {
	z()
	s = $St('purple', 1000).A().rC()
	$Tw(s, [{r: -10000}, 300000])
	s.bm('me', function (bm) {
		m = bm.XY(500)
		SL(bm)
	})
	s.A(r = $h().rec(400, 400, 'orange', 'red').XY(1200))
	s.A(r2 = $h().rec(300, 300, 'pink', 'red').XY(800))
	s.A(r3 = $h().rec(300, 300, 'green', 'green').XY(0))
}//f
RECTS = function () {
	z()
	x = 20
	y = 20
	s = $St(500).A()//.drag()
	h0 = $h().rec(-20, -20, x + 40, y + 40, 'yellow', 'yellow')
	h1 = $h().rec(-10, -10, x + 20, y + 20, 'red', 'pink')
	h2 = $h().rec(0, 0, x, y, 'orange', 'black')
	s.A(h0, h1, h2)
	SL(h2)
	SL(h2, h1)
	SL(h2, h0)
	RT(h1)
	RT(h1, h2)
	RT(h1, h0)
	SC(h0)
	SC(h0, h2)
	SC(h0, h1)
	a = function () {
		x += 20;
		y += 20
		h1.clr()
		h2.clr()
		h1.rec(-10, -10, x + 20, y + 20, 'black', 'pink')
		h2.rec(0, 0, x, y, 'orange', 'transparent')
	}
	a()
	h0.rec(50, 50, 30, 30, 'black', 'orange')
}//f
ZOENOANIM = function () {
	z()
	spr = $Sp({
		"framerate": 24,
		"images": ["/zoetest.png"],
		"frames": [
			[0, 0, 512, 256, 0, -133, -143],
			[512, 0, 512, 256, 0, -133, -143],
			[1024, 0, 512, 256, 0, -133, -143]
		],
		"animations": {}
	})
	s = $St(1000).A()
	s.A(spr)
	// spr.p()
}//F
ZOEFRAMES = function () {
	z()
	spr = cjs.sprite({
		"framerate": 24,
		"images": ["/sprite2.png"],
		"frames": [
			[0, 0, 128, 128, 0, -176, -161],
			[128, 0, 128, 128, 0, -176, -161],
			[256, 0, 128, 128, 0, -176, -161]
		],
		"animations": {
			"weird": {"speed": 1, "frames": [2]},
			"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
		}
	})
	anis = spr.spriteSheet._animations
	// aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
	s = $St(1000).A()
	s.A(spr.drag())
}//F
CHAR0 = function () {
	showSprite(Sprites.char)
	function showSprite(sprite) {
		z()
		s = $St(1000).A()
		spr = cjs.sprite(sprite).drag().a2(s)
	}
}//F
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
TOOLKITBRITNEY = function () {

//ok an export using toolkit!
	z()
	var stage, exportRoot, lib, images
	flashFunction = function (lib, img, cjs) {
		var p; // shortcut to reference prototypes
// library properties:
		lib.properties = {
			width: 550,
			height: 400,
			fps: 24,
			color: "#FFFFFF",
			manifest: [{src: "/britney.jpeg", id: "britney"}, {src: "/gaga.jpeg", id: "gaga"}]
		};
// symbols:
		lib.britney = function () {
			this.initialize(img.britney)
		}
		lib.britney.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194)
		lib.gaga = function () {
			this.initialize(img.gaga)
		}
		lib.gaga.prototype = p = new cjs.Bitmap()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208);
		lib.gaga_1 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.gaga()
			this.addChild(this.instance)
		}
		lib.gaga_1.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 242, 208)
		lib.brit = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.britney()
			this.A(this.instance)
		}
		lib.brit.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(0, 0, 259, 194);
		lib.Tween2 = function () {
			this.initialize()
			// Layer 1
			this.instance = new lib.brit()
			this.instance.setTransform(134, -109.5, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1()
			this.instance_1.setTransform(-148.9, 33, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.A(
					this.instance_1,
					this.instance
			)
		}
		lib.Tween2.prototype = p = new cjs.Container()
		p.nominalBounds = new cjs.Rectangle(-263.5, -206.5, 527, 413);
		lib.Tween1 = function () {
			this.initialize();
			// Layer 1
			this.instance = new lib.brit().transform(-57.6, 52.6, 1, 1, 0, 0, 0, 129.5, 97);
			this.instance_1 = new lib.gaga_1();
			this.instance_1.setTransform(72.5, 0.1, 1.537, 0.24, 60, 0, 0, 121, 104.1);
			this.addChild(this.instance_1, this.instance)
		}
		lib.Tween1.prototype = p = new cjs.Container();
		p.nominalBounds = new cjs.Rectangle(-187.1, -173.5, 374.2, 347.1)
// stage content:
		lib.Untitled3 = function (mode, startPosition, loop) {
			this.initialize(mode, startPosition, loop, {})
			// Layer 1
			this.instance = new lib.gaga_1()
			this.instance.setTransform(275, 200.5, 1, 1, 0, 0, 0, 121, 104)
			this.instance_1 = new lib.Tween1("synched", 0)
			this.instance_1.setTransform(202.6, 200.5)
			this.instance_1._off = true
			this.instance_2 = new lib.Tween2("synched", 0)
			this.instance_2.setTransform(301.9, 206.5)
			this.timeline.addTween(
					cjs.Tween.get({})
							.to({state: [{t: this.instance}]})
							.to({state: [{t: this.instance_1}]}, 19)
							.to({state: [{t: this.instance_2}]}, 10)
							.wait(1))
			this.timeline.addTween(cjs.Tween.get(this.instance).to({
				_off: true,
				regX: 0,
				regY: 0,
				x: 202.6,
				mode: "synched",
				startPosition: 0
			}, 19).wait(11));
			this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: false}, 19).to({
				_off: true,
				x: 301.9,
				y: 206.5
			}, 10).wait(1))
		}
		lib.Untitled3.prototype = p = new cjs.MovieClip()
		p.nominalBounds = new cjs.Rectangle(429, 296.5, 242, 208)
	}
	flashFunction(lib = lib || {}, images = images || {}, createjs = createjs || {})
	$.canvas('y', 550, 400).id('canvas').A()
	canvas = document.getElementById("canvas")
	images = images || {}
	loader = new createjs.LoadQueue(false)
	loader.addEventListener("fileload",
			handleFileLoad = function (evt) {
				if (evt.item.type == "image") {
					images[evt.item.id] = evt.result
				}
			})
	loader.addEventListener("complete", function () {
		exportRoot = new lib.Untitled3();
		stage = new createjs.Stage(canvas)
		stage.addChild(exportRoot)
		stage.update()
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage)
	})
	loader.loadManifest(lib.properties.manifest)
}
FLASHSCROLLER = function () {
	z()
// ****  THIS WORKS!!!
	var p
	images = {}
	lib = {properties: {width: 550, height: 400, fps: 24, color: "#FFFFFF", manifest: []}};
	(lib.StartMarker = function () {
		this.initialize();
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#339933").s().p("Ah0B0QgvgwgBhEQABhDAvgxQAxgvBDgBQBEABAwAvQAwAxABBDQgBBEgwAwQgwAwhEABQhDgBgxgwg");
		this.shape.setTransform(0, 0, 1.515, 1.515);
		this.addChild(this.shape);
	}).prototype = new cjs.Container().bounds(-25, -25, 50, 50);
	(lib.Player = function () {
		this.initialize()
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f("#CC0000").s().p("AhtDHIAAmOIDaAAIAAGOg");
		this.shape.setTransform(0, -20)
		this.addChild(this.shape)
	}).prototype = p = new cjs.Container();
	p.nominalBounds = new cjs.Rectangle(-11, -40, 22, 40);
	(lib.Boundries = function () {
		this.initialize();
		// Layer 1
		this.shape = new cjs.Shape()
		this.shape.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhPBfICfi9")
		this.shape.setTransform(846, 100.5)
		this.shape_1 = new cjs.Shape()
		this.shape_1.graphics.f().s("#0066CC").ss(38, 1, 1).p("AjCB9ICgifIDlha")
		this.shape_1.setTransform(777.5, 163.5);
		this.shape_2 = new cjs.Shape()
		this.shape_2.graphics.f().s("#0066CC").ss(38, 1, 1).p("Aw2FtIBGlAIHMDwQBXixCLhwQEJBtDPBgQBMAkBGg1QAegXANgkICgAAQBQlqFUANIBQiMIBQAA");
		this.shape_2.setTransform(627, 261.5);
		this.shape_3 = new cjs.Shape()
		this.shape_3.graphics.f().s("#0066CC").ss(38, 1, 1).p("AikhAIjSCBAikhAIhQAAAF3APIobhP")
		this.shape_3.setTransform(-157.5, 229.5);
		this.shape_4 = new cjs.Shape()
		this.shape_4.graphics.f().s("#0066CC").ss(38, 1, 1).p("AEYjHIszhGIQ3IbImulx")
		this.shape_4.setTransform(-17, 253);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f().s("#0066CC").ss(38, 1, 1).p("AhXgTQBigNBNA2");
		this.shape_5.setTransform(452.8, 235.1);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f().s("#0066CC").ss(38, 1, 1).p("Ag1AAIBsAA");
		this.shape_6.setTransform(123.5, 342);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f().s("#0066CC").ss(38, 1, 1).p("AALkRQGogLDzFiIAAB9I1LBQ");
		this.shape_7.setTransform(356.8, 309.5);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#0066CC").ss(38, 1, 1).p("AsujgIBuAAID0A/QHfAfG2DcQBVAqBdAUQBxAYBDAxAnMihIBCARIAoAAQAjAtAPAHImkhIQCGgFCCAIgAmojgIkYAA");
		this.shape_8.setTransform(222.5, 239.5)
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0066CC").s().p("AmOE2IAApqIMdAAIAAJqg");
		this.shape_9.setTransform(101, 227);
		this.addChild(
				this.shape_9, this.shape_8, this.shape_7, this.shape_6, this.shape_5, this.shape_4,
				this.shape_3, this.shape_2, this.shape_1, this.shape);
	}).prototype = p = new cjs.Container().bounds(-214, 72, 1087, 289);
	lib.scroller2 = function () {// stage content:
		this.initialize()
		this._player = new lib.Player()//.transform(115,147,1,1,0,0,0,11,20);
		this._boundaries = new lib.Boundries().transform(40, 31, 1, 1, 0, 0, 0, 40, 31);
		this._startMarker = new lib.StartMarker()//.transform(120.5,135.5,1,1,0,0,0,16.5,16.5);
		this.addChild(this._startMarker, this._boundaries, this._player)
	}
	lib.scroller2.prototype = new cjs.Container().bounds(61, 272, 1087, 289)
	$('body').A(
			$.button('start', function () {
				boundaries.tween([{x: -500}, 10000])
			}),
			$('<br>'))
	exportRoot = new lib.scroller2()
	s = stage = cjs.stage(550, 400).A().A(exportRoot)
	cjs.Ticker.setFPS(lib.properties.fps)
	startMarker = exportRoot._startMarker.X(275).hide()
	player = exportRoot._player.rXY(0).X(275)
	boundaries = exportRoot._boundaries.XY(500, 0)
	_vx = 0
	_vy = 0
	$.key({
		l: function () {
			_vx = -7
		},
		L: function () {
			_vx = 0
		},
		r: function () {
			_vx = 7
		},
		R: function () {
			_vx = 0
		},
		u: function () {
			_vy = -20
		}
	})
	$('canvas').click(function () {
		_vy = -20
	})
	processCollisions = function () {
		if (_vy <= 0) {
			return
		}
		if (player.belowStg()) {
			$l('fell off')
			cjs.Tween.removeAllTweens()
			boundaries.XY(500, 0)
			_vy = 0
			player.XY(startMarker)
		}
		else {
			if (collision = boundaries.test(player)) {
				while (collision) {
					_vy = 0
					player.y -= .1
					collision = boundaries.test(player)
				}
				_vy = 0
			}
		}
	}
	scrollStage = function () {
		boundaries.x += (s.W() * .5) - player.x
		player.X(s.W() * .5)
	}
	cjs.tick(function () {
		_vy += 2
		player.x += _vx;
		player.y += _vy;
		processCollisions()
		scrollStage()
	})
}