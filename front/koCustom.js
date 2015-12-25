ko.bP = ko.bindingProvider;
ko.bP.i = ko.bP.instance
ko.bP.instance.preprocessNode = function (node) {
	// Only react if this is a comment node of the form <!-- template: ... -->
	if (node.nodeType == 8) {
		var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
		if (match) {
			// Create a pair of comments to replace the single comment
			var c1 = document.createComment("ko " + match[1]),
					c2 = document.createComment("/ko");
			node.parentNode.insertBefore(c1, node);
			node.parentNode.replaceChild(c2, node);
			// Tell Knockout about the new nodes so that it can apply bindings to them
			return [c1, c2];
		}
	}
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
URLBINDPLUGIN = function () {
	var currentParams = {}, updateTimer
	// Gives an address (URL) to a view model state
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
	}// $.address.autoUpdate(false)
// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'
}
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
FLVIEWPLG = function () {
	
	//$.h3('All tasks').A($.spT('tasks().length'))
	$.h3('All tasks').A($.sp().bT('tasks().length'))
	$.ulE('tasks', [$.lL([$.cbC('done'), $.spT('tt')])])
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
KOSCR = function () {
	$.A($.scrp('tt').A($.h1('afsdfds')),
			$.d().bT("{name:'tt'}"))
	// kob= ko.observable.prototype; kob.rm= kob.remove
	ok({})
}
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
$.tVs = function (a) {
	return $.t().bVs(a)
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
ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
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
ko.bindingProvider.instance.preprocessNode = function (node) {
	// Only react if this is a comment node of the form <!-- template: ... -->
	if (node.nodeType == 8) {
		var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
		if (match) {
			// Create a pair of comments to replace the single comment
			var c1 = document.createComment("ko " + match[1]),
					c2 = document.createComment("/ko");
			node.parentNode.insertBefore(c1, node);
			node.parentNode.replaceChild(c2, node);
			// Tell Knockout about the new nodes so that it can apply bindings to them
			return [c1, c2];
		}
	}
};
// Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'
(function () {
	var currentParams = {},
			updateTimer
	
	function ensureString(value) {
		return ((value === null) || (value === undefined)) ? value : value.toString();
	}
	
	// Gives an address (URL) to a view model state
	ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
		// When the observable changes, update the URL
		observable.subscribe(function (value) {
			var valueToWrite = value === defaultValue ? null : ensureString(value);
			if (currentParams[hashPropertyName] !== valueToWrite) {
				currentParams[hashPropertyName] = valueToWrite;
				queueAction(function () {
					for (var key in currentParams)
						$.address.parameter(key, currentParams[key]);
					$.address.update();
				});
			}
		});
		// When the URL changes, update the observable
		$.address.change(function (evt) {
			currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
			observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
		});
	}
	function queueAction(action) {
		if (updateTimer)
			clearTimeout(updateTimer);
		updateTimer = setTimeout(action, 0);
	}
	
	// $.address.autoUpdate(false)
})()
ko.observableArray.fn.filterByProperty = function (propName, matchValue) {
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
	function VM() {
		this.tasks = ko.oa([
			Task('Find new desktop background', true),
			Task('Put shiny stickers on laptop', false),
			Task('Request more reggae music in the office', true)
		])
		this.doneTasks = this.tasks.filterByProperty("done", true)
	}
	
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
// SCRIPTING??!
KOSCR = function () {
	z();
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
	);// kob= ko.observable.prototype; kob.rm= kob.remove
	ko.b({})
}
FLVIEWPLG = function () {
	$.z()
	ko.oa.fn.filterByProperty = function (propName, matchValue) {
		return ko.pureComputed(function () {
			var allItems = this(), matchingItems = [];
			for (var i = 0; i < allItems.length; i++) {
				var current = allItems[i];
				if (ko.unwrap(current[propName]) === matchValue)
					matchingItems.push(current)
			}
			return matchingItems
		}, this)
	}
	$.h3('All tasks').A($.sp().bT('tasks().length'))
	$.ul().bE('tasks').A($.li().A(
			$.lb().A($.cb().bC('done'), $.sp().bT('title'))))
	$.h3('Done tasks').A($.sp().bT('doneTasks().length'))
	$.ul().bE('doneTasks').A($.li().bT('text'))
	function Task(title, done) {
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
}
URLPLUG = function () {
	// Prototype for an observable<->URL binding plugin.
	(function () {
		var currentParams = {}, updateTimer, $ = window.jQuery;
		
		function ensureString(value) {
			return ((value === null) || (value === undefined)) ? value : value.toString();
		}
		
		// Gives an address (URL) to a view model state
		ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
			// When the observable changes, update the URL
			observable.subscribe(function (value) {
				var valueToWrite = value === defaultValue ? null : ensureString(value);
				if (currentParams[hashPropertyName] !== valueToWrite) {
					currentParams[hashPropertyName] = valueToWrite;
					queueAction(function () {
						for (var key in currentParams)
							$.address.parameter(key, currentParams[key]);
						$.address.update();
					});
				}
			});
			// When the URL changes, update the observable
			$.address.change(function (evt) {
				currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
				observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
			});
		}
		function queueAction(action) {
			if (updateTimer)
				clearTimeout(updateTimer);
			updateTimer = setTimeout(action, 0);
		}
		
		$.address.autoUpdate(false);
	})();
}
FLVIEWPLG = function () {
	$.x('x')
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
	}
	$.h3('All tasks').A($.spT('tasks().length'))
	$.ulE('tasks', [
		$.lL([
			$.cbC('done'), $.spT('tt')
		])
	])
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
	tasks = ko.oa(
			Task('Find new desktop background', 1),
			Task('Put shiny stickers on laptop'),
			Task('Request more reggae music in the office', 1))
	ok({
		tasks: tasks,
		doneTasks: tasks.filterByProperty("done", 1)
	})
	function Task(tt, done) {
		return {tt: ko.o(tt), done: ko.o(done)}
	}
	
	/*alt:
	 this.doneTasks = ko.pureComputed(function() {
	 var all = this.tasks(), done = [];
	 for (var i = 0; i < all.length; i++)
	 if (all[i].done())
	 done.push(all[i]);
	 return done;
	 }, this);
	 */
	alt = function () {
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
	}
}
VIRTP = function () {
	$z()
	ko.bindingProvider.instance.preprocessNode = function (node) {
		// Only react if this is a comment node of the form <!-- template: ... -->
		if (node.nodeType == 8) {
			var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
			if (match) {
				// Create a pair of comments to replace the single comment
				var c1 = document.createComment("ko " + match[1]),
						c2 = document.createComment("/ko");
				node.parentNode.insertBefore(c1, node);
				node.parentNode.replaceChild(c2, node);
				// Tell Knockout about the new nodes so that it can apply bindings to them
				return [c1, c2];
			}
		}
	}
}
URLPLUG = function () {
	// Prototype for an observable<->URL binding plugin.
	(function () {
		var currentParams = {}, updateTimer, $ = window.jQuery;
		
		function ensureString(value) {
			return ((value === null) || (value === undefined)) ? value : value.toString();
		}
		
		// Gives an address (URL) to a view model state
		ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
			// When the observable changes, update the URL
			observable.subscribe(function (value) {
				var valueToWrite = value === defaultValue ? null : ensureString(value);
				if (currentParams[hashPropertyName] !== valueToWrite) {
					currentParams[hashPropertyName] = valueToWrite;
					queueAction(function () {
						for (var key in currentParams)
							$.address.parameter(key, currentParams[key]);
						$.address.update();
					});
				}
			});
			// When the URL changes, update the observable
			$.address.change(function (evt) {
				currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
				observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
			});
		}
		function queueAction(action) {
			if (updateTimer)
				clearTimeout(updateTimer);
			updateTimer = setTimeout(action, 0);
		}
		
		$.address.autoUpdate(false);
	})();
}
FLVIEWPLG = function () {
	$.x('x')
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
	}
	$.h3('All tasks').A($.spT('tasks().length'))
	$.ulE('tasks', [
		$.lL([
			$.cbC('done'), $.spT('tt')
		])
	])
	$.h3('Done tasks').A($.spT('doneTasks().length'))
	$.ulE('doneTasks', [$.liT('tt')])
	tasks = ko.oa(
			Task('Find new desktop background', 1),
			Task('Put shiny stickers on laptop'),
			Task('Request more reggae music in the office', 1))
	ok({
		tasks: tasks,
		doneTasks: tasks.filterByProperty("done", 1)
	})
	function Task(tt, done) {
		return {tt: ko.o(tt), done: ko.o(done)}
	}
	
	/*alt:
	 this.doneTasks = ko.pureComputed(function() {
	 var all = this.tasks(), done = [];
	 for (var i = 0; i < all.length; i++)
	 if (all[i].done())
	 done.push(all[i]);
	 return done;
	 }, this);
	 */
	alt = function () {
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
	}
}
URLPLUG = function () {
	// Prototype for an observable<->URL binding plugin.
	(function () {
		var currentParams = {}, updateTimer, $ = window.jQuery;
		
		function ensureString(value) {
			return ((value === null) || (value === undefined)) ? value : value.toString();
		}
		
		// Gives an address (URL) to a view model state
		ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
			// When the observable changes, update the URL
			observable.subscribe(function (value) {
				var valueToWrite = value === defaultValue ? null : ensureString(value);
				if (currentParams[hashPropertyName] !== valueToWrite) {
					currentParams[hashPropertyName] = valueToWrite;
					queueAction(function () {
						for (var key in currentParams)
							$.address.parameter(key, currentParams[key]);
						$.address.update();
					});
				}
			});
			// When the URL changes, update the observable
			$.address.change(function (evt) {
				currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
				observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
			});
		}
		function queueAction(action) {
			if (updateTimer)
				clearTimeout(updateTimer);
			updateTimer = setTimeout(action, 0);
		}
		
		$.address.autoUpdate(false);
	})();
}
function custBind() {
	ko.bH = ko.bindingHandlers
	ko.$bH = ok.bH = $bH = function (bHName, ob) {
		if (O(bHName)) {
			_.e(bHName, function (ob, name) {
				ko.$bH(name, ob)
			})
			return
		}
		ob = F(ob) ? {update: ob} : ob
		ob.update = ob.update || ob.u
		ob.init = ob.init || ob.i
		ko.bH[bHName] = ob
		$.fn[bHName] = function (a) {
			this.b(bHName, a)
		}
	}
	ko.$bH({
		randomOrder: {
			i: function (el, vA) {
				var ch, CH
				ch = ko.vE.firstChild(el)
				CH = []
				while (ch) {
					CH.push(ch);
					ch = ko.vE.nextSibling(ch)
				}
				ko.vE.emptyNode(el)
				while (CH.length) {
					ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
				}
				function altInit(elem, valueAccessor) {
					// Build an array of child elements
					var child = ko.virtualElements.firstChild(elem),
							CH = [];
					while (child) {
						CH.push(child);
						child = ko.virtualElements.nextSibling(child);
					}
					// Remove them all, then put them back in a random order
					ko.virtualElements.emptyNode(elem);
					while (CH.length) {
						var randomIndex = Math.floor(Math.random() * CH.length),
								chosenChild = CH.splice(randomIndex, 1);
						ko.virtualElements.prepend(elem, chosenChild[0]);
					}
				}
				
				/*
				 alt:
				 init: function(el, vA) {var ch,CH
				 var CH = []
				
				 while(el.firstChild)
				
				 CH.push(el.removeChild(
				 el.firstChild)
				 )
				
				
				 while(CH.length) {
				 var randomIndex = M.fl(M.rn() * CH.length),
				 chosenChild = CH.splice(randomIndex, 1);
				 el.appendChild(chosenChild[0]);
				 }
				 }
				
				 */
			}
		},
		fadeVisible: {
			i: function (el, vA) {// 1st set el vs pop rel to val
				$(el).toggle(ko.unwrap(vA()))
			}, u: function (el, vA) {//on change, slowly fade el in/out
				ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
			}
		},
		hasFocus: {
			i: function (el, vA) {
				$(el).focus(function () {
					vA()(1)
				})
				$(el).blur(function () {
					vA()(0)
				})
			}, u: function (el, vA) {
				ko.uw(vA()) ? el.focus() : el.blur()
			}
		},
		slV: function (el, vA) {
			var isChecked = ko.uw(vA())
			isChecked ? $(el).slD(1800) :
					$(el).slU(2000)
		},
		slVs: {
			u: function (el, vA, allBindings) {
				var unwrapped, dur, v = vA() // First get the latest data that we're bound to
				unwrapped = ko.unwrap(v);
				// Next, whether or not the supplied model property is observable, get its current value
				dur = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
				if (unwrapped) {
					$(el).slideDown(dur)
				}
				else {
					$(el).slideUp(dur)
				}
			}
		},
		yourBindingName: {
			i: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
				// This will be called when the binding is first applied to an element
				// Set up any initial state, event handlers, etc. here
			},
			u: function (q, vAc, bd, vm, bdCtx) {
				// This will be called once when the binding is first applied to an element,
				// and again whenever any observables/computeds that are accessed change
				// Update the DOM element based on the supplied values here.
			}
		},
		simpleGrid: {
			// This method is called to initialize the node, and will also be called again if you change what the grid is bound to
			update: function (el, vwMdAcc, allBndAcc) {
				var vm, allBnd,
						grdTpN, pgLnksTpN,
						grdCt,
						pgLnksCt
				vm = vwMdAcc()
				allBnd = allBndAcc()
				while (el.firstChild) {
					ko.removeNode(el.firstChild)
				}
				// Allow the default templates to be overridden
				grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
				pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
				grdCt = el.A($.d()); // Render the main grid
				ko.rTp(grdTpN, vm, {templateEngine: templateEngine}, grdCt, "replaceNode")
				// Render the page links
				pgLnksCt = el.A($.d())
				ko.rTp(pgLnksTpN, vm, {templateEngine: templateEngine}, pgLnksCt, "replaceNode");
			}
		},
		fadeVs: {
			init: function (el, vA) {
				var shouldDisplay = vA();
				$(el).toggle(shouldDisplay)
			},// Start visible/invisible according to initial value
			update: function (el, vA) {
				var shouldDisplay = vA();
				shouldDisplay ? $(el).fadeIn() :
						$(el).fadeOut()
			}
		}, // On update, fade in/out
		jqBt: {
			init: function (el) {
				$(el).button();
			}, // Turns the el into a jQuery UI button
			update: function (el, vA) {
				var curVal = vA();
				$(el).button("option", "disabled", curVal.enable === false);
			}
		},// Here we just update the "disabled" state, but you could update other properties too
		starRating: {
			init: function (el, vA) {
				$(el).addClass("starRating");
				for (var i = 0; i < 5; i++) {
					$.sp().appendTo(el)
				}
				$("span", el).each(function (index) {
					$(this).hv(// Handle mouse events on the stars
							function () {
								$(this).prevAll().add(this).K("hoverChosen")
							},
							function () {
								$(this).prevAll().add(this).removeClass("hoverChosen")
							})
							.click(function () {
								var observable = vA();
								observable(index + 1)
							})
				})
			},           // Get the associated observable// Write the new rating to it
			update: function (el, vA) {
				var observable = vA();
				$("span", el).each(function (index) {
					$(this).toggleClass("chosen", index < observable())
				})
			} // Give the first x stars the "chosen" class, where x <= rating
		}
	})
//////////////////////////////////////
	BDSMPGRD = function () {
		
		// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
		ko.simpleGrid = {
			// Defines a view model class you can use to populate a grid
			// If you don't specify columns configuration, we'll use scaffolding
			m: function (cf) {
				this.data = cf.data
				this.currentPageIndex = ko.o(0);
				this.pageSize = cf.pageSize || 5;
				this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
				this.itemsOnCurrentPage = ko.c(function () {
					var startIndex = this.pageSize * this.currentPageIndex();
					return ko.ut.uo(this.data)
							.slice(startIndex, startIndex + this.pageSize);
				}, this);
				this.maxPageIndex = ko.c(function () {
					return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
				}, this)
			}
		}
		/*
		 // Templates used to render the grid
		 var templateEngine = new ko.jqueryTmplTemplateEngine();
		 templateEngine.addTemplate("ko_simpleGrid_grid", "\
		 <table class=\"ko-grid\" cellspacing=\"0\">\
		 <thead>\
		 <tr>\
		 {{each(i, columnDefinition) columns}}\
		 <th>${ columnDefinition.headerText }</th>\
		 {{/each}}\
		 </tr>\
		 </thead>\
		 <tbody>\
		 {{each(i, row) itemsOnCurrentPage()}}\
		 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
		 {{each(j, columnDefinition) columns}}\
		 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
		 {{/each}}\
		 </tr>\
		 {{/each}}\
		 </tbody>\
		 </table>");
		 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
		 <div class=\"ko-grid-pageLinks\">\
		 <span>Page:</span>\
		 {{each(i) ko.utils.range(1, maxPageIndex)}}\
		 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
		 ${ i + 1 }\
		 </a>\
		 {{/each}}\
		 </div>");
		 */
		// The "simpleGrid" binding
		function gScafCols(d) {
			var cols
			if ((typeof d.length != 'number') || d.length == 0) {
				return []
			}
			cols = [];
			for (var popN in d[0])
				cols.push({headerText: popN, rowText: popN});
			return cols;
		}
	}
	BINDINGS = function () {
		$.h3().bT('qu')
		$.p('Please distribute').A(
				$.b().bT('ptsBudg'),
				'pts btwn the following opts'
		)
		$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
				$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'pts'))))
		$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
				'You used too many points! Please remove some.')
		$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
		$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
		ok(new SurvVM("Which factors affect your technology choices?",
						10, [
							"Functionality, compatibility, pricing - all that boring stuff",
							"How often it is mentioned on Hacker News",
							"Number of gradients/dropshadows on project homepage",
							"Totally believable testimonials on project homepage"
						]
				)
		)
	}
	CUSTBDEX = function () {
		$.d().b('e', 'items').A(
				$.d().at('data-bind', "composableComponent: 'x-expander'").A(
						$.d().at('data-part', 'title').A($('<strong>')
								.b({t: 'binding', sy: "{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
						$.d().at('data-part', 'content').A($('<strong>').b({t: 'binding'}),
								$.sp().b('t', 'description')))
		)
		$('<script type="text/html" id="x-expander-template">').A(
				$.dK('expander'),
				$.dK('header'),
				$.bt().b({t: 'toggleText', $: 'toggle'}),
				$.sp('Expander').K('title').at('data-part', 'title'),
				$.dK('content').at('data-part', 'content').b('vs', 'isExpanded')
						.A('Content')
		)
		ko.ext = ko.ext || {}
		ko.ext.utils = ko.ext.utils || {};
		ko.ext.utils.cloneNodes = function () {
			if (ko.utils.cloneNodes) {
				return ko.utils.cloneNodes
			}
			else {
				return function (nodesArray, shouldCleanNodes) {
					for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
						var clonedNode = nodesArray[i].cloneNode(true);
						newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
					}
					return newNodesArray;
				}
			}
		}
		ko.ext.utils.cloneNodes()
		compLoadingOperationUniqueId = 0
		ko.bh['composableComponent'] = {
			'init': function (el, valueAccessor, ignored1, ignored2, bindingContext) {
				disposeAssociatedComponentVM = function () {
					currentVMDispose = currentVM && currentVM['dispose'];
					if (typeof currentVMDispose === 'function') {
						currentVMDispose.call(currentVM)
					}
					// Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
					currentLoadingOperationId = null
				}
				isFirstRender = false;
				specifiedParts;
				ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
				ko.c(function () {
					if (!isFirstRender) {
						isFirstRender = true;
						specifiedParts = null;
						findParts(el, function (partName, partNode) {
							if (!specifiedParts) {
								specifiedParts = {}
							}
							partChNodes = ko.vE.chNodes(partNode)
							specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true)
						})
					}
					value = ko.ut.uo(valueAccessor())
					if (typeof value === 'string') {
						cmNm = value
					}
					else {
						cmNm = ko.ut.uo(value['name']);
						compParams = ko.ut.uo(value['params'])
					}
					if (!cmNm) {
						throw new Error('No comp name specified')
					}
					loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
					ko.cm.get(cmNm,
							function (compDef) {
								if (currentLoadingOperationId !== loadingOperationId) {
									return;
								} // If this is not the current load operation for this el, ignore it.
								disposeAssociatedComponentVM();// Clean up previous state
								if (!compDef) {
									throw new Error('Unknown comp \'' + cmNm + '\'')
								}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
								cloneTemplateIntoElement(cmNm, compDef, el);
								compVM = createVM(compDef, el, compParams)
								chBindingContext = bindingContext['createChildContext'](compVM)
								currentVM = compVM
								ko.bD(chBindingContext, el)
								if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
									partBindingContext = bindingContext['extend']({'$comp': compVM})
									findParts(el, function (partName, partNode) {
										if (!(replacementNodes = specifiedParts[partName])) {
											return
										}
										clonedNodes = ko.ext.utils.cloneNodes(replacementNodes)
										ko.vE.setDomNodeChildren(partNode, clonedNodes);
										ko.bD(partBindingContext, partNode)
									})
								}
							})
				}, null, {disposeWhenNodeIsRemoved: el});
				return {'controlsDescendantBindings': true};
			}
		}
		ko.vE.AB['composableComponent'] = true
		ko.R('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
		ok(new AppVM())
		ko.vE.nCh = ko.vE.setDomNodeChildren
		function findParts(parentNode, fn) {
			if (!parentNode) {
				return
			}
			chNodes = ko.vE.chNodes(parentNode)
			ko.utils.arrayForEach(chNodes, function (chNode) {
				// Search for el nodes only
				if (chNode.nodeType !== 1) {
					return;
				}
				if (partName = chNode.getAttribute('data-part')) {
					fn(partName, chNode)
				}
				else {
					findParts(chNode, fn)
				} // Do not search into part definition
			})
		}
		
		function cloneTemplateIntoElement(cmN, cmD, el) {
			var tp
			if (tp != cmD['template']) {
				_.er('Cm\'' + cmN + '\'!tp')
			}
			ko.vE.nCh(el,
					clonedNodesArray = ko.ext.utils.cloneNodes(tp)
			)
		}
		
		function createVM(cmD, el, cmPams) {
			return (cmVMFact = cmD['createVM']) ?
					cmVMFact.call(cmD, cmPams, {el: el}) : cmPams
		}
		
		//http://jsfiddle.net/mbaranov/6zvjfd2y/
	}
	CUSTBDJ = function () {
		$.d('You have selected the option').b({
			slVs: 'wrap',
			slDur: 600
		})
		$.lb().A($.cbC('wrap'), 'Gift wrap')
		ok({wrap: $o(1)})
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
			this.planets = $oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = $o("all");
			this.displayAdvancedOptions = $o(false);
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
		ko.bH.fadeVisible = {
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
			this.planets = $oa([
				{name: "Mercury", type: "rock"},
				{name: "Venus", type: "rock"},
				{name: "Earth", type: "rock"},
				{name: "Mars", type: "rock"},
				{name: "Jupiter", type: "gasgiant"},
				{name: "Saturn", type: "gasgiant"},
				{name: "Uranus", type: "gasgiant"},
				{name: "Neptune", type: "gasgiant"}
			]);
			this.typeToShow = $o("all");
			this.displayAdvancedOptions = $o(false);
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
	PLANS = [
		{name: "Mercury", type: "rock"},
		{name: "Venus", type: "rock"},
		{name: "Earth", type: "rock"},
		{name: "Mars", type: "rock"},
		{name: "Jupiter", type: "gasgiant"},
		{name: "Saturn", type: "gasgiant"},
		{name: "Uranus", type: "gasgiant"},
		{name: "Neptune", type: "gasgiant"}
	]
	CUSTOMBINDING = PLANET = function () {
		$.x('g', 'Plan')
		$.p().A(
				$.lb().A(
						$.cC('displayAdvancedOptions'),
						'Display advanced options'
				)
		)
		$.p().A(
				'Show:',
				$.lb([$.ip()]),
				$.lb([$.ip()]),
				$.lb([$.ip()])
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
		$.p().A(
				$.bt('add rocky plan')
						.b('click: addPlanet.bind($data, "rock")'),
				$.bt('add gas giant')
						.b('click: addPlanet.bind($data, "gasgiant")')
		).b('fadeVisible: displayAdvancedOptions')
		// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
		// Could be stored in a separate utility library
		ok(new Planets())
	}
	/*
	 <unrealistic-cm
	 params='stringValue: "hello",
	 numericValue: 123,
	 boolValue: true,
	 objectValue: { a: 1, b: 2 },
	 dateValue: new Date(),
	 someModelProperty: myModelValue,
	 observableSubproperty: someObservable().subprop'>
	 </unrealistic-component>*/
	/*
	 ko.bindingHandlers.yourBindingName = {
	 init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	 // This will be called when the binding is first applied to an element
	 // Set up any initial state, event handlers, etc. here
	 },
	 update: function(q, vAc, bd, vm, bdCtx) {
	 // This will be called once when the binding is first applied to an element,
	 // and again whenever any observables/computeds that are accessed change
	 // Update the DOM element based on the supplied values here.
	 }
	 }
	 */
	/*
	 The “update” callback
	 ko will call the upd cb init when   bd   applied to an el
	 and tr any deps (observs/computeds) that you access.
	 When any deps change, the upd  cb   called  w these pams:
	 el  —  DOM el  involved in this bd
	
	 valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())
	
	 To easily accept both observable and plain values, call ko.unwrap on the returned value.
	
	 allBindings — ob,  used to access all the md values bound to this el
	
	 Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
	 or allBindings.has('name') to determine if the name binding is present for the current element.
	
	 vm —   deprecated  !
	
	 Use bindingContext.$data or bindingContext.$rawData to access the view model instead.
	
	 bindingCtx — ob, holds the binding ctx available to this el’s bindings,
	 includes special properties including $parent, $parents,
	 and $root that can be used to access data that is bound against ancestors of this ctx
	
	 ex: you might have been controlling an element’s vs using the vs binding,
	 but now you want to go a step further and animate the transition.
	 You want elements to slide into and out of existence according to the value of an observable.
	 You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:
	
	 */
	BDSMPGRD = function () {
		
		// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
		ko.simpleGrid = {
			// Defines a view model class you can use to populate a grid
			// If you don't specify columns configuration, we'll use scaffolding
			m: function (cf) {
				this.data = cf.data
				this.currentPageIndex = ko.o(0);
				this.pageSize = cf.pageSize || 5;
				this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
				this.itemsOnCurrentPage = ko.c(function () {
					var startIndex = this.pageSize * this.currentPageIndex();
					return ko.ut.uo(this.data)
							.slice(startIndex, startIndex + this.pageSize);
				}, this);
				this.maxPageIndex = ko.c(function () {
					return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
				}, this)
			}
		}
		/*
		 // Templates used to render the grid
		 var templateEngine = new ko.jqueryTmplTemplateEngine();
		 templateEngine.addTemplate("ko_simpleGrid_grid", "\
		 <table class=\"ko-grid\" cellspacing=\"0\">\
		 <thead>\
		 <tr>\
		 {{each(i, columnDefinition) columns}}\
		 <th>${ columnDefinition.headerText }</th>\
		 {{/each}}\
		 </tr>\
		 </thead>\
		 <tbody>\
		 {{each(i, row) itemsOnCurrentPage()}}\
		 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
		 {{each(j, columnDefinition) columns}}\
		 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
		 {{/each}}\
		 </tr>\
		 {{/each}}\
		 </tbody>\
		 </table>");
		 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
		 <div class=\"ko-grid-pageLinks\">\
		 <span>Page:</span>\
		 {{each(i) ko.utils.range(1, maxPageIndex)}}\
		 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
		 ${ i + 1 }\
		 </a>\
		 {{/each}}\
		 </div>");
		 */
		// The "simpleGrid" binding
		ko.bh.simpleGrid = {
			// This method is called to initialize the node, and will also be called again if you change what the grid is bound to
			update: function (el, vwMdAcc, allBndAcc) {
				var vm, allBnd,
						grdTpN, pgLnksTpN,
						grdCt,
						pgLnksCt
				vm = vwMdAcc()
				allBnd = allBndAcc()
				while (el.firstChild) {
					ko.removeNode(el.firstChild)
				}
				// Allow the default templates to be overridden
				grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
				pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
				grdCt = el.A($.d()); // Render the main grid
				ko.rTp(grdTpN, vm, {templateEngine: templateEngine}, grdCt, "replaceNode")
				// Render the page links
				pgLnksCt = el.A($.d())
				ko.rTp(pgLnksTpN, vm, {templateEngine: templateEngine}, pgLnksCt, "replaceNode");
			}
		}
		function gScafCols(d) {
			var cols
			if ((typeof d.length != 'number') || d.length == 0) {
				return []
			}
			cols = [];
			for (var popN in d[0])
				cols.push({headerText: popN, rowText: popN});
			return cols;
		}
	}
	BINDINGS = function () {
		$.h3().bT('qu')
		$.p('Please distribute').A(
				$.b().bT('ptsBudg'),
				'pts btwn the following opts'
		)
		$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
				$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'pts'))))
		$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
				'You used too many points! Please remove some.')
		$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
		$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
		bindings = function () {
// Reusable bindings - ideally kept in a separate file
			ko.BH.fadeVs = {
				init: function (el, valAcc) {
					var shouldDisplay = valAcc();
					$(el).toggle(shouldDisplay)
				},// Start visible/invisible according to initial value
				update: function (el, valAcc) {
					var shouldDisplay = valAcc();
					shouldDisplay ? $(el).fadeIn() :
							$(el).fadeOut()
				}
			} // On update, fade in/out
			ko.BH.jqBt = {
				init: function (el) {
					$(el).button();
				}, // Turns the el into a jQuery UI button
				update: function (el, valAcc) {
					var curVal = valAcc();
					$(el).button("option", "disabled", curVal.enable === false);
				}
			}// Here we just update the "disabled" state, but you could update other properties too
			ko.BH.starRating = {
				init: function (el, valAcc) {
					$(el).addClass("starRating");
					for (var i = 0; i < 5; i++) {
						$.sp().appendTo(el)
					}
					$("span", el).each(function (index) {
						$(this).hv(// Handle mouse events on the stars
								function () {
									$(this).prevAll().add(this).K("hoverChosen")
								},
								function () {
									$(this).prevAll().add(this).removeClass("hoverChosen")
								})
								.click(function () {
									var observable = valAcc();
									observable(index + 1)
								})
					})
				},           // Get the associated observable// Write the new rating to it
				update: function (el, valAcc) {
					var observable = valAcc();
					$("span", el).each(function (index) {
						$(this).toggleClass("chosen", index < observable())
					})
				} // Give the first x stars the "chosen" class, where x <= rating
			}
		};
		bindings()
		function Aw(text) {
			this.awText = text;
			this.points = ko.o(1);
		}
		
		function SurvVM(qu, ptsBdg, aws) {
			this.qu = qu;
			this.ptsBdg = ptsBdg
			this.aws = $.map(aws, function (tx) {
				return new Aw(tx)
			});
			this.save = function () {
				alert('To do')
			};
			this.ptsUsed = ko.c(function () {
						var tot = 0;
						for (var i = 0; i < this.aws.length; i++) {
							tot += this.aws[i].points()
						}
						return tot
					},
					this)
		}
		
		ok(new SurvVM(
						"Which factors affect your technology choices?",
						10,
						[
							"Functionality, compatibility, pricing - all that boring stuff",
							"How often it is mentioned on Hacker News",
							"Number of gradients/dropshadows on project homepage",
							"Totally believable testimonials on project homepage"
						]
				)
		)
	}
	CUSTBDJ = function () {
		ko.bh.slVs = {
			update: function (el, valAcc, allBindings) {
				var unwrapped, dur, v = valAcc() // First get the latest data that we're bound to
				unwrapped = ko.unwrap(v);
				// Next, whether or not the supplied model property is observable, get its current value
				dur = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
				if (unwrapped) {
					$(el).slideDown(dur)
				}
				else {
					$(el).slideUp(dur)
				}
			}
		}
		$.d('You have selected the option').b({
			slVs: 'wrap',
			slDur: 600
		})
		$.lb().A($.cbC('wrap'), 'Gift wrap')
		ok({wrap: ko.o(1)})
	}
	CUSTBDEX = function () {
		$.d().b('e', 'items').A(
				$.d().at('data-bind', "composableComponent: 'x-expander'").A(
						$.d().at('data-part', 'title').A($('<strong>')
								.b({t: 'binding', sy: "{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
						$.d().at('data-part', 'content').A($('<strong>').b({t: 'binding'}),
								$.sp().b('t', 'description'))))
		$('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
				$.dK('header'),
				$.bt().b({t: 'toggleText', $: 'toggle'}),
				$.sp('Expander').K('title').at('data-part', 'title'),
				$.dK('content').at('data-part', 'content').b('vs', 'isExpanded')
						.A('Content'))
		ko.ext = ko.ext || {};
		ko.ext.utils = ko.ext.utils || {};
		ko.ext.utils.cloneNodes = function () {
			if (ko.utils.cloneNodes) {
				return ko.utils.cloneNodes
			}
			else {
				return function (nodesArray, shouldCleanNodes) {
					for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
						var clonedNode = nodesArray[i].cloneNode(true);
						newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
					}
					return newNodesArray;
				}
			}
		}
		ko.ext.utils.cloneNodes()
		compLoadingOperationUniqueId = 0
		ko.bh['composableComponent'] = {
			'init': function (el, valueAccessor, ignored1, ignored2, bindingContext) {
				disposeAssociatedComponentVM = function () {
					currentVMDispose = currentVM && currentVM['dispose'];
					if (typeof currentVMDispose === 'function') {
						currentVMDispose.call(currentVM)
					}
					// Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
					currentLoadingOperationId = null
				}
				isFirstRender = false;
				specifiedParts;
				ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
				ko.c(function () {
					if (!isFirstRender) {
						isFirstRender = true;
						specifiedParts = null;
						findParts(el, function (partName, partNode) {
							if (!specifiedParts) {
								specifiedParts = {}
							}
							partChNodes = ko.vE.chNodes(partNode)
							specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true)
						})
					}
					value = ko.ut.uo(valueAccessor())
					if (typeof value === 'string') {
						cmNm = value
					}
					else {
						cmNm = ko.ut.uo(value['name']);
						compParams = ko.ut.uo(value['params'])
					}
					if (!cmNm) {
						throw new Error('No comp name specified')
					}
					loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
					ko.cm.get(cmNm,
							function (compDef) {
								if (currentLoadingOperationId !== loadingOperationId) {
									return;
								} // If this is not the current load operation for this el, ignore it.
								disposeAssociatedComponentVM();// Clean up previous state
								if (!compDef) {
									throw new Error('Unknown comp \'' + cmNm + '\'')
								}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
								cloneTemplateIntoElement(cmNm, compDef, el);
								compVM = createVM(compDef, el, compParams)
								chBindingContext = bindingContext['createChildContext'](compVM)
								currentVM = compVM
								ko.bD(chBindingContext, el)
								if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
									partBindingContext = bindingContext['extend']({'$comp': compVM})
									findParts(el, function (partName, partNode) {
										if (!(replacementNodes = specifiedParts[partName])) {
											return
										}
										clonedNodes = ko.ext.utils.cloneNodes(replacementNodes)
										ko.vE.setDomNodeChildren(partNode, clonedNodes);
										ko.bD(partBindingContext, partNode)
									})
								}
							})
				}, null, {disposeWhenNodeIsRemoved: el});
				return {'controlsDescendantBindings': true};
			}
		}
		ko.vE.AB['composableComponent'] = true
		ExpanderCmVM = function () {
			this.isExpanded = ko.o(false)
			this.toggleText = ko.c(function () {
				return this.isExpanded() ? '-' : '+'
			}, this)
		}
		ExpanderCmVM.prototype.toggle = function () {
			this.isExpanded(!this.isExpanded())
		}
		ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
		AppVM = function () {
			this.items = [
				{
					binding: 'vs',
					desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
				},
				{
					binding: 't',
					desc: 'causes the assoc DOM el to display the text value of your pam.'
				},
				{
					binding: 'cm',
					desc: 'injects a spec cm into an el, and optly passes pams to it.'
				}
			]
		}
		ok(new AppVM())
		ko.vE.nCh = ko.vE.setDomNodeChildren
		function findParts(parentNode, fn) {
			if (!parentNode) {
				return
			}
			chNodes = ko.vE.chNodes(parentNode)
			ko.utils.arrayForEach(chNodes, function (chNode) {
				// Search for el nodes only
				if (chNode.nodeType !== 1) {
					return;
				}
				if (partName = chNode.getAttribute('data-part')) {
					fn(partName, chNode)
				}
				else {
					findParts(chNode, fn)
				} // Do not search into part definition
			})
		}
		
		function cloneTemplateIntoElement(cmN, cmD, el) {
			var tp
			if (tp != cmD['template']) {
				_.er('Cm\'' + cmN + '\'!tp')
			}
			ko.vE.nCh(el,
					clonedNodesArray = ko.ext.utils.cloneNodes(tp)
			)
		}
		
		function createVM(cmD, el, cmPams) {
			return (cmVMFact = cmD['createVM']) ?
					cmVMFact.call(cmD, cmPams, {el: el}) : cmPams
		}
		
		//http://jsfiddle.net/mbaranov/6zvjfd2y/
	}
	/*
	
	 You should use ko.utils.unwrapObservable
	 in cases where you don't know if u have been gvn an obsvb or not.
	 This would commonly be in a cstm bdg where an ovb or
	 non-obv
	 could be bound against it.
	
	 In the code that u have above,
	 the call to vAc() is not actually unwrpping an ovb
	
	 It is just retrieving the value that was passed to the binding in the correct context
	
	 (it gets wrapped in a fn to protect it).
	
	 The ret v of valAcc() may be an obv or not.
	
	 It is * was pasd to the bdg
	
	
	 */
}
function components() {
	ko.cm = ko.components;//ko.cm.rg = ko.cm.register;
	ko.cm.iR = ko.cm.isRegistered
	ko._ = function (a, t, m) {
		var g = G(arguments),
				ob = {
					t: $('<template>').A($.d(A(t) ? t : g)).ch(0).h(),
					m: m
				}
		ob.template = ob.template || ob.t
		ob.viewModel = ob.viewModel || ob.vm || ob.m
		return ko.cm.register(_.tL(a), ob)
	}
	ko.$ = function (n, b) {
		var g = G(arguments), o,
				$cm = function (n, pam) {
					return $('<' + n + ' params = ' + (pam || '') + ' >')
				}//=OK
		n = _.tL(n)
		return !b ? _.p($cm, n) : $cm(n, O(b) ? ob2s(b) : b)
		function ob2s(ob) {
			ob = ob || {};
			var o = []
			_.e(ob, function (v, k) {
				o.push(k + ':' + v)
			})
			return o.join()
		}
	}//=$$$
	$.fn.bCm = function (s) {
		return this.b('component', s)
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	$.app = function () {
		z()
		var d = $.d.apply($, arguments)
		d.K('app').id('app')
		return d
		ok$ = function (vm, app) {
			var g = G(arguments)
			z()
			$.app(g.r)
			ok(vm)
		}
	}
	$.fn.par = function (a, b) {
		alert('$.fn.par')
		this.at('params', a + ': ' + b);
		return this
	}
	ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
		tgN = nd.tagName && _.tL(nd.tagName)
		return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
		// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
		// use cm "MySpecialComponent" (regardless if pre-regd)
		// Treat anything else as !repg a cm
	}
///////////////////////////
	LIKE = function () {
		z()
		ko._('LIKE', [
			$.dV("!vt()", $.b$$('like', 'hate')),
			$.dV('vt', 'you:', $.ST('vt'))
		], Vm)
		function Vm(p) {
			var vm = {vt: p.vt || ''}
			vm.like = function () {
				this.vt('like')
			}
			vm.hate = function () {
				this.vt('hate')
			}
			return vm
		}
		
		$.ulE('MS', [
			$.sT('ms'),
			ko.$('like', {vt: 'vt'})// ko.$('like', 'vt:vt')
		])
		$.b$('+', 'add')
		ok({
			MS: $oa(Ms('lick'), Ms('hi'),
					Ms('haha', '+'), Ms('lame')),
			add: function () {
				this.MS.p(Ms('item-' + this.pos()))
			},
			pos: function () {
				return _.z(this.MS()) + 1
			}
		})
		function Ms(ms, vt) {
			var g = G(arguments)
			return {
				ms: ms,
				vt: $o(g.p ? 'like' : vt || '')
			}
		}
		
		function thumb() {
			THMB1 = function () {
				z();
				$l('THMB')
				tmpl = $('<template>').A(
						$.d([$.d([$.b$('Like it', 'like'),
							$.b$('Dislike it', 'dislike')
						]).K("like-or-dislike").bVs("!val()"),
							$.d(['You   ', $.S().bT('val'), '   it..']).K('result').bVs('val')
						])
				)
				$Cm('like', tmpl.ch(0).h(), function (pams) {
					var vm = this
					this.val = pams.val
					this.like = function () {
						vm.val('like')
					}
					this.dislike = function () {
						vm.val('dislike')
					}
				})
				$.ul([$.li([$.sT('n'), $cm('like', 'val:op')
				]).K('prd')]).bE("prds")
				$.b$('+', 'add')
				ok({
					add: function () {
						this.prds.p(Prd(this.prdN()))
					},
					prdN: function () {
						return 'item-' + (_.z(this.prds()) + 1)
					},
					prds: $oa([{n: 'lick', op: $o()},
						{n: 'Garlic', op: $o()},
						{n: 'food', op: $o('like')},
						{n: 'gull', op: $o()}, {n: 'fun', op: $o()}])
				})
			}
			THMB11 = function () {
				z()
				$Cm('like', $.sp([ //can also pass in just an array of the two divs -> ...'like', [$.d(),$.d()]
							$.d([
								$.b$('Like it', 'like'),
								$.b$('Dislike it', 'dislike')
							]).bVs("!val()").K("like-or-dislike"),
							$.d([
								'You   ', $.S().bT('val'), '   it..'
							]).K('result').bVs('val')
						]),
						function (pams) {
							var vm = this
							vm.val = pams.val
							vm.like = function () {
								vm.val('like')
							}
							vm.dislike = function () {
								vm.val('dislike')
							}
						})
				$.ul([$.li([$.sT('n'), $cm('like', 'val:op')
				]).K('prd')]).bE("prds")
				$.b$('+', 'add')
				ok({
					add: function () {
						this.prds.p(Prd(this.prdN()))
					},
					prdN: function () {
						return 'item-' + (_.z(this.prds()) + 1)
					},
					prds: $oa([{n: 'liiick', op: $o()},
						{n: 'Garlic', op: $o()},
						{n: 'food', op: $o('like')},
						{n: 'gull', op: $o()}, {n: 'fun', op: $o()}])
				})
			}
			THMBALPHA = function () {
				$ok = function (vm, appCtn) {
					z()
					$.app(appCtn)
					ok(F(vm) ? vm() : vm)
				}
				$ok({
					prds: $oa([
						{n: 'liiick', op: $o()}, {n: 'Garlic', op: $o()}, {n: 'food', op: $o('like')},
						{n: 'gull', op: $o()}, {n: 'fun', op: $o()}]),
					add: function () {
						this.prds.p({n: 'item-' + (_.z(this.prds()) + 1)})
					}
				}, [
					$.uE("prds", [$.spT('n'), OK('like', 'val:op')]),
					$.b$('+', 'add')
				])
			}
			function Prd(n, op) {
				return {n: n, op: $o(op)}
			}
		}
	}
	CM = function () {
		$.x()
		q = $.d([$.hr(), 'cm cm cm', $.hr()]).C('b')
		el = q[0]
		ko.r('test', {
			t: el, m: {a: 100, b: 'hello'}
		})
		$('<test>').A('hello1')
		$('<test>').A('hello2')
		$('<test>').A('hello3')
	}
	CREATEVM = function () {
		z()
		ko._('myCm', {
			m: {
				createVM: function (p, cmInf) {
					return new VM(p)
				}
			}, t: '#d'
		})
	}
	CMNEWS = function () {
		$.x('y', 'news feed') //http://jsfiddle.net/rniemeyer/fssXE/
		$.fn.qA = function (t) {
			return $('<' + t + '>').A()
		}
		$.fn.qAP = function (a, b, c) {
			this.qA(a).par(b, c);
			return this
		}
		$.qAP('news-feed', 'vm', 'VM')
		$.qAP('news-feed', 'vm', 'VM2')
		$.h2('News Feed')
		$.dT('vm.ms')
		$('<news-feed params="vm: feed"></news-feed>').A()
		$('<news-feed>').at('params', "vm: feed2").A()
		VM = function () {
			this.feed = new Feed();
			this.feed2 = new Feed();
			this.VM2 = {ms: $o("!")}
		}
		ko._('news-feed', {
			m: function (p) {
				this.vm = p.vm
			},
			t: $.d([
				$.h2('News! Feed'), $.dT('vm.m')
			])[0]
		})
	}
	MSGEDIT = function () {
		z()
		ko._('msgEd', {
			m: function (p) {
				this.t = $o(p && p.initT || '')
			},
			t: $.d([
				'Ms:', $.ipV('t'),
				'(len:', $.spT('t().length'), ')'
			])
		})
		//ko._('myCm', VM)
		//ko._('MyLs', {t: { el: 'MyLs-template' }, m: function(p) {this.myItems = p.items}})
		$.tp("MyLsTp").A($.h3('spcl ls:'))
		$.ulE("{ data: myItems, as: 'myItem' }").A(
				$.li().A($.h4('more my spc items'), $({
					tp: {nodes: $componentTemplateNodes, data: 'myItem'}
				})))
		$.tg('MyLs').at('params', 'items: PEEP')
				.A('The person', $.emT('name'), 'is', $.emT('age'), 'years old.')
		VM = function () {
			this.ms = $o("Hi");
			this.ms = ko.o("!")
			this.VM2 = {ms: $o("!")}
		}
		ok(new VM())
		vm.VM.ms("1");
		vm.VM2.ms("2")
		$.x('b', 'First instance, without parameters')//$.z().h4('First instance, without parameters')
		$.d().bCm('message-editor')
		$.h4('Second instance, passing parameters')
		ko._('message-editor', {
			m: function (params) {
				this.text = ko.o(params && params.initialText || '')
			},
			t: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		})
		$.dCm(
				'component:{name:"message-editor",params:{initialText:"Hello,world!"}}'
		)
		ok()
	}
	CUSTEL = function () {
		z()
		//MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
		// Now curObsrvInst is either
		// observable1 or obsrv2//
		// and you would read its value with "curObsrvInst()"
		// 'params' is an object whose k/v pairs are the pams
		// passed from the cm bd or cust el.
		// - 'cmtInf.el'
		//  is the el the component is being//
		//  injected into. When createVM is called, the template has//
		//  already been injected into this el, but isn't yet bound.
		// - 'componentInfo.templateNodes'
		// is an array containing any DOM
		//   nodes that have been supplied to the component. See below.
		// Return the desired view model instance, e.g.:
	}
	old = function () {
		ko.rg = function () {
			var g = G(arguments), o = {n: g.f, op: g.s};
			o.op = o.op || {}
			if (!o.op.viewModel) {//op.viewModel = op.vm || op.m
				if (o.op.vm) {
					op.viewModel = o.op.vm
				}
				else if (o.op.m) {
					o.op.viewModel = o.op.m
				}
			}
			if (S(o.op.viewModel) || (O(o.op.viewModel) && !o.op.viewModel.element  )) {
				o.op.viewModel = {element: o.op.viewModel}
			}
			o.op.viewModel = o.op.viewModel || {vm: o.op}
			if (!op.template) {
				if (op.tp) {
					op.template = op.tp
				} else if (op.t) {
					op.template = op.t
				}
			}
			cm = ko.R(o.n, o.op)
			return cm
		}
	}
//note: widget name apparently must be lowercase
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//bT,bV and computed
	COMP = function () {
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			$.p('L: ', $.b().bT('fL')),
			$.bt('caps').b$('capL')
		]).A()
		ok({
			f: ko.o('j'),
			l: ko.o('y'),
			fL: ko.c(function () {
				return this.f() + ' ' + this.l()
			}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
	KOCM = function () {
		$.z().h4('First instance, without parameters')
		$.d().bCm('message-editor')
		$.h4('Second instance, passing parameters')
		$.dCm(
				'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
		)
		ko.components.register('message-editor', {
			viewModel: function (params) {
				this.text = ko.o(params && params.initialText || '')
			},
			template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		})
		ko.applyBindings()
	}
	KOCM = function () {
		$.z().h4('First instance, without parameters')
		$.d().bCm('message-editor')
		$.h4('Second instance, passing parameters')
		$.dCm(
				'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
		)
		ko.components.register('message-editor', {
			viewModel: function (params) {
				this.text = ko.o(params && params.initialText || '')
			},
			template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		})
		ko.applyBindings()
	}
	CMLDR = function () {
		$.x()
		VM = function (p) {
			this.somePop = p.smKey
		}
		VM.prototype.doSmg = function () {
		}
		ko.r('my-cm', VM)
		ko.r('my-cm', {
			m: {
				createVM: function (p, cmInf) {
					return new VM(p)
				}
			},
			t: '#d'
		})
		ko.r('message-editor', {
			m: function (p) {
				this.t = ko.o(p && p.initialText || '')
			},
			t: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')'])
		})
		$.tp("my-special-list-template").A(
				$.h3('Here is a special list')
		)
		$.ulE("{ data: myItems, as: 'myItem' }").A(
				$.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
		$.tg = function (a) {
			return $('<' + a + '>')
		}
		$.tg('my-special-list').at('params', 'items: PEEP')
				.A('The person', $.em().b('t', 'name'),
				'is', $.em().b('t', 'age'), 'years old.')
		ko.r('my-special-list', {
			t: {el: 'my-special-list-template'},
			m: function (p) {
				this.myItems = p.items
			}
		})
		ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
		ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
			tgNLower = nd.tagName && nd.tagName.toLowerCase()
			return ko.cm.iR(tgNLower) ? tgNLower :
					tgNLower === "special-el" ? "MyCm" :
							null
			// If the el's name matches a reg-ed cm, use that cmt
			// For the el <special-el>, use the component
			// "MySpecialComponent" (whether or not it was preregistered)
			// Treat anything else as not representing a component
		}
		MyCmVM = function (pm) {
			curObsrvInst = pm.$raw.myExpr()
		}
		// Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"
		// 'params' is an object whose k/v pairs are the pams
		// passed from the cm bd or cust el.
		// - 'cmtInf.el'
		// is the el the component is being//
		//  injected into. When createVM is called, the template has//
		//  already been injected into this el, but isn't yet bound.
		// - 'componentInfo.templateNodes'
		// is an array containing any DOM
		//   nodes that have been supplied to the component. See below.
		// Return the desired view model instance, e.g.:
	}
	CMNEWS = function () {
		$.x('y', 'news feed')
		//http://jsfiddle.net/rniemeyer/fssXE/
		$.qAP('news-feed', 'vm', 'VM')
		$.qAP('news-feed', 'vm', 'VM2')
		$.h2('News Feed')
		$.dT('vm.ms')
		$('<news-feed params="vm: feed"></news-feed>').A()
		$('<news-feed>').at('params', "vm: feed2").A()
		ko.r('news-feed', {
			m: function (p) {
				this.vm = p.vm
			}
		})
		ko.r('news-feed', {
			m: function (p) {
				this.vm = p.vm
			},
			t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
		})
		ko.r("news-feed", {
			m: function (p) {
				this.vm = p.vm
			},
			t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
		})
		Feed = function () {
			this.ms = ko.o('pf!')
		}
		VM = function () {
			this.ms = ko.o("Hi");
			this.feed = new Feed();
			this.feed2 = new Feed();
			this.feed.ms("Ms1");
			this.feed2.ms("Ms2");
		}
		Ms = function (m) {
			return {m: ko.o(m || '')}
		}
		ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
		ok(new VM())
		ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
		vm.VM.ms("1");
		vm.VM2.ms("2")
	}
	WEBCM = function () {
		//For example, instead of writing this:
		$.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
		//  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:
		$('<flight-deals>')
		//   < params='from: "lhr", to: "sfo"'></flight-deals>
	}
	TPLIST = function () {
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
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
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
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
	KOCL = function () {
		Per = function (n, ch) {
			var per = this
			per.n = n
			per.ch = ko.oa(ch)
			per.A = function () {
				per.ch.push('new ch')
			}
		}
		peep = [
			new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
			new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
			new Per("Charles", ["Cayenne", "Cleopatra"])
		]
		$.uE('peep', [
			$.li().A(
					$.d([
						$.spT('n'), 'has',
						$.spT('ch().length'),
						'children &nbsp;',
						$.a$('New', 'A')
					]),
					$.ulE('ch', [
						$.li([
							$.spT(), $.spVs('$root.showDT').A(
									' (child rendered at ', $.spT('$Dt().getSeconds()'), ')'
							)])])
			)
		])
		$.cbC('showDT').a2Lb('Show time:')
		//anonymous vm
		OK({
			peep: peep,
			showDT: kO()
		})
	}
	bbLocStorPLUG = function () {
		(function (root, factory) {
			if (typeof exports === 'object' && typeof require === 'function') {
				module.exports = factory(require("backbone"));
			} else if (typeof define === "function" && define.amd) {
				// AMD. Register as an anonymous module.
				define(["backbone"], function (bb) {
					// Use global variables if the locals are undefined.
					return factory(bb || root.bb);
				});
			} else {
				factory(bb);
			}
		}(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
			function S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			};
// Generate a pseudo-GUID by concatenating random hexadecimal.
			function guid() {
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			};
			function isObject(item) {
				return item === Object(item);
			}
			
			function contains(array, item) {
				var i = array.length;
				while (i--) if (array[i] === item) return true;
				return false;
			}
			
			function extend(obj, props) {
				for (var key in props) obj[key] = props[key]
				return obj;
			}
			
			function result(object, property) {
				if (object == null) return void 0;
				var value = object[property];
				return (typeof value === 'function') ? object[property]() : value;
			}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
			bb.LocalStorage = window.Store = function (name, serializer) {
				if (!this.localStorage) {
					throw "bb.localStorage: Environment does not support localStorage."
				}
				this.name = name;
				this.serializer = serializer || {
					serialize: function (item) {
						return isObject(item) ? JSON.stringify(item) : item;
					},
					// fix for "illegal access" error on Android when JSON.parse is passed null
					deserialize: function (data) {
						return data && JSON.parse(data);
					}
				};
				var store = this.localStorage().getItem(this.name);
				this.records = (store && store.split(",")) || [];
			};
			extend(bb.LocalStorage.prototype, {
				// Save the current state of the **Store** to *localStorage*.
				save: function () {
					this.localStorage().setItem(this.name, this.records.join(","));
				},
				// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
				// have an id of it's own.
				create: function (model) {
					if (!model.id && model.id !== 0) {
						model.id = guid()
						model.set(model.idAttribute, model.id)
					}
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					this.records.push(model.id.toString())
					this.save();
					return this.find(model)
				},
				// Update a model by replacing its copy in `this.data`.
				update: function (model) {
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					var modelId = model.id.toString()
					if (!contains(this.records, modelId)) {
						this.records.push(modelId)
						this.save()
					}
					return this.find(model)
				},
				// Retrieve a model from `this.data` by id.
				find: function (model) {
					return this.serializer.deserialize(
							this.localStorage().getItem(this._itemName(model.id)))
				},
				// Return the array of all models currently in storage.
				findAll: function () {
					var result = []
					for (var i = 0, id, data; i < this.records.length; i++) {
						id = this.records[i]
						data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
						if (data != null) result.push(data)
					}
					return result
				},
				// Delete a model from `this.data`, returning it.
				destroy: function (model) {
					this.localStorage().removeItem(this._itemName(model.id));
					var modelId = model.id.toString();
					for (var i = 0, id; i < this.records.length; i++) {
						if (this.records[i] === modelId) {
							this.records.splice(i, 1);
						}
					}
					this.save();
					return model;
				},
				localStorage: function () {
					return localStorage;
				},
				// Clear localStorage for specific collection.
				_clear: function () {
					var local = this.localStorage(),
							itemRe = new RegExp("^" + this.name + "-");
					// Remove id-tracking item (e.g., "foo").
					local.removeItem(this.name);
					// Match all data items (e.g., "foo-ID") and remove.
					for (var k in local) {
						if (itemRe.test(k)) {
							local.removeItem(k);
						}
					}
					this.records.length = 0;
				},
				// Size of localStorage.
				_storageSize: function () {
					return this.localStorage().length;
				},
				_itemName: function (id) {
					return this.name + "-" + id;
				}
			})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
			bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
				var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
				var resp, errorMessage;
				//If $ is having Deferred - use it.
				var syncDfd = bb.$ ?
						(bb.$.Deferred && bb.$.Deferred()) :
						(bb.Deferred && bb.Deferred());
				try {
					switch (method) {
						case "read":
							resp = model.id != undefined ? store.find(model) : store.findAll();
							break;
						case "create":
							resp = store.create(model);
							break;
						case "update":
							resp = store.update(model);
							break;
						case "delete":
							resp = store.destroy(model);
							break;
					}
				} catch (error) {
					if (error.code === 22 && store._storageSize() === 0)
						errorMessage = "Private browsing is unsupported";
					else
						errorMessage = error.message;
				}
				if (resp) {
					if (options && options.success) {
						if (bb.VERSION === "0.9.10") {
							options.success(model, resp, options);
						} else {
							options.success(resp);
						}
					}
					if (syncDfd) {
						syncDfd.resolve(resp);
					}
				} else {
					errorMessage = errorMessage ? errorMessage
							: "Record Not Found";
					if (options && options.error)
						if (bb.VERSION === "0.9.10") {
							options.error(model, errorMessage, options);
						} else {
							options.error(errorMessage);
						}
					if (syncDfd)
						syncDfd.reject(errorMessage);
				}
				// add compatibility with $.ajax
				// always execute callback for success and error
				if (options && options.complete) options.complete(resp);
				return syncDfd && syncDfd.promise();
			};
			bb.ajaxSync = bb.sync
			bb.getSyncMethod = function (model, options) {
				forceAjaxSync = options && options.ajaxSync
				if (!forceAjaxSync && (result(model, 'localStorage') ||
						result(model.collection, 'localStorage'))) {
					return bb.localSync
				}
				return bb.ajaxSync
			}
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'
			bb.sync = function (met, md, op) {
				return bb.getSyncMethod(md, op).apply(this, [met, md, op])
			}
			return bb.LocalStorage
		}))
	}
	BBLS = function () {
		bbLocStorPLUG()
		Cl = bb.C.e({
			localStorage: new bb.LocalStorage('clN')
		})
	}
	PAGEGRID = function () {
		$.x('r', 'page grid')
//<div data-bind='simpleGrid: gridViewModel'> </div>
		$.d().b('simpleGrid', 'gridViewModel')
		$.bt('add').b$('addItem')
		$.bt('sortbyn').b$(' sortByName')
		$.bt('sortbyn').b$(' sortByName')
		$.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')
		PagedGridModel = {
			items: oA(
					{n: "Well-Travelled Kitten", sales: 352, $: 75.95},
					{n: "Speedy Coyote", sales: 89, $: 190.00},
					{n: "Furious Lizard", sales: 152, $: 25.00},
					{n: "Indifferent Monkey", sales: 1, $: 99.95},
					{n: "Brooding Dragon", sales: 0, $: 6350},
					{n: "Ingenious Tadpole", sales: 39450, $: 0.35},
					{n: "Optimistic Snail", sales: 420, $: 1.50}
			),
			addItem: function () {
				this.items.push(
						{n: "New item", sales: 0, $: 100}
				)
			},
			sortByName: function () {
				this.items.sort(function (a, b) {
					return a.n < b.n ? -1 : 1
				})
			},
			jumpToFirstPage: function () {
				this.gridViewModel.currentPageIndex(0)
			},
			gridViewModel: new ko.simpleGrid.viewModel({
				data: this.items, columns: [
					{hdrT: "Item Name", rowText: "n"},
					{hdrT: "Sales Count", rowText: "sales"},
					{
						hdrT: "Price",
						rowText: function (item) {
							return "$" + item.$.toFixed(2)
						}
					}],
				pageSize: 4
			})
		}
		PagedGrid = new PagedGridModel()
		ok(PagedGrid)
	}
	comp = function () {
		CMLDR = function () {
			$.x()
			VM = function (p) {
				this.somePop = p.smKey
			}
			VM.prototype.doSmg = function () {
			}
			ko.r('my-cm', VM)
			ko.r('my-cm', {
				m: {
					createVM: function (p, cmInf) {
						return new VM(p)
					}
				},
				t: '#d'
			})
			ko.r('message-editor', {
				m: function (p) {
					this.t = ko.o(p && p.initialText || '')
				},
				t: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')'])
			})
			$.tp("my-special-list-template").A(
					$.h3('Here is a special list')
			)
			$.ulE("{ data: myItems, as: 'myItem' }").A(
					$.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
			$.tg = function (a) {
				return $('<' + a + '>')
			}
			$.tg('my-special-list').at('params', 'items: PEEP')
					.A('The person', $.em().b('t', 'name'),
					'is', $.em().b('t', 'age'), 'years old.')
			ko.r('my-special-list', {
				t: {el: 'my-special-list-template'},
				m: function (p) {
					this.myItems = p.items
				}
			})
			ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
			ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
				tgNLower = nd.tagName && nd.tagName.toLowerCase()
				return ko.cm.iR(tgNLower) ? tgNLower :
						tgNLower === "special-el" ? "MyCm" :
								null
				// If the el's name matches a reg-ed cm, use that cmt
				// For the el <special-el>, use the component
				// "MySpecialComponent" (whether or not it was preregistered)
				// Treat anything else as not representing a component
			}
			MyCmVM = function (pm) {
				curObsrvInst = pm.$raw.myExpr()
			}
			// Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"
			// 'params' is an object whose k/v pairs are the pams
			// passed from the cm bd or cust el.
			// - 'cmtInf.el'
			// is the el the component is being//
			//  injected into. When createVM is called, the template has//
			//  already been injected into this el, but isn't yet bound.
			// - 'componentInfo.templateNodes'
			// is an array containing any DOM
			//   nodes that have been supplied to the component. See below.
			// Return the desired view model instance, e.g.:
		}
		CMNEWS = function () {
			$.x('y', 'news feed')
			//http://jsfiddle.net/rniemeyer/fssXE/
			$.qAP('news-feed', 'vm', 'VM')
			$.qAP('news-feed', 'vm', 'VM2')
			$.h2('News Feed')
			$.dT('vm.ms')
			$('<news-feed params="vm: feed"></news-feed>').A()
			$('<news-feed>').at('params', "vm: feed2").A()
			ko.r('news-feed', {
				m: function (p) {
					this.vm = p.vm
				}
			})
			ko.r('news-feed', {
				m: function (p) {
					this.vm = p.vm
				},
				t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
			})
			ko.r("news-feed", {
				m: function (p) {
					this.vm = p.vm
				},
				t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
			})
			Feed = function () {
				this.ms = ko.o('pf!')
			}
			VM = function () {
				this.ms = ko.o("Hi");
				this.feed = new Feed();
				this.feed2 = new Feed();
				this.feed.ms("Ms1");
				this.feed2.ms("Ms2");
			}
			Ms = function (m) {
				return {m: ko.o(m || '')}
			}
			ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
			ok(new VM())
			ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
			vm.VM.ms("1");
			vm.VM2.ms("2")
		}
		WEBCM = function () {
			//For example, instead of writing this:
			$.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
			//  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:
			$('<flight-deals>')
			//   < params='from: "lhr", to: "sfo"'></flight-deals>
		}
		bindn = function () {
			
			
			/*
			 <unrealistic-cm
			 params='stringValue: "hello",
			 numericValue: 123,
			 boolValue: true,
			 objectValue: { a: 1, b: 2 },
			 dateValue: new Date(),
			 someModelProperty: myModelValue,
			 observableSubproperty: someObservable().subprop'>
			 </unrealistic-component>*/
			/*
			 ko.bindingHandlers.yourBindingName = {
			 init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
			 // This will be called when the binding is first applied to an element
			 // Set up any initial state, event handlers, etc. here
			 },
			 update: function(q, vAc, bd, vm, bdCtx) {
			 // This will be called once when the binding is first applied to an element,
			 // and again whenever any observables/computeds that are accessed change
			 // Update the DOM element based on the supplied values here.
			 }
			 }
			 */
			/*
			 The “update” callback
			 ko will call the upd cb init when   bd   applied to an el
			 and tr any deps (observs/computeds) that you access.
			 When any deps change, the upd  cb   called  w these pams:
			 el  —  DOM el  involved in this bd
			
			 valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())
			
			 To easily accept both observable and plain values, call ko.unwrap on the returned value.
			
			 allBindings — ob,  used to access all the md values bound to this el
			
			 Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
			 or allBindings.has('name') to determine if the name binding is present for the current element.
			
			 vm —   deprecated  !
			
			 Use bindingContext.$data or bindingContext.$rawData to access the view model instead.
			
			 bindingCtx — ob, holds the binding ctx available to this el’s bindings,
			 includes special properties including $parent, $parents,
			 and $root that can be used to access data that is bound against ancestors of this ctx
			
			 ex: you might have been controlling an element’s vs using the vs binding,
			 but now you want to go a step further and animate the transition.
			 You want elements to slide into and out of existence according to the value of an observable.
			 You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:
			
			 */
			BDSMPGRD = function () {
				
				// This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
				ko.simpleGrid = {
					// Defines a view model class you can use to populate a grid
					// If you don't specify columns configuration, we'll use scaffolding
					m: function (cf) {
						this.data = cf.data
						this.currentPageIndex = ko.o(0);
						this.pageSize = cf.pageSize || 5;
						this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
						this.itemsOnCurrentPage = ko.c(function () {
							var startIndex = this.pageSize * this.currentPageIndex();
							return ko.ut.uo(this.data)
									.slice(startIndex, startIndex + this.pageSize);
						}, this);
						this.maxPageIndex = ko.c(function () {
							return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
						}, this)
					}
				}
				/*
				 // Templates used to render the grid
				 var templateEngine = new ko.jqueryTmplTemplateEngine();
				 templateEngine.addTemplate("ko_simpleGrid_grid", "\
				 <table class=\"ko-grid\" cellspacing=\"0\">\
				 <thead>\
				 <tr>\
				 {{each(i, columnDefinition) columns}}\
				 <th>${ columnDefinition.headerText }</th>\
				 {{/each}}\
				 </tr>\
				 </thead>\
				 <tbody>\
				 {{each(i, row) itemsOnCurrentPage()}}\
				 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
				 {{each(j, columnDefinition) columns}}\
				 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
				 {{/each}}\
				 </tr>\
				 {{/each}}\
				 </tbody>\
				 </table>");
				 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
				 <div class=\"ko-grid-pageLinks\">\
				 <span>Page:</span>\
				 {{each(i) ko.utils.range(1, maxPageIndex)}}\
				 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
				 ${ i + 1 }\
				 </a>\
				 {{/each}}\
				 </div>");
				 */
				// The "simpleGrid" binding
				ko.bh.simpleGrid = {
					// This method is called to initialize the node, and will also be called again if you change what the grid is bound to
					update: function (el, vwMdAcc, allBndAcc) {
						var vm, allBnd,
								grdTpN, pgLnksTpN,
								grdCt,
								pgLnksCt
						vm = vwMdAcc()
						allBnd = allBndAcc()
						while (el.firstChild) {
							ko.removeNode(el.firstChild)
						}
						// Allow the default templates to be overridden
						grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
						pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
						grdCt = el.A($.d()); // Render the main grid
						ko.rTp(grdTpN, vm, {templateEngine: templateEngine}, grdCt, "replaceNode")
						// Render the page links
						pgLnksCt = el.A($.d())
						ko.rTp(pgLnksTpN, vm, {templateEngine: templateEngine}, pgLnksCt, "replaceNode");
					}
				}
				function gScafCols(d) {
					var cols
					if ((typeof d.length != 'number') || d.length == 0) {
						return []
					}
					cols = [];
					for (var popN in d[0])
						cols.push({headerText: popN, rowText: popN});
					return cols;
				}
			}
			BINDINGS = function () {
				$.h3().bT('qu')
				$.p('Please distribute').A(
						$.b().bT('ptsBudg'),
						'pts btwn the following opts'
				)
				$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
						$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'pts'))))
				$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
						'You used too many points! Please remove some.')
				$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
				$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
				bindings = function () {
// Reusable bindings - ideally kept in a separate file
					ko.BH.fadeVs = {
						init: function (el, valAcc) {
							var shouldDisplay = valAcc();
							$(el).toggle(shouldDisplay)
						},// Start visible/invisible according to initial value
						update: function (el, valAcc) {
							var shouldDisplay = valAcc();
							shouldDisplay ? $(el).fadeIn() :
									$(el).fadeOut()
						}
					} // On update, fade in/out
					ko.BH.jqBt = {
						init: function (el) {
							$(el).button();
						}, // Turns the el into a jQuery UI button
						update: function (el, valAcc) {
							var curVal = valAcc();
							$(el).button("option", "disabled", curVal.enable === false);
						}
					}// Here we just update the "disabled" state, but you could update other properties too
					ko.BH.starRating = {
						init: function (el, valAcc) {
							$(el).addClass("starRating");
							for (var i = 0; i < 5; i++) {
								$.sp().appendTo(el)
							}
							$("span", el).each(function (index) {
								$(this).hv(// Handle mouse events on the stars
										function () {
											$(this).prevAll().add(this).K("hoverChosen")
										},
										function () {
											$(this).prevAll().add(this).removeClass("hoverChosen")
										})
										.click(function () {
											var observable = valAcc();
											observable(index + 1)
										})
							})
						},           // Get the associated observable// Write the new rating to it
						update: function (el, valAcc) {
							var observable = valAcc();
							$("span", el).each(function (index) {
								$(this).toggleClass("chosen", index < observable())
							})
						} // Give the first x stars the "chosen" class, where x <= rating
					}
				};
				bindings()
				function Aw(text) {
					this.awText = text;
					this.points = ko.o(1);
				}
				
				function SurvVM(qu, ptsBdg, aws) {
					this.qu = qu;
					this.ptsBdg = ptsBdg
					this.aws = $.map(aws, function (tx) {
						return new Aw(tx)
					});
					this.save = function () {
						alert('To do')
					};
					this.ptsUsed = ko.c(function () {
								var tot = 0;
								for (var i = 0; i < this.aws.length; i++) {
									tot += this.aws[i].points()
								}
								return tot
							},
							this)
				}
				
				ok(new SurvVM(
								"Which factors affect your technology choices?",
								10,
								[
									"Functionality, compatibility, pricing - all that boring stuff",
									"How often it is mentioned on Hacker News",
									"Number of gradients/dropshadows on project homepage",
									"Totally believable testimonials on project homepage"
								]
						)
				)
			}
			CUSTBDJ = function () {
				ko.bh.slVs = {
					update: function (el, valAcc, allBindings) {
						var unwrapped, dur, v = valAcc() // First get the latest data that we're bound to
						unwrapped = ko.unwrap(v);
						// Next, whether or not the supplied model property is observable, get its current value
						dur = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
						if (unwrapped) {
							$(el).slideDown(dur)
						}
						else {
							$(el).slideUp(dur)
						}
					}
				}
				$.d('You have selected the option').b({
					slVs: 'wrap',
					slDur: 600
				})
				$.lb().A($.cbC('wrap'), 'Gift wrap')
				ok({wrap: ko.o(1)})
			}
			CUSTBDEX = function () {
				$.d().b('e', 'items').A(
						$.d().at('data-bind', "composableComponent: 'x-expander'").A(
								$.d().at('data-part', 'title').A($('<strong>')
										.b({
											t: 'binding',
											sy: "{'color': $comp.isExpanded() ? 'darkred' : 'black'}"
										})),
								$.d().at('data-part', 'content').A($('<strong>').b({t: 'binding'}),
										$.sp().b('t', 'description'))))
				$('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
						$.dK('header'),
						$.bt().b({t: 'toggleText', $: 'toggle'}),
						$.sp('Expander').K('title').at('data-part', 'title'),
						$.dK('content').at('data-part', 'content').b('vs', 'isExpanded')
								.A('Content'))
				ko.ext = ko.ext || {};
				ko.ext.utils = ko.ext.utils || {};
				ko.ext.utils.cloneNodes = function () {
					if (ko.utils.cloneNodes) {
						return ko.utils.cloneNodes
					}
					else {
						return function (nodesArray, shouldCleanNodes) {
							for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
								var clonedNode = nodesArray[i].cloneNode(true);
								newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
							}
							return newNodesArray;
						}
					}
				}
				ko.ext.utils.cloneNodes()
				compLoadingOperationUniqueId = 0
				ko.bh['composableComponent'] = {
					'init': function (el, valueAccessor, ignored1, ignored2, bindingContext) {
						disposeAssociatedComponentVM = function () {
							currentVMDispose = currentVM && currentVM['dispose'];
							if (typeof currentVMDispose === 'function') {
								currentVMDispose.call(currentVM)
							}
							// Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
							currentLoadingOperationId = null
						}
						isFirstRender = false;
						specifiedParts;
						ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
						ko.c(function () {
							if (!isFirstRender) {
								isFirstRender = true;
								specifiedParts = null;
								findParts(el, function (partName, partNode) {
									if (!specifiedParts) {
										specifiedParts = {}
									}
									partChNodes = ko.vE.chNodes(partNode)
									specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true)
								})
							}
							value = ko.ut.uo(valueAccessor())
							if (typeof value === 'string') {
								cmNm = value
							}
							else {
								cmNm = ko.ut.uo(value['name']);
								compParams = ko.ut.uo(value['params'])
							}
							if (!cmNm) {
								throw new Error('No comp name specified')
							}
							loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
							ko.cm.get(cmNm,
									function (compDef) {
										if (currentLoadingOperationId !== loadingOperationId) {
											return;
										} // If this is not the current load operation for this el, ignore it.
										disposeAssociatedComponentVM();// Clean up previous state
										if (!compDef) {
											throw new Error('Unknown comp \'' + cmNm + '\'')
										}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
										cloneTemplateIntoElement(cmNm, compDef, el);
										compVM = createVM(compDef, el, compParams)
										chBindingContext = bindingContext['createChildContext'](compVM)
										currentVM = compVM
										ko.bD(chBindingContext, el)
										if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
											partBindingContext = bindingContext['extend']({'$comp': compVM})
											findParts(el, function (partName, partNode) {
												if (!(replacementNodes = specifiedParts[partName])) {
													return
												}
												clonedNodes = ko.ext.utils.cloneNodes(replacementNodes)
												ko.vE.setDomNodeChildren(partNode, clonedNodes);
												ko.bD(partBindingContext, partNode)
											})
										}
									})
						}, null, {disposeWhenNodeIsRemoved: el});
						return {'controlsDescendantBindings': true};
					}
				}
				ko.vE.AB['composableComponent'] = true
				ExpanderCmVM = function () {
					this.isExpanded = ko.o(false)
					this.toggleText = ko.c(function () {
						return this.isExpanded() ? '-' : '+'
					}, this)
				}
				ExpanderCmVM.prototype.toggle = function () {
					this.isExpanded(!this.isExpanded())
				}
				ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
				AppVM = function () {
					this.items = [
						{
							binding: 'vs',
							desc: 'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd'
						},
						{
							binding: 't',
							desc: 'causes the assoc DOM el to display the text value of your pam.'
						},
						{
							binding: 'cm',
							desc: 'injects a spec cm into an el, and optly passes pams to it.'
						}
					]
				}
				ok(new AppVM())
				ko.vE.nCh = ko.vE.setDomNodeChildren
				function findParts(parentNode, fn) {
					if (!parentNode) {
						return
					}
					chNodes = ko.vE.chNodes(parentNode)
					ko.utils.arrayForEach(chNodes, function (chNode) {
						// Search for el nodes only
						if (chNode.nodeType !== 1) {
							return;
						}
						if (partName = chNode.getAttribute('data-part')) {
							fn(partName, chNode)
						}
						else {
							findParts(chNode, fn)
						} // Do not search into part definition
					})
				}
				
				function cloneTemplateIntoElement(cmN, cmD, el) {
					var tp
					if (tp != cmD['template']) {
						_.er('Cm\'' + cmN + '\'!tp')
					}
					ko.vE.nCh(el,
							clonedNodesArray = ko.ext.utils.cloneNodes(tp)
					)
				}
				
				function createVM(cmD, el, cmPams) {
					return (cmVMFact = cmD['createVM']) ?
							cmVMFact.call(cmD, cmPams, {el: el}) : cmPams
				}
				
				//http://jsfiddle.net/mbaranov/6zvjfd2y/
			}
			/*
			
			 You should use ko.utils.unwrapObservable
			 in cases where you don't know if u have been gvn an obsvb or not.
			 This would commonly be in a cstm bdg where an ovb or
			 non-obv
			 could be bound against it.
			
			 In the code that u have above,
			 the call to vAc() is not actually unwrpping an ovb
			
			 It is just retrieving the value that was passed to the binding in the correct context
			
			 (it gets wrapped in a fn to protect it).
			
			 The ret v of valAcc() may be an obv or not.
			
			 It is * was pasd to the bdg
			
			
			 */
		};
		bindn()
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
	};
	$.eT = $.emT = function (t) {
		return $.em().bT(t)
	}
	COMPNAME = function () {
		ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
			tgN = nd.tagName && _.tL(nd.tagName)
			return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
			// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
			// use cm "MySpecialComponent" (regardless if pre-regd)
			// Treat anything else as !repg a cm
		}
	}
	ko.cm = ko.cmp = ko.comp = ko.components
	ko.cm.rg = ko.cm.reg = ko.cm.register
	ko.cm.iR = ko.cm.isRegistered
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
	ko.r = ko.rg = ko.cm.rg = ko.cm.reg = function () {
		var g = G(arguments), o
		o = {n: g.f, op: g.s}
		o.op = o.op || {}
		if (!o.op.viewModel) {
			//op.viewModel = op.vm || op.m
			if (op.vm) {
				op.viewModel = op.vm
			}
			else if (op.m) {
				op.viewModel = op.m
			}
		}
		if (S(o.op.viewModel) || (
				O(o.op.viewModel) && !o.op.viewModel.element  )) {
			o.op.viewModel = {element: o.op.viewModel}
		}
		o.op.viewModel = o.op.viewModel || {vm: o.op}
		if (!op.template) {
			if (op.tp) {
				op.template = op.tp
			}
			else if (op.t) {
				op.template = op.t
			}
		}
		cm = ko.cm.reg(o.n, o.op)
		return cm
	}
	CM = function () {
		$.x()
		d = $.d().A($.hr(), 'hrrrr', $.hr())
		ko.r('test', {t: d[0], m: {a: 100, b: 'hello'}})
		$('<test>').A()
				.C('b').A('hello')
		$('<test>').A()
				.C('b').A('hel1')
		$('<test>').A()
				.C('b').A('hello2')
	}
	CMLDR = function () {
		$.x()
		VM = function (p) {
			this.somePop = p.smKey
		}
		VM.prototype.doSmg = function () {
		}
		ko.r('myCm', VM)
		ko.r('myCm', {
			m: {
				createVM: function (p, cmInf) {
					return new VM(p)
				}
			},
			t: '#d'
		})
		ko.r('msgEd', {
			m: function (p) {
				this.t = ko.o(p && p.initT || '')
			},
			t: $.d([
				'Ms:',
				$.ipV('t'),
				'(len:', $.spT('t().length'), ')'
			])
		})
		$.tp("MyLsTp").A($.h3('spcl ls:'))
		$.ulE(
				"{ data: myItems, as: 'myItem' }"
		).A(
				$.li().A(
						$.h4('more my spc items'),
						$({
							tp: {nodes: $componentTemplateNodes, data: 'myItem'}
						})
				)
		)
		$.tg('MyLs').at('params', 'items: PEEP').A(
				'The person', $.emT('name'), 'is', $.emT('age'), 'years old.')
		ko.r('MyLs', {
			t: {el: 'MyLs-template'},
			m: function (p) {
				this.myItems = p.items
			}
		})
		ko.b({
			PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])
		})
		MyCmVM = function (pm) {
			curObsrvInst = pm.$raw.myExpr()
		}
		// Now curObsrvInst is either
		// observable1 or obsrv2//
		// and you would read its value with "curObsrvInst()"
		// 'params' is an object whose k/v pairs are the pams
		// passed from the cm bd or cust el.
		// - 'cmtInf.el'
		//  is the el the component is being//
		//  injected into. When createVM is called, the template has//
		//  already been injected into this el, but isn't yet bound.
		// - 'componentInfo.templateNodes'
		// is an array containing any DOM
		//   nodes that have been supplied to the component. See below.
		// Return the desired view model instance, e.g.:
	}
	CMNEWS = function () {
		$.x('y', 'news feed')
		//http://jsfiddle.net/rniemeyer/fssXE/
		$.qAP('nwsFd', 'vm', 'VM')
		$.qAP('nwsFd', 'vm', 'VM2')
		$.h2('News Feed')
		$.dT('vm.ms')
		$('<nwsFd params="vm: feed"></nwsFd>').A()
		$('<nwsFd>').at('params', "vm: feed2").A()
		ko.r('nwsFd', {
			m: function (p) {
				this.vm = p.vm
			}
		})
		ko.r('nwsFd', {
			m: function (p) {
				this.vm = p.vm
			},
			t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
		})
		ko.r("nwsFd", {
			m: function (p) {
				this.vm = p.vm
			},
			t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
		})
		Feed = function () {
			this.ms = ko.o('pf!')
		}
		VM = function () {
			this.ms = ko.o("Hi")
			this.feed = new Feed()
			this.feed2 = new Feed()
			this.feed.ms("Ms1")
			this.feed2.ms("Ms2")
		}
		Ms = function (m) {
			return {m: ko.o(m || '')}
		}
		ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
		ok(new VM())
		ok({
			ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}
		})
		vm.VM.ms("1")
		vm.VM2.ms("2")
	}
	WEBCM = function () {
		
		
		//instead of writing this:
		$.d().b('cmN', '{n:"flDeals", params:{from:"lhr",to:"sfo"}}'
		)
		//  <div data-bind='component: {
		// name: "flight-deals", params: { from: "lhr", to: "sfo" }
		// }'></div>
//… you can write:
		$('<FlDeals>')  //   < params='from: "lhr", to: "sfo"'></flight-deals>
	}
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//   reg  is optional, comp def specs vm, tp
	LIKE = function () {
		$.x('x', 'like')
		ko.rg('like', {
			m: function (o) {
				var cm = this
				cm.chosenValue = o.value   // Data: v is null|'like'|'dislike'
				cm.like = function () {
					cm.chosenValue('like')
				}
				cm.dislike = function () {
					cm.chosenValue('dislike')
				}
			},
			t: $.sp().A(
					$.dK("like-or-dislike").bVs('!chosenValue()').A(
							$.bt('like it').bC('like'), $.bt('Dislike it').bC('dislike')
					),
					$.dK('result').bVs('chosenValue').A(
							'You', $.str().bT('chosenValue'), 'it'
					)
			)
		})
		//   use  it as a custom element:
		$.ulE('prods').A($.li().K("prod").A(
				$.str().bT('n'),
				$('<like>').at('params', "value: uRating")
		))
		$.ul().b('e', 'products').A(
				$.li().K("prod").A(
						$.str().bT('n'),
						$('<like-or-dislike>').at('params', "value: uRating")
				)
		)
		$.bt('Add a product').b$('A')
		function Prod(n, ratg) {
			return {n: n, uRatg: ko.o(ratg || null)}
		}
		
		function VM() {
			this.prods = ko.oa()
		}
		
		VM.prototype.A = function () {
			this.prods.push(Prod('Prod ' + (this.prods().length + 1)))
		}
		OK(new VM())
		OK({prods: [Prod('brd'), Prod('chc'), Prod('sgh', 'like')]})
	}
	LIKE = function () {
		$.x('b', 'like')
		tp = $.d([
			$.d([
				$.bt('like it').b('$', 'like'),
				$.bt('dislike').b('$', 'dislike')
			]).K("like-or-dislike").at('data-bind', "visible: !chosenValue()"),
			$.d(['You',
				$('<strong>').b('t', "chosenValue"), 'it'
			]).K('result').at('data-bind', "visible: chosenValue")
		])
		ko.components.register('like-widget', {
			viewModel: function (pams) {
				this.chosenValue = pams.value
				this.like = function () {
					this.chosenValue('like')
				}.bind(this)
				this.dislike = function () {
					this.chosenValue('dislike')
				}.bind(this) // i didnt overwrite bind did i?
			},
			template: tp
		})
		$.ulE('products').A( // should i not pass in arr as 2nd pam to ulE
				$.li().K("product").A(
						$('strong').b('t', 'name'),
						$('like-widget ').at('params', 'value: userRating')))
		function Prod(n, rating) {
			this.name = n;
			this.userRating = ko.o(rating || null)
		}
		
		ok({
			products: [
				new Prod('Garlic'), new Prod('Pain'), new Prod('Seag', 'like') // This one was already 'liked'
			]
		})
	}
// ko.b({ g[0]:  ko.o(b) })
	KOCM = function () {
		$.x('b', 'First instance, without parameters')
		$.d().bCm('message-editor')
		$.h4('Second instance, passing parameters')
		ko.components.register('message-editor', {
			viewModel: function (params) {
				this.text = ko.o(params && params.initialText || '')
			},
			template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		})
		$.dCm(
				'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
		)
		ko.applyBindings()
	}
	$.dCm = function (a) {
		return $.d().bCm(a)
	}
	ko.r = ko.rg = function (n, ob) {
		ob = ob || {}
		if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
			ob.vm = {element: ob.vm}
		}
		ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
		if (U(ob.viewModel)) {
			ob = {vm: ob}
		}
		ob.template = ob.template || ob.tp || ob.t
		vm = ob
		return ko.cm.rg(n, ob)
	}
	$.fn.bCm = function (s) {
		return this.b('component', s)
	}
//tagUp and add, return jQ
	$.fn.qA = function (t) {
		return $('<' + t + '>').A()
	}
	$.fn.par = function (a, b) {
		this.at('params', a + ': ' + b);
		return this
	}
	$.fn.qAP = function (a, b, c) {
		this.qA(a).par(b, c)
		return this
	}
}
function custEls() {
	MSEDTR = function () {
		z() // ex: declares a component, injects two instances of it into a view
		ko._('message-editor',
				tmpl, function (p) {
					this.text = $o(p.text || 'happy')
				})
	}
	/*
	 MARKUP=function(){z()
	
	
	 //Sometimes you may want to create a component that receives
	 // markup and uses it as part of its output.
	 //    Consider a special list component that can be invoked as follows:
	
	 ok.$('my-special-list', {items: someArrayOfPeople}).A(//$("<!-- Look, Im putting markup inside a custom element -->"),
	 'The person' ,
	 $.em().bT('name'), $.em().bT('age') , 'years old.')
	
	
	 $('<template>').id("my-special-list-template").A(
	 $.h3('Here is a special list'),
	 $.uE("{ data: myItems, as: 'myItem' }").A(
	
	 $.li().A(
	 $.h4('Here is another one of my special items'),
	 // '<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->'))
	 ok.$('my-special-list',{items:'someArrayOfPeople'}).A(
	 //'<!-- Look, I'm putting markup inside a custom element -->',
	 'The person', $.em().bT('name'),  'is', $.em().bT('age'),'years old.'))
	 )
	
	 ko._('my-special-list', {
	 t: { element: 'my-special-list-template' },
	 m: function(params) {this.myItems = params.items}
	 })
	
	 ok({
	 someArrayOfPeople: ko.observableArray([
	 { name: 'Lewis', age: 56 },
	 { name: 'Hathaway', age: 34 }
	 ])
	 })
	
	 //This “special list” example does nothing more than insert a
	 // heading above each list item. But the same technique
	 // can be used to create sophisticated grids, dialogs, tab sets, and so on,
	 // since all that is needed for such UI elements is common UI markup
	 // (e.g., to define the grid or dialog’s heading and borders) wrapped around arbitrary supplied markup.
	 //
	 //    This technique is also possible when using components without
	 // custom elements, i.e., passing markup when using the component binding directly.
	 }
	 CUSTTAGNAMES=function(){
	 z()
	
	 //    If you want to have different custom element tag names,
	 // you can override getComponentNameForNode to control this. For example,
	 //
	 ko.cm.getComponentNameForNode = function(node) {
	
	 var tagNameLower = node.tagName && _.tL(node.tagName)
	 if (ko.cm.iR(tagNameLower)) {return tagNameLower}         // If the element's name exactly matches a preregistered// component, use that component
	 else if (tagNameLower === "special-element") { return "MySpecialComponent"}// For the element <special-element>, use the component// "MySpecialComponent" (whether or not it was preregistered)
	 else {return null; }// Treat anything else as not representing a component
	 }
	
	 //You can use this technique if, for example, you want to control which subset of
	 // registered components may be used as custom elements.
	 //
	 ko.$('my-custom-element', { })//No config needed
	
	 //Alternatively, you can override getComponentNameForNode to control
	 // dynamically which elements map to which component names,
	 // independently of preregistration.
	 }
	 COMBINE=function() {
	 z()
	 //    Note: Combining custom elements with regular bindings
	 //A custom element can have a regular data-bind attribute
	 // (in addition to any params attribute)
	 ko.$('products-list', {category: 'chosenCategory'}).bVs('shouldShowProducts')
	
	
	 //However, it does not make sense to use bindings that would modify
	 // the element’s contents, such as the text or template bindings,
	 // since they would overwrite the template injected by your component.
	 //
	 //    Knockout will prevent the use of any bindings that use
	 // controlsDescendantBindings, because this also would clash
	 // with the component when trying to bind its viewmodel to
	 // the injected template. Therefore if you want to use a control
	 // flow binding such as if or foreach, then you must wrap it around
	 // your custom element rather than using it directly on the custom element, e.g.,:
	 //
	
	 //$("<!-- ko if: someCondition --><products-list></products-list> <!-- /ko -->")
	
	 //or:
	 $.ulE('allProducts').A(ko.$('product-details', {product: '$data'}))
	
	 //Note: Custom elements cannot be self-closing
	 //You must write <my-custom-element></my-custom-element>,
	 // and not <my-custom-element />. Otherwise, your custom element is not closed and subsequent elements will be parsed as child elements.
	 //    This is a limitation of the HTML specification and is outside the scope of what Knockout can control.
	 // HTML parsers, following the HTML specification, ignore any self-closing slashes (except on a small number of special “foreign elements”, which are hardcoded into the parser). HTML is not the same as XML.
	
	 }
	 RAMPAMS=function() {
	 z()
	
	
	 //Advanced: Accessing $raw parameters
	 //Consider the following unusual case, in which useObservable1, observable1, and observable2 are all observables:
	
	 ok.$('some-component', {
	 myExpr: 'useObservable1() ? observable1 : observable2'
	 })
	 //Since evaluating myExpr involves reading an observable (useObservable1), KO will supply the parameter to the component as a computed property.
	 //
	 //    However, the value of the computed property is itself an observable. This would seem to lead to an awkward scenario, where reading its current value would involve double-unwrapping (i.e., params.myExpr()(), where the first parentheses give the value of the expression, and the second give the value of the resulting observable instance).
	 //
	 //This double-unwrapping would be ugly, inconvenient, and unexpected, so Knockout automatically sets up the generated computed property (params.myExpr) to unwrap its value for you. That is, the component can read params.myExpr() to get the value of whichever observable has been selected (observable1 or observable2), without the need for double-unwrapping.
	 //
	 //    In the unlikely event that you don’t want the automatic unwrapping, because you want to access the observable1/observable2 instances directly, you can read values from params.$raw. For example,
	 //
	 function MyComponentViewModel(p) {
	 var currentObservableInstance = p.$raw.myExpr();
	 }// Now currentObservableInstance is either observable1 or observable2// and you would read its value with "currentObservableInstance()"
	
	
	 //This should be a very unusual scenario,
	 // so normally you will not need to work with $raw.
	 }
	 */
	DIKE = function () {
		ko._('message-editor', [
					'Message:',
					$.ip().bV('text'),
					'( length: ',
					$.spT('text().length'), ' )'],
				function (p) {
					this.text = $o('wow')
				})
		$.d().A(
//         ko.$('message-editor', {text:'text'}), ko.$('message-editor', {text:'text'}) ,
				//$.sp('First instance, without parameters'),
				ko.$('message-editor'),
				//  $.h4('Second instance, passing parameters'),
				ko.$('message-editor', {text: 'Hello, world!'})
		)
		ok({text: $o('wow')})
	}
	//Knockout observables provide the basic features necessary to support reading/writing values
	// and notifying subscribers when that value changes.
	// In some cases, though, you may wish to add additional functionality to an observable.
	// This might include adding additional properties to the observable or
	// intercepting writes by placing a writable computed observable in front of the observable.
	// Knockout extenders provide an easy and flexible way to do this type of augmentation to an observable.
	//
	//    How to create an extender
	//Creating an extender involves adding a function to the ko.extenders object.
	// The function takes in the observable itself
	// as the first argument and any options in the second argument.
	// It can then either return the observable or return something new
	// like a computed observable that uses the original observable in some way.
	//
	//    This simple logChange extender subscribes to the observable and uses the console to write any changes along with a configurable message.
	//
	ko.extenders.logChange = function (target, option) {
		target.subscribe(function (newValue) {
			$l(option + ": " + newValue);
		})
		return target
	}
	//You would use this extender by calling the extend function of an observable
	// and passing an object that contains a logChange property.
	this.firstName = $o("Bob")
			.extend({logChange: "first name"})
	//If the firstName observable’s value was changed to Ted, then the console would show first name: Ted.
	/*
	 function ex1() {
	 //    Live Example 1: Forcing input to be numeric
	 //This example creates an extender that forces writes to an observable to be numeric rounded to a configurable level of precision. In this case, the extender will return a new writable computed observable that will sit in front of the real observable intercepting writes.
	 //<p><input data-bind="value: myNumberOne" /> (round to whole number)</p>
	 //<p><input data-bind="value: myNumberTwo" /> (round to two decimals)</p>
	 ko.extenders.numeric = function (target, precision) {//create a writable computed observable to intercept writes to our observable
	 var result = ko.pureComputed({
	 read: target,  //always return the original observables value
	 write: function (newValue) {
	 var current = target(),
	 roundingMultiplier = M.pow(10, precision),
	 newValueAsNum = isNaN(newValue) ? 0 : parseFloat(+newValue),
	 valueToWrite = M.round(newValueAsNum * roundingMultiplier) / roundingMultiplier
	 if (valueToWrite !== current) {
	 target(valueToWrite)
	 }   //only write if it changed
	 else {//if the rounded value is the same, but a different value was written, force a notification for the current field
	 if (newValue !== current) {
	 target.notifySubscribers(valueToWrite)
	 }
	 }
	 }
	 }).extend({notify: 'always'})
	 result(target())//initialize with current value to make sure it is rounded appropriately
	 return result
	 } //return the new computed observable
	
	 function AppViewModel(one, two) {
	 this.myNumberOne = $o()(one).extend({numeric: 0});
	 this.myNumberTwo = $o()(two).extend({numeric: 2})
	 }
	
	 ko.applyBindings(new AppViewModel(221.2234, 123.4525));
	 //Note that for this to automatically erase rejected values from the UI, it’s necessary to use .extend({ notify: 'always' }) on the computed observable. Without this, it’s possible for the user to enter an invalid newValue that when rounded gives an unchanged valueToWrite. Then, since the model value would not be changing, there would be no notification to update the textbox in the UI. Using { notify: 'always' } causes the textbox to refresh (erasing rejected values) even if the computed property has not changed value.
	
	
	 }
	 function ex2() {
	
	
	 //    Live Example 2: Adding validation to an observable
	 //This example creates an extender that allows an observable to be marked as required. Instead of returning a new object, this extender simply adds additional sub-observables to the existing observable. Since observables are functions, they can actually have their own properties. However, when the view model is converted to JSON, the sub-observables will be dropped and we will simply be left with the value of our actual observable. This is a nice way to add additional functionality that is only relevant for the UI and does not need to be sent back to the server.//ith
	 //<p data-bind="css: { error: firstName.hasError }">
	 //<input data-bind='value: firstName, valueUpdate: "afterkeydown"' />
	 //<span data-bind='visible: firstName.hasError, text: firstName.validationMessage'> </span>
	 //</p>
	 //<p data-bind="css: { error: lastName.hasError }">
	 //<input data-bind='value: lastName, valueUpdate: "afterkeydown"' />
	 //<span data-bind='visible: lastName.hasError, text: lastName.validationMessage'> </span>
	 //</p>
	
	 ko.extenders.required = function (target, overrideMessage) {//add some sub-observables to our observable
	 target.hasError = $o();
	 target.validationMessage = $o()
	 function validate(newValue) {
	 target.hasError(newValue ? false : true);
	 define
	 a
	 function to
	
	 do validation
	 target.validationMessage(newValue ? "" : overrideMessage || "This field is required")
	 }
	
	 validate(target())//initial validation
	 target.subscribe(validate); //validate whenever the value changes
	 return target;
	 } //return the original observable
	
	 function AppViewModel(first, last) {
	 this.firstName = ko.observable(first).extend({required: "Please enter a first name"});
	 this.lastName = ko.observable(last).extend({required: ""});
	 }
	
	 ko.applyBindings(new AppViewModel("Bob", "Smith"));
	 //Applying multiple extenders
	 //
	 //More than one extender can be applied in a single call to the .extend method of an observable.
	 //
	 this.firstName = ko.observable(first).extend({required: "Please enter a first name", logChange: "first name"});
	 //In this case, both the required and logChange extenders would be executed against our observable.
	 }
	 */
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
	function Task(title, done) {
		this.title = ko.observable(title)
		this.done = ko.observable(done)
	}
	
	function AppViewModel() {
		this.tasks = ko.observableArray([
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
ko.rg = ko.r = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko.r = ko.rg = function (n, ob) {
	ob = ob || {}
	if (S(ob.vm) || (O(ob.vm) && !ob.vm.element)) {
		ob.vm = {element: ob.vm}
	}
	ob.viewModel = ob.viewModel || ob.vm || ob.m || ob.o
	if (U(ob.viewModel)) {
		ob = {vm: ob}
	}
	ob.template = ob.template || ob.tp || ob.t
	vm = ob
	return ko.cm.rg(n, ob)
}
ko.bindingHandlers.randomOrder = {
	init: function (elem, valueAccessor) {
		// Build an array of child elements
		var child = ko.virtualElements.firstChild(elem),
				childElems = [];
		while (child) {
			childElems.push(child);
			child = ko.virtualElements.nextSibling(child);
		}
		// Remove them all, then put them back in a random order
		ko.virtualElements.emptyNode(elem);
		while (childElems.length) {
			var randomIndex = Math.floor(Math.random() * childElems.length),
					chosenChild = childElems.splice(randomIndex, 1);
			ko.virtualElements.prepend(elem, chosenChild[0]);
		}
	}
};
ko.bH = ko.bindingHandlers
ko.bH.randomOrder = {
	init: function (el, vA) {
		var ch = ko.vE.firstChild(el), CH = []
		while (ch) {
			CH.push(ch);
			ch = ko.vE.nextSibling(ch)
		}
		ko.vE.emptyNode(el)
		while (CH.length) {
			ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
		}
	}
	
	/*
	 init: function(el, valAcc) {
	 var childElems = []
	 while(el.firstChild)
	 childElems.push(el.removeChild(el.firstChild))
	 while(childElems.length) {
	 var randomIndex = M.fl(M.rn() * childElems.length),
	 chosenChild = childElems.splice(randomIndex, 1);
	 el.appendChild(chosenChild[0]);
	 }
	 }
	 */
}
ko.bH.fadeVisible = {
	init: function (el, vA) {// 1st set el vs pop rel to val
		$(el).toggle(ko.unwrap(vA()))
	},
	update: function (el, vA) {//on change, slowly fade el in/out
		ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
	}
}
ko.bH.hasFocus = {
	init: function (el, vA) {
		$(el).focus(function () {
			vA()(1)
		})
		$(el).blur(function () {
			vA()(0)
		})
	},
	update: function (el, vA) {
		ko.uw(vA()) ? el.focus() :
				el.blur()
	}
}
$bH = function (b, o) {
	if (F(o.u)) {
		o.update = o.u
	}
	if (F(o)) {
		o = {update: o}
	}
	ko.bH[b] = o
	$.fn[b] = function (a) {
		this.b(b, a)
	}
}
$bH('slV', function (el, vA) {
	var isChecked = ko.uw(vA())
	isChecked ? $(el).slD(1800) :
			$(el).slU(2000)
})
ko.bH = ko.bindingHandlers
ko.bH.randomOrder = {
	init: function (el, vA) {
		var ch = ko.vE.firstChild(el), CH = []
		while (ch) {
			CH.push(ch);
			ch = ko.vE.nextSibling(ch)
		}
		ko.vE.emptyNode(el)
		while (CH.length) {
			ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
		}
	}
	
	/*
	 init: function(el, valAcc) {
	 var childElems = []
	 while(el.firstChild)
	 childElems.push(el.removeChild(el.firstChild))
	 while(childElems.length) {
	 var randomIndex = M.fl(M.rn() * childElems.length),
	 chosenChild = childElems.splice(randomIndex, 1);
	 el.appendChild(chosenChild[0]);
	 }
	 }
	 */
}
ko.bH.fadeVisible = {
	init: function (el, vA) {// 1st set el vs pop rel to val
		$(el).toggle(ko.unwrap(vA()))
	},
	update: function (el, vA) {//on change, slowly fade el in/out
		ko.unwrap(vA()) ? $(el).fadeIn() : $(el).fadeOut()
	}
}
ko.bH.hasFocus = {
	init: function (el, vA) {
		$(el).focus(function () {
			vA()(1)
		})
		$(el).blur(function () {
			vA()(0)
		})
	},
	update: function (el, vA) {
		ko.uw(vA()) ? el.focus() : el.blur()
	}
}
$bH = function (b, o) {
	if (F(o.u)) {
		o.update = o.u
	}
	if (F(o)) {
		o = {update: o}
	}
	ko.bH[b] = o
	$.fn[b] = function (a) {
		this.b(b, a)
	}
}
$bH('slV', function (el, vA) {
	var isChecked = ko.uw(vA())
	isChecked ? $(el).slD(1800) :
			$(el).slU(2000)
})
//<- $.bt('Clear tweets').b$(' $parent.clearResults')
ko.bindingHandlers.randomOrder = {
	init: function (elem, valueAccessor) {
		// Build an array of child elements
		var child = ko.virtualElements.firstChild(elem),
				childElems = [];
		while (child) {
			childElems.push(child);
			child = ko.virtualElements.nextSibling(child);
		}
		// Remove them all, then put them back in a random order
		ko.virtualElements.emptyNode(elem);
		while (childElems.length) {
			var randomIndex = Math.floor(Math.random() * childElems.length),
					chosenChild = childElems.splice(randomIndex, 1);
			ko.virtualElements.prepend(elem, chosenChild[0]);
		}
	}
};