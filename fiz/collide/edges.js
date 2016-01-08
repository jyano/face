$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
function _edge() {
	w.edgAr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.e(g, function (e) {
			e = w.edgD(e[0], e[1], e[2], e[3])
			w.wed(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
	w.edgD = function (x1, y1, x2, y2) {
		var w = this,
				l = w.l(x1, y1, x2, y2),
				e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
		e.bS(l) //bS2
		return e
	}
	w.edgs = function () {
		var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.e(g, function (e) {
			if (A(e)) {
				e = w.edgD.apply(w, e)
			}
			w.wed(e, x)
		})//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edgsD = function (ar) {
		var w = this
		ar = ar || [V(), V(100, 100)]
		i = V(ar.shift())
		i2 = V(ar.shift())
		w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			w.edg(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edg = function (x1, y1, x2, y2) {
		var w = this
		// you would always want a single stat?
		w.l(x1, y1, x2, y2, '-')
		return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
	}
	w.edgs = function (ar) {
		var w = this, e
		ar = ar || []
		i = V(ar.shift())
		i2 = V(ar.shift())
		e = w.edg(i.x, i.y, i2.x, i2.y)
		_.e(ar, function (v) {
			i = i2
			i2 = V(v)
			e.glu(w.edg(i.x, i.y, i2.x, i2.y))
		})
	}
	b2d.edg = function (x1, y1, x2, y2) {
		var fd = b2d.pol()
		fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
		return fd
	}
 
}
w.edgAr = function () {
	var w = this,
			g = G(arguments),
			X = 0,
			Y = 0,
			x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
	_.e(g, function (e) {
		e = w.edgD(e[0], e[1], e[2], e[3])
		w.wed(e, x, V(g[0][0], g[0][1]))
	})
	return x
}
w.edgD = function (x1, y1, x2, y2) {
	var w = this,
			l = w.l(x1, y1, x2, y2),
			e = w.D(0, 0, b2d.edg(x1, y1, x2, y2)).d(1)
	e.bS(l) //bS2
	return e
}
w.edgs = function () {
	var w = this, g = G(arguments), X = 0, Y = 0, x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]), x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
	if (A(g[0])) {
		//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
		//  w.weld(x,b)
		// X=g[0][0]
		// Y=g[0][1]
	}
	_.e(g, function (e) {
		if (A(e)) {
			e = w.edgD.apply(w, e)
		}
		w.wed(e, x)
	})//  w.weld(x2  , x)
	w.dot(300, 300)
	return x2
}
w.edgsD = function (ar) {
	var w = this
	ar = ar || [V(), V(100, 100)]
	i = V(ar.shift())
	i2 = V(ar.shift())
	w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		w.edg(i.x, i.y, i2.x, i2.y)
	})
}
w.edg = function (x1, y1, x2, y2) {
	var w = this
	// you would always want a single stat?
	w.l(x1, y1, x2, y2, '-')
	return w.S(0, 0, b2d.edg(x1, y1, x2, y2))
}
w.edgs = function (ar) {
	var w = this, e
	ar = ar || []
	i = V(ar.shift())
	i2 = V(ar.shift())
	e = w.edg(i.x, i.y, i2.x, i2.y)
	_.e(ar, function (v) {
		i = i2
		i2 = V(v)
		e.glu(w.edg(i.x, i.y, i2.x, i2.y))
	})
}
b2d.edg = function (x1, y1, x2, y2) {
	var fd = b2d.pol()
	fd.shape.SetAsEdge(V(x1, y1, '-'), V(x2, y2, '-'))
	return fd
}
function edges() {
	b2d.edge = function (x1, y1, x2, y2) {
		var fd = b2d.poly()
		fd.shape.SetAsEdge(V(x1, y1).div(), V(x2, y2).div())
		return fd
	}
	w = b2d.World.prototype
	w.edgeChain = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(X, Y, 'z', [[100, 100, 400, 400, '-']]),
				x2 = w.D(2000, 1200, 'z', [[400, 400, '-']])
		if (A(g[0])) {
			
			//  b = w.D(g[0][0],g[0][1], 'w',20,  g[0][0],g[0][1] )
			//  w.weld(x,b)
			// X=g[0][0]
			// Y=g[0][1]
		}
		_.each(g, function (e) {
			if (A(e)) {
				e = w.edgeD.apply(w, e)
			}
			w.weld(e, x)
		})
		//  w.weld(x2  , x)
		w.dot(300, 300)
		return x2
	}
	w.edge = function (x1, y1, x2, y2) {
		var w = this, e
		// you would always want a single stat?
		w.line(x1, y1, x2, y2)
		e = w.S(0, 0, b2d.edge(x1, y1, x2, y2))
		return e
	}
	w.edgeD = function (x1, y1, x2, y2) {
		var w = this, l, e
		l = w.line(x1, y1, x2, y2)
		e = w.D(0, 0, b2d.edge(x1, y1, x2, y2)).den(1)
		e.bindSprite2(l)
		return e
	}
	w.edges = function (ptArr) {
		var w = this, e
		ptArr = ptArr || []
		i = V(ptArr.shift())
		i2 = V(ptArr.shift())
		e = w.edge(i.x, i.y, i2.x, i2.y)
		_.each(ptArr, function (v) {
			i = i2
			i2 = V(v)
			e.glue(
					w.edge(i.x, i.y, i2.x, i2.y)
			)
		})
	}
	w.edgesD = function (ptArr) {
		var w = this
		ptArr = ptArr || []
		i = V(ptArr.shift())
		i2 = V(ptArr.shift())
		w.edge(i.x, i.y, i2.x, i2.y)
		_.each(ptArr, function (v) {
			i = i2
			i2 = V(v)
			w.edge(i.x, i.y, i2.x, i2.y)
		})
	}
	w.edgeArr = function () {
		var w = this,
				g = G(arguments),
				X = 0,
				Y = 0,
				x = w.D(400, 400, 'z', [[50, 50, '-']])//.den(10)
		_.each(g, function (e) {
			e = w.edgeD(e[0], e[1], e[2], e[3])
			w.weld(e, x, V(g[0][0], g[0][1]))
		})
		return x
	}
 
	w.sTW = w.sToW = w.gTL = function (x, y) { //works
		var w = this,
				x = x / w.z - w.s.x / w.z,
				y = y / w.z - w.s.y / w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
	w.wTS = w.wToS = w.lTG = function (x, y) {//also works!
		var w = this,
				x = (x + w.s.x / w.z) * w.z,
				y = (y + w.s.y / w.z) * w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
// https://developer.chrome.com/devtools/docs/workspaces !!!!!
}
function more() {
	//edge shape:
	pH.SAE = function (v1, v2) {
		this.SetAsEdge(v1, v2)
		return this
	}
	$eH = function (x1, y1, x2, y2) {
		return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
	}
	SAE = function () {
		W().p()
		w.eg(100, 500, 1000, 0)
		w.eg(50, 50, 100, 500)
		w.eg(0, 0, 1000, 100)
		w.cirB(410, 100, 2)
		_.in(4, function () {
			w.eg(100, 100, 500, 300)
			w.eg(100, 200, 500, 400)
			w.eg(100, 300, 500, 500)
			w.eg(1000, 100, 600, 300)
			w.eg(1000, 200, 600, 400)
			w.eg(1000, 300, 600, 500)
			w.cirB(410, 100)
		})
	}
	moreEdge = function () {
		EDE = function () {
			W()
			v1 = V(0, 0)
			v2 = V(40, 0)
			eH = $eH()
			eH.Set(v1, v2)
		}
		GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
			eH = $eH()
			eH.Set(v1 = V(30, 8), v2 = V(0, 0));
			eH.m_hasVertex0 = true;
			eH.m_hasVertex3 = true;
			eH.m_vertex0 = v0 = V(40, 0);
			eH.m_vertex3 = v3 = V(40, 14);
		}
//chain:
		CHAIN = CHA = function () {
			vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
			chain = $chH()
			chain.CreateChain(vs, 4);
		}
		GHOSTVERTS = GHV = function () {
// // Install ghost vertices
			chain = $chH();
			chain.SetPrevVertex(V(90, 30));
			chain.SetNextVertex(V(-60, 0))
		}
		LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
			chain = $chainH();
			chain.CreateLoop(vs, 4);
			// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
			for (i = 0; i < chain.GetChildCount(); ++i) {
				eH = $eH();
				chain.GetChildEdge(eH, i)
			}
		}
	}
}
 
  function edgePairs(){//b2ControllerEdge "A controller edge is used to connect bodies and controllers together in a bipartite graph.";
	  b2d.CE = b2d.CoE = b2d.ControllerEdge = b2d.Cos.b2ControllerEdge
// In graph theory, 
// a bipartite graph (or bigraph)
// is a SIMPLE graph 
// whose vertices can be divided 
// into two disjoint sets  (X,Y)  ~ G = (X,Y, E)
// and
// (that is, and are each independent sets)
// such that
// every edge connects a vertex in to one in .
// ( every edge is between a vertex in X and a vertex in Y
// Vertex set and are often denoted as partite sets.
	  cE = b2d.CE.prototype
	  cE.co = cE.Co = cE.C = function () {
		  return this.controller
	  }
	  cE.pC = function () {
		  return this.prevController
	  }
	  cE.nC = function () {
		  return this.nextController
	  }
	  cE.pB = function () {
		  return this.prevBody
	  }
	  cE.nB = function () {
		  return this.nextBody
	  }
	  cE.b = cE.B = function () {
		  return this.body
	  }}
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
function more() {
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
	}
}
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
 