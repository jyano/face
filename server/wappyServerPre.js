$user = toUser = function (o) {
	if (A(o)) {
		return _.m(o, $user)
	}
	return {
		id: o.id, un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status'
	}
}
un_ = function (un) {
	return {un: un}
}
g = $g = $get
G = function (url, fn) {
	g('/' + url, fn)
}
