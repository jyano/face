BB2 = ADD2 = function () {
	ADDD = function () {
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
	BBTASKER = function () {
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Task = bb.M.x({})
		t1 = new Ap.M.Task({t: 'go  store', pr: 4})
		t2 = new Ap.M.Task({t: 'go park', pr: 3})
		Ap.V.Tsk = bb.V.x({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = new Ap.V.Tsk({m: t1})
		Ap.C.Tasks = bb.C.x({m: Ap.M.Tsk})
		tasks = new Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = bb.V.x({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tasksV = new Ap.V.Tasks({cl: tasks})
	}
}
BB14 = COLLECTIONONADD = CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB10 = XDIVADD = function () {
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
BB11 = LEN = function () {
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
BB7 = BBSORT = function () {
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator = function (a) {
		return _z(a)
	}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$.h1(chapters.pluck('title'))
}
BB13 = ACE = ADDCHICKEVENT = function () {
	$s({i: {w: 50, h: 50}})
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
BB20 = USM = USMETS = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = _M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
} //er