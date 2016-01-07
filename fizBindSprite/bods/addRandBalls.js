w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}