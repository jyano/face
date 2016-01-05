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
BB1 = TWIT = function () {
	$TWT$ = $TWTAPP$ = function (fn) {
//https://www.youtube.com/watch?v=2BDGBJUtAmo
//Introduction to Backbone.js Part 1 - Client-side
//Michael Yagudaev
		return function () {
			$CSS(twtCss)
			TWTmvc()
			if (fn) {
				fn()
			}
		}
	}
	Twit = Bb.M.x({
		idAttribute: "_id",
		//url: '/twits',
		df: {un: 'fred', sts: 'sleeping'}
	})
	Twits = TwitsList = Bb.C.x({
		url: '/twits',
		model: Twit
	})
// NO SERVER
	TWIT0 = function () {
		$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
		$.f([
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post', function (ev) {
				ev.preventDefault()
				twits.create({
					un: $('#un').v(),
					sts: $('#sts').v()
				})
			})])
		TwitView = Bb.V.x({
			E: {
				'click .edit': function (ev) {
					$.pD(ev)
					this.$('.sts').edFoc()
				},
				'click .delete': function (ev) {
					$.pD(ev)
					twits.remove(this.model)
				},
				'blur .sts': 'close',
				'keypress .sts': function (ev) {
					if ((ev.which) == 13) {
						this.close()
					}
				}
			},
			tagName: 'p',
			close: function () {
				var vw = this
				vw.model.set('sts', vw.$('.sts').T())
				vw.$('.sts').ed(0)//.rmAt('contenteditable')
			},
			R: function () {
				this.$el.E().A(
						$.sp().A($.a('[details]').K('details'),
								$.a('[edit]').K('edit'),
								$.a('[delete]').K('delete')),
						$.sp(this.model.get('un')).K('un'),
						': ',
						$.sp(this.model.get('sts')).K('sts'))
				return this
			}
		})
		TwitsView = Bb.V.x({
			initialize: function () {
				var vw = this
				this.collection.on('all', function () {
					$l('TwitsView picked up on collection event')
					vw.R()
				})
			},
			R: function () {
				var vw = this
				vw.$el.E()
				vw.collection.each(function (md) {
					var twitV = new TwitView({
						model: md
					})
					vw.$el.A(twitV.R().el)
				})
			}
		})
		twits = new TwitsList()
		twitsV = new TwitsView({
			el: $.d(),
			collection: twits
		})
	}
// SERVER 
	TWIT00 = function () {
		$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
		$.f([$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post', function (ev) {
				ev.preventDefault()
				twits.create({
					un: $('#un').v(),
					sts: $('#sts').v()
				}, {
					success: function (doc) {
						$l('success')
						$l(doc)
					}
				})
			})])
		TwitView = Bb.V.x({
			tagName: 'p',
			events: {
				'click .edit': function (ev) {
					$.pD(ev);
					this.$('.sts').edFoc()
				},
				'click .delete': function (ev) {
					$.pD(ev);
					this.model.destroy()
				},
				'blur .sts': 'close',
				'keypress .sts': function (ev) {
					if ((ev.which) == 13) {
						this.close()
					}
				}
			},
			close: function () {
				var vw = this
				vw.model.set('sts', vw.$('.sts').T())
				vw.model.save()
				vw.$('.sts').ed(0)
			},
			R: function () {
				this.$el.E().A(
						$.sp().A($.a('[details]').K('details'),
								$.a('[edit]').K('edit'),
								$.a('[delete]').K('delete')),
						$.sp(this.model.get('un')).K('un'), ': ',
						$.sp(this.model.get('sts')).K('sts'))
				return this
			}
		})
		TwitsView = Bb.V.x({
			I: function () {
				var vw = this
				this.collection.on('all', function () {
					vw.R()
				})
				this.collection.fetch()
			},
			R: function () {
				var vw = this;
				vw.$el.E()
				vw.collection.each(function (md) {
					var twitV = new TwitView({model: md})
					vw.$el.A(twitV.R().el)
				})
			}
		})
		twits = new TwitsList()
		twitsV = new TwitsView({el: $.d(), collection: twits})
		//Bb.M.prototype.idAttribute = '_id'
	}
// video timelog:
// 2:50 makes tweet model 
// 6:50 tweet collection
// 11:35 ..lets make it interactive
// and let users send tweets..
// 16: finally makes function for form submit
// first the button makesa tweet
// and just adds it to the collection
//19:15
//.. now comes the fun part, rendering with views
//19:50 .. templates of course..
//v1 740 tangents off,,,
//1025 shows coll.first(2)
//1140  STARTS HTML (FORM)
//1600 ENDS TANGENT. defines form on submit fn.. it just:
// coll.add(new Tweet)
//1918  starts talking bout views
// but get this: template is just, literally: 2 spans
//2239 actually makes view
//3300 working
//3330 adds css ////////////////////
////////////////// testing..
////come back at 3420.. adds 2 a-links to template
// (so now, its :2 spans, 2 links)
//3520 EVENTS
//CONTENT EDITABLE
//3820 CLOSE(-EDIT)
//4000 KEUPRESS ENTER ALSO CLOSE EDIT.. NOT ME
//4400 DELETE
// //TWEETS.REMOVE(this.model) .. AND 'ON REMOVE;
// this.cl.on('add', this.render, this)
// this.cl.on('remove', this.render, this)
// SERVER 
	$s({$: {P: 10, B: 0, M: 10, fS: 20}, d: {C: 'z'}, p: {C: 'o', c: 'w'}, form: {C: 'g'}})
	$.f([$.lb('username'), $.ip().at('name', 'un').id('un'),
		$.lb('status'), $.ip().at('name', 'sts').id('sts'),
		$.bt('post', function (ev) {
			ev.preventDefault()
			twits.create({un: $('#un').v(), sts: $('#sts').v()})
		})])
	TwitView = Bb.V.x({
		tagName: 'p',
		events: {
			'click .edit': function (ev) {
				$.pD(ev);
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev);
				this.model.destroy()
			},
			'blur .sts': 'close',
			'keypress .sts': function (ev) {
				if ((ev.which) == 13) {
					this.close()
				}
			}
		},
		close: function () {
			var vw = this
			vw.model.set('sts', vw.$('.sts').T())
			vw.model.save();
			vw.$('.sts').ed(0)
		},
		R: function () {
			this.$el.E().A(
					$.sp().A($.a('[details]').K('details'),
							$.a('[edit]').K('edit'),
							$.a('[delete]').K('delete')),
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	TwitsView = Bb.V.x({
		initialize: function () {
			var vw = this
			this.collection.on('all', function () {
				vw.R()
			})
			this.collection.fetch()
		},
		R: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				var twitV = new TwitView({model: md})
				vw.$el.A(twitV.R().el)
			})
		}
	})
	twits = new TwitsList()
	twitsV = new TwitsView({el: $.d(), collection: twits})
	//Bb.M.prototype.idAttribute = '_id'
}
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
}
BB3 = BLOG = function () {
	//Bb.M.prototype.idAttribute = '_id'
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('Author'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.fn.td = function () {
		var td = $.td.apply(null, arguments)
		this.A(td)
		return td
	}
	$.fn.tds = function () {
		var g = G(arguments)
		var q = this
		_.e(g.A ? g.f : g, function (ch) {
			q.td(ch)
		})
		return q
	}
	$.ip.K = function (k) {
		return $.ip().K(k)
	}
	$tr.tds(
			$.ip.K('user-ip'),
			$.ip.K('url-ip'),
			$.ip.K('title-ip'),
			$.bt('Add', function () {
				blogs.create({
					user: $('.user-ip').V(),
					title: $('.title-ip').V(),
					url: $('.url-ip').V()
				})
			}).K('add-blog')
	)
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()
			)
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A(
					$.ip.K("user-update").val(user)
			)
			this.$('.title').E().A(
					$.ip.K("title-update").val(title))
			this.$('.url').E().A(
					$.ip.K("url-update").val(url)
			)// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		},
		delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
	blogs.fetch()
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
	$l(chapters.pluck('title'))
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