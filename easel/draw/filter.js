$L('mapFilt', 'alphaMask', 'blurFl','colorFl','colMxFl')
function mapFilt() {
	AlphaMapFilter = $aMFl = $aMF = function (a, b, c, d, e) {

//Map a greyscale image to the alpha channel of a display object
		return new cjs.AlphaMapFilter(a, b, c, d, e)
	}
	dO.aMF = function (a, b, c, d, e, f, g, h) {
		var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	}
 


}
function alphaMask(){
	 forMaskFilter = function trx(n) {
		 var g = G(arguments)
		 var a = []
		 //for making mask filter
		 if (g.n) {
			 return 'rgba(0,0,0,' + g[0] || 0 + ')'
		 }
		 _.e(g, function (n) {
			 a.push(trx(n, '-'))
		 })
		 return a
	 }
	 dO.aF = function (h) {
		 var ob = this
		 ob.fl($AF(h))
		 return ob
	 }
	 dO.aF2 = function (h) {
		 var ob = this
		 this.fl2($AF(h))
		 return ob
	 }
	 AlphaMaskFilter = $aFl = $Afl = $AF = $Af = function (a, b, c, d, e) {
		 //Map an image's alpha channel to the alpha channel of a display object
		 var fl//return new cjs.AlphaMaskFilter(a, b, c, d, e)
		 if (O(a) && a.cacheCanvas) {
			 a = a.cacheCanvas
		 }
		 fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
		 return fl
	 }
	 dO.aF = function (a, b, c, d, e, f, g, h) {
		 var bf
		 bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
		 this.filters = this.filters || []
		 this.filters.push(bf)
		 return bf
	 }
 
 }
function blurFl() {
	_$Bfl = function (x, y, q) {
		return new cjs.BlurFilter(x, y, q)
	}
	$Bfl = BlurFilter = $bFl = $BF = $Bf = $FB = $FlB = $bF = function () {
		var g = G(arguments), fl, o
		o = {x: g.f, y: g.s, q: g.t}
		o.y = N(o.y) ? o.y :
				o.x
		o.q = o.q || 1
		return _$Bfl(o.x, o.y, o.q)
	}
	dO.flBds = function () {
		return this.gFl().getBounds()
	}
	dO.bF = function (a, b, c, d, e, f, g, h) {
		var bf
		bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(bf)
		return bf
	} 
}
function colorFl() {
	$cFl = ColorFilter = function (a, b, c, d, e, f, g, h) {
		return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
	}
	dO.cF = function (a, b, c, d, e, f, g, h) {
		var cf = $cF(a, b, c, d, e, f, g, h)
		this.filters = this.filters || []
		this.filters.push(cf)
		return cf
	}
 
}

function colMxFl() {

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
	CMXF1 = function () {
		$St()
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
 
}

function _pre(){
	cjs.Filter.prototype.b = function () {
		var bd = this.getBounds()
		bd.w = bd.width
		bd.h = bd.height
		return bd
	}
	dO.aFl = function (fl) {
		var dO = this
		dO.filters = dO.filters || []
		dO.filters.push(fl)
		return dO
	}
	dO.gFl = function () {
		this.filters = this.filters || []
		return _.l(this.filters)
	}
	dO.fl = dO.Fl = function (fl, i) {
		var dO = this, g = G(arguments)
		if (g.A) {
			return dO.fl.apply(dO, g.f)
		}
		dO.filters = dO.filters || []
		if (U(fl)) {
			return _.l(dO.filters)
		}
		if (N(fl)) {
			return dO.filters[fl]
		} // filters are only displayed when the display object is cached
		// later, you can call updateCache() to update changes to your filters
		//	_.e(g, function (fl) {dO._fl(fl)}) 
		if (O(fl)) {
			dO.filters.push(fl)
		} //if (O(i)) {dO.ca(i)}
		//if (!g.n) {i = dO.image;dO.ca(0, 0, i.width, i.height)}
		return dO
	}
	
}
