function lat() {
	$(function () {
		bd = $('body')
	})
	C$$ = function (Md, ob) {
		if (S(ob)) {
			ob = {url: ob}
		}
		ob = ob || {}
		ob.md = ob.model = Md
		return C$(ob)
	}
	M$ = {}
	M$.D = function (df, ob1) {
		var ob = {D: df}
		return M$(_.x(ob, ob1 || {}))
	}
	function about() {
//  meb
//https://www.youtube.com/watch?v=a-ijUKVIJSw
//VIDEO ONE
// start 7:00
// div .container wraps all
//----- h1 in div
//------ add a table
//--thead ---tr ---th's title user url action
//--tbod? (in vid2)
//each 'blogRoll' is a tr
//inject trs into tbody
//9:15 MAKES BLOG MODEL
//defaults all: ''
//10:05 tests model
//11:30 makes blogs collection
//////////////////////////////////////////////////////
//VIDEO two:
//2:00 makes indiv blog model view
//8:00 starts on BlogsView with init fn, on 'add'
//8:40 makes render fn, empty $el, then each(this.model.toArray) <- blogs
// for each do what? append a rendred view el (of it)
//11:00
// make new row in thead (tbody is for blog views (blogs))..
// put 3 inputs, 1 bt.. in td's in the new tr
//12:30 make ADD functionality
// var blog = new Blog({**data from ip fields**)
//13:30 console log test
//14:20 
// blogs.add(blog)
//14:45 instantiate new BlogsView AND DONE (he fixes errors; you not :))
//////////////////////////////
//VIDEO FOUR:
// 0:40 INSTALL NODE
// 1:10 INSTALL EXPRESS (AFTER CREATING PACKAGE.JS FILE)
// 2:50 MAKES A SERVER.JS FILE AND GOES INTO IT...
// 3:10 makes express server 
// 3:40 static files ('/public')
// 4:40 actually makes the 'public' directory and moves his files into it (index.html, scripts.js)
// then makes a js folder, and puts his scripts folder in THAT
// then changes the path of that file in his index.html file
// 6:15.. finally, he tests just the originally functionallity working on local host
// 7:00 SETUP MONGO
// talks about /data/db and file permissions
// 8:50 makes shortcuts with alias in separate file ..  and shows how!!!!
// 9:30 runs mongod
//  10:00 instals mongoose finally
// 11:00 REAL START? connects to mongoose
// monodb://localhost/blogroll
// ** creates db automatically and collection too
// 11:45 FINALLY MAKES THE BLOG SCHEMA
// 12:30  FINALLY MAKES THE BLOG MODEL 
//12:50 TEST IT OUT  makes new blog and calls SAVE
//uses 'mongo' to check test in terminal
//VIDEO FIVE:
// 3:50 switches finally to server side code
	}
	
 $.td = {}
	$.td.A = function () {
		var td = $.td()
		var g = G(arguments)
		_.e(g, function (q) {
			td.A(q)
		})
		return td
	}
	$.bt = {}
	$.bt.K = function () {
		var g = G(arguments)
		var bt = $.bt.apply(null, g.r)
		bt.K(g.f)
		return bt
	}
 
	JQ7 = COOLSEL = function () {
		$.x()
		// rather than worry about synchronization between each panel
		//we will take last li in ul.k(panels) and position it to top right
		//of ul - this way,  when he sum width of all the panels occasionally
		//adds to greater than 100 percent of the ul as they animate..
		//the last li never breaks to the next line
		$.coolSelector = function () {
			var s = 200
			d = $.dK('container').A(
					$.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
					$.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
			).A()
			$('span').css({width: '100px', fontSize: '40px'})
			if ($('div.panels').length) {
				$('div.panels span:last-child').K('last')
				$('div.panels span').hv(
						function () {
							$(this).st().an({width: '110px', fontSize: '50px'}, s)
									.sib('span').st().an({width: '90px', fontSize: '30px'})
						},
						function () {
							$(this).st().an({width: '90px', fontSize: '30px'})
						})
			}
		}
		$.coolSelector()
	}
	JQ9 = COLANIM = function () {
		COLANIM = function () {
			$.x()
			$CSS(
					{
						$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
					}
			)
			$.d(['color anims']).id('el')
			$.bt('anim cols').id('tog')
			$('#tog').$(
					function () {
						$("#el").an({c: 'g', C: "rgb(20,20,20)"})
					}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
			
			 The following properties are supported:
			
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
			
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
			
			 link
			 */
		}
		$.x()
		$CSS({
			$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
		})
		$.d(['color anims']).id('el')
		$.bt('anim cols').id('tog')
		$('#tog').$(function () {
			$("#el").an({c: 'g', C: "rgb(20,20,20)"})
		})
		/*
		 Color Animation
		 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
		 The following properties are supported:
		
		 backgroundColor
		 borderBottomColor
		 borderLeftColor
		 borderRightColor
		 borderTopColor
		 color
		 columnRuleColor
		 outlineColor
		 textDecorationColor
		 textEmphasisColor
		 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
		
		 Class Animations
		 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
		
		 link
		 */
	}
	SS17 = FL4 = GME = LOGCLASS = function () {
		$.hdr().A(
				'Click', $.br(), 'to change', $.br(),
				'header {column-…}'
		)
		$.ac().A('Click', $.br(), 'to', $.br(),
				'change', $.br(), 'body {display: …}')
		$.ftr().A()
		$("header").$(function () {
			$(this).toggleClass("ct");
			logClass()
		})
		$("article").$(function () {
			$.bd().toggleClass("box");
			logClass()
		})
		$s({
			'html, body': {w: '100%', h: '100%', M: 0, P: 0},
			'body.box': {d: $, flD: 'column'},
			'body > *': {P: '.5em'},
			header: {C: 'b'},
			article: {C: 'r', $: 1},
			footer: {C: 'g'},
			'header.cnt': {'-moz-column-count': 3},
			'header:not(.cnt)': {'-moz-column-width': 100}
		})
		logClass()
		function logClass() {
			var logTxt = "Header: "
			if ($("header").hasClass("cnt")) {
				logTxt += "column-count"
			} else {
				logTxt += "column-width"
			}
			logTxt += "; Body: ";
			if ($("body").hasClass("box")) {
				logTxt += "flex-box"
			}
			else {
				logTxt += "block"
			}
			$("footer").text(logTxt)
		}
	}
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
	JQ11 = QUU = function () {
		QUU = function () {
			$.x('x', 'quu')
			//  Qu   allow series fns to be execd asynch on an el
			//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
			//
			// which levgs qus to build up   series of steps
			// that will transtn  1+ CSS vals thru/out the dur
			//  can pass a cb fn to  .an()  to exec on done
			x = $('.x')
			x.an(
					{height: 20}, "slow",
					function () {
						$("#title").html("in cb")
					}
			)
			//   *Ques As Cbs
			// Instead of passing a cb as an argument,
			// we can add another function to the queue
			// that will act as our cb
			// This will execute
			// after all of the steps in the
			// anim  have completed.
			x.an(
					{height: 20},
					"slow"
			).qu(
					function () {
						$("#title").h("in anim")
						$(this).dq()
					}
			)
				//  tells jQ  to continto N-item in  que
				//    queued fn will exec   after the anim
				//  jQuery does not have any insight into
				// how the queue items function,
				// so we need to call .dequeue(),
				// which tells jQuery when to move to the n item in the queue.
				//  Another way of dequeuing
				// is by calling the fn that is passed to your cb
				// That fn will auto  call .dq() for you
					.qu(
					function (n) {
						$l("I fired!");
						n()
					}
			)
			//  *Custom Queues
			// Up to this point all of our anim
			// and qu   ex  have been using the def qu  n  which is fx.
			// Elements can have multiple queues
			// attached to them,
			// and we can give each of these qusa dif  name.
			// We can specify a custom queue name as
			// the 1st arg  to the .qu() method.
			x.qu(
					'an', function (n) {
						$l("Step 1");
						n()
					}
			).qu(
					'an', function (n) {
						$l("Step 2");
						n()
					}
			).dq('an');
			//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
			//   Clearing The Que
			//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
			x.qu(
					'an', function (n) {
						$l("nev log (qu clrd)");
						n()
					}
			)
					.clrQ('an').dq('an')
			//   In this example, nothing will happen as we removed everything from the steps queue.
			//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
			//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
			x.qu(
					'an',
					function (n) {
						$l("nev fire (qu replaced)");
						n()
					}
			)
					.qu(
					'an', [
						function (n) {
							$l("fired!");
							n()
						}
					]
			).dq('an')
			//
			// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
			x.qu(
					'an', function (n) {
						$l("fired!");
						n()
					}
			)
			$l(x.qu('an'))
			x.du('an') //?
		}
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		x = $('.x')
		x.an({height: 20}, "slow",
				function () {
					$("#title").html("in cb")
				})
		//   *Ques As Cbs
		// Instead of passing a cb as an argument,
		// we can add another function to the queue
		// that will act as our cb
		// This will execute
		// after all of the steps in the
		// anim  have completed.
		x.an(
				{height: 20},
				"slow").qu(function () {
					$("#title").h("in anim")
					$(this).dq()
				})
			//  tells jQ  to continto N-item in  que
			//    queued fn will exec   after the anim
			//  jQuery does not have any insight into
			// how the queue items function,
			// so we need to call .dequeue(),
			// which tells jQuery when to move to the n item in the queue.
			//  Another way of dequeuing
			// is by calling the fn that is passed to your cb
			// That fn will auto  call .dq() for you
				.qu(function (n) {
					$l("I fired!");
					n()
				})
		//  *Custom Queues
		// Up to this point all of our anim
		// and qu   ex  have been using the def qu  n  which is fx.
		// Elements can have multiple queues
		// attached to them,
		// and we can give each of these qusa dif  name.
		// We can specify a custom queue name as
		// the 1st arg  to the .qu() method.
		x.qu('an', function (n) {
			$l("Step 1");
			n()
		}).qu('an', function (n) {
			$l("Step 2");
			n()
		}).dq('an');
		//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
		//   Clearing The Que
		//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
		x.qu('an', function (n) {
			$l("nev log (qu clrd)");
			n()
		})
				.clrQ('an').dq('an')
		//   In this example, nothing will happen as we removed everything from the steps queue.
		//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
		//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
		x.qu(
				'an',
				function (n) {
					$l("nev fire (qu replaced)");
					n()
				})
				.qu(
				'an', [
					function (n) {
						$l("fired!");
						n()
					}
				]).dq('an')
		//
		// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
		x.qu('an', function (n) {
			$l("fired!");
			n()
		})
		$l(x.qu('an'))
		x.du('an')
	}
	JQ12 = ANF = function () {
		ANF = function () {
			z()
			a = $.dA().bgI('chicks').anf()
			anim = function (o) {
				o = o || {};
				return {
					u: o.u || 'chicks',
					n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
				}
			}
			an = function (q, a) {
				if (q.han) {
					_.cI(q.han)
				}
				if (a.u) {
					q.bi(a.u)
				}
				if (a.n > 1) {
					q.han = _.sI(
							function () {
								a.c++;
								if (!a.l && a.c > a.n) {
									_.cI(q.han);
									q.han = false
								}
								else {
									a.c %= a.n
								}
								q.sFr(a)
							}, a.r
					)
				}
			}
		}//call stack
		z()
		a = $.dA().bgI('chicks').anf()
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(function () {
					a.c++;
					if (!a.l && a.c > a.n) {
						_.cI(q.han);
						q.han = false
					}
					else {
						a.c %= a.n
					}
					q.sFr(a)
				}, a.r)
			}
		}
	}
	JQ123 = JQANIMZ = function () {
		JQANIMZ = function () {
			$.x('s', 'jqanim')
			/*
			 setBackgroundImage = q.bi = function(url){//set background image
			 var toUrl =function(url){
			 return 'url("'+ src(url) +'")'}
			 q.backgroundImage(toUrl(url))
			 return q}
			
			 bp=q.positionBackgroundImage=function(x,y){
			 var g=G(arguments),x=g[0],y=g[1]
			 x=N(x)?x:0
			 y=N(y)?y:0
			 q.css({backgroundPos:x+'px '+y+'px'})
			 return q}
			 fr=q.stFr=function(n,w){
			 if(O(n)){q.bp(n.n,n.w)}
			 else{q.bp(n*w)}
			 return q}
			
			 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
			 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
			
			 a= $.dA().bgImg('chicks').anf()
			
			 */
		}
		$.x('s', 'jqanim')
		/*
		 setBackgroundImage = q.bi = function(url){//set background image
		 var toUrl =function(url){
		 return 'url("'+ src(url) +'")'}
		 q.backgroundImage(toUrl(url))
		 return q}
		
		 bp=q.positionBackgroundImage=function(x,y){
		 var g=G(arguments),x=g[0],y=g[1]
		 x=N(x)?x:0
		 y=N(y)?y:0
		 q.css({backgroundPos:x+'px '+y+'px'})
		 return q}
		 fr=q.stFr=function(n,w){
		 if(O(n)){q.bp(n.n,n.w)}
		 else{q.bp(n*w)}
		 return q}
		
		 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
		 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
		
		 a= $.dA().bgImg('chicks').anf()
		
		 */
	}
	JQ14 = LETTERING = function () {
		z()
		LETTERINGPLUG = function () {
			function injector(t, splitter, klass, after) {
				var text = t.text()
						, a = text.split(splitter)
						, inject = '';
				if (a.length) {
					$(a).each(function (i, item) {
						inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
					});
					t.attr('aria-label', text)
							.empty()
							.append(inject)
				}
			}
			
			var methods = {
				init: function () {
					return this.each(function () {
						injector($(this), '', 'char', '');
					});
				},
				words: function () {
					return this.each(function () {
						injector($(this), ' ', 'word', ' ');
					});
				},
				lines: function () {
					return this.each(function () {
						var r = "eefec303079ad17405c889e092e105b0";
						// Because it's hard to split a <br/> tag consistently across browsers,
						// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
						// (of the word "split").  If you're trying to use this plugin on that
						// md5 hash string, it will fail because you're being ridiculous.
						injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
					});
				}
			};
			$.fn.lettering = function (method) {
				// Method calling logic
				if (method && methods[method]) {
					return methods[method].apply(this, [].slice.call(arguments, 1));
				} else if (method === 'letters' || !method) {
					return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
				}
				$.error('Method ' + method + ' does not exist on jQuery.lettering');
				return this;
			};
		};
		LETTERINGPLUG()
		span = $.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	JQ15 = FALLING = function () {
		FALLING = function () {
			z();
			//this goes in css
			$header2 = $.sp('hello').A();
			$header2.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans = $header2.fi('span');
			delay = 0;
			$header2.$(
					function () {
						$spans.e(
								function () {
									$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
									delay += 0.1
								}
						);
						$header2.K('dropped'); // Add "dropped" class to header to apply transition
						setTimeout(
								function () { // reset header code
									$spans.e(
											function () {
												$(this).css({transitionDelay: '0ms'})
											}
									);
									// set transition delay to 0 so when 'dropped' class is removed,
									// letter appears instantly
									$header2.removeClass('dropped'); // remove class at the "end" to reset header.
									delay = 0
								}, 1800
						); // 1800 is just rough estimate of time transition will finish, not the best way
					}
			)
		}
		z()
		//this goes in css
		$header2 = $.span('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	EF1 = COLORANIM = CANIM = function () {
		function alt() {
			JU1 = COLORANIM = CANIM = function () {
				$.x()
				$CSS(
						{
							$el: {
								C: '#aaa', c: '#006', fZ: 25,
								tA: 'c', P: '1em'
							}
						}
				)
				$.d().id('el').A('-color anim-')
				$.bt('anim!', function () {
							$("#el").an({
								c: 'g',
								C: "rgb(20,20,20)"
							})
						}
				)
				/*
				 Color Animation
				 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
				 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
				
				 The following properties are supported:
				
				 backgroundColor
				 borderBottomColor
				 borderLeftColor
				 borderRightColor
				 borderTopColor
				 color
				 columnRuleColor
				 outlineColor
				 textDecorationColor
				 textEmphasisColor
				 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
				 Class Animations
				 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
				
				 link
				 */
			}
		}
		
		$.x()
		$CSS(
				{
					$el: {
						C: '#aaa', c: '#006', fZ: 25,
						tA: 'c', P: '1em'
					}
				}
		)
		$.d().id('el').A('-color anim-')
		$.bt('anim!', function () {
					$("#el").an({
						c: 'g',
						C: "rgb(20,20,20)"
					})
				}
		)
		/*
		 Color Animation
		 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), 
		 hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
		 The following properties are supported:
		
		 backgroundColor
		 borderBottomColor
		 borderLeftColor
		 borderRightColor
		 borderTopColor
		 color
		 columnRuleColor
		 outlineColor
		 textDecorationColor
		 textEmphasisColor
		 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
		 Class Animations
		 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
		
		 link
		 */
	}
	JQ16 = TXPLUG = function () {
		z();
		d = $.d('r', 100).A('abc');
		e = $.d(100).col('r').A('abc');
		f = $.d('r', 100).col('b').A('abc');
		g = $.d('b', 500, 500)
	}
	SS21 = MED = function () {
		str1 = above(960, "{ body {color:blue;}  }")
		str2 = between(600, 960, " {body{color:red;}}") +
		below(600, " {body{color:green;}}")
		//{@media all and (min-width: 960px) { body {color:blue;}  }: "@media all and (max-width: 960px)  and (min-width:… all and (max-width: 600px)  {body{color:green;}}"}
		$s(Ob(str1, str2))
		$.sp().A('span')
		$.h1().A('h1')
	}
	EDITDIV = function () {
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}
	JQ5 = NOTANIM = function () {
		$.x()
		var s = 1000, m = function (n) {
					return {marginLeft: n}
				},
				n = 0;
		d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
		d2 = $.d().id('debug');
		$('#test').$(function () {
			$.notAn($('.box')).an({marginLeft: -10}, s,
					function () {
						$('#debug').A($.p('start..' + n++))
					})
					.an({marginLeft: 10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: 10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: 0}, s,
					function () {
						$('#debug').A($.p('fin'))
					})
		})
	}
	JQ6 = ANL = ANIMLOOP = function () {
		$.fn.anL = function () {
			var q = this
			this.sh("slow")
			this.an({"marginLeft": "300px"}, 2000)
					.an({"marginLeft": "0px"}, 2000)
			this.hd("slow", function () {
				q.anL()
			})
		}
		$.d('b', 100, 300).anL()
	}
	BB18 = FLCL = FILTERCOLLECTION = function () {

//$.x('r', 'filtering a cl:')
		FlV = Bb.V.x({
			ev: {'click #run': 'runFilter'},
			runFilter: function (e) {
				e.pD();
				this.fl = {
					// ... get the filter info from the DOM
				};
				this.rr()
			},
			rr: function () {// get the filtered list from the collection
				// iterate over the filtered list and render the results in to the html array
				// populate the DOM with the resulting HTML
				HT = []
				_.e(this.cl.where(this.fl),
						function (item) {
							HT.push(
									_.tp($('my-item-template').H())(item.tJ())
							)
						})
				this.$el.html(HT);
				return this
			}
		})
		///
		Cl = _C({
			i: function () {
			}
		})
		cl = Cl({})
		cl.add([
			{a: 'f', b: 's'},
			{a: 't', b: 's'},
			{a: 'f', b: 's'},
			{a: 's', b: 't'}
		])
		res = cl.where({a: 'f', b: 's'})
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	function server() {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		AVAILSRV = function () {

//  avs=Ap.C.Avails()
			//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
			$.ip('new avail').id('newAvail').A()
			$.bt('ok', function () {
				Ap.M.Avail({
					c: $('#newAvail').v()
				}).save()
				v.render()
			}).A()
			$.dI('availsDiv')
			$.ip('new avail').id('newAvail').A()
			$.bt('ok', function () {
				var m = Ap.M.Avail({
					c: qiv('newAvail')
				})
				m.save()
				m.on('destroy', function () {
					alert('i am the model and i was destroyed')
				})
				v.render()
			})
			$.dI('availsDiv')
			bb.M.e({
				d: {prop: 3},
				test: function () {
					$(this.get('prop'))
				},
				test2: function (a) {
					$l('prop: ' + this.get('prop'))
				},
				happy: function (a) {
					this.test2(a)
				}
			})
			avs = Ap.C.Avails.o()
			avs.on('destroy', function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
			v = Ap.V.Avails.o({cl: avs})
			v.on('modelDeleted', function () {
				alert('modDel')
			})
			bb.M.e({
				d: {prop: 3},
				test: function () {
					$(this.get('prop'))
				},
				test2: function (a) {
					$l('prop: ' + this.get('prop'))
				},
				happy: function (a) {
					this.test2(a)
				}
			})
		}
		Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.V.Avail = bb.V.e({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = bb.V.e({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
	}
	
	_VIEWS = function () {
		Ap.V.Avail = Bb.V.x({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = Bb.V.x({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
	}
	_COMMON = function () {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		_VIEWS()
	}
	$AVA$ = AVAILCOMMON = function () {
		_COMMON()
//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = new Ap.M.Avail({
				collection: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = V$({
			R: function () {
				this.q(Ap.T.Avail(this.model))
				return this
			},
			E: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				$(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = V$({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = new Ap.C.Avails
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = new Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
	AVAIL2 = function () {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({c: qiv('newAvail')}).save()
			v.render()
		})
		$.d().id('availsDiv')
		Ap.T.Avail = function (model) {
			return $._d().W(400).H(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = _M({urlRoot: '/avail'})
		Ap.C.Avails = _C({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = _V({
			R: function () {
				this.$el.append(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).at('contenteditable', 'false')
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').ed(1)
			}
		})
		Ap.V.Avails = _V({
			el: '#availsDiv',
			I: function () {
				this.ren()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.append("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.append(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		v = Ap.V.Avails({collection: avs})//.render()
		avs.on('destroy', function (aa) {
			$l('destroy!!!!')
		})
	}
	function boneSetup() {
		Ap.M.Avail = $$M({urlRoot: '/avail'})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.V.Avail = $$V({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
	}
	
	AVAIL4 = function () {
		tx('new avail').id('newAvail').a()
		bt('ok', function () {
			Ap.M.Avail({c: qiv('newAvail')}).save()
			v.render()
		}).a()
		di('availsDiv').a()
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.$el.append(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).at('contenteditable', 'false')
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.append("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.append(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		v = Ap.V.Avails({collection: avs})//.render()
		avs.on('destroy', function (aa) {
			$l('destroy!!!!')
		})
	}
	AVAIL5 = function () {
		tx('new avail').id('newAvail').a()
		bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).a()
		di('availsDiv').a()
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.q(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).cE(1)
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q(h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails()
		avs.on('destroy',
				function (j) {
					alert('i am col and i was destroyed')
					v.trigger('modelDeleted')
				})
		v = Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		a = bbM({
			defaults: {prop: 3},
			test: function () {
				console.log(this.get('prop'))
			},
			test2: function (a) {
				console.log(
						(function () {
							return this.get('prop')
						})()
				)
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		f = a()
	}
	AVAIL = function () {
		f = $M({
			defaults: {prop: 3},
			test: function () {
				$l(this.get('prop'))
			},
			test2: function (a) {
				var prop = this.get('prop')
				$l('prop: ' + prop)
				return prop
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		boneSetup()
		avs = Ap.C.Avails()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		Ap.V.Avails = $$V({
			el: '#availsDiv',
			i: function () {
				this.r()
			},
			r: function () {
				var t = this;
				t.collection.fetch({
					success: function () {
						t.q.H('');// t.$el.html('')
						t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
					}
				})
			}
		})
		v = Ap.V.Avails({
			collection: avs
		})//.render()
		//v=Ap.V.Avails({cl:avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).A()
		$.dI('availsDiv')
	}
	function setup() {
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return _d().w(400).h(100).M(20).c('g')(
					h4(model.g('c')).id('avail').c('y', 'r'),
					br(), sp('delete').id('deleteAvail'),
					sp(' '), sp('edit').id('editAvail'),
					sp(' '), cb2().id('selAvail')).q
		}
		Ap.M.Avail = bbM({urlRoot: '/avail'})
		Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bbV({
			R: function () {
				this.q(Ap.T.Avail(this.model))
				return this
			},
			events: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				qq(this.$el.find('#avail')).cE(1)
			}
		})
		Ap.V.Avails = bbV({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q(h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bb.V.e({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = bb.V.e({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		Ap.M.Avail = $$M({urlRoot: '/avail'})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.V.Avail = $$V({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avails = $$V({
			el: '#availsDiv',
			i: function () {
				this.r()
			},
			r: function () {
				var t = this;
				t.collection.fetch({
					success: function () {
						t.q.H('');// t.$el.html('')
						t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
					}
				})
			}
		})
	}
	
	function status() {
		f = $M({
			defaults: {prop: 3},
			test: function () {
				$l(this.get('prop'))
			},
			test2: function (a) {
				var prop = this.get('prop')
				$l('prop: ' + prop)
				return prop
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		v = Ap.V.Avails({
			collection: avs
		})//.render()
//v=Ap.V.Avails({cl:avs})
		v.on('modelDeleted',
				function () {
					alert('modDel')
				})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).A()
		$.dI('availsDiv')
//  avs=Ap.C.Avails()
//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).a()
		v = Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		a = bbM({
			defaults: {prop: 3},
			test: function () {
				console.log(this.get('prop'))
			},
			test2: function (a) {
				console.log(
						(function () {
							return this.get('prop')
						})()
				)
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		f = a()
		di('availsDiv').a()
		avs = Ap.C.Avails()
		avs.on('destroy',
				function (j) {
					alert('i am col and i was destroyed')
					v.trigger('modelDeleted')
				})
		v = Ap.V.Avails({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		a = bbM({
			defaults: {prop: 3},
			test: function () {
				console.log(this.get('prop'))
			},
			test2: function (a) {
				console.log(
						(function () {
							return this.get('prop')
						})()
				)
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		f = a()
		AVAILold = function () {
			tx('new avail').id('newAvail').a()
			bt('ok', function () {
				var m = Ap.M.Avail({
					c: qiv('newAvail')
				})
				m.save()
				m.on('destroy', function () {
					alert('i am the model and i was destroyed')
				})
				v.render()
			}).a()
			di('availsDiv').a()
			Ap = {M: {}, C: {}, V: {}, T: {}}
			Ap.T.Avail = function (model) {
				return _d().w(400).h(100).M(20).c('g')(
						h4(model.g('c')).id('avail').c('y', 'r'),
						br(), sp('delete').id('deleteAvail'),
						sp(' '), sp('edit').id('editAvail'),
						sp(' '), cb2().id('selAvail')).q
			}
			Ap.M.Avail = bbM({urlRoot: '/avail'})
			Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
			Ap.V.Avail = bbV({
				R: function () {
					this.q(Ap.T.Avail(this.model))
					return this
				},
				events: {
					'click #deleteAvail': 'deleteAvail',
					'click #editAvail': 'editAvail',
					'blur #avail': 'changeAvail'
				},
				changeAvail: function () {
					qq(this.$el.find('#avail')).cE(0)
					var newAvail = this.$el.find('#avail').text()
					this.model.s('c', newAvail)
					this.model.save()
				},
				deleteAvail: function () {
					this.model.destroy()
					this.$el.remove()
				},
				editAvail: function () {
					qq(this.$el.find('#avail')).cE(1)
				}
			})
			Ap.V.Avails = bbV({
				el: '#availsDiv',
				I: function () {
					this.render()
				},
				R: function () {
					var t = this
					t.collection.fetch({
						success: function () {
							t.q.H('')
							t.q(h1('Avails List'))
							t.e(
									function (m) {
										t.q(
												Ap.V.Avail({m: m}).r().el)
										return t
									}, t)
						}
					})
				}
			})
			avs = Ap.C.Avails()
			avs.on('destroy',
					function (j) {
						alert('i am col and i was destroyed')
						v.trigger('modelDeleted')
					})
			v = Ap.V.Avails({cl: avs})
			v.on('modelDeleted', function () {
				alert('modDel')
			})
			a = bbM({
				defaults: {prop: 3},
				test: function () {
					console.log(this.get('prop'))
				},
				test2: function (a) {
					console.log(
							(function () {
								return this.get('prop')
							})()
					)
				},
				happy: function (a) {
					this.test2(a)
				}
			})
			f = a()
		}
		v = Ap.V.Avails({
			collection: avs
		})//.render()
//v=Ap.V.Avails({cl:avs})
		v.on('modelDeleted',
				function () {
					alert('modDel')
				})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		avs = Ap.C.Avails()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
	}
 
	$Ul = function (bnd) {
		var g = G(arguments)
		var ul = $.ul().e$(bnd)
		_.e(A(g.s) ? g.s : g.r, function (q) {
			$.li().A(q).a2(ul)
		})
		return ul
	}
	$Cb = function (bnd, tx) {
		return $.sp().A($.lb((D(tx) ? tx : bnd) + ': '), ch$(bnd))
	}
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
			}
		})
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
				selected: $(),
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
			size: 5, multiple: true
		}).b({
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
	$.fn.cm$ = function (bnd) {
		return this.b('component', bnd)
	}
	cm$ = function (name, params) {
		//= ko._
		var ob2s = function (ob) {
			ob = ob || {};
			var o = []
			_.e(ob, function (v, k) {
				o.push(k + ':"' + v + '"')
			})
			return o.join()
		}
		var _params = function (n, pam) {
			return $('<' + n + ' params = ' + (pam || '') + ' >')
		}
		if (name) {
			var q = $('<' + name + '>').A()
			if (params) {
				if (O(params)) {
					params = (   ob2s(params) )
				}
				q.at('params', params)
			}
			return q
		}
	}
	$rg = function (name, ob) {
		var $tpEl = function () {
			var g = G(arguments)
			var $q = $.sp().rm()
			_.e(g.A ? g.f : g, function (q) {
				$q.A(q)
			})
			return {element: $q[0]}
		}
		ob = ob || {}
		ob.viewModel = ob.viewModel || ob.vM
		ob.template = ob.template || ob.tp
		ob.template = $tpEl((ob.template))
		return ko.cm.rg(name, ob)
	}
	REG = function () {
		$s({i: {w: 40, h: 40}})
		$rg('test', {
			vM: function (pm) {
				this.text = $o(pm.name, 'default')
			},
			tp: $.d(['hello, ', t$('text'), ' ! ', $.i('me')])
		})
		cm$('test')
		cm$('test', {name: "tesfadsafdst"})
		ok({})
	}
	EXA = function () {
		$.mar()
		$rg('editor', {
			vM: function (pm) {
				this.text = $o(pm.initText, '')
			},
			tp: ['Message: ', v$('text'),
				'[', 'length:', t$('text().length'),
				']']
		})
		$.h4('First instance, without parameters')
		cm$('editor')
		$.h4('Second instance, passing parameters')
		cm$('editor', {initText: "Heldflo, world!"})
		ok({})
	}
	LIKE = function () {
		$.mar(10)
		function Product(name, rating) {
			this.name = name;
			this.userRating = ko.observable(rating || null);
		}
		
		$rg('like', {
			vM: function (params) {
				// Data: value is either null, 'like', or 'dislike'
				this.chosenValue = params.value;
				// Behaviors
				this.like = function () {
					this.chosenValue('like')
				}.bind(this)
				this.dislike = function () {
					this.chosenValue('dislike')
				}.bind(this);
			},
			tp: $.d().A(
					vs$('!chosenValue()').A(
							cl$('like'),
							cl$('dislike')).K("like-or-dislike"),
					vs$('chosenValue').A('You ', t$('chosenValue'), ' it').K('result')
			).bor('4px solid yellow')
		})
		e$('products', $.d().A(
				t$('name'),
				cm$('like', 'value:userRating')
		).C('g'))
		ok({
					products: [
						new Product('Garlic bread'),
						new Product('Pain au chocolat'),
						new Product('Seagull spaghetti', 'like') // This one was already 'liked'
					]
				}
		)
	}
} 
function filteredCol() {
	// collections:
	FLCL004 = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = Bb.V.e({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		 this.$el.html(HT); return this }
		 })*/
		Cl = C$({
			I: function () {
			}
		})
		cl = new Cl({})
		/*
		 cl.add([{a: 'f', b: 's'},
		 {a: 't', b: 's'},
		 {a:'f', b: 's'},
		 {a: 's', b:'t'}
		 ])
		
		
		 res = cl.where({a:'f',b:'s'})
		 */
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	FLCL0 = function () {
		$.x('r', 'filtering a cl, but tp missing?!')
		// ... get the filter info from the DOM
		// get the filtered list from the collection
		// iterate over the filtered list and render the results in to the html array
		// populate the DOM with the resulting HTML
		FlV = $V({
			ev: {'click #run': 'runFilter'},
			runFilter: function (e) {
				e.pD();
				this.fl = {};
				this.r()
			},
			r: function () {
				HT = [];
				_.e(this.cl.where(this.fl),
						function (item) {
							HT.push(_.tp($('my-item-template').H())(item.tJ()))
						})
				this.q.h(HT);
				return this
			}
		})
		Cl = $$C({
			i: function () {
				$l('fuck')
			}
		})
		cl = Cl()
		cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
		res = cl.where({a: 'f', b: 's'})
		_.e(res, function (q) {
			var j = q.tJ();
			$.h1(j.a + ' !@@@##@ ' + j.b)
		})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
}
function clicks() {
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('GAPS IN HISTORY')
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	})
}
Tsk = V$({
	el: $('#cont'),
	I: function () {
		this.r()
	},
	R: function () {
		this.$el.ht(Temp('task'))
	},
	E: {'click button': 'add'},
	add: function () {
		alert($('#task_desc').v() + ' task added')
	}
})
$L(
		'$_app_Clas_$', 'data',
		'sty', 'html', 'attr', 'text', 'value', 'focus', 'iff',
		'able', 'visib', 'textIp', 'click', 'checked',
		'select', 'checkedApps', 'selApps')
 
function $_app_Clas_$() {
	KOAT = function () {
		_$({
			// color
			C: 'r',
			// app hw title header 
			t: 'attributes.. unlikely to use?',
			vm: {
				url: $o("year-end.html"),
				tt: $o("stats report")
			},
			A: [
				$.a('report').at$('{href:url,title:tt}')
			]
		})
	}
	KOBVS = function () {
		_$({
			C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
			el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
			_: function () {
				vm.vs(0);
				_.in(function () {
					vm.vs(1)
				})
			}
		})
	}
	$ok = function (vm, appCtn) {
		$.app(appCtn)
		ok(F(vm) ? vm() : vm)
	}
	FOCUS = function () {
		_$({
			C: 'u',
			t: 'read&write els “focusedness”  by binding it to  obserb',
			vm: {editingName: $o()},
			A: [
				$.ip().b("hasFocus: editingName"),
				$.h1('editing..').bVs('editingName'),
				$.bt('Edit').b("enable: !editingName(), click:function() { editingName(true) }")
			]
		})
	}
	VISABLE = function () {
		_$({
			C: 'o', t: 'bind -visibile- to a boolean -great', vm: 'vs',
			el: [{ch: 'see me if true!', $vs: 'vs'}, {ch: 'if false!', $vs: '!vs()'}],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
			_: function () {
				vm.vs(0);
				_.in(function () {
					vm.vs(1)
				})
			}
		})
	}
	ATTR = function () {
		_$({
			C: 'w',
			t: 'attributes.. unlikely to use?',
			vm: {url: $o("year-end.html"), tt: $o("stats report")},
			A: [$.aA('{href:url,title:tt}', 'report')]
		})
	}
	KOCSS = function () {
		_$({
			c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
			A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
			_: function () {
				vm.n(-5)
			}
		})
	}
}
function lost() {
	//note: widget name apparently must be lowercase
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
//bT,bV and computed
// ko.b({ g[0]:  ko.o(b) })
// $.fn.ko=function(){}
	/*
	 var o = []
	 if (O(a)) {
	 _.each(a, function (v, k) {
	 o.push(oO('b', k) + ':' + v)
	 })
	 this.attr({'data-bind': o.join()})
	 }
	 else {
	 this.attr({
	 b: oO('b', a) + ':' + b
	 })
	 }
	 */
} 
function classic() {
	knockoutBind2 = function (a) {

//= bd
		var g = G(arguments), a = g[0]
		if (g.p) {
			a = 'text: ' + a
		}
		if (g.n) {
			a = 'click: ' + a
		}
		if (g.m) {
			a = 'value: ' + a
		}
		if (g.d) {
			a = 'checked: ' + a
		}
		q.attr({'data-bind': a})
		return q
	}
}
VM = Feed = function (p) {
	this.ms = $o("Hi");
	this.ms = ko.o("Hi")
	this.feed = new Feed()
	this.feed2 = new Feed()
	this.feed.ms("Ms1")
	this.feed2.ms("Ms2")
	this.ms = ko.o("!")
	this.VM2 = {ms: $o("!")}
	this.somePop = p.smKey
	this.ms = ko.o("Hi");
	this.feed = new Feed();
	this.feed2 = new Feed();
	this.feed.ms("Ms1");
	this.feed2.ms("Ms2");
}
Person = Per = function (n, ch) {
	var per = this
	per.n = n
	per.ch = ko.oa(ch)
	per.A = function () {
		per.ch.push('new ch')
	}
}
function classic() {
	el2H = function (a, t) {
		var g = G(arguments)
		var $q = $('<template>')
		$q.A(d = $.d())
		d.A(A(g.s) ? g.s : g)
		return d.ch(0).h()
	}
}
function _pre() {
 
}
old = function () {
	CUSTEL = function () {
		
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
RTR = function () {
	Rtr = $R({
		routes: {'': 'index', 'wap/rtr/images/:id': 'image', view: 'viewImage'},
		home: function () {
			$l('you are viewing home page')
		},
		index: function () {
			$l('you are viewing index')
		},
		image: function (id) {
			$l('image===')
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			});
			$.bd().C('z')
		},
		viewImage: function () {
			$l('you are viewing an image')
		}
	})
	rtr = sRtr(new Rtr)
	_.in(function () {
		$l('......');
		rtr.n('/wap/rtr/images/32903290239032902390')
	})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
}
FOC = PERFECT_FOR_EDITTING_A_PROFILE_IP = KOFC = function () {
//bind cb and bind ip to 'enable'
	$.p('Name:').A(
			v$('name').b({visible: 'editing', hasFocus: 'editing'}),
			t$('name').b({
				//visible: '!editing()',
				click: 'edit'
			}))
	$.p('Click the name to edit it; click elsewhere to apply changes')
	function VM(n) {
		var vm = this
		vm.name = $o(n)
		vm.editing = $o()
		vm.edit = function () {
			vm.editing(1)
		}
	}
	
	ok(new VM("Bert Bertington"))
}
SPAM = CHECKED = function () {
	$.p(['spam?', ch$('wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])]).vs$('wantSpam')
	vm = {
		wantSpam: $o(1),
		flav: $oa(["cherry", "almond"])
	}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
AVAIL1OLD = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		Ap.M.Avail({c: qiv('newAvail')}).save()
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.$el.append(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'false')
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.append("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.append(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	v = Ap.V.Avails({collection: avs})//.render()
	avs.on('destroy', function (aa) {
		$l('destroy!!!!')
	})
}
AVAILOLD = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).cE(1)
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q(h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	avs.on('destroy',
			function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
}
PEOPL = function () {
	$.x()
	Per = $$M({
		i: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		d: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
		tn: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(
					t.T(
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
DELETE1 = function () {

//bind bt 'click' to parent.rem
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
	$.h1('KKJJKJKJK')
}
BB2 = DFM = function () {
	$V({
		el: $.li(),
		ren: function () {
			this.$el.A('n: ' + this.model.get('n'))
			return this
		},
		i: function () {
			this.$el.C('r', 'b').fS(149)
			this.ren()
		},
		m: $Df({n: 'j'})
	})
}
BB3 = BVR = VWR = DIVADD = function () {
	Vw = _V({
		el: $.dI('d1', 'r', 500, 500),
		ren: function () {
			this.$el.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	_.t(4, function () {
		Vw()
	})// alpha! <- 
	//q.V({r: function () { }, i: function () {  }})()
}
PEEP3 = SWEEET = function () {
	$.x('x', 'bb view people')
	Vw = V$({
		el: ul = $.ul(),
		I: function () {
			this.r().C$('init..')
		},
		R: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A($.li([p.n, '(', p.a, ')']))
			})
			return this
		}
	})
	vw = Vw({cl: peep})
	_.in(function () {
		peep.pop();
		vw.r()
	})
}
SWEET3 = BBVP = BBVIEWPEOPLE = function () {
	$.x('x', 'bb view people')
	Vw = $.ulV({
		I: function () {
			this.$el.C($r())
		},
		R: function () {
			var el = this.$el.E()
			this.collection(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = new Vw({
		cl: peep = peep
	})
	/*
	
	 $.A(vw.r().q)
	 _.in(function(){peep.pop(); vw.r()},'*')
	 */
	Vw = $.ulV({
		i: function () {
			this.q.C($r())
		},
		r: function () {
			var el = this.q.E()
			this.cl(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = Vw({
		cl: peep = peep
	})
	$.x('x', 'bb view people')
	Vw = $V({
		el: $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.A(
						$.li([p.n, '(', p.a, ')'])
						//ul.li(p.n, '(', p.a, ')')
				)
			})
			return this
		}
	})
	Vw = $.ulV({
		i: function () {
			this.q.C($r())
		},
		r: function () {
			var el = this.q.E()
			this.cl(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})
	vw = Vw({cl: peep})
	//$.A(vw.r().q)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
XEVENTS = EVS = function () {
	$.x('o', 'beauty')
	q = $.d('r', 200).A($.h1('hello'), bt = $.bt('-------'))
	Vw = $$V({
		el: q, r: function () {
			$.C($r())
		},
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'r',
			'mouseover': function () {
				q.C($r())
			}
		}
	})
	Vw()
}
XCHANGE = function () {
	Md = M$()
	Vw = V$({
		r: function () {
			return this.h(this.g('rx'))
		},
		i: function () {
			var vw = this;
			vw.r();
			vw.oC(function () {
				vw.r()
			})
		}
	})
	$.x('x', 'bbv');
	$('body').fS(30)
	div = $.dA('o', 300, 400).XY(200, 200)
	ip = $.ip()
	$.bt('change', function () {
		m.s('rx', ip.v())
	})
	m = new Md({rx: 'antibiotic'})
	new Vw({
		el: div,
		m: m
	})
}
BACKVAL4 = function () {
	Person = _M({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error',
					function (m, e) {
						alert(3);
						$l(e)
					})
			t.on('change:name',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.name == 'rigo') {
				return "name can't be rigo!"
			}
		}
	})
	p = Person({name: "rigo", age: 7})
	//c=bbC({m:Person})
	//p1=c.a(person1)
	//p2=c.a(person2)
	//c.rm(p1)
}
BBVT4 = function () {
	$.dI('ct', [
				$.bt('Load'),
				$.ul().id('list')
			]
	).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	v = _V({
		q: '#ct',
		events: {'click button': 'r'},
		R: function () {
			var da, tp, ul
			$l('RENDER')
			/*
			 $l('rr: '+ this.model.get('d')[0].h )
			 //$.c('b').ab(300,300)
			 da=this.model.get('d')
			 tp=this.tp
			 ul= this.$el.find('ul')
			 _.e(da, function(da){ul.A(tp.clone()
			 .find('a').hr('href', da.h)
			 .T(da.t).end())})
			 */
		},
		I: function (op) {
			$l(op.blOp)
			this.tp = $('#list-tp').children()
		}
	})({
		blOp: 'empty!',
		m: m = $$M({
			d: [
				{t: 'a.com', h: 'a.com'},
				{t: 'b.com', h: 'b.com'},
				{t: 'c.com', h: 'c.com'}
			]
		})
	})
	md = $$m({
		df: [{t: 'a.com', h: 'a.com'},
			{t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	})
	$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
	$.dI('list-tp', [$.la()]).C('o')
	Vw = _V({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp, ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone()
						.find('a').hr('href', da.h).T(da.t).end())
			})
		},
		E: {'click button': 'rr'}
	})
	vw = Vw({
		blOp: 'empty!',
		model: md
	})
	return vw
}
BB15 = BBC = PEPOP = function () {
	$.x('x', 'bb view people')
	vw = $V({
		t: 'ul',
		collection: peep,
		ren: function () {
			var vw = this
			var q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		},
		i: function () {
			this.ren().$el.C('y').A()
		}
	})
	// alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		R: function () {
			q.A($.ul(['hello']))
		},
		I: function () {
			this.R()
		}
	})
	new q.$V({
		R: function () {
		},
		I: function () {
		}
	})
}
MDVW = function () {
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	m = $M({d: {n: 'j', a: 20, o: 'p'}})
	m.V($$V({
		t: 'li', _: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	}))
	_.in(2, function () {
		$.C('R')
		$l('- - --- - - - - ')
		m.l()
	})
	function old() {
		PERVY = function () {
			$.x('n')
			$$V({
				t: 'li', _: 'some-per', k: 'per',
				r: function () {
					this.A('n').A()
				},
				i: function () {
					$l(this.model);
					this.r()
				}
			})({
				m: $M({d: {n: 'j', a: 20, o: 'p'}})
			}) //-> p.V(PerV)
		}
	}
}
VALIDCOL = VALIDATECOLLECTION = function () {
	Per = $$M({
		I: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	Per = _M({
		i: function () {
			this.oIv(function (m, z) {
				$l(z)
			})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (at) {
			if (at.a < 0) {
				return 'a<0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34})
	p.oIv(function (m, z) {
		$l('err: ' + z)
	})
	PerV = _V({
		t: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		//tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var v = this
			//this works, but doesnt use a template
			v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
			v.h(v.tJ())
		}
	})
	pV = PerV({m: p})
	peepC = _Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = _V({
		tn: 'ul',
		i: function () {
			$l('hi');
			$l(this.cl)
		},
		r: function () {
			var vw = this
			vw.eCl(function (p) {
				var v, pV
				$l(p.g('n'))
				pV = PerV({m: p})
				$l(pV.el)
				vw.q.A(pV.el)
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
	/*
	
	 md.validate() checking attr vals  prior to setting them.
	
	 By default occurs when md is persisted using save() or when set() is called if {vld:true}
	
	 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
	 .save() will not continue and atts of md will not be modified on server.
	
	 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
	 This object is distinct from current atts of md  and from  pams passed to operation.
	
	 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
	
	
	 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	
	
	 */
}
FLCL030 = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = Bb.V.e({
	 ev: {'click #run': 'runFilter'},
	 runFilter: function(e){e.pD();
	 this.fl = {
	 // ... get the filter info from the DOM
	 }; this.rr()},
	 rr: function(){// get the filtered list from the collection
	 // iterate over the filtered list and render the results in to the html array
	 // populate the DOM with the resulting HTML
	 HT=[]
	 _.e(this.cl.where(this.fl),
	 function(item){HT.push(
	 _.tp($('my-item-template').H())(item.tJ())
	 )})
	 this.$el.html(HT); return this }
	 })*/
	Cl = $$C({
		i: function () {
		}
	})
	cl = Cl({})
	/*
	 cl.add([{a: 'f', b: 's'},
	 {a: 't', b: 's'},
	 {a:'f', b: 's'},
	 {a: 's', b:'t'}
	 ])
	
	
	 res = cl.where({a:'f',b:'s'})
	 */
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
FLCL02 = function () {
	$.x('r', 'filtering a cl, but tp missing?!')
	// ... get the filter info from the DOM
	// get the filtered list from the collection
	// iterate over the filtered list and render the results in to the html array
	// populate the DOM with the resulting HTML
	FlV = $V({
		ev: {'click #run': 'runFilter'},
		runFilter: function (e) {
			e.pD();
			this.fl = {};
			this.r()
		},
		r: function () {
			HT = [];
			_.e(this.cl.where(this.fl),
					function (item) {
						HT.push(_.tp($('my-item-template').H())(item.tJ()))
					})
			this.q.h(HT);
			return this
		}
	})
	Cl = $$C({
		i: function () {
			$l('fuck')
		}
	})
	cl = Cl()
	cl.add([{a: 'f', b: 's'}, {a: 't', b: 's'}, {a: 'f', b: 's'}, {a: 's', b: 't'}])
	res = cl.where({a: 'f', b: 's'})
	_.e(res, function (q) {
		var j = q.tJ();
		$.h1(j.a + ' !@@@##@ ' + j.b)
	})
//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
PEOPL = function () {
	$.x()
	Per = $$M({
		i: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		d: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34}) //p.oV(function (mod, z) {$l(z)})
	PerV = $$V({
		tn: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(
					t.T(
							t.j()
					)
			)
		}
	})
	pV = PerV({m: p})
	peepC = $$C({m: Per})
	pC = peepC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	PeepV = $$V({
		tn: 'ul', i: function () {
			$l('hi')
			$l(this.cl)
		}, r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
}
THOUGHTS = function () {
	$.get('/thoughts', function (obs) {
		_.e(obs, function (ob) {
			$.h1('ob: ' + ob.un)
		})
	})
}
CHAINB1 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
CHB = CHAINB = function () {
	
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	Cl = C$()
	new Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	return
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
COUNTER0 = function () {
	Td = $$M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $$c().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	TdsCl = $$c()
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
}
CNTR = COUNTER = function () {
	Td = _M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	TdsCl = _Cl()()
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
}
FRND = function () {
	FRND = function () {
		$.x().h1('backcl')
		Frnd = $M({d: {lame: 1}})
		f1 = Frnd({n: "Lul", a: 67})
		f2 = Frnd({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = $M({
			d: {lame: true},
			i: function () {
				var t = this
				t.on('error', function (m, e) {
					alert(3);
					$l(e)
				})
				t.on('change:n',
						function (m, e) {
							alert(3);
							$l(e)
						})
			},
			v: function (at) {
				if (at.n == 'rigo') {
					return "n cant be rigo!"
				}
			}
		})
		p = Per({n: "rigo", a: 7})
		cl = $Cl()()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = $Cl({m: Per})
		pers = Pers()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	Friend = _M({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = _C()()
	f1 = c.add(f1)
	f2 = c.add(f2)
	c.rm(f1)
	PERS = function () {
		$.x()
		Per = _M({})
		p1 = Per({n: 'j'})
		p2 = Per({n: 'y'})
		Pers = _C({model: Per})
		pers = Pers([p1, p2])
	}
}
USMETS0 = function () {
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = $$M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
CHAINABLE0 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(), which  terminates chain and returns resulting array
	Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
BACKSETR = function () {
	$.x()
	Sb = Sidebar = Bb.m.e({
		ask: function () {
			this.s({c: prompt("color?")})
		}
	})
	sb = Sb.o()
	sb.on('change:c', function (md, c) {
		$('body').C(c)
	})
	sb.set({c: 'b'})
	sb.ask()
	//right from ko site
	d = $.dA(400)
	Sid = Bb.M({
		promptColor: function () {
			this.s({
				co: pr('color:')
			})
		}
	})
	sb = Sid()
	sb.on('change:co', function (md, c) {
		d.C($l(c))
	})
	sb.C('w')
	sb.ask()
	Per = Bb.M.e({
		i: function () {
			alert("Welcome")
		}
	})
	p = Per({})
	p.s({n: "mac", a: 67})
	$.dA(300).id('sb')
	Sidebar = Bb.M.e({
		fn: function () {
			return this.s({
				c: prompt("c?")
			})
		}
	})
	Sidebar().oC('c', function (m, c) {
		$('#sb').C(c)
	}).s({c: 'w'}).fn()
}
BABY = function () {
	$d(m = new Bb.M({}))
}
ITEMS = function () {
	Router = bbR({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	router = Router()
	Ap = {
		M: {}, V: {}, C: {}
	}
	Ap.M.item = bbM({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	$start()
}
///  START PERFECT ////
XMDGET = function () {
	Md = _M()
	md = Md({n: 'j'});
	$.h3('p: ' + md.g('n'))
}
XEXTEV = function () {
	$.x('o', 'EXTEV')
	o = _.x({}, Bb.E)
	o.on('yo', function () {
		$.sp(G(arguments)).fS(50)
	})
	o.trigger('yo', 'a', 'b', 'c')
}
BBEXT = function () {
	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
}
CLICK1 = VWW = function () {
	d = $.d('r', 200).A(
			$.h1('hello'),
			$.bt(__)
	)
	//d.$(function(){v.r()})
	mOv = function () {
		$l('mouse over !')
	}
	v = V$({
		E: {
			'click button': function () {
				$l('$')
			},
			$$: 'R',
			v: mOv
		},
		el: d,
		R: function () {
			alert('double click')
			$.bd().C($r())
		}
	})
	new v()
}
CHAINB2 = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().filter(function (i) {
				return i.g('a') > 10
			}).m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
INDEXSORT0 = function () {
	tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
		tt: '  Aust',
		completed: true
	}])
	tds.forEach(function (md) {
		$l(md.g('tt'))
	}) //   Belgium.//   China. //   Austria.
	// sortBy()- sort a cl on spec attr, ex: sortByAlph
	tds.sortBy(function (td) {
		return td.g("tt").tLC()
	}).forEach(function (m) {
		$l(m.g('tt'))
	}) // go to Austria. // go to Belgium. // go to China.
	count = 1;
	$l(tds.map(function (md) {
		return count++ + ". " + md.g('tt')
	})) //1. go to Belgium. //2. go to China. //3. go to Austria.
	tds.max(function (m) {
		return m.id
	}).id;
	tds.min(function (m) {
		return m.id
	}).id
	//  pluck() extract  spec attr
	captions = tds.pluck('caption') // returns list of captions
	// filter()  ex: Filter by array of md IDs
	Tds = $Cl({
		md: Td, filterById: function (ids) {
			return this.mds.filter(function (c) {
				return _.contains(ids, c.id)
			})
		}
	})
	//   indexOf() return index of particular item within cl
	peop = $cl()
	peop.comparator = function (a, b) {
		return a.g('n') < b.g('n') ? -1 : 1
	}
	peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
	peop.indexOf(rob)//0
	peop.indexOf(tom)//2
}
BB19 = RESET = function () {
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
///////////////////////////////////////////////////////
	//  replace  entire cl  content
	TdsCl = $cl()
	// we can listen for reset evs
	TdsCl.on("reset", function () {
		$l("Cl reset.")
	})
	TdsCl.A([{
		tt: 'go to Jamaica.', completed: false
	}, {
		tt: 'go to China.',
		completed: false
	},
		{tt: 'go to Disneyland.', completed: true}]);
	$l('Cl size: ' + TdsCl.length); // Cl size: 3
	TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
	// Above logs 'Cl reset.'
	$l('Cl size: ' + TdsCl.length); // Cl size: 1
	// use reset with no arguments to clear outcl completely.
	//  This is handy when dynamically loading new page of results
	// where you want to blank out current page of results.
	//myCl.reset()
	// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
	// The reason you might want to use this is to perform super-optimized
	//rendering in extreme cases where individual evs are too expensive.
	td = $M()
	tds = $Cl([td]).on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
		$l(ops.prevMds);
		$l([td]);
		$l(ops.prevMds[0] === td); // true
	})
	tds.reset([])
	// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
	Beat = $M({d: {job: 'mus'}})
	john = Beat({fN: 'John', lN: 'Lennon'});
	paul = Beat({fN: 'Paul', lN: 'McCartney'});
	george = Beat({fN: 'George', lN: 'Harrison'});
	ringo = Beat({fN: 'Ringo', lN: 'Starr'});
	theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
	pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
	theBeats.s([john, paul, george, pete]); // Update cl
	// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
	// Updates any of John, Paul and Georges's atts that may have
	// changed over years.
	// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
	function more() {
		//  replace  entire cl  content
		TdsCl = $cl()
		// we can listen for reset evs
		TdsCl.on("reset", function () {
			$l("Cl reset.")
		})
		TdsCl.A([{
			tt: 'go to Jamaica.', completed: false
		}, {
			tt: 'go to China.',
			completed: false
		},
			{tt: 'go to Disneyland.', completed: true}]);
		$l('Cl size: ' + TdsCl.length); // Cl size: 3
		TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
		// Above logs 'Cl reset.'
		$l('Cl size: ' + TdsCl.length); // Cl size: 1
		// use reset with no arguments to clear outcl completely.
		//  This is handy when dynamically loading new page of results
		// where you want to blank out current page of results.
		myCl.reset()
		// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
		// The reason you might want to use this is to perform super-optimized
		//rendering in extreme cases where individual evs are too expensive.
		td = $M()()
		tds = $Cl([td])()
				.on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
					$l(ops.prevMds);
					$l([td]);
					$l(ops.prevMds[0] === td); // true
				})
		tds.reset([])
		// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
		Beat = $M({d: {job: 'mus'}})
		john = Beat({fN: 'John', lN: 'Lennon'});
		paul = Beat({fN: 'Paul', lN: 'McCartney'});
		george = Beat({fN: 'George', lN: 'Harrison'});
		ringo = Beat({fN: 'Ringo', lN: 'Starr'});
		theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
		pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
		theBeats.s([john, paul, george, pete]); // Update cl
		// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
		// Updates any of John, Paul and Georges's atts that may have
		// changed over years.
	}
}
PEP = function () {
	$.x('x', 'bb view people')
	peep = peep
	Vw = $$V({
		t: 'ul',
		r: function () {
			var vw = this, q = vw.$el.E();
			_.e(vw.collection, function (p) {
				var li = $.li([p.n + '(' + p.a + ')'])
				q.A(li)
			});
			return this
		},
		i: function () {
			this.$el.C('y')
		}
	})
	vw = Vw({cl: peep})  // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.R().el)
	_.in(function () {
		peep.pop();
		vw.R()
	})
}
DIR = DIRECTORYADMIN = DIRECATMIN19 = function () {
	$CSS(CssOb);
	$.dI('wrapper', [
		$('<h1>').A('games directory').col('o'),
		$.dK('tools', [
			$('<h4>').col('g').A('search:'), $.br(),
			$('<input>').id('searchBox'), $.br(),
			$('<h5>').col('y').A('Filter:'), $.dI('filter'),
			$.dI('count')
		]),
		$.ulI('listing', [])
	])
	app = {m: {}, v: {}, r: {}, c: {}}
	app.m.Person = M$({
		defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
		initialize: function () {
			this.set('type', this.get('par') ? 'student' : 'parent')
		}
	})
	app.c.People = C$({
		model: app.m.Person,
		comparator: function (per) {
			return per.get('lN')
		}
	})
	app.i = function () {
		direc = new app.v.People(dirData)
		rtr = new app.r.Rtr()
		// Bb.h.start()
	}
	app.r.Rtr = Bb.R.x({
		routes: {
			'filter/:type': 'urlFilter'
		},
		urlFilter: function (type) {
			direc.filterType = type
			direc.trigger('change:filterType')
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.Person = Bb.V.x({
		events: {
			'click .list-header': 'showDetails'
		},
		showDetails: function (e) {
			var q = $(e.target)
			q.toggleClass('active')
			q.siblings('.details').slideToggle('fast')
		},
		tagName: 'li',
		attributes: function () {
			return {class: 'person ' + this.model.get('type')}
		},
		tp: function (o) {
			return $('<h3>').A(
					$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
					$.dK('details', [
						'phone: ' + o.p, $.br(),
						'email: ', $.a(o.e)
					])
			)
		},
		r: function () {
			ob = this.model
			j = ob.toJSON()
			$l('render:' + j)
			this.A(
					this.tp(j)
			)
			return this
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.R().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.R()
		}
	})
	app.v.People = Bb.V.x({
		events: {
			'keyup #searchBox': 'searchFilter'
		},
		getTypes: function () {
		},
		searchFilter: function () {
		},
		filterBySearch: function () {
		},
		filterByType: function () {
		},
		createFilters: function () {
		},
		setFilter: function () {
		},
		el: '#wrapper',
		r: function () {
			var vw = this,
					q;
			$('#listing').empty()
			_.e(this.cl.models, function (da) {
				vw.renderPerson(da)
			}, vw)
			return this
		},
		renderPerson: function (per) {
			var newPer = new app.v.Person({
				model: per
			})
			$('#listing').A(newPer.R().el)
		},
		initialize: function (data) {
			this.cl = new app.c.People(data);
			this.R()
		}
	})
	app.i(dirData)
}
BBEV = function () {
	$.x().i('chicks')
	ev = bb.Ev()
	ev.b("fun:had", // bind? on?
			function () {
				alert("wee!")
			})
	//trigger
	ev.tr("fun:had")  //it'll alert "wee!"
}
RESETCL = function () {
	
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
	// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
}
RTR0 = function () {
	$CSS({h1: {'font-size': 100}})
	r = new Bb.R({
		routes: {
			'': 'index',
			'wap/rtr/images/:id': 'image',
			view: 'viewImage'
		},
		image: function (id) {
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			})
			$.bd().C('z')
		},
		h: function () {
			alert('you are viewing home page')
		},
		x: function () {
			alert('you are viewing index')
		},
		viewImage: function () {
			alert('you are viewing an image')
		}
	})
	sRtr(r)
	Bb.h.s({pushState: true})
	_.in(3, function () {
		r.n('55c24c8f4198473b0d000004.png')
	})
	$.a().A($.h1('afsd'))
	$('body').on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
	_.in(function () {
		$l('......')
		r.n('/wap/rtr/images/32903290239032902390')
	})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
	RT7 = function () {
		$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]',
				knockAncs).A($.a().A($.h1('afsd')))
		rtr = sRtr(new Bb.R.x(rtsOb2))
		Bb.h.s({pushState: true})
	}
}
AP = TASK = function () {
	$.x('g', 'tasker');
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
	Ap.M.Tsk = $$M({})
	tsk1 = Ap.M.Tsk({
		title: 'go to the store',
		priority: 4
	})
	tsk2 = Ap.M.Tsk({
		title: 'go to the park',
		priority: 3
	})
	TskV = Ap.V.Tsk = $$V({
		t: 'li',
		el: $('#container'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.html(this.g('t'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	tskVw = Ap.V.Tsk({m: task1})
	Ap.C.Tsks = $$C({m: Ap.M.Tsk})
	tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
	Ap.V.Tsks = $V({
		t: 'li',
		r: function () {
			var that = this
			//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.$el.A()
		}
	})
	tsksVw = Ap.V.Tsks({cl: tsks})
	$.bt('r Ap.V.Tsks tsksV', function () {
		tsksV.r()
	})
	$.d().id('container')
	r = $R({
		R: {
			'': 'first',
			'first': 'first',
			'second': 'second'
		},
		first: function () {
			$l('first')
		},
		second: function () {
			new Task()
			$l('second')
		}
	})
	Bb.h.start({pushState: true})
}
DON = DONUTS = function () {
	Donut = bbM({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	DNUTS = MOD = function () {
		m = bbM({n: 'j'})
		bostonCream = Donut({
			n: 'Boston Cream',
			cream_filled: true
		})
		bostonCream.s({sprinkles: true})
		bostonCream.S() //save
		Donuts = bbC({
			m: Donut,
			url: "/donuts"
		})
		donuts = Donuts()
		donuts.fetch()// donuts.at(0); -> gets donuts by index.
		// donuts.get(0); -> gets donuts by id.
		// donuts.each(function(d){$l(d.get("name"))})
		// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
		// donuts.map(function(d){return d.get("name")})
		DonutShop = bbM({
			defaults: {n: "Untitled"},
			initialize: function () {
				var t = this
				t.donuts = Donuts()
				t.donuts.url = 'donut_shops/' + t.id + "/donuts"
			}
		})
		donutShop.oA(function (donut) {
			alert("added " + donut.get("name"))
		})
		lemonFilled = donutShop.donuts.a({
			n: "Lemon Filled"
		})
		a = Eve()
		a.o("fun:had", function () {
			alert("wee!")
		});
		a.e("fun:had")//it'll alert "wee!"
	}
	m = _M({n: 'j'})
	Donut = _M({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	bostonCream = Donut({
		n: 'Boston Cream',
		cream_filled: true
	})
	bostonCream.s({sprinkles: true})
	bostonCream.S() //save
	Donuts = bbC({
		m: Donut,
		url: "/donuts"
	})
	donuts = Donuts()
	donuts.fetch()// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	DonutShop = _M({
		defaults: {n: "Untitled"},
		initialize: function () {
			var t = this
			t.donuts = Donuts()
			t.donuts.url = 'donut_shops/' + t.id + "/donuts"
		}
	})
	donutShop.oA(function (donut) {
		alert("added " + donut.get("name"))
	})
	lemonFilled = donutShop.donuts.a({
		n: "Lemon Filled"
	})
	a = Eve()
	a.o("fun:had", function () {
		alert("wee!")
	});
	a.e("fun:had")//it'll alert "wee!"
}
SINGH = function () {
	vw1 = null;
	vw2 = null;
	vw3 = null;
	MsFn = function (vwNum) {
		return function () {
			var vw = this
			return vw.$el.html(
					tp(vw.g('Message'), vwNum)
			)
		}
		function tp(message, vwNum) {
			return message + " from the View " + (vwNum || 0) + "."
		}
	}
	Vw1 = Bb.V.x({I: MsFn(1)})
	Vw2 = Bb.V.x({I: MsFn(2)})
	Vw3 = Bb.V.x({I: MsFn(3)})
	$s({$: {C: 'y'}})
	$.C('o').fS(80)
	d = $.d().id('cntr').A().C('b', 'w').W(400).pad(20).html('afsadsf')
	$.bt('vw1', function () {
		$l('b1')
		rtr.N('vw1')
		if (!vw1) {
			vw1 = new Vw1({model: greet})
		}
		cntr.myChildV = vw1
		cntr.R()
	})
	$.bt('v2', function () {
		$l('b2')
		rtr.N('vw2')
		if (!vw2) {
			vw2 = new Vw2({model: greet})
		}
		cntr.myChildV = vw2
		cntr.R()
	})
	$.bt('v3', function () {
		$l('b3')
		rtr.N('vw3')
		if (!vw3) {
			vw3 = new Vw3({model: greet})
		}
		cntr.myChildV = vw3
		cntr.R()
	})
	greet = new Vw1({Message: "Hello world"})
	CtV = Bb.V.x({
		myChildV: null,
		R: function () {
			$l('CntrV rendering')
			var vw = this
			vw.$el.html("Greeting Area")
			vw.$el.A(vw.myChildV.$el)
			return vw
		}
	})
	Rtr = Bb.R.x({
		greeting: null,
		ctnr: null,
		vw1: null,
		vw2: null,
		vw3: null,
		initialize: function () {
			$l('init')
			this.greeting = new Bb.M({Message: "Hello world"});
			cntr = this.ctnr = new CtV({
				el: $("#ctnr"),
				model: greet
			})
		},
		routes: {
			"": "handleRoute1",
			"vw1": "handleRoute1",
			"vw2": "handleRoute2",
			"vw3": "handleRoute3"
		},
		handleRoute1: function () {
			$l('h1')
			if (this.vw1 == null) {
				this.vw1 = new Vw1({model: this.greeting});
			}
			this.ctnr.myChildV = this.vw1;
			this.ctnr.R();
		},
		handleRoute2: function () {
			$l('h2')
			if (this.vw2 == null) {
				$l('vw2 null')
				this.vw2 = new Vw2({
					model: this.greeting
				});
			}
			this.ctnr.myChildV = this.vw2
			$l('will R cntr again..')
			this.ctnr.R()
		},
		handleRoute3: function () {
			$l('h3')
			if (this.vw3 == null) {
				this.vw3 = new Vw3({model: this.greeting});
			}
			this.ctnr.myChildV = this.vw3;
			this.ctnr.R();
		}
	})
	rtr = $rt(Rtr, '/box/singh')
	showChildView = function (ctr, view) {
		ctr.myChildView = view
		ctr.R()
		return ctr
	}
	showView1 = function () {
		ctr.showChildView(view1 || new View1({md: greeting}))
	}
	showView2 = function () {
		ctr.showChildView = view2 || new View2({md: greeting})
		ctr.R()
	}
	showView3 = function () {
		ctr.showChildView = view3 || new View3({md: greeting})
		ctr.R();
	}
}
//$mk.server = server
NOTE = function () {
	server = {
		d: 2,
		n: 2,
		docs: {
			1: {text: 'this is a doc', id: 1}
		},
		notes: {
			1: {1: {text: 'note'}, 2: {text: 'another note'}}
		},
		get: {
			'/docs': function (q, p) {
				var res = []
				for (var doc in docs) {
					if (docs.hasOwnProperty(doc)) {
						res.push(docs[doc])
					}
				}
				p.json(res)
			},
			'/docs/:did/notes': function (q, p) {
				var res = [], n = notes[q.params.id]
				for (var note in n) {
					if (n.hasOwnProperty(note)) {
						res.push(n[notes])
					}
				}
			}
		},
		post: {
			'/docs': function (q, p) {
				var doc = q.body
				doc.id = d++
				docs.doc.id = doc
				p.json(doc)
			},
			'/docs/:did/notes': function (q, p) {
				var note = q.body, id = q.params.id
				note.id = n++
				if (!notes[id]) {
					notes[id] = {}
				}
				notes[id][notes.id] = note
				p.json(note)
			}
		},
		put: {
			'docs/:id': function (q, p) {
				docs[q.params.id] = q.body
				p.json(q.body)
			},
			'docs/:did/notes:nid': function (q, p) {
				notes[q.params.id][q.params.nid] = q.body
				p.json(q.body)
			}
		}
	}
	Note = Bb.M.x({})
	Notes = Bb.C.x({
		m: Note,
		i: function (mds, op) {
			this.doc = op.doc
		},
		u: function () {
			return this.doc.url() + '/notes'
		}
	})
	Doc = Bb.M.x({
		i: function (op) {
			this.notes = new Notes([], {doc: this})
		},
		addNote: function (tx) {
			this.notes.create({
				text: tx
			})
		}
	})
	Docs = Bb.C.x({
		m: Doc, u: '/documents',
		i: function () {
			this.on('reset', this.getNotes, this)
		},
		getNotes: function () {
			this.each(function (doc) {
				doc.notes = new Notes([], {doc: doc})
				doc.notes.fetch()
			})
		}
	})
	ds = new Docs()
	ds.fetch()
}
NOTES = MINIMALBACKBONELOCALSTOREEXAMPLE = MINLS = function () {
	//Minimal Bb.localStorage example
	//THE MODEL AND THE COLLECTION
	//In order to use Bb.localStorage to save a model
	// we also need a collection.
	// The `localStorage` property of the collection
	// needs to be set to a new Bb.LocalStorage object
	// with an identifier for the collection
	// that is used when reading or writing the model values to LocalStorage.
	//The defaults function of the model
	// returns an object with a content property
	// that makes it easy to identify when the model was added to the collection
	// and if it's new or has been fetched from local storage.
	//ADDING AND SAVING NOTE MODELS
	//Bb collections have a fetch method that retrieves models from the server or,
	// in this case, local storage.
	//Before calling save on the model we need to add it to the collection,
	// otherwise Bb would attempt to use an Http request to store it on a server.
	myNotes = new NoteCollection()
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.sv()
	myNotes.models.forEach(function (md) {
		$l("Md in cl: " + md.g("content"))
	})
	function notes() {
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
	}
}
//uses C$:
AVAIL = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	Bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
}
SWEET = function () {
	$.x('x', 'bb view people')
	Vw = $V({
		el: $.ul(),
		i: function () {
			this.r().C$('init..')
		},
		r: function () {
			var ul = this.q
			this.ECl(function (p) {
				ul.li(p.n, '(', p.a, ')')
			})
			return this
		}
	})
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	vw = Vw({cl: peep})
	$.in(function () {
		peep.pop();
		vw.r()
	})
	BBVP1 = function () {
		$.x('x', 'bb view people')
		Vw = $.ulV({
			i: function () {
				this.q.C($r())
			},
			r: function () {
				var el = this.q.E()
				this.cl(function (p) {
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})
		vw = Vw({
			cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		})
		/*
		
		 $.A(vw.r().q)
		 $.in(function(){peep.pop(); vw.r()},'*')
		 */
	}
}
TKZ = function () {
	tasksC = _C(_M())([
		{title: 'game', prior: 3},
		{title: 'store', prior: 5},
		{title: 'haha', prior: 3}
	])
	viw = $.ol.V({
		I: function () {
			this.all('all', 'R')
		},
		R: function () {
			return this.E().e(this.add1)
		},
		add1: function (tsk) {
			$.li.V({
				model: tsk,
				I: function () {
					this.$h(this.get('title'))
				}
			}).$el.a2(this.$el)
		},
		cl: tsksC
	})
	viw.ren().$el.A()
	$.bt('add', function () {
		tsksC.add([{
			title: 'yooo',
			prior: 4
		}])
	})
}
BLOG0 = BLOGVID2WORKS = function () {
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('AuthoR'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.ip().a2($.td().a2($tr)).K('user-ip')
	$.ip().a2($.td().a2($tr)).K('title-ip')
	$.ip().a2($.td().a2($tr)).K('url-ip')
	$.bt('Add', function () {
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
	}).K('add-blog').a2($.td().a2($tr))                                //
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none())
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A($.ip().K("user-update").val(user))
			this.$('.title').E().A($.ip().K("title-update").val(title))
			this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		}, delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
}
BLOG0 = BLOGVID2WORKS = function () {
	$CSS({
		$: {M: 20},
		bd: {dp: 'fl'},
		d: {C: 'r', c: 'b'}
	})
	$table = $.t().a2($.dK('ct').A($.h1('Blog App')))
	$thead = $.tH().a2($table)
	$thTr = $.tr().a2($thead).A(
			$.th('Author'), $.th('Title'),
			$.th('Url'), $.th('action'))
	$tbody = $.tB().a2($table).K('blogs-list')
	$tr = $.tr().a2($thead)
	$.ip().a2($.td().a2($tr)).K('user-ip')
	$.ip().a2($.td().a2($tr)).K('title-ip')
	$.ip().a2($.td().a2($tr)).K('url-ip')
	$.bt('Add', function () {
		blogs.create({
			user: $('.user-ip').V(),
			title: $('.title-ip').V(),
			url: $('.url-ip').V()
		})
	}).K('add-blog').a2($.td().a2($tr))
	//
	BlogView = GenView.tr.extend({
		btGroup_: function () {
			return $.td.A(
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none())
		},
		row: function (ob) {
			return [
				$.sp(ob.user).K('user'),
				$.sp(ob.title).K('title'),
				$.sp(ob.url).K('url'),
				[
					$.bt('Edit').K('edit-blog'),
					$.bt('Delete').K('delete-blog'),
					$.bt('Update').K('update-blog').none(),
					$.bt('Cancel').K('cancel').none()]
			]
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this
			vw.$('.edit-blog').hide();
			vw.$('.delete-blog').hide();
			vw.$('.update-blog').show();
			vw.$('.cancel').show()
			var user = vw.$('.user').html()
			var title = vw.$('.title').html()
			var url = vw.$('.url').html()
			this.$('.user').E().A($.ip().K("user-update").val(user))
			this.$('.title').E().A($.ip().K("title-update").val(title))
			this.$('.url').E().A($.ip().K("url-update").val(url))// use .h( or .H( instead of E().A(
		},
		update: function () {
			var md = this.model
			md.set('user', $('.user-update').v())
			md.set('title', $('.title-update').v())
			md.set('url', $('.url-update').v())
			md.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.R()
		}, delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = CollView.extend({subView: BlogView})
	blogs = new Blogs
	blogsView = new BlogsView({
		model: blogs,
		el: '.blogs-list'
	})
	blogs.fetch()
	Bb.M.prototype.id = '_id'
}
SS20 = NONE = function () {
	//$.sty(maxW(500) + $subRules({d:{dp:'n'}}))
	smaller = until = __W = belowW = lessThanRu = maxWRu = function (w, css) {
		$.sty(maxW(w) + $subRules(css))
	}
	smaller(500, {d: {dp: 'n'}})
	$.d('y', 400, 500)
}
SS1 = BTS = function () {
	$.flexy()
	rgbDivs()
	red.A(green, blue)
	blue.insertBts()
	green.long().aI('me')
}
SS12 = H1 = BIGFONT = function () {
	rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"
	$s(rule)
	// HTML5.CSSRule(rule)
	$.h1('this is a big font').A()
	//
	rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"
	$s(rule)
	$.h1('this is a small font').A()
}
SS15 = TIPS = MOBILETIPS = function () {
	$.d('o', 400, 200).dg().pad(20).A(
			$.d('u', 200, 100),
			$.d('g', 100, 80)
	)
	d = $.d('o', 400, 1200).A().drag().pad(20)
	d.A($.h3('mobile tips').C('x', 'w'))
	d.A($.h4('tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C('x', 't'))
	d.A($.h4('tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C('x', 't'))
	d.A($.h4('tip3: ').C('x', 't'))
	d.A($.h3('mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag').C('x', 'w'))
	d.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x', 't'))
	d.A($.h4("ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C('x', 't'))
	d.A($.h4('<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C('x', 't'))
	d.A($.h4('[ user-scaleable = no ] ->  disables pinch-zooming').C('x', 't'))
	d.A($.h3('mobile tips').C('x', 'w'))
	d.A($.h4('tip1: ').C('x', 't'))
	d.A($.h4('tip2: ').C('x', 't'))
	d.A($.h4('tip3: ').C('x', 't'))
}
SS7 = STY = function () {
	$l(css = $decs({C: 'r'}))
}
$RoApp('TWOVWS', function () {
	FirstVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))
		}
	})
	SecVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)))
		}
	})
	r = $R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			$l('in pg1')
			FirstVw({
				el: $('#ct')
			})
		},
		pg2: function () {
			$l('in pg2')
			SecVw({el: $('#ct')})
		}
	})
})
DOC1 = function () {
	Li_ = Bb.V.x({
		tagName: 'li',
		events: {
			click: function () {
				$ev.trigger('doc:selected', this.model)
			}
		},
		R: function () {
			var vw = this
			md = vw.model
			tt = vw.model.get('title')
			$l(tt)
			vw.$el.A(vw.model.get('title'))
			return vw
		}
	})
	Ul_ = Bb.V.x({
		tagName: 'ul', R: function () {
			cl = this.collection
			_.e(this.collection, function (doc) {
				J.s($l(doc.attributes))
				var li = new Li_({model: doc})
				this.$el.A(li.R().el)
			}, this)
			return this
		}
	})
	Div_ = Bb.V.x({
		R: function () {
			var vw = this, md = vw.model
			var content = $.d().A(md.get('content'))
			vw.$el.A($.h1(md.get('title')), content)
			return vw
		}
	})
	$ev = _.x({}, Bb.E)
	$ev.on('doc:selected', function (doc) {
		$l('sel')
		rtr.navigate('view/' + doc.get('title'), {trigger: 'true'})
	})
	RtrCos = Bb.R.x({
		routes: {
			contents: function () {
				$l('contents')
				var ul = new Ul_({collection: docs})
				$.bd().E(ul.R().el)
			},
			'view/:title': function (doc) {
				var selDoc = _(docs).find(function (doc) {
					return doc.get('title')
				})
				var d = new Div_({model: selDoc})
				$.bd().E().A(d.R().el)
			}
		}
	})
	rtr = new RtrCos()
	_$start()
	rtr.navigate('contents', {trigger: 'true'})
}
BAC = BACKDEMO0 = function () {
	$.d('yoo hoo').id('cont')
	Temp = function (i, h) {
		var s = ''
		return _.tp($('#' + i).html(), h || {})
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		s = "<script type='text/template'>" + s + "</script>"
		return $(s).id(i).A()
	}
	$R({
		rt: {'': 'f', 'f': 'f', 's': 's'},
		f: function () {
			$l('fir')
		}, s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	}, '+')
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	Tsk = $V({
		el: $('#cont'),
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(Temp('task'))
		},
		e: {'click button': 'add'},
		add: function () {
			alert($('#task_desc').v() + ' task added')
		}
	})
}
ROUTEZ = function () {
	$.h4('routez (pushState=false)')
	$.fS(60).dI('ct')
	$s({
		$: {C: 'g', M: 10},
		d: {M: 12, B: '8px dotted orange'},
		label: {fS: 80, c: 'y', C: 'z', B: '4px dotted r'}
	})
	Bb.InitView = function (fn) {
		return Bb.V.x({initialize: fn})
	}
	Bb.V.auto = Bb.InitView(function () {
		this.R()
	})
	Bb.V.ctAuto = Bb.V.auto.x({el: $('#ct')})
	Bb.contentView = function (link) {
		var g = G(arguments)
		return function () {
			new Bb.V.ctAuto({
				R: function () {
					var q = this.$el;
					q.E()
					_.e(A(g.f) ? g.f : g, function (q) {
						q.A(q)
					})
				}
			})
		}
	}
	Bb.LinkView = function (lbTx, aTx, href) {
		return Bb.contentView($.d().A(
				$.lb(lbTx), $.br(),
				$.a(aTx, '#' + href)))
	}
	$R({
		initialize: function () {
			Bb.h.s()
		},
		r: {'': 'pg1', pg1: 'pg1', pg2: 'pg2'},
		pg2: Bb.LinkView('welcome to page 2!', 'go to page 1', 'pg1'),
		pg1: Bb.LinkView('welcome to page 1!', 'go to page 2', 'pg2')
	})
	RT1 = function () {
		$.fS(60).dI('ct')
		$s({$: {M: 12, B: '8px dotted orange'}})
		$R({
			R: {
				'': 'pg1',
				pg1: 'pg1',
				pg2: Bb.LinkView('pg2', 'pg1', 'pg1')
			},
			pg1: Bb.LinkView('pg1', 'pg2', 'pg2')
		})
		//pg1: $VW$('view 1: want to know your NPI NUMBER??', 'Its at view 2. go ->', 'pg2'),
		//pg2:$VW$('vw 2: nada', 'what was the question again?', 'pg1')
		rtr = $R({
			routes: {'*x': 'd'},
			d: function (a) {
				$l('educated? -> ' + a)
			},
			e: function (a) {
				$l('e:' + a)
				$l('n: =' + n++)
				$.h1().A('EDUCATION').A()
			}
		})
		Bb.h.s()
	}
}
DOC = function () {
	$TrgFn = function (str) {
		return function () {
			this.trg(str)
		}
	}
	Ul_ = V$Ul($RenClFn(V$Li$({R: 'title', $: $TrgFn('doc:selected')})))
	Div_ = V$R(function () {
		this.h1('title');
		this.d('content');
		return this
	})
	rtr = $Rtr(
			{
				contents: function () {
					Cl$Ul$Li(docs)
				},
				'view/:title': function (title) {
					$.E(M$D(C$.f(docs, 'title', title)).rEl())
				}
			},
			'contents'
	)
	$mk.$()
	urlFn = function (md) {
		return $url('view', md.g('title'))
	}
	$on('doc:selected', $TrRtrFn(rtr, urlFn))
	$url = function () {
		var g = G(arguments)
		var url = g.f || ''
		_.e(g.r, function (part) {
			url += ('/' + part)
		})
		return url
	}
}
BBVT5 = function () {
	COMS = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
	$.d('y').id('ct').A($.bt('Load', function () {
		v.r()
	}), $.ul().id('list'))
	Vw = Bb.V.x({
		el: '#ct',
		I: function (op) {
			$l(op.blOp);
			this.tp = $('#list-tp').children()
		},
		E: {
			'click button': function () {
				$l('click');
				this.R()
			}
		},
		R: function () {
			var da, tp;
			$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
			da = this.model.get('d')
			tp = this.tp,
					ul = this.$el.find('ul')
			_.e(da, function (da) {
				ul.A(tp.clone().find('a').hr('href', da.h).T(da.t).end())
			})
		}
	})
	m = $M()({d: BBVTdArr})
	md = new Bb.M({d: COMS})
	vw = new Vw({blOp: 'empty!', model: md})
	new v({blOp: 'empty!', m: m = $M()({d: COMS})})
	v = Vw({zm: m, blOp: 'emp!'})
}
ADD1 = ULA = BINDUL = BUL = MONK = function () {
	$.h1('monkey')
	$.t$('monkey')
	v$('monkey')
	$.sm('hello').cl$('A')
	$Ul('list',
			$.d(['my name is ', t$('name'),
				' and i like ', t$('color')]))
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.push({
				name: 'j', color: $r()
			})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	_.ev(1, function () {
		vm.A()
	})
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ADD2 = ULADD = ULA = function () {
	peep = Peep()
	$.lb('Show time: ').A($.cb().ch$('showDT'))
	$Ul('peep',
			$.p([t$('n'), ' has ', t$('ch().length'), ' children']),
			$.a().ch$('New', 'A'),
			$Ul('ch', vs$('$root.showDT', t$())))
	ok({peep: peep, showDT: $o()})
	//add, conditional el
	//anonymous vm
}
LIK = LIKECOMPONENT = function () {
	ko.cm.register('like', {
		viewModel: function (pams) {
			var vm = this
			vm.val = pams.val
			vm.like = function () {
				vm.val('like')
			}.bind(vm)
			vm.dislike = function () {
				vm.val('dislike')
			}.bind(vm) // i didnt overwrite bind did i?
		},
		template: $.sp([
			vs$('!val()',
					ch$('like'),
					ch$('dislike')
			).K("like-or-dislike"),
			vs$('val', 'You', t$('val'), 'it').K('result')
		])[0]
	})
	e$('prods', [
		t$('name'),
		$('<like>').at('params', {vote: 'vote'})
		
		
		//cm$('like', {vote: 'vote'})])
		//.at('params', "val: userRating")
	]) //.K("prod")// cm$('like', 'val:op')
//	e$('Msgs', [t$('ms'),
	cl$('Add')
	ok(vm = (function (pmOb) {
		var prods = [
			{n: 'liiick', op: $o(), userRating: 'fsad'},
			{n: 'Garlic', op: $o(), userRating: 'fsad'},
			{n: 'food', op: $o('like'), userRating: 'fsad'},  // This one was already 'liked'
			{n: 'gull', op: $o(), userRating: 'fsad'},
			{n: 'fun', op: $o(), userRating: 'fsad'}
		]
		return {
			prods: $oa(prods),
			Msgs: $oA([Ms('lick'), Ms('hi'), Ms('haha', '+'), Ms('lame')]),
			addMsg: function () {
				this.MS.push(Ms('item-' + this.pos()))
			},
			prodName: function () {
				return 'item-' + (_.s(this.prods()) + 1)
			},
			position: function () {
				return _.s(this.MS()) + 1
			},
			add: function () {
				var prod = {name: 'item-' + (_.s(this.prods()) + 1)}
				this.prods.push(prod)
			}
		}
	})()) //	ok(vm ={prods: $oA([Prod('brd'), Prod('chc'), Prod('sgh', 'like')])})
}
ROOT = UDA = ULDATA = function () {
	d = $.d().id('hover')
	//Show the div onmouseover.
	d.mouseover(function () {
		$(this).next("#box").tog()
	}).mouseout(function () {
		//Hide to div onmouseout
	})
	$.a($.i('me').t$('matterId'))
	$.ul().e$('mDateTime').A($.li().A(
			$.ul().e$('$root.matter.index.type()[$data]').A(
					$.li([
						d,
						//$.dI('box').none('cssDisplayNone').A($.a('Edit'), $.a('Copy'), $.a('Delete')),
						$.d({
							id: 'box', dp: 'none',
							children: [$.a('Edit'), $.a('Copy'), $.a('Delete')]
						})
					]),
					$.li().t$('matterTitle'),
					$.li().t$('matterComment')
			)
	))
}
KOFLM = function () {
	//filter the items using the filter text
	d = $.dI('hover').A($.a().A($.i('me').b().t$('matterId')))
	d.mouseover(function () {
		var d = this
		//Show the div onmouseover.
		$l("!!!")
		$(d).next("#box").toggle()
	})
	d.mouseout(function () {
		function onMouseOut(obj) {
			
			//d
			//Hide to div onmouseout
			//Todoo:none
		}
	})
	$.ul().b().e$('mDateTime').A($.li().A($.ul()
			.e$('$root.matter.index.type()[$data]').A(
			$.li().A(d, $.dI('box').css('display', 'none').A(
					$.a().A('Edit'), $.a().A('Copy'),
					$.a().A('Delete'))),
			$.li().t$('matterTitle'),
			$.li().t$('matterComment'))))
	vm = {}
	vm.filteredItems = ko.c(function () {
		var t = this, fl
		fl = t.filter().toLowerCase()
		if (!fl) {
			return t.items();
		} else {
			return ko.utils.arrayFilter(t.items(),
					function (it) {
						return ko.utils.stringStartsWith(it.name().toLowerCase(), fl)
					})
		}
	}, vm)
}
COURSE = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COURS = function () {
	$.x('x')
	$.s$('a', 'play');
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
COUR = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COU = function () {
	$.x('x')
	$.s$('a', 'play')
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
dfx = {
	tdTask: "td-task",
	tdHeader: "task-header",
	tdDate: "task-date", tdDesc: "task-desc",
	taskId: "task-", formId: "td-form",
	dataAttribute: "data",
	delDiv: 'delete-div'
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
//Quiz0 = function (title) {this.title = title}
ob1 = {
	_create: _create1,
	_destroy: _destroy,
	refresh: _refresh
}
ob2 = {
	_create: _create2,
	_destroy: _destroy,
	refresh: _refresh
}
ob3 = {
	_create: _create3,
	_destroy: _destroy,
	refresh: _refresh
}
CB1 = CB$(function () {
	$.H(html).wg("app.checkbox", ob1)
})
CB2 = CB$(function () {
	$.sp().A(
			$.d().A($.cb().id('sm'), $.chLb('Small')),
			$.d().A($.cb().id('md'), $.chLb('Medium')),
			$.d().A($.cb().id('lg'), $.chLb('Large'))
	).A()
	$.wg("app.checkbox", ob2);
})
CB3 = CB$(function () {
	$.H(html).wg("app.checkbox", ob3)
})
CB4 = CB$(function () {
	$.spSmMdLg()
	btOb = {
		text: false,
		icons: {
			primary: "ui-icon-blank"
		},
		create: function (e, ui) {
			$(this).rmAt("title");
		}
	}
	ob4 = {
		_create: function () {
			var wg = this, ll, $el;
			$el = ll = wg.element
			wg._super();
			// Hide the HTML checkbox, then insert our button.
			ll.K("ui-helper-hidden-accessible");
			// Configure the button by adding our wg class,
			// setting some default text, default icons, and such.
			// The create event handler removes the title attribute,
			// because we don't need it.
			wg.bt = wg.button = $.btAf(ll).K("ui-checkbox").T("checkbox").button(btOb)
			// Listen for click events on the button we just inserted and
			// toggle the checked state of our hidden checkbox.
			wg._on(this.button, {
				click: function (e) {
					var wg = this, ll = wg.element
					ll.prop("checked", !ll.iCh)
					_rf(wg);
				}
			});
			// Update the checked state of the button, depending on the
			// initial checked state of the checkbox.
			_rf(wg)
		},
		_destroy: function () {
			this._super();
			// Display the HTML checkbox and remove the button.
			UI_hide(this)
			UI_btRm(this)
		},
		refresh: function () {
			// Set the button icon based on the state of the checkbox.
			this.button.button("option", "icons", {
				primary: this.element.UI_iCh()
			})
		}
	}
	$.wg("app.checkbox", ob4)
})
rtsOb = rtsOb2 = {
	rt: {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	},
	image: function (id) {
		$l('image===')
		_.t(10, function () {
			$l($r() + '-id: ' + id)
		})
		$.bd().C('z')
	},
	h: function () {
		alert('you are viewing MEDICAL page')
	},
	x: function () {
		alert('you are viewing index')
	},
	viewImage: function () {
		alert('you are viewing a BOARD CERTIFICATION image')
	}
}
rtsOb6 = rtsOb1 = {
	routes: {
		'': 'home',
		'view': 'view',
		':id': 'en',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	},
	home: function () {
		$l('home')
	},
	view: function () {
		$l('image')
	},
	en: function (id) {
		$l('id:' + id)
	}
}
rtsOb3 = {
	r: {
		hello: 'hi',
		goodbye: function () {
			$.C('o')
		}
	},
	_: function () {
		$l('indexxxxx')
		$.C('p')
	},
	hi: function () {
		$.C('g');
		alert('well hi there!')
	},
	d: function () {
		$.C('z')
		$.A(
				$.sp('d e f a u l t')
						.fS(30).C('g').col('w')
		)
	}
}
rtsOb4 = {
	r: {
		':post/:id': 'pam',
		'post/*id': 'splatMustBeLast',
		'*post': 'splat'
	},
	pam: function (post, id) {
		$l('Get post ' + id)
		$l('fnPam: ' + post + ', id# ' + id)
	},
	splat: function () {
		alert('1')
	},
	splatMustBeLast: function () {
		alert('2')
	},
	d: function (a) {
		$l('ddddddddd:' + a)
	},
	e: function (a) {
		$l('eeeeeeeee:' + a)
	}
}
//https://www.youtube.com/watch?v=roeKTS8Z0I0&index=4&list=PLzpzty4VRTPfbao0m8oADCmBD5BmWM4rT
str = "<div class='liveExample'><p>First name: <input data-bind='value: firstName' /></p><p>Last name: <input data-bind='value: lastName' /></p><h2>Hello, <span data-bind='text: fullName'> </span>!</h2></div>"
//UI-CHECK-BOX WIDGET
_create2 = function () {
	var wg = this
	var $el = this.element, ll = this.element
	wg._super()
	ll.K("ui-helper-hidden-accessible");
	wg.button = $.btAf($el)
			.K("ui-checkbox")
			.T("checkbox").button({
				text: false,
				icons: {primary: "ui-icon-blank"},
				create: function (e, ui) {
					$(wg).rmAt("title")
				}
			})
	wg._on(wg.button, {
		click: function (e) {
			var wg = this, ll = wg.element
			ll.prop("checked", !ll.iCh())
			_rf(wg)
		}
	})
	_rf(wg)
}
_refresh = function () {
	var wg = this, ll = wg.element
	wg.button.button("option", "icons", {
		primary: ll.iCh() ?
				"ui-icon-check" : "ui-icon-blank"
	})
}
_destroy = function () {
	var wg = this
	// Standard wg cleanup.
	wg._super();
	// Display the HTML checkbox and remove the button.
	wg.element
			.rmK("ui-helper-hidden-accessible")
	wg.button.button("destroy").rm()
}
_create1 = function () {
	
	// Call the default widget constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our widget class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.T("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			_rf(this);
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	_rf(this);
}
_create3 = function () {
	
	// Call the default wg constructor first.
	this._super();
	// Hide the HTML checkbox, then insert our button.
	this.element.K("ui-helper-hidden-accessible");
	this.button = $("<button/>").insertAfter(this.element);
	// Configure the button by adding our wg class,
	// setting some default text, default icons, and such.
	// The create event handler removes the title attribute,
	// because we don't need it.
	this.button.K("ui-checkbox")
			.text("checkbox")
			.button({
				text: false,
				icons: {
					primary: "ui-icon-blank"
				},
				create: function (e, ui) {
					$(this).removeAttr("title");
				}
			});
	// Listen for click events on the button we just inserted and
	// toggle the checked state of our hidden checkbox.
	this._on(this.button, {
		click: function (e) {
			this.element.prop("checked", !this.element.is(":checked"));
			this.refresh();
		}
	});
	// Update the checked state of the button, depending on the
	// initial checked state of the checkbox.
	this.refresh();
}
$.fn.UI_iCh = function () {
	return this.iCh() ? "ui-icon-check" : "ui-icon-blank"
}
function threeCheckboxesHtml() {
	html = '<div> <input id="sm" type="checkbox"/> <label for="check" class="ui-widget">Small</label> </div> ' +
	'<div> <input id="md" type="checkbox"/> <label for="check" class="ui-widget">Medium</label> </div>' +
	' <div> <input id="lg" type="checkbox"/> <label for="check" class="ui-widget">Large</label> </div>'
}
$cb$ = $CB$ = function (fn) {
	if (F(fn)) {
		fn()
	}
	//run checkbox widget on all checkbox elements
	$("input[type='checkbox']").checkbox()
}
CB$ = function (fn) {
	return function () {
		$CB$(fn)
	}
}
$.fn.wK = function () {
	return this.K('ui-widget')
}
$.chLb = function (lbTx) {
	return $.lb(lbTx, 'check').wK()
}
$.cbI = function (id) {
	return $.cb().id(id)
}
$.cbDiv = function (id, lbTx) {
	return $.d([$.cbI(id), $.chLb(lbTx || id)
	])
}
g('/user', function (q, p) {
	Ur.fi(p.daFn($user))
})
G('user/:un', function (q, p) {
	Ur.f1(
			q.un_(),
			p.daFn($user))
	p.j($user(user))
})
$post('/user', function (q, p, nx) {
	Ur.cr(q.b, function (z, user) {
		q.ss.un = user.un
		q.ss.sv(function () {
			p.js(user.un)
		})
	})
})
$a.de('/user', function (q, p) {
	Ur.rm(q.b, _json(p))
})
$user = function (o) {
	if (A(o)) {
		return _.m(o, $user)
	}
	return {
		id: o.id,
		un: o.un,
		mug: o.mug,
		sts: o.sts || 'no status'
	}
}
KOE = function () {
	$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tBE('peep', [
			$.tr([
				$.tdT('f'),
				', ',
				$.tdT('l')
			])
		])])
	ok({
		peep: [
			{f: 'a', l: 'A'},
			{f: 'b', l: 'B'},
			{f: 'c', l: 'C'}
		]
	})
}
BARN = function () {
	$l('barn')
	$.z().ulE(
			'PL', [
				$.li([
					$.sp('Planet: '),
					$.b().bT('n'),
					$.dI('cap', [$.pT('cap.n')])
				])
			])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}
KO0 = function () {
	$.x();
	$.ipV('n');
	$.h1T('n')
	$.ulE('arr', [$.liT()])
	$.sb().b$('A')
	$.dA('b', 100, 300, 200, '+').bT('n')
	ok({
		n: ko.o('zi'), arr: ko.oa(),
		A: function () {
			this.arr.push(this.n())
		}
	}) // ok('n', ko.o('zi'))
	$.in(1, function () {
		vm.n('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)
		})
	}, '*')
}
KOE = function () {
	$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tBE('peep', [
			$.tr([
				$.tdT('f'),
				', ',
				$.tdT('l')
			])
		])])
	OK({
		peep: [
			{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}
		]
	})
}
NEST = function () {
	$.x('x').h2('Pp')
	Per = function (n, ch) {
		this.n = n
		this.ch = $oa(ch)
		this.A = function () {
			this.ch.push('new ch ' + $r())
		}
	}
	peep = [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
	$.uLE('peep',
			$.d([  // name has length children
				$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
				//new
				$.a$('New', 'A')
			]),
			$.uLE('ch',
					$.spT(), //child name
					$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
			)
	)
	$.cbC('showDT').a2Lb('Show time:')
	//anonymous vm
	ok({peep: peep, showDT: $o()})
}
//sort, remove
BTRLST1 = function () {
	$.x('o')
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
	ok(new Lst())
}
BTRLST = function () {
	$.x('o')
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
FLCL = function () {
	$.x('r', 'filtering a cl:')
	/*
	 FlV = bb.V.e({
	 ev: {'click #run': 'runFilter'},
	 runFilter: function(e){e.pD();
	 this.fl = {
	 // ... get the filter info from the DOM
	 }; this.rr()},
	 rr: function(){// get the filtered list from the collection
	 // iterate over the filtered list and render the results in to the html array
	 // populate the DOM with the resulting HTML
	 HT=[]
	 _.e(this.cl.where(this.fl),
	 function(item){HT.push(
	 _.tp($('my-item-template').H())(item.tJ())
	 )})
	
	 this.$el.html(HT); return this }
	 })*/
	Cl = bb.C.e({
		i: function () {
		}
	})
	cl = Cl.o({})
	/*
	 cl.add([{a: 'f', b: 's'},
	 {a: 't', b: 's'},
	 {a:'f', b: 's'},
	 {a: 's', b:'t'}
	 ])
	
	
	 res = cl.where({a:'f',b:'s'})
	 */
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
CHERRY = function () {
	$l('cherry')
	$.x('o')
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'), $.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
	ok({
		wants: ko.o(1),
		flav: ko.oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
// WORKS //////////////////////////
KO0 = function () {
	$.x();
	$.ipV('n');
	$.h1T('n')
	$.ulE('arr', [$.liT()])
	$.sb().b$('A')
	$.dA('b', 100, 300, 200, '+').bT('n')
	ok({
		n: ko.o('zi'), arr: ko.oa(),
		A: function () {
			this.arr.push(this.n())
		}
	}) // ok('n', ko.o('zi'))
	$.in(1, function () {
		vm.n('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.push(i)
		})
	}, '*')
}
KOE = function () {
	$.x().t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tBE('peep', [
			$.tr([
				$.tdT('f'),
				', ',
				$.tdT('l')
			])
		])])
	OK({
		peep: [
			{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}
		]
	})
}
KOGRID = function () {
	$.z().f().at({action: '/someServerSideHandler'}).A(
			$.p('You have asked for').A(
					$.sp('&nbsp;').bT('gifts().length'),
					'gift(s)'),
			$.t().bVs('gifts().length > 0').A(
					$.tH().A(
							$.tr().A(
									//tHR
									$.th().A('Gift name'),
									$.th().A('Price')
							)),
					$.tB().bE('gifts').A(
							$.tr().A(  //tBR
									$.td().A($.ip().K('required').b({v: 'name', u: true})),
									$.td().A($.ip().K('required number')
											.b({v: 'price', u: true})),
									$.td().A(
											$.a('delete').b$('$root.removeGift')
									)))),
			$.bt('add gift').b$('addGift'),
			$.sb().bEn('gifts().length > 0')
	).A()
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
		}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	}
	ko.b(new Gift([
		{name: "Tall Hat", price: "39.95"},
		{name: "Long Cloak", price: "120.00"}
	]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}
NEST = function () {
	$.x('x').h2('Pp')
	Per = function (n, ch) {
		this.n = n
		this.ch = $oa(ch)
		this.A = function () {
			this.ch.push('new ch ' + $r())
		}
	}
	peep = [
		new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
		new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
		new Per("Charles", ["Cayenne", "Cleopatra"])
	]
	$.uLE('peep',
			$.d([  // name has length children
				$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
				//new
				$.a$('New', 'A')
			]),
			$.uLE('ch',
					$.spT(), //child name
					$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
			)
	)
	$.cbC('showDT').a2Lb('Show time:')
	//anonymous vm
	ok({peep: peep, showDT: $o()})
}
TPLIST = function () {
	$.x()
	Meals = [{m: "sand", p: 0}, {m: "lobst", p: 34.95}, {m: "zebra", p: 290}]
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
				$.td([
					$.sl().b({o: 'Meals', ot: 'meal'})
				]),
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
	$.x('o')
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
	ok(new Lst())
}
BTRLST = function () {
	$.x('o')
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
DIRT = function () {
	$.z('g').fm() //KOMASTERPIECE
	$.cm = $.Cm = function (cms, cc) {
		cms.push({comment: cc})
	}
	$.spT = function (a) {
		return $.sp().b('text', a)
	}
	d = $.d('z')//.mar(20)
			.bE('m').A(
			$.h1().C('y', 'c').A(
					$.spT('message'), $.sp(' '), $.spT('score'),
					s1.A($.h2().A($.ip(400), $.bt('new r'))),
					$.h2().bE('responses').C('r').A(
							s1.A($.spT('response')),
							s2.A($.h4(
									//$.iP(400),
									$.bt('new c'))),
							$.h4().C('b').bE('comments').A(
									s2.A($.spT('comment'))
							)
					)
			),
			$.br(),
			$.br()
	)
	ko.b({
		m: ko.oa(messages = [{
			message: 'zi', score: 100, responses: [
				{
					response: 'good coder',
					comments: [{comment: '..eh'}]
				},
				{response: 'cool girl'}
			]
		},
			{
				message: 'yano', score: 3,
				responses: [{
					response: 'is cool guy',
					comments: [{comment: 'hi'}, {comment: 'hello'}]
				},
					{response: 'a'}, {response: 'b'}, {response: 'fun'}]
			},
			{
				message: 'is awesome', score: 0, responses: [
				{response: 'afsdafsd'}]
			},
			{
				message: 'lame', score: 20, responses: [
				{response: 'weird', comments: [{comment: 'not!!!!1'}]},
				{response: 'lamer', comments: [{comment: 'fuck ya'}]}]
			},
			{message: 'rocks', score: 4, responses: []}
		]),
		responses: ko.oa([
			{response: 'one'},
			{response: 'two'}
		])
	})
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
KOFL = function () {
	
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
}//???
KOFLM = function () {
	$.z('x')
	d = $.dI('hover').A(
			$.a().A(
					$.i('me').bT('matterId')
			)
	)
	d.mouseover(function () {
		var d = this
		//Show the div onmouseover.
		$l("!!!")
		$(d).next("#box").gg()
	})
	d.mouseout(function () {
		function onMouseOut(obj) {
			
			//d
			//Hide to div onmouseout
			//Todo:none
		}
	})
	$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
			$.li().A(d,
					$.dI('box').css('display', 'none').A(
							$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
			),
			$.li().bT('matterTitle'),
			$.li().bT('matterComment')
	)))
}
LIST = function () {
	$.x('z')
	f = $.f().A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
	f.bSb('addItem')
	$.d().A(f,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						so: 'selectedItems'
					})
			),
			$.d().A(
					$.bt('remove').b({
						c: 'removeSelected',
						e: 'selectedItems().length>0'
					}),
					$.bt('sort').b({
						c: 'sortItems',
						e: 'allItems().length>1'
					}))
	)
	ok({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			$l('addItem')
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(o.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			o.allItems.sort()
		}
	})
}
BARN = function () {
	$.x()
	$.ulE('PL', [$.li([
		$.sp('Planet: '),
		$.b().bT('n'),
		$.dI('cap', [$.pT('cap.n')])
	])])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}
KOFL = function () {
	
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
}//???
KOFLM = function () {
	$.z('x')
	d = $.dI('hover').A(
			$.a().A(
					$.i('me').bT('matterId')
			)
	)
	d.mouseover(function () {
		var d = this
		//Show the div onmouseover.
		$l("!!!")
		$(d).next("#box").gg()
	})
	d.mouseout(function () {
		function onMouseOut(obj) {
			
			//d
			//Hide to div onmouseout
			//Todo:none
		}
	})
	$.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
			$.li().A(d,
					$.dI('box').css('display', 'none').A(
							$.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
			),
			$.li().bT('matterTitle'),
			$.li().bT('matterComment')
	)))
}
BBVP0 = function () {
	$.x('x', 'bb view people')
	vw = _V({
		t: 'ul',
		i: function () {
			this.$el.C('y')
		},
		r: function () {
			var el = this.$el.E()
			_.e(this.collection, function (p) {//$('#peep')
				el.A(
						$.li().A(p.n + '(' + p.a + ')')
				)
			})
			return this
		}
	})({cl: peep})
	$.A(vw.r().el)
	_.in(function () {
		peep.pop();
		vw.r()
	})
	vw = $.ulV({
		i: function () {
			this.q.C($r())
		},
		r: function () {
			var el = this.q.E()
			this.cl(function (p) {
				el.A($.li().A(p.n + '(' + p.a + ')'))
			})
			return this
		}
	})({cl: peep})
	$.A(vw.r().q)
	_.in(function () {
		peep.pop();
		vw.r()
	}, '*')
}
REN = WOB = VIEWRENDER = function () {
	ul = $.ul().id('peep')
	vw = {
		ren: function () {
			$('#peep').E()
			_.e(peep, function (p) {
				$('#peep').A('<li>' + p.n + '(' + p.a + ')</li>')
			})
		}
	}
	vw.ren()
	_.in(function () {
		peep.pop();
		vw.ren()
	}, '*')
};
KOOA = function () {
	$.x()
	OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
	$.dE('peep', [$.p(
			$.spT('f'), ' ', $.spT('l')
	)])
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD = function () {
	$.x('x', 'course')
	OK({
		cl: $oa(),
		a: function () {
			this.cl.p({
				n: 'j', c: $r()
			})
			return this
		}
	})
	$.s$('a', 'play'); //the order of these mets should reverse
	$.U('cl', [
		'name is ', $.sT('n'), ' and gusta ', $.sT('c')
	])
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
DELETE1 = function () {
	$.x('kkk')
//bind bt 'click' to parent.rem
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
ADD11 = function () {
	OK({
		cl: $oa(),
		a: function () {
			this.cl.p({
				n: 'j', c: $r()
			})
			return this
		}
	})
	$.s$('a', 'play'); //the order of these mets should reverse
	$.U('cl', [
		'name is ', $.sT('n'), ' and gusta ', $.sT('c')
	])
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ROOT11 = function () {
	$.x('x')
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	ok({
		fs: ['I', 'A', 'Se', 'Sp'],
		chFI: ko.o(),
		gtf: function (f) {
			$l('click: ' + 'f: ' + f + ', this: ' + this)
			f = f || 'frog'
			vm.chFI(f)
		}
	})
}
BARN1 = function () {
	$.ulE('PL', [$.li([
		$.sp('Planet: '),
		$.b().bT('n'),
		$.dI('cap', [$.pT('cap.n')])
	])])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}
KOOA11 = function () {
	$.x()
	OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
	$.dE('peep', [$.p(
			t$('f'), ' ', t$('l')
	)])
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
LISTT = function () {
	f = $.f().A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
	f.A($.sm('addItem'))
	$.d().A(f,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						so: 'selectedItems'
					})
			),
			$.d().A(
					$.bt('remove').b({
						c: 'removeSelected',
						e: 'selectedItems().length>0'
					}),
					$.bt('sort').b({
						c: 'sortItems',
						e: 'allItems().length>1'
					}))
	)
	ok({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			$l('addItem')
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(o.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			o.allItems.sort()
		}
	})
}
ROOT = function () {
	$.x('x')
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	ok({
		fs: ['I', 'A', 'Se', 'Sp'],
		chFI: ko.o(),
		gtf: function (f) {
			$l('click: ' + 'f: ' + f + ', this: ' + this)
			f = f || 'frog'
			vm.chFI(f)
		}
	})
}
e$ol = ol$e = $ol$e = $ol.e$ = $.ol.e$ = $.olE = $.olBe = function (a, b) {
	var ol = $.ol().e$(a)
	if (b) {
		ol.A(b)
	}
	return ol
}
ko.t$ = t$ = sp$t = sp_t$ = $.sp.t$ = function () {
}
ko.v$ = function () {
}
e$ = function (arr) {
	$.d().e$()
}
e$example = function () {
	ul_e$([{n: 'j'}, {n: 'r'}, {n: 'y'}], [$.li()])
}
e$ul = ul$e = $ul$e = $ul.e$ = $.ul.e$ = $.ulE = $.uE = function (a, b, c) {
	var g = G(arguments)
	var ul = $.ul().e$(a)
	if (c) {
		b = $.li(g.r)
	}
	else if (O(b) && !A(b)) {
		b = [b]
	}
	if (A(b)) {
		_.e(b, function (el) {
			ul.A(el)
		})
	}
	else if (S(b)) {
		ul.A(b)
	}
	return ul
}
$.li.tb$ = $.liBt = function (a) {
	return $.li().t$(a)
}
$.tB.e$ = function (a, b) {
	var g = G(arguments), tB = $.tB()
	tB.e$(a)
	if (A(b)) {
		_.e(b, function (el) {
			tB.A(el)
		})
	}
	else {
		if (true) {
			_.e(g.r, function (q) {
				tB.A((q[0].tagName == "TD") ? q : $.td().A(q))
			})
		}
	}
	return tB
}
$.tBTr = $.tBT = function (arr) {
	var g = G(arguments)
	var tr = $.tr()
	g.r(function (q) {
		tr.A(q)
	})
	return $.tB().e$(arr).A(tr)
}
$.ko.table = function (arrBindingName, ch) {
	return $.t([
		$.tH(ch.tH),
		$.tB(arrBindingName).e$('peep')
	]).A(ch.tr)
}
$.dE = function (a, b) {
	var d = $.d().e$(a)
	if (A(b)) {
		_.e(b, function (el) {
			d.A(el)
		})
	}
	else if (S(b)) {
		d.A(b)
	}
	return d
}
$.uUl = $.U = function () {
	var g = G(arguments)
	//return $.ul.e$(g.f, $.li(g.r))
	var li = $.li(g.r)
	return $.u().e$(g.f).A(li)
}
// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
AVAILSRV = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	M$ = function (ob) {
		ob = O(ob) ? ob : {}
		var Md, md
		Md = bb._M(ob)
		md = new Md(ob)
		return md
	}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	AVAIL = function () {
		$.x('x');
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
}
AVAIL = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = Bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = Bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	Bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
}
RESTPERSIST0 = function () {
	
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
	Td = $M({df: {tt: '', completed: false}})
	TdsCl = $Cl({md: Td, url: '/tds'})
	tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
}
SAVEMDTOSERVER = function () {
	
	
	// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
	//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
	// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2);
	td2.s('tt', 'go fishing');
	td2.S(); // sends HTTP PUT to /tds/2
	tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
	//  Deleting mds from server
	//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2)
	td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
	// Calling destroy onMd will return false if md isNew:
	td = new Bb.Md();
	$l(td.destroy())  // false
	// Options
	// Each RESTful API met accepts a variety of ops.
	//  Most importantly, all mets accept success and error cbs which can be used
	//  to custize handling of server responses.
	//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
	//  instead of entire md; i.e. md.save(attrs, {patch: true}):
	// Save partial using PATCH
	md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
	md.save();
	md.save({b: 2, d: 4}, {patch: true});
	$l(this.syncArgs.met);
	// 'patch'
	// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
}
OBJECT = function () {
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		s1.A('your objects', $.br(2), t = $.ip(),
				$.bt('new object', function () {
					$.P('newObj',
							{t: t.V()})
				}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//http://robdodson.me/some-more-backbone-dot-js-basics/
ITEMS = function () {
	Ap = {M: {}, V: {}, C: {}}
	$Ro = Router = $$R({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}
OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
DUDE = BKSARR = LS1 = function () {
	$Ms('LS1')
	Bks = Bb.C.x({
		model: Bb.M,
		localStorage: new Bb.LocalStorage('bks')
	})
	bks = new Bks(bksArr)
	Dude = Bb.M
	d = new Dude()
	d1 = Dude.c
	//bks.save()
}
bbLocStorPLUG = function () {
	bbLocStorPLUG1 = function () {
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
	(function (root, factory) {
		if (typeof exports === 'object' && typeof require === 'function') {
			module.exports = factory(require("backbone"));
		} else if (typeof define === "function" && define.amd) {
			// AMD. Register as an anonymous module.
			define(["backbone"], function (Bb) {
				// Use global variables if the locals are undefined.
				return factory(Bb || root.Bb);
			});
		} else {
			factory(Bb);
		}
	}(this, function (Bb) {
// A simple module to replace `Bb.sync` with *localStorage*-based
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
// window.Store is deprectated, use Bb.LocalStorage instead
		Bb.LocalStorage = window.Store = function (name, serializer) {
			if (!this.localStorage) {
				throw "Bb.localStorage: Environment does not support localStorage."
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
		extend(Bb.LocalStorage.prototype, {
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
// window.Store.sync and Bb.localSync is deprecated, use Bb.LocalStorage.sync instead
		Bb.LocalStorage.sync = window.Store.sync = Bb.localSync = function (method, model, options) {
			var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
			var resp, errorMessage;
			//If $ is having Deferred - use it.
			var syncDfd = Bb.$ ?
					(Bb.$.Deferred && Bb.$.Deferred()) :
					(Bb.Deferred && Bb.Deferred());
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
					if (Bb.VERSION === "0.9.10") {
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
					if (Bb.VERSION === "0.9.10") {
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
		Bb.ajaxSync = Bb.sync
		Bb.getSyncMethod = function (model, options) {
			forceAjaxSync = options && options.ajaxSync
			if (!forceAjaxSync && (result(model, 'localStorage') ||
					result(model.collection, 'localStorage'))) {
				return Bb.localSync
			}
			return Bb.ajaxSync
		}
// Override 'Bb.sync' to default to localSync,
// the original 'Bb.sync' is still available in 'Bb.ajaxSync'
		Bb.sync = function (met, md, op) {
			return Bb.getSyncMethod(md, op).apply(this, [met, md, op])
		}
		return Bb.LocalStorage
	}))
}
$g = $get = function (a) {
	return _lS.getItem(a)//= lG
}
error = _$s = $set = function (key, val) {
	_lS.setItem(key, val);
	return val
	//=lS
}
$k = $key = function (key) {
	return (S(key)) ? $g($k(key)) :
			_lS.key(key)
}
$len = function () {
	return _lS.length //= lL
}
$rm = function (a) {
	var i = _lS.getItem(a)
	_lS.removeItem(a)
	return i //= lR
}
$clr = function () {
	_lS.clear();
	return _lS//= lX
}
$store = function (name) {
	return new Backbone.LocalStorage(name)
}
Storage = function (name) {
	return $C({
		localStorage: new Bb.LocalStorage(name)
	})
}
// http://www.sitepoint.com/building-list-jquery-local-storage/
// extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
BBLS = function () {
	bbLocStorPLUG()
	Cl = bb.C.e({
		localStorage: new bb.LocalStorage('clN')
	})
}
BUC51 = BUCKYVID51 = function () {
//buck is just a local storage example
//https://www.youtube.com/watch?v=Kn_AIiV6Cp0&index=53&list=PL081AC329706B2953
	$CSS(bucCSS)
	$.f().a2($.scI('leftbox')).A(
			$.p(['(key) One: ', $.ip().id('one')]),
			$.p(['(value) Two: ', $.ta().id('two')]),
			$.bt('save', function () {
				$s('one', $.V('one'))
				$('#rightbox').html(
						'one: ' + $g('one') + ', ' +
						'two: ' + $g($s('two', $.V('two'))))
				return false
			})
	)
	$.scI('rightbox', ['nothing!'])
}
BUC52 = function () {
	$CSS(bucCSS)
	$.scI('leftbox', [$.f([$.p(['(key) One: ', $.ip().id('one')]),
		$.p(['(value) Two: ', $.ta().id('two')])]).A(
			$.bt('clr', function () {
				$clr()
				display()
				return false
			}),
			$.bt('save', function () {
				var one = $.V('one')
				var two = $.V('two')
				$set(one, two)
				display()
				return false
			})
	)])
	$.scI('rightbox', ['nothing yet hoss!'])
	display()
	function display() {
		rBox = $('#rightbox').html('')
		_.t($len(), function (i) {
			var key = $key(i)
			val = $g(key)
			var str = 'key:  ' + key + ',  val: ' + val
			rBox.A(str, $.br())
		})
	}
}
STORAGE = function () {
	z()
	saveFromLocStor = function () {
		i = ta().id('input')
		i.q.value = localStorage.getItem('myText') || ''
		i.o('u', function () {
			localStorage.setItem('mytext', i.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		i = qi('input')
		I(function () {
			i.q.value = localStorage.getItem('myText') || ''
		}, 50)
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage.setItem('mytext', i.value)
		}, false)
	}
}
MIN111 = function () {
	bbLocStorPLUG()
	Note = M$({
		defaults: function () {
			return {
				content: "Note created on " +
				new Date().toISOString()
			}
		}
	})
	NoteCollection = C$({
		model: Note,
		localStorage: $store("choose-some-identifier")
	})
	myNotes = new NoteCollection();
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.save()
	n = 0
	myNotes.models.forEach(function (model) {
		$l("Model in collection: "
				+ model.get("content")
				+ n++
		);
	})
	$.bt('clr', function () {
	})
}
GOODGIRL = function () {
	saveFromLocStor = function () {
		$ta = ta().id('input')
		$ta.q.value = $g('myText') || ''
		$ta.o('u', function () {
			$s('mytext', $ta.value)
		}, false)
	}
	readDatFromOtherPageLoc = function () {
		//put windows side by side and watch one update the other
		_.ev(.1, function () {
			$('#input').val(
					$g('myText') || '')
		})
	}
}
LOCALSTORAGEYANOMODALPHA = function () {
	$ls = L = function (k, v0) {
		if (D(v0)) {
			L.s(k, v0)
		}
		var fn = function (v) {
			if (U(v)) {
				return L.g(k)
			}
			L.s(k, v)
			return fn
		}
		return fn
	}
	L.g = function (k) {
		return _lS.getItem(k)
	}
	L.s = function (k, v) {
		_lS.setItem(k, v)
		return L
	}
	L.r = L.rm = function (k) {
		var vOld = _lS.getItem(k)
		_lS.removeItem(k)
		return vOld
	}
	L.l = L.L = function () {
		return _lS.length
	}
	L.clr = L.x = function () {
		_lS.clear()
		return L
	}
	$.x('r', 'localStorage')
	$ls.s('food', 'zebra')
	//  j = $ls('jason'); j('eats')
	// j = $ls('jason')('eats')
	j = $ls('jason', 'eats')
	$.h1('i didnt know that jason ' +
	j() + ' ' + $ls.g('food') + '!')
}
function sessionStorageUseless() {
	ssS = sessionStorage
	sR = function (a) {
		var i = ssS.getItem(a)
		ssS.removeItem(a)
		return i
	}
	sS = function (a, b) {
		ssS.setItem(a, b);
		return ssS
	}
	sG = function (a) {
		return ssS.getItem(a)
	}
	sL = function () {
		return ssS.length
	}
	sX = function () {
		ssS.clear();
		return ssS
	}
	saveFromSesStor = function () {
		i = ta().id('input')
		i.q.value = sessionStorage.getItem('myText') || ''
		i.o('u', function () {
			sessionStorage
					.setItem('mytext', i.value)
		}, false)
	}
}
ADDER = function () {
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
//bind bt 'click' to parent.rem
ADDER = function () {
	$.x()
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
// kob= ko.observable.prototype; kob.rm= kob.remove
MENU = function () {
	$.z('b').h2('Your seat reservations')
	$.bt('reserve').b$('A')
	AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
	$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
					$.tr().A(
							$.td().bT('n'),
							$.td().bT('m().n'),
							$.td().A(
									$.sl().b({
										o: '$root.AM',
										ot: 'm'    //v : 'm',
									})
							),
							$.td().bT('m().p')
					)
			)
	)
	ko.b({
		seats: $oa([
			{n: 'Jo', m: ko.o(AM[0])},
			{n: 'Bo', m: ko.o(AM[1])}]),
		A: function () {
			vm.seats.push({
				n: 'hahaha',
				m: ko.o({n: 'noodles', p: 30})
			})
		}
	})
}
CHERRY = function () {
	$.x('o')
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'), $.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
	ok({
		wants: ko.o(1),
		flav: ko.oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
FOREACH = function () {
	z()
	_d().b('fe', 'p')(
			pg(
					sp().b('t', 'f'),
					sp(' '),
					sp().b('t', 'l'))
	).a()
	vm = {
		p: ko.oa([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}])
	}
	ko.ab(vm)
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
KOGRID = function () {
	$.z().f().at({action: '/someServerSideHandler'}).A(
			$.p('You have asked for').A(
					$.sp('&nbsp;').bT('gifts().length'),
					'gift(s)'),
			$.t().bVs('gifts().length > 0').A(
					$.tH().A(
							$.tr().A(
									//tHR
									$.th().A('Gift name'),
									$.th().A('Price')
							)),
					$.tB().bE('gifts').A(
							$.tr().A(  //tBR
									$.td().A($.ip().K('required').b({v: 'name', u: true})),
									$.td().A($.ip().K('required number')
											.b({v: 'price', u: true})),
									$.td().A(
											$.a('delete').b$('$root.removeGift')
									)))),
			$.bt('add gift').b$('addGift'),
			$.sb().bEn('gifts().length > 0')
	).A()
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
		}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	}
	ko.b(new Gift([
		{name: "Tall Hat", price: "39.95"},
		{name: "Long Cloak", price: "120.00"}
	]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}
SPAM2 = function () {
	z()
	cbKO('Send me spam', 'wantsSpam').A()
	$.div().koBind('vs', 'wantsSpam')(
			'Preferred flavors of spam:',
			$.div().A(cbKO('Cherry', 'flav', 'cherry')),
			$.div().A(cbKO('Almond', 'flav', 'almond')),
			$.div().A(cbKO('Glut', 'flav', 'glut'))
	).A()
	vm = {
		wantsSpam: ko.o(true),
		flav: ko.oa(["cherry", "almond"])
	}
	ko.aB(vm)
	//viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
//bind cb 'checked' to boolean
SPAM = function () {
	$.x()
	$.cbC('spam').a2($.p('spam? '))
	$b({spam: ko.o(1)})
	_.in(2, function () {
		vm.spam(0);
		$.c$()
	})
}
SPAM = function () {
	$l('spam')
	z()
	c = cbKO('Send me spam', 'wantsSpam').A()
	vm = {wantsSpam: ko.o(true)}
	ko.aB(vm)
}
LIST = function () {
	$.x('z')
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
	$.d().A(f,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						so: 'selectedItems'
					})
			),
			$.d().A(
					$.bt('remove').b({
						c: 'removeSelected',
						e: 'selectedItems().length>0'
					}),
					$.bt('sort').b({
						c: 'sortItems',
						e: 'allItems().length>1'
					}))
	)
	ok({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			$l('addItem')
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(o.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			o.allItems.sort()
		}
	})
}
LIST = function () {
	$.x('z')
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').bE('itemToAdd().length>0')
	)
	$.d().A(f,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						so: 'selectedItems'
					})
			),
			$.d().A(
					$.bt('remove').b({
						c: 'removeSelected',
						e: 'selectedItems().length>0'
					}),
					$.bt('sort').b({
						c: 'sortItems',
						e: 'allItems().length>1'
					}))
	)
	ok({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			$l('addItem')
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(o.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			o.allItems.sort()
		}
	})
}
//sort, remove
BTRLST1 = function () {
	$.x('o')
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
	$.x('o')
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
function classic() {
	BETTERLIST = function () {
		z()
		$.d()(
				fo().b('S', 'addItem')(
						sp('add item'),
						tx().b({
							v: 'itemToAdd'//,vu:'afterkeydown'
						}),
						sm('add').b('ea', 'itemToAdd().length>0')),
				_d()(
						sp('Your values:'),
						sel().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				_d()(
						bt('remove').b({
							c: 'removeSelected',
							ea: 'selectedItems().length>0'
						}),
						bt('sort').b({
							c: 'sortItems',
							ea: 'allItems().length>1'
						}))
		).a()
		ko.ab(o = BLM())
	}
}
tabl()
function tabl() {
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
	KOGRID = function () {
		$.z()
		f = $.f().at({action: '/someServerSideHandler'})
		f.A(
				$.p('You have asked for').A($.sp('&nbsp;').bT('gifts().length'), 'gift(s)'),
				$.t().bVs('gifts().length > 0').A(
						$.tH().A($.tr().A(//tHR
								$.th().A('Gift name'),
								$.th().A('Price'))),
						$.tB().bE('gifts').A($.tr().A(  //tBR
								$.td().A($.ip().K('required').b({v: 'name', u: true})),
								$.td().A($.ip().K('required number')
										.b({v: 'price', u: true})),
								$.td().A($.a('delete').b$('$root.removeGift'))))),
				$.bt('add gift').b$('addGift'),
				$.sb().bEn('gifts().length > 0')
		).A()
		ok(new Gift([
			{name: "Tall Hat", price: "39.95"},
			{name: "Long Cloak", price: "120.00"}
		]))
		// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
	}
//broken
	MENU = function () {
		$.z('b').h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().bE('seats').A(
						$.tr().A(
								$.td().bT('n'),
								$.td().bT('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().bT('m().p')
						)
				)
		)
		ok({
			seats: $oa([
				{n: 'Jo', m: ko.o(AM[0])},
				{n: 'Bo', m: ko.o(AM[1])}]),
			A: function () {
				vm.seats.push({
					n: 'hahaha',
					m: ko.o({n: 'noodles', p: 30})
				})
			}
		})
	}
}
HLF = HIGHLIGHTFADE = function () {
	$s({
		_ct: {
			C: 'r', P: 10
			//B:'40px solid green'
		},
		_gg: {C: 'o', w: 100, h: 100}
	})
	// ?? hides or shows an el  by ang its bgC 1st // bgC ="#ffff99"
	d = $('<div>').A().A('Click to tog ').K('gg')
	d.a2($.dK('ct'))
	$.$(function () {
		$l('$.$')
		$(".gg").toggle("highlight")
	})
}
NV1 = UITAB = function () {
	$.d([
		$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
			$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
			$('<li><a href="#fragment-3"><span>Three</span></a></li>')
		]),
		$.dI('fragment-1').A(
				$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
		$.dI('fragment-2').A(l1),
		$.dI('fragment-3').A(l2)
	]).tabs()
	alt = function () {
		NV8 = UITAB = function () {
			z()
			$.d([
				$.ul([$('<li><a href="#fragment-1"><span>One</span></a></li>'),
					$(' <li><a href="#fragment-2"><span>Two</span></a></li>'),
					$('<li><a href="#fragment-3"><span>Three</span></a></li>')
				]),
				$.dI('fragment-1').A(
						$('<p>First tab is active by default:</p> <pre><code>$( "#tabs" ).tabs(); </code></pre>')),
				$.dI('fragment-2').A(l1),
				$.dI('fragment-3').A(l2)
			]).tabs()
		}
	}
}
NV2 = ACCORD = ACC = function () {
	ul = $.ul([
		$.li('List item 1'),
		$.li('List item 2'),
		$.li('List item 3')
	])
	$.d([
		$.h3('Section 1'), $.d([$.p(l1)]),
		$.h3('Section 2'), $.d([$.p(l2)]),
		$.h3('Section 3'), $.d([$.p(l1), ul])
	]).accordion()
	alt = function () {
		NV5 = UI54 = ACCORD = ACC = function () {
			z()
			ul = $.ul([
				$.li('List item 1'),
				$.li('List item 2'),
				$.li('List item 3')
			])
			$.d([
				$.h3('Section 1'), $.d([$.p(l1)]),
				$.h3('Section 2'), $.d([$.p(l2)]),
				$.h3('Section 3'), $.d([$.p(l1), ul])
			]).accordion()
		}
	}
}
UIBT = IP6 = UI15 = UIBUT = function () {
	$.sp('span btb').button()
	$.a('a btb').button()
	$.bt('button label')
	$("button").button()
	$.d('r', 50, 60)
	$.d('b', 70, 50).button()
	_.in(3, function () {
		$.C('o')
		$.d().A('hello').WH(70, 50).button()
		$.d().A('hello').WH(70, 50).H(200).css({
			borderColor: 'blue',
			borderStyle: 'dashed',
			borderWidth: 20
		})
	})
}
UI0 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
NV5 = UISLMENU = USM = function () {
	$.fn.slM = function () {
		var g = G(arguments)
		this.selectmenu.apply(this, g)
		return this
	}
	$CSS({
		fieldset: {B: 0},
		label: {d: 'b', M: '30px 0 0 0'},
		select: {w: 200},
		_overflow: {h: 200}
	})
	$.d([$.f().at('action', '#').A($('<fieldset>').A(
			$.lb('select a speed').for('speed'),
			$.sl().id('speed').n('speed').A(
					$.op('slower'), $.op('slow'),
					$.op('medium').at('selected', 'selected'),
					$.op('fast'), $.op('faster')),
			$.lb('Select a file').for('files'),
			$.sl().n('files').id('files').A(
					$.og("Scripts").A(
							$.op('jquery', 'jquery'),
							$.op('ui.juqery.jus', 'jqueryui')),
					$.og("Other files").A(
							$.op('some unknown file', 'somefile'),
							$.op('Some other file w long option text', 'someotherfile'))),
			$.lb('Select a number').for('number'),
			$.sl().n('number').id('number').A(
					$.op('1'), $.op('2').at('selected', "selected"),
					$.op('3'), $.op('4'), $.op('5'), $.op('6'), $.op('7'),
					$.op('8'), $.op('9'), $.op('10'),
					$.op('11'), $.op('12'), $.op('13'), $.op('14'),
					$.op('15'), $.op('16'), $.op('17'), $.op('18'),
					$.op('19')
			)))]).K('demo')
	$("#speed").selectmenu()
	$("#files").selectmenu()
	$("#number").selectmenu().selectmenu("menuWidget").K("overflow")
}
JU3 = FID = function () {
	$.wg("jy.simp", {
		options: {text: ""},
		_setOption: function (k, v) {
			if (k === "text") {
				this.element.text(v)
			}
			this._trigger("change")
		}
	})
	a = $.a('Hello World')
			.simp().on("simpchange", function () {
				//p.html( a.simp("option", "text"))
			})
	// p = $.p()
	$.bt('Change Text', function () {
		a.simp("option", "text", "new text")
	}).button()
}
JU333 = OVERLAY = FADEIN = FIN = function () {
	$s({
		bd: {B: 0, M: 0},
		'_ui-widget-overlay': {
			bg: 'repeat-x scroll 50% 50% #AAA', al: '0.3'
		},
		'_ui-widget-overlay': {
			h: '100%', l: 0,
			ps: 'a', t: 0, w: '100%'
		}
	})
	ovL = $.dK("ui-overlay", [
		$.dK("ui-widget-overlay")]).hd().fI()
	$('body').resize(function () {
		ovL.WH($(document).W(), $(document).H()).hd().fI()
	})
}
DGG = DRAGGY = function () {
	$.d('r', 500, 500).K('sel')
	$('.sel').dgb({
		delay: 1000,
		distance: 100,
		helper: "clone",
		addClasses: false,
		snapMode: "inner",
		grid: [50, 20],
		snap: true
	})
}
APP2 = function () {
	k = $('.k')
	k.dgb({appendTo: "body"})
	k.dgb({helper: "clone"})
}
TABSELIX = function () {
	$s({
		ip: {bor: '1px solid #000'}, d: {pad: 5}
	})
	$.d([
		'no tabindex'
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d([$.ip().tIx(5, '+tIx')
	])
	$.d(['-tIx',
		$.ip().tIx(-1, '-tIx')
	])
	$(":tabbable").bdC("red")
}
MENU1 = function () {
	$s({
		'.ui-menu': {
			width: 200,
			C: 'r'
		}
	})
	$.ul().A(
			$.li('Item 1'),
			$.li('Item 2'),
			$.li().A(
					'Item 3',
					$.li('Item 3-1'),
					$.li('Item 3-2'),
					$.li('Item 3-3'),
					$.li('Item 3-4'),
					$.li('Item 3-5')),
			$.li('Item 4'),
			$.li('Item 5')
	).id("menu")
	$("#menu").menu()
}
JUSTREDDIV = IXSTAT = function () {
	$.x()
	k = $.d('r', 500, 200)
	// to clb bT-like elS. Applies clb df ct stys to el
	// and its ch t, lks, and icons.
	k.K('.ui-state-default')
	//   on mv to clb bt-oid. Applies "clickable hover" ct stys
	// to an element and its child text, links, and icons.
	k.K('.ui-state-hover')
	//  on kb fcs to clb btoids. Applies "clickable focus"
	// ct stys  to el and its child text, links, and icons.
	k.K('.ui-state-focus')
	//   on md to clb btoids. Applies "clickable active" cot stysto an el
	// and its ch t, lks, and icons.
	k.K('.ui-state-active')
}
DATESCR = function () {
	$.x('b', 'jqui')
	('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
	('<script src="/jquery-ui.min.js">').A()
	d = $.d('b', 400, 400).A(
			ip = $.ip('date').datepicker()
	).pad(20)
}
DROP = function () {
	$CSS({
		$dgb: {
			w: 100, h: 50, pad: '0.5em', fl: 'l',
			mar: '22px 5px 10px 0'
		},
		$dpb: {w: 130, h: 90, pad: '0.5em', mar: 10, fl: 'l'},
		div: {w: 400, h: 300, C: 'r', c: 'y'},
		$dgb2: {w: 100, h: 50, pad: '0.5em', mar: '0px 5px 10px 0'},
		'#dpb2,#dpb3,#dpb4,#dpb5': {w: 12, h: 90, pad: '0.5em', fl: 'l', mar: 10}
	})
	$.d().id('dgb').K('ui-widget-content').A($.p('Drag me'))
	$.d().id('dpb').K('ui-widget-header').A($.p('here'))
	$("#dgb").dgb()
	$("#dpb").dpb()
	Dpb(2, 'Drag me to my target', 'ui-widget-content')
	Dpb(2, 'here');
	Dpb(3, "dsbld !drop");
	Dpb(4, 'tol toch');
	Dpb(5, 'tol fit')
	$("#dgb2").dgb()
	$("#dpb2").dpb({
		drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb3").dpb({
		disabled: "true", drop: function (ev, ui) {
			$(this)
					.K("ui-state-highlight").find("p").html("Dpd")
		}
	})
	$("#dpb4").dpb({
		tolerance: 'touch', drop: function (ev, ui) {
			$(this).K("ui-state-highlight").find("p").html("Dpd w tch")
		}
	})
	$("#dpb5").dpb({
		tolerance: 'fit', drop: function (ev, ui) {
			$(this).K("ui-state-highlight")
					.find("p").html("Dpd whn fulfit")
		}
	})
	function Dpb(id, pT, k) {
		k = k || "ui-widget-header"
		return $.d().id('dpb' + id).K(k).A($.p(pT))
	}
}
CRAZYWEIRD = POSI = function () {
	$s({
		$par: {
			C: 'b', ta: 'c', w: '60%', ht: 40,
			mar: '10px auto', pad: 5, bor: '1px solid #777'
		},
		_psb: {
			p: 'a', ds: 'b',
			r: 0, b: 0, C: 'r', ta: 'c'
		},
		$psb1: {w: 75, h: 75},
		$psb2: {w: 120, h: 40},
		'select,input': {mL: 15}
	})
	$.d([$.p('This is the ps par el')]).id('par')
	$.dK('psb').id("psb1")
	$.p('to ps')
	$.d([$.p('to ps2')]).K('psb', 'psb2')
	$.d().mgT(75).pad(20), 'ps...'
	$.d().pdB(20)
	$.b().A('my:')
	$.sl('my_hz', 'left', 'center', 'right')
	$.sl("my_vrt", 'top', 'center', 'bottom')
	$.d().pdB(20)
	$.p().A('at:')
	$.sl("at_hz", 'left', 'center', 'right')
	$.sl("at_vrt", 'top', 'center', 'bottom')
	$.d([
		$.b().A('cl:'),
		$.sl('cl_vrt', 'flip', 'flit', 'flipfit', 'none'),
		$.sl('cl_hz', 'flip', 'flit', 'flipfit', 'none')
	]).pdB(200)
	$("select, input").bind("click keyup change", ps)
	$("#par").dgb({drag: ps})
	$(".psb").al(.5)
	ps()
	function ps() {
		$(".psb").ps({
			of: $("#par"),
			my: $("#my_hz").v() + $("#my_vrt").v(),
			at: $("#at_hz").v() + $("#at_vrt").v(),
			collision: $("#cl_hz").v() + $("#cl_vrt").v()
		})
	}
}
BLANK = LAYOUTHELP = function () {
	k = $('.k')
	k.K('ui-helper-hidden')//  Hides content visually  and from assistive technologies, such as screen readers.
	k.K('ui-helper-hidden-accessible')// Hides cont
	k.K('.ui-helper-reset')// A basic style reset for DOM nodes. Resets pad, mar, t-dec, ls-sty
	k.K('.ui-helper-clearfix')// Appls float, wrapg pops to par els
	k.K('.ui-front')// z-ix to mang  stackg  of mult wids on screen.  See  stacking ELS
	k.K('.ui-widget')// outer ct of all wids. Appls fo-fam  and fZ to wids
	k.K('.ui-widget-header')// : appl2  hdr conts. Appls hdr cont sty to el and its ch t,lks, and icons.
	k.K('.ui-widget-content')
	// : appl2 cont cts. // Appls cont-ct stys to el and its ch t, lks, and icons.
	// (can be appld to par  or sib  of hdr).
}
NOTWORKING = ICONN = function () {
	$.x('y', 'icon')
	$.sp('helllloooo1')
	$.sp('helllloooo2')
			.K("ui-icon ui-icon-arrowthick-1-n")
	k = $.d('k', 500, 500)
	k.K('ui-icon ui-icon-triangle-1-e')
	/*
	 Base class to be applied to an icon element.
	 Sets dimensions to a 16px square
	 block,
	 hides inner text,
	 sets background image to
	 "content" state sprite image.
	
	 Note: ui-icon class will be given    different sprite background image
	 depending on its parent container.
	
	 For example,
	 a ui-icon element
	 within a ui-state-default container
	 will get colored according to
	 the ui-state-default's icon color.
	 Icon types
	
	 After declaring a ui-icon class,
	 you can follow up with a second class
	 describing the type of icon.
	 Icon classes generally follow a syntax
	
	
	 */
	//  .ui-icon-{icon type}-{icon sub description}-{direction}.
//             For example, a single triangle icon pointing to the right
	//    .ui-icon-triangle-1-e
	//  ThemeRoller provides
	// full set of CSS framework icons  in  prev col
	//  Hv over them to see the class name.
}
NOTHINGATALL = VLAYSHAD = function () {
	k = $('.k')
	k.K('ui-widget-overlay')
	/*
	
	 Applies 100% width & height dimensions to an overlay screen,
	 along with background color/texture, and screen opacity.
	 k.K('ui-widget-shadow')
	 appy to vlay widg shad els
	 Applies bg    c/texture, cust cor rad, al,
	 top/left ofs and shd "thickness".
	 Thickness is appld via pad  all sides of shad  that
	 set to mat  the dims of the overlay el .
	 Offsets are appld via t and l  margs  (can be pos  or neg ).
	 */
	// https://www.packtpub.com/books/content/jquery-ui-themes-states-cues-overlays-and-shadows
}
ITHINKNOTHING = CORRAD = function () {
	$.x('o')
	$.d('d', 500, 500)
	k = $.d('d', 500, 500)
	/*   k.K('.ui-corner-tl') // corner-radius to top left corner of element.
	 k.K('.ui-corner-tr')// t r cor
	 k.K('.ui-corner-bl')//to bt l corn
	 k.K('.ui-corner-br')// bt r cor
	 k.K('.ui-corner-top')//o both t cors
	 k.K('.ui-corner-bottom')//both bt cors
	 k.K('.ui-corner-right')// both r cors
	 k.K('.ui-corner-left')// both left cors
	 k.K('.ui-corner-all')//all 4 cors
	 */
}
STUCKLOGINFORM = UICT = function () {

//http://www.phpeveryday.com/articles/jQuery-UI-Using-The-Framework-Classes-P986.html
	num = 3
	if (num == 1) {
		$.dK("ui-widget").A(
				$.dK("ui-widget-header ui-corner-top").A(
						$.h2('his is a ui-widget-header container')),
				$.dK("ui-widget-content ui-corner-bottom").A(
						$.p('This is a ui-widget-content container')))
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.a('clickable and selected')),
				$.d([
					$.a('clickable but not selected')
				]).K("ui-state-default ui-corner-all"))
	}
	$('.ui-state-default a').hv(function () {
		$(this).parent().K("ui-state-hover")
	}, function () {
		$(this).parent().xK("ui-state-hover")
	})
	if (num == 2) {
		$.dK("ui-widget").A(
				$.dK("ui-state-default ui-state-active ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"), $.a('clb, seld')),
				$.dK("ui-state-default ui-corner-all").A(
						$.dK("ui-icon ui-icon-circle-plus"),
						$.a('clb, !selected')))
		$(".ui-state-default a").hv(function () {
					$(this).pa().K("ui-state-hover")
				},
				function () {
					$(this).pa().xK("ui-state-hover")
				})
	}
	if (num == 3) {
		$CSS({
			'_ui-form': {w: 470, mar: '0 auto'},
			'_ui-form _ui-widget-header h2': {margin: '10px 0 10px 20px'},
			'_ui-form _ui-widget-content': {padding: 20},
			'_ui-form label, _ui-form input, _ui-form _ui-state-error,_ui-form _ui-icon, _ui-form _ui-state-error p': {fl: 'l'},
			'_ui-form label, _ui-state-error p': {fz: 12, pad: '10px 10px 0 0'},
			'_ui-form _ui-state-error': {pad: 4},
			'_ui-form _ui-state-error p': {'font-weight': 'bold', pT: 5},
			'_ui-form _ui-state-error _ui-icon': {mar: '5px 3px 0 4px'}
		})
		$.dK("ui-widget ui-form").A(
				$.dK("ui-widget-header ui-corner-all").A(
						$.h2('Login Form')),
				$.dK("ui-widget-content ui-corner-all").A(
						$.f().K('ui-helper-clearfix').A(
								$.lb('Username').K("ui-helper-reset"),
								$.d("ui-state-error ui-corner-all").A(
										$.ip(), $.dK("ui-icon ui-icon-alert"),
										$.p('Required field')
												.K("ui-helper-reset ui-state-error-text")))))
	}
	// <link rel="stylesheet" type="text/css" href="css/ui.form.css">
//http://www.w3.org/TR/html4/strict.dtd">
}
LOOKSLIKEHIGHLIGHT = DOESNOTHING = INTX = function () {
	$.x()
	$CSS({
		$d: {C: 'r'}
	})
	k = $('.k')
	// to highlighted/selected els
	// Applies "highlight" ct sty to an el and
	// its ch text, links, and icons.
	k.K('.ui-state-highlight')
	// appl to z msg ct eles. Applies z ct stys to   el
	// and its ch text, links, and icons.
	k.K('.ui-state-error')
	//  appls just z t  c  w/o bg. Can be used on f-lbs, appls z icon c  to ch  icons.
	k.K('.ui-state-error-text')
	//// Appl dimmed al to dsabld UI els,  (adjunct, to an already-styled el)
	k.K('.ui-state-disabled')
	//    apl2 priority-1 bt when need bt hier
	k.K('.ui-priority-primary')
	k.K('.ui-priority-secondary')
	//: Class to be applied to a priority-2 button in situations where button hierarchy is needed.
	j = $('<div>').A($.h3('hello'))
			.id('d').WH(100, 100).A()
			.K('.ui-state-highlight')
	$.d('r', 100, 100).A($.h3('hello'))
}
BROKENMENUMAYBE = HLFDL = function () {
	$.d(['z1']).K('error')
	$.d(['z2']).K('error')
	$.d(['hl1']).K('highlight')
	$.d(['hl2']).K('highlight')
	//   http://jsfiddle.net/774wH/
	function errorHighlight(e, type, icon) {
		if (!icon) {
			if (type === 'highlight') {
				icon = 'ui-icon-info';
			} else {
				icon = 'ui-icon-alert';
			}
		}
		return $(this).each(function () {
			$(this).addClass('ui-widget');
			var h = '<div class="ui-state-' + type + ' ui-corner-all" style="padding:0 .7em;">';
			h += '<p>';
			h += '<span class="ui-icon ' + icon + '" style="float:left;margin-right: .3em;"></span>';
			h += $(this).text();
			h += '</p>';
			h += '</div>';
			$(this).html(h);
		});
	}

//error dialog
	(function ($) {
		$.fn.error = function () {
			errorHighlight(this, 'error');
		};
	})(jQuery);
//highlight (alert) dialog
	$.fn.highlight = function () {
		errorHighlight(this, 'highlight');
	};
	$('.error').error()
	$('.highlight').highlight()
}
// https://msdn.microsoft.com/en-us/magazine/ff706600