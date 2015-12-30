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
TPLIST = function () {
	$.x()
	Meals = [{m: "sand", p: 0}, {m: "lobst", p: 34.95}, {m: "zebra", p: 290}]
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
				$.td([
					$.sl().b({o: 'Meals', ot: 'meal'})
				]),
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