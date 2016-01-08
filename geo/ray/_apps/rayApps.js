function rayApps() {
	IMP = function () {
		W({g: 0, w: 0}).Y()
		// y.rt(90).XY(200,240)
		w.D(200, 235, 'b', 10).lV(20, 0).d(10)
		w.D(900, 200, 'r', 100, 100).rt(45)
		r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
		r.$(function () {
			this.B().I(100, -2000)
		})
		f = r.f()
		w.i.dot(856, 240)
		/*
		 s = b2d.Seg(0,0,1200, 600)
		 s1 = b2d.Seg(1200,0, 0, 600)
		 lArr =  'the shape world transform'
		 nl = '2Vec2 — returns the hit fraction.'
		 // You can use this to compute the contact point
		 // p = (1 - lambda) segment.p1 + lambda segment.p2.
		 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
		 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
		 s.TestSegment(lArr, nl, s1, maxLam )
		 */
		ip = b2d.rCIp(0, 0, 1200, 600)
		op = b2d.rCOp(1, 2)
		res = f.rC(op, ip)
	}
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		_.in(function () {
			w.ray(0, 0, 500, 500, function (f) {
				f.C('g')
			})
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('me')
			}, '-')
			w.ray(0, 0, 500, 500, function (f) {
				f.B().bS('sun')
			}, '+')
		})
	}
	RC = function () {
		W();
		var p1, p2, d, l
		w.me(400, 100);
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
			w.i.e(function (c) {
				if (c.of('dot') || c.of('line')) {
					c.rm()
				}
				// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
			})
			w.d('b', p1);
			w.d('r', p2);
			w.l(p1.x, p1.y, p2.x, p2.y).K('line')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
	}
}
RAYCAST = RAC = function () {
	b2d.miniWorld()
	firstPoint = secondPoint = line = null
	w.brick(200, 200, 40, 20)
	w.st.on('stagemousedown', function (ev) {
		$l('stage mouse down')
		e = ev;
		x = e.rawX;
		y = e.rawY
		if (firstPoint == null) {
			firstPoint = {x: x, y: y}
		}
		else {
			if (secondPoint == null) {
				secondPoint = {x: x, y: y}
			}
			else {
				firstPoint = secondPoint;
				secondPoint = {x: x, y: y}
			}
			removeDots()
			w.s.dot('blue', firstPoint.x, firstPoint.y)
			w.s.dot('red', secondPoint.x, secondPoint.y)
			rayLine(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
			n = 0
			w.rayCast(function (fixt) {
						n = n + 1;
						f = fixt;
						b = fixt.GetBody()
						w.s.dot(b.X(), b.Y())
					},
					firstPoint, secondPoint)
			data(n + ' guys')
		}
	})
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
IMP = function () {
	W({g: 0, w: 0}).Y()
	// y.rt(90).XY(200,240)
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(100, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	/*
	 s = b2d.Seg(0,0,1200, 600)
	 s1 = b2d.Seg(1200,0, 0, 600)
	 lArr =  'the shape world transform'
	 nl = '2Vec2 — returns the hit fraction.'
	 // You can use this to compute the contact point
	 // p = (1 - lambda) segment.p1 + lambda segment.p2.
	 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
	 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	 s.TestSegment(lArr, nl, s1, maxLam )
	 */
	ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
}
RAY = function () {
	W().C('z')
	w.S(200, 200, 'f', 100);
	w.S(500, 500, 'l', 160, 60)
	rs = w.ray(0, 0, 800, 800)
	_.in(function () {
		w.ray(0, 0, 500, 500, function (f) {
			f.C('g')
		})
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('me')
		}, '-')
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('sun')
		}, '+')
	})
}
RC = function () {
	W();
	var p1, p2, d, l
	w.me(400, 100);
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
		w.i.e(function (c) {
			if (c.of('dot') || c.of('line')) {
				c.rm()
			}
			// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
		})
		w.d('b', p1);
		w.d('r', p2);
		w.l(p1.x, p1.y, p2.x, p2.y).K('line')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
}
RAY = function () {
	W().C('z')
	w.S(200, 200, 'f', 100);
	w.S(500, 500, 'l', 160, 60)
	rs = w.ray(0, 0, 800, 800)
	_.in(function () {
		w.ray(0, 0, 500, 500, function (f) {
			f.C('g')
		})
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('me')
		}, '-')
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('sun')
		}, '+')
	})
}
RC = function () {
	W();
	var p1, p2, d, l
	w.me(400, 100);
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
		w.i.e(function (c) {
			if (c.of('dot') || c.of('line')) {
				c.rm()
			}
			// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
		})
		w.d('b', p1);
		w.d('r', p2);
		w.l(p1.x, p1.y, p2.x, p2.y).K('line')
		w.ray(p1, p2, function (f) {
			$l('ray hit')
			_f = f
			f.C('w')
		})
	})
}