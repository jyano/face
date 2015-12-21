$pt = {
	dD: _pt(bx.DD),
	v: _pt(bx.Vec2),
	b: _bPt('B')
}
/// clip ///
$pt.pD = gpcas.geometry.PolyDefault.prototype//////////////////
$pt.ps = gpcas.geometry.PolySimple.prototype/////////////////////////
//// canvas ////
$pt.c = HTMLCanvasElement.prototype
$pt.x = ctx = xx = CanvasRenderingContext2D.prototype
$pt.xGr = CanvasGradient.prototype
test = function () {
	$pt.xGr({
		a: function () {
		}
	})
}
$P = function () {
	bb = Backbone
	md = bb.Model.prototype
	vw = bb.View.prototype
	rt = bb.Router.prototype
	cl = bb.Collection.prototype
}
h = $pt.h = cjs.Shape.prototype
