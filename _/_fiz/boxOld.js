//divide by 30 to get meters //all bx-obs have reg at center
//sB = b2Body.b2_staticBody	
//dB = b2Body.b2_dynamicBody
function oldGrav() {
	if (A(o.g)) {
		o.gX = o.g[0];
		o.gY = o.g[1]
	}
	else {
		o.gY = o.g
	}
	o.gX = N(o.gX) ? o.gX : 0
	o.gY = N(o.gY) ? o.gY : 0
	$l('gX: ' + o.gX + ', gY: ' + o.gY)
	w = $W(o.gX, o.gY)
}
 
	function obX(x) {
		if (b2d.iF(O(x))) {
			x = x.B()
		}
		var y = F(x.Y) ? x.Y() : x.y
		x = F(x.X) ? x.X() : x.x
		return {
			x: x,
			y: y
		}
	}
