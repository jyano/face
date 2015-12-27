 
TBE = function () {
	$.t([$.tH().A($.tr().A(
			$.th().A('First name'),
			$.th().A('Last name')
	)),
		$.tB().e$('people').A(
				$.tr().A($.td().t$('fn'),
						$.td().t$('ln')))])
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
TBTR = function () {
	bd.fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.td().t$('l')]))
	$.t().e$('peep').A(
			$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tr() [
					$.tr([$.td().t$('f'),
						', ', $.td().t$('l')])])
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
$Ul = function (bnd) {
	var g = G(arguments)
	var ul = $.ul().e$(bnd)
	_.e(A(g.s) ? g.s : g.r, function (q) {
		$.li().A(q).a2(ul)
	})
	return ul
}
 $Cb=function(bnd, tx){return $.sp().A($.lb((D(tx)?tx:bnd)+': '), ch$(bnd))}

ULI = SHOWTIME = ROOT = $$$TWOLAYERSDEEPNESTED$$$ = function () {
	

	 e$('peep').A(
	 
			 t$('n'), ' has ', t$('ch().length'), ' children',
				
			 cl$('A').mar(10),
			 
			 $Ul(
			 'ch',
			  t$(),
			  vs$('$root.showDT',
			  '(child rendered at ', 
			  t$('$Dt().getSeconds()'),
			   ')')
			   
			 ))
	
	$Cb('showDT', 'show time')  
	
	//anonymous vm
	ok({
		
		peep: Peep(),
	 showDT: $o(),
	  A: function () {
	  
	  }})

}



function alt() {
	KOCL = SHOWTIME = function () {
		$.ul().$('peep').A(
				$.li().A(
						$.d([
							$.sp().t$('n'), 'has',
							$.sp().t$('ch().length'),
							'children &nbsp;',
							$.a$('New', 'A')
						]),
						$.ul().e$('ch').A(
								$.li([
									$.sp().t$(), $.sp().vs$('$root.showDT').A(
											' (child rendered at ',
											$.sp().t$('$Dt().getSeconds()'),
											')'
									)]))))
		$.cb().ch$('showDT').a2($.lb('Show time:'))
		//anonymous vm
		OK({
			n: 'j',
			ch: Peep(),
			showDT: $o()
		})
	}
}
ULE = function () {
	$.ul().e$('PL').A(
			$.li().A(
					$.sp('Planet: '), $.b().t$('n'),
					$.d().t$('cap.n')))
	ok({
		PL: $oA([
			{n: 'Merc', cap: {n: 'afsdfads'}},
			{n: 'Earth', cap: {n: 'Barn'}},
			{n: 'Uranus', cap: {n: 5}}
		])
	})
}

ULROOT = function () {

	$.ul().e$('fs').A([ 
			
	$.li().b({t: '$data', sl: '{selected: $data==$root.chFI()}', cl: '$root.gtf'})
	]).K('fs')
	
	//$.ul().K('fs').e$("fs").A($.li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf"))
	
	MVM = function () {
		var vm = {
			selected:$(),
			fs: ['I', 'A', 'Se', 'Sp'],
			chFI: $o()
		}
		vm.gtf = function (f) {
			vm.chFI(f)
		}
		
		return vm
	}
	ok(MVM())
}
SEL = CUNTS = function (n, v) {
	$.sl().o$('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
SEL1 = SELPUSH = CHERRY = function () {
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).vs$('wants')
	_.in(function () {
		vm.flav.push("glut")
	})
	ok({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
SELMULTI = SLM = function () {

	$.p('Where you want to go?', $.sl().at({
	size: 5, multiple: true}).b({
		o: 'available', sO: 'chosen'
	}))
	ok({
		available: $oa(['France', 'Germany', 'Spain']),
		chosen: $oa(['Germany'])
	})
	
	_.in(function () {
		vm.chosen.push('France')
	})
}
KOS = function () {
	_$({
		c: 'v',
		t: 'css example.. will i use it?',
		vm: vm = {n: $o(1)},
		A: $.d(['info']).b("style: {color: n()<0?'red':'black'}")
	})
	_.in(function () {
		vm.n(-5)
	})
}
K5 = BSTY = function () {
	$s({
		bd: {fS: 100, C: 'p'},
		_profWarn: {C: 'r', c: 'b'},
		_profPos: {C: 'b', c: 'r'}
	})
	d = $.d(['Prof Info'])
	str = "{ color: curProf() < 0 ? 'red' : 'black', padding: curProf() < 0 ? '20px' : '200px'}"
	d.b({y: str})
	vm = {curProf: $o(150000)}
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
K6 = BCSS = function () {
	$s({
		_profWarn: {C: 'r', c: 'b'}, _profPos: {C: 'b', c: 'r'}
	})
	$.d(['Prof Info']).fS(40).b({s: 'profSts'})
	vm = {
		curProf: $o(150000)
	}
	vm.profSts = ko.pureComputed(function () {
		var res = this.curProf() < 0 ? "profWarn" : "profPos"
		return res
	}, vm)
	ok(vm)
	_.in(2, function () {
		// Causes the "profitPositive" class to be removed
		// and "profitWarning" class to be added
		vm.curProf(-50)
	})
}
GIFT = CUSTBDJ = function () {
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
	$.d('You have selected the option').b({
		slVs: 'wrap',
		slDur: 600
	})
	$.lb().A($.cbC('wrap'), 'Gift wrap')
	ok({wrap: $o(1)})
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
AC0 = ARICLE = KOC1 = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView')
	$.sp('summary')
	$.ip('r').at({
		name: 'choices',
		value: 'details'
	}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
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
}
AC1 = KOOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).ch$('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'),
				$.br(), $.ip().v$('content')])
	)
	ok({
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
}//broken select and inputs
AC2 = KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).ch$('selectedView');
	$.sp('details')
	$.hr()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().t$('title')),
			$.scrp('details').A(
					$.d([$.h2().t$('title'), $.p().t$('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().v$('title'), $.br(), $.ip().v$('content')])
	)
	ok({
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
}
BDSMPGRD = SIMPLEGRIDPLUGIN = function () {
	
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
		return cols
	}
} 