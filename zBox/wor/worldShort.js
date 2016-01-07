w.clr = w.cF = w.ClF = w.CF = w.CFo = function () {
	this.ClearForces();
	return this
}
w.GBL = function () {
	return this.GetBodyList()
}
w.GBC = w.GBoC = function () {
	return this.GetBodyCount()
}
w.grB = w.gB = w.GGB = w.GGBo = function () {
	return this.GetGroundBody()
}
w.DB = w.DBo = function (b) {
	this.DestroyBody(b);
	return this
}
w.CB = w.CBo = function (bD) {
	return this.CreateBody(bD)
}
w.QP = w.QPt = function (fn, vec) {
	this.QueryPoint(fn, vec);
	return this
}
w.QA = w.QAB = function (a, b) {
	this.QueryAABB(a, b);
	return this
}
w.dr = w.draw = w.DDD = function () {
	this.DrawDebugData();
	return this
}