TODO = SAVEMDTOSERVER = RESTPERSIST0 = function () {
	TdsCl = $Cl({md: Td, url: '/tds'});
	$Ms('BBlS')
	Tds = new TdList
	App = new AppVw
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing on server.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
	tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
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
}
VALID = TODOO = function () {
	$.x('x', 'valid')
	Todoo = $$M({
		i: function () {
			this.oIv(function (md, z) {
				$l('err: ' + z)
			})
		},
		defaults: {completed: false},
		validate: function (at) {
			if (U(at.tt)) {
				return "!tt"
			}
		}
	})
	todoo1 = Todoo()
	todoo1.s('completed', true, {validate: true})
	$l('completed: ' + todoo1.g('completed'))
	emptyTodoo = Todoo(null, {validate: true})
	$l('valErr: ' + emptyTodoo.validationError)
	//
	Td = $$M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	TdsCl = $cl()
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
	tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
		tt: '  Aust',
		completed: true
	}])
	tds.forEach(function (md) {
		$l(md.g('tt'))
	}) //   Belgium.//   China. //   Austria.
	// sortBy()- sort a cl on spec attr, ex: sortByAlph
	tds.sortBy(function (td) {
		return td.g("tt").tLC()
	}).forEach(function (m) {
		$l(m.g('tt'))
	}) // go to Austria. // go to Belgium. // go to China.
	count = 1;
	$l(tds.map(function (md) {
		return count++ + ". " + md.g('tt')
	})) //1. go to Belgium. //2. go to China. //3. go to Austria.
	tds.max(function (m) {
		return m.id
	}).id;
	tds.min(function (m) {
		return m.id
	}).id
	//  pluck() extract  spec attr
	captions = tds.pluck('caption') // returns list of captions
	// filter()  ex: Filter by array of md IDs
	Tds = $Cl({
		md: Td, filterById: function (ids) {
			return this.mds.filter(function (c) {
				return _.contains(ids, c.id)
			})
		}
	})
	//   indexOf() return index of particular item within cl
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
	Td = $$M({d: {tt: '', completed: false}})
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
}
BOOK = function () {
	$.fm()
	toBook = function () {
		Y.run('book')
	}
	s1.A(
			$.h1('BOOK').$(toBook),
			bookName = $.ip(),
			$.bt('new book', function () {
				$.P('newBook', {name: bookName.V()},
						toBook)
			}),
			$.hr())
	$.Gj('books', function (bks) {
		s1.A($.h3('books:'))
		_.e(bks, function (bk) {
			s1.A($.sp().C('x').$(function () {
						$.P('delBook', {book: bk._id}, toBook)
					}),
					$.bt(bk.name, function () {
						s2.A($.h2('CHAPTER: ' + bk.name),
								chapterTitleInput = $.ip(),
								$.bt('new chapter',
										function () {
											$.P('newChapter', {
												chapterTitle: chapterTitleInput.V(),
												book: bk._id
											}, function () {
												chapterView(bk, c)
											})
										}), $.hr())
						$.eGj('chapters', {book: bk._id}, function (ch) {
							s2.A($.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
						})
					}), $.br(2))
		})
	})
	chapterView = function (b, c) {
		s2.E();
		s1.E();
		s1.A($.h1('BOOK').$(toBook))
		$.Gj('chapters', {book: bk._id}, function (chapters) {
			s1.A($.h3('chapters:'))
			s2.A($.h3('pages:'))
			_.e(chapters, function (ch) {
				s1.A($.sp('x').$(function () {
							$.P('delChapter', {chapter: ch._id}, function () {
								chapterView(bk, ch)
							})
						}),
						$.bt(ch.title, function () {
							chapterView(bk, ch)
						}), $.br(2))
			})
		})
		s2.A($.h1('chapter: ' + ch.title))
		s2.A(pageNameInput = $.ip(),
				$.bt('new page', function () {
					$.P('newPage', {
						pageName: pageNameInput.V(), chapter: ch._id
					})
				}), $.hr())
		$.eGj('/pages', {chapter: ch._id}, function (pg) {
			s2.A($.bt(pg.name, function () {
				pageView(bk, ch, pg)
			}), $.br(2))
		})
	}
}
pageView = function (bk, ch, pg) {
	s1.E();
	s2.E()
	s1.A($.h1('BOOK').$(ldr('book')))
	s1.A($.h1('CHAPTER ' + ch.title).$(function () {
		chapterView(book, ch)
	}))
	$.Gj('/pages', {chapter: ch._id},
			function (pgs) {
				s1.A($.h3('pages'))
				_.e(pgs, function (pg) {
					s1.A($.bt(pg.name, function () {
								sectionView(ch)
							}), $.br(2)
					)
				})
			})
	s2.A($.h1('page: ' + pg.name))
	$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
			function (sc) {
				s2.A($.bt(sc.section, function () {
							sectionView(bk, ch, pg)
						}), $.br(2)
				)
			})
}
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
 