cjs.SS = cjs.SpriteSheet
sS = cjs.SS.prototype
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
cjs.iSS = function (sp) {
	return O(sp) && F(sp.toString) && sp.toString().indexOf('SpriteSheet') != -1
}
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