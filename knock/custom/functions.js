$L()
function _pre(){
oA = ko.observableArray.fn
oA.rm = function (i) {
	var oA = this
	oA.remove(i)
	return oA
}
oA.p = function (i) {
	var oA = this
	oA.push(i)
	return oA
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
	$.x('x')
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
SORTITEMS_vm = function () {
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