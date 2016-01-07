w.S = function (x, y) {
	var w = this,
			g = G(arguments),
			x = g[0], y = g[1],
			bd, b, fixts, clas
	if (S(_.last(g))) {
		clas = g.pop()
	}
	if (N(x)) {
		bd = b2d.stat(x, y)
		fixts = _.rest(g, 2)
	}
	else {
		if (b2d.isBDef(x)) {
			bd = x
		}
		else {
			x = V(x);
			bd = b2d.stat(x.x, x.y)
		}
		fixts = _.rest(g)
	}
	b = w.CreateBody(bd)
	if (fixts.length) {
		b.H.apply(b,
				fixts
				//   _.map(fixts, function(f){   return A(f)?f:[f]  })
		)
	}
	if (clas) {
		b.K(clas)
	}
	return b
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
   