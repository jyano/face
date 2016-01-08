function crBod() {
	w.bd = w.bs = w.bods = w.bL = function () {
		var bs = this.GBL()
		return bs
	}
	w.nBd = w.numBods = w.bC = w.gBC = function () {
		return this.GBC()
	}
	w.ds = w.dB = function (b) {
//if(U(a)){return w.eB(function (b) {w.destroy(b)})}
		var w = this
		w.DB(b)
		return w
	}//w.ls = 
// ok lets start here, we create a body with just a bodyDef
// so just what is this b.f?  its how a body creates a fixture
// obviously..
//but it would be nicer if we could also pass in
//one (or more (as an array)) of fixtures right away
//if we only have one fixture (simple body), then
//it is especially helpful timesaver over the long run
//(turn two steps to one!)
	w.A = w.cB = function (bD, fD) {
		var w = this
		var b = w.CB(bD)
		if (fD) {
			b.f(fD)
		}
		return b
	}
// let's meet w.D... he's a super star here!!!
	w.D = function () {
		var w = this, g = G(arguments), o
		o = O(g.f) ?
		{x: g.f.x, y: g.f.y, fD: g.s} :
		{x: g.f, y: g.s, fD: g.t}
		o.x = N(o.x) ? o.x : 500
		o.y = N(o.y) ? o.y : 250
		var dB = $dB(o.x, o.y)
		return w.A(dB, o.fD)
	}
	w.S = w.stat = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500;
		y = N(y) ? y : 250
		return this.A($sB(x, y), fD)
	}
//if u want just a ball body with one ball fixture..
// we are going to assume u want it centered
//if not, dont use this.. this is for simple uses cases..
//w.ball is easy.. pass it x, y, and r
	w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.rF.apply(b, _.r(g, 2))
		//var b = w.A($sB(x, y), $rF(W, H))
		b.decor(g)
		b.K('brick')
		return b
	}
	w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
		var w = this, g = G(arguments)
		//var b = w.A($dB(x, y), $rF(W, H))
		var b = w.D(g.f, g.s)
		b.rF.apply(b, _.r(g, 2))
		b.decor(g)
		b.K('box')
		return b
	}
	w.rock = w.pS = function (x, y) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('rock')
	}
	w.bag = w.pD = function (x, y) {
		var b = w.D(x, y), g = G(arguments)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('bag')
	}
}