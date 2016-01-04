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
vw.h1 = function (val) {
	var h1 = this.model.h1(val)
	this.$el.A(h1)
	return h1
}
vw.d = function (val) {
	return this.model.d(val).a2(this.$el)
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
V$ = Bb.V.x = function (ob) {
	return Bb.V._x(Bb.V.ob(ob))
}
$v = function (ob, ob2) {
	var Vw = V$(ob)
	return new Vw(Bb.V.ob(ob2))
}
_v = $$v = function () {
	var Vw = V$()
	return new Vw(Bb.V.ob(ob))
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
V_ = function (ob) {
	return _V()(ob)
}
$V = function (ob, ob2) {
	return _V(ob)(ob2)
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
BB16 = VIEW = function () {
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
		I: function () {
			this.R()
		}
	})
	new Vw()
	$.bt('orange', function () {
		new Vw2({el: $.d('O', 500, 500)})
		Vw({el: $.d('O', 500, 500)})
	})
}
BB17 = NJA = MDV = MVW = BMV = XMDVW = function () {
	Md = _M({d: {n: 'j', a: 20, o: 'p'}})
	Vw = _V({
		tagName: 'li',
		_: 'some-per', k: 'per',
		R: function () {
			this.$el.A('n').A()
		},
		I: function () {
			this.R()
		}
	})
	md = Md()
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.md = ob.m = this
		return Vw(ob)
	}
	md.V(Vw)
	_.in(1, function () {
		$.C('R')
		md.l()
		$Ms(J.s(md.J()))
	})
}
BB12 = PVR = PER = function () {
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