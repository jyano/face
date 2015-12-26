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
KOGRID = function () {
	f = $.z().f().at({action: '/someServerSideHandler'})
	f.A(
			$.p(['You have asked for', $.sp('&nbsp;')
					.bT('gifts().length'), 'gift(s)']),
			$.tVs('gifts().length > 0').A($.tH().A($.tr().A(//tHR
							$.th().A('Gift name'), $.th().A('Price'))),
					$.tB().bE('gifts').A($.tr().A(  //tBR
							$.td($.ip().K('required').b({v: 'name', u: 1})).A(),
							$.td($.ip().K('required number').b({v: 'price', u: 1})).A(),
							$.td($.a('delete').b$('$root.removeGift')).A()))),
			$.bt('add gift').b$('addGift'), $.sb().bEn('gifts().length > 0'),
			$.p('You have asked for').A(
					$.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
			$.tVs('gifts().length > 0').A(
					$.tH($.tr([$.th('Gift name'), $.th('Price')])),
					$.tBE('gifts').A(
							$.tr([
								$.td().A($.ip().K('required').b({
									v: 'n', u: 1
								})),
								$.td().A($.ip().K('required number').b({
									v: 'price', u: 1
								})),
								$.td($.a('delete').b$('$root.removeGift'))
							]))
			),
			$.b$('addGift'), $.sm().bEn('gifts().length > 0')
	)
	ok(new Gift([
		{name: "Tall Hat", price: "39.95"}, {name: "Long Cloak", price: "120.00"}]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	function alt() {
		KOGRID = function () {
			$.z()
			f = $.f().at({action: '/someServerSideHandler'})
			f.A(
					$.p(['You have asked for', $.sp('&nbsp;')])
							.bT('gifts().length', 'gift(s)'),
					$.t([
						$.tH($.tr([$.th('Gift name'), $.th('Price')])).bVs('gifts().length > 0'),
						$.tBE('gifts').A(
								$.tr([$.td().A($.ip().K('required').b({v: 'name', u: 1})),
									$.td($.ip().K('required number').b({v: 'price', u: 1})),
									$.td($.a('delete').b$('$root.removeGift'))])),
						$.bt$('addGift'), $.smEn('gifts().length > 0')
					])
			)
			ok(new Gift([
				{name: "Tall Hat", price: "39.95"},
				{name: "Long Cloak", price: "120.00"}
			]))
			// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
		}
		KOGRID = function () {
			f = $.f().at({action: '/someServerSideHandler'})
			f.A([
				$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A(
								$.tr().A(//tHR
										$.th().A('Gift name'),
										$.th().A('Price'))),
						$.tB().e$('gifts').A($.tr().A(  //tBR
								$.td().A(
										$.ip().K('required').b({
											v: 'name', un: true
										})),
								$.td().A($.ip().K('required number')
										.b({v: 'price', u: true})),
								$.td().A($.a('delete').cl$('$root.removeGift'))))),
				$.bt('add gift').b$('addGift'),
				$.sb().en$('gifts().length > 0')
			])
			ok(new Gift([
				{name: "Tall Hat", price: "39.95"},
				{name: "Long Cloak", price: "120.00"}
			]))
			// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
		}
	}
}
GRX = function () {
	$.x('x', 'grx1')
	$.d([
		$.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
		$.bt('add item').at({'data-bind': 'click: addItem'}),
		$.bt('sort by name').at({'data-bind': 'click: sortByName'}),
		$.bt('   Jump to first page')
				.at({
					'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
				})
	]).K('liveExample')
	function prev() {
		GRXX = function () {
			$.x('x', 'grx')
			/*
			 $CSS({
			
			
			 body { font-family: arial; font-size: 14px; }
			 .liveExample { padding: 1em; background-color: #EEEEDD; border: 1px solid #CCC; max-width: 655px; }
			 .liveExample input { font-family: Arial; }
			 .liveExample b { font-weight: bold; }
			 .liveExample p { margin-top: 0.9em; margin-bottom: 0.9em; }
			 .liveExample select[multiple] { width: 100%; height: 8em; }
			 .liveExample h2 { margin-top: 0.4em; }
			
			 .ko-grid { margin-bottom: 1em; width: 25em; border: 1px solid silver; background-color:White; }
			 .ko-grid th { text-align:left; background-color: Black; color:White; }
			 .ko-grid td, th { padding: 0.4em; }
			 .ko-grid tr:nth-child(odd) { background-color: #DDD; }
			 .ko-grid-pageLinks { margin-bottom: 1em; }
			 .ko-grid-pageLinks a { padding: 0.5em; }
			 .ko-grid-pageLinks a.selected { background-color: Black; color: White; }
			 .liveExample { height:20em; overflow:auto }
			 //Mobile Safari reflows pages slowly, so fix the height to avoid the need for reflows
			
			 li { list-style-type: disc; margin-left: 20px; }
			
			
			 })
			
			 */
			$.d().at({'data-bind': 'simpleGrid: gridViewModel'})
			$.bt('add item').at({'data-bind': 'click: addItem'})
			$.bt('sort by name').at({'data-bind': 'click: sortByName'})
			$.bt('   Jump to first page').at({
				'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
			})
			PagedGridModel = function (items) {
				this.items = $oa(items)
				this.addItem = function () {
					this.items.push({
						name: "New item", sales: 0, price: 100
					})
				}
				this.sortByName = function () {
					this.items.sort(function (a, b) {
						return a.name < b.name ? -1 : 1
					})
				}
				this.jumpToFirstPage = function () {
					this.gridViewModel.currentPageIndex(0)
				}
				this.gridViewModel = new ko.simpleGrid.viewModel({
					data: this.items,
					columns: [
						{headerText: "Item Name", rowText: "name"},
						{headerText: "Sales Count", rowText: "sales"},
						{
							headerText: "Price", rowText: function (item) {
							return "$" + item.price.toFixed(2)
						}
						}
					],
					pageSize: 4
				})
			}
			ok(
					new PagedGridModel(initialData)
			)
		}
	}
}
PAGEGRID = function () {
	$.x('r', 'page grid')//requires simple grid
//<div data-bind='simpleGrid: gridViewModel'> </div>
	$.d().b('simpleGrid', 'gridViewModel')
	$.bt('add').b$('addItem')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')
	PagedGridModel = {
		items: $oa(
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
				{hdrT: "Sales Count", rowText: "sales"}, {
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
//Knockout.JS Components     https://www.youtube.com/watch?v=UyQNARf2bQs
Gft = Gift = function (gifts) {
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
	var vm = this
	vm.gifts = $oA(gifts)
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
	vm.addGift = function () {
		vm.gifts.push({name: "", price: ""})
	}
	vm.removeGift = function (gift) {
		vm.gifts.remove(gift)
	}
	vm.save = function (form) {
		alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))
	}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
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
CUSTBDJ = function () {
	$.d('You have selected the option').b({
		slVs: 'wrap',
		slDur: 600
	})
	$.lb().A($.cbC('wrap'), 'Gift wrap')
	ok({wrap: $o(1)})
}
function task() {
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
}
function observableBindingPlugin() {
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
		})()
	}
	function ensureString(value) {
		return ((value === null) || (value === undefined)) ? value : value.toString();
	}
	
	URLBINDPLUGIN = function () {
// Prototype for an observable<->URL binding plugin.
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
		var currentParams = {}, updateTimer
		// Gives an address (URL) to a view model state
		ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
			// Gives an address (URL) to a view model state
// $.address.autoUpdate(false)
// Prototype for an observable<->URL binding plugin.
			observable.subscribe(function (value) {
				// When the observable changes, update the URL
				var valueToWrite = value === defaultValue ? null : ensureString(value);
				if (currentParams[hashPropertyName] !== valueToWrite) {
					currentParams[hashPropertyName] = valueToWrite;
					queueAction(function () {
						for (var key in currentParams)
							$.address.parameter(key, currentParams[key]);
						$.address.update();
					});
				}
			})
			// When the URL changes, update the observable
			$.address.change(function (evt) {
				// CAN'T FIND '$.address'	
				currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
				observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
			})
		}
		function queueAction(action) {
			if (updateTimer) {
				clearTimeout(updateTimer)
			}
			updateTimer = setTimeout(action, 0);
		}
		
		function something() {
			var currentParams = {}, updateTimer
			// $.address.autoUpdate(false)
		}
	}
}
 