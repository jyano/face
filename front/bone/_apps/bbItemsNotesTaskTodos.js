ITEMS = function () {
	z();
	Ap = {M: {}, V: {}, C: {}}
	$Ro = Router = $$R({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}
TODOOS = LSTD = function () {
	TdsCl = $Cl({md: Td, url: '/tds'});
	$Ms('BBlS')
	Tds = new TdList
	App = new AppVw
}
TODO = RESTPERSIST0 = function () {
	
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing on server.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
 tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
}
TODOS = SAVEMDTOSERVER = function () {
	
	
	// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
	//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
	// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. 
	// Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
	 
	
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2);
	td2.s('title', 'go fishing');
	td2.S(); // sends HTTP PUT to /tds/2
	tds.cr({title: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
	//  Deleting mds from server
	//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
	Td = $M({df: {title: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fet();
	td2 = tds.g(2)
	td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
	// Calling destroy onMd will return false if md isNew:
	td = new Bb.Md();
	$l(td.des())  // false
	// Options
	// Each RESTful API met accepts a variety of ops.
	//  Most importantly, all mets accept success and error cbs which can be used
	//  to custize handling of server responses.
	//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
	//  instead of entire md; i.e. md.save(attrs, {patch: true}):
	// Save partial using PATCH
	md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
	md.sv();
	md.sv({b: 2, d: 4}, {patch: true});
	$l(this.syncArgs.met);
	// 'patch'
	// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
}
function activeDanger(){
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
	TASKER = function () {
		$.x()
		Ap.M.Task = $$M({})
		t1 = Ap.M.Task({t: 'go  store', pr: 4})
		t2 = Ap.M.Task({t: 'go park', pr: 3})
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
	}
	TASKER00 = function () {
		$.x('g', 'tasker');
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Tsk = $M()
		t1 = Ap.M.Tsk({t: 'store', pr: 4})
		t2 = Ap.M.Tsk({t: 'park', pr: 3})
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
		function alt() {
			TASKER0 = function () {
				$.x()
				Ap = {M: {}, C: {}, V: {}}
				Ap.M.Task = Bb.M.e({})
				t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
				t2 = Ap.M.Task.o({t: 'go park', pr: 3})
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
				tasksV = Ap.V.Tasks.o({cl: tasks})
			}
			function oldSchol() {
				BACKDEMO = function () {
					z()
					Temp('task', [
						lb('Task: '),
						tx().id('task_desc'),
						bt('add task').id('btn')])
					di('container').a()
					bbR({
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
					})()
					bbH()
					Task = bbV({
						el: $('#container'),
						i: function () {
							this.r()
						},
						r: function () {
							this.$el.html(temp('task'))
						},
						e: {'click button': 'add'},
						add: function () {
							alert(qiv('task_desc') + ' task added')
						}
					})
				}
			}
		}
	}
	AP = TASK = function () {
		$.x('g', 'tasker');
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')
		])
		Ap.M.Tsk = $$M({})
		tsk1 = Ap.M.Tsk({
			title: 'go to the store',
			priority: 4
		})
		tsk2 = Ap.M.Tsk({
			title: 'go to the park',
			priority: 3
		})
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
	}
	TASKS = function () {
		z()
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
	}
	ITEMS = function () {
		z()
		Router = bbR({
			R: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j'
			},
			welcome: function () {
				show('welcome')
			},
			j: function () {
			},
			showItemList: function () {
				show('show item list')
			}
		})
		router = Router()
		Ap = {
			M: {}, V: {}, C: {}
		}
		Ap.M.item = bbM({})
		i1 = Ap.M.item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			show('j')
		})
		bbH()
	}
	AVAIL1 = function () {
		z()
		tx('new avail').id('newAvail').a()
		bt('ok', function () {
			Ap.M.Avail({c: qiv('newAvail')}).save()
			v.render()
		}).a()
		di('availsDiv').a()
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.$el.append(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).at('contenteditable', 'false')
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.append("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.append(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		v = Ap.V.Avails({collection: avs})//.render()
		avs.on('destroy', function (aa) {
			$l('destroy!!!!')
		})
	}
	AVAIL = function () {
		z()
		tx('new avail').id('newAvail').a()
		bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).a()
		di('availsDiv').a()
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.q(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).cE(1)
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q(h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		avs.on('destroy',
				function (j) {
					alert('i am col and i was destroyed')
					v.trigger('modelDeleted')
				})
		v = Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		a = bbM({
			defaults: {prop: 3},
			test: function () {
				console.log(this.get('prop'))
			},
			test2: function (a) {
				console.log(
						(function () {
							return this.get('prop')
						})()
				)
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		f = a()
	}
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