FIXTS = function () {
	w = b2d.W({g: 0})
	b = w.dyn(300, 300)
	b.CIRC('o', 20)
	b.CIRC('b', 100, 140, 0)
	b.CIRC('r', 20, 100, 100)
	b.RECT('g', 100, 100)
	b.RECT('y', 100, 100, 50, 50)
	b.RECT('p', 100, 100, -150, -150, 45)
	b2 = w.B(800, 300)
	b2.fixt(20).C('r')   //circ
	b2.fixt(20, 100, 100).C('b')  //circ
	b2.fixt(100, 50)   //rect
	b2.fixt(100, 50, -100, -100)   //rect
	b2.fixt(100, 50, -100, 0, 25)   //rect
	b2.fixt([
		[-100, 0],
		[0, -100],
		[100, 40]
	])   //poly
	b3 = w.B(1000, 300)
	b3.fixt(b2d.fixt(20)) //circ
	b3.fixt(b2d.fixt(20, 100, 100)) //circ
	b3.fixt(b2d.fixt(100, 50)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, -100)) //rect
	b3.fixt(b2d.fixt(100, 50, -100, 0, 25)) //rect
	b3.fixt(b2d.fixt([-100, 0], [0, -100], [100, 40])).C('g') //poly
	w.B(400, 500, 'o', [
		['w', [30, 30], [20, 40], [10, 10]]
	])
}
DIF = function () {
	w = b2d.W()
	b = w.S(140, 140, 100, 100).rot(20).DIFF(
			w.S(100, 100, 100, 100).rot(45), '-')
	b3 = w.S(300, 400, 'w', 100, 100)
	b3.sub(//does not keep color!
			w.B(300, 400, 'r', [-100, 10], [-80, -40], [0, -200], [100, 0])
	)
	w.S(450, 300, 'w', 100, 100).minusPolyCirc(550, 300, 100, 20)
	fs = w.S(600, 380, [
		['r', [-100, 10], [-80, -40], [0, -200], [100, 0]],
		['b', 40, 70, 20, -20],
		['o', 40, 70, -20, 20]
	]).rot(-20).fixts()
	w.S(720, 400).sep(
			w.S(600, 400).fixt(b2d.poly(100, 100)).minus(fs[0], fs[1], fs[2]))
	b2 = w.S(830, 300)
	b2.poly(100, 100)
	b2.poly(100, 100, 0, 0, 45)
	b2.DIF(w.S(930, 400, 200, 200), '-')
	///
	///
	setTimeout(function () {
		b.dyn();
		b2.dyn()
	}, 3000)
}
CIRCTOPOLY = function () {
	w = b2d.W()
	b = w.S(300, 300, 50)
	w.B(600, 400).poly(b2d.polyCirc(b.fixt().rad(), 10))
}
BODYEACH = function () {
	w = b2d.mW()//works
	b = w.B(100, 100, [
		[40],
		[100, 200, 100],
		[50, 200],
		[200, 200, 300, 400]
	])
	b.each(function (f) { //bind to this.. when u have time
		//f.SetSensor(true) //works
		// f.remove()
		// f.K('destroy')
		$l('shape type: ' + f.GetShape().m_type)
	})
}
GUYINBED = function () {
	w = b2d.W()
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	w.B(400, 100, 'y', guyInBed)
	w.B(100, 100, 'r', [
		[guyInBed]
	])
	w.B(100, 100, 'b', [
		[guyInBed],
		['w', dick]
	])
	w.B(400, 100, guyInBed)
}
COLSENCLAS = function () {
	w = b2d.W()
	b = w.B(300, 300, 'r', [
		[40],
		['b', 30, 100, 'arm', '-']
	]) //BEAUTIFUL !!!
	w.beg(function (cx) {
		if (cx.with('arm')) {
			b.I(50, 50)
		}
		if (cx.with('arm', w.right)) {
			w.C('w')
		}
	})
}
FDOT = function () {
	w = b2d.W()
	b1 = w.S(400, 400, 50)
	f1 = b1.fixt()
	f1.dot()
	b2 = w.S(800, 400, 80, 80)
	f2 = b2.fixt()
	f2.dot()
	f2.C('p')
	verts = [
		[-100, 0],
		[0, 100],
		[100, -20]
	]
	b = w.S(200, 200, [verts]).rot(25)
	f = b.fixt()
	w.S(400, 200, [f.verts()])
	w.S(600, 200, [f.verts('+')])
	v = f.wVerts()
	_.each(v, function (v) {
		w.dot(v)
	})
	//need a class the represents an array of verts.. is it the gPoly ??? !!!! no cant be neg
	//its a VertsArr
	b = w.S(100, 500, 50, 50)
	f = b.fixt()
	fh = f.shp()
	h = b2d.polyH(100, 50)
	f.shp(h)
}
TESTPOLYF = function () {
	w = b2d.W();
	$l('testpolyf')
	w.S(700, 200, 'o', [
		b2d.circ(40),
		b2d.circ(5).bits(1, 2), //cat is 1, but will only collide with 2's
		b2d.circ(10, 100, 100, '-'),
		['w', b2d.circ(10, 100, -100)],
		b2d.poly(10, 300, '-'), //sets as sensor
		['b', b2d.poly(300, 10)],
		['w', [100, 0], [150, -100], [200, 20]],
		[
			[200, 0],
			[250, -100],
			[300, 20],
			'arr'
		],
		['p', 50, 'pink']])
	b = w.S(300, 400, 'r', [
		b2d.poly(200, 100),
		['g', b2d.circ(40, 100, 100).K('excited')],
		[5, 100, 200, 0, 'orgasmic excited']
	])
	//apparently b.fixt is LIFO
	f = b.fixt().K('happy').dot('b')
	$l('f is f: ' + f.is(f))
	$l('f is happy: ' + f.is('happy'))
	$l('f.next is excited: ' + f.next().is('excited'))
	$l('f is orgasmic: ' + f.is('orgasmic'))
	w.db()
}
BH = function () {
	W()
	w.ball()
	b = w.S(400, 300)
	b.H('o', 50)
	b.H('r', 50, 50)
	b.H('b', 50, 50, 50)
	b.H('g', 50, 50, 50, 50)
	b.H('w', 50, 50, 50, 50, 50)
	b.H('u', [-100, 0], [0, -50], [200, -10])
	b2 = w.D(600, 300).H([
		['o', 50],
		['r', 50, 50],
		['b', 50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
	b3 = w.D(600, 300).H('y', [
		[50],
		[50, 50],
		[50, 50, 50],
		['g', 50, 50, 50, 50],
		['w', 50, 50, 50, 50, 50],
		['u', [-100, 0], [0, -50], [200, -10]]
	])
}
MASS = function () {
	w = b2d.W({g: 0}).db()
	y = w.B(400, 200, 'y', 50).den(.1).lV(10)
	r = w.B(200, 500, 'r', 40).den(1)
	b = w.B(200, 500, 'b', 25).den(100)
	p = w.B(800, 200, 'p', 10).den(1000).lV(-10)
}
BOX2D = function () {
	w = b2d.W()
	b2d.somePolyFixt = [[[-100, 0], [0, -100], [100, 0], [60, 50]]]
	b2d.compoundShape = [[50, 10], [60, 30, 0, 0, 40], [120, 30, 0, 0, 29], [60, 10, 0, 50, 60], [84, 10, 15, 80, -120]]
	b2d.compoundShape2 = [[50, 10], [20, 20], [20, 10, 0, 0, 10], [40, 10, 50, 0, 45], [84, 10, 15, 80, -120], [60, 10, 0, 50, 60]]
	b2d.compoundStar = [
		[10, 10], [20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	w.B(100, 100, b2d.somePolyFixt)
	w.B(200, 100, b2d.compoundShape)
	w.B(300, 100, b2d.compoundShape2)
	w.B(400, 100, b2d.compoundStar)
	w.S(200, 200, 'w', 80, 140, 30, 140, 25)
	w.S(500, 400, 'w', [[20, 20, -100, 50, 60], [100, 120, 0, 0, 100], [100, 20], [10, 300]])
	w.B(400, 400, [['b', 30], ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	w.S(100, 200, 'w', 50, 50)
	w.B(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
	w.me(400, 200)
	w.me(400, 300)
	w.me(400, 400)
	//w.addTenBalls() ..not color yet
}
CUPS = function (o) {
	W(10)
	cup = [
		[20, 20],
		[100, 40, 0, 40, 0],
		[200, 40, -80, -40, 260],
		[200, 40, 80, -40, -80]
	]
	cup2 = [[100, 40, 0, 40, 0], ['g', 200, 40, -80, -40, 260], ['g', 200, 40, 80, -40, -80], [100]]
	cup3 = [[100, 40, 0, 40, 0], [200, 40, -80, -40, 260], [200, 40, 80, -40, -80], [34, -80, -130], [34, 80, -130]]
	w.B(280, 500, 'r', cup)
	b = w.B(280, 500, 'r', cup)
	w.B(600, 500, 'b', cup2)
	w.B(900, 500, 'y', cup3)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.B(100, 100, 'o', 30)
	w.S(150, 220, 'u', 50, 100)
//W.fluffy()
}
MAZE = function () {
	w = b2d.W()
	maze = [
		[1, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 0, 1, 1, 1],
		[1, 0, 1, 0, 1, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]]
	y = w.ship()
	w.grid(maze, 100, 200, 20, 30)
	w.S(400, 200, 10)
}
GPC = function () {
	canvas = can = $.can('y', 400, 500).A()
	context = ctx = can.ctx()
	poly1 = Math.poly([[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]])
	poly2 = Math.poly([[131, 84], [224, 110], [174, 180], [120, 136], [60, 167],])
	reset = (function self() {
		ctx.clearRect(0, 0, 400, 400)
		ctx.drawPolys(poly1, 'b', 0, -30)
				.drawPolys(poly2, 'r', 0, -30)
		return self
	}())
	button = function (name, poly) {
		$.button(name, function (e) {
			reset()
			ctx.drawPolys(poly, 'g', 0, 150)
		}).A()
	}
	button('difference', poly1.difference(poly2))
	button('intersection', poly1.intersection(poly2))
	button('union', poly1.union(poly2))
	button('xor', poly1.xor(poly2))
}
PINS = function () {
	w = b2d.W().db()//=SEPARATOR=COLORCONC
	pin = [['o', [-20, 20], [0, -80], [20, 20], [0, -40]], ['w', 8, 0, -75], ['w', 8, -20, 20], ['w', 8, 20, 20]]
	_.times(15, function (i) {
		w.B(100 + (i * 60), 300, pin)
	})
	w.ship()
}
TERREASEL = function () {
	z()
	s = stage = cjs.stg(1600, 600).A()
	h = s.shape()
	h.f('b').dc(200, 200, 10)
	h2 = s.shape().X(700)
	h2.f('b').dc(0, 0, 10)
	tile = function (i, j) {
		return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
	}   // lower left //upper left//upper right//lower right
	draw = function () {
		terr = []
		_.times(13, function (i) {
			_.times(8, function (j) {
				terr.push(tile(i * 50, j * 50))
			})
		})
		h.drawPolygons(terr, 'b', 'r')
	};
	draw()
	t = Math.poly(terr[101])
	doExplosion = function (e) {
		v = V(e.stageX, e.stageY)
		exP = circ(v, 100)
		h.drawPolygon(exP, 'z')
		c = Math.poly(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
		// explosion polygon. This should be optimized in some way, checking only for terrain polygons
		// which are actually affected by the explosion.
		// Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
		// difference is calculated.
		iX = c.intersection(t)
		h2.drawPolygon(iX.verts())
		for (var i = terr.length - 1; i >= 0; i--) {
			totalArea = 0
		}
	} // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = [];
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	} // listeners: basically we destroy the terrain with a mouse click or a mouse drag
	// stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
	// stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
	stage.on('click', doExplosion)
	vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
	h.drawPolygon(vv, 'z')
	vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
	h.drawPolygon(vvv, 'z')
}
TERR = function () {
	w = b2d.W()
	sep = b2d.separator()
	terr = []
	circ = function (v, rad, prec) {
		prec = N(prec) ? prec : 20
		arr = []
		ang = 2 * Math.PI / prec
		_.times(prec, function (i) {
			pX = v.x + rad * Math.cos(ang * i)
			pY = v.y + rad * Math.sin(ang * i)
			arr.push(V(pX, pY))
		})
		return arr
	}
	explosion = function (x, y) {
		var cir, bod
		cir = Math.poly(circ(V(x, y), 30, 5))
		bod = sep(circ(V(0, 0), 30, 5)).XY(x, y)
		return {cir: cir, bod: bod}
	}
	_.times(13, function (i) {
		_.times(8, function (j) {
			var bod = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
			terr.push({
				bod: bod,
				verts: bod.fixt().verts(),
				poly: Math.poly([
					V(i * 25 + 410, j * 25 + 210),
					V(i * 25 + 410, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 190),
					V(i * 25 + 430, j * 25 + 210)
				])
			})
		})
	})
	// w.dot(420,200); w.dot(410,210)
	t = terr[103]
	s = sep(
			t.bod.fixt().verts()
	).stat()//.XY(100,100)
	exp = explosion(740, 395)
	Math.poly(exp.cir)
	dif = t.poly.difference(exp.cir)
	t.bod.fixt().remove()
	bb = sep(t.bod, dif.verts()).stat().XY(0, 0)
	// setTimeout( function(){ t.bod.X(20) }, 2000)
}
POLYOPS = function () {
	w = b2d.W()
	p1 = Math.poly([[-50, 50], [-50, -50], [50, -50], [50, 50], [-45, 55]])
	p2 = Math.poly([[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]])
	w.S(300, 300).conc(p1)
	w.S(300, 300).conc(p2)
	w.B(500, 200).conc(p1.union(p2))
	w.B(500, 200).conc(p1.difference(p2))
	w.B(500, 200).conc(p1.intersection(p2))
	w.B(500, 200).conc(p1.xor(p2))
}
//need work
STAIRS = function () {
	w = b2d.W()
	w.S(0, 0, [
		[500, 500, 600, 100],
		[500, 400, 500, 100],
		[500, 300, 500, 100],
		[500, 350, 450, 100],
		[320, 400, 50, 600]])
}
NAMESPACE = function () {
// w.B(200,200,b2d.fixts('tri3'))
//w.B(200,200,b2d.fixts('c50'))
	b2d.fixts = {}
	b2d.fixts.tri3 = [[-100, 0], [0, -50], [400, 0]]
	b2d.fixts.c50 = [50]
}
FRICKY = function () {
	w = b2d.W()
	b2d.fricky = [[10, 10], [20, 40, 0, 0, 90, [1, 0, 0]], [20, 40, 0, 0, 180, [1, 0, 0]]]
	b2d.bouncy = [[10, 10], [20, 40, 0, 0, 90, [1, .9, 1]], [20, 40, 0, 0, 180, [1, .9, 1]]]
	b2d.massy = [[10, 10], [20, 40, 0, 0, 90, [2, .5, 1]], [20, 40, 0, 0, 180, [2, .5, 1]]]
	b2d.fluffy = [[10, 10], [20, 40, 0, 0, 90, [.1, .5, .1]], [20, 40, 0, 0, 180, [.1, .5, .1]]]
	w.S(600, 100, b2d.fricky)
	w.S(700, 100, b2d.bouncy)
	w.S(800, 100, b2d.massy)
	w.S(900, 100, b2d.fluffy)
}
MAKEWALLS = function () {
	makeWalls2 = [[10, 300, 20, 460], [990, 300, 20, 460], [250, 0, 400, 20], [730, 0, 400, 20], [250, 590, 400, 20], [730, 590, 400, 20]] //bas in the canvas size?
	makeWallsTiny = [[10, 300, 20, 600], [990, 300, 20, 600], [300, 0, 1200, 20], [300, 590, 1200, 20]]
	makeWallsFull = [[10, 300, 20, 1200], [990, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
	makeWallsLong = [[10, 300, 20, 1200], [1600, 300, 20, 1200], [300, 0, 3000, 20], [300, 590, 3000, 20]]
}

