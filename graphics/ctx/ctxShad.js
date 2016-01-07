x.shC = function (c) {
	this.shadowColor = oO('c', c)
	return this
}
x.shX = function (c) {
	this.shadowOffsetX = c
	return this
}
x.shY = function (c) {
	this.shadowOffsetY = c
	return this
}
x.shB = function (c) {
	this.shadowBlur = c
	return this
}
CTXSHAD = function () {
	__C()
	x.xShadow = 3
	x.yShadow = 3
	x.shadowBlur = 10
	x.shadowStyle = 'red'
	x.r(188, 40, 200, 100).f('r')
			.shC('#999').shB(20).shX(15).shY(15).f()
}