dO.bindBody = function (b) {
	var dO = this
	$t(function () {
		b.X(dO.X())
		b.Y(dO.Y())
		b.rT(dO.rT())
	})
	
	return dO
}
 