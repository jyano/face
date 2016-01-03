SPRY = function () {
	W([1200, 600, 2400, 1200], {g: 20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
	//w.s.bm('earth', function(me){me.XY(400,400)fn()})
	//function fn(){
	y = w.spBox($$ship).track()
	$.K($$ship.key)
	$.K({  //takes a spritebox!//uses cjs.watchKeys()
		l: function () {
			y.rot(8, '-')
		},
		r: function () {
			y.rot(8, '+')
		},
		u: function () {
			y.I(0, -10)
		}
	})
	y.aD(.5)
//}
}
CHAR = function () {
	w = b2d.W().debug()
	w.begin(function (cx) {
		if (cx.with('hurt')) {
			b.p('hurt').I(100, -200)
		}
		if (cx.with('fly')) {
			b.p('fly').I(-100, -200)
		}
	})
	b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
	guyBrick(100).K('hurt')
	guyBrick(500).K('fly')
	function guyBrick(x) {
		return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
	}
}
MUMMYFLIP = function () {
	w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
	b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
			cjs.sprite(Mummy).a2(w.s).drag()
					.rXY(20, 22).sXY(2).XY(200))
	b.coll(function () {
		b.linVel(0)
	})
	b.sprite.p('walk')
	cjs.tick(function () {
		b.rT(0)
		if (b.direction == 'right') {
			b.I(4, -2)
		}
		else if (b.direction == 'left') {
			b.I(-4, -2)
		}    // direction='neither' // <-- demumify (doesnt keep walking
		//if(jumpButton is pressed){jump()}
	})
	$.kD({
		u: function () {
			//jumpButtonPressed = true
			if (b.Y() > 530) {
				b.I(0, -80)
			}
		},
		U: function () {
			//jumpButtonPressed = false
		},
		l: function () {
			b.sprite.sX(-2)
			b.direction = 'left'
		},
		r: function () {
			b.sprite.sX(2)
			b.direction = 'right'
		}
	})
}
STICK = function () {
	w = b2d.W({grav: 3})
			.chalk('spritebox example').debug()
	w.spriteBox({
		"framerate": 4,
		"images": ["stick.png"],
		"frames": [
			[0, 0, 512, 512, 0, -22, -2],
			[512, 0, 512, 512, 0, -22, -2],
			[1024, 0, 512, 512, 0, -22, -2],
			[0, 512, 512, 512, 0, -22, -2],
			[512, 512, 512, 512, 0, -22, -2],
			[1024, 512, 512, 512, 0, -22, -2],
			[0, 1024, 512, 512, 0, -22, -2],
			[512, 1024, 512, 512, 0, -22, -2],
			[1024, 1024, 512, 512, 0, -22, -2],
			[0, 1536, 512, 512, 0, -22, -2],
			[512, 1536, 512, 512, 0, -22, -2],
			[1024, 1536, 512, 512, 0, -22, -2]
		],
		"animations": {
			"die": {"frames": [8, 9, 10], "speed": .1, next: false},
			"walk": {"frames": [1, 2, 3, 4], "speed": .1},
			"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
		}
	}, 300, 200, .25).mario()
	w.rect(600, 200, 50, 50, 'p')
	w.circ(600, 100, 40, 'b')
}
$t = function (fn) {
	T.t(fn)
}
ZNA = ZOENOANIM = function () {
	z()
	spr = cjs.sprite({
		"framerate": 24,
		"images": ["/zoetest.png"],
		"frames": [
			[0, 0, 512, 256, 0, -133, -143],
			[512, 0, 512, 256, 0, -133, -143],
			[1024, 0, 512, 256, 0, -133, -143]
		],
		"animations": {}
	})
	s = cjs.stg(1000).A()
	s.A(spr)
}
ZFR = ZOEFRAMES = function () {
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
	// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
	s = cjs.stg(1000).A()
	s.A(spr.drag())
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
		// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
		s = cjs.stg(1000).A()
		s.A(spr.drag())
	}
}
CHA = CHAR0 = function () {
	showSprite(Sprites.char)
	function showSprite(sprite) {
		z()
		s = cjs.stg(1000).A()
		spr = cjs.sprite(sprite).drag().a2(s)
	}
}
STK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new createjs.SpriteSheet({
		images: ["/stik.png"],
		frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
	})
	stick_p = stick.prototype = new createjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	st = __$St()
	p = new stick()
	st.A(p)
	p.XY(300, 100)
	p.S()
}
KEYBOARDWALK = SID = SIDE = function () {
	$sideSp = side = function () {
		this.initialize();
	}
	$sideSp.prototype = $Sp()
	$sideSp.prototype.Sprite_initialize = side_p.initialize;
	$sideSp.prototype.initialize = function () {
		this.Sprite_initialize(side._SpriteSheet);
		this.paused = false;
	}
	$sideSp.prototype.walkLeft = function () {
		this.gotoAndPlay("walkLeft");
	}
	$sideSp.prototype.takeoff = function () {
		this.gotoAndPlay("takeoff");
	}
	$sideSp._SpriteSheet = $SS({
		images: ["side.png"],
		frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
		animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
	})
	st = _$St().t()
	sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	$t(function () {
		if (lfHeld) {
			sp.x -= 15
		}
		if (rtHeld) {
			sp.x += 15
		}
		if (upHeld) {
			sp.y -= 4
		}
		if (dnHeld) {
			sp.y += 4
		}
		if (lfHeld && !keyDn) {
			sp.scX(.5).p('walkLeft')
			keyDn = true
		}
		if (rtHeld && !keyDn) {
			sp.scX(-.5).p('walkLeft')
			keyDn = true
		}
		if (upHeld && !keyDn) {
			sp.p('takeoff')
			keyDn = true
		}
	})
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				sp.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				sp.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
}
//official examples:
SSBUILDER = function () {
	z();
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = cjs.stage(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.transform(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)
}
SSBUILDER = function () {
	z();
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = cjs.stage(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.transform(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)
}
 
 