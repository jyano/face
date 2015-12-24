//grid:
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
}
$.smEn = function (a) {
	return $.sm().bEn(a)
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
}
FLVIEWPLG = function () {
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
//requires simple grid
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
PAGEGRID = function () {
	$.x('r', 'page grid')
	//<div data-bind='simpleGrid: gridViewModel'> </div>
	$.d().b('simpleGrid', 'gridViewModel')
	$.bt('add').b$('addItem')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('sortbyn').b$(' sortByName')
	$.bt('Jump to first page').b('en',
			'gridViewModel.currentPageIndex')
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