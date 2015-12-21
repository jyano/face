$L('dumb')
function dumb(){

	w.ZOOM = function (zm) {
	var w = this
	if (U(zm)) {
		return $N(w._zoom)
	}
	w._zoom = zm
	w.stage.scaleX = zm
	w.stage.scaleY = zm
	return w
}

	w.CAMX = function (x) {
	var w = this;
	if (U(x)) {
		return -w.stgX()
	}
	return w.stgX(-x)
}
	w.CAMY = function (y) {
	var w = this;
	if (U(y)) {
		return -w.stgY()
	}
	w.stgY(-y)
	return w
}
}

w.camScaleMin = w.camZoomMin = function () {
	return 1 / _.lower(this.wMultiple, this.hMultiple);
}
w.camXMax = function () {
	return this.scaledWorldW() - this.gameW
}
w.camYMax = function () {
	return this.scaledWorldH() - this.gameH
}
w.camX = function (x) {
	w.camXCap = function (x) {
		return $capTop(x, this.camXMax())
	}
	return this.CAMX(U(x) ? null : this.camXCap(x))
}
w.camY = function (y) {
	w.camYCap = function (y) {
		return $capTop(y, this.camYMax())
	}
	return this.CAMY(U(y) ? null : this.camYCap(y))
}
w.camXY = function (x, y) {
	var w = this;
	w.camX(x)
	w.camY(y)
	return w
}
w.zoom = function (zm) {
	var w = this
	return U(zm) ? w._zoom :
			w.ZOOM(cjs.cap(zm, w.minScale, 4))
}
w.capCamPos = function () {
	var w = this
	w.camX(w.camX())
	w.camY(w.camY())
	return w
}
w.zoomIn = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * 1.02)
	}
	return w
}
w.zoomOut = function () {
	var w = this
	w.tCb = function () {
		w.zoom(w.zoom() * .98)
	}
	return w
}
w.showOff = function () {
	var w = this
	zin()
	return w
	function zout() {
		setTimeout(zin, 10000);
		w.zoomOut()
	}
	
	function zin() {
		setTimeout(zout, 4000);
		w.zoomIn()
	}
}