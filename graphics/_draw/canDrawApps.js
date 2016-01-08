XP2 = DRAWAPP = function () {
	__C()
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(first)
	function first() {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(then)
	}
	
	function then() {
		x.S()
		x.tl(200, 200);
		draw()
		x.R()
		x.tl(20, 20);
		draw()
	}
}
CV0 = TXCAN = function () {
	c = $.c('o', 500, 500);
	//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
	// c.roundRect(100,50,100,100,50).stroke()//.fill()
	//c.line(10,10,50,500).stroke()
	c.line([
		[[100, 100], [200, 200], [140, 900]]
		// ,  [[150,150],[250,250], [20,300]]
	]).stroke();
	//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
	//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}
CV29 = PXXX = CANPOL = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
} 