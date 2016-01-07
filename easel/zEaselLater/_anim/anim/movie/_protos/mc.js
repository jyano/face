mc = cjs.MovieClip.prototype
mc.play = mc.p = function (a, b) {
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
mc.lb = function () {
	return this.getLabels()
}
mc.cL = function () {
	return this.getCurrentLabel()
}
mc.start = mc.startPos = mc.sP = function (a) {
	if (U(a)) {
		return this.startPosition
	}
	;
	this.startPosition = a;
	return this
}
mc.mo = function (a) {
	if (U(a)) {
		return this.mode
	}
	this.mode = a;
	return tthis
}
mc.lp = function (a) { //loop
	if (U(a)) {
		return this.loop
	}
	this.loop = a
	return this
}
mc.auto = mc.aR = function (auto) {
	if (U(auto)) {
		return this.autoReset
	}
	this.autoReset = auto
	return this
}
mc.actions = mc.aE = function (enabled) {
	if (U(enabled)) {
		return this.actionsEnabled
	}
	this.actionsEnabled = enabled
	return this
}
mc.tl = function () {
	this.timeline.addTween.apply(this.timeline, arguments)
	return this
}

function ditto(){
	mc.auto = mc.aR = function (auto) {
		if (U(auto)) {
			return this.autoReset
		}
		this.autoReset = auto
		return this
	}
	mc.actions = mc.aE = function (enabled) {
		if (U(enabled)) {
			return this.actionsEnabled
		}
		this.actionsEnabled = enabled
		return this
	}
	mc.start = mc.startPos = mc.sP = function (a) {
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
	mc.s = mc.stop = function (a, b) {
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
	mc.lb = function () {
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
}
function ditto(){
	mc.play = mc.p = function (a, b) {
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
	mc.lb = function () {
		return this.getLabels()
	}
	mc.cL = function () {
		return this.getCurrentLabel()
	}
	mc.start = mc.startPos = mc.sP = function (a) {
		if (U(a)) {
			return this.startPosition
		}
		;
		this.startPosition = a;
		return this
	}
	mc.mo = function (a) {
		if (U(a)) {
			return this.mode
		}
		this.mode = a;
		return tthis
	}
	mc.lp = function (a) { //loop
		if (U(a)) {
			return this.loop
		}
		this.loop = a
		return this
	}
	mc.auto = mc.aR = function (auto) {
		if (U(auto)) {
			return this.autoReset
		}
		this.autoReset = auto
		return this
	}
	mc.actions = mc.aE = function (enabled) {
		if (U(enabled)) {
			return this.actionsEnabled
		}
		this.actionsEnabled = enabled
		return this
	}}
	function ditto(){
		mc = cjs.MovieClip.prototype
		mc.play = mc.p = function (a, b) {
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
		mc.lb = function () {
			return this.getLabels()
		}
		mc.cL = function () {
			return this.getCurrentLabel()
		}
		mc.start = mc.startPos = mc.sP = function (a) {
			if (U(a)) {
				return this.startPosition
			}
			;
			this.startPosition = a;
			return this
		}
		mc.mo = function (a) {
			if (U(a)) {
				return this.mode
			}
			this.mode = a;
			return tthis
		}
		mc.lp = function (a) { //loop
			if (U(a)) {
				return this.loop
			}
			this.loop = a
			return this
		}
		mc.auto = mc.aR = function (auto) {
			if (U(auto)) {
				return this.autoReset
			}
			this.autoReset = auto
			return this
		}
		mc.actions = mc.aE = function (enabled) {
			if (U(enabled)) {
				return this.actionsEnabled
			}
			this.actionsEnabled = enabled
			return this
		}
		mc.tl = function () {
			this.timeline.addTween.apply(this.timeline, arguments)
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
mc.actions = mc.aE = function (enabled) {
	if (U(enabled)) {
		return this.actionsEnabled
	}
	this.actionsEnabled = enabled
	return this
}
mc.start = mc.startPos = mc.sP = function (a) {
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
mc.s = mc.stop = function (a, b) {
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
mc.lb = function () {
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