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
HOU = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
	b = w.pD(100, 300,
			blue.pD().U(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOU2 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(450, 300, 'r', 60, 6).stat().al(.5)
	b = w.pD(100, 300,
			blue.pD().U(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOD = function () {
	W(600, 600).C('z')
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(300, 300, 'r', 20).stat().rt(10).al(.5)
	w.pD(100, 300,
			blue.pD().D(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOD1 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(330, 300, 'r', 30).stat().rt(10).al(.5)
	w.pD(100, 300,
			blue.pD().D(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOX = function () {
	W(600, 600).C('z').y()
	green = w.pC(200, 300, 'g', 30, 6).stat().al(.5)
	blue = w.pC(380, 300, 'b', 30).stat().al(.5)
	red = w.pC(320, 300, 'r', 60, 6).stat().al(.5)
	w.pD(500, 200, red.pD().X(blue.pD()), red)
	w.pD(200, 200, red.pD().X(green.pD()), red)
	w.pD(500, 400, red.pD().U(blue.pD()), red)
	w.pD(200, 400, red.pD().U(green.pD()), red)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOI1 = function () {
	W(600, 600).C('z').y()
	blue = w.pC(300, 300, 'b').stat().al(.5)
	red = w.pC(350, 300, 'r', 60, 6).stat().al(.5)
	w.pD(100, 300,
			blue.pD().I(red.pD()),
			blue
	).aV(6)
	// this is blue diff red.. so the outside of blue is left.. with a hole
}
HOI = function () {
	W(600, 600).C('z')//.y()
	b = w.pCS(300, 300, 'b')
	g = w.S(320, 270, 'g', 80, 60)
	r = w.pCS(350, 350, 'r', 60)
	b = w.pD(100, 300, b.pD().I(g.pD()).I(r.pD()), b)
	b.cn('thrust')
	return b
}
CLONESCALE = CLSC = function () {
	b = HOI().C('b')
	c = b.clone(100, 300).C('r')
}