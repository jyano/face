b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	var vec = N(x) ? V(x, y) : x
	return this.GLP(vec.d()).m()
}
b.gLVFLP = function (vec) {
	return this.GetLinearVelocityFromLocalPoint(vec)
}
b.gLVFLP = b.GetLinearVelocityFromLocalPoint
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
b.GLP = function (vec) {
	return this.GetLocalPoint(vec)
}
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
    