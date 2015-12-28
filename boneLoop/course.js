availableMeals = [
	{mealName: "Standard (sandwich)", price: 0},
	{mealName: "Premium (lobster)", price: 34.95},
	{mealName: "Ultimate (whole zebra)", price: 290}
]
TUTCLSTEP1 = function () {
	z();
	$.h2('Your seat reservations')
	$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
			$('<tbody>').bE('seats').A(
					$.tr().A(
							$.td().bT('name'),
							$.td().bT('meal().mealName'),
							$.td().bT('meal().price'))))
	ok(new ReservationsViewModel())
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
	}
	
	function ReservationsViewModel() {
		var self = this;
		// Non-editable catalog data - would come from the server
		self.availableMeals = availableMeals
		// Editable data
		self.seats = ko.observableArray([
			new SeatReservation("Steve", self.availableMeals[0]),
			new SeatReservation("Bert", self.availableMeals[0])
		])
	}
}
TUTCLSTEP2 = function () {
	z();
	$.h2('Your seat reservations')
	$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
			$('<tbody>').bE('seats').A(
					$.tr().A(
							$.td().bT('name'),
							$.td().bT('meal().mealName'),
							$.td().bT('meal().price'))))
	$.bt('reserve another seat').b$('addSeat')
	ok(new ReservationsViewModel())
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
	}
	
	function ReservationsViewModel() {
		var self = this;
		// Non-editable catalog data - would come from the server
		self.availableMeals = availableMeals
		// Editable data
		self.seats = ko.observableArray([
			new SeatReservation("Steve", self.availableMeals[0]),
			new SeatReservation("Bert", self.availableMeals[0])
		])
		self.addSeat = function () {
			self.seats.push(new SeatReservation("", self.availableMeals[0]));
		}
	}
}
TUTCLSTEP3 = function () {
	z();
	$.h2('Your seat reservations')
	$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
			$('<tbody>').bE('seats').A(
					$.tr().A(
							$.td().bT('name'),
							//  $.td().bT('meal().mealName'),
							$.td($.sl(
							).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
							$.td().bT(
									'formattedPrice'
									//'meal().price'
							)
					)))
	$.bt('reserve another seat').b$('addSeat')
	ok(new ReservationsViewModel())
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
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
		self.seats = ko.observableArray([
			new SeatReservation("Steve", self.availableMeals[0]),
			new SeatReservation("Bert", self.availableMeals[0])
		])
		self.addSeat = function () {
			self.seats.push(new SeatReservation("", self.availableMeals[0]));
		}
	}
}
TUTCLSTEP4 = function () {
	z();
	$.h2().A(
			'Your seat reservations (',
			$.sp().bT("seats().length"),
			')'
	)
	$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
			$('<tbody>').bE('seats').A(
					$.tr().A(
							$.td().bT('name'),
							//  $.td().bT('meal().mealName'),
							$.td($.sl(
							).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
							$.td().bT(
									'formattedPrice'
							),
							$.td().A(
									$.a('Remove', '#').b$("$root.removeSeat")
							)
					)))
	$.h3().A(
			'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')
	).bVs('totalSurcharge() > 0')
	$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
	ok(new ReservationsViewModel())
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
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
		self.seats = ko.observableArray([
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
}
TUTCL = function () {
	z();
	$.h2().A(
			'Your seat reservations (',
			$.sp().bT("seats().length"),
			')'
	)
	$.t($('<thead><tr> <th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th</tr></thead> >')).A(
			$('<tbody>').bE('seats').A(
					$.tr().A(
							$.td().bT('name'),
							//  $.td().bT('meal().mealName'),
							$.td($.sl(
							).b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
							$.td().bT(
									'formattedPrice'
							),
							$.td().A(
									$.a('Remove', '#').b$("$root.removeSeat")
							)
					)))
	$.h3().A(
			'Total surcharge: $', $.sp().bT('totalSurcharge().toFixed(2)')
	).bVs('totalSurcharge() > 0')
	$.bt('reserve another seat').b('click: addSeat, enable: seats().length < 5')
	ok(new ReservationsViewModel())
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
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
		self.seats = ko.observableArray([
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
}
TUTC = function () {
	z();
	$Ms('TUTC')
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
		self.meal = ko.observable(initialMeal);
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
		self.seats = ko.observableArray([
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
}
KOTUT1 = function () {
	$l('kotut1')
	z()
}
COURSE = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COURSE = function () {
	$.x('x')
	$.s$('a', 'play');
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
COURSE = function () {
	$.x('x')
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
	$.h1('monkey').bT('monkey')
	$.iV('monkey')
	$.sb('hello').b$('A')
	$.uE('list', [$.li(['my name is ', $.sT('n'), ' and i like to play ', $.sT('c')])])
	vm = {
		monkey: ko.o(),
		list: ko.oa(),
		A: function () {
			this.list.push({n: 'j', c: $r()})
		}
	}
	vm.monkey('elephant')
	ok(vm)
}
COURSE = function () {
	$.x('x')
	$.s$('a', 'play');
	$.U('cl', [
		'my name is ', $.sT('n'),
		' and i like to play ',
		$.sT('c')])
	ok({
		cl: ko.oa(),
		a: function () {
			this.cl.p({n: 'j', c: $r()})
			return this
		}
	})
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
TWT = function () {
	$.z()
	$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')])
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS', $.liT('ms')),
		$.bt$('Clr', ' $parent.clr')
	])
	ko.b({
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
			vm.da()
		}
	})
}
TWT = function () {
	$.x()
	$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')]).A()
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS',
				$.liT('ms')),
		$.bt$('clr', ' $parent.clr')
	])
	ok({
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
}
TWT = function () {
	$.x()
	$.fSb('g', ['u:', $.ipV('un'), $.sb('Get')]).A()
	$.dW('da', [
		$.h3('dt:', $.spT('dt')),
		$.olE('MS',
				$.liT('ms')),
		$.bt$('clr', ' $parent.clr')
	])
	ok({
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
}
$.uLE = function (a) {
	var g = G(arguments)
	return $.ulE(a, $.li(g.r))
}
//////////////
//bE, observableArray
KOOA = function () {
	$.x()
	OK('peep', $oa({f: 'B', l: 'Bb'}, {f: 'C', l: 'Cc'}, {f: 'D', l: 'Dd'}))
	$.dE('peep', [$.p(
			$.spT('f'), ' ', $.spT('l')
	)])
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
ADD = function () {
	$.x('x', 'course')
	OK({
		cl: $oa(),
		a: function () {
			this.cl.p({
				n: 'j', c: $r()
			})
			return this
		}
	})
	$.s$('a', 'play'); //the order of these mets should reverse
	$.U('cl', [
		'name is ', $.sT('n'), ' and gusta ', $.sT('c')
	])
	vm.a().a().a()
	//https://www.youtube.com/watch?v=JGwRIbWWqjE
}
DELETE = function () {
	$.x()
//bind bt 'click' to parent.rem
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
ROOT = function () {
	$.x('x')
	$.uE('fs', [$.li().b({
		t: '$data',
		s: '{selected: $data==$root.chFI()}',
		$: '$root.gtf'
	})
	]).K('fs')
	ok({
		fs: ['I', 'A', 'Se', 'Sp'],
		chFI: ko.o(),
		gtf: function (f) {
			$l('click: ' + 'f: ' + f + ', this: ' + this)
			f = f || 'frog'
			vm.chFI(f)
		}
	})
}
BARN = function () {
	$.x()
	$.ulE('PL', [$.li([
		$.sp('Planet: '),
		$.b().bT('n'),
		$.dI('cap', [$.pT('cap.n')])
	])])
	ok('PL', [
		{n: 'Merc', cap: null},
		{n: 'Earth', cap: {n: 'Barn'}}
	])
}