TLVM = function () {
	var o = {
		ts: $oa([]),
		nT: $o()
	}
	o.inc = ko.c(function () {
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
ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
	return ko.pureComputed(function () {
		var allItems
		allItems = this(), matchingItems = []
		for (var i = 0; i < allItems.length; i++) {
			var current = allItems[i]
			if (ko.unwrap(current[propName]) === matchValue)
				matchingItems.push(current)
		}
		return matchingItems
	}, this)
}
ko.$oa('filterByProperty', function (propName, matchValue) {
	return ko.pureComputed(function () {
		var allItems = this(), matchingItems = [];
		for (var i = 0; i < allItems.length; i++) {
			var current = allItems[i];
			if (ko.unwrap(current[propName]) === matchValue)
				matchingItems.push(current)
		}
		return matchingItems
	}, this)
})
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
ko.oA.fn.filterByProperty = function (propName, matchValue) {
	return ko.pureComputed(function () {
		var allItems = this(), matchingItems = [];
		for (var i = 0; i < allItems.length; i++) {
			var current = allItems[i];
			if (ko.unwrap(current[propName]) === matchValue)
				matchingItems.push(current)
		}
		return matchingItems
	}, this)
	ko.oA.fn.filterByProperty = function (propName, matchValue) {
		return ko.pureComputed(function () {
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
}
FLVIEWPLG = function () {

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
	$.h3('All tasks').A($.spT('tasks().length'))
	$.ulE('tasks', [
		$.lL([
			$.cbC('done'), $.spT('tt')
		])
	])
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
	tasks = ko.oa(
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
}
KOEXT = function () {
	//  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables
	/*
	
	 base classe:  subscribable
	 subscribable <-  observable
	 subscribable <- computed
	 observable <- observableArray
	
	
	 Adding custom functions using "fn"
	 You can define custom functions on any of the following types:
	
	 ko.subscribable.fn       ko.observable.fn      ko.observableArray.fn     ko.computed.fn
	
	 Example: A filtered view of an observable array
	 Here’s a way to define a "filterByProperty" function
	 ko.observableArray.filterByProperty -see above :)
	 It returns a new computed value that provides a filtered view of the array,
	 while leaving the original array unchanged. Because the filtered array is
	 a computed observable,
	 it will be re-evaluated whenever the underlying array changes.
	 ex how to use:  http://knockoutjs.com/documentation/fn.html
	
	
	
	 <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
	 <ul data-bind="foreach: tasks">
	 <li>
	 <label>
	 <input type="checkbox" data-bind="checked: done" />
	 <span data-bind="text: title"> </span>
	 </label>
	 </li>
	 </ul>
	
	 <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
	 <ul data-bind="foreach: doneTasks">
	 <li data-bind="text: title"></li>
	 </ul>
	
	 */
	ok(new VM())
	//    not mandatory
	/*
	
	
	
	 If you tend to filter observable arrays a lot,
	 adding a filterByProperty globally to all observable arrays might make your code tidier.
	 But if you only need to filter occasionally,
	 you could instead choose not to attach to ko.observableArray.fn,
	 and instead just construct doneTasks by hand as follows:
	
	
	 */
	func = function () {
		var all, done
		all = this.tasks()
		done = []
		for (var i = 0; i < all.length; i++) {
			if (all[i].done()) {
				done.push(all[i])
			}
		}
		return done
	}
	this.doneTasks = ko.pureComputed(func, this)
	this.doneTasks = ko.pc(function () {
		var all, done
		all = this.tasks()
		done = []
		for (var i = 0; i < all.length; i++) {
			if (all[i].done()) {
				done.push(all[i])
			}
		}
		return done
	}, this)
	/*
	
	 base classe:  subscribable
	 subscribable <-  observable
	 subscribable <- computed
	 observable <- observableArray
	
	
	 Adding custom functions using "fn"
	 You can define custom functions on any of the following types:
	 ko.subscribable.fn
	 ko.observable.fn
	 ko.observableArray.fn
	 ko.computed.fn
	
	
	 Example: A filtered view of an observable array
	 Here’s a way to define a "filterByProperty" function
	 ko.observableArray.filterByProperty
	
	 */
	ko.oA.fn.filterByProperty = function (propName, matchValue) {
		return ko.pc(function () {
			var allItems = this(), matchingItems = []
			for (var i = 0; i < allItems.length; i++) {
				var current = allItems[i]
				if (ko.unwrap(current[propName]) === matchValue)
					matchingItems.push(current)
			}
			return matchingItems
		}, this)
	}
	/*
	 This returns a new computed value that provides a filtered view of the array,
	 while leaving the original array unchanged. Because the filtered array is a computed observable,
	 it will be re-evaluated whenever the underlying array changes.
	 The following live example shows how you could use this:
	 http://knockoutjs.com/documentation/fn.html
	 */
	/*
	
	 <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
	 <ul data-bind="foreach: tasks">
	 <li>
	 <label>
	 <input type="checkbox" data-bind="checked: done" />
	 <span data-bind="text: title"> </span>
	 </label>
	 </li>
	 </ul>
	
	 <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
	 <ul data-bind="foreach: doneTasks">
	 <li data-bind="text: title"></li>
	 </ul>
	 Source code: View model
	 */
	function Task(tt, done) {
		this.title = ko.o(tt)
		this.done = ko.o(done)
	}
	
	function AppViewModel() {
		this.tasks = ko.oa([
			new Task('Find new desktop background', true),
			new Task('Put shiny stickers on laptop', false),
			new Task('Request more reggae music in the office', true)
		])
		// Here's where we use the custom function
		this.doneTasks = this.tasks.filterByProperty("done", true)
	}
	
	/*
	 ko.applyBindings(new AppViewModel());
	 It’s not mandatory
	 If you tend to filter observable arrays a lot,
	 adding a filterByProperty globally to all observable arrays might make your code tidier.
	 But if you only need to filter occasionally,
	 you could instead choose not to attach to ko.observableArray.fn,
	 and instead just construct doneTasks by hand as follows:
	
	
	 */
	this.doneTasks = ko.pc(function () {
		var all, done
		all = this.tasks()
		done = []
		for (var i = 0; i < all.length; i++) {
			if (all[i].done()) {
				done.push(all[i])
			}
		}
		return done
	}, this)
}
function VM() {
	this.tasks = ko.oa([
		Task('Find new desktop background', true),
		Task('Put shiny stickers on laptop', false),
		Task('Request more reggae music in the office', true)
	])
	this.doneTasks = this.tasks.filterByProperty("done", true)
}
function AppViewModel() {
	this.tasks = $oA([
		new Task('Find new desktop background', 1),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', 1)
	])
	// Here's where we use the custom function
	this.doneTasks = this.tasks.filterByProperty("done", 1)
}
function Task(title, done) {
//return {tt: ko.o(title), done: ko.o(done)}
	this.title = ko.o(title)
	this.done = ko.o(done)
}
function TasksAppViewModel() {
	this.tasks = ko.observableArray([
		new Task('Find new desktop background', true),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', true)
	])
	// Here's where we use the custom function
	this.doneTasks = this.tasks.filterByProperty("done", true);
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
function VM() {
	this.prods = $oA()
}
VM.prototype.A = function () {
	this.prods.push(Prod('Prod ' + (this.prods().length + 1)))
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
koTask = koTsk = Task = function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
TASKS = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
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
EACH = function () {
	TLVM = function () {
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
	OK(TLVM())
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
}
ULTASKMISC = function () {
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ", $.ip().v$('nT').ph("What?"), $.bt('Add'))
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
		ts: $oa(),
		nT: $o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: $o(o.nT()), iD: $o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
	 */
	$.f().bSm('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({
		e: 'ts', vs: 'visible:ts().length>0'
	}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
		ts: $oa(),
		nT: $o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: $o(o.nT()), iD: $o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	s2(
			h3('Tasks'),
			_f().b("S", "aT")(
					"Add task: ",
					ip().b('v', 'nT').ph("What?"),
					bt('Add').at('t', 's')
			),
			ul(
					li()(
							cb().b('ch', 'iD'),
							ip().b("value:t, disable:iD"),
							lk('Del').b('ch', '$parent.rmT')
					)
			).b("foreach:ts, visible:ts().length>0"),
			sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
			sp("- beer!").b("visible: inc().length==0")
	)
	//ko.ab(TLVM())
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
}
TASKS = function () {
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
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
Task = function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
Task = function (d) {
	return {t: $o(d.t), iD: $o(d.iD)}
}
TASKER = function () {
	$.x()
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Task = bb.M.e({})
	t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
	t2 = Ap.M.Task.o({t: 'go park', pr: 3})
	Ap.V.Tsk = bb.V.e({
		t: 'li',
		rr: function () {
			this.A(this.g('t'))
			return this
		}
	})
	taskView = Ap.V.Tsk.o({m: t1})
	Ap.C.Tasks = bb.C.e({m: Ap.M.Tsk})
	tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
	Ap.V.Tasks = bb.V.e({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tasksV = Ap.V.Tasks.o({cl: tasks})
}
TASKS = function () {
	$.f().bSb('aT').A().A("Add task: ",
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
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
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
TASK = function () {
	$.z('r')
}
TASKS1 = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
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