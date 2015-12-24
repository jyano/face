//http://robdodson.me/some-more-backbone-dot-js-basics/
OBJECT = function () {
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
 
BCL = function () {
	$.x().h1('BCL but whats up wit dose funcs?')
	BksC = $Cl({
		m: Bk = $M({
			d: {n: '', g: 'fun'},
			url: 'http://localhost:51377/api/Books'
		}),
		d: {pizzaTopping: 'pepperoni'}
	})
	cl1 = BksC()
	cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
	cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
	cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))
	add = function () {
		$l('add')
		cl2.A([
			bk4 = Bk({ID: 4, n: "Bk 4"}),
			bk5 = Bk({ID: 5, n: "Bk 5"})
		])
	}
	add()
	addAt = function (n) {
		cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
	}
	change = function () {
		bk3 = Bk({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		bk3_changed = Bk({ID: 3, n: "Changed Model"})
		cl2.add(bk3_changed, {merge: true})
	}
}
BCL = function () {
	$.x().h1('BCL')
	Bk = Bb.M.e({
		d: {ID: '', n: ''},
		id: "ID",
		url: 'http://localhost:51377/api/Books'
	})
	BksC = Bb.C.e({m: Bk})
	cl1 = BksC.o()
	bk1 = Bk.o({ID: 1, n: "Bk 1"})
	bk2 = Bk.o({ID: 2, n: "Bk 2"})
	cl2 = BksC.o([bk1, bk2])
	bk3 = Bk.o({ID: 3, n: "Bk 3"})
	cl2.add(bk3)
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
		cl2.add(
				bk0, {at: n || 0}
		)
	}
}
MODCHANGE = function () {
	$.x()
	Bk = $M({
		d: {ID: "", n: ""},
		i: function () {
			var bk = this;
			$l('init..')
			this.on('change', function () {
				alert('change')
				if (bk.hasChanged('ID')) {
					alert('ID changed')
				}
				if (bk.hasChanged('n')) {
					alert('n changed')
				}
			})
		},
		showAlert: function () {
			alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
		}
	})
	bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
}
MODCHANGE = function () {
	$.x()
	Bk = Bb.M.e({
		d: {ID: "", n: ""},
		initiate: function () {
			$l('init..')
			var that = this
			this.on('change', function () {
				alert('change')
				if (that.hasChanged('ID')) {
					alert('ID changed')
				}
				if (that.hasChanged('n')) {
					alert('n changed')
				}
			})
		},
		showAlert: function () {
			alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
		}
	})
	// ChildBook = Bk.extend({})
	bk = Bk.o({ID: 1, n: "a"})
}
MODCHANGE = function () {
	$.x('x', 'modchange')
	Bk = $M({
		d: {ID: "ooooo", n: ""},
		i: function () {
			var bk = this;
			$l('init..')
			bk.$(function () {
				$l('change')
				g = G(arguments)
				o = g[1]
				m = g[0]
				if (bk.hC('ID')) {
					$l('ID changed')
				}
				// if(bk.hC('n')){$l('n changed') }
				bk.hC('n', function () {
					$l('n changed')
				})
			})
		},
		show: function () {
			$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
		}
	})
	bk = Bk({ID: 1, n: "a"})
	bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
	_.in(function () {
		bk.s('n', 'z', {a: 1, b: 2, c: 3})
		_.in(function () {
			bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
		}, '*')
	}, '*')
}
BBSORT = function () {
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
}
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
old = function () {
	V$ = function () {
		var g = G(arguments), o, v, a
		a = O(g.f) ? g.f : {}
		o = {ob: g.f}
		o.ob = o.b || {}
		if (a.I) {
			a.initialize = a.I
		}
		if (a.R) {
			a.render = a.R
		}
		if (a.r) {
			a.render = a.r
		}
		if (a.rr) {
			a.render = a.rr
		}
		if (a.E) {
			a.events = a.E
		}
		if (a.T) {
			a.template = a.T
		}
		if (a.t) {
			a.tagName = a.t
		}
		if (a.k) {
			a.className = a.k
		}
		if (a.i) {
			a.id = a.i
		}
		Vw = bb.V.e(ob)
		if (a.m) {
			a.model = a.m
		}
		if (a.md) {
			a.model = a.md
		}
		if (a.cl) {
			a.collection = a.cl
		}
		vw = new Vw(a)
		return vw
	}
}
/*
 VWob={  i:'initialize',
 m:'model',  c:'collection',
 e:'el',  n:'id', x:'id',  k:'className',
 tn:'tagName',  t:'tagName',
 a:'attributes',  ev:'event'  }


 Vw = $V({
 renderCollection: function(op) {op = op || {}
 op.target = op.target || this.$el;
 op.cl = op.cl ||    op.collection ||  this.collection;
 //- reset views
 if (!op.add) {this.disposeViews()}
 else {this._subviews = []}
 this._renderOptions = op
 //- if there is a collection and a view then render it
 if (op.cl && this.view) {op.cl.each(this._renderView, this)}
 return this
 }
 })

 */
BOOKVW = function () {
	$.dI('td')
	TdVw = $V({
		t: 'li',
		e: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'keypress .edit': 'updateOnEnter',
			'click .destroy': 'clear',
			'blur .edit': 'close'
		},
		Item: function (o) {
			return $.d([
				$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
		},
		i: function (ops) {
			this.ops = ops || {};
			this.model.on('change', _.b(this.r, this))
		}, //  access passed ops inyour view
		// Re-render tt of td item.
		r: function () {
			var v = this
			v.q.h(this.Item(this.md.J())) // this.md.atts ?
			v.input = v.$('.edit')
			return v
		},
		edit: function () {
		},    // executed when td label is double clicked
		close: function () {
		},  // executed when td loses focus
		updateOnEnter: function (e) {
		} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
	})
	ListVw = $V({
		r: function () {
			// Assume our md exposes items we will display in our list
			_.e(this.g('items'), function (i) {
				// Createnew instance of ItemVw, passing it spec md item
				// The itemVw's DOM el is appended after it
				// has been rendered. Here, 'return this' is helpful
				// as itemVw renders its md. Later, we ask for its output ("el")
				this.A(TdVw({md: i}).r().q)
			}, this)
		}
	})
	tdVw = new TdVw()
	// log reference toDOM el that corresponds to view instance
	$l(tdVw.el); // logs <li></li>
}
BOOKVW = function () {
	$.dI('td)
	TdVw = $V({
		t: 'li',
		e: {
			'click .toggle': 'toggleCompleted',
			'dblclick label': 'edit',
			'keypress .edit': 'updateOnEnter',
			'click .destroy': 'clear',
			'blur .edit': 'close'
		},
		Item: function (o) {
			return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
		},
		i: function (ops) {
			this.ops = ops || {};
			this.model.on('change', _.b(this.r, this))
		}, //  access passed ops inyour view
		// Re-render tt of td item.
		r: function () {
			var v = this
			v.q.h(this.Item(this.md.J())) // this.md.atts ?
			v.input = v.$('.edit')
			return v
		},
		edit: function () {
		},    // executed when td label is double clicked
		close: function () {
		},  // executed when td loses focus
		updateOnEnter: function (e) {
		} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
	})
	ListVw = $V({
		r: function () {
			// Assume our md exposes items we will display in our list
			_.e(this.g('items'), function (i) {
				// Createnew instance of ItemVw, passing it spec md item
				// The itemVw's DOM el is appended after it
				// has been rendered. Here, 'return this' is helpful
				// as itemVw renders its md. Later, we ask for its output ("el")
				this.A(TdVw({md: i}).r().q)
			}, this)
		}
	})
	tdVw = new TdVw()
	// log reference toDOM el that corresponds to view instance
	$l(tdVw.el); // logs <li></li>
} 