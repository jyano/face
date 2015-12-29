
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
// (goto time: 43:42 )  https://www.youtube.com/watch?v=FXBCBjLGlK4
// MUST WATCH !!!!!!!!! https://www.youtube.com/watch?v=b4R3d46Ce80 
// BEST VIDEO (WATCH ALL, KNOW ALL) https://www.youtube.com/watch?v=cIq6Z_Vv4nY
rtsOb = rtsOb2 = {
	rt: {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	},
	image: function (id) {
		$l('image===')
		_.t(10, function () {
			$l($r() + '-id: ' + id)
		})
		$.bd().C('z')
	},
	h: function () {
		alert('you are viewing MEDICAL page')
	},
	x: function () {
		alert('you are viewing index')
	},
	viewImage: function () {
		alert('you are viewing a BOARD CERTIFICATION image')
	}
}
rtsOb6 = rtsOb1 = {
	routes: {
		'': 'home',
		'view': 'view',
		':id': 'en',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	},
	home: function () {
		$l('home')
	},
	view: function () {
		$l('image')
	},
	en: function (id) {
		$l('id:' + id)
	}
}
rtsOb3 = {
	r: {
		hello: 'hi',
		goodbye: function () {
			$.C('o')
		}
	},
	_: function () {
		$l('indexxxxx')
		$.C('p')
	},
	hi: function () {
		$.C('g');
		alert('well hi there!')
	},
	d: function () {
		$.C('z')
		$.A(
				$.sp('d e f a u l t')
						.fS(30).C('g').col('w')
		)
	}
}
rtsOb4 = {
	r: {
		':post/:id': 'pam',
		'post/*id': 'splatMustBeLast',
		'*post': 'splat'
	},
	pam: function (post, id) {
		$l('Get post ' + id)
		$l('fnPam: ' + post + ', id# ' + id)
	},
	splat: function () {
		alert('1')
	},
	splatMustBeLast: function () {
		alert('2')
	},
	d: function (a) {
		$l('ddddddddd:' + a)
	},
	e: function (a) {
		$l('eeeeeeeee:' + a)
	}
}
  

 
// RTR ALL U NEED TO KNOW!!!   https://www.youtube.com/watch?v=cIq6Z_Vv4nY
	
 

Eve = function () {
	var e = _({}).extend(Bb.Events)
	e.o = e.bind
	e.e = e.trigger
	return e
} 
 
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.M = Bb.Model;
md = Bb.M.prototype;
Bb.M._x =Bb.M.x = Bb.M.e = Bb.M.extend
//
Bb.C = Bb.Collection
cl = Bb.Collection.prototype
Bb.C._x =Bb.C.x = Bb.C.extend;
// 
Bb.V = Bb.View
vw = Bb.V.prototype
Bb.V._x = Bb.V.x = Bb.V.e = Bb.V.extend;
//
Bb.E = Bb.Ev = Bb.Events;
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
// events ob
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
$.E = function () {
	var bd = $.bd()
	bd.E.apply(bd, arguments)
	return $
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
$tp = window['$tp'] || {}
$.fn.none = function () {
	return this.css('display', 'none')
}
$l('bone')
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
//Bb.sEv(m)
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
$l('superBone')
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
_C = _Cl= $$C = function (ob) {
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
C_ =Cl_= function (ob) {
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
md.idAttribute = '_id'
//demoBug:rnd color
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
bbMock()
function bbMock() {
	docs = _.m($mk.docs, function (doc) {
		return new Bb.Model(doc)
	})
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
}
// make a bb view with t:ul
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
Ap = {M: {}, C: {}, V: {}, T: {}}
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
dfx = {
	tdTask: "td-task",
	tdHeader: "task-header",
	tdDate: "task-date", tdDesc: "task-desc",
	taskId: "task-", formId: "td-form",
	dataAttribute: "data",
	delDiv: 'delete-div'
}
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
bksArr = [
	{title: 'yaba daba', author: 'wanda'},
	{title: 'clawface', author: 'deez nuts'},
	{title: 'under the knee', author: 'p .qu rstly'}
]
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
//Quiz0 = function (title) {this.title = title}
XCHANGECOL = PROMPTCOLOR = function () {
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
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
XDEFAULT = function () {
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
VD1 = BB7 = BVD = MVD = function () {
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
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
 
	 

ACE=ADDCHICKEVENT  = function () {
		
		
	$s({i:{w:50,h:50}})
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
	Cl = $$C({})
	cl = Cl().oA(function (s) {
			$.A($.h1("new!!!!!! " + s.g('n')))
			$.i('chicks').A()
		}).A([{n: 'g1'}, {n: 'g2'}])
		
	
	
		ev = _.x({}, Bb.E)
		ev.b("fun:had", function () {
			$.A($.h1("yaaaaaaaaaaaa!!!!!! "))
			$.i('guy').A()
			 
		})// bind? on?
		ev.tr("fun:had")//trigger  //it'll alert "wee!"
	}
 VIEW = function () {
	 $.fn.V = function (ob) {
		 ob = ob || {};
		 ob.el = this
		 return $V(ob)
	 }
	 
	 $V({
		
		 el: $.dA('g', 400, 400, 200, 200),
		 
		 R: function () {
				var vw = this
				vw.A($.ul().fS(40).A('hello'))
				_.in(function () {
					vw.R()
				})
			},
			
		 I: function () {
				this.R()
			}
		
	 })
		
		Vw = _V({
			R: function () {
				this.A($.ul(['hello']).fZ(30))
			},
			I: function () {
				this.R()
			}
		})
		
		
		Vw = V$({
			el: q = $.dA('g', 400, 400, 200, 200),
			R: function () {
				var vw = this
				vw.A($.ul().fS(40).A('hello'))
				_.in(function () {
					vw.R()
				})
			},
			I: function () {
				this.R()
			}
		})
		
		Vw2 = V$({
			R: function () {
				this.A($.ul(['hello']).fZ(30))
			},
			I: function () {this.R()}
		})
		
		new Vw()
	 $.bt('orange', function () {
		 new Vw2({el: $.d('O', 500, 500)})
		 Vw({el: $.d('O', 500, 500)})
	 })
	 

	}
	
NJA =  MDV = MVW = BMV =  XMDVW = function () {
		
		Md = _M({d: {n: 'j', a: 20, o: 'p'}})
		
		
		Vw = _V({
		
			tagName: 'li',
			_: 'some-per', k: 'per',
			R: function () {this.$el.A('n').A()},
			I: function () {this.R()}
		})
		
		md = Md()
		
		md.V = function (Vw, ob) {
			ob = ob || {}
			ob.md =ob.m = this
			return Vw(ob)
		}
		
		md.V(Vw)
		
		_.in(1, function () {$.C('R')
			md.l()
			$Ms(J.s(md.J()))
		})
	
	}

 
XDIVADD = function () {
		q = $.dI('d1', 'r', 500, 500)
		Vw = V$({
			R: function () {
				q.A($.ul(['hello']))
			},
			I: function () {
				$l('init')
				this.R()
			}
		})
		new Vw()
		_.ev(1, function () {
			new Vw()
		}) // alpha! <-  q.V({r: function () { }, i: function () {  }})()
	}
PEP = function () {
		$.x('x', 'bb view people')
		peep = peep
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
		$.A(vw.R().el)
		_.in(function () {
			peep.pop();
			vw.R()
		})
	}
LEN = function () {
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
DIR =DIRECTORYADMIN= DIRECATMIN19 = function () {
		$CSS(CssOb);
		$.dI('wrapper', [
			$('<h1>').A('games directory').col('o'),
			$.dK('tools', [
				$('<h4>').col('g').A('search:'), $.br(),
				$('<input>').id('searchBox'), $.br(),
				$('<h5>').col('y').A('Filter:'), $.dI('filter'),
				$.dI('count')
			]),
			$.ulI('listing', [])
		])
		app = {m: {}, v: {}, r: {}, c: {}}
		app.m.Person = M$({
			defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
			initialize: function () {
				this.set('type', this.get('par') ? 'student' : 'parent')
			}
		})
		app.c.People = C$({
			model: app.m.Person,
			comparator: function (per) {
				return per.get('lN')
			}
		})
		app.i = function () {
			direc = new app.v.People(dirData)
			rtr = new app.r.Rtr()
			// Bb.h.start()
		}
		app.r.Rtr = Bb.R.x({
			routes: {
				'filter/:type': 'urlFilter'
			},
			urlFilter: function (type) {
				direc.filterType = type
				direc.trigger('change:filterType')
			}
		})
		app.v.Person = Bb.V.x({
			events: {
				'click .list-header': 'showDetails'
			},
			showDetails: function (e) {
				var q = $(e.target)
				q.toggleClass('active')
				q.siblings('.details').slideToggle('fast')
			},
			tagName: 'li',
			attributes: function () {
				return {class: 'person ' + this.model.get('type')}
			},
			tp: function (o) {
				return $('<h3>').A(
						$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
						$.dK('details', [
							'phone: ' + o.p, $.br(),
							'email: ', $.a(o.e)
						])
				)
			},
			r: function () {
				ob = this.model
				j = ob.toJSON()
				$l('render:' + j)
				this.A(
						this.tp(j)
				)
				return this
			}
		})
		app.v.Person = Bb.V.x({
			events: {
				'click .list-header': 'showDetails'
			},
			showDetails: function (e) {
				var q = $(e.target)
				q.toggleClass('active')
				q.siblings('.details').slideToggle('fast')
			},
			tagName: 'li',
			attributes: function () {
				return {class: 'person ' + this.model.get('type')}
			},
			tp: function (o) {
				return $('<h3>').A(
						$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
						$.dK('details', [
							'phone: ' + o.p, $.br(),
							'email: ', $.a(o.e)
						])
				)
			},
			r: function () {
				ob = this.model
				j = ob.toJSON()
				$l('render:' + j)
				this.A(
						this.tp(j)
				)
				return this
			}
		})
		app.v.People = Bb.V.x({
			events: {
				'keyup #searchBox': 'searchFilter'
			},
			getTypes: function () {
			},
			searchFilter: function () {
			},
			filterBySearch: function () {
			},
			filterByType: function () {
			},
			createFilters: function () {
			},
			setFilter: function () {
			},
			el: '#wrapper',
			r: function () {
				var vw = this,
						q;
				$('#listing').empty()
				_.e(this.cl.models, function (da) {
					vw.renderPerson(da)
				}, vw)
				return this
			},
			renderPerson: function (per) {
				var newPer = new app.v.Person({
					model: per
				})
				$('#listing').A(newPer.R().el)
			},
			initialize: function (data) {
				this.cl = new app.c.People(data);
				this.R()
			}
		})
		app.v.People = Bb.V.x({
			events: {
				'keyup #searchBox': 'searchFilter'
			},
			getTypes: function () {
			},
			searchFilter: function () {
			},
			filterBySearch: function () {
			},
			filterByType: function () {
			},
			createFilters: function () {
			},
			setFilter: function () {
			},
			el: '#wrapper',
			r: function () {
				var vw = this,
						q;
				$('#listing').empty()
				_.e(this.cl.models, function (da) {
					vw.renderPerson(da)
				}, vw)
				return this
			},
			renderPerson: function (per) {
				var newPer = new app.v.Person({
					model: per
				})
				$('#listing').A(newPer.R().el)
			},
			initialize: function (data) {
				this.cl = new app.c.People(data);
				this.R()
			}
		})
		app.i(dirData)
	}
ADDD= function () {
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.M.x({})
	App.Views.Task = Bb.V.x({
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
	App.Collections.Tasks = Bb.C.x({model: App.Models.Task})
	App.Views.Tasks = Bb.V.x({
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
	tasksCollection = tasks = new App.Collections.Tasks([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	tasksView = new App.Views.Tasks({
		collection: tasksCollection
	})
	tasksView.render()
	$.A(tasksView.el)
	$.bt('add', function () {
		tasksCollection.add([
			{title: 'yooo', prior: 4}
		])
	})
	TKZA = function () {
		tasksC = _C({model: _M()})([
			{title: 'game', prior: 3}, {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
		$.A(_V({
			initialize: function () {
				var view = this;
				view.collection.on('all', function () {
					view.ren()
				})
			},
			tagName: 'ol', ren: function () {
				this.$el.E()
				this.collection.each(this.addOne, this)
				return this
			},
			addOne: function (task) {
				this.$el.A(_V({
					tagName: 'li',
					events: {'click .edit': 'editTask'},
					showAlert: function () {
						alert('click')
					},
					editTask: function () {//alert('you are edititing the task')
						newTaskTitle = prompt('what would you like to change the text to?',
								this.model.get('title'))
						this.model.set('title', newTaskTitle)
					},
					ren: function () {
						this.$el.html(this.model.get('title'))
						return this
					}
				})({model: task}).ren().el)
			}
		})({collection: tasksC}).ren().el)
		$.bt('add', function () {
			tasksC.add([{title: 'yooo', prior: 4}])
		})
	}
}
SAMP = function () {
	$.x('b', 'bbsamp', '+')
	d = $.d()
	Rec = bb.M.x()
	RecV = bb.V.x({
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
		new Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		new Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		new Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		var r = new RecV({
			model: md
		})
		r.rr().$el.a2(d)
	})
}
ADD = function () {
	$$$('TKZ');
	App = {Models: {}, Views: {}, Collections: {}}
	App.Models.Task = Bb.Model.extend({})
	App.Views.Task = Bb.View.extend({
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
	App.Collections.Tasks = Bb.Collection.extend({model: App.Models.Task})
	App.Views.Tasks = Bb.View.extend({
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

