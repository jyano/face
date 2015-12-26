SORTITEMS = function () {
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
ko.$oa = function (name, fn) {
	ko.oa.fn[name] = fn
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
KOFILTER = function () {
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
}
KOSCR = function () {// SCRIPTING??!
	$.A($.scrp('tt').A($.h1('afsdfds')),
			$.d().bT("{name:'tt'}"))
	// kob= ko.observable.prototype; kob.rm= kob.remove
	ok({})
}
function VM() {
	this.tasks = ko.oa([
		Task('Find new desktop background', true),
		Task('Put shiny stickers on laptop', false),
		Task('Request more reggae music in the office', true)
	])
	this.doneTasks = this.tasks.filterByProperty("done", true)
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
function Task(title, done) {
	this.title = $o(title)
	this.done = $o(done)
}
function AppViewModel() {
	this.tasks = $oArray([
		new Task('Find new desktop background', 1),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', 1)
	])
	// Here's where we use the custom function
	this.doneTasks = this.tasks.filterByProperty("done", 1)
}
KOEXT = function () {
	
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
	
	/*
	 ko.applyBindings(new AppViewModel());
	 It’s not mandatory
	
	 If you tend to filter observable arrays a lot, adding a filterByProperty globally to all observable arrays might make your code tidier. But if you only need to filter occasionally, you could instead choose not to attach to ko.observableArray.fn, and instead just construct doneTasks by hand as follows:
	
	
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
}
KOEXTALT = function () {
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