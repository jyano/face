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
cl.g = cl.get
cl.s = function (a, b, c) {
	var cl = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ?
					true : false
		}
	}
	cl.set(a, b, c)
	return cl
}
cl.o = function (a, b) {
	if (U(b)) {
		return this.get(a)
	}
	this.set(a, b)
	return this
}
cl.A = cl.a = function () {
	var cl = this,
			g = G(arguments), ar
	this.add(g.A ? g.f : g);
	return this
}
cl.rm = cl.r = cl.remove
cl.cr = cl.create
cl.fe = cl.fetch
cl.att = cl.atr = cl.attributes
cl.b = cl.bind
cl.J = cl.tJ = cl.j = function () {
	return this.toJSON()
}
cl.lJ = cl.l = function () {
	$l(this.toJSON());
	return this
}
cl.ls2 = cl.l2 = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
cl.ls1 = cl.l1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
cl.fl = cl.filter
cl.wo = cl.without
cl.la = cl.last
cl.f = function () {
	return this.find.apply(this, arguments)
}
clEvents()
function clEvents() {
	cl.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }
	cl.tr = function (a, b) {
		this.trigger(a, b);
		return this
	}
	cl.oRm = function (a, b, c) {
		return this.on('remove', a, b, c)
	}   // "remove" (model, collection, options) — when a model is rcl from a collection.
	cl.oX = cl.oD = function (fn) {
		return this.on('destroy', fn)
	} // "destroy" (model, collection, options) — when a model is destroyed.
	cl.oR = cl.oRs = function (fn) {
		return this.on('reset', fn)
	}  // "reset" (collection, options) — when the collection's entire contents have been replaced.
	cl.oSo = function (a, b, c) {
		return this.o('sort', a, b, c)
	}    // "sort" (collection, options) — when the collection has been re-sorted.
	cl.oC = cl.oCh = function (n, fn) {
		if (U(fn)) {
			return this.on('change', n)
		}
		return this.on('change:' + n, fn)
	} // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
	cl.oQ = cl.Rq = function (mdCl, fn) {
		return this.on('request', fn)
	}      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
	cl.oS = cl.oSy = function (a, b, c) {
		return this.o('sync', a, b, c)
	} // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
	cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
		return this.o('error', a, b, c)
	} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
	cl.oIv = function (a, b, c) {
		return this.on('invalid', a, b, c)
	}  //"invalid" (model, error, options) — when a model's validation fails on the client.
	cl.o$ = cl.oAl = function (fn) {
		return this.on('all', fn)
	}   //passes event name as 1st ag
	cl.oA = function (fn) {
		fn = fn || function (m) {
			m.at = m.attributes
			m.s = function (a, b, c) {
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
			m.g = m.get
			m.j = m.toJSON
			m.o = m.on
			E$(m)
			a.A(m)
		}
		return this.on('add', fn)
	} // "add" (model, collection, options) — when a model is added to a collection.
}
vw.s = function (a, b) {
	this.model.set(a, b);
	return this
}
vw.g = vw.get = function (m) {
	if (this.model) {
		return this.model.get(m)
	}
	else if (this.collection && this.collection.get) {
		return this.collection.get(m)
	}
}
vw.o = function (a, b) {
	if (U(b)) {
		return this.get(a)
	}
	this.set(a, b)
	return this
}
vw.A = vw.add = function (ob) {
	var g = G(arguments), vw = this
	_.e(g.A ? g.f : g, function (q) {
		vw.$el.A(q)
	})
	var vw = this, q = vw.$el, g = G(arguments)
	//if (S(ob)) { ob = $.sp(vw.g(ob)) }
	//if (ob) {q.A(ob)}
	//if (U(ob) || g.p) {q.A()}
	return vw
}
vw.a2 = function (a) {
	if (this.$el) {
		this.$el.a2(a)
	}
	return this
}
vw.E = function () {
	this.$el.E();
	return this
}
vw.eM = function (fn) {
	_.e(this.model, fn);
	return this
}
vw.cl = vw.eCl = vw.e = function (fn) {
	var cl = (this.collection || this.cl)
	if (U(fn)) {
		return cl
	}
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.ECl = function (fn, cl) {
	this.E();
	if (cl) {
		_.e(cl, fn)
		return this
	}
	return this.eCl(fn)
}
vw.addVal = function (ob) {
	this.$el.A(this.g(ob))
	return this
}
vw.trg = function (ev) {
	$ev.trigger(ev, this.model);
	return this
}
vw.rEl = function () {
	return this.R().el
}
vw.renCl = function (Vw) {
	var vw = this
	return vw.cl(function (md) {
		vw.A(Bb.el(Vw, md))
	})
}
vw.eAlt = function (a, b) {
	var cl = this.collection || this.cl;
	cl.each(a, b)
	return this
}
vw.H = vw.h = function (a) {
	if (U(a)) {
		return this.$el.h()
	}
	this.$el.h(a);
	return this
}
vw.J = vw.tJ = vw.j = function (fn) {
	var vw = this, j
	if (this.collection) {
		j = this.collection.toJSON()
		if (F(fn)) {
			_.e(j, fn);
			return vw
		}
		return j
	}
	if (this.model) {
		return this.model.toJSON()
	}
}
vw.oC = function () {
	if (!this.model) {
		return false
	}
	this.model.oC.apply(this.model, arguments)
	return this
}
vw.ds = function () {
	if (this.model) {
		this.model.destroy()
	}
}
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
Bb.C.ob = function (ob) {
	ob = ob || {}
	//var g=G(arguments), o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
	if (!F(ob.initialize) && F(ob.i)) {
		ob.initialize = ob.i
	}
	if (!O(ob.collection) && (O(ob.cl) || O(ob.c))) {
		ob.collection = ob.cl || ob.c
	}
	if (!O(ob.model) && (O(ob.md) || O(ob.m))) {
		ob.model = ob.md || ob.m
	}
	//ob.model= ob.model || ob.md || ob.m
	//if(ob.m){ob.model= ob.m}
	ob.defaults = ob.defaults || ob.df || ob.d
	ob.id = D(ob.id) ? ob.id : ob.x
	ob.idAttribute = ob.idAttribute || ob._id
	ob.events = ob.events || ob.ev || ob.e
	ob.validate = ob.validate || ob.v
	function more() {
		if (ob.fn) {
			ob.i = ob.fn
		}
		ob.initialize = ob.initialize || ob.i
		ob._i = ob.initialize
		ob.id = D(ob.id) ? ob.id : ob.x
		ob.className = ob.className || ob.k
		ob.tagName = ob.tagName || ob.tn || ob.t
		ob.defaults = ob.defaults || ob.df || ob.d
		ob.events = ob.events || ob.ev || ob.e
		ob.render = ob.render || ob.rr || ob.r
		ob.tagName = ob.tagName || ob.tn || ob.t
		ob.collection = ob.collection || ob.cl || ob.c
		// ob.render= ob.render || ob.rr || ob.r
		ob.render = ob.render || ob.rn
		C$Alt = function (a) {
			var b, c
			// $.ext(Bb.Collection)
			//if(U(a)){var c=new Bb.Collection; return sCl(c)}
			a = O(a) ? a : {}
			if (a.m) {
				a.model = a.m
			}
			c = Bb.C.x(a)
			return function (o) {
				o = O(o) ? o : {}
				o = O(o) ? o : {}
				//if(o.m){o.model= o.m}
				b = new c(o)
				o.o = o.on
				E$(o)
				//if(o.m){o.model= o.m}
				b = new c(o)
				return b
				bbM = toMdOb = function (a) {
					a = O(a) ? a : {}
					if (a.i) {
						a.initialize = _v(a.i)
					}
					if (a.I) {
						a.initialize = _v(a.I)
					}
					if (a.d) {
						a.defaults = a.d
					}
					if (a.D) {
						a.defaults = a.D
					}
					if (a.v) {
						a.validate = a.v
					}
					if (a.V) {
						a.validate = a.V
					}
					a.idAttribute = '_id'
					var m = Bb.Model.extend(a)
					sMd(m)
					return a // ??
					return function (a) {
						var o = new m(a)
						sMd(o)
						return o
					}
				}
			}
		} //C$ =
	}
	
	return ob
} //   __C =
Bb.V.ob = function (ob) {
	ob = ob || {}
	if (ob.q) {
		ob.el = ob.q
	}
	if (S(ob.R)) {
		var str = ob.R
		ob.R = function () {
			return this.addVal(str)
		}
	}
	ob.id = D(ob.id) ? ob.id :
	ob.x || ob._ || ob['#']
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
	ob.defaults = ob.defaults || ob.df || ob.d
	//ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
	ob.E = ob.E || {}
	if (F(ob.cl)) {
		ob.E.click = ob.cl
	}
	if (S(ob.$)) {
		var str = ob.$
		ob.$ = function () {
			return this.trg(str)
		}
	}
	if (F(ob.$)) {
		ob.E.click = ob.$
	}
	if (F(ob.click)) {
		ob.E.click = ob.click
	}
	ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
	//ob.el = ob.el || ob.q
	//if (ob.q) {ob.el = q}
	if (!F(ob.I) && ob.I) {
		ob.I = function () {
			this.R()
		}
	}
	if (F(ob.I)) {
		ob.initialize = ob.I
	}
	return ob
} // = V__ = _vw
M$ = Bb.M.x = function (ob) {
	return Bb.M._x(Bb.M.ob(ob))
}
C$ = Bb.C.x = function (ob) {
	return Bb.C._x(Bb.C.ob(ob))
}
V$ = Bb.V.x = function (ob) {
	return Bb.V._x(Bb.V.ob(ob))
}
$c = $cl = function (ob, ob2) {
	var Cl = Bb.C.x(ob)
	return new C$(Bb.C.ob(ob2))
}
$m = function (ob, ob2) {
	var Md = M$(ob)
	return new Md(Bb.M.ob(ob2))
}
$v = function (ob, ob2) {
	var Vw = V$(ob)
	return new Vw(Bb.V.ob(ob2))
}
_m = $$m = function () {
	var Md = M$()
	return new Md(Bb.M.ob(ob))
}
_c = $$c = function () {
	var Cl = C$()
	return new Cl(Bb.C.ob(ob))
}
_v = $$v = function () {
	var Vw = V$()
	return new Vw(Bb.V.ob(ob))
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
_V = $$V = function (ob, ob2) {
	var Vw = V$(ob)
	var fn = function (ob, q) {
		var vw = new Vw(Bb.V.ob(ob))
		vw.md = vw.model;
		vw.cl = vw.collection
		vw.q = vw.$el
		if (q) {
			alert('see $$V');
			vw.a2(q)
		}
		return vw
	}
	return ob2 ? fn(ob) : fn
}
_C = _Cl = $$C = function (ob) {
	var Cl = C$(ob)
	return function (ob) {
		ob = ob || {}
		var cl
		ob.collection = ob.collection || ob.cl || ob.c
		ob.model = ob.model || ob.md || ob.m
		cl = new Cl(ob) //if(q){cl.a2(q)}
		cl.q = cl.$el
		cl.a2 = function (a) {
			return cl.q.a2(a)
		}
		cl.g = function (a) {
			if (a) {
				return cl.model.get(a)
			}
		}
		//cl.A=function(ob){
		//
		//var g=G(arguments)
		//if(S(ob)){ob = cl.g(ob)}
		//if(ob){this.$el.A(ob)}
		//if(U(ob) || g.p){ this.$el.A() }
		//return this.$el
		//}
		////_.b(ob._i,cl) (op)
		//E$(cl)
		// $.ext(bb.Collection)
		return cl
	}
}
M_ = function (ob) {
	return _M()(ob)
}
C_ = Cl_ = function (ob) {
	return _C()(ob)
}
V_ = function (ob) {
	return _V()(ob)
}
$M = function (ob, ob2) {
	return _M(ob)(ob2)
}
$V = function (ob, ob2) {
	return _V(ob)(ob2)
}
$C = $Cl = function (ob, ob2) {
	return _C(ob)(ob2)
}
$.fn.C$ = function () {
	return this.C($r())
}
$.fn.$V = function (ob) {
	ob = ob || {};
	ob.el = this;
	return $V(ob)
}//$.fn.V
md.V = function (Vw, ob) {
	ob = ob || {}
	ob.model
	ob.m = ob.md = ob.m = this
	return Vw(ob)
}
md._V = function (ob) {
	return this.V(_V(ob))
}
vw.C$ = function (s) {
	this.$el.C$(s)
	return this
}
V$Ul = function (ob) {
	ob = F(ob) ? {R: ob} : ob
	return V$(_.x({tagName: 'ul'}, ob))
}
V$Li = function (ob) {
	return V$(_.x({tagName: 'li'}, ob))
}
V$Li$ = function (ob) {
	return V$(_.x({
		I: 1,
		tagName: 'li'
	}, ob))
}
$RenClFn = function (Vw) {
	return function () {
		return this.renCl(Vw)
	}
}
Cl$Ul = function (cl) {
	return new Ul_({collection: cl})
}
M$D = function (md) {
	return new Div_({model: md})
}
C$.f = function (docs, key, val) {
	return docs.find(function (doc) {
		return doc.g(key) == val
	})
	//docs.find(function (doc) {return doc.g('title') == title}) -->  C$.f(docs, 'title', title)
}
Cl$Ul$Li = $LIs = function (docs, $q) {
	$q = $q || $.bd()
	$q.E(Cl$Ul(docs).rEl())
	//$.E(Cl$Ul(docs).rEl()) --> Cl$Ul$Li($.bd(), docs)
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
vw.h1 = function (val) {
	var h1 = this.model.h1(val)
	this.$el.A(h1)
	return h1
}
vw.d = function (val) {
	return this.model.d(val).a2(this.$el)
}
Bb.tr = Bb.trV = Bb.trVw = function (ob) {
	ob = _.x(ob || {}, {tagName: 'tr'})
	var view = Bb.V.x(ob)
	return view
}
Bb.ul = $.uV = $.ulV = function (ob) {
	ob = ob || {};
	ob.tagName = 'ul';
	return $V(ob)
	// make a bb view with t:ul
}
bbMock = function () {
	return docs = _.m($mk.docs, function (doc) {
		return new Bb.Model(doc)
	})
}
Bb.setId = function () {
	Bb.M.prototype.idAttribute = '_id'//md.idAttribute = '_id'
}
$ev = _.x({}, Bb.E)
$on = function (ev, fn) {
	$ev.on(ev, fn)
}
Bb.R = Bb.Router
Bb.R.x = Bb.R.extend
Bb.H =   Bb.History
Bb.h =   Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
function ach$$$() {
	V$i = function (ob) {
		if (F(ob)) {
			ob = {R: ob}
		}
		ob.I = 1
		return V$(ob)
	}
	$FirstVw = V$i(function () {
		var $$lb = $.lb('My 1st View')
		var $$a = $.a('Go to 2nd View', 'sec')
		this.A(ll.oh($$lb, ll, $$a))
	})
	$SecVw = V$i({
		R: ll.TpFn(ll($.lb('My 2nd View'),
				$.br(), $.a().hr('first').A('Go to 1st View')))
	})
}
// book, movement: pleasurable js (or javascript for pleasure)
Blog = Bb.M.x({
	idAttribute: "_id",
	D: {user: '', title: '', url: ''}
})
Blogs = Bb.C.x({
	model: Blog,
	url: '/api/blogs'
})
CollView = Bb.V.x({
	I: function () {
		var view = this
		view.model.on('all', function () {
			_.in(.03, function () {
				view.R()
			})
		})
		/*
		 //this.collection.on('add', this.R, this)
		 //this.collection.on('remove', this.R, this)
		 this.collection.fetch({
		 success: function (docs) {
		 if (docs) {
		 $l('there are doc')
		 $l(docs)
		 _.each(docs.toJSON(), function (item) {
		 $l('got blog with _id: ' + item._id)
		 })
		 }
		 },
		 error: function () {
		 $l('failed to get blogs!')
		 }
		 })*/
	},
	R: function () {
		var view = this.H('')
		view.model.each(function (model) {
			view.A((new view.subView({model: model})).R().el)
		})
		return view
	}
})
GenView = Bb.V.x({
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(view.G(view.J()), function (el) {
			view.A(el)
		})
		return view
	}
})

$.td.kids = function () {
	var g = G(arguments)
	var kids = g.A ? g.f : g
	return _.m(kids, function (o) {
		var td = $.td()
		_.e(A(o) ? o : [o], function (ch) {
			td.A(ch)
		})
		return td
	})
}

tdFn = function (fn) {
	return function (ob) {
		var kids = fn(ob)
		return $.td.kids.apply(null, kids)
	}
}
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
GenView.tr = Bb.V.x({
	tagName: 'tr',
	G: function (ob) {
		return $.tr().A(J.s(ob)).C('b', 'y')
	},
	R: function () {
		var view = this
		_.e(tdFn((view.row || view.tr || view.G))(view.J()),
				function (el) {
					view.A(el)
				})
		return view
	}
})
function bbRtr() {//http://www.codeproject.com/Articles/803073/BackBone-Tutorial-Part-Understanding-Backbone-js-R
	R$R = $rR = function (fn) {
		return R$({R: fn})
	}
	anchorClickBlocker = function () {
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.bd().on('click', 'a[href^="/"]', function (ev) {
			$l('wow')
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
		$('body').on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			r.n($(this).attr('href'))
		})
	}
	knockAncs = function (ev) {
		ev.preventDefault()
		rtr.n($(this).attr('href',
				{trigger: true}))
	}
	$TrRtrFn = notUsed = function (rtr, fn) {
		//rtr =	$Trg$( new( R$R( ob ) ), 'contents')
		return function (md) {
			$Trg(rtr, fn(md))
		}
	}
	$Rt = function (o, root) {
		if (!o['routes'] && !o['rts'] && !o['rt'] && !o['R']) {
			o = {routes: o}
		}
		return $rt(Bb.R.x(o), root)
	}
	rtr = Bb.R.prototype
	$trg = function () {
		$ev.trigger.apply($ev, arguments)
	}
//var vw=this;return vw.cl(function (md) {vw.A(Bb.el( Li_, md ))})
//$:  'doc:selected', //R: function () {return this.addVal('title')},
	V$R = function (fn) {
		return V$({R: fn})
	}
	Bb.Co = Bb.Controller = function (Vw, md) {
		return new Vw({model: md})
	}
	Bb.el = function (Vw, md) {
		return new Vw({model: md}).el
	}
	$start = $route = function () {
		_$start = function () {
			Bb.h.s()
		}
		Bb.h.s({pushState: true})
		return new Rtr
	}
	sRtr = function (rtr) {
		rtr.n = function (url, op) {
			this.navigate(url, op);
			return this
		}
		rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
			return this.n(url, {trigger: true})
		}
		rtr.rt = rtr.A = rtr.oR = function (rt, fn) {
			var rtr = this
			if (O(rt)) {
				//_.e(rt, function (v, k) {rtr.on('route:' +k, v)})
			}
			else {
				rtr.on('route:' + rt, fn)
			}
			return rtr
		}
		rtr.rp = function (url, op) {
			return this._n(url, _.x({replace: true},
					G(arguments).n ? {trigger: true} : {}))
		}//navigate: replace
// history:
		rtr.Fn = function () {
			return function (url) {
				this.N(url)
			}
		}
		return rtr
	}
	$R = $Rtr = R$ = function (ob) {
		ob = ob || {}
		if (O(ob.R)) {
			ob.routes = ob.R
		}
		ob.routes = ob.R ? ob.R : (ob.routes || ob.rt || ob.r || {}) //if (ob.i) {ob.initialize = ob.i}
		//if (ob.$) {ob.initialize = function () {$start(); if (F(ob.$)) {ob.$()}}}
		//if (ob.x) {ob.index = ob.x}
		//if (ob.h) {ob.home = ob.h}
		//ob.routes[''] = ob.routes[''] || 'index'
		//ob.routes = _.x({'': '_'}, ob.routes)
		//ob.routes['*other'] = 'd'
		//ob = _.x({
		//_: function () {$l('INDEX ( _ ) ')},
		//d: function (other) {$l('DEFAULT(d): "' + other + '"')}
		//}, ob)
		//return function (a, b, c, d) {return new Rt(a, b, c, d)}
		//metaClass.. no need for 'new' //= $$R
		var rtr = Bb.R.x(ob)
		return rtr
		//rt._ = _$start
		//rt.$ = $start
		// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 
// BEST VIDEO (WATCH ALL, KNOW ALL) https://www.youtube.com/watch?v=cIq6Z_Vv4nY
// RTR ALL U NEED TO KNOW!!!   https://www.youtube.com/watch?v=cIq6Z_Vv4nY
	}
	$RoApp = function (name, CALLBACK) {
		window[name] = function () {
			name = name.toUpperCase()
			$.d('B').W('auto').H(8).A('this is RoApp: ').fS(75).col('r')
			$.sp(name).fS(100).C('o', 'x')
			$.hr()
			d = $.d().id('ct').fS(40)
			CALLBACK()
			Bb.h.s({pushState: true, root: "/box/" + name + "/"})
		}
	}
	$rt = function (Rtr, root, ob) {
		if (Rtr) {
			rtr = rt(Rtr, ob)
		}
		Bb.h.s({
			root: root,
			pushState: true
		})
		return rtr
		function rt(Rtr, ob) {
			return sRtr(new Rtr(ob))
		}
	}
}
$Df = function (ob) {
	return $M({df: ob})
}
__ = 'fadsfasasdf'
Ap = {M: {}, C: {}, V: {}, T: {}}