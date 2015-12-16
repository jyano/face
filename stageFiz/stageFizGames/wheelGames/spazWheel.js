w.addMe = function (scale) {return this.A(


$dB(100, 100), [$rF(scale * 12.5, scale * 25).re(0).fr(.1).de(.8)]).K('player').bindSprite('me',.3)}
M.pythag = function (a, b) {
	return M.sqrt(a * a + b * b)
}
$timer = function () {
	$time = function () {
		var time = new Date().getTime() 
		return time
	}
	var timer = {}
	timer._time = $time()
	timer.clr = function () {
		timer._time = $time()
		return timer
	}
	timer.dif = function () {
		return ($time() - timer._time) / 1000
	}
	timer.difClr = function () {
		var dif = timer.dif()
		timer.clr()
		return dif
	}
	return timer
}
w.bS = b.bindSprite = function (im, sc, initRt) {
	var b = this
	initRt = N(initRt) ? initRt : 6
	b.W().st.bm(im, function (bm) {
		b.sprite = bm
		bm.sXY.apply(bm, A(sc) ? [sc[0], sc[1]] : [sc || .4])
		$t(function () {
			bm.XY(b.X(), b.Y()).rt(b.rt() + initRt)
		})
	})
	return b
}
w.regPtCenterNotUsed = function () {
	var w = this;
	var gameW = w.st.canvas.width
	var gameH = w.st.canvas.height
	w.st.rXY(gameW / 2, gameH / 2);
	return w
}

 
b.warping = function () {
	var p = this
	height = w.st.canvas.height
	width = w.st.canvas.width
	$t(function () {
		if (p.Y() < 0) {
			p.Y(height)
		}
		if (p.Y() > height) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(width)
		}
		if (p.X() > width) {
			p.X(0)
		}
	})
	return this
}
b2d.controls = {
	thrust: function (p) {
		p.fixedRot(true)
		if (K.l) {
			p.rt(15, '-')
		}
		if (K.r) {
			p.rt(15, '+')
		}
		if (K.u) {
			p.I(
					p.GetWorldVector(V(0, -1)).m(2)
			)
		}
	}
}
w.p = w.player = function (scale, onEachTick) {
	if (!N(scale)) {
		enemy = onEachTick
		onEachTick = scale
		scale = 4
	}
	this.startKilling()
	var pl = this.addMe(scale), func
	if (S(onEachTick)) {
		$t(function () {
			b2d.controls[onEachTick](pl)
		})
	}
	return pl
}
 