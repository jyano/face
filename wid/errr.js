KOSCR = function () {
	$.A($.scrp('tt').A($.h1('afsdfds')),
			$.d().t$("{name:'tt'}"))
	// kob= ko.observable.prototype; kob.rm= kob.remove
	ok({})
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A($.d([$.ip().v$('title'), $.br(), $.ip().v$('content')]))
	ko.b({
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o(),
		templateToUse: function (i) {
			return i === vm.selectedArticle() ? 'edit' : vm.selectedView()
		}
	})
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')),
			t$("{name:'tt'}"));
	ok({})
//1 parameter: object that you want to use as the context for binding descendant elements.
//    If the expression you supply evaluates to null or undefined,
// descendant elements will not be bound at all,
// but will instead be removed from the document.
//    If the expression you supply involves any observable values,
// the expression will be re-evaluated whenever any of those observables change.
// Then, descendant elements will be cleared out,
// and a new copy of the markup will be added to your document and
// bound in the context of the new evaluation result.
//Note 1: Using “with” without a container element
//Just like other control flow elements such as if and foreach,
// you can use with without any container element to host it.
// This is useful if you need to use with in a place where
// it would not be legal to introduce a new container element just
// to hold the with binding.
//<ul>
//<li>Header element</li>
//<!-- ko with: outboundFlight -->
//...
//<!-- /ko -->
//<!-- ko with: inboundFlight -->
//...
//<!-- /ko -->
//</ul>
//The <!-- ko --> and <!-- /ko --> comments act as start/end markers, defining a “virtual element” that contains the markup inside. Knockout understands this virtual element syntax and binds as if you had a real container element.
	$.rb().at({name: 'choices', value: 'summary'}).ch$('ch', 'selectedView'), $.sp('summary')
	$.rb().at({name: 'choices', value: 'details'})
			.ch$('selectedView'), $.sp('details')
	$.d().t$("{name: templateToUse, foreach: articles }")
	script("summary").A(t$('title'))
	script('details')(
			_d()(
					h2().b('t', 'title'),
					pg().b('t', 'content'),
					bt('edit').b('$', '$parent.selectedArticle'))
	)
	script('edit')(
			_d()(ip().b('v', 'title'),
					br(),
					ip().b('v', 'content'))
	viewModel = {
		articles: [
			{id: 1, title: "Article One", content: "Content for article one."},
			{id: 2, title: "Article Two", content: "Content for article two."},
			{id: 3, title: "Article Three", content: "Content for article three."}
		],
		selectedView: ko.o("summary"),
		selectedArticle: ko.o()
	}
	viewModel.templateToUse = function (i) {
		return i === this.selectedArticle() ?
				'edit'
				: this.selectedView()
	}.bind(viewModel)
	ko.ab(viewModel)
}
KOGRID = function () {
	f = $.f().at({action: '/someServerSideHandler'})
	f.A(
			$.p(['You have asked for', $.sp('&nbsp;')])
					.t$('gifts().length', 'gift(s)'),
			$.t([$.tH($.tr([
				$.th('Gift name'), $.th('Price')
			])).vs$('gifts().length > 0'),
				$.TBd('gifts').A(
						$.tr([$.td().A($.ip().K('required').b({v: 'name', u: 1})),
							$.td($.ip().K('required number').b({v: 'price', u: 1})),
							$.td($.a('delete').b$('$root.removeGift'))])
				),
				$.bt$('addGift'),
				$.smEn('gifts().length > 0')
			])
	)
	f = $.f().at({action: '/someServerSideHandler'})
	f.A(
			$.p(['You have asked for', $.sp('&nbsp;')
					.bT('gifts().length'), 'gift(s)']),
			$.tVs('gifts().length > 0').A(
					$.tH().A($.tr().A(//tHR
							$.th().A('Gift name'),
							$.th().A('Price'))),
					$.tB().bE('gifts').A($.tr().A(  //tBR
							$.td(
									$.ip().K('required').b({v: 'name', u: 1})),
							$.td(
									$.ip().K('required number').b({v: 'price', u: 1})),
							$.td(
									$.a('delete').cl$('$root.removeGift'))))
			),
			$.bt('add gift').cl$('addGift'),
			$.sm().en$('gifts().length > 0'),
			$.p('You have asked for').A(
					t$('gifts().length'), 'gift(s)'),
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
								$.td(
										$.a('delete').b$('$root.removeGift')
								)
							]))
			),
			$.b$('addGift'), $.sm().en$('gifts().length > 0')
	)
	f.A([
		$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
		$.t().$vs('gifts().length > 0').A(
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
	ok(new Gift([
		{name: "Tall Hat", price: "39.95"}, {name: "Long Cloak", price: "120.00"}]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
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
PAGEGRID = REQUIRES_SIMPLE_GRID = function () {

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