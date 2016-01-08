$(function () {
	z()
	window[_app.toUpperCase()](_pam)
})
////////// one above ////  and  //////   one below   /////////////
appInit = function () {
	if ($w[_app = uC(_app)]) {
		$w[_app]();
		return true
	}
}
$(appInit)
// ok so play and draw go together
// draw for functions
// play for apps
// duh
BOXES = function () {
	CT(ROW(
			stage = cjs.stage(800, 600).tick(),
			$.div('yellow').pad(20).A($.h1('controls'),
					bt('fall', function () {
						ball.fall(box)
					}),
					bt('fall+', function () {
						setInterval(newBall, 1000)
					})),
			'+' // ?????!
	))
	kD('r', function () {
		box.X(10, '+')
	})
	kD('l', function () {
		box.X(10, '-')
	})
	stage.A(box = Box().XY(300, 450))
	stage.A(ball = Ball(40, 'red', 'orange').XY(300, 100))
	newBall = function () {
		var ball = Ball(40, 'red', 'orange').XY(_r(600), 100)
		stage.A(ball)
		ball.fall(box)
	}
}
SHIP = function () {
	angleInDegrees = function self(y, x) {
		if (O(y)) {
			return self(y.vy, y.vx)
		}
		var d = tDeg(Math.atan(y / x))
		if (x < 0) {
			d = Math.abs(d) + 90;
			if (y < 0) {
				d = Math.abs(d) + 90
			}
		}
		return d
	}
	ship = function (stage) {
		t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
		t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
		kD('d', function () {
			t.rt(6, '+')
		})
		kD('u', function () {
			t.rt(6, '-')
		})
		if (stage) {
			stage.A(t)
			stage.on('stagemousedown', function (event) {
				e = event
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
		setInterval(function () {
			t.X(t.vx, '+').Y(t.vy, '+')
			t.rotation = angleInDegrees(t)
		}, 10)
		return t
	}
	PL = 1;
	aA = []
	div = $.div('yellow').pad(10)
	div.A(
			$.h1('controls'),
			b1 = $.button('start', function () {
				PL = 1;
				b1.hd();
				b2.sh()
			}),
			b2 = $.button('stop', function () {
				PL = 0;
				b2.hd();
				b1.sh()
			}).hide(),
			$.button('sgun', function () {
				sgun(guy)
			})
	)
	boot = $.boot()
	stage = createjs.stage(800, 600).tick()
	boot.A(
			div,
			stage.canvas
	)
	guy = ship(stage)
	// kD('s',function(){ $l('bang')})
	// _.times(100,function(){var a=ast();a.a();a.p()})
	// stage.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
	sgun(guy)
}
SOLAR = function () {
	z()
	stage = s = cjs.stage(1000, 500).A().tick()
	stage.bm('guy', function (bm) {
		guy = bm
		bm.drag()
		bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
		bm.startMoving()
		bm.warp()
		stage.bm('sun', 0.2, function (bm) {
			sun = bm
			bm.drag().startMoving(4, 10)
			bm.warp()
			setInterval(
					function () {
						if (
								cjs.bulletHit(sun, guy)) {
							sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
							sun.vx += .2
							sun.vy += .2
						}
					}, 100)
		})
	})
	stage.mug(0.4, function (bm) {
		mug = bm
		bm.X(400).drag().startMoving(10, 10)
		bm.bounce(0)
	})
	stage.backgroundImage('/space.jpg')
}
SHOOTY = function () {
	z()
	stage = cjs.stage(800).tick().A().drag()
	stage.mug(function (mug) {
		m = mug
		mug.XY(100, 100).WH(150)
		SL(mug)
		key(mug, '-')
		// ugun(mug)
	})
	canvas = ghostMe().A().drag().XY(10)
	function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
		return $.canvas('X', 500, 500).fit('me').opacity(.1)
	}
}
HIT = function () {
	z()
	s = stage = createjs.stage(900, 600).A().tick().mug(function (mug) {
		mug.drag()
		stage.bm('flame', function (flame) {
			flame.drag()
			flame.scaleX = .1
			flame.scaleY = .1
			flame.regX = flame.getBounds().width / 2
			flame.regY = 500
			flame.x = 400
			flame.y = 400
			stage.on('dblclick', function (e) {
				flame.x = e.rawX;
				flame.y = e.rawY
			})
			stage.on('stagemousedown', function (e) {
				localCoords = mug.globalToLocal(e.rawX, e.rawY)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) { //$l('hit')
					stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
				}
				else {
					$l('no hit')
					stage.backgroundColor('yellow')
				}
			})
			stage.on('stagemousemove', function (e) {
				localCoords = mug.globalToLocal(flame.x, flame.y)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) {
					$l('HIT')
					stage.backgroundColor('red')
					$l(e.rawX + ' ' + e.rawY)
				}
				else {
					$l('NO HIT')
					stage.backgroundColor('yellow')
				}
			})
		})
	})
}
// ok so play and draw go together
// draw for functions
// play for apps
// duh
SPACEOLD = function () {
	wMs(function (b, s) {
		stage = s
		stage.wh(2000)
		stage.bgi('/space.jpg')
		b.sxy(.2)
		b.fn(RT, SL)
	})
}
SPACE = function () {
	z()
	$stage(2000, 2000).tick().A().backgroundImage('/space.jpg').mug(
			function (mug) {
				mug.sXY(.2).drag().rotate()
			}
	)
}
BOXES = function () {
	CT(ROW(
			stage = cjs.stage(800, 600).tick(),
			$.div('yellow').pad(20).A($.h1('controls'),
					bt('fall', function () {
						ball.fall(box)
					}),
					bt('fall+', function () {
						setInterval(newBall, 1000)
					})),
			'+' // ?????!
	))
	kD('r', function () {
		box.X(10, '+')
	})
	kD('l', function () {
		box.X(10, '-')
	})
	stage.A(box = Box().XY(300, 450))
	stage.A(ball = Ball(40, 'red', 'orange').XY(300, 100))
	newBall = function () {
		var ball = Ball(40, 'red', 'orange').XY(_r(600), 100)
		stage.A(ball)
		ball.fall(box)
	}
}
SHIP = function () {
	angleInDegrees = function self(y, x) {
		if (O(y)) {
			return self(y.vy, y.vx)
		}
		var d = tDeg(Math.atan(y / x))
		if (x < 0) {
			d = Math.abs(d) + 90;
			if (y < 0) {
				d = Math.abs(d) + 90
			}
		}
		return d
	}
	ship = function (stage) {
		t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
		t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
		kD('d', function () {
			t.rt(6, '+')
		})
		kD('u', function () {
			t.rt(6, '-')
		})
		if (stage) {
			stage.A(t)
			stage.on('stagemousedown', function (event) {
				e = event
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
		setInterval(function () {
			t.X(t.vx, '+').Y(t.vy, '+')
			t.rotation = angleInDegrees(t)
		}, 10)
		return t
	}
	PL = 1;
	aA = []
	div = $.div('yellow').pad(10)
	div.A(
			$.h1('controls'),
			b1 = $.button('start', function () {
				PL = 1;
				b1.hd();
				b2.sh()
			}),
			b2 = $.button('stop', function () {
				PL = 0;
				b2.hd();
				b1.sh()
			}).hide(),
			$.button('sgun', function () {
				sgun(guy)
			})
	)
	boot = $.boot()
	stage = createjs.stage(800, 600).tick()
	boot.A(
			div,
			stage.canvas
	)
	guy = ship(stage)
	// kD('s',function(){ $l('bang')})
	// _.times(100,function(){var a=ast();a.a();a.p()})
	// stage.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
	sgun(guy)
}
SOLAR = function () {
	z()
	stage = s = cjs.stage(1000, 500).A().tick()
	stage.bm('guy', function (bm) {
		guy = bm
		bm.drag()
		bm.vXY(_.random(10) + 1, _.random(10) + 1).XY(_.random(800), _.random(600))
		bm.startMoving()
		bm.warp()
		stage.bm('sun', 0.2, function (bm) {
			sun = bm
			bm.drag().startMoving(4, 10)
			bm.warp()
			setInterval(
					function () {
						if (
								cjs.bulletHit(sun, guy)) {
							sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
							sun.vx += .2
							sun.vy += .2
						}
					}, 100)
		})
	})
	stage.mug(0.4, function (bm) {
		mug = bm
		bm.X(400).drag().startMoving(10, 10)
		bm.bounce(0)
	})
	stage.backgroundImage('/space.jpg')
}
SHOOTY = function () {
	z()
	stage = cjs.stage(800).tick().A().drag()
	stage.mug(function (mug) {
		m = mug
		mug.XY(100, 100).WH(150)
		SL(mug)
		key(mug, '-')
		// ugun(mug)
	})
	canvas = ghostMe().A().drag().XY(10)
	function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
		return $.canvas('X', 500, 500).fit('me').opacity(.1)
	}
}
HIT = function () {
	z()
	s = stage = createjs.stage(900, 600).A().tick().mug(function (mug) {
		mug.drag()
		stage.bm('flame', function (flame) {
			flame.drag()
			flame.scaleX = .1
			flame.scaleY = .1
			flame.regX = flame.getBounds().width / 2
			flame.regY = 500
			flame.x = 400
			flame.y = 400
			stage.on('dblclick', function (e) {
				flame.x = e.rawX;
				flame.y = e.rawY
			})
			stage.on('stagemousedown', function (e) {
				localCoords = mug.globalToLocal(e.rawX, e.rawY)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) { //$l('hit')
					stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
				}
				else {
					$l('no hit')
					stage.backgroundColor('yellow')
				}
			})
			stage.on('stagemousemove', function (e) {
				localCoords = mug.globalToLocal(flame.x, flame.y)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) {
					$l('HIT')
					stage.backgroundColor('red')
					$l(e.rawX + ' ' + e.rawY)
				}
				else {
					$l('NO HIT')
					stage.backgroundColor('yellow')
				}
			})
		})
	})
}
//beautiful demo i stole! :)
HITCIRCLES = function () {
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
st = cjs.Stage.prototype
st.cannonBall = function (x, y) {
	return this.art(x, y, '+').rG(['a', 'z'], [0, 1], 0, 0, 0, 0, 0, 18).dc(0, 0, 18).ef()
}
st.basketBall = function (x, y) {
	return this.art(x, y, '+').rG(['w', 'o'], [0, 1], 0, 0, 0, 0, 0, 18).dc(0, 0, 18).ef()
}
st.beachBall = function (x, y) {
	return this.art(x, y, '+').rG(['b', 'r'], [0, 1], 0, 0, 0, 0, 0, 18).dc(0, 0, 18).ef()
}
st.snowBall = function (x, y) {
	return this.art(x, y, '+').rG(['a', 'w'], [0, 1], 0, 0, 0, 0, 0, 18).dc(0, 0, 18).ef()
}
RADIANTBALLS = RDB = function () {
	s = cjs.S('a')
	b1 = s.cannonBall(100, 200)
	b2 = s.basketBall(100, 100)
	b3 = s.beachBall(50, 50)
	b3 = s.snowBall(50, 300)
}
DIRTYBALLS = DTB = function () {
	w = b2d.W({grav: 0})
	w.dirtyBall = function (x, y, stop1, stop2) {
		return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
	}
	w.gradBall(200, 100, 60, 'z', 'w')
	w.dirtyBall(350, 100, 0, .9)
	w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
	w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
	w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
	w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
	w.dirtyBall(500, 300, .6, 1)
	w.dirtyBall(650, 300, .9, 1)
	w.dirtyBall(800, 300, 1, 1)
}
STATUSBALL = STB = function () {
	w = b2d.W({grav: 0})
	b = w.ball(500, 300, 60).bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	setInterval(function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		$l(num)
		shape.rG(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	}, 100)
}
SWITCHBALL = SWB = function () {
	w = b2d.W({g: 0})
	b = w.ball(500, 300, 60).bindSprite2(w.s.shape(500, 300))
	b.draw = function (frame) {
		this.sprite.rG(['r', 'y'],
				[frame[0], frame[1]],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	}
	frames = [
		[0, .1],
		[0, .3],
		[0, .6],
		[0, .9],
		[0, 1],
		[.3, 1],
		[.6, 1],
		[.9, 1],
		[1, 1]]
	curr = 0
	I(function () {
		$l(curr)
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	}, 1000)
}
HEALTHBALL = HEB = function () {
	w = b2d.W({g: 0})
	w.badGuy(500, 300)
}
SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
	w = b2d.W({grav: 0})
	advanceN = function (n, dif) {
		n += dif
		if (n >= 1) {
			n = .9;
			dif *= -1
		}
		if (n <= 0) {
			n = 0;
			dif *= -1
		}
		return {n: n, dif: dif}
	}
	switchBall1 = function (x, y) {
		var dif = .1, n1 = 0, n2 = 0,
				b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		I(function () {
			n2 = advanceN(n2);
			drawGrad()
		}, 100)
		function drawGrad() {
			b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
		}
		
		function advanceN(n2) {
			n2 += dif
			if (n2 >= 1) {
				n2 = .9;
				dif *= -1
			}
			if (n2 <= 0) {
				n2 = 0;
				dif *= -1
			}
			;
			return n2
		}
	}
	switchBall2 = function (x, y) {
		var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		ball.drawGrad = function (n1, n2) {
			return this.sprite.rG(['r', 'y'],
					[n1, n2], 60).dc(0, 0, 60)
		}
		ball.animGrad1 = function () {
			var that = this,
					dif = .1, n2 = 1, n1 = 0
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1, n2)
					},
					300)
		}
		ball.animGrad2 = function () {
			var that = this, dif = .1
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1)
					},
					300)
		}
		ball.animGrad1()
	}
	switchBall1(100, 100)
	switchBall2(300, 100)
	w.s.back.linGrad('u', 'p')
	w.s.HUD.bm('me', function (bm) {
		me = bm.sXY(.3).XY(1150, 550).drag()
	})
}
TRIPLESTAGE = TTS = function () {
	w = b2d.W({grav: 0})
	b = w.ball(500, 300, 60)
	b.bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num], 60)
			.dc(0, 0, 60)
	w.s.HUD.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.s.back.bm('guy', function (b) {
		b.XY(200).drag()
	})
	w.s.back.linGrad('b', 'z')
}
RADIANT = RDT = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
}
SHOOTERCAN = SHC = function () {
	function startGame() {
		z()
		game = true
		Coins = []
		Aliens = []
		Bullets = []
		can = $.canvas('yellow', 900, 500).A()
		shooter = new Shooter()
		shooter.draw()
		//   _.times(10,function(){Coins.push(Coin())})
		//   _.times(15,function(){Aliens.push(Alien())})
		setInterval(function () {
			shooter.update()
			can.clear()
			shooter.draw()
		}, 400)
	}
	
	function Shooter() {
		this.x = 100
		this.y = 200
		this.vx = 2
		this.vy = 2
		this.radius = 20
		this.update = function () {
			this.x = this.x + this.vx
			this.y = this.y + this.vy
		}
		this.draw = function () {
			can.circle(this.x, this.y, this.radius, 'blue')
		}
	}
	
	updateScreen = function () {
		can.clear()
		shooter.draw()
	}
	updateGame = function () {
		shooterUpdate()
	}
	updateGameX = function () {
		if (game) {
			shooter.vx += cap(-5, 5)((e.x - shooter.x) / 300)
			shooter.vy += cap(-5, 5)((e.y - shooter.y) / 300)
			Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
		} else {
			alert('game over!')
			if ((e.x > 450) && (e.y > 290)
					&& (e.x < 450 + textWidth)
					&& (e.y < 290 + textHeight)) {
				reload()
			}
		}
		can = $.canvas(800, 600)
		can.click(function (x, y) {
			shooter.vx += cap(-5, 5)((x - shooter.x) / 300)
			shooter.vy += cap(-5, 5)((y - shooter.y) / 300)
			Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
		})
		b = bad(x).d()
		c = coin(x).d()
		g = guy(x)
		I(function () {
			x.X();
			b.update().draw();
			g.update().draw()
		}, 30)
		// _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
	}
	startGame()
}
function Alien(x, n, n1) {
	if (N(n1)) {
		var a = []
		_.times(n1, function () {
			a.push(Bad(x, n))
		})
		return a
	}
	if (N(n)) {
		return Bad(x).du(n)
	}
	var b = {
		x: _.random(1200),
		y: _.random(600),
		radius: _.random(15),
		vx: _.random(10) - 5,
		vy: _.random(10) - 5
	}
	b.draw = function () {
		//x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
		x.circ(b.x, b.y, b.r, 'g', 'z')
		x.circ(b.x, b.y, 15, 'o', 'z')
		return b
	}
	b.update = function () {
		b.radius *= 1.005
		b.x = warp(0, 1200, 20)(b.x + b.dx)
		b.y = warp(0, 600, 20)(b.y + b.dy)
		return b
	}
	b.drawUpdate = b.du = function (n, n2) {
		if (N(n)) {
			return setInterval(function () {
				b.du()
			}, n)
		}
		return b.draw().update()
	}
	return b
}
function Coin(x, n, n1) {
	if (N(n1)) {
		var a = [];
		_.times(n1, function () {
			a.push(Coin(x, n))
		});
		return a
	}
	if (N(n)) {
		return Coin(x).du(n)
	}
	var c = {
		x: _.random(1200),
		y: _.random(0, 600),
		radius: 10,
		vx: _.random(0, 10) - 5,
		vy: _.random(0, 10) - 5
	}
	c.draw = function () {
		x.circle(this.x, this.y, this.radius, 'b', 'y')
		return this
	}
	c.update = function () {
		c.x = warp(0, 1200, 20)(this.x + this.vx)
		c.y = warp(0, 600, 20)(this.y + this.vy)
		return c
	}
	c.drawUpdate = function (n, n2) {
		if (N(n)) {
			return setInterval(function () {
				c.drawUpdate()
			}, n)
		}
		return c.draw().update()
	}
	return c
}
//bluecircle game function //never used
coinHits = function () {
	_.each(CoinsArray,
			function (coin, coinId) {
				
				//??? hitTest?
				if (xyc(coin.x, coin.y, game)) {
					delete CoinsArray[coinId]
					game.coinScore += 1
				}
			})
	_.each(
			As, function (a, A) {
				if (
						xyc(g.x, g.y, a)) {
					g.h -= 1
				}
				_.each(Bs, function (b, B) {
					if (xyc(b.x, b.y, a)) {
						delete Bs[B]
						delete As[A]
						As.push(bad())
					}
				})
			})
}
SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}
w.badGuy = function (x, y) {
	var w = this
	var that = this
	var b = w.ball(x, y, 60).bS2(this.st.shape(x, y))
	b.draw = function (frame) {
		this.sprite
				.rG(['r', 'g'], [frame[0], frame[1]], 60)
				.dc(0, 0, 60)
	}
	b.health = 100
	b.coll(function () {
		b.health--
	})
	b.K('badGuy')
	funcId = I(update, 300)
	function update() {
		b.draw(frameByHealth(b))
		if (b.health <= 0) {
			clearInterval(funcId)
			b.kill()
		} //$l('dead')
		function frameByHealth(b) {
			if (b.health < 0) {
				b.health = 0
			}
			if (b.health > 100) {
				b.health = 100
			}
			if (b.health < 50) {
				return [1 - ((b.health / 50)), 1]
			}
			else {
				return [0, 1 - ((b.health - 50) / 50)]
			}
		}
	}
	
	return b
}
function touch() {
	SHALL = PRE = DRAWEDG = RC = EDG = DOT = function () {
		W([1200, 600, 2400, 600]);
		var p1, p2, d, l
		p = w.p(400, 400, '+')
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.edg(p1.x, p1.y, p2.x, p2.y).K('pf')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
		p.IsBullet(true)
		w.pre('pf', function (f, cx) {
			if (p.shall) {
				cx.en(0)
			}
		})
		w.b(function (cx) {
			p.shall = false
			if (!cx.pt().y && p.lV().y < 0) {
				return
			}
			cx.w(p, 'pf', function () {
				c = cx
				v = cx.pt()
				if (cx.pt().y) {
					dif = (p.Y()) - cx.pt().y
					$l(dif)
					if (dif > -10) {
						p.shall = true
					}
				}
			})
		})
		//w.end(function(cx){cx.w('pf', function(){$l('end')})})
	}
	TAPSHOOT = function () {
		W({g: 0}) // u cant shoot when ur dead!
		p = w.p(800, 300).cn('thrust').aD('++')
		w.tim(7)
		w.b(function (cx) {
			cx.w('bul', 'tim', function (tim) {
				tim.B().kill()
			})
			cx.w('bul', p, function () {
				this.B().kill()
			})
			cx.w('tim', p, function () {
				p.kill()
			})
		})
		$.click(function (e) {
			var x = e.pageX - p.X(),
					y = e.pageY - p.Y(),
					rot = M.tD(M.atan(y / x)),
					adj = x > 0 ? 90 : 270
			p.rot(rot + adj).I(x / 20, y / 20)
			w.bul(p.wP(0, -100), 10).bS({i: 'sun', sc: .1}).I(x, y)
		})
		//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)
	}
}
META = function () {
	W([800, 600], {w: 'L'}).C('w')._(function () {
		$.rulers()
		//initial me
		p = w.p(200, 200, 5).stat()
		//initial balls
		_.t(5, function Ball() {
			w.D(R(200, 50), R(-100), $r(), 30)
		})
		_.ev(3, MetaBall)
	})
	function MetaBall() {
		var b = w.D(400, 400, 'b', 80)
		b.$h('x', 'X', 1).c('x', 'X', 1).bf(
				w.s.cv0,
				cjs.m2d(.6, .1, .1, .6, -40, 180)
		).cir(80)
	}
}
CLONE = function () {
	b2d.Common.Math.b2Transform.prototype.toArr = function () {
		var tf = this,
				pos = tf.position,
				R = tf.R,
				col1 = R.col1,
				col2 = R.col2
		return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
	}
	W().Y().P().P().P()
	var tf = null
	b = w.D(100, 100, 'b', 100, 200)
	b2 = w.D(900, 200, 'p', 100, 150)
	T.t(function () {
		var trf
		trf = b.transform().toArr()
		if (tf) {
			b2.SetTransform(b2d.tf(tf))
		}
		_.in(1, function () {
			tf = trf
		})
	})
	b1 = w.D(400, 400, 'x', [
		[100, 100, 10], [100, 200],
		['y', 20, 0, 100],
		['b', 20, 0, -100],
		['g', 20, 200, 0]])
	_.in(1, cl);
	//_.ev(10, cl);
	function cl() {
		c = b1.X(300, '+').I(100000, -1000).clone()
	}
}
FORCES = function () {
	W({g: 50})
	//dummy
	w.ball()
	//linVel
	_.t(3, function () {
		w.D(300, 300, 'y', 20).K('lV')
	})
	_.ev(1, function () {
		w.e('lV', function (b) {
			b.lV(0, 20)
		})
	})
	//F('+') <-constant
	w.D(100, 100, 'o', 10).F(40, -60, '+')
	b = w.D(300, 500, 'z', 30, 80).rot(1).fixRot()
	t = {
		i: function () {
			b.I(V(10, -30), b.wC())
		},
		v: function () {
			b.lV(10, -60)
		},
		f: function () {
			cjs.t(function () {
				b.F(V(0, -3), b.wC())
			})
		}
	}
}
QUERY = function () {
	W().Y()
	w.S(200, 300, 'b', 100).$(function () {
		this.C('***')
	})
	w.S(200, 500, 'g', 100).K('g')
			.cir({x: 100, r: 80, c: 'r'})
			.$(function () {
				this.C('w')
			})
	w.e('g', function (b) {
		b.$$(function () {
			this.B().C('z')
			this.C('w')
		})
	})
	w.e$(function (o) {
		this.C('y')
		$l('mass: ' + this.B().mass().toFixed(3))
	})
	w.$(function (o) {
		w.ball({x: o.x, y: o.y, r: 8})
	})
	w.$$(function (o) {
		w.S(o.x, o.y, 'x', [[20, 10]])
	})
	w.S(600, 400, 'b', 100, 300);
	w.dot(600, 300)
	_.in(function () {
		w.q(600, 300, function (f) {
			f.C('r')
		})
	})
	w.D(1100, 500, 'o', 80).d(.1).$(function () {
		this.B().I(100, -2000)
	})
	w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(
			function () {
				this.kill()
			}
	)
}
PROTONIGHT = function () {
	w = W([1200, 600, 1200, 600])
	w.dB(900, 300).stat().rec(120, 40) // top
	w.dB(700, 360).stat().rec(120, 40)
	w.dB(620, 400).stat().rec(320, 40)
	w.dB(500, 420).stat().rec(320, 40)
	w.dB(250, 500).stat().rec(60, 40)
	w.dB(300, 540).stat().rec(320, 40)//bottom
	_.t(10, function () {
		p = w.p().XY(R(300), R(300)).K('guy')
	})
	y = w.y(400, 200, 2).track()
	y.cl(function (fx) {
		$l('collided')
		var bod = fx.B()
		if (bod.K() == 'guy') {
			bod.kill()
		}
	})
	w.showOff()
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
}
function spazBasic() {
	NRM = function () {
		W()
		w.D(800, 300, 'b', 10).d(1)
		w.D(800, 300, 'x', 10, 10).d(1)
		b = w.D(800, 300, 'b', 100).d(1)
		x = w.D(800, 300, 'x', 100, 100).d(1)
		w.D(800, 300, 'b', 200).d(1)
		w.D(800, 300, 'x', 200, 200).d(1)
		// w.s.al(0)
		w.i.autoClear = false
		return w
	}
	CANC = function () {
		Q(function () {
			z()
			w = {W: 1200, H: 600}
			ii = w.I = $St('z', w.W, w.H, 0, 0).t()
			s = w.s = $St('X', w.W, w.H, 0, 0).t()
			w.canvas = w.s.canvas
			w.can = $(w.canvas)
			w.ctx = w.can.ctx('2d')
			bg = w.bg = w.s.ct()
			g = w.g = w.s.ct()
			fg = w.fg = w.s.ct()
			i = w.i = $St('X', w.W, w.H, 0, 0).t()
			g.bm('me', function (bb) {
				b = bb.drag()
			})
			i.bm('me', function (bb) {
				b = bb.drag()
			})
		})
		CANC1 = function () {
			w = {W: 1200, H: 600}
			/*
			 w.I = $St('z', w.W, w.H ,0, 0).t()
			 w.s= $St('X', w.W, w.H, 0, 0).t()//.aC(0)
			 w.canvas = w.s.canvas
			 w.can= $(w.canvas)
			 w.ctx = w.can.ctx('2d')
			 w.bg= w.s.ct();
			 w.g=  w.s.ct();
			 w.fg= w.s.ct()
			 */
			w.i = $St('b', w.W, w.H, 0, 0).t()
			/*
			 ii = w.I
			 s= w.s
			 bg= w.bg
			 g= w.g
			 fg= w.fg
			 i= w.i
			 */
			$.in(1, function () {
				w.i.bm('me', '+')
			})
		}
	}
}
function random() {
	DENROT = function () {
		W(0) //w=b2d.m({g:0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
		//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
		//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
		r = w.D(300, 300, 'y', 400, 20).bo(.5)
		r2 = w.D(300, 300, 'w', 400, 10)
		r3 = w.D(300, 300, 'w', 400, 10)
		r4 = w.D(300, 300, 'w', 400, 10)
		r5 = w.D(300, 300, 'w', 400, 10)
		flipDen = function (r) {
			var d = r.den()
			if (d == 0) {
				r.den(1)
			} else {
				r.den(0)
			}
		}
		flipStage = function () {
			if (w.s.X() == 0 && w.s.Y() == 0) {
				w.s.XY(10000, 10000)
			}
			else {
				w.s.XY(0, 0)
			}
		}
		flipStage()
		_.ev(6, function () {
			flipDen(r);
			flipDen(r2);
			flipDen(r3);
			flipStage()
		})
	}
//query games
	DONTKNOW = function () {
		W({g: 0, w: 0}).Y().C('z')
		x = w.S(100, 100, 'x', 500)
		b = w.S(600, 300, 'w', [[80], [100, 300, 140, 0, 46]])
		//w.d(r.wC())
		f = b.f()
		f1 = f.N()
		h = f.H()
		h1 = f1.H()
		s = x.fSp()
	}
}
function err() {
	SIMPF = function () {
		W([2000, 1000], {g: 100}).Y();
		y.tr();//$.rulers()
		b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
		b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
		b = w.D(400, 400)
		b.pol('o', [-300, 0], [0, -100], [10, 150])
		b.pol('y', [[-10, 0], [0, -100], [100, -50]])
		b.pol(['b', [-200, 0], [0, -100], [10, 150]])
		b.pol({
			c: 'r', v: [
				[-100, 0],
				[0, -100],
				[100, -50]
			]
		})
		w.D(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]]).pol([-100, 0], [0, -100], [100, 40]).C('g')
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
		//simple off-cir-sen
		w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
		//simple off-rec-sen
		w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		_.t(20, thing)
		function thing() {
			w.D(R(600), R(300, 200), [
				['p', [-20, -20], [0, -30], [10, 10]],
				['n', [0, 0], [30, -50], [50, -10]]
			])
		}
		
		w.ball()
		b = w.S(400, 300)
		b.f('o', 50)
		b.f('r', 50, 50)
		b.f('b', 50, 50, 50)
		b.f('g', 50, 50, 50, 50)
		b.f('w', 50, 50, 50, 50, 50)
		b.f('u', [-100, 0], [0, -50], [200, -10])
		w.D(600, 300).f([
			['o', 50],
			['r', 50, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300).f('y', [
			[50],
			['r', 250, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		b2d.somePolyFixt = [
			[
				[-100, 0], [0, -100],
				[100, 0], [60, 50]]]
		b2d.compoundShape = [
			[50, 10],
			[60, 30, 0, 0, 40],
			[120, 30, 0, 0, 29],
			[60, 10, 0, 50, 60],
			[84, 10, 15, 80, -120]
		]
		b2d.compoundShape2 = [
			[50, 10],
			[20, 20],
			[20, 10, 0, 0, 10],
			[40, 10, 50, 0, 45],
			[84, 10, 15, 80, -120],
			[60, 10, 0, 50, 60]
		]
		b2d.compoundStar = [
			[10, 10],
			[20],
			[4, 80, 10, 30, 135],
			[4, 80, 0, 0, 45],
			[4, 80, 100, 0, 90],
			[4, 80, 0, 0, 180]
		]
		w.D(100, 100, b2d.somePolyFixt)
		w.D(200, 100, b2d.compoundShape)
		w.D(300, 100, b2d.compoundShape2)
		w.D(400, 100, b2d.compoundStar)
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	CJSCIR = function () {
		W()
		w.i.cir('b', 800, 200, 150)
		w.i.cir()
		h = w.i.h('+')
				.cir(
				{r: 100, c: 'b', C: 'X', l: 20, lf: 1},
				[
					{x: 250, y: 300},
					{x: 450, y: 300},
					{x: 250, y: 500}]
		)
		h1 = w.i.h('+')
				.cir(
				{C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[
					{x: 750, y: 300},
					{x: 950, y: 300},
					{x: 750, y: 500}
				]
		)
	}
}
GEMS = function () {
	W()
	h = w.i.h(100, 300, '+')
	h.bR({
		i: 'chicks',
		hs: [
			{w: 150, h: 500},
			{w: 150, h: 500, x: 200},
			{w: 150, h: 500, x: 400},
			{w: 150, h: 500, x: 600}
		]//, fn:function(){}
	})
	w.D(200, 160).cir(
			{r: 120, rf: {c1: 'r', c2: 'b'}},
			{r: 150, C: 'y', l: 2, bf: 'me'}
	)
}
POLGEMS = function () {
	W()
	verts = [[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]]
	w.i.h(400, 300, '+').bV({v: verts})
	w.D(800, 300).pol({
		v: verts,
		c: 'r', C: 'y', l: 10,
		bf: 'me'
	})
}
BINDSPR = function () {
	W()
	b = w.D(100, 300).cir(120)
	$.i('me', function (i) {
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
BINDSPP = function () {
	W()
	b = w.D(100, 300).cir(120)
	Q('guy', function () {
		var i = Q.i('guy')
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
BINDSP = function () {
	W()._(function () {
		x = w.D(600, 300, 'x', 200, 100)
		f = x.cir({r: 100, x: 300, c: 'r'})
		me = Q.b('me').rC()
		f.bS(me, 0, f.pX(), f.pY())
	})
}
BINDSPR = function () {
	W()
	b = w.D(100, 300).cir(120)
	$.i('me', function (i) {
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
BINDSPP = function () {
	W()
	b = w.D(100, 300).cir(120)
	Q('guy', function () {
		var i = Q.i('guy')
		w.g.A(sp = $Bm(i))
		b.bS(sp.rC())
		w.g.A(sp1 = $Bm(i))
		b.bS(sp1)
	})
}
fixt()
cir()
rec()
poly()
sensor()
function fixt() {
	SIMPFIXTS = function () {
		W([2000, 1000], {g: 100}).Y();
		y.tr();//$.rulers()
		w.D(200, 200, 'y', 10, 20).pol()
		w.D(200, 200, 'y', 10, 20).pol({c: 'r'})
		w.D(600, 300).pol('r', [[-100, 0], [0, -100], [200, 50]])
		w.D(800, 200).pol('b', [-100, 0], [0, -100], [200, 50])
		//obj
		b = w.D(100, 300)
		b.pol({
			s: 1, c: 'o', C: 'y',
			v: [[-200, -100], [0, -200], [100, -100]]
		})
		b.pol({
			c: 'y', C: 'o',
			v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
		})
		/*
		 b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
		 b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
		
		 b = w.D(400, 400)
		 b.pol('o', [-300, 0], [0, -100], [10, 150])
		 b.pol('y',[   [-10, 0],  [0, -100],  [100, -50]])
		 b.pol(['b', [-200, 0], [0, -100], [10, 150]])
		 b.pol({c:'r', v:[
		 [-100, 0],
		 [0, -100],
		 [100, -50]
		 ]})
		 w.D(400,500,'o',[['w',[30,30],[20,40],[10,10]]]).pol([-100, 0], [0,-100], [100, 40]).C('g')
		
		
		 w.i.pol(100,200,[[-100,-10],[0,100],[100,20]],'r','w',10,'+')
		 w.i.pol(100,100,[[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		 w.i.pol(200,200,[[-20, -80], [-100, -200], [100, 5]] )
		 */
		/*
		 //simple off-cir-sen
		 w.D(600, 300,'y',50,10,10, '-').cir(15)
		 //simple off-rec-sen
		 w.S(600, 300,'o', 50,200, 10,10,45, '-').cir(15)
		 //simple pol-sen
		 w.D(200, 300,'x', [-100,0],[0,-100],[100,30], '-').cir(15)
		 w.S(500, 200, 'b', [-100,0], [0,-100], [100,-20] )
		 w.S(200, 200, 'o', [[[-100,0],[0,-100],[100,-20]]])
		 w.S(300,300, 'w',[-100,0],[0,-100],[100,-20], '-')
		
		
		
		
		 b = w.D(300, 300).fixRot()
		 b.pol('g', [[0, 0], [0, -200], [100, 0]])
		 b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		 b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		
		 b2 = w.D(300, 300)
		 b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		 b2.pol([[0, 30], [-30, -20], [10, 0]])
		
		 b3 = w.D(300, 300)
		 b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		 b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		 b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		
		
		
		
		 w.D(600, 300, 'b', [
		 [[-100, -20], [0, -100], [10, 10]]
		 ])
		
		 w.D(400, 400, [
		 ['b', 30],
		 ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		 w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		
		
		 _.t(20, thing)
		
		 function thing() {
		 w.D(R(600), R(300, 200), [
		 ['p', [-20, -20], [0, -30], [10, 10]],
		 ['n', [0, 0], [30, -50], [50, -10]]
		 ])
		 }
		 w.ball()
		 b = w.S(400, 300)
		 b.f('o', 50)
		 b.f('r', 50, 50)
		 b.f('b', 50, 50, 50)
		 b.f('g', 50, 50, 50, 50)
		 b.f('w', 50, 50, 50, 50, 50)
		 b.f('u', [-100, 0], [0, -50], [200, -10])
		 w.D(600, 300).f([
		 ['o', 50],
		 ['r', 50, 50],
		 ['b', 50, 50, 50],
		 ['g', 50, 50, 50, 50],
		 ['w', 50, 50, 50, 50, 50],
		 ['u', [-100, 0], [0, -50], [200, -10]]])
		 w.D(600, 300).f('y', [
		 [50],
		 ['r',250, 50],
		 ['b',50, 50, 50],
		 ['g', 50, 50, 50, 50],
		 ['w', 50, 50, 50, 50, 50],
		 ['u', [-100, 0], [0, -50], [200, -10]]])
		
		
		 b2d.somePolyFixt = [
		 [
		 [-100, 0], [0, -100],
		 [100, 0], [60, 50]]]
		 b2d.compoundShape = [
		 [50, 10],
		 [60, 30, 0, 0, 40],
		 [120, 30, 0, 0, 29],
		 [60, 10, 0, 50, 60],
		 [84, 10, 15, 80, -120]
		 ]
		 b2d.compoundShape2 = [
		 [50, 10],
		 [20, 20],
		 [20, 10, 0, 0, 10],
		 [40, 10, 50, 0, 45],
		 [84, 10, 15, 80, -120],
		 [60, 10, 0, 50, 60 ]
		 ]
		 b2d.compoundStar = [
		 [10, 10],
		 [20],
		 [4, 80, 10, 30, 135],
		 [4, 80, 0, 0, 45],
		 [4, 80, 100, 0, 90],
		 [4, 80, 0, 0, 180]
		 ]
		 w.D(100, 100, b2d.somePolyFixt)
		 w.D(200, 100, b2d.compoundShape)
		 w.D(300, 100, b2d.compoundShape2)
		 w.D(400, 100, b2d.compoundStar)
		
		
		 w.D(600,300,'b',200,100).cir('z',10, 40,50)
		 w.D(600,300,'z',[[200,100], ['o',10, 40,50]])
		
		 */
	}
	CUPS = function (o) {
		$l('cups')
		// W(10)
		W()
		cup = [
			[20, 20],
			[100, 40, 0, 40, 0],
			[200, 40, -80, -40, 260],
			[200, 40, 80, -40, -80]
		]
		cup2 = [
			[100, 40, 0, 40, 0],
			['g', 200, 40, -80, -40, 260],
			['g', 200, 40, 80, -40, -80],
			[100]
		]
		cup3 = [
			[100, 40, 0, 40, 0],
			[200, 40, -80, -40, 260],
			[200, 40, 80, -40, -80],
			[34, -80, -130],
			[34, 80, -130]
		]//cup3 fails!
		b = w.D(280, 500, 'r', cup)
		w.D(600, 500, 'b', cup2)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.S(150, 220, 'u', 50, 100)
	}
	TEMPLE = function () {
		W()
		b = w.S(600, 200)
		b.pol([-100, 0], [0, -100], [100, 0])
		b.rec(400, 20, 0, 0, 45)
		b.rec({x: 20, y: 300, w: 400, h: 20, lf: ['g', 'w']})
		b.cir({r: 50, lf: ['g', 'w']})
	}
	DEADBIRDS = function () {
		W([2000, 1000], {g: 100}).Y();
		y.tr();//$.rulers()
		//simple off-cir-sen
		w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
		//simple off-rec-sen
		w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		_.t(20, thing)
		function thing() {
			w.D(R(600), R(300, 200), [
				['p', [-20, -20], [0, -30], [10, 10]],
				['n', [0, 0], [30, -50], [50, -10]]
			])
		}
		
		w.ball()
		b = w.S(400, 300)
		b.f('o', 50)
		b.f('r', 50, 50)
		b.f('b', 50, 50, 50)
		b.f('g', 50, 50, 50, 50)
		b.f('w', 50, 50, 50, 50, 50)
		b.f('u', [-100, 0], [0, -50], [200, -10])
		w.D(600, 300).f([
			['o', 50],
			['r', 50, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300).f('y', [
			[50],
			['r', 250, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
	}
	DOORS = function () {
		W([800, 600], {g: 100})
		//  w.D(100, 100, cjs.somePolyFixt)
		//  w.D(200, 100, cjs.compoundShape)
		// w.D(300, 100, cjs.compoundShape2 )
		// w.D(400, 100, cjs.compoundStar)
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
//just compound shapes, no grad, no bm
	TURTS = function () {
		W([1200, 600, 2000, 600], {}).P().Y()
		// y.thr()
		//turtle
		w.D(600, 280, [
			['b', 700, 40, 0, -100],
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]]
		])
		//, ['x', 10, 55,-12, '-'], ['u', 30,40, 75,-12 ,'-']
		w.verts = function (x, y, arrs) {
			var w = this
			var b = w.D(x, y)
			_.e(arrs, function (f) {
				b.pol(f)
			})
			return b
		}
		w.verts(400, 280, turtle)
		w.vertsKin = function (x, y, arrs) {
			var w = this,
					b = w.S(x, y)//Kin
			_.e(arrs, function (g) {
				b.pol(g[0], _.r(g))
			})
			return b
		}
		p.track()
		t = w.vertsKin(400, 570, turtle).fR()
		t2 = w.vertsKin(700, 570, turtle2)
		_.ev(1, function () {
			//t2.lV(5,0)
			_.in(1, function () {
				$l('ok')
				// p.lV(-500,500)
				p.I(-5000, 500)
			})
		})
	}
	RANDSPAZ = function () {
		W()
		w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])
		w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])
		//h.bC
		w.i.h(50, 200, '+')
				.bC({hs: [{r: 80}, {r: 50, x: 100}, {r: 100, x: 400}]})
		//h.bf
		w.i.h(800, 100, '+')
				.bf('me', function (h) {
					h.dc([80], [90, 0, 68])
				})
		//h.bV
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		/*
		 b =   w.D(600,300, 'r', 100,300)
		 h= w.i.h().bR({hs:[{w:100,h:300}]})
		 b.bS(h)
		 */
		w.bmR(600, 300, 'b', 100, 300)
		w.bmR(300, 300, 100, 300)
		w.i.h(350, 150, '+')
				.pol({v: v1, bf: 'me'})
		w.D(950, -200)
				.pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
		w.D(500, 200)
				.pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
		//h.bV //w.pol
		w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
		w.bg.bm('me', 6.2, function (bm) {
			bm.X(500)
		})
	}
	FIXTADV = COMPOUND = PINBED = function () {
		W(2000, 1000)
		w.S(600, 600, 'g', 20, 1000)
		w.D(100, 400, 'z', [
			[50],
			[10, 300, '-']])
		w.D(700, 400, 'y', [
			[50],
			['r', 10, 300, '-'],
			['o', 50, 100, 0]])
		W(10).Y() //=SEPARATOR=COLORCONC
		w.D(400, 100, 'y', guyInBed)
		w.D(100, 100, 'r', [
			[guyInBed]
		])
		w.D(600, 300, 'b', [
			[guyInBed],
			['w', dick]
		])
		w.D(400, 100, guyInBed)
		_.t(15, function (i) {
			w.D(100 + (i * 60), 300, pin)
		})
	}
}
function cir() {
	//same, all circles
	CATAPILLER = function () {
		W(1000, 500, 1000, 500).G(10000)
		b = w.D(800, 300)
		b.cir('r', 100)
		b.cir('b', 80, 0, -60)
		b.cir('g', 'w', 60, 0, -140)
		b.cir('*', '*', 20, 0, -140)
		b = w.D(300, 300)
		b.cir('o', 20)
		b.cir('b', 100, 140, 0)
		b.cir('r', 20, 100, 100)
		b.cir('b', 20)
		b.cir(20, 100, 100).C('r')
		w.D(600, 300, 'b', [['b', 50, 50, 50]])
				.cir({c: 'o', r: 50})
		w.D(600, 300, 'y', [['b', 50, 50, 50]])
				.cir({c: 'b', r: 50, x: 50})
	}
//same but has shakiness, all circles
	RADIOACTIVE = function () {
		W(1000, 500, 1000, 500).G(10000)
		w.S(50, 50, 'x', 20).d(.1)
		y = w.y(1000, 400, '+')
		w.S(400, 200, 10)
		_.t(10, function () {
			w.D(700, 300, 'r', [[7]])
		})
		b = w.D(200, 300, 'z', 10)
		b.cir({r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'o', C: 'x'})
		b.cir({x: 200, y: 100, c: 'r', C: 'w'})
	}
	CIRADV = GRADCIR = function () {
		W(50).C('w')//.Y();y.thr()
		//just a normal pink cir
		w.i.h(100, 100, '+').cir({c: 'x', r: 100})
// black fill, l4 white stroke
		h = w.i.h().dc(100, 100, 50) //->
		//string of balls
		w.i.h(-100, -100, '+').c('b', 'r', 10).dc([200, 200, 50], [400, 200, 50], [600, 200, 50], [300, 300, 50]).c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
//the most beautiful orange candy ball!!
		// linear stroke, radial fill !!! and orange :)
		w.i.h(200, 200, '+').cir({
			r: 50,
			C: ['y', 10],
			lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			ls: {c1: 'u', c2: 'o'}
		})
		w.D(300, 200)
				.cir(
				{r: 20},
				// {r:20, y:-20},
				// {r:20, x:20, lf:{ c1:'b' },y:30},
				// {x:50, s:1, rf:1},
				// {x:100,r:50,c:'r',C:'x',l:10, s:1},
				{y: -100, r: 50, bf: 'me'}
		)
		w.D(800, 300).cir({w: 50, h: 100, r: 50, bf: 'me'}, {r: 50, x: 100, lf: 1, l: 15},
				{w: 40, h: 40, x: 100, c: 'y'},
				{w: 40, h: 40, x: 200, c: 'b', C: 'o', l: 10},
				{w: 200, h: 20, y: 200, s: 1, lf: {c1: 'g', c2: 'y'}})
		//cjs.me=function(fn){Q(['me'], function(q){fn(q.getResult('me'))})}
		cjs.me(function (i) {
			h.c({
				l: 200,
				rf: ['w', 'u', 800],
				rs: {c1: 'w', c2: 'x', r2: 800}
			}).dc({x: 0, y: 0, r: 200})
			s.h().c({
				l: 200,
				lf: {c1: 'w', c2: 'u', y2: 200},
				ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
			}).dc({x: 0, y: 0, r: 200}).drag()
			s.h().lf('y', 'r', 10).dc({r: 200}).c({
				l: 0,
				c: 'y',
				//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
				bs: i, bf: i
			}).dc({r: 200}).drag()
			s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
		})
		h.c('*').dc(100, 200, 50).dc(100, 250, 50)
		h.c('***').dc(200, 200, 50).dc(200, 250, 50)
		h.c({C: 'r'}).dc(300, 300, 50)
		h.cir({
			r: 50, x: 500, y: 200,
			C: ['y', 2],
			rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
			rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
		})
		h = w.i.h().drag().lf({}).dc()
				.c('b', 'g', 10).lf({y2: 400})
				.dc(300, 300, 50)
	}
	PUZ = function () {
		W(0);
		w.ship().tr()
		_.t(10, function () {
			w.D(400, 400, [
				['r', 20, 0, 0],
				['b', 20, 100, 0],
				['y', 20, 0, 100]
			])
		})
	}
}
function rec() {
	DOMINO = function () {
		W()
		w.D(300, 500, 'r', 40, 200)
		l = w.D(380, 500, 'r', 40, 200)
		w.e$(function () {
			var b = this.B()
			if (b == l) {
				b.I(-10, 0, V(0, -50))
			}
			else {
				b.I(10, 0, V(0, -50))
			}
		})
	}
	RECLAND = function () {
		$W()
		w.S(100, 200, 'r', 50, 50)
		w.S(200, 200, 'g', 80, 140, 30, 140, 25)
		w.S(500, 400, 'w', [
			[20, 20, -100, 50, 60],
			[100, 120, 0, 0, 100],
			[100, 20],
			[10, 300]])
		b = w.D(1000, 300)
		b.rec(100, 50)
		b.rec('z', 100, 50, -100, -100)
		b.rec('o', 100, 50, -100, 0, 25)
		b.rec('g', 100, 100)
		b.rec('y', 100, 100, 50, 50)
		b.rec('p', 100, 100, -150, -150, 45)
	}
	RECSENSOR = function () {
		$W()
		x = w.S().stat()
		x.rec(400, 20)
		f = x.rec('b', 400, 20, 0, -100, 18).C('b')
		w.dot(700, 400)
		r = x.f('w', 100, 100, 100, 100)
		x.rec({x: 200, y: -100, w: 400, h: 20, c: 'y', C: 'x'})
		w.S(500, 400, 'b', 20, 200, '-')//  sensor!
	}
}
function poly() {
	TANGRAMS = function () {
		W({g: 0})
		w.D(300, 300, 't', 56, 56).rot(45).d(1).damp(1000, 1000)
		w.D(280, 260).rot(90).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(342, 321).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(304, 220).rot(180).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(346, 262).damp(1000, 1000).rot(270).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(237, 324).den(1).damp(1000, 1000)
				.pol([V(-56, 28), V(0, -28), V(56, 28)])
		w.D(240, 267).den(1).damp(1000, 1000)
				.pol([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)])
		w.e(function (b) {
			// b.stat()
		})
	}
}
function sensor() {
//same but uses sensor
	HIPPO = LADYBUG = SNOWMAN = function () {
		W(800, 800, 800, 800).G(10000)
		w.S(300, 300, 'o', 10)
		w.S(430, 300, 'o', 10)
		w.S(300, 370, 'o', 10)
		w.S(210, 320, 'o', 10)
		w.D(300, 400, [['b', 50, 50, 0, '-'], ['y', 50]])
		b = w.D(500, 400, {r: 100, c: 'y', t: 'c'})
		b.cir({r: 100, x: 100, c: 'w', lg: 1, s: 1, t: 'c'})
		w.i.cir(100, 100, 10, 'r', 'y')
	}
//same but uses sensor
	HOLOGRAM = function () {
		W(1000, 1500, 1000, 1500).G(10000)
		b = w.D(300, 400)
		b.cir({r: 100, c: 'w', rg: 1})
		b.cir({r: 100, x: 500, c: 'w', lg: 1, s: 1})
		r = w.S(600, 300, 'r', 12, '-')
		r.cir('b', 30, 100, 200, '-')
		r.cir({c: 'g', r: 30, x: 100, s: 1}, '-')
		r.cir({c: 'w', r: 30})
		r.cir({c: 'z', y: -100})
		r.cir(['y', 30, 200, 100])
	}
	YOKEHANDLE = function () {
		W()._(function () {
			w.cir({x: 500, y: 350, r: 100, c: 'b', C: 'z', l: 20}).stat()
			w.D(800, 350).cir({
				r: 100,
				c: 'y',
				C: 'z',
				l: 100
			}) //.stat()
		})
	}
}
PIT = BALLPIT = function () {
	$W();
	_.ev(.04, function () {
		w.s.xT(w.s.t(function () {
			if (R(5) < 3) {
				w.ball(20)
			}
		}))
	})
}//B+
COOLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}//B
CLICKME = BMBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, 'CLICK me')
	})
}
HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
STATUSBALL = ILLUSION = GRADTWEEN = function () {
	W({grav: 0})
	b = w.S(500, 300, 'r', 60)
			.bS(w.s.h(500, 300))
	num = 0
	dif = .1
	shape = b.sp()//b.sprite
	shape.rf(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	_.ev(.1, function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	})
}//D- needs PLAY
BADBALL = function () {
	W({g: 0})
	w.badGuy(500, 300)
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60).dc(60)
	}
	frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
	curr = 0
	_.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
}//D+ needs PLAY
CHICKBALLS = function () {
	W(1200, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({bf: 'chicks', r: 120})
		})
	})
}
HAIRBALLS = function () {
	W(400, 400)._(function () {
		
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 10)
			b.$h('x', 'x', 1189).c('x', 'x', 200)
					.bf('sun', [0, .6, 10, 10, -40, 200])
					.cir(10)
			// <- b.C({c:'x', al:.4} )
		})
		$.d('b', 100, 100, 100, 100).drag()
	})
}
COOLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		_.t(8, function () {
			var b = w.D(R(100, 50), R(100, 50), 'b', 50)
			b.$h('x', 'X', 1)
					.c('x', 'X', 1)
					.bf('sun', [0, .9, 1, 1, -40, 2])
					.cir(50)
		})
	})
}
CANVASBMFILLBALLS = function () {
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, '$$ me')
	})
}
CANTFBALLS2 = function () {
	W([400, 400], {w: 'U'}).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		$.ev(3, function () {
			var b = w.D(200, 200, 'b', 80)
			b.$h('x', 'X', 1).c('x', 'X', 1).bf(
					w.s.cv0,
					cjs.m2d(
							.6, .1, .1, .6, -40, 180
					)
			).cir(80)
		})
	})
}
TEXTBALLS = function () {
	W([400, 400], {}).C('w')._(function () {
		b = w.D(200, 200, 'b', 80)
		b.gx = b.gx || w.g.ct()
		b.gx.qB('chicks').rC().sXY(.1).Y(30)
		nice = w.i.T(0, 140, 'nice', 100, 'o')
		b.bS(nice)
	})
}
ART = function () {
	ob = {}
	ob.cirs = function () {
		w.i.cir('b', 800, 200, 150)
		h = w.i.h('+').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, [
			{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}
		])
		w.i.cir()
		h = w.i.h().drag().lf({}).dc()
				.c('b', 'g', 10).lf({y2: 400})
				.dc(300, 300, 50)
		h.c('*').dc(100, 200, 50).dc(100, 250, 50)
		h.c('***').dc(200, 200, 50).dc(200, 250, 50)
		h.c({C: 'r'}).dc(300, 300, 50)
		h.cir({
			r: 50, x: 500, y: 200,
			C: ['y', 2],
			rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
			rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
		})
	}
	ob.pols = function () {
		w.C('w')
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
		w.i.h(100, 100, '+').cir({c: 'x', r: 100})
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
	}
	ob.strokeHandle = function () {
		w.cir({x: 500, y: 350, r: 100, c: 'b', C: 'z', l: 20}).stat()
		w.D(800, 350).cir({
			r: 100,
			c: 'y',
			C: 'z', l: 100
		})
	}
	W.btns(ob)
	TEXTBALLS = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
}
DEV = function () {
	W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
	//  w.dr(100, 100, 100, 100, '-')
	//  w.dr(100, 200, 100, 100, '+')
	w.dl('r', 0, 100, 5000, 5000, '-')
	w.dl('p', 0, 200, 5000, 2000)
	w.dl('b', 0, 300, 5000, 3000, '+')
	wh = w.S(400, 350, 'w', [[300, 220, '-']])
	or = w.S(400, 200, 'o', 300, 50)
	pi = w.S(400, 500, 'x', 300, 50)
	y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);
	w.track(y, 600, 300, '!')
	b = w.D(700, 200, 'b', 100)
	me = w.me()
}
TFS = TFSET = function () {
	W()._(function () {
		me = w.i.qB('me')
		me.drag()
		me.grow()
		i = w.i.qB('me').XY(200, 200)
		ball = w.ball()
		_.in(3, function () {
			w.C('b');
			ball.bS(i)
		})
		//  me.startMoving(10, 10)
		T.t(function () {
			iS = i.inStage()
			$l(iS)
		})
		b = w.i.qB('me')
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		//m = b.getMatrix()
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
SHOW = DOTS = SCALE = function () {
	W()
	r = 10
	w.y(200, 200)
	w.S(400, 300, 'r', 40);
	w.S(290, 350, 'b', 40);
	w.S(280, 220, 'y', 40)
	w.S(100, 100, 'r', 80, 80)
	bb = w.D(600, 400, 'o', 150, 150)
	bb.bS('me')//cant attach to above at the moment..
	b23 = w.D(400, 100)
	b23.rec('r', 20, 40, 0, 0, 180).fr(0).r(0)
	b23.rec('b', 20, 40, 0, 0, 90).fr(0).r(0)
	w.S(100, 200, 'b', 50).f().dot()
	w.S(100, 300, 'r', 80, 80)
			.f().dot().C('p').dot().C('x') //overwrites dot?
	T.t(function () {
		var p = bb.wP(80, -80)
		w.dot(p)
		bb.I(0, -200, p)
	})
	w.show(function () {
		var msg = 'num: ' + w.n()
		$l(msg)
		return msg
	})
}
ARMSEN = function () {
	W()
	b33 = w.D(500, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']])
	w.b(function (cx) {
		if (cx.w('arm')) {
			b33.I(50, 50)
		}
		if (cx.w('arm', w.right)) {
			w.C($r())
		}
	})
	b3 = w.D(100, 100, 'b', [
		[40],
		[100, 200, 100],
		[50, 200],
		[200, 200, 300, 400]
	])
	_.in(2, function () {
		b3.fs(function (f) {
			f.sen(1)
			$l('shape type: ' + f.GetShape().m_type)
		})
	})
}
WVS = WORLDVERTS = function () {
	W()
	b = w.S(500, 200, 'o', [
		[[-100, 0], [0, -100], [100, 0]]
	]).rt(25)
	f = b.f()
	v = f.wV()
	w.S(400, 200, 'w', [v])
	_.e(v, function (v) {
		w.dot(v)
	})
	w.S(600, 200, [f.wV('+')])
}
GRAD = function () {
	ob = {}
	ob.linkedCirs = function () {
		h = w.i.h().dc(100, 100, 50)
		h1 = w.i.h(-100, -100, '+').c('b', 'r', 10)
		h1.dc(200, 200, 50)
		h1.dc(400, 200, 50)
		h1.dc(600, 200, 50)
		h1.dc(300, 300, 50)
		h1.c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
	}
	ob.candy = function () {
		//the most beautiful orange candy ball!!
		// linear stroke, radial fill !!! and orange :)
		w.i.h(200, 200, '+').cir({
			r: 50,
			C: ['y', 10],
			lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			ls: {c1: 'u', c2: 'o'}
		})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	}
	ob.mick = function () {
		w.mick(700, 100, {c1: 'b', c2: 'X'})
		w.mick(700, 300, {c2: 'b'})
		w.mick(100, 100, {y2: 10})
		w.mick(100, 200, {y2: 200})
		w.mick(100, 300, {x2: 100})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	}
	ob.greyScale = function () {
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: verts, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: verts, c: 'y', C: 'y', l: 5, lf: 1})
		function tween() {
			h = w.s.h()
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.c({l: 20, C: 0, ls: 1})
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.twL(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			h.twL(
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
		
		tween()
	}
	ob.tetris = function () {
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	ob.gradPoly = function () {
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
	}
	W.btns(ob)
}
BMP = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	ob = {}
	ob.clouds = function () {
		//h.bf
		w.i.h(800, 100, '+')
				.bf('me', function (h) {
					h.dc(80).dc(90, 0, 68)
				})
		h = w.i.h(50, 200, '+')
		h.bf('chicks', function (h) {
			_h = h
			h.dc({r: 80}
					//, {r: 50, x: 100}, {r: 100, x: 400}
			)
		})
		w.I.h(200, 200, '+').bf('chicks').dc(100)
		w.timSnowman()
	}
	ob.cubes = function () {
		w.D(600, 300, 'r', 400, 300)
				.bS(h = w.bg.h().al(.5).bf('sun'))
		h.rec({w: 400, h: 300})
		function bfr() {
			w.bfR(600, 300, 'guy', 100, 100, 'X')
			w.bfR(300, 300, 'sun', 100, 100, 'z')
			w.bfR(300, 300, 'chicks', 100, 100)
		}
		
		bfr()
	}
	ob.arrows = function () {
		w.p();
		//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
		w.D(550, 200).pol({
			c: 'o', C: 'z', l: 25,
			bf: 'chicks',
			v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
		})
		//h.bV //w.pol
		w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
		w.bg.Bm('me').sXY(6.2).X(500).al(.2)
		w.D(500, 400).pol({
			v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
			c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
		})
		boomerang()
		function boomerang() {
			w.i.h(350, 150, '+')
					.pol({v: v1, bf: 'me'})
			w.D(950, -200)
					.pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
			w.D(500, 200)
					.pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
		}
	}
	ob.gems = function () {
		w.i.h(400, 300, '+').bV({v: verts})
		w.D(800, 300).pol({
			v: verts,
			c: 'r', C: 'y', l: 10,
			bf: 'me'
		})
		w.timTrapezoid(200, 300)
	}
	ob.super = function () {
		h = w.i.h(100, 300, '+')
		h.bR({
			i: 'chicks',
			hs: [
				{w: 150, h: 500},
				{w: 150, h: 500, x: 200},
				{w: 150, h: 500, x: 400},
				{w: 150, h: 500, x: 600}
			]//, fn:function(){}
		})
		w.D(200, 160).cir(
				{r: 120, rf: {c1: 'r', c2: 'b'}},
				{r: 150, C: 'y', l: 2, bf: 'me'}
		)
	}
	ob.sensor = function () {
		w.D(300, 200)
				.cir(
				{r: 20},
				// {r:20, y:-20},
				// {r:20, x:20, lf:{ c1:'b' },y:30},
				// {x:50, s:1, rf:1},
				// {x:100,r:50,c:'r',C:'x',l:10, s:1},
				{y: -100, r: 50, bf: 'me'}
		)
		w.D(800, 300).cir({w: 50, h: 100, r: 50, bf: 'me'}, {r: 50, x: 100, lf: 1, l: 15},
				{w: 40, h: 40, x: 100, c: 'y'},
				{w: 40, h: 40, x: 200, c: 'b', C: 'o', l: 10},
				{w: 200, h: 20, y: 200, s: 1, lf: {c1: 'g', c2: 'y'}})
	}
	W.btns(ob)
}
BFCIR = CHICKBALLS = function () {
	W(1600, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({
						bf: 'chicks',
						r: R(180, 50)
					})
		})
		w.y()
		w.p()
	})
}
FXS = function () {
	ob = {}
	ob.norm = function () {
		w.i.autoClear = false
		w.D(800, 300, 'b', 10).d(1)
		w.D(800, 300, 'x', 10, 10).d(1)
		w.D(800, 300, 'b', 200).d(1)
		w.D(800, 300, 'x', 200, 200).d(1)
		w.D(800, 300, 'b', 100).d(1)
		w.D(800, 300, 'x', 100, 100).d(1)
	}
	ob.balls = function () {
		w.C('w')
		w.D(600, 300, 'y', 50, 10, 10, '-').
				rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
		w.D(600, 300, 'y', 50, 10, 10, '-')
				.cir({
					k: 'cir', r: 50, x: 200, y: -100,
					d: .2, b: .8, f: 100, c: 'x'
				})
	}
	ob.domi = function () {
		w.D(300, 500, 'r', 40, 200)
		l = w.D(380, 500, 'r', 40, 200)
		w.e$(function () {
			var b = this.B()
			if (b == l) {
				b.I(-10, 0, V(0, -50))
			}
			else {
				b.I(10, 0, V(0, -50))
			}
		})
	}
	ob.door = function () {
		
		//  w.D(100, 100, cjs.somePolyFixt)
		//  w.D(200, 100, cjs.compoundShape)
		// w.D(300, 100, cjs.compoundShape2 )
		// w.D(400, 100, cjs.compoundStar)
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	ob.cata = function () {
		b = w.D(800, 300)
		b.cir('r', 100)
		b.cir('b', 80, 0, -60)
		b.cir('g', 'w', 60, 0, -140)
		b.cir('*', '*', 20, 0, -140)
		b = w.D(300, 300)
		b.cir('o', 20)
		b.cir('b', 100, 140, 0)
		b.cir('r', 20, 100, 100)
		b.cir('b', 20)
		b.cir(20, 100, 100).C('r')
		w.D(600, 300, 'b', [['b', 50, 50, 50]])
				.cir({c: 'o', r: 50})
		w.D(600, 300, 'y', [['b', 50, 50, 50]])
				.cir({c: 'b', r: 50, x: 50})
	}
	ob.recs = function () {
		w.S(100, 200, 'r', 50, 50)
		w.S(200, 200, 'g', 80, 140, 30, 140, 25)
		w.S(500, 400, 'w', [
			[20, 20, -100, 50, 60],
			[100, 120, 0, 0, 100],
			[100, 20],
			[10, 300]])
		b = w.D(1000, 300)
		b.rec(100, 50)
		b.rec('z', 100, 50, -100, -100)
		b.rec('o', 100, 50, -100, 0, 25)
		b.rec('g', 100, 100)
		b.rec('y', 100, 100, 50, 50)
		b.rec('p', 100, 100, -150, -150, 45)
	}
	ob.cups = function (o) {
		b = w.D(280, 500, 'r', cup)
		w.D(600, 500, 'b', cup2)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.S(150, 220, 'u', 50, 100)
		TEMPLE = function () {
			b = w.S(600, 200)
			b.pol([-100, 0], [0, -100], [100, 0])
			b.rec(400, 20, 0, 0, 45)
			b.rec({x: 20, y: 300, w: 400, h: 20, lf: ['g', 'w']})
			b.cir({r: 50, lf: ['g', 'w']})
		}
		TEMPLE()
	}
	ob.radio = function () {
		w.S(50, 50, 'x', 20).d(.1)
		y = w.y(1000, 400, '+')
		w.S(400, 200, 10)
		_.t(10, function () {
			w.D(700, 300, 'r', [[7]])
		})
		b = w.D(200, 300, 'z', 10)
		b.cir({r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'o', C: 'x'})
		b.cir({x: 200, y: 100, c: 'r', C: 'w'})
	}
	ob.puz = function () {
		w.ship().tr()
		_.t(10, function () {
			w.D(400, 400, [
				['r', 20, 0, 0],
				['b', 20, 100, 0],
				['y', 20, 0, 100]
			])
		})
	}
	ob.cirSensor = function () {
		function hologram() {
			b = w.D(30, 40)
			b.cir({r: 100, c: 'w', rg: 1})
			b.cir({r: 100, x: 500, c: 'w', lg: 1, s: 1})
			r = w.S(600, 300, 'r', 12, '-')
			r.cir('b', 30, 100, 200, '-')
			r.cir({c: 'g', r: 30, x: 100, s: 1}, '-')
			r.cir({c: 'w', r: 30})
			r.cir({c: 'z', y: -100})
			r.cir(['y', 30, 200, 100])
		}
		
		hologram()
		w.orangeBumps()
		//body with 1 cir
		w.D(500, 400, {r: 100, c: 'y', t: 'c'})
		//body with 3 cirs
		b = w.D(300, 400, [['b', 50, 50, 0, '-'], ['y', 50]])
		b.cir({r: 20, x: 100, c: 'w', lg: 1, s: 1, t: 'c'})
	}
	ob.recSensor = function () {
		x = w.S().stat()
		x.rec(400, 20)
		f = x.rec('b', 400, 20, 0, -100, 18).C('b')
		w.dot(700, 400)
		r = x.f('w', 100, 100, 100, 100)
		x.rec({x: 200, y: -100, w: 400, h: 20, c: 'y', C: 'x'})
		w.S(500, 400, 'b', 20, 200, '-')
		more()
		function more() {
			
			//simple off-cir-sen
			w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
			//simple off-rec-sen
			w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		}
		
		sensBalls()
		function sensBalls() {
			w.S(600, 600, 'g', 20, 1000)
			w.D(100, 400, 'z', [
				[50],
				[10, 300, '-']])
			w.D(700, 400, 'y', [
				[50],
				['r', 10, 300, '-'],
				['o', 50, 100, 0]])
		}
	}
	ob.polySensor = function () {
		
		
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
	}
	W.btns(ob)
}
POL = function () {
	ob = {}
	ob.simp = function () {
		
		//$.rulers()
		//simple off-cir-sen
		w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
		//simple off-rec-sen
		w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.D(200, 200, 'y', 10, 20).pol()
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		w.D(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]]).pol([-100, 0], [0, -100], [100, 40])//.C('g')
		b = w.D(100, 300)
		b.pol({
			s: 1, c: 'o', C: 'y',
			v: [[-200, -100], [0, -200], [100, -100]]
		})
		b.pol({
			c: 'y', C: 'o',
			v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
		})
	}
	ob.origami = function () {
		b = w.D(400, 400)
		b.pol([-300, 0], [0, -100], [10, 150])
		b.pol('y', [[-10, 0], [0, -100], [100, -50]])
		b.pol([[-200, 0], [0, -100], [10, 150]])
		b.pol({
			c: 'r', v: [
				[-100, 0],
				[0, -100],
				[100, -50]
			]
		})
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		moo()
		function moo() {
			b = w.D(400, 400)
			b.pol('o', [-300, 0], [0, -100], [10, 150])
			b.pol('y', [[-10, 0], [0, -100], [100, -50]])
			b.pol(['b', [-200, 0], [0, -100], [10, 150]])
			b.pol({
				c: 'r', v: [
					[-100, 0],
					[0, -100],
					[100, -50]
				]
			})
		}
	}
	ob.boat = function () {
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		boat2()
		function boat2() {
			b = w.D(300, 300).fixRot()
			b.pol('g', [[0, 0], [0, -200], [100, 0]])
			b.pol('b', [[0, 30], [-300, -20], [100, 0]])
			b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		}
	}
	ob.diagnal = function () {
		w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
	}
	ob.triangles = function () {
		w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		w.D(600, 300).pol('r', [[-100, 0], [0, -100], [200, 50]])
		w.D(800, 200).pol('b', [-100, 0], [0, -100], [200, 50])
		w.D(200, 200, 'y', 10, 20).pol({c: 'r'})
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
	}
	ob.tan = function () {
		w.D(300, 300, 't', 56, 56).rot(45).d(1).damp(1000, 1000)
		w.D(280, 260).rot(90).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(342, 321).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(304, 220).rot(180).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(346, 262).damp(1000, 1000).rot(270).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(237, 324).den(1).damp(1000, 1000)
				.pol([V(-56, 28), V(0, -28), V(56, 28)])
		w.D(240, 267).den(1).damp(1000, 1000)
				.pol([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)])
		w.e(function (b) {
			// b.stat()
		})
	}
	ob.bed = function () {
		w.D(400, 100, 'y', guyInBed)
		w.D(100, 100, 'r', [
			[guyInBed]
		])
		w.D(600, 300, 'b', [
			[guyInBed],
			['w', dick]
		])
		w.D(400, 100, guyInBed)
		_.t(15, function (i) {
			w.D(100 + (i * 60), 300, pin)
		})
	}
	ob.drones = function () {
		w.ball()
		b = w.S(400, 300)
		b.f('o', 50)
		b.f('r', 50, 50)
		b.f('b', 50, 50, 50)
		b.f('g', 50, 50, 50, 50)
		b.f('w', 50, 50, 50, 50, 50)
		b.f('u', [-100, 0], [0, -50], [200, -10])
		w.D(600, 300).f([
			['o', 50],
			['r', 50, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300).f('y', [
			[50],
			['r', 250, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	ob.poly = function () {
		w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		b2d.somePolyFixt = [
			[
				[-100, 0], [0, -100],
				[100, 0], [60, 50]]]
		w.D(100, 100, b2d.somePolyFixt)
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	}
	ob.turtles = function () {
		w.P()
		// y.thr()
		//turtle
		w.D(600, 280, [
			['b', 700, 40, 0, -100],
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]]
		])
		//, ['x', 10, 55,-12, '-'], ['u', 30,40, 75,-12 ,'-']
		w.verts = function (x, y, arrs) {
			var w = this
			var b = w.D(x, y)
			_.e(arrs, function (f) {
				b.pol(f)
			})
			return b
		}
		w.verts(400, 280, turtle)
		w.vertsKin = function (x, y, arrs) {
			var w = this,
					b = w.S(x, y)//Kin
			_.e(arrs, function (g) {
				b.pol(g[0], _.r(g))
			})
			return b
		}
		p.track()
		t = w.vertsKin(400, 570, turtle).fR()
		t2 = w.vertsKin(700, 570, turtle2)
		_.ev(1, function () {
			//t2.lV(5,0)
			_.in(1, function () {
				$l('ok')
				// p.lV(-500,500)
				p.I(-5000, 500)
			})
		})
	}
	ob.birds = function () {
		_.t(20, thing)
		function thing() {
			w.D(R(600), R(300, 200), [
				['p', [-20, -20], [0, -30], [10, 10]],
				['n', [0, 0], [30, -50], [50, -10]]
			])
		}
	}
	W.btns(ob)
}
BPL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 200).pol(vs1)
}
BPOL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
BALLS = function () {
	W([1200, 600, 2400, 600], {g: 10}).y('+')
	_.t(10, function (i) {
		w.D(100 + i * 100, 100)
				.cir({
					r: 35,
					lf: {c1: '*', c2: '*'}
				}).d(.1)
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
	})
	_.t10(function (i) {
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
		w.S(100 + i * 140, 160).cir({
			r: 50,
			rf: {c1: '*', c2: '*'}
		}).d(.1)
	})
}
TURTS = function () {
	W([1200, 600, 2400, 600], {g: 10})
	turtle = [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12],
		['u', 30, 40, 75, -12]
	]
	w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-'],
		['u', 30, 40, 75, -12, '-']
	])
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-']
	])
	w.D(600, 280, [
		['x', 300, 20],
		['u', 30, 40, '-'],
		['p', 40, 10, 10]
	])
}
BMRECS = function () {
	W()
	w.i.h(200, 300).dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
	})
	w.i.h().dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
		w.D(600, 300, 'b', 500, 200).bS(h)
	})
}
w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	if (g.u) {
		return w.D(
				w.hW, w.hH)
	}
	//	o = //g.O ? g.f :
	o = g.O_ ? {p: g.f, f: g.r} :
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.cB(b2d.bD(o.p))
	b.K(g.k)
	$a(b, 'f', g.G(o.f))
	return b
}
w.D_ = w._D = function (o) {
	alert('w._D??? nah, w.D_')
	return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.boxes = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.box.apply(w, g)
	})
	return w
}
w.brcks = w.boxesStat = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.brick.apply(w, g)
	})
	return w
}
Pol = function (vs) {
	this.v = this.vs = vs
}
f.pol = function (o) {
	return _.x(o || {}, {v: this.pts()})
}
f.pol = f.polDat = function (o) {
	var f = this
	var vs = f.pts()
	var pol = {v: vs, vs: vs}
	return O(o) ? _.x(o, pol) : pol
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = g.O_ ? g.f : N(g.s) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f}
	o.w = N(o.w, 40)
	b = w.S(N(o.x, w.hW), N(o.y, w.hH), o.c || $r(), o.w, N(o.h, o.w))
	b.K('brick')     //.DFB(0.5, 0.5, 0)
	return g.n ? b.sen(true) : b
}
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = _.x({x: g.f, y: g.s},
			S(g.t) ? {
				i: g.t,
				w: g.fo, h: g.fi, c: g.si
			} : {
				w: g.t, h: g.fo, c: g.fi
			})
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w._D(o)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
w.dJRopeBall = function () {
	var w = this
	var b = w.brk(255, 50, 60, 15, 'g')
	var link = b
	for (var i = 1; i <= 10; i++) {
		b = w.brk(255, i * 30, 3, 15, 'w')
		w.rJ(link, b)
		link = b
	}
	w.rJ(link, w.bal(255, 330, 20, 'w'))
	return w
}
w.mePyr = function () {
	var w = this
	_.t(8, function () {
		w.me().XY(700, 400)
	})
	_.t(4, function () {
		w.me().XY(700, 300)
	})
	_.t(1, function () {
		w.me().XY(700, 200)
	})
	return w
}
ROPB = function () {
	W(20).dJRopeBall()
}
/*
 isHooked = false
 distJ = false
 hero = w.rect(320, 460, 20, 20, 'b')
 $can = superCanvas($(w.s.HUD.canvas))
 $can.MD(function (x, y) {
 w.QueryPoint(function (fixture) {
 var touchedBody = fixture.body()
 if (touchedBody.isStat()) {
 distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
 isHooked = true
 }
 return false
 }, V(x, y).div())
 }) //if(distJ){w.DestroyJoint(distJ)}
 $can.MU(function () {
 if (distJ) {
 w.DestroyJoint(distJ)
 }
 })   // if I release the mouse, I destroy the distance joint

 $t(function () {// as long as the hook is active, I shorten a bit joint distance
 if (isHooked) {
 hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
 distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
 }
 })
 */
b.XX = b.destroy = b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	_.each(this.fixts(), function (f) {
		f.removeSprites()
		//if(f.sprite){f.sprite.remove()}
	})
	this.sprite = null
	this.SetActive(false)
	this.wor().DestroyBody(this)
}//b.setDestroy=function(){ return this.K('destroy') }; b.setDestroyIf=function(data){if(this.is(data)){this.setDestroy()}}
b.kill = b.xx = b.destroy = function () {
	var b = this, w = b.W()
	b.SetActive(false)
	if (w._preKill) {
		w._preKill(b)
	}
	b.W().DestroyBody(b)
	return b.pos()
}
f.removeSprites = function () {
	var f = this
	f.sprites = f.sprites || []
	_.each(f.sprites,
			function (s) {
				if (O(s) && s.parent) {
					s.remove()
				}
			}
	)
	f.sprites = []
	return this
}
f.kill = f.remove = function () { // if(this.sprite  ){this.sprite.remove()}
	this.removeSprites()
	this.B().destroyFixt(this)
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
}
f.kill = function () {
	var f = this, b = f.B(), w = b.W()
	if (!f) {
		return
	}
	if (w._fPreKill) {
		w._fPreKill(f)
	}
	if (b) {
		b.rmF(f)
	}
}//= f.xx = f.remove
f.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.remove();
	return
}
b.destroySpaz = b.kill = b.rm = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.ds()
}
b.destroyFixt = b.destroyFixture = function (f) {
	this.DestroyFixture(f)
	return this
}
b.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.sprite = null
	this.SetActive(false)
	this.destroy()
}
b.destroy = function () {
	this.W().DestroyBody(this)
}
b.setDestroy = function () {
	return this.K('destroy')
}
b.setDestroyIf = function (data) {
	if (this.is(data)) {
		this.setDestroy()
	}
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
f.S = f.stg = function () {
	return this.W().s
}
w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
w.S = function (x, y) {
	var w = this,
			g = G(arguments),
			x = g[0], y = g[1],
			bd, b, fixts, clas
	if (S(_.last(g))) {
		clas = g.pop()
	}
	if (N(x)) {
		bd = b2d.stat(x, y)
		fixts = _.rest(g, 2)
	}
	else {
		if (b2d.isBDef(x)) {
			bd = x
		}
		else {
			x = V(x);
			bd = b2d.stat(x.x, x.y)
		}
		fixts = _.rest(g)
	}
	b = w.CreateBody(bd)
	if (fixts.length) {
		b.H.apply(b,
				fixts
				//   _.map(fixts, function(f){   return A(f)?f:[f]  })
		)
	}
	if (clas) {
		b.K(clas)
	}
	return b
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.stg = function () {
	return this.W().stage
}
w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	var vec = N(x) ? V(x, y) : x
	return this.GLP(vec.d()).m()
}
b.gLVFLP = function (vec) {
	return this.GetLinearVelocityFromLocalPoint(vec)
}
b.gLVFLP = b.GetLinearVelocityFromLocalPoint
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
b.GLP = function (vec) {
	return this.GetLocalPoint(vec)
}
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	return this.GetLocalPoint(V(x, y, '-')).m()
}
w.dev = function () {
	var w = this,
			d = $.div('t', 400, 600).abs(1200, 0).A(),
			d1 = $.div('x', 400, 600).abs(1600, 0).A()
	d.A($.h1('world stats'))
	d1.A($.h1('body stats'))
	return w
}
w.mark = function () {
	var w = this
	w.C('z')
	_.times(50, function (i) {
		w.S(i * 200, 0, 'w', 1, 10000).sensor(true)
	})
	_.times(50, function (i) {
		w.S(0, i * 200, 'w', 10000, 1).sensor(true)
	})
	return w
}
w.dbLayers = function () {
	var w = this
	w.dr(75, 75, 150, 150, '-')
	w.dr(140, 0, 20, 300)
	w.dr(0, 150, 300, 20)
	w.dr(100, 100, 100, 100, '+')
	return w
}
w.dbCross = function (x, y) {
	var w = this, c = w.cent()
	x = N(x) ? x : c.x
	y = N(y) ? y : c.y
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.back = function () {
	var w = this,
			back = w.s.back
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.HUD = function () {
	var w = this,
			back = w.s.HUD
	if (!back.x) {
		back.x = 10000
		back.y = 10000
	}
	else {
		back.x = 0
		back.y = 0
	}
	return w
}
w.lay = function () {
	var w = this
	w.back().HUD().db()
	return w
}
DBLAYERS = function () {
	W([1200, 600, 2400, 1200], {g: 0})
	w.dbLayers()
}
MARK = function () {
	
	//no buffer to worry about
	//it lets u gradually move past the target point.. until hits limit
	W([1200, // x
		600,
		4800, // x
		1200
	], {g: 0, t: 0}).mark()
	w.S(1200, 300, 'r', 400, 100)
	w.S(1200, 900, 'r', 400, 100)
	w.S(1200, 600, 'w', [[400, 500, '-']])
	y = w.ship(200, 200).rot(120).damp(1, 10)
	w.track(y, 600, 300)
	w.dot(600, 300)
	w.hud.dot(600, 300)
	w.dot(1200, 600)
	w.hud.dot(1200, 600)
	y.XY(100, 600).rot(90).lD(0).lV(4)
}
function maybeOldMore() {
	w.l = w.dl = function () {
		var w = this, g = G(arguments), o, i
		o = S(g[0]) ?
		{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
				:
		{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
		i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
		o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
		return i.h()
				.c(10, o.c)
				.mt(o.x1, o.y1)
				.lt(o.x2, o.y2).K('dev line')
	}
	w.dr = function (c, x, y, W, h) {
		var w = this, g = G(arguments), o
		o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
				: {x: g[0], y: g[1], w: g[2], h: g[3]}
		_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
				g.n ? {g: w.bg, c: o.c || 'r'} :
				{g: w.hud, c: o.c || 'b'})
		o.g.h().rec(o)
	}
//dev
	w.dbCross = function (x, y) {
		var w = this, c = w.cen()
		x = N(x, c.x)
		y = N(y, c.y)
		w.dr('t', -10 + x, -140 + y, 20, 300, '-')
		w.dr('t', -150 + x, -10 + y, 300, 20, '-')
		w.dot('r', x, y)
		return w
	}
	w.stats = function (n) {
		var w = this
		_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
		w.mdq(function (fx) {
			_f = _d._fix = fx;
			_b = _f.B()
		})
		if (n == 0) {
			z(upd)
		}
		else {
			_.ev(N(n, .2), upd)
		}
		return w
		function upd() {
			var f, b;
			if (_d._fix) {
				f = _d._fix
				b = f.B()
				_d.T(
						'ty: ' + (b.iD() ? 'dyn' : 'stat'),
						'x: ' + b.X(),
						'y: ' + b.Y(),
						'fK: ' + f.K(), 'bK: ' + b.K(),
						'sen: ' + f.sen(),
						'd: ' + f.d(),
						'fr: ' + f.fr(),
						'r: ' + f.r(),
						'bMass:' + parseInt(f.B().mass()),
						'bNum:' + f.B().n()
				)
			}
		}
	}
	w.devGrid = function () {
		var w = this
		_.t(12, function (i) {
			w.l(i * 200, 0, i * 200, w.h)
			w.l(i * 200, 0, i * 200, w.h, '-')
			w.l(0, i * 200, w.w, i * 200)
			w.l(0, i * 200, w.w, i * 200, '-')
		})
		return w
	}
	w.flash = function () {
		var w = this, s = w.s
		s.flash.apply(s, arguments)
		return w
	}
//write
	w.pop = function (t) {
		var w = this
		t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
		t.tw([{a: .5, sxy: .5}, 4000])
		_.in(4, function () {
			t.rm()
		})
		return this
	}
	w.pen = function (t, f, c) {
		var g = G(arguments), o
		if (this._T) {
			this._T.rm();
			this._T = null
		}
		o = {y: 100}
		o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
		this._T = this.i.T(t, f, c)
		this._T.XY(o.x, o.y)
		return this._T
	}
	w.chalk = function () {
		var w = this, g = G(arguments)
		w.i.chalk.apply(w.i, g)
		return w
	}
	w.show = function (fn) {
		var w = this, g = G(arguments)
		_.ev(.2, function () {
			w.pen(S(fn) ? window[fn] : fn())
		})
		return w
	}
	i.tickX = function (fn) {
		var i = this
		T.t(function () {
			i.X(fn())
		})
		return i
	}
	i.tickY = function (fn) {
		var i = this
		T.t(function () {
			i.Y(fn())
		})
		return i
	}
	i.dr = function (dr) {
		alert('i.dr')
		if (U(dr)) {
			return this.direction
		}
		this.direction = dr;
		return this
	}
	i.nm = function (dr) {
		alret('i.nm')
		if (U(dr)) {
			return this.name
		}
		this.name = dr;
		return this
	}
	i.warpX = function (lo, hi, cush) {
		alert('i.warpX')
		var i = this,
				wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.x = wrp(i.x)
		})
		return i
	}
	i.warpY = function (lo, hi, cush) {
		alert('i.warpY')
		var i = this, wrp = M.wrp(lo, hi, cush)
		T.t(function () {
			i.y = wrp(i.y)
		})
		return i
	}
	i.warp = function (n) {
		var i = this, s = i.S(), n = n || 0
		i.warpX(0, s.W(), n)
		i.warpY(0, s.H(), n)
		return i
	}
	ct.reset = function () {
		alert('ct.reset')
		this.St().removeAllChildren()
		T.removeAllListeners()
	}
	cross = function () {
		r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
		b = w.S(600, 300, 'b', 300, 100).rt(-35)
	}
}
b.relPos = function () {
	return this.X() + this.stg().X()
}
b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this,
			rect = b2d.poly(wd, ht, x, y),
			fixt = this.fixt(rect).den(1),
			r = cjs.rect2(wd, ht, x, y).XY(this.X(), this.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	return fixt
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var that = this
	var rect = b2d.poly(wd, ht, x, y)
	rect.isSensor = true
	var fixt = this.fixt(rect)
	fixt.den(.00000001)
	var r = cjs.rect2(wd, ht, x, y)
	r.XY(this.X(), this.Y())
	w.s.A(r)
	r.opacity(.3)
	cjs.tick(function () {
		r.rot(that.rot())
		r.XY(that.X(), that.Y())
	})
	fixt.sprite = r
	return fixt
}
b.RECT = function (col, wd, ht, x, y, rot) {
	var g = G(arguments),
			fd,
			fixt,
			h,
			str, alpha = 1
	col = g[0];
	wd = g[1];
	ht = g[2]
	x = g[3];
	y = g[4];
	rot = g[5]
	if (S(rot)) {
		str = rot;
		rot = null
	}
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(ht)) {
		str = ht;
		ht = null
	}
	if (!S(col)) {
		rot = y;
		y = x;
		x = ht;
		ht = wd;
		wd = col
	}
	fd = b2d.rec(wd, ht, x, y, rot)
	if (g.n) {
		fd.isSensor = true
		alpha = .2
	}
	fixt = this.fixt(fd)
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(
				w.s.RECT(col, wd, ht, x, y, rot), 0, 0, 0, alpha
		)
	}
	return fixt
}
b.CIRC = b.circ = function (col, rad, x, y) {
	var g = G(arguments), fixt, h, str
	col = g[0];
	rad = g[1];
	x = g[2];
	y = g[3];
	if (S(y)) {
		str = y;
		y = null
	}
	if (S(x)) {
		str = x;
		x = null
	}
	if (S(rad)) {
		str = rad;
		rad = null
	}
	if (!S(col)) {
		y = x;
		x = rad;
		rad = col
	}
	fixt = this.fixt(b2d.circ(rad, x, y))
	if (str) {
		fixt.K(str)
	}
	if (S(col)) {
		fixt.bindSprite(w.s.circ(col, rad, x, y))
	}
	return fixt
}
f.stg = function () {
	return this.wor().s
}
f.dot = function (col) {
	var f = this, w = f.wor(), cent = f.cent()
	if (S(col)) {
		w.dot(col, cent)
	} else {
		w.dot(cent)
	}
	return this
}
f.dots = function () {
	b2d.polyDot(this.wVerts())
	return this
}
f.dyn = function () {
	var b = this.B();
	b.dyn.apply(b, arguments);
	return this
}
f.gx = f.spr = f.bindSprite = f.bindSprite2 = function (obj, startingRotation, x, y, alpha) {
	var g = G(arguments)
	gg = g
	alpha = N(alpha) ? alpha : 1
	obj.opacity(alpha)
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = this,
			body = this.body(),
			stage = body.wor().s
	startingRotation = N(startingRotation) ? startingRotation : 0
	//f.sprite = obj
	//f.sprite.a2(stage)
	o = obj.a2(stage)
	f.sprites = f.sprites || []
	f.sprites.push(obj)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {//if(!f.sprite){return}
		obj.XY(body.X() + (x || 0), body.Y() + (y || 0))
		obj.rotation = body.rot() + startingRotation
	})
	return this
}
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//if( ! o.$$ == 0 ){ makeShapeOnDblClk() }
// $.gameController().A();
//cjs.Ticker.removeAllEventListeners()
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
b._BOX_ = function (wd, ht, x, y) {
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
	var r = f.sprite = $r2Gx(wd, ht, x, y)
			.XY(b.X(), b.Y()).al(.3).a2(w.st)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
b.POLY = function (c, arr) {
	var b = this, w = b.W(), g = G(arguments), o
	o = S(g.f) ? {c: g.f, arr: g.s} : {arr: g.f}
	o.c = o.c || 'y'
	var f = b.f($aF(o.arr))
	b.bS2(
			w.st.poly(o.arr, o.c, o.c))
	return f
}//w.CONVEX = b.vex = b.conv = b.vex =
//specific to talkjs
w.tick = function (draw) {
	var w = this,
			can = w.can,
			ctx = w.ctx
	draw = N(draw) ? draw : 0.1
	ctx.tick(function () {
		this.trans(0, 0).Z(1, 1);
		w.draw(draw)
	})
	return this
}
function draw() {
	w.dbX = function () {
		var w = this
		w.line(0, 0, w.W(), w.H(), '+')
		w.line(0, w.W(), w.H(), 0, '+')
		if (N(w.w) && N(w.h)) {
			w.line(0, 0, w.w, w.h)
			w.line(0, w.W(), w.H(), 0)
		}
	}
	w.dr = function (col, x, y, W, h) {
		var w = this,
				g = G(arguments),
				col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]
		if (g.p) {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'b'
			}
			w.s.HUD.shape().fs(col).rect(x, y, W, h)
		}
		else if (g.n) {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'r'
			}
			w.s.back.shape().fs(col).rect(x, y, W, h)
		}
		else {
			if (!S(col)) {
				h = W;
				W = y;
				y = x;
				x = col;
				col = 'w'
			}
			w.s.shape().fs(col).rect(x, y, W, h)
		}
	}
	w.Y = function (x, Y) {
		var w = this;
		y = w.ship(x, Y);
		return w
	}
//w.s.shape().fs('y').rect(100,100,100,100)
//w.s.HUD.shape().fs('o').rect(100,200,100,100)
	w.line = function (col, x1, y1, x2, y2) {
		var w = this,
				g = G(arguments),
				col = g[0],
				x1 = g[1], y1 = g[2],
				x2 = g[3], y2 = g[4]
		if (g.p) {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'b'
			}
			h = w.s.HUD.shape()
			return h.sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
		else if (g.n) {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'x'
			}
			return w.s.back.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
		else {
			if (!S(col)) {
				y2 = x2;
				x2 = y1;
				y1 = x1;
				x1 = col;
				col = 'w'
			}
			return w.s.shape().sC(col, 8).mt(x1, y1).lt(x2, y2)
		}
	}
}
function stage() {
	w.sH = function (h) {
		var w = this, wH = w.H()
		if (U(h)) {
			return wH * w.s.scaleY
		}
		w.s.scaleY = h / wH
		return w
	}
}
b.$ = b.click = function (fn) {
	var b = this
	b.W().stage.on('stagemouseup', function (ev) {
		w.qPoint(
				function (f) {
					if (f.B() == b) {
						_.b(fn, b)(f)
					}
				},
				ev.rawX,
				ev.rawY
		)
	})
	return b
}
b.dot = function (color) {
	color = oO('c', color || 'y')
	this.stg().dot(color, this.cent()) //  this.X(), this.Y()
}
b.stg = function () {
	return this.W().stage
}
w.ch = w.chalk = function () {
	this.st.chalk.apply(this.st, arguments)
	return this
}
b.dot = function () {
	var b = this, w = b.W(), g = G(arguments)
	g.N_ ? (
			g.p ?
					T.t(function () {
						b.dot(g.f, g.s)
					}) :
					w.d(b.wP(g.f, g.s)))
			:
			w.d(g.f || 'y', g.p ? b.wC() : b)
	return b
}
w.sh = w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		w.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.dot = function () {
	this.s.dot.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
}
w.fl = w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.l = w.dl = function () {
	var w = this, g = G(arguments), o, i
	o = S(g[0]) ?
	{c: g[0], x1: g[1], y1: g[2], x2: g[3], y2: g[4]}
			:
	{x1: g[0], y1: g[1], x2: g[2], y2: g[3]}
	i = g.p ? w.fg : g.n ? w.bg : g.d ? w.g : w.i
	o.c = o.c || (g.p ? 'p' : g.n ? 'r' : g.d ? 'd' : 'b')
	return i.h()
			.c(10, o.c)
			.mt(o.x1, o.y1)
			.lt(o.x2, o.y2).K('dev line')
}
w.dr = function (c, x, y, W, h) {
	var w = this, g = G(arguments), o
	o = g.S_ ? {c: g[0], x: g[1], y: g[2], w: g[3], h: g[4]}
			: {x: g[0], y: g[1], w: g[2], h: g[3]}
	_.x(o, g.p ? {g: w.fg, c: o.c || 'p'} :
			g.n ? {g: w.bg, c: o.c || 'r'} :
			{g: w.hud, c: o.c || 'b'})
	o.g.h().rec(o)
}
//dev
w.dbCross = function (x, y) {
	var w = this, c = w.cen()
	x = N(x, c.x)
	y = N(y, c.y)
	w.dr('t', -10 + x, -140 + y, 20, 300, '-')
	w.dr('t', -150 + x, -10 + y, 300, 20, '-')
	w.dot('r', x, y)
	return w
}
w.stats = function (n) {
	var w = this
	_d = $.d(400, 600, w.W, 0, '+').A($.h1('stats'))
	w.mdq(function (fx) {
		_f = _d._fix = fx;
		_b = _f.B()
	})
	if (n == 0) {
		z(upd)
	}
	else {
		_.ev(N(n, .2), upd)
	}
	return w
	function upd() {
		var f, b;
		if (_d._fix) {
			f = _d._fix
			b = f.B()
			_d.T(
					'ty: ' + (b.iD() ? 'dyn' : 'stat'),
					'x: ' + b.X(),
					'y: ' + b.Y(),
					'fK: ' + f.K(), 'bK: ' + b.K(),
					'sen: ' + f.sen(),
					'd: ' + f.d(),
					'fr: ' + f.fr(),
					'r: ' + f.r(),
					'bMass:' + parseInt(f.B().mass()),
					'bNum:' + f.B().n()
			)
		}
	}
}
w.devGrid = function () {
	var w = this
	_.t(12, function (i) {
		w.l(i * 200, 0, i * 200, w.h)
		w.l(i * 200, 0, i * 200, w.h, '-')
		w.l(0, i * 200, w.w, i * 200)
		w.l(0, i * 200, w.w, i * 200, '-')
	})
	return w
}
w.flash = function () {
	var w = this, s = w.s
	s.flash.apply(s, arguments)
	return w
}
//write
w.pop = function (t) {
	var w = this
	t = this.i.T(t || 'no text', 80, 'o', w.hW, 200)
	t.tw([{a: .5, sxy: .5}, 4000])
	_.in(4, function () {
		t.rm()
	})
	return this
}
w.pen = function (t, f, c) {
	var g = G(arguments), o
	if (this._T) {
		this._T.rm();
		this._T = null
	}
	o = {y: 100}
	o.x = g.n ? 200 : g.p ? this.W - 200 : this.hW
	this._T = this.i.T(t, f, c)
	this._T.XY(o.x, o.y)
	return this._T
}
w.chalk = function () {
	var w = this, g = G(arguments)
	w.i.chalk.apply(w.i, g)
	return w
}
w.show = function (fn) {
	var w = this, g = G(arguments)
	_.ev(.2, function () {
		w.pen(S(fn) ? window[fn] : fn())
	})
	return w
}
i.tickX = function (fn) {
	var i = this
	T.t(function () {
		i.X(fn())
	})
	return i
}
i.tickY = function (fn) {
	var i = this
	T.t(function () {
		i.Y(fn())
	})
	return i
}
i.dr = function (dr) {
	alert('i.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
i.nm = function (dr) {
	alret('i.nm')
	if (U(dr)) {
		return this.name
	}
	this.name = dr;
	return this
}
i.warpX = function (lo, hi, cush) {
	alert('i.warpX')
	var i = this,
			wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.x = wrp(i.x)
	})
	return i
}
i.warpY = function (lo, hi, cush) {
	alert('i.warpY')
	var i = this, wrp = M.wrp(lo, hi, cush)
	T.t(function () {
		i.y = wrp(i.y)
	})
	return i
}
i.warp = function (n) {
	var i = this, s = i.S(), n = n || 0
	i.warpX(0, s.W(), n)
	i.warpY(0, s.H(), n)
	return i
}
ct.reset = function () {
	alert('ct.reset')
	this.St().removeAllChildren()
	T.removeAllListeners()
}
cross = function () {
	r = w.S(600, 300, 'r', 300, 100, 0, 0, 30)
	b = w.S(600, 300, 'b', 300, 100).rt(-35)
}
//move to x-middle of stage
b.horizCenter = function () {
	return this.X(this.wor().s.W() / 2)
}
b.stg = function () {
	return this.wor().s
}
b.click = function (func) {
	var b = this, w = this.wor()
	w.s.on('stagemouseup', function (e) {
		w.queryPoint(function (f) {
					if (b == f.B()) {
						_.bind(func, b)(f)
					}
				},
				e.rawX, e.rawY)
	})
}
b.img = b.bindSprite = function (img, scale, startingRotation) { //img is an image name  //rotation is in degerees!
	var body = this, stage = body.wor().s
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6 // why not zero ?????
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm  //only one???
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y()) //can simplify?
			bm.rotation = body.rot() + startingRotation
		}
	}, '-') // what is this negative doing ?????
	return body
}
b.mid = function () {
	var b = this, w = b.W()
	return b.XY(
			w.w / 2,
			w.h / 2
	)
	function alt() {
		b.mid = function () {
			var b = this, w = b.wor()
			return b.XY(w.w / 2, w.h / 2)
		}
	}
}
w.gx = function (o) {
	var w = this, W = o.W, H = o.H
	w.bg = new cjs.Stage($.can(o.C || 'z', W, H).P('a').XY(0, 0)[0]).A().tick();
	w.bg.linGrad = function (c1, c2) {
		var s = this, H = s.H(), W = s.W()
		c1 = oO('c', c1 || 'b')
		c2 = oO('c', c2 || 'r')
		if (R()) {
			$l('=')
			if (R()) {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, 0, H).dr(0, 0, W, H)
			}
			else {
				s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, 0).dr(0, 0, W, H)
			}
		}
		else {
			$l('/')
			if (R()) {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, H, 0, 0).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, 0, W, H).dr(0, 0, W, H)
				}
			}
			else {
				if (R()) {
					s.SHAPE.linGrad([c1, c2], [0, 1], W, 0, 0, H).dr(0, 0, W, H)
				}
				else {
					s.SHAPE.linGrad([c1, c2], [0, 1], 0, H, W, 0).dr(0, 0, W, H)
				}
			}
		}
	}
	w.bg.SHAPE = w.bg.shape(0, 0, 'w')
	w.bg.linGrad('z', 'w')
	w.s = w.stage = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().noAutoClear().tick()
	w.canvas = w.s.canvas
	w.c = w.can = $(w.canvas).id('canvas')
	w.ctx = w.context = w.c.ctx('2d')
	w.hud = new cjs.Stage($.can('X', W, H).P('a').XY(0, 0)[0]).A().tick()
	w.hud.h = w.hud.shape().fs($r()).rect(0, 0, 5000, 5000).opacity(.3)
	w.hud.c = $(w.hud.canvas)
	w.s.back = w.bg
	w.s.HUD = w.hud
	return w
}
w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		world.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.chalk = function () {
	this.s.chalk.apply(this.s, arguments)
	return this
}
function stage() {
	w.setBg = function (o) {
		var w = this;
		if (o.i) {
			w.s.bm(o.i)
		}
		;
		return w
	}
	w.auCl = function (aC) {
		var w = this, st = w.st
		if (U(aC)) {
			return st.autoClear
		}
		st.autoClear = aC ? true : false
		return w
	}
	w.ggAuCl = function () {
		var w = this
		w.auCl(!w.auCl())
		return w
	}
}
function world() {
//function write() {
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
w.dot = function (col, x, y) {
	var w = this,
			g = G(arguments),
			col = g[0], x = g[1], y = g[2]
	if (g.m) {
		w.dot(col, x, y);
		w.dot(col, x, y, '+')
	}
	if (g.p) {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'b'
		}
		w.hud.dot(col, x, y)
		//w.s.HUD.dot.apply(w.s.HUD, arguments) //interesting.. dotting just needs a stage
	}
	else {
		if (!S(col)) {
			y = x;
			x = col;
			col = 'w'
		}
		w.s.dot(col, x, y)
	}
	return w
}
w.pen = function () {
	this.s.pen.apply(this.s, arguments)
	return this
}
w.fadeTitle = function (text) {
	text = text || 'no text provided, yo'
	setTimeout(function () {
		t = w.s.text(text, 50, 'white', 600, 100)
		t.tween([{a: 0, sxy: 0}, 2000])
		setTimeout(function () {
			t.remove()
		}, 1000)
	}, 500)
	return this
}
w.flash = function () {
	this.s.flash.apply(this.s, arguments)
	return this
}
w.C = function (col) {
	var w = this
	w.c.C(col)
	return w
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
b.centerScale = function (scale) {
	var body = this
	body.stg().sXY(scale)
			.X(300 - ((body.X() - 300) * scale))
			.Y(150 - ((body.Y() - 150)) * scale)
	return this
}
b.color = function (c1, c2) {
	c1 = c1 || 'b';
	c2 = c2 || c1
	_.each(this.fixts(), function (f) {
		f.color(c1, c2)
	})
}
b.hCen = b.hoCen = b.hzCen = function () {
	var b = this
	return b.X(b.W().st.W() / 2)
}
b.constF = function (x, y) {
	var b = this
	$t(function () {
		b.F(x, y)
	})
	return b
}
b.warp = function (p) {
	var p = this
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return this
}
f.dot = function (c) {
	var f = this, b = f.B(), w = b.W()
	var stg = w.s
	if (c) {
		return stg.dot(c, f.cen())
	}
	return stg.dot(f.cen())
}
w.gridDrawer = function (x, y, len, spa) {
	var w = this
	len = N(len) ? len : 30;
	spa = N(spa) ? spa : 20
	return function (x, y) {
		b.rect(len, len, x * spa, y * spa);
		return b
	}
}
w.GRID = function (gd, x, y, l, spa) {//spacing
	var w = this
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.rect(l, l, rw * spa, c * spa, 'p');
			}
		})
	})
	return b.K('grid')
}
COLORMAZE = MMM = MARIOMAZE = function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	p = w.p(2.5).XY(220, 70).con('thrust').aD(10000)
	//p.follow(300, 150)
	grid = w.GRID(maze, 100, -100, 14, 40)
	score = 100
	$t(function () {
		
		//grid.aV(.2)
		//w.st.HUD.pen(score)
	})
	//w.b(function (cx) {cx.w('player', 'grid', function() {score--		   })})
	// grid.angDamp(1)
}
w.UI = function () {
	//alert('w.UI');
	return $(this.i.canvas)
}
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bindSprite2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
COL = COLORAPP = function () {
	W(2)
	w.BUMP(100, 200, 25)
	w.BRICK(700, 200, 25)
	w.BALL(100, 100, 25)
	w.BOX()
	w.BOX(100)
	w.BOX(700, 300)
	b = w.BOX(700, 300, 25)
	w.BOX(700, 300, 25)
	w.BOX(700, 300, 25, 25)
	w.BUMP(100, 200, 25, 'r')
	w.BRICK(700, 200, 25, 'r')
	w.BALL(100, 100, 25, 'r')
	w.BOX(700, 100, 25, 'r')
}
w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
	{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w.D(o.x, o.y, o.c, o.w, o.h)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
f.bS = function () {
	this.sprites = this.sprites || []
	//higher level.. can handle obs and Q-strings
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite
	if (S(g.f)) {
		return f.bSQ(g.f)
	}// not alerted
	o = cjs.iDO(g.f) ? {
		j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]
	} : g.f
	$df.bsDF(o)
	sprite = o.j.al(N(o.al, 1))
	f.sprites.push(sprite)
	w.gx.A(sprite)
	$t(function () {
		sprite
				.XY(b.X() + o.x, b.Y() + o.y)
				.rt(b.rt() + o.rt)
	})
	return f
}
f.cSp = function (o) {
	var f = this, b = f.B(), w = b.W(),
			cir = w.g.h().cir(o)
	this.bS(cir)
	this.g = cir
	return f
}
f.spritePush = function (j) {
	alert('spritePush')
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
f.spritePush = function (j) {
	alert('spritePush')
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
f.sp = function () {
	return this.sprites[0]
}
f.sp = function () {
	return this.sprites[0]
}
f.sp = function (sp) {
	var f = this
	if (U(sp)) {
		return f.sprite
	}
	f.sprite = sp
	return f
}
f.Sp = function (sp) {
	var f = this
	f.sprite = sp
	return sp
}
b.bS = function () {
	var b = this, w = b.W(), g = G(arguments), o, i, a, sc
	//pass it a display object (which i guess implies its already loaded)
	o = cjs.iDO(g.f) ? {i: g.f, bm: g.f} :
			g.O ? g.f :
			{i: g.f, sc: g.s, x: g.t, y: g[3], r: g[4], al: g[5]}
	if (S(o.i)) {
		w.g.bm(o.i, function (bm) {
			b.bS(_.x(o, {i: bm, bm: bm}))
		})
	}
	//if not loaded, async loads and passes it back as a data object 
	// next time, then, when loaded it can bypass async
	else {
		$df.xyr(o)
		$df.sc(o)
		$df.im(o)
		//they can pass in a formed shapeer
		if (cjs.hasDim(o.bm) && !g.n) {
			o.bm.rC()
		} //regCent //can not center things that dont have dimensions! 
		// scale, position and place the bm in the ct (which is on the stage)
		o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.r).al(o.al)
		this.gx = this.gx || w.gx.ct();
		this.gx.A(o.bm)
	}
	return this
}
b.bindSprite2 = b.bS2 = function (obj, startingRotation, x, y) {
	
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	//  stage.A( displayObject = obj )
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rot() + startingRotation
		})
	})
	return body
}
b.sp = function () {
	var b = this, g = G(arguments), ch
	if (b.gx && b.gx.children) {
		ch = g.p ? b.gx.children :
				g.n ? b.gx.children[0] :
						_.l(b.gx.children)
		if (g.u) {
			return ch
		}
		if (g.F_) {
			_.e(ch, g.f);
			return this
		}
	}
}
w.bH = w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	$t(
			function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}
b.Bm = function (iS, x, y, sX, sY, rt) {
	var b = this, w = b.W(), g = G(arguments);
	b.gx = b.gx || w.gx.ct()
	if (S(iS)) {
		this.gx.bm(iS, fn)
	}
	if (O(iS)) {
		fn(iS);
		return iS
	}
	return b
	function fn(bm) {
		bm.rC().XY(N(x, 0), N(y, 0)).sXY(N(sX, 1), N(sY, sX || 1)).rt(N(rt, 0))
	}
}
// Hit testing the screen width, otherwise our sprite would disappear //
// We've reached the right side of our screen
// We need to walk left now to go back to our initial position
//sS.addFlipped(true, false, false)
// walk_h has been generated by addFlippedFrames and
// contained the right facing animations
//T.f(40)
//sprite.shadow = new createjs.Shadow("#454", 10, 15, 14)
//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left)
// - so i must draw facing right
////
//alert
b.dir = function (d) {
	alert('b.dir')
	var b = this
	if (U(d)) {
		return b._dir
	}
	b._dir = d
	return b
}
f.ctDob = f.ctSprite = f.ctSp = function (sp) {
	$l('f.ctSp')
	var f = this
	sp.XY(f.pos().x, f.pos().y).rC()
	f.bS($Ct().A(sp))
	return this
}
w._ = function (fn) {
	Q(function () {
		fn(w)
	})
}
w.cen = w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
w.sun = function (x, y) {
	var w = this
	//djd.init?? joint
	x = N(x, 300)
	y = N(y, 150)
	return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
}
f.set = function (o) {
	if (!O(o)) {
		return false
	}
	var f = this
	if (D(o.d)) {
		f.d(o.d)
	}
	if (D(o.bo)) {
		f.bo(o.b)
	} else if (D(o.r)) {
		f.r(o.b)
	}
	if (D(o.fr)) {
		f.fr(o.f)
	}
	if (o.s) {
		f.sen(1)
	}
	if (D(o.k)) {
		f.K(o.k)
	}
	return f
}
f.bSQ = function (j) {
	var f = this
	Q(function () {
		//f.ctSp( Q.b(j) )
	})
	return f
}
w.ps = tw.pos
w.iGP = tw.ignore
w.th = w.thrust = function (c, x, y, r) {
	return this.D(N(x, 600), N(y, 500), c || 'b', N(r, 40)).cn('thrust')
}
b.p = b.play = function (a, b, c, d) {
	var bd = this
	if (O(bd.sp())) {
		bd.sp().p(a, b, c, d)
	}
	return bd
}
b.p = b.play = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().p(a, b, c, d)
	}
	return this
}
b.s = b.stop = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().s(a, b, c, d)
	}
	return this
}
//sprote
b.sp = function () {
	//!!!$l('b.sp')
	var b = this, g = G(arguments), ch
	if (b.gx && b.gx.children) {
		ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
		if (g.u) {
			return ch
		}
		if (g.F_) {
			_.e(ch, g.f);
			return this
		}
	}
}
b.s = b.stop = function (a, b, c, d) {
	if (O(this.sp())) {
		this.sp().s(a, b, c, d)
	}
	return this
}
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
POLLL = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	W()._(function (w) {
		w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'chicks'
		})
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
}
POLLB = function () {
	W()._(function (w) {
		v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		})
		w.D(450, 300).pol({
			v: v,
			c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('me')
		})
	})
}
WQ = function () {
	var g = G(arguments), o = F(g.t) ?
	{ob: g.f, fn0: g.s, fn: g.t} :
	{ob: g.f, fn: g.s}
	o.ob = o.ob || {}
	o.fn = o.fn || function (w) {
	}
	w = W(o.ob)
	if (o.fn0) {
		o.fn0(w)
	}
	Q(o.ob.I || _MF, function () {
		o.fn(w)
	})//
}
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy() {
		var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag()
	}
}
QU5 = MF = function () {
	W().C('r')
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(
				Q.b('me'),
				Q.b('guy')
		)
	})
}
QU5 = PEEP = PEEPHOLE = WIND = function () {
	W()._(function () {
		$.hdr().A($.h1('grahics winding')).A()
		bm = w.i.qB('chicks').X(470).drag()
		h = w.i.h()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
		bm.mask = h.same().X(470)
	})
}//B+
QU5 = MF = function () {
	W().C('r')
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(
				Q.b('me'),
				Q.b('guy')
		)
	})
}
STACK = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.D(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.D(310, 120, 't', 60, 60)
	w.D(320, 120, 't', 60, 60)
	w.D(340, 120, 't', 60, 60)
	w.D(350, 120, 't', 60, 60)
	w.D(370, 120, 't', 60, 60)
	w.D(380, 120, 't', 60, 60)
	w.D(550, 120, 't', 60, 60)
	w.D(570, 120, 't', 60, 60)
	w.D(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
}
MJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
	w.D(100, 200, 'y', 150, 100).K('imp')
	w.D(500, 400, 'y', 50, 100).K('imp')
	w.D(300, 400, 'r', 50, 50);
	w.D(800, 400, 'r', 50, 50);
	w.D(1200, 400, 'r', 50, 50);
	w.D(1600, 400, 'b', 100, 100).K('m')
	w.e$('imp', function () {
		this.B().I(0, -50)
	})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
grpx()
grad()
bmp()
function grpx() {
	BLOKUS = function () {
		W(0).Y();
		y.cn('thrust')
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	FG = FOREGROUND = function () {
		W(800, 500, 1200, 600)._(function () {
			w.p()
			w.y().tr()
			h = w.i.h(50, 200, '+')
			h.bf('chicks', function (h) {
				_h = h
				h.dc({r: 80}
						//, {r: 50, x: 100}, {r: 100, x: 400}
				)
			})
			w.I.h(200, 200, '+').bf('chicks').dc(100)
		})
	}
}
function grad() {
//just easel, no physics.. but uses grads! and only circles
	MICK = function () {
		W()
		// mick(500,200)
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		mick(100, 100, {y2: 10})
		mick(100, 200, {y2: 200})
		mick(100, 300, {x2: 100})
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
	}
	GRADADV = LAYEREDGRADS = GRADSHAPES = function () {
		$W([2000, 1000], {})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: vs, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: vs, c: 'y', C: 'y', l: 5, lf: 1})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
		w.s.h()
				.dc([50], [200, 0, 100], [100, 100, 100])
				.c({l: 20, C: 0, ls: 1})
				.dc([50], [200, 0, 100], [100, 100, 100])
		/* h.twL(
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
		 [{r:25}, 200],[{r:-25},400],[{r:0}, 200])
		 h.twL(
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
		 [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
		 )*/
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
		//tits()
		function tits() {
			_.t(8, function () {
				tit(R(200, 300), R(200, 100))
			})
			o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
			h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
			/*
			 _.evx(.1, function(){
			 o.r1++;o.r2++;o.x1--
			 h.rf(o).dc(100)})
			 //*/
			$h(500, 100).a2(s).rf('r', 'y',
					100, 100, 0,
					100, 100, 50
			).dc(50, 50, 100).drag()
			function tit(x, y) {
				w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
			}
		}
	}
}
function bmp() {
	POLYBM = TRAPAZOID = function () {
		W(500, 700, 600, 700)._(function () {
			w.p();
			w.y().tr()
			w.i.h(800, 100, '+')
					.bf('guy')
					.dc([80], [90, 0, 68])
			w.D(200, 300).pol({
				v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
				bf: 'guy'
			})
		})
		//wait... tim is hiding in upper right
	}
	CUBES = function () {
		W(500, 500, 600, 550)._(function () {
			w.p();
			w.y().tr()
			b = w.D(600, 300, 'r', 400, 300)
			h = w.bg.h().al(.5)
			h.bf('sun')
			h.rec({w: 400, h: 300})
			b.bS(h)
			w.bfR(600, 300, 'guy', 100, 100, 'X')
			w.bfR(300, 300, 'sun', 100, 100, 'z')
			w.bfR(300, 300, 'chicks', 100, 100)
		})
	}
	ARROWHEADS = function () {
		W(800, 500, 800, 550)._(function () {
			w.p();
			w.y().tr()
			//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
			w.D(550, 200).pol({
				c: 'o', C: 'z', l: 25,
				bf: 'chicks',
				v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
			})
			//h.bV //w.pol
			w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
			w.bg.Bm('me').sXY(6.2).X(500).al(.2)
			w.D(500, 400).pol({
				v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
				c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
			})
		})
	}
}
USINGLAYERSINEASEL = function () {
	Q(['me', 'guy'], function (q) {
		s = cjs.S()
		me = q.bm('me').a2(s).sXY(3)
		guy = q.bm('guy').a2(s).sXY(.5).drag()
		$.button('s.sXY(2)', function () {
			s.sXY(2)
		}).A()
		cjs.tick(function () {
			me.X(guy.x * 2.2 - 140)
			me.Y(guy.y * .2)
		})
	})
}
SHAPES = function () {
	z()
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
}
EASELART = function () {
	z()
	s = stage = cjs.stage(500, 600).A()
	s.can.P('a').XY(300)
	s.A(h = shape = cjs.shape())
	h.rect(100, 200, 0, 200, 'red')
			.rect(100, 100, 100, 20, 'green')
			.rect(145, 120, 10, 80, 'orange')
			.circ(105, 100, 20, 'blue')
			.circ(105, 100, 8, 'black')
			.circ(200, 100, 20, 'blue')
			.circ(200, 100, 8, 'black')
			.circ(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.tweenLoop(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.tweenLoop(
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
CENTERSHAPE = function () {
	z()
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
GRAPHICSTEST = function () {
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
RADIALGRADRECT = function () {
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
RADIALGRADCIRC = function () {
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
EASELCONVEX = function () {
	s = cjs.S()
	s.poly([[-100, -10], [0, 100], [100, 20]],
			'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly(
			[[-40, 40], [-40, -40], [40, -40], [40, 30]],
			'blue', 'white').XY(200, 200)
}
CONVEX = function () {
	w = b2d.W({grav: 0}).debug()
	b = w.dyn(300, 300)
	f = b.convex('green', [[0, 0], [0, -200], [100, 0]])
	b.convex('blue', [[0, 30], [-300, -20], [100, 0]])
	b.convex('pink', [[0, 0], [0, -20], [10, 0]],
			[[0, 30], [-30, -20], [10, 0]])
	b2 = w.dyn(300, 300)
	b2.convex('red', [[0, 0], [0, -20], [10, 0]])
	b2.convex([[0, 30], [-30, -20], [10, 0]])
	b3 = w.dyn(300, 300)
	b3.convex('green', [
		[-150, 0], [-120, -20], [-80, -50], [0, -30]
	])
	b3.convex('red',
			[[-30, -30], [-20, 10], [-10, 60]
			])
	b3.convex('orange',
			[[-30, -30], [-20, -50], [10, -20]
			])
	w.verts(300, 500,
			[
				['pink', [-20, -20], [0, -30], [10, 10]],
				['brown', [0, 0], [30, -50], [50, -10]]
			]
	)
	dot = function () {
		b.dot()
		f.dot()
	}
	//setTimeout(dot, 5000)
	//w.convex !!!!
	_.times(50, function () {
		w.circ(200, 30, 5)
	})
	b.fixedRot(true)
	cjs.tick(function () {
		b.linVel(0)
		b.angVel(0)
	})
}
VERTS = function () {
	w = b2d.W().debug()
	thingy = [['pink', [-20, -20], [0, -30], [10, 10]],
		['brown', [0, 0], [30, -50], [50, -10]]]
	_.times(100, function () {
		w.verts(Math.random() * 600, Math.random() * 300 + 200, thingy)
	})
}
PITFALL = function () {
	b2d.levelScrollX()
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	turtle2 = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	t = w.vertsKin(400, 280, turtle).fixedRot(true)
	t2 = w.vertsKin(700, 280, turtle2).fixedRot(true)
	setInterval(function () {
		t2.linVel(5, 0)
		setTimeout(function () {
			t2.linVel(-5, 0)
		}, 1000)
	}, 2000)
}
LINGRADBG = function () {
	w = b2d.W()
	s = w.s
	h = s.shape()
}
THREECANS = function () {
	c1 = $.can('a', 800, 400)
	c2 = $.can('X', 800, 400)
	c3 = $.can('X', 800, 400)
}
RADIANTBALLS = function () {
	s = cjs.S('a')
	b1 = s.cannonBall(100, 200)
	b2 = s.basketBall(100, 100)
	b3 = s.beachBall(50, 50)
	b3 = s.snowBall(50, 300)
}
DIRTYBALLS = function () {
	W({grav: 0})
	w.dirtyBall = function (x, y, stop1, stop2) {
		return this.gradBall(x, y, 60, 'z', 'w', stop1, stop2)
	}
	w.gradBall(200, 100, 60, 'z', 'w')
	w.dirtyBall(350, 100, 0, .9)
	w.gradBall(500, 100, 60, 'z', 'w', 0, .6)
	w.gradBall(650, 100, 60, 'z', 'w', 0, .3)
	w.gradBall(800, 100, 60, 'z', 'w', 0, .1)
	w.gradBall(350, 300, 60, 'z', 'w', .3, 1)
	w.dirtyBall(500, 300, .6, 1)
	w.dirtyBall(650, 300, .9, 1)
	w.dirtyBall(800, 300, 1, 1)
}
STATUSBALL = function () {
	W({grav: 0})
	b = w.D(500, 300, 'r', 60).bS(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num],
			0, 0, 0, 0, 0, 60)
			.dc(0, 0, 60)
	$.ev(.1, function () {
		num += dif
		if (num >= 1) {
			num = .9;
			dif = -.1
		}
		if (num <= 0) {
			dif = .1
		}
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
	})
}
SWITCHBALL = function () {
	W({g: 0})
	b = w.D(500, 300, 'r', 60)
	b.bS(
			w.s.h(500, 300)
	)
	b.draw = function (frame) {
		var b = this
		b.sp().rf(
				['r', 'y'], [frame[0], frame[1]],
				0, 0, 0, 0, 0, 60
		).dc(60)
	}
	frames = [
		[0, .1],
		[0, .3],
		[0, .6],
		[0, .9],
		[0, 1],
		[.3, 1],
		[.6, 1],
		[.9, 1],
		[1, 1]]
	curr = 0
	$.ev(1, function () {
		b.draw(frames [curr])
		curr++
		if (curr == 9) {
			curr = 0
		}
	})
}
HEALTHBALL = function () {
	W({g: 0})
	w.badGuy(500, 300)
}
SWITCHBALLWORKSBUTTOOCOMPLICATED = function () {
	w = b2d.W({grav: 0})
	advanceN = function (n, dif) {
		n += dif
		if (n >= 1) {
			n = .9;
			dif *= -1
		}
		if (n <= 0) {
			n = 0;
			dif *= -1
		}
		return {n: n, dif: dif}
	}
	switchBall1 = function (x, y) {
		var dif = .1, n1 = 0, n2 = 0,
				b = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		I(function () {
			n2 = advanceN(n2);
			drawGrad()
		}, 100)
		function drawGrad() {
			b.sprite.rG(['r', 'y'], [n1, n2], 60).dc(0, 0, 60)
		}
		
		function advanceN(n2) {
			n2 += dif
			if (n2 >= 1) {
				n2 = .9;
				dif *= -1
			}
			if (n2 <= 0) {
				n2 = 0;
				dif *= -1
			}
			;
			return n2
		}
	}
	switchBall2 = function (x, y) {
		var ball = w.ball(x, y, 60).bindSprite2(w.s.shape(x, y))
		ball.drawGrad = function (n1, n2) {
			return this.sprite.rG(['r', 'y'],
					[n1, n2], 60).dc(0, 0, 60)
		}
		ball.animGrad1 = function () {
			var that = this,
					dif = .1, n2 = 1, n1 = 0
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1, n2)
					},
					300)
		}
		ball.animGrad2 = function () {
			var that = this, dif = .1
			I(function () {
						var res = advanceN(n1, dif)
						dif = res.dif
						n1 = res.n
						that.drawGrad(n1)
					},
					300)
		}
		ball.animGrad1()
	}
	switchBall1(100, 100)
	switchBall2(300, 100)
	w.s.back.linGrad('u', 'p')
	w.s.HUD.bm('me', function (bm) {
		me = bm.sXY(.3).XY(1150, 550).drag()
	})
}
TRIPLESTAGE = function () {
	w = b2d.W({grav: 0})
	b = w.ball(500, 300, 60)
	b.bindSprite2(w.s.shape(500, 300))
	num = 0
	dif = .1
	shape = b.sprite
	shape.rG(['r', 'y'], [0, num], 60)
			.dc(0, 0, 60)
	w.s.HUD.bm('me', function (b) {
		b.XY(300).drag()
	})
	w.s.back.bm('guy', function (b) {
		b.XY(200).drag()
	})
	w.s.back.linGrad('b', 'z')
}
RADIANT = function () {
	W().P()
	p.lD(1).warp()
	$.space(
			function () {
				p.polyBul()
			}
	)
	badGuy = w.badGuy(
			400, 200).warp().den(.1)
	$.ev(.2, function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	})
}
function box() {
	MES = function () {
		W([], {w: 0})// what took me so long to make this?
		w.C('y')
		w.me(600, 300, 14)//.stat()
		w.l('z', 600, 0, 600, 600)
		_.ev(1, function () {
			w.me(R(1000, 100), R(-100))
		})
	}//D
}
NEWS = function () {
	$W();
	b = w.S(600, 300, 'w', 200);
	_.in(function () {
		b.dyn().f().C('z')
	})
	//three ways to make a new stage
	s = $St('r', 100).A().bm('me')
	s.can.drag()
	c = $.c('b', 100).A().drag().XY(400)
	s1 = $St(c)
	s1.A().bm('me')
	c2 = $.c('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = $St(['someId'])
	s2.t().bm('me')
	_.in(3, function () {
		w.S(300, 100, 'z', 1500, 1)
		w.d('r', 300, 100)
		w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
		w.i.T('bottom').XY(500, 100).bl('-')
		w.i.T('middle').XY(700, 100)
		w.dot(300, 400)
	})
	_.in(5, function () {
		nice = w.i.T('nice', 135, 'x', 300, 400)
		/*
		 w.i.T('linewidth 0').XY(100,300).lW(0)
		 w.i.T('linewidth null').XY(100, 500).bl('bottom')
		 w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
		 w.i.T('lineheight -100').XY(700,300).lH(-100)
		 w.i.T('lineheight 0').XY(700,500).lH(0)
		 w.i.T('lineheight 100').XY(700,700).lH(100)
		 w.i.T('linealign left').XY(600, 100)
		 w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
		 w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
		 */
		hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
		w.show('hello')
	})
}
//display object:
SHD = SDW = SHADOW = function () {
	b2d.levelWarp()
	p.linDamp(1).warp()
	setTimeout(function () {
		p.sprite.shad("y", 0, 150, 300)
		badGuy.sprite.shad('o', 40, 40, 40)
	}, 100)
	$.space(function () {
		p.polyBul()
	})
	badGuy = w.badGuy(400, 200).warp().den(.1)
	I(function () {
		w.s.pen('badGuy health: ' + badGuy.health)
	}, 200)
	$(w.s.back.canvas).C('p')
	s = w.s.back
	s.bm('me', function (bm) {
		bm.drag().shad('blue', 125, 125, 50).XY(100, 100).sXY(.6)
	})
	s.bm('guy', function (bm) {
		bm.drag().shad('r', 100, 100, 10).XY(300, 200).sXY(.6)
	})
	s.bm('me', function (bm) {
		bm.drag().shad("z", 25, 25, 50).XY(500, 100).sXY(.6)
	})
}
CIRS8 = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
VERTS = function () {
	w = b2d.W().debug()
	thingy = [['pink', [-20, -20], [0, -30], [10, 10]],
		['brown', [0, 0], [30, -50], [50, -10]]]
	_.times(100, function () {
		w.verts(Math.random() * 600, Math.random() * 300 + 200, thingy)
	})
}
PITFALL = function () {
	b2d.levelScrollX()
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	turtle2 = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	t = w.vertsKin(400, 280, turtle).fixedRot(true)
	t2 = w.vertsKin(700, 280, turtle2).fixedRot(true)
	setInterval(function () {
		t2.linVel(5, 0)
		setTimeout(function () {
			t2.linVel(-5, 0)
		}, 1000)
	}, 2000)
}
LINGRADBG = function () {
	w = b2d.W()
	s = w.s
	h = s.shape()
}
CONVEX = function () {
	w = b2d.W({grav: 0}).debug()
	b = w.dyn(300, 300)
	f = b.convex('green', [[0, 0], [0, -200], [100, 0]])
	b.convex('blue', [[0, 30], [-300, -20], [100, 0]])
	b.convex('pink', [[0, 0], [0, -20], [10, 0]],
			[[0, 30], [-30, -20], [10, 0]])
	b2 = w.dyn(300, 300)
	b2.convex('red', [[0, 0], [0, -20], [10, 0]])
	b2.convex([[0, 30], [-30, -20], [10, 0]])
	b3 = w.dyn(300, 300)
	b3.convex('green', [
		[-150, 0], [-120, -20], [-80, -50], [0, -30]
	])
	b3.convex('red',
			[[-30, -30], [-20, 10], [-10, 60]
			])
	b3.convex('orange',
			[[-30, -30], [-20, -50], [10, -20]
			])
	w.verts(300, 500,
			[
				['pink', [-20, -20], [0, -30], [10, 10]],
				['brown', [0, 0], [30, -50], [50, -10]]
			]
	)
	dot = function () {
		b.dot()
		f.dot()
	}
	//setTimeout(dot, 5000)
	//w.convex !!!!
	_.times(50, function () {
		w.circ(200, 30, 5)
	})
	b.fixedRot(true)
	cjs.tick(function () {
		b.linVel(0)
		b.angVel(0)
	})
} 