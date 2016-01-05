MESSAGE_EDITOR_COMPONENT = KOCM = function () {
	ko.rg('msgEd', {
		//'message-editor'
		viewModel: function (params) {
			this.t = this.text = $o(params && params.initialText || '')
		},
		template: $.d(['Ms:', $.ipV('t'), '(len:', $.spT('t().length'), ')']),
		// 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
		m: function (p) {
			this.t = $o(p && p.initT || '')
		},
		t: $.d([
			'Ms:', 
			v$('t'),
			'(len:', T$('t().length'), ')'
		])
	})
	
	$.z().h4('First instance, without parameters')
	$.d().cm$('msgEd')
	$.h4('Second instance, passing parameters')
	$.d().cm$('component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}')
	ok()
	function alt() {
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
		MSEDTR = function () {
			z() // ex: declares a component, injects two instances of it into a view
			ko._('message-editor', tmpl, function (p) {
				this.text = $o(p.text || 'happy')
			})
		}
		MSGEDIT = function () {
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
					.A('The person', $.emT('name'),
					'is', $.emT('age'), 'years old.')
			ok(new VM())
			vm.VM.ms("1");
			vm.VM2.ms("2")
			$.x('b', 'First instance, without parameters')
			//$.z().h4('First instance, without parameters')
			$.d().cm$('message-editor')
			$.h4('Second instance, passing parameters')
			ko._('message-editor', {
				m: function (params) {
					this.text = ko.o(params && params.initialText || '')
				},
				t: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
			})
			$.d().cm$(
					'component:{name:"message-editor",params:{initialText:"Hello,world!"}}'
			)
			ok()
		}
	}
}
NEWSFEEDCOMPONENT = CMNEWS = function () {
	//http://jsfiddle.net/rniemeyer/fssXE/
	ko.rg('nwsFd', {//'news-feed'
		m: function (p) {
			this.vm = p.vm
		},
		//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
		//, t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
		t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]
//t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))
	})
	$.qAP('news-feed', 'vm', 'VM')
	$.qAP('news-feed', 'vm', 'VM2')
	$.h2('News Feed')
	$.dT('vm.ms')
	$('<news-feed params="vm: feed"></news-feed>').A()
	$('<news-feed>').at('params', "vm: feed2").A()
	ko._('news-feed', {
		m: function (p) {
			this.vm = p.vm
		},
		t: $.d([
			$.h2('News! Feed'), $.dT('vm.m')
		])[0]
	})
	ok({m: ko.o('!'), VM: Ms('m1'), VM2: Ms('m2'), VM3: {m: ko.o('!')}})
	ok({ms: ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})
	vm.VM.ms("1");
	vm.VM2.ms("2")
}
List = Lst = function () {
	var lst = this
	lst.tA = $o('')
	lst.all = $oA(['Eg', 'Hm', 'Ch', 'J', 'r', 30])
	lst.sl = $oA(['Hm'])
	lst.A = function () {
		var lst = this
		if (lst.tA() != '' && lst.all.indexOf(lst.tA()) < 0) {
			lst.all.push(lst.tA())
			lst.tA('')
		}
	}
	lst.xSl = function () {
		var lst = this
		lst.all.removeAll(lst.sl())
		lst.sl([])
	}
	lst.srt = function () {
		this.all.sort()
	}
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
}
ko.rg('MyLs', {
	t: {el: 'MyLs-template'},
	m: function (p) {
		this.myItems = p.items
	}
	/*
	 ko.rg('my-special-list', {
	 t: {el: 'my-special-list-template'},
	 m: function (p) {
	 this.myItems = p.items
	 }
	 }) 
	 */
})
LIST = CMLDR = function () {
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
	ko.b({
		PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])
	})
	MyCmVM = function (pm) {
		curObsrvInst = pm.$raw.myExpr()
	}
}
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
CMLDR = function () {
	$.tp("my-special-list-template").A(
			$.h3('Here is a special list')
	)
	$.ul().A("{ data: myItems, as: 'myItem' }").A(
			$.li().A($.h4('Here is another one of my special items'),
					$("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))
	$.tg('my-special-list').at('params', 'items: PEEP')
			.A('The person', $.em().b('t', 'name'),
			'is', $.em().b('t', 'age'), 'years old.')
	ko.b({PEEP: $oa([{n: 'Lew', a: 56}, {n: 'Atha', a: 34}])})
}
$.tg = function (a) {
	return $('<' + a + '>')
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
	$b(new Lst())
}
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
	this.xSl = function () {
		this.all.removeAll(this.sl())
		this.sl([])
	}
	this.srt = function () {
		this.all.sort()
	}
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
	ok(new Lst())
}
LST = EACHS = SELLISTMISC = function () {
	$.d().A($.fo().b('S', 'addItem')(
					$.sp('add item'),
					$.ip().b({
						v: 'itemToAdd'//,vu:'afterkeydown'
					}),
					$.sm('add').e$('itemToAdd().length>0')),
			$.d().A($.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						sO: 'selectedItems'
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
	ok(o = BLM())
	form = f = $.f()
	form.sm$('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').en$('itemToAdd().length>0'))
	$.d().A(form,
			$.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems', sO: 'selectedItems'
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
	ok(new Lst())
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	f = $.f().A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sm('add').en$('itemToAdd().length>0')
	)
	f.sm$('addItem')
	$.d().A(f, $.d().A(
					$.sp('Your values:'),
					$.sl().h(5).b({
						o: 'allItems',
						sO: 'selectedItems'
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
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	f = $.fo().sm$('A', ['Add:',
		$.ip().v$('tA'),
		$.sb('Add').en$('tA().length>0')
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
		$.bt('Srt').b({
			$: 'srt',
			en: 'all().length > 1'
		})
	])
	ok(new Lst())
	//sort, remove
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
	ok(new Lst())
	f = $.fSm('A', ['Add:',
		$.ipV('tA'),
		$.sb('Add').en$('tA().length>0')
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
	ok(new Lst())
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add').e$('itemToAdd().length>0')
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
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
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
	ok(new Lst())
}
function unrealisticComponent() {
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
	}
//<- $.bt('Clear tweets').b$(' $parent.clearResults')

	function plugins(){
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
//Knockout.JS Components     https://www.youtube.com/watch?v=UyQNARf2bQs
}

  function extenders(){
	  //Knockout observables provide the basic features necessary
// to support reading/writing values
// and notifying subscribers when that value changes.
// In some cases, though, you may wish to add additional functionality to an observable.
// This might include adding additional properties to the observable or
// intercepting writes by placing a writable computed observable in front of the observable.
// Knockout extenders provide an easy and flexible way 
// to do this type of augmentation to an observable.
//
//    How to create an extender
//Creating an extender involves adding a function to the ko.extenders object.
// The function takes in the observable itself
// as the first argument and any options in the second argument.
// It can then either return the observable or return something new
// like a computed observable that uses the original observable in some way.
//
//    This simple logChange extender 
// subscribes to the observable 
// and uses the console to write any changes along with a configurable message.
//
	  ko.extenders.logChange = function (target, option) {
		  target.subscribe(function (newValue) {
			  $l(option + ": " + newValue);
		  })
		  return target
	  }
//You would use this extender by calling the extend function of an observable
// and passing an object that contains a logChange property.
	  this.firstName = $o("Bob").extend({logChange: "first name"})
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
	   //Note that for this to automatically erase rejected values from the UI, 
	   it’s necessary to use .extend({ notify: 'always' }) 
	   on the computed observable. 
	   Without this,
	   it’s possible for the user to enter an invalid newValue
	   that when rounded gives an unchanged valueToWrite. 
	   Then, since the model value would not be changing, 
	   there would be no notification to update the textbox in the UI.
	   Using { notify: 'always' } causes the textbox to refresh 
	   (erasing rejected values)
	   even if the computed property has not changed value.
	
	
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
  
	oA = ko.observableArray.fn
	
	oA.rm = function (i) {
			  var oA = this
			  oA.remove(i)
			  return oA
		  }
		
	oA.p = function (i) {
			  var oA = this
			  oA.push(i)
			  return oA
		  }
COMPOSABLE_COMPONENT = CUSTBDEX = function () {
	function expander() {
		ExpanderCmVM = function () {
			this.isExpanded = ko.o(false)
			this.toggleText = ko.c(function () {
				return this.isExpanded() ? '-' : '+'
			}, this)
		}
		ExpanderCmVM.prototype.toggle = function () {
			this.isExpanded(!this.isExpanded())
		}
	}
	
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
