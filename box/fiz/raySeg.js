w.rC = w.rayCast = function (func, v1, v2) {
	return this.RayCast(func, V(v1, '-'), V(v2, '-'))
}
w.RC = function () {
	this.RayCast.apply(this, arguments);
	return this
}
w.RCA = function () {
	this.RayCastAll.apply(this, arguments);
	return this
}
w.RC1 = w.RCO = function () {
	this.RayCastOne.apply(this, arguments);
	return this
}
 function segment(){
	b2d.Seg = function (x, y, x1, y1) {
		seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
		return seg
	}
	 b2d.Segment = b2d.C.b2Segment
	 b2d.Segment = b2d.Collision.b2Segment
 }
 segment()
	b2d.rCIp = function (x, y, x1, y1, maxFrac) {
		maxFrac = N(maxFrac, 1)
		return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
	}
	b2d.rCOp = function (nX, nY, maxFrac) {
		maxFrac = N(maxFrac, 1)
		op = new b2d.Collision.b2RayCastOutput(
				maxFrac, V(nX, nY)
		)
		op.maxFraction = 1
		return op
	}
	w.rayCast = function (func, v1, v2) {
		return this.RayCast(func, V(v1, '-'), V(v2, '-'))
	}
	rayLine = function (x1, y1, x2, y2) {
		alert('rayLine')
		x1 = N(x1) ? x1 : 0
		y1 = N(y1) ? y1 : 0
		x2 = N(x2) ? x2 : 100
		y2 = N(y2) ? y2 : 100
		if (line) {
			line.remove();
			line = null
		}
		line = cjs.shape()
		line.graphics.s('white').mt(x1, y1).lt(x2, y2)
		w.s.A(line)
	}
	removeDots = function () {
		alert('removeDots')
		getDots = function () {
			var arr = []
			_.each(w.s.children, function (c) {
				if (c.N() == 'dot') {
					arr.push(c)
				}
			})
			return arr
		}
		dots = getDots()
		_.each(dots, function (dot) {
			dot.remove()
		})
	}
	b2d.Segment = b2d.C.b2Segment
	$Sg = b2d.Seg = function (x, y, x1, y1) {
		return new b2d.Segment(V(x, y), V(x1, y1))
	}
	b2d.rCIp = function (x, y, x1, y1, maxFrac) {
		maxFrac = N(maxFrac, 1)
		return new b2d.RCI(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
	}
	b2d.rCOp = function (nX, nY, maxFrac) {
		maxFrac = N(maxFrac, 1)
		op = new b2d.RCO(maxFrac, V(nX, nY))
		op.maxFraction = 1
		return op
	}
	w.RC = function (fn, p1, p2) {
		var w = this
		w.RayCast(fn, p1, p2)
		return w
	}
	w._rC = function (fn, v1, v2) {
		var w = this
		return w.RC(fn, V(v1).d(), V(v2).d())
	}
	w.rC = function () {
		var g = G(arguments), o
		if (N(g.t)) {
			$l('Ng.t')
			o = {v1: V(g.f, g.s), v2: V(g.t, g.fo), fn: g.fi}
		}
		else {
			o = {v1: g.f, v2: g.s, fn: g.t}
		}
		return this._rC(o.fn, o.v1, o.v2)
	}
	w.ray = function () {
		$l('ray')
		var w = this, g = G(arguments), o
		o = g.S_ ?
		{k: g.f, x: g.s, y: g.t, x1: g.fo, y1: g.fi, fn: g.si} :
		{x: g.f, y: g.s, x1: g.t, y1: g.fo, fn: g.fi}
		var arr = [];
		w.rC(o.x, o.y, o.x1, o.y1, function (f) {
			if (f.of(o.k)) {
				arr.push(f)
			}
		})
		if (!o.fn) {
			return arr
		}
		g.p ? o.fn(_.f(arr)) : g.n ? o.fn(_.l(arr)) : _.e(arr, o.fn)
		return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
	}
// RayCast(rayCastOutput,rayCastInput, tf)
// Cast a ray against this shape
// .// output — the ray-cast results.
// input:b2RayCastInput — the ray-cast input parameters.
// transform:b2Transform — the transform to be applied to the shape.
	w.RCO = w.rC1 = function () {
		var w = this
		w.RayCastOne
	}
	w.RCA = w.rCA = function () {
		var w = this
		w.RayCastAll
	}
	f.rC = function () {
		var inp = new b2d.RCI(V(), V(430, 450).d())
		return this.RC(inp)
	}
	b2d.RCI = b2d.RayCastInput = b2d.C.b2RayCastInput
	b2d.RCO = b2d.RayCastOutput = b2d.C.b2RayCastOutput
 