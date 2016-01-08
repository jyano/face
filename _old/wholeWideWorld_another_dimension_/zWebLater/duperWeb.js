$q = function (e) {
	if (!O(e)) {
		return false
	}
	if (e.target) {
		e = e.target
	}
	return $(e)
}