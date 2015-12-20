function geoApps() {
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
	BODMINUS = function () {
		w = b2d.W()
		b = w.dyn(300, 400).stat()
		f = b.fixt(b2d.poly(100, 100))
		b2 = w.B(300, 400, [
			['r', [-100, 10], [-80, -40], [0, -200], [100, 0]],
			['b', 20, 50]
		]).stat()
		w.dyn(500, 400).stat().sep(b2.minus(b))
	}
	REDUCE = function () {
		w = b2d.W()
		b = w.dyn(300, 400).stat()
		f = b.poly(100, 200)
		f1 = b.poly(200, 100, 100, 0)
		f2 = b.poly(200, 100, 100, 0, 36)
		f3 = b.poly(20, 20, 200, 0)
		// u =  f.union( [f1,f2] )
		u = b.union()
		b2 = w.stat(600, 300).conc(u).dyn()
		// body.polyVerts() does an automatic union of ALL its verts! i think :)
	}
	UNIONNOTTOUCHING = function () {
		w = b2d.W()
		b = w.B(200, 200, 100, 100).stat()
		b2 = w.B(400, 400, 100, 100).stat()
		p = b.polyVerts().union(b2.polyVerts())
		_.each(p.verts(), function (v) {
			w.dot(v[0], v[1])
		})
		v1 = b2.polyVerts().verts()
		v2 = p.verts()
		_.isEqual(v1, v2) // true
		p2 = b2.polyVerts().union(b.polyVerts())
		_.each(p2.verts(), function (v) {
			w.dot('r', v[0], v[1])
		})
		b3 = w.B(500, 200, 100, 100).stat()
		b4 = w.B(550, 250, 100, 100).stat()
		p3 = b3.polyVerts().union(b4.polyVerts())
		_.each(p3.verts(), function (v) {
			w.dot(v[0], v[1])
		})
		b5 = w.B(700, 200, 100, 100).stat()
		b6 = w.B(800, 200, 100, 100).stat()
		p4 = b5.polyVerts().union(b6.polyVerts())
		_.each(p4.verts(),
				function (v) {
					w.dot(v[0], v[1])
				})
	}
} 
function gpcApps(){
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
}