enterSite = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
	socks()
	home()
}
$mug = function (fn) {
	$.get('/getMug', fn)
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
$cutout = function (q) {
	return {
		un: q.un,
		d: q.body.d,
		dats: q.body.dats,
		data: q.body.d,
		physicsData: q.body.dats
	}
} 