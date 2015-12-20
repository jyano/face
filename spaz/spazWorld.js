function spazWorld() {
	function room() {
		w.BG = w.I = $St('z', w.W, w.H, 0, 0)
		w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
		w.cv = w.canvas = w.st.canvas;
		w.$cv = w.can = $(w.canvas);
		w.cx = w.ctx = w.can.ctx('2d')
		w.bg = w.st.ct();
		w.gx = w.g = w.st.ct();
		w.fg = w.st.ct()
		w.FG = w.i = $St('X', w.W, w.H, 0, 0)
		if (o.i) {
			w.s.bm(o.i)
		}
		w.lG($r())
		if (o.aC == 1) {
			//w.i.aC(0)
			// if(g.O){; return w}
			// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
		}
		w.walls(_w)
	}
	
	function trackee() {
		w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
		w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
		T.t(track)
		NOT = NOTRACKEE = function () {
			W({t: 0})
		}
	}
	
	function track() {
		if (F(w.t.cb)) {
			w.t.cb()
		} else if (F(w.tCb)) {
			w.tCb()
		}
		w.st.x = -w.sXCap(w.t.X() * w.z - w.hW)
		w.st.y = -w.sYCap(w.t.Y() * w.z - w.hH)
		if (w.t == w._t) {
			w.t.XY(w.tSpr.X(), w.tSpr.Y());
			w.s.rt(w.tSpr.rt())
		}
	}
	
	function dimensions() {
		//half width/height nobiggie..
		w.W2 = w.HW = w.hW = w.W / 2;
		w.H2 = w.HH = w.hH = w.H / 2;
		w.hH = w.h / w.H;
		w.Ww = w.W / w.w;
		w.wW = w.w / w.W;
		w.Hh = w.H / w.h;
		w.mZ = w.hH > w.wW ? w.hH : w.wW;
		w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
		//scale
		w.z = w.SCALE = 1
	}
	
	function room() {
		w.BG = w.I = $St('z', w.W, w.H, 0, 0)
		w.st = w.s = $St('X', w.W, w.H, 0, 0)//.aC(0)
		w.cv = w.canvas = w.st.canvas;
		w.$cv = w.can = $(w.canvas);
		w.cx = w.ctx = w.can.ctx('2d')
		w.bg = w.st.ct();
		w.gx = w.g = w.st.ct();
		w.fg = w.st.ct()
		w.FG = w.i = $St('X', w.W, w.H, 0, 0)
		if (o.i) {
			w.s.bm(o.i)
		}
		w.lG($r())
		if (o.aC == 1) {
			//w.i.aC(0)
			// if(g.O){; return w}
			// return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
		}
		w.walls(_w)
	}
}
easel = function () {
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
	b.dot = function (col) {//b.dot() // dots the center of mass, not xy ??!!!
		var b = this,
				s = b.stg(),
				g = G(arguments)
		col = oO('c', g[0] || 'y')
		if (g.p) {
			s.dot(col, b.cent())
		}
		else {
			s.dot(col, b.X(), b.Y())
		}
		return this
	}
//move to x-middle of stage
	b.horizCenter = function () {
		return this.X(this.wor().s.W() / 2)
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
	b.bindSprite2 = function (obj, startingRotation, x, y) {
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
};
player = function () {
	b.moveInCircle = function (rad, speed) {
		var g = G(arguments), rad = N(g[0]) ? g[0] : 100,
				speed = N(g[1]) ? g[1] : 2,
				toRad = Math.toRadians, cos = Math.cos, sin = Math.sin,
				b = this,
				ang = 0,
				x = b.X(),
				y = b.Y(),
				bX,
				bY
		cjs.tick(function () {
			ang += toRad(speed)
			bX = rad * cos(ang)
			bY = rad * sin(ang)
			if (g.p) {
				bY *= 2
			}
			if (g.n) {
				bX *= 2
			}
			b.XY(bX + x, bY + y)
		})
		return this
	}
//b.relPos=function(){return this.X() + this.stg().X()}
	b.byI = b.byImp = function (i) {
		var k = cjs.Keys
		if (k.right) {
			this.I(i, 0)
		}
		else if (k.left) {
			this.I(-i, 0)
		}
		return this
	}
	b.byV = b.byVel = function (v) {
		var k = cjs.Keys
		if (k.right) {
			p.lV(v, 0)
		}
		else if (k.left) {
			p.lV(-v, 0)
		}
		return this
	}
//move towards x,y (or body?)
	b.towards = function (x, y, speed) {  //if(isBody(x)){return self(x.X(), x.Y(), y)}
		speed = !N(speed) ? 5 : speed > 10 ? 10 : speed
		speed = (11 - speed) * 20
		var b = this,
				lV = V(
						x - b.X(),
						y - b.Y()
				).div(speed)
		return this.lV(lV)
		//more realistic to accelerate, via forces?
	}
	TOWARDS = function () {
		w = b2d.W({g: 0})
		b = w.B(500, 300, 100)
		y = w.ship()
		cjs.tick(function () {
			b.towards(y.X(), y.Y(), 9)
		})
	}
	b.marioJumping = function () {
		var p = this, k = cjs.Keys
		p.fixRot().trig('feet')
		cjs.tick(function () {
			if (p.trig.feet && k.up) {
				if (k.right) {
					p.lV(20, -60)
				}
				else if (k.left) {
					p.lV(-20, -60)
				}
				else {
					p.lV(0, -80)
				}
			}
			if (k.right) {
				p.lV(40, -10)
			} else if (k.left) {
				p.lV(-40, 10)
			}
			if (k.down) {
				p.trig.feet = 'true'
				p.I(0, 20)
			}
		})
		return this
	}
	b.jumping = function (y, x) {
		var k = cjs.Keys
		if (k.up) {
			if (k.right) {
				this.lV(x, -(y - x))
			}
			else if (k.left) {
				this.lV(-x, -(y - x))
			}
			else {
				this.lV(0, -y)
			}
		}
		return this
	}
	b.polyBul = function () {
		var vec = this.GetWorldVector(V(0, -100)),
				point = this.worldPoint(0, -50)
		bullet = this.W()
				.polyBul(point.x, point.y, 4, 4, 'w')
				.den(1)
				.lD(0)
				.lV(vec.div(5))
		w.end(function (cx) {
			cx.destroyIf('polyBul')
		})
		return bullet.K('polyBul')
	}
	b.thrustify = function () {
		var p = this //takes a spritebox!//uses cjs.watchKeys()
		this.angDamp(.5)
		cjs.Keys({
			l: function () {
				p.rot(8, '-')
			},
			r: function () {
				p.rot(8, '+')
			},
			d: function () {
				p.I().p('thrust')
			},
			u: function () {
				p.p('shoot')
			}
		})
		return this
	}
	b.thrustControl = function () {
		var body = this
		cjs.tick(function () {
			b2d.controls.thrust(body)
		})
		return body
	}
	b.shoot = function () {
		var vec, bullet
		bullet = this.wor().bullet(abovePlayerGlobally(this)).bindSprite('me', 0.15)
		vec = this.GetWorldVector(V(0, -100))
		bullet.I(vec.div(20))
	}
	b.bindKeyboard = function (cont) { //p.moveListener=
		var that = this
		control = (b2d.controls[cont] || b2d.controls.trickJump )
		control()
		cjs.tick(function () {
			that.rot(0)
			that.world().each(
					function (body) {
						if (body.is('destroy')) {
							body.destroy()
						}
					}
			)
		})
	}  //b.warpToTopLeft=function(){ return this.XY(200, 100)}
	b.controlMe = function (control) {
		var that = this
		cjs.tick(function () {
			b2d.controls[control || 'standard'](that)
		})
		return this
	}
	b.marioWarping = function () {
		var p = this
		cjs.tick(function () {
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
	b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
		var body = this
		var listener = b2d.listener()
				.begin(function (cx) {
					var bod
					if (fixt = cx.with('feet')) {
						fixt.gB().trig.onGround = true
					}
				})
				.end(function (cx) {
					if (cx.with('feet')) {
						body.trig.onGround = false
					}
				})
		this.GetWorld().listen(listener)
		return this
	}//b.feetListener =function(){return this.listener('feet')}
	b.warp = b.warp2 = function (p) {
		var p = this
		cjs.tick(function () {
			if (p.Y() < 0) {
				p.Y(600)
			}
			if (p.Y() > 600) {
				p.Y(0)
			}
			if (p.X() < 0) {
				p.X(1200)
			}
			if (p.X() > 1200) {
				p.X(0)
			}
		})
		return this
	}
	b.mario = function () {
		var b = this
		b.canJump = true
		b.onGround = false
		b.fixRot()
		cjs.tick(function () {
			var k = cjs.Keys
			if (b.onGround) {// if on ground
				if (k.up) {// if jumping
					if (b.canJump == true) {
						b.p('jump').I(0, -44);
						b.canJump = false
					}
				}
				else { // if not jumping
					if (k.left) {
						b.I(-20, 0)
					} // p.dir(0)
					if (k.right) {
						b.I(20, 0)
					}
				}
			} //p.dir(1)
			else {// if in air !!!
				if (k.left) {
					b.dir(0);
					b.I(-1, 0)
				}
				if (k.right) {
					b.dir(1);
					b.I(1, 0)
				}
			}
		})
		b.wor().beg(function () {  // ???
			b.canJump = true
			b.p('walk')
		})
		return this
	}
	b.arrowMove = function () {
		var body = this
		$.key({
			l: function () {
				body.dir('left').move()
			},
			r: function () {
				body.dir('right').move()
			},
			u: function () {
				if (body.dir() == 'left') {
					body.I(5, -12)
				}
				else if (body.dir() == 'right') {
					body.I(-5, -12)
				}
			}
		})
		return this
	}
	b.diff = b.dif = function (x, y) { // compare with DIF  - achtung!
		return {
			x: x - this.X(),
			y: y - this.Y()
		}
	}
	b.cam = function (x, y) {
		this.stg().XY(this.diff(x, y))
		return this
	}
	b.follow = function (x, y) {
		var b = this
		cjs.tick(function () {
			if (O(b.sprite)) {
				b.cam(x, y)
			}
		})
		return this
	}
};
function create() {
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
}
function spazWalls() {
	w.bindShape = function (shape, spr) {
		this.stage.A(shape)
		cjs.tick(
				function () {
					shape.XY(spr.X(), spr.Y())
				}
		)
	}
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
	w.rWx = function (col, h) {
		var w = this
		if (!S(col)) {
			h = col;
			col = 'b'
		}
		h = N(h) ? h : w.H()
		return w.S(10, w.H() - (h), col, 20, h)
	}
	w.bWx = function (col, W) {
		var w = this
		if (!S(col)) {
			W = col;
			col = 'b'
		}
		W = N(W) ? W : w.W()
		return w.S((W / 2), w.H() + (h / 2) - 10, col, W, 20)
	}
	w.hWx = function (col, W, x, y) {
		var w = this, g = G(arguments), cW = w.canvas.width, cH = w.canvas.height
		if (!S(col)) {
			y = x;
			x = W;
			W = col;
			col = 'x'
		}
		if (U(y)) {
			y = x;
			x = null
		}
		W = (W == '+') ? cW : N(W) ? W : cW / 3
		x = N(x) ? x : cW / 2 - W / 2
		y = (y == '+') ? cH - 10 : (y == '-') ? 10 : N(y) ? y : cH / 2
		y -= 10
		return w.R(col, W, 20, x, y).bo(.2).K('wall')     //default bo?
	}
	w.boxWallsx = w.xWx = function (col, W, h) {
		var w = this
		if (!S(col)) {
			h = W;
			W = col;
			col = 'o'
		}
		W = N(W) ? W : w.W()
		h = N(h) ? h : w.H()
		w.floor = w.R(col, W, 20, 0, h - 20)
		w.right = w.R(col, 20, h, W - 20, 0)
		w.roof = w.R(col, W, 20, 0, 0)
		w.left = w.R(col, 20, h, 0, 0)
		w.w = W
		w.h = h            // if(g.N){ w.camLims(  0,  w.w-w.s.W(),  0, w.h-w.s.H())}
		return w
	}
	w.bodyX = w.AX = function (bD, fD) {
		var w = this, b
		if (b2d.isBDef(bD)) {
			b = w.CreateBody(bD)
		}
		if (fD) {
			b.fixt(fD)
		}
		//b.den(1)
		return b
	}
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
w.D = function () {
//   super star !
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
	function alt() {
		w.dyn = w.body = w.A = function (x, y, fD) {
			var w = this, b, bd
			//pass body def
			if (b2d.isBDef(x)) {
				bd = x;
				fD = y
			}
			//make body def
			else {
				if (O(x)) {
					fD = y;
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 500
				y = N(y) ? y : 250
				bd = b2d.dyn(x, y)
			}
			b = w.CreateBody(bd)
			// pass in one fixture or an ARRAY( of fixts )
			if (fD) {
				b.fixt(fD)
			}
			return b
		}
		w.B = function () {
			var w = this, g = G(arguments), o
			return g.u ? w.bd() :
					w.cB.apply(w, arguments)
		}
		w.B = w.D = function (x, y) {
			var w = this, bd, b, fixts,
					g = G(arguments),
					x = g[0],
					y = g[1], clas
			if (S(_.last(g))) {
				clas = g.pop()
			}
			if (N(x)) {
				bd = b2d.dyn(x, y);
				fixts = _.rest(g, 2)
			}
			else {
				if (b2d.isBDef(x)) {
					bd = x
				} else {
					x = V(x);
					bd = b2d.dyn(x.x, x.y)
				}
				fixts = _.rest(g)
			}
			b = w.CreateBody(bd)
			b.H.apply(b, fixts)
			if (clas) {
				b.K(clas)
			}
			return b
		}
	}
}
w.rect = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}