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
BB4 = ROUT = function () {
	ct = $.d()
	_.e(['home', 'about'], function (o) {
		ct.A($nav(o))
		$mockPage(o)
		$('.' + o + '-nav').$(function () {
			rtr.N(o)
		})
	})
	$Rt({
		'': sh('home'), home: sh('home'),
		about: sh('about')
	}, '/box/rout')
	function sh(o) {
		return function () {
			$('.pg').hd()
			$('*').rmK('A')
			$('#' + o + '-pg').sh()
			$('.' + o + '-nav').K('A')
		}
	}
	
	$s({_A: {C: 'y', c: 'z'}})
}
BB5 = SAMP = function () {
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
BB6 = MCH = CHG = ONCHANGE = SIDEBAR = function () {
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
BB8 = EVENTS = BEAUTY = function () {
	dv = $.d('r', 200).A($.h1('hello'),
			bt = $.bt('-------'))
	Vw = Bb.V.x({
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'R',
			'mouseover': function () {
				dv.C($r())
			}
		},
		R: function () {
			$.C($r())
		}
	})
	new Vw({
		I: 1,
		el: dv
	})
}
BB9 = VD1 = BB7 = BVD = MVD = function () {
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
BB14 = COLLECTIONONADD = CLA = CLONADD = function () {
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB15 = XCHANGECOL = PROMPTCOLOR = function () {
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
BB18 = XDEFAULT = function () {
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
BB19 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
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
$Mk = function () {
	$mk = function () {
	}
	ipsum()
	mks()
	function mks() {
		$mk.strs = ['wallaby', 'Macropus', 'agilis',
			'Agouti', 'Dasyprocta', 'leporina']
		$mk.Doc = function (title, content) {
			title = title || $mk.l1()
			content = content || $mk.lI()
			return {
				title: title,
				content: content
			}
		}
		$mk.Docs = function (num) {
			var docs = []
			_.t(N(num, 27), function () {
				docs.push($mk.Doc())
			})
			return docs
		}
		$mk.docs = $mk.Docs(12)
		var Doc = $mk.Doc
		$mk.obs = [
			new Doc('title1', 'content1'),
			new Doc('title2', 'content2'),
			new Doc('title3', 'content3'),
			new Doc('title4', 'content4'),
			new Doc('title5', 'content5'),
		]
		$mk.ob = {
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
		$mk.ob = {
			ob: $mk.ob,
			eyes: 2,
			'secret nickname': null,
			obs: $mk.obs,
			strs: $mk.strs,
			likes: ['shopping', 'puking']
		}
	}
	
	function ipsum() {
		$mk.lI = function (n) {
			n = N(n, R(40))
			var str = _.sample($mk.strs)
			_.t(n, function () {
				str += ' ' + _.sample($mk.strs)
			})
			return str
		}
		$mk.l1 = function () {
			return $mk.lI(1) + $sa.S($sa.S('-') + $mk.lI(1))
		}
	}
}
$Sa = function () {
	$sa = function (a, b) {
		if (U(b)) {
			return _.partial($sa, a)
		}
		return _.sample(arguments)
	}
	$sa.S = $sa('')
}

$Sa()
$Mk()
//$mk.css = $s({h1: {C: 'o'}, li: {C: 'o'}, ul: {C: 'gray'}, d: {C: 'r'}, $: {B: '4px dashed pink', M: 20}})
$mk.$ = function () {
	$s($mk.css)
	return $
}
$mockPage = function (pageName) {
	return $.sp(pageName).id(pageName + '-pg').K('pg').fS(50)
}
  