function touch() {
//important for ipad
//move this onto stage itself
	touchEnable = function (s) {
		cjs.Touch.enable(s);
		return s
	}
}