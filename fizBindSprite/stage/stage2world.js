w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}  