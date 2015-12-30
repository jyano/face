function klas(){
	userDa()
	function userDa() {
		fD.uD = fD.D = fD.data = function (da) {
			var fD = this
			if (U(da)) {
				return this.userData
			}
			this.userData = da
			return this
		}
		f.uD = f.data = function (da) {
			var f = this
			f.SUD = function (d) {
				this.SetUserData(d);
				return this
			}
			f.GUD = function () {
				return this.GetUserData();
			}
			if (U(da)) {
				return this.GUD()
			}
			this.SUD(da);
			return this
		}
		b.uD = b.data = b.userData = function (d) {
			if (U(d)) {
				return this.GetUserData()
			}
			this.SetUserData(d)
			return this
		}
	}
	
	fD.K = function (k) {
		var fD = this
		if (U(k)) {
			fD.getClass = function () {
				var g = G(arguments), fD = this, classes
				fD._K = fD._K || []
				this.classes = this.classes || []
				var ks = fD.classes.join(' ')
				if (g.p) {
					ks += ' : ' + fD.body().getClasses()
				}
				return ks
			}
			return fD.getClass()
		}
		fD.classes = fD.classes || []
		fD.classes.push(k)
		return fD
	}
	f.aK = function (k) {
		var f = this
		f._K = f._K || []
		if (S(k) && !f.of(k)) {
			f._K.push(k)
		}
		return f
	}
	f._gK = function () {
		var f = this
		f._K = f._K || []
		return f._K.join(' ')
	}
	f.gK = function () {
		var g = G(arguments), classes
		this.classes = this.classes || []
		classes = this.classes.join(' ')
		if (g.p) {
			classes += ' : ' + this.body().getClasses()
		}
		return classes
	}
	f.K = function () {
		var f = this, g = G(arguments);
		f._K = f._K || []
		if (g.u) {
			return f.gK()
		}
		if (g.O && g.f.k) {
			f.aK(g.f.k)
		}
		else if (g.S_) {
			_.eW(g.f, function (k) {
				f.aK(k)
			})
		}
		return f
	}
	f.of = function (k) {
		var f = this, b = f.B();
		//return S(k) ? f.of(k) : (f == k || b == k)
		return f._of(k) || b.of(k)
		/*
		
		 //if (!f) {return false}
		 if (!k) {
		 return true
		 }
		 return f == k || (S(k) && f.has(k)) || b.of(k)
		 */
	}
	f.ofK = function () {
		var f = this, b = f.B(),
				g = G(arguments)
		return f.hK(g) || b.hK(g)
	}
	f.is = function (k) {
		var f = this
		//	return S(k) ? f.hK(k) : f == k
		return k && f.of(k)
	}
	b.gK = function () {
		this.classes = this.classes || []
		return this.classes.join(' ')
	}
	b.aK = function (clas) {
		var that = this, func
		this.classes = this.classes || []
		if (U(clas)) {
			$l('need to provide a class!');
			return this
		}
		if (F(clas)) { // use case??
			func = _.bind(clas, that)
			this.addClass(func(that.getClasses()))
			return this
		}
		_.each(arguments, function (clas) {
			if (S(clas)) {
				_.each(clas.trim().split(' '), function (clas) {
					clas = clas.trim()
					if (clas != '' && !that.hasClass(clas)) {
						that.classes.push(clas)
					}
				})
			}
		})
		return this
	}
	b.K = function () {
		var b = this, g = G(arguments);
		this._K = this._K || []
		/*
		 if (U(k)) {
		 return this.getClasses()
		 }
		 _.each(arguments, function (k) {
		 b.addClass(k)
		 })
		 */
		if (g.u) {
			return this._K.join(' ')
		}
		if (g.O) {
			this.K(g.f.k);
			return this
		}
		_.eW(g.f, function (k) {
			if (!b.of(k)) {
				b._K.push(k)
			}
		})
		return this
	}
	b.of = function (k) {
		if (b2d.iF(k)) {
			k = k.B()
		}
		return !k || _.ct(this._K, k) || this == k
	}
	b.is = function (k) {
		return k && this.of(k)
		/*
		 var that = this, is = false
		 _.each(arguments, function (k) {
		 if (that.K() == k) {
		 is = true
		 }
		 })
		 return is
		 */
	}
	function uD() {
		b.SUD = function (d) {
			this.SetUserData(d);
			return this
		}
		b.GUD = function () {
			return this.GetUserData()
		}
	}
}
klas()
f.GN = f.N = f.next = function () {
	return this.GetNext()
}
f.N = f.next = function () {
	return this.GetNext()
}
f.next = function () {
	return this.GetNext()
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
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
}
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
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
}
