// Imagine that you have gusts of wind blowing sideways… 
// you can add your objects to a Contoller and have them pushed sideways… 
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
w.aCo= w.acc = function () {var w=this
	var co = $aCo.apply($aCo, arguments)
	w.co( co )
	return co
}

$aCo= b2d.acc = function (x, y) {

	var co = new b2d.CAC()
	
	if (N(x)) {co.V(x, y)}
	
	return co
}
 
 
aCo = $pt.aCo
aCo.V = function (x, y) {var aCo=this

//getter is a waste!  counterproductive... think about it! :)
// .. but for consistency..??? nah i can do better
	//applies 'gravity' by default

	aCo.A = U(x) ? V(0, 10) : V(x, y)

	return aCo
}
  