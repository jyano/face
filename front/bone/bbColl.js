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
C$ = Bb.C.x = function (ob) {
	return Bb.C._x(Bb.C.ob(ob))
}
$c = $cl = function (ob, ob2) {
	var Cl = Bb.C.x(ob)
	return new C$(Bb.C.ob(ob2))
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
C_ = Cl_ = function (ob) {
	return _C()(ob)
}
$C = $Cl = function (ob, ob2) {
	return _C(ob)(ob2)
}
$.fn.C$ = function () {
	return this.C($r())
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
  
$RenClFn = function (Vw) {
	return function () {
		return this.renCl(Vw)
	}
}
_c = $$c = function () {
	var Cl = C$()
	return new Cl(Bb.C.ob(ob))
}
Cl$Ul = function (cl) {
	return new Ul_({collection: cl})
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
