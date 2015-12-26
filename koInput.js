KOEN1 = function () {
	$.p().A($.cb().ch$('hasPhone'), 'I have phone')
	$.p('Your cellphone number').A(
			$.ip().b({
				v: 'num',
				 en: 'hasPhone'
			}))
	ok({hasPhone: ko.o(0), num: ''})
}
//bind cb 'checked' to boolean
SPAM1 = function () {
	$.p('spam? ').A(
			$.cb().ch$('spam')
	)
	ok({spam: ko.o(1)})
	$.in(2, function () {
		vm.spam(0)
	})
}
K7 = CHECK = SPAMM = function () {
	$.p(['spam?',
		$.cC('wantSpam', 'wantSpam')])
	$.d([
		'spam flavors:',
		$.d([$.cKO('Cherry', 'flav', 'cherry')]),
		$.d([$.cKO('Almond', 'flav', 'almond')]),
		$.d([$.cKO('Glut', 'flav', 'glut')])]).dB('visible', 'wantSpam')
	vm = {wantSpam: $o(1), flav: $oa(["cherry", "almond"])}
	ok(vm)
	_.in(2, function () {
		vm.wantSpam(0)
	})
//bind cb 'checked' to boolean
	//vm.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
CHERRY1 = function () {
	$.x('o')
	OK({
		wants: $o(1),
		flav: $oA(["cherry", "almond"])
	})
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cb().ch$('flav').v('cherry')
			),
			$.d([$.p($.sp('Almond'), $.cb().ch$('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cb().ch$('flav').v('glut'))
		])
	]).vs$('wants')
	$.in(function () {
		vm.flav.push("glut")
	})
}
TASKS1 = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
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
KOC1 = function () {
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
					$.d([$.h2().bT('title'), $.p().bT('content'),
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
CHL1 = function () {
	$.h1('shown!').sl().v$()
	$.cb().ch$()
	ok()
}
SLOP1 = function () {
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
	SLOP = function () {
		SELMULTI = SLM = function () {
			$.p('Where you want to go?', $.sl().at({size: 5, multiple: true}).b({
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
		SELOP = function () {
			$.x(null, 'selectedOptions')
			$.p('Where?', $.sl().at({
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
		alt = function () {
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
}
KOSL1 = function (n, v) {
	$.x('o').h1('dests')
	$.slO('cunts')
	ok('cunts',
			ko.oa('Fran', 'Ger', 'Spa'))
	$.in(2, function () {
				vm.cunts.push('Chi')
			},
			'*'
	)
}
SEL1 = CUNTS = function (n, v) {
	$.sl().o$('cunts')
	ok('cunts', $oa('Fran', 'Ger', 'Spa'))
	_.in(2, function () {
		vm.cunts.push('Chi')
	})
}
SLO1 = SELECTBINDING = function () {
	$.sl.o$ = function (a) {
		//= OptionBoundSelect = $sl$o = $.sel.op = sel$op = $.sO = $.slO
		return $.sl().o$(a)
	}
	$.sl.o$()
}
$.fn.o$ = $.fn.op$ = _optionbind = function (s) {
	return this.b('options', s)
}
$.fn.sO$ = $.fn.bSO = function (s) {
	return this.b('selectedOptions', s)
}
$.fn.sm$ = function (s) {
	return this.b('submit', s)
}
//bind cb and bind ip to 'enable'
KOEN = function () {
	$.x()
	$.p().A($.cbC('hasPhone'), 'I have phone')
	$.p('Your cellphone number').A(
			$.ip().b({v: 'num', en: 'hasPhone'}))
	ok({hasPhone: ko.o(0), num: ''})
}
///*** PERFECT FOR EDITTING A PROFILE IP
KOFC = function () {
	$.x()
	$.p('Name:').A(
			$.ip().b({
				vs: 'editing', f: 'editing',
				v: 'name'
			}),
			$.d('r').b({
				vs: '!editing()',
				t: 'name',
				$: 'edit'
			})
	)
	$.p('Click the name to edit it; click elsewhere to apply changes')
	function VM(n) {
		var vm = this
		vm.name = ko.o(n)
		vm.editing = ko.o()
		vm.edit = function () {
			vm.editing(1)
		}
	}
	
	ok(new VM("Bert Bertington"))
}
//bind cb 'checked' to boolean
SPAM = function () {
	$.x('o', 'spam')
	$.p('spam? ').A(
			$.cbC('spam')
	)
	ok({spam: ko.o(1)})
	$.in(2, function () {
		vm.spam(0)
	})
}
KOIP = function () {
	$.z('x')
	$.p('Login name:').A(
			$.ipTi('un'))
	$.p('Pw:').A(
			$.pwTi('pw'))     // $.p(['Pw:', $.pwTi('pw')])    //<p> <input type="password" data-bind="textInput: userPassword" /></p>
	$.A(
			'vm: ',
			$.pre().bT(
					'ko.toJSON($root, null, 2)'
			)
	)
	ok({un: ko.o(''), pw: ko.o('abc')})
}
CHERRY = function () {
	$.x('o')
	OK({
		wants: $o(1),
		flav: $oa(["cherry", "almond"])
	})
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'),
					$.cC('flav').v('cherry')
			),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
	$.in(function () {
		vm.flav.push("glut")
	})
}
//broken
TASKS = function () {
	$.z().h3('Tasks')
	$.f().bSb('aT').A().A("Add task: ",
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
 