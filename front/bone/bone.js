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
$L('events', 'model', 'router', 'history', 'mod', 'rtr', 'vew',   'boneQuery', 'queryBone')
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
 