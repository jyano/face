sS =  cjs.SpriteSheet.prototype

 
//methods
sS.cl=function(){return this.clone.apply(this, arguments)}
sS.an = sS.anim = sS.getAn = sS.getAnim= function () {
	return this.getAnimation.apply(this, arguments)
}
sS.fr= sS.getFr= function () {
	return this.getFrame.apply(this, arguments)
}
sS.frBd = sS.frBds = sS.getFrBd = sS.getFrBds = function () {
	return this.getFrameBounds.apply(this, arguments)
}
sS.numFr = function () {
	return this.getNumFrames.apply(this, arguments)
}
//Properties
sS.ans = sS.anims = function(){return this.animations}
sS.iC = function () {
	return this.complete
}
sS.fR =sS.rate= sS.r= function (rate) {
var sS=this
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
sS.oRd= sS.load=sS.oC= sS.complete=function(fn){var sS=this
	sS.on('complete', fn)
	return sS
}
sS.gf= sS.oFr = sS.oGFr= sS.oGF = function (fn) {
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