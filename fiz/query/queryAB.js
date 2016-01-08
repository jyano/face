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
function old() {
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
		b.not = b.notAny = function (kind) {
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
	/*
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
	
	
	
	 _.e([fD, f, bD, b, j, co], extBx)
	 }*/
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
b.worldVec = function (vec, y) {
	if (N(vec) && N(y)) {
		vec = V(vec, y)
	}
	if (U(vec)) {
		vec = V(0, -100)
	}
	return this.GetWorldVector(vec)
}
b.count = function () {
	return this.m_fixtureCount
}
w.bs = w.bL = function () {
	return this.GetBodyList()
}    //can be result of w.b if g.u//= w.getBodyList
BODYAT = function () {
	w = b2d.W({g: 0})
	b = w.S(470, 270, 'y', 100)
	b1 = w.S(500, 300, 'r', 100)
	b2 = w.S(530, 330, 'o', 100)
	w.qXY(500, 300,
			function (f) {
				f.C('w')
				return true
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

w.QA = w.Q = w.QAB = function (a, b) {
	this.QueryAABB(a, b);
	return this
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
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
w.qA = function (fn, ab) {
	this.QueryAABB(fn, ab);
	return this
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
f.AB = function () {
	var ab = this.GetAABB()
	return {
		l: ab.lowerBound.m(),
		u: ab.upperBound.m()
	}
}
w.rad = function (x, y, r, fn) {
	return this.Q({
		x1: x - r,
		y1: y - r,
		x2: x + r,
		y2: y + r,
		fn: fn
	})
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
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
}
b.wP = b.wPt = function (x, y) {
	var b = this
	return b.GetWorldPoint(V(x, y).div()).mult()
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
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(b.tf(), v.d())
	//is a point within the fixture // very accurate
}
//userDa()
function userDa() {
	b.SUD = function (d) {
		this.SetUserData(d);
		return this
	}
	b.GUD = function () {
		return this.GetUserData()
	}
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
w.bdAt = w.bdAtPt = w.atPt = w.getBodyAtPoint = function (x, y) {
	var w = this, g = G(arguments), o
	var selectedBody = null
	w.QueryAABB(queryFunc,
			AB(x - .001, y - .001, x + .001, y + .001))
	return selectedBody ? selectedBody : false
	function queryFunc(f) {
		if (f.B().isDyn() && f.testPoint(mX, mY)) {
			// f.B().gT() !=sB && f.gSh().tP(f.B().gTf(), bV(mX,mY))
			selectedBody = f.B()
			return false
		}
		return true
	}
}
w.e = w.eB = w.each = function () {
	var w = this, g = G(arguments), o
	//can pass a cb to be run on EACH body
	//can also pass a k to restrict cb to
	//run only on  bodies.of(k)  
	o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
	var b = w.bd()
	while (b) {
		if (b.of(o.k)) {
			o.fn(b)
		}
		b = b.N()
	}
	return w
}//work on
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
} // b.eaF = 
$L('crBod', 'moveAll', 'each')
w.Q = w.qAB = function (a, b) {
	$l('w.Q =  w.qAB = ')
	var w = this
	return w.QA(a, b)
}//= w.q
w.qPoint = w.queryPoint = function (fn, x, y) {
	$l('w.qPoint = w.queryPoint = ')
	return this.QP(fn, V(x, y, '-'))
}
function each() {
	w.e$ = w.b$ = w.eachClick = w.bodyClick = function (fn) {
		var w = this
		w.eB(function (b) {
			b.$(fn)
		})
		return w
	}
	w.eD = w.eDB = w.eDyn = function (fn) {
		return this.eB(function (b) {
			if (b.iD()) {
				fn(b)
			}
		})
	}
}
b.GWC = function () {
	return this.GetWorldCenter()
}
f.area = function () {
	return Math.poly(this.V()).getArea()
}
f.test = f.hit = function (pt, y) {//=f.testPoint= f.tP
	var f = this, b = f.body(), w = b.wor(),
			g = G(arguments), v = V(g[0], g[1]),
			res = f.H().testPoint(b.transform(), v.div())
	if (g.p) {
		b.wor().dot(v)
	}
	return res
}//is a point within the fixture // very accurate
f.cent = f.center = function () {
	var bounds = this.GetAABB()
	return Math.lineCenter(bounds.lowerBound, bounds.upperBound).mult()
}//center point of its BOUNDING BOX
//b2d.p()
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
$.mousedown = function (fn) {
	$('body').on('mousedown', fn);
	return $
}
$.oMD = function (fn) {
	return $.mousedown(function (e) {
		fn(e.clientX, e.clientY, e)
	})
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
$.mouseup = function (fn) {
	$('body').on('mouseup', fn);
	return $
}
$.oMU = function (fn) {
	return $.mouseup(function (e) {
		fn(e.clientX, e.clientY, e)
	})
}
w.mu = function (fn) {
	var w = this
	w.UI().mouseup(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
$.mousemove = function (fn) {
	$('body').on('mousemove', fn);
	return $
}
$.oMM = function (fn) {
	return $.mousemove(function (e) {
		fn(e.clientX, e.clientY, e)
	})
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		fn(o)
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
b2d.AB = function (x1, y1, x2, y2) {
	var g = G(arguments)
	var g = G(arguments), ab
	ab = new b2d.Collision.b2AABB
	if (g.p) {
		ab.lowerBound.Set(x1, y1)
		ab.upperBound.Set(x2, y2)
	}
	else {
		if (U(g[2])) {
			ab.lowerBound.Set(g[0] / 30 - 0.01, g[1] / 30 - 0.01)
			ab.upperBound.Set(g[0] / 30 + 0.01, g[1] / 30 + 0.01)
		}
		else {
			ab.lowerBound.Set(g[0] / 30, g[1] / 30)
			ab.upperBound.Set(g[2] / 30, g[3] / 30)
		}
	}
	return ab
}
b2d.mJ = function (body, tX, tY) {
	if (O(tX)) {
		tY = tX.y;
		tX = tX.x
	}
	var md = new b2d.Joints.b2MouseJointDef
	md.bodyA = w.GetGroundBody()
	md.bodyB = body
	md.target = V(tX, tY)
	md.collideConnected = true
	md.maxForce = 1000 * body.GetMass()
	md.dampingRatio = 0
	return md
}
b.hit = b.h = function (x, y, dot) {
	var b = this, w = b.W(), g = G(arguments)
	hit
	if (g.p) {
		w.dot(x, y)
	}
	b.fs(function (f) {
		if (f.hit(x, y)) {
			hit = true
		}
	})
	return hit
}
f.tP = f.hit = f.testPoint = f.test = function () {
	var f = this, b = f.B(), w = b.W(), g = G(arguments), v
	v = V(g.f, g.s)
	if (g.p) {
		w.dot(v)
	}
	return f.H().TestPoint(
			b.tf(),
			v.div()
	)
	//is a point within the fixture // very accurate
}
mJ.tg = function (x, y) {
	if (U(x)) {
		return this.GetTarget().m()
	}
	this.SetTarget(V(x, y).div())
	return this
}
// world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
w.Q = function () {
	var w = this, g = G(arguments), o
	o = g.O ? g.f :
			g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
					g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
							g.F_ ? _.x({fn: g.f, n: 0}, O(g.s) ? {x1: g.s.x, y1: g.s.y} : {
								x1: g.s,
								y1: g.t,
								x2: g[3],
								y2: g[4]
							}) :
									g.O_ ? {x1: g.f.x, y1: g.f.y, fn: g.s} :
									{x1: g.f, x2: g.s, fn: g.t}
	o.n = 0
	w.QueryAABB(
			function (f) {
				var res;
				o.n++
				res = o.fn(f, f.B(), o.n)
				if (res !== false) {
					return true
				}
			},
			b2d.AB(o.x1, o.y1, o.x2, o.y2)
	)
	return w
}
//but it makes a rectangle not square
w.rad = function (x, y, r, fn) {
	return this.Q({x1: x - r, y1: y - r, x2: x + r, y2: y + r, fn: fn})
}
w.q = function () {
	var w = this, g = G(arguments), o, fx
	o = g.S_ && N(g.s) ? {k: g.f, x: g.s, y: g.t, fn: g[3]} :
			g.S_ && O(g.s) ? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
					g.N_ ? {x: g.f, y: g.s, fn: g.t, k: g[3]} :
							g.A_ ? {x: g.f[0], y: g.f[1], fn: g.s, k: g.t} :
							{x: g.f.x, y: g.f.y, fn: g.s, k: g.t}
	w.QueryAABB(
			function (f) {
				if (f && f.of(o.k) && f.tP(o.x, o.y)) {
					fx = f;
					return
				}
				return true
			},
			b2d.AB(o.x, o.y)
	)
	if (fx) {
		if (F(o.fn)) {
			_.b(o.fn, fx)(fx);
			return w
		}
		return fx
	}
}
w.tE = function (fn) {
	var w = this
	T.t(function () {
		w.e(fn)
	})
	return this
}
w.e = w.each = function () {
	var w = this, g = G(arguments), o,
			bs = w.GetBodyList(),
			k,
			b, arr
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
w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
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
fD.K = function (k) {
	var fD = this
	if (U(clas)) {
		return fD.getClass()
	}
	fD.classes = fD.classes || []
	fD.classes.push(clas)
	return fD
}
fD.getClasses = fD.getClass = function () {
	var g = G(arguments), fD = this, classes
	fD._K = fD._K || []
	ks = fD.classes.join(' ')
	if (g.p) {
		ks += ' : ' + fD.body().getClasses()
	}
	return ks
}
_.eW = function (str, fn) {
	var _gf = str.trim().split(' ')
	_.e(_gf,
			function (str) {
				str = str.trim()
				// $l('str: '+ str)
				if (str) {
					fn(str.trim())
				}
			}
	)
}
b.K = function () {
	var b = this, g = G(arguments);
	this._K = this._K || []
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
f.K = function () {
	var f = this, g = G(arguments);
	this._K = this._K || []
	if (g.u) {
		return (this._K).join(' ')
	}
	if (g.O) {
		this.K(g.f.k);
		return this
	}
	_.eW(g.f, function (k) {
		if (!f.of(k)) {
			f._K.push(k)
		}
	})
	return this
}
_.ct = function (arr, item) {
	arr = arr || []
	if (S(item)) {
		item = item.trim()
	}
	return _.contains(arr, item)
}
b.of = function (k) {
	if (b2d.iF(k)) {
		k = k.B()
	}
	return !k || _.ct(this._K, k) || this == k
}
b.is = function (k) {
	return k && this.of(k)
}
f.of = function (k) {
	if (!this) {
		return false
	}
	if (!k) {
		return true
	}
	return this == k ||
			(S(k) && _.contains(this._K || [], k.trim()))
			||
			(this.B() && this.B().of(k))
}
f.is = function (k) {
	return k && this.of(k)
}
//if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
w.mJ = function () {
	var w = this, g = G(arguments), o, j,
			mJD = new b2d.Joints.b2MouseJointDef
	dR = 0
	mF = 50000000
	o = {
		a: w.GetGroundBody(),
		b: g.f, x: g.s, y: g.t,
		dR: N(g[3], dR),
		mF: N(g[4], mF),
		cl: g.N ? true : false
	}
	mJD.bodyA = o.a
	mJD.bodyB = o.b
	mJD.target = V(o.x, o.y, '-')
	mJD.dampingRatio = o.dR
	mJD.maxForce = o.mF
	mJD.collideConnected = o.cl
	return w.J(mJD)
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
ray = function () {
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
	RAY = function () {
		W().C('z')
		w.S(200, 200, 'f', 100);
		w.S(500, 500, 'l', 160, 60)
		rs = w.ray(0, 0, 800, 800)
		$.in(function () {
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
};
ray()
QUERY = function () {
	W().Y()
	w.S(200, 300, 'b', 100).$(function () {
		this.C('***')
	})
	w.S(200, 500, 'g', 100).K('g')
			.cir({x: 100, r: 80, c: 'r'})
			.$(function () {
				this.C('w')
			})
	w.e('g', function (b) {
		b.$$(function () {
			this.B().C('z')
			this.C('w')
		})
	})
	w.e$(function (o) {
		this.C('y')
		$l('mass: ' + this.B().mass().toFixed(3))
	})
	w.$(function (o) {
		w.ball({x: o.x, y: o.y, r: 8})
	})
	w.$$(function (o) {
		w.S(o.x, o.y, 'x', [[20, 10]])
	})
	w.S(600, 400, 'b', 100, 300);
	w.dot(600, 300)
	$.in(function () {
		w.q(600, 300, function (f) {
			f.C('r')
		})
	})
	w.D(1100, 500, 'o', 80).d(.1).$(function () {
		this.B().I(100, -2000)
	})
	w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(
			function () {
				this.kill()
			}
	)
}
CHEM = function () {
	W({
		w: 0//, g:50
	})
	w.rR(0, 3)
	w.rR(100, 3)
	w.rR(100, 3)
	w.rR(200, 3)
	w.rR(300, 3)
	w.rR(400, 3)
	w.Q(function (f) {
		f.B().kill()
	}, 550, 250, 650, 350)
	w.Q(function (f) {
		f.B().kill()
	}, 350, 50, 450, 150)
	w.Q(function (f) {
		f.B().kill()
	}, 850, 50, 950, 150)
	y = w.y(600, 300).K('y')
	$.ev(1, function () {
		w.cir(R(20, 400), 80, 12, 'r').K('r')
		w.rec(R(20, 900), 100, 24, 24, 'b').K('b')
	})
	w.cl('bul', function (f) {
		var b = f.B()
		this.B().kill()
		if (b != y) {
			b.kill()
		}
	})
	w.cl('r', 'b', function () {
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		alert('you win!')
	})
	y.cl('r', lose)
	y.cl('b', lose)
	function lose() {
		//w.pen('you lose')
		y.stat()
		w.e(function (b) {
			if (b != y) {
				b.kill()
			}
		})
		$.in(self)
	}
}
STACK = function () {
	W({m: 'ball', w: 0})
	w.S(500, 600, 'y', 1000, 20)
	b = w.D(500, 200, 'o', 40).K('ball')
	w.boxesStat([350, 260, 880, 30])
	w.D(310, 120, 't', 60, 60)
	w.D(320, 120, 't', 60, 60)
	w.D(340, 120, 't', 60, 60)
	w.D(350, 120, 't', 60, 60)
	w.D(370, 120, 't', 60, 60)
	w.D(380, 120, 't', 60, 60)
	w.D(550, 120, 't', 60, 60)
	w.D(570, 120, 't', 60, 60)
	w.D(580, 120, 't', 60, 60)
	w.S(1000, 400, 'x', 200, 200)
	w.S(1200, 200, 'x', 200, 200)
}
MJ = function () {
	W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
	w.D(100, 200, 'y', 150, 100).K('imp')
	w.D(500, 400, 'y', 50, 100).K('imp')
	w.D(300, 400, 'r', 50, 50);
	w.D(800, 400, 'r', 50, 50);
	w.D(1200, 400, 'r', 50, 50);
	w.D(1600, 400, 'b', 100, 100).K('m')
	w.e$('imp', function () {
		this.B().I(0, -50)
	})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
}
later = function () {
	$.touchstart = function (func) {
		$('body').on('touchstart', func)
		return this
	}
	$.touchend = function (func) {
		$('body').on('touchend', func)
		return this
	}
	/*
	 return U(a)? true
	 : S(a)? f.ofClass(a)
	 : (f==a || (g.N? b==a: false) )
	
	 }*/
	f.hasAllClasses = function (clas) {
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
	f.classCount = function () {
		if (!A(this.classes)) {
			return 0
		}
		return this.classes.length
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
	f.near = function (what) {
		var body = this.GetBody()
		//return (this.K()==what) || (body.K()==what)
		// if has sibling fixture that matches, return IT!
		return false
	}
	f.D = f.data = function (data) {
		if (U(data)) {
			return this.GetUserData()
		}
		this.SetUserData(data);
		return this
	}
	/*
	 b.D=b.data=function(d){var b=this
	 if(U(d)){return b.GetUserData()}
	 b.SetUserData(d); return b}
	 b.classCount=function(){var b=this
	 if(!A(b.classes)){return 0}
	 return b.classes.length
	 }
	
	
	 b.toggleClass=function(k){var b=this
	 if(U(k)||k==''){return false}
	 if(b.hasClass(k)){b.removeClass(k)}
	 else {b.addClass(k)}
	 return b}
	
	
	 b.removeClass=function(k){var b=this, ix; b.classes=b.classes||[]
	 if(S(k) && b.hasClass(k)){
	 ix = b.classes.indexOf(k)
	 b.classes[ix] = null
	 b.classes = _.compact(b.classes)}
	 return b}
	 b.not = b.notAny = function (k) {
	 //this is an AND: ALL MUST BE FALSE
	 var b=this, not = true
	 _.e(k, function(k){if(b.is(k)){not=false}})
	 return not
	 }
	
	
	 b.contains=function(k){var b=this
	 var fs=b.fixts(), contains=false
	 _.e(fs,function(f){
	 if(f.hasClass(k)){contains=true}})
	 return contains
	 }
	
	
	 b.hasAllClasses=function(k){
	 if(U(k)||k==''){return false}
	 var b=this, anyYes = null, anyNo = null
	 _.e(arguments, function(k){
	 if(b.hasClass(k)){anyYes=true}
	 else if(!b.hasClass(k)){anyNo=true}})
	 return (anyYes && !anyNo)
	 }
	 */
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
	TAG = function () {
		W({g: 0})
		w.pop('i like how the ball bounces')
		w.show(function () {
			return y.K()
		})
		y = w.ship(100, 100)
		_.t(10, function () {
			w.D(600, 300, 'b', 40).r(.8).lD(.1).K('ball')
		})
		w.with('ball', function (f2) {
			var vel  //$l('oth: ' + other.K() + ' - ' + other.B().K())
			var f = this
			if (f2.of('ship')) {
				w.e(function (b) {
					if (b.isStat() && b.of('ball')) {
						b.dyn(true)
						b.C('b')
					}
				})
			}
			if (f2.of('bul')) {
				f.C('r');
				f.B().stat()
			}
		})
		//ship, 10 balls,
	}
	/*
	 _.ct= function(arr, str){var g=G(arguments)
	 if(!arr||!str){return}
	 if(S(str) && !g.n){str=str.trim()}
	 return _.contains(_.tA(arr), str)}
	 _.eS=function(str,fn){
	 _.e(_.tA(str),function(str){
	 if(str=S(str)&&str.trim()){fn(str)}
	 })}
	
	 _.e=function(arr,fn){_.each(_.tA(arr),fn)}
	
	 _.tA=function(arr){
	 return S(arr)? arr.trim().split(' '):
	 O(arr)? _.toArray(arr):
	 [arr]
	 }
	
	
	
	 _.m=function(arr,fn){return _.map(_.tA(arr),fn)}
	
	
	
	 _.iU=function(s){if(S(s)){return  s$(s).isUpper()}}
	
	 b2d.k=function(fb,k){fb.ks= fb.ks||[]
	 if(U(k)){return fb.ks.join(' ')+'|'+  (b2d.iF(fb)?fb.B().K():'')}
	 if(O(k) && !A(k)){fb.K(k.k);return fb}
	 _.eS(k, function(k){if(!fb.of(k)){fb.ks.push(k)}})
	 return fb}
	
	
	 b2d.of=function(fb,k){var of;
	 if(U(k)){return 1}
	
	 _.e(k, function(k){
	 if(b2d.iF(fb)){
	 of=fb.B().of(k)}
	 if(!k||fb==k||_.ct(fb.ks, k)){of=1}
	 })
	
	 return of
	
	 }
	
	
	
	 f.K =function(k){return b2d.k(this,k)}
	
	 b.K =function(k){return b2d.k(this, k)}
	
	 f.of=function(k){return b2d.of(this,k)}
	 b.of=function(k){return b2d.of(this, k)}
	
	 */
	SLING = function () {
		W(50)
		tf = null
		b = w.D(100, 100, 'b', 100, 200)
		p = w.S(200, 200, 's', 100, 150).rot(20)
		p.rec('o', 50, 50, 50, 50, 20)
		f = p.f()
		h = f.H()
		hit = f.tP(p.transform(), V(200, 200)) // true
		hit2 = f.hit(200, 200, true)
		startpoint = {}
		slingshot = $h().a2(s)
		onMouseDown = function (e) {
			if (ball.hitTestPoint(e.x, e.y)) {
				mouseJoint = w.J(
						b2d.createMouseJointDef(
								w.ground, //?
								ball.body,
								e.x, e.y, 100000))
				startpoint.x = e.x
				startpoint.y = e.y
			}
		}
		onMouseMove = function (event) {
			if (mouseJoint != null) {
				mouseJoint.setTarget(event.x, event.y)
				slingshot.clear()
				slingshot.setLineStyle(5, 0xff0000, 1)
				slingshot.beginPath()
				slingshot.mt(self.startpoint.x, self.startpoint.y)
				slingshot.lt(event.x, event.y)
				slingshot.ep()
			}
		}
		onMouseUp = function (event) {
			if (mouseJoint != null) {
				w.dJ(mouseJoint)
				mouseJoint = null
				slingshot.clear()
				strength = 1
				xVect = ( startpoint.x - event.x) * strength
				yVect = ( startpoint.y - event.y) * strength
				ball.body.applyLinearImpulse(xVect, yVect, ball.getX(), ball.getY())
			}
		}
	}
}
fD.D = fD.data = function (data) {
	if (U(data)) {
		return this.userData
	}
	this.userData = data;
	return this
}
old = function () {
	jointDef = function () {
		jd = b2d.Joints.b2MouseJointDef.prototype
		jd.sT = function (a, b) {
			var jd = this//=j.tS=    j.tg=j.tgS=j.ts=
			j.target.Set(a, b)
			return jd
		}
		jd.cC = jd.clC = jd.clCn = jd.cc = function (a) {
			var jd = this
			j.collideConnected = a ? true : false
			return jd
		}
		jd.mF = jd.mf = function (a) {
			var jd = this
			j.maxForce = a;
			return jd
		}
		jd.A = function (a) {
			var jd = this
			j.bodyA = a
			return jd
		}
		jd.B = function (b) {
			var jd = this
			jd.bodyB = b
			return jd
		}
	};
	jointDef()
	w.mJ = function (o) {
		var w = this
		if (o.m == 0) {
			return w
		}
		o = o || {}
		$.M()
		cjs.tick(function () {
			if (w.mj) {
				w.mj.tg(_)
			}
		})
		$.oMU(function () {
			w.MJ()
		})
		$.oMD(function (x, y) {
			w.XY(x, y,
					function (f) {
						if (f.ofClass(o.m)) {
							w.mj = w.mJ(f.body(), _)
						}
					})
		})
		return w
	}
	w.eB = w.each = w.eachBody = function (l, uD) {
		var w = this,
				bs = w.GetBodyList(),
				k,
				b
		//can pass a cb to be run on EACH body
		//can also pass a uD to restrict cb to
		//run only on bodies with that uD
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
	w.$$x = function (fn) {
		var w = this
		w.UI().dblclick(function (e) {
			fn(e.pageX, e.pageY)
		})
		return w
	}
	w.mouseJAt = function (p, k) {
		var w = this, mj
		if (N(p)) {
			p = V(p, k)
		}
		w.XY(p.x, p.y, function (f) {
			mj = f.B().mouseJoint(p)
		})//, k
		return mj
	}
}
