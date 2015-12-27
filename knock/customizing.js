ko.bH = ko.bindingHandlers
$bH=BH$ = function (bHName, ob) {//=  $bH =  ko.$bH = ok.bH
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
function learn(){
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
function compos(){
 
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
function functions() {
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
	 
	  
  }