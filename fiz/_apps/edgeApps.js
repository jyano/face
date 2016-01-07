ASEDG = function () {
	W().C('z')
	w.edg(100, 500, 1000, 0)
	w.edg(50, 50, 100, 500)
	w.edg(0, 0, 1000, 100)
	w.D(410, 100, 'w', 30)
	// w.p(300,200,'standard')
}
HILLS = function () {
	W().P()
	w.edg(100, 100, 500, 300)
	w.edg(100, 200, 500, 400)
	w.edg(100, 300, 500, 500)
	w.edg(1000, 100, 600, 300)
	w.edg(1000, 200, 600, 400)
	w.edg(1000, 300, 600, 500)
	w.D(410, 100, 'r', 20)
}
CONEDGE = WORLDCLICK = WELDEDGE = function () {
	W([1200, 600, 2400, 600], {g: 10}).C('r')
	w.Y(450, 400)
	w.edgs([
		[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
	])
	x = w.edgAr([400, 400, 500, 200],
			[500, 200, 550, 600],
			[550, 600, 400, 400]).X(1200).track()
	w.D(700, 350, 'b', 20)
	w.D(700, 350, 'r', 20)
	w.D(700, 350, 'y', 20)
	w.$(function (x, y) {
		var v = w.sToW(x, y)
		w.S(v.x, v.y, 'z', [[10, 10, '-']])
	})
	// cjs.t(function(){$l(w.mx + ', ' + w.my) })
}
DRAWEDG1 = function () {
	W();
	var p1, p2, d, l
	w.p(400, 100);
	w.S(200, 200, 'r', 400, 20)
	w.$(function (v) {
		if (!p1) {
			p1 = v;
			return
		}
		if (!p2) {
			p2 = v
		} else {
			p1 = p2;
			p2 = v
		}
		w.edg(p1.x, p1.y, p2.x, p2.y).K('line')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
}

function more(){
	ASEDGE = function () {
		b2d.mW()
		w.edge(100, 500, 1000, 0)
		w.edge(50, 50, 100, 500)
		w.edge(0, 0, 1000, 100)
		w.ball(410, 100)
		w.player('standard')
	}
	HILLS = function () {
		W().P().db()
		w.edge(100, 100, 500, 300)
		w.edge(100, 200, 500, 400)
		w.edge(100, 300, 500, 500)
		w.edge(1000, 100, 600, 300)
		w.edge(1000, 200, 600, 400)
		w.edge(1000, 300, 600, 500)
		w.D(410, 100, 'r', 20)
	}
	CONEDGE = function () {
		W(10).Y(450, 400)
		w.edges([
			[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
		])
	}
	WELDFUN = function () {
		W(1200, 600, 1600)
		w.weld(w.B(100, 200, 'x', 100, 200).rest(1), w.B(200, 100, 'u', 200, 100).rest(1))
		w.weld(w.D(300, 400, 'w', 50, 100), w.D(300, 400, 'v', 100, 50))
	}
	WELDEDGE1 = function () {
		W({g: 0, w: 0})
		// e  = w.edgeD(600,300,650,100); e1 = w.edgeD(700,300,750,100); e2 = w.edgeD(700,100,750,400); e3 = w.edgeD(500,200,950,10); w.f(e,e1,e2,e3)
		// b = w.B(450,350, 'y', 10)
		//  w.ship(450,350)
		x = w.edgeChain(
				[400, 400, 500, 200],
				[500, 200, 550, 600],
				[550, 600, 400, 400]
		)
	}
	WELDEDGE = function () {
		W([1200, 600, 2400, 600], {})
		// W({w:0})
		w.G(100)//.zm(1)
		w.roof.kill()
		w.D(480, 400, 'r', 30)
		w.D(480, 400, 'b', 30)
		w.D(480, 400, 'y', 30)
		x = w.edgeArr(
				[400, 400, 500, 200],
				[500, 200, 550, 600],
				[550, 600, 400, 400]
		).track()
	}
	WORLDCLICK = function () {
		W([1200, 600, 2400, 600], {g: 100}) //.zm(1)
		w.roof.kill()
		//w.D(480, 400, 'r', 30); w.D(480, 400, 'b', 30); w.D(480, 400, 'y', 30)
		x = w.edgeArr([400, 400, 500, 200], [500, 200, 550, 600], [550, 600, 400, 400]).track()
		b = w.D(100, 100, 'b', 20)
		w.$(function (x, y) {
			
			// var sX= x,  sY= y,  wX   , wY
			var v = w.sToW(x, y)
			//w.S(  sX/1.5    + w.pX()/1.5,sY/1.5 + w.pY()/1.5 ,'z',  [  [10,10,'-']]  )
			w.S(v.x, v.y, 'z', [[10, 10, '-']])
		}) // $l('sX: '+ sX +', '+ 'sY: '+ sY + ' - wX: '+ wX +', '+ 'wY: '+ wY)
		w.sc(1.5)
		x.X(1200)
		cjs.tick(function () {
			$l(w.mx + ', ' + w.my)
		})
	}}
FLR = function () {
	bD = $dB().Set(0, 20)
	b = w.CB(bD);
	pH = $pH()
	fD = $fD(pH)
	var i
	for (i = 0; i < 4; i++) {
		// pos= V( sinf(i*90*DEGTORAD), cosf(i*90*DEGTORAD) )
		pH.box(30, 30, V(10, 10), 0)
		b.CF(fD)
	}
	bD = $sB(0, 0)
	stB = w.CB(bD)
	pH.asEdge(V(-15, 0), V(15, 3))
	stB.CF(fD); //add a fixture to the body
}
COEDGE = function () {
	W()
	w.rectStat(320, 480, 640, 20)
	w.rectStat(320, 340, 320, 20)
	w.rectStat(170, 230, 20, 200)
	w.rectStat(470, 230, 20, 200)
	w.rectSensor(320, 245, 280, 170)
	co = w.buoy(0, -1, 5, 2).os(-6).den(2)
	cjs.tick(function () {
		w.each(function (b) {
			if (b.isDyn()) {
				
				// if(b.co()){ co.remove(b) }
				b.eachCx(function (cx) {
					
					// if one is a sensor AND the other has no controllers
					// then add the other one to the controller
					// if(cx.A().IsSensor() && !cx.b().co() ){ co.body(cx.b()) }
					// if(cx.B().IsSensor() && !cx.a().co() ){ co.body(cx.a()) }
				})
			}
		})
	})
	// I(function(){
	b = w.circ(300, 40, 8, 'r').den(1)
	c = b.cx()
	// })
}
 