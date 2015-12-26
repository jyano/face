ko.bH = ko.bindingHandlers
BH$ = function (bHName, ob) {//=  $bH =  ko.$bH = ok.bH
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
		var isChecked = ko.uw(vA())
		isChecked ? $(el).slD(1800) :
				$(el).slU(2000)
	},
	slVs: {
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
	fadeVs: {
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
	jqBt: {
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
ko.BH.jqBt = {
	init: function (el) {
		$(el).button();
	}, // Turns the el into a jQuery UI button
	update: function (el, valAcc) {
		var curVal = valAcc();
		$(el).button("option", "disabled", curVal.enable === false);
	}
}// Here we just update the "disabled" state, but you could update other properties too
RANDOMODER = VIRT = function () {
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
	ko.bh.randomOrder = {
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
	}
	$.d().b({randomOrder: true})
	$.d('First')
	$.d('Second')
	$.d('Third')
}
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
TECHNOLOGYSURVEYPOINTSBUDGET = BINDINGS = function () {
	Aw = function (text) {
		this.awText = text;
		this.points = $o(1)
	}
	$.h3().t$('qu')
	$.p('Please distribute').A(
			$.b().t$('ptsBudg'),
			'pts btwn the following opts')
	$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
			$.tB().bE('aw').A($.tr().A($t.d().t$('awT'), $t.d().b('starRating', 'pts'))))
	$.hr().b({
		fadeVisible: 'pointsUsed() > pointsBudget'
	}).A(
			'You used too many points! Please remove some.')
	$.p('You have').A($.b().t$('pointsBudget - pointsUsed()'), 'points left to use')
	$.bt('Finished').b({
		jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'
	})
	function Aw(text) {
		this.awText = text;
		this.points = ko.o(1);
	}
	
	function SurvVM(qu, ptsBdg, aws) {
		this.qu = qu;
		this.ptsBdg = ptsBdg
		this.aws = $.map(aws, function (tx) {
			return new Aw(tx)
		});
		this.save = function () {
			alert('To do')
		};
		this.ptsUsed = ko.c(function () {
					var tot = 0;
					for (var i = 0; i < this.aws.length; i++) {
						tot += this.aws[i].points()
					}
					return tot
				},
				this)
	}
	
	ok(new SurvVM("Which factors affect your technology choices?", 10,
					[
						"Functionality, compatibility, pricing - all that boring stuff",
						"How often it is mentioned on Hacker News",
						"Number of gradients/dropshadows on project homepage",
						"Totally believable testimonials on project homepage"
					]
			)
	)
	function alt() {
		function SurvVM(qu, ptsBdg, aws) {
			this.qu = qu;
			this.ptsBdg = ptsBdg
			this.aws = $.map(aws, function (tx) {
				return new Aw(tx)
			});
			this.save = function () {
				alert('To do')
			};
			this.ptsUsed = ko.c(function () {
						var tot = 0;
						for (var i = 0; i < this.aws.length; i++) {
							tot += this.aws[i].points()
						}
						return tot
					},
					this)
		}
	}
	
	BINDINGS = function () {
		$.h3().bT('qu')
		$.p('Please distribute').A(
				$.b().bT('ptsBudg'),
				'pts btwn the following opts'
		)
		$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
				$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'pts'))))
		$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
				'You used too many points! Please remove some.')
		$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
		$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
		ok(new SurvVM("Which factors affect your technology choices?",
						10, [
							"Functionality, compatibility, pricing - all that boring stuff",
							"How often it is mentioned on Hacker News",
							"Number of gradients/dropshadows on project homepage",
							"Totally believable testimonials on project homepage"
						]
				)
		)
	}
	BINDINGS = function () {
		$.h3().bT('qu')
		$.p('Please distribute').A(
				$.b().b().t$('ptsBudg'),
				'pts btwn the following opts'
		)
		$.t($.tH().A($.tr().A($.th().A('Option'), $.th().A('Import'))),
				$.tB().bE('aw').A($.tr().A($t.d().bT('awT'), $t.d().b('starRating', 'pts'))))
		$.hr().b({fadeVisible: 'pointsUsed() > pointsBudget'}).A(
				'You used too many points! Please remove some.')
		$.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')
		$.bt('Finished').b({jqBt: '{ enable: pointsUsed() <= pointsBudget }', $: 'save'})
		function Aw(text) {
			this.awText = text;
			this.points = ko.o(1);
		}
		
		function SurvVM(qu, ptsBdg, aws) {
			this.qu = qu;
			this.ptsBdg = ptsBdg
			this.aws = $.map(aws, function (tx) {
				return new Aw(tx)
			});
			this.save = function () {
				alert('To do')
			};
			this.ptsUsed = ko.c(function () {
						var tot = 0;
						for (var i = 0; i < this.aws.length; i++) {
							tot += this.aws[i].points()
						}
						return tot
					},
					this)
		}
		
		ok(new SurvVM("Which factors affect your technology choices?", 10, [
							"Functionality, compatibility, pricing - all that boring stuff",
							"How often it is mentioned on Hacker News",
							"Number of gradients/dropshadows on project homepage",
							"Totally believable testimonials on project homepage"
						]
				)
		)
	}
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
 
function lost() {//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	/*
	
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
/*
 ko.bindingHandlers.yourBindingName = {
 init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
 // This will be called when the binding is first applied to an element
 // Set up any initial state, event handlers, etc. here
 },
 update: function(q, vAc, bd, vm, bdCtx) {
 // This will be called once when the binding is first applied to an element,
 // and again whenever any observables/computeds that are accessed change
 // Update the DOM element based on the supplied values here.
 }
 }
 */
/*
 The “update” callback
 ko will call the upd cb init when   bd   applied to an el
 and tr any deps (observs/computeds) that you access.
 When any deps change, the upd  cb   called  w these pams:
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

 */
 
 function learn(){
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
	 /*
	  ko.bindingHandlers.yourBindingName = {
	  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
	  // This will be called when the binding is first applied to an element
	  // Set up any initial state, event handlers, etc. here
	  },
	  update: function(q, vAc, bd, vm, bdCtx) {
	  // This will be called once when the binding is first applied to an element,
	  // and again whenever any observables/computeds that are accessed change
	  // Update the DOM element based on the supplied values here.
	  }
	  }
	  */
	 /*
	  The “update” callback
	  ko will call the upd cb init when   bd   applied to an el
	  and tr any deps (observs/computeds) that you access.
	  When any deps change, the upd  cb   called  w these pams:
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
	
	  */
	 /*
	
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
