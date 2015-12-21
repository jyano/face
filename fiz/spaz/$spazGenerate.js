w.BMP = w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.BAL = w.BALL = function (x, y, r, c) {
	var w = this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BOX = function (x, y, wd, ht, c) {
	var w = this, g = G(arguments), b, i, o
	b = w.box(x, y, wd, ht)
	b.lD(2)
	if (g.n || g.m) {
		b.mS()
	}
	if (g.p || g.m) {
		b.mBu()
	}
	i = $rGx(wd, ht, oO('c', c || 'y'))
	i.XY(g.f, g.s)
	w.st.A(i)
	b.bS2(i)
	return b
}//w.REC= w.rect = w.rectCol  =
w.BRK = w.BRICK = function (x, y, wd, ht, col) {
	var w = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht)
			.bS2(
			$rGx(wd, ht, col).XY(x, y)
	).lD(2)
}//w.rSt = w.recStat = w.rectStat =w.rSt = w.recStat = w.rectStat = 
w._BRICK_ = function (x, y, wd, ht, col) {
	var w = this
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht, '-').bS2(
			$rGx(wd, ht, col).XY(x, y).al(.5)
	).lD(2)
}//w.BRICKSENSOR =  w.rectSensor = w.rSn = w.recSen = 
w.POLY = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.D(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
	})
	return b
} //w.poly = w.verts = w.vs =
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
COL = function () {
	W(2)
	w.BUMP(100, 200, 25)
	w.BRICK(700, 200, 25)
	w.BALL(100, 100, 25)
	w.BOX()
	w.BOX(100)
	w.BOX(700, 300)
	b = w.BOX(700, 300, 25)
	w.BOX(700, 300, 25)
	w.BOX(700, 300, 25, 25)
	w.BUMP(100, 200, 25, 'r')
	w.BRICK(700, 200, 25, 'r')
	w.BALL(100, 100, 25, 'r')
	w.BOX(700, 100, 25, 'r')
}
b.CF = b.GFL = b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
}
w.C = function (color) {
	$(this.stage.canvas).C(color)
	return this
}
w.BAL = w.BALL = function (x, y, radius, color) {
	var wd = this.s.W(), ht = this.s.H()
	x = N(x) ? x : parseInt(Math.random() * (wd - 100)) + 60
	y = N(y) ? y : 50
	radius = N(radius) ? radius : _.random(14) + 8
	return this.ball(x, y, radius).lD(2)
			.bindSprite2(
			this.s.cir(x, y, radius, color)
	)
}
w.BOX = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).lD(2)
}
w.BRICK = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brick(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y)
	).lD(2)
}
b.rectSensor = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var rect = $rF(wd, ht, x, y)
	rect.isSensor = true
	var r = cjs.rect(wd, ht, x, y).XY(b.X(), b.Y())
			.al(.3)
	w.st.A(r)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	var f = b.f(rect)
	f.sprite = r
	return f
}
function rand() {
	w.rnRecs = w.randRects = function () {
		var that = this
		_.t(30, function (i) {
			that.BRICK(
					M.r() * 1100 + 20,
					M.r() * 150 + 40,
					M.r() * 30 + 15,
					M.r() * 30 + 15
			).K('rR randomRect')
		})
		return this
	}
	w.rnF = w.randFx = function () {
		return this.dynamic(M.r() * 1000, 100,
				b2d.randomFixture())
	}
	w.random = w.addRandomBodies = function (howMany) {
		var w = this
		_.t(howMany || 10, function () {
			w.addRandomBody()
		})
		return w
	}
	w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.BALL(100 + (i * 8), 50, 10)
		})
		return w
	}
}
function fixtParse() {
	w.A = function (bD, fD) {
		var b = this.CreateBody(bD)
		if (fD) {
			A(fD) ? _.e(b2d.fixtParse(fD), function (fd) {
				b.f(fd)
			}) :
					b.f(fD)
		}
		return b
	}
	w.D = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($dB(x, y), fD)
	}
	w.S = function (x, y, fD) {
		var body
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		return this.A($sB(x, y), fD)
	}
}
b._f = function (f, c) {
	var b = this, g = G(arguments), o
	f = b.CF(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.], fD, [.,.] ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				} //class not col  ???
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	else if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	} //  [ [],[],fD,4,[] ]
	/////////////////////////////////
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	} else if (g.L == 1 || g.L == 3) {
		cir()
	} else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD($cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
//recs
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
TREC = function () {
	W()
	b = w.CreateBody($bD(300, 400))
	//b.rec('r', 100,400, 400,200,33)
	b.f(30, 40, 20)
	b.f(30, 40) //nothing??
	// b.f([[20, 165, -50, -50, 45]])
	//b.f(20, 165, -50, -50, 45)
	w.D(300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
}
b.rec = b.REC = function (c, W, H, x, y, a) {
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	//if (g.OO_) {g.e(function (g) {b.rec(g) }); return b }
	//if (g.A) {return $a(b, 'rec', g)}
	if (g.O) {
		o = g.f
	}
	else {
		//if (N(g.f)) { g.ush('z') 
		o = {c: g.f, w: g.s, h: g.t, x: g.fo, y: g.fi, rt: g.si}
	}
	//$df.oDef(o)
	//o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().oB(o))
	//if (o.s || g.n) {fD.isSensor = true; o.al = N(o.al, 0.8)}
	//fD.d(   o.d || .5  )
	f = b.f(fD)
	//f.K(o)
	/*
	 if (o.c !== 0) {
	 // f.g=w.g.h().rec(o)
	 if (g.p) { f.g = w.g.h().rec(o) }
	 //  f.g= w.g.h().rec(o) //this for but: (does something important)
	 else {
	 f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
	 f.bS(f.g)
	 }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
	 // f.bS(f.g)
	
	
	 }*/
	return f
}
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
w.rect = function (x, y, wd, ht, color) {
	var that = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.box(x, y, wd, ht).bindSprite2(
			h = cjs.rect(wd, ht, color).XY(x, y).a2(that.s)
	).linDamp(2)
}
w.rectSensor = function (x, y, wd, ht, color) {
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	color = oO('c', color || $r())
	return this.brickSensor(x, y, wd, ht).bindSprite2(
			cjs.rect(wd, ht, color).XY(x, y).opacity(.5)
	).linDamp(2)
}
function pol() {
	b._pol = function (v, c, i) {
		var b = this,
				newFs, spr
		newFs = b.sepNew(v, withF)
		if (i) {
			spr = w.gx.h()
			spr.bV({v: v})
			b.bS(spr)
		}
		return newFs
		function withF(f) {
			f.c(c || 'x')
			if (o.lf) {
				f.bS(w.st.h().lf(o).lt(o.v))
			}
			if (o.rf) {
				f.bS(w.st.h().rf(o).lt(o.v))
			}
		}
	}
	b.pol = function () {
		var b = this, w = b.W(), g = G(arguments), o
		var newFs
		if (g.u) {
			return b
		}
		if (b2d.iB(g.f)) {
			g.f.fs(b);
			return b
		}
		//if passed [[ color and ]] verts:
		o = S(g.f) && gpc.iP(g.s) ? {c: g.f, v: g.s} :
				gpc.iP(g.f) ? {v: g.f} :
						b2d.iF(g.f) ? {v: g.f.vs()} :
							// pass in  [[],[],[]]   or  ['r',[],[],[]]
								g.A && S(g.f[0]) ? {c: g.f[0], v: _.r(g.f)} : g.A ? {v: g.f} :
										g.O ? g.f : g.O_ ? {v: g} : //pass in [],[]
												g.t ? {c: g.f, v: g.r} : // pass in 'r', [], []
												{c: g.f, v: g.s}   //pass in  {c:'r', v:[[],[],[]]}
		_oo = o
		$df.h(o)
		o.i = o.i || o.bf
		//$l('check _o');
		_o = o
		newFs = b.sepNew(o.v, function (f) {
			f.set(o)
			f.c(o.c, o.C, o.l)
			if (o.lf) {
				f.bS(w.st.h().lf(o).lt(o.v))
			}
			if (o.rf) {
				f.bS(w.st.h().rf(o).lt(o.v))
			}
		})
		if (o.i) {
			__h = w.gx.h().bV(o)
			b.bS(__h)
		}
		return newFs
	}
	b.sep = function (verts, scale) {
		var body = this
		if (!O(verts)) {
			alert('b.sep in spazPol.js says: o.v must be object');
			return
		}
		if (gpc.iP(verts)) {
			verts = verts.vs()
		}
		//needs array of verts.. or one vert (which is converted here to arr)
		_.e(O(verts[0][0]) ? verts : [verts], function (v) {
			b2d.sep(body, v, scale)
		})  //  'sep' each of the verts onto the body
		return this
	}
	b.sepNew = function (vs, fn) {
		//this proxies to b.sep.. but has two advantages
		//- it returns NEW fixtures formed in an array
		//- if u pass in a function, then it loops those fxs
		// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
		var n = this.n(),
				b = this.sep(vs),
				numNewFs = b.n() - n,
				newFs = _.f(b.fs(), numNewFs)
		if (F(fn)) {
			_.e(newFs, fn)
		}
		return newFs
		//return newFs[1]? newFs: newFs[0]
	}
	w.pol = function () {
		var w = this, g = G(arguments), b, o
		if (g.A) {
			$l('w.pol g.A')
			return $a(w, 'pol', g.f)
		}
		if (g.OO) {
			$l('w.pol g.OO')
			g.e(function (g) {
				w.pol(g)
			})
			return w
		}
		// if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
		if (g.N_ && N(g.s) && O(g.t)) {
			$l('w.pol g.N_ && N(g.s) && O(g.t)')
			b = w.D(g.f, g.s) // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
			_.e(g.t, function (p) {
				b.pol({v: p})
			})
			return g.m ? M.p(b) : b
		}
		$l('w.pol !(  g.N_ && N(g.s) && O(g.t)) ')
		o = g.O ? g.f :
				N(g.f) ? {x: g.f, y: g.s, p: g.t}
						: {p: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.p = M.p(o.p)
		b = w.D(o.x, o.y)
		if (!g.p) {
			$l('!g.p')
			if (b2d.iB(o.p)) {
				$l('w.pol b2d.iB(o.p)')
				o.p = M.p(o.p)
			}
			else {
				$l('w.pol ! (b2d.iB(o.p))')
			}
			_p = o.p
			$l('pre b')
			b.pol(o.p)
			$l('post b')
			if (g.m) {
				$l('g.m')
				b = M.p(b)
			}
			else {
				$l('!g.m')
			}
			return b
		}
		if (o.rg) {
			$l('o.rg')
			o.p.ps(o.rg, function (p) {
				b.pol(o)
			})
		}
		else {
			$l('!o.rg')
			o.p.ps(function (p) {
				b.pol(o)
			})
		}
		return b.f()
	}
}
b.__f = function (f) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GetFixtureList()
	}
	f = b.CreateFixture(f)
	return f
}
b._f = function (f, c) {
	var b = this, g = G(arguments)
	// if(g.u){ return b.GetFixtureList() }
	// f = b.CreateFixture(f)
	f = b.__f(f)
	if (c) {
		f.C(c)
	}
	return f
}
b.f = function () {
	var b = this, g = G(arguments), o;
	if (g.u) {
		return b._f()
	}
	if (g.S_) {
		g.L--
	}
	;
	if (g._S) {
		g.L--
	}
	//PASS IN AN ARRAY OF FIXTS (AND OPTIONALLY A COLOR)
	if (g.A) {
		g.e0(function (gg) {
			b.ap('f', g.G(gg))
		})
	}//   [ [],[],fD,4,[] ]
	else if (g.SA) {
		g.e1(function (f) {//       'c',  [ [.,.],[.,.],fD ]
			if (b2d.iFD(f)) {
				b._f(f, g.f)
			}
			else {
				if (!S(_.f(f))) {
					f.unshift(g.f)
				}
				b2d.iFD(f[1]) ? b._f(f[1], f[0]) : $a(b, 'f', f)
			}
		})
	}
	//PASS IN A FIXTURE DEF (AND OPTINALLY A COLOR)
	else if (b2d.iFD(g.f)) {
		return b._f(g.f)
	}//(fD)
	else if (g.S_ && b2d.iFD(g.s)) {
		b._f(g.s, g.f)
	}//('c', fD)
	//PASS IN NUMBERS OR VERTS, TO MAKE JUST ONE FIXT
	else if (O(g.s)) {
		pol()
	}
	else if (g.L == 1 || g.L == 3) {
		cir()
	}
	else {
		rec()
	}
	function cir() {
		o = {c: g.f, r: g.s, x: g.t, y: g[3]}
		if (g.n) {
			o.s = 1
		}
		b.cir(o)
	}
	
	function rec() {
		o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}
		if (g.n) {
			o.s = 1
		}
		b.rec(o).C(o.c)  // $a(b,'rec', g.g)
	}
	
	function pol() {
		b.pol(g.S_ ? {c: g.f, v: g.r} : {v: g})
		if (g.n) {
			b.sen(1)
		}  //if (g.n) {o.s=1}
	}
	
	return b.d(1)
}
b.f = function (fs) {
	return U(fs) ? this.GFL() :
			this.CreateFixture(fs)
}
b.REC = b.rect = function (wd, ht, x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var b = this
	var f = b.f($rF(wd, ht, x, y))
	var r = cjs.rect2(
			wd, ht, x, y).XY(b.X(), b.Y())
	w.s.A(r)
	cjs.tick(function () {
		r.rt(b.rt())
		r.XY(b.X(), b.Y())
	})
	return f
}
b.St = b.S = b.stg = function () {
	return this.W().s
}
b.$h = function () {
	$l('b.$h')
	var h = $H()
	this.bS(h)
	h.c.apply(h, G(arguments))
	return h
}
b.c = b.C = function (c) {
	this.fs(function (f) {
		f.C(c)
	})
	this._col = c
	return this
}
b.cir = function () {
	var b = this,
			g = G(arguments), o = g.f, fD, f
	polyMorph()
	fD = b2d.fD(b2d.cH(o.r), o.x, o.y)
	fD.sen(o.s || g.n || false)
	f = b.f(fD.DBF(o.d, o.b, o.f)).K(o.k || 'cir')
	return o.c === 0 ? f : f.cSp(o)
	function polyMorph() {
		//if passed array, it assumes it is arguments for ONE cir
		if (g.A) {
			return b.cir.apply(b, g.f)
		}
		//if you pass at least two objects, it makes multiple cirs and passes back b
		if (O(g.s)) {
			g.e(function (c) {
				b.cir(c)
			});
			return b
		}
		// can pass obj
		// can pass: c C [r] [x] [y]
		// can pass: c [r] [x] [y]
		// can pass: [r] [x] [y] [c] [C]
		o = g.O ? g.f
				: S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
				: S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
				: {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}
		return cirDfs(o)
	}
}
//recs
b.dr = function (dr) {
	alert('b.dr')
	if (U(dr)) {
		return this.direction
	}
	this.direction = dr;
	return this
}
b.rec = function (c, W, H, x, y, a) {
	$l('rec')
	var b = this, w = b.W(), g = G(arguments, 'k'),
			o, fD, p, f
	if (g.OO_) {
		g.e(function (g) {
			b.rec(g)
		});
		return b
	}
	if (g.A) {
		return $a(b, 'rec', g)
	}
	if (g.O) {
		o = g.f
	}
	else {
		if (N(g.f)) {
			g.ush('z')
		}
		o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}
	}
	$df.oDef(o)
	o.k = o.k || g.k
	fD = b2d.fD(b2d.pH().box(o))
	if (o.s || g.n) {
		fD.isSensor = true;
		o.al = N(o.al, 0.8)
	}
	fD.d(o.d || .5)
	f = b.f(fD)
	f.K(o)
	/*
	 if (o.c !== 0) {
	 // f.g=w.g.h().rec(o)
	 if (g.p) { f.g = w.g.h().rec(o) }
	 //  f.g= w.g.h().rec(o) //this for but: (does something important)
	 else {
	 f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
	 f.bS(f.g)
	 }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
	 // f.bS(f.g)
	
	
	 }*/
	return f
}