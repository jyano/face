KOLST = EACHS = SELLISTMISC = function () {
	$.d().A(
			$.f().b('S', 'addItem').A(
					$.sp('add item'),
					$.ip().b({
						v: 'itemToAdd'//,vu:'afterkeydown'
					}),
					$.sm('add').e$('itemToAdd().length>0')),
			$.d().A($.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						sO: 'selectedItems'
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
	ok(o = BLM())
	form = f = $.f()
	form.sm$('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').en$('itemToAdd().length>0'))
	$.d().A(form,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems', sO: 'selectedItems'
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
	ok(new Lst())
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	f = $.f().A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sm('add').en$('itemToAdd().length>0')
	)
	f.sm$('addItem')
	$.d().A(f, $.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						sO: 'selectedItems'
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
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	f = $.fo().sm$('A', ['Add:',
		$.ip().v$('tA'),
		$.sb('Add').en$('tA().length>0')
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
		$.bt('Srt').b({
			$: 'srt',
			en: 'all().length > 1'
		})
	])
	ok(new Lst())
	//sort, remove
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
	ok(new Lst())
	f = $.fSm('A', ['Add:',
		$.ipV('tA'),
		$.sb('Add').en$('tA().length>0')
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
	ok(new Lst())
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').e$('itemToAdd().length>0')
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
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	ok(new Lst())
}
REMOVE1 = EACH = function () {
	$.fo({submit$: 'aT'},
			"Add task: ",
			$.ip("What?").v$('nT'),
			$.bt('Add').at('t', 's')
			//alt = $.fo.sm$("aT").A("Add task: ", $.ip("What?").v$('nT'), $.bt('Add').at('t', 's')),
	)
	$.ul({
		enable$: 'ts',
		visible$: 'ts().length>0',
		child: $.li([
			$.cb.checked$('iD'),
			$.ip({value$: 't', disable$: 'iD'}),
			$.a({checked$: '$parent.rmT'}, 'Del')
		])  //alt = $.ul().A($.li().A($.cb().ch$('iD'), ip().b("value:t, disable:iD"), lk('Del').b('ch', '$parent.rmT'))).b("foreach:ts, visible:ts().length>0"),
	})
	$.d([
		"You have",
		$.B({text$: "inc().length"}, "&nbsp;"),
		$.sp({vs$: "inc().length==0"}, "inc task(s)   - beer!")
	])
	tlVM = function () {
		var o = {}
		o.itemToAdd = $o('')
		o.allItems = $oa(['a', 'b', 'c'])
		o.selectedItems = $oa(['d'])
		o.addItem = function () {
			if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
			) {
				o.allItems.push(o.itemToAdd());
				o.itemToAdd('')
			}
		}
		o.removeSelected = function () {
			o.allItems.removeAll(
					o.selectedItems())
			o.selectedItems([])
		}
		o.sortItems = function () {
			o.allItems.sort()
		}
		return o
	}
	tlVM = function () {
		var o = {
			ts: $oa([]),
			nT: $o()
		}
		o.inc = $c(function () {
			return ko.ut.af(
					o.ts(),
					function (t) {
						return !t.iD()
					}
			)
		})
		o.aT = function () {
			o.ts.push(Task({t: o.nT()}))
			o.nT("")
		}
		o.rmT = function (t) {
			o.ts.remove(t)
		}
		$.gJ('/ts', function (d) {
			o.ts(_.m(d, function (i) {
				return Task(i)
			}))
		})
		return o
	}
	ok(tlVM())
}
REMOVE = TASKS = function () {
	$.f().sm$('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({
		e: 'ts',
		vs: 'visible:ts().length>0'
	}).A(
			$.li().A(
					$.cb().bC('iD'),
					$.ip().b("value:t, disable:iD"),
					$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ok({
		itemToAdd: $o(''),
		allItems: $oA(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}
BLM = function () {
	var o = {}
	o.itemToAdd = $o('')
	o.allItems = $oa(['a', 'b', 'c'])
	o.selectedItems = $oa(['d'])
	o.addItem = function () {
		if (o.itemToAdd() != ''//&& o.allItems.indexOf(o.itemToAdd())<0
		) {
			o.allItems.push(o.itemToAdd());
			o.itemToAdd('')
		}
	}
	o.removeSelected = function () {
		o.allItems.removeAll(o.selectedItems())
		o.selectedItems([])
	}
	o.sortItems = function () {
		o.allItems.sort()
	}
	return o
}
TSK = FILTERBYPROPERT = FILTERTASKSPLUGIN = function () {
	Task = koTask = function (title, done) {
//return {tt: ko.o(title), done: ko.o(done)}
		this.title = $o(title)
		this.done = $o(done)
		Task_ = function (d) {
			return {
				title: $o(d.t),
				done: $o(d.iD)
			}
		}
	}
//FILTERBYPROP IN ADDINGCUSTOM FNS http://knockoutjs.com/documentation/fn.html
	ko.oA.fn.filterByProperty = function (propName, matchValue) {
		return ko.pC(function () {
			var allItems = this(),
					matchingItems = [];
			for (var i = 0; i < allItems.length; i++) {
				var current = allItems[i];
				if (ko.unwrap(current[propName]) === matchValue)
					matchingItems.push(current)
			}
			return matchingItems
		}, this)
	}
	function VM(p) {
		this.tasks = ko.oa([
			Task('Find new desktop background', true),
			Task('Put shiny stickers on laptop', false),
			Task('Request more reggae music in the office', true)
		])
		this.doneTasks = this.tasks.filterByProperty("done", true)
		this.prods = $oA()
		this.somePop = p.smKey
		this.tasks = $oA([
			new Task('Find new desktop background', 1),
			new Task('Put shiny stickers on laptop', false),
			new Task('Request more reggae music in the office', 1)
		])
		// Here's where we use the custom function
		this.doneTasks = this.tasks.filterByProperty("done", 1)
	}

//filter the items using the filter text
	vm.filteredItems = ko.c(function () {
		var t = this, fl
		fl = t.filter().toLowerCase()
		if (!fl) {
			return t.items()
		}
		else {
			return ko.utils.arrayFilter(t.items(), function (it) {
				return ko.utils.stringStartsWith(
						it.name().toLowerCase(), fl)
			})
		}
	}, vm)
	$.h3('All tasks').A(t$('tasks().length'))
	$.ulE('tasks', [
		$.lL([$.cb().ch$('done'), t$('tt')])
	])
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
	tasks = $oA(
			Task('new background', 1), Task('stickers'), Task('reggae', 1)
	)
	ok({
		tasks: tasks,
		doneTasks: tasks.filterByProperty("done", 1)
	})
	/*alt:
	 this.doneTasks = ko.pureComputed(function() {
	 var all = this.tasks(), done = [];
	 for (var i = 0; i < all.length; i++)
	 if (all[i].done())
	 done.push(all[i]);
	 return done;
	 }, this);
	 */
	function alt() {
		FLVIEWPLG = function () {
			tasks = $oA(
					Task('Find new desktop background', 1),
					Task('Put shiny stickers on laptop'),
					Task('Request more reggae music in the office', 1))
			//$.h3('All tasks').A($.spT('tasks().length'))
			$.h3('All tasks').A($.sp().t$('tasks().length'))
			$.h3('All tasks').A($.sp().t$('tasks().length'))
			$.ulE('tasks', [
				$.lL([
					$.cb().ch$('done'), $.sp().t$('tt')
				])
			])
			$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
			$.ulE('doneTasks', [$.li().t$('tt')])
			$.ulE('tasks', [$.lL([$.cb().ch$('done'), $.sp().t$('tt')])])
			$.h3('All tasks').A($.sp().bT('tasks().length'))
			$.ul().bE('tasks').A($.li().A(
					$.lb().A($.cb().ch$('done'), $.sp().t$('title'))))
			$.h3('Done tasks').A($.sp().bT('doneTasks().length'))
			$.ul().e$('doneTasks').A($.li().bT('text'))
			ko.b(new AppViewModel())
			/*alt:
			 this.doneTasks = ko.pureComputed(function() {
			 var all = this.tasks(), done = [];
			 for (var i = 0; i < all.length; i++)
			 if (all[i].done())
			 done.push(all[i]);
			 return done;
			 }, this);
			 */
			// $.ul().bE('tasks').A($.li().A($.lb().A($.cb().bC('done'), $.sp().bT('title'))))
			$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
			// $.h3('Done tasks').A($.sp().bT('doneTasks().length'))
			$.ul([$.li().t$('tt')]).e$('doneTasks')
			//$.ul().bE('doneTasks').A( $.li().bT('text') )
			ok({
				tasks: tasks,
				doneTasks: tasks.filterByProperty("done", 1)
			})
			/*alt:
			 this.doneTasks = ko.pureComputed(function() {
			 var all = this.tasks(), done = [];
			 for (var i = 0; i < all.length; i++)
			 if (all[i].done())
			 done.push(all[i]);
			 return done;
			 }, this);
			 */
		}
		tasks = $oA([
			new Task('Find new desktop background', true),
			new Task('Put shiny stickers on laptop', false),
			new Task('Request more reggae music in the office', true)
		])
	}
}
BTRLST = function () {
//http://knockoutjs.com/documentation/unobtrusive-event-handling.html
	f = $.fSb('A', ['Add:',
		v$('tA'),
		$.sb('Add').en$('tA().length>0')
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
	ok(new Lst())
	function more() {
		BTRLST1 = function () {
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
			$b(new Lst())
		}
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
			this.xSl = function () {
				this.all.removeAll(this.sl())
				this.sl([])
			}
			this.srt = function () {
				this.all.sort()
			}
		}
	}
}
