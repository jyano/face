$L('sens', 'dfr','shapes')
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
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
b.$fD = function () {
	return this.CF($fD.apply(null, arguments))
}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
b.fD = b.fxD = function (fD) {
	return this.CF( $fD(fD) )
}
b.cF = function () {
	return this.CreateFixture.apply(this, arguments)
}
b.aF = function () {
	this.cF.apply(this, arguments)
	return this
}
b.GFL = function () {
	return this.GetFixtureList()
}
b.n = b.num = b.count = function () {
	return this.m_fixtureCount
}
b.f = function (fD) {//b.createFixture = b.cF = b.fixt1 = b.shape =
	var b = this, f;
	if (U(fD)) {
		return this.GetFixtureList()
	}
	// can pass a CODED array of fixts (will get parsed)
	if (A(fD)) {
		_.each(b2d.fixtParse(fD),
				function (fd) {
					b.fixt(fd)
				})
		return b
	}
	if (!b2d.isFixtDef(fD)) {
		fD = b2d.fixt.apply(b2d, arguments)
	}
	//create the fixt
	f = this.CreateFixture(fD)
	//assign it classes specified in the fixt def
	if (A(fD.classes)) {
		_.each(fD.classes,
				function (clas) {
					f.K(clas)
				})
	}
	return f
	//= b.fixt = b.list
}
b.fs = function (fn) {
	var b = this, g = G(arguments),
			fl = b.f(), fn = g.f, arr = []
	while (fl) {
		arr.push(fl);
		fl = fl.GetNext()
	}
	if (N(fn)) {
		return arr[fn]
	}
	if (F(fn)) {
		_.e(arr, fn);
		return b
	}
	if (b2d.iB(fn)) {
		b.fs(function (f) {
			fn.pol(f)
		})
		return fn
	}
	return arr
	/*
	 if (g.p) {//order by biggest
	 arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
	 if (g.n) {//order by smallest
	 arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
	 */
	function alt() {
		b.fixts = b.each = b.eachFixt = function (func) {
			var fl = this.fixt(), arr = [],
					g = G(arguments), func = g[0]
			while (fl) {
				arr.push(fl);
				fl = fl.GetNext()
			}
			//order by biggest
			if (g.p) {
				arr = arr.sort(function (a, b) {
					return b.area() - a.area()
				})
			}
			//order by smallest
			if (g.n) {
				arr = arr.sort(function (a, b) {
					return a.area() - b.area()
				})
			}
			if (F(func)) {
				_.each(arr, func);
				return this
			}
			return arr
		}
	}
	
	// = b.e
}
b.f = function (fD) {
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GFL()
	}
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {
			b.f(fD)
		})
		return b
	}
	var f = b.CF(g.f)
	if (g.f.K()) {
		f.K(g.f.K())
	}
	return f
}
b.CF = b.CreateFixture
b.CF = function () {
	return this.CreateFixture.apply(this, arguments)
}
b.CF2 = function () {
	return this.CreateFixture2.apply(this, arguments)
}
b.dsF = b.dF = b.DF = b.DFx = function (f) {
	this.DestroyFixture(f);
	return this
}
b.GFL = b.GFxL = function () {
	return this.GetFixtureList()
}
function sens() {
	b.togSen = function () {
		return this.sensor(!this.sensor())
	}
	b.sen = b.iS = function (s) {
		var b = this
		var f = b.f()
		if (U(isSensor)) {
			return f.m_isSensor
		}
		b.fs(function (f) {
			f.sen(s)
		})
		return b
	}
	b.s1 = b.sens = function () {//turns on
		this.f().sensor(true);
		return this
	}
	b.sr1 = b.s1 = b.mS = function () {
		return this.sSr(1)
	}
	b.sSr = function (sr) {
		var b = this
		b.fs(function (f) {
			f.sr(sr)
		})
		return b
	}
	b.sr = b.sens = function (sr) {
		var b = this
		if (U(sr)) {
			return b.f().iSr()
		}
		b.sSr(sr)
		return b
	}
}
function dfr() {
	b.de = function (den) {
		if (U(den)) {
			return this.list().GetDensity()
		}
		this.each(function (f) {
			f.SetDensity(den)
		})
		this.ResetMassData()
		return this
	}
	b.fr = function (fric) {
		if (U(fric)) {
			return this.list().GetFriction()
		}
		this.each(function (f) {
			f.SetFriction(fric)
		})
		return this
	}
	b.re = function (rest) {
		if (U(rest)) {
			return this.list().GetRestitution()
		}
		this.each(function (f) {
			f.SetRestitution(rest)
		})
		return this
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
	b.fr = b.fric = function (fr) {
		var b = this
		if (U(fr)) {
			return b.f().GetFriction()
		}
		b.fs(function (f) {
			f.SetFriction(fr)
		})
		return b
		function alt() {
			b.fric = function (fric) {
				if (U(fric)) {
					return this.list().GetFriction()
				}
				this.each(function (f) {
					f.SetFriction(fric)
				})
				return this
			}
		}
	}
	b.de = b.d = b.den = function (d) {
		var b = this
		if (U(d)) {
			return b.f().GetDensity()
		}
		b.fs(function (f) {
			f.SetDensity(d)
		})
		b.ResetMassData()
		return b
		function alt() {
			b.den = function (den) {
				if (U(den)) {
					return this.list().GetDensity()
				}
				this.each(function (f) {
					f.SetDensity(den)
				})
				this.ResetMassData()
				return this
			}
		}
	}
	b.re = b.r = b.bo = b.rest = function (r) {
		function alt() {
			b.bo = b.rest = function (rest) {
				if (U(rest)) {
					return this.list().GetRestitution()
				}
				this.each(function (f) {
					f.SetRestitution(rest)
				})
				return this
			}
		}
		
		var b = this
		if (U(r)) {
			return b.f().GetRestitution()
		}
		b.fs(function (f) {
			f.SetRestitution(r)
		})
		return b
	}
	b.de = b.den = function (de) {
		var b = this//$l('b.de boxBody.js')
		if (U(de)) {
			return b.f().de()
		}
		b.e(function (f) {
			f.SetDensity(de)
		})
		return this.RMD()
	}
	b.de1 = function () {
		return this.de(1)
	}
	b.fr = b.fric = function (fr) {
		var b = this
		return D(fr) ?
				b.fs(function (f) {
					f.SetFriction(fr)
				}) :
				b.list().GetFriction()
	}
	b.re = b.rest = function (re) {
		var b = this
		return D(re) ? b.fs(function (f) {
			f.re(re)
		}) :
				b.f() ? b.f().GetRestitution() : false
	}
}
function shapes() {
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
	b.rad = b._r = function (n) {
		if (U(n)) {
			return this.shp().m_radius * 30
		}
		n = N(n, 100)
		h = this.f().H()
		if (h.SetRadius) {
			h.SetRadius(n / 30)
		}
	}
	b.h = function () {
		return this.f().shape
	}
	b.cF = b.cFx = b.circ = function () {
		var cF = $cF.apply(null, arguments)
		return this.f(cF)
	}
	b.rF = b.rect = function () {
		return this.f($rF.apply(null, arguments))
	}
	b.rH = b.rF = function () {
		var rH = $rH.apply(null, arguments)
		return this.fD(rH)
	}
	b.aF = b.arrr = function () {
		return this.f($aF.apply(null, arguments))
	}
	b.pF = b.poly = function () {
		return this.f($pF.apply(null, arguments))
	}
	b.rad = function (r) {
		var b = this, h = b.H()
		if (U(r)) {
			return h.rad()
		}
		h.rad(r);
		return b
	}
	b.H = function () {
		return this.f() && this.f().H()
	}
}
 
b.aAF = function () {
	var aF = $aF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cAF = function () {
	var aF = $aF.apply(null, arguments)
	return this.CF(aF)
}
b.aCF = function () {
	var aF = $cF.apply(null, arguments)
	this.CF(aF)
	return this
}
b.cCF = function () {
	
	var aF = $cF.apply(null, arguments)
	
	return this.CF(aF)
}
b.cir = function (r) {
	return this.f($fD($cH(r)))
}
 