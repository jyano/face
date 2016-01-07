function worldMove() {
	w.left = w.horiz = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.X(num, '-')
		})
	}
	w.up = w.vert = function (num) {
		num = N(num) ? num : 4
		this.each(function (b) {
			b.Y(num, '-')
		})
	}
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
};