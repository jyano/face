f.GN = f.N = f.next = function () {
	return this.GetNext()
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			//w.q is hack
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.N = f.next = function () {
	return this.GetNext()
}
f.$ = function (fn) {
	var f = this, b = f.B(), w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (fx) {
			if (f == fx) {
				_.b(fn, f)(o)
			}
		})
	})
	return f
}
f.next = function () {
	return this.GetNext()
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}
w.QP = w.QPt = function (fn, vec) {
	this.QueryPoint(fn, vec);
	return this
}
w.QS = w.QH = function () {
	return this.QueryShape.apply(this, arguments)
}
w.qP = w.qPt = w.qPoint = function (fn, x, y) {
	return this.QP(fn, V(x, y, '-'))
} //w.queryPoint = 
w.QA = w.Q = function (a, b) {
	this.QueryAABB(a, b);
	return this
}
w.ABpt = w.ptAB = w.bAt = w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
	var w = this, g = G(arguments), o
	var selBd = null
	w.QA(function (f) {
				if (f.B().isDyn() && f.tPt(mX, mY)) {
					selBd = f.B();
					return false
				}
				return 1
			},
			$AB(x - .001, y - .001, x + .001, y + .001))
	return selBd ? selBd : 0
}//w.getBodyAtPoint =
worPt()
fixPt()
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
function worPt() {
	w.qAB = w.Q = w.queryAABB = function (func, x1, y1, x2, y2) {
		var w = this,
				AB = b2d.AB(x1, y1, x2, y2),
				num = 0
		w.QueryAABB(function (f) {
			num++
			return func(f, f.B(), num)
		}, AB)
		return num
	}
	w.queryPoint = function (func, x, y) {
		this.QueryPoint(
				function (f) {
					_fixt = f
					_body = _fixt.GetBody()
					func(f)
				},
				V(x, y, '-')
		)
		return this
	}
	w.$ = w.click = function (func) {
		var w = this
		$(w.hud.canvas).click(function (e) {
			func(e.pageX, e.pageY)
		})
		return w
	}
	w.$$ = function (func) {
		var w = this
		$(w.hud.canvas).dblclick(function (e) {
			func(e.pageX, e.pageY)
		})
		return w
	}
	w.queryXY = function (func, x, y) {
		var w = this  //does not divide
		w.QueryAABB(func, b2d.AABB01(x, y))
		return w
	}
	w.getBodyAtPoint = function (x, y) {
		var body = null
		this.QueryAABB(function queryFunc(fxt) {
					if (!fxt.isStat() && fxt.test(
									mX * 30,
									mY * 30
							)) {
						body = fxt.body()
						return false
					}
					return true
				},
				b2d.AABB01(x, y))
		return body
	}
	w.bodyAt = w.bodyAtPoint = function (x, y, fn, k) {
		var w = this, b //does not div
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(function (f) {
			if (U(k) || f.of(k)) {
				if (f.test(x, y)) {
					b = f.B()
					return false
				}
			}
			return true
		}, x, y)
		if (!b) {
			return false
		}
		if (F(fn)) {
			return fn(b) || w
		}
		return b
	}
	w.qXY = function (x, y, fn) {
		var w = this, v
		//function on TOPMOST fixt FIRST
		// then goes down, but only if function returns 'true'
		//great way to work with fixts/bods at a certain x,y point
		if (F(x)) {
			v = V(y, fn);
			fn = x
		}
		else if (O(x)) {
			fn = y;
			v = (V(x))
		}
		else(v = V(x, y))
		w.QueryAABB(fn, b2d.AABB01(v))
		return w
	}
//query a point of specific kind,
// more options on fixts
	w.XY = function (x, y, fn, k) {
		var w = this, fixt = false // - -> bottom, + all ? :)
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(x, y, function (f) {
			if (f.ofClass(k) && f.test(x, y)) {  //k null -> true // doesnt need to div, because qXY will div
				fixt = f;
				return false
			}
			return true
		}) //stops at top most fixt
		if (fixt && F(fn)) {
			fn = _.bind(fn, fixt)
			return fn(fixt) || w
		} // or w? //makes sense actually
		return fixt
	}
//query bodies
	w.bXY = function (x, y, fn, k) {
		var w = this,
				b = false
		if (O(x)) {
			k = fn;
			fn = y;
			y = x.y;
			x = x.x
		}
		w.qXY(x, y, function (f) {
			if (f.ofClass(k) && f.test(x, y)) {
				b = f.B();
				return false
			} //cycles through all the fixts to find the first
			return true
		})
		if (F(fn)) {
			return _.bind(fn, b)(fn(b)) || w
		}
		return b
	}//**
	w.dynAt = w.at = w.bodyAtPoint = function (x, y) {
		var body = null, func
		func = function (f) {
			if (f.isDyn() && f.testPoint(x, y)) {
				body = f.B();
				return false
			}
			return true
		}
		this.queryXY(func, x, y)
		return body
	}
	w.QPt = function (fn, p) {
		this.QueryPoint(fn, p)
		return this
	} //= w._qPoint
	w.qPoint = function () {
		var w = this, g = G(arguments), o
		o = g.N_ ? {v: V(g.f, g.s), fn: g.t} : {v: g.f, fn: g.s}
		return w.QPt(function (f) {
			return o.fn(f, f.B(), f.B().W())
		}, o.v.d())
	}
	w.qA = function (fn, ab) {
		this.QueryAABB(fn, ab);
		return this
	}
//this is HACK//
	w.q = w.qPt = w.qP = w.queryPt = w.query = function () {
		var w = this, g = G(arguments), o,
				fx
		o = g.S_ && N(g.s) ?
		{k: g.f, x: g.s, y: g.t, fn: g.fo} :
				g.S_ && O(g.s) ?
				{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								g.A_ ?
								{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		var fn = function (f) {
			if (!f) {
				alert('w.query !this(f)')
			}
			if (f.of(o.k) && f.tP(o.x, o.y)) {
				fx = f;
				return false
			}
			return true
		}
		w.qA(fn, $AB(o.x, o.y))
		if (!fx) {
			return false
		}
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
//END HACK//
	w.Q = function () {
		$l('w.Q')
		var w = this, g = G(arguments), o, fx
		o = g.O ? g.f :
				g.S_ && N(g.s) ?
				{k: g.f, x: g.s, y: g.t, fn: g.fo} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
										g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
												g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
												{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
		function qAFn(f) {
			o.n++
			$l('w.Q qAFn' + o.n)
			if (o.fn(f, f.B(), o.n) !== false) {
				return true
			}
		}
		
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
	w.bs = w.bL = function () {
		return this.GetBodyList()
	}    //can be result of w.b if g.u//= w.getBodyList
	w.qA = function (fn, ab) {
		this.QueryAABB(fn, ab);
		return this
	}
	w.qPt = w.q = w.qP = w.queryPt = w.query = function () {
		var w = this, g = G(arguments), o,
				fx
		o = g.S_ && N(g.s) ?
		{k: g.f, x: g.s, y: g.t, fn: g.fo} :
				g.S_ && O(g.s) ?
				{k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
						g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g.fo} :
								g.A_ ?
								{x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
								{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
		var fn = function (f) {
			if (!f) {
				alert('w.query !this(f)')
			}
			if (f.of(o.k) && f.tP(o.x, o.y)) {
				fx = f;
				return false
			}
			return true
		}
		w.qA(fn, $AB(o.x, o.y))
		if (!fx) {
			return false
		}
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
	w.Q = function () {
		$l('w.Q')
		var w = this, g = G(arguments), o, fx
		o = g.O ? g.f :
				g.S_ && N(g.s) ?
				{k: g.f, x: g.s, y: g.t, fn: g.fo} :
						g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
								g.F_ && O(g.s) ? {fn: g.f, x1: g.s.x, y1: g.s.y} :
										g.F_ ? {fn: g.f, x1: g.s, y1: g.t, x2: g.fo, y2: g.fi} :
												g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
												{x1: g.f, x2: g.s, fn: g.t}
		o.n = 0
		w.qA(qAFn, $AB(o.x1, o.y1, o.x2, o.y2))
		function qAFn(f) {
			o.n++
			$l('w.Q qAFn' + o.n)
			if (o.fn(f, f.B(), o.n) !== false) {
				return true
			}
		}
		
		return w
		//but it makes a rectangle not square ??
	}//w.QUERY =
	w.rad = function (x, y, r, fn) {
		return this.Q({
			x1: x - r,
			y1: y - r,
			x2: x + r,
			y2: y + r,
			fn: fn
		})
	}
	w.eEv = w.eachEvery = function (fn) {
		var w = this
		z(function () {
			w.e(fn)
		})
		return w
	}
	w.inEv = function (n1, n2, fn) {
		_.in(n1, function () {
			_.ev(n2, function () {
				fn()
			})
		})
	}
	w.evIn = function (n1, n2, fn) {
		_.ev(n1, function () {
			_.in(n2, function () {
				fn()
			})
		})
	}
	w.e = w.each = function () {
		var w = this, g = G(arguments), o,
				bs = w.GetBodyList(), k, b, arr
		o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
		if (g.u) {
			alert('w.e')
		}
		arr = []
		while (bs) {
			b = bs;
			bs = bs.N()
			if (b.of(o.k)) {
				arr.push(b)
			}
		}
		_.e(arr, function (b) {
			o.fn(b)
		})
		return w
	}
	w.circleStat = function (x, y, r) {
		var cir = w.sB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w.circle = function (x, y, r) {
		var cir = w.dB(x, y)
		cir.A($cir(N(r, 50)))
		return cir
	}
	w._qPoint = function (fn, p) {
		this.QueryPoint(fn, p)
		return this
	}
	w.qPoint = function () {
		var g = G(arguments), o
		o = g.N_ ?
		{v: V(g.f, g.s), fn: g.t} :
		{v: g.f, fn: g.s}
		var fn = function (f) {
			var b = f.B(), w = b.W()
			return o.fn(f, b, w)
		}
		var point = o.v.div()
		this._qPoint(fn, point)
		return this
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
}
function fixPt() {
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a WORLD point within the fixture // very accurate
	}
	f.AB = function () {
		var ab = this.GetAABB()
		return {
			l: ab.lowerBound.m(),
			u: ab.upperBound.m()
		}
	}
	f.tP = f.hit = f.testPoint = f.test = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), v
		v = V(g.f, g.s)
		if (g.p) {
			w.dot(v)
		}
		return f.H().TestPoint(b.tf(), v.d())
		//is a point within the fixture // very accurate
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
}
function mouseQ() {
	w.logMXY = function (e) {
		var w = this,
				p = w.sToW(e.X, e.Y);
		w.mx = p.x;
		w.my = p.y
		return w
	}
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
//world mouse functions are great
// they demonstrates md, q, m, and ofClass 
// but it has a real purpose too!
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.mm(function (o) {
		w.logMXY(o)
	})
	w.md(function (o) {
		
		//this only goes off once when pushed and held down
		// anytime mousedown..
		// because that implies there was a mouse up 
		// so there should be no current mouse joint.. smart!
		w.logMXY(o)
		w.q(o.x, o.y, function (f) {
			//if(!f.iD()){return true}
			if (f.of(w.o.m)) {
				var b = f.B()
				w.mj = w.mJ(b, o.x, o.y)
			}
		})
	})
	w.mu(function () {
		// DESTROY WORLD MOUSE JOINT
		if (w.mj) {
			w.j(w.mj);
			w.mj = null
		}
	})
	w.logMXY = function (e) {
		var w = this,
				p = w.sToW(e.X, e.Y);
		w.mx = p.x;
		w.my = p.y
		return w
	}
	w.$ = function (fn) {
		var w = this
		w.UI().click(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.$$ = function (fn) {
		var w = this
		w.UI().dblclick(function (e) {
			fn({x: w.mx, y: w.my, e: e})
		})
		return w
	}
	w.mm = function (fn) {
		var w = this, g = G(arguments)
		$.mousemove(function (e) {
			var o = {
				x: w.mx,
				y: w.my,
				X: e.clientX,
				Y: e.clientY,
				e: e
			}
			fn(o)
		})
		return w
	}
	w.md = function (fn) {
		var w = this
		w.i.c.mousedown(function (e) {
			var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
			w.q(w.mx, w.my, function (f) {
				if (f) {
					o.f = f;
					o.b = f.B()
				}
			})
			fn(o)
		})
		return w
	}
	w.mu = function (fn) {
		var w = this, $cv = $(w.i.canvas)
		$cv.mouseup(function (e) {
			fn({
				x: w.mx,
				y: w.my,
				e: e
			})
		})
		return w
	}
	w.mdq = function (fn) {
		var w = this
		w.md(function (e) {
			w.q(e.x, e.y, function (f) {
				fn(f, e)
			})
		})
		return this
	}
	w.e$ = function () {
		var g = G(arguments), o
		o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
		this.e(function (b) {
			if (b.of(o.k)) {
				b.$(o.fn)
			}
		})
		return this
	}
}
b.$$ = function (fn) {
	var b = this, w = b.W()
	w.$$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
b.$ = function (fn) {
	var b = this, w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}
w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
w.each = w.eachBody = function (l, uD) {//=w.e=w.eB
	//can pass a cb to be run on EACH body
	//can also pass a uD to restrict cb to
	//run only on bodies with that uD
	var w = this,
			bs = w.GetBodyList(), k, b
	if (S(l)) {
		k = l;
		l = uD
	} else {
		k = uD
	}
	while (bs) {
		b = bs
		bs = bs.next()
		if (b.has(k)) {
			l(b)
		}
	}
	return w
}
w.eachD = w.eachDyn = function (l) {
	var w = this;
	w.each(function (b) {
		if (b.isDyn()) {
			l(b)
		}
	})
	return w
}
w.e$ = w.b$ = function (fn) {
	var w = this
	w.eB(function (b) {
		b.$(fn)
	})
	return w
}// = w.eachClick = w.bodyClick 
w.eD = w.eDB = w.eDyn = function (fn) {
	return this.eB(function (b) {
		if (b.iD()) {
			fn(b)
		}
	})
}
w.eEv = w.eachEvery = function (fn) {
	var w = this
	$t(function () {
		w.bds(fn)
	})
	return w
}
w.bds = w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(), k, b, arr
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f}
	if (g.u) {
		alert('w.e')
	}
	arr = []
	while (bs) {
		b = bs;
		bs = bs.N()
		if (b.of(o.k)) {
			arr.push(b)
		}
	}
	_.e(arr, function (b) {
		o.fn(b)
	})
	return w
}
w.bs = w.e = w.eB = function () {
	var w = this, g = G(arguments), o, b
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	b = w.B()
	while (b) {
		b.kFn = function (k, fn) {
			var b = this, g = G(arguments), o
			o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
			if (b.of(o.k) && F(o.fn)) {
				o.fn(b)
			}
			return b
		}
		b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
	}
	return w
}
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
}
w.each = function (func, userData) {
	var bodies = this.GetBodyList(), kind, body
	if (S(func)) {
		kind = func;
		func = userData
	} else {
		kind = userData
	}
	while (bodies) {
		body = bodies
		bodies = bodies.next()
		if (!kind || body.is(kind)) {
			func(body)
		}
	}
	return this
}
b.worldVec = function (vec, y) {
	if (N(vec) && N(y)) {
		vec = V(vec, y)
	}
	if (U(vec)) {
		vec = V(0, -100)
	}
	return this.GetWorldVector(vec)
}
b.countX = function () {
	return this.m_fixtureCount
}
b.each = b.eachFixt = function (func) {
	var fl = this.GetFixtureList()
	var withList = function self(list, func) {
		func(list)
		list = list.GetNext()
		if (list) {
			return self(list, func)
		}
	}
	withList(fl, func)
}
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
}; 