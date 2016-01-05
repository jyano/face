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
BB3 = BLOG = function () {
function alt(){
	BLOG0 = BLOGVID2WORKS = function () {
		$CSS({
			$: {M: 20},
			bd: {dp: 'fl'},
			d: {C: 'r', c: 'b'}
		})
		$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
		$thead = $.tH().a2($table)
		$thTr = $.tr().a2($thead).A(
				$.th('AuthoR'), $.th('Title'),
				$.th('Url'), $.th('action'))
		$tbody = $.tB().a2($table).K('blogs-list')
		$tr = $.tr().a2($thead)
		$.ip().a2($.td().a2($tr)).K('user-ip')
		$.ip().a2($.td().a2($tr)).K('title-ip')
		$.ip().a2($.td().a2($tr)).K('url-ip')
		$.bt('Add', function () {
			blogs.create({
				user: $('.user-ip').V(),
				title: $('.title-ip').V(),
				url: $('.url-ip').V()
			})
		}).K('add-blog').a2($.td().a2($tr))                                //
		BlogView = GenView.tr.extend({
			btGroup_: function () {
				return $.td.A(
						$.bt('Edit').K('edit-blog'),
						$.bt('Delete').K('delete-blog'),
						$.bt('Update').K('update-blog').none(),
						$.bt('Cancel').K('cancel').none())
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
				this.$('.user').E().A($.ip().K("user-update").val(user))
				this.$('.title').E().A($.ip().K("title-update").val(title))
				this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
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
			}, delete: function () {
				this.model.destroy()
			}
		})
		BlogsView = CollView.extend({subView: BlogView})
		blogs = new Blogs
		blogsView = new BlogsView({
			model: blogs,
			el: '.blogs-list'
		})
	}
	BLOG0 = BLOGVID2WORKS = function () {
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
		$.ip().a2($.td().a2($tr)).K('user-ip')
		$.ip().a2($.td().a2($tr)).K('title-ip')
		$.ip().a2($.td().a2($tr)).K('url-ip')
		$.bt('Add', function () {
			blogs.create({
				user: $('.user-ip').V(),
				title: $('.title-ip').V(),
				url: $('.url-ip').V()
			})
		}).K('add-blog').a2($.td().a2($tr))
		//
		BlogView = GenView.tr.extend({
			btGroup_: function () {
				return $.td.A(
						$.bt('Edit').K('edit-blog'),
						$.bt('Delete').K('delete-blog'),
						$.bt('Update').K('update-blog').none(),
						$.bt('Cancel').K('cancel').none())
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
				this.$('.user').E().A($.ip().K("user-update").val(user))
				this.$('.title').E().A($.ip().K("title-update").val(title))
				this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
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
			}, delete: function () {
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
		Bb.M.prototype.id = '_id'
	}}
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