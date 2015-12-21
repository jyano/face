b.track = function (x, y, z) {
	var b = this, w = b.wor()
	w.track(b, x, y, z)
	return b
}
function trackee() {
	w.t = w._t = w._t || w.S(w.hW, w.hH, 'w', [[20, 2, '-']]).r(.8) //trackee
	w.i.A(w.tSpr = $Ct().XY(w.t.X(), w.t.Y())) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
	T.t(track)
	NOT = NOTRACKEE = function () {
		W({t: 0})
	}
}
function track() {
	if (F(w.t.cb)) {
		w.t.cb()
	} else if (F(w.tCb)) {
		w.tCb()
	}
	w.st.x = -w.sXCap(w.t.X() * w.z - w.hW)
	w.st.y = -w.sYCap(w.t.Y() * w.z - w.hH)
	if (w.t == w._t) {
		w.t.XY(w.tSpr.X(), w.tSpr.Y());
		w.s.rt(w.tSpr.rt())
	}
}
	