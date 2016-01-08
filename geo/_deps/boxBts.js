W.btns = function (btns) {
	W()
	$BoxBtns = function (btns) {
		var d = $.div('b').H(200).abs().A().drag().al(.3)
		d.XY(200, 640)
		d.fontSize(40)
		d.css('color', 'white')
		_.e(btns, function (fn, text) {
			d.A($BoxBtn(text, fn))
		})
		return d
	}
	function $BoxBtn(txt, fn) {
		var bt = $.sp().C('z').XY(100, 40).css('margin', 20)
		bt.A(txt)
		bt.$($BoxBtnFn(fn, btns))
		return bt
	}
	
	$BoxBtns(btns)
}
function $BoxBtnFn(fn, btns) {
	return function () {
		W()
		y = w.y().tr()
		$BoxBtns(btns)
		F(Q) ? w._(fn) : fn()
	}
}