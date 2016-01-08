$l('front/bone sayd welcome to FRONT !')
// !!! https://www.youtube.com/watch?v=T4iPnh-qago interacrtive directory tut
Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.M = Bb.Model;
md = Bb.M.prototype;
Bb.M._x = Bb.M.x = Bb.M.e = Bb.M.extend
Bb.C = Bb.Collection
cl = Bb.Collection.prototype
Bb.C._x = Bb.C.x = Bb.C.extend
Bb.V = Bb.View
vw = Bb.V.prototype
Bb.V._x = Bb.V.x = Bb.V.e = Bb.V.extend;
Bb.E = Bb.Ev = Bb.Events;
Eve = function () {
	var e = _({}).extend(Bb.Events)
	e.o = e.bind
	e.e = e.trigger
	return e
}
Bb.E.x = Bb.E.extend
Bb.E.b = Bb.E.bind;
Bb.E.tr = Bb.E.trg = Bb.E.trigger
Bb.x = Bb.e = function (ob) {
	ob = ob || {}
	var Ev = Bb.E.extend(ob)
	return function (a, b, c, d) {
		return new Ev(a, b, c, d)
	}
}
Bb.sEv = function (md) {
	md.b = md.bind
	md.O = md.o$ = md.oAl = function (fn) {
		return this.on('all', fn)
	}//passes event name as 1st ag
	md.oZ = md.oE = md.oEr = function (a, b, c) {
		return this.on('error', a, b, c)
	} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
	md.oA = function (fn) {
		return this.on('add', fn || function (m) {
			m.at = m.attributes
			$l('E$???????????? (in md.oA')//E$(m) // a.A(m)
		})
	}//when a md is "added" to cl (model, collection, options)
	md.oC = md.oCh = function (n, fn) {
		var g = G(arguments), o
		o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
		// "change" (model, options)    "change:[attribute]" (model, value, options)
		return g.at ?
				this.on('change:' + o.at, o.fn) :
				this.on('change', o.fn)
	}//=md.$
	md.oRm = function (a, b, c) {
		return this.on('remove', a, b, c)
	}// "remove" (md, cl, ops)  — when md rmd from a collection.//=md.oH=md.o_
	md.oR = md.oRt = function (n, f) {
		var o = this
		//"route:[name]" (params)
		// — Fired by the router when a specific route is matched.
		// "route" (route, params)
		// — Fired by the router when any route has been matched.
		//"route" (router, route, params)
		// — Fired by history when any route has been matched.
		if (U(f)) {
			return o.on('route', n)
		}
		return o.on('route:' + n, f)
	}
	md.oI = md.oIv = function (a, b, c) {
		//"invalid" (model, error, options)
		// — when a model's validation fails on the client.
		return this.on('invalid', a, b, c)
	}
	md.oSo = function (a, b, c) {
		// "sort" (collection, options) — when the collection has been re-sorted.
		return this.on('sort', a, b, c)
	}
	md.oD = md.oDs = function (a, b, c) {
		// "destroy" (model, collection, options)
		// — when a model is destroyed.
		return this.on('destroy', a, b, c)
	}//=md.oX
	md.oS = md.oSy = function (a, b, c) {
		// "sync" (model_or_collection, resp, options)
		// — when a model or collection has been successfully synced with the server.
		return this.on('sync', a, b, c)
	}
	md.oQ = md.oRq = function (a, b, c) {
		return this.on('request', a, b, c)
	}// "request" (model_or_collection, xhr, options)
// — when a model or collection has started a request to the server.
	md.oRs = function (fn, a, b, c) {
		// "reset" (collection, options)
		// — when the collection's entire contents have been replaced.
		return this.on('reset', fn, a, b, c)
	}
	md.tr = function (a, b) {
		this.trigger(a, b);
		return this
	}
	return md
};
Bb.sEv(cl)
Bb.sEv(md)
Bb.sEv(vw)
Bb.eParse = function (e) {
	e = e || {}
	_.e(e, function (v, k) {
		if (k == '$') {
			e['click'] = v
		}
		if (k == '$$') {
			e['dblclick'] = v
		}
	})
	return e
}
Bb.R = Bb.Router
Bb.setId = function () {
	Bb.M.prototype.idAttribute = '_id'//md.idAttribute = '_id'
}
Bb.R = Bb.Router
Bb.R.x = Bb.R.extend
Bb.M.ob = function (ob) {
	ob = ob || {} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
	ob.initialize = ob.initialize || ob.i || function () {
	}
	function init() {
		if (ob.fn) {
			ob.i = o.fn
		}
		ob._i = ob.initialize
		if (!F(ob.initialize) && F(ob.i)) {
			ob.initialize = ob.i
		}
		ob.initializeX = function (op) {
			this.q = this.$el
			this.a2 = function (a) {
				return this.q.a2(a)
			}
			//$l('gen init..')
			this.g = function (a) {
				if (a) {
					return this.model.get(a)
				}
			}
			this.A = function (ob) {
				var g = G(arguments),
						q = this.q
				if (S(ob)) {
					ob = this.g(ob)
				}
				if (ob) {
					q.A(ob)
				}
				if (U(ob) || g.p) {
					q.A()
				}
				return q
			}
			_.b(ob._i, this)(op)
		}
	}
	
	ob.className = ob.className || ob.k
	ob.defaults = ob.defaults || ob.df || ob.d
	ob.events = ob.events || ob.ev || ob.e
	ob.id = D(ob.id) ? ob.id : ob.x
	ob.idAttribute = ob.idAttribute || ob._id
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.render = ob.render || ob.rr || ob.rn || ob.r
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.validate = ob.validate || ob.v
	return ob
}
M$ = Bb.M.x = function (ob) {
	return Bb.M._x(Bb.M.ob(ob))
}
$m = function (ob, ob2) {
	var Md = M$(ob)
	return new Md(Bb.M.ob(ob2))
}
_m = $$m = function () {
	var Md = M$()
	return new Md(Bb.M.ob(ob))
}
M_ = function (ob) {
	return _M()(ob)
}
$M = function (ob, ob2) {
	return _M(ob)(ob2)
}
_M = $$M = function (ob) {
	var g = G(arguments)
	var Md = M$(ob)
	var fn = function (ob, q) {
		var md = new Md(ob || {})
		if (q) {
			md.a2(q)
		}
		return md
	}
	fn.M = Md // = fn.md = fn.Md
	fn.C = function (ob) {
		return _C(_.x({model: Md}, ob || {}))
	}
	return fn
}
M$D = function (md) {
	return new Div_({model: md})
}
md.h1 = function (val) {
	var h1 = $.h1(this.get(val))
	return h1
}
md.sp = function (val) {
	return $.sp().A(this.get(val))
}
md.d = function (val) {
	return $.d().A(this.get(val))
}
md.g = md.get;
md.s = function (a, b, c) {
	var md = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	md.set(a, b, c)
	return md
}
md.o = function (a, b) {
	if (U(b)) {
		return this.get(a)
	}
	this.set(a, b)
	return this
}
md.sv = md.S = md.save
md.at = function () {
	return this.attributes
}
md.hC = function (at) {
	var md = this, g = G(arguments), o
	o = g.F ? {fn: g.f} : F(g.s) ?
	{at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.a2 = function (a) {
	if (!this.q) {
		return this
	}
	return this.q.a2(a)
}
md.J = md.j = md.tJ = function () {
	return this.toJSON()
}
md.tS = md.sJ = md.jS = function () {
	return _.jS(this.J())
}
md.$l = md.lJ = function () {
	return $l(this.tS())
}
md.l = function () {
	$l(JSON.stringify(this.toJSON()))
	return this
}
md.ls1 = md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
md.ls2 = md.l2 = md.lT = md.lTo = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
md.at = md.attributes
md._s = function (a, b, c) {
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	return m.set(a, b, c)
}
BB15 = XCHANGECOL = PROMPTCOLOR = function () {
	z()
	d = $.dA(400, 400, 300, 200)
	Md = $$M({
		promptColor: function () {
			this.s({
				co: prompt('color:')
			})
		}
	})
	sb = Md()
	sb.on('change:co', function (mod, col, ops) {
		$l('new color!: ' + col);
		d.C(col)
	})
	sb.s({co: 'g'})
	_.in(2, function () {
		sb.promptColor()
	})
}
BB18 = XDEFAULT = function () {
	Md = _M({defaults: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		R: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		I: function () {
			this.$el.A().C('r').col('b').fS(149);
			this.R()
		}
	})
	md = Md()
	vw = Vw({m: md})
}
BB19 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
BB9 = VD1 = BB7 = BVD = MVD = function () {
	VD2 = XBACKVALL = function () {
		$l('backvall')
		Md = $$M({
			defaults: {lame: true},
			validate: function (at) {
				$l('in validate')
				_at = at
				if (!at) {
					return false
				}
				if (at.n == 'rigo') {
					return "name can't be rigo!"
				}
			},
			i: function () {
				var t = this
				t.on('error', function (m, e) {
					alert(3);
					$l(e)
				})
				t.on('change:n', function (m, e) {
					alert(3);
					$l(e)
				})
			}
		})
		md = Md({n: "migo", a: 7})
		_.in(3, function () {
			$.C('r')
			md.oIv(function (m, er) {
				$Ms('...');
				$Ms('er: ' + er);
				$Ms('...')
			})
			md.s({n: 'rigo'}, {validate: true})
		})
	}
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			this.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			this.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(1, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
$Df = function (ob) {
	return $M({df: ob})
}