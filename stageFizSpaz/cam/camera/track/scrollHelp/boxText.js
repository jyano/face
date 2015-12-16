w.textDsp = function (textFn) {
	var w = this
	var ht = w.stage.H()
	var wd = w.stage.W()
	var d = $.div('z', wd, 200).A()
	d.abs()
	d.XY(0, ht)
	d.css('color', 'white')
	d.fontSize(30)
	setInterval(setText, 1000)
	function setText() {
		d.text(textFn())
	}
	
	return w
}
