dO.aMF = function (a, b, c, d, e, f, g, h) {
	var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}

AlphaMapFilter = $aMFl = $aMF = function (a, b, c, d, e) {

//Map a greyscale image to the alpha channel of a display object
	return new cjs.AlphaMapFilter(a, b, c, d, e)
}