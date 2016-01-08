f.sp = function () {
	return this.sprites[0]
}

 

f.sp = function () {
	return this.sprites[0]
}
f.sp = function (sp) {
	var f = this
	if (U(sp)) {
		return f.sprite
	}
	f.sprite = sp
	return f
}
f.Sp = function (sp) {
	var f = this
	f.sprite = sp
	return sp
}