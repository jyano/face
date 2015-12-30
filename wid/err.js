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