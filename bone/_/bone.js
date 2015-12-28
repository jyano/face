BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.x = Bb.e = function (ob) {
	ob = ob || {}
	var Ev = Bb.E.extend(ob)
	return function (a, b, c, d) {
		return new Ev(a, b, c, d)
	}
}
$L('events', 'models', 'router', 'history', 'mod',
 'rtr', 'views', 'vew', 'collec', 'col')
function events() {
	Bb.E = Bb.Ev = Bb.Events;
	Bb.E.x = Bb.E.extend
	Bb.E.b = Bb.E.bind;
	Bb.E.tr = Bb.E.trg = Bb.E.trigger
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
	Eve = function () {
		var e = _({}).extend(Backbone.Events)
		e.o = e.bind
		e.e = e.trigger
		return e
	}
}
function models() {
	Bb.M = Bb.Model;
	Bb.M.x = Bb.M.extend
	md = Bb.Model.prototype;
	Bb.sEv(md)
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
	md.jS = md.tS = function () {
		return _.jS(this.J())
	}
	md.j = md.J = md.tJ = md.toJSON
	md.$l = md.lJ = function () {
		return $l(this.jS())
	}
	md.l = function () {
		$l(JSON.stringify(this.toJSON()))
		return this
	}
	md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
		return this.listenToOnce(a, b, c, d)
	}
	md.l2 = md.lT = md.lTo = function (a, b, c, d) {
		return this.listenTo(a, b, c, d)
	}
	md.j = function () {
		return this.toJSON()
	}
	md.idAttribute = '_id'
	M$ = function (ob) {
		return Bb.M.x(ob || {})
	}
	__M = function (ob) {
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
		return Bb.M.x(ob || {})
	}
	_M = function (ob, a, b, c) {
		ob = ob || {}
		var g = G(arguments)
		var Md = __M(ob, a, b, c)
		var fn = function (ob, q) {
			var md = new Md(ob || {})
			if (q) {
				md.a2(q)
			}
			return md
		}
		fn.M = fn.md = fn.Md = Md
		fn.C = function (ob) {
			return _C(
					_.x({model: Md}, ob || {})
			)
		}
		return fn
	}
	$M = function (op, a, b, c) {
		//if (U(op)) {return _$M()}
		return _M(op, a, b, c)()
	}
	M_ = $m = function (ob) {
		var m = new Bb.Model(ob);
		return m
	}
	toMdOb = function (a) {
		alert('toMdOb')
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
		return a
	}
	sMd = function (m) {
		alert('sMd')
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
		Bb.sEv(m)
		return m
	}
	bbM = function (a) {
		alert('bbM')
		a = ob(a)
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
		a.idAttribute = "_id"
		var m = Backbone.Model.extend(a)
		sMd(m)
		return function (a) {
			var o = new m(a)
			sMd(o)
			return o
		}
	}
}
function collec() {
	C$ = function (ob) {
		return Bb.C.x(ob || {})
	}
	__C = function (ob) {
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
		}
		
		return ob
	}
	_C = function (ob) {
		var Cl = Bb.C.x(__C(ob))
		return function (ob, b, c, d) {
			ob = ob || {}
			var cl
			ob.collection = ob.collection || ob.cl || ob.c
			ob.model = ob.model || ob.md || ob.m
			cl = new Cl(ob, b, c, d) //if(q){cl.a2(q)}
			cl.q = cl.$el
			cl.a2 = function (a) {
				return cl.q.a2(a)
			}
			cl.g = function (a) {
				if (a) {
					return cl.model.get(a)
				}
			}
			/*
			 cl.A=function(ob){
			
			 var g=G(arguments)
			 if(S(ob)){ob = cl.g(ob)}
			 if(ob){this.$el.A(ob)}
			 if(U(ob) || g.p){ this.$el.A() }
			 return this.$el
			 }
			 //_.b(ob._i,cl) (op)
			 */
			//E$(cl)
			// $.ext(bb.Collection)
			return cl
		}
	} // = $$C
	$C = $Cl = function (ob, a, b, c) {
		return _C(ob, a, b, c)()
	}
	C_ = function (ob) {
		return _C()(ob)
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
				//if(o.m){o.model= o.m}
				b = new c(o)
				return b
			}
		}
		C$Alpha = function (a) {
			var b, c
// $.ext(Bb.Collection)
			//if(U(a)){var c=new Backbone.Collection; return sCl(c)}
			a = O(a) ? a : {}
			if (a.m) {
				a.model = a.m
			}
			c = Backbone.Collection.extend(a)
			return function (o) {
				o = O(o) ? o : {}
				//if(o.m){o.model= o.m}
				b = new c(o)
				o.o = o.on
				E$(o)
				return b
			}
		}
	} //C$ =
	$c = $cl = function (ob) {
		var m = new Bb.Collection(ob);
		return m
	}
	cl = Bb.Collection.prototype
	Bb.C = Bb.Collection;
	Bb.C.x = Bb.C.extend;
	Bb.sEv(cl)
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
	cl.tJ = cl.j = cl.toJSON
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
		cl.j = function () {
			return this.toJSON()
		}
	}
}
function router() {
	R$ = function (ob) {
		return Bb.R.x(ob || {})
	}
	_R = function (ob) {//metaClass
		ob = ob || {}
		if (ob.i) {
			ob.initialize = ob.i
		}
		if (ob.$) {
			ob.initialize = function () {
				Bb.h.start({pushState: true})
				if (F(ob.$)) {
					ob.$()
				}
			}
		}
		if (ob.x) {
			ob.index = ob.x
		}
		if (ob.h) {
			ob.home = ob.h
		}
		ob.routes = ob.R ? ob.R : ob.routes || ob.rt || ob.r || {}
		ob.routes[''] = ob.routes[''] || 'index'
		ob.routes = _.x({'': '_'}, ob.routes)
		ob.routes['*other'] = 'd'
		ob = _.x({
			_: function () {
				$l('INDEX ( _ ) ')
			},
			d: function (other) {
				$l('DEFAULT(d): "' + other + '"')
			}
		}, ob)
		return R$(ob)
		//return function (a, b, c, d) {return new Rt(a, b, c, d)}
	} //metaClass.. no need for 'new' //= $$R
	$R = function (ob) {
		var Rt = _R(ob)
		var rt = new Rt()
		rt._ = function () {
			Bb.history.start()
		}
		rt.$ = function () {
			Bb.history.start({pushState: true})
		}
		return rt
	}
	rtr = ro = rt = Bb.Router.prototype;
	Bb.R = Bb.Router;
	Bb.R.x = Bb.R.extend
	rtr.n = function (url, op) {
		this.navigate(url, op);
		return this
	}
	rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
		return this.n(url, {trigger: true})
	}
	rtr.rt = function (rt, fn) {
		var rtr = this
		if (O(rt)) {
			_.e(rt, function (v, k) {
				rtr.rt(k, v)
			})
		}
		else {
			this.on('route:' + rt, fn)
		}
		return this
	}  // rtr.A = ro.oR =
	rtr.rp = function (url, op) {
		return this._n(url, _.x({replace: true},
				G(arguments).n ? {trigger: true} : {}))
	}//navigate: replace
// history:
	Bb.h = Bb.history
	Bb.h.tr = Bb.h.trigger
	Bb.h.s = Bb.h.start
	Bb.H = Bb.History
}
function views() {
	V$ = function (ob) {
		return Bb.V.x(ob || {})
	}
	V__ = _vw = function (ob) {
		ob = ob || {}
		if (ob.q) {
			ob.el = q
		}
		ob.id = D(ob.id) ? ob.id :
		ob.x || ob._ || ob['#']
		ob.model = ob.model || ob.md || ob.m
		ob.collection = ob.collection || ob.cl || ob.c
		ob.tagName = ob.tagName || ob.tn || ob.t
		ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
		ob.defaults = ob.defaults || ob.df || ob.d
		//ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
		ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
		//ob.el = ob.el || ob.q
		//if (ob.q) {ob.el = q}
		if (F(ob.i)) {
			ob.initialize = ob.i
		}
		return ob
	}
	__V = function (ob) {
		return V$(V__(ob))
	}
	_V = function (ob, ob2) {
		var Vw = __V(ob)
		V__(ob2)
		var fn = function (ob, q) {
			var vw = new Vw(ob);
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
	$V = function (ob, a, b, c) {
		return _V(ob, a, b, c)()
	}
	V_ = $v = function (ob) {
		return new Bb.View(ob);
	}
	vw = Bb.View.prototype;
	Bb.V = Bb.View;
	Bb.V.x = Bb.V.extend;
	Bb.sEv(vw)
	vw.A = function (ob) {
		var g = G(arguments)
		if (S(ob)) {
			ob = this.g(ob)
		}
		if (ob) {
			this.$el.A(ob)
		}
		if (U(ob) || g.p) {
			this.$el.A()
		}
		return this
	}
	vw.a2 = function (a) {
		if (this.$el && this.$el.a2) {
			return this.$el.a2(a)
		}
	}
	vw.g = function (m) {
		if (this.model) {
			return this.model.get(m)
		}
		else if (this.collection && this.collection.get) {
			return this.collection.get(m)
		}
	}
	vw.s = function (a, b) {
		this.model.set(a, b);
		return this
	}
	vw.E = function () {
		this.$el.E();
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
	vw.eAlt = function (a, b) {
		var cl = this.collection || this.cl;
		cl.each(a, b)
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
	vw.eM = function (fn) {
		_.e(this.model, fn);
		return this
	}
	vw.h = function (a) {
		if (U(a)) {
			return this.$el.h()
		}
		this.$el.h(a);
		return this
	}//=vw.H
	vw.j = function (fn) {
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
}
Bb.Model.prototype.j = function () {
	return this.toJSON()
}
Bb.Collection.prototype.j = function () {
	return this.toJSON()
}
Bb.M.prototype.idAttribute = '_id'
function mod() {
	$Df = function (ob) {
		return $M({df: ob})
	}
}
function rtr() {
	_$r = function (ob) {
		var rt = $R(ob)
		rt._()
		return rt
	}
	$RoApp = function (name, fn) {
		startRtr = function (name) {
			Bb.h.start({
				pushState: true,
				root: "/mvc/" + name + "/"
			})
		}
		$Fn(name, function () {
			Ap = {M: {}, V: {}, C: {}}
			$l('name: ' + (name = _.tU(name)))
			$rtHeader(name)
			d = $.dI('ct').fS(40)
			fn();
			startRtr(name)
		})
	}
	$rR = function (ob) {
		return _$r({r: ob})
	}
}
function vew() {
	md = Bb.Model.prototype;
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.model
		ob.m = ob.md = ob.m = this
		return Vw(ob)
	}
	md._V = function (ob) {
		return this.V(_V(ob))
	}
	Bb.View.prototype.C$ = function (s) {
		this.$el.C$(s);
		return this
	}
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
}
function col() {
	vw.C$ = function (s) {
		this.$el.C$(s);
		return this
	}
}
function boneQuery() {
	Bb.tr = Bb.trV = Bb.trVw = function (ob) {
		ob = _.x(ob || {}, {tagName: 'tr'})
		var view = Bb.V.x(ob)
		return view
	}
	Bb.ul = $.uV = $.ulV = function (ob) {
		ob = ob || {};
		ob.tagName = 'ul';
		return $V(ob)
	} // make a bb view with t:ul
}
function queryBone() {
	$.fn.$V = function (ob) {
		ob = ob || {};
		ob.el = this;
		return $V(ob)
	}//$.fn.V
	$.fn.C$ = function () {
		return this.C($r())
	}
}
BB16 = COLLECTIONONADD = CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB17 = COLLECTIONLENGTH = TDS = CRM = CLLEN = function () {
	Td = _M({df: {tt: '', completed: false}});
	Md = _M({
		d: {tt: '', completed: false}
	})
	Cl = _C({md: Md})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = _C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
FLCL = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = Bb.V.x({
	 ev: {'click #run': 'runFilter'},
	 runFilter: function(e){e.pD();
	 this.fl = {
	 // ... get the filter info from the DOM
	 }; this.rr()},
	 rr: function(){// get the filtered list from the collection
	 // iterate over the filtered list and render the results in to the html array
	 // populate the DOM with the resulting HTML
	 HT=[]
	 _.e(this.cl.where(this.fl),
	 function(item){HT.push(
	 _.tp($('my-item-template').H())(item.tJ())
	 )})
	
	 this.$el.html(HT); return this }
	 })*/
	Cl = $$C({
		i: function () {
		}
	})
	cl = Cl({})
	cl.add([
		{a: 'f', b: 's'},
		{a: 't', b: 's'},
		{a: 'f', b: 's'},
		{a: 's', b: 't'}
	])
	res = cl.where({a: 'f', b: 's'})
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
BB18 = FLCL = FILTERCOLLECTION = function () {

//$.x('r', 'filtering a cl:')
	FlV = Bb.V.x({
		ev: {'click #run': 'runFilter'},
		runFilter: function (e) {
			e.pD();
			this.fl = {
				// ... get the filter info from the DOM
			};
			this.rr()
		},
		rr: function () {// get the filtered list from the collection
			// iterate over the filtered list and render the results in to the html array
			// populate the DOM with the resulting HTML
			HT = []
			_.e(this.cl.where(this.fl),
					function (item) {
						HT.push(
								_.tp($('my-item-template').H())(item.tJ())
						)
					})
			this.$el.html(HT);
			return this
		}
	})
	///
	Cl = _C({
		i: function () {
		}
	})
	cl = Cl({})
	cl.add([
		{a: 'f', b: 's'},
		{a: 't', b: 's'},
		{a: 'f', b: 's'},
		{a: 's', b: 't'}
	])
	res = cl.where({a: 'f', b: 's'})
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
BB19 = RESET = function () {
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
///////////////////////////////////////////////////////
	//  replace  entire cl  content
	TdsCl = $cl()
	// we can listen for reset evs
	TdsCl.on("reset", function () {
		$l("Cl reset.")
	})
	TdsCl.A([{
		tt: 'go to Jamaica.', completed: false
	}, {
		tt: 'go to China.',
		completed: false
	},
		{tt: 'go to Disneyland.', completed: true}]);
	$l('Cl size: ' + TdsCl.length); // Cl size: 3
	TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
	// Above logs 'Cl reset.'
	$l('Cl size: ' + TdsCl.length); // Cl size: 1
	// use reset with no arguments to clear outcl completely.
	//  This is handy when dynamically loading new page of results
	// where you want to blank out current page of results.
	//myCl.reset()
	// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
	// The reason you might want to use this is to perform super-optimized
	//rendering in extreme cases where individual evs are too expensive.
	td = $M()
	tds = $Cl([td]).on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
		$l(ops.prevMds);
		$l([td]);
		$l(ops.prevMds[0] === td); // true
	})
	tds.reset([])
	// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
	Beat = $M({d: {job: 'mus'}})
	john = Beat({fN: 'John', lN: 'Lennon'});
	paul = Beat({fN: 'Paul', lN: 'McCartney'});
	george = Beat({fN: 'George', lN: 'Harrison'});
	ringo = Beat({fN: 'Ringo', lN: 'Starr'});
	theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
	pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
	theBeats.s([john, paul, george, pete]); // Update cl
	// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
	// Updates any of John, Paul and Georges's atts that may have
	// changed over years.
	// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
}
BACKVAL1 = function () {
	Person = bbM({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BACKVAL = function () {
	Person = bbM({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BBVT = function () {
	BBVP0 = function () {
		$.x('x', 'bb view people')
		vw = _V({
			t: 'ul',
			i: function () {
				this.$el.C('y')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, function (p) {//$('#peep')
					el.A(
							$.li().A(p.n + '(' + p.a + ')')
					)
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().el)
		_.in(function () {
			peep.pop();
			vw.r()
		})
		vw = $.ulV({
			i: function () {
				this.q.C($r())
			},
			r: function () {
				var el = this.q.E()
				this.cl(function (p) {
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().q)
		_.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
	$.x('x', 'bb view and template');
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = $V({
		q: '#ct',
		events: {'click button': 'r'},
		r: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		i: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $M()({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
	md = new bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = bb.V.e({
		el: '#ct',
		i: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		rr: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		ev: {'click button': 'rr'}
	})
	vw = new Vw({blOp: 'empty!', model: md})
	return vw
}
REN = WOB = VIEWRENDER = function () {
	ul = $.ul().id('peep')
	vw = {
		ren: function () {
			$('#peep').E()
			_.e(peep, function (p) {
				$('#peep').A('<li>' + p.n + '(' + p.a + ')</li>')
			})
		}
	}
	vw.ren()
	_.in(function () {
		peep.pop();
		vw.ren()
	}, '*')
};
BB15 = BBC = PEPOP = function () {
	$.x('x', 'bb view people')
	vw = $V({
		t: 'ul',
		collection: peep,
		ren: function () {
			var vw = this
			var q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		},
		i: function () {
			this.ren().$el.C('y').A()
		}
	})
	// alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BB20 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A(
			$.h1('hello'),
			bt = $.bt('-------')
	)
	$V({
		el: dv,
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'r',
			'mouseover': function () {
				dv.C($r())
			}
		},
		r: function () {
			$.C($r())
		}
	})
}
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		ren: function () {
			q.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	q.V({
		r: function () {
		},
		i: function () {
		}
	})()
}
MDVW = function () {
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	m = $M({d: {n: 'j', a: 20, o: 'p'}})
	m.V($$V({
		t: 'li', _: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	}))
	_.in(2, function () {
		$.C('R')
		$l('- - --- - - - - ')
		m.l()
	})
	function old() {
		PERVY = function () {
			$.x('n')
			$$V({
				t: 'li', _: 'some-per', k: 'per',
				r: function () {
					this.A('n').A()
				},
				i: function () {
					$l(this.model);
					this.r()
				}
			})({
				m: $M({d: {n: 'j', a: 20, o: 'p'}})
			}) //-> p.V(PerV)
		}
	}
}
BB0 = EXTEV = EXTENDEVENT = function () {
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
}
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
BB2 = DFM = function () {
	$V({
		el: $.li(),
		ren: function () {
			this.$el.A('n: ' + this.model.get('n'))
			return this
		},
		i: function () {
			this.$el.C('r', 'b').fS(149)
			this.ren()
		},
		m: $Df({n: 'j'})
	})
}
BB3 = BVR = VWR = DIVADD = function () {
	Vw = _V({
		el: $.dI('d1', 'r', 500, 500),
		ren: function () {
			this.$el.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	_.t(4, function () {
		Vw()
	})// alpha! <- 
	//q.V({r: function () { }, i: function () {  }})()
}
BB4 = VEL = VIEW = function () {
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		r: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.r()
			})
		},
		i: function () {
			this.r()
		}
	})
	Vw = _V({
		r: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		i: function () {
			this.r()
		}
	})
	$.bt('orange', function () {
		Vw({el: $.d('O', 500, 500)})
	})
	//  uses jq.fn.V ...very cool
	$.fn.V = function (ob) {
		ob = ob || {};
		ob.el = this
		return $V(ob)
	}
}
BB5 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
BB6 = MDV = MVW = BMV = function () {
	md = $M({d: {n: 'j', a: 20, o: 'p'}})
	md._V({
		t: 'li',
		_: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})
	_.in(2, function () {
		$.C('R');
		$l('- - --- - - - - ');
		md.l();
		$l(JSON.stringify(md.j()))
	})
}
//valid:
// md.validate() checking attr vals  prior to setting them.
//
// By default occurs when md is persisted using save() or when set() is called if {vld:true}
//
// Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
// .save() will not continue and atts of md will not be modified on server.
//
// Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
// This object is distinct from current atts of md  and from  pams passed to operation.
//
// Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
 
// validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
VALID = function () {
	$.x('x', 'valid')
	Per = new bb.M({n: 'J'})
	Per.validate = function (at) {
		if (!at.n) {
			return '!name'
		}
	}
	Per.s({n: 'S'})
	$l(P.g('n'))  // 'S'
	Per.unset('name', {vld: true}) // false
	Td = bb.M.x({
		df: {completed: false},
		vld: function (at) {
			if (U(at.tt)) {
				return "!tt"
			}
		},
		i: function () {
			this.on("invalid", function (md, z) {
				$l('err: ' + z)
			})
		}
	})
	td = new Td()
	td.s('completed', true, {vld: true}); // logs: !tt
	$l('completed: ' + td.g('completed')); // completed: false
	emptyTd = new Td(null, {vld: true});
	$l(emptyTd.validationError);
}
INVALID = function () {
	$.x('x', 'valid')
	$l('---- VALIDD ------')
	Md = $$M({
		validate: function (at) {
			if (!at.n) {
				return '!name'
			}
		}
	})
	md = Md({n: 'J'})
	md.oIv(function () {
		$Ms('INVALID !1 1!!!')
	})
	md.s({n: 'S'}, {validate: true})
	$l('n: ' + md.g('n'))
	md.unset('n')
	$l('n: ' + md.g('n'))
	md.s({n: 'S'}, {validate: true})
	md.unset('n', {validate: true})
	$l('n: ' + md.g('n'))
	function more() {
		p2 = Per({n: "qigo", a: 47})
		p3 = Per({n: "rigo", a: 7})
		$.bt('p2 validty', function () {
			$l('isValid: ' + p2.isValid())
		}) //  valid
		$.bt('p3 validty', function () {
			$l('isValid: ' + p3.isValid())
		}) //not valid
	}
}
BB7 = BVD = MVD = function () {
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
VALIDCOL = VALIDATECOLLECTION = function () {
	$.x('b', 'people')
	Per = $M({
		i: function () {
			this.oIv(function (m, z) {
				$l(z)
			})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (at) {
			if (at.a < 0) {
				return 'a<0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34})
	p.oIv(function (m, z) {
		$l('err: ' + z)
	})
	PerV = $V({
		t: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		//tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var v = this
			//this works, but doesnt use a template
			v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
			v.h(v.tJ())
		}
	})
	pV = PerV({m: p})
	peepC = $Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = $V({
		tn: 'ul',
		i: function () {
			$l('hi');
			$l(this.cl)
		},
		r: function () {
			var vw = this
			vw.eCl(function (p) {
				var v, pV
				$l(p.g('n'))
				pV = PerV({m: p})
				$l(pV.el)
				vw.q.A(pV.el)
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
	/*
	
	 md.validate() checking attr vals  prior to setting them.
	
	 By default occurs when md is persisted using save() or when set() is called if {vld:true}
	
	 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
	 .save() will not continue and atts of md will not be modified on server.
	
	 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
	 This object is distinct from current atts of md  and from  pams passed to operation.
	
	 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
	
	
	 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	
	
	 */
}
BB10 = PVR = PER = function () {
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
 
ARRPOP = function () {
	vw = $$V({
		t: 'ul',
		i: function () {
			this.$el.C('r')
		},
		r: function () {
			var el = this.$el.E()
			_.e(this.collection, //vw.cl == vw.collection >> true
					function (p) {
						$('#peep')
						el.A($.li().A(p.n + '(' + p.a + ')'))
					})
			return this
		}
	})({
		c: peep
	})
	$.A(
			vw.r().el
	)
	_.in(1, function () {
		peep.pop()
		vw.r()
	})
	function alpha() {
		BBVP0 = function () {
			$.x('x', 'bb view people 0')
			peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
			vw = $.ulV({
				i: function () {
					this.q.C($r())
				},
				r: function () {
					var el = this.q.E()
					this.cl(function (p) {
						el.A($.li().A(p.n + '(' + p.a + ')'))
					})
					return this
				}
			})({cl: peep})
			$.A(vw.r().q)
			_.in(function () {
				peep.pop();
				vw.r()
			}, '*')
		}
	}
	
	function old() {
		SIMP1 = function () {
			p = $M()({n: 'j'})
			$.h3('p: ' + p.g('n'))
		}
		SIMP = function () {
			$.h1(
					'f: ' + $M()({n: 'j'}).g('n'),
					$.br(), 'l: ' + $m({n: 'y'}).n
			)
		}
	}
}//= BBVP
BBSAMP1 = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.e()
	RecV = bb.V.e({
		tagName: 'div', className: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab()
					.LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
		Rec.o({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec.o({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec.o({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = RecV.o({
			model: md
		})
		r.rr().$el.a2(d)
	})
}
SIMP = function () {
	$.x('r').h1('tut')
	p = $M()({n: 'j'})
	$.h3('p: ' + p.g('n'))
}
BBVP1 = function () {
	ARRPOP = function () {
		z()
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $$V({
			t: 'ul',
			i: function () {
				this.$el.C('r')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, //vw.cl == vw.collection >> true
						function (p) {
							$('#peep')
							el.A($.li().A(p.n + '(' + p.a + ')'))
						})
				return this
			}
		})({
			c: peep
		})
		$.A(
				vw.r().el
		)
		_.in(1, function () {
			peep.pop()
			vw.r()
		})
		function alpha() {
			BBVP0 = function () {
				$.x('x', 'bb view people 0')
				peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
				vw = $.ulV({
					i: function () {
						this.q.C($r())
					},
					r: function () {
						var el = this.q.E()
						this.cl(function (p) {
							el.A($.li().A(p.n + '(' + p.a + ')'))
						})
						return this
					}
				})({cl: peep})
				$.A(vw.r().q)
				_.in(function () {
					peep.pop();
					vw.r()
				}, '*')
			}
		}
	}//= BBVP
	BBVP = function () {
		$.x('x', 'bb view people')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $.ulV({
			i: function () {
				this.q.C($r())
			},
			r: function () {
				var el = this.q.E()
				this.cl(function (p) {
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().q)
		$.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
	PEOPOP = function () {
		$.x('x', 'bb view people')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $$V({
			t: 'ul',
			i: function () {
				this.$el.C('y')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, function (p) {//$('#peep')
					el.A($.li([p.n + '(' + p.a + ')']))
				})
				return this
			}
		})({cl: peep})
		$.A(
				vw.r().el
		)
		_.in(function () {
			peep.pop();
			vw.r()
		})
		function alpha() {
			BBVP0 = function () {
				$.x('x', 'bb view people')
				peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
				vw = $.ulV({
					i: function () {
						this.q.C($r())
					},
					r: function () {
						var el = this.q.E()
						this.cl(function (p) {
							el.A($.li().A(p.n + '(' + p.a + ')'))
						})
						return this
					}
				})({cl: peep})
				$.A(vw.r().q)
				_.in(function () {
					peep.pop();
					vw.r()
				}, '*')
			}
		}
	}
	COLLEC = function () {
		$.x().h1('BCL')
		Bk = $$M({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = $$C({m: Bk})
		cl1 = BksC()
		bk1 = Bko({ID: 1, n: "Bk 1"})
		bk2 = Bko({ID: 2, n: "Bk 2"})
		cl2 = BksC([bk1, bk2])
		bk3 = Bk({ID: 3, n: "Bk 3"})
		cl2.A(bk3)
		change = function () {
			bk3 = new Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
		add = function () {
			bk4 = Bk.o({ID: 4, n: "Bk 4"})
			bk5 = Bk.o({ID: 5, n: "Bk 5"})
			cl2.add([bk4, bk5])
		}
		addAt = function (n) {
			bk0 = new Bk({ID: 0, n: "Bk 0"})
			cl2.add(bk0, {at: n || 0})
		}
	}
	PEOPLE = function () {
		$.x();
		mds();
		vws();
		cls();
		clVw()
		function mds() {
			Per = $$M({
				i: function () {
					//this.oV(function(mod, err){$l(err)})
				},
				d: {n: 'doe', a: 30, j: 'wrk'},
				validate: function (ats) {
					if (ats.age < 0) {
						return 'a < 0!'
					}
				},
				work: function () {
					return this.g('n') + ' is working'
				}
			})
			Person = $$M({
				I: function () {
				}, // this.oV(function(mod, err){$l(err)})
				D: {name: 'john doe', age: 30, job: 'worker'},
				V: function (ats) {
					if (ats.age < 0) {
						return 'age below zero, stupid!'
					}
				},
				work: function () {
					return this.g('name') + ' is working'
				}
			})
			Person0 = function (o) {
				this.name = o.name
				this.age = o.age
				this.job = o.job
				//this.work=function(){}
			}
			Person0.prototype.work = function () {
				return this.name + ' is working'
			}
			Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
			Person = $$M({
				I: function () {
				}, // this.oV(function(mod, err){$l(err)})
				D: {name: 'john doe', age: 30, job: 'worker'},
				V: function (ats) {
					if (ats.age < 0) {
						return 'age below zero, stupid!'
					}
				},
				work: function () {
					return this.g('name') + ' is working'
				}
			})
			Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
			Per = $M({
				d: {lame: true},
				i: function () {
					var t = this
					t.on('error', function (m, e) {
						alert(3);
						$l(e)
					})
					t.on('change:n',
							function (m, e) {
								alert(3);
								$l(e)
							})
				},
				v: function (at) {
					if (at.n == 'rigo') {
						return "n cant be rigo!"
					}
				}
			})
			p = Per({n: "rigo", a: 7})
			p = Per({})
			p1 = Per({n: 'b'})
			p2 = {n: 'c'}
			Person0.prototype.work = function () {
				return this.name + ' is working'
			}
			p = Person({name: 'yano', age: 34})
			p.oV(function (mod, err) {
				$l(err)
			})
			p1 = Per({n: 'j'})
			p2 = Per({n: 'y'})
			p = Per({n: 'y', a: 34})
			p = Per({name: 'yano', age: 34})
			p.oIv(function (mod, z) {
				$l(z)
			})
		}
		
		function vws() {
			PerV = $$V({
				t: 'li',
				x: 'some-per', k: 'per',
				tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
				r: function () {
					this.$el.A('fasdfsfasd')
					_m = this.model
					//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
				},
				i: function () {
					this.r()
				}
			})
			PerV = $$V({
				t: 'li',
				x: 'some-per', k: 'per',
				tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
				r: function () {
					this.$el.A('fasdfsfasd')
					_m = this.model
					//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
				},
				i: function () {
					this.r()
				}
			})
			PerV = $$V({
				tn: 'li',
				k: 'person', x: 'some-person',
				i: function () {
					this.r()
				},
				tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
				r: function () {
					var t = this, q = this.$el
					//this works, but doesnt use a template
					// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
					q.html(q.text(t.j()))
				}
			})
			personView = $$V({
				t: 'li',
				k: 'person',
				i: 'some-person',
				I: function () {
					this.R()
				},
				T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
				R: function () {
					var t = this
					//this works, but doesnt use a template
					// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
					t.H(t.T(t.J()))
				}
			})
			v = personView({m: p})
			v = pV = PerV({m: p})
		}
		
		function cls() {
			peopleCol = $$C({m: Person})
			PerC = $$C({m: Per})
			pC = PerC([
				{n: 'rigo', a: 29},
				{n: 'j', a: 2},
				{n: 's', j: 'gx'}
			])
			Pers = $$C({model: Per})
			pers = Pers([p1, p2])
			Pers = $$C({model: Per})
			pers = Pers([p1, p2])
			Pers = $Cl({m: Per})
			pers = Pers()
			p1 = pers.add(p)
			pers.add(p2)
			pers.rm(p1)
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
			pC.add(p)
			pC.at(1).n('joejoe')
			pC.at(1).s('name', 'joejoe')
			peop = $cl()
			peop.comparator = function (a, b) {
				return a.g('n') < b.g('n') ? -1 : 1
			}
			peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
			peop.indexOf(rob)//0
			peop.indexOf(tom)//2
			pC = PepC()
			peopleCol = $$C({m: Person})
			pC.A([p, p1, p2])
			pC = PepC()
			pC.A([p, p1, p2])
			PepC = $$C({m: Per})
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
		}
		
		function clVw() {
			peopleView = $$V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
			PerColV = $$V({
				tn: 'ul',
				i: function () {
					$l('hi')
					$l(this.cl)
				},
				r: function () {//var t=this
					this.cl.each(function (p) {
						var v, pV  //$l(p.g('n'))
						pV = PerV.o({m: p}) //$l(pV.el)
						this.$el.append(pV.el) //t.q( pV.el  )
					}, this)
				}
			})
			PepV = $$V({
				cl: PepC, el: ul = $.ul(),
				i: function () {
				},
				r: function () {
					ul = this.$el.E()
					this.j(function (md) {
						PerV({m: md}, ul)
					})
				}
			})
			pCV = PepV({cl: pC})
			pCV = PerColV({cl: pC})
			pCV.r()
			$.A(pCV.el)//pC=new peopleCol() //pC.add(p)
			peopleView = $$V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
			PepV = $$V({
				cl: PepC, el: ul = $.ul(),
				i: function () {
				},
				r: function () {
					ul = this.q.E()
					this.J(function (md) {
						PerV.o({m: md}, ul)
					})
				}
			})
			pCV = PepV({cl: pC})
			pcv = peopleView({cl: pC})
			pcv.R()
			peopleView = $$V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
		}
		
		_.in(.2, function () {
			pCV.r()
		}, '*')
		_.in(.4, function () {
			pCV.r()
		}, '*')
		_.in(.2, function () {
			pCV.r()
		})
		_.in(.4, function () {
			pCV.r()
		})
	}
	$.x('x', 'bb view people')
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	vw = $V({
		t: 'ul',
		i: function () {
			this.$el.C($r())
		},
		r: function () {
			var el = this.$el.E()
			_.e(this.collection, function (p) {
				$('#peep')
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})({cl: peep})
	$.A(vw.r().el)
	$.in(function () {
		peep.pop();
		vw.r()
	}, '*')
}
BBRECS = BBSAMP = function () {
	$.x('b', 'bbsampp', '+')
	d = $.d()
	Rec = $$M()
	RecV = $$V({
		k: 'rec', e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md})
				.rr().$el.a2(d)
	})
}
BBSAMP1 = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.e()
	RecV = bb.V.e({
		t: 'div', k: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab().LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
		Rec.o({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec.o({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec.o({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = RecV.o({model: md})
		r.rr().$el.a2(d)
	})
}
BBSAMP = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = $M()
	RecV = $V({
		k: 'rec',
		e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		r: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md}).rr().$el.a2(d)
	})
}
BBSAMP1 = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = $M()
	RecV = $V({
		t: 'div', k: 'rec',
		events: {'click': 'move'},
		move: function () {
			this.$el.css('left', this.$el.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.$el.WH(this.model.get('w'), this.model.get('h'))
			return this
		},
		sPos: function () {
			this.$el.ab().LR(
					this.model.get('pos').x, this.model.get('pos').y)
			return this
		},
		sCol: function () {
			this.$el.C(this.model.get('C'))
			return this
		}
	})
	_.e([
				Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
				Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
				Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
			],
			function (md) {
				RecV({model: md}).rr().$el.a2(d)
			})
}
BBSAMP10 = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = $M()
	RecV = $V({
		k: 'rec',
		e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		r: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md}).rr().$el.a2(d)
	})
	BBSAMP1 = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = $M()
		RecV = $V({
			t: 'div', k: 'rec',
			events: {'click': 'move'},
			move: function () {
				this.$el.css('left', this.$el.position().left + 10)
			},
			rr: function () {
				return this.sDims().sPos().sCol()
			},
			sDims: function () {
				this.$el.WH(this.model.get('w'), this.model.get('h'))
				return this
			},
			sPos: function () {
				this.$el.ab().LR(
						this.model.get('pos').x, this.model.get('pos').y)
				return this
			},
			sCol: function () {
				this.$el.C(this.model.get('C'))
				return this
			}
		})
		_.e([
					Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
					Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
					Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
				],
				function (md) {
					RecV({model: md}).rr().$el.a2(d)
				})
	}
}
BBSAMP = function () {
	$.x('b', 'bbbsamp', '+')
	d = $.d()
	Rec = $M()
	RecV = $V({
		k: 'rec',
		e: {$: 'move'},
		move: function () {
			this.q.X(10, '+')
		},
		r: function () {
			var v = this
			v.q.C(v.g('C')).WH(v.g('w'), v.g('h')).ab(v.g('pos').x, v.g('pos').y)
			return v
		},
		i: function () {
			this.r().a2(d)
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 200}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 150}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({m: md})
	})
}
SIMP = function () {
	$.x('r', 'simp')
	$.h1(
			'f: ' + $M()({n: 'j'}).g('n'),
			$.br(), 'l: ' + $m({n: 'y'}).n
	)
}
BBRECS = BBSAMP = function () {
	$.x('b', 'bbsampp', '+')
	d = $.d()
	Rec = $$M()
	RecV = $$V({
		k: 'rec', e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md})
				.rr().$el.a2(d)
	})
}
BB8 = BRV = BBRECS = BBSAMP = function () {
	d = $.d()
	Rec = _M()
	RecV = _V({
		k: 'rec', e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md}).rr().$el.a2(d)
	})
}
bbLocStorPLUG = function () {
	(function (root, factory) {
		if (typeof exports === 'object' && typeof require === 'function') {
			module.exports = factory(require("backbone"));
		} else if (typeof define === "function" && define.amd) {
			// AMD. Register as an anonymous module.
			define(["backbone"], function (bb) {
				// Use global variables if the locals are undefined.
				return factory(bb || root.bb);
			});
		} else {
			factory(bb);
		}
	}(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
// Generate a pseudo-GUID by concatenating random hexadecimal.
		function guid() {
			return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		};
		function isObject(item) {
			return item === Object(item);
		}
		
		function contains(array, item) {
			var i = array.length;
			while (i--) if (array[i] === item) return true;
			return false;
		}
		
		function extend(obj, props) {
			for (var key in props) obj[key] = props[key]
			return obj;
		}
		
		function result(object, property) {
			if (object == null) return void 0;
			var value = object[property];
			return (typeof value === 'function') ? object[property]() : value;
		}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
		bb.LocalStorage = window.Store = function (name, serializer) {
			if (!this.localStorage) {
				throw "bb.localStorage: Environment does not support localStorage."
			}
			this.name = name;
			this.serializer = serializer || {
				serialize: function (item) {
					return isObject(item) ? JSON.stringify(item) : item;
				},
				// fix for "illegal access" error on Android when JSON.parse is passed null
				deserialize: function (data) {
					return data && JSON.parse(data);
				}
			};
			var store = this.localStorage().getItem(this.name);
			this.records = (store && store.split(",")) || [];
		};
		extend(bb.LocalStorage.prototype, {
			// Save the current state of the **Store** to *localStorage*.
			save: function () {
				this.localStorage().setItem(this.name, this.records.join(","));
			},
			// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
			// have an id of it's own.
			create: function (model) {
				if (!model.id && model.id !== 0) {
					model.id = guid()
					model.set(model.idAttribute, model.id)
				}
				this.localStorage().setItem(this._itemName(model.id),
						this.serializer.serialize(model))
				this.records.push(model.id.toString())
				this.save();
				return this.find(model)
			},
			// Update a model by replacing its copy in `this.data`.
			update: function (model) {
				this.localStorage().setItem(this._itemName(model.id),
						this.serializer.serialize(model))
				var modelId = model.id.toString()
				if (!contains(this.records, modelId)) {
					this.records.push(modelId)
					this.save()
				}
				return this.find(model)
			},
			// Retrieve a model from `this.data` by id.
			find: function (model) {
				return this.serializer.deserialize(
						this.localStorage().getItem(this._itemName(model.id)))
			},
			// Return the array of all models currently in storage.
			findAll: function () {
				var result = []
				for (var i = 0, id, data; i < this.records.length; i++) {
					id = this.records[i]
					data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
					if (data != null) result.push(data)
				}
				return result
			},
			// Delete a model from `this.data`, returning it.
			destroy: function (model) {
				this.localStorage().removeItem(this._itemName(model.id));
				var modelId = model.id.toString();
				for (var i = 0, id; i < this.records.length; i++) {
					if (this.records[i] === modelId) {
						this.records.splice(i, 1);
					}
				}
				this.save();
				return model;
			},
			localStorage: function () {
				return localStorage;
			},
			// Clear localStorage for specific collection.
			_clear: function () {
				var local = this.localStorage(),
						itemRe = new RegExp("^" + this.name + "-");
				// Remove id-tracking item (e.g., "foo").
				local.removeItem(this.name);
				// Match all data items (e.g., "foo-ID") and remove.
				for (var k in local) {
					if (itemRe.test(k)) {
						local.removeItem(k);
					}
				}
				this.records.length = 0;
			},
			// Size of localStorage.
			_storageSize: function () {
				return this.localStorage().length;
			},
			_itemName: function (id) {
				return this.name + "-" + id;
			}
		})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
		bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
			var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
			var resp, errorMessage;
			//If $ is having Deferred - use it.
			var syncDfd = bb.$ ?
					(bb.$.Deferred && bb.$.Deferred()) :
					(bb.Deferred && bb.Deferred());
			try {
				switch (method) {
					case "read":
						resp = model.id != undefined ? store.find(model) : store.findAll();
						break;
					case "create":
						resp = store.create(model);
						break;
					case "update":
						resp = store.update(model);
						break;
					case "delete":
						resp = store.destroy(model);
						break;
				}
			} catch (error) {
				if (error.code === 22 && store._storageSize() === 0)
					errorMessage = "Private browsing is unsupported";
				else
					errorMessage = error.message;
			}
			if (resp) {
				if (options && options.success) {
					if (bb.VERSION === "0.9.10") {
						options.success(model, resp, options);
					} else {
						options.success(resp);
					}
				}
				if (syncDfd) {
					syncDfd.resolve(resp);
				}
			} else {
				errorMessage = errorMessage ? errorMessage
						: "Record Not Found";
				if (options && options.error)
					if (bb.VERSION === "0.9.10") {
						options.error(model, errorMessage, options);
					} else {
						options.error(errorMessage);
					}
				if (syncDfd)
					syncDfd.reject(errorMessage);
			}
			// add compatibility with $.ajax
			// always execute callback for success and error
			if (options && options.complete) options.complete(resp);
			return syncDfd && syncDfd.promise();
		};
		bb.ajaxSync = bb.sync
		bb.getSyncMethod = function (model, options) {
			forceAjaxSync = options && options.ajaxSync
			if (!forceAjaxSync && (result(model, 'localStorage') ||
					result(model.collection, 'localStorage'))) {
				return bb.localSync
			}
			return bb.ajaxSync
		}
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'
		bb.sync = function (met, md, op) {
			return bb.getSyncMethod(md, op).apply(this, [met, md, op])
		}
		return bb.LocalStorage
	}))
}