function grid() {
	GRX = function () {
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
			this.items = ko.observableArray(items)
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
	GRX = function () {
		$.x('x', 'grx1')
		$.d([
			$.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
			$.bt('add item').at({'data-bind': 'click: addItem'}),
			$.bt('sort by name').at({'data-bind': 'click: sortByName'}),
			$.bt('   Jump to first page').at({
				'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
			})
		]).K('liveExample')
	}
}
GRX = function () {
	$.x('x', 'grx1')
	$.d([
		$.d().at({'data-bind': 'simpleGrid: gridViewModel'}),
		$.bt('add item').at({'data-bind': 'click: addItem'}),
		$.bt('sort by name').at({'data-bind': 'click: sortByName'}),
		$.bt('   Jump to first page').at({
			'data-bind': 'click: jumpToFirstPage, enable: gridViewModel.currentPageIndex'
		})
	]).K('liveExample')
}
 