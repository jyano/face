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
b2d.p()
i = cjs.DisplayObject.prototype
ct = cjs.Container.prototype
st = s = cjs.Stage.prototype
t = cjs.Text.prototype
h = cjs.Shape.prototype
ct = cjs.Container.prototype
s = cjs.Stage.prototype
h = cjs.Shape.prototype
ct = cjs.Container.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
ct = cjs.Container.prototype
$l('00')
b2d.p()
i = cjs.DisplayObject.prototype
ct = cjs.Container.prototype
st = s = cjs.Stage.prototype
t = cjs.Text.prototype
h = cjs.Shape.prototype
ct = cjs.Container.prototype
s = cjs.Stage.prototype
h = cjs.Shape.prototype
ct = cjs.Container.prototype
h = cjs.Shape.prototype // gx = cjs.Graphics.prototype
ct = cjs.Container.prototype
cirDfs = function (o) {
	o = o || {}
	//with object...
	o.al = N(o.al, 1)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.b = N(o.b, .5)
	o.f = N(o.f, .5)
	o.d = N(o.d, .5)
	o.s = D(o.s) ? o.s : 0;
	return o
}