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
KO1 = KODEL = DELETEWORKS = ADD3 = ULP = function () {
	ok(function () {
		$s({
			bd: {C: 'x', c: 'y'}, $: {
				C: 'n', c: 'z',
				M: 5, fS: 42
			}, sp: {C: 'o', c: 'z'}
		})
		cl$('add', 'ADD')
		e$('people', $.d([
			'name: ',
			t$('$index'), t$('name'),
			cl$('$root.rm', 'DELETE')
		]))
		cl$('add', 'ADD')
		var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.rm = function () {
			o.people.remove(this)
		}
		return o
	}())
}
KO2 = ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			t$('f'),
			' ',
			t$('l')
	)]).e$('peep')
	vm = {
		peep: $oA([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}
		])
	}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
KO3 = LST = function (n, ch) {
	LST1 = function (n, ch) {
		$s({
			_sl: {
				fS: 16,
				C: 'i', c: 'j',
				position: 'relative',
				display: 'inline-block',
				P: 66,
				h: '60%'
			}
		})
		$.f().A('Add item:',
				$.ip().tI$('itemToAdd'),
				$.sm('Add').en$('itemToAdd().length > 0')
		).sm$('addItem')
		$.p('Your values: ')
		$.sl().at({multiple: "multiple", height: 5})
				.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
		$.d([
			$.bt('Remove').b({cl: 'removeSelected', en: 'selectedItems().length > 0'}),
			$.bt('Sort').b({cl: 'sortItems', en: 'allItems().length > 1'})
		])
		var BetterListModel = function () {
			this.itemToAdd = ko.observable("");
			this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
			this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
			this.addItem = function () {
				$l('add')
				if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
				// Prevent blanks and duplicates
					this.allItems.push(this.itemToAdd());
				this.itemToAdd(""); // Clear the text box
			};
			this.removeSelected = function () {
				this.allItems.removeAll(this.selectedItems());
				this.selectedItems([]); // Clear selection
			};
			this.sortItems = function () {
				this.allItems.sort();
			};
		}
		ok(vm = new BetterListModel());
	}
	$s({
		_sl: {
			fS: 16,
			C: 'i', c: 'j',
			position: 'relative',
			display: 'inline-block',
			P: 66,
			h: '60%'
		}
	})
	$.f().A('Add item:',
			$.ip().tI$('itemToAdd'),
			$.sm('Add').en$('itemToAdd().length > 0')
	).sm$('addItem')
	$.p('Your values: ')
	$.sl().at({multiple: "multiple", height: 5})
			.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
	$.d([
		cl$('removeSelected', 'Remove')
				.en$('selectedItems().length > 0'),
		cl$('sortItems', 'Sort').en$('allItems().length > 1')
	])
	var BetterListModel = function () {
		this.itemToAdd = ko.observable("");
		this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
		this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
		this.addItem = function () {
			$l('add')
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
			// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		}
		this.removeSelected = function () {
			$l('rm')
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		}
		this.sortItems = function () {
			$l('sort')
			this.allItems.sort();
		}
	}
	ok(vm = new BetterListModel());
}
KO4 = TBE = function () {
	$.t([$.tH().A($.tr().A(
			$.th().A('First name'),
			$.th().A('Last name')
	)),
		$.tB().e$('people').A(
				$.tr().A($.td().t$('fn'),
						$.td().t$('ln')))])
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KO5 = TBTR = function () {
	$.bd().fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.td().t$('l')]))
	$.t().e$('peep').A(
			$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tr() [
					$.tr([$.td().t$('f'),
						', ', $.td().t$('l')])])
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
KO6 = CSSDATACLICK = KNOCKS = function () {
	$.ul().K('fs').e$("fs").A($.li().b(
			"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
	))
	MVM = function () {
		var o = {}
		o.fs = ['I', 'A', 'Se', 'Sp']
		o.chFI = ko.o()
		o.gtf = function (f) {
			o.chFI(f)
		}
		return o
	}
	ok(MVM())
}
KO7 = BHTML = HTM = function () {
	init()
	$.d().fS(100).h$('htmlContent')
	ok(vm = {htmlContent: $o('wait..')})
	_.in(2, function () {
		vm.htmlContent(
				"<em>report: <a href=playboyUrl>here</a>.</em>"
		)
	})
	function init() {
		playboyUrl = 'http://www.playboy.com'
	}
}
KO8 = ATTR = function () {
	$.a('report').fS(100).at$('{href: urlName, title:titleName}')
	ok({
		urlName: $o("http://www.hustler.com"),
		titleName: $o("statistics")
	})
}
KO9 = IIFI = function () {
	$.cb().b('checked', 'dispMs')
	$.sp('Disp ms')
	$.d().if$('dispMs').A(
			$.p('Here is a message. Astonishing'))
	ok(vm = {dispMs: $o(0)})
}
KO10 = ENAB = PHONENUMBER = function () {
	$s({$: {M: 10}})
	$.sp(['phone #:', v$('num').en$('hasPhone')])
	$.sp([ch$('hasPhone'), 'I have phone'])
	ok({
		num: '',
		hasPhone: $o(0)
	})
}
KO11 = TEXT = function () {
	t$('textVal')
	ok(vm = $Ob('textVal', $o('startValue')))
	_.in(4, function () {
		vm.textVal('changed the view model!')
	})
}
KO12 = WITH = function () {
	$.d([
		$.h1().t$('city'),
		$.p([
			'lat:', t$('lat'),
			'lon:', t$('lon')
		]).b('w', 'xy')
	])
	ok({
		city: "London",
		xy: {lat: 51, lon: -0.1}
	})
}
KO13 = VIS = VISABLE = function () {
	$.d().A('ALWAYS HERE!')
	$.d().A('see me if true!').vs$('shouldIBeVisible')
	ok(vm = {shouldIBeVisible: $o(1)})
	_.in(4, function () {
		vm.shouldIBeVisible(0)
		_.in(2, function () {
			vm.shouldIBeVisible(1)
		})
	})
}
KO14 = SMCL = function () {
	$$s({M: 10, C: 'r', c: 'w'})
	$.bt('makeDiv').cl$('newDiv')
	vm = {
		newDiv: function () {
			$.C($r())
			$.d().A("i'm a freaking div").C($r())//.cl$('name')
		}
	}
	ok(vm)
}
KO15 = FIF = function () {
	$.A(
			$('<label><input type="checkbox" data-bind="checked: displayMessage" /> Display message</label>').C('r'),
			$(' <div data-bind="if: displayMessage">Here is a message. Astonishing.</div>').C('b')
	)
	_.in(function () {
		ok({
			displayMessage: $o(false)
		});
	})
}
KO16 = CPD = COMPUTED = function () {
	$s({$: {P: 5, c: 'o', fS: 50}})
	$.d().A(
			$.d().A('F: ', $.sp().t$('f')),
			$.d().A('L: ', $.sp().t$('l')),
			$.d().A('FL: ', $.sp().t$('fl')),
			$.sp().A('F: ', $.ip().v$('f')),
			$.d().A('L: ', $.ip().v$('l')), //.id('l'), 
			$.bt('click me').cl$('capL')
	).C('b').pad(20)
	vm = {
		f: $o('jason'),
		l: $o('yanofski'),
		capL: function () {
			this.l(this.l().toUpperCase())
		}
	}
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	ok(vm)
}
KO17 = KIP = function () {
	$.p('Login name:').A($.ip().tI$('un'))
	//$.p('Login name:').A($.ipTi('un'))
	$.p('Pw:').A($.pw().tI$('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	//$.p('Pw:').A($.pwTi('pw'))
	// $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A('vm: ', $.pre().t$('ko.toJSON($root, null, 2)'))
	ok(vm = {un: $o(''), pw: $o('abc')})
}
WD1 = CALC = function () {
//http://code.tutsplus.com/courses/jquery-ui-301-the-widget-factory/lessons/the-widget-method
	ob = {
		_setOptions: function () {
			this._superApply(arguments)
		},
		_setOption: function (key, val) {
			this._super(key, val)
			if (key == 'buttons') {
				this.shell
						.fi('button').rm()
				this._createButtons()._renderMarkup()
			}
			else if (key == 'disabled') {
				this.shell.fi('button')
						.button('option', key, val)
			}
		},
		_create: function () {
			var wg = this
			var q = wg.element
			q.K('jy-clc')
			wg._createWrapper()
			wg._createButtons()
			wg._renderMarkup()
			wg._on({'click button': this._handleClick})
			wg._setup()
		},
		_setup: function () {
			this.curDp = [];
			this.runDp = [];
			this.numIp = false;
			return this
		},
		_createWrapper: function () {
			var wg = this
			this.shell = $('<div>').id('jy-clc-shell').A(
					$.dI('jy-clc-displays').A(
							$.dK('jy-clc-clculation'),
							$.dK('jy-clc-display').text(0)
					)
			)
			if (!this.options.showOnCreate) {
				this._hide(this.element, this.options.hide, function () {
					wg._trigger('hidden')
				})
			}
		},
		_createButtons: function () {
			var wg = this, ct = $.d().a2(this.shell)
			_.e(wg.options.buttons, function (ob, i) {
				var trgRes = wg._trigger('beforeAddButton', null, ob), bt
				if (!trgRes) {
					return
				}
				bt = $('<button>')
				bt.text(ob.l)
				bt.button()
				bt.a2(ct)
				if (ob.k) {
					bt.K(ob.k)
				}
				if (S(ob.a)) {
					bt.da('action', ob.a)
				}
				else if (F(ob.a)) {
					var fnN = 'custom' + i
					wg[_ + fnN] = ob.a
					bt.da('action', fnN)
				}
			})
			return wg
		},
		_renderMarkup: function () {
			this.shell.a2(this.element)
		},
		options: {
			buttons: [
				{l: 'MR'}, {l: 'MS'}, {l: 'MC'}, {l: ':)'},
				{l: 'Clear', a: 'clear'},
				{l: 'CE', a: 'clearEntry'},
				{l: '*', a: 'operator'},
				{l: 7, a: 'number'},
				{l: 8, a: 'number'}, {l: 9, a: 'number'},
				{l: '+', a: 'operator'},
				{l: 4, a: 'number'},
				{l: 5, a: 'number'}, {l: 6, a: 'number'},
				{l: '-', a: 'operator'},
				{l: 1, a: 'number'},
				{l: 2, a: 'number'}, {l: 3, a: 'number'},
				{l: '/', a: 'operator'},
				{l: 0, a: 'number'},
				{l: '.', a: 'dot'},
				{l: '=', a: 'equals'}
			],
			showOnCreate: false,
			show: true, hide: true,
			beforeAddButton: null,
			shown: null,
			hidden: null
		},
		show: function () {
			var wg = this
			this._show(this.element, this.options.show, function () {
				wg._trigger('shown')
			})
		},
		hide: function () {
			var wg = this
			this._hide(this.element, this.options.hide, function () {
				wg._trigger('hidden')
			})
		},
		_destroy: function () {
			var q = this.element
			q.rK('jy-clc')
			q.E()
		},
		_a2CurDp: function (a) {
			this.curDp.push(a);
			this._udDp()
			return this
		},
		_clear: function (e, ui) {
			this._setup()
			this._udDp()
			this._udRunDp()
			this.element.fi('.jy-clc-display').tx(0)
		},
		_clearEntry: function (e, q) {
			var wg = this, q = this.element
			wg.curDp = []
			wg._udDp()
		},
		_handleClick: function (e) {
			var bt = $(e.target).closest('button'),
					fn = bt.da('action')
			if (fn) {
				this['_' + fn](e, bt)
			}
		},
		_number: function (e, ui) {
			this.curDp.push(ui.text())
			this._udDp()
			this.numIp = true
		},
		_dot: function (e, ui) {
			var hasDot = false,
					len = _.z(this.curDp)
			if (!len) {
				this.curDp.push('0')
			}
			while (--len >= 0) {
				if (this.curDp[len] == '.') {
					hasDot = true;
					break;
				}
			}
			if (hasDot) {
				return false
			}
			else {
				this._a2CurDp('.')
				//this.curDp.push('.');this._udDp()
			}
		},
		_operator: function (e, o) {
			var wg = this,
					q = wg.element,
					curDp = wg.curDp, runDp = wg.runDp,
					dpEl = q.fi('.jy-clc-display'), arr, str, len, newStr
			//if someone clicks an op-bt before any num-bt clicked,
			//both curDp and runDp arrays will be empty.
			//so if they ARE empty, then we can push
			//whatever is on the 'main' display into current display
			//(at this point it would just be '0'..
			//but later on it could be calculation result)
			if (!_.z(curDp) && !_.z(wg.runDp)) {
				curDp.push(
						dpEl.tx()// <- whatever is currently being displayed
				)
			}
			//if it ends with a trailing dot, remove it
			else if (_.l(curDp) == '.') {
				curDp.pop()
			}
			//now we want to update the running display (above main display)
			//with buttons pressed so far
			//(we want to do this either if running display is empty
			// or numIp is true)
			if (!_.z(runDp) || wg.numIp) {
				arr = [curDp.join(''), ' ', o.tx(), ' ']
				//we space out operator for two reasons:
				//1)looks better
				//2)later on, we'll want to break this array up based on the spaces,
				//so that we can easily seperate out the nums and actual operators
				str = arr.join('')
				runDp.push(str)
			}
			//there's one more condition we need to check:
			//if somone one types two operators in a row
			//we want to replace existing operator with one clicked second
			//check if numIp is false   (set to false when operator bt clicked)
			else if (!wg.numIp) {
				len = _.z(runDp)
				newStr = runDp[len - 1]
						.replace(/[\*\-\+\/]/, o.tx())
				runDp.pop()
				runDp.pop(newStr)
			}
			wg.numIp = false
			wg._udRunDp()
			this._clculate()
		},
		_equals: function (e, o) {
			this._clculate(true)
		},
		_udDp: function (reset) {
			var wg = this, dpEl, dpVal
			if (notTooLong(this)) {
				dpEl = this.element.fi('.jy-clc-display')
				if (!_.z(wg.curDp)) {
					dpEl.tx(0)
				}
				else {
					dpVal = wg.curDp.join('');
					dpEl.tx(dpVal)
				}
				if (reset) {
					this.curDp = []
				}
			}
			function notTooLong(wg) {
				return wg.curDp.length < 18
			}
		},
		_udRunDp: function () {
			var wg = this,
					q = wg.element,
					runDp = wg.runDp,
					dpEl = q.fi('.jy-clc-clculation')
			dpEl.tx(runDp.join(''))
			wg.curDp = []
		}
	}
//https://www.youtube.com/watch?v=yuqX4oarOwc&list=PLz_6dB4PItBGBrFeexo-BzO9JHDAhjnQq
	ob._clculate = function (final) {
		var wg = this, q = wg.element,
				runDp = wg.runDp, tmp, trm, ops, res, run, dp, sum
		if (final) {
			sum = [
				q.fi('.jy-clc-clculation').tx(),
				q.fi('.jy-clc-display').tx()
			].join('')
			wg.curDp = [seqClc(sum)]
			wg._udDp()
			wg.runDp = []
			wg.numIp = false
			wg._udRunDp()
		}
		else if (_.z(runDp) > 1) {
			tmp = runDp.pop()
			trm = tmp.replace(/\s[\+\-\*\/']\s/, '')
			runDp.push(trm)
			res = seqClc(runDp.join(''))
			wg.curDp = [res]
			runDp.pop()
			runDp.push(tmp)
			wg._udDp(true)
		}
		function seqClc(str) {
			var ops = {
						'+': function (x, y) {
							return x + y
						},
						'-': function (x, y) {
							return x - y
						},
						'*': function (x, y) {
							return x * y
						},
						'/': function (x, y) {
							return x / y
						}
					},
					sumA = str.split(' '),
					left = +sumA[0],
					len = _.z(sumA),
					x
			for (x = 1; x < len; x = x + 2) {
				left = ops[sumA[x]](
						left, +sumA[x + 1]
				)
			}
			return left
		}
	}
	$.wg('jy.clc', ob)
	buttons = [{l: 8, a: 'number'}, {l: 9, a: 'number'}, {l: '+', k: 'jy-clc-plus', a: 'operator'},
		{l: 4, k: 'jy-clc-clearfix', a: 'number'}] //{l:'Special', a:function(e,ui){$l('special clear!'+ ui)}}
	$s({bt: {w: 100, h: 120}, '.jy-clc-display': {fS: 50, c: 'r'}})
	$.a('hide').$(function () {
		$('#clc').clc('hide')
	})
	$.a('show').$(function () {
		$('#clc').clc('show')
	})
	$.a('change').$(function () {
		$('#clc').clc('option', 'buttons', buttons)
	})
	$.a('disabled').$(function () {
		$('#clc').clc('option', 'disabled', true)
	})
	$.a('disable').$(function () {
		$('#clc').clc('disable')
	})
	$.a('enabled').$(function () {
		$('#clc').clc('option', 'disabled', false)
	})
	$.a('enable').$(function () {
		$('#clc').clc('enable')
	})
	d = $.dI('clc').C('s')
	$('#clc').clc({
		//buttons:buttons,
		shown: function () {
			$Ms('shown')
		},
		hidden: function () {
			$Ms('hidden..')
		},
		beforeAddButton: function (ev, ob) {
			if (ob.l == 'MR' || ob.l == 'MS' || ob.l == 'MC') {
				return false
			}
		},
		showOnCreate: true,
		show: true
	})
	$('a').button()
}
WD2 = SLI = SLIDES = function () {
	$Ms('SLIDES')
	$.ul([
		$.li('asdf').data('price', '23.23'),
		$.li('bsdf').data('price', '2.23'),
		$.li('xsdf').data('price', '213.23'),
		$.li('dsdf').data('price', '233'),
		$.li('asdf').data('price', '3.23')
	]).id('cheeses')
	$.dI('reg')
			.A('One pound of each would cost',
			$.sp().id('total')
	)
	total = $("#total")
	cheeses = $("#cheeses")
	reg = $("#reg")
	price = $.sp()
	$.bt('activate', function () {
		if (cheeses.is(":aj-flb")) {
			alert('cheese is!')
			return cheeses.flb("destroy")
		}
		cheeses.flb({
			k: "cheese",
			create: function () {
				reg.K("ui-widget-header cheese").sh()
			},
			filtered: function (ev, ui) {
				var t = 0
				ui.visible.each(function () {
					t += _.pF($(this).da("price"))
				})
				total.T(t.toFixed(2))
			},
			setOption: function (e, ui) {
				ui.option === "k" && reg.tK([ui.original, ui.current].join(' '))
			},
			hover: function (e, ui) {
				if (e.originalEvent.type === "mouseenter") {
					price.text(" - " + ui.hovered.data("price") + " per lb").a2(ui.hovered)
				}
				else {
					price.detach()
				}
			}
		})
		cheeses.on("flbdestroy", function (e, ui) {
			reg.rK("ui-widget-header " + ui.op.k).hd()
		})
		cheeses.flb("filter")
		_.in(3, function () {
			$.C('r')
			cheeses.flb("option", "k", "cheesePlease")
		})
	}).button({
		icons: {primary: "ui-icon-search"}
	})
}
WD3 = CWID = function () {
	$s({
		_col: {
			fS: 20, position: 'relative',
			w: 75, h: 75
		},
		_changer: {
			fS: 10, position: 'absolute',
			right: 0, bottom: 0
		}
	})
	$.dK('w1').A('color me')
	$.dK('w2').A('color me')
	$.dK('w3').A('color me')
	$(".w1").colorize()
	$(".w2").colorize({
		red: 60,
		blue: 60
	})
	// initialize with custom green value
	// and a random callback to allow only colors with enough green
	$(".w3").colorize({
		green: 128, random: function (event, ui) {
			return ui.green > 128
		}
	})
	function bts() {
		$.bt('Toggle disabled option', function () {
			// use the custom selector created for each widget to find all instances
			// all instances are toggled together,
			// so we can check the state from the first
			if ($(":custom-colorize").colorize("option", "disabled")) {
				$(":custom-colorize").colorize("enable")
			}
			else {
				$(":custom-colorize").colorize("disable")
			}
		})
		$.bt('Go green', function () {
			
			// click to set options after initialization
			var green = {red: 64, green: 250, blue: 8}
			$(":custom-colorize").colorize("option", green)
		})
	}
	
	bts()
}
