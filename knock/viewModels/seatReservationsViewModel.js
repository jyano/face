function seats() {
	SEATS = KNOCKS1 = function () {
		$.format()
		s2(
				h2('Your seat reservations'),
				$.t().A($.tH().A($.tr().A(
								$.th('Passenger name'),
								$.th('Meal'), $.th('Surcharge'), $.th(''))
				), $.tB().b('fe', 'seats').A(
						$.tr().A(
								$.td().b('t', 'n'),
								$.td().b('t', 'm().mn'),
								$.td().A(
										// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
								),
								$.td().b('t', 'm().p')
						))),
				$.bt('reserve').b('$', 'add')
		)
		AM = [
			{mn: "fries", p: 10},
			{mn: "fish", p: 20},
			{mn: "noodles", p: 30}
		]
		sR = function (n, m) {
			return {
				n: n,
				m: ko.o(m)
			}
		}
		vm = {}
		vm.seats = ko.oa([
			sR('Jo', AM[0]), sR('Bo', AM[1])
		])
		vm.add = function () {
			vm.seats.push(
					sR('', AM[2])
			)
		}
		ko.ab(vm)
	}
	AM = [
		{mn: "fries", p: 10},
		{mn: "fish", p: 20},
		{mn: "noodles", p: 30}
	]
	sR = function (n, m) {
		return {
			n: n,
			m: ko.o(m)
		}
	}
	SEATS = KNOCKS1 = function () {
		$.format()
		s2(h2('Your seat reservations'),
				_t()(
						thead()(
								tr()(
										th('Passenger name'),
										th('Meal'),
										th('Surcharge'),
										th(''))
						), tbody().b('fe', 'seats')(
								tr()(
										td().b('t', 'n'),
										td().b('t', 'm().mn'),
										td()(
												// sel() //.b({o:'$root.AM', V:'m', ot:'mn'})
										),
										td().b('t', 'm().p')
								))),
				bt('reserve').b('$', 'add')
		)
		vm = {}
		vm.seats = ko.oa([
			sR('Jo', AM[0]), sR('Bo', AM[1])
		])
		vm.add = function () {
			vm.seats.push(
					sR('', AM[2])
			)
		}
		ko.ab(vm)
	}
	SEATS = TPLIST = function () {
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		$.h2('Your seat reservations').A(
				$.sp().bT('seats().length')
		)
		$.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
				$.s().bT('totalSurcharge().toFixed(2)')
		)
		$.t().A(
				$.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge'))),
				$.tB().bTp("{name:'reservationTemplate', foreach: seats}")
		)
		$.bt('Reserve another seat').b({
			$: 'addSeat',
			en: 'seats().length < 5'
		})
		$('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
				$.tr().A(
						$.td().A($.ip().bV('name')),
						$.td().A($.sl().b({o: 'availableMeals', ot: 'mealName'})),
						$.td().A($.a('Remove').b$('remove')))
		)
		// Raw catalog data - would come from the server
		var availableMeals = [
			{mealName: "Standard (sandwich)", price: 0},
			{mealName: "Premium (lobster)", price: 34.95},
			{mealName: "Ultimate (whole zebra)", price: 290}
		]
		// Class to represent a row in the reservations grid
		seatReservation = function (name) {
			this.name = name;
			this.availableMeals = availableMeals;
			this.meal = ko.observable(availableMeals[0]);
			this.remove = function () {
				viewModel.seats.remove(this)
			}
			this.formattedPrice = ko.dependentObservable(function () {
				var price = this.meal().price;
				return price ? "$" + price.toFixed(2) : "None";
			}, this);
		}
		// Overall viewmodel for this screen, along with initial state
		vm = {
			seats: ko.observableArray([
				new seatReservation("Steve"),
				new seatReservation("Bert")
			])
			, addSeat: function () {
				this.seats.push(new seatReservation());
			}
		}
		vm.totalSurcharge = ko.dependentObservable(function () {
			var total = 0;
			for (var i = 0; i < this.seats().length; i++)
				total += this.seats()[i].meal().price;
			return total;
		}, vm);
		ko.b(vm)
		ok(vm)
	}
	OLDSEATS = TUTC1 = function () {
		availableMeals = [
			{mealName: "Standard (sandwich)", price: 0},
			{mealName: "Premium (lobster)", price: 34.95},
			{mealName: "Ultimate (whole zebra)", price: 290}
		]
		$.h2().A('Your seat reservations (', $.sp().bT("seats().length"), ')')
		$.t().A(
				$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
				$('<tbody>').e$('seats').A($.tr().A(
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
	SEATS = K4 = TUTC = COL = TABLE = function () {
		$.h2(['seats:(',
			$.sp().t$("_.z(Ss())"),
			')'])
		$.t([$.tH([$.tr([$.th('n'), $.th('M'), $.th('$$'), $.th()])]),
			$.tBT('Ss', $.tdT('n'), $.td($.slB({o: '$root.Ms', v: 'm', oT: "'n'"})),
					$.tdT('fm'), $.td([$.a$('XX', "$root.rm")]))])
		$.h3(['$$: $', $.sp().t$('_.tF($$())')]).bVs('$$()>0');
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
	}
	MENU = TABLE = function () {
		$.h2('Your seat reservations')
		$.bt('reserve').b$('A')
		AM = [{n: 'fries', p: 10}, {n: 'fish', p: 20}, {n: 'noodles', p: 30}]
		$.t().A($.tHR(['psngr n', 'm', '$$', '']), $.tB().e$('seats').A(
						$.tr().A(
								$.td().t$('n'),
								$.td().t$('m().n'),
								$.td().A(
										$.sl().b({
											o: '$root.AM',
											ot: 'm'    //v : 'm',
										})
								),
								$.td().t$('m().p')
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
//  cust bind:
	SEATS = TABLE = TPLIST = function () {
		Meals = [
			{m: "sand", p: 0},
			{m: "lobst", p: 34.95},
			{m: "zebra", p: 290}
		]
		$.h2('Your rsv').A($.spT('seats().length'))
		$.h3('Cost:').bVs('cost()>0').A($.spT('cost().toFixed(2)'))
		$.t([
			$.tH([$.tr(['Pass name', 'Meal', 'charge'])]),
			$.tB().bTp("{n:'rsvTp', foreach: seats}") //?
		])
		$.bt('Rsv again').b({$: 'A', en: 'seats().length < 5'})
		$('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
				$.tr([
					$.td([$.ipV('n')]),
					$.td([$.sl().b({o: 'Meals', ot: 'meal'})]),
					$.td([$.a$('del', 'rm')])
				])
		)
		seatRsv = function (n) {
			this.n = n
			this.Meals = Meals;
			this.meal = ko.o(Meals[0]);
			this.rm = function () {
				vm.seats.remove(this)
			}
			this.fmtPrice = ko.do(function () {
				var price = this.meal().p
				return price ? "$" + price.toFixed(2) : "None";
			}, this)
		}
		vm = {
			seats: ko.oa([new Rsv("St"), new Rsv("Br")]),
			A: function () {
				this.seats.push(new Rsv())
			}
		}
		vm.cost = ko.do(function () {
			var tot = 0;
			for (var i = 0; i < this.seats().length; i++)
				tot += this.seats()[i].meal().price;
			return tot
		}, vm)
		ok(vm)
	}
}
