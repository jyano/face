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