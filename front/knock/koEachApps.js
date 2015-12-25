K3 = function () {
	z()
	ko.$bH({
		fadeVisible: {
			i: function (e, v) {
				var v = v()
				$l('v:' + v)
				$(e).toggle(v)
			}, u: function (el, vAc) {
				vAc() ? $(el).fadeIn() : $(el).fadeOut()
			}
		},
		jqButton: {
			i: function (e) {
				$(e).button()
			}, u: function (e, vA) {
				$(e).button("option", "disabled", vA().enable === false);
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
	
	ok(new VM("factors?", 10, ["Functionality", "News", "dropshadows", "testimonials"]))
}
EACHDIVADD = EDA = function () {
	$.dE('peep', [$.p($.spT('f'), ' ', $.spT('l'))])
	vm = {peep: $oa([{f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}])}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
K4 = TUTC = COL = function () {
	z();
	$Ms('TUTC');
	$.h2(['seats:(', $.spT("_.z(Ss())"), ')'])
	$.t([$.tH([$.tr([$.th('n'), $.th('M'), $.th('$$'), $.th()])]),
		$.tBT('Ss', $.tdT('n'), $.td($.slB({o: '$root.Ms', v: 'm', oT: "'n'"})),
				$.tdT('fm'), $.td([$.a$('XX', "$root.rm")]))])
	$.h3(['$$: $', $.sp().bT('_.tF($$())')]).bVs('$$()>0');
	$.bt('+').b({$: 'A', en: '_.z(Ss())<5'})
	ok(new (function () {
		var vm = this;
		vm.Ms = [{n: "bat", $$: 0}, {n: "pig", $$: 3.9}, {n: "zeb", $$: 29}]
		vm.Ss = $oa([Res("jas"), Res("rig")]);
		vm.$$ = ko.c(function () {
			var $$ = 0, Ss = vm.Ss();
			_.e(Ss, function (s) {
				$$ += s.m().$$
			});
			return $$
		});
		vm.A = function () {
			vm.Ss.p(Res())
		};
		vm.rm = function (s) {
			vm.Ss.rm(s)
		};
		function Res(n, m) {
			var r = {n: n || 'ano', m: $o(m || vm.Ms[0])}
			r.fm = ko.c(fm);
			return r;
			function fm() {
				return fm(r.m().$$)
				function fm($$) {
					return !$$ ? 'Name' : '$' + _.tF($$)
				}
			}
		}
	}))
	function old() {
		TUTC1 = function () {
			z();
			$Ms('TUTC')
			availableMeals = [
				{mealName: "Standard (sandwich)", price: 0},
				{mealName: "Premium (lobster)", price: 34.95},
				{mealName: "Ultimate (whole zebra)", price: 290}
			]
			$.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
			$.t().A(
					$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
					$('<tbody>').bE('seats').A($.tr().A(
							$.td().bT('name'),
							$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
							$.td().bT('formattedPrice'),
							$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
			$.h3().A('Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')).bVs('totalSurcharge() > 0')
			$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
			ok(new ReservationsViewModel())
			function SeatReservation(name, initialMeal) {
				var self = this;
				self.name = name;
				self.meal = $o(initialMeal);
				self.formattedPrice = ko.computed(function () {
					var price = self.meal().price;
					return price ? "$" + price.toFixed(2) : "None";
				});
			}
			
			function ReservationsViewModel() {
				var self = this;
				// Non-editable catalog data - would come from the server
				self.availableMeals = availableMeals
				// Editable data
				self.seats = $oa([
					new SeatReservation("Steve", self.availableMeals[0]),
					new SeatReservation("Bert", self.availableMeals[0])
				])
				self.totalSurcharge = ko.computed(function () {
					var total = 0;
					for (var i = 0; i < self.seats().length; i++)
						total += self.seats()[i].meal().price;
					return total;
				})
				self.addSeat = function () {
					self.seats.push(new SeatReservation("", self.availableMeals[0]));
				}
				self.removeSeat = function (seat) {
					self.seats.remove(seat)
				}
			}
		} //full collection app from website !!!!!!!
	}
}
WITHPARENT = WPA = function () {
	$.f().A('Twt-acc:', $.ip().bV('twtN'), $.sm().A('Get twts')).b({sm: 'getTwts'})
	$.d([$.h3(['Rec twts fetched at', $.spT('retrDt')]),
		$.ol().bE('topTwts').A($.liT('text')),
		$.bt('Clear twts').b('$', '$parent.clearRes')]).b({w: 'resDa'})
	ok(new (function () {
		var vw = this
		vw.twtN = $o('@ex');
		vw.resDa = $o(0)
		vw.clearRes = function () {
			vw.resDa(undefined)
		}
		vw.getTwts = function () {
			var n = vw.twtN();
			vw.resDa({
				topTwts: [{text: n + ':nice'}, {text: n + ':trump'}, {text: n + ':sex'}],
				retrDt: new Date()
			})
		}
	}))
}
TTR = function () {
	$('body').fS(30)
	$.t([
		$.tH([$.tr([$.th('F'),
			$.th('L')])]),
		$.tBE('peep', [
			$.tr([$.tdT('f'), ', ', $.tdT('l')])
		])])//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({
		peep: $oa([{f: 'a', l: 'A'},
			{f: 'b', l: 'B'},
			{f: 'c', l: 'C'}])
	}) //ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
	function classik() {
		KOEACH = function () {
			format()
			s2(
					_t()(
							thead()(
									tr()(
											th()('First name'),
											th()('Last name')
									)
							),
							tbody().b('E', 'people')(
									tr()(
											td().b('t', 'fn'),
											td().b('t', 'ln'))
							)
					)
			)
			ko.ab({
				people: [
					{fn: 'B', ln: 'Bert'},
					{fn: 'Ch', ln: 'Char'},
					{fn: 'De', ln: 'Dent'}
				]
			})
		}
	}
}
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
VIRT = function () {
	_$({
		C: 'p',
		A: [
			$.d().b({
				randomOrder: true
			}),
			$.d('First'),
			$.d('Second'),
			$.d('Third'),
			$.ul().bE('mDateTime').A($.li().A($.ul())),
			$.uE("$root.matter.index.type()[$data]", [$.li().A()])]
	})
}
VIRT = function () {
	_$({
		C: 'p',
		A: [
			$.d().b({
				randomOrder: true
			}),
			$.d('First'),
			$.d('Second'),
			$.d('Third'),
			$.ul().bE('mDateTime').A($.li().A($.ul())),
			$.uE("$root.matter.index.type()[$data]", [$.li().A()])]
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
TWT = function () {
	$.x('r', 'twt')
	OK({
		un: ko.o('@ex'),
		da: ko.o(),
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
	$.fSb('g', ['un:',
		$.ipV('un'), $.sb('Get')
	])
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS', $.liT('ms')),
		$.bt$('clr', '$parent.clr')
	]).A()
}
TWT = function () {
	$.x('r', 'twt')
	OK({
		un: ko.o('@ex'),
		da: ko.o(),
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
	$.fSb('g', ['un:',
		$.ipV('un'), $.sb('Get')
	])
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS', $.liT('ms')),
		$.bt$('clr', '$parent.clr')
	]).A()
}
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
ULNEST = function () {
	$.x('x').h2('Pp')
	$.ulE('peep', $.d([  // name has length children
				$.spT('n'), 'has', $.spT('ch().length'), 'children &nbsp;',
				//new
				$.a$('New', 'A')
			]),
			$.uLE('ch',
					$.spT(), //child name
					$.spVs('$root.showDT').A('(child rendered at ', $.spT('$Dt().getSeconds()'), ')')
			)
	)
	$.lb('show time: ').A($.cbC('showDT'))
	//anonymous vm
	ok({peep: peep, showDT: $o()})
}
BINDUL = BUL = MONK = function () {
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	//  $.s$('a','play');
//    $.U('cl',[            'my name is ',$.sT('n'),            ' and i like to play ', $.sT('c')])
	$.uE('list', [$.li(['my name is ',
		$.sT('n'), ' and i like to play ',
		$.sT('c')])])
	vm = {
		monkey: $o(),
		list: $oa(),
		A: function () {
			this.list.p({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
	vm.A().A().A()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
ULADD = ULA = function () {
	$.lb('Show time: ').A($.cbC('showDT'))
	$.uE('peep', [$.li().A(
			$.d([$.spT('n'), 'has',
				$.spT('ch().length'),
				'children &nbsp;',
				$.a$('New', 'A')]),
			$.ulE('ch', [
				$.li([$.spT(), $.spVs('$root.showDT').A(
						' (child rendered at ', $.spT('new Date().getSeconds()'), ')'
				)])]))])
	ok({
		peep: peep,
		showDT: $o()
	})
	peep()
	//add, conditional el
	//anonymous vm
}
ULDEL = ULD = function () {
	$.h4('People')
//bind bt 'click' to parent.rem
	$.ulE('peep', [$.li([
		$.sp('pos/name: '),
		$.spT('$index'),
		$.spT('n'),
		$.$bt('del', 'rm', '-')
	])])
	$.$bt('A')
	ok({
		peep: $oa({n: 'B'}, {n: 'Ch'}, {n: 'De'}),
		A: function () {
			this.peep.push({n: "New at " + $D()})
		},
		rm: function (a) {
			vm.peep.remove(this)
		}
	})
	function klassic() {
		ULINDEX = function () {
			format()
			s2(
					h4('People'),
					ul().b('E', 'people')(
							li()(
									sp('pos/name: '),
									sp().b('t', '$index'),
									sp().b('t', 'n'),
									lk(' X').b('$', '$parent.rem')
							)
					),
					bt('add').b('$', 'add')
			)
			vm = function () {
				var o = {}
				o.people = $oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
				o.add = function () {
					o.people.push({n: "New at " + new Date()})
				}
				o.rem = function () {
					o.people.remove(this)
				}
				return o
			}
			ko.ab(vm()
			)
		}
	}
}
ULROOT = function () {
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	$.A(
			ul().k('fs').b('E', "fs")(
					li().b("text:$data, css:{selected:$data==$root.chFI()},click:$root.gtf")))
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
KOEACH = function () {
	$.format()
	s2(
			$.t().A(
					thead()(
							tr()(th()('First name'),
									th()('Last name'))),
					tbody().b('E', 'people')(tr()(
									td().b('t', 'fn'),
									td().b('t', 'ln'))
					)
			)
	)
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KOEACH2 = function () {
	format()
	s2(
			h4('People'),
			ul().b('E', 'people')(
					li()(
							sp('pos/name: '),
							sp().b('t', '$index'),
							sp().b('t', 'n'),
							lk(' X').b('$', '$parent.rem')
					)
			),
			bt('add').b('$', 'add')
	)
	vm = function () {
		var o = {}
		o.people = ko.oa([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])
		o.add = function () {
			o.people.push({n: "New at " + new Date()})
		}
		o.rem = function () {
			o.people.remove(this)
		}
		return o
	}
	ko.ab(vm()
	)
}