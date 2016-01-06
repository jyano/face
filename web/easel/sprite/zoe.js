cjs.parseZoe = function (sprObj) {
	//fix source (needs a '/')
	sprObj.images[0] = S.eL(sprObj.images[0])
	//set next to false, on all anims
	//_.e(sprObj.animations, function(anim){anim.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return sprObj
}
$sprite = cjs.zoeSp = cjs.zoeSprite = cjs.sprite = function (sS) {
	if (sS.images) {
		sS = cjs.parseZoe(sS)
		sS = $SS(sS)
	}
	return $Sp(sS)
}
SPRITE = function (sprite) {
	sprite = $sprite(sprite || SS).XY(10).dg()
	stage = $St('o', 400).dg()//.op(.7),
	stage.A(sprite)
	controls = {
		jump: function () {
			sprite.gotoAndPlay('jump')
		},
		explode: function () {
			sprite.gotoAndPlay('explode')
		},
		spin: function () {
			sprite.gotoAndPlay('spin')
		},
		stop: function () {
			sprite.stop()
		},
		play: function () {
			sprite.play()
		}
	}
	$.d('y', 460, 89).css({
		position: 'absolute',
		top: 200, left: 300,
		padding: 20, opacity: .9
	}).dg().A(
			$.sp(' '),
			$.bt('spin', function () {
				controls.spin()
			}), $.sp(' '),
			$.bt('jump', function () {
				controls.jump()
			}), $.sp(' '),
			$.bt('explode', function () {
				controls.explode()
			}), $.sp(' '),
			$.bt('play', function () {
				controls.play()
			}), $.sp(' '),
			$.bt('stop', function () {
				controls.stop()
			}), $.sp(' '),
			$.bt('meta', function () {
				SPRITE()
			})
	)
	s = sprite
	return controls
}
PACK = function () {
	stage = $St(800)
	//stage.op(.7)
	sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()
	stage.A(sprite)
	//.rgc()
//	sprite.framerate = 6
	//sprite.play()
}
cjs.sprite100 = function (a) {
	return cjs.zoeSp(a).rXY(50).al(.8)
}
ZFR = ZOEFRAMES = function () {
	spr = $Sp({
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
	s = $St(1000)
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
		s = $St(1000)
		spr = $Sp(sprite).drag().a2(s)
	}
}
ZNA = ZOENOANIM = function () {
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
	s = $St(1000).A()
	s.A(spr)
}
STK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new cjs.SpriteSheet({
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
	stick_p = stick.prototype = new cjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	st = $St()
	p = new stick()
	st.A(p)
	p.XY(300, 100)
	p.S()
}