DRI = DRAWIMAGE = function () {
	DRI.CSS()
	d = $.d().A(
			$cv = $.c(900, 400)
	)
	x = $cv.ctx()
	$i = $.i('chicks')
	$i.load(function () {
		x.drawImage($i[0], 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i, 400, 100, 500, 200)
	})
}
DRI.CSS = function () {
	$CSS({
		body: {C: 'o'},
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
}