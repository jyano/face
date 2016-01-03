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
	$.ulE("{ data: myItems, as: 'myItem' }").A(
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

 