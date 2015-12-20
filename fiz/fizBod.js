
bD.inertia = function (inertia) {
	if (U(inertia)) {
		return this.insertiaScale
	}
	this.insertiaScale = inertia;
	return this
}
bD.sleepy = bD.aS = function (canSleep) {
	this.allowSleep = canSleep ? true : false
	return this
}
bD.act = bD.setActive = function (isActive) {
	this.active = isActive ? true : false
	return this
}
b.$$ = funb.$ = function (fn) {
	var b = this, w = b.W()
	w.$(function (o) {
		w.q(o.x, o.y, function (f) {
			if (f.of(b)) {
				_.b(fn, f)(o)
			}
		})
	})
	return b
}ction (fn) {
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
b.polyArr = b.convex = function (col, arr, str) {
	var b = this, w = b.wor(), h, f,
	//when and if should i call .conc/.sep ?
	// i could auto-conc it.. but ill lose track of the fixts?
			g = G(arguments)
	if (g.length > 2) { //passing points direclty: ([],[],[]) or ('r',[],[],[])
		if (S(col)) {
			arr = _.rest(g)
		}
		else {
			col = 'p';
			arr = g
		}
	}
	if (!S(col)) {   // ['c', [[],[]] ]   or [[],[]]
		if (S(col[0])) {
			arr = _.rest(col);
			col = col[0]
		}
		else {
			arr = col;
			col = null
		}
	}
	if (S(_.last(arr))) {
		str = arr.pop()
	}
	f = b.poly.apply(b, arr)
	if (str) {
		f.K(str)
	}
	if (col) {
		f.bindSprite(w.s.poly(arr, col, col))
	}
	return f// b2d.sep = b2d.conc =     func|body,verts,scale
//takes an array of points (or of one color and a bunch of points)
////
////
////
// i need a func to check if my points are convex or not ! // can check my current libs first!! :)
}
b.grp = function (i) {
	f = this.fixt()
	if (U(i)) {
		return f.grp()
	}
	f.grp(i);
	$l('set to ' + i)
	return this
}
b.onAddFxt = function () {
	this.rMD()
	return this
}
b.ap = function (met, g) {
	var b = this;
	return b[met].apply(b, g)
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
b.lC = function () {
	var b = this, w = b.W(), g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetLocalCenter().m()
}
b.lVL = b.linVelLoc = function (v, y) {
//lin vel from local point ... use case?
	v = V(v, y)
	return this.GetLinearVelocityFromLocalPoint(v.div()).mult().dec(2)
}
b.vX = function (x) {
	var b = this, g = G(arguments),
			v = b.lV()
	if (g.u) {
		return v.x
	}
	b.lV(x, v.y)
	return b
	function alt() {
		b.vX = function (x) {
			if (U(x)) {
				return this.lV().x
			}
			return this.lV(x, this.lV().y)
		}
	}
}
b.vY = function (y) {
	function alt() {
		b.vY = function (y) {
			if (U(y)) {
				return this.lV().y
			}
			return this.lV(this.lV().x, y)
		}
	}
	
	var b = this
	if (U(y)) {
		return b.lV().y
	}
	return b.lV(b.lV().x, y)
}
b.lVW = b.linVelWor = function (v, y) {//lin vel from world point
	v = V(v, y)
	return this.GetLinearVelocityFromWorldPoint(v.div()).mult().dec(2)
}
b.N = b.next = b.gN = function () {
	return this.GetNext()
}
b.wV = b.worldVec = function (v, y) {
	if (N(v) && N(y)) {
		v = V(v, y)
	}
	if (U(v)) {
		v = V(0, -100)
	}
	return this.GetWorldVector(v)
}
b.wC = function () {
	var b = this,
			w = b.W(),
			g = G(arguments)
	//gives {x,y}, but of its CENTER-OF-MASS
	if (g.p) {
		return b.XY(w.hW, w.hH)
	}
	return b.GetWorldCenter().m()
	function alt() {
	}
}
b.wCent = b.wC = b.cent = function () {
	var b = this, w = b.wor()
	var g = G(arguments)
	if (g.P) {
		return b.GetWorldCenter().mult()
	}    //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	b.XY(
			w.W() / 2, w.H() / 2
	)
	return b
	function alt() {
		b.worldCenter = function () {
			return this.GetWorldCenter()
		} //  b.worldCenter= b.gWC= function(){return this.GetWorldCenter()}
	}
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
b.wPt = b.wPoint = b.worldPoint = b.wP = function (x, y) {
	return this.GetWorldPoint(V(x, y).div()).mult()
}
b.pol = b.poly = function () {
	return this.f($pF.apply(null, arguments))
}
b.DF = b.dsFx = function (fixt) {
	this.DestroyFixture(fixt)
	return this
}
b.empty = b.clear = function () {
	return this.fs(function (f) {
		f.kill()
	})
}
b.rmF = function (f) {
	if (f) {
		this.DF(f)
	}
	else {
		this.fs(function (f) {
			this.rmF(f)
		})
	}
	return this
}
b.H = function (arg) {
	var b = this, g = G(arguments), arg = g[0],
			len = length(g)
	if (U(arg)) {
		return this.f().H() // return b
	}
	//passing a single array, suggest MULTIPLE fixts
	//[f1,f2,..]
	if (A(g[0]) && U(g[1])) {
		_.each(g[0], function (a) {
			b.H.apply(b, a)
		})
	}
	
	
	//[col,[f1,f2,..]]
	else if (S(g[0]) && A(g[1]) && U(g[2])) {
		_.each(g[1], function (f) {
			if (b2d.isFixtDef(f)) {
				b.fixt(f).C(g[0])
			}
			else {
				if (!S(f[0])) {
					f = _.map(f, function (a) {
						return a
					})
					//*** ?
					f.unshift(g[0])
				}
				if (b2d.isFixtDef(f[1])) {
					b.fixt(f[1]).C(f[0])
				}
				else {
					b.H.apply(b, f)
				}
			}
		})
	}
	//fixtDef
	else if (b2d.isFixtDef(g[0])) {
		b.fixt(g[0])
	}
	//['color', fixtDef]
	else if (S(g[0]) && b2d.isFixtDef(g[1])) {
		b.fixt(g[1]).C(g[0])
	}
	
	//verts
	else if (O(g[1])) {
		if (g.n) {
			g.push('-')
		}
		b.conc(g)
		//b.convex(g)
	}
	
	//circ
	else if (len == 1 || len == 3) {
		if (g.n) {
			g.push('-')
		}
		b.CIRC.apply(b, g)
	}
	
	//rect
	else {
		if (g.n) {
			g.push('-')
		}
		b.RECT.apply(b, g)
	}
	function length(arr) {
		var len = arr.length
		if (S(arr[0])) {
			len--
		}
		if (S(_.last(arr))) {
			len--
		}
		return len
	}
	
	return b
}
b.togSen = function () {
	return this.sensor(!this.sensor())
}
b.DFR = b.DFB = function (d, f, r) {
	return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
	var b = this
	b.den(d)
	if (N(r)) {
		this.rest(r)
	}
	if (N(f)) {
		b.fric(f)
	}
	return b
	function alt() {
		b.DBF = function (d, r, f) {
			var b = this
			b.den(d)
			if (N(r)) {
				this.rest(r)
			}
			if (N(f)) {
				b.fric(f)
			}
			return b
		}
	}
}
b.hit = function (x, y, dot) {
	var b = this,
			w = b.W(),
			g = G(arguments), hit = false
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
	function alt() {
		b.hit = function (x, y, dot) {
			var hit
			if (dot == true) {
				this.wor().dot(x, y)
			}
			this.eachFixt(function (f) {
				if (f.hit(x, y)) {
					hit = true
				}
			})
			return hit
		}
	}
}

function kinematic(){
	function kin() {
		bD.kin = function () {
			return this.T(1)
		}
		bD.kin = function () {
			return this.T(1)
		}
	}
	
	b.iK = b.isKin = function () {
		return this.GetType() == 1
	}
	b.kin = function () {
		return this.type(1)
	}
	$kBD = b2d.kD = function (x, y) {
		return $dBD(x, y).T(1)
	}
	b2d.kin = b2d.kinematic = KinematicBodyDef = kBD = function (x, y) {
		return b2d.bodyDef(x, y).T(1)
	}
	$kB = $kBD = b2d.kD = function (x, y) {
		return $bD(x, y).T(1)
	}
	w.kin = function (x, y, fixtDef) {
		var body
		if (O(x)) {
			fixtDef = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500
		y = N(y) ? y : 250
		body = this.A(b2d.kin(x, y), fixtDef)
		return body
	}
	w.vsK = w.vertsKin = function (x, y, arrs) {
		var b = this.kin(x, y)
		_.e(arrs, function (arr) {
			b.convex(arr[0], _.r(arr))
		})
		return b
	}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
	w.K = w.kin = function (x, y, fD) {
		if (O(x)) {
			fD = y;
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 500;
		y = N(y) ? y : 250
		return w.A($kB(x, y), fD)
	}
	w.vertsKin = function (x, y, arrs) {
		var bod = this.kin(x, y)
		_.each(arrs, function (arr) {
			bod.convex(arr[0], _.rest(arr))
		})
		return bod
	}
	w.sB = function (x, y) {
		return this.cB($sBD(x, y))
	}
	w.kB = function (x, y) {
		return this.cB($kBD(x, y))
	}
	w.kB = function (x, y) {
		return this.CB($kB(x, y))
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
	f.iK = function () {
		return this.B().iK()
	}
	f.kin = function () {
		var b = this.B();
		b.kin.apply(b, arguments);
		return this
	}
}
function alpha() {
	b.L = b.linear = function (vx, vy, damp) {
		var b = this
		if (U(vx)) {
			b.lV(0, 0).lD(0)
		}
		else {
			b.vX(vx)
			if (N(vy)) {
				b.vY(vy)
			}
			if (N(damp)) {
				b.lD(damp)
			}
		}
		return b
	}
	b.dm = b.damp = function (l, a) {
		l = N(l) ? l : 1000
		a = N(a) ? a : l
		this.lD(l).aD(a)
		return this
	}
}
