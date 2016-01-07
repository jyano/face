h.dc = function () {
	var h = this, gx = h.graphics, g = G(arguments)
	h.cp() // ?
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	gx._dc.apply(gx, g)
	return h
}
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (g.A) {
		return $a(h, 'cir', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} : g.N_ ? {
						r: g.f,
						c: g.s,
						C: g.t,
						l: g.fo
					} : {c: g.f, C: g.s, l: g.t}
	//o.c = o.c || 'w'; o.C = o.C || 'z'; o.l = N(o.l, 4)
	h.c(o)
	function replaced() {
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
	}
	
	if (o.bf) {
		if (N(o.bf)) {
			o.bm = 'me'
		}
		if (F(Q)) { //async
			h.bf(o.bf, function () {
				h.dc(o)
			})
		}
		else { //sync
			o.tf = o.tf || null;
			h.bf(o.bf, o.tf).dc(o)
		}
	}
	else {
		h.dc(o)
	}
	h.alpha = N(o.al, 1)
	return h
}
cj.cir = function () {
	var g = G(arguments), o
	var h = $Sh()
	if (g.p) {
		h.drag()
	}
	o = g.O ? g.f :
			N(g.f) && N(g.s) && N(g.t) ?
			{r: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
					N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g.fo, l: g.fi} :
							g.N_ ? {r: g.f, c: g.s, C: g.t, l: g.fo} :
							{c: g.f, C: g.s, l: g.t}
	h.cir(o.r, o.c, o.C, o.l)
	h.regX = -N(o.x, 0)
	h.regY = -N(o.y, 0)
	h.alpha = N(o.al, 1)
	return h
	// old: cir0: x, y, rad, fCol, sCol ( h = $Sh().XY(N(g.f, 0), N(g.s, 0)) )
	//h.f(fCol || 'z')
	//var fCol = g.fo || 'w'
	//var sCol = g.fi || 'z'
	//if (sCol) {	 h.s(sCol) }
	//h.cir(0, 0, rad)
	//if (g.O) {	 var cir = g.f
	//return cjs.cir0(cir.x, cir.y, cir.r, cir.fC, cir.sC)	 }
	//h.cir(x, y, r, fCol, sCol)
}
$Cir = function () {
	var g = G(arguments), o
	o = S(g.f) ?
	{c: g.f, x: g.s, y: g.t, r: g.fo} :
	{x: g.f, y: g.s, r: g.t}
	return $H(o.c, o.x, o.y).dc(o.r)
}
$Sh = $H = $h = function (x) {
	var g = G(arguments), o
	var h = new cjs.Shape(cjs.iH(x) ? x.graphics : x)
	//pass in your own obj to use 'o.i/o.bf'
	o = g.O ? g.f : // or 'o.lf' or 'o.rf'
			N(g.fo) ? {x: g.f, y: g.s, C: g.t, lW: g.fo} : //x,y C-l
					N(g.f) ? {x: g.f, y: g.s, c: g.t, C: g.fo, lW: g.fi} : //x,y c-C-l
							N(g.s) ? {C: g.f, lW: g.s} : // C-l
							{c: g.f, C: g.s, lW: g.t} // c-C-l
	h.XY(N(o.x, 0), N(o.y, 0))
	//h.c(o.c || 'z', o.C || 'w', o.lW || 8)
	if (o.c) {
		h.c(o.c)
	}
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.lW)) {
		h.l(o.lW)
	}
	if (g.p) {
		h.dg()
	}
	return h
}
h.cirs = function () {
	var h = this, g = G(arguments)
	_.e(g.A ? g.f : g, function (c) {
		
		//h.es()
		h.s()
		h.dc(c)
	})
	return this
}
ct.dc = function (x, y, r, f, s, width, opt) {
	return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
}
ct.cir = function () {
	var h = this.h()
	return h.cir.apply(h, arguments)
}
ct.circle = function (x, y, rad, color) {
	this.A(cjs.cir(x, y, rad, color))
	return this
}
ct.cir = function () {
	var ct = this, g = G(arguments), h = this.h(), o
	o = g.O ? g.f :
			N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
			{r: g.f, c: g.s}
	h.c(o.c)
	h._dc(o.x, o.y, o.r)
	return h
}
CIR5 = HCR = function () {
	$St()
	gx = $Gx()
	$Sh(gx).XY(300, 100).a2(st)
	gx._f('p')._s('w').ss(10)
			._dc(100).dc(100, 0, 100)
	gx._s('b')._f('g').dc(0, 300, 100)
	h = $Sh().f('b').s('y').lW(30)
			.cir(100, 100, 100).cir(400, 400, 40, 'r')
			.a2(st)
}
CIR6 = ROTCIRS = function () {
	ct = $Ct().a2($St(1000, '+')).A(
			$H(100, 100).f('r').dc(30).dc(30, 20).dc(250, 250)
	)
	$t(function (e) {
		ct.rt(ct.rt() + 3)
	})
}
CIR8 = function () {
	$St()
	s.Sh().f('b').s('g').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
			[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
	s.Sh().f('b').s('g').cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}
CIR = function () {
	$Sh().a2($St(600)).f('r', 'y').lW(30)
			.dc(400, 400, 200)
			.dr(100, 0, 200, 200)
}
CIR1 = HDC = function () {
	$Sh().a2($St()).f('b').dc(100, 100, 100).f('y').dc(200, 100, 100)
}
CJCIR = function () {
	ct = $Ct().XY(0, 0).a2($St($.c(1000, 500)))
	h = $H().a2(ct).XY(0, 0).a2(ct).f('b').dc(400, 100, 10)
	ct.A(cjs.cir({r: 100, c: 'r', C: 'g', l: 50, oX: 100}).XY(100, 200))
}
CIR2 = function () {
	ct = $Ct().a2($St(600))
	ct.A(
			cjs.cir(100, 100).f('y').dc(0, 0, 4)
	)
	ct.A(cjs.cir(80, 300, 300, 'g', 'y', 30))
	ct.A(cjs.cir(80, 300, 'g', 'y', 30))
}
CIR3 = CJSCIR = function () {
	ct = $Ct().a2($St(600))
	ct.A(
			cjs.cir(400, 300).f('r').dc(28, 40, 40)
	)
	_.in(2, function () {
		ct.A(
				cjs.cir(80, 300, 300, 'g', 'y', 30)
		)
	})
	$.bt('more', function () {
		h = $H().a2(ct)
		h.f('o').dc(100, 300, 105) ///x, r , r = 50
		h.f('z').dc(100, 300)
		h.f('r').dc(100, 300, 50)
		h.f('b').dc(100, 300) //r, x=0, y=0
		h.f('r').dc(100)
	})
}
CIR4 = DRG = GOB = function () {
	st = $St() //good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		gx._bf(img)
		gx._dc({x: 100, y: 200, r: 200})
		gx.C('R')._dc({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
CIRS = function () {
	$H().f('b').a2($St()).cirs(
			[200, 200, 50],
			[400, 200, 50],
			[600, 200, 50]
	)
}
CIRZS = function () {
	$St()
	h.c('b', 'r', 10).XY(-100, -100)
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10]//,
		//lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		//ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2]//,
		//	rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		//rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h()//.lf({})
			.dc()
			.c('r', 'b', 10)//.lf({y2: 400})
			.dc(300, 300, 50)
	return
}
SIR = function () {
	$.C('b')
	$s({
		body: {fZ: 40, c: 'o', display: 'flex', 'flex-wrap': 'wrap'},
		canvas: {M: 20}
	})
	st = $St($.c(600, 300)[0])
	st.A($Tx('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = $St($.c(600, 300)[0]).t()
	st2.A($Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = $St($.c(600, 300)[0]).t()
	st1.A($Tx('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A(
			$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	)
	st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
	h = $Sh().a2(st)
	gx = h.graphics.FS()
	h.dc()
	h.dc(36)
	h.cir(18, 'o')
	h.dc(200, 100)
	h.cir(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	st2 = $St($.c(600, 300)[0]).t()
	st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
	st1 = $St($.c(600, 300)[0]).t()
	st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = $St($.c(600, 300)[0]).t()
	st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
}
BOWL = function () {
	$St()
	ct = container = c = $Ct().a2(st)
	plX = st.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
	//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circ = cjs.cir(plX, plY, plR, 'yellow')
	container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: r, m: m,
			f: f, vX: 0, vY: 0, player: false
		}
	}
	_.t(nRng, function (r) {
		var crR = 0, ang = 0, rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.t(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
				y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			ct.A(cjs.cir(10, 'z').XY(x, y))
		})
	})
}
CONNECT = function () {
	z();//m$$('location=location')
	stage = $St(1000)
	pink = cjs.cir(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
	stage.A(pink)
	container = new createjs.Container()
	stage.A(container)
	green = cjs.cir(200, 'green', 'purple').XY(320, 300)//.rXY(100)
	yellow = cjs.cir(100, 'yellow', 'purple').XY(250)
	red = cjs.cir(40, 'red', 'purple').XY(200, 100)
	orange = cjs.cir(20, 'orange', 'purple').XY(300)
	container.A(green, yellow, red, orange)
	LS(yellow, container)
	SL(green)
	SL(green, pink)
	SL(yellow)
	SL(red, container)
	SL(orange, red)
}
FAIL = SKETCH = function () {
	s = cjs.stage(500, 500).A()
	s.can.P('a').XY(300)
	s.bm('me', 0.2, function (bm) {
	})
	s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
	s.circle(100, 100, 10, 'red', 'yellow')
			.circle(10, 100, 100, 'black', 'purple')
			.circle(100, 10, 100, 'blue', 'red')
			.circle(150, 150, 120, 'red', 'blue')
			.circle(30, 'brown', 'gray')
	St()
	ct = s.ct(1000, 300).drag()
	ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
	h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
	h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	st.u()
	St()
	ct = s.ct(600, 300)
	ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
	ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
	h = ct.Sh()
	h.graphics.FS()
	h.rec({
		w: 100, h: 200, a: 20,
		c: 'b', C: 'w', l: 20, bm: 1
	}).X(100)
	_.in(8, function () {
		h.X(0)
	}) //notice how gradient is seen behind the bm!!!
}//D 
SHPEZ8 = function () {//C- only PLAY!?
	St()
	s.can.P('a').XY(200)
	s.bm('me')
	s.bm('me', 0.2, function (bm) {
	})
	h = $h().cir()
	s.A(
			$h().cir(100, 'blue', 'green').XY(100, 100).drag()
	)
	s.h().cir(100, 100, 10, 'red', 'yellow')
	s.h().cir(10, 100, 100, 'black', 'purple')
	s.h().cir(100, 10, 100, 'blue', 'red')
	s.h().cir(150, 150, 120, 'red', 'blue')
	s.h().cir(30, 'brown', 'gray')
	s.u()
}
SHPS8 = function () {
	z()
	s = stage = $St(500, 500)
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
	s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
	s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
	s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
	s.Sh().cir(150, 150, 120, 'c', 'd')
		//.fn(SL)
			.cir(30, 'x', 'x')
}
SHPES9 = function () {
	z()
	s = stage = St(500, 500).a()
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
	//s.bm('me', function(bm){ bm.sXY(.2)   })
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
}