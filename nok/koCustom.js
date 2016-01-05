ko.ext = ko.ext || {};
ko.ext.utils = ko.ext.utils || {};
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
COMPOSABLE_COMPONENT = CUSTBDEX = function () {
	//Knockout.JS Components     https://www.youtube.com/watch?v=UyQNARf2bQs
 
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
function logChangeExtender() {
	ko.extenders.logChange = function (target, option) {
		target.subscribe(function (newValue) {
			$l(option + ": " + newValue);
		})
		return target
	}
	this.firstName = $o("Bob").extend({logChange: "first name"})
}
function binding() {
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
				$(el).toggle(
						ko.unwrap(vA())
				)
			},
			u: function (el, vA) { //on change, slowly fade el in/out
				ko.unwrap(vA()) ?
						$(el).fadeIn() : $(el).fadeOut()
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
			},
			u: function (el, vA) {
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
				$(el).K("starRating")
				_.t(5, function () {
					$.sp().a2(el)
				})
				$("span", el).each(function (index) {
					$(this).hover(// Handle mouse events on the stars
							function () {
								$(this).prevAll().A(this).K("hoverChosen")
							},
							function () {
								$(this).prevAll().A(this).rmK("hoverChosen")
							}).click(function () {
								var observable = vA();
								observable(index + 1)
							})
				})
			},
			// Get the associated observable// Write the new rating to it
			update: function (el, vA) {
				var observable = vA();
				$("span", el).each(function (index) {
					$(this).toggleClass("chosen", index < observable())
				})
			}
			
			// Give the first x stars the "chosen" class, where x <= rating
		}
	})
}
function starRatingBinding() {
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
			})
		}
	}
		 
	STARRATING = function () {
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
	}
}

function randomOrderBinding() {
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
	RND = RANDOMODER = VIRT = function () {
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
}
function urlBindingObservablePlugin() {
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
function fadeVisibleBinding() {
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
		}
	}
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
	}
}
function animatedTransitionBinding() {

//ANIMATED TRANSITIONS EXAMPLE http://knockoutjs.com/examples/animatedTransitions.html
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
//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html
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
}
function liveExamples() {/*
 <div>You've clicked <span data-bind='text: numberOfClicks'>&nbsp;</span> times</div>

 <button data-bind='click: registerClick, disable: hasClickedTooManyTimes'>Click me</button>

 <div data-bind='visible: hasClickedTooManyTimes'>
 That's too many clicks! Please stop before you wear out your fingers.
 <button data-bind='click: resetClicks'>Reset clicks</button>
 </div>

 */
	ClickCounterViewModel = function () {
		this.numberOfClicks = ko.observable(0);
		this.registerClick = function () {
			this.numberOfClicks(this.numberOfClicks() + 1);
		};
		this.resetClicks = function () {
			this.numberOfClicks(0)
		}
		this.hasClickedTooManyTimes = ko.pureComputed(function () {
			return this.numberOfClicks() >= 3
		}, this0)
	}
	ko.applyBindings(new ClickCounterViewModel());
//https://www.youtube.com/watch?v=xnBROE-RHW0 15:30 talks koColls
}
CTY = CONTROL_TYPES = function () {
	
	/*
	 <div class="readout">
	 <h3>What's in the model?</h3>
	 <table>
	 <tr>
	 <td class="label">Text value:</td>
	 <td data-bind="text: stringValue"></td>
	 </tr>
	 <tr>
	 <td class="label">Password:</td>
	 <td data-bind="text: passwordValue"></td>
	 </tr>
	 <tr>
	 <td class="label">Bool value:</td>
	 <td data-bind='text: booleanValue() ? "True" : "False"'></td>
	 </tr>
	 <tr>
	 <td class="label">Selected option:</td>
	 <td data-bind="text: selectedOptionValue"></td>
	 </tr>
	 <tr>
	 <td class="label">Multi-selected options:</td>
	 <td data-bind="text: multipleSelectedOptionValues"></td>
	 </tr>
	 <tr>
	 <td class="label">Radio button selection:</td>
	 <td data-bind="text: radioSelectedOptionValue"></td>
	 </tr>
	 </table>
	 </div>
	
	 <h3>HTML controls</h3>
	 <table>
	 <tr>
	 <td class="label">Text value (updates on change):</td>
	 <td><input data-bind="value: stringValue" /></td>
	 </tr>
	 <tr>
	 <td class="label">Text value (updates on keystroke):</td>
	 <td><input data-bind='value: stringValue, valueUpdate: "afterkeydown"' /></td>
	 </tr>
	 <tr>
	 <td class="label">Text value (multi-line):</td>
	 <td><textarea data-bind="value: stringValue"> </textarea></td>
	 </tr>
	 <tr>
	 <td class="label">Password:</td>
	 <td><input type="password" data-bind="value: passwordValue" /></td>
	 </tr>
	 <tr>
	 <td class="label">Checkbox:</td>
	 <td><input type="checkbox" data-bind="checked: booleanValue" /></td>
	 </tr>
	 <tr>
	 <td class="label">Drop-down list:</td>
	 <td><select data-bind="options: optionValues, value: selectedOptionValue"></select></td>
	 </tr>
	 <tr>
	 <td class="label">Multi-select drop-down list:</td>
	 <td><select multiple="multiple" data-bind="options: optionValues, selectedOptions: multipleSelectedOptionValues"></select></td>
	 </tr>
	 <tr>
	 <td class="label">Radio buttons:</td>
	 <td>
	 <label><input type="radio" value="Alpha" data-bind="checked: radioSelectedOptionValue" />Alpha</label>
	 <label><input type="radio" value="Beta" data-bind="checked: radioSelectedOptionValue" />Beta</label>
	 <label><input type="radio" value="Gamma" data-bind="checked: radioSelectedOptionValue" />Gamma</label>
	 </td>
	 </tr>
	 </table>
	
	 */
	viewModel = {
		stringValue: ko.observable("Hello"),
		passwordValue: ko.observable("mypass"),
		booleanValue: ko.observable(true),
		optionValues: ["Alpha", "Beta", "Gamma"],
		selectedOptionValue: ko.observable("Gamma"),
		multipleSelectedOptionValues: ko.observable(["Alpha"]),
		radioSelectedOptionValue: ko.observable("Beta")
	};
	ko.applyBindings(viewModel);
}
LIKE = function () {
	ko.components.register('like-widget', {
		viewModel: function (params) {
			// Data: value is either null, 'like', or 'dislike'
			this.chosenValue = params.value;
			// Behaviors
			this.like = function () {
				this.chosenValue('like');
			}.bind(this);
			this.dislike = function () {
				this.chosenValue('dislike');
			}.bind(this);
		},
		template: '<div class="like-or-dislike" data-bind="visible: !chosenValue()">' +
		'<button data-bind="click: like">Like it</button>' +
		'<button data-bind="click: dislike">Dislike it</button></div>' +
		'<div class="result" data-bind="visible: chosenValue">' +
		'You <strong data-bind="text: chosenValue"></strong> it</div>'
	})
	ul = $.ul()
	ul.e$('products')
	ul.A($.li().K('product').A(
			$.S().t$('name'),
			$('<like-widget params="value: userRating"></like-widget>')))
	function Product(name, rating) {
		this.name = name;
		this.userRating = ko.observable(rating || null);
	}
	
	function MyViewModel() {
		this.products = [
			new Product('Garlic bread'),
			new Product('Pain au chocolat'),
			new Product('Seagull spaghetti', 'like') // This one was already 'liked'
		];
	}
	
	ko.applyBindings(new MyViewModel());
}
addFns()
function addFns() {
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
/*

 ko.$oa = function (name, fn) {
 ko.oa.fn[name] = fn
 }
 ok$ = function (vm, app) {
 var g = G(arguments)
 $.app(g.r)
 ok(vm)
 }
 */