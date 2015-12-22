$.dS = function (cssOb) {
	return $.d().css(cssOb)
}
$.fn.animloop = function () {
	var that = this
	this.show("slow")
	this.animate({"marginLeft": "300px"}, 2000)
			.animate({"marginLeft": "0px"}, 2000)
	this.hide("slow", function () {
		that.animloop()
	})
}
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}