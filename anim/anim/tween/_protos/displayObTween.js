dO = cjs.DisplayObject.prototype


dO.tw = dO.tween =  function () {
	var dO = this, g = G(arguments) 
	g.unshift(dO)
	return _tw = $Tw.apply(null, g)
}

dO.twL = dO.tweenLoop =  function () {
	var dO = this, g = G(arguments) 
	g.unshift([dO, 'l'])
 	return  _tw = $Tw.apply(dO, g)
}

dO.spin = dO.sp = function () {
	this.twL([{r: 360}, 4000]);
	return this
}

dO.grow = function () {
	this.tw([{sxy: 10}, 10000])
	return this
}
 