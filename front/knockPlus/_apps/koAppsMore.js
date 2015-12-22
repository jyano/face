OLTWT = function () {
	$.x('r', 'twt')
	$.fSm('g', ['un:', $.ipV('un'), $.sb('Get')])
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS',
				$.liT('ms')),
		$.bt$('clr', ' $parent.clr')
	])
	ok({
		un: $o('@ex'),
		da: $o(),
		g: function () {
			vm.da({
				dt: $D(),
				MS: _.m(['a', 'b'],
						function (t) {
							return {ms: vm.un() + ':' + t}
						})
			})
		},
		clr: function () {
			vm.da([])
		}
		//<- $.bt('Clear tweets').b$(' $parent.clearResults')
	})
}
ULROOT = function () {
	$.x('x')
	$.uE('fs', [
		$.li().b({
			t: '$data',
			s: '{selected: $data==$root.chFI()}',
			$: '$root.gtf'
		})
	]).K('fs')
	$.A(
			ul().k('fs').b('E', "fs")(li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf")))
	MVM = function () {
		var vm = {
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
ULTIARR = function () {
	$.x();
	$.ipTi('n');//textInput
	$.h1T('n');//h1 text (read only) // $.dA('b',100,300,200,'+').bT('n')
	//ul each 'array'
	$.ulE('arr', [$.liT()])
	$.sm().b$('A')
	ok({
		n: $o('zi'), arr: $oa(),
		A: function () {
			this.arr.p(this.n())
		}
	})
	_.in(1, function () {
		vm.n('girf')
		_.e(['a', 'b', 'c'], function (i) {
			vm.arr.p(i)
		})
	})
}
SELLISTMISC = function () {
	$.x('z')
	$.d()(
			fo().b('S', 'addItem')(
					sp('add item'),
					tx().b({
						v: 'itemToAdd'//,vu:'afterkeydown'
					}),
					sm('add').b('ea', 'itemToAdd().length>0')),
			_d()(sp('Your values:'),
					sel().h(5).b({
						o: 'allItems',
						sO: 'selectedItems'
					})
			),
			_d()(
					bt('remove').b({
						c: 'removeSelected', e: 'selectedItems().length>0'
					}),
					bt('sort').b({
						c: 'sortItems', e: 'allItems().length>1'
					}))
	).a()
	ko.ab(o = BLM())
	f = $.f()
	f.bSb('addItem').A(
			$.sp('add item'),
			$.ip().b({v: 'itemToAdd', V: 'afterkeydown'}),
			$.sb('add')
					.bEn('itemToAdd().length>0')
	)
	$.d().A(f,
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
			$.sm('add').bEn('itemToAdd().length>0')
	)
	f.bSm('addItem')
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
	f = $.fSm('A', ['Add:',
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
	f = $.fSm('A', ['Add:',
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
CHERRYMISC = function () {
	$.x('o')
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
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
	$.x('o')
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([$.p($.sp('cherry'), $.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
	_.in(function () {
		vm.flav.push("glut")
	})
	ok({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'), $.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
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
ULTASKMISC = function () {
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ", $.ip().bV('nT').ph("What?"), $.bt('Add'))
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").bT("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").bV("inc().length==0").A()
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
			$.ip().bV('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({
		e: 'ts', vs: 'visible:ts().length>0'
	}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").bT("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").bV("inc().length==0").A()
	$.z().h3('Tasks')
	$.f().bSm('aT').A().A("Add task: ",
			$.ip().bV('nT').ph("What?"),
			$.bt('Add')//.bS('s') // ??
	)
	$.ul().b({e: 'ts', vs: 'visible:ts().length>0'}).A($.li().A(
			$.cb().bC('iD'),
			$.ip().b("value:t, disable:iD"),
			$.bt('Del').bC('$parent.rmT')))
	$.sp("You have").A()
	$.B("&nbsp;").bT("inc().length").A()
	$.sp("inc task(s)").A()
	$.sp("- beer!").bV("inc().length==0").A()
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
ULDATA = function () {
	$.z('x')
	d = $.dI('hover').A($.a().A($.i('me').bT('matterId')))
	d.mouseover(function () {
		$l("!!!");
		$(this).next("#box").gg()
	})//Show the div onmouseover.
	d.mouseout(function () {
		function onMouseOut(obj) {
		}
	})//Hide to div onmouseout
	$.ulE('mDateTime').A($.li().A(
			$.ul().bE('$root.matter.index.type()[$data]').A($.li().A(d,
							$.dI('box').css('display', 'none').A($.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))),
					$.li().bT('matterTitle'),
					$.li().bT('matterComment')
			)))
}
//
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
KOCL = function () {
	$.x('x').h2('Peeep')
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
	$.uE('peep', [
		$.li().A(
				$.d([
					$.spT('n'), 'has',
					$.spT('ch().length'),
					'children &nbsp;',
					$.a$('New', 'A')
				]),
				$.ulE('ch', [
					$.li([
						$.spT(), $.spVs('$root.showDT').A(
								' (child rendered at ', $.spT('$Dt().getSeconds()'), ')'
						)])
				])
		)
	])
	$.cbC('showDT').a2Lb('Show time:')
	//anonymous vm
	OK({peep: peep, showDT: kO()})
}
KOC = function () {
	$.z()
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().bT("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().bT('title')),
			$.scrp('details').A(
					$.d([$.h2().bT('title'), $.p().bT('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
	)
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
}
KOSCR = function () {
	z();
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
	);
	ko.b({})
}
// kob= ko.observable.prototype; kob.rm= kob.remove
 
KOC = function () {
	$.z()
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().bT("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().bT('title')),
			$.scrp('details').A(
					$.d([$.h2().bT('title'), $.p().bT('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
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
IF = function () {
	$.x('x')
	$.cC('dispMs')
	$.sp('Disp ms')
	$.pI('dispMs', 'Here is a message. Astonishing')
	ok({dispMs: ko.o(1)})
}
COMP = function () {
	$.z().h1('KNOCKOUT')
	$.d([
		$.p('F: ', $.b().bT('f')),
		$.p('L: ', $.b().bT('l')),
		$.p('F: ', $.ip().bV('f')),
		$.p('L: ', $.ip().bV('l')).id('l'),
		//   $.p('L: ', $.b().bT('fL') ),
		$.bt('caps').b$('capL')
	])
	ok({
		f: $o('j'),
		l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
		capL: function () {
			this.l(S.tU(this.l()))
		}
	})
}
 
function kofl() {
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}
	KOFL = function () {
		
		//filter the items using the filter text
		vm.filteredItems = ko.c(function () {
			var t = this, fl
			fl = t.filter().toLowerCase()
			if (!fl) {
				return t.items();
			} else {
				return ko.utils.arrayFilter(t.items(),
						function (it) {
							return ko.utils.stringStartsWith(
									it.name().toLowerCase(), fl)
						})
			}
		}, vm)
	}
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
}
function kobvs() {
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
//bind 'visibile' to a boolean
	KOBVS = function () {
		$.z('y').h1('see me if true!')
				.bVs('vs')
		$b('vs', ko.o(1))
		_.in(function () {
			vm.vs(0)
			$.c$()
			_.in(function () {
				vm.vs(1)
				$.c$()
			})
		})
	}
}
function kos() {
	KOS = function () {
		$.x()
		$.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
		ko.b({curProf: ko.o(50)})
		_.in(function () {
			vm.curProf(-50)
		}, '*')
	}
	KOS = function () {
		_$({
			c: 'v', t: 'css example.. will i use it?', vm: {n: $o(1)},
			A: $.d(['info']).b("style: {color: n()<0?'red':'black'}"),
			_: function () {
				vm.n(-5)
			}
		})
	}
}
function comput() {
//bT,bV and computed
	COMP = function () {
		$.z().h1('KNOCKOUT')
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			$.p('L: ', $.b().bT('fL')),
			$.bt('caps').b$('capL')
		]).A()
		ok({
			f: ko.o('j'),
			l: ko.o('y'),
			fL: ko.c(function () {
				return this.f() + ' ' + this.l()
			}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
	COMP = function () {
		$.z().h1('KNOCKOUT')
		$.d([
			$.p('F: ', $.b().bT('f')),
			$.p('L: ', $.b().bT('l')),
			$.p('F: ', $.ip().bV('f')),
			$.p('L: ', $.ip().bV('l')).id('l'),
			//   $.p('L: ', $.b().bT('fL') ),
			$.bt('caps').b$('capL')
		])
		ok({
			f: $o('j'),
			l: $o('y'),
//        fL : ko.c(function(){return this.f()+' '+this.l()}),
			capL: function () {
				this.l(S.tU(this.l()))
			}
		})
	}
}
function err() {
	KOC = function () {
		$.z()
		$.ip('r').at({
			name: 'choices',
			value: 'summary'
		}).bC('selectedView');
		$.sp('summary').A()
		$.ip('r').at({name: 'choices', value: 'details'}).bC('selectedView');
		$.sp('details').A();
		$.hr().A()
		$.d().bT("{name: templateToUse, " + "foreach: articles }")
		$.scrp("summary").A().A($.d().bT('title')),
				$.scrp('details').A(
						$.d([$.h2().bT('title'), $.p().bT('content'),
							$.bt('edit').b$('$parent.selectedArticle')]))
		$.scrp('edit').A().A(
				$.d([$.ip().bV('title'), $.br(), $.ip().bV('content')])
		)
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
	}
	SLOP = function () {
		$l('slop')
		$.z()
		$.p('Choose some countries youd like to visit:').A(
				$.sl().b({
					o: 'cunts',
					so: 'chosenCunts'
				}).sz(5).mlt()
		)
		$b({
					cunts: $oa('Fra', 'Ger', 'Spa'),
					chosenCunts: $oa('Ger')
				}
		)// Initially, only Germany is selected
		_.in(function () {
			vm.chosenCunts.push('Fra')
		}, '*') // ... then later  France is selected too
	}
}
function declarativeAppLoader() {
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
		z()
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
function slop() {
	SELOP = function () {
		d = $.d()
		$.x(null,
				'selectedOptions')
		$.p('Where?',
				$.sl().at({
					size: 5,
					multiple: true
				}).b({
					o: 'available', so: 'chosen'
				}))
		ok({
			available: ko.oa(
					['France', 'Germany', 'Spain']),
			chosen: ko.oa(
					['Germany'])
		})
		$.in(function () {
			vm.chosen.push('France')
		}, '*')
	}
	SLOP = function () {
		$.z()
		$.p('Choose some countries youd like to visit:').A(
				$.sl().b({o: 'cunts', sO: 'chosenCunts'}).sz(5).mlt())
		ok({
					cunts: $oa('Fra', 'Ger', 'Spa'),
					chosenCunts: $oa('Ger')
				}
		)// Initially, only Germany is selected
		_.in(function () {
			vm.chosenCunts.push('Fra')
		}, '*') // ... then later  France is selected too
	}
	SLOP = function () {
		$.z()
		ok({
			cunts: $oa('Fra', 'Ger', 'Spa'),
			selCunts: $oa('Ger')
		})
		$.p('where go?:').A(
				$.sl().b({
					o: 'cunts', so: 'selCunts'
				}).sz(5).mlt())
		$.in(function () {
			vm.selCunts.push('Fra')
		}, '*')
		// 1st only Ger is selected, then later Fra too
	}
}
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

