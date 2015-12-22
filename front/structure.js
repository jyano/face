$L('events', 'models', 'router', 'history', 'mod', 'rtr', 'vew',   'boneQuery', 'queryBone')
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
function models(){

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
function _pre() {
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
}
function apps(){
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
//
//
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
	function perfect() {
		MDGET = function () {
			$.x('r').h1('tut');
			Md = $$M();
			md = Md({n: 'j'});
			$.h3('p: ' + md.g('n'))
		}
		EXTEV = function () {
			$.x('o', 'EXTEV')
			o = _.x({}, Bb.E)
			o.on('yo', function () {
				$.sp(G(arguments)).fS(50)
			})
			o.trigger('yo', 'a', 'b', 'c')
		}
		VIEW = function () {
			$.x('b', 'viw')
			Vw = $$V({
				el: q = $.dA('g', 400, 400, 200, 200),
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
			Vw2 = $$V({
				r: function () {
					this.A(
							$.ul(['hello']).fZ(30)
					)
				},
				i: function () {
					this.r()
				}
			})
			Vw()
			$.bt('orange', function () {
				d2 = $.d('O', 500, 500)
				Vw2({el: d2})
			})
		}
		PEOPOP = function () {
			$.x('x', 'bb view people')
			peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
			Vw = $$V({
				t: 'ul',
				r: function () {
					var vw = this, q = vw.$el.E();
					_.e(vw.collection, function (p) {
						var li = $.li([p.n + '(' + p.a + ')'])
						q.A(li)
					});
					return this
				},
				i: function () {
					this.$el.C('y')
				}
			})
			vw = Vw({cl: peep})  // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
			$.A(vw.r().el)
			_.in(function () {
				peep.pop();
				vw.r()
			})
		}
		DIVADD = function () {
			z()
			q = $.dI('d1', 'r', 500, 500)
			Vw = $$V({
				r: function () {
					q.A($.ul(['hello']))
				},
				initialize: function () {
					this.r()
				}
			})
			_.t(3, function () {
				Vw()
			}) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
		}
		CLONADD = function () {
			$.x().h1('backcl');
			$.i('chicks').A()
			Cl = $$C({})
			cl = Cl().oA(function (s) {
				$l("new!!!!!! " + s.g('n'))
			}).A([{n: 'g1'}, {n: 'g2'}])
		}
		MDVW = function () {
			$.x('n')
			Md = $$M({d: {n: 'j', a: 20, o: 'p'}})
			Vw = $$V({
				t: 'li',
				_: 'some-per', k: 'per',
				r: function () {
					this.$el.A('n').A()
				},
				i: function () {
					this.r()
				}
			})
			md = Md()
			md.V = function (Vw, ob) {
				ob = ob || {}
				ob.m = this
				return Vw(ob)
			}
			md.V(Vw)
			_.in(2, function () {
				$.C('R');
				$l('- - --- - - - - ');
				md.l();
				$Ms(JSON.stringify(md.j()))
			})
		}
		BACKVALL = function () {
			z();
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
		CLLEN = function () {
			z();
			$Ms('CLLEN')
			Td = $$M({df: {tt: '', completed: false}});
			Md = $$M({
				d: {tt: '', completed: false}
			})
			Cl = $$C({
				md: Md
			})
			cl = Cl([Td({tt: 'Read', id: 2})]);
			$Ms('len 1?: ' + cl.length)
			TdsCl = $$C({md: Td})
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
				RecV({model: md}).rr().$el.a2(d)
			})
		}
		CHANGECOL = function () {
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
		NNN = PER0 = function () {
			$.x('n')
			Per = $$M({d: {n: 'j', a: 20, o: 'p'}})
			PerV = $$V({
				t: 'li', k: 'per',
				r: function () {
					this.$el.A('n')
					this.$el.A()
				},
				i: function () {
					this.r()
				}
			})
			pV = PerV({m: p = Per()})
			_.ev(.5, function () {
				pV.r()
			})
		}
		TKZ = function () {
			$$$('TKZ');
			App = {Models: {}, Views: {}, Collections: {}}
			App.Models.Task = Backbone.Model.extend({})
			App.Views.Task = Backbone.View.extend({
				tagName: 'li',
				events: { //'click':' showAlert',
					'click .edit': 'editTask'
				},
				showAlert: function () {
					alert('you clicked me')
				},
				editTask: function () {//alert('you are edititing the task')
					newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
					this.model.set('title', newTaskTitle)
				},
				render: function () {
					this.$el.html(
							this.model.get('title')
					)
					return this
				}
			})
			App.Collections.Tasks = Backbone.Collection.extend({model: App.Models.Task})
			App.Views.Tasks = Backbone.View.extend({
				initialize: function () {
					var view = this
					this.collection.on('all', function () {
						view.render()
					})
				},
				tagName: 'ol',
				render: function () {
					this.$el.E()
					this.collection.each(this.addOne, this)
					return this
				},
				addOne: function (task) {
					var taskView = new App.Views.Task({model: task})
					this.$el.append(taskView.render().el)
				}
			})
			tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
				{title: 'store', prior: 5}, {title: 'haha', prior: 3}])
			tasksView = new App.Views.Tasks({collection: tasksCollection})
			tasksView.render()
			$.A(tasksView.el)
			$.bt('add', function () {
				tasksCollection.add([{title: 'yooo', prior: 4}])
			}).button()
		}
		DEFAULT = function () {
			$.x('n')
			Md = $$M({
				defaults: {n: 'j', a: 20, o: 'p'}
			})
			Vw = $$V({
				t: 'li',
				r: function () {
					this.$el.A('n: ' + this.g('n'))
				},
				i: function () {
					this.$el.A().C('r').col('b').fS(149);
					this.r()
				}
			})
			md = Md()
			vw = Vw({
				m: md
			})
		}
		EVENTS = EVS = function () {
			$.x('o', 'beauty')
			q = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))
			Vw = $$V({
				el: q, r: function () {
					$.C($r())
				},
				events: {
					'click button': function () {
						bt.C($r())
					},
					'dblclick': 'r',
					'mouseover': function () {
						q.C($r())
					}
				}
			})
			Vw()
		}
		CHANGE = function () {
			Md = $$M()
			Vw = $$V({
				r: function () {
					return this.h(this.g('rx'))
				},
				i: function () {
					var vw = this;
					vw.r();
					vw.oC(function () {
						vw.r()
					})
				}
			})
			$.x('x', 'bbv');
			$('body').fS(30)
			div = $.dA('o', 300, 400).XY(200, 200)
			ip = $.ip()
			$.bt('change', function () {
				m.s('rx', ip.v())
			})
			m = Md({rx: 'antibiotic'})
			Vw({
				el: div,
				m: m
			})
		}
	}
}