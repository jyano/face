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
w.bH = w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	$t(
			function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}
w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	cjs.tick(function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}