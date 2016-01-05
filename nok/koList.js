KO1 = KODEL = DELETEWORKS = ADD3 = ULP = function () {
	ok(function () {
		$s({
			bd: {C: 'x', c: 'y'}, $: {
				C: 'n', c: 'z',
				M: 5, fS: 42
			}, sp: {C: 'o', c: 'z'}
		})
		cl$('add', 'ADD')
		e$('people', $.d([
			'name: ',
			t$('$index'), t$('name'),
			cl$('$root.rm', 'DELETE')
		]))
		cl$('add', 'ADD')
		var o = {people: $oA([{n: 'B'}, {n: 'Ch'}, {n: 'De'}])}
		o.add = function () {
			o.people.push({n: "New at " + new Date().time})
		}
		o.rm = function () {
			o.people.remove(this)
		}
		return o
	}())
}
KO2 = ADD0 = EACHDIVADD = EDA = function () {
	$.d([$.p(
			t$('f'),
			' ',
			t$('l')
	)]).e$('peep')
	vm = {
		peep: $oA([
			{f: 'B', l: 'Bb'},
			{f: 'C', l: 'Cc'},
			{f: 'D', l: 'Dd'}
		])
	}
	ok(vm)
	$.bt('push', function () {
		vm.peep.push({f: 'j', l: 'y'})
	})
}
KO3 = LST = function (n, ch) {
	LST1 = function (n, ch) {
		$s({
			_sl: {
				fS: 16,
				C: 'i', c: 'j',
				position: 'relative',
				display: 'inline-block',
				P: 66,
				h: '60%'
			}
		})
		$.f().A('Add item:',
				$.ip().tI$('itemToAdd'),
				$.sm('Add').en$('itemToAdd().length > 0')
		).sm$('addItem')
		$.p('Your values: ')
		$.sl().at({multiple: "multiple", height: 5})
				.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
		$.d([
			$.bt('Remove').b({cl: 'removeSelected', en: 'selectedItems().length > 0'}),
			$.bt('Sort').b({cl: 'sortItems', en: 'allItems().length > 1'})
		])
		var BetterListModel = function () {
			this.itemToAdd = ko.observable("");
			this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
			this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
			this.addItem = function () {
				$l('add')
				if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
				// Prevent blanks and duplicates
					this.allItems.push(this.itemToAdd());
				this.itemToAdd(""); // Clear the text box
			};
			this.removeSelected = function () {
				this.allItems.removeAll(this.selectedItems());
				this.selectedItems([]); // Clear selection
			};
			this.sortItems = function () {
				this.allItems.sort();
			};
		}
		ok(vm = new BetterListModel());
	}
	$s({
		_sl: {
			fS: 16,
			C: 'i', c: 'j',
			position: 'relative',
			display: 'inline-block',
			P: 66,
			h: '60%'
		}
	})
	$.f().A('Add item:',
			$.ip().tI$('itemToAdd'),
			$.sm('Add').en$('itemToAdd().length > 0')
	).sm$('addItem')
	$.p('Your values: ')
	$.sl().at({multiple: "multiple", height: 5})
			.b({o: 'allItems', sO: 'selectedItems'}).K('sl')
	$.d([
		cl$('removeSelected', 'Remove')
				.en$('selectedItems().length > 0'),
		cl$('sortItems', 'Sort').en$('allItems().length > 1')
	])
	var BetterListModel = function () {
		this.itemToAdd = ko.observable("");
		this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]); // Initial items
		this.selectedItems = ko.observableArray(["Ham"]);                                // Initial selection
		this.addItem = function () {
			$l('add')
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
			// Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		}
		this.removeSelected = function () {
			$l('rm')
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		}
		this.sortItems = function () {
			$l('sort')
			this.allItems.sort();
		}
	}
	ok(vm = new BetterListModel());
}
KO4 = TBE = function () {
	$.t([$.tH().A($.tr().A(
			$.th().A('First name'),
			$.th().A('Last name')
	)),
		$.tB().e$('people').A(
				$.tr().A($.td().t$('fn'),
						$.td().t$('ln')))])
	ok({
		people: [
			{fn: 'B', ln: 'Bert'},
			{fn: 'Ch', ln: 'Char'},
			{fn: 'De', ln: 'Dent'}
		]
	})
}
KO5 = TBTR = function () {
	$.bd().fS(30)
	$.t([$.tH([$.tr([$.th('F'), $.th('L')])]),
		$.tB().e$('peep')]).A($.tr([$.td().t$('f'),
		', ', $.td().t$('l')]))
	$.t().e$('peep').A(
			$.tH([$.tr([$.th('F'), $.th('L')])]),
			$.tr() [
					$.tr([$.td().t$('f'),
						', ', $.td().t$('l')])])
	//  $.t([$.tH([$.tr([$.th('F'), $.th('L')])]), $.tBE('peep', [$.tr([$.tdT('f').col('b'), ', ', $.tdT('l').col('w')])])])// <- $.fn.tE= $.fn.tBE ? // (not tableHTML)
	ok({peep: $O([{f: 'a', l: 'A'}, {f: 'b', l: 'B'}, {f: 'c', l: 'C'}])})
	//ok({ peep: [{f:'a',l:'A'},      {f:'b',l:'B'}, {f:'c',l:'C'}]})
}
SEAT = SEAT_RESERVATIONS = function () {
	$Ms('TUTC')
	$.h2().A('Your seat reservations (', t$("seats().length"), ')')
	$.t().A(
			$('<thead>').A($.tr().A($('<th>Passenger name</th><th>Meal</th><th>Surcharge</th><th></th>'))),
			$('<tbody>').e$('seats').A($.tr().A(
					$.td().t$('name'),
					$.td($.sl().b("options: $root.availableMeals, value: meal, optionsText: 'mealName'")),
					$.td().t$('formattedPrice'),
					$.td().A($.a('Remove', '#').b$("$root.removeSeat")))))
	$.h3().A('Total surcharge: $', $.sp().t$('totalSurcharge().toFixed(2)')).vs$('totalSurcharge() > 0')
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
 