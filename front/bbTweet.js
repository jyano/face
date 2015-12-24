
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
common()
function common() {
	_VIEWS = function () {
		Ap.V.Avail = Bb.V.x({
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
		Ap.V.Avails = Bb.V.x({
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
	_COMMON = function () {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		_VIEWS()
	}
	$AVA$ = AVAILCOMMON = function () {
		_COMMON()
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
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
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
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
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
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
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
	AVAIL1 = function () {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({c: qiv('newAvail')}).save()
			v.render()
		})
		$.d().id('availsDiv')
		Ap.T.Avail = function (model) {
			return $._d().W(400).H(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = _M({urlRoot: '/avail'})
		Ap.C.Avails = _C({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = _V({
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
				this.$el.find('#avail').ed(1)
			}
		})
		Ap.V.Avails = _V({
			el: '#availsDiv',
			I: function () {
				this.ren()
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
}
AVAIL = function () {
	f = $M({
		defaults: {prop: 3},
		test: function () {
			$l(this.get('prop'))
		},
		test2: function (a) {
			var prop = this.get('prop')
			$l('prop: ' + prop)
			return prop
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	boneSetup()
	avs = Ap.C.Avails()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	Ap.V.Avails = $$V({
		el: '#availsDiv',
		i: function () {
			this.r()
		},
		r: function () {
			var t = this;
			t.collection.fetch({
				success: function () {
					t.q.H('');// t.$el.html('')
					t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				}
			})
		}
	})
	v = Ap.V.Avails({
		collection: avs
	})//.render()
	//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
}
function boneSetup() {
	Ap.M.Avail = $$M({urlRoot: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.V.Avail = $$V({
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
	Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
}
function status() {
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
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
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
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
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
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
	f = $M({
		defaults: {prop: 3},
		test: function () {
			$l(this.get('prop'))
		},
		test2: function (a) {
			var prop = this.get('prop')
			$l('prop: ' + prop)
			return prop
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	Ap.M.Avail = $$M({urlRoot: '/avail'})
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.V.Avail = $$V({
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
	Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
	avs = Ap.C.Avails()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	Ap.V.Avails = $$V({
		el: '#availsDiv',
		i: function () {
			this.r()
		},
		r: function () {
			var t = this;
			t.collection.fetch({
				success: function () {
					t.q.H('');// t.$el.html('')
					t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
				}
			})
		}
	})
	v = Ap.V.Avails({
		collection: avs
	})//.render()
//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted',
			function () {
				alert('modDel')
			})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
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
	AVAILold = function () {
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
	v = Ap.V.Avails({
		collection: avs
	})//.render()
//v=Ap.V.Avails({cl:avs})
	v.on('modelDeleted',
			function () {
				alert('modDel')
			})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
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
	AVAIL1OLD = function () {
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
	AVAILOLD = function () {
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
}
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
function old() {
	AVAIL = function () {
		$.x('x');
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
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
		Ap.V.Avails = Bb.V.e({
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
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
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
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
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
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
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
	AVAIL = function () {
		AVAIL = function () {
			z()
			f = $M({
				defaults: {prop: 3},
				test: function () {
					$l(this.get('prop'))
				},
				test2: function (a) {
					var prop = this.get('prop')
					$l('prop: ' + prop)
					return prop
				},
				happy: function (a) {
					this.test2(a)
				}
			})
			Ap.M.Avail = $$M({urlRoot: '/avail'})
			Ap.T.Avail = function (model) {
				return $.d('g', 400, 100).mar(20).A(
						$.h4(model.g('c')).id('avail').col('y', 'r'),
						$.br(),
						$.sp('delete').id('deleteAvail'),
						$.sp(' '), $.sp('edit').id('editAvail'),
						$.sp(' '), $.cb().id('selAvail')
				)
			}
			Ap.V.Avail = $$V({
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
			Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
			avs = Ap.C.Avails()
			avs.on('destroy', function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
			Ap.V.Avails = $$V({
				el: '#availsDiv',
				i: function () {
					this.r()
				},
				r: function () {
					var t = this;
					t.collection.fetch({
						success: function () {
							t.q.H('');// t.$el.html('')
							t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
							t.collection.each(function (m) {
								t.$el.A(Ap.V.Avail({model: m}).render().el)
								return t
							}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
						}
					})
				}
			})
			v = Ap.V.Avails({
				collection: avs
			})//.render()
			//v=Ap.V.Avails({cl:avs})
			v.on('modelDeleted',
					function () {
						alert('modDel')
					})
			$.ip('new avail').id('newAvail').A()
			$.bt('ok', function () {
				Ap.M.Avail({
					c: $('#newAvail').v()
				}).save()
				m.on('destroy', function () {
					alert('i am the model and i was destroyed')
				})
				v.render()
			}).A()
			$.dI('availsDiv')
		}
		$.x('x');
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
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
		Ap.V.Avails = Bb.V.e({
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
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
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
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
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
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
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
	AVAIL = function () {
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
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
		Ap.V.Avails = Bb.V.e({
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
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
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
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
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
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
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
//missing parts?:
	AVAIL = function () {
		f = $M({
			defaults: {prop: 3},
			test: function () {
				$l(this.get('prop'))
			},
			test2: function (a) {
				var prop = this.get('prop')
				$l('prop: ' + prop)
				return prop
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		Ap.M.Avail = $$M({urlRoot: '/avail'})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.V.Avail = $$V({
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
		Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
		avs = Ap.C.Avails()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		Ap.V.Avails = $$V({
			el: '#availsDiv',
			i: function () {
				this.r()
			},
			r: function () {
				var t = this;
				t.collection.fetch({
					success: function () {
						t.q.H('');// t.$el.html('')
						t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
					}
				})
			}
		})
	}
}
Bb.M.prototype.idAttribute = '_id'
function html() {
	$h1 = $.h1('Yano Blog App ' + M.r())
	$ctDiv = $.dK('ct').A($h1)
	$table = $.t().a2($ctDiv)//.K('table')
	$thead = $('<thead>').a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('AuthoR'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $('<tbody>').a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.ip().a2($.td().a2($tr)).K('form-control user-ip')
	$.ip().a2($.td().a2($tr)).K('form-control title-ip')
	$.ip().a2($.td().a2($tr)).K('form-control url-ip')
	$.bt('Add', function () {
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
	}).a2($.td().a2($tr))//K('btn btn-primary add-blog')
}
$.fn.none = function () {
	return this.css('display', 'none')
}
BLOG = BLOGROLL = function () {
	html()
	Blog = Bb.M.x({df: {user: '', title: '', url: ''}})
	Blogs = Bb.C.x({md: Blog, url: '/api/blogs'})
	Blog_ = V$({
		model: new Blog,
		genCh: viewOb.generateChildren = function (ob) {
			ob = ob || {};
			var userIp = $.sp(ob.user).K('user')
			var titleIp = $.sp(ob.title).K('title')
			var urlIp = $.sp(ob.url).K('url')
			return [
				$.td(userIp),
				$.td(titleIp),
				$.td(urlIp), $.td().A(
						$.bt('Ed').K('ed-blog')//.K('btn btn-warning')
						, $.bt('De').K('de-blog')//.K('btn btn-danger')
						, $.bt('Up').none().K('up-blog')//.K('btn btn-success')
						, $.bt('Ca').none().K('ca-blog')//.K('btn btn-danger')
				)]
		},
		tagName: 'tr',
		ren: function () {
			var vw = this
			var adultSelf = vw.md.tJ()
			var ch = vw.genCh(adultSelf)
			_.e(ch, function (el) {
				el.a2(vw.$el)
			})
			return vw
		},
		events: {'click .ed': 'ed', 'click .up': 'ud', 'click .ca': 'ca', 'click .de': 'de'},
		ed: function () {
			var vw = this;
			switchBts()
			vw.$('.user').E($.ip().K("user-up")//.K("form-control")
					.val(vw.$('.user').h()))
			vw.$('.title').E($.ip().K("title-up")//.K("form-control")
					.val(vw.$('.title').h()))
			vw.$('.url').E($.ip().K("url-up")//.K("form-control")
					.val(vw.$('.url').h()))
			function switchBts() {
				vw.$('.ed').hd()
				vw.$('.de').hd()
				vw.$('.up').sh()
				vw.$('.ca').sh()
			}
		},
		ud: function () {
			var md = this.model
			md.set('user', $('.user-up').v())
			md.set('title', $('.title-up').v())
			md.set('url', $('.url-up').v())
			md.sv(null, {
				suc: function () {
					$l('suc up!')
				}
			})
		},
		ca: function () {
			blogs_.ren()
		},
		de: function () {
			this.md.des()
		}
	})
	Blogs_ = V$({
		cl: blogs = tp$$ = tps = new Blogs(),
		el: '.blogs-list',
		_: function () {
			var vw = this
			var cl = vw.collection
			cl.oA(this.ren, this)
			cl.oCh(function () {
				setTimeout(function () {
					vw.ren()
				}, 30)
			}, vw)
			cl.oRm(this.ren, this)
			cl.fet({
				success: function (docs) {
					if (docs) {
						_.e(docs.tJ(), function (doc) {
							$l('blog _id: ' + doc._id)
						})
					}
				}//, err: function () {$l('failed to get blogs!')}
			})
		},
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.cl.e(function (blog) {
				vw.$el.A((new Blog_({
					model: blog
				})).ren().el)
			})
			return vw
		}
	})
	blogs_ = new Blogs_
}
function about() {
//  meb
	BLOGVID2WORKS = function () {
		html();
		Blog = Bb.M.x({defaults: {user: '', title: '', url: ''}})
		Blogs = Bb.C.x({
			model: Blog,
			url: 'http://localhost/$blogRoll$'
		})
		viewOb = {model: new Blog, tagName: 'tr'}
		viewOb.genCh = viewOb.generateChildren = function (ob) {
			ob = ob || {};
			var userIp = $.sp(ob.user).K('user')
			var titleIp = $.sp(ob.title).K('title')
			var urlIp = $.sp(ob.url).K('url')
			return [
				$('<td>').A(userIp),
				$('<td>').A(titleIp),
				$('<td>').A(urlIp),
				$('<td>').A(
						$.bt('Edit', function () {
						}).K('btn btn-warning edit-blog'),
						$.bt('Delete', function () {
						}).K('btn btn-danger delete-blog'),
						//FROM VIDEO 3
						$.bt('Update', function () {
						}).K('btn btn-success update-blog')
								.css('display', 'none'),
						//FROM VIDEO 3
						$.bt('Cancel', function () {
						}).K('btn btn-danger cancel')
								.css('display', 'none')
				)]
		}
		viewOb.render = viewOb.ren = function () {
			var vw = this
			var adultSelf = vw.model.toJSON()
			var children = vw.genCh(adultSelf)
			_.e(children, function (childEl) {
				childEl.a2(vw.$el)
			})
			return vw
		}
		viewOb.events = {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		}
		_BlogView = Bb.V.x(viewOb)
		BlogView = _BlogView.extend({
			edit: function () {
				var vw = this
				$l('edit button clicked!')
				vw.$('.edit-blog').hide()
				vw.$('.delete-blog').hide()
				vw.$('.update-blog').show()
				vw.$('.cancel').show()
				var user = this.$('.user').html()
				var title = this.$('.title').html()
				var url = this.$('.url').html()
				this.$('.user').E().A(
						$.ip().K("form-control user-update").val(user))
				this.$('.title').E().A(
						$.ip().K("form-control title-update").val(title))
				this.$('.url').E().A(
						$.ip().K("form-control url-update").val(url))
				// use .h( or .H( instead of E().A(
			},
			update: function () {
				this.model.set('user', $('.user-update').v())
				this.model.set('title', $('.title-update').v())
				this.model.set('url', $('.url-update').v())
				this.model.save(null, {
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
					vw.$el.A(blogView.ren().el)
				})
				return this
			}
		})
		tp__ = tpsV = blogsView = new BlogsView({})
		Bb.M.prototype.idAttribute = '_id'
	}
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
Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
	})
}
$tp = window['$tp'] || {}
ROLL = function () {
	bbLocStorPLUG()
	store = $store('rcs')
	RecipeM = _M()
	RecipesC = _C({})
	Form = _V({
		tag: 'form',
		__: function () {
			this.ren()
		},
		ren: function () {
			this.$el.E(
					$.ip().val('name').id('name'),
					$.ip().val('ingredients')
							.id('ingredients'),
					$.bt('submit'),
					$.bt('ok')
			)
			return this
		}
	})
	Index = _V({
		tp: function (ob) {
			var html = $.sp()
			html.A(count(ob))
			return html
			function count(ob) {
				return $.h1().A('there are ' + ob.num + ' recipes')
			}
		},
		initialize: function () {
			$l('index  init..')
			this.recipes = store
			this.recipes.on('all', this.ren, this)
			this.recipes.fetch()
		},
		ren: function () {
			// pass the view itself this time..
			$indexEl = this.tp({
				num: _.z(store)
			})//$tp[this.tp](this)
			this.$el.A($indexEl)
			var form = Form().ren()
			//this.$('.recipes').A(form.el)
			$('#root').A(form.el)
			return this
		}
	})
	$.d().id('breakfast-roll').K('root').C('o').A('loading...')
	$('#breakfast-roll').A(
			$.h1('Hi and welcome to BreakfastRoll Recipes!'),
			$.p().A($.a('"intro" (anchor tag)')),
			$.d().id('ct').C('b').A('.. #ct (the container) ..')
	)
	Router = $indexRoute($('#ct'), function () {
		$('#ct').A(
				Index({num: _.z(st)}).ren().$el
		)
	})
	Bb.h.start()
}
$indexRoute = function ($el, fn, add) {
	return $R({
		rts: {'': '_'},
		_: function (ev) {
			$l('router: ix page')
			$($el).E()
			fn(ev)
		}
	})
}
$index = function ($el, arr) {
	var fn = function () {
		if (A(arr)) {
			_.e(arr, function (el) {
				$el.A(el)
			})
		}
	}
	var Router = $indexRoute($el, fn)
	return Router
}
ROLL = JUSTENDINGAT53_59 = function () {
	bbLocStorPLUG()
	Recipe = _M()
	Recipes = _C({
		localStorage: store = $store('recipes')
	})
	Index_ = _V({
		_: function () {
			var vw = this
			var rcs = vw.rcs = store
			rcs.on('all', vw.ren, vw)
			rcs.fet()
		},
		ren: function () {
			var vw = this
			vw.$el.E($.d([
						$.h1().A('there are ' + _.z(store) + ' recipes'),
						$.d().K('recipes').A('.. recipes will go here')
					]).C('g')
					//	$.h1('Hi and Welclcome to breakfast rollsz!/'),
					//	$.p().A($.a('"intro" anchor')),
					//	$.d().id('ct').C('b').A('.. #ct (the container) ..')
			)
			var f = Form_().ren().$el
			var rcs = vw.$('.rcs')
			recipes.A(f.el)
			// pass the view itself this time..
			// $indexEl = this.tp({num: _.z(store)})//$tp[this.tp](this)
			//	this.$el.A($indexEl)
			//	var form = Form().ren()
			//this.$('.recipes').A(form.el)
			//$('#root').A(form.el)
			return vw
		}
	})
	Form = _V({
		tag: 'form',
		_: function () {
			var vw = this
			vw.recs = Recs()
			vw.recs.on('all', vw.ren, vw)
			vw.recs.fet()
		},
		ev: {'mit': 'mit'},
		mit: function (ev) {
			$.pD(ev)
			Rec.create({
				name: this.$('#name').V(),
				name: this.$('#ing').V()
			}, function () {
			})
		},
		ren: function () {
			var vw = this
			var $d = $.d().C(
					$r()
			).css({padding: 10, margin: 10})
			vw.$el.E($d)
			$d.A(
					'name: ', $.ip().pH('name').id('name'),
					' ingredients : ', $.ip().pH('ingredients').id('ingredients'))
			$('<button type="submit">').A('mit').a2($d)
			$.hr().a2($d)
			return vw
		}
	})
	$.d().id('#breakfast-rolls').css({padding: 20, margin: 20}).C('o').A('loading .... .... ..')
	Router = $R({
		initialize: function () {
			$l('router init')
		},
		routes: {'': '_'},
		_: function (ev) {
			$l('router index')
			$('#breakfast-rolls').C('r').E(
					Index().ren().el).C('y')
		}
	})
	Bb.h.start()
}
function rollSolvedFromGithub() {
	//https://github.com/ngauthier/intro-to-backbone-js/blob/master/app/demo/solved.html
	store = new Store("recipes")
	////
	Recipe = M$({});
	Recipes = C$({localStorage: store})
	Index = V$({
		template: template('index'),
		initialize: function () {
			this.rcs = new Rcs();
			this.rcs.on('all', this.ren, this);
			this.rcs.fetch();
		},
		ren: function () {
			this.$el.h(this.template(this));
			this.rcs.e(this.addRc, this);
			var form = new Form({cl: this.rcs});
			this.$el.A(form.ren().el);
			return this;
		},
		addRecipe: function (recipe) {
			var view = new Rc({model: rc});
			this.$('.rcs').A(view.ren().el);
		},
		count: function () {
			return this.recipes.length;
		}
	})
	Recipe = V$({
		className: 'well',
		template: template('recipe'),
		events: {
			'click button': 'delete'
		},
		ren: function () {
			this.$el.h(this.template(this));
			return this;
		},
		name: function () {
			return this.md.g('name');
		},
		ingredients: function () {
			return this.md.g('ings');
		},
		delete: function () {
			this.md.destroy();
		}
	})
	Form = $V({
		tagName: 'form',
		className: 'form-horizontal',
		template: template('form'),
		events: {
			'submit': 'add'
		},
		ren: function () {
			this.$el.html(this.template(this));
			return this;
		},
		add: function (event) {
			event.preventDefault();
			this.cl.create({
				name: this.$('#name').val(),
				ingredients: this.$('#ings').val()
			})
			this.ren();
		}
	})
	boot = function (ct) {
		$R({
			rts: {"": "ix"},
			_: function (ops) {
				this.el = ops.el
			},
			ix: function () {
				this.$el.E(Index_().ren().el)
			}
		})
		({el: $(ct)})
		Bb.h.start();
	}
	SOLVED = function () {
		
		/*
		
		 $.d().K('container').A(
		 $.d().K('hero-unit').A(
		
		 )  
		
		
		 $.h1().('Breakfast Roll Recipes')
		
		 $('<p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>),
		 $('<p><a href="http://intro-to-backbone-js.herokuapp.com/"> http://intro-to-backbone-js.herokuapp.com/ </a></p>')
		 <p><a href="index.html">View unsolved version</a></p>
		 </div>
		 <div class='row'>
		 <div class='span12' id='breakfast-roll'>
		 Loading...
		 </div>
		 </div>
		 </div>
		
		 <script type="text/x-mustache-template" id="index-template">
		 <h2>There are {{ count }} recipes</h2>
		 <div class='recipes'></div>
		 </script>
		 <script type="text/x-mustache-template" id="recipe-template">
		 <h3>{{ name }}</h3>
		 <p>{{ ingredients }}</p>
		 <p>
		 <button class='btn btn-danger'>Delete</button>
		 </p>
		 </script>
		 <script type="text/x-mustache-template" id="form-template">
		 <legend>Add a recipe</legend>
		 <fieldset>
		 <div class='control-group'>
		 <label class='control-label' for='name'>Name</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='name'>
		 </div>
		 </div>
		 <div class='control-group'>
		 <label class='control-label' for='ingredients'>Ingredients</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='ingredients'>
		 </div>
		 </div>
		 <div class="form-actions">
		 <button type="submit" class="btn btn-primary">Add Recipe</button>
		 </div>
		 </fieldset>
		
		 */
		boot($('#breakfast-roll'))
	}
	function backupHMTL() {
		
		/*
		 <div class='container'>
		 <div class='hero-unit'>
		 <h1>Breakfast Roll Recipes</h1>
		 <p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>
		 <p><a href="http://intro-to-backbone-js.herokuapp.com/">
		 http://intro-to-backbone-js.herokuapp.com/
		 </a></p>
		 <p><a href="index.html">View unsolved version</a></p>
		 </div>
		 <div class='row'>
		 <div class='span12' id='breakfast-roll'>
		 Loading...
		 </div>
		 </div>
		 </div>
		
		 <script type="text/x-mustache-template" id="index-template">
		 <h2>There are {{ count }} recipes</h2>
		 <div class='recipes'></div>
		 </script>
		 <script type="text/x-mustache-template" id="recipe-template">
		 <h3>{{ name }}</h3>
		 <p>{{ ingredients }}</p>
		 <p>
		 <button class='btn btn-danger'>Delete</button>
		 </p>
		 </script>
		 <script type="text/x-mustache-template" id="form-template">
		 <legend>Add a recipe</legend>
		 <fieldset>
		 <div class='control-group'>
		 <label class='control-label' for='name'>Name</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='name'>
		 </div>
		 </div>
		 <div class='control-group'>
		 <label class='control-label' for='ingredients'>Ingredients</label>
		 <div class='controls'>
		 <input type='text' class='input-xlarge' id='ingredients'>
		 </div>
		 </div>
		 <div class="form-actions">
		 <button type="submit" class="btn btn-primary">Add Recipe</button>
		 </div>
		 </fieldset>
		 */
	}
}
function watchFrom2939to11120() {
//https://www.youtube.com/watch?v=PqtYcHyyWJA
// Introduction to Backbone.js by  Nick Gauthier
// BreakfastRoll Recipe Database
//project: just a recipe database for breakfast roles
// recipes have only name, ingredients list (but we'll cheat and make them both strings.. should be straightforward)
// goal:
//user can add/delete recipes
//use local storage
	//NOT edit/update, just create, distroy, list and SHOW
	//HAS A LEGIT REPO TO CLONE IF U WANT
	//(THIS IS DITPAGE WITH ONLY MESSAGES, BUT WITH A DELETE BT)
	//uses TWITTER BS
	//uses custom CSS
//nothing 3000
// 'COLLECTION VW PATTERN'
	//9 deps DONT LISTEN
	//10 model
	//1430 coll
//1708 TEMPLATES
//1619 DEFERREDS 
//3:40 rtr
//5:20 vw
// FALSE STARTS 2939 'ive got the code here'///////////////////////
// REAL START: 3013: 'this is the ENTRY POINT to our app'
// 0:30:17 .. shows the 'INDEX' template.. which just produces a one-line h2 the 'count'
//0:33:45 FORM VIEW
//35:39.. so that's how the ivew renders itself!  but how do we count and how do we fetch?
//3640 done with boiler to boot and list num items
// 37:00 so that's all the boiler plate.  questions???
// questions..come back only at 0:38:30
//  0:38:30: 'the first thing i want to do.. things to do..'
// 0:39:30 ???
// 0:42 asks funny ques !!!!!!
/// question goes until....... 
//4713 FINISHES FORM TEMPLATE
// 0:56 *** get recipes 'show'
// 0:57 smart point
// 1:9:10.. 'completed first part..'
// 1:9:45 del
// entry point? div with id of 'breakfast-roll'..
// yes THE ROOT IS BREAKFSAT=ROLL DIV!!!
// pass in $('#breakfast-roll') (root container) to boot
// boot receives an el and passes that ro the router Router({el: container) (
// so it can instatiate views on that container)
// index router:  container(this.el).E(   Index().render().el  )
// 'INDEX' template just produces a one-line h2 the 'count'   AND  $.dK('recipes')
// form view, on init, will instantiate recipes collection, set events on it, and tell it to fecth
//index page should add a subview for each recipe
// so actually, u put the form in the 'recipes' div which iis within:
// 'breakfast-roll div // (with indexPage div template) 
// SO AT THIS POINT, u should just have only that one h2 in the root (and hence on the page)
//////////////////////////////////////
//111:20 fin!!!!
//120 'i still churn a lot' (unit testing)
//
//121 another ques
//i27 'i use hb bc'
}
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

function list(){
	KO0 = function () {
		$.x();
		$.ipV('n');
		$.h1T('n')
		$.ulE('arr', [$.liT()])
		$.sb().b$('A')
		$.dA('b', 100, 300, 200, '+').bT('n')
		ok({
			n: ko.o('zi'), arr: ko.oa(),
			A: function () {
				this.arr.push(this.n())
			}
		}) // ok('n', ko.o('zi'))
		$.in(1, function () {
			vm.n('girf')
			_.e(['a', 'b', 'c'], function (i) {
				vm.arr.push(i)
			})
		}, '*')
	}
	KOE = function () {
		$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tBE('peep', [
				$.tr([
					$.tdT('f'),
					', ',
					$.tdT('l')
				])
			])])
		OK({
			peep: [
				{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}
			]
		})
	}
	NEST = function () {
		$.x('x').h2('Pp')
		Per = function (n, ch) {
			this.n = n
			this.ch = $oa(ch)
			this.A = function () {
				this.ch.push('new ch ' + $r())
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.uLE('peep',
				$.d([  // name has length children
					$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
					//new
					$.a$('New', 'A')
				]),
				$.uLE('ch',
						$.spT(), //child name
						$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
				)
		)
		$.cbC('showDT').a2Lb('Show time:')
		//anonymous vm
		ok({peep: peep, showDT: $o()})
	}
	TPLIST = function () {
		$.x()
		Meals = [{m: "sand", p: 0}, {m: "lobst", p: 34.95}, {m: "zebra", p: 290}]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([
						$.sl().b({o: 'Meals', ot: 'meal'})
					]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
//sort, remove
	BTRLST1 = function () {
		$.x('o')
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
	BTRLST = function () {
		$.x('o')
		f = $.fSb('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').bEn('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
//add, conditional el
	DIRT = function () {
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: ko.oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: ko.oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			}
			else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}//???
	KOFLM = function () {
		$.z('x')
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
				$.li().A(d,
						$.dI('box').css('display', 'none').A(
								$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
				),
				$.li().bT('matterTitle'),
				$.li().bT('matterComment')
		)))
	}
	LIST = function () {
		$.x('z')
		f = $.f().A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').bE('itemToAdd().length>0')
		)
		f.bSb('addItem')
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
	}
	KOOA = function () {
		$.x()
		OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
		$.dE('peep', [$.p(
				$.spT('f'), ' ', $.spT('l')
		)])
		$.bt('push', function () {
			vm.peep.push({f: 'j', l: 'y'})
		})
	}
	ADD = function () {
		$.x('x', 'course')
		OK({
			cl: $oa(),
			a: function () {
				this.cl.p({
					n: 'j', c: $r()
				})
				return this
			}
		})
		$.s$('a', 'play'); //the order of these mets should reverse
		$.U('cl', [
			'name is ', $.sT('n'), ' and gusta ', $.sT('c')
		])
		vm.a().a().a()
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
	}
	DELETE = function () {
		$.x()
//bind bt 'click' to parent.rem
		$.h4('People')
		$.ulE('peep', [$.li([
			$.sp('pos/name: '),
			$.spT('$index'),
			$.spT('n'),
			$.$bt('del', 'rm', '-')
		])])
		$.$bt('A')
		ok({
			peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + $D()})
			},
			rm: function (a) {
				vm.peep.remove(this)
			}
		})
	}
	ROOT = function () {
		$.x('x')
		$.uE('fs', [$.li().b({
			t: '$data',
			s: '{selected: $data==$root.chFI()}',
			$: '$root.gtf'
		})
		]).K('fs')
		ok({
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: ko.o(),
			gtf: function (f) {
				$l('click: ' + 'f: ' + f + ', this: ' + this)
				f = f || 'frog'
				vm.chFI(f)
			}
		})
	}
	BARN = function () {
		$.x()
		$.ulE('PL', [$.li([
			$.sp('Planet: '),
			$.b().bT('n'),
			$.dI('cap', [$.pT('cap.n')])
		])])
		ok('PL', [
			{n: 'Merc', cap: null},
			{n: 'Earth', cap: {n: 'Barn'}}
		])
	}
	workss()
	function workss() {
		each()
		function each() {
			KOE = function () {
				$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
					$.tBE('peep', [
						$.tr([
							$.tdT('f'),
							', ',
							$.tdT('l')
						])
					])])
				ok({
					peep: [
						{f: 'a', l: 'A'},
						{f: 'b', l: 'B'},
						{f: 'c', l: 'C'}
					]
				})
			}
			BARN = function () {
				$l('barn')
				$.z().ulE(
						'PL', [
							$.li([
								$.sp('Planet: '),
								$.b().bT('n'),
								$.dI('cap', [$.pT('cap.n')])
							])
						])
				ok('PL', [
					{n: 'Merc', cap: null},
					{n: 'Earth', cap: {n: 'Barn'}}
				])
			}
		}
	}
	
	FLCL = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = bb.V.e({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		
		 this.$el.html(HT); return this }
		 })*/
		Cl = bb.C.e({
			i: function () {
			}
		})
		cl = Cl.o({})
		/*
		 cl.add([{a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a:'f', b: 's'},
		 {a: 's', b:'t'}
		 ])
		
		
		 res = cl.where({a:'f',b:'s'})
		 */
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	PEOPLE = function () {
		$.x()
		Per = bb.M.e({
			i: function () {
				//this.oV(function(mod, err){$l(err)})
			},
			d: {n: 'doe', a: 30, j: 'wrk'},
			validate: function (ats) {
				if (ats.age < 0) {
					return 'a < 0!'
				}
			},
			work: function () {
				return this.g('n') + ' is working'
			}
		})
		p = Per.o({n: 'y', a: 34})
		//p.oV(function (mod, z) {$l(z)})
		PerV = bb.V.e({
			tn: 'li',
			k: 'person', x: 'some-person',
			i: function () {
				this.r()
			},
			tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
			r: function () {
				var t = this
				//this works, but doesnt use a template
				// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
				t.H(
						t.T(
								t.J()
						)
				)
			}
		})
		pV = PerV.o({m: p})
		peepC = bb.C.e({m: Per})
		pC = peepC.o([
			{n: 'rigo', a: 29},
			{n: 'j', a: 2},
			{n: 's', j: 'gx'}
		])
		pC.add(p)
		pC.at(1).n('joejoe')
		pC.at(1).s('name', 'joejoe')
		PeepV = bb.V.e({
			tn: 'ul',
			i: function () {
				$l('hi')
				$l(this.cl)
			},
			r: function () {//var t=this
				this.cl.each(function (p) {
					var v, pV  //$l(p.g('n'))
					pV = PerV.o({m: p}) //$l(pV.el)
					this.$el.append(pV.el) //t.q( pV.el  )
				}, this)
			}
		})
		pcv = PeepV.o({cl: pC})
		pcv.r()
		$.A(pcv.el)
	}
	KOGRID = function () {
		$.z().f().at({action: '/someServerSideHandler'}).A(
				$.p('You have asked for').A(
						$.sp('&nbsp;').bT('gifts().length'),
						'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A(
								$.tr().A(
										//tHR
										$.th().A('Gift name'),
										$.th().A('Price')
								)),
						$.tB().bE('gifts').A(
								$.tr().A(  //tBR
										$.td().A($.ip().K('required').b({v: 'name', u: true})),
										$.td().A($.ip().K('required number')
												.b({v: 'price', u: true})),
										$.td().A(
												$.a('delete').b$('$root.removeGift')
										)))),
				$.bt('add gift').b$('addGift'),
				$.sb().bEn('gifts().length > 0')
		).A()
		Gift = function (gifts) {
			var vm = this
			vm.gifts = ko.oa(gifts)
			vm.addGift = function () {
				vm.gifts.push({name: "", price: ""})
			}
			vm.removeGift = function (gift) {
				vm.gifts.remove(gift)
			}
			vm.save = function (form) {
				alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
			}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
		}
		ko.b(new Gift([
			{name: "Tall Hat", price: "39.95"},
			{name: "Long Cloak", price: "120.00"}
		]))
		// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	}
	PLAN = function () {
		$.z().h1('Plan!')
		$.p().A($.lb().A(
						$.cC('displayAdvancedOptions'), 'Display advanced options'
				)
		)
		$.p().A('Show:',
				$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
		)
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 Show:
		 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
		 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
		 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
		 </p>*/
		$.d([$.d([$.d()])])
		/*
		
		 <div data-bind='template: { foreach: planetsToShow,
		 beforeRemove: hidePlanetElement,
		 afterAdd: showPlanetElement }'>
		 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
		 </div>
		
		 */
		$.p([$.bt(), $.bt()])
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
		 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
		 </p>
		 */
		Planets = function () {
			this.planets = ko.oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = ko.o("all");
			this.displayAdvancedOptions = ko.o(false);
			this.addPlanet = function (type) {
				this.planets.push({
					name: "New planet",
					type: type
				})
			}
			this.planetsToShow = ko.pc(function () {
				// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow();
				if (desiredType == "all") return this.planets();
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType;
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) $(el).hide().slideDown()
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) $(el).slideUp(function () {
					$(el).remove();
				})
			}
		}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
		ko.bh.fadeVisible = {
			init: function (el, valAcc) {
				// Initially set the el to be instantly visible/hidden depending on the value
				var value = valAcc();
				$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
			},
			update: function (el, valAcc) {
				// Whenever the value subsequently changes, slowly fade the el in or out
				var value = valAcc();
				ko.unwrap(value) ? $(el).fadeIn() :
						$(el).fadeOut();
			}
		}
		ok(new Planets())
	}
	PLAN = function () {
		$.z().h1('Plan!')
		$.p().A($.lb().A(
						$.cC('displayAdvancedOptions'), 'Display advanced options'
				)
		)
		$.p().A('Show:',
				$.lb([$.ip()]), $.lb([$.ip()]), $.lb([$.ip()])
		)
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 Show:
		 <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
		 <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
		 <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
		 </p>*/
		$.d([$.d([$.d()])])
		/*
		
		 <div data-bind='template: { foreach: planetsToShow,
		 beforeRemove: hidePlanetElement,
		 afterAdd: showPlanetElement }'>
		 <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
		 </div>
		
		 */
		$.p([$.bt(), $.bt()])
		/*
		 <p data-bind='fadeVisible: displayAdvancedOptions'>
		 <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
		 <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
		 </p>
		 */
		Planets = function () {
			this.planets = ko.oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = ko.o("all");
			this.displayAdvancedOptions = ko.o(false);
			this.addPlanet = function (type) {
				this.planets.push({
					name: "New planet",
					type: type
				})
			}
			this.planetsToShow = ko.pc(function () {
				// Represents a filtered list of planets
				// i.e., only those matching the "typeToShow" condition
				var desiredType = this.typeToShow();
				if (desiredType == "all") return this.planets();
				return ko.utils.arrayFilter(this.planets(), function (planet) {
					return planet.type == desiredType;
				});
			}, this);
			// Animation callbacks for the planets list
			this.showPlanetElement = function (el) {
				if (el.nodeType === 1) $(el).hide().slideDown()
			}
			this.hidePlanetElement = function (el) {
				if (el.nodeType === 1) $(el).slideUp(function () {
					$(el).remove();
				})
			}
		}
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
		ko.bh.fadeVisible = {
			init: function (el, valAcc) {
				// Initially set the el to be instantly visible/hidden depending on the value
				var value = valAcc();
				$(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
			},
			update: function (el, valAcc) {
				// Whenever the value subsequently changes, slowly fade the el in or out
				var value = valAcc();
				ko.unwrap(value) ? $(el).fadeIn() :
						$(el).fadeOut();
			}
		}
		ok(new Planets())
	}
	function protoErr() {
		CHERRY = function () {
			$l('cherry')
			$.x('o')
			$.p($.sp('spam?'), $.cC('wants'))
			$.d(['Preferred flavors of spam:',
				$.d([
					$.p($.sp('cherry'), $.cC('flav').v('cherry')),
					$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
					$.p($.sp('Glut'), $.cC('flav').v('glut'))
				])
			]).bVs('wants')
			ok({
				wants: ko.o(1),
				flav: ko.oa(["cherry", "almond"])
			})
			// vm.flav.push("msg")
			/*
			 function $.cKO(m, b, v){
			 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
			 if(v){ cb.v(v)}
			 return p
			 }*/
		}
	}
	
	ADDER = function () {
		$.x()
		$.h4('People')
		$.ulE('peep', [$.li([
			$.sp('pos/name: '),
			$.spT('$index'),
			$.spT('n'),
			$.$bt('del', 'rm', '-')
		])])
		$.$bt('A')
		ok({
			peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + $D()})
			},
			rm: function (a) {
				vm.peep.remove(this)
			}
		})
	}
//bind bt 'click' to parent.rem
	ADDER = function () {
		$.x()
		$.h4('People')
		$.ulE('peep', [$.li([
			$.sp('pos/name: '),
			$.spT('$index'),
			$.spT('n'),
			$.$bt('del', 'rm', '-')
		])])
		$.$bt('A')
		ok({
			peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + $D()})
			},
			rm: function (a) {
				vm.peep.remove(this)
			}
		})
	}
// kob= ko.observable.prototype; kob.rm= kob.remove
	MENU = function () {
		$.z('b').h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
						$.tr().A(
								$.td().bT('n'),
								$.td().bT('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().bT('m().p')
						)
				)
		)
		ko.b({
			seats: $oa([
				{n: 'Jo', m: ko.o(AM[0])},
				{n: 'Bo', m: ko.o(AM[1])}]),
			A: function () {
				vm.seats.push({
					n: 'hahaha',
					m: ko.o({n: 'noodles', p: 30})
				})
			}
		})
	}
	CHERRY = function () {
		$.x('o')
		$.p($.sp('spam?'), $.cC('wants'))
		$.d(['Preferred flavors of spam:',
			$.d([
				$.p($.sp('cherry'), $.cC('flav').v('cherry')),
				$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
				$.p($.sp('Glut'), $.cC('flav').v('glut'))
			])
		]).bVs('wants')
		ok({
			wants: ko.o(1),
			flav: ko.oa(["cherry", "almond"])
		})
		// vm.flav.push("msg")
		/*
		 function $.cKO(m, b, v){
		 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
		 if(v){ cb.v(v)}
		 return p
		 }*/
	}
	FOREACH = function () {
		z()
		_d().b('fe', 'p')(
				pg(
						sp().b('t', 'f'),
						sp(' '),
						sp().b('t', 'l'))
		).a()
		vm = {
			p: ko.oa([
				{f: 'B', l: 'Bb'},
				{f: 'C', l: 'Cc'},
				{f: 'D', l: 'Dd'}])
		}
		ko.ab(vm)
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	KOGRID = function () {
		$.z().f().at({action: '/someServerSideHandler'}).A(
				$.p('You have asked for').A(
						$.sp('&nbsp;').bT('gifts().length'),
						'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A(
								$.tr().A(
										//tHR
										$.th().A('Gift name'),
										$.th().A('Price')
								)),
						$.tB().bE('gifts').A(
								$.tr().A(  //tBR
										$.td().A($.ip().K('required').b({v: 'name', u: true})),
										$.td().A($.ip().K('required number')
												.b({v: 'price', u: true})),
										$.td().A(
												$.a('delete').b$('$root.removeGift')
										)))),
				$.bt('add gift').b$('addGift'),
				$.sb().bEn('gifts().length > 0')
		).A()
		Gift = function (gifts) {
			var vm = this
			vm.gifts = ko.oa(gifts)
			vm.addGift = function () {
				vm.gifts.push({name: "", price: ""})
			}
			vm.removeGift = function (gift) {
				vm.gifts.remove(gift)
			}
			vm.save = function (form) {
				alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
			}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
		}
		ko.b(new Gift([
			{name: "Tall Hat", price: "39.95"},
			{name: "Long Cloak", price: "120.00"}
		]))
		// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	}
	SPAM2 = function () {
		z()
		cbKO('Send me spam', 'wantsSpam').A()
		$.div().koBind('vs', 'wantsSpam')(
				'Preferred flavors of spam:',
				$.div().A(cbKO('Cherry', 'flav', 'cherry')),
				$.div().A(cbKO('Almond', 'flav', 'almond')),
				$.div().A(cbKO('Glut', 'flav', 'glut'))
		).A()
		vm = {
			wantsSpam: ko.o(true),
			flav: ko.oa(["cherry", "almond"])
		}
		ko.aB(vm)
		//viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
	}
//bind cb 'checked' to boolean
	SPAM = function () {
		$.x()
		$.cbC('spam').a2($.p('spam? '))
		$b({spam: ko.o(1)})
		_.in(2, function () {
			vm.spam(0);
			$.c$()
		})
	}
	SPAM = function () {
		$l('spam')
		z()
		c = cbKO('Send me spam', 'wantsSpam').A()
		vm = {wantsSpam: ko.o(true)}
		ko.aB(vm)
	}
	LIST = function () {
		$.x('z')
		f = $.f()
		f.bSb('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').bE('itemToAdd().length>0')
		)
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
	}
	LIST = function () {
		$.x('z')
		f = $.f()
		f.bSb('addItem').A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').bE('itemToAdd().length>0')
		)
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
	}
//sort, remove
	BTRLST1 = function () {
		$.x('o')
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		$b(new Lst())
	}
	BTRLST = function () {
		$.x('o')
		f = $.fSb('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').bEn('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
	function classic() {
		BETTERLIST = function () {
			z()
			$.d()(
					fo().b('S', 'addItem')(
							sp('add item'),
							tx().b({
								v: 'itemToAdd'//,vu:'afterkeydown'
							}),
							sm('add').b('ea', 'itemToAdd().length>0')),
					_d()(
							sp('Your values:'),
							sel().h(5).b({
								o: 'allItems',
								so: 'selectedItems'
							})
					),
					_d()(
							bt('remove').b({
								c: 'removeSelected',
								ea: 'selectedItems().length>0'
							}),
							bt('sort').b({
								c: 'sortItems',
								ea: 'allItems().length>1'
							}))
			).a()
			ko.ab(o = BLM())
		}
	}
	
	tabl()
	function tabl() {
		Gift = function (gifts) {
			var vm = this
			vm.gifts = ko.oa(gifts)
			vm.addGift = function () {
				vm.gifts.push({name: "", price: ""})
			}
			vm.removeGift = function (gift) {
				vm.gifts.remove(gift)
			}
			vm.save = function (form) {
				alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
			}
			// To actually transmit to server as a regular form post, write this:
			// ko.utils.postJson($("form")[0], self.gifts)
		}
		KOGRID = function () {
			$.z()
			f = $.f().at({action: '/someServerSideHandler'})
			f.A(
					$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
					$.t().bVs('gifts().length > 0').A(
							$.tH().A($.tr().A(//tHR
									$.th().A('Gift name'),
									$.th().A('Price'))),
							$.tB().bE('gifts').A($.tr().A(  //tBR
									$.td().A($.ip().K('required').b({v: 'name', u: true})),
									$.td().A($.ip().K('required number')
											.b({v: 'price', u: true})),
									$.td().A($.a('delete').b$('$root.removeGift'))))),
					$.bt('add gift').b$('addGift'),
					$.sb().bEn('gifts().length > 0')
			).A()
			ok(new Gift([
				{name: "Tall Hat", price: "39.95"},
				{name: "Long Cloak", price: "120.00"}
			]))
			// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
		}
//broken
		MENU = function () {
			$.z('b').h2('Your seat reservations')
			$.bt('reserve').b$('A')
			AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
			$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
							$.tr().A(
									$.td().bT('n'),
									$.td().bT('m().n'),
									$.td().A(
											$.sl().b({
												o: '$root.AM',
												ot: 'm'    //v : 'm',
											})
									),
									$.td().bT('m().p')
							)
					)
			)
			ok({
				seats: $oa([
					{n: 'Jo', m: ko.o(AM[0])},
					{n: 'Bo', m: ko.o(AM[1])}]),
				A: function () {
					vm.seats.push({
						n: 'hahaha',
						m: ko.o({n: 'noodles', p: 30})
					})
				}
			})
		}
	}
	
	availableMeals = [
		{mealName: "Standard (sandwich)", price: 0},
		{mealName: "Premium (lobster)", price: 34.95},
		{mealName: "Ultimate (whole zebra)", price: 290}
	]
	TUTCLSTEP1 = function () {
		z();
		$.h2('Your seat reservations')
		$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
				$('<tbody>').bE('seats').A(
						$.tr().A(
								$.td().bT('name'),
								$.td().bT('meal().mealName'),
								$.td().bT('meal().price'))))
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
		}
	}
	TUTCLSTEP2 = function () {
		z();
		$.h2('Your seat reservations')
		$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
				$('<tbody>').bE('seats').A(
						$.tr().A(
								$.td().bT('name'),
								$.td().bT('meal().mealName'),
								$.td().bT('meal().price'))))
		$.bt('reserve another seat').b$('addSeat')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
		}
	}
	TUTCLSTEP3 = function () {
		z();
		$.h2('Your seat reservations')
		$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
				$('<tbody>').bE('seats').A(
						$.tr().A(
								$.td().bT('name'),
								//  $.td().bT('meal().mealName'),
								$.td($.sl(
								).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
								$.td().bT(
										'formattedPrice'
										//'meal().price'
								)
						)))
		$.bt('reserve another seat').b$('addSeat')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
		}
	}
	TUTCLSTEP4 = function () {
		z();
		$.h2().A(
				'Your seat reservations (',
				$.sp().bT("seats().length"),
				')'
		)
		$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
				$('<tbody>').bE('seats').A(
						$.tr().A(
								$.td().bT('name'),
								//  $.td().bT('meal().mealName'),
								$.td($.sl(
								).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
								$.td().bT(
										'formattedPrice'
								),
								$.td().A(
										$.a('Remove', '#').b$("$root.removeSeat")
								)
						)))
		$.h3().A(
				'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')
		).bVs('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.totalSurcharge = ko.computed(function () {
				var total = 0;
				for (var i = 0; i < self.seats().length; i++)
					total += self.seats()[i].meal().price;
				return total;
			})
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
			self.removeSeat = function (seat) {
				self.seats.remove(seat)
			}
		}
	}
	TUTCL = function () {
		z();
		$.h2().A(
				'Your seat reservations (',
				$.sp().bT("seats().length"),
				')'
		)
		$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
				$('<tbody>').bE('seats').A(
						$.tr().A(
								$.td().bT('name'),
								//  $.td().bT('meal().mealName'),
								$.td($.sl(
								).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
								$.td().bT(
										'formattedPrice'
								),
								$.td().A(
										$.a('Remove', '#').b$("$root.removeSeat")
								)
						)))
		$.h3().A(
				'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')
		).bVs('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.totalSurcharge = ko.computed(function () {
				var total = 0;
				for (var i = 0; i < self.seats().length; i++)
					total += self.seats()[i].meal().price;
				return total;
			})
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
			self.removeSeat = function (seat) {
				self.seats.remove(seat)
			}
		}
	}
	TUTC = function () {
		z();
		$Ms('TUTC')
		$.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
		$.t().A(
				$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
				$('<tbody>').bE('seats').A($.tr().A(
						$.td().bT('name'),
						$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
						$.td().bT('formattedPrice'),
						$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
		$.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
		$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
		ok(new ReservationsViewModel())
		function SeatReservation(name, initialMeal) {
			var self = this;
			self.name = name;
			self.meal = ko.observable(initialMeal);
			self.formattedPrice = ko.computed(function () {
				var price = self.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			});
		}
		
		function ReservationsViewModel() {
			var self = this;
			// Non-editable catalog data - would come from the server
			self.availableMeals = availableMeals
			// Editable data
			self.seats = ko.observableArray([
				new SeatReservation("Steve", self.availableMeals[0]),
				new SeatReservation("Bert", self.availableMeals[0])
			])
			self.totalSurcharge = ko.computed(function () {
				var total = 0;
				for (var i = 0; i < self.seats().length; i++)
					total += self.seats()[i].meal().price;
				return total;
			})
			self.addSeat = function () {
				self.seats.push(new SeatReservation("", self.availableMeals[0]));
			}
			self.removeSeat = function (seat) {
				self.seats.remove(seat)
			}
		}
	}
	KOTUT1 = function () {
		$l('kotut1')
		z()
	}
	COURSE = function () {
		$.x('x')
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
		$.h1('monkey').bT('monkey')
		$.iV('monkey')
		$.sb('hello').b$('A')
		$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
		vm = {
			monkey: ko.o(),
			list: ko.oa(),
			A: function () {
				this.list.push({n: 'j', c: $r()})
			}
		}
		vm.monkey('elephant')
		ok(vm)
	}
	COURSE = function () {
		$.x('x')
		$.s$('a', 'play');
		$.U('cl', [
			'my name is ', $.sT('n'),
			' and i like to play ',
			$.sT('c')])
		ok({
			cl: ko.oa(),
			a: function () {
				this.cl.p({n: 'j', c: $r()})
				return this
			}
		})
		vm.a().a().a()
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
	}
	COURSE = function () {
		$.x('x')
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
		$.h1('monkey').bT('monkey')
		$.iV('monkey')
		$.sb('hello').b$('A')
		$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
		vm = {
			monkey: ko.o(),
			list: ko.oa(),
			A: function () {
				this.list.push({n: 'j', c: $r()})
			}
		}
		vm.monkey('elephant')
		ok(vm)
	}
	COURSE = function () {
		$.x('x')
		$.s$('a', 'play');
		$.U('cl', [
			'my name is ', $.sT('n'),
			' and i like to play ',
			$.sT('c')])
		ok({
			cl: ko.oa(),
			a: function () {
				this.cl.p({n: 'j', c: $r()})
				return this
			}
		})
		vm.a().a().a()
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
	}
	TWT = function () {
		$.z()
		$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')])
		$.dW('da', [
			$.h3('dt:', $.spT('dt')),
			$.olE('MS', $.liT('ms')),
			$.bt$('Clr', ' $parent.clr')
		])
		ko.b({
			un: $o('@ex'),
			da: $o(),
			g: function () {
				vm.da({
					dt: $D(),
					MS: _.m(['a', 'b'],
							function (t) {
								return {ms: vm.un() + ':' + t}
							})
				})
			},
			clr: function () {
				vm.da()
			}
		})
	}
	TWT = function () {
		$.x()
		$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')]).A()
		$.dW('da', [
			$.h3('dt:', $.spT('dt')),
			$.olE('MS',
					$.liT('ms')),
			$.bt$('clr', ' $parent.clr')
		])
		ok({
			un: ko.o('@ex'),
			da: ko.o(),
			g: function () {
				vm.da({
					dt: $D(),
					MS: _.m(['a', 'b'],
							function (t) {
								return {ms: vm.un() + ':' + t}
							})
				})
			},
			clr: function () {
				vm.da([])
			}
			//<- $.bt('Clear tweets').b$(' $parent.clearResults')
		})
	}
	TWT = function () {
		$.x()
		$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')]).A()
		$.dW('da', [
			$.h3('dt:', $.spT('dt')),
			$.olE('MS',
					$.liT('ms')),
			$.bt$('clr', ' $parent.clr')
		])
		ok({
			un: ko.o('@ex'),
			da: ko.o(),
			g: function () {
				vm.da({
					dt: $D(),
					MS: _.m(['a', 'b'],
							function (t) {
								return {ms: vm.un() + ':' + t}
							})
				})
			},
			clr: function () {
				vm.da([])
			}
			//<- $.bt('Clear tweets').b$(' $parent.clearResults')
		})
	}
	$.uLE = function (a) {
		var g = G(arguments)
		return $.ulE(a, $.li(g.r))
	}
//////////////
//bE, observableArray
	KOOA = function () {
		$.x()
		OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
		$.dE('peep', [$.p(
				$.spT('f'), ' ', $.spT('l')
		)])
		$.bt('push', function () {
			vm.peep.push({f: 'j', l: 'y'})
		})
	}
	ADD = function () {
		$.x('x', 'course')
		OK({
			cl: $oa(),
			a: function () {
				this.cl.p({
					n: 'j', c: $r()
				})
				return this
			}
		})
		$.s$('a', 'play'); //the order of these mets should reverse
		$.U('cl', [
			'name is ', $.sT('n'), ' and gusta ', $.sT('c')
		])
		vm.a().a().a()
		//https://www.youtube.com/watch?v=JGwRIbWWqjE
	}
	DELETE = function () {
		$.x()
//bind bt 'click' to parent.rem
		$.h4('People')
		$.ulE('peep', [$.li([
			$.sp('pos/name: '),
			$.spT('$index'),
			$.spT('n'),
			$.$bt('del', 'rm', '-')
		])])
		$.$bt('A')
		ok({
			peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
			A: function () {
				this.peep.push({n: "New at " + $D()})
			},
			rm: function (a) {
				vm.peep.remove(this)
			}
		})
	}
	ROOT = function () {
		$.x('x')
		$.uE('fs', [$.li().b({
			t: '$data',
			s: '{selected: $data==$root.chFI()}',
			$: '$root.gtf'
		})
		]).K('fs')
		ok({
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: ko.o(),
			gtf: function (f) {
				$l('click: ' + 'f: ' + f + ', this: ' + this)
				f = f || 'frog'
				vm.chFI(f)
			}
		})
	}
	BARN = function () {
		$.x()
		$.ulE('PL', [$.li([
			$.sp('Planet: '),
			$.b().bT('n'),
			$.dI('cap', [$.pT('cap.n')])
		])])
		ok('PL', [
			{n: 'Merc', cap: null},
			{n: 'Earth', cap: {n: 'Barn'}}
		])
	}
// WORKS //////////////////////////
	KO0 = function () {
		$.x();
		$.ipV('n');
		$.h1T('n')
		$.ulE('arr', [$.liT()])
		$.sb().b$('A')
		$.dA('b', 100, 300, 200, '+').bT('n')
		ok({
			n: ko.o('zi'), arr: ko.oa(),
			A: function () {
				this.arr.push(this.n())
			}
		}) // ok('n', ko.o('zi'))
		$.in(1, function () {
			vm.n('girf')
			_.e(['a', 'b', 'c'], function (i) {
				vm.arr.push(i)
			})
		}, '*')
	}
	KOE = function () {
		$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tBE('peep', [
				$.tr([
					$.tdT('f'),
					', ',
					$.tdT('l')
				])
			])])
		OK({
			peep: [
				{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}
			]
		})
	}
	NEST = function () {
		$.x('x').h2('Pp')
		Per = function (n, ch) {
			this.n = n
			this.ch = $oa(ch)
			this.A = function () {
				this.ch.push('new ch ' + $r())
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.uLE('peep',
				$.d([  // name has length children
					$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
					//new
					$.a$('New', 'A')
				]),
				$.uLE('ch',
						$.spT(), //child name
						$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
				)
		)
		$.cbC('showDT').a2Lb('Show time:')
		//anonymous vm
		ok({peep: peep, showDT: $o()})
	}
	TPLIST = function () {
		$.x()
		Meals = [{m: "sand", p: 0}, {m: "lobst", p: 34.95}, {m: "zebra", p: 290}]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([
						$.sl().b({o: 'Meals', ot: 'meal'})
					]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
//sort, remove
	BTRLST1 = function () {
		$.x('o')
		$.f().b({sb: 'A'}).A('Add item:',
				$.ip().b({v: 'tA', vU: 'afterkeydown'}),
				$.sb('Add').b('en', 'tA().length > 0')
		)
		$.p('Your values:')
		$.sl().mlt().b({o: 'all', so: 'sl'})
		$.d([
			$.bt('Rem').b({$: 'xSl', en: 'sl().length > 0'}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = $o('')
			this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
			this.sl = $oa(['Hm'])
			this.A = function () {
				if (this.tA() != '' && this.all.indexOf(this.tA()) < 0) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
	BTRLST = function () {
		$.x('o')
		f = $.fSb('A', ['Add:',
			$.ipV('tA'),
			$.sb('Add').bEn('tA().length>0')
		])
		$.p('Your values:')
		$.sl().mlt().b({
			o: 'all',
			so: 'sl'
		})
		$.d([
			$.bt('Rem').b({
				$: 'xSl',
				en: 'sl().length > 0'
			}),
			$.bt('Srt').b({$: 'srt', en: 'all().length > 1'})
		])
		Lst = function () {
			this.tA = kO('')
			this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)
			this.sl = kA('Hm')
			this.A = function () {
				if (this.tA() &&
						this.all.indexOf(this.tA()) < 0
				) {
					this.all.push(this.tA())
					this.tA('')
				}
			}
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
		ok(new Lst())
	}
//add, conditional el
	DIRT = function () {
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: ko.oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: ko.oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			}
			else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}//???
	KOFLM = function () {
		$.z('x')
		d = $.dI('hover').A(
				$.a().A(
						$.i('me').bT('matterId')
				)
		)
		d.mouseover(function () {
			var d = this
			//Show the div onmouseover.
			$l("!!!")
			$(d).next("#box").gg()
		})
		d.mouseout(function () {
			function onMouseOut(obj) {
				
				//d
				//Hide to div onmouseout
				//Todo:none
			}
		})
		$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
				$.li().A(d,
						$.dI('box').css('display', 'none').A(
								$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
				),
				$.li().bT('matterTitle'),
				$.li().bT('matterComment')
		)))
	}
	LIST = function () {
		$.x('z')
		f = $.f().A(
				$.sp('add item'),
				$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
				$.sb('add').bE('itemToAdd().length>0')
		)
		f.bSb('addItem')
		$.d().A(f,
				$.d().A(
						$.sp('Your values:'),
						$.sl().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				$.d().A(
						$.bt('remove').b({
							c: 'removeSelected',
							e: 'selectedItems().length>0'
						}),
						$.bt('sort').b({
							c: 'sortItems',
							e: 'allItems().length>1'
						}))
		)
		ok({
			itemToAdd: ko.o(''),
			allItems: ko.oa(['a', 'b', 'c']),
			selectedItems: ko.oa(['d']),
			addItem: function () {
				$l('addItem')
				if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
					vm.allItems.push(vm.itemToAdd());
					vm.itemToAdd('')
				}
			},
			removeSelected: function () {
				allItems.removeAll(o.selectedItems())
				selectedItems([])
			},
			sortItems: function () {
				o.allItems.sort()
			}
		})
	}
	function book() {
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
	}
	
	MENU = function () {
		$.z('b').h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
						$.tr().A(
								$.td().bT('n'),
								$.td().bT('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().bT('m().p')
						)
				)
		)
		ko.b({
			seats: $oa([
				{n: 'Jo', m: ko.o(AM[0])},
				{n: 'Bo', m: ko.o(AM[1])}]),
			A: function () {
				vm.seats.push({
					n: 'hahaha',
					m: ko.o({n: 'noodles', p: 30})
				})
			}
		})
	}
	KODIRT = function () {
		messages = [
			{
				message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
			},
			{
				message: 'yano',
				score: 3,
				responses: [
					{
						response: 'is cool guy',
						comments: [
							{comment: 'hi'},
							{comment: 'hello'}]
					},
					{response: 'a'},
					{response: 'b'},
					{response: 'fun'}]
			}, {
				message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
			}, {
				message: 'lame', score: 20, responses: [
					{
						response: 'weird', comments: [
						{comment: 'not!!!!1'}]
					},
					{
						response: 'lamer', comments: [
						{comment: 'fuck ya'}]
					}]
			},
			{message: 'rocks', score: 4, responses: []}
		]
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: $oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: $oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
		z()
		p1 = push1
		p2 = push2
		newComment = function (comments, comment) {
			comments.push({comment: comment})
		}
		TextBindingSpan = spb = function (a) {
			return $.span().b('text', a)
		}
		$.d('z').mg(20).fe('m')(
				$.h1().C('y', 'c')(
						TextBindingSpan('message'),
						$.span(' '),
						TextBindingSpan('score'),
						p1($.h2(
								$.input(400),
								$.button('new r')
						)),
						$.h2().feD('responses').C('r').A(
								p1.A(TextBindingSpan('response')),
								p2.A(
										$.h4(
												$.input(400), $.button('new c'))
								),
								$.h4().C('b').feD('comments').A(
										p2.A(
												TextBindingSpan('comment'))))),
				$.br(),
				$.br()
		).A()
		vm = {
			m: $oa(messages),
			responses: $oa([{response: 'one'}, {response: 'two'}])
		}
		ko.applyBindings(vm)
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: $oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: $oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: $oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: $oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}//MASTERPIECE
	KOMASTERPIECE = DIRT = function () {
		z()
		p1 = push1
		p2 = push2
		newComment = function (comments, comment) {
			comments.push({comment: comment})
		}
		TextBindingSpan = spb = function (a) {
			return $.span().b('text', a)
		}
		$.div('black').mg(20).fe('m')(
				$.h1().C('y', 'c')(
						TextBindingSpan('message'),
						$.span(' '),
						TextBindingSpan('score'),
						p1($.h2(
								$.input(400),
								$.button('new r')
						)),
						$.h2().feD('responses').C('r').A(
								p1.A(TextBindingSpan('response')),
								p2.A(
										$.h4(
												$.input(400), $.button('new c'))
								),
								$.h4().C('b').feD('comments').A(
										p2.A(
												TextBindingSpan('comment'))))),
				$.br(),
				$.br()
		).A()
		vm = {
			m: ko.oa(messages),
			responses: ko.oa([{response: 'one'}, {response: 'two'}])
		}
		ko.applyBindings(vm)
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	DIRT = function () {
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: ko.oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: ko.oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
	DIRT = function () {
		$.z('g').fm() //KOMASTERPIECE
		$.cm = $.Cm = function (cms, cc) {
			cms.push({comment: cc})
		}
		$.spT = function (a) {
			return $.sp().b('text', a)
		}
		d = $.d('z')//.mar(20)
				.bE('m').A(
				$.h1().C('y', 'c').A(
						$.spT('message'), $.sp(' '), $.spT('score'),
						s1.A($.h2().A($.ip(400), $.bt('new r'))),
						$.h2().bE('responses').C('r').A(
								s1.A($.spT('response')),
								s2.A($.h4(
										//$.iP(400),
										$.bt('new c'))),
								$.h4().C('b').bE('comments').A(
										s2.A($.spT('comment'))
								)
						)
				),
				$.br(),
				$.br()
		)
		ko.b({
			m: ko.oa(messages = [{
				message: 'zi', score: 100, responses: [
					{
						response: 'good coder',
						comments: [{comment: '..eh'}]
					},
					{response: 'cool girl'}
				]
			},
				{
					message: 'yano', score: 3,
					responses: [{
						response: 'is cool guy',
						comments: [{comment: 'hi'}, {comment: 'hello'}]
					},
						{response: 'a'}, {response: 'b'}, {response: 'fun'}]
				},
				{
					message: 'is awesome', score: 0, responses: [
					{response: 'afsdafsd'}]
				},
				{
					message: 'lame', score: 20, responses: [
					{response: 'weird', comments: [{comment: 'not!!!!1'}]},
					{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
				},
				{message: 'rocks', score: 4, responses: []}
			]),
			responses: ko.oa([
				{response: 'one'},
				{response: 'two'}
			])
		})
		f = function () {
			vm.p.push({f: 'jason', l: 'yano'})
		}
	}
}