
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

function TWTmvc() {
	Tweet = _M({
		initialize: function () {
			$l('new Tweet model')
		},
		df: {un: 'fred', sts: 'sleeping'}
	})
	TweetsList = _C({
		url: '/tweets',
		model: Tweet
	})
	TweetView = _V({
		events: {
			'click .edit': function (ev) {
				$.pD(ev)
				this.$('.sts').edFoc()
			},
			'click .delete': function (ev) {
				$.pD(ev)
				tweets.remove(this.model)
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
			vw.$('.sts').ed(0)//.rmAt('contenteditable')
		},
		ren: function () {
			this.$el.E(
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[details]').K('details'),
					$.a('[edit]').K('edit'),
					$.a('[delete]').K('delete'),
					$.br()
			)
			return this
		}
	})
}

TWT0 = TWTPART1WORKS = $TWT$(function () {
	$l('twt00 tweet video part 1 good')
	form = $.f().A(
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post')
	)
	form.submit(function (ev) {
		//ev.preventDefault()
		var un = $('#un').val()
		var sts = $('#sts').val()
		var tweet = Tweet({un: un, sts: sts})
		tweets.add(tweet)
		$l(tweets.toJSON())
		return false
	})
	$.hr()
	div = $.d('y', 500, 200)
	Tweet = _M({df: {un: 'fred', sts: 'sleeping'}})
	TweetsList = _C({model: Tweet})
	tweets = TweetsList()
	tweets.add({un: 'zzzzzzzzz'})
	TweetView = _V({
		events: {
			'click .edit': function (ev) {
				ev.preventDefault()
				this.$('.sts').at('contenteditable', true).focus()
			},
			'click .delete': function (ev) {
				ev.preventDefault()
				tweets.remove(this.model)
			},
			'blur .sts': 'close'
		},
		
		close: function () {
			var sts = this.$('.sts').text()
			this.model.set('sts', sts)
			this.$('.sts').removeAttr('contenteditable')
		},
		
		model: Tweet(),
		
		tagName: 'div',
		
		ren: function () {
			this.$el.empty().A(
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[edit]').K('edit'), $.a('[delete]').K('delete')
			)
			
			return this
		}
	})
	
	TweetsView = _V({
		el: div,
		i: function () {
			var vw = this
			this.ren()
			this.collection.on('add', function () {
				vw.ren()
			})
			this.collection.on('remove', function () {
				vw.ren()
			})
		},
		collection: tweets,
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				vw.$el.A(TweetView({model: md}).ren().el)
			})
			return vw
		}
	})
	appView = tweetsView = TweetsView({
		collection: tweets
	})
	//
})

TWT=function(){

	$l("TWT video part 2...")
	Bb.Model.prototype.idAttribute = '_id'
	
	Twit= Bb.M.x({
		defaults: {author: 'jt', status: 'zzzzzzz'}
	})
	
	Twits = Bb.C.x({
		model: Twit,
		url: '/twits'
	})
}
TWITTEMP = function (fn) {
	$CSS(twtCss)
	form = $.f().A(
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post'))
	$.hr()
	div = $.d('y', 500, 200)
	Twit = M$({
		initialize: function () {
			$l('new Twit model')
		},
		defaults: {author: 'jy', status: 'zzzzzzz'}
	})
	TwitsList = C$({url: '/twits', model: Twit})
	TwitView = V$({
		model: new Twit,
		tagName: 'div',
		events: {
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
		ren: function () {
			this.$el.E(
					$.sp(this.model.get('un')).K('un'),
					': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[details]').K('details'),
					$.a('[edit]').K('edit'),
					$.a('[delete]').K('delete'),
					$.br()
			)
			return this
		},
		close: function () {
			var sts = this.$('.sts').text()
			this.model.set('sts', sts)
			this.$('.sts').removeAttr('contenteditable')
		}
	})
	TwitsView = V$({
		el: div,
		i: function () {
			var vw = this
			this.ren()
			this.collection.on('add', function () {
				vw.ren()
			})
			this.collection.on('remove', function () {
				vw.ren()
			})
		},
		collection: twits,
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				vw.$el.A(TwitView({model: md}).ren().el)
			})
			return vw
		}
	})
	twits = TwitsList()
	twits.add({un: 'zzzzzzzzz'})
	appView = twitsView = TwitsView({
		collection: twits
	})
	form.submit(function (ev) {
		//ev.preventDefault()
		var un = $('#un').val()
		var sts = $('#sts').val()
		var twit = Twit({un: un, sts: sts})
		twits.add(twit)
		$l(twits.toJSON())
		return false
	})
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
 
function server() {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	AVAILSRV = function () {

//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
}
 
Bb.M.prototype.idAttribute = '_id'
 
Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
	})
}
$tp = window['$tp'] || {} 
DIRECATMIN19 = function () {
	$CSS(CssOb);
	$.dI('wrapper', [
		$('<h1>').A('games directory').col('o'),
		$.dK('tools', [
			$('<h4>').col('g').A('search:'), $.br(),
			$('<input>').id('searchBox'), $.br(),
			$('<h5>').col('y').A('Filter:'), $.dI('filter'),
			$.dI('count')
		]),
		$.ulI('listing', [])
	])
	app = {m: {}, v: {}, r: {}, c: {}}
	app.m.Person = M$({
		defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
		initialize: function () {
			this.set('type', this.get('par') ? 'student' : 'parent')
		}
	})
	app.c.People = C$({
		model: app.m.Person,
		comparator: function (per) {
			return per.get('lN')
		}
	})
	app.i = function () {
		direc = new app.v.People(dirData)
		rtr = new app.r.Rtr()
		// Bb.h.start()
	}
	app.r.Rtr = Bb.R.x({
		routes: {
			'filter/:type': 'urlFilter'
		},
		urlFilter: function (type) {
			direc.filterType = type
			direc.trigger('change:filterType')
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.r().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.r()
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.r().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.r()
		}
	})
	app.i(dirData)
} 
 