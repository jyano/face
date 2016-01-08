cjs.Sp = cjs.Sprite;
sp = cjs.Sp.prototype
 
sp.adv = p.skip =  sp.av = sp.N = function (num) {
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
	if (anim) {if (U(nx)) {return anim.next}
		anim.next = nx}
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


//https://www.youtube.com/watch?v=HaJ615V6qLk