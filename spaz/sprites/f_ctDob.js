f.ctDob = f.ctSprite = f.ctSp = function (sp) {
	$l('f.ctSp')
	var f = this
	sp.XY(f.pos().x, f.pos().y).rC()
	f.bS($Ct().A(sp))
	return this
}