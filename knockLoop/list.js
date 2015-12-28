ADDER = function () {
	 
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
//bind bt 'click' to parent.rem
ADDER = function () {
	$.x()
	$.h4('People')
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: ko.oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
}
// kob= ko.observable.prototype; kob.rm= kob.remove
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
	ko.b({
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
CHERRY = function () {
	$.x('o')
	$.p($.sp('spam?'), $.cC('wants'))
	$.d(['Preferred flavors of spam:',
		$.d([
			$.p($.sp('cherry'), $.cC('flav').v('cherry')),
			$.d([$.p($.sp('Almond'), $.cC('flav').v('almond'))]),
			$.p($.sp('Glut'), $.cC('flav').v('glut'))
		])
	]).bVs('wants')
	ok({
		wants: ko.o(1),
		flav: ko.oa(["cherry", "almond"])
	})
	// vm.flav.push("msg")
	/*
	 function $.cKO(m, b, v){
	 var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
	 if(v){ cb.v(v)}
	 return p
	 }*/
}
FOREACH = function () {
	z()
	_d().b('fe', 'p')(
			pg(
					sp().b('t', 'f'),
					sp(' '),
					sp().b('t', 'l'))
	).a()
	vm = {
		p: ko.oa([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}])
	}
	ko.ab(vm)
	f = function () {
		vm.p.push({f: 'jason', l: 'yano'})
	}
}
KOGRID = function () {
	$.z().f().at({action: '/someServerSideHandler'}).A(
			$.p('You have asked for').A(
					$.sp('&nbsp;').bT('gifts().length'),
					'gift(s)'),
			$.t().bVs('gifts().length > 0').A(
					$.tH().A(
							$.tr().A(
									//tHR
									$.th().A('Gift name'),
									$.th().A('Price')
							)),
					$.tB().bE('gifts').A(
							$.tr().A(  //tBR
									$.td().A($.ip().K('required').b({v: 'name', u: true})),
									$.td().A($.ip().K('required number')
											.b({v: 'price', u: true})),
									$.td().A(
											$.a('delete').b$('$root.removeGift')
									)))),
			$.bt('add gift').b$('addGift'),
			$.sb().bEn('gifts().length > 0')
	).A()
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
		}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
	}
	ko.b(new Gift([
		{name: "Tall Hat", price: "39.95"},
		{name: "Long Cloak", price: "120.00"}
	]))
	// $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
}
SPAM2 = function () {
	z()
	cbKO('Send me spam', 'wantsSpam').A()
	$.div().koBind('vs', 'wantsSpam')(
			'Preferred flavors of spam:',
			$.div().A(cbKO('Cherry', 'flav', 'cherry')),
			$.div().A(cbKO('Almond', 'flav', 'almond')),
			$.div().A(cbKO('Glut', 'flav', 'glut'))
	).A()
	vm = {
		wantsSpam: ko.o(true),
		flav: ko.oa(["cherry", "almond"])
	}
	ko.aB(vm)
	//viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
}
//bind cb 'checked' to boolean
SPAM = function () {
	$.x()
	$.cbC('spam').a2($.p('spam? '))
	$b({spam: ko.o(1)})
	_.in(2, function () {
		vm.spam(0);
		$.c$()
	})
}
SPAM = function () {
	$l('spam')
	z()
	c = cbKO('Send me spam', 'wantsSpam').A()
	vm = {wantsSpam: ko.o(true)}
	ko.aB(vm)
}
LIST = function () {
	$.x('z')
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
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
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
}
LIST = function () {
	$.x('z')
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
		itemToAdd: ko.o(''),
		allItems: ko.oa(['a', 'b', 'c']),
		selectedItems: ko.oa(['d']),
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
}
//sort, remove
BTRLST1 = function () {
	$.x('o')
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
}
BTRLST = function () {
	$.x('o')
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
}
function classic() {
	BETTERLIST = function () {
		z()
		$.d()(
				fo().b('S', 'addItem')(
						sp('add item'),
						tx().b({
							v: 'itemToAdd'//,vu:'afterkeydown'
						}),
						sm('add').b('ea', 'itemToAdd().length>0')),
				_d()(
						sp('Your values:'),
						sel().h(5).b({
							o: 'allItems',
							so: 'selectedItems'
						})
				),
				_d()(
						bt('remove').b({
							c: 'removeSelected',
							ea: 'selectedItems().length>0'
						}),
						bt('sort').b({
							c: 'sortItems',
							ea: 'allItems().length>1'
						}))
		).a()
		ko.ab(o = BLM())
	}
}
tabl()
function tabl() {
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
}
	 