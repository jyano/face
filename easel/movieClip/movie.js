$L('mcProto')
cjs.Mc = cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
 
 mc.startPos = mc.sP = mc.start = function (a) {
	if (U(a)) {
		return this.startPosition
	}
	;
	this.startPosition = a;
	return this
} 
mc.p = mc.play = function (a, b) {
	if (this.setPaused) {
		this.setPaused(false)
	} else {
		this.play()
	}
	if (D(b)) {
		if (this.gotoAndPlay) {
			this.gotoAndPlay(a)
		}
		if (this.setPosition) {
			this.setPosition(a, b)
		}
		return this
	}
} 
mc.stop = mc.s = function (a, b) {
	if (D(b)) {
		if (this.gotoAndStop) {
			this.gotoAndStop(a)
		}
		if (this.setPosition) {
			this.setPosition(a, b)
		}
		return this
	}
}  
mc.auto = mc.aR = function (auto) {
	if (U(auto)) {
		return this.autoReset
	}
	this.autoReset = auto
	return this
}
mc.aE = mc.actions = function (enabled) {
	if (U(enabled)) {
		return this.actionsEnabled
	}
	this.actionsEnabled = enabled
	return this
}
mc.mo = mc.__ = function (a) {
	if (U(a)) {
		return this.mode
	}
	this.mode = a;
	return this
}

mc.cL = function () {
	return this.getCurrentLabel()
}
mc.lb = function () {//return this.getLabels()
	var g = G(arguments)
	return g.p ?
			this.getCurrentLabel() :
			this.getLabels()
			
} 
mc.lp = function (a) { //loop
	if (U(a)) {
		return this.loop
	}
	this.loop = a
	return this
}
mc.aR = mc.auto = function (auto) {
	if (U(auto)) {
		return this.autoReset
	}
	this.autoReset = auto
	return this
}
mc.aE = function (en) {
	if (U(en)) {
		return this.actionsEnabled
	}
	this.actionsEnabled = en
	return this
} 
function _pre() {
	cjs.C = cjs.Container
	cjs.DO = cjs.DisplayObject
	dO = cjs.DO.prototype
	mc = cjs.MovieClip.prototype
} 