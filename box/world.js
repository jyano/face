w = b2d.World.prototype // = b2d.D.b2World.prototype
f=b2d.F.prototype

w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}
w.getGroundBody = w.gB = w.gGB = function () {
	return this.GetGroundBody()
}
w.GGB = w.grB = w.gB = w.GGBd = function () {
	return this.GetGroundBody()
}
w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}
w.bd = w.GBL = w.GBdL = w.bs = w.bL = function () {
	return this.GetBodyList()
}
//can be result of w.b if g.u//= w.getBodyList
w.gv = w.G = function (x, y) {
	var w = this
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	var gv = w.GG()
	if (U(x)) {
		return gv
	}
	var v
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-gv.x, -gv.y)
	}
	return w.SG(v)
}
w.G = function (x, y) {
	var v, currGrav = this.GetGravity()
	if (U(x)) {
		return currGrav
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	if (x == 'flip') {
		v = V(-currGrav.x, -currGrav.y)
	}
	w.SetGravity(v)
	return this
}
w.cB = function (bD, fD) {
	var w = this, g = G(arguments), o
	w.CB = w.CBo = w.CBd = function (bD) {
		return this.CreateBody(bD)
	}
	var b = w.CB(g.f)
	if (g.s) {
		b.f(g.s)
	}
	return b
}
w.GBC = w.n = w.numBods = w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.n = w.numBods = w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.getBodyList = w.bL = function () {
	return this.GetBodyList()
}
w.count = w.getBodyCount = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBC = w.GBoC = w.nBd = w.numBods = w.bC = w.gBC = function () {
	return this.GetBodyCount()
}
w.GBL = function () {
	return this.GetBodyList()
}
w.DB = w.DBo = w.DBd = function (b) {
	this.DestroyBody(b);
	return this
}
w.ds = w.dB = function (b) {
	var w = this, g = G(arguments), o
	return g.u ? w.eB(function (b) {
		w.destroy(b)
	}) : w.DB(b)
}
w.destroyBody = w.destroy = w.dB = w.destroy = w.destroyAll = w.destroyAllBodies = function (b) {
	var w = this
	if (U(b)) {
		w.each(function (b) {
			w.destroy(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.rmB = w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {
		w.e(function (b) {
			w.rmB(b)
		})
	}
	else {
		w.DestroyBody(b)
	}
	return w
}
w.bd = function () {
	var bs = this.GBL()
	return bs
}
w.bods = function () {// a real analog to the jquery obj ?
}
w.each$ = w.eachClick = w.bodyClick = function (l) {
	var w = this
	w.each(function (b) {
		b.click(l)
	})
	return w
}
//moves all bodies ?!!
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

function randBods(){
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
//shB = b2d.DebugDraw.e_shapeBit
//jB = b2d.DebugDraw.e_jointBit
//add random bodies
	w.randRects = function (ob) {
		var that = this
		ob = ob || {}
		var y = ob.y || 0,
				z = N(ob.z) ? ob.z : 1
		_.times(30, function (i) {
			that.rect(
					Math.random() * 1100 + 20,
					(Math.random() * 150 + 40) + y,
					(Math.random() * 30 + 15) * z,
					(Math.random() * 30 + 15) * z
			).stat().K('randomRect')
		})
		return this
	}
	w.addRandomBody = w.randomFixture = function () {
		var body = this.dynamic(Math.random() * 1000, 100,
				b2d.randomFixture())
		return body
	}
	w.random = w.addRandomBodies = function (howMany) {
		howMany = howMany || 10;
		var that = this
		_.times(howMany, function (num) {
			that.addRandomBody()
		})
		return this
	}
	w.addTenBalls = function (num) {
		num = num || 10;
		var that = this
		_.times(num, function (i) {
			that.ball(100 + (i * 80), 200)
		})
		return this
	}
	w.addHundBalls = function (num) {
		num = num || 100;
		var that = this
		_.times(num, function (i) {
			that.circ(100 + (i * 8), 50, 10)
		})
		return this
	}
}