function rayy() {
	b2d.p()
	w.ray = function () {
		var w = this, g = G(arguments), o, arr
		o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
			x: g.f,
			y: g.s,
			x1: g.t,
			y1: g[3],
			fn: g[4]
		}
		arr = [];
		w.RayCast(function (f) {
			if (f.of(o.k)) {
				arr.push(f)
			}
		}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
		if (!o.fn) {
			return arr
		}
		if (g.p) {
			o.fn(_.f(arr))
		}
		else if (g.n) {
			o.fn(_.l(arr))
		}
		else {
			_.e(arr, function (f) {
				o.fn(f)
			})
		}
		return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
	}
	w.rC1 = function () {
		var w = this
		w.RayCastOne
	}
	w.rCA = function () {
		var w = this
		w.RayCastAll
	}
	w.rC = function (fn, v1, v2) {
		var w = this
		return w.RayCast(fn, V(v1).div(), V(v2).div())
	}
	w._rC = function (v1, v2, fn) {
		var w = this
		return w.RayCast(fn, V(v1).div(), V(v2).div())
	}
	f.AB = function () {
		var ab = this.GetAABB()
		return {
			l: ab.lowerBound.m(),
			u: ab.upperBound.m()
		}
	}
	f.rC = function () {
		var inp, res
		i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
		res = this.RayCast(inp)
		return res
	}
	b2d.Seg = function (x, y, x1, y1) {
		seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
		return seg
	}
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
	rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
		/*
		 If the ray does intersect the shape,
		 b2Fixture::RayCast will return true and we can look in the output
		 struct to find the actual fraction of the intersect point,
		 and the normal of the fixture 'surface' at that point: Raycasting
		
		 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
		 */
	}
 
}
function rayCst() {
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
	function segment() {
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
}
//function ray() {
w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
 
rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points
//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
	/*
	 If the ray does intersect the shape,
	 b2Fixture::RayCast will return true and we can look in the output
	 struct to find the actual fraction of the intersect point,
	 and the normal of the fixture 'surface' at that point: Raycasting
	
	 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
	 */
}
f.rC = function () {
	var inp, res
	i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
	res = this.RayCast(inp)
	return res
}
 