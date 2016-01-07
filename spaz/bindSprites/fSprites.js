f.sp = function () {
	return this.sprites[0]
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.sp = function () {
	return this.sprites[0]
}