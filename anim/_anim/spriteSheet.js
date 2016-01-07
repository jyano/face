cjs.SS = cjs.SpriteSheet
cjs.Sp = cjs.Sprite
cjs.iSS = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('SpriteSheet') != -1
}
cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
cjs.toSS = function (sS) {
	if (U(sS)) {
		return
	}
	//call a spritesheet by name
	if (S(sS)) {
		sS = cjs._sp[sS]
	}
	//it if it is a sS literal, it makes it into a sS
	return sS.images || sS.i ? $SS(sS) : sS
}
sS = cjs.SpriteSheet.prototype
//methods
sS.cl = function () {
	return this.clone.apply(this, arguments)
}
sS.an = sS.anim = sS.getAn = sS.getAnim = function () {
	return this.getAnimation.apply(this, arguments)
}
sS.fr = sS.getFr = function () {
	return this.getFrame.apply(this, arguments)
}
sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
	return this.getFrameBounds.apply(this, arguments)
}
sS.numFr = function () {
	return this.getNumFrames.apply(this, arguments)
}
//Properties
sS.ans = sS.anims = function () {
	return this.animations
}
sS.iC = function () {
	return this.complete
}
sS.fR = sS.rate = sS.r = function (rate) {
	var sS = this
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
//Events
sS.oRd = sS.load = sS.oC = sS.complete = function (fn) {
	var sS = this
	sS.on('complete', fn)
	return sS
}
sS.gf = sS.oFr = sS.oGFr = sS.oGF = function (fn) {
	/*
	
	 'getframe' event:
	 Dispatched when getFrame is called with a valid frame index. This is primarily intended for use by SpriteSheetBuilder when doing on-demand rendering.
	 Event Payload:
	
	 index Number
	 The frame index.
	 frame Object
	 The frame object that getFrame will return.
	 */
	var sS = this
	sS.on('getframe', fn)
	return sS
}
//other:
sS.flp = sS.aF = sS.addFlipped = function (a, b, c) {
	var sS = this
	a = a || true
	b = b || false
	c = c || false
	$SSU.aFF(sS, a, b, c)
	return sS
}
_$SS = cjs._spriteSheet = _$spriteSheet = function (sS) {
	return new cjs.SS(sS)
}
$SS = cjs.spriteSheet = $spriteSheet = function (sS) {
	sS.images = sS.images || sS.i
	sS.animations = sS.animations || sS.a
	sS.frames = sS.frames || sS.f
	sS.framerate = sS.framerate || sS.r
	//fix source (needs a '/')
	//sS.images[ 0 ] = _.ensureSlash( sS.images[0] )
	//set next to false, on all anims
	// _.e(sS.animations, function(an){an.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return _$SS(sS)
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
cjs.parseZoe = function (sprObj) {
	
	
	//fix source (needs a '/')
	sprObj.images[0] = S.eL(sprObj.images[0])
	//set next to false, on all anims
	//_.e(sprObj.animations, function(anim){anim.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return sprObj
}
cjs.zoeSp = cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {
	if (sS.images) {
		sS = cjs.parseZoe(sS)
		sS = $SS(sS)
	}
	return $Sp(sS)
}
cjs.sprite100 = function (a) {
	return cjs.zoeSp(a).rXY(50).al(.8)
}
$An = $Anim = function (frames, speed) {
	return {frames: frames, speed: N(speed, 1)}
}
$SSU = cjs.SSU = cjs.sSU = cjs.SpriteSheetUtils
$SSU.aFF = function () {
	/*
	 addFlippedFrames ( spriteSheet  horizontal  vertical  both ) deprecated static
	 Defined in addFlippedFrames:76
	 Deprecated: Modern browsers perform better when flipping via a transform (ex. scaleX=-1) rendering this obsolete.
	 This is an experimental method, and may be buggy. Please report issues.
	
	 Extends the existing sprite sheet by flipping the original frames horizontally, vertically, or both, and adding appropriate animation & frame data. The flipped animations will have a suffix added to their names (_h, _v, _hv as appropriate). Make sure the sprite sheet images are fully loaded before using this method. 
	
	 For example:
	 SpriteSheetUtils.addFlippedFrames(mySpriteSheet, true, true); The above would add frames that are flipped horizontally AND frames that are flipped vertically. 
	
	 Note that you can also flip any display object by setting its scaleX or scaleY to a negative value. On some browsers (especially those without hardware accelerated canvas) this can result in slightly degraded performance, which is why addFlippedFrames is available.
	 Parameters:
	
	 spriteSheet SpriteSheet
	 horizontal Boolean
	 If true, horizontally flipped frames will be added.
	 vertical Boolean
	 If true, vertically flipped frames will be added.
	 both Boolean
	 If true, frames that are flipped both horizontally and vertically will be added.
	
	 */
	$SSU.addFlippedFrames.apply($SSU, arguments)
}
$SSU.exFr = function () {
	/*
	
	 extractFrame ( spriteSheet  frameOrAnimation ) HTMLImageElement static
	 Defined in extractFrame:106
	 Returns a single frame of the specified sprite sheet as a new PNG image. An example of when this may be useful is to use a spritesheet frame as the source for a bitmap fill.
	 WARNING: In almost all cases it is better to display a single frame using a Sprite with a gotoAndStop call than it is to slice out a frame using this method and display it with a Bitmap instance. You can also crop an image using the Bitmap/sourceRect property of Bitmap.
	 The extractFrame method may cause cross-domain warnings since it accesses pixels directly on the canvas.
	 Parameters:
	
	 spriteSheet SpriteSheet
	 The SpriteSheet instance to extract a frame from.
	 frameOrAnimation Number | String
	 The frame number or animation name to extract. If an animation name is specified, only the first frame of the animation will be extracted.
	 Returns:
	
	 HTMLImageElement: a single frame of the specified sprite sheet as a new PNG image.
	 */
	return this.exactFrame.apply(this, arguments)
}
$SSU.mer = function () {
	/*
	
	
	 mergeAlpha ( rbgImage  alphaImage  canvas ) HTMLCanvasElement deprecated static
	 Defined in mergeAlpha:139
	 Deprecated: Tools such as ImageAlpha generally provide better results. This will be moved to sandbox in the future.
	 Merges the rgb channels of one image with the alpha channel of another. This can be used to combine a compressed JPEG image containing color data with a PNG32 monochromatic image containing alpha data. With certain types of images (those with detail that lend itself to JPEG compression) this can provide significant file size savings versus a single RGBA PNG32. This method is very fast (generally on the order of 1-2 ms to run).
	 Parameters:
	
	 rbgImage HTMLImageElement
	 The image (or canvas) containing the RGB channels to use.
	 alphaImage HTMLImageElement
	 The image (or canvas) containing the alpha channel to use.
	 canvas HTMLCanvasElement
	 Optional. If specified, this canvas will be used and returned. If not, a new canvas will be created.
	 Returns:
	
	 HTMLCanvasElement: A canvas with the combined image data. This can be used as a source for Bitmap or SpriteSheet.
	 */
	return this.merge.apply(this, arguments)
}
cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {
	var sSB = new cjs.SpriteSheetBuilder()
}
cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
	ssb = new createjs.SpriteSheetBuilder()
	if (mc) {
		ssb.A(mc)
	}
	return ssb
}
cjs.Sp = cjs.Sprite;
sp = cjs.Sp.prototype
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
sp.fr = sp.frame = sp.currentFrame = sp.cF = sp.cf = sp.cF = sp.cFr = sp.f = function (num) {
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