cjs.SS = cjs.SpriteSheet
cjs.Sp = cjs.Sprite

cjs.iSS = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('SpriteSheet') != -1
}
cjs.iSp = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('Sprite') != -1 && !cjs.iSS(sp)
}
cjs.toSS = function (sS) {
	
	if(U(sS)){return}
	//call a spritesheet by name
	if (S(sS)) {
		sS = cjs._sp[sS]
	}
	
	//it if it is a sS literal, it makes it into a sS
	return sS.images || sS.i ? $SS(sS) : sS
}


_$SS = cjs._spriteSheet = _$spriteSheet = function (sS) {
	return new cjs.SS(sS)
}

$SS=  cjs.spriteSheet = $spriteSheet = function (sS) {
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


_$Sp=function(sS,x,y){
	var sp =  new cjs.Sp(sS)
	sp.XY(N(x, 0), N(y, 0))
	return sp
}

$Sp = function (sS, x, y) {
	var sp = _$Sp(cjs.toSS(sS),x,y)
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
cjs.zoeSp =cjs.zoeSprite = cjs.sprite = $sprite = function (sS) {

	
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

 
 