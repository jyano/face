 
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