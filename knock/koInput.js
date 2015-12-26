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
function comput() {
	COMP = function () {
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
	function computed() {
		K1 = function () {
			$.p('f').A($.S().t$('f'))
			$.p('l').A($.S().t$('l'))
			$.p('f:').A($.ip().v$('f'))
			$.p('l:').A($.ip().v$('l'))
			$.p('full:').A($.S().t$('full'))
			$.bt('tU').b$('tU')
			vm = {
				f: $o('a'),
				l: $o('b'),
				tU: function () {
					this.l(_.tU(this.l()))
				}
			}
			vm.full = ko.c(function () {
				return vm.f() + ' ' + vm.l()
			})
			ok(vm)
		} //bT  bV(value)  b$ ko.c(computed)}
		K2 = COMPUTED = CPD = function () {
			$.d().A(
					$.p('F: ', $.b().bT('f')),
					$.p('L: ', $.b().bT('l')),
					$.p('F: ', $.ip().bV('f')),
					$.p('L: ', $.ip().bV('l')).id('l'),
					$.p('L: ', $.b().bT('fl')),
					$.bt('caps').b$('capL')
			)
			vm = {
				f: $o('j'),
				l: $o('y'),
				capL: function () {
					this.l(_.tU(this.l()))
				}
			}
			vm.fl = ko.c(function () {
				return vm.f() + ' ' + vm.l()
			})
			ok(vm)
			function klassk() {
				KNOCKS = function () {
					format()
					s2(h1('KNOCKOUT'),
							pg('F: ', _B().b('t', 'f')),
							pg('L: ', _B().b('t', 'l')),
							pg('F: ', ip().b('V', 'f')),
							pg('L: ', ip().b('V', 'l')).id('l'),
							pg('L: ', _B().b('t', 'fl')),
							bt('caps').b('$', 'capL'))
					vm = {}
					vm.f = $o('j')
					vm.l = $o('y')
					vm.fl = ko.c(function () {
						return vm.f() + ' ' + vm.l()
					})
					vm.capL = function () {
						vm.l(uC(vm.l()))
					}
					ko.ab(vm)
				}
			}
		}
	}

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
function task() {
	TASKS = function () {
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
				$.ip().bV('nT').ph("What?"),
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
	TASK = function () {
		$.z('r')
	}
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
function huh() {
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
	KOSCR = function () {
		$.bd().A(
				$.scrp('tt').A($.h1('afsdfds')),
				$.d().bT("{name:'tt'}")
		)
		ok({})
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
//scrp
KOSCR = function () {
	KOTEMP = function () {
		$.format()
		s2(
				ip('r').at({name: 'choices', value: 'summary'}).b('ch', 'selectedView'), sp('summary'),
				ip('r').at({name: 'choices', value: 'details'}).b('ch', 'selectedView'), sp('details'),
				hr(),
				_d().b('T', "{name: templateToUse, foreach: articles }"),
				script("summary")(_d().b('t', 'title')),
				script('details')(
						_d()(
								h2().b('t', 'title'),
								pg().b('t', 'content'),
								bt('edit').b('$', '$parent.selectedArticle'))
				),
				script('edit')(
						_d()(ip().b('v', 'title'),
								br(),
								ip().b('v', 'content'))
				))
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
	KOTEMP2 = function () {
		$.B().A(
				scrp('tt').A($.h1('afsdfds')
				),
				$.d().b('T', "{name:'tt'}")
		)
		ok({})
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
	KOC = function () {
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
	$.bd().A(
			$.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
	);
	ko.b({})
}
// kob= ko.observable.prototype; kob.rm= kob.remove
KOC = function () {
	$.ip('r').at({
		name: 'choices',
		value: 'summary'
	}).bC('selectedView');
	$.sp('summary').A()
	$.ip('r').at({name: 'choices', value: 'details'}).c$('selectedView');
	$.sp('details').A();
	$.hr().A()
	$.d().t$("{name: templateToUse, " + "foreach: articles }")
	$.scrp("summary").A().A($.d().bT('title')),
			$.scrp('details').A(
					$.d([$.h2().bT('title'), $.p().bT('content'),
						$.bt('edit').b$('$parent.selectedArticle')]))
	$.scrp('edit').A().A(
			$.d([$.ip().bV('title'),
				$.br(), $.ip().bV('content')])
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

$.fn.u$ = $.fn.uN$ = function (s) {
	return this.b('uniqueName' + s)
}
$.fn.tp$ = $.fn.bTp = function (s) {
	return this.b('template', s)
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