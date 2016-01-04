ko.bH = ko.bindingHandlers
$bH = BH$ = function (bHName, ob) {//=  $bH =  ko.$bH = ok.bH
	if (O(bHName)) {
		_.e(bHName, function (ob, name) {
			$bH(name, ob)
		})
		return
	}
	ob = F(ob) ? {update: ob} : ob //if (F(ob.u)) {ob.update = ob.u}
	ob.update = ob.update || ob.u
	ob.init = ob.init || ob.i
	ko.bH[bHName] = ob
	$.fn[bHName] = function (a) {
		this.b(bHName, a)
	}
}
BH$({
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
		//selValue
		var isChecked = ko.uw(vA())
		isChecked ? $(el).slD(1800) :
				$(el).slU(2000)
	},
	slVs: {//selVisible
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
	fadeVs: { // fadeVisible
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
	jqBt: { // jQueryButton !!!!
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
ko.bH.fadeVisible = {
	init: function (el, valAcc) {
		// Initially set the el to be instantly visible/hidden depending on the value
		var value = valAcc();
		$(el).toggle(ko.unwrap(value));
		// Use "unwrapObservable" so we can handle values that may or may not be observable
	},
	update: function (el, valAcc) {
		// Whenever the value subsequently changes, slowly fade the el in or out
		var value = valAcc();
		ko.unwrap(value) ? $(el).fadeIn() :
				$(el).fadeOut();
	},
	alt: function () {
		//fade in/out
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
		} // On update,
	}
}
K3 = TABLE = function () {
	$BH({
		fadeVisible: {
			I: function (e, vA) {
				$(e).toggle(vA())
			},
			U: function (el, vA) {
				vA() ? $(el).fadeIn() :
						$(el).fadeOut()
			}
		},
		jqButton: {
			I: function (e) {
				$(e).button()
			},
			U: function (e, vA) {
				$(e).button("option", "disabled",
						vA().enable === false);
			}
		}
	})
	str = '<h3 data-bind="text: q"></h3>'
	str += '<p> distribute <b data-bind="text: pB"></b> points  </p>'
	str += ' <table><thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: As"><tr>'
	str += '<td data-bind="text: aT"></td>'
	str += ' <td><select data-bind="options: [1,2,3,4,5], value:Ps"></select></td>'
	str += ' </tr> </tbody> </table>'
	str += '<h3 data-bind="fadeVisible: pU() > pB">  too many points!  </h3>'
	str += '<p><b data-bind="text: pB-pU()"></b> left</p>'
	str += '<button data-bind="jqButton: jqButton: { enable: pU() <= pB },  click: save">Finished</button>  '
	$(str).A()
	function VM(q, pB, As) {
		var vm = this
		vm.q = q
		vm.pB = pB
		vm.As = $.map(As, function (t) {
			return {aT: t, Ps: $o(1)}
		})
		vm.save = function () {
			alert('To do')
		}
		vm.pU = ko.c(function () {
			var t = 0;
			_.e(vm.As, function (a) {
				t += a.Ps()
			});
			return t
		}) //points Used
	}
	
	ok(new VM("factors?", 10, ["Functionality", "News",
		"dropshadows", "testimonials"]))
}
RND = RANDOMODER = VIRT = function () {
	VIRT = function () {
		$.d().b({randomOrder: true})
		$.d('First')
		$.d('Second')
		$.d('Third')
		ko.bindingHandlers.randomOrder = {
			init: function (el, valAcc) {
				// Pull out each of the child els into an array
				var childElems = []
				while (el.firstChild)
					childElems.push(el.removeChild(el.firstChild))
				// Put them back in a random order
				while (childElems.length) {
					var randomIndex = M.fl(M.rn() * childElems.length),
							chosenChild = childElems.splice(randomIndex, 1);
					el.appendChild(chosenChild[0]);
				}
			}
		}
	}
	ko.BH.randomOrder = {
		init: function (el, valueAccessor) {
			
			// Build an array of child elements
			var ch = ko.vE.firstChild(el),
					CH = []
			while (ch) {
				CH.push(ch)
				ch = ko.vE.nextSibling(ch)
			}
			// Remove them all, then put them back in a random order
			ko.vE.emptyNode(el)
			while (CH.length) {
				ko.vE.prepend(el, CH.splice(R(CH), 1)[0])
			}
		}, alt: function () {
			ko.bH.randomOrder = {
				init: function (el, vA) {
					var ch = ko.vE.firstChild(el)
					var CH = []
					while (ch) {
						CH.push(ch);
						ch = ko.vE.nextSibling(ch)
					}
					ko.vE.emptyNode(el)
					while (CH.length) {
						ko.vE.prepend(el,
								CH.splice(R(CH), 1)[0])
					}
				},
				init: function (el, valAcc) {
					var childElems = []
					while (el.firstChild)
						childElems.push(el.removeChild(el.firstChild))
					while (childElems.length) {
						var randomIndex = M.fl(M.rn() * childElems.length),
								chosenChild = childElems.splice(randomIndex, 1);
						el.appendChild(chosenChild[0]);
					}
				},
				init1: function (elem, valueAccessor) {
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
			}
		}
	}
	$.d().b({randomOrder: true})
	$.d('First')
	$.d('Second')
	$.d('Third')
}
RND1 = VIRT1 = function () {
	_$({
		C: 'p',
		A: [
			$.d().b({
				randomOrder: true
			}),
			$.d('First'),
			$.d('Second'),
			$.d('Third'),
			$.ul().e$('mDateTime').A($.li().A($.ul())),
			$.uE("$root.matter.index.type()[$data]", [$.li().A()])]
	})
}
function learn() {
	/*
	
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
	 // init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	 // update: function(q, vAc, bd, vm, bdCtx) {
	 update  pams:
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
	 ko.bindingHandlers.yourBindingName = {
	
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
TLVM = function () {
	var o = {
		ts: $oa([]),
		nT: $o()
	}
	o.inc = ko.c(function () {
		return ko.ut.af(
				o.ts(),
				function (t) {
					return !t.iD()
				}
		)
	})
	o.aT = function () {
		o.ts.push(Task({t: o.nT()}))
		o.nT("")
	}
	o.rmT = function (t) {
		o.ts.remove(t)
	}
	$.gJ('/ts', function (d) {
		o.ts(_.m(d, function (i) {
			return Task(i)
		}))
	})
	return o
}
BLM = function () {
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
		o.allItems.removeAll(o.selectedItems())
		o.selectedItems([])
	}
	o.sortItems = function () {
		o.allItems.sort()
	}
	return o
}
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
FLVIEWPLG = function () {
	tasks = $oA(
			Task('Find new desktop background', 1),
			Task('Put shiny stickers on laptop'),
			Task('Request more reggae music in the office', 1))
	//$.h3('All tasks').A($.spT('tasks().length'))
	$.h3('All tasks').A($.sp().t$('tasks().length'))
	$.h3('All tasks').A($.sp().t$('tasks().length'))
	$.ulE('tasks', [
		$.lL([
			$.cb().ch$('done'), $.sp().t$('tt')
		])
	])
	$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
	$.ulE('doneTasks', [$.li().t$('tt')])
	$.ulE('tasks', [$.lL([$.cb().ch$('done'), $.sp().t$('tt')])])
	$.h3('All tasks').A($.sp().bT('tasks().length'))
	$.ul().bE('tasks').A($.li().A(
			$.lb().A($.cb().ch$('done'), $.sp().t$('title'))))
	$.h3('Done tasks').A($.sp().bT('doneTasks().length'))
	$.ul().e$('doneTasks').A($.li().bT('text'))
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
	$.h3('Done tasks').A($.sp().t$('doneTasks().length'))
	// $.h3('Done tasks').A($.sp().bT('doneTasks().length'))
	$.ul([$.li().t$('tt')]).e$('doneTasks')
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
	ko.oA.fn.filterByProperty = function (propName, matchValue) {
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
}
FLVIEWPLG = function () {

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
KOEXT = function () {
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
	ok(new VM())
	//    not mandatory
	/*
	
	
	
	 If you tend to filter observable arrays a lot,
	 adding a filterByProperty globally to all observable arrays might make your code tidier.
	 But if you only need to filter occasionally,
	 you could instead choose not to attach to ko.observableArray.fn,
	 and instead just construct doneTasks by hand as follows:
	
	
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
function VM() {
	this.prods = $oA()
}
VM.prototype.A = function () {
	this.prods.push(Prod('Prod ' + (this.prods().length + 1)))
}
VM = function (p) {
	this.somePop = p.smKey
}
VM.prototype.doSmg = function () {
}
koTask = koTsk = Task = function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
TASKS = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}
EACH = function () {
	TLVM = function () {
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
	OK(TLVM())
	$.fo({submit$: 'aT'},
			"Add task: ",
			$.ip("What?").v$('nT'),
			$.bt('Add').at('t', 's')
			//alt = $.fo.sm$("aT").A("Add task: ", $.ip("What?").v$('nT'), $.bt('Add').at('t', 's')),
	)
	$.ul({
		enable$: 'ts',
		visible$: 'ts().length>0',
		child: $.li([
			$.cb.checked$('iD'),
			$.ip({value$: 't', disable$: 'iD'}),
			$.a({checked$: '$parent.rmT'}, 'Del')
		])  //alt = $.ul().A($.li().A($.cb().ch$('iD'), ip().b("value:t, disable:iD"), lk('Del').b('ch', '$parent.rmT'))).b("foreach:ts, visible:ts().length>0"),
	})
	$.d([
		"You have",
		$.B({text$: "inc().length"}, "&nbsp;"),
		$.sp({vs$: "inc().length==0"}, "inc task(s)   - beer!")
	])
}
ULTASKMISC = function () {
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ", $.ip().v$('nT').ph("What?"), $.bt('Add'))
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: $oa(),
		nT: $o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: $o(o.nT()), iD: $o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: $o(i.t), iD: $o(i.iD) }}))})
	 */
	$.f().bSm('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({
		e: 'ts', vs: 'visible:ts().length>0'
	}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: $oa(),
		nT: $o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: $o(o.nT()), iD: $o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	s2(
			h3('Tasks'),
			_f().b("S", "aT")(
					"Add task: ",
					ip().b('v', 'nT').ph("What?"),
					bt('Add').at('t', 's')
			),
			ul(
					li()(
							cb().b('ch', 'iD'),
							ip().b("value:t, disable:iD"),
							lk('Del').b('ch', '$parent.rmT')
					)
			).b("foreach:ts, visible:ts().length>0"),
			sp("You have"), _B("&nbsp;").b('t', "inc().length"), sp("inc task(s)"),
			sp("- beer!").b("visible: inc().length==0")
	)
	//ko.ab(TLVM())
	ok({
		itemToAdd: $o(''),
		allItems: $oa(['a', 'b', 'c']),
		selectedItems: $oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
}
TASKS = function () {
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}
Task = function (tt, done) {
	return {
		tt: ko.o(tt),
		done: ko.o(done)
	}
}
Task = function (d) {
	return {t: $o(d.t), iD: $o(d.iD)}
}
TASKER = function () {
	$.x()
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Task = bb.M.e({})
	t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
	t2 = Ap.M.Task.o({t: 'go park', pr: 3})
	Ap.V.Tsk = bb.V.e({
		t: 'li',
		rr: function () {
			this.A(this.g('t'))
			return this
		}
	})
	taskView = Ap.V.Tsk.o({m: t1})
	Ap.C.Tasks = bb.C.e({m: Ap.M.Tsk})
	tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
	Ap.V.Tasks = bb.V.e({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Task.o({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tasksV = Ap.V.Tasks.o({cl: tasks})
}
TASKS = function () {
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({
		e: 'ts',
		vs: 'visible:ts().length>0'
	}).A(
			$.li().A(
					$.cb().bC('iD'),
					$.ip().b("value:t, disable:iD"),
					$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}
TASK = function () {
	$.z('r')
}
TASKS1 = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
			$.ip().v$('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").t$("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").v$("inc().length==0").A()
	ko.b({
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
		addItem: function () {
			if (vm.itemToAdd() != '' && vm.allItems.indexOf(vm.itemToAdd()) < 0) {
				vm.allItems.push(vm.itemToAdd());
				vm.itemToAdd('')
			}
		},
		removeSelected: function () {
			allItems.removeAll(vm.selectedItems())
			selectedItems([])
		},
		sortItems: function () {
			vm.allItems.sort()
		}
	})
	vm2 = {
		ts: ko.oa(),
		nT: ko.o(),
		inc: ko.c(function () {
					var vm = this
					return ko.ut.af(
							vm.ts(), function (t) {
								return !t.iD()
							})
				}
		),
		aT: function () {
			this.ts.push({t: ko.o(o.nT()), iD: ko.o()});
			this.nT('')
		},
		rmT: function () {
			o.ts.remove(this)
		}
	}
	/*
	 ko.b(vm2)
	 //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
	 */
}

function _post(){
	ko.bP = ko.bindingProvider;
	ko.bP.inst = ko.bP.i = ko.bP.instance
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
	function compoPreprocess() {
		ko.bP.inst.ppsN = function (node) {
			ko.bP.inst.ppN = ko.bP.inst.preprocessNode
			ko.bP.inst.ppN = function (node) {
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
		ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
			ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
				tgNLower = nd.tagName && nd.tagName.toLowerCase()
				return ko.cm.iR(tgNLower) ? tgNLower : tgNLower === "special-el" ? "MyCm" : null
				// If the el's name matches a reg-ed cm, use that cmt
				// For the el <special-el>, use the component
				// "MySpecialComponent" (whether or not it was preregistered)
				// Treat anything else as not representing a component
				ko.cm.gN = ko.cm.getComponentNameForNode = function (nd) {
					tgN = nd.tagName && _.tL(nd.tagName)
					return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
					// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
					// use cm "MySpecialComponent" (regardless if pre-regd)
					// Treat anything else as !repg a cm
				}
			}
			tgN = nd.tagName && _.tL(nd.tagName)
			return ko.cm.iR(tgN) ? tgN : tgN === "special-el" ? "MyCm" : null
			// If the el's name mats a reg-ed cm, use that cm for the el <special-el>,
			// use cm "MySpecialComponent" (regardless if pre-regd)
			// Treat anything else as !repg a cm
		}
	}}
POINTBUDGET = BINDINGS = function () {
	$.h3().t$('question')
	$.p('Please distribute').A(
			$.B().t$('pointsBudget'), 'points btwn the following options: ')
	$.t().A($.tH().A($.tr().A($.th('Option'), $.th('Import'))),
			$.tB().e$('aw').A($.tr().A(
					$t.d().t$('awT'),
					$t.d().b('starRating', 'points')
			))
	)
	$.hr().b({
		fadeVisible: 'pointsUsed() > pointsBudget'
	}).A('You used too many points! Please remove some.')
	$.p('You have').A($.b().t$('pointsBudget - pointsUsed()'), 'points left to use')
	$.bt('Finished').b({
		jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'
	})
	SurvVM = function (qu, pointsBdg, aws) {
		this.qu = qu;
		this.pointsBdg = pointsBdg
		this.aws = _.m(aws, function (tx) {
			Aw = function (text) {
				this.awText = text;
				this.points = $o(1)
			} // (was $.map, not _.m (is jquery's map different signature? (i thought yes))
			return new Aw(tx)
		})
		this.pointsUsed = $cO(function () {
			var tot = 0;
			for (var i = 0; i < this.aws.length; i++) {
				tot += this.aws[i].points()
			}
			return tot
		}, this)
		this.save = function () {
		}
	}
	ok(new SurvVM(
			"Which factors affect your technology choices?",
			10, [
				"Functionality, compatibility, pricing - all that boring stuff",
				"How often it is mentioned on Hacker News",
				"Number of gradients/dropshadows on project homepage",
				"Totally believable testimonials on project homepage"
			]))
}
POINTS = BINDINGS = function () {
	$.h3().bT('qu')
	$.p('Please distribute').A(
			$.b().b().t$('pointsBudget'),
			'points btwn the following options'
	)
	$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
			$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'points'))))
	$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
			'You used too many points! Please remove some.')
	$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
	$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
	ok(new SurvVM("Which factors affect your technology choices?", 10, [
						"Functionality, compatibility, pricing - all that boring stuff",
						"How often it is mentioned on Hacker News",
						"Number of gradients/dropshadows on project homepage",
						"Totally believable testimonials on project homepage"
					]
			)
	)
}
ko.BH.jqBt = {
	init: function (el) {
		$(el).button();
	}, // Turns the el into a jQuery UI button
	update: function (el, valAcc) {
		var curVal = valAcc();
		$(el).button("option", "disabled", curVal.enable === false);
	}
}// Here we just update the "disabled" state, but you could update other properties too
STARRATING = function () {
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
		}, // Give the first x stars the "chosen" class, where x <= rating
		alt: function () {
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
				,
				init: function (element, valueAccessor) {
					$(element).K("starRating");
					for (var i = 0; i < 5; i++) $.sp().a2(element);
					$("span", element).each(function (index) {
						$(this).hover(
								function () {
									$(this).prevAll()
											.add(this)
											.K("hoverChosen")
								},
								function () {
									$(this).prevAll()
											.add(this)
											.K("hoverChosen")
								}
						);
					})
				},
				update: function (element, valueAccessor) {
					// Give the first x stars the "chosen" class, where x <= rating
					var observable = valueAccessor();
					$("span", element).each(function (index) {
						$(this).toggleClass("chosen", index < observable());
					});
				}
			}
		}
	}
	str = '<h3 data-bind="text: question"></h3>'
	str += '<p>Please distribute <b data-bind="text: pointsBudget"></b> points between the following options.</p>'
	str += ' <table>'
	str += ' <thead><tr><th>Option</th><th>Importance</th></tr></thead>'
	str += '  <tbody data-bind="foreach: answers">'
	str += ' <tr>'
	str += '<td data-bind="text: answerText"></td>'
	str += '<td data-bind="starRating: points"></td>'
	str += ' </tr>'
	str += ' </tbody>'
	str += '  </table>'
	str += '<h3 data-bind="visible: pointsUsed() > pointsBudget">Youve used too many points! Please remove some.</h3>'
	str += '<p>Youve got <b data-bind="text: pointsBudget - pointsUsed()"></b>'
	str += 'points left to use.</p>'
	str += '<button data-bind="enable: pointsUsed() <= pointsBudget, click: save">Finished</button>  '
	$(str).A()
	function Answer(text) {
		this.answerText = text;
		this.points = $o(1);
	}
	
	function VM(question, pointsBudget, answers) {
		this.question = question
		this.pointsBudget = pointsBudget
		this.answers = $.map(answers, function (text) {
			return new Answer(text)
		})
		this.save = function () {
			alert('To do')
		}
		this.pointsUsed = ko.c(function () {
			var total = 0;
			for (var i = 0; i < this.answers.length; i++)
				total += this.answers[i].points();
			return total;
		}, this);
	}
	
	ok(new VM("Which factors affect your technology choices?", 10, [
		"Functionality, compatibility, pricing - all that boring stuff",
		"How often it is mentioned on Hacker News",
		"Number of gradients/dropshadows on project homepage",
		"Totally believable testimonials on project homepage"
	]))
}

function urlBindingObservablePlugin(){
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
	}}
	
	function animatedTransitions(){
		planets = [
			{name: "Mercury", type: "rock"},
			{name: "Venus", type: "rock"},
			{name: "Earth", type: "rock"},
			{name: "Mars", type: "rock"},
			{name: "Jupiter", type: "gasgiant"},
			{name: "Saturn", type: "gasgiant"},
			{name: "Uranus", type: "gasgiant"},
			{name: "Neptune", type: "gasgiant"}
		]
		Planets = function () {
			this.planets = $oA(planets);
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
		PLANETS = CUSTOMBINDING = function () {
			$.p().A($.lb().A($.cb().ch$('displayAdvancedOptions'),
					'Display advanced options'))
			$.p().A('Show:',
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
		PLAN = function () {
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
// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library
			ok(new Planets())
		}
		Ms = function (m) {
			return {m: $o(m || '')}
		}
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
		Prod = function (n, rating) {
//return {n: n, uRatg: ko.o(ratg || null)}
			this.name = n;
			this.userRating = ko.o(rating || null)
		}
		Feed = function () {
			this.ms = $o('pf!')
		}
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
			$.ul().e$('peep').A(
					$.li().A(
							$.d([
								$.sp().t$('n'), 'has',
								$.sp().t$('ch().length'),
								'children &nbsp;',
								$.a('New').ch$('A')]),
							$.ul().e$('ch').A(
									$.li([$.sp().t$(), $.sp().vs$('$root.showDT').A(
											' (child rendered at ',
											$.sp().t$('$Dt().getSeconds()'), ')')]))))
			$.cb().ch$('showDT').a2($.lb('Show time:'))
			ok({peep: peep, showDT: $o()})
		}
		VM = function () {
			this.feed = new Feed();
			this.feed2 = new Feed();
			this.VM2 = {ms: $o("!")}
		}
//$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components
		VM = function (p) {
			this.somePop = p.smKey
		}
		VM.prototype.doSmg = function () {
		}
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
		Feed = function () {
			this.ms = ko.o('pf!')
		}
		Ms = function (m) {
			return {m: ko.o(m || '')}
		}
		function tasks() {
			$task = function (d) {
				return {t: $o(d.t), iD: $o(d.iD)}
			}
			tasks = $oa([
				new Task('Find new desktop background', true),
				new Task('Put shiny stickers on laptop', false),
				new Task('Request more reggae music in the office', true)
			])
			$task = function (tt, done) {
				return {
					tt: ko.o(tt),
					done: ko.o(done)
				}
			}
			Task = function (title, done) {
				this.tt = this.title = $o(title)
				this.done = $o(done)
			}
		}
		
		Per = function (n, ch) {
			this.n = n
			this.ch = $oa(ch)
			this.A = function () {
				this.ch.p('new ch ' + $r())
			}
		}
	}