 
	$pC = b2d.polyCirc = function (rad, prec) {
		rad = N(rad) ? rad : 20
		prec = N(prec) ? prec : 20
		var arr = [],
				ang = 2 * Math.PI / prec
		_.t(prec, function (i) {
			arr.push(V(rad * Math.cos(ang * i), rad * Math.sin(ang * i)))
		})
		return arr
		function alt() {
			w.polyCirc = function (x, y, rad, sides) {
				var b = this.dyn(x, y),
						pc = b2d.polyCirc(rad, sides)
				b.poly.apply(b, pc)
				return b
			}
		}
	}
	$ba = $xyr = $xyR = function () {
		var b = w.dB(545, 195)
		b.A($cF(50).DBF())
		return b
	}
	$bi = $XYR = function () {
		var b = w.sB(545, 595)
		return b.A($cF(150).DBF())
	}
	$sqH = function () {
		var g = G(arguments)
		var o = N(g.t) ?
		{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
		{sz: g.f, rt: g.s}
		o.sz = o.sz || 50
		return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
	}
  
	w.perch = w.skyPerch = function (col) {
		var w = this
		col = col || 't'
		w.S(200, 50, col, 300, 20) //top
		w.S(200, 360, col, 300, 20) //bottom
		w.S(60, 240, col, 20, 260) //left
		w.S(340, 320, col, 20, 100)//right
		return w
	}
	w.dynX = w.dynamicX = function (x, y, fD) {
		var w = this, body
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return w.body(b2d.dyn(x, y), fD)
	}
	bx.f = function (k) {
		var arr = []
		w.each(function (b) {
			b.each(function (f) {
				if (f.is(k)) {
					arr.push(f)
				}
			})
		})
		return arr
	}
	bx.b = function (k) {
		var arr = []
		w.each(function (b) {
			if (b.of(k)) {
				arr.push(b)
			}
		})
		return arr
	}
	w.circleStat = function (x, y, r) {
		var cir = w.sB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.circStat = function (x, y, radius, color) {
		var wd = this.s.W(),
				ht = this.s.H()
		x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
		y = N(y) ? y : 50
		radius = N(radius) ? radius : _.random(14) + 8
		color = oO('c', color || $r())
		return this.bump(x, y, radius).bindSprite2(
				cjs.circ(radius, color).XY(x, y)
		).linDamp(2)
	}
	w.brickSensor = function (x, y, W, H) {//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return this.A(b2d.stat(x, y),
				b2d.poly(W, H).r(0).sensor(true))
				.K('brickSensor')
	}
	w.rectStat = function (x, y, wd, ht, color) {
		x = N(x) ? x : 200
		y = N(y) ? y : 50
		wd = N(wd) ? wd : 50
		ht = N(ht) ? ht : wd
		color = oO('c', color || $r())
		return this.brick(x, y, wd, ht).bindSprite2(
				cjs.rect(wd, ht, color).XY(x, y)
		).linDamp(2)
	}
	w.roc = w.rck = w.rock = w.pS = function (x, y) {
		var w = this, g = G(arguments)
		var b = w.S(x, y)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('rock')
	}

	w.bag = w.pD = function (x, y) {
		var b = w.D(x, y), g = G(arguments)
		b.pF.apply(b, _.r(g, 2))
		return b.decor(g).K('bag')
 
 
	w.eg = w.edge = function (a, b, c, d) {
		var w = this
		var eg = w.B($sB(0, 0))
		eg.f($eF(a, b, c, d))
		return eg
	}
	w.verts = function (x, y, arrs) {
		var bod = this.dyn(x, y)
		_.each(arrs, function (fixt) {
// bod.convex( arr[0],  _.rest(arr)  )
			//  bod.convex( fixt )
			bod.convex.apply(bod, fixt)
		})
		return bod
	}
 
	w.ds = w.dB = function (b) {
		var w = this, g = G(arguments), o
		return g.u ? w.eB(function (b) {
			w.destroy(b)
		}) : w.DB(b)
	}
	w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = function (b) {
		var w = this
		if (U(b)) {
			w.each(function (b) {
				w.destroy(b)
			})
		}
		else {
			w.DestroyBody(b)
		}
		return w
	}
	w.R = function (c, W, H, x, y) {
		var w = this, wC = w.cent(),
				r,
				g = G(arguments)
		if (!S(g[0])) {
			y = x;
			x = H;
			H = W;
			W = c;
			c = 'x'
		}
		if (U(W)) {
			W = 200
			H = 200
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(H)) {
			H = W
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		else if (U(x)) {
			x = wC.x - W / 2
			y = wC.y - H / 2
		}
		y = N(y) ? y : x
		/*
		 x=N(g[0])?g[0]:wC.x
		 y=N(y)?y:N(g[0])?N(g[0]):wC.y
		 W=N(W)?W:100
		 H=N(H)?H:W
		 */
		r = w.S(x + (W / 2), y + (H / 2), c, W, H)
		return r
	}
	b.St = b.S = b.stg = function () {
		return this.W().s
	}
	b.CF = b.GFL = b.__f = function (f) {
		var b = this, g = G(arguments)
		if (g.u) {
			return b.GetFixtureList()
		}
		f = b.CreateFixture(f)
		return f
	} 