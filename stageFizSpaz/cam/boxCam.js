
w.CAMX = function (x) {
	var w = this
	w.st.X(-x)
	return w
}
w.CAMY = function (y) {
	var w = this
	w.st.Y(-y)
	return w
}
w.gW = function () {
	return this.stage.canvas.width  
}
w.gH = function () {
	return this.stage.canvas.height
}
w.wW = function () {
	return this.stage.canvas.width
}
w.wH = function () {
	return this.stage.canvas.height
}
w.halfW = function () {
	return this.gW / 2
}
w.halfH = function () {
	return this.gH / 2
}
w.ZOOM = w.zoom = function (zm) {
	var w = this
	var stg = w.stage
	if (U(zm)) {
		return stg.scaleX
	}
	stg.scaleX = zm
	stg.scaleY = zm
	return w
}
w.scaled=function(a){return a * this.zoom() } 
w.zDif=w.scaledDif = function (a, b) {return this.scaled(a - b)}
w.zX = w.zDifX = function (p) {
	var w = this
	return w.zDif(w.gW() / 2, p.X())
}
w.zY = w.zDifY = function (p) {
	var w = this
	return w.zDif(w.gH() / 2, p.Y())
}
w.TRACK = function (p) {
	var w = this
	$t(function () {
		w.CAMX(w.scaledDif(p.X(), w.gameW / 2))
		w.CAMY(w.scaledDif(p.Y(), w.gameH / 2))
	})
	return w
}
b.TRACK=function(){var b=this, w= b.W()
	w.TRACK(b)
	return b
} 