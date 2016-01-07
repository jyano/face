w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
 