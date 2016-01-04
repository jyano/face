$.fn.selPic = function () {
	$('.pic').e(function () {
		$(this).C('b')
	})
	this.parent().C('y')
}

$.fn.dots = function () {
	var el = this
	el.copy()
	el.DOTS = []
	el.dats = []
	el.$(function (x, y) {
		x = parseInt(x)
		y = parseInt(y)
		el.cir(x, y)
		el.DOTS.push([x, y])
		el.dats.push(x);
		el.dats.push(y) //vestige from phaser physics?
		el.line(el.DOTS)
	})
	el.$$(function (X, Y) {
		var du
		//el.C('X')
		el.off('click')
		el.closePath()  //el.paste() // el.copy()  //el.save()
		el.clear() //du = el.toDataURL()
		el.clip()
		el.paste() //el.fit(du)
	})
	return el
}
$.fn.snap = function (fn) {
	$.po('/img', {
		d: this.canvas.toDataURL(),
		dats: this.dats //vestige from phaser physics?
	}, fn)
}

$.cut = function (m) {
	z();
	m = m || 'me'
	$('body').A(
			$.bt('save sprite', function () {
				c.snap(CUTOUTS)//; EDIT()
			}), $.br(2),
			$.bt('start cut', function () {
				c.dots()
			}), $.br(2),
			$.bt('restart cut', function () {
				$.cut(m)
			}), $.br(2),
			c = $.c('r', 500, 500).A().fit(m)
	)
} // $.bt('file uploads', function () {window.location = '/wap/uploads'}),
 