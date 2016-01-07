f.killBody = function () {
	this.B().kill()
}
f.killB = f.kB = f.xB = f.xX = f.XX = function () {
	if (this && this.B()) {
		this.B().kill()
	}
}
  