mc = cjs.MovieClip.prototype
cjs.Mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
cjs.Mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
cjs.mc = function (a, b, c, d) {
    var mc = new cjs.MovieClip(a, b, c, d)
    return mc
}
cjs.mc=function(a,b,c,d){
    var mc = new cjs.MovieClip(a,b,c,d)
    return mc}
cjs.Mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
cjs.Mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
cjs.tl = cjs.Tl = function (args) {
	var tl = new cjs.Timeline()
	if (A(args)) {
		tl.add(args)
	}
	return tl
}
//
cjs.tl = function (args) {
	var tl = new cjs.Timeline()
	if (A(args)) {
		tl.add(args)
	}
	return tl
}//
cjs.tl = function (args) {
	var tl = new cjs.Timeline()
	if (A(args)) {
		tl.add(args)
	}
	return tl
}
cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
//
cjs.tl = function (args) {
	var tl = new cjs.Timeline()
	if (A(args)) {
		tl.add(args)
	}
	return tl
}
cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
//
cjs.mc = function (a, b, c, d) {
	var mc = new cjs.MovieClip(a, b, c, d)
	return mc
}
$S.styCan = {canvas: {outline: 'red 10px dashed'}}
cjs.C = cjs.Container
cjs.DO = cjs.DisplayObject
dO = cjs.DO.prototype
cjs.DO.prototype.sTf = cjs.DO.prototype.setTransform
dO.nW = function () {
	return this.nominalBounds.width
}
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
function timeline() {
	mc.tl = function () {
		this.timeline.addTween.apply(this.timeline, arguments)
		return this
	}
	mc.tl = function () {
		this.timeline.addTween.apply(this.timeline, arguments)
		return this
	}
	mc = cjs.MovieClip.prototype
	mc.tl = function () {
		this.timeline.addTween.apply(this.timeline, arguments)
		return this
	}
	mc.tl = function () {
		this.timeline.addTween.apply(this.timeline, arguments)
		return this
	}
	mc.tl = function () {
		this.timeline.addTween.apply(this.timeline, arguments)
		return this
	}
	tl = cjs.Timeline.prototype
	tl.remove = tl.rm = function (a) {
		this.removeTween(a);
		return this
	}
	tl.currentLabel = tl.cL = function () {
		return this.getCurrentLabel()
	}
	tl.labels = tl.lb = function (a) {
		var t = this;
		if (U(a)) {
			return this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}
	tl.add = function (tw) {
		var that = this
		this.addTween.apply(this, arguments)
		return this
	}
	function ditto() {
		tl = cjs.Timeline.prototype
		tl.A = tl.add = function (tw) {
			var tl = this
			if (A(tw)) {
				_.e(tw, function (tw) {
					tl.A(tw)
				})
				return tl
			}
			this.addTween.apply(this, arguments)
			return this
		}
		tl.remove = tl.xTw = tl.rm = function (tw) {
			this.removeTween(tw);
			return this
		}
		tl.currentLabel = tl.cL = function () {
			return this.getCurrentLabel()
		}
		tl.labels = tl.lb = function (a) {
			var t = this;
			if (U(a)) {
				return this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
		tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
			var g = G(arguments)
			if (U(a)) {
				return g.n ? this.getCurrentLabel() : this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
	}
	
	function ditto() {
		tl = cjs.Timeline.prototype
		tl.remove = tl.rm = function (a) {
			this.removeTween(a);
			return this
		}
		tl.currentLabel = tl.cL = function () {
			return this.getCurrentLabel()
		}
		tl.labels = tl.lb = function (a) {
			var t = this;
			if (U(a)) {
				return this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
		tl.add = function (tw) {
			var that = this
			this.addTween.apply(this, arguments)
			return this
		}
	}
	
	tl = cjs.Timeline.prototype
	tl.remove = tl.rm = function (a) {
		this.removeTween(a);
		return this
	}
	tl.currentLabel = tl.cL = function () {
		return this.getCurrentLabel()
	}
	tl.labels = tl.lb = function (a) {
		var t = this;
		if (U(a)) {
			return this.getLabels()
		}
		if (O(a)) {
			this.setLabels(a);
			return this
		}
		if (N(a) || S(a)) {
			return resolve(a)
		}
		return this
	}
	tl.add = function (tw) {
		var that = this
		this.addTween.apply(this, arguments)
		return this
	}
	function timeline() {
		cjs.tl = cjs.Tl = function (args) {
			var tl = new cjs.Timeline()
			if (A(args)) {
				tl.add(args)
			}
			return tl
		}
		tl = cjs.Timeline.prototype
		tl.A = tl.add = function (tw) {
			var tl = this
			if (A(tw)) {
				_.e(tw, function (tw) {
					tl.A(tw)
				})
				return tl
			}
			this.addTween.apply(this, arguments)
			return this
		}
		tl.remove = tl.xTw = tl.rm = function (tw) {
			this.removeTween(tw);
			return this
		}
		tl.currentLabel = tl.cL = function () {
			return this.getCurrentLabel()
		}
		tl.labels = tl.lb = function (a) {
			var t = this;
			if (U(a)) {
				return this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
		tl.lb = tl.labels = tl.cL = tl.currentLabel = function (a) {
			var g = G(arguments)
			if (U(a)) {
				return g.n ? this.getCurrentLabel() : this.getLabels()
			}
			if (O(a)) {
				this.setLabels(a);
				return this
			}
			if (N(a) || S(a)) {
				return resolve(a)
			}
			return this
		}
	}
} 
timeline()