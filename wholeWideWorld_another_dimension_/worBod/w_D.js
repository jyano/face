w.D = function () {
//   super star !
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
	function alt() {
		w.dyn = w.body = w.A = function (x, y, fD) {
			var w = this, b, bd
			//pass body def
			if (b2d.isBDef(x)) {
				bd = x;
				fD = y
			}
			//make body def
			else {
				if (O(x)) {
					fD = y;
					y = x.y;
					x = x.x
				}
				x = N(x) ? x : 500
				y = N(y) ? y : 250
				bd = b2d.dyn(x, y)
			}
			b = w.CreateBody(bd)
			// pass in one fixture or an ARRAY( of fixts )
			if (fD) {
				b.fixt(fD)
			}
			return b
		}
		w.B = function () {
			var w = this, g = G(arguments), o
			return g.u ? w.bd() :
					w.cB.apply(w, arguments)
		}
		w.B = w.D = function (x, y) {
			var w = this, bd, b, fixts,
					g = G(arguments),
					x = g[0],
					y = g[1], clas
			if (S(_.last(g))) {
				clas = g.pop()
			}
			if (N(x)) {
				bd = b2d.dyn(x, y);
				fixts = _.rest(g, 2)
			}
			else {
				if (b2d.isBDef(x)) {
					bd = x
				} else {
					x = V(x);
					bd = b2d.dyn(x.x, x.y)
				}
				fixts = _.rest(g)
			}
			b = w.CreateBody(bd)
			b.H.apply(b, fixts)
			if (clas) {
				b.K(clas)
			}
			return b
		}
	}
}
 