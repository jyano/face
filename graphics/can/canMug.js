_canMug = function (el) {
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//wap specific
	el.snap = function (func) {
		pams = {
			d: el.toDataURL(),
			dats: el.dats
		}
		$.post('/img', pams, func)
	}
	//el.img = $.img()
	//el.img.src(el.toDataURL())
	el.dots = function () {
		el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x)
			el.dats.push(y)
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
	return el
}