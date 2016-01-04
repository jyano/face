cirDfs = function (o) {
	o = o || {}
	//with object...
	o.al = N(o.al, 1)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.b = N(o.b, .5)
	o.f = N(o.f, .5)
	o.d = N(o.d, .5)
	o.s = D(o.s) ? o.s : 0;
	return o
}
ADD = function () {
	W().P()
	b = w.brick().C('r')
	p = M.p(b)
	//v=p.vs()
	//p.reg(b)
	w.S(100, 0).pol('z', M.p(b))
	_.in(function () {
		// w.S(0,0).pol('y',v)
	})
	//v1= v.add(400,500)
}
function old() {
	f.K = f.addClass = function (clas) {
		this.classes = this.classes || []
		var that = this, func
		if (U(clas)) {
			return this.getClasses()
		}
		if (F(clas)) {
			func = _.bind(clas, that)
			this.addClass(func(that.getClasses()))
			return this
		}
		_.each(arguments, function (clas) {
			if (S(clas)) {
				clas = clas.trim()
				_.each(clas.split(' '),
						function (clas) {
							clas = clas.trim()
							if (clas != '' && !that.hasClass(clas)) {
								that.classes.push(clas)
							}
						})
			}
		})
		return this
	}
	b.fK = b.fixtClass = function (k) {
		var f = this.f()
		if (U(k)) {
			return f.gK()
		}
		f.K(clas)
		return this
	}
}
function _post() {
	f.near = function (what) {
		var body = this.GetBody()
		//return (this.K()==what) || (body.K()==what)
		// if has sibling fixture that matches, return IT!
		return false
	}
	f.classCount = function () {
		if (!A(this.classes)) {
			return 0
		}
		return this.classes.length
	}
	b.classCount = function () {
		if (!A(this.classes)) {
			return 0
		}
		return this.classes.length
	}
	b.toggleClass = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		if (this.hasClass(clas)) {
			this.removeClass(clas)
		} else {
			this.addClass(clas)
		}
		return this
	}
	b.removeClass = function (clas) {
		var ix
		this.classes = this.classes || []
		if (S(clas)) {
			if (this.hasClass(clas)) {
				ix = this.classes.indexOf(clas)
				this.classes[ix] = null
				this.classes = _.compact(this.classes)
			}
		}
		return this
	}
	f.toggleClass = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		if (this.hasClass(clas)) {
			this.removeClass(clas)
		} else {
			this.addClass(clas)
		}
		return this
	}
	f.removeClass = function (clas) {
		var ix
		this.classes = this.classes || []
		if (S(clas)) {
			if (this.hasClass(clas)) {
				ix = this.classes.indexOf(clas)
				this.classes[ix] = null
				this.classes = _.compact(this.classes)
			}
		}
		return this
	}
	f._of = function (k) {
		var f = this, b = this.B(), res
		if (O(k)) {
			return f == k
		}
		if (S(k)) {
			k = k.trim()
			f._K = f._K || []
			if (_.ct(f._K, k)) {
				return true
			}
		}
		return b.of(k)
	}//new, not yet used
	b.be = function (kindOrBody) {


//this is an OR statement.  at least one must be true
		var that = this, is = false
		if (b2d.isBody(kindOrBody)) {
			return this == kindOrBody
		}
		_.each(arguments, function (kind) {
			if (that.hasClass(kind)) {
				is = true
			}
		})
		return is
	}
	b.not = p.notAny = function (kind) {
//this is an AND: ALL MUST BE FALSE
		var that = this, not = true
		_.each(kind, function (kind) {
			if (that.is(kind)) {
				not = false
			}
		})
		return not
	}
	f.got = f.mat = f.matches = function (k) {
		return k && this.has(k)
	}//not used, new
	f.has = function (k) {
		return !k || _.ct(this._K || [], k.trim())
	}//not used, new
	f.hasK = function self(clas) {
		var fixt = this,
				hasClass,
				g = G(arguments)
		fixt.classes = fixt.classes || []
		if (!clas) {
			return true
		}
		if (A(clas)) {
			g = clas
		}
		_.each(g, function (clas) {
			if (!clas || _.contains(fixt.classes, clas.trim())) {
				hasClass = true
			}
		})
		return hasClass
	}
	f.hasAllK = function (clas) {
		if (U(clas) || clas == '') {
			return false
		}
		var body = this, anyYes = null, anyNo = null
		_.each(arguments, function (clas) {
			if (body.hasClass(clas)) {
				anyYes = true
			}
			else if (!body.hasClass(clas)) {
				anyNo = true
			}
		})
		return (anyYes && !anyNo)
	}
}
b.has = b.hasClass = b.ofClass = b.hasClasses = function self(clas) {
	var body = this, hasClass;
	body.classes = body.classes || []
	if (!clas) {
		return true
	}
	if (A(clas)) {
		return self.apply(body, clas)
	}
	_.each(arguments, function (clas) {
		if (!clas || _.contains(body.classes, clas.trim())) {
			hasClass = true
		}
	})
	return hasClass
}
b.hasAllClasses = function (clas) {
	if (U(clas) || clas == '') {
		return false
	}
	var body = this, anyYes = null, anyNo = null
	_.each(arguments, function (clas) {
		if (body.hasClass(clas)) {
			anyYes = true
		}
		else if (!body.hasClass(clas)) {
			anyNo = true
		}
	})
	return (anyYes && !anyNo)
}
b.contains = function (clas) {
	var fs = this.fixts(), contains = false
	_.each(fs, function (f) {
		if (f.hasClass(clas)) {
			contains = true
		}
	})
	return contains
}
_.eachSplitString = _.eW = function (str, fn) {
	if (!S(str)) {
		return
	}
	//meach(in a string) With
	var arr = _.compact(_.m(str.trim().split(' '),
			function (str) {
				return str.trim()
			}))
	if (fn) {
		_.e(arr, function (str) {
			fn(str)
		})
	}
	return arr
}
f.near = function (what) {
	var b = this.B()
	//return (this.K()==what) || (body.K()==what)
	// if has sibling fixture that matches, return IT!
	return false
}
b.hasF = function () {
	
	//if (b2d.iF(k)) {k = k.B()}
}
b.not = b.notAny = function (k) { //this is an AND: ALL MUST BE FALSE
	var b = this
	var not = true
	_.e(k, function (k) {
		if (b.is(k)) {
			not = false
		}
	})
	return not
}
b.Ks = b.showKlass = function () {
	var b = this
	var n = 1
	b.fs(function (f) {
		$l('#' + (n++) + ' k: ' + f.K())
	})
	return b
}
//f._compact=function(){var f = this; f._K = _.compact(f._K); return f}
//_.y = function (tru) {return tru != -1}
// g._1 (length is at least one)
//alternative f.has: //return ks.indexOf('player') != -1 // !k || _.ct(this._K || [], k.trim())
ksA = function () {
	return [
		'rect', 'player', 'bad'
	]
}
f.aKPreviousVersion = function () {
	var f = this, ks = f.__K(), g = G(arguments)
	_.e(g, function (str) {
		_.eachSplitString(str, function (k) {
			if (!S(k)) {
				return
			}
			if (f.of(k)) {
				$l('f is already of ' + k + 'oh well.. it will be fixed down the line')
			}
			f.pushK(k)
		})
	})
	return f
}
fD.K = function (k) {
	var fD = this
	fD._K = fD._K || []
	if (U(k)) {
		return _.l(fD._K)
	}
	fD._k = k
	fD._K.push(k)
	return fD
}
/*
 b.__K = function () {
 var b = this
 b._K = b._K || []
 return b
 }
 b.K = function () {
 var b = this.__K(), g = G(arguments);
 if (g.u) {
 return this._K.join(' ')
 }
 if (g.O) {
 this.K(g.f.k);
 return this
 }
 _.eachSplitString(g.f, function (k) {
 if (!b.of(k)) {
 b._K.push(k)
 }
 })
 return this
 }
 b.hK = function (k) {
 var b = this.__K(), g = G(arguments)
 //this is an OR statement.  at least one must be true
 var hK = false
 _.e(g, function (k) {
 if (b.K() == k) {
 hK = true
 }
 })
 return hK
 }

 b.rmK = b.removeClass = function (k) {
 var b = this.__K()
 if (S(k)) {
 b._K[k] = null
 }
 return b
 }
 */
_.eW = function (str, fn) { //meach(in a string) With
	var arr = _.compact(_.m(str.trim().split(' '),
			function (str) {
				return str.trim()
			}))
	if (fn) {
		_.e(arr, function (str) {
			fn(str)
		})
	}
	return arr
}
function extBx(o) {
	help(o)
	o.K = function () {
		var o = this, g = G(arguments),
				ks = o.__K()._K
		if (g.u) {
			return g.n ? _.f(ks) : g.p ?
					_.l(ks) : g.d ? ks.join(' ') : ks
		}
		g.F ? _.e(ks, g.f) :
				g.O ? o._aK(g.f.k) :
						g.n ? o._rmK(g.f) :
								o._aK.apply(o, g)
		return o.__K()
	}
	o.hK = function () {
		var o = this, g = G(arguments)
		if (g.u) {
			return false
		}
		return g.p ? o._hKE(g.f) :
				g.m ? o._hKA(g.f) :
						g.n ? o._hKO(g.f) :
								_.ct(o.K(), g.f && g.f.trim())
	}
	o.nK = function () {
		var o = this, g = G(arguments), ks = o.K()
		return g.S ? _.iO(ks, g.f) :
				g.N ? ks[g.f] : _.z(ks)
	}
	o._of = function (k) {
		var o = this;
		return !k ||
				o == k ||
				S(k) && o.hK(k)
	}
	o.of = function (k) {
		return this._of(k)
	}
	o.is = function (k) {
		return k && this.of(k) ? true : false
	}
}
function help(o) {
	o.__K = function () {
		var o = this
		o._K = o._K || []
		o._K = _.compact(o._K)
		o._K = _.rv(_.uniq(_.rv(o._K)))
		return o
	}
	o.__K()
	o._aK = function () {
		var o = this, g = G(arguments)
		_.e(g, function (str) {
			if (!S(str) || !str) {
				return
			}
			_.e(str.trim().split(' '), function (k) {
				if (S(k)) {
					o._K.push(k.trim())
				}
			})
		})
	}
	o._hKA = function () {
		var f = this, g = G(arguments)
		var foundAtLeastOnce = false
		var missed = false
		_.e(g, function (k) {
			k && f.hK(k) ? foundAtLeastOnce = k :
					missed = true
		})
		return !missed && foundAtLeastOnce
	}
	o._hKE = function () {
		var f = this, g = G(arguments)
		var missed = false
		_.e(g, function (k) {
			if (k && !f.hK(k)) {
				missed = true
			}
		})
		return !missed
	}
	o._hKO = function () {
		var f = this, g = G(arguments)
		var has = false
		_.e(g, function (k) {
			if (k && f.hK(k)) {
				has = k
			}
		})
		return has
	}
	o._sK = function (newK) {
		var o = this, g = G(arguments)
		o.__K()
		o._K = g.s ? g : A(newK) ? newK : [newK]
		o.__K()
		return o
	}
	o._rmK = function (k) {
		var o = this
		o._sK(k ? _.wo(o.K(), k) : [])
		return o
	}
}
_.e([fD, f, bD, b, j, co], extBx)
_$klass = function () {//o._K = _.wo(o._K, k) //double protection:
	o.rpK_ = function (k, k1) {
		var o = this
		o.K().splice(o.nK(k), 1, k1)
		return o
	}
}
KTX = function () {
	W()
	b = w.A($dB(300, 300))
	f = core = b.f($cF(40)).K('core')
	f1 = b.f($pF(30, 300).mS()).K('arm')
	$l('f is the core fixtuer')
	$l('first the yes"s')
	$l('f.is(f): ' + f.is(f))
	$l('f.has("core"): ' + f.hK('core'))
	$l("f.of('core: ')" + f.of('core'))
	$l("f.is('core: ')" + f.is('core'))
	$l("f.of()" + f.of())
	$l('noos')
	$l("f.is()" + f.is())
	$l('f.is(f1): ' + f.is(f1))
	$l('f.has("arm"): ' + f.hK('arm'))
	$l("f.of('arm: ')" + f.of('arm'))
	$l("f.is('arm: ')" + f.is('arm'))
	core.K('hello neato').K('cooool')
			.K('neato', 'awesome')
	$l('ks: ', core.K())
	function wire() {
		w.b(function (cx) {
			//cx.ks()
			if (cx.w('arm')) {
				b.lV(10, 0);
				w.C($r())
			}
			else if (cx.w('core', 'roof')) {
				b.stat()
			}
		})
		w.roof.K('roof')
	};
	wire()
}
// *** function preSolve(){
w.preCl = function () {
	var w = this, g = G(arguments)
	w.pre(function (cx) {
		cx.w.apply(cx, g)
	})
	return w
}
//	w.tanFuture = cx.t = function () {}//what about tangent?
//presolve
//do any of these get used? i think filterData does
b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}
b2d.cxFilt = b2d.filter = b2d.f = function () {//used?
	var f = new BXD.b2ContactFilter
	f.rC = f.RayCollide
	f.sC = f.ShouldCollide
	return f
}
b2d.filt = b2d.filterData = function () {
	var d = new b2d.Dynamics.b2FilterData()
	d.gI = function (a) {
		if (U(a)) {
			return d.groupIndex
		}
		d.groupIndex = a;
		return d
	}
	d.cat = function (a) {
		if (U(a)) {
			return d.categoryBits
		}
		d.categoryBits = a;
		return d
	}
	d.mask = function (a) {
		if (U(a)) {
			return d.maskBits
		}
		d.maskBits = a;
		return d
	}
	return d
}
b2d.superManifold = function (m) {//used????
	m.lPN = m.m_localPlaneNormal
	m.lP = m.m_localPoint
	m.pC = m.m_pointCount
	m.p = m.m_points
	m.t = m.m_type
	return m
}
b2d.man = b2d.manifold = b2d.worldManifold = function () {
	return new b2d.Collision.b2WorldManifold()
}
//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
//////////
w.collide = w.cl = function () {
	var w = this, g = G(arguments)
	if (g.F) {
		w.b(function (cx) {
			_.b(g.f, cx.A())(cx.B(), cx)
		})
	}
	else {
		w.b(function (cx) {
			cx.w(g[0], g[1], g[2])
		})
	}
	return w
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
f.sp = function () {
	return this.sprites[0]
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.setKill = function () {
	$l('setKill boxFixt.js')
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
f.sp = function () {
	return this.sprites[0]
}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {
		sp.al(N(al, .8))
	}
	return this
}
f.collide = f.cl = function (k, fn) {
	var f = this
	//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
	if (F(k)) {
		fn = k;
		k = ''
	}
	fn = _.b(fn, f)
	w.b(function (cx) {
		var fA = cx.A(), fB = cx.B()
		if (f.of(fA) && fB.of(k)) {
			fn(fB, cx)
		}
		if (f.of(fB) && fA.of(k)) {
			fn(fA, cx)
		}
	})
	return f
}
b.fK = function (k) {
	var b = this
	var fx = null
	b.fs(function (f) {
		if (f.has(k)) {
			fx = f
		}
	})
	return fx
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	return this.GetLocalPoint(V(x, y, '-')).m()
}
b.gLVFLP = b.GetLinearVelocityFromLocalPoint
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
b.pre = function () {
	var b = this, w = b.W(), g = G(arguments)
	w.pre(function (cx) {
		cx.w(b, g.f, g.s, g.t)
	})
}
b.collide = b.cl = function () {
	var b = this, w = b.W(), g = G(arguments), o
	// if body collides with ANYTHING
	// if body collides with body/fixt of specific kind
	// if body collides with specific body
	// if body collides with specific fixt
	// but always pass fixt into the cb
	if (F(g.f) && F(g.s)) {
		this.cl(g.f)
		w.end(this, g.s)
		return this
	}
	if (g.F_) {
		o = {fn: g.f, k: ''}
	}
	else {
		o = {k: g.f, fn: g.s}
	}
	w.b(function (cx) {
		var fA = cx.A(),
				fB = cx.B()
		if (b.of(cx.a()) && fB.of(o.k)
		) {
			if (o.fn) {
				_.b(o.fn, fA)(fB, cx);
				return w
			}
			return [fA, fB, cx]
		}
		else if (b.of(cx.b()) && fA.of(o.k)) {
			if (o.fn) {
				_.b(o.fn, fB)(fA, cx);
				return w
			}
			return [fB, fA, cx]
		}
	})
	return b
}
b.isSen = b.sr = b.sen = function () {
	var b = this, f = b.f(), g = G(arguments)
	if (g.d) {
		return b.sen(!b.sen())
	}//b.sen('/')->toggle sen
	if (U(g[0])) {
		return f.m_isSensor
	}
	f.m_isSensor = g[0] ? true : false
	return b
}
b.GLP = function (vec) {
	return this.GetLocalPoint(vec)
}
b.gL = b.g2L = b.lcPt = b.locPt = b.localPt = b.lP = function (x, y) {
	var vec = N(x) ? V(x, y) : x
	return this.GLP(vec.d()).m()
}
b.gLVFLP = function (vec) {
	return this.GetLinearVelocityFromLocalPoint(vec)
}
b.wayYouAppearToBePointingOnTheScreen = b.rtDir = b.lVFLcPt = b.linVelFromLocPt = b.lVL = function (x, y) {
	return this.gLVFLP(V(x, y).div()).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
function flag() {
	b.trig = b.trg = function (k, fn) {
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = true
					}
				},
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = false
					}
				})
		if (F(fn)) {
			$t(function () {
				if (b.trig[k]) {
					_.b(fn, b)(b.trig[k])
				}
			})
		}
		return b
	}
	b.my = function (k, k2, fn) {
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k, k2)) {
						b.trig[k + k2] = true
					}
				},
				function (cx) {
					if (cx.w(k, k2)) {
						b.trig[k + k2] = false
					}
				}
		)
		if (F(fn)) {
			$t(function () {
				if (b.trig[k + k2]) {
					_.b(fn, b)(b.trig[k + k2])
				}
			})
		}
		return b
	}
	function bodWhileWhen() {
		b.while = b.wl = function (k, fn) {
			var b = this, w = b.W()
			w.wl(b, k, fn)
			return b
		}
		b.when = b.wn = function (k, oB, oE) {
			var b = this, w = b.W()
			w.wn(b, k, oB, oE)
			return b
		}
		b.while = b.wl = function (k, fn) {
			var b = this, w = b.W()
			w.wl(b, k, fn)
			return b
		}
		b.when = b.wn = function (k, oB, oE) {
			var b = this,
					w = b.W()
			w.wn(b, k, oB, oE)
			return b
		}
		b.whenFxt = b.bindFxt = b.bindMyFxt = b.bindMyFxtWhen = b.my = function (k, fn) {
			var b = this, w = b.W()
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a col
			if (F(fn)) {
				w.b(function (cx) {
					cx.w(b,
							function (f) {
								if (this.of(k)) {
									_.b(fn, this)(f, cx)
								}
							})
				})
			}
			else {
				w.wn(b,
						function () {
							b.my[k] = 1
						},
						function () {
							b.my[k] = 0
						})
			}
			return b
		}
		b.wlMy = function (k, fn) {
			var b = this
			b.togMy(k)
			$t(function () {
				var f = b.my[k]
				if (f) {
					_.b(fn, b.fK(k))(f)
				}
			})
			return b
		}
	}
	
	function flag() {
		FLAGS = {}
		_flag = flag = function (p) {
			_.e(FLAGS, function (v, k) {
				if (v === true) {
					flagHandlers[k](p)
					FLAGS.warp = false
					FLAGS[k] = false
				}
			})
		}
		$flag = function (ob) {
			alert('$flag flag.js')
			flagHandlers = ob
			$t(function () {
				_flag(p)
			})
		}
		w.flag = function (fl, v) {
			var w = this
			w.flags = w.flags || {}
			if (U(v)) {
				v = true
			}
			w.flags[fl] = v
			return w
		}
		w.flagged = function (fl) {
			var w = this
			w.flags = w.flags || {}
			var wasFlagged = w.flags[fl]
			if (wasFlagged) {
				w.flags[fl] = false
			}
			return wasFlagged
		}
		w.on = function (onWhat, fn) {
			var w = this
			//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
			//interesting default !!!!!!!
			//func=func||function(val){val()}
			$t(function () {
				var v = w.flagged(onWhat)
				if (v) {
					fn(v)
				}
			})
			return w
		}
	}
	
	function worWhileWhen() {
		w.wl1 = w.while1 = function (k, fn) {
			var w = this,
					push = false
			w.b(function (cx) {
				if (cx.w(k)) {
					push = true
				}
			})
			w.end(function (cx) {
				if (cx.w(k)) {
					push = false
				}
			})
			$t(function () {
				if (push) {
					fn()
				}
			})
			return w
		}//= w.whileSensor
		w.wl = w.while = function (k, k2, fn) {
			var w = this,
					push = false
			if (F(k2)) {
				return w.while1(k, k2)
			}
			w.b(function (cx) {
				if (cx.w(k, k2)) {
					push = true
				}
			})
			w.end(function (cx) {
				if (cx.w(k, k2)) {
					push = false
				}
			})
			$t(function () {
				if (push) {
					fn()
				}
			})
			return w
		}//= w.while2
		w.wn1 = w.when1 = function (k1, bFn, eFn) {
			var w = this
			w.begEnd(function (cx) {
						if (cx.w(k1)) {
							bFn()
						}
					},
					function (cx) {
						if (cx.w(k1)) {
							eFn()
						}
					})
			return w
		}
		w.wn = w.when = function (k1, k2, bFn, eFn) {
			var w = this
			if (F(k2)) {
				return w.when1(k1, bFn, eFn)
			}
			w.begEnd(function (cx) {
						if (cx.w(k1, k2)) {
							bFn()
						}
					},
					function (cx) {
						if (F(eFn)) {
							if (cx.w(k1, k2)) {
								eFn()
							}
						}
					})
			return w
		}
		w.when = w.wn = function () {
			var w = this, g = G(arguments), o
			o = F(g[0]) ? {b: g[0], e: g[1]}
					: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
					: {k: g[0], k2: g[1], b: g[2], e: g[3]}
			//when b,[e]  k,b,[e]  k,k2,b,[e]
			if (o.k2) {
				w.b(o.k, o.k2, o.b);
				if (o.e) {
					w.end(o.k, o.k2, o.e)
				}
			}
			else if (o.k) {
				w.b(o.k, o.b);
				if (o.e) {
					w.end(o.k, o.e)
				}
			}
			else {
				w.b(o.b);
				if (o.e) {
					w.end(o.e)
				}
			}
			return w
		}
		w.while = w.wl = function (k, k2, fn) {
			var w = this, push
			if (F(fn)) {
				w.wn(k, k2,
						function () {
							push = true
						},
						function () {
							push = false
						})
				T.t(function () {
					if (push) {
						fn()
					}
				})
			}
			else if (F(k2)) {
				w.wn(k, function () {
					push = true
				}, function () {
					push = false
				});
				T.t(function () {
					if (push) {
						k2()
					}
				})
			}
			return w
		}
		w.when = w.wn = function () {
			var w = this, g = G(arguments), o
			o = g.F_ ? {b: g.f, e: g.s}
					: F(g.s) ? {k: g.f, b: g.s, e: g.t}
					: {k: g.f, k2: g.s, b: g.t, e: g.fo}
			//when b,[e]  k,b,[e]  k,k2,b,[e]
			if (o.k2) {
				w.b(o.k, o.k2, o.b);
				if (o.e) {
					w.end(o.k, o.k2, o.e)
				}
			}
			else if (o.k) {
				w.b(o.k, o.b);
				if (o.e) {
					w.end(o.k, o.e)
				}
			}
			else {
				w.b(o.b);
				if (o.e) {
					w.end(o.e)
				}
			}
			return w
		}
		w.while = w.wl = function (k, k2, fn) {
			var w = this, push
			if (F(fn)) {
				w.wn(k, k2, function () {
					push = true
				}, function () {
					push = false
				})
				$t(function () {
					if (push) {
						fn()
					}
				})
			}
			else if (F(k2)) {
				w.wn(k,
						function () {
							push = true
						},
						function () {
							push = false
						});
				$t(function () {
					if (push) {
						k2()
					}
				})
			}
			return w
		}
	}
	
	w.ledge = function () {// Sometimes game logic needs to know when two fixtures overlap
// yet there should be no collision response.
// This is done by using sensors.
// A sensor is a fixture that detects collision
// but does not produce a response.
// You can flag any fixture as being a sensor.
// Sensors may be static or dynamic.
// Remember that you may have multiple fixtures per body
// and you can have any mix of sensors and solid fixtures.
// Sensors do not generate contact points. 
// 2ways to get the state of a sensor:
//  b2Contact.IsTouching,    b2ContactListener.BeginContact/EndContact
		var w = this
		w.S(200, 250, 'r', 400, 20);
		w.S(400, 250, 'w', 20, 40)
		_.t(10, function () {
			w.D(100, 100, 'z', 10).K('ball')
			w.D(200, 100, 'w', 10)
		})
		return this
	}
	function footKilling() {
		w.foot = w.footListener = function () {
			b2d.onGround = false
			numLaps = 0
			delay = 0
			w.b(function (cx) {
				if (cx.w('foot')) {
					b2d.onGround = true
					numLaps++
				}
				//$l(numLaps)
			})
			$t(function () {
				delay--
			})
			w.end(function (cx) {
				if (cx.w('foot')) {
					b2d.onGround = false
					numLaps--
				}
				//$l(numLaps)
			})
			return this
		}//this works but only for one mario!!!
		w.startKilling = function () {
			var w = this
			$t(function () {
				w.eB(function (b) {
					if (b.is('destroy')) {
						b.K('destroyed');
						b.kill()
					}
				})
			})
			return w
		}
	}
	
	b.togMy = function (k) {
		var b = this, w = b.W()
		b.wn(k, function (f) {
					//var f = cx.A().of(k)? cx.B(): cx.A()
					b.my[k] = f
				},
				function () {
					b.my[k] = 0
				})
		return b
	}
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a colison
	b.my = b.whenFxt = b.bindFxt = b.bindMyFxt = b.bindMyFxtWhen = function (k, fn, endFn) {
		var b = this, w = b.W()
		b.togMy(k)
		if (F(fn)) {
			b.cl(function (otherF, cx) {
				if (this.of(k)) {
					_.b(fn, this)(otherF, cx)
				}
			})
			if (F(endFn)) {
				b.end(function (otherF, cx) {
					if (this.of(k)) {
						_.b(endFn, this)(otherF, cx)
					}
				})
			}
		}
		return b
	}
	b.clMy = function (k, fn) {
		var b = this
		b.cl(function (f, cx) {
			if (this.of(k)) {
				_.b(fn, this)(f, cx)
			}
		})
	}
	b.when1 = function () {
		var body = this, w = body.wor(), ob = {}
		ob.contacts = function (kind, func) {
			w.beg(kind, func)
			return {
				after: function (func) {
					w.end(kind, func)
				}
			}
		}
		return ob
	}
	b.when = function (what, bFunc, eFunc) {
		var b = this,
				w = b.wor()
		w.when(b, what, bFunc, eFunc)
		return this
	}
	b.trig2 = function (act, func) {
		var body = this,
				w = body.wor()
		w.when(body,
				function () {
					body.trig[act] = true
				},
				function () {
					body.trig[act] = false
				}
		)
		if (F(func)) {
			func = _.bind(func, body)
			cjs.tick(function () {
				if (body.trig[act]) {
					func()
				}
			})
		}
		return this
	}
	b.trig = function (fixtKind, func) {
		var b = this, w = b.wor()
		var touching = false
		w.beg(function (cx) {
			cx.with(b, function () {
				if (this.hasClass(fixtKind)) {
					if (F(func)) {
						_.bind(func, this)()
					}
				}
				//$l('BODY: ' + this.B().K() + ' |FIXT: '+ this.K() )
			})
		})
		cjs.tick(function () {
			if (touching) {
				func()
			}
		})
		return this
	}
	b.while = function (what, func) {
		var body = this,
				w = body.wor()
		w.while(body, what, func)
		return this
	}
	w.flag = function (flag, val) {
		this.flags = this.flags || {}
		if (U(val)) {
			val = true
		}
		this.flags[flag] = val
		return this
	}
	w.flagged = function (flag) {
		this.flags = this.flags || {}
		var wasFlagged = this.flags[flag]
		if (wasFlagged) {
			this.flags[flag] = false
		}
		return wasFlagged
	}
	w.on = function (onWhat, func) {
		//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
		var that = this
		//interesting default !!!!!!!
		//func=func||function(val){val()}
		cjs.tick(function () {
			var val = that.flagged(onWhat)
			if (val) {
				func(val)
			}
		})
		return this
	}
	w.when = function (what, what2, bFunc, eFunc) {
		var w = this
		if (F(what)) {
			eFunc = what2
			bFunc = what
			w.beg(bFunc)
			if (eFunc) {
				w.end(eFunc)
			}
		}
		else if (F(what2)) {
			eFunc = bFunc
			bFunc = what2
			w.beg(what, bFunc)
			if (eFunc) {
				w.end(what, eFunc)
			}
		}
		else if (F(bFunc)) {
			w.beg(what, what2, bFunc)
			if (eFunc) {
				w.end(what, what2, eFunc)
			}
		}
		return this
	}
	w.while = function (kind, kind2, func) {
		var w = this
		var push = false
		if (F(func)) {
			w.when(kind, kind2,
					function () {
						push = true
					},
					function () {
						push = false
					})
			cjs.tick(function () {
				if (push) {
					func()
				}
			})
		}
		else if (F(kind2)) {
			w.when(kind,
					function () {
						push = true
					},
					function () {
						push = false
					})
			cjs.tick(function () {
				if (push) {
					kind2()
				}
			})
		}
		return this
	}
	f.cl = f.collide = function (k, fn) {
		var f = this
		//ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
		if (F(k)) {
			fn = k;
			k = ''
		}
		fn = _.b(fn, f)
		w.b(function (cx) {
			var fA = cx.A(), fB = cx.B()
			if (f.of(fA) && fB.of(k)) {
				fn(fB, cx)
			}
			if (f.of(fB) && fA.of(k)) {
				fn(fA, cx)
			}
		})
		return f
	}
}
//cx.excludes=function(u){return !this.includes(u)}
//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)
// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
cx.ds = cx.destroy = cx.destroyBoth = function () {
	this.a().K('destroy')
	this.b().K('destroy')
	return this
}
cx.destroy = cx.destroyBoth = function () {
	this.a().setDestroy()
	this.b().setDestroy()
	return this
}
cx.destroyIf = function (kind) {
	this.a().setDestroyIf(kind);
	this.b().setDestroyIf(kind)
}
cx.destroyOtherIf = function (kind) {
	var a = this.a(), b = this.b()
	if (a.is(kind)) {
		b.setDestroy()
	}
	else if (b.is(kind)) {
		a.setDestroy()
	}
}
// zero :
cx.ofThis = cx.anyWith = cx.in = cx.inc = cx.includes = cx.includes = cx.eitherOf = function (k, fn) {
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(k)) {
		if (fn) {
			_.b(fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	if (b.of(k)) {
		if (fn) {
			_.b(fn, b)(a, cx);
			return cx
		}
		return [b, a]
	}
}
cx.ofThese0 = cx.these0 = function (p1, p2, fn) {
	$l('these0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	if (a.of(p1) && b.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	if (b.of(p1) && a.of(p2)) {
		if (fn) {
			_.in(0, function () {
				_.b(fn, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.f1 = function () {
	return function () {
	}
}
cx.ofThis0 = cx.this0 = function (k, fn) {
	// a lot:$l('this0')
	var cx = this
	var a = cx.fA()
	var b = cx.fB()
	var g = G(arguments)
	if (!a || !b) {
		$l('!a || !b');
		return cx
	}
	if (a.of(g.f)) {
		if (F(g.s)) {
			_.in(0, function () {
				_.b(g.s, a)(b, cx)
			})
			return cx
		}
		return [a, b]
	}
	else if (b.of(g.f)) {
		if (g.s) {
			_.in(0, function () {
				_.b(g.s, b)(a, cx)
			})
			return cx
		}
		return [b, a]
	}
}
cx.of0 = cx.w0 = cx.with0 = function () {
	var cx = this,
			g = G(arguments), o
	o = F(g.t) || g.s && !F(g.s) ?
	{k: g.f, k1: g.s, fn: g.t} : {k: g.f, fn: g.s}
	return o.k1 ? cx.these0(o.k, o.k1, o.fn) :
			cx.this0(o.k, o.fn)
}
function ultimate() {
	_.mbIn = function () {
		return function (fn) {
			var g = G(arguments)
			g.p ? fn.apply(null, g) :
					_.in(0, function () {
						fn.apply(null, g)
					})
		}
	}
//if there is a fn i'll run it, binding to b, (a, cx) and even pass in the g.o, return cx
//otherwise its sync, so just pass back array [b,a,cx,g.o]
	_.fst = function (f, s, t, fn) {
		var o = G(arguments).o
		if (fn) {
			_.b(fn, f)(s, t, o);
			return t
		}
		return [f, s, t, o]
	}
	cx.a$ = function () {
		return _.fst(this.fA(), this.fB(), this, G(arguments).o)
	}
	cx.b$ = function () {
		return _.fst(this.fB(), this.fA(), this, G(arguments).o)
	}
	cx.$$ = function () {
		var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB(), o //k,fn
		o = F(g.t) ? {k1: g.f, k2: g.s, fn: g.t} :
				F(g.s) ? {k: g.f, fn: g.s} :
				{k1: g.f, k2: g.s}
		return o.k1 ?
				(
						a.of(o.k1) && b.of(o.k2) ? cx.a$(o.fn)
								:
								b.of(o.k1) && a.of(o.k2) ? cx.b$(o.fn)
										:
										cx
				)
				:
				(
						a.of(o.k) ? cx.a$(o.fn)
								:
								b.of(o.k) ? cx.b$(o.fn)
										:
										cx
				)
	}
	function moreTries() {
		cx.ab = function (k, fn) {
			var cx = this
			return function (k, fn) {
				var that = this
				if (cx.fA().of(k)) {
					if (fn) {
						_.b(fn, cx.fA())(cx.fB(), cx);
						return that
					}
					return [cx.fA(), cx.fB()]
				}
				else if (cx.fB().of(k)) {
					if (fn) {
						_.b(fn, cx.fB())(cx.fA(), cx);
						return that
					}
					return [cx.fB(), cx.fA()]
				}
			}
		}
		cx.aOrB1 = function (fn) {
			var g = G(arguments)
			//var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB()
			return function (f) {
				if (fA.of(f)) {
					fn(f, cx)
				}
				else if (fB.of(g.f)) {
				}
			}
		}
		cx.cxFn = function (txMatFn, sucMatFn) {
			var cx = this
			var a = cx.fA()
			var b = cx.fB()
			return function (cx) {
				var cx = this
				var res = txMatFn(cx)
				if (res) {
					if (sucMatfn) {
						_.b(sucMatFn, res[0])(res[1], cx);
						return cx
					}
					return [res[0], res[1], cx]
				}
			}
		}
		cx.mbFn = function () {
			var g = G(arguments), o
			o = F(g.t) ? {a: g.f, b: g.s, fn: g.t} :
					F(g.s) ? {a: g.f, fn: g.s} :
					{a: g.f, b: g.s}
			var cx = this,
					a = cx.fA(),
					b = cx.fB()
			if (o.fn) {
				_.b(o.fn, a)(b, cx);
				return cx
			}
			return [a, b]
		}
		cx.a$ = function (fn) {
			var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB()
			if (fn) {
				_.b(fn, a)(b, cx, g.o);
				return cx
			}
			return [a, b, cx, g.o]
		}
	}
}
function cxCos() {
	cx.bCo = cx.bindCo = cx.bindController = function (what) {
		var cx = this, fixt
		//if any fixt collides with a certain kind
		//switch to the controller with that name
		_.each(arguments,
				function (what) {
					if (fixt = cx.with(what)) {
						fixt.switchTo(window[what])
					}
				})
	}
	cx.aCo = cx.aBy = function (co) {
		var cx = this, bB = cx.bB();
		return co ? bB.a2(co) : bB.hasCo()
	}
	cx.bCo = cx.bBy = function (co) {
		return co ? this.bA().a2(co) : this.bA().hasCo()
	}
	cx.aNoCo = function () {
		return !this.aBy()
	}
	cx.bNoCo = function () {
		return !this.bBy()
	}
	cx.bCo = cx.bindCo = function () {
		var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
		G(arguments).e(function (k) {
			cx.w(k, function () {
				f.switchTo(window[k])
			})
		})
	}
}
function manifold() {
	b2d.WM = b2d.WorldManifold = b2d.C.b2WorldManifold
	$wM = function (cx) {
		var wM = new b2d.WorldManifold()
		if (cx) {
			cx.gWM(wM)
		}
		return wM
	}
	cx.filtering = cx.fFF = function () {//whats the point?
		this.FlagForFiltering();
		return contact
	}// Flag this contact for filtering.
// Filtering will occur the next time step.
	cx.center = function () {
		var centerA = this.A().center(),
				centerB = this.B().center()
		return Math.lineCenter(centerA, centerB)
	}
	function manifold() {
		function point() {
			cx.pt = cx.cen = function () {
				return V(this.pX(), this.pY())
			}
			cx.pX = function () {
				return parseInt(this.m().m_points[0].m().x)
			}
			cx.pY = function () {
				return parseInt(this.m().m_points[0].m().y)
			}
			cx.lP = function (b) {
				return b.lP(this.pX(), this.pY())
			}
//*** this is the collision center!!!!
			cx.point = cx.V = function () {
				return this.man().m_points[0].mult()
			}
			cx.localPlaneNormal = c.lPN = function () {
				return this.gM().m_localPlaneNormal
			}
			cx.localPoint = c.lP = function () {
				return this.gM().m_localPoint
			}
			cx.pointCount = c.pC = function () {
				return this.gM().m_pointCount
			}
			cx.points = c.p = function () {
				return this.gM().m_points
			}
			cx.pt = cx.cen = function () {
				return V(this.pX(), this.pY())
			}
			cx.pX = function () {
				return parseInt(this.m().m_points[0].m().x)
			}
			cx.pY = function () {
				return parseInt(this.m().m_points[0].m().y)
			}
			cx.lP = function (b) {
				return b.lP(this.pX(), this.pY())
			}
		}
		
		function norm() {
			cx.getNx = cx.N = function () {
				return this.GetNext()
			}
			cx.norm = function () {
				var norm
				norm = this.man().m_normal.toFixed(2)
				return norm
			}
			cx.norm = cx.n = function (n) {
				return this.m().m_normal.toFixed(2).m(N(n, 1))
			}
			cx.normX = cx.nX = function (n) {
				return this.n(n).x
			}
			cx.normY = cx.nY = function (n) {
				return this.n(n).y
			}
			cx.norm = cx.n = function (n) {
				return this.m().m_normal.toFixed(2).m(N(n, 1))
			}
			cx.normX = cx.nX = function (n) {
				return this.n(n).x
			}
			cx.normY = cx.nY = function (n) {
				return this.n(n).y
			}
		}
		
		cx.type = cx.t = function () {
			return this.gM().m_type
		}//Get the contact manifold.//  Do not modify the manifold unless you understand// the internals of Box2D
		cx.getMan = cx.getFold = cx.ty = cx.T = function () {
			return this.GetManifold().m_type
		}
		cx.man = cx.wM = cx.worMan = cx.worldManifold = function () {
			var m = b2d.worldManifold()
			this.GetWorldManifold(m)
			return m
		}
		cx.worMan = cx.getWorMan = cx.getWorFold = cx.m = function () {
			var cx = this, m = new b2d.Collision.b2WorldManifold
			cx.GetWorldManifold(m);
			return m
		}
		cx.getMan = cx.getFold = cx.ty = cx.T = function () {
			return this.GetManifold().m_type
		}
		cx.worMan = cx.getWorMan = cx.getWorFold = cx.m = function () {
			var cx = this, m = new b2d.Collision.b2WorldManifold
			cx.GetWorldManifold(m);
			return m
		}
		/*
		 You can access the raw contact manifold:
		 b2Manifold* GetManifold();
		 const b2Manifold* GetManifold() const;
		 You can potentially modify the manifold,
		 but this is generally not supported and is for advanced usage.
		 There is a helper function to get the b2WorldManifold:
		 void GetWorldManifold(b2WorldManifold* worldManifold) const;
		 This uses the current positions of the bodies to compute world positions
		 of the contact points.
		 */
		cx.lPN = cx.lcPN = function () {
			return this.gM().m_localPlaneNormal
		}
		cx.ptC = cx.numPts = cx.pointCount = cx.pC = function () {
			return this.gM().m_pointCount
		}
		cx.gM = function () {
			return this.GetManifold()
		}
		cx.ty = cx.type = cx.t = function () {
			return this.gM().m_type
		}
		cx.lPt = cx.lcPt = cx.lP = function () {
			return this.gM().m_localPoint
		}
		cx.pts = cx.p = function () {
			return this.gM().m_points
		}
		//worMan: -> :
		cx.gWM = function () {
			return this.GetWorldManifold()
		}
		cx.wM = function () {
			return $wM(this)
		}
		cx.wCxPt = cx.wPt = cx.cxPt = cx.pt = function () {
			return $wM(this).m_points[0].m()
		} //cx.point
		cx.no = cx.norm = function () {
			return $wM(this).m_normal.toFixed(2)
		}
		cx.pt = cx.V = function () {
			return this.wM().m_points[0].m()
		}
//Sensors dont create manifolds; 
// for them use:  touching = cx.IsTouching(); (fn also works for non-sensors)
		cx.iS = cx.Sn = function () {
			return this.IsSensor()
		}
		cx.sn = cx.sensor = cx.setSensor = cx.sS = function (a) {
			this.SetSensor(a ? true : false);
			return contact
		}
		cx.mS = function () {
			this.sS(true)
			return this
		}
		function prePost() {
			cx.iE = function () {
				return this.IsEnabled()
			}
			cx.en = cx.enabled = cx.sE = function (a) {
				this.SetEnabled(a ? true : false);
				return this
			} // Enable/disable this this.//   
// This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
			cx.off = cx.disable = cx.ds = cx.d = function () {
				this.SetEnabled(false)
				return this
			}
			//You can disable a contact. This only works inside the b2ContactListener::PreSolve event, discussed below.
			//  Both PreSolve and PostSolve give you a b2Contact pointer, so we have access to the same points and normal information we just looked at for BeginContact. PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated, or even to cancel the response altogether, and from PostSolve we can find out what the collision response was.
//     Here are the alterations you can make to the contact in PreSolve:
//SetEnabled(bool flag);//non-persistent - need to set every time step
// persists for duration of contact
//persists for duration of contact
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
//    It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
			/*
			 Pre-Solve Event
			 This is called after collision detection, but before collision resolution. This gives you a chance to disable the contact based on the current configuration. For example, you can implement a one-sided platform using this callback and calling b2Contact::SetEnabled(false). The contact will be re-enabled each time through collision processing, so you will need to disable the contact every time-step. The pre-solve event may be fired multiple times per time step per contact due to continuous collision detection.
			
			 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
			
			 {
			
			 b2WorldManifold worldManifold;
			
			 contact->GetWorldManifold(&worldManifold);
			
			 if (worldManifold.normal.y < -0.5f)
			
			 {
			
			 contact->SetEnabled(false);
			
			 }
			
			 }
			
			 The pre-solve event is also a good place to determine the point state and the approach velocity of collisions.
			
			 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
			
			 {
			
			 b2WorldManifold worldManifold;
			
			 contact->GetWorldManifold(&worldManifold);
			
			 b2PointState state1[2], state2[2];
			
			 b2GetPointStates(state1, state2, oldManifold, contact->GetManifold());
			
			 if (state2[0] == b2_addState)
			
			 {
			
			 const b2Body* bodyA = contact->GetFixtureA()->GetBody();
			
			 const b2Body* bodyB = contact->GetFixtureB()->GetBody();
			
			 b2Vec2 point = worldManifold.points[0];
			
			 b2Vec2 vA = bodyA->GetLinearVelocityFromWorldPoint(point);
			
			 b2Vec2 vB = bodyB->GetLinearVelocityFromWorldPoint(point);
			
			 float32 approachVelocity = b2Dot(vB – vA, worldManifold.normal);
			
			 if (approachVelocity > 1.0f)
			
			 {
			
			 MyPlayCollisionSound();
			
			 }
			
			 }
			
			 }
			
			
			 */
			/*
			
			 Post-Solve Event
			 The post solve event is where you can gather collision impulse results. If you don’t care about the impulses, you should probably just implement the pre-solve event.
			
			 It is tempting to implement game logic that alters the physics world inside a contact callback. For example, you may have a collision that applies damage and try to destroy the associated actor and its rigid body. However, Box2D does not allow you to alter the physics world inside a callback because you might destroy objects that Box2D is currently processing, leading to orphaned pointers.
			
			 The recommended practice for processing contact points is to buffer all contact data that you care about and process it after the time step. You should always process the contact points immediately after the time step; otherwise some other client code might alter the physics world, invalidating the contact buffer. When you process the contact buffer you can alter the physics world, but you still need to be careful that you don't orphan pointers stored in the contact point buffer. The testbed has example contact point processing that is safe from orphaned pointers.
			
			 This code from the CollisionProcessing test shows how to handle orphaned bodies when processing the contact buffer. Here is an excerpt. Be sure to read the comments in the listing. This code assumes that all contact points have been buffered in the b2ContactPoint array m_points.
			
			 // We are going to destroy some bodies according to contact
			
			 // points. We must buffer the bodies that should be destroyed
			
			 // because they may belong to multiple contact points.
			
			 const int32 k_maxNuke = 6;
			
			 b2Body* nuke[k_maxNuke];
			
			 int32 nukeCount = 0;
			
			
			
			 // Traverse the contact buffer. Destroy bodies that
			
			 // are touching heavier bodies.
			
			 for (int32 i = 0; i < m_pointCount; ++i)
			
			 {
			
			 ContactPoint* point = m_points + i;
			
			
			
			 b2Body* body1 = point->shape1->GetBody();
			
			 b2Body* body2 = point->shape2->GetBody();
			
			 float32 mass1 = body1->GetMass();
			
			 float32 mass2 = body2->GetMass();
			
			
			
			 if (mass1 > 0.0f && mass2 > 0.0f)
			
			 {
			
			 if (mass2 > mass1)
			
			 {
			
			 nuke[nukeCount++] = body1;
			
			 }
			
			 else
			
			 {
			
			 nuke[nukeCount++] = body2;
			
			 }
			
			
			
			 if (nukeCount == k_maxNuke)
			
			 {
			
			 break;
			
			 }
			
			 }
			
			 }
			
			
			
			 // Sort the nuke array to group duplicates.
			
			 std::sort(nuke, nuke + nukeCount);
			
			
			
			 // Destroy the bodies, skipping duplicates.
			
			 int32 i = 0;
			
			 while (i < nukeCount)
			
			 {
			
			 b2Body* b = nuke[i++];
			
			 while (i < nukeCount && nuke[i] == b)
			
			 {
			
			 ++i;
			
			 }
			
			
			
			 m_world->DestroyBody(b);
			
			 }
			 */
		}
	}
	
	function bool() {
		function enab() {
			cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
				var cx = this
				if (U(a)) {
					return cx.IsEnabled()
				}
				cx.SetEnabled(a ? true : false);
				return cx
			}
			cx.setEn = cx.setEnab = cx.e = cx.en = function (a) {
				var cx = this
				if (U(a)) {
					return cx.IsEnabled()
				}
				cx.SetEnabled(a ? true : false);
				return cx
			}
		}
		
		function sensor() {
			cx.isSen = cx.iS = cx.s = cx.sen = function () {
				var cx = this, g = G(arguments)
				if (g.u) {
					return cx.IsSensor()
				}
				cx.SetSensor(g.f ? true : false)
				return cx
			}
			cx.isSen = cx.iS = cx.s = cx.sen = function () {
				var cx = this, g = G(arguments)
				if (g.u) {
					return cx.IsSensor()
				}
				cx.SetSensor(g.f ? true : false)
				return cx
			}
			cx.sr = cx.ofSr = function (fn) {
				var cx = this
				var sr = cx.aSr() ? [cx.fA(), cx.fB()] :
						cx.bSr() ? [cx.fB(), cx.fA()] :
								false
				if (fn) {
					fn(sr);
					return cx
				}
				return sr
			}
			cx.aSr = function () {
				return this.fA().iSr()
			}
			cx.bSr = function () {
				return this.fB().iSr()
			}
			cx.sensor = c.iS = function () {
				return this.IsSensor()
			}//Is this contact a sensor?
			cx.setSensor = c.sS = function (a) {
				this.SetSensor(a ? true : false);
				return contact
			}// Change this to be a sensor or-non-sensor this.
		}
		
		cx.iE = function () {
			return this.IsEnabled()
		}//Has this contact been disabled?
// ??? do i use any of below???
		cx.continuous = c.iC = function () {
			return this.IsContinuous()
		}//Does this contact generate TOI events for continuous simulation
		cx.enabled = c.sE = function (a) {
			this.SetEnabled(a ? true : false);
			return this
		} // Enable/disable this this.//   This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
		cx.touching = c.iT = function () {
			return this.IsTouching()
		}//Is this contact touching.
//cx.manifold =c.gM=function(){return this.GetManifold()}
		cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
			var cx = this
			return cx.IsContinuous()
		} //Does this contact generate TOI events for continuous simulation
		cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
			return this.IsTouching()
		}
		cx.isCont = cx.isContin = cx.c = cx.cont = cx.continuous = cx.iC = function () {
			var cx = this
			return cx.IsContinuous()
		} //Does this contact generate TOI events for continuous simulation
		cx.isTouch = cx.doesTouch = cx.iT = cx.tch = cx.touching = cx.iT = function () {
			return this.IsTouching()
		}
	}
	
	function vel() {
		cx.linVel = function (bod) {
			return bod.linVelWor(this.point())
		}
//By convention in Box2d, the collision normal (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!
		cx.vA = function () {
			return this.linVel(this.a())
		}
		cx.vB = function () {
			return this.linVel(this.b())
		}
	}
}
function cxList() {
	b.contacts = b.cx = function () {
		return this.GetContactList()
	}
//  the contact class is created and destroyed by Box2D.   Contact objects are not created by the user.  (but u can access  contact class,interact with it)
	b.GCxL = function () {
		return this.GetContactList()
	}
	b.cx = function () {
		var cxLs = this.GCxL()
		return cxLs
	}
	b.eachCx = function (fn) {
		var b = this
		for (var cx = b.cx(); cx; cx = cx.next) {
			if (O(cx) && O(cx.contact)) {
				fn(cx.contact)
			}
			else {
				alert('err in b.eachCo')
			}
		}
		return b
	}
	cx.N = cx.GN = cx.next = cx.gN = function () {
		return this.GetNext()
	}
	cx.IC = cx.iCn = cx.iCont = cx.continuous = cx.iC = function () {
		return this.IsContinuous()
	}
	//Does this contact generate TOI events for continuous simulation
	cx.IT = cx.iT = cx.touching = function () {
		return this.IsTouching()
	}//Is this contact touching.
// accessCxs
//to access cx: 1)  can access the contacts directly on world and body structures.  2) can  implement a contact listener.
	cx.ks = function () {
		var cx = this
		var aK = cx.A().K()
		var bK = cx.B().K()
		var str = ''
		if (aK) {
			str += 'fA: ' + aK + ', '
		}
		if (bK) {
			str += 'fB: ' + bK
		}
		$l(str)
		return cx
	}
	w.cxs = function () {
		//You can iterate over all contacts in the world:
		for (cx = w.GCxL(); cx; cx = cx.GN()) {
		}
	}
	b.cxs = function () {
//	 You can also iterate over all the contacts on a body. 
// These are stored in a graph using a contact edge structure.
		//b2ContactEdge
		for (ce = b.GetContactList(); ce; ce = ce.next) {
			cx = ce.contact
		}
		//Caution : Accessing contacts off b2World and b2Body
		// may miss some transient contacts 
		// that occur in the middle of the time step.
		// Use b2ContactListener to get the most accurate results.
	}
	//contact point:  point where two shapes touch. Box2D approximates contact with a small number of points.
	function contactNormal() {
		//contact normal:unit vector that points from one shape to another. 
		//By convention, the normal points from fixtureA to fixtureB.
		//contact separation:opposite of penetration. Separation is negative when shapes overlap. 
		//It is possible that future versions of Box2D will create contact points with positive separation,
		// so you may want to check the sign when contact points are reported.
	}
	
	function contactManifold() {
		//contact manifold:Contact between two convex polygons may generate up to 2 contact points. 
		//Both of these points use the same normal, so they are grouped into a contact manifold,
		// which is an approximation of a continuous region of contact.
	}
	
	function normalImpulse() {
		//normal impulse: force applied at a contact point to prevent the shapes from penetrating. 
		//For convenience, Box2D works with impulses. The normal impulse is just the normal force multiplied by the time step.
		//tangent impulse: generated at a contact point to simulate friction. For convenience, this is stored as an impulse.
	}
	
	function contactId() {//contact ids
		//Box2D tries to re-use the contact force results from a time step as the initial guess for the next time step. 
		//Box2D uses contact ids to match contact points across time steps. 
		//The ids contain geometric features indices that help to distinguish one contact point from another.
	}
	
	function chickenEgg() {
		//Contacts created when two fixture’s AABBs overlap, destroyed with the AABBs cease to overlap.
		//So you might gather that there may be contacts created for fixtures that are not touching (just their AABBs). 
		//Well, this is correct. It's a "chicken or egg" problem. 
		//We don't know if we need a contact object until one is created to analyze the collision. 
		//We could delete the contact right away if the shapes are not touching, 
		//or we can just wait until the AABBs stop overlapping. 
		//Box2D takes the latter approach because it lets the system cache information to improve performance.
		//You can get the fixtures from a contact, then the bodies: fA = cx.fA(); bA = fA.B();  actorA = Actor.bA.uD()
	}
	
	cx.next = cx.gN = function () {
		return this.GetNext()
	}//Get the next contact in the world's contact list.
	cx.getNx = cx.N = function () {
		return this.GetNext()
	}
}
b2d.either = function (ob1, ob2, is1, is2) {
	return (ob1.is(is1) && ob2.is(is2)) ||
			(ob1.is(is2) && ob2.is(is1))
	return {
		is: function (data) {
			return body1.is(data) || body2.is(data)
		}
	}
}
b2d.neither = function (body1, body2) {
	return {
		is: function (data) {
			return !body1.is(data) && !body2.is(data)
		}
	}
}
function dittoMaybe(){
	w.D = function () {
		var w = this, g = G(arguments, 'k'), o, b
		if (g.u) {
			return w.D(w.hW, w.hH)
		}
		//	o = //g.O ? g.f :
		o = g.O_ ? {p: g.f, f: g.r} :
		{p: [g.f, g.s], f: _.r(g, 2)}
		b = w.CB($bD(o.p))
		b.K(g.k)
		$a(b, 'f', g.G(o.f))
		return b
	}
	w.D_ = w._D = function (o) {
		alert('w._D??? nah, w.D_')
		return this.D(o.x, o.y, o.c, o.w, o.h)
	}
	w.cen = w.cent = function () {
		var w = this, g = G(arguments),
				v = V(w.s.W() / 2, w.s.H() / 2)
		if (g.p) {
			w.dot(v)
		}
		return v
	}
	w.UI = function () {
		//alert('w.UI');
		return $(this.i.canvas)
	}
	w.$h = function () {
		$l('w.$h')
		return this.i.h.apply(this.i, arguments)
	} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
	w.C = function (c) {
		var w = this
		w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
		return w
	}
	w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
		var w = this, g = G(arguments), b, o
		o = g.O ? g.f : N(g.s) ? {
			x: g.f, y: g.s,
			r: g.t,
			c: g[3]
		} : {r: g.f}
		o.x = N(o.x, w.hW)
		o.y = N(o.y, w.hH)
		o.r = N(o.r, 50)
		o.c = o.c || $r()
		b = w.D(o.x, o.y, o.c, o.r)
				.d(.5).fr(0).r(.5)
				.K('ball cir')
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.bump = w.baa = function () {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			r: g[2]
		} : {r: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.r = _.tN(o.r, 40)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.d = w.dot = function () {
		var w = this, g = G(arguments), o
		if (g.S_) {
			o = N(g.s) ?
			{c: g.f, x: g.s, y: g[2]} :
			{c: g.f, x: V(g.s).x, y: V(g[1]).y}
		}
		else {
			o = N(g.s) ?
			{x: g.f, y: g.s} :
			{x: V(g.f).x, y: V(g.f).y}
		}
		if (g.m) {
			w.dot(o.c, o.x, o.y, '-')
			w.dot(o.c, o.x, o.y, '/')
			w.dot(o.c, o.x, o.y, '+')
			w.dot(o.c, o.x, o.y)
		}
		else if (g.p) {
			w.fg.dot(o.c, o.x, o.y)
		}
		else if (g.n) {
			w.bg.dot(o.c, o.x, o.y)
		}
		else if (g.d) {
			w.g.dot(o.c, o.x, o.y)
		}
		else {
			w.i.dot(o)
		}
		return w
	}
	w.brick = w.bii = function (x, y, W, H) {
		var w = this, g = G(arguments), b, o
		o = O(g[0]) ? g[0] : N(g[1]) ? {
			x: g[0],
			y: g[1],
			w: g[2],
			h: g[3]
		} : {w: g[0]}
		o.x = _.tN(o.x, w.hW)
		o.y = _.tN(o.y, w.hH)
		o.w = _.tN(o.w, 40)
		o.h = _.tN(o.h, o.w)
		o.c = o.c || $r()
		b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
		if (g.n) {
			b.sen(true)
		}
		return b
	}
	w.bfR = function () {
		var w = this, g = G(arguments), b, h, o
		o = _.x({x: g.f, y: g.s},
				S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
				{w: g.t, h: g[3], c: g[4]})
		o.i = o.i || 'sun'
		o.c = o.c || 'y' // can be removed
		b = w._D(o)
		h = w.g.h().al(.5)
		if (o.c) {
			h.c(o.c)
		}
		h.bf(o.i)
		h.rec(o.w, o.h)
		b.bS(h)
		return b
	}
	w._preKill = function (b) {
		//$l('w._preKill')
		if (b.sprite) {
			b.sprite.rm()
		}
		b.sprite = null
		if (b.sp()) {
			b.sp().rm()
		}
		b.fs(function (f) {
			f.rmSp()
		})
	}
	w._fPreKill = function (f) {
		//$l('w._fPreKill')
		f.rmSp()
	}
	w.killD = w.xD = function () {
		w.e(function (b) {
			if (b.iD()) {
				b.kill()
			}
		})
	}
	w._ = function (fn) {
		Q(function () {
			fn(w)
		})
	}
	f.S = f.stg = function () {
		return this.W().s
	}
	Pol = function (vs) {
		this.v = this.vs = vs
	}
	f.pol = f.polDat = function (o) {
		var f = this
		var vs = f.vs()
		var pol = {v: vs, vs: vs}
		return O(o) ? _.x(o, pol) : pol
	}
	f.cir = f.cirDat = function (o) {
		var f = this
		var cir = {x: f.pX(), y: f.pY(), r: f.rad()}
		return O(o) ? _.x(o, cir) : cir
	}
	f.hDat = function (o) {
		
		//not a circle? .. then most be a poly of some kind
		// *** note: even if u set a fixture with SAB or SAOB..
		// it still only knows it ( i think ) by its points
		// SAB is just a helper abstaction for getting the points in
		// because u commonly want to make a rectangle
		// .. but when u want to GET the shape..
		// get it by its points.. (its not conceptualized as rec anymore)
		var f = this
		return f.iC() ? f.cir(o) : f.pol(o)
	}
	f.c = f.C = function () {
		var f = this, b = f.B(), w = b.W(), g = G(arguments), o
		o = g.O ? g.f :
		{c: g.f, C: g.s, l: g.t}
		var easelMet = f.iC() ? 'cir' : 'pol'
		o.c = (o.c == '*') ? $r() : (o.c || 'b');
		o.C = o.C || o.c
		f.B()._i = f.B().i = w.st[easelMet](f.hDat(o))
		//*** look.. we just put the easel shape display object on the fixture's body
		// we called it i.. just i 
		// but i prefer _i
		f.rpSp(f.B()._i)
		// .. then we made it the main FIXTURE sprite,
		// which gets bound to the actual fixture,
		// but is clearly ALSO... referenced on the body
		// so that is just temp on the body because it will get constantly overwrittern!!
		//so can be used short term.. but why not an array???
		// wel they are already probably an array of the fixture?? body can iterate fixtures// better that way becasue then they can be more easily associated with their assoc fixtures
		return f
	}
	f.dot = function (c) {
		var f = this, w = f.B().W(), v
		v = f.cen()
		if (S(c)) {
			w.dot(c, v)
		}
		else {
			w.dot(v)
		}
		return f
	}
	f.set = function (o) {
		if (!O(o)) {
			return false
		}
		var f = this
		if (D(o.d)) {
			f.d(o.d)
		}
		if (D(o.bo)) {
			f.bo(o.b)
		} else if (D(o.r)) {
			f.r(o.b)
		}
		if (D(o.fr)) {
			f.fr(o.f)
		}
		if (o.s) {
			f.sen(1)
		}
		if (D(o.k)) {
			f.K(o.k)
		}
		return f
	}
	FXC = function () {
		W().C('z')
		b = w.D()
		f = b.cir({c: 'o'})
		b1 = w.D(300, 400)
		f1 = b1.pol(v1)[0]
		_.in(function () {
			f.C($r())
			f1.C($r())
		})
	}
	w.sH = function (h) {
		var w = this
		if (U(h)) {
			return w.H * w.s.scaleY
		}
		w.s.scaleY = h / w.H
		return w
	}
	w.sTW = w.sToW = function (x, y) {
		var w = this, //works
				x = x / w.z - w.s.x / w.z,
				y = y / w.z - w.s.y / w.z
		//w.dot(x,y,'*') // cool
		return {x: x, y: y}
	}
	w.wTS = w.wToS = function (x, y) {
		var w = this,
				x = (x + w.s.x / w.z) * w.z,
				y = (y + w.s.y / w.z) * w.z
		return {x: x, y: y}
	}
	w.lG = function (c, c2) {
		var w = this, o
		o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
		_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
				R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
						R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
		w.bg.h().lf(o).dr(0, 0, w.w, w.h)
		w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
		return w
	}
	w.warp = function () {
		var w = this
		w.eEv(function (b) {
			if (b.X() < 10) {
				b.X(w.W - 10)
			}
			if (b.X() > w.W - 10) {
				b.X(10)
			}
			if (b.Y() < 10) {
				b.Y(w.H - 10)
			}
			if (b.Y() > w.H - 10) {
				b.Y(10)
			}
		})
		return w
	}
	w.tE = function (fn) {
		var w = this
		T.t(function () {
			w.e(fn)
		})
		return this
	} // TICKER !!!!!
	w.bmR = w.bR = w.bfR = function () {
		var w = this, g = G(arguments), b, h, o
		o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
		{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
		o.i = o.i || 'sun'
		o.c = o.c || 'y' // can be removed
		b = w.D(o.x, o.y, o.c, o.w, o.h)
		h = w.g.h().al(.5)
		if (o.c) {
			h.c(o.c)
		}
		h.bf(o.i)
		h.rec(o.w, o.h)
		b.bS(h)
		return b
	}
	w.xW = function () {//used in MIRROR
		this.e('wall', function (b) {
			b.kill()
		})
		return this
	}
	w.polyCirc = function (x, y, r, sides) {
		var w = this,
				b = w.D(x, y)
		b.pol({v: b2d.polyCirc(r, sides)})
		return b
	}
//wall
	w.isWall = function (b) {
		var w = this;
		return b == w.right || b == w.left || b == w.roof || b == w.floor
	}
	w.clr = function () {
		var w = this
		w.e(function (b) {
			if (!w.isWall(b)) {
				b.kill()
			}
		})
		return w
	} //=w.wXx
	w._walls = function (o) {
		var w = this
		if (o.w == '*') {
			sides();
			verSides()
		}
		if (o.w == '@') {
			w.warp();
			return w
		}
		if (o.w == '_') {
			bot()
		}
		if (o.w == '~') {
			top()
		}
		if (o.w == '[') {
			left()
		}
		if (o.w == ']') {
			right()
		}
		if (o.w == 'U') {
			sides();
			bot()
		}
		if (o.w == 'A') {
			sides();
			top()
		}
		if (o.w == 'C') {
			verSides();
			left()
		}
		if (o.w == 'L') {
			left();
			bot()
		}
		if (o.w == '=') {
			verSides()
		}
		if (o.w == '|') {
			sides()
		}
		if (o.w == '->') {
			verSides();
			left();
			right1()
		}
		if (o.w == '<-') {
			verSides();
			left1();
			right()
		}
		if (o.w == '<->') {
			verSides();
			left1();
			right1()
		}
		if (o.w == 'r2') {
			verSides();
			left();
			right2()
		}
		if (o.w == 'l2') {
			verSides();
			left2();
			right()
		}
		function sides() {
			right();
			left()
		}
		
		function verSides() {
			top();
			bot()
		}
		
		function left() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
			w.l_.SetBullet(true)
		}
		
		function right() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
			w.r_.SetBullet(true)
		}
		
		function right2() {
			w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function right1() {
			w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
			w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function left2() {
			w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
		}
		
		function left1() {
			w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
			w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
		}
		
		function top() {
			w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
			w.t_.SetBullet(true)
		}
		
		function bot() {
			w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
			w.b_.SetBullet(true)
		}
	}
	w.walls = function () {
		var w = this, g = G(arguments), o
		if (g.f === 0) {
			return
		}
		w._walls(wallOp(g))
		function wallOp(g) {
			var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
			o.c = o.c || 'o';
			o.w = o.w || '*';
			o.l = 40
			return o
		}
	}
//anim
	w.ps = tw.pos
	w.iGP = tw.ignore
	w.th = w.thrust = function (c, x, y, r) {
		return this.D(N(x, 600), N(y, 500), c || 'b', N(r, 40)).cn('thrust')
	}
	w.dance = function () {
		var w = this
		w.e(function (b) {
			if (b.iD()) {
				b.thr()
			}
		})//w.eD
		return w
	}
	w.boxes = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.box.apply(w, g)
		})
		return w
	}
	w.brcks = w.boxesStat = function () {
		var w = this, g = G(arguments)
		_.e(g, function (g) {
			w.brick.apply(w, g)
		})
		return w
	}
	w.ten = w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.hun = w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.ball(100 + (i * 8), 50, 10)
		})
		return w
	}
	$W = function () {
		W()
		w.y()
		w.p()
	}
	f.bSQ = function (j) {
		var f = this
		Q(function () {
			
			//f.ctSp( Q.b(j) )
		})
		return f
	}
	PROTONIGHT = function () {
		w = W([1200, 600, 1200, 600])
		w.dB(900, 300).stat().rec(120, 40) // top
		w.dB(700, 360).stat().rec(120, 40)
		w.dB(620, 400).stat().rec(320, 40)
		w.dB(500, 420).stat().rec(320, 40)
		w.dB(250, 500).stat().rec(60, 40)
		w.dB(300, 540).stat().rec(320, 40)//bottom
		_.t(10, function () {
			p = w.p().XY(R(300), R(300)).K('guy')
		})
		y = w.y(400, 200, 2).track()
		y.cl(function (fx) {
			$l('collided')
			var bod = fx.B()
			if (bod.K() == 'guy') {
				bod.kill()
			}
		})
		w.showOff()
	}
}
w.D = function () {
	var w = this, g = G(arguments, 'k'), o, b
	if (g.u) {
		return w.D(
				w.hW, w.hH)
	}
	//	o = //g.O ? g.f :
	o = g.O_ ? {p: g.f, f: g.r} :
	{p: [g.f, g.s], f: _.r(g, 2)}
	b = w.cB(b2d.bD(o.p))
	b.K(g.k)
	$a(b, 'f', g.G(o.f))
	return b
}
w.D_ = w._D = function (o) {
	alert('w._D??? nah, w.D_')
	return this.D(o.x, o.y, o.c, o.w, o.h)
}
w.cen = w.cent = function () {
	var w = this, g = G(arguments),
			v = V(w.s.W() / 2, w.s.H() / 2)
	if (g.p) {
		w.dot(v)
	}
	return v
}
w.UI = function () {
	//alert('w.UI');
	return $(this.i.canvas)
}
w.$h = function () {
	$l('w.$h')
	return this.i.h.apply(this.i, arguments)
} // h = $h().a2(s).rXY(100, 300).XY(100,300).drag()
//  h.rec( 'r','b',600, 200,  600, 200)
// h.rec( 'g',100, 100,  100, 20)
w.C = function (c) {
	var w = this
	w.bg.h().c(c || $r()).dr(0, 0, w.w, w.h)
	return w
}
w.cir = w.ball = w.ba = w.circ = function (x, y, r, c) {
	 
	var w = this, g = G(arguments), b, o
	o = g.O ? g.f : N(g.s) ? {
		x: g.f, y: g.s,
		r: g.t,
		c: g[3]
	} : {r: g.f}
	o.x = N(o.x, w.hW)
	o.y = N(o.y, w.hH)
	o.r = N(o.r, 50)
	o.c = o.c || $r()
	b = w.D(o.x, o.y, o.c, o.r)
			.d(.5).fr(0).r(.5)
			.K('ball cir')
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bump = w.baa = function () {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		r: g[2]
	} : {r: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.r = _.tN(o.r, 40)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.r).K('bump').DFB(0.5, 0, 0.5)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.d = w.dot = function () {
	var w = this, g = G(arguments), o
	if (g.S_) {
		o = N(g.s) ?
		{c: g.f, x: g.s, y: g[2]} :
		{c: g.f, x: V(g.s).x, y: V(g[1]).y}
	}
	else {
		o = N(g.s) ?
		{x: g.f, y: g.s} :
		{x: V(g.f).x, y: V(g.f).y}
	}
	if (g.m) {
		w.dot(o.c, o.x, o.y, '-')
		w.dot(o.c, o.x, o.y, '/')
		w.dot(o.c, o.x, o.y, '+')
		w.dot(o.c, o.x, o.y)
	}
	else if (g.p) {
		w.fg.dot(o.c, o.x, o.y)
	}
	else if (g.n) {
		w.bg.dot(o.c, o.x, o.y)
	}
	else if (g.d) {
		w.g.dot(o.c, o.x, o.y)
	}
	else {
		w.i.dot(o)
	}
	return w
}
w.brick = w.bii = function (x, y, W, H) {
	var w = this, g = G(arguments), b, o
	o = O(g[0]) ? g[0] : N(g[1]) ? {
		x: g[0],
		y: g[1],
		w: g[2],
		h: g[3]
	} : {w: g[0]}
	o.x = _.tN(o.x, w.hW)
	o.y = _.tN(o.y, w.hH)
	o.w = _.tN(o.w, 40)
	o.h = _.tN(o.h, o.w)
	o.c = o.c || $r()
	b = w.S(o.x, o.y, o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)
	if (g.n) {
		b.sen(true)
	}
	return b
}
w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = _.x({x: g.f, y: g.s},
			S(g.t) ? {i: g.t, w: g[3], h: g[4], c: g[5]} :
			{w: g.t, h: g[3], c: g[4]})
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w._D(o)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}

w._preKill = function (b) {
	
	//$l('w._preKill')
	if (b.sprite) {
		b.sprite.rm()
	}
	
	
	b.sprite = null
	
	if (b.sp()) {
		b.sp().rm()
	}
	
	b.fs(function (f) {
		f.rmSp()
	})
}

w._fPreKill = function (f) {
	//$l('w._fPreKill')
	f.rmSp()
}


w.killD = w.xD = function () {
	w.e(function (b) {
		if (b.iD()) {
			b.kill()
		}
	})
}
w._ = function (fn) {
	Q(function () {
		fn(w)
	})
}
f.S = f.stg = function () {
	return this.W().s
}
f.c = f.C = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			o = g.O ? g.f : {c: g.f, C: g.s, l: g.t}
	o.c = (o.c == '*') ? $r() : (o.c || 'b');
	o.C = o.C || o.c
	return f.rpSp(
			f.iC() ? b.i = w.st.cir(f.cir(o)) : b.i = w.st.pol(f.pol(o)))
}
f.cir = function (o) {
	var f = this
	return _.x(o || {}, {x: f.pX(), y: f.pY(), r: f.rad()})
}
f.dot = function (c) {
	var f = this, w = f.B().W(), v
	v = f.cen()
	if (S(c)) {
		w.dot(c, v)
	}
	else {
		w.dot(v)
	}
	return f
}
f.pol = function (o) {
	return _.x(o || {}, {v: this.vs()})
}
f.set = function (o) {
	if (!O(o)) {
		return false
	}
	var f = this
	if (D(o.d)) {
		f.d(o.d)
	}
	if (D(o.bo)) {
		f.bo(o.b)
	} else if (D(o.r)) {
		f.r(o.b)
	}
	if (D(o.fr)) {
		f.fr(o.f)
	}
	if (o.s) {
		f.sen(1)
	}
	if (D(o.k)) {
		f.K(o.k)
	}
	return f
}
FXC = function () {
	W().C('z')
	b = w.D()
	f = b.cir({c: 'o'})
	b1 = w.D(300, 400)
	f1 = b1.pol(v1)[0]
	_.in(function () {
		f.C($r())
		f1.C($r())
	})
} 


w.sH = function (h) {
	var w = this
	if (U(h)) {
		return w.H * w.s.scaleY
	}
	w.s.scaleY = h / w.H
	return w
}
w.sTW = w.sToW = function (x, y) {
	var w = this, //works
			x = x / w.z - w.s.x / w.z,
			y = y / w.z - w.s.y / w.z
	//w.dot(x,y,'*') // cool
	return {x: x, y: y}
}
w.wTS = w.wToS = function (x, y) {
	var w = this,
			x = (x + w.s.x / w.z) * w.z,
			y = (y + w.s.y / w.z) * w.z
	return {x: x, y: y}
}
w.lG = function (c, c2) {
	var w = this, o
	o = {c1: c2 || 'z', c2: c || 'r', x1: 0, y1: 0, x2: 0, y2: 0}
	_.x(o, R() ? (R() ? {y2: w.h} : {x2: w.w}) :
			R() ? (R() ? {x1: w.w, y1: w.h} : {x2: w.w, y2: w.h}) :
					R() ? {x1: w.w, y2: w.h} : {y1: w.h, x1: w.w})
	w.bg.h().lf(o).dr(0, 0, w.w, w.h)
	w.bg.h(0, 0, $r()).dr(0, 0, w.w, w.h).al(.2)
	return w
}
w.warp = function () {
	var w = this
	w.eEv(function (b) {
		if (b.X() < 10) {
			b.X(w.W - 10)
		}
		if (b.X() > w.W - 10) {
			b.X(10)
		}
		if (b.Y() < 10) {
			b.Y(w.H - 10)
		}
		if (b.Y() > w.H - 10) {
			b.Y(10)
		}
	})
	return w
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
} // TICKER !!!!!
w.bmR = w.bR = w.bfR = function () {
	var w = this, g = G(arguments), b, h, o
	o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
	{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
	o.i = o.i || 'sun'
	o.c = o.c || 'y' // can be removed
	b = w.D(o.x, o.y, o.c, o.w, o.h)
	h = w.g.h().al(.5)
	if (o.c) {
		h.c(o.c)
	}
	h.bf(o.i)
	h.rec(o.w, o.h)
	b.bS(h)
	return b
}
w.xW = function () {//used in MIRROR
	this.e('wall', function (b) {
		b.kill()
	})
	return this
}
w.polyCirc = function (x, y, r, sides) {
	var w = this,
			b = w.D(x, y)
	b.pol({v: b2d.polyCirc(r, sides)})
	return b
}
//wall
w.isWall = function (b) {
	var w = this;
	return b == w.right || b == w.left || b == w.roof || b == w.floor
}
w.clr = function () {
	var w = this
	w.e(function (b) {
		if (!w.isWall(b)) {
			b.kill()
		}
	})
	return w
} //=w.wXx
w._walls = function (o) {
	var w = this
	if (o.w == '*') {
		sides();
		verSides()
	}
	if (o.w == '@') {
		w.warp();
		return w
	}
	if (o.w == '_') {
		bot()
	}
	if (o.w == '~') {
		top()
	}
	if (o.w == '[') {
		left()
	}
	if (o.w == ']') {
		right()
	}
	if (o.w == 'U') {
		sides();
		bot()
	}
	if (o.w == 'A') {
		sides();
		top()
	}
	if (o.w == 'C') {
		verSides();
		left()
	}
	if (o.w == 'L') {
		left();
		bot()
	}
	if (o.w == '=') {
		verSides()
	}
	if (o.w == '|') {
		sides()
	}
	if (o.w == '->') {
		verSides();
		left();
		right1()
	}
	if (o.w == '<-') {
		verSides();
		left1();
		right()
	}
	if (o.w == '<->') {
		verSides();
		left1();
		right1()
	}
	if (o.w == 'r2') {
		verSides();
		left();
		right2()
	}
	if (o.w == 'l2') {
		verSides();
		left2();
		right()
	}
	function sides() {
		right();
		left()
	}
	
	function verSides() {
		top();
		bot()
	}
	
	function left() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left');
		w.l_.SetBullet(true)
	}
	
	function right() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h).K('wall side right');
		w.r_.SetBullet(true)
	}
	
	function right2() {
		w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function right1() {
		w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
		w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function left2() {
		w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
	}
	
	function left1() {
		w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
		w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
	}
	
	function top() {
		w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof');
		w.t_.SetBullet(true)
	}
	
	function bot() {
		w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor');
		w.b_.SetBullet(true)
	}
}
w.walls = function () {
	var w = this, g = G(arguments), o
	if (g.f === 0) {
		return
	}
	w._walls(wallOp(g))
	function wallOp(g) {
		var o = g.A ? {w: g.f[0], c: g.f[1]} : {w: g.f, c: g.s}
		o.c = o.c || 'o';
		o.w = o.w || '*';
		o.l = 40
		return o
	}
}
//anim
w.ps = tw.pos
w.iGP = tw.ignore
w.th = w.thrust = function (c, x, y, r) {
	return this.D(N(x, 600), N(y, 500), c || 'b', N(r, 40)).cn('thrust')
}
w.dance = function () {
	var w = this
	w.e(function (b) {
		if (b.iD()) {
			b.thr()
		}
	})//w.eD
	return w
}
w.boxes = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.box.apply(w, g)
	})
	return w
}
w.brcks = w.boxesStat = function () {
	var w = this, g = G(arguments)
	_.e(g, function (g) {
		w.brick.apply(w, g)
	})
	return w
}
w.ten = w.addTenBalls = function (n) {
	var w = this
	_.t(n || 10, function (i) {
		w.ball(100 + (i * 80), 200)
	})
	return w
}
w.hun = w.addHundBalls = function (n) {
	var w = this
	_.t(n || 100, function (i) {
		w.ball(100 + (i * 8), 50, 10)
	})
	return w
}
$W = function () {
	W()
	w.y()
	w.p()
}
f.bSQ = function (j) {
	var f = this
	Q(function () {
		
		//f.ctSp( Q.b(j) )
	})
	return f
}
PROTONIGHT = function () {
	w = W([1200, 600, 1200, 600])
	w.dB(900, 300).stat().rec(120, 40) // top
	w.dB(700, 360).stat().rec(120, 40)
	w.dB(620, 400).stat().rec(320, 40)
	w.dB(500, 420).stat().rec(320, 40)
	w.dB(250, 500).stat().rec(60, 40)
	w.dB(300, 540).stat().rec(320, 40)//bottom
	_.t(10, function () {
		p = w.p().XY(R(300), R(300)).K('guy')
	})
	y = w.y(400, 200, 2).track()
	y.cl(function (fx) {
		$l('collided')
		var bod = fx.B()
		if (bod.K() == 'guy') {
			bod.kill()
		}
	})
	w.showOff()
} 