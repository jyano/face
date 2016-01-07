w.dR = w.cRF = w.$dR = w.$rD = w.rD = function () {var w = this, g = G(arguments);var b = w.sB(g.f, g.s)
	b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
	return b.dyn()
} 

w.sR = w.rS = w.$sR = w.$rS = function () {
	return this.cRF.apply(this, arguments).stat()
}

w.dC=   function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return cF
}

w.dC_ =   function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return b
}
w.dC__ = function (x, y, r) {
	var w = this
	var b = w.dB(x, y)
	var cF = b.CF($cF(r))
	return w
}

w.sC =  function (x, y, r) {}


////////////////////////
 function soon(){
	 w.boxOld = function (x, y, W, H) {//=brk=brick=
		 w.circleStat = function (x, y, r) {
			 var cir = w.sB(x, y)
			 cir.A($cir(N(r, 50)))
			 return cir
		 }
		 w.circle = function (x, y, r) {
			 var cir = w.dB(x, y)
			 cir.A($cir(N(r, 50)))
			 return cir
		 }
		 x = N(x) ? x : 60;
		 y = N(y) ? y : x
		 W = N(W) ? W : 50;
		 H = N(H) ? H : W
		 return this.A(b2d.dyn(x, y), b2d.poly(W, H)).K('box')
		 w.brickOld = function (x, y, W, H) {//=brk=brick=
			 x = N(x) ? x : 60;
			 y = N(y) ? y : x
			 W = N(W) ? W : 30;
			 H = N(H) ? H : W
			 return this.A(b2d.stat(x, y), b2d.poly(W, H).r(0)).K('brick')
		 }
	 }
	 w.aRF = function () {
		 var w = this, g = G(arguments)
		 var b = w.sB(g.f, g.s)
		 b.rF.apply(b, A(g.t) ? g.t : _.r(g, 2))
		 return w
	 }
	 w.aCF = function (x, y, r) {
		 var w = this
		 var b = w.dB(x, y)
		 var cF = b.cCF(r)
		 return w
	 }
// uses k:
	 w.box = w.bi = function (x, y, W, H) {
		 x = N(x) ? x : 60;
		 y = N(y) ? y : x
		 W = N(W) ? W : 50;
		 H = N(H) ? H : W
		 return this.A($dB(x, y), $rF(W, H)).K('box')
	 }
	 w.box = w.bo = w.bi = function (x, y, W, H) {
		 var w = this, g = G(arguments)
		 //var b = w.A($dB(x, y), $rF(W, H))
		 var b = w.D(g.f, g.s)
		 b.rF.apply(b, _.r(g, 2))
		 b.decor(g)
		 b.K('box')
		 return b
	 }
	 w.brick = w.bii = function (x, y, W, H) {
		 x = N(x) ? x : 60;
		 y = N(y) ? y : x
		 W = N(W) ? W : 30;
		 H = N(H) ? H : W
		 return this.A($sB(x, y), $rF(W, H).re(0)).K('brick')
	 }
	 w.brk = w.brick = w.bii = w.brik = function (x, y, W, H) {
		 var w = this, g = G(arguments)
		 var b = w.S(x, y)
		 b.rF.apply(b, _.r(g, 2))
		 //var b = w.A($sB(x, y), $rF(W, H))
		 b.decor(g)
		 b.K('brick')
		 return b
	 }
	 w.cF = function (bD, fD) {
		 return this.cB(bD).cF(fD)
	 }
 }
 