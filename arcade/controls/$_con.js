$con.jetpack = $con.symmetrical = $con.jumper = function (p) {
	var g = G(arguments)
	return g.p ? p.impRunUpDown(20, 20) : p.impRunUpDown(4, 22)
}//jetback/symm, jumper
$con.linJump = function (p, ht) {
	ht = -M.abs(N(ht) ? ht : 100)
	if ($onG('+')) {
		p.lV(0, ht)
	}
}
$con.playa = function (p) {
	p.isLegitJumping() ? p.lVJump() : p.impRun()
}
$con.linRun = function (p) {
	p.linRun(40, '*')
}
$con.slidey = function (p) {
	var g = G(arguments)
	g.n ? p.tricky(2, -6, -14, 10, 10) :
			!g.p ? p.tricky(2, -6, -14, 2) :
					p.tricky(0, -10, -30, 15)
}//slidey//standard//trickJump
$con.weird = function (p) {
	!G(arguments).n ? p.basic(-10, 4, 1) :
			p.basic(-14, 3)
}//getup//basic