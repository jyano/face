b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	return this.GetLocalPoint(V(x, y, '-')).m()
}
 