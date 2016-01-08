f.rmSp = function () {
	_.e(this.sprites || [], function (s) {
		cjs.rmOb(s)
	})
	this.sprites = []
	return this
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	this.rmSp()
	if (sp) {
		this.bS(sp)
	}
	return this
}
f.rmSp = function () {
	var f = this
	f.sprites = f.sprites || []
	_.e(f.sprites, function (s) {
		cjs.rmOb(s) //function cjsRmObSource(ob){if (cjs.iDO(ob)) { ob.rm() }}
	})
	f.sprites = []
	return f
} //= f.xSp=f.Xx=f.rmSp
f.rpSp = function (sp) {
	var f = this
	f.rmSp()
	if (sp) {
		f.bS(sp)
	}
	return f
}
 