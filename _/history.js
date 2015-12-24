function hist() {
	hst = $w.history
	hst.b = hst.back
	hst.f = hst.forward
	hst.g = hst.go
	hst.l = hst.length
	nvg = navigator
	nvg.o = nvg.onLine
}