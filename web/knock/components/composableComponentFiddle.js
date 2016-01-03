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
