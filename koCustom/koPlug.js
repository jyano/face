
function Task(title, done) {
//return {tt: ko.o(title), done: ko.o(done)}
	this.title = ko.o(title)
	this.done = ko.o(done)
}
function AppViewModel() {
	this.tasks = ko.observableArray([
		new Task('Find new desktop background', true),
		new Task('Put shiny stickers on laptop', false),
		new Task('Request more reggae music in the office', true)
	])
	// Here's where we use the custom function
	this.doneTasks = this.tasks.filterByProperty("done", true);
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
FLVIEWPLG = function () {
	
tasks = ko.oa(
		Task('Find new desktop background', 1),
		Task('Put shiny stickers on laptop'),
		Task('Request more reggae music in the office', 1))
	
	//$.h3('All tasks').A($.spT('tasks().length'))
	$.h3('All tasks').A($.sp().bT('tasks().length'))
	$.h3('All tasks').A($.spT('tasks().length'))
	$.ulE('tasks', [
		$.lL([
			$.cbC('done'), $.spT('tt')
		])
	])
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
	$.ulE('tasks', [$.lL([$.cbC('done'), $.spT('tt')])])
	$.h3('All tasks').A($.sp().bT('tasks().length'))
	$.ul().bE('tasks').A($.li().A(
			$.lb().A($.cb().bC('done'), $.sp().bT('title'))))
	$.h3('Done tasks').A($.sp().bT('doneTasks().length'))
	$.ul().bE('doneTasks').A($.li().bT('text'))
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
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	// $.h3('Done tasks').A($.sp().bT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
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
URLBINDPLUGIN = function () {
	var currentParams = {}, updateTimer
	// Gives an address (URL) to a view model state
}
ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
	// When the observable changes, update the URL
	observable.subscribe(function (val) {
		var valueToWrite = val === defaultValue ? null : ensureString(val);
		if (currentParams[hashPropertyName] !== valueToWrite) {
			currentParams[hashPropertyName] = valueToWrite;
			queueAction(function () {
				for (var key in currentParams)
					$.address.parameter(key, currentParams[key])
				$.address.update()
			})
		}
	})
	// When the URL changes, update the observable
	$.address.change(function (evt) {
		currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
		observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
	})
}
function ensureString(val) {
	return (  U(val) || val === null ) ? val : val.toString()
}
function queueAction(action) {
	if (updateTimer) {
		clearTimeout(updateTimer)
	}
	updateTimer = _.sT(action, 0)
}
/*alt:
 this.doneTasks = ko.pureComputed(function() {
 var all = this.tasks(), done = [];
 for (var i = 0; i < all.length; i++)
 if (all[i].done())
 done.push(all[i]);
 return done;
 }, this);
 
 */// $.address.autoUpdate(false)
// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'