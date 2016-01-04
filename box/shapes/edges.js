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
FLR = function () {
	bD = $dB().Set(0, 20)
	b = w.CB(bD);
	pH =  $pH()
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
//waterCanvas = w.s.shape().f('red',.2).dr(180,160,280,170).ef() 
function justDontWork() {
	asEdgeX = function (v1, v2) {//for reference!
		this.m_vertexCount = 2;
		this.Reserve(2);
		this.m_vertices[0].SetV(v1)
		this.m_vertices[1].SetV(v2)
		this.m_centroid.x = 0.5 * (v1.x + v2.x)
		this.m_centroid.y = 0.5 * (v1.y + v2.y)
		this.m_normals[0] = b2Math.CrossVF(b2Math.SubtractVV(v2, v1), 1)
		this.m_normals[0].Normalize()
		this.m_normals[1].x = (-this.m_normals[0].x)
		this.m_normals[1].y = (-this.m_normals[0].y)
	}
	patch2huh = function () {
		/*
		
		 this.m_radius = polygon.m_radius;
		
		 break;
		 case b2Shape.e_edgeShape:
		
		 var edge = (shape instanceof b2EdgeShape ? shape : null);
		 this.m_vertices = new Vector(2, true);
		 this.m_vertices[0] = edge.m_v1;
		 this.m_vertices[1] = edge.m_v2;
		 this.m_count = 2;
		 this.m_radius = edge.m_radius;
		
		 break;
		
		
		 default:
		
		 b2Settings.b2Assert(false); */
	}
	patch2X = function () {
		b2EdgeShape = b2d.Shapes.b2EdgeShape
		e = b2EdgeShape.prototype
		e.TestPoint = function (transform, p) {
			return false
		}
		e.Copy = function () {
			var s = new b2EdgeShape(this.m_v1, this.m_v2)
			s.Set(this)
			return s
		}
		e.Set = function (other) {
			this.__super.Set.call(this, other);
			if (Box2D.is(other, b2EdgeShape)) {
				var other2 = (other instanceof b2EdgeShape ? other : null);
				this.s_supportVec.SetV(other2.s_supportVec);
				this.m_v1.SetV(other2.m_v1);
				this.m_v2.SetV(other2.m_v2);
				this.m_coreV1.SetV(other2.m_coreV1);
				this.m_coreV2.SetV(other2.m_coreV2);
				this.m_normal.SetV(other2.m_normal);
				this.m_direction.SetV(other2.m_direction);
				this.m_cornerDir1.SetV(other2.m_cornerDir1);
				this.m_cornerDir2.SetV(other2.m_cornerDir2);
			}
		}
		e.RayCast = function (output, input, transform) {
			var tMat;
			var rX = input.p2.x - input.p1.x;
			b2EdgeAndCircleContact = b2d.Dynamics.Contacts.b2EdgeAndCircleContact
			b2EdgeAndCircleContact.Destroy = function (contact, allocator) {
			}
			b2EdgeAndCircleContact.prototype.Reset = function (fixtureA, fixtureB) {
				this.__super.Reset.call(this, fixtureA, fixtureB);
				b2Settings.b2Assert(fixtureA.GetType() == b2Shape.e_edgeShape);
				b2Settings.b2Assert(fixtureB.GetType() == b2Shape.e_circleShape);
			}
			b2EdgeAndCircleContact.prototype.Evaluate = function () {
				var bA = this.m_fixtureA.GetBody();
				var bB = this.m_fixtureB.GetBody();
				this.b2CollideEdgeAndCircle(this.m_manifold, (this.m_fixtureA.GetShape() instanceof b2EdgeShape ? this.m_fixtureA.GetShape() : null), bA.m_xf, (this.m_fixtureB.GetShape() instanceof b2CircleShape ? this.m_fixtureB.GetShape() : null), bB.m_xf);
			}
			b2EdgeAndCircleContact.prototype.b2CollideEdgeAndCircle = function (manifold, edge, xf1, circle, xf2) {
				manifold.m_pointCount = 0;
				var tPoint;
				var dX = 0;
				var dY = 0;
				var positionX = 0;
				var positionY = 0;
				var tVec;
				var tMat;
				tMat = xf2.R;
				tVec = circle.m_p;
				var cX = xf2.position.x + (tMat.col1.x * tVec.x + tMat.col2.x * tVec.y);
				var cY = xf2.position.y + (tMat.col1.y * tVec.x + tMat.col2.y * tVec.y);
				dX = cX - xf1.position.x;
				dY = cY - xf1.position.y;
				tMat = xf1.R;
				var cLocalX = (dX * tMat.col1.x + dY * tMat.col1.y);
				var cLocalY = (dX * tMat.col2.x + dY * tMat.col2.y);
				var dist = 0;
				var radius = edge.m_radius + circle.m_radius;
				tVec = edge.m_normal;
				var separation = tVec.x * dX + tVec.y * dY;
				var v1 = edge.m_v1;
				var v2 = edge.m_v2;
				if (separation < Number.MIN_VALUE) {
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.SetV(edge.m_normal);
					manifold.m_localPoint.x = 0.5 * (v1.x + v2.x);
					manifold.m_localPoint.y = 0.5 * (v1.y + v2.y);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
					return;
				}
				var u1 = (cLocalX - v1.x) * (v2.x - v1.x) + (cLocalY - v1.y) * (v2.y - v1.y);
				var u2 = (cLocalX - v2.x) * (v1.x - v2.x) + (cLocalY - v2.y) * (v1.y - v2.y);
				if (u1 <= 0.0) {
					if ((cLocalX - v1.x) * (cLocalX - v1.x) + (cLocalY - v1.y) * (cLocalY - v1.y) > radius * radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = cLocalX - v1.x;
					manifold.m_localPlaneNormal.y = cLocalY - v1.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.SetV(v1);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
				else if (u2 <= 0) {
					if ((cLocalX - v2.x) * (cLocalX - v2.x) + (cLocalY - v2.y) * (cLocalY - v2.y) > radius * radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = cLocalX - v2.x;
					manifold.m_localPlaneNormal.y = cLocalY - v2.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.SetV(v2);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
				else {
					var faceCenterX = 0.5 * (v1.x + v2.x);
					var faceCenterY = 0.5 * (v1.y + v2.y);
					separation = (cLocalX - faceCenterX) * tVec.x + (cLocalY - faceCenterY) * tVec.y;
					if (separation > radius) return;
					manifold.m_pointCount = 1;
					manifold.m_type = b2Manifold.e_faceA;
					manifold.m_localPlaneNormal.x = tVec.x;
					manifold.m_localPlaneNormal.y = tVec.y;
					manifold.m_localPlaneNormal.Normalize();
					manifold.m_localPoint.Set(faceCenterX, faceCenterY);
					manifold.m_points[0].m_localPoint.SetV(circle.m_p);
					manifold.m_points[0].m_id.key = 0;
				}
			}
			Box2D.inherit(b2NullContact, Box2D.Dynamics.Contacts.b2Contact);
			b2NullContact = b2d.Dynamics.Contacts.b2NullContact
			b2NullContact.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
			b2NullContact.b2NullContact = function () {
			}
		}
	}
	// https://developer.chrome.com/devtools/docs/workspaces !!!!!
	CHAINDEF = function () {
		z()
		w = b2d.mW({
			grav: 0
		})
		b = w.ball()
		chainDef = new b2d.chainDef()
		//es = new b2d.Shapes.b2EdgeShape()
		chainDef.friction = 0.5
		chainDef.restitution = 0.0
		chainDef.isALoop = true
		chainDef.vertices.length = 0
		chainDef.userData = "vertex"
		ratio = 1
		vertexList = [
			{x: 120, y: 548},
			{x: 267, y: 480},
			{x: 484, y: 561},
			{x: 532, y: 328},
			{x: 602, y: 520},
			{x: 337, y: 608}
		]
		_.each(vertexList, function (vertex) {
			chainDef.vertices.push(V(vertex))
		})
		chainDef.vertexCount = chainDef.vertices.length
		gb = w.GetGroundBody()
		edgeshape = gb.CreateShape(chainDef)
		w.DestroyBody(edgeshape.GetBody())
	}
	CHAINDEF2 = function () {
		z()
		w = b2d.mW({grav: 0})
		b = w.ball(600, 100)
		ec = new b2d.Shapes.b2EdgeChainDef()
		ec.vertices.push(V(100, 100))
		ec.vertices.push(V(200, 200))
		ec.friction = 0.5
		ec.restitution = 0.0
		ec.isALoop = true
		ec.vertices.length = 0
		ec.userData = "vertex"
		f = b2d.fixtureDef()
		f.shape = ec
		e = w.A(b2d.dynamicDef(), f)
		w.A(
		)
	}
	EDGES = function () {
		z()
		w = b2d.mW({grav: 0})
		b = w.ball(600, 100)
		//  es = new b2d.Shapes.b2EdgeShape()
		//  edge.Set(v1, v2);
		createEdgeBody = function (world, bodyType, x1, y1, x2, y2) {
			bx = (x1 + x2) / 2
			by = (y1 + y2) / 2
			bodyDef = b2d.dynamicDef(
					bx, by
			)
			len = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
			bodyDef.angle = 0;
			body = w.createBody(bodyDef)
//ADD EDGE FIXTURE TO BODY
			MakeEdgeShape(body, len, bodyType, 1, 0, 1)
//CALCULATE ANGLE OF THE LINE SEGMENT
			body.setTransform(bx, by, MathUtils.atan2(y2 - y1, x2 - x1));
			return body
		}
		edge = function (body, len, BodyDef, bodyType, density, restitution, friction) {
			fixtureDef = new FixtureDef()
			fixtureDef.density = density
			fixtureDef.restitution = restitution
			fixtureDef.friction = friction
			es = new EdgeShape()
//SET LENGTH IN BOX COORDINATES
			boxLen = ConvertToBox(len)
//SETTING THE POINTS AS OFFSET DISTANCE FROM CENTER
			es.set(-boxLen / 2, 0, boxLen / 2, 0);
			fixtureDef.shape = es;
			body.createFixture(fixtureDef);
			fixtureDef.shape.dispose();
		}
	}
	EDGESHAPE = function () {
		z()
		patch2()
		b2d.mW()
		bd = b2d.staticDef()
		b = w.CreateBody(bd)
		f = b2d.fixtDef()
		// es = b2d.edge(V(10,10 ,'-'), V(1,100,'-'))
		es = new b2d.Shapes.b2EdgeShape(
				V(100, 100, '-'),
				V(200, 200, '-'),
				V(0, 0, '-'),
				V(10, 20, '-'),
				V(250, 106, '-'),
				V(10, 20, '-')
		) //m_v1, m_v2
		/*
		 es.m_cornerDir1=V(100,100)
		 es.m_cornerDir2=V(200,10)
		 es.m_coreV1=V(100,100)
		 es.m_coreV2=V(200,10)
		 es.m_v1=V(100,100)
		 es.m_v2=V(200,10)
		
		 */
		f.shape = es
		f.m_shape = es
		//f.shape = b2d.circle()
		b.CreateFixture(f)
		w.ball()
	}
}
function edgeNotUsed() {
	b2d.edge = b2.edgeShape = function (v1, v2) {
		v1 = v1 || V(10, 10)
		v2 = v2 || V(1, 100)
		var edge = new b2d.Shapes.b2EdgeShape(v1, v2)
		return edge
	}
	b2d.chainDef = function () {
		return new b2d.Shapes.b2EdgeChainDef()
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