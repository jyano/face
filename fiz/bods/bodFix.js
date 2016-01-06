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
DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	W()
	r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
	r2 = w.BRICK(300, 300, 400, 10, 'o')
	r3 = w.BRICK(300, 300, 400, 10, 'w')
	r4 = w.BRICK(300, 300, 400, 10, 'w')
	r5 = w.BRICK(300, 300, 400, 10, 'b')
	flipDen = function (r) {
		r.de(r.de() == 0 ? 1 : 0)
	}
	flipStage = function () {
		w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
	}
	flipStage()
	_.ev(5, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
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
DENSITY = DSY = function () {//nice it tells me den when i click on bods( /fxs ? )
	W({g: 0, W: 600, H: 500})
	b = w.ball(100, 100, 65).de(1)
	f = b.f()
	h = f.H()
	d = f.mD()
	m = f.mass()
	x = w.box(300, 200, 30, 50).de(1)
	_.in(1, function () {
		x.BOX(200, 30).de(1)
	})
	w.b$(function (fixture) {
		var b = this
		$l('')
		$l('---- MASS ----')
		$l('total mass: ' + b.GetMass().toFixed(3))
		b._m()
		$l('_')
		$l('')
	})
}
IMPR = function () {
	W({g: 0, w: 0}).Y()
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(-1000, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	s = $Sg(0, 0, 1200, 600)
	s1 = $Sg(1200, 0, 0, 600)
	lArr = 'the shape world transform'
	// nl = '2Vec2 — returns the hit fraction.'
	// You can use this to compute the contact point
	// p = (1 - lambda) segment.p1 + lambda segment.p2.
	// sg = ''//segment:b2Segment — returns the normal at the contact point.
	// If there is no intersection, the normal is not set.
	maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	s.TestSegment(lArr, nl, s1, maxLam)
	ip = b2d.rCIp(0, 0, 1200, 600)
//	op = b2d.rCOp(1, 2)
//	res = f.rC(op, ip)
}
BOX0 = function () {
	w = _$boxWorld()
	$l('bod count : ' + w.numBods())
	cH = new b2d.CircleShape(50 / 30)
	cH.friction = .5
	cH.restitution = 0.3
	cH.density = 0
	b = w.cB($dBD())
	b.CreateFixture2(cH)
	b.SetPosition(V(545 / 30, 195 / 30))
	$l('bod count again: ' + w.GetBodyCount())
}
FSEL = function () {
	box(function () {
	})
	w.circleStat(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	n = 0
	w.qPoint(300, 400, function (f, b, w) {
		$l("hit" + n++)
		//b.kill()
		//	w.mj = w.mJ(b, o.x, o.y)
		//return true
	})
}
CLICKKILL = function () {
	box(function () {
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cv.click(function (e) {
		e.preventDefault();
		cvPos = cv.position()
		cvPos.x = cvPos.left
		cvPos.y = cvPos.top
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		$l('mousex ' + mouse.x)
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			b.kill()
			//	w.mj = w.mJ(b, o.x, o.y)
			//return true
		})
		return false
	})
}
FSEL = function () {
	n = 0
	box(function () {
		//$l('tick-'+ n++)
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	w.mouse = {x: 0, y: 0}
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.click(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.mouse = mouse
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
FSEL = function () {
	box(function () {
		if (w.mj) {
			var targ = w.mj.targ()
			$l('mouse joint target: ' + targ.x + ', ' + targ.y)
			w.mj.targ(mouseX, mouseY)
		}
		else {
			$l('no mouse joint')
		}
	})
	w.G(0)
	b = w.circle(420, 400, 150)
	w.circle(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			var mj = w.mJ(b, mouse.x, mouse.y, .1, 50000, 1000)
			mj.frq(120)
			mj.dmpRat(.01)
			mj.mxFo(100000)
			fq = mj.frq()
			$l(fq)
			w.mj = mj
		})
		return false
	})
	cv.dblclick(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f) {
			f.B().kill()
		})
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		mouseX = mouse.x
		mouseY = mouse.y
	})
	cv.mouseup(function () {
		w.DestroyJoint(w.mj)
		w.mj = null
	})
}
FSEL0 = function () {
	box0(function () {
		if (w.mj) {
			$l('yes')
		} else {
			$l('no')
		}
	})
	w.circle(420, 400, 150)
	w.circleStat(300, 400, 50)
	w.circleStat(400, 550, 50)
	w.circleStat(500, 550, 50)
	w.circleStat(550, 550, 50)
	cvPos = cv.position()
	cvPos.x = cvPos.left
	cvPos.y = cvPos.top
	cv.mousedown(function (e) {
		e.preventDefault();
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		w.qPoint(mouse.x, mouse.y, function (f, b, w) {
			w.mj = w.mJ(b, mouse.x, mouse.y)
		})
		return false
	})
	cv.mousemove(function (e) {
		var mouse = {x: e.pageX - cvPos.x, y: e.pageY - cvPos.y}
		if (w.mj) {
			w.mj.tg(mouse.x, mouse.y)
		}
	})
	cv.mouseup(function () {
		w.mj = null
	})
}
BXEV = function (fn) {
//http://jsfiddle.net/digitalbush/JrzPH/
	w = $_W()
	w.SDD($dD().ctx(
					$.c('z', 1800, 1500)[0].getContext('2d'))
	)
	//the_circle = new b2CircleDef()
	n = 0
	_.ev(.1, function () {
		if (F(fn)) {
			fn(n)
		}
		n++
		w.N(1 / 5)
	})
}
BOXW = function () {
	w = $_W().sDD(
			$dD($.c('z', 1800, 1500)))
	_.ev(.1, function () {
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	$l('bodyCOunt:' + w.numBods())
}
FDEF = function () {
	w = b2d.W()
	x = w.brick(400, 400, 200, 300)
	b = w.dyn(200, 400,
			b2d.poly(100, 200).K('fffffff sf')
	)
}
 