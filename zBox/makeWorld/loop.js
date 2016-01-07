w.step = function () {
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
	var args = G(arguments)
	this.Step.apply(this, args)
	return this
}
w.gv = w.G = function (x, y) {
	var v, currGrav = this.GetGravity()
	if (U(x)) {
		return currGrav
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-currGrav.x, -currGrav.y)
	}
	w.SetGravity(v)
	return this
} 
   