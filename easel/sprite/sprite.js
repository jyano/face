$L()
cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
sp.adv = p.skip = sp.av = sp.N = function (num) {
	this.advance(num);
	return this
}
sp.play = sp.p = function (an) {
	var sp = this
	/*
	 sp.play = sp.p = function (a, b) {
	 var g = G(arguments),
	 a = g[0],
	 b = g[1],
	 l = g.f,
	 n
	 if (U(a)) {
	 sp.ob.play();
	 return o
	 }
	 if (U(b)) {
	 if (g.n) {
	 sp.next(a, false)
	 }
	 if (g.p) {
	 sp.next(a, a)
	 }
	 sp.ob.gotoAndPlay(a)
	 return o
	 }
	 _.each(g.r, function (a) {
	 sp.next(l, a)
	 l = a
	 })
	 sp.next(g.l, g.isPlaying ? false : g.f)
	 sp.play(g.f)
	 }
	 */
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.stop = sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.playing = sp.iPl = sp.isPlaying = sp.iP = function () {
	return !this.paused
}
sp.iP = function () {
	return this.paused
}
sp.numFr = sp.numFrames = sp.nF = function () {
	return sp.sS.getNumFrames()
}
sp.fr  = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
	var sp = this, g = G(arguments)
	/*
	 var args = G(arguments), num = args[0]
	 if (args.p) {
	 return sp.frame(
	 sp.frame() + ( N(num) ? num : 1 )
	 )
	 }
	 if (args.n) {
	 return sp.frame(
	 sp.frame() - ( N(num) ? num : 1 )
	 )
	 }
	 if (U(num)) {
	 return sp.ob.currentFrame
	 }
	 $l(num)
	 return sp.isPlaying() ? sp.play(num) : sp.stop(num)
	 */
	if (g.u) {
		return sp.currentFrame
	}
	sp.currentFrame = g.f
	return sp
	//= sp.frame = sp.currentFrame
}
sp.an = sp.anim = sp.cA = sp.ca = sp.a = sp.cA = sp.cAn = function (a) {
	if (a) {
		return sp.isPlaying() ?
				sp.play(a) :
				sp.stop(a)
	}
	return this.currentAnimation
}
sp.anFr = sp.cAnFr = sp.cAF = sp.caf = function (fr) {
	if (U(fr)) {
		return this.currentAnimationFrame
	}
	this.currentAnimationFrame = fr
	return this
}
sp.getAn = sp.gAn = sp.getAnim = sp.ans = sp.as = sp.gA = function (a) {
	return U(a) ? sp.spriteSheet.getAnimations() :
			sp.spriteSheet.getAnimation(a)
}
sp.rate = sp.r = sp.fR = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	var g = G(arguments), a = g[0]
	if (g.p) {
		return sp.fr(sp.fr() + N(rate, 1))
	}
	if (g.n) {
		return sp.fr(sp.fr() - N(rate, 1))
	}
	if (g.m) {
		return sp.fr(sp.fr() * N(rate, 2))
	}
	if (g.d) {
		return sp.fr(sp.fr() / N(rate, 2))
	}
	if (U(a)) {
		return sp.framerate
	}
	sp.framerate = rate
	this.framerate = rate
	return this
}
// events
sp.load = sp.ready = sp.done = sp.complete = sp.oC = sp.cm = function (a) {
	sp.ob.on('complete', a)
}
sp.end = sp.onEnd = sp.e = sp.oAe = sp.ae = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
//  animNext:  set/get NEXT animation on an animation
sp._anNext = sp._animNext = function (anim, nx) {
	var sp = this
	var anim = sp.getAnim(anim)
	if (anim) {
		if (U(nx)) {
			return anim.next
		}
		anim.next = nx
	}
	return sp
}
sp.anNoNext = function (an) {
	return this._anNext(an, false)
}
sp.anSelfNext = function (an) {
	var sp = this
	return sp._anNext(an, sp.getAn(an))
}
sp.anNext = sp.animNext = sp.next = sp.gAN = function () {
	var sp = this, g = G(arguments)
	//1) can just pass in the anim string
	//2) can pass anim string and what to set its 'next' property to
	return U(g.s) ? (g.p ? sp.anSelfNext(g.f) : g.n ? sp.anNoNext(g.f) : sp.anNext(g.f)) :
			g.p ? sp._anNext(g.f, g.s)._anNext(sp._anNext(g.f)) : sp._anNext(g.f, g.s)
}
_$Sp = function (sS, x, y) {
	var sp = new cjs.Sp(sS)
	sp.XY(N(x, 0), N(y, 0))
	return sp
}
$Sp = function (sS, x, y) {
	var sp = _$Sp(cjs.toSS(sS), x, y)
	sp.sS = sp.ss = sp.spriteSheet
	return sp
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
	st = $St()
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
function _pre() {
	sp = cjs.Sp.prototype
	$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
	cjs.Sp = cjs.Sprite;
}
function needsWorld() {
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
}