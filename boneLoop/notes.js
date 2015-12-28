function activeDanger() {
	$.x('g', 'tasker');
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Task = bbM({})
	task1 = Ap.M.Task({
		title: 'go to the store',
		priority: 4
	})
	task2 = Ap.M.Task({
		title: 'go to the park',
		priority: 3
	})
	t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
	t2 = Ap.M.Task.o({t: 'go park', pr: 3})
	t1 = Ap.M.Task({t: 'go  store', pr: 4})
	t2 = Ap.M.Task({t: 'go park', pr: 3})
	t1 = Ap.M.Tsk({t: 'store', pr: 4})
	t2 = Ap.M.Tsk({t: 'park', pr: 3})
	tsk1 = Ap.M.Tsk({
		title: 'go to the store',
		priority: 4
	})
	tsk2 = Ap.M.Tsk({
		title: 'go to the park',
		priority: 3
	})
	Ap.V.Task = bbV({
		t: 'li',
		R: function () {
			return this.H(
					this.g('title'))
		}
	})
	taskView = Ap.V.Task({m: task})
	Ap.C.Tasks = bbC({m: Ap.M.Task})
	tasks = Ap.C.Tasks([
		{title: 'hi'},
		{title: 'bye'}])
	Ap.V.Tasks = bbV({
		t: 'li',
		R: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Task({m: t})
						this.$el.append(v.el)
					},
					this)
			$b()(this.el)
		}
	})
	tasksV = Ap.V.Tasks({cl: tasks})
	Ap.M.Task = Bb.M.e({})
	Ap.V.Tsk = Bb.V.e({
		t: 'li',
		rr: function () {
			this.A(this.g('t'))
			return this
		}
	})
	taskView = Ap.V.Tsk.o({m: t1})
	Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
	tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
	Ap.V.Tasks = Bb.V.e({
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
	Ap.M.Task = _M({}) //Ap.M.Task = $$M({})
	Ap.V.Tsk = $$V({
		t: 'li',
		rr: function () {
			this.A(this.g('t'))
			return this
		}
	})
	taskView = Ap.V.Tsk({m: t1})
	Ap.C.Tasks = $$C({m: Ap.M.Tsk})
	tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
	Ap.V.Tasks = $$V({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Task({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tasksV = Ap.V.Tasks({cl: tasks})
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
	TskV = Ap.V.Tsk = $$V({
		t: 'li',
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(this.g('t'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	tskVw = Ap.V.Tsk({m: task1})
	Ap.C.Tsks = $$C({m: Ap.M.Tsk})
	tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var that = this
			//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.$el.A()
		}
	})
	tsksVw = Ap.V.Tsks({cl: tsks})
	Ap.M.Tsk = $M()
	Ap.V.Tsk = $V({
		t: 'li',
		r: function () {
			this.A(this.g('tt'));
			return this
		}
	})
	tskV = Ap.V.Tsk({m: t1})
	Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
	tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var v = this
			v.eCl(function (t) {
				v.q.A(Ap.V.Tsk({m: t}).r().q)
			})
			this.q.A()
		}
	})
	tsksV = Ap.V.Tsks({cl: tsks})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	$.d().id('container')
	r = $R({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})
	Bb.h.start({pushState: true})
//f.happy('prop')
	server = {
		d: 2,
		n: 2,
		docs: {
			1: {text: 'this is a doc', id: 1}
		},
		notes: {
			1: {1: {text: 'note'}, 2: {text: 'another note'}}
		},
		get: {
			'/docs': function (q, p) {
				var res = []
				for (var doc in docs) {
					if (docs.hasOwnProperty(doc)) {
						res.push(docs[doc])
					}
				}
				p.json(res)
			},
			'/docs/:did/notes': function (q, p) {
				var res = [], n = notes[q.params.id]
				for (var note in n) {
					if (n.hasOwnProperty(note)) {
						res.push(n[notes])
					}
				}
			}
		},
		post: {
			'/docs': function (q, p) {
				var doc = q.body
				doc.id = d++
				docs.doc.id = doc
				p.json(doc)
			},
			'/docs/:did/notes': function (q, p) {
				var note = q.body, id = q.params.id
				note.id = n++
				if (!notes[id]) {
					notes[id] = {}
				}
				notes[id][notes.id] = note
				p.json(note)
			}
		},
		put: {
			'docs/:id': function (q, p) {
				docs[q.params.id] = q.body
				p.json(q.body)
			},
			'docs/:did/notes:nid': function (q, p) {
				notes[q.params.id][q.params.nid] = q.body
				p.json(q.body)
			}
		}
	}
	Note = Bb.M.x({})
	Notes = Bb.C.x({
		m: Note,
		i: function (mds, op) {
			this.doc = op.doc
		},
		u: function () {
			return this.doc.url() + '/notes'
		}
	})
	Doc = Bb.M.x({
		i: function (op) {
			this.notes = new Notes([], {doc: this})
		},
		addNote: function (tx) {
			this.notes.create({
				text: tx
			})
		}
	})
	Docs = Bb.C.x({
		m: Doc, u: '/documents',
		i: function () {
			this.on('reset', this.getNotes, this)
		},
		getNotes: function () {
			this.each(function (doc) {
				doc.notes = new Notes([], {doc: doc})
				doc.notes.fetch()
			})
		}
	})
	ds = new Docs()
	ds.fetch()
	NOTES = function () {
		server = {
			d: 2,
			n: 2,
			docs: {
				1: {text: 'this is a doc', id: 1}
			},
			notes: {
				1: {1: {text: 'note'}, 2: {text: 'another note'}}
			},
			get: {
				'/docs': function (q, p) {
					var res = []
					for (var doc in docs) {
						if (docs.hasOwnProperty(doc)) {
							res.push(docs[doc])
						}
					}
					p.json(res)
				},
				'/docs/:did/notes': function (q, p) {
					var res = [], n = notes[q.params.id]
					for (var note in n) {
						if (n.hasOwnProperty(note)) {
							res.push(n[notes])
						}
					}
				}
			},
			post: {
				'/docs': function (q, p) {
					var doc = q.body
					doc.id = d++
					docs.doc.id = doc
					p.json(doc)
				},
				'/docs/:did/notes': function (q, p) {
					var note = q.body, id = q.params.id
					note.id = n++
					if (!notes[id]) {
						notes[id] = {}
					}
					notes[id][notes.id] = note
					p.json(note)
				}
			},
			put: {
				'docs/:id': function (q, p) {
					docs[q.params.id] = q.body
					p.json(q.body)
				},
				'docs/:did/notes:nid': function (q, p) {
					notes[q.params.id][q.params.nid] = q.body
					p.json(q.body)
				}
			}
		}
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
	}
	NOTES = MINIMALBACKBONELOCALSTOREEXAMPLE = MINLS = function () {
		//Minimal Bb.localStorage example
		//THE MODEL AND THE COLLECTION
		//In order to use Bb.localStorage to save a model
		// we also need a collection.
		// The `localStorage` property of the collection
		// needs to be set to a new Bb.LocalStorage object
		// with an identifier for the collection
		// that is used when reading or writing the model values to LocalStorage.
		//The defaults function of the model
		// returns an object with a content property
		// that makes it easy to identify when the model was added to the collection
		// and if it's new or has been fetched from local storage.
		//ADDING AND SAVING NOTE MODELS
		//Bb collections have a fetch method that retrieves models from the server or,
		// in this case, local storage.
		//Before calling save on the model we need to add it to the collection,
		// otherwise Bb would attempt to use an Http request to store it on a server.
		myNotes = new NoteCollection()
		myNotes.fetch();
		note1 = new Note();
		myNotes.add(note1);
		note1.sv()
		myNotes.models.forEach(function (md) {
			$l("Md in cl: " + md.g("content"))
		})
	}
	function notes() {
		server = {
			d: 2,
			n: 2,
			docs: {
				1: {text: 'this is a doc', id: 1}
			},
			notes: {
				1: {1: {text: 'note'}, 2: {text: 'another note'}}
			},
			get: {
				'/docs': function (q, p) {
					var res = []
					for (var doc in docs) {
						if (docs.hasOwnProperty(doc)) {
							res.push(docs[doc])
						}
					}
					p.json(res)
				},
				'/docs/:did/notes': function (q, p) {
					var res = [], n = notes[q.params.id]
					for (var note in n) {
						if (n.hasOwnProperty(note)) {
							res.push(n[notes])
						}
					}
				}
			},
			post: {
				'/docs': function (q, p) {
					var doc = q.body
					doc.id = d++
					docs.doc.id = doc
					p.json(doc)
				},
				'/docs/:did/notes': function (q, p) {
					var note = q.body, id = q.params.id
					note.id = n++
					if (!notes[id]) {
						notes[id] = {}
					}
					notes[id][notes.id] = note
					p.json(note)
				}
			},
			put: {
				'docs/:id': function (q, p) {
					docs[q.params.id] = q.body
					p.json(q.body)
				},
				'docs/:did/notes:nid': function (q, p) {
					notes[q.params.id][q.params.nid] = q.body
					p.json(q.body)
				}
			}
		}
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
	}
	
	TdVw = Bb.V.x({
		tagName: "li", //template: _.template($('#item-template').html()),
		events: {
			"click .toggle": "toggleDone",
			"dblclick .view": "edit", "click a.destroy": "clear",
			"keypress .edit": "updateOnEnter", "blur .edit": "close"
		},
		initialize: function () {
			var vw = this, md = vw.model
			vw.l2(md, 'change', vw.r)
			vw.l2(md, 'destroy', vw.rm)
		},
		r: function () {
			var vw = this, md = vw.model, q = vw.$el
			q.html(vw.template(md.J()))
			q.tK('done', md.g('done')) //
			vw.ip = vw.$('.edit')
			return vw
		},
		toggleDone: function () {
			this.model.toggle()
		},
		edit: function () {
			this.$el.k("editing");
			this.ip.fc()
		},
		close: function () {
			var vw = this, md = vw.model
			var v = vw.ip.v();
			if (!v) {
				vw.clear()
			}
			else {
				md.sv({title: v});
				vw.$el.rK("editing")
			}
		},
		updateOnEnter: function (e) {
			if (e.keyCode == 13) {
				this.close()
			}
		},
		clear: function () {
			this.ds()
		}
	})
	AppVw = Bb.V.x({
		el: $("#todoapp"),
		// statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
		events: {
			"keypress #new-todo": "createOnEnter",
			"click #clear-completed": "clearCompleted",
			"click #toggle-all": "toggleAllComplete"
		},
		initialize: function () {
			var vw = this
			vw.ip = vw.$("#new-todo");
			vw.allCb = vw.$("#toggle-all")[0];
			vw.l2(Tds, 'add', vw.addOne);
			vw.l2(Tds, 'reset', vw.addAll);
			vw.l2(Tds, 'all', vw.render)
			vw.footer = vw.$('footer');
			vw.main = $('#main');
			Tds.fe()
		},
		render: function () {
			var vw = this,
					done = _.z(Tds.done()),
					remaining = _.z(Tds.remaining())
			if (_.z(Tds)) {
				vw.main.sh();
				vw.footer.sh()
				vw.footer.html(vw.statsTemplate({done: done, remaining: remaining}))
			}
			else {
				vw.main.hd();
				vw.footer.hd()
			}
			if (!this.allCb) {
				$l('!this.allCb')
			}
			else {
				this.allCb.checked = !remaining
			}
		},
		addOne: function (td) {
			var vw = new TdVw({model: td})
			this.$("#todo-list").A(vw.r().el)
		},
		addAll: function () {
			Tds.each(this.addOne, this)
		},
		createOnEnter: function (e) {
			if (e.keyCode != 13) {
				return
			}
			if (!this.ip.v()) {
				return
			}
			;
			Tds.cr({title: this.ip.v()});
			this.ip.v('')
		},
		clearCompleted: function () {
			_.iv(Tds.done(), 'destroy');
			return false;
		},
		toggleAllComplete: function () {
			Tds.each(function (td) {
				td.sv({'done': this.allCb.checked})
			})
		}
	})
	Note = _M({
		defaults: function () {
			return {
				content: "Note created on " + new Date().toISOString()
			}
		}
	})
	Td = $M({df: {title: '', completed: false}});
	Td = _M({
		df: function () {
			return {
				title: "empty td...",
				order: Tds.nextOrder(),
				done: false
			}
		},
		initialize: function () {
			if (!this.g("title")) {
				this.s({title: this.df().title})
			}
		},
		toggle: function () {
			this.sv({done: !this.g("done")})
		}
	})
	NoteCollection = _C({
		//model: Note,
		//localStorage: new Bb.LocalStorage("choose-some-identifier")
	})
	TdList = _C({
		//model: Todo,
		//localStorage: new Bb.LocalStorage("td-bb"),
		done: function () {
			return this.fl(function (td) {
				return td.g('done')
			})
		},
		remaining: function () {
			return this.wo.apply(this, this.done())
		},
		nextOrder: function () {
			if (!_.z(this)) {
				return 1
			}
			return this.la().g('order') + 1
		},
		comparator: function (td) {
			return td.g('order')
		}
	})
	MsView = Bb.V.x({})
	MssView = Bb.V.x({})
}