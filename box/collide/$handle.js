w.b = w.bg = w.beg = function () {
	//ADDS one or more handlers to beginHandlers array
	var w = this
	G(arguments).e(function (fn) {
		w.BG.push(fn)
	})
	return w
}