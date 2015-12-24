KNOCKS0 = function () {
	format()
	s2(
			$.h1('KNOCKOUT'),
			$.p('F: ', _B().b('t', 'first')),
			$.p('L: ', _B().b('t', 'last')),
			$.p('F: ', ip().b('V', 'first')),
			$.p('L: ', ip().b('V', 'last')).id('last'),
			$.p('L: ', _B().b('t', 'firstLast')),
			$.button('caps').b('$', 'capL')
	)
	vm = {}
	vm.first = ko.observable('j')
	vm.last = ko.observable('y')
	vm.firstLast = ko.computed(function () {
		return vm.first() + ' ' + vm.last()
	})
	vm.capL = function () {
		vm.last(uC(vm.last()))
	}
	ko.applyBindings(vm)
}
KNOCKS0 = function () {
	format()
	s2(h1('KNOCKOUT'),
			pg('F: ', _B().b('t', 'f')),
			pg('L: ', _B().b('t', 'l')),
			pg('F: ', ip().b('V', 'f')),
			pg('L: ', ip().b('V', 'l')).id('l'),
			pg('L: ', _B().b('t', 'fl')),
			bt('caps').b('$', 'capL'))
	vm = {}
	vm.f = ko.o('j')
	vm.l = ko.o('y')
	vm.fl = ko.c(function () {
		return vm.f() + ' ' + vm.l()
	})
	vm.capL = function () {
		vm.l(uC(vm.l()))
	}
	ko.ab(vm)
}
KNOCKS1 = function () {
	format()
	s2(
			h2('Your seat reservations'),
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
KNOCKS1 = function () {
	format()
	s2(
			h2('Your seat reservations'),
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
KNOCKS4 = function () {
	format()
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
			sp("You have"),
			_B("&nbsp;").b('t', "inc().length"),
			sp("inc task(s)"),
			sp("- beer!").b("visible: inc().length==0")
	)
	ko.ab(TLVM())
}
KNOCKS4 = function () {
	$.format()
	s2(
			$.h3('Tasks'),
			$.f().b("S", "aT").A(
					"Add task: ",
					$.ip().b('v', 'nT').ph("What?"),
					$.bt('Add').at('t', 's')
			),
			$.ul().A($.li().A(
							cb().b('ch', 'iD'),
							ip().b("value:t, disable:iD"),
							lk('Del').b('ch', '$parent.rmT')
					)
			).b("foreach:ts, visible:ts().length>0"),
			sp("You have"),
			$.B().A("&nbsp;").b('t', "inc().length"),
			$.sp("inc task(s)"),
			$.sp("- beer!").b("visible: inc().length==0")
	)
	ko.ab(TLVM())
}
KNOCKS = function () {
	$.format()
	s2(
			ul().k('fs').b('E', "fs")(
					li().b(
							"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
					)
			)
	)
	MVM = function () {
		var o = {}
		o.fs = ['I', 'A', 'Se', 'Sp']
		o.chFI = ko.o()
		o.gtf = function (f) {
			o.chFI(f)
		}
		return o
	}
	ko.ab(MVM())
}
KNOCKS = function () {
	$.format()
	s2(
			ul().k('fs').b('E', "fs")(
					li().b(
							"text:$data,css:{selected:$data==$root.chFI()},click:$root.gtf"
					)
			)
	)
	MVM = function () {
		var o = {}
		o.fs = ['I', 'A', 'Se', 'Sp']
		o.chFI = ko.o()
		o.gtf = function (f) {
			o.chFI(f)
		}
		return o
	}
	ko.ab(MVM())
}