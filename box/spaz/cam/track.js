w.callTrackeeCb = function () {
	var w = this
	var cb = w.tCb || w.trackeeCb || w.trackee && w.trackee.cb
	if (F(cb)) {
		cb()
	}
	return w
}
w.setTrackeeCb = function (fn) {
	var w = this
	w.trackeeCb = w.tCb = fn
	return w
}
T4 = PAN = function () {
	_level_()
	w.pan = function (a) {
		var w = this
		var left = false
		var minX = 100
		var maxX = w.worldW - 100
		$t(function () {
			a.X(20, left ? '-' : '+')
			if (a.X() < minX) {
				left = false
			}
			else if (a.X() > maxX) {
				left = true
			}
		})
		return w
	}
	tee = w.S(w.gameW / 2, w.gameH / 2, 'w', [[40, 40, '-']]).track()
	w.pan(tee)
}
w.zY=w.zDifY=w.scaledDifY = function (y, t) {var w = this
	return   w.zDif(w.toY(y), t.Y())
}
w.zX = function (x, t) {var w = this
	x = w.toX(x)
	return  w.zDif(x, t.X())  
}//= w.zDifX=w.scaledDifX
w.zXY = function (t, x, y) {var w = this
	
	x = w.gameW/2 - w.zHalf(w.gameW) +  w.zX(x, t) 
	
	
	
	return {
		x: x  ,
		y: w.zY(y,t) + w.gameH/2 - w.zHalf(w.gameH)
	}
}
w._tr= w._track = function (t, x, y, fn) {var w = this
	$t(function () {
		var cb = w.tCb || w.trackeeCb || w.trackee && w.trackee.cb
		if (F(cb)) {cb()}
		fn(w.zXY(t,x,y))
	})
	return w
}
w.tr = w.track = function (t, x, y) {
	var w = this
	
	return w._tr(t, x, y, function (d) {
		w.camXY(-d.x,-d.y)
	})
}
T5=FBL = FIREBALL = function () {$FIREBALL().track()}
T6=KISS = function () {$FIREBALL()

	y = w.ship().C('b').track()
	yy = w.ship(400, 400).C('o')
	
	
	_.ev(2, function () {
			if (w.follA) {
				w.track(yy);
				w.follA = 0
			}
			
			else {
				w.track(y);
				w.follA = 1
			}
		})
}
T7=SNL = SCROLLNOLIM = function () {
	$FIREBALL()
	w.zoom(.8).dragScale()
			.ship()._track(600, 300, function (d) {
				w.stgXY(d.x, d.y)
			})
}
b._track = function (x, y, fn) {
	var b = this, w = b.W()
	w._track(b, x, y, fn)
	return b
}
w._trackCen = function (tee, fn) {
	var w = this
	var x = w.worldW / 2
	var y = w.worldH / 2
	return w._track(tee, x, y, fn)
}
w.trackCen = function (t) {
	return this.track(t, this.worldW / 2, this.worldH / 2)
}
