GPM = function () {
	
	//vs2 = vs3
	x.gpc(vs1, vs2)
}

HOLEY = function () {
	x.gpc(vs1, vs4)
}


GGG = function () {
	draw = function (p, c, ox, oy) {
		ox = N(ox, 0)
		oy = N(oy, -30)
		c = c || 'B'
		vsA = function (iPol) {
			_.ari = _.arialize = function (n, fn) {
				var vs = []
				_.t(n, function (i) {
					vs.push(fn(i, vs, n, fn))
				})
				return vs;
			}
			return _.ari(iPol.getNumPoints(), function (i) {
				return iPol.pt(i)
			})
		}
		p.eIPol(function (p_, i, p, n) {
			var col = i ? Cols[i % n] : c
			$l(' -isHole #' + i + ': ' + p_.isHole())
			x.drawPolSimp(
					vsA(p_),
					col,
					p_.isHole(),
					ox, oy
			)
		})
	}
	//$l('n: '+n)//if more than one poly produced, use multiple color to display
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	x = $.c('w', 400, 400).ctx();
	x.drawPolSimp = function (vs, sC, hole, ox, oy) {
		var x = this
		ox = N0(ox);
		oy = N0(oy)
		x.f(hole ? "z" : "rgba(50, 50, 50, 0.1)").s(sC).l(2)
		x.b().mt(vs[0][0] + ox, vs[0][1] + oy)
		x.lt(_.m(_.r(vs), function (v) {
			return [v[0] + ox, v[1] + oy]
		}))
		x.cp().s().f()
	}
	$(x.cv()).C('y')
	draw(p1);
	draw(p2, 'r')
	_.e(gpc.ops, function (op) {
		$.bt(op, function () {
			x.clearRect(0, 0, 400, 400);
			draw(p1);
			draw(p2, "z");
			draw(p1[op](p2), "b", 0, 150)
		})
	})
	p = p1.difference(p2)
	pp = p2.difference(p1)
}

GPC = ERR = function () {
	p1 = M.p(v1)
	p2 = M.p(v2)
	x0 = $.can('b', 300, 200).A().ctx()
	x0.drawPs(p1, 'b', 0, -30)
	x0.drawPs(p2, 'r', 0, -30)
	$.br().A()
	xx = $.can('y', 300, 400).A().ctx()
	_.e(['D', 'I', 'U', 'X'], function (o) {
		$.bt(o, function () {
			xx.clearRect(0, 0, 400, 400)
			xx.drawPs(p1[o](p2), 'g', 0, 150)
		}).A()
	})
} 
function $opButs() {
	function Buts() {
		var d = $.d()
		G(arguments).e(function (op) {
			d.A(But(op))
		})
	}
	
	function But(op) {
		return $.bt(op, function () {
			x.setup().drawPD(p1[op](p2), 'g', 0, 150)
		})
	}
	
	Buts('difference', 'intersection', 'union', 'xor')
}
x.gpc = function (vs1, vs2) {
	var x = this;
	$.h1('blue op red')
	x = $.cx()
	$opButs()
	p1 = $pD(vs1)
	p2 = $pD(vs2)
	x.setup()
	return x
}
x.pol = function (vs, ox, oy) {
	var x = this;
	ox = N(ox, 0);
	oy = N(oy, 0)
	//begin, moveTo, lineTo, lineTo..
	x.b()
	x.mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	// close path, stroke, fill
	return x.cp().s().f()
}
x.drawPS = function () {
	var x = this, g = G(arguments), o// can take array of verts OR a gpcPoly
	o = gpc.iP(g.f) ? {vs: g.f.vs(), ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
			A(g.f) ? {vs: g.f, ss: g.s, fs: g.t, ox: g[3], oy: g[4]} :
					g.O ? g.f : {}
	return x.lW(N(o.l, 12))
			.s(o.ss || 'b')
			.f(S(o.fs) ? o.fs : o.fs ? 'w' : 'p')
			.pol(o.vs, o.ox, o.oy)
}
x.setup = function () {
	var x = this
	x.cR();
	x.drawPD(p1, "b", 0, -30);
	x.drawPD(p2, "r", 0, -30)
	return x
}
x.drawPD = function (pD, sC, ox, oy) {
	var x = this
	pD.eIPol(function (iPol, n, nIP) {
		var col, hoCol
		x.drawPS(
				iPol.vsArr(),
				col = n ? colsArr[n % nIP] : oO('c', sC),
				hoCol = iPol.iH() ? 'z' : null,
				ox,
				oy
		)
	})
	return x
}
 