CIR0 = ROTCIRS = function () {
	z()
	ct = $Ct().XY(150).a2($St(1000, '+'))
	h = $H().f('r').a2(ct)
	h.dc(30)
	h.dc(30, 20)
	h.dc(250, 250)
	h.XY(100, 100)
	T.on("tick", function (e) {
		ct.rotation += 3
	})
}
CIR1 = CJSCIR = function () {
	ct = $Ct().XY(0, 0).a2($St(1000, '+'))
	h = $H().a2(ct).XY(0, 0)
	ct.A(
			cjs.cir({
				r: 100,
				c: 'r', C: 'g', l: 50,
				oX: 100
			})//.XY(0,0)//.XY(300,400)
	)
	ct.A(
			cjs.cir(80, 300, 300, 'g', 'y', 30)
	)
	ct.A(
			h = cjs.cir(400, 300)
	)
	h.f('r').dc(28, 40, 40)
}
CIR2 = ONECIR = function () {
	z()
	ct = $Ct().XY(0, 0).a2($St(1000, '+'))
	h = $H().a2(ct).XY(0, 0)
	//x,y,r
	h.f('o')
			.dc(100, 300, 125)
	///x, r , r = 50
	h.f('z').dc(100, 300)
	h.f('r').dc(100, 300, 50)
	h.f('b').dc(100, 300)
	//r, x=0, y=0
	h.f('r').dc(100)
}
CIR3 = CIRCS8 = function () {
	CIRCTEST8 = function () {
		St()
		s.Sh().f('b').s('g') .cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
				[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
		s.Sh().f('b').s('g') .cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
				[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
	}//D better as wap
	St()
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c('*').dc(100, 200, 50).dc(100, 250, 50)
	h.c('***').dc(200, 200, 50).dc(200, 250, 50)
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10],
		lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2],
		rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h().lf({}).dc()
			.c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		s.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200}) 
		s.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200}) 
		s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40) 
	})//D
}
CIR4 = SIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	
	$.h1('SIR')
	
	st = $St($.c(600, 300)[0]) 
	
	st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = $St($.c(600, 300)[0]).t()
	st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = $St($.c(600, 300)[0]).t()
	st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
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
 