DPS = DIRTPAGESRV = function () {
	var newMsBox, newTopic, newMs, searchBox
	MsM = _M()
	MsC = _C({m: 'MsM'})
	MsView = _V()
	MssView = _V()
	$.h1().A($.a('Dirtpage', '/wap/dirtpage/')).A()
	$.dI('content')
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		function loadRes() {
			$.G('topics/' + wappyPam, function (msgs) {
				$('#results').ht($.h5('len: ' + msgs.length))
				_.e(msgs, function (ms) {
					$('#res').A($.h6(ms.ms))
				})
			})
		}
		
		loadRes()
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
	if (wappyPam) {
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		$.g('topics/' + wappyPam, function (msgs) {
			$('#results').ht($.h5('len: ' + msgs.length))
			_.e(msgs, function (ms) {
				$('#res').A($.h6(ms.ms))
			})
		})
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
}
DPS1 = DIRTPAGESRV1 = function () {
	$.x()
	var newMsBox, newTopic, newMs, searchBox
	MsM = $$M({})
	MsC = $$C({m: 'MsM'})
	MsView = $$V({})
	MssView = $$V({})
	$.h1().A(
			$.a('Dirtpage', '/wap/dirtpage/')
	).A()
	$.dI('content')
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		$.g('topics/' + wappyPam, function (msgs) {
			$('#results').ht($.h5('len: ' + msgs.length))
			_.e(msgs, function (ms) {
				$('#res').A($.h6(ms.ms))
			})
		})
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
}
DPS2 = DIRTPAGESRV0 = function () {
	$.x()
	var newMsBox, newTopic, newMs, searchBox
	MsM = Bb.M.e({})
	MsC = Bb.C.e({m: 'MsM'})
	MsView = Bb.V.e({})
	MssView = Bb.V.e({})
	$.h1().A(
			$.a('Dirtpage', '/wap/dirtpage/')
	).A()
	$.dI('content')
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		function loadRes() {
			$.G('topics/' + wappyPam, function (msgs) {
				$('#results').ht($.h5('len: ' + msgs.length))
				_.e(msgs, function (ms) {
					$('#res').A($.h6(ms.ms))
				})
			})
		}
		
		loadRes()
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
}
DIRTPAGESRV = function () {
	$.x()
	var newMsBox, newTopic, newMs, searchBox
	MsM = bb.M.e({})
	MsC = bb.C.e({m: 'MsM'})
	MsView = bb.V.e({})
	MssView = bb.V.e({})
	$.h1().A(
			$.a('Dirtpage', '/wap/dirtpage/')
	).A()
	$.dI('content')
	if (wappyPam) {
		newMsBox = $.d().WH('auto').A(
				$.h1('new ms'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					var newMs = $('#newMs').v()
					$.P('messages', {
						tpc: wappyPam, ms: newMs
					}, function () {
						loadResults()
					})
				}))
		$('#cont').A($.h1('the ' + wappyPam + ' page'),
				newMsBox, $.dI('res'))
		function loadRes() {
			$.G('topics/' + wappyPam, function (msgs) {
				$('#results').ht($.h5('len: ' + msgs.length))
				_.e(msgs, function (ms) {
					$('#res').A($.h6(ms.ms))
				})
			})
		}
		
		loadRes()
	}
	else {
		newMsBox = $.d().WH('auto').A(
				$.h1('new message'),
				$.ip().K('form-control').id('newTopic'),
				$.ip().K('form-control').id('newMs'),
				$.bt('ok', function () {
					newTopic = $('#newTopic').v()
					newMs = $('#newMs').v()
					$.P('msgs', {topic: newTopic, message: newMs}, function () {
					})
				})
		)
		searchBox = $.d().WH('auto').A(
				$.h1('search'),
				$.ip().K('form-control').id('searchInput'),
				$.bt('ok', function () {
					window.location = '/wap/dirtpage/' + $('#searchInput').v()
					searchInput = $('#searchInput').v()
					$.G('topics/' + searchInput, function (msgs) {
						$('#res').ht($.h5('len: ' + msgs.length))
						_.e(msgs, function (ms) {
							$('#res').A($.h6(ms.ms))
						})
					})
				})
		)
		$.dI('res')
		$('#cont').A(newMsBox, searchBox)
		$.eG('msgs', function (ms) {
			$('#res').A($.h2().A(
							$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
					$.h3('ms: ' + ms.ms)
			)
		})
	}
}
AVAILSRV = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	M$ = function (ob) {
		ob = O(ob) ? ob : {}
		var Md, md
		Md = bb._M(ob)
		md = new Md(ob)
		return md
	}
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
}
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
RESTPERSIST0 = function () {
	
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
	Td = $M({df: {tt: '', completed: false}})
	TdsCl = $Cl({md: Td, url: '/tds'})
	tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
}
SAVEMDTOSERVER = function () {
	
	
	// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
	//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
	// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2);
	td2.s('tt', 'go fishing');
	td2.S(); // sends HTTP PUT to /tds/2
	tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
	//  Deleting mds from server
	//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2)
	td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
	// Calling destroy onMd will return false if md isNew:
	td = new Bb.Md();
	$l(td.destroy())  // false
	// Options
	// Each RESTful API met accepts a variety of ops.
	//  Most importantly, all mets accept success and error cbs which can be used
	//  to custize handling of server responses.
	//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
	//  instead of entire md; i.e. md.save(attrs, {patch: true}):
	// Save partial using PATCH
	md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
	md.save();
	md.save({b: 2, d: 4}, {patch: true});
	$l(this.syncArgs.met);
	// 'patch'
	// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
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
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		s1.A('your objects', $.br(2), t = $.ip(),
				$.bt('new object', function () {
					$.P('newObj',
							{t: t.V()})
				}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
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
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//http://robdodson.me/some-more-backbone-dot-js-basics/
ITEMS = function () {
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
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
DUDE = BKSARR = LS1 = function () {
	$Ms('LS1')
	Bks = Bb.C.x({
		model: Bb.M,
		localStorage: new Bb.LocalStorage('bks')
	})
	bks = new Bks(bksArr)
	Dude = Bb.M
	d = new Dude()
	d1 = Dude.c
	//bks.save()
}
NOTE = function () {
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
	function notes() {
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
		var m = new Ap.M.Avail({
			collection: qiv('newAvail')
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
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = V$({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		E: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			$(this.$el.find('#avail')).cE(0)
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
	Ap.V.Avails = V$({
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
	avs = new Ap.C.Avails
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = new Ap.V.Avails({cl: avs})
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
AVAIL2 = function () {
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
AVAIL4 = function () {
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
AVAIL5 = function () {
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
function setup() {
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
function status() {
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
	avs = Ap.C.Avails()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
} 