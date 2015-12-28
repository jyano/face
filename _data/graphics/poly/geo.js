$gP$ = function () {
	// = M.p = b2d.gpcPD 
	//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
	var g = G(arguments), p, b, fs, pts
	if (b2d.iGP(g.f)) {
		return g.f
	}
	if (b2d.iB(g.f)) {
		pts = g.f.wV()
		_.eR(g.f.fs(), function (v) {
			pts = pts.uni(v)
		})
	}
	else {
		pts = b2d.iF(g.f) ? g.f.wV() :
				g.f
	}
	return $pD(pts)
}
$L('polys', 'points', 'extensions')
w.$$fall = function () {
	var w = this
	w.$$(function () {
		w.fall()
	})
	return w
}
w.fall = function () {
	return this.e(function (b) {
		b.dyn()
	})
}
b2d.polyDot = function (verts) {// see f.dots
	var t = 0
	_.each(
			A(verts) ? verts : verts.verts(), //combine with b2d.verts
			function (v) {
				setTimeout(function () {
					w.dot(V(v))
				}, t)
				t += 100
			}
	)
}
b2d.tF = function (f) {
	return b2d.iB(f) ? f.f() : f
}
b2d.recV = function (x, y, w, h) {
	var hW = w / 2, hH = h / 2
	return [[x - hW, y - hH], [x + hW, y - hH], [x + hW, y + hH], [x - hW, y + hH]]
}
b2d.fixt = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	// simply makes one fixt,
	// tries to set its shape
	// and returns it
	//you can pass in a pre-made shape
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	
	//or..
	// if you pass it an array, it makes a polyH from it
	// from verts/arr (confirmed)
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	
	// or if you passed in anything (number(s))
	// it makes a circle or poly shape, depending on how many numbers you passed
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.fixtC = function (shape) {
	var g = G(arguments), shape = g[0], len = g.length, fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	else if (A(shape)) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	else if (len == 1 || len == 3) {
		fixt.shape = b2d.circH.apply(b2d, g)
	}
	else if (len == 2 || len > 3) {
		fixt.shape = b2d.polyH.apply(b2d, g)
	}
	return fixt
}
b2d.overlapping = b2d.ol = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) ||
	_.isEqual(p.vs(), v2.vs()))
	function alt() {
		b2d.overlapping = function (b1, b2) {
			var v1 = b1.polyVerts(),
					v2 = b2.polyVerts()
			var p = v1.union(v2)
			return !(_.isEqual(p.verts(), v1.verts()) ||
			_.isEqual(p.verts(), v2.verts()))
		}
	}
}
b.killXY = b.KPos = b.KXY = function () {
	var b = this
	var xy = b.XY();
	b.kill();
	return xy
}
b.pos = function () {//used in MEET
	return this.tf().position.m()
}
b2d.hV = b2d.hasVerts = function (poly) {
	return poly.m_List.get(0)
}
b2d.ol = b2d.overlapping = function (b1, b2) {
	var v1 = M.p(b1),//wont work yet
			v2 = M.p(b2)
	var p = v1.union(v2)
	return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
}
function separatePolyCircle() {
	b2d.sep = b2d.conc = b2d.separator = function (body, verts, scale) {
		
		
		
		/*
		 //This class is specifically for non-convex polygons.
		 // If you want to create a convex polygon, you don't need to use this class
		 // - Box2D's <code>b2PolygonShape</code> class allows you to create convex shapes with the
		 <code>setAsArray()</code>/<code>setAsVector()</code> method.</li>
		
		 //The vertices must be in clockwise order.</li>
		 //No three neighbouring points should lie on the same line segment
		 //There must be no overlapping segments and no "holes"
		
		 @param body The b2Body, in which the new fixtures will be stored.
		 * @param fixtureDef A b2FixtureDef, containing all the properties (friction, density, etc.) which the new fixtures will inherit.
		 * @param verticesVec The vertices of the non-convex polygon, in clockwise order.
		 * @param scale <code>[optional]</code> The scale which you use to draw shapes in Box2D. The bigger the scale, the better the precision. The default value is 30.
		 * @see b2PolygonShape
		 * @see b2PolygonShape.SetAsArray()
		 * @see b2PolygonShape.SetAsVector()
		 * @see b2Fixture
		 * */
		Separate = function (body, verts, scale) {
			var g = G(arguments)
			body = g[0]
			verts = g[1]
			scale = N(g[2]) ? g[2] : 30
			if (A(body)) {
				scale = verts;
				verts = body;
				body = g.p ? w.ball(300, 300, 4) : w.dyn(300, 300)
			}
			var i, j, m, figsVec, polyShape, n
			//pass in an array of points
			//each will get scaled and then, calcShapes is applied to it
			//and then for EACH OF THE SHAPES!! ....
			_.each(calcShapes(
							_.map(verts, V)),
					function (vec) {
						vv = vec
						vvv = _.map(vv, function (v) {
							return [v.x, v.y]
						})
						// b.bindSprite2(
						//  w.s.shape(body.X(), body.Y()).poly(vvv, 'r', 'b', 1)
						// )
						var shape = b2d.polyH().setAsVec(vec, scale)
						body.fixt(b2d.fixt(h = shape))
					})
			return body.den(1)
		}
		Validate = function (verticesVec) {
			/**
			 * Checks whether the vertices in <code>verticesVec</code> can be properly distributed into the new fixtures
			 * (more specifically, it makes sure there are no overlapping segments and the vertices are in clockwise order).
			 * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
			 * <p/>
			 * @param verticesVec The vertices to be validated.
			 * @return An integer which can have the following values:
			 * <ul>
			 * <li>0 if the vertices can be properly processed.</li>
			 * <li>1 If there are overlapping lines.</li>
			 * <li>2 if the points are <b>not</b> in clockwise order.</li>
			 * <li>3 if there are overlapping lines <b>and</b> the points are <b>not</b> in clockwise order.</li>
			 * </ul>
			 * */
			
			var i, n = verticesVec.length, j, j2, i2, i3, d, ret = 0;
			var fl, fl2 = false
			_.times(n, function (i) {
				i2 = (i < n - 1) ? i + 1 : 0
				i3 = (i > 0) ? i - 1 : n - 1
				fl = false
				_.times(n, function (j) {
					if (j != i && j != i2) {
						if (!fl) {
							d = det(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y);
							if (d > 0) {
								fl = true
							}
						}
						if ((j != i3)) {
							j2 = (j < n - 1) ? j + 1 : 0;
							if (hitSegment(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y, verticesVec[j2].x, verticesVec[j2].y)) {
								ret = 1;
							}
						}
					}
				})
				if (!fl) {
					fl2 = true
				}
			})
			if (fl2) {
				if (ret == 1) {
					ret = 3
				} else {
					ret = 2
				}
			}
			return ret
		}
		calcShapes = function (verts) {
			var vec
			var i, n, j
			var d, t, dx, dy, minLen
			var i1, i2, i3, p1, p2, p3
			var j1, j2, v1, v2, k, h
			var vec1, vec2
			var v, hitV
			var isConvex
			var figsVec = [], queue
			queue = []
			queue.push(verts)
			while (queue.length) {
				vec = queue[0]
				n = vec.length
				isConvex = true
				_.times(n, function (i) {
					i1 = i
					i2 = (i < n - 1) ? i + 1 : i + 1 - n
					i3 = (i < n - 2) ? i + 2 : i + 2 - n
					p1 = vec[i1]
					p2 = vec[i2]
					p3 = vec[i3]
					d = det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
					if (d < 0) {
						isConvex = false
						minLen = Number.MAX_VALUE
						_.times(n, function (j) {
							if (j != i1 && j != i2) {
								j1 = j;
								j2 = (j < n - 1) ? j + 1 : 0;
								v1 = vec[j1];
								v2 = vec[j2];
								v = hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y);
								if (v) {
									dx = p2.x - v.x;
									dy = p2.y - v.y;
									t = dx * dx + dy * dy
									if (t < minLen) {
										h = j1
										k = j2
										hitV = v
										minLen = t
									}
								}
							}
						})
						vec1 = []
						vec2 = []
						j1 = h;
						j2 = k;
						v1 = vec[j1];
						v2 = vec[j2];
						if (!pointsMatch(hitV.x, hitV.y, v2.x, v2.y)) {
							vec1.push(hitV)
						}
						if (!pointsMatch(hitV.x, hitV.y, v1.x, v1.y)) {
							vec2.push(hitV)
						}
						h = -1
						k = i1
						while (true) {
							if (k == j2) { //if( h<0|| h>=n ){err()}
								if (!isOnSegment(
												v2.x,
												v2.y,
												vec[h].x,
												vec[h].y,
												p1.x,
												p1.y)) {
									vec1.push(vec[k])
								}
								break
							} else {
								vec1.push(vec[k])
							}
							h = k
							k = (k < 1) ? n - 1 : k - 1
						}
						vec1 = vec1.reverse()
						h = -1
						k = i2
						while (true) {
							if (k == j1) {//  if   ( h<0  || h>=n)  {  err()   }
								if (k == j1 && !isOnSegment(v1.x, v1.y, vec[h].x, vec[h].y, p2.x, p2.y)) {
									vec2.push(vec[k])
								}
								break
							}
							else {
								vec2.push(vec[k]);
							}
							h = k
							if (k + 1 > n - 1) {
								k = 0
							} else {
								k++
							}
						}
						queue.push(vec1, vec2)
						queue.shift()
					}
				})
				if (isConvex) {
					figsVec.push(queue.shift())
				}
			}
			return figsVec
		}
		hitRay = function (x1, y1, x2, y2, x3, y3, x4, y4) {
			var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
			a = (((t5 * t2) - t6 * t1) / t7);
			var px = x1 + a * t3, py = y1 + a * t4;
			var b1 = isOnSegment(x2, y2, x1, y1, px, py);
			var b2 = isOnSegment(px, py, x3, y3, x4, y4);
			if ((b1 && b2)) {
				return V(px, py);
			}
			return null;
		}
		hitSegment = function (x1, y1, x2, y2, x3, y3, x4, y4) {
			var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
			a = (((t5 * t2) - t6 * t1) / t7);
			var px = x1 + a * t3, py = y1 + a * t4;
			var b1 = isOnSegment(px, py, x1, y1, x2, y2);
			var b2 = isOnSegment(px, py, x3, y3, x4, y4);
			if ((b1 && b2)) {
				return V(px, py);
			}
			return null;
		}
		isOnSegment = function (px, py, x1, y1, x2, y2) {
			var b1 = (  (x1 + 0.1) >= px && px >= x2 - 0.1) || (   (x1 - 0.1) <= px && px <= x2 + 0.1   )
			var b2 = ( (y1 + 0.1) >= py && py >= y2 - 0.1) || (   (y1 - 0.1) <= py && py <= y2 + 0.1   )
			return b1 && b2 && isOnLine(px, py, x1, y1, x2, y2)
		}
		pointsMatch = function (x1, y1, x2, y2) {
			var dx = (x2 >= x1) ? x2 - x1 : x1 - x2, dy = (y2 >= y1) ? y2 - y1 : y1 - y2;
			return dx < 0.1 && dy < 0.1
		}
		isOnLine = function (px, py, x1, y1, x2, y2) {
			if ((x2 - x1) > 0.1 || x1 - x2 > 0.1) {
				var a = (y2 - y1) / (x2 - x1),
						possibleY = a * (px - x1) + y1,
						diff = (possibleY > py) ? possibleY - py : py - possibleY
				return (diff < 0.1)
			}
			return (((px - x1) < 0.1) || x1 - px < 0.1)
		}
		det = function (x1, y1, x2, y2, x3, y3) {
			return x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1
		}
		// err=function(){throw new Error("A problem has occurred. Use the Validate() method to see where the problem is.")}
		if (b2d.isGPoly(verts)) {
			verts = verts.verts()
		}
		return U(body) ? Separate : Separate(body, verts, scale)
	} // conc-sep lib
//////////////////////////////////////////////////////////////////////////////////////////
	b.sep = function (pts, scl) {
		var b = this
		pts = gpc.iPg(pts) ? pts.pts() : pts
		_.e(O(pts[0][0]) ? pts : [pts], function (pt) {
			b2d.sep(b, pt, scl)
		})
		return b
		function docs() {
			if (!O(vs)) {
				//	alert('o.v must be object');
				return
			}
			//needs array of vs.. or one vert (which is converted here to arr) 
			//  'sep' each of the vs onto the b
		}
	}
	b.conc = b.sep = function (verts) {
		var g = G(arguments),
				verts = g[0],
				col,
				b = this,
				fs, n1, n2, newFixts
		if (U(verts)) {
			return
		}
		if (S(verts[0])) {
			col = verts.shift()
		}
		if (g.n) {
			b.clear()
		}
		n1 = b.num()
		b2d.sep(b, verts)
		if (S(col)) {
			n2 = b.num()
			fs = b.fixts()
			newFixts = _.first(fs, n2 - n1)
			_.each(newFixts, function (f) {
				f.C(col)
			})
		}
		return this
	}
	b.conc2 = function (col) {
		var g = G(arguments), col = g[0], verts,
				b = this, fs, n1, n2, newFixts
		if (U(col)) {
			return
		}
		verts = S(col) ? _.rest(g) : g
		if (g.n) {
			b.clear()
		}
		n1 = b.num()
		b2d.sep(b, verts)
		if (S(col)) {
			n2 = b.num()
			fs = b.fixts()
			newFixts = _.first(fs, n2 - n1)
			_.each(newFixts, function (f) {
				f.C(col)
			})
		}
		return this
	}
	b.sepNew = function (pts, fn) {
		var b = this
		var origNumFs = b.num()
		b = b.sep(pts)
		var newNumFs = b.num()
		var newFs = _.f(b.fs(), newNumFs - origNumFs)
		if (F(fn)) {
			_.e(newFs, fn)
		}
		return newFs
		function docs() {
			//return newFs[1]? newFs: newFs[0]
			//this proxies to b.sep.. but has two advantages
			//- it returns NEW fixtures formed in an array
			//- if u pass in a function, then it loops those fxs
			// //alt:if only one fixture added.. it is returned as a single fixture (not in array) ?
		}
	}
	b._pC = function () {
		var b = this, g = G(arguments), o
		o = g.O ? g.f :
				g.S_ ? {col: g.f, rad: g.s, num: g.t}
						: {rad: g.f, num: g.s}
		o.col = o.col || 'v'
		b.pol($pC(o.rad, o.num))
		return b.C(o.col)
	}
	b.pC = function () {
		var b = this, g = G(arguments), o,
				vs = [], p
		o = O(g[0]) ? g[0] :
				S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
						: {r: g[0], n: g[1]}
		o.r = N(o.r, 20)
		o.a = 2 * M.PI / o.n
		_.t(N(o.n, 20), function (i) {
			var v
			v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
			vs.push([v.x, v.y])
		})
		if (g.n) {
			return vs
		}
		p = b.pol(vs)
		p.C(o.c || $r())
		return b
		function alt() {
			b.polCir = b.pC = function () {
				var b = this, g = G(arguments), o,
						vs = [], p
				o = O(g[0]) ? g[0] :
						S(g[0]) ? {c: g[0], r: g[1], n: g[2]}
								: {r: g[0], n: g[1]}
				o.r = N(o.r, 20)
				o.a = 2 * M.PI / o.n
				_.t(N(o.n, 20), function (i) {
					var v
					v = V(M.c(o.a * i) * o.r, M.s(o.a * i) * o.r)
					vs.push([v.x, v.y])
				})
				if (g.n) {
					return vs
				}
				p = b.pol(vs)
				p[0].C(o.c || $r())
				return b
			}
		}
	}
	b.mPC = b.minusPolyCirc = function (x, y, r, sides) {
		var b = this, pC, p
		pC = $pC(r, sides)
		p = _.m(pC, function (v) {
			v = V(v)
			return [v.x + x, v.y + y]
		})
		vs = $DIF(b, p).ps(b)
		//b.clear()
		b.pol(vs)
		return b
	}
	w.pC = function () {
		var w = this, g = G(arguments), o
		if (g.O) {
			return w.D(g.f.x, g.f.y).pC(g.f)
		}
		var b = w.D(g.f, g.s)
		b.pC.apply(b, _.r(g, 2))
		return b
		function alt() {
			w.polCir = w.pC = function (x, y, pC0, pC1, pC2) {
				var w = this, g = G(arguments), o
				if (g.O) {
					o = g[0]
					return w.D(o.x, o.y).pC(o)
				}
				return w.D(x, y).pC(pC0, pC1, pC2)
			}
		}
	}
	f.pC = function (n) {
		var f = this, g = G(arguments)
		var pC = f
		if (f.isCir()) {
			pC = $pC(f.rad(), N(n, 10))
		}
		if (g.n) {
			return pC
		}
		return M.p(pC)
		function alt() {
			f.polCir = f.pC = function (n) {
				var f = this, g = G(arguments), pC
				pC = f.iC() ? b2d.pC(f.rad(), N(n, 10))
						: f
				return g.m ? M.p(pC) : pC
			}
		}
	}
	b2d.pC = b2d.polCir = function () {
		var g = G(arguments), //b2d.polyCirc =
				vs = [],
				r = N(g[0], 20),
				n = N(g[1], 20),
				a = 2 * M.PI / n
		_.t(n, function (i) {
			var v = V(
					M.c(a * i) * r,
					M.s(a * i) * r)
			vs.push(g.p ? v : [v.x, v.y])
		}) //returns an arr of rel verts
		return vs
		function alt() {
			b2d.polyCirc = function (r, n) {
				var g = G(arguments), vs = [], a
				r = N(r, 20)
				n = N(n, 20)
				a = 2 * M.PI / n
				_.t(n, function (i) {
					vs.push(V(r * M.c(a * i), r * M.s(a * i)))
				})
				return vs
			}
		}
	}
	$pC = function (rad, numVxs) {
		var g = G(arguments)
		rad = N(rad, 50)
		numVxs = N(numVxs, 5)
		var ang = 2 * M.PI / numVxs
		var vxs = []
		//alpha: _.arr = function(){var g=G(arguments), arr=[]}
		_.t(numVxs, function (vx) {
			vx = V(
					M.cos(ang * vx) * rad,
					M.sin(ang * vx) * rad)
			vxs.push(g.p ? vx : [vx.x, vx.y])
		})
		//returns an arr of rel verts
		return vxs
	}
	PC = BPC = FPC = function () {
		W({w: 0}).C('o')
		_.fnEv(.5,
				function penta() {
					w.S(200, 300).pC('r', 60, 5)
					w.S(400, 300).pC('b', 80, 10)
				},
				function polDeca() {
					w.pC(700, 300, 'y', 120, 15)
					w.S(600, 500).pol(
							w.S(800, 500, 'w', 50).f().pC(10, '*')
					)
				})
	}
	WPC = function () {
		W().C('w')
		w.pC(300, 300, 'b', 120, 5)
		w.pC(300, 300, 'r', 120, 4)
		w.pC(300, 300, 'x', 120, 3)
		w.pC(300, 300, 'x', 120, 2)
	}
	PCD = function () {
		W(600, 600).C('y').$$fall()
		blue = b = victim = w.pC(300, 300, 'b').stat().al(.5)
		vic = victim.pD()
		red = r = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
		bul = bullet.pD()
		res = vic.difference(bul)
		res2 = bul.difference(vic)
		vs = res.tlNeg(bullet).vs()
		vs2 = res.tlNeg(victim).vs()
		_.inx(2, function () {
			victim.kill()
			bullet.kill()
			w.pol(300, 400, vs2).C('b').stat()
			w.pol(300, 400, vs).C('r')//.stat()
		})
	}
	PCI = function () {
		W(600, 600).C('y').$$fall()
		blue = victim = w.pC(300, 300, 'b').stat().al(.5)
		vic = victim.pD()
		red = bullet = w.pC(290, 330, 'r').stat().rt(10).al(.5)
		bul = bullet.pD()
		u = vic.union(bul)
		d = vic.difference(bul)
		i = vic.intersection(bul)
		x = vic.xor(bul)
		_.in(.2, function () {
			victim.al(.3)
			bullet.al(.3)
			dif()
			int()
			uni()
			xorT()
			xorB()
		})
		function dif() {
			var vs0 = d.tlNeg(blue).vs()
			var b = w.S(100, 300)
			b.pol(vs0)
			b.C('b')
			b.fs(function (f) {
				f.al(.5)
			})
			_.in(function () {
				b.dyn()
			})
		}
		
		function int() {
			var vs1 = i.tlNeg(blue).vs()
			var b = w.S(100, 300)
			b.pol(vs1)
			b.C('r').al(.5)
			_.in(function () {
				b.dyn()
			})
		}
		
		function uni() {
			var vs1 = u.tlNeg(blue).vs()
			var b = w.S(300, 100)
			b.pol(vs1)
			b.C('g')
			b.fs(function (f) {
				f.al(.5)
			})
			_.in(function () {
				b.dyn()
			})
		}
		
		function xorT() {
			var vs1 = x.getPoly(1).tlNeg(blue).vs()
			var b = w.S(400, 300)
			b.pol(vs1)
			b.C('a')
			b.fs(function (f) {
				f.al(.5)
			})
			_.inx(function () {
				b.dyn()
			})
		}
		
		function xorB() {
			var vs1 = x.tlNeg(blue).vs()
			var b = w.S(400, 300)
			b.pol(vs1)
			b.C('a')
			b.fs(function (f) {
				f.al(.5)
			})
			_.inx(function () {
				b.dyn()
			})
		}
	}
	PCH = function () {
		W(600, 600).C('y').$$fall()
		blue = victim = w.pC(300, 300, 'b').stat().al(.5)
		vic = victim.pD()
		red = bullet = w.pC(300, 300, 'r', 30).stat().rt(10).al(.5)
		bul = bullet.pD()
		d = vic.difference(bul)
		hol = d.g(1)
		ho = hol.tlNeg(blue)
		vs = ho.vs()
		//blue.kill()
		//red.kill()
		b = w.S(100, 300)
		b.pol(vs.reverse())
		b.C('z')
		_.in(function () {
			b.fs(function (f) {
				f.al(.5)
			})
			//b.dyn()
		})
	}
	w.pC__ = function () {
		return this.S(830, 270).pC('z', 80, 10)
	}
}
function polys() {
	pS.tlNeg = function (b) {
		var g = G(arguments)
		var pt = V(g.f, g.s)
		var pts = this.pts()
		var newPts = _.m(pts, function (origPt) {
			return V(origPt).sub(pt.x, pt.y)
		})
		return $gP(newPts)
		function doc() {//pD.wV = pS.wV = 	 pS.reg = pS.toRelativePoints = pS.mapToBoxWorld
			//you can pass in the verts,
			// or the gPoly itself!                 
			// what about a f?
		}
	}
	$tlNeg = function (ps, b) {
		return _.m(ps, function (poly) {
			return poly.tlNeg(b)
		})
		//= bx.tlNeg = bx.reg
	}
	$pol = $poly = function (pD, xy) {
		pD = S(pD) ? $vs[pD] : pD
		return $pD(pD).maybeTl(xy)
	}
	pD.pols = function () {
		var pD = this, g = G(arguments), o
		var ps = pD.polies()
		o = b2d.iB(g.f) ? {ps: $tlNeg(ps, V(g.f)), fn: g.s} :
				g.N_ ? {ps: $tlNeg(ps, V(g.f, g.s)), fn: g.t} :
				{fn: g.f}
		o.ps = o.ps || []
		if (!g.n) {
			o.ps = _.m(o.ps, M.p)
		}
		if (F(o.fn)) {
			_.e(o.ps, o.fn);
			return pD
		}
		return o.ps
		// used in MEET
		// = pD.ps = pD.polys = pD.hs
	}
	b2d.gpcPD = M.p = function () {
		//it expects worldVerts....
//it works with worldVerts...
//it was designed   with
//that in
//mind
		var g = G(arguments), p, b, fs, pts
		if (b2d.iGP(g.f)) {
			return g.f
		}
		if (b2d.iB(g.f)) {
			pts = g.f.wV()
			_.eR(g.f.fs(), function (v) {
				pts = pts.uni(v)
			})
		}
		else {
			pts = b2d.iF(g.f) ? g.f.wV() :
					g.f
		}
		return $pD(pts)
	}
	pD._D = function (pol) {
		var pD = this
		return b2d.iB(pol) ? pol.difPol(pD) :
				pD.dif(pol)
	}
	pD.D = function () {
		var pD = this, gg = G(arguments)
		gg.e(function (g) {
			if (b2d.iB(g)) {
				if (g.n() == 1) {
					return pD.D(g.f())
				}
				g.fs(function (f) {
					pD = pD.D(f)
				})
			}
			else {
				pD = pD.difference(M.p(g))
			}
		})
		return pD
	}
	pD.pols = pD.ps = function () {
		var p = this,
				g = G(arguments),
				fn,
				ps = [];
		//put all my polys in an array
		_.t(p.nP(), function (i) {
			ps.push(p.g(i))
		})
		if (b2d.iB(g[0])) {
			ps = _.m(ps, function (p) {
				//return M.p(p).rel(g[0])
				return p.reg(g[0])
			})
			fn = g[1]
		}
		else if (N(g[0])) {
			ps = _.m(ps, function (p) {
				return p.reg(g[0], g[1])
			})
			fn = g[2]
		}
		else {
			fn = g[0]
		}
		if (g.p) {
			ps = _.m(ps, M.p)
		}
		if (F(fn)) {
			_.e(ps, fn);
			return p
		}
		return ps
	}
	pD.pol = function (b) {
		var p = this
		p = M.p([[0, 50], [-50, 0], [0, -50], [50, 0]])
		// w.pol(v.x, v.y, p) -> p.pol(w,v)?
		p.ps(b, function (p) {
			b.pol(p)
		})
		return p
//pD.polygons =
	}
	b2d.gpcPD = M.p = function () {
		//it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind
		var g = G(arguments), p, b, fs, vs
		if (b2d.iGP(g[0])) {
			return g[0]
		}
		p = new PolyDefault()
		if (b2d.iB(g[0])) {
			fs = g[0].fs()
			vs = fs[0].wV()
			_.eR(fs, function (v) {
				vs = vs.uni(v)
			})
		}
		else {
			vs = b2d.iF(g[0]) ? g[0].wV() :
					g[0]
		}
		p.A(vs)
		return p
	}
	b2d.iG = b2d.iGP = b2d.isGPoly = function (a) {
		return O(a) && F(a.isHole)
	}
	b.GP = function () {
		var b = this
		var wPts = b.wPts()
		return M.poly(wPts)
	}
	b.lGP = function () {
		var b = this
		var lPts = this.pts()
		return Math.poly(lPts)
	}
	b.PD = b.pD = function () {
		//b.P =
		var b = this, p,
				fs = b.fs()
		if (!_.f(fs)) {
			return new PolyDefault()
		}
		p = M.p(_.f(fs))
		_.eR(fs, function (f) {
			p = p.U(f)
		})
		return p//p.reg(b)
		//this returns a gPoly
	}
	w.ps = w.poliees = function (x, y, pS) {
		pS.ps(this.D(x, y), function (pS) {
			b1.pol(pS)
		})
	}
	w.polS = function () {
		var w = this, g = G(arguments), b, o
		if (g.A) {
			return w.pol.apply(w, g.f)
		}
		if (O(g.f) && O(g.s)) {
			g.e(function (g) {
				w.pol(g).stat()
			})
			return w
		}
		o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
		o.x = N(o.x, w.hW);
		o.y = N(o.y, w.hH)
		b = w.D(o.x, o.y)
		if (!g.p) {
			return b.pol(o.p)
		}
		if (o.rg) {
			o.p.ps(o.rg, function (p) {
				b.pol(o)
			})
		}
		else {
			o.p.ps(function (p) {
				b.pol(o)
			})
		}
		return b.f()
	}
	w.ps = function (x, y, p) {
		var w = this, b
		b = w.D(x, y)
		p.ps(b, function (p) {
			b1.pol(p)
		})
	}
	w.polS = function () {
		alert('you found w.polS');
		var w = this, g = G(arguments), b, o
		if (g.jA) {
			return w.pol.apply(w, g.f)
		}
		if (O(g[0]) && O(g[1])) {
			g.e(function (g) {
				w.pol(g).stat()
			});
			return w
		}
		o = O(g.f) ? g.f : N(g.f) ? {x: g.f, y: g[1], p: g[2]} : {p: g.f}
		o.x = N(o.x, w.hW);
		o.y = N(o.y, w.hH)
		b = w.D(o.x, o.y)
		if (!g.p) {
			return b.pol(o.p)
		}
		if (o.rg) {
			o.p.ps(o.rg, function (p) {
				b.pol(o)
			})
		}
		else {
			o.p.ps(function (p) {
				b.pol(o)
			})
		}
		return b.f()
	}
	w.polies = w.ps = function (x, y, p) {
		p.ps(this.D(x, y), function (p) {
			b1.pol(p)
		})
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
			b.pol({v: g.t})
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
	w.pol1 = function () {
		var w = this, g = G(arguments), o
		var v = V(g.f, g.s)
		var b = w.D(v.x, v.y)
		b.pol({v: g.t})
		return b
	}
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
	b.pD = function () {
		var b = this, f = b.f(), g = G(arguments), pD = $pD()
		if (!f) {
			return pD
		}
		// if the body has no freqkin fixts.. 
		// if its an infant body , massless? fixtureless
		pD = M.p(f)
		_.eR(b.fs(), function (f) {
			pD = pD.U(f)
		})
		return pD
	}
	b.polDefault = b.polDef = b.bolDf = b.pD = b.P = function () {
		var b = this, p, fs = b.fs()
		if (!_.f(fs)) {
			return new PolyDefault()
		}
		p = M.p(_.f(fs))
		_.eR(fs, function (f) {
			p = p.U(f)
		})
		return p//p.reg(b)
		//this returns a gPoly
	}
	b.ps = function (fn) {
		alert('b.ps sucks')
		var b = this,
				arr = [],
				p = b.uni()
		if (F(fn)) {
			p.ps(b, fn);
			return b
		}
		p.ps(b, function (v) {
			arr.push(v)
		})
		return arr
	}
}
function points() {
	bH.vs = function () {
		return this.m_vertices
	}
	pH.vs = pH.verts = function () {
		var verts = this.m_vertices
		return _.m(verts, function (v) {
			return [v.x * 30, v.y * 30]
		})
		function alt() {
			pH.vs = pH.vertsx = function () {
				alert('pH.vs. see boxShapes.js')
				var pH = this
				return _.m(pH.m_vertices, function (v) {
					return [v.x * 30, v.y * 30]
				})
			}
		}
	}
	pH.vec = pH.setAsVec = function (v, sc) {
		var pH = this //used by SepLib
		pH.SetAsVector(_.m(v, function (v) {
			return V(v).d(N(sc, 30))
		}))
		return pH
		function alt() {
			pH.setAsVec = function (vec, scale) {
				scale = N(scale) ? scale : 30
				vec = _.map(vec, function (v) {
					return V(v).div(scale)
				})
				this.SetAsVector(vec)
				return this
			}
		}
	}
	f.wV = function () {
		var f = this, b = f.B(), g = G(arguments),
				vs
		vs = g.n ? f.vs() : f.vs('+')
		return b2d.tA(_.m(vs, function (v) {
			return V(v).add(b)
		}))
	}
	bx.pts = function () {
		var g = G(arguments)
		var pts = g.s ? g : g.f
		return _.m(pts, bx.div)
		function docs() {
			//= b2d.verts
			//all this does is to 'scale down' a series of points
			//can pass in pts naked OR in an array
			//can pass in: (1) verts ([],[],[]) OR (2) an array [[],[],[]]
		}
	}
	bx.recPts = function (x, y, w, h) {
		var hW = w / 2, hH = h / 2
		return [[x - hW, y - hH], [x + hW, y - hH],
			[x + hW, y + hH], [x - hW, y + hH]]
		function docs() {
			// =	b2d.recVerts = b2d.recPoints = b2d.recV
		}
	}
	f._pts = function () {
		var f = this
		f.__pts = function () {
			return this.H().m_vertices
		}
		return _.m(f.__pts(), b2d.mult)
	}
	f.locPts = function () {
		var f = this, b = this.B(), g = G(arguments)
		var pts = f._pts()
		return g.p ? _.m(pts, function (v) {
			return v.rt(b.rt())
		}) :
				pts
		function docs() { 	// (optionally rotated locally by body's rotation)
		}
	}
	f.pts = function () {
		var f = this, b = f.B(), g = G(arguments)
		return b2d.tA(_.m(f._pts(), function (v) {
			return g.n ? v : v.rt(b.rt())
		}))
		function docs() {

//=f.vs = f.points = f.verts = f.vertices =
			// 
			/*
			 b2d.tA source :
			 function(vs) {
			 return _.m(vs, function (v) { return [v.x, v.y]  })
			 }
			
			 v.tA:function () { return [v.x, v.y] }
			 */
		}
	}
	f.ptsA = function () {
		var f = this
		return _.m(f.pts(), function (v) {
			v = V(v)
			return [v.x, v.y]
		})
		function docs() {//=f.vsA
		}
	}
	f.wPts = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = g.p ?  // was g.N
				f.pts('+') : f.pts()
		return _.m(pts, function (v) {
			return v.add(b)
		})
		function docs() {
//give world verts of fixt rotated (or optionally, not rotated for some reason)
		}
	}
	f.wPtsA = function () {
		var f = this, b = f.B(), g = G(arguments)
		var pts = f.pts()
		var pt = V(b.X(), b.Y())
		pts = b2d.add(pts, pt)
		return b2d.tA(pts)
	}
	f.wPtsGP = function () {
		return $pD(this.wPts())
	}
	f.pos = f.cirPos = function () {
		var f = this
		var h = f.H()
		var posPt = h.m_p
		return V(posPt.x, posPt.y).mult()
		function docs() {
			// for circs
		}
	}
	f.GP = function () {
		var f = this
		var pts = f.wPts()
		return $pD(pts)
	}
	b.pts = function (fn) {
		var b = this
		var arr = []
		var pD = b.uni()
		if (F(fn)) {
			pD.ePol(fn);
			return b
		}
		return pD.pts()
		function docs() {
			function alt() {
				b.pts = b.ps = function (fn) {
					var b = this, arr = [], p = b.uni()
					if (F(fn)) {
						p.ps(b, fn);
						return b
					}
					p.ps(b, function (v) {
						arr.push(v)
					})
					return arr
				}
			}
		}
	}
	b.ptsGP = function () {
		var b = this
		var num = this.num()
		if (num == 0) {
			return
		}
		var fs = b.fixts()
		var pg = fs[0]
		if (num == 1) {
			return pg.union(pg)
		}
		_.e(_.r(fs), function (f) {
			f = M.poly(f)
			pg = M.poly(pg.union(f))
		})
		return pg
		function docs() {//		 
			//return this.union()
			//it used to just get from the FIRST fixt,
			//but now it unions them all together :)
			//b.verts = function(){ return this.fixt().verts() }
		}
	}
	b.wPtsGP = function () {
		var b = this, g = G(arguments)
		return b.pD().pts()
	}
	b.wPts = function () {
		var p = this.transform().position.mult()
		return _.m(this.pts(), function (pt) {
			return pt.add(p)
		})
	}
	b.rtWPts = function () {
		var b = this
		return _.m(b.rtPts(), function (v) {
			return V(v.x + b.X(), v.y + b.Y())
		})
	}
	b.rtPts = function () {
		var b = this
		var rt = M.tR(b.rt())
		return _.m(b.pts(), function (v) {
			var v = V(v)
			var x = v.x * M.c(r) - v.y * M.s(r) + b.X()
			var y = v.x * M.s(r) + v.y * M.c(r) + b.Y()
			return V(x, y)
		})
		function docs() {
			
			//b.vs????
//b.fsGp   fsToGPol...
// for each of my fxs, 
// turn them into gP's
// and then aggregate them all
// by unioning each reductively
// so it gets bigger and bigger..
			function alt() {
				b.rtPts = b.rotVerts = function () {//rotated but local
					newX = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.cos(rad) - y * Math.sin(rad)
					}
					newY = function (x, y, rad) {
						rad = Math.toRadians(rad)
						return x * Math.sin(rad) + y * Math.cos(rad)
					}
					f.Vold = function () {//f.rotVerts=
						return this.wPts()
						newX = function (x, y, rot) {
							rot = Math.toRadians(rot)
							x *= Math.cos(rot).toFixed(3)
							y *= Math.sin(rot).toFixed(3)
							return x - y
						}
						newY = function (x, y, rot) {
							rot = Math.toRadians(rot)
							return (x * Math.sin(rot)) + (y * Math.cos(rot))
						}
						var verts = this.verts(), b = this.B()
						return _.map(verts, function (v) {
							var x = v.x, y = v.y
							return V(
									newX(x, y, b.rot()) + b.X(),
									newY(x, y, b.rot()) + b.Y())
						})
					}//this becomes wVerts
					var b = this, pts = b.verts()
					return _.m(pts, function (v) {
						var x = v.x,
								y = v.y
						return V(newX(x, y, b.rot()), newY(x, y, b.rot()))
					})
				}
			}
			
			//this returns [V,V,V...]
		}
	}
	b.pos = function () {
		return this.tf().position.m()
	}
	b.pgPts = function () {
		return M.poly(this.V())
		function docs() {
//= b.polyVerts
		}
	}
	b.reg = b.rel = function (p) {
		var b = this
		var pts = gpc.iP(p) ? p.pts() : p
		return _.m(pts, function (v) {
			v = V(v)
			return V(v.x - b.X(), v.y - b.Y())
		})
		function docs() {
			//my poly operations can only work with POSITIVE vertices
			//but box2d needs fixt vertices specified relative to a body
			//so this allows the body that the operation was based on to take responsibility
			//for converting them back
			//you can pass in the verts, or the gPoly itself!
			//this returns [V,V,V...]
		}
	}
	b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		if (g.s) {
			return _.m(g, b2d.div)
		}
		//passed in verts ([],[],[])
		return _.m(g.f, b2d.div) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}
	}
	b2d.divPoints = b2d.divPts = b2d.vs = function () {
		var g = G(arguments)
		//all this does is to 'scale down' a series of points
		//can pass in pts naked OR in an array
		return _.m(
				g.s ? g : //passed in verts ([],[],[])
						g.f,
				b2d.div
		) //passed an array [[],[],[]]
		//b2d.div <- function div(v){return V(v).div()}	
	}
	b2d.hasVerts = function (poly) {
		return poly.m_List.get(0)
	}
}
function extensions() {
	pS.reg = function (b) {
		//= pS.toRelativePoints = pS.mapToBoxWorld
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g.f, g.s)
		return M.p(vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		}))
	}
	pD.reg = pD.rel = function (b) {
		var p = this, g = G(arguments),
				vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!
		//what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
	pS.reg = function (b) {
		var p = this, g = G(arguments), vs = p.vs(), b, o
		//you can pass in the verts,
		// or the gPoly itself!                 //what about a f?
		o = V(g[0], g[1])
		vs = _.m(vs, function (v) {
			return V(v).sub(o.x, o.y)
		})
		return M.p(vs)
	}
}
function apps(){
	BCONVEX = function () {
		w = b2d.W()
		w.ball()
		b = w.dyn(400, 400)
		b.polyArr('r', [
			[-100, 0],
			[0, -100],
			[100, -50]
		])
		b.polyArr([
			[-10, 0],
			[0, -100],
			[100, -50]
		])
		b.polyArr(['b', [-200, 0], [0, -100], [10, 150]])
		b.polyArr('o', [-300, 0], [0, -100], [10, 150])
	}
	BODYVERTS = function () {
		w = b2d.W()
		w.ball()
		b = w.stat(300, 300)
		f1 = b.poly(100, 50)
		f2 = b.poly(50, 100)
		//p =   f1.union(f2)
		p = b.verts()
		w.stat(600, 200).sep(p)
	}
	BODVERTS = function () {
		w = b2d.W()
		b = w.B(200, 200, 100, 100).stat()
		b.poly(20, 200)
		fs = b.fixts()
		f1 = fs[0]
		f2 = fs[1]
		p = f1.polyVerts().union(f2.polyVerts())
		b2d.polyDot(p)
		relP = b.rel(p)
		b2d.polyDot(relP)
		w.B(400, 200).conc(relP)
		w.B(500, 400, [-100, 0], [0, -100], [100, 50])
		w.B(500, 430).conc([[-100, 0], [0, -100], [100, 50]])
		//make conc happen automatically whenever array of points specified
		//conCAVE hull??
		//union of 2 non overlapping fixtures, can just result in a body with two fixtures.. yea, why are unions not just creating bodies with all the fixtures?  no need combine two fixtures into one, right???!
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
	GPC = function () {
		v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
			[105, 200], [141, 163], [48, 139], [74, 117]]
		v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
		p1 = M.p(v1)
		p2 = M.p(v2)
		x0 = $.can('b', 300, 200).A().ctx()
		x0.drawPolys(p1, 'b', 0, -30)
		x0.drawPolys(p2, 'r', 0, -30)
		$.br().A()
		xx = $.can('y', 300, 400).A().ctx()
		_.e(['D', 'I', 'U', 'X'], function (o) {
			$.bt(o, function () {
				xx.clearRect(0, 0, 400, 400)
				xx.drawPolys(p1[o](p2), 'g', 0, 150)
			}).A()
		})
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
	POLS = function () {
		W(50)
		p1 = M.p([[-50, 50], [-50, -50], [50, -50], [50, 50]])
		p2 = M.p([[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]])
		w.D(300, 300).pol({v: p1.U(p2)})
		w.D(300, 300).pol({v: p1.D(p2)})
		w.D(300, 300).pol({v: p1.I(p2)})
		w.D(300, 300).pol({v: p1.X(p2)})
		w.pol(300, 300, p2)
		w.polS([300, 300, p1], [300, 300, p2])
		w.pol([500, 200, p1.U(p2)],
				[600, 200, p1.D(p2)],
				[700, 200, p1.I(p2)],
				[800, 200, p1.X(p2)])
	}
	PC = function () {
		W()
		w.S(700, 100).pC('d', 60, 5)
		w.S(530, 170).pC('d', 80, 10)
		w.pC(325, 155, 'd', 120, 15)
		w.S(100, 110).pol(w.S(100, 100, 'w', 50).f().pC(10, '*'))
		redRect = w.S(960, 280, 'r', 200, 100)
		p = w.S(830, 270).pC('z', 80, 10)
				.dif(
				redRect,
				'-')
		w.D(1000, 100).pol(p)
		w.$$(function () {
			w.e(function (b) {
				b.dyn()
			})
		})
	}
	HULL = function () {
		z()
		c = $.c('y', 800, 400).id('canvas').A()
		window.onload = init
		function init() {
			var canvas = c[0],        // main canvas element
					fps = 10,                                        // drawing frames per second
					convex = new Convex(),                            // convex hull
					dots = []                                     // dots, which are not in the convex hull
			// adjust canvas proportions
			// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
			// assign canvas context
			ctx = canvas.getContext("2d");
			setInterval(function () {
				
				// get a blank canvas //// clear
				ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
				// draw convex dots
				convex.draw()
				// draw dots
				dots.map(function (dot) {
					dot.draw()
				})
			}, 1000 / fps)
			// clicked on canvas
			c.click(function (evt) {
				var x = evt.clientX - canvas.getBoundingClientRect().left,
						y = evt.clientY - canvas.getBoundingClientRect().top
				// clear convex
				convex.dots = []
				// add dot
				dots.push(new Dot(new V(x, y)))
			})
			$.bt('draw convex', function () {
				// move dots to canvas
				dots.map(function (dot) {
					convex.addDot(dot)
				})
				// clear dots
				dots = []
			}).A()
		}
		
		var Dot = function (pos) {
			this.pos = pos
		}
		Dot.prototype = {
			draw: function () {
				ctx.beginPath();
				ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
				ctx.fill();
				ctx.closePath();
			}
		}
		Convex = function () {
			this.dots = []
		} // a convex hull
		Convex.prototype = {
			draw: function () {
				var _this = this, refDots;
				// loop through dots
				this.dots.map(function (el) {
					var dotAfter;
					// draw dot
					el.draw();
					refDots = _this.copyDots(_this.dots); // copy dots
					// remove el from reference dots
					for (var i = 0; i < refDots.length; i++) {
						if (refDots[i] != el) continue;
						refDots.splice(i, 1);
					}
					// get dot after this dot
					dotAfter = _this.getDotAfter(_this.dots, el);
					// draw direct line
					ctx.moveTo(el.pos.x, el.pos.y);
					ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
					ctx.stroke();
				})
			},
			addDot: function (dot) {
				// the dot cannot be added, because it wouldn't be a convex anymore
				if (this.isDotInsideConvex(this.dots, dot)) return;
				// add dot intentionally
				this.dots.push(dot);
				// less than four dots are always a convex
				if (this.dots.length < 4) return;
				// remove dots, which are not in the convex (anymore)
				this.composeConvexHull();
			},
			composeConvexHull: function () {
				var refDots,        // all dots, except the one we are testing
						dot,            // the dot, supposed to be in the new convex
						newDots = [];    // dots, which are definitely part of the convex
				// loop dots
				for (var i = 0; i < this.dots.length; i++) {
					
					// reset dots reference
					refDots = this.copyDots(this.dots);
					// assig dot to the current index
					dot = refDots[i];
					// remove dot from refDots
					for (var h = 0; h < refDots.length; h++) {
						if (h != i) continue;
						refDots.splice(h, 1);
						break;
					}
					// the dot is not inside of the convex, therefore add it
					if (!this.isDotInsideConvex(refDots, dot)) {
						newDots.push(dot);
					}
				}
				// assign new convex
				this.dots = newDots;
			},
			/*
			 copy dots object
			 this is done due to call by reference
			 */
			copyDots: function (ref) {
				var dots = [];
				ref.map(function (dot) {
					dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
				});
				return dots;
			},
			isDotInsideConvex: function (convexDots, dot) {
				var dotBefore, dotAfter, sign;
				// at least three dots required for a convex
				if (convexDots.length < 3) return false;
				// the dot is definitely not inside the convex hull
				if (this.dotOutsideConvexRect(convexDots, dot)) return false;
				// assign dot before to the closest dot by the angle, which is negative
				dotBefore = this.getDotBefore(convexDots, dot);
				// assign dot after to the closest dot by the angle, which is positive
				dotAfter = this.getDotAfter(convexDots, dot);
				// dot on the inside of the line from dotBefore to dotAfter
				return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
			},
			/*
			 is the dot outside of the convex rectangle?
			 */
			dotOutsideConvexRect: function (convexDots, dot) {
				var outside = [true, true, true, true];
				for (var i = 0; i < convexDots.length; i++) {
					if (convexDots[i].pos.x < dot.pos.x)
						outside[0] = false;
					if (convexDots[i].pos.x > dot.pos.x)
						outside[1] = false;
					if (convexDots[i].pos.y < dot.pos.y)
						outside[2] = false;
					if (convexDots[i].pos.y > dot.pos.y)
						outside[3] = false;
				}
				return outside[0] || outside[1] || outside[2] || outside[3];
			},
			/*
			 get middle position as vector from the bounding dots
			 */
			getCenter: function (dots) {
				var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
				dots.map(function (dot) {
					if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
					if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
					if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
					if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
				});
				return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
			},
			/*
			 get the closest dot before dot from dots
			 */
			getDotBefore: function (dots, dot) {
				var center, bgRad = -Math.PI * 2, dotBefore;
				center = this.getCenter(dots);
				dotRad = center.angleTo(dot.pos);
				dots.map(function (needleDot) {
					var needleRad = center.angleTo(needleDot.pos),
							refRad = needleRad - dotRad;
					if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
					if (refRad <= bgRad) return;
					bgRad = refRad;
					dotBefore = needleDot;
				});
				return dotBefore;
			},
			/*
			 get the closest dot after dot from dots
			 */
			
			getDotAfter: function (dots, dot) {
				var center, smRad = Math.PI * 2, dotAfter
				center = this.getCenter(dots)
				dotRad = center.angleTo(dot.pos)
				dots.map(function (needleDot) {
					var needleRad = center.angleTo(needleDot.pos),
							refRad = needleRad - dotRad;
					if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
					if (refRad >= smRad) return
					smRad = refRad
					dotAfter = needleDot
				})
				return dotAfter
			}
		}
		var V = function (x, y) {
			this.x = x
			this.y = y
		}
		V.prototype = {
			subtract: function (v) {
				return new V(this.x - v.x, this.y - v.y);
			},
			/*
			 this = center, v = destination
			 */
			angleTo: function (v) {
				var ref = this.subtract(v)
				return Math.atan2(ref.y, ref.x) + Math.PI
			},
			/*
			 0 = on line, 1 = inside, -1 = outside
			 */
			getSide: function (v1, v2) {
				return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
			}
		}
	}
	PDPS = function () {
		W()
		b = w.brick()
		p = M.p(b)
		p.ps(b, function (p) {
			w.D(300, 400).pol(p).stat()
		})
		w.i.dot(300, 400)
	}
	VS = function () {
		W()
		b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
		w.pDraw(b.P(), 50, 10).dot()
	}
	HOL = function () {
		W();
		$l('hol')
		b = w.S(400, 400, 'r', 300, 300).f()
		b1 = w.S(400, 400, 'z', 100, 100).f()
		d = M.p(b).D(b1)
	}
	HOLE = function () {
		W(0)
		out = w.S(300, 300, 'b', 200, 200)
		inn = w.S(300, 300, 'c', 100, 100)
		out.dif(inn)
		inn.dyn()
	}
	WALLZ = function () {
		W(10).Y()
		x = w.S(900, 450, 'r', 250, 200)
		bb = w.S(w.w, w.h / 2, 'w', 200, 100)
		w.r_.sub(bb)
		w.r_.C('o')
		bb.kill()
		b = w.S(1200, 300, 'p', 200, 100)
		b1 = w.S(1200, 300)
		DIF(w.r_.f(), b.f())
				.ps(b, function (p) {
					b1.pol(p)
				})
		b.kill()
	}
}