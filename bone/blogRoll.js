C$$ = function (Md, ob) {
	if (S(ob)) {
		ob = {url: ob}
	}
	ob = ob || {}
	ob.md = ob.model = Md
	return C$(ob)
}
M$.D = function (df, ob1) {
	var ob = {D: df}
	return M$(_.x(ob, ob1 || {}))
}
function about() {
//  meb
 
//https://www.youtube.com/watch?v=a-ijUKVIJSw
//VIDEO ONE
// start 7:00
// div .container wraps all
//----- h1 in div
//------ add a table
//--thead ---tr ---th's title user url action
//--tbod? (in vid2)
//each 'blogRoll' is a tr
//inject trs into tbody
//9:15 MAKES BLOG MODEL
//defaults all: ''
//10:05 tests model
//11:30 makes blogs collection
//////////////////////////////////////////////////////
//VIDEO two:
//2:00 makes indiv blog model view
//8:00 starts on BlogsView with init fn, on 'add'
//8:40 makes render fn, empty $el, then each(this.model.toArray) <- blogs
// for each do what? append a rendred view el (of it)
//11:00
// make new row in thead (tbody is for blog views (blogs))..
// put 3 inputs, 1 bt.. in td's in the new tr
//12:30 make ADD functionality
// var blog = new Blog({**data from ip fields**)
//13:30 console log test
//14:20 
// blogs.add(blog)
//14:45 instantiate new BlogsView AND DONE (he fixes errors; you not :))
//////////////////////////////
//VIDEO FOUR:
// 0:40 INSTALL NODE
// 1:10 INSTALL EXPRESS (AFTER CREATING PACKAGE.JS FILE)
// 2:50 MAKES A SERVER.JS FILE AND GOES INTO IT...
// 3:10 makes express server 
// 3:40 static files ('/public')
// 4:40 actually makes the 'public' directory and moves his files into it (index.html, scripts.js)
// then makes a js folder, and puts his scripts folder in THAT
// then changes the path of that file in his index.html file
// 6:15.. finally, he tests just the originally functionallity working on local host
// 7:00 SETUP MONGO
// talks about /data/db and file permissions
// 8:50 makes shortcuts with alias in separate file ..  and shows how!!!!
// 9:30 runs mongod
//  10:00 instals mongoose finally
// 11:00 REAL START? connects to mongoose
// monodb://localhost/blogroll
// ** creates db automatically and collection too
// 11:45 FINALLY MAKES THE BLOG SCHEMA
// 12:30  FINALLY MAKES THE BLOG MODEL 
//12:50 TEST IT OUT  makes new blog and calls SAVE
//uses 'mongo' to check test in terminal
//VIDEO FIVE:
// 3:50 switches finally to server side code
}


Blog = M$.D({user: '', title: '', url: ''})

Blogs = C$$(Blog, 
		'http://localhost/$blogRoll$')

 

$.td.A=function(){

	var td = $.td()
	var g=G(arguments)
	_.e(g,function(q){
	td.A(q)
	})
	return td
}
$.bt.K=function(){
var g=G(arguments)
	var bt = $.bt.apply(null, g.r)
	bt.K(g.f)
	return bt
}





BlogView = V$({
	model: new Blog, 
	tagName: 'tr',
	btGroup_ : function(){
		return $.td.A(
			$.bt('Edit').K('edit-blog'),
			$.bt('Delete').K('delete-blog'),
			$.bt('Update').K('update-blog').none(),
			$.bt('Cancel').K('cancel').none())},
	G: function (ob) {var vw=this
		return [
			$.td.A($.sp(ob.user).K('user')),
			$.td.A($.sp(ob.title).K('title')),
			$.td.A($.sp(ob.url).K('url')),
			vw.btGroup_()]},
	R:  function () {var vw = this
		_.e( vw.G(vw.J()),
		function (el) { vw.A(el) })
		return vw
	},
	E: {
		'click .edit-blog': 'edit',
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'},
	
	
	
	
	edit: function () {
		var vw = this
		vw.$('.edit-blog').hide()
		vw.$('.delete-blog').hide()
		vw.$('.update-blog').show()
		vw.$('.cancel').show()
		var user = vw.$('.user').html()
		var title = vw.$('.title').html()
		var url = vw.$('.url').html()
		this.$('.user').E().A(
				$.ip().K("form-control user-update").val(user))
		this.$('.title').E().A(
				$.ip().K("form-control title-update").val(title))
		this.$('.url').E().A(
				$.ip().K("form-control url-update").val(url))
		// use .h( or .H( instead of E().A(
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
		blogsView.ren()
	},
	delete: function () {
		this.model.destroy()
	}
})

 


BlogsView = Bb.V.x({
	collection: blogs = tp$$ = tps = new Blogs(),
	el: '.blogs-list',
	initialize: function () {
		var vw = this, cl = vw.collection
		this.collection.on('add', this.ren, this)
		this.collection.on('change', function () {
			setTimeout(function () {
				vw.ren()
			}, 30)
		}, vw)
		this.collection.on('remove', this.ren, this)
		/*	this.collection.fetch({
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
	ren: function () {
		var vw = this
		vw.$el.html('')
		vw.collection.each(function (blog) {
			var blogView = new BlogView({model: blog})
			vw.$el.A(blogView.R().el)
		})
		return this
	}
})


BLOG = BLOGVID2WORKS = function () {
	
	$h1 = $.h1('Yano Blog App ' + M.r())
	
	$ctDiv = $.dK('ct').A($h1)
	
	$table = $.t().a2($ctDiv)//.K('table')
	
	$thead = $.tH().a2($table)
	
	$thTr = $.tr().a2($thead).A(
			$.th('AuthoR'), $.th('Title'),
			$.th('Url'), $.th('action')
	)
	
	$tbody = $.tB().a2($table).K('blogs-list')
	
	
	$tr = $.tr().a2($thead)
	
	$.ip().a2($.td().a2($tr))
			.K('user-ip')
	
	$.ip().a2(
			
			$.td().a2( $tr )
			
	).K('title-ip')
	
	$.ip().a2($.td().a2($tr)).K('url-ip')
	
	$.bt('Add', function () {
		
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
		
		
	}).a2($.td().a2($tr))//K('btn btn-primary add-blog')

	
	tp__ = tpsV = blogsView = new BlogsView({})
	
	Bb.M.prototype.idAttribute = '_id'

}



 