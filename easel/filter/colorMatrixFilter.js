
ColorMatrix = $CM = $Cm = $cM = function (a, b, c, d, e) {
	var m = new cjs.ColorMatrix(a, b, c, d, e)
	m.b = m.adjustBrightness
	m.c = m.adjustColor
	m.C = m.adjustContrast
	m.h = m.adjustHue
	m.s = m.adjustSaturation
	m.cl = m.clone
	m.cc = m.concat
	m.m = m.copyMatrix
	m.r = m.reset
	m.A = m.toArray
	m.S = m.toString
	return m
}
cM = cjs.ColorMatrix.prototype
cM.s = function (s) {
	this.adjustSaturation(s)
	return this
}
cM.c = function (c) {
	this.adjustContrast(c)
	return this
}
cM.ch = function (c) {
	this.adjustHue(c)
	return this
}
cM.b = function (c) {
	this.adjustBrightness(c)
	return this
}
ColorMatrixFilter = $CMF = $cMFl = $CmF = $cMF = function (a, b, c, d) {
	return new cjs.ColorMatrixFilter(O(a) ? a : $CM(a, b, c, d))
}

GREY = function () {
	Q(function () {
		Q.b('me').a2($St())
				.fl($cMF($cM().s(-100)))
				.ca(0, 0, 1000, 1000)
	})
	
}

FT10 = FILTRS = function () {
	Q(function () {
		s = $St().t()
		i = Q.i('me')
		b = s.qB('me', .8, '+')
		/////////////////////////
		//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
		cM = $cM()
		cM.adjustBrightness(-400)
		//cM.adjustHue(-180)
		cM.c(80)
		//cM.c(-100)

		b._(400, 200, '+').fl($cMF(cM), i)  //zW
		
		///////////////////////
		// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
		// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
	})
}

dO.cMF = function (cM) {
	var cf = new cjs.ColorMatrixFilter(cM)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
} 

CMXF1=function(){$St()
	var shape = new createjs.Shape().set({x: 100, y: 100});
	shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
	var matrix = new createjs.ColorMatrix()
			.adjustHue(180)
			.adjustSaturation(-100);
	shape.filters = [
		new createjs.ColorMatrixFilter(matrix)
	];
	shape.cache(-50, -50, 100, 100);
	$St().A(shape)
}

CMXF= function () {
	$St().bm('me', function (bm) {
		bm.dg()
		var matrix = new createjs.ColorMatrix()
				.adjustHue(180)
				.adjustSaturation(-100);
		
		bm.filters = [
			new createjs.ColorMatrixFilter(matrix)
		]
		
		 bm.cache(-200, -200, 800, 800);
	})
}