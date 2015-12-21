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
//animation play/stop
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
b.stg = function () {
	return this.W().stage
}
b.bindSprite2 = function (obj, startingRotation, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rt() + startingRotation
		})
	})
	return body
}
w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	cjs.tick(
			function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}
b.bS = b.bindSprite = function (img, scale, startingRotation) {
	var body = this, stage = body.GetWorld().stage
	//img is an image name
	//rotation is in degerees!
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y())
			bm.rotation = body.rot() + startingRotation
		}
	}, '-')
	return body
}
b.bS2 = b.bindSprite2 = function (obj, startingRotation, x, y) {
	
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
//sheets (sprite)
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
w.spB = w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.st)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.bH = w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	$t(
			function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}
w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.s)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
function sprit() {
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
//animation play/stop
 function kill(){
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
 }
function errWorld() {
	BOXSPRITE = BSP = function () {
		b2.mW({debug: false})
		meBall = function () {
			spr = meSprite().rCenter().sXY(.4).rXY(230, 260)
			b = b2.ball(400, 400, 40).bindSprite2(spr, 6)
		}
		meBall()
		w.box().bindSprite('guy')
		w.begin(function (cx) {
			if (cx.with('ball', 'box')) {
				spr.p('explode')
				setTimeout(function () {
					b.kill();
					meBall()
				}, 1000)
			}
		})
	}
}
function errCir() {
	CHANGE = CHG = function () {
		w = b2d.mW()
		b = w.ball().bindSprite('guy').kin()
		w.box(400, 100, 400, 100)
	}
	PHYSICSCIRCLE = PHC = function () {
		w = b2.mW()
		b = w.ball(300, 300, 50)
		c = cjs.circle(50).XY(300)
		b.bindSprite2(c)
		StatRectSprite = function (x, y, W, h, color) {
			x = x || 300;
			y = y || 100;
			W = W || 100;
			h = h || 50
			color = oO('c', color || 'green')
			this.b = this.body = w.box(x, y, W, h).stat()
			this.g = this.graphic = cjs.rect(W, h, color).XY(x, y).bindBody(this.body)
			w.s.A(this.g)
			return this
		}
		b.srs = b2.statRectSprite = statRectSprite = function (a, b, c, d, color) {
			return new StatRectSprite(a, b, c, d, color)
		}
		//w.debug(false)
		t = statRectSprite(400, 400, 400, 50, 'p');
		RT(t.graphic)
		u = statRectSprite(200, 400, 100, 200, 'p');
		SK(u.graphic)
		statCircSprite(400, 400, 80, 'pink')
	}
	BOXPACK = BXP = function () {
		w = b2d.mW({
			//debug:false
		})
		w.platform(500, 300, 200, 200)
		pack = function (anim) {
			anim = anim || 'f1'
			var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
			spr.gotoAndPlay(anim)
			return w.ball(Math.random() * 1000, Math.random() * 500, 40).bindSprite2(spr)
		}
		b = pack('f1')
		anims = _.keys(Pack.animations)
		//  _.each(  _.first( , 4) ,   function(anim){pack(anim)})
		// cjs.tick(function(){ b.rot(0) })
		change = function () {
			anim = anims[_.random(23)]
			$l('changed to ' + anim)
			b.sprite.gotoAndPlay(anim)
		}
		w.begin(function (cx) {
			if (cx.with('platform')) {
				change()
			}
		})
	}
	PACKE4 = PK4 = function () {
		w = b2d.mW({
			//debug:false,
			grav: 0
		})
		p = w.player('thrust')
		var spr = $sprite(Pack).rCenter().sXY(.4)//.XY( 200, 260 ).sXY(1.2).drag()
		spr.p('e4')
		b = w.bumper(
				Math.random() * 1000,
				Math.random() * 500, 45
		).bindSprite2(spr)
		// cjs.tick(function(){ b.rot(0) })
		w.begin(function (cx) {
			if (cx.with('bumper')) {
				p.I(1000, 1000)
			}
		})
	}
}
function dud() {
	EASELBO = EBO = function () {
		w = b2d.mW({
			//debug:false
		})
		b = w.brick(300, 300, 100, 100)
		r = cjs.rect(100, 100).XY(300, 300).drag()
		b.bindSprite2(r)
		//  w.s.A(r)
	}
}
function errRec() {
	EASELBO2 = EBB = function () {
		w = b2d.mW({
			grav: 3
			//,debug:false
		})
		p = w.player('standard')
		cjs.tick(function () {
			p.rot(0)
		})
		b = w.brick(300, 300, 300, 100)
		r = cjs.rect(300, 100).XY(300, 300).drag()
		w.s.A(r)
		cjs.tick(function () {
			b.X(r.X());
			b.Y(r.Y())
		})
		r.tweenLoop([{x: 500}, 1000], [{x: 300}, 1000])
		bb = w.brick(500, 500, 300, 100)
		rr = cjs.rectangle(300, 100).XY(500, 500).drag()
		w.s.A(rr)
		cjs.tick(function () {
			bb.X(rr.X());
			bb.Y(rr.Y())
		})
	}
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
	T.t(function () {
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
f.rmSp = function () {
	_.e(this.sprites || [], function (s) {
		cjs.rmOb(s)
	})
	this.sprites = []
	return this
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	this.rmSp()
	if (sp) {
		this.bS(sp)
	}
	return this
}
f.spritePush = function (j) {
	alert('spritePush')
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
f.ctDob = f.ctSprite = f.ctSp = function (sp) {
	$l('f.ctSp')
	var f = this
	sp.XY(f.pos().x, f.pos().y).rC()
	f.bS($Ct().A(sp))
	return this
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
w.sun = function (x, y) {
	var w = this
	//djd.init?? joint
	x = N(x, 300)
	y = N(y, 150)
	return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
}
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
CircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.ball(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
StatCircSprite = function (x, y, radius, color) {
	color = oO('c', color || 'orange')
	x = x || 300;
	y = y || 100;
	radius = radius || 80
	this.b = this.body = w.bumper(x, y, radius)
	this.g = this.graphic = cjs.circ(radius, color).XY(x, y).bindBody(this.body)
	w.s.A(this.g)
	return this.g
}
statCircSprite = function (x, y, r, col) {
	return new StatCircSprite(x, y, r, col)
}
circSprite = function (x, y, r, col) {
	return new CircSprite(x, y, r, col)
}
f.bS = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), o, sprite;
	f.sprites = f.sprites || []
	//higher level.. can handle obs and Q-strings
	if (S(g.f)) {
		return f.bSQ(g.f)
		// not alerted
	}
	o = cjs.iDO(g.f) ? {
		j: g.f, rt: g.s, x: g.t, y: g.fo, o: g.fi
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
f.rmSp = function () {
	var f = this
	f.sprites = f.sprites || []
	_.e(f.sprites, function (s) {
		cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
	})
	f.sprites = []
	return f
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	var f = this
	f.rmSp()
	if (sp) {
		f.bS(sp)
	}
	return f
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
f.spritePush = function (j) {
	alert('spritePush')
	this.sprites = this.sprites || []
	this.sprites.push(j)
	return this
}
w.pack = w.PackThruster = function (ani) {
	var th = w.th(600, 500, 'b', 100).C("X").r(1).fR()
	th.Sp(Pack, 0, 0, .8)
	return th.p(ani || 'f1')
}
f.ctDob = f.ctSprite = f.ctSp = function (sp) {
	$l('f.ctSp')
	var f = this
	sp.XY(f.pos().x, f.pos().y).rC()
	f.bS($Ct().A(sp))
	return this
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
w.sun = function (x, y) {
	var w = this
	//djd.init?? joint
	x = N(x, 300)
	y = N(y, 150)
	return w.S(300, 150, 20, 'p', 10).d(1).r(.5).bS('sun', .2)
}
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
