w._preKill = function (b) {
	
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	b.sprite = null
	if (b.sp()) {
		b.sp().rm()
	}
	b.fs(function (f) {
		f.rmSp()
	})
}
w._fPreKill = function (f) {
	//$l('w._fPreKill')
	f.rmSp()
}

