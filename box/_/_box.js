function toDoWithDefining$pt() {
	_pt = function (a) {
		if (O(a)) {
			return a.prototype
		}
	}
	_bPt = function (a) {
		if (a && bx[a]) {
			return _pt(bx[a])
		}
	}
}